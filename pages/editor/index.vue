<template>
  <div class="editor-page">
    <div class="container page">
      <div class="row">

        <div class="col-md-10 offset-md-1 col-xs-12">
          <form>
            <fieldset>
              <fieldset class="form-group">
                <input
                    type="text"
                    class="form-control form-control-lg"
                    placeholder="Article Title"
                    v-model="post.title">
              </fieldset>
              <fieldset class="form-group">
                <input
                    type="text"
                    class="form-control"
                    placeholder="What's this article about?"
                    v-model="post.description">
              </fieldset>
              <fieldset class="form-group">
                <textarea
                    class="form-control"
                    rows="8"
                    placeholder="Write your article (in markdown)"
                    v-model="post.body"></textarea>
              </fieldset>
              <fieldset class="form-group">
                <input
                    type="text"
                    class="form-control"
                    placeholder="Enter tags"
                    v-model="tag"
                    @keydown="addTag">
                <div class="tag-list">
                  <span class="tag-default tag-pill ng-binding ng-scope"
                        v-for="(tag, index) in post.tagList"
                        :key="index">
                    <i class="ion-close-round" @click="deleteTag(index)"></i>
                    {{tag}}
                </span>
                </div>
              </fieldset>
              <button
                  class="btn btn-lg pull-xs-right btn-primary"
                  type="button"
                  @click="onAddPost">
                Publish Article
              </button>
            </fieldset>
          </form>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import { getArticle, addPost, updatePost } from '@/api/article'

export default {
  // 在路由匹配组件渲染之前会先执行中间件处理
  middleware: 'authenticated',
  name: 'EditorIndex',
  data() {
    return {
      tag: '',
      post: {
        title: '',
        description: '',
        body: '',
        tagList: []
      }
    }
  },
  async created () {
    if(this.$route.params.slug){
      const {data} = await getArticle(this.$route.params.slug)
      this.post = data.article
    }
  },
  methods: {
    addTag(e) {
      console.log(e)
      if (e.key == 'Enter') {
        this.post.tagList.push(this.tag)
        this.tag = ''
      }
    },
    deleteTag(index) {
      this.post.tagList.splice(index, 1)
    },
    // 发布更新文章
    async onAddPost() {
      let { slug } = this.$route.params
      const {data} = slug
          ? await updatePost(slug, this.post)
          : await addPost(this.post)

      console.log(data)
      // success
      if (data.article) {
        this.$router.push({
          name: 'article',
          params: {
            slug: data.article.slug
          }
        })
      }
    }
  }
}
</script>

<style scoped>

</style>
