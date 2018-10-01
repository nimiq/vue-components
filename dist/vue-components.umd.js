(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue-property-decorator"));
	else if(typeof define === 'function' && define.amd)
		define(["vue-property-decorator"], factory);
	else if(typeof exports === 'object')
		exports["vue-components"] = factory(require("vue-property-decorator"));
	else
		root["vue-components"] = factory(root["vue-property-decorator"]);
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE__01a6__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "fae3");
/******/ })
/************************************************************************/
/******/ ({

/***/ "01a6":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__01a6__;

/***/ }),

/***/ "01f9":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__("2d00");
var $export = __webpack_require__("5ca1");
var redefine = __webpack_require__("2aba");
var hide = __webpack_require__("32e9");
var Iterators = __webpack_require__("84f2");
var $iterCreate = __webpack_require__("41a0");
var setToStringTag = __webpack_require__("7f20");
var getPrototypeOf = __webpack_require__("38fd");
var ITERATOR = __webpack_require__("2b4c")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "0508":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "0a52":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PageHeader_vue_vue_type_style_index_0_id_0b36ad52_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("4acf");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PageHeader_vue_vue_type_style_index_0_id_0b36ad52_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PageHeader_vue_vue_type_style_index_0_id_0b36ad52_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PageHeader_vue_vue_type_style_index_0_id_0b36ad52_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "0be1":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "0d58":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__("ce10");
var enumBugKeys = __webpack_require__("e11e");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "1169":
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__("2d95");
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ "11e9":
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__("52a7");
var createDesc = __webpack_require__("4630");
var toIObject = __webpack_require__("6821");
var toPrimitive = __webpack_require__("6a99");
var has = __webpack_require__("69a8");
var IE8_DOM_DEFINE = __webpack_require__("c69a");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__("9e1e") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "1495":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("86cc");
var anObject = __webpack_require__("cb7c");
var getKeys = __webpack_require__("0d58");

module.exports = __webpack_require__("9e1e") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "1625":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/iqons.min.cc877caa.svg";

/***/ }),

/***/ "17ea":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NewContact_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("1a0b");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NewContact_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NewContact_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NewContact_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "1a0b":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "1c22":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountSelector_vue_vue_type_style_index_0_id_5eaf2fc4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("97dc");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountSelector_vue_vue_type_style_index_0_id_5eaf2fc4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountSelector_vue_vue_type_style_index_0_id_5eaf2fc4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountSelector_vue_vue_type_style_index_0_id_5eaf2fc4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "1eb2":
/***/ (function(module, exports, __webpack_require__) {

// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}


/***/ }),

/***/ "20d2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PaymentInfoLine_vue_vue_type_style_index_0_id_3eda95a4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("42cf");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PaymentInfoLine_vue_vue_type_style_index_0_id_3eda95a4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PaymentInfoLine_vue_vue_type_style_index_0_id_3eda95a4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PaymentInfoLine_vue_vue_type_style_index_0_id_3eda95a4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "214f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var hide = __webpack_require__("32e9");
var redefine = __webpack_require__("2aba");
var fails = __webpack_require__("79e5");
var defined = __webpack_require__("be13");
var wks = __webpack_require__("2b4c");

module.exports = function (KEY, length, exec) {
  var SYMBOL = wks(KEY);
  var fns = exec(defined, SYMBOL, ''[KEY]);
  var strfn = fns[0];
  var rxfn = fns[1];
  if (fails(function () {
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  })) {
    redefine(String.prototype, KEY, strfn);
    hide(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return rxfn.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return rxfn.call(string, this); }
    );
  }
};


/***/ }),

/***/ "230e":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("d3f4");
var document = __webpack_require__("7726").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "2621":
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "28a5":
/***/ (function(module, exports, __webpack_require__) {

// @@split logic
__webpack_require__("214f")('split', 2, function (defined, SPLIT, $split) {
  'use strict';
  var isRegExp = __webpack_require__("aae3");
  var _split = $split;
  var $push = [].push;
  var $SPLIT = 'split';
  var LENGTH = 'length';
  var LAST_INDEX = 'lastIndex';
  if (
    'abbc'[$SPLIT](/(b)*/)[1] == 'c' ||
    'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 ||
    'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 ||
    '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 ||
    '.'[$SPLIT](/()()/)[LENGTH] > 1 ||
    ''[$SPLIT](/.?/)[LENGTH]
  ) {
    var NPCG = /()??/.exec('')[1] === undefined; // nonparticipating capturing group
    // based on es5-shim implementation, need to rework it
    $split = function (separator, limit) {
      var string = String(this);
      if (separator === undefined && limit === 0) return [];
      // If `separator` is not a regex, use native split
      if (!isRegExp(separator)) return _split.call(string, separator, limit);
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') +
                  (separator.multiline ? 'm' : '') +
                  (separator.unicode ? 'u' : '') +
                  (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      var splitLimit = limit === undefined ? 4294967295 : limit >>> 0;
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var separator2, match, lastIndex, lastLength, i;
      // Doesn't need flags gy, but they don't hurt
      if (!NPCG) separator2 = new RegExp('^' + separatorCopy.source + '$(?!\\s)', flags);
      while (match = separatorCopy.exec(string)) {
        // `separatorCopy.lastIndex` is not reliable cross-browser
        lastIndex = match.index + match[0][LENGTH];
        if (lastIndex > lastLastIndex) {
          output.push(string.slice(lastLastIndex, match.index));
          // Fix browsers whose `exec` methods don't consistently return `undefined` for NPCG
          // eslint-disable-next-line no-loop-func
          if (!NPCG && match[LENGTH] > 1) match[0].replace(separator2, function () {
            for (i = 1; i < arguments[LENGTH] - 2; i++) if (arguments[i] === undefined) match[i] = undefined;
          });
          if (match[LENGTH] > 1 && match.index < string[LENGTH]) $push.apply(output, match.slice(1));
          lastLength = match[0][LENGTH];
          lastLastIndex = lastIndex;
          if (output[LENGTH] >= splitLimit) break;
        }
        if (separatorCopy[LAST_INDEX] === match.index) separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
      }
      if (lastLastIndex === string[LENGTH]) {
        if (lastLength || !separatorCopy.test('')) output.push('');
      } else output.push(string.slice(lastLastIndex));
      return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
    };
  // Chakra, V8
  } else if ('0'[$SPLIT](undefined, 0)[LENGTH]) {
    $split = function (separator, limit) {
      return separator === undefined && limit === 0 ? [] : _split.call(this, separator, limit);
    };
  }
  // 21.1.3.17 String.prototype.split(separator, limit)
  return [function split(separator, limit) {
    var O = defined(this);
    var fn = separator == undefined ? undefined : separator[SPLIT];
    return fn !== undefined ? fn.call(separator, O, limit) : $split.call(String(O), separator, limit);
  }, $split];
});


/***/ }),

/***/ "2aba":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("7726");
var hide = __webpack_require__("32e9");
var has = __webpack_require__("69a8");
var SRC = __webpack_require__("ca5a")('src');
var TO_STRING = 'toString';
var $toString = Function[TO_STRING];
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__("8378").inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),

/***/ "2aeb":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__("cb7c");
var dPs = __webpack_require__("1495");
var enumBugKeys = __webpack_require__("e11e");
var IE_PROTO = __webpack_require__("613b")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__("230e")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__("fab2").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "2b4c":
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__("5537")('wks');
var uid = __webpack_require__("ca5a");
var Symbol = __webpack_require__("7726").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "2d00":
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "2d95":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "2fdb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 21.1.3.7 String.prototype.includes(searchString, position = 0)

var $export = __webpack_require__("5ca1");
var context = __webpack_require__("d2c8");
var INCLUDES = 'includes';

$export($export.P + $export.F * __webpack_require__("5147")(INCLUDES), 'String', {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~context(this, searchString, INCLUDES)
      .indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "32e9":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("86cc");
var createDesc = __webpack_require__("4630");
module.exports = __webpack_require__("9e1e") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "37c8":
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__("2b4c");


/***/ }),

/***/ "386d":
/***/ (function(module, exports, __webpack_require__) {

// @@search logic
__webpack_require__("214f")('search', 1, function (defined, SEARCH, $search) {
  // 21.1.3.15 String.prototype.search(regexp)
  return [function search(regexp) {
    'use strict';
    var O = defined(this);
    var fn = regexp == undefined ? undefined : regexp[SEARCH];
    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
  }, $search];
});


/***/ }),

/***/ "38fd":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__("69a8");
var toObject = __webpack_require__("4bf8");
var IE_PROTO = __webpack_require__("613b")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "3a72":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("7726");
var core = __webpack_require__("8378");
var LIBRARY = __webpack_require__("2d00");
var wksExt = __webpack_require__("37c8");
var defineProperty = __webpack_require__("86cc").f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),

/***/ "41a0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__("2aeb");
var descriptor = __webpack_require__("4630");
var setToStringTag = __webpack_require__("7f20");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__("32e9")(IteratorPrototype, __webpack_require__("2b4c")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "42cf":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "436c":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "4588":
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "45dd":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Identicon_vue_vue_type_style_index_0_id_72d62f0e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("a36d");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Identicon_vue_vue_type_style_index_0_id_72d62f0e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Identicon_vue_vue_type_style_index_0_id_72d62f0e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Identicon_vue_vue_type_style_index_0_id_72d62f0e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "4630":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "4acf":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "4bf8":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__("be13");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "5147":
/***/ (function(module, exports, __webpack_require__) {

var MATCH = __webpack_require__("2b4c")('match');
module.exports = function (KEY) {
  var re = /./;
  try {
    '/./'[KEY](re);
  } catch (e) {
    try {
      re[MATCH] = false;
      return !'/./'[KEY](re);
    } catch (f) { /* empty */ }
  } return true;
};


/***/ }),

/***/ "52a7":
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "5537":
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__("8378");
var global = __webpack_require__("7726");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__("2d00") ? 'pure' : 'global',
  copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "5c36":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PageFooter_vue_vue_type_style_index_0_id_30457784_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("436c");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PageFooter_vue_vue_type_style_index_0_id_30457784_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PageFooter_vue_vue_type_style_index_0_id_30457784_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PageFooter_vue_vue_type_style_index_0_id_30457784_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "5ca1":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("7726");
var core = __webpack_require__("8378");
var hide = __webpack_require__("32e9");
var redefine = __webpack_require__("2aba");
var ctx = __webpack_require__("9b43");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "5dbc":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("d3f4");
var setPrototypeOf = __webpack_require__("8b97").set;
module.exports = function (that, target, C) {
  var S = target.constructor;
  var P;
  if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {
    setPrototypeOf(that, P);
  } return that;
};


/***/ }),

/***/ "5df2":
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__("5ca1");
var $parseFloat = __webpack_require__("d752");
// 20.1.2.12 Number.parseFloat(string)
$export($export.S + $export.F * (Number.parseFloat != $parseFloat), 'Number', { parseFloat: $parseFloat });


/***/ }),

/***/ "5fd2":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "6026":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Amount_vue_vue_type_style_index_0_id_0d054e3a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("c533");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Amount_vue_vue_type_style_index_0_id_0d054e3a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Amount_vue_vue_type_style_index_0_id_0d054e3a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Amount_vue_vue_type_style_index_0_id_0d054e3a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "609a":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactList_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("5fd2");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactList_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactList_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactList_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "610c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("9b40");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "613b":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("5537")('keys');
var uid = __webpack_require__("ca5a");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "626a":
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__("2d95");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "645c":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "6762":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/Array.prototype.includes
var $export = __webpack_require__("5ca1");
var $includes = __webpack_require__("c366")(true);

$export($export.P, 'Array', {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

__webpack_require__("9c6c")('includes');


/***/ }),

/***/ "67ab":
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__("ca5a")('meta');
var isObject = __webpack_require__("d3f4");
var has = __webpack_require__("69a8");
var setDesc = __webpack_require__("86cc").f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__("79e5")(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),

/***/ "6821":
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__("626a");
var defined = __webpack_require__("be13");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "69a8":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "6a99":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__("d3f4");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "7726":
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "77f1":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("4588");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "79e5":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "7bbc":
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__("6821");
var gOPN = __webpack_require__("9093").f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),

/***/ "7d50":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "7f20":
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__("86cc").f;
var has = __webpack_require__("69a8");
var TAG = __webpack_require__("2b4c")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "8378":
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.7' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "84f2":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "86cc":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("cb7c");
var IE8_DOM_DEFINE = __webpack_require__("c69a");
var toPrimitive = __webpack_require__("6a99");
var dP = Object.defineProperty;

