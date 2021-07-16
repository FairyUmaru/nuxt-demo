const cookieparser = process.server ? require('cookieparser') : undefined
const state = () => {
  return {
    // 用户登录状态
    user: null
  }
}

const mutations = {
  setUser (state, data) {
    state.user = data
  }
}

const actions = {
  //nuxt中特殊的action方法
  //这个action会在服务器渲染期间自动调用
  //主要作用： 初始化容器数据，传递数据给客户端使用
  nuxtServerInit ({ commit }, { req }) {
    // console.log(req.headers)
    let user = null

  //  如果请求头中有Cookie
    if(req.headers.cookie) {
      // cookieparser 把 cookie字符串转换为对象
      const parsed = cookieparser.parse(req.headers.cookie)
      try {
        user = JSON.parse(parsed.user)
      } catch (err) {

      }
    }

  //  提交mutation 修改state状态
    commit('setUser', user)
  },
  setUser ({commit}, data){
    commit('setUser', data)
  }

}

export default {
  state,
  mutations,
  actions
}
