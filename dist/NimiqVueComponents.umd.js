(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["NimiqVueComponents"] = factory(require("vue"));
	else
		root["NimiqVueComponents"] = factory(root["Vue"]);
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE__8bbf__) {
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
/******/ 			if(installedChunks[chunkId]) {
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
/******/ 		return __webpack_require__.p + "NimiqVueComponents.umd." + ({"1":"qr-encoder"}[chunkId]||chunkId) + ".js"
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
/******/ 				var head = document.getElementsByTagName('head')[0];
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
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							var error = new Error('Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')');
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
/******/ 				head.appendChild(script);
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

/***/ "08b4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountRing_vue_vue_type_style_index_0_id_104332b6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("1176");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountRing_vue_vue_type_style_index_0_id_104332b6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountRing_vue_vue_type_style_index_0_id_104332b6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountRing_vue_vue_type_style_index_0_id_104332b6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

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

/***/ "1176":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

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

/***/ "14a2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WalletList_vue_vue_type_style_index_0_id_16c7be3e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("663f");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WalletList_vue_vue_type_style_index_0_id_16c7be3e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WalletList_vue_vue_type_style_index_0_id_16c7be3e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WalletList_vue_vue_type_style_index_0_id_16c7be3e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "1625":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/iqons.min.72f3b689.svg";

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

/***/ "36bd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)

var toObject = __webpack_require__("4bf8");
var toAbsoluteIndex = __webpack_require__("77f1");
var toLength = __webpack_require__("9def");
module.exports = function fill(value /* , start = 0, end = @length */) {
  var O = toObject(this);
  var length = toLength(O.length);
  var aLen = arguments.length;
  var index = toAbsoluteIndex(aLen > 1 ? arguments[1] : undefined, length);
  var end = aLen > 2 ? arguments[2] : undefined;
  var endPos = end === undefined ? length : toAbsoluteIndex(end, length);
  while (endPos > index) O[index++] = value;
  return O;
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

/***/ "3f89":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QrScanner_vue_vue_type_style_index_0_id_8d461d38_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("4e83");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QrScanner_vue_vue_type_style_index_0_id_8d461d38_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QrScanner_vue_vue_type_style_index_0_id_8d461d38_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QrScanner_vue_vue_type_style_index_0_id_8d461d38_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

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

/***/ "428a":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Identicon_vue_vue_type_style_index_0_id_01e7cdc5_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("9c17");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Identicon_vue_vue_type_style_index_0_id_01e7cdc5_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Identicon_vue_vue_type_style_index_0_id_01e7cdc5_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Identicon_vue_vue_type_style_index_0_id_01e7cdc5_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

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

/***/ "46f5":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "qr-scanner-worker.min.js";

/***/ }),

/***/ "4917":
/***/ (function(module, exports, __webpack_require__) {

// @@match logic
__webpack_require__("214f")('match', 1, function (defined, MATCH, $match) {
  // 21.1.3.11 String.prototype.match(regexp)
  return [function match(regexp) {
    'use strict';
    var O = defined(this);
    var fn = regexp == undefined ? undefined : regexp[MATCH];
    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
  }, $match];
});


/***/ }),

/***/ "4a3a":
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

/***/ "4e83":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

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

/***/ "53b5":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

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

/***/ "564b":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

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

/***/ "5daa":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

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

/***/ "609a":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactList_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("53b5");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactList_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactList_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactList_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "610c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("564b");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

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

/***/ "65d9":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
  * vue-class-component v6.2.0
  * (c) 2015-present Evan You
  * @license MIT
  */


Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var Vue = _interopDefault(__webpack_require__("8bbf"));

var hasProto = { __proto__: [] } instanceof Array;
function createDecorator(factory) {
    return function (target, key, index) {
        var Ctor = typeof target === 'function'
            ? target
            : target.constructor;
        if (!Ctor.__decorators__) {
            Ctor.__decorators__ = [];
        }
        if (typeof index !== 'number') {
            index = undefined;
        }
        Ctor.__decorators__.push(function (options) { return factory(options, key, index); });
    };
}
function mixins() {
    var Ctors = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        Ctors[_i] = arguments[_i];
    }
    return Vue.extend({ mixins: Ctors });
}
function isPrimitive(value) {
    var type = typeof value;
    return value == null || (type !== "object" && type !== "function");
}
function warn(message) {
    if (typeof console !== 'undefined') {
        console.warn('[vue-class-component] ' + message);
    }
}

function collectDataFromConstructor(vm, Component) {
    // override _init to prevent to init as Vue instance
    var originalInit = Component.prototype._init;
    Component.prototype._init = function () {
        var _this = this;
        // proxy to actual vm
        var keys = Object.getOwnPropertyNames(vm);
        // 2.2.0 compat (props are no longer exposed as self properties)
        if (vm.$options.props) {
            for (var key in vm.$options.props) {
                if (!vm.hasOwnProperty(key)) {
                    keys.push(key);
                }
            }
        }
        keys.forEach(function (key) {
            if (key.charAt(0) !== '_') {
                Object.defineProperty(_this, key, {
                    get: function () { return vm[key]; },
                    set: function (value) { return vm[key] = value; },
                    configurable: true
                });
            }
        });
    };
    // should be acquired class property values
    var data = new Component();
    // restore original _init to avoid memory leak (#209)
    Component.prototype._init = originalInit;
    // create plain data object
    var plainData = {};
    Object.keys(data).forEach(function (key) {
        if (data[key] !== undefined) {
            plainData[key] = data[key];
        }
    });
    if (false) {}
    return plainData;
}

var $internalHooks = [
    'data',
    'beforeCreate',
    'created',
    'beforeMount',
    'mounted',
    'beforeDestroy',
    'destroyed',
    'beforeUpdate',
    'updated',
    'activated',
    'deactivated',
    'render',
    'errorCaptured' // 2.5
];
function componentFactory(Component, options) {
    if (options === void 0) { options = {}; }
    options.name = options.name || Component._componentTag || Component.name;
    // prototype props.
    var proto = Component.prototype;
    Object.getOwnPropertyNames(proto).forEach(function (key) {
        if (key === 'constructor') {
            return;
        }
        // hooks
        if ($internalHooks.indexOf(key) > -1) {
            options[key] = proto[key];
            return;
        }
        var descriptor = Object.getOwnPropertyDescriptor(proto, key);
        if (typeof descriptor.value === 'function') {
            // methods
            (options.methods || (options.methods = {}))[key] = descriptor.value;
        }
        else if (descriptor.get || descriptor.set) {
            // computed properties
            (options.computed || (options.computed = {}))[key] = {
                get: descriptor.get,
                set: descriptor.set
            };
        }
    });
    (options.mixins || (options.mixins = [])).push({
        data: function () {
            return collectDataFromConstructor(this, Component);
        }
    });
    // decorate options
    var decorators = Component.__decorators__;
    if (decorators) {
        decorators.forEach(function (fn) { return fn(options); });
        delete Component.__decorators__;
    }
    // find super
    var superProto = Object.getPrototypeOf(Component.prototype);
    var Super = superProto instanceof Vue
        ? superProto.constructor
        : Vue;
    var Extended = Super.extend(options);
    forwardStaticMembers(Extended, Component, Super);
    return Extended;
}
var reservedPropertyNames = [
    // Unique id
    'cid',
    // Super Vue constructor
    'super',
    // Component options that will be used by the component
    'options',
    'superOptions',
    'extendOptions',
    'sealedOptions',
    // Private assets
    'component',
    'directive',
    'filter'
];
function forwardStaticMembers(Extended, Original, Super) {
    // We have to use getOwnPropertyNames since Babel registers methods as non-enumerable
    Object.getOwnPropertyNames(Original).forEach(function (key) {
        // `prototype` should not be overwritten
        if (key === 'prototype') {
            return;
        }
        // Some browsers does not allow reconfigure built-in properties
        var extendedDescriptor = Object.getOwnPropertyDescriptor(Extended, key);
        if (extendedDescriptor && !extendedDescriptor.configurable) {
            return;
        }
        var descriptor = Object.getOwnPropertyDescriptor(Original, key);
        // If the user agent does not support `__proto__` or its family (IE <= 10),
        // the sub class properties may be inherited properties from the super class in TypeScript.
        // We need to exclude such properties to prevent to overwrite
        // the component options object which stored on the extended constructor (See #192).
        // If the value is a referenced value (object or function),
        // we can check equality of them and exclude it if they have the same reference.
        // If it is a primitive value, it will be forwarded for safety.
        if (!hasProto) {
            // Only `cid` is explicitly exluded from property forwarding
            // because we cannot detect whether it is a inherited property or not
            // on the no `__proto__` environment even though the property is reserved.
            if (key === 'cid') {
                return;
            }
            var superDescriptor = Object.getOwnPropertyDescriptor(Super, key);
            if (!isPrimitive(descriptor.value)
                && superDescriptor
                && superDescriptor.value === descriptor.value) {
                return;
            }
        }
        // Warn if the users manually declare reserved properties
        if (false) {}
        Object.defineProperty(Extended, key, descriptor);
    });
}

function Component(options) {
    if (typeof options === 'function') {
        return componentFactory(options);
    }
    return function (Component) {
        return componentFactory(Component, options);
    };
}
(function (Component) {
    function registerHooks(keys) {
        $internalHooks.push.apply($internalHooks, keys);
    }
    Component.registerHooks = registerHooks;
})(Component || (Component = {}));
var Component$1 = Component;

exports.default = Component$1;
exports.createDecorator = createDecorator;
exports.mixins = mixins;


/***/ }),

/***/ "663f":
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

/***/ "6c7b":
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
var $export = __webpack_require__("5ca1");

$export($export.P, 'Array', { fill: __webpack_require__("36bd") });

__webpack_require__("9c6c")('fill');


/***/ }),

/***/ "738b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WalletMenu_vue_vue_type_style_index_0_id_8b531eca_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("4a3a");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WalletMenu_vue_vue_type_style_index_0_id_8b531eca_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WalletMenu_vue_vue_type_style_index_0_id_8b531eca_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WalletMenu_vue_vue_type_style_index_0_id_8b531eca_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "75a0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Address_vue_vue_type_style_index_0_id_753c9091_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("5daa");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Address_vue_vue_type_style_index_0_id_753c9091_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Address_vue_vue_type_style_index_0_id_753c9091_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Address_vue_vue_type_style_index_0_id_753c9091_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

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

/***/ "7f20":
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__("86cc").f;
var has = __webpack_require__("69a8");
var TAG = __webpack_require__("2b4c")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "7fc1":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

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

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__8bbf__;

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

/***/ "9bf0":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "9c17":
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

/***/ "be13":
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


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

