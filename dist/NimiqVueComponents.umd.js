(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue-property-decorator"));
	else if(typeof define === 'function' && define.amd)
		define(["vue-property-decorator"], factory);
	else if(typeof exports === 'object')
		exports["NimiqVueComponents"] = factory(require("vue-property-decorator"));
	else
		root["NimiqVueComponents"] = factory(root["vue-property-decorator"]);
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE__01a6__) {
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
/******/ 		return __webpack_require__.p + "NimiqVueComponents.umd." + ({"1":"lang-de-AccountList-json","2":"lang-de-AccountSelector-json","3":"lang-de-AmountWithFee-json","4":"lang-de-Copyable-json","5":"lang-de-CopyableField-json","6":"lang-de-LabelInput-json","7":"lang-de-PageHeader-json","8":"lang-de-PaymentInfoLine-json","9":"lang-de-QrScanner-json","10":"lang-de-Timer-json","11":"lang-de-Wallet-json","12":"lang-es-AccountList-json","13":"lang-es-AccountSelector-json","14":"lang-es-AmountWithFee-json","15":"lang-es-Copyable-json","16":"lang-es-CopyableField-json","17":"lang-es-LabelInput-json","18":"lang-es-PageHeader-json","19":"lang-es-PaymentInfoLine-json","20":"lang-es-QrScanner-json","21":"lang-es-Timer-json","22":"lang-es-Wallet-json","23":"lang-fa-AccountList-json","24":"lang-fa-AccountSelector-json","25":"lang-fa-AmountWithFee-json","26":"lang-fa-Copyable-json","27":"lang-fa-CopyableField-json","28":"lang-fa-LabelInput-json","29":"lang-fa-PageHeader-json","30":"lang-fa-PaymentInfoLine-json","31":"lang-fa-QrScanner-json","32":"lang-fa-Timer-json","33":"lang-fa-Wallet-json","34":"lang-fil-AccountList-json","35":"lang-fil-AccountSelector-json","36":"lang-fil-AmountWithFee-json","37":"lang-fil-Copyable-json","38":"lang-fil-CopyableField-json","39":"lang-fil-LabelInput-json","40":"lang-fil-PageHeader-json","41":"lang-fil-PaymentInfoLine-json","42":"lang-fil-QrScanner-json","43":"lang-fil-Timer-json","44":"lang-fil-Wallet-json","45":"lang-fr-AccountList-json","46":"lang-fr-AccountSelector-json","47":"lang-fr-AmountWithFee-json","48":"lang-fr-Copyable-json","49":"lang-fr-CopyableField-json","50":"lang-fr-LabelInput-json","51":"lang-fr-PageHeader-json","52":"lang-fr-PaymentInfoLine-json","53":"lang-fr-QrScanner-json","54":"lang-fr-Timer-json","55":"lang-fr-Wallet-json","56":"lang-it-AccountList-json","57":"lang-it-AccountSelector-json","58":"lang-it-AmountWithFee-json","59":"lang-it-Copyable-json","60":"lang-it-CopyableField-json","61":"lang-it-LabelInput-json","62":"lang-it-PageHeader-json","63":"lang-it-PaymentInfoLine-json","64":"lang-it-QrScanner-json","65":"lang-it-Timer-json","66":"lang-it-Wallet-json","67":"lang-ko-AccountList-json","68":"lang-ko-AccountSelector-json","69":"lang-ko-AmountWithFee-json","70":"lang-ko-Copyable-json","71":"lang-ko-CopyableField-json","72":"lang-ko-LabelInput-json","73":"lang-ko-PageHeader-json","74":"lang-ko-PaymentInfoLine-json","75":"lang-ko-QrScanner-json","76":"lang-ko-Timer-json","77":"lang-ko-Wallet-json","78":"lang-nl-AccountList-json","79":"lang-nl-AccountSelector-json","80":"lang-nl-AmountWithFee-json","81":"lang-nl-Copyable-json","82":"lang-nl-CopyableField-json","83":"lang-nl-LabelInput-json","84":"lang-nl-PageHeader-json","85":"lang-nl-PaymentInfoLine-json","86":"lang-nl-QrScanner-json","87":"lang-nl-Timer-json","88":"lang-nl-Wallet-json","89":"lang-ru-AccountList-json","90":"lang-ru-AccountSelector-json","91":"lang-ru-AmountWithFee-json","92":"lang-ru-Copyable-json","93":"lang-ru-CopyableField-json","94":"lang-ru-LabelInput-json","95":"lang-ru-PageHeader-json","96":"lang-ru-PaymentInfoLine-json","97":"lang-ru-QrScanner-json","98":"lang-ru-Timer-json","99":"lang-ru-Wallet-json","100":"lang-uk-AccountList-json","101":"lang-uk-AccountSelector-json","102":"lang-uk-AmountWithFee-json","103":"lang-uk-Copyable-json","104":"lang-uk-CopyableField-json","105":"lang-uk-LabelInput-json","106":"lang-uk-PageHeader-json","107":"lang-uk-PaymentInfoLine-json","108":"lang-uk-QrScanner-json","109":"lang-uk-Timer-json","110":"lang-uk-Wallet-json","111":"lang-zh-AccountList-json","112":"lang-zh-AccountSelector-json","113":"lang-zh-AmountWithFee-json","114":"lang-zh-Copyable-json","115":"lang-zh-CopyableField-json","116":"lang-zh-LabelInput-json","117":"lang-zh-PageHeader-json","118":"lang-zh-PaymentInfoLine-json","119":"lang-zh-QrScanner-json","120":"lang-zh-Timer-json","121":"lang-zh-Wallet-json"}[chunkId]||chunkId) + ".js"
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

module.exports = __WEBPACK_EXTERNAL_MODULE__01a6__;

/***/ }),

/***/ "0228":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

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

/***/ "1ff3":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

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

