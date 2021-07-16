<template>
  <div class="article-meta">
    <nuxt-link :to="{
      name: 'profile',
      params: {
        username: article.author.username
      }
    }">
      <img :src="article.author.image" />
    </nuxt-link>
    <div class="info">
      <nuxt-link class="author" :to="{
      name: 'profile',
      params: {
        username: article.author.username
      }
    }">{{article.author.username}}</nuxt-link>
      <span class="date">{{ article.createdAt | date('MMM DD, YYYY') }}</span>
    </div>
    <template v-if="article.author.username == user.username">
      <nuxt-link
          class="btn btn-outline-secondary btn-sm"
          :to="{
            name: 'editor',
            params: {
              slug: article.slug
            }
          }">
        <i class="ion-edit"></i> Edit Article
      </nuxt-link>

      <button class="btn btn-outline-danger btn-sm">
        <i class="ion-trash-a"></i> Delete Article
      </button>
    </template>
    <template v-else>
      <button
          class="btn btn-sm btn-outline-secondary"
          :class="{active : article.author.following}">
        <i class="ion-plus-round"></i>
        &nbsp;
        Follow Eric Simons <span class="counter">{{article.author.bio}}</span>
      </button>
      &nbsp;&nbsp;
      <button
          class="btn btn-sm btn-outline-primary"
          :class="{active : article.favorited}"
          @click="onFavorite(article)"
          :disabled="article.favoriteDisabled">
        <i class="ion-heart"></i>
        &nbsp;
        Favorite Post <span class="counter">{{article.favoritesCount}}</span>
      </button>
    </template>
  </div>
</template>

<script>
import { addFavorite, deleteFavorite } from '@/api/article'
import { mapState } from 'vuex'
export default {
  name: 'articleMeta',
  props: {
    article: {
      type: Object,
      required: true
    }
  },
  computed: {
    ...mapState(['user'])
  },
  methods: {
    async onFavorite (article) {
      console.log(article)
      if(article.favoriteDisabled) return
      article.favoriteDisabled = true
      // 已经点赞
      if(article.favorited){
        //  取消点赞
        await deleteFavorite(article.slug)
        article.favorited =  false
        article.favoritesCount += -1
      }else{
        //添加点赞
        await addFavorite(article.slug)
        article.favorited = true
        article.favoritesCount += 1
      }
      article.favoriteDisabled = false
    }
  }
}
</script>

<style scoped>

</style>
