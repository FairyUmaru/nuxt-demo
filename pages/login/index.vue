<template>
  <div class="auth-page">
    <div class="container page">
      <div class="row">

        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">{{ isLogin ? 'Sign in' : 'Sign up'}}</h1>
          <p class="text-xs-center">
<!--            <a href="">Have an account?</a>-->
            <nuxt-link v-if="isLogin" to="/register">Need an account?</nuxt-link>
            <nuxt-link v-else to="/login">Have an account?</nuxt-link>

          </p>

          <ul class="error-messages">
            <!-- 遍历对象 （value，key，i）in obj-->
            <template v-for="(messages, filed) in errors">
              <!-- 遍历数组-->
              <li v-for="(message, index) in messages" :key="index">{{filed}} {{message}}</li>
            </template>

          </ul>

          <form @submit.prevent="onSubmit">
            <fieldset v-if="!isLogin" class="form-group">
              <input required v-model="user.username" class="form-control form-control-lg" type="text" placeholder="Your Name">
            </fieldset>
            <fieldset class="form-group">
              <input required v-model="user.email" class="form-control form-control-lg" type="email" placeholder="Email">
            </fieldset>
            <fieldset class="form-group">
              <input required v-model="user.password" minlength="8" class="form-control form-control-lg" type="password" placeholder="Password">
            </fieldset>
            <button class="btn btn-lg btn-primary pull-xs-right">
              {{ isLogin ? 'Sign in' : 'Sign up'}}
            </button>
          </form>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import { login, register } from '@/api/user'
// 仅在客户端加载 js-cookie 包
// process.client 是nuxt.js提供的数据
const Cookie = process.client ? require('js-cookie') : undefined

export default {
  middleware: 'notAuthenticated',
  name: 'LoginIndex',
  data() {
    return {
      user: {
        username: '',
        email: '',
        password: ''
      },
      errors: {}
    }
  },
  computed: {
    isLogin () {
      return this.$route.name === 'login'
    }
  },
  methods: {
    async onSubmit() {
      try {
        //  提交表单请求
        const { data } = this.isLogin
            ? await login({
                user: this.user
              })
            : await register({
              user: this.user
            })

        console.log(data)
        //  TODO: 保持用户的登录状态
        this.$store.commit('setUser', data.user)

        //为了防止刷新页面数据丢失，我们需要把数据持久化
        Cookie.set('user', data.user)

        //  跳转首页
        this.$router.push('/')
      } catch (e) {
        this.errors = e.response.data.errors
      }
    }
  }
}
</script>

<style scoped>

</style>