/***/ "c56a":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Amount_vue_vue_type_style_index_0_id_0f586561_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("7fc1");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Amount_vue_vue_type_style_index_0_id_0f586561_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Amount_vue_vue_type_style_index_0_id_0f586561_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Amount_vue_vue_type_style_index_0_id_0f586561_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

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

/***/ "d202":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Wallet_vue_vue_type_style_index_0_id_0ea37ae0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("9bf0");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Wallet_vue_vue_type_style_index_0_id_0ea37ae0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Wallet_vue_vue_type_style_index_0_id_0ea37ae0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Wallet_vue_vue_type_style_index_0_id_0ea37ae0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

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

/***/ "fab2":
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__("7726").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "fae3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var setPublicPath_i
  if ((setPublicPath_i = window.document.currentScript) && (setPublicPath_i = setPublicPath_i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = setPublicPath_i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"59626770-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/ContactList.vue?vue&type=template&id=58f4d43a&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"contact-list"},[(_vm.contacts.length > 3)?[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.searchTerm),expression:"searchTerm"}],ref:"search",staticClass:"search-field",attrs:{"type":"text","placeholder":"Search..."},domProps:{"value":(_vm.searchTerm)},on:{"input":function($event){if($event.target.composing){ return; }_vm.searchTerm=$event.target.value}}}),_c('i',{staticClass:"material-icons search-icon"},[_vm._v("search")]),(_vm.searchTerm)?_c('a',{staticClass:"material-icons search-clear",attrs:{"href":"#","title":"Clear search"},on:{"click":function($event){$event.preventDefault();return _vm.clearSearch($event)}}},[_vm._v("clear")]):_vm._e()]:_vm._e(),_c('div',{staticClass:"list"},[(_vm.isAddingNewContact)?_c('span',[_vm._v("New contact:")]):_vm._e(),(_vm.isAddingNewContact)?_c('NewContact',{ref:"newContact",on:{"abort":_vm.abortNewContact,"set":_vm.setContact}}):_vm._e(),_vm._l((_vm.filteredContacts),function(contact){return _c('Contact',{key:contact.address,attrs:{"address":contact.address,"label":contact.label,"show-options":_vm.isManaging,"abort-trigger":_vm.abortTrigger},on:{"select":_vm.selectContact,"change":_vm.changeContact,"delete":_vm.deleteContact}})}),(!_vm.filteredContacts.length && !_vm.searchTerm)?_c('div',{staticClass:"no-contacts"},[_c('i',{staticClass:"material-icons"},[_vm._v("face")]),_vm._v("\n            Use the menu to add contacts\n        ")]):_vm._e(),(!_vm.filteredContacts.length && _vm.searchTerm)?_c('div',{staticClass:"no-contacts"},[_c('i',{staticClass:"material-icons"},[_vm._v("face")]),_vm._v("\n            No matches found\n        ")]):_vm._e()],2),_c('label',{ref:"importLabel",staticClass:"file-import"},[_c('input',{ref:"importInput",attrs:{"type":"file"},on:{"change":_vm.loadFile}})])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/ContactList.vue?vue&type=template&id=58f4d43a&

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

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.search.js
var es6_regexp_search = __webpack_require__("386d");

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

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__("8bbf");
var external_commonjs_vue_commonjs2_vue_root_Vue_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_vue_commonjs2_vue_root_Vue_);

// EXTERNAL MODULE: ./node_modules/vue-class-component/dist/vue-class-component.common.js
var vue_class_component_common = __webpack_require__("65d9");
var vue_class_component_common_default = /*#__PURE__*/__webpack_require__.n(vue_class_component_common);

// CONCATENATED MODULE: ./node_modules/vue-property-decorator/lib/vue-property-decorator.js
/** vue-property-decorator verson 7.0.0 MIT LICENSE copyright 2018 kaorun343 */




/**
 * decorator of an inject
 * @param from key
 * @return PropertyDecorator
 */
function Inject(options) {
    return Object(vue_class_component_common["createDecorator"])(function (componentOptions, key) {
        if (typeof componentOptions.inject === 'undefined') {
            componentOptions.inject = {};
        }
        if (!Array.isArray(componentOptions.inject)) {
            componentOptions.inject[key] = options || key;
        }
    });
}
/**
 * decorator of a provide
 * @param key key
 * @return PropertyDecorator | void
 */
function Provide(key) {
    return Object(vue_class_component_common["createDecorator"])(function (componentOptions, k) {
        var provide = componentOptions.provide;
        if (typeof provide !== 'function' || !provide.managed) {
            var original_1 = componentOptions.provide;
            provide = componentOptions.provide = function () {
                var rv = Object.create((typeof original_1 === 'function' ? original_1.call(this) : original_1) || null);
                for (var i in provide.managed)
                    rv[provide.managed[i]] = this[i];
                return rv;
            };
            provide.managed = {};
        }
        provide.managed[k] = key || k;
    });
}
/**
 * decorator of model
 * @param  event event name
 * @param options options
 * @return PropertyDecorator
 */
function Model(event, options) {
    if (options === void 0) { options = {}; }
    return Object(vue_class_component_common["createDecorator"])(function (componentOptions, k) {
        (componentOptions.props || (componentOptions.props = {}))[k] = options;
        componentOptions.model = { prop: k, event: event || k };
    });
}
/**
 * decorator of a prop
 * @param  options the options for the prop
 * @return PropertyDecorator | void
 */
function Prop(options) {
    if (options === void 0) { options = {}; }
    return Object(vue_class_component_common["createDecorator"])(function (componentOptions, k) {
        (componentOptions.props || (componentOptions.props = {}))[k] = options;
    });
}
/**
 * decorator of a watch function
 * @param  path the path or the expression to observe
 * @param  WatchOption
 * @return MethodDecorator
 */
function Watch(path, options) {
    if (options === void 0) { options = {}; }
    var _a = options.deep, deep = _a === void 0 ? false : _a, _b = options.immediate, immediate = _b === void 0 ? false : _b;
    return Object(vue_class_component_common["createDecorator"])(function (componentOptions, handler) {
        if (typeof componentOptions.watch !== 'object') {
            componentOptions.watch = Object.create(null);
        }
        componentOptions.watch[path] = { handler: handler, deep: deep, immediate: immediate };
    });
}
// Code copied from Vue/src/shared/util.js
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = function (str) { return str.replace(hyphenateRE, '-$1').toLowerCase(); };
/**
 * decorator of an event-emitter function
 * @param  event The name of the event
 * @return MethodDecorator
 */
function Emit(event) {
    return function (target, key, descriptor) {
        key = hyphenate(key);
        var original = descriptor.value;
        descriptor.value = function emitter() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if (original.apply(this, args) !== false)
                this.$emit.apply(this, [event || key].concat(args));
        };
    };
}

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"59626770-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Contact.vue?vue&type=template&id=3f439278&
var Contactvue_type_template_id_3f439278_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"contact",on:{"click":_vm.select}},[_c('Identicon',{class:{ 'small': !_vm.isEditing && !_vm.showOptions },attrs:{"address":_vm.isEditing ? _vm.workingAddress : _vm.address}}),(!_vm.isEditing)?_c('div',{staticClass:"info"},[_c('span',{staticClass:"label"},[_vm._v(_vm._s(_vm.label))]),_c('Address',{attrs:{"address":_vm.address}}),(_vm.showOptions)?_c('div',{staticClass:"bottom"},[_c('button',{staticClass:"small secondary",attrs:{"title":"Edit contact"},on:{"click":function($event){$event.stopPropagation();return _vm.edit($event)}}},[_c('i',{staticClass:"material-icons"},[_vm._v("edit")])]),_c('button',{staticClass:"small secondary remove",attrs:{"title":"Delete contact"},on:{"click":function($event){$event.stopPropagation();return _vm.remove($event)}}},[_c('i',{staticClass:"material-icons"},[_vm._v("delete")])])]):_vm._e()],1):_vm._e(),(_vm.isEditing)?_c('div',{staticClass:"info"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.workingLabel),expression:"workingLabel"}],ref:"labelInput",staticClass:"label",attrs:{"type":"text","placeholder":"Name"},domProps:{"value":(_vm.workingLabel)},on:{"input":function($event){if($event.target.composing){ return; }_vm.workingLabel=$event.target.value}}}),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.workingAddress),expression:"workingAddress"}],staticClass:"address-input",attrs:{"type":"text","placeholder":"Address"},domProps:{"value":(_vm.workingAddress)},on:{"input":function($event){if($event.target.composing){ return; }_vm.workingAddress=$event.target.value}}}),_c('div',{staticClass:"bottom"},[_c('button',{staticClass:"small secondary save",attrs:{"disabled":!_vm.isInputValid(),"title":"Save changes"},on:{"click":function($event){$event.stopPropagation();return _vm.save($event)}}},[_c('i',{staticClass:"material-icons"},[_vm._v("check")])]),_c('button',{staticClass:"small secondary",attrs:{"title":"Abort"},on:{"click":function($event){$event.stopPropagation();return _vm.abort($event)}}},[_c('i',{staticClass:"material-icons"},[_vm._v("close")])])])]):_vm._e()],1)}
var Contactvue_type_template_id_3f439278_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Contact.vue?vue&type=template&id=3f439278&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.number.constructor.js
var es6_number_constructor = __webpack_require__("c5f6");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"59626770-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Identicon.vue?vue&type=template&id=01e7cdc5&scoped=true&
var Identiconvue_type_template_id_01e7cdc5_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"identicon"},[_c('img',{attrs:{"src":_vm.dataUrl}})])}
var Identiconvue_type_template_id_01e7cdc5_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Identicon.vue?vue&type=template&id=01e7cdc5&scoped=true&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.replace.js
var es6_regexp_replace = __webpack_require__("a481");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.match.js
var es6_regexp_match = __webpack_require__("4917");

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
            // TODO use custom error class?
            // @ts-ignore
            throw new Error('Addresses start with NQ', 201);
        }
        if (str.length !== 36) {
            // TODO use custom error class?
            // @ts-ignore
            throw new Error('Addresses are 36 chars (ignoring spaces)', 202);
        }
        if (this._ibanCheck(str.substr(4) + str.substr(0, 4)) !== 1) {
            // TODO use custom error class?
            // @ts-ignore
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
        }
        catch (e) {
            return false;
        }
    }
}


//# sourceMappingURL=ValidationUtils.js.map

