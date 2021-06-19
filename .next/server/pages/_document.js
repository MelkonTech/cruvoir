module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ({

/***/ "2+G7":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/server");

/***/ }),

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Y7Z2");


/***/ }),

/***/ "7ITC":
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),

/***/ "8cZr":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("VDXt")


/***/ }),

/***/ "ANpm":
/***/ (function(module, exports) {

module.exports = require("ramda");

/***/ }),

/***/ "AXZJ":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.htmlEscapeJsonString=htmlEscapeJsonString;// This utility is based on https://github.com/zertosh/htmlescape
// License: https://github.com/zertosh/htmlescape/blob/0527ca7156a524d256101bb310a9f970f63078ad/LICENSE
const ESCAPE_LOOKUP={'&':'\\u0026','>':'\\u003e','<':'\\u003c','\u2028':'\\u2028','\u2029':'\\u2029'};const ESCAPE_REGEX=/[&><\u2028\u2029]/g;function htmlEscapeJsonString(str){return str.replace(ESCAPE_REGEX,match=>ESCAPE_LOOKUP[match]);}
//# sourceMappingURL=htmlescape.js.map

/***/ }),

/***/ "FaPq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ addTranslationsFromPO; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ appendURLQueryParams; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* reexport */ camelToDash; });
__webpack_require__.d(__webpack_exports__, "d", function() { return /* reexport */ capfirst; });
__webpack_require__.d(__webpack_exports__, "e", function() { return /* reexport */ dashToCamel; });
__webpack_require__.d(__webpack_exports__, "f", function() { return /* reexport */ findGenderInProductTags; });
__webpack_require__.d(__webpack_exports__, "g", function() { return /* reexport */ getCookie; });
__webpack_require__.d(__webpack_exports__, "h", function() { return /* reexport */ getFirstVariantPrice; });
__webpack_require__.d(__webpack_exports__, "j", function() { return /* reexport */ getHeroImagePath; });
__webpack_require__.d(__webpack_exports__, "i", function() { return /* reexport */ getGender; });
__webpack_require__.d(__webpack_exports__, "k", function() { return /* reexport */ getInitialVariantOptions; });
__webpack_require__.d(__webpack_exports__, "l", function() { return /* reexport */ getUnavailableOptions; });
__webpack_require__.d(__webpack_exports__, "m", function() { return /* reexport */ getUrlAs; });
__webpack_require__.d(__webpack_exports__, "n", function() { return /* reexport */ getUrlHref; });
__webpack_require__.d(__webpack_exports__, "o", function() { return /* reexport */ getVariantOptionByName; });
__webpack_require__.d(__webpack_exports__, "p", function() { return /* reexport */ isServer; });
__webpack_require__.d(__webpack_exports__, "q", function() { return /* reexport */ nameToHandle; });
__webpack_require__.d(__webpack_exports__, "r", function() { return /* reexport */ normalizeCartItemForRead; });
__webpack_require__.d(__webpack_exports__, "s", function() { return /* reexport */ objectToFetchPostParams; });
__webpack_require__.d(__webpack_exports__, "t", function() { return /* reexport */ objectToQueryString; });
__webpack_require__.d(__webpack_exports__, "u", function() { return /* reexport */ prismicClient; });
__webpack_require__.d(__webpack_exports__, "v", function() { return /* reexport */ productPath; });
__webpack_require__.d(__webpack_exports__, "w", function() { return /* reexport */ shopifyEdgesToProducts; });
__webpack_require__.d(__webpack_exports__, "x", function() { return /* reexport */ translatedProductDescription; });
__webpack_require__.d(__webpack_exports__, "y", function() { return /* reexport */ translatedProductTitle; });

// UNUSED EXPORTS: collectGraphqlRequestErrors

// EXTERNAL MODULE: external "ramda"
var external_ramda_ = __webpack_require__("ANpm");

// CONCATENATED MODULE: ./components/common/helpers/add-translations-from-po.tsx

const addTranslationsFromPO = params => params.i18n.addResources(params.lang, 'common', external_ramda_["compose"](external_ramda_["fromPairs"], external_ramda_["map"](term => [term.term, term.translation.content]))(params.translations));
// CONCATENATED MODULE: ./components/common/helpers/append-url-query-params.tsx
 // Append query params to a link which already has query params

const appendURLQueryParams = (link, queryParamsString) => `${link.replace(/\?.*/, '')}?${external_ramda_["compose"](external_ramda_["join"]('&'), external_ramda_["filter"](Boolean), external_ramda_["concat"]([queryParamsString]), external_ramda_["tail"], external_ramda_["split"]('?'))(link)}`;
// CONCATENATED MODULE: ./components/common/helpers/camel-to-dash.tsx
const camelToDash = string => string.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase();
// CONCATENATED MODULE: ./components/common/helpers/capfirst.tsx

const capfirst = external_ramda_["replace"](/^./, external_ramda_["toUpper"]);
// CONCATENATED MODULE: ./components/common/helpers/collect-graphql-request-errors.tsx

const collectGraphqlRequestErrors = error => external_ramda_["is"](String, error) ? error : external_ramda_["pluck"]('message', external_ramda_["pathOr"]([], ['result', 'errors'], error.networkError).concat(error.graphQLErrors || []));
// CONCATENATED MODULE: ./components/common/helpers/dash-to-camel.tsx
const dashToCamel = string => string.replace(/[--]([a-z])/g, m => m[1].toUpperCase());
// EXTERNAL MODULE: ./settings/index.ts + 1 modules
var settings = __webpack_require__("NYPX");

// CONCATENATED MODULE: ./components/common/helpers/find-gender-in-product-tags.ts


function findGenderInProductTags(tags) {
  const productTags = external_ramda_["map"](external_ramda_["toLower"], tags || []);
  if (external_ramda_["includes"]('women', productTags)) return 'women';
  if (external_ramda_["includes"]('men', productTags)) return 'men';
  const menTags = external_ramda_["compose"](external_ramda_["map"](external_ramda_["toLower"]), external_ramda_["filter"](Boolean), external_ramda_["chain"](external_ramda_["prop"]('tags')), external_ramda_["chain"](external_ramda_["prop"]('subcategories')))(settings["a" /* catalogHierarchy */].men.categories);
  if (external_ramda_["length"](external_ramda_["intersection"](productTags, menTags)) > 0) return 'men';
  return 'women';
}
// EXTERNAL MODULE: external "js-cookie"
var external_js_cookie_ = __webpack_require__("vmXh");
var external_js_cookie_default = /*#__PURE__*/__webpack_require__.n(external_js_cookie_);