exports.f = __webpack_require__("9e1e") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "8a81":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__("7726");
var has = __webpack_require__("69a8");
var DESCRIPTORS = __webpack_require__("9e1e");
var $export = __webpack_require__("5ca1");
var redefine = __webpack_require__("2aba");
var META = __webpack_require__("67ab").KEY;
var $fails = __webpack_require__("79e5");
var shared = __webpack_require__("5537");
var setToStringTag = __webpack_require__("7f20");
var uid = __webpack_require__("ca5a");
var wks = __webpack_require__("2b4c");
var wksExt = __webpack_require__("37c8");
var wksDefine = __webpack_require__("3a72");
var enumKeys = __webpack_require__("d4c0");
var isArray = __webpack_require__("1169");
var anObject = __webpack_require__("cb7c");
var isObject = __webpack_require__("d3f4");
var toIObject = __webpack_require__("6821");
var toPrimitive = __webpack_require__("6a99");
var createDesc = __webpack_require__("4630");
var _create = __webpack_require__("2aeb");
var gOPNExt = __webpack_require__("7bbc");
var $GOPD = __webpack_require__("11e9");
var $DP = __webpack_require__("86cc");
var $keys = __webpack_require__("0d58");
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__("9093").f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__("52a7").f = $propertyIsEnumerable;
  __webpack_require__("2621").f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__("2d00")) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__("32e9")($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),

/***/ "8b97":
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__("d3f4");
var anObject = __webpack_require__("cb7c");
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__("9b43")(Function.call, __webpack_require__("11e9").f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),

/***/ "9093":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__("ce10");
var hiddenKeys = __webpack_require__("e11e").concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ "97dc":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "9ad1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Address_vue_vue_type_style_index_0_id_dcc1451a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("0508");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Address_vue_vue_type_style_index_0_id_dcc1451a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Address_vue_vue_type_style_index_0_id_dcc1451a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Address_vue_vue_type_style_index_0_id_dcc1451a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "9b40":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "9b43":
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__("d8e8");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "9b66":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "9c6c":
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = __webpack_require__("2b4c")('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__("32e9")(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "9def":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__("4588");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "9e1e":
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__("79e5")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "a36d":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "a481":
/***/ (function(module, exports, __webpack_require__) {

// @@replace logic
__webpack_require__("214f")('replace', 2, function (defined, REPLACE, $replace) {
  // 21.1.3.14 String.prototype.replace(searchValue, replaceValue)
  return [function replace(searchValue, replaceValue) {
    'use strict';
    var O = defined(this);
    var fn = searchValue == undefined ? undefined : searchValue[REPLACE];
    return fn !== undefined
      ? fn.call(searchValue, O, replaceValue)
      : $replace.call(String(O), searchValue, replaceValue);
  }, $replace];
});


/***/ }),

/***/ "aa77":
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__("5ca1");
var defined = __webpack_require__("be13");
var fails = __webpack_require__("79e5");
var spaces = __webpack_require__("fdef");
var space = '[' + spaces + ']';
var non = '\u200b\u0085';
var ltrim = RegExp('^' + space + space + '*');
var rtrim = RegExp(space + space + '*$');

var exporter = function (KEY, exec, ALIAS) {
  var exp = {};
  var FORCE = fails(function () {
    return !!spaces[KEY]() || non[KEY]() != non;
  });
  var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
  if (ALIAS) exp[ALIAS] = fn;
  $export($export.P + $export.F * FORCE, 'String', exp);
};

// 1 -> String#trimLeft
// 2 -> String#trimRight
// 3 -> String#trim
var trim = exporter.trim = function (string, TYPE) {
  string = String(defined(string));
  if (TYPE & 1) string = string.replace(ltrim, '');
  if (TYPE & 2) string = string.replace(rtrim, '');
  return string;
};

module.exports = exporter;


/***/ }),

/***/ "aae3":
/***/ (function(module, exports, __webpack_require__) {

// 7.2.8 IsRegExp(argument)
var isObject = __webpack_require__("d3f4");
var cof = __webpack_require__("2d95");
var MATCH = __webpack_require__("2b4c")('match');
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
};


/***/ }),

/***/ "ac4d":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("3a72")('asyncIterator');


/***/ }),

/***/ "ac6a":
/***/ (function(module, exports, __webpack_require__) {

var $iterators = __webpack_require__("cadf");
var getKeys = __webpack_require__("0d58");
var redefine = __webpack_require__("2aba");
var global = __webpack_require__("7726");
var hide = __webpack_require__("32e9");
var Iterators = __webpack_require__("84f2");
var wks = __webpack_require__("2b4c");
var ITERATOR = wks('iterator');
var TO_STRING_TAG = wks('toStringTag');
var ArrayValues = Iterators.Array;

var DOMIterables = {
  CSSRuleList: true, // TODO: Not spec compliant, should be false.
  CSSStyleDeclaration: false,
  CSSValueList: false,
  ClientRectList: false,
  DOMRectList: false,
  DOMStringList: false,
  DOMTokenList: true,
  DataTransferItemList: false,
  FileList: false,
  HTMLAllCollection: false,
  HTMLCollection: false,
  HTMLFormElement: false,
  HTMLSelectElement: false,
  MediaList: true, // TODO: Not spec compliant, should be false.
  MimeTypeArray: false,
  NamedNodeMap: false,
  NodeList: true,
  PaintRequestList: false,
  Plugin: false,
  PluginArray: false,
  SVGLengthList: false,
  SVGNumberList: false,
  SVGPathSegList: false,
  SVGPointList: false,
  SVGStringList: false,
  SVGTransformList: false,
  SourceBufferList: false,
  StyleSheetList: true, // TODO: Not spec compliant, should be false.
  TextTrackCueList: false,
  TextTrackList: false,
  TouchList: false
};

for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
  var NAME = collections[i];
  var explicit = DOMIterables[NAME];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  var key;
  if (proto) {
    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
    Iterators[NAME] = ArrayValues;
    if (explicit) for (key in $iterators) if (!proto[key]) redefine(proto, key, $iterators[key], true);
  }
}


/***/ }),

/***/ "b22e":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "bc05":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Account_vue_vue_type_style_index_0_id_d8b0cc08_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("645c");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Account_vue_vue_type_style_index_0_id_d8b0cc08_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Account_vue_vue_type_style_index_0_id_d8b0cc08_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Account_vue_vue_type_style_index_0_id_d8b0cc08_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "be13":
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "c15b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AmountWithDetails_vue_vue_type_style_index_0_id_0c1c5a62_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("c9ef");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AmountWithDetails_vue_vue_type_style_index_0_id_0c1c5a62_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AmountWithDetails_vue_vue_type_style_index_0_id_0c1c5a62_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AmountWithDetails_vue_vue_type_style_index_0_id_0c1c5a62_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "c366":
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__("6821");
var toLength = __webpack_require__("9def");
var toAbsoluteIndex = __webpack_require__("77f1");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "c4be":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "c533":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "c5f6":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__("7726");
var has = __webpack_require__("69a8");
var cof = __webpack_require__("2d95");
var inheritIfRequired = __webpack_require__("5dbc");
var toPrimitive = __webpack_require__("6a99");
var fails = __webpack_require__("79e5");
var gOPN = __webpack_require__("9093").f;
var gOPD = __webpack_require__("11e9").f;
var dP = __webpack_require__("86cc").f;
var $trim = __webpack_require__("aa77").trim;
var NUMBER = 'Number';
var $Number = global[NUMBER];
var Base = $Number;
var proto = $Number.prototype;
// Opera ~12 has broken Object#toString
var BROKEN_COF = cof(__webpack_require__("2aeb")(proto)) == NUMBER;
var TRIM = 'trim' in String.prototype;

// 7.1.3 ToNumber(argument)
var toNumber = function (argument) {
  var it = toPrimitive(argument, false);
  if (typeof it == 'string' && it.length > 2) {
    it = TRIM ? it.trim() : $trim(it, 3);
    var first = it.charCodeAt(0);
    var third, radix, maxCode;
    if (first === 43 || first === 45) {
      third = it.charCodeAt(2);
      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if (first === 48) {
      switch (it.charCodeAt(1)) {
        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal /^0b[01]+$/i
        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal /^0o[0-7]+$/i
        default: return +it;
      }
      for (var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++) {
        code = digits.charCodeAt(i);
        // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols
        if (code < 48 || code > maxCode) return NaN;
      } return parseInt(digits, radix);
    }
  } return +it;
};

if (!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')) {
  $Number = function Number(value) {
    var it = arguments.length < 1 ? 0 : value;
    var that = this;
    return that instanceof $Number
      // check on 1..constructor(foo) case
      && (BROKEN_COF ? fails(function () { proto.valueOf.call(that); }) : cof(that) != NUMBER)
        ? inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);
  };
  for (var keys = __webpack_require__("9e1e") ? gOPN(Base) : (
    // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
    // ES6 (in case, if modules with ES6 Number statics required before):
    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
  ).split(','), j = 0, key; keys.length > j; j++) {
    if (has(Base, key = keys[j]) && !has($Number, key)) {
      dP($Number, key, gOPD(Base, key));
    }
  }
  $Number.prototype = proto;
  proto.constructor = $Number;
  __webpack_require__("2aba")(global, NUMBER, $Number);
}


/***/ }),

/***/ "c69a":
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__("9e1e") && !__webpack_require__("79e5")(function () {
  return Object.defineProperty(__webpack_require__("230e")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "c9ef":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "ca5a":
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "cadf":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__("9c6c");
var step = __webpack_require__("d53b");
var Iterators = __webpack_require__("84f2");
var toIObject = __webpack_require__("6821");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__("01f9")(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "cb7c":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("d3f4");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "ce10":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("69a8");
var toIObject = __webpack_require__("6821");
var arrayIndexOf = __webpack_require__("c366")(false);
var IE_PROTO = __webpack_require__("613b")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "d10e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SmallPage_vue_vue_type_style_index_0_id_711d76e6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("b22e");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SmallPage_vue_vue_type_style_index_0_id_711d76e6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SmallPage_vue_vue_type_style_index_0_id_711d76e6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SmallPage_vue_vue_type_style_index_0_id_711d76e6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "d2c8":
/***/ (function(module, exports, __webpack_require__) {

// helper for String#{startsWith, endsWith, includes}
var isRegExp = __webpack_require__("aae3");
var defined = __webpack_require__("be13");

module.exports = function (that, searchString, NAME) {
  if (isRegExp(searchString)) throw TypeError('String#' + NAME + " doesn't accept regex!");
  return String(defined(that));
};


/***/ }),

/***/ "d3f4":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "d4c0":
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__("0d58");
var gOPS = __webpack_require__("2621");
var pIE = __webpack_require__("52a7");
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),

/***/ "d4c8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_style_index_0_id_1f9c79d5_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("7d50");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_style_index_0_id_1f9c79d5_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_style_index_0_id_1f9c79d5_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_style_index_0_id_1f9c79d5_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "d53b":
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "d752":
/***/ (function(module, exports, __webpack_require__) {

var $parseFloat = __webpack_require__("7726").parseFloat;
var $trim = __webpack_require__("aa77").trim;

module.exports = 1 / $parseFloat(__webpack_require__("fdef") + '-0') !== -Infinity ? function parseFloat(str) {
  var string = $trim(String(str), 3);
  var result = $parseFloat(string);
  return result === 0 && string.charAt(0) == '-' ? -0 : result;
} : $parseFloat;


/***/ }),

/***/ "d8e8":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "e11e":
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "e92e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginSelector_vue_vue_type_style_index_0_id_9d37acb8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("c4be");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginSelector_vue_vue_type_style_index_0_id_9d37acb8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginSelector_vue_vue_type_style_index_0_id_9d37acb8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginSelector_vue_vue_type_style_index_0_id_9d37acb8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "f49a":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginList_vue_vue_type_style_index_0_id_aae788fe_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("0be1");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginList_vue_vue_type_style_index_0_id_aae788fe_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginList_vue_vue_type_style_index_0_id_aae788fe_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginList_vue_vue_type_style_index_0_id_aae788fe_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "f5be":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountList_vue_vue_type_style_index_0_id_64380e9e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("9b66");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountList_vue_vue_type_style_index_0_id_64380e9e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountList_vue_vue_type_style_index_0_id_64380e9e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountList_vue_vue_type_style_index_0_id_64380e9e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "fab2":
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__("7726").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "fae3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
var setPublicPath = __webpack_require__("1eb2");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"/home/soeren/nimiq/vue-components/node_modules/.cache/vue-loader","cacheIdentifier":"61e0acba-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Account.vue?vue&type=template&id=d8b0cc08&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"account"},[_c('Identicon',{attrs:{"address":_vm.address}}),_c('div',{staticClass:"account-description"},[_c('div',{staticClass:"label-and-balance"},[_c('div',{staticClass:"label"},[_vm._v(_vm._s(_vm.label))]),(_vm.balance || _vm.balance === 0)?_c('div',{staticClass:"balance"},[_c('Amount',{attrs:{"amount":_vm.balance,"decimals":2}})],1):_vm._e(),(!_vm.balance && _vm.balance !== 0)?_c('div',{staticClass:"balance balance-loading"}):_vm._e()]),_c('div',{staticClass:"address"},[_vm._v(_vm._s(_vm.address.toUserFriendlyAddress()))])])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Account.vue?vue&type=template&id=d8b0cc08&scoped=true&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.number.constructor.js
var es6_number_constructor = __webpack_require__("c5f6");

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/builtin/es6/classCallCheck.js
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/builtin/es6/setPrototypeOf.js
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/builtin/es6/inherits.js

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  _setPrototypeOf(subClass.prototype, superClass && superClass.prototype);
  if (superClass) _setPrototypeOf(subClass, superClass);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/builtin/es6/typeof.js
function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/builtin/es6/assertThisInitialized.js
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/builtin/es6/possibleConstructorReturn.js


function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/builtin/es6/getPrototypeOf.js
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.getPrototypeOf || function _getPrototypeOf(o) {
    return o.__proto__;
  };

  return _getPrototypeOf(o);
}
// CONCATENATED MODULE: ./node_modules/tslib/tslib.es6.js
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

// EXTERNAL MODULE: external "vue-property-decorator"
var external_vue_property_decorator_ = __webpack_require__("01a6");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"/home/soeren/nimiq/vue-components/node_modules/.cache/vue-loader","cacheIdentifier":"61e0acba-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Identicon.vue?vue&type=template&id=72d62f0e&scoped=true&
var Identiconvue_type_template_id_72d62f0e_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"identicon"},[_c('img',{attrs:{"src":_vm.dataUrl}})])}
var Identiconvue_type_template_id_72d62f0e_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Identicon.vue?vue&type=template&id=72d62f0e&scoped=true&

