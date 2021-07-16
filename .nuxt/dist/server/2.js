exports.ids = [2];
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

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/index.vue?vue&type=template&id=37b2609f&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"article-page"},[_vm._ssrNode("<div class=\"banner\" data-v-37b2609f>","</div>",[_vm._ssrNode("<div class=\"container\" data-v-37b2609f>","</div>",[_vm._ssrNode("<h1 data-v-37b2609f>"+_vm._ssrEscape(_vm._s(_vm.article.title))+"</h1> "),_c('article-meta',{attrs:{"article":_vm.article}})],2)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"container page\" data-v-37b2609f>","</div>",[_vm._ssrNode("<div class=\"row article-content\" data-v-37b2609f><div class=\"col-md-12\" data-v-37b2609f>"+(_vm._s(_vm.article.body))+"</div></div> <hr data-v-37b2609f> "),_vm._ssrNode("<div class=\"article-actions\" data-v-37b2609f>","</div>",[_c('article-meta',{attrs:{"article":_vm.article}})],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"row\" data-v-37b2609f>","</div>",[_vm._ssrNode("<div class=\"col-xs-12 col-md-8 offset-md-2\" data-v-37b2609f>","</div>",[_c('article-comments',{attrs:{"slug":_vm.article.slug}})],1)])],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/article/index.vue?vue&type=template&id=37b2609f&scoped=true&

// EXTERNAL MODULE: ./api/article.js
var api_article = __webpack_require__(27);

// EXTERNAL MODULE: external "markdown-it"
var external_markdown_it_ = __webpack_require__(26);
var external_markdown_it_default = /*#__PURE__*/__webpack_require__.n(external_markdown_it_);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/components/article-meta.vue?vue&type=template&id=293948b2&scoped=true&
var article_metavue_type_template_id_293948b2_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"article-meta"},[_c('nuxt-link',{attrs:{"to":{
    name: 'profile',
    params: {
      username: _vm.article.author.username
    }
  }}},[_c('img',{attrs:{"src":_vm.article.author.image}})]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"info\" data-v-293948b2>","</div>",[_c('nuxt-link',{staticClass:"author",attrs:{"to":{
    name: 'profile',
    params: {
      username: _vm.article.author.username
    }
  }}},[_vm._v(_vm._s(_vm.article.author.username))]),_vm._ssrNode(" <span class=\"date\" data-v-293948b2>"+_vm._ssrEscape(_vm._s(_vm._f("date")(_vm.article.createdAt,'MMM DD, YYYY')))+"</span>")],2),_vm._ssrNode(" "),(_vm.article.author.username == _vm.user.username)?[_c('nuxt-link',{staticClass:"btn btn-outline-secondary btn-sm",attrs:{"to":{
          name: 'editor',
          params: {
            slug: _vm.article.slug
          }
        }}},[_c('i',{staticClass:"ion-edit"}),_vm._v(" Edit Article\n    ")]),_vm._ssrNode(" <button class=\"btn btn-outline-danger btn-sm\" data-v-293948b2><i class=\"ion-trash-a\" data-v-293948b2></i> Delete Article\n    </button>")]:_vm._ssrNode("<button"+(_vm._ssrClass("btn btn-sm btn-outline-secondary",{active : _vm.article.author.following}))+" data-v-293948b2><i class=\"ion-plus-round\" data-v-293948b2></i>\n       \n      Follow Eric Simons <span class=\"counter\" data-v-293948b2>"+_vm._ssrEscape(_vm._s(_vm.article.author.bio))+"</span></button>\n      \n    <button"+(_vm._ssrAttr("disabled",_vm.article.favoriteDisabled))+(_vm._ssrClass("btn btn-sm btn-outline-primary",{active : _vm.article.favorited}))+" data-v-293948b2><i class=\"ion-heart\" data-v-293948b2></i>\n       \n      Favorite Post <span class=\"counter\" data-v-293948b2>"+_vm._ssrEscape(_vm._s(_vm.article.favoritesCount))+"</span></button>")],2)}
var article_metavue_type_template_id_293948b2_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./pages/article/components/article-meta.vue?vue&type=template&id=293948b2&scoped=true&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/components/article-meta.vue?vue&type=script&lang=js&
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


/* harmony default export */ var article_metavue_type_script_lang_js_ = ({
  name: 'articleMeta',
  props: {
    article: {
      type: Object,
      required: true
    }
  },
  computed: { ...Object(external_vuex_["mapState"])(['user'])
  },
  methods: {
    async onFavorite(article) {
      console.log(article);
      if (article.favoriteDisabled) return;
      article.favoriteDisabled = true; // 已经点赞

      if (article.favorited) {
        //  取消点赞
        await Object(api_article["d" /* deleteFavorite */])(article.slug);
        article.favorited = false;
        article.favoritesCount += -1;
      } else {
        //添加点赞
        await Object(api_article["b" /* addFavorite */])(article.slug);
        article.favorited = true;
        article.favoritesCount += 1;
      }

      article.favoriteDisabled = false;
    }

  }
});
// CONCATENATED MODULE: ./pages/article/components/article-meta.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_article_metavue_type_script_lang_js_ = (article_metavue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/article/components/article-meta.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_article_metavue_type_script_lang_js_,
  article_metavue_type_template_id_293948b2_scoped_true_render,
  article_metavue_type_template_id_293948b2_scoped_true_staticRenderFns,
  false,
  injectStyles,
  "293948b2",
  "1ccc64ca"
  
)