// CONCATENATED MODULE: ./components/common/helpers/get-cookie.tsx
 // To be sure that ctx contains req (express server request) object don't use is-server helper here

const getCookie = params => params.ctx && params.ctx.req // On server side
? params.ctx.req.cookies[params.name] || null // On client side
: external_js_cookie_default.a.get(params.name) || null;
// CONCATENATED MODULE: ./components/common/helpers/get-first-variant-price.tsx

const getFirstVariantPrice = (variants, priceType) => external_ramda_["pathOr"](null, ['node', priceType], variants[0]);
// CONCATENATED MODULE: ./components/common/helpers/get-hero-image-path.tsx

const getHeroImagePath = external_ramda_["compose"](external_ramda_["propOr"]('', 'url'), external_ramda_["find"](external_ramda_["propEq"]('type', 'image')));
// CONCATENATED MODULE: ./components/common/helpers/get-gender.tsx

const getGender = (router, isBlogDomain) => isBlogDomain ? 'women' : external_ramda_["pathOr"]('women', ['query', 'gender'], router).replace('all', 'women');
// CONCATENATED MODULE: ./components/common/helpers/get-initial-variant-options.tsx

const getInitialVariantOptions = variants => external_ramda_["reduce"]((obj, option) => external_ramda_["assoc"](option.name, option.value, obj), {}, external_ramda_["pathOr"]([], ['node', 'selectedOptions'], variants[0]));
// CONCATENATED MODULE: ./components/common/helpers/get-unavailable-options.tsx

 // Example — red color of a t-shirt may not be available in S or M size

const getUnavailableOptions = (values, options, variants) => external_ramda_["reduce"]((obj, variant) => {
  if (variant.node.selectedOptions.length > 1) {
    for (let key in values) if (getVariantOptionByName(key, variant.node) === values[key]) external_ramda_["forEach"](option => {
      if (option.name !== key && obj[option.name]) obj[option.name].push(option.value);
    }, variant.node.selectedOptions);
  } else obj[variant.node.selectedOptions[0].name].push(variant.node.selectedOptions[0].value);

  return obj;
}, external_ramda_["reduce"]((obj, option) => external_ramda_["assoc"](option.name, [], obj), {}, options), external_ramda_["filter"](variant => variant.node.availableForSale === false, variants));
// CONCATENATED MODULE: ./components/common/helpers/get-url-as.tsx
const getUrlAs = params => params.isWishListRequested ? `/wish/${params.gender || 'all'}/category/${params.category || 'all'}/subcategory/${params.subcategory || 'all'}` : `/${params.gender || 'all'}/shop/collection/${params.collection || 'all'}/category/${params.category || 'all'}/subcategory/${params.subcategory || 'all'}`;
// CONCATENATED MODULE: ./components/common/helpers/get-url-href.tsx
const getUrlHref = params => `${params.isWishListRequested ? '/wish/[gender]' : '/[gender]/shop/collection/[collection]'}/category/[category]/subcategory/[subcategory]` + `?category=${params.category || 'all'}&collection=${params.collection || 'all'}&gender=${params.gender}&subcategory=${params.subcategory || 'all'}`;
// CONCATENATED MODULE: ./components/common/helpers/get-variant-option-by-name.tsx

const getVariantOptionByName = (name, variant) => external_ramda_["pathOr"](null, ['value'], external_ramda_["find"](option => option.name === name, variant.selectedOptions));
// CONCATENATED MODULE: ./components/common/helpers/is-server.tsx
const isServer = () => true;
// CONCATENATED MODULE: ./components/common/helpers/name-to-handle.ts
const nameToHandle = name => encodeURIComponent(name.toLowerCase().replace(/\.$/, '').replace(/[\s\.]+/g, '-'));
// CONCATENATED MODULE: ./components/common/helpers/normalize-cart-item-for-read.ts

const normalizeCartItemForRead = item => ({
  compareAtPrice: external_ramda_["path"](['amount'], item.variant.compareAtPriceV2),
  handle: item.variant.product.handle,
  id: item.id,
  image: external_ramda_["compose"](external_ramda_["path"](['node']), external_ramda_["head"])(item.variant.product.images.edges),
  options: item.variant.selectedOptions,
  price: item.variant.priceV2.amount,
  quantity: item.quantity,
  title: item.variant.product.title,
  variantID: item.variant.id,
  vendor: item.variant.product.vendor
});
// CONCATENATED MODULE: ./components/common/helpers/object-to-fetch-post-params.tsx
 // param1=value1&param2=value2

const objectToFetchPostParams = object => external_ramda_["join"]('&')(external_ramda_["map"](external_ramda_["join"]('='), external_ramda_["toPairs"](object)));
// CONCATENATED MODULE: ./components/common/helpers/object-to-query-string.tsx

const objectToQueryString = object => external_ramda_["map"](value => `${value[0]}=${encodeURIComponent(value[1])}`, external_ramda_["toPairs"](object)).join('&');
// EXTERNAL MODULE: external "next/config"
var config_ = __webpack_require__("KNus");
var config_default = /*#__PURE__*/__webpack_require__.n(config_);

// EXTERNAL MODULE: external "prismic-javascript"
var external_prismic_javascript_ = __webpack_require__("vNl1");
var external_prismic_javascript_default = /*#__PURE__*/__webpack_require__.n(external_prismic_javascript_);

// CONCATENATED MODULE: ./components/common/helpers/prismic-client.tsx


const {
  publicRuntimeConfig
} = config_default()();
const prismicClient = (req = null) => external_prismic_javascript_default.a.client(publicRuntimeConfig.NEXT_PUBLIC_PRISMIC_API_URL, createClientOptions(req));

const createClientOptions = (req = null) => req ? {
  req
} : {};
// CONCATENATED MODULE: ./components/common/helpers/product-path.tsx


 // Returns product's gender, category and subcategory based on its tags

