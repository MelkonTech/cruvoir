module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 19);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+T4N":
/***/ (function(module, exports) {

module.exports = {
	"genderLinks": "genderLinks__3gcAq"
};

/***/ }),

/***/ "+alz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Link; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("K2gz");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




function Link(props) {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  return __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, _extends({}, props.as && {
    as: props.as
  }, {
    href: props.href
  }), __jsx("a", _extends({
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(props.className, {
      [props.activeClassName]: props.activeClassName && router.asPath === props.as
    }),
    rel: props.rel,
    onClick: props.onClick
  }, props.isOpenInNewWindow && {
    target: '_blank'
  }, {
    title: props.title
  }), props.children));
}

/***/ }),

/***/ "/a9y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _head = _interopRequireDefault(__webpack_require__("UlpK"));

const statusCodes = {
  400: 'Bad Request',
  404: 'This page could not be found',
  405: 'Method Not Allowed',
  500: 'Internal Server Error'
};

function _getInitialProps({
  res,
  err
}) {
  const statusCode = res && res.statusCode ? res.statusCode : err ? err.statusCode : 404;
  return {
    statusCode
  };
}
/**
* `Error` component used for handling errors.
*/


class Error extends _react.default.Component {
  render() {
    const {
      statusCode
    } = this.props;
    const title = this.props.title || statusCodes[statusCode] || 'An unexpected error has occurred';
    return /*#__PURE__*/_react.default.createElement("div", {
      style: styles.error
    }, /*#__PURE__*/_react.default.createElement(_head.default, null, /*#__PURE__*/_react.default.createElement("title", null, statusCode, ": ", title)), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("style", {
      dangerouslySetInnerHTML: {
        __html: 'body { margin: 0 }'
      }
    }), statusCode ? /*#__PURE__*/_react.default.createElement("h1", {
      style: styles.h1
    }, statusCode) : null, /*#__PURE__*/_react.default.createElement("div", {
      style: styles.desc
    }, /*#__PURE__*/_react.default.createElement("h2", {
      style: styles.h2
    }, title, "."))));
  }

}

exports.default = Error;
Error.displayName = 'ErrorPage';
Error.getInitialProps = _getInitialProps;
Error.origGetInitialProps = _getInitialProps;
const styles = {
  error: {
    color: '#000',
    background: '#fff',
    fontFamily: '-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif',
    height: '100vh',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  desc: {
    display: 'inline-block',
    textAlign: 'left',
    lineHeight: '49px',
    height: '49px',
    verticalAlign: 'middle'
  },
  h1: {
    display: 'inline-block',
    borderRight: '1px solid rgba(0, 0, 0,.3)',
    margin: 0,
    marginRight: '20px',
    padding: '10px 23px 10px 0',
    fontSize: '24px',
    fontWeight: 500,
    verticalAlign: 'top'
  },
  h2: {
    fontSize: '14px',
    fontWeight: 'normal',
    lineHeight: 'inherit',
    margin: 0,
    padding: 0
  }
};

/***/ }),

/***/ "/jkW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "02UG":
/***/ (function(module, exports) {

module.exports = {
	"sizesField": "sizesField__1cCWN"
};

/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("nOHt");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) {}

  return WithRouterWrapper;
}

/***/ }),

/***/ "0D4I":
/***/ (function(module, exports) {


    var doc = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddToWishList"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"customerId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"productId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"insert_wishlist"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"objects"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"customer_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"customerId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"product_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"productId"}}}]}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"returning"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"customer_id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"product_id"},"arguments":[],"directives":[]}]}}]}}]}}],"loc":{"start":0,"end":268}};
    doc.loc.source = {"body":"mutation AddToWishList($customerId: String!, $productId: String!) {\n  __typename\n\n  insert_wishlist(objects: {customer_id: $customerId, product_id: $productId}) {\n    __typename\n\n    returning {\n      __typename\n      id\n      customer_id\n      product_id\n    }\n  }\n}\n","name":"GraphQL request","locationOffset":{"line":1,"column":1}};
  

    var names = {};
    function unique(defs) {
      return defs.filter(
        function(def) {
          if (def.kind !== 'FragmentDefinition') return true;
          var name = def.name.value
          if (names[name]) {
            return false;
          } else {
            names[name] = true;
            return true;
          }
        }
      )
    }
  

    // Collect any fragment/type references from a node, adding them to the refs Set
    function collectFragmentReferences(node, refs) {
      if (node.kind === "FragmentSpread") {
        refs.add(node.name.value);
      } else if (node.kind === "VariableDefinition") {
        var type = node.type;
        if (type.kind === "NamedType") {
          refs.add(type.name.value);
        }
      }

      if (node.selectionSet) {
        node.selectionSet.selections.forEach(function(selection) {
          collectFragmentReferences(selection, refs);
        });
      }

      if (node.variableDefinitions) {
        node.variableDefinitions.forEach(function(def) {
          collectFragmentReferences(def, refs);
        });
      }

      if (node.definitions) {
        node.definitions.forEach(function(def) {
          collectFragmentReferences(def, refs);
        });
      }
    }

    var definitionRefs = {};
    (function extractReferences() {
      doc.definitions.forEach(function(def) {
        if (def.name) {
          var refs = new Set();
          collectFragmentReferences(def, refs);
          definitionRefs[def.name.value] = refs;
        }
      });
    })();

    function findOperation(doc, name) {
      for (var i = 0; i < doc.definitions.length; i++) {
        var element = doc.definitions[i];
        if (element.name && element.name.value == name) {
          return element;
        }
      }
    }

    function oneQuery(doc, operationName) {
      // Copy the DocumentNode, but clear out the definitions
      var newDoc = {
        kind: doc.kind,
        definitions: [findOperation(doc, operationName)]
      };
      if (doc.hasOwnProperty("loc")) {
        newDoc.loc = doc.loc;
      }

      // Now, for the operation we're running, find any fragments referenced by
      // it or the fragments it references
      var opRefs = definitionRefs[operationName] || new Set();
      var allRefs = new Set();
      var newRefs = new Set();

      // IE 11 doesn't support "new Set(iterable)", so we add the members of opRefs to newRefs one by one
      opRefs.forEach(function(refName) {
        newRefs.add(refName);
      });

      while (newRefs.size > 0) {
        var prevRefs = newRefs;
        newRefs = new Set();

        prevRefs.forEach(function(refName) {
          if (!allRefs.has(refName)) {
            allRefs.add(refName);
            var childRefs = definitionRefs[refName] || new Set();
            childRefs.forEach(function(childRef) {
              newRefs.add(childRef);
            });
          }
        });
      }

      allRefs.forEach(function(refName) {
        var op = findOperation(doc, refName);
        if (op) {
          newDoc.definitions.push(op);
        }
      });

      return newDoc;
    }

    module.exports = doc;
    
        module.exports["AddToWishList"] = oneQuery(doc, "AddToWishList");
        


/***/ }),

/***/ "0kp1":
/***/ (function(module, exports, __webpack_require__) {


    var doc = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"checkout"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Checkout"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalTaxV2"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"amount"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"currencyCode"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"discountApplications"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"100"}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DiscountCodeApplication"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"value"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MoneyV2"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"amount"},"arguments":[],"directives":[]}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PricingPercentageValue"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"percentage"},"arguments":[],"directives":[]}]}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"subtotalPriceV2"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"amount"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"currencyCode"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"paymentDueV2"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"amount"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"currencyCode"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"requiresShipping"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"ready"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"shippingAddress"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"address1"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"address2"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"city"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"country"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"firstName"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"lastName"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"zip"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"phone"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"province"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"countryCodeV2"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"provinceCode"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"shippingLine"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"handle"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"title"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"priceV2"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"amount"},"arguments":[],"directives":[]}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalTaxV2"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"amount"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"currencyCode"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"lineItems"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"100"}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"title"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"quantity"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"variant"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"product"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"title"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"vendor"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"handle"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"tags"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"images"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"2"}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"_imageThumb"},"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"altText"},"arguments":[],"directives":[]}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"selectedOptions"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"value"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"compareAtPriceV2"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"amount"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"currencyCode"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"priceV2"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"amount"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"currencyCode"},"arguments":[],"directives":[]}]}}]}}]}}]}}]}}]}}]}}]}}],"loc":{"start":0,"end":2000}};
    doc.loc.source = {"body":"#import \"../../common/graphql/_imageThumb.graphql\"\n\nquery checkout($id: ID!) {\n  node(id: $id) {\n    id\n\n    ... on Checkout {\n      totalTaxV2 {\n        amount\n        currencyCode\n      }\n\n      discountApplications(first: 100) {\n        edges {\n          node {\n            ... on DiscountCodeApplication {\n              code\n            }\n\n            value {\n              ...on MoneyV2 {\n                amount\n              }\n\n              ...on PricingPercentageValue {\n                percentage\n              }\n            }\n          }\n        }\n      }\n\n      subtotalPriceV2 {\n        amount\n        currencyCode\n      }\n\n      paymentDueV2 {\n        amount\n        currencyCode\n      }\n\n      requiresShipping\n      ready\n\n      shippingAddress {\n        id\n        address1\n        address2\n        city\n        country\n        firstName\n        lastName\n        zip\n        phone\n        province\n        countryCodeV2\n        provinceCode\n      }\n\n      shippingLine {\n        handle\n        title\n\n        priceV2 {\n          amount\n        }\n      }\n\n      totalTaxV2 {\n        amount\n        currencyCode\n      }\n\n      lineItems(first: 100) {\n        edges {\n          node {\n            id\n            title\n            quantity\n\n            variant {\n              id\n\n              product {\n                id\n                title\n                vendor\n                handle\n                tags\n\n                images(first: 2) {\n                  edges {\n                    node {\n                      ..._imageThumb\n                      altText\n                    }\n                  }\n                }\n              }\n\n              selectedOptions {\n                name\n                value\n              }\n\n              compareAtPriceV2 {\n                amount\n                currencyCode\n              }\n\n              priceV2 {\n                amount\n                currencyCode\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}\n","name":"GraphQL request","locationOffset":{"line":1,"column":1}};
  

    var names = {};
    function unique(defs) {
      return defs.filter(
        function(def) {
          if (def.kind !== 'FragmentDefinition') return true;
          var name = def.name.value
          if (names[name]) {
            return false;
          } else {
            names[name] = true;
            return true;
          }
        }
      )
    }
  doc.definitions = doc.definitions.concat(unique(__webpack_require__("6GEg").definitions));


    // Collect any fragment/type references from a node, adding them to the refs Set
    function collectFragmentReferences(node, refs) {
      if (node.kind === "FragmentSpread") {
        refs.add(node.name.value);
      } else if (node.kind === "VariableDefinition") {
        var type = node.type;
        if (type.kind === "NamedType") {
          refs.add(type.name.value);
        }
      }

      if (node.selectionSet) {
        node.selectionSet.selections.forEach(function(selection) {
          collectFragmentReferences(selection, refs);
        });
      }

      if (node.variableDefinitions) {
        node.variableDefinitions.forEach(function(def) {
          collectFragmentReferences(def, refs);
        });
      }

      if (node.definitions) {
        node.definitions.forEach(function(def) {
          collectFragmentReferences(def, refs);
        });
      }
    }

    var definitionRefs = {};
    (function extractReferences() {
      doc.definitions.forEach(function(def) {
        if (def.name) {
          var refs = new Set();
          collectFragmentReferences(def, refs);
          definitionRefs[def.name.value] = refs;
        }
      });
    })();

    function findOperation(doc, name) {
      for (var i = 0; i < doc.definitions.length; i++) {
        var element = doc.definitions[i];
        if (element.name && element.name.value == name) {
          return element;
        }
      }
    }

    function oneQuery(doc, operationName) {
      // Copy the DocumentNode, but clear out the definitions
      var newDoc = {
        kind: doc.kind,
        definitions: [findOperation(doc, operationName)]
      };
      if (doc.hasOwnProperty("loc")) {
        newDoc.loc = doc.loc;
      }

      // Now, for the operation we're running, find any fragments referenced by
      // it or the fragments it references
      var opRefs = definitionRefs[operationName] || new Set();
      var allRefs = new Set();
      var newRefs = new Set();

      // IE 11 doesn't support "new Set(iterable)", so we add the members of opRefs to newRefs one by one
      opRefs.forEach(function(refName) {
        newRefs.add(refName);
      });

      while (newRefs.size > 0) {
        var prevRefs = newRefs;
        newRefs = new Set();

        prevRefs.forEach(function(refName) {
          if (!allRefs.has(refName)) {
            allRefs.add(refName);
            var childRefs = definitionRefs[refName] || new Set();
            childRefs.forEach(function(childRef) {
              newRefs.add(childRef);
            });
          }
        });
      }

      allRefs.forEach(function(refName) {
        var op = findOperation(doc, refName);
        if (op) {
          newDoc.definitions.push(op);
        }
      });

      return newDoc;
    }

    module.exports = doc;
    
        module.exports["checkout"] = oneQuery(doc, "checkout");
        


/***/ }),

/***/ "16Md":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WishButton; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("K2gz");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("UzBX");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("xXB0");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _WishListContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("xsA4");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function WishButton(props) {
  const wishListCtx = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_WishListContext__WEBPACK_IMPORTED_MODULE_4__[/* WishListContext */ "a"]);
  const toggleThisProductFromWishList = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => wishListCtx.isWished(props.productId) ? wishListCtx.remove(props.productId) : wishListCtx.add(props.productId), [props.productId, wishListCtx]);
  return __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_index_css__WEBPACK_IMPORTED_MODULE_3___default.a.wishButton, props.className, {
      'is-activated': wishListCtx.isWished(props.productId)
    }),
    onClick: toggleThisProductFromWishList
  }, __jsx(_Icon__WEBPACK_IMPORTED_MODULE_2__[/* Icon */ "a"], {
    className: "icon",
    name: "wish"
  }), __jsx(_Icon__WEBPACK_IMPORTED_MODULE_2__[/* Icon */ "a"], {
    className: "icon",
    name: "wish-fill"
  }));
}

/***/ }),

/***/ 19:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("qKtD");


/***/ }),

/***/ "2TdT":
/***/ (function(module, exports) {

module.exports = {
	"scrollToTopButton": "scrollToTopButton__3Xza6"
};

/***/ }),

/***/ "2Xx7":
/***/ (function(module, exports) {

module.exports = {
	"card": "card__1OfeA"
};

/***/ }),

/***/ "3WeD":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, item));
    } else {
      result.set(key, value);
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "3qBb":
/***/ (function(module, exports) {

module.exports = {
	"newsletterPopup": "newsletterPopup__1ByyV"
};

/***/ }),

/***/ "49nK":
/***/ (function(module, exports) {

module.exports = require("@ottofeller/hooks");

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "4UCR":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UnderlineWrapper; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("K2gz");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("jIPS");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function UnderlineWrapper(props) {
  return __jsx("span", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_index_css__WEBPACK_IMPORTED_MODULE_2___default.a.underline, {
      'is-permanent': props.isPermanent
    }, props.className)
  }, props.children);
}

/***/ }),

/***/ "5+fn":
/***/ (function(module, exports) {

module.exports = require("react-share");

/***/ }),

/***/ "5f6T":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ ProductCard_ProductCard; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "ramda"
var external_ramda_ = __webpack_require__("ANpm");

// EXTERNAL MODULE: ./components/common/helpers/index.tsx + 26 modules
var helpers = __webpack_require__("FaPq");

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__("K2gz");
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// EXTERNAL MODULE: ./components/common/EmptyMessage/index.tsx
var EmptyMessage = __webpack_require__("s+jA");

// EXTERNAL MODULE: external "formik"
var external_formik_ = __webpack_require__("QxnH");

// EXTERNAL MODULE: ./components/common/Button/index.tsx
var Button = __webpack_require__("htLD");

// EXTERNAL MODULE: ./components/common/CartContext/index.tsx + 4 modules
var CartContext = __webpack_require__("n10i");

// EXTERNAL MODULE: ./components/common/ProductCard/Form/SizesField/Item/index.css
var Item = __webpack_require__("90dx");
var Item_default = /*#__PURE__*/__webpack_require__.n(Item);

// CONCATENATED MODULE: ./components/common/ProductCard/Form/SizesField/Item/index.tsx

var __jsx = external_react_default.a.createElement;



function Item_Item(props) {
  return __jsx("div", {
    className: external_classnames_default()(Item_default.a.item, props.className)
  }, __jsx("div", {
    className: "marker"
  }, props.value), __jsx(external_formik_["Field"], {
    className: external_classnames_default()('input', {
      'is-disabled': !props.isAvailableForSale
    }),
    type: "radio",
    name: props.name,
    value: props.value
  }));
}
// EXTERNAL MODULE: ./components/common/Slider/index.tsx
var Slider = __webpack_require__("vcW7");

// EXTERNAL MODULE: ./components/common/ProductCard/Form/SizesField/index.css
var SizesField = __webpack_require__("02UG");
var SizesField_default = /*#__PURE__*/__webpack_require__.n(SizesField);

// CONCATENATED MODULE: ./components/common/ProductCard/Form/SizesField/index.tsx

var SizesField_jsx = external_react_default.a.createElement;






function SizesField_SizesField(props) {
  return SizesField_jsx(Slider["a" /* Slider */], {
    className: external_classnames_default()(SizesField_default.a.sizesField, props.className),
    hasNavigation: true
  }, external_ramda_["map"](option => external_ramda_["map"](value => {
    const isAvailableForSale = external_ramda_["pathOr"](false, ['node', 'availableForSale'], external_ramda_["find"](variant => {
      const variantColor = Object(helpers["o" /* getVariantOptionByName */])('Color', variant.node);
      if ((!props.values.Color || !variantColor || variantColor === props.values.Color) && Object(helpers["o" /* getVariantOptionByName */])('Size', variant.node) === value) return true;
    }, props.variants));
    return SizesField_jsx(Item_Item, {
      className: "slide",
      isAvailableForSale: isAvailableForSale,
      key: value,
      name: option.name,
      value: value
    });
  }, option.values), props.options));
}
// EXTERNAL MODULE: ./components/common/ProductCard/Form/index.css
var Form = __webpack_require__("SJAv");
var Form_default = /*#__PURE__*/__webpack_require__.n(Form);

// EXTERNAL MODULE: ./i18n.js
var i18n = __webpack_require__("k7Sn");

// CONCATENATED MODULE: ./components/common/ProductCard/Form/index.tsx

var Form_jsx = external_react_default.a.createElement;








function Form_Form(props) {
  const cartCtx = Object(external_react_["useContext"])(CartContext["a" /* CartContext */]);
  const {
    t
  } = Object(i18n["useTranslation"])();
  const {
    values
  } = Object(external_formik_["useFormikContext"])();
  const {
    0: isAddToBagLoading,
    1: setIsAddToBagLoading
  } = Object(external_react_["useState"])(false);
  const addToBag = Object(external_react_["useCallback"])(async () => {
    const addProductParams = {
      handle: props.product.handle,
      quantity: 1,
      values: values
    };
    setIsAddToBagLoading(true); // Do not show confirmation popup on the cart page

    if (window.location.pathname === '/cart') await cartCtx.addProduct(addProductParams);else await cartCtx.addProductWithConfirm(addProductParams);
    setIsAddToBagLoading(false);
  }, [cartCtx, props.product.handle, values]);
  return Form_jsx(external_formik_["Form"], {
    className: external_classnames_default()(Form_default.a.form, props.className)
  }, Form_jsx(SizesField_SizesField, {
    className: "field",
    options: props.options,
    values: values,
    variants: props.variants
  }), Form_jsx(Button["a" /* Button */], {
    appearance: "outline",
    className: "button",
    isLoading: isAddToBagLoading,
    disabled: !props.isAvailableForSale,
    width: "flex",
    onClick: addToBag
  }, t(props.isAvailableForSale ? 'addToBag' : 'soldOut')));
}
// EXTERNAL MODULE: ./components/common/Link/index.tsx
var Link = __webpack_require__("+alz");

// EXTERNAL MODULE: ./components/common/PriceWithCompareAt/index.tsx
var PriceWithCompareAt = __webpack_require__("UfBt");

// EXTERNAL MODULE: ./components/common/ProductCard/index.css
var ProductCard = __webpack_require__("2Xx7");
var ProductCard_default = /*#__PURE__*/__webpack_require__.n(ProductCard);

// EXTERNAL MODULE: ./components/common/WishButton/index.tsx
var WishButton = __webpack_require__("16Md");

// CONCATENATED MODULE: ./components/common/ProductCard/index.tsx

var ProductCard_jsx = external_react_default.a.createElement;












 // https://github.com/typescript-cheatsheets/react-typescript-cheatsheet/blob/master/ADVANCED.md#adding-non-standard-attributes

function ProductCard_ProductCard(props) {
  const {
    t
  } = Object(i18n["useTranslation"])();
  const path = Object(helpers["v" /* productPath */])(props.product.tags);
  const gender = external_ramda_["pathOr"]('', ['gender'], path).toLowerCase();
  const vendorHandle = Object(helpers["q" /* nameToHandle */])(props.product.vendor);
  const options = Object(external_react_["useMemo"])(() => external_ramda_["reject"](external_ramda_["propEq"]('name', 'Color'), external_ramda_["pathOr"]([], ['options'], props.product)), [props.product]);
  const variants = Object(external_react_["useMemo"])(() => external_ramda_["sort"]((a, b) => +b.node.availableForSale - +a.node.availableForSale, external_ramda_["pathOr"]([], ['variants', 'edges'], props.product)), [props.product]);
  const {
    0: price,
    1: setPrice
  } = Object(external_react_["useState"])(Object(helpers["h" /* getFirstVariantPrice */])(variants, 'priceV2'));
  const {
    0: compareAtPrice,
    1: setCompareAtPrice
  } = Object(external_react_["useState"])(Object(helpers["h" /* getFirstVariantPrice */])(variants, 'compareAtPriceV2'));
  const {
    0: isAvailableForSale,
    1: setIsAvailableForSale
  } = Object(external_react_["useState"])(external_ramda_["pathOr"](null, ['node', 'availableForSale'], variants[0]));
  const initialVariantOptions = Object(external_react_["useMemo"])(() => Object(helpers["k" /* getInitialVariantOptions */])(variants), [variants]);
  const {
    0: unavailableOptions,
    1: setUnavailableOptions
  } = Object(external_react_["useState"])(Object(helpers["l" /* getUnavailableOptions */])(initialVariantOptions, options, variants));
  const updatePriceAndAvailability = Object(external_react_["useCallback"])(values => {
    const matchingVariant = external_ramda_["find"](variant => {
      for (let key in values) if (!Object(helpers["o" /* getVariantOptionByName */])(key, variant.node) || Object(helpers["o" /* getVariantOptionByName */])(key, variant.node) !== values[key]) return false;

      return true;
    }, variants);
    setPrice(matchingVariant.node.priceV2);
    setCompareAtPrice(matchingVariant.node.compareAtPriceV2);
    setIsAvailableForSale(matchingVariant.node.availableForSale);
    setUnavailableOptions(Object(helpers["l" /* getUnavailableOptions */])(values, options, variants));
  }, [options, variants]);
  const submit = Object(external_react_["useCallback"])(() => {}, []);
  const {
    0: isErrorImageShown,
    1: setIsErrorImageShown
  } = Object(external_react_["useState"])(false);
  const showErrorImage = Object(external_react_["useCallback"])(() => setIsErrorImageShown(true), []);
  return ProductCard_jsx(external_formik_["Formik"], {
    initialValues: initialVariantOptions,
    onSubmit: submit,
    validate: updatePriceAndAvailability
  }, ProductCard_jsx("div", {
    className: external_classnames_default()(ProductCard_default.a.card, props.className)
  }, ProductCard_jsx("div", {
    className: "picture"
  }, !isErrorImageShown && !external_ramda_["isEmpty"](props.product.images.edges) && ProductCard_jsx(external_react_["Fragment"], null, ProductCard_jsx("img", {
    src: props.product.images.edges[0].node.transformedSrc,
    alt: props.product.images.edges[0].node.altText || props.product.title,
    className: "image",
    loading: "lazy",
    onError: showErrorImage
  }), props.product.images.edges[1] && ProductCard_jsx("img", {
    src: props.product.images.edges[1].node.transformedSrc,
    alt: props.product.images.edges[1].node.altText || props.product.title,
    className: "image",
    loading: "lazy",
    onError: showErrorImage
  })), (isErrorImageShown || external_ramda_["isEmpty"](props.product.images.edges)) && ProductCard_jsx(EmptyMessage["a" /* EmptyMessage */], {
    className: "empty-message"
  }, t('noImage'))), ProductCard_jsx("div", {
    className: "section"
  }, ProductCard_jsx("div", {
    className: "vendor"
  }, props.product.vendor), ProductCard_jsx(Link["a" /* Link */], {
    as: `/${gender}/shop/item/${vendorHandle}/${props.product.handle}`
    /* eslint-disable-next-line max-len */
    ,
    href: `/[gender]/shop/item/[vendor]/[handle]?gender=${gender}&vendor=${vendorHandle}&handle=${props.product.handle}`,
    className: "title"
  }, props.product.title), ProductCard_jsx(PriceWithCompareAt["a" /* PriceWithCompareAt */], {
    className: "price",
    compareAtPrice: external_ramda_["path"](['amount'], compareAtPrice),
    price: Number(price.amount)
  })), ProductCard_jsx(WishButton["a" /* WishButton */], {
    className: "wish-button",
    productId: props.product.id
  }), ProductCard_jsx(Form_Form, {
    className: "form",
    isAvailableForSale: isAvailableForSale,
    options: options,
    product: props.product,
    unavailableOptions: unavailableOptions,
    variants: variants
  })));
}

/***/ }),

/***/ "6D7l":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__("3WeD"));

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
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "6GEg":
/***/ (function(module, exports) {


    var doc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"_imageThumb"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Image"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"transformedSrc"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"preferredContentType"},"value":{"kind":"EnumValue","value":"JPG"}},{"kind":"Argument","name":{"kind":"Name","value":"maxHeight"},"value":{"kind":"IntValue","value":"320"}},{"kind":"Argument","name":{"kind":"Name","value":"maxWidth"},"value":{"kind":"IntValue","value":"320"}},{"kind":"Argument","name":{"kind":"Name","value":"scale"},"value":{"kind":"IntValue","value":"2"}}],"directives":[]}]}}],"loc":{"start":0,"end":139}};
    doc.loc.source = {"body":"fragment _imageThumb on Image {\n  transformedSrc(\n    preferredContentType: JPG,\n    maxHeight: 320,\n    maxWidth: 320,\n    scale: 2\n  )\n}\n","name":"GraphQL request","locationOffset":{"line":1,"column":1}};
  

    var names = {};
    function unique(defs) {
      return defs.filter(
        function(def) {
          if (def.kind !== 'FragmentDefinition') return true;
          var name = def.name.value
          if (names[name]) {
            return false;
          } else {
            names[name] = true;
            return true;
          }
        }
      )
    }
  

      module.exports = doc;
    


/***/ }),

/***/ "6f9I":
/***/ (function(module, exports) {

module.exports = require("next-i18next");

/***/ }),

/***/ "75Ko":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Field; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("K2gz");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("9CJq");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function Field(props) {
  return __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_index_css__WEBPACK_IMPORTED_MODULE_2___default.a.field, props.className, {
      'is-disabled': props.disabled,
      'is-invalid': props.isInvalid
    })
  }, props.children, props.isInvalid && props.errorMessage && !props.isErrorMessageHidden && __jsx("div", {
    className: "error-message"
  }, props.errorMessage));
}

/***/ }),

/***/ "7KCV":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("C+bE");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
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

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "90dx":
/***/ (function(module, exports) {

module.exports = {
	"item": "item__3uZDv"
};

/***/ }),

/***/ "9CJq":
/***/ (function(module, exports) {

module.exports = {
	"field": "field__2C8W6"
};

/***/ }),

