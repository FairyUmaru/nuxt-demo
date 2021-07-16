exports.ids = [6];
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

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/settings/index.vue?vue&type=template&id=a866b622&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"settings-page"},[_vm._ssrNode("<div class=\"container page\" data-v-a866b622><div class=\"row\" data-v-a866b622><div class=\"col-md-6 offset-md-3 col-xs-12\" data-v-a866b622><h1 class=\"text-xs-center\" data-v-a866b622>Your Settings</h1> <form data-v-a866b622><fieldset data-v-a866b622><fieldset class=\"form-group\" data-v-a866b622><input type=\"text\" placeholder=\"URL of profile picture\""+(_vm._ssrAttr("value",(_vm.user.image)))+" class=\"form-control\" data-v-a866b622></fieldset> <fieldset class=\"form-group\" data-v-a866b622><input type=\"text\" placeholder=\"Your Name\""+(_vm._ssrAttr("value",(_vm.user.username)))+" class=\"form-control form-control-lg\" data-v-a866b622></fieldset> <fieldset class=\"form-group\" data-v-a866b622><textarea rows=\"8\" placeholder=\"Short bio about you\" class=\"form-control form-control-lg\" data-v-a866b622>"+_vm._ssrEscape(_vm._s(_vm.user.bio))+"</textarea></fieldset> <fieldset class=\"form-group\" data-v-a866b622><input type=\"text\" placeholder=\"Email\""+(_vm._ssrAttr("value",(_vm.user.email)))+" class=\"form-control form-control-lg\" data-v-a866b622></fieldset> <fieldset class=\"form-group\" data-v-a866b622><input type=\"password\" placeholder=\"Password\""+(_vm._ssrAttr("value",(_vm.user.password)))+" class=\"form-control form-control-lg\" data-v-a866b622></fieldset> <button class=\"btn btn-lg btn-primary pull-xs-right\" data-v-a866b622>\n              Update Settings\n            </button></fieldset></form> <hr data-v-a866b622> <button class=\"btn btn-outline-danger\" data-v-a866b622>\n          Or click here to logout.\n        </button></div></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/settings/index.vue?vue&type=template&id=a866b622&scoped=true&

// EXTERNAL MODULE: ./api/user.js
var user = __webpack_require__(28);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/settings/index.vue?vue&type=script&lang=js&
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
/* harmony default export */ var settingsvue_type_script_lang_js_ = ({
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
    };
  },

  created() {
    this.user = Object.assign({}, this.$store.state.user);
  },

  methods: {
    // 更新个人信息
    async onUpdate() {
      const {
        data
      } = await Object(user["d" /* updateUser */])(this.user);
      console.log(this.user, data);

      if (data.user) {
        this.$store.commit('setUser', data.user);
      }
    },

    // 退出登录
    onLogout() {
      Cookie.remove('user');
      this.$store.commit('setUser', null);
      this.$router.push('/login');
    }

  }
});
// CONCATENATED MODULE: ./pages/settings/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_settingsvue_type_script_lang_js_ = (settingsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/settings/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_settingsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "a866b622",
  "7c062d48"
  
)

/* harmony default export */ var settings = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=6.js.map