// CONCATENATED MODULE: ./node_modules/@nimiq/iqons/dist/iqons.min.js
const IqonsCatalog={face:["face_01","face_02","face_03","face_04","face_05","face_06","face_07","face_08","face_09","face_10","face_11","face_12","face_13","face_14","face_15","face_16","face_17","face_18","face_19","face_20","face_21"],side:["side_01","side_02","side_03","side_04","side_05","side_06","side_07","side_08","side_09","side_10","side_11","side_12","side_13","side_14","side_15","side_16","side_17","side_18","side_19","side_20","side_21"],top:["top_01","top_02","top_03","top_04","top_05","top_06","top_07","top_08","top_09","top_10","top_11","top_12","top_13","top_14","top_15","top_16","top_17","top_18","top_19","top_20","top_21"],bottom:["bottom_01","bottom_02","bottom_03","bottom_04","bottom_05","bottom_06","bottom_07","bottom_08","bottom_09","bottom_10","bottom_11","bottom_12","bottom_13","bottom_14","bottom_15","bottom_16","bottom_17","bottom_18","bottom_19","bottom_20","bottom_21"]};
class Iqons{static async svg(t,e=!1){const s=this._hash(t);return this._svgTemplate(s[0],s[2],s[3]+s[4],s[5]+s[6],s[7]+s[8],s[9]+s[10],s[11],s[12],e)}static async render(t,e){e.innerHTML=await this.svg(t)}static async toDataUrl(t){return`data:image/svg+xml;base64,${btoa(await this.svg(t,!0)).replace(/#/g,"%23")}`}static placeholder(t="#bbb",e=1){return`<svg viewBox="0 0 160 160" width="160" height="160" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/2000/xlink" >\n            <path fill="none" stroke="${t}" stroke-width="${2*e}" transform="translate(0, 8) scale(0.5)" d="M251.6 17.34l63.53 110.03c5.72 9.9 5.72 22.1 0 32L251.6 269.4c-5.7 9.9-16.27 16-27.7 16H96.83c-11.43 0-22-6.1-27.7-16L5.6 159.37c-5.7-9.9-5.7-22.1 0-32L69.14 17.34c5.72-9.9 16.28-16 27.7-16H223.9c11.43 0 22 6.1 27.7 16z"/>\n            <g transform="scale(0.9) translate(9, 8)">\n                <circle cx="80" cy="80" r="40" fill="none" stroke="${t}" stroke-width="${e}" opacity=".9"></circle>\n                <g opacity=".1" fill="#010101"><path d="M119.21,80a39.46,39.46,0,0,1-67.13,28.13c10.36,2.33,36,3,49.82-14.28,10.39-12.47,8.31-33.23,4.16-43.26A39.35,39.35,0,0,1,119.21,80Z"/></g>\`\n            </g>\n        </svg>`}static renderPlaceholder(t,e,s){t.innerHTML=this.placeholder(e,s)}static placeholderToDataUrl(t,e){return`data:image/svg+xml;base64,${btoa(this.placeholder(t,e))}`}static async image(t){const e=await this.toDataUrl(t),s=await this._loadImage(e);return s.style.width="100%",s.style.height="100%",s}static async _svgTemplate(t,e,s,a,n,r,i,c,o){return this._$svg(await this._$iqons(t,e,s,a,n,r,i,o),c)}static async _$iqons(t,e,s,a,n,r,i,c){for(t=parseInt(t),e=parseInt(e),i=parseInt(i),t===e&&++t>9&&(t=0);i===t||i===e;)++i>9&&(i=0);return t=this.colors[t],e=this.backgroundColors[e],`<g color="${t}" fill="${i=this.colors[i]}">\n            <rect fill="${e}" x="0" y="0" width="160" height="160"></rect>\n            <circle cx="80" cy="80" r="40" fill="${t}"></circle>\n            <g opacity=".1" fill="#010101"><path d="M119.21,80a39.46,39.46,0,0,1-67.13,28.13c10.36,2.33,36,3,49.82-14.28,10.39-12.47,8.31-33.23,4.16-43.26A39.35,39.35,0,0,1,119.21,80Z"/></g>\n            ${await this._generatePart("top",a,c)}\n            ${await this._generatePart("side",n,c)}\n            ${await this._generatePart("face",s,c)}\n            ${await this._generatePart("bottom",r,c)}\n        </g>`}static _$svg(t,e){const s=this._getRandomId();return`<svg viewBox="0 0 160 160" width="160" height="160" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/2000/xlink" >\n            <defs>\n                <clipPath id="hexagon-clip-${s}" transform="scale(0.5) translate(0, 16)">\n                    <path d="M251.6 17.34l63.53 110.03c5.72 9.9 5.72 22.1 0 32L251.6 269.4c-5.7 9.9-16.27 16-27.7 16H96.83c-11.43 0-22-6.1-27.7-16L5.6 159.37c-5.7-9.9-5.7-22.1 0-32L69.14 17.34c5.72-9.9 16.28-16 27.7-16H223.9c11.43 0 22 6.1 27.7 16z"/>\n                </clipPath>\n            </defs>\n            <g clip-path="url(#hexagon-clip-${s})">\n                ${t}\n            </g>\n        </svg>`}static async _generatePart(t,e,s=!1){if(s){const s=await this._getAssets(),a="#"+t+"_"+this._assetIndex(e,t);return s.querySelector(a).innerHTML}return`<use width="160" height="160" xlink:href="${this.svgPath}#${t}_${this._assetIndex(e,t)}"/>`}static _loadImage(t){return new Promise((e,s)=>{const a=document.createElement("img");a.addEventListener("load",t=>e(a),{once:!0}),a.src=t})}static async _getAssets(){return this._assetsPromise||(this._assetsPromise=fetch(self.NIMIQ_IQONS_SVG_PATH||Iqons.svgPath).then(t=>t.text()).then(t=>{return(new DOMParser).parseFromString(t,"image/svg+xml")}))}static get colors(){return["#FC8702","#D94432","#E9B213","#1A5493","#0582CA","#5961A8","#21bca5","#FA7268","#88B04B","#795548"]}static get backgroundColors(){return["#FC8702","#D94432","#E9B213","#1F2348","#0582CA","#5F4B8B","#21bca5","#FA7268","#88B04B","#795548"]}static get assetCounts(){return{face:IqonsCatalog.face.length,side:IqonsCatalog.side.length,top:IqonsCatalog.top.length,bottom:IqonsCatalog.bottom.length,gaze:2}}static _assetIndex(t,e){return(t=Number(t)%this.assetCounts[e]+1)<10&&(t="0"+t),t}static _hash(t){return(""+t.split("").map(t=>Number(t.charCodeAt(0))+3).reduce((t,e)=>t*(1-t)*this.__chaosHash(e),.5)).split("").reduce((t,e)=>e+t,"").substr(4,17)}static __chaosHash(t){let e=1/t;for(let t=0;t<100;t++)e=(1-e)*e*3.569956786876;return e}static _getRandomId(){let t=new Uint32Array(1);return crypto.getRandomValues(t),t[0]}}
/* @asset(/libraries/iqons/dist/iqons.min.svg) */;Iqons.svgPath="/libraries/iqons/dist/iqons.min.svg";
// EXTERNAL MODULE: ./node_modules/@nimiq/iqons/dist/iqons.min.svg
var iqons_min = __webpack_require__("1625");
var iqons_min_default = /*#__PURE__*/__webpack_require__.n(iqons_min);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--13-1!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Identicon.vue?vue&type=script&lang=ts&








var Identicon_1;



 // Detect Iqons.svgPath
// @ts-ignore

if (self.NIMIQ_IQONS_SVG_PATH) Iqons.svgPath = self.NIMIQ_IQONS_SVG_PATH;else {
  if (iqons_min_default.a[0] === '"') {
    Iqons.svgPath = iqons_min_default.a.substring(1, iqons_min_default.a.length - 1);
  } else {
    Iqons.svgPath = iqons_min_default.a;
  }
}

var Identiconvue_type_script_lang_ts_Identicon = Identicon_1 =
/*#__PURE__*/
function (_Vue) {
  function Identicon() {
    var _this;

    _classCallCheck(this, Identicon);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Identicon).apply(this, arguments));
    _this.dataUrl = Iqons.placeholderToDataUrl();
    return _this;
  }

  _createClass(Identicon, [{
    key: "computeDataUrl",
    value: function computeDataUrl(address, oldAddress) {
      var _this2 = this;

      if (this.address && Identicon_1.isUserFriendlyAddress(this.address)) {
        Iqons.toDataUrl(Identicon_1.formatAddress(this.address)).then(function (dataUrl) {
          _this2.dataUrl = dataUrl;
        });
      } else {
        this.dataUrl = Iqons.placeholderToDataUrl();
      }

      return true;
    }
  }], [{
    key: "formatAddress",
    value: function formatAddress(str) {
      return str.replace(/[\+ ]/g, '').match(/.{4}/g).join(' ');
    }
  }, {
    key: "isUserFriendlyAddress",
    value: function isUserFriendlyAddress(str) {
      return ValidationUtils.isValidAddress(str);
    }
  }]);

  _inherits(Identicon, _Vue);

  return Identicon;
}(external_commonjs_vue_commonjs2_vue_root_Vue_default.a);

__decorate([Prop(String)], Identiconvue_type_script_lang_ts_Identicon.prototype, "address", void 0);

__decorate([Watch('address', {
  immediate: true
})], Identiconvue_type_script_lang_ts_Identicon.prototype, "computeDataUrl", null);

Identiconvue_type_script_lang_ts_Identicon = Identicon_1 = __decorate([vue_class_component_common_default.a], Identiconvue_type_script_lang_ts_Identicon);
/* harmony default export */ var Identiconvue_type_script_lang_ts_ = (Identiconvue_type_script_lang_ts_Identicon);
// CONCATENATED MODULE: ./src/components/Identicon.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_Identiconvue_type_script_lang_ts_ = (Identiconvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./src/components/Identicon.vue?vue&type=style&index=0&id=01e7cdc5&scoped=true&lang=css&
var Identiconvue_type_style_index_0_id_01e7cdc5_scoped_true_lang_css_ = __webpack_require__("428a");

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
  Identiconvue_type_template_id_01e7cdc5_scoped_true_render,
  Identiconvue_type_template_id_01e7cdc5_scoped_true_staticRenderFns,
  false,
  null,
  "01e7cdc5",
  null
  
)

component.options.__file = "Identicon.vue"
/* harmony default export */ var components_Identicon = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"59626770-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Address.vue?vue&type=template&id=753c9091&scoped=true&
var Addressvue_type_template_id_753c9091_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"address",on:{"click":_vm.copy}},[_c('span',[_vm._v(_vm._s(_vm.address ? _vm.userFriendlyAddress : 'Invalid address'))]),_c('div',{staticClass:"copied-cover"},[_vm._v("Copied!")])])}
var Addressvue_type_template_id_753c9091_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Address.vue?vue&type=template&id=753c9091&scoped=true&

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
  }, {
    key: "userFriendlyAddress",
    get: function get() {
      return components_Identicon.formatAddress(this.address);
    }
  }]);

  _inherits(Address, _Vue);

  return Address;
}(external_commonjs_vue_commonjs2_vue_root_Vue_default.a);