/***/ "9uoE":
/***/ (function(module, exports) {


    var doc = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"checkoutDiscountCodeApplyV2"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"discountCode"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"checkoutId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"checkoutDiscountCodeApplyV2"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"discountCode"},"value":{"kind":"Variable","name":{"kind":"Name","value":"discountCode"}}},{"kind":"Argument","name":{"kind":"Name","value":"checkoutId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"checkoutId"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"checkout"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"checkoutUserErrors"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"field"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"message"},"arguments":[],"directives":[]}]}}]}}]}}],"loc":{"start":0,"end":271}};
    doc.loc.source = {"body":"mutation checkoutDiscountCodeApplyV2($discountCode: String!, $checkoutId: ID!) {\n  checkoutDiscountCodeApplyV2(discountCode: $discountCode, checkoutId: $checkoutId) {\n    checkout {\n      id\n    }\n    checkoutUserErrors {\n      code\n      field\n      message\n    }\n  }\n}\n","name":"GraphQL request","locationOffset":{"line":1,"column":1}};
  

    var names = {};
    function unique(defs) {
      return defs.filter(
        function(def) {
          if (def.kind !== 'FragmentDefinition') return true;
          var name = def.name.value
          if (names[name]) {
            return false;
          } else {
            names[name] = true;
            return true;
          }
        }
      )
    }
  

    // Collect any fragment/type references from a node, adding them to the refs Set
    function collectFragmentReferences(node, refs) {
      if (node.kind === "FragmentSpread") {
        refs.add(node.name.value);
      } else if (node.kind === "VariableDefinition") {
        var type = node.type;
        if (type.kind === "NamedType") {
          refs.add(type.name.value);
        }
      }

      if (node.selectionSet) {
        node.selectionSet.selections.forEach(function(selection) {
          collectFragmentReferences(selection, refs);
        });
      }

      if (node.variableDefinitions) {
        node.variableDefinitions.forEach(function(def) {
          collectFragmentReferences(def, refs);
        });
      }

      if (node.definitions) {
        node.definitions.forEach(function(def) {
          collectFragmentReferences(def, refs);
        });
      }
    }

    var definitionRefs = {};
    (function extractReferences() {
      doc.definitions.forEach(function(def) {
        if (def.name) {
          var refs = new Set();
          collectFragmentReferences(def, refs);
          definitionRefs[def.name.value] = refs;
        }
      });
    })();

    function findOperation(doc, name) {
      for (var i = 0; i < doc.definitions.length; i++) {
        var element = doc.definitions[i];
        if (element.name && element.name.value == name) {
          return element;
        }
      }
    }

    function oneQuery(doc, operationName) {
      // Copy the DocumentNode, but clear out the definitions
      var newDoc = {
        kind: doc.kind,
        definitions: [findOperation(doc, operationName)]
      };
      if (doc.hasOwnProperty("loc")) {
        newDoc.loc = doc.loc;
      }

      // Now, for the operation we're running, find any fragments referenced by
      // it or the fragments it references
      var opRefs = definitionRefs[operationName] || new Set();
      var allRefs = new Set();
      var newRefs = new Set();

      // IE 11 doesn't support "new Set(iterable)", so we add the members of opRefs to newRefs one by one
      opRefs.forEach(function(refName) {
        newRefs.add(refName);
      });

      while (newRefs.size > 0) {
        var prevRefs = newRefs;
        newRefs = new Set();

        prevRefs.forEach(function(refName) {
          if (!allRefs.has(refName)) {
            allRefs.add(refName);
            var childRefs = definitionRefs[refName] || new Set();
            childRefs.forEach(function(childRef) {
              newRefs.add(childRef);
            });
          }
        });
      }

      allRefs.forEach(function(refName) {
        var op = findOperation(doc, refName);
        if (op) {
          newDoc.definitions.push(op);
        }
      });

      return newDoc;
    }

    module.exports = doc;
    
        module.exports["checkoutDiscountCodeApplyV2"] = oneQuery(doc, "checkoutDiscountCodeApplyV2");
        


/***/ }),

/***/ "ALHQ":
/***/ (function(module, exports) {


    var doc = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createToken"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CustomerAccessTokenCreateInput"}}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"customerAccessTokenCreate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"customerAccessToken"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"accessToken"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"expiresAt"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"customerUserErrors"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"field"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"message"},"arguments":[],"directives":[]}]}}]}}]}}],"loc":{"start":0,"end":250}};
    doc.loc.source = {"body":"mutation createToken($input: CustomerAccessTokenCreateInput!) {\n  customerAccessTokenCreate(input: $input) {\n    customerAccessToken {\n      accessToken\n      expiresAt\n    }\n\n    customerUserErrors {\n      code\n      field\n      message\n    }\n  }\n}\n","name":"GraphQL request","locationOffset":{"line":1,"column":1}};
  

    var names = {};
    function unique(defs) {
      return defs.filter(
        function(def) {
          if (def.kind !== 'FragmentDefinition') return true;
          var name = def.name.value
          if (names[name]) {
            return false;
          } else {
            names[name] = true;
            return true;
          }
        }
      )
    }
  

    // Collect any fragment/type references from a node, adding them to the refs Set
    function collectFragmentReferences(node, refs) {
      if (node.kind === "FragmentSpread") {
        refs.add(node.name.value);
      } else if (node.kind === "VariableDefinition") {
        var type = node.type;
        if (type.kind === "NamedType") {
          refs.add(type.name.value);
        }
      }

      if (node.selectionSet) {
        node.selectionSet.selections.forEach(function(selection) {
          collectFragmentReferences(selection, refs);
        });
      }

      if (node.variableDefinitions) {
        node.variableDefinitions.forEach(function(def) {
          collectFragmentReferences(def, refs);
        });
      }

      if (node.definitions) {
        node.definitions.forEach(function(def) {
          collectFragmentReferences(def, refs);
        });
      }
    }

    var definitionRefs = {};
    (function extractReferences() {
      doc.definitions.forEach(function(def) {
        if (def.name) {
          var refs = new Set();
          collectFragmentReferences(def, refs);
          definitionRefs[def.name.value] = refs;
        }
      });
    })();

    function findOperation(doc, name) {
      for (var i = 0; i < doc.definitions.length; i++) {
        var element = doc.definitions[i];
        if (element.name && element.name.value == name) {
          return element;
        }
      }
    }

    function oneQuery(doc, operationName) {
      // Copy the DocumentNode, but clear out the definitions
      var newDoc = {
        kind: doc.kind,
        definitions: [findOperation(doc, operationName)]
      };
      if (doc.hasOwnProperty("loc")) {
        newDoc.loc = doc.loc;
      }

      // Now, for the operation we're running, find any fragments referenced by
      // it or the fragments it references
      var opRefs = definitionRefs[operationName] || new Set();
      var allRefs = new Set();
      var newRefs = new Set();

      // IE 11 doesn't support "new Set(iterable)", so we add the members of opRefs to newRefs one by one
      opRefs.forEach(function(refName) {
        newRefs.add(refName);
      });

      while (newRefs.size > 0) {
        var prevRefs = newRefs;
        newRefs = new Set();

        prevRefs.forEach(function(refName) {
          if (!allRefs.has(refName)) {
            allRefs.add(refName);
            var childRefs = definitionRefs[refName] || new Set();
            childRefs.forEach(function(childRef) {
              newRefs.add(childRef);
            });
          }
        });
      }

      allRefs.forEach(function(refName) {
        var op = findOperation(doc, refName);
        if (op) {
          newDoc.definitions.push(op);
        }
      });

      return newDoc;
    }

    module.exports = doc;
    
        module.exports["createToken"] = oneQuery(doc, "createToken");
        


/***/ }),

/***/ "ANpm":
/***/ (function(module, exports) {

module.exports = require("ramda");

/***/ }),

/***/ "AdiQ":
/***/ (function(module, exports) {


    var doc = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"InventoryQuantity"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"ids"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"ids"},"value":{"kind":"Variable","name":{"kind":"Name","value":"ids"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Product"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"handle"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"variants"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"250"}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"inventoryQuantity"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"selectedOptions"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"value"},"arguments":[],"directives":[]}]}}]}}]}}]}}]}}]}}]}}],"loc":{"start":0,"end":379}};
    doc.loc.source = {"body":"query InventoryQuantity($ids: [ID!]!) {\n  nodes(ids: $ids) {\n    ...on Product {\n        id\n        handle\n\n        variants(first: 250) {\n          edges {\n            node {\n              id\n              inventoryQuantity\n              \n              selectedOptions {\n                name\n                value\n              }\n            }\n          }\n        }\n    }\n  }\n}\n","name":"GraphQL request","locationOffset":{"line":1,"column":1}};
  

    var names = {};
    function unique(defs) {
      return defs.filter(
        function(def) {
          if (def.kind !== 'FragmentDefinition') return true;
          var name = def.name.value
          if (names[name]) {
            return false;
          } else {
            names[name] = true;
            return true;
          }
        }
      )
    }
  

    // Collect any fragment/type references from a node, adding them to the refs Set
    function collectFragmentReferences(node, refs) {
      if (node.kind === "FragmentSpread") {
        refs.add(node.name.value);
      } else if (node.kind === "VariableDefinition") {
        var type = node.type;
        if (type.kind === "NamedType") {
          refs.add(type.name.value);
        }
      }

      if (node.selectionSet) {
        node.selectionSet.selections.forEach(function(selection) {
          collectFragmentReferences(selection, refs);
        });
      }

      if (node.variableDefinitions) {
        node.variableDefinitions.forEach(function(def) {
          collectFragmentReferences(def, refs);
        });
      }

      if (node.definitions) {
        node.definitions.forEach(function(def) {
          collectFragmentReferences(def, refs);
        });
      }
    }

    var definitionRefs = {};
    (function extractReferences() {
      doc.definitions.forEach(function(def) {
        if (def.name) {
          var refs = new Set();
          collectFragmentReferences(def, refs);
          definitionRefs[def.name.value] = refs;
        }
      });
    })();

    function findOperation(doc, name) {
      for (var i = 0; i < doc.definitions.length; i++) {
        var element = doc.definitions[i];
        if (element.name && element.name.value == name) {
          return element;
        }
      }
    }

    function oneQuery(doc, operationName) {
      // Copy the DocumentNode, but clear out the definitions
      var newDoc = {
        kind: doc.kind,
        definitions: [findOperation(doc, operationName)]
      };
      if (doc.hasOwnProperty("loc")) {
        newDoc.loc = doc.loc;
      }

      // Now, for the operation we're running, find any fragments referenced by
      // it or the fragments it references
      var opRefs = definitionRefs[operationName] || new Set();
      var allRefs = new Set();
      var newRefs = new Set();

      // IE 11 doesn't support "new Set(iterable)", so we add the members of opRefs to newRefs one by one
      opRefs.forEach(function(refName) {
        newRefs.add(refName);
      });

      while (newRefs.size > 0) {
        var prevRefs = newRefs;
        newRefs = new Set();

        prevRefs.forEach(function(refName) {
          if (!allRefs.has(refName)) {
            allRefs.add(refName);
            var childRefs = definitionRefs[refName] || new Set();
            childRefs.forEach(function(childRef) {
              newRefs.add(childRef);
            });
          }
        });
      }

      allRefs.forEach(function(refName) {
        var op = findOperation(doc, refName);
        if (op) {
          newDoc.definitions.push(op);
        }
      });

      return newDoc;
    }

    module.exports = doc;
    
        module.exports["InventoryQuantity"] = oneQuery(doc, "InventoryQuantity");
        


/***/ }),

/***/ "AroE":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "C+bE":
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "C8TP":
/***/ (function(module, exports) {

module.exports = require("yup");

/***/ }),

/***/ "FT4M":
/***/ (function(module, exports) {

module.exports = {
	"checkbox": "checkbox__28Xzw"
};

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

/***/ "FjHI":
/***/ (function(module, exports) {

module.exports = {
	"popupCart": "popupCart__2Ell0"
};

/***/ }),

/***/ "G2qV":
/***/ (function(module, exports) {

module.exports = {
	"gallery": "gallery__3a8ED"
};

/***/ }),

/***/ "Gb2v":
/***/ (function(module, exports) {


    var doc = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"customer"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"token"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"customer"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"customerAccessToken"},"value":{"kind":"Variable","name":{"kind":"Name","value":"token"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"acceptsMarketing"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"firstName"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"lastName"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"email"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"phone"},"arguments":[],"directives":[]}]}}]}}],"loc":{"start":0,"end":157}};
    doc.loc.source = {"body":"query customer($token: String!) {\n  customer(customerAccessToken: $token) {\n    id\n    acceptsMarketing\n    firstName\n    lastName\n    email\n    phone\n  }\n}\n","name":"GraphQL request","locationOffset":{"line":1,"column":1}};
  

    var names = {};
    function unique(defs) {
      return defs.filter(
        function(def) {
          if (def.kind !== 'FragmentDefinition') return true;
          var name = def.name.value
          if (names[name]) {
            return false;
          } else {
            names[name] = true;
            return true;
          }
        }
      )
    }
  

    // Collect any fragment/type references from a node, adding them to the refs Set
    function collectFragmentReferences(node, refs) {
      if (node.kind === "FragmentSpread") {
        refs.add(node.name.value);
      } else if (node.kind === "VariableDefinition") {
        var type = node.type;
        if (type.kind === "NamedType") {
          refs.add(type.name.value);
        }
      }

      if (node.selectionSet) {
        node.selectionSet.selections.forEach(function(selection) {
          collectFragmentReferences(selection, refs);
        });
      }

      if (node.variableDefinitions) {
        node.variableDefinitions.forEach(function(def) {
          collectFragmentReferences(def, refs);
        });
      }

      if (node.definitions) {
        node.definitions.forEach(function(def) {
          collectFragmentReferences(def, refs);
        });
      }
    }

    var definitionRefs = {};
    (function extractReferences() {
      doc.definitions.forEach(function(def) {
        if (def.name) {
          var refs = new Set();
          collectFragmentReferences(def, refs);
          definitionRefs[def.name.value] = refs;
        }
      });
    })();

    function findOperation(doc, name) {
      for (var i = 0; i < doc.definitions.length; i++) {
        var element = doc.definitions[i];
        if (element.name && element.name.value == name) {
          return element;
        }
      }
    }

    function oneQuery(doc, operationName) {
      // Copy the DocumentNode, but clear out the definitions
      var newDoc = {
        kind: doc.kind,
        definitions: [findOperation(doc, operationName)]
      };
      if (doc.hasOwnProperty("loc")) {
        newDoc.loc = doc.loc;
      }

      // Now, for the operation we're running, find any fragments referenced by
      // it or the fragments it references
      var opRefs = definitionRefs[operationName] || new Set();
      var allRefs = new Set();
      var newRefs = new Set();

      // IE 11 doesn't support "new Set(iterable)", so we add the members of opRefs to newRefs one by one
      opRefs.forEach(function(refName) {
        newRefs.add(refName);
      });

      while (newRefs.size > 0) {
        var prevRefs = newRefs;
        newRefs = new Set();

        prevRefs.forEach(function(refName) {
          if (!allRefs.has(refName)) {
            allRefs.add(refName);
            var childRefs = definitionRefs[refName] || new Set();
            childRefs.forEach(function(childRef) {
              newRefs.add(childRef);
            });
          }
        });
      }

      allRefs.forEach(function(refName) {
        var op = findOperation(doc, refName);
        if (op) {
          newDoc.definitions.push(op);
        }
      });

      return newDoc;
    }

    module.exports = doc;
    
        module.exports["customer"] = oneQuery(doc, "customer");
        


/***/ }),

/***/ "HlDa":
/***/ (function(module, exports) {

module.exports = {
	"header": "header__XRwXg"
};

/***/ }),

/***/ "Ir0z":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthModal; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("OpYG");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_1__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function AuthModal(props) {
  return __jsx("div", {
    className: _index_css__WEBPACK_IMPORTED_MODULE_1___default.a.authModal
  }, __jsx("div", {
    className: "background",
    onClick: props.close
  }), __jsx("div", {
    className: "window"
  }, props.children));
}

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

/***/ "JUhy":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideoPlayer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("K2gz");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("UzBX");
/* harmony import */ var react_player__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("iHhI");
/* harmony import */ var react_player__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_player__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("lwOi");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_4__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function VideoPlayer(props) {
  const {
    0: isVideoPlaying,
    1: setIsVideoPlaying
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(props.isVideoAutoplayable);
  const {
    0: isVideoMuted,
    1: setIsVideoMuted
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(props.isVideoAutoplayable);
  const toggleVideoPlaying = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => setIsVideoPlaying(!isVideoPlaying), [isVideoPlaying]);
  const toggleVideoMuted = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(e => {
    e.stopPropagation();
    setIsVideoMuted(!isVideoMuted);
  }, [isVideoMuted]);
  return __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_index_css__WEBPACK_IMPORTED_MODULE_4___default.a.videoPlayer, `state--${isVideoPlaying ? 'pause' : 'play'}`, props.className),
    onClick: toggleVideoPlaying,
    style: props.style
  }, __jsx(react_player__WEBPACK_IMPORTED_MODULE_3___default.a, {
    className: "video",
    height: "100%",
    loop: true,
    muted: isVideoMuted,
    playing: isVideoPlaying,
    url: props.videoUrl,
    volume: isVideoMuted ? 0 : 1,
    width: "100%"
  }), __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('play-button', `state--${isVideoPlaying ? 'pause' : 'play'}`)
  }), __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('mute-button', {
      'is-muted': isVideoMuted
    }),
    onClick: toggleVideoMuted
  }, __jsx(_Icon__WEBPACK_IMPORTED_MODULE_2__[/* Icon */ "a"], {
    className: "icon",
    name: "speaker"
  })));
}

/***/ }),

/***/ "K2gz":
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "KNus":
/***/ (function(module, exports) {

module.exports = require("next/config");

/***/ }),

/***/ "KcFw":
/***/ (function(module, exports) {


    var doc = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"signup"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CustomerCreateInput"}}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"customerCreate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"customer"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"customerUserErrors"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"field"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"message"},"arguments":[],"directives":[]}]}}]}}]}}],"loc":{"start":0,"end":186}};
    doc.loc.source = {"body":"mutation signup($input: CustomerCreateInput!) {\n  customerCreate(input: $input) {\n    customer {\n      id\n    }\n    customerUserErrors {\n      code\n      field\n      message\n    }\n  }\n}\n","name":"GraphQL request","locationOffset":{"line":1,"column":1}};
  

    var names = {};
    function unique(defs) {
      return defs.filter(
        function(def) {
          if (def.kind !== 'FragmentDefinition') return true;
          var name = def.name.value
          if (names[name]) {
            return false;
          } else {
            names[name] = true;
            return true;
          }
        }
      )
    }
  

    // Collect any fragment/type references from a node, adding them to the refs Set
    function collectFragmentReferences(node, refs) {
      if (node.kind === "FragmentSpread") {
        refs.add(node.name.value);
      } else if (node.kind === "VariableDefinition") {
        var type = node.type;
        if (type.kind === "NamedType") {
          refs.add(type.name.value);
        }
      }

      if (node.selectionSet) {
        node.selectionSet.selections.forEach(function(selection) {
          collectFragmentReferences(selection, refs);
        });
      }

      if (node.variableDefinitions) {
        node.variableDefinitions.forEach(function(def) {
          collectFragmentReferences(def, refs);
        });
      }

      if (node.definitions) {
        node.definitions.forEach(function(def) {
          collectFragmentReferences(def, refs);
        });
      }
    }

    var definitionRefs = {};
    (function extractReferences() {
      doc.definitions.forEach(function(def) {
        if (def.name) {
          var refs = new Set();
          collectFragmentReferences(def, refs);
          definitionRefs[def.name.value] = refs;
        }
      });
    })();

    function findOperation(doc, name) {
      for (var i = 0; i < doc.definitions.length; i++) {
        var element = doc.definitions[i];
        if (element.name && element.name.value == name) {
          return element;
        }
      }
    }

    function oneQuery(doc, operationName) {
      // Copy the DocumentNode, but clear out the definitions
      var newDoc = {
        kind: doc.kind,
        definitions: [findOperation(doc, operationName)]
      };
      if (doc.hasOwnProperty("loc")) {
        newDoc.loc = doc.loc;
      }

      // Now, for the operation we're running, find any fragments referenced by
      // it or the fragments it references
      var opRefs = definitionRefs[operationName] || new Set();
      var allRefs = new Set();
      var newRefs = new Set();

      // IE 11 doesn't support "new Set(iterable)", so we add the members of opRefs to newRefs one by one
      opRefs.forEach(function(refName) {
        newRefs.add(refName);
      });

      while (newRefs.size > 0) {
        var prevRefs = newRefs;
        newRefs = new Set();

        prevRefs.forEach(function(refName) {
          if (!allRefs.has(refName)) {
            allRefs.add(refName);
            var childRefs = definitionRefs[refName] || new Set();
            childRefs.forEach(function(childRef) {
              newRefs.add(childRef);
            });
          }
        });
      }

      allRefs.forEach(function(refName) {
        var op = findOperation(doc, refName);
        if (op) {
          newDoc.definitions.push(op);
        }
      });

      return newDoc;
    }

    module.exports = doc;
    
        module.exports["signup"] = oneQuery(doc, "signup");
        


/***/ }),

/***/ "LKXJ":
/***/ (function(module, exports) {

module.exports = {
	"emptyMessage": "emptyMessage__24szo"
};

/***/ }),

/***/ "Mf/+":
/***/ (function(module, exports) {


    var doc = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RemoveFromWishList"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"customerId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"productId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"delete_wishlist"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"product_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"productId"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"customer_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"customerId"}}}]}}]}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"returning"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"customer_id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"product_id"},"arguments":[],"directives":[]}]}}]}}]}}],"loc":{"start":0,"end":285}};
    doc.loc.source = {"body":"mutation RemoveFromWishList($customerId: String!, $productId: String!) {\n  __typename\n\n  delete_wishlist(where: {product_id: {_eq: $productId}, customer_id: {_eq: $customerId}}) {\n    __typename\n\n    returning {\n      __typename\n      customer_id\n      id\n      product_id\n    }\n  }\n}\n","name":"GraphQL request","locationOffset":{"line":1,"column":1}};
  

    var names = {};
    function unique(defs) {
      return defs.filter(
        function(def) {
          if (def.kind !== 'FragmentDefinition') return true;
          var name = def.name.value
          if (names[name]) {
            return false;
          } else {
            names[name] = true;
            return true;
          }
        }
      )
    }
  

    // Collect any fragment/type references from a node, adding them to the refs Set
    function collectFragmentReferences(node, refs) {
      if (node.kind === "FragmentSpread") {
        refs.add(node.name.value);
      } else if (node.kind === "VariableDefinition") {
        var type = node.type;
        if (type.kind === "NamedType") {
          refs.add(type.name.value);
        }
      }

      if (node.selectionSet) {
        node.selectionSet.selections.forEach(function(selection) {
          collectFragmentReferences(selection, refs);
        });
      }

      if (node.variableDefinitions) {
        node.variableDefinitions.forEach(function(def) {
          collectFragmentReferences(def, refs);
        });
      }

      if (node.definitions) {
        node.definitions.forEach(function(def) {
          collectFragmentReferences(def, refs);
        });
      }
    }

    var definitionRefs = {};
    (function extractReferences() {
      doc.definitions.forEach(function(def) {
        if (def.name) {
          var refs = new Set();
          collectFragmentReferences(def, refs);
          definitionRefs[def.name.value] = refs;
        }
      });
    })();

    function findOperation(doc, name) {
      for (var i = 0; i < doc.definitions.length; i++) {
        var element = doc.definitions[i];
        if (element.name && element.name.value == name) {
          return element;
        }
      }
    }

    function oneQuery(doc, operationName) {
      // Copy the DocumentNode, but clear out the definitions
      var newDoc = {
        kind: doc.kind,
        definitions: [findOperation(doc, operationName)]
      };
      if (doc.hasOwnProperty("loc")) {
        newDoc.loc = doc.loc;
      }

      // Now, for the operation we're running, find any fragments referenced by
      // it or the fragments it references
      var opRefs = definitionRefs[operationName] || new Set();
      var allRefs = new Set();
      var newRefs = new Set();

      // IE 11 doesn't support "new Set(iterable)", so we add the members of opRefs to newRefs one by one
      opRefs.forEach(function(refName) {
        newRefs.add(refName);
      });

      while (newRefs.size > 0) {
        var prevRefs = newRefs;
        newRefs = new Set();

        prevRefs.forEach(function(refName) {
          if (!allRefs.has(refName)) {
            allRefs.add(refName);
            var childRefs = definitionRefs[refName] || new Set();
            childRefs.forEach(function(childRef) {
              newRefs.add(childRef);
            });
          }
        });
      }

      allRefs.forEach(function(refName) {
        var op = findOperation(doc, refName);
        if (op) {
          newDoc.definitions.push(op);
        }
      });

      return newDoc;
    }

    module.exports = doc;
    
        module.exports["RemoveFromWishList"] = oneQuery(doc, "RemoveFromWishList");
        


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

/***/ "NYyA":
/***/ (function(module, exports) {


    var doc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"_product"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Product"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"descriptionHtml"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"handle"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"options"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"values"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"productType"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"tags"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"title"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"variants"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"100"}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"availableForSale"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"compareAtPriceV2"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"amount"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"currencyCode"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"selectedOptions"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"value"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"priceV2"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"amount"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"currencyCode"},"arguments":[],"directives":[]}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"vendor"},"arguments":[],"directives":[]}]}}],"loc":{"start":0,"end":469}};
    doc.loc.source = {"body":"fragment _product on Product {\n  id\n  descriptionHtml\n  handle\n\n  options {\n    id\n    name\n    values\n  }\n\n  productType\n  tags\n  title\n\n  variants(first: 100) {\n    edges {\n      node {\n        id\n        availableForSale\n\n        compareAtPriceV2 {\n          amount\n          currencyCode\n        }\n\n        selectedOptions {\n          name\n          value\n        }\n\n        priceV2 {\n          amount\n          currencyCode\n        }\n      }\n    }\n  }\n\n  vendor\n}\n","name":"GraphQL request","locationOffset":{"line":1,"column":1}};
  

    var names = {};
    function unique(defs) {
      return defs.filter(
        function(def) {
          if (def.kind !== 'FragmentDefinition') return true;
          var name = def.name.value
          if (names[name]) {
            return false;
          } else {
            names[name] = true;
            return true;
          }
        }
      )
    }
  

      module.exports = doc;
    


/***/ }),

/***/ "OavU":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeaturedMenuContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return FeaturedMenuContextProvider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("ANpm");
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ramda__WEBPACK_IMPORTED_MODULE_1__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const FeaturedMenuContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])({
  men: [],
  women: []
});
const prismicResponseToFeaturedMenuItems = ramda__WEBPACK_IMPORTED_MODULE_1__["compose"](ramda__WEBPACK_IMPORTED_MODULE_1__["map"](menuSection => ({
  category: menuSection[0] !== 'designers' ? 'all' : menuSection[0],
  collection: 'all',
  list: ramda__WEBPACK_IMPORTED_MODULE_1__["compose"](ramda__WEBPACK_IMPORTED_MODULE_1__["map"](menuItem => {
    const url = ramda__WEBPACK_IMPORTED_MODULE_1__["pathOr"]('', ['url', 'url'], menuItem);
    const title = ramda__WEBPACK_IMPORTED_MODULE_1__["pathOr"]('', ['title', 0, 'text'], menuItem);

    const routeParam = name => (new RegExp(`/${name}/(.*?)/`, 'i').exec(`${url.split('?')[0]}/`) || [])[1];

    return _objectSpread({
      category: routeParam('category'),
      collection: routeParam('collection'),
      gender: url.replace(/https?:\/\//, '').split('/')[1],
      image: ramda__WEBPACK_IMPORTED_MODULE_1__["pathOr"](null, ['image', 'url'], menuItem),
      subcategory: routeParam('subcategory'),
      tag: url.match(/tags=/i) ? url.split('tags=')[1].split('&')[0].split(',') : null,
      title
    }, !url.match(/men\/shop/gi) && {
      url
    });
  }), // Prismic sometimes sends empty items
  ramda__WEBPACK_IMPORTED_MODULE_1__["filter"](ramda__WEBPACK_IMPORTED_MODULE_1__["path"](['title', 0, 'text'])))(menuSection[1]),
  subcategory: 'all',
  title: menuSection[0]
})), ramda__WEBPACK_IMPORTED_MODULE_1__["toPairs"], ramda__WEBPACK_IMPORTED_MODULE_1__["pathOr"]({}, ['results', 0, 'data']));
function FeaturedMenuContextProvider(props) {
  const value = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => ({
    men: prismicResponseToFeaturedMenuItems(props.menPrismicResponse),
    women: prismicResponseToFeaturedMenuItems(props.womenPrismicResponse)
  }), [props.menPrismicResponse, props.womenPrismicResponse]);
  return __jsx(FeaturedMenuContext.Provider, {
    value: value
  }, props.children);
}