/***/ "2a22":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

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
	"./de/Timer.json": [
		"6e2d",
		10
	],
	"./de/Wallet.json": [
		"2e5a",
		11
	],
	"./es/AccountList.json": [
		"3454",
		12
	],
	"./es/AccountSelector.json": [
		"4154",
		13
	],
	"./es/AmountWithFee.json": [
		"fb1d",
		14
	],
	"./es/Copyable.json": [
		"3130",
		15
	],
	"./es/CopyableField.json": [
		"ac40",
		16
	],
	"./es/LabelInput.json": [
		"446b",
		17
	],
	"./es/PageHeader.json": [
		"2e60",
		18
	],
	"./es/PaymentInfoLine.json": [
		"5f53",
		19
	],
	"./es/QrScanner.json": [
		"b756",
		20
	],
	"./es/Timer.json": [
		"5b2d",
		21
	],
	"./es/Wallet.json": [
		"ca03",
		22
	],
	"./fa/AccountList.json": [
		"e768",
		23
	],
	"./fa/AccountSelector.json": [
		"18ee",
		24
	],
	"./fa/AmountWithFee.json": [
		"633b",
		25
	],
	"./fa/Copyable.json": [
		"9662",
		26
	],
	"./fa/CopyableField.json": [
		"79b0",
		27
	],
	"./fa/LabelInput.json": [
		"0eef",
		28
	],
	"./fa/PageHeader.json": [
		"b928",
		29
	],
	"./fa/PaymentInfoLine.json": [
		"6244",
		30
	],
	"./fa/QrScanner.json": [
		"7322",
		31
	],
	"./fa/Timer.json": [
		"622f",
		32
	],
	"./fa/Wallet.json": [
		"e25d",
		33
	],
	"./fil/AccountList.json": [
		"0e31",
		34
	],
	"./fil/AccountSelector.json": [
		"f44e",
		35
	],
	"./fil/AmountWithFee.json": [
		"ea65",
		36
	],
	"./fil/Copyable.json": [
		"1f5a",
		37
	],
	"./fil/CopyableField.json": [
		"4250",
		38
	],
	"./fil/LabelInput.json": [
		"b450",
		39
	],
	"./fil/PageHeader.json": [
		"3184",
		40
	],
	"./fil/PaymentInfoLine.json": [
		"c8fd",
		41
	],
	"./fil/QrScanner.json": [
		"c35d",
		42
	],
	"./fil/Timer.json": [
		"0b50",
		43
	],
	"./fil/Wallet.json": [
		"bd98",
		44
	],
	"./fr/AccountList.json": [
		"40c8",
		45
	],
	"./fr/AccountSelector.json": [
		"d939",
		46
	],
	"./fr/AmountWithFee.json": [
		"615f",
		47
	],
	"./fr/Copyable.json": [
		"bad1",
		48
	],
	"./fr/CopyableField.json": [
		"c50a",
		49
	],
	"./fr/LabelInput.json": [
		"24a7",
		50
	],
	"./fr/PageHeader.json": [
		"014a",
		51
	],
	"./fr/PaymentInfoLine.json": [
		"fe91",
		52
	],
	"./fr/QrScanner.json": [
		"35cb",
		53
	],
	"./fr/Timer.json": [
		"894c",
		54
	],
	"./fr/Wallet.json": [
		"ec08",
		55
	],
	"./it/AccountList.json": [
		"6cfb",
		56
	],
	"./it/AccountSelector.json": [
		"3163",
		57
	],
	"./it/AmountWithFee.json": [
		"cee3",
		58
	],
	"./it/Copyable.json": [
		"0438",
		59
	],
	"./it/CopyableField.json": [
		"4fdc",
		60
	],
	"./it/LabelInput.json": [
		"159e",
		61
	],
	"./it/PageHeader.json": [
		"7349",
		62
	],
	"./it/PaymentInfoLine.json": [
		"8180",
		63
	],
	"./it/QrScanner.json": [
		"bdec",
		64
	],
	"./it/Timer.json": [
		"dd97",
		65
	],
	"./it/Wallet.json": [
		"50bf",
		66
	],
	"./ko/AccountList.json": [
		"a4e2",
		67
	],
	"./ko/AccountSelector.json": [
		"f367",
		68
	],
	"./ko/AmountWithFee.json": [
		"afb1",
		69
	],
	"./ko/Copyable.json": [
		"2f73",
		70
	],
	"./ko/CopyableField.json": [
		"facd",
		71
	],
	"./ko/LabelInput.json": [
		"3bc8",
		72
	],
	"./ko/PageHeader.json": [
		"5801",
		73
	],
	"./ko/PaymentInfoLine.json": [
		"a39b",
		74
	],
	"./ko/QrScanner.json": [
		"e7f1",
		75
	],
	"./ko/Timer.json": [
		"6127",
		76
	],
	"./ko/Wallet.json": [
		"b1e8",
		77
	],
	"./nl/AccountList.json": [
		"1644",
		78
	],
	"./nl/AccountSelector.json": [
		"600b",
		79
	],
	"./nl/AmountWithFee.json": [
		"0617",
		80
	],
	"./nl/Copyable.json": [
		"a136",
		81
	],
	"./nl/CopyableField.json": [
		"4fb8",
		82
	],
	"./nl/LabelInput.json": [
		"d183",
		83
	],
	"./nl/PageHeader.json": [
		"652c",
		84
	],
	"./nl/PaymentInfoLine.json": [
		"a231",
		85
	],
	"./nl/QrScanner.json": [
		"64dc",
		86
	],
	"./nl/Timer.json": [
		"84f0",
		87
	],
	"./nl/Wallet.json": [
		"63f5",
		88
	],
	"./ru/AccountList.json": [
		"e162",
		89
	],
	"./ru/AccountSelector.json": [
		"2153",
		90
	],
	"./ru/AmountWithFee.json": [
		"f212",
		91
	],
	"./ru/Copyable.json": [
		"d3a8",
		92
	],
	"./ru/CopyableField.json": [
		"580c",
		93
	],
	"./ru/LabelInput.json": [
		"ac46",
		94
	],
	"./ru/PageHeader.json": [
		"0773",
		95
	],
	"./ru/PaymentInfoLine.json": [
		"81c0",
		96
	],
	"./ru/QrScanner.json": [
		"b74a",
		97
	],
	"./ru/Timer.json": [
		"1d1a",
		98
	],
	"./ru/Wallet.json": [
		"da26",
		99
	],
	"./uk/AccountList.json": [
		"504a",
		100
	],
	"./uk/AccountSelector.json": [
		"2efd",
		101
	],
	"./uk/AmountWithFee.json": [
		"56dc",
		102
	],
	"./uk/Copyable.json": [
		"c38d",
		103
	],
	"./uk/CopyableField.json": [
		"f85b",
		104
	],
	"./uk/LabelInput.json": [
		"2cc2",
		105
	],
	"./uk/PageHeader.json": [
		"8d98",
		106
	],
	"./uk/PaymentInfoLine.json": [
		"cfaf",
		107
	],
	"./uk/QrScanner.json": [
		"8741",
		108
	],
	"./uk/Timer.json": [
		"f309",
		109
	],
	"./uk/Wallet.json": [
		"3f7a",
		110
	],
	"./zh/AccountList.json": [
		"bb4e",
		111
	],
	"./zh/AccountSelector.json": [
		"4634",
		112
	],
	"./zh/AmountWithFee.json": [
		"5f88",
		113
	],
	"./zh/Copyable.json": [
		"6a72",
		114
	],
	"./zh/CopyableField.json": [
		"afa7",
		115
	],
	"./zh/LabelInput.json": [
		"c7b6",
		116
	],
	"./zh/PageHeader.json": [
		"aee6",
		117
	],
	"./zh/PaymentInfoLine.json": [
		"6daa",
		118
	],
	"./zh/QrScanner.json": [
		"4e49",
		119
	],
	"./zh/Timer.json": [
		"813f",
		120
	],
	"./zh/Wallet.json": [
		"43f7",
		121
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

/***/ "5f30":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CloseButton_vue_vue_type_style_index_0_id_f70dd1ae_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("6d75");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CloseButton_vue_vue_type_style_index_0_id_f70dd1ae_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CloseButton_vue_vue_type_style_index_0_id_f70dd1ae_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CloseButton_vue_vue_type_style_index_0_id_f70dd1ae_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

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

/***/ "63f6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Tooltip_vue_vue_type_style_index_0_id_71bfa335_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("0228");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Tooltip_vue_vue_type_style_index_0_id_71bfa335_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Tooltip_vue_vue_type_style_index_0_id_71bfa335_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Tooltip_vue_vue_type_style_index_0_id_71bfa335_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

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

/***/ "6d75":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

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

/***/ "857a":
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__("1d80");

var quot = /"/g;

// B.2.3.2.1 CreateHTML(string, tag, attribute, value)
// https://tc39.github.io/ecma262/#sec-createhtml
module.exports = function (string, tag, attribute, value) {
  var S = String(requireObjectCoercible(string));
  var p1 = '<' + tag;
  if (attribute !== '') p1 += ' ' + attribute + '="' + String(value).replace(quot, '&quot;') + '"';
  return p1 + '>' + S + '</' + tag + '>';
};


/***/ }),