__decorate([Prop(String)], Addressvue_type_script_lang_ts_Address.prototype, "address", void 0);

Addressvue_type_script_lang_ts_Address = __decorate([vue_class_component_common_default.a], Addressvue_type_script_lang_ts_Address);
/* harmony default export */ var Addressvue_type_script_lang_ts_ = (Addressvue_type_script_lang_ts_Address);
// CONCATENATED MODULE: ./src/components/Address.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_Addressvue_type_script_lang_ts_ = (Addressvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./src/components/Address.vue?vue&type=style&index=0&id=753c9091&scoped=true&lang=css&
var Addressvue_type_style_index_0_id_753c9091_scoped_true_lang_css_ = __webpack_require__("75a0");

// CONCATENATED MODULE: ./src/components/Address.vue






/* normalize component */

var Address_component = normalizeComponent(
  components_Addressvue_type_script_lang_ts_,
  Addressvue_type_template_id_753c9091_scoped_true_render,
  Addressvue_type_template_id_753c9091_scoped_true_staticRenderFns,
  false,
  null,
  "753c9091",
  null
  
)

Address_component.options.__file = "Address.vue"
/* harmony default export */ var components_Address = (Address_component.exports);
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
      this.workingAddress = this.address;
      this.isEditing = true; // Wait for DOM to update

      external_commonjs_vue_commonjs2_vue_root_Vue_default.a.nextTick(function () {
        var labelInput = _this2.$refs.labelInput;
        labelInput.select();
        labelInput.focus();
      });
    }
  }, {
    key: "save",
    value: function save() {
      var label = this.workingLabel.trim();

      if (this.address !== this.workingAddress || this.label !== label) {
        this.$emit('change', {
          label: this.label,
          address: this.address
        }, {
          label: label,
          address: this.workingAddress
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
}(external_commonjs_vue_commonjs2_vue_root_Vue_default.a);

__decorate([Prop(String)], Contactvue_type_script_lang_ts_Contact.prototype, "address", void 0);

__decorate([Prop(String)], Contactvue_type_script_lang_ts_Contact.prototype, "label", void 0);

__decorate([Prop(Boolean)], Contactvue_type_script_lang_ts_Contact.prototype, "showOptions", void 0);

__decorate([Prop(Number)], Contactvue_type_script_lang_ts_Contact.prototype, "abortTrigger", void 0);

__decorate([Watch('abortTrigger')], Contactvue_type_script_lang_ts_Contact.prototype, "abort", null);

Contactvue_type_script_lang_ts_Contact = __decorate([vue_class_component_common_default()({
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
  Contactvue_type_template_id_3f439278_render,
  Contactvue_type_template_id_3f439278_staticRenderFns,
  false,
  null,
  null,
  null
  
)

Contact_component.options.__file = "Contact.vue"
/* harmony default export */ var components_Contact = (Contact_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"59626770-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/NewContact.vue?vue&type=template&id=5ab3d78c&
var NewContactvue_type_template_id_5ab3d78c_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"contact"},[_c('Identicon',{attrs:{"address":_vm.workingAddress}}),_c('div',{staticClass:"info"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.workingLabel),expression:"workingLabel"}],ref:"labelInput",staticClass:"label",attrs:{"type":"text","placeholder":"Name"},domProps:{"value":(_vm.workingLabel)},on:{"input":function($event){if($event.target.composing){ return; }_vm.workingLabel=$event.target.value}}}),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.workingAddress),expression:"workingAddress"}],staticClass:"address-input",attrs:{"type":"text","placeholder":"Address"},domProps:{"value":(_vm.workingAddress)},on:{"input":function($event){if($event.target.composing){ return; }_vm.workingAddress=$event.target.value}}}),_c('div',{staticClass:"bottom"},[_c('button',{staticClass:"small secondary save",attrs:{"disabled":!_vm.isInputValid,"title":"Save changes"},on:{"click":function($event){$event.stopPropagation();return _vm.save($event)}}},[_c('i',{staticClass:"material-icons"},[_vm._v("check")])]),_c('button',{staticClass:"small secondary",attrs:{"title":"Abort"},on:{"click":function($event){$event.stopPropagation();return _vm.abort($event)}}},[_c('i',{staticClass:"material-icons"},[_vm._v("close")])])])])],1)}
var NewContactvue_type_template_id_5ab3d78c_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/NewContact.vue?vue&type=template&id=5ab3d78c&

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
    key: "set",
    value: function set(label, address) {}
  }, {
    key: "abort",
    value: function abort() {}
  }, {
    key: "isInputValid",
    value: function isInputValid() {
      return this.workingLabel && ValidationUtils.isValidAddress(this.workingAddress);
    }
  }, {
    key: "save",
    value: function save() {
      // Update or set contact info
      this.set(this.workingLabel, this.workingAddress); // TODO: this.$toast.success('Contact saved.');

      this.edit();
    }
  }]);

  _inherits(NewContact, _Vue);

  return NewContact;
}(external_commonjs_vue_commonjs2_vue_root_Vue_default.a);

__decorate([Emit() // tslint:disable-next-line no-empty
], NewContactvue_type_script_lang_ts_NewContact.prototype, "set", null);

__decorate([Emit() // tslint:disable-next-line no-empty
], NewContactvue_type_script_lang_ts_NewContact.prototype, "abort", null);

NewContactvue_type_script_lang_ts_NewContact = __decorate([vue_class_component_common_default()({
  components: {
    Identicon: components_Identicon,
    Address: components_Address
  }
})], NewContactvue_type_script_lang_ts_NewContact);
/* harmony default export */ var NewContactvue_type_script_lang_ts_ = (NewContactvue_type_script_lang_ts_NewContact);
// CONCATENATED MODULE: ./src/components/NewContact.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_NewContactvue_type_script_lang_ts_ = (NewContactvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./src/components/NewContact.vue





/* normalize component */

var NewContact_component = normalizeComponent(
  components_NewContactvue_type_script_lang_ts_,
  NewContactvue_type_template_id_5ab3d78c_render,
  NewContactvue_type_template_id_5ab3d78c_staticRenderFns,
  false,
  null,
  null,
  null
  
)

