<template>
  <div class="profile-page">

    <div class="user-info">
      <div class="container">
        <div class="row">

          <div class="col-xs-12 col-md-10 offset-md-1">
            <img :src="user.image" class="user-img" />
            <h4>{{user.username}}</h4>
            <p>
              {{user.bio}}
            </p>
            <button class="btn btn-sm btn-outline-secondary action-btn">
              <i class="ion-plus-round"></i>
              &nbsp;
              Follow Eric Simons
            </button>
          </div>

        </div>
      </div>
    </div>

    <div class="container">
      <div class="row">

        <div class="col-xs-12 col-md-10 offset-md-1">
          <div class="articles-toggle">
            <ul class="nav nav-pills outline-active">
              <li class="nav-item">
                <nuxt-link
                    class="nav-link"
                    :class="{active : !$route.params.tag }"
                    exact
                    :to="{
                    name: 'profile',
                    params: {
                      username: user.username
                    }
                }">My Articles</nuxt-link>
              </li>
              <li class="nav-item">
                <nuxt-link
                    class="nav-link"
                    :class="{active : $route.params.tag == 'favorites'}"
                    exact
                    :to="{
                  path: `/profile/${user.username}/favorites`
                }">Favorited Articles</nuxt-link>
              </li>
            </ul>
          </div>


          <!-- 文章列表-->
          <template v-if="articles.length>0">
          <div class="article-preview"
               v-for="article in articles"
               :key="article.slug">
            <div class="article-meta">
              <a href="profile.html"></a>
              <!-- 动态路由传参-->
              <nuxt-link :to="{
                  name: 'profile',
                  params: {
                    username: article.author.username
                  }
              }">
                <img :src="article.author.image" />
              </nuxt-link>
              <div class="info">
                <nuxt-link :to="{
                  name: 'profile',
                  params: {
                    username: article.author.username
                  }
                }" class="author">
                  {{article.author.username}}
                </nuxt-link>
                <span class="date">{{article.createdAt | date('MMM DD,YYYY')}}</span>
              </div>
              <button
                  class="btn btn-outline-primary btn-sm pull-xs-right"
                  :class="{ active: article.favorited }"
                  @click="onFavorite(article)"
                  :disabled="article.favoriteDisabled"
              >
                <i class="ion-heart"></i> {{article.favoritesCount}}
              </button>
            </div>
            <nuxt-link class="preview-link" :to="{
                  name: 'article',
                  params: {
                    slug: article.slug
                  }
             }">
              <h1>{{article.title}}</h1>
              <p>{{article.description}}</p>
              <span>Read more...</span>
              <ul class="tag-list">
                <li v-for="tag in article.tagList" class="tag-default tag-pill tag-outline">{{tag}}</li>
              </ul>
            </nuxt-link>
          </div>
          </template>
          <template v-else>
            <div class="article-preview">
              No articles are here... yet.
            </div>
          </template>
        </div>

      </div>
    </div>

  </div>
</template>

<script>
import { mapState } from 'vuex'
import { getProfile } from '@/api/user'
import { getArticles } from '@/api/article'
export default {
  middleware: 'authenticated',
  name: 'UserIndex',
  data() {
    return {
      articles: []
    }
  },
  computed: {
    ...mapState(['user'])
  },
  async created () {
    const {data} = await getProfile(this.$route.params.username)
    console.log(data)
    this.getArticlesList()
  },
  methods: {
    async getArticlesList() {
      const body = this.$route.params.tag
          ? {
            limit: 10000,
            offset: 0,
            favorited: this.user.username
          }
          : {
            limit: 10000,
            offset: 0,
            author: this.user.username
          }
      const {data} = await getArticles(body)
      console.log(data)
      this.articles = data.articles
    }
  },
  watch: {
    $route(to, from) {
      if(to.path != from.path) {
        this.getArticlesList()
      }
    }
  }
}
</script>

<style scoped>

</style>