// CONCATENATED MODULE: ./node_modules/@nimiq/iqons/dist/iqons.min.js
const IqonsCatalog={face:["face_01","face_02","face_03","face_04","face_05","face_06","face_07","face_08","face_09","face_10","face_11","face_12","face_13","face_14","face_15","face_16","face_17","face_18","face_19","face_20","face_21"],side:["side_01","side_02","side_03","side_04","side_05","side_06","side_07","side_08","side_09","side_10","side_11","side_12","side_13","side_14","side_15","side_16","side_17","side_18","side_19","side_20","side_21"],top:["top_01","top_02","top_03","top_04","top_05","top_06","top_07","top_08","top_09","top_10","top_11","top_12","top_13","top_14","top_15","top_16","top_17","top_18","top_19","top_20","top_21"],bottom:["bottom_01","bottom_02","bottom_03","bottom_04","bottom_05","bottom_06","bottom_07","bottom_08","bottom_09","bottom_10","bottom_11","bottom_12","bottom_13","bottom_14","bottom_15","bottom_16","bottom_17","bottom_18","bottom_19","bottom_20","bottom_21"]};
class Iqons{static async svg(t,s=!1){const e=this._hash(t);return this._svgTemplate(e[0],e[2],e[3]+e[4],e[5]+e[6],e[7]+e[8],e[9]+e[10],e[11],e[12],s)}static async render(t,s){s.innerHTML=await this.svg(t)}static async toDataUrl(t){return`data:image/svg+xml;base64,${btoa(await this.svg(t,!0)).replace(/#/g,"%23")}`}static placeholder(t="#bbb",s=1){return`<svg viewBox="0 0 160 160" width="160" height="160" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/2000/xlink" >\n    <path fill="none" stroke="${t}" stroke-width="${2*s}" transform="translate(0, 8) scale(0.5)" d="M251.6 17.34l63.53 110.03c5.72 9.9 5.72 22.1 0 32L251.6 269.4c-5.7 9.9-16.27 16-27.7 16H96.83c-11.43 0-22-6.1-27.7-16L5.6 159.37c-5.7-9.9-5.7-22.1 0-32L69.14 17.34c5.72-9.9 16.28-16 27.7-16H223.9c11.43 0 22 6.1 27.7 16z"/>\n    <g transform="scale(0.9) translate(9, 8)">\n        <circle cx="80" cy="80" r="40" fill="none" stroke="${t}" stroke-width="${s}" opacity=".9"></circle>\n        <g opacity=".1" fill="#010101"><path d="M119.21,80a39.46,39.46,0,0,1-67.13,28.13c10.36,2.33,36,3,49.82-14.28,10.39-12.47,8.31-33.23,4.16-43.26A39.35,39.35,0,0,1,119.21,80Z"/></g>\`\n    </g>\n</svg>`}static renderPlaceholder(t,s,e){t.innerHTML=this.placeholder(s,e)}static placeholderToDataUrl(t,s){return`data:image/svg+xml;base64,${btoa(this.placeholder(t,s))}`}static async image(t){const s=await this.toDataUrl(t),e=await this._loadImage(s);return e.style.width="100%",e.style.height="100%",e}static async _svgTemplate(t,s,e,a,n,r,i,c,l){return this._$svg(await this._$iqons(t,s,e,a,n,r,i,l),c)}static async _$iqons(t,s,e,a,n,r,i,c){for(t=parseInt(t),s=parseInt(s),i=parseInt(i),t===s&&++t>9&&(t=0);i===t||i===s;)++i>9&&(i=0);return t=this.colors[t],s=this.colors[s],`<g color="${t}" fill="${i=this.colors[i]}">\n    <rect fill="${s}" x="0" y="0" width="160" height="160"></rect>\n    <circle cx="80" cy="80" r="40" fill="${t}"></circle>\n    <g opacity=".1" fill="#010101"><path d="M119.21,80a39.46,39.46,0,0,1-67.13,28.13c10.36,2.33,36,3,49.82-14.28,10.39-12.47,8.31-33.23,4.16-43.26A39.35,39.35,0,0,1,119.21,80Z"/></g>\n    ${await this._generatePart("top",a,c)}\n    ${await this._generatePart("side",n,c)}\n    ${await this._generatePart("face",e,c)}\n    ${await this._generatePart("bottom",r,c)}\n</g>`}static _$svg(t,s){const e=this._getRandomId();return`<svg viewBox="0 0 160 160" width="160" height="160" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/2000/xlink" >\n    <defs>\n        <clipPath id="hexagon-clip-${e}" transform="scale(0.5) translate(0, 16)">\n            <path d="M251.6 17.34l63.53 110.03c5.72 9.9 5.72 22.1 0 32L251.6 269.4c-5.7 9.9-16.27 16-27.7 16H96.83c-11.43 0-22-6.1-27.7-16L5.6 159.37c-5.7-9.9-5.7-22.1 0-32L69.14 17.34c5.72-9.9 16.28-16 27.7-16H223.9c11.43 0 22 6.1 27.7 16z"/>\n        </clipPath>\n    </defs>\n    <path fill="white" stroke="#bbbbbb" transform="translate(0, 8) scale(0.5)" d="M251.6 17.34l63.53 110.03c5.72 9.9 5.72 22.1 0 32L251.6 269.4c-5.7 9.9-16.27 16-27.7 16H96.83c-11.43 0-22-6.1-27.7-16L5.6 159.37c-5.7-9.9-5.7-22.1 0-32L69.14 17.34c5.72-9.9 16.28-16 27.7-16H223.9c11.43 0 22 6.1 27.7 16z"/>\n    <g transform="scale(0.9) translate(9, 8)">\n        <g clip-path="url(#hexagon-clip-${e})">\n            ${t}\n        </g>\n    </g>\n</svg>`}static async _generatePart(t,s,e=!1){if(e){const e=await this._getAssets(),a="#"+t+"_"+this._assetIndex(s,t);return e.querySelector(a).innerHTML}return`<use width="160" height="160" xlink:href="${this.svgPath}#${t}_${this._assetIndex(s,t)}"/>`}static _loadImage(t){return new Promise((s,e)=>{const a=document.createElement("img");a.addEventListener("load",t=>s(a),{once:!0}),a.src=t})}static async _getAssets(){return this._assets?this._assets:(this._assets=fetch(this.svgPath).then(t=>t.text()).then(t=>{const s=document.createElement("x-assets");return s.innerHTML=t,this._assets=s,s}),this._assets)}static get colors(){return["#fb8c00","#d32f2f","#fbc02d","#3949ab","#03a9f4","#8e24aa","#009688","#f06292","#7cb342","#795548"]}static get assetCounts(){return{face:IqonsCatalog.face.length,side:IqonsCatalog.side.length,top:IqonsCatalog.top.length,bottom:IqonsCatalog.bottom.length,gaze:2}}static _assetIndex(t,s){return(t=Number(t)%this.assetCounts[s]+1)<10&&(t="0"+t),t}static _hash(t){return(""+t.split("").map(t=>Number(t.charCodeAt(0))+3).reduce((t,s)=>t*(1-t)*this.__chaosHash(s),.5)).split("").reduce((t,s)=>s+t,"").substr(4,17)}static __chaosHash(t){let s=1/t;for(let t=0;t<100;t++)s=(1-s)*s*3.569956786876;return s}static _getRandomId(){let t=new Uint32Array(1);return crypto.getRandomValues(t),t[0]}}
/* @asset(/libraries/iqons/dist/iqons.min.svg) */;Iqons.svgPath="/libraries/iqons/dist/iqons.min.svg";
// EXTERNAL MODULE: ./node_modules/@nimiq/iqons/dist/iqons.min.svg
var iqons_min = __webpack_require__("1625");
var iqons_min_default = /*#__PURE__*/__webpack_require__.n(iqons_min);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--13-1!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Identicon.vue?vue&type=script&lang=ts&









if (iqons_min_default.a[0] === '"') {
  Iqons.svgPath = iqons_min_default.a.substring(1, iqons_min_default.a.length - 1);
} else {
  Iqons.svgPath = iqons_min_default.a;
}

var Identiconvue_type_script_lang_ts_Identicon =
/*#__PURE__*/
function (_Vue) {
  function Identicon() {
    _classCallCheck(this, Identicon);

    return _possibleConstructorReturn(this, _getPrototypeOf(Identicon).apply(this, arguments));
  }

  _inherits(Identicon, _Vue);

  return Identicon;
}(external_vue_property_decorator_["Vue"]);

__decorate([Object(external_vue_property_decorator_["Prop"])(Nimiq.Address)], Identiconvue_type_script_lang_ts_Identicon.prototype, "address", void 0);

Identiconvue_type_script_lang_ts_Identicon = __decorate([Object(external_vue_property_decorator_["Component"])({
  asyncComputed: {
    dataUrl: {
      get: function get() {
        if (this.address) {
          return Iqons.toDataUrl(this.address.toUserFriendlyAddress());
        } else {
          return Iqons.placeholderToDataUrl();
        }
      },
      default: function _default() {
        return Iqons.placeholderToDataUrl();
      }
    }
  }
})], Identiconvue_type_script_lang_ts_Identicon);
/* harmony default export */ var Identiconvue_type_script_lang_ts_ = (Identiconvue_type_script_lang_ts_Identicon);
// CONCATENATED MODULE: ./src/components/Identicon.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_Identiconvue_type_script_lang_ts_ = (Identiconvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./src/components/Identicon.vue?vue&type=style&index=0&id=72d62f0e&scoped=true&lang=css&
var Identiconvue_type_style_index_0_id_72d62f0e_scoped_true_lang_css_ = __webpack_require__("45dd");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/components/Identicon.vue






/* normalize component */

var component = normalizeComponent(
  components_Identiconvue_type_script_lang_ts_,
  Identiconvue_type_template_id_72d62f0e_scoped_true_render,
  Identiconvue_type_template_id_72d62f0e_scoped_true_staticRenderFns,
  false,
  null,
  "72d62f0e",
  null
  
)

/* harmony default export */ var components_Identicon = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"/home/soeren/nimiq/vue-components/node_modules/.cache/vue-loader","cacheIdentifier":"61e0acba-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Amount.vue?vue&type=template&id=0d054e3a&scoped=true&
var Amountvue_type_template_id_0d054e3a_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',{class:_vm.showApprox && _vm.isApprox(_vm.amount) ? 'amount approx' : 'amount'},[_vm._v("\n    "+_vm._s(_vm.amountToString())+"\n    "),_c('span',{staticClass:"nim"},[_vm._v("NIM")])])}
var Amountvue_type_template_id_0d054e3a_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Amount.vue?vue&type=template&id=0d054e3a&scoped=true&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.number.parse-float.js
var es6_number_parse_float = __webpack_require__("5df2");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.replace.js
var es6_regexp_replace = __webpack_require__("a481");

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/builtin/es6/createClass.js
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--13-1!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Amount.vue?vue&type=script&lang=ts&











var Amountvue_type_script_lang_ts_Amount =
/*#__PURE__*/
function (_Vue) {
  function Amount() {
    _classCallCheck(this, Amount);

    return _possibleConstructorReturn(this, _getPrototypeOf(Amount).apply(this, arguments));
  }

  _createClass(Amount, [{
    key: "amountToString",
    value: function amountToString() {
      var roundingFactor = Math.pow(10, this.decimals);
      var value = Math.floor(this.amount / 100000 * roundingFactor) / roundingFactor;
      var result = value.toFixed(this.decimals);
      if (Math.abs(value) < 10000) return result; // add thin spaces (U+202F) every 3 digits. Stop at the decimal separator if there is one

      var regexp = this.decimals > 0 ? /(\d)(?=(\d{3})+\.)/g : /(\d)(?=(\d{3})+$)/g;
      return result.replace(regexp, "$1\u2009");
    }
  }, {
    key: "isApprox",
    value: function isApprox() {
      var roundedNum = Number.parseFloat((this.amount / 100000).toFixed(this.decimals));
      return roundedNum.toFixed(5) !== (this.amount / 100000).toFixed(5);
    }
  }]);

  _inherits(Amount, _Vue);

  return Amount;
}(external_vue_property_decorator_["Vue"]);

