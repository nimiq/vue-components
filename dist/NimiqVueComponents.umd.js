(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue-property-decorator"));
	else if(typeof define === 'function' && define.amd)
		define(["vue-property-decorator"], factory);
	else if(typeof exports === 'object')
		exports["NimiqVueComponents"] = factory(require("vue-property-decorator"));
	else
		root["NimiqVueComponents"] = factory(root["vue-property-decorator"]);
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE__6969__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 		return __webpack_require__.p + "NimiqVueComponents.umd." + ({"1":"lang-de-AccountList-json","2":"lang-de-AccountSelector-json","3":"lang-de-AmountWithFee-json","4":"lang-de-Copyable-json","5":"lang-de-CopyableField-json","6":"lang-de-LabelInput-json","7":"lang-de-LongPressButton-json","8":"lang-de-PageHeader-json","9":"lang-de-PaymentInfoLine-json","10":"lang-de-QrScanner-json","11":"lang-de-Timer-json","12":"lang-de-Wallet-json","13":"lang-es-AccountList-json","14":"lang-es-AccountSelector-json","15":"lang-es-AmountWithFee-json","16":"lang-es-Copyable-json","17":"lang-es-CopyableField-json","18":"lang-es-LabelInput-json","19":"lang-es-LongPressButton-json","20":"lang-es-PageHeader-json","21":"lang-es-PaymentInfoLine-json","22":"lang-es-QrScanner-json","23":"lang-es-Timer-json","24":"lang-es-Wallet-json","25":"lang-fil-AccountList-json","26":"lang-fil-AccountSelector-json","27":"lang-fil-AmountWithFee-json","28":"lang-fil-Copyable-json","29":"lang-fil-CopyableField-json","30":"lang-fil-LabelInput-json","31":"lang-fil-LongPressButton-json","32":"lang-fil-PageHeader-json","33":"lang-fil-PaymentInfoLine-json","34":"lang-fil-QrScanner-json","35":"lang-fil-Timer-json","36":"lang-fil-Wallet-json","37":"lang-fr-AccountList-json","38":"lang-fr-AccountSelector-json","39":"lang-fr-AmountWithFee-json","40":"lang-fr-Copyable-json","41":"lang-fr-CopyableField-json","42":"lang-fr-LabelInput-json","43":"lang-fr-LongPressButton-json","44":"lang-fr-PageHeader-json","45":"lang-fr-PaymentInfoLine-json","46":"lang-fr-QrScanner-json","47":"lang-fr-Timer-json","48":"lang-fr-Wallet-json","49":"lang-nl-AccountList-json","50":"lang-nl-AccountSelector-json","51":"lang-nl-AmountWithFee-json","52":"lang-nl-Copyable-json","53":"lang-nl-CopyableField-json","54":"lang-nl-LabelInput-json","55":"lang-nl-LongPressButton-json","56":"lang-nl-PageHeader-json","57":"lang-nl-PaymentInfoLine-json","58":"lang-nl-QrScanner-json","59":"lang-nl-Timer-json","60":"lang-nl-Wallet-json","61":"lang-pt-AccountList-json","62":"lang-pt-AccountSelector-json","63":"lang-pt-AmountWithFee-json","64":"lang-pt-Copyable-json","65":"lang-pt-CopyableField-json","66":"lang-pt-LabelInput-json","67":"lang-pt-LongPressButton-json","68":"lang-pt-PageHeader-json","69":"lang-pt-PaymentInfoLine-json","70":"lang-pt-QrScanner-json","71":"lang-pt-Timer-json","72":"lang-pt-Wallet-json","73":"lang-ru-AccountList-json","74":"lang-ru-AccountSelector-json","75":"lang-ru-AmountWithFee-json","76":"lang-ru-Copyable-json","77":"lang-ru-CopyableField-json","78":"lang-ru-LabelInput-json","79":"lang-ru-LongPressButton-json","80":"lang-ru-PageHeader-json","81":"lang-ru-PaymentInfoLine-json","82":"lang-ru-QrScanner-json","83":"lang-ru-Timer-json","84":"lang-ru-Wallet-json","85":"lang-uk-AccountList-json","86":"lang-uk-AccountSelector-json","87":"lang-uk-AmountWithFee-json","88":"lang-uk-Copyable-json","89":"lang-uk-CopyableField-json","90":"lang-uk-LabelInput-json","91":"lang-uk-LongPressButton-json","92":"lang-uk-PageHeader-json","93":"lang-uk-PaymentInfoLine-json","94":"lang-uk-QrScanner-json","95":"lang-uk-Timer-json","96":"lang-uk-Wallet-json","97":"lang-zh-AccountList-json","98":"lang-zh-AccountSelector-json","99":"lang-zh-AmountWithFee-json","100":"lang-zh-Copyable-json","101":"lang-zh-CopyableField-json","102":"lang-zh-LabelInput-json","103":"lang-zh-LongPressButton-json","104":"lang-zh-PageHeader-json","105":"lang-zh-PaymentInfoLine-json","106":"lang-zh-QrScanner-json","107":"lang-zh-Timer-json","108":"lang-zh-Wallet-json"}[chunkId]||chunkId) + ".js"
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
/******/ 	return __webpack_require__(__webpack_require__.s = "393d");
/******/ })
/************************************************************************/
/******/ ({

/***/ "00c2":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__("bb80");
var hasOwn = __webpack_require__("338c");
var toIndexedObject = __webpack_require__("f660");
var indexOf = __webpack_require__("036b").indexOf;
var hiddenKeys = __webpack_require__("11bf");

var push = uncurryThis([].push);

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !hasOwn(hiddenKeys, key) && hasOwn(O, key) && push(result, key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (hasOwn(O, key = names[i++])) {
    ~indexOf(result, key) || push(result, key);
  }
  return result;
};


/***/ }),

/***/ "0173":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__("85c1");
var userAgent = __webpack_require__("29d8");

var process = global.process;
var Deno = global.Deno;
var versions = process && process.versions || Deno && Deno.version;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  // in old Chrome, versions of V8 isn't V8 = Chrome / 10
  // but their correct versions are not interesting for us
  version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
}

// BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
// so check `userAgent` even if `.v8` exists, but 0
if (!version && userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = +match[1];
  }
}

module.exports = version;


/***/ }),

/***/ "01a2":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// TODO: Remove this module from `core-js@4` since it's split to modules listed below
__webpack_require__("223c");
__webpack_require__("e5d4");
__webpack_require__("0768");
__webpack_require__("d4b5");
__webpack_require__("6994");


/***/ }),

/***/ "02f1":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var arrayToReversed = __webpack_require__("fe8e");
var ArrayBufferViewCore = __webpack_require__("7ddb");

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
var getTypedArrayConstructor = ArrayBufferViewCore.getTypedArrayConstructor;

// `%TypedArray%.prototype.toReversed` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.toreversed
exportTypedArrayMethod('toReversed', function toReversed() {
  return arrayToReversed(aTypedArray(this), getTypedArrayConstructor(this));
});


/***/ }),

/***/ "0330":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var aSet = __webpack_require__("7a0a");
var size = __webpack_require__("19fa");
var iterate = __webpack_require__("5cb2");
var getSetRecord = __webpack_require__("c108");

// `Set.prototype.isSubsetOf` method
// https://tc39.github.io/proposal-set-methods/#Set.prototype.isSubsetOf
module.exports = function isSubsetOf(other) {
  var O = aSet(this);
  var otherRec = getSetRecord(other);
  if (size(O) > otherRec.size) return false;
  return iterate(O, function (e) {
    if (!otherRec.includes(e)) return false;
  }, true) !== false;
};


/***/ }),

/***/ "036b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toIndexedObject = __webpack_require__("f660");
var toAbsoluteIndex = __webpack_require__("e34c");
var lengthOfArrayLike = __webpack_require__("1fc1");

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = lengthOfArrayLike(O);
    if (length === 0) return !IS_INCLUDES && -1;
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare -- NaN check
    if (IS_INCLUDES && el !== el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare -- NaN check
      if (value !== value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),

/***/ "03a0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__("bb80");
var toIntegerOrInfinity = __webpack_require__("497b");
var toString = __webpack_require__("9e70");
var requireObjectCoercible = __webpack_require__("862c");

var charAt = uncurryThis(''.charAt);
var charCodeAt = uncurryThis(''.charCodeAt);
var stringSlice = uncurryThis(''.slice);

var createMethod = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = toString(requireObjectCoercible($this));
    var position = toIntegerOrInfinity(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
    first = charCodeAt(S, position);
    return first < 0xD800 || first > 0xDBFF || position + 1 === size
      || (second = charCodeAt(S, position + 1)) < 0xDC00 || second > 0xDFFF
        ? CONVERT_TO_STRING
          ? charAt(S, position)
          : first
        : CONVERT_TO_STRING
          ? stringSlice(S, position, position + 2)
          : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
  };
};

module.exports = {
  // `String.prototype.codePointAt` method
  // https://tc39.es/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod(true)
};


/***/ }),

/***/ "03dc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var charAt = __webpack_require__("03a0").charAt;

// `AdvanceStringIndex` abstract operation
// https://tc39.es/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? charAt(S, index).length : 1);
};


/***/ }),

/***/ "0506":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// TODO: Remove from `core-js@4` since it's moved to entry points
__webpack_require__("5c47");
var $ = __webpack_require__("8bdb");
var call = __webpack_require__("71e9");
var isCallable = __webpack_require__("474f");
var anObject = __webpack_require__("e7e3");
var toString = __webpack_require__("9e70");

var DELEGATES_TO_EXEC = function () {
  var execCalled = false;
  var re = /[ac]/;
  re.exec = function () {
    execCalled = true;
    return /./.exec.apply(this, arguments);
  };
  return re.test('abc') === true && execCalled;
}();

var nativeTest = /./.test;

// `RegExp.prototype.test` method
// https://tc39.es/ecma262/#sec-regexp.prototype.test
$({ target: 'RegExp', proto: true, forced: !DELEGATES_TO_EXEC }, {
  test: function (S) {
    var R = anObject(this);
    var string = toString(S);
    var exec = R.exec;
    if (!isCallable(exec)) return call(nativeTest, R, string);
    var result = call(exec, R, string);
    if (result === null) return false;
    anObject(result);
    return true;
  }
});


/***/ }),

/***/ "072c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Carousel_vue_vue_type_style_index_0_id_c078661e_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("d723");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Carousel_vue_vue_type_style_index_0_id_c078661e_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Carousel_vue_vue_type_style_index_0_id_c078661e_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "0768":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("8bdb");
var hasOwn = __webpack_require__("338c");
var isSymbol = __webpack_require__("ddd3");
var tryToString = __webpack_require__("52df");
var shared = __webpack_require__("8b3b");
var NATIVE_SYMBOL_REGISTRY = __webpack_require__("5b2c");

var SymbolToStringRegistry = shared('symbol-to-string-registry');

// `Symbol.keyFor` method
// https://tc39.es/ecma262/#sec-symbol.keyfor
$({ target: 'Symbol', stat: true, forced: !NATIVE_SYMBOL_REGISTRY }, {
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw new TypeError(tryToString(sym) + ' is not a symbol');
    if (hasOwn(SymbolToStringRegistry, sym)) return SymbolToStringRegistry[sym];
  }
});


/***/ }),

/***/ "07da":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var call = __webpack_require__("71e9");
var anObject = __webpack_require__("e7e3");
var isCallable = __webpack_require__("474f");
var classof = __webpack_require__("ada5");
var regexpExec = __webpack_require__("9ad8");

var $TypeError = TypeError;

// `RegExpExec` abstract operation
// https://tc39.es/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (isCallable(exec)) {
    var result = call(exec, R, S);
    if (result !== null) anObject(result);
    return result;
  }
  if (classof(R) === 'RegExp') return call(regexpExec, R, S);
  throw new $TypeError('RegExp#exec called on incompatible receiver');
};


/***/ }),

/***/ "0815":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PageFooter_vue_vue_type_style_index_0_id_3c6ba3a4_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("0a17");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PageFooter_vue_vue_type_style_index_0_id_3c6ba3a4_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PageFooter_vue_vue_type_style_index_0_id_3c6ba3a4_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "0829":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("8bdb");
var $entries = __webpack_require__("ea07").entries;

// `Object.entries` method
// https://tc39.es/ecma262/#sec-object.entries
$({ target: 'Object', stat: true }, {
  entries: function entries(O) {
    return $entries(O);
  }
});


/***/ }),

/***/ "0854":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__("85c1");
var uncurryThis = __webpack_require__("bb80");
var uncurryThisAccessor = __webpack_require__("960c");
var toIndex = __webpack_require__("cc36");
var isDetached = __webpack_require__("ad0a");
var arrayBufferByteLength = __webpack_require__("874c");
var detachTransferable = __webpack_require__("30b2");
var PROPER_STRUCTURED_CLONE_TRANSFER = __webpack_require__("679f");

var structuredClone = global.structuredClone;
var ArrayBuffer = global.ArrayBuffer;
var DataView = global.DataView;
var TypeError = global.TypeError;
var min = Math.min;
var ArrayBufferPrototype = ArrayBuffer.prototype;
var DataViewPrototype = DataView.prototype;
var slice = uncurryThis(ArrayBufferPrototype.slice);
var isResizable = uncurryThisAccessor(ArrayBufferPrototype, 'resizable', 'get');
var maxByteLength = uncurryThisAccessor(ArrayBufferPrototype, 'maxByteLength', 'get');
var getInt8 = uncurryThis(DataViewPrototype.getInt8);
var setInt8 = uncurryThis(DataViewPrototype.setInt8);

module.exports = (PROPER_STRUCTURED_CLONE_TRANSFER || detachTransferable) && function (arrayBuffer, newLength, preserveResizability) {
  var byteLength = arrayBufferByteLength(arrayBuffer);
  var newByteLength = newLength === undefined ? byteLength : toIndex(newLength);
  var fixedLength = !isResizable || !isResizable(arrayBuffer);
  var newBuffer;
  if (isDetached(arrayBuffer)) throw new TypeError('ArrayBuffer is detached');
  if (PROPER_STRUCTURED_CLONE_TRANSFER) {
    arrayBuffer = structuredClone(arrayBuffer, { transfer: [arrayBuffer] });
    if (byteLength === newByteLength && (preserveResizability || fixedLength)) return arrayBuffer;
  }
  if (byteLength >= newByteLength && (!preserveResizability || fixedLength)) {
    newBuffer = slice(arrayBuffer, 0, newByteLength);
  } else {
    var options = preserveResizability && !fixedLength && maxByteLength ? { maxByteLength: maxByteLength(arrayBuffer) } : undefined;
    newBuffer = new ArrayBuffer(newByteLength, options);
    var a = new DataView(arrayBuffer);
    var b = new DataView(newBuffer);
    var copyLength = min(newByteLength, byteLength);
    for (var i = 0; i < copyLength; i++) setInt8(b, i, getInt8(a, i));
  }
  if (!PROPER_STRUCTURED_CLONE_TRANSFER) detachTransferable(arrayBuffer);
  return newBuffer;
};


/***/ }),

/***/ "08d3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__("ab4a");
var defineBuiltInAccessor = __webpack_require__("e4ca");
var isDetached = __webpack_require__("ad0a");

var ArrayBufferPrototype = ArrayBuffer.prototype;

if (DESCRIPTORS && !('detached' in ArrayBufferPrototype)) {
  defineBuiltInAccessor(ArrayBufferPrototype, 'detached', {
    configurable: true,
    get: function detached() {
      return isDetached(this);
    }
  });
}


/***/ }),

/***/ "08eb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("8bdb");
var from = __webpack_require__("3d77");
var checkCorrectnessOfIteration = __webpack_require__("29ba");

var INCORRECT_ITERATION = !checkCorrectnessOfIteration(function (iterable) {
  // eslint-disable-next-line es/no-array-from -- required for testing
  Array.from(iterable);
});

// `Array.from` method
// https://tc39.es/ecma262/#sec-array.from
$({ target: 'Array', stat: true, forced: INCORRECT_ITERATION }, {
  from: from
});


/***/ }),

/***/ "0931":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var wellKnownSymbol = __webpack_require__("8c08");

var MATCH = wellKnownSymbol('match');

module.exports = function (METHOD_NAME) {
  var regexp = /./;
  try {
    '/./'[METHOD_NAME](regexp);
  } catch (error1) {
    try {
      regexp[MATCH] = false;
      return '/./'[METHOD_NAME](regexp);
    } catch (error2) { /* empty */ }
  } return false;
};


/***/ }),

/***/ "0a17":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "0a5b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountRing_vue_vue_type_style_index_0_id_693b8320_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("8824");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountRing_vue_vue_type_style_index_0_id_693b8320_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountRing_vue_vue_type_style_index_0_id_693b8320_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "0a8b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var aCallable = __webpack_require__("7992");

var $TypeError = TypeError;

var PromiseCapability = function (C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw new $TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aCallable(resolve);
  this.reject = aCallable(reject);
};

// `NewPromiseCapability` abstract operation
// https://tc39.es/ecma262/#sec-newpromisecapability
module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),

/***/ "0b5a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "0b84":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("8bdb");
var union = __webpack_require__("bc67");
var setMethodAcceptSetLike = __webpack_require__("45bf");

// `Set.prototype.union` method
// https://github.com/tc39/proposal-set-methods
$({ target: 'Set', proto: true, real: true, forced: !setMethodAcceptSetLike('union') }, {
  union: union
});


/***/ }),

/***/ "0c26":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("8bdb");
var $trim = __webpack_require__("ee98").trim;
var forcedStringTrimMethod = __webpack_require__("8b27");

// `String.prototype.trim` method
// https://tc39.es/ecma262/#sec-string.prototype.trim
$({ target: 'String', proto: true, forced: forcedStringTrimMethod('trim') }, {
  trim: function trim() {
    return $trim(this);
  }
});


/***/ }),

/***/ "0c8d":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CopyableField_vue_vue_type_style_index_0_id_23ed6b92_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("8087");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CopyableField_vue_vue_type_style_index_0_id_23ed6b92_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CopyableField_vue_vue_type_style_index_0_id_23ed6b92_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "0cc2":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("8bdb");
var call = __webpack_require__("71e9");
var IS_PURE = __webpack_require__("a734");
var FunctionName = __webpack_require__("8945");
var isCallable = __webpack_require__("474f");
var createIteratorConstructor = __webpack_require__("4afb");
var getPrototypeOf = __webpack_require__("c337");
var setPrototypeOf = __webpack_require__("8c4f");
var setToStringTag = __webpack_require__("181d");
var createNonEnumerableProperty = __webpack_require__("6aca");
var defineBuiltIn = __webpack_require__("81a9");
var wellKnownSymbol = __webpack_require__("8c08");
var Iterators = __webpack_require__("799d");
var IteratorsCore = __webpack_require__("5057");

var PROPER_FUNCTION_NAME = FunctionName.PROPER;
var CONFIGURABLE_FUNCTION_NAME = FunctionName.CONFIGURABLE;
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
    if (!BUGGY_SAFARI_ITERATORS && KIND && KIND in IterablePrototype) return IterablePrototype[KIND];

    switch (KIND) {
      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
    }

    return function () { return new IteratorConstructor(this); };
  };

  var TO_STRING_TAG = NAME + ' Iterator';
  var INCORRECT_VALUES_NAME = false;
  var IterablePrototype = Iterable.prototype;
  var nativeIterator = IterablePrototype[ITERATOR]
    || IterablePrototype['@@iterator']
    || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME === 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY;

  // fix native
  if (anyNativeIterator) {
    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
    if (CurrentIteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
      if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
        if (setPrototypeOf) {
          setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
        } else if (!isCallable(CurrentIteratorPrototype[ITERATOR])) {
          defineBuiltIn(CurrentIteratorPrototype, ITERATOR, returnThis);
        }
      }
      // Set @@toStringTag to native iterators
      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
      if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
    }
  }

  // fix Array.prototype.{ values, @@iterator }.name in V8 / FF
  if (PROPER_FUNCTION_NAME && DEFAULT === VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    if (!IS_PURE && CONFIGURABLE_FUNCTION_NAME) {
      createNonEnumerableProperty(IterablePrototype, 'name', VALUES);
    } else {
      INCORRECT_VALUES_NAME = true;
      defaultIterator = function values() { return call(nativeIterator, this); };
    }
  }

  // export additional methods
  if (DEFAULT) {
    methods = {
      values: getIterationMethod(VALUES),
      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
      entries: getIterationMethod(ENTRIES)
    };
    if (FORCED) for (KEY in methods) {
      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
        defineBuiltIn(IterablePrototype, KEY, methods[KEY]);
      }
    } else $({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
  }

  // define iterator
  if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
    defineBuiltIn(IterablePrototype, ITERATOR, defaultIterator, { name: DEFAULT });
  }
  Iterators[NAME] = defaultIterator;

  return methods;
};


/***/ }),

/***/ "0cd1":
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

/***/ "0e01":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PaymentInfoLine_vue_vue_type_style_index_0_id_04517e76_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("d60f");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PaymentInfoLine_vue_vue_type_style_index_0_id_04517e76_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PaymentInfoLine_vue_vue_type_style_index_0_id_04517e76_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "0e40":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var floatRound = __webpack_require__("86ca");

var FLOAT32_EPSILON = 1.1920928955078125e-7; // 2 ** -23;
var FLOAT32_MAX_VALUE = 3.4028234663852886e+38; // 2 ** 128 - 2 ** 104
var FLOAT32_MIN_VALUE = 1.1754943508222875e-38; // 2 ** -126;

// `Math.fround` method implementation
// https://tc39.es/ecma262/#sec-math.fround
// eslint-disable-next-line es/no-math-fround -- safe
module.exports = Math.fround || function fround(x) {
  return floatRound(x, FLOAT32_EPSILON, FLOAT32_MAX_VALUE, FLOAT32_MIN_VALUE);
};


/***/ }),

/***/ "0e93":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountDetails_vue_vue_type_style_index_0_id_4d576866_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("9ee1");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountDetails_vue_vue_type_style_index_0_id_4d576866_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountDetails_vue_vue_type_style_index_0_id_4d576866_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "1001":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__("bb80");
var toObject = __webpack_require__("1099");

var floor = Math.floor;
var charAt = uncurryThis(''.charAt);
var replace = uncurryThis(''.replace);
var stringSlice = uncurryThis(''.slice);
// eslint-disable-next-line redos/no-vulnerable -- safe
var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d{1,2}|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d{1,2})/g;

// `GetSubstitution` abstract operation
// https://tc39.es/ecma262/#sec-getsubstitution
module.exports = function (matched, str, position, captures, namedCaptures, replacement) {
  var tailPos = position + matched.length;
  var m = captures.length;
  var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
  if (namedCaptures !== undefined) {
    namedCaptures = toObject(namedCaptures);
    symbols = SUBSTITUTION_SYMBOLS;
  }
  return replace(replacement, symbols, function (match, ch) {
    var capture;
    switch (charAt(ch, 0)) {
      case '$': return '$';
      case '&': return matched;
      case '`': return stringSlice(str, 0, position);
      case "'": return stringSlice(str, tailPos);
      case '<':
        capture = namedCaptures[stringSlice(ch, 1, -1)];
        break;
      default: // \d\d?
        var n = +ch;
        if (n === 0) return match;
        if (n > m) {
          var f = floor(n / 10);
          if (f === 0) return match;
          if (f <= m) return captures[f - 1] === undefined ? charAt(ch, 1) : captures[f - 1] + charAt(ch, 1);
          return match;
        }
        capture = captures[n - 1];
    }
    return capture === undefined ? '' : capture;
  });
};


/***/ }),

/***/ "103d":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "1052":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__("85c1");
var NativePromiseConstructor = __webpack_require__("69e4");
var isCallable = __webpack_require__("474f");
var isForced = __webpack_require__("8466");
var inspectSource = __webpack_require__("ca99");
var wellKnownSymbol = __webpack_require__("8c08");
var IS_BROWSER = __webpack_require__("897c");
var IS_DENO = __webpack_require__("6b21");
var IS_PURE = __webpack_require__("a734");
var V8_VERSION = __webpack_require__("0173");

var NativePromisePrototype = NativePromiseConstructor && NativePromiseConstructor.prototype;
var SPECIES = wellKnownSymbol('species');
var SUBCLASSING = false;
var NATIVE_PROMISE_REJECTION_EVENT = isCallable(global.PromiseRejectionEvent);

var FORCED_PROMISE_CONSTRUCTOR = isForced('Promise', function () {
  var PROMISE_CONSTRUCTOR_SOURCE = inspectSource(NativePromiseConstructor);
  var GLOBAL_CORE_JS_PROMISE = PROMISE_CONSTRUCTOR_SOURCE !== String(NativePromiseConstructor);
  // V8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
  // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
  // We can't detect it synchronously, so just check versions
  if (!GLOBAL_CORE_JS_PROMISE && V8_VERSION === 66) return true;
  // We need Promise#{ catch, finally } in the pure version for preventing prototype pollution
  if (IS_PURE && !(NativePromisePrototype['catch'] && NativePromisePrototype['finally'])) return true;
  // We can't use @@species feature detection in V8 since it causes
  // deoptimization and performance degradation
  // https://github.com/zloirock/core-js/issues/679
  if (!V8_VERSION || V8_VERSION < 51 || !/native code/.test(PROMISE_CONSTRUCTOR_SOURCE)) {
    // Detect correctness of subclassing with @@species support
    var promise = new NativePromiseConstructor(function (resolve) { resolve(1); });
    var FakePromise = function (exec) {
      exec(function () { /* empty */ }, function () { /* empty */ });
    };
    var constructor = promise.constructor = {};
    constructor[SPECIES] = FakePromise;
    SUBCLASSING = promise.then(function () { /* empty */ }) instanceof FakePromise;
    if (!SUBCLASSING) return true;
  // Unhandled rejections tracking support, NodeJS Promise without it fails @@species test
  } return !GLOBAL_CORE_JS_PROMISE && (IS_BROWSER || IS_DENO) && !NATIVE_PROMISE_REJECTION_EVENT;
});

module.exports = {
  CONSTRUCTOR: FORCED_PROMISE_CONSTRUCTOR,
  REJECTION_EVENT: NATIVE_PROMISE_REJECTION_EVENT,
  SUBCLASSING: SUBCLASSING
};


/***/ }),

/***/ "1099":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var requireObjectCoercible = __webpack_require__("862c");

var $Object = Object;

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
module.exports = function (argument) {
  return $Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ "10e7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.onCut = onCut;
exports.onPaste = onPaste;
exports.onChange = onChange;
exports.onKeyDown = onKeyDown;

var _edit = __webpack_require__("0cd1");

var _edit2 = _interopRequireDefault(_edit);

var _parse3 = __webpack_require__("7b83");

var _parse4 = _interopRequireDefault(_parse3);

var _format2 = __webpack_require__("7451");

var _format3 = _interopRequireDefault(_format2);

var _dom = __webpack_require__("25ed");

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

/***/ "114e":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__("85c1");
var setToStringTag = __webpack_require__("181d");

// JSON[@@toStringTag] property
// https://tc39.es/ecma262/#sec-json-@@tostringtag
setToStringTag(global.JSON, 'JSON', true);


/***/ }),

/***/ "11bf":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = {};


/***/ }),

/***/ "1297":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__("bb80");

module.exports = uncurryThis({}.isPrototypeOf);


/***/ }),

/***/ "12973":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__("7ddb");

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
var floor = Math.floor;

// `%TypedArray%.prototype.reverse` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.reverse
exportTypedArrayMethod('reverse', function reverse() {
  var that = this;
  var length = aTypedArray(that).length;
  var middle = floor(length / 2);
  var index = 0;
  var value;
  while (index < middle) {
    value = that[index];
    that[index++] = that[--length];
    that[length] = value;
  } return that;
});


/***/ }),

/***/ "154a":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Timer_vue_vue_type_style_index_0_id_a31a785a_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("52f4");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Timer_vue_vue_type_style_index_0_id_a31a785a_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Timer_vue_vue_type_style_index_0_id_a31a785a_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "15ab":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var collection = __webpack_require__("7658");
var collectionStrong = __webpack_require__("57e7");

// `Map` constructor
// https://tc39.es/ecma262/#sec-map-objects
collection('Map', function (init) {
  return function Map() { return init(this, arguments.length ? arguments[0] : undefined); };
}, collectionStrong);


/***/ }),

/***/ "15d1":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("8bdb");
var global = __webpack_require__("85c1");
var getBuiltIn = __webpack_require__("6aa6");
var uncurryThis = __webpack_require__("bb80");
var call = __webpack_require__("71e9");
var fails = __webpack_require__("af9e");
var toString = __webpack_require__("9e70");
var validateArgumentsLength = __webpack_require__("7f28");
var c2i = __webpack_require__("3b19").c2i;

var disallowed = /[^\d+/a-z]/i;
var whitespaces = /[\t\n\f\r ]+/g;
var finalEq = /[=]{1,2}$/;

var $atob = getBuiltIn('atob');
var fromCharCode = String.fromCharCode;
var charAt = uncurryThis(''.charAt);
var replace = uncurryThis(''.replace);
var exec = uncurryThis(disallowed.exec);

var BASIC = !!$atob && !fails(function () {
  return $atob('aGk=') !== 'hi';
});

var NO_SPACES_IGNORE = BASIC && fails(function () {
  return $atob(' ') !== '';
});

var NO_ENCODING_CHECK = BASIC && !fails(function () {
  $atob('a');
});

var NO_ARG_RECEIVING_CHECK = BASIC && !fails(function () {
  $atob();
});

var WRONG_ARITY = BASIC && $atob.length !== 1;

var FORCED = !BASIC || NO_SPACES_IGNORE || NO_ENCODING_CHECK || NO_ARG_RECEIVING_CHECK || WRONG_ARITY;

// `atob` method
// https://html.spec.whatwg.org/multipage/webappapis.html#dom-atob
$({ global: true, bind: true, enumerable: true, forced: FORCED }, {
  atob: function atob(data) {
    validateArgumentsLength(arguments.length, 1);
    // `webpack` dev server bug on IE global methods - use call(fn, global, ...)
    if (BASIC && !NO_SPACES_IGNORE && !NO_ENCODING_CHECK) return call($atob, global, data);
    var string = replace(toString(data), whitespaces, '');
    var output = '';
    var position = 0;
    var bc = 0;
    var length, chr, bs;
    if (string.length % 4 === 0) {
      string = replace(string, finalEq, '');
    }
    length = string.length;
    if (length % 4 === 1 || exec(disallowed, string)) {
      throw new (getBuiltIn('DOMException'))('The string is not correctly encoded', 'InvalidCharacterError');
    }
    while (position < length) {
      chr = charAt(string, position++);
      bs = bc % 4 ? bs * 64 + c2i[chr] : c2i[chr];
      if (bc++ % 4) output += fromCharCode(255 & bs >> (-2 * bc & 6));
    } return output;
  }
});


/***/ }),

/***/ "175f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var getBuiltIn = __webpack_require__("6aa6");
var hasOwn = __webpack_require__("338c");
var createNonEnumerableProperty = __webpack_require__("6aca");
var isPrototypeOf = __webpack_require__("1297");
var setPrototypeOf = __webpack_require__("8c4f");
var copyConstructorProperties = __webpack_require__("3d8a");
var proxyAccessor = __webpack_require__("e157");
var inheritIfRequired = __webpack_require__("dcda");
var normalizeStringArgument = __webpack_require__("e7da");
var installErrorCause = __webpack_require__("5330");
var installErrorStack = __webpack_require__("8cb1");
var DESCRIPTORS = __webpack_require__("ab4a");
var IS_PURE = __webpack_require__("a734");

module.exports = function (FULL_NAME, wrapper, FORCED, IS_AGGREGATE_ERROR) {
  var STACK_TRACE_LIMIT = 'stackTraceLimit';
  var OPTIONS_POSITION = IS_AGGREGATE_ERROR ? 2 : 1;
  var path = FULL_NAME.split('.');
  var ERROR_NAME = path[path.length - 1];
  var OriginalError = getBuiltIn.apply(null, path);

  if (!OriginalError) return;

  var OriginalErrorPrototype = OriginalError.prototype;

  // V8 9.3- bug https://bugs.chromium.org/p/v8/issues/detail?id=12006
  if (!IS_PURE && hasOwn(OriginalErrorPrototype, 'cause')) delete OriginalErrorPrototype.cause;

  if (!FORCED) return OriginalError;

  var BaseError = getBuiltIn('Error');

  var WrappedError = wrapper(function (a, b) {
    var message = normalizeStringArgument(IS_AGGREGATE_ERROR ? b : a, undefined);
    var result = IS_AGGREGATE_ERROR ? new OriginalError(a) : new OriginalError();
    if (message !== undefined) createNonEnumerableProperty(result, 'message', message);
    installErrorStack(result, WrappedError, result.stack, 2);
    if (this && isPrototypeOf(OriginalErrorPrototype, this)) inheritIfRequired(result, this, WrappedError);
    if (arguments.length > OPTIONS_POSITION) installErrorCause(result, arguments[OPTIONS_POSITION]);
    return result;
  });

  WrappedError.prototype = OriginalErrorPrototype;

  if (ERROR_NAME !== 'Error') {
    if (setPrototypeOf) setPrototypeOf(WrappedError, BaseError);
    else copyConstructorProperties(WrappedError, BaseError, { name: true });
  } else if (DESCRIPTORS && STACK_TRACE_LIMIT in OriginalError) {
    proxyAccessor(WrappedError, OriginalError, STACK_TRACE_LIMIT);
    proxyAccessor(WrappedError, OriginalError, 'prepareStackTrace');
  }

  copyConstructorProperties(WrappedError, OriginalError);

  if (!IS_PURE) try {
    // Safari 13- bug: WebAssembly errors does not have a proper `.name`
    if (OriginalErrorPrototype.name !== ERROR_NAME) {
      createNonEnumerableProperty(OriginalErrorPrototype, 'name', ERROR_NAME);
    }
    OriginalErrorPrototype.constructor = WrappedError;
  } catch (error) { /* empty */ }

  return WrappedError;
};


/***/ }),

/***/ "17fc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var isArray = __webpack_require__("ac5f");
var isConstructor = __webpack_require__("8ae2");
var isObject = __webpack_require__("1c06");
var wellKnownSymbol = __webpack_require__("8c08");

var SPECIES = wellKnownSymbol('species');
var $Array = Array;

// a part of `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (isConstructor(C) && (C === $Array || isArray(C.prototype))) C = undefined;
    else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? $Array : C;
};


/***/ }),

/***/ "181d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var defineProperty = __webpack_require__("d6b1").f;
var hasOwn = __webpack_require__("338c");
var wellKnownSymbol = __webpack_require__("8c08");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');

module.exports = function (target, TAG, STATIC) {
  if (target && !STATIC) target = target.prototype;
  if (target && !hasOwn(target, TO_STRING_TAG)) {
    defineProperty(target, TO_STRING_TAG, { configurable: true, value: TAG });
  }
};


/***/ }),

/***/ "1851":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("8bdb");
var fill = __webpack_require__("84d6");
var addToUnscopables = __webpack_require__("1cb5");

// `Array.prototype.fill` method
// https://tc39.es/ecma262/#sec-array.prototype.fill
$({ target: 'Array', proto: true }, {
  fill: fill
});

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('fill');


/***/ }),

/***/ "18f7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var charAt = __webpack_require__("03a0").charAt;
var toString = __webpack_require__("9e70");
var InternalStateModule = __webpack_require__("235c");
var defineIterator = __webpack_require__("0cc2");
var createIterResultObject = __webpack_require__("97ed");

var STRING_ITERATOR = 'String Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);

// `String.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-string.prototype-@@iterator
defineIterator(String, 'String', function (iterated) {
  setInternalState(this, {
    type: STRING_ITERATOR,
    string: toString(iterated),
    index: 0
  });
// `%StringIteratorPrototype%.next` method
// https://tc39.es/ecma262/#sec-%stringiteratorprototype%.next
}, function next() {
  var state = getInternalState(this);
  var string = state.string;
  var index = state.index;
  var point;
  if (index >= string.length) return createIterResultObject(undefined, true);
  point = charAt(string, index);
  state.index += point.length;
  return createIterResultObject(point, false);
});


/***/ }),

/***/ "1928":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddressInput_vue_vue_type_style_index_0_id_bd6dd43a_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("aa33");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddressInput_vue_vue_type_style_index_0_id_bd6dd43a_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddressInput_vue_vue_type_style_index_0_id_bd6dd43a_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "1954":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__("85c1");
var apply = __webpack_require__("9f9e");
var ArrayBufferViewCore = __webpack_require__("7ddb");
var fails = __webpack_require__("af9e");
var arraySlice = __webpack_require__("37ad");

var Int8Array = global.Int8Array;
var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
var $toLocaleString = [].toLocaleString;

// iOS Safari 6.x fails here
var TO_LOCALE_STRING_BUG = !!Int8Array && fails(function () {
  $toLocaleString.call(new Int8Array(1));
});

var FORCED = fails(function () {
  return [1, 2].toLocaleString() !== new Int8Array([1, 2]).toLocaleString();
}) || !fails(function () {
  Int8Array.prototype.toLocaleString.call([1, 2]);
});

// `%TypedArray%.prototype.toLocaleString` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.tolocalestring
exportTypedArrayMethod('toLocaleString', function toLocaleString() {
  return apply(
    $toLocaleString,
    TO_LOCALE_STRING_BUG ? arraySlice(aTypedArray(this)) : aTypedArray(this),
    arraySlice(arguments)
  );
}, FORCED);


/***/ }),

/***/ "198e":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__("7ddb");
var typedArraySpeciesConstructor = __webpack_require__("323c");
var fails = __webpack_require__("af9e");
var arraySlice = __webpack_require__("37ad");

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

var FORCED = fails(function () {
  // eslint-disable-next-line es/no-typed-arrays -- required for testing
  new Int8Array(1).slice();
});

// `%TypedArray%.prototype.slice` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.slice
exportTypedArrayMethod('slice', function slice(start, end) {
  var list = arraySlice(aTypedArray(this), start, end);
  var C = typedArraySpeciesConstructor(this);
  var index = 0;
  var length = list.length;
  var result = new C(length);
  while (length > index) result[index] = list[index++];
  return result;
}, FORCED);


/***/ }),

/***/ "19fa":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var uncurryThisAccessor = __webpack_require__("960c");
var SetHelpers = __webpack_require__("41d3");

module.exports = uncurryThisAccessor(SetHelpers.proto, 'size', 'get') || function (set) {
  return set.size;
};


/***/ }),

/***/ "1a4c":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./de/AccountList.json": [
		"e375",
		1
	],
	"./de/AccountSelector.json": [
		"0da6",
		2
	],
	"./de/AmountWithFee.json": [
		"5068",
		3
	],
	"./de/Copyable.json": [
		"571a",
		4
	],
	"./de/CopyableField.json": [
		"8f7c",
		5
	],
	"./de/LabelInput.json": [
		"dc1c",
		6
	],
	"./de/LongPressButton.json": [
		"6498",
		7
	],
	"./de/PageHeader.json": [
		"ce13",
		8
	],
	"./de/PaymentInfoLine.json": [
		"112a",
		9
	],
	"./de/QrScanner.json": [
		"d2ca",
		10
	],
	"./de/Timer.json": [
		"1d7d",
		11
	],
	"./de/Wallet.json": [
		"a5e3",
		12
	],
	"./es/AccountList.json": [
		"0520",
		13
	],
	"./es/AccountSelector.json": [
		"95df",
		14
	],
	"./es/AmountWithFee.json": [
		"80e8",
		15
	],
	"./es/Copyable.json": [
		"8140",
		16
	],
	"./es/CopyableField.json": [
		"0a2d",
		17
	],
	"./es/LabelInput.json": [
		"60ab",
		18
	],
	"./es/LongPressButton.json": [
		"420c",
		19
	],
	"./es/PageHeader.json": [
		"4eef",
		20
	],
	"./es/PaymentInfoLine.json": [
		"357c",
		21
	],
	"./es/QrScanner.json": [
		"5b48",
		22
	],
	"./es/Timer.json": [
		"2c79",
		23
	],
	"./es/Wallet.json": [
		"6743",
		24
	],
	"./fil/AccountList.json": [
		"885d",
		25
	],
	"./fil/AccountSelector.json": [
		"01f3",
		26
	],
	"./fil/AmountWithFee.json": [
		"b49a",
		27
	],
	"./fil/Copyable.json": [
		"cf69",
		28
	],
	"./fil/CopyableField.json": [
		"274a",
		29
	],
	"./fil/LabelInput.json": [
		"ac1a",
		30
	],
	"./fil/LongPressButton.json": [
		"72f7",
		31
	],
	"./fil/PageHeader.json": [
		"20d9",
		32
	],
	"./fil/PaymentInfoLine.json": [
		"1625",
		33
	],
	"./fil/QrScanner.json": [
		"818c",
		34
	],
	"./fil/Timer.json": [
		"7baa",
		35
	],
	"./fil/Wallet.json": [
		"e7d6",
		36
	],
	"./fr/AccountList.json": [
		"4d97",
		37
	],
	"./fr/AccountSelector.json": [
		"36a8",
		38
	],
	"./fr/AmountWithFee.json": [
		"5afc",
		39
	],
	"./fr/Copyable.json": [
		"ff70",
		40
	],
	"./fr/CopyableField.json": [
		"58da",
		41
	],
	"./fr/LabelInput.json": [
		"b93f",
		42
	],
	"./fr/LongPressButton.json": [
		"626f",
		43
	],
	"./fr/PageHeader.json": [
		"9ab1",
		44
	],
	"./fr/PaymentInfoLine.json": [
		"45fb",
		45
	],
	"./fr/QrScanner.json": [
		"cc58",
		46
	],
	"./fr/Timer.json": [
		"d34b",
		47
	],
	"./fr/Wallet.json": [
		"9907",
		48
	],
	"./nl/AccountList.json": [
		"0844",
		49
	],
	"./nl/AccountSelector.json": [
		"6cb2",
		50
	],
	"./nl/AmountWithFee.json": [
		"ec31",
		51
	],
	"./nl/Copyable.json": [
		"3b22",
		52
	],
	"./nl/CopyableField.json": [
		"922b",
		53
	],
	"./nl/LabelInput.json": [
		"ce5e",
		54
	],
	"./nl/LongPressButton.json": [
		"4af0",
		55
	],
	"./nl/PageHeader.json": [
		"b191",
		56
	],
	"./nl/PaymentInfoLine.json": [
		"52b5",
		57
	],
	"./nl/QrScanner.json": [
		"2bd2",
		58
	],
	"./nl/Timer.json": [
		"f691",
		59
	],
	"./nl/Wallet.json": [
		"23d7",
		60
	],
	"./pt/AccountList.json": [
		"7dd2",
		61
	],
	"./pt/AccountSelector.json": [
		"7615",
		62
	],
	"./pt/AmountWithFee.json": [
		"a5e1",
		63
	],
	"./pt/Copyable.json": [
		"ad46",
		64
	],
	"./pt/CopyableField.json": [
		"a890",
		65
	],
	"./pt/LabelInput.json": [
		"7892",
		66
	],
	"./pt/LongPressButton.json": [
		"dca0",
		67
	],
	"./pt/PageHeader.json": [
		"5f2a",
		68
	],
	"./pt/PaymentInfoLine.json": [
		"8830",
		69
	],
	"./pt/QrScanner.json": [
		"85a1",
		70
	],
	"./pt/Timer.json": [
		"757c",
		71
	],
	"./pt/Wallet.json": [
		"6d10",
		72
	],
	"./ru/AccountList.json": [
		"267d",
		73
	],
	"./ru/AccountSelector.json": [
		"6148",
		74
	],
	"./ru/AmountWithFee.json": [
		"d56c",
		75
	],
	"./ru/Copyable.json": [
		"08ff",
		76
	],
	"./ru/CopyableField.json": [
		"dfb1",
		77
	],
	"./ru/LabelInput.json": [
		"64d7",
		78
	],
	"./ru/LongPressButton.json": [
		"26f6",
		79
	],
	"./ru/PageHeader.json": [
		"6212",
		80
	],
	"./ru/PaymentInfoLine.json": [
		"21ab",
		81
	],
	"./ru/QrScanner.json": [
		"089a",
		82
	],
	"./ru/Timer.json": [
		"171c",
		83
	],
	"./ru/Wallet.json": [
		"ebbc",
		84
	],
	"./uk/AccountList.json": [
		"61b1",
		85
	],
	"./uk/AccountSelector.json": [
		"f611",
		86
	],
	"./uk/AmountWithFee.json": [
		"6853",
		87
	],
	"./uk/Copyable.json": [
		"a658",
		88
	],
	"./uk/CopyableField.json": [
		"ae3c",
		89
	],
	"./uk/LabelInput.json": [
		"03a3",
		90
	],
	"./uk/LongPressButton.json": [
		"d943",
		91
	],
	"./uk/PageHeader.json": [
		"f990",
		92
	],
	"./uk/PaymentInfoLine.json": [
		"2872",
		93
	],
	"./uk/QrScanner.json": [
		"04a8",
		94
	],
	"./uk/Timer.json": [
		"3760",
		95
	],
	"./uk/Wallet.json": [
		"10e0",
		96
	],
	"./zh/AccountList.json": [
		"1494",
		97
	],
	"./zh/AccountSelector.json": [
		"1018",
		98
	],
	"./zh/AmountWithFee.json": [
		"9823",
		99
	],
	"./zh/Copyable.json": [
		"67ae",
		100
	],
	"./zh/CopyableField.json": [
		"51e1",
		101
	],
	"./zh/LabelInput.json": [
		"38af",
		102
	],
	"./zh/LongPressButton.json": [
		"1142",
		103
	],
	"./zh/PageHeader.json": [
		"e4cb",
		104
	],
	"./zh/PaymentInfoLine.json": [
		"3355",
		105
	],
	"./zh/QrScanner.json": [
		"f55d",
		106
	],
	"./zh/Timer.json": [
		"29ae",
		107
	],
	"./zh/Wallet.json": [
		"87ed",
		108
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
webpackAsyncContext.id = "1a4c";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "1aad":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ceil = Math.ceil;
var floor = Math.floor;

// `Math.trunc` method
// https://tc39.es/ecma262/#sec-math.trunc
// eslint-disable-next-line es/no-math-trunc -- safe
module.exports = Math.trunc || function trunc(x) {
  var n = +x;
  return (n > 0 ? floor : ceil)(n);
};


/***/ }),

/***/ "1c06":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var isCallable = __webpack_require__("474f");

module.exports = function (it) {
  return typeof it == 'object' ? it !== null : isCallable(it);
};


/***/ }),

/***/ "1c16":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toPositiveInteger = __webpack_require__("3c7a");

var $RangeError = RangeError;

module.exports = function (it, BYTES) {
  var offset = toPositiveInteger(it);
  if (offset % BYTES) throw new $RangeError('Wrong offset');
  return offset;
};


/***/ }),

/***/ "1cb5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var wellKnownSymbol = __webpack_require__("8c08");
var create = __webpack_require__("e37c");
var defineProperty = __webpack_require__("d6b1").f;

var UNSCOPABLES = wellKnownSymbol('unscopables');
var ArrayPrototype = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype[UNSCOPABLES] === undefined) {
  defineProperty(ArrayPrototype, UNSCOPABLES, {
    configurable: true,
    value: create(null)
  });
}

// add a key to Array.prototype[@@unscopables]
module.exports = function (key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "1cf1":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var exportTypedArrayMethod = __webpack_require__("7ddb").exportTypedArrayMethod;
var fails = __webpack_require__("af9e");
var global = __webpack_require__("85c1");
var uncurryThis = __webpack_require__("bb80");

var Uint8Array = global.Uint8Array;
var Uint8ArrayPrototype = Uint8Array && Uint8Array.prototype || {};
var arrayToString = [].toString;
var join = uncurryThis([].join);

if (fails(function () { arrayToString.call({}); })) {
  arrayToString = function toString() {
    return join(this);
  };
}

var IS_NOT_ARRAY_METHOD = Uint8ArrayPrototype.toString !== arrayToString;

// `%TypedArray%.prototype.toString` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.tostring
exportTypedArrayMethod('toString', arrayToString, IS_NOT_ARRAY_METHOD);


/***/ }),

/***/ "1d13":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__("7ddb");
var toLength = __webpack_require__("c435");
var toAbsoluteIndex = __webpack_require__("e34c");
var typedArraySpeciesConstructor = __webpack_require__("323c");

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.subarray` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.subarray
exportTypedArrayMethod('subarray', function subarray(begin, end) {
  var O = aTypedArray(this);
  var length = O.length;
  var beginIndex = toAbsoluteIndex(begin, length);
  var C = typedArraySpeciesConstructor(O);
  return new C(
    O.buffer,
    O.byteOffset + beginIndex * O.BYTES_PER_ELEMENT,
    toLength((end === undefined ? length : toAbsoluteIndex(end, length)) - beginIndex)
  );
});


/***/ }),

/***/ "1d57":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__("af9e");

module.exports = !fails(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  // eslint-disable-next-line es/no-object-getprototypeof -- required for testing
  return Object.getPrototypeOf(new F()) !== F.prototype;
});


/***/ }),

/***/ "1ded":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__("ab4a");
var call = __webpack_require__("71e9");
var propertyIsEnumerableModule = __webpack_require__("346b");
var createPropertyDescriptor = __webpack_require__("0b5a");
var toIndexedObject = __webpack_require__("f660");
var toPropertyKey = __webpack_require__("f9ed");
var hasOwn = __webpack_require__("338c");
var IE8_DOM_DEFINE = __webpack_require__("2ba7");

// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPropertyKey(P);
  if (IE8_DOM_DEFINE) try {
    return $getOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (hasOwn(O, P)) return createPropertyDescriptor(!call(propertyIsEnumerableModule.f, O, P), O[P]);
};


/***/ }),

/***/ "1ea2":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__("af9e");
var isObject = __webpack_require__("1c06");
var classof = __webpack_require__("ada5");
var ARRAY_BUFFER_NON_EXTENSIBLE = __webpack_require__("5d6e");

// eslint-disable-next-line es/no-object-isextensible -- safe
var $isExtensible = Object.isExtensible;
var FAILS_ON_PRIMITIVES = fails(function () { $isExtensible(1); });

// `Object.isExtensible` method
// https://tc39.es/ecma262/#sec-object.isextensible
module.exports = (FAILS_ON_PRIMITIVES || ARRAY_BUFFER_NON_EXTENSIBLE) ? function isExtensible(it) {
  if (!isObject(it)) return false;
  if (ARRAY_BUFFER_NON_EXTENSIBLE && classof(it) === 'ArrayBuffer') return false;
  return $isExtensible ? $isExtensible(it) : true;
} : $isExtensible;


/***/ }),

/***/ "1eb8":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// we can't use just `it == null` since of `document.all` special case
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
module.exports = function (it) {
  return it === null || it === undefined;
};


/***/ }),

/***/ "1fc1":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toLength = __webpack_require__("c435");

// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
module.exports = function (obj) {
  return toLength(obj.length);
};


/***/ }),

/***/ "223c":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("8bdb");
var global = __webpack_require__("85c1");
var call = __webpack_require__("71e9");
var uncurryThis = __webpack_require__("bb80");
var IS_PURE = __webpack_require__("a734");
var DESCRIPTORS = __webpack_require__("ab4a");
var NATIVE_SYMBOL = __webpack_require__("af71");
var fails = __webpack_require__("af9e");
var hasOwn = __webpack_require__("338c");
var isPrototypeOf = __webpack_require__("1297");
var anObject = __webpack_require__("e7e3");
var toIndexedObject = __webpack_require__("f660");
var toPropertyKey = __webpack_require__("f9ed");
var $toString = __webpack_require__("9e70");
var createPropertyDescriptor = __webpack_require__("0b5a");
var nativeObjectCreate = __webpack_require__("e37c");
var objectKeys = __webpack_require__("ff4f");
var getOwnPropertyNamesModule = __webpack_require__("80bb");
var getOwnPropertyNamesExternal = __webpack_require__("8449");
var getOwnPropertySymbolsModule = __webpack_require__("7d3c");
var getOwnPropertyDescriptorModule = __webpack_require__("1ded");
var definePropertyModule = __webpack_require__("d6b1");
var definePropertiesModule = __webpack_require__("a3fb");
var propertyIsEnumerableModule = __webpack_require__("346b");
var defineBuiltIn = __webpack_require__("81a9");
var defineBuiltInAccessor = __webpack_require__("e4ca");
var shared = __webpack_require__("8b3b");
var sharedKey = __webpack_require__("b223");
var hiddenKeys = __webpack_require__("11bf");
var uid = __webpack_require__("d7b4");
var wellKnownSymbol = __webpack_require__("8c08");
var wrappedWellKnownSymbolModule = __webpack_require__("9917");
var defineWellKnownSymbol = __webpack_require__("f259");
var defineSymbolToPrimitive = __webpack_require__("effb");
var setToStringTag = __webpack_require__("181d");
var InternalStateModule = __webpack_require__("235c");
var $forEach = __webpack_require__("4d16").forEach;

var HIDDEN = sharedKey('hidden');
var SYMBOL = 'Symbol';
var PROTOTYPE = 'prototype';

var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(SYMBOL);

var ObjectPrototype = Object[PROTOTYPE];
var $Symbol = global.Symbol;
var SymbolPrototype = $Symbol && $Symbol[PROTOTYPE];
var RangeError = global.RangeError;
var TypeError = global.TypeError;
var QObject = global.QObject;
var nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
var nativeDefineProperty = definePropertyModule.f;
var nativeGetOwnPropertyNames = getOwnPropertyNamesExternal.f;
var nativePropertyIsEnumerable = propertyIsEnumerableModule.f;
var push = uncurryThis([].push);

var AllSymbols = shared('symbols');
var ObjectPrototypeSymbols = shared('op-symbols');
var WellKnownSymbolsStore = shared('wks');

// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var USE_SETTER = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var fallbackDefineProperty = function (O, P, Attributes) {
  var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor(ObjectPrototype, P);
  if (ObjectPrototypeDescriptor) delete ObjectPrototype[P];
  nativeDefineProperty(O, P, Attributes);
  if (ObjectPrototypeDescriptor && O !== ObjectPrototype) {
    nativeDefineProperty(ObjectPrototype, P, ObjectPrototypeDescriptor);
  }
};

var setSymbolDescriptor = DESCRIPTORS && fails(function () {
  return nativeObjectCreate(nativeDefineProperty({}, 'a', {
    get: function () { return nativeDefineProperty(this, 'a', { value: 7 }).a; }
  })).a !== 7;
}) ? fallbackDefineProperty : nativeDefineProperty;

var wrap = function (tag, description) {
  var symbol = AllSymbols[tag] = nativeObjectCreate(SymbolPrototype);
  setInternalState(symbol, {
    type: SYMBOL,
    tag: tag,
    description: description
  });
  if (!DESCRIPTORS) symbol.description = description;
  return symbol;
};

var $defineProperty = function defineProperty(O, P, Attributes) {
  if (O === ObjectPrototype) $defineProperty(ObjectPrototypeSymbols, P, Attributes);
  anObject(O);
  var key = toPropertyKey(P);
  anObject(Attributes);
  if (hasOwn(AllSymbols, key)) {
    if (!Attributes.enumerable) {
      if (!hasOwn(O, HIDDEN)) nativeDefineProperty(O, HIDDEN, createPropertyDescriptor(1, nativeObjectCreate(null)));
      O[HIDDEN][key] = true;
    } else {
      if (hasOwn(O, HIDDEN) && O[HIDDEN][key]) O[HIDDEN][key] = false;
      Attributes = nativeObjectCreate(Attributes, { enumerable: createPropertyDescriptor(0, false) });
    } return setSymbolDescriptor(O, key, Attributes);
  } return nativeDefineProperty(O, key, Attributes);
};

var $defineProperties = function defineProperties(O, Properties) {
  anObject(O);
  var properties = toIndexedObject(Properties);
  var keys = objectKeys(properties).concat($getOwnPropertySymbols(properties));
  $forEach(keys, function (key) {
    if (!DESCRIPTORS || call($propertyIsEnumerable, properties, key)) $defineProperty(O, key, properties[key]);
  });
  return O;
};

var $create = function create(O, Properties) {
  return Properties === undefined ? nativeObjectCreate(O) : $defineProperties(nativeObjectCreate(O), Properties);
};

var $propertyIsEnumerable = function propertyIsEnumerable(V) {
  var P = toPropertyKey(V);
  var enumerable = call(nativePropertyIsEnumerable, this, P);
  if (this === ObjectPrototype && hasOwn(AllSymbols, P) && !hasOwn(ObjectPrototypeSymbols, P)) return false;
  return enumerable || !hasOwn(this, P) || !hasOwn(AllSymbols, P) || hasOwn(this, HIDDEN) && this[HIDDEN][P]
    ? enumerable : true;
};

var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(O, P) {
  var it = toIndexedObject(O);
  var key = toPropertyKey(P);
  if (it === ObjectPrototype && hasOwn(AllSymbols, key) && !hasOwn(ObjectPrototypeSymbols, key)) return;
  var descriptor = nativeGetOwnPropertyDescriptor(it, key);
  if (descriptor && hasOwn(AllSymbols, key) && !(hasOwn(it, HIDDEN) && it[HIDDEN][key])) {
    descriptor.enumerable = true;
  }
  return descriptor;
};

var $getOwnPropertyNames = function getOwnPropertyNames(O) {
  var names = nativeGetOwnPropertyNames(toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (!hasOwn(AllSymbols, key) && !hasOwn(hiddenKeys, key)) push(result, key);
  });
  return result;
};

var $getOwnPropertySymbols = function (O) {
  var IS_OBJECT_PROTOTYPE = O === ObjectPrototype;
  var names = nativeGetOwnPropertyNames(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (hasOwn(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || hasOwn(ObjectPrototype, key))) {
      push(result, AllSymbols[key]);
    }
  });
  return result;
};

// `Symbol` constructor
// https://tc39.es/ecma262/#sec-symbol-constructor
if (!NATIVE_SYMBOL) {
  $Symbol = function Symbol() {
    if (isPrototypeOf(SymbolPrototype, this)) throw new TypeError('Symbol is not a constructor');
    var description = !arguments.length || arguments[0] === undefined ? undefined : $toString(arguments[0]);
    var tag = uid(description);
    var setter = function (value) {
      var $this = this === undefined ? global : this;
      if ($this === ObjectPrototype) call(setter, ObjectPrototypeSymbols, value);
      if (hasOwn($this, HIDDEN) && hasOwn($this[HIDDEN], tag)) $this[HIDDEN][tag] = false;
      var descriptor = createPropertyDescriptor(1, value);
      try {
        setSymbolDescriptor($this, tag, descriptor);
      } catch (error) {
        if (!(error instanceof RangeError)) throw error;
        fallbackDefineProperty($this, tag, descriptor);
      }
    };
    if (DESCRIPTORS && USE_SETTER) setSymbolDescriptor(ObjectPrototype, tag, { configurable: true, set: setter });
    return wrap(tag, description);
  };

  SymbolPrototype = $Symbol[PROTOTYPE];

  defineBuiltIn(SymbolPrototype, 'toString', function toString() {
    return getInternalState(this).tag;
  });

  defineBuiltIn($Symbol, 'withoutSetter', function (description) {
    return wrap(uid(description), description);
  });

  propertyIsEnumerableModule.f = $propertyIsEnumerable;
  definePropertyModule.f = $defineProperty;
  definePropertiesModule.f = $defineProperties;
  getOwnPropertyDescriptorModule.f = $getOwnPropertyDescriptor;
  getOwnPropertyNamesModule.f = getOwnPropertyNamesExternal.f = $getOwnPropertyNames;
  getOwnPropertySymbolsModule.f = $getOwnPropertySymbols;

  wrappedWellKnownSymbolModule.f = function (name) {
    return wrap(wellKnownSymbol(name), name);
  };

  if (DESCRIPTORS) {
    // https://github.com/tc39/proposal-Symbol-description
    defineBuiltInAccessor(SymbolPrototype, 'description', {
      configurable: true,
      get: function description() {
        return getInternalState(this).description;
      }
    });
    if (!IS_PURE) {
      defineBuiltIn(ObjectPrototype, 'propertyIsEnumerable', $propertyIsEnumerable, { unsafe: true });
    }
  }
}

$({ global: true, constructor: true, wrap: true, forced: !NATIVE_SYMBOL, sham: !NATIVE_SYMBOL }, {
  Symbol: $Symbol
});

$forEach(objectKeys(WellKnownSymbolsStore), function (name) {
  defineWellKnownSymbol(name);
});

$({ target: SYMBOL, stat: true, forced: !NATIVE_SYMBOL }, {
  useSetter: function () { USE_SETTER = true; },
  useSimple: function () { USE_SETTER = false; }
});

$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL, sham: !DESCRIPTORS }, {
  // `Object.create` method
  // https://tc39.es/ecma262/#sec-object.create
  create: $create,
  // `Object.defineProperty` method
  // https://tc39.es/ecma262/#sec-object.defineproperty
  defineProperty: $defineProperty,
  // `Object.defineProperties` method
  // https://tc39.es/ecma262/#sec-object.defineproperties
  defineProperties: $defineProperties,
  // `Object.getOwnPropertyDescriptor` method
  // https://tc39.es/ecma262/#sec-object.getownpropertydescriptors
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor
});

$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL }, {
  // `Object.getOwnPropertyNames` method
  // https://tc39.es/ecma262/#sec-object.getownpropertynames
  getOwnPropertyNames: $getOwnPropertyNames
});

// `Symbol.prototype[@@toPrimitive]` method
// https://tc39.es/ecma262/#sec-symbol.prototype-@@toprimitive
defineSymbolToPrimitive();

// `Symbol.prototype[@@toStringTag]` property
// https://tc39.es/ecma262/#sec-symbol.prototype-@@tostringtag
setToStringTag($Symbol, SYMBOL);

hiddenKeys[HIDDEN] = true;


/***/ }),

/***/ "22b6":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("8bdb");
var $values = __webpack_require__("ea07").values;

// `Object.values` method
// https://tc39.es/ecma262/#sec-object.values
$({ target: 'Object', stat: true }, {
  values: function values(O) {
    return $values(O);
  }
});


/***/ }),

/***/ "235c":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var NATIVE_WEAK_MAP = __webpack_require__("a20b");
var global = __webpack_require__("85c1");
var isObject = __webpack_require__("1c06");
var createNonEnumerableProperty = __webpack_require__("6aca");
var hasOwn = __webpack_require__("338c");
var shared = __webpack_require__("9b55");
var sharedKey = __webpack_require__("b223");
var hiddenKeys = __webpack_require__("11bf");

var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var TypeError = global.TypeError;
var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw new TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP || shared.state) {
  var store = shared.state || (shared.state = new WeakMap());
  /* eslint-disable no-self-assign -- prototype methods protection */
  store.get = store.get;
  store.has = store.has;
  store.set = store.set;
  /* eslint-enable no-self-assign -- prototype methods protection */
  set = function (it, metadata) {
    if (store.has(it)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    store.set(it, metadata);
    return metadata;
  };
  get = function (it) {
    return store.get(it) || {};
  };
  has = function (it) {
    return store.has(it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    if (hasOwn(it, STATE)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return hasOwn(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return hasOwn(it, STATE);
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

/***/ "2378":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__("7ddb");
var $find = __webpack_require__("4d16").find;

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.find` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.find
exportTypedArrayMethod('find', function find(predicate /* , thisArg */) {
  return $find(aTypedArray(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
});


/***/ }),

/***/ "23e0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("8bdb");
var difference = __webpack_require__("70da");
var setMethodAcceptSetLike = __webpack_require__("45bf");

// `Set.prototype.difference` method
// https://github.com/tc39/proposal-set-methods
$({ target: 'Set', proto: true, real: true, forced: !setMethodAcceptSetLike('difference') }, {
  difference: difference
});


/***/ }),

/***/ "23f4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__("ab4a");
var global = __webpack_require__("85c1");
var uncurryThis = __webpack_require__("bb80");
var isForced = __webpack_require__("8466");
var inheritIfRequired = __webpack_require__("dcda");
var createNonEnumerableProperty = __webpack_require__("6aca");
var create = __webpack_require__("e37c");
var getOwnPropertyNames = __webpack_require__("80bb").f;
var isPrototypeOf = __webpack_require__("1297");
var isRegExp = __webpack_require__("e629");
var toString = __webpack_require__("9e70");
var getRegExpFlags = __webpack_require__("52ac");
var stickyHelpers = __webpack_require__("edb7");
var proxyAccessor = __webpack_require__("e157");
var defineBuiltIn = __webpack_require__("81a9");
var fails = __webpack_require__("af9e");
var hasOwn = __webpack_require__("338c");
var enforceInternalState = __webpack_require__("235c").enforce;
var setSpecies = __webpack_require__("437f");
var wellKnownSymbol = __webpack_require__("8c08");
var UNSUPPORTED_DOT_ALL = __webpack_require__("b0a8");
var UNSUPPORTED_NCG = __webpack_require__("cca9");

var MATCH = wellKnownSymbol('match');
var NativeRegExp = global.RegExp;
var RegExpPrototype = NativeRegExp.prototype;
var SyntaxError = global.SyntaxError;
var exec = uncurryThis(RegExpPrototype.exec);
var charAt = uncurryThis(''.charAt);
var replace = uncurryThis(''.replace);
var stringIndexOf = uncurryThis(''.indexOf);
var stringSlice = uncurryThis(''.slice);
// TODO: Use only proper RegExpIdentifierName
var IS_NCG = /^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/;
var re1 = /a/g;
var re2 = /a/g;

// "new" should create a new object, old webkit bug
var CORRECT_NEW = new NativeRegExp(re1) !== re1;

var MISSED_STICKY = stickyHelpers.MISSED_STICKY;
var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y;

var BASE_FORCED = DESCRIPTORS &&
  (!CORRECT_NEW || MISSED_STICKY || UNSUPPORTED_DOT_ALL || UNSUPPORTED_NCG || fails(function () {
    re2[MATCH] = false;
    // RegExp constructor can alter flags and IsRegExp works correct with @@match
    return NativeRegExp(re1) !== re1 || NativeRegExp(re2) === re2 || String(NativeRegExp(re1, 'i')) !== '/a/i';
  }));

var handleDotAll = function (string) {
  var length = string.length;
  var index = 0;
  var result = '';
  var brackets = false;
  var chr;
  for (; index <= length; index++) {
    chr = charAt(string, index);
    if (chr === '\\') {
      result += chr + charAt(string, ++index);
      continue;
    }
    if (!brackets && chr === '.') {
      result += '[\\s\\S]';
    } else {
      if (chr === '[') {
        brackets = true;
      } else if (chr === ']') {
        brackets = false;
      } result += chr;
    }
  } return result;
};

var handleNCG = function (string) {
  var length = string.length;
  var index = 0;
  var result = '';
  var named = [];
  var names = create(null);
  var brackets = false;
  var ncg = false;
  var groupid = 0;
  var groupname = '';
  var chr;
  for (; index <= length; index++) {
    chr = charAt(string, index);
    if (chr === '\\') {
      chr += charAt(string, ++index);
    } else if (chr === ']') {
      brackets = false;
    } else if (!brackets) switch (true) {
      case chr === '[':
        brackets = true;
        break;
      case chr === '(':
        if (exec(IS_NCG, stringSlice(string, index + 1))) {
          index += 2;
          ncg = true;
        }
        result += chr;
        groupid++;
        continue;
      case chr === '>' && ncg:
        if (groupname === '' || hasOwn(names, groupname)) {
          throw new SyntaxError('Invalid capture group name');
        }
        names[groupname] = true;
        named[named.length] = [groupname, groupid];
        ncg = false;
        groupname = '';
        continue;
    }
    if (ncg) groupname += chr;
    else result += chr;
  } return [result, named];
};

// `RegExp` constructor
// https://tc39.es/ecma262/#sec-regexp-constructor
if (isForced('RegExp', BASE_FORCED)) {
  var RegExpWrapper = function RegExp(pattern, flags) {
    var thisIsRegExp = isPrototypeOf(RegExpPrototype, this);
    var patternIsRegExp = isRegExp(pattern);
    var flagsAreUndefined = flags === undefined;
    var groups = [];
    var rawPattern = pattern;
    var rawFlags, dotAll, sticky, handled, result, state;

    if (!thisIsRegExp && patternIsRegExp && flagsAreUndefined && pattern.constructor === RegExpWrapper) {
      return pattern;
    }

    if (patternIsRegExp || isPrototypeOf(RegExpPrototype, pattern)) {
      pattern = pattern.source;
      if (flagsAreUndefined) flags = getRegExpFlags(rawPattern);
    }

    pattern = pattern === undefined ? '' : toString(pattern);
    flags = flags === undefined ? '' : toString(flags);
    rawPattern = pattern;

    if (UNSUPPORTED_DOT_ALL && 'dotAll' in re1) {
      dotAll = !!flags && stringIndexOf(flags, 's') > -1;
      if (dotAll) flags = replace(flags, /s/g, '');
    }

    rawFlags = flags;

    if (MISSED_STICKY && 'sticky' in re1) {
      sticky = !!flags && stringIndexOf(flags, 'y') > -1;
      if (sticky && UNSUPPORTED_Y) flags = replace(flags, /y/g, '');
    }

    if (UNSUPPORTED_NCG) {
      handled = handleNCG(pattern);
      pattern = handled[0];
      groups = handled[1];
    }

    result = inheritIfRequired(NativeRegExp(pattern, flags), thisIsRegExp ? this : RegExpPrototype, RegExpWrapper);

    if (dotAll || sticky || groups.length) {
      state = enforceInternalState(result);
      if (dotAll) {
        state.dotAll = true;
        state.raw = RegExpWrapper(handleDotAll(pattern), rawFlags);
      }
      if (sticky) state.sticky = true;
      if (groups.length) state.groups = groups;
    }

    if (pattern !== rawPattern) try {
      // fails in old engines, but we have no alternatives for unsupported regex syntax
      createNonEnumerableProperty(result, 'source', rawPattern === '' ? '(?:)' : rawPattern);
    } catch (error) { /* empty */ }

    return result;
  };

  for (var keys = getOwnPropertyNames(NativeRegExp), index = 0; keys.length > index;) {
    proxyAccessor(RegExpWrapper, NativeRegExp, keys[index++]);
  }

  RegExpPrototype.constructor = RegExpWrapper;
  RegExpWrapper.prototype = RegExpPrototype;
  defineBuiltIn(global, 'RegExp', RegExpWrapper, { constructor: true });
}

// https://tc39.es/ecma262/#sec-get-regexp-@@species
setSpecies('RegExp');


/***/ }),

/***/ "253d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("8bdb");
var getBuiltIn = __webpack_require__("6aa6");
var IS_PURE = __webpack_require__("a734");
var NativePromiseConstructor = __webpack_require__("69e4");
var FORCED_PROMISE_CONSTRUCTOR = __webpack_require__("1052").CONSTRUCTOR;
var promiseResolve = __webpack_require__("f491");

var PromiseConstructorWrapper = getBuiltIn('Promise');
var CHECK_WRAPPER = IS_PURE && !FORCED_PROMISE_CONSTRUCTOR;

// `Promise.resolve` method
// https://tc39.es/ecma262/#sec-promise.resolve
$({ target: 'Promise', stat: true, forced: IS_PURE || FORCED_PROMISE_CONSTRUCTOR }, {
  resolve: function resolve(x) {
    return promiseResolve(CHECK_WRAPPER && this === PromiseConstructorWrapper ? NativePromiseConstructor : this, x);
  }
});


/***/ }),

/***/ "25ed":
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

/***/ "25fc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BottomOverlay_vue_vue_type_style_index_0_id_10321bd4_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("9ad7");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BottomOverlay_vue_vue_type_style_index_0_id_10321bd4_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BottomOverlay_vue_vue_type_style_index_0_id_10321bd4_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "2797":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__("85c1");
var DOMIterables = __webpack_require__("3de7");
var DOMTokenListPrototype = __webpack_require__("fb6b");
var forEach = __webpack_require__("f3f2");
var createNonEnumerableProperty = __webpack_require__("6aca");

var handlePrototype = function (CollectionPrototype) {
  // some Chrome versions have non-configurable methods on DOMTokenList
  if (CollectionPrototype && CollectionPrototype.forEach !== forEach) try {
    createNonEnumerableProperty(CollectionPrototype, 'forEach', forEach);
  } catch (error) {
    CollectionPrototype.forEach = forEach;
  }
};

for (var COLLECTION_NAME in DOMIterables) {
  if (DOMIterables[COLLECTION_NAME]) {
    handlePrototype(global[COLLECTION_NAME] && global[COLLECTION_NAME].prototype);
  }
}

handlePrototype(DOMTokenListPrototype);


/***/ }),

/***/ "29ba":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var wellKnownSymbol = __webpack_require__("8c08");

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
  // eslint-disable-next-line es/no-array-from, no-throw-literal -- required for testing
  Array.from(iteratorWithReturn, function () { throw 2; });
} catch (error) { /* empty */ }

module.exports = function (exec, SKIP_CLOSING) {
  try {
    if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
  } catch (error) { return false; } // workaround of old WebKit + `eval` bug
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

/***/ "29d8":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = typeof navigator != 'undefined' && String(navigator.userAgent) || '';


/***/ }),

/***/ "2af7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__("bb80");
var requireObjectCoercible = __webpack_require__("862c");
var toString = __webpack_require__("9e70");

var quot = /"/g;
var replace = uncurryThis(''.replace);

// `CreateHTML` abstract operation
// https://tc39.es/ecma262/#sec-createhtml
module.exports = function (string, tag, attribute, value) {
  var S = toString(requireObjectCoercible(string));
  var p1 = '<' + tag;
  if (attribute !== '') p1 += ' ' + attribute + '="' + replace(toString(value), quot, '&quot;') + '"';
  return p1 + '>' + S + '</' + tag + '>';
};


/***/ }),

/***/ "2b04":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__("af9e");

module.exports = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call -- required for testing
    method.call(null, argument || function () { return 1; }, 1);
  });
};


/***/ }),

/***/ "2ba7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__("ab4a");
var fails = __webpack_require__("af9e");
var createElement = __webpack_require__("3f57");

// Thanks to IE8 for its funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a !== 7;
});


/***/ }),

/***/ "2bb3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var userAgent = __webpack_require__("29d8");

// eslint-disable-next-line redos/no-vulnerable -- safe
module.exports = /(?:ipad|iphone|ipod).*applewebkit/i.test(userAgent);


/***/ }),

/***/ "2bcb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("8bdb");
var parseFloat = __webpack_require__("a9ee");

// `Number.parseFloat` method
// https://tc39.es/ecma262/#sec-number.parseFloat
// eslint-disable-next-line es/no-number-parsefloat -- required for testing
$({ target: 'Number', stat: true, forced: Number.parseFloat !== parseFloat }, {
  parseFloat: parseFloat
});


/***/ }),

/***/ "2c10":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var call = __webpack_require__("71e9");
var fixRegExpWellKnownSymbolLogic = __webpack_require__("7edc");
var anObject = __webpack_require__("e7e3");
var isNullOrUndefined = __webpack_require__("1eb8");
var toLength = __webpack_require__("c435");
var toString = __webpack_require__("9e70");
var requireObjectCoercible = __webpack_require__("862c");
var getMethod = __webpack_require__("60bc");
var advanceStringIndex = __webpack_require__("03dc");
var regExpExec = __webpack_require__("07da");

// @@match logic
fixRegExpWellKnownSymbolLogic('match', function (MATCH, nativeMatch, maybeCallNative) {
  return [
    // `String.prototype.match` method
    // https://tc39.es/ecma262/#sec-string.prototype.match
    function match(regexp) {
      var O = requireObjectCoercible(this);
      var matcher = isNullOrUndefined(regexp) ? undefined : getMethod(regexp, MATCH);
      return matcher ? call(matcher, regexp, O) : new RegExp(regexp)[MATCH](toString(O));
    },
    // `RegExp.prototype[@@match]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@match
    function (string) {
      var rx = anObject(this);
      var S = toString(string);
      var res = maybeCallNative(nativeMatch, rx, S);

      if (res.done) return res.value;

      if (!rx.global) return regExpExec(rx, S);

      var fullUnicode = rx.unicode;
      rx.lastIndex = 0;
      var A = [];
      var n = 0;
      var result;
      while ((result = regExpExec(rx, S)) !== null) {
        var matchStr = toString(result[0]);
        A[n] = matchStr;
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
        n++;
      }
      return n === 0 ? null : A;
    }
  ];
});


/***/ }),

/***/ "2c40":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var aSet = __webpack_require__("7a0a");
var SetHelpers = __webpack_require__("41d3");
var clone = __webpack_require__("7611");
var getSetRecord = __webpack_require__("c108");
var iterateSimple = __webpack_require__("4053");

var add = SetHelpers.add;
var has = SetHelpers.has;
var remove = SetHelpers.remove;

// `Set.prototype.symmetricDifference` method
// https://github.com/tc39/proposal-set-methods
module.exports = function symmetricDifference(other) {
  var O = aSet(this);
  var keysIter = getSetRecord(other).getIterator();
  var result = clone(O);
  iterateSimple(keysIter, function (e) {
    if (has(O, e)) remove(result, e);
    else add(result, e);
  });
  return result;
};


/***/ }),

/***/ "2c57":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__("85c1");
var fails = __webpack_require__("af9e");
var uncurryThis = __webpack_require__("bb80");
var toString = __webpack_require__("9e70");
var trim = __webpack_require__("ee98").trim;
var whitespaces = __webpack_require__("f072");

var $parseInt = global.parseInt;
var Symbol = global.Symbol;
var ITERATOR = Symbol && Symbol.iterator;
var hex = /^[+-]?0x/i;
var exec = uncurryThis(hex.exec);
var FORCED = $parseInt(whitespaces + '08') !== 8 || $parseInt(whitespaces + '0x16') !== 22
  // MS Edge 18- broken with boxed symbols
  || (ITERATOR && !fails(function () { $parseInt(Object(ITERATOR)); }));

// `parseInt` method
// https://tc39.es/ecma262/#sec-parseint-string-radix
module.exports = FORCED ? function parseInt(string, radix) {
  var S = trim(toString(string));
  return $parseInt(S, (radix >>> 0) || (exec(hex, S) ? 16 : 10));
} : $parseInt;


/***/ }),

/***/ "2c61":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__("85c1");
var apply = __webpack_require__("9f9e");
var bind = __webpack_require__("ae5c");
var isCallable = __webpack_require__("474f");
var hasOwn = __webpack_require__("338c");
var fails = __webpack_require__("af9e");
var html = __webpack_require__("3794");
var arraySlice = __webpack_require__("37ad");
var createElement = __webpack_require__("3f57");
var validateArgumentsLength = __webpack_require__("7f28");
var IS_IOS = __webpack_require__("2bb3");
var IS_NODE = __webpack_require__("db06");

var set = global.setImmediate;
var clear = global.clearImmediate;
var process = global.process;
var Dispatch = global.Dispatch;
var Function = global.Function;
var MessageChannel = global.MessageChannel;
var String = global.String;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var $location, defer, channel, port;

fails(function () {
  // Deno throws a ReferenceError on `location` access without `--location` flag
  $location = global.location;
});

var run = function (id) {
  if (hasOwn(queue, id)) {
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

var eventListener = function (event) {
  run(event.data);
};

var globalPostMessageDefer = function (id) {
  // old engines have not location.origin
  global.postMessage(String(id), $location.protocol + '//' + $location.host);
};

// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!set || !clear) {
  set = function setImmediate(handler) {
    validateArgumentsLength(arguments.length, 1);
    var fn = isCallable(handler) ? handler : Function(handler);
    var args = arraySlice(arguments, 1);
    queue[++counter] = function () {
      apply(fn, undefined, args);
    };
    defer(counter);
    return counter;
  };
  clear = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (IS_NODE) {
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
    channel.port1.onmessage = eventListener;
    defer = bind(port.postMessage, port);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (
    global.addEventListener &&
    isCallable(global.postMessage) &&
    !global.importScripts &&
    $location && $location.protocol !== 'file:' &&
    !fails(globalPostMessageDefer)
  ) {
    defer = globalPostMessageDefer;
    global.addEventListener('message', eventListener, false);
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

/***/ "30b2":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__("85c1");
var tryNodeRequire = __webpack_require__("7257");
var PROPER_STRUCTURED_CLONE_TRANSFER = __webpack_require__("679f");

var structuredClone = global.structuredClone;
var $ArrayBuffer = global.ArrayBuffer;
var $MessageChannel = global.MessageChannel;
var detach = false;
var WorkerThreads, channel, buffer, $detach;

if (PROPER_STRUCTURED_CLONE_TRANSFER) {
  detach = function (transferable) {
    structuredClone(transferable, { transfer: [transferable] });
  };
} else if ($ArrayBuffer) try {
  if (!$MessageChannel) {
    WorkerThreads = tryNodeRequire('worker_threads');
    if (WorkerThreads) $MessageChannel = WorkerThreads.MessageChannel;
  }

  if ($MessageChannel) {
    channel = new $MessageChannel();
    buffer = new $ArrayBuffer(2);

    $detach = function (transferable) {
      channel.port1.postMessage(null, [transferable]);
    };

    if (buffer.byteLength === 2) {
      $detach(buffer);
      if (buffer.byteLength === 0) detach = $detach;
    }
  }
} catch (error) { /* empty */ }

module.exports = detach;


/***/ }),

/***/ "3200":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// TODO: Remove from `core-js@4`
__webpack_require__("23e0");


/***/ }),

/***/ "323c":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__("7ddb");
var speciesConstructor = __webpack_require__("5dfa");

var aTypedArrayConstructor = ArrayBufferViewCore.aTypedArrayConstructor;
var getTypedArrayConstructor = ArrayBufferViewCore.getTypedArrayConstructor;

// a part of `TypedArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#typedarray-species-create
module.exports = function (originalArray) {
  return aTypedArrayConstructor(speciesConstructor(originalArray, getTypedArrayConstructor(originalArray)));
};


/***/ }),

/***/ "3242":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var arraySpeciesConstructor = __webpack_require__("17fc");

// `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray, length) {
  return new (arraySpeciesConstructor(originalArray))(length === 0 ? 0 : length);
};


/***/ }),

/***/ "327b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("8bdb");
var $transfer = __webpack_require__("0854");

// `ArrayBuffer.prototype.transfer` method
// https://tc39.es/proposal-arraybuffer-transfer/#sec-arraybuffer.prototype.transfer
if ($transfer) $({ target: 'ArrayBuffer', proto: true }, {
  transfer: function transfer() {
    return $transfer(this, arguments.length ? arguments[0] : undefined, true);
  }
});


/***/ }),

/***/ "3329":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Tooltip_vue_vue_type_style_index_0_id_2a3055e0_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("9aad");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Tooltip_vue_vue_type_style_index_0_id_2a3055e0_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Tooltip_vue_vue_type_style_index_0_id_2a3055e0_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "338c":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__("bb80");
var toObject = __webpack_require__("1099");

var hasOwnProperty = uncurryThis({}.hasOwnProperty);

// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es/no-object-hasown -- safe
module.exports = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty(toObject(it), key);
};


/***/ }),

/***/ "346b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $propertyIsEnumerable = {}.propertyIsEnumerable;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;


/***/ }),

/***/ "3611":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "3794":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var getBuiltIn = __webpack_require__("6aa6");

module.exports = getBuiltIn('document', 'documentElement');


/***/ }),

/***/ "37ad":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__("bb80");

module.exports = uncurryThis([].slice);


/***/ }),

/***/ "3872":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var defineWellKnownSymbol = __webpack_require__("f259");

// `Symbol.asyncIterator` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.asynciterator
defineWellKnownSymbol('asyncIterator');


/***/ }),

/***/ "393d":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (true) {
    var getCurrentScript = __webpack_require__("a944")
    currentScript = getCurrentScript()

    // for backward compatibility, because previously we directly included the polyfill
    if (!('currentScript' in document)) {
      Object.defineProperty(document, 'currentScript', { get: getCurrentScript })
    }
  }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__("c223");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.ends-with.js
var es_string_ends_with = __webpack_require__("9327");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.self.js
var web_self = __webpack_require__("c26d");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"6f718cbb-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Account.vue?vue&type=template&id=579aeff3&scoped=true
var Accountvue_type_template_id_579aeff3_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"account",class:[{ editable: _vm.editable }, _vm.layout, {cashlink: _vm.displayAsCashlink}]},[_c('div',{staticClass:"identicon-and-label"},[(_vm.showImage)?_c('img',{staticClass:"identicon account-image",attrs:{"src":_vm.image},on:{"error":function($event){_vm.showImage = false}}}):(_vm.displayAsCashlink)?_c('div',{staticClass:"identicon"},[_c('div',{staticClass:"nq-blue-bg"},[_c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 64 64","fill":"none","stroke":"white","stroke-linecap":"round","stroke-width":"2.5"}},[_c('path',{attrs:{"d":"M40.25 23.25v-.5a6.5 6.5 0 0 0-6.5-6.5h-3.5a6.5 6.5 0 0 0-6.5 6.5v6.5a6.5 6.5 0 0 0 6.5 6.5h2"}}),_c('path',{attrs:{"d":"M23.75 40.75v.5a6.5 6.5 0 0 0 6.5 6.5h3.5a6.5 6.5 0 0 0 6.5-6.5v-6.5a6.5 6.5 0 0 0-6.5-6.5h-2"}}),_c('path',{attrs:{"d":"M32 11.25v4M32 48.75v4"}})])])]):(_vm._isNimiqAddress)?_c('Identicon',{attrs:{"address":_vm.address}}):_vm._e(),(!_vm.editable)?_c('div',{staticClass:"label",class:{ 'address-font': _vm._isLabelNimiqAddress }},[_vm._v(_vm._s(_vm.label))]):_c('div',{staticClass:"label editable",class:{ 'address-font': _vm._isLabelNimiqAddress }},[_c('LabelInput',{ref:"label",attrs:{"maxBytes":63,"value":_vm.label,"placeholder":_vm.placeholder},on:{"input":_vm.changed}})],1),(_vm.layout === 'column' && _vm.walletLabel)?_c('div',{staticClass:"nq-label wallet-label"},[_vm._v(_vm._s(_vm.walletLabel))]):_vm._e()],1),(_vm.balance || _vm.balance === 0)?_c('Amount',{staticClass:"balance",attrs:{"amount":_vm.balance,"decimals":_vm.decimals}}):_vm._e()],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Account.vue?vue&type=template&id=579aeff3&scoped=true

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.error.cause.js
var es_error_cause = __webpack_require__("7a76");

// CONCATENATED MODULE: ./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js

function _classCallCheck(a, n) {
  if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.js
var es_symbol = __webpack_require__("01a2");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.description.js
var es_symbol_description = __webpack_require__("e39c");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.iterator.js
var es_symbol_iterator = __webpack_require__("844d");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.iterator.js
var es_array_iterator = __webpack_require__("6bfa");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__("bf0f");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.iterator.js
var es_string_iterator = __webpack_require__("18f7");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__("de6c");

// CONCATENATED MODULE: ./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/helpers/esm/typeof.js







function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.to-primitive.js
var es_symbol_to_primitive = __webpack_require__("9e15");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.date.to-primitive.js
var es_date_to_primitive = __webpack_require__("884b");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.constructor.js
var es_number_constructor = __webpack_require__("64aa");

// CONCATENATED MODULE: ./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/helpers/esm/toPrimitive.js





function toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}

// CONCATENATED MODULE: ./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/helpers/esm/toPropertyKey.js


function toPropertyKey(t) {
  var i = toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : i + "";
}

// CONCATENATED MODULE: ./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/helpers/esm/createClass.js

function _defineProperties(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, toPropertyKey(o.key), o);
  }
}
function _createClass(e, r, t) {
  return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.reflect.construct.js
var es_reflect_construct = __webpack_require__("6a88");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-prototype-of.js
var es_object_get_prototype_of = __webpack_require__("926e");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.proto.js
var es_object_proto = __webpack_require__("53db");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.set-prototype-of.js
var es_object_set_prototype_of = __webpack_require__("8a8d");

// CONCATENATED MODULE: ./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js



function _getPrototypeOf(t) {
  return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, _getPrototypeOf(t);
}

// CONCATENATED MODULE: ./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js

function _isNativeReflectConstruct() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch (t) {}
  return (_isNativeReflectConstruct = function _isNativeReflectConstruct() {
    return !!t;
  })();
}

// CONCATENATED MODULE: ./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js

function _assertThisInitialized(e) {
  if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}

// CONCATENATED MODULE: ./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js



function _possibleConstructorReturn(t, e) {
  if (e && ("object" == _typeof(e) || "function" == typeof e)) return e;
  if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
  return _assertThisInitialized(t);
}

// CONCATENATED MODULE: ./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/helpers/esm/callSuper.js




function _callSuper(t, o, e) {
  return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
}

// CONCATENATED MODULE: ./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js


function _setPrototypeOf(t, e) {
  return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
    return t.__proto__ = e, t;
  }, _setPrototypeOf(t, e);
}

// CONCATENATED MODULE: ./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/helpers/esm/inherits.js


function _inherits(t, e) {
  if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: t,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(t, "prototype", {
    writable: !1
  }), e && _setPrototypeOf(t, e);
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
var external_vue_property_decorator_ = __webpack_require__("6969");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"6f718cbb-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Identicon.vue?vue&type=template&id=74cb1635&scoped=true
var Identiconvue_type_template_id_74cb1635_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"identicon"},[_c('img',{attrs:{"src":_vm.dataUrl}})])}
var Identiconvue_type_template_id_74cb1635_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Identicon.vue?vue&type=template&id=74cb1635&scoped=true

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.async-iterator.js
var es_symbol_async_iterator = __webpack_require__("3872");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.to-string-tag.js
var es_symbol_to_string_tag = __webpack_require__("4e9b");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.push.js
var es_array_push = __webpack_require__("aa9c");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.slice.js
var es_array_slice = __webpack_require__("f7a5");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__("618f");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.json.to-string-tag.js
var es_json_to_string_tag = __webpack_require__("114e");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.math.to-string-tag.js
var es_math_to_string_tag = __webpack_require__("c240");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.promise.js
var es_promise = __webpack_require__("e5f2");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__("2797");

// CONCATENATED MODULE: ./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js





















function _regeneratorRuntime() {
  "use strict";

  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
  _regeneratorRuntime = function _regeneratorRuntime() {
    return e;
  };
  var t,
    e = {},
    r = Object.prototype,
    n = r.hasOwnProperty,
    o = Object.defineProperty || function (t, e, r) {
      t[e] = r.value;
    },
    i = "function" == typeof Symbol ? Symbol : {},
    a = i.iterator || "@@iterator",
    c = i.asyncIterator || "@@asyncIterator",
    u = i.toStringTag || "@@toStringTag";
  function define(t, e, r) {
    return Object.defineProperty(t, e, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), t[e];
  }
  try {
    define({}, "");
  } catch (t) {
    define = function define(t, e, r) {
      return t[e] = r;
    };
  }
  function wrap(t, e, r, n) {
    var i = e && e.prototype instanceof Generator ? e : Generator,
      a = Object.create(i.prototype),
      c = new Context(n || []);
    return o(a, "_invoke", {
      value: makeInvokeMethod(t, r, c)
    }), a;
  }
  function tryCatch(t, e, r) {
    try {
      return {
        type: "normal",
        arg: t.call(e, r)
      };
    } catch (t) {
      return {
        type: "throw",
        arg: t
      };
    }
  }
  e.wrap = wrap;
  var h = "suspendedStart",
    l = "suspendedYield",
    f = "executing",
    s = "completed",
    y = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var p = {};
  define(p, a, function () {
    return this;
  });
  var d = Object.getPrototypeOf,
    v = d && d(d(values([])));
  v && v !== r && n.call(v, a) && (p = v);
  var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p);
  function defineIteratorMethods(t) {
    ["next", "throw", "return"].forEach(function (e) {
      define(t, e, function (t) {
        return this._invoke(e, t);
      });
    });
  }
  function AsyncIterator(t, e) {
    function invoke(r, o, i, a) {
      var c = tryCatch(t[r], t, o);
      if ("throw" !== c.type) {
        var u = c.arg,
          h = u.value;
        return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) {
          invoke("next", t, i, a);
        }, function (t) {
          invoke("throw", t, i, a);
        }) : e.resolve(h).then(function (t) {
          u.value = t, i(u);
        }, function (t) {
          return invoke("throw", t, i, a);
        });
      }
      a(c.arg);
    }
    var r;
    o(this, "_invoke", {
      value: function value(t, n) {
        function callInvokeWithMethodAndArg() {
          return new e(function (e, r) {
            invoke(t, n, e, r);
          });
        }
        return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }
    });
  }
  function makeInvokeMethod(e, r, n) {
    var o = h;
    return function (i, a) {
      if (o === f) throw Error("Generator is already running");
      if (o === s) {
        if ("throw" === i) throw a;
        return {
          value: t,
          done: !0
        };
      }
      for (n.method = i, n.arg = a;;) {
        var c = n.delegate;
        if (c) {
          var u = maybeInvokeDelegate(c, n);
          if (u) {
            if (u === y) continue;
            return u;
          }
        }
        if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) {
          if (o === h) throw o = s, n.arg;
          n.dispatchException(n.arg);
        } else "return" === n.method && n.abrupt("return", n.arg);
        o = f;
        var p = tryCatch(e, r, n);
        if ("normal" === p.type) {
          if (o = n.done ? s : l, p.arg === y) continue;
          return {
            value: p.arg,
            done: n.done
          };
        }
        "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg);
      }
    };
  }
  function maybeInvokeDelegate(e, r) {
    var n = r.method,
      o = e.iterator[n];
    if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y;
    var i = tryCatch(o, e.iterator, r.arg);
    if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y;
    var a = i.arg;
    return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y);
  }
  function pushTryEntry(t) {
    var e = {
      tryLoc: t[0]
    };
    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
  }
  function resetTryEntry(t) {
    var e = t.completion || {};
    e.type = "normal", delete e.arg, t.completion = e;
  }
  function Context(t) {
    this.tryEntries = [{
      tryLoc: "root"
    }], t.forEach(pushTryEntry, this), this.reset(!0);
  }
  function values(e) {
    if (e || "" === e) {
      var r = e[a];
      if (r) return r.call(e);
      if ("function" == typeof e.next) return e;
      if (!isNaN(e.length)) {
        var o = -1,
          i = function next() {
            for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next;
            return next.value = t, next.done = !0, next;
          };
        return i.next = i;
      }
    }
    throw new TypeError(_typeof(e) + " is not iterable");
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", {
    value: GeneratorFunctionPrototype,
    configurable: !0
  }), o(GeneratorFunctionPrototype, "constructor", {
    value: GeneratorFunction,
    configurable: !0
  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) {
    var e = "function" == typeof t && t.constructor;
    return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name));
  }, e.mark = function (t) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t;
  }, e.awrap = function (t) {
    return {
      __await: t
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () {
    return this;
  }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) {
    void 0 === i && (i = Promise);
    var a = new AsyncIterator(wrap(t, r, n, o), i);
    return e.isGeneratorFunction(r) ? a : a.next().then(function (t) {
      return t.done ? t.value : a.next();
    });
  }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () {
    return this;
  }), define(g, "toString", function () {
    return "[object Generator]";
  }), e.keys = function (t) {
    var e = Object(t),
      r = [];
    for (var n in e) r.push(n);
    return r.reverse(), function next() {
      for (; r.length;) {
        var t = r.pop();
        if (t in e) return next.value = t, next.done = !1, next;
      }
      return next.done = !0, next;
    };
  }, e.values = values, Context.prototype = {
    constructor: Context,
    reset: function reset(e) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
    },
    stop: function stop() {
      this.done = !0;
      var t = this.tryEntries[0].completion;
      if ("throw" === t.type) throw t.arg;
      return this.rval;
    },
    dispatchException: function dispatchException(e) {
      if (this.done) throw e;
      var r = this;
      function handle(n, o) {
        return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o;
      }
      for (var o = this.tryEntries.length - 1; o >= 0; --o) {
        var i = this.tryEntries[o],
          a = i.completion;
        if ("root" === i.tryLoc) return handle("end");
        if (i.tryLoc <= this.prev) {
          var c = n.call(i, "catchLoc"),
            u = n.call(i, "finallyLoc");
          if (c && u) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          } else if (c) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
          } else {
            if (!u) throw Error("try statement without catch or finally");
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          }
        }
      }
    },
    abrupt: function abrupt(t, e) {
      for (var r = this.tryEntries.length - 1; r >= 0; --r) {
        var o = this.tryEntries[r];
        if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
          var i = o;
          break;
        }
      }
      i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
      var a = i ? i.completion : {};
      return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a);
    },
    complete: function complete(t, e) {
      if ("throw" === t.type) throw t.arg;
      return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y;
    },
    finish: function finish(t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y;
      }
    },
    "catch": function _catch(t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.tryLoc === t) {
          var n = r.completion;
          if ("throw" === n.type) {
            var o = n.arg;
            resetTryEntry(r);
          }
          return o;
        }
      }
      throw Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(e, r, n) {
      return this.delegate = {
        iterator: values(e),
        resultName: r,
        nextLoc: n
      }, "next" === this.method && (this.arg = t), y;
    }
  }, e;
}

// CONCATENATED MODULE: ./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js


function asyncGeneratorStep(n, t, e, r, o, a, c) {
  try {
    var i = n[a](c),
      u = i.value;
  } catch (n) {
    return void e(n);
  }
  i.done ? t(u) : Promise.resolve(u).then(r, o);
}
function _asyncToGenerator(n) {
  return function () {
    var t = this,
      e = arguments;
    return new Promise(function (r, o) {
      var a = n.apply(t, e);
      function _next(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, "next", n);
      }
      function _throw(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, "throw", n);
      }
      _next(void 0);
    });
  };
}

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__("5c47");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.replace.js
var es_string_replace = __webpack_require__("a1c1");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.includes.js
var es_array_includes = __webpack_require__("4626");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.join.js
var es_array_join = __webpack_require__("a0b7");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.map.js
var es_array_map = __webpack_require__("fd3c");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.to-string.js
var es_regexp_to_string = __webpack_require__("ab80");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.includes.js
var es_string_includes = __webpack_require__("5ac7");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.atob.js
var web_atob = __webpack_require__("15d1");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-exception.constructor.js
var web_dom_exception_constructor = __webpack_require__("d5c6");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-exception.stack.js
var web_dom_exception_stack = __webpack_require__("5a56");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-exception.to-string-tag.js
var web_dom_exception_to_string_tag = __webpack_require__("f074");

// CONCATENATED MODULE: ./node_modules/@nimiq/utils/dist/module/ValidationUtils.js















var ValidationUtils_ValidationUtils = /*#__PURE__*/function () {
  function ValidationUtils() {
    _classCallCheck(this, ValidationUtils);
  }
  return _createClass(ValidationUtils, null, [{
    key: "isValidAddress",
    value: function isValidAddress(address) {
      if (!address) return false;
      try {
        this.isUserFriendlyAddress(address);
        return true;
      } catch (e) {
        return false;
      }
    }
  }, {
    key: "normalizeAddress",
    value: function normalizeAddress(address) {
      return address.toUpperCase() // format as uppercase
      .replace(/[\s+-]|%20/g, '') // strip spaces and dashes
      .replace(/(.)(?=(.{4})+$)/g, '$1 '); // reformat with spaces, forming blocks of 4 chars
    }
    // Copied from: https://github.com/nimiq-network/core/blob/master/src/main/generic/consensus/base/account/Address.js
  }, {
    key: "isUserFriendlyAddress",
    value: function isUserFriendlyAddress(str) {
      if (!str) return;
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
  }, {
    key: "_alphabetCheck",
    value: function _alphabetCheck(str) {
      str = str.toUpperCase();
      for (var i = 0; i < str.length; i++) {
        if (!ValidationUtils.NIMIQ_ALPHABET.includes(str[i])) return false;
      }
      return true;
    }
  }, {
    key: "_ibanCheck",
    value: function _ibanCheck(str) {
      var num = str.split('').map(function (c) {
        var code = c.toUpperCase().charCodeAt(0);
        return code >= 48 && code <= 57 ? c : (code - 55).toString();
      }).join('');
      var tmp = '';
      for (var i = 0; i < Math.ceil(num.length / 6); i++) {
        tmp = (parseInt(tmp + num.substr(i * 6, 6), 10) % 97).toString();
      }
      return parseInt(tmp, 10);
    }
  }, {
    key: "isValidHash",
    value: function isValidHash(hash) {
      // not using Nimiq Api here to don't require it to be loaded already
      try {
        return atob(hash).length === 32;
      } catch (e) {
        return false;
      }
    }
  }, {
    key: "NIMIQ_ALPHABET",
    get: function get() {
      // From Nimiq.BufferUtils.BASE32_ALPHABET.NIMIQ
      return '0123456789ABCDEFGHJKLMNPQRSTUVXY';
    }
  }]);
}();

// EXTERNAL MODULE: ./node_modules/@nimiq/iqons/dist/iqons.min.js
var iqons_min = __webpack_require__("4b3f");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--14-1!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Identicon.vue?vue&type=script&lang=ts














var Identicon_1;




var Identiconvue_type_script_lang_ts_Identicon = Identicon_1 = /*#__PURE__*/function (_Vue) {
  function Identicon() {
    var _this;
    _classCallCheck(this, Identicon);
    _this = _callSuper(this, Identicon, arguments);
    _this.dataUrl = _this.placeholderDataUrl;
    return _this;
  }
  _inherits(Identicon, _Vue);
  return _createClass(Identicon, [{
    key: "computeDataUrl",
    value: function () {
      var _computeDataUrl = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(address, oldAddress) {
        var _yield$import, svgPath;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (!(this.address && Identicon_1.isUserFriendlyAddress(this.address))) {
                _context.next = 17;
                break;
              }
              if (!self.NIMIQ_IQONS_SVG_PATH) {
                _context.next = 6;
                break;
              }
              console.warn('Setting NIMIQ_IQONS_SVG_PATH is deprecated and support will be removed in the future. ' + 'Use setAssetPublicPath instead.');
              // @ts-ignore
              iqons_min["a" /* default */].svgPath = self.NIMIQ_IQONS_SVG_PATH;
              _context.next = 12;
              break;
            case 6:
              _context.next = 8;
              return Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(null, "fc59", 7));
            case 8:
              _yield$import = _context.sent;
              svgPath = _yield$import.default;
              if (typeof self.NIMIQ_VUE_COMPONENTS_IMAGE_ASSET_PATH === 'string') {
                svgPath = svgPath.replace(__webpack_require__.p, self.NIMIQ_VUE_COMPONENTS_IMAGE_ASSET_PATH);
              }
              iqons_min["a" /* default */].svgPath = svgPath;
            case 12:
              _context.next = 14;
              return iqons_min["a" /* default */].toDataUrl(Identicon_1.formatAddress(this.address));
            case 14:
              this.dataUrl = _context.sent;
              _context.next = 18;
              break;
            case 17:
              this.dataUrl = this.placeholderDataUrl;
            case 18:
              return _context.abrupt("return", true);
            case 19:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function computeDataUrl(_x, _x2) {
        return _computeDataUrl.apply(this, arguments);
      }
      return computeDataUrl;
    }()
  }, {
    key: "placeholderDataUrl",
    get: function get() {
      // tslint:disable-next-line max-line-length
      return 'data:image/svg+xml,<svg width="64" height="64" viewBox="0 -4 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity=".1" d="M62.3 25.4L49.2 2.6A5.3 5.3 0 0 0 44.6 0H18.4c-1.9 0-3.6 1-4.6 2.6L.7 25.4c-1 1.6-1 3.6 0 5.2l13.1 22.8c1 1.6 2.7 2.6 4.6 2.6h26.2c1.9 0 3.6-1 4.6-2.6l13-22.8c1-1.6 1-3.6.1-5.2z" fill="url(%23identicon_radial)"/><defs><radialGradient id="identicon_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="matrix(-63.0033 0 0 -56 63 56)"><stop stop-color="%23260133"/><stop offset="1" stop-color="%231F2348"/></radialGradient></defs></svg>';
    }
  }], [{
    key: "formatAddress",
    value: function formatAddress(str) {
      return ValidationUtils_ValidationUtils.normalizeAddress(str);
    }
  }, {
    key: "isUserFriendlyAddress",
    value: function isUserFriendlyAddress(str) {
      return ValidationUtils_ValidationUtils.isValidAddress(str);
    }
  }]);
}(external_vue_property_decorator_["Vue"]);
__decorate([Object(external_vue_property_decorator_["Prop"])(String)], Identiconvue_type_script_lang_ts_Identicon.prototype, "address", void 0);
__decorate([Object(external_vue_property_decorator_["Watch"])('address', {
  immediate: true
})], Identiconvue_type_script_lang_ts_Identicon.prototype, "computeDataUrl", null);
Identiconvue_type_script_lang_ts_Identicon = Identicon_1 = __decorate([external_vue_property_decorator_["Component"]], Identiconvue_type_script_lang_ts_Identicon);
/* harmony default export */ var Identiconvue_type_script_lang_ts = (Identiconvue_type_script_lang_ts_Identicon);
// CONCATENATED MODULE: ./src/components/Identicon.vue?vue&type=script&lang=ts
 /* harmony default export */ var components_Identiconvue_type_script_lang_ts = (Identiconvue_type_script_lang_ts); 
// EXTERNAL MODULE: ./src/components/Identicon.vue?vue&type=style&index=0&id=74cb1635&prod&scoped=true&lang=css
var Identiconvue_type_style_index_0_id_74cb1635_prod_scoped_true_lang_css = __webpack_require__("8a83");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent(
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */,
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options =
    typeof scriptExports === 'function' ? scriptExports.options : scriptExports

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
  if (moduleIdentifier) {
    // server build
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
      ? function () {
          injectStyles.call(
            this,
            (options.functional ? this.parent : this).$root.$options.shadowRoot
          )
        }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/components/Identicon.vue






/* normalize component */

var Identicon_component = normalizeComponent(
  components_Identiconvue_type_script_lang_ts,
  Identiconvue_type_template_id_74cb1635_scoped_true_render,
  Identiconvue_type_template_id_74cb1635_scoped_true_staticRenderFns,
  false,
  null,
  "74cb1635",
  null
  
)

/* harmony default export */ var components_Identicon = (Identicon_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"6f718cbb-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Amount.vue?vue&type=template&id=6a0fda52&scoped=true
var Amountvue_type_template_id_6a0fda52_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',{staticClass:"amount",class:{ approx: _vm.showApprox && _vm.isApprox }},[_vm._v(" "+_vm._s(_vm.formattedAmount)+" "),_c('span',{staticClass:"currency",class:_vm.currency},[_vm._v(_vm._s(_vm.ticker))])])}
var Amountvue_type_template_id_6a0fda52_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Amount.vue?vue&type=template&id=6a0fda52&scoped=true

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.is-integer.js
var es_number_is_integer = __webpack_require__("7200");

// CONCATENATED MODULE: ./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js

function _defineProperty(e, r, t) {
  return (r = toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.parse-int.js
var es_number_parse_int = __webpack_require__("fe6b");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.match.js
var es_string_match = __webpack_require__("2c10");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.pad-end.js
var es_string_pad_end = __webpack_require__("8c04");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.pad-start.js
var es_string_pad_start = __webpack_require__("795c");

// CONCATENATED MODULE: ./node_modules/@nimiq/utils/dist/module/FormattableNumber.js
















// formats and converts numbers without precision loss
var FormattableNumber_FormattableNumber = /*#__PURE__*/function () {
  function FormattableNumber(value) {
    _classCallCheck(this, FormattableNumber);
    _defineProperty(this, "_digits", void 0);
    _defineProperty(this, "_decimalSeparatorPosition", void 0);
    _defineProperty(this, "_sign", void 0);
    if (typeof value !== 'string') {
      value = value.toString(); // work on strings in any case. Note that this might result in scientific notation
    }
    var numberMatch = value.match(FormattableNumber.NUMBER_REGEX);
    if (!numberMatch) throw new Error("".concat(value, " is not a valid number"));
    this._sign = numberMatch[1];
    this._digits = "".concat(numberMatch[2]).concat(numberMatch[3]);
    if (!this._digits) throw new Error("".concat(value, " is not a valid number"));
    this._decimalSeparatorPosition = numberMatch[2].length;
    var exponent = Number.parseInt(numberMatch[5], 10);
    if (exponent) this.moveDecimalSeparator(exponent); // remove scientific notation
  }
  return _createClass(FormattableNumber, [{
    key: "toString",
    value: function toString(optionsOrUseGrouping) {
      var _ref = _typeof(optionsOrUseGrouping) === 'object' ? optionsOrUseGrouping : {},
        _ref$maxDecimals = _ref.maxDecimals,
        maxDecimals = _ref$maxDecimals === void 0 ? undefined : _ref$maxDecimals,
        _ref$minDecimals = _ref.minDecimals,
        minDecimals = _ref$minDecimals === void 0 ? undefined : _ref$minDecimals,
        _ref$useGrouping = _ref.useGrouping,
        useGrouping = _ref$useGrouping === void 0 ? optionsOrUseGrouping === true : _ref$useGrouping,
        _ref$groupSeparator = _ref.groupSeparator,
        groupSeparator = _ref$groupSeparator === void 0 ? "\u202F" : _ref$groupSeparator;
      if (maxDecimals !== undefined && minDecimals !== undefined) {
        minDecimals = Math.min(minDecimals, maxDecimals);
      }
      if (maxDecimals !== undefined && maxDecimals < this._digits.length - this._decimalSeparatorPosition) {
        this.round(maxDecimals);
      }
      var integers = this._digits.slice(0, this._decimalSeparatorPosition).replace(/^0+/, ''); // trim leading 0s
      var decimals = this._digits.slice(this._decimalSeparatorPosition).replace(/0+$/, ''); // trim trailing 0s
      if (minDecimals !== undefined && minDecimals > decimals.length) {
        decimals = decimals.padEnd(minDecimals, '0');
      }
      // Apply grouping for values with more than 4 integer digits.
      if (useGrouping && groupSeparator && integers.length > 4) {
        integers = integers.replace(/(\d)(?=(\d{3})+$)/g, "$1".concat(groupSeparator));
      }
      return "".concat(this._sign).concat(integers || '0').concat(decimals ? ".".concat(decimals) : '');
    }
  }, {
    key: "valueOf",
    value: function valueOf() {
      return this.toString();
    }
  }, {
    key: "moveDecimalSeparator",
    value: function moveDecimalSeparator(moveBy) {
      this._decimalSeparatorPosition += moveBy;
      if (this._decimalSeparatorPosition > this._digits.length) {
        this._digits = this._digits.padEnd(this._decimalSeparatorPosition, '0');
      } else if (this._decimalSeparatorPosition < 0) {
        this._digits = this._digits.padStart(this._digits.length - this._decimalSeparatorPosition, '0');
        this._decimalSeparatorPosition = 0;
      }
      return this;
    }
  }, {
    key: "round",
    value: function round(decimals) {
      if (this._digits.length - this._decimalSeparatorPosition <= decimals) return this;
      var firstCutOffIndex = this._decimalSeparatorPosition + decimals;
      var digitsToKeep = this._digits.substring(0, firstCutOffIndex).padEnd(this._decimalSeparatorPosition, '0');
      if (Number.parseInt(this._digits[firstCutOffIndex], 10) < 5) {
        // rounding down, can just use the trimmed decimals
        this._digits = digitsToKeep;
        return this;
      }
      // round up
      var digits = "0".concat(digitsToKeep).split(''); // add a leading 0 for easier handling of carry
      var lastRemainingIndex = firstCutOffIndex; // due to the added leading 0
      for (var i = lastRemainingIndex; i >= 0; --i) {
        var newDigit = Number.parseInt(digits[i], 10) + 1;
        if (newDigit < 10) {
          digits[i] = newDigit.toString();
          break; // no carry over, break
        } else {
          digits[i] = '0';
          // continue loop to handle carry over
        }
      }
      this._digits = digits.join('');
      this._decimalSeparatorPosition += 1; // account for the added leading 0
      return this;
    }
  }, {
    key: "equals",
    value: function equals(other) {
      if (!(other instanceof FormattableNumber)) {
        try {
          other = new FormattableNumber(other);
        } catch (e) {
          // not convertable to a FormattableNumber
          return false;
        }
      }
      // compare rendered results to benefit from normalizations done on rendering
      return this.toString() === other.toString();
    }
  }]);
}();
_defineProperty(FormattableNumber_FormattableNumber, "NUMBER_REGEX", /^(-?)(\d*)\.?(\d*)(e(-?\d+))?$/);
function toNonScientificNumberString(value) {
  return new FormattableNumber_FormattableNumber(value).toString();
}

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--14-1!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Amount.vue?vue&type=script&lang=ts
















function amountValidator(value) {
  return typeof value === 'number' || typeof value === 'bigint' || value && value.constructor && value.constructor.name.endsWith('Integer');
}
var Amountvue_type_script_lang_ts_Amount = /*#__PURE__*/function (_Vue) {
  function Amount() {
    _classCallCheck(this, Amount);
    return _callSuper(this, Amount, arguments);
  }
  _inherits(Amount, _Vue);
  return _createClass(Amount, [{
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
      return new FormattableNumber_FormattableNumber(this.amount).moveDecimalSeparator(-this.currencyDecimals).toString({
        maxDecimals: maxDecimals,
        minDecimals: minDecimals,
        useGrouping: true
      });
    }
  }, {
    key: "isApprox",
    get: function get() {
      return !new FormattableNumber_FormattableNumber(this.amount).moveDecimalSeparator(-this.currencyDecimals).equals(this.formattedAmount.replace(/\s/g, ''));
    }
  }, {
    key: "ticker",
    get: function get() {
      if (this.currency === 'tnim') return 'tNIM';
      if (this.currency === 'mbtc') return 'mBTC';
      if (this.currency === 'tbtc') return 'tBTC';
      if (this.currency === 'usdc.e') return 'USDC.e';
      return this.currency.toUpperCase();
    }
  }]);
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
/* harmony default export */ var Amountvue_type_script_lang_ts = (Amountvue_type_script_lang_ts_Amount);
// CONCATENATED MODULE: ./src/components/Amount.vue?vue&type=script&lang=ts
 /* harmony default export */ var components_Amountvue_type_script_lang_ts = (Amountvue_type_script_lang_ts); 
// EXTERNAL MODULE: ./src/components/Amount.vue?vue&type=style&index=0&id=6a0fda52&prod&scoped=true&lang=css
var Amountvue_type_style_index_0_id_6a0fda52_prod_scoped_true_lang_css = __webpack_require__("f02d");

// CONCATENATED MODULE: ./src/components/Amount.vue






/* normalize component */

var Amount_component = normalizeComponent(
  components_Amountvue_type_script_lang_ts,
  Amountvue_type_template_id_6a0fda52_scoped_true_render,
  Amountvue_type_template_id_6a0fda52_scoped_true_staticRenderFns,
  false,
  null,
  "6a0fda52",
  null
  
)

/* harmony default export */ var components_Amount = (Amount_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"6f718cbb-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/LabelInput.vue?vue&type=template&id=c08b4c6e&scoped=true
var LabelInputvue_type_template_id_c08b4c6e_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('form',{staticClass:"label-input",class:{disabled: _vm.disabled},on:{"submit":function($event){$event.preventDefault();return _vm.onBlur($event)}}},[_c('span',{ref:"widthPlaceholder",staticClass:"width-finder width-placeholder"},[_vm._v(_vm._s(_vm.placeholder || _vm.$t('Name your address')))]),_c('span',{ref:"widthValue",staticClass:"width-finder width-value"},[_vm._v(_vm._s(_vm.liveValue))]),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.liveValue),expression:"liveValue"}],ref:"input",staticClass:"nq-input",class:{'vanishing': _vm.vanishing},style:({width: ((this.width) + "px")}),attrs:{"type":"text","placeholder":_vm.placeholder || _vm.$t('Name your address'),"disabled":_vm.disabled},domProps:{"value":(_vm.liveValue)},on:{"input":[function($event){if($event.target.composing){ return; }_vm.liveValue=$event.target.value},_vm.onInput],"blur":_vm.onBlur,"paste":function($event){return _vm.$emit('paste', $event)}}})])}
var LabelInputvue_type_template_id_c08b4c6e_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/LabelInput.vue?vue&type=template&id=c08b4c6e&scoped=true

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array-buffer.slice.js
var es_array_buffer_slice = __webpack_require__("4db2");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array-buffer.detached.js
var es_array_buffer_detached = __webpack_require__("08d3");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array-buffer.transfer.js
var es_array_buffer_transfer = __webpack_require__("327b");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array-buffer.transfer-to-fixed-length.js
var es_array_buffer_transfer_to_fixed_length = __webpack_require__("cf8f");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.uint8-array.js
var es_typed_array_uint8_array = __webpack_require__("c976");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.at.js
var es_typed_array_at = __webpack_require__("4d8f");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.copy-within.js
var es_typed_array_copy_within = __webpack_require__("7b97");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.every.js
var es_typed_array_every = __webpack_require__("668a");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.fill.js
var es_typed_array_fill = __webpack_require__("c5b7");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.filter.js
var es_typed_array_filter = __webpack_require__("8ff5");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.find.js
var es_typed_array_find = __webpack_require__("2378");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.find-index.js
var es_typed_array_find_index = __webpack_require__("641a");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.find-last.js
var es_typed_array_find_last = __webpack_require__("64e0");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.find-last-index.js
var es_typed_array_find_last_index = __webpack_require__("cce3");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.for-each.js
var es_typed_array_for_each = __webpack_require__("efba");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.includes.js
var es_typed_array_includes = __webpack_require__("d009");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.index-of.js
var es_typed_array_index_of = __webpack_require__("bd7d");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.iterator.js
var es_typed_array_iterator = __webpack_require__("7edd");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.join.js
var es_typed_array_join = __webpack_require__("d798");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.last-index-of.js
var es_typed_array_last_index_of = __webpack_require__("f547");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.map.js
var es_typed_array_map = __webpack_require__("5e54");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.reduce.js
var es_typed_array_reduce = __webpack_require__("b60a");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.reduce-right.js
var es_typed_array_reduce_right = __webpack_require__("8c18");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.reverse.js
var es_typed_array_reverse = __webpack_require__("12973");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.set.js
var es_typed_array_set = __webpack_require__("f991");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.slice.js
var es_typed_array_slice = __webpack_require__("198e");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.some.js
var es_typed_array_some = __webpack_require__("8557");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.sort.js
var es_typed_array_sort = __webpack_require__("63b1");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.subarray.js
var es_typed_array_subarray = __webpack_require__("1d13");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.to-locale-string.js
var es_typed_array_to_locale_string = __webpack_require__("1954");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.to-reversed.js
var es_typed_array_to_reversed = __webpack_require__("02f1");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.to-sorted.js
var es_typed_array_to_sorted = __webpack_require__("e6d4");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.to-string.js
var es_typed_array_to_string = __webpack_require__("1cf1");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.with.js
var es_typed_array_with = __webpack_require__("3f65");

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
var Utf8Tools_Utf8Tools = /*#__PURE__*/function () {
  function Utf8Tools() {
    _classCallCheck(this, Utf8Tools);
  }
  return _createClass(Utf8Tools, null, [{
    key: "stringToUtf8ByteArray",
    value: function stringToUtf8ByteArray(str) {
      if (typeof TextEncoder !== 'undefined') {
        var encoder = new TextEncoder(); // utf-8 is the default
        return encoder.encode(str);
      }
      // Fallback for unsupported TextEncoder
      var out = [];
      var p = 0;
      for (var i = 0; i < str.length; i++) {
        var c = str.charCodeAt(i);
        if (c < 128) {
          out[p++] = c;
        } else if (c < 2048) {
          out[p++] = c >> 6 | 192;
          out[p++] = c & 63 | 128;
        } else if ((c & 0xFC00) == 0xD800 && i + 1 < str.length && (str.charCodeAt(i + 1) & 0xFC00) == 0xDC00) {
          // Surrogate Pair
          c = 0x10000 + ((c & 0x03FF) << 10) + (str.charCodeAt(++i) & 0x03FF);
          out[p++] = c >> 18 | 240;
          out[p++] = c >> 12 & 63 | 128;
          out[p++] = c >> 6 & 63 | 128;
          out[p++] = c & 63 | 128;
        } else {
          out[p++] = c >> 12 | 224;
          out[p++] = c >> 6 & 63 | 128;
          out[p++] = c & 63 | 128;
        }
      }
      return new Uint8Array(out);
    }
  }, {
    key: "utf8ByteArrayToString",
    value: function utf8ByteArrayToString(bytes) {
      if (typeof TextDecoder !== 'undefined') {
        var decoder = new TextDecoder('utf-8');
        return decoder.decode(bytes);
      }
      // Fallback for unsupported TextDecoder.
      // Note that this fallback can result in a different decoding for invalid utf8 than the native implementation.
      // This is the case when a character requires more bytes than are left in the array which is not handled here.
      var out = [];
      var pos = 0;
      var c = 0;
      while (pos < bytes.length) {
        /* eslint-disable no-mixed-operators */
        var c1 = bytes[pos++];
        if (c1 < 128) {
          out[c++] = String.fromCharCode(c1);
        } else if (c1 > 191 && c1 < 224) {
          var c2 = bytes[pos++];
          out[c++] = String.fromCharCode((c1 & 31) << 6 | c2 & 63);
        } else if (c1 > 239 && c1 < 365) {
          // Surrogate Pair
          var _c = bytes[pos++];
          var c3 = bytes[pos++];
          var c4 = bytes[pos++];
          var u = ((c1 & 7) << 18 | (_c & 63) << 12 | (c3 & 63) << 6 | c4 & 63) - 0x10000;
          out[c++] = String.fromCharCode(0xD800 + (u >> 10));
          out[c++] = String.fromCharCode(0xDC00 + (u & 1023));
        } else {
          var _c2 = bytes[pos++];
          var _c3 = bytes[pos++];
          out[c++] = String.fromCharCode((c1 & 15) << 12 | (_c2 & 63) << 6 | _c3 & 63);
        }
        /* eslint-enable no-mixed-operators */
      }
      return out.join('');
    }
  }, {
    key: "isValidUtf8",
    value: function isValidUtf8(bytes) {
      var denyControlCharacters = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var controlCharsWhitelist = [0x09, 0x0A, 0x0D /* carriage return (\r) */];
      if (typeof TextDecoder !== 'undefined') {
        try {
          var decoder = new TextDecoder('utf-8', {
            fatal: true
          });
          var decoded = decoder.decode(bytes); // throws for invalid input
          if (!denyControlCharacters) return true;
          // Search for control characters (utf-8 single byte characters (0x00-0x7F) which are not in the range
          // 0x20-0x7E (space-tilde)). Note that we use the unicode u flag to avoid astral symbols (symbols
          // outside the range 0x0000 - 0xFFFF) getting split up into two surrogate halves.
          // See https://mathiasbynens.be/notes/javascript-unicode#regex
          // eslint-disable-next-line no-control-regex
          var controlCharsMatch = decoded.match(/[\0-\x1F\x7F]/g);
          if (!controlCharsMatch) return true;
          return controlCharsMatch.every(function (char) {
            return controlCharsWhitelist.includes(char.charCodeAt(0));
          });
        } catch (e) {
          return false;
        }
      }
      // Fallback for unsupported TextDecoder
      var i = 0;
      while (i < bytes.length) {
        var bytesLeft = bytes.length - i;
        var first = bytes[i]; // The byte
        /* eslint-disable brace-style */
        if (first <= 0x7F) {
          // Possible one-byte
          if (first >= 0x20 /* space */ && first <= 0x7E /* tilde */) ++i; // non-control chars
          else if (!denyControlCharacters) ++i; // it's a control char but we're accepting them
          else if (controlCharsWhitelist.indexOf(first) > -1) ++i; // whitelisted control char
          else break;
        } else if (first >= 0xC2 && first <= 0xDF && bytesLeft >= 2) {
          // Possible two-byte
          var second = bytes[++i];
          if (second >= 0x80 && second <= 0xBF) ++i; // Is valid two-byte
          else break;
        } else if (first === 0xE0 && bytesLeft >= 3) {
          // Possible three-byte
          var _second = bytes[++i];
          var third = bytes[++i];
          if (_second >= 0xA0 && _second <= 0xBF && third >= 0x80 && third <= 0xBF) ++i; // Is valid three-byte
          else break;
        } else if (first >= 0xE1 && first <= 0xEC && bytesLeft >= 3) {
          // Possible three-byte
          var _second2 = bytes[++i];
          var _third = bytes[++i];
          if (_second2 >= 0x80 && _second2 <= 0xBF && _third >= 0x80 && _third <= 0xBF) ++i; // Is valid three-byte
          else break;
        } else if (first === 0xED && bytesLeft >= 3) {
          // Possible three-byte
          var _second3 = bytes[++i];
          var _third2 = bytes[++i];
          if (_second3 >= 0x80 && _second3 <= 0x9F && _third2 >= 0x80 && _third2 <= 0xBF) ++i; // Is valid three-byte
          else break;
        } else if (first >= 0xEE && first <= 0xEF && bytesLeft >= 3) {
          // Possible three-byte
          var _second4 = bytes[++i];
          var _third3 = bytes[++i];
          if (_second4 >= 0x80 && _second4 <= 0xBF && _third3 >= 0x80 && _third3 <= 0xBF) ++i; // Is valid three-byte
          else break;
        } else if (first === 0xF0 && bytesLeft >= 4) {
          // Possible four-byte
          var _second5 = bytes[++i];
          var _third4 = bytes[++i];
          var fourth = bytes[++i];
          if (_second5 >= 0x90 && _second5 <= 0xBF && _third4 >= 0x80 && _third4 <= 0xBF && fourth >= 0x80 && fourth <= 0xBF) ++i; // Is valid four-byte
          else break;
        } else if (first >= 0xF1 && first <= 0xF3 && bytesLeft >= 4) {
          // Possible four-byte
          var _second6 = bytes[++i];
          var _third5 = bytes[++i];
          var _fourth = bytes[++i];
          if (_second6 >= 0x80 && _second6 <= 0xBF && _third5 >= 0x80 && _third5 <= 0xBF && _fourth >= 0x80 && _fourth <= 0xBF) ++i; // Is valid four-byte
          else break;
        } else if (first === 0xF4 && bytesLeft >= 4) {
          // Possible four-byte
          var _second7 = bytes[++i];
          var _third6 = bytes[++i];
          var _fourth2 = bytes[++i];
          if (_second7 >= 0x80 && _second7 <= 0x8F && _third6 >= 0x80 && _third6 <= 0xBF && _fourth2 >= 0x80 && _fourth2 <= 0xBF) ++i; // Is valid four-byte
          else break;
        } else break;
        /* eslint-enable brace-style */
      }
      // If the whole array was walked successfully, then the last check also increased the counter
      // and the index i is equal to the length of the array.
      // If the while loop was broken early, i is smaller and the array is not valid UTF-8.
      return i === bytes.length;
    }
  }, {
    key: "truncateToUtf8ByteLength",
    value: function truncateToUtf8ByteLength(input, length) {
      var applyEllipsis = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      if (length < 0) {
        throw new Error('Invalid byte length');
      }
      var bytes;
      if (typeof input === 'string') {
        bytes = Utf8Tools.stringToUtf8ByteArray(input);
      } else {
        bytes = input;
      }
      if (bytes.length <= length) {
        return {
          result: input,
          didTruncate: false
        };
      }
      var ellipsisBytes = [226, 128, 166];
      if (length < ellipsisBytes.length) applyEllipsis = false;
      bytes = bytes.subarray(0, length - (applyEllipsis ? ellipsisBytes.length : 0));
      // Cut off last byte until byte array is valid utf-8
      while (!Utf8Tools.isValidUtf8(bytes)) bytes = bytes.subarray(0, bytes.length - 1);
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
        didTruncate: true
      };
    }
  }]);
}();

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.from.js
var es_array_from = __webpack_require__("08eb");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.test.js
var es_regexp_test = __webpack_require__("0506");

// CONCATENATED MODULE: ./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js
function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}

// CONCATENATED MODULE: ./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js









function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}

// CONCATENATED MODULE: ./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js









function _createForOfIteratorHelper(r, e) {
  var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (!t) {
    if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) {
      t && (r = t);
      var _n = 0,
        F = function F() {};
      return {
        s: F,
        n: function n() {
          return _n >= r.length ? {
            done: !0
          } : {
            done: !1,
            value: r[_n++]
          };
        },
        e: function e(r) {
          throw r;
        },
        f: F
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var o,
    a = !0,
    u = !1;
  return {
    s: function s() {
      t = t.call(r);
    },
    n: function n() {
      var r = t.next();
      return a = r.done, r;
    },
    e: function e(r) {
      u = !0, o = r;
    },
    f: function f() {
      try {
        a || null == t["return"] || t["return"]();
      } finally {
        if (u) throw o;
      }
    }
  };
}

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.keys.js
var es_object_keys = __webpack_require__("dc8a");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.set.js
var es_set = __webpack_require__("f3f7");

// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.set.difference.v2.js
var esnext_set_difference_v2 = __webpack_require__("3200");

// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.set.intersection.v2.js
var esnext_set_intersection_v2 = __webpack_require__("4ba2");

// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.set.is-disjoint-from.v2.js
var esnext_set_is_disjoint_from_v2 = __webpack_require__("de3b");

// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.set.is-subset-of.v2.js
var esnext_set_is_subset_of_v2 = __webpack_require__("a976");

// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.set.is-superset-of.v2.js
var esnext_set_is_superset_of_v2 = __webpack_require__("98ff");

// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.set.symmetric-difference.v2.js
var esnext_set_symmetric_difference_v2 = __webpack_require__("3a3b");

// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.set.union.v2.js
var esnext_set_union_v2 = __webpack_require__("819a");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.freeze.js
var es_object_freeze = __webpack_require__("c24b");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.constructor.js
var es_regexp_constructor = __webpack_require__("23f4");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.dot-all.js
var es_regexp_dot_all = __webpack_require__("7d2f");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.sticky.js
var es_regexp_sticky = __webpack_require__("9c4e");

// CONCATENATED MODULE: ./node_modules/@nimiq/utils/dist/module/Cookie-caEeLg3k.js













/**
 * Get a Cookie
 * @param {string} cookieName - The name / key of the Cookie to get.
 * @returns {string|null} Returns the value of the Cookie, if this one was found. Otherwise return null.
 */
function getCookie(cookieName) {
  var match = document.cookie.match(new RegExp("(^| )".concat(encodeURIComponent(cookieName), "=([^;]+)")));
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
  if (typeof cookieName !== 'string') throw new Error('cookieName must be a string');
  if (typeof cookieValue !== 'string') throw new Error('cookieValue must be a string');
  var cookie = ["".concat(encodeURIComponent(cookieName), "=").concat(encodeURIComponent(cookieValue))];
  if (options) {
    if (_typeof(options) !== 'object') throw new Error('options must be an object');
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
    if (options.path) cookie.push("path=".concat(options.path));
    if (options.secure) cookie.push('secure');
    if (options.domain) cookie.push("domain=".concat(options.domain));
    if (options.maxAge) cookie.push("max-age=".concat(options.maxAge));
    if (options.expires) cookie.push("expires=".concat(options.expires));
    if (options.samesite) cookie.push("samesite=".concat(options.samesite));
  }
  var cookieString = cookie.join(';');
  document.cookie = cookieString;
  return cookieString;
}
/**
 * Unset a Cookie (remove it)
 * @param {string} cookieName - the Name / Key of the Cookie to be unset / removed
 */
function unsetCookie(cookieName) {
  document.cookie = "".concat(encodeURIComponent(cookieName), "=;max-age=0");
}
var Cookie = /*#__PURE__*/Object.freeze({
  __proto__: null,
  getCookie: getCookie,
  setCookie: setCookie,
  unsetCookie: unsetCookie
});

// CONCATENATED MODULE: ./src/i18n/I18nMixin.ts





























var I18nMixin_1;



/**
 * i18n mixin for vue-components that provides a similar, but reduced, api as vue-i18n. This is to avoid that users need
 * to add the entire vue-i18n lib to their app as soon as they want to use a component from this library even if they
 * don't intend to add internationalization.
 */
var I18nMixin_I18nMixin = I18nMixin_1 = /*#__PURE__*/function (_Vue) {
  function I18nMixin() {
    _classCallCheck(this, I18nMixin);
    return _callSuper(this, I18nMixin, arguments);
  }
  _inherits(I18nMixin, _Vue);
  return _createClass(I18nMixin, [{
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
    value:
    /**
     * Set the language to use. This will lazy-load the translation files and rerender the ui once ready.
     * @param {string} lang - The language to use.
     */
    function setLanguage(lang) {
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
      var langCookie = Cookie.getCookie('lang');
      // const fallbackLang = window.navigator.language.split('-')[0];
      var fallbackLang = 'en'; // TODO just temporarily, until language switching is enabled in wallet
      var lang = langCookie || fallbackLang;
      // If the language is not supported set it to the default one
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
      var componentName = component.$options.name;
      // Using $options.name instead of constructor.name as class names get mangled in the production build.
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
      var componentName = component.$options.name;
      // Using $options.name instead of constructor.name as class names get mangled in the production build.
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
    value: (function () {
      var _loadComponentLanguageFile = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(componentName) {
        var lang, componentLang, messages, componentsToNotify, _iterator, _step, component;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              lang = I18nMixin_1.lang;
              componentLang = lang + '-' + componentName;
              if (!(!(componentLang in I18nMixin_1.loadedMessages) && lang !== 'en')) {
                _context.next = 7;
                break;
              }
              _context.next = 5;
              return __webpack_require__("1a4c")("./".concat(lang, "/").concat(componentName, ".json"));
            case 5:
              messages = _context.sent;
              I18nMixin_1.loadedMessages[componentLang] = messages.default || {};
            case 7:
              componentsToNotify = I18nMixin_1.registeredComponents[componentName] || [];
              _iterator = _createForOfIteratorHelper(componentsToNotify);
              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  component = _step.value;
                  // rerender with new language and notify potential event listeners
                  component.$forceUpdate();
                  component.$emit(I18nMixin_1.Events.LANGUAGE_READY, lang);
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }
            case 10:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      function loadComponentLanguageFile(_x) {
        return _loadComponentLanguageFile.apply(this, arguments);
      }
      return loadComponentLanguageFile;
    }())
  }]);
}(external_vue_property_decorator_["Vue"]);
I18nMixin_I18nMixin.DEFAULT_LANGUAGE = 'en';
I18nMixin_I18nMixin.SUPPORTED_LANGUAGES = [I18nMixin_1.DEFAULT_LANGUAGE, 'de', 'es', 'fr', 'nl', 'pt', 'ru', 'uk', 'zh'];
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
})(I18nMixin_I18nMixin || (I18nMixin_I18nMixin = {}));
// Update the language in case it was changed via language cookie.
window.addEventListener('focus', function () {
  return I18nMixin_I18nMixin.setLanguage(I18nMixin_I18nMixin.detectLanguage());
});
/* harmony default export */ var i18n_I18nMixin = (I18nMixin_I18nMixin);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--14-1!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/LabelInput.vue?vue&type=script&lang=ts











var LabelInputvue_type_script_lang_ts_LabelInput = /*#__PURE__*/function (_Mixins) {
  function LabelInput() {
    var _this;
    _classCallCheck(this, LabelInput);
    _this = _callSuper(this, LabelInput, arguments);
    _this.liveValue = '';
    _this.lastValue = '';
    _this.lastEmittedValue = '';
    _this.width = 50;
    return _this;
  }
  _inherits(LabelInput, _Mixins);
  return _createClass(LabelInput, [{
    key: "focus",
    value: function focus() {
      this.$refs.input.focus();
    }
  }, {
    key: "onInput",
    value: function onInput() {
      if (this.maxBytes && Utf8Tools_Utf8Tools.stringToUtf8ByteArray(this.liveValue).byteLength > this.maxBytes) {
        // Keep previous value rather than truncating new value, which makes it slightly more obvious for the user
        // that the change was not applied, for example if an invalid value was pasted.
        this.liveValue = this.lastValue;
        return;
      }
      this.lastValue = this.liveValue;
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
      if (this.maxBytes && Utf8Tools_Utf8Tools.stringToUtf8ByteArray(newValue).byteLength > this.maxBytes) return; // keep last
      this.liveValue = newValue;
      this.lastValue = this.liveValue;
      this.lastEmittedValue = this.lastValue;
    }
  }, {
    key: "updateWidth",
    value: function () {
      var _updateWidth = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var placeholderWidth, valueWidth, fontSize;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
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
        }, _callee, this);
      }));
      function updateWidth() {
        return _updateWidth.apply(this, arguments);
      }
      return updateWidth;
    }()
  }, {
    key: "updateMaxBytes",
    value: function updateMaxBytes(newMaxBytes) {
      // Truncate value when maxBytes gets changed.
      if (!newMaxBytes) return;
      var _Utf8Tools$truncateTo = Utf8Tools_Utf8Tools.truncateToUtf8ByteLength(this.liveValue, newMaxBytes),
        truncatedValue = _Utf8Tools$truncateTo.result,
        didTruncate = _Utf8Tools$truncateTo.didTruncate;
      if (!didTruncate) return;
      this.liveValue = truncatedValue;
      this.lastValue = this.liveValue;
      this.lastEmittedValue = this.lastValue;
      this.$emit('changed', this.liveValue);
    }
  }]);
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
__decorate([Object(external_vue_property_decorator_["Prop"])({
  type: Boolean,
  default: false
})], LabelInputvue_type_script_lang_ts_LabelInput.prototype, "disabled", void 0);
__decorate([Object(external_vue_property_decorator_["Watch"])('value', {
  immediate: true
})], LabelInputvue_type_script_lang_ts_LabelInput.prototype, "updateValue", null);
__decorate([Object(external_vue_property_decorator_["Watch"])('liveValue', {
  immediate: true
})], LabelInputvue_type_script_lang_ts_LabelInput.prototype, "updateWidth", null);
__decorate([Object(external_vue_property_decorator_["Watch"])('maxBytes')], LabelInputvue_type_script_lang_ts_LabelInput.prototype, "updateMaxBytes", null);
LabelInputvue_type_script_lang_ts_LabelInput = __decorate([Object(external_vue_property_decorator_["Component"])({
  name: 'LabelInput'
})], LabelInputvue_type_script_lang_ts_LabelInput);
/* harmony default export */ var LabelInputvue_type_script_lang_ts = (LabelInputvue_type_script_lang_ts_LabelInput);
// CONCATENATED MODULE: ./src/components/LabelInput.vue?vue&type=script&lang=ts
 /* harmony default export */ var components_LabelInputvue_type_script_lang_ts = (LabelInputvue_type_script_lang_ts); 
// EXTERNAL MODULE: ./src/components/LabelInput.vue?vue&type=style&index=0&id=c08b4c6e&prod&scoped=true&lang=css
var LabelInputvue_type_style_index_0_id_c08b4c6e_prod_scoped_true_lang_css = __webpack_require__("ee0f");

// CONCATENATED MODULE: ./src/components/LabelInput.vue






/* normalize component */

var LabelInput_component = normalizeComponent(
  components_LabelInputvue_type_script_lang_ts,
  LabelInputvue_type_template_id_c08b4c6e_scoped_true_render,
  LabelInputvue_type_template_id_c08b4c6e_scoped_true_staticRenderFns,
  false,
  null,
  "c08b4c6e",
  null
  
)

/* harmony default export */ var components_LabelInput = (LabelInput_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--14-1!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Account.vue?vue&type=script&lang=ts











var Accountvue_type_script_lang_ts_Account = /*#__PURE__*/function (_Vue) {
  function Account() {
    var _this;
    _classCallCheck(this, Account);
    _this = _callSuper(this, Account, arguments);
    _this.showImage = !!_this.image;
    return _this;
  }
  _inherits(Account, _Vue);
  return _createClass(Account, [{
    key: "focus",
    value: function focus() {
      if (this.editable) {
        this.$refs.label.focus();
      }
    }
  }, {
    key: "changed",
    value: function changed(label) {}
  }, {
    key: "_onImageChange",
    value: function _onImageChange() {
      this.showImage = !!this.image;
    }
  }, {
    key: "_isNimiqAddress",
    get: function get() {
      return ValidationUtils_ValidationUtils.isValidAddress(this.address);
    }
  }, {
    key: "_isLabelNimiqAddress",
    get: function get() {
      return ValidationUtils_ValidationUtils.isValidAddress(this.label);
    }
  }]);
}(external_vue_property_decorator_["Vue"]);
__decorate([Object(external_vue_property_decorator_["Prop"])(String)], Accountvue_type_script_lang_ts_Account.prototype, "label", void 0);
__decorate([Object(external_vue_property_decorator_["Prop"])(String)], Accountvue_type_script_lang_ts_Account.prototype, "address", void 0);
__decorate([Object(external_vue_property_decorator_["Prop"])(String)], Accountvue_type_script_lang_ts_Account.prototype, "image", void 0);
__decorate([Object(external_vue_property_decorator_["Prop"])({
  type: Boolean,
  default: false
})], Accountvue_type_script_lang_ts_Account.prototype, "displayAsCashlink", void 0);
__decorate([Object(external_vue_property_decorator_["Prop"])(String)], Accountvue_type_script_lang_ts_Account.prototype, "placeholder", void 0);
__decorate([Object(external_vue_property_decorator_["Prop"])(String)], Accountvue_type_script_lang_ts_Account.prototype, "walletLabel", void 0);
__decorate([Object(external_vue_property_decorator_["Prop"])(Number)], Accountvue_type_script_lang_ts_Account.prototype, "balance", void 0);
__decorate([Object(external_vue_property_decorator_["Prop"])({
  type: Number,
  default: 2
})], Accountvue_type_script_lang_ts_Account.prototype, "decimals", void 0);
__decorate([Object(external_vue_property_decorator_["Prop"])(Boolean)], Accountvue_type_script_lang_ts_Account.prototype, "editable", void 0);
__decorate([Object(external_vue_property_decorator_["Prop"])({
  type: String,
  default: 'row',
  validator: function validator(layout) {
    return ['row', 'column'].indexOf(layout) !== -1;
  }
})], Accountvue_type_script_lang_ts_Account.prototype, "layout", void 0);
__decorate([Object(external_vue_property_decorator_["Emit"])()], Accountvue_type_script_lang_ts_Account.prototype, "changed", null);
__decorate([Object(external_vue_property_decorator_["Watch"])('image', {
  immediate: true
})], Accountvue_type_script_lang_ts_Account.prototype, "_onImageChange", null);
Accountvue_type_script_lang_ts_Account = __decorate([Object(external_vue_property_decorator_["Component"])({
  components: {
    Amount: components_Amount,
    Identicon: components_Identicon,
    LabelInput: components_LabelInput
  }
})], Accountvue_type_script_lang_ts_Account);
/* harmony default export */ var Accountvue_type_script_lang_ts = (Accountvue_type_script_lang_ts_Account);
// CONCATENATED MODULE: ./src/components/Account.vue?vue&type=script&lang=ts
 /* harmony default export */ var components_Accountvue_type_script_lang_ts = (Accountvue_type_script_lang_ts); 
// EXTERNAL MODULE: ./src/components/Account.vue?vue&type=style&index=0&id=579aeff3&prod&scoped=true&lang=css
var Accountvue_type_style_index_0_id_579aeff3_prod_scoped_true_lang_css = __webpack_require__("ea88");

// CONCATENATED MODULE: ./src/components/Account.vue






/* normalize component */

var Account_component = normalizeComponent(
  components_Accountvue_type_script_lang_ts,
  Accountvue_type_template_id_579aeff3_scoped_true_render,
  staticRenderFns,
  false,
  null,
  "579aeff3",
  null
  
)

/* harmony default export */ var components_Account = (Account_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"6f718cbb-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/AccountDetails.vue?vue&type=template&id=4d576866&scoped=true
var AccountDetailsvue_type_template_id_4d576866_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"account-details"},[_c('CloseButton',{staticClass:"top-right",on:{"click":_vm.close}}),_c('Account',{ref:"account",attrs:{"layout":"column","address":_vm.address,"image":_vm.image,"label":_vm.label !== _vm.address ? _vm.label : '',"walletLabel":_vm.walletLabel,"balance":_vm.balance,"editable":_vm.editable,"placeholder":_vm.placeholder},on:{"changed":_vm.changed}}),_c('AddressDisplay',{attrs:{"address":_vm.address,"copyable":""}})],1)}
var AccountDetailsvue_type_template_id_4d576866_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/AccountDetails.vue?vue&type=template&id=4d576866&scoped=true

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"6f718cbb-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/AddressDisplay.vue?vue&type=template&id=7fb74612&scoped=true
var AddressDisplayvue_type_template_id_7fb74612_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(_vm.copyable ? 'Copyable' : 'div',{tag:"component",staticClass:"address-display",class:("format-" + _vm.format),attrs:{"text":_vm.text}},_vm._l((_vm.chunks),function(chunk,index){return _c('span',{key:chunk + index,staticClass:"chunk"},[_vm._v(_vm._s(chunk)),(_vm.chunkTrailingSpaces)?_c('span',{staticClass:"space"}):_vm._e()])}),0)}
var AddressDisplayvue_type_template_id_7fb74612_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/AddressDisplay.vue?vue&type=template&id=7fb74612&scoped=true

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.fill.js
var es_array_fill = __webpack_require__("1851");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"6f718cbb-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Copyable.vue?vue&type=template&id=026c8086&scoped=true
var Copyablevue_type_template_id_026c8086_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"copyable",class:{ copied: _vm.copied },attrs:{"tabindex":"0"},on:{"click":_vm.copy}},[_c('div',{staticClass:"background"}),_vm._t("default"),_c('div',{ref:"tooltip",staticClass:"tooltip"},[_vm._v(_vm._s(_vm.$t('Copied')))])],2)}
var Copyablevue_type_template_id_026c8086_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Copyable.vue?vue&type=template&id=026c8086&scoped=true

// CONCATENATED MODULE: ./node_modules/@nimiq/utils/dist/module/Clipboard.js


var Clipboard_Clipboard = /*#__PURE__*/function () {
  function Clipboard() {
    _classCallCheck(this, Clipboard);
  }
  return _createClass(Clipboard, null, [{
    key: "copy",
    value: function copy(text) {
      // Simplified and typed version of https://github.com/sindresorhus/copy-text-to-clipboard
      // Additionally added a fix for correctly restoring selections in input fields.
      var element = document.createElement('textarea');
      element.value = text;
      // Prevent keyboard from showing on mobile
      element.setAttribute('readonly', '');
      // @ts-ignore: css property contain not known to current ts version
      element.style.contain = 'strict';
      element.style.position = 'absolute';
      element.style.left = '-9999px';
      element.style.fontSize = '12pt'; // Prevent zooming on iOS
      // store selection to be restored later
      var selection = document.getSelection();
      var originalRange = selection.rangeCount > 0 ? selection.getRangeAt(0) : null;
      var activeElement = document.activeElement instanceof HTMLElement ? document.activeElement : null;
      document.body.append(element);
      element.select();
      // Explicit selection workaround for iOS
      element.selectionStart = 0;
      element.selectionEnd = text.length;
      var isSuccess = false;
      try {
        isSuccess = document.execCommand('copy');
      } catch (e) {
        // Ignore
      }
      element.remove();
      if (activeElement) {
        activeElement.focus();
      }
      if (originalRange && !(activeElement instanceof HTMLInputElement || activeElement instanceof HTMLTextAreaElement)) {
        // We don't have to do this for inputs and textareas as they retain their selection on blur. Refocusing them
        // was enough to recover the original selection.
        selection.removeAllRanges();
        selection.addRange(originalRange);
      }
      return isSuccess;
    }
  }]);
}();

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--14-1!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Copyable.vue?vue&type=script&lang=ts










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
var Copyablevue_type_script_lang_ts_Copyable = Copyable_1 = /*#__PURE__*/function (_Mixins) {
  function Copyable() {
    var _this;
    _classCallCheck(this, Copyable);
    _this = _callSuper(this, Copyable, arguments);
    _this.copied = false;
    _this._copiedResetTimeout = null;
    return _this;
  }
  _inherits(Copyable, _Mixins);
  return _createClass(Copyable, [{
    key: "copy",
    value: function copy() {
      var _this2 = this;
      var text = this.text;
      if (!text) {
        var copiedLabel = this.$refs.tooltip.textContent;
        text = this.$el.innerText.replace(new RegExp("\\s*".concat(copiedLabel, "$")), '');
      }
      Clipboard_Clipboard.copy(text);
      window.clearTimeout(this._copiedResetTimeout);
      this.copied = true;
      this._copiedResetTimeout = window.setTimeout(function () {
        _this2.copied = false;
      }, Copyable_1.DISPLAY_TIME);
      this.$emit(Copyable_1.Events.COPY, text);
    }
  }, {
    key: "onKeyDown",
    value: function onKeyDown(event) {
      if (event.key === ' ' /* Space */ || event.key === 'Enter') {
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
}(Object(external_vue_property_decorator_["Mixins"])(i18n_I18nMixin));
Copyablevue_type_script_lang_ts_Copyable.DISPLAY_TIME = 800;
__decorate([Object(external_vue_property_decorator_["Prop"])(String)], Copyablevue_type_script_lang_ts_Copyable.prototype, "text", void 0);
Copyablevue_type_script_lang_ts_Copyable = Copyable_1 = __decorate([Object(external_vue_property_decorator_["Component"])({
  name: 'Copyable'
})], Copyablevue_type_script_lang_ts_Copyable);
(function (Copyable) {
  var Events;
  (function (Events) {
    Events["COPY"] = "copy";
  })(Events = Copyable.Events || (Copyable.Events = {}));
})(Copyablevue_type_script_lang_ts_Copyable || (Copyablevue_type_script_lang_ts_Copyable = {}));
/* harmony default export */ var Copyablevue_type_script_lang_ts = (Copyablevue_type_script_lang_ts_Copyable);
// CONCATENATED MODULE: ./src/components/Copyable.vue?vue&type=script&lang=ts
 /* harmony default export */ var components_Copyablevue_type_script_lang_ts = (Copyablevue_type_script_lang_ts); 
// EXTERNAL MODULE: ./src/components/Copyable.vue?vue&type=style&index=0&id=026c8086&prod&scoped=true&lang=css
var Copyablevue_type_style_index_0_id_026c8086_prod_scoped_true_lang_css = __webpack_require__("77dd");

// CONCATENATED MODULE: ./src/components/Copyable.vue






/* normalize component */

var Copyable_component = normalizeComponent(
  components_Copyablevue_type_script_lang_ts,
  Copyablevue_type_template_id_026c8086_scoped_true_render,
  Copyablevue_type_template_id_026c8086_scoped_true_staticRenderFns,
  false,
  null,
  "026c8086",
  null
  
)

/* harmony default export */ var components_Copyable = (Copyable_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--14-1!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/AddressDisplay.vue?vue&type=script&lang=ts













var AddressDisplayvue_type_script_lang_ts_AddressDisplay = /*#__PURE__*/function (_Vue) {
  function AddressDisplay() {
    _classCallCheck(this, AddressDisplay);
    return _callSuper(this, AddressDisplay, arguments);
  }
  _inherits(AddressDisplay, _Vue);
  return _createClass(AddressDisplay, [{
    key: "chunks",
    get: function get() {
      switch (this.format) {
        case 'nimiq':
          if (!this.address) return new Array(9).fill('-');
          return ValidationUtils_ValidationUtils.normalizeAddress(this.address).split(' ');
        case 'ethereum':
          if (!this.address) return new Array(3).fill('-');
          return this.address.replace(/[+ ]/g, '').match(/.{14}/g);
        default:
          return [this.address];
      }
    }
  }, {
    key: "text",
    get: function get() {
      switch (this.format) {
        case 'nimiq':
          return this.chunks.join(' ').toUpperCase();
        case 'ethereum':
          return this.chunks.join('');
        default:
          return this.address;
      }
    }
  }, {
    key: "chunkTrailingSpaces",
    get: function get() {
      return this.format === 'nimiq';
    }
  }]);
}(external_vue_property_decorator_["Vue"]);
__decorate([Object(external_vue_property_decorator_["Prop"])({
  type: String,
  required: true
})], AddressDisplayvue_type_script_lang_ts_AddressDisplay.prototype, "address", void 0);
__decorate([Object(external_vue_property_decorator_["Prop"])({
  type: String,
  default: 'nimiq'
})], AddressDisplayvue_type_script_lang_ts_AddressDisplay.prototype, "format", void 0);
__decorate([Object(external_vue_property_decorator_["Prop"])({
  type: Boolean,
  default: false
})], AddressDisplayvue_type_script_lang_ts_AddressDisplay.prototype, "copyable", void 0);
AddressDisplayvue_type_script_lang_ts_AddressDisplay = __decorate([Object(external_vue_property_decorator_["Component"])({
  components: {
    Copyable: components_Copyable
  }
})], AddressDisplayvue_type_script_lang_ts_AddressDisplay);
/* harmony default export */ var AddressDisplayvue_type_script_lang_ts = (AddressDisplayvue_type_script_lang_ts_AddressDisplay);
// CONCATENATED MODULE: ./src/components/AddressDisplay.vue?vue&type=script&lang=ts
 /* harmony default export */ var components_AddressDisplayvue_type_script_lang_ts = (AddressDisplayvue_type_script_lang_ts); 
// EXTERNAL MODULE: ./src/components/AddressDisplay.vue?vue&type=style&index=0&id=7fb74612&prod&scoped=true&lang=css
var AddressDisplayvue_type_style_index_0_id_7fb74612_prod_scoped_true_lang_css = __webpack_require__("a74b");

// CONCATENATED MODULE: ./src/components/AddressDisplay.vue






/* normalize component */

var AddressDisplay_component = normalizeComponent(
  components_AddressDisplayvue_type_script_lang_ts,
  AddressDisplayvue_type_template_id_7fb74612_scoped_true_render,
  AddressDisplayvue_type_template_id_7fb74612_scoped_true_staticRenderFns,
  false,
  null,
  "7fb74612",
  null
  
)

/* harmony default export */ var components_AddressDisplay = (AddressDisplay_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"6f718cbb-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/CloseButton.vue?vue&type=template&id=f70dd1ae&scoped=true
var CloseButtonvue_type_template_id_f70dd1ae_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('button',{staticClass:"close-button nq-button-s",on:{"click":_vm.click,"mousedown":function($event){$event.preventDefault();}}},[_c('CloseIcon')],1)}
var CloseButtonvue_type_template_id_f70dd1ae_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/CloseButton.vue?vue&type=template&id=f70dd1ae&scoped=true

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.assign.js
var es_object_assign = __webpack_require__("7fd5");

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
    
// CONCATENATED MODULE: ./node_modules/@nimiq/style/src/icons/arrow-left-small.svg

      /* harmony default export */ var arrow_left_small = ({
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
              attrs: Object.assign({"width":"11","height":"9","viewBox":"0 0 11 9","xmlns":"http://www.w3.org/2000/svg"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M4.25,7.75.75,4.25,4.25.75","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round","stroke":"currentColor","fill":"none"}}),_c('line',{attrs:{"x1":"1","y1":"4.25","x2":"10.25","y2":"4.25","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round","stroke":"currentColor","fill":"none"}})])
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
    
// CONCATENATED MODULE: ./node_modules/@nimiq/style/src/icons/cashlink.svg

      /* harmony default export */ var cashlink = ({
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
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 64 64","width":"64","height":"64"}, attrs),
              ...rest,
            },
            children.concat([_c('g',{attrs:{"fill":"none","stroke":"currentColor","stroke-linecap":"round","stroke-width":"2.5px","stroke-linejoin":"round"}},[_c('path',{attrs:{"d":"M40.25,23.25v-.5a6.5,6.5,0,0,0-6.5-6.5h-3.5a6.5,6.5,0,0,0-6.5,6.5v6.5a6.5,6.5,0,0,0,6.5,6.5h2"}}),_c('path',{attrs:{"d":"M23.75,40.75v.5a6.5,6.5,0,0,0,6.5,6.5h3.5a6.5,6.5,0,0,0,6.5-6.5v-6.5a6.5,6.5,0,0,0-6.5-6.5h-2"}}),_c('line',{attrs:{"x1":"32","y1":"11.25","x2":"32","y2":"15.25"}}),_c('line',{attrs:{"x1":"32","y1":"48.75","x2":"32","y2":"52.75"}})])])
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
    
// CONCATENATED MODULE: ./node_modules/@nimiq/style/src/icons/checkmark-small.svg

      /* harmony default export */ var checkmark_small = ({
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
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","width":"12","height":"12","viewBox":"0 0 12 12"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M11,1,4,11,1,8","fill":"none","stroke":"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"}})])
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
    
// CONCATENATED MODULE: ./node_modules/@nimiq/style/src/icons/download.svg

      /* harmony default export */ var download = ({
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
            children.concat([_c('path',{attrs:{"d":"M15.36 11.38a.83.83 0 0 0-.59-1.42h-3.31a.2.2 0 0 1-.2-.2V1.24a1.25 1.25 0 1 0-2.5 0v8.5c0 .12-.1.2-.22.2H5.23a.83.83 0 0 0-.59 1.43l4.77 4.77c.33.33.86.33 1.18 0l4.77-4.77zM16.02 18.75c0-.69-.55-1.25-1.25-1.25H5.23a1.25 1.25 0 1 0 0 2.5h9.54c.7 0 1.25-.56 1.25-1.25z","fill":"currentColor"}})])
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
    
// CONCATENATED MODULE: ./node_modules/@nimiq/style/src/icons/ledger.svg

      /* harmony default export */ var ledger = ({
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
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 290 61"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M145.5,46C137,46,130,39,130,30.5S137,15,145.5,15S161,22,161,30.5S154,46,145.5,46z M145.5,17 c-7.4,0-13.5,6.1-13.5,13.5S138.1,44,145.5,44S159,37.9,159,30.5S152.9,17,145.5,17z","fill":"currentColor"}}),_c('path',{attrs:{"d":"M285.5,3H107V2c0-1.1-0.9-2-2-2H89c-1.1,0-2,0.9-2,2v1H41V2c0-1.1-0.9-2-2-2H23c-1.1,0-2,0.9-2,2v1H4 C1.8,3,0,4.8,0,7v47c0,2.2,1.8,4,4,4h281.5c2.5,0,4.5-2,4.5-4.5v-46C290,5,288,3,285.5,3z M102,40.9c0,1.1-0.9,2.1-2,2.1H28 c-1.1,0-2-0.9-2-2.1V20.1c0-1.1,0.9-2.1,2-2.1h72c1.1,0,2,0.9,2,2.1V40.9z M288,53.5c0,1.4-1.1,2.5-2.5,2.5h-140 C131.4,56,120,44.6,120,30.5C120,16.4,131.4,5,145.5,5h140c1.4,0,2.5,1.1,2.5,2.5V53.5z","fill":"currentColor"}})])
          )
        }
      });
    
// CONCATENATED MODULE: ./node_modules/@nimiq/style/src/icons/login.svg

      /* harmony default export */ var login = ({
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
              attrs: Object.assign({"width":"54","height":"54","viewBox":"0 0 54 54","xmlns":"http://www.w3.org/2000/svg"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M26.95 0A27.05 27.05 0 0 0 .21 22.32a1.12 1.12 0 0 0 1.13 1.3h18.72c.62 0 1.12-.5 1.12-1.12v-8.1a2.25 2.25 0 0 1 3.66-1.76l15.75 12.6a2.25 2.25 0 0 1 0 3.52l-15.75 12.6a2.25 2.25 0 0 1-3.66-1.76v-8.1c0-.62-.5-1.12-1.12-1.12H1.35a1.14 1.14 0 0 0-1.13 1.3 27 27 0 0 0 53.55-5.78A27.25 27.25 0 0 0 26.95 0z","fill":"currentColor"}})])
          )
        }
      });
    
// CONCATENATED MODULE: ./node_modules/@nimiq/style/src/icons/plus-circle.svg

      /* harmony default export */ var plus_circle = ({
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
              attrs: Object.assign({"width":"54","height":"54","viewBox":"0 0 54 54","xmlns":"http://www.w3.org/2000/svg"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M27 54a27 27 0 1 0 0-54 27 27 0 0 0 0 54zm2.5-40c.6 0 1 .4 1 1v8.5H39c.6 0 1 .4 1 1v5c0 .6-.4 1-1 1h-8.5V39c0 .6-.4 1-1 1h-5a1 1 0 0 1-1-1v-8.5H15a1 1 0 0 1-1-1v-5c0-.6.4-1 1-1h8.5V15c0-.6.4-1 1-1h5z","fill":"currentColor"}})])
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
    
// CONCATENATED MODULE: ./node_modules/@nimiq/style/src/icons/settings.svg

      /* harmony default export */ var settings = ({
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
              attrs: Object.assign({"width":"30","height":"28","viewBox":"0 0 30 28","xmlns":"http://www.w3.org/2000/svg"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M27.634 15.68H9.544a1.428 1.428 0 0 1 0-2.856h18.09a1.428 1.428 0 0 1 0 2.857zM29.064 25.676c0 .789-.639 1.428-1.428 1.428h-8.569a1.428 1.428 0 0 1 0-2.856h8.57a1.428 1.428 0 0 1 1.427 1.43v-.002zM13.482 27.996a2.856 2.856 0 1 1-.282-5.705 2.856 2.856 0 0 1 .283 5.705zM1.922 24.248h4.76a1.428 1.428 0 0 1 0 2.856h-4.76a1.428 1.428 0 1 1 0-2.856zM.004 13.776a2.856 2.856 0 1 1 5.705.285 2.856 2.856 0 0 1-5.705-.285zM6.691 3.778H1.455a1.428 1.428 0 0 1 0-2.856H6.69a1.428 1.428 0 0 1 0 2.856zM13.177.004a2.856 2.856 0 1 1 .283 5.705 2.856 2.856 0 0 1-.283-5.705zM27.63 4.25h-7.616a1.428 1.428 0 0 1 0-2.855h7.617a1.428 1.428 0 0 1 0 2.856z","fill":"currentColor"}})])
          )
        }
      });
    
// CONCATENATED MODULE: ./node_modules/@nimiq/style/src/icons/stopwatch.svg

      /* harmony default export */ var stopwatch = ({
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
              attrs: Object.assign({"width":"98","height":"123","viewBox":"0 0 98 123","xmlns":"http://www.w3.org/2000/svg"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M85.7 42.3l8-8a5.1 5.1 0 1 0-7.3-7.2l-8.2 8.2c-7-5.2-15.4-8.5-24-9.4V10.3h10.2a5.1 5.1 0 0 0 0-10.3H33.6a5.1 5.1 0 0 0 0 10.3H44v15.6a48.7 48.7 0 1 0 41.8 16.4zM49 112.8a38.4 38.4 0 1 1 0-77 38.4 38.4 0 0 1 0 77z M54.2 48.6a5.1 5.1 0 0 0-10.3 0V74a5.2 5.2 0 0 0 5.2 5.1 5.1 5.1 0 0 0 5-5V48.5z","fill":"currentColor"}})])
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
    
// CONCATENATED MODULE: ./node_modules/@nimiq/style/src/icons/under-payment.svg

      /* harmony default export */ var under_payment = ({
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
              attrs: Object.assign({"width":"150","height":"149","viewBox":"0 0 150 149","xmlns":"http://www.w3.org/2000/svg"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M81 103a26 26 0 100-52 26 26 0 000 52zM3 97h15c1 0 2 1 2 3v35c0 2-1 3-2 3H3c-2 0-3-1-3-3v-35c0-2 1-3 3-3zm60 17h-1c-5-7-13-11-21-11H28l-2 1v30l1 1c26 9 37 14 47 14 11 0 21-7 54-24 3-1 4-5 2-8-1-2-3-3-6-3l-5 1-19 6-1 1c-1 6-6 10-12 10H64c-2 0-3-1-3-3s1-3 3-3h23c3 0 6-3 6-6s-3-6-6-6H63zm61-61.8h-.3a24 24 0 01-6.4-1c-1.6-.3-2.5-2-2-3.5.3-1.5 2-2.4 3.5-2 1.6.5 3.3.6 5 .7h.2a22 22 0 005-.6c1.6-.5 3.2.5 3.6 2a3 3 0 01-2.1 3.6 31 31 0 01-6.5.8zm15.8-6.3a3 3 0 01-2-5 21 21 0 003.2-4 3 3 0 014-.9 3 3 0 01.9 4 23 23 0 01-4.2 5c-.5.6-1.2.9-2 .9zm-31.9-.2c-.7 0-1.4-.3-2-.8a28 28 0 01-4.1-5 3 3 0 011-4 3 3 0 014 .8c.8 1.5 2 2.8 3.1 4a3 3 0 01.2 4.1 3 3 0 01-2.2.9zM147 30.5h-.2a2.9 2.9 0 01-2.7-3.1V26c0-1.3 0-2.6-.3-3.8a2.9 2.9 0 015.7-1c.3 1.5.5 3.2.5 4.8v1.7a3 3 0 01-3 2.7zm-46.2-.3a3 3 0 01-2.9-2.7V26c0-1.7.1-3.4.4-5a3 3 0 013.4-2.3 3 3 0 012.4 3.4c-.3 1.3-.4 2.6-.4 4v1a3 3 0 01-2.8 3.1zm41-16a3 3 0 01-2.3-1 20.7 20.7 0 00-3.6-3.5 3 3 0 01-.7-4 3 3 0 014.1-.7c1.7 1.3 3.3 2.8 4.7 4.5 1 1.2.9 3-.4 4-.5.6-1.1.7-1.8.7zm-35.6-.1c-.7 0-1.4-.3-1.9-.7a2.9 2.9 0 01-.3-4.1c1.3-1.7 3-3.1 4.7-4.4a3 3 0 014 .6 3 3 0 01-.5 4 21 21 0 00-3.8 3.5 3 3 0 01-2.2 1zM126.9 6h-.4c-1.7-.2-3.4-.2-5 0a3 3 0 11-.7-5.8c2.1-.3 4.3-.3 6.5 0a3 3 0 012.5 3.2 2.8 2.8 0 01-2.9 2.6z","fill":"currentColor"}})])
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
// import AlertCircle from '@nimiq/style/src/icons/alert-circle.svg';







// import CashlinkSmall from '@nimiq/style/src/icons/cashlink-small.svg';
// import CashlinkXSmall from '@nimiq/style/src/icons/cashlink-xsmall.svg';



// import Contacts from '@nimiq/style/src/icons/contacts.svg';
// import Copy from '@nimiq/style/src/icons/copy.svg';
// import Cross from '@nimiq/style/src/icons/cross.svg';



// import Gear from '@nimiq/style/src/icons/gear.svg';
// import Hexagon from '@nimiq/style/src/icons/hexagon.svg';
// import InfoCircle from '@nimiq/style/src/icons/info-circle.svg';
// import InfoCircleSmall from '@nimiq/style/src/icons/info-circle-small.svg';
// import Keys from '@nimiq/style/src/icons/keys.svg';

// import LockLocked from '@nimiq/style/src/icons/lock-locked.svg';
// import LockUnlocked from '@nimiq/style/src/icons/lock-unlocked.svg';

// import MenuDots from '@nimiq/style/src/icons/menu-dots.svg';


// import Questionmark from '@nimiq/style/src/icons/questionmark.svg';





// import ViewOff from '@nimiq/style/src/icons/view-off.svg';
// import View from '@nimiq/style/src/icons/view.svg';
/**
 * Comment out any unused icons here
 */
// tslint:disable:variable-name
// export const AlertCircleIcon = IconBase(AlertCircle);
var AlertTriangleIcon = IconBase(alert_triangle);
var ArrowLeftSmallIcon = IconBase(arrow_left_small);
var ArrowLeftIcon = IconBase(arrow_left);
var ArrowRightSmallIcon = IconBase(arrow_right_small);
var ArrowRightIcon = IconBase(arrow_right);
var CaretRightSmallIcon = IconBase(caret_right_small);
var CashlinkIcon = IconBase(cashlink);
// export const CashlinkSmallIcon = IconBase(CashlinkSmall);
// export const CashlinkXSmallIcon = IconBase(CashlinkXSmall);
var CheckmarkIcon = IconBase(checkmark);
var CheckmarkSmallIcon = IconBase(checkmark_small);
var CloseIcon = IconBase(icons_close);
// export const ContactsIcon = IconBase(Contacts);
// export const CopyIcon = IconBase(Copy);
// export const CrossIcon = IconBase(Cross);
var DownloadIcon = IconBase(download);
var FaceNeutralIcon = IconBase(face_neutral);
var FaceSadIcon = IconBase(face_sad);
// export const GearIcon = IconBase(Gear);
// export const HexagonIcon = IconBase(Hexagon);
// export const InfoCircleIcon = IconBase(InfoCircle);
// export const InfoCircleSmallIcon = IconBase(InfoCircleSmall);
// export const KeysIcon = IconBase(Keys);
var LedgerIcon = IconBase(ledger);
// export const LockLockedIcon = IconBase(LockLocked);
// export const LockUnlockedIcon = IconBase(LockUnlocked);
var LoginIcon = IconBase(login);
// export const MenuDotsIcon = IconBase(MenuDots);
var PlusCircleIcon = IconBase(plus_circle);
var QrCodeIcon = IconBase(qr_code);
// export const QuestionmarkIcon = IconBase(Questionmark);
var ScanQrCodeIcon = IconBase(scan_qr_code);
var SettingsIcon = IconBase(settings);
var StopwatchIcon = IconBase(stopwatch);
var TransferIcon = IconBase(transfer);
var UnderPaymentIcon = IconBase(under_payment);
// export const ViewOffIcon = IconBase(ViewOff);
// export const ViewIcon = IconBase(View);
// tslint:enable:variable-name
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--14-1!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/CloseButton.vue?vue&type=script&lang=ts







var CloseButtonvue_type_script_lang_ts_CloseButton = /*#__PURE__*/function (_Vue) {
  function CloseButton() {
    _classCallCheck(this, CloseButton);
    return _callSuper(this, CloseButton, arguments);
  }
  _inherits(CloseButton, _Vue);
  return _createClass(CloseButton, [{
    key: "click",
    value: function click(event) {}
  }]);
}(external_vue_property_decorator_["Vue"]);
__decorate([Object(external_vue_property_decorator_["Emit"])()], CloseButtonvue_type_script_lang_ts_CloseButton.prototype, "click", null);
CloseButtonvue_type_script_lang_ts_CloseButton = __decorate([Object(external_vue_property_decorator_["Component"])({
  components: {
    CloseIcon: CloseIcon
  }
})], CloseButtonvue_type_script_lang_ts_CloseButton);
/* harmony default export */ var CloseButtonvue_type_script_lang_ts = (CloseButtonvue_type_script_lang_ts_CloseButton);
// CONCATENATED MODULE: ./src/components/CloseButton.vue?vue&type=script&lang=ts
 /* harmony default export */ var components_CloseButtonvue_type_script_lang_ts = (CloseButtonvue_type_script_lang_ts); 
// EXTERNAL MODULE: ./src/components/CloseButton.vue?vue&type=style&index=0&id=f70dd1ae&prod&scoped=true&lang=css
var CloseButtonvue_type_style_index_0_id_f70dd1ae_prod_scoped_true_lang_css = __webpack_require__("9185");

// CONCATENATED MODULE: ./src/components/CloseButton.vue






/* normalize component */

var CloseButton_component = normalizeComponent(
  components_CloseButtonvue_type_script_lang_ts,
  CloseButtonvue_type_template_id_f70dd1ae_scoped_true_render,
  CloseButtonvue_type_template_id_f70dd1ae_scoped_true_staticRenderFns,
  false,
  null,
  "f70dd1ae",
  null
  
)

/* harmony default export */ var components_CloseButton = (CloseButton_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--14-1!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/AccountDetails.vue?vue&type=script&lang=ts











var AccountDetailsvue_type_script_lang_ts_AccountDetails = /*#__PURE__*/function (_Vue) {
  function AccountDetails() {
    _classCallCheck(this, AccountDetails);
    return _callSuper(this, AccountDetails, arguments);
  }
  _inherits(AccountDetails, _Vue);
  return _createClass(AccountDetails, [{
    key: "focus",
    value: function focus() {
      if (this.editable) {
        this.$refs.account.focus();
      }
    }
  }, {
    key: "close",
    value: function close() {}
  }, {
    key: "changed",
    value: function changed(label) {}
  }]);
}(external_vue_property_decorator_["Vue"]);
__decorate([Object(external_vue_property_decorator_["Prop"])(String)], AccountDetailsvue_type_script_lang_ts_AccountDetails.prototype, "address", void 0);
__decorate([Object(external_vue_property_decorator_["Prop"])(String)], AccountDetailsvue_type_script_lang_ts_AccountDetails.prototype, "image", void 0);
__decorate([Object(external_vue_property_decorator_["Prop"])(String)], AccountDetailsvue_type_script_lang_ts_AccountDetails.prototype, "label", void 0);
__decorate([Object(external_vue_property_decorator_["Prop"])(String)], AccountDetailsvue_type_script_lang_ts_AccountDetails.prototype, "walletLabel", void 0);
__decorate([Object(external_vue_property_decorator_["Prop"])(Number)], AccountDetailsvue_type_script_lang_ts_AccountDetails.prototype, "balance", void 0);
__decorate([Object(external_vue_property_decorator_["Prop"])(Boolean)], AccountDetailsvue_type_script_lang_ts_AccountDetails.prototype, "editable", void 0);
__decorate([Object(external_vue_property_decorator_["Prop"])(String)], AccountDetailsvue_type_script_lang_ts_AccountDetails.prototype, "placeholder", void 0);
__decorate([Object(external_vue_property_decorator_["Emit"])()], AccountDetailsvue_type_script_lang_ts_AccountDetails.prototype, "close", null);
__decorate([Object(external_vue_property_decorator_["Emit"])()], AccountDetailsvue_type_script_lang_ts_AccountDetails.prototype, "changed", null);
AccountDetailsvue_type_script_lang_ts_AccountDetails = __decorate([Object(external_vue_property_decorator_["Component"])({
  components: {
    Account: components_Account,
    Amount: components_Amount,
    AddressDisplay: components_AddressDisplay,
    CloseButton: components_CloseButton
  }
})], AccountDetailsvue_type_script_lang_ts_AccountDetails);
/* harmony default export */ var AccountDetailsvue_type_script_lang_ts = (AccountDetailsvue_type_script_lang_ts_AccountDetails);
// CONCATENATED MODULE: ./src/components/AccountDetails.vue?vue&type=script&lang=ts
 /* harmony default export */ var components_AccountDetailsvue_type_script_lang_ts = (AccountDetailsvue_type_script_lang_ts); 
// EXTERNAL MODULE: ./src/components/AccountDetails.vue?vue&type=style&index=0&id=4d576866&prod&scoped=true&lang=css
var AccountDetailsvue_type_style_index_0_id_4d576866_prod_scoped_true_lang_css = __webpack_require__("0e93");

// CONCATENATED MODULE: ./src/components/AccountDetails.vue






/* normalize component */

var AccountDetails_component = normalizeComponent(
  components_AccountDetailsvue_type_script_lang_ts,
  AccountDetailsvue_type_template_id_4d576866_scoped_true_render,
  AccountDetailsvue_type_template_id_4d576866_scoped_true_staticRenderFns,
  false,
  null,
  "4d576866",
  null
  
)

/* harmony default export */ var components_AccountDetails = (AccountDetails_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"6f718cbb-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/AccountList.vue?vue&type=template&id=4a1e75b7&scoped=true
var AccountListvue_type_template_id_4a1e75b7_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"account-list"},_vm._l((_vm.accounts),function(account){return _c(!_vm._isDisabled(account) && !_vm.editable ? 'a' : 'div',{key:account.userFriendlyAddress,tag:"component",staticClass:"account-entry",class:{
            'disabled': _vm._isDisabled(account),
            'has-tooltip': _vm._hasTooltip(account),
            'highlight-insufficient-balance': _vm.highlightedDisabledAddress === account.userFriendlyAddress
                && _vm._hasInsufficientBalance(account)
                && !_vm._isDisabledContract(account)
                && !_vm._isDisabledAccount(account),
        },attrs:{"href":"javascript:void(0)"},on:{"click":function($event){return _vm.accountSelected(account)}}},[_c('Account',{ref:account.userFriendlyAddress,refInFor:true,attrs:{"address":account.userFriendlyAddress,"label":account.label,"placeholder":account.defaultLabel,"balance":_vm.minBalance ? account.balance : undefined,"decimals":_vm.decimals,"editable":_vm.editable && !_vm.disabled},on:{"changed":function($event){return _vm.accountChanged(account.userFriendlyAddress, $event)}}}),(!_vm._isDisabled(account))?_c('CaretRightSmallIcon',{staticClass:"caret"}):_vm._e(),(_vm._hasTooltip(account))?_c('Tooltip',_vm._b({ref:("tooltip-" + (account.userFriendlyAddress)),refInFor:true,nativeOn:{"click":function($event){$event.stopPropagation();}}},'Tooltip',Object.assign({}, {preferredPosition: 'bottom left'},
                _vm.tooltipProps,
                {styles: Object.assign({}, {width: '22.25rem',
                    pointerEvents: 'none'},
                    (_vm.tooltipProps ? _vm.tooltipProps.styles : undefined))}),false),[_vm._v(" "+_vm._s(_vm._isDisabledContract(account) ? _vm.$t('Contracts cannot be used for this operation.') : _vm.$t('This address cannot be used for this operation.'))+" ")]):_vm._e()],1)}),1)}
var AccountListvue_type_template_id_4a1e75b7_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/AccountList.vue?vue&type=template&id=4a1e75b7&scoped=true

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"6f718cbb-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Tooltip.vue?vue&type=template&id=2a3055e0&scoped=true
var Tooltipvue_type_template_id_2a3055e0_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',{staticClass:"tooltip",class:[_vm.positionCssClass, {
        shown: _vm.isShown,
        'inverse-theme': _vm.theme === _vm.constructor.Themes.INVERSE,
    }],style:(_vm.background && ("--background: " + _vm.background)),on:{"mouseenter":function($event){return _vm.mouseOver(true)},"mouseleave":function($event){return _vm.mouseOver(false)}}},[_c('a',{ref:"tooltipTrigger",staticClass:"trigger",attrs:{"href":"javascript:void(0);","tabindex":_vm.disabled || _vm.noFocus ? -1 : 0},on:{"focus":function($event){$event.stopPropagation();return _vm.show()},"blur":function($event){$event.stopPropagation();return _vm.hide()},"click":function($event){return _vm.onClick()}}},[(!_vm.$slots.icon)?_vm._t("trigger",[_c('AlertTriangleIcon',{staticClass:"nq-orange"})]):_vm._e(),(_vm.$slots.icon && !_vm.$slots.trigger)?_vm._t("icon"):_vm._e()],2),_c('transition',{attrs:{"name":"transition-fade"}},[(_vm.isShown)?_c('div',{ref:"tooltipBox",staticClass:"tooltip-box",style:(_vm.tooltipBoxStyles)},[_vm._t("default")],2):_vm._e()])],1)}
var Tooltipvue_type_template_id_2a3055e0_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Tooltip.vue?vue&type=template&id=2a3055e0&scoped=true

// CONCATENATED MODULE: ./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js
function _arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
}

// CONCATENATED MODULE: ./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js








function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = !0, n = r;
    } finally {
      try {
        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}

// CONCATENATED MODULE: ./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/helpers/esm/nonIterableRest.js

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

// CONCATENATED MODULE: ./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js




function _slicedToArray(r, e) {
  return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
}

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.filter.js
var es_array_filter = __webpack_require__("8f71");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptor.js
var es_object_get_own_property_descriptor = __webpack_require__("9a2c");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptors.js
var es_object_get_own_property_descriptors = __webpack_require__("a644");

// CONCATENATED MODULE: ./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js









function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {
      _defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.entries.js
var es_object_entries = __webpack_require__("0829");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.values.js
var es_object_values = __webpack_require__("22b6");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--14-1!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Tooltip.vue?vue&type=script&lang=ts

















var Tooltip_1;



var Tooltipvue_type_script_lang_ts_Tooltip = Tooltip_1 = /*#__PURE__*/function (_Vue) {
  function Tooltip() {
    var _this;
    _classCallCheck(this, Tooltip);
    _this = _callSuper(this, Tooltip, arguments);
    _this.tooltipToggled = false;
    _this.mousedOver = false;
    _this.lastToggle = -1;
    _this.height = 0;
    _this.width = 0;
    _this.maxWidth = 0;
    _this.left = 0;
    _this.right = 0;
    _this.top = 0;
    _this.positionCssClass = '';
    return _this;
  }
  _inherits(Tooltip, _Vue);
  return _createClass(Tooltip, [{
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
      return _objectSpread2(_objectSpread2({}, this.styles), {}, {
        top: this.top + 'px',
        left: this.left ? this.left + 'px' : undefined,
        right: this.right ? this.right + 'px' : undefined,
        width: this.effectiveContainer && this.autoWidth ? this.width + 'px' : (this.styles || {}).width,
        maxWidth: this.effectiveContainer ? this.maxWidth + 'px' : (this.styles || {}).maxWidth
      });
    }
  }, {
    key: "created",
    value: function created() {
      this.updatePosition = this.updatePosition.bind(this);
    }
  }, {
    key: "mounted",
    value: function mounted() {
      if ('icon' in this.$slots) {
        console.warn('Tooltip: Slot `icon` is deprecated and support will be removed in the future.' + ' Use slot `trigger` instead.');
      }
      // Manually trigger an update instead of using immediate watchers to avoid unnecessary initial double updates
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
      if (this.disabled) return;
      this.tooltipToggled = true;
    }
  }, {
    key: "hide",
    value: function hide() {
      var force = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      if (this.disabled) return;
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
      var _update = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(newWatcherValue) {
        var _this2 = this;
        var container;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (this.isShown) {
                _context.next = 5;
                break;
              }
              if (newWatcherValue === false) {
                this.lastToggle = Date.now();
                this.$emit('hide');
              }
              return _context.abrupt("return");
            case 5:
              if (newWatcherValue === true) {
                this.lastToggle = Date.now();
                this.$emit('show');
              }
            case 6:
              if (this.$el) {
                _context.next = 9;
                break;
              }
              _context.next = 9;
              return new Promise(function (resolve) {
                return _this2.$once('hook:mounted', resolve);
              });
            case 9:
              container = this.effectiveContainer;
              if (!container) {
                _context.next = 18;
                break;
              }
              if (!(!container.$el && container instanceof external_vue_property_decorator_["Vue"])) {
                _context.next = 16;
                break;
              }
              _context.next = 14;
              return new Promise(function (resolve) {
                return container.$once('hook:mounted', resolve);
              });
            case 14:
              if (!(container !== this.effectiveContainer)) {
                _context.next = 16;
                break;
              }
              return _context.abrupt("return");
            case 16:
              _context.next = 18;
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
            case 18:
              _context.next = 20;
              return external_vue_property_decorator_["Vue"].nextTick();
            case 20:
              if (!(!this.isShown || !('tooltipBox' in this.$refs && this.$refs.tooltipBox))) {
                _context.next = 22;
                break;
              }
              return _context.abrupt("return");
            case 22:
              // not visible anymore?
              // here we need the quick reflow to avoid that the visible tooltip gets rendered at the wrong position,
              // potentially causing scroll bars
              this.height = this.$refs.tooltipBox.offsetHeight;
              this.width = this.$refs.tooltipBox.offsetWidth;
              this.updatePosition();
            case 25:
            case "end":
              return _context.stop();
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
      var _this3 = this;
      // If the tooltip is not shown or the tooltipBox reference is missing, exit the function early
      if (!this.isShown || !('tooltipBox' in this.$refs && this.$refs.tooltipBox)) return;
      // Destructure the preferred position into primary and secondary positions
      var _this$preferredPositi = this.preferredPosition.split(' '),
        _this$preferredPositi2 = _slicedToArray(_this$preferredPositi, 2),
        preferredPrimaryPosition = _this$preferredPositi2[0],
        preferredSecondaryPosition = _this$preferredPositi2[1];
      // Determine if the primary position is vertical or horizontal
      var isPrimaryVertical = Object.values(Tooltip_1.VerticalPosition).includes(preferredPrimaryPosition);
      var isPrimaryHorizontal = Object.values(Tooltip_1.HorizontalPosition).includes(preferredPrimaryPosition);
      // Get the container and trigger bounding rectangles for position calculations.
      // Note that in his method we do not need to use requestAnimationFrame to avoid reflows, as the method is
      // already called as a scroll event listener or manually in update after a reflow.
      var container = this.effectiveContainer;
      var triggerBoundingRect = this.$refs.tooltipTrigger.getBoundingClientRect();
      var containerBoundingRect = container && container.$el ? container.$el.getBoundingClientRect() : null;
      var containerMargins = _defineProperty(_defineProperty(_defineProperty(_defineProperty({}, Tooltip_1.VerticalPosition.TOP, this.getMargin(Tooltip_1.VerticalPosition.TOP)), Tooltip_1.HorizontalPosition.RIGHT, this.getMargin(Tooltip_1.HorizontalPosition.RIGHT)), Tooltip_1.VerticalPosition.BOTTOM, this.getMargin(Tooltip_1.VerticalPosition.BOTTOM)), Tooltip_1.HorizontalPosition.LEFT, this.getMargin(Tooltip_1.HorizontalPosition.LEFT));
      // Define a clamp function to keep a value within a specified range
      var clamp = function clamp(value, min, max) {
        return Math.min(Math.max(value, min), max);
      };
      // Function for positioning the tooltip if the primary position is a horizontal position.
      var setPositionForPrimaryHorizontal = function setPositionForPrimaryHorizontal(primary, secondary) {
        // Set the left, right, and top properties based on the primary and secondary positions
        _this3.left = primary === Tooltip_1.HorizontalPosition.RIGHT ? triggerBoundingRect.width : null;
        _this3.right = primary === Tooltip_1.HorizontalPosition.LEFT ? triggerBoundingRect.width : null;
        var topMostTopPosition = -_this3.height + triggerBoundingRect.height / 2 + 25;
        var bottomMostTopPosition = triggerBoundingRect.height / 2 - 25;
        // Calculate the clamping range for the top property
        var clampedTopMostTopPosition = containerBoundingRect ? clamp(topMostTopPosition, containerBoundingRect.top + containerMargins[Tooltip_1.VerticalPosition.TOP] - triggerBoundingRect.top,
        // expressed in trigger's coordinate system
        bottomMostTopPosition) : topMostTopPosition;
        var clampedBottomMostTopPosition = containerBoundingRect ? clamp(bottomMostTopPosition, topMostTopPosition, containerBoundingRect.top + containerBoundingRect.height - containerMargins[Tooltip_1.VerticalPosition.BOTTOM] - _this3.height - triggerBoundingRect.top) : bottomMostTopPosition;
        // Set the top property based on the secondary position and clamping range
        _this3.top = secondary === Tooltip_1.VerticalPosition.TOP ? clampedTopMostTopPosition : secondary === Tooltip_1.VerticalPosition.BOTTOM ? clampedBottomMostTopPosition : clamp(triggerBoundingRect.height / 2 - _this3.height / 2, clampedTopMostTopPosition, clampedBottomMostTopPosition);
        _this3.positionCssClass = "position-".concat(primary, "-").concat(secondary || 'center');
      };
      // Function for positioning the tooltip if the primary position is a vertical position.
      var setPositionForPrimaryVertical = function setPositionForPrimaryVertical(primary, secondary) {
        // Set the top, left, and primary position properties based on the primary and secondary positions
        _this3.top = primary === Tooltip_1.VerticalPosition.BOTTOM ? triggerBoundingRect.height : -_this3.height;
        var leftMostLeftPosition = triggerBoundingRect.width / 2 - _this3.width + 25;
        var rightMostLeftPosition = triggerBoundingRect.width / 2 - 25;
        // Calculate the clamping range for the left property
        var clampedLeftMostLeftPosition = containerBoundingRect ? clamp(leftMostLeftPosition, containerBoundingRect.left + containerMargins[Tooltip_1.HorizontalPosition.LEFT] - triggerBoundingRect.left,
        // expressed in trigger's coordinate system
        rightMostLeftPosition) : leftMostLeftPosition;
        var clampedRightMostLeftPosition = containerBoundingRect ? clamp(rightMostLeftPosition, leftMostLeftPosition, containerBoundingRect.left + containerBoundingRect.width - containerMargins[Tooltip_1.HorizontalPosition.RIGHT] - _this3.width - triggerBoundingRect.left) : rightMostLeftPosition;
        // Set the left property based on the secondary position and clamping range
        _this3.left = secondary === Tooltip_1.HorizontalPosition.LEFT ? clampedLeftMostLeftPosition : secondary === Tooltip_1.HorizontalPosition.RIGHT ? clampedRightMostLeftPosition : clamp(triggerBoundingRect.width / 2 - _this3.width / 2, clampedLeftMostLeftPosition, clampedRightMostLeftPosition);
        _this3.positionCssClass = "position-".concat(primary, "-").concat(secondary || 'center');
      };
      // If the container and containerBoundingRect are available, calculate bounds and fitting conditions
      if (container && containerBoundingRect) {
        // Calculate the difference between the trigger and container bounding rectangles
        var calculateAvailableSpace = function calculateAvailableSpace(dir) {
          return Math.abs(triggerBoundingRect[dir] - containerBoundingRect[dir] + (dir === 'left' || dir === 'top' ? -1 : 1) * containerMargins[dir]);
        };
        // Set the tooltip position based on primary and secondary preferences
        if (isPrimaryVertical) {
          var heightNeeded = this.height + /* for the arrow */16;
          var fitsTop = calculateAvailableSpace(Tooltip_1.VerticalPosition.TOP) >= heightNeeded;
          var fitsBottom = calculateAvailableSpace(Tooltip_1.VerticalPosition.BOTTOM) >= heightNeeded;
          setPositionForPrimaryVertical(!fitsTop && fitsBottom ? Tooltip_1.VerticalPosition.BOTTOM : fitsTop && !fitsBottom ? Tooltip_1.VerticalPosition.TOP : preferredPrimaryPosition, preferredSecondaryPosition);
        } else if (isPrimaryHorizontal) {
          var widthNeeded = this.width + /* for the arrow */16;
          var fitsLeft = calculateAvailableSpace(Tooltip_1.HorizontalPosition.LEFT) >= widthNeeded;
          var fitsRight = calculateAvailableSpace(Tooltip_1.HorizontalPosition.RIGHT) >= widthNeeded;
          setPositionForPrimaryHorizontal(!fitsLeft && fitsRight ? Tooltip_1.HorizontalPosition.RIGHT : fitsLeft && !fitsRight ? Tooltip_1.HorizontalPosition.LEFT : preferredPrimaryPosition, preferredSecondaryPosition);
        }
      } else {
        // If no container is provided, set the tooltip position based on primary and secondary preferences
        if (isPrimaryVertical) {
          setPositionForPrimaryVertical(preferredPrimaryPosition, preferredSecondaryPosition);
        } else if (isPrimaryHorizontal) {
          setPositionForPrimaryHorizontal(preferredPrimaryPosition, preferredSecondaryPosition);
        }
      }
    }
  }, {
    key: "setContainer",
    value: function () {
      var _setContainer = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(newContainer, oldContainer) {
        var _this4 = this;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
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
                    newContainer.$el.addEventListener('scroll', _this4.updatePosition);
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
      return parseInt(window.getComputedStyle(containerEl, null).getPropertyValue("padding-".concat(position)), 10);
    }
  }, {
    key: "mouseOver",
    value: function mouseOver(mouseOverTooltip) {
      var _this5 = this;
      if (!mouseOverTooltip) {
        // mouseleave
        this.mouseOverTimeout = window.setTimeout(function () {
          return _this5.mousedOver = false;
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
      this.toggle( /* force */true);
      this.$emit('click');
    }
  }]);
}(external_vue_property_decorator_["Vue"]);
__decorate([Object(external_vue_property_decorator_["Prop"])(Object)], Tooltipvue_type_script_lang_ts_Tooltip.prototype, "container", void 0);
__decorate([Object(external_vue_property_decorator_["Prop"])(Boolean)], Tooltipvue_type_script_lang_ts_Tooltip.prototype, "disabled", void 0);
__decorate([Object(external_vue_property_decorator_["Prop"])(Boolean)], Tooltipvue_type_script_lang_ts_Tooltip.prototype, "noFocus", void 0);
__decorate([Object(external_vue_property_decorator_["Prop"])({
  type: String,
  default: 'top right',
  validator: function validator(value) {
    if (typeof value !== 'string') return false;
    var _value$split = value.split(' '),
      _value$split2 = _slicedToArray(_value$split, 2),
      primaryPosition = _value$split2[0],
      secondaryPosition = _value$split2[1];
    var isValidPrimaryVertical = Object.values(Tooltip_1.VerticalPosition).includes(primaryPosition);
    var isValidPrimaryHorizontal = Object.values(Tooltip_1.HorizontalPosition).includes(primaryPosition);
    var isValidSecondaryHorizontal = !secondaryPosition || Object.values(Tooltip_1.HorizontalPosition).includes(secondaryPosition);
    var isValidSecondaryVertical = !secondaryPosition || Object.values(Tooltip_1.VerticalPosition).includes(secondaryPosition);
    return isValidPrimaryVertical && isValidSecondaryHorizontal || isValidPrimaryHorizontal && isValidSecondaryVertical;
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
__decorate([Object(external_vue_property_decorator_["Prop"])(String)], Tooltipvue_type_script_lang_ts_Tooltip.prototype, "background", void 0);
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
/* harmony default export */ var Tooltipvue_type_script_lang_ts = (Tooltipvue_type_script_lang_ts_Tooltip);
// CONCATENATED MODULE: ./src/components/Tooltip.vue?vue&type=script&lang=ts
 /* harmony default export */ var components_Tooltipvue_type_script_lang_ts = (Tooltipvue_type_script_lang_ts); 
// EXTERNAL MODULE: ./src/components/Tooltip.vue?vue&type=style&index=0&id=2a3055e0&prod&scoped=true&lang=css
var Tooltipvue_type_style_index_0_id_2a3055e0_prod_scoped_true_lang_css = __webpack_require__("3329");

// CONCATENATED MODULE: ./src/components/Tooltip.vue






/* normalize component */

var Tooltip_component = normalizeComponent(
  components_Tooltipvue_type_script_lang_ts,
  Tooltipvue_type_template_id_2a3055e0_scoped_true_render,
  Tooltipvue_type_template_id_2a3055e0_scoped_true_staticRenderFns,
  false,
  null,
  "2a3055e0",
  null
  
)

/* harmony default export */ var components_Tooltip = (Tooltip_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--14-1!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/AccountList.vue?vue&type=script&lang=ts













var AccountListvue_type_script_lang_ts_AccountList = /*#__PURE__*/function (_Mixins) {
  function AccountList() {
    var _this;
    _classCallCheck(this, AccountList);
    _this = _callSuper(this, AccountList, arguments);
    _this.highlightedDisabledAddress = null;
    _this.highlightedDisabledAddressTimeout = -1;
    return _this;
  }
  _inherits(AccountList, _Mixins);
  return _createClass(AccountList, [{
    key: "focus",
    value: function focus(address) {
      if (this.editable && this.$refs.hasOwnProperty(address)) {
        this.$refs[address][0].focus();
      }
    }
  }, {
    key: "accountSelected",
    value: function accountSelected(account) {
      var _this2 = this;
      if (this.disabled || this.editable) return;
      window.clearTimeout(this.highlightedDisabledAddressTimeout);
      if (account.userFriendlyAddress !== this.highlightedDisabledAddress) {
        this._clearHighlightedDisabledAddress();
      }
      var isDisabledContract = this._isDisabledContract(account);
      var isDisabledAccount = this._isDisabledAccount(account);
      if (isDisabledContract || isDisabledAccount || this._hasInsufficientBalance(account)) {
        this.highlightedDisabledAddress = account.userFriendlyAddress;
        if (this.$refs["tooltip-".concat(this.highlightedDisabledAddress)]) {
          this.$refs["tooltip-".concat(this.highlightedDisabledAddress)][0].show();
        }
        var waitTime = isDisabledContract || isDisabledAccount ? 2000 : 300;
        this.highlightedDisabledAddressTimeout = window.setTimeout(function () {
          return _this2._clearHighlightedDisabledAddress();
        }, waitTime);
      } else {
        this.$emit('account-selected', account.walletId || this.walletId, account.userFriendlyAddress);
      }
    }
  }, {
    key: "accountChanged",
    value: function accountChanged(address, label) {}
  }, {
    key: "_isDisabled",
    value: function _isDisabled(account) {
      return this.disabled || !this.editable && (this._isDisabledContract(account) || this._isDisabledAccount(account) || this._hasInsufficientBalance(account));
    }
  }, {
    key: "_isDisabledContract",
    value: function _isDisabledContract(account) {
      return this.disableContracts && !('path' in account && account.path);
    }
  }, {
    key: "_isDisabledAccount",
    value: function _isDisabledAccount(account) {
      return this.disabledAddresses.includes(account.userFriendlyAddress);
    }
  }, {
    key: "_hasInsufficientBalance",
    value: function _hasInsufficientBalance(account) {
      return this.minBalance && account.balance < this.minBalance;
    }
  }, {
    key: "_hasTooltip",
    value: function _hasTooltip(account) {
      return !this.disabled && !this.editable && (this._isDisabledContract(account) || this._isDisabledAccount(account));
    }
  }, {
    key: "_clearHighlightedDisabledAddress",
    value: function _clearHighlightedDisabledAddress() {
      if (!this.highlightedDisabledAddress) return;
      if (this.$refs["tooltip-".concat(this.highlightedDisabledAddress)]) {
        // Hide tooltip if it's not hovered
        this.$refs["tooltip-".concat(this.highlightedDisabledAddress)][0].hide( /* force */false);
      }
      this.highlightedDisabledAddress = null;
    }
  }]);
}(Object(external_vue_property_decorator_["Mixins"])(i18n_I18nMixin));
__decorate([Object(external_vue_property_decorator_["Prop"])(Array)], AccountListvue_type_script_lang_ts_AccountList.prototype, "accounts", void 0);
__decorate([Object(external_vue_property_decorator_["Prop"])({
  type: Array,
  default: function _default() {
    return [];
  }
})], AccountListvue_type_script_lang_ts_AccountList.prototype, "disabledAddresses", void 0);
__decorate([Object(external_vue_property_decorator_["Prop"])(String)], AccountListvue_type_script_lang_ts_AccountList.prototype, "walletId", void 0);
__decorate([Object(external_vue_property_decorator_["Prop"])(Boolean)], AccountListvue_type_script_lang_ts_AccountList.prototype, "editable", void 0);
__decorate([Object(external_vue_property_decorator_["Prop"])(Number)], AccountListvue_type_script_lang_ts_AccountList.prototype, "decimals", void 0);
__decorate([Object(external_vue_property_decorator_["Prop"])(Number)], AccountListvue_type_script_lang_ts_AccountList.prototype, "minBalance", void 0);
__decorate([Object(external_vue_property_decorator_["Prop"])(Boolean)], AccountListvue_type_script_lang_ts_AccountList.prototype, "disableContracts", void 0);
__decorate([Object(external_vue_property_decorator_["Prop"])(Boolean)], AccountListvue_type_script_lang_ts_AccountList.prototype, "disabled", void 0);
__decorate([Object(external_vue_property_decorator_["Prop"])(Object)], AccountListvue_type_script_lang_ts_AccountList.prototype, "tooltipProps", void 0);
__decorate([Object(external_vue_property_decorator_["Emit"])()], AccountListvue_type_script_lang_ts_AccountList.prototype, "accountChanged", null);
AccountListvue_type_script_lang_ts_AccountList = __decorate([Object(external_vue_property_decorator_["Component"])({
  name: 'AccountList',
  components: {
    Account: components_Account,
    Tooltip: components_Tooltip,
    CaretRightSmallIcon: CaretRightSmallIcon
  }
})], AccountListvue_type_script_lang_ts_AccountList);
/* harmony default export */ var AccountListvue_type_script_lang_ts = (AccountListvue_type_script_lang_ts_AccountList);
// CONCATENATED MODULE: ./src/components/AccountList.vue?vue&type=script&lang=ts
 /* harmony default export */ var components_AccountListvue_type_script_lang_ts = (AccountListvue_type_script_lang_ts); 
// EXTERNAL MODULE: ./src/components/AccountList.vue?vue&type=style&index=0&id=4a1e75b7&prod&scoped=true&lang=css
var AccountListvue_type_style_index_0_id_4a1e75b7_prod_scoped_true_lang_css = __webpack_require__("6dd0");

// CONCATENATED MODULE: ./src/components/AccountList.vue






/* normalize component */

var AccountList_component = normalizeComponent(
  components_AccountListvue_type_script_lang_ts,
  AccountListvue_type_template_id_4a1e75b7_scoped_true_render,
  AccountListvue_type_template_id_4a1e75b7_scoped_true_staticRenderFns,
  false,
  null,
  "4a1e75b7",
  null
  
)

/* harmony default export */ var components_AccountList = (AccountList_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"6f718cbb-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/AccountRing.vue?vue&type=template&id=693b8320&scoped=true
var AccountRingvue_type_template_id_693b8320_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"account-ring"},_vm._l((6),function(n){return _c('div',{key:n,staticClass:"account"},[_c('Identicon',{class:{ 'pop-in': _vm.animate && _vm.addresses.length >= n },attrs:{"address":_vm.addresses[n - 1]}})],1)}),0)}
var AccountRingvue_type_template_id_693b8320_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/AccountRing.vue?vue&type=template&id=693b8320&scoped=true

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--14-1!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/AccountRing.vue?vue&type=script&lang=ts







var AccountRingvue_type_script_lang_ts_AccountRing = /*#__PURE__*/function (_Vue) {
  function AccountRing() {
    _classCallCheck(this, AccountRing);
    return _callSuper(this, AccountRing, arguments);
  }
  _inherits(AccountRing, _Vue);
  return _createClass(AccountRing);
}(external_vue_property_decorator_["Vue"]);
__decorate([Object(external_vue_property_decorator_["Prop"])({
  default: function _default() {
    return [];
  },
  type: Array
})], AccountRingvue_type_script_lang_ts_AccountRing.prototype, "addresses", void 0);
__decorate([Object(external_vue_property_decorator_["Prop"])({
  default: false,
  type: Boolean
})], AccountRingvue_type_script_lang_ts_AccountRing.prototype, "animate", void 0);
AccountRingvue_type_script_lang_ts_AccountRing = __decorate([Object(external_vue_property_decorator_["Component"])({
  components: {
    Identicon: components_Identicon
  }
})], AccountRingvue_type_script_lang_ts_AccountRing);
/* harmony default export */ var AccountRingvue_type_script_lang_ts = (AccountRingvue_type_script_lang_ts_AccountRing);
// CONCATENATED MODULE: ./src/components/AccountRing.vue?vue&type=script&lang=ts
 /* harmony default export */ var components_AccountRingvue_type_script_lang_ts = (AccountRingvue_type_script_lang_ts); 
// EXTERNAL MODULE: ./src/components/AccountRing.vue?vue&type=style&index=0&id=693b8320&prod&scoped=true&lang=css
var AccountRingvue_type_style_index_0_id_693b8320_prod_scoped_true_lang_css = __webpack_require__("0a5b");

// CONCATENATED MODULE: ./src/components/AccountRing.vue






/* normalize component */

var AccountRing_component = normalizeComponent(
  components_AccountRingvue_type_script_lang_ts,
  AccountRingvue_type_template_id_693b8320_scoped_true_render,
  AccountRingvue_type_template_id_693b8320_scoped_true_staticRenderFns,
  false,
  null,
  "693b8320",
  null
  
)

/* harmony default export */ var components_AccountRing = (AccountRing_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"6f718cbb-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/AccountSelector.vue?vue&type=template&id=c7431aca&scoped=true
var AccountSelectorvue_type_template_id_c7431aca_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"account-selector"},[_c('div',{ref:"container",staticClass:"container",class:{'extra-spacing': _vm.wallets.length === 1}},_vm._l((_vm.sortedWallets),function(wallet){return _c('div',{key:wallet.id},[(_vm.wallets.length > 1 || _vm._isAccountDisabled(wallet))?_c('div',{staticClass:"wallet-label"},[_c('div',{staticClass:"nq-label"},[_vm._v(" "+_vm._s(wallet.label)+" "),(_vm.highlightBitcoinAccounts && wallet.btcXPub)?_c('span',{staticClass:"pill btc-pill"},[_vm._v("BTC")]):_vm._e(),(_vm.highlightUsdcAccounts && wallet.polygonAddresses && wallet.polygonAddresses.length)?_c('span',{staticClass:"pill usdc-pill"},[_vm._v("USDC")]):_vm._e()]),(_vm._isAccountDisabled(wallet))?_c('Tooltip',_vm._b({ref:("tooltip-" + (wallet.id)),refInFor:true},'Tooltip',Object.assign({}, _vm.tooltipProps,
                        {styles: Object.assign({}, {width: '25.25rem'},
                            _vm.tooltipProps.styles)}),false),[_vm._v(" "+_vm._s(_vm.$t( '{type} accounts cannot be used for this operation.', { type: _vm._getAccountTypeName(wallet)} ))+" ")]):_vm._e()],1):_vm._e(),_c('AccountList',{attrs:{"accounts":_vm._f("sortAccountsAndContracts")(_vm._f("listAccountsAndContracts")(wallet),_vm.minBalance, _vm.disableContracts, _vm.disabledAddresses),"disabledAddresses":_vm.disabledAddresses,"walletId":wallet.id,"minBalance":_vm.minBalance,"decimals":_vm.decimals,"disableContracts":_vm.disableContracts,"disabled":_vm._isAccountDisabled(wallet),"tooltipProps":_vm.tooltipProps},on:{"account-selected":_vm.accountSelected},nativeOn:{"click":function($event){return _vm._accountClicked(wallet)}}})],1)}),0),_c('div',{staticClass:"footer"},[(_vm.allowLogin)?_c('button',{staticClass:"nq-button-s",on:{"click":_vm.login}},[_vm._v(_vm._s(_vm.$t('Login to another account')))]):_vm._e()])])}
var AccountSelectorvue_type_template_id_c7431aca_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/AccountSelector.vue?vue&type=template&id=c7431aca&scoped=true

// CONCATENATED MODULE: ./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js

function _arrayWithoutHoles(r) {
  if (Array.isArray(r)) return _arrayLikeToArray(r);
}

// CONCATENATED MODULE: ./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/helpers/esm/iterableToArray.js








function _iterableToArray(r) {
  if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
}

// CONCATENATED MODULE: ./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

// CONCATENATED MODULE: ./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js




function _toConsumableArray(r) {
  return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread();
}

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.sort.js
var es_array_sort = __webpack_require__("4100");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--14-1!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/AccountSelector.vue?vue&type=script&lang=ts






















var AccountSelectorvue_type_script_lang_ts_AccountSelector = /*#__PURE__*/function (_Mixins) {
  function AccountSelector() {
    var _this;
    _classCallCheck(this, AccountSelector);
    _this = _callSuper(this, AccountSelector, arguments);
    _this.shownTooltip = null;
    _this.hideTooltipTimeout = -1;
    _this.tooltipProps = {
      container: null,
      preferredPosition: 'bottom right',
      margin: {
        left: 16,
        right: 16,
        top: 32,
        bottom: 32
      },
      styles: {
        pointerEvents: 'none'
      }
    };
    return _this;
  }
  _inherits(AccountSelector, _Mixins);
  return _createClass(AccountSelector, [{
    key: "sortedWallets",
    get: function get() {
      var _this2 = this;
      return this.wallets.slice(0).sort(function (a, b) {
        var aDisabled = _this2._isAccountDisabled(a);
        var bDisabled = _this2._isAccountDisabled(b);
        if (aDisabled && !bDisabled) return 1;
        if (!aDisabled && bDisabled) return -1;
        if (!_this2.minBalance) return 0; // don't sort by balance if no minBalance required
        var hasAddressWithSufficientBalance = function hasAddressWithSufficientBalance(accounts, contracts) {
          return Array.from(accounts.values()).some(function (account) {
            return account.balance >= _this2.minBalance;
          }) || !_this2.disableContracts && contracts.some(function (contract) {
            return contract.balance >= _this2.minBalance;
          });
        };
        var aHasAddressWithSufficientBalance = hasAddressWithSufficientBalance(a.accounts, a.contracts);
        var bHasAddressWithSufficientBalance = hasAddressWithSufficientBalance(b.accounts, b.contracts);
        if (!aHasAddressWithSufficientBalance && bHasAddressWithSufficientBalance) return 1;
        if (aHasAddressWithSufficientBalance && !bHasAddressWithSufficientBalance) return -1;
        return 0;
      });
    }
  }, {
    key: "mounted",
    value: function mounted() {
      this.tooltipProps.container = {
        $el: this.$refs.container
      };
    }
  }, {
    key: "accountSelected",
    value: function accountSelected(walletId, address) {}
  }, {
    key: "login",
    value: function login() {}
  }, {
    key: "_isAccountDisabled",
    value: function _isAccountDisabled(account) {
      return this.disableLegacyAccounts && account.type === 1 /* LEGACY */ || this.disableBip39Accounts && account.type === 2 /* BIP39 */ || this.disableLedgerAccounts && account.type === 3 /* LEDGER */;
    }
  }, {
    key: "_getAccountTypeName",
    value: function _getAccountTypeName(account) {
      switch (account.type) {
        case 1:
          return this.$t('Legacy');
        case 2:
          return 'Keyguard';
        case 3:
          return 'Ledger';
        default:
          throw new Error("Unknown account type ".concat(account.type));
      }
    }
  }, {
    key: "_accountClicked",
    value: function _accountClicked(account) {
      var _this3 = this;
      window.clearTimeout(this.hideTooltipTimeout);
      var tooltip = this.$refs["tooltip-".concat(account.id)] ? this.$refs["tooltip-".concat(account.id)][0] : null;
      if (this.shownTooltip && this.shownTooltip !== tooltip) {
        this.shownTooltip.hide( /* force */false);
      }
      if (tooltip) {
        tooltip.show();
        this.hideTooltipTimeout = window.setTimeout(function () {
          tooltip.hide( /* force */false);
          _this3.shownTooltip = null;
        }, 2000);
      }
      this.shownTooltip = tooltip;
    }
  }]);
}(Object(external_vue_property_decorator_["Mixins"])(i18n_I18nMixin));
__decorate([Object(external_vue_property_decorator_["Prop"])(Array)], AccountSelectorvue_type_script_lang_ts_AccountSelector.prototype, "wallets", void 0);
__decorate([Object(external_vue_property_decorator_["Prop"])({
  type: Array,
  default: function _default() {
    return [];
  }
})], AccountSelectorvue_type_script_lang_ts_AccountSelector.prototype, "disabledAddresses", void 0);
__decorate([Object(external_vue_property_decorator_["Prop"])(Number)], AccountSelectorvue_type_script_lang_ts_AccountSelector.prototype, "decimals", void 0);
__decorate([Object(external_vue_property_decorator_["Prop"])(Number)], AccountSelectorvue_type_script_lang_ts_AccountSelector.prototype, "minBalance", void 0);
__decorate([Object(external_vue_property_decorator_["Prop"])(Boolean)], AccountSelectorvue_type_script_lang_ts_AccountSelector.prototype, "disableContracts", void 0);
__decorate([Object(external_vue_property_decorator_["Prop"])(Boolean)], AccountSelectorvue_type_script_lang_ts_AccountSelector.prototype, "disableLegacyAccounts", void 0);
__decorate([Object(external_vue_property_decorator_["Prop"])(Boolean)], AccountSelectorvue_type_script_lang_ts_AccountSelector.prototype, "disableBip39Accounts", void 0);
__decorate([Object(external_vue_property_decorator_["Prop"])(Boolean)], AccountSelectorvue_type_script_lang_ts_AccountSelector.prototype, "disableLedgerAccounts", void 0);
__decorate([Object(external_vue_property_decorator_["Prop"])(Boolean)], AccountSelectorvue_type_script_lang_ts_AccountSelector.prototype, "highlightBitcoinAccounts", void 0);
__decorate([Object(external_vue_property_decorator_["Prop"])(Boolean)], AccountSelectorvue_type_script_lang_ts_AccountSelector.prototype, "highlightUsdcAccounts", void 0);
__decorate([Object(external_vue_property_decorator_["Prop"])({
  type: Boolean,
  default: true
})], AccountSelectorvue_type_script_lang_ts_AccountSelector.prototype, "allowLogin", void 0);
__decorate([Object(external_vue_property_decorator_["Emit"])()], AccountSelectorvue_type_script_lang_ts_AccountSelector.prototype, "accountSelected", null);
__decorate([Object(external_vue_property_decorator_["Emit"])()], AccountSelectorvue_type_script_lang_ts_AccountSelector.prototype, "login", null);
AccountSelectorvue_type_script_lang_ts_AccountSelector = __decorate([Object(external_vue_property_decorator_["Component"])({
  name: 'AccountSelector',
  components: {
    AccountList: components_AccountList,
    Tooltip: components_Tooltip
  },
  filters: {
    listAccountsAndContracts: function listAccountsAndContracts(wallet) {
      return [].concat(_toConsumableArray(wallet.accounts.values()), _toConsumableArray(wallet.contracts));
    },
    sortAccountsAndContracts: function sortAccountsAndContracts(accounts, minBalance, disableContracts, disabledAddresses) {
      if (!minBalance) return accounts;
      return accounts.sort(function (a, b) {
        // sort disabled contracts to the end
        var aIsDisabledContract = disableContracts && !('path' in a && a.path);
        var bIsDisabledContract = disableContracts && !('path' in b && b.path);
        if (aIsDisabledContract && !bIsDisabledContract) return 1;
        if (!aIsDisabledContract && bIsDisabledContract) return -1;
        // sort disabled addresses below other addresses
        var aIsDisabledAddress = disabledAddresses && disabledAddresses.includes(a.userFriendlyAddress);
        var bIsDisabledAddress = disabledAddresses && disabledAddresses.includes(b.userFriendlyAddress);
        if (aIsDisabledAddress && !bIsDisabledAddress) return 1;
        if (!aIsDisabledAddress && bIsDisabledAddress) return -1;
        // sort accounts with insufficient funds below accounts with enough balance
        if ((!a.balance || a.balance < minBalance) && b.balance && b.balance >= minBalance) return 1;
        if ((!b.balance || b.balance < minBalance) && a.balance && a.balance >= minBalance) return -1;
        return 0;
      });
    }
  }
})], AccountSelectorvue_type_script_lang_ts_AccountSelector);
/* harmony default export */ var AccountSelectorvue_type_script_lang_ts = (AccountSelectorvue_type_script_lang_ts_AccountSelector);
// CONCATENATED MODULE: ./src/components/AccountSelector.vue?vue&type=script&lang=ts
 /* harmony default export */ var components_AccountSelectorvue_type_script_lang_ts = (AccountSelectorvue_type_script_lang_ts); 
// EXTERNAL MODULE: ./src/components/AccountSelector.vue?vue&type=style&index=0&id=c7431aca&prod&scoped=true&lang=css
var AccountSelectorvue_type_style_index_0_id_c7431aca_prod_scoped_true_lang_css = __webpack_require__("618e");

// CONCATENATED MODULE: ./src/components/AccountSelector.vue






/* normalize component */

var AccountSelector_component = normalizeComponent(
  components_AccountSelectorvue_type_script_lang_ts,
  AccountSelectorvue_type_template_id_c7431aca_scoped_true_render,
  AccountSelectorvue_type_template_id_c7431aca_scoped_true_staticRenderFns,
  false,
  null,
  "c7431aca",
  null
  
)

/* harmony default export */ var components_AccountSelector = (AccountSelector_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"6f718cbb-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/AddressInput.vue?vue&type=template&id=bd6dd43a&scoped=true
var AddressInputvue_type_template_id_bd6dd43a_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"address-input",class:{
    'display-as-nim-address': _vm.displayAsNimAddress,
    'display-as-domain': _vm.displayAsDomain,
}},[_c('textarea',{ref:"textarea",attrs:{"spellcheck":"false","autocomplete":"off","placeholder":_vm.allowNimAddresses === _vm.allowEthAddresses ? false : _vm.allowNimAddresses ? 'NQ' : '0x'},on:{"keydown":_vm._onKeyDown,"input":_vm._onInput,"paste":_vm._onPaste,"cut":_vm._onCut,"copy":_vm._formatClipboard,"click":_vm._updateSelection,"select":_vm._updateSelection,"blur":_vm._updateSelection,"focus":_vm._onFocus}}),(_vm.displayAsNimAddress && _vm.supportsMixBlendMode)?[_vm._l((3),function(row){return [_vm._l((3),function(column){return [_c('div',{key:("color-" + row + "-" + column),staticClass:"color-overlay",style:({
                    /* Hidden when placeholder shown. Visibility instead of v-if to avoid flickering in Firefox */
                    visibility: _vm.currentValue ? 'visible' : 'hidden',
                    left: ("calc(" + (column - 1) + " * (var(--block-width) + var(--block-gap-h)) + var(--block-gap-h) - 0.25rem)"),
                    top: ("calc(" + (row - 1) + " * (var(--block-height) + var(--block-gap-v)) + var(--block-gap-v) + 0.25rem)"),
                    background: ("var(--nimiq-" + (_vm._isBlockFocused((row - 1) * 3 + (column - 1)) ? 'light-' : '') + "blue)"),
                })})]})]})]:_vm._e(),_c('transition',{attrs:{"name":"transition-fade"}},[(!_vm.displayAsDomain)?_c('svg',{staticClass:"grid",attrs:{"width":"210","height":"99","viewBox":"0 0 210 99","stroke-width":"1.5","stroke-linecap":"round","fill":"none","xmlns":"http://www.w3.org/2000/svg"}},[_c('line',{attrs:{"x1":"0.75","y1":"30.25","x2":"209.25","y2":"30.25"}}),_vm._v(" "),_c('line',{attrs:{"x1":"0.75","y1":"68.25","x2":"209.25","y2":"68.25"}}),_vm._v(" "),_c('transition',{attrs:{"name":"transition-fade"}},[(_vm.displayAsNimAddress)?_c('g',[_c('line',{attrs:{"x1":"67.75","y1":"0.75","x2":"67.75","y2":"22.25"}}),_vm._v(" "),_c('line',{attrs:{"x1":"143.75","y1":"0.75","x2":"143.75","y2":"22.25"}}),_vm._v(" "),_c('line',{attrs:{"x1":"67.75","y1":"37.75","x2":"67.75","y2":"60.25"}}),_vm._v(" "),_c('line',{attrs:{"x1":"143.75","y1":"37.75","x2":"143.75","y2":"60.25"}}),_vm._v(" "),_c('line',{attrs:{"x1":"67.75","y1":"75.75","x2":"67.75","y2":"98.25"}}),_vm._v(" "),_c('line',{attrs:{"x1":"143.75","y1":"75.75","x2":"143.75","y2":"98.25"}})]):_vm._e()])],1):_vm._e()])],2)}
var AddressInputvue_type_template_id_bd6dd43a_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/AddressInput.vue?vue&type=template&id=bd6dd43a&scoped=true

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.reduce.js
var es_array_reduce = __webpack_require__("473f");

// EXTERNAL MODULE: ./node_modules/input-format/modules/input control.js
var input_control = __webpack_require__("10e7");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--14-1!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/AddressInput.vue?vue&type=script&lang=ts






















var AddressInput_1;




var AddressInputvue_type_script_lang_ts_AddressInput = AddressInput_1 = /*#__PURE__*/function (_Vue) {
  function AddressInput() {
    var _this;
    _classCallCheck(this, AddressInput);
    _this = _callSuper(this, AddressInput, arguments);
    _this.currentValue = '';
    _this.selectionStartBlock = -1;
    _this.selectionEndBlock = -1;
    _this.supportsMixBlendMode = CSS.supports('mix-blend-mode', 'screen');
    return _this;
  }
  // definiton of the parse method for input-format (https://github.com/catamphetamine/input-format#usage)
  // The _parse method is called on every change to the textarea's content, on the entire content, one character at a
  // time. The parsed content is then formatted via _format and written back to the textarea.
  _inherits(AddressInput, _Vue);
  return _createClass(AddressInput, [{
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
    key: "parserFlags",
    get: function get() {
      return {
        allowNimAddresses: this.allowNimAddresses,
        allowEthAddresses: !!this.allowEthAddresses,
        allowDomains: !!this.allowDomains
      };
    }
  }, {
    key: "displayAsNimAddress",
    get: function get() {
      // initlially display as Nim address by default if Nim is the only allowed address type or no Eth is allowed and
      // no value is set yet.
      return this.allowNimAddresses && !this.allowEthAddresses && (!this.allowDomains || !this.currentValue) || AddressInput_1._willBeNimAddress(this.currentValue, this.parserFlags);
    }
  }, {
    key: "displayAsDomain",
    get: function get() {
      return this.allowDomains && !this.allowNimAddresses && !this.allowEthAddresses || AddressInput_1._willBeDomain(this.currentValue, this.parserFlags);
    }
  }, {
    key: "mounted",
    value: function mounted() {
      // trigger initial value change. Not using immediate watcher as it already fires before mounted.
      this._onExternalValueChange();
      // Bind selectionchange event handler. It has to be registered on document and is unfortunately not fired for
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
    value: function () {
      var _onExternalValueChange2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var _this2 = this;
        var parsedValue;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.t0 = AddressInput_1._stripWhitespace(this.currentValue)
              // Call _exportValue because currentValue is also exported / formatted.
              ;
              _context.t1 = AddressInput_1;
              _context.next = 4;
              return AddressInput_1._exportValue(this.value, this.parserFlags);
            case 4:
              _context.t2 = _context.sent;
              _context.t3 = _context.t1._stripWhitespace.call(_context.t1, _context.t2);
              if (!(_context.t0 === _context.t3)) {
                _context.next = 8;
                break;
              }
              return _context.abrupt("return");
            case 8:
              // could also be using format-input's parse and format helpers that preserve caret position but as we're not
              // interested in that, we calculate the formatted value manually
              parsedValue = this.value.split('').reduce(function (parsed, char) {
                return parsed + (AddressInput_1._parse(char, parsed, _this2.parserFlags) || '');
              }, '');
              this.$refs.textarea.value = AddressInput_1._format(parsedValue, this.parserFlags).text; // moves caret to the end
              _context.next = 12;
              return this._afterChange(parsedValue);
            case 12:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function _onExternalValueChange() {
        return _onExternalValueChange2.apply(this, arguments);
      }
      return _onExternalValueChange;
    }()
  }, {
    key: "_onKeyDown",
    value: function _onKeyDown(e) {
      var _this3 = this;
      Object(input_control["onKeyDown"])(e, this.$refs.textarea, function (char, value) {
        return AddressInput_1._parse(char, value, _this3.parserFlags);
      }, function (value) {
        return AddressInput_1._format(value, _this3.parserFlags);
      }, this._afterChange);
      setTimeout(function () {
        return _this3._updateSelection();
      }, 10); // for arrow keys in Firefox
    }
  }, {
    key: "_onInput",
    value: function _onInput(e) {
      var _this4 = this;
      if (e.inputType === 'deleteByDrag') return; // we'll handle the subsequent insertFromDrop
      var textarea = this.$refs.textarea;
      Object(input_control["onChange"])(e, textarea, function (char, value) {
        return AddressInput_1._parse(char, value, _this4.parserFlags);
      }, function (value) {
        return AddressInput_1._format(value, _this4.parserFlags);
      }, this._afterChange);
    }
  }, {
    key: "_onPaste",
    value: function _onPaste(e) {
      var _this5 = this;
      var clipboardData = e.clipboardData;
      var pastedData = clipboardData ? clipboardData.getData('text/plain') : '';
      this.$emit('paste', e, pastedData);
      Object(input_control["onPaste"])(e, this.$refs.textarea, function (char, value) {
        return AddressInput_1._parse(char, value, _this5.parserFlags);
      }, function (value) {
        return AddressInput_1._format(value, _this5.parserFlags);
      }, this._afterChange);
    }
  }, {
    key: "_onCut",
    value: function _onCut(e) {
      var _this6 = this;
      Object(input_control["onCut"])(e, this.$refs.textarea, function (char, value) {
        return AddressInput_1._parse(char, value, _this6.parserFlags);
      }, function (value) {
        return AddressInput_1._format(value, _this6.parserFlags);
      }, this._afterChange);
      this._formatClipboard();
    }
  }, {
    key: "_onFocus",
    value: function _onFocus() {
      var _this7 = this;
      // have to add a delay because the textarea is not focused yet at this point
      setTimeout(function () {
        return _this7._updateSelection();
      });
    }
  }, {
    key: "_formatClipboard",
    value: function () {
      var _formatClipboard2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var text;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return AddressInput_1._exportValue(document.getSelection().toString(), this.parserFlags);
            case 2:
              text = _context2.sent;
              setTimeout(function () {
                return Clipboard_Clipboard.copy(text);
              });
            case 4:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function _formatClipboard() {
        return _formatClipboard2.apply(this, arguments);
      }
      return _formatClipboard;
    }()
  }, {
    key: "_afterChange",
    value: function () {
      var _afterChange2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(value) {
        var textarea, currentValue, isValid, _isValid;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              // value is the unformatted value (i.e. the concatenation of characters returned by _parse)
              textarea = this.$refs.textarea; // if selection is a caret in front of a space or new line move caret behind it
              if (textarea.selectionStart === textarea.selectionEnd && (textarea.value[textarea.selectionStart] === ' ' || textarea.value[textarea.selectionStart] === '\n')) {
                textarea.selectionStart += 1; // this also moves the selectionEnd as they were equal
              }
              // Use a local variable currentValue in this method instead of this.currentValue because this.currentValue might
              // potentially change during this async method by a parallel invocation.
              _context3.next = 4;
              return AddressInput_1._exportValue(this.$refs.textarea.value, this.parserFlags);
            case 4:
              currentValue = _context3.sent;
              this.currentValue = currentValue;
              this.$emit('input', currentValue); // emit event compatible with v-model
              if (!AddressInput_1._willBeNimAddress(value, this.parserFlags)) {
                _context3.next = 13;
                break;
              }
              isValid = ValidationUtils_ValidationUtils.isValidAddress(currentValue);
              if (isValid) this.$emit('address', currentValue);
              // if user entered a full address that is not valid give him a visual feedback
              this.$el.classList.toggle('invalid', currentValue.length === AddressInput_1.NIM_ADDRESS_MAX_LENGTH && !isValid);
              _context3.next = 19;
              break;
            case 13:
              if (!AddressInput_1._willBeEthAddress(value, this.parserFlags)) {
                _context3.next = 19;
                break;
              }
              _context3.next = 16;
              return AddressInput_1._isValidEthAddress(currentValue);
            case 16:
              _isValid = _context3.sent;
              if (_isValid) {
                this.$emit('address', currentValue);
                // Write address with potentially added checksum back to the textarea. Note that this places the cursor
                // at the end and messes with undo, which is why we don't simply write the text back into the textarea
                // after each character. Unfortunately, we can't do the checksum formatting directly in _format because
                // it can't be async.
                this.$refs.textarea.value = AddressInput_1._format(currentValue, this.parserFlags).text;
              }
              // if user entered a full address that is not valid give him a visual feedback
              this.$el.classList.toggle('invalid', currentValue.length === AddressInput_1.ETH_ADDRESS_MAX_LENGTH && !_isValid);
            case 19:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
      function _afterChange(_x) {
        return _afterChange2.apply(this, arguments);
      }
      return _afterChange;
    }()
  }, {
    key: "_updateSelection",
    value: function _updateSelection() {
      var textarea = this.$refs.textarea;
      var focused = document.activeElement === textarea
      // If all blocks are filled and the caret is at the end display as if not focused.
      && (textarea.selectionStart !== AddressInput_1.NIM_ADDRESS_MAX_LENGTH || textarea.selectionEnd !== AddressInput_1.NIM_ADDRESS_MAX_LENGTH);
      this.selectionStartBlock = focused ? Math.floor(textarea.selectionStart / 5) : -1;
      this.selectionEndBlock = focused ? Math.floor(textarea.selectionEnd / 5) : -1;
    }
  }, {
    key: "_isBlockFocused",
    value: function _isBlockFocused(blockIndex) {
      return this.selectionStartBlock <= blockIndex && blockIndex <= this.selectionEndBlock;
    }
  }], [{
    key: "_parse",
    value: function _parse(char, value, parserFlags) {
      if (AddressInput_1._WHITESPACE_REGEX.test(char)) return; // skip whitespace as it will be added during formatting
      var addressChar = /* enable char replacement once address prefix NQ or 0x have been typed */value.length >= 2 ? AddressInput_1._ADDRESS_REPLACED_CHARS[char.toUpperCase()] || char : char;
      if (AddressInput_1._willBeNimAddress(value + addressChar, parserFlags)) {
        // We return the original character without transforming it to uppercase to improve compatibility with some
        // browsers that struggle with undo/redo of manipulated input. The actual transformation to uppercase is
        // then done via CSS and when the value is exported.
        return addressChar;
      } else if (AddressInput_1._willBeEthAddress(value + addressChar, parserFlags)) {
        if (value === '0' && addressChar === 'X') return 'x'; // Convert 0X prefix to more common 0x.
        return addressChar;
      } else if (AddressInput_1._willBeDomain(value + char, parserFlags)) {
        return char;
      }
      // else reject / skip character
    }
    // definiton of the format method for input-format (https://github.com/catamphetamine/input-format#usage)
  }, {
    key: "_format",
    value: function _format(value, parserFlags) {
      if (AddressInput_1._willBeNimAddress(value, parserFlags)) {
        value = AddressInput_1._stripWhitespace(value).replace(/.{4}/g, function (match, offset) {
          return "".concat(match).concat((offset + 4) % 12 ? ' ' : '\n');
        }) // form blocks
        .substring(0, AddressInput_1.NIM_ADDRESS_MAX_LENGTH); // discarding the new line after last block
        if (value.endsWith(' ')) {
          // The word spacing set via css is only applied to spaces that are actually between words which is not
          // the case for an ending space and the caret after an ending space therefore gets rendered at the wrong
          // position. To avoid that we add a zero-width space as an artificial word. We do not add that to the
          // template returned to input-format though to avoid it being interpreted as a typed character which
          // would place the caret after the zero width space.
          value += "\u200B";
        }
        return {
          text: value,
          // Used by input-format to position caret. Using w as placeholder instead of default x as w is not in
          // our address alphabet.
          template: 'wwww wwww wwww\nwwww wwww wwww\nwwww wwww wwww'
        };
      } else if (AddressInput_1._willBeEthAddress(value, parserFlags)) {
        value = AddressInput_1._stripWhitespace(value).replace(/.{14}/g, function (match) {
          return "".concat(match, "\n");
        }) // form blocks
        .substring(0, AddressInput_1.ETH_ADDRESS_MAX_LENGTH + /* new lines */2); // discard new line at end
        return {
          text: value,
          template: 'wwwwwwwwwwwwww\nwwwwwwwwwwwwww\nwwwwwwwwwwwwww'
        };
      } else {
        return {
          text: value
        };
      }
    }
  }, {
    key: "_stripWhitespace",
    value: function _stripWhitespace(value) {
      return value.replace(AddressInput_1._WHITESPACE_REGEX, '');
    }
  }, {
    key: "_exportValue",
    value: function () {
      var _exportValue2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(value, parserFlags) {
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              if (!AddressInput_1._willBeNimAddress(value, parserFlags)) {
                _context4.next = 4;
                break;
              }
              return _context4.abrupt("return", value.toUpperCase().replace(/\n/g, ' ').replace(/\u200B/g, ''));
            case 4:
              if (!AddressInput_1._willBeEthAddress(value, parserFlags)) {
                _context4.next = 10;
                break;
              }
              _context4.next = 7;
              return AddressInput_1._addEthAddressChecksumIfMissing(AddressInput_1._stripWhitespace(value));
            case 7:
              return _context4.abrupt("return", _context4.sent);
            case 10:
              return _context4.abrupt("return", value.replace(/\u200B/g, ''));
            case 11:
            case "end":
              return _context4.stop();
          }
        }, _callee4);
      }));
      function _exportValue(_x2, _x3) {
        return _exportValue2.apply(this, arguments);
      }
      return _exportValue;
    }()
  }, {
    key: "_willBeNimAddress",
    value: function _willBeNimAddress(value, parserFlags) {
      return parserFlags.allowNimAddresses && AddressInput_1._NIMIQ_ADDRESS_REGEX.test(AddressInput_1._stripWhitespace(value));
    }
  }, {
    key: "_willBeEthAddress",
    value: function _willBeEthAddress(value, parserFlags) {
      return parserFlags.allowEthAddresses && AddressInput_1._ETH_ADDRESS_REGEX.test(AddressInput_1._stripWhitespace(value));
    }
  }, {
    key: "_willBeDomain",
    value: function _willBeDomain(value, parserFlags) {
      return parserFlags.allowDomains && value.length // expect at least one char
      && AddressInput_1._DOMAIN_REGEX.test(value) && !AddressInput_1._willBeNimAddress(value, parserFlags) && !AddressInput_1._willBeEthAddress(value, parserFlags);
    }
    // Simplified from @ethersproject/address, which we don't use directly to avoid its unnecessary dependencies.
  }, {
    key: "_isValidEthAddress",
    value: function () {
      var _isValidEthAddress2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(address) {
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              _context5.t0 = address.length === AddressInput_1.ETH_ADDRESS_MAX_LENGTH && AddressInput_1._ETH_ADDRESS_REGEX.test(address);
              if (!_context5.t0) {
                _context5.next = 10;
                break;
              }
              _context5.t1 = !AddressInput_1._hasEthAddressChecksum(address)
              // Recalculate address checksum and check that it matches.
              ;
              if (_context5.t1) {
                _context5.next = 9;
                break;
              }
              _context5.next = 6;
              return AddressInput_1._addEthAddressChecksumIfMissing(address.toLowerCase());
            case 6:
              _context5.t2 = _context5.sent;
              _context5.t3 = address;
              _context5.t1 = _context5.t2 === _context5.t3;
            case 9:
              _context5.t0 = _context5.t1;
            case 10:
              return _context5.abrupt("return", _context5.t0);
            case 11:
            case "end":
              return _context5.stop();
          }
        }, _callee5);
      }));
      function _isValidEthAddress(_x4) {
        return _isValidEthAddress2.apply(this, arguments);
      }
      return _isValidEthAddress;
    }() // Add checksum to an Ethereum address, if it does not include a checksum yet. Existing checksums (regardless of
    // validity) and inputs that are not ethereum addresses are preserved. Simplified from @ethersproject/address, which
    // we don't use directly to avoid its unnecessary dependencies.
  }, {
    key: "_addEthAddressChecksumIfMissing",
    value: function () {
      var _addEthAddressChecksumIfMissing2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(address) {
        var addressHex, addressHexCharCodes, _yield$import, keccak_256, hashHex, result, i;
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              if (!(address.length !== AddressInput_1.ETH_ADDRESS_MAX_LENGTH || !AddressInput_1._ETH_ADDRESS_REGEX.test(address) || AddressInput_1._hasEthAddressChecksum(address))) {
                _context6.next = 2;
                break;
              }
              return _context6.abrupt("return", address);
            case 2:
              // Encode checksum as uppercase and lowercase characters.
              addressHex = address.replace(/^0x/i, '');
              addressHexCharCodes = addressHex.toLowerCase().split('').map(function (char) {
                return char.charCodeAt(0);
              }); // External dependency which can be shared with the consuming app and which is lazy loaded only when needed.
              _context6.next = 6;
              return Promise.resolve(/* import() */).then(__webpack_require__.t.bind(null, "5e83", 7));
            case 6:
              _yield$import = _context6.sent;
              keccak_256 = _yield$import.keccak_256;
              hashHex = keccak_256(addressHexCharCodes);
              result = '0x';
              for (i = 0; i < 40; i++) {
                // Address hex char at position i should be uppercase if the decimal value of hash hex char at position
                // i is >= 8, and lowercase otherwise.
                result += parseInt(hashHex[i], 16) >= 8 ? addressHex[i].toUpperCase() : addressHex[i].toLowerCase();
              }
              return _context6.abrupt("return", result);
            case 12:
            case "end":
              return _context6.stop();
          }
        }, _callee6);
      }));
      function _addEthAddressChecksumIfMissing(_x5) {
        return _addEthAddressChecksumIfMissing2.apply(this, arguments);
      }
      return _addEthAddressChecksumIfMissing;
    }()
  }, {
    key: "_hasEthAddressChecksum",
    value: function _hasEthAddressChecksum(address) {
      // If it has uppercase and lowercase chars (ignoring the x of 0x) there is a checksum encoded.
      return /[a-f]/.test(address) && /[A-F]/.test(address);
    }
  }]);
}(external_vue_property_decorator_["Vue"]);
AddressInputvue_type_script_lang_ts_AddressInput._ADDRESS_REPLACED_CHARS = {
  O: '0',
  I: '1',
  Z: '2'
};
AddressInputvue_type_script_lang_ts_AddressInput.NIM_ADDRESS_MAX_LENGTH = 9 * /* 4 chars each */4 + /* spaces between */8;
AddressInputvue_type_script_lang_ts_AddressInput._NIMIQ_ADDRESS_REGEX = new RegExp('^(?:' + 'NQ?' // NQ at the beginning
+ '|NQ\\d{1,2}' // first two characters after starting NQ must be digits
// valid address <= max len; excluding invalid address characters I, O, W, Z which are the only characters
// missing in Nimiq's base32 address alphabet.
+ "|NQ\\d{2}[0-9A-HJ-NP-VXY]{1,".concat(AddressInput_1.NIM_ADDRESS_MAX_LENGTH - 4 - /* spaces */8, "}") + ')$', 'i');
AddressInputvue_type_script_lang_ts_AddressInput.ETH_ADDRESS_MAX_LENGTH = 2 + /* ETH addresses are 20 bytes, hex encoded */40;
AddressInputvue_type_script_lang_ts_AddressInput._ETH_ADDRESS_REGEX = new RegExp('^(?:' + '0x?' // 0x at the beginning
+ "|0x[0-9a-f]{1,".concat(AddressInput_1.ETH_ADDRESS_MAX_LENGTH - /* "0x" */2, "}") // valid address <= max length
+ ')$', 'i');
AddressInputvue_type_script_lang_ts_AddressInput._DOMAIN_REGEX = new RegExp('^' + '[-a-z0-9]*' // allow hyphens, Latin letters and numbers at the beginning
+ '(?:[a-z0-9]\\.[a-z]*)?' // can contain one dot before which no hyphen is allowed and after only Latin letters
+ '$', 'i');
AddressInputvue_type_script_lang_ts_AddressInput._WHITESPACE_REGEX = /\s|\u200B/g; // normal whitespace, tab, newline or zero-width space
__decorate([Object(external_vue_property_decorator_["Prop"])({
  type: String,
  default: ''
})], AddressInputvue_type_script_lang_ts_AddressInput.prototype, "value", void 0);
__decorate([Object(external_vue_property_decorator_["Prop"])(Boolean)], AddressInputvue_type_script_lang_ts_AddressInput.prototype, "autofocus", void 0);
__decorate([Object(external_vue_property_decorator_["Prop"])({
  type: Boolean,
  default: true
})], AddressInputvue_type_script_lang_ts_AddressInput.prototype, "allowNimAddresses", void 0);
__decorate([Object(external_vue_property_decorator_["Prop"])(Boolean)], AddressInputvue_type_script_lang_ts_AddressInput.prototype, "allowEthAddresses", void 0);
__decorate([Object(external_vue_property_decorator_["Prop"])(Boolean)], AddressInputvue_type_script_lang_ts_AddressInput.prototype, "allowDomains", void 0);
__decorate([Object(external_vue_property_decorator_["Watch"])('value')], AddressInputvue_type_script_lang_ts_AddressInput.prototype, "_onExternalValueChange", null);
AddressInputvue_type_script_lang_ts_AddressInput = AddressInput_1 = __decorate([external_vue_property_decorator_["Component"]], AddressInputvue_type_script_lang_ts_AddressInput);
/* harmony default export */ var AddressInputvue_type_script_lang_ts = (AddressInputvue_type_script_lang_ts_AddressInput);
// CONCATENATED MODULE: ./src/components/AddressInput.vue?vue&type=script&lang=ts
 /* harmony default export */ var components_AddressInputvue_type_script_lang_ts = (AddressInputvue_type_script_lang_ts); 
// EXTERNAL MODULE: ./src/components/AddressInput.vue?vue&type=style&index=0&id=bd6dd43a&prod&scoped=true&lang=css
var AddressInputvue_type_style_index_0_id_bd6dd43a_prod_scoped_true_lang_css = __webpack_require__("1928");

// CONCATENATED MODULE: ./src/components/AddressInput.vue






/* normalize component */

var AddressInput_component = normalizeComponent(
  components_AddressInputvue_type_script_lang_ts,
  AddressInputvue_type_template_id_bd6dd43a_scoped_true_render,
  AddressInputvue_type_template_id_bd6dd43a_scoped_true_staticRenderFns,
  false,
  null,
  "bd6dd43a",
  null
  
)

/* harmony default export */ var components_AddressInput = (AddressInput_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"6f718cbb-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/AmountWithFee.vue?vue&type=template&id=641a2a87&scoped=true
var AmountWithFeevue_type_template_id_641a2a87_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"amount-with-fee"},[_c('AmountInput',{ref:"amountInput",staticClass:"value",class:{invalid: !_vm.isValid && _vm.liveAmount > 0},model:{value:(_vm.liveAmount),callback:function ($$v) {_vm.liveAmount=$$v},expression:"liveAmount"}}),_c('div',{staticClass:"fee-section nq-text-s"},[(!_vm.isValid && _vm.liveAmount)?_c('div',{staticClass:"nq-red"},[_vm._t("insufficient-balance-error",[_vm._v(_vm._s(_vm.$t('Insufficient balance')))])],2):_c('div',[(_vm.fiatAmount !== null && _vm.fiatCurrency)?_c('span',{staticClass:"fiat"},[_vm._v(" ~"),_c('FiatAmount',{attrs:{"amount":_vm.fiatAmount,"currency":_vm.fiatCurrency}})],1):_vm._e(),(_vm.value.fee)?_c('span',{staticClass:"fee"},[_vm._v(" + "),_c('Amount',{attrs:{"amount":_vm.value.fee,"minDecimals":0,"maxDecimals":5}}),_vm._v(" "+_vm._s(_vm.$t('fee'))+" ")],1):_vm._e()])])],1)}
var AmountWithFeevue_type_template_id_641a2a87_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/AmountWithFee.vue?vue&type=template&id=641a2a87&scoped=true

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"6f718cbb-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/AmountInput.vue?vue&type=template&id=37572fbf&scoped=true
var AmountInputvue_type_template_id_37572fbf_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"amount-input",class:{'has-value': _vm.valueInLuna > 0, 'focussed': _vm.isFocussed}},[_c('form',{ref:"fullWidth",staticClass:"label-input",on:{"submit":function($event){$event.preventDefault();}}},[_c('span',{ref:"widthPlaceholder",staticClass:"width-finder width-placeholder"},[_vm._v(_vm._s(_vm.placeholder))]),(_vm.maxFontSize)?_c('div',{staticClass:"full-width",class:{'width-finder': _vm.maxWidth > 0}},[_vm._v("Width")]):_vm._e(),_c('span',{ref:"widthValue",staticClass:"width-finder width-value"},[_vm._v(_vm._s(_vm.formattedValue || ''))]),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.formattedValue),expression:"formattedValue"}],ref:"input",staticClass:"nq-input",class:_vm.vanishing,style:({width: ((this.width) + "px"), fontSize: ((this.fontSize) + "rem")}),attrs:{"type":"text","inputmode":"decimal","placeholder":_vm.placeholder},domProps:{"value":(_vm.formattedValue)},on:{"focus":function($event){_vm.isFocussed = true},"blur":function($event){_vm.isFocussed = false},"input":function($event){if($event.target.composing){ return; }_vm.formattedValue=$event.target.value}}})]),_c('span',{staticClass:"nim"},[_vm._v("NIM")])])}
var AmountInputvue_type_template_id_37572fbf_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/AmountInput.vue?vue&type=template&id=37572fbf&scoped=true

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--14-1!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/AmountInput.vue?vue&type=script&lang=ts


















var AmountInputvue_type_script_lang_ts_AmountInput = /*#__PURE__*/function (_Vue) {
  function AmountInput() {
    var _this;
    _classCallCheck(this, AmountInput);
    _this = _callSuper(this, AmountInput, arguments);
    _this.liveValue = '';
    _this.lastEmittedValue = 0;
    _this.width = 50;
    _this.fontSize = _this.maxFontSize;
    _this.maxWidth = 0;
    _this.valueInLuna = 0;
    _this.isFocussed = false;
    return _this;
  }
  _inherits(AmountInput, _Vue);
  return _createClass(AmountInput, [{
    key: "mounted",
    value: function () {
      var _mounted = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (this.maxFontSize) {
                this.maxWidth = this.$refs.fullWidth.offsetWidth;
              }
            case 1:
            case "end":
              return _context.stop();
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
      if (newValue === this.valueInLuna) return;
      this.lastEmittedValue = newValue || 0;
      this.formattedValue = newValue ? (newValue / Math.pow(10, this.decimals)).toString() : '';
      this.updateWidth();
    }
  }, {
    key: "updateWidth",
    value: function () {
      var _updateWidth = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var placeholderWidth, valueWidth, fontSizeFactor;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
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
      }
      // Trigger a valueChange for the getter.
      this.$forceUpdate();
    }
  }]);
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
/* harmony default export */ var AmountInputvue_type_script_lang_ts = (AmountInputvue_type_script_lang_ts_AmountInput);
// CONCATENATED MODULE: ./src/components/AmountInput.vue?vue&type=script&lang=ts
 /* harmony default export */ var components_AmountInputvue_type_script_lang_ts = (AmountInputvue_type_script_lang_ts); 
// EXTERNAL MODULE: ./src/components/AmountInput.vue?vue&type=style&index=0&id=37572fbf&prod&scoped=true&lang=css
var AmountInputvue_type_style_index_0_id_37572fbf_prod_scoped_true_lang_css = __webpack_require__("a7a8");

// CONCATENATED MODULE: ./src/components/AmountInput.vue






/* normalize component */

var AmountInput_component = normalizeComponent(
  components_AmountInputvue_type_script_lang_ts,
  AmountInputvue_type_template_id_37572fbf_scoped_true_render,
  AmountInputvue_type_template_id_37572fbf_scoped_true_staticRenderFns,
  false,
  null,
  "37572fbf",
  null
  
)

/* harmony default export */ var components_AmountInput = (AmountInput_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"6f718cbb-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/FiatAmount.vue?vue&type=template&id=4e1e2a40
var FiatAmountvue_type_template_id_4e1e2a40_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',{staticClass:"fiat-amount"},[_vm._v(" "+_vm._s(_vm._currencyString)+" ")])}
var FiatAmountvue_type_template_id_4e1e2a40_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/FiatAmount.vue?vue&type=template&id=4e1e2a40

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.parse-float.js
var es_number_parse_float = __webpack_require__("2bcb");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.trim.js
var es_string_trim = __webpack_require__("0c26");

// CONCATENATED MODULE: ./node_modules/@nimiq/utils/dist/module/CurrencyInfo.js



























var CurrencyInfo_CurrencyInfo = /*#__PURE__*/function () {
  function CurrencyInfo(currencyCode, decimalsOrLocaleOrOptions, name, symbol) {
    _classCallCheck(this, CurrencyInfo);
    _defineProperty(this, "code", void 0);
    _defineProperty(this, "symbol", void 0);
    _defineProperty(this, "name", void 0);
    _defineProperty(this, "decimals", void 0);
    _defineProperty(this, "locale", void 0);
    if (!CurrencyInfo.CURRENCY_CODE_REGEX.test(currencyCode)) {
      throw new Error("Invalid currency code ".concat(currencyCode));
    }
    var decimals;
    var locale;
    if (typeof decimalsOrLocaleOrOptions === 'number') {
      decimals = decimalsOrLocaleOrOptions;
    } else if (typeof decimalsOrLocaleOrOptions === 'string') {
      locale = decimalsOrLocaleOrOptions;
    } else if (_typeof(decimalsOrLocaleOrOptions) === 'object') {
      decimals = decimalsOrLocaleOrOptions.decimals;
      name = decimalsOrLocaleOrOptions.name;
      symbol = decimalsOrLocaleOrOptions.symbol;
      locale = decimalsOrLocaleOrOptions.locale;
    }
    this.code = currencyCode.toUpperCase();
    // Get the country from the currency code which is typically (but not necessarily) the first two letters,
    // see https://en.wikipedia.org/wiki/ISO_4217#National_currencies.
    var currencyCountry = this.code.substring(0, 2);
    var nameLocalesToTry = [].concat(_toConsumableArray(locale ? [locale] : []), ["".concat(navigator.language.substring(0, 2), "-").concat(currencyCountry), navigator.language, 'en-US' // en-US as last resort
    ]);
    var supportsDisplayNames = ('DisplayNames' in Intl);
    // also normalizes the locales
    var _ref = supportsDisplayNames
    // @ts-ignore TODO use proper types once https://github.com/microsoft/TypeScript/pull/44022 is available
    ? Intl.DisplayNames.supportedLocalesOf(nameLocalesToTry) : Intl.NumberFormat.supportedLocalesOf(nameLocalesToTry);
    var _ref2 = _slicedToArray(_ref, 1);
    this.locale = _ref2[0];
    if (supportsDisplayNames && !this.locale) {
      // DisplayNames does not support any of the tried locales, not even en. This can happen especially if
      // DisplayNames was polyfilled, e.g. by @formatjs/intl-displaynames, but no data was (lazy)loaded for any
      // of our locales.
      supportsDisplayNames = false;
      var _Intl$NumberFormat$su = Intl.NumberFormat.supportedLocalesOf(nameLocalesToTry);
      var _Intl$NumberFormat$su2 = _slicedToArray(_Intl$NumberFormat$su, 1);
      this.locale = _Intl$NumberFormat$su2[0];
    }
    var isAutoGenerated = decimals === undefined && name === undefined && symbol === undefined;
    var cacheKey = "".concat(this.code, " ").concat(this.locale);
    var cachedCurrencyInfo = CurrencyInfo.CACHED_AUTO_GENERATED_CURRENCY_INFOS[cacheKey];
    if (isAutoGenerated && cachedCurrencyInfo) {
      return cachedCurrencyInfo; // eslint-disable-line no-constructor-return
    }
    var formattedString;
    var formatterOptions = {
      style: 'currency',
      currency: currencyCode,
      useGrouping: false,
      numberingSystem: 'latn'
    };
    if (name !== undefined) {
      this.name = name;
    } else if (cachedCurrencyInfo) {
      this.name = cachedCurrencyInfo.name;
    } else if (supportsDisplayNames) {
      try {
        // Use DisplayNames if available as it provides better names.
        // @ts-ignore TODO use proper types once https://github.com/microsoft/TypeScript/pull/44022 is merged
        this.name = new Intl.DisplayNames(this.locale, {
          type: 'currency'
        }).of(currencyCode);
      } catch (e) {
        // Ignore and continue with if block below.
      }
    }
    if (!this.name) {
      formattedString = CurrencyInfo.failsafeNumberToLocaleString(0, this.locale, _objectSpread2({
        currencyDisplay: 'name'
      }, formatterOptions));
      this.name = formattedString
      // Using regex parsing instead of NumberFormat.formatToParts which has less browser support.
      ? formattedString.replace(CurrencyInfo.NUMBER_REGEX, '').trim() : this.code;
    }
    if (symbol !== undefined) {
      this.symbol = symbol;
    } else if (cachedCurrencyInfo) {
      this.symbol = cachedCurrencyInfo.symbol;
    } else {
      var extraSymbol = CurrencyInfo.EXTRA_SYMBOLS[this.code];
      if (typeof extraSymbol === 'string') {
        this.symbol = extraSymbol;
      } else if (Array.isArray(extraSymbol)) {
        // Use right-to-left currency symbols only if a right-to-left locale was used and explicitly requested.
        var useRightToLeft = this.locale === locale && CurrencyInfo.RIGHT_TO_LEFT_DETECTION_REGEX.test(this.name);
        this.symbol = extraSymbol[useRightToLeft ? 1 : 0];
      } else {
        // Unless a locale was specifically requested, use `en-${currencyCountry}` for the symbol detection
        // instead of this.locale which is based on navigator.language, as the EXTRA_SYMBOLS have been
        // created based on en.
        var symbolLocalesToTry = [].concat(_toConsumableArray(locale ? [locale] : []), ["en-".concat(currencyCountry), 'en']);
        var symbolFormattedString = CurrencyInfo.failsafeNumberToLocaleString(0, symbolLocalesToTry, _objectSpread2({
          currencyDisplay: 'narrowSymbol'
        }, formatterOptions)) || CurrencyInfo.failsafeNumberToLocaleString(0, symbolLocalesToTry, _objectSpread2({
          currencyDisplay: 'symbol'
        }, formatterOptions));
        if (symbolFormattedString) {
          formattedString = symbolFormattedString;
          this.symbol = formattedString.replace(CurrencyInfo.NUMBER_REGEX, '').trim();
        } else {
          this.symbol = this.code;
        }
      }
    }
    if (decimals !== undefined) {
      this.decimals = decimals;
    } else if (cachedCurrencyInfo) {
      this.decimals = cachedCurrencyInfo.decimals;
    } else if (CurrencyInfo.CUSTOM_DECIMAL_LESS_CURRENCIES.has(this.code)) {
      this.decimals = 0;
    } else {
      // As we only need the number, the used locale and currencyDisplay don't matter.
      formattedString = formattedString || CurrencyInfo.failsafeNumberToLocaleString(0, 'en', _objectSpread2({
        currencyDisplay: 'code'
      }, formatterOptions));
      if (formattedString) {
        var numberMatch = formattedString.match(CurrencyInfo.NUMBER_REGEX);
        this.decimals = numberMatch ? (numberMatch[1] || '').length : 2;
      } else {
        this.decimals = 2;
      }
    }
    if (isAutoGenerated) {
      CurrencyInfo.CACHED_AUTO_GENERATED_CURRENCY_INFOS[cacheKey] = this;
    }
  }
  return _createClass(CurrencyInfo, null, [{
    key: "failsafeNumberToLocaleString",
    value: function failsafeNumberToLocaleString(value, locales, options) {
      try {
        // toLocaleString can fail for example for invalid locales or currency codes or unsupported currencyDisplay
        // options in older browsers. Older Chrome versions also had a bug, where some option combinations lead to
        // a "Internal error. Icu error." exception.
        return value.toLocaleString(locales, options);
      } catch (e) {
        return null;
      }
    }
  }]);
}();
// This is a manually curated list which was created mainly from
// https://en.wikipedia.org/wiki/List_of_circulating_currencies with help of the following script run
// on that wikipedia page. Note that we don't just use the ISO 4217 list of currency codes directly, as
// it includes some additional codes which are not actual fiat currency codes (see
// https://en.wikipedia.org/wiki/ISO_4217#X_currencies). Also note that there are also already nicely
// parsable npm packages like https://github.com/bengourley/currency-symbol-map/blob/master/map.js
// or https://github.com/smirzaei/currency-formatter/blob/master/currencies.json. However, they both
// seem to be less accurate than the Wikipedia article (see e.g. KGS), missing some currencies (e.g. MRU)
// and contain some non-fiat currencies like crypto currencies. When unsure about a currency sign, also
// consult https://en.wikipedia.org/wiki/Currency_symbol#List_of_currency_symbols_currently_in_use.
//
// const EXTRA_SYMBOLS = {
//     as defined below
// };
//
// function parseWikipediaCurrencyList() {
//     const sectionHeadline = document.querySelector('#List_of_circulating_currencies_by_state_or_territory')
//         .closest('h2');
//     const table = ((el) => {
//         while (el.tagName !== 'TABLE' || !el.classList.contains('wikitable')) el = el.nextElementSibling;
//         return el;
//     })(sectionHeadline);
//
//     const currencySymbols = {};
//
//     for (const row of table.querySelectorAll('tbody tr')) {
//         // count columns from the end because not all rows have the same number of columns as on some rows, the
//         // first column is omitted if the cell in the first column of a previous row spans multiple rows.
//         const code = row.children[row.childElementCount - 3].textContent.trim();
//         if (code.includes('none')) continue;
//         const symbols = row.children[row.childElementCount - 4].textContent.trim()
//             .replace(/\s*\(.+\)\s*/g, '') // remove comments
//             .split(/ or |, /);
//         if (symbols.length === 1 && !symbols[0]) continue;
//
//         var entry = currencySymbols[code] || [];
//         symbols.forEach((symbol) => {
//             if (!entry.includes(symbol)) entry.push(symbol);
//         });
//         currencySymbols[code] = entry;
//     }
//
//     return currencySymbols;
// }
//
// // simplified from CurrencyInfo and removed checking for navigator.language to remove the dependency of this code
// // snippet from the tester's browser language.
// function getBrowserCurrencySymbol(currencyCode) {
//     const currencyCountry = currencyCode.substring(0, 2);
//
//     const [locale] = Intl.NumberFormat.supportedLocalesOf([ // also normalizes the locales
//         `en-${currencyCountry}`, // English as spoken in currency country
//         'en-US', // en-US as last resort
//     ]);
//     const formatterOptions = {
//         style: 'currency',
//         currency: currencyCode,
//         useGrouping: false,
//         numberingSystem: 'latn',
//     };
//
//     let formattedString = (0).toLocaleString(
//         locale,
//         { currencyDisplay: 'narrowSymbol', ...formatterOptions },
//     );
//
//     return formattedString.replace(/\d+(?:\D(\d+))?/, '').trim();
// }
//
// function isRightToLeft(s){
//     return /[\u0591-\u07FF\uFB1D-\uFDFD\uFE70-\uFEFC]/.test(s);
// };
//
// const referenceCurrencySymbols = parseWikipediaCurrencyList();
// for (const currency of Object.keys(referenceCurrencySymbols).sort()) {
//     const referenceSymbols = referenceCurrencySymbols[currency];
//     const extraSymbols = !EXTRA_SYMBOLS[currency]
//         ? []
//         : Array.isArray(EXTRA_SYMBOLS[currency])
//             ? EXTRA_SYMBOLS[currency]
//             : [EXTRA_SYMBOLS[currency]];
//     const browserSymbol = getBrowserCurrencySymbol(currency);
//
//     if (extraSymbols.length) {
//         if (referenceSymbols.includes(browserSymbol) && !isRightToLeft(browserSymbol)) {
//             console.warn(`${currency}: potentially unnecessary definition in EXTRA_SYMBOLS. `
//                 + `Reference symbols are ${referenceSymbols}; extra symbols are ${extraSymbols}; `
//                 + `browser symbol is ${browserSymbol}.`);
//         } else {
//             console.info(`${currency}: manually defined via EXTRA_SYMBOLS. `
//                 + `Reference symbols are ${referenceSymbols}; extra symbols are ${extraSymbols}; `
//                 + `browser symbol is ${browserSymbol}.`);
//         }
//
//         if (!extraSymbols.some((symbol) => referenceSymbols.includes(symbol))) {
//             console.warn(`${currency}: mismatch between reference symbols and EXTRA_SYMBOLS. `
//                 + `Reference symbols are ${referenceSymbols}; extra symbols are ${extraSymbols}; `
//                 + `browser symbol is ${browserSymbol}.`);
//         }
//     } else {
//         if (!referenceSymbols.includes(browserSymbol) && browserSymbol === currency) {
//             console.warn(`${currency}: missing in EXTRA_SYMBOLS. `
//                 + `Reference symbols are ${referenceSymbols}; browser symbol is ${browserSymbol}. `
//                 + `Add as ${currency}: ${referenceSymbols.length > 1
//                     ? `['${referenceSymbols.join(`', '`)}']`
//                     : `'${referenceSymbols}'`},`);
//         } else {
//             console.info(`${currency}: Saved explicit definition of extra symbol.  `
//                 + `Reference symbols are ${referenceSymbols}; `
//                 + `browser symbol is ${browserSymbol}.`);
//         }
//
//         if (isRightToLeft(browserSymbol)) {
//             console.warn(`${currency}: browser symbol is right to left. `
//                 + `Reference symbols are ${referenceSymbols}; extra symbols are ${extraSymbols}; `
//                 + `browser symbol is ${browserSymbol}.`);
//         }
//     }
// }
_defineProperty(CurrencyInfo_CurrencyInfo, "EXTRA_SYMBOLS", {
  AED: ['DH', 'د.إ'],
  AFN: ['Afs', '؋'],
  ALL: 'L',
  ANG: 'ƒ',
  AWG: 'ƒ',
  BGN: 'лв.',
  BHD: ['BD', '.د.ب'],
  BTN: 'Nu.',
  BYN: 'Br',
  CDF: 'Fr',
  CHF: 'Fr.',
  CVE: '$',
  DJF: 'Fr',
  DZD: ['DA', 'د.ج'],
  EGP: ['£', 'ج.م'],
  ETB: 'Br',
  HTG: 'G',
  IQD: ['ID', 'ع.د'],
  IRR: ['RI', '﷼'],
  JOD: ['JD', 'د.ا'],
  KES: 'Sh',
  KGS: '⃀',
  KWD: ['KD', 'د.ك'],
  LBP: ['LL', 'ل.ل'],
  LSL: 'M',
  LYD: ['LD', 'ل.د'],
  MAD: ['DH', 'درهم'],
  MDL: 'L',
  MKD: 'ден',
  MMK: 'Ks',
  MRU: 'UM',
  MVR: ['Rf', '.ރ'],
  MZN: 'MT',
  NPR: 'रु',
  OMR: ['R.O.', 'ر.ع.'],
  PAB: 'B/.',
  PEN: 'S/',
  PKR: '₨',
  QAR: ['QR', 'ر.ق'],
  RSD: 'дин.',
  SAR: ['SR', '﷼'],
  SDG: ['£SD', 'ج.س.'],
  SLE: 'Le',
  SOS: 'Sh.',
  TJS: 'SM',
  TMT: 'm',
  TND: ['DT', 'د.ت'],
  UZS: 'сум',
  VED: 'Bs.D',
  VES: 'Bs.S',
  WST: 'T',
  XPF: '₣',
  YER: ['RI', '﷼']
});
// Some currencies have been devalued so much by inflation that their sub-units have been removed from circulation
// or are effectively not being used anymore. This is not for all currencies reflected yet in toLocaleString, such
// that we mark some currencies manually as decimal-less. This list has been assembled manually from the list of all
// circulating currencies (https://en.wikipedia.org/wiki/List_of_circulating_currencies) by first reducing it to
// currencies that still have decimals via the following script, and then looking through their Wikipedia articles.
//
// const referenceCurrencySymbols = parseWikipediaCurrencyList(); // as defined above
// for (const currency of Object.keys(referenceCurrencySymbols).sort()) {
//     const country = currency.substring(0, 2);
//     const formatted = (2).toLocaleString([`en-${country}`], {
//         style: 'currency',
//         currency: currency,
//         currencyDisplay: 'narrowSymbol',
//         numberingSystem: 'latn',
//     });
//     const numberMatch = formatted.match(/\d+(?:\D(\d+))?/);
//     const decimals = numberMatch ? (numberMatch[1] || '').length : 2;
//     if (!decimals) continue;
//     console.log(`${currency} - ${decimals}\n`);
// }
_defineProperty(CurrencyInfo_CurrencyInfo, "CUSTOM_DECIMAL_LESS_CURRENCIES", new Set(['AMD', 'AOA', 'ARS', 'BDT', 'BTN', 'CDF', 'COP', 'CRC', 'CVE', 'CZK', 'DOP', 'DZD', 'GMD', 'GYD', 'HUF', 'IDR', 'INR', 'JMD', 'KES', 'KGS', 'KHR', 'KZT', 'LKR', 'MAD', 'MKD', 'MNT', 'MOP', 'MWK', 'MXN', 'NGN', 'NOK', 'NPR', 'PHP', 'PKR', 'RUB', 'SEK', 'TWD', 'TZS', 'UAH', 'UYU', 'UZS', 'VES' // sub-unit rarely used
]));
// Cache auto-generated CurrencyInfos such that they do not need to be recalculated.
_defineProperty(CurrencyInfo_CurrencyInfo, "CACHED_AUTO_GENERATED_CURRENCY_INFOS", {});
// Regex for detecting valid currency codes.
_defineProperty(CurrencyInfo_CurrencyInfo, "CURRENCY_CODE_REGEX", /[A-Z]{3}/i);
// Regex for detecting the number with optional decimals in a formatted string for useGrouping: false
_defineProperty(CurrencyInfo_CurrencyInfo, "NUMBER_REGEX", /\d+(?:\D(\d+))?/);
// Simplified and adapted from https://stackoverflow.com/a/14824756.
// Note that this rtl detection is incomplete but good enough for our needs.
_defineProperty(CurrencyInfo_CurrencyInfo, "RIGHT_TO_LEFT_DETECTION_REGEX", /[\u0591-\u07FF\uFB1D-\uFDFD\uFE70-\uFEFC]/);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--14-1!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/FiatAmount.vue?vue&type=script&lang=ts














var FiatAmount_1;



var FiatAmountvue_type_script_lang_ts_FiatAmount = FiatAmount_1 = /*#__PURE__*/function (_Vue) {
  function FiatAmount() {
    _classCallCheck(this, FiatAmount);
    return _callSuper(this, FiatAmount, arguments);
  }
  _inherits(FiatAmount, _Vue);
  return _createClass(FiatAmount, [{
    key: "_currencyString",
    get: function get() {
      var positioningLocale = this._getPositioningLocale(this.currency);
      // Only create CurrencyInfo for a specific locale if a locale was requested, otherwise use default behavior.
      // Don't use positioningLocale as it's just a rough guess for a language typical for a country where the
      // currency is used and might result in using a language that the user does not understand.
      var currencyInfo = new CurrencyInfo_CurrencyInfo(this.currency, this.locale || undefined);
      var formattingOptions = {
        style: 'currency',
        currency: this.currency,
        currencyDisplay: 'code',
        useGrouping: false,
        numberingSystem: 'latn',
        // start with decimal count typical for this.currency, e.g. 2 for eur, unless hideDecimals was requested
        minimumFractionDigits: this.hideDecimals ? 0 : currencyInfo.decimals,
        maximumFractionDigits: this.hideDecimals ? 0 : currencyInfo.decimals
      };
      var formatted;
      var integers;
      var relativeDeviation;
      do {
        formatted = this.amount.toLocaleString([this.locale || positioningLocale, positioningLocale, "".concat(navigator.language.substring(0, 2), "-").concat(positioningLocale), navigator.language, "en-".concat(positioningLocale), 'en'], formattingOptions)
        // Enforce a dot as decimal separator for consistency and parseFloat. Using capturing groups instead of
        // lookahead/lookbehind to avoid browser support limitations.
        .replace(FiatAmount_1.DECIMAL_SEPARATOR_REGEX, '$1.$2');
        var regexMatch = formatted.match(FiatAmount_1.NUMBER_REGEX);
        var _regexMatch = _slicedToArray(regexMatch, 5),
          sign = _regexMatch[1],
          decimalsIncludingSeparator = _regexMatch[3],
          decimals = _regexMatch[4];
        integers = regexMatch[2];
        var formattedNumber = "".concat(sign || '').concat(integers).concat(decimalsIncludingSeparator || '');
        relativeDeviation = Math.abs((this.amount - Number.parseFloat(formattedNumber)) / this.amount);
        var nextDecimals = decimals ? decimals.length + 1 : 1;
        formattingOptions.minimumFractionDigits = nextDecimals;
        formattingOptions.maximumFractionDigits = nextDecimals;
      } while (relativeDeviation > this.maxRelativeDeviation && formattingOptions.minimumFractionDigits <= 20 // max for minimumFractionDigits and maximumFractionDigits
      && !this.hideDecimals);
      // Replace the currency code with our custom currency symbol.
      formatted = formatted.replace(FiatAmount_1.CURRENCY_CODE_REGEX, function (match, position) {
        if (position !== 0 || !FiatAmount_1.SYMBOL_TRAILING_ALPHA_REGEX.test(currencyInfo.symbol)) {
          // For trailing currency symbol or currency symbol that does not end with a latin letter or dot do not
          // append a space, e.g.: 1.00 € (EUR), $1.00 (USD), R$1.00 (BRL), ₼1.00 (AZN), ৳1 (BDT), S/1.00 (PEN)
          return currencyInfo.symbol;
        }
        // For leading currency symbol that ends with a latin letter or dot, add a (non-breaking) space, e.g.
        // KM 1.00 (BAM), B/. 1.00 (PAB), лв. 1.00 (BGN), kr 1.00 (DKK)
        return "".concat(currencyInfo.symbol, "\xA0");
      });
      // apply integer grouping
      if (integers.length <= 4) return formatted;
      return formatted.replace(integers, new FormattableNumber_FormattableNumber(integers).toString(true));
    }
  }, {
    key: "_getPositioningLocale",
    value: function _getPositioningLocale(currency) {
      // Try to guess a locale which positions the currency symbol in a way typical for countries, where the currency
      // is used, e.g. 1.00€ for eur; $1.00 for usd.
      currency = currency.toLowerCase();
      switch (currency) {
        case 'eur':
        case 'chf':
          return 'de';
        case 'gbp':
        case 'usd':
          return 'en';
        case 'cny':
          return 'zh';
        default:
          // Return the country from the currency code which is typically (but not necessarily) the first two
          // letters (see https://en.wikipedia.org/wiki/ISO_4217#National_currencies), in the hope that it
          // coincides with a locale.
          // TODO oftentimes this results in the wrong locale, e.g. ARS (Argentinan Peso) -> AR (Arabic),
          //  CAD (Canadian Dollar) -> CA (Catalan). Can we come up with a better heuristic?
          return currency.substr(0, 2);
      }
    }
  }]);
}(external_vue_property_decorator_["Vue"]);
FiatAmountvue_type_script_lang_ts_FiatAmount.NUMBER_REGEX = /(-)?\D*(\d+)(\.(\d+))?/;
FiatAmountvue_type_script_lang_ts_FiatAmount.DECIMAL_SEPARATOR_REGEX = /(\d)\D(\d)/;
FiatAmountvue_type_script_lang_ts_FiatAmount.CURRENCY_CODE_REGEX = /[A-Z]{3}\s?/i;
FiatAmountvue_type_script_lang_ts_FiatAmount.SYMBOL_TRAILING_ALPHA_REGEX = /[A-Z.]$/i;
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
  required: false
})], FiatAmountvue_type_script_lang_ts_FiatAmount.prototype, "locale", void 0);
__decorate([Object(external_vue_property_decorator_["Prop"])({
  type: Boolean,
  default: false
})], FiatAmountvue_type_script_lang_ts_FiatAmount.prototype, "hideDecimals", void 0);
FiatAmountvue_type_script_lang_ts_FiatAmount = FiatAmount_1 = __decorate([external_vue_property_decorator_["Component"]], FiatAmountvue_type_script_lang_ts_FiatAmount);
/* harmony default export */ var FiatAmountvue_type_script_lang_ts = (FiatAmountvue_type_script_lang_ts_FiatAmount);
// CONCATENATED MODULE: ./src/components/FiatAmount.vue?vue&type=script&lang=ts
 /* harmony default export */ var components_FiatAmountvue_type_script_lang_ts = (FiatAmountvue_type_script_lang_ts); 
// CONCATENATED MODULE: ./src/components/FiatAmount.vue





/* normalize component */

var FiatAmount_component = normalizeComponent(
  components_FiatAmountvue_type_script_lang_ts,
  FiatAmountvue_type_template_id_4e1e2a40_render,
  FiatAmountvue_type_template_id_4e1e2a40_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var components_FiatAmount = (FiatAmount_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--14-1!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/AmountWithFee.vue?vue&type=script&lang=ts











var AmountWithFeevue_type_script_lang_ts_AmountWithFee = /*#__PURE__*/function (_Mixins) {
  function AmountWithFee() {
    var _this;
    _classCallCheck(this, AmountWithFee);
    _this = _callSuper(this, AmountWithFee, arguments);
    _this.liveAmount = _this.value.amount;
    return _this;
  }
  _inherits(AmountWithFee, _Mixins);
  return _createClass(AmountWithFee, [{
    key: "mounted",
    value: function mounted() {
      this.watchAmountChange(this.liveAmount);
    }
  }, {
    key: "watchAvailableAmountChange",
    value: function watchAvailableAmountChange(value) {
      this.$emit('input', {
        amount: this.liveAmount,
        fee: this.value.fee,
        isValid: this.isValid
      });
    }
  }, {
    key: "watchAmountChange",
    value: function watchAmountChange(value) {
      this.$emit('input', {
        amount: this.liveAmount,
        fee: this.value.fee,
        isValid: this.isValid
      });
    }
  }, {
    key: "isValid",
    get: function get() {
      return this.liveAmount > 0 && this.liveAmount + this.value.fee <= this.availableBalance;
    }
  }, {
    key: "focus",
    value: function focus() {
      this.$refs.amountInput.focus();
    }
  }]);
}(Object(external_vue_property_decorator_["Mixins"])(i18n_I18nMixin));
__decorate([Object(external_vue_property_decorator_["Prop"])({
  type: Object,
  default: function _default() {
    return {
      amount: 0,
      fee: 0,
      isValid: false
    };
  }
})], AmountWithFeevue_type_script_lang_ts_AmountWithFee.prototype, "value", void 0);
__decorate([Object(external_vue_property_decorator_["Prop"])({
  type: Number,
  default: 0
})], AmountWithFeevue_type_script_lang_ts_AmountWithFee.prototype, "availableBalance", void 0);
__decorate([Object(external_vue_property_decorator_["Prop"])(Number)], AmountWithFeevue_type_script_lang_ts_AmountWithFee.prototype, "fiatAmount", void 0);
__decorate([Object(external_vue_property_decorator_["Prop"])(String)], AmountWithFeevue_type_script_lang_ts_AmountWithFee.prototype, "fiatCurrency", void 0);
__decorate([Object(external_vue_property_decorator_["Watch"])('isValid', {
  immediate: true
})], AmountWithFeevue_type_script_lang_ts_AmountWithFee.prototype, "watchAvailableAmountChange", null);
__decorate([Object(external_vue_property_decorator_["Watch"])('liveAmount', {
  immediate: true
})], AmountWithFeevue_type_script_lang_ts_AmountWithFee.prototype, "watchAmountChange", null);
AmountWithFeevue_type_script_lang_ts_AmountWithFee = __decorate([Object(external_vue_property_decorator_["Component"])({
  name: 'AmountWithFee',
  components: {
    Amount: components_Amount,
    AmountInput: components_AmountInput,
    FiatAmount: components_FiatAmount
  }
})], AmountWithFeevue_type_script_lang_ts_AmountWithFee);
/* harmony default export */ var AmountWithFeevue_type_script_lang_ts = (AmountWithFeevue_type_script_lang_ts_AmountWithFee);
// CONCATENATED MODULE: ./src/components/AmountWithFee.vue?vue&type=script&lang=ts
 /* harmony default export */ var components_AmountWithFeevue_type_script_lang_ts = (AmountWithFeevue_type_script_lang_ts); 
// EXTERNAL MODULE: ./src/components/AmountWithFee.vue?vue&type=style&index=0&id=641a2a87&prod&scoped=true&lang=css
var AmountWithFeevue_type_style_index_0_id_641a2a87_prod_scoped_true_lang_css = __webpack_require__("9940");

// CONCATENATED MODULE: ./src/components/AmountWithFee.vue






/* normalize component */

var AmountWithFee_component = normalizeComponent(
  components_AmountWithFeevue_type_script_lang_ts,
  AmountWithFeevue_type_template_id_641a2a87_scoped_true_render,
  AmountWithFeevue_type_template_id_641a2a87_scoped_true_staticRenderFns,
  false,
  null,
  "641a2a87",
  null
  
)

/* harmony default export */ var components_AmountWithFee = (AmountWithFee_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"6f718cbb-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/BottomOverlay.vue?vue&type=template&id=10321bd4&scoped=true
var BottomOverlayvue_type_template_id_10321bd4_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"bottom-overlay",class:[_vm.theme, { 'has-close-button': _vm.hasCloseButton }]},[_vm._t("default"),(_vm.hasCloseButton)?_c('CloseButton',{staticClass:"close-button",class:{'inverse': ['dark', 'green'].includes(_vm.theme)},on:{"click":function($event){return _vm.$emit(_vm.constructor.Events.CLOSE)}}}):_vm._e()],2)}
var BottomOverlayvue_type_template_id_10321bd4_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/BottomOverlay.vue?vue&type=template&id=10321bd4&scoped=true

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--14-1!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/BottomOverlay.vue?vue&type=script&lang=ts








var BottomOverlayvue_type_script_lang_ts_BottomOverlay = /*#__PURE__*/function (_Vue) {
  function BottomOverlay() {
    var _this;
    _classCallCheck(this, BottomOverlay);
    _this = _callSuper(this, BottomOverlay, arguments);
    _this.hasCloseButton = false;
    return _this;
  }
  _inherits(BottomOverlay, _Vue);
  return _createClass(BottomOverlay, [{
    key: "_onListenerChange",
    value: function _onListenerChange() {
      this.hasCloseButton = !!this.$listeners.close;
    }
  }]);
}(external_vue_property_decorator_["Vue"]);
__decorate([Object(external_vue_property_decorator_["Prop"])({
  type: String,
  default: 'dark',
  validator: function validator(theme) {
    return ['dark', 'light', 'green'].includes(theme);
  }
})], BottomOverlayvue_type_script_lang_ts_BottomOverlay.prototype, "theme", void 0);
__decorate([Object(external_vue_property_decorator_["Watch"])('$listeners.close', {
  immediate: true
})], BottomOverlayvue_type_script_lang_ts_BottomOverlay.prototype, "_onListenerChange", null);
BottomOverlayvue_type_script_lang_ts_BottomOverlay = __decorate([Object(external_vue_property_decorator_["Component"])({
  components: {
    CloseButton: components_CloseButton
  }
})], BottomOverlayvue_type_script_lang_ts_BottomOverlay);
(function (BottomOverlay) {
  var Events;
  (function (Events) {
    Events["CLOSE"] = "close";
  })(Events = BottomOverlay.Events || (BottomOverlay.Events = {}));
})(BottomOverlayvue_type_script_lang_ts_BottomOverlay || (BottomOverlayvue_type_script_lang_ts_BottomOverlay = {}));
/* harmony default export */ var BottomOverlayvue_type_script_lang_ts = (BottomOverlayvue_type_script_lang_ts_BottomOverlay);
// CONCATENATED MODULE: ./src/components/BottomOverlay.vue?vue&type=script&lang=ts
 /* harmony default export */ var components_BottomOverlayvue_type_script_lang_ts = (BottomOverlayvue_type_script_lang_ts); 
// EXTERNAL MODULE: ./src/components/BottomOverlay.vue?vue&type=style&index=0&id=10321bd4&prod&scoped=true&lang=css
var BottomOverlayvue_type_style_index_0_id_10321bd4_prod_scoped_true_lang_css = __webpack_require__("25fc");

// CONCATENATED MODULE: ./src/components/BottomOverlay.vue






/* normalize component */

var BottomOverlay_component = normalizeComponent(
  components_BottomOverlayvue_type_script_lang_ts,
  BottomOverlayvue_type_template_id_10321bd4_scoped_true_render,
  BottomOverlayvue_type_template_id_10321bd4_scoped_true_staticRenderFns,
  false,
  null,
  "10321bd4",
  null
  
)

/* harmony default export */ var components_BottomOverlay = (BottomOverlay_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"6f718cbb-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Carousel.vue?vue&type=template&id=c078661e&scoped=true
var Carouselvue_type_template_id_c078661e_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"carousel",class:{ disabled: _vm.disabled }},_vm._l((_vm.entries),function(entry,index){return _c('div',{key:index,ref:entry,refInFor:true,class:{ selected: _vm.effectiveSelected === entry },on:{"click":function($event){!_vm.disabled && _vm._updateSelection(entry)},"focusin":function($event){!_vm.disabled && _vm._updateSelection(entry)}}},[_vm._t(entry)],2)}),0)}
var Carouselvue_type_template_id_c078661e_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Carousel.vue?vue&type=template&id=c078661e&scoped=true

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.map.js
var es_map = __webpack_require__("c1a3");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.math.sign.js
var es_math_sign = __webpack_require__("f042");

// CONCATENATED MODULE: ./node_modules/@nimiq/utils/dist/module/Tweenable.js



var Tweenable_Tweenable = /*#__PURE__*/function () {
  function Tweenable() {
    var targetValue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var startValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : targetValue;
    var tweenTime = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var startTime = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : Date.now();
    var easing = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : Tweenable.Easing.EASE_IN_OUT_CUBIC;
    _classCallCheck(this, Tweenable);
    _defineProperty(this, "targetValue", void 0);
    _defineProperty(this, "startValue", void 0);
    _defineProperty(this, "tweenTime", void 0);
    _defineProperty(this, "startTime", void 0);
    _defineProperty(this, "easing", void 0);
    this.targetValue = targetValue;
    this.startValue = startValue;
    this.tweenTime = tweenTime;
    this.startTime = startTime;
    this.easing = easing;
  }
  return _createClass(Tweenable, [{
    key: "currentValue",
    get: function get() {
      var easedProgress = this.easing(this.progress);
      return this.startValue + (this.targetValue - this.startValue) * easedProgress;
    }
  }, {
    key: "progress",
    get: function get() {
      if (this.tweenTime === 0) return 1;
      return Math.min(1, (Date.now() - this.startTime) / this.tweenTime);
    }
  }, {
    key: "finished",
    get: function get() {
      return this.progress === 1;
    }
  }, {
    key: "tweenTo",
    value: function tweenTo(targetValue) {
      var tweenTime = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.tweenTime;
      if (targetValue === this.targetValue) return;
      this.startValue = this.currentValue;
      this.targetValue = targetValue;
      this.startTime = Date.now();
      this.tweenTime = tweenTime;
    }
  }]);
}();
(function (Tweenable) {
  // see https://gist.github.com/gre/1650294 for more easing functions
  Tweenable.Easing = {
    LINEAR: function LINEAR(t) {
      return t;
    },
    EASE_IN_OUT_CUBIC: function EASE_IN_OUT_CUBIC(t) {
      return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
    }
    // At some point would be nice to add the default nimiq easing function here which is cubic-bezier(.25,0,0,1)
    // (https://cubic-bezier.com/#.25,0,0,1). This is a cubic Bezier curve with P0=(0,0), P1=(.25,0),
    // P2=(0,1), P3=(1,1) (https://developer.mozilla.org/en-US/docs/Web/CSS/timing-function).
    // However, the standard bezier curve equation that can be constructed from these points as described in
    // https://en.wikipedia.org/wiki/B%C3%A9zier_curve#Cubic_B%C3%A9zier_curves generates points (x,y) of the
    // easing function depending on a parameter t which describes the advancement on the curve. However, here our
    // t denotes the advancement along the x-axis (time) and we're interested in the eased value y. Therefore the
    // equation needs to be solved for y depending on x (see https://stackoverflow.com/q/8217346). This could also
    // be done computationally as described in https://stackoverflow.com/a/11697909.
    // See http://greweb.me/2012/02/bezier-curve-based-easing-functions-from-concept-to-implementation/ for a
    // summary.
  };
})(Tweenable_Tweenable || (Tweenable_Tweenable = {}));
var Tweenable$1 = Tweenable_Tweenable;

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--14-1!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Carousel.vue?vue&type=script&lang=ts























var Carouselvue_type_script_lang_ts_Carousel = /*#__PURE__*/function (_Vue) {
  function Carousel() {
    var _this;
    _classCallCheck(this, Carousel);
    _this = _callSuper(this, Carousel, arguments);
    _this.effectiveSelected = '';
    _this.radius = new Tweenable$1();
    _this.rotations = new Map(); // map entry -> rotation
    _this.requestAnimationFrameId = null;
    return _this;
  }
  _inherits(Carousel, _Vue);
  return _createClass(Carousel, [{
    key: "_hasDummyPosition",
    get: function get() {
      // add dummy to avoid that second entry is hidden exactly behind selected item on opposite side of circle.
      return this.entries.length <= 2;
    }
  }, {
    key: "_totalPositionCount",
    get: function get() {
      return this.entries.length + (this._hasDummyPosition ? 1 : 0);
    }
  }, {
    key: "mounted",
    value: function () {
      var _mounted = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              this._onKeydown = this._onKeydown.bind(this);
              document.addEventListener('keydown', this._onKeydown);
              // trigger these manually instead of via immediate watcher to avoid animating on first render
              _context.next = 4;
              return this.updateDimensions(false);
            case 4:
              this._updateSelection(this.selected);
              this._updateRotations(false);
            case 6:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function mounted() {
        return _mounted.apply(this, arguments);
      }
      return mounted;
    }()
  }, {
    key: "destroyed",
    value: function destroyed() {
      document.removeEventListener('keydown', this._onKeydown);
      if (this.requestAnimationFrameId === null) return;
      cancelAnimationFrame(this.requestAnimationFrameId);
    }
  }, {
    key: "updateDimensions",
    value: function () {
      var _updateDimensions = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var newWatcherValueOrTween,
          tween,
          largestHeight,
          largestMinDistance,
          i,
          _this$$refs$this$entr,
          el1,
          _this$$refs$this$entr2,
          el2,
          minDistance,
          centerAngle,
          radius,
          _args2 = arguments;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              newWatcherValueOrTween = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : true;
              tween = typeof newWatcherValueOrTween === 'boolean' ? newWatcherValueOrTween : true;
              _context2.next = 4;
              return external_vue_property_decorator_["Vue"].nextTick();
            case 4:
              // let Vue render new entries
              largestHeight = 0;
              largestMinDistance = 0;
              for (i = 0; i < this.entries.length; ++i) {
                _this$$refs$this$entr = _slicedToArray(this.$refs[this.entries[i]], 1), el1 = _this$$refs$this$entr[0];
                _this$$refs$this$entr2 = _slicedToArray(this.$refs[this.entries[(i + 1) % this.entries.length]], 1), el2 = _this$$refs$this$entr2[0];
                largestHeight = Math.max(largestHeight, el1.offsetHeight);
                minDistance = el1.offsetWidth / 2 + el2.offsetWidth / 2 + this.entryMargin;
                largestMinDistance = Math.max(largestMinDistance, minDistance);
              }
              // Choose radius big enough such that two items can be rendered side by side without overlapping.
              // Calculate on a right triangle formed by radius, half distance and perpendicular from center point
              // to distance line.
              centerAngle = 2 * Math.PI / this._totalPositionCount / 2; // angle at circle center point
              radius = largestMinDistance / 2 / Math.sin(centerAngle);
              this.radius.tweenTo(radius, tween ? this.animationDuration : 0);
              this.$el.style.minHeight = "".concat(largestHeight, "px");
              this._rerender();
            case 12:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function updateDimensions() {
        return _updateDimensions.apply(this, arguments);
      }
      return updateDimensions;
    }()
  }, {
    key: "_onEntriesChange",
    value: function () {
      var _onEntriesChange2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return this.updateDimensions();
            case 2:
              this._updateSelection(this.effectiveSelected); // re-validate
              this._updateRotations();
            case 4:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
      function _onEntriesChange() {
        return _onEntriesChange2.apply(this, arguments);
      }
      return _onEntriesChange;
    }()
  }, {
    key: "_updateSelection",
    value: function _updateSelection(newSelection) {
      var oldSelection = this.effectiveSelected;
      var isNewSelectionValid = this.entries.includes(newSelection);
      var isOldSelectionValid = this.entries.includes(oldSelection);
      if (isNewSelectionValid) {
        this.effectiveSelected = newSelection;
      } else if (!isOldSelectionValid) {
        this.effectiveSelected = this.entries[0];
      } // else keep the old selection
      if (this.effectiveSelected !== oldSelection) {
        this.$emit('select', this.effectiveSelected);
      }
    }
  }, {
    key: "_updateRotations",
    value: function _updateRotations() {
      var newWatcherValueOrTween = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      var previousWatcherValue = arguments.length > 1 ? arguments[1] : undefined;
      var tween = typeof newWatcherValueOrTween === 'boolean' && typeof previousWatcherValue === 'undefined' ? newWatcherValueOrTween // specified whether to tween
      : true; // did not specify whether to tween or method was called as a watcher (default to true)
      // clean up removed entries
      var _iterator = _createForOfIteratorHelper(this.rotations.keys()),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var entry = _step.value;
          if (this.entries.includes(entry)) continue;
          this.rotations.delete(entry);
        }
        // update rotations
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      var _iterator2 = _createForOfIteratorHelper(this.entries),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var _entry = _step2.value;
          var rotation = this.rotations.get(_entry) || new Tweenable$1();
          var tweenTime = tween ? this.animationDuration : 0;
          rotation.tweenTo(this._calculateTargetRotation(_entry, rotation.currentValue), tweenTime);
          this.rotations.set(_entry, rotation);
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      this._rerender();
    }
    /**
     * @param entry
     * @param currentRotation - Rotation in radians
     * @private
     */
  }, {
    key: "_calculateTargetRotation",
    value: function _calculateTargetRotation(entry, currentRotation) {
      if (this.disabled && entry !== this.effectiveSelected) {
        // hide not selected entries at other end of circle
        return currentRotation + this._calculateRotationInClosestDirection(currentRotation, Math.PI);
      }
      var stepSize = 2 * Math.PI / this._totalPositionCount;
      var entryIndex = this.entries.indexOf(entry);
      var selectedIndex = this.entries.indexOf(this.effectiveSelected);
      var offset = entryIndex - selectedIndex;
      if (this._hasDummyPosition && offset > this._totalPositionCount / 2) {
        // skip dummy position
        offset += 1;
      }
      return currentRotation + this._calculateRotationInClosestDirection(currentRotation, offset * stepSize);
    }
  }, {
    key: "_rerender",
    value: function _rerender() {
      var _this2 = this;
      if (this.requestAnimationFrameId !== null) return;
      this.requestAnimationFrameId = requestAnimationFrame(function () {
        var zCoordinatesForEntries = [];
        var finished = _this2.radius.finished;
        var _iterator3 = _createForOfIteratorHelper(_this2.rotations),
          _step3;
        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var _step3$value = _slicedToArray(_step3.value, 2),
              entry = _step3$value[0],
              rotation = _step3$value[1];
            var currentRotation = rotation.currentValue;
            var currentRadius = _this2.radius.currentValue;
            var x = Math.sin(currentRotation) * currentRadius;
            var z = Math.cos(currentRotation) * currentRadius - currentRadius;
            var _this2$$refs$entry = _slicedToArray(_this2.$refs[entry], 1),
              _el = _this2$$refs$entry[0];
            _el.style.transform = "translate3d(calc(".concat(x, "px - 50%),-50%,").concat(z, "px)");
            _el.style.display = _this2._shouldHide(entry) ? 'none' : '';
            zCoordinatesForEntries.push([entry, z]);
            finished = finished && rotation.finished;
          }
          // Note that instead of setting z-index manually, we could use transform-style: preserve-3d to order
          // automatically by z coordinate. But unfortunately, this makes the entries not clickable anymore.
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
        zCoordinatesForEntries.sort(function (_ref, _ref2) {
          var _ref3 = _slicedToArray(_ref, 2),
            z1 = _ref3[1];
          var _ref4 = _slicedToArray(_ref2, 2),
            z2 = _ref4[1];
          return z1 - z2;
        });
        for (var i = 0; i < zCoordinatesForEntries.length; ++i) {
          var _this2$$refs$zCoordin = _slicedToArray(_this2.$refs[zCoordinatesForEntries[i][0]], 1),
            el = _this2$$refs$zCoordin[0];
          el.style.zIndex = "".concat(i);
        }
        _this2.requestAnimationFrameId = null;
        if (!finished) _this2._rerender();
      });
    }
  }, {
    key: "_calculateRotationInClosestDirection",
    value: function _calculateRotationInClosestDirection(fromAngle, toAngle) {
      // angle offset modulo full rotations
      var rotation = (toAngle - fromAngle) % (2 * Math.PI);
      // determine rotation in opposite direction (subtracting or adding a full circle depending on direction (sign))
      var rotationOppositeDirection = rotation - Math.sign(rotation) * 2 * Math.PI;
      if (Math.abs(Math.abs(rotation) - Math.abs(rotationOppositeDirection)) < 1e-10) {
        // in case of ambiguity chose a default direction
        return Math.min(rotation, rotationOppositeDirection);
      } else if (Math.abs(rotation) < Math.abs(rotationOppositeDirection)) {
        return rotation;
      } else {
        return rotationOppositeDirection;
      }
    }
  }, {
    key: "_shouldHide",
    value: function _shouldHide(entry) {
      var rotation = this.rotations.get(entry);
      if (!rotation || !this.disabled && !this.hideBackgroundEntries) return false;
      var absoluteRotation = Math.abs(this._calculateRotationInClosestDirection(0, rotation.currentValue));
      if (this.disabled) {
        // Hide disabled elements once they reached the opposite end of the circle, also to avoid that they are
        // still reachable via tab. While they're animating to get there, display them even when they're in the
        // back part of the circle.
        return Math.abs(absoluteRotation - Math.PI) < 1e-10;
      } else if (this.hideBackgroundEntries) {
        // Hide entries in the back part of the circle as these will not be visible behind the front entries
        var stepSize = 2 * Math.PI / this._totalPositionCount;
        var threshold = Math.PI / 2 + stepSize / (this._totalPositionCount - 1); // just a heuristic but works ok
        return absoluteRotation > threshold;
      }
    }
  }, {
    key: "_onKeydown",
    value: function _onKeydown(event) {
      var target = event.target;
      if (this.disabled || target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || this.rotations.values().next().value.progress < .5 // block if previous change not animated far enough
      ) return;
      var currentIndex = this.entries.indexOf(this.effectiveSelected);
      var newIndex;
      if (event.key === 'ArrowLeft') {
        newIndex = (currentIndex - 1 + this.entries.length) % this.entries.length;
      } else if (event.key === 'ArrowRight') {
        newIndex = (currentIndex + 1) % this.entries.length;
      } else {
        return;
      }
      this._updateSelection(this.entries[newIndex]);
    }
  }]);
}(external_vue_property_decorator_["Vue"]);
__decorate([Object(external_vue_property_decorator_["Prop"])({
  type: Array,
  default: function _default() {
    return [];
  },
  validator: function validator(entries) {
    return Array.isArray(entries) && entries.length > 0 && !entries.some(function (entry) {
      return typeof entry !== 'string';
    });
  }
})], Carouselvue_type_script_lang_ts_Carousel.prototype, "entries", void 0);
__decorate([Object(external_vue_property_decorator_["Prop"])(String)], Carouselvue_type_script_lang_ts_Carousel.prototype, "selected", void 0);
__decorate([Object(external_vue_property_decorator_["Prop"])({
  type: Number,
  default: 16
})], Carouselvue_type_script_lang_ts_Carousel.prototype, "entryMargin", void 0);
__decorate([Object(external_vue_property_decorator_["Prop"])({
  type: Number,
  default: 1000
})], Carouselvue_type_script_lang_ts_Carousel.prototype, "animationDuration", void 0);
__decorate([Object(external_vue_property_decorator_["Prop"])({
  type: Boolean,
  default: false
})], Carouselvue_type_script_lang_ts_Carousel.prototype, "hideBackgroundEntries", void 0);
__decorate([Object(external_vue_property_decorator_["Prop"])({
  type: Boolean,
  default: false
})], Carouselvue_type_script_lang_ts_Carousel.prototype, "disabled", void 0);
__decorate([Object(external_vue_property_decorator_["Watch"])('entryMargin')], Carouselvue_type_script_lang_ts_Carousel.prototype, "updateDimensions", null);
__decorate([Object(external_vue_property_decorator_["Watch"])('entries')], Carouselvue_type_script_lang_ts_Carousel.prototype, "_onEntriesChange", null);
__decorate([Object(external_vue_property_decorator_["Watch"])('selected')], Carouselvue_type_script_lang_ts_Carousel.prototype, "_updateSelection", null);
__decorate([Object(external_vue_property_decorator_["Watch"])('effectiveSelected'), Object(external_vue_property_decorator_["Watch"])('disabled')], Carouselvue_type_script_lang_ts_Carousel.prototype, "_updateRotations", null);
__decorate([Object(external_vue_property_decorator_["Watch"])('hideBackgroundEntries')], Carouselvue_type_script_lang_ts_Carousel.prototype, "_rerender", null);
Carouselvue_type_script_lang_ts_Carousel = __decorate([external_vue_property_decorator_["Component"]], Carouselvue_type_script_lang_ts_Carousel);
/* harmony default export */ var Carouselvue_type_script_lang_ts = (Carouselvue_type_script_lang_ts_Carousel);
// CONCATENATED MODULE: ./src/components/Carousel.vue?vue&type=script&lang=ts
 /* harmony default export */ var components_Carouselvue_type_script_lang_ts = (Carouselvue_type_script_lang_ts); 
// EXTERNAL MODULE: ./src/components/Carousel.vue?vue&type=style&index=0&id=c078661e&prod&scoped=true&lang=css
var Carouselvue_type_style_index_0_id_c078661e_prod_scoped_true_lang_css = __webpack_require__("072c");

// CONCATENATED MODULE: ./src/components/Carousel.vue






/* normalize component */

var Carousel_component = normalizeComponent(
  components_Carouselvue_type_script_lang_ts,
  Carouselvue_type_template_id_c078661e_scoped_true_render,
  Carouselvue_type_template_id_c078661e_scoped_true_staticRenderFns,
  false,
  null,
  "c078661e",
  null
  
)

/* harmony default export */ var components_Carousel = (Carousel_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"6f718cbb-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/CircleSpinner.vue?vue&type=template&id=2bc59fa8&scoped=true&functional=true
var CircleSpinnervue_type_template_id_2bc59fa8_scoped_true_functional_true_render = function (_h,_vm) {var _c=_vm._c;return _c('svg',{staticClass:"circle-spinner",attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 18 18","width":"18","height":"18","fill":"none","stroke-width":"2","stroke-linecap":"round"}},[_c('path',{attrs:{"stroke":"#0582CA","d":"M9,1c4.42,0,8,3.58,8,8"}}),_c('path',{attrs:{"stroke":"#1F2348","opacity":".3","d":"M4.27,2.56C2.29,4.01,1,6.35,1,9c0,4.42,3.58,8,8,8c2.65,0,4.99-1.29,6.44-3.27"}})])}
var CircleSpinnervue_type_template_id_2bc59fa8_scoped_true_functional_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/CircleSpinner.vue?vue&type=template&id=2bc59fa8&scoped=true&functional=true

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--14-1!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/CircleSpinner.vue?vue&type=script&lang=ts
/* harmony default export */ var CircleSpinnervue_type_script_lang_ts = ({});
// CONCATENATED MODULE: ./src/components/CircleSpinner.vue?vue&type=script&lang=ts
 /* harmony default export */ var components_CircleSpinnervue_type_script_lang_ts = (CircleSpinnervue_type_script_lang_ts); 
// EXTERNAL MODULE: ./src/components/CircleSpinner.vue?vue&type=style&index=0&id=2bc59fa8&prod&scoped=true&lang=css
var CircleSpinnervue_type_style_index_0_id_2bc59fa8_prod_scoped_true_lang_css = __webpack_require__("e6a28");

// CONCATENATED MODULE: ./src/components/CircleSpinner.vue






/* normalize component */

var CircleSpinner_component = normalizeComponent(
  components_CircleSpinnervue_type_script_lang_ts,
  CircleSpinnervue_type_template_id_2bc59fa8_scoped_true_functional_true_render,
  CircleSpinnervue_type_template_id_2bc59fa8_scoped_true_functional_true_staticRenderFns,
  true,
  null,
  "2bc59fa8",
  null
  
)

/* harmony default export */ var CircleSpinner = (CircleSpinner_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"6f718cbb-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/CopyableField.vue?vue&type=template&id=23ed6b92&scoped=true
var CopyableFieldvue_type_template_id_23ed6b92_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"copyable-field",class:{ small: _vm.small }},[(_vm.label)?_c('span',{staticClass:"nq-label"},[_vm._v(_vm._s(_vm.label))]):_vm._e(),_c('div',{staticClass:"copyable-field-content",class:{ 'simple-value': !_vm.isKeyedValue, copied: _vm.copied },on:{"click":_vm.copy}},[_c('div',{ref:"value-container",staticClass:"value-container",style:({ fontSize: _vm.fontSize+'rem' })},[_c('span',{ref:"value",staticClass:"value"},[_vm._v(" "+_vm._s(_vm.isKeyedValue ? _vm.value[_vm.currentKey] : _vm.value)+" ")])]),_vm._l(((_vm.isKeyedValue ? Object.keys(_vm.value) : [])),function(key){return _c('button',{staticClass:"nq-button-s",class:{
                inverse: _vm.currentKey === key,
                'single-key': _vm.hasSingleKey,
            },attrs:{"tabindex":_vm.hasSingleKey ? -1 : 0},on:{"click":function($event){$event.stopPropagation();_vm.currentKey = key}}},[_vm._v(_vm._s(key))])}),_c('div',{staticClass:"copy-notice"},[_vm._v(_vm._s(_vm.$t('Copied')))])],2)])}
var CopyableFieldvue_type_template_id_23ed6b92_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/CopyableField.vue?vue&type=template&id=23ed6b92&scoped=true

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.small.js
var es_string_small = __webpack_require__("b297");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--14-1!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/CopyableField.vue?vue&type=script&lang=ts













var CopyableField_1;




var CopyableFieldvue_type_script_lang_ts_CopyableField = CopyableField_1 = /*#__PURE__*/function (_Mixins) {
  function CopyableField() {
    var _this;
    _classCallCheck(this, CopyableField);
    _this = _callSuper(this, CopyableField, arguments);
    _this.currentKey = '';
    _this.fontSize = _this.small ? CopyableField_1.DEFAULT_FONT_SIZE_SMALL : CopyableField_1.DEFAULT_FONT_SIZE;
    _this.copied = false;
    return _this;
  }
  _inherits(CopyableField, _Mixins);
  return _createClass(CopyableField, [{
    key: "mounted",
    value: function mounted() {
      this._updateFontSize = this._updateFontSize.bind(this);
      window.addEventListener('resize', this._updateFontSize);
      this._updateFontSize();
    }
  }, {
    key: "destroyed",
    value: function destroyed() {
      window.removeEventListener('resize', this._updateFontSize);
    }
  }, {
    key: "isKeyedValue",
    get: function get() {
      return typeof this.value !== 'string' && typeof this.value !== 'number';
    }
  }, {
    key: "hasSingleKey",
    get: function get() {
      return this.isKeyedValue && Object.keys(this.value).length === 1;
    }
  }, {
    key: "_onValueChange",
    value: function _onValueChange() {
      var keys = this.isKeyedValue ? Object.keys(this.value) : [];
      if (keys.length > 0 && (!this.currentKey || !keys.includes(this.currentKey))) {
        this.currentKey = keys[0]; // will also trigger _updateFontSize
      } else {
        this._updateFontSize(); // trigger manually
      }
    }
  }, {
    key: "_updateFontSize",
    value: function () {
      var _updateFontSize2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var valueContainer, valueElement, defaultFontSize, availableWidth, referenceWidth, scaleFactor;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return external_vue_property_decorator_["Vue"].nextTick();
            case 2:
              // let Vue render the component first
              valueContainer = this.$refs['value-container'];
              valueElement = this.$refs.value;
              defaultFontSize = this.small ? CopyableField_1.DEFAULT_FONT_SIZE_SMALL : CopyableField_1.DEFAULT_FONT_SIZE;
              valueElement.style.fontSize = "".concat(defaultFontSize, "rem");
              availableWidth = valueContainer.offsetWidth;
              referenceWidth = valueElement.offsetWidth;
              scaleFactor = availableWidth / referenceWidth;
              valueElement.style.fontSize = '';
              this.fontSize = Math.min(defaultFontSize, defaultFontSize * scaleFactor);
            case 11:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function _updateFontSize() {
        return _updateFontSize2.apply(this, arguments);
      }
      return _updateFontSize;
    }()
  }, {
    key: "copy",
    value: function copy() {
      var _this2 = this;
      Clipboard_Clipboard.copy(this.isKeyedValue ? this.value[this.currentKey].toString() : this.value.toString());
      this.copied = true;
      window.clearTimeout(this._copiedResetTimeout);
      this._copiedResetTimeout = window.setTimeout(function () {
        _this2.copied = false;
      }, 500);
    }
  }]);
}(Object(external_vue_property_decorator_["Mixins"])(i18n_I18nMixin));
CopyableFieldvue_type_script_lang_ts_CopyableField.DEFAULT_FONT_SIZE = 3; // in rem
CopyableFieldvue_type_script_lang_ts_CopyableField.DEFAULT_FONT_SIZE_SMALL = 2.5; // in rem
__decorate([Object(external_vue_property_decorator_["Prop"])({
  required: true,
  validator: function validator(value) {
    return typeof value === 'string' || typeof value === 'number' || _typeof(value) === 'object' && Object.keys(value).length > 0;
  }
})], CopyableFieldvue_type_script_lang_ts_CopyableField.prototype, "value", void 0);
__decorate([Object(external_vue_property_decorator_["Prop"])(String)], CopyableFieldvue_type_script_lang_ts_CopyableField.prototype, "label", void 0);
__decorate([Object(external_vue_property_decorator_["Prop"])({
  type: Boolean,
  default: false
})], CopyableFieldvue_type_script_lang_ts_CopyableField.prototype, "small", void 0);
__decorate([Object(external_vue_property_decorator_["Watch"])('value', {
  immediate: true
})], CopyableFieldvue_type_script_lang_ts_CopyableField.prototype, "_onValueChange", null);
__decorate([Object(external_vue_property_decorator_["Watch"])('currentKey'), Object(external_vue_property_decorator_["Watch"])('small')], CopyableFieldvue_type_script_lang_ts_CopyableField.prototype, "_updateFontSize", null);
CopyableFieldvue_type_script_lang_ts_CopyableField = CopyableField_1 = __decorate([Object(external_vue_property_decorator_["Component"])({
  name: 'CopyableField'
})], CopyableFieldvue_type_script_lang_ts_CopyableField);
/* harmony default export */ var CopyableFieldvue_type_script_lang_ts = (CopyableFieldvue_type_script_lang_ts_CopyableField);
// CONCATENATED MODULE: ./src/components/CopyableField.vue?vue&type=script&lang=ts
 /* harmony default export */ var components_CopyableFieldvue_type_script_lang_ts = (CopyableFieldvue_type_script_lang_ts); 
// EXTERNAL MODULE: ./src/components/CopyableField.vue?vue&type=style&index=0&id=23ed6b92&prod&scoped=true&lang=css
var CopyableFieldvue_type_style_index_0_id_23ed6b92_prod_scoped_true_lang_css = __webpack_require__("0c8d");

// CONCATENATED MODULE: ./src/components/CopyableField.vue






/* normalize component */

var CopyableField_component = normalizeComponent(
  components_CopyableFieldvue_type_script_lang_ts,
  CopyableFieldvue_type_template_id_23ed6b92_scoped_true_render,
  CopyableFieldvue_type_template_id_23ed6b92_scoped_true_staticRenderFns,
  false,
  null,
  "23ed6b92",
  null
  
)

/* harmony default export */ var components_CopyableField = (CopyableField_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"6f718cbb-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/LoadingSpinner.vue?vue&type=template&id=4da3784e&scoped=true
var LoadingSpinnervue_type_template_id_4da3784e_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{staticClass:"loading-spinner",attrs:{"height":"48","width":"54","viewBox":"0 0 54 48","color":"inherit"}},[_c('path',{attrs:{"id":"big-hex","d":"M51.9,21.9L41.3,3.6c-0.8-1.3-2.2-2.1-3.7-2.1H16.4c-1.5,0-2.9,0.8-3.7,2.1L2.1,21.9c-0.8,1.3-0.8,2.9,0,4.2 l10.6,18.3c0.8,1.3,2.2,2.1,3.7,2.1h21.3c1.5,0,2.9-0.8,3.7-2.1l10.6-18.3C52.7,24.8,52.7,23.2,51.9,21.9z","stroke":"currentColor","stroke-width":"3","fill":"none","stroke-linecap":"round","opacity":"0.4","stroke-dasharray":"92.5 60"}}),_c('path',{attrs:{"id":"small-hex","d":"M51.9,21.9L41.3,3.6c-0.8-1.3-2.2-2.1-3.7-2.1H16.4c-1.5,0-2.9,0.8-3.7,2.1L2.1,21.9c-0.8,1.3-0.8,2.9,0,4.2 l10.6,18.3c0.8,1.3,2.2,2.1,3.7,2.1h21.3c1.5,0,2.9-0.8,3.7-2.1l10.6-18.3C52.7,24.8,52.7,23.2,51.9,21.9z","stroke":"currentColor","stroke-width":"3","fill":"none","stroke-linecap":"round","stroke-dasharray":"47.5 105"}})])}
var LoadingSpinnervue_type_template_id_4da3784e_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/LoadingSpinner.vue?vue&type=template&id=4da3784e&scoped=true

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--14-1!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/LoadingSpinner.vue?vue&type=script&lang=ts






var LoadingSpinnervue_type_script_lang_ts_LoadingSpinner = /*#__PURE__*/function (_Vue) {
  function LoadingSpinner() {
    _classCallCheck(this, LoadingSpinner);
    return _callSuper(this, LoadingSpinner, arguments);
  }
  _inherits(LoadingSpinner, _Vue);
  return _createClass(LoadingSpinner);
}(external_vue_property_decorator_["Vue"]);
LoadingSpinnervue_type_script_lang_ts_LoadingSpinner = __decorate([external_vue_property_decorator_["Component"]], LoadingSpinnervue_type_script_lang_ts_LoadingSpinner);
/* harmony default export */ var LoadingSpinnervue_type_script_lang_ts = (LoadingSpinnervue_type_script_lang_ts_LoadingSpinner);
// CONCATENATED MODULE: ./src/components/LoadingSpinner.vue?vue&type=script&lang=ts
 /* harmony default export */ var components_LoadingSpinnervue_type_script_lang_ts = (LoadingSpinnervue_type_script_lang_ts); 
// EXTERNAL MODULE: ./src/components/LoadingSpinner.vue?vue&type=style&index=0&id=4da3784e&prod&scoped=true&lang=css
var LoadingSpinnervue_type_style_index_0_id_4da3784e_prod_scoped_true_lang_css = __webpack_require__("fd4f");

// CONCATENATED MODULE: ./src/components/LoadingSpinner.vue






/* normalize component */

var LoadingSpinner_component = normalizeComponent(
  components_LoadingSpinnervue_type_script_lang_ts,
  LoadingSpinnervue_type_template_id_4da3784e_scoped_true_render,
  LoadingSpinnervue_type_template_id_4da3784e_scoped_true_staticRenderFns,
  false,
  null,
  "4da3784e",
  null
  
)

/* harmony default export */ var components_LoadingSpinner = (LoadingSpinner_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"6f718cbb-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/PageBody.vue?vue&type=template&id=0b286594&scoped=true
var PageBodyvue_type_template_id_0b286594_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"page-body nq-card-body"},[_vm._t("default")],2)}
var PageBodyvue_type_template_id_0b286594_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/PageBody.vue?vue&type=template&id=0b286594&scoped=true

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--14-1!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/PageBody.vue?vue&type=script&lang=ts






var PageBodyvue_type_script_lang_ts_PageBody = /*#__PURE__*/function (_Vue) {
  function PageBody() {
    _classCallCheck(this, PageBody);
    return _callSuper(this, PageBody, arguments);
  }
  _inherits(PageBody, _Vue);
  return _createClass(PageBody);
}(external_vue_property_decorator_["Vue"]);
PageBodyvue_type_script_lang_ts_PageBody = __decorate([external_vue_property_decorator_["Component"]], PageBodyvue_type_script_lang_ts_PageBody);
/* harmony default export */ var PageBodyvue_type_script_lang_ts = (PageBodyvue_type_script_lang_ts_PageBody);
// CONCATENATED MODULE: ./src/components/PageBody.vue?vue&type=script&lang=ts
 /* harmony default export */ var components_PageBodyvue_type_script_lang_ts = (PageBodyvue_type_script_lang_ts); 
// EXTERNAL MODULE: ./src/components/PageBody.vue?vue&type=style&index=0&id=0b286594&prod&scoped=true&lang=css
var PageBodyvue_type_style_index_0_id_0b286594_prod_scoped_true_lang_css = __webpack_require__("bf4c");

// CONCATENATED MODULE: ./src/components/PageBody.vue






/* normalize component */

var PageBody_component = normalizeComponent(
  components_PageBodyvue_type_script_lang_ts,
  PageBodyvue_type_template_id_0b286594_scoped_true_render,
  PageBodyvue_type_template_id_0b286594_scoped_true_staticRenderFns,
  false,
  null,
  "0b286594",
  null
  
)

/* harmony default export */ var components_PageBody = (PageBody_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"6f718cbb-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/PageFooter.vue?vue&type=template&id=3c6ba3a4&scoped=true
var PageFootervue_type_template_id_3c6ba3a4_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"page-footer nq-card-footer"},[_vm._t("default")],2)}
var PageFootervue_type_template_id_3c6ba3a4_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/PageFooter.vue?vue&type=template&id=3c6ba3a4&scoped=true

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--14-1!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/PageFooter.vue?vue&type=script&lang=ts






var PageFootervue_type_script_lang_ts_PageFooter = /*#__PURE__*/function (_Vue) {
  function PageFooter() {
    _classCallCheck(this, PageFooter);
    return _callSuper(this, PageFooter, arguments);
  }
  _inherits(PageFooter, _Vue);
  return _createClass(PageFooter);
}(external_vue_property_decorator_["Vue"]);
PageFootervue_type_script_lang_ts_PageFooter = __decorate([external_vue_property_decorator_["Component"]], PageFootervue_type_script_lang_ts_PageFooter);
/* harmony default export */ var PageFootervue_type_script_lang_ts = (PageFootervue_type_script_lang_ts_PageFooter);
// CONCATENATED MODULE: ./src/components/PageFooter.vue?vue&type=script&lang=ts
 /* harmony default export */ var components_PageFootervue_type_script_lang_ts = (PageFootervue_type_script_lang_ts); 
// EXTERNAL MODULE: ./src/components/PageFooter.vue?vue&type=style&index=0&id=3c6ba3a4&prod&scoped=true&lang=css
var PageFootervue_type_style_index_0_id_3c6ba3a4_prod_scoped_true_lang_css = __webpack_require__("0815");

// CONCATENATED MODULE: ./src/components/PageFooter.vue






/* normalize component */

var PageFooter_component = normalizeComponent(
  components_PageFootervue_type_script_lang_ts,
  PageFootervue_type_template_id_3c6ba3a4_scoped_true_render,
  PageFootervue_type_template_id_3c6ba3a4_scoped_true_staticRenderFns,
  false,
  null,
  "3c6ba3a4",
  null
  
)

/* harmony default export */ var components_PageFooter = (PageFooter_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"6f718cbb-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/PageHeader.vue?vue&type=template&id=53c0243a&scoped=true
var PageHeadervue_type_template_id_53c0243a_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"page-header nq-card-header",class:_vm.progressIndicator ? 'has-progress-indicator' : ''},[(_vm.progressIndicator)?_c('div',{staticClass:"progress-indicator"},_vm._l((_vm.progressSteps),function(thisStep){return _c('div',{key:thisStep,staticClass:"indicator",class:thisStep <= _vm.step ? 'active' : ''})}),0):_vm._e(),(_vm.backArrow)?_c('a',{staticClass:"page-header-back-button",attrs:{"href":"#","title":_vm.$t('Go back')},on:{"click":function($event){$event.preventDefault();return _vm.$emit('back')}}},[_c('ArrowLeftIcon')],1):_vm._e(),_c('h1',{staticClass:"nq-h1"},[_vm._t("default")],2),_vm._t("more")],2)}
var PageHeadervue_type_template_id_53c0243a_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/PageHeader.vue?vue&type=template&id=53c0243a&scoped=true

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--14-1!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/PageHeader.vue?vue&type=script&lang=ts










var PageHeadervue_type_script_lang_ts_PageHeader = /*#__PURE__*/function (_Mixins) {
  function PageHeader() {
    _classCallCheck(this, PageHeader);
    return _callSuper(this, PageHeader, arguments);
  }
  _inherits(PageHeader, _Mixins);
  return _createClass(PageHeader, [{
    key: "progressSteps",
    get: function get() {
      var list = [];
      for (var i = 1; i <= this.numberSteps; i++) list.push(i);
      return list;
    }
  }]);
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
/* harmony default export */ var PageHeadervue_type_script_lang_ts = (PageHeadervue_type_script_lang_ts_PageHeader);
// CONCATENATED MODULE: ./src/components/PageHeader.vue?vue&type=script&lang=ts
 /* harmony default export */ var components_PageHeadervue_type_script_lang_ts = (PageHeadervue_type_script_lang_ts); 
// EXTERNAL MODULE: ./src/components/PageHeader.vue?vue&type=style&index=0&id=53c0243a&prod&scoped=true&lang=css
var PageHeadervue_type_style_index_0_id_53c0243a_prod_scoped_true_lang_css = __webpack_require__("e88c");

// CONCATENATED MODULE: ./src/components/PageHeader.vue






/* normalize component */

var PageHeader_component = normalizeComponent(
  components_PageHeadervue_type_script_lang_ts,
  PageHeadervue_type_template_id_53c0243a_scoped_true_render,
  PageHeadervue_type_template_id_53c0243a_scoped_true_staticRenderFns,
  false,
  null,
  "53c0243a",
  null
  
)

/* harmony default export */ var components_PageHeader = (PageHeader_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"6f718cbb-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/PaymentInfoLine.vue?vue&type=template&id=04517e76&scoped=true
var PaymentInfoLinevue_type_template_id_04517e76_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"info-line",class:{ 'inverse-theme': _vm.theme === _vm.constructor.Themes.INVERSE }},[_c('div',{staticClass:"amounts",on:{"mouseenter":function($event){_vm.$refs['price-tooltip'] && _vm.$refs['price-tooltip'].show()},"mouseleave":function($event){_vm.$refs['price-tooltip'] && _vm.$refs['price-tooltip'].hide()},"click":function($event){_vm.$refs['price-tooltip'] && Date.now() - _vm.lastTooltipToggle > 200 && _vm.$refs['price-tooltip'].toggle()}}},[_c('Amount',{attrs:{"currency":_vm.cryptoAmount.currency,"amount":_vm.cryptoAmount.amount,"currencyDecimals":_vm.cryptoAmount.decimals,"minDecimals":0,"maxDecimals":Math.min(4, _vm.cryptoAmount.decimals)}}),(_vm.fiatAmount)?_c('Tooltip',{ref:"price-tooltip",staticClass:"price-tooltip",attrs:{"container":_vm.$parent,"preferredPosition":"bottom left","margin":{ left: 8 },"styles":{
                minWidth: '37rem',
                padding: '2rem',
                lineHeight: 1.3,
            },"theme":_vm.theme},on:{"show":function($event){return _vm.onPriceTooltipToggle(true)},"hide":function($event){return _vm.onPriceTooltipToggle(false)}},nativeOn:{"click":function($event){$event.stopPropagation();}},scopedSlots:_vm._u([{key:"trigger",fn:function(){return [(_vm.isBadRate)?_c('AlertTriangleIcon'):_vm._e(),_c('FiatAmount',{attrs:{"currency":_vm.fiatAmount.currency,"amount":_vm.fiatAmount.amount}})]},proxy:true},{key:"default",fn:function(){return [_c('div',{staticClass:"price-breakdown"},[_c('label',[_vm._v(_vm._s(_vm.$t('Order amount')))]),_c('FiatAmount',{attrs:{"currency":_vm.fiatAmount.currency,"amount":_vm.fiatAmount.amount}}),(_vm.vendorMarkup || _vm.vendorMarkup === 0)?[(_vm.vendorMarkup >= 0)?_c('label',[_vm._v(_vm._s(_vm.$t('Vendor crypto markup')))]):_c('label',[_vm._v(_vm._s(_vm.$t('Vendor crypto discount')))]),_c('div',[_vm._v(_vm._s(_vm.formattedVendorMarkup))])]:_vm._e(),_c('label',{class:{ 'nq-orange': _vm.isBadRate }},[_vm._v(" "+_vm._s(_vm.$t('Effective rate'))+" ")]),_c('div',{class:{ 'nq-orange': _vm.isBadRate }},[_c('FiatAmount',{attrs:{"currency":_vm.fiatAmount.currency,"amount":_vm.effectiveRate,"maxRelativeDeviation":.0001}}),_vm._v(" / "+_vm._s(_vm.cryptoAmount.currency.toUpperCase())+" ")],1)],2),(_vm.rateInfo())?_c('div',{staticClass:"rate-info info",class:{ 'nq-orange': _vm.isBadRate }},[_vm._v(" "+_vm._s(_vm.rateInfo())+" ")]):_vm._e(),_c('div',{staticClass:"free-service-info info"},[_vm._v(_vm._s(_vm.$t('Nimiq provides this service free of charge.')))]),_c('hr'),_c('div',{staticClass:"total"},[_c('label',[_vm._v(_vm._s(_vm.$t('Total')))]),_c('Amount',{attrs:{"currency":_vm.cryptoAmount.currency,"amount":_vm.cryptoAmount.amount,"currencyDecimals":_vm.cryptoAmount.decimals,"minDecimals":0,"maxDecimals":Math.min(8, _vm.cryptoAmount.decimals),"showApprox":""}})],1),(_vm.networkFee === undefined || _vm.networkFee === null || Number(_vm.networkFee) !== 0)?_c('div',{staticClass:"network-fee-info info"},[_vm._v(" + "),(!_vm.isFormattedNetworkFeeZero)?_c('I18n',{attrs:{"path":"{amount} suggested network fee"},scopedSlots:_vm._u([{key:"amount",fn:function(){return [_c('Amount',{attrs:{"currency":_vm.cryptoAmount.currency,"amount":_vm.networkFee,"currencyDecimals":_vm.cryptoAmount.decimals,"minDecimals":0,"maxDecimals":Math.min(6, _vm.cryptoAmount.decimals)}})]},proxy:true}],null,false,454039759)}):[_vm._v(_vm._s(_vm.$t('network fee')))]],2):_vm._e()]},proxy:true}],null,false,1182904046)}):_vm._e()],1),_c('div',{staticClass:"arrow-runway"},[_c('ArrowRightSmallIcon')],1),_c('Account',{attrs:{"address":_vm.address,"image":_vm.shopLogoUrl,"label":_vm.originDomain}}),(_vm.startTime && _vm.endTime)?_c('Timer',{ref:"timer",attrs:{"startTime":_vm.startTime,"endTime":_vm.endTime,"theme":_vm.theme,"tooltipProps":{
            container: _vm.$parent,
            margin: { right: 8 },
        }}}):_vm._e()],1)}
var PaymentInfoLinevue_type_template_id_04517e76_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/PaymentInfoLine.vue?vue&type=template&id=04517e76&scoped=true

// CONCATENATED MODULE: ./node_modules/@nimiq/utils/dist/module/FiatApi.js


























// This API supports using CryptoCompare or CoinGecko as data providers. For both, the free API is used, in an unauthen-
// ticated fashion, i.e. without api keys. Rate limits are determined based on the user's IP. The current recommendation
// is to use CryptoCompare as provider because its rate limits are significantly more generous, and CoinGecko does not
// allow fetching historic rates past the last 365 days on the free API.
var Provider;
(function (Provider) {
  Provider["CryptoCompare"] = "CryptoCompare";
  Provider["CoinGecko"] = "CoinGecko";
})(Provider || (Provider = {}));
var RateType;
(function (RateType) {
  RateType["CURRENT"] = "current";
  RateType["HISTORIC"] = "historic";
})(RateType || (RateType = {}));
// Note that CryptoCompare and CoinGecko support many more but these are the ones that are currently of interest to us.
var CryptoCurrency;
(function (CryptoCurrency) {
  CryptoCurrency["NIM"] = "nim";
  CryptoCurrency["BTC"] = "btc";
  CryptoCurrency["ETH"] = "eth";
  CryptoCurrency["USDC"] = "usdc";
})(CryptoCurrency || (CryptoCurrency = {}));
// This enum has been generated from the generated lists CRYPTOCOMPARE_FIAT_CURRENCIES, COINGECKO_FIAT_CURRENCIES and
// BRIDGEABLE_FIAT_CURRENCIES defined below via the following script:
//
// const CRYPTOCOMPARE_FIAT_CURRENCIES = [ ...as defined below ];
// const COINGECKO_FIAT_CURRENCIES = [ ...as defined below ];
// const BRIDGEABLE_FIAT_CURRENCIES = [ ...as defined below ];
// const allFiatCurrencies = [...new Set([
//     ...CRYPTOCOMPARE_FIAT_CURRENCIES,
//     ...COINGECKO_FIAT_CURRENCIES,
//     ...BRIDGEABLE_FIAT_CURRENCIES,
// ])].sort();
// const currencyNameFormatter = new Intl.DisplayNames('en-US', { type: 'currency' });
// console.log(allFiatCurrencies.map((currency) => `${currency} = '${currency.toLowerCase()}', `
//     + `// ${currencyNameFormatter.of(currency)}`).join('\n'));
var FiatCurrency;
(function (FiatCurrency) {
  FiatCurrency["AED"] = "aed";
  FiatCurrency["AFN"] = "afn";
  FiatCurrency["ALL"] = "all";
  FiatCurrency["AMD"] = "amd";
  FiatCurrency["ANG"] = "ang";
  FiatCurrency["AOA"] = "aoa";
  FiatCurrency["ARS"] = "ars";
  FiatCurrency["AUD"] = "aud";
  FiatCurrency["AWG"] = "awg";
  FiatCurrency["AZN"] = "azn";
  FiatCurrency["BAM"] = "bam";
  FiatCurrency["BBD"] = "bbd";
  FiatCurrency["BDT"] = "bdt";
  FiatCurrency["BGN"] = "bgn";
  FiatCurrency["BHD"] = "bhd";
  FiatCurrency["BIF"] = "bif";
  FiatCurrency["BMD"] = "bmd";
  FiatCurrency["BND"] = "bnd";
  FiatCurrency["BOB"] = "bob";
  FiatCurrency["BRL"] = "brl";
  FiatCurrency["BSD"] = "bsd";
  FiatCurrency["BTN"] = "btn";
  FiatCurrency["BWP"] = "bwp";
  FiatCurrency["BYN"] = "byn";
  FiatCurrency["BZD"] = "bzd";
  FiatCurrency["CAD"] = "cad";
  FiatCurrency["CDF"] = "cdf";
  FiatCurrency["CHF"] = "chf";
  FiatCurrency["CLP"] = "clp";
  FiatCurrency["CNY"] = "cny";
  FiatCurrency["COP"] = "cop";
  FiatCurrency["CRC"] = "crc";
  FiatCurrency["CUP"] = "cup";
  FiatCurrency["CVE"] = "cve";
  FiatCurrency["CZK"] = "czk";
  FiatCurrency["DJF"] = "djf";
  FiatCurrency["DKK"] = "dkk";
  FiatCurrency["DOP"] = "dop";
  FiatCurrency["DZD"] = "dzd";
  FiatCurrency["EGP"] = "egp";
  FiatCurrency["ERN"] = "ern";
  FiatCurrency["ETB"] = "etb";
  FiatCurrency["EUR"] = "eur";
  FiatCurrency["FJD"] = "fjd";
  FiatCurrency["FKP"] = "fkp";
  FiatCurrency["GBP"] = "gbp";
  FiatCurrency["GEL"] = "gel";
  FiatCurrency["GHS"] = "ghs";
  FiatCurrency["GIP"] = "gip";
  FiatCurrency["GMD"] = "gmd";
  FiatCurrency["GNF"] = "gnf";
  FiatCurrency["GTQ"] = "gtq";
  FiatCurrency["GYD"] = "gyd";
  FiatCurrency["HKD"] = "hkd";
  FiatCurrency["HNL"] = "hnl";
  FiatCurrency["HTG"] = "htg";
  FiatCurrency["HUF"] = "huf";
  FiatCurrency["IDR"] = "idr";
  FiatCurrency["ILS"] = "ils";
  FiatCurrency["INR"] = "inr";
  FiatCurrency["IQD"] = "iqd";
  FiatCurrency["IRR"] = "irr";
  FiatCurrency["ISK"] = "isk";
  FiatCurrency["JMD"] = "jmd";
  FiatCurrency["JOD"] = "jod";
  FiatCurrency["JPY"] = "jpy";
  FiatCurrency["KES"] = "kes";
  FiatCurrency["KGS"] = "kgs";
  FiatCurrency["KHR"] = "khr";
  FiatCurrency["KMF"] = "kmf";
  FiatCurrency["KPW"] = "kpw";
  FiatCurrency["KRW"] = "krw";
  FiatCurrency["KWD"] = "kwd";
  FiatCurrency["KYD"] = "kyd";
  FiatCurrency["KZT"] = "kzt";
  FiatCurrency["LAK"] = "lak";
  FiatCurrency["LBP"] = "lbp";
  FiatCurrency["LKR"] = "lkr";
  FiatCurrency["LRD"] = "lrd";
  FiatCurrency["LSL"] = "lsl";
  FiatCurrency["LYD"] = "lyd";
  FiatCurrency["MAD"] = "mad";
  FiatCurrency["MDL"] = "mdl";
  FiatCurrency["MGA"] = "mga";
  FiatCurrency["MKD"] = "mkd";
  FiatCurrency["MMK"] = "mmk";
  FiatCurrency["MNT"] = "mnt";
  FiatCurrency["MOP"] = "mop";
  FiatCurrency["MRU"] = "mru";
  FiatCurrency["MUR"] = "mur";
  FiatCurrency["MVR"] = "mvr";
  FiatCurrency["MWK"] = "mwk";
  FiatCurrency["MXN"] = "mxn";
  FiatCurrency["MYR"] = "myr";
  FiatCurrency["MZN"] = "mzn";
  FiatCurrency["NAD"] = "nad";
  FiatCurrency["NGN"] = "ngn";
  FiatCurrency["NIO"] = "nio";
  FiatCurrency["NOK"] = "nok";
  FiatCurrency["NPR"] = "npr";
  FiatCurrency["NZD"] = "nzd";
  FiatCurrency["OMR"] = "omr";
  FiatCurrency["PAB"] = "pab";
  FiatCurrency["PEN"] = "pen";
  FiatCurrency["PGK"] = "pgk";
  FiatCurrency["PHP"] = "php";
  FiatCurrency["PKR"] = "pkr";
  FiatCurrency["PLN"] = "pln";
  FiatCurrency["PYG"] = "pyg";
  FiatCurrency["QAR"] = "qar";
  FiatCurrency["RON"] = "ron";
  FiatCurrency["RSD"] = "rsd";
  FiatCurrency["RUB"] = "rub";
  FiatCurrency["RWF"] = "rwf";
  FiatCurrency["SAR"] = "sar";
  FiatCurrency["SBD"] = "sbd";
  FiatCurrency["SCR"] = "scr";
  FiatCurrency["SDG"] = "sdg";
  FiatCurrency["SEK"] = "sek";
  FiatCurrency["SGD"] = "sgd";
  FiatCurrency["SHP"] = "shp";
  FiatCurrency["SOS"] = "sos";
  FiatCurrency["SRD"] = "srd";
  FiatCurrency["SSP"] = "ssp";
  FiatCurrency["STN"] = "stn";
  FiatCurrency["SYP"] = "syp";
  FiatCurrency["SZL"] = "szl";
  FiatCurrency["THB"] = "thb";
  FiatCurrency["TJS"] = "tjs";
  FiatCurrency["TMT"] = "tmt";
  FiatCurrency["TND"] = "tnd";
  FiatCurrency["TOP"] = "top";
  FiatCurrency["TRY"] = "try";
  FiatCurrency["TTD"] = "ttd";
  FiatCurrency["TWD"] = "twd";
  FiatCurrency["TZS"] = "tzs";
  FiatCurrency["UAH"] = "uah";
  FiatCurrency["UGX"] = "ugx";
  FiatCurrency["USD"] = "usd";
  FiatCurrency["UYU"] = "uyu";
  FiatCurrency["UZS"] = "uzs";
  FiatCurrency["VES"] = "ves";
  FiatCurrency["VND"] = "vnd";
  FiatCurrency["VUV"] = "vuv";
  FiatCurrency["WST"] = "wst";
  FiatCurrency["XAF"] = "xaf";
  FiatCurrency["XCD"] = "xcd";
  FiatCurrency["XOF"] = "xof";
  FiatCurrency["XPF"] = "xpf";
  FiatCurrency["YER"] = "yer";
  FiatCurrency["ZAR"] = "zar";
  FiatCurrency["ZMW"] = "zmw";
})(FiatCurrency || (FiatCurrency = {}));
// Fiat currencies supported by CryptoCompare.
// This list has been generated by reducing the supported currencies to those that are listed as a circulating currency
// on https://en.wikipedia.org/wiki/List_of_circulating_currencies#List_of_circulating_currencies_by_state_or_territory
// via the following script:
//
// const referenceCurrencySymbols = { ...parsed from Wikipedia as described in CurrencyInfo.ts };
// const CryptoCurrency = { ...as defined above };
// const CRYPTOCOMPARE_CURRENT_RATES_FIAT_CURRENCIES = [ ...as defined below (ticker strings only) ];
// const CRYPTOCOMPARE_HISTORIC_RATES_FIAT_CURRENCIES = [ ...as defined below (ticker strings only) ];
//
// async function _fetch(url, init) {
//     const result = await fetch(url, init).then((response) => response.json());
//     if (result?.Message?.includes('rate limit')) {
//         console.log('Pausing on rate limit...');
//         await new Promise((resolve) => setTimeout(resolve, 3500));
//         return _fetch(url, init);
//     }
//     return result;
// }
//
// async function _isSupportedCurrency(currency, forHistoricRates) {
//     const fiatApiCryptoCurrencies = Object.keys(CryptoCurrency).join(',');
//     // For historic rates use CCCAGG exchange / data set, the default used by CryptoCompare for historic rates.
//     const exchangeParameter = forHistoricRates ? '&e=CCCAGG' : ''
//     const { Message: errorMessage } = await _fetch('https://min-api.cryptocompare.com/data/pricemulti'
//         + `?fsyms=${fiatApiCryptoCurrencies}&tsyms=${currency}${exchangeParameter}&relaxedValidation=false`);
//     if (errorMessage?.includes('market does not exist')) {
//         return false;
//     } else if (errorMessage) {
//         throw new Error(`Currency ${currency} check failed because of unexpected error: ${errorMessage}`);
//     }
//     return true;
// }
//
// let knownFiatCurrencyEntries = [];
// let page = 1; // starts at 1
// let lastPage; // inclusive
// const pageSize = 100; // the max allowed page size
// do {
//     const { Data: {
//         LIST: entries,
//         STATS: { TOTAL_ASSETS: fiatCurrencyCount },
//     } } = await _fetch('https://data-api.cryptocompare.com/asset/v1/top/list'
//         + `?asset_type=FIAT&sort_by=CREATED_ON&sort_direction=ASC&page=${page}&page_size=${pageSize}`);
//     knownFiatCurrencyEntries = knownFiatCurrencyEntries.concat(entries);
//     lastPage = Math.ceil(fiatCurrencyCount / pageSize);
// } while (++page <= lastPage);
//
// const collator = new Intl.Collator('en');
// knownFiatCurrencyEntries.sort(({ SYMBOL: s1}, { SYMBOL: s2 }) => collator.compare(s1, s2));
//
// const supportedCurrentRatesFiatCurrencyEntries = [];
// const supportedHistoricRatesFiatCurrencyEntries = [];
// for (const entry of knownFiatCurrencyEntries) {
//     const { SYMBOL: currency, NAME: name } = entry;
//     if (!(currency in referenceCurrencySymbols)) {
//         console.log(`Currency ${currency} (${name}) is skipped because it's not circulating.`);
//         continue;
//     }
//     if (await _isSupportedCurrency(currency, /* forHistoricRates */ false)) {
//         supportedCurrentRatesFiatCurrencyEntries.push(entry);
//     }
//     if (await _isSupportedCurrency(currency, /* forHistoricRates */ true)) {
//         supportedHistoricRatesFiatCurrencyEntries.push(entry);
//     }
// }
//
// console.log('Supported currencies for current rates:');
// console.log(supportedCurrentRatesFiatCurrencyEntries.map(({ SYMBOL: currency }) => `'${currency}'`).join(', '));
// for (const currency of CRYPTOCOMPARE_CURRENT_RATES_FIAT_CURRENCIES) {
//     if (supportedCurrentRatesFiatCurrencyEntries.some(({ SYMBOL }) => SYMBOL === currency)) continue;
//     console.warn(`Previously supported ${currency} is not supported or circulating anymore.`);
// }
// console.log('Supported currencies for historic rates:');
// console.log(supportedHistoricRatesFiatCurrencyEntries.map(({ SYMBOL: currency }) => `'${currency}'`).join(', '));
// for (const currency of CRYPTOCOMPARE_HISTORIC_RATES_FIAT_CURRENCIES) {
//     if (supportedHistoricRatesFiatCurrencyEntries.some(({ SYMBOL }) => SYMBOL === currency)) continue;
//     console.warn(`Previously supported ${currency} is not supported or circulating anymore.`);
// }
var CRYPTOCOMPARE_CURRENT_RATES_FIAT_CURRENCIES = ['AED', 'AOA', 'ARS', 'AUD', 'BGN', 'BND', 'BOB', 'BRL', 'BYN', 'CAD', 'CHF', 'CLP', 'CNY', 'COP', 'CZK', 'DKK', 'ERN', 'EUR', 'GBP', 'GEL', 'HKD', 'HUF', 'IDR', 'ILS', 'INR', 'JPY', 'KRW', 'KZT', 'MNT', 'MXN', 'MYR', 'NGN', 'NOK', 'NZD', 'PEN', 'PHP', 'PLN', 'RON', 'RUB', 'SEK', 'SGD', 'STN', 'THB', 'TRY', 'UAH', 'UGX', 'USD', 'VUV', 'ZAR', 'ZMW'].map(function (ticker) {
  return FiatCurrency[ticker];
});
var CRYPTOCOMPARE_HISTORIC_RATES_FIAT_CURRENCIES = ['AED', 'ARS', 'AUD', 'BRL', 'CAD', 'CHF', 'COP', 'CZK', 'EUR', 'GBP', 'GEL', 'IDR', 'ILS', 'INR', 'JPY', 'KRW', 'KZT', 'MXN', 'MYR', 'NGN', 'NZD', 'PLN', 'RON', 'RUB', 'SGD', 'THB', 'TRY', 'UAH', 'USD', 'ZAR'].map(function (ticker) {
  return FiatCurrency[ticker];
});
// Fiat currencies supported by CoinGecko, all of which support historic rates.
// Note that CoinGecko supports more vs_currencies (see https://api.coingecko.com/api/v3/simple/supported_vs_currencies)
// but also includes crypto currencies and ounces of gold amongst others that are not fiat currencies. This list here
// has been generated by reducing the vs_currencies to those that are listed as a circulating currency on
// https://en.wikipedia.org/wiki/List_of_circulating_currencies#List_of_circulating_currencies_by_state_or_territory
// via the following script:
//
// const referenceCurrencySymbols = { ...parsed from Wikipedia as described in CurrencyInfo.ts };
// const COINGECKO_FIAT_CURRENCIES = [ ...as defined below (ticker strings only) ];
//
// const coinGeckoCurrencies = (await fetch('https://api.coingecko.com/api/v3/simple/supported_vs_currencies')
//     .then((response) => response.json()))
//     .map((currency) => currency.toUpperCase())
//     .filter((currency) => currency in referenceCurrencySymbols)
//     .sort();
//
// console.log('Supported currencies:');
// console.log(coinGeckoCurrencies.map((currency) => `'${currency}'`).join(', '));
// for (const currency of COINGECKO_FIAT_CURRENCIES) {
//     if (coinGeckoCurrencies.includes(currency)) continue;
//     console.warn(`Previously supported ${currency} is not supported or circulating anymore`);
// }
var COINGECKO_FIAT_CURRENCIES = ['AED', 'ARS', 'AUD', 'BDT', 'BHD', 'BMD', 'BRL', 'CAD', 'CHF', 'CLP', 'CNY', 'CZK', 'DKK', 'EUR', 'GBP', 'GEL', 'HKD', 'HUF', 'IDR', 'ILS', 'INR', 'JPY', 'KRW', 'KWD', 'LKR', 'MMK', 'MXN', 'MYR', 'NGN', 'NOK', 'NZD', 'PHP', 'PKR', 'PLN', 'RUB', 'SAR', 'SEK', 'SGD', 'THB', 'TRY', 'TWD', 'UAH', 'USD', 'VND', 'ZAR'].map(function (ticker) {
  return FiatCurrency[ticker];
});
// Additionally supported fiat currencies, for which we calculate exchange rates by combining coin/USD and fiat/USD
// rates via the CPL API, if they're not directly supported by the chosen provider. These do not support historic rates.
// This list is designed to not overlap with HISTORY_BRIDGEABLE_FIAT_CURRENCIES, to prefer the history supporting APIs,
// and it has been generated by reducing the supported currencies to those that are listed as a circulating currency on
// https://en.wikipedia.org/wiki/List_of_circulating_currencies#List_of_circulating_currencies_by_state_or_territory via
// the following script:
//
// const referenceCurrencySymbols = { ...parsed from Wikipedia as described in CurrencyInfo.ts };
// const HISTORY_BRIDGEABLE_FIAT_CURRENCIES = [ ... as defined below (ticker strings only) ];
// const CPL_BRIDGEABLE_FIAT_CURRENCIES = [ ...as defined below (ticker strings only) ];
//
// const cplData = await fetch('https://firestore.googleapis.com/v1/projects/checkout-service/databases/(default)/'
//     + 'documents/exchangerates/rates').then((response) => response.json());
// const cplCurrencies = Object.keys(cplData.fields.rates.mapValue.fields)
//     .map((currency) => currency.toUpperCase())
//     .filter((currency) => currency in referenceCurrencySymbols
//         && !HISTORY_BRIDGEABLE_FIAT_CURRENCIES.includes(currency))
//     .sort();
//
// console.log('Supported currencies:');
// console.log(cplCurrencies.map((currency) => `'${currency}'`).join(', '));
// for (const currency of CPL_BRIDGEABLE_FIAT_CURRENCIES) {
//     if (cplCurrencies.includes(currency)) continue;
//     console.warn(`Previously supported ${currency} is not supported or circulating anymore`);
// }
var CPL_BRIDGEABLE_FIAT_CURRENCIES = ['AED', 'AFN', 'ALL', 'AMD', 'ANG', 'AOA', 'ARS', 'AUD', 'AWG', 'AZN', 'BAM', 'BBD', 'BDT', 'BGN', 'BHD', 'BIF', 'BMD', 'BND', 'BOB', 'BRL', 'BSD', 'BTN', 'BWP', 'BYN', 'BZD', 'CAD', 'CDF', 'CHF', 'CLP', 'CNY', 'COP', 'CUP', 'CVE', 'CZK', 'DJF', 'DKK', 'DOP', 'DZD', 'EGP', 'ERN', 'ETB', 'EUR', 'FJD', 'FKP', 'GBP', 'GEL', 'GHS', 'GIP', 'GMD', 'GNF', 'GTQ', 'GYD', 'HKD', 'HNL', 'HTG', 'HUF', 'IDR', 'ILS', 'INR', 'IQD', 'IRR', 'ISK', 'JMD', 'JOD', 'JPY', 'KES', 'KGS', 'KHR', 'KMF', 'KPW', 'KRW', 'KWD', 'KYD', 'KZT', 'LAK', 'LBP', 'LKR', 'LRD', 'LSL', 'LYD', 'MAD', 'MDL', 'MGA', 'MKD', 'MMK', 'MNT', 'MOP', 'MRU', 'MUR', 'MVR', 'MWK', 'MXN', 'MYR', 'MZN', 'NAD', 'NGN', 'NIO', 'NOK', 'NPR', 'NZD', 'OMR', 'PAB', 'PEN', 'PGK', 'PHP', 'PKR', 'PLN', 'PYG', 'QAR', 'RON', 'RSD', 'RUB', 'RWF', 'SAR', 'SBD', 'SCR', 'SDG', 'SEK', 'SGD', 'SHP', 'SOS', 'SRD', 'SSP', 'STN', 'SYP', 'SZL', 'THB', 'TJS', 'TMT', 'TND', 'TOP', 'TRY', 'TTD', 'TWD', 'TZS', 'UAH', 'UGX', 'USD', 'UYU', 'UZS', 'VES', 'VND', 'VUV', 'WST', 'XAF', 'XCD', 'XOF', 'XPF', 'YER', 'ZAR', 'ZMW'].map(function (ticker) {
  return FiatCurrency[ticker];
});
// Additionally supported fiat currencies, for which we calculate exchange rates by combining coin/USD and fiat/USD
// rates, if they're not directly supported by the chosen provider. The currencies here support historic rates. This
// list is maintained manually.
var HISTORY_BRIDGEABLE_FIAT_CURRENCIES = ['CRC'].map(function (ticker) {
  return FiatCurrency[ticker];
});
// Additionally supported fiat currencies, for which we calculate exchange rates by combining coin/USD and fiat/USD
// rates, if they're not directly supported by the chosen provider. Not all of these are supported for fetching
// historical exchange rates. Those that are, are listed in HISTORY_BRIDGEABLE_FIAT_CURRENCIES and all currencies that
// are supported for fetching historical exchange rates via a specific provider, bridged or not, can be checked for via
// isHistorySupportedFiatCurrency(currency, provider).
var BRIDGEABLE_FIAT_CURRENCIES = [].concat(_toConsumableArray(CPL_BRIDGEABLE_FIAT_CURRENCIES), _toConsumableArray(HISTORY_BRIDGEABLE_FIAT_CURRENCIES));
// Previously, when we supported CoinGecko as the only exchange rate provider, BridgeableFiatCurrency was designed such
// that it did not overlap with CoinGeckoFiatCurrency, i.e. overlapping entries were omitted in BridgeableFiatCurrency.
// With the introduction of CryptoCompare as an additional provider with a different set of supported currencies, we
// changed its definition to include all supported currencies, including those overlapping with currencies supported by
// either of the providers. Shall the API be reduced to only support one provider in the future, a check similar to the
// one below can be enabled again:
// Check that no currency supported directly by CoinGecko is handled as bridged currency. See description of
// __expectNoCplWithHistoryBridgeOverlap.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
// type __expectNoCoinGeckoWithBridgedOverlap = {}[Extract<BridgeableFiatCurrency, CoinGeckoFiatCurrency>];
var HISTORY_BRIDGEABLE_CURRENCY_TIMEZONES = _defineProperty({}, FiatCurrency.CRC, 'America/Costa_Rica');
var API_URL_CRYPTOCOMPARE = 'https://min-api.cryptocompare.com/data';
var API_URL_COINGECKO = 'https://api.coingecko.com/api/v3';
var COIN_IDS_COINGECKO = _defineProperty(_defineProperty(_defineProperty(_defineProperty({}, CryptoCurrency.NIM, 'nimiq-2'), CryptoCurrency.BTC, 'bitcoin'), CryptoCurrency.ETH, 'ethereum'), CryptoCurrency.USDC, 'usd-coin');
var ONE_MINUTE = 60 * 1000;
var ONE_HOUR = 60 * ONE_MINUTE;
var ONE_DAY = 24 * ONE_HOUR;
/**
 * @param url The URL to the CoinGecko v3 API.
 */
function setCoinGeckoApiUrl() {
  var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'https://api.coingecko.com/api/v3';
  API_URL_COINGECKO = url;
}
var coinGeckoExtraHeaders = new Map();
function setCoinGeckoApiExtraHeader(name, value) {
  if (value !== false) {
    coinGeckoExtraHeaders.set(name, value);
  } else {
    coinGeckoExtraHeaders.delete(name);
  }
}
function getExchangeRates(_x, _x2) {
  return _getExchangeRates.apply(this, arguments);
}
/**
 * Request historic exchange rates by range. Input and output timestamps are in milliseconds.
 *
 * Additional noted for CryptoCompare:
 * We currently return data at hourly resolution. However, minutely or daily data would also be possible, support for
 * which should then be added via an options object in the function signature, if needed.
 *
 * Additional notes for CoinGecko:
 * The free, public API limits historic exchange rates to the past 365 days. Requesting older data results in 401 -
 * Unauthorized errors. The time resolution of returned data depends on the chosen range. CoinGecko provides minutely
 * for ranges within 1 day from the current time, hourly data for any ranges between 1 day and 90 days (do not need to
 * be within 90 days from current time) and daily for ranges above 90 days. Note that minutely data is ~5-10 minutes
 * apart, hourly data about an hour.
 */
function _getExchangeRates() {
  _getExchangeRates = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(cryptoCurrencies, vsCurrencies) {
    var provider,
      providerVsCurrencies,
      bridgedVsCurrencies,
      _iterator,
      _step,
      currency,
      bridgedExchangeRatesPromise,
      providerExchangeRatesPromise,
      coinIds,
      _yield$Promise$all,
      _yield$Promise$all2,
      exchangeRates,
      bridgedExchangeRates,
      _i6,
      _Object$entries6,
      _Object$entries6$_i,
      bridgedCurrency,
      bridgedExchangeRate,
      _i7,
      _Object$values,
      coinPrices,
      coinUsdPrice,
      _args2 = arguments;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          provider = _args2.length > 2 && _args2[2] !== undefined ? _args2[2] : Provider.CryptoCompare;
          // Make sure the currencies are lower case to match the enums (for users that might not be using typescript which
          // ensures that only valid currency tickers are passed).
          cryptoCurrencies = cryptoCurrencies.map(function (currency) {
            return currency.toLowerCase();
          });
          vsCurrencies = vsCurrencies.map(function (currency) {
            return currency.toLowerCase();
          });
          // vsCurrencies handled by the provider. Potentially extended by USD.
          providerVsCurrencies = [];
          bridgedVsCurrencies = [];
          _iterator = _createForOfIteratorHelper(vsCurrencies);
          _context2.prev = 6;
          _iterator.s();
        case 8:
          if ((_step = _iterator.n()).done) {
            _context2.next = 21;
            break;
          }
          currency = _step.value;
          if (!isProviderSupportedFiatCurrency(currency, provider, RateType.CURRENT)) {
            _context2.next = 14;
            break;
          }
          providerVsCurrencies.push(currency);
          _context2.next = 19;
          break;
        case 14:
          if (!isBridgedFiatCurrency(currency, provider, RateType.CURRENT)) {
            _context2.next = 18;
            break;
          }
          bridgedVsCurrencies.push(currency);
          _context2.next = 19;
          break;
        case 18:
          throw new Error("Currency ".concat(currency, " not supported for provider ").concat(provider, "."));
        case 19:
          _context2.next = 8;
          break;
        case 21:
          _context2.next = 26;
          break;
        case 23:
          _context2.prev = 23;
          _context2.t0 = _context2["catch"](6);
          _iterator.e(_context2.t0);
        case 26:
          _context2.prev = 26;
          _iterator.f();
          return _context2.finish(26);
        case 29:
          if (bridgedVsCurrencies.length) {
            bridgedExchangeRatesPromise = _getBridgeableFiatCurrencyExchangeRates(bridgedVsCurrencies);
            // Bridged exchange rates are to USD, therefore we need to get the USD exchange rate.
            if (!providerVsCurrencies.includes(FiatCurrency.USD)) {
              providerVsCurrencies.push(FiatCurrency.USD);
            }
          }
          _context2.t1 = provider;
          _context2.next = _context2.t1 === Provider.CryptoCompare ? 33 : _context2.t1 === Provider.CoinGecko ? 35 : 38;
          break;
        case 33:
          providerExchangeRatesPromise = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var maxBatchSize, batchPromises, batchStart, batchVsCurrencies, result, _iterator2, _step2, batch, _i4, _Object$entries4, _Object$entries4$_i, cryptoCurrencyTicker, coinPrices, cryptoCurrency, _i5, _Object$entries5, _Object$entries5$_i, vsCurrencyTicker, exchangeRate, vsCurrency;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  // The max allowed length of the /pricemulti api's tsyms parameter is 100 chars, which equates to 25
                  // comma separated ticker symbols. If requesting more providerVsCurrencies, we need multiple requests.
                  maxBatchSize = 25;
                  batchPromises = [];
                  for (batchStart = 0; batchStart < providerVsCurrencies.length; batchStart += maxBatchSize) {
                    batchVsCurrencies = providerVsCurrencies.slice(batchStart, Math.min(providerVsCurrencies.length, batchStart + maxBatchSize));
                    batchPromises.push(_fetch("".concat(API_URL_CRYPTOCOMPARE, "/pricemulti") + "?fsyms=".concat(cryptoCurrencies.join(','), "&tsyms=").concat(batchVsCurrencies.join(','))));
                  }
                  result = {};
                  _context.t0 = _createForOfIteratorHelper;
                  _context.next = 7;
                  return Promise.all(batchPromises);
                case 7:
                  _context.t1 = _context.sent;
                  _iterator2 = (0, _context.t0)(_context.t1);
                  try {
                    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                      batch = _step2.value;
                      // Tickers in CryptoCompare's result are uppercase. Map them back to our enums and merge everything.
                      for (_i4 = 0, _Object$entries4 = Object.entries(batch); _i4 < _Object$entries4.length; _i4++) {
                        _Object$entries4$_i = _slicedToArray(_Object$entries4[_i4], 2), cryptoCurrencyTicker = _Object$entries4$_i[0], coinPrices = _Object$entries4$_i[1];
                        cryptoCurrency = cryptoCurrencyTicker.toLowerCase();
                        for (_i5 = 0, _Object$entries5 = Object.entries(coinPrices); _i5 < _Object$entries5.length; _i5++) {
                          _Object$entries5$_i = _slicedToArray(_Object$entries5[_i5], 2), vsCurrencyTicker = _Object$entries5$_i[0], exchangeRate = _Object$entries5$_i[1];
                          vsCurrency = vsCurrencyTicker.toLowerCase();
                          result[cryptoCurrency] || (result[cryptoCurrency] = {});
                          result[cryptoCurrency][vsCurrency] = exchangeRate;
                        }
                      }
                    }
                  } catch (err) {
                    _iterator2.e(err);
                  } finally {
                    _iterator2.f();
                  }
                  return _context.abrupt("return", result);
                case 11:
                case "end":
                  return _context.stop();
              }
            }, _callee);
          }))();
          return _context2.abrupt("break", 39);
        case 35:
          // Note that providerVsCurrencies do not need to be converted to coin ids, even for crypto currencies.
          coinIds = cryptoCurrencies.map(function (currency) {
            return COIN_IDS_COINGECKO[currency];
          });
          providerExchangeRatesPromise = _fetch("".concat(API_URL_COINGECKO, "/simple/price") + "?ids=".concat(coinIds.join(','), "&vs_currencies=").concat(providerVsCurrencies.join(',')),
          // Run sequentially to avoid (re)trying many parallel requests waiting on CoinGecko's low rate limit.
          /* sequentially */
          true).then(function (prices) {
            return cryptoCurrencies.reduce(function (result, cryptoCurrency) {
              return _objectSpread2(_objectSpread2({}, result), {}, _defineProperty({}, cryptoCurrency, prices[COIN_IDS_COINGECKO[cryptoCurrency]]));
            }, {});
          });
          return _context2.abrupt("break", 39);
        case 38:
          throw new Error("Unsupported provider ".concat(provider));
        case 39:
          _context2.next = 41;
          return Promise.all([providerExchangeRatesPromise, bridgedExchangeRatesPromise]);
        case 41:
          _yield$Promise$all = _context2.sent;
          _yield$Promise$all2 = _slicedToArray(_yield$Promise$all, 2);
          exchangeRates = _yield$Promise$all2[0];
          bridgedExchangeRates = _yield$Promise$all2[1];
          // Add prices calculated from bridged exchange rates, if any.
          for (_i6 = 0, _Object$entries6 = Object.entries(bridgedExchangeRates || {}); _i6 < _Object$entries6.length; _i6++) {
            _Object$entries6$_i = _slicedToArray(_Object$entries6[_i6], 2), bridgedCurrency = _Object$entries6$_i[0], bridgedExchangeRate = _Object$entries6$_i[1];
            for (_i7 = 0, _Object$values = Object.values(exchangeRates); _i7 < _Object$values.length; _i7++) {
              coinPrices = _Object$values[_i7];
              coinUsdPrice = coinPrices[FiatCurrency.USD];
              coinPrices[bridgedCurrency] = bridgedExchangeRate && coinUsdPrice ? bridgedExchangeRate * coinUsdPrice : undefined;
            }
          }
          // Strictly speaking, USD would need to be filtered out if it was added, but we skip that for code simplicity.
          return _context2.abrupt("return", exchangeRates);
        case 47:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[6, 23, 26, 29]]);
  }));
  return _getExchangeRates.apply(this, arguments);
}
function getHistoricExchangeRatesByRange(_x3, _x4, _x5, _x6) {
  return _getHistoricExchangeRatesByRange.apply(this, arguments);
}
/**
 * Get historic exchange rates at specific timestamps in milliseconds.
 */
function _getHistoricExchangeRatesByRange() {
  _getHistoricExchangeRatesByRange = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(cryptoCurrency, vsCurrency, from,
  // in milliseconds
  to) {
    var provider,
      bridgedCurrency,
      bridgedHistoricRatesPromise,
      providerHistoricRatesPromise,
      coinId,
      _yield$Promise$all3,
      _yield$Promise$all4,
      providerHistoricRates,
      bridgedHistoricRates,
      _args4 = arguments;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          provider = _args4.length > 4 && _args4[4] !== undefined ? _args4[4] : Provider.CryptoCompare;
          if (isBridgedFiatCurrency(vsCurrency, provider, RateType.HISTORIC) && !isProviderSupportedFiatCurrency(vsCurrency, provider, RateType.HISTORIC)) {
            bridgedCurrency = vsCurrency;
            bridgedHistoricRatesPromise = _getHistoricBridgeableFiatCurrencyExchangeRatesByRange(bridgedCurrency, from, to);
            // Bridged exchange rates are to USD, therefore we need to get the USD exchange rate, too.
            vsCurrency = FiatCurrency.USD;
          }
          // from and to are expected in seconds.
          from = Math.floor(from / 1000);
          to = Math.ceil(to / 1000);
          _context4.t0 = provider;
          _context4.next = _context4.t0 === Provider.CryptoCompare ? 7 : _context4.t0 === Provider.CoinGecko ? 9 : 12;
          break;
        case 7:
          providerHistoricRatesPromise = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
            var result, batchToTs, _yield$_fetch, _yield$_fetch$Data, batchFromTs, batch, filteredAndTransformedBatch, _iterator3, _step3, _step3$value, time, open;
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  result = [];
                  batchToTs = to; // last timestamp to include in current batch; inclusive
                case 2:
                  if (!(batchToTs >= from)) {
                    _context3.next = 32;
                    break;
                  }
                  _context3.next = 5;
                  return _fetch("".concat(API_URL_CRYPTOCOMPARE, "/v2/histohour") + "?fsym=".concat(cryptoCurrency, "&tsym=").concat(vsCurrency, "&toTs=").concat(batchToTs, "&limit=2000"));
                case 5:
                  _yield$_fetch = _context3.sent;
                  _yield$_fetch$Data = _yield$_fetch.Data;
                  batchFromTs = _yield$_fetch$Data.TimeFrom;
                  batch = _yield$_fetch$Data.Data;
                  filteredAndTransformedBatch = [];
                  _iterator3 = _createForOfIteratorHelper(batch);
                  _context3.prev = 11;
                  _iterator3.s();
                case 13:
                  if ((_step3 = _iterator3.n()).done) {
                    _context3.next = 20;
                    break;
                  }
                  _step3$value = _step3.value, time = _step3$value.time, open = _step3$value.open;
                  if (!(time < from)) {
                    _context3.next = 17;
                    break;
                  }
                  return _context3.abrupt("continue", 18);
                case 17:
                  filteredAndTransformedBatch.push([time * 1000, open]);
                case 18:
                  _context3.next = 13;
                  break;
                case 20:
                  _context3.next = 25;
                  break;
                case 22:
                  _context3.prev = 22;
                  _context3.t0 = _context3["catch"](11);
                  _iterator3.e(_context3.t0);
                case 25:
                  _context3.prev = 25;
                  _iterator3.f();
                  return _context3.finish(25);
                case 28:
                  result = filteredAndTransformedBatch.concat(result);
                  batchToTs = batchFromTs - 1;
                  _context3.next = 2;
                  break;
                case 32:
                  return _context3.abrupt("return", result);
                case 33:
                case "end":
                  return _context3.stop();
              }
            }, _callee3, null, [[11, 22, 25, 28]]);
          }))();
          return _context4.abrupt("break", 13);
        case 9:
          coinId = COIN_IDS_COINGECKO[cryptoCurrency.toLowerCase()]; // Note that timestamps returned by CoinGecko are already in ms, even though from and to were in seconds.
          providerHistoricRatesPromise = _fetch("".concat(API_URL_COINGECKO, "/coins/").concat(coinId, "/market_chart/range") + "?vs_currency=".concat(vsCurrency, "&from=").concat(from, "&to=").concat(to),
          // Run sequentially to avoid (re)trying many parallel requests waiting on CoinGecko's low rate limit.
          /* sequentially */
          true).then(function (_ref3) {
            var prices = _ref3.prices;
            return prices;
          });
          return _context4.abrupt("break", 13);
        case 12:
          throw new Error("Unsupported provider ".concat(provider));
        case 13:
          _context4.next = 15;
          return Promise.all([providerHistoricRatesPromise, bridgedHistoricRatesPromise]);
        case 15:
          _yield$Promise$all3 = _context4.sent;
          _yield$Promise$all4 = _slicedToArray(_yield$Promise$all3, 2);
          providerHistoricRates = _yield$Promise$all4[0];
          bridgedHistoricRates = _yield$Promise$all4[1];
          if (!(bridgedCurrency && bridgedHistoricRates)) {
            _context4.next = 21;
            break;
          }
          return _context4.abrupt("return", providerHistoricRates.map(function (_ref4) {
            var _ref5 = _slicedToArray(_ref4, 2),
              timestamp = _ref5[0],
              coinUsdPrice = _ref5[1];
            var date = _getDateString(timestamp, HISTORY_BRIDGEABLE_CURRENCY_TIMEZONES[bridgedCurrency]);
            var bridgedHistoricRate = bridgedHistoricRates[date];
            return bridgedHistoricRate ? [timestamp, coinUsdPrice * bridgedHistoricRate] : null;
          }).filter(function (entry) {
            return entry !== null;
          }));
        case 21:
          return _context4.abrupt("return", providerHistoricRates);
        case 22:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return _getHistoricExchangeRatesByRange.apply(this, arguments);
}
function getHistoricExchangeRates(_x7, _x8, _x9) {
  return _getHistoricExchangeRates.apply(this, arguments);
}
function _getHistoricExchangeRates() {
  _getHistoricExchangeRates = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(cryptoCurrency, vsCurrency, timestamps) {
    var provider,
      options,
      result,
      prices,
      now,
      chunks,
      _timestampIndex,
      disableMinutelyData,
      maxChunkLength,
      _findCoinGeckoTimesta,
      chunk,
      searchEndIndex,
      _findCoinGeckoTimesta2,
      _chunk,
      _searchEndIndex,
      fetchPromises,
      timestampIndex,
      priceIndex,
      timestamp,
      priceEntry,
      predecessorEntry,
      currentEntry,
      timeDelta,
      priceDelta,
      interpolatedPrice,
      _args5 = arguments;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          provider = _args5.length > 3 && _args5[3] !== undefined ? _args5[3] : Provider.CryptoCompare;
          options = _args5.length > 4 && _args5[4] !== undefined ? _args5[4] : {};
          result = new Map();
          if (timestamps.length) {
            _context5.next = 5;
            break;
          }
          return _context5.abrupt("return", result);
        case 5:
          timestamps.sort(function (a, b) {
            return a - b;
          });
          _context5.t0 = provider;
          _context5.next = _context5.t0 === Provider.CryptoCompare ? 9 : _context5.t0 === Provider.CoinGecko ? 13 : 24;
          break;
        case 9:
          _context5.next = 11;
          return getHistoricExchangeRatesByRange(cryptoCurrency, vsCurrency,
          // Prices are exactly 1h apart, choose from&to such we get earlier&later data point for interpolation.
          timestamps[0] - ONE_HOUR, timestamps[timestamps.length - 1] + ONE_HOUR, provider);
        case 11:
          prices = _context5.sent;
          return _context5.abrupt("break", 25);
        case 13:
          // To get the best possible time resolution, we split the timestamps into a chunk within at most 1 day from
          // now and the rest into additional 90 day chunks, see notes on getHistoricExchangeRatesByRange.
          now = Date.now();
          chunks = [];
          _timestampIndex = timestamps.length - 1; // Create one day chunk
          disableMinutelyData = 'disableMinutelyData' in options ? !!options.disableMinutelyData : false;
          if (!disableMinutelyData && now - timestamps[timestamps.length - 1] < ONE_DAY - 15 * ONE_MINUTE) {
            // Has a timestamp within last day (minus safety margin in case our clock is slightly off).
            // As one day is calculated from now and not from the timestamp, we have to account for the difference
            // between now and the timestamp.
            maxChunkLength = ONE_DAY - 15 * ONE_MINUTE - (now - timestamps[timestamps.length - 1]);
            _findCoinGeckoTimesta = _findCoinGeckoTimestampChunk(timestamps, _timestampIndex, maxChunkLength,
            // Prices are 5-10 min apart, choose margin such we get earlier&later data point for interpolation.
            10 * ONE_MINUTE), chunk = _findCoinGeckoTimesta.chunk, searchEndIndex = _findCoinGeckoTimesta.searchEndIndex;
            chunks.push(chunk);
            _timestampIndex = searchEndIndex;
          }
          // Create additional 90 day chunks
          while (_timestampIndex >= 0) {
            _findCoinGeckoTimesta2 = _findCoinGeckoTimestampChunk(timestamps, _timestampIndex, 90 * ONE_DAY,
            // Prices are ~1h apart, chose margin such we get earlier and later data point for interpolation.
            1.5 * ONE_HOUR), _chunk = _findCoinGeckoTimesta2.chunk, _searchEndIndex = _findCoinGeckoTimesta2.searchEndIndex;
            chunks.push(_chunk);
            _timestampIndex = _searchEndIndex;
          }
          fetchPromises = chunks.map(function (_ref6) {
            var start = _ref6.start,
              end = _ref6.end;
            return getHistoricExchangeRatesByRange(cryptoCurrency, vsCurrency, start, end, provider);
          });
          _context5.next = 22;
          return Promise.all(fetchPromises);
        case 22:
          prices = _context5.sent.reduce(function (accumulated, singleResult) {
            return [].concat(_toConsumableArray(singleResult), _toConsumableArray(accumulated));
          }, []).sort(function (a, b) {
            return a[0] - b[0];
          });
          return _context5.abrupt("break", 25);
        case 24:
          throw new Error("Unsupported provider ".concat(provider));
        case 25:
          if (prices.length) {
            _context5.next = 27;
            break;
          }
          return _context5.abrupt("return", result);
        case 27:
          // Happens if provider doesn't have data for any of the requested timestamps,
          // for example for days before the provider started collecting price info or for days in the future.
          // For every requested timestamp interpolate the price from the timestamps we got from the API
          timestampIndex = 0;
          priceIndex = 0;
          while (timestampIndex < timestamps.length) {
            // Search priceIndex at which predecessor price timestamp < our timestamp <= current price timestamp.
            timestamp = timestamps[timestampIndex];
            while (priceIndex < prices.length && prices[priceIndex][0] < timestamp) {
              ++priceIndex;
            }
            if (priceIndex === 0 || priceIndex === prices.length) {
              // Can't interpolate. This should typically not happen as we try to include additional data points for
              // interpolation via an added time margin in our calls to getHistoricExchangeRatesByRange. However, this can
              // still occur in exceptional cases when the gap between two data points was larger than our margin or the
              // requested timestamp was before the provider even started recording price data or is in the future.
              priceEntry = prices[Math.min(priceIndex, prices.length - 1)];
              if (Math.abs(timestamp - priceEntry[0]) < 2 * ONE_DAY && timestamp <= Date.now()) {
                // Accept the single price entry's price if it's within a limit of 2 days and we're not making
                // assumptions about the future.
                result.set(timestamp, priceEntry[1]);
              }
            } else {
              // Interpolate between priceIndex-1 and priceIndex
              predecessorEntry = prices[priceIndex - 1];
              currentEntry = prices[priceIndex];
              timeDelta = currentEntry[0] - predecessorEntry[0];
              if (timeDelta < 2 * ONE_DAY) {
                // accept the interpolation if timeDelta is within 2 days (typically should be 1 hour).
                priceDelta = currentEntry[1] - predecessorEntry[1];
                interpolatedPrice = predecessorEntry[1] + priceDelta * ((timestamp - predecessorEntry[0]) / timeDelta);
                result.set(timestamp, interpolatedPrice);
              }
            }
            ++timestampIndex; // Continue with next timestamp and check same priceIndex
          }
          return _context5.abrupt("return", result);
        case 31:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
  }));
  return _getHistoricExchangeRates.apply(this, arguments);
}
function _findCoinGeckoTimestampChunk(timestamps, searchStartIndex, maxChunkLength, timeMargin) {
  maxChunkLength -= 2 * timeMargin;
  var end = timestamps[searchStartIndex];
  var start = end;
  var i = searchStartIndex - 1;
  while (i >= 0 && end - timestamps[i] < maxChunkLength) {
    start = timestamps[i];
    --i;
  }
  return {
    searchEndIndex: i,
    chunk: {
      start: start - timeMargin,
      end: end + timeMargin
    }
  };
}
var _fetchLock = Promise.resolve(); // note: shared across _fetch calls, i.e. not specific to an api or bridge
function _fetch(_x10, _x11) {
  return _fetch2.apply(this, arguments);
}
function _fetch2() {
  _fetch2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(input, initOrSequentially) {
    var sequentially,
      init,
      unlock,
      previousLock,
      result,
      _loop,
      _unlock,
      _args7 = arguments;
    return _regeneratorRuntime().wrap(function _callee6$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          sequentially = _args7.length > 2 && _args7[2] !== undefined ? _args7[2] : false;
          init = typeof initOrSequentially !== 'boolean' ? initOrSequentially : undefined;
          sequentially = typeof initOrSequentially === 'boolean' ? initOrSequentially : sequentially;
          if (!sequentially) {
            _context7.next = 8;
            break;
          }
          previousLock = _fetchLock;
          _fetchLock = new Promise(function (resolve) {
            unlock = resolve;
          });
          _context7.next = 8;
          return previousLock;
        case 8:
          _context7.prev = 8;
          result = null;
          _loop = /*#__PURE__*/_regeneratorRuntime().mark(function _loop() {
            var retry, waitTime, _result, _result2, _result3, response;
            return _regeneratorRuntime().wrap(function _loop$(_context6) {
              while (1) switch (_context6.prev = _context6.next) {
                case 0:
                  retry = true;
                  waitTime = 20000; // default wait time when user is offline
                  _context6.prev = 2;
                  _context6.next = 5;
                  return fetch(input, _objectSpread2(_objectSpread2({}, init), {}, {
                    headers: [].concat(_toConsumableArray(init instanceof Headers || Array.isArray(init) ? init : Object.entries(init || {})), _toConsumableArray(coinGeckoExtraHeaders))
                  }));
                case 5:
                  response = _context6.sent;
                  if (!(response.status === 429)) {
                    _context6.next = 9;
                    break;
                  }
                  // CoinGecko returns responses with status 429 (Too Many Requests) when the rate limit is hit.
                  // CoinGecko allows a dynamic amount of requests per minute, typically around 5 requests per minute,
                  // and tells us in the response headers when our next minute starts, but unfortunately due to cors
                  // we can not access this information. Therefore, we blindly retry after waiting some time. Note
                  // that CoinGecko resets the quota solely based on their system time, i.e. independent of when we
                  // resend our request. Therefore, we do not waste time/part of our quota by waiting a bit longer.
                  waitTime = 15000;
                  throw new Error('Rate limit hit. Retrying...');
                case 9:
                  if (response.ok) {
                    _context6.next = 12;
                    break;
                  }
                  // On other error codes, do not retry, e.g. on status 401 (Unauthorized) for api calls that require
                  // an API key like CoinGecko requests of historic data older than 365 days.
                  retry = false;
                  throw new Error("".concat(response.status, " - ").concat(response.statusText));
                case 12:
                  _context6.next = 14;
                  return response.json();
                case 14:
                  result = _context6.sent;
                  if (!(((_result = result) === null || _result === void 0 ? void 0 : _result.Response) === 'Error' && (_result2 = result) !== null && _result2 !== void 0 && (_result2 = _result2.Message) !== null && _result2 !== void 0 && _result2.includes('rate limit'))) {
                    _context6.next = 18;
                    break;
                  }
                  // CryptoCompare returns responses with status 200 but an error result when the rate limit is hit.
                  // CryptoCompare allows for 20 requests per second, and up to 300 requests per minute, see stats on
                  // /stats/rate/limit. I.e. we could burst 20 requests every 4 seconds to reach 300 requests per min.
                  // We use a slightly shorter waitTime than that, to reduce the chances of wasting any of the limit,
                  // for requests that we initiate in sequential chunks instead of in parallel bursts, like history
                  // requests. We could optimize this, as the response includes more detailed info about which rate
                  // limit was hit, but it's probably not really necessary.
                  waitTime = 3000;
                  throw new Error("Rate limit hit: ".concat(result.Message || result.Response, ". Retrying..."));
                case 18:
                  if (!(((_result3 = result) === null || _result3 === void 0 ? void 0 : _result3.Response) === 'Error')) {
                    _context6.next = 21;
                    break;
                  }
                  // On other CryptoCompare errors, do not retry, e.g. for api calls that require an API key.
                  retry = false;
                  throw new Error("CryptoCompare error: ".concat(result.Message || result.Response));
                case 21:
                  _context6.next = 29;
                  break;
                case 23:
                  _context6.prev = 23;
                  _context6.t0 = _context6["catch"](2);
                  if (retry) {
                    _context6.next = 27;
                    break;
                  }
                  throw _context6.t0;
                case 27:
                  _context6.next = 29;
                  return new Promise(function (resolve) {
                    setTimeout(resolve, waitTime);
                  });
                case 29:
                case "end":
                  return _context6.stop();
              }
            }, _loop, null, [[2, 23]]);
          });
        case 11:
          return _context7.delegateYield(_loop(), "t0", 12);
        case 12:
          if (!result) {
            _context7.next = 11;
            break;
          }
        case 13:
          return _context7.abrupt("return", result);
        case 14:
          _context7.prev = 14;
          (_unlock = unlock) === null || _unlock === void 0 || _unlock();
          return _context7.finish(14);
        case 17:
        case "end":
          return _context7.stop();
      }
    }, _callee6, null, [[8,, 14, 17]]);
  }));
  return _fetch2.apply(this, arguments);
}
function isProviderSupportedFiatCurrency(currency, provider, rateType) {
  var providerFiatCurrencies = _defineProperty(_defineProperty({}, Provider.CryptoCompare, _defineProperty(_defineProperty({}, RateType.CURRENT, CRYPTOCOMPARE_CURRENT_RATES_FIAT_CURRENCIES), RateType.HISTORIC, CRYPTOCOMPARE_HISTORIC_RATES_FIAT_CURRENCIES)[rateType]), Provider.CoinGecko, COINGECKO_FIAT_CURRENCIES)[provider];
  return providerFiatCurrencies.includes(currency);
}
function isBridgeableFiatCurrency(currency) {
  return BRIDGEABLE_FIAT_CURRENCIES.includes(currency);
}
function isBridgedFiatCurrency(currency, provider, rateType) {
  return isBridgeableFiatCurrency(currency) && !isProviderSupportedFiatCurrency(currency, provider, rateType);
}
function isHistorySupportedFiatCurrency(currency, provider) {
  return isProviderSupportedFiatCurrency(currency, provider, RateType.HISTORIC) || HISTORY_BRIDGEABLE_FIAT_CURRENCIES.includes(currency);
}
/**
 * Get today's exchange rates to USD. Rates can be undefined if the user's clock is in the future.
 */
function _getBridgeableFiatCurrencyExchangeRates(_x12) {
  return _getBridgeableFiatCurrencyExchangeRates2.apply(this, arguments);
}
/**
 * Get historic exchange rates to USD.
 */
function _getBridgeableFiatCurrencyExchangeRates2() {
  _getBridgeableFiatCurrencyExchangeRates2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(bridgeableFiatCurrencies) {
    var apiPromises, historyBridgeableFiatCurrencies, _iterator4, _step4, _loop2, cplBridgeableFiatCurrencies, apiResults;
    return _regeneratorRuntime().wrap(function _callee7$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          apiPromises = []; // Note that history-bridgeable currencies and cpl-bridgeable currencies don't overlap by design.
          historyBridgeableFiatCurrencies = HISTORY_BRIDGEABLE_FIAT_CURRENCIES.filter(function (c) {
            return bridgeableFiatCurrencies.includes(c);
          });
          if (!historyBridgeableFiatCurrencies.length) {
            _context9.next = 19;
            break;
          }
          _iterator4 = _createForOfIteratorHelper(historyBridgeableFiatCurrencies);
          _context9.prev = 4;
          _loop2 = /*#__PURE__*/_regeneratorRuntime().mark(function _loop2() {
            var currency;
            return _regeneratorRuntime().wrap(function _loop2$(_context8) {
              while (1) switch (_context8.prev = _context8.next) {
                case 0:
                  currency = _step4.value;
                  apiPromises.push(_getHistoricBridgeableFiatCurrencyExchangeRatesByRange(currency, Date.now()).then(function (exchangeRates) {
                    return _defineProperty({}, currency, Object.values(exchangeRates)[0]);
                  }));
                case 2:
                case "end":
                  return _context8.stop();
              }
            }, _loop2);
          });
          _iterator4.s();
        case 7:
          if ((_step4 = _iterator4.n()).done) {
            _context9.next = 11;
            break;
          }
          return _context9.delegateYield(_loop2(), "t0", 9);
        case 9:
          _context9.next = 7;
          break;
        case 11:
          _context9.next = 16;
          break;
        case 13:
          _context9.prev = 13;
          _context9.t1 = _context9["catch"](4);
          _iterator4.e(_context9.t1);
        case 16:
          _context9.prev = 16;
          _iterator4.f();
          return _context9.finish(16);
        case 19:
          cplBridgeableFiatCurrencies = CPL_BRIDGEABLE_FIAT_CURRENCIES.filter(function (c) {
            return bridgeableFiatCurrencies.includes(c);
          });
          if (cplBridgeableFiatCurrencies.length) {
            apiPromises.push(_fetch('https://firestore.googleapis.com/v1/projects/checkout-service/databases/(default)/documents/' + 'exchangerates/rates').then(function (exchangeRatesResponse) {
              var exchangeRates = _parseCplExchangeRateResponse(exchangeRatesResponse);
              // Reduce to only the requested cplBridgeableFiatCurrencies.
              return cplBridgeableFiatCurrencies.reduce(function (result, currency) {
                return _objectSpread2(_objectSpread2({}, result), {}, _defineProperty({}, currency, exchangeRates[currency]));
              }, {});
            }));
          }
          _context9.next = 23;
          return Promise.all(apiPromises);
        case 23:
          apiResults = _context9.sent;
          return _context9.abrupt("return", apiResults.reduce(function (exchangeRates, apiResult) {
            return _objectSpread2(_objectSpread2({}, exchangeRates), apiResult);
          }));
        case 25:
        case "end":
          return _context9.stop();
      }
    }, _callee7, null, [[4, 13, 16, 19]]);
  }));
  return _getBridgeableFiatCurrencyExchangeRates2.apply(this, arguments);
}
function _getHistoricBridgeableFiatCurrencyExchangeRatesByRange(_x13, _x14) {
  return _getHistoricBridgeableFiatCurrencyExchangeRatesByRange2.apply(this, arguments);
}
/**
 * Format a timestamp as a YYYY-MM-DD date string in a desired timezone.
 */
function _getHistoricBridgeableFiatCurrencyExchangeRatesByRange2() {
  _getHistoricBridgeableFiatCurrencyExchangeRatesByRange2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(bridgeableFiatCurrency, from) {
    var to,
      timezone,
      fromDate,
      toDate,
      _args10 = arguments;
    return _regeneratorRuntime().wrap(function _callee8$(_context10) {
      while (1) switch (_context10.prev = _context10.next) {
        case 0:
          to = _args10.length > 2 && _args10[2] !== undefined ? _args10[2] : from;
          if (HISTORY_BRIDGEABLE_FIAT_CURRENCIES.includes(bridgeableFiatCurrency)) {
            _context10.next = 3;
            break;
          }
          throw new Error("Unsupported bridgeable currency for historic rates: ".concat(bridgeableFiatCurrency));
        case 3:
          timezone = HISTORY_BRIDGEABLE_CURRENCY_TIMEZONES[bridgeableFiatCurrency];
          fromDate = _getDateString(from, timezone);
          toDate = to === from ? fromDate : _getDateString(to, timezone); // Note: entries for future dates are omitted and thus basically undefined which is reflected in the return type.
          return _context10.abrupt("return", _fetch("https://usd-crc-historic-rate.deno.dev/api/rates/".concat(fromDate, "/").concat(toDate)));
        case 7:
        case "end":
          return _context10.stop();
      }
    }, _callee8);
  }));
  return _getHistoricBridgeableFiatCurrencyExchangeRatesByRange2.apply(this, arguments);
}
function _getDateString(timestamp, timezone) {
  // Define as record such that ts warns us if an entry is missing
  var timezoneUtcOffsets = {
    'America/Costa_Rica': -6 // fixed offset all year, as Costa Rica has no daylight saving time.
  };
  var timezoneUtcOffset = timezoneUtcOffsets[timezone];
  if (timezoneUtcOffset === undefined) {
    // Arbitrary timezones could be supported via DateTimeFormat.formatToParts, but manually shifting the date is
    // computationally slightly cheaper.
    throw new Error("Unsupported timezone ".concat(timezone));
  }
  // Shift timestamp such that its UTC date equates the date in timezone.
  var shiftedDate = new Date(timestamp);
  shiftedDate.setHours(shiftedDate.getHours() + timezoneUtcOffset); // supports under-/overflow into prev/next day
  return shiftedDate.toISOString().split('T')[0];
}
function _parseCplExchangeRateResponse(response) {
  var parsed = _parseRawFirebaseResponse(response);
  if (!('rates' in parsed)) throw new Error('Invalid FirebaseResponse');
  var result = {};
  for (var _i = 0, _Object$entries = Object.entries(parsed.rates); _i < _Object$entries.length; _i++) {
    var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
      key = _Object$entries$_i[0],
      value = _Object$entries$_i[1];
    if (typeof value !== 'number') throw new Error('Invalid FirebaseResponse');
    result[key.toLowerCase()] = value;
  }
  return result;
}
function _parseRawFirebaseResponse(response) {
  var result = {};
  for (var _i2 = 0, _Object$entries2 = Object.entries(response.fields); _i2 < _Object$entries2.length; _i2++) {
    var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i2], 2),
      key = _Object$entries2$_i[0],
      value = _Object$entries2$_i[1];
    result[key] = _parseRawFirebaseValue(value);
  }
  return result;
}
function _parseRawFirebaseValue(raw) {
  if ('mapValue' in raw) {
    var result = {};
    for (var _i3 = 0, _Object$entries3 = Object.entries(raw.mapValue.fields); _i3 < _Object$entries3.length; _i3++) {
      var _Object$entries3$_i = _slicedToArray(_Object$entries3[_i3], 2),
        key = _Object$entries3$_i[0],
        value = _Object$entries3$_i[1];
      result[key] = _parseRawFirebasePrimitive(value);
    }
    return result;
  }
  if ('arrayValue' in raw) {
    return raw.arrayValue.values.map(function (value) {
      return _parseRawFirebasePrimitive(value);
    });
  }
  return _parseRawFirebasePrimitive(raw);
}
function _parseRawFirebasePrimitive(raw) {
  if ('doubleValue' in raw) {
    return raw.doubleValue;
  }
  if ('integerValue' in raw) {
    return parseInt(raw.integerValue, 10);
  }
  if ('stringValue' in raw) {
    return raw.stringValue;
  }
  if ('booleanValue' in raw) {
    return raw.booleanValue;
  }
  if ('nullValue' in raw) {
    return null;
  }
  throw new Error('Invalid FirebaseRawPrimitive');
}

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"6f718cbb-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Timer.vue?vue&type=template&id=a31a785a&scoped=true
var Timervue_type_template_id_a31a785a_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('Tooltip',_vm._b({staticClass:"timer",class:{
        'time-shown': _vm.detailsShown || _vm.alwaysShowTime,
        'little-time-left': _vm._progress >= .75,
        'inverse-theme': _vm.theme === _vm.constructor.Themes.INVERSE,
        'white-theme': _vm.theme === _vm.constructor.Themes.WHITE,
    },on:{"show":function($event){_vm.detailsShown = true},"hide":function($event){_vm.detailsShown = false}},scopedSlots:_vm._u([{key:"trigger",fn:function(){return [_c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 26 26"}},[_c('circle',{ref:"time-circle",staticClass:"time-circle",attrs:{"cx":"50%","cy":"50%","r":_vm.radius.currentValue,"stroke-dasharray":((_vm._timeCircleInfo.length) + " " + (_vm._timeCircleInfo.gap)),"stroke-dashoffset":_vm._timeCircleInfo.offset,"stroke-width":_vm._timeCircleInfo.strokeWidth}}),_c('circle',{staticClass:"filler-circle",attrs:{"cx":"50%","cy":"50%","r":_vm.radius.currentValue,"stroke-dasharray":((_vm._fillerCircleInfo.length) + " " + (_vm._fillerCircleInfo.gap)),"stroke-dashoffset":_vm._fillerCircleInfo.offset,"stroke-width":_vm._fillerCircleInfo.strokeWidth}}),_c('transition',{attrs:{"name":"transition-fade"}},[(!_vm.detailsShown && !_vm.alwaysShowTime)?_c('g',{staticClass:"info-exclamation-icon"},[_c('rect',{attrs:{"x":"12","y":"9","width":"2","height":"2","rx":"1"}}),_c('rect',{attrs:{"x":"12","y":"12.5","width":"2","height":"4.5","rx":"1"}})]):_c('text',{staticClass:"countdown",attrs:{"x":"50%","y":"50%"}},[_vm._v(" "+_vm._s(_vm._f("_toSimplifiedTime")(_vm._timeLeft,false, _vm.maxUnit))+" ")])])],1)]},proxy:true},{key:"default",fn:function(){return [_c('I18n',{attrs:{"path":"This offer expires in {timer}."},scopedSlots:_vm._u([{key:"timer",fn:function(){return [_vm._v(_vm._s(_vm._f("_toSimplifiedTime")(_vm._timeLeft,true, _vm.maxUnit)))]},proxy:true}])})]},proxy:true}])},'Tooltip',Object.assign({}, {preferredPosition: 'bottom right',
        theme: _vm.theme === _vm.constructor.Themes.INVERSE || _vm.theme  === _vm.constructor.Themes.WHITE ? 'inverse' : 'normal'},
        _vm.tooltipProps,
        {styles: Object.assign({}, {width: '18.25rem',
            pointerEvents: 'none'},
            (_vm.tooltipProps ? _vm.tooltipProps.styles : undefined))}),false))}
var Timervue_type_template_id_a31a785a_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Timer.vue?vue&type=template&id=a31a785a&scoped=true

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.split.js
var es_string_split = __webpack_require__("dfcf");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--14-1!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/i18n/I18n.vue?vue&type=script&lang=ts














/**
 * Component for slot interpolation, similar to vue-i18n's interpolation component,
 * see https://kazupon.github.io/vue-i18n/guide/interpolation.html#slots-syntax-usage
 */
var I18nvue_type_script_lang_ts_I18n = /*#__PURE__*/function (_Vue) {
  function I18n() {
    _classCallCheck(this, I18n);
    return _callSuper(this, I18n, arguments);
  }
  _inherits(I18n, _Vue);
  return _createClass(I18n, [{
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
/* harmony default export */ var I18nvue_type_script_lang_ts = (I18nvue_type_script_lang_ts_I18n);
// CONCATENATED MODULE: ./src/i18n/I18n.vue?vue&type=script&lang=ts
 /* harmony default export */ var i18n_I18nvue_type_script_lang_ts = (I18nvue_type_script_lang_ts); 
// CONCATENATED MODULE: ./src/i18n/I18n.vue
var I18n_render, I18n_staticRenderFns




/* normalize component */

var I18n_component = normalizeComponent(
  i18n_I18nvue_type_script_lang_ts,
  I18n_render,
  I18n_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var i18n_I18n = (I18n_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--14-1!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Timer.vue?vue&type=script&lang=ts










var Timer_1;






var TIME_STEPS = [{
  unit: 'minute',
  factor: 60
}, {
  unit: 'hour',
  factor: 60
}, {
  unit: 'day',
  factor: 24
}];
function _toSimplifiedTime(millis) {
  var includeUnit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var maxUnit = arguments.length > 2 ? arguments[2] : undefined;
  // find appropriate unit, starting with second
  var resultTime = millis / 1000;
  var resultUnit = 'second';
  var _iterator = _createForOfIteratorHelper(TIME_STEPS),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _step$value = _step.value,
        unit = _step$value.unit,
        factor = _step$value.factor;
      if (resultTime / factor < 1 || resultUnit === maxUnit) break;
      resultTime /= factor;
      resultUnit = unit;
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  resultTime = Math.floor(resultTime);
  if (!includeUnit) {
    return resultTime;
  } else {
    var i18nTime = {
      get second() {
        return i18n_I18nMixin.$t('Timer', 'second');
      },
      get seconds() {
        return i18n_I18nMixin.$t('Timer', 'seconds');
      },
      get minute() {
        return i18n_I18nMixin.$t('Timer', 'minute');
      },
      get minutes() {
        return i18n_I18nMixin.$t('Timer', 'minutes');
      },
      get hour() {
        return i18n_I18nMixin.$t('Timer', 'hour');
      },
      get hours() {
        return i18n_I18nMixin.$t('Timer', 'hours');
      },
      get day() {
        return i18n_I18nMixin.$t('Timer', 'day');
      },
      get days() {
        return i18n_I18nMixin.$t('Timer', 'days');
      }
    };
    resultUnit = i18nTime["".concat(resultUnit).concat(resultTime !== 1 ? 's' : '')];
    return "".concat(resultTime, " ").concat(resultUnit);
  }
}
var Timervue_type_script_lang_ts_Timer = Timer_1 = /*#__PURE__*/function (_Mixins) {
  function Timer() {
    var _this;
    _classCallCheck(this, Timer);
    _this = _callSuper(this, Timer, arguments);
    _this.timeOffset = 0;
    _this.sampledTime = 0;
    _this.detailsShown = false;
    // While the radius r of the circle and the values stroke-dasharray, stroke-dashoffset and stroke-width that depend
    // on the radius can be transitioned via css, the behavior on value update during an ongoing transition is not
    // consistent (e.g. time update while animating on user hover or quick hover and unhover). Therefore animate via JS.
    _this.radius = new Tweenable$1(_this.detailsShown || _this.alwaysShowTime ? Timer_1.BASE_RADIUS * Timer_1.RADIUS_GROWTH_FACTOR : Timer_1.BASE_RADIUS);
    _this.fullCircleLength = 2 * Math.PI * _this.radius.currentValue;
    _this.timeoutId = null;
    _this.updateTimeoutId = null;
    _this.requestAnimationFrameId = null;
    _this.size = Timer_1.BASE_SIZE;
    return _this;
  }
  _inherits(Timer, _Mixins);
  return _createClass(Timer, [{
    key: "synchronize",
    value: function synchronize(referenceTime) {
      this.timeOffset = referenceTime - Date.now();
    }
  }, {
    key: "mounted",
    value: function mounted() {
      var _this2 = this;
      requestAnimationFrame(function () {
        return _this2.size = _this2.$el.offsetWidth;
      }); // in rAF to avoid forced reflow
      this._onResize = this._onResize.bind(this);
      window.addEventListener('resize', this._onResize);
    }
  }, {
    key: "destroyed",
    value: function destroyed() {
      clearTimeout(this.timeoutId);
      clearTimeout(this.updateTimeoutId);
      cancelAnimationFrame(this.requestAnimationFrameId);
      window.removeEventListener('resize', this._onResize);
    }
  }, {
    key: "_totalTime",
    get: function get() {
      if (this.startTime === undefined || this.endTime === undefined) {
        return 0;
      } else {
        return Math.max(0, this.endTime - this.startTime);
      }
    }
  }, {
    key: "_timeLeft",
    get: function get() {
      if (this.startTime === undefined || this.endTime === undefined) {
        return 0;
      } else {
        return Math.max(0, Math.min(this._totalTime, this.endTime - this.sampledTime));
      }
    }
  }, {
    key: "_progress",
    get: function get() {
      if (this.startTime === undefined || this.endTime === undefined || this._totalTime === 0) {
        return 0;
      } else {
        return 1 - this._timeLeft / this._totalTime;
      }
    }
  }, {
    key: "_timeCircleInfo",
    get: function get() {
      // Have a max length to make it more recognizable that this is a timer by never rendering a full circle.
      // The rounded stroke ending rendered with radius strokeWidth/2 does not count towards the stroke length,
      // therefore to get the desired gap of 1.5 strokeWidths, we use 2.5 strokeWidths.
      var maxLength = this.fullCircleLength - 2.5 * this.strokeWidth;
      var length = Math.min(maxLength, (1 - this._progress) * this.fullCircleLength);
      var lengthWithLineCaps = length + this.strokeWidth; // add line caps with strokeWidth/2 radius
      var gap = this.fullCircleLength - length;
      // The path grows clockwise starting on the right side. Offset by 90 degrees and gap to let path start with gap
      // and end on top.
      var offset = this.fullCircleLength / 4 - gap;
      return {
        length: length,
        lengthWithLineCaps: lengthWithLineCaps,
        gap: gap,
        offset: offset,
        strokeWidth: this.strokeWidth
      };
    }
  }, {
    key: "_fillerCircleInfo",
    get: function get() {
      // Filler circle should be rendered in the gap left by the time circle with a margin of strokeWidth. If there
      // is not enough space, compensate by reducing the filler circle stroke width.
      var availableSpace = this.fullCircleLength - this._timeCircleInfo.lengthWithLineCaps - 2 * this.strokeWidth;
      var lengthWithLineCaps = Math.max(0, availableSpace);
      var strokeWidth = Math.min(this.strokeWidth, lengthWithLineCaps);
      var length = Math.max(0, lengthWithLineCaps - strokeWidth); // subtract rounded line caps
      var gap = this.fullCircleLength - length;
      var offset = this.fullCircleLength / 4 // rotate by 90 degrees
      - this.strokeWidth / 2 // skip rounded line cap of time circle
      - this.strokeWidth // margin
      - strokeWidth / 2; // account for our own line cap
      return {
        length: length,
        lengthWithLineCaps: lengthWithLineCaps,
        gap: gap,
        offset: offset,
        strokeWidth: strokeWidth
      };
    }
  }, {
    key: "_calculateUpdateInterval",
    value: function _calculateUpdateInterval() {
      // Not a getter / computed prop to avoid unnecessary updates when not needed.
      var scaleFactor = this.size / Timer_1.BASE_SIZE;
      var circleLengthPixels = this.fullCircleLength * scaleFactor;
      var steps = circleLengthPixels * 3; // update every .33 pixel change for smooth transitions
      var minInterval = 1000 / 60; // up to 60 fps
      // Constrain interval such that we don't skip time steps in the countdown for the respective time unit.
      var timeLeft = this._timeLeft;
      var totalTime = this._totalTime;
      var updatesPerTimeStep = 2; // multiple updates per time step to avoid skipping a step by a delayed interval
      var timeStep = 1000; // starting with seconds
      var maxInterval = timeStep / updatesPerTimeStep;
      for (var _i = 0, _TIME_STEPS = TIME_STEPS; _i < _TIME_STEPS.length; _i++) {
        var factor = _TIME_STEPS[_i].factor;
        var nextTimeStep = timeStep * factor;
        var nextMaxInterval = nextTimeStep / updatesPerTimeStep;
        var nextInterval = Math.min(nextMaxInterval, Math.max(minInterval, totalTime / steps));
        if ((timeLeft - nextInterval) / nextTimeStep < 1) {
          // If the time left after nextInterval can't be expressed in nextTimeStep as a value >=1, stop. We check
          // for the time after the next interval to avoid jumping for example from 70s (displayed as 1 minute)
          // directly to 50s if the interval is 20s. Note that the behavior here resembles the one in
          // _toSimplifiedTime.
          if (timeLeft / nextTimeStep > 1) {
            // If the value before the interval is still >1 in the next time unit still allow a larger jump than
            // at the smaller time unit but set the maxInterval such that we jump no further than where the
            // switch to the smaller unit happens, for example jump from 70s to 60s if the interval is 20s.
            maxInterval = timeLeft - nextTimeStep;
          }
          break;
        }
        timeStep = nextTimeStep;
        maxInterval = nextMaxInterval;
      }
      return Math.min(maxInterval, Math.max(minInterval, this._totalTime / steps));
    }
  }, {
    key: "_setRadius",
    value: function _setRadius() {
      this.radius.tweenTo(this.detailsShown || this.alwaysShowTime ? Timer_1.RADIUS_GROWTH_FACTOR * Timer_1.BASE_RADIUS : Timer_1.BASE_RADIUS, 300);
      this._rerender();
    }
  }, {
    key: "_setTimer",
    value: function _setTimer() {
      var _this3 = this;
      this.sampledTime = Date.now() + this.timeOffset;
      clearTimeout(this.timeoutId);
      if (this.startTime && this.endTime) {
        this.timeoutId = window.setTimeout(function () {
          return _this3.$emit(Timer_1.Events.END, _this3.endTime);
        }, this.endTime - this.sampledTime);
        this._rerender();
      }
    }
  }, {
    key: "_rerender",
    value: function _rerender() {
      var _this4 = this;
      this.sampledTime = Date.now() + this.timeOffset;
      this.fullCircleLength = 2 * Math.PI * this.radius.currentValue;
      if (this._timeLeft === 0 && this.radius.finished) return;
      clearTimeout(this.updateTimeoutId);
      cancelAnimationFrame(this.requestAnimationFrameId);
      if (!this.radius.finished) {
        // animate radius with high frame rate
        this.requestAnimationFrameId = requestAnimationFrame(function () {
          return _this4._rerender();
        });
      } else {
        // update with low frame rate
        this.updateTimeoutId = window.setTimeout(function () {
          return _this4._rerender();
        }, this._calculateUpdateInterval());
      }
    }
  }, {
    key: "_onResize",
    value: function _onResize() {
      this.size = this.$el.offsetWidth;
    }
  }]);
}(Object(external_vue_property_decorator_["Mixins"])(i18n_I18nMixin));
Timervue_type_script_lang_ts_Timer.REM_FACTOR = 8; // size of 1rem
Timervue_type_script_lang_ts_Timer.BASE_SIZE = 3.25 * Timer_1.REM_FACTOR;
Timervue_type_script_lang_ts_Timer.BASE_RADIUS = Timer_1.REM_FACTOR;
Timervue_type_script_lang_ts_Timer.RADIUS_GROWTH_FACTOR = 1.5;
__decorate([Object(external_vue_property_decorator_["Prop"])(Number)], Timervue_type_script_lang_ts_Timer.prototype, "startTime", void 0);
__decorate([Object(external_vue_property_decorator_["Prop"])(Number)], Timervue_type_script_lang_ts_Timer.prototype, "endTime", void 0);
__decorate([Object(external_vue_property_decorator_["Prop"])({
  type: Boolean,
  default: true
})], Timervue_type_script_lang_ts_Timer.prototype, "alwaysShowTime", void 0);
__decorate([Object(external_vue_property_decorator_["Prop"])({
  type: String,
  default: 'normal',
  validator: function validator(value) {
    return Object.values(Timer_1.Themes).includes(value);
  }
})], Timervue_type_script_lang_ts_Timer.prototype, "theme", void 0);
__decorate([Object(external_vue_property_decorator_["Prop"])({
  type: Number,
  default: 2
})], Timervue_type_script_lang_ts_Timer.prototype, "strokeWidth", void 0);
__decorate([Object(external_vue_property_decorator_["Prop"])(Object)], Timervue_type_script_lang_ts_Timer.prototype, "tooltipProps", void 0);
__decorate([Object(external_vue_property_decorator_["Prop"])({
  type: String,
  required: false,
  validator: function validator(value) {
    return [undefined, 'second', 'minute', 'hour', 'day'].includes(value);
  }
})], Timervue_type_script_lang_ts_Timer.prototype, "maxUnit", void 0);
__decorate([Object(external_vue_property_decorator_["Watch"])('detailsShown', {
  immediate: true
}), Object(external_vue_property_decorator_["Watch"])('alwaysShowTime')], Timervue_type_script_lang_ts_Timer.prototype, "_setRadius", null);
__decorate([Object(external_vue_property_decorator_["Watch"])('startTime', {
  immediate: true
}), Object(external_vue_property_decorator_["Watch"])('endTime'), Object(external_vue_property_decorator_["Watch"])('timeOffset')], Timervue_type_script_lang_ts_Timer.prototype, "_setTimer", null);
Timervue_type_script_lang_ts_Timer = Timer_1 = __decorate([Object(external_vue_property_decorator_["Component"])({
  name: 'Timer',
  filters: {
    _toSimplifiedTime: _toSimplifiedTime
  },
  components: {
    Tooltip: components_Tooltip,
    I18n: i18n_I18n
  }
})], Timervue_type_script_lang_ts_Timer);
(function (Timer) {
  var Events;
  (function (Events) {
    Events["END"] = "end";
  })(Events = Timer.Events || (Timer.Events = {}));
  var Themes;
  (function (Themes) {
    Themes["NORMAL"] = "normal";
    Themes["INVERSE"] = "inverse";
    Themes["WHITE"] = "white";
  })(Themes = Timer.Themes || (Timer.Themes = {}));
})(Timervue_type_script_lang_ts_Timer || (Timervue_type_script_lang_ts_Timer = {}));
/* harmony default export */ var Timervue_type_script_lang_ts = (Timervue_type_script_lang_ts_Timer);
// CONCATENATED MODULE: ./src/components/Timer.vue?vue&type=script&lang=ts
 /* harmony default export */ var components_Timervue_type_script_lang_ts = (Timervue_type_script_lang_ts); 
// EXTERNAL MODULE: ./src/components/Timer.vue?vue&type=style&index=0&id=a31a785a&prod&scoped=true&lang=css
var Timervue_type_style_index_0_id_a31a785a_prod_scoped_true_lang_css = __webpack_require__("154a");

// CONCATENATED MODULE: ./src/components/Timer.vue






/* normalize component */

var Timer_component = normalizeComponent(
  components_Timervue_type_script_lang_ts,
  Timervue_type_template_id_a31a785a_scoped_true_render,
  Timervue_type_template_id_a31a785a_scoped_true_staticRenderFns,
  false,
  null,
  "a31a785a",
  null
  
)

/* harmony default export */ var components_Timer = (Timer_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--14-1!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/PaymentInfoLine.vue?vue&type=script&lang=ts













var PaymentInfoLine_1;











// As Record, such that ts will warn us if the url for a provider is missing.
var FIAT_API_PROVIDER_URLS = _defineProperty(_defineProperty({}, Provider.CoinGecko, 'coingecko.com'), Provider.CryptoCompare, 'cryptocompare.com');
function cryptoAmountInfoValidator(value) {
  return 'amount' in value && 'currency' in value && 'decimals' in value && amountValidator(value.amount) && typeof value.currency === 'string' && typeof value.decimals === 'number' && Number.isInteger(value.decimals);
}
function fiatAmountInfoValidator(value) {
  return 'amount' in value && 'currency' in value && typeof value.amount === 'number' && typeof value.currency === 'string';
}
var PaymentInfoLinevue_type_script_lang_ts_PaymentInfoLine = PaymentInfoLine_1 = /*#__PURE__*/function (_Mixins) {
  function PaymentInfoLine() {
    var _this;
    _classCallCheck(this, PaymentInfoLine);
    _this = _callSuper(this, PaymentInfoLine, arguments);
    _this.referenceRate = null;
    _this.referenceRateUpdateTimeout = -1;
    _this.lastTooltipToggle = -1;
    return _this;
  }
  _inherits(PaymentInfoLine, _Mixins);
  return _createClass(PaymentInfoLine, [{
    key: "created",
    value: function created() {
      this.updateReferenceRate();
    }
  }, {
    key: "destroyed",
    value: function destroyed() {
      window.clearTimeout(this.referenceRateUpdateTimeout);
    }
  }, {
    key: "setTime",
    value: function () {
      var _setTime = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(time) {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.$nextTick();
            case 2:
              if (this.$refs.timer) {
                _context.next = 4;
                break;
              }
              return _context.abrupt("return");
            case 4:
              this.$refs.timer.synchronize(time);
            case 5:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function setTime(_x) {
        return _setTime.apply(this, arguments);
      }
      return setTime;
    }()
  }, {
    key: "originDomain",
    get: function get() {
      return this.origin.split('://')[1];
    }
  }, {
    key: "effectiveRate",
    get: function get() {
      if (!this.fiatAmount) return null;
      // Fiat/crypto rate. Higher fiat/crypto rate means user is paying less crypto for the requested fiat amount
      // and is therefore better for the user. Note: precision loss should be acceptable here.
      return this.fiatAmount.amount / (Number(this.cryptoAmount.amount) / Math.pow(10, this.cryptoAmount.decimals));
    }
  }, {
    key: "formattedVendorMarkup",
    get: function get() {
      if (typeof this.vendorMarkup !== 'number') return null;
      // Convert to percent and round to two decimals. Always ceil to avoid displaying a lower fee than charged or
      // larger discount than applied. Subtract a small epsilon to avoid that numbers get rounded up as a result of
      // floating point imprecision after multiplication. Otherwise formatting for example .07 would result in 7.01%.
      return "".concat(this.vendorMarkup >= 0 ? '+' : '').concat(Math.ceil(this.vendorMarkup * 100 * 100 - 1e-10) / 100, "%");
    }
  }, {
    key: "isFormattedNetworkFeeZero",
    get: function get() {
      if (this.networkFee === null || this.networkFee === undefined) return true;
      // Note: While we use the Amount component which does formatting itself, we manually format here to check
      // whether the formatted value is 0. Precision loss should be acceptable here.
      var networkFeeBaseCurrency = Number(this.networkFee) / Math.pow(10, this.cryptoAmount.decimals);
      // Round to maxDecimals used above in the template
      var maxDecimals = Math.min(6, this.cryptoAmount.decimals);
      var roundingFactor = Math.pow(10, maxDecimals);
      return Math.round(networkFeeBaseCurrency * roundingFactor) / roundingFactor === 0;
    }
  }, {
    key: "rateDeviation",
    get: function get() {
      // Compare rates. Convert them from fiat/crypto to crypto/fiat as the user will be paying crypto in the end and
      // the flipped rates can therefore be compared more intuitively. Negative rate deviation is better for the user.
      if (this.effectiveRate === null || this.referenceRate === null) return null;
      var flippedEffectiveRate = 1 / this.effectiveRate;
      var flippedReferenceRate = 1 / this.referenceRate;
      return (flippedEffectiveRate - flippedReferenceRate) / flippedReferenceRate;
    }
  }, {
    key: "isBadRate",
    get: function get() {
      if (this.rateDeviation === null) return false;
      return this.rateDeviation >= PaymentInfoLine_1.RATE_DEVIATION_THRESHOLD || this.vendorMarkup && this.vendorMarkup < 0 // verify promised discount
      && this.rateDeviation >= this.vendorMarkup + PaymentInfoLine_1.RATE_DEVIATION_THRESHOLD;
    }
  }, {
    key: "formattedRateDeviation",
    get: function get() {
      if (this.rateDeviation === null) return null;
      // Converted to absolute percent, rounded to one decimal
      return "".concat(Math.round(Math.abs(this.rateDeviation) * 100 * 10) / 10, "%");
    }
  }, {
    key: "rateInfo",
    value: function rateInfo() {
      // Note: this method is not a getter / computed property to update on language changes
      if (this.rateDeviation === null || Math.abs(this.rateDeviation) < PaymentInfoLine_1.RATE_DEVIATION_THRESHOLD && !this.isBadRate) {
        return null;
      }
      var translationVariables = {
        formattedRateDeviation: this.formattedRateDeviation,
        provider: FIAT_API_PROVIDER_URLS[this.fiatApiProvider]
      };
      if (this.rateDeviation < 0 && this.isBadRate) {
        // False discount
        return this.$t('Your actual discount is approx. {formattedRateDeviation} compared ' + 'to the current market rate ({provider}).', translationVariables);
      }
      if (this.rateDeviation > 0) {
        return this.$t('You are paying approx. {formattedRateDeviation} more ' + 'than at the current market rate ({provider}).', translationVariables);
      } else {
        return this.$t('You are paying approx. {formattedRateDeviation} less ' + 'than at the current market rate ({provider}).', translationVariables);
      }
    }
  }, {
    key: "updateReferenceRate",
    value: function () {
      var _updateReferenceRate = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var _this$fiatAmount,
          _this2 = this;
        var cryptoCurrency, fiatCurrency, _yield$getExchangeRat, referenceRate;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              window.clearTimeout(this.referenceRateUpdateTimeout);
              cryptoCurrency = this.cryptoAmount.currency.toLowerCase();
              fiatCurrency = (_this$fiatAmount = this.fiatAmount) === null || _this$fiatAmount === void 0 ? void 0 : _this$fiatAmount.currency.toLowerCase();
              if (!(!this.fiatAmount || !Object.values(FiatCurrency).includes(fiatCurrency) || !Object.values(CryptoCurrency).includes(cryptoCurrency))) {
                _context2.next = 6;
                break;
              }
              this.referenceRate = null;
              return _context2.abrupt("return");
            case 6:
              _context2.next = 8;
              return getExchangeRates([cryptoCurrency], [fiatCurrency], this.fiatApiProvider);
            case 8:
              _yield$getExchangeRat = _context2.sent;
              referenceRate = _yield$getExchangeRat[cryptoCurrency][fiatCurrency];
              this.referenceRate = referenceRate || null;
              this.referenceRateUpdateTimeout = window.setTimeout(function () {
                return _this2.updateReferenceRate();
              }, PaymentInfoLine_1.REFERENCE_RATE_UPDATE_INTERVAL);
            case 12:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function updateReferenceRate() {
        return _updateReferenceRate.apply(this, arguments);
      }
      return updateReferenceRate;
    }()
  }, {
    key: "onPriceTooltipToggle",
    value: function onPriceTooltipToggle(isShow) {
      this.lastTooltipToggle = Date.now(); // record last toggle to avoid second toggle on click just after mouseover
      if (!isShow) return;
      this.updateReferenceRate();
    }
  }]);
}(Object(external_vue_property_decorator_["Mixins"])(i18n_I18nMixin));
PaymentInfoLinevue_type_script_lang_ts_PaymentInfoLine.REFERENCE_RATE_UPDATE_INTERVAL = 60000; // every minute
PaymentInfoLinevue_type_script_lang_ts_PaymentInfoLine.RATE_DEVIATION_THRESHOLD = .1;
__decorate([Object(external_vue_property_decorator_["Prop"])({
  type: Object,
  required: true,
  validator: cryptoAmountInfoValidator
})], PaymentInfoLinevue_type_script_lang_ts_PaymentInfoLine.prototype, "cryptoAmount", void 0);
__decorate([Object(external_vue_property_decorator_["Prop"])({
  type: Object,
  validator: fiatAmountInfoValidator
})], PaymentInfoLinevue_type_script_lang_ts_PaymentInfoLine.prototype, "fiatAmount", void 0);
__decorate([Object(external_vue_property_decorator_["Prop"])({
  type: String,
  validator: function validator(value) {
    return Object.values(Provider).includes(value);
  },
  default: Provider.CoinGecko
})], PaymentInfoLinevue_type_script_lang_ts_PaymentInfoLine.prototype, "fiatApiProvider", void 0);
__decorate([Object(external_vue_property_decorator_["Prop"])({
  type: Number,
  validator: function validator(value) {
    return value > -1;
  }
})], PaymentInfoLinevue_type_script_lang_ts_PaymentInfoLine.prototype, "vendorMarkup", void 0);
__decorate([Object(external_vue_property_decorator_["Prop"])({
  validator: amountValidator
})], PaymentInfoLinevue_type_script_lang_ts_PaymentInfoLine.prototype, "networkFee", void 0);
__decorate([Object(external_vue_property_decorator_["Prop"])({
  type: String,
  required: true
})], PaymentInfoLinevue_type_script_lang_ts_PaymentInfoLine.prototype, "origin", void 0);
__decorate([Object(external_vue_property_decorator_["Prop"])(String)], PaymentInfoLinevue_type_script_lang_ts_PaymentInfoLine.prototype, "address", void 0);
__decorate([Object(external_vue_property_decorator_["Prop"])(String)], PaymentInfoLinevue_type_script_lang_ts_PaymentInfoLine.prototype, "shopLogoUrl", void 0);
__decorate([Object(external_vue_property_decorator_["Prop"])(Number)], PaymentInfoLinevue_type_script_lang_ts_PaymentInfoLine.prototype, "startTime", void 0);
__decorate([Object(external_vue_property_decorator_["Prop"])(Number)], PaymentInfoLinevue_type_script_lang_ts_PaymentInfoLine.prototype, "endTime", void 0);
__decorate([Object(external_vue_property_decorator_["Prop"])({
  type: String,
  validator: function validator(value) {
    return Object.values(PaymentInfoLine_1.Themes).includes(value);
  },
  default: 'normal'
})], PaymentInfoLinevue_type_script_lang_ts_PaymentInfoLine.prototype, "theme", void 0);
__decorate([Object(external_vue_property_decorator_["Watch"])('cryptoAmount.currency'), Object(external_vue_property_decorator_["Watch"])('fiatAmount.currency')], PaymentInfoLinevue_type_script_lang_ts_PaymentInfoLine.prototype, "updateReferenceRate", null);
PaymentInfoLinevue_type_script_lang_ts_PaymentInfoLine = PaymentInfoLine_1 = __decorate([Object(external_vue_property_decorator_["Component"])({
  name: 'PaymentInfoLine',
  components: {
    Account: components_Account,
    Timer: components_Timer,
    Amount: components_Amount,
    FiatAmount: components_FiatAmount,
    Tooltip: components_Tooltip,
    AlertTriangleIcon: AlertTriangleIcon,
    ArrowRightSmallIcon: ArrowRightSmallIcon,
    I18n: i18n_I18n
  }
})], PaymentInfoLinevue_type_script_lang_ts_PaymentInfoLine);
(function (PaymentInfoLine) {
  var Themes;
  (function (Themes) {
    Themes["NORMAL"] = "normal";
    Themes["INVERSE"] = "inverse";
  })(Themes = PaymentInfoLine.Themes || (PaymentInfoLine.Themes = {}));
})(PaymentInfoLinevue_type_script_lang_ts_PaymentInfoLine || (PaymentInfoLinevue_type_script_lang_ts_PaymentInfoLine = {}));
/* harmony default export */ var PaymentInfoLinevue_type_script_lang_ts = (PaymentInfoLinevue_type_script_lang_ts_PaymentInfoLine);
// CONCATENATED MODULE: ./src/components/PaymentInfoLine.vue?vue&type=script&lang=ts
 /* harmony default export */ var components_PaymentInfoLinevue_type_script_lang_ts = (PaymentInfoLinevue_type_script_lang_ts); 
// EXTERNAL MODULE: ./src/components/PaymentInfoLine.vue?vue&type=style&index=0&id=04517e76&prod&scoped=true&lang=css
var PaymentInfoLinevue_type_style_index_0_id_04517e76_prod_scoped_true_lang_css = __webpack_require__("0e01");

// CONCATENATED MODULE: ./src/components/PaymentInfoLine.vue






/* normalize component */

var PaymentInfoLine_component = normalizeComponent(
  components_PaymentInfoLinevue_type_script_lang_ts,
  PaymentInfoLinevue_type_template_id_04517e76_scoped_true_render,
  PaymentInfoLinevue_type_template_id_04517e76_scoped_true_staticRenderFns,
  false,
  null,
  "04517e76",
  null
  
)

/* harmony default export */ var components_PaymentInfoLine = (PaymentInfoLine_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"6f718cbb-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/QrCode.vue?vue&type=template&id=778bc790
var QrCodevue_type_template_id_778bc790_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (!!_vm.data)?_c('canvas',{staticClass:"qr-code"}):_vm._e()}
var QrCodevue_type_template_id_778bc790_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/QrCode.vue?vue&type=template&id=778bc790

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

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--14-1!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/QrCode.vue?vue&type=script&lang=ts















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
var QrCodevue_type_script_lang_ts_QrCode = /*#__PURE__*/function (_Vue) {
  function QrCode() {
    _classCallCheck(this, QrCode);
    return _callSuper(this, QrCode, arguments);
  }
  _inherits(QrCode, _Vue);
  return _createClass(QrCode, [{
    key: "toDataUrl",
    value: function () {
      var _toDataUrl = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var type,
          _args = arguments;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
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
      var _updateQrCode2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
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
        }, _callee2, this);
      }));
      function _updateQrCode() {
        return _updateQrCode2.apply(this, arguments);
      }
      return _updateQrCode;
    }()
  }]);
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
/* harmony default export */ var QrCodevue_type_script_lang_ts = (QrCodevue_type_script_lang_ts_QrCode);
// CONCATENATED MODULE: ./src/components/QrCode.vue?vue&type=script&lang=ts
 /* harmony default export */ var components_QrCodevue_type_script_lang_ts = (QrCodevue_type_script_lang_ts); 
// CONCATENATED MODULE: ./src/components/QrCode.vue





/* normalize component */

var QrCode_component = normalizeComponent(
  components_QrCodevue_type_script_lang_ts,
  QrCodevue_type_template_id_778bc790_render,
  QrCodevue_type_template_id_778bc790_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var components_QrCode = (QrCode_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"6f718cbb-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/SelectBar.vue?vue&type=template&id=632b1400&scoped=true
var SelectBarvue_type_template_id_632b1400_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"select-bar"},_vm._l((_vm.options),function(option){return _c('div',{key:option.value},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.selectedOption),expression:"selectedOption"}],attrs:{"type":"radio","name":_vm.name,"id":option.value},domProps:{"value":option,"checked":_vm._q(_vm.selectedOption,option)},on:{"change":function($event){_vm.selectedOption=option}}}),_c('label',{staticClass:"nq-label",class:_vm.getColor(option),attrs:{"for":option.value}},[_vm._v(_vm._s(option.text))])])}),0)}
var SelectBarvue_type_template_id_632b1400_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/SelectBar.vue?vue&type=template&id=632b1400&scoped=true

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.find.js
var es_array_find = __webpack_require__("aa77");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--14-1!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/SelectBar.vue?vue&type=script&lang=ts










var SelectBarvue_type_script_lang_ts_SelectBar = /*#__PURE__*/function (_Vue) {
  function SelectBar() {
    var _this;
    _classCallCheck(this, SelectBar);
    _this = _callSuper(this, SelectBar, arguments);
    _this.selectedOption = null;
    return _this;
  }
  _inherits(SelectBar, _Vue);
  return _createClass(SelectBar, [{
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
    key: "value",
    get: function get() {
      return this.selectedOption.value;
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
  }]);
}(external_vue_property_decorator_["Vue"]);
__decorate([Object(external_vue_property_decorator_["Prop"])(String)], SelectBarvue_type_script_lang_ts_SelectBar.prototype, "name", void 0);
__decorate([Object(external_vue_property_decorator_["Prop"])(Array)], SelectBarvue_type_script_lang_ts_SelectBar.prototype, "options", void 0);
__decorate([Object(external_vue_property_decorator_["Prop"])(Number)], SelectBarvue_type_script_lang_ts_SelectBar.prototype, "selectedValue", void 0);
__decorate([Object(external_vue_property_decorator_["Watch"])('selectedOption')], SelectBarvue_type_script_lang_ts_SelectBar.prototype, "onChanged", null);
SelectBarvue_type_script_lang_ts_SelectBar = __decorate([external_vue_property_decorator_["Component"]], SelectBarvue_type_script_lang_ts_SelectBar);
/* harmony default export */ var SelectBarvue_type_script_lang_ts = (SelectBarvue_type_script_lang_ts_SelectBar);
// CONCATENATED MODULE: ./src/components/SelectBar.vue?vue&type=script&lang=ts
 /* harmony default export */ var components_SelectBarvue_type_script_lang_ts = (SelectBarvue_type_script_lang_ts); 
// EXTERNAL MODULE: ./src/components/SelectBar.vue?vue&type=style&index=0&id=632b1400&prod&scoped=true&lang=css
var SelectBarvue_type_style_index_0_id_632b1400_prod_scoped_true_lang_css = __webpack_require__("c126");

// CONCATENATED MODULE: ./src/components/SelectBar.vue






/* normalize component */

var SelectBar_component = normalizeComponent(
  components_SelectBarvue_type_script_lang_ts,
  SelectBarvue_type_template_id_632b1400_scoped_true_render,
  SelectBarvue_type_template_id_632b1400_scoped_true_staticRenderFns,
  false,
  null,
  "632b1400",
  null
  
)

/* harmony default export */ var components_SelectBar = (SelectBar_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"6f718cbb-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/SmallPage.vue?vue&type=template&id=1d450cf2&scoped=true
var SmallPagevue_type_template_id_1d450cf2_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"small-page nq-card"},[_vm._t("default")],2)}
var SmallPagevue_type_template_id_1d450cf2_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/SmallPage.vue?vue&type=template&id=1d450cf2&scoped=true

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--14-1!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/SmallPage.vue?vue&type=script&lang=ts






var SmallPagevue_type_script_lang_ts_SmallPage = /*#__PURE__*/function (_Vue) {
  function SmallPage() {
    _classCallCheck(this, SmallPage);
    return _callSuper(this, SmallPage, arguments);
  }
  _inherits(SmallPage, _Vue);
  return _createClass(SmallPage);
}(external_vue_property_decorator_["Vue"]);
SmallPagevue_type_script_lang_ts_SmallPage = __decorate([external_vue_property_decorator_["Component"]], SmallPagevue_type_script_lang_ts_SmallPage);
/* harmony default export */ var SmallPagevue_type_script_lang_ts = (SmallPagevue_type_script_lang_ts_SmallPage);
// CONCATENATED MODULE: ./src/components/SmallPage.vue?vue&type=script&lang=ts
 /* harmony default export */ var components_SmallPagevue_type_script_lang_ts = (SmallPagevue_type_script_lang_ts); 
// EXTERNAL MODULE: ./src/components/SmallPage.vue?vue&type=style&index=0&id=1d450cf2&prod&scoped=true&lang=css
var SmallPagevue_type_style_index_0_id_1d450cf2_prod_scoped_true_lang_css = __webpack_require__("58c9");

// CONCATENATED MODULE: ./src/components/SmallPage.vue






/* normalize component */

var SmallPage_component = normalizeComponent(
  components_SmallPagevue_type_script_lang_ts,
  SmallPagevue_type_template_id_1d450cf2_scoped_true_render,
  SmallPagevue_type_template_id_1d450cf2_scoped_true_staticRenderFns,
  false,
  null,
  "1d450cf2",
  null
  
)

/* harmony default export */ var components_SmallPage = (SmallPage_component.exports);
// CONCATENATED MODULE: ./src/main.ts



// Components



























// Comment out unused icons in the components/Icons.ts file


/**
 * Set a specific public path / base path (see https://webpack.js.org/guides/public-path/) from where assets like
 * translation files or identicons should be loaded. By default, this is the path from where the importing script is
 * loaded, derived from the importing script's currentScript src.
 *
 * Optionally, you can define a different path for image assets.
 */
function setAssetPublicPath(path, imageAssetsPath) {
  // See https://webpack.js.org/guides/public-path/#on-the-fly.
  // Note that the default for build target "lib" is set via @vue/cli-service/lib/commands/build/setPublicPath.js and
  // can not be overwritten via publicPath in vue.config.js.
  __webpack_require__.p = "".concat(path).concat(!path.endsWith('/') ? '/' : '');
  if (typeof imageAssetsPath === 'string') {
    self.NIMIQ_VUE_COMPONENTS_IMAGE_ASSET_PATH = "".concat(imageAssetsPath).concat(!imageAssetsPath.endsWith('/') ? '/' : '');
  }
}
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib-no-default.js
/* concated harmony reexport Account */__webpack_require__.d(__webpack_exports__, "Account", function() { return components_Account; });
/* concated harmony reexport AccountDetails */__webpack_require__.d(__webpack_exports__, "AccountDetails", function() { return components_AccountDetails; });
/* concated harmony reexport AccountList */__webpack_require__.d(__webpack_exports__, "AccountList", function() { return components_AccountList; });
/* concated harmony reexport AccountRing */__webpack_require__.d(__webpack_exports__, "AccountRing", function() { return components_AccountRing; });
/* concated harmony reexport AccountSelector */__webpack_require__.d(__webpack_exports__, "AccountSelector", function() { return components_AccountSelector; });
/* concated harmony reexport AddressDisplay */__webpack_require__.d(__webpack_exports__, "AddressDisplay", function() { return components_AddressDisplay; });
/* concated harmony reexport AddressInput */__webpack_require__.d(__webpack_exports__, "AddressInput", function() { return components_AddressInput; });
/* concated harmony reexport Amount */__webpack_require__.d(__webpack_exports__, "Amount", function() { return components_Amount; });
/* concated harmony reexport AmountWithFee */__webpack_require__.d(__webpack_exports__, "AmountWithFee", function() { return components_AmountWithFee; });
/* concated harmony reexport BottomOverlay */__webpack_require__.d(__webpack_exports__, "BottomOverlay", function() { return components_BottomOverlay; });
/* concated harmony reexport Carousel */__webpack_require__.d(__webpack_exports__, "Carousel", function() { return components_Carousel; });
/* concated harmony reexport CircleSpinner */__webpack_require__.d(__webpack_exports__, "CircleSpinner", function() { return CircleSpinner; });
/* concated harmony reexport CloseButton */__webpack_require__.d(__webpack_exports__, "CloseButton", function() { return components_CloseButton; });
/* concated harmony reexport Copyable */__webpack_require__.d(__webpack_exports__, "Copyable", function() { return components_Copyable; });
/* concated harmony reexport CopyableField */__webpack_require__.d(__webpack_exports__, "CopyableField", function() { return components_CopyableField; });
/* concated harmony reexport FiatAmount */__webpack_require__.d(__webpack_exports__, "FiatAmount", function() { return components_FiatAmount; });
/* concated harmony reexport Identicon */__webpack_require__.d(__webpack_exports__, "Identicon", function() { return components_Identicon; });
/* concated harmony reexport LabelInput */__webpack_require__.d(__webpack_exports__, "LabelInput", function() { return components_LabelInput; });
/* concated harmony reexport LoadingSpinner */__webpack_require__.d(__webpack_exports__, "LoadingSpinner", function() { return components_LoadingSpinner; });
/* concated harmony reexport PageBody */__webpack_require__.d(__webpack_exports__, "PageBody", function() { return components_PageBody; });
/* concated harmony reexport PageFooter */__webpack_require__.d(__webpack_exports__, "PageFooter", function() { return components_PageFooter; });
/* concated harmony reexport PageHeader */__webpack_require__.d(__webpack_exports__, "PageHeader", function() { return components_PageHeader; });
/* concated harmony reexport PaymentInfoLine */__webpack_require__.d(__webpack_exports__, "PaymentInfoLine", function() { return components_PaymentInfoLine; });
/* concated harmony reexport QrCode */__webpack_require__.d(__webpack_exports__, "QrCode", function() { return components_QrCode; });
/* concated harmony reexport SelectBar */__webpack_require__.d(__webpack_exports__, "SelectBar", function() { return components_SelectBar; });
/* concated harmony reexport SmallPage */__webpack_require__.d(__webpack_exports__, "SmallPage", function() { return components_SmallPage; });
/* concated harmony reexport Tooltip */__webpack_require__.d(__webpack_exports__, "Tooltip", function() { return components_Tooltip; });
/* concated harmony reexport AlertTriangleIcon */__webpack_require__.d(__webpack_exports__, "AlertTriangleIcon", function() { return AlertTriangleIcon; });
/* concated harmony reexport ArrowLeftSmallIcon */__webpack_require__.d(__webpack_exports__, "ArrowLeftSmallIcon", function() { return ArrowLeftSmallIcon; });
/* concated harmony reexport ArrowLeftIcon */__webpack_require__.d(__webpack_exports__, "ArrowLeftIcon", function() { return ArrowLeftIcon; });
/* concated harmony reexport ArrowRightSmallIcon */__webpack_require__.d(__webpack_exports__, "ArrowRightSmallIcon", function() { return ArrowRightSmallIcon; });
/* concated harmony reexport ArrowRightIcon */__webpack_require__.d(__webpack_exports__, "ArrowRightIcon", function() { return ArrowRightIcon; });
/* concated harmony reexport CaretRightSmallIcon */__webpack_require__.d(__webpack_exports__, "CaretRightSmallIcon", function() { return CaretRightSmallIcon; });
/* concated harmony reexport CashlinkIcon */__webpack_require__.d(__webpack_exports__, "CashlinkIcon", function() { return CashlinkIcon; });
/* concated harmony reexport CheckmarkIcon */__webpack_require__.d(__webpack_exports__, "CheckmarkIcon", function() { return CheckmarkIcon; });
/* concated harmony reexport CheckmarkSmallIcon */__webpack_require__.d(__webpack_exports__, "CheckmarkSmallIcon", function() { return CheckmarkSmallIcon; });
/* concated harmony reexport CloseIcon */__webpack_require__.d(__webpack_exports__, "CloseIcon", function() { return CloseIcon; });
/* concated harmony reexport DownloadIcon */__webpack_require__.d(__webpack_exports__, "DownloadIcon", function() { return DownloadIcon; });
/* concated harmony reexport FaceNeutralIcon */__webpack_require__.d(__webpack_exports__, "FaceNeutralIcon", function() { return FaceNeutralIcon; });
/* concated harmony reexport FaceSadIcon */__webpack_require__.d(__webpack_exports__, "FaceSadIcon", function() { return FaceSadIcon; });
/* concated harmony reexport LedgerIcon */__webpack_require__.d(__webpack_exports__, "LedgerIcon", function() { return LedgerIcon; });
/* concated harmony reexport LoginIcon */__webpack_require__.d(__webpack_exports__, "LoginIcon", function() { return LoginIcon; });
/* concated harmony reexport PlusCircleIcon */__webpack_require__.d(__webpack_exports__, "PlusCircleIcon", function() { return PlusCircleIcon; });
/* concated harmony reexport QrCodeIcon */__webpack_require__.d(__webpack_exports__, "QrCodeIcon", function() { return QrCodeIcon; });
/* concated harmony reexport ScanQrCodeIcon */__webpack_require__.d(__webpack_exports__, "ScanQrCodeIcon", function() { return ScanQrCodeIcon; });
/* concated harmony reexport SettingsIcon */__webpack_require__.d(__webpack_exports__, "SettingsIcon", function() { return SettingsIcon; });
/* concated harmony reexport StopwatchIcon */__webpack_require__.d(__webpack_exports__, "StopwatchIcon", function() { return StopwatchIcon; });
/* concated harmony reexport TransferIcon */__webpack_require__.d(__webpack_exports__, "TransferIcon", function() { return TransferIcon; });
/* concated harmony reexport UnderPaymentIcon */__webpack_require__.d(__webpack_exports__, "UnderPaymentIcon", function() { return UnderPaymentIcon; });
/* concated harmony reexport I18nMixin */__webpack_require__.d(__webpack_exports__, "I18nMixin", function() { return i18n_I18nMixin; });
/* concated harmony reexport setAssetPublicPath */__webpack_require__.d(__webpack_exports__, "setAssetPublicPath", function() { return setAssetPublicPath; });




/***/ }),

/***/ "3a3b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// TODO: Remove from `core-js@4`
__webpack_require__("f118");


/***/ }),

/***/ "3b19":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var commonAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
var base64Alphabet = commonAlphabet + '+/';
var base64UrlAlphabet = commonAlphabet + '-_';

var inverse = function (characters) {
  // TODO: use `Object.create(null)` in `core-js@4`
  var result = {};
  var index = 0;
  for (; index < 64; index++) result[characters.charAt(index)] = index;
  return result;
};

module.exports = {
  i2c: base64Alphabet,
  c2i: inverse(base64Alphabet),
  i2cUrl: base64UrlAlphabet,
  c2iUrl: inverse(base64UrlAlphabet)
};


/***/ }),

/***/ "3c7a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toIntegerOrInfinity = __webpack_require__("497b");

var $RangeError = RangeError;

module.exports = function (it) {
  var result = toIntegerOrInfinity(it);
  if (result < 0) throw new $RangeError("The argument can't be less than 0");
  return result;
};


/***/ }),

/***/ "3d77":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var bind = __webpack_require__("ae5c");
var call = __webpack_require__("71e9");
var toObject = __webpack_require__("1099");
var callWithSafeIterationClosing = __webpack_require__("7f5f");
var isArrayIteratorMethod = __webpack_require__("81a7");
var isConstructor = __webpack_require__("8ae2");
var lengthOfArrayLike = __webpack_require__("1fc1");
var createProperty = __webpack_require__("85f7");
var getIterator = __webpack_require__("d67c");
var getIteratorMethod = __webpack_require__("5112");

var $Array = Array;

// `Array.from` method implementation
// https://tc39.es/ecma262/#sec-array.from
module.exports = function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
  var O = toObject(arrayLike);
  var IS_CONSTRUCTOR = isConstructor(this);
  var argumentsLength = arguments.length;
  var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
  var mapping = mapfn !== undefined;
  if (mapping) mapfn = bind(mapfn, argumentsLength > 2 ? arguments[2] : undefined);
  var iteratorMethod = getIteratorMethod(O);
  var index = 0;
  var length, result, step, iterator, next, value;
  // if the target is not iterable or it's an array with the default iterator - use a simple case
  if (iteratorMethod && !(this === $Array && isArrayIteratorMethod(iteratorMethod))) {
    result = IS_CONSTRUCTOR ? new this() : [];
    iterator = getIterator(O, iteratorMethod);
    next = iterator.next;
    for (;!(step = call(next, iterator)).done; index++) {
      value = mapping ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index], true) : step.value;
      createProperty(result, index, value);
    }
  } else {
    length = lengthOfArrayLike(O);
    result = IS_CONSTRUCTOR ? new this(length) : $Array(length);
    for (;length > index; index++) {
      value = mapping ? mapfn(O[index], index) : O[index];
      createProperty(result, index, value);
    }
  }
  result.length = index;
  return result;
};


/***/ }),

/***/ "3d8a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var hasOwn = __webpack_require__("338c");
var ownKeys = __webpack_require__("6ac9");
var getOwnPropertyDescriptorModule = __webpack_require__("1ded");
var definePropertyModule = __webpack_require__("d6b1");

module.exports = function (target, source, exceptions) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!hasOwn(target, key) && !(exceptions && hasOwn(exceptions, key))) {
      defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
  }
};


/***/ }),

/***/ "3de7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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

/***/ "3f57":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__("85c1");
var isObject = __webpack_require__("1c06");

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),

/***/ "3f65":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var arrayWith = __webpack_require__("93b9");
var ArrayBufferViewCore = __webpack_require__("7ddb");
var isBigIntArray = __webpack_require__("68fd");
var toIntegerOrInfinity = __webpack_require__("497b");
var toBigInt = __webpack_require__("50d5");

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var getTypedArrayConstructor = ArrayBufferViewCore.getTypedArrayConstructor;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

var PROPER_ORDER = !!function () {
  try {
    // eslint-disable-next-line no-throw-literal, es/no-typed-arrays, es/no-array-prototype-with -- required for testing
    new Int8Array(1)['with'](2, { valueOf: function () { throw 8; } });
  } catch (error) {
    // some early implementations, like WebKit, does not follow the final semantic
    // https://github.com/tc39/proposal-change-array-by-copy/pull/86
    return error === 8;
  }
}();

// `%TypedArray%.prototype.with` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.with
exportTypedArrayMethod('with', { 'with': function (index, value) {
  var O = aTypedArray(this);
  var relativeIndex = toIntegerOrInfinity(index);
  var actualValue = isBigIntArray(O) ? toBigInt(value) : +value;
  return arrayWith(O, getTypedArrayConstructor(O), relativeIndex, actualValue);
} }['with'], !PROPER_ORDER);


/***/ }),

/***/ "3f71":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("8bdb");
var IS_PURE = __webpack_require__("a734");
var FORCED_PROMISE_CONSTRUCTOR = __webpack_require__("1052").CONSTRUCTOR;
var NativePromiseConstructor = __webpack_require__("69e4");
var getBuiltIn = __webpack_require__("6aa6");
var isCallable = __webpack_require__("474f");
var defineBuiltIn = __webpack_require__("81a9");

var NativePromisePrototype = NativePromiseConstructor && NativePromiseConstructor.prototype;

// `Promise.prototype.catch` method
// https://tc39.es/ecma262/#sec-promise.prototype.catch
$({ target: 'Promise', proto: true, forced: FORCED_PROMISE_CONSTRUCTOR, real: true }, {
  'catch': function (onRejected) {
    return this.then(undefined, onRejected);
  }
});

// makes sure that native promise-based APIs `Promise#catch` properly works with patched `Promise#then`
if (!IS_PURE && isCallable(NativePromiseConstructor)) {
  var method = getBuiltIn('Promise').prototype['catch'];
  if (NativePromisePrototype['catch'] !== method) {
    defineBuiltIn(NativePromisePrototype, 'catch', method, { unsafe: true });
  }
}


/***/ }),

/***/ "4053":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var call = __webpack_require__("71e9");

module.exports = function (record, fn, ITERATOR_INSTEAD_OF_RECORD) {
  var iterator = ITERATOR_INSTEAD_OF_RECORD ? record : record.iterator;
  var next = record.next;
  var step, result;
  while (!(step = call(next, iterator)).done) {
    result = fn(step.value);
    if (result !== undefined) return result;
  }
};


/***/ }),

/***/ "4100":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("8bdb");
var uncurryThis = __webpack_require__("bb80");
var aCallable = __webpack_require__("7992");
var toObject = __webpack_require__("1099");
var lengthOfArrayLike = __webpack_require__("1fc1");
var deletePropertyOrThrow = __webpack_require__("a830");
var toString = __webpack_require__("9e70");
var fails = __webpack_require__("af9e");
var internalSort = __webpack_require__("b643");
var arrayMethodIsStrict = __webpack_require__("2b04");
var FF = __webpack_require__("5fd9");
var IE_OR_EDGE = __webpack_require__("8d24");
var V8 = __webpack_require__("0173");
var WEBKIT = __webpack_require__("a700");

var test = [];
var nativeSort = uncurryThis(test.sort);
var push = uncurryThis(test.push);

// IE8-
var FAILS_ON_UNDEFINED = fails(function () {
  test.sort(undefined);
});
// V8 bug
var FAILS_ON_NULL = fails(function () {
  test.sort(null);
});
// Old WebKit
var STRICT_METHOD = arrayMethodIsStrict('sort');

var STABLE_SORT = !fails(function () {
  // feature detection can be too slow, so check engines versions
  if (V8) return V8 < 70;
  if (FF && FF > 3) return;
  if (IE_OR_EDGE) return true;
  if (WEBKIT) return WEBKIT < 603;

  var result = '';
  var code, chr, value, index;

  // generate an array with more 512 elements (Chakra and old V8 fails only in this case)
  for (code = 65; code < 76; code++) {
    chr = String.fromCharCode(code);

    switch (code) {
      case 66: case 69: case 70: case 72: value = 3; break;
      case 68: case 71: value = 4; break;
      default: value = 2;
    }

    for (index = 0; index < 47; index++) {
      test.push({ k: chr + index, v: value });
    }
  }

  test.sort(function (a, b) { return b.v - a.v; });

  for (index = 0; index < test.length; index++) {
    chr = test[index].k.charAt(0);
    if (result.charAt(result.length - 1) !== chr) result += chr;
  }

  return result !== 'DGBEFHACIJK';
});

var FORCED = FAILS_ON_UNDEFINED || !FAILS_ON_NULL || !STRICT_METHOD || !STABLE_SORT;

var getSortCompare = function (comparefn) {
  return function (x, y) {
    if (y === undefined) return -1;
    if (x === undefined) return 1;
    if (comparefn !== undefined) return +comparefn(x, y) || 0;
    return toString(x) > toString(y) ? 1 : -1;
  };
};

// `Array.prototype.sort` method
// https://tc39.es/ecma262/#sec-array.prototype.sort
$({ target: 'Array', proto: true, forced: FORCED }, {
  sort: function sort(comparefn) {
    if (comparefn !== undefined) aCallable(comparefn);

    var array = toObject(this);

    if (STABLE_SORT) return comparefn === undefined ? nativeSort(array) : nativeSort(array, comparefn);

    var items = [];
    var arrayLength = lengthOfArrayLike(array);
    var itemsLength, index;

    for (index = 0; index < arrayLength; index++) {
      if (index in array) push(items, array[index]);
    }

    internalSort(items, getSortCompare(comparefn));

    itemsLength = lengthOfArrayLike(items);
    index = 0;

    while (index < itemsLength) array[index] = items[index++];
    while (index < arrayLength) deletePropertyOrThrow(array, index++);

    return array;
  }
});


/***/ }),

/***/ "4135":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = function (exec) {
  try {
    return { error: false, value: exec() };
  } catch (error) {
    return { error: true, value: error };
  }
};


/***/ }),

/***/ "417a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__("af9e");
var createPropertyDescriptor = __webpack_require__("0b5a");

module.exports = !fails(function () {
  var error = new Error('a');
  if (!('stack' in error)) return true;
  // eslint-disable-next-line es/no-object-defineproperty -- safe
  Object.defineProperty(error, 'stack', createPropertyDescriptor(1, 7));
  return error.stack !== 7;
});


/***/ }),

/***/ "41c7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $TypeError = TypeError;
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF; // 2 ** 53 - 1 == 9007199254740991

module.exports = function (it) {
  if (it > MAX_SAFE_INTEGER) throw $TypeError('Maximum allowed index exceeded');
  return it;
};


/***/ }),

/***/ "41d3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__("bb80");

// eslint-disable-next-line es/no-set -- safe
var SetPrototype = Set.prototype;

module.exports = {
  // eslint-disable-next-line es/no-set -- safe
  Set: Set,
  add: uncurryThis(SetPrototype.add),
  has: uncurryThis(SetPrototype.has),
  remove: uncurryThis(SetPrototype['delete']),
  proto: SetPrototype
};


/***/ }),

/***/ "4379":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var arrayFromConstructorAndList = __webpack_require__("ac38");
var typedArraySpeciesConstructor = __webpack_require__("323c");

module.exports = function (instance, list) {
  return arrayFromConstructorAndList(typedArraySpeciesConstructor(instance), list);
};


/***/ }),

/***/ "437f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var getBuiltIn = __webpack_require__("6aa6");
var defineBuiltInAccessor = __webpack_require__("e4ca");
var wellKnownSymbol = __webpack_require__("8c08");
var DESCRIPTORS = __webpack_require__("ab4a");

var SPECIES = wellKnownSymbol('species');

module.exports = function (CONSTRUCTOR_NAME) {
  var Constructor = getBuiltIn(CONSTRUCTOR_NAME);

  if (DESCRIPTORS && Constructor && !Constructor[SPECIES]) {
    defineBuiltInAccessor(Constructor, SPECIES, {
      configurable: true,
      get: function () { return this; }
    });
  }
};


/***/ }),

/***/ "45bf":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var getBuiltIn = __webpack_require__("6aa6");

var createSetLike = function (size) {
  return {
    size: size,
    has: function () {
      return false;
    },
    keys: function () {
      return {
        next: function () {
          return { done: true };
        }
      };
    }
  };
};

module.exports = function (name) {
  var Set = getBuiltIn('Set');
  try {
    new Set()[name](createSetLike(0));
    try {
      // late spec change, early WebKit ~ Safari 17.0 beta implementation does not pass it
      // https://github.com/tc39/proposal-set-methods/pull/88
      new Set()[name](createSetLike(-1));
      return false;
    } catch (error2) {
      return true;
    }
  } catch (error) {
    return false;
  }
};


/***/ }),

/***/ "4626":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("8bdb");
var $includes = __webpack_require__("036b").includes;
var fails = __webpack_require__("af9e");
var addToUnscopables = __webpack_require__("1cb5");

// FF99+ bug
var BROKEN_ON_SPARSE = fails(function () {
  // eslint-disable-next-line es/no-array-prototype-includes -- detection
  return !Array(1).includes();
});

// `Array.prototype.includes` method
// https://tc39.es/ecma262/#sec-array.prototype.includes
$({ target: 'Array', proto: true, forced: BROKEN_ON_SPARSE }, {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('includes');


/***/ }),

/***/ "471d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var anObject = __webpack_require__("e7e3");

// `RegExp.prototype.flags` getter implementation
// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.hasIndices) result += 'd';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.dotAll) result += 's';
  if (that.unicode) result += 'u';
  if (that.unicodeSets) result += 'v';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),

/***/ "473f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("8bdb");
var $reduce = __webpack_require__("9a51").left;
var arrayMethodIsStrict = __webpack_require__("2b04");
var CHROME_VERSION = __webpack_require__("0173");
var IS_NODE = __webpack_require__("db06");

// Chrome 80-82 has a critical bug
// https://bugs.chromium.org/p/chromium/issues/detail?id=1049982
var CHROME_BUG = !IS_NODE && CHROME_VERSION > 79 && CHROME_VERSION < 83;
var FORCED = CHROME_BUG || !arrayMethodIsStrict('reduce');

// `Array.prototype.reduce` method
// https://tc39.es/ecma262/#sec-array.prototype.reduce
$({ target: 'Array', proto: true, forced: FORCED }, {
  reduce: function reduce(callbackfn /* , initialValue */) {
    var length = arguments.length;
    return $reduce(this, callbackfn, length, length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "474f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot
var documentAll = typeof document == 'object' && document.all;

// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
// eslint-disable-next-line unicorn/no-typeof-undefined -- required for testing
module.exports = typeof documentAll == 'undefined' && documentAll !== undefined ? function (argument) {
  return typeof argument == 'function' || argument === documentAll;
} : function (argument) {
  return typeof argument == 'function';
};


/***/ }),

/***/ "497b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var trunc = __webpack_require__("1aad");

// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
module.exports = function (argument) {
  var number = +argument;
  // eslint-disable-next-line no-self-compare -- NaN check
  return number !== number || number === 0 ? 0 : trunc(number);
};


/***/ }),

/***/ "4afb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var IteratorPrototype = __webpack_require__("5057").IteratorPrototype;
var create = __webpack_require__("e37c");
var createPropertyDescriptor = __webpack_require__("0b5a");
var setToStringTag = __webpack_require__("181d");
var Iterators = __webpack_require__("799d");

var returnThis = function () { return this; };

module.exports = function (IteratorConstructor, NAME, next, ENUMERABLE_NEXT) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(+!ENUMERABLE_NEXT, next) });
  setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
  Iterators[TO_STRING_TAG] = returnThis;
  return IteratorConstructor;
};


/***/ }),

/***/ "4b3f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Iqons; });
/* unused harmony export makeHash */
/* unused harmony export colorNames */
/* unused harmony export hashToRGB */
/* unused harmony export hashToIndices */
/* unused harmony export getBackgroundColorName */
/* unused harmony export colors */
/* unused harmony export backgroundColors */
class Iqons{static async svg(t){const e=makeHash(t);return this._svgTemplate(e[0],e[2],e[3]+e[4],e[5]+e[6],e[7]+e[8],e[9]+e[10],e[11])}static async render(t,e){e.innerHTML=await this.svg(t)}static async toDataUrl(t){return`data:image/svg+xml;base64,${this._btoa(await this.svg(t,!0))}`}static placeholder(t="#bbb",e=1){return`<svg viewBox="0 0 160 160" width="160" height="160" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/2000/xlink" >\n<path fill="none" stroke="${t}" stroke-width="${2*e}" transform="translate(0, 8) scale(0.5)" d="M251.6 17.34l63.53 110.03c5.72 9.9 5.72 22.1 0 32L251.6 269.4c-5.7 9.9-16.27 16-27.7 16H96.83c-11.43 0-22-6.1-27.7-16L5.6 159.37c-5.7-9.9-5.7-22.1 0-32L69.14 17.34c5.72-9.9 16.28-16 27.7-16H223.9c11.43 0 22 6.1 27.7 16z"/>\n<g transform="scale(0.9) translate(9, 8)">\n<circle cx="80" cy="80" r="40" fill="none" stroke="${t}" stroke-width="${e}" opacity=".9"/>\n<g opacity=".1" fill="#010101"><path d="M119.21,80a39.46,39.46,0,0,1-67.13,28.13c10.36,2.33,36,3,49.82-14.28,10.39-12.47,8.31-33.23,4.16-43.26A39.35,39.35,0,0,1,119.21,80Z"/></g>\n</g></svg>`}static renderPlaceholder(t,e,s){t.innerHTML=this.placeholder(e,s)}static placeholderToDataUrl(t,e){return`data:image/svg+xml;base64,${this._btoa(this.placeholder(t,e))}`}static async image(t){const e=await this.toDataUrl(t),s=await this._loadImage(e);return s.style.width="100%",s.style.height="100%",s}static async _svgTemplate(t,e,s,a,n,i,r){return this._$svg(await this._$iqons(t,e,s,a,n,i,r))}static async _$iqons(t,e,s,a,n,i,r){const o=hashToRGB(t,e,r);return t=o.main,e=o.background,`<g color="${t}" fill="${r=o.accent}">\n<rect fill="${e}" x="0" y="0" width="160" height="160"/>\n<circle cx="80" cy="80" r="40" fill="${t}"/>\n<g opacity=".1" fill="#010101"><path d="M119.21,80a39.46,39.46,0,0,1-67.13,28.13c10.36,2.33,36,3,49.82-14.28,10.39-12.47,8.31-33.23,4.16-43.26A39.35,39.35,0,0,1,119.21,80Z"/></g>\n${await this._generatePart("top",a)}\n${await this._generatePart("side",n)}\n${await this._generatePart("face",s)}\n${await this._generatePart("bottom",i)}\n</g>`}static _$svg(t){const e=this._getRandomId();return`<svg viewBox="0 0 160 160" width="160" height="160" xmlns="http://www.w3.org/2000/svg">\n<defs><clipPath id="hexagon-clip-${e}">\n<path d="M251.6 17.34l63.53 110.03c5.72 9.9 5.72 22.1 0 32L251.6 269.4c-5.7 9.9-16.27 16-27.7 16H96.83c-11.43 0-22-6.1-27.7-16L5.6 159.37c-5.7-9.9-5.7-22.1 0-32L69.14 17.34c5.72-9.9 16.28-16 27.7-16H223.9c11.43 0 22 6.1 27.7 16z" transform="scale(0.5) translate(0, 16)"/>\n</clipPath></defs>\n<g clip-path="url(#hexagon-clip-${e})">\n${t}\n</g></svg>`}static async _generatePart(t,e){const s=await this._getAssets(),a=t+"_"+this._assetIndex(e,t),n=s.getElementById(a);return n?n.innerHTML:""}static _loadImage(t){return new Promise((e,s)=>{const a=document.createElement("img");a.addEventListener("load",t=>e(a),{once:!0}),a.src=t})}static async _getAssets(){return this._assetsPromise||(this._assetsPromise=new Promise(async function(t){let e;e="undefined"!=typeof IqonsAssets?IqonsAssets:await fetch(self.NIMIQ_IQONS_SVG_PATH||Iqons.svgPath).then(t=>t.text()), true&&module.exports&&(global.DOMParser=__webpack_require__("8228")),t((new DOMParser).parseFromString(e,"image/svg+xml"))}))}static _btoa(t){return true&&module.exports?new Buffer(t).toString("base64"):btoa(t)}static _assetIndex(t,e){return(t=Number(t)%21+1)<10&&(t="0"+t),t}static _getRandomId(){return Math.floor(256*Math.random())}}
// @asset(/node_modules/@nimiq/iqons/dist/iqons.min.svg);
Iqons.svgPath="/node_modules/@nimiq/iqons/dist/iqons.min.svg";
function makeHash(t){const r=(""+t.split("").map(t=>Number(t.charCodeAt(0))+3).reduce((t,r)=>t*(1-t)*__chaosHash(r),.5)).split("").reduce((t,r)=>r+t,"");return _padEnd(r.replace(".",r[5]).substr(4,17),13,r[5])};function __chaosHash(t){let r=1/t;for(let t=0;t<100;t++)r=(1-r)*r*3.569956786876;return r}function _padEnd(t,r,e){if(String.prototype.padEnd)return t.padEnd(r,e);for(;t.length<r;)t+=e;return t.substring(0,Math.max(t.length,r))}
const colorNames=["Orange","Red","Yellow","Indigo","Blue","Purple","Teal","Pink","Green","Brown"];
function hashToRGB(o,n,r){return indicesToRGB(hashToIndices(o,n,r))};function hashToIndices(o,n,r){for(o=parseInt(o,10),n=parseInt(n,10),r=parseInt(r,10),o===n&&++o>9&&(o=0);r===o||r===n;)++r>9&&(r=0);return{main:o,background:n,accent:r}};function indicesToRGB(o){return{main:colors[o.main],background:backgroundColors[o.background],accent:colors[o.accent]}}function getBackgroundColorName(o){const n=makeHash(o),r=parseInt(n[2],10);return colorNames[r]};const colors=["#FC8702","#D94432","#E9B213","#1A5493","#0582CA","#5961A8","#21BCA5","#FA7268","#88B04B","#795548"];const backgroundColors=["#FC8702","#D94432","#E9B213","#1F2348","#0582CA","#5F4B8B","#21BCA5","#FA7268","#88B04B","#795548"];
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("7f51")(module)))

/***/ }),

/***/ "4ba2":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// TODO: Remove from `core-js@4`
__webpack_require__("aa20");


/***/ }),

/***/ "4c42":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "4d16":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var bind = __webpack_require__("ae5c");
var uncurryThis = __webpack_require__("bb80");
var IndexedObject = __webpack_require__("7e41");
var toObject = __webpack_require__("1099");
var lengthOfArrayLike = __webpack_require__("1fc1");
var arraySpeciesCreate = __webpack_require__("3242");

var push = uncurryThis([].push);

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterReject }` methods implementation
var createMethod = function (TYPE) {
  var IS_MAP = TYPE === 1;
  var IS_FILTER = TYPE === 2;
  var IS_SOME = TYPE === 3;
  var IS_EVERY = TYPE === 4;
  var IS_FIND_INDEX = TYPE === 6;
  var IS_FILTER_REJECT = TYPE === 7;
  var NO_HOLES = TYPE === 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject($this);
    var self = IndexedObject(O);
    var length = lengthOfArrayLike(self);
    var boundFunction = bind(callbackfn, that);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_REJECT ? create($this, 0) : undefined;
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
          case 2: push(target, value);      // filter
        } else switch (TYPE) {
          case 4: return false;             // every
          case 7: push(target, value);      // filterReject
        }
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

module.exports = {
  // `Array.prototype.forEach` method
  // https://tc39.es/ecma262/#sec-array.prototype.foreach
  forEach: createMethod(0),
  // `Array.prototype.map` method
  // https://tc39.es/ecma262/#sec-array.prototype.map
  map: createMethod(1),
  // `Array.prototype.filter` method
  // https://tc39.es/ecma262/#sec-array.prototype.filter
  filter: createMethod(2),
  // `Array.prototype.some` method
  // https://tc39.es/ecma262/#sec-array.prototype.some
  some: createMethod(3),
  // `Array.prototype.every` method
  // https://tc39.es/ecma262/#sec-array.prototype.every
  every: createMethod(4),
  // `Array.prototype.find` method
  // https://tc39.es/ecma262/#sec-array.prototype.find
  find: createMethod(5),
  // `Array.prototype.findIndex` method
  // https://tc39.es/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod(6),
  // `Array.prototype.filterReject` method
  // https://github.com/tc39/proposal-array-filtering
  filterReject: createMethod(7)
};


/***/ }),

/***/ "4d8f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__("7ddb");
var lengthOfArrayLike = __webpack_require__("1fc1");
var toIntegerOrInfinity = __webpack_require__("497b");

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.at` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.at
exportTypedArrayMethod('at', function at(index) {
  var O = aTypedArray(this);
  var len = lengthOfArrayLike(O);
  var relativeIndex = toIntegerOrInfinity(index);
  var k = relativeIndex >= 0 ? relativeIndex : len + relativeIndex;
  return (k < 0 || k >= len) ? undefined : O[k];
});


/***/ }),

/***/ "4db2":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("8bdb");
var uncurryThis = __webpack_require__("9f69");
var fails = __webpack_require__("af9e");
var ArrayBufferModule = __webpack_require__("efa5");
var anObject = __webpack_require__("e7e3");
var toAbsoluteIndex = __webpack_require__("e34c");
var toLength = __webpack_require__("c435");
var speciesConstructor = __webpack_require__("5dfa");

var ArrayBuffer = ArrayBufferModule.ArrayBuffer;
var DataView = ArrayBufferModule.DataView;
var DataViewPrototype = DataView.prototype;
var nativeArrayBufferSlice = uncurryThis(ArrayBuffer.prototype.slice);
var getUint8 = uncurryThis(DataViewPrototype.getUint8);
var setUint8 = uncurryThis(DataViewPrototype.setUint8);

var INCORRECT_SLICE = fails(function () {
  return !new ArrayBuffer(2).slice(1, undefined).byteLength;
});

// `ArrayBuffer.prototype.slice` method
// https://tc39.es/ecma262/#sec-arraybuffer.prototype.slice
$({ target: 'ArrayBuffer', proto: true, unsafe: true, forced: INCORRECT_SLICE }, {
  slice: function slice(start, end) {
    if (nativeArrayBufferSlice && end === undefined) {
      return nativeArrayBufferSlice(anObject(this), start); // FF fix
    }
    var length = anObject(this).byteLength;
    var first = toAbsoluteIndex(start, length);
    var fin = toAbsoluteIndex(end === undefined ? length : end, length);
    var result = new (speciesConstructor(this, ArrayBuffer))(toLength(fin - first));
    var viewSource = new DataView(this);
    var viewTarget = new DataView(result);
    var index = 0;
    while (first < fin) {
      setUint8(viewTarget, index++, getUint8(viewSource, first++));
    } return result;
  }
});


/***/ }),

/***/ "4e9b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var getBuiltIn = __webpack_require__("6aa6");
var defineWellKnownSymbol = __webpack_require__("f259");
var setToStringTag = __webpack_require__("181d");

// `Symbol.toStringTag` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.tostringtag
defineWellKnownSymbol('toStringTag');

// `Symbol.prototype[@@toStringTag]` property
// https://tc39.es/ecma262/#sec-symbol.prototype-@@tostringtag
setToStringTag(getBuiltIn('Symbol'), 'Symbol');


/***/ }),

/***/ "4f04":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* eslint-disable es/no-symbol -- required for testing */
var NATIVE_SYMBOL = __webpack_require__("af71");

module.exports = NATIVE_SYMBOL
  && !Symbol.sham
  && typeof Symbol.iterator == 'symbol';


/***/ }),

/***/ "5057":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__("af9e");
var isCallable = __webpack_require__("474f");
var isObject = __webpack_require__("1c06");
var create = __webpack_require__("e37c");
var getPrototypeOf = __webpack_require__("c337");
var defineBuiltIn = __webpack_require__("81a9");
var wellKnownSymbol = __webpack_require__("8c08");
var IS_PURE = __webpack_require__("a734");

var ITERATOR = wellKnownSymbol('iterator');
var BUGGY_SAFARI_ITERATORS = false;

// `%IteratorPrototype%` object
// https://tc39.es/ecma262/#sec-%iteratorprototype%-object
var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

/* eslint-disable es/no-array-prototype-keys -- safe */
if ([].keys) {
  arrayIterator = [].keys();
  // Safari 8 has buggy iterators w/o `next`
  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
  else {
    PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
  }
}

var NEW_ITERATOR_PROTOTYPE = !isObject(IteratorPrototype) || fails(function () {
  var test = {};
  // FF44- legacy iterators case
  return IteratorPrototype[ITERATOR].call(test) !== test;
});

if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype = {};
else if (IS_PURE) IteratorPrototype = create(IteratorPrototype);

// `%IteratorPrototype%[@@iterator]()` method
// https://tc39.es/ecma262/#sec-%iteratorprototype%-@@iterator
if (!isCallable(IteratorPrototype[ITERATOR])) {
  defineBuiltIn(IteratorPrototype, ITERATOR, function () {
    return this;
  });
}

module.exports = {
  IteratorPrototype: IteratorPrototype,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
};


/***/ }),

/***/ "5075":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var bind = __webpack_require__("ae5c");
var call = __webpack_require__("71e9");
var anObject = __webpack_require__("e7e3");
var tryToString = __webpack_require__("52df");
var isArrayIteratorMethod = __webpack_require__("81a7");
var lengthOfArrayLike = __webpack_require__("1fc1");
var isPrototypeOf = __webpack_require__("1297");
var getIterator = __webpack_require__("d67c");
var getIteratorMethod = __webpack_require__("5112");
var iteratorClose = __webpack_require__("7e91");

var $TypeError = TypeError;

var Result = function (stopped, result) {
  this.stopped = stopped;
  this.result = result;
};

var ResultPrototype = Result.prototype;

module.exports = function (iterable, unboundFunction, options) {
  var that = options && options.that;
  var AS_ENTRIES = !!(options && options.AS_ENTRIES);
  var IS_RECORD = !!(options && options.IS_RECORD);
  var IS_ITERATOR = !!(options && options.IS_ITERATOR);
  var INTERRUPTED = !!(options && options.INTERRUPTED);
  var fn = bind(unboundFunction, that);
  var iterator, iterFn, index, length, result, next, step;

  var stop = function (condition) {
    if (iterator) iteratorClose(iterator, 'normal', condition);
    return new Result(true, condition);
  };

  var callFn = function (value) {
    if (AS_ENTRIES) {
      anObject(value);
      return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
    } return INTERRUPTED ? fn(value, stop) : fn(value);
  };

  if (IS_RECORD) {
    iterator = iterable.iterator;
  } else if (IS_ITERATOR) {
    iterator = iterable;
  } else {
    iterFn = getIteratorMethod(iterable);
    if (!iterFn) throw new $TypeError(tryToString(iterable) + ' is not iterable');
    // optimisation for array iterators
    if (isArrayIteratorMethod(iterFn)) {
      for (index = 0, length = lengthOfArrayLike(iterable); length > index; index++) {
        result = callFn(iterable[index]);
        if (result && isPrototypeOf(ResultPrototype, result)) return result;
      } return new Result(false);
    }
    iterator = getIterator(iterable, iterFn);
  }

  next = IS_RECORD ? iterable.next : iterator.next;
  while (!(step = call(next, iterator)).done) {
    try {
      result = callFn(step.value);
    } catch (error) {
      iteratorClose(iterator, 'throw', error);
    }
    if (typeof result == 'object' && result && isPrototypeOf(ResultPrototype, result)) return result;
  } return new Result(false);
};


/***/ }),

/***/ "50d5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toPrimitive = __webpack_require__("c215");

var $TypeError = TypeError;

// `ToBigInt` abstract operation
// https://tc39.es/ecma262/#sec-tobigint
module.exports = function (argument) {
  var prim = toPrimitive(argument, 'number');
  if (typeof prim == 'number') throw new $TypeError("Can't convert number to bigint");
  // eslint-disable-next-line es/no-bigint -- safe
  return BigInt(prim);
};


/***/ }),

/***/ "5112":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var classof = __webpack_require__("8e02");
var getMethod = __webpack_require__("60bc");
var isNullOrUndefined = __webpack_require__("1eb8");
var Iterators = __webpack_require__("799d");
var wellKnownSymbol = __webpack_require__("8c08");

var ITERATOR = wellKnownSymbol('iterator');

module.exports = function (it) {
  if (!isNullOrUndefined(it)) return getMethod(it, ITERATOR)
    || getMethod(it, '@@iterator')
    || Iterators[classof(it)];
};


/***/ }),

/***/ "5145":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* eslint-disable es/no-array-prototype-lastindexof -- safe */
var apply = __webpack_require__("9f9e");
var toIndexedObject = __webpack_require__("f660");
var toIntegerOrInfinity = __webpack_require__("497b");
var lengthOfArrayLike = __webpack_require__("1fc1");
var arrayMethodIsStrict = __webpack_require__("2b04");

var min = Math.min;
var $lastIndexOf = [].lastIndexOf;
var NEGATIVE_ZERO = !!$lastIndexOf && 1 / [1].lastIndexOf(1, -0) < 0;
var STRICT_METHOD = arrayMethodIsStrict('lastIndexOf');
var FORCED = NEGATIVE_ZERO || !STRICT_METHOD;

// `Array.prototype.lastIndexOf` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.lastindexof
module.exports = FORCED ? function lastIndexOf(searchElement /* , fromIndex = @[*-1] */) {
  // convert -0 to +0
  if (NEGATIVE_ZERO) return apply($lastIndexOf, this, arguments) || 0;
  var O = toIndexedObject(this);
  var length = lengthOfArrayLike(O);
  if (length === 0) return -1;
  var index = length - 1;
  if (arguments.length > 1) index = min(index, toIntegerOrInfinity(arguments[1]));
  if (index < 0) index = length + index;
  for (;index >= 0; index--) if (index in O && O[index] === searchElement) return index || 0;
  return -1;
} : $lastIndexOf;


/***/ }),

/***/ "52ac":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var call = __webpack_require__("71e9");
var hasOwn = __webpack_require__("338c");
var isPrototypeOf = __webpack_require__("1297");
var regExpFlags = __webpack_require__("471d");

var RegExpPrototype = RegExp.prototype;

module.exports = function (R) {
  var flags = R.flags;
  return flags === undefined && !('flags' in RegExpPrototype) && !hasOwn(R, 'flags') && isPrototypeOf(RegExpPrototype, R)
    ? call(regExpFlags, R) : flags;
};


/***/ }),

/***/ "52df":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $String = String;

module.exports = function (argument) {
  try {
    return $String(argument);
  } catch (error) {
    return 'Object';
  }
};


/***/ }),

/***/ "52f4":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "5330":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var isObject = __webpack_require__("1c06");
var createNonEnumerableProperty = __webpack_require__("6aca");

// `InstallErrorCause` abstract operation
// https://tc39.es/proposal-error-cause/#sec-errorobjects-install-error-cause
module.exports = function (O, options) {
  if (isObject(options) && 'cause' in options) {
    createNonEnumerableProperty(O, 'cause', options.cause);
  }
};


/***/ }),

/***/ "53db":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__("ab4a");
var defineBuiltInAccessor = __webpack_require__("e4ca");
var isObject = __webpack_require__("1c06");
var isPossiblePrototype = __webpack_require__("bda5");
var toObject = __webpack_require__("1099");
var requireObjectCoercible = __webpack_require__("862c");

// eslint-disable-next-line es/no-object-getprototypeof -- safe
var getPrototypeOf = Object.getPrototypeOf;
// eslint-disable-next-line es/no-object-setprototypeof -- safe
var setPrototypeOf = Object.setPrototypeOf;
var ObjectPrototype = Object.prototype;
var PROTO = '__proto__';

// `Object.prototype.__proto__` accessor
// https://tc39.es/ecma262/#sec-object.prototype.__proto__
if (DESCRIPTORS && getPrototypeOf && setPrototypeOf && !(PROTO in ObjectPrototype)) try {
  defineBuiltInAccessor(ObjectPrototype, PROTO, {
    configurable: true,
    get: function __proto__() {
      return getPrototypeOf(toObject(this));
    },
    set: function __proto__(proto) {
      var O = requireObjectCoercible(this);
      if (isPossiblePrototype(proto) && isObject(O)) {
        setPrototypeOf(O, proto);
      }
    }
  });
} catch (error) { /* empty */ }


/***/ }),

/***/ "53f7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var collection = __webpack_require__("7658");
var collectionStrong = __webpack_require__("57e7");

// `Set` constructor
// https://tc39.es/ecma262/#sec-set-objects
collection('Set', function (init) {
  return function Set() { return init(this, arguments.length ? arguments[0] : undefined); };
}, collectionStrong);


/***/ }),

/***/ "569b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var wellKnownSymbol = __webpack_require__("8c08");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};

test[TO_STRING_TAG] = 'z';

module.exports = String(test) === '[object z]';


/***/ }),

/***/ "57e7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__("e37c");
var defineBuiltInAccessor = __webpack_require__("e4ca");
var defineBuiltIns = __webpack_require__("a74c");
var bind = __webpack_require__("ae5c");
var anInstance = __webpack_require__("b720");
var isNullOrUndefined = __webpack_require__("1eb8");
var iterate = __webpack_require__("5075");
var defineIterator = __webpack_require__("0cc2");
var createIterResultObject = __webpack_require__("97ed");
var setSpecies = __webpack_require__("437f");
var DESCRIPTORS = __webpack_require__("ab4a");
var fastKey = __webpack_require__("d0b1").fastKey;
var InternalStateModule = __webpack_require__("235c");

var setInternalState = InternalStateModule.set;
var internalStateGetterFor = InternalStateModule.getterFor;

module.exports = {
  getConstructor: function (wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {
    var Constructor = wrapper(function (that, iterable) {
      anInstance(that, Prototype);
      setInternalState(that, {
        type: CONSTRUCTOR_NAME,
        index: create(null),
        first: undefined,
        last: undefined,
        size: 0
      });
      if (!DESCRIPTORS) that.size = 0;
      if (!isNullOrUndefined(iterable)) iterate(iterable, that[ADDER], { that: that, AS_ENTRIES: IS_MAP });
    });

    var Prototype = Constructor.prototype;

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
        if (entry.key === key) return entry;
      }
    };

    defineBuiltIns(Prototype, {
      // `{ Map, Set }.prototype.clear()` methods
      // https://tc39.es/ecma262/#sec-map.prototype.clear
      // https://tc39.es/ecma262/#sec-set.prototype.clear
      clear: function clear() {
        var that = this;
        var state = getInternalState(that);
        var entry = state.first;
        while (entry) {
          entry.removed = true;
          if (entry.previous) entry.previous = entry.previous.next = undefined;
          entry = entry.next;
        }
        state.first = state.last = undefined;
        state.index = create(null);
        if (DESCRIPTORS) state.size = 0;
        else that.size = 0;
      },
      // `{ Map, Set }.prototype.delete(key)` methods
      // https://tc39.es/ecma262/#sec-map.prototype.delete
      // https://tc39.es/ecma262/#sec-set.prototype.delete
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
          if (state.first === entry) state.first = next;
          if (state.last === entry) state.last = prev;
          if (DESCRIPTORS) state.size--;
          else that.size--;
        } return !!entry;
      },
      // `{ Map, Set }.prototype.forEach(callbackfn, thisArg = undefined)` methods
      // https://tc39.es/ecma262/#sec-map.prototype.foreach
      // https://tc39.es/ecma262/#sec-set.prototype.foreach
      forEach: function forEach(callbackfn /* , that = undefined */) {
        var state = getInternalState(this);
        var boundFunction = bind(callbackfn, arguments.length > 1 ? arguments[1] : undefined);
        var entry;
        while (entry = entry ? entry.next : state.first) {
          boundFunction(entry.value, entry.key, this);
          // revert to the last existing entry
          while (entry && entry.removed) entry = entry.previous;
        }
      },
      // `{ Map, Set}.prototype.has(key)` methods
      // https://tc39.es/ecma262/#sec-map.prototype.has
      // https://tc39.es/ecma262/#sec-set.prototype.has
      has: function has(key) {
        return !!getEntry(this, key);
      }
    });

    defineBuiltIns(Prototype, IS_MAP ? {
      // `Map.prototype.get(key)` method
      // https://tc39.es/ecma262/#sec-map.prototype.get
      get: function get(key) {
        var entry = getEntry(this, key);
        return entry && entry.value;
      },
      // `Map.prototype.set(key, value)` method
      // https://tc39.es/ecma262/#sec-map.prototype.set
      set: function set(key, value) {
        return define(this, key === 0 ? 0 : key, value);
      }
    } : {
      // `Set.prototype.add(value)` method
      // https://tc39.es/ecma262/#sec-set.prototype.add
      add: function add(value) {
        return define(this, value = value === 0 ? 0 : value, value);
      }
    });
    if (DESCRIPTORS) defineBuiltInAccessor(Prototype, 'size', {
      configurable: true,
      get: function () {
        return getInternalState(this).size;
      }
    });
    return Constructor;
  },
  setStrong: function (Constructor, CONSTRUCTOR_NAME, IS_MAP) {
    var ITERATOR_NAME = CONSTRUCTOR_NAME + ' Iterator';
    var getInternalCollectionState = internalStateGetterFor(CONSTRUCTOR_NAME);
    var getInternalIteratorState = internalStateGetterFor(ITERATOR_NAME);
    // `{ Map, Set }.prototype.{ keys, values, entries, @@iterator }()` methods
    // https://tc39.es/ecma262/#sec-map.prototype.entries
    // https://tc39.es/ecma262/#sec-map.prototype.keys
    // https://tc39.es/ecma262/#sec-map.prototype.values
    // https://tc39.es/ecma262/#sec-map.prototype-@@iterator
    // https://tc39.es/ecma262/#sec-set.prototype.entries
    // https://tc39.es/ecma262/#sec-set.prototype.keys
    // https://tc39.es/ecma262/#sec-set.prototype.values
    // https://tc39.es/ecma262/#sec-set.prototype-@@iterator
    defineIterator(Constructor, CONSTRUCTOR_NAME, function (iterated, kind) {
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
        return createIterResultObject(undefined, true);
      }
      // return step by kind
      if (kind === 'keys') return createIterResultObject(entry.key, false);
      if (kind === 'values') return createIterResultObject(entry.value, false);
      return createIterResultObject([entry.key, entry.value], false);
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

    // `{ Map, Set }.prototype[@@species]` accessors
    // https://tc39.es/ecma262/#sec-get-map-@@species
    // https://tc39.es/ecma262/#sec-get-set-@@species
    setSpecies(CONSTRUCTOR_NAME);
  }
};


/***/ }),

/***/ "58c9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SmallPage_vue_vue_type_style_index_0_id_1d450cf2_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("3611");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SmallPage_vue_vue_type_style_index_0_id_1d450cf2_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SmallPage_vue_vue_type_style_index_0_id_1d450cf2_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "59b6":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("8bdb");
var isDisjointFrom = __webpack_require__("d684");
var setMethodAcceptSetLike = __webpack_require__("45bf");

// `Set.prototype.isDisjointFrom` method
// https://github.com/tc39/proposal-set-methods
$({ target: 'Set', proto: true, real: true, forced: !setMethodAcceptSetLike('isDisjointFrom') }, {
  isDisjointFrom: isDisjointFrom
});


/***/ }),

/***/ "5a56":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("8bdb");
var global = __webpack_require__("85c1");
var getBuiltIn = __webpack_require__("6aa6");
var createPropertyDescriptor = __webpack_require__("0b5a");
var defineProperty = __webpack_require__("d6b1").f;
var hasOwn = __webpack_require__("338c");
var anInstance = __webpack_require__("b720");
var inheritIfRequired = __webpack_require__("dcda");
var normalizeStringArgument = __webpack_require__("e7da");
var DOMExceptionConstants = __webpack_require__("e6a2");
var clearErrorStack = __webpack_require__("7e87");
var DESCRIPTORS = __webpack_require__("ab4a");
var IS_PURE = __webpack_require__("a734");

var DOM_EXCEPTION = 'DOMException';
var Error = getBuiltIn('Error');
var NativeDOMException = getBuiltIn(DOM_EXCEPTION);

var $DOMException = function DOMException() {
  anInstance(this, DOMExceptionPrototype);
  var argumentsLength = arguments.length;
  var message = normalizeStringArgument(argumentsLength < 1 ? undefined : arguments[0]);
  var name = normalizeStringArgument(argumentsLength < 2 ? undefined : arguments[1], 'Error');
  var that = new NativeDOMException(message, name);
  var error = new Error(message);
  error.name = DOM_EXCEPTION;
  defineProperty(that, 'stack', createPropertyDescriptor(1, clearErrorStack(error.stack, 1)));
  inheritIfRequired(that, this, $DOMException);
  return that;
};

var DOMExceptionPrototype = $DOMException.prototype = NativeDOMException.prototype;

var ERROR_HAS_STACK = 'stack' in new Error(DOM_EXCEPTION);
var DOM_EXCEPTION_HAS_STACK = 'stack' in new NativeDOMException(1, 2);

// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var descriptor = NativeDOMException && DESCRIPTORS && Object.getOwnPropertyDescriptor(global, DOM_EXCEPTION);

// Bun ~ 0.1.1 DOMException have incorrect descriptor and we can't redefine it
// https://github.com/Jarred-Sumner/bun/issues/399
var BUGGY_DESCRIPTOR = !!descriptor && !(descriptor.writable && descriptor.configurable);

var FORCED_CONSTRUCTOR = ERROR_HAS_STACK && !BUGGY_DESCRIPTOR && !DOM_EXCEPTION_HAS_STACK;

// `DOMException` constructor patch for `.stack` where it's required
// https://webidl.spec.whatwg.org/#es-DOMException-specialness
$({ global: true, constructor: true, forced: IS_PURE || FORCED_CONSTRUCTOR }, { // TODO: fix export logic
  DOMException: FORCED_CONSTRUCTOR ? $DOMException : NativeDOMException
});

var PolyfilledDOMException = getBuiltIn(DOM_EXCEPTION);
var PolyfilledDOMExceptionPrototype = PolyfilledDOMException.prototype;

if (PolyfilledDOMExceptionPrototype.constructor !== PolyfilledDOMException) {
  if (!IS_PURE) {
    defineProperty(PolyfilledDOMExceptionPrototype, 'constructor', createPropertyDescriptor(1, PolyfilledDOMException));
  }

  for (var key in DOMExceptionConstants) if (hasOwn(DOMExceptionConstants, key)) {
    var constant = DOMExceptionConstants[key];
    var constantName = constant.s;
    if (!hasOwn(PolyfilledDOMException, constantName)) {
      defineProperty(PolyfilledDOMException, constantName, createPropertyDescriptor(6, constant.c));
    }
  }
}


/***/ }),

/***/ "5ac7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("8bdb");
var uncurryThis = __webpack_require__("bb80");
var notARegExp = __webpack_require__("b6a1");
var requireObjectCoercible = __webpack_require__("862c");
var toString = __webpack_require__("9e70");
var correctIsRegExpLogic = __webpack_require__("0931");

var stringIndexOf = uncurryThis(''.indexOf);

// `String.prototype.includes` method
// https://tc39.es/ecma262/#sec-string.prototype.includes
$({ target: 'String', proto: true, forced: !correctIsRegExpLogic('includes') }, {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~stringIndexOf(
      toString(requireObjectCoercible(this)),
      toString(notARegExp(searchString)),
      arguments.length > 1 ? arguments[1] : undefined
    );
  }
});


/***/ }),

/***/ "5b2c":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var NATIVE_SYMBOL = __webpack_require__("af71");

/* eslint-disable es/no-symbol -- safe */
module.exports = NATIVE_SYMBOL && !!Symbol['for'] && !!Symbol.keyFor;


/***/ }),

/***/ "5c47":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("8bdb");
var exec = __webpack_require__("9ad8");

// `RegExp.prototype.exec` method
// https://tc39.es/ecma262/#sec-regexp.prototype.exec
$({ target: 'RegExp', proto: true, forced: /./.exec !== exec }, {
  exec: exec
});


/***/ }),

/***/ "5cb2":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__("bb80");
var iterateSimple = __webpack_require__("4053");
var SetHelpers = __webpack_require__("41d3");

var Set = SetHelpers.Set;
var SetPrototype = SetHelpers.proto;
var forEach = uncurryThis(SetPrototype.forEach);
var keys = uncurryThis(SetPrototype.keys);
var next = keys(new Set()).next;

module.exports = function (set, fn, interruptible) {
  return interruptible ? iterateSimple({ iterator: keys(set), next: next }, fn) : forEach(set, fn);
};


/***/ }),

/***/ "5d56":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__("bb80");
var isArray = __webpack_require__("ac5f");
var isCallable = __webpack_require__("474f");
var classof = __webpack_require__("ada5");
var toString = __webpack_require__("9e70");

var push = uncurryThis([].push);

module.exports = function (replacer) {
  if (isCallable(replacer)) return replacer;
  if (!isArray(replacer)) return;
  var rawLength = replacer.length;
  var keys = [];
  for (var i = 0; i < rawLength; i++) {
    var element = replacer[i];
    if (typeof element == 'string') push(keys, element);
    else if (typeof element == 'number' || classof(element) === 'Number' || classof(element) === 'String') push(keys, toString(element));
  }
  var keysLength = keys.length;
  var root = true;
  return function (key, value) {
    if (root) {
      root = false;
      return value;
    }
    if (isArray(this)) return value;
    for (var j = 0; j < keysLength; j++) if (keys[j] === key) return value;
  };
};


/***/ }),

/***/ "5d6e":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// FF26- bug: ArrayBuffers are non-extensible, but Object.isExtensible does not report it
var fails = __webpack_require__("af9e");

module.exports = fails(function () {
  if (typeof ArrayBuffer == 'function') {
    var buffer = new ArrayBuffer(8);
    // eslint-disable-next-line es/no-object-isextensible, es/no-object-defineproperty -- safe
    if (Object.isExtensible(buffer)) Object.defineProperty(buffer, 'a', { value: 8 });
  }
});


/***/ }),

/***/ "5d81":
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

var Node = __webpack_require__("cd6b");

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

/***/ "5dfa":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var anObject = __webpack_require__("e7e3");
var aConstructor = __webpack_require__("5ee2");
var isNullOrUndefined = __webpack_require__("1eb8");
var wellKnownSymbol = __webpack_require__("8c08");

var SPECIES = wellKnownSymbol('species');

// `SpeciesConstructor` abstract operation
// https://tc39.es/ecma262/#sec-speciesconstructor
module.exports = function (O, defaultConstructor) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || isNullOrUndefined(S = anObject(C)[SPECIES]) ? defaultConstructor : aConstructor(S);
};


/***/ }),

/***/ "5e54":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__("7ddb");
var $map = __webpack_require__("4d16").map;
var typedArraySpeciesConstructor = __webpack_require__("323c");

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.map` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.map
exportTypedArrayMethod('map', function map(mapfn /* , thisArg */) {
  return $map(aTypedArray(this), mapfn, arguments.length > 1 ? arguments[1] : undefined, function (O, length) {
    return new (typedArraySpeciesConstructor(O))(length);
  });
});


/***/ }),

/***/ "5e83":
/***/ (function(module, exports) {

module.exports = Object.assign(import('js-sha3'), { __esModule: true });;

/***/ }),

/***/ "5ee2":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var isConstructor = __webpack_require__("8ae2");
var tryToString = __webpack_require__("52df");

var $TypeError = TypeError;

// `Assert: IsConstructor(argument) is true`
module.exports = function (argument) {
  if (isConstructor(argument)) return argument;
  throw new $TypeError(tryToString(argument) + ' is not a constructor');
};


/***/ }),

/***/ "5fd3":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "5fd9":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var userAgent = __webpack_require__("29d8");

var firefox = userAgent.match(/firefox\/(\d+)/i);

module.exports = !!firefox && +firefox[1];


/***/ }),

/***/ "60bc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var aCallable = __webpack_require__("7992");
var isNullOrUndefined = __webpack_require__("1eb8");

// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
module.exports = function (V, P) {
  var func = V[P];
  return isNullOrUndefined(func) ? undefined : aCallable(func);
};


/***/ }),

/***/ "60fa":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "6158":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var bind = __webpack_require__("ae5c");
var IndexedObject = __webpack_require__("7e41");
var toObject = __webpack_require__("1099");
var lengthOfArrayLike = __webpack_require__("1fc1");

// `Array.prototype.{ findLast, findLastIndex }` methods implementation
var createMethod = function (TYPE) {
  var IS_FIND_LAST_INDEX = TYPE === 1;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IndexedObject(O);
    var index = lengthOfArrayLike(self);
    var boundFunction = bind(callbackfn, that);
    var value, result;
    while (index-- > 0) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (result) switch (TYPE) {
        case 0: return value; // findLast
        case 1: return index; // findLastIndex
      }
    }
    return IS_FIND_LAST_INDEX ? -1 : undefined;
  };
};

module.exports = {
  // `Array.prototype.findLast` method
  // https://github.com/tc39/proposal-array-find-from-last
  findLast: createMethod(0),
  // `Array.prototype.findLastIndex` method
  // https://github.com/tc39/proposal-array-find-from-last
  findLastIndex: createMethod(1)
};


/***/ }),

/***/ "6173":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "618e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountSelector_vue_vue_type_style_index_0_id_c7431aca_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("d93f");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountSelector_vue_vue_type_style_index_0_id_c7431aca_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountSelector_vue_vue_type_style_index_0_id_c7431aca_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "618f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__("ab4a");
var FUNCTION_NAME_EXISTS = __webpack_require__("8945").EXISTS;
var uncurryThis = __webpack_require__("bb80");
var defineBuiltInAccessor = __webpack_require__("e4ca");

var FunctionPrototype = Function.prototype;
var functionToString = uncurryThis(FunctionPrototype.toString);
var nameRE = /function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/;
var regExpExec = uncurryThis(nameRE.exec);
var NAME = 'name';

// Function instances `.name` property
// https://tc39.es/ecma262/#sec-function-instances-name
if (DESCRIPTORS && !FUNCTION_NAME_EXISTS) {
  defineBuiltInAccessor(FunctionPrototype, NAME, {
    configurable: true,
    get: function () {
      try {
        return regExpExec(nameRE, functionToString(this))[1];
      } catch (error) {
        return '';
      }
    }
  });
}


/***/ }),

/***/ "62f7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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

/***/ "63b1":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__("85c1");
var uncurryThis = __webpack_require__("9f69");
var fails = __webpack_require__("af9e");
var aCallable = __webpack_require__("7992");
var internalSort = __webpack_require__("b643");
var ArrayBufferViewCore = __webpack_require__("7ddb");
var FF = __webpack_require__("5fd9");
var IE_OR_EDGE = __webpack_require__("8d24");
var V8 = __webpack_require__("0173");
var WEBKIT = __webpack_require__("a700");

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
var Uint16Array = global.Uint16Array;
var nativeSort = Uint16Array && uncurryThis(Uint16Array.prototype.sort);

// WebKit
var ACCEPT_INCORRECT_ARGUMENTS = !!nativeSort && !(fails(function () {
  nativeSort(new Uint16Array(2), null);
}) && fails(function () {
  nativeSort(new Uint16Array(2), {});
}));

var STABLE_SORT = !!nativeSort && !fails(function () {
  // feature detection can be too slow, so check engines versions
  if (V8) return V8 < 74;
  if (FF) return FF < 67;
  if (IE_OR_EDGE) return true;
  if (WEBKIT) return WEBKIT < 602;

  var array = new Uint16Array(516);
  var expected = Array(516);
  var index, mod;

  for (index = 0; index < 516; index++) {
    mod = index % 4;
    array[index] = 515 - index;
    expected[index] = index - 2 * mod + 3;
  }

  nativeSort(array, function (a, b) {
    return (a / 4 | 0) - (b / 4 | 0);
  });

  for (index = 0; index < 516; index++) {
    if (array[index] !== expected[index]) return true;
  }
});

var getSortCompare = function (comparefn) {
  return function (x, y) {
    if (comparefn !== undefined) return +comparefn(x, y) || 0;
    // eslint-disable-next-line no-self-compare -- NaN check
    if (y !== y) return -1;
    // eslint-disable-next-line no-self-compare -- NaN check
    if (x !== x) return 1;
    if (x === 0 && y === 0) return 1 / x > 0 && 1 / y < 0 ? 1 : -1;
    return x > y;
  };
};

// `%TypedArray%.prototype.sort` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.sort
exportTypedArrayMethod('sort', function sort(comparefn) {
  if (comparefn !== undefined) aCallable(comparefn);
  if (STABLE_SORT) return nativeSort(this, comparefn);

  return internalSort(aTypedArray(this), getSortCompare(comparefn));
}, !STABLE_SORT || ACCEPT_INCORRECT_ARGUMENTS);


/***/ }),

/***/ "641a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__("7ddb");
var $findIndex = __webpack_require__("4d16").findIndex;

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.findIndex` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.findindex
exportTypedArrayMethod('findIndex', function findIndex(predicate /* , thisArg */) {
  return $findIndex(aTypedArray(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
});


/***/ }),

/***/ "64aa":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("8bdb");
var IS_PURE = __webpack_require__("a734");
var DESCRIPTORS = __webpack_require__("ab4a");
var global = __webpack_require__("85c1");
var path = __webpack_require__("a1d4");
var uncurryThis = __webpack_require__("bb80");
var isForced = __webpack_require__("8466");
var hasOwn = __webpack_require__("338c");
var inheritIfRequired = __webpack_require__("dcda");
var isPrototypeOf = __webpack_require__("1297");
var isSymbol = __webpack_require__("ddd3");
var toPrimitive = __webpack_require__("c215");
var fails = __webpack_require__("af9e");
var getOwnPropertyNames = __webpack_require__("80bb").f;
var getOwnPropertyDescriptor = __webpack_require__("1ded").f;
var defineProperty = __webpack_require__("d6b1").f;
var thisNumberValue = __webpack_require__("83fa");
var trim = __webpack_require__("ee98").trim;

var NUMBER = 'Number';
var NativeNumber = global[NUMBER];
var PureNumberNamespace = path[NUMBER];
var NumberPrototype = NativeNumber.prototype;
var TypeError = global.TypeError;
var stringSlice = uncurryThis(''.slice);
var charCodeAt = uncurryThis(''.charCodeAt);

// `ToNumeric` abstract operation
// https://tc39.es/ecma262/#sec-tonumeric
var toNumeric = function (value) {
  var primValue = toPrimitive(value, 'number');
  return typeof primValue == 'bigint' ? primValue : toNumber(primValue);
};

// `ToNumber` abstract operation
// https://tc39.es/ecma262/#sec-tonumber
var toNumber = function (argument) {
  var it = toPrimitive(argument, 'number');
  var first, third, radix, maxCode, digits, length, index, code;
  if (isSymbol(it)) throw new TypeError('Cannot convert a Symbol value to a number');
  if (typeof it == 'string' && it.length > 2) {
    it = trim(it);
    first = charCodeAt(it, 0);
    if (first === 43 || first === 45) {
      third = charCodeAt(it, 2);
      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if (first === 48) {
      switch (charCodeAt(it, 1)) {
        // fast equal of /^0b[01]+$/i
        case 66:
        case 98:
          radix = 2;
          maxCode = 49;
          break;
        // fast equal of /^0o[0-7]+$/i
        case 79:
        case 111:
          radix = 8;
          maxCode = 55;
          break;
        default:
          return +it;
      }
      digits = stringSlice(it, 2);
      length = digits.length;
      for (index = 0; index < length; index++) {
        code = charCodeAt(digits, index);
        // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols
        if (code < 48 || code > maxCode) return NaN;
      } return parseInt(digits, radix);
    }
  } return +it;
};

var FORCED = isForced(NUMBER, !NativeNumber(' 0o1') || !NativeNumber('0b1') || NativeNumber('+0x1'));

var calledWithNew = function (dummy) {
  // includes check on 1..constructor(foo) case
  return isPrototypeOf(NumberPrototype, dummy) && fails(function () { thisNumberValue(dummy); });
};

// `Number` constructor
// https://tc39.es/ecma262/#sec-number-constructor
var NumberWrapper = function Number(value) {
  var n = arguments.length < 1 ? 0 : NativeNumber(toNumeric(value));
  return calledWithNew(this) ? inheritIfRequired(Object(n), this, NumberWrapper) : n;
};

NumberWrapper.prototype = NumberPrototype;
if (FORCED && !IS_PURE) NumberPrototype.constructor = NumberWrapper;

$({ global: true, constructor: true, wrap: true, forced: FORCED }, {
  Number: NumberWrapper
});

// Use `internal/copy-constructor-properties` helper in `core-js@4`
var copyConstructorProperties = function (target, source) {
  for (var keys = DESCRIPTORS ? getOwnPropertyNames(source) : (
    // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
    // ES2015 (in case, if modules with ES2015 Number statics required before):
    'EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,' +
    // ESNext
    'fromString,range'
  ).split(','), j = 0, key; keys.length > j; j++) {
    if (hasOwn(source, key = keys[j]) && !hasOwn(target, key)) {
      defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
  }
};

if (IS_PURE && PureNumberNamespace) copyConstructorProperties(path[NUMBER], PureNumberNamespace);
if (FORCED || IS_PURE) copyConstructorProperties(path[NUMBER], NativeNumber);


/***/ }),

/***/ "64e0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__("7ddb");
var $findLast = __webpack_require__("6158").findLast;

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.findLast` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.findlast
exportTypedArrayMethod('findLast', function findLast(predicate /* , thisArg */) {
  return $findLast(aTypedArray(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
});


/***/ }),

/***/ "6511":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("8bdb");
var isSupersetOf = __webpack_require__("f260");
var setMethodAcceptSetLike = __webpack_require__("45bf");

// `Set.prototype.isSupersetOf` method
// https://github.com/tc39/proposal-set-methods
$({ target: 'Set', proto: true, real: true, forced: !setMethodAcceptSetLike('isSupersetOf') }, {
  isSupersetOf: isSupersetOf
});


/***/ }),

/***/ "668a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__("7ddb");
var $every = __webpack_require__("4d16").every;

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.every` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.every
exportTypedArrayMethod('every', function every(callbackfn /* , thisArg */) {
  return $every(aTypedArray(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
});


/***/ }),

/***/ "679f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__("85c1");
var fails = __webpack_require__("af9e");
var V8 = __webpack_require__("0173");
var IS_BROWSER = __webpack_require__("897c");
var IS_DENO = __webpack_require__("6b21");
var IS_NODE = __webpack_require__("db06");

var structuredClone = global.structuredClone;

module.exports = !!structuredClone && !fails(function () {
  // prevent V8 ArrayBufferDetaching protector cell invalidation and performance degradation
  // https://github.com/zloirock/core-js/issues/679
  if ((IS_DENO && V8 > 92) || (IS_NODE && V8 > 94) || (IS_BROWSER && V8 > 97)) return false;
  var buffer = new ArrayBuffer(8);
  var clone = structuredClone(buffer, { transfer: [buffer] });
  return buffer.byteLength !== 0 || clone.byteLength !== 8;
});


/***/ }),

/***/ "68cd":
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

var _helpers = __webpack_require__("f878");

var _closeBraces = __webpack_require__("c0d7");

var _closeBraces2 = _interopRequireDefault(_closeBraces);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
//# sourceMappingURL=template formatter.js.map

/***/ }),

/***/ "68fd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var classof = __webpack_require__("8e02");

module.exports = function (it) {
  var klass = classof(it);
  return klass === 'BigInt64Array' || klass === 'BigUint64Array';
};


/***/ }),

/***/ "6969":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__6969__;

/***/ }),

/***/ "6994":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("8bdb");
var NATIVE_SYMBOL = __webpack_require__("af71");
var fails = __webpack_require__("af9e");
var getOwnPropertySymbolsModule = __webpack_require__("7d3c");
var toObject = __webpack_require__("1099");

// V8 ~ Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
var FORCED = !NATIVE_SYMBOL || fails(function () { getOwnPropertySymbolsModule.f(1); });

// `Object.getOwnPropertySymbols` method
// https://tc39.es/ecma262/#sec-object.getownpropertysymbols
$({ target: 'Object', stat: true, forced: FORCED }, {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    var $getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
    return $getOwnPropertySymbols ? $getOwnPropertySymbols(toObject(it)) : [];
  }
});


/***/ }),

/***/ "69e4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__("85c1");

module.exports = global.Promise;


/***/ }),

/***/ "6a2b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toObject = __webpack_require__("1099");
var toAbsoluteIndex = __webpack_require__("e34c");
var lengthOfArrayLike = __webpack_require__("1fc1");
var deletePropertyOrThrow = __webpack_require__("a830");

var min = Math.min;

// `Array.prototype.copyWithin` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.copywithin
// eslint-disable-next-line es/no-array-prototype-copywithin -- safe
module.exports = [].copyWithin || function copyWithin(target /* = 0 */, start /* = 0, end = @length */) {
  var O = toObject(this);
  var len = lengthOfArrayLike(O);
  var to = toAbsoluteIndex(target, len);
  var from = toAbsoluteIndex(start, len);
  var end = arguments.length > 2 ? arguments[2] : undefined;
  var count = min((end === undefined ? len : toAbsoluteIndex(end, len)) - from, len - to);
  var inc = 1;
  if (from < to && to < from + count) {
    inc = -1;
    from += count - 1;
    to += count - 1;
  }
  while (count-- > 0) {
    if (from in O) O[to] = O[from];
    else deletePropertyOrThrow(O, to);
    to += inc;
    from += inc;
  } return O;
};


/***/ }),

/***/ "6a50":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("8bdb");
var global = __webpack_require__("85c1");
var call = __webpack_require__("71e9");
var DESCRIPTORS = __webpack_require__("ab4a");
var TYPED_ARRAYS_CONSTRUCTORS_REQUIRES_WRAPPERS = __webpack_require__("9839");
var ArrayBufferViewCore = __webpack_require__("7ddb");
var ArrayBufferModule = __webpack_require__("efa5");
var anInstance = __webpack_require__("b720");
var createPropertyDescriptor = __webpack_require__("0b5a");
var createNonEnumerableProperty = __webpack_require__("6aca");
var isIntegralNumber = __webpack_require__("f221");
var toLength = __webpack_require__("c435");
var toIndex = __webpack_require__("cc36");
var toOffset = __webpack_require__("1c16");
var toUint8Clamped = __webpack_require__("7df8");
var toPropertyKey = __webpack_require__("f9ed");
var hasOwn = __webpack_require__("338c");
var classof = __webpack_require__("8e02");
var isObject = __webpack_require__("1c06");
var isSymbol = __webpack_require__("ddd3");
var create = __webpack_require__("e37c");
var isPrototypeOf = __webpack_require__("1297");
var setPrototypeOf = __webpack_require__("8c4f");
var getOwnPropertyNames = __webpack_require__("80bb").f;
var typedArrayFrom = __webpack_require__("b32e");
var forEach = __webpack_require__("4d16").forEach;
var setSpecies = __webpack_require__("437f");
var defineBuiltInAccessor = __webpack_require__("e4ca");
var definePropertyModule = __webpack_require__("d6b1");
var getOwnPropertyDescriptorModule = __webpack_require__("1ded");
var arrayFromConstructorAndList = __webpack_require__("ac38");
var InternalStateModule = __webpack_require__("235c");
var inheritIfRequired = __webpack_require__("dcda");

var getInternalState = InternalStateModule.get;
var setInternalState = InternalStateModule.set;
var enforceInternalState = InternalStateModule.enforce;
var nativeDefineProperty = definePropertyModule.f;
var nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
var RangeError = global.RangeError;
var ArrayBuffer = ArrayBufferModule.ArrayBuffer;
var ArrayBufferPrototype = ArrayBuffer.prototype;
var DataView = ArrayBufferModule.DataView;
var NATIVE_ARRAY_BUFFER_VIEWS = ArrayBufferViewCore.NATIVE_ARRAY_BUFFER_VIEWS;
var TYPED_ARRAY_TAG = ArrayBufferViewCore.TYPED_ARRAY_TAG;
var TypedArray = ArrayBufferViewCore.TypedArray;
var TypedArrayPrototype = ArrayBufferViewCore.TypedArrayPrototype;
var isTypedArray = ArrayBufferViewCore.isTypedArray;
var BYTES_PER_ELEMENT = 'BYTES_PER_ELEMENT';
var WRONG_LENGTH = 'Wrong length';

var addGetter = function (it, key) {
  defineBuiltInAccessor(it, key, {
    configurable: true,
    get: function () {
      return getInternalState(this)[key];
    }
  });
};

var isArrayBuffer = function (it) {
  var klass;
  return isPrototypeOf(ArrayBufferPrototype, it) || (klass = classof(it)) === 'ArrayBuffer' || klass === 'SharedArrayBuffer';
};

var isTypedArrayIndex = function (target, key) {
  return isTypedArray(target)
    && !isSymbol(key)
    && key in target
    && isIntegralNumber(+key)
    && key >= 0;
};

var wrappedGetOwnPropertyDescriptor = function getOwnPropertyDescriptor(target, key) {
  key = toPropertyKey(key);
  return isTypedArrayIndex(target, key)
    ? createPropertyDescriptor(2, target[key])
    : nativeGetOwnPropertyDescriptor(target, key);
};

var wrappedDefineProperty = function defineProperty(target, key, descriptor) {
  key = toPropertyKey(key);
  if (isTypedArrayIndex(target, key)
    && isObject(descriptor)
    && hasOwn(descriptor, 'value')
    && !hasOwn(descriptor, 'get')
    && !hasOwn(descriptor, 'set')
    // TODO: add validation descriptor w/o calling accessors
    && !descriptor.configurable
    && (!hasOwn(descriptor, 'writable') || descriptor.writable)
    && (!hasOwn(descriptor, 'enumerable') || descriptor.enumerable)
  ) {
    target[key] = descriptor.value;
    return target;
  } return nativeDefineProperty(target, key, descriptor);
};

if (DESCRIPTORS) {
  if (!NATIVE_ARRAY_BUFFER_VIEWS) {
    getOwnPropertyDescriptorModule.f = wrappedGetOwnPropertyDescriptor;
    definePropertyModule.f = wrappedDefineProperty;
    addGetter(TypedArrayPrototype, 'buffer');
    addGetter(TypedArrayPrototype, 'byteOffset');
    addGetter(TypedArrayPrototype, 'byteLength');
    addGetter(TypedArrayPrototype, 'length');
  }

  $({ target: 'Object', stat: true, forced: !NATIVE_ARRAY_BUFFER_VIEWS }, {
    getOwnPropertyDescriptor: wrappedGetOwnPropertyDescriptor,
    defineProperty: wrappedDefineProperty
  });

  module.exports = function (TYPE, wrapper, CLAMPED) {
    var BYTES = TYPE.match(/\d+/)[0] / 8;
    var CONSTRUCTOR_NAME = TYPE + (CLAMPED ? 'Clamped' : '') + 'Array';
    var GETTER = 'get' + TYPE;
    var SETTER = 'set' + TYPE;
    var NativeTypedArrayConstructor = global[CONSTRUCTOR_NAME];
    var TypedArrayConstructor = NativeTypedArrayConstructor;
    var TypedArrayConstructorPrototype = TypedArrayConstructor && TypedArrayConstructor.prototype;
    var exported = {};

    var getter = function (that, index) {
      var data = getInternalState(that);
      return data.view[GETTER](index * BYTES + data.byteOffset, true);
    };

    var setter = function (that, index, value) {
      var data = getInternalState(that);
      data.view[SETTER](index * BYTES + data.byteOffset, CLAMPED ? toUint8Clamped(value) : value, true);
    };

    var addElement = function (that, index) {
      nativeDefineProperty(that, index, {
        get: function () {
          return getter(this, index);
        },
        set: function (value) {
          return setter(this, index, value);
        },
        enumerable: true
      });
    };

    if (!NATIVE_ARRAY_BUFFER_VIEWS) {
      TypedArrayConstructor = wrapper(function (that, data, offset, $length) {
        anInstance(that, TypedArrayConstructorPrototype);
        var index = 0;
        var byteOffset = 0;
        var buffer, byteLength, length;
        if (!isObject(data)) {
          length = toIndex(data);
          byteLength = length * BYTES;
          buffer = new ArrayBuffer(byteLength);
        } else if (isArrayBuffer(data)) {
          buffer = data;
          byteOffset = toOffset(offset, BYTES);
          var $len = data.byteLength;
          if ($length === undefined) {
            if ($len % BYTES) throw new RangeError(WRONG_LENGTH);
            byteLength = $len - byteOffset;
            if (byteLength < 0) throw new RangeError(WRONG_LENGTH);
          } else {
            byteLength = toLength($length) * BYTES;
            if (byteLength + byteOffset > $len) throw new RangeError(WRONG_LENGTH);
          }
          length = byteLength / BYTES;
        } else if (isTypedArray(data)) {
          return arrayFromConstructorAndList(TypedArrayConstructor, data);
        } else {
          return call(typedArrayFrom, TypedArrayConstructor, data);
        }
        setInternalState(that, {
          buffer: buffer,
          byteOffset: byteOffset,
          byteLength: byteLength,
          length: length,
          view: new DataView(buffer)
        });
        while (index < length) addElement(that, index++);
      });

      if (setPrototypeOf) setPrototypeOf(TypedArrayConstructor, TypedArray);
      TypedArrayConstructorPrototype = TypedArrayConstructor.prototype = create(TypedArrayPrototype);
    } else if (TYPED_ARRAYS_CONSTRUCTORS_REQUIRES_WRAPPERS) {
      TypedArrayConstructor = wrapper(function (dummy, data, typedArrayOffset, $length) {
        anInstance(dummy, TypedArrayConstructorPrototype);
        return inheritIfRequired(function () {
          if (!isObject(data)) return new NativeTypedArrayConstructor(toIndex(data));
          if (isArrayBuffer(data)) return $length !== undefined
            ? new NativeTypedArrayConstructor(data, toOffset(typedArrayOffset, BYTES), $length)
            : typedArrayOffset !== undefined
              ? new NativeTypedArrayConstructor(data, toOffset(typedArrayOffset, BYTES))
              : new NativeTypedArrayConstructor(data);
          if (isTypedArray(data)) return arrayFromConstructorAndList(TypedArrayConstructor, data);
          return call(typedArrayFrom, TypedArrayConstructor, data);
        }(), dummy, TypedArrayConstructor);
      });

      if (setPrototypeOf) setPrototypeOf(TypedArrayConstructor, TypedArray);
      forEach(getOwnPropertyNames(NativeTypedArrayConstructor), function (key) {
        if (!(key in TypedArrayConstructor)) {
          createNonEnumerableProperty(TypedArrayConstructor, key, NativeTypedArrayConstructor[key]);
        }
      });
      TypedArrayConstructor.prototype = TypedArrayConstructorPrototype;
    }

    if (TypedArrayConstructorPrototype.constructor !== TypedArrayConstructor) {
      createNonEnumerableProperty(TypedArrayConstructorPrototype, 'constructor', TypedArrayConstructor);
    }

    enforceInternalState(TypedArrayConstructorPrototype).TypedArrayConstructor = TypedArrayConstructor;

    if (TYPED_ARRAY_TAG) {
      createNonEnumerableProperty(TypedArrayConstructorPrototype, TYPED_ARRAY_TAG, CONSTRUCTOR_NAME);
    }

    var FORCED = TypedArrayConstructor !== NativeTypedArrayConstructor;

    exported[CONSTRUCTOR_NAME] = TypedArrayConstructor;

    $({ global: true, constructor: true, forced: FORCED, sham: !NATIVE_ARRAY_BUFFER_VIEWS }, exported);

    if (!(BYTES_PER_ELEMENT in TypedArrayConstructor)) {
      createNonEnumerableProperty(TypedArrayConstructor, BYTES_PER_ELEMENT, BYTES);
    }

    if (!(BYTES_PER_ELEMENT in TypedArrayConstructorPrototype)) {
      createNonEnumerableProperty(TypedArrayConstructorPrototype, BYTES_PER_ELEMENT, BYTES);
    }

    setSpecies(CONSTRUCTOR_NAME);
  };
} else module.exports = function () { /* empty */ };


/***/ }),

/***/ "6a88":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("8bdb");
var getBuiltIn = __webpack_require__("6aa6");
var apply = __webpack_require__("9f9e");
var bind = __webpack_require__("8598");
var aConstructor = __webpack_require__("5ee2");
var anObject = __webpack_require__("e7e3");
var isObject = __webpack_require__("1c06");
var create = __webpack_require__("e37c");
var fails = __webpack_require__("af9e");

var nativeConstruct = getBuiltIn('Reflect', 'construct');
var ObjectPrototype = Object.prototype;
var push = [].push;

// `Reflect.construct` method
// https://tc39.es/ecma262/#sec-reflect.construct
// MS Edge supports only 2 arguments and argumentsList argument is optional
// FF Nightly sets third argument as `new.target`, but does not create `this` from it
var NEW_TARGET_BUG = fails(function () {
  function F() { /* empty */ }
  return !(nativeConstruct(function () { /* empty */ }, [], F) instanceof F);
});

var ARGS_BUG = !fails(function () {
  nativeConstruct(function () { /* empty */ });
});

var FORCED = NEW_TARGET_BUG || ARGS_BUG;

$({ target: 'Reflect', stat: true, forced: FORCED, sham: FORCED }, {
  construct: function construct(Target, args /* , newTarget */) {
    aConstructor(Target);
    anObject(args);
    var newTarget = arguments.length < 3 ? Target : aConstructor(arguments[2]);
    if (ARGS_BUG && !NEW_TARGET_BUG) return nativeConstruct(Target, args, newTarget);
    if (Target === newTarget) {
      // w/o altered newTarget, optimization for 0-4 arguments
      switch (args.length) {
        case 0: return new Target();
        case 1: return new Target(args[0]);
        case 2: return new Target(args[0], args[1]);
        case 3: return new Target(args[0], args[1], args[2]);
        case 4: return new Target(args[0], args[1], args[2], args[3]);
      }
      // w/o altered newTarget, lot of arguments case
      var $args = [null];
      apply(push, $args, args);
      return new (apply(bind, Target, $args))();
    }
    // with altered newTarget, not support built-in constructors
    var proto = newTarget.prototype;
    var instance = create(isObject(proto) ? proto : ObjectPrototype);
    var result = apply(Target, instance, args);
    return isObject(result) ? result : instance;
  }
});


/***/ }),

/***/ "6aa6":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__("85c1");
var isCallable = __webpack_require__("474f");

var aFunction = function (argument) {
  return isCallable(argument) ? argument : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(global[namespace]) : global[namespace] && global[namespace][method];
};


/***/ }),

/***/ "6ac9":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var getBuiltIn = __webpack_require__("6aa6");
var uncurryThis = __webpack_require__("bb80");
var getOwnPropertyNamesModule = __webpack_require__("80bb");
var getOwnPropertySymbolsModule = __webpack_require__("7d3c");
var anObject = __webpack_require__("e7e3");

var concat = uncurryThis([].concat);

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
};


/***/ }),

/***/ "6aca":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__("ab4a");
var definePropertyModule = __webpack_require__("d6b1");
var createPropertyDescriptor = __webpack_require__("0b5a");

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "6b21":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* global Deno -- Deno case */
module.exports = typeof Deno == 'object' && Deno && typeof Deno.version == 'object';


/***/ }),

/***/ "6bfa":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toIndexedObject = __webpack_require__("f660");
var addToUnscopables = __webpack_require__("1cb5");
var Iterators = __webpack_require__("799d");
var InternalStateModule = __webpack_require__("235c");
var defineProperty = __webpack_require__("d6b1").f;
var defineIterator = __webpack_require__("0cc2");
var createIterResultObject = __webpack_require__("97ed");
var IS_PURE = __webpack_require__("a734");
var DESCRIPTORS = __webpack_require__("ab4a");

var ARRAY_ITERATOR = 'Array Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);

// `Array.prototype.entries` method
// https://tc39.es/ecma262/#sec-array.prototype.entries
// `Array.prototype.keys` method
// https://tc39.es/ecma262/#sec-array.prototype.keys
// `Array.prototype.values` method
// https://tc39.es/ecma262/#sec-array.prototype.values
// `Array.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-array.prototype-@@iterator
// `CreateArrayIterator` internal method
// https://tc39.es/ecma262/#sec-createarrayiterator
module.exports = defineIterator(Array, 'Array', function (iterated, kind) {
  setInternalState(this, {
    type: ARRAY_ITERATOR,
    target: toIndexedObject(iterated), // target
    index: 0,                          // next index
    kind: kind                         // kind
  });
// `%ArrayIteratorPrototype%.next` method
// https://tc39.es/ecma262/#sec-%arrayiteratorprototype%.next
}, function () {
  var state = getInternalState(this);
  var target = state.target;
  var index = state.index++;
  if (!target || index >= target.length) {
    state.target = undefined;
    return createIterResultObject(undefined, true);
  }
  switch (state.kind) {
    case 'keys': return createIterResultObject(index, false);
    case 'values': return createIterResultObject(target[index], false);
  } return createIterResultObject([index, target[index]], false);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values%
// https://tc39.es/ecma262/#sec-createunmappedargumentsobject
// https://tc39.es/ecma262/#sec-createmappedargumentsobject
var values = Iterators.Arguments = Iterators.Array;

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

// V8 ~ Chrome 45- bug
if (!IS_PURE && DESCRIPTORS && values.name !== 'values') try {
  defineProperty(values, 'name', { value: 'values' });
} catch (error) { /* empty */ }


/***/ }),

/***/ "6dd0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountList_vue_vue_type_style_index_0_id_4a1e75b7_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("73a5");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountList_vue_vue_type_style_index_0_id_4a1e75b7_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountList_vue_vue_type_style_index_0_id_4a1e75b7_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "7054":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var anObject = __webpack_require__("e7e3");
var ordinaryToPrimitive = __webpack_require__("df92");

var $TypeError = TypeError;

// `Date.prototype[@@toPrimitive](hint)` method implementation
// https://tc39.es/ecma262/#sec-date.prototype-@@toprimitive
module.exports = function (hint) {
  anObject(this);
  if (hint === 'string' || hint === 'default') hint = 'string';
  else if (hint !== 'number') throw new $TypeError('Incorrect hint');
  return ordinaryToPrimitive(this, hint);
};


/***/ }),

/***/ "70da":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var aSet = __webpack_require__("7a0a");
var SetHelpers = __webpack_require__("41d3");
var clone = __webpack_require__("7611");
var size = __webpack_require__("19fa");
var getSetRecord = __webpack_require__("c108");
var iterateSet = __webpack_require__("5cb2");
var iterateSimple = __webpack_require__("4053");

var has = SetHelpers.has;
var remove = SetHelpers.remove;

// `Set.prototype.difference` method
// https://github.com/tc39/proposal-set-methods
module.exports = function difference(other) {
  var O = aSet(this);
  var otherRec = getSetRecord(other);
  var result = clone(O);
  if (size(O) <= otherRec.size) iterateSet(O, function (e) {
    if (otherRec.includes(e)) remove(result, e);
  });
  else iterateSimple(otherRec.getIterator(), function (e) {
    if (has(O, e)) remove(result, e);
  });
  return result;
};


/***/ }),

/***/ "71e9":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var NATIVE_BIND = __webpack_require__("8f26");

var call = Function.prototype.call;

module.exports = NATIVE_BIND ? call.bind(call) : function () {
  return call.apply(call, arguments);
};


/***/ }),

/***/ "7200":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("8bdb");
var isIntegralNumber = __webpack_require__("f221");

// `Number.isInteger` method
// https://tc39.es/ecma262/#sec-number.isinteger
$({ target: 'Number', stat: true }, {
  isInteger: isIntegralNumber
});


/***/ }),

/***/ "7257":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var IS_NODE = __webpack_require__("db06");

module.exports = function (name) {
  try {
    // eslint-disable-next-line no-new-func -- safe
    if (IS_NODE) return Function('return require("' + name + '")')();
  } catch (error) { /* empty */ }
};


/***/ }),

/***/ "73a5":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "73e1":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/zloirock/core-js/issues/280
var userAgent = __webpack_require__("29d8");

module.exports = /Version\/10(?:\.\d+){1,2}(?: [\w./]+)?(?: Mobile\/\w+)? Safari\//.test(userAgent);


/***/ }),

/***/ "7451":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = format;

var _templateFormatter = __webpack_require__("68cd");

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

/***/ "7611":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var SetHelpers = __webpack_require__("41d3");
var iterate = __webpack_require__("5cb2");

var Set = SetHelpers.Set;
var add = SetHelpers.add;

module.exports = function (set) {
  var result = new Set();
  iterate(set, function (it) {
    add(result, it);
  });
  return result;
};


/***/ }),

/***/ "7658":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("8bdb");
var global = __webpack_require__("85c1");
var uncurryThis = __webpack_require__("bb80");
var isForced = __webpack_require__("8466");
var defineBuiltIn = __webpack_require__("81a9");
var InternalMetadataModule = __webpack_require__("d0b1");
var iterate = __webpack_require__("5075");
var anInstance = __webpack_require__("b720");
var isCallable = __webpack_require__("474f");
var isNullOrUndefined = __webpack_require__("1eb8");
var isObject = __webpack_require__("1c06");
var fails = __webpack_require__("af9e");
var checkCorrectnessOfIteration = __webpack_require__("29ba");
var setToStringTag = __webpack_require__("181d");
var inheritIfRequired = __webpack_require__("dcda");

module.exports = function (CONSTRUCTOR_NAME, wrapper, common) {
  var IS_MAP = CONSTRUCTOR_NAME.indexOf('Map') !== -1;
  var IS_WEAK = CONSTRUCTOR_NAME.indexOf('Weak') !== -1;
  var ADDER = IS_MAP ? 'set' : 'add';
  var NativeConstructor = global[CONSTRUCTOR_NAME];
  var NativePrototype = NativeConstructor && NativeConstructor.prototype;
  var Constructor = NativeConstructor;
  var exported = {};

  var fixMethod = function (KEY) {
    var uncurriedNativeMethod = uncurryThis(NativePrototype[KEY]);
    defineBuiltIn(NativePrototype, KEY,
      KEY === 'add' ? function add(value) {
        uncurriedNativeMethod(this, value === 0 ? 0 : value);
        return this;
      } : KEY === 'delete' ? function (key) {
        return IS_WEAK && !isObject(key) ? false : uncurriedNativeMethod(this, key === 0 ? 0 : key);
      } : KEY === 'get' ? function get(key) {
        return IS_WEAK && !isObject(key) ? undefined : uncurriedNativeMethod(this, key === 0 ? 0 : key);
      } : KEY === 'has' ? function has(key) {
        return IS_WEAK && !isObject(key) ? false : uncurriedNativeMethod(this, key === 0 ? 0 : key);
      } : function set(key, value) {
        uncurriedNativeMethod(this, key === 0 ? 0 : key, value);
        return this;
      }
    );
  };

  var REPLACE = isForced(
    CONSTRUCTOR_NAME,
    !isCallable(NativeConstructor) || !(IS_WEAK || NativePrototype.forEach && !fails(function () {
      new NativeConstructor().entries().next();
    }))
  );

  if (REPLACE) {
    // create collection constructor
    Constructor = common.getConstructor(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER);
    InternalMetadataModule.enable();
  } else if (isForced(CONSTRUCTOR_NAME, true)) {
    var instance = new Constructor();
    // early implementations not supports chaining
    var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) !== instance;
    // V8 ~ Chromium 40- weak-collections throws on primitives, but should return false
    var THROWS_ON_PRIMITIVES = fails(function () { instance.has(1); });
    // most early implementations doesn't supports iterables, most modern - not close it correctly
    // eslint-disable-next-line no-new -- required for testing
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
        anInstance(dummy, NativePrototype);
        var that = inheritIfRequired(new NativeConstructor(), dummy, Constructor);
        if (!isNullOrUndefined(iterable)) iterate(iterable, that[ADDER], { that: that, AS_ENTRIES: IS_MAP });
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
  $({ global: true, constructor: true, forced: Constructor !== NativeConstructor }, exported);

  setToStringTag(Constructor, CONSTRUCTOR_NAME);

  if (!IS_WEAK) common.setStrong(Constructor, CONSTRUCTOR_NAME, IS_MAP);

  return Constructor;
};


/***/ }),

/***/ "77dd":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Copyable_vue_vue_type_style_index_0_id_026c8086_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("60fa");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Copyable_vue_vue_type_style_index_0_id_026c8086_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Copyable_vue_vue_type_style_index_0_id_026c8086_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "7934":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var TO_STRING_TAG_SUPPORT = __webpack_require__("569b");
var classof = __webpack_require__("8e02");

// `Object.prototype.toString` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.tostring
module.exports = TO_STRING_TAG_SUPPORT ? {}.toString : function toString() {
  return '[object ' + classof(this) + ']';
};


/***/ }),

/***/ "795c":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("8bdb");
var $padStart = __webpack_require__("db04").start;
var WEBKIT_BUG = __webpack_require__("73e1");

// `String.prototype.padStart` method
// https://tc39.es/ecma262/#sec-string.prototype.padstart
$({ target: 'String', proto: true, forced: WEBKIT_BUG }, {
  padStart: function padStart(maxLength /* , fillString = ' ' */) {
    return $padStart(this, maxLength, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "7992":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var isCallable = __webpack_require__("474f");
var tryToString = __webpack_require__("52df");

var $TypeError = TypeError;

// `Assert: IsCallable(argument) is true`
module.exports = function (argument) {
  if (isCallable(argument)) return argument;
  throw new $TypeError(tryToString(argument) + ' is not a function');
};


/***/ }),

/***/ "799d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = {};


/***/ }),

/***/ "7a0a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var has = __webpack_require__("41d3").has;

// Perform ? RequireInternalSlot(M, [[SetData]])
module.exports = function (it) {
  has(it);
  return it;
};


/***/ }),

/***/ "7a76":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* eslint-disable no-unused-vars -- required for functions `.length` */
var $ = __webpack_require__("8bdb");
var global = __webpack_require__("85c1");
var apply = __webpack_require__("9f9e");
var wrapErrorConstructorWithCause = __webpack_require__("175f");

var WEB_ASSEMBLY = 'WebAssembly';
var WebAssembly = global[WEB_ASSEMBLY];

// eslint-disable-next-line es/no-error-cause -- feature detection
var FORCED = new Error('e', { cause: 7 }).cause !== 7;

var exportGlobalErrorCauseWrapper = function (ERROR_NAME, wrapper) {
  var O = {};
  O[ERROR_NAME] = wrapErrorConstructorWithCause(ERROR_NAME, wrapper, FORCED);
  $({ global: true, constructor: true, arity: 1, forced: FORCED }, O);
};

var exportWebAssemblyErrorCauseWrapper = function (ERROR_NAME, wrapper) {
  if (WebAssembly && WebAssembly[ERROR_NAME]) {
    var O = {};
    O[ERROR_NAME] = wrapErrorConstructorWithCause(WEB_ASSEMBLY + '.' + ERROR_NAME, wrapper, FORCED);
    $({ target: WEB_ASSEMBLY, stat: true, constructor: true, arity: 1, forced: FORCED }, O);
  }
};

// https://tc39.es/ecma262/#sec-nativeerror
exportGlobalErrorCauseWrapper('Error', function (init) {
  return function Error(message) { return apply(init, this, arguments); };
});
exportGlobalErrorCauseWrapper('EvalError', function (init) {
  return function EvalError(message) { return apply(init, this, arguments); };
});
exportGlobalErrorCauseWrapper('RangeError', function (init) {
  return function RangeError(message) { return apply(init, this, arguments); };
});
exportGlobalErrorCauseWrapper('ReferenceError', function (init) {
  return function ReferenceError(message) { return apply(init, this, arguments); };
});
exportGlobalErrorCauseWrapper('SyntaxError', function (init) {
  return function SyntaxError(message) { return apply(init, this, arguments); };
});
exportGlobalErrorCauseWrapper('TypeError', function (init) {
  return function TypeError(message) { return apply(init, this, arguments); };
});
exportGlobalErrorCauseWrapper('URIError', function (init) {
  return function URIError(message) { return apply(init, this, arguments); };
});
exportWebAssemblyErrorCauseWrapper('CompileError', function (init) {
  return function CompileError(message) { return apply(init, this, arguments); };
});
exportWebAssemblyErrorCauseWrapper('LinkError', function (init) {
  return function LinkError(message) { return apply(init, this, arguments); };
});
exportWebAssemblyErrorCauseWrapper('RuntimeError', function (init) {
  return function RuntimeError(message) { return apply(init, this, arguments); };
});


/***/ }),

/***/ "7b83":
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

/***/ "7b97":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__("bb80");
var ArrayBufferViewCore = __webpack_require__("7ddb");
var $ArrayCopyWithin = __webpack_require__("6a2b");

var u$ArrayCopyWithin = uncurryThis($ArrayCopyWithin);
var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.copyWithin` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.copywithin
exportTypedArrayMethod('copyWithin', function copyWithin(target, start /* , end */) {
  return u$ArrayCopyWithin(aTypedArray(this), target, start, arguments.length > 2 ? arguments[2] : undefined);
});


/***/ }),

/***/ "7d2f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__("ab4a");
var UNSUPPORTED_DOT_ALL = __webpack_require__("b0a8");
var classof = __webpack_require__("ada5");
var defineBuiltInAccessor = __webpack_require__("e4ca");
var getInternalState = __webpack_require__("235c").get;

var RegExpPrototype = RegExp.prototype;
var $TypeError = TypeError;

// `RegExp.prototype.dotAll` getter
// https://tc39.es/ecma262/#sec-get-regexp.prototype.dotall
if (DESCRIPTORS && UNSUPPORTED_DOT_ALL) {
  defineBuiltInAccessor(RegExpPrototype, 'dotAll', {
    configurable: true,
    get: function dotAll() {
      if (this === RegExpPrototype) return;
      // We can't use InternalStateModule.getterFor because
      // we don't add metadata for regexps created by a literal.
      if (classof(this) === 'RegExp') {
        return !!getInternalState(this).dotAll;
      }
      throw new $TypeError('Incompatible receiver, RegExp required');
    }
  });
}


/***/ }),

/***/ "7d3c":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "7ddb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var NATIVE_ARRAY_BUFFER = __webpack_require__("c89b");
var DESCRIPTORS = __webpack_require__("ab4a");
var global = __webpack_require__("85c1");
var isCallable = __webpack_require__("474f");
var isObject = __webpack_require__("1c06");
var hasOwn = __webpack_require__("338c");
var classof = __webpack_require__("8e02");
var tryToString = __webpack_require__("52df");
var createNonEnumerableProperty = __webpack_require__("6aca");
var defineBuiltIn = __webpack_require__("81a9");
var defineBuiltInAccessor = __webpack_require__("e4ca");
var isPrototypeOf = __webpack_require__("1297");
var getPrototypeOf = __webpack_require__("c337");
var setPrototypeOf = __webpack_require__("8c4f");
var wellKnownSymbol = __webpack_require__("8c08");
var uid = __webpack_require__("d7b4");
var InternalStateModule = __webpack_require__("235c");

var enforceInternalState = InternalStateModule.enforce;
var getInternalState = InternalStateModule.get;
var Int8Array = global.Int8Array;
var Int8ArrayPrototype = Int8Array && Int8Array.prototype;
var Uint8ClampedArray = global.Uint8ClampedArray;
var Uint8ClampedArrayPrototype = Uint8ClampedArray && Uint8ClampedArray.prototype;
var TypedArray = Int8Array && getPrototypeOf(Int8Array);
var TypedArrayPrototype = Int8ArrayPrototype && getPrototypeOf(Int8ArrayPrototype);
var ObjectPrototype = Object.prototype;
var TypeError = global.TypeError;

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var TYPED_ARRAY_TAG = uid('TYPED_ARRAY_TAG');
var TYPED_ARRAY_CONSTRUCTOR = 'TypedArrayConstructor';
// Fixing native typed arrays in Opera Presto crashes the browser, see #595
var NATIVE_ARRAY_BUFFER_VIEWS = NATIVE_ARRAY_BUFFER && !!setPrototypeOf && classof(global.opera) !== 'Opera';
var TYPED_ARRAY_TAG_REQUIRED = false;
var NAME, Constructor, Prototype;

var TypedArrayConstructorsList = {
  Int8Array: 1,
  Uint8Array: 1,
  Uint8ClampedArray: 1,
  Int16Array: 2,
  Uint16Array: 2,
  Int32Array: 4,
  Uint32Array: 4,
  Float32Array: 4,
  Float64Array: 8
};

var BigIntArrayConstructorsList = {
  BigInt64Array: 8,
  BigUint64Array: 8
};

var isView = function isView(it) {
  if (!isObject(it)) return false;
  var klass = classof(it);
  return klass === 'DataView'
    || hasOwn(TypedArrayConstructorsList, klass)
    || hasOwn(BigIntArrayConstructorsList, klass);
};

var getTypedArrayConstructor = function (it) {
  var proto = getPrototypeOf(it);
  if (!isObject(proto)) return;
  var state = getInternalState(proto);
  return (state && hasOwn(state, TYPED_ARRAY_CONSTRUCTOR)) ? state[TYPED_ARRAY_CONSTRUCTOR] : getTypedArrayConstructor(proto);
};

var isTypedArray = function (it) {
  if (!isObject(it)) return false;
  var klass = classof(it);
  return hasOwn(TypedArrayConstructorsList, klass)
    || hasOwn(BigIntArrayConstructorsList, klass);
};

var aTypedArray = function (it) {
  if (isTypedArray(it)) return it;
  throw new TypeError('Target is not a typed array');
};

var aTypedArrayConstructor = function (C) {
  if (isCallable(C) && (!setPrototypeOf || isPrototypeOf(TypedArray, C))) return C;
  throw new TypeError(tryToString(C) + ' is not a typed array constructor');
};

var exportTypedArrayMethod = function (KEY, property, forced, options) {
  if (!DESCRIPTORS) return;
  if (forced) for (var ARRAY in TypedArrayConstructorsList) {
    var TypedArrayConstructor = global[ARRAY];
    if (TypedArrayConstructor && hasOwn(TypedArrayConstructor.prototype, KEY)) try {
      delete TypedArrayConstructor.prototype[KEY];
    } catch (error) {
      // old WebKit bug - some methods are non-configurable
      try {
        TypedArrayConstructor.prototype[KEY] = property;
      } catch (error2) { /* empty */ }
    }
  }
  if (!TypedArrayPrototype[KEY] || forced) {
    defineBuiltIn(TypedArrayPrototype, KEY, forced ? property
      : NATIVE_ARRAY_BUFFER_VIEWS && Int8ArrayPrototype[KEY] || property, options);
  }
};

var exportTypedArrayStaticMethod = function (KEY, property, forced) {
  var ARRAY, TypedArrayConstructor;
  if (!DESCRIPTORS) return;
  if (setPrototypeOf) {
    if (forced) for (ARRAY in TypedArrayConstructorsList) {
      TypedArrayConstructor = global[ARRAY];
      if (TypedArrayConstructor && hasOwn(TypedArrayConstructor, KEY)) try {
        delete TypedArrayConstructor[KEY];
      } catch (error) { /* empty */ }
    }
    if (!TypedArray[KEY] || forced) {
      // V8 ~ Chrome 49-50 `%TypedArray%` methods are non-writable non-configurable
      try {
        return defineBuiltIn(TypedArray, KEY, forced ? property : NATIVE_ARRAY_BUFFER_VIEWS && TypedArray[KEY] || property);
      } catch (error) { /* empty */ }
    } else return;
  }
  for (ARRAY in TypedArrayConstructorsList) {
    TypedArrayConstructor = global[ARRAY];
    if (TypedArrayConstructor && (!TypedArrayConstructor[KEY] || forced)) {
      defineBuiltIn(TypedArrayConstructor, KEY, property);
    }
  }
};

for (NAME in TypedArrayConstructorsList) {
  Constructor = global[NAME];
  Prototype = Constructor && Constructor.prototype;
  if (Prototype) enforceInternalState(Prototype)[TYPED_ARRAY_CONSTRUCTOR] = Constructor;
  else NATIVE_ARRAY_BUFFER_VIEWS = false;
}

for (NAME in BigIntArrayConstructorsList) {
  Constructor = global[NAME];
  Prototype = Constructor && Constructor.prototype;
  if (Prototype) enforceInternalState(Prototype)[TYPED_ARRAY_CONSTRUCTOR] = Constructor;
}

// WebKit bug - typed arrays constructors prototype is Object.prototype
if (!NATIVE_ARRAY_BUFFER_VIEWS || !isCallable(TypedArray) || TypedArray === Function.prototype) {
  // eslint-disable-next-line no-shadow -- safe
  TypedArray = function TypedArray() {
    throw new TypeError('Incorrect invocation');
  };
  if (NATIVE_ARRAY_BUFFER_VIEWS) for (NAME in TypedArrayConstructorsList) {
    if (global[NAME]) setPrototypeOf(global[NAME], TypedArray);
  }
}

if (!NATIVE_ARRAY_BUFFER_VIEWS || !TypedArrayPrototype || TypedArrayPrototype === ObjectPrototype) {
  TypedArrayPrototype = TypedArray.prototype;
  if (NATIVE_ARRAY_BUFFER_VIEWS) for (NAME in TypedArrayConstructorsList) {
    if (global[NAME]) setPrototypeOf(global[NAME].prototype, TypedArrayPrototype);
  }
}

// WebKit bug - one more object in Uint8ClampedArray prototype chain
if (NATIVE_ARRAY_BUFFER_VIEWS && getPrototypeOf(Uint8ClampedArrayPrototype) !== TypedArrayPrototype) {
  setPrototypeOf(Uint8ClampedArrayPrototype, TypedArrayPrototype);
}

if (DESCRIPTORS && !hasOwn(TypedArrayPrototype, TO_STRING_TAG)) {
  TYPED_ARRAY_TAG_REQUIRED = true;
  defineBuiltInAccessor(TypedArrayPrototype, TO_STRING_TAG, {
    configurable: true,
    get: function () {
      return isObject(this) ? this[TYPED_ARRAY_TAG] : undefined;
    }
  });
  for (NAME in TypedArrayConstructorsList) if (global[NAME]) {
    createNonEnumerableProperty(global[NAME], TYPED_ARRAY_TAG, NAME);
  }
}

module.exports = {
  NATIVE_ARRAY_BUFFER_VIEWS: NATIVE_ARRAY_BUFFER_VIEWS,
  TYPED_ARRAY_TAG: TYPED_ARRAY_TAG_REQUIRED && TYPED_ARRAY_TAG,
  aTypedArray: aTypedArray,
  aTypedArrayConstructor: aTypedArrayConstructor,
  exportTypedArrayMethod: exportTypedArrayMethod,
  exportTypedArrayStaticMethod: exportTypedArrayStaticMethod,
  getTypedArrayConstructor: getTypedArrayConstructor,
  isView: isView,
  isTypedArray: isTypedArray,
  TypedArray: TypedArray,
  TypedArrayPrototype: TypedArrayPrototype
};


/***/ }),

/***/ "7df8":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var round = Math.round;

module.exports = function (it) {
  var value = round(it);
  return value < 0 ? 0 : value > 0xFF ? 0xFF : value & 0xFF;
};


/***/ }),

/***/ "7e41":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__("bb80");
var fails = __webpack_require__("af9e");
var classof = __webpack_require__("ada5");

var $Object = Object;
var split = uncurryThis(''.split);

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !$Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) === 'String' ? split(it, '') : $Object(it);
} : $Object;


/***/ }),

/***/ "7e87":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__("bb80");

var $Error = Error;
var replace = uncurryThis(''.replace);

var TEST = (function (arg) { return String(new $Error(arg).stack); })('zxcasd');
// eslint-disable-next-line redos/no-vulnerable -- safe
var V8_OR_CHAKRA_STACK_ENTRY = /\n\s*at [^:]*:[^\n]*/;
var IS_V8_OR_CHAKRA_STACK = V8_OR_CHAKRA_STACK_ENTRY.test(TEST);

module.exports = function (stack, dropEntries) {
  if (IS_V8_OR_CHAKRA_STACK && typeof stack == 'string' && !$Error.prepareStackTrace) {
    while (dropEntries--) stack = replace(stack, V8_OR_CHAKRA_STACK_ENTRY, '');
  } return stack;
};


/***/ }),

/***/ "7e91":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var call = __webpack_require__("71e9");
var anObject = __webpack_require__("e7e3");
var getMethod = __webpack_require__("60bc");

module.exports = function (iterator, kind, value) {
  var innerResult, innerError;
  anObject(iterator);
  try {
    innerResult = getMethod(iterator, 'return');
    if (!innerResult) {
      if (kind === 'throw') throw value;
      return value;
    }
    innerResult = call(innerResult, iterator);
  } catch (error) {
    innerError = true;
    innerResult = error;
  }
  if (kind === 'throw') throw value;
  if (innerError) throw innerResult;
  anObject(innerResult);
  return value;
};


/***/ }),

/***/ "7edc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// TODO: Remove from `core-js@4` since it's moved to entry points
__webpack_require__("5c47");
var call = __webpack_require__("71e9");
var defineBuiltIn = __webpack_require__("81a9");
var regexpExec = __webpack_require__("9ad8");
var fails = __webpack_require__("af9e");
var wellKnownSymbol = __webpack_require__("8c08");
var createNonEnumerableProperty = __webpack_require__("6aca");

var SPECIES = wellKnownSymbol('species');
var RegExpPrototype = RegExp.prototype;

module.exports = function (KEY, exec, FORCED, SHAM) {
  var SYMBOL = wellKnownSymbol(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegExp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) !== 7;
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

    re.exec = function () {
      execCalled = true;
      return null;
    };

    re[SYMBOL]('');
    return !execCalled;
  });

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    FORCED
  ) {
    var nativeRegExpMethod = /./[SYMBOL];
    var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
      var $exec = regexp.exec;
      if ($exec === regexpExec || $exec === RegExpPrototype.exec) {
        if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
          // The native String method already delegates to @@method (this
          // polyfilled function), leasing to infinite recursion.
          // We avoid it by directly calling the native @@method method.
          return { done: true, value: call(nativeRegExpMethod, regexp, str, arg2) };
        }
        return { done: true, value: call(nativeMethod, str, regexp, arg2) };
      }
      return { done: false };
    });

    defineBuiltIn(String.prototype, KEY, methods[0]);
    defineBuiltIn(RegExpPrototype, SYMBOL, methods[1]);
  }

  if (SHAM) createNonEnumerableProperty(RegExpPrototype[SYMBOL], 'sham', true);
};


/***/ }),

/***/ "7edd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__("85c1");
var fails = __webpack_require__("af9e");
var uncurryThis = __webpack_require__("bb80");
var ArrayBufferViewCore = __webpack_require__("7ddb");
var ArrayIterators = __webpack_require__("6bfa");
var wellKnownSymbol = __webpack_require__("8c08");

var ITERATOR = wellKnownSymbol('iterator');
var Uint8Array = global.Uint8Array;
var arrayValues = uncurryThis(ArrayIterators.values);
var arrayKeys = uncurryThis(ArrayIterators.keys);
var arrayEntries = uncurryThis(ArrayIterators.entries);
var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
var TypedArrayPrototype = Uint8Array && Uint8Array.prototype;

var GENERIC = !fails(function () {
  TypedArrayPrototype[ITERATOR].call([1]);
});

var ITERATOR_IS_VALUES = !!TypedArrayPrototype
  && TypedArrayPrototype.values
  && TypedArrayPrototype[ITERATOR] === TypedArrayPrototype.values
  && TypedArrayPrototype.values.name === 'values';

var typedArrayValues = function values() {
  return arrayValues(aTypedArray(this));
};

// `%TypedArray%.prototype.entries` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.entries
exportTypedArrayMethod('entries', function entries() {
  return arrayEntries(aTypedArray(this));
}, GENERIC);
// `%TypedArray%.prototype.keys` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.keys
exportTypedArrayMethod('keys', function keys() {
  return arrayKeys(aTypedArray(this));
}, GENERIC);
// `%TypedArray%.prototype.values` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.values
exportTypedArrayMethod('values', typedArrayValues, GENERIC || !ITERATOR_IS_VALUES, { name: 'values' });
// `%TypedArray%.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype-@@iterator
exportTypedArrayMethod(ITERATOR, typedArrayValues, GENERIC || !ITERATOR_IS_VALUES, { name: 'values' });


/***/ }),

/***/ "7f28":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $TypeError = TypeError;

module.exports = function (passed, required) {
  if (passed < required) throw new $TypeError('Not enough arguments');
  return passed;
};


/***/ }),

/***/ "7f51":
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

/***/ "7f5f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var anObject = __webpack_require__("e7e3");
var iteratorClose = __webpack_require__("7e91");

// call something on iterator step with safe closing on error
module.exports = function (iterator, fn, value, ENTRIES) {
  try {
    return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);
  } catch (error) {
    iteratorClose(iterator, 'throw', error);
  }
};


/***/ }),

/***/ "7fd5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("8bdb");
var assign = __webpack_require__("eb9a");

// `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign
// eslint-disable-next-line es/no-object-assign -- required for testing
$({ target: 'Object', stat: true, arity: 2, forced: Object.assign !== assign }, {
  assign: assign
});


/***/ }),

/***/ "8087":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "80bb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var internalObjectKeys = __webpack_require__("00c2");
var enumBugKeys = __webpack_require__("62f7");

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),

/***/ "819a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// TODO: Remove from `core-js@4`
__webpack_require__("0b84");


/***/ }),

/***/ "81a7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var wellKnownSymbol = __webpack_require__("8c08");
var Iterators = __webpack_require__("799d");

var ITERATOR = wellKnownSymbol('iterator');
var ArrayPrototype = Array.prototype;

// check on default Array iterator
module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
};


/***/ }),

/***/ "81a9":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var isCallable = __webpack_require__("474f");
var definePropertyModule = __webpack_require__("d6b1");
var makeBuiltIn = __webpack_require__("d63a");
var defineGlobalProperty = __webpack_require__("c9b7");

module.exports = function (O, key, value, options) {
  if (!options) options = {};
  var simple = options.enumerable;
  var name = options.name !== undefined ? options.name : key;
  if (isCallable(value)) makeBuiltIn(value, name, options);
  if (options.global) {
    if (simple) O[key] = value;
    else defineGlobalProperty(key, value);
  } else {
    try {
      if (!options.unsafe) delete O[key];
      else if (O[key]) simple = true;
    } catch (error) { /* empty */ }
    if (simple) O[key] = value;
    else definePropertyModule.f(O, key, {
      value: value,
      enumerable: false,
      configurable: !options.nonConfigurable,
      writable: !options.nonWritable
    });
  } return O;
};


/***/ }),

/***/ "8228":
/***/ (function(module, exports, __webpack_require__) {

var DomParser = __webpack_require__("b8b4");
module.exports = DomParser;


/***/ }),

/***/ "83fa":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__("bb80");

// `thisNumberValue` abstract operation
// https://tc39.es/ecma262/#sec-thisnumbervalue
module.exports = uncurryThis(1.0.valueOf);


/***/ }),

/***/ "8449":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* eslint-disable es/no-object-getownpropertynames -- safe */
var classof = __webpack_require__("ada5");
var toIndexedObject = __webpack_require__("f660");
var $getOwnPropertyNames = __webpack_require__("80bb").f;
var arraySlice = __webpack_require__("37ad");

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return $getOwnPropertyNames(it);
  } catch (error) {
    return arraySlice(windowNames);
  }
};

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && classof(it) === 'Window'
    ? getWindowNames(it)
    : $getOwnPropertyNames(toIndexedObject(it));
};


/***/ }),

/***/ "844d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var defineWellKnownSymbol = __webpack_require__("f259");

// `Symbol.iterator` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.iterator
defineWellKnownSymbol('iterator');


/***/ }),

/***/ "8466":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__("af9e");
var isCallable = __webpack_require__("474f");

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value === POLYFILL ? true
    : value === NATIVE ? false
    : isCallable(detection) ? fails(detection)
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

/***/ "84d6":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toObject = __webpack_require__("1099");
var toAbsoluteIndex = __webpack_require__("e34c");
var lengthOfArrayLike = __webpack_require__("1fc1");

// `Array.prototype.fill` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.fill
module.exports = function fill(value /* , start = 0, end = @length */) {
  var O = toObject(this);
  var length = lengthOfArrayLike(O);
  var argumentsLength = arguments.length;
  var index = toAbsoluteIndex(argumentsLength > 1 ? arguments[1] : undefined, length);
  var end = argumentsLength > 2 ? arguments[2] : undefined;
  var endPos = end === undefined ? length : toAbsoluteIndex(end, length);
  while (endPos > index) O[index++] = value;
  return O;
};


/***/ }),

/***/ "8507":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "8557":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__("7ddb");
var $some = __webpack_require__("4d16").some;

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.some` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.some
exportTypedArrayMethod('some', function some(callbackfn /* , thisArg */) {
  return $some(aTypedArray(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
});


/***/ }),

/***/ "8598":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__("bb80");
var aCallable = __webpack_require__("7992");
var isObject = __webpack_require__("1c06");
var hasOwn = __webpack_require__("338c");
var arraySlice = __webpack_require__("37ad");
var NATIVE_BIND = __webpack_require__("8f26");

var $Function = Function;
var concat = uncurryThis([].concat);
var join = uncurryThis([].join);
var factories = {};

var construct = function (C, argsLength, args) {
  if (!hasOwn(factories, argsLength)) {
    var list = [];
    var i = 0;
    for (; i < argsLength; i++) list[i] = 'a[' + i + ']';
    factories[argsLength] = $Function('C,a', 'return new C(' + join(list, ',') + ')');
  } return factories[argsLength](C, args);
};

// `Function.prototype.bind` method implementation
// https://tc39.es/ecma262/#sec-function.prototype.bind
// eslint-disable-next-line es/no-function-prototype-bind -- detection
module.exports = NATIVE_BIND ? $Function.bind : function bind(that /* , ...args */) {
  var F = aCallable(this);
  var Prototype = F.prototype;
  var partArgs = arraySlice(arguments, 1);
  var boundFunction = function bound(/* args... */) {
    var args = concat(partArgs, arraySlice(arguments));
    return this instanceof boundFunction ? construct(F, args.length, args) : F.apply(that, args);
  };
  if (isObject(Prototype)) boundFunction.prototype = Prototype;
  return boundFunction;
};


/***/ }),

/***/ "85c1":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var check = function (it) {
  return it && it.Math === Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line es/no-global-this -- safe
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  // eslint-disable-next-line no-restricted-globals -- safe
  check(typeof self == 'object' && self) ||
  check(typeof global == 'object' && global) ||
  check(typeof this == 'object' && this) ||
  // eslint-disable-next-line no-new-func -- fallback
  (function () { return this; })() || Function('return this')();


/***/ }),

/***/ "85f7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__("ab4a");
var definePropertyModule = __webpack_require__("d6b1");
var createPropertyDescriptor = __webpack_require__("0b5a");

module.exports = function (object, key, value) {
  if (DESCRIPTORS) definePropertyModule.f(object, key, createPropertyDescriptor(0, value));
  else object[key] = value;
};


/***/ }),

/***/ "862c":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var isNullOrUndefined = __webpack_require__("1eb8");

var $TypeError = TypeError;

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (isNullOrUndefined(it)) throw new $TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ "86ca":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var sign = __webpack_require__("e78b");

var abs = Math.abs;

var EPSILON = 2.220446049250313e-16; // Number.EPSILON
var INVERSE_EPSILON = 1 / EPSILON;

var roundTiesToEven = function (n) {
  return n + INVERSE_EPSILON - INVERSE_EPSILON;
};

module.exports = function (x, FLOAT_EPSILON, FLOAT_MAX_VALUE, FLOAT_MIN_VALUE) {
  var n = +x;
  var absolute = abs(n);
  var s = sign(n);
  if (absolute < FLOAT_MIN_VALUE) return s * roundTiesToEven(absolute / FLOAT_MIN_VALUE / FLOAT_EPSILON) * FLOAT_MIN_VALUE * FLOAT_EPSILON;
  var a = (1 + FLOAT_EPSILON / EPSILON) * absolute;
  var result = a - (a - absolute);
  // eslint-disable-next-line no-self-compare -- NaN check
  if (result > FLOAT_MAX_VALUE || result !== result) return s * Infinity;
  return s * result;
};


/***/ }),

/***/ "874c":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var uncurryThisAccessor = __webpack_require__("960c");
var classof = __webpack_require__("ada5");

var $TypeError = TypeError;

// Includes
// - Perform ? RequireInternalSlot(O, [[ArrayBufferData]]).
// - If IsSharedArrayBuffer(O) is true, throw a TypeError exception.
module.exports = uncurryThisAccessor(ArrayBuffer.prototype, 'byteLength', 'get') || function (O) {
  if (classof(O) !== 'ArrayBuffer') throw new $TypeError('ArrayBuffer expected');
  return O.byteLength;
};


/***/ }),

/***/ "8824":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "884b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var hasOwn = __webpack_require__("338c");
var defineBuiltIn = __webpack_require__("81a9");
var dateToPrimitive = __webpack_require__("7054");
var wellKnownSymbol = __webpack_require__("8c08");

var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');
var DatePrototype = Date.prototype;

// `Date.prototype[@@toPrimitive]` method
// https://tc39.es/ecma262/#sec-date.prototype-@@toprimitive
if (!hasOwn(DatePrototype, TO_PRIMITIVE)) {
  defineBuiltIn(DatePrototype, TO_PRIMITIVE, dateToPrimitive);
}


/***/ }),

/***/ "8945":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__("ab4a");
var hasOwn = __webpack_require__("338c");

var FunctionPrototype = Function.prototype;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor;

var EXISTS = hasOwn(FunctionPrototype, 'name');
// additional protection from minified / mangled / dropped function names
var PROPER = EXISTS && (function something() { /* empty */ }).name === 'something';
var CONFIGURABLE = EXISTS && (!DESCRIPTORS || (DESCRIPTORS && getDescriptor(FunctionPrototype, 'name').configurable));

module.exports = {
  EXISTS: EXISTS,
  PROPER: PROPER,
  CONFIGURABLE: CONFIGURABLE
};


/***/ }),

/***/ "897c":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var IS_DENO = __webpack_require__("6b21");
var IS_NODE = __webpack_require__("db06");

module.exports = !IS_DENO && !IS_NODE
  && typeof window == 'object'
  && typeof document == 'object';


/***/ }),

/***/ "8a83":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Identicon_vue_vue_type_style_index_0_id_74cb1635_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("e0e5");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Identicon_vue_vue_type_style_index_0_id_74cb1635_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Identicon_vue_vue_type_style_index_0_id_74cb1635_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "8a8d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("8bdb");
var setPrototypeOf = __webpack_require__("8c4f");

// `Object.setPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.setprototypeof
$({ target: 'Object', stat: true }, {
  setPrototypeOf: setPrototypeOf
});


/***/ }),

/***/ "8ae2":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__("bb80");
var fails = __webpack_require__("af9e");
var isCallable = __webpack_require__("474f");
var classof = __webpack_require__("8e02");
var getBuiltIn = __webpack_require__("6aa6");
var inspectSource = __webpack_require__("ca99");

var noop = function () { /* empty */ };
var construct = getBuiltIn('Reflect', 'construct');
var constructorRegExp = /^\s*(?:class|function)\b/;
var exec = uncurryThis(constructorRegExp.exec);
var INCORRECT_TO_STRING = !constructorRegExp.test(noop);

var isConstructorModern = function isConstructor(argument) {
  if (!isCallable(argument)) return false;
  try {
    construct(noop, [], argument);
    return true;
  } catch (error) {
    return false;
  }
};

var isConstructorLegacy = function isConstructor(argument) {
  if (!isCallable(argument)) return false;
  switch (classof(argument)) {
    case 'AsyncFunction':
    case 'GeneratorFunction':
    case 'AsyncGeneratorFunction': return false;
  }
  try {
    // we can't check .prototype since constructors produced by .bind haven't it
    // `Function#toString` throws on some built-it function in some legacy engines
    // (for example, `DOMQuad` and similar in FF41-)
    return INCORRECT_TO_STRING || !!exec(constructorRegExp, inspectSource(argument));
  } catch (error) {
    return true;
  }
};

isConstructorLegacy.sham = true;

// `IsConstructor` abstract operation
// https://tc39.es/ecma262/#sec-isconstructor
module.exports = !construct || fails(function () {
  var called;
  return isConstructorModern(isConstructorModern.call)
    || !isConstructorModern(Object)
    || !isConstructorModern(function () { called = true; })
    || called;
}) ? isConstructorLegacy : isConstructorModern;


/***/ }),

/***/ "8b27":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var PROPER_FUNCTION_NAME = __webpack_require__("8945").PROPER;
var fails = __webpack_require__("af9e");
var whitespaces = __webpack_require__("f072");

var non = '\u200B\u0085\u180E';

// check that a method works with the correct list
// of whitespaces and has a correct name
module.exports = function (METHOD_NAME) {
  return fails(function () {
    return !!whitespaces[METHOD_NAME]()
      || non[METHOD_NAME]() !== non
      || (PROPER_FUNCTION_NAME && whitespaces[METHOD_NAME].name !== METHOD_NAME);
  });
};


/***/ }),

/***/ "8b3b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var store = __webpack_require__("9b55");

module.exports = function (key, value) {
  return store[key] || (store[key] = value || {});
};


/***/ }),

/***/ "8bcd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("8bdb");
var newPromiseCapabilityModule = __webpack_require__("0a8b");
var FORCED_PROMISE_CONSTRUCTOR = __webpack_require__("1052").CONSTRUCTOR;

// `Promise.reject` method
// https://tc39.es/ecma262/#sec-promise.reject
$({ target: 'Promise', stat: true, forced: FORCED_PROMISE_CONSTRUCTOR }, {
  reject: function reject(r) {
    var capability = newPromiseCapabilityModule.f(this);
    var capabilityReject = capability.reject;
    capabilityReject(r);
    return capability.promise;
  }
});


/***/ }),

/***/ "8bdb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__("85c1");
var getOwnPropertyDescriptor = __webpack_require__("1ded").f;
var createNonEnumerableProperty = __webpack_require__("6aca");
var defineBuiltIn = __webpack_require__("81a9");
var defineGlobalProperty = __webpack_require__("c9b7");
var copyConstructorProperties = __webpack_require__("3d8a");
var isForced = __webpack_require__("8466");

/*
  options.target         - name of the target object
  options.global         - target is the global object
  options.stat           - export as static methods of target
  options.proto          - export as prototype methods of target
  options.real           - real prototype method for the `pure` version
  options.forced         - export even if the native feature is available
  options.bind           - bind methods to the target, required for the `pure` version
  options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe         - use the simple assignment of property instead of delete + defineProperty
  options.sham           - add a flag to not completely full polyfills
  options.enumerable     - export as enumerable property
  options.dontCallGetSet - prevent calling a getter on target
  options.name           - the .name of the function if it does not match the key
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || defineGlobalProperty(TARGET, {});
  } else {
    target = global[TARGET] && global[TARGET].prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.dontCallGetSet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty == typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    defineBuiltIn(target, key, sourceProperty, options);
  }
};


/***/ }),

/***/ "8c04":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("8bdb");
var $padEnd = __webpack_require__("db04").end;
var WEBKIT_BUG = __webpack_require__("73e1");

// `String.prototype.padEnd` method
// https://tc39.es/ecma262/#sec-string.prototype.padend
$({ target: 'String', proto: true, forced: WEBKIT_BUG }, {
  padEnd: function padEnd(maxLength /* , fillString = ' ' */) {
    return $padEnd(this, maxLength, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "8c08":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__("85c1");
var shared = __webpack_require__("8b3b");
var hasOwn = __webpack_require__("338c");
var uid = __webpack_require__("d7b4");
var NATIVE_SYMBOL = __webpack_require__("af71");
var USE_SYMBOL_AS_UID = __webpack_require__("4f04");

var Symbol = global.Symbol;
var WellKnownSymbolsStore = shared('wks');
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol['for'] || Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!hasOwn(WellKnownSymbolsStore, name)) {
    WellKnownSymbolsStore[name] = NATIVE_SYMBOL && hasOwn(Symbol, name)
      ? Symbol[name]
      : createWellKnownSymbol('Symbol.' + name);
  } return WellKnownSymbolsStore[name];
};


/***/ }),

/***/ "8c18":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__("7ddb");
var $reduceRight = __webpack_require__("9a51").right;

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.reduceRight` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.reduceright
exportTypedArrayMethod('reduceRight', function reduceRight(callbackfn /* , initialValue */) {
  var length = arguments.length;
  return $reduceRight(aTypedArray(this), callbackfn, length, length > 1 ? arguments[1] : undefined);
});


/***/ }),

/***/ "8c25":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__("85c1");
var safeGetBuiltIn = __webpack_require__("af6a");
var bind = __webpack_require__("ae5c");
var macrotask = __webpack_require__("2c61").set;
var Queue = __webpack_require__("e202");
var IS_IOS = __webpack_require__("2bb3");
var IS_IOS_PEBBLE = __webpack_require__("f0a4");
var IS_WEBOS_WEBKIT = __webpack_require__("d0a8");
var IS_NODE = __webpack_require__("db06");

var MutationObserver = global.MutationObserver || global.WebKitMutationObserver;
var document = global.document;
var process = global.process;
var Promise = global.Promise;
var microtask = safeGetBuiltIn('queueMicrotask');
var notify, toggle, node, promise, then;

// modern engines have queueMicrotask method
if (!microtask) {
  var queue = new Queue();

  var flush = function () {
    var parent, fn;
    if (IS_NODE && (parent = process.domain)) parent.exit();
    while (fn = queue.get()) try {
      fn();
    } catch (error) {
      if (queue.head) notify();
      throw error;
    }
    if (parent) parent.enter();
  };

  // browsers with MutationObserver, except iOS - https://github.com/zloirock/core-js/issues/339
  // also except WebOS Webkit https://github.com/zloirock/core-js/issues/898
  if (!IS_IOS && !IS_NODE && !IS_WEBOS_WEBKIT && MutationObserver && document) {
    toggle = true;
    node = document.createTextNode('');
    new MutationObserver(flush).observe(node, { characterData: true });
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (!IS_IOS_PEBBLE && Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    promise = Promise.resolve(undefined);
    // workaround of WebKit ~ iOS Safari 10.1 bug
    promise.constructor = Promise;
    then = bind(promise.then, promise);
    notify = function () {
      then(flush);
    };
  // Node.js without promises
  } else if (IS_NODE) {
    notify = function () {
      process.nextTick(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessage
  // - onreadystatechange
  // - setTimeout
  } else {
    // `webpack` dev server bug on IE global methods - use bind(fn, global)
    macrotask = bind(macrotask, global);
    notify = function () {
      macrotask(flush);
    };
  }

  microtask = function (fn) {
    if (!queue.head) notify();
    queue.add(fn);
  };
}

module.exports = microtask;


/***/ }),

/***/ "8c4f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* eslint-disable no-proto -- safe */
var uncurryThisAccessor = __webpack_require__("960c");
var isObject = __webpack_require__("1c06");
var requireObjectCoercible = __webpack_require__("862c");
var aPossiblePrototype = __webpack_require__("a048");

// `Object.setPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
// eslint-disable-next-line es/no-object-setprototypeof -- safe
module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    setter = uncurryThisAccessor(Object.prototype, '__proto__', 'set');
    setter(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    requireObjectCoercible(O);
    aPossiblePrototype(proto);
    if (!isObject(O)) return O;
    if (CORRECT_SETTER) setter(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);


/***/ }),

/***/ "8cb1":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var createNonEnumerableProperty = __webpack_require__("6aca");
var clearErrorStack = __webpack_require__("7e87");
var ERROR_STACK_INSTALLABLE = __webpack_require__("417a");

// non-standard V8
var captureStackTrace = Error.captureStackTrace;

module.exports = function (error, C, stack, dropEntries) {
  if (ERROR_STACK_INSTALLABLE) {
    if (captureStackTrace) captureStackTrace(error, C);
    else createNonEnumerableProperty(error, 'stack', clearErrorStack(stack, dropEntries));
  }
};


/***/ }),

/***/ "8d24":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var UA = __webpack_require__("29d8");

module.exports = /MSIE|Trident/.test(UA);


/***/ }),

/***/ "8e02":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var TO_STRING_TAG_SUPPORT = __webpack_require__("569b");
var isCallable = __webpack_require__("474f");
var classofRaw = __webpack_require__("ada5");
var wellKnownSymbol = __webpack_require__("8c08");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var $Object = Object;

// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) === 'Arguments';

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
    : typeof (tag = tryGet(O = $Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) === 'Object' && isCallable(O.callee) ? 'Arguments' : result;
};


/***/ }),

/***/ "8f26":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__("af9e");

module.exports = !fails(function () {
  // eslint-disable-next-line es/no-function-prototype-bind -- safe
  var test = (function () { /* empty */ }).bind();
  // eslint-disable-next-line no-prototype-builtins -- safe
  return typeof test != 'function' || test.hasOwnProperty('prototype');
});


/***/ }),

/***/ "8f71":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("8bdb");
var $filter = __webpack_require__("4d16").filter;
var arrayMethodHasSpeciesSupport = __webpack_require__("a554");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('filter');

// `Array.prototype.filter` method
// https://tc39.es/ecma262/#sec-array.prototype.filter
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "8ff5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__("7ddb");
var $filter = __webpack_require__("4d16").filter;
var fromSpeciesAndList = __webpack_require__("4379");

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.filter` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.filter
exportTypedArrayMethod('filter', function filter(callbackfn /* , thisArg */) {
  var list = $filter(aTypedArray(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  return fromSpeciesAndList(this, list);
});


/***/ }),

/***/ "9185":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CloseButton_vue_vue_type_style_index_0_id_f70dd1ae_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("8507");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CloseButton_vue_vue_type_style_index_0_id_f70dd1ae_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CloseButton_vue_vue_type_style_index_0_id_f70dd1ae_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "926e":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("8bdb");
var fails = __webpack_require__("af9e");
var toObject = __webpack_require__("1099");
var nativeGetPrototypeOf = __webpack_require__("c337");
var CORRECT_PROTOTYPE_GETTER = __webpack_require__("1d57");

var FAILS_ON_PRIMITIVES = fails(function () { nativeGetPrototypeOf(1); });

// `Object.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.getprototypeof
$({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES, sham: !CORRECT_PROTOTYPE_GETTER }, {
  getPrototypeOf: function getPrototypeOf(it) {
    return nativeGetPrototypeOf(toObject(it));
  }
});



/***/ }),

/***/ "9327":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("8bdb");
var uncurryThis = __webpack_require__("9f69");
var getOwnPropertyDescriptor = __webpack_require__("1ded").f;
var toLength = __webpack_require__("c435");
var toString = __webpack_require__("9e70");
var notARegExp = __webpack_require__("b6a1");
var requireObjectCoercible = __webpack_require__("862c");
var correctIsRegExpLogic = __webpack_require__("0931");
var IS_PURE = __webpack_require__("a734");

var slice = uncurryThis(''.slice);
var min = Math.min;

var CORRECT_IS_REGEXP_LOGIC = correctIsRegExpLogic('endsWith');
// https://github.com/zloirock/core-js/pull/702
var MDN_POLYFILL_BUG = !IS_PURE && !CORRECT_IS_REGEXP_LOGIC && !!function () {
  var descriptor = getOwnPropertyDescriptor(String.prototype, 'endsWith');
  return descriptor && !descriptor.writable;
}();

// `String.prototype.endsWith` method
// https://tc39.es/ecma262/#sec-string.prototype.endswith
$({ target: 'String', proto: true, forced: !MDN_POLYFILL_BUG && !CORRECT_IS_REGEXP_LOGIC }, {
  endsWith: function endsWith(searchString /* , endPosition = @length */) {
    var that = toString(requireObjectCoercible(this));
    notARegExp(searchString);
    var endPosition = arguments.length > 1 ? arguments[1] : undefined;
    var len = that.length;
    var end = endPosition === undefined ? len : min(toLength(endPosition), len);
    var search = toString(searchString);
    return slice(that, end - search.length, end) === search;
  }
});


/***/ }),

/***/ "93b9":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var lengthOfArrayLike = __webpack_require__("1fc1");
var toIntegerOrInfinity = __webpack_require__("497b");

var $RangeError = RangeError;

// https://tc39.es/proposal-change-array-by-copy/#sec-array.prototype.with
// https://tc39.es/proposal-change-array-by-copy/#sec-%typedarray%.prototype.with
module.exports = function (O, C, index, value) {
  var len = lengthOfArrayLike(O);
  var relativeIndex = toIntegerOrInfinity(index);
  var actualIndex = relativeIndex < 0 ? len + relativeIndex : relativeIndex;
  if (actualIndex >= len || actualIndex < 0) throw new $RangeError('Incorrect index');
  var A = new C(len);
  var k = 0;
  for (; k < len; k++) A[k] = k === actualIndex ? value : O[k];
  return A;
};


/***/ }),

/***/ "960c":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__("bb80");
var aCallable = __webpack_require__("7992");

module.exports = function (object, key, method) {
  try {
    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
    return uncurryThis(aCallable(Object.getOwnPropertyDescriptor(object, key)[method]));
  } catch (error) { /* empty */ }
};


/***/ }),

/***/ "97ed":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// `CreateIterResultObject` abstract operation
// https://tc39.es/ecma262/#sec-createiterresultobject
module.exports = function (value, done) {
  return { value: value, done: done };
};


/***/ }),

/***/ "9839":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* eslint-disable no-new -- required for testing */
var global = __webpack_require__("85c1");
var fails = __webpack_require__("af9e");
var checkCorrectnessOfIteration = __webpack_require__("29ba");
var NATIVE_ARRAY_BUFFER_VIEWS = __webpack_require__("7ddb").NATIVE_ARRAY_BUFFER_VIEWS;

var ArrayBuffer = global.ArrayBuffer;
var Int8Array = global.Int8Array;

module.exports = !NATIVE_ARRAY_BUFFER_VIEWS || !fails(function () {
  Int8Array(1);
}) || !fails(function () {
  new Int8Array(-1);
}) || !checkCorrectnessOfIteration(function (iterable) {
  new Int8Array();
  new Int8Array(null);
  new Int8Array(1.5);
  new Int8Array(iterable);
}, true) || fails(function () {
  // Safari (11+) bug - a reason why even Safari 13 should load a typed array polyfill
  return new Int8Array(new ArrayBuffer(2), 1, undefined).length !== 1;
});


/***/ }),

/***/ "98ff":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// TODO: Remove from `core-js@4`
__webpack_require__("6511");


/***/ }),

/***/ "9917":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var wellKnownSymbol = __webpack_require__("8c08");

exports.f = wellKnownSymbol;


/***/ }),

/***/ "9940":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AmountWithFee_vue_vue_type_style_index_0_id_641a2a87_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("6173");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AmountWithFee_vue_vue_type_style_index_0_id_641a2a87_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AmountWithFee_vue_vue_type_style_index_0_id_641a2a87_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "9a2c":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("8bdb");
var fails = __webpack_require__("af9e");
var toIndexedObject = __webpack_require__("f660");
var nativeGetOwnPropertyDescriptor = __webpack_require__("1ded").f;
var DESCRIPTORS = __webpack_require__("ab4a");

var FORCED = !DESCRIPTORS || fails(function () { nativeGetOwnPropertyDescriptor(1); });

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
$({ target: 'Object', stat: true, forced: FORCED, sham: !DESCRIPTORS }, {
  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(it, key) {
    return nativeGetOwnPropertyDescriptor(toIndexedObject(it), key);
  }
});


/***/ }),

/***/ "9a51":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var aCallable = __webpack_require__("7992");
var toObject = __webpack_require__("1099");
var IndexedObject = __webpack_require__("7e41");
var lengthOfArrayLike = __webpack_require__("1fc1");

var $TypeError = TypeError;

var REDUCE_EMPTY = 'Reduce of empty array with no initial value';

// `Array.prototype.{ reduce, reduceRight }` methods implementation
var createMethod = function (IS_RIGHT) {
  return function (that, callbackfn, argumentsLength, memo) {
    var O = toObject(that);
    var self = IndexedObject(O);
    var length = lengthOfArrayLike(O);
    aCallable(callbackfn);
    if (length === 0 && argumentsLength < 2) throw new $TypeError(REDUCE_EMPTY);
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
        throw new $TypeError(REDUCE_EMPTY);
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
  // https://tc39.es/ecma262/#sec-array.prototype.reduce
  left: createMethod(false),
  // `Array.prototype.reduceRight` method
  // https://tc39.es/ecma262/#sec-array.prototype.reduceright
  right: createMethod(true)
};


/***/ }),

/***/ "9aad":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "9ad7":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "9ad8":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* eslint-disable regexp/no-empty-capturing-group, regexp/no-empty-group, regexp/no-lazy-ends -- testing */
/* eslint-disable regexp/no-useless-quantifier -- testing */
var call = __webpack_require__("71e9");
var uncurryThis = __webpack_require__("bb80");
var toString = __webpack_require__("9e70");
var regexpFlags = __webpack_require__("471d");
var stickyHelpers = __webpack_require__("edb7");
var shared = __webpack_require__("8b3b");
var create = __webpack_require__("e37c");
var getInternalState = __webpack_require__("235c").get;
var UNSUPPORTED_DOT_ALL = __webpack_require__("b0a8");
var UNSUPPORTED_NCG = __webpack_require__("cca9");

var nativeReplace = shared('native-string-replace', String.prototype.replace);
var nativeExec = RegExp.prototype.exec;
var patchedExec = nativeExec;
var charAt = uncurryThis(''.charAt);
var indexOf = uncurryThis(''.indexOf);
var replace = uncurryThis(''.replace);
var stringSlice = uncurryThis(''.slice);

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/;
  var re2 = /b*/g;
  call(nativeExec, re1, 'a');
  call(nativeExec, re2, 'a');
  return re1.lastIndex !== 0 || re2.lastIndex !== 0;
})();

var UNSUPPORTED_Y = stickyHelpers.BROKEN_CARET;

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y || UNSUPPORTED_DOT_ALL || UNSUPPORTED_NCG;

if (PATCH) {
  patchedExec = function exec(string) {
    var re = this;
    var state = getInternalState(re);
    var str = toString(string);
    var raw = state.raw;
    var result, reCopy, lastIndex, match, i, object, group;

    if (raw) {
      raw.lastIndex = re.lastIndex;
      result = call(patchedExec, raw, str);
      re.lastIndex = raw.lastIndex;
      return result;
    }

    var groups = state.groups;
    var sticky = UNSUPPORTED_Y && re.sticky;
    var flags = call(regexpFlags, re);
    var source = re.source;
    var charsAdded = 0;
    var strCopy = str;

    if (sticky) {
      flags = replace(flags, 'y', '');
      if (indexOf(flags, 'g') === -1) {
        flags += 'g';
      }

      strCopy = stringSlice(str, re.lastIndex);
      // Support anchored sticky behavior.
      if (re.lastIndex > 0 && (!re.multiline || re.multiline && charAt(str, re.lastIndex - 1) !== '\n')) {
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

    match = call(nativeExec, sticky ? reCopy : re, strCopy);

    if (sticky) {
      if (match) {
        match.input = stringSlice(match.input, charsAdded);
        match[0] = stringSlice(match[0], charsAdded);
        match.index = re.lastIndex;
        re.lastIndex += match[0].length;
      } else re.lastIndex = 0;
    } else if (UPDATES_LAST_INDEX_WRONG && match) {
      re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn't work for /(.?)?/
      call(nativeReplace, match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    if (match && groups) {
      match.groups = object = create(null);
      for (i = 0; i < groups.length; i++) {
        group = groups[i];
        object[group[0]] = match[group[1]];
      }
    }

    return match;
  };
}

module.exports = patchedExec;


/***/ }),

/***/ "9b55":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var IS_PURE = __webpack_require__("a734");
var globalThis = __webpack_require__("85c1");
var defineGlobalProperty = __webpack_require__("c9b7");

var SHARED = '__core-js_shared__';
var store = module.exports = globalThis[SHARED] || defineGlobalProperty(SHARED, {});

(store.versions || (store.versions = [])).push({
  version: '3.37.1',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2014-2024 Denis Pushkarev (zloirock.ru)',
  license: 'https://github.com/zloirock/core-js/blob/v3.37.1/LICENSE',
  source: 'https://github.com/zloirock/core-js'
});


/***/ }),

/***/ "9c4e":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__("ab4a");
var MISSED_STICKY = __webpack_require__("edb7").MISSED_STICKY;
var classof = __webpack_require__("ada5");
var defineBuiltInAccessor = __webpack_require__("e4ca");
var getInternalState = __webpack_require__("235c").get;

var RegExpPrototype = RegExp.prototype;
var $TypeError = TypeError;

// `RegExp.prototype.sticky` getter
// https://tc39.es/ecma262/#sec-get-regexp.prototype.sticky
if (DESCRIPTORS && MISSED_STICKY) {
  defineBuiltInAccessor(RegExpPrototype, 'sticky', {
    configurable: true,
    get: function sticky() {
      if (this === RegExpPrototype) return;
      // We can't use InternalStateModule.getterFor because
      // we don't add metadata for regexps created by a literal.
      if (classof(this) === 'RegExp') {
        return !!getInternalState(this).sticky;
      }
      throw new $TypeError('Incompatible receiver, RegExp required');
    }
  });
}


/***/ }),

/***/ "9e15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var defineWellKnownSymbol = __webpack_require__("f259");
var defineSymbolToPrimitive = __webpack_require__("effb");

// `Symbol.toPrimitive` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.toprimitive
defineWellKnownSymbol('toPrimitive');

// `Symbol.prototype[@@toPrimitive]` method
// https://tc39.es/ecma262/#sec-symbol.prototype-@@toprimitive
defineSymbolToPrimitive();


/***/ }),

/***/ "9e70":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var classof = __webpack_require__("8e02");

var $String = String;

module.exports = function (argument) {
  if (classof(argument) === 'Symbol') throw new TypeError('Cannot convert a Symbol value to a string');
  return $String(argument);
};


/***/ }),

/***/ "9ee1":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "9f69":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var classofRaw = __webpack_require__("ada5");
var uncurryThis = __webpack_require__("bb80");

module.exports = function (fn) {
  // Nashorn bug:
  //   https://github.com/zloirock/core-js/issues/1128
  //   https://github.com/zloirock/core-js/issues/1130
  if (classofRaw(fn) === 'Function') return uncurryThis(fn);
};


/***/ }),

/***/ "9f9e":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var NATIVE_BIND = __webpack_require__("8f26");

var FunctionPrototype = Function.prototype;
var apply = FunctionPrototype.apply;
var call = FunctionPrototype.call;

// eslint-disable-next-line es/no-reflect -- safe
module.exports = typeof Reflect == 'object' && Reflect.apply || (NATIVE_BIND ? call.bind(apply) : function () {
  return call.apply(apply, arguments);
});


/***/ }),

/***/ "a048":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var isPossiblePrototype = __webpack_require__("bda5");

var $String = String;
var $TypeError = TypeError;

module.exports = function (argument) {
  if (isPossiblePrototype(argument)) return argument;
  throw new $TypeError("Can't set " + $String(argument) + ' as a prototype');
};


/***/ }),

/***/ "a0b7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("8bdb");
var uncurryThis = __webpack_require__("bb80");
var IndexedObject = __webpack_require__("7e41");
var toIndexedObject = __webpack_require__("f660");
var arrayMethodIsStrict = __webpack_require__("2b04");

var nativeJoin = uncurryThis([].join);

var ES3_STRINGS = IndexedObject !== Object;
var FORCED = ES3_STRINGS || !arrayMethodIsStrict('join', ',');

// `Array.prototype.join` method
// https://tc39.es/ecma262/#sec-array.prototype.join
$({ target: 'Array', proto: true, forced: FORCED }, {
  join: function join(separator) {
    return nativeJoin(toIndexedObject(this), separator === undefined ? ',' : separator);
  }
});


/***/ }),

/***/ "a1c1":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var apply = __webpack_require__("9f9e");
var call = __webpack_require__("71e9");
var uncurryThis = __webpack_require__("bb80");
var fixRegExpWellKnownSymbolLogic = __webpack_require__("7edc");
var fails = __webpack_require__("af9e");
var anObject = __webpack_require__("e7e3");
var isCallable = __webpack_require__("474f");
var isNullOrUndefined = __webpack_require__("1eb8");
var toIntegerOrInfinity = __webpack_require__("497b");
var toLength = __webpack_require__("c435");
var toString = __webpack_require__("9e70");
var requireObjectCoercible = __webpack_require__("862c");
var advanceStringIndex = __webpack_require__("03dc");
var getMethod = __webpack_require__("60bc");
var getSubstitution = __webpack_require__("1001");
var regExpExec = __webpack_require__("07da");
var wellKnownSymbol = __webpack_require__("8c08");

var REPLACE = wellKnownSymbol('replace');
var max = Math.max;
var min = Math.min;
var concat = uncurryThis([].concat);
var push = uncurryThis([].push);
var stringIndexOf = uncurryThis(''.indexOf);
var stringSlice = uncurryThis(''.slice);

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// IE <= 11 replaces $0 with the whole match, as if it was $&
// https://stackoverflow.com/questions/6024666/getting-ie-to-replace-a-regex-with-the-literal-string-0
var REPLACE_KEEPS_$0 = (function () {
  // eslint-disable-next-line regexp/prefer-escape-replacement-dollar-char -- required for testing
  return 'a'.replace(/./, '$0') === '$0';
})();

// Safari <= 13.0.3(?) substitutes nth capture where n>m with an empty string
var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = (function () {
  if (/./[REPLACE]) {
    return /./[REPLACE]('a', '$0') === '';
  }
  return false;
})();

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  // eslint-disable-next-line regexp/no-useless-dollar-replacements -- false positive
  return ''.replace(re, '$<a>') !== '7';
});

// @@replace logic
fixRegExpWellKnownSymbolLogic('replace', function (_, nativeReplace, maybeCallNative) {
  var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? '$' : '$0';

  return [
    // `String.prototype.replace` method
    // https://tc39.es/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = requireObjectCoercible(this);
      var replacer = isNullOrUndefined(searchValue) ? undefined : getMethod(searchValue, REPLACE);
      return replacer
        ? call(replacer, searchValue, O, replaceValue)
        : call(nativeReplace, toString(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@replace
    function (string, replaceValue) {
      var rx = anObject(this);
      var S = toString(string);

      if (
        typeof replaceValue == 'string' &&
        stringIndexOf(replaceValue, UNSAFE_SUBSTITUTE) === -1 &&
        stringIndexOf(replaceValue, '$<') === -1
      ) {
        var res = maybeCallNative(nativeReplace, rx, S, replaceValue);
        if (res.done) return res.value;
      }

      var functionalReplace = isCallable(replaceValue);
      if (!functionalReplace) replaceValue = toString(replaceValue);

      var global = rx.global;
      var fullUnicode;
      if (global) {
        fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }

      var results = [];
      var result;
      while (true) {
        result = regExpExec(rx, S);
        if (result === null) break;

        push(results, result);
        if (!global) break;

        var matchStr = toString(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      }

      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];

        var matched = toString(result[0]);
        var position = max(min(toIntegerOrInfinity(result.index), S.length), 0);
        var captures = [];
        var replacement;
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) push(captures, maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = concat([matched], captures, position, S);
          if (namedCaptures !== undefined) push(replacerArgs, namedCaptures);
          replacement = toString(apply(replaceValue, undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += stringSlice(S, nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }

      return accumulatedResult + stringSlice(S, nextSourcePosition);
    }
  ];
}, !REPLACE_SUPPORTS_NAMED_GROUPS || !REPLACE_KEEPS_$0 || REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE);


/***/ }),

/***/ "a1d4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__("85c1");

module.exports = global;


/***/ }),

/***/ "a20b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__("85c1");
var isCallable = __webpack_require__("474f");

var WeakMap = global.WeakMap;

module.exports = isCallable(WeakMap) && /native code/.test(String(WeakMap));


/***/ }),

/***/ "a3fb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__("ab4a");
var V8_PROTOTYPE_DEFINE_BUG = __webpack_require__("fec3");
var definePropertyModule = __webpack_require__("d6b1");
var anObject = __webpack_require__("e7e3");
var toIndexedObject = __webpack_require__("f660");
var objectKeys = __webpack_require__("ff4f");

// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es/no-object-defineproperties -- safe
exports.f = DESCRIPTORS && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var props = toIndexedObject(Properties);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], props[key]);
  return O;
};


/***/ }),

/***/ "a537":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var NativePromiseConstructor = __webpack_require__("69e4");
var checkCorrectnessOfIteration = __webpack_require__("29ba");
var FORCED_PROMISE_CONSTRUCTOR = __webpack_require__("1052").CONSTRUCTOR;

module.exports = FORCED_PROMISE_CONSTRUCTOR || !checkCorrectnessOfIteration(function (iterable) {
  NativePromiseConstructor.all(iterable).then(undefined, function () { /* empty */ });
});


/***/ }),

/***/ "a554":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__("af9e");
var wellKnownSymbol = __webpack_require__("8c08");
var V8_VERSION = __webpack_require__("0173");

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

/***/ "a555":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__("af9e");

// check the existence of a method, lowercase
// of a tag and escaping quotes in arguments
module.exports = function (METHOD_NAME) {
  return fails(function () {
    var test = ''[METHOD_NAME]('"');
    return test !== test.toLowerCase() || test.split('"').length > 3;
  });
};


/***/ }),

/***/ "a644":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("8bdb");
var DESCRIPTORS = __webpack_require__("ab4a");
var ownKeys = __webpack_require__("6ac9");
var toIndexedObject = __webpack_require__("f660");
var getOwnPropertyDescriptorModule = __webpack_require__("1ded");
var createProperty = __webpack_require__("85f7");

// `Object.getOwnPropertyDescriptors` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptors
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

/***/ "a700":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var userAgent = __webpack_require__("29d8");

var webkit = userAgent.match(/AppleWebKit\/(\d+)\./);

module.exports = !!webkit && +webkit[1];


/***/ }),

/***/ "a734":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = false;


/***/ }),

/***/ "a74b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddressDisplay_vue_vue_type_style_index_0_id_7fb74612_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cd2c");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddressDisplay_vue_vue_type_style_index_0_id_7fb74612_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddressDisplay_vue_vue_type_style_index_0_id_7fb74612_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "a74c":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var defineBuiltIn = __webpack_require__("81a9");

module.exports = function (target, src, options) {
  for (var key in src) defineBuiltIn(target, key, src[key], options);
  return target;
};


/***/ }),

/***/ "a7a8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AmountInput_vue_vue_type_style_index_0_id_37572fbf_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("b8db");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AmountInput_vue_vue_type_style_index_0_id_37572fbf_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AmountInput_vue_vue_type_style_index_0_id_37572fbf_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "a830":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var tryToString = __webpack_require__("52df");

var $TypeError = TypeError;

module.exports = function (O, P) {
  if (!delete O[P]) throw new $TypeError('Cannot delete property ' + tryToString(P) + ' of ' + tryToString(O));
};


/***/ }),

/***/ "a944":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller
// MIT license
// source: https://github.com/amiller-gh/currentScript-polyfill

// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(typeof self !== 'undefined' ? self : this, function () {
  function getCurrentScript () {
    var descriptor = Object.getOwnPropertyDescriptor(document, 'currentScript')
    // for chrome
    if (!descriptor && 'currentScript' in document && document.currentScript) {
      return document.currentScript
    }

    // for other browsers with native support for currentScript
    if (descriptor && descriptor.get !== getCurrentScript && document.currentScript) {
      return document.currentScript
    }
  
    // IE 8-10 support script readyState
    // IE 11+ & Firefox support stack trace
    try {
      throw new Error();
    }
    catch (err) {
      // Find the second match for the "at" string to get file src url from stack.
      var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
        ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
        stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
        scriptLocation = (stackDetails && stackDetails[1]) || false,
        line = (stackDetails && stackDetails[2]) || false,
        currentLocation = document.location.href.replace(document.location.hash, ''),
        pageSource,
        inlineScriptSourceRegExp,
        inlineScriptSource,
        scripts = document.getElementsByTagName('script'); // Live NodeList collection
  
      if (scriptLocation === currentLocation) {
        pageSource = document.documentElement.outerHTML;
        inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
        inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
      }
  
      for (var i = 0; i < scripts.length; i++) {
        // If ready state is interactive, return the script tag
        if (scripts[i].readyState === 'interactive') {
          return scripts[i];
        }
  
        // If src matches, return the script tag
        if (scripts[i].src === scriptLocation) {
          return scripts[i];
        }
  
        // If inline source matches, return the script tag
        if (
          scriptLocation === currentLocation &&
          scripts[i].innerHTML &&
          scripts[i].innerHTML.trim() === inlineScriptSource
        ) {
          return scripts[i];
        }
      }
  
      // If no match, return null
      return null;
    }
  };

  return getCurrentScript
}));


/***/ }),

/***/ "a976":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// TODO: Remove from `core-js@4`
__webpack_require__("f8a3");


/***/ }),

/***/ "a9ee":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__("85c1");
var fails = __webpack_require__("af9e");
var uncurryThis = __webpack_require__("bb80");
var toString = __webpack_require__("9e70");
var trim = __webpack_require__("ee98").trim;
var whitespaces = __webpack_require__("f072");

var charAt = uncurryThis(''.charAt);
var $parseFloat = global.parseFloat;
var Symbol = global.Symbol;
var ITERATOR = Symbol && Symbol.iterator;
var FORCED = 1 / $parseFloat(whitespaces + '-0') !== -Infinity
  // MS Edge 18- broken with boxed symbols
  || (ITERATOR && !fails(function () { $parseFloat(Object(ITERATOR)); }));

// `parseFloat` method
// https://tc39.es/ecma262/#sec-parsefloat-string
module.exports = FORCED ? function parseFloat(string) {
  var trimmedString = trim(toString(string));
  var result = $parseFloat(trimmedString);
  return result === 0 && charAt(trimmedString, 0) === '-' ? -0 : result;
} : $parseFloat;


/***/ }),

/***/ "aa20":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("8bdb");
var fails = __webpack_require__("af9e");
var intersection = __webpack_require__("f511");
var setMethodAcceptSetLike = __webpack_require__("45bf");

var INCORRECT = !setMethodAcceptSetLike('intersection') || fails(function () {
  // eslint-disable-next-line es/no-array-from, es/no-set -- testing
  return String(Array.from(new Set([1, 2, 3]).intersection(new Set([3, 2])))) !== '3,2';
});

// `Set.prototype.intersection` method
// https://github.com/tc39/proposal-set-methods
$({ target: 'Set', proto: true, real: true, forced: INCORRECT }, {
  intersection: intersection
});


/***/ }),

/***/ "aa33":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "aa77":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("8bdb");
var $find = __webpack_require__("4d16").find;
var addToUnscopables = __webpack_require__("1cb5");

var FIND = 'find';
var SKIPS_HOLES = true;

// Shouldn't skip holes
// eslint-disable-next-line es/no-array-prototype-find -- testing
if (FIND in []) Array(1)[FIND](function () { SKIPS_HOLES = false; });

// `Array.prototype.find` method
// https://tc39.es/ecma262/#sec-array.prototype.find
$({ target: 'Array', proto: true, forced: SKIPS_HOLES }, {
  find: function find(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables(FIND);


/***/ }),

/***/ "aa9c":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("8bdb");
var toObject = __webpack_require__("1099");
var lengthOfArrayLike = __webpack_require__("1fc1");
var setArrayLength = __webpack_require__("b2b1");
var doesNotExceedSafeInteger = __webpack_require__("41c7");
var fails = __webpack_require__("af9e");

var INCORRECT_TO_LENGTH = fails(function () {
  return [].push.call({ length: 0x100000000 }, 1) !== 4294967297;
});

// V8 <= 121 and Safari <= 15.4; FF < 23 throws InternalError
// https://bugs.chromium.org/p/v8/issues/detail?id=12681
var properErrorOnNonWritableLength = function () {
  try {
    // eslint-disable-next-line es/no-object-defineproperty -- safe
    Object.defineProperty([], 'length', { writable: false }).push();
  } catch (error) {
    return error instanceof TypeError;
  }
};

var FORCED = INCORRECT_TO_LENGTH || !properErrorOnNonWritableLength();

// `Array.prototype.push` method
// https://tc39.es/ecma262/#sec-array.prototype.push
$({ target: 'Array', proto: true, arity: 1, forced: FORCED }, {
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  push: function push(item) {
    var O = toObject(this);
    var len = lengthOfArrayLike(O);
    var argCount = arguments.length;
    doesNotExceedSafeInteger(len + argCount);
    for (var i = 0; i < argCount; i++) {
      O[len] = arguments[i];
      len++;
    }
    setArrayLength(O, len);
    return len;
  }
});


/***/ }),

/***/ "ab4a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__("af9e");

// Detect IE8's incomplete defineProperty implementation
module.exports = !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] !== 7;
});


/***/ }),

/***/ "ab80":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var PROPER_FUNCTION_NAME = __webpack_require__("8945").PROPER;
var defineBuiltIn = __webpack_require__("81a9");
var anObject = __webpack_require__("e7e3");
var $toString = __webpack_require__("9e70");
var fails = __webpack_require__("af9e");
var getRegExpFlags = __webpack_require__("52ac");

var TO_STRING = 'toString';
var RegExpPrototype = RegExp.prototype;
var nativeToString = RegExpPrototype[TO_STRING];

var NOT_GENERIC = fails(function () { return nativeToString.call({ source: 'a', flags: 'b' }) !== '/a/b'; });
// FF44- RegExp#toString has a wrong name
var INCORRECT_NAME = PROPER_FUNCTION_NAME && nativeToString.name !== TO_STRING;

// `RegExp.prototype.toString` method
// https://tc39.es/ecma262/#sec-regexp.prototype.tostring
if (NOT_GENERIC || INCORRECT_NAME) {
  defineBuiltIn(RegExpPrototype, TO_STRING, function toString() {
    var R = anObject(this);
    var pattern = $toString(R.source);
    var flags = $toString(getRegExpFlags(R));
    return '/' + pattern + '/' + flags;
  }, { unsafe: true });
}


/***/ }),

/***/ "ac38":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var lengthOfArrayLike = __webpack_require__("1fc1");

module.exports = function (Constructor, list, $length) {
  var index = 0;
  var length = arguments.length > 2 ? $length : lengthOfArrayLike(list);
  var result = new Constructor(length);
  while (length > index) result[index] = list[index++];
  return result;
};


/***/ }),

/***/ "ac5f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var classof = __webpack_require__("ada5");

// `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
// eslint-disable-next-line es/no-array-isarray -- safe
module.exports = Array.isArray || function isArray(argument) {
  return classof(argument) === 'Array';
};


/***/ }),

/***/ "ad0a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__("bb80");
var arrayBufferByteLength = __webpack_require__("874c");

var slice = uncurryThis(ArrayBuffer.prototype.slice);

module.exports = function (O) {
  if (arrayBufferByteLength(O) !== 0) return false;
  try {
    slice(O, 0, 0);
    return false;
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ "ada5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__("bb80");

var toString = uncurryThis({}.toString);
var stringSlice = uncurryThis(''.slice);

module.exports = function (it) {
  return stringSlice(toString(it), 8, -1);
};


/***/ }),

/***/ "ae52":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "ae5c":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__("9f69");
var aCallable = __webpack_require__("7992");
var NATIVE_BIND = __webpack_require__("8f26");

var bind = uncurryThis(uncurryThis.bind);

// optional / simple context binding
module.exports = function (fn, that) {
  aCallable(fn);
  return that === undefined ? fn : NATIVE_BIND ? bind(fn, that) : function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "af6a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__("85c1");
var DESCRIPTORS = __webpack_require__("ab4a");

// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Avoid NodeJS experimental warning
module.exports = function (name) {
  if (!DESCRIPTORS) return global[name];
  var descriptor = getOwnPropertyDescriptor(global, name);
  return descriptor && descriptor.value;
};


/***/ }),

/***/ "af71":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* eslint-disable es/no-symbol -- required for testing */
var V8_VERSION = __webpack_require__("0173");
var fails = __webpack_require__("af9e");
var global = __webpack_require__("85c1");

var $String = global.String;

// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  var symbol = Symbol('symbol detection');
  // Chrome 38 Symbol has incorrect toString conversion
  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
  // nb: Do not call `String` directly to avoid this being optimized out to `symbol+''` which will,
  // of course, fail.
  return !$String(symbol) || !(Object(symbol) instanceof Symbol) ||
    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION && V8_VERSION < 41;
});


/***/ }),

/***/ "af9e":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ "b0a8":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__("af9e");
var global = __webpack_require__("85c1");

// babel-minify and Closure Compiler transpiles RegExp('.', 's') -> /./s and it causes SyntaxError
var $RegExp = global.RegExp;

module.exports = fails(function () {
  var re = $RegExp('.', 's');
  return !(re.dotAll && re.test('\n') && re.flags === 's');
});


/***/ }),

/***/ "b223":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var shared = __webpack_require__("8b3b");
var uid = __webpack_require__("d7b4");

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),

/***/ "b297":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("8bdb");
var createHTML = __webpack_require__("2af7");
var forcedStringHTMLMethod = __webpack_require__("a555");

// `String.prototype.small` method
// https://tc39.es/ecma262/#sec-string.prototype.small
$({ target: 'String', proto: true, forced: forcedStringHTMLMethod('small') }, {
  small: function small() {
    return createHTML(this, 'small', '', '');
  }
});


/***/ }),

/***/ "b2b1":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__("ab4a");
var isArray = __webpack_require__("ac5f");

var $TypeError = TypeError;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Safari < 13 does not throw an error in this case
var SILENT_ON_NON_WRITABLE_LENGTH_SET = DESCRIPTORS && !function () {
  // makes no sense without proper strict mode support
  if (this !== undefined) return true;
  try {
    // eslint-disable-next-line es/no-object-defineproperty -- safe
    Object.defineProperty([], 'length', { writable: false }).length = 1;
  } catch (error) {
    return error instanceof TypeError;
  }
}();

module.exports = SILENT_ON_NON_WRITABLE_LENGTH_SET ? function (O, length) {
  if (isArray(O) && !getOwnPropertyDescriptor(O, 'length').writable) {
    throw new $TypeError('Cannot set read only .length');
  } return O.length = length;
} : function (O, length) {
  return O.length = length;
};


/***/ }),

/***/ "b32e":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var bind = __webpack_require__("ae5c");
var call = __webpack_require__("71e9");
var aConstructor = __webpack_require__("5ee2");
var toObject = __webpack_require__("1099");
var lengthOfArrayLike = __webpack_require__("1fc1");
var getIterator = __webpack_require__("d67c");
var getIteratorMethod = __webpack_require__("5112");
var isArrayIteratorMethod = __webpack_require__("81a7");
var isBigIntArray = __webpack_require__("68fd");
var aTypedArrayConstructor = __webpack_require__("7ddb").aTypedArrayConstructor;
var toBigInt = __webpack_require__("50d5");

module.exports = function from(source /* , mapfn, thisArg */) {
  var C = aConstructor(this);
  var O = toObject(source);
  var argumentsLength = arguments.length;
  var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
  var mapping = mapfn !== undefined;
  var iteratorMethod = getIteratorMethod(O);
  var i, length, result, thisIsBigIntArray, value, step, iterator, next;
  if (iteratorMethod && !isArrayIteratorMethod(iteratorMethod)) {
    iterator = getIterator(O, iteratorMethod);
    next = iterator.next;
    O = [];
    while (!(step = call(next, iterator)).done) {
      O.push(step.value);
    }
  }
  if (mapping && argumentsLength > 2) {
    mapfn = bind(mapfn, arguments[2]);
  }
  length = lengthOfArrayLike(O);
  result = new (aTypedArrayConstructor(C))(length);
  thisIsBigIntArray = isBigIntArray(result);
  for (i = 0; length > i; i++) {
    value = mapping ? mapfn(O[i], i) : O[i];
    // FF30- typed arrays doesn't properly convert objects to typed array values
    result[i] = thisIsBigIntArray ? toBigInt(value) : +value;
  }
  return result;
};


/***/ }),

/***/ "b531":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = function (a, b) {
  try {
    // eslint-disable-next-line no-console -- safe
    arguments.length === 1 ? console.error(a) : console.error(a, b);
  } catch (error) { /* empty */ }
};


/***/ }),

/***/ "b5cb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// `GetIteratorDirect(obj)` abstract operation
// https://tc39.es/proposal-iterator-helpers/#sec-getiteratordirect
module.exports = function (obj) {
  return {
    iterator: obj,
    next: obj.next,
    done: false
  };
};


/***/ }),

/***/ "b60a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__("7ddb");
var $reduce = __webpack_require__("9a51").left;

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.reduce` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.reduce
exportTypedArrayMethod('reduce', function reduce(callbackfn /* , initialValue */) {
  var length = arguments.length;
  return $reduce(aTypedArray(this), callbackfn, length, length > 1 ? arguments[1] : undefined);
});


/***/ }),

/***/ "b643":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var arraySlice = __webpack_require__("37ad");

var floor = Math.floor;

var sort = function (array, comparefn) {
  var length = array.length;

  if (length < 8) {
    // insertion sort
    var i = 1;
    var element, j;

    while (i < length) {
      j = i;
      element = array[i];
      while (j && comparefn(array[j - 1], element) > 0) {
        array[j] = array[--j];
      }
      if (j !== i++) array[j] = element;
    }
  } else {
    // merge sort
    var middle = floor(length / 2);
    var left = sort(arraySlice(array, 0, middle), comparefn);
    var right = sort(arraySlice(array, middle), comparefn);
    var llength = left.length;
    var rlength = right.length;
    var lindex = 0;
    var rindex = 0;

    while (lindex < llength || rindex < rlength) {
      array[lindex + rindex] = (lindex < llength && rindex < rlength)
        ? comparefn(left[lindex], right[rindex]) <= 0 ? left[lindex++] : right[rindex++]
        : lindex < llength ? left[lindex++] : right[rindex++];
    }
  }

  return array;
};

module.exports = sort;


/***/ }),

/***/ "b666":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__("ab4a");
var fails = __webpack_require__("af9e");
var anObject = __webpack_require__("e7e3");
var normalizeStringArgument = __webpack_require__("e7da");

var nativeErrorToString = Error.prototype.toString;

var INCORRECT_TO_STRING = fails(function () {
  if (DESCRIPTORS) {
    // Chrome 32- incorrectly call accessor
    // eslint-disable-next-line es/no-object-create, es/no-object-defineproperty -- safe
    var object = Object.create(Object.defineProperty({}, 'name', { get: function () {
      return this === object;
    } }));
    if (nativeErrorToString.call(object) !== 'true') return true;
  }
  // FF10- does not properly handle non-strings
  return nativeErrorToString.call({ message: 1, name: 2 }) !== '2: 1'
    // IE8 does not properly handle defaults
    || nativeErrorToString.call({}) !== 'Error';
});

module.exports = INCORRECT_TO_STRING ? function toString() {
  var O = anObject(this);
  var name = normalizeStringArgument(O.name, 'Error');
  var message = normalizeStringArgument(O.message);
  return !name ? message : !message ? name : name + ': ' + message;
} : nativeErrorToString;


/***/ }),

/***/ "b6a1":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var isRegExp = __webpack_require__("e629");

var $TypeError = TypeError;

module.exports = function (it) {
  if (isRegExp(it)) {
    throw new $TypeError("The method doesn't accept regular expressions");
  } return it;
};


/***/ }),

/***/ "b720":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var isPrototypeOf = __webpack_require__("1297");

var $TypeError = TypeError;

module.exports = function (it, Prototype) {
  if (isPrototypeOf(Prototype, it)) return it;
  throw new $TypeError('Incorrect invocation');
};


/***/ }),

/***/ "b8b4":
/***/ (function(module, exports, __webpack_require__) {

var Dom = __webpack_require__("5d81");

function DomParser() {
}

DomParser.prototype.parseFromString = function (html) {
  return new Dom(html);
};

module.exports = DomParser;

/***/ }),

/***/ "b8db":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "bb80":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var NATIVE_BIND = __webpack_require__("8f26");

var FunctionPrototype = Function.prototype;
var call = FunctionPrototype.call;
var uncurryThisWithBind = NATIVE_BIND && FunctionPrototype.bind.bind(call, call);

module.exports = NATIVE_BIND ? uncurryThisWithBind : function (fn) {
  return function () {
    return call.apply(fn, arguments);
  };
};


/***/ }),

/***/ "bc67":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var aSet = __webpack_require__("7a0a");
var add = __webpack_require__("41d3").add;
var clone = __webpack_require__("7611");
var getSetRecord = __webpack_require__("c108");
var iterateSimple = __webpack_require__("4053");

// `Set.prototype.union` method
// https://github.com/tc39/proposal-set-methods
module.exports = function union(other) {
  var O = aSet(this);
  var keysIter = getSetRecord(other).getIterator();
  var result = clone(O);
  iterateSimple(keysIter, function (it) {
    add(result, it);
  });
  return result;
};


/***/ }),

/***/ "bd7d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__("7ddb");
var $indexOf = __webpack_require__("036b").indexOf;

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.indexOf` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.indexof
exportTypedArrayMethod('indexOf', function indexOf(searchElement /* , fromIndex */) {
  return $indexOf(aTypedArray(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
});


/***/ }),

/***/ "bda5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var isObject = __webpack_require__("1c06");

module.exports = function (argument) {
  return isObject(argument) || argument === null;
};


/***/ }),

/***/ "bf0f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var TO_STRING_TAG_SUPPORT = __webpack_require__("569b");
var defineBuiltIn = __webpack_require__("81a9");
var toString = __webpack_require__("7934");

// `Object.prototype.toString` method
// https://tc39.es/ecma262/#sec-object.prototype.tostring
if (!TO_STRING_TAG_SUPPORT) {
  defineBuiltIn(Object.prototype, 'toString', toString, { unsafe: true });
}


/***/ }),

/***/ "bf4c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PageBody_vue_vue_type_style_index_0_id_0b286594_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ae52");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PageBody_vue_vue_type_style_index_0_id_0b286594_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PageBody_vue_vue_type_style_index_0_id_0b286594_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "c0d7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = close_braces;

var _helpers = __webpack_require__("f878");

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

/***/ "c108":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var aCallable = __webpack_require__("7992");
var anObject = __webpack_require__("e7e3");
var call = __webpack_require__("71e9");
var toIntegerOrInfinity = __webpack_require__("497b");
var getIteratorDirect = __webpack_require__("b5cb");

var INVALID_SIZE = 'Invalid size';
var $RangeError = RangeError;
var $TypeError = TypeError;
var max = Math.max;

var SetRecord = function (set, intSize) {
  this.set = set;
  this.size = max(intSize, 0);
  this.has = aCallable(set.has);
  this.keys = aCallable(set.keys);
};

SetRecord.prototype = {
  getIterator: function () {
    return getIteratorDirect(anObject(call(this.keys, this.set)));
  },
  includes: function (it) {
    return call(this.has, this.set, it);
  }
};

// `GetSetRecord` abstract operation
// https://tc39.es/proposal-set-methods/#sec-getsetrecord
module.exports = function (obj) {
  anObject(obj);
  var numSize = +obj.size;
  // NOTE: If size is undefined, then numSize will be NaN
  // eslint-disable-next-line no-self-compare -- NaN check
  if (numSize !== numSize) throw new $TypeError(INVALID_SIZE);
  var intSize = toIntegerOrInfinity(numSize);
  if (intSize < 0) throw new $RangeError(INVALID_SIZE);
  return new SetRecord(obj, intSize);
};


/***/ }),

/***/ "c126":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectBar_vue_vue_type_style_index_0_id_632b1400_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("4c42");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectBar_vue_vue_type_style_index_0_id_632b1400_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectBar_vue_vue_type_style_index_0_id_632b1400_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "c1a3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// TODO: Remove this module from `core-js@4` since it's replaced to module below
__webpack_require__("15ab");


/***/ }),

/***/ "c215":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var call = __webpack_require__("71e9");
var isObject = __webpack_require__("1c06");
var isSymbol = __webpack_require__("ddd3");
var getMethod = __webpack_require__("60bc");
var ordinaryToPrimitive = __webpack_require__("df92");
var wellKnownSymbol = __webpack_require__("8c08");

var $TypeError = TypeError;
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
module.exports = function (input, pref) {
  if (!isObject(input) || isSymbol(input)) return input;
  var exoticToPrim = getMethod(input, TO_PRIMITIVE);
  var result;
  if (exoticToPrim) {
    if (pref === undefined) pref = 'default';
    result = call(exoticToPrim, input, pref);
    if (!isObject(result) || isSymbol(result)) return result;
    throw new $TypeError("Can't convert object to primitive value");
  }
  if (pref === undefined) pref = 'number';
  return ordinaryToPrimitive(input, pref);
};


/***/ }),

/***/ "c223":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("8bdb");
var fails = __webpack_require__("af9e");
var isArray = __webpack_require__("ac5f");
var isObject = __webpack_require__("1c06");
var toObject = __webpack_require__("1099");
var lengthOfArrayLike = __webpack_require__("1fc1");
var doesNotExceedSafeInteger = __webpack_require__("41c7");
var createProperty = __webpack_require__("85f7");
var arraySpeciesCreate = __webpack_require__("3242");
var arrayMethodHasSpeciesSupport = __webpack_require__("a554");
var wellKnownSymbol = __webpack_require__("8c08");
var V8_VERSION = __webpack_require__("0173");

var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');

// We can't use this feature detection in V8 since it causes
// deoptimization and serious performance degradation
// https://github.com/zloirock/core-js/issues/679
var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails(function () {
  var array = [];
  array[IS_CONCAT_SPREADABLE] = false;
  return array.concat()[0] !== array;
});

var isConcatSpreadable = function (O) {
  if (!isObject(O)) return false;
  var spreadable = O[IS_CONCAT_SPREADABLE];
  return spreadable !== undefined ? !!spreadable : isArray(O);
};

var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !arrayMethodHasSpeciesSupport('concat');

// `Array.prototype.concat` method
// https://tc39.es/ecma262/#sec-array.prototype.concat
// with adding support of @@isConcatSpreadable and @@species
$({ target: 'Array', proto: true, arity: 1, forced: FORCED }, {
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  concat: function concat(arg) {
    var O = toObject(this);
    var A = arraySpeciesCreate(O, 0);
    var n = 0;
    var i, k, length, len, E;
    for (i = -1, length = arguments.length; i < length; i++) {
      E = i === -1 ? O : arguments[i];
      if (isConcatSpreadable(E)) {
        len = lengthOfArrayLike(E);
        doesNotExceedSafeInteger(n + len);
        for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);
      } else {
        doesNotExceedSafeInteger(n + 1);
        createProperty(A, n++, E);
      }
    }
    A.length = n;
    return A;
  }
});


/***/ }),

/***/ "c238":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__("af9e");

module.exports = !fails(function () {
  // eslint-disable-next-line es/no-object-isextensible, es/no-object-preventextensions -- required for testing
  return Object.isExtensible(Object.preventExtensions({}));
});


/***/ }),

/***/ "c240":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var setToStringTag = __webpack_require__("181d");

// Math[@@toStringTag] property
// https://tc39.es/ecma262/#sec-math-@@tostringtag
setToStringTag(Math, 'Math', true);


/***/ }),

/***/ "c24b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("8bdb");
var FREEZING = __webpack_require__("c238");
var fails = __webpack_require__("af9e");
var isObject = __webpack_require__("1c06");
var onFreeze = __webpack_require__("d0b1").onFreeze;

// eslint-disable-next-line es/no-object-freeze -- safe
var $freeze = Object.freeze;
var FAILS_ON_PRIMITIVES = fails(function () { $freeze(1); });

// `Object.freeze` method
// https://tc39.es/ecma262/#sec-object.freeze
$({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES, sham: !FREEZING }, {
  freeze: function freeze(it) {
    return $freeze && isObject(it) ? $freeze(onFreeze(it)) : it;
  }
});


/***/ }),

/***/ "c26d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("8bdb");
var global = __webpack_require__("85c1");
var defineBuiltInAccessor = __webpack_require__("e4ca");
var DESCRIPTORS = __webpack_require__("ab4a");

var $TypeError = TypeError;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;
var INCORRECT_VALUE = global.self !== global;

// `self` getter
// https://html.spec.whatwg.org/multipage/window-object.html#dom-self
try {
  if (DESCRIPTORS) {
    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
    var descriptor = Object.getOwnPropertyDescriptor(global, 'self');
    // some engines have `self`, but with incorrect descriptor
    // https://github.com/denoland/deno/issues/15765
    if (INCORRECT_VALUE || !descriptor || !descriptor.get || !descriptor.enumerable) {
      defineBuiltInAccessor(global, 'self', {
        get: function self() {
          return global;
        },
        set: function self(value) {
          if (this !== global) throw new $TypeError('Illegal invocation');
          defineProperty(global, 'self', {
            value: value,
            writable: true,
            configurable: true,
            enumerable: true
          });
        },
        configurable: true,
        enumerable: true
      });
    }
  } else $({ global: true, simple: true, forced: INCORRECT_VALUE }, {
    self: global
  });
} catch (error) { /* empty */ }


/***/ }),

/***/ "c337":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var hasOwn = __webpack_require__("338c");
var isCallable = __webpack_require__("474f");
var toObject = __webpack_require__("1099");
var sharedKey = __webpack_require__("b223");
var CORRECT_PROTOTYPE_GETTER = __webpack_require__("1d57");

var IE_PROTO = sharedKey('IE_PROTO');
var $Object = Object;
var ObjectPrototype = $Object.prototype;

// `Object.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.getprototypeof
// eslint-disable-next-line es/no-object-getprototypeof -- safe
module.exports = CORRECT_PROTOTYPE_GETTER ? $Object.getPrototypeOf : function (O) {
  var object = toObject(O);
  if (hasOwn(object, IE_PROTO)) return object[IE_PROTO];
  var constructor = object.constructor;
  if (isCallable(constructor) && object instanceof constructor) {
    return constructor.prototype;
  } return object instanceof $Object ? ObjectPrototype : null;
};


/***/ }),

/***/ "c435":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toIntegerOrInfinity = __webpack_require__("497b");

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
module.exports = function (argument) {
  var len = toIntegerOrInfinity(argument);
  return len > 0 ? min(len, 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ "c5b7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__("7ddb");
var $fill = __webpack_require__("84d6");
var toBigInt = __webpack_require__("50d5");
var classof = __webpack_require__("8e02");
var call = __webpack_require__("71e9");
var uncurryThis = __webpack_require__("bb80");
var fails = __webpack_require__("af9e");

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
var slice = uncurryThis(''.slice);

// V8 ~ Chrome < 59, Safari < 14.1, FF < 55, Edge <=18
var CONVERSION_BUG = fails(function () {
  var count = 0;
  // eslint-disable-next-line es/no-typed-arrays -- safe
  new Int8Array(2).fill({ valueOf: function () { return count++; } });
  return count !== 1;
});

// `%TypedArray%.prototype.fill` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.fill
exportTypedArrayMethod('fill', function fill(value /* , start, end */) {
  var length = arguments.length;
  aTypedArray(this);
  var actualValue = slice(classof(this), 0, 3) === 'Big' ? toBigInt(value) : +value;
  return call($fill, this, actualValue, length > 1 ? arguments[1] : undefined, length > 2 ? arguments[2] : undefined);
}, CONVERSION_BUG);


/***/ }),

/***/ "c6f1":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("8bdb");
var call = __webpack_require__("71e9");
var aCallable = __webpack_require__("7992");
var newPromiseCapabilityModule = __webpack_require__("0a8b");
var perform = __webpack_require__("4135");
var iterate = __webpack_require__("5075");
var PROMISE_STATICS_INCORRECT_ITERATION = __webpack_require__("a537");

// `Promise.all` method
// https://tc39.es/ecma262/#sec-promise.all
$({ target: 'Promise', stat: true, forced: PROMISE_STATICS_INCORRECT_ITERATION }, {
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapabilityModule.f(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var $promiseResolve = aCallable(C.resolve);
      var values = [];
      var counter = 0;
      var remaining = 1;
      iterate(iterable, function (promise) {
        var index = counter++;
        var alreadyCalled = false;
        remaining++;
        call($promiseResolve, C, promise).then(function (value) {
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
  }
});


/***/ }),

/***/ "c89b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// eslint-disable-next-line es/no-typed-arrays -- safe
module.exports = typeof ArrayBuffer != 'undefined' && typeof DataView != 'undefined';


/***/ }),

/***/ "c976":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var createTypedArrayConstructor = __webpack_require__("6a50");

// `Uint8Array` constructor
// https://tc39.es/ecma262/#sec-typedarray-objects
createTypedArrayConstructor('Uint8', function (init) {
  return function Uint8Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),

/***/ "c9b7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__("85c1");

// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;

module.exports = function (key, value) {
  try {
    defineProperty(global, key, { value: value, configurable: true, writable: true });
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),

/***/ "ca99":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__("bb80");
var isCallable = __webpack_require__("474f");
var store = __webpack_require__("9b55");

var functionToString = uncurryThis(Function.toString);

// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (!isCallable(store.inspectSource)) {
  store.inspectSource = function (it) {
    return functionToString(it);
  };
}

module.exports = store.inspectSource;


/***/ }),

/***/ "cc36":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toIntegerOrInfinity = __webpack_require__("497b");
var toLength = __webpack_require__("c435");

var $RangeError = RangeError;

// `ToIndex` abstract operation
// https://tc39.es/ecma262/#sec-toindex
module.exports = function (it) {
  if (it === undefined) return 0;
  var number = toIntegerOrInfinity(it);
  var length = toLength(number);
  if (number !== length) throw new $RangeError('Wrong length or index');
  return length;
};


/***/ }),

/***/ "cca9":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__("af9e");
var global = __webpack_require__("85c1");

// babel-minify and Closure Compiler transpiles RegExp('(?<a>b)', 'g') -> /(?<a>b)/g and it causes SyntaxError
var $RegExp = global.RegExp;

module.exports = fails(function () {
  var re = $RegExp('(?<a>b)', 'g');
  return re.exec('b').groups.a !== 'b' ||
    'b'.replace(re, '$<a>c') !== 'bc';
});


/***/ }),

/***/ "cce3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__("7ddb");
var $findLastIndex = __webpack_require__("6158").findLastIndex;

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.findLastIndex` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.findlastindex
exportTypedArrayMethod('findLastIndex', function findLastIndex(predicate /* , thisArg */) {
  return $findLastIndex(aTypedArray(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
});


/***/ }),

/***/ "cd2c":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "cd6b":
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

/***/ "cf8f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("8bdb");
var $transfer = __webpack_require__("0854");

// `ArrayBuffer.prototype.transferToFixedLength` method
// https://tc39.es/proposal-arraybuffer-transfer/#sec-arraybuffer.prototype.transfertofixedlength
if ($transfer) $({ target: 'ArrayBuffer', proto: true }, {
  transferToFixedLength: function transferToFixedLength() {
    return $transfer(this, arguments.length ? arguments[0] : undefined, false);
  }
});


/***/ }),

/***/ "d009":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__("7ddb");
var $includes = __webpack_require__("036b").includes;

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.includes` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.includes
exportTypedArrayMethod('includes', function includes(searchElement /* , fromIndex */) {
  return $includes(aTypedArray(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
});


/***/ }),

/***/ "d0a8":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var userAgent = __webpack_require__("29d8");

module.exports = /web0s(?!.*chrome)/i.test(userAgent);


/***/ }),

/***/ "d0b1":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("8bdb");
var uncurryThis = __webpack_require__("bb80");
var hiddenKeys = __webpack_require__("11bf");
var isObject = __webpack_require__("1c06");
var hasOwn = __webpack_require__("338c");
var defineProperty = __webpack_require__("d6b1").f;
var getOwnPropertyNamesModule = __webpack_require__("80bb");
var getOwnPropertyNamesExternalModule = __webpack_require__("8449");
var isExtensible = __webpack_require__("1ea2");
var uid = __webpack_require__("d7b4");
var FREEZING = __webpack_require__("c238");

var REQUIRED = false;
var METADATA = uid('meta');
var id = 0;

var setMetadata = function (it) {
  defineProperty(it, METADATA, { value: {
    objectID: 'O' + id++, // object ID
    weakData: {}          // weak collections IDs
  } });
};

var fastKey = function (it, create) {
  // return a primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!hasOwn(it, METADATA)) {
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
  if (!hasOwn(it, METADATA)) {
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
  if (FREEZING && REQUIRED && isExtensible(it) && !hasOwn(it, METADATA)) setMetadata(it);
  return it;
};

var enable = function () {
  meta.enable = function () { /* empty */ };
  REQUIRED = true;
  var getOwnPropertyNames = getOwnPropertyNamesModule.f;
  var splice = uncurryThis([].splice);
  var test = {};
  test[METADATA] = 1;

  // prevent exposing of metadata key
  if (getOwnPropertyNames(test).length) {
    getOwnPropertyNamesModule.f = function (it) {
      var result = getOwnPropertyNames(it);
      for (var i = 0, length = result.length; i < length; i++) {
        if (result[i] === METADATA) {
          splice(result, i, 1);
          break;
        }
      } return result;
    };

    $({ target: 'Object', stat: true, forced: true }, {
      getOwnPropertyNames: getOwnPropertyNamesExternalModule.f
    });
  }
};

var meta = module.exports = {
  enable: enable,
  fastKey: fastKey,
  getWeakData: getWeakData,
  onFreeze: onFreeze
};

hiddenKeys[METADATA] = true;


/***/ }),

/***/ "d4b5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("8bdb");
var getBuiltIn = __webpack_require__("6aa6");
var apply = __webpack_require__("9f9e");
var call = __webpack_require__("71e9");
var uncurryThis = __webpack_require__("bb80");
var fails = __webpack_require__("af9e");
var isCallable = __webpack_require__("474f");
var isSymbol = __webpack_require__("ddd3");
var arraySlice = __webpack_require__("37ad");
var getReplacerFunction = __webpack_require__("5d56");
var NATIVE_SYMBOL = __webpack_require__("af71");

var $String = String;
var $stringify = getBuiltIn('JSON', 'stringify');
var exec = uncurryThis(/./.exec);
var charAt = uncurryThis(''.charAt);
var charCodeAt = uncurryThis(''.charCodeAt);
var replace = uncurryThis(''.replace);
var numberToString = uncurryThis(1.0.toString);

var tester = /[\uD800-\uDFFF]/g;
var low = /^[\uD800-\uDBFF]$/;
var hi = /^[\uDC00-\uDFFF]$/;

var WRONG_SYMBOLS_CONVERSION = !NATIVE_SYMBOL || fails(function () {
  var symbol = getBuiltIn('Symbol')('stringify detection');
  // MS Edge converts symbol values to JSON as {}
  return $stringify([symbol]) !== '[null]'
    // WebKit converts symbol values to JSON as null
    || $stringify({ a: symbol }) !== '{}'
    // V8 throws on boxed symbols
    || $stringify(Object(symbol)) !== '{}';
});

// https://github.com/tc39/proposal-well-formed-stringify
var ILL_FORMED_UNICODE = fails(function () {
  return $stringify('\uDF06\uD834') !== '"\\udf06\\ud834"'
    || $stringify('\uDEAD') !== '"\\udead"';
});

var stringifyWithSymbolsFix = function (it, replacer) {
  var args = arraySlice(arguments);
  var $replacer = getReplacerFunction(replacer);
  if (!isCallable($replacer) && (it === undefined || isSymbol(it))) return; // IE8 returns string on undefined
  args[1] = function (key, value) {
    // some old implementations (like WebKit) could pass numbers as keys
    if (isCallable($replacer)) value = call($replacer, this, $String(key), value);
    if (!isSymbol(value)) return value;
  };
  return apply($stringify, null, args);
};

var fixIllFormed = function (match, offset, string) {
  var prev = charAt(string, offset - 1);
  var next = charAt(string, offset + 1);
  if ((exec(low, match) && !exec(hi, next)) || (exec(hi, match) && !exec(low, prev))) {
    return '\\u' + numberToString(charCodeAt(match, 0), 16);
  } return match;
};

if ($stringify) {
  // `JSON.stringify` method
  // https://tc39.es/ecma262/#sec-json.stringify
  $({ target: 'JSON', stat: true, arity: 3, forced: WRONG_SYMBOLS_CONVERSION || ILL_FORMED_UNICODE }, {
    // eslint-disable-next-line no-unused-vars -- required for `.length`
    stringify: function stringify(it, replacer, space) {
      var args = arraySlice(arguments);
      var result = apply(WRONG_SYMBOLS_CONVERSION ? stringifyWithSymbolsFix : $stringify, null, args);
      return ILL_FORMED_UNICODE && typeof result == 'string' ? replace(result, tester, fixIllFormed) : result;
    }
  });
}


/***/ }),

/***/ "d5c6":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("8bdb");
var tryNodeRequire = __webpack_require__("7257");
var getBuiltIn = __webpack_require__("6aa6");
var fails = __webpack_require__("af9e");
var create = __webpack_require__("e37c");
var createPropertyDescriptor = __webpack_require__("0b5a");
var defineProperty = __webpack_require__("d6b1").f;
var defineBuiltIn = __webpack_require__("81a9");
var defineBuiltInAccessor = __webpack_require__("e4ca");
var hasOwn = __webpack_require__("338c");
var anInstance = __webpack_require__("b720");
var anObject = __webpack_require__("e7e3");
var errorToString = __webpack_require__("b666");
var normalizeStringArgument = __webpack_require__("e7da");
var DOMExceptionConstants = __webpack_require__("e6a2");
var clearErrorStack = __webpack_require__("7e87");
var InternalStateModule = __webpack_require__("235c");
var DESCRIPTORS = __webpack_require__("ab4a");
var IS_PURE = __webpack_require__("a734");

var DOM_EXCEPTION = 'DOMException';
var DATA_CLONE_ERR = 'DATA_CLONE_ERR';
var Error = getBuiltIn('Error');
// NodeJS < 17.0 does not expose `DOMException` to global
var NativeDOMException = getBuiltIn(DOM_EXCEPTION) || (function () {
  try {
    // NodeJS < 15.0 does not expose `MessageChannel` to global
    var MessageChannel = getBuiltIn('MessageChannel') || tryNodeRequire('worker_threads').MessageChannel;
    // eslint-disable-next-line es/no-weak-map, unicorn/require-post-message-target-origin -- safe
    new MessageChannel().port1.postMessage(new WeakMap());
  } catch (error) {
    if (error.name === DATA_CLONE_ERR && error.code === 25) return error.constructor;
  }
})();
var NativeDOMExceptionPrototype = NativeDOMException && NativeDOMException.prototype;
var ErrorPrototype = Error.prototype;
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(DOM_EXCEPTION);
var HAS_STACK = 'stack' in new Error(DOM_EXCEPTION);

var codeFor = function (name) {
  return hasOwn(DOMExceptionConstants, name) && DOMExceptionConstants[name].m ? DOMExceptionConstants[name].c : 0;
};

var $DOMException = function DOMException() {
  anInstance(this, DOMExceptionPrototype);
  var argumentsLength = arguments.length;
  var message = normalizeStringArgument(argumentsLength < 1 ? undefined : arguments[0]);
  var name = normalizeStringArgument(argumentsLength < 2 ? undefined : arguments[1], 'Error');
  var code = codeFor(name);
  setInternalState(this, {
    type: DOM_EXCEPTION,
    name: name,
    message: message,
    code: code
  });
  if (!DESCRIPTORS) {
    this.name = name;
    this.message = message;
    this.code = code;
  }
  if (HAS_STACK) {
    var error = new Error(message);
    error.name = DOM_EXCEPTION;
    defineProperty(this, 'stack', createPropertyDescriptor(1, clearErrorStack(error.stack, 1)));
  }
};

var DOMExceptionPrototype = $DOMException.prototype = create(ErrorPrototype);

var createGetterDescriptor = function (get) {
  return { enumerable: true, configurable: true, get: get };
};

var getterFor = function (key) {
  return createGetterDescriptor(function () {
    return getInternalState(this)[key];
  });
};

if (DESCRIPTORS) {
  // `DOMException.prototype.code` getter
  defineBuiltInAccessor(DOMExceptionPrototype, 'code', getterFor('code'));
  // `DOMException.prototype.message` getter
  defineBuiltInAccessor(DOMExceptionPrototype, 'message', getterFor('message'));
  // `DOMException.prototype.name` getter
  defineBuiltInAccessor(DOMExceptionPrototype, 'name', getterFor('name'));
}

defineProperty(DOMExceptionPrototype, 'constructor', createPropertyDescriptor(1, $DOMException));

// FF36- DOMException is a function, but can't be constructed
var INCORRECT_CONSTRUCTOR = fails(function () {
  return !(new NativeDOMException() instanceof Error);
});

// Safari 10.1 / Chrome 32- / IE8- DOMException.prototype.toString bugs
var INCORRECT_TO_STRING = INCORRECT_CONSTRUCTOR || fails(function () {
  return ErrorPrototype.toString !== errorToString || String(new NativeDOMException(1, 2)) !== '2: 1';
});

// Deno 1.6.3- DOMException.prototype.code just missed
var INCORRECT_CODE = INCORRECT_CONSTRUCTOR || fails(function () {
  return new NativeDOMException(1, 'DataCloneError').code !== 25;
});

// Deno 1.6.3- DOMException constants just missed
var MISSED_CONSTANTS = INCORRECT_CONSTRUCTOR
  || NativeDOMException[DATA_CLONE_ERR] !== 25
  || NativeDOMExceptionPrototype[DATA_CLONE_ERR] !== 25;

var FORCED_CONSTRUCTOR = IS_PURE ? INCORRECT_TO_STRING || INCORRECT_CODE || MISSED_CONSTANTS : INCORRECT_CONSTRUCTOR;

// `DOMException` constructor
// https://webidl.spec.whatwg.org/#idl-DOMException
$({ global: true, constructor: true, forced: FORCED_CONSTRUCTOR }, {
  DOMException: FORCED_CONSTRUCTOR ? $DOMException : NativeDOMException
});

var PolyfilledDOMException = getBuiltIn(DOM_EXCEPTION);
var PolyfilledDOMExceptionPrototype = PolyfilledDOMException.prototype;

if (INCORRECT_TO_STRING && (IS_PURE || NativeDOMException === PolyfilledDOMException)) {
  defineBuiltIn(PolyfilledDOMExceptionPrototype, 'toString', errorToString);
}

if (INCORRECT_CODE && DESCRIPTORS && NativeDOMException === PolyfilledDOMException) {
  defineBuiltInAccessor(PolyfilledDOMExceptionPrototype, 'code', createGetterDescriptor(function () {
    return codeFor(anObject(this).name);
  }));
}

// `DOMException` constants
for (var key in DOMExceptionConstants) if (hasOwn(DOMExceptionConstants, key)) {
  var constant = DOMExceptionConstants[key];
  var constantName = constant.s;
  var descriptor = createPropertyDescriptor(6, constant.c);
  if (!hasOwn(PolyfilledDOMException, constantName)) {
    defineProperty(PolyfilledDOMException, constantName, descriptor);
  }
  if (!hasOwn(PolyfilledDOMExceptionPrototype, constantName)) {
    defineProperty(PolyfilledDOMExceptionPrototype, constantName, descriptor);
  }
}


/***/ }),

/***/ "d60f":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "d63a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__("bb80");
var fails = __webpack_require__("af9e");
var isCallable = __webpack_require__("474f");
var hasOwn = __webpack_require__("338c");
var DESCRIPTORS = __webpack_require__("ab4a");
var CONFIGURABLE_FUNCTION_NAME = __webpack_require__("8945").CONFIGURABLE;
var inspectSource = __webpack_require__("ca99");
var InternalStateModule = __webpack_require__("235c");

var enforceInternalState = InternalStateModule.enforce;
var getInternalState = InternalStateModule.get;
var $String = String;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;
var stringSlice = uncurryThis(''.slice);
var replace = uncurryThis(''.replace);
var join = uncurryThis([].join);

var CONFIGURABLE_LENGTH = DESCRIPTORS && !fails(function () {
  return defineProperty(function () { /* empty */ }, 'length', { value: 8 }).length !== 8;
});

var TEMPLATE = String(String).split('String');

var makeBuiltIn = module.exports = function (value, name, options) {
  if (stringSlice($String(name), 0, 7) === 'Symbol(') {
    name = '[' + replace($String(name), /^Symbol\(([^)]*)\).*$/, '$1') + ']';
  }
  if (options && options.getter) name = 'get ' + name;
  if (options && options.setter) name = 'set ' + name;
  if (!hasOwn(value, 'name') || (CONFIGURABLE_FUNCTION_NAME && value.name !== name)) {
    if (DESCRIPTORS) defineProperty(value, 'name', { value: name, configurable: true });
    else value.name = name;
  }
  if (CONFIGURABLE_LENGTH && options && hasOwn(options, 'arity') && value.length !== options.arity) {
    defineProperty(value, 'length', { value: options.arity });
  }
  try {
    if (options && hasOwn(options, 'constructor') && options.constructor) {
      if (DESCRIPTORS) defineProperty(value, 'prototype', { writable: false });
    // in V8 ~ Chrome 53, prototypes of some methods, like `Array.prototype.values`, are non-writable
    } else if (value.prototype) value.prototype = undefined;
  } catch (error) { /* empty */ }
  var state = enforceInternalState(value);
  if (!hasOwn(state, 'source')) {
    state.source = join(TEMPLATE, typeof name == 'string' ? name : '');
  } return value;
};

// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
// eslint-disable-next-line no-extend-native -- required
Function.prototype.toString = makeBuiltIn(function toString() {
  return isCallable(this) && getInternalState(this).source || inspectSource(this);
}, 'toString');


/***/ }),

/***/ "d67c":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var call = __webpack_require__("71e9");
var aCallable = __webpack_require__("7992");
var anObject = __webpack_require__("e7e3");
var tryToString = __webpack_require__("52df");
var getIteratorMethod = __webpack_require__("5112");

var $TypeError = TypeError;

module.exports = function (argument, usingIterator) {
  var iteratorMethod = arguments.length < 2 ? getIteratorMethod(argument) : usingIterator;
  if (aCallable(iteratorMethod)) return anObject(call(iteratorMethod, argument));
  throw new $TypeError(tryToString(argument) + ' is not iterable');
};


/***/ }),

/***/ "d684":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var aSet = __webpack_require__("7a0a");
var has = __webpack_require__("41d3").has;
var size = __webpack_require__("19fa");
var getSetRecord = __webpack_require__("c108");
var iterateSet = __webpack_require__("5cb2");
var iterateSimple = __webpack_require__("4053");
var iteratorClose = __webpack_require__("7e91");

// `Set.prototype.isDisjointFrom` method
// https://tc39.github.io/proposal-set-methods/#Set.prototype.isDisjointFrom
module.exports = function isDisjointFrom(other) {
  var O = aSet(this);
  var otherRec = getSetRecord(other);
  if (size(O) <= otherRec.size) return iterateSet(O, function (e) {
    if (otherRec.includes(e)) return false;
  }, true) !== false;
  var iterator = otherRec.getIterator();
  return iterateSimple(iterator, function (e) {
    if (has(O, e)) return iteratorClose(iterator, 'normal', false);
  }) !== false;
};


/***/ }),

/***/ "d6b1":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__("ab4a");
var IE8_DOM_DEFINE = __webpack_require__("2ba7");
var V8_PROTOTYPE_DEFINE_BUG = __webpack_require__("fec3");
var anObject = __webpack_require__("e7e3");
var toPropertyKey = __webpack_require__("f9ed");

var $TypeError = TypeError;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var ENUMERABLE = 'enumerable';
var CONFIGURABLE = 'configurable';
var WRITABLE = 'writable';

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? V8_PROTOTYPE_DEFINE_BUG ? function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPropertyKey(P);
  anObject(Attributes);
  if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
    var current = $getOwnPropertyDescriptor(O, P);
    if (current && current[WRITABLE]) {
      O[P] = Attributes.value;
      Attributes = {
        configurable: CONFIGURABLE in Attributes ? Attributes[CONFIGURABLE] : current[CONFIGURABLE],
        enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
        writable: false
      };
    }
  } return $defineProperty(O, P, Attributes);
} : $defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPropertyKey(P);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw new $TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "d723":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "d798":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__("7ddb");
var uncurryThis = __webpack_require__("bb80");

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
var $join = uncurryThis([].join);

// `%TypedArray%.prototype.join` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.join
exportTypedArrayMethod('join', function join(separator) {
  return $join(aTypedArray(this), separator);
});


/***/ }),

/***/ "d7b4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__("bb80");

var id = 0;
var postfix = Math.random();
var toString = uncurryThis(1.0.toString);

module.exports = function (key) {
  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString(++id + postfix, 36);
};


/***/ }),

/***/ "d93f":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "dacf":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// IEEE754 conversions based on https://github.com/feross/ieee754
var $Array = Array;
var abs = Math.abs;
var pow = Math.pow;
var floor = Math.floor;
var log = Math.log;
var LN2 = Math.LN2;

var pack = function (number, mantissaLength, bytes) {
  var buffer = $Array(bytes);
  var exponentLength = bytes * 8 - mantissaLength - 1;
  var eMax = (1 << exponentLength) - 1;
  var eBias = eMax >> 1;
  var rt = mantissaLength === 23 ? pow(2, -24) - pow(2, -77) : 0;
  var sign = number < 0 || number === 0 && 1 / number < 0 ? 1 : 0;
  var index = 0;
  var exponent, mantissa, c;
  number = abs(number);
  // eslint-disable-next-line no-self-compare -- NaN check
  if (number !== number || number === Infinity) {
    // eslint-disable-next-line no-self-compare -- NaN check
    mantissa = number !== number ? 1 : 0;
    exponent = eMax;
  } else {
    exponent = floor(log(number) / LN2);
    c = pow(2, -exponent);
    if (number * c < 1) {
      exponent--;
      c *= 2;
    }
    if (exponent + eBias >= 1) {
      number += rt / c;
    } else {
      number += rt * pow(2, 1 - eBias);
    }
    if (number * c >= 2) {
      exponent++;
      c /= 2;
    }
    if (exponent + eBias >= eMax) {
      mantissa = 0;
      exponent = eMax;
    } else if (exponent + eBias >= 1) {
      mantissa = (number * c - 1) * pow(2, mantissaLength);
      exponent += eBias;
    } else {
      mantissa = number * pow(2, eBias - 1) * pow(2, mantissaLength);
      exponent = 0;
    }
  }
  while (mantissaLength >= 8) {
    buffer[index++] = mantissa & 255;
    mantissa /= 256;
    mantissaLength -= 8;
  }
  exponent = exponent << mantissaLength | mantissa;
  exponentLength += mantissaLength;
  while (exponentLength > 0) {
    buffer[index++] = exponent & 255;
    exponent /= 256;
    exponentLength -= 8;
  }
  buffer[--index] |= sign * 128;
  return buffer;
};

var unpack = function (buffer, mantissaLength) {
  var bytes = buffer.length;
  var exponentLength = bytes * 8 - mantissaLength - 1;
  var eMax = (1 << exponentLength) - 1;
  var eBias = eMax >> 1;
  var nBits = exponentLength - 7;
  var index = bytes - 1;
  var sign = buffer[index--];
  var exponent = sign & 127;
  var mantissa;
  sign >>= 7;
  while (nBits > 0) {
    exponent = exponent * 256 + buffer[index--];
    nBits -= 8;
  }
  mantissa = exponent & (1 << -nBits) - 1;
  exponent >>= -nBits;
  nBits += mantissaLength;
  while (nBits > 0) {
    mantissa = mantissa * 256 + buffer[index--];
    nBits -= 8;
  }
  if (exponent === 0) {
    exponent = 1 - eBias;
  } else if (exponent === eMax) {
    return mantissa ? NaN : sign ? -Infinity : Infinity;
  } else {
    mantissa += pow(2, mantissaLength);
    exponent -= eBias;
  } return (sign ? -1 : 1) * mantissa * pow(2, exponent - mantissaLength);
};

module.exports = {
  pack: pack,
  unpack: unpack
};


/***/ }),

/***/ "db04":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-string-pad-start-end
var uncurryThis = __webpack_require__("bb80");
var toLength = __webpack_require__("c435");
var toString = __webpack_require__("9e70");
var $repeat = __webpack_require__("f298");
var requireObjectCoercible = __webpack_require__("862c");

var repeat = uncurryThis($repeat);
var stringSlice = uncurryThis(''.slice);
var ceil = Math.ceil;

// `String.prototype.{ padStart, padEnd }` methods implementation
var createMethod = function (IS_END) {
  return function ($this, maxLength, fillString) {
    var S = toString(requireObjectCoercible($this));
    var intMaxLength = toLength(maxLength);
    var stringLength = S.length;
    var fillStr = fillString === undefined ? ' ' : toString(fillString);
    var fillLen, stringFiller;
    if (intMaxLength <= stringLength || fillStr === '') return S;
    fillLen = intMaxLength - stringLength;
    stringFiller = repeat(fillStr, ceil(fillLen / fillStr.length));
    if (stringFiller.length > fillLen) stringFiller = stringSlice(stringFiller, 0, fillLen);
    return IS_END ? S + stringFiller : stringFiller + S;
  };
};

module.exports = {
  // `String.prototype.padStart` method
  // https://tc39.es/ecma262/#sec-string.prototype.padstart
  start: createMethod(false),
  // `String.prototype.padEnd` method
  // https://tc39.es/ecma262/#sec-string.prototype.padend
  end: createMethod(true)
};


/***/ }),

/***/ "db06":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__("85c1");
var classof = __webpack_require__("ada5");

module.exports = classof(global.process) === 'process';


/***/ }),

/***/ "dc58":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "dc8a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("8bdb");
var toObject = __webpack_require__("1099");
var nativeKeys = __webpack_require__("ff4f");
var fails = __webpack_require__("af9e");

var FAILS_ON_PRIMITIVES = fails(function () { nativeKeys(1); });

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
$({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES }, {
  keys: function keys(it) {
    return nativeKeys(toObject(it));
  }
});


/***/ }),

/***/ "dcda":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var isCallable = __webpack_require__("474f");
var isObject = __webpack_require__("1c06");
var setPrototypeOf = __webpack_require__("8c4f");

// makes subclassing work correct for wrapped built-ins
module.exports = function ($this, dummy, Wrapper) {
  var NewTarget, NewTargetPrototype;
  if (
    // it can work only with native `setPrototypeOf`
    setPrototypeOf &&
    // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
    isCallable(NewTarget = dummy.constructor) &&
    NewTarget !== Wrapper &&
    isObject(NewTargetPrototype = NewTarget.prototype) &&
    NewTargetPrototype !== Wrapper.prototype
  ) setPrototypeOf($this, NewTargetPrototype);
  return $this;
};


/***/ }),

/***/ "ddd3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var getBuiltIn = __webpack_require__("6aa6");
var isCallable = __webpack_require__("474f");
var isPrototypeOf = __webpack_require__("1297");
var USE_SYMBOL_AS_UID = __webpack_require__("4f04");

var $Object = Object;

module.exports = USE_SYMBOL_AS_UID ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  var $Symbol = getBuiltIn('Symbol');
  return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, $Object(it));
};


/***/ }),

/***/ "de3b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// TODO: Remove from `core-js@4`
__webpack_require__("59b6");


/***/ }),

/***/ "de6c":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__("85c1");
var DOMIterables = __webpack_require__("3de7");
var DOMTokenListPrototype = __webpack_require__("fb6b");
var ArrayIteratorMethods = __webpack_require__("6bfa");
var createNonEnumerableProperty = __webpack_require__("6aca");
var setToStringTag = __webpack_require__("181d");
var wellKnownSymbol = __webpack_require__("8c08");

var ITERATOR = wellKnownSymbol('iterator');
var ArrayValues = ArrayIteratorMethods.values;

var handlePrototype = function (CollectionPrototype, COLLECTION_NAME) {
  if (CollectionPrototype) {
    // some Chrome versions have non-configurable methods on DOMTokenList
    if (CollectionPrototype[ITERATOR] !== ArrayValues) try {
      createNonEnumerableProperty(CollectionPrototype, ITERATOR, ArrayValues);
    } catch (error) {
      CollectionPrototype[ITERATOR] = ArrayValues;
    }
    setToStringTag(CollectionPrototype, COLLECTION_NAME, true);
    if (DOMIterables[COLLECTION_NAME]) for (var METHOD_NAME in ArrayIteratorMethods) {
      // some Chrome versions have non-configurable methods on DOMTokenList
      if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME]) try {
        createNonEnumerableProperty(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME]);
      } catch (error) {
        CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME];
      }
    }
  }
};

for (var COLLECTION_NAME in DOMIterables) {
  handlePrototype(global[COLLECTION_NAME] && global[COLLECTION_NAME].prototype, COLLECTION_NAME);
}

handlePrototype(DOMTokenListPrototype, 'DOMTokenList');


/***/ }),

/***/ "df92":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var call = __webpack_require__("71e9");
var isCallable = __webpack_require__("474f");
var isObject = __webpack_require__("1c06");

var $TypeError = TypeError;

// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
module.exports = function (input, pref) {
  var fn, val;
  if (pref === 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
  if (isCallable(fn = input.valueOf) && !isObject(val = call(fn, input))) return val;
  if (pref !== 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
  throw new $TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "dfcf":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var call = __webpack_require__("71e9");
var uncurryThis = __webpack_require__("bb80");
var fixRegExpWellKnownSymbolLogic = __webpack_require__("7edc");
var anObject = __webpack_require__("e7e3");
var isNullOrUndefined = __webpack_require__("1eb8");
var requireObjectCoercible = __webpack_require__("862c");
var speciesConstructor = __webpack_require__("5dfa");
var advanceStringIndex = __webpack_require__("03dc");
var toLength = __webpack_require__("c435");
var toString = __webpack_require__("9e70");
var getMethod = __webpack_require__("60bc");
var regExpExec = __webpack_require__("07da");
var stickyHelpers = __webpack_require__("edb7");
var fails = __webpack_require__("af9e");

var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y;
var MAX_UINT32 = 0xFFFFFFFF;
var min = Math.min;
var push = uncurryThis([].push);
var stringSlice = uncurryThis(''.slice);

// Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
// Weex JS has frozen built-in prototypes, so use try / catch wrapper
var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails(function () {
  // eslint-disable-next-line regexp/no-empty-group -- required for testing
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length !== 2 || result[0] !== 'a' || result[1] !== 'b';
});

var BUGGY = 'abbc'.split(/(b)*/)[1] === 'c' ||
  // eslint-disable-next-line regexp/no-empty-group -- required for testing
  'test'.split(/(?:)/, -1).length !== 4 ||
  'ab'.split(/(?:ab)*/).length !== 2 ||
  '.'.split(/(.?)(.?)/).length !== 4 ||
  // eslint-disable-next-line regexp/no-empty-capturing-group, regexp/no-empty-group -- required for testing
  '.'.split(/()()/).length > 1 ||
  ''.split(/.?/).length;

// @@split logic
fixRegExpWellKnownSymbolLogic('split', function (SPLIT, nativeSplit, maybeCallNative) {
  var internalSplit = '0'.split(undefined, 0).length ? function (separator, limit) {
    return separator === undefined && limit === 0 ? [] : call(nativeSplit, this, separator, limit);
  } : nativeSplit;

  return [
    // `String.prototype.split` method
    // https://tc39.es/ecma262/#sec-string.prototype.split
    function split(separator, limit) {
      var O = requireObjectCoercible(this);
      var splitter = isNullOrUndefined(separator) ? undefined : getMethod(separator, SPLIT);
      return splitter
        ? call(splitter, separator, O, limit)
        : call(internalSplit, toString(O), separator, limit);
    },
    // `RegExp.prototype[@@split]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@split
    //
    // NOTE: This cannot be properly polyfilled in engines that don't support
    // the 'y' flag.
    function (string, limit) {
      var rx = anObject(this);
      var S = toString(string);

      if (!BUGGY) {
        var res = maybeCallNative(internalSplit, rx, S, limit, internalSplit !== nativeSplit);
        if (res.done) return res.value;
      }

      var C = speciesConstructor(rx, RegExp);
      var unicodeMatching = rx.unicode;
      var flags = (rx.ignoreCase ? 'i' : '') +
                  (rx.multiline ? 'm' : '') +
                  (rx.unicode ? 'u' : '') +
                  (UNSUPPORTED_Y ? 'g' : 'y');
      // ^(? + rx + ) is needed, in combination with some S slicing, to
      // simulate the 'y' flag.
      var splitter = new C(UNSUPPORTED_Y ? '^(?:' + rx.source + ')' : rx, flags);
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (S.length === 0) return regExpExec(splitter, S) === null ? [S] : [];
      var p = 0;
      var q = 0;
      var A = [];
      while (q < S.length) {
        splitter.lastIndex = UNSUPPORTED_Y ? 0 : q;
        var z = regExpExec(splitter, UNSUPPORTED_Y ? stringSlice(S, q) : S);
        var e;
        if (
          z === null ||
          (e = min(toLength(splitter.lastIndex + (UNSUPPORTED_Y ? q : 0)), S.length)) === p
        ) {
          q = advanceStringIndex(S, q, unicodeMatching);
        } else {
          push(A, stringSlice(S, p, q));
          if (A.length === lim) return A;
          for (var i = 1; i <= z.length - 1; i++) {
            push(A, z[i]);
            if (A.length === lim) return A;
          }
          q = p = e;
        }
      }
      push(A, stringSlice(S, p));
      return A;
    }
  ];
}, BUGGY || !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC, UNSUPPORTED_Y);


/***/ }),

/***/ "e0e5":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "e157":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var defineProperty = __webpack_require__("d6b1").f;

module.exports = function (Target, Source, key) {
  key in Target || defineProperty(Target, key, {
    configurable: true,
    get: function () { return Source[key]; },
    set: function (it) { Source[key] = it; }
  });
};


/***/ }),

/***/ "e202":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Queue = function () {
  this.head = null;
  this.tail = null;
};

Queue.prototype = {
  add: function (item) {
    var entry = { item: item, next: null };
    var tail = this.tail;
    if (tail) tail.next = entry;
    else this.head = entry;
    this.tail = entry;
  },
  get: function () {
    var entry = this.head;
    if (entry) {
      var next = this.head = entry.next;
      if (next === null) this.tail = null;
      return entry.item;
    }
  }
};

module.exports = Queue;


/***/ }),

/***/ "e332":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "e34c":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toIntegerOrInfinity = __webpack_require__("497b");

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toIntegerOrInfinity(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),

/***/ "e37c":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* global ActiveXObject -- old IE, WSH */
var anObject = __webpack_require__("e7e3");
var definePropertiesModule = __webpack_require__("a3fb");
var enumBugKeys = __webpack_require__("62f7");
var hiddenKeys = __webpack_require__("11bf");
var html = __webpack_require__("3794");
var documentCreateElement = __webpack_require__("3f57");
var sharedKey = __webpack_require__("b223");

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
    activeXDocument = new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = typeof document != 'undefined'
    ? document.domain && activeXDocument
      ? NullProtoObjectViaActiveX(activeXDocument) // old IE
      : NullProtoObjectViaIFrame()
    : NullProtoObjectViaActiveX(activeXDocument); // WSH
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true;

// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
// eslint-disable-next-line es/no-object-create -- safe
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : definePropertiesModule.f(result, Properties);
};


/***/ }),

/***/ "e39c":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// `Symbol.prototype.description` getter
// https://tc39.es/ecma262/#sec-symbol.prototype.description

var $ = __webpack_require__("8bdb");
var DESCRIPTORS = __webpack_require__("ab4a");
var global = __webpack_require__("85c1");
var uncurryThis = __webpack_require__("bb80");
var hasOwn = __webpack_require__("338c");
var isCallable = __webpack_require__("474f");
var isPrototypeOf = __webpack_require__("1297");
var toString = __webpack_require__("9e70");
var defineBuiltInAccessor = __webpack_require__("e4ca");
var copyConstructorProperties = __webpack_require__("3d8a");

var NativeSymbol = global.Symbol;
var SymbolPrototype = NativeSymbol && NativeSymbol.prototype;

if (DESCRIPTORS && isCallable(NativeSymbol) && (!('description' in SymbolPrototype) ||
  // Safari 12 bug
  NativeSymbol().description !== undefined
)) {
  var EmptyStringDescriptionStore = {};
  // wrap Symbol constructor for correct work with undefined description
  var SymbolWrapper = function Symbol() {
    var description = arguments.length < 1 || arguments[0] === undefined ? undefined : toString(arguments[0]);
    var result = isPrototypeOf(SymbolPrototype, this)
      ? new NativeSymbol(description)
      // in Edge 13, String(Symbol(undefined)) === 'Symbol(undefined)'
      : description === undefined ? NativeSymbol() : NativeSymbol(description);
    if (description === '') EmptyStringDescriptionStore[result] = true;
    return result;
  };

  copyConstructorProperties(SymbolWrapper, NativeSymbol);
  SymbolWrapper.prototype = SymbolPrototype;
  SymbolPrototype.constructor = SymbolWrapper;

  var NATIVE_SYMBOL = String(NativeSymbol('description detection')) === 'Symbol(description detection)';
  var thisSymbolValue = uncurryThis(SymbolPrototype.valueOf);
  var symbolDescriptiveString = uncurryThis(SymbolPrototype.toString);
  var regexp = /^Symbol\((.*)\)[^)]+$/;
  var replace = uncurryThis(''.replace);
  var stringSlice = uncurryThis(''.slice);

  defineBuiltInAccessor(SymbolPrototype, 'description', {
    configurable: true,
    get: function description() {
      var symbol = thisSymbolValue(this);
      if (hasOwn(EmptyStringDescriptionStore, symbol)) return '';
      var string = symbolDescriptiveString(symbol);
      var desc = NATIVE_SYMBOL ? stringSlice(string, 7, -1) : replace(string, regexp, '$1');
      return desc === '' ? undefined : desc;
    }
  });

  $({ global: true, constructor: true, forced: true }, {
    Symbol: SymbolWrapper
  });
}


/***/ }),

/***/ "e3d2":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "e4ca":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var makeBuiltIn = __webpack_require__("d63a");
var defineProperty = __webpack_require__("d6b1");

module.exports = function (target, name, descriptor) {
  if (descriptor.get) makeBuiltIn(descriptor.get, name, { getter: true });
  if (descriptor.set) makeBuiltIn(descriptor.set, name, { setter: true });
  return defineProperty.f(target, name, descriptor);
};


/***/ }),

/***/ "e5d4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("8bdb");
var getBuiltIn = __webpack_require__("6aa6");
var hasOwn = __webpack_require__("338c");
var toString = __webpack_require__("9e70");
var shared = __webpack_require__("8b3b");
var NATIVE_SYMBOL_REGISTRY = __webpack_require__("5b2c");

var StringToSymbolRegistry = shared('string-to-symbol-registry');
var SymbolToStringRegistry = shared('symbol-to-string-registry');

// `Symbol.for` method
// https://tc39.es/ecma262/#sec-symbol.for
$({ target: 'Symbol', stat: true, forced: !NATIVE_SYMBOL_REGISTRY }, {
  'for': function (key) {
    var string = toString(key);
    if (hasOwn(StringToSymbolRegistry, string)) return StringToSymbolRegistry[string];
    var symbol = getBuiltIn('Symbol')(string);
    StringToSymbolRegistry[string] = symbol;
    SymbolToStringRegistry[symbol] = string;
    return symbol;
  }
});


/***/ }),

/***/ "e5f2":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// TODO: Remove this module from `core-js@4` since it's split to modules listed below
__webpack_require__("f6d4");
__webpack_require__("c6f1");
__webpack_require__("3f71");
__webpack_require__("eb6b");
__webpack_require__("8bcd");
__webpack_require__("253d");


/***/ }),

/***/ "e629":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var isObject = __webpack_require__("1c06");
var classof = __webpack_require__("ada5");
var wellKnownSymbol = __webpack_require__("8c08");

var MATCH = wellKnownSymbol('match');

// `IsRegExp` abstract operation
// https://tc39.es/ecma262/#sec-isregexp
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classof(it) === 'RegExp');
};


/***/ }),

/***/ "e6a2":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = {
  IndexSizeError: { s: 'INDEX_SIZE_ERR', c: 1, m: 1 },
  DOMStringSizeError: { s: 'DOMSTRING_SIZE_ERR', c: 2, m: 0 },
  HierarchyRequestError: { s: 'HIERARCHY_REQUEST_ERR', c: 3, m: 1 },
  WrongDocumentError: { s: 'WRONG_DOCUMENT_ERR', c: 4, m: 1 },
  InvalidCharacterError: { s: 'INVALID_CHARACTER_ERR', c: 5, m: 1 },
  NoDataAllowedError: { s: 'NO_DATA_ALLOWED_ERR', c: 6, m: 0 },
  NoModificationAllowedError: { s: 'NO_MODIFICATION_ALLOWED_ERR', c: 7, m: 1 },
  NotFoundError: { s: 'NOT_FOUND_ERR', c: 8, m: 1 },
  NotSupportedError: { s: 'NOT_SUPPORTED_ERR', c: 9, m: 1 },
  InUseAttributeError: { s: 'INUSE_ATTRIBUTE_ERR', c: 10, m: 1 },
  InvalidStateError: { s: 'INVALID_STATE_ERR', c: 11, m: 1 },
  SyntaxError: { s: 'SYNTAX_ERR', c: 12, m: 1 },
  InvalidModificationError: { s: 'INVALID_MODIFICATION_ERR', c: 13, m: 1 },
  NamespaceError: { s: 'NAMESPACE_ERR', c: 14, m: 1 },
  InvalidAccessError: { s: 'INVALID_ACCESS_ERR', c: 15, m: 1 },
  ValidationError: { s: 'VALIDATION_ERR', c: 16, m: 0 },
  TypeMismatchError: { s: 'TYPE_MISMATCH_ERR', c: 17, m: 1 },
  SecurityError: { s: 'SECURITY_ERR', c: 18, m: 1 },
  NetworkError: { s: 'NETWORK_ERR', c: 19, m: 1 },
  AbortError: { s: 'ABORT_ERR', c: 20, m: 1 },
  URLMismatchError: { s: 'URL_MISMATCH_ERR', c: 21, m: 1 },
  QuotaExceededError: { s: 'QUOTA_EXCEEDED_ERR', c: 22, m: 1 },
  TimeoutError: { s: 'TIMEOUT_ERR', c: 23, m: 1 },
  InvalidNodeTypeError: { s: 'INVALID_NODE_TYPE_ERR', c: 24, m: 1 },
  DataCloneError: { s: 'DATA_CLONE_ERR', c: 25, m: 1 }
};


/***/ }),

/***/ "e6a28":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CircleSpinner_vue_vue_type_style_index_0_id_2bc59fa8_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("e3d2");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CircleSpinner_vue_vue_type_style_index_0_id_2bc59fa8_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CircleSpinner_vue_vue_type_style_index_0_id_2bc59fa8_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "e6d4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__("7ddb");
var uncurryThis = __webpack_require__("bb80");
var aCallable = __webpack_require__("7992");
var arrayFromConstructorAndList = __webpack_require__("ac38");

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var getTypedArrayConstructor = ArrayBufferViewCore.getTypedArrayConstructor;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
var sort = uncurryThis(ArrayBufferViewCore.TypedArrayPrototype.sort);

// `%TypedArray%.prototype.toSorted` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.tosorted
exportTypedArrayMethod('toSorted', function toSorted(compareFn) {
  if (compareFn !== undefined) aCallable(compareFn);
  var O = aTypedArray(this);
  var A = arrayFromConstructorAndList(getTypedArrayConstructor(O), O);
  return sort(A, compareFn);
});


/***/ }),

/***/ "e725":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "e78b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// `Math.sign` method implementation
// https://tc39.es/ecma262/#sec-math.sign
// eslint-disable-next-line es/no-math-sign -- safe
module.exports = Math.sign || function sign(x) {
  var n = +x;
  // eslint-disable-next-line no-self-compare -- NaN check
  return n === 0 || n !== n ? n : n < 0 ? -1 : 1;
};


/***/ }),

/***/ "e7da":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toString = __webpack_require__("9e70");

module.exports = function (argument, $default) {
  return argument === undefined ? arguments.length < 2 ? '' : $default : toString(argument);
};


/***/ }),

/***/ "e7e3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var isObject = __webpack_require__("1c06");

var $String = String;
var $TypeError = TypeError;

// `Assert: Type(argument) is Object`
module.exports = function (argument) {
  if (isObject(argument)) return argument;
  throw new $TypeError($String(argument) + ' is not an object');
};


/***/ }),

/***/ "e88c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PageHeader_vue_vue_type_style_index_0_id_53c0243a_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("103d");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PageHeader_vue_vue_type_style_index_0_id_53c0243a_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PageHeader_vue_vue_type_style_index_0_id_53c0243a_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "ea07":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__("ab4a");
var fails = __webpack_require__("af9e");
var uncurryThis = __webpack_require__("bb80");
var objectGetPrototypeOf = __webpack_require__("c337");
var objectKeys = __webpack_require__("ff4f");
var toIndexedObject = __webpack_require__("f660");
var $propertyIsEnumerable = __webpack_require__("346b").f;

var propertyIsEnumerable = uncurryThis($propertyIsEnumerable);
var push = uncurryThis([].push);

// in some IE versions, `propertyIsEnumerable` returns incorrect result on integer keys
// of `null` prototype objects
var IE_BUG = DESCRIPTORS && fails(function () {
  // eslint-disable-next-line es/no-object-create -- safe
  var O = Object.create(null);
  O[2] = 2;
  return !propertyIsEnumerable(O, 2);
});

// `Object.{ entries, values }` methods implementation
var createMethod = function (TO_ENTRIES) {
  return function (it) {
    var O = toIndexedObject(it);
    var keys = objectKeys(O);
    var IE_WORKAROUND = IE_BUG && objectGetPrototypeOf(O) === null;
    var length = keys.length;
    var i = 0;
    var result = [];
    var key;
    while (length > i) {
      key = keys[i++];
      if (!DESCRIPTORS || (IE_WORKAROUND ? key in O : propertyIsEnumerable(O, key))) {
        push(result, TO_ENTRIES ? [key, O[key]] : O[key]);
      }
    }
    return result;
  };
};

module.exports = {
  // `Object.entries` method
  // https://tc39.es/ecma262/#sec-object.entries
  entries: createMethod(true),
  // `Object.values` method
  // https://tc39.es/ecma262/#sec-object.values
  values: createMethod(false)
};


/***/ }),

/***/ "ea88":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Account_vue_vue_type_style_index_0_id_579aeff3_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("5fd3");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Account_vue_vue_type_style_index_0_id_579aeff3_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Account_vue_vue_type_style_index_0_id_579aeff3_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "eb6b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("8bdb");
var call = __webpack_require__("71e9");
var aCallable = __webpack_require__("7992");
var newPromiseCapabilityModule = __webpack_require__("0a8b");
var perform = __webpack_require__("4135");
var iterate = __webpack_require__("5075");
var PROMISE_STATICS_INCORRECT_ITERATION = __webpack_require__("a537");

// `Promise.race` method
// https://tc39.es/ecma262/#sec-promise.race
$({ target: 'Promise', stat: true, forced: PROMISE_STATICS_INCORRECT_ITERATION }, {
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapabilityModule.f(C);
    var reject = capability.reject;
    var result = perform(function () {
      var $promiseResolve = aCallable(C.resolve);
      iterate(iterable, function (promise) {
        call($promiseResolve, C, promise).then(capability.resolve, reject);
      });
    });
    if (result.error) reject(result.value);
    return capability.promise;
  }
});


/***/ }),

/***/ "eb9a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__("ab4a");
var uncurryThis = __webpack_require__("bb80");
var call = __webpack_require__("71e9");
var fails = __webpack_require__("af9e");
var objectKeys = __webpack_require__("ff4f");
var getOwnPropertySymbolsModule = __webpack_require__("7d3c");
var propertyIsEnumerableModule = __webpack_require__("346b");
var toObject = __webpack_require__("1099");
var IndexedObject = __webpack_require__("7e41");

// eslint-disable-next-line es/no-object-assign -- safe
var $assign = Object.assign;
// eslint-disable-next-line es/no-object-defineproperty -- required for testing
var defineProperty = Object.defineProperty;
var concat = uncurryThis([].concat);

// `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign
module.exports = !$assign || fails(function () {
  // should have correct order of operations (Edge bug)
  if (DESCRIPTORS && $assign({ b: 1 }, $assign(defineProperty({}, 'a', {
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
  // eslint-disable-next-line es/no-symbol -- safe
  var symbol = Symbol('assign detection');
  var alphabet = 'abcdefghijklmnopqrst';
  A[symbol] = 7;
  alphabet.split('').forEach(function (chr) { B[chr] = chr; });
  return $assign({}, A)[symbol] !== 7 || objectKeys($assign({}, B)).join('') !== alphabet;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars -- required for `.length`
  var T = toObject(target);
  var argumentsLength = arguments.length;
  var index = 1;
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  var propertyIsEnumerable = propertyIsEnumerableModule.f;
  while (argumentsLength > index) {
    var S = IndexedObject(arguments[index++]);
    var keys = getOwnPropertySymbols ? concat(objectKeys(S), getOwnPropertySymbols(S)) : objectKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || call(propertyIsEnumerable, S, key)) T[key] = S[key];
    }
  } return T;
} : $assign;


/***/ }),

/***/ "edb7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__("af9e");
var global = __webpack_require__("85c1");

// babel-minify and Closure Compiler transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
var $RegExp = global.RegExp;

var UNSUPPORTED_Y = fails(function () {
  var re = $RegExp('a', 'y');
  re.lastIndex = 2;
  return re.exec('abcd') !== null;
});

// UC Browser bug
// https://github.com/zloirock/core-js/issues/1008
var MISSED_STICKY = UNSUPPORTED_Y || fails(function () {
  return !$RegExp('a', 'y').sticky;
});

var BROKEN_CARET = UNSUPPORTED_Y || fails(function () {
  // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
  var re = $RegExp('^r', 'gy');
  re.lastIndex = 2;
  return re.exec('str') !== null;
});

module.exports = {
  BROKEN_CARET: BROKEN_CARET,
  MISSED_STICKY: MISSED_STICKY,
  UNSUPPORTED_Y: UNSUPPORTED_Y
};


/***/ }),

/***/ "ee0f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LabelInput_vue_vue_type_style_index_0_id_c08b4c6e_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("dc58");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LabelInput_vue_vue_type_style_index_0_id_c08b4c6e_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LabelInput_vue_vue_type_style_index_0_id_c08b4c6e_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "ee98":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__("bb80");
var requireObjectCoercible = __webpack_require__("862c");
var toString = __webpack_require__("9e70");
var whitespaces = __webpack_require__("f072");

var replace = uncurryThis(''.replace);
var ltrim = RegExp('^[' + whitespaces + ']+');
var rtrim = RegExp('(^|[^' + whitespaces + '])[' + whitespaces + ']+$');

// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
var createMethod = function (TYPE) {
  return function ($this) {
    var string = toString(requireObjectCoercible($this));
    if (TYPE & 1) string = replace(string, ltrim, '');
    if (TYPE & 2) string = replace(string, rtrim, '$1');
    return string;
  };
};

module.exports = {
  // `String.prototype.{ trimLeft, trimStart }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimstart
  start: createMethod(1),
  // `String.prototype.{ trimRight, trimEnd }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimend
  end: createMethod(2),
  // `String.prototype.trim` method
  // https://tc39.es/ecma262/#sec-string.prototype.trim
  trim: createMethod(3)
};


/***/ }),

/***/ "efa5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__("85c1");
var uncurryThis = __webpack_require__("bb80");
var DESCRIPTORS = __webpack_require__("ab4a");
var NATIVE_ARRAY_BUFFER = __webpack_require__("c89b");
var FunctionName = __webpack_require__("8945");
var createNonEnumerableProperty = __webpack_require__("6aca");
var defineBuiltInAccessor = __webpack_require__("e4ca");
var defineBuiltIns = __webpack_require__("a74c");
var fails = __webpack_require__("af9e");
var anInstance = __webpack_require__("b720");
var toIntegerOrInfinity = __webpack_require__("497b");
var toLength = __webpack_require__("c435");
var toIndex = __webpack_require__("cc36");
var fround = __webpack_require__("0e40");
var IEEE754 = __webpack_require__("dacf");
var getPrototypeOf = __webpack_require__("c337");
var setPrototypeOf = __webpack_require__("8c4f");
var arrayFill = __webpack_require__("84d6");
var arraySlice = __webpack_require__("37ad");
var inheritIfRequired = __webpack_require__("dcda");
var copyConstructorProperties = __webpack_require__("3d8a");
var setToStringTag = __webpack_require__("181d");
var InternalStateModule = __webpack_require__("235c");

var PROPER_FUNCTION_NAME = FunctionName.PROPER;
var CONFIGURABLE_FUNCTION_NAME = FunctionName.CONFIGURABLE;
var ARRAY_BUFFER = 'ArrayBuffer';
var DATA_VIEW = 'DataView';
var PROTOTYPE = 'prototype';
var WRONG_LENGTH = 'Wrong length';
var WRONG_INDEX = 'Wrong index';
var getInternalArrayBufferState = InternalStateModule.getterFor(ARRAY_BUFFER);
var getInternalDataViewState = InternalStateModule.getterFor(DATA_VIEW);
var setInternalState = InternalStateModule.set;
var NativeArrayBuffer = global[ARRAY_BUFFER];
var $ArrayBuffer = NativeArrayBuffer;
var ArrayBufferPrototype = $ArrayBuffer && $ArrayBuffer[PROTOTYPE];
var $DataView = global[DATA_VIEW];
var DataViewPrototype = $DataView && $DataView[PROTOTYPE];
var ObjectPrototype = Object.prototype;
var Array = global.Array;
var RangeError = global.RangeError;
var fill = uncurryThis(arrayFill);
var reverse = uncurryThis([].reverse);

var packIEEE754 = IEEE754.pack;
var unpackIEEE754 = IEEE754.unpack;

var packInt8 = function (number) {
  return [number & 0xFF];
};

var packInt16 = function (number) {
  return [number & 0xFF, number >> 8 & 0xFF];
};

var packInt32 = function (number) {
  return [number & 0xFF, number >> 8 & 0xFF, number >> 16 & 0xFF, number >> 24 & 0xFF];
};

var unpackInt32 = function (buffer) {
  return buffer[3] << 24 | buffer[2] << 16 | buffer[1] << 8 | buffer[0];
};

var packFloat32 = function (number) {
  return packIEEE754(fround(number), 23, 4);
};

var packFloat64 = function (number) {
  return packIEEE754(number, 52, 8);
};

var addGetter = function (Constructor, key, getInternalState) {
  defineBuiltInAccessor(Constructor[PROTOTYPE], key, {
    configurable: true,
    get: function () {
      return getInternalState(this)[key];
    }
  });
};

var get = function (view, count, index, isLittleEndian) {
  var store = getInternalDataViewState(view);
  var intIndex = toIndex(index);
  var boolIsLittleEndian = !!isLittleEndian;
  if (intIndex + count > store.byteLength) throw new RangeError(WRONG_INDEX);
  var bytes = store.bytes;
  var start = intIndex + store.byteOffset;
  var pack = arraySlice(bytes, start, start + count);
  return boolIsLittleEndian ? pack : reverse(pack);
};

var set = function (view, count, index, conversion, value, isLittleEndian) {
  var store = getInternalDataViewState(view);
  var intIndex = toIndex(index);
  var pack = conversion(+value);
  var boolIsLittleEndian = !!isLittleEndian;
  if (intIndex + count > store.byteLength) throw new RangeError(WRONG_INDEX);
  var bytes = store.bytes;
  var start = intIndex + store.byteOffset;
  for (var i = 0; i < count; i++) bytes[start + i] = pack[boolIsLittleEndian ? i : count - i - 1];
};

if (!NATIVE_ARRAY_BUFFER) {
  $ArrayBuffer = function ArrayBuffer(length) {
    anInstance(this, ArrayBufferPrototype);
    var byteLength = toIndex(length);
    setInternalState(this, {
      type: ARRAY_BUFFER,
      bytes: fill(Array(byteLength), 0),
      byteLength: byteLength
    });
    if (!DESCRIPTORS) {
      this.byteLength = byteLength;
      this.detached = false;
    }
  };

  ArrayBufferPrototype = $ArrayBuffer[PROTOTYPE];

  $DataView = function DataView(buffer, byteOffset, byteLength) {
    anInstance(this, DataViewPrototype);
    anInstance(buffer, ArrayBufferPrototype);
    var bufferState = getInternalArrayBufferState(buffer);
    var bufferLength = bufferState.byteLength;
    var offset = toIntegerOrInfinity(byteOffset);
    if (offset < 0 || offset > bufferLength) throw new RangeError('Wrong offset');
    byteLength = byteLength === undefined ? bufferLength - offset : toLength(byteLength);
    if (offset + byteLength > bufferLength) throw new RangeError(WRONG_LENGTH);
    setInternalState(this, {
      type: DATA_VIEW,
      buffer: buffer,
      byteLength: byteLength,
      byteOffset: offset,
      bytes: bufferState.bytes
    });
    if (!DESCRIPTORS) {
      this.buffer = buffer;
      this.byteLength = byteLength;
      this.byteOffset = offset;
    }
  };

  DataViewPrototype = $DataView[PROTOTYPE];

  if (DESCRIPTORS) {
    addGetter($ArrayBuffer, 'byteLength', getInternalArrayBufferState);
    addGetter($DataView, 'buffer', getInternalDataViewState);
    addGetter($DataView, 'byteLength', getInternalDataViewState);
    addGetter($DataView, 'byteOffset', getInternalDataViewState);
  }

  defineBuiltIns(DataViewPrototype, {
    getInt8: function getInt8(byteOffset) {
      return get(this, 1, byteOffset)[0] << 24 >> 24;
    },
    getUint8: function getUint8(byteOffset) {
      return get(this, 1, byteOffset)[0];
    },
    getInt16: function getInt16(byteOffset /* , littleEndian */) {
      var bytes = get(this, 2, byteOffset, arguments.length > 1 ? arguments[1] : false);
      return (bytes[1] << 8 | bytes[0]) << 16 >> 16;
    },
    getUint16: function getUint16(byteOffset /* , littleEndian */) {
      var bytes = get(this, 2, byteOffset, arguments.length > 1 ? arguments[1] : false);
      return bytes[1] << 8 | bytes[0];
    },
    getInt32: function getInt32(byteOffset /* , littleEndian */) {
      return unpackInt32(get(this, 4, byteOffset, arguments.length > 1 ? arguments[1] : false));
    },
    getUint32: function getUint32(byteOffset /* , littleEndian */) {
      return unpackInt32(get(this, 4, byteOffset, arguments.length > 1 ? arguments[1] : false)) >>> 0;
    },
    getFloat32: function getFloat32(byteOffset /* , littleEndian */) {
      return unpackIEEE754(get(this, 4, byteOffset, arguments.length > 1 ? arguments[1] : false), 23);
    },
    getFloat64: function getFloat64(byteOffset /* , littleEndian */) {
      return unpackIEEE754(get(this, 8, byteOffset, arguments.length > 1 ? arguments[1] : false), 52);
    },
    setInt8: function setInt8(byteOffset, value) {
      set(this, 1, byteOffset, packInt8, value);
    },
    setUint8: function setUint8(byteOffset, value) {
      set(this, 1, byteOffset, packInt8, value);
    },
    setInt16: function setInt16(byteOffset, value /* , littleEndian */) {
      set(this, 2, byteOffset, packInt16, value, arguments.length > 2 ? arguments[2] : false);
    },
    setUint16: function setUint16(byteOffset, value /* , littleEndian */) {
      set(this, 2, byteOffset, packInt16, value, arguments.length > 2 ? arguments[2] : false);
    },
    setInt32: function setInt32(byteOffset, value /* , littleEndian */) {
      set(this, 4, byteOffset, packInt32, value, arguments.length > 2 ? arguments[2] : false);
    },
    setUint32: function setUint32(byteOffset, value /* , littleEndian */) {
      set(this, 4, byteOffset, packInt32, value, arguments.length > 2 ? arguments[2] : false);
    },
    setFloat32: function setFloat32(byteOffset, value /* , littleEndian */) {
      set(this, 4, byteOffset, packFloat32, value, arguments.length > 2 ? arguments[2] : false);
    },
    setFloat64: function setFloat64(byteOffset, value /* , littleEndian */) {
      set(this, 8, byteOffset, packFloat64, value, arguments.length > 2 ? arguments[2] : false);
    }
  });
} else {
  var INCORRECT_ARRAY_BUFFER_NAME = PROPER_FUNCTION_NAME && NativeArrayBuffer.name !== ARRAY_BUFFER;
  /* eslint-disable no-new -- required for testing */
  if (!fails(function () {
    NativeArrayBuffer(1);
  }) || !fails(function () {
    new NativeArrayBuffer(-1);
  }) || fails(function () {
    new NativeArrayBuffer();
    new NativeArrayBuffer(1.5);
    new NativeArrayBuffer(NaN);
    return NativeArrayBuffer.length !== 1 || INCORRECT_ARRAY_BUFFER_NAME && !CONFIGURABLE_FUNCTION_NAME;
  })) {
    /* eslint-enable no-new -- required for testing */
    $ArrayBuffer = function ArrayBuffer(length) {
      anInstance(this, ArrayBufferPrototype);
      return inheritIfRequired(new NativeArrayBuffer(toIndex(length)), this, $ArrayBuffer);
    };

    $ArrayBuffer[PROTOTYPE] = ArrayBufferPrototype;

    ArrayBufferPrototype.constructor = $ArrayBuffer;

    copyConstructorProperties($ArrayBuffer, NativeArrayBuffer);
  } else if (INCORRECT_ARRAY_BUFFER_NAME && CONFIGURABLE_FUNCTION_NAME) {
    createNonEnumerableProperty(NativeArrayBuffer, 'name', ARRAY_BUFFER);
  }

  // WebKit bug - the same parent prototype for typed arrays and data view
  if (setPrototypeOf && getPrototypeOf(DataViewPrototype) !== ObjectPrototype) {
    setPrototypeOf(DataViewPrototype, ObjectPrototype);
  }

  // iOS Safari 7.x bug
  var testView = new $DataView(new $ArrayBuffer(2));
  var $setInt8 = uncurryThis(DataViewPrototype.setInt8);
  testView.setInt8(0, 2147483648);
  testView.setInt8(1, 2147483649);
  if (testView.getInt8(0) || !testView.getInt8(1)) defineBuiltIns(DataViewPrototype, {
    setInt8: function setInt8(byteOffset, value) {
      $setInt8(this, byteOffset, value << 24 >> 24);
    },
    setUint8: function setUint8(byteOffset, value) {
      $setInt8(this, byteOffset, value << 24 >> 24);
    }
  }, { unsafe: true });
}

setToStringTag($ArrayBuffer, ARRAY_BUFFER);
setToStringTag($DataView, DATA_VIEW);

module.exports = {
  ArrayBuffer: $ArrayBuffer,
  DataView: $DataView
};


/***/ }),

/***/ "efba":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__("7ddb");
var $forEach = __webpack_require__("4d16").forEach;

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.forEach` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.foreach
exportTypedArrayMethod('forEach', function forEach(callbackfn /* , thisArg */) {
  $forEach(aTypedArray(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
});


/***/ }),

/***/ "effb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var call = __webpack_require__("71e9");
var getBuiltIn = __webpack_require__("6aa6");
var wellKnownSymbol = __webpack_require__("8c08");
var defineBuiltIn = __webpack_require__("81a9");

module.exports = function () {
  var Symbol = getBuiltIn('Symbol');
  var SymbolPrototype = Symbol && Symbol.prototype;
  var valueOf = SymbolPrototype && SymbolPrototype.valueOf;
  var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');

  if (SymbolPrototype && !SymbolPrototype[TO_PRIMITIVE]) {
    // `Symbol.prototype[@@toPrimitive]` method
    // https://tc39.es/ecma262/#sec-symbol.prototype-@@toprimitive
    // eslint-disable-next-line no-unused-vars -- required for .length
    defineBuiltIn(SymbolPrototype, TO_PRIMITIVE, function (hint) {
      return call(valueOf, this);
    }, { arity: 1 });
  }
};


/***/ }),

/***/ "f02d":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Amount_vue_vue_type_style_index_0_id_6a0fda52_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("e332");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Amount_vue_vue_type_style_index_0_id_6a0fda52_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Amount_vue_vue_type_style_index_0_id_6a0fda52_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "f042":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("8bdb");
var sign = __webpack_require__("e78b");

// `Math.sign` method
// https://tc39.es/ecma262/#sec-math.sign
$({ target: 'Math', stat: true }, {
  sign: sign
});


/***/ }),

/***/ "f072":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// a string of all valid unicode whitespaces
module.exports = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002' +
  '\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),

/***/ "f074":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var getBuiltIn = __webpack_require__("6aa6");
var setToStringTag = __webpack_require__("181d");

var DOM_EXCEPTION = 'DOMException';

// `DOMException.prototype[@@toStringTag]` property
setToStringTag(getBuiltIn(DOM_EXCEPTION), DOM_EXCEPTION);


/***/ }),

/***/ "f0a4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var userAgent = __webpack_require__("29d8");

module.exports = /ipad|iphone|ipod/i.test(userAgent) && typeof Pebble != 'undefined';


/***/ }),

/***/ "f118":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("8bdb");
var symmetricDifference = __webpack_require__("2c40");
var setMethodAcceptSetLike = __webpack_require__("45bf");

// `Set.prototype.symmetricDifference` method
// https://github.com/tc39/proposal-set-methods
$({ target: 'Set', proto: true, real: true, forced: !setMethodAcceptSetLike('symmetricDifference') }, {
  symmetricDifference: symmetricDifference
});


/***/ }),

/***/ "f221":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var isObject = __webpack_require__("1c06");

var floor = Math.floor;

// `IsIntegralNumber` abstract operation
// https://tc39.es/ecma262/#sec-isintegralnumber
// eslint-disable-next-line es/no-number-isinteger -- safe
module.exports = Number.isInteger || function isInteger(it) {
  return !isObject(it) && isFinite(it) && floor(it) === it;
};


/***/ }),

/***/ "f259":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var path = __webpack_require__("a1d4");
var hasOwn = __webpack_require__("338c");
var wrappedWellKnownSymbolModule = __webpack_require__("9917");
var defineProperty = __webpack_require__("d6b1").f;

module.exports = function (NAME) {
  var Symbol = path.Symbol || (path.Symbol = {});
  if (!hasOwn(Symbol, NAME)) defineProperty(Symbol, NAME, {
    value: wrappedWellKnownSymbolModule.f(NAME)
  });
};


/***/ }),

/***/ "f260":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var aSet = __webpack_require__("7a0a");
var has = __webpack_require__("41d3").has;
var size = __webpack_require__("19fa");
var getSetRecord = __webpack_require__("c108");
var iterateSimple = __webpack_require__("4053");
var iteratorClose = __webpack_require__("7e91");

// `Set.prototype.isSupersetOf` method
// https://tc39.github.io/proposal-set-methods/#Set.prototype.isSupersetOf
module.exports = function isSupersetOf(other) {
  var O = aSet(this);
  var otherRec = getSetRecord(other);
  if (size(O) < otherRec.size) return false;
  var iterator = otherRec.getIterator();
  return iterateSimple(iterator, function (e) {
    if (!has(O, e)) return iteratorClose(iterator, 'normal', false);
  }) !== false;
};


/***/ }),

/***/ "f298":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toIntegerOrInfinity = __webpack_require__("497b");
var toString = __webpack_require__("9e70");
var requireObjectCoercible = __webpack_require__("862c");

var $RangeError = RangeError;

// `String.prototype.repeat` method implementation
// https://tc39.es/ecma262/#sec-string.prototype.repeat
module.exports = function repeat(count) {
  var str = toString(requireObjectCoercible(this));
  var result = '';
  var n = toIntegerOrInfinity(count);
  if (n < 0 || n === Infinity) throw new $RangeError('Wrong number of repetitions');
  for (;n > 0; (n >>>= 1) && (str += str)) if (n & 1) result += str;
  return result;
};


/***/ }),

/***/ "f3f2":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $forEach = __webpack_require__("4d16").forEach;
var arrayMethodIsStrict = __webpack_require__("2b04");

var STRICT_METHOD = arrayMethodIsStrict('forEach');

// `Array.prototype.forEach` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.foreach
module.exports = !STRICT_METHOD ? function forEach(callbackfn /* , thisArg */) {
  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
// eslint-disable-next-line es/no-array-prototype-foreach -- safe
} : [].forEach;


/***/ }),

/***/ "f3f7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// TODO: Remove this module from `core-js@4` since it's replaced to module below
__webpack_require__("53f7");


/***/ }),

/***/ "f491":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var anObject = __webpack_require__("e7e3");
var isObject = __webpack_require__("1c06");
var newPromiseCapability = __webpack_require__("0a8b");

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),

/***/ "f511":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var aSet = __webpack_require__("7a0a");
var SetHelpers = __webpack_require__("41d3");
var size = __webpack_require__("19fa");
var getSetRecord = __webpack_require__("c108");
var iterateSet = __webpack_require__("5cb2");
var iterateSimple = __webpack_require__("4053");

var Set = SetHelpers.Set;
var add = SetHelpers.add;
var has = SetHelpers.has;

// `Set.prototype.intersection` method
// https://github.com/tc39/proposal-set-methods
module.exports = function intersection(other) {
  var O = aSet(this);
  var otherRec = getSetRecord(other);
  var result = new Set();

  if (size(O) > otherRec.size) {
    iterateSimple(otherRec.getIterator(), function (e) {
      if (has(O, e)) add(result, e);
    });
  } else {
    iterateSet(O, function (e) {
      if (otherRec.includes(e)) add(result, e);
    });
  }

  return result;
};


/***/ }),

/***/ "f547":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__("7ddb");
var apply = __webpack_require__("9f9e");
var $lastIndexOf = __webpack_require__("5145");

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.lastIndexOf` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.lastindexof
exportTypedArrayMethod('lastIndexOf', function lastIndexOf(searchElement /* , fromIndex */) {
  var length = arguments.length;
  return apply($lastIndexOf, aTypedArray(this), length > 1 ? [searchElement, arguments[1]] : [searchElement]);
});


/***/ }),

/***/ "f660":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__("7e41");
var requireObjectCoercible = __webpack_require__("862c");

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),

/***/ "f6d4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("8bdb");
var IS_PURE = __webpack_require__("a734");
var IS_NODE = __webpack_require__("db06");
var global = __webpack_require__("85c1");
var call = __webpack_require__("71e9");
var defineBuiltIn = __webpack_require__("81a9");
var setPrototypeOf = __webpack_require__("8c4f");
var setToStringTag = __webpack_require__("181d");
var setSpecies = __webpack_require__("437f");
var aCallable = __webpack_require__("7992");
var isCallable = __webpack_require__("474f");
var isObject = __webpack_require__("1c06");
var anInstance = __webpack_require__("b720");
var speciesConstructor = __webpack_require__("5dfa");
var task = __webpack_require__("2c61").set;
var microtask = __webpack_require__("8c25");
var hostReportErrors = __webpack_require__("b531");
var perform = __webpack_require__("4135");
var Queue = __webpack_require__("e202");
var InternalStateModule = __webpack_require__("235c");
var NativePromiseConstructor = __webpack_require__("69e4");
var PromiseConstructorDetection = __webpack_require__("1052");
var newPromiseCapabilityModule = __webpack_require__("0a8b");

var PROMISE = 'Promise';
var FORCED_PROMISE_CONSTRUCTOR = PromiseConstructorDetection.CONSTRUCTOR;
var NATIVE_PROMISE_REJECTION_EVENT = PromiseConstructorDetection.REJECTION_EVENT;
var NATIVE_PROMISE_SUBCLASSING = PromiseConstructorDetection.SUBCLASSING;
var getInternalPromiseState = InternalStateModule.getterFor(PROMISE);
var setInternalState = InternalStateModule.set;
var NativePromisePrototype = NativePromiseConstructor && NativePromiseConstructor.prototype;
var PromiseConstructor = NativePromiseConstructor;
var PromisePrototype = NativePromisePrototype;
var TypeError = global.TypeError;
var document = global.document;
var process = global.process;
var newPromiseCapability = newPromiseCapabilityModule.f;
var newGenericPromiseCapability = newPromiseCapability;

var DISPATCH_EVENT = !!(document && document.createEvent && global.dispatchEvent);
var UNHANDLED_REJECTION = 'unhandledrejection';
var REJECTION_HANDLED = 'rejectionhandled';
var PENDING = 0;
var FULFILLED = 1;
var REJECTED = 2;
var HANDLED = 1;
var UNHANDLED = 2;

var Internal, OwnPromiseCapability, PromiseWrapper, nativeThen;

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && isCallable(then = it.then) ? then : false;
};

var callReaction = function (reaction, state) {
  var value = state.value;
  var ok = state.state === FULFILLED;
  var handler = ok ? reaction.ok : reaction.fail;
  var resolve = reaction.resolve;
  var reject = reaction.reject;
  var domain = reaction.domain;
  var result, then, exited;
  try {
    if (handler) {
      if (!ok) {
        if (state.rejection === UNHANDLED) onHandleUnhandled(state);
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
        reject(new TypeError('Promise-chain cycle'));
      } else if (then = isThenable(result)) {
        call(then, result, resolve, reject);
      } else resolve(result);
    } else reject(value);
  } catch (error) {
    if (domain && !exited) domain.exit();
    reject(error);
  }
};

var notify = function (state, isReject) {
  if (state.notified) return;
  state.notified = true;
  microtask(function () {
    var reactions = state.reactions;
    var reaction;
    while (reaction = reactions.get()) {
      callReaction(reaction, state);
    }
    state.notified = false;
    if (isReject && !state.rejection) onUnhandled(state);
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
  if (!NATIVE_PROMISE_REJECTION_EVENT && (handler = global['on' + name])) handler(event);
  else if (name === UNHANDLED_REJECTION) hostReportErrors('Unhandled promise rejection', reason);
};

var onUnhandled = function (state) {
  call(task, global, function () {
    var promise = state.facade;
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

var onHandleUnhandled = function (state) {
  call(task, global, function () {
    var promise = state.facade;
    if (IS_NODE) {
      process.emit('rejectionHandled', promise);
    } else dispatchEvent(REJECTION_HANDLED, promise, state.value);
  });
};

var bind = function (fn, state, unwrap) {
  return function (value) {
    fn(state, value, unwrap);
  };
};

var internalReject = function (state, value, unwrap) {
  if (state.done) return;
  state.done = true;
  if (unwrap) state = unwrap;
  state.value = value;
  state.state = REJECTED;
  notify(state, true);
};

var internalResolve = function (state, value, unwrap) {
  if (state.done) return;
  state.done = true;
  if (unwrap) state = unwrap;
  try {
    if (state.facade === value) throw new TypeError("Promise can't be resolved itself");
    var then = isThenable(value);
    if (then) {
      microtask(function () {
        var wrapper = { done: false };
        try {
          call(then, value,
            bind(internalResolve, wrapper, state),
            bind(internalReject, wrapper, state)
          );
        } catch (error) {
          internalReject(wrapper, error, state);
        }
      });
    } else {
      state.value = value;
      state.state = FULFILLED;
      notify(state, false);
    }
  } catch (error) {
    internalReject({ done: false }, error, state);
  }
};

// constructor polyfill
if (FORCED_PROMISE_CONSTRUCTOR) {
  // 25.4.3.1 Promise(executor)
  PromiseConstructor = function Promise(executor) {
    anInstance(this, PromisePrototype);
    aCallable(executor);
    call(Internal, this);
    var state = getInternalPromiseState(this);
    try {
      executor(bind(internalResolve, state), bind(internalReject, state));
    } catch (error) {
      internalReject(state, error);
    }
  };

  PromisePrototype = PromiseConstructor.prototype;

  // eslint-disable-next-line no-unused-vars -- required for `.length`
  Internal = function Promise(executor) {
    setInternalState(this, {
      type: PROMISE,
      done: false,
      notified: false,
      parent: false,
      reactions: new Queue(),
      rejection: false,
      state: PENDING,
      value: undefined
    });
  };

  // `Promise.prototype.then` method
  // https://tc39.es/ecma262/#sec-promise.prototype.then
  Internal.prototype = defineBuiltIn(PromisePrototype, 'then', function then(onFulfilled, onRejected) {
    var state = getInternalPromiseState(this);
    var reaction = newPromiseCapability(speciesConstructor(this, PromiseConstructor));
    state.parent = true;
    reaction.ok = isCallable(onFulfilled) ? onFulfilled : true;
    reaction.fail = isCallable(onRejected) && onRejected;
    reaction.domain = IS_NODE ? process.domain : undefined;
    if (state.state === PENDING) state.reactions.add(reaction);
    else microtask(function () {
      callReaction(reaction, state);
    });
    return reaction.promise;
  });

  OwnPromiseCapability = function () {
    var promise = new Internal();
    var state = getInternalPromiseState(promise);
    this.promise = promise;
    this.resolve = bind(internalResolve, state);
    this.reject = bind(internalReject, state);
  };

  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === PromiseConstructor || C === PromiseWrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };

  if (!IS_PURE && isCallable(NativePromiseConstructor) && NativePromisePrototype !== Object.prototype) {
    nativeThen = NativePromisePrototype.then;

    if (!NATIVE_PROMISE_SUBCLASSING) {
      // make `Promise#then` return a polyfilled `Promise` for native promise-based APIs
      defineBuiltIn(NativePromisePrototype, 'then', function then(onFulfilled, onRejected) {
        var that = this;
        return new PromiseConstructor(function (resolve, reject) {
          call(nativeThen, that, resolve, reject);
        }).then(onFulfilled, onRejected);
      // https://github.com/zloirock/core-js/issues/640
      }, { unsafe: true });
    }

    // make `.constructor === Promise` work for native promise-based APIs
    try {
      delete NativePromisePrototype.constructor;
    } catch (error) { /* empty */ }

    // make `instanceof Promise` work for native promise-based APIs
    if (setPrototypeOf) {
      setPrototypeOf(NativePromisePrototype, PromisePrototype);
    }
  }
}

$({ global: true, constructor: true, wrap: true, forced: FORCED_PROMISE_CONSTRUCTOR }, {
  Promise: PromiseConstructor
});

setToStringTag(PromiseConstructor, PROMISE, false, true);
setSpecies(PROMISE);


/***/ }),

/***/ "f7a5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("8bdb");
var isArray = __webpack_require__("ac5f");
var isConstructor = __webpack_require__("8ae2");
var isObject = __webpack_require__("1c06");
var toAbsoluteIndex = __webpack_require__("e34c");
var lengthOfArrayLike = __webpack_require__("1fc1");
var toIndexedObject = __webpack_require__("f660");
var createProperty = __webpack_require__("85f7");
var wellKnownSymbol = __webpack_require__("8c08");
var arrayMethodHasSpeciesSupport = __webpack_require__("a554");
var nativeSlice = __webpack_require__("37ad");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('slice');

var SPECIES = wellKnownSymbol('species');
var $Array = Array;
var max = Math.max;

// `Array.prototype.slice` method
// https://tc39.es/ecma262/#sec-array.prototype.slice
// fallback for not array-like ES3 strings and DOM objects
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  slice: function slice(start, end) {
    var O = toIndexedObject(this);
    var length = lengthOfArrayLike(O);
    var k = toAbsoluteIndex(start, length);
    var fin = toAbsoluteIndex(end === undefined ? length : end, length);
    // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible
    var Constructor, result, n;
    if (isArray(O)) {
      Constructor = O.constructor;
      // cross-realm fallback
      if (isConstructor(Constructor) && (Constructor === $Array || isArray(Constructor.prototype))) {
        Constructor = undefined;
      } else if (isObject(Constructor)) {
        Constructor = Constructor[SPECIES];
        if (Constructor === null) Constructor = undefined;
      }
      if (Constructor === $Array || Constructor === undefined) {
        return nativeSlice(O, k, fin);
      }
    }
    result = new (Constructor === undefined ? $Array : Constructor)(max(fin - k, 0));
    for (n = 0; k < fin; k++, n++) if (k in O) createProperty(result, n, O[k]);
    result.length = n;
    return result;
  }
});


/***/ }),

/***/ "f878":
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

/***/ "f8a3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("8bdb");
var isSubsetOf = __webpack_require__("0330");
var setMethodAcceptSetLike = __webpack_require__("45bf");

// `Set.prototype.isSubsetOf` method
// https://github.com/tc39/proposal-set-methods
$({ target: 'Set', proto: true, real: true, forced: !setMethodAcceptSetLike('isSubsetOf') }, {
  isSubsetOf: isSubsetOf
});


/***/ }),

/***/ "f991":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__("85c1");
var call = __webpack_require__("71e9");
var ArrayBufferViewCore = __webpack_require__("7ddb");
var lengthOfArrayLike = __webpack_require__("1fc1");
var toOffset = __webpack_require__("1c16");
var toIndexedObject = __webpack_require__("1099");
var fails = __webpack_require__("af9e");

var RangeError = global.RangeError;
var Int8Array = global.Int8Array;
var Int8ArrayPrototype = Int8Array && Int8Array.prototype;
var $set = Int8ArrayPrototype && Int8ArrayPrototype.set;
var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

var WORKS_WITH_OBJECTS_AND_GENERIC_ON_TYPED_ARRAYS = !fails(function () {
  // eslint-disable-next-line es/no-typed-arrays -- required for testing
  var array = new Uint8ClampedArray(2);
  call($set, array, { length: 1, 0: 3 }, 1);
  return array[1] !== 3;
});

// https://bugs.chromium.org/p/v8/issues/detail?id=11294 and other
var TO_OBJECT_BUG = WORKS_WITH_OBJECTS_AND_GENERIC_ON_TYPED_ARRAYS && ArrayBufferViewCore.NATIVE_ARRAY_BUFFER_VIEWS && fails(function () {
  var array = new Int8Array(2);
  array.set(1);
  array.set('2', 1);
  return array[0] !== 0 || array[1] !== 2;
});

// `%TypedArray%.prototype.set` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.set
exportTypedArrayMethod('set', function set(arrayLike /* , offset */) {
  aTypedArray(this);
  var offset = toOffset(arguments.length > 1 ? arguments[1] : undefined, 1);
  var src = toIndexedObject(arrayLike);
  if (WORKS_WITH_OBJECTS_AND_GENERIC_ON_TYPED_ARRAYS) return call($set, this, src, offset);
  var length = this.length;
  var len = lengthOfArrayLike(src);
  var index = 0;
  if (len + offset > length) throw new RangeError('Wrong length');
  while (index < len) this[offset + index] = src[index++];
}, !WORKS_WITH_OBJECTS_AND_GENERIC_ON_TYPED_ARRAYS || TO_OBJECT_BUG);


/***/ }),

/***/ "f9ed":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toPrimitive = __webpack_require__("c215");
var isSymbol = __webpack_require__("ddd3");

// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
module.exports = function (argument) {
  var key = toPrimitive(argument, 'string');
  return isSymbol(key) ? key : key + '';
};


/***/ }),

/***/ "fb6b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// in old WebKit versions, `element.classList` is not an instance of global `DOMTokenList`
var documentCreateElement = __webpack_require__("3f57");

var classList = documentCreateElement('span').classList;
var DOMTokenListPrototype = classList && classList.constructor && classList.constructor.prototype;

module.exports = DOMTokenListPrototype === Object.prototype ? undefined : DOMTokenListPrototype;


/***/ }),

/***/ "fc59":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "iqons.min.a593173e.svg";

/***/ }),

/***/ "fd3c":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("8bdb");
var $map = __webpack_require__("4d16").map;
var arrayMethodHasSpeciesSupport = __webpack_require__("a554");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('map');

// `Array.prototype.map` method
// https://tc39.es/ecma262/#sec-array.prototype.map
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  map: function map(callbackfn /* , thisArg */) {
    return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "fd4f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadingSpinner_vue_vue_type_style_index_0_id_4da3784e_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("e725");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadingSpinner_vue_vue_type_style_index_0_id_4da3784e_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadingSpinner_vue_vue_type_style_index_0_id_4da3784e_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "fe6b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("8bdb");
var parseInt = __webpack_require__("2c57");

// `Number.parseInt` method
// https://tc39.es/ecma262/#sec-number.parseint
// eslint-disable-next-line es/no-number-parseint -- required for testing
$({ target: 'Number', stat: true, forced: Number.parseInt !== parseInt }, {
  parseInt: parseInt
});


/***/ }),

/***/ "fe8e":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var lengthOfArrayLike = __webpack_require__("1fc1");

// https://tc39.es/proposal-change-array-by-copy/#sec-array.prototype.toReversed
// https://tc39.es/proposal-change-array-by-copy/#sec-%typedarray%.prototype.toReversed
module.exports = function (O, C) {
  var len = lengthOfArrayLike(O);
  var A = new C(len);
  var k = 0;
  for (; k < len; k++) A[k] = O[len - k - 1];
  return A;
};


/***/ }),

/***/ "fec3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__("ab4a");
var fails = __webpack_require__("af9e");

// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
module.exports = DESCRIPTORS && fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(function () { /* empty */ }, 'prototype', {
    value: 42,
    writable: false
  }).prototype !== 42;
});


/***/ }),

/***/ "ff4f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var internalObjectKeys = __webpack_require__("00c2");
var enumBugKeys = __webpack_require__("62f7");

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
// eslint-disable-next-line es/no-object-keys -- safe
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ })

/******/ });
});
//# sourceMappingURL=NimiqVueComponents.umd.js.map