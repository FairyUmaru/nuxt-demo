exports.ids = [5];
exports.modules = {

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return updateUser; });
/* harmony import */ var _plugins_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
 // 用户登录

const login = data => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'POST',
    url: '/api/users/login',
    data
  });
}; //用户注册

const register = data => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'POST',
    url: '/api/users',
    data
  });
}; //获取个人信息

const getProfile = username => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'GET',
    url: `/api/profiles/${username}`
  });
};
const updateUser = data => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'PUT',
    url: `/api/user`,
    data
  });
};

/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/login/index.vue?vue&type=template&id=17282a12&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"auth-page"},[_vm._ssrNode("<div class=\"container page\" data-v-17282a12>","</div>",[_vm._ssrNode("<div class=\"row\" data-v-17282a12>","</div>",[_vm._ssrNode("<div class=\"col-md-6 offset-md-3 col-xs-12\" data-v-17282a12>","</div>",[_vm._ssrNode("<h1 class=\"text-xs-center\" data-v-17282a12>"+_vm._ssrEscape(_vm._s(_vm.isLogin ? 'Sign in' : 'Sign up'))+"</h1> "),_vm._ssrNode("<p class=\"text-xs-center\" data-v-17282a12>","</p>",[(_vm.isLogin)?_c('nuxt-link',{attrs:{"to":"/register"}},[_vm._v("Need an account?")]):_c('nuxt-link',{attrs:{"to":"/login"}},[_vm._v("Have an account?")])],1),_vm._ssrNode(" <ul class=\"error-messages\" data-v-17282a12>"+(_vm._ssrList((_vm.errors),function(messages,filed){return ((_vm._ssrList((messages),function(message,index){return ("<li data-v-17282a12>"+_vm._ssrEscape(_vm._s(filed)+" "+_vm._s(message))+"</li>")})))}))+"</ul> <form data-v-17282a12>"+((!_vm.isLogin)?("<fieldset class=\"form-group\" data-v-17282a12><input required=\"required\" type=\"text\" placeholder=\"Your Name\""+(_vm._ssrAttr("value",(_vm.user.username)))+" class=\"form-control form-control-lg\" data-v-17282a12></fieldset>"):"<!---->")+" <fieldset class=\"form-group\" data-v-17282a12><input required=\"required\" type=\"email\" placeholder=\"Email\""+(_vm._ssrAttr("value",(_vm.user.email)))+" class=\"form-control form-control-lg\" data-v-17282a12></fieldset> <fieldset class=\"form-group\" data-v-17282a12><input required=\"required\" minlength=\"8\" type=\"password\" placeholder=\"Password\""+(_vm._ssrAttr("value",(_vm.user.password)))+" class=\"form-control form-control-lg\" data-v-17282a12></fieldset> <button class=\"btn btn-lg btn-primary pull-xs-right\" data-v-17282a12>"+_vm._ssrEscape("\n              "+_vm._s(_vm.isLogin ? 'Sign in' : 'Sign up')+"\n            ")+"</button></form>")],2)])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/login/index.vue?vue&type=template&id=17282a12&scoped=true&

// EXTERNAL MODULE: ./api/user.js
var user = __webpack_require__(28);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/login/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
 // 仅在客户端加载 js-cookie 包
// process.client 是nuxt.js提供的数据

const Cookie =  false ? undefined : undefined;
/* harmony default export */ var loginvue_type_script_lang_js_ = ({
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
    };
  },

  computed: {
    isLogin() {
      return this.$route.name === 'login';
    }

  },
  methods: {
    async onSubmit() {
      try {
        //  提交表单请求
        const {
          data
        } = this.isLogin ? await Object(user["b" /* login */])({
          user: this.user
        }) : await Object(user["c" /* register */])({
          user: this.user
        });
        console.log(data); //  TODO: 保持用户的登录状态

        this.$store.commit('setUser', data.user); //为了防止刷新页面数据丢失，我们需要把数据持久化

        Cookie.set('user', data.user); //  跳转首页

        this.$router.push('/');
      } catch (e) {
        this.errors = e.response.data.errors;
      }
    }

  }
});
// CONCATENATED MODULE: ./pages/login/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_loginvue_type_script_lang_js_ = (loginvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/login/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_loginvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "17282a12",
  "1185b1ba"
  
)

/* harmony default export */ var login = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=5.js.map