__decorate([Object(external_vue_property_decorator_["Prop"])(Number)], Amountvue_type_script_lang_ts_Amount.prototype, "amount", void 0);

__decorate([Object(external_vue_property_decorator_["Prop"])({
  type: Number,
  default: 2,
  validator: function validator(value) {
    return value >= 0 && value <= 5;
  }
})], Amountvue_type_script_lang_ts_Amount.prototype, "decimals", void 0);

__decorate([Object(external_vue_property_decorator_["Prop"])({
  type: Boolean,
  default: false
})], Amountvue_type_script_lang_ts_Amount.prototype, "showApprox", void 0);

Amountvue_type_script_lang_ts_Amount = __decorate([external_vue_property_decorator_["Component"]], Amountvue_type_script_lang_ts_Amount);
/* harmony default export */ var Amountvue_type_script_lang_ts_ = (Amountvue_type_script_lang_ts_Amount);
// CONCATENATED MODULE: ./src/components/Amount.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_Amountvue_type_script_lang_ts_ = (Amountvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./src/components/Amount.vue?vue&type=style&index=0&id=0d054e3a&scoped=true&lang=css&
var Amountvue_type_style_index_0_id_0d054e3a_scoped_true_lang_css_ = __webpack_require__("6026");

// CONCATENATED MODULE: ./src/components/Amount.vue






/* normalize component */

var Amount_component = normalizeComponent(
  components_Amountvue_type_script_lang_ts_,
  Amountvue_type_template_id_0d054e3a_scoped_true_render,
  Amountvue_type_template_id_0d054e3a_scoped_true_staticRenderFns,
  false,
  null,
  "0d054e3a",
  null
  
)

/* harmony default export */ var components_Amount = (Amount_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--13-1!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Account.vue?vue&type=script&lang=ts&










var Accountvue_type_script_lang_ts_Account =
/*#__PURE__*/
function (_Vue) {
  function Account() {
    _classCallCheck(this, Account);

    return _possibleConstructorReturn(this, _getPrototypeOf(Account).apply(this, arguments));
  }

  _inherits(Account, _Vue);

  return Account;
}(external_vue_property_decorator_["Vue"]);

__decorate([Object(external_vue_property_decorator_["Prop"])(Nimiq.Address)], Accountvue_type_script_lang_ts_Account.prototype, "address", void 0);

__decorate([Object(external_vue_property_decorator_["Prop"])(String)], Accountvue_type_script_lang_ts_Account.prototype, "label", void 0);

__decorate([Object(external_vue_property_decorator_["Prop"])(Number)], Accountvue_type_script_lang_ts_Account.prototype, "balance", void 0);

Accountvue_type_script_lang_ts_Account = __decorate([Object(external_vue_property_decorator_["Component"])({
  components: {
    Amount: components_Amount,
    Identicon: components_Identicon
  }
})], Accountvue_type_script_lang_ts_Account);
/* harmony default export */ var Accountvue_type_script_lang_ts_ = (Accountvue_type_script_lang_ts_Account);
// CONCATENATED MODULE: ./src/components/Account.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_Accountvue_type_script_lang_ts_ = (Accountvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./src/components/Account.vue?vue&type=style&index=0&id=d8b0cc08&scoped=true&lang=css&
var Accountvue_type_style_index_0_id_d8b0cc08_scoped_true_lang_css_ = __webpack_require__("bc05");

// CONCATENATED MODULE: ./src/components/Account.vue






/* normalize component */

var Account_component = normalizeComponent(
  components_Accountvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  "d8b0cc08",
  null
  
)

/* harmony default export */ var components_Account = (Account_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"/home/soeren/nimiq/vue-components/node_modules/.cache/vue-loader","cacheIdentifier":"61e0acba-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/AccountList.vue?vue&type=template&id=64380e9e&scoped=true&
var AccountListvue_type_template_id_64380e9e_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"account-list"},_vm._l((_vm.accounts),function(account){return _c('div',{key:account.userFriendlyAddress,staticClass:"account-entry",on:{"click":function($event){_vm.accountSelected(account.loginId || _vm.loginId, account.address)}}},[_c('Account',{attrs:{"address":account.address,"label":account.label,"balance":account.balance}})],1)}))}
var AccountListvue_type_template_id_64380e9e_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/AccountList.vue?vue&type=template&id=64380e9e&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--13-1!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/AccountList.vue?vue&type=script&lang=ts&









var AccountListvue_type_script_lang_ts_AccountList =
/*#__PURE__*/
function (_Vue) {
  function AccountList() {
    _classCallCheck(this, AccountList);

    return _possibleConstructorReturn(this, _getPrototypeOf(AccountList).apply(this, arguments));
  }

  _createClass(AccountList, [{
    key: "accountSelected",
    value: function accountSelected(loginId, address) {}
  }]);

  _inherits(AccountList, _Vue);

  return AccountList;
}(external_vue_property_decorator_["Vue"]);

__decorate([Object(external_vue_property_decorator_["Prop"])(Array)], AccountListvue_type_script_lang_ts_AccountList.prototype, "accounts", void 0);

__decorate([Object(external_vue_property_decorator_["Prop"])(String)], AccountListvue_type_script_lang_ts_AccountList.prototype, "loginId", void 0);

__decorate([Object(external_vue_property_decorator_["Emit"])() // tslint:disable-next-line no-empty
], AccountListvue_type_script_lang_ts_AccountList.prototype, "accountSelected", null);

AccountListvue_type_script_lang_ts_AccountList = __decorate([Object(external_vue_property_decorator_["Component"])({
  components: {
    Account: components_Account
  }
})], AccountListvue_type_script_lang_ts_AccountList);
/* harmony default export */ var AccountListvue_type_script_lang_ts_ = (AccountListvue_type_script_lang_ts_AccountList);
// CONCATENATED MODULE: ./src/components/AccountList.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_AccountListvue_type_script_lang_ts_ = (AccountListvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./src/components/AccountList.vue?vue&type=style&index=0&id=64380e9e&scoped=true&lang=css&
var AccountListvue_type_style_index_0_id_64380e9e_scoped_true_lang_css_ = __webpack_require__("f5be");

// CONCATENATED MODULE: ./src/components/AccountList.vue






/* normalize component */

var AccountList_component = normalizeComponent(
  components_AccountListvue_type_script_lang_ts_,
  AccountListvue_type_template_id_64380e9e_scoped_true_render,
  AccountListvue_type_template_id_64380e9e_scoped_true_staticRenderFns,
  false,
  null,
  "64380e9e",
  null
  
)

/* harmony default export */ var components_AccountList = (AccountList_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"/home/soeren/nimiq/vue-components/node_modules/.cache/vue-loader","cacheIdentifier":"61e0acba-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/AccountSelector.vue?vue&type=template&id=5eaf2fc4&scoped=true&
var AccountSelectorvue_type_template_id_5eaf2fc4_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"account-selector"},[_c('PageHeader',{attrs:{"back-arrow":!_vm.showSwitchLogin},on:{"back":function($event){_vm.$emit('back')}}},[_vm._v("\n        "+_vm._s(_vm.title)+"\n    ")]),_c('div',{staticClass:"page-body"},[_c('div',{staticClass:"login-label"},[_c('div',{staticClass:"login-icon",class:_vm.loginIconClass}),_vm._v(" "+_vm._s(_vm.loginLabel))]),_c('AccountList',{attrs:{"accounts":_vm.accounts,"loginId":_vm.loginId},on:{"account-selected":_vm.accountSelected}})],1),(_vm.showSwitchLogin)?_c('PageFooter',{nativeOn:{"click":function($event){return _vm.switchLogin($event)}}},[_c('div',{staticClass:"icon-plus-circle"}),_c('div',[_vm._v("Use different Wallet")])]):_vm._e()],1)}
var AccountSelectorvue_type_template_id_5eaf2fc4_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/AccountSelector.vue?vue&type=template&id=5eaf2fc4&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"/home/soeren/nimiq/vue-components/node_modules/.cache/vue-loader","cacheIdentifier":"61e0acba-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/PageHeader.vue?vue&type=template&id=0b36ad52&scoped=true&
var PageHeadervue_type_template_id_0b36ad52_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"page-header",class:_vm.progressIndicator ? 'has-progress-indicator' : ''},[(_vm.progressIndicator)?_c('div',{staticClass:"progress-indicator"},_vm._l((_vm.progressSteps),function(thisStep){return _c('div',{key:thisStep,staticClass:"indicator",class:thisStep <= _vm.step ? 'active' : ''})})):_vm._e(),(_vm.backArrow)?_c('a',{staticClass:"page-header-back-button icon-back-arrow",on:{"click":function($event){_vm.$emit('back')}}}):_vm._e(),_c('h1',[_vm._t("default")],2)])}
var PageHeadervue_type_template_id_0b36ad52_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/PageHeader.vue?vue&type=template&id=0b36ad52&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--13-1!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/PageHeader.vue?vue&type=script&lang=ts&









var PageHeadervue_type_script_lang_ts_PageHeader =
/*#__PURE__*/
function (_Vue) {
  function PageHeader() {
    _classCallCheck(this, PageHeader);

    return _possibleConstructorReturn(this, _getPrototypeOf(PageHeader).apply(this, arguments));
  }

  _createClass(PageHeader, [{
    key: "progressSteps",
    get: function get() {
      var list = [];

      for (var i = 1; i <= this.numberSteps; i++) {
        list.push(i);
      }

      return list;
    }
  }]);

  _inherits(PageHeader, _Vue);

  return PageHeader;
}(external_vue_property_decorator_["Vue"]);

__decorate([Object(external_vue_property_decorator_["Prop"])({
  type: Boolean,
  default: false
})], PageHeadervue_type_script_lang_ts_PageHeader.prototype, "backArrow", void 0);

__decorate([Object(external_vue_property_decorator_["Prop"])({
  type: Boolean,
  default: false
})], PageHeadervue_type_script_lang_ts_PageHeader.prototype, "progressIndicator", void 0);

__decorate([Object(external_vue_property_decorator_["Prop"])({
  type: Number,
  default: 6
})], PageHeadervue_type_script_lang_ts_PageHeader.prototype, "numberSteps", void 0);

__decorate([Object(external_vue_property_decorator_["Prop"])({
  type: Number,
  default: 1
})], PageHeadervue_type_script_lang_ts_PageHeader.prototype, "step", void 0);

PageHeadervue_type_script_lang_ts_PageHeader = __decorate([external_vue_property_decorator_["Component"]], PageHeadervue_type_script_lang_ts_PageHeader);
/* harmony default export */ var PageHeadervue_type_script_lang_ts_ = (PageHeadervue_type_script_lang_ts_PageHeader);
// CONCATENATED MODULE: ./src/components/PageHeader.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_PageHeadervue_type_script_lang_ts_ = (PageHeadervue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./src/components/PageHeader.vue?vue&type=style&index=0&id=0b36ad52&scoped=true&lang=css&
var PageHeadervue_type_style_index_0_id_0b36ad52_scoped_true_lang_css_ = __webpack_require__("0a52");

// CONCATENATED MODULE: ./src/components/PageHeader.vue






/* normalize component */

var PageHeader_component = normalizeComponent(
  components_PageHeadervue_type_script_lang_ts_,
  PageHeadervue_type_template_id_0b36ad52_scoped_true_render,
  PageHeadervue_type_template_id_0b36ad52_scoped_true_staticRenderFns,
  false,
  null,
  "0b36ad52",
  null
  
)

/* harmony default export */ var components_PageHeader = (PageHeader_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"/home/soeren/nimiq/vue-components/node_modules/.cache/vue-loader","cacheIdentifier":"61e0acba-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/PageFooter.vue?vue&type=template&id=30457784&scoped=true&
var PageFootervue_type_template_id_30457784_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"page-footer"},[_vm._t("default")],2)}
var PageFootervue_type_template_id_30457784_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/PageFooter.vue?vue&type=template&id=30457784&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--13-1!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/PageFooter.vue?vue&type=script&lang=ts&







var PageFootervue_type_script_lang_ts_PageFooter =
/*#__PURE__*/
function (_Vue) {
  function PageFooter() {
    _classCallCheck(this, PageFooter);

    return _possibleConstructorReturn(this, _getPrototypeOf(PageFooter).apply(this, arguments));
  }

  _inherits(PageFooter, _Vue);

  return PageFooter;
}(external_vue_property_decorator_["Vue"]);

