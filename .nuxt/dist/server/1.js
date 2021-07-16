exports.ids = [1];
exports.modules = {

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return getArticles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return getFeedArticles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return addFavorite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return deleteFavorite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getArticle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getComments; });
/* unused harmony export deleteComments */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addComments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return addPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return updatePost; });
/* harmony import */ var _plugins_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
 // 获取公共的文章列表

const getArticles = params => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'get',
    url: '/api/articles',
    params
  });
}; // 获取关注的用户的文章列表

const getFeedArticles = params => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'get',
    url: '/api/articles/feed',
    //Authorization: Token jwt.token.here
    // headers: {
    //   // 注意数据格式Token空格数据
    //   Authorization: `Token eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MTc4MTIyLCJ1c2VybmFtZSI6Imx4anRlc3QiLCJleHAiOjE2MzA3NTM5MTB9.wzXTFNH3QQtQwXi-UaOPlVwZw7JbGN2dDrJZHYZMitA`,
    // },
    params
  });
}; // 添加点赞

const addFavorite = slug => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'POST',
    url: `/api/articles/${slug}/favorite`
  });
}; // 取消点赞

const deleteFavorite = slug => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'DELETE',
    url: `/api/articles/${slug}/favorite`
  });
}; // 获取文章详情

const getArticle = slug => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'GET',
    url: `/api/articles/${slug}`
  });
}; // 获取文章评论

const getComments = slug => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'GET',
    url: `/api/articles/${slug}/comments`
  });
}; // 删除文章评论

const deleteComments = (slug, id) => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'DELETE',
    url: `/api/articles/${slug}/comments/${id}`
  });
}; // 添加文章评论

const addComments = (slug, data) => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'POST',
    url: `/api/articles/${slug}/comments`,
    data
  });
}; // 发布文章

const addPost = data => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'POST',
    url: `/api/articles`,
    data
  });
}; // 修改文章

const updatePost = (slug, data) => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'PUT',
    url: `/api/articles/${slug}`,
    data
  });
};