NewContact_component.options.__file = "NewContact.vue"
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
    _this.abortTrigger = 0;
    return _this;
  }

  _createClass(ContactList, [{
    key: "selectContact",
    value: function selectContact(address) {}
  }, {
    key: "setContact",
    value: function setContact(label, address) {}
  }, {
    key: "removeContact",
    value: function removeContact(address) {}
  }, {
    key: "notification",
    value: function notification(msg, type) {}
  }, {
    key: "reset",
    value: function reset() {
      this.isManaging = false;
      this.isAddingNewContact = false;
      this.abortTrigger += 1;
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
      if (!search) return;
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
      external_commonjs_vue_commonjs2_vue_root_Vue_default.a.nextTick(function () {
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
      var text = JSON.stringify(this.contacts); // From https://stackoverflow.com/a/18197341/4204380

      var element = document.createElement('a');
      element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
      element.setAttribute('download', 'Nimiq-Safe-Contacts.json');
      element.style.display = 'none';
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
    }
  }, {
    key: "import",
    value: function _import() {
      this.$refs.importLabel.click();
    }
  }, {
    key: "loadFile",
    value: function loadFile(event) {
      var _this3 = this;

      var fileList = event.target.files;
      if (!fileList) return;
      var file = fileList[0];
      if (!file) return;
      var reader = new FileReader();

      reader.onload = function (e) {
        return _this3.readFile(e.target.result);
      };

      reader.readAsText(file);
    }
  }, {
    key: "readFile",
    value: function readFile(data) {
      // Reset file input
      this.$refs.importInput.value = '';
      var importedContacts = [];

      try {
        importedContacts = JSON.parse(data);
      } catch (e) {
        this.notification('Cannot import file, wrong format.', 'error');
        return;
      } // Make sure the input is a non-empty array


      if (!importedContacts.length) {
        this.notification('Cannot import file, wrong format.', 'error');
        return;
      }

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = importedContacts[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var newContact = _step.value;
          if (!newContact.label || !newContact.address) continue;
          var storedContact = this.contacts[newContact.address];

          if (storedContact) {
            if (storedContact.label === newContact.label) continue;else {
              var shouldOverwrite = confirm("A contact with the address \"".concat(storedContact.address, "\", but a different name already exists.\n\nDo you want to override it?"));
              if (!shouldOverwrite) continue;
            }
          }

          this.setContact(newContact.label, newContact.address);
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

      this.notification('Contact import finished.', 'success');
    }
  }, {
    key: "filteredContacts",
    get: function get() {
      var searchTerm = this.searchTerm.trim().toLowerCase();
      if (!searchTerm) return this.contacts;
      var result = [];
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = this.contacts[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var contact = _step2.value;

          if (contact.label.toLowerCase().includes(searchTerm)) {
            result.push(contact);
          }
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      return result;
    }
  }]);

  _inherits(ContactList, _Vue);

  return ContactList;
}(external_commonjs_vue_commonjs2_vue_root_Vue_default.a);

__decorate([Prop(Array)], ContactListvue_type_script_lang_ts_ContactList.prototype, "contacts", void 0);

__decorate([Emit() // tslint:disable-next-line no-empty
], ContactListvue_type_script_lang_ts_ContactList.prototype, "selectContact", null);

__decorate([Emit() // tslint:disable-next-line no-empty
], ContactListvue_type_script_lang_ts_ContactList.prototype, "setContact", null);

__decorate([Emit() // tslint:disable-next-line no-empty
], ContactListvue_type_script_lang_ts_ContactList.prototype, "removeContact", null);

__decorate([Emit() // tslint:disable-next-line no-empty
], ContactListvue_type_script_lang_ts_ContactList.prototype, "notification", null);

ContactListvue_type_script_lang_ts_ContactList = __decorate([vue_class_component_common_default()({
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
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

ContactList_component.options.__file = "ContactList.vue"
/* harmony default export */ var components_ContactList = (ContactList_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"59626770-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/QrCode.vue?vue&type=template&id=73489b00&
var QrCodevue_type_template_id_73489b00_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (!!_vm.data)?_c('canvas'):_vm._e()}
var QrCodevue_type_template_id_73489b00_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/QrCode.vue?vue&type=template&id=73489b00&

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/builtin/es6/arrayWithHoles.js
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/builtin/es6/iterableToArrayLimit.js
function _iterableToArrayLimit(arr, i) {
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
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/builtin/es6/nonIterableRest.js
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/builtin/es6/slicedToArray.js



function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}
// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.fill.js
var es6_array_fill = __webpack_require__("6c7b");

// EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__("96cf");

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/builtin/es6/asyncToGenerator.js
function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function step(key, arg) {
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

      function _next(value) {
        step("next", value);
      }

      function _throw(err) {
        step("throw", err);
      }

      _next();
    });
  };
}
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
  function QrCode() {
    _classCallCheck(this, QrCode);

    return _possibleConstructorReturn(this, _getPrototypeOf(QrCode).apply(this, arguments));
  }

  _createClass(QrCode, [{
    key: "mounted",
    value: function mounted() {
      var $canvas = this.$el;
      $canvas.width = this.size;
      $canvas.height = this.size;
    }
  }, {
    key: "_updateQrCode",
    value: function () {
      var _updateQrCode2 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        var QrEncoder;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (this.data) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt("return");

              case 2:
                _context.next = 4;
                return __webpack_require__.e(/* import() | qr-encoder */ 1).then(__webpack_require__.bind(null, "f459"));

              case 4:
                QrEncoder = _context.sent.default;
                QrEncoder.render({
                  text: this.data,
                  radius: this.radius,
                  ecLevel: this.errorCorrection,
                  fill: this.fill,
                  background: this.background,
                  size: this.size
                }, this.$el);

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function _updateQrCode() {
        return _updateQrCode2.apply(this, arguments);
      };
    }()
  }]);

  _inherits(QrCode, _Vue);

  return QrCode;
}(external_commonjs_vue_commonjs2_vue_root_Vue_default.a);

__decorate([Prop(String)], QrCodevue_type_script_lang_ts_QrCode.prototype, "data", void 0);

__decorate([Prop({
  type: String,
  default: 'M',
  validator: function validator(errorCorrectionLevel) {
    return ['L', 'M', 'H', 'Q'].indexOf(errorCorrectionLevel) !== -1;
  }
})], QrCodevue_type_script_lang_ts_QrCode.prototype, "errorCorrection", void 0);

__decorate([Prop({
  type: Number,
  default: .5,
  validator: function validator(radius) {
    return 0 <= radius && radius <= .5;
  }
})], QrCodevue_type_script_lang_ts_QrCode.prototype, "radius", void 0);

__decorate([Prop({
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

__decorate([Prop({
  default: null,
  validator: function validator(background) {
    return background === null || /^#([0-9a-f]{6}|[0-9a-f]{8})$/i.test(background);
  }
})], QrCodevue_type_script_lang_ts_QrCode.prototype, "background", void 0);

__decorate([Prop({
  type: Number,
  default: 240,
  validator: function validator(size) {
    return size > 0;
  }
})], QrCodevue_type_script_lang_ts_QrCode.prototype, "size", void 0);

__decorate([Watch('data', {
  immediate: true
}), Watch('errorCorrection'), Watch('radius'), Watch('fill'), Watch('background'), Watch('size')], QrCodevue_type_script_lang_ts_QrCode.prototype, "_updateQrCode", null);

QrCodevue_type_script_lang_ts_QrCode = __decorate([vue_class_component_common_default.a], QrCodevue_type_script_lang_ts_QrCode);
/* harmony default export */ var QrCodevue_type_script_lang_ts_ = (QrCodevue_type_script_lang_ts_QrCode);
// CONCATENATED MODULE: ./src/components/QrCode.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_QrCodevue_type_script_lang_ts_ = (QrCodevue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./src/components/QrCode.vue





/* normalize component */

var QrCode_component = normalizeComponent(
  components_QrCodevue_type_script_lang_ts_,
  QrCodevue_type_template_id_73489b00_render,
  QrCodevue_type_template_id_73489b00_staticRenderFns,
  false,
  null,
  null,
  null
  
)

QrCode_component.options.__file = "QrCode.vue"
/* harmony default export */ var components_QrCode = (QrCode_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"59626770-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/QrScanner.vue?vue&type=template&id=8d461d38&scoped=true&
var QrScannervue_type_template_id_8d461d38_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"qr-scanner"},[_c('video',{ref:"video",attrs:{"muted":"","autoplay":"","playsinline":"","width":"600","height":"600"},domProps:{"muted":true}}),_c('div',{ref:"overlay",staticClass:"overlay",class:{ inactive: _vm.cameraAccessFailed }},[_vm._t("default",[_c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 238 238"}},[_c('path',{attrs:{"fill":"none","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"4","d":"M31.3 2H10a8 8 0 0 0-8 8v21.3M206.8 2H228a8 8 0 0 1 8 8v21.3m0 175.4V228a8 8 0 0 1-8 8h-21.3m-175.4 0H10a8 8 0 0 1-8-8v-21.3"}})])])],2),_c('button',{staticClass:"nq-button-s cancel-button",on:{"click":_vm._cancel}},[_vm._v("Cancel")]),_c('transition',{attrs:{"name":"fade"}},[(_vm.cameraAccessFailed)?_c('div',{staticClass:"camera-access-failed"},[(!_vm.hasCamera)?_c('div',{staticClass:"camera-access-failed-warning"},[_vm._v("\n                Your device does not have an accessible camera.\n            ")]):_c('div',[_c('div',{staticClass:"camera-access-failed-warning"},[_vm._v("\n                    Unblock the camera for this website to scan QR codes.\n                ")]),(_vm.isMobileOrTablet)?_c('div',[(_vm.browser === 'chrome')?_c('div',[_c('div',{staticClass:"access-denied-instructions"},[_vm._v("\n                            Click on "),_c('span',{staticClass:"browser-menu-icon"}),_vm._v(" and go to\n                            "),_c('br'),_vm._v("\n                            Settings > Site Settings > Camera\n                        ")]),_c('div',{staticClass:"browser-menu-arrow"})]):_c('div',{staticClass:"access-denied-instructions"},[_vm._v("\n                        Grant camera access when asked.\n                    ")])]):_c('div',{staticClass:"access-denied-instructions"},[(_vm.browser === 'safari')?_c('div',[_vm._v("\n                        Click on "),_c('b',[_vm._v("Safari")]),_vm._v(" and go to\n                        "),_c('br'),_vm._v("\n                        Settings for this Website > Camera\n                    ")]):_c('div',[_vm._v("\n                        Click on\n                        "),(_vm.browser === 'chrome')?_c('span',{staticClass:"camera-icon-chrome"}):(_vm.browser === 'firefox')?_c('span',{staticClass:"camera-icon-firefox"}):_c('span',[_vm._v("the camera icon")]),_vm._v("\n                        in the URL bar.\n                    ")])])])]):_vm._e()])],1)}
var QrScannervue_type_template_id_8d461d38_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/QrScanner.vue?vue&type=template&id=8d461d38&scoped=true&

// CONCATENATED MODULE: ./node_modules/qr-scanner/qr-scanner.min.js
class e{static hasCamera(){return navigator.mediaDevices.enumerateDevices().then((a)=>a.some((a)=>"videoinput"===a.kind)).catch(()=>!1)}constructor(a,c,b=e.DEFAULT_CANVAS_SIZE){this.$video=a;this.$canvas=document.createElement("canvas");this._onDecode=c;this._paused=this._active=!1;this.$canvas.width=b;this.$canvas.height=b;this._sourceRect={x:0,y:0,width:b,height:b};this._onCanPlay=this._onCanPlay.bind(this);this._onPlay=this._onPlay.bind(this);this._onVisibilityChange=this._onVisibilityChange.bind(this);
this.$video.addEventListener("canplay",this._onCanPlay);this.$video.addEventListener("play",this._onPlay);document.addEventListener("visibilitychange",this._onVisibilityChange);this._qrWorker=new Worker(e.WORKER_PATH)}destroy(){this.$video.removeEventListener("canplay",this._onCanPlay);this.$video.removeEventListener("play",this._onPlay);document.removeEventListener("visibilitychange",this._onVisibilityChange);this.stop();this._qrWorker.postMessage({type:"close"})}start(){if(this._active&&!this._paused)return Promise.resolve();
"https:"!==window.location.protocol&&console.warn("The camera stream is only accessible if the page is transferred via https.");this._active=!0;this._paused=!1;if(document.hidden)return Promise.resolve();clearTimeout(this._offTimeout);this._offTimeout=null;if(this.$video.srcObject)return this.$video.play(),Promise.resolve();let a="environment";return this._getCameraStream("environment",!0).catch(()=>{a="user";return this._getCameraStream()}).then((c)=>{this.$video.srcObject=c;this._setVideoMirror(a)}).catch((a)=>
{this._active=!1;throw a;})}stop(){this.pause();this._active=!1}pause(){this._paused=!0;this._active&&(this.$video.pause(),this._offTimeout||(this._offTimeout=setTimeout(()=>{let a=this.$video.srcObject&&this.$video.srcObject.getTracks()[0];a&&(a.stop(),this._offTimeout=this.$video.srcObject=null)},300)))}static scanImage(a,c=null,b=null,d=null,f=!1,g=!1){let h=!1,l=new Promise((l,g)=>{b||(b=new Worker(e.WORKER_PATH),h=!0,b.postMessage({type:"inversionMode",data:"both"}));let n,m,k;m=(a)=>{"qrResult"===
a.data.type&&(b.removeEventListener("message",m),b.removeEventListener("error",k),clearTimeout(n),null!==a.data.data?l(a.data.data):g("QR code not found."))};k=(a)=>{b.removeEventListener("message",m);b.removeEventListener("error",k);clearTimeout(n);g("Scanner error: "+(a?a.message||a:"Unknown Error"))};b.addEventListener("message",m);b.addEventListener("error",k);n=setTimeout(()=>k("timeout"),3E3);e._loadImage(a).then((a)=>{a=e._getImageData(a,c,d,f);b.postMessage({type:"decode",data:a},[a.data.buffer])}).catch(k)});
c&&g&&(l=l.catch(()=>e.scanImage(a,null,b,d,f)));return l=l.finally(()=>{h&&b.postMessage({type:"close"})})}setGrayscaleWeights(a,c,b,d=!0){this._qrWorker.postMessage({type:"grayscaleWeights",data:{red:a,green:c,blue:b,useIntegerApproximation:d}})}setInversionMode(a){this._qrWorker.postMessage({type:"inversionMode",data:a})}_onCanPlay(){this._updateSourceRect();this.$video.play()}_onPlay(){this._updateSourceRect();this._scanFrame()}_onVisibilityChange(){document.hidden?this.pause():this._active&&
this.start()}_updateSourceRect(){let a=Math.round(2/3*Math.min(this.$video.videoWidth,this.$video.videoHeight));this._sourceRect.width=this._sourceRect.height=a;this._sourceRect.x=(this.$video.videoWidth-a)/2;this._sourceRect.y=(this.$video.videoHeight-a)/2}_scanFrame(){if(!this._active||this.$video.paused||this.$video.ended)return!1;requestAnimationFrame(()=>{e.scanImage(this.$video,this._sourceRect,this._qrWorker,this.$canvas,!0).then(this._onDecode,(a)=>{this._active&&"QR code not found."!==a&&
console.error(a)}).then(()=>this._scanFrame())})}_getCameraStream(a,c=!1){let b=[{width:{min:1024}},{width:{min:768}},{}];a&&(c&&(a={exact:a}),b.forEach((b)=>b.facingMode=a));return this._getMatchingCameraStream(b)}_getMatchingCameraStream(a){return 0===a.length?Promise.reject("Camera not found."):navigator.mediaDevices.getUserMedia({video:a.shift()}).catch(()=>this._getMatchingCameraStream(a))}_setVideoMirror(a){this.$video.style.transform="scaleX("+("user"===a?-1:1)+")"}static _getImageData(a,c=
null,b=null,d=!1){b=b||document.createElement("canvas");let f=c&&c.x?c.x:0,g=c&&c.y?c.y:0,h=c&&c.width?c.width:a.width||a.videoWidth;c=c&&c.height?c.height:a.height||a.videoHeight;d||b.width===h&&b.height===c||(b.width=h,b.height=c);d=b.getContext("2d",{alpha:!1});d.imageSmoothingEnabled=!1;d.drawImage(a,f,g,h,c,0,0,b.width,b.height);return d.getImageData(0,0,b.width,b.height)}static _loadImage(a){if(a instanceof HTMLCanvasElement||a instanceof HTMLVideoElement||window.ImageBitmap&&a instanceof window.ImageBitmap||
window.OffscreenCanvas&&a instanceof window.OffscreenCanvas)return Promise.resolve(a);if(a instanceof Image)return e._awaitImageLoad(a).then(()=>a);if(a instanceof File||a instanceof URL||"string"===typeof a){let c=new Image;c.src=a instanceof File?URL.createObjectURL(a):a;return e._awaitImageLoad(c).then(()=>{a instanceof File&&URL.revokeObjectURL(c.src);return c})}return Promise.reject("Unsupported image type.")}static _awaitImageLoad(a){return new Promise((c,b)=>{if(a.complete&&0!==a.naturalWidth)c();
else{let d,f;d=()=>{a.removeEventListener("load",d);a.removeEventListener("error",f);c()};f=()=>{a.removeEventListener("load",d);a.removeEventListener("error",f);b("Image load error")};a.addEventListener("load",d);a.addEventListener("error",f)}})}}e.DEFAULT_CANVAS_SIZE=400;e.WORKER_PATH="qr-scanner-worker.min.js";/* harmony default export */ var qr_scanner_min = (e);
//# sourceMappingURL=qr-scanner.min.js.map