PageFootervue_type_script_lang_ts_PageFooter = __decorate([external_vue_property_decorator_["Component"]], PageFootervue_type_script_lang_ts_PageFooter);
/* harmony default export */ var PageFootervue_type_script_lang_ts_ = (PageFootervue_type_script_lang_ts_PageFooter);
// CONCATENATED MODULE: ./src/components/PageFooter.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_PageFootervue_type_script_lang_ts_ = (PageFootervue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./src/components/PageFooter.vue?vue&type=style&index=0&id=30457784&scoped=true&lang=css&
var PageFootervue_type_style_index_0_id_30457784_scoped_true_lang_css_ = __webpack_require__("5c36");

// CONCATENATED MODULE: ./src/components/PageFooter.vue






/* normalize component */

var PageFooter_component = normalizeComponent(
  components_PageFootervue_type_script_lang_ts_,
  PageFootervue_type_template_id_30457784_scoped_true_render,
  PageFootervue_type_template_id_30457784_scoped_true_staticRenderFns,
  false,
  null,
  "30457784",
  null
  
)

/* harmony default export */ var components_PageFooter = (PageFooter_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--13-1!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/AccountSelector.vue?vue&type=script&lang=ts&












var AccountSelectorvue_type_script_lang_ts_AccountSelector =
/*#__PURE__*/
function (_Vue) {
  function AccountSelector() {
    _classCallCheck(this, AccountSelector);

    return _possibleConstructorReturn(this, _getPrototypeOf(AccountSelector).apply(this, arguments));
  }

  _createClass(AccountSelector, [{
    key: "accountSelected",
    value: function accountSelected(loginId, address) {}
  }, {
    key: "switchLogin",
    value: function switchLogin() {}
  }, {
    key: "loginIconClass",
    get: function get() {
      switch (this.loginType) {
        case 0:
          return 'keyguard';

        case 1:
          return 'keyguard';

        case 2:
          return 'ledger';
      }
    }
  }]);

  _inherits(AccountSelector, _Vue);

  return AccountSelector;
}(external_vue_property_decorator_["Vue"]);

__decorate([Object(external_vue_property_decorator_["Prop"])({
  type: String,
  default: 'Select Account'
})], AccountSelectorvue_type_script_lang_ts_AccountSelector.prototype, "title", void 0);

__decorate([Object(external_vue_property_decorator_["Prop"])(String)], AccountSelectorvue_type_script_lang_ts_AccountSelector.prototype, "loginId", void 0);

__decorate([Object(external_vue_property_decorator_["Prop"])(String)], AccountSelectorvue_type_script_lang_ts_AccountSelector.prototype, "loginLabel", void 0);

__decorate([Object(external_vue_property_decorator_["Prop"])(Number)], AccountSelectorvue_type_script_lang_ts_AccountSelector.prototype, "loginType", void 0);

__decorate([Object(external_vue_property_decorator_["Prop"])(Array)], AccountSelectorvue_type_script_lang_ts_AccountSelector.prototype, "accounts", void 0);

__decorate([Object(external_vue_property_decorator_["Prop"])({
  type: Boolean,
  default: false
})], AccountSelectorvue_type_script_lang_ts_AccountSelector.prototype, "showSwitchLogin", void 0);

__decorate([Object(external_vue_property_decorator_["Emit"])() // tslint:disable-next-line no-empty
], AccountSelectorvue_type_script_lang_ts_AccountSelector.prototype, "accountSelected", null);

__decorate([Object(external_vue_property_decorator_["Emit"])() // tslint:disable-next-line no-empty
], AccountSelectorvue_type_script_lang_ts_AccountSelector.prototype, "switchLogin", null);

AccountSelectorvue_type_script_lang_ts_AccountSelector = __decorate([Object(external_vue_property_decorator_["Component"])({
  components: {
    AccountList: components_AccountList,
    PageHeader: components_PageHeader,
    PageFooter: components_PageFooter
  }
})], AccountSelectorvue_type_script_lang_ts_AccountSelector);
/* harmony default export */ var AccountSelectorvue_type_script_lang_ts_ = (AccountSelectorvue_type_script_lang_ts_AccountSelector);
// CONCATENATED MODULE: ./src/components/AccountSelector.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_AccountSelectorvue_type_script_lang_ts_ = (AccountSelectorvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./src/components/AccountSelector.vue?vue&type=style&index=0&id=5eaf2fc4&scoped=true&lang=css&
var AccountSelectorvue_type_style_index_0_id_5eaf2fc4_scoped_true_lang_css_ = __webpack_require__("1c22");

// CONCATENATED MODULE: ./src/components/AccountSelector.vue






/* normalize component */

var AccountSelector_component = normalizeComponent(
  components_AccountSelectorvue_type_script_lang_ts_,
  AccountSelectorvue_type_template_id_5eaf2fc4_scoped_true_render,
  AccountSelectorvue_type_template_id_5eaf2fc4_scoped_true_staticRenderFns,
  false,
  null,
  "5eaf2fc4",
  null
  
)

/* harmony default export */ var components_AccountSelector = (AccountSelector_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"/home/soeren/nimiq/vue-components/node_modules/.cache/vue-loader","cacheIdentifier":"61e0acba-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Address.vue?vue&type=template&id=dcc1451a&scoped=true&
var Addressvue_type_template_id_dcc1451a_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"address",on:{"click":_vm.copy}},[_c('span',[_vm._v(_vm._s(_vm.address ? _vm.address.toUserFriendlyAddress() : 'Invalid address'))]),_c('div',{staticClass:"copied-cover"},[_vm._v("Copied!")])])}
var Addressvue_type_template_id_dcc1451a_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Address.vue?vue&type=template&id=dcc1451a&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--13-1!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Address.vue?vue&type=script&lang=ts&








var Addressvue_type_script_lang_ts_Address =
/*#__PURE__*/
function (_Vue) {
  function Address() {
    _classCallCheck(this, Address);

    return _possibleConstructorReturn(this, _getPrototypeOf(Address).apply(this, arguments));
  }

  _createClass(Address, [{
    key: "copy",
    value: function copy() {
      var _this = this;

      var selection = window.getSelection();
      var range = document.createRange();
      range.selectNodeContents(this.$el.querySelector('span'));
      selection.removeAllRanges();
      selection.addRange(range);

      try {
        document.execCommand('copy');
        selection.removeAllRanges();
        this.$el.classList.add('copied');
        setTimeout(function () {
          return _this.$el.classList.remove('copied');
        }, 400);
      } catch (e) {
        console.error(e); // eslint-disable-line no-console
      }
    }
  }]);

  _inherits(Address, _Vue);

  return Address;
}(external_vue_property_decorator_["Vue"]);

__decorate([Object(external_vue_property_decorator_["Prop"])(Nimiq.Address)], Addressvue_type_script_lang_ts_Address.prototype, "address", void 0);

Addressvue_type_script_lang_ts_Address = __decorate([external_vue_property_decorator_["Component"]], Addressvue_type_script_lang_ts_Address);
/* harmony default export */ var Addressvue_type_script_lang_ts_ = (Addressvue_type_script_lang_ts_Address);
// CONCATENATED MODULE: ./src/components/Address.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_Addressvue_type_script_lang_ts_ = (Addressvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./src/components/Address.vue?vue&type=style&index=0&id=dcc1451a&scoped=true&lang=css&
var Addressvue_type_style_index_0_id_dcc1451a_scoped_true_lang_css_ = __webpack_require__("9ad1");

// CONCATENATED MODULE: ./src/components/Address.vue






/* normalize component */

var Address_component = normalizeComponent(
  components_Addressvue_type_script_lang_ts_,
  Addressvue_type_template_id_dcc1451a_scoped_true_render,
  Addressvue_type_template_id_dcc1451a_scoped_true_staticRenderFns,
  false,
  null,
  "dcc1451a",
  null
  
)

/* harmony default export */ var components_Address = (Address_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"/home/soeren/nimiq/vue-components/node_modules/.cache/vue-loader","cacheIdentifier":"61e0acba-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/AmountWithDetails.vue?vue&type=template&id=0c1c5a62&scoped=true&
var AmountWithDetailsvue_type_template_id_0c1c5a62_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',{staticClass:"amount-with-details"},[_c('span',{staticClass:"drop-link",on:{"click":_vm.toggleDetails}},[_c('Amount',{staticClass:"total-amount",attrs:{"amount":_vm.amount + _vm.networkFee,"decimals":_vm.decimals}}),(!_vm.showDetails)?_c('span',[_vm._v("⏷")]):_vm._e(),(_vm.showDetails)?_c('span',[_vm._v("⏶")]):_vm._e()],1),(_vm.showDetails)?_c('div',{staticClass:"info-box"},[_c('div',{staticClass:"info-rows"},[_c('div',{staticClass:"item-description"},[_vm._v("Transferred amount:")]),_c('div',{staticClass:"item-value"},[_c('Amount',{attrs:{"amount":_vm.amount,"decimals":_vm.decimals,"showApprox":""}})],1),_c('div',{staticClass:"item-options"}),_c('div',{staticClass:"item-description fee"},[_vm._v("Network fee:")]),_c('div',{staticClass:"item-value"},[_c('Amount',{attrs:{"amount":_vm.networkFee,"decimals":_vm.decimals,"showApprox":""}})],1),_c('div',{staticClass:"item-options"},[(_vm.networkFeeEditable)?_c('span',{staticClass:"icon"},[_vm._v("edit")]):_vm._e()])]),_c('div',{staticClass:"total-sum info-rows"},[_c('span',{staticClass:"item-description"},[_vm._v("Total amount:")]),_c('Amount',{staticClass:"total-amount",attrs:{"amount":_vm.amount + _vm.networkFee,"decimals":_vm.decimals,"showApprox":""}})],1)]):_vm._e()])}
var AmountWithDetailsvue_type_template_id_0c1c5a62_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/AmountWithDetails.vue?vue&type=template&id=0c1c5a62&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--13-1!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/AmountWithDetails.vue?vue&type=script&lang=ts&










var AmountWithDetailsvue_type_script_lang_ts_AmountWithDetails =
/*#__PURE__*/
function (_Vue) {
  function AmountWithDetails() {
    var _this;

    _classCallCheck(this, AmountWithDetails);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(AmountWithDetails).apply(this, arguments));
    _this.showDetails = false;
    _this.isEditing = false;
    return _this;
  }

  _createClass(AmountWithDetails, [{
    key: "toggleDetails",
    value: function toggleDetails() {
      this.showDetails = !this.showDetails;
    }
  }]);

  _inherits(AmountWithDetails, _Vue);

  return AmountWithDetails;
}(external_vue_property_decorator_["Vue"]);

__decorate([Object(external_vue_property_decorator_["Prop"])(Number)], AmountWithDetailsvue_type_script_lang_ts_AmountWithDetails.prototype, "amount", void 0);

__decorate([Object(external_vue_property_decorator_["Prop"])(Number)], AmountWithDetailsvue_type_script_lang_ts_AmountWithDetails.prototype, "networkFee", void 0);

__decorate([Object(external_vue_property_decorator_["Prop"])({
  type: Boolean,
  default: false
})], AmountWithDetailsvue_type_script_lang_ts_AmountWithDetails.prototype, "networkFeeEditable", void 0);

__decorate([Object(external_vue_property_decorator_["Prop"])({
  type: Number,
  default: 2,
  validator: function validator(value) {
    return value >= 0 && value <= 5;
  }
})], AmountWithDetailsvue_type_script_lang_ts_AmountWithDetails.prototype, "decimals", void 0);

AmountWithDetailsvue_type_script_lang_ts_AmountWithDetails = __decorate([Object(external_vue_property_decorator_["Component"])({
  components: {
    Amount: components_Amount
  }
})], AmountWithDetailsvue_type_script_lang_ts_AmountWithDetails);
/* harmony default export */ var AmountWithDetailsvue_type_script_lang_ts_ = (AmountWithDetailsvue_type_script_lang_ts_AmountWithDetails);
// CONCATENATED MODULE: ./src/components/AmountWithDetails.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_AmountWithDetailsvue_type_script_lang_ts_ = (AmountWithDetailsvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./src/components/AmountWithDetails.vue?vue&type=style&index=0&id=0c1c5a62&scoped=true&lang=css&
var AmountWithDetailsvue_type_style_index_0_id_0c1c5a62_scoped_true_lang_css_ = __webpack_require__("c15b");

// CONCATENATED MODULE: ./src/components/AmountWithDetails.vue






/* normalize component */

var AmountWithDetails_component = normalizeComponent(
  components_AmountWithDetailsvue_type_script_lang_ts_,
  AmountWithDetailsvue_type_template_id_0c1c5a62_scoped_true_render,
  AmountWithDetailsvue_type_template_id_0c1c5a62_scoped_true_staticRenderFns,
  false,
  null,
  "0c1c5a62",
  null
  
)