const productPath = tags => {
  const gender = (external_ramda_["find"](tag => external_ramda_["includes"](tag.toLowerCase(), external_ramda_["keys"](settings["a" /* catalogHierarchy */])), tags) || '').toLowerCase();
  if (!gender) return {};
  const category = (external_ramda_["find"](tag => external_ramda_["includes"](tag && tag.toLowerCase(), external_ramda_["pluck"]('title')(settings["a" /* catalogHierarchy */][gender].categories)), tags) || '').toLowerCase();
  const categoryObj = settings["a" /* catalogHierarchy */][gender] ? external_ramda_["find"](external_ramda_["propEq"]('title', category), settings["a" /* catalogHierarchy */][gender].categories) : {
    subcategories: []
  };
  const subcategory = categoryObj ? (external_ramda_["find"](tag => external_ramda_["includes"](tag.toLowerCase(), external_ramda_["compose"](external_ramda_["flatten"], external_ramda_["pluck"]('tags'))(categoryObj.subcategories)), tags) || '').toLowerCase() : '';
  return {
    category: capfirst(category),
    gender: capfirst(gender),
    subcategory: capfirst(subcategory)
  };
};
// CONCATENATED MODULE: ./components/common/helpers/shopify-edges-to-products.tsx

const shopifyEdgesToProducts = params => external_ramda_["compose"](external_ramda_["pluck"]('node'), external_ramda_["pathOr"]([], external_ramda_["filter"](Boolean, [params.queryName, 'products', 'edges'])))(params.data);
// CONCATENATED MODULE: ./components/common/helpers/translated-product-description.tsx
// If description translation exists for current language returns it, ottherwise returns default english description
const translatedProductDescription = params => {
  const translationKey = `productDescription-${params.product.handle}`;
  return params.i18n.exists(translationKey) ? params.t(translationKey) : params.product.descriptionHtml;
};
// CONCATENATED MODULE: ./components/common/helpers/translated-product-title.tsx
// If title translation exists for current language returns it, ottherwise returns default english title
const translatedProductTitle = params => {
  const translationKey = `productTitle-${params.product.handle}`;
  return params.i18n.exists(translationKey) ? params.t(translationKey) : params.product.title;
};
// CONCATENATED MODULE: ./components/common/helpers/index.tsx



























/***/ }),

/***/ "Iu9h":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return vendors; });
const vendors = {
  men: [{
    collection: 'mens-11-by-boris-bidjan-saberi',
    title: '11 BY BORIS BIDJAN SABERI'
  }, {
    collection: 'mens-adidas',
    title: 'Adidas'
  }, {
    collection: 'mens-ann-demeulemeester',
    title: 'ANN DEMEULEMEESTER'
  }, {
    collection: 'mens-ami-alexandre-mattussi',
    title: 'AMI ALEXANDRE MATTUSSI'
  }, {
    collection: 'mens-by-walid',
    title: 'BY WALID'
  }, {
    collection: 'mens-casey-casey',
    title: 'CASEY CASEY'
  }, {
    collection: 'mens-comme-des-gar%C3%A7ons-homme-plus',
    title: 'COMME DES GARÇONS HOMME PLUS'
  }, {
    collection: 'mens-damir-doma',
    title: 'DAMIR DOMA'
  }, {
    collection: 'mens-etudes',
    title: 'ÉTUDES'
  }, {
    collection: 'mens-gcds',
    title: 'GCDS'
  }, {
    collection: 'mens-geoffrey-b-small',
    title: 'GEOFFREY B. SMALL'
  }, {
    collection: 'mens-guidi',
    title: 'GUIDI'
  }, {
    collection: 'mens-hed-mayner',
    title: 'HED MAYNER'
  }, {
    collection: 'mens-hender-scheme',
    title: 'HENDER SCHEME'
  }, {
    collection: 'mens-heron-preston',
    title: 'HERON PRESTON'
  }, {
    collection: 'mens-individual-sentiments',
    title: 'INDIVIDUAL SENTIMENTS'
  }, {
    collection: 'mens-jan-jan-van-essche',
    title: 'JAN-JAN VAN ESSCHE'
  }, {
    collection: 'mens-jeremy-scott',
    title: 'JEREMY SCOTT'
  }, {
    collection: 'mens-kenzo',
    title: 'KENZO'
  }, {
    collection: 'mens-kuboraum',
    title: 'KUBORAUM'
  }, {
    collection: 'mens-label-under-construction',
    title: 'LABEL UNDER CONSTRUCTION'
  }, {
    collection: 'mens-lost-and-found-ria-dunn-mens',
    title: 'LOST & FOUND'
  }, {
    collection: 'mens-mackintosh',
    title: 'MACKINTOSH'
  }, {
    collection: 'mens-mackintosh-0002',
    title: 'MACKINTOSH 0002'
  }, {
    collection: 'mens-mackintosh-0004',
    title: 'MACKINTOSH 0004'
  }, {
    collection: 'mens-marni',
    title: 'MARNI'
  }, {
    collection: 'mens-meo-fusciuni',
    title: 'MEO FUSCIUNI'
  }, {
    collection: 'mens-m_moria-by-maurizio-altieri',
    title: 'M_MORIA'
  }, {
    collection: 'mens-mykita',
    title: 'MYKITA'
  }, {
    collection: 'mens-neil-barrett',
    title: 'NEIL BARRETT'
  }, {
    collection: 'mens-parts-of-4',
    title: 'PARTS OF 4'
  }, {
    collection: 'mens-eastpak',
    title: 'RAF SIMONS & EASTPAK'
  }, {
    collection: 'mens-rick-owens',
    title: 'RICK OWENS'
  }, {
    collection: 'mens-rick-owens-drkshdw',
    title: 'RICK OWENS DRKSHDW'
  }, {
    collection: 'mens-stephan-schneider',
    title: 'STEPHAN SCHNEIDER'
  }, {
    collection: 'mens-the-viridi-anne',
    title: 'THE VIRIDI-ANNE'
  }, {
    collection: 'mens-valentino',
    title: 'VALENTINO'
  }, {
    collection: 'mens-werkstatt-munchen',
    title: 'MÜNCHEN'
  }, {
    collection: 'mens-y-3',
    title: 'Y-3'
  }, {
    collection: 'mens-yang-li',
    title: 'YANG LI'
  }, {
    collection: 'mens-yeezy',
    title: 'YEEZY'
  }, {
    collection: 'mens-yohji-yamamoto',
    title: 'YOHJI YAMAMOTO'
  }, {
    collection: 'all',
    title: 'VIEW ALL'
  }],
  women: [{
    collection: 'womens-phillip-lim',
    title: '3.1 PHILLIP LIM'
  }, {
    collection: 'mens-adidas',
    title: 'ADIDAS'
  }, {
    collection: 'womens-alexander-wang',
    title: 'ALEXANDER WANG'
  }, {
    collection: 'mens-ann-demeulemeester',
    title: 'ANN DEMEULEMEESTER'
  }, {
    collection: 'womens-courreges',
    title: 'COURREGES'
  }, {
    collection: 'womens-cushnie',
    title: 'CUSHNIE'
  }, {
    collection: 'david-koma',
    title: 'DAVID KOMA'
  }, {
    collection: 'womens-dion-lee',
    title: 'DION LEE'
  }, {
    collection: 'womens-ellery',
    title: 'ELLERY'
  }, {
    collection: 'womens-etudes',
    title: 'ÉTUDES'
  }, {
    collection: 'womens-fannie-schiavoni',
    title: 'FANNIE SCHIAVONI'
  }, {
    collection: 'womens-fleur-du-mal',
    title: 'FLEUR DU MAL'
  }, {
    collection: 'womens-galvan',
    title: 'GALVAN'
  }, {
    collection: 'womens-geoffrey-b-small',
    title: 'GEOFFREY B. SMALL'
  }, {
    collection: 'womens-guidi',
    title: 'GUIDI'
  }, {
    collection: 'womens-jeremy-scott',
    title: 'JEREMY SCOTT'
  }, {
    collection: 'womens-kenzo',
    title: 'KENZO'
  }, {
    collection: 'womens-kuboraum',
    title: 'KUBORAUM'
  }, {
    collection: 'womens-meo-fusciuni',
    title: 'MEO FUSCIUNI'
  }, {
    collection: 'womens-mykita',
    title: 'MYKITA'
  }, {
    collection: 'womens-mugler',
    title: 'MUGLER'
  }, {
    collection: 'womens-proenza-schouler',
    title: 'PROENZA SCHOULER'
  }, {
    collection: 'womens-r13',
    title: 'R13'
  }, {
    collection: 'womens-roberto-cavalli',
    title: 'ROBERTO CAVALLI'
  }, {
    collection: 'womens-rick-owens',
    title: 'RICK OWENS'
  }, {
    collection: 'womens-rick-owens-drkshdw',
    title: 'RICK OWENS DRKSHDW'
  }, {
    collection: 'versace',
    title: 'VERSACE'
  }, {
    collection: 'womens-victoria-beckham',
    title: 'VICTORIA BECKHAM'
  }, {
    collection: 'womens-viktor-and-rolf',
    title: 'VIKTOR & ROLF'
  }, {
    collection: 'womens-werkstatt-m-nchen',
    title: 'MÜNCHEN'
  }, {
    collection: 'womens-y-3',
    title: 'Y-3'
  }, {
    collection: 'womens-yang-li',
    title: 'YANG LI'
  }, {
    collection: 'womens-yeezy',
    title: 'YEEZY'
  }, {
    collection: 'womens-zimmermann',
    title: 'ZIMMERMANN'
  }]
};