// CONCATENATED MODULE: ./node_modules/@nimiq/utils/dist/module/BrowserDetection.js
class BrowserDetection {
    // Also includes tablets.
    // Inspired by:
    // - https://stackoverflow.com/a/13819253
    // - https://developer.mozilla.org/en-US/docs/Web/HTTP/Browser_detection_using_the_user_agent#Mobile_Tablet_or_Desktop
    // - http://detectmobilebrowsers.com/about (tablets)
    static isMobile() {
        return /i?Phone|iP(ad|od)|Android|BlackBerry|Opera Mini|WPDesktop|Mobi(le)?|Silk/i.test(navigator.userAgent);
    }
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
    static detectBrowser() {
        if (BrowserDetection._detectedBrowser) {
            return BrowserDetection._detectedBrowser;
        }
        // note that the order is important as many browsers include the names of others in the ua.
        const ua = navigator.userAgent;
        if (/Edge\//i.test(ua)) {
            BrowserDetection._detectedBrowser = "edge" /* EDGE */;
        }
        else if (/(Opera|OPR)\//i.test(ua)) {
            BrowserDetection._detectedBrowser = "opera" /* OPERA */;
        }
        else if (/Firefox\//i.test(ua)) {
            BrowserDetection._detectedBrowser = "firefox" /* FIREFOX */;
        }
        else if (/Chrome\//i.test(ua)) {
            BrowserDetection._detectedBrowser = "chrome" /* CHROME */;
        }
        else if (/^((?!chrome|android).)*safari/i.test(ua)) {
            // see https://stackoverflow.com/a/23522755
            // Note that Chrome iOS is also detected as Safari, see comments in stack overflow
            BrowserDetection._detectedBrowser = "safari" /* SAFARI */;
        }
        else {
            BrowserDetection._detectedBrowser = "unknown" /* UNKNOWN */;
        }
        return BrowserDetection._detectedBrowser;
    }
    static isChrome() {
        return BrowserDetection.detectBrowser() === "chrome" /* CHROME */;
    }
    static isFirefox() {
        return BrowserDetection.detectBrowser() === "firefox" /* FIREFOX */;
    }
    static isOpera() {
        return BrowserDetection.detectBrowser() === "opera" /* OPERA */;
    }
    static isEdge() {
        return BrowserDetection.detectBrowser() === "edge" /* EDGE */;
    }
    static isSafari() {
        return BrowserDetection.detectBrowser() === "safari" /* SAFARI */;
    }
    static isIOS() {
        return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    }
    static iOSversion() {
        if (/iP(hone|od|ad)/.test(navigator.platform)) {
            const v = (navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/);
            return [parseInt(v[1], 10), parseInt(v[2], 10), parseInt(v[3] || '0', 10)];
        }
    }
    static isBadIOS() {
        const version = this.iOSversion();
        return version && version[0] < 11 || (version[0] === 11 && version[1] === 2); // Only 11.2 has the WASM bug
    }
    /**
     * Detect if the browser is running in Private Browsing mode
     *
     * @returns {Promise}
     */
    static isPrivateMode() {
        return new Promise((resolve) => {
            const on = () => { resolve(true); }; // is in private mode
            const off = () => { resolve(false); }; // not private mode
            // using browser detection by feature detection here, also see https://stackoverflow.com/a/9851769
            // These seem to be partly outdated though. Might want to consider using user agent based detection.
            const isSafari = () => {
                return (/Constructor/.test(window.HTMLElement) ||
                    (function (root) {
                        return (!root || root.pushNotification).toString() === '[object SafariRemoteNotification]';
                    })(window.safari));
            };
            // Chrome & Opera
            if (window.webkitRequestFileSystem) {
                return void window.webkitRequestFileSystem(0, 0, off, on);
            }
            // Firefox
            if (document.documentElement && 'MozAppearance' in document.documentElement.style) {
                // @ts-ignore
                const db = indexedDB.open(null);
                db.onerror = on;
                db.onsuccess = off;
                return void 0;
            }
            // Safari
            if (isSafari()) {
                try {
                    window.openDatabase(null, null, null, null);
                }
                catch (_) {
                    return on();
                }
            }
            // IE10+ & Edge
            if (!window.indexedDB && (window.PointerEvent || window.MSPointerEvent)) {
                return on();
            }
            // others
            return off();
        });
    }
}

/* harmony default export */ var module_BrowserDetection = (BrowserDetection);
//# sourceMappingURL=BrowserDetection.js.map

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
function (_Vue) {
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

                /* ERROR */
                _context.t0 = _context["catch"](0);
                this.cameraAccessFailed = true;
                this.$emit("error", _context.t0);

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

      return function start() {
        return _start.apply(this, arguments);
      };
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

  _inherits(QrScanner, _Vue);

  return QrScanner;
}(external_commonjs_vue_commonjs2_vue_root_Vue_default.a);

__decorate([Prop({
  type: Number,
  default: 7000
})], QrScannervue_type_script_lang_ts_QrScanner.prototype, "reportFrequency", void 0);

__decorate([Prop(Function)], QrScannervue_type_script_lang_ts_QrScanner.prototype, "validate", void 0);

QrScannervue_type_script_lang_ts_QrScanner = QrScanner_1 = __decorate([vue_class_component_common_default.a], QrScannervue_type_script_lang_ts_QrScanner);
/* harmony default export */ var QrScannervue_type_script_lang_ts_ = (QrScannervue_type_script_lang_ts_QrScanner);
// CONCATENATED MODULE: ./src/components/QrScanner.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_QrScannervue_type_script_lang_ts_ = (QrScannervue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./src/components/QrScanner.vue?vue&type=style&index=0&id=8d461d38&scoped=true&lang=css&
var QrScannervue_type_style_index_0_id_8d461d38_scoped_true_lang_css_ = __webpack_require__("3f89");

// CONCATENATED MODULE: ./src/components/QrScanner.vue






/* normalize component */

var QrScanner_component = normalizeComponent(
  components_QrScannervue_type_script_lang_ts_,
  QrScannervue_type_template_id_8d461d38_scoped_true_render,
  QrScannervue_type_template_id_8d461d38_scoped_true_staticRenderFns,
  false,
  null,
  "8d461d38",
  null
  
)

