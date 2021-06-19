module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ({

/***/ 12:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("EP3i");


/***/ }),

/***/ "ANpm":
/***/ (function(module, exports) {

module.exports = require("ramda");

/***/ }),

/***/ "EP3i":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ANpm");
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ramda__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("xg6A");
/* harmony import */ var prismic_javascript__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("vNl1");
/* harmony import */ var prismic_javascript__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prismic_javascript__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_common_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("FaPq");




const itemsPerPage = 100;

async function blogPostUIDs() {
  const response = await Object(_components_common_helpers__WEBPACK_IMPORTED_MODULE_3__[/* prismicClient */ "u"])(null).query([prismic_javascript__WEBPACK_IMPORTED_MODULE_2___default.a.Predicates.at('document.type', 'post')], {
    pageSize: itemsPerPage
  });
  let result = [];

  for (const post of response.results) result.push(post);

  if (response.total_pages > 1) {
    const data = await Promise.allSettled([...ramda__WEBPACK_IMPORTED_MODULE_0__["times"](ramda__WEBPACK_IMPORTED_MODULE_0__["identity"], response.total_pages - 1).map(idx => Object(_components_common_helpers__WEBPACK_IMPORTED_MODULE_3__[/* prismicClient */ "u"])(null).query([prismic_javascript__WEBPACK_IMPORTED_MODULE_2___default.a.Predicates.at('document.type', 'post')], // Do not take the result of an existing first page.
    {
      page: idx + 2,
      pageSize: itemsPerPage
    }))]);

    for (const idx in data) if (data[idx].status === 'fulfilled') // @ts-ignore
      for (const post of data[idx].value.results) result.push(post);
  }

  return result.map(({
    last_publication_date: date,
    uid
  }) => ({
    date,
    uid
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (async (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/xml');
  res.end(Object(_common_helpers__WEBPACK_IMPORTED_MODULE_1__["contentToSitemapXML"])((await blogPostUIDs()).map(({
    date,
    uid
  }) => Object(_common_helpers__WEBPACK_IMPORTED_MODULE_1__["urlToSitemapXMLItem"])({
    date,
    url: `https://blog.cruvoir.com/${uid}`
  })).join('')));
});

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

/***/ "MFeL":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "urlToSitemapXMLItem", function() { return urlToSitemapXMLItem; });
const urlToSitemapXMLItem = params => {
  return `<url>
    <loc>${decodeURI(params.url.replace(/&/g, '&amp;'))}</loc>
    <changefreq>weekly</changefreq>
    ${params.date ? `<lastmod>${new Date(params.date).toISOString()}</lastmod>` : ''}
  </url>`;
};

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

/***/ "OHbw":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "contentToSitemapXML", function() { return contentToSitemapXML; });
const contentToSitemapXML = content => {
  return `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${content}
  </urlset>`;
};

/***/ }),

/***/ "vNl1":
/***/ (function(module, exports) {

module.exports = require("prismic-javascript");

/***/ }),

/***/ "vmXh":
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "xg6A":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _content_to_sitemap_xml__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("OHbw");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "contentToSitemapXML", function() { return _content_to_sitemap_xml__WEBPACK_IMPORTED_MODULE_0__["contentToSitemapXML"]; });

/* harmony import */ var _url_to_sitemap_xml_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("MFeL");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "urlToSitemapXMLItem", function() { return _url_to_sitemap_xml_item__WEBPACK_IMPORTED_MODULE_1__["urlToSitemapXMLItem"]; });




/***/ })

/******/ });