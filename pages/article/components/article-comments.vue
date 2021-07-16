<template>
  <div>
    <form class="card comment-form"
          @submit.prevent="addComment">
      <div class="card-block">
        <textarea
            class="form-control"
            placeholder="Write a comment..."
            rows="3"
            v-model="writeComment"></textarea>
      </div>
      <div class="card-footer">
        <img :src="user.image" class="comment-author-img" />
        <button class="btn btn-sm btn-primary">
          Post Comment
        </button>
      </div>
    </form>

    <div class="card"
         v-for="comment in comments"
         :key="comment.id">
      <div class="card-block">
        <p class="card-text">{{comment.body}}</p>
      </div>
      <div class="card-footer">
        <nuxt-link class="comment-author"
        :to="{
          name: 'profile',
          params: {
            username: comment.author.username
          }
        }">
          <img :src="comment.author.image" class="comment-author-img" />
        </nuxt-link>
        &nbsp;
        <nuxt-link class="comment-author"
        :to="{
          name: 'profile',
          params: {
            username: comment.author.username
          }
        }">{{comment.author.username}}</nuxt-link>
        <span class="date-posted">{{ comment.createdAt | date('MMM DD, YYYY') }}</span>
      </div>
    </div>


  </div>
</template>

<script>
import { getComments, addComments } from '@/api/article'
import { mapState } from 'vuex'
export default {
  name: 'articleComments',
  data(){
    return {
      comments: [],
      writeComment: ''
    }
  },
  props: {
    slug: {
      type: String,
      required: true
    }
  },
  computed: {
    ...mapState(['user'])
  },
  async mounted () {
    this.getCommentList()
  },
  methods: {
    async getCommentList() {
      const { data } = await getComments(this.slug)
      console.log(data)
      this.comments = data.comments
    },
    async addComment() {
      let body = {
        comment: {
          "body": this.writeComment
        }
      }
      const { data } = await addComments(this.slug, body)
      // 发布成功
      if(data.comment) {
        this.writeComment = ''
        this.getCommentList()
      }
    }
  }
}
</script>

<style scoped>

</style>
