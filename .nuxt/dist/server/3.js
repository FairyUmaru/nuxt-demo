exports.ids = [3];
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

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/editor/index.vue?vue&type=template&id=7f08b1a7&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"editor-page"},[_vm._ssrNode("<div class=\"container page\" data-v-7f08b1a7><div class=\"row\" data-v-7f08b1a7><div class=\"col-md-10 offset-md-1 col-xs-12\" data-v-7f08b1a7><form data-v-7f08b1a7><fieldset data-v-7f08b1a7><fieldset class=\"form-group\" data-v-7f08b1a7><input type=\"text\" placeholder=\"Article Title\""+(_vm._ssrAttr("value",(_vm.post.title)))+" class=\"form-control form-control-lg\" data-v-7f08b1a7></fieldset> <fieldset class=\"form-group\" data-v-7f08b1a7><input type=\"text\" placeholder=\"What's this article about?\""+(_vm._ssrAttr("value",(_vm.post.description)))+" class=\"form-control\" data-v-7f08b1a7></fieldset> <fieldset class=\"form-group\" data-v-7f08b1a7><textarea rows=\"8\" placeholder=\"Write your article (in markdown)\" class=\"form-control\" data-v-7f08b1a7>"+_vm._ssrEscape(_vm._s(_vm.post.body))+"</textarea></fieldset> <fieldset class=\"form-group\" data-v-7f08b1a7><input type=\"text\" placeholder=\"Enter tags\""+(_vm._ssrAttr("value",(_vm.tag)))+" class=\"form-control\" data-v-7f08b1a7> <div class=\"tag-list\" data-v-7f08b1a7>"+(_vm._ssrList((_vm.post.tagList),function(tag,index){return ("<span class=\"tag-default tag-pill ng-binding ng-scope\" data-v-7f08b1a7><i class=\"ion-close-round\" data-v-7f08b1a7></i>"+_vm._ssrEscape("\n                  "+_vm._s(tag)+"\n              ")+"</span>")}))+"</div></fieldset> <button type=\"button\" class=\"btn btn-lg pull-xs-right btn-primary\" data-v-7f08b1a7>\n              Publish Article\n            </button></fieldset></form></div></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/editor/index.vue?vue&type=template&id=7f08b1a7&scoped=true&

// EXTERNAL MODULE: ./api/article.js
var article = __webpack_require__(27);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/editor/index.vue?vue&type=script&lang=js&
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

/* harmony default export */ var editorvue_type_script_lang_js_ = ({
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
    };
  },

  async created() {
    if (this.$route.params.slug) {
      const {
        data
      } = await Object(article["e" /* getArticle */])(this.$route.params.slug);
      this.post = data.article;
    }
  },

  methods: {
    addTag(e) {
      console.log(e);

      if (e.key == 'Enter') {
        this.post.tagList.push(this.tag);
        this.tag = '';
      }
    },

    deleteTag(index) {
      this.post.tagList.splice(index, 1);
    },

    // 发布更新文章
    async onAddPost() {
      let {
        slug
      } = this.$route.params;
      const {
        data
      } = slug ? await Object(article["i" /* updatePost */])(slug, this.post) : await Object(article["c" /* addPost */])(this.post);
      console.log(data); // success

      if (data.article) {
        this.$router.push({
          name: 'article',
          params: {
            slug: data.article.slug
          }
        });
      }
    }

  }
});
// CONCATENATED MODULE: ./pages/editor/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_editorvue_type_script_lang_js_ = (editorvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/editor/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_editorvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "7f08b1a7",
  "cbbe2edc"
  
)

/* harmony default export */ var editor = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=3.js.map