/***/ }),

/***/ "KNus":
/***/ (function(module, exports) {

module.exports = require("next/config");

/***/ }),

/***/ "NYPX":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ catalogHierarchy; });

// UNUSED EXPORTS: vendors

// CONCATENATED MODULE: ./settings/catalog-hierarchy.ts
/*
Gender
  Categories
    Subcategories
      Tags
*/
const catalogHierarchy = {
  men: {
    categories: [{
      subcategories: [{
        title: 'blazers'
      }, {
        title: 'coats'
      }, {
        tags: ['bomber jackets', 'denim jackets', 'hooded jackets', 'lightweight jackets', 'puffer jackets', 'shirt jackets', 'vests & waistcoats', 'coats'],
        title: 'jackets'
      }, {
        title: 'jeans'
      }, {
        tags: ['cardigans', 'hoodies', 'knitted sweaters', 'sweatshirts'],
        title: 'knitwear'
      }, {
        tags: ['cargo pants', 'cropped pants', 'track pants', 'drop-crotch pants', 'leggings', 'loose fit pants', 'skinny pants', 'straight leg pants', 'tailored trousers'],
        title: 'pants'
      }, {
        tags: ['long sleeve shirts', 'polo shirts', 'short sleeve shirts', 't-shirts'],
        title: 'shirts'
      }, {
        title: 'shorts'
      }, {
        title: 'track pants'
      }, {
        title: 'sportswear'
      }, {
        title: 'sweatshirts'
      }, {
        title: 'swimwear'
      }, {
        title: 'tops'
      }, {
        title: 't-shirts'
      }],
      title: 'clothing'
    }, {
      subcategories: [{
        tags: ['leather', 'suede'],
        title: 'boots'
      }, {
        title: 'lace-ups'
      }, {
        title: 'sandals'
      }, {
        title: 'slip ons'
      }, {
        tags: ['leather', 'suede', 'canvas'],
        title: 'sneakers'
      }, {
        title: 'slides'
      }],
      title: 'shoes'
    }, {
      subcategories: [{
        title: 'backpacks'
      }, {
        title: 'belt bags'
      }, {
        title: 'breifcases'
      }, {
        title: 'cross body bags'
      }, {
        title: 'shoulder bags'
      }, {
        title: 'tote bags'
      }, {
        title: 'weekend bags'
      }],
      title: 'bags'
    }, {
      subcategories: [{
        title: 'belts'
      }, {
        title: 'fragrance'
      }, {
        tags: ['leather', 'cashmere'],
        title: 'gloves'
      }, {
        title: 'hats'
      }, {
        tags: ['bracelets', 'earrings', 'necklaces', 'rings'],
        title: 'jewelry'
      }, {
        title: 'keyrings'
      }, {
        tags: ['cashmere', 'print'],
        title: 'scarves'
      }, {
        tags: ['underwear'],
        title: 'underwear & socks'
      }, {
        tags: ['oversized'],
        title: 'sunglasses'
      }, {
        title: 'tech'
      }, {
        title: 'ties'
      }, {
        title: 'wallets & cardholders'
      }],
      title: 'accessories'
    }]
  },
  women: {
    categories: [{
      subcategories: [{
        title: 'blazers'
      }, {
        tags: ['capes', 'double-breasted coats', 'shearling coats', 'parkas', 'single-breasted coats', 'trench & raincoats'],
        title: 'coats'
      }, {
        tags: ['knitted dresses'],
        title: 'dresses'
      }, {
        tags: ['biker jackets', 'leather jackets', 'track jackets', 'waistcoats & gilets'],
        title: 'jackets'
      }, {
        title: 'jeans'
      }, {
        tags: ['cardigans', 'jumpers', 'knitted dresses'],
        title: 'knitwear'
      }, {
        title: 'leggings'
      }, {
        tags: ['cropped pants', 'high-waisted pants', 'skinny pants', 'straight leg pants', 'tailored trousers', 'track pants', 'trousers'],
        title: 'pants'
      }, {
        title: 'shirts'
      }, {
        title: 'shorts'
      }, {
        tags: ['denim'],
        title: 'skirts'
      }, {
        title: 'sportswear'
      }, {
        title: 'sweatshirts'
      }, {
        title: 'swimwear'
      }, {
        tags: ['bodysuits', 'cardigans', 'hoodies', 'long sleeve shirts', 'short sleeve shirts', 'tanks', 'tunics'],
        title: 'tops'
      }, {
        title: 't-shirts'
      }, {
        title: 'underwear & lingerie'
      }],
      title: 'clothing'
    }, {
      subcategories: [{
        title: 'boots'
      }, {
        title: 'flats'
      }, {
        title: 'heels'
      }, {
        title: 'lace-ups'
      }, {
        title: 'platforms'
      }, {
        title: 'sandals'
      }, {
        tags: ['leather', 'suede', 'canvas'],
        title: 'sneakers'
      }, {
        title: 'slides'
      }],
      title: 'shoes'
    }, {
      subcategories: [{
        title: 'backpacks'
      }, {
        title: 'belt bags'
      }, {
        title: 'crossbody bags'
      }, {
        title: 'clutch bags'
      }, {
        title: 'hand bags'
      }, {
        title: 'shoulder bags'
      }, {
        title: 'tote bags'
      }],
      title: 'bags'
    }, {
      subcategories: [{
        title: 'beauty'
      }, {
        title: 'belts'
      }, {
        title: 'fragrance'
      }, {
        tags: ['leather', 'cashmere'],
        title: 'gloves'
      }, {
        title: 'hats'
      }, {
        tags: ['bracelets', 'earrings', 'necklaces', 'rings'],
        title: 'jewelry'
      }, {
        title: 'keyrings'
      }, {
        tags: ['cashmere', 'print'],
        title: 'scarves'
      }, {
        title: 'socks'
      }, {
        tags: ['oversized'],
        title: 'sunglasses'
      }, {
        title: 'tech'
      }, {
        title: 'wallets & cardholders'
      }],
      title: 'accessories'
    }]
  }
};
// EXTERNAL MODULE: ./settings/vendors.ts
var vendors = __webpack_require__("Iu9h");

