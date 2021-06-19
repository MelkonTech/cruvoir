(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[16],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(r.default.useContext(o.AmpStateContext))};var a,r=(a=n("q1tI"))&&a.__esModule?a:{default:a},o=n("lwAK");function i({ampFirst:e=!1,hybrid:t=!1,hasQuery:n=!1}={}){return e||t&&n}},"/a9y":function(e,t,n){"use strict";var a=n("AroE");t.__esModule=!0,t.default=void 0;var r=a(n("q1tI")),o=a(n("8Kt/"));const i={400:"Bad Request",404:"This page could not be found",405:"Method Not Allowed",500:"Internal Server Error"};function s({res:e,err:t}){return{statusCode:e&&e.statusCode?e.statusCode:t?t.statusCode:404}}class c extends r.default.Component{render(){const{statusCode:e}=this.props,t=this.props.title||i[e]||"An unexpected error has occurred";return r.default.createElement("div",{style:l.error},r.default.createElement(o.default,null,r.default.createElement("title",null,e,": ",t)),r.default.createElement("div",null,r.default.createElement("style",{dangerouslySetInnerHTML:{__html:"body { margin: 0 }"}}),e?r.default.createElement("h1",{style:l.h1},e):null,r.default.createElement("div",{style:l.desc},r.default.createElement("h2",{style:l.h2},t,"."))))}}t.default=c,c.displayName="ErrorPage",c.getInitialProps=s,c.origGetInitialProps=s;const l={error:{color:"#000",background:"#fff",fontFamily:'-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif',height:"100vh",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},desc:{display:"inline-block",textAlign:"left",lineHeight:"49px",height:"49px",verticalAlign:"middle"},h1:{display:"inline-block",borderRight:"1px solid rgba(0, 0, 0,.3)",margin:0,marginRight:"20px",padding:"10px 23px 10px 0",fontSize:"24px",fontWeight:500,verticalAlign:"top"},h2:{fontSize:"14px",fontWeight:"normal",lineHeight:"inherit",margin:0,padding:0}}},"8Kt/":function(e,t,n){"use strict";n("oI91");t.__esModule=!0,t.defaultHead=u,t.default=void 0;var a,r=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=l();if(t&&t.has(e))return t.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var o=a?Object.getOwnPropertyDescriptor(e,r):null;o&&(o.get||o.set)?Object.defineProperty(n,r,o):n[r]=e[r]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),o=(a=n("Xuae"))&&a.__esModule?a:{default:a},i=n("lwAK"),s=n("FYa8"),c=n("/0+H");function l(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return l=function(){return e},e}function u(e=!1){const t=[r.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(r.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function d(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===r.default.Fragment?e.concat(r.default.Children.toArray(t.props.children).reduce((e,t)=>"string"===typeof t||"number"===typeof t?e:e.concat(t),[])):e.concat(t)}const p=["name","httpEquiv","charSet","itemProp"];function f(e,t){return e.reduce((e,t)=>{const n=r.default.Children.toArray(t.props.children);return e.concat(n)},[]).reduce(d,[]).reverse().concat(u(t.inAmpMode)).filter(function(){const e=new Set,t=new Set,n=new Set,a={};return r=>{let o=!0;if(r.key&&"number"!==typeof r.key&&r.key.indexOf("$")>0){const t=r.key.slice(r.key.indexOf("$")+1);e.has(t)?o=!1:e.add(t)}switch(r.type){case"title":case"base":t.has(r.type)?o=!1:t.add(r.type);break;case"meta":for(let e=0,t=p.length;e<t;e++){const t=p[e];if(r.props.hasOwnProperty(t))if("charSet"===t)n.has(t)?o=!1:n.add(t);else{const e=r.props[t],n=a[t]||new Set;n.has(e)?o=!1:(n.add(e),a[t]=n)}}}return o}}()).reverse().map((e,t)=>{const n=e.key||t;return r.default.cloneElement(e,{key:n})})}function h({children:e}){const t=(0,r.useContext)(i.AmpStateContext),n=(0,r.useContext)(s.HeadManagerContext);return r.default.createElement(o.default,{reduceComponentsToState:f,headManager:n,inAmpMode:(0,c.isInAmpMode)(t)},e)}h.rewind=()=>{};var m=h;t.default=m},BVjQ:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(t,n)};return function(t,n){function a(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(a.prototype=n.prototype,new a)}}(),r=function(e){function t(t){var n=e.call(this,t)||this;return n.name="AssertionError",n}return a(t,e),t}(Error);function o(e,t){if(!e)throw new r(t)}},FYa8:function(e,t,n){"use strict";var a;t.__esModule=!0,t.HeadManagerContext=void 0;const r=((a=n("q1tI"))&&a.__esModule?a:{default:a}).default.createContext({});t.HeadManagerContext=r},G2qV:function(e,t,n){e.exports={gallery:"gallery__3a8ED"}},J5mj:function(e,t,n){"use strict";var a=n("BVjQ"),r=n("d2ag"),o=n("NiKV");var i=Object(o.a)("pinterest",(function(e,t){var n=t.media,o=t.description;return Object(a.a)(e,"pinterest.url"),Object(a.a)(n,"pinterest.media"),"https://pinterest.com/pin/create/button/"+Object(r.a)({url:e,media:n,description:o})}),(function(e){return{media:e.media,description:e.description}}),{windowWidth:1e3,windowHeight:730});t.a=i},NiKV:function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),o=n("TSYQ"),i=n.n(o),s=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(t,n)};return function(t,n){function a(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(a.prototype=n.prototype,new a)}}(),c=function(){return(c=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},l=function(e,t,n,a){return new(n||(n=Promise))((function(r,o){function i(e){try{c(a.next(e))}catch(t){o(t)}}function s(e){try{c(a.throw(e))}catch(t){o(t)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,s)}c((a=a.apply(e,t||[])).next())}))},u=function(e,t){var n,a,r,o,i={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"===typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(o){return function(s){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,a&&(r=2&o[0]?a.return:o[0]?a.throw||((r=a.return)&&r.call(a),0):a.next)&&!(r=r.call(a,o[1])).done)return r;switch(a=0,r&&(o=[2&o[0],r.value]),o[0]){case 0:case 1:r=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,a=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!(r=(r=i.trys).length>0&&r[r.length-1])&&(6===o[0]||2===o[0])){i=0;continue}if(3===o[0]&&(!r||o[1]>r[0]&&o[1]<r[3])){i.label=o[1];break}if(6===o[0]&&i.label<r[1]){i.label=r[1],r=o;break}if(r&&i.label<r[2]){i.label=r[2],i.ops.push(o);break}r[2]&&i.ops.pop(),i.trys.pop();continue}o=t.call(e,i)}catch(s){o=[6,s],a=0}finally{n=r=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}},d=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n},p=function(e){return!!e&&("object"===typeof e||"function"===typeof e)&&"function"===typeof e.then},f=function(e,t){return{left:window.outerWidth/2+(window.screenX||window.screenLeft||0)-e/2,top:window.outerHeight/2+(window.screenY||window.screenTop||0)-t/2}},h=function(e,t){return{top:(window.screen.height-t)/2,left:(window.screen.width-e)/2}};function m(e,t,n){var a=t.height,r=t.width,o=d(t,["height","width"]),i=c({height:a,width:r,location:"no",toolbar:"no",status:"no",directories:"no",menubar:"no",scrollbars:"yes",resizable:"no",centerscreen:"yes",chrome:"yes"},o),s=window.open(e,"",Object.keys(i).map((function(e){return e+"="+i[e]})).join(", "));if(n)var l=window.setInterval((function(){try{(null===s||s.closed)&&(window.clearInterval(l),n(s))}catch(e){console.error(e)}}),1e3);return s}var g=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.openShareDialog=function(e){var n=t.props,a=n.onShareWindowClose,r=n.windowHeight,o=void 0===r?400:r,i=n.windowPosition,s=void 0===i?"windowCenter":i,l=n.windowWidth,u=void 0===l?550:l;m(e,c({height:o,width:u},"windowCenter"===s?f(u,o):h(u,o)),a)},t.handleClick=function(e){return l(t,void 0,void 0,(function(){var t,n,a,r,o,i,s,c,l,d;return u(this,(function(u){switch(u.label){case 0:return t=this.props,n=t.beforeOnClick,a=t.disabled,r=t.networkLink,o=t.onClick,i=t.url,s=t.openShareDialogOnClick,c=t.opts,l=r(i,c),a?[2]:(e.preventDefault(),n?(d=n(),p(d)?[4,d]:[3,2]):[3,2]);case 1:u.sent(),u.label=2;case 2:return s&&this.openShareDialog(l),o&&o(e,l),[2]}}))}))},t}return s(t,e),t.prototype.render=function(){var e=this.props,t=(e.beforeOnClick,e.children),n=e.className,a=e.disabled,o=e.disabledStyle,s=e.forwardedRef,l=(e.networkLink,e.networkName),u=(e.onShareWindowClose,e.openShareDialogOnClick,e.opts,e.resetButtonStyle),p=e.style,f=(e.url,e.windowHeight,e.windowPosition,e.windowWidth,d(e,["beforeOnClick","children","className","disabled","disabledStyle","forwardedRef","networkLink","networkName","onShareWindowClose","openShareDialogOnClick","opts","resetButtonStyle","style","url","windowHeight","windowPosition","windowWidth"])),h=i()("react-share__ShareButton",{"react-share__ShareButton--disabled":!!a,disabled:!!a},n),m=c(c(u?{backgroundColor:"transparent",border:"none",padding:0,font:"inherit",color:"inherit",cursor:"pointer"}:{},p),a&&o);return r.a.createElement("button",c({},f,{"aria-label":f["aria-label"]||l,className:h,onClick:this.handleClick,ref:s,style:m}),t)},t.defaultProps={disabledStyle:{opacity:.6},openShareDialogOnClick:!0,resetButtonStyle:!0},t}(a.Component),y=function(){return(y=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)};t.a=function(e,t,n,o){function i(a,i){var s=n(a),c=y({},a);return Object.keys(s).forEach((function(e){delete c[e]})),r.a.createElement(g,y({},o,c,{forwardedRef:i,networkName:e,networkLink:t,opts:n(a)}))}return i.displayName="ShareButton-"+e,Object(a.forwardRef)(i)}},QeUd:function(e,t,n){"use strict";var a=n("BVjQ"),r=n("d2ag"),o=n("NiKV");var i=Object(o.a)("twitter",(function(e,t){var n=t.title,o=t.via,i=t.hashtags,s=void 0===i?[]:i,c=t.related,l=void 0===c?[]:c;return Object(a.a)(e,"twitter.url"),Object(a.a)(Array.isArray(s),"twitter.hashtags is not an array"),Object(a.a)(Array.isArray(l),"twitter.related is not an array"),"https://twitter.com/share"+Object(r.a)({url:e,text:n,via:o,hashtags:s.length>0?s.join(","):void 0,related:l.length>0?l.join(","):void 0})}),(function(e){return{hashtags:e.hashtags,title:e.title,via:e.via,related:e.related}}),{windowWidth:550,windowHeight:400});t.a=i},QfLz:function(e,t,n){e.exports={list:"list__KGU7P"}},"U/Yh":function(e,t,n){"use strict";var a=n("SqIO"),r=n("ZuG0"),o=Object(a.a)((function(e){for(var t=Object(r.a)(e),n=t.length,a=[],o=0;o<n;)a[o]=e[t[o]],o+=1;return a}));t.a=o},Xuae:function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0;var a=n("q1tI");class r extends a.Component{constructor(e){super(e),this._hasHeadManager=void 0,this.emitChange=()=>{this._hasHeadManager&&this.props.headManager.updateHead(this.props.reduceComponentsToState([...this.props.headManager.mountedInstances],this.props))},this._hasHeadManager=this.props.headManager&&this.props.headManager.mountedInstances}componentDidMount(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}componentDidUpdate(){this.emitChange()}componentWillUnmount(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}render(){return null}}t.default=r},aWbt:function(e,t,n){"use strict";var a=n("BVjQ"),r=n("d2ag"),o=n("NiKV");var i=Object(o.a)("facebook",(function(e,t){var n=t.quote,o=t.hashtag;return Object(a.a)(e,"facebook.url"),"https://www.facebook.com/sharer/sharer.php"+Object(r.a)({u:e,quote:n,hashtag:o})}),(function(e){return{quote:e.quote,hashtag:e.hashtag}}),{windowWidth:550,windowHeight:400});t.a=i},d2ag:function(e,t,n){"use strict";function a(e){var t=Object.entries(e).filter((function(e){var t=e[1];return void 0!==t&&null!==t})).map((function(e){var t=e[0],n=e[1];return encodeURIComponent(t)+"="+encodeURIComponent(String(n))}));return t.length>0?"?"+t.join("&"):""}n.d(t,"a",(function(){return a}))},eomm:function(e,t,n){e.exports=n("/a9y")},gSP2:function(e,t,n){"use strict";n.d(t,"a",(function(){return g}));var a=n("q1tI"),r=n.n(a),o=n("TSYQ"),i=n.n(o),s=n("vcW7"),c=n("UzBX"),l=n("qW2e"),u=n.n(l),d=r.a.createElement;function p(e){return d("div",{className:i()(u.a.slide,e.className)},d("img",{alt:e.image.altText||e.title,className:"image",src:e.image.originalSrc}))}var f=n("jN3L"),h=n.n(f),m=r.a.createElement;function g(e){const t=e.closePreview;return Object(a.useEffect)(()=>{const e=e=>{"Escape"===e.key&&t()};return document.addEventListener("keyup",e),()=>document.removeEventListener("keyup",e)},[t]),m("div",{className:i()(h.a.preview,e.className)},m(s.a,{className:"slider",hasKeyboardNavigation:!0,hasNavigation:!0,hasNumeration:!0,initialSlideNumber:e.initialSlideNumber,noStyles:!0},e.images.map(t=>m(p,{className:"slide",image:t,key:t.id,title:e.title}))),m("button",{className:"button",onClick:e.closePreview},m(c.a,{className:"icon",name:"cross"})))}},hIET:function(e,t,n){"use strict";n.d(t,"a",(function(){return ie}));var a=n("sNsB"),r=n("SqIO"),o=n("L8iz"),i=Object(o.a)((function(e,t){return e.apply(this,t)})),s=n("YR7Z"),c=n("h0ti"),l=n("VUUK"),u=n("YyPD"),d=n("ZuG0"),p=n("U/Yh");function f(e,t){return Object(d.a)(t).reduce((function(n,a){return n[a]=e(t[a]),n}),{})}var h=Object(r.a)((function e(t){return t=f((function(t){return"function"==typeof t?t:e(t)}),t),Object(s.a)(Object(u.a)(c.a,0,Object(l.a)("length",Object(p.a)(t))),(function(){var e=arguments;return f((function(t){return i(t,e)}),t)}))})),m=n("Pvxg"),g=n("I2HU"),y=n("CJ0+"),w=n("SqYe"),v=n("GPXY"),b=n("Grua"),O=n("lYcH"),_=n("wG+1"),j=n("aWbt"),k=n("J5mj"),N=n("QeUd"),C=n("FaPq"),S=n("q1tI"),x=n.n(S),P=n("TSYQ"),E=n.n(P),M=n("eomm"),I=n.n(M),q=n("vcW7"),L=n("G2qV"),A=n.n(L),H=x.a.createElement;const B=Object(S.memo)((function(e){return H(q.a,{className:E()(A.a.gallery,e.className),hasNavigation:!0,noStyles:!0},e.images.map((t,n)=>H("div",{className:"slide",key:t.thumbnail,onClick:()=>e.showPreviewPopup(n)},H("img",{className:"image",src:t.thumbnail}))))}));var R=n("yLiY"),U=n.n(R),T=n("8Kt/"),W=n.n(T),Y=n("UzBX"),D=n("gSP2"),G=n("i6vu"),K=n("+alz"),Q=n("wd/R"),V=n.n(Q),z=n("yXRw"),X=n.n(z),$=n("eG2q"),F=n("QfLz"),J=n.n(F),Z=n("ngCJ"),ee=n("k7Sn"),te=n("JUhy"),ne=x.a.createElement;const{publicRuntimeConfig:ae}=U()(),re=(e,t)=>Object.assign(e||{},{key:t}),oe=(e,t,n,a,r)=>e===_.Elements.paragraph?x.a.createElement("p",re({className:"paragraph"},r),a):e===_.Elements.image?x.a.createElement("img",re({alt:t.alt||"",className:"image",src:t.url},r)):null;function ie(e){var t,n;const r=Object(S.useMemo)(()=>e.post.related_collection?e.post.related_collection.split("/collections/")[1]||e.post.related_collection:"women",[e.post.related_collection]),{t:o,i18n:i}=Object(ee.useTranslation)(),s=Object(Z.usePopup)(),{0:c,1:u}=Object(S.useState)(0),d=Object(S.useMemo)(()=>a.a(h({image:e=>m.a(e.image.url,["image","large","url"],e),thumbnail:g.a(["image","url"])}),y.a([],"gallery",e.post)),[e.post]),p=Object(S.useCallback)(e=>{s.show(),u(e)},[s]);if(!e.post)return ne(I.a,{statusCode:404});const f=_.RichText.asText(e.post.title),O=_.RichText.asText(e.post.excerpt||[]),x=Object(C.j)(e.post.content),P=null===(t=e.post)||void 0===t||null===(n=t.video)||void 0===n?void 0:n.url;return ne(G.a,{className:J.a.list,isBlogDomain:!0},ne(W.a,null,ne("meta",{key:"og:type",property:"og:type",content:"website"}),ne("meta",{key:"og:title",property:"og:title",content:f}),ne("meta",{key:"og:url",property:"og:url",content:`${ae.NEXT_PUBLIC_BLOG_URL}/${e.post.uid}`}),x&&!P&&ne("meta",{key:"og:image",property:"og:image",content:x}),P&&ne("meta",{key:"og:video",property:"og:video",content:P}),ne("meta",{key:"og:description",property:"og:description",content:O})),ne("div",{className:E()("header",{"has-image-or-video":x||P})},ne("div",{className:"content"},ne("h1",{className:"title"},f),ne("p",{className:"intro"},O),ne("time",{className:"date",dateTime:e.post.date},V()(e.post.date).locale(i.language||i.options.defaultLanguage).format("MMMM D, YYYY")),e.post.author&&ne("div",{className:"author"},"By ",e.post.author),ne("hr",{className:"divider"}),ne("div",{className:"footer"},e.post.tags.length>0&&ne("div",{className:"tags"},ne("div",{className:"title"},o("tags"),":"),ne("div",{className:"list"},e.post.tags.map(e=>ne(K.a,{as:"/t/"+e,className:"tag",href:"/t/[tagslug]?tagslug="+e,key:e},e)))),ne("div",{className:"socials"},ne(j.a,{className:"link",quote:f,url:`${ae.NEXT_PUBLIC_BLOG_URL}/${e.post.uid}`},ne(Y.a,{className:"icon",name:"facebook"})),ne(k.a,{className:"link",description:f,media:x,url:`${ae.NEXT_PUBLIC_BLOG_URL}/${e.post.uid}`},ne(Y.a,{className:"icon",name:"pinterest"})),ne(N.a,{className:"link",title:f,url:`${ae.NEXT_PUBLIC_BLOG_URL}/${e.post.uid}`},ne(Y.a,{className:"icon",name:"twitter"}))))),x&&!P&&ne("img",{alt:f,className:"image",src:x}),P&&ne(te.a,{className:"video",isVideoAutoplayable:e.post.is_video_autoplayable,videoUrl:P})),ne("div",{className:"content"},ne(_.RichText,{render:e.post.content,htmlSerializer:oe})),!w.a(d)&&ne(B,{className:"gallery",images:d,showPreviewPopup:p}),ne(D.a,{className:E()("preview",{"is-shown":s.isShown}),closePreview:s.hide,initialSlideNumber:c,images:v.a(a.a(h({altText:e.post.title,id:b.a,originalSrc:b.a})),l.a("image"))(d),title:e.post.title}),ne("div",{className:"collections"},ne("h2",{className:"title"},o("shopNow")),ne($.a,{className:"slider",handle:r})))}ie.getServerSideProps=async e=>{const t="preview"===e.query.slug;let n;const a=(await Object(C.u)(e.req).query([t?X.a.Predicates.at("document.type","post"):X.a.Predicates.at("my.post.uid",e.query.slug)],t?{ref:Object(C.g)({ctx:{req:e.req},name:X.a.previewCookie})}:{})).results[0];return a&&(n=O.a({tags:a.tags,uid:a.uid},a.data)),n?{props:{hasPageTransition:!0,post:n}}:(n={props:{}},e.res.statusCode=404,n)}},jN3L:function(e,t,n){e.exports={preview:"preview__25CiM"}},lYcH:function(e,t,n){"use strict";var a=n("wxKl"),r=n("L8iz"),o=Object(r.a)((function(e,t){return Object(a.a)({},e,t)}));t.a=o},lwAK:function(e,t,n){"use strict";var a;t.__esModule=!0,t.AmpStateContext=void 0;const r=((a=n("q1tI"))&&a.__esModule?a:{default:a}).default.createContext({});t.AmpStateContext=r},ngCJ:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("q1tI");const r=(e,t)=>a.useCallback(()=>e(t),[e,t]);t.useClickOutsideEffect=e=>{const t=a.useCallback(t=>{e.toggleNodeRef.current&&e.nodeRef.current&&!e.toggleNodeRef.current.contains(t.target)&&!e.nodeRef.current.contains(t.target)&&e.callback()},[e]);a.useEffect(()=>{if("undefined"!==typeof document)return document.addEventListener("click",t,!0),()=>{document.removeEventListener("click",t,!0)}},[t])},t.usePopup=function(e=!1){const[t,n]=a.useState(e);return{hide:r(n,!1),isShown:t,show:r(n,!0),toggle:r(n,!t)}}},oI91:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},qW2e:function(e,t,n){e.exports={slide:"slide__1El8i"}}}]);