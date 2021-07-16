<template>
  <div class="settings-page">
    <div class="container page">
      <div class="row">

        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">Your Settings</h1>

          <form>
            <fieldset>
              <fieldset class="form-group">
                <input
                    class="form-control"
                    type="text"
                    placeholder="URL of profile picture"
                    v-model="user.image">
              </fieldset>
              <fieldset class="form-group">
                <input
                    class="form-control form-control-lg"
                    type="text"
                    placeholder="Your Name"
                    v-model="user.username">
              </fieldset>
              <fieldset class="form-group">
                <textarea
                    class="form-control form-control-lg"
                    rows="8"
                    placeholder="Short bio about you"
                    v-model="user.bio"></textarea>
              </fieldset>
              <fieldset class="form-group">
                <input
                    class="form-control form-control-lg"
                    type="text"
                    placeholder="Email"
                    v-model="user.email">
              </fieldset>
              <fieldset class="form-group">
                <input
                    class="form-control form-control-lg"
                    type="password"
                    placeholder="Password"
                    v-model="user.password">
              </fieldset>
              <button
                  class="btn btn-lg btn-primary pull-xs-right"
                  @click.prevent="onUpdate">
                Update Settings
              </button>
            </fieldset>
          </form>
          <hr>
          <button
              class="btn btn-outline-danger"
              @click="onLogout">
            Or click here to logout.
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { updateUser } from '@/api/user'
import { mapState } from 'vuex'
// 仅在客户端加载 js-cookie 包
// process.client 是nuxt.js提供的数据
const Cookie = process.client ? require('js-cookie') : undefined
export default {
  middleware: 'authenticated',
  name: 'SettingsIndex',
  data() {
    return {
      user: {
        image: '',
        username: '',
        bio: '',
        email: '',
        password: ''
      }
    }
  },
  created () {
    this.user = Object.assign({}, this.$store.state.user)
  },
  methods: {
    // 更新个人信息
    async onUpdate() {
      const {data} = await updateUser(this.user)
      console.log(this.user, data)
      if( data.user ) {
        this.$store.commit('setUser', data.user)
      }
    },
    // 退出登录
    onLogout() {
      Cookie.remove('user')
      this.$store.commit('setUser', null)
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped>

</style>