// CONCATENATED MODULE: ./settings/index.ts



/***/ }),

/***/ "P4FY":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Portal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return PortalManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return PortalProvider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("faye");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("FaPq");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const PortalContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])({
  createPortal: () => null
});

function Portal(props) {
  const ctx = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(PortalContext); // WARN do not remove wrapper with suppressHydrationWarning

  return __jsx("span", {
    suppressHydrationWarning: true
  }, ctx.createPortal(props.children, props.selector));
}

class PortalManager {
  constructor() {
    _defineProperty(this, "portals", []);
  }

  create(children) {
    if (this.portals) this.portals.push(children);
  }

}

function PortalProvider(props) {
  const create = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((children, selector = '#portals') => {
    if (Object(_helpers__WEBPACK_IMPORTED_MODULE_2__[/* isServer */ "p"])()) return null;
    if (props.manager) props.manager.create([children, selector]);
    return /*#__PURE__*/Object(react_dom__WEBPACK_IMPORTED_MODULE_1__["createPortal"])(children, document.querySelector(selector));
  }, [props.manager]);
  const value = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => ({
    createPortal: create
  }), [create]);
  return __jsx(PortalContext.Provider, {
    value: value
  }, props.children);
}



/***/ }),

/***/ "UJjI":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/constants.js");

/***/ }),

/***/ "VDXt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.__esModule = true;
exports.Html = Html;
exports.Main = Main;
exports.NextScript = exports.Head = exports.default = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__("rf6O"));

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _server = _interopRequireDefault(__webpack_require__("2+G7"));

var _constants = __webpack_require__("UJjI");

var _documentContext = __webpack_require__("nMq/");

var _utils = __webpack_require__("kYf9");

exports.DocumentContext = _utils.DocumentContext;
exports.DocumentInitialProps = _utils.DocumentInitialProps;
exports.DocumentProps = _utils.DocumentProps;

var _getPageFiles = __webpack_require__("vHio");

var _utils2 = __webpack_require__("ri/Y");

var _htmlescape = __webpack_require__("AXZJ");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

function dedupe(bundles) {
  const files = new Set();
  const kept = [];

  for (const bundle of bundles) {
    if (files.has(bundle.file)) continue;
    files.add(bundle.file);
    kept.push(bundle);
  }

  return kept;
}

function getOptionalModernScriptVariant(path) {
  if (false) {}

  return path;
}

function getDocumentFiles(buildManifest, pathname) {
  const sharedFiles = (0, _getPageFiles.getPageFiles)(buildManifest, '/_app');
  const pageFiles = pathname !== '/_error' ? (0, _getPageFiles.getPageFiles)(buildManifest, pathname) : [];
  return {
    sharedFiles,
    pageFiles,
    allFiles: [...new Set([...sharedFiles, ...pageFiles])]
  };
}
/**
* `Document` component handles the initial `document` markup and renders only on the server side.
* Commonly used for implementing server side rendering for `css-in-js` libraries.
*/


class Document extends _react.Component {
  /**
  * `getInitialProps` hook returns the context object with the addition of `renderPage`.
  * `renderPage` callback executes `React` rendering logic synchronously to support server-rendering wrappers
  */
  static async getInitialProps(ctx) {
    const enhanceApp = App => {
      return props => /*#__PURE__*/_react.default.createElement(App, props);
    };

    const {
      html,
      head
    } = await ctx.renderPage({
      enhanceApp
    });
    const styles = [...(0, _server.default)()];
    return {
      html,
      head,
      styles
    };
  }

  static renderDocument(DocumentComponent, props) {
    return /*#__PURE__*/_react.default.createElement(_documentContext.DocumentContext.Provider, {
      value: props
    }, /*#__PURE__*/_react.default.createElement(DocumentComponent, props));
  }

