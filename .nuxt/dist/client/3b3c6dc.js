(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{192:function(t,e,r){"use strict";r.d(e,"f",(function(){return c})),r.d(e,"h",(function(){return o})),r.d(e,"b",(function(){return l})),r.d(e,"d",(function(){return f})),r.d(e,"e",(function(){return v})),r.d(e,"g",(function(){return d})),r.d(e,"a",(function(){return m})),r.d(e,"c",(function(){return _})),r.d(e,"i",(function(){return h}));var n=r(63),c=function(t){return Object(n.b)({method:"get",url:"/api/articles",params:t})},o=function(t){return Object(n.b)({method:"get",url:"/api/articles/feed",params:t})},l=function(t){return Object(n.b)({method:"POST",url:"/api/articles/".concat(t,"/favorite")})},f=function(t){return Object(n.b)({method:"DELETE",url:"/api/articles/".concat(t,"/favorite")})},v=function(t){return Object(n.b)({method:"GET",url:"/api/articles/".concat(t)})},d=function(t){return Object(n.b)({method:"GET",url:"/api/articles/".concat(t,"/comments")})},m=function(t,data){return Object(n.b)({method:"POST",url:"/api/articles/".concat(t,"/comments"),data:data})},_=function(data){return Object(n.b)({method:"POST",url:"/api/articles",data:data})},h=function(t,data){return Object(n.b)({method:"PUT",url:"/api/articles/".concat(t),data:data})}},198:function(t,e,r){var n=r(3),c=r(32),o=r(9),l=r(199),f="["+l+"]",v=RegExp("^"+f+f+"*"),d=RegExp(f+f+"*$"),m=function(t,e,r){var c={},f=o((function(){return!!l[t]()||"​"!="​"[t]()})),v=c[t]=f?e(_):l[t];r&&(c[r]=v),n(n.P+n.F*f,"String",c)},_=m.trim=function(t,e){return t=String(c(t)),1&e&&(t=t.replace(v,"")),2&e&&(t=t.replace(d,"")),t};t.exports=m},199:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},208:function(t,e,r){var n=r(3),c=r(209);n(n.S+n.F*(Number.parseInt!=c),"Number",{parseInt:c})},209:function(t,e,r){var n=r(5).parseInt,c=r(198).trim,o=r(199),l=/^[-+]?0[xX]/;t.exports=8!==n(o+"08")||22!==n(o+"0x16")?function(t,e){var r=c(String(t),3);return n(r,e>>>0||(l.test(r)?16:10))}:n},210:function(t,e,r){"use strict";var n=r(5),c=r(25),o=r(26),l=r(127),f=r(64),v=r(9),d=r(51).f,m=r(52).f,_=r(11).f,h=r(198).trim,O="Number",C=n.Number,y=C,x=C.prototype,j=o(r(83)(x))==O,k="trim"in String.prototype,E=function(t){var e=f(t,!1);if("string"==typeof e&&e.length>2){var r,n,c,o=(e=k?e.trim():h(e,3)).charCodeAt(0);if(43===o||45===o){if(88===(r=e.charCodeAt(2))||120===r)return NaN}else if(48===o){switch(e.charCodeAt(1)){case 66:case 98:n=2,c=49;break;case 79:case 111:n=8,c=55;break;default:return+e}for(var code,l=e.slice(2),i=0,v=l.length;i<v;i++)if((code=l.charCodeAt(i))<48||code>c)return NaN;return parseInt(l,n)}}return+e};if(!C(" 0o1")||!C("0b1")||C("+0x1")){C=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof C&&(j?v((function(){x.valueOf.call(r)})):o(r)!=O)?l(new y(E(e)),r,C):E(e)};for(var I,w=r(7)?d(y):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),N=0;w.length>N;N++)c(y,I=w[N])&&!c(C,I)&&_(C,I,m(y,I));C.prototype=x,x.constructor=C,r(13)(n,O,C)}},268:function(t,e,r){"use strict";r.r(e);var n=r(19),c=r(10),o=r(4),l=(r(36),r(208),r(210),r(39),r(14),r(40),r(37),r(23),r(24),r(49),r(50),r(192)),f=r(63),v=r(38);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var _={name:"HomeIndex",watchQuery:["page","tag","tab"],asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var r,n,o,v,d,m,_,h,O,C,y,x,j,k,E,I;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.query,n=t.store,o=Number.parseInt(r.page||1),v=20,d=r.tag,m=r.tab,_=void 0===m?"global_feed":m,h=n.state.user&&"your_feed"===_?l.h:l.f,e.next=7,Promise.all([h({limit:v,offset:(o-1)*v,tag:d}),Object(f.b)({method:"GET",url:"/api/tags"})]);case 7:return O=e.sent,C=Object(c.a)(O,2),y=C[0],x=C[1],j=y.data,k=j.articles,E=j.articlesCount,I=x.data.tags,k.forEach((function(article){return article.favoriteDisabled=!1})),e.abrupt("return",{articles:k,articlesCount:E,tags:I,limit:v,page:o,tag:d,tab:r.tab||"global_feed"});case 15:case"end":return e.stop()}}),e)})))()},computed:m(m({},Object(v.b)(["user"])),{},{totalPage:function(){return Math.ceil(this.articlesCount/this.limit)}}),methods:{onFavorite:function(article){return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(console.log(article),!article.favoriteDisabled){t.next=3;break}return t.abrupt("return");case 3:if(article.favoriteDisabled=!0,!article.favorited){t.next=11;break}return t.next=7,Object(l.d)(article.slug);case 7:article.favorited=!1,article.favoritesCount+=-1,t.next=15;break;case 11:return t.next=13,Object(l.b)(article.slug);case 13:article.favorited=!0,article.favoritesCount+=1;case 15:article.favoriteDisabled=!1;case 16:case"end":return t.stop()}}),t)})))()}}},h=r(30),component=Object(h.a)(_,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home-page"},[t._m(0),t._v(" "),r("div",{staticClass:"container page"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-9"},[r("div",{staticClass:"feed-toggle"},[r("ul",{staticClass:"nav nav-pills outline-active"},[t.user?r("li",{staticClass:"nav-item"},[r("nuxt-link",{staticClass:"nav-link",class:{active:"your_feed"===t.tab},attrs:{exact:"",to:{name:"home",query:{tab:"your_feed"}}}},[t._v("Your Feed")])],1):t._e(),t._v(" "),r("li",{staticClass:"nav-item"},[r("nuxt-link",{staticClass:"nav-link",class:{active:"global_feed"===t.tab},attrs:{exact:"",to:{name:"home",query:{tab:"global_feed"}}}},[t._v("Global Feed")])],1),t._v(" "),t.tag?r("li",{staticClass:"nav-item"},[r("nuxt-link",{staticClass:"nav-link",class:{active:"tag"===t.tab},attrs:{exact:"",to:{name:"home",query:{tab:"tag",tag:t.tag}}}},[t._v("#"+t._s(t.tag))])],1):t._e()])]),t._v(" "),t._l(t.articles,(function(article){return r("div",{key:article.slug,staticClass:"article-preview"},[r("div",{staticClass:"article-meta"},[r("a",{attrs:{href:"profile.html"}}),t._v(" "),r("nuxt-link",{attrs:{to:{name:"profile",params:{username:article.author.username}}}},[r("img",{attrs:{src:article.author.image}})]),t._v(" "),r("div",{staticClass:"info"},[r("nuxt-link",{staticClass:"author",attrs:{to:{name:"profile",params:{username:article.author.username}}}},[t._v("\n              "+t._s(article.author.username)+"\n              ")]),t._v(" "),r("span",{staticClass:"date"},[t._v(t._s(t._f("date")(article.createdAt,"MMM DD,YYYY")))])],1),t._v(" "),r("button",{staticClass:"btn btn-outline-primary btn-sm pull-xs-right",class:{active:article.favorited},attrs:{disabled:article.favoriteDisabled},on:{click:function(e){return t.onFavorite(article)}}},[r("i",{staticClass:"ion-heart"}),t._v(" "+t._s(article.favoritesCount)+"\n            ")])],1),t._v(" "),r("nuxt-link",{staticClass:"preview-link",attrs:{to:{name:"article",params:{slug:article.slug}}}},[r("h1",[t._v(t._s(article.title))]),t._v(" "),r("p",[t._v(t._s(article.description))]),t._v(" "),r("span",[t._v("Read more...")])])],1)})),t._v(" "),r("nav",[r("ul",{staticClass:"pagination"},t._l(t.totalPage,(function(e){return r("li",{key:e,staticClass:"page-item",class:{active:e==t.page}},[r("nuxt-link",{staticClass:"page-link",attrs:{to:{path:"/",query:{page:e,tag:t.$route.query.tag,tab:t.tab}}}},[t._v(t._s(e))])],1)})),0)])],2),t._v(" "),r("div",{staticClass:"col-md-3"},[r("div",{staticClass:"sidebar"},[r("p",[t._v("Popular Tags")]),t._v(" "),r("div",{staticClass:"tag-list"},t._l(t.tags,(function(e){return r("nuxt-link",{key:e,staticClass:"tag-pill tag-default",attrs:{to:{name:"home",query:{tag:e,tab:"tag"}},href:""}},[t._v(t._s(e)+"\n            ")])})),1)])])])])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"banner"},[r("div",{staticClass:"container"},[r("h1",{staticClass:"logo-font"},[t._v("conduit")]),t._v(" "),r("p",[t._v("A place to share your knowledge.")])])])}],!1,null,"6c795b18",null);e.default=component.exports}}]);