/* harmony default export */ var components_AmountWithDetails = (AmountWithDetails_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"/home/soeren/nimiq/vue-components/node_modules/.cache/vue-loader","cacheIdentifier":"61e0acba-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Contact.vue?vue&type=template&id=d97584b4&
var Contactvue_type_template_id_d97584b4_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"contact",on:{"click":_vm.select}},[_c('Identicon',{attrs:{"address":_vm.isEditing ? _vm.workingNimiqAddress() : _vm.address}}),(!_vm.isEditing)?_c('div',{staticClass:"info"},[_c('span',{staticClass:"label"},[_vm._v(_vm._s(_vm.label))]),_c('Address',{attrs:{"address":_vm.address}}),(_vm.showOptions)?_c('div',{staticClass:"bottom"},[_c('button',{staticClass:"small secondary",attrs:{"title":"Edit contact"},on:{"click":function($event){$event.stopPropagation();return _vm.edit($event)}}},[_c('i',{staticClass:"material-icons"},[_vm._v("edit")])]),_c('button',{staticClass:"small secondary remove",attrs:{"title":"Delete contact"},on:{"click":function($event){$event.stopPropagation();return _vm.remove($event)}}},[_c('i',{staticClass:"material-icons"},[_vm._v("delete")])])]):_vm._e()],1):_vm._e(),(_vm.isEditing)?_c('div',{staticClass:"info"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.workingLabel),expression:"workingLabel"}],ref:"labelInput",staticClass:"label",attrs:{"type":"text","placeholder":"Name"},domProps:{"value":(_vm.workingLabel)},on:{"input":function($event){if($event.target.composing){ return; }_vm.workingLabel=$event.target.value}}}),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.workingAddress),expression:"workingAddress"}],staticClass:"address-input",attrs:{"type":"text","placeholder":"Address"},domProps:{"value":(_vm.workingAddress)},on:{"input":function($event){if($event.target.composing){ return; }_vm.workingAddress=$event.target.value}}}),_c('div',{staticClass:"bottom"},[_c('button',{staticClass:"small secondary save",attrs:{"disabled":!_vm.isInputValid(),"title":"Save changes"},on:{"click":function($event){$event.stopPropagation();return _vm.save($event)}}},[_c('i',{staticClass:"material-icons"},[_vm._v("check")])]),_c('button',{staticClass:"small secondary",attrs:{"title":"Abort"},on:{"click":function($event){$event.stopPropagation();return _vm.abort($event)}}},[_c('i',{staticClass:"material-icons"},[_vm._v("close")])])])]):_vm._e()],1)}
var Contactvue_type_template_id_d97584b4_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Contact.vue?vue&type=template&id=d97584b4&

// CONCATENATED MODULE: ./node_modules/@nimiq/secure-utils/validation-utils/validation-utils.js
class ValidationUtils {
    static isValidAddress(address) {
        if (!address) return false;
        try {
            this.isUserFriendlyAddress(address);
            return true;
        } catch (e) {
            return false;
        }
    }

    // Copied from: https://github.com/nimiq-network/core/blob/master/src/main/generic/consensus/base/account/Address.js

    static isUserFriendlyAddress(str) {
        if (!str) return;

        str = str.replace(/ /g, '');
        if (str.substr(0, 2).toUpperCase() !== 'NQ') {
            throw new Error('Addresses start with NQ', 201);
        }
        if (str.length !== 36) {
            throw new Error('Addresses are 36 chars (ignoring spaces)', 202);
        }
        if (this._ibanCheck(str.substr(4) + str.substr(0, 4)) !== 1) {
            throw new Error('Address Checksum invalid', 203);
        }
    }

    static _ibanCheck(str) {
        const num = str.split('').map((c) => {
            const code = c.toUpperCase().charCodeAt(0);
            return code >= 48 && code <= 57 ? c : (code - 55).toString();
        }).join('');
        let tmp = '';

        for (let i = 0; i < Math.ceil(num.length / 6); i++) {
            tmp = (parseInt(tmp + num.substr(i * 6, 6)) % 97).toString();
        }

        return parseInt(tmp);
    }

    static isValidHash(hash) {
        // not using Nimiq Api here to don't require it to be loaded already
        try {
            return atob(hash).length === 32;
        } catch(e) {
            return false;
        }
    }
}
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--13-1!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Contact.vue?vue&type=script&lang=ts&











var Contactvue_type_script_lang_ts_Contact =
/*#__PURE__*/
function (_Vue) {
  function Contact() {
    var _this;

    _classCallCheck(this, Contact);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Contact).apply(this, arguments));
    _this.isEditing = false;
    _this.workingLabel = '';
    _this.workingAddress = '';
    return _this;
  }

  _createClass(Contact, [{
    key: "isInputValid",
    value: function isInputValid() {
      return this.workingLabel && ValidationUtils.isValidAddress(this.workingAddress);
    }
  }, {
    key: "workingNimiqAddress",
    value: function workingNimiqAddress() {
      try {
        return Nimiq.Address.fromUserFriendlyAddress(this.workingAddress);
      } catch (e) {
        return null;
      }
    }
  }, {
    key: "select",
    value: function select() {
      if (this.isEditing) return;
      this.$emit('select', this.address);
    }
  }, {
    key: "edit",
    value: function edit() {
      var _this2 = this;

      this.workingLabel = this.label;
      this.workingAddress = this.address.toUserFriendlyAddress();
      this.isEditing = true; // Wait for DOM to update

      external_vue_property_decorator_["Vue"].nextTick(function () {
        var labelInput = _this2.$refs.labelInput;
        labelInput.select();
        labelInput.focus();
      });
    }
  }, {
    key: "save",
    value: function save() {
      var address = Nimiq.Address.fromUserFriendlyAddress(this.workingAddress);
      var label = this.workingLabel.trim();

      if (!this.address.equals(address) || this.label !== label) {
        this.$emit('change', {
          label: this.label,
          address: this.address
        }, {
          label: label,
          address: address
        });
      }

      this.abort();
    }
  }, {
    key: "abort",
    value: function abort() {
      this.isEditing = false;
    }
  }, {
    key: "remove",
    value: function remove() {
      var confirmRemove = confirm("Delete this contact: ".concat(this.label, " (").concat(this.address, ")?"));
      if (confirmRemove) this.$emit('delete', this.address);
    }
  }]);

  _inherits(Contact, _Vue);

  return Contact;
}(external_vue_property_decorator_["Vue"]);

__decorate([Object(external_vue_property_decorator_["Prop"])(Nimiq.Address)], Contactvue_type_script_lang_ts_Contact.prototype, "address", void 0);

__decorate([Object(external_vue_property_decorator_["Prop"])(String)], Contactvue_type_script_lang_ts_Contact.prototype, "label", void 0);

__decorate([Object(external_vue_property_decorator_["Prop"])(Boolean)], Contactvue_type_script_lang_ts_Contact.prototype, "showOptions", void 0);

Contactvue_type_script_lang_ts_Contact = __decorate([Object(external_vue_property_decorator_["Component"])({
  components: {
    Identicon: components_Identicon,
    Address: components_Address
  }
})], Contactvue_type_script_lang_ts_Contact);
/* harmony default export */ var Contactvue_type_script_lang_ts_ = (Contactvue_type_script_lang_ts_Contact);
// CONCATENATED MODULE: ./src/components/Contact.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_Contactvue_type_script_lang_ts_ = (Contactvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./src/components/Contact.vue?vue&type=style&index=0&lang=css&
var Contactvue_type_style_index_0_lang_css_ = __webpack_require__("610c");

// CONCATENATED MODULE: ./src/components/Contact.vue






/* normalize component */

var Contact_component = normalizeComponent(
  components_Contactvue_type_script_lang_ts_,
  Contactvue_type_template_id_d97584b4_render,
  Contactvue_type_template_id_d97584b4_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var components_Contact = (Contact_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"/home/soeren/nimiq/vue-components/node_modules/.cache/vue-loader","cacheIdentifier":"61e0acba-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/ContactList.vue?vue&type=template&id=1b548db1&
var ContactListvue_type_template_id_1b548db1_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"contact-list"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.searchTerm),expression:"searchTerm"}],ref:"search",staticClass:"search-field",attrs:{"type":"text","placeholder":"Search..."},domProps:{"value":(_vm.searchTerm)},on:{"input":function($event){if($event.target.composing){ return; }_vm.searchTerm=$event.target.value}}}),_c('i',{staticClass:"material-icons search-icon"},[_vm._v("search")]),(_vm.searchTerm)?_c('a',{staticClass:"material-icons search-clear",attrs:{"href":"#","title":"Clear search"},on:{"click":function($event){$event.preventDefault();return _vm.clearSearch($event)}}},[_vm._v("clear")]):_vm._e(),_c('div',{staticClass:"list"},[(_vm.isAddingNewContact)?_c('span',[_vm._v("New contact:")]):_vm._e(),(_vm.isAddingNewContact)?_c('NewContact',{ref:"newContact",attrs:{"abort-action":_vm.abortNewContact}}):_vm._e(),_vm._l((_vm.filteredContacts),function(contact){return _c('Contact',{key:contact.address,attrs:{"address":contact.address,"label":contact.label,"show-options":_vm.isManaging},on:{"change":_vm.changeContact,"delete":_vm.deleteContact}})}),(!_vm.filteredContacts.length && !_vm.searchTerm)?_c('div',{staticClass:"no-contacts"},[_c('i',{staticClass:"material-icons"},[_vm._v("face")]),_vm._v("\n            Use the menu to add contacts\n        ")]):_vm._e(),(!_vm.filteredContacts.length && _vm.searchTerm)?_c('div',{staticClass:"no-contacts"},[_c('i',{staticClass:"material-icons"},[_vm._v("face")]),_vm._v("\n            No matches found\n        ")]):_vm._e()],2),_c('label',{ref:"importLabel",staticClass:"file-import"},[_c('input',{ref:"importInput",attrs:{"type":"file"},on:{"change":_vm.loadFile}})])])}
var ContactListvue_type_template_id_1b548db1_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/ContactList.vue?vue&type=template&id=1b548db1&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.search.js
var es6_regexp_search = __webpack_require__("386d");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es7.array.includes.js
var es7_array_includes = __webpack_require__("6762");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.string.includes.js
var es6_string_includes = __webpack_require__("2fdb");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es7.symbol.async-iterator.js
var es7_symbol_async_iterator = __webpack_require__("ac4d");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.symbol.js
var es6_symbol = __webpack_require__("8a81");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom.iterable.js
var web_dom_iterable = __webpack_require__("ac6a");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"/home/soeren/nimiq/vue-components/node_modules/.cache/vue-loader","cacheIdentifier":"61e0acba-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/NewContact.vue?vue&type=template&id=76a2afa0&
var NewContactvue_type_template_id_76a2afa0_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"contact"},[_c('Identicon',{attrs:{"address":_vm.workingAddress}}),_c('div',{staticClass:"info"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.workingLabel),expression:"workingLabel"}],ref:"labelInput",staticClass:"label",attrs:{"type":"text","placeholder":"Name"},domProps:{"value":(_vm.workingLabel)},on:{"input":function($event){if($event.target.composing){ return; }_vm.workingLabel=$event.target.value}}}),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.workingAddress),expression:"workingAddress"}],staticClass:"address-input",attrs:{"type":"text","placeholder":"Address"},domProps:{"value":(_vm.workingAddress)},on:{"input":function($event){if($event.target.composing){ return; }_vm.workingAddress=$event.target.value}}}),_c('div',{staticClass:"bottom"},[_c('button',{staticClass:"small secondary save",attrs:{"disabled":!_vm.isInputValid,"title":"Save changes"},on:{"click":function($event){$event.stopPropagation();return _vm.save($event)}}},[_c('i',{staticClass:"material-icons"},[_vm._v("check")])]),_c('button',{staticClass:"small secondary",attrs:{"title":"Abort"},on:{"click":function($event){$event.stopPropagation();return _vm.abort($event)}}},[_c('i',{staticClass:"material-icons"},[_vm._v("close")])])])])],1)}
var NewContactvue_type_template_id_76a2afa0_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/NewContact.vue?vue&type=template&id=76a2afa0&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--13-1!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/NewContact.vue?vue&type=script&lang=ts&











var NewContactvue_type_script_lang_ts_NewContact =
/*#__PURE__*/
function (_Vue) {
  function NewContact() {
    var _this;

    _classCallCheck(this, NewContact);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(NewContact).apply(this, arguments));
    _this.workingLabel = '';
    _this.workingAddress = '';
    return _this;
  }

  _createClass(NewContact, [{
    key: "edit",
    value: function edit() {
      this.workingLabel = '';
      this.workingAddress = '';
      var labelInput = this.$refs.labelInput;
      labelInput.focus();
    }
  }, {
    key: "setContactAction",
    value: function setContactAction(label, address) {}
  }, {
    key: "abortAction",
    value: function abortAction() {}
  }, {
    key: "isInputValid",
    value: function isInputValid() {
      return this.workingLabel && ValidationUtils.isValidAddress(this.workingAddress);
    }
  }, {
    key: "save",
    value: function save() {
      var address = Nimiq.Address.fromUserFriendlyAddress(this.workingAddress); // Update or set contact info

      this.setContactAction(this.workingLabel, address); // TODO: this.$toast.success('Contact saved.');

      this.edit();
    }
  }, {
    key: "abort",
    value: function abort() {
      this.abortAction();
    }
  }]);

  _inherits(NewContact, _Vue);

  return NewContact;
}(external_vue_property_decorator_["Vue"]);