/***/ }),

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

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/profile/index.vue?vue&type=template&id=139f5e8f&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"profile-page"},[_vm._ssrNode("<div class=\"user-info\" data-v-139f5e8f><div class=\"container\" data-v-139f5e8f><div class=\"row\" data-v-139f5e8f><div class=\"col-xs-12 col-md-10 offset-md-1\" data-v-139f5e8f><img"+(_vm._ssrAttr("src",_vm.user.image))+" class=\"user-img\" data-v-139f5e8f> <h4 data-v-139f5e8f>"+_vm._ssrEscape(_vm._s(_vm.user.username))+"</h4> <p data-v-139f5e8f>"+_vm._ssrEscape("\n            "+_vm._s(_vm.user.bio)+"\n          ")+"</p> <button class=\"btn btn-sm btn-outline-secondary action-btn\" data-v-139f5e8f><i class=\"ion-plus-round\" data-v-139f5e8f></i>\n             \n            Follow Eric Simons\n          </button></div></div></div></div> "),_vm._ssrNode("<div class=\"container\" data-v-139f5e8f>","</div>",[_vm._ssrNode("<div class=\"row\" data-v-139f5e8f>","</div>",[_vm._ssrNode("<div class=\"col-xs-12 col-md-10 offset-md-1\" data-v-139f5e8f>","</div>",[_vm._ssrNode("<div class=\"articles-toggle\" data-v-139f5e8f>","</div>",[_vm._ssrNode("<ul class=\"nav nav-pills outline-active\" data-v-139f5e8f>","</ul>",[_vm._ssrNode("<li class=\"nav-item\" data-v-139f5e8f>","</li>",[_c('nuxt-link',{staticClass:"nav-link",class:{active : !_vm.$route.params.tag },attrs:{"exact":"","to":{
                  name: 'profile',
                  params: {
                    username: _vm.user.username
                  }
              }}},[_vm._v("My Articles")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"nav-item\" data-v-139f5e8f>","</li>",[_c('nuxt-link',{staticClass:"nav-link",class:{active : _vm.$route.params.tag == 'favorites'},attrs:{"exact":"","to":{
                path: ("/profile/" + (_vm.user.username) + "/favorites")
              }}},[_vm._v("Favorited Articles")])],1)],2)]),_vm._ssrNode(" "),(_vm.articles.length>0)?_vm._l((_vm.articles),function(article){return _vm._ssrNode("<div class=\"article-preview\" data-v-139f5e8f>","</div>",[_vm._ssrNode("<div class=\"article-meta\" data-v-139f5e8f>","</div>",[_vm._ssrNode("<a href=\"profile.html\" data-v-139f5e8f></a> "),_c('nuxt-link',{attrs:{"to":{
                name: 'profile',
                params: {
                  username: article.author.username
                }
            }}},[_c('img',{attrs:{"src":article.author.image}})]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"info\" data-v-139f5e8f>","</div>",[_c('nuxt-link',{staticClass:"author",attrs:{"to":{
                name: 'profile',
                params: {
                  username: article.author.username
                }
              }}},[_vm._v("\n                "+_vm._s(article.author.username)+"\n              ")]),_vm._ssrNode(" <span class=\"date\" data-v-139f5e8f>"+_vm._ssrEscape(_vm._s(_vm._f("date")(article.createdAt,'MMM DD,YYYY')))+"</span>")],2),_vm._ssrNode(" <button"+(_vm._ssrAttr("disabled",article.favoriteDisabled))+(_vm._ssrClass("btn btn-outline-primary btn-sm pull-xs-right",{ active: article.favorited }))+" data-v-139f5e8f><i class=\"ion-heart\" data-v-139f5e8f></i>"+_vm._ssrEscape(" "+_vm._s(article.favoritesCount)+"\n            ")+"</button>")],2),_vm._ssrNode(" "),_c('nuxt-link',{staticClass:"preview-link",attrs:{"to":{
                name: 'article',
                params: {
                  slug: article.slug
                }
           }}},[_c('h1',[_vm._v(_vm._s(article.title))]),_vm._v(" "),_c('p',[_vm._v(_vm._s(article.description))]),_vm._v(" "),_c('span',[_vm._v("Read more...")]),_vm._v(" "),_c('ul',{staticClass:"tag-list"},_vm._l((article.tagList),function(tag){return _c('li',{staticClass:"tag-default tag-pill tag-outline"},[_vm._v(_vm._s(tag))])}),0)])],2)}):_vm._ssrNode("<div class=\"article-preview\" data-v-139f5e8f>\n            No articles are here... yet.\n          </div>")],2)])])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/profile/index.vue?vue&type=template&id=139f5e8f&scoped=true&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(3);

// EXTERNAL MODULE: ./api/user.js
var user = __webpack_require__(28);

// EXTERNAL MODULE: ./api/article.js
var article = __webpack_require__(27);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/profile/index.vue?vue&type=script&lang=js&
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



/* harmony default export */ var profilevue_type_script_lang_js_ = ({
  middleware: 'authenticated',
  name: 'UserIndex',

  data() {
    return {
      articles: []
    };
  },

  computed: { ...Object(external_vuex_["mapState"])(['user'])
  },

  async created() {
    const {
      data
    } = await Object(user["a" /* getProfile */])(this.$route.params.username);
    console.log(data);
    this.getArticlesList();
  },

  methods: {
    async getArticlesList() {
      const body = this.$route.params.tag ? {
        limit: 10000,
        offset: 0,
        favorited: this.user.username
      } : {
        limit: 10000,
        offset: 0,
        author: this.user.username
      };
      const {
        data
      } = await Object(article["f" /* getArticles */])(body);
      console.log(data);
      this.articles = data.articles;
    }

  },
  watch: {
    $route(to, from) {
      if (to.path != from.path) {
        this.getArticlesList();
      }
    }

  }
});
// CONCATENATED MODULE: ./pages/profile/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_profilevue_type_script_lang_js_ = (profilevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/profile/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_profilevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "139f5e8f",
  "5ab9b67a"
  
)

/* harmony default export */ var profile = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=1.js.map