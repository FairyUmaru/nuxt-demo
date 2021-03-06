import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _f3c6bb76 = () => interopDefault(import('../pages/layout' /* webpackChunkName: "" */))
const _1150b28c = () => interopDefault(import('../pages/home' /* webpackChunkName: "" */))
const _18550e24 = () => interopDefault(import('../pages/login' /* webpackChunkName: "" */))
const _2d81c5ee = () => interopDefault(import('../pages/profile' /* webpackChunkName: "" */))
const _13f7087e = () => interopDefault(import('../pages/settings' /* webpackChunkName: "" */))
const _7a4dc888 = () => interopDefault(import('../pages/editor' /* webpackChunkName: "" */))
const _144c093b = () => interopDefault(import('../pages/article' /* webpackChunkName: "" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/",
    component: _f3c6bb76,
    children: [{
      path: "",
      component: _1150b28c,
      name: "home"
    }, {
      path: "/login",
      component: _18550e24,
      name: "login"
    }, {
      path: "/register",
      component: _18550e24,
      name: "register"
    }, {
      path: "/profile/:username",
      component: _2d81c5ee,
      name: "profile"
    }, {
      path: "/profile/:username/:tag",
      component: _2d81c5ee,
      name: "profile"
    }, {
      path: "/settings",
      component: _13f7087e,
      name: "settings"
    }, {
      path: "/editor",
      component: _7a4dc888,
      name: "editor"
    }, {
      path: "/article/:slug",
      component: _144c093b,
      name: "article"
    }]
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