/* harmony default export */ var article_meta = (component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/components/article-comments.vue?vue&type=template&id=149be9fa&scoped=true&
var article_commentsvue_type_template_id_149be9fa_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<form class=\"card comment-form\" data-v-149be9fa><div class=\"card-block\" data-v-149be9fa><textarea placeholder=\"Write a comment...\" rows=\"3\" class=\"form-control\" data-v-149be9fa>"+_vm._ssrEscape(_vm._s(_vm.writeComment))+"</textarea></div> <div class=\"card-footer\" data-v-149be9fa><img"+(_vm._ssrAttr("src",_vm.user.image))+" class=\"comment-author-img\" data-v-149be9fa> <button class=\"btn btn-sm btn-primary\" data-v-149be9fa>\n        Post Comment\n      </button></div></form> "),_vm._l((_vm.comments),function(comment){return _vm._ssrNode("<div class=\"card\" data-v-149be9fa>","</div>",[_vm._ssrNode("<div class=\"card-block\" data-v-149be9fa><p class=\"card-text\" data-v-149be9fa>"+_vm._ssrEscape(_vm._s(comment.body))+"</p></div> "),_vm._ssrNode("<div class=\"card-footer\" data-v-149be9fa>","</div>",[_c('nuxt-link',{staticClass:"comment-author",attrs:{"to":{
        name: 'profile',
        params: {
          username: comment.author.username
        }
      }}},[_c('img',{staticClass:"comment-author-img",attrs:{"src":comment.author.image}})]),_vm._ssrNode("\n       \n      "),_c('nuxt-link',{staticClass:"comment-author",attrs:{"to":{
        name: 'profile',
        params: {
          username: comment.author.username
        }
      }}},[_vm._v(_vm._s(comment.author.username))]),_vm._ssrNode(" <span class=\"date-posted\" data-v-149be9fa>"+_vm._ssrEscape(_vm._s(_vm._f("date")(comment.createdAt,'MMM DD, YYYY')))+"</span>")],2)],2)})],2)}
var article_commentsvue_type_template_id_149be9fa_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./pages/article/components/article-comments.vue?vue&type=template&id=149be9fa&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/components/article-comments.vue?vue&type=script&lang=js&
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


/* harmony default export */ var article_commentsvue_type_script_lang_js_ = ({
  name: 'articleComments',

  data() {
    return {
      comments: [],
      writeComment: ''
    };
  },

  props: {
    slug: {
      type: String,
      required: true
    }
  },
  computed: { ...Object(external_vuex_["mapState"])(['user'])
  },

  async mounted() {
    this.getCommentList();
  },

  methods: {
    async getCommentList() {
      const {
        data
      } = await Object(api_article["g" /* getComments */])(this.slug);
      console.log(data);
      this.comments = data.comments;
    },

    async addComment() {
      let body = {
        comment: {
          "body": this.writeComment
        }
      };
      const {
        data
      } = await Object(api_article["a" /* addComments */])(this.slug, body); // 发布成功

      if (data.comment) {
        this.writeComment = '';
        this.getCommentList();
      }
    }

  }
});
// CONCATENATED MODULE: ./pages/article/components/article-comments.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_article_commentsvue_type_script_lang_js_ = (article_commentsvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/article/components/article-comments.vue



function article_comments_injectStyles (context) {
  
  
}

/* normalize component */

var article_comments_component = Object(componentNormalizer["a" /* default */])(
  components_article_commentsvue_type_script_lang_js_,
  article_commentsvue_type_template_id_149be9fa_scoped_true_render,
  article_commentsvue_type_template_id_149be9fa_scoped_true_staticRenderFns,
  false,
  article_comments_injectStyles,
  "149be9fa",
  "54bf028e"
  
)

/* harmony default export */ var article_comments = (article_comments_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/index.vue?vue&type=script&lang=js&
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




/* harmony default export */ var articlevue_type_script_lang_js_ = ({
  name: 'ArticleIndex',
  components: {
    ArticleComments: article_comments,
    articleMeta: article_meta
  },

  async asyncData({
    params
  }) {
    const {
      data
    } = await Object(api_article["e" /* getArticle */])(params.slug);
    console.log(data);
    const {
      article
    } = data;
    const md = new external_markdown_it_default.a();
    article.body = md.render(article.body);
    return {
      article
    };
  },

  head() {
    return {
      title: `${this.article.title} - RealWorld`,
      meta: [// hid is used as unique identifier. Do not use `vmid` for it as it will not work
      {
        hid: 'description',
        name: 'description',
        content: this.article.description
      }]
    };
  }

});
// CONCATENATED MODULE: ./pages/article/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_articlevue_type_script_lang_js_ = (articlevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/article/index.vue



function article_injectStyles (context) {
  
  
}

/* normalize component */

var article_component = Object(componentNormalizer["a" /* default */])(
  pages_articlevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  article_injectStyles,
  "37b2609f",
  "7095fd87"
  
)

/* harmony default export */ var pages_article = __webpack_exports__["default"] = (article_component.exports);

/***/ })

};;
//# sourceMappingURL=2.js.map