/***/ "861d":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


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

/***/ "ac1f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var exec = __webpack_require__("9263");

$({ target: 'RegExp', proto: true, forced: /./.exec !== exec }, {
  exec: exec
});


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

/***/ "af03":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");

// check the existence of a method, lowercase
// of a tag and escaping quotes in arguments
module.exports = function (METHOD_NAME) {
  return fails(function () {
    var test = ''[METHOD_NAME]('"');
    return test !== test.toLowerCase() || test.split('"').length > 3;
  });
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

/***/ "c96a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var createHTML = __webpack_require__("857a");
var forcedStringHTMLMethod = __webpack_require__("af03");

// `String.prototype.small` method
// https://tc39.github.io/ecma262/#sec-string.prototype.small
$({ target: 'String', proto: true, forced: forcedStringHTMLMethod('small') }, {
  small: function small() {
    return createHTML(this, 'small', '', '');
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

/***/ "ca9d":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CopyableField_vue_vue_type_style_index_0_id_23ed6b92_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("1ff3");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CopyableField_vue_vue_type_style_index_0_id_23ed6b92_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CopyableField_vue_vue_type_style_index_0_id_23ed6b92_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CopyableField_vue_vue_type_style_index_0_id_23ed6b92_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

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

/***/ "da84":
/***/ (function(module, exports) {

var check = function (it) {
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

/***/ "dce1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SmallPage_vue_vue_type_style_index_0_id_1d450cf2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("2a22");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SmallPage_vue_vue_type_style_index_0_id_1d450cf2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SmallPage_vue_vue_type_style_index_0_id_1d450cf2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SmallPage_vue_vue_type_style_index_0_id_1d450cf2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

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

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__("99af");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.ends-with.js
var es_string_ends_with = __webpack_require__("8a79");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"c3f1c5a4-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/CircleSpinner.vue?vue&type=template&id=2bc59fa8&scoped=true&functional=true&
var render = function (_h,_vm) {var _c=_vm._c;return _c('svg',{staticClass:"circle-spinner",attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 18 18","width":"18","height":"18","fill":"none","stroke-width":"2","stroke-linecap":"round"}},[_c('path',{attrs:{"stroke":"#0582CA","d":"M9,1c4.42,0,8,3.58,8,8"}}),_c('path',{attrs:{"stroke":"#1F2348","opacity":".3","d":"M4.27,2.56C2.29,4.01,1,6.35,1,9c0,4.42,3.58,8,8,8c2.65,0,4.99-1.29,6.44-3.27"}})])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/CircleSpinner.vue?vue&type=template&id=2bc59fa8&scoped=true&functional=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--13-1!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/CircleSpinner.vue?vue&type=script&lang=ts&
/* harmony default export */ var CircleSpinnervue_type_script_lang_ts_ = ({});
// CONCATENATED MODULE: ./src/components/CircleSpinner.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_CircleSpinnervue_type_script_lang_ts_ = (CircleSpinnervue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./src/components/CircleSpinner.vue?vue&type=style&index=0&id=2bc59fa8&scoped=true&lang=css&
var CircleSpinnervue_type_style_index_0_id_2bc59fa8_scoped_true_lang_css_ = __webpack_require__("702c");

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

// CONCATENATED MODULE: ./src/components/CircleSpinner.vue






/* normalize component */

var component = normalizeComponent(
  components_CircleSpinnervue_type_script_lang_ts_,
  render,
  staticRenderFns,
  true,
  null,
  "2bc59fa8",
  null
  
)

/* harmony default export */ var CircleSpinner = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"c3f1c5a4-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/CloseButton.vue?vue&type=template&id=f70dd1ae&scoped=true&
var CloseButtonvue_type_template_id_f70dd1ae_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('button',{staticClass:"close-button nq-button-s",on:{"click":_vm.click,"mousedown":function($event){$event.preventDefault();}}},[_c('CloseIcon')],1)}
var CloseButtonvue_type_template_id_f70dd1ae_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/CloseButton.vue?vue&type=template&id=f70dd1ae&scoped=true&

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
    
// CONCATENATED MODULE: ./node_modules/@nimiq/style/src/icons/copy.svg

      /* harmony default export */ var icons_copy = ({
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
              attrs: Object.assign({"width":"35","height":"40","viewBox":"0 0 35 40","xmlns":"http://www.w3.org/2000/svg"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M34.07 6.01L28.95.92c-.6-.59-1.4-.92-2.24-.92H12.33a3.17 3.17 0 0 0-3.16 3.17v5.16h-6A3.17 3.17 0 0 0 0 11.5v25.35A3.17 3.17 0 0 0 3.17 40h19.5a3.17 3.17 0 0 0 3.16-3.16v-5.17h6A3.17 3.17 0 0 0 35 28.5V8.25c0-.84-.33-1.65-.93-2.24zM22.5 35.83c0 .46-.37.84-.83.84H4.17a.83.83 0 0 1-.84-.84V12.5c0-.46.38-.83.84-.83h12.97c.22 0 .43.08.58.23l4.53 4.43c.16.16.25.37.25.6v18.9zm3.75-7.5h4.58c.46 0 .84-.37.84-.83V8.6a.83.83 0 0 0-.25-.6l-4.58-4.47a.83.83 0 0 0-.58-.24l-12.93.04a.83.83 0 0 0-.83.84v3.75c0 .23.19.41.42.41h4.63c.84 0 1.64.33 2.23.93l5.12 5.09c.6.59.93 1.4.93 2.23v11.34c0 .23.19.41.42.41z","fill":"currentColor"}})])
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
    
// CONCATENATED MODULE: ./node_modules/@nimiq/style/src/icons/questionmark.svg

      /* harmony default export */ var questionmark = ({
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
              attrs: Object.assign({"width":"16","height":"26","viewBox":"0 0 16 26","xmlns":"http://www.w3.org/2000/svg"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M7.98 25a2.62 2.62 0 1 1 0-5.24 2.62 2.62 0 0 1 0 5.24zM10.78 14.38c-.64.28-1.05.91-1.05 1.6a1.75 1.75 0 0 1-3.5 0 5.24 5.24 0 0 1 3.15-4.8 3.5 3.5 0 1 0-4.89-3.2 1.75 1.75 0 0 1-3.49 0 6.98 6.98 0 1 1 9.78 6.4z","fill":"currentColor"}})])
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



 // import ArrowLeft from '@nimiq/style/src/icons/arrow-left.svg';

 // import ArrowRight from '@nimiq/style/src/icons/arrow-right.svg';
// import CaretRightSmall from '@nimiq/style/src/icons/caret-right-small.svg';
// import Cashlink from '@nimiq/style/src/icons/cashlink.svg';
// import CashlinkSmall from '@nimiq/style/src/icons/cashlink-small.svg';
// import CashlinkXSmall from '@nimiq/style/src/icons/cashlink-xsmall.svg';

 // import CheckmarkSmall from '@nimiq/style/src/icons/checkmark-small.svg';

 // import Contacts from '@nimiq/style/src/icons/contacts.svg';

 // import Cross from '@nimiq/style/src/icons/cross.svg';
// import Download from '@nimiq/style/src/icons/download.svg';
// import FaceNeutral from '@nimiq/style/src/icons/face-neutral.svg';
// import FaceSad from '@nimiq/style/src/icons/face-sad.svg';
// import Gear from '@nimiq/style/src/icons/gear.svg';
// import Hexagon from '@nimiq/style/src/icons/hexagon.svg';
// import InfoCircle from '@nimiq/style/src/icons/info-circle.svg';
// import InfoCircleSmall from '@nimiq/style/src/icons/info-circle-small.svg';
// import Keys from '@nimiq/style/src/icons/keys.svg';
// import Ledger from '@nimiq/style/src/icons/ledger.svg';
// import LockLocked from '@nimiq/style/src/icons/lock-locked.svg';
// import LockUnlocked from '@nimiq/style/src/icons/lock-unlocked.svg';
// import Login from '@nimiq/style/src/icons/login.svg';
// import MenuDots from '@nimiq/style/src/icons/menu-dots.svg';
// import PlusCircle from '@nimiq/style/src/icons/plus-circle.svg';


 // import ScanQrCode from '@nimiq/style/src/icons/scan-qr-code.svg';
// import Settings from '@nimiq/style/src/icons/settings.svg';
// import Stopwatch from '@nimiq/style/src/icons/stopwatch.svg';
// import Transfer from '@nimiq/style/src/icons/transfer.svg';
// import UnderPayment from '@nimiq/style/src/icons/under-payment.svg';
// import ViewOff from '@nimiq/style/src/icons/view-off.svg';
// import View from '@nimiq/style/src/icons/view.svg';

/**
 * Comment out any unused icons here
 */
// tslint:disable:variable-name

var AlertTriangleIcon = IconBase(alert_triangle);
var ArrowLeftSmallIcon = IconBase(arrow_left_small); // export const ArrowLeftIcon = IconBase(ArrowLeft);

var ArrowRightSmallIcon = IconBase(arrow_right_small); // export const ArrowRightIcon = IconBase(ArrowRight);
// export const CaretRightSmallIcon = IconBase(CaretRightSmall);
// export const CashlinkIcon = IconBase(Cashlink);
// export const CashlinkSmallIcon = IconBase(CashlinkSmall);
// export const CashlinkXSmallIcon = IconBase(CashlinkXSmall);

var CheckmarkIcon = IconBase(checkmark); // export const CheckmarkSmallIcon = IconBase(CheckmarkSmall);

var CloseIcon = IconBase(icons_close); // export const ContactsIcon = IconBase(Contacts);

var CopyIcon = IconBase(icons_copy); // export const CrossIcon = IconBase(Cross);
// export const DownloadIcon = IconBase(Download);
// export const FaceNeutralIcon = IconBase(FaceNeutral);
// export const FaceSadIcon = IconBase(FaceSad);
// export const GearIcon = IconBase(Gear);
// export const HexagonIcon = IconBase(Hexagon);
// export const InfoCircleIcon = IconBase(InfoCircle);
// export const InfoCircleSmallIcon = IconBase(InfoCircleSmall);
// export const KeysIcon = IconBase(Keys);
// export const LedgerIcon = IconBase(Ledger);
// export const LockLockedIcon = IconBase(LockLocked);
// export const LockUnlockedIcon = IconBase(LockUnlocked);
// export const LoginIcon = IconBase(Login);
// export const MenuDotsIcon = IconBase(MenuDots);
// export const PlusCircleIcon = IconBase(PlusCircle);

var QrCodeIcon = IconBase(qr_code);
var QuestionmarkIcon = IconBase(questionmark); // export const ScanQrCodeIcon = IconBase(ScanQrCode);
// export const SettingsIcon = IconBase(Settings);
// export const StopwatchIcon = IconBase(Stopwatch);
// export const TransferIcon = IconBase(Transfer);
// export const UnderPaymentIcon = IconBase(UnderPayment);
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
// EXTERNAL MODULE: ./src/components/CloseButton.vue?vue&type=style&index=0&id=f70dd1ae&scoped=true&lang=css&
var CloseButtonvue_type_style_index_0_id_f70dd1ae_scoped_true_lang_css_ = __webpack_require__("5f30");

// CONCATENATED MODULE: ./src/components/CloseButton.vue






/* normalize component */

var CloseButton_component = normalizeComponent(
  components_CloseButtonvue_type_script_lang_ts_,
  CloseButtonvue_type_template_id_f70dd1ae_scoped_true_render,
  CloseButtonvue_type_template_id_f70dd1ae_scoped_true_staticRenderFns,
  false,
  null,
  "f70dd1ae",
  null
  
)

/* harmony default export */ var components_CloseButton = (CloseButton_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"c3f1c5a4-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/CopyableField.vue?vue&type=template&id=23ed6b92&scoped=true&
var CopyableFieldvue_type_template_id_23ed6b92_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"copyable-field",class:{ small: _vm.small }},[(_vm.label)?_c('span',{staticClass:"nq-label"},[_vm._v(_vm._s(_vm.label))]):_vm._e(),_c('div',{staticClass:"copyable-field-content",class:{ 'simple-value': !_vm.isKeyedValue, copied: _vm.copied },on:{"click":_vm.copy}},[_c('div',{ref:"value-container",staticClass:"value-container",style:({ fontSize: _vm.fontSize+'rem' })},[_c('span',{ref:"value",staticClass:"value"},[_vm._v(" "+_vm._s(_vm.isKeyedValue ? _vm.value[_vm.currentKey] : _vm.value)+" ")])]),_vm._l(((_vm.isKeyedValue ? Object.keys(_vm.value) : [])),function(key){return _c('button',{staticClass:"nq-button-s",class:{
                inverse: _vm.currentKey === key,
                'single-key': _vm.hasSingleKey,
            },attrs:{"tabindex":_vm.hasSingleKey ? -1 : 0},on:{"click":function($event){$event.stopPropagation();_vm.currentKey = key}}},[_vm._v(_vm._s(key))])}),_c('div',{staticClass:"copy-notice"},[_vm._v(_vm._s(_vm.$t('Copied')))])],2)])}
var CopyableFieldvue_type_template_id_23ed6b92_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/CopyableField.vue?vue&type=template&id=23ed6b92&scoped=true&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.includes.js
var es_array_includes = __webpack_require__("caad");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.keys.js
var es_object_keys = __webpack_require__("b64b");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.to-string.js
var es_regexp_to_string = __webpack_require__("25f0");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.includes.js
var es_string_includes = __webpack_require__("2532");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.small.js
var es_string_small = __webpack_require__("c96a");

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

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__("b0c0");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__("ac1f");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.set.js
var es_set = __webpack_require__("6062");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.replace.js
var es_string_replace = __webpack_require__("5319");

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
I18nMixin_I18nMixin.SUPPORTED_LANGUAGES = [I18nMixin_1.DEFAULT_LANGUAGE, 'de', 'es', 'fr', 'nl', 'ru', 'uk', 'zh'];
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
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--13-1!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/CopyableField.vue?vue&type=script&lang=ts&














var CopyableField_1;





var CopyableFieldvue_type_script_lang_ts_CopyableField = CopyableField_1 =
/*#__PURE__*/
function (_Mixins) {
  _inherits(CopyableField, _Mixins);

  function CopyableField() {
    var _this;

    _classCallCheck(this, CopyableField);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CopyableField).apply(this, arguments));
    _this.currentKey = '';
    _this.fontSize = _this.small ? CopyableField_1.DEFAULT_FONT_SIZE_SMALL : CopyableField_1.DEFAULT_FONT_SIZE;
    _this.copied = false;
    return _this;
  }

  _createClass(CopyableField, [{
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
      var _updateFontSize2 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        var valueContainer, valueElement, defaultFontSize, availableWidth, referenceWidth, scaleFactor;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
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

      Clipboard.copy(this.isKeyedValue ? this.value[this.currentKey].toString() : this.value.toString());
      this.copied = true;
      window.clearTimeout(this._copiedResetTimeout);
      this._copiedResetTimeout = window.setTimeout(function () {
        _this2.copied = false;
      }, 500);
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
  }]);

  return CopyableField;
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
/* harmony default export */ var CopyableFieldvue_type_script_lang_ts_ = (CopyableFieldvue_type_script_lang_ts_CopyableField);
// CONCATENATED MODULE: ./src/components/CopyableField.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_CopyableFieldvue_type_script_lang_ts_ = (CopyableFieldvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./src/components/CopyableField.vue?vue&type=style&index=0&id=23ed6b92&scoped=true&lang=css&
var CopyableFieldvue_type_style_index_0_id_23ed6b92_scoped_true_lang_css_ = __webpack_require__("ca9d");

// CONCATENATED MODULE: ./src/components/CopyableField.vue






/* normalize component */

var CopyableField_component = normalizeComponent(
  components_CopyableFieldvue_type_script_lang_ts_,
  CopyableFieldvue_type_template_id_23ed6b92_scoped_true_render,
  CopyableFieldvue_type_template_id_23ed6b92_scoped_true_staticRenderFns,
  false,
  null,
  "23ed6b92",
  null
  
)

/* harmony default export */ var components_CopyableField = (CopyableField_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"c3f1c5a4-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/FiatAmount.vue?vue&type=template&id=4e1e2a40&
var FiatAmountvue_type_template_id_4e1e2a40_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',{staticClass:"fiat-amount"},[_vm._v(" "+_vm._s(_vm._currencyString)+" ")])}
var FiatAmountvue_type_template_id_4e1e2a40_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/FiatAmount.vue?vue&type=template&id=4e1e2a40&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.constructor.js
var es_number_constructor = __webpack_require__("a9e3");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.parse-float.js
var es_number_parse_float = __webpack_require__("c35a");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.match.js
var es_string_match = __webpack_require__("466d");

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
// CONCATENATED MODULE: ./node_modules/@nimiq/utils/dist/module/CurrencyInfo.js
class CurrencyInfo {
    constructor(currencyCode, decimalsOrLocaleOrOptions, name, symbol) {
        let decimals;
        let locale;
        if (typeof decimalsOrLocaleOrOptions === 'number') {
            decimals = decimalsOrLocaleOrOptions;
        }
        else if (typeof decimalsOrLocaleOrOptions === 'string') {
            locale = decimalsOrLocaleOrOptions;
        }
        else if (typeof decimalsOrLocaleOrOptions === 'object') {
            ({ decimals, name, symbol, locale } = decimalsOrLocaleOrOptions);
        }
        this.code = currencyCode.toUpperCase();
        // Get the country from the currency code which is typically (but not necessarily) the first two letters,
        // see https://en.wikipedia.org/wiki/ISO_4217#National_currencies.
        const currencyCountry = this.code.substring(0, 2);
        const nameLocalesToTry = [
            ...(locale ? [locale] : []),
            `${navigator.language.substring(0, 2)}-${currencyCountry}`,
            navigator.language,
            'en-US',
        ];
        const supportsDisplayNames = 'DisplayNames' in Intl
            // @ts-ignore: the `polyfilled` property is just added by the @formatjs polyfill
            && !Intl.DisplayNames.polyfilled; // @formatjs/intl-displaynames polyfill is causing issues
        // also normalizes the locales
        [this.locale] = supportsDisplayNames
            // @ts-ignore TODO use proper types once https://github.com/microsoft/TypeScript/pull/44022 is available
            ? Intl.DisplayNames.supportedLocalesOf(nameLocalesToTry)
            : Intl.NumberFormat.supportedLocalesOf(nameLocalesToTry);
        const isAutoGenerated = decimals === undefined && name === undefined && symbol === undefined;
        const cacheKey = `${this.code} ${this.locale}`;
        const cachedCurrencyInfo = CurrencyInfo.CACHED_AUTO_GENERATED_CURRENCY_INFOS[cacheKey];
        if (isAutoGenerated && cachedCurrencyInfo) {
            return cachedCurrencyInfo;
        }
        let formattedString;
        const formatterOptions = {
            style: 'currency',
            currency: currencyCode,
            useGrouping: false,
            numberingSystem: 'latn',
        };
        if (name !== undefined) {
            this.name = name;
        }
        else if (cachedCurrencyInfo) {
            this.name = cachedCurrencyInfo.name;
        }
        else if (supportsDisplayNames) {
            // Use DisplayNames if available as it provides better names.
            // @ts-ignore TODO use proper types once https://github.com/microsoft/TypeScript/pull/44022 is merged
            this.name = new Intl.DisplayNames(this.locale, { type: 'currency' }).of(currencyCode);
        }
        else {
            // Note that toLocaleString throws for not well-formatted currency codes
            // (see https://www.ecma-international.org/ecma-402/1.0/#sec-6.3.1).
            formattedString = (0).toLocaleString(this.locale, { currencyDisplay: 'name', ...formatterOptions });
            // Using regex parsing instead of NumberFormat.formatToParts which has less browser support.
            this.name = formattedString.replace(CurrencyInfo.NUMBER_REGEX, '').trim();
        }
        if (symbol !== undefined) {
            this.symbol = symbol;
        }
        else if (cachedCurrencyInfo) {
            this.symbol = cachedCurrencyInfo.symbol;
        }
        else {
            const extraSymbol = CurrencyInfo.EXTRA_SYMBOLS[this.code];
            if (typeof extraSymbol === 'string') {
                this.symbol = extraSymbol;
            }
            else if (Array.isArray(extraSymbol)) {
                // Use right-to-left currency symbols only if a right-to-left locale was used and explicitly requested.
                const useRightToLeft = this.locale === locale
                    && CurrencyInfo.RIGHT_TO_LEFT_DETECTION_REGEX.test(this.name);
                this.symbol = extraSymbol[useRightToLeft ? 1 : 0];
            }
            else {
                // Unless a locale was specifically requested, use `en-${currencyCountry}` for the symbol detection
                // instead of this.locale which is based on navigator.language, as the EXTRA_SYMBOLS have been
                // created based on en.
                const symbolLocalesToTry = [
                    ...(locale ? [locale] : []),
                    `en-${currencyCountry}`,
                    'en',
                ];
                try {
                    formattedString = (0).toLocaleString(symbolLocalesToTry, { currencyDisplay: 'narrowSymbol', ...formatterOptions });
                }
                catch (e) {
                    // on old browsers that do not support currencyDisplay narrowSymbol yet, fallback to symbol.
                    formattedString = (0).toLocaleString(symbolLocalesToTry, { currencyDisplay: 'symbol', ...formatterOptions });
                }
                this.symbol = formattedString.replace(CurrencyInfo.NUMBER_REGEX, '').trim();
            }
        }
        if (decimals !== undefined) {
            this.decimals = decimals;
        }
        else if (cachedCurrencyInfo) {
            this.decimals = cachedCurrencyInfo.decimals;
        }
        else if (CurrencyInfo.CUSTOM_DECIMAL_LESS_CURRENCIES.has(this.code)) {
            this.decimals = 0;
        }
        else {
            if (!formattedString) {
                // As we only need the number, the used locale and currencyDisplay don't matter.
                formattedString = (0).toLocaleString('en', formatterOptions);
            }
            const numberMatch = formattedString.match(CurrencyInfo.NUMBER_REGEX);
            this.decimals = numberMatch ? (numberMatch[1] || '').length : 2;
        }
        if (isAutoGenerated) {
            CurrencyInfo.CACHED_AUTO_GENERATED_CURRENCY_INFOS[cacheKey] = this;
        }
    }
}
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
//         while (el.tagName !== 'TABLE') el = el.nextElementSibling;
//         return el;
//     })(sectionHeadline);
//
//     const currencySymbols = {};
//
//     for (const row of table.querySelectorAll('tbody tr')) {
//         // count columns from the end because not all rows have the same number of columns as on some rows, the
//         // first column is omitted if the cell in the first column of a previous row spans multiple rows.
//         const code = row.children[row.childElementCount - 3].textContent.trim();
//         if (code.includes('[G]') // an inofficial currency code not registered in ISO 4217
//             || code.includes('none')
//         ) continue;
//         const symbols = row.children[row.childElementCount - 4].textContent.trim()
//             .replace(/\[.+]/g, '') // remove comments
//             .split(/ or |, /);
//         if (symbols.length === 1 && symbols[0].includes('none')) continue;
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
CurrencyInfo.EXTRA_SYMBOLS = {
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
    KGS: '\u20c0',
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
    SOS: 'Sh.',
    TJS: 'SM',
    TMT: 'm',
    TND: ['DT', 'د.ت'],
    UZS: 'сум',
    VES: 'Bs.',
    WST: 'T',
    XPF: '₣',
    YER: ['RI', '﷼'],
};
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
CurrencyInfo.CUSTOM_DECIMAL_LESS_CURRENCIES = new Set([
    'AMD',
    'AOA',
    'ARS',
    'BDT',
    'BTN',
    'CDF',
    'COP',
    'CRC',
    'CVE',
    'CZK',
    'DOP',
    'DZD',
    'GMD',
    'GYD',
    'HUF',
    'IDR',
    'INR',
    'JMD',
    'KES',
    'KGS',
    'KHR',
    'KZT',
    'LKR',
    'MAD',
    'MKD',
    'MNT',
    'MOP',
    'MWK',
    'MXN',
    'NGN',
    'NOK',
    'NPR',
    'PHP',
    'PKR',
    'RUB',
    'SEK',
    'TWD',
    'TZS',
    'UAH',
    'UYU',
    'UZS',
    'VES',
]);
// Cache auto-generated CurrencyInfos such that they do not need to be recalculated.
CurrencyInfo.CACHED_AUTO_GENERATED_CURRENCY_INFOS = {};
// Regex for detecting the number with optional decimals in a formatted string for useGrouping: false
CurrencyInfo.NUMBER_REGEX = /\d+(?:\D(\d+))?/;
// Simplified and adapted from https://stackoverflow.com/a/14824756.
// Note that this rtl detection is incomplete but good enough for our needs.
CurrencyInfo.RIGHT_TO_LEFT_DETECTION_REGEX = /[\u0591-\u07FF\uFB1D-\uFDFD\uFE70-\uFEFC]/;


//# sourceMappingURL=CurrencyInfo.js.map

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
  }, {
    key: "_currencyString",
    get: function get() {
      var positioningLocale = this._getPositioningLocale(this.currency); // Only create CurrencyInfo for a specific locale if a locale was requested, otherwise use default behavior.
      // Don't use positioningLocale as it's just a rough guess for a language typical for a country where the
      // currency is used and might result in using a language that the user does not understand.


      var currencyInfo = new CurrencyInfo(this.currency, this.locale || undefined);
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
        formatted = this.amount.toLocaleString([this.locale || positioningLocale, positioningLocale, "".concat(navigator.language.substring(0, 2), "-").concat(positioningLocale), navigator.language, "en-".concat(positioningLocale), 'en'], formattingOptions) // Enforce a dot as decimal separator for consistency and parseFloat. Using capturing groups instead of
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
        var nextDecimals = decimals ? decimals.length + 1 : 1;
        formattingOptions.minimumFractionDigits = nextDecimals;
        formattingOptions.maximumFractionDigits = nextDecimals;
      } while (relativeDeviation > this.maxRelativeDeviation && formattingOptions.minimumFractionDigits <= 20 // max for minimumFractionDigits and maximumFractionDigits
      && !this.hideDecimals); // Replace the currency code with our custom currency symbol.


      formatted = formatted.replace(FiatAmount_1.CURRENCY_CODE_REGEX, function (match, position) {
        if (position !== 0 || !FiatAmount_1.SYMBOL_TRAILING_ALPHA_REGEX.test(currencyInfo.symbol)) {
          // For trailing currency symbol or currency symbol that does not end with a latin letter or dot do not
          // append a space, e.g.: 1.00 € (EUR), $1.00 (USD), R$1.00 (BRL), ₼1.00 (AZN), ৳1 (BDT), S/1.00 (PEN)
          return currencyInfo.symbol;
        } // For leading currency symbol that ends with a latin letter or dot, add a (non-breaking) space, e.g.
        // KM 1.00 (BAM), B/. 1.00 (PAB), лв. 1.00 (BGN), kr 1.00 (DKK)


        return "".concat(currencyInfo.symbol, "\xA0");
      }); // apply integer grouping

      if (integers.length <= 4) return formatted;
      return formatted.replace(integers, new FormattableNumber(integers).toString(true));
    }
  }]);

  return FiatAmount;
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
/* harmony default export */ var FiatAmountvue_type_script_lang_ts_ = (FiatAmountvue_type_script_lang_ts_FiatAmount);
// CONCATENATED MODULE: ./src/components/FiatAmount.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_FiatAmountvue_type_script_lang_ts_ = (FiatAmountvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./src/components/FiatAmount.vue





/* normalize component */

var FiatAmount_component = normalizeComponent(
  components_FiatAmountvue_type_script_lang_ts_,
  FiatAmountvue_type_template_id_4e1e2a40_render,
  FiatAmountvue_type_template_id_4e1e2a40_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var components_FiatAmount = (FiatAmount_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"c3f1c5a4-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/SmallPage.vue?vue&type=template&id=1d450cf2&scoped=true&
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
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"c3f1c5a4-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Tooltip.vue?vue&type=template&id=71bfa335&scoped=true&
var Tooltipvue_type_template_id_71bfa335_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',{staticClass:"tooltip",class:[_vm.verticalPosition, {
        shown: _vm.isShown,
        'transition-position': _vm.transitionPosition,
        'inverse-theme': _vm.theme === _vm.constructor.Themes.INVERSE,
    }],on:{"mouseenter":function($event){return _vm.mouseOver(true)},"mouseleave":function($event){return _vm.mouseOver(false)}}},[_c('a',{ref:"tooltipTrigger",staticClass:"trigger",attrs:{"href":"javascript:void(0);","tabindex":_vm.disabled || _vm.noFocus ? -1 : 0},on:{"focus":function($event){$event.stopPropagation();return _vm.show()},"blur":function($event){$event.stopPropagation();return _vm.hide()},"click":function($event){return _vm.onClick()}}},[(!_vm.$slots.icon)?_vm._t("trigger",[_c('AlertTriangleIcon',{staticClass:"nq-orange"})]):_vm._e(),(_vm.$slots.icon && !_vm.$slots.trigger)?_vm._t("icon"):_vm._e()],2),_c('transition',{attrs:{"name":"transition-fade"}},[(_vm.isShown)?_c('div',{ref:"tooltipBox",staticClass:"tooltip-box",style:(_vm.tooltipBoxStyles)},[_vm._t("default")],2):_vm._e()])],1)}
var Tooltipvue_type_template_id_71bfa335_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Tooltip.vue?vue&type=template&id=71bfa335&scoped=true&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.every.js
var es_array_every = __webpack_require__("a623");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.entries.js
var es_object_entries = __webpack_require__("4fad");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.values.js
var es_object_values = __webpack_require__("07ac");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.split.js
var es_string_split = __webpack_require__("1276");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.filter.js
var es_array_filter = __webpack_require__("4de4");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.for-each.js
var es_array_for_each = __webpack_require__("4160");

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

__decorate([Object(external_vue_property_decorator_["Prop"])(Boolean)], Tooltipvue_type_script_lang_ts_Tooltip.prototype, "noFocus", void 0);

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
// EXTERNAL MODULE: ./src/components/Tooltip.vue?vue&type=style&index=0&id=71bfa335&scoped=true&lang=css&
var Tooltipvue_type_style_index_0_id_71bfa335_scoped_true_lang_css_ = __webpack_require__("63f6");

// CONCATENATED MODULE: ./src/components/Tooltip.vue






/* normalize component */

var Tooltip_component = normalizeComponent(
  components_Tooltipvue_type_script_lang_ts_,
  Tooltipvue_type_template_id_71bfa335_scoped_true_render,
  Tooltipvue_type_template_id_71bfa335_scoped_true_staticRenderFns,
  false,
  null,
  "71bfa335",
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
// export { default as AddressDisplay } from './components/AddressDisplay.vue';
// export { default as AddressInput } from './components/AddressInput.vue';
// export { default as Amount } from './components/Amount.vue';
// export { default as AmountInput } from './components/AmountInput.vue';
// export { default as AmountWithFee } from './components/AmountWithFee.vue';
// export { default as BottomOverlay } from './components/BottomOverlay.vue';
// export { default as Carousel } from './components/Carousel.vue';

 // export { default as Copyable } from './components/Copyable.vue';


 // export { default as Identicon } from './components/Identicon.vue';
// export { default as LabelInput } from './components/LabelInput.vue';
// export { default as LoadingSpinner } from './components/LoadingSpinner.vue';
// export { default as PageBody } from './components/PageBody.vue';
// export { default as PageFooter } from './components/PageFooter.vue';
// export { default as PageHeader } from './components/PageHeader.vue';
// export { default as PaymentInfoLine } from './components/PaymentInfoLine.vue';
// export { default as QrCode } from './components/QrCode.vue';
// export { default as QrScanner } from './components/QrScanner.vue';
// export { default as SelectBar } from './components/SelectBar.vue';

 // export { default as Timer } from './components/Timer.vue';

 // export { default as Wallet } from './components/Wallet.vue';
// Comment out unused icons in the components/Icons.ts file



/**
 * Set a specific public path / base path (see https://webpack.js.org/guides/public-path/) from where assets like
 * translation files, identicons or the qr scanner worker should be loaded. By default, this is the path from where
 * the importing script is loaded, derived from the importing script's currentScript src.
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
/* concated harmony reexport CircleSpinner */__webpack_require__.d(__webpack_exports__, "CircleSpinner", function() { return CircleSpinner; });
/* concated harmony reexport CloseButton */__webpack_require__.d(__webpack_exports__, "CloseButton", function() { return components_CloseButton; });
/* concated harmony reexport CopyableField */__webpack_require__.d(__webpack_exports__, "CopyableField", function() { return components_CopyableField; });
/* concated harmony reexport FiatAmount */__webpack_require__.d(__webpack_exports__, "FiatAmount", function() { return components_FiatAmount; });
/* concated harmony reexport SmallPage */__webpack_require__.d(__webpack_exports__, "SmallPage", function() { return components_SmallPage; });
/* concated harmony reexport Tooltip */__webpack_require__.d(__webpack_exports__, "Tooltip", function() { return components_Tooltip; });
/* concated harmony reexport AlertTriangleIcon */__webpack_require__.d(__webpack_exports__, "AlertTriangleIcon", function() { return AlertTriangleIcon; });
/* concated harmony reexport ArrowLeftSmallIcon */__webpack_require__.d(__webpack_exports__, "ArrowLeftSmallIcon", function() { return ArrowLeftSmallIcon; });
/* concated harmony reexport ArrowRightSmallIcon */__webpack_require__.d(__webpack_exports__, "ArrowRightSmallIcon", function() { return ArrowRightSmallIcon; });
/* concated harmony reexport CheckmarkIcon */__webpack_require__.d(__webpack_exports__, "CheckmarkIcon", function() { return CheckmarkIcon; });
/* concated harmony reexport CloseIcon */__webpack_require__.d(__webpack_exports__, "CloseIcon", function() { return CloseIcon; });
/* concated harmony reexport CopyIcon */__webpack_require__.d(__webpack_exports__, "CopyIcon", function() { return CopyIcon; });
/* concated harmony reexport QrCodeIcon */__webpack_require__.d(__webpack_exports__, "QrCodeIcon", function() { return QrCodeIcon; });
/* concated harmony reexport QuestionmarkIcon */__webpack_require__.d(__webpack_exports__, "QuestionmarkIcon", function() { return QuestionmarkIcon; });
/* concated harmony reexport I18nMixin */__webpack_require__.d(__webpack_exports__, "I18nMixin", function() { return i18n_I18nMixin; });
/* concated harmony reexport setAssetPublicPath */__webpack_require__.d(__webpack_exports__, "setAssetPublicPath", function() { return setAssetPublicPath; });




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
});
//# sourceMappingURL=NimiqVueComponents.umd.js.map