__decorate([Object(external_vue_property_decorator_["Emit"])() // tslint:disable-next-line
], NewContactvue_type_script_lang_ts_NewContact.prototype, "setContactAction", null);

__decorate([Object(external_vue_property_decorator_["Emit"])() // tslint:disable-next-line
], NewContactvue_type_script_lang_ts_NewContact.prototype, "abortAction", null);

NewContactvue_type_script_lang_ts_NewContact = __decorate([Object(external_vue_property_decorator_["Component"])({
  components: {
    Identicon: components_Identicon,
    Address: components_Address
  }
})], NewContactvue_type_script_lang_ts_NewContact);
/* harmony default export */ var NewContactvue_type_script_lang_ts_ = (NewContactvue_type_script_lang_ts_NewContact);
// CONCATENATED MODULE: ./src/components/NewContact.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_NewContactvue_type_script_lang_ts_ = (NewContactvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./src/components/NewContact.vue?vue&type=style&index=0&lang=css&
var NewContactvue_type_style_index_0_lang_css_ = __webpack_require__("17ea");

// CONCATENATED MODULE: ./src/components/NewContact.vue






/* normalize component */

var NewContact_component = normalizeComponent(
  components_NewContactvue_type_script_lang_ts_,
  NewContactvue_type_template_id_76a2afa0_render,
  NewContactvue_type_template_id_76a2afa0_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var components_NewContact = (NewContact_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--13-1!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/ContactList.vue?vue&type=script&lang=ts&
















var ContactListvue_type_script_lang_ts_ContactList =
/*#__PURE__*/
function (_Vue) {
  function ContactList() {
    var _this;

    _classCallCheck(this, ContactList);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ContactList).apply(this, arguments));
    _this.searchTerm = '';
    _this.isManaging = false;
    _this.isAddingNewContact = false;
    return _this;
  }

  _createClass(ContactList, [{
    key: "setContact",
    value: function setContact(label, address) {}
  }, {
    key: "removeContact",
    value: function removeContact(address) {}
  }, {
    key: "filteredContacts",
    value: function filteredContacts() {
      var searchTerm = this.searchTerm.trim().toLowerCase();
      if (!searchTerm) return this.contacts;
      var result = [];
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.contacts[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var contact = _step.value;

          if (contact.label.toLowerCase().includes(searchTerm)) {
            result.push(contact);
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return result;
    }
  }, {
    key: "reset",
    value: function reset() {
      this.isManaging = false;
      this.isAddingNewContact = false;
      this.clearSearch();
    }
  }, {
    key: "changeContact",
    value: function changeContact(old, nue) {
      this.setContact(nue.label, nue.address);
      if (old.address !== nue.address) this.removeContact(old.address);
    }
  }, {
    key: "deleteContact",
    value: function deleteContact(oldAddress) {
      this.removeContact(oldAddress);
    }
  }, {
    key: "clearSearch",
    value: function clearSearch() {
      this.searchTerm = '';
      var search = this.$refs.search;
      search.focus();
    }
  }, {
    key: "toggleManaging",
    value: function toggleManaging() {
      this.isManaging = !this.isManaging;
    }
  }, {
    key: "addNewContact",
    value: function addNewContact() {
      var _this2 = this;

      this.isAddingNewContact = true;
      external_vue_property_decorator_["Vue"].nextTick(function () {
        var newContact = _this2.$refs.newContact;
        newContact.edit();
      });
    }
  }, {
    key: "abortNewContact",
    value: function abortNewContact() {
      this.isAddingNewContact = false;
    }
  }, {
    key: "export",
    value: function _export() {
      /* TODO
      const text = JSON.stringify(Object.values(this.contacts));
       // From https://stackoverflow.com/a/18197341/4204380
      const element = document.createElement('a');
      element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
      element.setAttribute('download', 'Nimiq-Safe-Contacts.json');
      element.style.display = 'none';
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
      */
    }
  }, {
    key: "import",
    value: function _import() {// TODO this.$refs.importLabel.click();
    }
  }, {
    key: "loadFile",
    value: function loadFile(event) {
      /* TODO
      const file = event.target.files[0];
      if (!file) return;
       const reader = new FileReader();
      reader.onload = (e) => this.readFile(e.target.result);
      reader.readAsText(file);
      */
    }
  }, {
    key: "readFile",
    value: function readFile(data) {
      /* TODO
      // Reset file input
      this.$refs.importInput.value = '';
       let importedContacts = [];
      try {
          importedContacts = JSON.parse(data);
      } catch (e) {
          this.$toast.error('Cannot import file, wrong format.');
          return;
      }
       // Make sure the input is a non-empty array
      if (!importedContacts.length) {
          this.$toast.error('Cannot import file, wrong format.');
          return;
      }
       for (const newContact of importedContacts) {
          if (!newContact.label || !newContact.address) continue;
           const storedContact = this.contacts[newContact.address];
          if (storedContact) {
              if (storedContact.label === newContact.label) continue;
              else {
                  const shouldOverwrite = confirm(
                      `A contact with the address "${storedContact.address}", but a different name already exists.
      \nDo you want to override it?`);
                  if (!shouldOverwrite) continue;
              }
          }
           this.actions.setContact(newContact.label, newContact.address);
      }
       this.$toast.success('Contact import finished.');
      */
    }
  }]);

  _inherits(ContactList, _Vue);

  return ContactList;
}(external_vue_property_decorator_["Vue"]);

__decorate([Object(external_vue_property_decorator_["Prop"])(Array)], ContactListvue_type_script_lang_ts_ContactList.prototype, "contacts", void 0);

__decorate([Object(external_vue_property_decorator_["Emit"])() // tslint:disable-next-line
], ContactListvue_type_script_lang_ts_ContactList.prototype, "setContact", null);

__decorate([Object(external_vue_property_decorator_["Emit"])() // tslint:disable-next-line
], ContactListvue_type_script_lang_ts_ContactList.prototype, "removeContact", null);

ContactListvue_type_script_lang_ts_ContactList = __decorate([Object(external_vue_property_decorator_["Component"])({
  components: {
    Contact: components_Contact,
    NewContact: components_NewContact
  }
})], ContactListvue_type_script_lang_ts_ContactList);
/* harmony default export */ var ContactListvue_type_script_lang_ts_ = (ContactListvue_type_script_lang_ts_ContactList);
// CONCATENATED MODULE: ./src/components/ContactList.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_ContactListvue_type_script_lang_ts_ = (ContactListvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./src/components/ContactList.vue?vue&type=style&index=0&lang=css&
var ContactListvue_type_style_index_0_lang_css_ = __webpack_require__("609a");

// CONCATENATED MODULE: ./src/components/ContactList.vue






/* normalize component */

var ContactList_component = normalizeComponent(
  components_ContactListvue_type_script_lang_ts_,
  ContactListvue_type_template_id_1b548db1_render,
  ContactListvue_type_template_id_1b548db1_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var components_ContactList = (ContactList_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"/home/soeren/nimiq/vue-components/node_modules/.cache/vue-loader","cacheIdentifier":"61e0acba-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Login.vue?vue&type=template&id=1f9c79d5&scoped=true&
var Loginvue_type_template_id_1f9c79d5_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"login"},[_c('div',{staticClass:"login-icon",class:_vm.loginIconClass}),(_vm.label)?_c('div',{staticClass:"login-description"},[_c('div',{staticClass:"label"},[_vm._v(_vm._s(_vm.label))]),_c('div',{staticClass:"number-accounts"},[_vm._v(_vm._s(_vm.numberAccounts)+" Accounts")])]):_vm._e(),(_vm.showArrow)?_c('div',{staticClass:"icon-chevron-right"}):_vm._e()])}
var Loginvue_type_template_id_1f9c79d5_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Login.vue?vue&type=template&id=1f9c79d5&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--13-1!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Login.vue?vue&type=script&lang=ts&









var Loginvue_type_script_lang_ts_Login =
/*#__PURE__*/
function (_Vue) {
  function Login() {
    _classCallCheck(this, Login);

    return _possibleConstructorReturn(this, _getPrototypeOf(Login).apply(this, arguments));
  }

  _createClass(Login, [{
    key: "loginIconClass",
    get: function get() {
      switch (this.type) {
        case 0:
          return 'keyguard';
        // Legacy

        case 1:
          return 'keyguard';

        case 2:
          return 'ledger';
      }
    }
  }]);

  _inherits(Login, _Vue);

  return Login;
}(external_vue_property_decorator_["Vue"]);

__decorate([Object(external_vue_property_decorator_["Prop"])(String)], Loginvue_type_script_lang_ts_Login.prototype, "id", void 0);

__decorate([Object(external_vue_property_decorator_["Prop"])(String)], Loginvue_type_script_lang_ts_Login.prototype, "label", void 0);

__decorate([Object(external_vue_property_decorator_["Prop"])(Number)], Loginvue_type_script_lang_ts_Login.prototype, "numberAccounts", void 0);

__decorate([Object(external_vue_property_decorator_["Prop"])(Number)], Loginvue_type_script_lang_ts_Login.prototype, "type", void 0);

__decorate([Object(external_vue_property_decorator_["Prop"])({
  type: Boolean,
  default: false
})], Loginvue_type_script_lang_ts_Login.prototype, "showArrow", void 0);

Loginvue_type_script_lang_ts_Login = __decorate([external_vue_property_decorator_["Component"]], Loginvue_type_script_lang_ts_Login);
/* harmony default export */ var Loginvue_type_script_lang_ts_ = (Loginvue_type_script_lang_ts_Login);
// CONCATENATED MODULE: ./src/components/Login.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_Loginvue_type_script_lang_ts_ = (Loginvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./src/components/Login.vue?vue&type=style&index=0&id=1f9c79d5&scoped=true&lang=css&
var Loginvue_type_style_index_0_id_1f9c79d5_scoped_true_lang_css_ = __webpack_require__("d4c8");

// CONCATENATED MODULE: ./src/components/Login.vue






/* normalize component */

var Login_component = normalizeComponent(
  components_Loginvue_type_script_lang_ts_,
  Loginvue_type_template_id_1f9c79d5_scoped_true_render,
  Loginvue_type_template_id_1f9c79d5_scoped_true_staticRenderFns,
  false,
  null,
  "1f9c79d5",
  null
  
)

/* harmony default export */ var components_Login = (Login_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"/home/soeren/nimiq/vue-components/node_modules/.cache/vue-loader","cacheIdentifier":"61e0acba-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/LoginList.vue?vue&type=template&id=aae788fe&scoped=true&
var LoginListvue_type_template_id_aae788fe_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"login-list"},_vm._l((_vm.logins),function(login){return _c('div',{key:login.id,staticClass:"login-entry",on:{"click":function($event){_vm.loginSelected(login.id)}}},[_c('Login',{attrs:{"id":login.id,"label":login.label,"numberAccounts":login.addresses.size + login.contracts.length,"type":login.type,"show-arrow":_vm.showArrows}})],1)}))}
var LoginListvue_type_template_id_aae788fe_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/LoginList.vue?vue&type=template&id=aae788fe&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--13-1!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/LoginList.vue?vue&type=script&lang=ts&









var LoginListvue_type_script_lang_ts_LoginList =
/*#__PURE__*/
function (_Vue) {
  function LoginList() {
    _classCallCheck(this, LoginList);

    return _possibleConstructorReturn(this, _getPrototypeOf(LoginList).apply(this, arguments));
  }

  _createClass(LoginList, [{
    key: "loginSelected",
    value: function loginSelected(id) {}
  }]);

  _inherits(LoginList, _Vue);

  return LoginList;
}(external_vue_property_decorator_["Vue"]);

__decorate([Object(external_vue_property_decorator_["Prop"])(Array)], LoginListvue_type_script_lang_ts_LoginList.prototype, "logins", void 0);

__decorate([Object(external_vue_property_decorator_["Prop"])({
  type: Boolean,
  default: false
})], LoginListvue_type_script_lang_ts_LoginList.prototype, "showArrows", void 0);

__decorate([Object(external_vue_property_decorator_["Emit"])() // tslint:disable-next-line no-empty
], LoginListvue_type_script_lang_ts_LoginList.prototype, "loginSelected", null);

LoginListvue_type_script_lang_ts_LoginList = __decorate([Object(external_vue_property_decorator_["Component"])({
  components: {
    Login: components_Login
  }
})], LoginListvue_type_script_lang_ts_LoginList);
/* harmony default export */ var LoginListvue_type_script_lang_ts_ = (LoginListvue_type_script_lang_ts_LoginList);
// CONCATENATED MODULE: ./src/components/LoginList.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_LoginListvue_type_script_lang_ts_ = (LoginListvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./src/components/LoginList.vue?vue&type=style&index=0&id=aae788fe&scoped=true&lang=css&
var LoginListvue_type_style_index_0_id_aae788fe_scoped_true_lang_css_ = __webpack_require__("f49a");