/***/ }),

/***/ "OpYG":
/***/ (function(module, exports) {

module.exports = {
	"authModal": "authModal__1xQS-"
};

/***/ }),

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

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

/***/ "PzR7":
/***/ (function(module, exports) {

module.exports = require("prismic-reactjs");

/***/ }),

/***/ "QfLz":
/***/ (function(module, exports) {

module.exports = {
	"list": "list__KGU7P"
};

/***/ }),

/***/ "QxnH":
/***/ (function(module, exports) {

module.exports = require("formik");

/***/ }),

/***/ "S3md":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ "SIVv":
/***/ (function(module, exports) {

module.exports = {
	"search": "search__HEqYE"
};

/***/ }),

/***/ "SJAv":
/***/ (function(module, exports) {

module.exports = {
	"form": "form__bmBT4"
};

/***/ }),

/***/ "SKBE":
/***/ (function(module, exports) {


    var doc = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"checkoutDiscountCodeRemove"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"checkoutId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"checkoutDiscountCodeRemove"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"checkoutId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"checkoutId"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"checkout"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"checkoutUserErrors"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"field"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"message"},"arguments":[],"directives":[]}]}}]}}]}}],"loc":{"start":0,"end":216}};
    doc.loc.source = {"body":"mutation checkoutDiscountCodeRemove($checkoutId: ID!) {\n  checkoutDiscountCodeRemove(checkoutId: $checkoutId) {\n    checkout {\n      id\n    }\n    checkoutUserErrors {\n      code\n      field\n      message\n    }\n  }\n}\n","name":"GraphQL request","locationOffset":{"line":1,"column":1}};
  

    var names = {};
    function unique(defs) {
      return defs.filter(
        function(def) {
          if (def.kind !== 'FragmentDefinition') return true;
          var name = def.name.value
          if (names[name]) {
            return false;
          } else {
            names[name] = true;
            return true;
          }
        }
      )
    }
  

    // Collect any fragment/type references from a node, adding them to the refs Set
    function collectFragmentReferences(node, refs) {
      if (node.kind === "FragmentSpread") {
        refs.add(node.name.value);
      } else if (node.kind === "VariableDefinition") {
        var type = node.type;
        if (type.kind === "NamedType") {
          refs.add(type.name.value);
        }
      }

      if (node.selectionSet) {
        node.selectionSet.selections.forEach(function(selection) {
          collectFragmentReferences(selection, refs);
        });
      }

      if (node.variableDefinitions) {
        node.variableDefinitions.forEach(function(def) {
          collectFragmentReferences(def, refs);
        });
      }

      if (node.definitions) {
        node.definitions.forEach(function(def) {
          collectFragmentReferences(def, refs);
        });
      }
    }

    var definitionRefs = {};
    (function extractReferences() {
      doc.definitions.forEach(function(def) {
        if (def.name) {
          var refs = new Set();
          collectFragmentReferences(def, refs);
          definitionRefs[def.name.value] = refs;
        }
      });
    })();

    function findOperation(doc, name) {
      for (var i = 0; i < doc.definitions.length; i++) {
        var element = doc.definitions[i];
        if (element.name && element.name.value == name) {
          return element;
        }
      }
    }

    function oneQuery(doc, operationName) {
      // Copy the DocumentNode, but clear out the definitions
      var newDoc = {
        kind: doc.kind,
        definitions: [findOperation(doc, operationName)]
      };
      if (doc.hasOwnProperty("loc")) {
        newDoc.loc = doc.loc;
      }

      // Now, for the operation we're running, find any fragments referenced by
      // it or the fragments it references
      var opRefs = definitionRefs[operationName] || new Set();
      var allRefs = new Set();
      var newRefs = new Set();

      // IE 11 doesn't support "new Set(iterable)", so we add the members of opRefs to newRefs one by one
      opRefs.forEach(function(refName) {
        newRefs.add(refName);
      });

      while (newRefs.size > 0) {
        var prevRefs = newRefs;
        newRefs = new Set();

        prevRefs.forEach(function(refName) {
          if (!allRefs.has(refName)) {
            allRefs.add(refName);
            var childRefs = definitionRefs[refName] || new Set();
            childRefs.forEach(function(childRef) {
              newRefs.add(childRef);
            });
          }
        });
      }

      allRefs.forEach(function(refName) {
        var op = findOperation(doc, refName);
        if (op) {
          newDoc.definitions.push(op);
        }
      });

      return newDoc;
    }

    module.exports = doc;
    
        module.exports["checkoutDiscountCodeRemove"] = oneQuery(doc, "checkoutDiscountCodeRemove");
        


/***/ }),

/***/ "SSpn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useShippingLocations; });
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ANpm");
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ramda__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function useShippingLocations(countries, countryCode) {
  const currentCountry = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(() => {
    if (!countryCode) return null;
    return ramda__WEBPACK_IMPORTED_MODULE_0__["find"](ramda__WEBPACK_IMPORTED_MODULE_0__["propEq"]('code', countryCode), countries || []);
  }, [countries, countryCode]);
  return Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(() => ({
    currentCountry: currentCountry
  }), [currentCountry]);
}

/***/ }),

/***/ "TrhF":
/***/ (function(module, exports) {

module.exports = {
	"dropdown": "dropdown__1YIHy"
};

/***/ }),

/***/ "UfBt":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PriceWithCompareAt; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("K2gz");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ConvertCurrency__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("mb2F");
/* harmony import */ var _CurrencyContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("a8TH");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("aM3m");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_4__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function PriceWithCompareAt(props) {
  const currencyContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_CurrencyContext__WEBPACK_IMPORTED_MODULE_3__[/* CurrencyContext */ "a"]);
  return __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_index_css__WEBPACK_IMPORTED_MODULE_4___default.a.priceWithCompareAt, props.className)
  }, __jsx("div", {
    className: "price"
  }, __jsx(_ConvertCurrency__WEBPACK_IMPORTED_MODULE_2__[/* ConvertCurrency */ "a"], {
    from: "USD",
    to: currencyContext.active
  }, props.price)), props.compareAtPrice && __jsx("div", {
    className: "compare-at-price"
  }, __jsx(_ConvertCurrency__WEBPACK_IMPORTED_MODULE_2__[/* ConvertCurrency */ "a"], {
    from: "USD",
    to: currencyContext.active
  }, props.compareAtPrice)), props.compareAtPrice && props.hasPercent && __jsx("div", {
    className: "percent"
  }, `-${(100 - Number(props.price) * 100 / props.compareAtPrice).toFixed(0)}%`));
}

/***/ }),

/***/ "UlpK":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/head.js");

/***/ }),

/***/ "UzBX":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Icon; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("K2gz");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("hgu+");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function Icon(props) {
  return __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_index_css__WEBPACK_IMPORTED_MODULE_2___default.a.icon, props.className),
    style: {
      '--color': `var(--icon--color-${props.name})`,
      '--image': `var(--icon--image-${props.name})`
    }
  });
}

/***/ }),

/***/ "WJuA":
/***/ (function(module, exports) {

module.exports = {
	"item": "item__3xoXz"
};

/***/ }),

/***/ "WddD":
/***/ (function(module, exports) {

module.exports = {
	"footer": "footer__3RDfP"
};

/***/ }),

/***/ "WvWg":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsSlider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("K2gz");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ProductCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("5f6T");
/* harmony import */ var _Slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("vcW7");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("hUnd");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("k7Sn");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_i18n__WEBPACK_IMPORTED_MODULE_5__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function ProductsSlider(props) {
  const {
    t
  } = Object(_i18n__WEBPACK_IMPORTED_MODULE_5__["useTranslation"])();
  return __jsx(_Slider__WEBPACK_IMPORTED_MODULE_3__[/* Slider */ "a"], {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_index_css__WEBPACK_IMPORTED_MODULE_4___default.a.productsSlider, props.className),
    emptyMessage: t('noProductsFound'),
    hasNavigation: true,
    noStyles: true
  }, props.products.map((product, productIndex) => __jsx("div", {
    className: "slide",
    key: `product-${productIndex}`
  }, __jsx(_ProductCard__WEBPACK_IMPORTED_MODULE_2__[/* ProductCard */ "a"], {
    product: product
  }))));
}

/***/ }),

/***/ "X24+":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "XjnJ":
/***/ (function(module, exports) {


    var doc = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"recover"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"customerRecover"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"customerUserErrors"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"},"arguments":[],"directives":[]}]}}]}}]}}],"loc":{"start":0,"end":122}};
    doc.loc.source = {"body":"mutation recover($email: String!) {\n  customerRecover(email: $email) {\n    customerUserErrors {\n      message\n    }\n  }\n}\n","name":"GraphQL request","locationOffset":{"line":1,"column":1}};
  

    var names = {};
    function unique(defs) {
      return defs.filter(
        function(def) {
          if (def.kind !== 'FragmentDefinition') return true;
          var name = def.name.value
          if (names[name]) {
            return false;
          } else {
            names[name] = true;
            return true;
          }
        }
      )
    }
  

    // Collect any fragment/type references from a node, adding them to the refs Set
    function collectFragmentReferences(node, refs) {
      if (node.kind === "FragmentSpread") {
        refs.add(node.name.value);
      } else if (node.kind === "VariableDefinition") {
        var type = node.type;
        if (type.kind === "NamedType") {
          refs.add(type.name.value);
        }
      }

      if (node.selectionSet) {
        node.selectionSet.selections.forEach(function(selection) {
          collectFragmentReferences(selection, refs);
        });
      }

      if (node.variableDefinitions) {
        node.variableDefinitions.forEach(function(def) {
          collectFragmentReferences(def, refs);
        });
      }

      if (node.definitions) {
        node.definitions.forEach(function(def) {
          collectFragmentReferences(def, refs);
        });
      }
    }

    var definitionRefs = {};
    (function extractReferences() {
      doc.definitions.forEach(function(def) {
        if (def.name) {
          var refs = new Set();
          collectFragmentReferences(def, refs);
          definitionRefs[def.name.value] = refs;
        }
      });
    })();

    function findOperation(doc, name) {
      for (var i = 0; i < doc.definitions.length; i++) {
        var element = doc.definitions[i];
        if (element.name && element.name.value == name) {
          return element;
        }
      }
    }

    function oneQuery(doc, operationName) {
      // Copy the DocumentNode, but clear out the definitions
      var newDoc = {
        kind: doc.kind,
        definitions: [findOperation(doc, operationName)]
      };
      if (doc.hasOwnProperty("loc")) {
        newDoc.loc = doc.loc;
      }

      // Now, for the operation we're running, find any fragments referenced by
      // it or the fragments it references
      var opRefs = definitionRefs[operationName] || new Set();
      var allRefs = new Set();
      var newRefs = new Set();

      // IE 11 doesn't support "new Set(iterable)", so we add the members of opRefs to newRefs one by one
      opRefs.forEach(function(refName) {
        newRefs.add(refName);
      });

      while (newRefs.size > 0) {
        var prevRefs = newRefs;
        newRefs = new Set();

        prevRefs.forEach(function(refName) {
          if (!allRefs.has(refName)) {
            allRefs.add(refName);
            var childRefs = definitionRefs[refName] || new Set();
            childRefs.forEach(function(childRef) {
              newRefs.add(childRef);
            });
          }
        });
      }

      allRefs.forEach(function(refName) {
        var op = findOperation(doc, refName);
        if (op) {
          newDoc.definitions.push(op);
        }
      });

      return newDoc;
    }

    module.exports = doc;
    
        module.exports["recover"] = oneQuery(doc, "recover");
        


/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YTqd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "a8TH":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CurrencyContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CurrencyContextProvider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("vmXh");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("wy2R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const ratesUpdatesMinutesInterval = 10;
const CurrencyContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])({
  active: null,
  convert: () => null,
  rates: null,
  ratesLastUpdatedAt: null,
  setActive: () => null,
  setActivePersistent: () => null,
  setRates: () => null,
  setRatesLastUpdatedAt: () => null
});
function CurrencyContextProvider(props) {
  const {
    0: active,
    1: setActive
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(props.initialCurrency);
  const {
    0: rates,
    1: setRates
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(props.initialCurrency === 'USD' && !props.initialRates ? {
    CAD: 1,
    EUR: 1,
    GBP: 1,
    USD: 1
  } : props.initialRates);
  const {
    0: ratesLastUpdatedAt,
    1: setRatesLastUpdatedAt
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(props.initialRatesLastUpdatedAt);
  const setActivePersistent = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(value => {
    setActive(value);
    js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.set('currency', value);
  }, [setActive]); // Fetch rates if N minutes were passed since the last update

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (!ratesLastUpdatedAt || moment__WEBPACK_IMPORTED_MODULE_2___default()(ratesLastUpdatedAt, moment__WEBPACK_IMPORTED_MODULE_2___default.a.ISO_8601).add(ratesUpdatesMinutesInterval, 'minutes').isBefore(moment__WEBPACK_IMPORTED_MODULE_2___default()())) fetch('https://api.exchangeratesapi.io/latest?base=USD').then(async response => {
      var _json$rates;

      console.log('Fetching currency rates');
      const json = await response.json();
      const newRates = (_json$rates = json.rates) !== null && _json$rates !== void 0 ? _json$rates : {};
      const newRatesLastUpdatedAt = moment__WEBPACK_IMPORTED_MODULE_2___default()().format();
      setRates(newRates);
      setRatesLastUpdatedAt(newRatesLastUpdatedAt); // There is no way the request will be finished during SSR — thus use browser cookies

      js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.set('currencyRates', JSON.stringify(newRates));
      js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.set('currencyRatesLastUpdatedAt', newRatesLastUpdatedAt);
    }).catch(console.error);
  }, [ratesLastUpdatedAt]);
  const convert = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(params => params.value / rates[params.from] * rates[params.to], [rates]);
  const contextObj = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => ({
    active,
    convert,
    rates,
    ratesLastUpdatedAt,
    setActive,
    setActivePersistent,
    setRates,
    setRatesLastUpdatedAt
  }), [active, convert, rates, ratesLastUpdatedAt, setActive, setActivePersistent, setRates, setRatesLastUpdatedAt]);
  return __jsx(CurrencyContext.Provider, {
    value: contextObj
  }, props.children);
}

/***/ }),

/***/ "aKUf":
/***/ (function(module, exports) {

module.exports = {
	"layout": "layout__2l-Nv"
};

/***/ }),

/***/ "aM3m":
/***/ (function(module, exports) {

module.exports = {
	"priceWithCompareAt": "priceWithCompareAt__3TMWB"
};

/***/ }),

/***/ "bKbD":
/***/ (function(module, exports) {

module.exports = {
	"form": "form__3WTFM"
};

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("7KCV");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _router = __webpack_require__("elyg");

var _router2 = __webpack_require__("nOHt");

let cachedObserver;
const listeners = new Map();
const IntersectionObserver = false ? undefined : null;
const prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (cachedObserver) {
    return cachedObserver;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return cachedObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        cachedObserver.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (false) {}
  }); // Join on an invalid URI character

  prefetched[href + '%' + as] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow
  }).then(success => {
    if (!success) return;

    if (scroll) {
      window.scrollTo(0, 0);
      document.body.focus();
    }
  });
}

function Link(props) {
  if (false) {}

  const p = props.prefetch !== false;

  const [childElm, setChildElm] = _react.default.useState();

  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const resolvedHref = (0, _router.resolveHref)(pathname, props.href);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedHref
    };
  }, [pathname, props.href, props.as]);

  _react.default.useEffect(() => {
    if (p && IntersectionObserver && childElm && childElm.tagName && (0, _router.isLocalURL)(href)) {
      // Join on an invalid URI character
      const isPrefetched = prefetched[href + '%' + as];

      if (!isPrefetched) {
        return listenToIntersections(childElm, () => {
          prefetch(router, href, as);
        });
      }
    }
  }, [p, childElm, href, as, router]);

  let {
    children,
    replace,
    shallow,
    scroll
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childProps = {
    ref: el => {
      if (el) setChildElm(el);

      if (child && typeof child === 'object' && child.ref) {
        if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
          child.ref.current = el;
        }
      }
    },
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll);
      }
    }
  };

  if (p) {
    childProps.onMouseEnter = e => {
      if (!(0, _router.isLocalURL)(href)) return;

      if (child.props && typeof child.props.onMouseEnter === 'function') {
        child.props.onMouseEnter(e);
      }

      prefetch(router, href, as, {
        priority: true
      });
    };
  } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    childProps.href = (0, _router.addBasePath)(as);
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "d2vd":
/***/ (function(module, exports) {


    var doc = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"create"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CheckoutCreateInput"}}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"checkoutCreate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"checkout"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"checkoutUserErrors"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"field"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"message"},"arguments":[],"directives":[]}]}}]}}]}}],"loc":{"start":0,"end":186}};
    doc.loc.source = {"body":"mutation create($input: CheckoutCreateInput!) {\n  checkoutCreate(input: $input) {\n    checkout {\n      id\n    }\n    checkoutUserErrors {\n      code\n      field\n      message\n    }\n  }\n}\n","name":"GraphQL request","locationOffset":{"line":1,"column":1}};
  

    var names = {};
    function unique(defs) {
      return defs.filter(
        function(def) {
          if (def.kind !== 'FragmentDefinition') return true;
          var name = def.name.value
          if (names[name]) {
            return false;
          } else {
            names[name] = true;
            return true;
          }
        }
      )
    }
  

    // Collect any fragment/type references from a node, adding them to the refs Set
    function collectFragmentReferences(node, refs) {
      if (node.kind === "FragmentSpread") {
        refs.add(node.name.value);
      } else if (node.kind === "VariableDefinition") {
        var type = node.type;
        if (type.kind === "NamedType") {
          refs.add(type.name.value);
        }
      }

      if (node.selectionSet) {
        node.selectionSet.selections.forEach(function(selection) {
          collectFragmentReferences(selection, refs);
        });
      }

      if (node.variableDefinitions) {
        node.variableDefinitions.forEach(function(def) {
          collectFragmentReferences(def, refs);
        });
      }

      if (node.definitions) {
        node.definitions.forEach(function(def) {
          collectFragmentReferences(def, refs);
        });
      }
    }

    var definitionRefs = {};
    (function extractReferences() {
      doc.definitions.forEach(function(def) {
        if (def.name) {
          var refs = new Set();
          collectFragmentReferences(def, refs);
          definitionRefs[def.name.value] = refs;
        }
      });
    })();

    function findOperation(doc, name) {
      for (var i = 0; i < doc.definitions.length; i++) {
        var element = doc.definitions[i];
        if (element.name && element.name.value == name) {
          return element;
        }
      }
    }

    function oneQuery(doc, operationName) {
      // Copy the DocumentNode, but clear out the definitions
      var newDoc = {
        kind: doc.kind,
        definitions: [findOperation(doc, operationName)]
      };
      if (doc.hasOwnProperty("loc")) {
        newDoc.loc = doc.loc;
      }

      // Now, for the operation we're running, find any fragments referenced by
      // it or the fragments it references
      var opRefs = definitionRefs[operationName] || new Set();
      var allRefs = new Set();
      var newRefs = new Set();

      // IE 11 doesn't support "new Set(iterable)", so we add the members of opRefs to newRefs one by one
      opRefs.forEach(function(refName) {
        newRefs.add(refName);
      });

      while (newRefs.size > 0) {
        var prevRefs = newRefs;
        newRefs = new Set();

        prevRefs.forEach(function(refName) {
          if (!allRefs.has(refName)) {
            allRefs.add(refName);
            var childRefs = definitionRefs[refName] || new Set();
            childRefs.forEach(function(childRef) {
              newRefs.add(childRef);
            });
          }
        });
      }

      allRefs.forEach(function(refName) {
        var op = findOperation(doc, refName);
        if (op) {
          newDoc.definitions.push(op);
        }
      });

      return newDoc;
    }

    module.exports = doc;
    
        module.exports["create"] = oneQuery(doc, "create");
        


/***/ }),

/***/ "dZ6Y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "drjS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ useClickOutside; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ usePopup; });

// UNUSED EXPORTS: useShippingLocations, useViewport

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// CONCATENATED MODULE: ./components/common/hooks/use-click-outside.tsx

function useClickOutside(params) {
  const click = Object(external_react_["useCallback"])(e => {
    if (params.reference.current && !params.reference.current.contains(e.target) && !e.target.closest(`[data-intact-id="${params.intactId}"]`)) params.callback();
  }, [params]);
  Object(external_react_["useEffect"])(() => {
    window.addEventListener('click', click);
    return () => window.removeEventListener('click', click);
  }, [click]);
}
// CONCATENATED MODULE: ./components/common/hooks/use-popup.tsx


const useAction = (fn, args) => Object(external_react_["useCallback"])(() => fn(args), [fn, args]);

function usePopup(initial = false) {
  const {
    0: isShown,
    1: setIsShown
  } = Object(external_react_["useState"])(initial);
  return {
    close: useAction(setIsShown, false),
    isShown: isShown,
    show: useAction(setIsShown, true),
    toggle: useAction(setIsShown, !isShown)
  };
}
// EXTERNAL MODULE: ./components/common/hooks/use-shipping-locations.tsx
var use_shipping_locations = __webpack_require__("SSpn");

// CONCATENATED MODULE: ./components/common/hooks/use-viewport.tsx

function useViewport(props = {
  initial: false
}) {
  const {
    0: viewportWidth,
    1: setViewportWidth
  } = Object(external_react_["useState"])();
  const {
    0: isLoaded,
    1: setIsLoaded
  } = Object(external_react_["useState"])(props.initial);
  Object(external_react_["useEffect"])(() => {
    setIsLoaded(true);
    setViewportWidth(window.innerWidth);

    const handleResize = () => {
      setViewportWidth(window.innerWidth);
      if (props.onResize) props.onResize(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [props]);
  return Object(external_react_["useMemo"])(() => ({
    isLoaded,
    width: viewportWidth
  }), [isLoaded, viewportWidth]);
}
// CONCATENATED MODULE: ./components/common/hooks/index.tsx





/***/ }),

/***/ "eG2q":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductSliderByCollection; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("ANpm");
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ramda__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _graphql_product_graphql__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("es6O");
/* harmony import */ var _graphql_product_graphql__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_graphql_product_graphql__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ProductsSlider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("WvWg");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("mU8t");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_4__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function ProductSliderByCollection(props) {
  const {
    data: productData,
    loading: productLoading
  } = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_4__["useQuery"])(_graphql_product_graphql__WEBPACK_IMPORTED_MODULE_2___default.a, {
    variables: {
      handle: props.handle
    }
  });
  const newCollectionProducts = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => ramda__WEBPACK_IMPORTED_MODULE_1__["compose"](ramda__WEBPACK_IMPORTED_MODULE_1__["pluck"]('node'), ramda__WEBPACK_IMPORTED_MODULE_1__["pathOr"]([], ['collectionByHandle', 'products', 'edges']))(productData), [productData]);
  return !productLoading && newCollectionProducts.length > 0 && __jsx(_ProductsSlider__WEBPACK_IMPORTED_MODULE_3__[/* ProductsSlider */ "a"], {
    className: props.className,
    products: newCollectionProducts
  });
}

/***/ }),

/***/ "elyg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.resolveHref = resolveHref;
exports.markLoadingError = markLoadingError;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__("X24+");

var _denormalizePagePath = __webpack_require__("wkBG");

var _mitt = _interopRequireDefault(__webpack_require__("dZ6Y"));

var _utils = __webpack_require__("g/15");

var _isDynamic = __webpack_require__("/jkW");

var _parseRelativeUrl = __webpack_require__("hS4m");

var _querystring = __webpack_require__("3WeD");

var _resolveRewrites = _interopRequireDefault(__webpack_require__("S3md"));

var _routeMatcher = __webpack_require__("gguc");

var _routeRegex = __webpack_require__("YTqd");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function hasBasePath(path) {
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return basePath && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(basePath) : basePath + path : path;
}

function delBasePath(path) {
  return path.slice(basePath.length) || '/';
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  if (url.startsWith('/')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href);

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname); // if the origin didn't change, it means we received a relative href

    return finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
  } catch (_) {
    return urlAsString;
  }
}

const PAGE_LOAD_ERROR = Symbol('PAGE_LOAD_ERROR');

function markLoadingError(err) {
  return Object.defineProperty(err, PAGE_LOAD_ERROR, {});
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  return {
    url: addBasePath(resolveHref(router.pathname, url)),
    as: as ? addBasePath(resolveHref(router.pathname, as)) : as
  };
}