QrScanner_component.options.__file = "QrScanner.vue"
/* harmony default export */ var components_QrScanner = (QrScanner_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"59626770-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/WalletMenu.vue?vue&type=template&id=8b531eca&scoped=true&
var WalletMenuvue_type_template_id_8b531eca_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"wallet-menu"},[_c('WalletList',_vm._g({attrs:{"wallets":_vm.wallets,"activeWalletId":_vm.activeWalletId}},_vm.$listeners)),_c('div',{staticClass:"menu-footer"},[_c('button',{staticClass:"nq-button-s settings",on:{"click":function($event){_vm.$emit('settings')}}},[_c('GearIcon'),_c('span',[_vm._v("Settings")])],1),_c('button',{staticClass:"nq-button-s add-account",on:{"click":function($event){_vm.$emit('add-account')}}},[_vm._v("Add Account")])])],1)}
var WalletMenuvue_type_template_id_8b531eca_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/WalletMenu.vue?vue&type=template&id=8b531eca&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"59626770-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/WalletList.vue?vue&type=template&id=16c7be3e&scoped=true&
var WalletListvue_type_template_id_16c7be3e_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"wallet-list"},_vm._l((_vm.wallets),function(wallet){return _c('button',{key:wallet.id,staticClass:"wallet-entry",class:{active: wallet.id === _vm.activeWalletId},on:{"click":function($event){_vm.walletSelected(wallet.id)}}},[_c('Wallet',_vm._g({attrs:{"wallet":wallet}},_vm.$listeners))],1)}))}
var WalletListvue_type_template_id_16c7be3e_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/WalletList.vue?vue&type=template&id=16c7be3e&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"59626770-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Wallet.vue?vue&type=template&id=0ea37ae0&scoped=true&
var Walletvue_type_template_id_0ea37ae0_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"wallet"},[_c('AccountRing',{attrs:{"addresses":_vm.addresses}}),_c('div',{staticClass:"wallet-description"},[_c('div',{staticClass:"label"},[_vm._v(_vm._s(_vm.wallet.label))]),_c('div',{staticClass:"amount-container",class:{'nq-orange': _vm.exportMissing}},[(_vm.exportMissing)?_c('AlertTriangleIcon'):_vm._e(),(_vm.wallet.balance !== undefined)?_c('Amount',{attrs:{"amount":_vm.wallet.balance,"decimals":0}}):_vm._e()],1)]),(_vm.isBip39 || _vm.isLedger)?_c('button',{staticClass:"menu-toggle",on:{"click":function($event){$event.stopPropagation();}}},[_c('MenuDotsIcon'),_c('div',{staticClass:"menu nq-blue-bg"},[(_vm.isBip39)?_c('button',{staticClass:"item export",on:{"click":function($event){_vm.$emit('export-file', _vm.wallet.id)}}},[_vm._v("\n                Save Login File"),(_vm.fileMissing)?_c('AlertTriangleIcon',{staticClass:"nq-orange"}):_vm._e()],1):_vm._e(),(_vm.isBip39)?_c('button',{staticClass:"item export",on:{"click":function($event){_vm.$emit('export-words', _vm.wallet.id)}}},[_vm._v("\n                Create Backup"),(_vm.wordsMissing)?_c('AlertTriangleIcon',{staticClass:"nq-orange"}):_vm._e()],1):_vm._e(),_c('button',{staticClass:"item",on:{"click":function($event){_vm.$emit('rename', _vm.wallet.id)}}},[_vm._v("Rename")]),(_vm.isBip39)?_c('button',{staticClass:"item",on:{"click":function($event){_vm.$emit('change-password', _vm.wallet.id)}}},[_vm._v("Change Password")]):_vm._e(),_c('div',{staticClass:"separator"}),_c('button',{staticClass:"item logout",on:{"click":function($event){_vm.$emit('logout', _vm.wallet.id)}}},[_c('ArrowRightSmallIcon'),_vm._v("Logout")],1)])],1):_vm._e()],1)}
var Walletvue_type_template_id_0ea37ae0_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Wallet.vue?vue&type=template&id=0ea37ae0&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"59626770-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/AccountRing.vue?vue&type=template&id=104332b6&scoped=true&
var AccountRingvue_type_template_id_104332b6_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"account-ring"},_vm._l((6),function(n){return _c('div',{key:n,staticClass:"account"},[(n <= _vm.addresses.length)?_c('Identicon',{class:{ 'pop-in': _vm.animate },attrs:{"address":_vm.addresses[n - 1]}}):_c('HexagonIcon')],1)}))}
var AccountRingvue_type_template_id_104332b6_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/AccountRing.vue?vue&type=template&id=104332b6&scoped=true&

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
              attrs: Object.assign({"width":"18","height":"14","viewBox":"0 0 18 14","xmlns":"http://www.w3.org/2000/svg"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M11.001 2.00098L16.0003 7.00168L11.001 12.001","stroke":"currentColor","fill":"none","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}}),_c('line',{attrs:{"x1":"14","y1":"7","x2":"1.71529","y2":"7","stroke":"currentColor","fill":"none","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}})])
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
    
// CONCATENATED MODULE: ./src/components/Icons.ts
var IconBase = function IconBase(component) {
  return {
    functional: true,
    render: function render(createElement) {
      return createElement(component, {
        class: 'nq-icon'
      });
    }
  };
};
/**
 * SVG files in an /icons/ directory are automatically loaded as Vue components
 * via the vue-svg-loader.
 */







/**
 * Comment out any unused icons here
 */

var AlertTriangleIcon = IconBase(alert_triangle); // export const ArrowLeftSmallIcon = IconBase(ArrowLeftSmall);
// export const ArrowLeftIcon = IconBase(ArrowLeft);

var ArrowRightSmallIcon = IconBase(arrow_right_small); // export const ArrowRightIcon = IconBase(ArrowRight);
// export const BrowserLoginIcon = IconBase(BrowserLogin);
// export const CaretRightSmallIcon = IconBase(CaretRightSmall);
// export const CheckmarkIcon = IconBase(Checkmark);
// export const CloseIcon = IconBase(Close);
// export const ContactsIcon = IconBase(Contacts);
// export const CopyIcon = IconBase(Copy);
// export const DownloadIcon = IconBase(Download);
// export const FaceNeutralIcon = IconBase(FaceNeutral);
// export const FaceSadIcon = IconBase(FaceSad);
// export const FireIcon = IconBase(Fire);

var GearIcon = IconBase(gear);
var HexagonIcon = IconBase(hexagon); // export const InfoCircleIcon = IconBase(InfoCircle);
// export const KeysIcon = IconBase(Keys);
// export const LedgerIcon = IconBase(Ledger);
// export const LockLockedIcon = IconBase(LockLocked);
// export const LockUnlockedIcon = IconBase(LockUnlocked);
// export const LoginIcon = IconBase(Login);

var MenuDotsIcon = IconBase(menu_dots); // export const PaperEditIcon = IconBase(PaperEdit);
// export const PlusCircleIcon = IconBase(PlusCircle);
// export const QrCodeIcon = IconBase(QrCode);
// export const QuestionmarkIcon = IconBase(Questionmark);
// export const ScanQrCodeIcon = IconBase(ScanQrCode);
// export const SettingsIcon = IconBase(Settings);
// export const ShredderIcon = IconBase(Shredder);
// export const SkullIcon = IconBase(Skull);
// export const TransferIcon = IconBase(Transfer);
// export const ViewOffIcon = IconBase(ViewOff);
// export const ViewIcon = IconBase(View);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--13-1!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/AccountRing.vue?vue&type=script&lang=ts&









var AccountRingvue_type_script_lang_ts_AccountRing =
/*#__PURE__*/
function (_Vue) {
  function AccountRing() {
    _classCallCheck(this, AccountRing);

    return _possibleConstructorReturn(this, _getPrototypeOf(AccountRing).apply(this, arguments));
  }

  _inherits(AccountRing, _Vue);

  return AccountRing;
}(external_commonjs_vue_commonjs2_vue_root_Vue_default.a);

__decorate([Prop({
  default: function _default() {
    return [];
  },
  type: Array
})], AccountRingvue_type_script_lang_ts_AccountRing.prototype, "addresses", void 0);

__decorate([Prop({
  default: false,
  type: Boolean
})], AccountRingvue_type_script_lang_ts_AccountRing.prototype, "animate", void 0);

AccountRingvue_type_script_lang_ts_AccountRing = __decorate([vue_class_component_common_default()({
  components: {
    Identicon: components_Identicon,
    HexagonIcon: HexagonIcon
  }
})], AccountRingvue_type_script_lang_ts_AccountRing);
/* harmony default export */ var AccountRingvue_type_script_lang_ts_ = (AccountRingvue_type_script_lang_ts_AccountRing);
// CONCATENATED MODULE: ./src/components/AccountRing.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_AccountRingvue_type_script_lang_ts_ = (AccountRingvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./src/components/AccountRing.vue?vue&type=style&index=0&id=104332b6&scoped=true&lang=css&
var AccountRingvue_type_style_index_0_id_104332b6_scoped_true_lang_css_ = __webpack_require__("08b4");

// CONCATENATED MODULE: ./src/components/AccountRing.vue






/* normalize component */

var AccountRing_component = normalizeComponent(
  components_AccountRingvue_type_script_lang_ts_,
  AccountRingvue_type_template_id_104332b6_scoped_true_render,
  AccountRingvue_type_template_id_104332b6_scoped_true_staticRenderFns,
  false,
  null,
  "104332b6",
  null
  
)

AccountRing_component.options.__file = "AccountRing.vue"
/* harmony default export */ var components_AccountRing = (AccountRing_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"59626770-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Amount.vue?vue&type=template&id=0f586561&scoped=true&
var Amountvue_type_template_id_0f586561_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',{staticClass:"amount",class:{ approx: _vm.showApprox && _vm.isApprox }},[_vm._v("\n    "+_vm._s(_vm.formattedAmount)+"\n    "),_c('span',{staticClass:"nim"},[_vm._v("NIM")])])}
var Amountvue_type_template_id_0f586561_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Amount.vue?vue&type=template&id=0f586561&scoped=true&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.number.parse-float.js
var es6_number_parse_float = __webpack_require__("5df2");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--13-1!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Amount.vue?vue&type=script&lang=ts&











var Amountvue_type_script_lang_ts_Amount =
/*#__PURE__*/
function (_Vue) {
  function Amount() {
    _classCallCheck(this, Amount);

    return _possibleConstructorReturn(this, _getPrototypeOf(Amount).apply(this, arguments));
  }

  _createClass(Amount, [{
    key: "formattedAmount",
    get: function get() {
      var roundingFactor = Math.pow(10, this.decimals);
      var value = Math.floor(this.amount / 1e5 * roundingFactor) / roundingFactor;
      var result = value.toFixed(this.decimals);
      if (Math.abs(value) < 10000) return result; // add thin spaces (U+202F) every 3 digits. Stop at the decimal separator if there is one

      var regexp = this.decimals > 0 ? /(\d)(?=(\d{3})+\.)/g : /(\d)(?=(\d{3})+$)/g;
      return result.replace(regexp, "$1\u2009");
    }
  }, {
    key: "isApprox",
    get: function get() {
      var roundedNum = Number.parseFloat((this.amount / 1e5).toFixed(this.decimals));
      return roundedNum.toFixed(5) !== (this.amount / 1e5).toFixed(5);
    }
  }]);

  _inherits(Amount, _Vue);

  return Amount;
}(external_commonjs_vue_commonjs2_vue_root_Vue_default.a);

__decorate([Prop(Number)], Amountvue_type_script_lang_ts_Amount.prototype, "amount", void 0);

__decorate([Prop({
  type: Number,
  default: 2,
  validator: function validator(value) {
    return value >= 0 && value <= 5;
  }
})], Amountvue_type_script_lang_ts_Amount.prototype, "decimals", void 0);

__decorate([Prop({
  type: Boolean,
  default: false
})], Amountvue_type_script_lang_ts_Amount.prototype, "showApprox", void 0);

Amountvue_type_script_lang_ts_Amount = __decorate([vue_class_component_common_default.a], Amountvue_type_script_lang_ts_Amount);
/* harmony default export */ var Amountvue_type_script_lang_ts_ = (Amountvue_type_script_lang_ts_Amount);
// CONCATENATED MODULE: ./src/components/Amount.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_Amountvue_type_script_lang_ts_ = (Amountvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./src/components/Amount.vue?vue&type=style&index=0&id=0f586561&scoped=true&lang=css&
var Amountvue_type_style_index_0_id_0f586561_scoped_true_lang_css_ = __webpack_require__("c56a");

// CONCATENATED MODULE: ./src/components/Amount.vue






/* normalize component */

var Amount_component = normalizeComponent(
  components_Amountvue_type_script_lang_ts_,
  Amountvue_type_template_id_0f586561_scoped_true_render,
  Amountvue_type_template_id_0f586561_scoped_true_staticRenderFns,
  false,
  null,
  "0f586561",
  null
  
)

Amount_component.options.__file = "Amount.vue"
/* harmony default export */ var components_Amount = (Amount_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--13-1!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Wallet.vue?vue&type=script&lang=ts&











var Walletvue_type_script_lang_ts_Wallet =
/*#__PURE__*/
function (_Vue) {
  function Wallet() {
    _classCallCheck(this, Wallet);

    return _possibleConstructorReturn(this, _getPrototypeOf(Wallet).apply(this, arguments));
  }

  _createClass(Wallet, [{
    key: "addresses",
    get: function get() {
      return this.wallet.accounts.reduce(function (addresses, account) {
        return addresses.concat(account.address);
      }, []);
    }
  }, {
    key: "isBip39",
    get: function get() {
      return this.wallet.type === 2
      /* BIP39 */
      ;
    }
  }, {
    key: "isLedger",
    get: function get() {
      return this.wallet.type === 3
      /* LEDGER */
      ;
    }
  }, {
    key: "fileMissing",
    get: function get() {
      return this.isBip39 && !this.wallet.fileExported;
    }
  }, {
    key: "wordsMissing",
    get: function get() {
      return this.isBip39 && !this.wallet.wordsExported;
    }
  }, {
    key: "exportMissing",
    get: function get() {
      return this.fileMissing || this.wordsMissing;
    }
  }]);

  _inherits(Wallet, _Vue);

  return Wallet;
}(external_commonjs_vue_commonjs2_vue_root_Vue_default.a);

__decorate([Prop(Object)], Walletvue_type_script_lang_ts_Wallet.prototype, "wallet", void 0);

Walletvue_type_script_lang_ts_Wallet = __decorate([vue_class_component_common_default()({
  components: {
    AccountRing: components_AccountRing,
    Amount: components_Amount,
    AlertTriangleIcon: AlertTriangleIcon,
    MenuDotsIcon: MenuDotsIcon,
    ArrowRightSmallIcon: ArrowRightSmallIcon
  }
})], Walletvue_type_script_lang_ts_Wallet);
/* harmony default export */ var Walletvue_type_script_lang_ts_ = (Walletvue_type_script_lang_ts_Wallet);
// CONCATENATED MODULE: ./src/components/Wallet.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_Walletvue_type_script_lang_ts_ = (Walletvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./src/components/Wallet.vue?vue&type=style&index=0&id=0ea37ae0&scoped=true&lang=css&
var Walletvue_type_style_index_0_id_0ea37ae0_scoped_true_lang_css_ = __webpack_require__("d202");

// CONCATENATED MODULE: ./src/components/Wallet.vue






/* normalize component */

var Wallet_component = normalizeComponent(
  components_Walletvue_type_script_lang_ts_,
  Walletvue_type_template_id_0ea37ae0_scoped_true_render,
  Walletvue_type_template_id_0ea37ae0_scoped_true_staticRenderFns,
  false,
  null,
  "0ea37ae0",
  null
  
)

Wallet_component.options.__file = "Wallet.vue"
/* harmony default export */ var components_Wallet = (Wallet_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--13-1!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/WalletList.vue?vue&type=script&lang=ts&









var WalletListvue_type_script_lang_ts_WalletList =
/*#__PURE__*/
function (_Vue) {
  function WalletList() {
    _classCallCheck(this, WalletList);

    return _possibleConstructorReturn(this, _getPrototypeOf(WalletList).apply(this, arguments));
  }

  _createClass(WalletList, [{
    key: "walletSelected",
    value: function walletSelected(id) {} // tslint:disable-line no-empty

  }]);

  _inherits(WalletList, _Vue);

  return WalletList;
}(external_commonjs_vue_commonjs2_vue_root_Vue_default.a);

__decorate([Prop(Array)], WalletListvue_type_script_lang_ts_WalletList.prototype, "wallets", void 0);

__decorate([Prop(String)], WalletListvue_type_script_lang_ts_WalletList.prototype, "activeWalletId", void 0);

__decorate([Emit()], WalletListvue_type_script_lang_ts_WalletList.prototype, "walletSelected", null);

WalletListvue_type_script_lang_ts_WalletList = __decorate([vue_class_component_common_default()({
  components: {
    Wallet: components_Wallet
  }
})], WalletListvue_type_script_lang_ts_WalletList);
/* harmony default export */ var WalletListvue_type_script_lang_ts_ = (WalletListvue_type_script_lang_ts_WalletList);
// CONCATENATED MODULE: ./src/components/WalletList.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_WalletListvue_type_script_lang_ts_ = (WalletListvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./src/components/WalletList.vue?vue&type=style&index=0&id=16c7be3e&scoped=true&lang=css&
var WalletListvue_type_style_index_0_id_16c7be3e_scoped_true_lang_css_ = __webpack_require__("14a2");

// CONCATENATED MODULE: ./src/components/WalletList.vue






/* normalize component */

var WalletList_component = normalizeComponent(
  components_WalletListvue_type_script_lang_ts_,
  WalletListvue_type_template_id_16c7be3e_scoped_true_render,
  WalletListvue_type_template_id_16c7be3e_scoped_true_staticRenderFns,
  false,
  null,
  "16c7be3e",
  null
  
)

WalletList_component.options.__file = "WalletList.vue"
/* harmony default export */ var components_WalletList = (WalletList_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--13-1!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/WalletMenu.vue?vue&type=script&lang=ts&









var WalletMenuvue_type_script_lang_ts_WalletMenu =
/*#__PURE__*/
function (_Vue) {
  function WalletMenu() {
    _classCallCheck(this, WalletMenu);

    return _possibleConstructorReturn(this, _getPrototypeOf(WalletMenu).apply(this, arguments));
  }

  _inherits(WalletMenu, _Vue);

  return WalletMenu;
}(external_commonjs_vue_commonjs2_vue_root_Vue_default.a);

__decorate([Prop(Array)], WalletMenuvue_type_script_lang_ts_WalletMenu.prototype, "wallets", void 0);

__decorate([Prop(String)], WalletMenuvue_type_script_lang_ts_WalletMenu.prototype, "activeWalletId", void 0);

WalletMenuvue_type_script_lang_ts_WalletMenu = __decorate([vue_class_component_common_default()({
  components: {
    WalletList: components_WalletList,
    GearIcon: GearIcon
  }
})], WalletMenuvue_type_script_lang_ts_WalletMenu);
/* harmony default export */ var WalletMenuvue_type_script_lang_ts_ = (WalletMenuvue_type_script_lang_ts_WalletMenu);
// CONCATENATED MODULE: ./src/components/WalletMenu.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_WalletMenuvue_type_script_lang_ts_ = (WalletMenuvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./src/components/WalletMenu.vue?vue&type=style&index=0&id=8b531eca&scoped=true&lang=css&
var WalletMenuvue_type_style_index_0_id_8b531eca_scoped_true_lang_css_ = __webpack_require__("738b");

// CONCATENATED MODULE: ./src/components/WalletMenu.vue






/* normalize component */

var WalletMenu_component = normalizeComponent(
  components_WalletMenuvue_type_script_lang_ts_,
  WalletMenuvue_type_template_id_8b531eca_scoped_true_render,
  WalletMenuvue_type_template_id_8b531eca_scoped_true_staticRenderFns,
  false,
  null,
  "8b531eca",
  null
  
)

WalletMenu_component.options.__file = "WalletMenu.vue"
/* harmony default export */ var components_WalletMenu = (WalletMenu_component.exports);
// CONCATENATED MODULE: ./src/main.ts
// Components
// export { default as Account } from './components/Account.vue';
// export { default as AccountDetails } from './components/AccountDetails.vue';
// export { default as AccountList } from './components/AccountList.vue';
// export { default as AccountRing } from './components/AccountRing.vue';
// export { default as AccountSelector } from './components/AccountSelector.vue';
// export { default as Address } from './components/Address.vue';
// export { default as AddressDisplay } from './components/AddressDisplay.vue';
// export { default as Amount } from './components/Amount.vue';
// export { default as AmountWithDetails } from './components/AmountWithDetails.vue';
// export { default as Contact } from './components/Contact.vue';
 // export { default as Identicon } from './components/Identicon.vue';
// export { default as LabelInput } from './components/LabelInput.vue';
// export { default as LoadingSpinner } from './components/LoadingSpinner.vue';
// export { default as NewContact } from './components/NewContact.vue';
// export { default as PageBody } from './components/PageBody.vue';
// export { default as PageFooter } from './components/PageFooter.vue';
// export { default as PageHeader } from './components/PageHeader.vue';
// export { default as PaymentInfoLine } from './components/PaymentInfoLine.vue';


 // export { default as SmallPage } from './components/SmallPage.vue';
// export { default as Wallet } from './components/Wallet.vue';
// export { default as WalletList } from './components/WalletList.vue';

 // Comment out unused icons in the components/Icons.ts file


// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib-no-default.js
/* concated harmony reexport ContactList */__webpack_require__.d(__webpack_exports__, "ContactList", function() { return components_ContactList; });
/* concated harmony reexport QrCode */__webpack_require__.d(__webpack_exports__, "QrCode", function() { return components_QrCode; });
/* concated harmony reexport QrScanner */__webpack_require__.d(__webpack_exports__, "QrScanner", function() { return components_QrScanner; });
/* concated harmony reexport WalletMenu */__webpack_require__.d(__webpack_exports__, "WalletMenu", function() { return components_WalletMenu; });
/* concated harmony reexport AlertTriangleIcon */__webpack_require__.d(__webpack_exports__, "AlertTriangleIcon", function() { return AlertTriangleIcon; });
/* concated harmony reexport ArrowRightSmallIcon */__webpack_require__.d(__webpack_exports__, "ArrowRightSmallIcon", function() { return ArrowRightSmallIcon; });
/* concated harmony reexport GearIcon */__webpack_require__.d(__webpack_exports__, "GearIcon", function() { return GearIcon; });
/* concated harmony reexport HexagonIcon */__webpack_require__.d(__webpack_exports__, "HexagonIcon", function() { return HexagonIcon; });
/* concated harmony reexport MenuDotsIcon */__webpack_require__.d(__webpack_exports__, "MenuDotsIcon", function() { return MenuDotsIcon; });




/***/ }),

/***/ "fdef":
/***/ (function(module, exports) {

module.exports = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ })

/******/ });
});
//# sourceMappingURL=NimiqVueComponents.umd.js.map