  render() {
    return /*#__PURE__*/_react.default.createElement(Html, null, /*#__PURE__*/_react.default.createElement(Head, null), /*#__PURE__*/_react.default.createElement("body", null, /*#__PURE__*/_react.default.createElement(Main, null), /*#__PURE__*/_react.default.createElement(NextScript, null)));
  }

}

exports.default = Document;
Document.headTagsMiddleware =  false ? undefined : () => [];

function Html(props) {
  const {
    inAmpMode,
    docComponentsRendered
  } = (0, _react.useContext)(_documentContext.DocumentContext);
  docComponentsRendered.Html = true;
  return /*#__PURE__*/_react.default.createElement("html", Object.assign({}, props, {
    amp: inAmpMode ? '' : undefined,
    "data-ampdevmode": inAmpMode && false ? '' : undefined
  }));
}

class Head extends _react.Component {
  constructor(...args) {
    super(...args);
    this.context = void 0;
  }

  getCssLinks(files) {
    const {
      assetPrefix,
      devOnlyCacheBusterQueryString,
      dynamicImports
    } = this.context;
    const cssFiles = files.allFiles.filter(f => f.endsWith('.css'));
    const sharedFiles = new Set(files.sharedFiles);
    let dynamicCssFiles = dedupe(dynamicImports.filter(f => f.file.endsWith('.css'))).map(f => f.file);

    if (dynamicCssFiles.length) {
      const existing = new Set(cssFiles);
      dynamicCssFiles = dynamicCssFiles.filter(f => !(existing.has(f) || sharedFiles.has(f)));
      cssFiles.push(...dynamicCssFiles);
    }

    const cssLinkElements = [];
    cssFiles.forEach(file => {
      const isSharedFile = sharedFiles.has(file);
      cssLinkElements.push( /*#__PURE__*/_react.default.createElement("link", {
        key: `${file}-preload`,
        nonce: this.props.nonce,
        rel: "preload",
        href: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
        as: "style",
        crossOrigin: this.props.crossOrigin || undefined
      }), /*#__PURE__*/_react.default.createElement("link", {
        key: file,
        nonce: this.props.nonce,
        rel: "stylesheet",
        href: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
        crossOrigin: this.props.crossOrigin || undefined,
        "data-n-g": isSharedFile ? '' : undefined,
        "data-n-p": isSharedFile ? undefined : ''
      }));
    });
    return cssLinkElements.length === 0 ? null : cssLinkElements;
  }

  getPreloadDynamicChunks() {
    const {
      dynamicImports,
      assetPrefix,
      devOnlyCacheBusterQueryString
    } = this.context;
    return dedupe(dynamicImports).map(bundle => {
      // `dynamicImports` will contain both `.js` and `.module.js` when the
      // feature is enabled. This clause will filter down to the modern
      // variants only.
      if (!bundle.file.endsWith(getOptionalModernScriptVariant('.js'))) {
        return null;
      }

      return /*#__PURE__*/_react.default.createElement("link", {
        rel: "preload",
        key: bundle.file,
        href: `${assetPrefix}/_next/${encodeURI(bundle.file)}${devOnlyCacheBusterQueryString}`,
        as: "script",
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined
      });
    }) // Filter out nulled scripts
    .filter(Boolean);
  }

  getPreloadMainLinks(files) {
    const {
      assetPrefix,
      devOnlyCacheBusterQueryString
    } = this.context;
    const preloadFiles = files.allFiles.filter(file => {
      // `dynamicImports` will contain both `.js` and `.module.js` when
      // the feature is enabled. This clause will filter down to the
      // modern variants only.
      return file.endsWith(getOptionalModernScriptVariant('.js'));
    });
    return !preloadFiles.length ? null : preloadFiles.map(file => /*#__PURE__*/_react.default.createElement("link", {
      key: file,
      nonce: this.props.nonce,
      rel: "preload",
      href: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
      as: "script",
      crossOrigin: this.props.crossOrigin || undefined
    }));
  }

  makeStylesheetInert(node) {
    return _react.default.Children.map(node, c => {
      if (c.type === 'link' && c.props['href'] && _constants.OPTIMIZED_FONT_PROVIDERS.some(url => c.props['href'].startsWith(url))) {
        const newProps = _objectSpread({}, c.props || {});

        newProps['data-href'] = newProps['href'];
        newProps['href'] = undefined;
        return /*#__PURE__*/_react.default.cloneElement(c, newProps);
      } else if (c.props && c.props['children']) {
        c.props['children'] = this.makeStylesheetInert(c.props['children']);
      }

      return c;
    });
  }