const manualScrollRestoration =  false && false;

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      markLoadingError(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    initialStyleSheets,
    err,
    subscription,
    isFallback
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      const {
        url,
        as,
        options
      } = state;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow
      }));
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        styleSheets: initialStyleSheets,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute);
    }

    const cleanedAs = hasBasePath(as) ? delBasePath(as) : as;
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route]);
      Router.events.emit('hashChangeComplete', as);
      return true;
    } // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to


    const pages = await this.pageLoader.getPageList();
    const {
      __rewrites: rewrites
    } = await this.pageLoader.promisedBuildManifest;
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      searchParams
    } = parsed;
    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    }

    const query = (0, _querystring.searchParamsToUrlQuery)(searchParams); // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1

    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url

    if (!this.urlIsNew(cleanedAs)) {
      method = 'replaceState';
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    const {
      shallow = false
    } = options; // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly

    let resolvedAs = as;

    if (false) {}

    resolvedAs = delBasePath(resolvedAs);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const {
        pathname: asPathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);

      if (!routeMatch) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (false) {}

          throw new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/vercel/next.js/incompatible-href-as`);
        }
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as);

    try {
      const routeInfo = await this.getRouteInfo(route, pathname, query, as, shallow);
      let {
        error
      } = routeInfo;
      Router.events.emit('beforeHistoryChange', as);
      this.changeState(method, url, as, options);

      if (false) {}

      await this.set(route, pathname, query, cleanedAs, routeInfo).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (false) {}

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if (PAGE_LOAD_ERROR in err || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      const {
        page: Component,
        styleSheets
      } = await this.fetchComponent('/_error');
      const routeInfo = {
        Component,
        styleSheets,
        err,
        error: err
      };

      try {
        routeInfo.props = await this.getInitialProps(Component, {
          err,
          pathname,
          query
        });
      } catch (gipErr) {
        console.error('Error in error page `getInitialProps`: ', gipErr);
        routeInfo.props = {};
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, shallow = false) {
    try {
      const cachedRouteInfo = this.components[route];

      if (shallow && cachedRouteInfo && this.route === route) {
        return cachedRouteInfo;
      }

      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (false) {}

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), delBasePath(as), __N_SSG);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as);
    }
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }

  _resolveHref(parsedHref, pages) {
    const {
      pathname
    } = parsedHref;
    const cleanPathname = (0, _denormalizePagePath.denormalizePagePath)(delBasePath(pathname));

    if (cleanPathname === '/404' || cleanPathname === '/_error') {
      return parsedHref;
    } // handle resolving href for dynamic routes


    if (!pages.includes(cleanPathname)) {
      // eslint-disable-next-line array-callback-return
      pages.some(page => {
        if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
          parsedHref.pathname = addBasePath(page);
          return true;
        }
      });
    }

    return parsedHref;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;
    const pages = await this.pageLoader.getPageList();
    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // Prefetch is not supported in development mode because it would trigger on-demand-entries


    if (false) {}

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    await Promise.all([this.pageLoader.prefetchData(url, asPath), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if ( true && this.sdc[cacheKey]) {
      return Promise.resolve(this.sdc[cacheKey]);
    }

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    return fetchNextData(dataHref, this.isSsr);
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    return this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "eomm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("/a9y")


/***/ }),

/***/ "es6O":
/***/ (function(module, exports, __webpack_require__) {


    var doc = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Product"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"handle"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"collectionByHandle"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"handle"},"value":{"kind":"Variable","name":{"kind":"Name","value":"handle"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"products"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"25"}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"_product"},"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"images"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"2"}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"_imageThumb"},"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"altText"},"arguments":[],"directives":[]}]}}]}}]}}]}}]}}]}}]}}]}}],"loc":{"start":0,"end":435}};
    doc.loc.source = {"body":"#import \"../../graphql/_product.graphql\"\n#import \"../../graphql/_imageThumb.graphql\"\n\nquery Product($handle: String!) {\n  collectionByHandle(handle: $handle) {\n    products(first: 25) {\n      edges {\n        node {\n          ..._product\n\n          images(first: 2) {\n            edges {\n              node {\n                ..._imageThumb\n                altText\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}\n","name":"GraphQL request","locationOffset":{"line":1,"column":1}};
  

    var names = {};
    function unique(defs) {
      return defs.filter(
        function(def) {
          if (def.kind !== 'FragmentDefinition') return true;
          var name = def.name.value
          if (names[name]) {
            return false;
          } else {
            names[name] = true;
            return true;
          }
        }
      )
    }
  doc.definitions = doc.definitions.concat(unique(__webpack_require__("NYyA").definitions));
doc.definitions = doc.definitions.concat(unique(__webpack_require__("6GEg").definitions));


    // Collect any fragment/type references from a node, adding them to the refs Set
    function collectFragmentReferences(node, refs) {
      if (node.kind === "FragmentSpread") {
        refs.add(node.name.value);
      } else if (node.kind === "VariableDefinition") {
        var type = node.type;
        if (type.kind === "NamedType") {
          refs.add(type.name.value);
        }
      }

      if (node.selectionSet) {
        node.selectionSet.selections.forEach(function(selection) {
          collectFragmentReferences(selection, refs);
        });
      }

      if (node.variableDefinitions) {
        node.variableDefinitions.forEach(function(def) {
          collectFragmentReferences(def, refs);
        });
      }

      if (node.definitions) {
        node.definitions.forEach(function(def) {
          collectFragmentReferences(def, refs);
        });
      }
    }

    var definitionRefs = {};
    (function extractReferences() {
      doc.definitions.forEach(function(def) {
        if (def.name) {
          var refs = new Set();
          collectFragmentReferences(def, refs);
          definitionRefs[def.name.value] = refs;
        }
      });
    })();

    function findOperation(doc, name) {
      for (var i = 0; i < doc.definitions.length; i++) {
        var element = doc.definitions[i];
        if (element.name && element.name.value == name) {
          return element;
        }
      }
    }

    function oneQuery(doc, operationName) {
      // Copy the DocumentNode, but clear out the definitions
      var newDoc = {
        kind: doc.kind,
        definitions: [findOperation(doc, operationName)]
      };
      if (doc.hasOwnProperty("loc")) {
        newDoc.loc = doc.loc;
      }

      // Now, for the operation we're running, find any fragments referenced by
      // it or the fragments it references
      var opRefs = definitionRefs[operationName] || new Set();
      var allRefs = new Set();
      var newRefs = new Set();

      // IE 11 doesn't support "new Set(iterable)", so we add the members of opRefs to newRefs one by one
      opRefs.forEach(function(refName) {
        newRefs.add(refName);
      });

      while (newRefs.size > 0) {
        var prevRefs = newRefs;
        newRefs = new Set();

        prevRefs.forEach(function(refName) {
          if (!allRefs.has(refName)) {
            allRefs.add(refName);
            var childRefs = definitionRefs[refName] || new Set();
            childRefs.forEach(function(childRef) {
              newRefs.add(childRef);
            });
          }
        });
      }

      allRefs.forEach(function(refName) {
        var op = findOperation(doc, refName);
        if (op) {
          newDoc.definitions.push(op);
        }
      });

      return newDoc;
    }

    module.exports = doc;
    
        module.exports["Product"] = oneQuery(doc, "Product");
        


/***/ }),

/***/ "fEtJ":
/***/ (function(module, exports) {

module.exports = {
	"input": "input__VzAlo"
};

/***/ }),

/***/ "faye":
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),

/***/ "g/15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__("6D7l");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (false) { var _App$prototype; } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (false) {}

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (false) {}

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "gSP2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ ImagePreview_ImagePreview; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__("K2gz");
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// EXTERNAL MODULE: ./components/common/Slider/index.tsx
var Slider = __webpack_require__("vcW7");

// EXTERNAL MODULE: ./components/common/Icon/index.tsx
var Icon = __webpack_require__("UzBX");

// EXTERNAL MODULE: ./components/common/ImagePreview/Slide/index.css
var Slide = __webpack_require__("qW2e");
var Slide_default = /*#__PURE__*/__webpack_require__.n(Slide);

// CONCATENATED MODULE: ./components/common/ImagePreview/Slide/index.tsx

var __jsx = external_react_default.a.createElement;


function Slide_Slide(props) {
  return __jsx("div", {
    className: external_classnames_default()(Slide_default.a.slide, props.className)
  }, __jsx("img", {
    alt: props.image.altText || props.title,
    className: "image",
    src: props.image.originalSrc
  }));
}
// EXTERNAL MODULE: ./components/common/ImagePreview/index.css
var ImagePreview = __webpack_require__("jN3L");
var ImagePreview_default = /*#__PURE__*/__webpack_require__.n(ImagePreview);

// CONCATENATED MODULE: ./components/common/ImagePreview/index.tsx

var ImagePreview_jsx = external_react_default.a.createElement;






function ImagePreview_ImagePreview(props) {
  const closePreview = props.closePreview;
  Object(external_react_["useEffect"])(() => {
    const handler = e => {
      if (e.key === 'Escape') closePreview();
    };

    document.addEventListener('keyup', handler);
    return () => document.removeEventListener('keyup', handler);
  }, [closePreview]);
  return ImagePreview_jsx("div", {
    className: external_classnames_default()(ImagePreview_default.a.preview, props.className)
  }, ImagePreview_jsx(Slider["a" /* Slider */], {
    className: "slider",
    hasKeyboardNavigation: true,
    hasNavigation: true,
    hasNumeration: true,
    initialSlideNumber: props.initialSlideNumber,
    noStyles: true
  }, props.images.map(image => ImagePreview_jsx(Slide_Slide, {
    className: "slide",
    image: image,
    key: image.id,
    title: props.title
  }))), ImagePreview_jsx("button", {
    className: "button",
    onClick: props.closePreview
  }, ImagePreview_jsx(Icon["a" /* Icon */], {
    className: "icon",
    name: "cross"
  })));
}

/***/ }),

/***/ "gguc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "hIET":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ Details_Details; });

// EXTERNAL MODULE: external "ramda"
var external_ramda_ = __webpack_require__("ANpm");

// EXTERNAL MODULE: external "prismic-reactjs"
var external_prismic_reactjs_ = __webpack_require__("PzR7");

// EXTERNAL MODULE: external "react-share"
var external_react_share_ = __webpack_require__("5+fn");

// EXTERNAL MODULE: ./components/common/helpers/index.tsx + 26 modules
var helpers = __webpack_require__("FaPq");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__("K2gz");
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// EXTERNAL MODULE: ./node_modules/next/error.js
var error = __webpack_require__("eomm");
var error_default = /*#__PURE__*/__webpack_require__.n(error);

// EXTERNAL MODULE: ./components/common/Slider/index.tsx
var Slider = __webpack_require__("vcW7");

// EXTERNAL MODULE: ./components/blog/Details/Gallery/index.css
var Details_Gallery = __webpack_require__("G2qV");
var Gallery_default = /*#__PURE__*/__webpack_require__.n(Details_Gallery);

// CONCATENATED MODULE: ./components/blog/Details/Gallery/index.tsx

var __jsx = external_react_default.a.createElement;




const Gallery_Gallery = /*#__PURE__*/Object(external_react_["memo"])(function Gallery(props) {
  return __jsx(Slider["a" /* Slider */], {
    className: external_classnames_default()(Gallery_default.a.gallery, props.className),
    hasNavigation: true,
    noStyles: true
  }, props.images.map((image, index) => __jsx("div", {
    className: "slide",
    key: image.thumbnail // eslint-disable-next-line react/jsx-no-bind
    ,
    onClick: () => props.showPreviewPopup(index)
  }, __jsx("img", {
    className: "image",
    src: image.thumbnail
  }))));
});
// EXTERNAL MODULE: external "next/config"
var config_ = __webpack_require__("KNus");
var config_default = /*#__PURE__*/__webpack_require__.n(config_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: ./components/common/Icon/index.tsx
var Icon = __webpack_require__("UzBX");

// EXTERNAL MODULE: ./components/common/ImagePreview/index.tsx + 1 modules
var ImagePreview = __webpack_require__("gSP2");

// EXTERNAL MODULE: ./components/common/Layout/index.tsx + 22 modules
var Layout = __webpack_require__("i6vu");

// EXTERNAL MODULE: ./components/common/Link/index.tsx
var Link = __webpack_require__("+alz");

// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__("wy2R");
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);

// EXTERNAL MODULE: external "prismic-javascript"
var external_prismic_javascript_ = __webpack_require__("vNl1");
var external_prismic_javascript_default = /*#__PURE__*/__webpack_require__.n(external_prismic_javascript_);

// EXTERNAL MODULE: ./components/common/ProductSliderByCollection/index.tsx
var ProductSliderByCollection = __webpack_require__("eG2q");

// EXTERNAL MODULE: ./components/blog/Details/index.css
var Details = __webpack_require__("QfLz");
var Details_default = /*#__PURE__*/__webpack_require__.n(Details);

// EXTERNAL MODULE: external "@ottofeller/hooks"
var hooks_ = __webpack_require__("49nK");

// EXTERNAL MODULE: ./i18n.js
var i18n_0 = __webpack_require__("k7Sn");

// EXTERNAL MODULE: ./components/common/VideoPlayer/index.tsx
var VideoPlayer = __webpack_require__("JUhy");

// CONCATENATED MODULE: ./components/blog/Details/index.tsx
var Details_jsx = external_react_default.a.createElement;






















const {
  publicRuntimeConfig
} = config_default()();

const propsWithUniqueKey = (props, key) => Object.assign(props || {}, {
  key
}); // https://prismic.io/docs/reactjs/beyond-the-api/html-serializer


const blogHtmlSerializer = (type, element, content, children, key) => {
  if (type === external_prismic_reactjs_["Elements"].paragraph) return /*#__PURE__*/external_react_default.a.createElement('p', propsWithUniqueKey({
    className: 'paragraph'
  }, key), children);
  if (type === external_prismic_reactjs_["Elements"].image) return /*#__PURE__*/external_react_default.a.createElement('img', propsWithUniqueKey({
    alt: element.alt || '',
    className: 'image',
    src: element.url
  }, key));
  return null;
};

function Details_Details(props) {
  var _props$post, _props$post$video;

  const relatedCollectionSlug = Object(external_react_["useMemo"])(() => {
    if (!props.post.related_collection) return 'women';
    return props.post.related_collection.split('/collections/')[1] || props.post.related_collection;
  }, [props.post.related_collection]);
  const {
    t,
    i18n
  } = Object(i18n_0["useTranslation"])();
  const previewPopup = Object(hooks_["usePopup"])();
  const {
    0: initialPreviewSlideNumber,
    1: setInitialPreviewSlideNumber
  } = Object(external_react_["useState"])(0);
  const images = Object(external_react_["useMemo"])(() => external_ramda_["map"](external_ramda_["applySpec"]({
    image: galleryImage => external_ramda_["pathOr"](galleryImage.image.url, ['image', 'large', 'url'], galleryImage),
    thumbnail: external_ramda_["path"](['image', 'url'])
  }), external_ramda_["propOr"]([], 'gallery', props.post)), [props.post]);
  const showPreviewPopup = Object(external_react_["useCallback"])(i => {
    previewPopup.show();
    setInitialPreviewSlideNumber(i);
  }, [previewPopup]);
  if (!props.post) return Details_jsx(error_default.a, {
    statusCode: 404
  });
  const title = external_prismic_reactjs_["RichText"].asText(props.post.title);
  const excerpt = external_prismic_reactjs_["RichText"].asText(props.post.excerpt || []);
  const introImagePath = Object(helpers["j" /* getHeroImagePath */])(props.post.content);
  const videoPath = (_props$post = props.post) === null || _props$post === void 0 ? void 0 : (_props$post$video = _props$post.video) === null || _props$post$video === void 0 ? void 0 : _props$post$video.url;
  return Details_jsx(Layout["a" /* Layout */], {
    className: Details_default.a.list,
    isBlogDomain: true
  }, Details_jsx(head_default.a, null, Details_jsx("meta", {
    key: "og:type",
    property: "og:type",
    content: "website"
  }), Details_jsx("meta", {
    key: "og:title",
    property: "og:title",
    content: title
  }), Details_jsx("meta", {
    key: "og:url",
    property: "og:url",
    content: `${publicRuntimeConfig.NEXT_PUBLIC_BLOG_URL}/${props.post.uid}`
  }), introImagePath && !videoPath && Details_jsx("meta", {
    key: "og:image",
    property: "og:image",
    content: introImagePath
  }), videoPath && Details_jsx("meta", {
    key: "og:video",
    property: "og:video",
    content: videoPath
  }), Details_jsx("meta", {
    key: "og:description",
    property: "og:description",
    content: excerpt
  })), Details_jsx("div", {
    className: external_classnames_default()('header', {
      'has-image-or-video': introImagePath || videoPath
    })
  }, Details_jsx("div", {
    className: "content"
  }, Details_jsx("h1", {
    className: "title"
  }, title), Details_jsx("p", {
    className: "intro"
  }, excerpt), Details_jsx("time", {
    className: "date",
    dateTime: props.post.date
  }, external_moment_default()(props.post.date).locale(i18n.language || i18n.options['defaultLanguage']).format('MMMM D, YYYY')), props.post.author && Details_jsx("div", {
    className: "author"
  }, "By ", props.post.author), Details_jsx("hr", {
    className: "divider"
  }), Details_jsx("div", {
    className: "footer"
  }, props.post.tags.length > 0 && Details_jsx("div", {
    className: "tags"
  }, Details_jsx("div", {
    className: "title"
  }, t('tags'), ":"), Details_jsx("div", {
    className: "list"
  }, props.post.tags.map(tag => Details_jsx(Link["a" /* Link */], {
    as: `/t/${tag}`,
    className: "tag",
    href: `/t/[tagslug]?tagslug=${tag}`,
    key: tag
  }, tag)))), Details_jsx("div", {
    className: "socials"
  }, Details_jsx(external_react_share_["FacebookShareButton"], {
    className: "link",
    quote: title,
    url: `${publicRuntimeConfig.NEXT_PUBLIC_BLOG_URL}/${props.post.uid}`
  }, Details_jsx(Icon["a" /* Icon */], {
    className: "icon",
    name: "facebook"
  })), Details_jsx(external_react_share_["PinterestShareButton"], {
    className: "link",
    description: title,
    media: introImagePath,
    url: `${publicRuntimeConfig.NEXT_PUBLIC_BLOG_URL}/${props.post.uid}`
  }, Details_jsx(Icon["a" /* Icon */], {
    className: "icon",
    name: "pinterest"
  })), Details_jsx(external_react_share_["TwitterShareButton"], {
    className: "link",
    title: title,
    url: `${publicRuntimeConfig.NEXT_PUBLIC_BLOG_URL}/${props.post.uid}`
  }, Details_jsx(Icon["a" /* Icon */], {
    className: "icon",
    name: "twitter"
  }))))), introImagePath && !videoPath && Details_jsx("img", {
    alt: title,
    className: "image",
    src: introImagePath
  }), videoPath && Details_jsx(VideoPlayer["a" /* VideoPlayer */], {
    className: "video",
    isVideoAutoplayable: props.post.is_video_autoplayable,
    videoUrl: videoPath
  })), Details_jsx("div", {
    className: "content"
  }, Details_jsx(external_prismic_reactjs_["RichText"], {
    render: props.post.content,
    htmlSerializer: blogHtmlSerializer
  })), !external_ramda_["isEmpty"](images) && Details_jsx(Gallery_Gallery, {
    className: "gallery",
    images: images,
    showPreviewPopup: showPreviewPopup
  }), Details_jsx(ImagePreview["a" /* ImagePreview */], {
    className: external_classnames_default()('preview', {
      'is-shown': previewPopup.isShown
    }),
    closePreview: previewPopup.hide,
    initialSlideNumber: initialPreviewSlideNumber,
    images: external_ramda_["compose"](external_ramda_["map"](external_ramda_["applySpec"]({
      altText: props.post.title,
      id: external_ramda_["identity"],
      originalSrc: external_ramda_["identity"]
    })), external_ramda_["pluck"]('image'))(images),
    title: props.post.title
  }), Details_jsx("div", {
    className: "collections"
  }, Details_jsx("h2", {
    className: "title"
  }, t('shopNow')), Details_jsx(ProductSliderByCollection["a" /* ProductSliderByCollection */], {
    className: "slider",
    handle: relatedCollectionSlug
  })));
}

Details_Details.getServerSideProps = async params => {
  const isPreview = params.query.slug === 'preview';
  let post;
  const postReponse = (await Object(helpers["u" /* prismicClient */])(params.req).query([isPreview ? external_prismic_javascript_default.a.Predicates.at('document.type', 'post') : external_prismic_javascript_default.a.Predicates.at('my.post.uid', params.query.slug)], isPreview ? {
    ref: Object(helpers["g" /* getCookie */])({
      ctx: {
        req: params.req
      },
      name: external_prismic_javascript_default.a.previewCookie
    })
  } : {})).results[0];
  if (postReponse) post = external_ramda_["merge"]({
    tags: postReponse.tags,
    uid: postReponse.uid
  }, postReponse.data);

  if (!post) {
    post = {
      props: {}
    };
    params.res.statusCode = 404;
    return post;
  }

  return {
    props: {
      hasPageTransition: true,
      post
    }
  };
};



/***/ }),

/***/ "hS4m":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__("g/15");

const DUMMY_BASE = new URL(true ? 'http://n' : undefined);
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/

function parseRelativeUrl(url, base) {
  const resolvedBase = base ? new URL(base, DUMMY_BASE) : DUMMY_BASE;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin,
    protocol
  } = new URL(url, resolvedBase);

  if (origin !== DUMMY_BASE.origin || protocol !== 'http:' && protocol !== 'https:') {
    throw new Error('invariant: invalid relative URL');
  }

  return {
    pathname,
    searchParams,
    search,
    hash,
    href: href.slice(DUMMY_BASE.origin.length)
  };
}

/***/ }),

/***/ "hUnd":
/***/ (function(module, exports) {

module.exports = {
	"productsSlider": "productsSlider__2DwJK"
};

/***/ }),

/***/ "hgu+":
/***/ (function(module, exports) {

module.exports = {
	"icon": "icon__1w2pl"
};

/***/ }),

/***/ "htLD":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Button; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("K2gz");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("kS5x");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function Button(props) {
  return __jsx("button", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_index_css__WEBPACK_IMPORTED_MODULE_2___default.a.button, props.className, `appearance--${props.appearance || 'fill'}`, `width--${props.width || 'regular'}`, {
      'has-icon': props.icon,
      'is-disabled': props.disabled || props.isLoading,
      'is-loading': props.isLoading
    }),
    disabled: props.disabled || props.isLoading,
    "data-intact-id": props.intactId,
    onClick: props.onClick,
    style: {
      '--icon': `var(--icon--image-${props.icon})`
    },
    type: props.isSubmit ? 'submit' : 'button'
  }, __jsx("span", {
    className: "background"
  }, props.disabled && props.disabledMessage || props.children), __jsx("span", {
    className: "foreground",
    "aria-hidden": true
  }, props.disabled && props.disabledMessage || props.children));
}

/***/ }),

/***/ "i6vu":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ Layout_Layout; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./components/common/AuthModalContext/index.tsx
var AuthModalContext = __webpack_require__("kXko");

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__("K2gz");
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// EXTERNAL MODULE: ./components/common/hooks/index.tsx + 3 modules
var hooks = __webpack_require__("drjS");

// EXTERNAL MODULE: ./components/common/Link/index.tsx
var Link = __webpack_require__("+alz");

// EXTERNAL MODULE: ./components/common/Layout/Footer/Dropdown/index.css
var Dropdown = __webpack_require__("TrhF");
var Dropdown_default = /*#__PURE__*/__webpack_require__.n(Dropdown);

// EXTERNAL MODULE: ./components/common/UnderlineWrapper/index.tsx
var UnderlineWrapper = __webpack_require__("4UCR");

// CONCATENATED MODULE: ./components/common/Layout/Footer/Dropdown/index.tsx

var __jsx = external_react_default.a.createElement;






function Dropdown_Dropdown(props) {
  const popup = Object(hooks["b" /* usePopup */])(false);
  const popupRef = Object(external_react_["useRef"])(null);
  Object(hooks["a" /* useClickOutside */])({
    callback: popup.close,
    intactId: props.intactId,
    reference: popupRef
  });
  return __jsx("div", {
    className: external_classnames_default()(Dropdown_default.a.dropdown, props.className)
  }, __jsx("div", {
    className: external_classnames_default()('popup', {
      'is-shown': popup.isShown
    }),
    ref: popupRef
  }, props.items.map(item => item.isHtmlLink ? __jsx("a", {
    className: "link",
    href: item.href,
    key: item.title
  }, item.title) : __jsx(Link["a" /* Link */], {
    className: "link",
    href: item.href,
    key: item.title,
    onClick: popup.close
  }, item.title))), __jsx(UnderlineWrapper["a" /* UnderlineWrapper */], {
    className: "link"
  }, __jsx("button", {
    className: "button",
    "data-intact-id": props.intactId,
    onClick: popup.toggle
  }, props.children)));
}
// EXTERNAL MODULE: external "next/config"
var config_ = __webpack_require__("KNus");
var config_default = /*#__PURE__*/__webpack_require__.n(config_);

// EXTERNAL MODULE: ./components/common/Icon/index.tsx
var Icon = __webpack_require__("UzBX");

// EXTERNAL MODULE: external "yup"
var external_yup_ = __webpack_require__("C8TP");

// EXTERNAL MODULE: external "formik"
var external_formik_ = __webpack_require__("QxnH");

// EXTERNAL MODULE: ./components/common/Button/index.tsx
var Button = __webpack_require__("htLD");

// EXTERNAL MODULE: ./components/common/form/index.tsx + 6 modules
var common_form = __webpack_require__("jbMX");

// EXTERNAL MODULE: ./components/common/Layout/Footer/Newsletter/Form/index.css
var Form = __webpack_require__("vxAg");
var Form_default = /*#__PURE__*/__webpack_require__.n(Form);

// EXTERNAL MODULE: ./i18n.js
var i18n_0 = __webpack_require__("k7Sn");

// CONCATENATED MODULE: ./components/common/Layout/Footer/Newsletter/Form/index.tsx

var Form_jsx = external_react_default.a.createElement;






function Form_Form(props) {
  const {
    isValid,
    isSubmitting
  } = Object(external_formik_["useFormikContext"])();
  const {
    t
  } = Object(i18n_0["useTranslation"])();
  return Form_jsx(external_formik_["Form"], {
    className: external_classnames_default()(Form_default.a.form, props.className)
  }, Form_jsx(common_form["b" /* Input */], {
    className: "field",
    type: "text",
    isErrorMessageHidden: true,
    name: "name",
    placeholder: t('name')
  }), Form_jsx(common_form["b" /* Input */], {
    className: "field",
    type: "email",
    isErrorMessageHidden: true,
    name: "email",
    placeholder: t('email')
  }), Form_jsx(Button["a" /* Button */], {
    appearance: "outline",
    className: "button",
    disabled: !isValid,
    isLoading: isSubmitting,
    isSubmit: true,
    width: "flex"
  }, "Ok"));
}
// CONCATENATED MODULE: ./components/common/Layout/Footer/Newsletter/index.tsx

var Newsletter_jsx = external_react_default.a.createElement;





const {
  publicRuntimeConfig
} = config_default()();

function Newsletter(props) {
  const initialValues = Object(external_react_["useMemo"])(() => ({
    email: ''
  }), []);
  const {
    0: isErrorShown,
    1: setIsErrorShown
  } = Object(external_react_["useState"])(false);
  const {
    0: isThankYouShown,
    1: setIsThankYouShown
  } = Object(external_react_["useState"])(false);
  const {
    t
  } = Object(i18n_0["useTranslation"])();
  const subscribeToNewsletter = Object(external_react_["useCallback"])(async values => {
    try {
      setIsErrorShown(false);
      await (await fetch(`${publicRuntimeConfig.NEXT_PUBLIC_APP_URL}/api/newsletter/subscribe`, {
        body: JSON.stringify({
          email: values.email,
          name: values.name
        }),
        headers: {
          accept: 'application/json'
        },
        method: 'POST'
      })).json();
      setIsThankYouShown(true);
      setTimeout(() => setIsThankYouShown(false), 3000);
    } catch (error) {
      console.error(error);
      setIsErrorShown(true);
    }
  }, []);
  const validationSchema = external_yup_["object"]().shape({
    email: external_yup_["string"]().email().required()
  });
  return Newsletter_jsx("div", null, isThankYouShown && Newsletter_jsx("p", {
    style: {
      fontSize: 10,
      letterSpacing: '.32px'
    }
  }, t('thankYouForSubscribing')), isErrorShown && Newsletter_jsx("p", {
    style: {
      color: '#bc1b1b',
      fontSize: 10,
      letterSpacing: '.32px'
    }
  }, t('errorWhileSubscribingPleaseTryAgain')), !isThankYouShown && Newsletter_jsx(external_formik_["Formik"], {
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: subscribeToNewsletter
  }, Newsletter_jsx(Form_Form, {
    className: props.className
  })));
}
// EXTERNAL MODULE: ./components/common/Layout/Footer/index.css
var Footer = __webpack_require__("WddD");
var Footer_default = /*#__PURE__*/__webpack_require__.n(Footer);

// CONCATENATED MODULE: ./components/common/Layout/Footer/index.tsx

var Footer_jsx = external_react_default.a.createElement;









const {
  publicRuntimeConfig: Footer_publicRuntimeConfig
} = config_default()();
function Footer_Footer(props) {
  const {
    t
  } = Object(i18n_0["useTranslation"])();
  return Footer_jsx("footer", {
    className: external_classnames_default()(Footer_default.a.footer, props.className)
  }, Footer_jsx("div", {
    className: "section"
  }, Footer_jsx("div", {
    className: "copyrights"
  }, Footer_jsx("span", {
    className: "string string--first"
  }, "\xA9 2020 Cruvoir corp."), Footer_jsx("span", {
    className: "string string--second"
  }, t('allRightsReserved'))), Footer_jsx("div", {
    className: "socials"
  }, Footer_jsx("a", {
    className: "link",
    href: "http://facebook.com/Cruvoir",
    target: "_blank",
    title: "Facebook"
  }, Footer_jsx(Icon["a" /* Icon */], {
    className: "icon",
    name: "facebook"
  })), Footer_jsx("a", {
    className: "link",
    href: "/",
    target: "_blank",
    title: "Twitter"
  }, Footer_jsx(Icon["a" /* Icon */], {
    className: "icon",
    name: "twitter"
  })), Footer_jsx("a", {
    className: "link",
    href: "http://instagram.com/cruvoir",
    target: "_blank",
    title: "Instagram"
  }, Footer_jsx(Icon["a" /* Icon */], {
    className: "icon",
    name: "instagram"
  })), Footer_jsx("a", {
    className: "link",
    href: "/",
    target: "_blank",
    title: "Tumblr"
  }, Footer_jsx(Icon["a" /* Icon */], {
    className: "icon",
    name: "tumblr"
  })))), Footer_jsx("div", {
    className: "links"
  }, Footer_jsx(UnderlineWrapper["a" /* UnderlineWrapper */], {
    className: "link"
  }, Footer_jsx(Link["a" /* Link */], {
    href: "contact-us"
  }, t('contacts'))), Footer_jsx(Dropdown_Dropdown, {
    className: "dropdown",
    intactId: "faq-dropdown",
    items: [{
      href: '/shopping-at-cruvoir',
      title: t('shoppingAtCruvoir')
    }, {
      href: '/shipping-and-handling',
      title: t('shippingAndHandling')
    }, {
      href: '/returns',
      title: t('returns')
    }, {
      href: '/privacy-policy',
      title: t('privacyPolicy')
    }]
  }, "FAQ"), Footer_jsx(UnderlineWrapper["a" /* UnderlineWrapper */], {
    className: "link"
  }, props.isBlogDomain ? Footer_jsx("a", {
    href: Footer_publicRuntimeConfig.NEXT_PUBLIC_APP_URL,
    target: "_blank"
  }, t('shop')) : Footer_jsx("a", {
    href: Footer_publicRuntimeConfig.NEXT_PUBLIC_BLOG_URL,
    target: "_blank"
  }, t('blog')))), Footer_jsx("div", {
    className: "newsletter"
  }, Footer_jsx("h3", {
    className: "title"
  }, t('get10OffWhenYouSignUp')), Footer_jsx(Newsletter, {
    className: "form"
  })));
}
// EXTERNAL MODULE: external "ramda"
var external_ramda_ = __webpack_require__("ANpm");

// EXTERNAL MODULE: ./components/auth/common/AuthModal/index.tsx
var AuthModal = __webpack_require__("Ir0z");

// CONCATENATED MODULE: ./components/auth/ForgotPassword/Form/index.tsx

var ForgotPassword_Form_jsx = external_react_default.a.createElement;




function ForgotPassword_Form_Form(props) {
  const {
    isValid,
    isSubmitting
  } = Object(external_formik_["useFormikContext"])();
  const {
    t
  } = Object(i18n_0["useTranslation"])();
  return ForgotPassword_Form_jsx(external_formik_["Form"], {
    className: "form"
  }, ForgotPassword_Form_jsx("div", {
    className: "note span--2"
  }, t('forgotPassword.message')), ForgotPassword_Form_jsx(common_form["b" /* Input */], {
    className: "field span--2",
    type: "email",
    name: "email",
    placeholder: t('email')
  }), props.errorMessages.length > 0 && ForgotPassword_Form_jsx("div", {
    className: "error-message span--2"
  }, props.errorMessages.map(message => ForgotPassword_Form_jsx("div", {
    className: "row",
    key: message
  }, message))), ForgotPassword_Form_jsx("div", {
    className: "note span--2"
  }, t('newCustomer'), "?", ' ', ForgotPassword_Form_jsx("button", {
    className: "text-button",
    onClick: props.showSignUp,
    type: "button"
  }, t('registerNow'))), ForgotPassword_Form_jsx(Button["a" /* Button */], {
    className: "button span--2",
    disabled: !isValid,
    isLoading: isSubmitting,
    isSubmit: true,
    width: "flex"
  }, t('restorePassword')));
}
// EXTERNAL MODULE: ./components/auth/ForgotPassword/graphql/recover.graphql
var recover_graphql = __webpack_require__("XjnJ");
var recover_graphql_default = /*#__PURE__*/__webpack_require__.n(recover_graphql);

// EXTERNAL MODULE: external "@apollo/react-hooks"
var react_hooks_ = __webpack_require__("mU8t");

// CONCATENATED MODULE: ./components/auth/ForgotPassword/index.tsx

var ForgotPassword_jsx = external_react_default.a.createElement;










function ForgotPassword() {
  const {
    0: isFormSubmitDone,
    1: setIsFormSubmitDone
  } = Object(external_react_["useState"])(false);
  const {
    0: submitErrors,
    1: setSubmitErrors
  } = Object(external_react_["useState"])([]);
  const [recover] = Object(react_hooks_["useMutation"])(recover_graphql_default.a);
  const {
    t
  } = Object(i18n_0["useTranslation"])();
  const authModalCtx = Object(external_react_["useContext"])(AuthModalContext["a" /* AuthModalContext */]);
  const close = Object(external_react_["useCallback"])(() => authModalCtx.setActive(null), [authModalCtx]);
  const showSignUp = Object(external_react_["useCallback"])(() => authModalCtx.setActive('signup'), [authModalCtx]);
  const submit = Object(external_react_["useCallback"])(async (values, actions) => {
    try {
      const r = await recover({
        variables: values
      });
      const errors = external_ramda_["compose"](external_ramda_["pluck"]('message'), external_ramda_["pathOr"]([], ['customerUserErrors']))(r.data.customerRecover);
      if (external_ramda_["length"](errors)) return setSubmitErrors(errors);
      actions.resetForm();
      setIsFormSubmitDone(true);
    } catch (e) {
      const errors = external_ramda_["compose"](external_ramda_["pluck"]('message'), external_ramda_["pathOr"]([], ['graphQLErrors']))(e);
      setSubmitErrors(errors || [t('recoverFailed')]);
    }
  }, [recover, t]);
  const initialValues = {
    'email': ''
  };
  const validationSchema = external_yup_["object"]().shape({
    email: external_yup_["string"]().email().required()
  });
  return ForgotPassword_jsx(AuthModal["a" /* AuthModal */], {
    close: close
  }, ForgotPassword_jsx("div", {
    className: "header"
  }, ForgotPassword_jsx("h2", {
    className: "title"
  }, t('forgotYourPassword'))), ForgotPassword_jsx("div", {
    className: "content"
  }, isFormSubmitDone ? ForgotPassword_jsx("div", {
    className: "form"
  }, ForgotPassword_jsx("div", {
    className: "note span--2"
  }, t('recoverPasswordEmailSent')), ForgotPassword_jsx("button", {
    className: "button span--2",
    onClick: close,
    type: "button"
  }, t('close'))) : ForgotPassword_jsx(external_react_["Fragment"], null, ForgotPassword_jsx(external_formik_["Formik"], {
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: submit
  }, ForgotPassword_jsx(ForgotPassword_Form_Form, {
    showSignUp: showSignUp,
    errorMessages: submitErrors
  })), ForgotPassword_jsx("button", {
    className: "close-button",
    onClick: close,
    type: "button"
  }, t('cancel')))));
}
// EXTERNAL MODULE: ./components/common/helpers/index.tsx + 26 modules
var helpers = __webpack_require__("FaPq");

// EXTERNAL MODULE: ./components/common/CartContext/index.tsx + 4 modules
var CartContext = __webpack_require__("n10i");

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// CONCATENATED MODULE: ./components/common/Layout/Header/Menu/CategoryItem/LinkWithAppDomain/index.tsx

var LinkWithAppDomain_jsx = external_react_default.a.createElement;


const {
  publicRuntimeConfig: LinkWithAppDomain_publicRuntimeConfig
} = config_default()();
function LinkWithAppDomain(props) {
  return props.hasAppDomain ? LinkWithAppDomain_jsx("a", {
    className: props.className,
    href: `${LinkWithAppDomain_publicRuntimeConfig.NEXT_PUBLIC_APP_URL}${props.as}`,
    onClick: props.onClick,
    title: props.title
  }, props.children) : LinkWithAppDomain_jsx(link_default.a, {
    as: props.as,
    href: props.href
  }, LinkWithAppDomain_jsx("a", {
    className: props.className,
    onClick: props.onClick,
    title: props.title
  }, props.children));
}
// CONCATENATED MODULE: ./components/common/Layout/Header/Menu/CategoryItem/index.tsx

var CategoryItem_jsx = external_react_default.a.createElement;






function CategoryItem(props) {
  const {
    t
  } = Object(i18n_0["useTranslation"])();
  const popup = Object(hooks["b" /* usePopup */])();
  const close = props.close;
  const popupClose = Object(external_react_["useCallback"])(() => {
    close();
    popup.close();
  }, [close, popup]);
  Object(hooks["a" /* useClickOutside */])({
    callback: close,
    intactId: props.intactId,
    reference: props.popupRef
  });
  return props.items.length ? CategoryItem_jsx("div", {
    className: external_classnames_default()('dropdown', props.className)
  }, CategoryItem_jsx("button", {
    className: "button",
    onClick: popup.show
  }, props.children, CategoryItem_jsx(Icon["a" /* Icon */], {
    className: "icon",
    name: "next-arrow"
  })), CategoryItem_jsx("div", {
    className: external_classnames_default()('layer', {
      'is-shown': popup.isShown
    })
  }, CategoryItem_jsx("button", {
    className: "link",
    onClick: popup.close
  }, CategoryItem_jsx(Icon["a" /* Icon */], {
    className: "icon",
    name: "back-arrow"
  }), CategoryItem_jsx("span", {
    className: "title"
  }, props.children)), CategoryItem_jsx("hr", {
    className: "divider"
  }), props.items.map(item => CategoryItem_jsx(LinkWithAppDomain
  /* eslint-disable-next-line max-len */
  , {
    as: `/${item.gender}/shop/collection/${item.collection}/category/${item.category}/subcategory/${item.subcategory}${item.tag ? `?tags=${item.tag}` : ''}`,
    className: external_classnames_default()('link', {
      'has-image': item.image
    }),
    hasAppDomain: props.hasAppDomain
    /* eslint-disable-next-line max-len */
    ,
    href: "/[gender]/shop/collection/[collection]/category/[category]/subcategory/[subcategory]",
    key: `${item.title}/${item.collectionName}/${item.image || ''}`,
    onClick: popupClose
  }, item.image && CategoryItem_jsx("div", {
    className: "picture"
  }, CategoryItem_jsx("img", {
    alt: item.collectionName ? item.collectionName : t(item.title),
    className: "image",
    src: item.image
  })), CategoryItem_jsx("span", {
    className: "title"
  }, item.collectionName ? item.collectionName : t(item.title)))))) : CategoryItem_jsx(LinkWithAppDomain, {
    as: props.as,
    className: "link",
    hasAppDomain: props.hasAppDomain,
    href: props.href,
    onClick: props.close
  }, props.children);
}
// EXTERNAL MODULE: ./components/common/CurrencyContext/index.tsx
var CurrencyContext = __webpack_require__("a8TH");

// CONCATENATED MODULE: ./components/common/Layout/Header/Menu/Dropdown/Item/index.tsx

var Item_jsx = external_react_default.a.createElement;

function Item(props) {
  const action = props.action;
  const onClick = props.onClick;
  const click = Object(external_react_["useCallback"])(() => {
    if (props.isShown) action(props.value);
    onClick();
  }, [action, onClick, props.isShown, props.value]);
  return Item_jsx("div", {
    className: props.className
  }, Item_jsx("button", {
    className: "button",
    onClick: click
  }, props.children));
}
// CONCATENATED MODULE: ./components/common/Layout/Header/Menu/Dropdown/index.tsx

var Dropdown_jsx = external_react_default.a.createElement;




function Menu_Dropdown_Dropdown(props) {
  const popup = Object(hooks["b" /* usePopup */])();
  const popupRef = Object(external_react_["useRef"])(null);
  Object(hooks["a" /* useClickOutside */])({
    callback: popup.close,
    intactId: props.intactId,
    reference: popupRef
  });
  return Dropdown_jsx("div", {
    className: props.className
  }, Dropdown_jsx("button", {
    className: "button",
    "data-intact-id": props.intactId,
    onClick: popup.toggle
  }, props.translations[props.currentItem] && props.translations[props.currentItem].short), Dropdown_jsx("div", {
    className: external_classnames_default()('list', {
      'is-shown': popup.isShown
    }),
    ref: popupRef
  }, props.list.sort().map(item => Dropdown_jsx(Item, {
    action: props.onChange,
    className: external_classnames_default()('item', {
      'is-selected': item === props.currentItem
    }),
    isShown: popup.isShown,
    key: item,
    onClick: popup.toggle,
    value: item
  }, props.translations[item].full))));
}
// EXTERNAL MODULE: ./components/common/FeaturedMenuContext/index.tsx
var FeaturedMenuContext = __webpack_require__("OavU");

// EXTERNAL MODULE: ./components/common/Layout/Header/Menu/GenderLinks/index.css
var GenderLinks = __webpack_require__("+T4N");
var GenderLinks_default = /*#__PURE__*/__webpack_require__.n(GenderLinks);

// CONCATENATED MODULE: ./components/common/Layout/Header/Menu/GenderLinks/index.tsx

var GenderLinks_jsx = external_react_default.a.createElement;





const {
  publicRuntimeConfig: GenderLinks_publicRuntimeConfig
} = config_default()();
function GenderLinks_GenderLinks(props) {
  const {
    t
  } = Object(i18n_0["useTranslation"])();
  return GenderLinks_jsx("div", {
    className: external_classnames_default()(GenderLinks_default.a.genderLinks, props.className)
  }, props.isBlogDomain ? GenderLinks_jsx("a", {
    className: external_classnames_default()('link', {
      'is-selected': props.gender === 'women'
    }),
    href: `${GenderLinks_publicRuntimeConfig.NEXT_PUBLIC_APP_URL}/women`,
    onClick: props.close
  }, t('women')) : GenderLinks_jsx(Link["a" /* Link */], {
    as: "/women",
    className: external_classnames_default()('link', {
      'is-selected': props.gender === 'women'
    }),
    href: "/[gender]?gender=women",
    onClick: props.close
  }, t('women')), props.isBlogDomain ? GenderLinks_jsx("a", {
    className: external_classnames_default()('link', {
      'is-selected': props.gender === 'men'
    }),
    href: `${GenderLinks_publicRuntimeConfig.NEXT_PUBLIC_APP_URL}/men`,
    onClick: props.close
  }, t('men')) : GenderLinks_jsx(Link["a" /* Link */], {
    as: "/men",
    className: external_classnames_default()('link', {
      'is-selected': props.gender === 'men'
    }),
    href: "/[gender]?gender=men",
    onClick: props.close
  }, t('men')));
}
// EXTERNAL MODULE: ./components/common/UserContext/index.tsx
var UserContext = __webpack_require__("xc8W");

// CONCATENATED MODULE: ./components/common/Layout/Header/Menu/UserMenu/index.tsx

var UserMenu_jsx = external_react_default.a.createElement;







function UserMenu(props) {
  const {
    t
  } = Object(i18n_0["useTranslation"])();
  const authModalCtx = Object(external_react_["useContext"])(AuthModalContext["a" /* AuthModalContext */]);
  const userCtx = Object(external_react_["useContext"])(UserContext["a" /* UserContext */]);
  const closeMenu = props.closeMenu;
  const popup = Object(hooks["b" /* usePopup */])();
  const popupRef = Object(external_react_["useRef"])(null);
  const intactId = 'user-menu';
  Object(hooks["a" /* useClickOutside */])({
    callback: popup.close,
    intactId: intactId,
    reference: popupRef
  });
  const showSignIn = Object(external_react_["useCallback"])(() => {
    authModalCtx.setActive('signin');
    closeMenu();
    popup.close();
  }, [authModalCtx, closeMenu, popup]);
  const signOut = Object(external_react_["useCallback"])(() => {
    userCtx.signOut();
    closeMenu();
    popup.close();
  }, [closeMenu, popup, userCtx]);
  const close = Object(external_react_["useCallback"])(() => {
    closeMenu();
    popup.close();
  }, [closeMenu, popup]);
  return UserMenu_jsx("div", {
    className: props.className
  }, userCtx.user ? UserMenu_jsx("div", {
    className: "dropdown"
  }, UserMenu_jsx("button", {
    className: "button",
    "data-intact-id": intactId,
    onClick: popup.toggle
  }, props.welcomeMessage), UserMenu_jsx("div", {
    className: external_classnames_default()('list', {
      'is-shown': popup.isShown
    }),
    ref: popupRef
  }, UserMenu_jsx(Link["a" /* Link */], {
    className: "link",
    href: "/profile/general",
    onClick: close
  }, t('profileSetting_plural')), UserMenu_jsx(Link["a" /* Link */], {
    className: "link",
    href: "/profile/addresses",
    onClick: close
  }, t('shippingAddress_plural')), UserMenu_jsx(Link["a" /* Link */], {
    className: "link",
    href: "/profile/orders",
    onClick: close
  }, t('orderHistory_plural')), UserMenu_jsx("button", {
    className: "link",
    onClick: signOut
  }, t('signOut')))) : UserMenu_jsx("button", {
    className: "link",
    onClick: showSignIn
  }, t('signIn')));
}
// EXTERNAL MODULE: ./components/common/WishListContext/index.tsx
var WishListContext = __webpack_require__("xsA4");

// CONCATENATED MODULE: ./components/common/Layout/Header/Menu/index.tsx

var Menu_jsx = external_react_default.a.createElement;

















const {
  publicRuntimeConfig: Menu_publicRuntimeConfig
} = config_default()();
const currenciesMap = {
  CAD: {
    full: 'CAD (C$)',
    short: 'CAD (C$)'
  },
  EUR: {
    full: 'EUR (€)',
    short: 'EUR (€)'
  },
  GBP: {
    full: 'GBP (£)',
    short: 'GBP (£)'
  },
  USD: {
    full: 'USD ($)',
    short: 'USD ($)'
  }
};
const languagesMap = {
  de: {
    full: 'Deutsch',
    short: 'De'
  },
  en: {
    full: 'English',
    short: 'En'
  },
  es: {
    full: 'Espanol',
    short: 'Es'
  },
  fr: {
    full: 'Français',
    short: 'Fr'
  }
};

const processMenuItemLabel = label => {
  return label.split(' ').join('\u00A0');
};

function Menu(props) {
  const {
    i18n,
    t
  } = Object(i18n_0["useTranslation"])();
  const close = props.close;
  const cartCtx = Object(external_react_["useContext"])(CartContext["a" /* CartContext */]);
  const currencyContext = Object(external_react_["useContext"])(CurrencyContext["a" /* CurrencyContext */]);
  const userCtx = Object(external_react_["useContext"])(UserContext["a" /* UserContext */]);
  const wishListCtx = Object(external_react_["useContext"])(WishListContext["a" /* WishListContext */]);
  const featuredMenuCtx = Object(external_react_["useContext"])(FeaturedMenuContext["a" /* FeaturedMenuContext */]);
  const changeCurrency = Object(external_react_["useCallback"])(currency => {
    currencyContext.setActivePersistent(currency);
    close();
  }, [close, currencyContext]);
  const changeLanguage = Object(external_react_["useCallback"])(async newLanguage => {
    // English translations are already loaded from Shopify, no need in requesting translations service
    i18n.changeLanguage(newLanguage);
    close();
    if (newLanguage === 'en') return;

    try {
      Object(helpers["a" /* addTranslationsFromPO */])({
        i18n,
        lang: newLanguage,
        translations: await (await fetch(`${Menu_publicRuntimeConfig.NEXT_PUBLIC_APP_URL}/api/translations/${newLanguage}/products`)).json()
      }); // The order of i18n.addResources() and i18n.changeLanguage() calls is important

      i18n.changeLanguage(newLanguage);
    } catch (error) {
      console.error(error);
    }
  }, [close, i18n]);
  const welcomeMessage = Object(external_react_["useMemo"])(() => {
    if (!userCtx.user) return;
    return userCtx.user.firstName ? t('helloUsername', {
      userName: userCtx.user.firstName
    }) : userCtx.user.email;
  }, [t, userCtx.user]);
  const featuredMenuItemsWithNewAndViewAll = Object(external_react_["useMemo"])(() => [{
    category: 'all',
    collection: 'all',
    list: [],
    subcategory: 'all',
    title: 'view all'
  }, {
    category: 'all',
    collection: `${props.gender}s-new`,
    list: [],
    subcategory: 'all',
    title: 'New'
  }, ...featuredMenuCtx[props.gender]], [featuredMenuCtx, props.gender]);
  const popupRef = Object(external_react_["useRef"])(null);
  Object(hooks["a" /* useClickOutside */])({
    callback: close,
    intactId: props.intactId,
    reference: popupRef
  });
  return Menu_jsx("div", {
    className: props.className,
    ref: popupRef
  }, Menu_jsx("button", {
    className: "button",
    onClick: close
  }, Menu_jsx(Icon["a" /* Icon */], {
    className: "icon",
    name: "cross"
  })), Menu_jsx("div", {
    className: "section"
  }, Menu_jsx("div", {
    className: "scroll"
  }, userCtx.user && Menu_jsx("div", {
    className: "welcome"
  }, Menu_jsx("div", {
    className: "message"
  }, welcomeMessage), Menu_jsx("hr", {
    className: "divider"
  })), Menu_jsx("div", {
    className: "navigation"
  }, Menu_jsx(GenderLinks_GenderLinks, {
    className: "gender",
    close: close,
    gender: props.gender,
    isBlogDomain: props.isBlogDomain
  }), Menu_jsx("div", {
    className: "list"
  }, featuredMenuItemsWithNewAndViewAll.map(item => Menu_jsx(CategoryItem
  /* eslint-disable-next-line max-len */
  , {
    as: `/${props.gender}/shop/collection/${item.collection}/category/${item.category}/subcategory/${item.subcategory}${item.tag ? `?tags=${item.tag}` : ''}`,
    close: close,
    hasAppDomain: props.isBlogDomain
    /* eslint-disable-next-line max-len */
    ,
    href: "/[gender]/shop/collection/[collection]/category/[category]/subcategory/[subcategory]",
    intactId: props.intactId,
    items: item.list,
    key: item.title,
    popupRef: popupRef
  }, processMenuItemLabel(t(item.title)))))), Menu_jsx("div", {
    className: "actions"
  }, Menu_jsx("hr", {
    className: "divider"
  }), Menu_jsx(Link["a" /* Link */], {
    className: "link type--cart",
    href: "/cart",
    onClick: close
  }, Menu_jsx(Icon["a" /* Icon */], {
    className: "icon type--cart",
    name: "cart"
  }), processMenuItemLabel(t('myBag')), Menu_jsx("span", {
    className: external_classnames_default()('counter', {
      'is-active': cartCtx.itemsCount > 0
    })
  }, cartCtx.itemsCount > 99 ? ':)' : cartCtx.itemsCount)), Menu_jsx(Link["a" /* Link */], {
    as: `/wish/${props.gender}/category/all/subcategory/all`,
    className: "link type--wish",
    href: "/wish/[gender]/category/[category]/subcategory/[subcategory]",
    onClick: close
  }, Menu_jsx(Icon["a" /* Icon */], {
    className: "icon type--wish",
    name: wishListCtx.list.length > 0 ? 'wish-fill' : 'wish'
  }), processMenuItemLabel(t('myWishList'))), Menu_jsx("hr", {
    className: "divider"
  }), Menu_jsx(Menu_Dropdown_Dropdown, {
    className: "dropdown type--language",
    currentItem: i18n.language,
    intactId: "languages-menu",
    list: i18n_0["config"].allLanguages,
    onChange: changeLanguage,
    translations: languagesMap
  }), Menu_jsx("hr", {
    className: "divider"
  }), Menu_jsx(Menu_Dropdown_Dropdown, {
    className: "dropdown type--currency",
    currentItem: currencyContext.active,
    intactId: "currencies-menu",
    list: Object.keys(currenciesMap),
    onChange: changeCurrency,
    translations: currenciesMap
  }), Menu_jsx("hr", {
    className: "divider"
  }), Menu_jsx(UserMenu, {
    className: "user-menu-wrapper type--user",
    closeMenu: close,
    welcomeMessage: welcomeMessage
  })))));
}
// EXTERNAL MODULE: ./components/common/form/Input/index.css
var Input = __webpack_require__("fEtJ");
var Input_default = /*#__PURE__*/__webpack_require__.n(Input);

// EXTERNAL MODULE: ./components/common/Layout/Header/Search/index.css
var Search = __webpack_require__("SIVv");
var Search_default = /*#__PURE__*/__webpack_require__.n(Search);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// CONCATENATED MODULE: ./components/common/Layout/Header/Search/index.tsx

var Search_jsx = external_react_default.a.createElement;











function Search_Search(props) {
  const {
    t
  } = Object(i18n_0["useTranslation"])();
  const close = props.close;
  const router = Object(router_["useRouter"])();
  const searchFieldRef = Object(external_react_["useRef"])(null); // Here and down below query check is required for tests

  const {
    0: searchValue,
    1: setSearchValue
  } = Object(external_react_["useState"])(decodeURI(external_ramda_["pathOr"]('', ['query', 'search'], router).toString()));
  const urlBaseParams = Object(external_react_["useMemo"])(() => ({
    category: external_ramda_["pathOr"](null, ['query', 'category'], router),
    collection: external_ramda_["pathOr"](null, ['query', 'collection'], router),
    gender: Object(helpers["i" /* getGender */])(router, props.isBlogDomain),
    subcategory: external_ramda_["pathOr"](null, ['query', 'subcategory'], router)
  }), [router, props.isBlogDomain]);
  const submit = Object(external_react_["useCallback"])(() => {
    if (!external_ramda_["isEmpty"](searchFieldRef.current.value)) {
      setSearchValue(searchFieldRef.current.value);
      const queryParamsString = external_ramda_["compose"](helpers["s" /* objectToFetchPostParams */], external_ramda_["reject"](external_ramda_["anyPass"]([external_ramda_["isEmpty"], external_ramda_["isNil"]])))({
        search: searchFieldRef.current.value,
        tags: external_ramda_["pathOr"](null, ['query', 'tags'], router),
        vendors: external_ramda_["pathOr"](null, ['query', 'vendors'], router)
      });
      router.push(Object(helpers["b" /* appendURLQueryParams */])(Object(helpers["n" /* getUrlHref */])(urlBaseParams), queryParamsString), Object(helpers["b" /* appendURLQueryParams */])(Object(helpers["m" /* getUrlAs */])(urlBaseParams), queryParamsString)).then(() => window.scrollTo(0, 0));
    }
  }, [router, urlBaseParams]);
  const submitSearchField = Object(external_react_["useCallback"])(e => {
    if (e.key === 'Enter') submit();
  }, [submit]);
  const closeSearchField = Object(external_react_["useCallback"])(e => {
    if (e.key === 'Escape') close();
  }, [close]);
  const clearSearchField = Object(external_react_["useCallback"])(() => {
    if (!external_ramda_["isNil"](external_ramda_["pathOr"](null, ['query', 'search'], router))) {
      const queryParamsString = external_ramda_["compose"](helpers["s" /* objectToFetchPostParams */], external_ramda_["reject"](external_ramda_["anyPass"]([external_ramda_["isEmpty"], external_ramda_["isNil"]])))({
        maxPrice: external_ramda_["pathOr"](null, ['query', 'maxPrice'], router),
        minPrice: external_ramda_["pathOr"](null, ['query', 'minPrice'], router),
        tags: external_ramda_["pathOr"](null, ['query', 'tags'], router),
        vendors: external_ramda_["pathOr"](null, ['query', 'vendors'], router)
      });
      router.push(Object(helpers["b" /* appendURLQueryParams */])(Object(helpers["n" /* getUrlHref */])(urlBaseParams), queryParamsString), Object(helpers["b" /* appendURLQueryParams */])(Object(helpers["m" /* getUrlAs */])(urlBaseParams), queryParamsString)).then(searchFieldRef.current.focus());
    }

    setSearchValue('');
  }, [router, urlBaseParams]);
  const showClearSearchFieldButton = Object(external_react_["useCallback"])(event => {
    setSearchValue(event.currentTarget.value);
  }, []);
  const popupRef = Object(external_react_["useRef"])(null);
  Object(hooks["a" /* useClickOutside */])({
    callback: close,
    intactId: props.intactId,
    reference: popupRef
  });
  Object(external_react_["useEffect"])(() => {
    if (props.isShown) setTimeout(() => {
      searchFieldRef.current.focus();
    }, 100);
  }, [props.isShown, searchFieldRef]);
  return Search_jsx("div", {
    className: external_classnames_default()(Search_default.a.search, props.className),
    ref: popupRef
  }, Search_jsx("div", {
    className: external_classnames_default()('button type--search'),
    onClick: submit
  }, Search_jsx(Icon["a" /* Icon */], {
    className: "icon",
    name: "search"
  })), Search_jsx("div", {
    className: external_classnames_default()('field', Input_default.a.input)
  }, Search_jsx("input", {
    className: "input",
    onChange: showClearSearchFieldButton,
    onKeyPress: submitSearchField,
    onKeyUp: closeSearchField,
    ref: searchFieldRef,
    type: "search",
    value: searchValue
  }), Search_jsx("div", {
    className: external_classnames_default()('label', {
      'is-focused': searchValue
    })
  }, t('whatAreYouLookingFor'))), Search_jsx("button", {
    className: external_classnames_default()('button type--clear', {
      'is-shown': searchValue
    }),
    onClick: clearSearchField
  }, Search_jsx(Icon["a" /* Icon */], {
    className: "icon",
    name: "cross-thin"
  })));
}
// EXTERNAL MODULE: ./components/common/Layout/Header/index.css
var Header = __webpack_require__("HlDa");
var Header_default = /*#__PURE__*/__webpack_require__.n(Header);

// CONCATENATED MODULE: ./components/common/Layout/Header/index.tsx

var Header_jsx = external_react_default.a.createElement;







function Header_Header(props) {
  const menuPopup = Object(hooks["b" /* usePopup */])(false);
  const menuIntactId = 'main-menu';
  const searchPopup = Object(hooks["b" /* usePopup */])(false);
  const searchIntactId = 'search-popup';
  return Header_jsx("nav", {
    className: external_classnames_default()(Header_default.a.header, {
      'is-compact': props.isCompact
    }, props.className)
  }, Header_jsx(Link["a" /* Link */], {
    className: "logo",
    href: "/"
  }, "CRUVOIR"), Header_jsx("button", {
    className: "search-button",
    "data-intact-id": searchIntactId,
    onClick: searchPopup.show
  }, Header_jsx(Icon["a" /* Icon */], {
    className: "icon",
    name: "search"
  })), Header_jsx("button", {
    className: "menu-button",
    "data-intact-id": menuIntactId,
    onClick: menuPopup.show
  }, Header_jsx(Icon["a" /* Icon */], {
    className: "icon",
    name: "menu"
  })), Header_jsx(Menu, {
    className: external_classnames_default()('menu-popup', {
      'is-shown': menuPopup.isShown
    }),
    close: menuPopup.close,
    gender: props.gender,
    intactId: menuIntactId,
    isBlogDomain: props.isBlogDomain
  }), Header_jsx(Search_Search, {
    className: external_classnames_default()('search-popup', {
      'is-shown': searchPopup.isShown
    }),
    close: searchPopup.close,
    intactId: searchIntactId,
    isShown: searchPopup.isShown,
    isBlogDomain: props.isBlogDomain
  }));
}
// EXTERNAL MODULE: ./components/common/Layout/NewsletterPopup/Form/index.css
var NewsletterPopup_Form = __webpack_require__("bKbD");
var NewsletterPopup_Form_default = /*#__PURE__*/__webpack_require__.n(NewsletterPopup_Form);

// CONCATENATED MODULE: ./components/common/Layout/NewsletterPopup/Form/index.tsx

var NewsletterPopup_Form_jsx = external_react_default.a.createElement;






function NewsletterPopup_Form_Form(props) {
  const {
    isValid,
    isSubmitting
  } = Object(external_formik_["useFormikContext"])();
  const {
    t
  } = Object(i18n_0["useTranslation"])();
  return NewsletterPopup_Form_jsx(external_formik_["Form"], {
    className: external_classnames_default()(NewsletterPopup_Form_default.a.form, props.className)
  }, NewsletterPopup_Form_jsx("div", {
    className: "fields"
  }, NewsletterPopup_Form_jsx(common_form["b" /* Input */], {
    className: "field",
    type: "text",
    isErrorMessageHidden: true,
    name: "name",
    placeholder: t('name')
  }), NewsletterPopup_Form_jsx(common_form["b" /* Input */], {
    className: "field",
    type: "email",
    isErrorMessageHidden: true,
    name: "email",
    placeholder: t('email')
  })), NewsletterPopup_Form_jsx("div", {
    className: "buttons"
  }, NewsletterPopup_Form_jsx(Button["a" /* Button */], {
    appearance: "outline",
    className: "button",
    onClick: props.close,
    width: "flex"
  }, t('noThanks')), NewsletterPopup_Form_jsx(Button["a" /* Button */], {
    className: "button",
    disabled: !isValid,
    isLoading: isSubmitting,
    isSubmit: true,
    width: "flex"
  }, t('signUp'))));
}
// EXTERNAL MODULE: ./components/common/Portal/index.tsx
var Portal = __webpack_require__("P4FY");

// EXTERNAL MODULE: ./components/common/Layout/NewsletterPopup/index.css
var NewsletterPopup = __webpack_require__("3qBb");
var NewsletterPopup_default = /*#__PURE__*/__webpack_require__.n(NewsletterPopup);

// CONCATENATED MODULE: ./components/common/Layout/NewsletterPopup/index.tsx

var NewsletterPopup_jsx = external_react_default.a.createElement;












const {
  publicRuntimeConfig: NewsletterPopup_publicRuntimeConfig
} = config_default()();
function NewsletterPopup_NewsletterPopup() {
  const {
    t
  } = Object(i18n_0["useTranslation"])();
  const popup = Object(hooks["b" /* usePopup */])();
  const close = Object(external_react_["useCallback"])(() => {
    localStorage.setItem('newsletter-popup', 'disabled');
    popup.close();
  }, [popup]);
  Object(external_react_["useEffect"])(() => {
    if (!localStorage.getItem('newsletter-popup')) setTimeout(popup.show, 10000);
  }, [popup.show]);
  const initialValues = Object(external_react_["useMemo"])(() => ({
    email: ''
  }), []);
  const subscribeToNewsletter = Object(external_react_["useCallback"])(async values => {
    const response = await (await fetch(`${NewsletterPopup_publicRuntimeConfig.NEXT_PUBLIC_APP_URL}/api/newsletter/subscribe`, {
      body: JSON.stringify({
        email: values.email,
        name: values.name
      }),
      headers: {
        accept: 'application/json'
      },
      method: 'POST'
    })).json();
    if (response.success) setTimeout(close, 500);
  }, [close]);
  const validationSchema = external_yup_["object"]().shape({
    email: external_yup_["string"]().email().required()
  });
  return NewsletterPopup_jsx(Portal["a" /* Portal */], {
    selector: "#portal-root"
  }, NewsletterPopup_jsx("div", {
    className: external_classnames_default()(NewsletterPopup_default.a.newsletterPopup, {
      'is-shown': popup.isShown
    })
  }, NewsletterPopup_jsx("div", {
    className: "section"
  }, NewsletterPopup_jsx("h2", {
    className: "title"
  }, t('welcomeTo', {
    projectName: 'Cruvoir'
  })), NewsletterPopup_jsx("h2", {
    className: "title"
  }, t('welcomeToTeaser')), NewsletterPopup_jsx("h3", {
    className: "title"
  }, t('informedActivities')), NewsletterPopup_jsx(external_formik_["Formik"], {
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: subscribeToNewsletter
  }, NewsletterPopup_jsx(NewsletterPopup_Form_Form, {
    className: "form",
    close: close
  }))), NewsletterPopup_jsx("p", {
    className: "note"
  }, "By entering your email, you agree to our", ' ', NewsletterPopup_jsx(UnderlineWrapper["a" /* UnderlineWrapper */], {
    className: "link",
    isPermanent: true
  }, NewsletterPopup_jsx(Link["a" /* Link */], {
    as: "/privacy-policy",
    href: "/privacy-policy"
  }, t('privacyPolicy'))), "."), NewsletterPopup_jsx("p", {
    className: "note"
  }, NewsletterPopup_jsx(UnderlineWrapper["a" /* UnderlineWrapper */], {
    className: "link",
    isPermanent: true
  }, NewsletterPopup_jsx("a", {
    href: "https://cruvoir.com"
  }, t('shopNow').split(' ')[0])), ' ', t('shopNow').split(' ')[1], ' ', "|", ' ', t('initialOutlet').split(' ')[0], ' ', NewsletterPopup_jsx(UnderlineWrapper["a" /* UnderlineWrapper */], {
    className: "link",
    isPermanent: true
  }, NewsletterPopup_jsx("a", {
    className: "link",
    href: "https://blog.cruvoir.com"
  }, t('initialOutlet').split(' ')[1])), ' ', "|", ' ', t('socialNetwork').split(' ')[0], ' ', NewsletterPopup_jsx(UnderlineWrapper["a" /* UnderlineWrapper */], {
    className: "link",
    isPermanent: true
  }, NewsletterPopup_jsx("a", {
    className: "link",
    href: "https://instagram.com/cruvoir/"
  }, t('socialNetwork').split(' ')[1]))), NewsletterPopup_jsx("p", {
    className: "note"
  }, NewsletterPopup_jsx(UnderlineWrapper["a" /* UnderlineWrapper */], {
    className: "link",
    isPermanent: true
  }, NewsletterPopup_jsx("a", {
    className: "link",
    href: "https://discord.gg/M7qdhnZHMR"
  }, " ", t('discordServer').split(' ')[0])), ' ', t('discordServer').split(' ')[1], ' ', "|", ' ', t('scheduleMeeting').split(' ')[0], ' ', t('scheduleMeeting').split(' ')[1], ' ', NewsletterPopup_jsx(UnderlineWrapper["a" /* UnderlineWrapper */], {
    className: "link",
    isPermanent: true
  }, NewsletterPopup_jsx("a", {
    className: "link",
    href: "https://calendly.com/c---31"
  }, t('scheduleMeeting').split(' ')[2])))));
}
// EXTERNAL MODULE: ./components/common/Layout/ScrollToTopButton/index.css
var ScrollToTopButton = __webpack_require__("2TdT");
var ScrollToTopButton_default = /*#__PURE__*/__webpack_require__.n(ScrollToTopButton);

// CONCATENATED MODULE: ./components/common/Layout/ScrollToTopButton/index.tsx

var ScrollToTopButton_jsx = external_react_default.a.createElement;




 // How many  % have to scroll down the page to appear "Back to top" button.

const anchorMargin = 20;
function ScrollToTopButton_ScrollToTopButton(props) {
  const {
    t
  } = Object(i18n_0["useTranslation"])();
  const scrollToTopAnchorRef = Object(external_react_["useRef"])(null);
  const {
    0: isScrollToTopButtonShown,
    1: setScrollToTopButtonShown
  } = Object(external_react_["useState"])(false);
  const scrollToTop = Object(external_react_["useCallback"])(() => scrollToTopAnchorRef.current.scrollIntoView({
    behavior: 'smooth'
  }), []);
  Object(external_react_["useEffect"])(() => {
    if ('IntersectionObserver' in window) {
      const scrollToTopAnchorElement = scrollToTopAnchorRef.current;
      const observer = new IntersectionObserver(entries => setScrollToTopButtonShown(!entries[0].isIntersecting), {
        rootMargin: `${anchorMargin}% 0% 0% 0%`
      });
      observer.observe(scrollToTopAnchorElement);
      return () => observer.unobserve(scrollToTopAnchorElement);
    } else {
      const handleScroll = () => setScrollToTopButtonShown(window.scrollY > anchorMargin * window.innerHeight / 100);

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, []);
  return ScrollToTopButton_jsx("div", {
    className: external_classnames_default()(ScrollToTopButton_default.a.scrollToTopButton, props.className),
    ref: scrollToTopAnchorRef
  }, ScrollToTopButton_jsx("button", {
    className: external_classnames_default()('button', {
      'is-shown': isScrollToTopButtonShown
    }),
    onClick: scrollToTop,
    title: t('backToTop')
  }, ScrollToTopButton_jsx(Icon["a" /* Icon */], {
    className: "icon",
    name: "scroll-to-top-arrow"
  })));
}
// CONCATENATED MODULE: ./components/auth/SignIn/Form/index.tsx

var SignIn_Form_jsx = external_react_default.a.createElement;




function SignIn_Form_Form(props) {
  const {
    isValid,
    isSubmitting
  } = Object(external_formik_["useFormikContext"])();
  const {
    t
  } = Object(i18n_0["useTranslation"])();
  return SignIn_Form_jsx(external_formik_["Form"], {
    className: "form"
  }, SignIn_Form_jsx(common_form["b" /* Input */], {
    className: "field span--2",
    type: "email",
    name: "email",
    placeholder: t('email')
  }), SignIn_Form_jsx(common_form["b" /* Input */], {
    className: "field span--2",
    type: "password",
    name: "password",
    placeholder: t('password')
  }), SignIn_Form_jsx(common_form["a" /* Checkbox */], {
    className: "field span--1",
    caption: t('rememberMe'),
    name: "rememberMe"
  }), SignIn_Form_jsx("button", {
    className: "text-button span--1",
    onClick: props.showForgot,
    type: "button"
  }, t('forgotYourPassword'), "?"), props.errorMessages.length > 0 && SignIn_Form_jsx("div", {
    className: "error-message span--2"
  }, props.errorMessages.map(message => SignIn_Form_jsx("div", {
    className: "row",
    key: message
  }, message))), SignIn_Form_jsx(Button["a" /* Button */], {
    className: "button span--2",
    disabled: !isValid,
    isLoading: isSubmitting,
    isSubmit: true,
    width: "flex"
  }, t('signIn')));
}
// EXTERNAL MODULE: ./components/auth/SignIn/graphql/signin.graphql
var signin_graphql = __webpack_require__("ALHQ");
var signin_graphql_default = /*#__PURE__*/__webpack_require__.n(signin_graphql);

// CONCATENATED MODULE: ./components/auth/SignIn/index.tsx

var SignIn_jsx = external_react_default.a.createElement;












function SignIn() {
  const {
    t
  } = Object(i18n_0["useTranslation"])();
  const {
    0: signInErrors,
    1: setSignInErrors
  } = Object(external_react_["useState"])([]);
  const authModalCtx = Object(external_react_["useContext"])(AuthModalContext["a" /* AuthModalContext */]);
  const close = Object(external_react_["useCallback"])(() => authModalCtx.setActive(null), [authModalCtx]);
  const showSignUp = Object(external_react_["useCallback"])(() => authModalCtx.setActive('signup'), [authModalCtx]);
  const showForgot = Object(external_react_["useCallback"])(() => authModalCtx.setActive('forgot'), [authModalCtx]);
  const [signin] = Object(react_hooks_["useMutation"])(signin_graphql_default.a);
  const userCtx = Object(external_react_["useContext"])(UserContext["a" /* UserContext */]);
  const submit = Object(external_react_["useCallback"])(async (values, actions) => {
    try {
      const r = await signin({
        variables: {
          input: external_ramda_["omit"](['rememberMe'], values)
        }
      });
      const errors = external_ramda_["compose"](external_ramda_["pluck"]('message'), external_ramda_["pathOr"]([], ['customerUserErrors']))(r.data.customerAccessTokenCreate);
      if (external_ramda_["length"](errors)) return setSignInErrors(errors);
      const expiresAt = new Date(r.data.customerAccessTokenCreate.customerAccessToken.expiresAt);
      const token = r.data.customerAccessTokenCreate.customerAccessToken.accessToken;
      userCtx.saveToken({
        expiresAt: values.rememberMe ? expiresAt : null,
        token: token
      });
      actions.resetForm();
      close();
    } catch (e) {
      return setSignInErrors([t('signInFailed')]);
    }
  }, [close, signin, t, userCtx]);
  const validationSchema = external_yup_["object"]().shape({
    email: external_yup_["string"]().email().required(),
    password: external_yup_["string"]().required()
  });
  const initialValues = {
    email: '',
    password: '',
    rememberMe: false
  };
  return SignIn_jsx(AuthModal["a" /* AuthModal */], {
    close: close
  }, SignIn_jsx("div", {
    className: "header"
  }, SignIn_jsx("button", {
    className: external_classnames_default()('button', 'is-selected')
  }, t('signIn')), SignIn_jsx("button", {
    onClick: showSignUp,
    className: "button"
  }, t('signUp'))), SignIn_jsx("div", {
    className: "content"
  }, SignIn_jsx(external_formik_["Formik"], {
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: submit
  }, SignIn_jsx(SignIn_Form_Form, {
    errorMessages: signInErrors,
    showForgot: showForgot
  })), SignIn_jsx("button", {
    className: "close-button",
    onClick: close,
    type: "button"
  }, t('cancel'))));
}
// CONCATENATED MODULE: ./components/auth/SignUp/Form/index.tsx

var SignUp_Form_jsx = external_react_default.a.createElement;




function SignUp_Form_Form(props) {
  const {
    isValid,
    isSubmitting
  } = Object(external_formik_["useFormikContext"])();
  const {
    t
  } = Object(i18n_0["useTranslation"])();
  return SignUp_Form_jsx(external_formik_["Form"], {
    className: "form"
  }, SignUp_Form_jsx(common_form["b" /* Input */], {
    className: "field span--1",
    type: "text",
    name: "firstName",
    placeholder: t('name')
  }), SignUp_Form_jsx(common_form["b" /* Input */], {
    className: "field span--1",
    type: "text",
    name: "lastName",
    placeholder: t('lastName')
  }), SignUp_Form_jsx(common_form["b" /* Input */], {
    className: "field span--2",
    type: "email",
    name: "email",
    placeholder: t('email')
  }), SignUp_Form_jsx(common_form["b" /* Input */], {
    className: "field span--2",
    type: "tel",
    name: "phone",
    placeholder: t('phone')
  }), SignUp_Form_jsx(common_form["b" /* Input */], {
    className: "field span--2",
    type: "password",
    name: "password",
    placeholder: t('password')
  }), SignUp_Form_jsx(common_form["b" /* Input */], {
    className: "field span--2",
    type: "password",
    name: "password2",
    placeholder: t('confirmPassword')
  }), SignUp_Form_jsx(common_form["a" /* Checkbox */], {
    className: "field span--2",
    caption: t('get10OffWhenYouSignUp'),
    name: "acceptsMarketing"
  }), props.errorMessages.length > 0 && SignUp_Form_jsx("div", {
    className: "error-message span--2"
  }, props.errorMessages.map(message => SignUp_Form_jsx("div", {
    className: "row",
    key: message
  }, message))), SignUp_Form_jsx(Button["a" /* Button */], {
    className: "button span--2",
    disabled: !isValid,
    isLoading: isSubmitting,
    isSubmit: true,
    width: "flex"
  }, t('createAccount')));
}
// EXTERNAL MODULE: ./components/auth/SignUp/graphql/signup.graphql
var signup_graphql = __webpack_require__("KcFw");
var signup_graphql_default = /*#__PURE__*/__webpack_require__.n(signup_graphql);

// CONCATENATED MODULE: ./components/auth/SignUp/index.tsx

var SignUp_jsx = external_react_default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













function SignUp() {
  const {
    t
  } = Object(i18n_0["useTranslation"])();
  const {
    0: signUpErrors,
    1: setSignUpErrors
  } = Object(external_react_["useState"])([]);
  const {
    0: isSignUpDone,
    1: setIsSignUpDone
  } = Object(external_react_["useState"])(false);
  const authModalCtx = Object(external_react_["useContext"])(AuthModalContext["a" /* AuthModalContext */]);
  const close = Object(external_react_["useCallback"])(() => authModalCtx.setActive(null), [authModalCtx]);
  const showSignIn = Object(external_react_["useCallback"])(() => authModalCtx.setActive('signin'), [authModalCtx]);
  const [signup] = Object(react_hooks_["useMutation"])(signup_graphql_default.a);
  const validationSchema = external_yup_["object"]().shape({
    email: external_yup_["string"]().email().required(),
    password: external_yup_["string"]().required(),
    password2: external_yup_["string"]().required().oneOf([external_yup_["ref"]('password'), null], t('passwordsMustMatch'))
  });
  const initialValues = {
    acceptsMarketing: false,
    email: '',
    firstName: '',
    lastName: '',
    password: '',
    password2: '',
    phone: ''
  };
  const submit = Object(external_react_["useCallback"])(async (values, actions) => {
    try {
      const r = await signup({
        variables: {
          input: _objectSpread({
            acceptsMarketing: values.acceptsMarketing,
            email: values.email,
            firstName: values.firstName,
            lastName: values.lastName,
            password: values.password
          }, values.phone ? {
            phone: values.phone
          } : {})
        }
      });
      const errors = external_ramda_["compose"](external_ramda_["pluck"]('message'), external_ramda_["pathOr"]([], ['customerUserErrors']))(r.data.customerCreate);
      if (external_ramda_["length"](errors)) return setSignUpErrors(errors);
      actions.resetForm();
      return setIsSignUpDone(true);
    } catch (e) {
      return setSignUpErrors([t('signUpFailed')]);
    }
  }, [signup, t]);
  return SignUp_jsx(AuthModal["a" /* AuthModal */], {
    close: close
  }, SignUp_jsx("div", {
    className: "header"
  }, SignUp_jsx("button", {
    onClick: showSignIn,
    className: "button"
  }, t('signIn')), SignUp_jsx("button", {
    className: external_classnames_default()('button', 'is-selected')
  }, t('signUp'))), SignUp_jsx("div", {
    className: "content"
  }, isSignUpDone ? SignUp_jsx("div", {
    className: "form"
  }, SignUp_jsx("div", {
    className: "note span--2"
  }, t('signUpDone')), SignUp_jsx(Button["a" /* Button */], {
    className: "button span--2",
    onClick: showSignIn,
    width: "flex"
  }, t('signIn'))) : SignUp_jsx(external_formik_["Formik"], {
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: submit
  }, SignUp_jsx(SignUp_Form_Form, {
    errorMessages: signUpErrors
  })), SignUp_jsx("button", {
    className: "close-button",
    onClick: close,
    type: "button"
  }, t('cancel'))));
}
// EXTERNAL MODULE: ./components/common/Layout/index.css
var Layout = __webpack_require__("aKUf");
var Layout_default = /*#__PURE__*/__webpack_require__.n(Layout);

// CONCATENATED MODULE: ./components/common/Layout/index.tsx

var Layout_jsx = external_react_default.a.createElement;













function Layout_Layout(props) {
  const authModalCtx = Object(external_react_["useContext"])(AuthModalContext["a" /* AuthModalContext */]);
  const router = Object(router_["useRouter"])();
  const gender = Object(helpers["i" /* getGender */])(router, props.isBlogDomain);
  return Layout_jsx("div", {
    className: external_classnames_default()(Layout_default.a.layout, {
      'has-hero': props.hero
    })
  }, Layout_jsx(ScrollToTopButton_ScrollToTopButton, {
    className: "anchor"
  }), Layout_jsx(Header_Header, {
    className: "header",
    gender: gender,
    isBlogDomain: props.isBlogDomain,
    isCompact: props.isBlogDomain || router && /\/(women|men)?$/i.test(router.asPath)
  }), props.hero, Layout_jsx("div", {
    className: external_classnames_default()('content', props.className)
  }, props.children), Layout_jsx(Footer_Footer, {
    className: "footer",
    gender: gender,
    isBlogDomain: props.isBlogDomain
  }), authModalCtx.active === 'signin' && Layout_jsx(SignIn, null), authModalCtx.active === 'forgot' && Layout_jsx(ForgotPassword, null), authModalCtx.active === 'signup' && Layout_jsx(SignUp, null), Layout_jsx(NewsletterPopup_NewsletterPopup, null));
}

/***/ }),

/***/ "iHhI":
/***/ (function(module, exports) {

module.exports = require("react-player");

/***/ }),

/***/ "jIPS":
/***/ (function(module, exports) {

module.exports = {
	"underline": "underline__25aNz"
};

/***/ }),

/***/ "jMHH":
/***/ (function(module, exports) {

module.exports = {
	"item": "item__37jzm"
};

/***/ }),

/***/ "jN3L":
/***/ (function(module, exports) {

module.exports = {
	"preview": "preview__25CiM"
};

/***/ }),

/***/ "jbMX":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ Checkbox_Checkbox; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ Input_Input; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* reexport */ NativeSelect_NativeSelect; });
__webpack_require__.d(__webpack_exports__, "d", function() { return /* reexport */ Radio_Radio; });
__webpack_require__.d(__webpack_exports__, "e", function() { return /* reexport */ Select; });

// UNUSED EXPORTS: Autocomplete

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "formik"
var external_formik_ = __webpack_require__("QxnH");

// EXTERNAL MODULE: ./components/common/form/common/Field/index.tsx
var Field = __webpack_require__("75Ko");

// EXTERNAL MODULE: external "react-select"
var external_react_select_ = __webpack_require__("vtRj");
var external_react_select_default = /*#__PURE__*/__webpack_require__.n(external_react_select_);

// EXTERNAL MODULE: ./components/common/form/Autocomplete/index.css
var Autocomplete = __webpack_require__("wgzJ");
var Autocomplete_default = /*#__PURE__*/__webpack_require__.n(Autocomplete);

// CONCATENATED MODULE: ./components/common/form/Autocomplete/index.tsx

var __jsx = external_react_default.a.createElement;





function Autocomplete_Autocomplete(props) {
  const onChange = props.onChange;
  const [field, meta] = Object(external_formik_["useField"])(props.name);
  const {
    setFieldValue
  } = Object(external_formik_["useFormikContext"])();
  const setValue = Object(external_react_["useCallback"])(obj => {
    setFieldValue(props.name, obj.value);
    if (typeof onChange === 'function') onChange(obj.value);
  }, [onChange, props.name, setFieldValue]);
  return __jsx(Field["a" /* Field */], {
    isInvalid: meta.error && meta.touched,
    errorMessage: meta.error,
    className: props.className,
    disabled: props.disabled
  }, __jsx(external_react_select_default.a, {
    className: Autocomplete_default.a.autocomplete,
    classNamePrefix: "autocomplete",
    id: `select-${field.name}`,
    inputId: `input-${field.name}`,
    isDisabled: props.disabled,
    onChange: setValue,
    options: props.options,
    value: props.value
  }));
}
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__("K2gz");
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// EXTERNAL MODULE: ./components/common/form/Checkbox/index.css
var Checkbox = __webpack_require__("FT4M");
var Checkbox_default = /*#__PURE__*/__webpack_require__.n(Checkbox);

// CONCATENATED MODULE: ./components/common/form/Checkbox/index.tsx

var Checkbox_jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




function Checkbox_Checkbox(props) {
  const [field] = Object(external_formik_["useField"])(props.name);
  return Checkbox_jsx("label", {
    className: external_classnames_default()(Checkbox_default.a.checkbox, props.className)
  }, Checkbox_jsx("input", _extends({
    checked: Boolean(field.value),
    className: "input",
    type: "checkbox"
  }, field)), Checkbox_jsx("span", {
    className: "caption"
  }, props.caption));
}
// EXTERNAL MODULE: ./components/common/form/Input/index.css
var Input = __webpack_require__("fEtJ");
var Input_default = /*#__PURE__*/__webpack_require__.n(Input);

// CONCATENATED MODULE: ./components/common/form/Input/index.tsx

var Input_jsx = external_react_default.a.createElement;

function Input_extends() { Input_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Input_extends.apply(this, arguments); }





function Input_Input(props) {
  const [field, meta] = Object(external_formik_["useField"])(props.name);
  const isInvalid = meta.error && meta.touched;
  return Input_jsx(Field["a" /* Field */], {
    className: props.className,
    disabled: props.disabled,
    errorMessage: meta.error,
    isErrorMessageHidden: props.isErrorMessageHidden,
    isInvalid: isInvalid
  }, Input_jsx("div", {
    className: Input_default.a.input
  }, Input_jsx("input", Input_extends({}, field, {
    className: "input",
    disabled: props.disabled,
    placeholder: props.placeholder,
    type: props.type,
    value: field.value || ''
  })), props.placeholder && Input_jsx("div", {
    className: external_classnames_default()('label', {
      'is-focused': field.value
    })
  }, props.placeholder)));
}
// EXTERNAL MODULE: external "ramda"
var external_ramda_ = __webpack_require__("ANpm");

// EXTERNAL MODULE: ./components/common/helpers/index.tsx + 26 modules
var helpers = __webpack_require__("FaPq");

// EXTERNAL MODULE: ./components/common/form/NativeSelect/index.css
var NativeSelect = __webpack_require__("vuzH");
var NativeSelect_default = /*#__PURE__*/__webpack_require__.n(NativeSelect);

// CONCATENATED MODULE: ./components/common/form/NativeSelect/index.tsx

var NativeSelect_jsx = external_react_default.a.createElement;




function NativeSelect_NativeSelect(props) {
  return NativeSelect_jsx("div", {
    className: external_classnames_default()(NativeSelect_default.a.select, props.className, {
      'is-disabled': props.disabled
    })
  }, NativeSelect_jsx("select", {
    className: "input",
    disabled: props.disabled,
    onChange: props.onChange,
    value: props.value,
    name: props.name
  }, external_ramda_["map"](option => NativeSelect_jsx("option", {
    key: option.value,
    value: option.value
  }, option.label), props.options)), props.isInvalid && props.errorMessage && NativeSelect_jsx("div", {
    className: "error-message"
  }, Object(helpers["d" /* capfirst */])(props.errorMessage)));
}
// EXTERNAL MODULE: ./components/common/form/Radio/index.css
var Radio = __webpack_require__("q3M2");
var Radio_default = /*#__PURE__*/__webpack_require__.n(Radio);

// CONCATENATED MODULE: ./components/common/form/Radio/index.tsx

var Radio_jsx = external_react_default.a.createElement;

function Radio_extends() { Radio_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Radio_extends.apply(this, arguments); }





function Radio_Radio(props) {
  const [field, meta] = Object(external_formik_["useField"])(props.name);
  const isInvalid = meta.error && meta.touched;
  const change = Object(external_react_["useCallback"])(event => {
    field.onChange(event);
    if (typeof props.onChange === 'function') props.onChange(event);
  }, [field, props]);
  return Radio_jsx(Field["a" /* Field */], {
    className: props.className,
    disabled: props.disabled,
    errorMessage: meta.error,
    isErrorMessageHidden: props.isErrorMessageHidden,
    isInvalid: isInvalid
  }, Radio_jsx("label", {
    className: Radio_default.a.radio
  }, Radio_jsx(external_formik_["Field"], Radio_extends({}, field, {
    className: "input",
    disabled: props.disabled,
    onChange: change,
    type: "radio",
    name: props.name,
    value: props.value
  })), Radio_jsx("span", {
    className: "caption"
  }, props.caption)));
}
// CONCATENATED MODULE: ./components/common/form/Select/index.tsx

var Select_jsx = external_react_default.a.createElement;

function Select_extends() { Select_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Select_extends.apply(this, arguments); }





function Select(props) {
  const [field, meta] = Object(external_formik_["useField"])(props.name);
  const isInvalid = meta.error && meta.touched;
  const onChange = Object(external_react_["useCallback"])(event => {
    field.onChange(event);
    if (typeof props.onChange === 'function') props.onChange(event);
  }, [field, props]);
  return Select_jsx(NativeSelect_NativeSelect, Select_extends({}, field, {
    value: field.value || '',
    className: external_classnames_default()(props.className, {
      'is-invalid': isInvalid,
      'is-uppercased': props.isUppercase
    }),
    disabled: props.disabled,
    onChange: onChange,
    options: props.options,
    name: props.name,
    isInvalid: isInvalid,
    errorMessage: meta.error
  }));
}
// CONCATENATED MODULE: ./components/common/form/index.tsx







/***/ }),

/***/ "k7Sn":
/***/ (function(module, exports, __webpack_require__) {

const NextI18Next = __webpack_require__("6f9I").default;

module.exports = new NextI18Next({
  defaultLanguage: 'en',
  fallbackLng: 'en',
  localePath: 'public/static/locales',
  otherLanguages: ['de', 'es', 'fr']
});

/***/ }),

/***/ "kS5x":
/***/ (function(module, exports) {

module.exports = {
	"button": "button__1ysRj"
};

/***/ }),

/***/ "kXko":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthModalContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AuthModalContextProvider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const AuthModalContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])({
  active: null,
  setActive: () => null
});
function AuthModalContextProvider(props) {
  const {
    0: active,
    1: setActive
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(props.initialValue);
  return __jsx(AuthModalContext.Provider, {
    value: {
      active,
      setActive
    }
  }, props.children);
}

/***/ }),

/***/ "kwHZ":
/***/ (function(module, exports) {

module.exports = {
	"slider": "slider__1_8QU"
};

/***/ }),

/***/ "lwOi":
/***/ (function(module, exports) {

module.exports = {
	"videoPlayer": "videoPlayer__3bjq6"
};

/***/ }),

/***/ "mU8t":
/***/ (function(module, exports) {

module.exports = require("@apollo/react-hooks");

/***/ }),

/***/ "mb2F":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConvertCurrency; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _CurrencyContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("a8TH");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function ConvertCurrency(props) {
  const currencyContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_CurrencyContext__WEBPACK_IMPORTED_MODULE_1__[/* CurrencyContext */ "a"]);
  const currencyPrefix = {
    CAD: 'C$',
    EUR: '€',
    GBP: '£',
    USD: '$'
  };
  if (currencyContext.rates) return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, currencyPrefix[props.to], (parseFloat(props.children.toString()) * currencyContext.rates[props.to]).toFixed(2));else return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, "\u2026");
}



/***/ }),

/***/ "n10i":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ CartContext; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ CartContextProvider; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "ramda"
var external_ramda_ = __webpack_require__("ANpm");

// EXTERNAL MODULE: external "@apollo/react-hooks"
var react_hooks_ = __webpack_require__("mU8t");

// EXTERNAL MODULE: ./components/common/CartContext/graphql/apply-discount-code.graphql
var apply_discount_code_graphql = __webpack_require__("9uoE");
var apply_discount_code_graphql_default = /*#__PURE__*/__webpack_require__.n(apply_discount_code_graphql);

// EXTERNAL MODULE: ./components/common/EmptyMessage/index.tsx
var EmptyMessage = __webpack_require__("s+jA");

// EXTERNAL MODULE: ./components/common/helpers/index.tsx + 26 modules
var helpers = __webpack_require__("FaPq");

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__("K2gz");
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// EXTERNAL MODULE: ./components/common/Icon/index.tsx
var Icon = __webpack_require__("UzBX");

// EXTERNAL MODULE: ./components/common/Link/index.tsx
var Link = __webpack_require__("+alz");

// EXTERNAL MODULE: ./components/common/form/index.tsx + 6 modules
var common_form = __webpack_require__("jbMX");

// EXTERNAL MODULE: ./components/common/PriceWithCompareAt/index.tsx
var PriceWithCompareAt = __webpack_require__("UfBt");

// EXTERNAL MODULE: ./components/common/CartContext/CartModal/Item/index.css
var Item = __webpack_require__("jMHH");
var Item_default = /*#__PURE__*/__webpack_require__.n(Item);

// EXTERNAL MODULE: ./i18n.js
var i18n_0 = __webpack_require__("k7Sn");

// CONCATENATED MODULE: ./components/common/CartContext/CartModal/Item/index.tsx

var __jsx = external_react_default.a.createElement;












function Item_Item(props) {
  const {
    t,
    i18n
  } = Object(i18n_0["useTranslation"])();
  const item = Object(external_react_["useMemo"])(() => Object(helpers["r" /* normalizeCartItemForRead */])(props.cartItem), [props.cartItem]);
  const removeProduct = props.removeProduct;
  const updateProduct = props.updateProduct;
  const remove = Object(external_react_["useCallback"])(() => removeProduct(item.variantID), [item.variantID, removeProduct]);
  const update = Object(external_react_["useCallback"])(event => updateProduct({
    quantity: parseInt(event.currentTarget.value, 10),
    variantID: item.variantID
  }), [item.variantID, updateProduct]);
  const quantityOptions = Object(external_react_["useMemo"])(() => external_ramda_["map"](i => ({
    label: String(i),
    value: String(i)
  }))(external_ramda_["range"](1, props.maxQuantity + 1)), [props.maxQuantity]);
  const gender = Object(external_react_["useMemo"])(() => Object(helpers["f" /* findGenderInProductTags */])(props.cartItem.variant.product.tags), [props.cartItem.variant.product]);
  return __jsx("div", {
    className: external_classnames_default()(props.className, Item_default.a.item)
  }, item.image ? __jsx("img", {
    className: "image",
    src: item.image.transformedSrc,
    alt: item.image.altText
  }) : __jsx(EmptyMessage["a" /* EmptyMessage */], {
    className: "empty-message"
  }, t('noImage')), __jsx("div", {
    className: "content"
  }, __jsx("header", {
    className: "header"
  }, __jsx("div", {
    className: "vendor"
  }, item.vendor), __jsx("button", {
    className: "button",
    onClick: remove
  }, __jsx(Icon["a" /* Icon */], {
    className: "icon",
    name: "cross"
  }))), __jsx(Link["a" /* Link */], {
    as: `/${gender}/shop/item/${item.vendor}/${item.handle}`,
    href: `/[gender]/shop/item/[vendor]/[handle]?gender=${gender}&vendor=${item.vendor}&handle=${item.handle}`,
    className: "title"
  }, Object(helpers["y" /* translatedProductTitle */])({
    i18n,
    product: {
      handle: item.handle,
      title: item.title
    },
    t
  })), external_ramda_["map"](o => __jsx("div", {
    key: o.name,
    className: "section"
  }, __jsx("div", {
    className: "label"
  }, `${t(o.name)}:`), __jsx("div", {
    className: "value"
  }, o.value)), item.options || []), __jsx(common_form["c" /* NativeSelect */], {
    className: "input",
    onChange: update,
    value: item.quantity,
    options: quantityOptions
  }), __jsx(PriceWithCompareAt["a" /* PriceWithCompareAt */], {
    className: "price",
    compareAtPrice: item.compareAtPrice ? Number(item.compareAtPrice) * item.quantity : null,
    price: Number(item.price) * item.quantity
  })));
}
// EXTERNAL MODULE: ./components/common/Button/index.tsx
var Button = __webpack_require__("htLD");

// EXTERNAL MODULE: ./components/common/Portal/index.tsx
var Portal = __webpack_require__("P4FY");

// EXTERNAL MODULE: ./components/common/CartContext/common/PopupCart/index.css
var PopupCart = __webpack_require__("FjHI");
var PopupCart_default = /*#__PURE__*/__webpack_require__.n(PopupCart);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// CONCATENATED MODULE: ./components/common/CartContext/common/PopupCart/index.tsx

var PopupCart_jsx = external_react_default.a.createElement;









function PopupCart_PopupCart(props) {
  const {
    t
  } = Object(i18n_0["useTranslation"])();
  const router = Object(router_["useRouter"])();
  const close = props.close;
  const goToBag = Object(external_react_["useCallback"])(async () => {
    close();
    await router.push('/cart');
  }, [close, router]);
  return PopupCart_jsx(Portal["a" /* Portal */], {
    selector: "#portal-root"
  }, PopupCart_jsx("div", {
    className: external_classnames_default()(PopupCart_default.a.popupCart, props.className)
  }, PopupCart_jsx("header", {
    className: "header"
  }, PopupCart_jsx("h2", {
    className: "title"
  }, props.title, PopupCart_jsx("span", {
    className: external_classnames_default()('counter', {
      'is-active': props.counterValue > 0
    })
  }, props.counterValue > 99 ? ':)' : props.counterValue)), PopupCart_jsx("button", {
    className: "button",
    onClick: close
  }, PopupCart_jsx(Icon["a" /* Icon */], {
    className: "icon",
    name: "cross"
  }))), props.children, PopupCart_jsx("div", {
    className: "section"
  }, PopupCart_jsx("div", {
    className: "label"
  }, t('bagSubtotal')), PopupCart_jsx(PriceWithCompareAt["a" /* PriceWithCompareAt */], {
    className: "value",
    price: props.subtotal
  }), PopupCart_jsx(Button["a" /* Button */], {
    onClick: goToBag,
    className: "button",
    width: "flex"
  }, t('goToMyShoppingBag')))));
}
// CONCATENATED MODULE: ./components/common/CartContext/CartModal/index.tsx

var CartModal_jsx = external_react_default.a.createElement;







function CartModal(props) {
  const cartCtx = Object(external_react_["useContext"])(CartContext);
  const {
    t
  } = Object(i18n_0["useTranslation"])();
  Object(external_react_["useEffect"])(() => {
    cartCtx.fetchInventoryQuantityOfProducts(external_ramda_["map"](external_ramda_["path"](['variant', 'product', 'id']), props.items));
  }, // eslint-disable-next-line react-hooks/exhaustive-deps
  [props.items]);
  return CartModal_jsx(PopupCart_PopupCart, {
    subtotal: props.subtotal,
    close: props.close,
    counterValue: props.itemsCount,
    title: t('yourShoppingCart')
  }, external_ramda_["length"](props.items) > 0 && CartModal_jsx("div", {
    className: "content"
  }, external_ramda_["map"](item => CartModal_jsx(Item_Item, {
    className: "item",
    removeProduct: props.removeProduct,
    updateProduct: props.updateProduct,
    key: item.id,
    cartItem: item // Do not allow quantity going over the stock
    ,
    maxQuantity: external_ramda_["pathOr"](1, [item.variant.product.id, item.variant.id], cartCtx.inventoryQuantityOfProducts)
  }), props.items)), external_ramda_["length"](props.items) === 0 && CartModal_jsx(EmptyMessage["a" /* EmptyMessage */], {
    className: "empty-message"
  }, t('emptyCartMessage')));
}
// EXTERNAL MODULE: ./components/common/CartContext/graphql/create-checkout.graphql
var create_checkout_graphql = __webpack_require__("d2vd");
var create_checkout_graphql_default = /*#__PURE__*/__webpack_require__.n(create_checkout_graphql);

// EXTERNAL MODULE: ./components/common/graphql/checkout.graphql
var checkout_graphql = __webpack_require__("0kp1");
var checkout_graphql_default = /*#__PURE__*/__webpack_require__.n(checkout_graphql);

// EXTERNAL MODULE: ./components/common/CartContext/graphql/update-checkout.graphql
var update_checkout_graphql = __webpack_require__("q+F1");
var update_checkout_graphql_default = /*#__PURE__*/__webpack_require__.n(update_checkout_graphql);

// EXTERNAL MODULE: ./components/common/CartContext/ConfirmModal/index.css
var ConfirmModal = __webpack_require__("WJuA");
var ConfirmModal_default = /*#__PURE__*/__webpack_require__.n(ConfirmModal);

// CONCATENATED MODULE: ./components/common/CartContext/ConfirmModal/index.tsx

var ConfirmModal_jsx = external_react_default.a.createElement;





function ConfirmModal_ConfirmModal(props) {
  const {
    t
  } = Object(i18n_0["useTranslation"])();
  return ConfirmModal_jsx(PopupCart_PopupCart, {
    subtotal: props.subtotal,
    close: props.close,
    counterValue: props.itemsCount,
    title: t('itSBeenAddedToYourBag')
  }, ConfirmModal_jsx("div", {
    className: "content"
  }, ConfirmModal_jsx("div", {
    className: external_classnames_default()('item', ConfirmModal_default.a.item)
  }, props.product.image && ConfirmModal_jsx("img", {
    className: "image",
    src: props.product.image.transformedSrc,
    alt: props.product.image.altText
  }), !props.product.image && ConfirmModal_jsx(EmptyMessage["a" /* EmptyMessage */], {
    className: "empty-message"
  }, t('noImage')), ConfirmModal_jsx("div", {
    className: "vendor"
  }, props.product.vendor), ConfirmModal_jsx("div", {
    className: "title"
  }, props.product.title))));
}
// EXTERNAL MODULE: external "js-cookie"
var external_js_cookie_ = __webpack_require__("vmXh");
var external_js_cookie_default = /*#__PURE__*/__webpack_require__.n(external_js_cookie_);

// EXTERNAL MODULE: ./components/common/CartContext/graphql/inventory-quantity.graphql
var inventory_quantity_graphql = __webpack_require__("AdiQ");
var inventory_quantity_graphql_default = /*#__PURE__*/__webpack_require__.n(inventory_quantity_graphql);

// EXTERNAL MODULE: ./components/common/CartContext/graphql/product.graphql
var product_graphql = __webpack_require__("ulXM");
var product_graphql_default = /*#__PURE__*/__webpack_require__.n(product_graphql);

// EXTERNAL MODULE: ./components/common/CartContext/graphql/remove-discount-code.graphql
var remove_discount_code_graphql = __webpack_require__("SKBE");
var remove_discount_code_graphql_default = /*#__PURE__*/__webpack_require__.n(remove_discount_code_graphql);

// CONCATENATED MODULE: ./components/common/CartContext/index.tsx

var CartContext_jsx = external_react_default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }














const CartContext = /*#__PURE__*/Object(external_react_["createContext"])({
  addProduct: () => null,
  addProductWithConfirm: () => null,
  applyPromoCode: () => null,
  cartItems: [],
  checkoutId: '',
  clearCart: () => null,
  discount: null,
  fetchInventoryQuantityOfProducts: () => null,
  inventoryQuantityOfProducts: {},
  itemsCount: 0,
  openCart: () => null,
  refetch: async () => null,
  removeProduct: () => null,
  removePromoCode: () => null,
  subtotal: 0,
  tax: 0,
  total: 0,
  updateProduct: () => null
});
function CartContextProvider(props) {
  const {
    0: addedProduct,
    1: setAddedProduct
  } = Object(external_react_["useState"])(null);
  const {
    0: checkoutId,
    1: setCheckoutId
  } = Object(external_react_["useState"])(props.initialValue.checkoutId);
  const {
    0: isConfirmShown,
    1: setIsConfirmShown
  } = Object(external_react_["useState"])(false);
  const closeConfirmation = Object(external_react_["useCallback"])(() => setIsConfirmShown(false), []);
  const {
    0: isCartShown,
    1: setIsCartShown
  } = Object(external_react_["useState"])(false);
  const closeCart = Object(external_react_["useCallback"])(() => setIsCartShown(false), []);
  const openCart = Object(external_react_["useCallback"])(() => setIsCartShown(true), []);
  const {
    data,
    refetch
  } = Object(react_hooks_["useQuery"])(checkout_graphql_default.a, {
    skip: !checkoutId,
    variables: {
      id: checkoutId
    }
  });
  const checkoutData = Object(external_react_["useMemo"])(() => checkoutId ? data : {}, [checkoutId, data]);
  const [createCheckout] = Object(react_hooks_["useMutation"])(create_checkout_graphql_default.a);
  const [updateCheckout] = Object(react_hooks_["useMutation"])(update_checkout_graphql_default.a);
  const [applyDiscountCode] = Object(react_hooks_["useMutation"])(apply_discount_code_graphql_default.a);
  const [removeDiscountCode] = Object(react_hooks_["useMutation"])(remove_discount_code_graphql_default.a);
  const apolloClient = Object(react_hooks_["useApolloClient"])();
  const convertItemsForRead = Object(external_react_["useCallback"])(inputData => external_ramda_["compose"](external_ramda_["pluck"]('node'), external_ramda_["pathOr"]([], ['node', 'lineItems', 'edges']))(inputData), []);
  const subtotal = parseFloat(external_ramda_["pathOr"]('0', ['node', 'subtotalPriceV2', 'amount'], checkoutData));
  const clearCart = Object(external_react_["useCallback"])(() => {
    setCheckoutId('');
    external_js_cookie_default.a.remove('checkoutId');
  }, []);
  const discount = Object(external_react_["useMemo"])(() => external_ramda_["compose"](external_ramda_["ifElse"](Boolean, item => ({
    code: item.node.code,
    typename: item.node.value.__typename,
    value: item.node.value.__typename === 'PricingPercentageValue' ? item.node.value.percentage : item.node.value.amount
  }), () => ({
    code: null,
    typename: 'MoneyV2',
    value: '0'
  })), external_ramda_["find"](item => !!item.node.code))(external_ramda_["pathOr"]([], ['node', 'discountApplications', 'edges'], checkoutData)), [checkoutData]); // The amount left to be paid. This is equal to the cost of the line items, taxes and shipping minus discounts and gift cards.

  const total = parseFloat(external_ramda_["pathOr"]('0', ['node', 'paymentDueV2', 'amount'], checkoutData));
  const tax = parseFloat(external_ramda_["pathOr"]('0', ['node', 'totalTaxV2', 'amount'], checkoutData));
  const cartItems = Object(external_react_["useMemo"])(() => convertItemsForRead(checkoutData), [checkoutData, convertItemsForRead]);
  const {
    0: inventoryQuantityOfProducts,
    1: setInventoryQuantityOfProducts
  } = Object(external_react_["useState"])({});
  const addProduct = Object(external_react_["useCallback"])(async params => {
    try {
      // Find a product’s variant based on its selected options.
      const product = await apolloClient.query({
        fetchPolicy: 'no-cache',
        query: product_graphql_default.a,
        variables: {
          handle: params.handle,
          selectedOptions: external_ramda_["map"](key => ({
            name: key,
            value: params.values[key]
          }), Object.keys(params.values))
        }
      });
      const variantID = product.data.productByHandle.variantBySelectedOptions.id; // Prevent cart items quantity going over the stock
      // Consider requested quantity and the quantity of the item that was already added

      const newInventoryQuantityOfProduct = external_ramda_["pathOr"](1, [product.data.productByHandle.id, variantID], inventoryQuantityOfProducts) - params.quantity - external_ramda_["compose"](external_ramda_["propOr"](0, 'quantity'), external_ramda_["find"](cartItem => cartItem.variant.product.id === product.data.productByHandle.id && cartItem.variant.id === variantID))(cartItems);
      if (newInventoryQuantityOfProduct < 0) console.log('Stock is empty!');
      let result = null;

      if (checkoutId && newInventoryQuantityOfProduct >= 0) {
        // Check item variant already in cart
        const idx = external_ramda_["findIndex"](item => item.variant.id === variantID, cartItems); // Prepare items which already in cart

        const lineItems = external_ramda_["map"](item => ({
          quantity: item.quantity,
          variantId: item.variant.id
        }), cartItems);
        if (~idx) lineItems[idx].quantity += params.quantity;else lineItems.push({
          quantity: params.quantity,
          variantId: variantID
        });
        result = await updateCheckout({
          variables: {
            checkoutId: checkoutId,
            lineItems: lineItems
          }
        });
      } else if (newInventoryQuantityOfProduct >= 0) {
        result = await createCheckout({
          variables: {
            input: {
              lineItems: [{
                quantity: params.quantity,
                variantId: variantID
              }]
            }
          }
        });
        setCheckoutId(result.data.checkoutCreate.checkout.id);
        external_js_cookie_default.a.set('checkoutId', result.data.checkoutCreate.checkout.id, {
          expires: 30
        }); // expires in days
      }

      setAddedProduct({
        image: external_ramda_["compose"](external_ramda_["path"](['node']), external_ramda_["head"])(product.data.productByHandle.images.edges),
        title: product.data.productByHandle.title,
        vendor: product.data.productByHandle.vendor
      });
      await refetch();
      return result;
    } catch (e) {
      console.error(e);
    }
  }, [apolloClient, cartItems, checkoutId, createCheckout, inventoryQuantityOfProducts, refetch, updateCheckout]);
  const updateProduct = Object(external_react_["useCallback"])(async params => {
    const cachedData = apolloClient.readQuery({
      query: checkout_graphql_default.a,
      variables: {
        id: checkoutId
      }
    });
    const newSubtotal = external_ramda_["compose"](external_ramda_["sum"], external_ramda_["map"](cartItem => (cartItem.variant.id === params.variantID ? params.quantity : cartItem.quantity) * parseFloat(cartItem.variant.priceV2.amount.toString())))(cartItems);
    apolloClient.writeQuery({
      data: _objectSpread(_objectSpread({}, cachedData), {}, {
        node: _objectSpread(_objectSpread({}, cachedData.node), {}, {
          lineItems: _objectSpread(_objectSpread({}, cachedData.node.lineItems), {}, {
            edges: external_ramda_["map"](item => _objectSpread(_objectSpread({}, item), {}, {
              node: _objectSpread(_objectSpread({}, item.node), {}, {
                quantity: item.node.variant.id === params.variantID ? params.quantity : item.node.quantity
              })
            }), cachedData.node.lineItems.edges)
          }),
          paymentDueV2: _objectSpread(_objectSpread({}, cachedData.node.paymentDueV2), {}, {
            amount: newSubtotal
          }),
          subtotalPriceV2: _objectSpread(_objectSpread({}, cachedData.node.subtotalPriceV2), {}, {
            amount: newSubtotal
          })
        })
      }),
      query: checkout_graphql_default.a,
      variables: {
        id: checkoutId
      }
    });

    try {
      await updateCheckout({
        variables: {
          checkoutId: checkoutId,
          lineItems: external_ramda_["map"](item => ({
            quantity: item.variant.id === params.variantID ? params.quantity : item.quantity,
            variantId: item.variant.id
          }), convertItemsForRead(cachedData))
        }
      });
    } catch (e) {
      console.error(e); // Refetch only then request failed!

      await refetch();
    }
  }, [checkoutId, apolloClient, cartItems, convertItemsForRead, refetch, updateCheckout]);
  const removeProduct = Object(external_react_["useCallback"])(async variantID => {
    // WARN read/write queries used for "optimistic" UI without races
    const cachedData = apolloClient.readQuery({
      query: checkout_graphql_default.a,
      variables: {
        id: checkoutId
      }
    });
    const newSubtotal = external_ramda_["compose"](external_ramda_["sum"], external_ramda_["map"](cartItem => cartItem.quantity * parseFloat(cartItem.variant.priceV2.amount.toString())), external_ramda_["reject"](cartItem => cartItem.variant.id === variantID))(cartItems);
    apolloClient.writeQuery({
      data: _objectSpread(_objectSpread({}, cachedData), {}, {
        node: _objectSpread(_objectSpread({}, cachedData.node), {}, {
          lineItems: _objectSpread(_objectSpread({}, cachedData.node.lineItems), {}, {
            edges: external_ramda_["filter"](i => i.node.variant.id !== variantID, cachedData.node.lineItems.edges)
          }),
          paymentDueV2: _objectSpread(_objectSpread({}, cachedData.node.paymentDueV2), {}, {
            amount: newSubtotal
          }),
          subtotalPriceV2: _objectSpread(_objectSpread({}, cachedData.node.subtotalPriceV2), {}, {
            amount: newSubtotal
          })
        })
      }),
      query: checkout_graphql_default.a,
      variables: {
        id: checkoutId
      }
    });

    try {
      await updateCheckout({
        variables: {
          checkoutId: checkoutId,
          lineItems: external_ramda_["compose"](external_ramda_["map"](item => ({
            quantity: item.quantity,
            variantId: item.variant.id
          })), external_ramda_["filter"](item => item.variant.id !== variantID))(convertItemsForRead(cachedData))
        }
      });
    } catch (e) {
      console.error(e); // Refetch only then request failed!

      await refetch();
    }
  }, [checkoutId, apolloClient, cartItems, convertItemsForRead, refetch, updateCheckout]);
  const addProductWithConfirm = Object(external_react_["useCallback"])(async params => {
    setIsCartShown(false);
    setIsConfirmShown(false);
    const result = await addProduct(params);
    setIsConfirmShown(true);
    return result;
  }, [addProduct]);
  const fetchInventoryQuantityOfProducts = Object(external_react_["useCallback"])(async ids => {
    // {<product id>: {<variant id>: <quantity>}}
    setInventoryQuantityOfProducts(external_ramda_["reduce"]((acc, product) => external_ramda_["assoc"]( // Admin API returns decoded ids — decode them to base64 in order to match ids returned by Storefront API
    btoa(product.id), external_ramda_["compose"](external_ramda_["fromPairs"], external_ramda_["map"](variant => [btoa(variant.node.id), variant.node.inventoryQuantity || 0]))(product.variants.edges), acc), {}, external_ramda_["pathOr"]([], ['data', 'nodes'], await apolloClient.query({
      context: {
        isInternalAPI: true
      },
      query: inventory_quantity_graphql_default.a,
      variables: {
        ids: ids
      }
    }))));
  }, [apolloClient]);
  const applyPromoCode = Object(external_react_["useCallback"])(async code => {
    try {
      const r = await applyDiscountCode({
        variables: {
          checkoutId: checkoutId,
          discountCode: code
        }
      });
      const errors = external_ramda_["compose"](external_ramda_["pluck"]('message'), external_ramda_["pathOr"]([], ['checkoutUserErrors']))(r.data.checkoutDiscountCodeApplyV2);
      if (external_ramda_["length"](errors)) return Promise.reject(errors[0]);
    } catch (e) {
      console.error(e);
    }

    await refetch();
  }, [applyDiscountCode, checkoutId, refetch]);
  const removePromoCode = Object(external_react_["useCallback"])(async () => {
    try {
      const r = await removeDiscountCode({
        variables: {
          checkoutId: checkoutId
        }
      });
      const errors = external_ramda_["compose"](external_ramda_["pluck"]('message'), external_ramda_["pathOr"]([], ['checkoutUserErrors']))(r.data.checkoutDiscountCodeRemove);
      if (external_ramda_["length"](errors)) return Promise.reject(errors[0]);
    } catch (e) {
      console.error(e);
    }

    await refetch();
  }, [checkoutId, refetch, removeDiscountCode]);
  const contextValue = Object(external_react_["useMemo"])(() => ({
    addProduct: addProduct,
    addProductWithConfirm: addProductWithConfirm,
    applyPromoCode: applyPromoCode,
    cartItems: cartItems,
    checkoutId: checkoutId,
    clearCart: clearCart,
    discount: discount,
    fetchInventoryQuantityOfProducts,
    inventoryQuantityOfProducts,
    itemsCount: cartItems.length,
    openCart: openCart,
    refetch: refetch,
    removeProduct: removeProduct,
    removePromoCode: removePromoCode,
    shippingAddress: external_ramda_["path"](['node', 'shippingAddress'], checkoutData),
    subtotal: subtotal,
    tax: tax,
    total: total,
    updateProduct: updateProduct
  }), [addProduct, addProductWithConfirm, applyPromoCode, cartItems, checkoutId, clearCart, discount, fetchInventoryQuantityOfProducts, inventoryQuantityOfProducts, openCart, refetch, removeProduct, removePromoCode, checkoutData, subtotal, tax, total, updateProduct]);
  Object(external_react_["useEffect"])(() => {
    let timeoutId;
    if (isConfirmShown) timeoutId = setTimeout(() => setIsConfirmShown(false), 5000);
    return () => clearTimeout(timeoutId);
  }, [isConfirmShown]);
  return CartContext_jsx(CartContext.Provider, {
    value: contextValue
  }, props.children, isCartShown && CartContext_jsx(CartModal, {
    removeProduct: removeProduct,
    updateProduct: updateProduct,
    close: closeCart,
    itemsCount: cartItems.length,
    items: cartItems,
    subtotal: contextValue.subtotal
  }), isConfirmShown && CartContext_jsx(ConfirmModal_ConfirmModal, {
    subtotal: contextValue.subtotal,
    itemsCount: cartItems.length,
    close: closeConfirmation,
    product: addedProduct
  }));
}

/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("7KCV");

var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("elyg"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("Osoz");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "q+F1":
/***/ (function(module, exports) {


    var doc = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"update"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"lineItems"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CheckoutLineItemInput"}}}}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"checkoutId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"checkoutLineItemsReplace"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"lineItems"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lineItems"}}},{"kind":"Argument","name":{"kind":"Name","value":"checkoutId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"checkoutId"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"checkout"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"userErrors"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"field"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"message"},"arguments":[],"directives":[]}]}}]}}]}}],"loc":{"start":0,"end":249}};
    doc.loc.source = {"body":"mutation update($lineItems: [CheckoutLineItemInput!]!, $checkoutId: ID!) {\n  checkoutLineItemsReplace(lineItems: $lineItems, checkoutId: $checkoutId) {\n    checkout {\n      id\n    }\n\n    userErrors {\n      code\n      field\n      message\n    }\n  }\n}\n","name":"GraphQL request","locationOffset":{"line":1,"column":1}};
  

    var names = {};
    function unique(defs) {
      return defs.filter(
        function(def) {
          if (def.kind !== 'FragmentDefinition') return true;
          var name = def.name.value
          if (names[name]) {
            return false;
          } else {
            names[name] = true;
            return true;
          }
        }
      )
    }
  

    // Collect any fragment/type references from a node, adding them to the refs Set
    function collectFragmentReferences(node, refs) {
      if (node.kind === "FragmentSpread") {
        refs.add(node.name.value);
      } else if (node.kind === "VariableDefinition") {
        var type = node.type;
        if (type.kind === "NamedType") {
          refs.add(type.name.value);
        }
      }

      if (node.selectionSet) {
        node.selectionSet.selections.forEach(function(selection) {
          collectFragmentReferences(selection, refs);
        });
      }

      if (node.variableDefinitions) {
        node.variableDefinitions.forEach(function(def) {
          collectFragmentReferences(def, refs);
        });
      }

      if (node.definitions) {
        node.definitions.forEach(function(def) {
          collectFragmentReferences(def, refs);
        });
      }
    }

    var definitionRefs = {};
    (function extractReferences() {
      doc.definitions.forEach(function(def) {
        if (def.name) {
          var refs = new Set();
          collectFragmentReferences(def, refs);
          definitionRefs[def.name.value] = refs;
        }
      });
    })();

    function findOperation(doc, name) {
      for (var i = 0; i < doc.definitions.length; i++) {
        var element = doc.definitions[i];
        if (element.name && element.name.value == name) {
          return element;
        }
      }
    }

    function oneQuery(doc, operationName) {
      // Copy the DocumentNode, but clear out the definitions
      var newDoc = {
        kind: doc.kind,
        definitions: [findOperation(doc, operationName)]
      };
      if (doc.hasOwnProperty("loc")) {
        newDoc.loc = doc.loc;
      }

      // Now, for the operation we're running, find any fragments referenced by
      // it or the fragments it references
      var opRefs = definitionRefs[operationName] || new Set();
      var allRefs = new Set();
      var newRefs = new Set();

      // IE 11 doesn't support "new Set(iterable)", so we add the members of opRefs to newRefs one by one
      opRefs.forEach(function(refName) {
        newRefs.add(refName);
      });

      while (newRefs.size > 0) {
        var prevRefs = newRefs;
        newRefs = new Set();

        prevRefs.forEach(function(refName) {
          if (!allRefs.has(refName)) {
            allRefs.add(refName);
            var childRefs = definitionRefs[refName] || new Set();
            childRefs.forEach(function(childRef) {
              newRefs.add(childRef);
            });
          }
        });
      }

      allRefs.forEach(function(refName) {
        var op = findOperation(doc, refName);
        if (op) {
          newDoc.definitions.push(op);
        }
      });

      return newDoc;
    }

    module.exports = doc;
    
        module.exports["update"] = oneQuery(doc, "update");
        


/***/ }),

/***/ "q3M2":
/***/ (function(module, exports) {

module.exports = {
	"radio": "radio__2v603"
};

/***/ }),

/***/ "qKtD":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_blog_Details__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("hIET");
// It is important to duplicate /blog/article/[slug] because of subdomain routing

/* harmony default export */ __webpack_exports__["default"] = (_components_blog_Details__WEBPACK_IMPORTED_MODULE_0__[/* Details */ "a"]);

/***/ }),

/***/ "qW2e":
/***/ (function(module, exports) {

module.exports = {
	"slide": "slide__1El8i"
};

/***/ }),

/***/ "s+jA":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmptyMessage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("K2gz");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("LKXJ");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function EmptyMessage(props) {
  return __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_index_css__WEBPACK_IMPORTED_MODULE_2___default.a.emptyMessage, props.className)
  }, props.children);
}

/***/ }),

/***/ "ulXM":
/***/ (function(module, exports, __webpack_require__) {


    var doc = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Product"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"handle"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"selectedOptions"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SelectedOptionInput"}}}}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"productByHandle"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"handle"},"value":{"kind":"Variable","name":{"kind":"Name","value":"handle"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"images"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"2"}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"_imageThumb"},"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"altText"},"arguments":[],"directives":[]}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"variantBySelectedOptions"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"selectedOptions"},"value":{"kind":"Variable","name":{"kind":"Name","value":"selectedOptions"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"vendor"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"tags"},"arguments":[],"directives":[]}]}}]}}],"loc":{"start":0,"end":416}};
    doc.loc.source = {"body":"#import \"../../../common/graphql/_imageThumb.graphql\"\n\nquery Product($handle: String!, $selectedOptions: [SelectedOptionInput!]!) {\n  productByHandle(handle: $handle) {\n    id\n\n    images(first: 2) {\n      edges {\n        node {\n          ..._imageThumb\n          altText\n        }\n      }\n    }\n\n    title\n\n    variantBySelectedOptions(selectedOptions: $selectedOptions) {\n      id\n    }\n\n    vendor\n    tags\n  }\n}\n","name":"GraphQL request","locationOffset":{"line":1,"column":1}};
  

    var names = {};
    function unique(defs) {
      return defs.filter(
        function(def) {
          if (def.kind !== 'FragmentDefinition') return true;
          var name = def.name.value
          if (names[name]) {
            return false;
          } else {
            names[name] = true;
            return true;
          }
        }
      )
    }
  doc.definitions = doc.definitions.concat(unique(__webpack_require__("6GEg").definitions));


    // Collect any fragment/type references from a node, adding them to the refs Set
    function collectFragmentReferences(node, refs) {
      if (node.kind === "FragmentSpread") {
        refs.add(node.name.value);
      } else if (node.kind === "VariableDefinition") {
        var type = node.type;
        if (type.kind === "NamedType") {
          refs.add(type.name.value);
        }
      }

      if (node.selectionSet) {
        node.selectionSet.selections.forEach(function(selection) {
          collectFragmentReferences(selection, refs);
        });
      }

      if (node.variableDefinitions) {
        node.variableDefinitions.forEach(function(def) {
          collectFragmentReferences(def, refs);
        });
      }

      if (node.definitions) {
        node.definitions.forEach(function(def) {
          collectFragmentReferences(def, refs);
        });
      }
    }

    var definitionRefs = {};
    (function extractReferences() {
      doc.definitions.forEach(function(def) {
        if (def.name) {
          var refs = new Set();
          collectFragmentReferences(def, refs);
          definitionRefs[def.name.value] = refs;
        }
      });
    })();

    function findOperation(doc, name) {
      for (var i = 0; i < doc.definitions.length; i++) {
        var element = doc.definitions[i];
        if (element.name && element.name.value == name) {
          return element;
        }
      }
    }

    function oneQuery(doc, operationName) {
      // Copy the DocumentNode, but clear out the definitions
      var newDoc = {
        kind: doc.kind,
        definitions: [findOperation(doc, operationName)]
      };
      if (doc.hasOwnProperty("loc")) {
        newDoc.loc = doc.loc;
      }

      // Now, for the operation we're running, find any fragments referenced by
      // it or the fragments it references
      var opRefs = definitionRefs[operationName] || new Set();
      var allRefs = new Set();
      var newRefs = new Set();

      // IE 11 doesn't support "new Set(iterable)", so we add the members of opRefs to newRefs one by one
      opRefs.forEach(function(refName) {
        newRefs.add(refName);
      });

      while (newRefs.size > 0) {
        var prevRefs = newRefs;
        newRefs = new Set();

        prevRefs.forEach(function(refName) {
          if (!allRefs.has(refName)) {
            allRefs.add(refName);
            var childRefs = definitionRefs[refName] || new Set();
            childRefs.forEach(function(childRef) {
              newRefs.add(childRef);
            });
          }
        });
      }

      allRefs.forEach(function(refName) {
        var op = findOperation(doc, refName);
        if (op) {
          newDoc.definitions.push(op);
        }
      });

      return newDoc;
    }

    module.exports = doc;
    
        module.exports["Product"] = oneQuery(doc, "Product");
        


/***/ }),

/***/ "vNl1":
/***/ (function(module, exports) {

module.exports = require("prismic-javascript");

/***/ }),

/***/ "vcW7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Slider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("K2gz");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("kwHZ");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function Slider(props) {
  const listRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  const {
    0: isPrevButtonDisabled,
    1: setPrevButtonDisabled
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: isNextButtonDisabled,
    1: setNextButtonDisabled
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const scrollToNextSlide = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    listRef.current.scroll({
      behavior: 'smooth',
      left: listRef.current.scrollLeft + listRef.current.clientWidth
    });
  }, []);
  const scrollToPrevSlide = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    listRef.current.scroll({
      behavior: 'smooth',
      left: listRef.current.scrollLeft - listRef.current.clientWidth
    });
  }, []);
  const {
    0: currentSlideIndex,
    1: setCurrentSlideIndex
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const selectSlide = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(e => {
    // offset * slideIndex
    listRef.current.scrollLeft = listRef.current.offsetWidth * Array.from(e.currentTarget.parentElement.children).indexOf(e.currentTarget);
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (!listRef.current || !listRef.current.scroll) return;
    if (Number.isInteger(props.initialSlideNumber)) listRef.current.scroll({
      behavior: 'auto',
      left: listRef.current.querySelector('.slide').offsetWidth * props.initialSlideNumber
    });
  }, [props.initialSlideNumber]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (!listRef.current) return;

    const handleResize = () => {
      listRef.current.scrollLeft = listRef.current.scrollLeft;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [listRef]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (!listRef.current) return;
    const element = listRef.current;

    const scrollHandler = () => {
      setPrevButtonDisabled(element.scrollLeft < element.clientWidth / 2);
      setNextButtonDisabled(element.scrollLeft > element.scrollWidth - element.clientWidth * 1.5);
      setCurrentSlideIndex(Math.floor((element.scrollLeft + element.offsetWidth / 2) / element.offsetWidth));
    };

    scrollHandler();
    element.addEventListener('scroll', scrollHandler);
    return () => element.removeEventListener('scroll', scrollHandler);
  }, [props.children]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (props.hasKeyboardNavigation) {
      const handlerPrev = e => {
        if (e.key === 'ArrowLeft') scrollToPrevSlide();
      };

      document.addEventListener('keyup', handlerPrev);
      return () => document.removeEventListener('keyup', handlerPrev);
    }
  }, [props.hasKeyboardNavigation, scrollToPrevSlide]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (props.hasKeyboardNavigation) {
      const handler = e => {
        if (e.key === 'ArrowRight') scrollToNextSlide();
      };

      document.addEventListener('keyup', handler);
      return () => document.removeEventListener('keyup', handler);
    }
  }, [props.hasKeyboardNavigation, scrollToNextSlide]);
  return __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()({
      [_index_css__WEBPACK_IMPORTED_MODULE_2___default.a.slider]: !props.noStyles
    }, props.className)
  }, react__WEBPACK_IMPORTED_MODULE_0__["Children"].count(props.children) > 0 ? __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('list', props.listClassName),
    ref: listRef
  }, props.children, props.hasThumbs && props.images && __jsx("div", {
    className: "thumbs"
  }, props.images.map((item, index) => __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('item', {
      'is-selected': index === currentSlideIndex
    }),
    key: index,
    onClick: selectSlide
  }, __jsx("img", {
    alt: item.altText,
    className: "image",
    src: item.originalSrc
  }))))), react__WEBPACK_IMPORTED_MODULE_0__["Children"].count(props.children) > 1 && __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, props.hasNavigation && __jsx("div", {
    className: "navigation"
  }, __jsx("button", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('button', 'type--prev', {
      'is-disabled': isPrevButtonDisabled,
      'is-shown': !isPrevButtonDisabled || !isNextButtonDisabled
    }),
    onClick: scrollToPrevSlide,
    type: "button"
  }), __jsx("button", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('button', 'type--next', {
      'is-disabled': isNextButtonDisabled,
      'is-shown': !isPrevButtonDisabled || !isNextButtonDisabled
    }),
    onClick: scrollToNextSlide,
    type: "button"
  })), props.hasNumeration && __jsx("div", {
    className: "numeration"
  }, `${currentSlideIndex + 1} / ${react__WEBPACK_IMPORTED_MODULE_0__["Children"].count(props.children)}`), props.hasPagination && __jsx("div", {
    className: "pagination"
  }, react__WEBPACK_IMPORTED_MODULE_0__["Children"].map(props.children, (item, index) => __jsx("button", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('button', {
      'is-selected': index === currentSlideIndex
    }),
    key: index,
    onClick: selectSlide,
    type: "button"
  }))))) : props.emptyMessage ? typeof props.emptyMessage === 'object' ? props.emptyMessage : __jsx("div", {
    className: "empty-message"
  }, props.emptyMessage) : __jsx("div", {
    className: "empty-message"
  }, "No results"));
}

/***/ }),

/***/ "vmXh":
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "vtRj":
/***/ (function(module, exports) {

module.exports = require("react-select");

/***/ }),

/***/ "vuzH":
/***/ (function(module, exports) {

module.exports = {
	"select": "select__1qYHc"
};

/***/ }),

/***/ "vxAg":
/***/ (function(module, exports) {

module.exports = {
	"form": "form__1L90t"
};

/***/ }),

/***/ "wgzJ":
/***/ (function(module, exports) {

module.exports = {
	"autocomplete": "autocomplete__4CzbM"
};

/***/ }),

/***/ "wkBG":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "wy2R":
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "xXB0":
/***/ (function(module, exports) {

module.exports = {
	"wishButton": "wishButton__2J4M6"
};

/***/ }),

/***/ "xc8W":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return UserContextProvider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("ANpm");
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ramda__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("vmXh");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("mU8t");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _graphql_user_graphql__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("Gb2v");
/* harmony import */ var _graphql_user_graphql__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_graphql_user_graphql__WEBPACK_IMPORTED_MODULE_5__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const UserContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])({
  saveToken: () => null,
  signOut: () => null,
  user: null
});
function UserContextProvider(props) {
  const {
    0: token,
    1: setToken
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(props.initialValue.token);
  const client = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3__["useApolloClient"])();
  const {
    data
  } = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3__["useQuery"])(_graphql_user_graphql__WEBPACK_IMPORTED_MODULE_5___default.a, {
    fetchPolicy: 'network-only',
    skip: !token,
    variables: {
      token: token
    }
  });
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();
  const saveToken = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(params => {
    js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.set('token', params.token, _objectSpread({}, params.expiresAt ? {
      expires: params.expiresAt
    } : {})); // Save token expiration date for refresh token ability

    if (params.expiresAt) js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.set('tokenExpiresAt', params.expiresAt.toISOString(), {
      expires: params.expiresAt
    });
    setToken(params.token);
  }, []);
  const signOut = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(async () => {
    js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.remove('token');
    js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.remove('tokenExpiresAt');
    setToken(null);
    client.resetStore();
    if (ramda__WEBPACK_IMPORTED_MODULE_1__["any"](pathname => window.location.pathname.indexOf(pathname) === 0, ['/profile', '/wish'])) router.push('/');
  }, [client, router]);
  const value = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => ({
    accessToken: token,
    saveToken,
    signOut,
    user: data ? data.customer : null
  }), [data, saveToken, signOut, token]);
  return __jsx(UserContext.Provider, {
    value: value
  }, props.children);
}

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "xoRq":
/***/ (function(module, exports) {


    var doc = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"WishList"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"customerId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"wishlist"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"customer_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"customerId"}}}]}}]}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"customer_id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"product_id"},"arguments":[],"directives":[]}]}}]}}],"loc":{"start":0,"end":153}};
    doc.loc.source = {"body":"query WishList($customerId: String!) {\n  wishlist(where: {customer_id: {_eq: $customerId}}) {\n    __typename\n    customer_id\n    id\n    product_id\n  }\n}\n","name":"GraphQL request","locationOffset":{"line":1,"column":1}};
  

    var names = {};
    function unique(defs) {
      return defs.filter(
        function(def) {
          if (def.kind !== 'FragmentDefinition') return true;
          var name = def.name.value
          if (names[name]) {
            return false;
          } else {
            names[name] = true;
            return true;
          }
        }
      )
    }
  

    // Collect any fragment/type references from a node, adding them to the refs Set
    function collectFragmentReferences(node, refs) {
      if (node.kind === "FragmentSpread") {
        refs.add(node.name.value);
      } else if (node.kind === "VariableDefinition") {
        var type = node.type;
        if (type.kind === "NamedType") {
          refs.add(type.name.value);
        }
      }

      if (node.selectionSet) {
        node.selectionSet.selections.forEach(function(selection) {
          collectFragmentReferences(selection, refs);
        });
      }

      if (node.variableDefinitions) {
        node.variableDefinitions.forEach(function(def) {
          collectFragmentReferences(def, refs);
        });
      }

      if (node.definitions) {
        node.definitions.forEach(function(def) {
          collectFragmentReferences(def, refs);
        });
      }
    }

    var definitionRefs = {};
    (function extractReferences() {
      doc.definitions.forEach(function(def) {
        if (def.name) {
          var refs = new Set();
          collectFragmentReferences(def, refs);
          definitionRefs[def.name.value] = refs;
        }
      });
    })();

    function findOperation(doc, name) {
      for (var i = 0; i < doc.definitions.length; i++) {
        var element = doc.definitions[i];
        if (element.name && element.name.value == name) {
          return element;
        }
      }
    }

    function oneQuery(doc, operationName) {
      // Copy the DocumentNode, but clear out the definitions
      var newDoc = {
        kind: doc.kind,
        definitions: [findOperation(doc, operationName)]
      };
      if (doc.hasOwnProperty("loc")) {
        newDoc.loc = doc.loc;
      }

      // Now, for the operation we're running, find any fragments referenced by
      // it or the fragments it references
      var opRefs = definitionRefs[operationName] || new Set();
      var allRefs = new Set();
      var newRefs = new Set();

      // IE 11 doesn't support "new Set(iterable)", so we add the members of opRefs to newRefs one by one
      opRefs.forEach(function(refName) {
        newRefs.add(refName);
      });

      while (newRefs.size > 0) {
        var prevRefs = newRefs;
        newRefs = new Set();

        prevRefs.forEach(function(refName) {
          if (!allRefs.has(refName)) {
            allRefs.add(refName);
            var childRefs = definitionRefs[refName] || new Set();
            childRefs.forEach(function(childRef) {
              newRefs.add(childRef);
            });
          }
        });
      }

      allRefs.forEach(function(refName) {
        var op = findOperation(doc, refName);
        if (op) {
          newDoc.definitions.push(op);
        }
      });

      return newDoc;
    }

    module.exports = doc;
    
        module.exports["WishList"] = oneQuery(doc, "WishList");
        


/***/ }),

/***/ "xsA4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WishListContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return WishListContextProvider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("ANpm");
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ramda__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("mU8t");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _graphql_add_to_wishlist_graphql__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("0D4I");
/* harmony import */ var _graphql_add_to_wishlist_graphql__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_graphql_add_to_wishlist_graphql__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _AuthModalContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("kXko");
/* harmony import */ var _graphql_remove_from_wishlist_graphql__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("Mf/+");
/* harmony import */ var _graphql_remove_from_wishlist_graphql__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_graphql_remove_from_wishlist_graphql__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _UserContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("xc8W");
/* harmony import */ var _graphql_wishlist_graphql__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("xoRq");
/* harmony import */ var _graphql_wishlist_graphql__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_graphql_wishlist_graphql__WEBPACK_IMPORTED_MODULE_7__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









const WishListContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])({
  add: () => null,
  isWished: () => false,
  list: [],
  remove: () => null
});
function WishListContextProvider(props) {
  const [addToWishList] = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__["useMutation"])(_graphql_add_to_wishlist_graphql__WEBPACK_IMPORTED_MODULE_3___default.a, {
    context: {
      isInternalAPI: true
    }
  });
  const authModalCtx = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_AuthModalContext__WEBPACK_IMPORTED_MODULE_4__[/* AuthModalContext */ "a"]);
  const [removeFromWishList] = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__["useMutation"])(_graphql_remove_from_wishlist_graphql__WEBPACK_IMPORTED_MODULE_5___default.a, {
    context: {
      isInternalAPI: true
    }
  });
  const userCtx = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_UserContext__WEBPACK_IMPORTED_MODULE_6__[/* UserContext */ "a"]);
  const customerId = ramda__WEBPACK_IMPORTED_MODULE_1__["prop"]('id', userCtx.user);
  const {
    0: delayedAddProductId,
    1: setAddDelayedProductId
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const isCustomerLoggedIn = Boolean(userCtx.user);
  const {
    data,
    loading
  } = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__["useQuery"])(_graphql_wishlist_graphql__WEBPACK_IMPORTED_MODULE_7___default.a, {
    context: {
      isInternalAPI: true
    },
    skip: !isCustomerLoggedIn,
    variables: {
      customerId: customerId
    }
  });
  const list = loading || !isCustomerLoggedIn ? [] : data.wishlist; // When user is not loggedin all products are shown as non-wished — there is no way non-loggedin
  // user will unwish a product

  const add = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(productId => {
    if (!isCustomerLoggedIn) {
      authModalCtx.setActive('signin');
      setAddDelayedProductId(productId);
      return;
    }

    addToWishList({
      optimisticResponse: {
        __typename: 'mutation_root',
        insert_wishlist: {
          __typename: 'wishlist_mutation_response',
          returning: [{
            __typename: 'wishlist',
            customer_id: customerId,
            // The pair of customerId: str and productId: str is unique on DB side
            id: customerId + productId,
            product_id: productId
          }]
        }
      },
      update: (proxy, response) => {
        const chacheQueryParams = {
          query: _graphql_wishlist_graphql__WEBPACK_IMPORTED_MODULE_7___default.a,
          variables: {
            customerId: customerId
          }
        };
        const listFromCache = proxy.readQuery(chacheQueryParams);
        proxy.writeQuery(_objectSpread(_objectSpread({}, chacheQueryParams), {}, {
          data: {
            wishlist: [...listFromCache.wishlist, ...response.data.insert_wishlist.returning]
          }
        }));
      },
      variables: {
        customerId: customerId,
        productId
      }
    });
  }, [addToWishList, authModalCtx, customerId, isCustomerLoggedIn]);
  const remove = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(productId => {
    removeFromWishList({
      optimisticResponse: {
        __typename: 'mutation_root',
        delete_wishlist: {
          __typename: 'wishlist_mutation_response',
          returning: [{
            __typename: 'wishlist',
            customer_id: customerId,
            id: ramda__WEBPACK_IMPORTED_MODULE_1__["find"](ramda__WEBPACK_IMPORTED_MODULE_1__["propEq"]('product_id', productId), list).id,
            product_id: productId
          }]
        }
      },
      update: proxy => {
        const chacheQueryParams = {
          query: _graphql_wishlist_graphql__WEBPACK_IMPORTED_MODULE_7___default.a,
          variables: {
            customerId: customerId
          }
        };
        const listFromCache = proxy.readQuery(chacheQueryParams);
        proxy.writeQuery(_objectSpread(_objectSpread({}, chacheQueryParams), {}, {
          data: {
            wishlist: ramda__WEBPACK_IMPORTED_MODULE_1__["reject"](ramda__WEBPACK_IMPORTED_MODULE_1__["propEq"]('product_id', productId), listFromCache.wishlist)
          }
        }));
      },
      variables: {
        customerId,
        productId
      }
    });
  }, [customerId, list, removeFromWishList]);
  const isWished = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(productId => ramda__WEBPACK_IMPORTED_MODULE_1__["any"](ramda__WEBPACK_IMPORTED_MODULE_1__["propEq"]('product_id', productId), list), [list]);
  const value = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => ({
    add,
    isWished,
    list,
    remove
  }), [add, isWished, list, remove]); // When user data arrives wish a product that was wished before sign in

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (userCtx.user && delayedAddProductId) {
      setAddDelayedProductId(null);
      add(delayedAddProductId);
    }
  }, [add, delayedAddProductId, setAddDelayedProductId, userCtx]);
  return __jsx(WishListContext.Provider, {
    value: value
  }, props.children);
}

/***/ })

/******/ });