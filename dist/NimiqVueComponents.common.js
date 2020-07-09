module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "NimiqVueComponents.common." + ({"1":"lang-de-AccountList-json","2":"lang-de-AccountSelector-json","3":"lang-de-AmountWithFee-json","4":"lang-de-Copyable-json","5":"lang-de-CopyableField-json","6":"lang-de-LabelInput-json","7":"lang-de-PageHeader-json","8":"lang-de-PaymentInfoLine-json","9":"lang-de-QrScanner-json","10":"lang-de-SendTx-json","11":"lang-de-Timer-json","12":"lang-de-TrackingConsent-json","13":"lang-de-Wallet-json","14":"lang-es-AccountList-json","15":"lang-es-AccountSelector-json","16":"lang-es-AmountWithFee-json","17":"lang-es-Copyable-json","18":"lang-es-CopyableField-json","19":"lang-es-LabelInput-json","20":"lang-es-PageHeader-json","21":"lang-es-PaymentInfoLine-json","22":"lang-es-QrScanner-json","23":"lang-es-SendTx-json","24":"lang-es-Timer-json","25":"lang-es-TrackingConsent-json","26":"lang-es-Wallet-json","27":"lang-fr-AccountList-json","28":"lang-fr-AccountSelector-json","29":"lang-fr-AmountWithFee-json","30":"lang-fr-Copyable-json","31":"lang-fr-CopyableField-json","32":"lang-fr-LabelInput-json","33":"lang-fr-PageHeader-json","34":"lang-fr-PaymentInfoLine-json","35":"lang-fr-QrScanner-json","36":"lang-fr-SendTx-json","37":"lang-fr-Timer-json","38":"lang-fr-TrackingConsent-json","39":"lang-fr-Wallet-json","40":"lang-zh-AccountList-json","41":"lang-zh-AccountSelector-json","42":"lang-zh-AmountWithFee-json","43":"lang-zh-Copyable-json","44":"lang-zh-CopyableField-json","45":"lang-zh-LabelInput-json","46":"lang-zh-PageHeader-json","47":"lang-zh-PaymentInfoLine-json","48":"lang-zh-QrScanner-json","49":"lang-zh-SendTx-json","50":"lang-zh-Timer-json","51":"lang-zh-TrackingConsent-json","52":"lang-zh-Wallet-json"}[chunkId]||chunkId) + ".js"
/******/ 	}
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = (typeof self !== 'undefined' ? self : this)["webpackJsonpNimiqVueComponents"] = (typeof self !== 'undefined' ? self : this)["webpackJsonpNimiqVueComponents"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fae3");
/******/ })
/************************************************************************/
/******/ ({

/***/ "00ee":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("b622");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};

test[TO_STRING_TAG] = 'z';

module.exports = String(test) === '[object z]';


/***/ }),

/***/ "01a6":
/***/ (function(module, exports) {

module.exports = require("vue-property-decorator");

/***/ }),

/***/ "0366":
/***/ (function(module, exports, __webpack_require__) {

var aFunction = __webpack_require__("1c0b");

// optional / simple context binding
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 0: return function () {
      return fn.call(that);
    };
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

/***/ "036e":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "044f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Amount_vue_vue_type_style_index_0_id_a8faf594_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("fc94");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Amount_vue_vue_type_style_index_0_id_a8faf594_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Amount_vue_vue_type_style_index_0_id_a8faf594_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Amount_vue_vue_type_style_index_0_id_a8faf594_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "057f":
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__("fc6a");
var nativeGetOwnPropertyNames = __webpack_require__("241c").f;

var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return nativeGetOwnPropertyNames(it);
  } catch (error) {
    return windowNames.slice();
  }
};

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]'
    ? getWindowNames(it)
    : nativeGetOwnPropertyNames(toIndexedObject(it));
};


/***/ }),

/***/ "06cf":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var propertyIsEnumerableModule = __webpack_require__("d1e7");
var createPropertyDescriptor = __webpack_require__("5c6c");
var toIndexedObject = __webpack_require__("fc6a");
var toPrimitive = __webpack_require__("c04e");
var has = __webpack_require__("5135");
var IE8_DOM_DEFINE = __webpack_require__("0cfb");

var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return nativeGetOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
};


/***/ }),

/***/ "07ac":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("23e7");
var $values = __webpack_require__("6f53").values;

// `Object.values` method
// https://tc39.github.io/ecma262/#sec-object.values
$({ target: 'Object', stat: true }, {
  values: function values(O) {
    return $values(O);
  }
});


/***/ }),

/***/ "0ccb":
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-string-pad-start-end
var toLength = __webpack_require__("50c4");
var repeat = __webpack_require__("1148");
var requireObjectCoercible = __webpack_require__("1d80");

var ceil = Math.ceil;

// `String.prototype.{ padStart, padEnd }` methods implementation
var createMethod = function (IS_END) {
  return function ($this, maxLength, fillString) {
    var S = String(requireObjectCoercible($this));
    var stringLength = S.length;
    var fillStr = fillString === undefined ? ' ' : String(fillString);
    var intMaxLength = toLength(maxLength);
    var fillLen, stringFiller;
    if (intMaxLength <= stringLength || fillStr == '') return S;
    fillLen = intMaxLength - stringLength;
    stringFiller = repeat.call(fillStr, ceil(fillLen / fillStr.length));
    if (stringFiller.length > fillLen) stringFiller = stringFiller.slice(0, fillLen);
    return IS_END ? S + stringFiller : stringFiller + S;
  };
};

module.exports = {
  // `String.prototype.padStart` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.padstart
  start: createMethod(false),
  // `String.prototype.padEnd` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.padend
  end: createMethod(true)
};


/***/ }),

/***/ "0cfb":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var fails = __webpack_require__("d039");
var createElement = __webpack_require__("cc12");

// Thank's IE8 for his funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),

/***/ "1148":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toInteger = __webpack_require__("a691");
var requireObjectCoercible = __webpack_require__("1d80");

// `String.prototype.repeat` method implementation
// https://tc39.github.io/ecma262/#sec-string.prototype.repeat
module.exports = ''.repeat || function repeat(count) {
  var str = String(requireObjectCoercible(this));
  var result = '';
  var n = toInteger(count);
  if (n < 0 || n == Infinity) throw RangeError('Wrong number of repetitions');
  for (;n > 0; (n >>>= 1) && (str += str)) if (n & 1) result += str;
  return result;
};


/***/ }),

/***/ "1276":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fixRegExpWellKnownSymbolLogic = __webpack_require__("d784");
var isRegExp = __webpack_require__("44e7");
var anObject = __webpack_require__("825a");
var requireObjectCoercible = __webpack_require__("1d80");
var speciesConstructor = __webpack_require__("4840");
var advanceStringIndex = __webpack_require__("8aa5");
var toLength = __webpack_require__("50c4");
var callRegExpExec = __webpack_require__("14c3");
var regexpExec = __webpack_require__("9263");
var fails = __webpack_require__("d039");

var arrayPush = [].push;
var min = Math.min;
var MAX_UINT32 = 0xFFFFFFFF;

// babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError
var SUPPORTS_Y = !fails(function () { return !RegExp(MAX_UINT32, 'y'); });

// @@split logic
fixRegExpWellKnownSymbolLogic('split', 2, function (SPLIT, nativeSplit, maybeCallNative) {
  var internalSplit;
  if (
    'abbc'.split(/(b)*/)[1] == 'c' ||
    'test'.split(/(?:)/, -1).length != 4 ||
    'ab'.split(/(?:ab)*/).length != 2 ||
    '.'.split(/(.?)(.?)/).length != 4 ||
    '.'.split(/()()/).length > 1 ||
    ''.split(/.?/).length
  ) {
    // based on es5-shim implementation, need to rework it
    internalSplit = function (separator, limit) {
      var string = String(requireObjectCoercible(this));
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (separator === undefined) return [string];
      // If `separator` is not a regex, use native split
      if (!isRegExp(separator)) {
        return nativeSplit.call(string, separator, lim);
      }
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') +
                  (separator.multiline ? 'm' : '') +
                  (separator.unicode ? 'u' : '') +
                  (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var match, lastIndex, lastLength;
      while (match = regexpExec.call(separatorCopy, string)) {
        lastIndex = separatorCopy.lastIndex;
        if (lastIndex > lastLastIndex) {
          output.push(string.slice(lastLastIndex, match.index));
          if (match.length > 1 && match.index < string.length) arrayPush.apply(output, match.slice(1));
          lastLength = match[0].length;
          lastLastIndex = lastIndex;
          if (output.length >= lim) break;
        }
        if (separatorCopy.lastIndex === match.index) separatorCopy.lastIndex++; // Avoid an infinite loop
      }
      if (lastLastIndex === string.length) {
        if (lastLength || !separatorCopy.test('')) output.push('');
      } else output.push(string.slice(lastLastIndex));
      return output.length > lim ? output.slice(0, lim) : output;
    };
  // Chakra, V8
  } else if ('0'.split(undefined, 0).length) {
    internalSplit = function (separator, limit) {
      return separator === undefined && limit === 0 ? [] : nativeSplit.call(this, separator, limit);
    };
  } else internalSplit = nativeSplit;

  return [
    // `String.prototype.split` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.split
    function split(separator, limit) {
      var O = requireObjectCoercible(this);
      var splitter = separator == undefined ? undefined : separator[SPLIT];
      return splitter !== undefined
        ? splitter.call(separator, O, limit)
        : internalSplit.call(String(O), separator, limit);
    },
    // `RegExp.prototype[@@split]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@split
    //
    // NOTE: This cannot be properly polyfilled in engines that don't support
    // the 'y' flag.
    function (regexp, limit) {
      var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== nativeSplit);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var C = speciesConstructor(rx, RegExp);

      var unicodeMatching = rx.unicode;
      var flags = (rx.ignoreCase ? 'i' : '') +
                  (rx.multiline ? 'm' : '') +
                  (rx.unicode ? 'u' : '') +
                  (SUPPORTS_Y ? 'y' : 'g');

      // ^(? + rx + ) is needed, in combination with some S slicing, to
      // simulate the 'y' flag.
      var splitter = new C(SUPPORTS_Y ? rx : '^(?:' + rx.source + ')', flags);
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];
      var p = 0;
      var q = 0;
      var A = [];
      while (q < S.length) {
        splitter.lastIndex = SUPPORTS_Y ? q : 0;
        var z = callRegExpExec(splitter, SUPPORTS_Y ? S : S.slice(q));
        var e;
        if (
          z === null ||
          (e = min(toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p
        ) {
          q = advanceStringIndex(S, q, unicodeMatching);
        } else {
          A.push(S.slice(p, q));
          if (A.length === lim) return A;
          for (var i = 1; i <= z.length - 1; i++) {
            A.push(z[i]);
            if (A.length === lim) return A;
          }
          q = p = e;
        }
      }
      A.push(S.slice(p));
      return A;
    }
  ];
}, !SUPPORTS_Y);


/***/ }),

/***/ "131a":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("23e7");
var setPrototypeOf = __webpack_require__("d2bb");

// `Object.setPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-object.setprototypeof
$({ target: 'Object', stat: true }, {
  setPrototypeOf: setPrototypeOf
});


/***/ }),

/***/ "13d5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var $reduce = __webpack_require__("d58f").left;
var arrayMethodIsStrict = __webpack_require__("a640");
var arrayMethodUsesToLength = __webpack_require__("ae40");

var STRICT_METHOD = arrayMethodIsStrict('reduce');
var USES_TO_LENGTH = arrayMethodUsesToLength('reduce', { 1: 0 });

// `Array.prototype.reduce` method
// https://tc39.github.io/ecma262/#sec-array.prototype.reduce
$({ target: 'Array', proto: true, forced: !STRICT_METHOD || !USES_TO_LENGTH }, {
  reduce: function reduce(callbackfn /* , initialValue */) {
    return $reduce(this, callbackfn, arguments.length, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "14c3":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("c6b6");
var regexpExec = __webpack_require__("9263");

// `RegExpExec` abstract operation
// https://tc39.github.io/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (typeof exec === 'function') {
    var result = exec.call(R, S);
    if (typeof result !== 'object') {
      throw TypeError('RegExp exec method returned something other than an Object or null');
    }
    return result;
  }

  if (classof(R) !== 'RegExp') {
    throw TypeError('RegExp#exec called on incompatible receiver');
  }

  return regexpExec.call(R, S);
};



/***/ }),

/***/ "159b":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var DOMIterables = __webpack_require__("fdbc");
var forEach = __webpack_require__("17c2");
var createNonEnumerableProperty = __webpack_require__("9112");

for (var COLLECTION_NAME in DOMIterables) {
  var Collection = global[COLLECTION_NAME];
  var CollectionPrototype = Collection && Collection.prototype;
  // some Chrome versions have non-configurable methods on DOMTokenList
  if (CollectionPrototype && CollectionPrototype.forEach !== forEach) try {
    createNonEnumerableProperty(CollectionPrototype, 'forEach', forEach);
  } catch (error) {
    CollectionPrototype.forEach = forEach;
  }
}


/***/ }),

/***/ "1625":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/iqons.min.a593173e.svg";

/***/ }),

/***/ "17c2":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $forEach = __webpack_require__("b727").forEach;
var arrayMethodIsStrict = __webpack_require__("a640");
var arrayMethodUsesToLength = __webpack_require__("ae40");

var STRICT_METHOD = arrayMethodIsStrict('forEach');
var USES_TO_LENGTH = arrayMethodUsesToLength('forEach');

// `Array.prototype.forEach` method implementation
// https://tc39.github.io/ecma262/#sec-array.prototype.foreach
module.exports = (!STRICT_METHOD || !USES_TO_LENGTH) ? function forEach(callbackfn /* , thisArg */) {
  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
} : [].forEach;


/***/ }),

/***/ "19aa":
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name) {
  if (!(it instanceof Constructor)) {
    throw TypeError('Incorrect ' + (name ? name + ' ' : '') + 'invocation');
  } return it;
};


/***/ }),

/***/ "1b67":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "1be4":
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("d066");

module.exports = getBuiltIn('document', 'documentElement');


/***/ }),

/***/ "1c0b":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') {
    throw TypeError(String(it) + ' is not a function');
  } return it;
};


/***/ }),

/***/ "1c7e":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("b622");

var ITERATOR = wellKnownSymbol('iterator');
var SAFE_CLOSING = false;

try {
  var called = 0;
  var iteratorWithReturn = {
    next: function () {
      return { done: !!called++ };
    },
    'return': function () {
      SAFE_CLOSING = true;
    }
  };
  iteratorWithReturn[ITERATOR] = function () {
    return this;
  };
  // eslint-disable-next-line no-throw-literal
  Array.from(iteratorWithReturn, function () { throw 2; });
} catch (error) { /* empty */ }

module.exports = function (exec, SKIP_CLOSING) {
  if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
  var ITERATION_SUPPORT = false;
  try {
    var object = {};
    object[ITERATOR] = function () {
      return {
        next: function () {
          return { done: ITERATION_SUPPORT = true };
        }
      };
    };
    exec(object);
  } catch (error) { /* empty */ }
  return ITERATION_SUPPORT;
};


/***/ }),

/***/ "1cdc":
/***/ (function(module, exports, __webpack_require__) {

var userAgent = __webpack_require__("342f");

module.exports = /(iphone|ipod|ipad).*applewebkit/i.test(userAgent);


/***/ }),

/***/ "1d80":
/***/ (function(module, exports) {

// `RequireObjectCoercible` abstract operation
// https://tc39.github.io/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ "1dde":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");
var wellKnownSymbol = __webpack_require__("b622");
var V8_VERSION = __webpack_require__("2d00");

var SPECIES = wellKnownSymbol('species');

module.exports = function (METHOD_NAME) {
  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/677
  return V8_VERSION >= 51 || !fails(function () {
    var array = [];
    var constructor = array.constructor = {};
    constructor[SPECIES] = function () {
      return { foo: 1 };
    };
    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};


/***/ }),

/***/ "1fb5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function getLens (b64) {
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=')
  if (validLen === -1) validLen = len

  var placeHoldersLen = validLen === len
    ? 0
    : 4 - (validLen % 4)

  return [validLen, placeHoldersLen]
}

// base64 is 4/3 + up to two characters of the original data
function byteLength (b64) {
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function _byteLength (b64, validLen, placeHoldersLen) {
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function toByteArray (b64) {
  var tmp
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

  var curByte = 0

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0
    ? validLen - 4
    : validLen

  for (var i = 0; i < len; i += 4) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 18) |
      (revLookup[b64.charCodeAt(i + 1)] << 12) |
      (revLookup[b64.charCodeAt(i + 2)] << 6) |
      revLookup[b64.charCodeAt(i + 3)]
    arr[curByte++] = (tmp >> 16) & 0xFF
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 2) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 2) |
      (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 1) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 10) |
      (revLookup[b64.charCodeAt(i + 1)] << 4) |
      (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] +
    lookup[num >> 12 & 0x3F] +
    lookup[num >> 6 & 0x3F] +
    lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp =
      ((uint8[i] << 16) & 0xFF0000) +
      ((uint8[i + 1] << 8) & 0xFF00) +
      (uint8[i + 2] & 0xFF)
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(
      uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)
    ))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    parts.push(
      lookup[tmp >> 2] +
      lookup[(tmp << 4) & 0x3F] +
      '=='
    )
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1]
    parts.push(
      lookup[tmp >> 10] +
      lookup[(tmp >> 4) & 0x3F] +
      lookup[(tmp << 2) & 0x3F] +
      '='
    )
  }

  return parts.join('')
}


/***/ }),

/***/ "2266":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("825a");
var isArrayIteratorMethod = __webpack_require__("e95a");
var toLength = __webpack_require__("50c4");
var bind = __webpack_require__("0366");
var getIteratorMethod = __webpack_require__("35a1");
var callWithSafeIterationClosing = __webpack_require__("9bdd");

var Result = function (stopped, result) {
  this.stopped = stopped;
  this.result = result;
};

var iterate = module.exports = function (iterable, fn, that, AS_ENTRIES, IS_ITERATOR) {
  var boundFunction = bind(fn, that, AS_ENTRIES ? 2 : 1);
  var iterator, iterFn, index, length, result, next, step;

  if (IS_ITERATOR) {
    iterator = iterable;
  } else {
    iterFn = getIteratorMethod(iterable);
    if (typeof iterFn != 'function') throw TypeError('Target is not iterable');
    // optimisation for array iterators
    if (isArrayIteratorMethod(iterFn)) {
      for (index = 0, length = toLength(iterable.length); length > index; index++) {
        result = AS_ENTRIES
          ? boundFunction(anObject(step = iterable[index])[0], step[1])
          : boundFunction(iterable[index]);
        if (result && result instanceof Result) return result;
      } return new Result(false);
    }
    iterator = iterFn.call(iterable);
  }

  next = iterator.next;
  while (!(step = next.call(iterator)).done) {
    result = callWithSafeIterationClosing(iterator, boundFunction, step.value, AS_ENTRIES);
    if (typeof result == 'object' && result && result instanceof Result) return result;
  } return new Result(false);
};

iterate.stop = function (result) {
  return new Result(true, result);
};


/***/ }),

/***/ "229a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = close_braces;

var _helpers = __webpack_require__("ac61");

function close_braces(retained_template, template) {
	var placeholder = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'x';
	var empty_placeholder = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : ' ';

	var cut_before = retained_template.length;

	var opening_braces = (0, _helpers.count_occurences)('(', retained_template);
	var closing_braces = (0, _helpers.count_occurences)(')', retained_template);

	var dangling_braces = opening_braces - closing_braces;

	while (dangling_braces > 0 && cut_before < template.length) {
		retained_template += template[cut_before].replace(placeholder, empty_placeholder);

		if (template[cut_before] === ')') {
			dangling_braces--;
		}

		cut_before++;
	}

	return retained_template;
}
//# sourceMappingURL=close braces.js.map

/***/ }),

/***/ "23cb":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("a691");

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toInteger(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),

/***/ "23e7":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var getOwnPropertyDescriptor = __webpack_require__("06cf").f;
var createNonEnumerableProperty = __webpack_require__("9112");
var redefine = __webpack_require__("6eeb");
var setGlobal = __webpack_require__("ce4e");
var copyConstructorProperties = __webpack_require__("e893");
var isForced = __webpack_require__("94ca");

/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty === typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    // extend global
    redefine(target, key, sourceProperty, options);
  }
};


/***/ }),

/***/ "241c":
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__("ca84");
var enumBugKeys = __webpack_require__("7839");

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertynames
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),

/***/ "2532":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var notARegExp = __webpack_require__("5a34");
var requireObjectCoercible = __webpack_require__("1d80");
var correctIsRegExpLogic = __webpack_require__("ab13");

// `String.prototype.includes` method
// https://tc39.github.io/ecma262/#sec-string.prototype.includes
$({ target: 'String', proto: true, forced: !correctIsRegExpLogic('includes') }, {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~String(requireObjectCoercible(this))
      .indexOf(notARegExp(searchString), arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "25f0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var redefine = __webpack_require__("6eeb");
var anObject = __webpack_require__("825a");
var fails = __webpack_require__("d039");
var flags = __webpack_require__("ad6d");

var TO_STRING = 'toString';
var RegExpPrototype = RegExp.prototype;
var nativeToString = RegExpPrototype[TO_STRING];

var NOT_GENERIC = fails(function () { return nativeToString.call({ source: 'a', flags: 'b' }) != '/a/b'; });
// FF44- RegExp#toString has a wrong name
var INCORRECT_NAME = nativeToString.name != TO_STRING;

// `RegExp.prototype.toString` method
// https://tc39.github.io/ecma262/#sec-regexp.prototype.tostring
if (NOT_GENERIC || INCORRECT_NAME) {
  redefine(RegExp.prototype, TO_STRING, function toString() {
    var R = anObject(this);
    var p = String(R.source);
    var rf = R.flags;
    var f = String(rf === undefined && R instanceof RegExp && !('flags' in RegExpPrototype) ? flags.call(R) : rf);
    return '/' + p + '/' + f;
  }, { unsafe: true });
}


/***/ }),

/***/ "2626":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var getBuiltIn = __webpack_require__("d066");
var definePropertyModule = __webpack_require__("9bf2");
var wellKnownSymbol = __webpack_require__("b622");
var DESCRIPTORS = __webpack_require__("83ab");

var SPECIES = wellKnownSymbol('species');

module.exports = function (CONSTRUCTOR_NAME) {
  var Constructor = getBuiltIn(CONSTRUCTOR_NAME);
  var defineProperty = definePropertyModule.f;

  if (DESCRIPTORS && Constructor && !Constructor[SPECIES]) {
    defineProperty(Constructor, SPECIES, {
      configurable: true,
      get: function () { return this; }
    });
  }
};


/***/ }),

/***/ "2726":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PageHeader_vue_vue_type_style_index_0_id_53c0243a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("f1ea");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PageHeader_vue_vue_type_style_index_0_id_53c0243a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PageHeader_vue_vue_type_style_index_0_id_53c0243a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PageHeader_vue_vue_type_style_index_0_id_53c0243a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "2a22":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "2c17":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "2ca0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var getOwnPropertyDescriptor = __webpack_require__("06cf").f;
var toLength = __webpack_require__("50c4");
var notARegExp = __webpack_require__("5a34");
var requireObjectCoercible = __webpack_require__("1d80");
var correctIsRegExpLogic = __webpack_require__("ab13");
var IS_PURE = __webpack_require__("c430");

var nativeStartsWith = ''.startsWith;
var min = Math.min;

var CORRECT_IS_REGEXP_LOGIC = correctIsRegExpLogic('startsWith');
// https://github.com/zloirock/core-js/pull/702
var MDN_POLYFILL_BUG = !IS_PURE && !CORRECT_IS_REGEXP_LOGIC && !!function () {
  var descriptor = getOwnPropertyDescriptor(String.prototype, 'startsWith');
  return descriptor && !descriptor.writable;
}();

// `String.prototype.startsWith` method
// https://tc39.github.io/ecma262/#sec-string.prototype.startswith
$({ target: 'String', proto: true, forced: !MDN_POLYFILL_BUG && !CORRECT_IS_REGEXP_LOGIC }, {
  startsWith: function startsWith(searchString /* , position = 0 */) {
    var that = String(requireObjectCoercible(this));
    notARegExp(searchString);
    var index = toLength(min(arguments.length > 1 ? arguments[1] : undefined, that.length));
    var search = String(searchString);
    return nativeStartsWith
      ? nativeStartsWith.call(that, search, index)
      : that.slice(index, index + search.length) === search;
  }
});


/***/ }),

/***/ "2cf4":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var fails = __webpack_require__("d039");
var classof = __webpack_require__("c6b6");
var bind = __webpack_require__("0366");
var html = __webpack_require__("1be4");
var createElement = __webpack_require__("cc12");
var IS_IOS = __webpack_require__("1cdc");

var location = global.location;
var set = global.setImmediate;
var clear = global.clearImmediate;
var process = global.process;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;

var run = function (id) {
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};

var runner = function (id) {
  return function () {
    run(id);
  };
};

var listener = function (event) {
  run(event.data);
};

var post = function (id) {
  // old engines have not location.origin
  global.postMessage(id + '', location.protocol + '//' + location.host);
};

// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!set || !clear) {
  set = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      (typeof fn == 'function' ? fn : Function(fn)).apply(undefined, args);
    };
    defer(counter);
    return counter;
  };
  clear = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (classof(process) == 'process') {
    defer = function (id) {
      process.nextTick(runner(id));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(runner(id));
    };
  // Browsers with MessageChannel, includes WebWorkers
  // except iOS - https://github.com/zloirock/core-js/issues/624
  } else if (MessageChannel && !IS_IOS) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = bind(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts && !fails(post)) {
    defer = post;
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in createElement('script')) {
    defer = function (id) {
      html.appendChild(createElement('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(runner(id), 0);
    };
  }
}

module.exports = {
  set: set,
  clear: clear
};


/***/ }),

/***/ "2d00":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var userAgent = __webpack_require__("342f");

var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  version = match[0] + match[1];
} else if (userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = match[1];
  }
}

module.exports = version && +version;


/***/ }),

/***/ "32fb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = parse;
// Parses the `text`.
//
// Returns `{ value, caret }` where `caret` is
// the caret position inside `value`
// corresponding to the `caret_position` inside `text`.
//
// The `text` is parsed by feeding each character sequentially to
// `parse_character(character, value)` function
// and appending the result (if it's not `undefined`) to `value`.
//
// Example:
//
// `text` is `8 (800) 555-35-35`,
// `caret_position` is `4` (before the first `0`).
// `parse_character` is `(character, value) =>
//   if (character >= '0' && character <= '9') { return character }`.
//
// then `parse()` outputs `{ value: '88005553535', caret: 2 }`.
//
function parse(text, caret_position, parse_character) {
	var value = '';

	var focused_input_character_index = 0;

	var index = 0;
	while (index < text.length) {
		var character = parse_character(text[index], value);

		if (character !== undefined) {
			value += character;

			if (caret_position !== undefined) {
				if (caret_position === index) {
					focused_input_character_index = value.length - 1;
				} else if (caret_position > index) {
					focused_input_character_index = value.length;
				}
			}
		}

		index++;
	}

	// If caret position wasn't specified
	if (caret_position === undefined) {
		// Then set caret position to "after the last input character"
		focused_input_character_index = value.length;
	}

	var result = {
		value: value,
		caret: focused_input_character_index
	};

	return result;
}
//# sourceMappingURL=parse.js.map

/***/ }),

/***/ "33c5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.getSelection = getSelection;
exports.getOperation = getOperation;
exports.getCaretPosition = getCaretPosition;
exports.setCaretPosition = setCaretPosition;
// Gets <input/> selection bounds
function getSelection(element) {
	// If no selection, return nothing
	if (element.selectionStart === element.selectionEnd) {
		return;
	}

	return { start: element.selectionStart, end: element.selectionEnd };
}

// Key codes
var Keys = exports.Keys = {
	Backspace: 8,
	Delete: 46

	// Finds out the operation to be intercepted and performed
	// based on the key down event `keyCode`.
};function getOperation(event) {
	switch (event.keyCode) {
		case Keys.Backspace:
			return 'Backspace';

		case Keys.Delete:
			return 'Delete';
	}
}

// Gets <input/> caret position
function getCaretPosition(element) {
	return element.selectionStart;
}

// Sets <input/> caret position
function setCaretPosition(element, caret_position) {
	// Sanity check
	if (caret_position === undefined) {
		return;
	}

	// Set caret position.
	// There has been an issue with caret positioning on Android devices.
	// https://github.com/catamphetamine/input-format/issues/2
	// I was revisiting this issue and looked for similar issues in other libraries.
	// For example, there's [`text-mask`](https://github.com/text-mask/text-mask) library.
	// They've had exactly the same issue when the caret seemingly refused to be repositioned programmatically.
	// The symptoms were the same: whenever the caret passed through a non-digit character of a mask (a whitespace, a bracket, a dash, etc), it looked as if it placed itself one character before its correct position.
	// https://github.com/text-mask/text-mask/issues/300
	// They seem to have found a basic fix for it: calling `input.setSelectionRange()` in a timeout rather than instantly for Android devices.
	// https://github.com/text-mask/text-mask/pull/400/files
	// I've implemented the same workaround here.
	if (isAndroid()) {
		setTimeout(function () {
			return element.setSelectionRange(caret_position, caret_position);
		}, 0);
	} else {
		element.setSelectionRange(caret_position, caret_position);
	}
}

function isAndroid() {
	// `navigator` is not defined when running mocha tests.
	if (typeof navigator !== 'undefined') {
		return ANDROID_USER_AGENT_REG_EXP.test(navigator.userAgent);
	}
}

var ANDROID_USER_AGENT_REG_EXP = /Android/i;
//# sourceMappingURL=dom.js.map

/***/ }),

/***/ "3410":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("23e7");
var fails = __webpack_require__("d039");
var toObject = __webpack_require__("7b0b");
var nativeGetPrototypeOf = __webpack_require__("e163");
var CORRECT_PROTOTYPE_GETTER = __webpack_require__("e177");

var FAILS_ON_PRIMITIVES = fails(function () { nativeGetPrototypeOf(1); });

// `Object.getPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-object.getprototypeof
$({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES, sham: !CORRECT_PROTOTYPE_GETTER }, {
  getPrototypeOf: function getPrototypeOf(it) {
    return nativeGetPrototypeOf(toObject(it));
  }
});



/***/ }),

/***/ "342f":
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("d066");

module.exports = getBuiltIn('navigator', 'userAgent') || '';


/***/ }),

/***/ "35a1":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("f5df");
var Iterators = __webpack_require__("3f8c");
var wellKnownSymbol = __webpack_require__("b622");

var ITERATOR = wellKnownSymbol('iterator');

module.exports = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "37e8":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var definePropertyModule = __webpack_require__("9bf2");
var anObject = __webpack_require__("825a");
var objectKeys = __webpack_require__("df75");

// `Object.defineProperties` method
// https://tc39.github.io/ecma262/#sec-object.defineproperties
module.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], Properties[key]);
  return O;
};


/***/ }),

/***/ "386a":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Identicon_vue_vue_type_style_index_0_id_053228da_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("2c17");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Identicon_vue_vue_type_style_index_0_id_053228da_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Identicon_vue_vue_type_style_index_0_id_053228da_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Identicon_vue_vue_type_style_index_0_id_053228da_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "3bbe":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");

module.exports = function (it) {
  if (!isObject(it) && it !== null) {
    throw TypeError("Can't set " + String(it) + ' as a prototype');
  } return it;
};


/***/ }),

/***/ "3ca3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var charAt = __webpack_require__("6547").charAt;
var InternalStateModule = __webpack_require__("69f3");
var defineIterator = __webpack_require__("7dd0");

var STRING_ITERATOR = 'String Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);

// `String.prototype[@@iterator]` method
// https://tc39.github.io/ecma262/#sec-string.prototype-@@iterator
defineIterator(String, 'String', function (iterated) {
  setInternalState(this, {
    type: STRING_ITERATOR,
    string: String(iterated),
    index: 0
  });
// `%StringIteratorPrototype%.next` method
// https://tc39.github.io/ecma262/#sec-%stringiteratorprototype%.next
}, function next() {
  var state = getInternalState(this);
  var string = state.string;
  var index = state.index;
  var point;
  if (index >= string.length) return { value: undefined, done: true };
  point = charAt(string, index);
  state.index += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "3d15":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "3f8c":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "40ac":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./de/AccountList.json": [
		"db74",
		1
	],
	"./de/AccountSelector.json": [
		"e3b5",
		2
	],
	"./de/AmountWithFee.json": [
		"b4df",
		3
	],
	"./de/Copyable.json": [
		"e4e5",
		4
	],
	"./de/CopyableField.json": [
		"224c",
		5
	],
	"./de/LabelInput.json": [
		"57cc",
		6
	],
	"./de/PageHeader.json": [
		"1acf",
		7
	],
	"./de/PaymentInfoLine.json": [
		"5bf6",
		8
	],
	"./de/QrScanner.json": [
		"ed59",
		9
	],
	"./de/SendTx.json": [
		"8033",
		10
	],
	"./de/Timer.json": [
		"6e2d",
		11
	],
	"./de/TrackingConsent.json": [
		"ba28",
		12
	],
	"./de/Wallet.json": [
		"2e5a",
		13
	],
	"./es/AccountList.json": [
		"3454",
		14
	],
	"./es/AccountSelector.json": [
		"4154",
		15
	],
	"./es/AmountWithFee.json": [
		"fb1d",
		16
	],
	"./es/Copyable.json": [
		"3130",
		17
	],
	"./es/CopyableField.json": [
		"ac40",
		18
	],
	"./es/LabelInput.json": [
		"446b",
		19
	],
	"./es/PageHeader.json": [
		"2e60",
		20
	],
	"./es/PaymentInfoLine.json": [
		"5f53",
		21
	],
	"./es/QrScanner.json": [
		"b756",
		22
	],
	"./es/SendTx.json": [
		"4a76",
		23
	],
	"./es/Timer.json": [
		"5b2d",
		24
	],
	"./es/TrackingConsent.json": [
		"18e1",
		25
	],
	"./es/Wallet.json": [
		"ca03",
		26
	],
	"./fr/AccountList.json": [
		"40c8",
		27
	],
	"./fr/AccountSelector.json": [
		"d939",
		28
	],
	"./fr/AmountWithFee.json": [
		"615f",
		29
	],
	"./fr/Copyable.json": [
		"bad1",
		30
	],
	"./fr/CopyableField.json": [
		"c50a",
		31
	],
	"./fr/LabelInput.json": [
		"24a7",
		32
	],
	"./fr/PageHeader.json": [
		"014a",
		33
	],
	"./fr/PaymentInfoLine.json": [
		"fe91",
		34
	],
	"./fr/QrScanner.json": [
		"35cb",
		35
	],
	"./fr/SendTx.json": [
		"9bb6",
		36
	],
	"./fr/Timer.json": [
		"894c",
		37
	],
	"./fr/TrackingConsent.json": [
		"4f30",
		38
	],
	"./fr/Wallet.json": [
		"ec08",
		39
	],
	"./zh/AccountList.json": [
		"bb4e",
		40
	],
	"./zh/AccountSelector.json": [
		"4634",
		41
	],
	"./zh/AmountWithFee.json": [
		"5f88",
		42
	],
	"./zh/Copyable.json": [
		"6a72",
		43
	],
	"./zh/CopyableField.json": [
		"afa7",
		44
	],
	"./zh/LabelInput.json": [
		"c7b6",
		45
	],
	"./zh/PageHeader.json": [
		"aee6",
		46
	],
	"./zh/PaymentInfoLine.json": [
		"6daa",
		47
	],
	"./zh/QrScanner.json": [
		"4e49",
		48
	],
	"./zh/SendTx.json": [
		"f8e0",
		49
	],
	"./zh/Timer.json": [
		"813f",
		50
	],
	"./zh/TrackingConsent.json": [
		"2cff",
		51
	],
	"./zh/Wallet.json": [
		"43f7",
		52
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__.t(id, 3);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "40ac";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "4160":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AmountInput_vue_vue_type_style_index_0_id_20ceeac0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cc31");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AmountInput_vue_vue_type_style_index_0_id_20ceeac0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AmountInput_vue_vue_type_style_index_0_id_20ceeac0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AmountInput_vue_vue_type_style_index_0_id_20ceeac0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "41606":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var forEach = __webpack_require__("17c2");

// `Array.prototype.forEach` method
// https://tc39.github.io/ecma262/#sec-array.prototype.foreach
$({ target: 'Array', proto: true, forced: [].forEach != forEach }, {
  forEach: forEach
});


/***/ }),

/***/ "428f":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");

module.exports = global;


/***/ }),

/***/ "4382":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Tooltip_vue_vue_type_style_index_0_id_24f93900_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("5ecd");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Tooltip_vue_vue_type_style_index_0_id_24f93900_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Tooltip_vue_vue_type_style_index_0_id_24f93900_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Tooltip_vue_vue_type_style_index_0_id_24f93900_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "44ad":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");
var classof = __webpack_require__("c6b6");

var split = ''.split;

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;


/***/ }),

/***/ "44d2":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("b622");
var create = __webpack_require__("7c73");
var definePropertyModule = __webpack_require__("9bf2");

var UNSCOPABLES = wellKnownSymbol('unscopables');
var ArrayPrototype = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype[UNSCOPABLES] == undefined) {
  definePropertyModule.f(ArrayPrototype, UNSCOPABLES, {
    configurable: true,
    value: create(null)
  });
}

// add a key to Array.prototype[@@unscopables]
module.exports = function (key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "44de":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");

module.exports = function (a, b) {
  var console = global.console;
  if (console && console.error) {
    arguments.length === 1 ? console.error(a) : console.error(a, b);
  }
};


/***/ }),

/***/ "44e7":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");
var classof = __webpack_require__("c6b6");
var wellKnownSymbol = __webpack_require__("b622");

var MATCH = wellKnownSymbol('match');

// `IsRegExp` abstract operation
// https://tc39.github.io/ecma262/#sec-isregexp
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classof(it) == 'RegExp');
};


/***/ }),

/***/ "466d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fixRegExpWellKnownSymbolLogic = __webpack_require__("d784");
var anObject = __webpack_require__("825a");
var toLength = __webpack_require__("50c4");
var requireObjectCoercible = __webpack_require__("1d80");
var advanceStringIndex = __webpack_require__("8aa5");
var regExpExec = __webpack_require__("14c3");

// @@match logic
fixRegExpWellKnownSymbolLogic('match', 1, function (MATCH, nativeMatch, maybeCallNative) {
  return [
    // `String.prototype.match` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.match
    function match(regexp) {
      var O = requireObjectCoercible(this);
      var matcher = regexp == undefined ? undefined : regexp[MATCH];
      return matcher !== undefined ? matcher.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
    },
    // `RegExp.prototype[@@match]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@match
    function (regexp) {
      var res = maybeCallNative(nativeMatch, regexp, this);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);

      if (!rx.global) return regExpExec(rx, S);

      var fullUnicode = rx.unicode;
      rx.lastIndex = 0;
      var A = [];
      var n = 0;
      var result;
      while ((result = regExpExec(rx, S)) !== null) {
        var matchStr = String(result[0]);
        A[n] = matchStr;
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
        n++;
      }
      return n === 0 ? null : A;
    }
  ];
});


/***/ }),

/***/ "46f5":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "qr-scanner-worker.min.js";

/***/ }),

/***/ "4840":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("825a");
var aFunction = __webpack_require__("1c0b");
var wellKnownSymbol = __webpack_require__("b622");

var SPECIES = wellKnownSymbol('species');

// `SpeciesConstructor` abstract operation
// https://tc39.github.io/ecma262/#sec-speciesconstructor
module.exports = function (O, defaultConstructor) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? defaultConstructor : aFunction(S);
};


/***/ }),

/***/ "4930":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");

module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  // Chrome 38 Symbol has incorrect toString conversion
  // eslint-disable-next-line no-undef
  return !String(Symbol());
});


/***/ }),

/***/ "4cbf":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QrScanner_vue_vue_type_style_index_0_id_0f31d4dc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("acd3");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QrScanner_vue_vue_type_style_index_0_id_0f31d4dc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QrScanner_vue_vue_type_style_index_0_id_0f31d4dc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QrScanner_vue_vue_type_style_index_0_id_0f31d4dc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "4d63":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var global = __webpack_require__("da84");
var isForced = __webpack_require__("94ca");
var inheritIfRequired = __webpack_require__("7156");
var defineProperty = __webpack_require__("9bf2").f;
var getOwnPropertyNames = __webpack_require__("241c").f;
var isRegExp = __webpack_require__("44e7");
var getFlags = __webpack_require__("ad6d");
var stickyHelpers = __webpack_require__("9f7f");
var redefine = __webpack_require__("6eeb");
var fails = __webpack_require__("d039");
var setInternalState = __webpack_require__("69f3").set;
var setSpecies = __webpack_require__("2626");
var wellKnownSymbol = __webpack_require__("b622");

var MATCH = wellKnownSymbol('match');
var NativeRegExp = global.RegExp;
var RegExpPrototype = NativeRegExp.prototype;
var re1 = /a/g;
var re2 = /a/g;

// "new" should create a new object, old webkit bug
var CORRECT_NEW = new NativeRegExp(re1) !== re1;

var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y;

var FORCED = DESCRIPTORS && isForced('RegExp', (!CORRECT_NEW || UNSUPPORTED_Y || fails(function () {
  re2[MATCH] = false;
  // RegExp constructor can alter flags and IsRegExp works correct with @@match
  return NativeRegExp(re1) != re1 || NativeRegExp(re2) == re2 || NativeRegExp(re1, 'i') != '/a/i';
})));

// `RegExp` constructor
// https://tc39.github.io/ecma262/#sec-regexp-constructor
if (FORCED) {
  var RegExpWrapper = function RegExp(pattern, flags) {
    var thisIsRegExp = this instanceof RegExpWrapper;
    var patternIsRegExp = isRegExp(pattern);
    var flagsAreUndefined = flags === undefined;
    var sticky;

    if (!thisIsRegExp && patternIsRegExp && pattern.constructor === RegExpWrapper && flagsAreUndefined) {
      return pattern;
    }

    if (CORRECT_NEW) {
      if (patternIsRegExp && !flagsAreUndefined) pattern = pattern.source;
    } else if (pattern instanceof RegExpWrapper) {
      if (flagsAreUndefined) flags = getFlags.call(pattern);
      pattern = pattern.source;
    }

    if (UNSUPPORTED_Y) {
      sticky = !!flags && flags.indexOf('y') > -1;
      if (sticky) flags = flags.replace(/y/g, '');
    }

    var result = inheritIfRequired(
      CORRECT_NEW ? new NativeRegExp(pattern, flags) : NativeRegExp(pattern, flags),
      thisIsRegExp ? this : RegExpPrototype,
      RegExpWrapper
    );

    if (UNSUPPORTED_Y && sticky) setInternalState(result, { sticky: sticky });

    return result;
  };
  var proxy = function (key) {
    key in RegExpWrapper || defineProperty(RegExpWrapper, key, {
      configurable: true,
      get: function () { return NativeRegExp[key]; },
      set: function (it) { NativeRegExp[key] = it; }
    });
  };
  var keys = getOwnPropertyNames(NativeRegExp);
  var index = 0;
  while (keys.length > index) proxy(keys[index++]);
  RegExpPrototype.constructor = RegExpWrapper;
  RegExpWrapper.prototype = RegExpPrototype;
  redefine(global, 'RegExp', RegExpWrapper);
}

// https://tc39.github.io/ecma262/#sec-get-regexp-@@species
setSpecies('RegExp');


/***/ }),

/***/ "4d64":
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__("fc6a");
var toLength = __webpack_require__("50c4");
var toAbsoluteIndex = __webpack_require__("23cb");

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
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
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),

/***/ "4de4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var $filter = __webpack_require__("b727").filter;
var arrayMethodHasSpeciesSupport = __webpack_require__("1dde");
var arrayMethodUsesToLength = __webpack_require__("ae40");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('filter');
// Edge 14- issue
var USES_TO_LENGTH = arrayMethodUsesToLength('filter');

// `Array.prototype.filter` method
// https://tc39.github.io/ecma262/#sec-array.prototype.filter
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "4fad":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("23e7");
var $entries = __webpack_require__("6f53").entries;

// `Object.entries` method
// https://tc39.github.io/ecma262/#sec-object.entries
$({ target: 'Object', stat: true }, {
  entries: function entries(O) {
    return $entries(O);
  }
});


/***/ }),

/***/ "50c4":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("a691");

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.github.io/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ "5135":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;

module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "5319":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fixRegExpWellKnownSymbolLogic = __webpack_require__("d784");
var anObject = __webpack_require__("825a");
var toObject = __webpack_require__("7b0b");
var toLength = __webpack_require__("50c4");
var toInteger = __webpack_require__("a691");
var requireObjectCoercible = __webpack_require__("1d80");
var advanceStringIndex = __webpack_require__("8aa5");
var regExpExec = __webpack_require__("14c3");

var max = Math.max;
var min = Math.min;
var floor = Math.floor;
var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d\d?|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d\d?)/g;

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// @@replace logic
fixRegExpWellKnownSymbolLogic('replace', 2, function (REPLACE, nativeReplace, maybeCallNative, reason) {
  var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = reason.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE;
  var REPLACE_KEEPS_$0 = reason.REPLACE_KEEPS_$0;
  var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? '$' : '$0';

  return [
    // `String.prototype.replace` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = requireObjectCoercible(this);
      var replacer = searchValue == undefined ? undefined : searchValue[REPLACE];
      return replacer !== undefined
        ? replacer.call(searchValue, O, replaceValue)
        : nativeReplace.call(String(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
    function (regexp, replaceValue) {
      if (
        (!REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE && REPLACE_KEEPS_$0) ||
        (typeof replaceValue === 'string' && replaceValue.indexOf(UNSAFE_SUBSTITUTE) === -1)
      ) {
        var res = maybeCallNative(nativeReplace, regexp, this, replaceValue);
        if (res.done) return res.value;
      }

      var rx = anObject(regexp);
      var S = String(this);

      var functionalReplace = typeof replaceValue === 'function';
      if (!functionalReplace) replaceValue = String(replaceValue);

      var global = rx.global;
      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }
      var results = [];
      while (true) {
        var result = regExpExec(rx, S);
        if (result === null) break;

        results.push(result);
        if (!global) break;

        var matchStr = String(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      }

      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];

        var matched = String(result[0]);
        var position = max(min(toInteger(result.index), S.length), 0);
        var captures = [];
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = [matched].concat(captures, position, S);
          if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
          var replacement = String(replaceValue.apply(undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }
      return accumulatedResult + S.slice(nextSourcePosition);
    }
  ];

  // https://tc39.github.io/ecma262/#sec-getsubstitution
  function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
    var tailPos = position + matched.length;
    var m = captures.length;
    var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
    if (namedCaptures !== undefined) {
      namedCaptures = toObject(namedCaptures);
      symbols = SUBSTITUTION_SYMBOLS;
    }
    return nativeReplace.call(replacement, symbols, function (match, ch) {
      var capture;
      switch (ch.charAt(0)) {
        case '$': return '$';
        case '&': return matched;
        case '`': return str.slice(0, position);
        case "'": return str.slice(tailPos);
        case '<':
          capture = namedCaptures[ch.slice(1, -1)];
          break;
        default: // \d\d?
          var n = +ch;
          if (n === 0) return match;
          if (n > m) {
            var f = floor(n / 10);
            if (f === 0) return match;
            if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
            return match;
          }
          capture = captures[n - 1];
      }
      return capture === undefined ? '' : capture;
    });
  }
});


/***/ }),

/***/ "5397":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "5692":
/***/ (function(module, exports, __webpack_require__) {

var IS_PURE = __webpack_require__("c430");
var store = __webpack_require__("c6cd");

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.6.4',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2020 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "56ef":
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("d066");
var getOwnPropertyNamesModule = __webpack_require__("241c");
var getOwnPropertySymbolsModule = __webpack_require__("7418");
var anObject = __webpack_require__("825a");

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
};


/***/ }),

/***/ "5899":
/***/ (function(module, exports) {

// a string of all valid unicode whitespaces
// eslint-disable-next-line max-len
module.exports = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),

/***/ "58a8":
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__("1d80");
var whitespaces = __webpack_require__("5899");

var whitespace = '[' + whitespaces + ']';
var ltrim = RegExp('^' + whitespace + whitespace + '*');
var rtrim = RegExp(whitespace + whitespace + '*$');

// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
var createMethod = function (TYPE) {
  return function ($this) {
    var string = String(requireObjectCoercible($this));
    if (TYPE & 1) string = string.replace(ltrim, '');
    if (TYPE & 2) string = string.replace(rtrim, '');
    return string;
  };
};

module.exports = {
  // `String.prototype.{ trimLeft, trimStart }` methods
  // https://tc39.github.io/ecma262/#sec-string.prototype.trimstart
  start: createMethod(1),
  // `String.prototype.{ trimRight, trimEnd }` methods
  // https://tc39.github.io/ecma262/#sec-string.prototype.trimend
  end: createMethod(2),
  // `String.prototype.trim` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.trim
  trim: createMethod(3)
};


/***/ }),

/***/ "5a34":
/***/ (function(module, exports, __webpack_require__) {

var isRegExp = __webpack_require__("44e7");

module.exports = function (it) {
  if (isRegExp(it)) {
    throw TypeError("The method doesn't accept regular expressions");
  } return it;
};


/***/ }),

/***/ "5c6c":
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

/***/ "5d48":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LabelInput_vue_vue_type_style_index_0_id_7dfeeab2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("e2d3");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LabelInput_vue_vue_type_style_index_0_id_7dfeeab2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LabelInput_vue_vue_type_style_index_0_id_7dfeeab2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LabelInput_vue_vue_type_style_index_0_id_7dfeeab2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "5e89":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");

var floor = Math.floor;

// `Number.isInteger` method implementation
// https://tc39.github.io/ecma262/#sec-number.isinteger
module.exports = function isInteger(it) {
  return !isObject(it) && isFinite(it) && floor(it) === it;
};


/***/ }),

/***/ "5ecd":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "6062":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var collection = __webpack_require__("6d61");
var collectionStrong = __webpack_require__("6566");

// `Set` constructor
// https://tc39.github.io/ecma262/#sec-set-objects
module.exports = collection('Set', function (init) {
  return function Set() { return init(this, arguments.length ? arguments[0] : undefined); };
}, collectionStrong);


/***/ }),

/***/ "6068":
/***/ (function(module, exports, __webpack_require__) {

var
  tagRegExp          = /(<\/?[a-z][a-z0-9]*(?::[a-z][a-z0-9]*)?\s*(?:\s+[a-z0-9-_]+=(?:(?:'[\s\S]*?')|(?:"[\s\S]*?")))*\s*\/?>)|([^<]|<(?![a-z\/]))*/gi,
  attrRegExp         = /\s[a-z0-9-_]+\b(\s*=\s*('|")[\s\S]*?\2)?/gi,
  splitAttrRegExp    = /(\s[a-z0-9-_]+\b\s*)(?:=(\s*('|")[\s\S]*?\3))?/gi,
  startTagExp        = /^<[a-z]/,
  selfCloseTagExp    = /\/>$/,
  closeTagExp        = /^<\//,
  nodeNameExp        = /<\/?([a-z][a-z0-9]*)(?::([a-z][a-z0-9]*))?/i,
  attributeQuotesExp = /^('|")|('|")$/g,
  noClosingTagsExp   = /^(?:area|base|br|col|command|embed|hr|img|input|link|meta|param|source)/i;

var Node = __webpack_require__("c7ae");

function findByRegExp(html, selector, onlyFirst) {

  var
    result        = [],
    tagsCount     = 0,
    tags          = html.match(tagRegExp),
    composing     = false,
    currentObject = null,
    matchingSelector,
    fullNodeName,
    selfCloseTag,
    attributes,
    attrBuffer,
    attrStr,
    buffer,
    tag;

  for (var i = 0, l = tags.length; i < l; i++) {

    tag = tags[i];
    fullNodeName = tag.match(nodeNameExp);

    matchingSelector = selector.test(tag);

    if (matchingSelector && !composing){
      composing = true;
    }

    if (composing) {

      if (startTagExp.test(tag)) {
        selfCloseTag = selfCloseTagExp.test(tag) || noClosingTagsExp.test(fullNodeName[1]);
        attributes = [];
        attrStr = tag.match(attrRegExp) || [];
        for (var aI = 0, aL = attrStr.length; aI < aL; aI++) {
          splitAttrRegExp.lastIndex = 0;
          attrBuffer = splitAttrRegExp.exec(attrStr[aI]);
          attributes.push({
            name: attrBuffer[1].trim(),
            value: (attrBuffer[2] || '').trim().replace(attributeQuotesExp, '')
          });
        }

        ((currentObject && currentObject.childNodes) || result).push(buffer = new Node({
          nodeType: 1, //element node
          nodeName: fullNodeName[1],
          namespace: fullNodeName[2],
          attributes: attributes,
          childNodes: [],
          parentNode: currentObject,
          startTag: tag,
          selfCloseTag: selfCloseTag
        }));
        tagsCount++;

        if (!onlyFirst && matchingSelector && currentObject){
          result.push(buffer);
        }

        if (selfCloseTag) {
          tagsCount--;
        }
        else {
          currentObject = buffer;
        }

      }
      else if (closeTagExp.test(tag)) {
        if (currentObject.nodeName == fullNodeName[1]){
          currentObject = currentObject.parentNode;
          tagsCount--;
        }
      }
      else {
        currentObject.childNodes.push(new Node({
          nodeType: 3,
          text: tag,
          parentNode: currentObject
        }));
      }

      if (tagsCount == 0) {
        composing = false;
        currentObject = null;

        if (onlyFirst){
          break;
        }
      }

    }

  }

  return onlyFirst ? result[0] || null : result;
}


function Dom(rawHTML) {
  this.rawHTML = rawHTML;
}

Dom.prototype.getElementsByClassName = function (className) {
  var selector = new RegExp('class=(\'|")(.*?\\s)?' + className + '(\\s.*?)?\\1');
  return findByRegExp(this.rawHTML, selector);
};

Dom.prototype.getElementsByTagName = function (tagName) {
  var selector = new RegExp('^<'+tagName, 'i');
  return findByRegExp(this.rawHTML, selector);
};

Dom.prototype.getElementById = function(id){
  var selector = new RegExp('id=(\'|")' + id + '\\1');
  return findByRegExp(this.rawHTML, selector, true);
};

Dom.prototype.getElementsByName = function(name){
    return this.getElementsByAttribute('name', name);
};

Dom.prototype.getElementsByAttribute = function(attr, value){
  var selector = new RegExp('\\s' + attr + '=(\'|")' + value + '\\1');
  return findByRegExp(this.rawHTML, selector);
};


module.exports = Dom;


/***/ }),

/***/ "60da":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__("83ab");
var fails = __webpack_require__("d039");
var objectKeys = __webpack_require__("df75");
var getOwnPropertySymbolsModule = __webpack_require__("7418");
var propertyIsEnumerableModule = __webpack_require__("d1e7");
var toObject = __webpack_require__("7b0b");
var IndexedObject = __webpack_require__("44ad");

var nativeAssign = Object.assign;
var defineProperty = Object.defineProperty;

// `Object.assign` method
// https://tc39.github.io/ecma262/#sec-object.assign
module.exports = !nativeAssign || fails(function () {
  // should have correct order of operations (Edge bug)
  if (DESCRIPTORS && nativeAssign({ b: 1 }, nativeAssign(defineProperty({}, 'a', {
    enumerable: true,
    get: function () {
      defineProperty(this, 'b', {
        value: 3,
        enumerable: false
      });
    }
  }), { b: 2 })).b !== 1) return true;
  // should work with symbols and should have deterministic property order (V8 bug)
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var symbol = Symbol();
  var alphabet = 'abcdefghijklmnopqrst';
  A[symbol] = 7;
  alphabet.split('').forEach(function (chr) { B[chr] = chr; });
  return nativeAssign({}, A)[symbol] != 7 || objectKeys(nativeAssign({}, B)).join('') != alphabet;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var argumentsLength = arguments.length;
  var index = 1;
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  var propertyIsEnumerable = propertyIsEnumerableModule.f;
  while (argumentsLength > index) {
    var S = IndexedObject(arguments[index++]);
    var keys = getOwnPropertySymbols ? objectKeys(S).concat(getOwnPropertySymbols(S)) : objectKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || propertyIsEnumerable.call(S, key)) T[key] = S[key];
    }
  } return T;
} : nativeAssign;


/***/ }),

/***/ "6547":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("a691");
var requireObjectCoercible = __webpack_require__("1d80");

// `String.prototype.{ codePointAt, at }` methods implementation
var createMethod = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = String(requireObjectCoercible($this));
    var position = toInteger(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
    first = S.charCodeAt(position);
    return first < 0xD800 || first > 0xDBFF || position + 1 === size
      || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF
        ? CONVERT_TO_STRING ? S.charAt(position) : first
        : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
  };
};

module.exports = {
  // `String.prototype.codePointAt` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod(true)
};


/***/ }),

/***/ "6566":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var defineProperty = __webpack_require__("9bf2").f;
var create = __webpack_require__("7c73");
var redefineAll = __webpack_require__("e2cc");
var bind = __webpack_require__("0366");
var anInstance = __webpack_require__("19aa");
var iterate = __webpack_require__("2266");
var defineIterator = __webpack_require__("7dd0");
var setSpecies = __webpack_require__("2626");
var DESCRIPTORS = __webpack_require__("83ab");
var fastKey = __webpack_require__("f183").fastKey;
var InternalStateModule = __webpack_require__("69f3");

var setInternalState = InternalStateModule.set;
var internalStateGetterFor = InternalStateModule.getterFor;

module.exports = {
  getConstructor: function (wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, CONSTRUCTOR_NAME);
      setInternalState(that, {
        type: CONSTRUCTOR_NAME,
        index: create(null),
        first: undefined,
        last: undefined,
        size: 0
      });
      if (!DESCRIPTORS) that.size = 0;
      if (iterable != undefined) iterate(iterable, that[ADDER], that, IS_MAP);
    });

    var getInternalState = internalStateGetterFor(CONSTRUCTOR_NAME);

    var define = function (that, key, value) {
      var state = getInternalState(that);
      var entry = getEntry(that, key);
      var previous, index;
      // change existing entry
      if (entry) {
        entry.value = value;
      // create new entry
      } else {
        state.last = entry = {
          index: index = fastKey(key, true),
          key: key,
          value: value,
          previous: previous = state.last,
          next: undefined,
          removed: false
        };
        if (!state.first) state.first = entry;
        if (previous) previous.next = entry;
        if (DESCRIPTORS) state.size++;
        else that.size++;
        // add to index
        if (index !== 'F') state.index[index] = entry;
      } return that;
    };

    var getEntry = function (that, key) {
      var state = getInternalState(that);
      // fast case
      var index = fastKey(key);
      var entry;
      if (index !== 'F') return state.index[index];
      // frozen object case
      for (entry = state.first; entry; entry = entry.next) {
        if (entry.key == key) return entry;
      }
    };

    redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear() {
        var that = this;
        var state = getInternalState(that);
        var data = state.index;
        var entry = state.first;
        while (entry) {
          entry.removed = true;
          if (entry.previous) entry.previous = entry.previous.next = undefined;
          delete data[entry.index];
          entry = entry.next;
        }
        state.first = state.last = undefined;
        if (DESCRIPTORS) state.size = 0;
        else that.size = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function (key) {
        var that = this;
        var state = getInternalState(that);
        var entry = getEntry(that, key);
        if (entry) {
          var next = entry.next;
          var prev = entry.previous;
          delete state.index[entry.index];
          entry.removed = true;
          if (prev) prev.next = next;
          if (next) next.previous = prev;
          if (state.first == entry) state.first = next;
          if (state.last == entry) state.last = prev;
          if (DESCRIPTORS) state.size--;
          else that.size--;
        } return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /* , that = undefined */) {
        var state = getInternalState(this);
        var boundFunction = bind(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
        var entry;
        while (entry = entry ? entry.next : state.first) {
          boundFunction(entry.value, entry.key, this);
          // revert to the last existing entry
          while (entry && entry.removed) entry = entry.previous;
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key) {
        return !!getEntry(this, key);
      }
    });

    redefineAll(C.prototype, IS_MAP ? {
      // 23.1.3.6 Map.prototype.get(key)
      get: function get(key) {
        var entry = getEntry(this, key);
        return entry && entry.value;
      },
      // 23.1.3.9 Map.prototype.set(key, value)
      set: function set(key, value) {
        return define(this, key === 0 ? 0 : key, value);
      }
    } : {
      // 23.2.3.1 Set.prototype.add(value)
      add: function add(value) {
        return define(this, value = value === 0 ? 0 : value, value);
      }
    });
    if (DESCRIPTORS) defineProperty(C.prototype, 'size', {
      get: function () {
        return getInternalState(this).size;
      }
    });
    return C;
  },
  setStrong: function (C, CONSTRUCTOR_NAME, IS_MAP) {
    var ITERATOR_NAME = CONSTRUCTOR_NAME + ' Iterator';
    var getInternalCollectionState = internalStateGetterFor(CONSTRUCTOR_NAME);
    var getInternalIteratorState = internalStateGetterFor(ITERATOR_NAME);
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    defineIterator(C, CONSTRUCTOR_NAME, function (iterated, kind) {
      setInternalState(this, {
        type: ITERATOR_NAME,
        target: iterated,
        state: getInternalCollectionState(iterated),
        kind: kind,
        last: undefined
      });
    }, function () {
      var state = getInternalIteratorState(this);
      var kind = state.kind;
      var entry = state.last;
      // revert to the last existing entry
      while (entry && entry.removed) entry = entry.previous;
      // get next entry
      if (!state.target || !(state.last = entry = entry ? entry.next : state.state.first)) {
        // or finish the iteration
        state.target = undefined;
        return { value: undefined, done: true };
      }
      // return step by kind
      if (kind == 'keys') return { value: entry.key, done: false };
      if (kind == 'values') return { value: entry.value, done: false };
      return { value: [entry.key, entry.value], done: false };
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

    // add [@@species], 23.1.2.2, 23.2.2.2
    setSpecies(CONSTRUCTOR_NAME);
  }
};


/***/ }),

/***/ "65f0":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");
var isArray = __webpack_require__("e8b5");
var wellKnownSymbol = __webpack_require__("b622");

var SPECIES = wellKnownSymbol('species');

// `ArraySpeciesCreate` abstract operation
// https://tc39.github.io/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray, length) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
};


/***/ }),

/***/ "69f3":
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_WEAK_MAP = __webpack_require__("7f9a");
var global = __webpack_require__("da84");
var isObject = __webpack_require__("861d");
var createNonEnumerableProperty = __webpack_require__("9112");
var objectHas = __webpack_require__("5135");
var sharedKey = __webpack_require__("f772");
var hiddenKeys = __webpack_require__("d012");

var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP) {
  var store = new WeakMap();
  var wmget = store.get;
  var wmhas = store.has;
  var wmset = store.set;
  set = function (it, metadata) {
    wmset.call(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget.call(store, it) || {};
  };
  has = function (it) {
    return wmhas.call(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return objectHas(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return objectHas(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),

/***/ "6c68":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PageFooter_vue_vue_type_style_index_0_id_3c6ba3a4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("94a7");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PageFooter_vue_vue_type_style_index_0_id_3c6ba3a4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PageFooter_vue_vue_type_style_index_0_id_3c6ba3a4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PageFooter_vue_vue_type_style_index_0_id_3c6ba3a4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "6d61":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var global = __webpack_require__("da84");
var isForced = __webpack_require__("94ca");
var redefine = __webpack_require__("6eeb");
var InternalMetadataModule = __webpack_require__("f183");
var iterate = __webpack_require__("2266");
var anInstance = __webpack_require__("19aa");
var isObject = __webpack_require__("861d");
var fails = __webpack_require__("d039");
var checkCorrectnessOfIteration = __webpack_require__("1c7e");
var setToStringTag = __webpack_require__("d44e");
var inheritIfRequired = __webpack_require__("7156");

module.exports = function (CONSTRUCTOR_NAME, wrapper, common) {
  var IS_MAP = CONSTRUCTOR_NAME.indexOf('Map') !== -1;
  var IS_WEAK = CONSTRUCTOR_NAME.indexOf('Weak') !== -1;
  var ADDER = IS_MAP ? 'set' : 'add';
  var NativeConstructor = global[CONSTRUCTOR_NAME];
  var NativePrototype = NativeConstructor && NativeConstructor.prototype;
  var Constructor = NativeConstructor;
  var exported = {};

  var fixMethod = function (KEY) {
    var nativeMethod = NativePrototype[KEY];
    redefine(NativePrototype, KEY,
      KEY == 'add' ? function add(value) {
        nativeMethod.call(this, value === 0 ? 0 : value);
        return this;
      } : KEY == 'delete' ? function (key) {
        return IS_WEAK && !isObject(key) ? false : nativeMethod.call(this, key === 0 ? 0 : key);
      } : KEY == 'get' ? function get(key) {
        return IS_WEAK && !isObject(key) ? undefined : nativeMethod.call(this, key === 0 ? 0 : key);
      } : KEY == 'has' ? function has(key) {
        return IS_WEAK && !isObject(key) ? false : nativeMethod.call(this, key === 0 ? 0 : key);
      } : function set(key, value) {
        nativeMethod.call(this, key === 0 ? 0 : key, value);
        return this;
      }
    );
  };

  // eslint-disable-next-line max-len
  if (isForced(CONSTRUCTOR_NAME, typeof NativeConstructor != 'function' || !(IS_WEAK || NativePrototype.forEach && !fails(function () {
    new NativeConstructor().entries().next();
  })))) {
    // create collection constructor
    Constructor = common.getConstructor(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER);
    InternalMetadataModule.REQUIRED = true;
  } else if (isForced(CONSTRUCTOR_NAME, true)) {
    var instance = new Constructor();
    // early implementations not supports chaining
    var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;
    // V8 ~ Chromium 40- weak-collections throws on primitives, but should return false
    var THROWS_ON_PRIMITIVES = fails(function () { instance.has(1); });
    // most early implementations doesn't supports iterables, most modern - not close it correctly
    // eslint-disable-next-line no-new
    var ACCEPT_ITERABLES = checkCorrectnessOfIteration(function (iterable) { new NativeConstructor(iterable); });
    // for early implementations -0 and +0 not the same
    var BUGGY_ZERO = !IS_WEAK && fails(function () {
      // V8 ~ Chromium 42- fails only with 5+ elements
      var $instance = new NativeConstructor();
      var index = 5;
      while (index--) $instance[ADDER](index, index);
      return !$instance.has(-0);
    });

    if (!ACCEPT_ITERABLES) {
      Constructor = wrapper(function (dummy, iterable) {
        anInstance(dummy, Constructor, CONSTRUCTOR_NAME);
        var that = inheritIfRequired(new NativeConstructor(), dummy, Constructor);
        if (iterable != undefined) iterate(iterable, that[ADDER], that, IS_MAP);
        return that;
      });
      Constructor.prototype = NativePrototype;
      NativePrototype.constructor = Constructor;
    }

    if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
      fixMethod('delete');
      fixMethod('has');
      IS_MAP && fixMethod('get');
    }

    if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);

    // weak collections should not contains .clear method
    if (IS_WEAK && NativePrototype.clear) delete NativePrototype.clear;
  }

  exported[CONSTRUCTOR_NAME] = Constructor;
  $({ global: true, forced: Constructor != NativeConstructor }, exported);

  setToStringTag(Constructor, CONSTRUCTOR_NAME);

  if (!IS_WEAK) common.setStrong(Constructor, CONSTRUCTOR_NAME, IS_MAP);

  return Constructor;
};


/***/ }),

/***/ "6eeb":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var createNonEnumerableProperty = __webpack_require__("9112");
var has = __webpack_require__("5135");
var setGlobal = __webpack_require__("ce4e");
var inspectSource = __webpack_require__("8925");
var InternalStateModule = __webpack_require__("69f3");

var getInternalState = InternalStateModule.get;
var enforceInternalState = InternalStateModule.enforce;
var TEMPLATE = String(String).split('String');

(module.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  if (typeof value == 'function') {
    if (typeof key == 'string' && !has(value, 'name')) createNonEnumerableProperty(value, 'name', key);
    enforceInternalState(value).source = TEMPLATE.join(typeof key == 'string' ? key : '');
  }
  if (O === global) {
    if (simple) O[key] = value;
    else setGlobal(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }
  if (simple) O[key] = value;
  else createNonEnumerableProperty(O, key, value);
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return typeof this == 'function' && getInternalState(this).source || inspectSource(this);
});


/***/ }),

/***/ "6f53":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var objectKeys = __webpack_require__("df75");
var toIndexedObject = __webpack_require__("fc6a");
var propertyIsEnumerable = __webpack_require__("d1e7").f;

// `Object.{ entries, values }` methods implementation
var createMethod = function (TO_ENTRIES) {
  return function (it) {
    var O = toIndexedObject(it);
    var keys = objectKeys(O);
    var length = keys.length;
    var i = 0;
    var result = [];
    var key;
    while (length > i) {
      key = keys[i++];
      if (!DESCRIPTORS || propertyIsEnumerable.call(O, key)) {
        result.push(TO_ENTRIES ? [key, O[key]] : O[key]);
      }
    }
    return result;
  };
};

module.exports = {
  // `Object.entries` method
  // https://tc39.github.io/ecma262/#sec-object.entries
  entries: createMethod(true),
  // `Object.values` method
  // https://tc39.github.io/ecma262/#sec-object.values
  values: createMethod(false)
};


/***/ }),

/***/ "702c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CircleSpinner_vue_vue_type_style_index_0_id_2bc59fa8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("db98");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CircleSpinner_vue_vue_type_style_index_0_id_2bc59fa8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CircleSpinner_vue_vue_type_style_index_0_id_2bc59fa8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CircleSpinner_vue_vue_type_style_index_0_id_2bc59fa8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "7156":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");
var setPrototypeOf = __webpack_require__("d2bb");

// makes subclassing work correct for wrapped built-ins
module.exports = function ($this, dummy, Wrapper) {
  var NewTarget, NewTargetPrototype;
  if (
    // it can work only with native `setPrototypeOf`
    setPrototypeOf &&
    // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
    typeof (NewTarget = dummy.constructor) == 'function' &&
    NewTarget !== Wrapper &&
    isObject(NewTargetPrototype = NewTarget.prototype) &&
    NewTargetPrototype !== Wrapper.prototype
  ) setPrototypeOf($this, NewTargetPrototype);
  return $this;
};


/***/ }),

/***/ "7345":
/***/ (function(module, exports, __webpack_require__) {

var Dom = __webpack_require__("6068");

function DomParser() {
}

DomParser.prototype.parseFromString = function (html) {
  return new Dom(html);
};

module.exports = DomParser;

/***/ }),

/***/ "7418":
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "746f":
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__("428f");
var has = __webpack_require__("5135");
var wrappedWellKnownSymbolModule = __webpack_require__("e538");
var defineProperty = __webpack_require__("9bf2").f;

module.exports = function (NAME) {
  var Symbol = path.Symbol || (path.Symbol = {});
  if (!has(Symbol, NAME)) defineProperty(Symbol, NAME, {
    value: wrappedWellKnownSymbolModule.f(NAME)
  });
};


/***/ }),

/***/ "7839":
/***/ (function(module, exports) {

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),

/***/ "7b0b":
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__("1d80");

// `ToObject` abstract operation
// https://tc39.github.io/ecma262/#sec-toobject
module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ "7b96":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CloseButton_vue_vue_type_style_index_0_id_4f20d426_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("970b");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CloseButton_vue_vue_type_style_index_0_id_4f20d426_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CloseButton_vue_vue_type_style_index_0_id_4f20d426_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CloseButton_vue_vue_type_style_index_0_id_4f20d426_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "7c73":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("825a");
var defineProperties = __webpack_require__("37e8");
var enumBugKeys = __webpack_require__("7839");
var hiddenKeys = __webpack_require__("d012");
var html = __webpack_require__("1be4");
var documentCreateElement = __webpack_require__("cc12");
var sharedKey = __webpack_require__("f772");

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    /* global ActiveXObject */
    activeXDocument = document.domain && new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame();
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true;

// `Object.create` method
// https://tc39.github.io/ecma262/#sec-object.create
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : defineProperties(result, Properties);
};


/***/ }),

/***/ "7db0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var $find = __webpack_require__("b727").find;
var addToUnscopables = __webpack_require__("44d2");
var arrayMethodUsesToLength = __webpack_require__("ae40");

var FIND = 'find';
var SKIPS_HOLES = true;

var USES_TO_LENGTH = arrayMethodUsesToLength(FIND);

// Shouldn't skip holes
if (FIND in []) Array(1)[FIND](function () { SKIPS_HOLES = false; });

// `Array.prototype.find` method
// https://tc39.github.io/ecma262/#sec-array.prototype.find
$({ target: 'Array', proto: true, forced: SKIPS_HOLES || !USES_TO_LENGTH }, {
  find: function find(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables(FIND);


/***/ }),

/***/ "7dd0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var createIteratorConstructor = __webpack_require__("9ed3");
var getPrototypeOf = __webpack_require__("e163");
var setPrototypeOf = __webpack_require__("d2bb");
var setToStringTag = __webpack_require__("d44e");
var createNonEnumerableProperty = __webpack_require__("9112");
var redefine = __webpack_require__("6eeb");
var wellKnownSymbol = __webpack_require__("b622");
var IS_PURE = __webpack_require__("c430");
var Iterators = __webpack_require__("3f8c");
var IteratorsCore = __webpack_require__("ae93");

var IteratorPrototype = IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR = wellKnownSymbol('iterator');
var KEYS = 'keys';
var VALUES = 'values';
var ENTRIES = 'entries';

var returnThis = function () { return this; };

module.exports = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
  createIteratorConstructor(IteratorConstructor, NAME, next);

  var getIterationMethod = function (KIND) {
    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
    switch (KIND) {
      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
    } return function () { return new IteratorConstructor(this); };
  };

  var TO_STRING_TAG = NAME + ' Iterator';
  var INCORRECT_VALUES_NAME = false;
  var IterablePrototype = Iterable.prototype;
  var nativeIterator = IterablePrototype[ITERATOR]
    || IterablePrototype['@@iterator']
    || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY;

  // fix native
  if (anyNativeIterator) {
    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
    if (IteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
      if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
        if (setPrototypeOf) {
          setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
        } else if (typeof CurrentIteratorPrototype[ITERATOR] != 'function') {
          createNonEnumerableProperty(CurrentIteratorPrototype, ITERATOR, returnThis);
        }
      }
      // Set @@toStringTag to native iterators
      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
      if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
    }
  }

  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    INCORRECT_VALUES_NAME = true;
    defaultIterator = function values() { return nativeIterator.call(this); };
  }

  // define iterator
  if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
    createNonEnumerableProperty(IterablePrototype, ITERATOR, defaultIterator);
  }
  Iterators[NAME] = defaultIterator;

  // export additional methods
  if (DEFAULT) {
    methods = {
      values: getIterationMethod(VALUES),
      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
      entries: getIterationMethod(ENTRIES)
    };
    if (FORCED) for (KEY in methods) {
      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
        redefine(IterablePrototype, KEY, methods[KEY]);
      }
    } else $({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
  }

  return methods;
};


/***/ }),

/***/ "7e12":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var trim = __webpack_require__("58a8").trim;
var whitespaces = __webpack_require__("5899");

var $parseFloat = global.parseFloat;
var FORCED = 1 / $parseFloat(whitespaces + '-0') !== -Infinity;

// `parseFloat` method
// https://tc39.github.io/ecma262/#sec-parsefloat-string
module.exports = FORCED ? function parseFloat(string) {
  var trimmedString = trim(String(string));
  var result = $parseFloat(trimmedString);
  return result === 0 && trimmedString.charAt(0) == '-' ? -0 : result;
} : $parseFloat;


/***/ }),

/***/ "7f9a":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var inspectSource = __webpack_require__("8925");

var WeakMap = global.WeakMap;

module.exports = typeof WeakMap === 'function' && /native code/.test(inspectSource(WeakMap));


/***/ }),

/***/ "81d5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toObject = __webpack_require__("7b0b");
var toAbsoluteIndex = __webpack_require__("23cb");
var toLength = __webpack_require__("50c4");

// `Array.prototype.fill` method implementation
// https://tc39.github.io/ecma262/#sec-array.prototype.fill
module.exports = function fill(value /* , start = 0, end = @length */) {
  var O = toObject(this);
  var length = toLength(O.length);
  var argumentsLength = arguments.length;
  var index = toAbsoluteIndex(argumentsLength > 1 ? arguments[1] : undefined, length);
  var end = argumentsLength > 2 ? arguments[2] : undefined;
  var endPos = end === undefined ? length : toAbsoluteIndex(end, length);
  while (endPos > index) O[index++] = value;
  return O;
};


/***/ }),

/***/ "825a":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");

module.exports = function (it) {
  if (!isObject(it)) {
    throw TypeError(String(it) + ' is not an object');
  } return it;
};


/***/ }),

/***/ "83ab":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");

// Thank's IE8 for his funny defineProperty
module.exports = !fails(function () {
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});


/***/ }),

/***/ "8418":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toPrimitive = __webpack_require__("c04e");
var definePropertyModule = __webpack_require__("9bf2");
var createPropertyDescriptor = __webpack_require__("5c6c");

module.exports = function (object, key, value) {
  var propertyKey = toPrimitive(key);
  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));
  else object[propertyKey] = value;
};


/***/ }),

/***/ "843c":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var $padEnd = __webpack_require__("0ccb").end;
var WEBKIT_BUG = __webpack_require__("9a0c");

// `String.prototype.padEnd` method
// https://tc39.github.io/ecma262/#sec-string.prototype.padend
$({ target: 'String', proto: true, forced: WEBKIT_BUG }, {
  padEnd: function padEnd(maxLength /* , fillString = ' ' */) {
    return $padEnd(this, maxLength, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "861d":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "8745":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Copyable_vue_vue_type_style_index_0_id_1fbe8b15_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("3d15");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Copyable_vue_vue_type_style_index_0_id_1fbe8b15_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Copyable_vue_vue_type_style_index_0_id_1fbe8b15_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Copyable_vue_vue_type_style_index_0_id_1fbe8b15_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "8925":
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__("c6cd");

var functionToString = Function.toString;

// this helper broken in `3.4.1-3.4.4`, so we can't use `shared` helper
if (typeof store.inspectSource != 'function') {
  store.inspectSource = function (it) {
    return functionToString.call(it);
  };
}

module.exports = store.inspectSource;


/***/ }),

/***/ "8a79":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var getOwnPropertyDescriptor = __webpack_require__("06cf").f;
var toLength = __webpack_require__("50c4");
var notARegExp = __webpack_require__("5a34");
var requireObjectCoercible = __webpack_require__("1d80");
var correctIsRegExpLogic = __webpack_require__("ab13");
var IS_PURE = __webpack_require__("c430");

var nativeEndsWith = ''.endsWith;
var min = Math.min;

var CORRECT_IS_REGEXP_LOGIC = correctIsRegExpLogic('endsWith');
// https://github.com/zloirock/core-js/pull/702
var MDN_POLYFILL_BUG = !IS_PURE && !CORRECT_IS_REGEXP_LOGIC && !!function () {
  var descriptor = getOwnPropertyDescriptor(String.prototype, 'endsWith');
  return descriptor && !descriptor.writable;
}();

// `String.prototype.endsWith` method
// https://tc39.github.io/ecma262/#sec-string.prototype.endswith
$({ target: 'String', proto: true, forced: !MDN_POLYFILL_BUG && !CORRECT_IS_REGEXP_LOGIC }, {
  endsWith: function endsWith(searchString /* , endPosition = @length */) {
    var that = String(requireObjectCoercible(this));
    notARegExp(searchString);
    var endPosition = arguments.length > 1 ? arguments[1] : undefined;
    var len = toLength(that.length);
    var end = endPosition === undefined ? len : min(toLength(endPosition), len);
    var search = String(searchString);
    return nativeEndsWith
      ? nativeEndsWith.call(that, search, end)
      : that.slice(end - search.length, end) === search;
  }
});


/***/ }),

/***/ "8aa5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var charAt = __webpack_require__("6547").charAt;

// `AdvanceStringIndex` abstract operation
// https://tc39.github.io/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? charAt(S, index).length : 1);
};


/***/ }),

/***/ "8ba4":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("23e7");
var isInteger = __webpack_require__("5e89");

// `Number.isInteger` method
// https://tc39.github.io/ecma262/#sec-number.isinteger
$({ target: 'Number', stat: true }, {
  isInteger: isInteger
});


/***/ }),

/***/ "8c4b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = format;

var _templateFormatter = __webpack_require__("9f3c");

var _templateFormatter2 = _interopRequireDefault(_templateFormatter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Formats `value` value preserving `caret` at the same character.
//
// `{ value, caret }` attribute is the result of `parse()` function call.
//
// Returns `{ text, caret }` where the new `caret` is the caret position
// inside `text` text corresponding to the original `caret` position inside `value`.
//
// `formatter(value)` is a function returning `{ text, template }`.
//
// `text` is the `value` value formatted using `template`.
// It may either cut off the non-filled right part of the `template`
// or it may fill the non-filled character placeholders
// in the right part of the `template` with `spacer`
// which is a space (' ') character by default.
//
// `template` is the template used to format the `value`.
// It can be either a full-length template or a partial template.
//
// `formatter` can also be a string — a `template`
// where character placeholders are denoted by 'x'es.
// In this case `formatter` function is automatically created.
//
// Example:
//
// `value` is '880',
// `caret` is `2` (before the first `0`)
//
// `formatter` is `'880' =>
//   { text: '8 (80 )', template: 'x (xxx) xxx-xx-xx' }`
//
// The result is `{ text: '8 (80 )', caret: 4 }`.
//
function format(value, caret, formatter) {
	if (typeof formatter === 'string') {
		formatter = (0, _templateFormatter2.default)(formatter);
	}

	var _ref = formatter(value) || {},
	    text = _ref.text,
	    template = _ref.template;

	if (text === undefined) {
		text = value;
	}

	if (template) {
		if (caret === undefined) {
			caret = text.length;
		} else {
			var index = 0;
			var found = false;

			var possibly_last_input_character_index = -1;

			while (index < text.length && index < template.length) {
				// Character placeholder found
				if (text[index] !== template[index]) {
					if (caret === 0) {
						found = true;
						caret = index;
						break;
					}

					possibly_last_input_character_index = index;

					caret--;
				}

				index++;
			}

			// If the caret was positioned after last input character,
			// then the text caret index is just after the last input character.
			if (!found) {
				caret = possibly_last_input_character_index + 1;
			}
		}
	}

	return { text: text, caret: caret };
}
//# sourceMappingURL=format.js.map

/***/ }),

/***/ "8d7d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = edit;
// Edits text `value` (if `operation` is passed) and repositions the `caret` if needed.
//
// Example:
//
// value - '88005553535'
// caret - 2 // starting from 0; is positioned before the first zero
// operation - 'Backspace'
//
// Returns
// {
// 	value: '8005553535'
// 	caret: 1
// }
//
// Currently supports just 'Delete' and 'Backspace' operations
//
function edit(value, caret, operation) {
	switch (operation) {
		case 'Backspace':
			// If there exists the previous character,
			// then erase it and reposition the caret.
			if (caret > 0) {
				// Remove the previous character
				value = value.slice(0, caret - 1) + value.slice(caret);
				// Position the caret where the previous (erased) character was
				caret--;
			}
			break;

		case 'Delete':
			// Remove current digit (if any)
			value = value.slice(0, caret) + value.slice(caret + 1);
			break;
	}

	return { value: value, caret: caret };
}
//# sourceMappingURL=edit.js.map

/***/ }),

/***/ "90e3":
/***/ (function(module, exports) {

var id = 0;
var postfix = Math.random();

module.exports = function (key) {
  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
};


/***/ }),

/***/ "9112":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var definePropertyModule = __webpack_require__("9bf2");
var createPropertyDescriptor = __webpack_require__("5c6c");

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "9152":
/***/ (function(module, exports) {

exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = ((value * c) - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),

/***/ "9263":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var regexpFlags = __webpack_require__("ad6d");
var stickyHelpers = __webpack_require__("9f7f");

var nativeExec = RegExp.prototype.exec;
// This always refers to the native implementation, because the
// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
// which loads this file before patching the method.
var nativeReplace = String.prototype.replace;

var patchedExec = nativeExec;

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/;
  var re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1.lastIndex !== 0 || re2.lastIndex !== 0;
})();

var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y || stickyHelpers.BROKEN_CARET;

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y;

if (PATCH) {
  patchedExec = function exec(str) {
    var re = this;
    var lastIndex, reCopy, match, i;
    var sticky = UNSUPPORTED_Y && re.sticky;
    var flags = regexpFlags.call(re);
    var source = re.source;
    var charsAdded = 0;
    var strCopy = str;

    if (sticky) {
      flags = flags.replace('y', '');
      if (flags.indexOf('g') === -1) {
        flags += 'g';
      }

      strCopy = String(str).slice(re.lastIndex);
      // Support anchored sticky behavior.
      if (re.lastIndex > 0 && (!re.multiline || re.multiline && str[re.lastIndex - 1] !== '\n')) {
        source = '(?: ' + source + ')';
        strCopy = ' ' + strCopy;
        charsAdded++;
      }
      // ^(? + rx + ) is needed, in combination with some str slicing, to
      // simulate the 'y' flag.
      reCopy = new RegExp('^(?:' + source + ')', flags);
    }

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + source + '$(?!\\s)', flags);
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;

    match = nativeExec.call(sticky ? reCopy : re, strCopy);

    if (sticky) {
      if (match) {
        match.input = match.input.slice(charsAdded);
        match[0] = match[0].slice(charsAdded);
        match.index = re.lastIndex;
        re.lastIndex += match[0].length;
      } else re.lastIndex = 0;
    } else if (UPDATES_LAST_INDEX_WRONG && match) {
      re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    return match;
  };
}

module.exports = patchedExec;


/***/ }),

/***/ "94a7":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "94ca":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : typeof detection == 'function' ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),

/***/ "96cf":
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          resolve(result);
        }, reject);
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() { return this })() || Function("return this")()
);


/***/ }),

/***/ "970b":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "99af":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var fails = __webpack_require__("d039");
var isArray = __webpack_require__("e8b5");
var isObject = __webpack_require__("861d");
var toObject = __webpack_require__("7b0b");
var toLength = __webpack_require__("50c4");
var createProperty = __webpack_require__("8418");
var arraySpeciesCreate = __webpack_require__("65f0");
var arrayMethodHasSpeciesSupport = __webpack_require__("1dde");
var wellKnownSymbol = __webpack_require__("b622");
var V8_VERSION = __webpack_require__("2d00");

var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
var MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded';

// We can't use this feature detection in V8 since it causes
// deoptimization and serious performance degradation
// https://github.com/zloirock/core-js/issues/679
var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails(function () {
  var array = [];
  array[IS_CONCAT_SPREADABLE] = false;
  return array.concat()[0] !== array;
});

var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('concat');

var isConcatSpreadable = function (O) {
  if (!isObject(O)) return false;
  var spreadable = O[IS_CONCAT_SPREADABLE];
  return spreadable !== undefined ? !!spreadable : isArray(O);
};

var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT;

// `Array.prototype.concat` method
// https://tc39.github.io/ecma262/#sec-array.prototype.concat
// with adding support of @@isConcatSpreadable and @@species
$({ target: 'Array', proto: true, forced: FORCED }, {
  concat: function concat(arg) { // eslint-disable-line no-unused-vars
    var O = toObject(this);
    var A = arraySpeciesCreate(O, 0);
    var n = 0;
    var i, k, length, len, E;
    for (i = -1, length = arguments.length; i < length; i++) {
      E = i === -1 ? O : arguments[i];
      if (isConcatSpreadable(E)) {
        len = toLength(E.length);
        if (n + len > MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);
      } else {
        if (n >= MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        createProperty(A, n++, E);
      }
    }
    A.length = n;
    return A;
  }
});


/***/ }),

/***/ "9a0c":
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/zloirock/core-js/issues/280
var userAgent = __webpack_require__("342f");

// eslint-disable-next-line unicorn/no-unsafe-regex
module.exports = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(userAgent);


/***/ }),

/***/ "9b4c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddressDisplay_vue_vue_type_style_index_0_id_cd7c85e6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("5397");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddressDisplay_vue_vue_type_style_index_0_id_cd7c85e6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddressDisplay_vue_vue_type_style_index_0_id_cd7c85e6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddressDisplay_vue_vue_type_style_index_0_id_cd7c85e6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "9bdd":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("825a");

// call something on iterator step with safe closing on error
module.exports = function (iterator, fn, value, ENTRIES) {
  try {
    return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (error) {
    var returnMethod = iterator['return'];
    if (returnMethod !== undefined) anObject(returnMethod.call(iterator));
    throw error;
  }
};


/***/ }),

/***/ "9bf2":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var IE8_DOM_DEFINE = __webpack_require__("0cfb");
var anObject = __webpack_require__("825a");
var toPrimitive = __webpack_require__("c04e");

var nativeDefineProperty = Object.defineProperty;

// `Object.defineProperty` method
// https://tc39.github.io/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return nativeDefineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "9d96":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "9ed3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var IteratorPrototype = __webpack_require__("ae93").IteratorPrototype;
var create = __webpack_require__("7c73");
var createPropertyDescriptor = __webpack_require__("5c6c");
var setToStringTag = __webpack_require__("d44e");
var Iterators = __webpack_require__("3f8c");

var returnThis = function () { return this; };

module.exports = function (IteratorConstructor, NAME, next) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(1, next) });
  setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
  Iterators[TO_STRING_TAG] = returnThis;
  return IteratorConstructor;
};


/***/ }),

/***/ "9f3c":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function (template) {
	var placeholder = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'x';
	var should_close_braces = arguments[2];

	if (!template) {
		return function (value) {
			return { text: value };
		};
	}

	var characters_in_template = (0, _helpers.count_occurences)(placeholder, template);

	return function (value) {
		if (!value) {
			return { text: '', template: template };
		}

		var value_character_index = 0;
		var filled_in_template = '';

		// Using `.split('')` here instead of normal `for ... of`
		// because the importing application doesn't neccessarily include an ES6 polyfill.
		// The `.split('')` approach discards "exotic" UTF-8 characters
		// (the ones consisting of four bytes)
		// but template placeholder characters don't fall into that range
		// and appending UTF-8 characters to a string in parts still works.
		for (var _iterator = template.split(''), _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
			var _ref;

			if (_isArray) {
				if (_i >= _iterator.length) break;
				_ref = _iterator[_i++];
			} else {
				_i = _iterator.next();
				if (_i.done) break;
				_ref = _i.value;
			}

			var character = _ref;

			if (character !== placeholder) {
				filled_in_template += character;
				continue;
			}

			filled_in_template += value[value_character_index];
			value_character_index++;

			// If the last available value character has been filled in,
			// then return the filled in template
			// (either trim the right part or retain it,
			//  if no more character placeholders in there)
			if (value_character_index === value.length) {
				// If there are more character placeholders
				// in the right part of the template
				// then simply trim it.
				if (value.length < characters_in_template) {
					break;
				}
			}
		}

		if (should_close_braces) {
			filled_in_template = (0, _closeBraces2.default)(filled_in_template, template);
		}

		return { text: filled_in_template, template: template };
	};
};

var _helpers = __webpack_require__("ac61");

var _closeBraces = __webpack_require__("229a");

var _closeBraces2 = _interopRequireDefault(_closeBraces);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
//# sourceMappingURL=template formatter.js.map

/***/ }),

/***/ "9f7f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var fails = __webpack_require__("d039");

// babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError,
// so we use an intermediate function.
function RE(s, f) {
  return RegExp(s, f);
}

exports.UNSUPPORTED_Y = fails(function () {
  // babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
  var re = RE('a', 'y');
  re.lastIndex = 2;
  return re.exec('abcd') != null;
});

exports.BROKEN_CARET = fails(function () {
  // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
  var re = RE('^r', 'gy');
  re.lastIndex = 2;
  return re.exec('str') != null;
});


/***/ }),

/***/ "a132":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddressInput_vue_vue_type_style_index_0_id_836b5032_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("9d96");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddressInput_vue_vue_type_style_index_0_id_836b5032_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddressInput_vue_vue_type_style_index_0_id_836b5032_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddressInput_vue_vue_type_style_index_0_id_836b5032_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "a15b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var IndexedObject = __webpack_require__("44ad");
var toIndexedObject = __webpack_require__("fc6a");
var arrayMethodIsStrict = __webpack_require__("a640");

var nativeJoin = [].join;

var ES3_STRINGS = IndexedObject != Object;
var STRICT_METHOD = arrayMethodIsStrict('join', ',');

// `Array.prototype.join` method
// https://tc39.github.io/ecma262/#sec-array.prototype.join
$({ target: 'Array', proto: true, forced: ES3_STRINGS || !STRICT_METHOD }, {
  join: function join(separator) {
    return nativeJoin.call(toIndexedObject(this), separator === undefined ? ',' : separator);
  }
});


/***/ }),

/***/ "a1f0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.onCut = onCut;
exports.onPaste = onPaste;
exports.onChange = onChange;
exports.onKeyDown = onKeyDown;

var _edit = __webpack_require__("8d7d");

var _edit2 = _interopRequireDefault(_edit);

var _parse3 = __webpack_require__("32fb");

var _parse4 = _interopRequireDefault(_parse3);

var _format2 = __webpack_require__("8c4b");

var _format3 = _interopRequireDefault(_format2);

var _dom = __webpack_require__("33c5");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function onCut(event, input, _parse, _format, on_change) {
	// The actual cut hasn't happened just yet hence the timeout.
	setTimeout(function () {
		return format_input_text(input, _parse, _format, undefined, on_change);
	}, 0);
}

function onPaste(event, input, _parse, _format, on_change) {
	var selection = (0, _dom.getSelection)(input);

	// If selection is made,
	// just erase the selected text
	// prior to pasting
	if (selection) {
		erase_selection(input, selection);
	}

	format_input_text(input, _parse, _format, undefined, on_change);
}

function onChange(event, input, _parse, _format, on_change) {
	format_input_text(input, _parse, _format, undefined, on_change);
}

// Intercepts "Delete" and "Backspace" keys.
// (hitting "Delete" or "Backspace" at any caret
//  position should always result in rasing a digit)
function onKeyDown(event, input, _parse, _format, on_change) {
	var operation = (0, _dom.getOperation)(event);

	switch (operation) {
		case 'Delete':
		case 'Backspace':
			// Intercept this operation and perform it manually.
			event.preventDefault();

			var selection = (0, _dom.getSelection)(input);

			// If selection is made,
			// just erase the selected text,
			// and don't apply any more operations to it.
			if (selection) {
				erase_selection(input, selection);
				return format_input_text(input, _parse, _format, undefined, on_change);
			}

			// Else, perform the (character erasing) operation manually
			return format_input_text(input, _parse, _format, operation, on_change);

		default:
		// Will be handled when `onChange` fires.
	}
}

/**
 * Erases the selected text inside an `<input/>`.
 * @param  {DOMElement} input
 * @param  {Selection} selection
 */
function erase_selection(input, selection) {
	var text = input.value;
	text = text.slice(0, selection.start) + text.slice(selection.end);

	input.value = text;
	(0, _dom.setCaretPosition)(input, selection.start);
}

/**
 * Parses and re-formats `<input/>` textual value.
 * E.g. when a user enters something into the `<input/>`
 * that raw input must first be parsed and the re-formatted properly.
 * Is called either after some user input (e.g. entered a character, pasted something)
 * or after the user performed an `operation` (e.g. "Backspace", "Delete").
 * @param  {DOMElement} input
 * @param  {Function} parse
 * @param  {Function} format
 * @param  {string} [operation] - The operation that triggered `<input/>` textual value change. E.g. "Backspace", "Delete".
 * @param  {Function} onChange
 */
function format_input_text(input, _parse, _format, operation, on_change) {
	// Parse `<input/>` textual value.
	// Get `value` and `caret` position.
	var _parse2 = (0, _parse4.default)(input.value, (0, _dom.getCaretPosition)(input), _parse),
	    value = _parse2.value,
	    caret = _parse2.caret;

	// If a user performed an operation (e.g. "Backspace", "Delete")
	// then apply that operation and get new `value` and `caret` position.


	if (operation) {
		var operation_applied = (0, _edit2.default)(value, caret, operation);

		value = operation_applied.value;
		caret = operation_applied.caret;
	}

	// Format the `value`.
	// (and reposition the caret accordingly)
	var formatted = (0, _format3.default)(value, caret, _format);

	var text = formatted.text;
	caret = formatted.caret;

	// Set `<input/>` textual value manually
	// to prevent React from resetting the caret position
	// later inside subsequent `render()`.
	// Doesn't work for custom `inputComponent`s for some reason.
	input.value = text;
	// Position the caret properly.
	(0, _dom.setCaretPosition)(input, caret);

	// `<input/>` textual value may have changed,
	// so the parsed `value` may have changed too.
	// The `value` didn't neccessarily change
	// but it might have.
	on_change(value);
}
//# sourceMappingURL=input control.js.map

/***/ }),

/***/ "a4d3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var global = __webpack_require__("da84");
var getBuiltIn = __webpack_require__("d066");
var IS_PURE = __webpack_require__("c430");
var DESCRIPTORS = __webpack_require__("83ab");
var NATIVE_SYMBOL = __webpack_require__("4930");
var USE_SYMBOL_AS_UID = __webpack_require__("fdbf");
var fails = __webpack_require__("d039");
var has = __webpack_require__("5135");
var isArray = __webpack_require__("e8b5");
var isObject = __webpack_require__("861d");
var anObject = __webpack_require__("825a");
var toObject = __webpack_require__("7b0b");
var toIndexedObject = __webpack_require__("fc6a");
var toPrimitive = __webpack_require__("c04e");
var createPropertyDescriptor = __webpack_require__("5c6c");
var nativeObjectCreate = __webpack_require__("7c73");
var objectKeys = __webpack_require__("df75");
var getOwnPropertyNamesModule = __webpack_require__("241c");
var getOwnPropertyNamesExternal = __webpack_require__("057f");
var getOwnPropertySymbolsModule = __webpack_require__("7418");
var getOwnPropertyDescriptorModule = __webpack_require__("06cf");
var definePropertyModule = __webpack_require__("9bf2");
var propertyIsEnumerableModule = __webpack_require__("d1e7");
var createNonEnumerableProperty = __webpack_require__("9112");
var redefine = __webpack_require__("6eeb");
var shared = __webpack_require__("5692");
var sharedKey = __webpack_require__("f772");
var hiddenKeys = __webpack_require__("d012");
var uid = __webpack_require__("90e3");
var wellKnownSymbol = __webpack_require__("b622");
var wrappedWellKnownSymbolModule = __webpack_require__("e538");
var defineWellKnownSymbol = __webpack_require__("746f");
var setToStringTag = __webpack_require__("d44e");
var InternalStateModule = __webpack_require__("69f3");
var $forEach = __webpack_require__("b727").forEach;

var HIDDEN = sharedKey('hidden');
var SYMBOL = 'Symbol';
var PROTOTYPE = 'prototype';
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(SYMBOL);
var ObjectPrototype = Object[PROTOTYPE];
var $Symbol = global.Symbol;
var $stringify = getBuiltIn('JSON', 'stringify');
var nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
var nativeDefineProperty = definePropertyModule.f;
var nativeGetOwnPropertyNames = getOwnPropertyNamesExternal.f;
var nativePropertyIsEnumerable = propertyIsEnumerableModule.f;
var AllSymbols = shared('symbols');
var ObjectPrototypeSymbols = shared('op-symbols');
var StringToSymbolRegistry = shared('string-to-symbol-registry');
var SymbolToStringRegistry = shared('symbol-to-string-registry');
var WellKnownSymbolsStore = shared('wks');
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var USE_SETTER = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDescriptor = DESCRIPTORS && fails(function () {
  return nativeObjectCreate(nativeDefineProperty({}, 'a', {
    get: function () { return nativeDefineProperty(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (O, P, Attributes) {
  var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor(ObjectPrototype, P);
  if (ObjectPrototypeDescriptor) delete ObjectPrototype[P];
  nativeDefineProperty(O, P, Attributes);
  if (ObjectPrototypeDescriptor && O !== ObjectPrototype) {
    nativeDefineProperty(ObjectPrototype, P, ObjectPrototypeDescriptor);
  }
} : nativeDefineProperty;

var wrap = function (tag, description) {
  var symbol = AllSymbols[tag] = nativeObjectCreate($Symbol[PROTOTYPE]);
  setInternalState(symbol, {
    type: SYMBOL,
    tag: tag,
    description: description
  });
  if (!DESCRIPTORS) symbol.description = description;
  return symbol;
};

var isSymbol = USE_SYMBOL_AS_UID ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return Object(it) instanceof $Symbol;
};

var $defineProperty = function defineProperty(O, P, Attributes) {
  if (O === ObjectPrototype) $defineProperty(ObjectPrototypeSymbols, P, Attributes);
  anObject(O);
  var key = toPrimitive(P, true);
  anObject(Attributes);
  if (has(AllSymbols, key)) {
    if (!Attributes.enumerable) {
      if (!has(O, HIDDEN)) nativeDefineProperty(O, HIDDEN, createPropertyDescriptor(1, {}));
      O[HIDDEN][key] = true;
    } else {
      if (has(O, HIDDEN) && O[HIDDEN][key]) O[HIDDEN][key] = false;
      Attributes = nativeObjectCreate(Attributes, { enumerable: createPropertyDescriptor(0, false) });
    } return setSymbolDescriptor(O, key, Attributes);
  } return nativeDefineProperty(O, key, Attributes);
};

var $defineProperties = function defineProperties(O, Properties) {
  anObject(O);
  var properties = toIndexedObject(Properties);
  var keys = objectKeys(properties).concat($getOwnPropertySymbols(properties));
  $forEach(keys, function (key) {
    if (!DESCRIPTORS || $propertyIsEnumerable.call(properties, key)) $defineProperty(O, key, properties[key]);
  });
  return O;
};

var $create = function create(O, Properties) {
  return Properties === undefined ? nativeObjectCreate(O) : $defineProperties(nativeObjectCreate(O), Properties);
};

var $propertyIsEnumerable = function propertyIsEnumerable(V) {
  var P = toPrimitive(V, true);
  var enumerable = nativePropertyIsEnumerable.call(this, P);
  if (this === ObjectPrototype && has(AllSymbols, P) && !has(ObjectPrototypeSymbols, P)) return false;
  return enumerable || !has(this, P) || !has(AllSymbols, P) || has(this, HIDDEN) && this[HIDDEN][P] ? enumerable : true;
};

var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(O, P) {
  var it = toIndexedObject(O);
  var key = toPrimitive(P, true);
  if (it === ObjectPrototype && has(AllSymbols, key) && !has(ObjectPrototypeSymbols, key)) return;
  var descriptor = nativeGetOwnPropertyDescriptor(it, key);
  if (descriptor && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) {
    descriptor.enumerable = true;
  }
  return descriptor;
};

var $getOwnPropertyNames = function getOwnPropertyNames(O) {
  var names = nativeGetOwnPropertyNames(toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (!has(AllSymbols, key) && !has(hiddenKeys, key)) result.push(key);
  });
  return result;
};

var $getOwnPropertySymbols = function getOwnPropertySymbols(O) {
  var IS_OBJECT_PROTOTYPE = O === ObjectPrototype;
  var names = nativeGetOwnPropertyNames(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (has(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || has(ObjectPrototype, key))) {
      result.push(AllSymbols[key]);
    }
  });
  return result;
};

// `Symbol` constructor
// https://tc39.github.io/ecma262/#sec-symbol-constructor
if (!NATIVE_SYMBOL) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor');
    var description = !arguments.length || arguments[0] === undefined ? undefined : String(arguments[0]);
    var tag = uid(description);
    var setter = function (value) {
      if (this === ObjectPrototype) setter.call(ObjectPrototypeSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDescriptor(this, tag, createPropertyDescriptor(1, value));
    };
    if (DESCRIPTORS && USE_SETTER) setSymbolDescriptor(ObjectPrototype, tag, { configurable: true, set: setter });
    return wrap(tag, description);
  };

  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return getInternalState(this).tag;
  });

  redefine($Symbol, 'withoutSetter', function (description) {
    return wrap(uid(description), description);
  });

  propertyIsEnumerableModule.f = $propertyIsEnumerable;
  definePropertyModule.f = $defineProperty;
  getOwnPropertyDescriptorModule.f = $getOwnPropertyDescriptor;
  getOwnPropertyNamesModule.f = getOwnPropertyNamesExternal.f = $getOwnPropertyNames;
  getOwnPropertySymbolsModule.f = $getOwnPropertySymbols;

  wrappedWellKnownSymbolModule.f = function (name) {
    return wrap(wellKnownSymbol(name), name);
  };

  if (DESCRIPTORS) {
    // https://github.com/tc39/proposal-Symbol-description
    nativeDefineProperty($Symbol[PROTOTYPE], 'description', {
      configurable: true,
      get: function description() {
        return getInternalState(this).description;
      }
    });
    if (!IS_PURE) {
      redefine(ObjectPrototype, 'propertyIsEnumerable', $propertyIsEnumerable, { unsafe: true });
    }
  }
}

$({ global: true, wrap: true, forced: !NATIVE_SYMBOL, sham: !NATIVE_SYMBOL }, {
  Symbol: $Symbol
});

$forEach(objectKeys(WellKnownSymbolsStore), function (name) {
  defineWellKnownSymbol(name);
});

$({ target: SYMBOL, stat: true, forced: !NATIVE_SYMBOL }, {
  // `Symbol.for` method
  // https://tc39.github.io/ecma262/#sec-symbol.for
  'for': function (key) {
    var string = String(key);
    if (has(StringToSymbolRegistry, string)) return StringToSymbolRegistry[string];
    var symbol = $Symbol(string);
    StringToSymbolRegistry[string] = symbol;
    SymbolToStringRegistry[symbol] = string;
    return symbol;
  },
  // `Symbol.keyFor` method
  // https://tc39.github.io/ecma262/#sec-symbol.keyfor
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol');
    if (has(SymbolToStringRegistry, sym)) return SymbolToStringRegistry[sym];
  },
  useSetter: function () { USE_SETTER = true; },
  useSimple: function () { USE_SETTER = false; }
});

$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL, sham: !DESCRIPTORS }, {
  // `Object.create` method
  // https://tc39.github.io/ecma262/#sec-object.create
  create: $create,
  // `Object.defineProperty` method
  // https://tc39.github.io/ecma262/#sec-object.defineproperty
  defineProperty: $defineProperty,
  // `Object.defineProperties` method
  // https://tc39.github.io/ecma262/#sec-object.defineproperties
  defineProperties: $defineProperties,
  // `Object.getOwnPropertyDescriptor` method
  // https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptors
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor
});

$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL }, {
  // `Object.getOwnPropertyNames` method
  // https://tc39.github.io/ecma262/#sec-object.getownpropertynames
  getOwnPropertyNames: $getOwnPropertyNames,
  // `Object.getOwnPropertySymbols` method
  // https://tc39.github.io/ecma262/#sec-object.getownpropertysymbols
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
$({ target: 'Object', stat: true, forced: fails(function () { getOwnPropertySymbolsModule.f(1); }) }, {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return getOwnPropertySymbolsModule.f(toObject(it));
  }
});

// `JSON.stringify` method behavior with symbols
// https://tc39.github.io/ecma262/#sec-json.stringify
if ($stringify) {
  var FORCED_JSON_STRINGIFY = !NATIVE_SYMBOL || fails(function () {
    var symbol = $Symbol();
    // MS Edge converts symbol values to JSON as {}
    return $stringify([symbol]) != '[null]'
      // WebKit converts symbol values to JSON as null
      || $stringify({ a: symbol }) != '{}'
      // V8 throws on boxed symbols
      || $stringify(Object(symbol)) != '{}';
  });

  $({ target: 'JSON', stat: true, forced: FORCED_JSON_STRINGIFY }, {
    // eslint-disable-next-line no-unused-vars
    stringify: function stringify(it, replacer, space) {
      var args = [it];
      var index = 1;
      var $replacer;
      while (arguments.length > index) args.push(arguments[index++]);
      $replacer = replacer;
      if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
      if (!isArray(replacer)) replacer = function (key, value) {
        if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
        if (!isSymbol(value)) return value;
      };
      args[1] = replacer;
      return $stringify.apply(null, args);
    }
  });
}

// `Symbol.prototype[@@toPrimitive]` method
// https://tc39.github.io/ecma262/#sec-symbol.prototype-@@toprimitive
if (!$Symbol[PROTOTYPE][TO_PRIMITIVE]) {
  createNonEnumerableProperty($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
}
// `Symbol.prototype[@@toStringTag]` property
// https://tc39.github.io/ecma262/#sec-symbol.prototype-@@tostringtag
setToStringTag($Symbol, SYMBOL);

hiddenKeys[HIDDEN] = true;


/***/ }),

/***/ "a623":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var $every = __webpack_require__("b727").every;
var arrayMethodIsStrict = __webpack_require__("a640");
var arrayMethodUsesToLength = __webpack_require__("ae40");

var STRICT_METHOD = arrayMethodIsStrict('every');
var USES_TO_LENGTH = arrayMethodUsesToLength('every');

// `Array.prototype.every` method
// https://tc39.github.io/ecma262/#sec-array.prototype.every
$({ target: 'Array', proto: true, forced: !STRICT_METHOD || !USES_TO_LENGTH }, {
  every: function every(callbackfn /* , thisArg */) {
    return $every(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "a640":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__("d039");

module.exports = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call,no-throw-literal
    method.call(null, argument || function () { throw 1; }, 1);
  });
};


/***/ }),

/***/ "a691":
/***/ (function(module, exports) {

var ceil = Math.ceil;
var floor = Math.floor;

// `ToInteger` abstract operation
// https://tc39.github.io/ecma262/#sec-tointeger
module.exports = function (argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
};


/***/ }),

/***/ "a908":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectBar_vue_vue_type_style_index_0_id_632b1400_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("f6fb");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectBar_vue_vue_type_style_index_0_id_632b1400_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectBar_vue_vue_type_style_index_0_id_632b1400_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectBar_vue_vue_type_style_index_0_id_632b1400_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "a9e3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__("83ab");
var global = __webpack_require__("da84");
var isForced = __webpack_require__("94ca");
var redefine = __webpack_require__("6eeb");
var has = __webpack_require__("5135");
var classof = __webpack_require__("c6b6");
var inheritIfRequired = __webpack_require__("7156");
var toPrimitive = __webpack_require__("c04e");
var fails = __webpack_require__("d039");
var create = __webpack_require__("7c73");
var getOwnPropertyNames = __webpack_require__("241c").f;
var getOwnPropertyDescriptor = __webpack_require__("06cf").f;
var defineProperty = __webpack_require__("9bf2").f;
var trim = __webpack_require__("58a8").trim;

var NUMBER = 'Number';
var NativeNumber = global[NUMBER];
var NumberPrototype = NativeNumber.prototype;

// Opera ~12 has broken Object#toString
var BROKEN_CLASSOF = classof(create(NumberPrototype)) == NUMBER;

// `ToNumber` abstract operation
// https://tc39.github.io/ecma262/#sec-tonumber
var toNumber = function (argument) {
  var it = toPrimitive(argument, false);
  var first, third, radix, maxCode, digits, length, index, code;
  if (typeof it == 'string' && it.length > 2) {
    it = trim(it);
    first = it.charCodeAt(0);
    if (first === 43 || first === 45) {
      third = it.charCodeAt(2);
      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if (first === 48) {
      switch (it.charCodeAt(1)) {
        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal of /^0b[01]+$/i
        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal of /^0o[0-7]+$/i
        default: return +it;
      }
      digits = it.slice(2);
      length = digits.length;
      for (index = 0; index < length; index++) {
        code = digits.charCodeAt(index);
        // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols
        if (code < 48 || code > maxCode) return NaN;
      } return parseInt(digits, radix);
    }
  } return +it;
};

// `Number` constructor
// https://tc39.github.io/ecma262/#sec-number-constructor
if (isForced(NUMBER, !NativeNumber(' 0o1') || !NativeNumber('0b1') || NativeNumber('+0x1'))) {
  var NumberWrapper = function Number(value) {
    var it = arguments.length < 1 ? 0 : value;
    var dummy = this;
    return dummy instanceof NumberWrapper
      // check on 1..constructor(foo) case
      && (BROKEN_CLASSOF ? fails(function () { NumberPrototype.valueOf.call(dummy); }) : classof(dummy) != NUMBER)
        ? inheritIfRequired(new NativeNumber(toNumber(it)), dummy, NumberWrapper) : toNumber(it);
  };
  for (var keys = DESCRIPTORS ? getOwnPropertyNames(NativeNumber) : (
    // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
    // ES2015 (in case, if modules with ES2015 Number statics required before):
    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
  ).split(','), j = 0, key; keys.length > j; j++) {
    if (has(NativeNumber, key = keys[j]) && !has(NumberWrapper, key)) {
      defineProperty(NumberWrapper, key, getOwnPropertyDescriptor(NativeNumber, key));
    }
  }
  NumberWrapper.prototype = NumberPrototype;
  NumberPrototype.constructor = NumberWrapper;
  redefine(global, NUMBER, NumberWrapper);
}


/***/ }),

/***/ "ab13":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("b622");

var MATCH = wellKnownSymbol('match');

module.exports = function (METHOD_NAME) {
  var regexp = /./;
  try {
    '/./'[METHOD_NAME](regexp);
  } catch (e) {
    try {
      regexp[MATCH] = false;
      return '/./'[METHOD_NAME](regexp);
    } catch (f) { /* empty */ }
  } return false;
};


/***/ }),

/***/ "ab37":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PageBody_vue_vue_type_style_index_0_id_0b286594_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("036e");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PageBody_vue_vue_type_style_index_0_id_0b286594_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PageBody_vue_vue_type_style_index_0_id_0b286594_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PageBody_vue_vue_type_style_index_0_id_0b286594_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "ac1f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var exec = __webpack_require__("9263");

$({ target: 'RegExp', proto: true, forced: /./.exec !== exec }, {
  exec: exec
});


/***/ }),

/***/ "ac61":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.count_occurences = count_occurences;
// Counts all occurences of a symbol in a string
function count_occurences(symbol, string) {
	var count = 0;
	// Using `.split('')` here instead of normal `for ... of`
	// because the importing application doesn't neccessarily include an ES6 polyfill.
	// The `.split('')` approach discards "exotic" UTF-8 characters
	// (the ones consisting of four bytes)
	// but template placeholder characters don't fall into that range
	// so skipping such miscellaneous "exotic" characters
	// won't matter here for just counting placeholder character occurrences.
	for (var _iterator = string.split(''), _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
		var _ref;

		if (_isArray) {
			if (_i >= _iterator.length) break;
			_ref = _iterator[_i++];
		} else {
			_i = _iterator.next();
			if (_i.done) break;
			_ref = _i.value;
		}

		var character = _ref;

		if (character === symbol) {
			count++;
		}
	}
	return count;
}
//# sourceMappingURL=helpers.js.map

/***/ }),

/***/ "acd3":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "ad6d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var anObject = __webpack_require__("825a");

// `RegExp.prototype.flags` getter implementation
// https://tc39.github.io/ecma262/#sec-get-regexp.prototype.flags
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.dotAll) result += 's';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),

/***/ "ae40":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var fails = __webpack_require__("d039");
var has = __webpack_require__("5135");

var defineProperty = Object.defineProperty;
var cache = {};

var thrower = function (it) { throw it; };

module.exports = function (METHOD_NAME, options) {
  if (has(cache, METHOD_NAME)) return cache[METHOD_NAME];
  if (!options) options = {};
  var method = [][METHOD_NAME];
  var ACCESSORS = has(options, 'ACCESSORS') ? options.ACCESSORS : false;
  var argument0 = has(options, 0) ? options[0] : thrower;
  var argument1 = has(options, 1) ? options[1] : undefined;

  return cache[METHOD_NAME] = !!method && !fails(function () {
    if (ACCESSORS && !DESCRIPTORS) return true;
    var O = { length: -1 };

    if (ACCESSORS) defineProperty(O, 1, { enumerable: true, get: thrower });
    else O[1] = 1;

    method.call(O, argument0, argument1);
  });
};


/***/ }),

/***/ "ae93":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var getPrototypeOf = __webpack_require__("e163");
var createNonEnumerableProperty = __webpack_require__("9112");
var has = __webpack_require__("5135");
var wellKnownSymbol = __webpack_require__("b622");
var IS_PURE = __webpack_require__("c430");

var ITERATOR = wellKnownSymbol('iterator');
var BUGGY_SAFARI_ITERATORS = false;

var returnThis = function () { return this; };

// `%IteratorPrototype%` object
// https://tc39.github.io/ecma262/#sec-%iteratorprototype%-object
var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

if ([].keys) {
  arrayIterator = [].keys();
  // Safari 8 has buggy iterators w/o `next`
  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
  else {
    PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
  }
}

if (IteratorPrototype == undefined) IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
if (!IS_PURE && !has(IteratorPrototype, ITERATOR)) {
  createNonEnumerableProperty(IteratorPrototype, ITERATOR, returnThis);
}

module.exports = {
  IteratorPrototype: IteratorPrototype,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
};


/***/ }),

/***/ "b041":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var TO_STRING_TAG_SUPPORT = __webpack_require__("00ee");
var classof = __webpack_require__("f5df");

// `Object.prototype.toString` method implementation
// https://tc39.github.io/ecma262/#sec-object.prototype.tostring
module.exports = TO_STRING_TAG_SUPPORT ? {}.toString : function toString() {
  return '[object ' + classof(this) + ']';
};


/***/ }),

/***/ "b0c0":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var defineProperty = __webpack_require__("9bf2").f;

var FunctionPrototype = Function.prototype;
var FunctionPrototypeToString = FunctionPrototype.toString;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// Function instances `.name` property
// https://tc39.github.io/ecma262/#sec-function-instances-name
if (DESCRIPTORS && !(NAME in FunctionPrototype)) {
  defineProperty(FunctionPrototype, NAME, {
    configurable: true,
    get: function () {
      try {
        return FunctionPrototypeToString.call(this).match(nameRE)[1];
      } catch (error) {
        return '';
      }
    }
  });
}


/***/ }),

/***/ "b575":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var getOwnPropertyDescriptor = __webpack_require__("06cf").f;
var classof = __webpack_require__("c6b6");
var macrotask = __webpack_require__("2cf4").set;
var IS_IOS = __webpack_require__("1cdc");

var MutationObserver = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var IS_NODE = classof(process) == 'process';
// Node.js 11 shows ExperimentalWarning on getting `queueMicrotask`
var queueMicrotaskDescriptor = getOwnPropertyDescriptor(global, 'queueMicrotask');
var queueMicrotask = queueMicrotaskDescriptor && queueMicrotaskDescriptor.value;

var flush, head, last, notify, toggle, node, promise, then;

// modern engines have queueMicrotask method
if (!queueMicrotask) {
  flush = function () {
    var parent, fn;
    if (IS_NODE && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (error) {
        if (head) notify();
        else last = undefined;
        throw error;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (IS_NODE) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS - https://github.com/zloirock/core-js/issues/339
  } else if (MutationObserver && !IS_IOS) {
    toggle = true;
    node = document.createTextNode('');
    new MutationObserver(flush).observe(node, { characterData: true });
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    promise = Promise.resolve(undefined);
    then = promise.then;
    notify = function () {
      then.call(promise, flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }
}

module.exports = queueMicrotask || function (fn) {
  var task = { fn: fn, next: undefined };
  if (last) last.next = task;
  if (!head) {
    head = task;
    notify();
  } last = task;
};


/***/ }),

/***/ "b622":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var shared = __webpack_require__("5692");
var has = __webpack_require__("5135");
var uid = __webpack_require__("90e3");
var NATIVE_SYMBOL = __webpack_require__("4930");
var USE_SYMBOL_AS_UID = __webpack_require__("fdbf");

var WellKnownSymbolsStore = shared('wks');
var Symbol = global.Symbol;
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!has(WellKnownSymbolsStore, name)) {
    if (NATIVE_SYMBOL && has(Symbol, name)) WellKnownSymbolsStore[name] = Symbol[name];
    else WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
  } return WellKnownSymbolsStore[name];
};


/***/ }),

/***/ "b639":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__("1fb5")
var ieee754 = __webpack_require__("9152")
var isArray = __webpack_require__("e3db")

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "b64b":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("23e7");
var toObject = __webpack_require__("7b0b");
var nativeKeys = __webpack_require__("df75");
var fails = __webpack_require__("d039");

var FAILS_ON_PRIMITIVES = fails(function () { nativeKeys(1); });

// `Object.keys` method
// https://tc39.github.io/ecma262/#sec-object.keys
$({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES }, {
  keys: function keys(it) {
    return nativeKeys(toObject(it));
  }
});


/***/ }),

/***/ "b727":
/***/ (function(module, exports, __webpack_require__) {

var bind = __webpack_require__("0366");
var IndexedObject = __webpack_require__("44ad");
var toObject = __webpack_require__("7b0b");
var toLength = __webpack_require__("50c4");
var arraySpeciesCreate = __webpack_require__("65f0");

var push = [].push;

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex }` methods implementation
var createMethod = function (TYPE) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject($this);
    var self = IndexedObject(O);
    var boundFunction = bind(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var value, result;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (TYPE) {
        if (IS_MAP) target[index] = result; // map
        else if (result) switch (TYPE) {
          case 3: return true;              // some
          case 5: return value;             // find
          case 6: return index;             // findIndex
          case 2: push.call(target, value); // filter
        } else if (IS_EVERY) return false;  // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

module.exports = {
  // `Array.prototype.forEach` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.foreach
  forEach: createMethod(0),
  // `Array.prototype.map` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.map
  map: createMethod(1),
  // `Array.prototype.filter` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.filter
  filter: createMethod(2),
  // `Array.prototype.some` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.some
  some: createMethod(3),
  // `Array.prototype.every` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.every
  every: createMethod(4),
  // `Array.prototype.find` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.find
  find: createMethod(5),
  // `Array.prototype.findIndex` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod(6)
};


/***/ }),

/***/ "bb2f":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");

module.exports = !fails(function () {
  return Object.isExtensible(Object.preventExtensions({}));
});


/***/ }),

/***/ "bfa7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module, global, Buffer) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Iqons; });
/* unused harmony export makeHash */
/* unused harmony export colorNames */
/* unused harmony export hashToRGB */
/* unused harmony export hashToIndices */
/* unused harmony export getBackgroundColorName */
/* unused harmony export colors */
/* unused harmony export backgroundColors */
class Iqons{static async svg(t){const e=makeHash(t);return this._svgTemplate(e[0],e[2],e[3]+e[4],e[5]+e[6],e[7]+e[8],e[9]+e[10],e[11])}static async render(t,e){e.innerHTML=await this.svg(t)}static async toDataUrl(t){return`data:image/svg+xml;base64,${this._btoa(await this.svg(t,!0))}`}static placeholder(t="#bbb",e=1){return`<svg viewBox="0 0 160 160" width="160" height="160" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/2000/xlink" >\n<path fill="none" stroke="${t}" stroke-width="${2*e}" transform="translate(0, 8) scale(0.5)" d="M251.6 17.34l63.53 110.03c5.72 9.9 5.72 22.1 0 32L251.6 269.4c-5.7 9.9-16.27 16-27.7 16H96.83c-11.43 0-22-6.1-27.7-16L5.6 159.37c-5.7-9.9-5.7-22.1 0-32L69.14 17.34c5.72-9.9 16.28-16 27.7-16H223.9c11.43 0 22 6.1 27.7 16z"/>\n<g transform="scale(0.9) translate(9, 8)">\n<circle cx="80" cy="80" r="40" fill="none" stroke="${t}" stroke-width="${e}" opacity=".9"/>\n<g opacity=".1" fill="#010101"><path d="M119.21,80a39.46,39.46,0,0,1-67.13,28.13c10.36,2.33,36,3,49.82-14.28,10.39-12.47,8.31-33.23,4.16-43.26A39.35,39.35,0,0,1,119.21,80Z"/></g>\n</g></svg>`}static renderPlaceholder(t,e,s){t.innerHTML=this.placeholder(e,s)}static placeholderToDataUrl(t,e){return`data:image/svg+xml;base64,${this._btoa(this.placeholder(t,e))}`}static async image(t){const e=await this.toDataUrl(t),s=await this._loadImage(e);return s.style.width="100%",s.style.height="100%",s}static async _svgTemplate(t,e,s,a,n,i,r){return this._$svg(await this._$iqons(t,e,s,a,n,i,r))}static async _$iqons(t,e,s,a,n,i,r){const o=hashToRGB(t,e,r);return t=o.main,e=o.background,`<g color="${t}" fill="${r=o.accent}">\n<rect fill="${e}" x="0" y="0" width="160" height="160"/>\n<circle cx="80" cy="80" r="40" fill="${t}"/>\n<g opacity=".1" fill="#010101"><path d="M119.21,80a39.46,39.46,0,0,1-67.13,28.13c10.36,2.33,36,3,49.82-14.28,10.39-12.47,8.31-33.23,4.16-43.26A39.35,39.35,0,0,1,119.21,80Z"/></g>\n${await this._generatePart("top",a)}\n${await this._generatePart("side",n)}\n${await this._generatePart("face",s)}\n${await this._generatePart("bottom",i)}\n</g>`}static _$svg(t){const e=this._getRandomId();return`<svg viewBox="0 0 160 160" width="160" height="160" xmlns="http://www.w3.org/2000/svg">\n<defs><clipPath id="hexagon-clip-${e}">\n<path d="M251.6 17.34l63.53 110.03c5.72 9.9 5.72 22.1 0 32L251.6 269.4c-5.7 9.9-16.27 16-27.7 16H96.83c-11.43 0-22-6.1-27.7-16L5.6 159.37c-5.7-9.9-5.7-22.1 0-32L69.14 17.34c5.72-9.9 16.28-16 27.7-16H223.9c11.43 0 22 6.1 27.7 16z" transform="scale(0.5) translate(0, 16)"/>\n</clipPath></defs>\n<g clip-path="url(#hexagon-clip-${e})">\n${t}\n</g></svg>`}static async _generatePart(t,e){const s=await this._getAssets(),a=t+"_"+this._assetIndex(e,t),n=s.getElementById(a);return n?n.innerHTML:""}static _loadImage(t){return new Promise((e,s)=>{const a=document.createElement("img");a.addEventListener("load",t=>e(a),{once:!0}),a.src=t})}static async _getAssets(){return this._assetsPromise||(this._assetsPromise=new Promise(async function(t){let e;e="undefined"!=typeof IqonsAssets?IqonsAssets:await fetch(self.NIMIQ_IQONS_SVG_PATH||Iqons.svgPath).then(t=>t.text()), true&&module.exports&&(global.DOMParser=__webpack_require__("d99e")),t((new DOMParser).parseFromString(e,"image/svg+xml"))}))}static _btoa(t){return true&&module.exports?new Buffer(t).toString("base64"):btoa(t)}static _assetIndex(t,e){return(t=Number(t)%21+1)<10&&(t="0"+t),t}static _getRandomId(){return Math.floor(256*Math.random())}}
// @asset(/node_modules/@nimiq/iqons/dist/iqons.min.svg);
Iqons.svgPath="/node_modules/@nimiq/iqons/dist/iqons.min.svg";
function makeHash(t){const r=(""+t.split("").map(t=>Number(t.charCodeAt(0))+3).reduce((t,r)=>t*(1-t)*__chaosHash(r),.5)).split("").reduce((t,r)=>r+t,"");return _padEnd(r.replace(".",r[5]).substr(4,17),13,r[5])};function __chaosHash(t){let r=1/t;for(let t=0;t<100;t++)r=(1-r)*r*3.569956786876;return r}function _padEnd(t,r,e){if(String.prototype.padEnd)return t.padEnd(r,e);for(;t.length<r;)t+=e;return t.substring(0,Math.max(t.length,r))}
const colorNames=["Orange","Red","Yellow","Indigo","Blue","Purple","Teal","Pink","Green","Brown"];
function hashToRGB(o,n,r){return indicesToRGB(hashToIndices(o,n,r))};function hashToIndices(o,n,r){for(o=parseInt(o,10),n=parseInt(n,10),r=parseInt(r,10),o===n&&++o>9&&(o=0);r===o||r===n;)++r>9&&(r=0);return{main:o,background:n,accent:r}};function indicesToRGB(o){return{main:colors[o.main],background:backgroundColors[o.background],accent:colors[o.accent]}}function getBackgroundColorName(o){const n=makeHash(o),r=parseInt(n[2],10);return colorNames[r]};const colors=["#FC8702","#D94432","#E9B213","#1A5493","#0582CA","#5961A8","#21BCA5","#FA7268","#88B04B","#795548"];const backgroundColors=["#FC8702","#D94432","#E9B213","#1F2348","#0582CA","#5F4B8B","#21BCA5","#FA7268","#88B04B","#795548"];
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("dd40")(module), __webpack_require__("c8ba"), __webpack_require__("b639").Buffer))

/***/ }),

/***/ "c04e":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");

// `ToPrimitive` abstract operation
// https://tc39.github.io/ecma262/#sec-toprimitive
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (input, PREFERRED_STRING) {
  if (!isObject(input)) return input;
  var fn, val;
  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "c35a":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("23e7");
var parseFloat = __webpack_require__("7e12");

// `Number.parseFloat` method
// https://tc39.github.io/ecma262/#sec-number.parseFloat
$({ target: 'Number', stat: true, forced: Number.parseFloat != parseFloat }, {
  parseFloat: parseFloat
});


/***/ }),

/***/ "c430":
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "c6b6":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "c6cd":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var setGlobal = __webpack_require__("ce4e");

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

module.exports = store;


/***/ }),

/***/ "c7ae":
/***/ (function(module, exports) {

//https://developer.mozilla.org/en-US/docs/Web/API/Element


function Node(cfg) {

  this.namespace     = cfg.namespace || null;
  this.text          = cfg.text;
  this._selfCloseTag = cfg.selfCloseTag;


  Object.defineProperties(this, {
    nodeType: {
      value: cfg.nodeType
    },
    nodeName: {
      value: cfg.nodeType == 1 ? cfg.nodeName : '#text'
    },
    childNodes: {
      value: cfg.childNodes
    },
    firstChild: {
      get: function(){
        return this.childNodes[0] || null;
      }
    },
    lastChild: {
      get: function(){
        return this.childNodes[this.childNodes.length-1] || null;
      }
    },
    parentNode: {
      value: cfg.parentNode || null
    },
    attributes: {
      value: cfg.attributes || []
    },
    innerHTML: {
      get: function(){
        var
          result = '',
          cNode;
        for (var i = 0, l = this.childNodes.length; i < l; i++) {
          cNode = this.childNodes[i];
          result += cNode.nodeType === 3 ? cNode.text : cNode.outerHTML;
        }
        return result;
      }
    },
    outerHTML: {
      get: function(){
        if (this.nodeType != 3){
          var
            str,
            attrs = (this.attributes.map(function(elem){
              return elem.name + (elem.value ? '=' + '"'+ elem.value +'"' : '');
            }) || []).join(' '),
            childs = '';

          str = '<' + this.nodeName + (attrs ? ' ' + attrs : '') + (this._selfCloseTag ? '/' : '') + '>';

          if (!this._selfCloseTag){
            childs = (this._selfCloseTag ? '' : this.childNodes.map(function(child){
              return child.outerHTML;
            }) || []).join('');

            str += childs;
            str += '</' + this.nodeName + '>';
          }
        }
        else{
          str = this.textContent;
        }
        return str;
      }
    },
    textContent: {
      get: function(){
        if (this.nodeType == Node.TEXT_NODE){
          return this.text;
        }
        else{
          return this.childNodes.map(function(node){
            return node.textContent;
          }).join('').replace(/\x20+/g, ' ');
        }
      }
    }
  });
}

Node.prototype.getAttribute = function (attributeName) {
  for (var i = 0, l = this.attributes.length; i < l; i++) {
    if (this.attributes[i].name == attributeName) {
      return this.attributes[i].value;
    }
  }
  return null;
};

function searchElements(root, conditionFn, onlyFirst){
  var result = [];
  onlyFirst = !!onlyFirst;
  if (root.nodeType !== 3) {
    for (var i = 0, l = root.childNodes.length; i < l; i++) {
      if (root.childNodes[i].nodeType !== 3 && conditionFn(root.childNodes[i])) {
        result.push(root.childNodes[i]);
        if (onlyFirst){
          break;
        }
      }
      result = result.concat(searchElements(root.childNodes[i], conditionFn));
    }
  }
  return onlyFirst ? result[0] : result;
}

Node.prototype.getElementsByTagName = function (tagName) {
  return searchElements(this, function(elem){
    return elem.nodeName == tagName;
  })
};

Node.prototype.getElementsByClassName = function (className) {
  var expr = new RegExp('^(.*?\\s)?' + className + '(\\s.*?)?$');
  return searchElements(this, function(elem){
    return elem.attributes.length && expr.test(elem.getAttribute('class'));
  })
};

Node.prototype.getElementById = function (id) {
  return searchElements(this, function(elem){
    return elem.attributes.length && elem.getAttribute('id') == id;
  }, true)
};

Node.prototype.getElementsByName = function (name) {
  return searchElements(this, function(elem){
    return elem.attributes.length && elem.getAttribute('name') == name;
  })
};


Node.ELEMENT_NODE = 1;
Node.TEXT_NODE    = 3;

module.exports = Node;

/***/ }),

/***/ "c8ba":
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "c975":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var $indexOf = __webpack_require__("4d64").indexOf;
var arrayMethodIsStrict = __webpack_require__("a640");
var arrayMethodUsesToLength = __webpack_require__("ae40");

var nativeIndexOf = [].indexOf;

var NEGATIVE_ZERO = !!nativeIndexOf && 1 / [1].indexOf(1, -0) < 0;
var STRICT_METHOD = arrayMethodIsStrict('indexOf');
var USES_TO_LENGTH = arrayMethodUsesToLength('indexOf', { ACCESSORS: true, 1: 0 });

// `Array.prototype.indexOf` method
// https://tc39.github.io/ecma262/#sec-array.prototype.indexof
$({ target: 'Array', proto: true, forced: NEGATIVE_ZERO || !STRICT_METHOD || !USES_TO_LENGTH }, {
  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
    return NEGATIVE_ZERO
      // convert -0 to +0
      ? nativeIndexOf.apply(this, arguments) || 0
      : $indexOf(this, searchElement, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "ca84":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("5135");
var toIndexedObject = __webpack_require__("fc6a");
var indexOf = __webpack_require__("4d64").indexOf;
var hiddenKeys = __webpack_require__("d012");

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~indexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "caad":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var $includes = __webpack_require__("4d64").includes;
var addToUnscopables = __webpack_require__("44d2");
var arrayMethodUsesToLength = __webpack_require__("ae40");

var USES_TO_LENGTH = arrayMethodUsesToLength('indexOf', { ACCESSORS: true, 1: 0 });

// `Array.prototype.includes` method
// https://tc39.github.io/ecma262/#sec-array.prototype.includes
$({ target: 'Array', proto: true, forced: !USES_TO_LENGTH }, {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('includes');


/***/ }),

/***/ "cb29":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("23e7");
var fill = __webpack_require__("81d5");
var addToUnscopables = __webpack_require__("44d2");

// `Array.prototype.fill` method
// https://tc39.github.io/ecma262/#sec-array.prototype.fill
$({ target: 'Array', proto: true }, {
  fill: fill
});

// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('fill');


/***/ }),

/***/ "cc12":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var isObject = __webpack_require__("861d");

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),

/***/ "cc31":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "cca6":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("23e7");
var assign = __webpack_require__("60da");

// `Object.assign` method
// https://tc39.github.io/ecma262/#sec-object.assign
$({ target: 'Object', stat: true, forced: Object.assign !== assign }, {
  assign: assign
});


/***/ }),

/***/ "cdf9":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("825a");
var isObject = __webpack_require__("861d");
var newPromiseCapability = __webpack_require__("f069");

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),

/***/ "ce4e":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var createNonEnumerableProperty = __webpack_require__("9112");

module.exports = function (key, value) {
  try {
    createNonEnumerableProperty(global, key, value);
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),

/***/ "d012":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "d039":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ "d066":
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__("428f");
var global = __webpack_require__("da84");

var aFunction = function (variable) {
  return typeof variable == 'function' ? variable : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace])
    : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];
};


/***/ }),

/***/ "d1e7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.github.io/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : nativePropertyIsEnumerable;


/***/ }),

/***/ "d28b":
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__("746f");

// `Symbol.iterator` well-known symbol
// https://tc39.github.io/ecma262/#sec-symbol.iterator
defineWellKnownSymbol('iterator');


/***/ }),

/***/ "d2bb":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("825a");
var aPossiblePrototype = __webpack_require__("3bbe");

// `Object.setPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
    setter.call(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    anObject(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter.call(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);


/***/ }),

/***/ "d3b7":
/***/ (function(module, exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__("00ee");
var redefine = __webpack_require__("6eeb");
var toString = __webpack_require__("b041");

// `Object.prototype.toString` method
// https://tc39.github.io/ecma262/#sec-object.prototype.tostring
if (!TO_STRING_TAG_SUPPORT) {
  redefine(Object.prototype, 'toString', toString, { unsafe: true });
}


/***/ }),

/***/ "d44e":
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__("9bf2").f;
var has = __webpack_require__("5135");
var wellKnownSymbol = __webpack_require__("b622");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');

module.exports = function (it, TAG, STATIC) {
  if (it && !has(it = STATIC ? it : it.prototype, TO_STRING_TAG)) {
    defineProperty(it, TO_STRING_TAG, { configurable: true, value: TAG });
  }
};


/***/ }),

/***/ "d58f":
/***/ (function(module, exports, __webpack_require__) {

var aFunction = __webpack_require__("1c0b");
var toObject = __webpack_require__("7b0b");
var IndexedObject = __webpack_require__("44ad");
var toLength = __webpack_require__("50c4");

// `Array.prototype.{ reduce, reduceRight }` methods implementation
var createMethod = function (IS_RIGHT) {
  return function (that, callbackfn, argumentsLength, memo) {
    aFunction(callbackfn);
    var O = toObject(that);
    var self = IndexedObject(O);
    var length = toLength(O.length);
    var index = IS_RIGHT ? length - 1 : 0;
    var i = IS_RIGHT ? -1 : 1;
    if (argumentsLength < 2) while (true) {
      if (index in self) {
        memo = self[index];
        index += i;
        break;
      }
      index += i;
      if (IS_RIGHT ? index < 0 : length <= index) {
        throw TypeError('Reduce of empty array with no initial value');
      }
    }
    for (;IS_RIGHT ? index >= 0 : length > index; index += i) if (index in self) {
      memo = callbackfn(memo, self[index], index, O);
    }
    return memo;
  };
};

module.exports = {
  // `Array.prototype.reduce` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.reduce
  left: createMethod(false),
  // `Array.prototype.reduceRight` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.reduceright
  right: createMethod(true)
};


/***/ }),

/***/ "d784":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// TODO: Remove from `core-js@4` since it's moved to entry points
__webpack_require__("ac1f");
var redefine = __webpack_require__("6eeb");
var fails = __webpack_require__("d039");
var wellKnownSymbol = __webpack_require__("b622");
var regexpExec = __webpack_require__("9263");
var createNonEnumerableProperty = __webpack_require__("9112");

var SPECIES = wellKnownSymbol('species');

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  // #replace needs built-in support for named groups.
  // #match works fine because it just return the exec results, even if it has
  // a "grops" property.
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  return ''.replace(re, '$<a>') !== '7';
});

// IE <= 11 replaces $0 with the whole match, as if it was $&
// https://stackoverflow.com/questions/6024666/getting-ie-to-replace-a-regex-with-the-literal-string-0
var REPLACE_KEEPS_$0 = (function () {
  return 'a'.replace(/./, '$0') === '$0';
})();

var REPLACE = wellKnownSymbol('replace');
// Safari <= 13.0.3(?) substitutes nth capture where n>m with an empty string
var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = (function () {
  if (/./[REPLACE]) {
    return /./[REPLACE]('a', '$0') === '';
  }
  return false;
})();

// Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
// Weex JS has frozen built-in prototypes, so use try / catch wrapper
var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails(function () {
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length !== 2 || result[0] !== 'a' || result[1] !== 'b';
});

module.exports = function (KEY, length, exec, sham) {
  var SYMBOL = wellKnownSymbol(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;

    if (KEY === 'split') {
      // We can't use real regex here since it causes deoptimization
      // and serious performance degradation in V8
      // https://github.com/zloirock/core-js/issues/306
      re = {};
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
      re.flags = '';
      re[SYMBOL] = /./[SYMBOL];
    }

    re.exec = function () { execCalled = true; return null; };

    re[SYMBOL]('');
    return !execCalled;
  });

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    (KEY === 'replace' && !(
      REPLACE_SUPPORTS_NAMED_GROUPS &&
      REPLACE_KEEPS_$0 &&
      !REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE
    )) ||
    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
  ) {
    var nativeRegExpMethod = /./[SYMBOL];
    var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
      if (regexp.exec === regexpExec) {
        if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
          // The native String method already delegates to @@method (this
          // polyfilled function), leasing to infinite recursion.
          // We avoid it by directly calling the native @@method method.
          return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
        }
        return { done: true, value: nativeMethod.call(str, regexp, arg2) };
      }
      return { done: false };
    }, {
      REPLACE_KEEPS_$0: REPLACE_KEEPS_$0,
      REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE
    });
    var stringMethod = methods[0];
    var regexMethod = methods[1];

    redefine(String.prototype, KEY, stringMethod);
    redefine(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return regexMethod.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return regexMethod.call(string, this); }
    );
  }

  if (sham) createNonEnumerableProperty(RegExp.prototype[SYMBOL], 'sham', true);
};


/***/ }),

/***/ "d81d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var $map = __webpack_require__("b727").map;
var arrayMethodHasSpeciesSupport = __webpack_require__("1dde");
var arrayMethodUsesToLength = __webpack_require__("ae40");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('map');
// FF49- issue
var USES_TO_LENGTH = arrayMethodUsesToLength('map');

// `Array.prototype.map` method
// https://tc39.github.io/ecma262/#sec-array.prototype.map
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
  map: function map(callbackfn /* , thisArg */) {
    return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "d99e":
/***/ (function(module, exports, __webpack_require__) {

var DomParser = __webpack_require__("7345");
module.exports = DomParser;


/***/ }),

/***/ "da84":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line no-undef
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  check(typeof self == 'object' && self) ||
  check(typeof global == 'object' && global) ||
  // eslint-disable-next-line no-new-func
  Function('return this')();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "db98":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "dbb4":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("23e7");
var DESCRIPTORS = __webpack_require__("83ab");
var ownKeys = __webpack_require__("56ef");
var toIndexedObject = __webpack_require__("fc6a");
var getOwnPropertyDescriptorModule = __webpack_require__("06cf");
var createProperty = __webpack_require__("8418");

// `Object.getOwnPropertyDescriptors` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptors
$({ target: 'Object', stat: true, sham: !DESCRIPTORS }, {
  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
    var O = toIndexedObject(object);
    var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
    var keys = ownKeys(O);
    var result = {};
    var index = 0;
    var key, descriptor;
    while (keys.length > index) {
      descriptor = getOwnPropertyDescriptor(O, key = keys[index++]);
      if (descriptor !== undefined) createProperty(result, key, descriptor);
    }
    return result;
  }
});


/***/ }),

/***/ "dccd":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadingSpinner_vue_vue_type_style_index_0_id_01b4df5e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("1b67");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadingSpinner_vue_vue_type_style_index_0_id_01b4df5e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadingSpinner_vue_vue_type_style_index_0_id_01b4df5e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadingSpinner_vue_vue_type_style_index_0_id_01b4df5e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "dce1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SmallPage_vue_vue_type_style_index_0_id_1d450cf2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("2a22");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SmallPage_vue_vue_type_style_index_0_id_1d450cf2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SmallPage_vue_vue_type_style_index_0_id_1d450cf2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SmallPage_vue_vue_type_style_index_0_id_1d450cf2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "dd40":
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "ddb0":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var DOMIterables = __webpack_require__("fdbc");
var ArrayIteratorMethods = __webpack_require__("e260");
var createNonEnumerableProperty = __webpack_require__("9112");
var wellKnownSymbol = __webpack_require__("b622");

var ITERATOR = wellKnownSymbol('iterator');
var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var ArrayValues = ArrayIteratorMethods.values;

for (var COLLECTION_NAME in DOMIterables) {
  var Collection = global[COLLECTION_NAME];
  var CollectionPrototype = Collection && Collection.prototype;
  if (CollectionPrototype) {
    // some Chrome versions have non-configurable methods on DOMTokenList
    if (CollectionPrototype[ITERATOR] !== ArrayValues) try {
      createNonEnumerableProperty(CollectionPrototype, ITERATOR, ArrayValues);
    } catch (error) {
      CollectionPrototype[ITERATOR] = ArrayValues;
    }
    if (!CollectionPrototype[TO_STRING_TAG]) {
      createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);
    }
    if (DOMIterables[COLLECTION_NAME]) for (var METHOD_NAME in ArrayIteratorMethods) {
      // some Chrome versions have non-configurable methods on DOMTokenList
      if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME]) try {
        createNonEnumerableProperty(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME]);
      } catch (error) {
        CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME];
      }
    }
  }
}


/***/ }),

/***/ "df75":
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__("ca84");
var enumBugKeys = __webpack_require__("7839");

// `Object.keys` method
// https://tc39.github.io/ecma262/#sec-object.keys
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),

/***/ "e01a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// `Symbol.prototype.description` getter
// https://tc39.github.io/ecma262/#sec-symbol.prototype.description

var $ = __webpack_require__("23e7");
var DESCRIPTORS = __webpack_require__("83ab");
var global = __webpack_require__("da84");
var has = __webpack_require__("5135");
var isObject = __webpack_require__("861d");
var defineProperty = __webpack_require__("9bf2").f;
var copyConstructorProperties = __webpack_require__("e893");

var NativeSymbol = global.Symbol;

if (DESCRIPTORS && typeof NativeSymbol == 'function' && (!('description' in NativeSymbol.prototype) ||
  // Safari 12 bug
  NativeSymbol().description !== undefined
)) {
  var EmptyStringDescriptionStore = {};
  // wrap Symbol constructor for correct work with undefined description
  var SymbolWrapper = function Symbol() {
    var description = arguments.length < 1 || arguments[0] === undefined ? undefined : String(arguments[0]);
    var result = this instanceof SymbolWrapper
      ? new NativeSymbol(description)
      // in Edge 13, String(Symbol(undefined)) === 'Symbol(undefined)'
      : description === undefined ? NativeSymbol() : NativeSymbol(description);
    if (description === '') EmptyStringDescriptionStore[result] = true;
    return result;
  };
  copyConstructorProperties(SymbolWrapper, NativeSymbol);
  var symbolPrototype = SymbolWrapper.prototype = NativeSymbol.prototype;
  symbolPrototype.constructor = SymbolWrapper;

  var symbolToString = symbolPrototype.toString;
  var native = String(NativeSymbol('test')) == 'Symbol(test)';
  var regexp = /^Symbol\((.*)\)[^)]+$/;
  defineProperty(symbolPrototype, 'description', {
    configurable: true,
    get: function description() {
      var symbol = isObject(this) ? this.valueOf() : this;
      var string = symbolToString.call(symbol);
      if (has(EmptyStringDescriptionStore, symbol)) return '';
      var desc = native ? string.slice(7, -1) : string.replace(regexp, '$1');
      return desc === '' ? undefined : desc;
    }
  });

  $({ global: true, forced: true }, {
    Symbol: SymbolWrapper
  });
}


/***/ }),

/***/ "e163":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("5135");
var toObject = __webpack_require__("7b0b");
var sharedKey = __webpack_require__("f772");
var CORRECT_PROTOTYPE_GETTER = __webpack_require__("e177");

var IE_PROTO = sharedKey('IE_PROTO');
var ObjectPrototype = Object.prototype;

// `Object.getPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-object.getprototypeof
module.exports = CORRECT_PROTOTYPE_GETTER ? Object.getPrototypeOf : function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectPrototype : null;
};


/***/ }),

/***/ "e177":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");

module.exports = !fails(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  return Object.getPrototypeOf(new F()) !== F.prototype;
});


/***/ }),

/***/ "e260":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toIndexedObject = __webpack_require__("fc6a");
var addToUnscopables = __webpack_require__("44d2");
var Iterators = __webpack_require__("3f8c");
var InternalStateModule = __webpack_require__("69f3");
var defineIterator = __webpack_require__("7dd0");

var ARRAY_ITERATOR = 'Array Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);

// `Array.prototype.entries` method
// https://tc39.github.io/ecma262/#sec-array.prototype.entries
// `Array.prototype.keys` method
// https://tc39.github.io/ecma262/#sec-array.prototype.keys
// `Array.prototype.values` method
// https://tc39.github.io/ecma262/#sec-array.prototype.values
// `Array.prototype[@@iterator]` method
// https://tc39.github.io/ecma262/#sec-array.prototype-@@iterator
// `CreateArrayIterator` internal method
// https://tc39.github.io/ecma262/#sec-createarrayiterator
module.exports = defineIterator(Array, 'Array', function (iterated, kind) {
  setInternalState(this, {
    type: ARRAY_ITERATOR,
    target: toIndexedObject(iterated), // target
    index: 0,                          // next index
    kind: kind                         // kind
  });
// `%ArrayIteratorPrototype%.next` method
// https://tc39.github.io/ecma262/#sec-%arrayiteratorprototype%.next
}, function () {
  var state = getInternalState(this);
  var target = state.target;
  var kind = state.kind;
  var index = state.index++;
  if (!target || index >= target.length) {
    state.target = undefined;
    return { value: undefined, done: true };
  }
  if (kind == 'keys') return { value: index, done: false };
  if (kind == 'values') return { value: target[index], done: false };
  return { value: [index, target[index]], done: false };
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values%
// https://tc39.github.io/ecma262/#sec-createunmappedargumentsobject
// https://tc39.github.io/ecma262/#sec-createmappedargumentsobject
Iterators.Arguments = Iterators.Array;

// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "e2cc":
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__("6eeb");

module.exports = function (target, src, options) {
  for (var key in src) redefine(target, key, src[key], options);
  return target;
};


/***/ }),

/***/ "e2d3":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "e3db":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),

/***/ "e439":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("23e7");
var fails = __webpack_require__("d039");
var toIndexedObject = __webpack_require__("fc6a");
var nativeGetOwnPropertyDescriptor = __webpack_require__("06cf").f;
var DESCRIPTORS = __webpack_require__("83ab");

var FAILS_ON_PRIMITIVES = fails(function () { nativeGetOwnPropertyDescriptor(1); });
var FORCED = !DESCRIPTORS || FAILS_ON_PRIMITIVES;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor
$({ target: 'Object', stat: true, forced: FORCED, sham: !DESCRIPTORS }, {
  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(it, key) {
    return nativeGetOwnPropertyDescriptor(toIndexedObject(it), key);
  }
});


/***/ }),

/***/ "e538":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("b622");

exports.f = wellKnownSymbol;


/***/ }),

/***/ "e667":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { error: false, value: exec() };
  } catch (error) {
    return { error: true, value: error };
  }
};


/***/ }),

/***/ "e6cf":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var IS_PURE = __webpack_require__("c430");
var global = __webpack_require__("da84");
var getBuiltIn = __webpack_require__("d066");
var NativePromise = __webpack_require__("fea9");
var redefine = __webpack_require__("6eeb");
var redefineAll = __webpack_require__("e2cc");
var setToStringTag = __webpack_require__("d44e");
var setSpecies = __webpack_require__("2626");
var isObject = __webpack_require__("861d");
var aFunction = __webpack_require__("1c0b");
var anInstance = __webpack_require__("19aa");
var classof = __webpack_require__("c6b6");
var inspectSource = __webpack_require__("8925");
var iterate = __webpack_require__("2266");
var checkCorrectnessOfIteration = __webpack_require__("1c7e");
var speciesConstructor = __webpack_require__("4840");
var task = __webpack_require__("2cf4").set;
var microtask = __webpack_require__("b575");
var promiseResolve = __webpack_require__("cdf9");
var hostReportErrors = __webpack_require__("44de");
var newPromiseCapabilityModule = __webpack_require__("f069");
var perform = __webpack_require__("e667");
var InternalStateModule = __webpack_require__("69f3");
var isForced = __webpack_require__("94ca");
var wellKnownSymbol = __webpack_require__("b622");
var V8_VERSION = __webpack_require__("2d00");

var SPECIES = wellKnownSymbol('species');
var PROMISE = 'Promise';
var getInternalState = InternalStateModule.get;
var setInternalState = InternalStateModule.set;
var getInternalPromiseState = InternalStateModule.getterFor(PROMISE);
var PromiseConstructor = NativePromise;
var TypeError = global.TypeError;
var document = global.document;
var process = global.process;
var $fetch = getBuiltIn('fetch');
var newPromiseCapability = newPromiseCapabilityModule.f;
var newGenericPromiseCapability = newPromiseCapability;
var IS_NODE = classof(process) == 'process';
var DISPATCH_EVENT = !!(document && document.createEvent && global.dispatchEvent);
var UNHANDLED_REJECTION = 'unhandledrejection';
var REJECTION_HANDLED = 'rejectionhandled';
var PENDING = 0;
var FULFILLED = 1;
var REJECTED = 2;
var HANDLED = 1;
var UNHANDLED = 2;
var Internal, OwnPromiseCapability, PromiseWrapper, nativeThen;

var FORCED = isForced(PROMISE, function () {
  var GLOBAL_CORE_JS_PROMISE = inspectSource(PromiseConstructor) !== String(PromiseConstructor);
  if (!GLOBAL_CORE_JS_PROMISE) {
    // V8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
    // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
    // We can't detect it synchronously, so just check versions
    if (V8_VERSION === 66) return true;
    // Unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    if (!IS_NODE && typeof PromiseRejectionEvent != 'function') return true;
  }
  // We need Promise#finally in the pure version for preventing prototype pollution
  if (IS_PURE && !PromiseConstructor.prototype['finally']) return true;
  // We can't use @@species feature detection in V8 since it causes
  // deoptimization and performance degradation
  // https://github.com/zloirock/core-js/issues/679
  if (V8_VERSION >= 51 && /native code/.test(PromiseConstructor)) return false;
  // Detect correctness of subclassing with @@species support
  var promise = PromiseConstructor.resolve(1);
  var FakePromise = function (exec) {
    exec(function () { /* empty */ }, function () { /* empty */ });
  };
  var constructor = promise.constructor = {};
  constructor[SPECIES] = FakePromise;
  return !(promise.then(function () { /* empty */ }) instanceof FakePromise);
});

var INCORRECT_ITERATION = FORCED || !checkCorrectnessOfIteration(function (iterable) {
  PromiseConstructor.all(iterable)['catch'](function () { /* empty */ });
});

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};

var notify = function (promise, state, isReject) {
  if (state.notified) return;
  state.notified = true;
  var chain = state.reactions;
  microtask(function () {
    var value = state.value;
    var ok = state.state == FULFILLED;
    var index = 0;
    // variable length - can't use forEach
    while (chain.length > index) {
      var reaction = chain[index++];
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (state.rejection === UNHANDLED) onHandleUnhandled(promise, state);
            state.rejection = HANDLED;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // can throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (error) {
        if (domain && !exited) domain.exit();
        reject(error);
      }
    }
    state.reactions = [];
    state.notified = false;
    if (isReject && !state.rejection) onUnhandled(promise, state);
  });
};

var dispatchEvent = function (name, promise, reason) {
  var event, handler;
  if (DISPATCH_EVENT) {
    event = document.createEvent('Event');
    event.promise = promise;
    event.reason = reason;
    event.initEvent(name, false, true);
    global.dispatchEvent(event);
  } else event = { promise: promise, reason: reason };
  if (handler = global['on' + name]) handler(event);
  else if (name === UNHANDLED_REJECTION) hostReportErrors('Unhandled promise rejection', reason);
};

var onUnhandled = function (promise, state) {
  task.call(global, function () {
    var value = state.value;
    var IS_UNHANDLED = isUnhandled(state);
    var result;
    if (IS_UNHANDLED) {
      result = perform(function () {
        if (IS_NODE) {
          process.emit('unhandledRejection', value, promise);
        } else dispatchEvent(UNHANDLED_REJECTION, promise, value);
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      state.rejection = IS_NODE || isUnhandled(state) ? UNHANDLED : HANDLED;
      if (result.error) throw result.value;
    }
  });
};

var isUnhandled = function (state) {
  return state.rejection !== HANDLED && !state.parent;
};

var onHandleUnhandled = function (promise, state) {
  task.call(global, function () {
    if (IS_NODE) {
      process.emit('rejectionHandled', promise);
    } else dispatchEvent(REJECTION_HANDLED, promise, state.value);
  });
};

var bind = function (fn, promise, state, unwrap) {
  return function (value) {
    fn(promise, state, value, unwrap);
  };
};

var internalReject = function (promise, state, value, unwrap) {
  if (state.done) return;
  state.done = true;
  if (unwrap) state = unwrap;
  state.value = value;
  state.state = REJECTED;
  notify(promise, state, true);
};

var internalResolve = function (promise, state, value, unwrap) {
  if (state.done) return;
  state.done = true;
  if (unwrap) state = unwrap;
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    var then = isThenable(value);
    if (then) {
      microtask(function () {
        var wrapper = { done: false };
        try {
          then.call(value,
            bind(internalResolve, promise, wrapper, state),
            bind(internalReject, promise, wrapper, state)
          );
        } catch (error) {
          internalReject(promise, wrapper, error, state);
        }
      });
    } else {
      state.value = value;
      state.state = FULFILLED;
      notify(promise, state, false);
    }
  } catch (error) {
    internalReject(promise, { done: false }, error, state);
  }
};

// constructor polyfill
if (FORCED) {
  // 25.4.3.1 Promise(executor)
  PromiseConstructor = function Promise(executor) {
    anInstance(this, PromiseConstructor, PROMISE);
    aFunction(executor);
    Internal.call(this);
    var state = getInternalState(this);
    try {
      executor(bind(internalResolve, this, state), bind(internalReject, this, state));
    } catch (error) {
      internalReject(this, state, error);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    setInternalState(this, {
      type: PROMISE,
      done: false,
      notified: false,
      parent: false,
      reactions: [],
      rejection: false,
      state: PENDING,
      value: undefined
    });
  };
  Internal.prototype = redefineAll(PromiseConstructor.prototype, {
    // `Promise.prototype.then` method
    // https://tc39.github.io/ecma262/#sec-promise.prototype.then
    then: function then(onFulfilled, onRejected) {
      var state = getInternalPromiseState(this);
      var reaction = newPromiseCapability(speciesConstructor(this, PromiseConstructor));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = IS_NODE ? process.domain : undefined;
      state.parent = true;
      state.reactions.push(reaction);
      if (state.state != PENDING) notify(this, state, false);
      return reaction.promise;
    },
    // `Promise.prototype.catch` method
    // https://tc39.github.io/ecma262/#sec-promise.prototype.catch
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    var state = getInternalState(promise);
    this.promise = promise;
    this.resolve = bind(internalResolve, promise, state);
    this.reject = bind(internalReject, promise, state);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === PromiseConstructor || C === PromiseWrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };

  if (!IS_PURE && typeof NativePromise == 'function') {
    nativeThen = NativePromise.prototype.then;

    // wrap native Promise#then for native async functions
    redefine(NativePromise.prototype, 'then', function then(onFulfilled, onRejected) {
      var that = this;
      return new PromiseConstructor(function (resolve, reject) {
        nativeThen.call(that, resolve, reject);
      }).then(onFulfilled, onRejected);
    // https://github.com/zloirock/core-js/issues/640
    }, { unsafe: true });

    // wrap fetch result
    if (typeof $fetch == 'function') $({ global: true, enumerable: true, forced: true }, {
      // eslint-disable-next-line no-unused-vars
      fetch: function fetch(input /* , init */) {
        return promiseResolve(PromiseConstructor, $fetch.apply(global, arguments));
      }
    });
  }
}

$({ global: true, wrap: true, forced: FORCED }, {
  Promise: PromiseConstructor
});

setToStringTag(PromiseConstructor, PROMISE, false, true);
setSpecies(PROMISE);

PromiseWrapper = getBuiltIn(PROMISE);

// statics
$({ target: PROMISE, stat: true, forced: FORCED }, {
  // `Promise.reject` method
  // https://tc39.github.io/ecma262/#sec-promise.reject
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    capability.reject.call(undefined, r);
    return capability.promise;
  }
});

$({ target: PROMISE, stat: true, forced: IS_PURE || FORCED }, {
  // `Promise.resolve` method
  // https://tc39.github.io/ecma262/#sec-promise.resolve
  resolve: function resolve(x) {
    return promiseResolve(IS_PURE && this === PromiseWrapper ? PromiseConstructor : this, x);
  }
});

$({ target: PROMISE, stat: true, forced: INCORRECT_ITERATION }, {
  // `Promise.all` method
  // https://tc39.github.io/ecma262/#sec-promise.all
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var $promiseResolve = aFunction(C.resolve);
      var values = [];
      var counter = 0;
      var remaining = 1;
      iterate(iterable, function (promise) {
        var index = counter++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        $promiseResolve.call(C, promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.error) reject(result.value);
    return capability.promise;
  },
  // `Promise.race` method
  // https://tc39.github.io/ecma262/#sec-promise.race
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      var $promiseResolve = aFunction(C.resolve);
      iterate(iterable, function (promise) {
        $promiseResolve.call(C, promise).then(capability.resolve, reject);
      });
    });
    if (result.error) reject(result.value);
    return capability.promise;
  }
});


/***/ }),

/***/ "e893":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("5135");
var ownKeys = __webpack_require__("56ef");
var getOwnPropertyDescriptorModule = __webpack_require__("06cf");
var definePropertyModule = __webpack_require__("9bf2");

module.exports = function (target, source) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
  }
};


/***/ }),

/***/ "e8b5":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("c6b6");

// `IsArray` abstract operation
// https://tc39.github.io/ecma262/#sec-isarray
module.exports = Array.isArray || function isArray(arg) {
  return classof(arg) == 'Array';
};


/***/ }),

/***/ "e95a":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("b622");
var Iterators = __webpack_require__("3f8c");

var ITERATOR = wellKnownSymbol('iterator');
var ArrayPrototype = Array.prototype;

// check on default Array iterator
module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
};


/***/ }),

/***/ "f069":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var aFunction = __webpack_require__("1c0b");

var PromiseCapability = function (C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
};

// 25.4.1.5 NewPromiseCapability(C)
module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),

/***/ "f183":
/***/ (function(module, exports, __webpack_require__) {

var hiddenKeys = __webpack_require__("d012");
var isObject = __webpack_require__("861d");
var has = __webpack_require__("5135");
var defineProperty = __webpack_require__("9bf2").f;
var uid = __webpack_require__("90e3");
var FREEZING = __webpack_require__("bb2f");

var METADATA = uid('meta');
var id = 0;

var isExtensible = Object.isExtensible || function () {
  return true;
};

var setMetadata = function (it) {
  defineProperty(it, METADATA, { value: {
    objectID: 'O' + ++id, // object ID
    weakData: {}          // weak collections IDs
  } });
};

var fastKey = function (it, create) {
  // return a primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, METADATA)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMetadata(it);
  // return object ID
  } return it[METADATA].objectID;
};

var getWeakData = function (it, create) {
  if (!has(it, METADATA)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMetadata(it);
  // return the store of weak collections IDs
  } return it[METADATA].weakData;
};

// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZING && meta.REQUIRED && isExtensible(it) && !has(it, METADATA)) setMetadata(it);
  return it;
};

var meta = module.exports = {
  REQUIRED: false,
  fastKey: fastKey,
  getWeakData: getWeakData,
  onFreeze: onFreeze
};

hiddenKeys[METADATA] = true;


/***/ }),

/***/ "f1ea":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "f5df":
/***/ (function(module, exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__("00ee");
var classofRaw = __webpack_require__("c6b6");
var wellKnownSymbol = __webpack_require__("b622");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;
};


/***/ }),

/***/ "f6fb":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "f6fd":
/***/ (function(module, exports) {

// document.currentScript polyfill by Adam Miller

// MIT license

(function(document){
  var currentScript = "currentScript",
      scripts = document.getElementsByTagName('script'); // Live NodeList collection

  // If browser needs currentScript polyfill, add get currentScript() to the document object
  if (!(currentScript in document)) {
    Object.defineProperty(document, currentScript, {
      get: function(){

        // IE 6-10 supports script readyState
        // IE 10+ support stack trace
        try { throw new Error(); }
        catch (err) {

          // Find the second match for the "at" string to get file src url from stack.
          // Specifically works with the format of stack traces in IE.
          var i, res = ((/.*at [^\(]*\((.*):.+:.+\)$/ig).exec(err.stack) || [false])[1];

          // For all scripts on the page, if src matches or if ready state is interactive, return the script tag
          for(i in scripts){
            if(scripts[i].src == res || scripts[i].readyState == "interactive"){
              return scripts[i];
            }
          }

          // If no match, return null
          return null;
        }
      }
    });
  }
})(document);


/***/ }),

/***/ "f772":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("5692");
var uid = __webpack_require__("90e3");

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),

/***/ "fae3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  if (true) {
    __webpack_require__("f6fd")
  }

  var setPublicPath_i
  if ((setPublicPath_i = window.document.currentScript) && (setPublicPath_i = setPublicPath_i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = setPublicPath_i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0d243f96-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/AddressDisplay.vue?vue&type=template&id=cd7c85e6&scoped=true&
var AddressDisplayvue_type_template_id_cd7c85e6_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"address-display"},_vm._l((_vm.chunks),function(chunk,index){return _c('span',{key:chunk + index,staticClass:"chunk"},[_vm._v(_vm._s(chunk)),_c('span',{staticClass:"space"})])}),0)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/AddressDisplay.vue?vue&type=template&id=cd7c85e6&scoped=true&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.fill.js
var es_array_fill = __webpack_require__("cb29");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__("ac1f");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.match.js
var es_string_match = __webpack_require__("466d");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.replace.js
var es_string_replace = __webpack_require__("5319");

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
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
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.js
var es_symbol = __webpack_require__("a4d3");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.description.js
var es_symbol_description = __webpack_require__("e01a");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.iterator.js
var es_symbol_iterator = __webpack_require__("d28b");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.iterator.js
var es_array_iterator = __webpack_require__("e260");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__("d3b7");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.iterator.js
var es_string_iterator = __webpack_require__("3ca3");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__("ddb0");

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js







function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js


function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-prototype-of.js
var es_object_get_prototype_of = __webpack_require__("3410");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.set-prototype-of.js
var es_object_set_prototype_of = __webpack_require__("131a");

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js


function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
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

var extendStatics = Object.setPrototypeOf ||
    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
    function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
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

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--13-1!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/AddressDisplay.vue?vue&type=script&lang=ts&












var AddressDisplayvue_type_script_lang_ts_AddressDisplay =
/*#__PURE__*/
function (_Vue) {
  _inherits(AddressDisplay, _Vue);

  function AddressDisplay() {
    _classCallCheck(this, AddressDisplay);

    return _possibleConstructorReturn(this, _getPrototypeOf(AddressDisplay).apply(this, arguments));
  }

  _createClass(AddressDisplay, [{
    key: "chunks",
    get: function get() {
      if (!this.address) return new Array(9).fill('-');
      return this.address.replace(/[\+ ]/g, '').match(/.{4}/g);
    }
  }]);

  return AddressDisplay;
}(external_vue_property_decorator_["Vue"]);

__decorate([Object(external_vue_property_decorator_["Prop"])(String)], AddressDisplayvue_type_script_lang_ts_AddressDisplay.prototype, "address", void 0);

AddressDisplayvue_type_script_lang_ts_AddressDisplay = __decorate([external_vue_property_decorator_["Component"]], AddressDisplayvue_type_script_lang_ts_AddressDisplay);
/* harmony default export */ var AddressDisplayvue_type_script_lang_ts_ = (AddressDisplayvue_type_script_lang_ts_AddressDisplay);
// CONCATENATED MODULE: ./src/components/AddressDisplay.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_AddressDisplayvue_type_script_lang_ts_ = (AddressDisplayvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./src/components/AddressDisplay.vue?vue&type=style&index=0&id=cd7c85e6&scoped=true&lang=css&
var AddressDisplayvue_type_style_index_0_id_cd7c85e6_scoped_true_lang_css_ = __webpack_require__("9b4c");

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

// CONCATENATED MODULE: ./src/components/AddressDisplay.vue






/* normalize component */

var component = normalizeComponent(
  components_AddressDisplayvue_type_script_lang_ts_,
  AddressDisplayvue_type_template_id_cd7c85e6_scoped_true_render,
  staticRenderFns,
  false,
  null,
  "cd7c85e6",
  null
  
)

/* harmony default export */ var components_AddressDisplay = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0d243f96-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/AddressInput.vue?vue&type=template&id=836b5032&scoped=true&
var AddressInputvue_type_template_id_836b5032_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"address-input"},[_c('textarea',{ref:"textarea",attrs:{"placeholder":"NQ","spellcheck":"false","autocomplete":"off"},on:{"keydown":_vm._onKeyDown,"input":_vm._onInput,"paste":_vm._onPaste,"cut":_vm._onCut,"copy":_vm._formatClipboard,"click":_vm._updateSelection,"select":_vm._updateSelection,"blur":_vm._updateSelection,"focus":_vm._onFocus}}),_vm._l((9),function(i){return [_c('div',{key:("block-" + i),staticClass:"block",class:{
            focused: _vm._isBlockFocused(i - 1),
            invisible: _vm._isBlockFilled(i - 1),
        }}),(i % 3)?_c('div',{key:("connector-" + i),staticClass:"block-connector",class:{
            invisible: _vm._isBlockFilled(i - 1) && !_vm._isBlockFocused(i - 1) || _vm._isBlockFilled(i) && !_vm._isBlockFocused(i),
        }}):_vm._e()]}),(_vm.supportsMixBlendMode)?[_vm._l((3),function(row){return [_vm._l((3),function(column){return [_c('div',{key:("color-" + row + "-" + column),staticClass:"color-overlay",style:({
                    /* Hidden when placeholder shown. Visibility instead of v-if to avoid flickering in Firefox */
                    visibility: _vm.currentValue ? 'visible' : 'hidden',
                    left: ("calc(" + (column - 1) + " * (var(--block-width) + var(--block-gap)) + .25rem)"),
                    top: ("calc(" + (row - 1) + " * (var(--block-height) + var(--block-gap)) + .25rem)"),
                    background: ("var(--nimiq-" + (_vm._isBlockFocused((row - 1) * 3 + (column - 1)) ? 'light-' : '') + "blue)"),
                })})]})]})]:_vm._e()],2)}
var AddressInputvue_type_template_id_836b5032_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/AddressInput.vue?vue&type=template&id=836b5032&scoped=true&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__("99af");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.reduce.js
var es_array_reduce = __webpack_require__("13d5");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.constructor.js
var es_regexp_constructor = __webpack_require__("4d63");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.to-string.js
var es_regexp_to_string = __webpack_require__("25f0");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.ends-with.js
var es_string_ends_with = __webpack_require__("8a79");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.split.js
var es_string_split = __webpack_require__("1276");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.starts-with.js
var es_string_starts_with = __webpack_require__("2ca0");

// EXTERNAL MODULE: ./node_modules/input-format/modules/input control.js
var input_control = __webpack_require__("a1f0");

// CONCATENATED MODULE: ./node_modules/@nimiq/utils/dist/module/Clipboard.js
class Clipboard {
    static copy(text) {
        // Simplified and typed version of https://github.com/sindresorhus/copy-text-to-clipboard
        // Additionally added a fix for correctly restoring selections in input fields.
        const element = document.createElement('textarea');
        element.value = text;
        // Prevent keyboard from showing on mobile
        element.setAttribute('readonly', '');
        // @ts-ignore: css property contain not known to current ts version
        element.style.contain = 'strict';
        element.style.position = 'absolute';
        element.style.left = '-9999px';
        element.style.fontSize = '12pt'; // Prevent zooming on iOS
        // store selection to be restored later
        const selection = document.getSelection();
        const originalRange = selection.rangeCount > 0 ? selection.getRangeAt(0) : null;
        const activeInput = document.activeElement
            && (document.activeElement.nodeName === 'INPUT' || document.activeElement.nodeName === 'TEXTAREA')
            ? document.activeElement
            : null;
        document.body.append(element);
        element.select();
        // Explicit selection workaround for iOS
        element.selectionStart = 0;
        element.selectionEnd = text.length;
        let isSuccess = false;
        try {
            isSuccess = document.execCommand('copy');
        }
        catch (e) {
            // Ignore
        }
        element.remove();
        if (activeInput) {
            // Inputs retain their selection on blur. We just have to refocus again.
            activeInput.focus();
        }
        else if (originalRange) {
            selection.removeAllRanges();
            selection.addRange(originalRange);
        }
        return isSuccess;
    }
}


//# sourceMappingURL=Clipboard.js.map

// CONCATENATED MODULE: ./node_modules/@nimiq/utils/dist/module/ValidationUtils.js
class ValidationUtils {
    static isValidAddress(address) {
        if (!address)
            return false;
        try {
            this.isUserFriendlyAddress(address);
            return true;
        }
        catch (e) {
            return false;
        }
    }
    // Copied from: https://github.com/nimiq-network/core/blob/master/src/main/generic/consensus/base/account/Address.js
    static isUserFriendlyAddress(str) {
        if (!str)
            return;
        str = str.replace(/ /g, '');
        if (str.substr(0, 2).toUpperCase() !== 'NQ') {
            throw new Error('Addresses start with NQ');
        }
        if (str.length !== 36) {
            throw new Error('Addresses are 36 chars (ignoring spaces)');
        }
        if (!this._alphabetCheck(str)) {
            throw new Error('Address has invalid characters');
        }
        if (this._ibanCheck(str.substr(4) + str.substr(0, 4)) !== 1) {
            throw new Error('Address Checksum invalid');
        }
    }
    static _alphabetCheck(str) {
        str = str.toUpperCase();
        for (let i = 0; i < str.length; i++) {
            if (!ValidationUtils.NIMIQ_ALPHABET.includes(str[i]))
                return false;
        }
        return true;
    }
    static _ibanCheck(str) {
        const num = str.split('').map((c) => {
            const code = c.toUpperCase().charCodeAt(0);
            return code >= 48 && code <= 57 ? c : (code - 55).toString();
        }).join('');
        let tmp = '';
        for (let i = 0; i < Math.ceil(num.length / 6); i++) {
            tmp = (parseInt(tmp + num.substr(i * 6, 6), 10) % 97).toString();
        }
        return parseInt(tmp, 10);
    }
    static isValidHash(hash) {
        // not using Nimiq Api here to don't require it to be loaded already
        try {
            return atob(hash).length === 32;
        }
        catch (e) {
            return false;
        }
    }
    static get NIMIQ_ALPHABET() {
        // From Nimiq.BufferUtils.BASE32_ALPHABET.NIMIQ
        return '0123456789ABCDEFGHJKLMNPQRSTUVXY';
    }
}


//# sourceMappingURL=ValidationUtils.js.map

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--13-1!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/AddressInput.vue?vue&type=script&lang=ts&















var AddressInput_1;





var AddressInputvue_type_script_lang_ts_AddressInput = AddressInput_1 =
/*#__PURE__*/
function (_Vue) {
  _inherits(AddressInput, _Vue);

  function AddressInput() {
    var _this;

    _classCallCheck(this, AddressInput);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(AddressInput).apply(this, arguments));
    _this.currentValue = '';
    _this.selectionStartBlock = -1;
    _this.selectionEndBlock = -1;
    _this.supportsMixBlendMode = CSS.supports('mix-blend-mode', 'screen');
    return _this;
  } // definiton of the parse method for input-format (https://github.com/catamphetamine/input-format#usage)


  _createClass(AddressInput, [{
    key: "focus",
    value: function focus() {
      var scrollIntoView = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      this.$refs.textarea.focus();
      if (scrollIntoView) this.$refs.textarea.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });
    }
  }, {
    key: "mounted",
    value: function mounted() {
      // trigger initial value change. Not using immediate watcher as it already fires before mounted.
      this._onExternalValueChange(); // Bind selectionchange event handler. It has to be registered on document and is unfortunately not fired for
      // selections in textareas in Firefox. Therefore we also bind the listener to focus, blur, select, click.


      this._updateSelection = this._updateSelection.bind(this);
      document.addEventListener('selectionchange', this._updateSelection);
      if (this.autofocus) this.focus();
    }
  }, {
    key: "destroyed",
    value: function destroyed() {
      document.removeEventListener('selectionchange', this._updateSelection);
    }
  }, {
    key: "_onExternalValueChange",
    value: function _onExternalValueChange() {
      if (AddressInput_1._stripWhitespace(this.value) === AddressInput_1._stripWhitespace(this.currentValue)) return; // could also be using format-input's parse and format helpers that preserve caret position but as we're not
      // interested in that, we calculate the formatted value manually

      var parsedValue = this.value.split('').reduce(function (parsed, char) {
        return parsed + (AddressInput_1._parse(char, parsed) || '');
      }, '');
      this.$refs.textarea.value = AddressInput_1._format(parsedValue).text; // moves the caret to the end

      this._afterChange(parsedValue);
    }
  }, {
    key: "_onKeyDown",
    value: function _onKeyDown(e) {
      var _this2 = this;

      Object(input_control["onKeyDown"])(e, this.$refs.textarea, AddressInput_1._parse, AddressInput_1._format, this._afterChange);
      setTimeout(function () {
        return _this2._updateSelection();
      }, 10); // for arrow keys in Firefox
    }
  }, {
    key: "_onInput",
    value: function _onInput(e) {
      if (e.inputType === 'deleteByDrag') return; // we'll handle the subsequent insertFromDrop

      var textarea = this.$refs.textarea;

      if (e.inputType === 'historyRedo' && textarea.value.length >= 2 && !textarea.value.startsWith('NQ')) {
        // Redo has problems when redoing an edit where NQ was added automatically. We make sure here to correctly
        // apply the NQ again.
        textarea.value = "NQ".concat(textarea.value.substring(2));
      }

      Object(input_control["onChange"])(e, textarea, AddressInput_1._parse, AddressInput_1._format, this._afterChange);
    }
  }, {
    key: "_onPaste",
    value: function _onPaste(e) {
      var clipboardData = e.clipboardData;
      var pastedData = clipboardData ? clipboardData.getData('text/plain') : '';
      this.$emit('paste', e, pastedData);
      Object(input_control["onPaste"])(e, this.$refs.textarea, AddressInput_1._parse, AddressInput_1._format, this._afterChange);
    }
  }, {
    key: "_onCut",
    value: function _onCut(e) {
      Object(input_control["onCut"])(e, this.$refs.textarea, AddressInput_1._parse, AddressInput_1._format, this._afterChange);

      this._formatClipboard();
    }
  }, {
    key: "_onFocus",
    value: function _onFocus() {
      var _this3 = this;

      // have to add a delay because the textarea is not focused yet at this point
      setTimeout(function () {
        return _this3._updateSelection();
      });
    }
  }, {
    key: "_formatClipboard",
    value: function _formatClipboard() {
      // While it's possible to set the clipboard data via clipboardEvent.clipboardData.setData this requires calling
      // preventDefault() which then results in the need to reimplement the behavior for cutting text and has side
      // effects like the change not being added to the undo history. Therefore we let the browser do the default
      // behavior but overwrite the clipboard afterwards.
      var text = AddressInput_1._exportValue(document.getSelection().toString());

      setTimeout(function () {
        return Clipboard.copy(text);
      });
    }
  }, {
    key: "_afterChange",
    value: function _afterChange(value) {
      // value is the unformatted value (i.e. the concatenation of characters returned by _parse). It includes NQ
      // if NQ was already added to the textarea before the current change but is not included if it is getting
      // automatically added just in our current change.
      var textarea = this.$refs.textarea; // have to move caret or selection by two to account for the NQ automatically added to the formatted text

      if (!value.startsWith('NQ')) {
        textarea.selectionEnd += 2;
        textarea.selectionStart += 2;
      } // if selection is a caret in front of a space or new line move caret behind it


      if (textarea.selectionStart === textarea.selectionEnd && (textarea.value[textarea.selectionStart] === ' ' || textarea.value[textarea.selectionStart] === '\n')) {
        textarea.selectionStart += 1; // this also moves the selectionEnd as they were equal
      }

      this.currentValue = AddressInput_1._exportValue(this.$refs.textarea.value);
      this.$emit('input', this.currentValue); // emit event compatible with v-model

      var isValid = ValidationUtils.isValidAddress(this.currentValue);
      if (isValid) this.$emit('address', this.currentValue); // if user entered a full address that is not valid give him a visual feedback

      this.$el.classList.toggle('invalid', this.currentValue.length === AddressInput_1.ADDRESS_MAX_LENGTH && !isValid);
    }
  }, {
    key: "_updateSelection",
    value: function _updateSelection() {
      var textarea = this.$refs.textarea;
      var focused = document.activeElement === textarea && (textarea.selectionStart !== AddressInput_1.ADDRESS_MAX_LENGTH // if all blocks are filled and the caret
      || textarea.selectionEnd !== AddressInput_1.ADDRESS_MAX_LENGTH); // is at the end display as if not focused

      this.selectionStartBlock = focused ? Math.floor(textarea.selectionStart / 5) : -1;
      this.selectionEndBlock = focused ? Math.floor(textarea.selectionEnd / 5) : -1;
    }
  }, {
    key: "_isBlockFocused",
    value: function _isBlockFocused(blockIndex) {
      return this.selectionStartBlock <= blockIndex && blockIndex <= this.selectionEndBlock;
    }
  }, {
    key: "_isBlockFilled",
    value: function _isBlockFilled(blockIndex) {
      return this.currentValue.length >= blockIndex * 5 + 4;
    }
  }], [{
    key: "_parse",
    value: function _parse(char, value) {
      // Handle I, O, W, Z which are the only characters missing in Nimiq's Base 32 address alphabet
      switch (char.toUpperCase()) {
        case 'I':
          char = '1';
          break;

        case 'O':
          char = '0';
          break;

        case 'Z':
          char = '2';
          break;

        case 'W':
          return;
        // reject character
      }

      var regex = new RegExp('^(' + 'N(Q?)' // NQ at the beginning
      + '|NQ\\d{1,2}' // first two characters after starting NQ must be digits
      + "|NQ\\d{2}[0-9A-Z]{1,".concat(AddressInput_1.ADDRESS_MAX_LENGTH_WITHOUT_SPACES - 4, "}") // valid address < max length
      + '|\\d' // Allow a single digit. It will then get expanded by a leading NQ.
      + ')$', 'i'); // We return the original character without transforming it to uppercase to improve compatibility with some
      // browsers that struggle with undo/redo of manipulated input. The actual transformation to uppercase is then
      // done via CSS and when the value is exported

      if (regex.test(value + char)) return char;else return; // reject character
    } // definiton of the format method for input-format (https://github.com/catamphetamine/input-format#usage)

  }, {
    key: "_format",
    value: function _format(value) {
      if (value !== '' && value.toUpperCase() !== 'N') {
        // If user typed a valid character and not typed N to start NQ, enforce NQ and form blocks
        value = AddressInput_1._stripWhitespace(value).replace(/^N?Q?/i, 'NQ') // enforce NQ at the beginning
        .replace(/.{4}/g, function (match, offset) {
          return "".concat(match).concat((offset + 4) % 12 ? ' ' : '\n');
        }) // form blocks
        .substring(0, AddressInput_1.ADDRESS_MAX_LENGTH); // discarding the new line after last block

        if (value.endsWith(' ')) {
          // The word spacing set via css is only applied to spaces that are actually between words which is not
          // the case for an ending space and the caret after an ending space therefore gets rendered at the wrong
          // position. To avoid that we add a zero-width space as an artificial word. We do not add that to the
          // template returned to input-format though to avoid it being interpreted as a typed character which
          // would place the caret after the zero width space.
          value += "\u200B";
        }
      }

      return {
        text: value,
        template: 'wwww wwww wwww\nwwww wwww wwww\nwwww wwww wwww'
      };
    }
  }, {
    key: "_stripWhitespace",
    value: function _stripWhitespace(value) {
      return value.replace(/\s|\u200B/g, ''); // normal whitespace, tabs, newlines or zero-width whitespace
    }
  }, {
    key: "_exportValue",
    value: function _exportValue(value) {
      return value.toUpperCase().replace(/\n/g, ' ').replace(/\u200B/g, '');
    }
  }]);

  return AddressInput;
}(external_vue_property_decorator_["Vue"]);

AddressInputvue_type_script_lang_ts_AddressInput.ADDRESS_MAX_LENGTH_WITHOUT_SPACES = 9 * 4;
AddressInputvue_type_script_lang_ts_AddressInput.ADDRESS_MAX_LENGTH = AddressInput_1.ADDRESS_MAX_LENGTH_WITHOUT_SPACES + 8;

__decorate([Object(external_vue_property_decorator_["Prop"])({
  type: String,
  default: ''
})], AddressInputvue_type_script_lang_ts_AddressInput.prototype, "value", void 0);

__decorate([Object(external_vue_property_decorator_["Prop"])(Boolean)], AddressInputvue_type_script_lang_ts_AddressInput.prototype, "autofocus", void 0);

__decorate([Object(external_vue_property_decorator_["Watch"])('value')], AddressInputvue_type_script_lang_ts_AddressInput.prototype, "_onExternalValueChange", null);

AddressInputvue_type_script_lang_ts_AddressInput = AddressInput_1 = __decorate([external_vue_property_decorator_["Component"]], AddressInputvue_type_script_lang_ts_AddressInput);
/* harmony default export */ var AddressInputvue_type_script_lang_ts_ = (AddressInputvue_type_script_lang_ts_AddressInput);
// CONCATENATED MODULE: ./src/components/AddressInput.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_AddressInputvue_type_script_lang_ts_ = (AddressInputvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./src/components/AddressInput.vue?vue&type=style&index=0&id=836b5032&scoped=true&lang=css&
var AddressInputvue_type_style_index_0_id_836b5032_scoped_true_lang_css_ = __webpack_require__("a132");

// CONCATENATED MODULE: ./src/components/AddressInput.vue






/* normalize component */

var AddressInput_component = normalizeComponent(
  components_AddressInputvue_type_script_lang_ts_,
  AddressInputvue_type_template_id_836b5032_scoped_true_render,
  AddressInputvue_type_template_id_836b5032_scoped_true_staticRenderFns,
  false,
  null,
  "836b5032",
  null
  
)

/* harmony default export */ var components_AddressInput = (AddressInput_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0d243f96-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Amount.vue?vue&type=template&id=a8faf594&scoped=true&
var Amountvue_type_template_id_a8faf594_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',{staticClass:"amount",class:{ approx: _vm.showApprox && _vm.isApprox }},[_vm._v(" "+_vm._s(_vm.formattedAmount)+" "),_c('span',{staticClass:"currency",class:_vm.currency},[_vm._v(_vm._s(_vm.currency))])])}
var Amountvue_type_template_id_a8faf594_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Amount.vue?vue&type=template&id=a8faf594&scoped=true&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__("b0c0");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.constructor.js
var es_number_constructor = __webpack_require__("a9e3");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.is-integer.js
var es_number_is_integer = __webpack_require__("8ba4");

// CONCATENATED MODULE: ./node_modules/@nimiq/utils/dist/module/FormattableNumber.js
// formats and converts numbers without precision loss
class FormattableNumber {
    constructor(value) {
        if (typeof value !== 'string') {
            value = value.toString(); // work on strings in any case. Note that this might result in scientific notation
        }
        const numberMatch = value.match(FormattableNumber.NUMBER_REGEX);
        if (!numberMatch)
            throw new Error(`${value} is not a valid number`);
        this._sign = numberMatch[1];
        this._digits = `${numberMatch[2]}${numberMatch[3]}`;
        if (!this._digits)
            throw new Error(`${value} is not a valid number`);
        this._decimalSeparatorPosition = numberMatch[2].length;
        const exponent = Number.parseInt(numberMatch[5], 10);
        if (exponent)
            this.moveDecimalSeparator(exponent); // remove scientific notation
    }
    toString(optionsOrUseGrouping) {
        let { maxDecimals = undefined, minDecimals = undefined, useGrouping = optionsOrUseGrouping === true, groupSeparator = '\u202F', } = typeof optionsOrUseGrouping === 'object' ? optionsOrUseGrouping : {};
        if (maxDecimals !== undefined && minDecimals !== undefined) {
            minDecimals = Math.min(minDecimals, maxDecimals);
        }
        if (maxDecimals !== undefined && maxDecimals < this._digits.length - this._decimalSeparatorPosition) {
            this.round(maxDecimals);
        }
        let integers = this._digits.slice(0, this._decimalSeparatorPosition).replace(/^0+/, ''); // trim leading 0s
        let decimals = this._digits.slice(this._decimalSeparatorPosition).replace(/0+$/, ''); // trim trailing 0s
        if (minDecimals !== undefined && minDecimals > decimals.length) {
            decimals = decimals.padEnd(minDecimals, '0');
        }
        // Apply grouping for values with more than 4 integer digits.
        if (useGrouping && groupSeparator && integers.length > 4) {
            integers = integers.replace(/(\d)(?=(\d{3})+$)/g, `$1${groupSeparator}`);
        }
        return `${this._sign}${integers || '0'}${decimals ? `.${decimals}` : ''}`;
    }
    valueOf() {
        return this.toString();
    }
    moveDecimalSeparator(moveBy) {
        this._decimalSeparatorPosition += moveBy;
        if (this._decimalSeparatorPosition > this._digits.length) {
            this._digits = this._digits.padEnd(this._decimalSeparatorPosition, '0');
        }
        else if (this._decimalSeparatorPosition < 0) {
            this._digits = this._digits.padStart(this._digits.length - this._decimalSeparatorPosition, '0');
            this._decimalSeparatorPosition = 0;
        }
        return this;
    }
    round(decimals) {
        if (this._digits.length - this._decimalSeparatorPosition <= decimals)
            return this;
        const firstCutOffIndex = this._decimalSeparatorPosition + decimals;
        const digitsToKeep = this._digits
            .substring(0, firstCutOffIndex)
            .padEnd(this._decimalSeparatorPosition, '0');
        if (Number.parseInt(this._digits[firstCutOffIndex], 10) < 5) {
            // rounding down, can just use the trimmed decimals
            this._digits = digitsToKeep;
            return this;
        }
        // round up
        const digits = `0${digitsToKeep}`.split(''); // add a leading 0 for easier handling of carry
        const lastRemainingIndex = firstCutOffIndex; // due to the added leading 0
        for (let i = lastRemainingIndex; i >= 0; --i) {
            const newDigit = Number.parseInt(digits[i], 10) + 1;
            if (newDigit < 10) {
                digits[i] = newDigit.toString();
                break; // no carry over, break
            }
            else {
                digits[i] = '0';
                // continue loop to handle carry over
            }
        }
        this._digits = digits.join('');
        this._decimalSeparatorPosition += 1; // account for the added leading 0
        return this;
    }
    equals(other) {
        if (!(other instanceof FormattableNumber)) {
            try {
                other = new FormattableNumber(other);
            }
            catch (e) {
                // not convertable to a FormattableNumber
                return false;
            }
        }
        // compare rendered results to benefit from normalizations done on rendering
        return this.toString() === other.toString();
    }
}
FormattableNumber.NUMBER_REGEX = /^(-?)(\d*)\.?(\d*)(e(-?\d+))?$/;
function toNonScientificNumberString(value) {
    return new FormattableNumber(value).toString();
}


//# sourceMappingURL=FormattableNumber.js.map

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--13-1!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Amount.vue?vue&type=script&lang=ts&
















function amountValidator(value) {
  return typeof value === 'number' || typeof value === 'bigint' || value && value.constructor && value.constructor.name.endsWith('Integer');
}

var Amountvue_type_script_lang_ts_Amount =
/*#__PURE__*/
function (_Vue) {
  _inherits(Amount, _Vue);

  function Amount() {
    _classCallCheck(this, Amount);

    return _possibleConstructorReturn(this, _getPrototypeOf(Amount).apply(this, arguments));
  }

  _createClass(Amount, [{
    key: "_validateDecimals",
    value: function _validateDecimals(decimals) {
      if (this.decimals !== undefined && decimals !== this.decimals) {
        // skip validation for minDecimals and maxDecimals if they're overwritten by decimals
        return;
      }

      if (decimals !== undefined && (decimals < 0 || decimals > this.currencyDecimals || !Number.isInteger(decimals))) {
        throw new Error('Amount: decimals is not in range');
      }
    }
  }, {
    key: "formattedAmount",
    get: function get() {
      var minDecimals;
      var maxDecimals;

      if (typeof this.decimals === 'number') {
        minDecimals = maxDecimals = this.decimals;
      } else {
        minDecimals = this.minDecimals;
        maxDecimals = this.maxDecimals;
      }

      return new FormattableNumber(this.amount).moveDecimalSeparator(-this.currencyDecimals).toString({
        maxDecimals: maxDecimals,
        minDecimals: minDecimals,
        useGrouping: true
      });
    }
  }, {
    key: "isApprox",
    get: function get() {
      return !new FormattableNumber(this.amount).moveDecimalSeparator(-this.currencyDecimals).equals(this.formattedAmount.replace(/\s/g, ''));
    }
  }]);

  return Amount;
}(external_vue_property_decorator_["Vue"]);

__decorate([Object(external_vue_property_decorator_["Prop"])({
  required: true,
  validator: amountValidator
})], Amountvue_type_script_lang_ts_Amount.prototype, "amount", void 0);

__decorate([Object(external_vue_property_decorator_["Prop"])(Number)], Amountvue_type_script_lang_ts_Amount.prototype, "decimals", void 0);

__decorate([Object(external_vue_property_decorator_["Prop"])({
  type: Number,
  default: 2
})], Amountvue_type_script_lang_ts_Amount.prototype, "minDecimals", void 0);

__decorate([Object(external_vue_property_decorator_["Prop"])({
  type: Number,
  default: 5
})], Amountvue_type_script_lang_ts_Amount.prototype, "maxDecimals", void 0);

__decorate([Object(external_vue_property_decorator_["Prop"])({
  type: Boolean,
  default: false
})], Amountvue_type_script_lang_ts_Amount.prototype, "showApprox", void 0);

__decorate([Object(external_vue_property_decorator_["Prop"])({
  type: String,
  default: 'nim'
})], Amountvue_type_script_lang_ts_Amount.prototype, "currency", void 0);

__decorate([Object(external_vue_property_decorator_["Prop"])({
  type: Number,
  default: 5
})], Amountvue_type_script_lang_ts_Amount.prototype, "currencyDecimals", void 0);

__decorate([Object(external_vue_property_decorator_["Watch"])('minDecimals', {
  immediate: true
}), Object(external_vue_property_decorator_["Watch"])('maxDecimals', {
  immediate: true
}), Object(external_vue_property_decorator_["Watch"])('decimals', {
  immediate: true
})], Amountvue_type_script_lang_ts_Amount.prototype, "_validateDecimals", null);

Amountvue_type_script_lang_ts_Amount = __decorate([external_vue_property_decorator_["Component"]], Amountvue_type_script_lang_ts_Amount);
/* harmony default export */ var Amountvue_type_script_lang_ts_ = (Amountvue_type_script_lang_ts_Amount);
// CONCATENATED MODULE: ./src/components/Amount.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_Amountvue_type_script_lang_ts_ = (Amountvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./src/components/Amount.vue?vue&type=style&index=0&id=a8faf594&scoped=true&lang=css&
var Amountvue_type_style_index_0_id_a8faf594_scoped_true_lang_css_ = __webpack_require__("044f");

// CONCATENATED MODULE: ./src/components/Amount.vue






/* normalize component */

var Amount_component = normalizeComponent(
  components_Amountvue_type_script_lang_ts_,
  Amountvue_type_template_id_a8faf594_scoped_true_render,
  Amountvue_type_template_id_a8faf594_scoped_true_staticRenderFns,
  false,
  null,
  "a8faf594",
  null
  
)

/* harmony default export */ var components_Amount = (Amount_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0d243f96-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/AmountInput.vue?vue&type=template&id=20ceeac0&scoped=true&
var AmountInputvue_type_template_id_20ceeac0_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"amount-input",class:{'has-value': _vm.valueInLuna > 0, 'focussed': _vm.isFocussed}},[_c('form',{ref:"fullWidth",staticClass:"label-input",on:{"submit":function($event){$event.preventDefault();}}},[_c('span',{ref:"widthPlaceholder",staticClass:"width-finder width-placeholder"},[_vm._v(_vm._s(_vm.placeholder))]),(_vm.maxFontSize)?_c('div',{staticClass:"full-width",class:{'width-finder': _vm.maxWidth > 0}},[_vm._v("Width")]):_vm._e(),_c('span',{ref:"widthValue",staticClass:"width-finder width-value"},[_vm._v(_vm._s(_vm.formattedValue || ''))]),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.formattedValue),expression:"formattedValue"}],ref:"input",staticClass:"nq-input",class:_vm.vanishing,style:({width: ((this.width) + "px"), fontSize: ((this.fontSize) + "rem")}),attrs:{"type":"text","inputmode":"numeric","placeholder":_vm.placeholder},domProps:{"value":(_vm.formattedValue)},on:{"focus":function($event){_vm.isFocussed = true},"blur":function($event){_vm.isFocussed = false},"input":function($event){if($event.target.composing){ return; }_vm.formattedValue=$event.target.value}}})]),_c('span',{staticClass:"nim"},[_vm._v("NIM")])])}
var AmountInputvue_type_template_id_20ceeac0_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/AmountInput.vue?vue&type=template&id=20ceeac0&scoped=true&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.pad-end.js
var es_string_pad_end = __webpack_require__("843c");

// EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__("96cf");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.promise.js
var es_promise = __webpack_require__("e6cf");

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js



function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--13-1!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/AmountInput.vue?vue&type=script&lang=ts&


















var AmountInputvue_type_script_lang_ts_AmountInput =
/*#__PURE__*/
function (_Vue) {
  _inherits(AmountInput, _Vue);

  function AmountInput() {
    var _this;

    _classCallCheck(this, AmountInput);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(AmountInput).apply(this, arguments));
    _this.liveValue = '';
    _this.lastEmittedValue = 0;
    _this.width = 50;
    _this.fontSize = _this.maxFontSize;
    _this.maxWidth = 0;
    _this.valueInLuna = 0;
    _this.isFocussed = false;
    return _this;
  }

  _createClass(AmountInput, [{
    key: "mounted",
    value: function () {
      var _mounted = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (this.maxFontSize) {
                  this.maxWidth = this.$refs.fullWidth.offsetWidth;
                }

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function mounted() {
        return _mounted.apply(this, arguments);
      }

      return mounted;
    }()
  }, {
    key: "focus",
    value: function focus() {
      this.$refs.input.focus();
    }
  }, {
    key: "updateValue",
    value: function updateValue(newValue) {
      this.formattedValue = newValue ? (newValue / Math.pow(10, this.decimals)).toString() : '';
      this.updateWidth();
    }
  }, {
    key: "updateWidth",
    value: function () {
      var _updateWidth = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2() {
        var placeholderWidth, valueWidth, fontSizeFactor;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return external_vue_property_decorator_["Vue"].nextTick();

              case 2:
                if (this.$refs.widthPlaceholder) {
                  _context2.next = 4;
                  break;
                }

                return _context2.abrupt("return");

              case 4:
                placeholderWidth = this.$refs.widthPlaceholder.offsetWidth;
                valueWidth = this.$refs.widthValue.offsetWidth;
                fontSizeFactor = Math.min(1.0, Math.max(this.maxWidth / valueWidth, 1 / this.maxFontSize));
                this.fontSize = fontSizeFactor * this.maxFontSize;
                this.width = this.formattedValue ? fontSizeFactor === 1 ? valueWidth : this.maxWidth : placeholderWidth;

              case 9:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function updateWidth() {
        return _updateWidth.apply(this, arguments);
      }

      return updateWidth;
    }()
  }, {
    key: "formattedValue",
    get: function get() {
      return this.liveValue;
    },
    set: function set(value) {
      if (!value) {
        this.liveValue = '';
        this.lastEmittedValue = 0;
        this.valueInLuna = 0;
        this.$emit('input', this.valueInLuna);
        return;
      }

      value = value.replace(/\,/, '.');
      var regExp = new RegExp("(\\d*)(\\.(\\d{0,".concat(this.decimals, "}))?"), 'g'); // Backslashes are escaped

      var regExpResult = regExp.exec(value);

      if (regExpResult[1] || regExpResult[2]) {
        this.liveValue = "".concat(regExpResult[1] ? regExpResult[1] : '0').concat(regExpResult[2] ? regExpResult[2] : '');
        this.valueInLuna = Number("".concat(regExpResult[1]).concat((regExpResult[2] ? regExpResult[3] : '').padEnd(this.decimals, '0')));
      }

      if (this.lastEmittedValue !== this.valueInLuna) {
        this.$emit('input', this.valueInLuna);
        this.lastEmittedValue = this.valueInLuna;
      } // Trigger a valueChange for the getter.


      this.$forceUpdate();
    }
  }]);

  return AmountInput;
}(external_vue_property_decorator_["Vue"]);

__decorate([Object(external_vue_property_decorator_["Prop"])({
  type: Number
})], AmountInputvue_type_script_lang_ts_AmountInput.prototype, "value", void 0);

__decorate([Object(external_vue_property_decorator_["Prop"])({
  type: Number,
  default: 8
})], AmountInputvue_type_script_lang_ts_AmountInput.prototype, "maxFontSize", void 0);

__decorate([Object(external_vue_property_decorator_["Prop"])({
  type: String,
  default: '0'
})], AmountInputvue_type_script_lang_ts_AmountInput.prototype, "placeholder", void 0);

__decorate([Object(external_vue_property_decorator_["Prop"])({
  type: Boolean,
  default: false
})], AmountInputvue_type_script_lang_ts_AmountInput.prototype, "vanishing", void 0);

__decorate([Object(external_vue_property_decorator_["Prop"])({
  type: Number,
  default: 5
})], AmountInputvue_type_script_lang_ts_AmountInput.prototype, "decimals", void 0);

__decorate([Object(external_vue_property_decorator_["Watch"])('value', {
  immediate: true
})], AmountInputvue_type_script_lang_ts_AmountInput.prototype, "updateValue", null);

__decorate([Object(external_vue_property_decorator_["Watch"])('formattedValue')], AmountInputvue_type_script_lang_ts_AmountInput.prototype, "updateWidth", null);

AmountInputvue_type_script_lang_ts_AmountInput = __decorate([external_vue_property_decorator_["Component"]], AmountInputvue_type_script_lang_ts_AmountInput);
/* harmony default export */ var AmountInputvue_type_script_lang_ts_ = (AmountInputvue_type_script_lang_ts_AmountInput);
// CONCATENATED MODULE: ./src/components/AmountInput.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_AmountInputvue_type_script_lang_ts_ = (AmountInputvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./src/components/AmountInput.vue?vue&type=style&index=0&id=20ceeac0&scoped=true&lang=css&
var AmountInputvue_type_style_index_0_id_20ceeac0_scoped_true_lang_css_ = __webpack_require__("4160");

// CONCATENATED MODULE: ./src/components/AmountInput.vue






/* normalize component */

var AmountInput_component = normalizeComponent(
  components_AmountInputvue_type_script_lang_ts_,
  AmountInputvue_type_template_id_20ceeac0_scoped_true_render,
  AmountInputvue_type_template_id_20ceeac0_scoped_true_staticRenderFns,
  false,
  null,
  "20ceeac0",
  null
  
)

/* harmony default export */ var components_AmountInput = (AmountInput_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0d243f96-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/CircleSpinner.vue?vue&type=template&id=2bc59fa8&scoped=true&functional=true&
var CircleSpinnervue_type_template_id_2bc59fa8_scoped_true_functional_true_render = function (_h,_vm) {var _c=_vm._c;return _c('svg',{staticClass:"circle-spinner",attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 18 18","width":"18","height":"18","fill":"none","stroke-width":"2","stroke-linecap":"round"}},[_c('path',{attrs:{"stroke":"#0582CA","d":"M9,1c4.42,0,8,3.58,8,8"}}),_c('path',{attrs:{"stroke":"#1F2348","opacity":".3","d":"M4.27,2.56C2.29,4.01,1,6.35,1,9c0,4.42,3.58,8,8,8c2.65,0,4.99-1.29,6.44-3.27"}})])}
var CircleSpinnervue_type_template_id_2bc59fa8_scoped_true_functional_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/CircleSpinner.vue?vue&type=template&id=2bc59fa8&scoped=true&functional=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--13-1!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/CircleSpinner.vue?vue&type=script&lang=ts&
/* harmony default export */ var CircleSpinnervue_type_script_lang_ts_ = ({});
// CONCATENATED MODULE: ./src/components/CircleSpinner.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_CircleSpinnervue_type_script_lang_ts_ = (CircleSpinnervue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./src/components/CircleSpinner.vue?vue&type=style&index=0&id=2bc59fa8&scoped=true&lang=css&
var CircleSpinnervue_type_style_index_0_id_2bc59fa8_scoped_true_lang_css_ = __webpack_require__("702c");

// CONCATENATED MODULE: ./src/components/CircleSpinner.vue






/* normalize component */

var CircleSpinner_component = normalizeComponent(
  components_CircleSpinnervue_type_script_lang_ts_,
  CircleSpinnervue_type_template_id_2bc59fa8_scoped_true_functional_true_render,
  CircleSpinnervue_type_template_id_2bc59fa8_scoped_true_functional_true_staticRenderFns,
  true,
  null,
  "2bc59fa8",
  null
  
)

/* harmony default export */ var CircleSpinner = (CircleSpinner_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0d243f96-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/CloseButton.vue?vue&type=template&id=4f20d426&scoped=true&
var CloseButtonvue_type_template_id_4f20d426_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('button',{staticClass:"close-button nq-button-s",on:{"click":_vm.click}},[_c('CloseIcon')],1)}
var CloseButtonvue_type_template_id_4f20d426_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/CloseButton.vue?vue&type=template&id=4f20d426&scoped=true&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.assign.js
var es_object_assign = __webpack_require__("cca6");

// CONCATENATED MODULE: ./node_modules/@nimiq/style/src/icons/alert-triangle.svg

      /* harmony default export */ var alert_triangle = ({
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"width":"17","height":"16","viewBox":"0 0 17 16","xmlns":"http://www.w3.org/2000/svg"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M15.913 13.333L9.68 1.433a1.333 1.333 0 0 0-2.362 0l-6.232 11.9a1.333 1.333 0 0 0 1.182 1.952H14.73a1.333 1.333 0 0 0 1.182-1.952zm-8.08-7.718a.667.667 0 0 1 1.334 0v4a.667.667 0 1 1-1.334 0v-4zm.682 7.674h.018a.983.983 0 0 0 .967-1.022 1.018 1.018 0 0 0-1.016-.978h-.019a.984.984 0 0 0-.965 1.02c.02.546.468.978 1.015.98z","fill":"currentColor"}})])
          )
        }
      });
    
// CONCATENATED MODULE: ./node_modules/@nimiq/style/src/icons/arrow-left.svg

      /* harmony default export */ var arrow_left = ({
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"width":"23","height":"18","viewBox":"0 0 23 18","xmlns":"http://www.w3.org/2000/svg"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M22 9L3 9","stroke":"currentColor","fill":"none","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}}),_c('path',{attrs:{"d":"M9 16L2 9L9 2","stroke":"currentColor","fill":"none","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}})])
          )
        }
      });
    
// CONCATENATED MODULE: ./node_modules/@nimiq/style/src/icons/arrow-right-small.svg

      /* harmony default export */ var arrow_right_small = ({
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"width":"16","height":"12","viewBox":"0 0 16 12","xmlns":"http://www.w3.org/2000/svg"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M10,1l5,5l-5,5","stroke":"currentColor","fill":"none","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}}),_c('line',{attrs:{"x1":"14","y1":"6","x2":"1","y2":"6","stroke":"currentColor","fill":"none","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}})])
          )
        }
      });
    
// CONCATENATED MODULE: ./node_modules/@nimiq/style/src/icons/arrow-right.svg

      /* harmony default export */ var arrow_right = ({
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"width":"23","height":"18","viewBox":"0 0 23 18","xmlns":"http://www.w3.org/2000/svg"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M13.9995 1.99902L20.999 9.00049L13.9995 16","stroke":"currentColor","fill":"none","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}}),_c('line',{attrs:{"x1":"18.999","y1":"9","x2":"0.999023","y2":"9","stroke":"currentColor","fill":"none","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}})])
          )
        }
      });
    
// CONCATENATED MODULE: ./node_modules/@nimiq/style/src/icons/caret-right-small.svg

      /* harmony default export */ var caret_right_small = ({
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"width":"10","height":"11","viewBox":"0 0 10 11","xmlns":"http://www.w3.org/2000/svg"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M5.00098 2L8.53602 5.53603L5.00098 9.07107","stroke":"currentColor","fill":"none","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}})])
          )
        }
      });
    
// CONCATENATED MODULE: ./node_modules/@nimiq/style/src/icons/cashlink-small.svg

      /* harmony default export */ var cashlink_small = ({
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","width":"24","height":"24"}, attrs),
              ...rest,
            },
            children.concat([_c('g',{attrs:{"fill":"none","stroke":"currentColor","stroke-linecap":"round","stroke-width":"1.5px","stroke-linejoin":"round"}},[_c('path',{attrs:{"d":"M15.25,8.25h0a2.5,2.5,0,0,0-2.5-2.5h-1.5a2.5,2.5,0,0,0-2.5,2.5v3a2.5,2.5,0,0,0,2.5,2.5h.5"}}),_c('path',{attrs:{"d":"M8.75,15.75h0a2.5,2.5,0,0,0,2.5,2.5h1.5a2.5,2.5,0,0,0,2.5-2.5v-3a2.5,2.5,0,0,0-2.5-2.5h-.5"}}),_c('line',{attrs:{"x1":"12","y1":"3.75","x2":"12","y2":"5.25"}}),_c('line',{attrs:{"x1":"12","y1":"18.75","x2":"12","y2":"20.25"}})])])
          )
        }
      });
    
// CONCATENATED MODULE: ./node_modules/@nimiq/style/src/icons/cashlink-xsmall.svg

      /* harmony default export */ var cashlink_xsmall = ({
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 16 16","width":"16","height":"16"}, attrs),
              ...rest,
            },
            children.concat([_c('g',{attrs:{"fill":"none","stroke":"currentColor","stroke-linecap":"round"}},[_c('path',{attrs:{"d":"M10.5,5.5h0a2,2,0,0,0-2-2h-1a2,2,0,0,0-2,2V7a2,2,0,0,0,2,2H8"}}),_c('path',{attrs:{"d":"M5.5,10.5h0a2,2,0,0,0,2,2h1a2,2,0,0,0,2-2V9a2,2,0,0,0-2-2H8"}})])])
          )
        }
      });
    
// CONCATENATED MODULE: ./node_modules/@nimiq/style/src/icons/checkmark.svg

      /* harmony default export */ var checkmark = ({
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"width":"74","height":"74","viewBox":"0 0 74 74","xmlns":"http://www.w3.org/2000/svg"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M71.12 1.84a4.5 4.5 0 0 0-6.28 1.04l-42.1 58.74L8.68 47.54a4.5 4.5 0 1 0-6.36 6.37l17.8 17.81a4.57 4.57 0 0 0 6.84-.56l45.2-63.03a4.5 4.5 0 0 0-1.04-6.29z","fill":"currentColor","stroke":"currentColor","stroke-width":".8"}})])
          )
        }
      });
    
// CONCATENATED MODULE: ./node_modules/@nimiq/style/src/icons/close.svg

      /* harmony default export */ var icons_close = ({
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"width":"24","height":"24","viewBox":"0 0 24 24","xmlns":"http://www.w3.org/2000/svg"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M3.528 3.52c4.683-4.684 12.275-4.686 16.96-.005 4.678 4.69 4.678 12.28 0 16.97-4.685 4.68-12.277 4.678-16.96-.005-4.682-4.684-4.682-12.276 0-16.96zm13.145 13.133a1 1 0 0 0 .036-1.374l-3.11-3.11a.25.25 0 0 1 0-.352l3.11-3.11a1 1 0 1 0-1.414-1.415l-3.11 3.11a.25.25 0 0 1-.354 0l-3.11-3.11a1 1 0 0 0-1.41 1.415l3.11 3.11a.249.249 0 0 1 0 .353l-3.11 3.109a1 1 0 0 0 0 1.415c.396.38 1.021.38 1.416 0l3.109-3.11a.252.252 0 0 1 .354 0l3.11 3.11a1 1 0 0 0 1.373-.041z","fill":"currentColor"}})])
          )
        }
      });
    
// CONCATENATED MODULE: ./node_modules/@nimiq/style/src/icons/contacts.svg

      /* harmony default export */ var contacts = ({
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"width":"40","height":"49","viewBox":"0 0 40 49","xmlns":"http://www.w3.org/2000/svg"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M35.73 7.25c0 .48.34.9.82 1a4.08 4.08 0 0 1 3.26 4v32.67A4.08 4.08 0 0 1 35.73 49H6.13A6.13 6.13 0 0 1 0 42.87V6.13A6.13 6.13 0 0 1 6.13 0h25.52a4.08 4.08 0 0 1 4.08 4.08v3.17zm-5.1 31.88A10.23 10.23 0 0 0 20.4 29.6c-5.21 0-9.6 3.9-10.19 9.08a1.02 1.02 0 0 0 1.02 1.13h18.75a.64.64 0 0 0 .64-.68zm-16.38-17.7a6.15 6.15 0 1 1 12.3-.04 6.15 6.15 0 0 1-12.3.05zM6.12 4.09a2.04 2.04 0 0 0 0 4.09h25.01c.29 0 .51-.23.51-.51V4.59a.51.51 0 0 0-.5-.5H6.11z","fill":"currentColor"}})])
          )
        }
      });
    
// CONCATENATED MODULE: ./node_modules/@nimiq/style/src/icons/cross.svg

      /* harmony default export */ var cross = ({
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"width":"15","height":"15","viewBox":"0 0 15 15","fill":"none","xmlns":"http://www.w3.org/2000/svg"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M2 13L13 2","stroke":"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}}),_c('path',{attrs:{"d":"M2 2L13 13","stroke":"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}})])
          )
        }
      });
    
// CONCATENATED MODULE: ./node_modules/@nimiq/style/src/icons/face-neutral.svg

      /* harmony default export */ var face_neutral = ({
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"width":"102","height":"102","viewBox":"0 0 102 102","xmlns":"http://www.w3.org/2000/svg"}, attrs),
              ...rest,
            },
            children.concat([_c('circle',{attrs:{"cx":"51","cy":"51","r":"48","stroke":"currentColor","fill":"none","stroke-width":"6"}}),_c('circle',{attrs:{"cx":"35.1485","cy":"40.6627","r":"4.82432","fill":"currentColor"}}),_c('circle',{attrs:{"cx":"66.8514","cy":"40.6622","r":"4.82432","fill":"currentColor"}}),_c('path',{attrs:{"d":"M39 68.9863C39 68.9863 44.8244 68.9863 51.0271 68.9863C57.2298 68.9863 63.0541 68.9863 63.0541 68.9863","stroke":"currentColor","fill":"none","stroke-width":"6","stroke-linecap":"round","stroke-linejoin":"round"}})])
          )
        }
      });
    
// CONCATENATED MODULE: ./node_modules/@nimiq/style/src/icons/face-sad.svg

      /* harmony default export */ var face_sad = ({
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"width":"102","height":"102","viewBox":"0 0 102 102","xmlns":"http://www.w3.org/2000/svg"}, attrs),
              ...rest,
            },
            children.concat([_c('circle',{attrs:{"cx":"51","cy":"51","r":"48","stroke":"currentColor","fill":"none","stroke-width":"6"}}),_c('circle',{attrs:{"cx":"35.1485","cy":"40.6627","r":"4.82432","fill":"currentColor"}}),_c('circle',{attrs:{"cx":"66.8514","cy":"40.6622","r":"4.82432","fill":"currentColor"}}),_c('path',{attrs:{"d":"M39.9729 70.9867C39.9729 70.9867 44.7972 68.23 50.9999 68.23C57.2026 68.23 62.027 70.9867 62.027 70.9867","stroke":"currentColor","fill":"none","stroke-width":"6","stroke-linecap":"round","stroke-linejoin":"round"}})])
          )
        }
      });
    
// CONCATENATED MODULE: ./node_modules/@nimiq/style/src/icons/gear.svg

      /* harmony default export */ var gear = ({
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"width":"25","height":"24","viewBox":"0 0 25 24","xmlns":"http://www.w3.org/2000/svg"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M21.66 9.31l1.26.45a2.37 2.37 0 0 1 0 4.48l-1.27.45a1.37 1.37 0 0 0-.77 1.88l.57 1.22a2.38 2.38 0 0 1-3.16 3.16l-1.22-.57a1.37 1.37 0 0 0-1.88.78l-.45 1.26a2.38 2.38 0 0 1-4.48 0l-.45-1.26a1.37 1.37 0 0 0-1.88-.78l-1.22.57a2.38 2.38 0 0 1-3.16-3.16l.57-1.22a1.37 1.37 0 0 0-.78-1.88l-1.26-.45a2.38 2.38 0 0 1 0-4.48l1.26-.45a1.38 1.38 0 0 0 .78-1.88l-.57-1.21A2.38 2.38 0 0 1 6.7 3.04l1.22.58a1.38 1.38 0 0 0 1.88-.78l.45-1.27a2.38 2.38 0 0 1 4.48 0l.45 1.27a1.37 1.37 0 0 0 1.88.78l1.22-.58a2.38 2.38 0 0 1 3.16 3.17l-.57 1.2a1.37 1.37 0 0 0 .78 1.9zm-13.6 4.53a4.93 4.93 0 0 0 6.28 2.6 4.81 4.81 0 0 0 2.6-6.28 4.87 4.87 0 0 0-6.28-2.6 4.81 4.81 0 0 0-2.6 6.28z","fill":"currentColor"}})])
          )
        }
      });
    
// CONCATENATED MODULE: ./node_modules/@nimiq/style/src/icons/hexagon.svg

      /* harmony default export */ var hexagon = ({
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"width":"58","height":"49","viewBox":"0 0 27 24","xmlns":"http://www.w3.org/2000/svg"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M26.6991 10.875L21.0741 1.125C20.6691 0.4275 19.9266 0 19.1241 0H7.87414C7.07164 0 6.32914 0.4275 5.92789 1.125L0.302891 10.875C-0.0983594 11.5725 -0.0983594 12.4275 0.302891 13.125L5.92789 22.875C6.32914 23.5725 7.07164 24 7.87414 24H19.1241C19.9266 24 20.6691 23.5725 21.0704 22.875L26.6954 13.125C27.1004 12.4275 27.1004 11.5725 26.6991 10.875Z","fill":"currentColor"}})])
          )
        }
      });
    
// CONCATENATED MODULE: ./node_modules/@nimiq/style/src/icons/info-circle.svg

      /* harmony default export */ var info_circle = ({
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"width":"16","height":"16","viewBox":"0 0 16 16","xmlns":"http://www.w3.org/2000/svg"}, attrs),
              ...rest,
            },
            children.concat([_c('line',{attrs:{"x1":"8","y1":"7.83301","x2":"8","y2":"11.333","stroke":"currentColor","fill":"none","stroke-linecap":"round"}}),_c('circle',{attrs:{"cx":"8","cy":"4.75","r":"0.5","fill":"currentColor","stroke":"currentColor","stroke-width":"0.5"}}),_c('circle',{attrs:{"cx":"8","cy":"8","r":"7.5","stroke":"currentColor","fill":"none"}})])
          )
        }
      });
    
// CONCATENATED MODULE: ./node_modules/@nimiq/style/src/icons/info-circle-small.svg

      /* harmony default export */ var info_circle_small = ({
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"width":"16","height":"16","viewBox":"0 0 16 16","xmlns":"http://www.w3.org/2000/svg"}, attrs),
              ...rest,
            },
            children.concat([_c('line',{attrs:{"x1":"8","y1":"7.83301","x2":"8","y2":"11.333","stroke":"currentColor","fill":"none","stroke-linecap":"round","stroke-width":"1.5"}}),_c('circle',{attrs:{"cx":"8","cy":"4.75","r":"0.5","fill":"currentColor","stroke":"currentColor","stroke-width":"1"}}),_c('circle',{attrs:{"cx":"8","cy":"8","r":"7.25","stroke":"currentColor","stroke-width":"1.5","fill":"none"}})])
          )
        }
      });
    
// CONCATENATED MODULE: ./node_modules/@nimiq/style/src/icons/lock-locked.svg

      /* harmony default export */ var lock_locked = ({
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"width":"32","height":"47","viewBox":"0 0 32 47","xmlns":"http://www.w3.org/2000/svg"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M29.5 22.512V12.96C29.5 5.802 23.456 0 16 0S2.5 5.802 2.5 12.96v9.552c-4.26 6.43-2.966 14.887 3.041 19.868 6.007 4.982 14.911 4.982 20.918 0 6.008-4.981 7.302-13.438 3.041-19.868zM16 34.56c-2.209 0-4-1.72-4-3.84s1.791-3.84 4-3.84c2.21 0 4 1.72 4 3.84s-1.79 3.84-4 3.84zm8.027-17.653a.952.952 0 0 0 .473-.816V12.96c0-4.507-3.805-8.16-8.5-8.16-4.694 0-8.5 3.653-8.5 8.16v3.131c0 .332.179.641.473.816.294.175.661.192.971.045a16.437 16.437 0 0 1 14.112 0c.31.147.677.13.971-.045z","fill":"currentColor"}})])
          )
        }
      });
    
// CONCATENATED MODULE: ./node_modules/@nimiq/style/src/icons/menu-dots.svg

      /* harmony default export */ var menu_dots = ({
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"width":"7","height":"30","viewBox":"0 0 7 30","xmlns":"http://www.w3.org/2000/svg"}, attrs),
              ...rest,
            },
            children.concat([_c('g',{attrs:{"fill":"currentColor"}},[_c('circle',{attrs:{"cx":"3.5","cy":"3","r":"3"}}),_c('circle',{attrs:{"cx":"3.5","cy":"15","r":"3"}}),_c('circle',{attrs:{"cx":"3.5","cy":"27","r":"3"}})])])
          )
        }
      });
    
// CONCATENATED MODULE: ./node_modules/@nimiq/style/src/icons/qr-code.svg

      /* harmony default export */ var qr_code = ({
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"width":"99","height":"99","viewBox":"0 0 99 99","xmlns":"http://www.w3.org/2000/svg"}, attrs),
              ...rest,
            },
            children.concat([_c('g',{attrs:{"fill":"currentColor"}},[_c('path',{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M28.9 33H4A4.1 4.1 0 0 1 0 28.9V4A4.1 4.1 0 0 1 4.1 0H29A4.1 4.1 0 0 1 33 4.1V29a4.1 4.1 0 0 1-4.1 4.1zM9.3 8.2a1 1 0 0 0-1 1v14.5c0 .6.4 1 1 1h14.4c.6 0 1-.4 1-1V9.3c0-.6-.4-1-1-1H9.3zM4 66H29a4.1 4.1 0 0 1 4.1 4.1V95a4.1 4.1 0 0 1-4.1 4.1H4A4.1 4.1 0 0 1 0 94.9V70A4.1 4.1 0 0 1 4.1 66zm19.6 24.8c.6 0 1-.5 1-1V75.2c0-.6-.4-1-1-1H9.3a1 1 0 0 0-1 1v14.4c0 .6.4 1 1 1h14.4zM70.1 0H95A4.1 4.1 0 0 1 99 4.1V29a4.1 4.1 0 0 1-4.1 4.1H70a4.1 4.1 0 0 1-4.1-4.1V4A4.1 4.1 0 0 1 70.1 0zm19.6 24.8c.6 0 1-.5 1-1V9.2c0-.6-.4-1-1-1H75.3a1 1 0 0 0-1 1v14.4c0 .6.4 1 1 1h14.4z"}}),_c('path',{attrs:{"d":"M41.3 17.5h4a3 3 0 1 0 0-6.2 1 1 0 0 1-1-1V4.1a3 3 0 0 0-6.1 0v10.3a3 3 0 0 0 3 3.1zM53.5 7.2c.6 0 1 .5 1 1V31a3 3 0 0 0 6.2 0V4.1a3 3 0 0 0-3-3h-4.2a3 3 0 0 0 0 6.1zM23.7 43.3a3 3 0 0 0 3.1 3.1h14.4a3 3 0 0 0 3.1-3V26.7a3 3 0 0 0-6.1 0v12.4c0 .6-.5 1-1 1H26.7a3 3 0 0 0-3 3.1z"}}),_c('path',{attrs:{"d":"M12.4 40.2a3 3 0 0 0-3.1 3.1v10.3c0 .6-.5 1-1 1H4a3 3 0 0 0 0 6.2h53.6a3 3 0 0 0 3.1-3V45.4a3 3 0 0 0-6.1 0v8.2c0 .6-.5 1-1 1H16.4a1 1 0 0 1-1-1V43.3a3 3 0 0 0-3.1-3zm44.3 30a3 3 0 0 0-3-3.2H41.1a3 3 0 0 0-3 3.1v16.5a3 3 0 0 0 6.1 0V74.3c0-.6.5-1 1-1h8.3a3 3 0 0 0 3.1-3.2zM95 91.7h-35a1 1 0 0 1-1.1-1v-8.3a3 3 0 1 0-6.2 0v12.4a3 3 0 0 0 3 3H95a3 3 0 0 0 0-6.1z"}}),_c('path',{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M80.4 83.5H68.1a3 3 0 0 1-3.1-3V68a3 3 0 0 1 3-3.1h12.4a3 3 0 0 1 3.1 3v12.4a3 3 0 0 1-3 3.1zm-8.2-12.3a1 1 0 0 0-1 1v4.1c0 .6.4 1 1 1h4.1c.6 0 1-.4 1-1v-4.1c0-.6-.4-1-1-1h-4.1z"}}),_c('path',{attrs:{"d":"M92.8 52.6a3 3 0 0 0-3 3v26.9a3 3 0 0 0 6.1 0V55.7a3 3 0 0 0-3-3.1zM96 41.2a3 3 0 0 0-3-3H70a3 3 0 0 0-3 3v12.4a3 3 0 0 0 6.1 0v-8.2c0-.6.5-1 1-1h18.6a3 3 0 0 0 3.1-3.1z"}})])])
          )
        }
      });
    
// CONCATENATED MODULE: ./node_modules/@nimiq/style/src/icons/scan-qr-code.svg

      /* harmony default export */ var scan_qr_code = ({
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"width":"40","height":"40","viewBox":"0 0 40 40","xmlns":"http://www.w3.org/2000/svg"}, attrs),
              ...rest,
            },
            children.concat([_c('g',{attrs:{"fill":"currentColor"}},[_c('path',{attrs:{"d":"M1.21 7.06c.67 0 1.21-.54 1.21-1.21l-.04-3.12a.3.3 0 0 1 .3-.3H5.7a1.21 1.21 0 1 0 0-2.43H2.37A2.4 2.4 0 0 0 0 2.42v3.43c0 .67.54 1.21 1.21 1.21zM5.69 37.58H2.73a.3.3 0 0 1-.3-.3v-3.13a1.21 1.21 0 1 0-2.43 0v3.43A2.4 2.4 0 0 0 2.37 40H5.7a1.21 1.21 0 0 0 0-2.42zM38.79 32.94c-.67 0-1.21.54-1.21 1.21l.04 3.12a.3.3 0 0 1-.3.3H34.3a1.21 1.21 0 1 0 0 2.43h3.32A2.4 2.4 0 0 0 40 37.58v-3.43c0-.67-.54-1.21-1.21-1.21zM37.63 0H34.3a1.21 1.21 0 1 0 0 2.42h2.96c.17 0 .3.14.3.3v3.13a1.21 1.21 0 0 0 2.43 0V2.42A2.4 2.4 0 0 0 37.63 0z"}}),_c('path',{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M13.94 15.15H6.67c-.67 0-1.22-.54-1.22-1.21V6.67c0-.67.55-1.21 1.22-1.21h7.27c.67 0 1.21.54 1.21 1.2v7.28c0 .67-.54 1.21-1.21 1.21zM8.18 7.88a.3.3 0 0 0-.3.3v4.24c0 .17.13.3.3.3h4.24a.3.3 0 0 0 .3-.3V8.18a.3.3 0 0 0-.3-.3H8.18zM6.67 24.85h7.27c.67 0 1.21.54 1.21 1.21v7.27c0 .67-.54 1.22-1.21 1.22H6.67c-.67 0-1.22-.55-1.22-1.22v-7.27c0-.67.55-1.21 1.22-1.21zm5.75 7.27a.3.3 0 0 0 .3-.3v-4.24a.3.3 0 0 0-.3-.3H8.18a.3.3 0 0 0-.3.3v4.24c0 .17.13.3.3.3h4.24zM26.06 5.45h7.27c.67 0 1.21.55 1.21 1.22v7.27c0 .67-.54 1.21-1.2 1.21h-7.28c-.67 0-1.21-.54-1.21-1.21V6.67c0-.67.54-1.22 1.21-1.22zm5.76 7.28a.3.3 0 0 0 .3-.3V8.17a.3.3 0 0 0-.3-.3h-4.24a.3.3 0 0 0-.3.3v4.24c0 .17.13.3.3.3h4.24z"}}),_c('path',{attrs:{"d":"M17.58 10.6h1.2a.9.9 0 1 0 0-1.81.3.3 0 0 1-.3-.3V6.66a.9.9 0 1 0-1.81 0V9.7c0 .5.4.9.9.9zM21.21 7.58c.17 0 .3.13.3.3v6.66a.9.9 0 1 0 1.82 0V6.67c0-.5-.4-.91-.9-.91H21.2a.9.9 0 1 0 0 1.82zM12.42 18.18c0 .5.41.91.91.91h4.25c.5 0 .9-.4.9-.9v-4.86a.9.9 0 1 0-1.81 0v3.64a.3.3 0 0 1-.3.3h-3.04c-.5 0-.9.4-.9.91z"}}),_c('path',{attrs:{"d":"M9.09 17.27c-.5 0-.9.4-.9.91v3.03a.3.3 0 0 1-.31.3H6.67a.9.9 0 1 0 0 1.82h15.75c.5 0 .91-.4.91-.9v-3.64a.9.9 0 0 0-1.82 0v2.42a.3.3 0 0 1-.3.3h-10.9a.3.3 0 0 1-.31-.3v-3.03c0-.5-.4-.9-.91-.9zM22.12 26.06c0-.5-.4-.9-.9-.9h-3.64c-.5 0-.91.4-.91.9v4.85a.9.9 0 1 0 1.81 0v-3.64c0-.16.14-.3.3-.3h2.43c.5 0 .91-.4.91-.9zM33.33 32.42h-10.3a.3.3 0 0 1-.3-.3V29.7a.9.9 0 1 0-1.82 0v3.63c0 .5.4.91.9.91h11.52a.9.9 0 0 0 0-1.82z"}}),_c('path',{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M29.1 30h-3.65a.9.9 0 0 1-.9-.91v-3.64c0-.5.4-.9.9-.9h3.64c.5 0 .91.4.91.9v3.64c0 .5-.4.91-.9.91zm-2.43-3.64a.3.3 0 0 0-.3.3v1.22c0 .17.13.3.3.3h1.2a.3.3 0 0 0 .31-.3v-1.21a.3.3 0 0 0-.3-.3h-1.21z"}}),_c('path',{attrs:{"d":"M32.73 20.9c-.5 0-.91.42-.91.92v7.88a.9.9 0 0 0 1.82 0v-7.88c0-.5-.41-.91-.91-.91zM33.64 17.58c0-.5-.41-.91-.91-.91h-6.67c-.5 0-.9.4-.9.9v3.64a.9.9 0 0 0 1.8 0V18.8c0-.17.15-.3.31-.3h5.46c.5 0 .9-.41.9-.91z"}})])])
          )
        }
      });
    
// CONCATENATED MODULE: ./node_modules/@nimiq/style/src/icons/transfer.svg

      /* harmony default export */ var transfer = ({
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"width":"20","height":"20","viewBox":"0 0 20 20","xmlns":"http://www.w3.org/2000/svg"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M10.01 14.82a1 1 0 0 0 1.37-.37l3.37-5.83a.17.17 0 0 1 .22-.06l.73.41a.67.67 0 0 0 1-.58l-.07-3.89a.67.67 0 0 0-.99-.57l-3.4 1.89a.67.67 0 0 0 0 1.15l.71.42c.08.05.11.15.06.23l-3.37 5.83a1 1 0 0 0 .37 1.37zM8.23 5.19l-3.55 5.76a.17.17 0 0 1-.23.06l-.55-.32a.67.67 0 0 0-1 .59l.07 3.89a.67.67 0 0 0 .99.57l3.4-1.89a.67.67 0 0 0 0-1.16l-.89-.51a.17.17 0 0 1-.07-.1.16.16 0 0 1 .02-.13l3.52-5.72a1 1 0 1 0-1.7-1.05z","fill":"currentColor"}})])
          )
        }
      });
    
// CONCATENATED MODULE: ./src/components/Icons.ts


// See https://vuejs.org/v2/guide/render-function.html for documentation on createElement and functional components
// tslint:disable-next-line:variable-name
var IconBase = function IconBase(component) {
  return {
    functional: true,
    render: function render(createElement, context) {
      return createElement(component, Object.assign({
        class: 'nq-icon'
      }, context.data));
    }
  };
}; // Should be FunctionalComponentOptions (imported from 'vue'), but as such cannot be imported in accounts...

/**
 * SVG files in an /icons/ directory are automatically loaded as Vue components
 * via the vue-svg-loader.
 */


 // import ArrowLeftSmall from '@nimiq/style/src/icons/arrow-left-small.svg';




 // import Cashlink from '@nimiq/style/src/icons/cashlink.svg';



 // import CheckmarkSmall from '@nimiq/style/src/icons/checkmark-small.svg';


 // import Copy from '@nimiq/style/src/icons/copy.svg';

 // import Download from '@nimiq/style/src/icons/download.svg';






 // import Keys from '@nimiq/style/src/icons/keys.svg';
// import Ledger from '@nimiq/style/src/icons/ledger.svg';

 // import LockUnlocked from '@nimiq/style/src/icons/lock-unlocked.svg';
// import Login from '@nimiq/style/src/icons/login.svg';

 // import PlusCircle from '@nimiq/style/src/icons/plus-circle.svg';

 // import Questionmark from '@nimiq/style/src/icons/questionmark.svg';

 // import Settings from '@nimiq/style/src/icons/settings.svg';
// import Stopwatch from '@nimiq/style/src/icons/stopwatch.svg';

 // import UnderPayment from '@nimiq/style/src/icons/under-payment.svg';
// import ViewOff from '@nimiq/style/src/icons/view-off.svg';
// import View from '@nimiq/style/src/icons/view.svg';

/**
 * Comment out any unused icons here
 */
// tslint:disable:variable-name

var AlertTriangleIcon = IconBase(alert_triangle); // export const ArrowLeftSmallIcon = IconBase(ArrowLeftSmall);

var ArrowLeftIcon = IconBase(arrow_left);
var ArrowRightSmallIcon = IconBase(arrow_right_small);
var ArrowRightIcon = IconBase(arrow_right);
var CaretRightSmallIcon = IconBase(caret_right_small); // export const CashlinkIcon = IconBase(Cashlink);

var CashlinkSmallIcon = IconBase(cashlink_small);
var CashlinkXSmallIcon = IconBase(cashlink_xsmall);
var CheckmarkIcon = IconBase(checkmark); // export const CheckmarkSmallIcon = IconBase(CheckmarkSmall);

var CloseIcon = IconBase(icons_close);
var ContactsIcon = IconBase(contacts); // export const CopyIcon = IconBase(Copy);

var CrossIcon = IconBase(cross); // export const DownloadIcon = IconBase(Download);

var FaceNeutralIcon = IconBase(face_neutral);
var FaceSadIcon = IconBase(face_sad);
var GearIcon = IconBase(gear);
var HexagonIcon = IconBase(hexagon);
var InfoCircleIcon = IconBase(info_circle);
var InfoCircleSmallIcon = IconBase(info_circle_small); // export const KeysIcon = IconBase(Keys);
// export const LedgerIcon = IconBase(Ledger);

var LockLockedIcon = IconBase(lock_locked); // export const LockUnlockedIcon = IconBase(LockUnlocked);
// export const LoginIcon = IconBase(Login);

var MenuDotsIcon = IconBase(menu_dots); // export const PlusCircleIcon = IconBase(PlusCircle);

var QrCodeIcon = IconBase(qr_code); // export const QuestionmarkIcon = IconBase(Questionmark);

var ScanQrCodeIcon = IconBase(scan_qr_code); // export const SettingsIcon = IconBase(Settings);
// export const StopwatchIcon = IconBase(Stopwatch);

var TransferIcon = IconBase(transfer); // export const UnderPaymentIcon = IconBase(UnderPayment);
// export const ViewOffIcon = IconBase(ViewOff);
// export const ViewIcon = IconBase(View);
// tslint:enable:variable-name
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--13-1!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/CloseButton.vue?vue&type=script&lang=ts&









var CloseButtonvue_type_script_lang_ts_CloseButton =
/*#__PURE__*/
function (_Vue) {
  _inherits(CloseButton, _Vue);

  function CloseButton() {
    _classCallCheck(this, CloseButton);

    return _possibleConstructorReturn(this, _getPrototypeOf(CloseButton).apply(this, arguments));
  }

  _createClass(CloseButton, [{
    key: "click",
    value: function click(event) {}
  }]);

  return CloseButton;
}(external_vue_property_decorator_["Vue"]);

__decorate([Object(external_vue_property_decorator_["Emit"])()], CloseButtonvue_type_script_lang_ts_CloseButton.prototype, "click", null);

CloseButtonvue_type_script_lang_ts_CloseButton = __decorate([Object(external_vue_property_decorator_["Component"])({
  components: {
    CloseIcon: CloseIcon
  }
})], CloseButtonvue_type_script_lang_ts_CloseButton);
/* harmony default export */ var CloseButtonvue_type_script_lang_ts_ = (CloseButtonvue_type_script_lang_ts_CloseButton);
// CONCATENATED MODULE: ./src/components/CloseButton.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_CloseButtonvue_type_script_lang_ts_ = (CloseButtonvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./src/components/CloseButton.vue?vue&type=style&index=0&id=4f20d426&scoped=true&lang=css&
var CloseButtonvue_type_style_index_0_id_4f20d426_scoped_true_lang_css_ = __webpack_require__("7b96");

// CONCATENATED MODULE: ./src/components/CloseButton.vue






/* normalize component */

var CloseButton_component = normalizeComponent(
  components_CloseButtonvue_type_script_lang_ts_,
  CloseButtonvue_type_template_id_4f20d426_scoped_true_render,
  CloseButtonvue_type_template_id_4f20d426_scoped_true_staticRenderFns,
  false,
  null,
  "4f20d426",
  null
  
)

/* harmony default export */ var components_CloseButton = (CloseButton_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0d243f96-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Copyable.vue?vue&type=template&id=1fbe8b15&scoped=true&
var Copyablevue_type_template_id_1fbe8b15_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"copyable",class:{ copied: _vm.copied },attrs:{"tabindex":"0"},on:{"click":_vm.copy}},[_c('div',{staticClass:"background"}),_vm._t("default"),_c('div',{staticClass:"tooltip"},[_vm._v(_vm._s(_vm.$t('Copied')))])],2)}
var Copyablevue_type_template_id_1fbe8b15_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Copyable.vue?vue&type=template&id=1fbe8b15&scoped=true&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.includes.js
var es_array_includes = __webpack_require__("caad");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.keys.js
var es_object_keys = __webpack_require__("b64b");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.set.js
var es_set = __webpack_require__("6062");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.includes.js
var es_string_includes = __webpack_require__("2532");

// CONCATENATED MODULE: ./node_modules/@nimiq/utils/dist/module/Cookie-a9f03a9a.js
/**
 * Get a Cookie
 * @param {string} cookieName - The name / key of the Cookie to get.
 * @returns {string|null} Returns the value of the Cookie, if this one was found. Otherwise return null.
 */
function getCookie(cookieName) {
    const match = document.cookie.match(new RegExp(`(^| )${encodeURIComponent(cookieName)}=([^;]+)`));
    return match && decodeURIComponent(match[2]);
}
/**
 * Set a Cookie
 * @param {string} cookieName - Name of the Cookie to set.
 * @param {string} cookieValue - Value of the Cookie to set.
 * @param {Object} [options] - The differents options you can set on a cookie.
 * @param {string} [options.path] - The path of the Cookie.
 * If not specified, defaults to the current path of the current document location
 * @param {string} [options.domain] - The domain the Cookie will be available on.
 * If not specified, this defaults to the host portion of the current document location.
 * @param {number} [options.maxAge] - The max age of the Cookie in seconds
 * @param {number} [options.expires] - The expiration date of the Cookie, in GMTString format.
 * See Date.toUTCString() for help formatting this value.
 * @param {boolean} [options.secure] - This specify if the Cookie is only to be transmitted over secure protocols.
 * @param {'lax'|'strict'|'none'} [options.samesite] - This prevents the browser from sending this Cookie along with
 * cross-site requests.
 * @returns {string} Returns the just created Cookie with his options
 */
function setCookie(cookieName, cookieValue, options) {
    if (typeof cookieName !== 'string')
        throw new Error('cookieName must be a string');
    if (typeof cookieValue !== 'string')
        throw new Error('cookieValue must be a string');
    const cookie = [`${encodeURIComponent(cookieName)}=${encodeURIComponent(cookieValue)}`];
    if (options) {
        if (typeof options !== 'object')
            throw new Error('options must be an object');
        if (options.path && typeof options.path !== 'string') {
            throw new Error('options.path must be a string');
        }
        if (options.domain && typeof options.domain !== 'string') {
            throw new Error('options.domain must be a string');
        }
        if (options.maxAge && typeof options.maxAge !== 'number') {
            throw new Error('options.maxAge must be a number');
        }
        if (options.expires && typeof options.expires !== 'string') {
            throw new Error('options.expires must be a string');
        }
        if (options.samesite && !['lax', 'strict', 'none'].includes(options.samesite)) {
            throw new Error('options.samesite must be either "lax", "strict" or "none"');
        }
        if (options.path)
            cookie.push(`path=${options.path}`);
        if (options.secure)
            cookie.push('secure');
        if (options.domain)
            cookie.push(`domain=${options.domain}`);
        if (options.maxAge)
            cookie.push(`max-age=${options.maxAge}`);
        if (options.expires)
            cookie.push(`expires=${options.expires}`);
        if (options.samesite)
            cookie.push(`samesite=${options.samesite}`);
    }
    const cookieString = cookie.join(';');
    document.cookie = cookieString;
    return cookieString;
}
/**
 * Unset a Cookie (remove it)
 * @param {string} cookieName - the Name / Key of the Cookie to be unset / removed
 */
function unsetCookie(cookieName) {
    document.cookie = `${encodeURIComponent(cookieName)}=;max-age=0`;
}

var Cookie = /*#__PURE__*/Object.freeze({
    getCookie: getCookie,
    setCookie: setCookie,
    unsetCookie: unsetCookie
});


//# sourceMappingURL=Cookie-a9f03a9a.js.map

// CONCATENATED MODULE: ./src/i18n/I18nMixin.ts

























var I18nMixin_1;



/**
 * i18n mixin for vue-components that provides a similar, but reduced, api as vue-i18n. This is to avoid that users need
 * to add the entire vue-i18n lib to their app as soon as they want to use a component from this library even if they
 * don't intend to add internationalization.
 */

var I18nMixin_I18nMixin = I18nMixin_1 =
/*#__PURE__*/
function (_Vue) {
  _inherits(I18nMixin, _Vue);

  function I18nMixin() {
    _classCallCheck(this, I18nMixin);

    return _possibleConstructorReturn(this, _getPrototypeOf(I18nMixin).apply(this, arguments));
  }

  _createClass(I18nMixin, [{
    key: "beforeCreate",
    value: function beforeCreate() {
      this.$t = I18nMixin_1.$t.bind(this, this.$options.name);
      I18nMixin_1.registerComponent(this);
    }
  }, {
    key: "beforeDestroy",
    value: function beforeDestroy() {
      I18nMixin_1.unregisterComponent(this);
    }
  }], [{
    key: "setLanguage",

    /**
     * Set the language to use. This will lazy-load the translation files and rerender the ui once ready.
     * @param {string} lang - The language to use.
     */
    value: function setLanguage(lang) {
      // If the language is not supported set it to the default one
      if (!I18nMixin_1.SUPPORTED_LANGUAGES.includes(lang)) {
        lang = I18nMixin_1.DEFAULT_LANGUAGE;
      }

      if (lang === I18nMixin_1.lang) return;
      I18nMixin_1.lang = lang;

      for (var _i = 0, _Object$keys = Object.keys(I18nMixin_1.registeredComponents); _i < _Object$keys.length; _i++) {
        var componentName = _Object$keys[_i];
        I18nMixin_1.loadComponentLanguageFile(componentName);
      }
    }
    /**
     * Detect the language to use. If no language is set fallback to the browser language.
     * @returns {string} The language code
     */

  }, {
    key: "detectLanguage",
    value: function detectLanguage() {
      var langCookie = Cookie.getCookie('lang'); // const fallbackLang = window.navigator.language.split('-')[0];

      var fallbackLang = 'en'; // TODO just temporarily, until language switching is enabled in wallet

      var lang = langCookie || fallbackLang; // If the language is not supported set it to the default one

      if (!I18nMixin_1.SUPPORTED_LANGUAGES.includes(lang)) {
        lang = I18nMixin_1.DEFAULT_LANGUAGE;
      }

      return lang;
    }
  }, {
    key: "$t",
    value: function $t(componentName, key, variablesOrLang, variables) {
      var lang;

      if (typeof variablesOrLang === 'string') {
        lang = variablesOrLang;
      } else {
        lang = I18nMixin_1.lang;
        variables = variablesOrLang;
      }

      var componentLang = "".concat(lang, "-").concat(componentName);
      var message = I18nMixin_1.loadedMessages[componentLang] ? I18nMixin_1.loadedMessages[componentLang][key] || key : key;

      if (_typeof(variables) === 'object' || Array.isArray(variables)) {
        message = message.replace(/{(\w+?)}/g, function (match, variable) {
          return variables[variable].toString() || match;
        });
      }

      return message;
    }
  }, {
    key: "registerComponent",
    value: function registerComponent(component) {
      var componentName = component.$options.name; // Using $options.name instead of constructor.name as class names get mangled in the production build.

      var componentsOfSameType = I18nMixin_1.registeredComponents[componentName];

      if (!componentsOfSameType) {
        componentsOfSameType = new Set();
        I18nMixin_1.registeredComponents[componentName] = componentsOfSameType;
        I18nMixin_1.loadComponentLanguageFile(componentName);
      }

      componentsOfSameType.add(component);
    }
  }, {
    key: "unregisterComponent",
    value: function unregisterComponent(component) {
      var componentName = component.$options.name; // Using $options.name instead of constructor.name as class names get mangled in the production build.

      var componentsOfSameType = I18nMixin_1.registeredComponents[componentName];
      if (!componentsOfSameType) return;

      if (componentsOfSameType.size === 1) {
        delete I18nMixin_1.registeredComponents[componentName];
      } else {
        componentsOfSameType.delete(component);
      }
    }
    /**
     * Asynchronously load a translation file.
     * @param {string} componentName - Name of the component you want to load a translation for
     */

  }, {
    key: "loadComponentLanguageFile",
    value: function () {
      var _loadComponentLanguageFile = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(componentName) {
        var lang, componentLang, messages, componentsToNotify, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, component;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                lang = I18nMixin_1.lang;
                componentLang = lang + '-' + componentName;

                if (!(!(componentLang in I18nMixin_1.loadedMessages) && lang !== 'en')) {
                  _context.next = 7;
                  break;
                }

                _context.next = 5;
                return __webpack_require__("40ac")("./".concat(lang, "/").concat(componentName, ".json"));

              case 5:
                messages = _context.sent;
                I18nMixin_1.loadedMessages[componentLang] = messages.default || {};

              case 7:
                componentsToNotify = I18nMixin_1.registeredComponents[componentName] || [];
                _iteratorNormalCompletion = true;
                _didIteratorError = false;
                _iteratorError = undefined;
                _context.prev = 11;

                for (_iterator = componentsToNotify[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                  component = _step.value;
                  // rerender with new language and notify potential event listeners
                  component.$forceUpdate();
                  component.$emit(I18nMixin_1.Events.LANGUAGE_READY, lang);
                }

                _context.next = 19;
                break;

              case 15:
                _context.prev = 15;
                _context.t0 = _context["catch"](11);
                _didIteratorError = true;
                _iteratorError = _context.t0;

              case 19:
                _context.prev = 19;
                _context.prev = 20;

                if (!_iteratorNormalCompletion && _iterator.return != null) {
                  _iterator.return();
                }

              case 22:
                _context.prev = 22;

                if (!_didIteratorError) {
                  _context.next = 25;
                  break;
                }

                throw _iteratorError;

              case 25:
                return _context.finish(22);

              case 26:
                return _context.finish(19);

              case 27:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[11, 15, 19, 27], [20,, 22, 26]]);
      }));

      function loadComponentLanguageFile(_x) {
        return _loadComponentLanguageFile.apply(this, arguments);
      }

      return loadComponentLanguageFile;
    }()
  }]);

  return I18nMixin;
}(external_vue_property_decorator_["Vue"]);

I18nMixin_I18nMixin.DEFAULT_LANGUAGE = 'en';
I18nMixin_I18nMixin.SUPPORTED_LANGUAGES = [I18nMixin_1.DEFAULT_LANGUAGE, 'de', 'es', 'fr', 'zh'];
/** Current active language */

I18nMixin_I18nMixin.lang = I18nMixin_1.detectLanguage();
I18nMixin_I18nMixin.loadedMessages = {};
I18nMixin_I18nMixin.registeredComponents = {};
I18nMixin_I18nMixin = I18nMixin_1 = __decorate([external_vue_property_decorator_["Component"]], I18nMixin_I18nMixin);

(function (I18nMixin) {
  var Events;

  (function (Events) {
    Events["LANGUAGE_READY"] = "language-ready";
  })(Events = I18nMixin.Events || (I18nMixin.Events = {}));
})(I18nMixin_I18nMixin || (I18nMixin_I18nMixin = {})); // Update the language in case it was changed via language cookie.


window.addEventListener('focus', function () {
  return I18nMixin_I18nMixin.setLanguage(I18nMixin_I18nMixin.detectLanguage());
});
/* harmony default export */ var i18n_I18nMixin = (I18nMixin_I18nMixin);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--13-1!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Copyable.vue?vue&type=script&lang=ts&





var Copyable_1;




/**
 * **Copyable**
 *
 * Copyable can be used to make a click on one or more elements copy content to the Clipboard with visual feedback.
 * By default the children's contents are copied to the Clipboard. Alternatively, a specific text to be copied can be
 * provided.
 *
 * Props:
 *
 * **text** {string} [optional] - A specific text to be copied to the clipboard on click
 */

var Copyablevue_type_script_lang_ts_Copyable = Copyable_1 =
/*#__PURE__*/
function (_Mixins) {
  _inherits(Copyable, _Mixins);

  function Copyable() {
    var _this;

    _classCallCheck(this, Copyable);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Copyable).apply(this, arguments));
    _this.copied = false;
    _this._copiedResetTimeout = null;
    return _this;
  }

  _createClass(Copyable, [{
    key: "copy",
    value: function copy() {
      var _this2 = this;

      var text = this.text || this.$el.innerText;
      Clipboard.copy(text);
      window.clearTimeout(this._copiedResetTimeout);
      this.copied = true;
      this._copiedResetTimeout = window.setTimeout(function () {
        _this2.copied = false;
      }, Copyable_1.DISPLAY_TIME);
    }
  }, {
    key: "onKeyDown",
    value: function onKeyDown(event) {
      if (event.key === ' '
      /* Space */
      || event.key === 'Enter') {
        this.copy();
      }
    }
  }, {
    key: "created",
    value: function created() {
      this.onKeyDown = this.onKeyDown.bind(this);
    }
  }, {
    key: "mounted",
    value: function mounted() {
      this.$el.addEventListener('keydown', this.onKeyDown);
    }
  }, {
    key: "beforeDestroy",
    value: function beforeDestroy() {
      this.$el.removeEventListener('keydown', this.onKeyDown);
    }
  }]);

  return Copyable;
}(Object(external_vue_property_decorator_["Mixins"])(i18n_I18nMixin));

Copyablevue_type_script_lang_ts_Copyable.DISPLAY_TIME = 800;

__decorate([Object(external_vue_property_decorator_["Prop"])(String)], Copyablevue_type_script_lang_ts_Copyable.prototype, "text", void 0);

Copyablevue_type_script_lang_ts_Copyable = Copyable_1 = __decorate([Object(external_vue_property_decorator_["Component"])({
  name: 'Copyable'
})], Copyablevue_type_script_lang_ts_Copyable);
/* harmony default export */ var Copyablevue_type_script_lang_ts_ = (Copyablevue_type_script_lang_ts_Copyable);
// CONCATENATED MODULE: ./src/components/Copyable.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_Copyablevue_type_script_lang_ts_ = (Copyablevue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./src/components/Copyable.vue?vue&type=style&index=0&id=1fbe8b15&scoped=true&lang=css&
var Copyablevue_type_style_index_0_id_1fbe8b15_scoped_true_lang_css_ = __webpack_require__("8745");

// CONCATENATED MODULE: ./src/components/Copyable.vue






/* normalize component */

var Copyable_component = normalizeComponent(
  components_Copyablevue_type_script_lang_ts_,
  Copyablevue_type_template_id_1fbe8b15_scoped_true_render,
  Copyablevue_type_template_id_1fbe8b15_scoped_true_staticRenderFns,
  false,
  null,
  "1fbe8b15",
  null
  
)

/* harmony default export */ var components_Copyable = (Copyable_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0d243f96-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/FiatAmount.vue?vue&type=template&id=73f1cb01&
var FiatAmountvue_type_template_id_73f1cb01_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',{staticClass:"fiat-amount"},[_vm._v(" "+_vm._s(_vm._currencyString)+" ")])}
var FiatAmountvue_type_template_id_73f1cb01_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/FiatAmount.vue?vue&type=template&id=73f1cb01&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.parse-float.js
var es_number_parse_float = __webpack_require__("c35a");

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js








function _iterableToArrayLimit(arr, i) {
  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }

  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js



function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--13-1!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/FiatAmount.vue?vue&type=script&lang=ts&














var FiatAmount_1;




var FiatAmountvue_type_script_lang_ts_FiatAmount = FiatAmount_1 =
/*#__PURE__*/
function (_Vue) {
  _inherits(FiatAmount, _Vue);

  function FiatAmount() {
    _classCallCheck(this, FiatAmount);

    return _possibleConstructorReturn(this, _getPrototypeOf(FiatAmount).apply(this, arguments));
  }

  _createClass(FiatAmount, [{
    key: "_currencyString",
    get: function get() {
      var localeWithLatinNumbers = "".concat(this.locale, "-u-nu-latn");
      var formattingOptions = {
        style: 'currency',
        currency: this.currency,
        currencyDisplay: 'symbol',
        useGrouping: false,
        minimumFractionDigits: undefined
      };
      var formatted;
      var integers;
      var relativeDeviation;

      do {
        formatted = this.amount.toLocaleString([localeWithLatinNumbers, 'en-US'], formattingOptions) // Enforce a dot as decimal separator for consistency and parseFloat. Using capturing groups instead of
        // lookahead/lookbehind to avoid browser support limitations.
        .replace(FiatAmount_1.DECIMAL_SEPARATOR_REGEX, '$1.$2');
        var regexMatch = formatted.match(FiatAmount_1.NUMBER_REGEX);

        var _regexMatch = _slicedToArray(regexMatch, 5),

        /* full match */
        sign = _regexMatch[1],

        /* integers */
        decimalsIncludingSeparator = _regexMatch[3],
            decimals = _regexMatch[4];

        integers = regexMatch[2];
        var formattedNumber = "".concat(sign || '').concat(integers).concat(decimalsIncludingSeparator || '');
        relativeDeviation = Math.abs((this.amount - Number.parseFloat(formattedNumber)) / this.amount);
        formattingOptions.minimumFractionDigits = decimals ? decimals.length + 1 : 1;
      } while (relativeDeviation > this.maxRelativeDeviation && formattingOptions.minimumFractionDigits <= 20 // maximum allowed value for minimumFractionDigits
      ); // apply integer grouping


      if (integers.length <= 4) return formatted;
      return formatted.replace(integers, new FormattableNumber(integers).toString(true));
    }
  }]);

  return FiatAmount;
}(external_vue_property_decorator_["Vue"]);

FiatAmountvue_type_script_lang_ts_FiatAmount.NUMBER_REGEX = /(-)?\D*(\d+)(\.(\d+))?/;
FiatAmountvue_type_script_lang_ts_FiatAmount.DECIMAL_SEPARATOR_REGEX = /(\d)\D(\d)/;

__decorate([Object(external_vue_property_decorator_["Prop"])({
  type: Number,
  required: true
})], FiatAmountvue_type_script_lang_ts_FiatAmount.prototype, "amount", void 0);

__decorate([Object(external_vue_property_decorator_["Prop"])({
  type: String,
  required: true
})], FiatAmountvue_type_script_lang_ts_FiatAmount.prototype, "currency", void 0);

__decorate([Object(external_vue_property_decorator_["Prop"])({
  type: Number,
  default: .1
})], FiatAmountvue_type_script_lang_ts_FiatAmount.prototype, "maxRelativeDeviation", void 0);

__decorate([Object(external_vue_property_decorator_["Prop"])({
  type: String,
  default: navigator.language
})], FiatAmountvue_type_script_lang_ts_FiatAmount.prototype, "locale", void 0);

FiatAmountvue_type_script_lang_ts_FiatAmount = FiatAmount_1 = __decorate([external_vue_property_decorator_["Component"]], FiatAmountvue_type_script_lang_ts_FiatAmount);
/* harmony default export */ var FiatAmountvue_type_script_lang_ts_ = (FiatAmountvue_type_script_lang_ts_FiatAmount);
// CONCATENATED MODULE: ./src/components/FiatAmount.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_FiatAmountvue_type_script_lang_ts_ = (FiatAmountvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./src/components/FiatAmount.vue





/* normalize component */

var FiatAmount_component = normalizeComponent(
  components_FiatAmountvue_type_script_lang_ts_,
  FiatAmountvue_type_template_id_73f1cb01_render,
  FiatAmountvue_type_template_id_73f1cb01_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var components_FiatAmount = (FiatAmount_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0d243f96-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Identicon.vue?vue&type=template&id=053228da&scoped=true&
var Identiconvue_type_template_id_053228da_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"identicon"},[_c('img',{attrs:{"src":_vm.dataUrl}})])}
var Identiconvue_type_template_id_053228da_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Identicon.vue?vue&type=template&id=053228da&scoped=true&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.join.js
var es_array_join = __webpack_require__("a15b");

// EXTERNAL MODULE: ./node_modules/@nimiq/iqons/dist/iqons.min.js
var iqons_min = __webpack_require__("bfa7");

// EXTERNAL MODULE: ./node_modules/@nimiq/iqons/dist/iqons.min.svg
var dist_iqons_min = __webpack_require__("1625");
var iqons_min_default = /*#__PURE__*/__webpack_require__.n(dist_iqons_min);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--13-1!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Identicon.vue?vue&type=script&lang=ts&









var Identicon_1;




 // Detect Iqons.svgPath
// @ts-ignore

if (self.NIMIQ_IQONS_SVG_PATH) iqons_min["a" /* default */].svgPath = self.NIMIQ_IQONS_SVG_PATH;else {
  if (iqons_min_default.a[0] === '"') {
    iqons_min["a" /* default */].svgPath = iqons_min_default.a.substring(1, iqons_min_default.a.length - 1);
  } else {
    iqons_min["a" /* default */].svgPath = iqons_min_default.a;
  }
}

var Identiconvue_type_script_lang_ts_Identicon = Identicon_1 =
/*#__PURE__*/
function (_Vue) {
  _inherits(Identicon, _Vue);

  function Identicon() {
    var _this;

    _classCallCheck(this, Identicon);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Identicon).apply(this, arguments));
    _this.dataUrl = _this.placeholderDataUrl;
    return _this;
  }

  _createClass(Identicon, [{
    key: "computeDataUrl",
    value: function computeDataUrl(address, oldAddress) {
      var _this2 = this;

      if (this.address && Identicon_1.isUserFriendlyAddress(this.address)) {
        iqons_min["a" /* default */].toDataUrl(Identicon_1.formatAddress(this.address)).then(function (dataUrl) {
          _this2.dataUrl = dataUrl;
        });
      } else {
        this.dataUrl = this.placeholderDataUrl;
      }

      return true;
    }
  }, {
    key: "placeholderDataUrl",
    get: function get() {
      // tslint:disable-next-line max-line-length
      return 'data:image/svg+xml,<svg width="64" height="64" viewBox="0 -4 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity=".1" d="M62.3 25.4L49.2 2.6A5.3 5.3 0 0 0 44.6 0H18.4c-1.9 0-3.6 1-4.6 2.6L.7 25.4c-1 1.6-1 3.6 0 5.2l13.1 22.8c1 1.6 2.7 2.6 4.6 2.6h26.2c1.9 0 3.6-1 4.6-2.6l13-22.8c1-1.6 1-3.6.1-5.2z" fill="url(%23identicon_radial)"/><defs><radialGradient id="identicon_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="matrix(-63.0033 0 0 -56 63 56)"><stop stop-color="%23260133"/><stop offset="1" stop-color="%231F2348"/></radialGradient></defs></svg>';
    }
  }], [{
    key: "formatAddress",
    value: function formatAddress(str) {
      return str.replace(/[\+ ]/g, '').toUpperCase().match(/.{4}/g).join(' ');
    }
  }, {
    key: "isUserFriendlyAddress",
    value: function isUserFriendlyAddress(str) {
      return ValidationUtils.isValidAddress(str);
    }
  }]);

  return Identicon;
}(external_vue_property_decorator_["Vue"]);

__decorate([Object(external_vue_property_decorator_["Prop"])(String)], Identiconvue_type_script_lang_ts_Identicon.prototype, "address", void 0);

__decorate([Object(external_vue_property_decorator_["Watch"])('address', {
  immediate: true
})], Identiconvue_type_script_lang_ts_Identicon.prototype, "computeDataUrl", null);

Identiconvue_type_script_lang_ts_Identicon = Identicon_1 = __decorate([external_vue_property_decorator_["Component"]], Identiconvue_type_script_lang_ts_Identicon);
/* harmony default export */ var Identiconvue_type_script_lang_ts_ = (Identiconvue_type_script_lang_ts_Identicon);
// CONCATENATED MODULE: ./src/components/Identicon.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_Identiconvue_type_script_lang_ts_ = (Identiconvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./src/components/Identicon.vue?vue&type=style&index=0&id=053228da&scoped=true&lang=css&
var Identiconvue_type_style_index_0_id_053228da_scoped_true_lang_css_ = __webpack_require__("386a");

// CONCATENATED MODULE: ./src/components/Identicon.vue






/* normalize component */

var Identicon_component = normalizeComponent(
  components_Identiconvue_type_script_lang_ts_,
  Identiconvue_type_template_id_053228da_scoped_true_render,
  Identiconvue_type_template_id_053228da_scoped_true_staticRenderFns,
  false,
  null,
  "053228da",
  null
  
)

/* harmony default export */ var components_Identicon = (Identicon_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0d243f96-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/LabelInput.vue?vue&type=template&id=7dfeeab2&scoped=true&
var LabelInputvue_type_template_id_7dfeeab2_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('form',{staticClass:"label-input",on:{"submit":function($event){$event.preventDefault();return _vm.onBlur($event)}}},[_c('span',{ref:"widthPlaceholder",staticClass:"width-finder width-placeholder"},[_vm._v(_vm._s(_vm.placeholder || _vm.$t('Name your address')))]),_c('span',{ref:"widthValue",staticClass:"width-finder width-value"},[_vm._v(_vm._s(_vm.liveValue))]),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.liveValue),expression:"liveValue"}],ref:"input",staticClass:"nq-input",class:{'vanishing': _vm.vanishing},style:({width: ((this.width) + "px")}),attrs:{"type":"text","placeholder":_vm.placeholder || _vm.$t('Name your address')},domProps:{"value":(_vm.liveValue)},on:{"input":[function($event){if($event.target.composing){ return; }_vm.liveValue=$event.target.value},_vm.onInput],"blur":_vm.onBlur}})])}
var LabelInputvue_type_template_id_7dfeeab2_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/LabelInput.vue?vue&type=template&id=7dfeeab2&scoped=true&

// CONCATENATED MODULE: ./node_modules/@nimiq/utils/dist/module/Utf8Tools.js
/* eslint-disable no-bitwise, no-plusplus, eqeqeq */
/**
 * Sources:
 *
 * Conversion functions taken from
 * https://github.com/google/closure-library/blob/master/closure/goog/crypt/crypt.js
 *
 * UTF-8 validitiy limit values from
 * https://lemire.me/blog/2018/05/09/how-quickly-can-you-check-that-a-string-is-valid-unicode-utf-8/
 */
class Utf8Tools {
    static stringToUtf8ByteArray(str) {
        if (typeof TextEncoder !== 'undefined') {
            const encoder = new TextEncoder(); // utf-8 is the default
            return encoder.encode(str);
        }
        // Fallback for unsupported TextEncoder
        const out = [];
        let p = 0;
        for (let i = 0; i < str.length; i++) {
            let c = str.charCodeAt(i);
            if (c < 128) {
                out[p++] = c;
            }
            else if (c < 2048) {
                out[p++] = (c >> 6) | 192;
                out[p++] = (c & 63) | 128;
            }
            else if (((c & 0xFC00) == 0xD800) && (i + 1) < str.length
                && ((str.charCodeAt(i + 1) & 0xFC00) == 0xDC00)) {
                // Surrogate Pair
                c = 0x10000 + ((c & 0x03FF) << 10) + (str.charCodeAt(++i) & 0x03FF);
                out[p++] = (c >> 18) | 240;
                out[p++] = ((c >> 12) & 63) | 128;
                out[p++] = ((c >> 6) & 63) | 128;
                out[p++] = (c & 63) | 128;
            }
            else {
                out[p++] = (c >> 12) | 224;
                out[p++] = ((c >> 6) & 63) | 128;
                out[p++] = (c & 63) | 128;
            }
        }
        return new Uint8Array(out);
    }
    static utf8ByteArrayToString(bytes) {
        if (typeof TextDecoder !== 'undefined') {
            const decoder = new TextDecoder('utf-8');
            return decoder.decode(bytes);
        }
        // Fallback for unsupported TextDecoder.
        // Note that this fallback can result in a different decoding for invalid utf8 than the native implementation.
        // This is the case when a character requires more bytes than are left in the array which is not handled here.
        const out = [];
        let pos = 0;
        let c = 0;
        while (pos < bytes.length) {
            /* eslint-disable no-mixed-operators */
            const c1 = bytes[pos++];
            if (c1 < 128) {
                out[c++] = String.fromCharCode(c1);
            }
            else if (c1 > 191 && c1 < 224) {
                const c2 = bytes[pos++];
                out[c++] = String.fromCharCode((c1 & 31) << 6 | c2 & 63);
            }
            else if (c1 > 239 && c1 < 365) {
                // Surrogate Pair
                const c2 = bytes[pos++];
                const c3 = bytes[pos++];
                const c4 = bytes[pos++];
                const u = ((c1 & 7) << 18 | (c2 & 63) << 12 | (c3 & 63) << 6 | c4 & 63) - 0x10000;
                out[c++] = String.fromCharCode(0xD800 + (u >> 10));
                out[c++] = String.fromCharCode(0xDC00 + (u & 1023));
            }
            else {
                const c2 = bytes[pos++];
                const c3 = bytes[pos++];
                out[c++] = String.fromCharCode((c1 & 15) << 12 | (c2 & 63) << 6 | c3 & 63);
            }
            /* eslint-enable no-mixed-operators */
        }
        return out.join('');
    }
    static isValidUtf8(bytes, denyControlCharacters = false) {
        const controlCharsWhitelist = [
            0x09,
            0x0A,
            0x0D,
        ];
        if (typeof TextDecoder !== 'undefined') {
            try {
                const decoder = new TextDecoder('utf-8', { fatal: true });
                const decoded = decoder.decode(bytes); // throws for invalid input
                if (!denyControlCharacters)
                    return true;
                // Search for control characters (utf-8 single byte characters (0x00-0x7F) which are not in the range
                // 0x20-0x7E (space-tilde)). Note that we use the unicode u flag to avoid astral symbols (symbols
                // outside the range 0x0000 - 0xFFFF) getting split up into two surrogate halves.
                // See https://mathiasbynens.be/notes/javascript-unicode#regex
                // eslint-disable-next-line no-control-regex
                const controlCharsMatch = decoded.match(/[\u0000-\u001F\u007F]/gu);
                if (!controlCharsMatch)
                    return true;
                return controlCharsMatch.every((char) => controlCharsWhitelist.includes(char.charCodeAt(0)));
            }
            catch (e) {
                return false;
            }
        }
        // Fallback for unsupported TextDecoder
        let i = 0;
        while (i < bytes.length) {
            const bytesLeft = bytes.length - i;
            const first = bytes[i]; // The byte
            /* eslint-disable brace-style */
            if (first <= 0x7F) { // Possible one-byte
                if (first >= 0x20 /* space */ && first <= 0x7E /* tilde */)
                    ++i; // non-control chars
                else if (!denyControlCharacters)
                    ++i; // it's a control char but we're accepting them
                else if (controlCharsWhitelist.indexOf(first) > -1)
                    ++i; // whitelisted control char
                else
                    break;
            }
            else if (first >= 0xC2 && first <= 0xDF && bytesLeft >= 2) { // Possible two-byte
                const second = bytes[++i];
                if (second >= 0x80 && second <= 0xBF)
                    ++i; // Is valid two-byte
                else
                    break;
            }
            else if (first === 0xE0 && bytesLeft >= 3) { // Possible three-byte
                const second = bytes[++i];
                const third = bytes[++i];
                if (second >= 0xA0 && second <= 0xBF
                    && third >= 0x80 && third <= 0xBF)
                    ++i; // Is valid three-byte
                else
                    break;
            }
            else if (first >= 0xE1 && first <= 0xEC && bytesLeft >= 3) { // Possible three-byte
                const second = bytes[++i];
                const third = bytes[++i];
                if (second >= 0x80 && second <= 0xBF
                    && third >= 0x80 && third <= 0xBF)
                    ++i; // Is valid three-byte
                else
                    break;
            }
            else if (first === 0xED && bytesLeft >= 3) { // Possible three-byte
                const second = bytes[++i];
                const third = bytes[++i];
                if (second >= 0x80 && second <= 0x9F
                    && third >= 0x80 && third <= 0xBF)
                    ++i; // Is valid three-byte
                else
                    break;
            }
            else if (first >= 0xEE && first <= 0xEF && bytesLeft >= 3) { // Possible three-byte
                const second = bytes[++i];
                const third = bytes[++i];
                if (second >= 0x80 && second <= 0xBF
                    && third >= 0x80 && third <= 0xBF)
                    ++i; // Is valid three-byte
                else
                    break;
            }
            else if (first === 0xF0 && bytesLeft >= 4) { // Possible four-byte
                const second = bytes[++i];
                const third = bytes[++i];
                const fourth = bytes[++i];
                if (second >= 0x90 && second <= 0xBF
                    && third >= 0x80 && third <= 0xBF
                    && fourth >= 0x80 && fourth <= 0xBF)
                    ++i; // Is valid four-byte
                else
                    break;
            }
            else if (first >= 0xF1 && first <= 0xF3 && bytesLeft >= 4) { // Possible four-byte
                const second = bytes[++i];
                const third = bytes[++i];
                const fourth = bytes[++i];
                if (second >= 0x80 && second <= 0xBF
                    && third >= 0x80 && third <= 0xBF
                    && fourth >= 0x80 && fourth <= 0xBF)
                    ++i; // Is valid four-byte
                else
                    break;
            }
            else if (first === 0xF4 && bytesLeft >= 4) { // Possible four-byte
                const second = bytes[++i];
                const third = bytes[++i];
                const fourth = bytes[++i];
                if (second >= 0x80 && second <= 0x8F
                    && third >= 0x80 && third <= 0xBF
                    && fourth >= 0x80 && fourth <= 0xBF)
                    ++i; // Is valid four-byte
                else
                    break;
            }
            else
                break;
            /* eslint-enable brace-style */
        }
        // If the whole array was walked successfully, then the last check also increased the counter
        // and the index i is equal to the length of the array.
        // If the while loop was broken early, i is smaller and the array is not valid UTF-8.
        return i === bytes.length;
    }
    static truncateToUtf8ByteLength(input, length, applyEllipsis = true) {
        if (length < 0) {
            throw new Error('Invalid byte length');
        }
        let bytes;
        if (typeof input === 'string') {
            bytes = Utf8Tools.stringToUtf8ByteArray(input);
        }
        else {
            bytes = input;
        }
        if (bytes.length <= length) {
            return {
                result: input,
                didTruncate: false,
            };
        }
        const ellipsisBytes = [226, 128, 166];
        if (length < ellipsisBytes.length)
            applyEllipsis = false;
        bytes = bytes.subarray(0, length - (applyEllipsis ? ellipsisBytes.length : 0));
        // Cut off last byte until byte array is valid utf-8
        while (!Utf8Tools.isValidUtf8(bytes))
            bytes = bytes.subarray(0, bytes.length - 1);
        if (applyEllipsis) {
            // Add ellipsis. Note that we can safely extend by the ellipsis bytes as we shoved these bytes off before.
            bytes = new Uint8Array(bytes.buffer, bytes.byteOffset, bytes.length + ellipsisBytes.length);
            if (typeof input !== 'string') {
                // We're working on the input bytes. Create a copy to not modify the original data.
                bytes = new Uint8Array(bytes);
            }
            bytes.set(ellipsisBytes, bytes.length - ellipsisBytes.length);
        }
        return {
            result: typeof input === 'string' ? Utf8Tools.utf8ByteArrayToString(bytes) : bytes,
            didTruncate: true,
        };
    }
}


//# sourceMappingURL=Utf8Tools.js.map

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--13-1!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/LabelInput.vue?vue&type=script&lang=ts&













var LabelInputvue_type_script_lang_ts_LabelInput =
/*#__PURE__*/
function (_Mixins) {
  _inherits(LabelInput, _Mixins);

  function LabelInput() {
    var _this;

    _classCallCheck(this, LabelInput);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(LabelInput).apply(this, arguments));
    _this.liveValue = '';
    _this.lastValue = '';
    _this.lastEmittedValue = '';
    _this.width = 50;
    return _this;
  }

  _createClass(LabelInput, [{
    key: "focus",
    value: function focus() {
      this.$refs.input.focus();
    }
  }, {
    key: "onInput",
    value: function onInput() {
      if (this.maxBytes) {
        var lengthInBytes = Utf8Tools.stringToUtf8ByteArray(this.liveValue).byteLength;

        if (lengthInBytes > this.maxBytes) {
          this.liveValue = this.lastValue;
          return;
        }

        this.lastValue = this.liveValue;
      }

      this.$emit('input', this.liveValue);
    }
  }, {
    key: "onBlur",
    value: function onBlur() {
      if (this.liveValue === this.lastEmittedValue) return;
      this.$emit('changed', this.liveValue);
      this.lastEmittedValue = this.liveValue;
      this.$refs.input.blur();
    }
  }, {
    key: "updateValue",
    value: function updateValue(newValue) {
      this.liveValue = newValue;
      this.lastValue = this.liveValue;
      this.lastEmittedValue = this.lastValue;
    }
  }, {
    key: "updateWidth",
    value: function () {
      var _updateWidth = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        var placeholderWidth, valueWidth, fontSize;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return external_vue_property_decorator_["Vue"].nextTick();

              case 2:
                if (this.$refs.widthPlaceholder) {
                  _context.next = 4;
                  break;
                }

                return _context.abrupt("return");

              case 4:
                placeholderWidth = this.$refs.widthPlaceholder.offsetWidth;
                valueWidth = this.$refs.widthValue.offsetWidth; // Add an additional padding, so entering new letters does not flicker the input before width is adjusted
                //
                // A third of the font-size was found to be a good compromise between not adding too big a gap and
                // still resonably supporting wide letters (it still jumps for W at bigger font-sizes, but that's why
                // it's called a compromise).

                fontSize = parseFloat(window.getComputedStyle(this.$refs.input, null).getPropertyValue('font-size'));
                this.width = (this.liveValue.length ? valueWidth : placeholderWidth) + fontSize / 3;

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function updateWidth() {
        return _updateWidth.apply(this, arguments);
      }

      return updateWidth;
    }()
  }]);

  return LabelInput;
}(Object(external_vue_property_decorator_["Mixins"])(i18n_I18nMixin));

__decorate([Object(external_vue_property_decorator_["Prop"])(Number)], LabelInputvue_type_script_lang_ts_LabelInput.prototype, "maxBytes", void 0);

__decorate([Object(external_vue_property_decorator_["Prop"])({
  type: String,
  default: ''
})], LabelInputvue_type_script_lang_ts_LabelInput.prototype, "value", void 0);

__decorate([Object(external_vue_property_decorator_["Prop"])({
  type: String
})], LabelInputvue_type_script_lang_ts_LabelInput.prototype, "placeholder", void 0);

__decorate([Object(external_vue_property_decorator_["Prop"])({
  type: Boolean,
  default: false
})], LabelInputvue_type_script_lang_ts_LabelInput.prototype, "vanishing", void 0);

__decorate([Object(external_vue_property_decorator_["Watch"])('value', {
  immediate: true
})], LabelInputvue_type_script_lang_ts_LabelInput.prototype, "updateValue", null);

__decorate([Object(external_vue_property_decorator_["Watch"])('liveValue', {
  immediate: true
})], LabelInputvue_type_script_lang_ts_LabelInput.prototype, "updateWidth", null);

LabelInputvue_type_script_lang_ts_LabelInput = __decorate([Object(external_vue_property_decorator_["Component"])({
  name: 'LabelInput'
})], LabelInputvue_type_script_lang_ts_LabelInput);
/* harmony default export */ var LabelInputvue_type_script_lang_ts_ = (LabelInputvue_type_script_lang_ts_LabelInput);
// CONCATENATED MODULE: ./src/components/LabelInput.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_LabelInputvue_type_script_lang_ts_ = (LabelInputvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./src/components/LabelInput.vue?vue&type=style&index=0&id=7dfeeab2&scoped=true&lang=css&
var LabelInputvue_type_style_index_0_id_7dfeeab2_scoped_true_lang_css_ = __webpack_require__("5d48");

// CONCATENATED MODULE: ./src/components/LabelInput.vue






/* normalize component */

var LabelInput_component = normalizeComponent(
  components_LabelInputvue_type_script_lang_ts_,
  LabelInputvue_type_template_id_7dfeeab2_scoped_true_render,
  LabelInputvue_type_template_id_7dfeeab2_scoped_true_staticRenderFns,
  false,
  null,
  "7dfeeab2",
  null
  
)

/* harmony default export */ var components_LabelInput = (LabelInput_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0d243f96-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/LoadingSpinner.vue?vue&type=template&id=01b4df5e&scoped=true&
var LoadingSpinnervue_type_template_id_01b4df5e_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{staticClass:"loading-spinner",attrs:{"height":"48","width":"54","color":"inherit"}},[_c('path',{attrs:{"id":"big-hex","d":"M51.9,21.9L41.3,3.6c-0.8-1.3-2.2-2.1-3.7-2.1H16.4c-1.5,0-2.9,0.8-3.7,2.1L2.1,21.9c-0.8,1.3-0.8,2.9,0,4.2 l10.6,18.3c0.8,1.3,2.2,2.1,3.7,2.1h21.3c1.5,0,2.9-0.8,3.7-2.1l10.6-18.3C52.7,24.8,52.7,23.2,51.9,21.9z","stroke":"currentColor","stroke-width":"3","fill":"none","stroke-linecap":"round","opacity":"0.4","stroke-dasharray":"92.5 60"}}),_c('path',{attrs:{"id":"small-hex","d":"M51.9,21.9L41.3,3.6c-0.8-1.3-2.2-2.1-3.7-2.1H16.4c-1.5,0-2.9,0.8-3.7,2.1L2.1,21.9c-0.8,1.3-0.8,2.9,0,4.2 l10.6,18.3c0.8,1.3,2.2,2.1,3.7,2.1h21.3c1.5,0,2.9-0.8,3.7-2.1l10.6-18.3C52.7,24.8,52.7,23.2,51.9,21.9z","stroke":"currentColor","stroke-width":"3","fill":"none","stroke-linecap":"round","stroke-dasharray":"47.5 105"}})])}
var LoadingSpinnervue_type_template_id_01b4df5e_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/LoadingSpinner.vue?vue&type=template&id=01b4df5e&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--13-1!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/LoadingSpinner.vue?vue&type=script&lang=ts&







var LoadingSpinnervue_type_script_lang_ts_LoadingSpinner =
/*#__PURE__*/
function (_Vue) {
  _inherits(LoadingSpinner, _Vue);

  function LoadingSpinner() {
    _classCallCheck(this, LoadingSpinner);

    return _possibleConstructorReturn(this, _getPrototypeOf(LoadingSpinner).apply(this, arguments));
  }

  return LoadingSpinner;
}(external_vue_property_decorator_["Vue"]);

LoadingSpinnervue_type_script_lang_ts_LoadingSpinner = __decorate([external_vue_property_decorator_["Component"]], LoadingSpinnervue_type_script_lang_ts_LoadingSpinner);
/* harmony default export */ var LoadingSpinnervue_type_script_lang_ts_ = (LoadingSpinnervue_type_script_lang_ts_LoadingSpinner);
// CONCATENATED MODULE: ./src/components/LoadingSpinner.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_LoadingSpinnervue_type_script_lang_ts_ = (LoadingSpinnervue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./src/components/LoadingSpinner.vue?vue&type=style&index=0&id=01b4df5e&scoped=true&lang=css&
var LoadingSpinnervue_type_style_index_0_id_01b4df5e_scoped_true_lang_css_ = __webpack_require__("dccd");

// CONCATENATED MODULE: ./src/components/LoadingSpinner.vue






/* normalize component */

var LoadingSpinner_component = normalizeComponent(
  components_LoadingSpinnervue_type_script_lang_ts_,
  LoadingSpinnervue_type_template_id_01b4df5e_scoped_true_render,
  LoadingSpinnervue_type_template_id_01b4df5e_scoped_true_staticRenderFns,
  false,
  null,
  "01b4df5e",
  null
  
)

/* harmony default export */ var components_LoadingSpinner = (LoadingSpinner_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0d243f96-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/PageBody.vue?vue&type=template&id=0b286594&scoped=true&
var PageBodyvue_type_template_id_0b286594_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"page-body nq-card-body"},[_vm._t("default")],2)}
var PageBodyvue_type_template_id_0b286594_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/PageBody.vue?vue&type=template&id=0b286594&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--13-1!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/PageBody.vue?vue&type=script&lang=ts&







var PageBodyvue_type_script_lang_ts_PageBody =
/*#__PURE__*/
function (_Vue) {
  _inherits(PageBody, _Vue);

  function PageBody() {
    _classCallCheck(this, PageBody);

    return _possibleConstructorReturn(this, _getPrototypeOf(PageBody).apply(this, arguments));
  }

  return PageBody;
}(external_vue_property_decorator_["Vue"]);

PageBodyvue_type_script_lang_ts_PageBody = __decorate([external_vue_property_decorator_["Component"]], PageBodyvue_type_script_lang_ts_PageBody);
/* harmony default export */ var PageBodyvue_type_script_lang_ts_ = (PageBodyvue_type_script_lang_ts_PageBody);
// CONCATENATED MODULE: ./src/components/PageBody.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_PageBodyvue_type_script_lang_ts_ = (PageBodyvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./src/components/PageBody.vue?vue&type=style&index=0&id=0b286594&scoped=true&lang=css&
var PageBodyvue_type_style_index_0_id_0b286594_scoped_true_lang_css_ = __webpack_require__("ab37");

// CONCATENATED MODULE: ./src/components/PageBody.vue






/* normalize component */

var PageBody_component = normalizeComponent(
  components_PageBodyvue_type_script_lang_ts_,
  PageBodyvue_type_template_id_0b286594_scoped_true_render,
  PageBodyvue_type_template_id_0b286594_scoped_true_staticRenderFns,
  false,
  null,
  "0b286594",
  null
  
)

/* harmony default export */ var components_PageBody = (PageBody_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0d243f96-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/PageFooter.vue?vue&type=template&id=3c6ba3a4&scoped=true&
var PageFootervue_type_template_id_3c6ba3a4_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"page-footer nq-card-footer"},[_vm._t("default")],2)}
var PageFootervue_type_template_id_3c6ba3a4_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/PageFooter.vue?vue&type=template&id=3c6ba3a4&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--13-1!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/PageFooter.vue?vue&type=script&lang=ts&







var PageFootervue_type_script_lang_ts_PageFooter =
/*#__PURE__*/
function (_Vue) {
  _inherits(PageFooter, _Vue);

  function PageFooter() {
    _classCallCheck(this, PageFooter);

    return _possibleConstructorReturn(this, _getPrototypeOf(PageFooter).apply(this, arguments));
  }

  return PageFooter;
}(external_vue_property_decorator_["Vue"]);

PageFootervue_type_script_lang_ts_PageFooter = __decorate([external_vue_property_decorator_["Component"]], PageFootervue_type_script_lang_ts_PageFooter);
/* harmony default export */ var PageFootervue_type_script_lang_ts_ = (PageFootervue_type_script_lang_ts_PageFooter);
// CONCATENATED MODULE: ./src/components/PageFooter.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_PageFootervue_type_script_lang_ts_ = (PageFootervue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./src/components/PageFooter.vue?vue&type=style&index=0&id=3c6ba3a4&scoped=true&lang=css&
var PageFootervue_type_style_index_0_id_3c6ba3a4_scoped_true_lang_css_ = __webpack_require__("6c68");

// CONCATENATED MODULE: ./src/components/PageFooter.vue






/* normalize component */

var PageFooter_component = normalizeComponent(
  components_PageFootervue_type_script_lang_ts_,
  PageFootervue_type_template_id_3c6ba3a4_scoped_true_render,
  PageFootervue_type_template_id_3c6ba3a4_scoped_true_staticRenderFns,
  false,
  null,
  "3c6ba3a4",
  null
  
)

/* harmony default export */ var components_PageFooter = (PageFooter_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0d243f96-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/PageHeader.vue?vue&type=template&id=53c0243a&scoped=true&
var PageHeadervue_type_template_id_53c0243a_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"page-header nq-card-header",class:_vm.progressIndicator ? 'has-progress-indicator' : ''},[(_vm.progressIndicator)?_c('div',{staticClass:"progress-indicator"},_vm._l((_vm.progressSteps),function(thisStep){return _c('div',{key:thisStep,staticClass:"indicator",class:thisStep <= _vm.step ? 'active' : ''})}),0):_vm._e(),(_vm.backArrow)?_c('a',{staticClass:"page-header-back-button",attrs:{"href":"#","title":_vm.$t('Go back')},on:{"click":function($event){$event.preventDefault();return _vm.$emit('back')}}},[_c('ArrowLeftIcon')],1):_vm._e(),_c('h1',{staticClass:"nq-h1"},[_vm._t("default")],2),_vm._t("more")],2)}
var PageHeadervue_type_template_id_53c0243a_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/PageHeader.vue?vue&type=template&id=53c0243a&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--13-1!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/PageHeader.vue?vue&type=script&lang=ts&











var PageHeadervue_type_script_lang_ts_PageHeader =
/*#__PURE__*/
function (_Mixins) {
  _inherits(PageHeader, _Mixins);

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

  return PageHeader;
}(Object(external_vue_property_decorator_["Mixins"])(i18n_I18nMixin));

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

PageHeadervue_type_script_lang_ts_PageHeader = __decorate([Object(external_vue_property_decorator_["Component"])({
  name: 'PageHeader',
  components: {
    ArrowLeftIcon: ArrowLeftIcon
  }
})], PageHeadervue_type_script_lang_ts_PageHeader);
/* harmony default export */ var PageHeadervue_type_script_lang_ts_ = (PageHeadervue_type_script_lang_ts_PageHeader);
// CONCATENATED MODULE: ./src/components/PageHeader.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_PageHeadervue_type_script_lang_ts_ = (PageHeadervue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./src/components/PageHeader.vue?vue&type=style&index=0&id=53c0243a&scoped=true&lang=css&
var PageHeadervue_type_style_index_0_id_53c0243a_scoped_true_lang_css_ = __webpack_require__("2726");

// CONCATENATED MODULE: ./src/components/PageHeader.vue






/* normalize component */

var PageHeader_component = normalizeComponent(
  components_PageHeadervue_type_script_lang_ts_,
  PageHeadervue_type_template_id_53c0243a_scoped_true_render,
  PageHeadervue_type_template_id_53c0243a_scoped_true_staticRenderFns,
  false,
  null,
  "53c0243a",
  null
  
)

/* harmony default export */ var components_PageHeader = (PageHeader_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0d243f96-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/QrCode.vue?vue&type=template&id=15576f68&
var QrCodevue_type_template_id_15576f68_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (!!_vm.data)?_c('canvas'):_vm._e()}
var QrCodevue_type_template_id_15576f68_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/QrCode.vue?vue&type=template&id=15576f68&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.every.js
var es_array_every = __webpack_require__("a623");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.index-of.js
var es_array_index_of = __webpack_require__("c975");

// CONCATENATED MODULE: ./node_modules/qr-creator/dist/qr-creator.es6.min.js
/*
 jquery-qrcode v0.14.0 - https://larsjung.de/jquery-qrcode/ */
let G=null;class H{}H.render=function(w,B){G(w,B)};self.QrCreator=H;
(function(w){function B(t,c,a,e){var b={},h=w(a,c);h.u(t);h.J();e=e||0;var r=h.h(),d=h.h()+2*e;b.text=t;b.level=c;b.version=a;b.O=d;b.a=function(b,a){b-=e;a-=e;return 0>b||b>=r||0>a||a>=r?!1:h.a(b,a)};return b}function C(t,c,a,e,b,h,r,d,g,x){function u(b,a,f,c,d,r,g){b?(t.lineTo(a+r,f+g),t.arcTo(a,f,c,d,h)):t.lineTo(a,f)}r?t.moveTo(c+h,a):t.moveTo(c,a);u(d,e,a,e,b,-h,0);u(g,e,b,c,b,0,-h);u(x,c,b,c,a,h,0);u(r,c,a,e,a,0,h)}function z(t,c,a,e,b,h,r,d,g,x){function u(b,a,c,d){t.moveTo(b+c,a);t.lineTo(b,
a);t.lineTo(b,a+d);t.arcTo(b,a,b+c,a,h)}r&&u(c,a,h,h);d&&u(e,a,-h,h);g&&u(e,b,-h,-h);x&&u(c,b,h,-h)}function A(t,c){var a=c.fill;if("string"===typeof a)t.fillStyle=a;else{var e=a.type,b=a.colorStops;a=a.position.map((b)=>Math.round(b*c.size));if("linear-gradient"===e)var h=t.createLinearGradient.apply(t,a);else if("radial-gradient"===e)h=t.createRadialGradient.apply(t,a);else throw Error("Unsupported fill");b.forEach(([b,a])=>{h.addColorStop(b,a)});t.fillStyle=h}}function y(t,c){a:{var a=c.text,e=
c.v,b=c.N,h=c.K,r=c.P;b=Math.max(1,b||1);for(h=Math.min(40,h||40);b<=h;b+=1)try{var d=B(a,e,b,r);break a}catch(J){}d=void 0}if(!d)return null;a=t.getContext("2d");c.background&&(a.fillStyle=c.background,a.fillRect(c.left,c.top,c.size,c.size));e=d.O;h=c.size/e;a.beginPath();for(r=0;r<e;r+=1)for(b=0;b<e;b+=1){var g=a,x=c.left+b*h,u=c.top+r*h,p=r,q=b,f=d.a,k=x+h,m=u+h,D=p-1,E=p+1,n=q-1,l=q+1,y=Math.floor(Math.min(.5,Math.max(0,c.R))*h),v=f(p,q),I=f(D,n),w=f(D,q);D=f(D,l);var F=f(p,l);l=f(E,l);q=f(E,
q);E=f(E,n);p=f(p,n);x=Math.round(x);u=Math.round(u);k=Math.round(k);m=Math.round(m);v?C(g,x,u,k,m,y,!w&&!p,!w&&!F,!q&&!F,!q&&!p):z(g,x,u,k,m,y,w&&p&&I,w&&F&&D,q&&F&&l,q&&p&&E)}A(a,c);a.fill();return t}var v={minVersion:1,maxVersion:40,ecLevel:"L",left:0,top:0,size:200,fill:"#000",background:null,text:"no text",radius:.5,quiet:0};G=function(t,c){var a={};Object.assign(a,v,t);a.N=a.minVersion;a.K=a.maxVersion;a.v=a.ecLevel;a.left=a.left;a.top=a.top;a.size=a.size;a.fill=a.fill;a.background=a.background;
a.text=a.text;a.R=a.radius;a.P=a.quiet;if(c instanceof HTMLCanvasElement){if(c.width!==a.size||c.height!==a.size)c.width=a.size,c.height=a.size;c.getContext("2d").clearRect(0,0,c.width,c.height);y(c,a)}else t=document.createElement("canvas"),t.width=a.size,t.height=a.size,a=y(t,a),c.appendChild(a)}})(function(){function w(c){var a=C.s(c);return{S:function(){return 4},b:function(){return a.length},write:function(c){for(var b=0;b<a.length;b+=1)c.put(a[b],8)}}}function B(){var c=[],a=0,e={B:function(){return c},
c:function(b){return 1==(c[Math.floor(b/8)]>>>7-b%8&1)},put:function(b,h){for(var a=0;a<h;a+=1)e.m(1==(b>>>h-a-1&1))},f:function(){return a},m:function(b){var h=Math.floor(a/8);c.length<=h&&c.push(0);b&&(c[h]|=128>>>a%8);a+=1}};return e}function C(c,a){function e(b,h){for(var a=-1;7>=a;a+=1)if(!(-1>=b+a||d<=b+a))for(var c=-1;7>=c;c+=1)-1>=h+c||d<=h+c||(r[b+a][h+c]=0<=a&&6>=a&&(0==c||6==c)||0<=c&&6>=c&&(0==a||6==a)||2<=a&&4>=a&&2<=c&&4>=c?!0:!1)}function b(b,a){for(var f=d=4*c+17,k=Array(f),m=0;m<
f;m+=1){k[m]=Array(f);for(var p=0;p<f;p+=1)k[m][p]=null}r=k;e(0,0);e(d-7,0);e(0,d-7);f=y.G(c);for(k=0;k<f.length;k+=1)for(m=0;m<f.length;m+=1){p=f[k];var q=f[m];if(null==r[p][q])for(var n=-2;2>=n;n+=1)for(var l=-2;2>=l;l+=1)r[p+n][q+l]=-2==n||2==n||-2==l||2==l||0==n&&0==l}for(f=8;f<d-8;f+=1)null==r[f][6]&&(r[f][6]=0==f%2);for(f=8;f<d-8;f+=1)null==r[6][f]&&(r[6][f]=0==f%2);f=y.w(h<<3|a);for(k=0;15>k;k+=1)m=!b&&1==(f>>k&1),r[6>k?k:8>k?k+1:d-15+k][8]=m,r[8][8>k?d-k-1:9>k?15-k:14-k]=m;r[d-8][8]=!b;if(7<=
c){f=y.A(c);for(k=0;18>k;k+=1)m=!b&&1==(f>>k&1),r[Math.floor(k/3)][k%3+d-8-3]=m;for(k=0;18>k;k+=1)m=!b&&1==(f>>k&1),r[k%3+d-8-3][Math.floor(k/3)]=m}if(null==g){b=t.I(c,h);f=B();for(k=0;k<x.length;k+=1)m=x[k],f.put(4,4),f.put(m.b(),y.f(4,c)),m.write(f);for(k=m=0;k<b.length;k+=1)m+=b[k].j;if(f.f()>8*m)throw Error("code length overflow. ("+f.f()+">"+8*m+")");for(f.f()+4<=8*m&&f.put(0,4);0!=f.f()%8;)f.m(!1);for(;!(f.f()>=8*m);){f.put(236,8);if(f.f()>=8*m)break;f.put(17,8)}var u=0;m=k=0;p=Array(b.length);
q=Array(b.length);for(n=0;n<b.length;n+=1){var v=b[n].j,w=b[n].o-v;k=Math.max(k,v);m=Math.max(m,w);p[n]=Array(v);for(l=0;l<p[n].length;l+=1)p[n][l]=255&f.B()[l+u];u+=v;l=y.C(w);v=z(p[n],l.b()-1).l(l);q[n]=Array(l.b()-1);for(l=0;l<q[n].length;l+=1)w=l+v.b()-q[n].length,q[n][l]=0<=w?v.c(w):0}for(l=f=0;l<b.length;l+=1)f+=b[l].o;f=Array(f);for(l=u=0;l<k;l+=1)for(n=0;n<b.length;n+=1)l<p[n].length&&(f[u]=p[n][l],u+=1);for(l=0;l<m;l+=1)for(n=0;n<b.length;n+=1)l<q[n].length&&(f[u]=q[n][l],u+=1);g=f}b=g;f=
-1;k=d-1;m=7;p=0;a=y.F(a);for(q=d-1;0<q;q-=2)for(6==q&&--q;;){for(n=0;2>n;n+=1)null==r[k][q-n]&&(l=!1,p<b.length&&(l=1==(b[p]>>>m&1)),a(k,q-n)&&(l=!l),r[k][q-n]=l,--m,-1==m&&(p+=1,m=7));k+=f;if(0>k||d<=k){k-=f;f=-f;break}}}var h=A[a],r=null,d=0,g=null,x=[],u={u:function(b){b=w(b);x.push(b);g=null},a:function(b,a){if(0>b||d<=b||0>a||d<=a)throw Error(b+","+a);return r[b][a]},h:function(){return d},J:function(){for(var a=0,h=0,c=0;8>c;c+=1){b(!0,c);var d=y.D(u);if(0==c||a>d)a=d,h=c}b(!1,h)}};return u}
function z(c,a){if("undefined"==typeof c.length)throw Error(c.length+"/"+a);var e=function(){for(var b=0;b<c.length&&0==c[b];)b+=1;for(var r=Array(c.length-b+a),d=0;d<c.length-b;d+=1)r[d]=c[d+b];return r}(),b={c:function(b){return e[b]},b:function(){return e.length},multiply:function(a){for(var h=Array(b.b()+a.b()-1),c=0;c<b.b();c+=1)for(var g=0;g<a.b();g+=1)h[c+g]^=v.i(v.g(b.c(c))+v.g(a.c(g)));return z(h,0)},l:function(a){if(0>b.b()-a.b())return b;for(var c=v.g(b.c(0))-v.g(a.c(0)),h=Array(b.b()),
g=0;g<b.b();g+=1)h[g]=b.c(g);for(g=0;g<a.b();g+=1)h[g]^=v.i(v.g(a.c(g))+c);return z(h,0).l(a)}};return b}C.s=function(c){for(var a=[],e=0;e<c.length;e++){var b=c.charCodeAt(e);128>b?a.push(b):2048>b?a.push(192|b>>6,128|b&63):55296>b||57344<=b?a.push(224|b>>12,128|b>>6&63,128|b&63):(e++,b=65536+((b&1023)<<10|c.charCodeAt(e)&1023),a.push(240|b>>18,128|b>>12&63,128|b>>6&63,128|b&63))}return a};var A={L:1,M:0,Q:3,H:2},y=function(){function c(b){for(var a=0;0!=b;)a+=1,b>>>=1;return a}var a=[[],[6,18],
[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],
[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],e={w:function(b){for(var a=b<<10;0<=c(a)-c(1335);)a^=1335<<c(a)-c(1335);return(b<<10|a)^21522},A:function(b){for(var a=b<<12;0<=c(a)-c(7973);)a^=7973<<c(a)-c(7973);return b<<12|a},G:function(b){return a[b-1]},F:function(b){switch(b){case 0:return function(b,a){return 0==(b+a)%2};case 1:return function(b){return 0==b%2};case 2:return function(b,a){return 0==a%3};case 3:return function(b,a){return 0==
(b+a)%3};case 4:return function(b,a){return 0==(Math.floor(b/2)+Math.floor(a/3))%2};case 5:return function(b,a){return 0==b*a%2+b*a%3};case 6:return function(b,a){return 0==(b*a%2+b*a%3)%2};case 7:return function(b,a){return 0==(b*a%3+(b+a)%2)%2};default:throw Error("bad maskPattern:"+b);}},C:function(b){for(var a=z([1],0),c=0;c<b;c+=1)a=a.multiply(z([1,v.i(c)],0));return a},f:function(b,a){if(4!=b||1>a||40<a)throw Error("mode: "+b+"; type: "+a);return 10>a?8:16},D:function(b){for(var a=b.h(),c=0,
d=0;d<a;d+=1)for(var g=0;g<a;g+=1){for(var e=0,t=b.a(d,g),p=-1;1>=p;p+=1)if(!(0>d+p||a<=d+p))for(var q=-1;1>=q;q+=1)0>g+q||a<=g+q||(0!=p||0!=q)&&t==b.a(d+p,g+q)&&(e+=1);5<e&&(c+=3+e-5)}for(d=0;d<a-1;d+=1)for(g=0;g<a-1;g+=1)if(e=0,b.a(d,g)&&(e+=1),b.a(d+1,g)&&(e+=1),b.a(d,g+1)&&(e+=1),b.a(d+1,g+1)&&(e+=1),0==e||4==e)c+=3;for(d=0;d<a;d+=1)for(g=0;g<a-6;g+=1)b.a(d,g)&&!b.a(d,g+1)&&b.a(d,g+2)&&b.a(d,g+3)&&b.a(d,g+4)&&!b.a(d,g+5)&&b.a(d,g+6)&&(c+=40);for(g=0;g<a;g+=1)for(d=0;d<a-6;d+=1)b.a(d,g)&&!b.a(d+
1,g)&&b.a(d+2,g)&&b.a(d+3,g)&&b.a(d+4,g)&&!b.a(d+5,g)&&b.a(d+6,g)&&(c+=40);for(g=e=0;g<a;g+=1)for(d=0;d<a;d+=1)b.a(d,g)&&(e+=1);return c+=Math.abs(100*e/a/a-50)/5*10}};return e}(),v=function(){for(var c=Array(256),a=Array(256),e=0;8>e;e+=1)c[e]=1<<e;for(e=8;256>e;e+=1)c[e]=c[e-4]^c[e-5]^c[e-6]^c[e-8];for(e=0;255>e;e+=1)a[c[e]]=e;return{g:function(b){if(1>b)throw Error("glog("+b+")");return a[b]},i:function(b){for(;0>b;)b+=255;for(;256<=b;)b-=255;return c[b]}}}(),t=function(){function c(b,c){switch(c){case A.L:return a[4*
(b-1)];case A.M:return a[4*(b-1)+1];case A.Q:return a[4*(b-1)+2];case A.H:return a[4*(b-1)+3]}}var a=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,
2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12,7,37,13],[5,122,98,1,123,99],[7,73,
45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,
151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],
[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],
[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],e={I:function(b,a){var e=c(b,a);if("undefined"==
typeof e)throw Error("bad rs block @ typeNumber:"+b+"/errorCorrectLevel:"+a);b=e.length/3;a=[];for(var d=0;d<b;d+=1)for(var g=e[3*d],h=e[3*d+1],t=e[3*d+2],p=0;p<g;p+=1){var q=t,f={};f.o=h;f.j=q;a.push(f)}return a}};return e}();return C}());
/* harmony default export */ var qr_creator_es6_min = (QrCreator);
//# sourceMappingURL=qr-creator.min.js.map

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--13-1!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/QrCode.vue?vue&type=script&lang=ts&















/**
 * **Nimiq QR Code Component**
 *
 * Props:
 *
 * **data** {string} The data to render
 *
 * **errorCorrection** {'L', 'M', 'H', 'Q'} [optional, default: 'M'] Error correction level according to QR specs
 *
 * **radius** {number} [optional, default .5] Roundness of QR code modules. Recommended value: .5
 *
 * **fill** {string|LinearGradient|RadialGradient} [optional, default '#0582ca' (nimiq-light-blue)] Fill of QR code
 *
 * **background** {string|null} [optional, default null] Background color of QR code. null means transparent.
 *
 * **size** {number} [optional, default 128] Width and height of QR code
 *
 * The QR encoder lib itself is lazy loaded as a webpack chunk when the data is set. If you want to use the QrCode
 * component in your project, you should copy the chunk from the dist folder over to your project.
 */

var QrCodevue_type_script_lang_ts_QrCode =
/*#__PURE__*/
function (_Vue) {
  _inherits(QrCode, _Vue);

  function QrCode() {
    _classCallCheck(this, QrCode);

    return _possibleConstructorReturn(this, _getPrototypeOf(QrCode).apply(this, arguments));
  }

  _createClass(QrCode, [{
    key: "toDataUrl",
    value: function () {
      var _toDataUrl = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        var type,
            _args = arguments;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                type = _args.length > 0 && _args[0] !== undefined ? _args[0] : 'image/png';

                if (this.data) {
                  _context.next = 3;
                  break;
                }

                return _context.abrupt("return", 'data:,');

              case 3:
                _context.next = 5;
                return external_vue_property_decorator_["Vue"].nextTick();

              case 5:
                return _context.abrupt("return", this.$el.toDataURL(type));

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function toDataUrl() {
        return _toDataUrl.apply(this, arguments);
      }

      return toDataUrl;
    }()
  }, {
    key: "_updateQrCode",
    value: function () {
      var _updateQrCode2 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2() {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (this.data) {
                  _context2.next = 2;
                  break;
                }

                return _context2.abrupt("return");

              case 2:
                _context2.next = 4;
                return external_vue_property_decorator_["Vue"].nextTick();

              case 4:
                // Make sure the canvas is in the DOM (it depends on !!data)
                qr_creator_es6_min.render({
                  text: this.data,
                  radius: this.radius,
                  ecLevel: this.errorCorrection,
                  fill: this.fill,
                  background: this.background,
                  size: this.size
                }, this.$el);

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function _updateQrCode() {
        return _updateQrCode2.apply(this, arguments);
      }

      return _updateQrCode;
    }()
  }]);

  return QrCode;
}(external_vue_property_decorator_["Vue"]);

__decorate([Object(external_vue_property_decorator_["Prop"])(String)], QrCodevue_type_script_lang_ts_QrCode.prototype, "data", void 0);

__decorate([Object(external_vue_property_decorator_["Prop"])({
  type: String,
  default: 'M',
  validator: function validator(errorCorrectionLevel) {
    return ['L', 'M', 'H', 'Q'].indexOf(errorCorrectionLevel) !== -1;
  }
})], QrCodevue_type_script_lang_ts_QrCode.prototype, "errorCorrection", void 0);

__decorate([Object(external_vue_property_decorator_["Prop"])({
  type: Number,
  default: .5,
  validator: function validator(radius) {
    return 0 <= radius && radius <= .5;
  }
})], QrCodevue_type_script_lang_ts_QrCode.prototype, "radius", void 0);

__decorate([Object(external_vue_property_decorator_["Prop"])({
  // default equivalent to nimiq-light-blue-bg
  default: function _default() {
    return {
      type: 'radial-gradient',
      // circle centered in bottom right corner with radius of the size of qr code diagonal
      position: [1, 1, 0, 1, 1, Math.sqrt(2)],
      colorStops: [[0, '#265DD7'], [1, '#0582CA']]
    };
  },
  validator: function validator(fill) {
    var isValidColor = function isValidColor(c) {
      return typeof c === 'string' && /^#([0-9a-f]{6}|[0-9a-f]{8})$/i.test(c);
    };

    if (isValidColor(fill)) return true;
    var isValidGradient = (fill.type === 'linear-gradient' && fill.position.length === 4 || fill.type === 'radial-gradient' && fill.position.length === 6) && fill.position.every(function (coordinate) {
      return typeof coordinate === 'number';
    });
    if (!isValidGradient) return false;
    var hasValidGradientStops = fill.colorStops.length >= 2 && fill.colorStops.every(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          offset = _ref2[0],
          color = _ref2[1];

      return typeof offset === 'number' && isValidColor(color);
    });
    return hasValidGradientStops;
  }
})], QrCodevue_type_script_lang_ts_QrCode.prototype, "fill", void 0);

__decorate([Object(external_vue_property_decorator_["Prop"])({
  default: null,
  validator: function validator(background) {
    return background === null || /^#([0-9a-f]{6}|[0-9a-f]{8})$/i.test(background);
  }
})], QrCodevue_type_script_lang_ts_QrCode.prototype, "background", void 0);

__decorate([Object(external_vue_property_decorator_["Prop"])({
  type: Number,
  default: 240,
  validator: function validator(size) {
    return size > 0;
  }
})], QrCodevue_type_script_lang_ts_QrCode.prototype, "size", void 0);

__decorate([Object(external_vue_property_decorator_["Watch"])('data', {
  immediate: true
}), Object(external_vue_property_decorator_["Watch"])('errorCorrection'), Object(external_vue_property_decorator_["Watch"])('radius'), Object(external_vue_property_decorator_["Watch"])('fill'), Object(external_vue_property_decorator_["Watch"])('background'), Object(external_vue_property_decorator_["Watch"])('size')], QrCodevue_type_script_lang_ts_QrCode.prototype, "_updateQrCode", null);

QrCodevue_type_script_lang_ts_QrCode = __decorate([external_vue_property_decorator_["Component"]], QrCodevue_type_script_lang_ts_QrCode);
/* harmony default export */ var QrCodevue_type_script_lang_ts_ = (QrCodevue_type_script_lang_ts_QrCode);
// CONCATENATED MODULE: ./src/components/QrCode.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_QrCodevue_type_script_lang_ts_ = (QrCodevue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./src/components/QrCode.vue





/* normalize component */

var QrCode_component = normalizeComponent(
  components_QrCodevue_type_script_lang_ts_,
  QrCodevue_type_template_id_15576f68_render,
  QrCodevue_type_template_id_15576f68_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var components_QrCode = (QrCode_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0d243f96-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/QrScanner.vue?vue&type=template&id=0f31d4dc&scoped=true&
var QrScannervue_type_template_id_0f31d4dc_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"qr-scanner nq-blue-bg"},[_c('video',{ref:"video",attrs:{"muted":"","autoplay":"","playsinline":"","width":"600","height":"600"},domProps:{"muted":true}}),_c('div',{ref:"overlay",staticClass:"overlay",class:{ inactive: _vm.cameraAccessFailed }},[_vm._t("default",[_c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 238 238"}},[_c('path',{attrs:{"fill":"none","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"4","d":"M31.3 2H10a8 8 0 0 0-8 8v21.3M206.8 2H228a8 8 0 0 1 8 8v21.3m0 175.4V228a8 8 0 0 1-8 8h-21.3m-175.4 0H10a8 8 0 0 1-8-8v-21.3"}})])])],2),_c('button',{staticClass:"nq-button-s inverse cancel-button",on:{"click":_vm._cancel}},[_vm._v(_vm._s(_vm.$t('Cancel')))]),_c('transition',{attrs:{"name":"fade"}},[(_vm.cameraAccessFailed)?_c('div',{staticClass:"camera-access-failed"},[(!_vm.hasCamera)?_c('div',{staticClass:"camera-access-failed-warning"},[_vm._v(" "+_vm._s(_vm.$t('Your device does not have an accessible camera.'))+" ")]):_c('div',[_c('div',{staticClass:"camera-access-failed-warning"},[_vm._v(" "+_vm._s(_vm.$t('Unblock the camera for this website to scan QR codes.'))+" ")]),(_vm.isMobileOrTablet)?_c('div',[(_vm.browser === 'chrome')?_c('div',[_c('I18n',{staticClass:"access-denied-instructions",attrs:{"path":"Click on {icon} and go to\\nSettings > Site Settings > Camera","tag":"div"},scopedSlots:_vm._u([{key:"icon",fn:function(){return [_c('span',{staticClass:"browser-menu-icon"})]},proxy:true}],null,false,1223065533)}),_c('div',{staticClass:"browser-menu-arrow"})],1):_c('div',{staticClass:"access-denied-instructions"},[_vm._v(" "+_vm._s(_vm.$t('Grant camera access when asked.'))+" ")])]):_c('div',{staticClass:"access-denied-instructions"},[(_vm.browser === 'safari')?_c('I18n',{attrs:{"path":"Click on {safari} and go to\\nSettings for this Website > Camera","tag":"div"},scopedSlots:_vm._u([{key:"safari",fn:function(){return [_c('b',[_vm._v("Safari")])]},proxy:true}],null,false,687307496)}):_c('I18n',{attrs:{"path":"Click on {icon} in the URL bar.","tag":"div"},scopedSlots:_vm._u([{key:"icon",fn:function(){return [(_vm.browser === 'chrome')?_c('span',{staticClass:"camera-icon-chrome"}):(_vm.browser === 'firefox')?_c('span',{staticClass:"camera-icon-firefox"}):_c('span',[_vm._v(_vm._s(_vm.$t('the camera icon')))])]},proxy:true}],null,false,2903711098)})],1)])]):_vm._e()])],1)}
var QrScannervue_type_template_id_0f31d4dc_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/QrScanner.vue?vue&type=template&id=0f31d4dc&scoped=true&

// CONCATENATED MODULE: ./node_modules/qr-scanner/qr-scanner.min.js
class qr_scanner_min_e{static hasCamera(){return navigator.mediaDevices.enumerateDevices().then((a)=>a.some((a)=>"videoinput"===a.kind)).catch(()=>!1)}constructor(a,c,b=qr_scanner_min_e.DEFAULT_CANVAS_SIZE){this.$video=a;this.$canvas=document.createElement("canvas");this._onDecode=c;this._paused=this._active=!1;this.$canvas.width=b;this.$canvas.height=b;this._sourceRect={x:0,y:0,width:b,height:b};this._onCanPlay=this._onCanPlay.bind(this);this._onPlay=this._onPlay.bind(this);this._onVisibilityChange=this._onVisibilityChange.bind(this);
this.$video.addEventListener("canplay",this._onCanPlay);this.$video.addEventListener("play",this._onPlay);document.addEventListener("visibilitychange",this._onVisibilityChange);this._qrWorker=new Worker(qr_scanner_min_e.WORKER_PATH)}destroy(){this.$video.removeEventListener("canplay",this._onCanPlay);this.$video.removeEventListener("play",this._onPlay);document.removeEventListener("visibilitychange",this._onVisibilityChange);this.stop();this._qrWorker.postMessage({type:"close"})}start(){if(this._active&&!this._paused)return Promise.resolve();
"https:"!==window.location.protocol&&console.warn("The camera stream is only accessible if the page is transferred via https.");this._active=!0;this._paused=!1;if(document.hidden)return Promise.resolve();clearTimeout(this._offTimeout);this._offTimeout=null;if(this.$video.srcObject)return this.$video.play(),Promise.resolve();let a="environment";return this._getCameraStream("environment",!0).catch(()=>{a="user";return this._getCameraStream()}).then((c)=>{this.$video.srcObject=c;this._setVideoMirror(a)}).catch((a)=>
{this._active=!1;throw a;})}stop(){this.pause();this._active=!1}pause(){this._paused=!0;this._active&&(this.$video.pause(),this._offTimeout||(this._offTimeout=setTimeout(()=>{let a=this.$video.srcObject&&this.$video.srcObject.getTracks()[0];a&&(a.stop(),this._offTimeout=this.$video.srcObject=null)},300)))}static scanImage(a,c=null,b=null,d=null,f=!1,g=!1){let h=!1,l=new Promise((l,g)=>{b||(b=new Worker(qr_scanner_min_e.WORKER_PATH),h=!0,b.postMessage({type:"inversionMode",data:"both"}));let n,m,k;m=(a)=>{"qrResult"===
a.data.type&&(b.removeEventListener("message",m),b.removeEventListener("error",k),clearTimeout(n),null!==a.data.data?l(a.data.data):g("QR code not found."))};k=(a)=>{b.removeEventListener("message",m);b.removeEventListener("error",k);clearTimeout(n);g("Scanner error: "+(a?a.message||a:"Unknown Error"))};b.addEventListener("message",m);b.addEventListener("error",k);n=setTimeout(()=>k("timeout"),3E3);qr_scanner_min_e._loadImage(a).then((a)=>{a=qr_scanner_min_e._getImageData(a,c,d,f);b.postMessage({type:"decode",data:a},[a.data.buffer])}).catch(k)});
c&&g&&(l=l.catch(()=>qr_scanner_min_e.scanImage(a,null,b,d,f)));return l=l.finally(()=>{h&&b.postMessage({type:"close"})})}setGrayscaleWeights(a,c,b,d=!0){this._qrWorker.postMessage({type:"grayscaleWeights",data:{red:a,green:c,blue:b,useIntegerApproximation:d}})}setInversionMode(a){this._qrWorker.postMessage({type:"inversionMode",data:a})}_onCanPlay(){this._updateSourceRect();this.$video.play()}_onPlay(){this._updateSourceRect();this._scanFrame()}_onVisibilityChange(){document.hidden?this.pause():this._active&&
this.start()}_updateSourceRect(){let a=Math.round(2/3*Math.min(this.$video.videoWidth,this.$video.videoHeight));this._sourceRect.width=this._sourceRect.height=a;this._sourceRect.x=(this.$video.videoWidth-a)/2;this._sourceRect.y=(this.$video.videoHeight-a)/2}_scanFrame(){if(!this._active||this.$video.paused||this.$video.ended)return!1;requestAnimationFrame(()=>{qr_scanner_min_e.scanImage(this.$video,this._sourceRect,this._qrWorker,this.$canvas,!0).then(this._onDecode,(a)=>{this._active&&"QR code not found."!==a&&
console.error(a)}).then(()=>this._scanFrame())})}_getCameraStream(a,c=!1){let b=[{width:{min:1024}},{width:{min:768}},{}];a&&(c&&(a={exact:a}),b.forEach((b)=>b.facingMode=a));return this._getMatchingCameraStream(b)}_getMatchingCameraStream(a){return 0===a.length?Promise.reject("Camera not found."):navigator.mediaDevices.getUserMedia({video:a.shift()}).catch(()=>this._getMatchingCameraStream(a))}_setVideoMirror(a){this.$video.style.transform="scaleX("+("user"===a?-1:1)+")"}static _getImageData(a,c=
null,b=null,d=!1){b=b||document.createElement("canvas");let f=c&&c.x?c.x:0,g=c&&c.y?c.y:0,h=c&&c.width?c.width:a.width||a.videoWidth;c=c&&c.height?c.height:a.height||a.videoHeight;d||b.width===h&&b.height===c||(b.width=h,b.height=c);d=b.getContext("2d",{alpha:!1});d.imageSmoothingEnabled=!1;d.drawImage(a,f,g,h,c,0,0,b.width,b.height);return d.getImageData(0,0,b.width,b.height)}static _loadImage(a){if(a instanceof HTMLCanvasElement||a instanceof HTMLVideoElement||window.ImageBitmap&&a instanceof window.ImageBitmap||
window.OffscreenCanvas&&a instanceof window.OffscreenCanvas)return Promise.resolve(a);if(a instanceof Image)return qr_scanner_min_e._awaitImageLoad(a).then(()=>a);if(a instanceof File||a instanceof URL||"string"===typeof a){let c=new Image;c.src=a instanceof File?URL.createObjectURL(a):a;return qr_scanner_min_e._awaitImageLoad(c).then(()=>{a instanceof File&&URL.revokeObjectURL(c.src);return c})}return Promise.reject("Unsupported image type.")}static _awaitImageLoad(a){return new Promise((c,b)=>{if(a.complete&&0!==a.naturalWidth)c();
else{let d,f;d=()=>{a.removeEventListener("load",d);a.removeEventListener("error",f);c()};f=()=>{a.removeEventListener("load",d);a.removeEventListener("error",f);b("Image load error")};a.addEventListener("load",d);a.addEventListener("error",f)}})}}qr_scanner_min_e.DEFAULT_CANVAS_SIZE=400;qr_scanner_min_e.WORKER_PATH="qr-scanner-worker.min.js";/* harmony default export */ var qr_scanner_min = (qr_scanner_min_e);
//# sourceMappingURL=qr-scanner.min.js.map

// CONCATENATED MODULE: ./node_modules/@nimiq/utils/dist/module/BrowserDetection.js
class BrowserDetection {
    static getBrowserInfo() {
        return {
            browser: BrowserDetection.detectBrowser(),
            version: BrowserDetection.detectVersion(),
            isMobile: BrowserDetection.isMobile(),
        };
    }
    /* eslint-disable max-len */
    // Also includes tablets.
    // Inspired by:
    // - https://stackoverflow.com/a/13819253
    // - https://developer.mozilla.org/en-US/docs/Web/HTTP/Browser_detection_using_the_user_agent#Mobile_Tablet_or_Desktop
    // - http://detectmobilebrowsers.com/about (tablets)
    /* eslint-enable max-len */
    static isMobile() {
        return /i?Phone|iP(ad|od)|Android|BlackBerry|Opera Mini|WPDesktop|Mobi(le)?|Silk/i.test(navigator.userAgent);
    }
    /* eslint-disable max-len */
    // Browser tests inspired by:
    // - https://developer.mozilla.org/en-US/docs/Web/HTTP/Browser_detection_using_the_user_agent#Browser_Name
    // - https://stackoverflow.com/a/26358856 (order is important)
    // Note that also this approach is very interesting: https://stackoverflow.com/a/40246491
    //
    // The following page is a great overview of example user agent strings:
    // http://www.useragentstring.com/pages/useragentstring.php?name=All
    // Example user agents:
    // - Edge: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML like Gecko) Chrome/51.0.2704.79 Safari/537.36 Edge/14.14931
    // - Opera: Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.73 Safari/537.36 OPR/34.0.2036.42
    // - Firefox: Mozilla/5.0 (Windows NT 6.1; WOW64; rv:64.0) Gecko/20100101 Firefox/64.0
    // - Chrome: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.77 Safari/537.36
    // - Safari: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_3) AppleWebKit/537.75.14 (KHTML, like Gecko) Version/7.0.3 Safari/7046A194A
    // - Safari iPhone: Mozilla/5.0 (iPhone; CPU iPhone OS 11_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/11.0 Mobile/15E148 Safari/604.1
    // - Safari iPad: Mozilla/5.0 (iPad; CPU OS 11_2_2 like Mac OS X) AppleWebKit/604.4.7 (KHTML, like Gecko) Version/11.0 Mobile/15C202 Safari/604.1
    // - Brave: is indistinguishable from Chrome user agents
    /* eslint-enable max-len */
    static detectBrowser() {
        if (BrowserDetection._detectedBrowser) {
            return BrowserDetection._detectedBrowser;
        }
        // note that the order is important as many browsers include the names of others in the ua.
        const ua = navigator.userAgent;
        if (/Edge\//i.test(ua)) {
            BrowserDetection._detectedBrowser = BrowserDetection.Browser.EDGE;
        }
        else if (/(Opera|OPR)\//i.test(ua)) {
            BrowserDetection._detectedBrowser = BrowserDetection.Browser.OPERA;
        }
        else if (/Firefox\//i.test(ua)) {
            BrowserDetection._detectedBrowser = BrowserDetection.Browser.FIREFOX;
        }
        else if (/Chrome\//i.test(ua)) {
            // Note that Brave is indistinguishable from Chrome by user agent. The additional check is taken from
            // https://stackoverflow.com/a/53799770. Unfortunately this distinction is not possible on mobile.
            BrowserDetection._detectedBrowser = (navigator.plugins.length === 0
                && navigator.mimeTypes.length === 0
                && !BrowserDetection.isMobile())
                ? BrowserDetection.Browser.BRAVE
                : BrowserDetection.Browser.CHROME;
        }
        else if (/^((?!chrome|android).)*safari/i.test(ua)) {
            // see https://stackoverflow.com/a/23522755
            // Note that Chrome iOS is also detected as Safari, see comments in stack overflow
            BrowserDetection._detectedBrowser = BrowserDetection.Browser.SAFARI;
        }
        else {
            BrowserDetection._detectedBrowser = BrowserDetection.Browser.UNKNOWN;
        }
        return BrowserDetection._detectedBrowser;
    }
    static detectVersion() {
        if (typeof BrowserDetection._detectedVersion !== 'undefined') {
            return BrowserDetection._detectedVersion;
        }
        let regex;
        switch (BrowserDetection.detectBrowser()) {
            case BrowserDetection.Browser.EDGE:
                regex = /Edge\/(\S+)/i;
                break;
            case BrowserDetection.Browser.OPERA:
                regex = /(Opera|OPR)\/(\S+)/i;
                break;
            case BrowserDetection.Browser.FIREFOX:
                regex = /Firefox\/(\S+)/i;
                break;
            case BrowserDetection.Browser.CHROME:
                regex = /Chrome\/(\S+)/i;
                break;
            case BrowserDetection.Browser.SAFARI:
                regex = /(iP(hone|ad|od).*?OS |Version\/)(\S+)/i;
                break;
            case BrowserDetection.Browser.BRAVE: // can't tell version for Brave
            default:
                BrowserDetection._detectedVersion = null;
                return null;
        }
        const match = navigator.userAgent.match(regex);
        if (!match) {
            BrowserDetection._detectedVersion = null;
            return null;
        }
        const versionString = match[match.length - 1].replace(/_/g, '.'); // replace _ in iOS version
        const versionParts = versionString.split('.');
        const parsedVersionParts = [];
        for (let i = 0; i < 4; ++i) {
            parsedVersionParts.push(parseInt(versionParts[i], 10) || 0);
        }
        const [major, minor, build, patch] = parsedVersionParts;
        BrowserDetection._detectedVersion = { versionString, major, minor, build, patch };
        return BrowserDetection._detectedVersion;
    }
    static isChrome() {
        return BrowserDetection.detectBrowser() === BrowserDetection.Browser.CHROME;
    }
    static isFirefox() {
        return BrowserDetection.detectBrowser() === BrowserDetection.Browser.FIREFOX;
    }
    static isOpera() {
        return BrowserDetection.detectBrowser() === BrowserDetection.Browser.OPERA;
    }
    static isEdge() {
        return BrowserDetection.detectBrowser() === BrowserDetection.Browser.EDGE;
    }
    static isSafari() {
        return BrowserDetection.detectBrowser() === BrowserDetection.Browser.SAFARI;
    }
    static isBrave() {
        return BrowserDetection.detectBrowser() === BrowserDetection.Browser.BRAVE;
    }
    static isIOS() {
        return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    }
    static isBadIOS() {
        const browserInfo = BrowserDetection.getBrowserInfo();
        // Check for iOS < 11 or 11.2 which has the WASM bug
        return browserInfo.browser === BrowserDetection.Browser.SAFARI
            && browserInfo.isMobile
            && browserInfo.version
            // eslint-disable-next-line no-mixed-operators
            && (browserInfo.version.major < 11 || browserInfo.version.major === 11 && browserInfo.version.minor === 2);
    }
    /**
     * Detect if the browser is running in Private Browsing mode
     *
     * @returns {Promise}
     */
    static isPrivateMode() {
        return new Promise((resolve) => {
            const on = () => resolve(true); // is in private mode
            const off = () => resolve(false); // not private mode
            // using browser detection by feature detection here, also see https://stackoverflow.com/a/9851769
            // These seem to be partly outdated though. Might want to consider using user agent based detection.
            const isSafari = () => /Constructor/.test(window.HTMLElement)
                || (window.safari
                    && window.safari.pushNotification
                    && window.safari.pushNotification.toString() === '[object SafariRemoteNotification]');
            // Chrome & Opera
            if (window.webkitRequestFileSystem) {
                window.webkitRequestFileSystem(0, 0, off, on);
                return;
            }
            // Firefox
            if (document.documentElement && 'MozAppearance' in document.documentElement.style) {
                // @ts-ignore
                const db = indexedDB.open(null);
                db.onerror = on;
                db.onsuccess = off;
                return;
            }
            // Safari
            if (isSafari()) {
                try {
                    window.openDatabase(null, null, null, null);
                }
                catch (_) {
                    on();
                    return;
                }
            }
            // IE10+ & Edge
            if (!window.indexedDB && (window.PointerEvent || window.MSPointerEvent)) {
                on();
                return;
            }
            // others
            off();
        });
    }
}
(function (BrowserDetection) {
    let Browser;
    (function (Browser) {
        Browser["CHROME"] = "chrome";
        Browser["FIREFOX"] = "firefox";
        Browser["OPERA"] = "opera";
        Browser["EDGE"] = "edge";
        Browser["SAFARI"] = "safari";
        Browser["BRAVE"] = "brave";
        Browser["UNKNOWN"] = "unknown";
    })(Browser = BrowserDetection.Browser || (BrowserDetection.Browser = {}));
})(BrowserDetection || (BrowserDetection = {}));
var BrowserDetection$1 = BrowserDetection;

/* harmony default export */ var module_BrowserDetection = (BrowserDetection$1);
//# sourceMappingURL=BrowserDetection.js.map

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.map.js
var es_array_map = __webpack_require__("d81d");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--13-1!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/i18n/I18n.vue?vue&type=script&lang=ts&














/**
 * Component for slot interpolation, similar to vue-i18n's interpolation component,
 * see https://kazupon.github.io/vue-i18n/guide/interpolation.html#slots-syntax-usage
 */

var I18nvue_type_script_lang_ts_I18n =
/*#__PURE__*/
function (_Vue) {
  _inherits(I18n, _Vue);

  function I18n() {
    _classCallCheck(this, I18n);

    return _possibleConstructorReturn(this, _getPrototypeOf(I18n).apply(this, arguments));
  }

  _createClass(I18n, [{
    key: "created",
    value: function created() {
      this.$forceUpdate = this.$forceUpdate.bind(this);
      this.$vnode.context.$on(i18n_I18nMixin.Events.LANGUAGE_READY, this.$forceUpdate);
    }
  }, {
    key: "beforeDestroy",
    value: function beforeDestroy() {
      this.$vnode.context.$off(i18n_I18nMixin.Events.LANGUAGE_READY, this.$forceUpdate);
    }
  }, {
    key: "render",
    value: function render(createElement) {
      var _this = this;

      if (!Object.keys(this.$slots).length) {
        throw new Error('I18n: the component must contain at least 1 template slot, otherwise simply use the $t function.');
      }

      var message = i18n_I18nMixin.$t(this.$vnode.context.$vnode.componentOptions.tag, this.path.replace(/\\n/g, '\n'));
      var children = message.split(/({\w+})/g).map(function (part) {
        var variableNameMatch = part.match(/^{(\w+)}$/);
        if (!variableNameMatch) return part; // plain text part or empty part

        return _this.$slots[variableNameMatch[1]] || part;
      });
      return createElement(this.tag, {}, children);
    }
  }]);

  return I18n;
}(external_vue_property_decorator_["Vue"]);

__decorate([Object(external_vue_property_decorator_["Prop"])({
  type: String,
  required: true
})], I18nvue_type_script_lang_ts_I18n.prototype, "path", void 0);

__decorate([Object(external_vue_property_decorator_["Prop"])({
  type: String,
  default: 'span'
})], I18nvue_type_script_lang_ts_I18n.prototype, "tag", void 0);

I18nvue_type_script_lang_ts_I18n = __decorate([external_vue_property_decorator_["Component"]], I18nvue_type_script_lang_ts_I18n);
/* harmony default export */ var I18nvue_type_script_lang_ts_ = (I18nvue_type_script_lang_ts_I18n);
// CONCATENATED MODULE: ./src/i18n/I18n.vue?vue&type=script&lang=ts&
 /* harmony default export */ var i18n_I18nvue_type_script_lang_ts_ = (I18nvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./src/i18n/I18n.vue
var I18n_render, I18n_staticRenderFns




/* normalize component */

var I18n_component = normalizeComponent(
  i18n_I18nvue_type_script_lang_ts_,
  I18n_render,
  I18n_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var i18n_I18n = (I18n_component.exports);
// EXTERNAL MODULE: ./node_modules/file-loader/dist/cjs.js?name=[name].[ext]!./node_modules/qr-scanner/qr-scanner-worker.min.js
var qr_scanner_worker_min = __webpack_require__("46f5");
var qr_scanner_worker_min_default = /*#__PURE__*/__webpack_require__.n(qr_scanner_worker_min);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--13-1!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/QrScanner.vue?vue&type=script&lang=ts&








// TODO could use IntersectionObserver api to start scanner when visible
var QrScanner_1;





 // Declare qr worker as asset using file-loader which copies the file to dist and binds the path to QrScannerWorker


qr_scanner_min.WORKER_PATH = qr_scanner_worker_min_default.a;

var QrScannervue_type_script_lang_ts_QrScanner = QrScanner_1 =
/*#__PURE__*/
function (_Mixins) {
  _inherits(QrScanner, _Mixins);

  function QrScanner() {
    var _this;

    _classCallCheck(this, QrScanner);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(QrScanner).apply(this, arguments));
    _this.cameraAccessFailed = false;
    _this.hasCamera = true;
    _this.isMobileOrTablet = module_BrowserDetection.isMobile();
    _this.browser = module_BrowserDetection.detectBrowser();
    _this._lastResultTime = 0;
    return _this;
  }

  _createClass(QrScanner, [{
    key: "mounted",
    value: function mounted() {
      var _this2 = this;

      this.repositionOverlay = this.repositionOverlay.bind(this);
      var $video = this.$refs.video;
      this._scanner = new qr_scanner_min($video, function (result) {
        return _this2._onResult(result);
      });
      $video.addEventListener('canplay', function () {
        return $video.classList.add('ready');
      });
      window.addEventListener('resize', this.repositionOverlay);
      qr_scanner_min.hasCamera().then(function (hasCamera) {
        return _this2.hasCamera = hasCamera;
      });

      if (this._isVisible()) {
        this.start();
        this.repositionOverlay();
      }
    }
  }, {
    key: "destroyed",
    value: function destroyed() {
      this.stop();

      this._scanner.destroy();

      window.removeEventListener('resize', this.repositionOverlay);
    }
  }, {
    key: "start",
    value: function () {
      var _start = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        var _this3 = this;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return this._scanner.start();

              case 3:
                this.cameraAccessFailed = false;

                if (this._cameraRetryTimer) {
                  window.clearInterval(this._cameraRetryTimer);
                  this._cameraRetryTimer = null;
                }

                _context.next = 12;
                break;

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](0);
                this.cameraAccessFailed = true;
                this.$emit("error"
                /* ERROR */
                , _context.t0);

                if (!this._cameraRetryTimer) {
                  this._cameraRetryTimer = window.setInterval(function () {
                    return _this3.start();
                  }, 3000);
                }

              case 12:
                return _context.abrupt("return", !this.cameraAccessFailed);

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 7]]);
      }));

      function start() {
        return _start.apply(this, arguments);
      }

      return start;
    }()
  }, {
    key: "stop",
    value: function stop() {
      this._scanner.stop();

      if (this._cameraRetryTimer) {
        window.clearInterval(this._cameraRetryTimer);
        this._cameraRetryTimer = null;
      }
    }
  }, {
    key: "setGrayscaleWeights",
    value: function setGrayscaleWeights(red, green, blue) {
      this._scanner.setGrayscaleWeights(red, green, blue);
    }
  }, {
    key: "setInversionMode",
    value: function setInversionMode(inversionMode) {
      this._scanner.setInversionMode(inversionMode);
    }
  }, {
    key: "repositionOverlay",
    value: function repositionOverlay() {
      var _this4 = this;

      requestAnimationFrame(function () {
        var scannerHeight = _this4.$el.offsetHeight;
        var scannerWidth = _this4.$el.offsetWidth;
        var smallerDimension = Math.min(scannerHeight, scannerWidth);
        if (smallerDimension === 0) return; // component not visible or destroyed

        var overlaySize = Math.ceil(2 / 3 * smallerDimension); // not always the accurate size of the sourceRect for QR detection in QrScannerLib (e.g. if video is
        // landscape and screen portrait) but looks nicer in the UI.

        var $qrOverlay = _this4.$refs.overlay;
        $qrOverlay.style.width = overlaySize + 'px';
        $qrOverlay.style.height = overlaySize + 'px';
        $qrOverlay.style.top = (scannerHeight - overlaySize) / 2 + 'px';
        $qrOverlay.style.left = (scannerWidth - overlaySize) / 2 + 'px';
      });
    }
  }, {
    key: "_isVisible",
    value: function _isVisible() {
      return this.$el.offsetWidth > 0;
    }
  }, {
    key: "_cancel",
    value: function _cancel() {
      this.$emit("cancel"
      /* CANCEL */
      );
    }
  }, {
    key: "_onResult",
    value: function _onResult(result) {
      if (result === this._lastResult && Date.now() - this._lastResultTime < this.reportFrequency || this.validate && !this.validate(result)) return;
      this._lastResult = result;
      this._lastResultTime = Date.now();
      this.$emit("result"
      /* RESULT */
      , result);
    }
  }]);

  return QrScanner;
}(Object(external_vue_property_decorator_["Mixins"])(i18n_I18nMixin));

__decorate([Object(external_vue_property_decorator_["Prop"])({
  type: Number,
  default: 7000
})], QrScannervue_type_script_lang_ts_QrScanner.prototype, "reportFrequency", void 0);

__decorate([Object(external_vue_property_decorator_["Prop"])(Function)], QrScannervue_type_script_lang_ts_QrScanner.prototype, "validate", void 0);

QrScannervue_type_script_lang_ts_QrScanner = QrScanner_1 = __decorate([Object(external_vue_property_decorator_["Component"])({
  name: 'QrScanner',
  components: {
    I18n: i18n_I18n
  }
})], QrScannervue_type_script_lang_ts_QrScanner);
/* harmony default export */ var QrScannervue_type_script_lang_ts_ = (QrScannervue_type_script_lang_ts_QrScanner);
// CONCATENATED MODULE: ./src/components/QrScanner.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_QrScannervue_type_script_lang_ts_ = (QrScannervue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./src/components/QrScanner.vue?vue&type=style&index=0&id=0f31d4dc&scoped=true&lang=css&
var QrScannervue_type_style_index_0_id_0f31d4dc_scoped_true_lang_css_ = __webpack_require__("4cbf");

// CONCATENATED MODULE: ./src/components/QrScanner.vue






/* normalize component */

var QrScanner_component = normalizeComponent(
  components_QrScannervue_type_script_lang_ts_,
  QrScannervue_type_template_id_0f31d4dc_scoped_true_render,
  QrScannervue_type_template_id_0f31d4dc_scoped_true_staticRenderFns,
  false,
  null,
  "0f31d4dc",
  null
  
)

/* harmony default export */ var components_QrScanner = (QrScanner_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0d243f96-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/SelectBar.vue?vue&type=template&id=632b1400&scoped=true&
var SelectBarvue_type_template_id_632b1400_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"select-bar"},_vm._l((_vm.options),function(option){return _c('div',{key:option.value},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.selectedOption),expression:"selectedOption"}],attrs:{"type":"radio","name":_vm.name,"id":option.value},domProps:{"value":option,"checked":_vm._q(_vm.selectedOption,option)},on:{"change":function($event){_vm.selectedOption=option}}}),_c('label',{staticClass:"nq-label",class:_vm.getColor(option),attrs:{"for":option.value}},[_vm._v(_vm._s(option.text))])])}),0)}
var SelectBarvue_type_template_id_632b1400_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/SelectBar.vue?vue&type=template&id=632b1400&scoped=true&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.find.js
var es_array_find = __webpack_require__("7db0");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--13-1!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/SelectBar.vue?vue&type=script&lang=ts&










var SelectBarvue_type_script_lang_ts_SelectBar =
/*#__PURE__*/
function (_Vue) {
  _inherits(SelectBar, _Vue);

  function SelectBar() {
    var _this;

    _classCallCheck(this, SelectBar);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SelectBar).apply(this, arguments));
    _this.selectedOption = null;
    return _this;
  }

  _createClass(SelectBar, [{
    key: "created",
    value: function created() {
      var _this2 = this;

      this.options = this.options.sort(function (a, b) {
        return a.index - b.index;
      });
      this.selectedOption = this.selectedValue ? this.options.find(function (val) {
        return val.value === _this2.selectedValue;
      }) : this.options[0];
    }
  }, {
    key: "getColor",
    value: function getColor(option) {
      if (option.index <= this.selectedOption.index) {
        return this.selectedOption.color;
      } else return 'nq-highlight-bg';
    }
  }, {
    key: "onChanged",
    value: function onChanged(option) {
      this.$emit('changed', option.value);
    }
  }, {
    key: "value",
    get: function get() {
      return this.selectedOption.value;
    }
  }]);

  return SelectBar;
}(external_vue_property_decorator_["Vue"]);

__decorate([Object(external_vue_property_decorator_["Prop"])(String)], SelectBarvue_type_script_lang_ts_SelectBar.prototype, "name", void 0);

__decorate([Object(external_vue_property_decorator_["Prop"])(Array)], SelectBarvue_type_script_lang_ts_SelectBar.prototype, "options", void 0);

__decorate([Object(external_vue_property_decorator_["Prop"])(Number)], SelectBarvue_type_script_lang_ts_SelectBar.prototype, "selectedValue", void 0);

__decorate([Object(external_vue_property_decorator_["Watch"])('selectedOption')], SelectBarvue_type_script_lang_ts_SelectBar.prototype, "onChanged", null);

SelectBarvue_type_script_lang_ts_SelectBar = __decorate([external_vue_property_decorator_["Component"]], SelectBarvue_type_script_lang_ts_SelectBar);
/* harmony default export */ var SelectBarvue_type_script_lang_ts_ = (SelectBarvue_type_script_lang_ts_SelectBar);
// CONCATENATED MODULE: ./src/components/SelectBar.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_SelectBarvue_type_script_lang_ts_ = (SelectBarvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./src/components/SelectBar.vue?vue&type=style&index=0&id=632b1400&scoped=true&lang=css&
var SelectBarvue_type_style_index_0_id_632b1400_scoped_true_lang_css_ = __webpack_require__("a908");

// CONCATENATED MODULE: ./src/components/SelectBar.vue






/* normalize component */

var SelectBar_component = normalizeComponent(
  components_SelectBarvue_type_script_lang_ts_,
  SelectBarvue_type_template_id_632b1400_scoped_true_render,
  SelectBarvue_type_template_id_632b1400_scoped_true_staticRenderFns,
  false,
  null,
  "632b1400",
  null
  
)

/* harmony default export */ var components_SelectBar = (SelectBar_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0d243f96-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/SmallPage.vue?vue&type=template&id=1d450cf2&scoped=true&
var SmallPagevue_type_template_id_1d450cf2_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"small-page nq-card"},[_vm._t("default")],2)}
var SmallPagevue_type_template_id_1d450cf2_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/SmallPage.vue?vue&type=template&id=1d450cf2&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--13-1!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/SmallPage.vue?vue&type=script&lang=ts&







var SmallPagevue_type_script_lang_ts_SmallPage =
/*#__PURE__*/
function (_Vue) {
  _inherits(SmallPage, _Vue);

  function SmallPage() {
    _classCallCheck(this, SmallPage);

    return _possibleConstructorReturn(this, _getPrototypeOf(SmallPage).apply(this, arguments));
  }

  return SmallPage;
}(external_vue_property_decorator_["Vue"]);

SmallPagevue_type_script_lang_ts_SmallPage = __decorate([external_vue_property_decorator_["Component"]], SmallPagevue_type_script_lang_ts_SmallPage);
/* harmony default export */ var SmallPagevue_type_script_lang_ts_ = (SmallPagevue_type_script_lang_ts_SmallPage);
// CONCATENATED MODULE: ./src/components/SmallPage.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_SmallPagevue_type_script_lang_ts_ = (SmallPagevue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./src/components/SmallPage.vue?vue&type=style&index=0&id=1d450cf2&scoped=true&lang=css&
var SmallPagevue_type_style_index_0_id_1d450cf2_scoped_true_lang_css_ = __webpack_require__("dce1");

// CONCATENATED MODULE: ./src/components/SmallPage.vue






/* normalize component */

var SmallPage_component = normalizeComponent(
  components_SmallPagevue_type_script_lang_ts_,
  SmallPagevue_type_template_id_1d450cf2_scoped_true_render,
  SmallPagevue_type_template_id_1d450cf2_scoped_true_staticRenderFns,
  false,
  null,
  "1d450cf2",
  null
  
)

/* harmony default export */ var components_SmallPage = (SmallPage_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0d243f96-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Tooltip.vue?vue&type=template&id=24f93900&scoped=true&
var Tooltipvue_type_template_id_24f93900_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',{staticClass:"tooltip",class:[_vm.verticalPosition, {
        shown: _vm.isShown,
        'transition-position': _vm.transitionPosition,
        'inverse-theme': _vm.theme === _vm.constructor.Themes.INVERSE,
    }],on:{"mouseenter":function($event){return _vm.mouseOver(true)},"mouseleave":function($event){return _vm.mouseOver(false)}}},[_c('a',{ref:"tooltipTrigger",staticClass:"trigger",attrs:{"href":"javascript:void(0);","tabindex":_vm.disabled ? -1 : 0},on:{"focus":function($event){$event.stopPropagation();return _vm.show()},"blur":function($event){$event.stopPropagation();return _vm.hide()},"click":function($event){return _vm.onClick()}}},[(!_vm.$slots.icon)?_vm._t("trigger",[_c('AlertTriangleIcon',{staticClass:"nq-orange"})]):_vm._e(),(_vm.$slots.icon && !_vm.$slots.trigger)?_vm._t("icon"):_vm._e()],2),_c('transition',{attrs:{"name":"transition-fade"}},[(_vm.isShown)?_c('div',{ref:"tooltipBox",staticClass:"tooltip-box",style:(_vm.tooltipBoxStyles)},[_vm._t("default")],2):_vm._e()])],1)}
var Tooltipvue_type_template_id_24f93900_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Tooltip.vue?vue&type=template&id=24f93900&scoped=true&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.entries.js
var es_object_entries = __webpack_require__("4fad");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.values.js
var es_object_values = __webpack_require__("07ac");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.filter.js
var es_array_filter = __webpack_require__("4de4");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.for-each.js
var es_array_for_each = __webpack_require__("41606");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptor.js
var es_object_get_own_property_descriptor = __webpack_require__("e439");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptors.js
var es_object_get_own_property_descriptors = __webpack_require__("dbb4");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__("159b");

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
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
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js









function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--13-1!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Tooltip.vue?vue&type=script&lang=ts&



















var Tooltip_1;




var Tooltipvue_type_script_lang_ts_Tooltip = Tooltip_1 =
/*#__PURE__*/
function (_Vue) {
  _inherits(Tooltip, _Vue);

  function Tooltip() {
    var _this;

    _classCallCheck(this, Tooltip);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Tooltip).apply(this, arguments));
    _this.verticalPosition = null;
    _this.tooltipToggled = false;
    _this.transitionPosition = false; // do not transition on show but on position updates while shown

    _this.mousedOver = false;
    _this.lastToggle = -1;
    _this.height = 0;
    _this.width = 0;
    _this.maxWidth = 0;
    _this.left = 0;
    _this.top = 0;
    return _this;
  }

  _createClass(Tooltip, [{
    key: "created",
    value: function created() {
      this.updatePosition = this.updatePosition.bind(this);
    }
  }, {
    key: "mounted",
    value: function mounted() {
      if ('icon' in this.$slots) {
        console.warn('Tooltip: Slot `icon` is deprecated and support will be removed in the future.' + ' Use slot `trigger` instead.');
      } // Manually trigger an update instead of using immediate watchers to avoid unnecessary initial double updates


      this.setContainer(this.effectiveContainer);
    }
  }, {
    key: "destroyed",
    value: function destroyed() {
      if (this.effectiveContainer && this.effectiveContainer.$el) {
        this.effectiveContainer.$el.removeEventListener('scroll', this.updatePosition);
      }
    }
  }, {
    key: "show",
    value: function show() {
      this.tooltipToggled = true;
    }
  }, {
    key: "hide",
    value: function hide() {
      var force = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      this.tooltipToggled = false;
      this.$refs.tooltipTrigger.blur();
      if (!force) return;
      this.mousedOver = false;
    }
  }, {
    key: "toggle",
    value: function toggle() {
      var force = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      if (this.tooltipToggled || this.mousedOver) {
        this.hide(force);
      } else {
        this.show();
      }
    }
  }, {
    key: "update",
    value: function () {
      var _update = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(newWatcherValue) {
        var _this2 = this;

        var container;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (this.isShown) {
                  _context.next = 6;
                  break;
                }

                this.transitionPosition = false; // when shown next time, render immediately at correct position

                if (newWatcherValue === false) {
                  this.lastToggle = Date.now();
                  this.$emit('hide');
                }

                return _context.abrupt("return");

              case 6:
                if (newWatcherValue === true) {
                  this.lastToggle = Date.now();
                  this.$emit('show');
                }

              case 7:
                if (this.$el) {
                  _context.next = 10;
                  break;
                }

                _context.next = 10;
                return new Promise(function (resolve) {
                  return _this2.$once('hook:mounted', resolve);
                });

              case 10:
                container = this.effectiveContainer;

                if (!container) {
                  _context.next = 19;
                  break;
                }

                if (!(!container.$el && container instanceof external_vue_property_decorator_["Vue"])) {
                  _context.next = 17;
                  break;
                }

                _context.next = 15;
                return new Promise(function (resolve) {
                  return container.$once('hook:mounted', resolve);
                });

              case 15:
                if (!(container !== this.effectiveContainer)) {
                  _context.next = 17;
                  break;
                }

                return _context.abrupt("return");

              case 17:
                _context.next = 19;
                return new Promise(function (resolve) {
                  return requestAnimationFrame(function () {
                    // avoid potential forced layouting / reflow by taking measurements within a requestAnimationFrame
                    // (see https://gist.github.com/paulirish/5d52fb081b3570c81e3a#appendix)
                    var leftMargin = _this2.getMargin(Tooltip_1.HorizontalPosition.LEFT);

                    var rightMargin = _this2.getMargin(Tooltip_1.HorizontalPosition.RIGHT);

                    _this2.maxWidth = container.$el.offsetWidth - leftMargin - rightMargin;
                    if (_this2.autoWidth) _this2.width = _this2.maxWidth;
                    resolve();
                  });
                });

              case 19:
                _context.next = 21;
                return external_vue_property_decorator_["Vue"].nextTick();

              case 21:
                if (!(!this.isShown || !('tooltipBox' in this.$refs && this.$refs.tooltipBox))) {
                  _context.next = 23;
                  break;
                }

                return _context.abrupt("return");

              case 23:
                // not visible anymore?
                // here we need the quick reflow to avoid that the visible tooltip gets rendered at the wrong position,
                // potentially causing scroll bars
                this.height = this.$refs.tooltipBox.offsetHeight;
                this.width = this.$refs.tooltipBox.offsetWidth;
                this.updatePosition(); // wait for updated position to be effective and rendered, then enable transitions

                _context.next = 28;
                return external_vue_property_decorator_["Vue"].nextTick();

              case 28:
                _context.next = 30;
                return new Promise(function (resolve) {
                  return requestAnimationFrame(resolve);
                });

              case 30:
                this.transitionPosition = true;

              case 31:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function update(_x) {
        return _update.apply(this, arguments);
      }

      return update;
    }()
  }, {
    key: "updatePosition",
    value: function updatePosition() {
      if (!this.isShown) return; // Note that in his method we do not need to use requestAnimationFrame to avoid reflows, as the method is
      // already called as a scroll event listener or manually in update after a reflow.
      // tslint:disable-next-line:prefer-const

      var _this$preferredPositi = this.preferredPosition.split(' '),
          _this$preferredPositi2 = _slicedToArray(_this$preferredPositi, 2),
          preferredVerticalPosition = _this$preferredPositi2[0],
          preferredHorizontalPosition = _this$preferredPositi2[1];

      preferredHorizontalPosition = preferredHorizontalPosition || Tooltip_1.HorizontalPosition.RIGHT;
      this.left = preferredHorizontalPosition === Tooltip_1.HorizontalPosition.RIGHT ? Math.round(this.$refs.tooltipTrigger.offsetWidth / 2 - 25) // offset by 25px according to designs
      : Math.round(this.$refs.tooltipTrigger.offsetWidth / 2 - this.width + 25);
      var container = this.effectiveContainer;

      if (container) {
        if (!container.$el) {
          // We don't wait here for the container to get mounted, as we expect it to already be mounted when this
          // private method is called and to do measurements immediately in the scroll event listener
          console.warn('Tooltip container does not seem to be mounted yet.');
          return;
        } // position tooltip such that it best fits container element


        var triggerBoundingRect = this.$refs.tooltipTrigger.getBoundingClientRect();
        var containerBoundingRect = container.$el.getBoundingClientRect();
        var topMargin = this.getMargin(Tooltip_1.VerticalPosition.TOP);
        var bottomMargin = this.getMargin(Tooltip_1.VerticalPosition.BOTTOM);
        var spaceNeeded = this.height + 16; // 16 for arrow, assuming same height on mobile for simplicity

        var fitsTop = triggerBoundingRect.top - containerBoundingRect.top - topMargin >= spaceNeeded;
        var fitsBottom = containerBoundingRect.bottom - triggerBoundingRect.bottom - bottomMargin >= spaceNeeded;

        if (preferredVerticalPosition === Tooltip_1.VerticalPosition.TOP && (fitsTop || !fitsBottom) || preferredVerticalPosition === Tooltip_1.VerticalPosition.BOTTOM && fitsTop && !fitsBottom) {
          this.verticalPosition = Tooltip_1.VerticalPosition.TOP;
        } else {
          this.verticalPosition = Tooltip_1.VerticalPosition.BOTTOM;
        } // constrain horizontal position


        var leftMargin = this.getMargin(Tooltip_1.HorizontalPosition.LEFT);
        var rightMargin = this.getMargin(Tooltip_1.HorizontalPosition.RIGHT); // left and right bound of container, expressed in trigger's coordinate system

        var leftBound = containerBoundingRect.left + leftMargin - triggerBoundingRect.left;
        var rightBound = containerBoundingRect.right - rightMargin - triggerBoundingRect.left;
        this.left = Math.max(leftBound, Math.min(rightBound - this.width, this.left));
      } else {
        this.verticalPosition = preferredVerticalPosition;
      }

      this.top = this.verticalPosition === Tooltip_1.VerticalPosition.BOTTOM ? this.$refs.tooltipTrigger.offsetHeight : -this.height;
    }
  }, {
    key: "setContainer",
    value: function () {
      var _setContainer = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(newContainer, oldContainer) {
        var _this3 = this;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (oldContainer && oldContainer.$el) {
                  oldContainer.$el.removeEventListener('scroll', this.updatePosition);
                }

                if (!newContainer) {
                  _context2.next = 9;
                  break;
                }

                if (!(!newContainer.$el && newContainer instanceof external_vue_property_decorator_["Vue"])) {
                  _context2.next = 7;
                  break;
                }

                _context2.next = 5;
                return new Promise(function (resolve) {
                  return newContainer.$once('hook:mounted', resolve);
                });

              case 5:
                if (!(newContainer !== this.effectiveContainer)) {
                  _context2.next = 7;
                  break;
                }

                return _context2.abrupt("return");

              case 7:
                _context2.next = 9;
                return new Promise(function (resolve) {
                  return requestAnimationFrame(function () {
                    if (newContainer.$el.scrollHeight !== newContainer.$el.offsetHeight) {
                      newContainer.$el.addEventListener('scroll', _this3.updatePosition);
                    }

                    resolve();
                  });
                });

              case 9:
                _context2.next = 11;
                return this.update();

              case 11:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function setContainer(_x2, _x3) {
        return _setContainer.apply(this, arguments);
      }

      return setContainer;
    }()
  }, {
    key: "getMargin",
    value: function getMargin(position) {
      if (this.margin && this.margin[position] !== undefined) return this.margin[position];
      var containerEl = this.effectiveContainer && this.effectiveContainer.$el ? this.effectiveContainer.$el : null;
      if (!containerEl) return 0;

      if ((position === Tooltip_1.VerticalPosition.TOP || position === Tooltip_1.VerticalPosition.BOTTOM) && containerEl.scrollHeight !== containerEl.offsetHeight) {
        // If container is scrollable, the padding scrolls with the content. Therefore we consider the whole
        // offsetHeight as valid area for the tooltip and return a margin of 0.
        return 0;
      }

      return parseInt(window.getComputedStyle(containerEl, null).getPropertyValue("padding-".concat(position)), 10);
    }
  }, {
    key: "mouseOver",
    value: function mouseOver(mouseOverTooltip) {
      var _this4 = this;

      if (!mouseOverTooltip) {
        // mouseleave
        this.mouseOverTimeout = window.setTimeout(function () {
          return _this4.mousedOver = false;
        }, 100);
      } else {
        // mouseenter
        window.clearTimeout(this.mouseOverTimeout);
        this.mousedOver = true;
      }
    }
  }, {
    key: "onClick",
    value: function onClick() {
      if (Date.now() - this.lastToggle < 200) return; // just toggled by mouseover or focus

      this.toggle(
      /* force */
      true);
      this.$emit('click');
    }
  }, {
    key: "isShown",
    get: function get() {
      return (this.tooltipToggled || this.mousedOver) && !this.disabled;
    }
  }, {
    key: "effectiveContainer",
    get: function get() {
      if (this.reference) {
        console.warn('Tooltip: Prop `reference` is deprecated and support will be removed in the future.' + ' Use prop `container` instead.');
      }

      return this.container || this.reference;
    }
  }, {
    key: "tooltipBoxStyles",
    get: function get() {
      // note that we let the browser calculate height automatically
      return _objectSpread2({}, this.styles, {
        top: this.top + 'px',
        left: this.left + 'px',
        width: this.effectiveContainer && this.autoWidth ? this.width + 'px' : (this.styles || {}).width,
        maxWidth: this.effectiveContainer ? this.maxWidth + 'px' : (this.styles || {}).maxWidth
      });
    }
  }]);

  return Tooltip;
}(external_vue_property_decorator_["Vue"]);

__decorate([Object(external_vue_property_decorator_["Prop"])(Object)], Tooltipvue_type_script_lang_ts_Tooltip.prototype, "container", void 0);

__decorate([Object(external_vue_property_decorator_["Prop"])(Boolean)], Tooltipvue_type_script_lang_ts_Tooltip.prototype, "disabled", void 0);

__decorate([Object(external_vue_property_decorator_["Prop"])({
  type: String,
  default: 'top right',
  validator: function validator(value) {
    if (typeof value !== 'string') return false;

    var _value$split = value.split(' '),
        _value$split2 = _slicedToArray(_value$split, 2),
        vertical = _value$split2[0],
        horizontal = _value$split2[1];

    return Object.values(Tooltip_1.VerticalPosition).includes(vertical) && (!horizontal || Object.values(Tooltip_1.HorizontalPosition).includes(horizontal));
  }
})], Tooltipvue_type_script_lang_ts_Tooltip.prototype, "preferredPosition", void 0);

__decorate([Object(external_vue_property_decorator_["Prop"])({
  type: Object,
  validator: function validator(value) {
    return _typeof(value) === 'object' && Object.entries(value).every(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          position = _ref2[0],
          margin = _ref2[1];

      return typeof margin === 'number' && (Object.values(Tooltip_1.VerticalPosition).includes(position) || Object.values(Tooltip_1.HorizontalPosition).includes(position));
    });
  }
})], Tooltipvue_type_script_lang_ts_Tooltip.prototype, "margin", void 0);

__decorate([Object(external_vue_property_decorator_["Prop"])({
  type: Boolean,
  default: false
})], Tooltipvue_type_script_lang_ts_Tooltip.prototype, "autoWidth", void 0);

__decorate([Object(external_vue_property_decorator_["Prop"])({
  type: String,
  default: 'normal',
  validator: function validator(value) {
    return Object.values(Tooltip_1.Themes).includes(value);
  }
})], Tooltipvue_type_script_lang_ts_Tooltip.prototype, "theme", void 0);

__decorate([Object(external_vue_property_decorator_["Prop"])(Object)], Tooltipvue_type_script_lang_ts_Tooltip.prototype, "styles", void 0);

__decorate([Object(external_vue_property_decorator_["Prop"])(Object)], Tooltipvue_type_script_lang_ts_Tooltip.prototype, "reference", void 0);

__decorate([Object(external_vue_property_decorator_["Watch"])('isShown')], Tooltipvue_type_script_lang_ts_Tooltip.prototype, "update", null);

__decorate([Object(external_vue_property_decorator_["Watch"])('preferredPosition')], Tooltipvue_type_script_lang_ts_Tooltip.prototype, "updatePosition", null);

__decorate([Object(external_vue_property_decorator_["Watch"])('effectiveContainer')], Tooltipvue_type_script_lang_ts_Tooltip.prototype, "setContainer", null);

Tooltipvue_type_script_lang_ts_Tooltip = Tooltip_1 = __decorate([Object(external_vue_property_decorator_["Component"])({
  components: {
    AlertTriangleIcon: AlertTriangleIcon
  }
})], Tooltipvue_type_script_lang_ts_Tooltip);

(function (Tooltip) {
  var VerticalPosition;

  (function (VerticalPosition) {
    VerticalPosition["TOP"] = "top";
    VerticalPosition["BOTTOM"] = "bottom";
  })(VerticalPosition = Tooltip.VerticalPosition || (Tooltip.VerticalPosition = {}));

  var HorizontalPosition;

  (function (HorizontalPosition) {
    HorizontalPosition["LEFT"] = "left";
    HorizontalPosition["RIGHT"] = "right";
  })(HorizontalPosition = Tooltip.HorizontalPosition || (Tooltip.HorizontalPosition = {}));

  var Themes;

  (function (Themes) {
    Themes["NORMAL"] = "normal";
    Themes["INVERSE"] = "inverse";
  })(Themes = Tooltip.Themes || (Tooltip.Themes = {}));
})(Tooltipvue_type_script_lang_ts_Tooltip || (Tooltipvue_type_script_lang_ts_Tooltip = {}));

/* harmony default export */ var Tooltipvue_type_script_lang_ts_ = (Tooltipvue_type_script_lang_ts_Tooltip);
// CONCATENATED MODULE: ./src/components/Tooltip.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_Tooltipvue_type_script_lang_ts_ = (Tooltipvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./src/components/Tooltip.vue?vue&type=style&index=0&id=24f93900&scoped=true&lang=css&
var Tooltipvue_type_style_index_0_id_24f93900_scoped_true_lang_css_ = __webpack_require__("4382");

// CONCATENATED MODULE: ./src/components/Tooltip.vue






/* normalize component */

var Tooltip_component = normalizeComponent(
  components_Tooltipvue_type_script_lang_ts_,
  Tooltipvue_type_template_id_24f93900_scoped_true_render,
  Tooltipvue_type_template_id_24f93900_scoped_true_staticRenderFns,
  false,
  null,
  "24f93900",
  null
  
)

/* harmony default export */ var components_Tooltip = (Tooltip_component.exports);
// CONCATENATED MODULE: ./src/main.ts
// Components
// export { default as Account } from './components/Account.vue';
// export { default as AccountDetails } from './components/AccountDetails.vue';
// export { default as AccountList } from './components/AccountList.vue';
// export { default as AccountRing } from './components/AccountRing.vue';
// export { default as AccountSelector } from './components/AccountSelector.vue';
// export { default as Address } from './components/Address.vue';



 // export { default as AmountWithDetails } from './components/AmountWithDetails.vue';
// export { default as AmountWithFee } from './components/AmountWithFee.vue';
// export { default as BottomOverlay } from './components/BottomOverlay.vue';
// export { default as Carousel } from './components/Carousel.vue';


 // export { default as Contact } from './components/Contact.vue';
// export { default as ContactList } from './components/ContactList.vue';
// export { default as ContactShortcuts } from './components/ContactShortcuts.vue';

 // export { default as CopyableField } from './components/CopyableField.vue';




 // export { default as MigrationWelcome } from './components/MigrationWelcome.vue';
// export { default as NewContact } from './components/NewContact.vue';



 // export { default as PaymentInfoLine } from './components/PaymentInfoLine.vue';


 // export { default as SendTx } from './components/SendTx.vue';


 // export { default as Timer } from './components/Timer.vue';

 // export { default as Wallet } from './components/Wallet.vue';
// export { default as WalletList } from './components/WalletList.vue';
// export { default as WalletMenu } from './components/WalletMenu.vue';
// Comment out unused icons in the components/Icons.ts file



// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib-no-default.js
/* concated harmony reexport AddressDisplay */__webpack_require__.d(__webpack_exports__, "AddressDisplay", function() { return components_AddressDisplay; });
/* concated harmony reexport AddressInput */__webpack_require__.d(__webpack_exports__, "AddressInput", function() { return components_AddressInput; });
/* concated harmony reexport Amount */__webpack_require__.d(__webpack_exports__, "Amount", function() { return components_Amount; });
/* concated harmony reexport AmountInput */__webpack_require__.d(__webpack_exports__, "AmountInput", function() { return components_AmountInput; });
/* concated harmony reexport CircleSpinner */__webpack_require__.d(__webpack_exports__, "CircleSpinner", function() { return CircleSpinner; });
/* concated harmony reexport CloseButton */__webpack_require__.d(__webpack_exports__, "CloseButton", function() { return components_CloseButton; });
/* concated harmony reexport Copyable */__webpack_require__.d(__webpack_exports__, "Copyable", function() { return components_Copyable; });
/* concated harmony reexport FiatAmount */__webpack_require__.d(__webpack_exports__, "FiatAmount", function() { return components_FiatAmount; });
/* concated harmony reexport Identicon */__webpack_require__.d(__webpack_exports__, "Identicon", function() { return components_Identicon; });
/* concated harmony reexport LabelInput */__webpack_require__.d(__webpack_exports__, "LabelInput", function() { return components_LabelInput; });
/* concated harmony reexport LoadingSpinner */__webpack_require__.d(__webpack_exports__, "LoadingSpinner", function() { return components_LoadingSpinner; });
/* concated harmony reexport PageBody */__webpack_require__.d(__webpack_exports__, "PageBody", function() { return components_PageBody; });
/* concated harmony reexport PageFooter */__webpack_require__.d(__webpack_exports__, "PageFooter", function() { return components_PageFooter; });
/* concated harmony reexport PageHeader */__webpack_require__.d(__webpack_exports__, "PageHeader", function() { return components_PageHeader; });
/* concated harmony reexport QrCode */__webpack_require__.d(__webpack_exports__, "QrCode", function() { return components_QrCode; });
/* concated harmony reexport QrScanner */__webpack_require__.d(__webpack_exports__, "QrScanner", function() { return components_QrScanner; });
/* concated harmony reexport SelectBar */__webpack_require__.d(__webpack_exports__, "SelectBar", function() { return components_SelectBar; });
/* concated harmony reexport SmallPage */__webpack_require__.d(__webpack_exports__, "SmallPage", function() { return components_SmallPage; });
/* concated harmony reexport Tooltip */__webpack_require__.d(__webpack_exports__, "Tooltip", function() { return components_Tooltip; });
/* concated harmony reexport AlertTriangleIcon */__webpack_require__.d(__webpack_exports__, "AlertTriangleIcon", function() { return AlertTriangleIcon; });
/* concated harmony reexport ArrowLeftIcon */__webpack_require__.d(__webpack_exports__, "ArrowLeftIcon", function() { return ArrowLeftIcon; });
/* concated harmony reexport ArrowRightSmallIcon */__webpack_require__.d(__webpack_exports__, "ArrowRightSmallIcon", function() { return ArrowRightSmallIcon; });
/* concated harmony reexport ArrowRightIcon */__webpack_require__.d(__webpack_exports__, "ArrowRightIcon", function() { return ArrowRightIcon; });
/* concated harmony reexport CaretRightSmallIcon */__webpack_require__.d(__webpack_exports__, "CaretRightSmallIcon", function() { return CaretRightSmallIcon; });
/* concated harmony reexport CashlinkSmallIcon */__webpack_require__.d(__webpack_exports__, "CashlinkSmallIcon", function() { return CashlinkSmallIcon; });
/* concated harmony reexport CashlinkXSmallIcon */__webpack_require__.d(__webpack_exports__, "CashlinkXSmallIcon", function() { return CashlinkXSmallIcon; });
/* concated harmony reexport CheckmarkIcon */__webpack_require__.d(__webpack_exports__, "CheckmarkIcon", function() { return CheckmarkIcon; });
/* concated harmony reexport CloseIcon */__webpack_require__.d(__webpack_exports__, "CloseIcon", function() { return CloseIcon; });
/* concated harmony reexport ContactsIcon */__webpack_require__.d(__webpack_exports__, "ContactsIcon", function() { return ContactsIcon; });
/* concated harmony reexport CrossIcon */__webpack_require__.d(__webpack_exports__, "CrossIcon", function() { return CrossIcon; });
/* concated harmony reexport FaceNeutralIcon */__webpack_require__.d(__webpack_exports__, "FaceNeutralIcon", function() { return FaceNeutralIcon; });
/* concated harmony reexport FaceSadIcon */__webpack_require__.d(__webpack_exports__, "FaceSadIcon", function() { return FaceSadIcon; });
/* concated harmony reexport GearIcon */__webpack_require__.d(__webpack_exports__, "GearIcon", function() { return GearIcon; });
/* concated harmony reexport HexagonIcon */__webpack_require__.d(__webpack_exports__, "HexagonIcon", function() { return HexagonIcon; });
/* concated harmony reexport InfoCircleIcon */__webpack_require__.d(__webpack_exports__, "InfoCircleIcon", function() { return InfoCircleIcon; });
/* concated harmony reexport InfoCircleSmallIcon */__webpack_require__.d(__webpack_exports__, "InfoCircleSmallIcon", function() { return InfoCircleSmallIcon; });
/* concated harmony reexport LockLockedIcon */__webpack_require__.d(__webpack_exports__, "LockLockedIcon", function() { return LockLockedIcon; });
/* concated harmony reexport MenuDotsIcon */__webpack_require__.d(__webpack_exports__, "MenuDotsIcon", function() { return MenuDotsIcon; });
/* concated harmony reexport QrCodeIcon */__webpack_require__.d(__webpack_exports__, "QrCodeIcon", function() { return QrCodeIcon; });
/* concated harmony reexport ScanQrCodeIcon */__webpack_require__.d(__webpack_exports__, "ScanQrCodeIcon", function() { return ScanQrCodeIcon; });
/* concated harmony reexport TransferIcon */__webpack_require__.d(__webpack_exports__, "TransferIcon", function() { return TransferIcon; });
/* concated harmony reexport I18nMixin */__webpack_require__.d(__webpack_exports__, "I18nMixin", function() { return i18n_I18nMixin; });




/***/ }),

/***/ "fc6a":
/***/ (function(module, exports, __webpack_require__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__("44ad");
var requireObjectCoercible = __webpack_require__("1d80");

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),

/***/ "fc94":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "fdbc":
/***/ (function(module, exports) {

// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
module.exports = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
};


/***/ }),

/***/ "fdbf":
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_SYMBOL = __webpack_require__("4930");

module.exports = NATIVE_SYMBOL
  // eslint-disable-next-line no-undef
  && !Symbol.sham
  // eslint-disable-next-line no-undef
  && typeof Symbol.iterator == 'symbol';


/***/ }),

/***/ "fea9":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");

module.exports = global.Promise;


/***/ })

/******/ });
//# sourceMappingURL=NimiqVueComponents.common.js.map