  render() {
    const {
      styles,
      ampPath,
      inAmpMode,
      hybridAmp,
      canonicalBase,
      __NEXT_DATA__,
      dangerousAsPath,
      headTags,
      unstable_runtimeJS
    } = this.context;
    const disableRuntimeJS = unstable_runtimeJS === false;
    this.context.docComponentsRendered.Head = true;
    let {
      head
    } = this.context;
    let children = this.props.children; // show a warning if Head contains <title> (only in development)

    if (false) {}

    if (false) {}

    let hasAmphtmlRel = false;
    let hasCanonicalRel = false; // show warning and remove conflicting amp head tags

    head = _react.default.Children.map(head || [], child => {
      if (!child) return child;
      const {
        type,
        props
      } = child;

      if (inAmpMode) {
        let badProp = '';

        if (type === 'meta' && props.name === 'viewport') {
          badProp = 'name="viewport"';
        } else if (type === 'link' && props.rel === 'canonical') {
          hasCanonicalRel = true;
        } else if (type === 'script') {
          // only block if
          // 1. it has a src and isn't pointing to ampproject's CDN
          // 2. it is using dangerouslySetInnerHTML without a type or
          // a type of text/javascript
          if (props.src && props.src.indexOf('ampproject') < -1 || props.dangerouslySetInnerHTML && (!props.type || props.type === 'text/javascript')) {
            badProp = '<script';
            Object.keys(props).forEach(prop => {
              badProp += ` ${prop}="${props[prop]}"`;
            });
            badProp += '/>';
          }
        }

        if (badProp) {
          console.warn(`Found conflicting amp tag "${child.type}" with conflicting prop ${badProp} in ${__NEXT_DATA__.page}. https://err.sh/next.js/conflicting-amp-tag`);
          return null;
        }
      } else {
        // non-amp mode
        if (type === 'link' && props.rel === 'amphtml') {
          hasAmphtmlRel = true;
        }
      }

      return child;
    }); // try to parse styles from fragment for backwards compat

    const curStyles = Array.isArray(styles) ? styles : [];

    if (inAmpMode && styles && // @ts-ignore Property 'props' does not exist on type ReactElement
    styles.props && // @ts-ignore Property 'props' does not exist on type ReactElement
    Array.isArray(styles.props.children)) {
      const hasStyles = el => {
        var _el$props, _el$props$dangerously;

        return el === null || el === void 0 ? void 0 : (_el$props = el.props) === null || _el$props === void 0 ? void 0 : (_el$props$dangerously = _el$props.dangerouslySetInnerHTML) === null || _el$props$dangerously === void 0 ? void 0 : _el$props$dangerously.__html;
      }; // @ts-ignore Property 'props' does not exist on type ReactElement


      styles.props.children.forEach(child => {
        if (Array.isArray(child)) {
          child.forEach(el => hasStyles(el) && curStyles.push(el));
        } else if (hasStyles(child)) {
          curStyles.push(child);
        }
      });
    }

    const files = getDocumentFiles(this.context.buildManifest, this.context.__NEXT_DATA__.page);
    return /*#__PURE__*/_react.default.createElement("head", this.props, this.context.isDevelopment && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("style", {
      "data-next-hide-fouc": true,
      "data-ampdevmode": inAmpMode ? 'true' : undefined,
      dangerouslySetInnerHTML: {
        __html: `body{display:none}`
      }
    }), /*#__PURE__*/_react.default.createElement("noscript", {
      "data-next-hide-fouc": true,
      "data-ampdevmode": inAmpMode ? 'true' : undefined
    }, /*#__PURE__*/_react.default.createElement("style", {
      dangerouslySetInnerHTML: {
        __html: `body{display:block}`
      }
    }))), children, head, /*#__PURE__*/_react.default.createElement("meta", {
      name: "next-head-count",
      content: _react.default.Children.count(head || []).toString()
    }), inAmpMode && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("meta", {
      name: "viewport",
      content: "width=device-width,minimum-scale=1,initial-scale=1"
    }), !hasCanonicalRel && /*#__PURE__*/_react.default.createElement("link", {
      rel: "canonical",
      href: canonicalBase + (0, _utils2.cleanAmpPath)(dangerousAsPath)
    }), /*#__PURE__*/_react.default.createElement("link", {
      rel: "preload",
      as: "script",
      href: "https://cdn.ampproject.org/v0.js"
    }), styles && /*#__PURE__*/_react.default.createElement("style", {
      "amp-custom": "",
      dangerouslySetInnerHTML: {
        __html: curStyles.map(style => style.props.dangerouslySetInnerHTML.__html).join('').replace(/\/\*# sourceMappingURL=.*\*\//g, '').replace(/\/\*@ sourceURL=.*?\*\//g, '')
      }
    }), /*#__PURE__*/_react.default.createElement("style", {
      "amp-boilerplate": "",
      dangerouslySetInnerHTML: {
        __html: `body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}`
      }
    }), /*#__PURE__*/_react.default.createElement("noscript", null, /*#__PURE__*/_react.default.createElement("style", {
      "amp-boilerplate": "",
      dangerouslySetInnerHTML: {
        __html: `body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}`
      }
    })), /*#__PURE__*/_react.default.createElement("script", {
      async: true,
      src: "https://cdn.ampproject.org/v0.js"
    })), !inAmpMode && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !hasAmphtmlRel && hybridAmp && /*#__PURE__*/_react.default.createElement("link", {
      rel: "amphtml",
      href: canonicalBase + getAmpPath(ampPath, dangerousAsPath)
    }),  false ? undefined : this.getCssLinks(files), /*#__PURE__*/_react.default.createElement("noscript", {
      "data-n-css": true
    }), !disableRuntimeJS && this.getPreloadDynamicChunks(), !disableRuntimeJS && this.getPreloadMainLinks(files), this.context.isDevelopment &&
    /*#__PURE__*/
    // this element is used to mount development styles so the
    // ordering matches production
    // (by default, style-loader injects at the bottom of <head />)
    _react.default.createElement("noscript", {
      id: "__next_css__DO_NOT_USE__"
    }), styles || null), /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {}, ...(headTags || [])));
  }

}

exports.Head = Head;
Head.contextType = _documentContext.DocumentContext;
Head.propTypes = {
  nonce: _propTypes.default.string,
  crossOrigin: _propTypes.default.string
};

function Main() {
  const {
    inAmpMode,
    html,
    docComponentsRendered
  } = (0, _react.useContext)(_documentContext.DocumentContext);
  docComponentsRendered.Main = true;
  if (inAmpMode) return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, _constants.AMP_RENDER_TARGET);
  return /*#__PURE__*/_react.default.createElement("div", {
    id: "__next",
    dangerouslySetInnerHTML: {
      __html: html
    }
  });
}

class NextScript extends _react.Component {
  constructor(...args) {
    super(...args);
    this.context = void 0;
  }

  getDynamicChunks(files) {
    const {
      dynamicImports,
      assetPrefix,
      isDevelopment,
      devOnlyCacheBusterQueryString
    } = this.context;
    return dedupe(dynamicImports).map(bundle => {
      let modernProps = {};

      if (false) {}

      if (!bundle.file.endsWith('.js') || files.allFiles.includes(bundle.file)) return null;
      return /*#__PURE__*/_react.default.createElement("script", Object.assign({
        async: !isDevelopment,
        key: bundle.file,
        src: `${assetPrefix}/_next/${encodeURI(bundle.file)}${devOnlyCacheBusterQueryString}`,
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined
      }, modernProps));
    });
  }

  getScripts(files) {
    var _buildManifest$lowPri;

    const {
      assetPrefix,
      buildManifest,
      isDevelopment,
      devOnlyCacheBusterQueryString
    } = this.context;
    const normalScripts = files.allFiles.filter(file => file.endsWith('.js'));
    const lowPriorityScripts = (_buildManifest$lowPri = buildManifest.lowPriorityFiles) === null || _buildManifest$lowPri === void 0 ? void 0 : _buildManifest$lowPri.filter(file => file.endsWith('.js'));
    return [...normalScripts, ...lowPriorityScripts].map(file => {
      let modernProps = {};

      if (false) {}

      return /*#__PURE__*/_react.default.createElement("script", Object.assign({
        key: file,
        src: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
        nonce: this.props.nonce,
        async: !isDevelopment,
        crossOrigin: this.props.crossOrigin || undefined
      }, modernProps));
    });
  }