// CONCATENATED MODULE: ./src/components/LoginList.vue






/* normalize component */

var LoginList_component = normalizeComponent(
  components_LoginListvue_type_script_lang_ts_,
  LoginListvue_type_template_id_aae788fe_scoped_true_render,
  LoginListvue_type_template_id_aae788fe_scoped_true_staticRenderFns,
  false,
  null,
  "aae788fe",
  null
  
)

/* harmony default export */ var components_LoginList = (LoginList_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"/home/soeren/nimiq/vue-components/node_modules/.cache/vue-loader","cacheIdentifier":"61e0acba-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/LoginSelector.vue?vue&type=template&id=9d37acb8&scoped=true&
var LoginSelectorvue_type_template_id_9d37acb8_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"login-selector"},[_c('PageHeader',{attrs:{"back-arrow":""},on:{"back":function($event){_vm.$emit('back')}}},[_vm._v("\n        "+_vm._s(_vm.title)+"\n    ")]),_c('div',{staticClass:"page-body"},[_c('LoginList',{attrs:{"logins":_vm.walletLogins,"show-arrows":""},on:{"login-selected":_vm.loginSelected}}),_c('AccountList',{attrs:{"accounts":_vm.legacyAccounts},on:{"account-selected":_vm.accountSelected}})],1),(_vm.showAddLogin)?_c('PageFooter',{nativeOn:{"click":function($event){return _vm.addLogin($event)}}},[_c('div',{staticClass:"icon-plus-circle"}),_c('div',[_vm._v("Add Wallet")])]):_vm._e()],1)}
var LoginSelectorvue_type_template_id_9d37acb8_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/LoginSelector.vue?vue&type=template&id=9d37acb8&scoped=true&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.iterator.js
var es6_array_iterator = __webpack_require__("cadf");

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/builtin/es6/defineProperty.js
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/builtin/es6/objectSpread.js

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--13-1!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/LoginSelector.vue?vue&type=script&lang=ts&















var LoginSelectorvue_type_script_lang_ts_LoginSelector =
/*#__PURE__*/
function (_Vue) {
  function LoginSelector() {
    _classCallCheck(this, LoginSelector);

    return _possibleConstructorReturn(this, _getPrototypeOf(LoginSelector).apply(this, arguments));
  }

  _createClass(LoginSelector, [{
    key: "loginSelected",
    value: function loginSelected(address) {}
  }, {
    key: "accountSelected",
    value: function accountSelected(address) {}
  }, {
    key: "addLogin",
    value: function addLogin() {
      console.log('adding-login, login-selector');
    }
  }, {
    key: "walletLogins",
    get: function get() {
      return this.logins.filter(function (login) {
        return login.type !== 0;
      }); // Return only non-legacy wallets
    }
  }, {
    key: "legacyAccounts",
    get: function get() {
      var legacyLogins = this.logins.filter(function (login) {
        return login.type === 0;
      }); // Filter legacy wallets

      return legacyLogins.map(function (login) {
        return _objectSpread({}, login.addresses.values().next().value, {
          loginId: login.id
        });
      });
    }
  }]);

  _inherits(LoginSelector, _Vue);

  return LoginSelector;
}(external_vue_property_decorator_["Vue"]);

__decorate([Object(external_vue_property_decorator_["Prop"])(Array)], LoginSelectorvue_type_script_lang_ts_LoginSelector.prototype, "logins", void 0);

__decorate([Object(external_vue_property_decorator_["Prop"])({
  type: String,
  default: 'Select Wallet'
})], LoginSelectorvue_type_script_lang_ts_LoginSelector.prototype, "title", void 0);

__decorate([Object(external_vue_property_decorator_["Prop"])({
  type: Boolean,
  default: true
})], LoginSelectorvue_type_script_lang_ts_LoginSelector.prototype, "showAddLogin", void 0);

__decorate([Object(external_vue_property_decorator_["Emit"])() // tslint:disable-next-line no-empty
], LoginSelectorvue_type_script_lang_ts_LoginSelector.prototype, "loginSelected", null);

__decorate([Object(external_vue_property_decorator_["Emit"])() // tslint:disable-next-line no-empty
], LoginSelectorvue_type_script_lang_ts_LoginSelector.prototype, "accountSelected", null);

__decorate([Object(external_vue_property_decorator_["Emit"])()], LoginSelectorvue_type_script_lang_ts_LoginSelector.prototype, "addLogin", null);

LoginSelectorvue_type_script_lang_ts_LoginSelector = __decorate([Object(external_vue_property_decorator_["Component"])({
  components: {
    LoginList: components_LoginList,
    AccountList: components_AccountList,
    PageHeader: components_PageHeader,
    PageFooter: components_PageFooter
  }
})], LoginSelectorvue_type_script_lang_ts_LoginSelector);
/* harmony default export */ var LoginSelectorvue_type_script_lang_ts_ = (LoginSelectorvue_type_script_lang_ts_LoginSelector);
// CONCATENATED MODULE: ./src/components/LoginSelector.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_LoginSelectorvue_type_script_lang_ts_ = (LoginSelectorvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./src/components/LoginSelector.vue?vue&type=style&index=0&id=9d37acb8&scoped=true&lang=css&
var LoginSelectorvue_type_style_index_0_id_9d37acb8_scoped_true_lang_css_ = __webpack_require__("e92e");

// CONCATENATED MODULE: ./src/components/LoginSelector.vue






/* normalize component */

var LoginSelector_component = normalizeComponent(
  components_LoginSelectorvue_type_script_lang_ts_,
  LoginSelectorvue_type_template_id_9d37acb8_scoped_true_render,
  LoginSelectorvue_type_template_id_9d37acb8_scoped_true_staticRenderFns,
  false,
  null,
  "9d37acb8",
  null
  
)

/* harmony default export */ var components_LoginSelector = (LoginSelector_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"/home/soeren/nimiq/vue-components/node_modules/.cache/vue-loader","cacheIdentifier":"61e0acba-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/PaymentInfoLine.vue?vue&type=template&id=3eda95a4&scoped=true&
var PaymentInfoLinevue_type_template_id_3eda95a4_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"info-line"},[_c('div',{staticClass:"description"},[_vm._v("\n        Payment to "),_c('span',{staticClass:"origin"},[_vm._v(_vm._s(_vm.originDomain))])]),_c('Amount',{attrs:{"amount":this.amount + this.networkFee}})],1)}
var PaymentInfoLinevue_type_template_id_3eda95a4_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/PaymentInfoLine.vue?vue&type=template&id=3eda95a4&scoped=true&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.split.js
var es6_regexp_split = __webpack_require__("28a5");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--13-1!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/PaymentInfoLine.vue?vue&type=script&lang=ts&











var PaymentInfoLinevue_type_script_lang_ts_PaymentInfoLine =
/*#__PURE__*/
function (_Vue) {
  function PaymentInfoLine() {
    _classCallCheck(this, PaymentInfoLine);

    return _possibleConstructorReturn(this, _getPrototypeOf(PaymentInfoLine).apply(this, arguments));
  }

  _createClass(PaymentInfoLine, [{
    key: "originDomain",
    get: function get() {
      return this.origin.split('://')[1];
    }
  }]);

  _inherits(PaymentInfoLine, _Vue);

  return PaymentInfoLine;
}(external_vue_property_decorator_["Vue"]);

__decorate([Object(external_vue_property_decorator_["Prop"])(Number)], PaymentInfoLinevue_type_script_lang_ts_PaymentInfoLine.prototype, "amount", void 0);

__decorate([Object(external_vue_property_decorator_["Prop"])(Number)], PaymentInfoLinevue_type_script_lang_ts_PaymentInfoLine.prototype, "networkFee", void 0);

__decorate([Object(external_vue_property_decorator_["Prop"])(Boolean)], PaymentInfoLinevue_type_script_lang_ts_PaymentInfoLine.prototype, "networkFeeEditable", void 0);

__decorate([Object(external_vue_property_decorator_["Prop"])({
  type: Number,
  default: 2,
  validator: function validator(value) {
    return value >= 0 && value <= 5;
  }
})], PaymentInfoLinevue_type_script_lang_ts_PaymentInfoLine.prototype, "decimals", void 0);

__decorate([Object(external_vue_property_decorator_["Prop"])(String)], PaymentInfoLinevue_type_script_lang_ts_PaymentInfoLine.prototype, "origin", void 0);

PaymentInfoLinevue_type_script_lang_ts_PaymentInfoLine = __decorate([Object(external_vue_property_decorator_["Component"])({
  components: {
    Amount: components_Amount
  }
})], PaymentInfoLinevue_type_script_lang_ts_PaymentInfoLine);
/* harmony default export */ var PaymentInfoLinevue_type_script_lang_ts_ = (PaymentInfoLinevue_type_script_lang_ts_PaymentInfoLine);
// CONCATENATED MODULE: ./src/components/PaymentInfoLine.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_PaymentInfoLinevue_type_script_lang_ts_ = (PaymentInfoLinevue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./src/components/PaymentInfoLine.vue?vue&type=style&index=0&id=3eda95a4&scoped=true&lang=css&
var PaymentInfoLinevue_type_style_index_0_id_3eda95a4_scoped_true_lang_css_ = __webpack_require__("20d2");

// CONCATENATED MODULE: ./src/components/PaymentInfoLine.vue






/* normalize component */

var PaymentInfoLine_component = normalizeComponent(
  components_PaymentInfoLinevue_type_script_lang_ts_,
  PaymentInfoLinevue_type_template_id_3eda95a4_scoped_true_render,
  PaymentInfoLinevue_type_template_id_3eda95a4_scoped_true_staticRenderFns,
  false,
  null,
  "3eda95a4",
  null
  
)

/* harmony default export */ var components_PaymentInfoLine = (PaymentInfoLine_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"/home/soeren/nimiq/vue-components/node_modules/.cache/vue-loader","cacheIdentifier":"61e0acba-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/SmallPage.vue?vue&type=template&id=711d76e6&scoped=true&
var SmallPagevue_type_template_id_711d76e6_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"small-page"},[_vm._t("default")],2)}
var SmallPagevue_type_template_id_711d76e6_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/SmallPage.vue?vue&type=template&id=711d76e6&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--13-1!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/SmallPage.vue?vue&type=script&lang=ts&







var SmallPagevue_type_script_lang_ts_SmallPage =
/*#__PURE__*/
function (_Vue) {
  function SmallPage() {
    _classCallCheck(this, SmallPage);

    return _possibleConstructorReturn(this, _getPrototypeOf(SmallPage).apply(this, arguments));
  }

  _inherits(SmallPage, _Vue);

  return SmallPage;
}(external_vue_property_decorator_["Vue"]);

SmallPagevue_type_script_lang_ts_SmallPage = __decorate([external_vue_property_decorator_["Component"]], SmallPagevue_type_script_lang_ts_SmallPage);
/* harmony default export */ var SmallPagevue_type_script_lang_ts_ = (SmallPagevue_type_script_lang_ts_SmallPage);
// CONCATENATED MODULE: ./src/components/SmallPage.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_SmallPagevue_type_script_lang_ts_ = (SmallPagevue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./src/components/SmallPage.vue?vue&type=style&index=0&id=711d76e6&scoped=true&lang=css&
var SmallPagevue_type_style_index_0_id_711d76e6_scoped_true_lang_css_ = __webpack_require__("d10e");

// CONCATENATED MODULE: ./src/components/SmallPage.vue






/* normalize component */

var SmallPage_component = normalizeComponent(
  components_SmallPagevue_type_script_lang_ts_,
  SmallPagevue_type_template_id_711d76e6_scoped_true_render,
  SmallPagevue_type_template_id_711d76e6_scoped_true_staticRenderFns,
  false,
  null,
  "711d76e6",
  null
  
)

/* harmony default export */ var components_SmallPage = (SmallPage_component.exports);
// CONCATENATED MODULE: ./src/main.ts
// Components

















// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib-no-default.js
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Account", function() { return components_Account; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "AccountList", function() { return components_AccountList; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "AccountSelector", function() { return components_AccountSelector; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Address", function() { return components_Address; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Amount", function() { return components_Amount; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "AmountWithDetails", function() { return components_AmountWithDetails; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Contact", function() { return components_Contact; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "ContactList", function() { return components_ContactList; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Identicon", function() { return components_Identicon; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Login", function() { return components_Login; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "LoginList", function() { return components_LoginList; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "LoginSelector", function() { return components_LoginSelector; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "NewContact", function() { return components_NewContact; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "PageHeader", function() { return components_PageHeader; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "PageFooter", function() { return components_PageFooter; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "PaymentInfoLine", function() { return components_PaymentInfoLine; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "SmallPage", function() { return components_SmallPage; });




/***/ }),

/***/ "fdef":
/***/ (function(module, exports) {

module.exports = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ })

/******/ });
});
//# sourceMappingURL=vue-components.umd.js.map