  getPolyfillScripts() {
    // polyfills.js has to be rendered as nomodule without async
    // It also has to be the first script to load
    const {
      assetPrefix,
      buildManifest,
      devOnlyCacheBusterQueryString
    } = this.context;
    return buildManifest.polyfillFiles.filter(polyfill => polyfill.endsWith('.js') && !polyfill.endsWith('.module.js')).map(polyfill => /*#__PURE__*/_react.default.createElement("script", {
      key: polyfill,
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined,
      noModule: true,
      src: `${assetPrefix}/_next/${polyfill}${devOnlyCacheBusterQueryString}`
    }));
  }

  static getInlineScriptSource(documentProps) {
    const {
      __NEXT_DATA__
    } = documentProps;

    try {
      const data = JSON.stringify(__NEXT_DATA__);
      return (0, _htmlescape.htmlEscapeJsonString)(data);
    } catch (err) {
      if (err.message.indexOf('circular structure')) {
        throw new Error(`Circular structure in "getInitialProps" result of page "${__NEXT_DATA__.page}". https://err.sh/vercel/next.js/circular-structure`);
      }

      throw err;
    }
  }

  render() {
    const {
      assetPrefix,
      inAmpMode,
      buildManifest,
      unstable_runtimeJS,
      docComponentsRendered,
      devOnlyCacheBusterQueryString
    } = this.context;
    const disableRuntimeJS = unstable_runtimeJS === false;
    docComponentsRendered.NextScript = true;

    if (inAmpMode) {
      if (true) {
        return null;
      }

      const ampDevFiles = [...buildManifest.devFiles, ...buildManifest.ampDevFiles];
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, disableRuntimeJS ? null : /*#__PURE__*/_react.default.createElement("script", {
        id: "__NEXT_DATA__",
        type: "application/json",
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined,
        dangerouslySetInnerHTML: {
          __html: NextScript.getInlineScriptSource(this.context)
        },
        "data-ampdevmode": true
      }), ampDevFiles.map(file => /*#__PURE__*/_react.default.createElement("script", {
        key: file,
        src: `${assetPrefix}/_next/${file}${devOnlyCacheBusterQueryString}`,
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined,
        "data-ampdevmode": true
      })));
    }

    if (false) {}

    const files = getDocumentFiles(this.context.buildManifest, this.context.__NEXT_DATA__.page);
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !disableRuntimeJS && buildManifest.devFiles ? buildManifest.devFiles.map(file => /*#__PURE__*/_react.default.createElement("script", {
      key: file,
      src: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined
    })) : null, disableRuntimeJS ? null : /*#__PURE__*/_react.default.createElement("script", {
      id: "__NEXT_DATA__",
      type: "application/json",
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined,
      dangerouslySetInnerHTML: {
        __html: NextScript.getInlineScriptSource(this.context)
      }
    }),  false ? /*#__PURE__*/undefined : null, !disableRuntimeJS && this.getPolyfillScripts(), disableRuntimeJS ? null : this.getDynamicChunks(files), disableRuntimeJS ? null : this.getScripts(files));
  }

}

exports.NextScript = NextScript;
NextScript.contextType = _documentContext.DocumentContext;
NextScript.propTypes = {
  nonce: _propTypes.default.string,
  crossOrigin: _propTypes.default.string
};
NextScript.safariNomoduleFix = '!function(){var e=document,t=e.createElement("script");if(!("noModule"in t)&&"onbeforeload"in t){var n=!1;e.addEventListener("beforeload",function(e){if(e.target===t)n=!0;else if(!e.target.hasAttribute("nomodule")||!n)return;e.preventDefault()},!0),t.type="module",t.src=".",e.head.appendChild(t),t.remove()}}();';

function getAmpPath(ampPath, asPath) {
  return ampPath || `${asPath}${asPath.includes('?') ? '&' : '?'}amp=1`;
}

/***/ }),

/***/ "Y7Z2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MyDocument; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("8cZr");
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_document__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var cheerio__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("yB+y");
/* harmony import */ var cheerio__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(cheerio__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_common_Portal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("P4FY");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("7ITC");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_4__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





class MyDocument extends next_document__WEBPACK_IMPORTED_MODULE_1___default.a {
  static async getInitialProps(ctx) {
    const originalRenderPage = ctx.renderPage;
    const portalManager = new _components_common_Portal__WEBPACK_IMPORTED_MODULE_3__[/* PortalManager */ "b"]();

    ctx.renderPage = () => originalRenderPage({
      enhanceApp: App => props => __jsx(App, _extends({}, props, {
        portalManager: portalManager
      }))
    });

    const initialProps = await next_document__WEBPACK_IMPORTED_MODULE_1___default.a.getInitialProps(ctx);
    const $ = Object(cheerio__WEBPACK_IMPORTED_MODULE_2__["load"])(initialProps.html);
    const {
      res: {
        locals
      }
    } = ctx;
    portalManager.portals.forEach(([children, selector]) => $(Object(react_dom_server__WEBPACK_IMPORTED_MODULE_4__["renderToStaticMarkup"])(children)).attr('data-react-portal', '').appendTo(selector));
    return _objectSpread(_objectSpread({}, initialProps), {}, {
      html: $('body').html(),
      language: locals.language
    });
  }

  render() {
    return __jsx("html", {
      lang: this.props.language
    }, __jsx(next_document__WEBPACK_IMPORTED_MODULE_1__["Head"], null), __jsx("body", null, __jsx(next_document__WEBPACK_IMPORTED_MODULE_1__["Main"], null), __jsx(next_document__WEBPACK_IMPORTED_MODULE_1__["NextScript"], null)));
  }

}

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "faye":
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),

/***/ "kYf9":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "nMq/":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/document-context.js");

/***/ }),

/***/ "rf6O":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "ri/Y":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/server/utils.js");

/***/ }),

/***/ "vHio":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/server/get-page-files.js");

/***/ }),

/***/ "vNl1":
/***/ (function(module, exports) {

module.exports = require("prismic-javascript");

/***/ }),

/***/ "vmXh":
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "yB+y":
/***/ (function(module, exports) {

module.exports = require("cheerio");

/***/ })

/******/ });