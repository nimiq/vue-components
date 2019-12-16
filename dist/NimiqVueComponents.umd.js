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

/***/ "02d9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Tooltip_vue_vue_type_style_index_0_id_1ce3a1bc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("dd54");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Tooltip_vue_vue_type_style_index_0_id_1ce3a1bc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Tooltip_vue_vue_type_style_index_0_id_1ce3a1bc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Tooltip_vue_vue_type_style_index_0_id_1ce3a1bc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "09fc":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "0bfb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 21.2.5.3 get RegExp.prototype.flags
var anObject = __webpack_require__("cb7c");
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


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

/***/ "306a":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

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

/***/ "3846":
/***/ (function(module, exports, __webpack_require__) {

// 21.2.5.3 get RegExp.prototype.flags()
if (__webpack_require__("9e1e") && /./g.flags != 'g') __webpack_require__("86cc").f(RegExp.prototype, 'flags', {
  configurable: true,
  get: __webpack_require__("0bfb")
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

/***/ "456d":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__("4bf8");
var $keys = __webpack_require__("0d58");

__webpack_require__("5eda")('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


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

/***/ "5eda":
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__("5ca1");
var core = __webpack_require__("8378");
var fails = __webpack_require__("79e5");
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


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

/***/ "6a66":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

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

/***/ "6b54":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

__webpack_require__("3846");
var anObject = __webpack_require__("cb7c");
var $flags = __webpack_require__("0bfb");
var DESCRIPTORS = __webpack_require__("9e1e");
var TO_STRING = 'toString';
var $toString = /./[TO_STRING];

var define = function (fn) {
  __webpack_require__("2aba")(RegExp.prototype, TO_STRING, fn, true);
};

// 21.2.5.14 RegExp.prototype.toString()
if (__webpack_require__("79e5")(function () { return $toString.call({ source: 'a', flags: 'b' }) != '/a/b'; })) {
  define(function toString() {
    var R = anObject(this);
    return '/'.concat(R.source, '/',
      'flags' in R ? R.flags : !DESCRIPTORS && R instanceof RegExp ? $flags.call(R) : undefined);
  });
// FF44- RegExp#toString has a wrong name
} else if ($toString.name != TO_STRING) {
  define(function toString() {
    return $toString.call(this);
  });
}


/***/ }),

/***/ "6c7b":
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
var $export = __webpack_require__("5ca1");

$export($export.P, 'Array', { fill: __webpack_require__("36bd") });

__webpack_require__("9c6c")('fill');


/***/ }),

/***/ "7333":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__("0d58");
var gOPS = __webpack_require__("2621");
var pIE = __webpack_require__("52a7");
var toObject = __webpack_require__("4bf8");
var IObject = __webpack_require__("626a");
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__("79e5")(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


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

/***/ "cc9d":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CopyableField_vue_vue_type_style_index_0_id_3da747e3_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("306a");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CopyableField_vue_vue_type_style_index_0_id_3da747e3_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CopyableField_vue_vue_type_style_index_0_id_3da747e3_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CopyableField_vue_vue_type_style_index_0_id_3da747e3_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

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

/***/ "d53b":
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "d8e8":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "dce1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SmallPage_vue_vue_type_style_index_0_id_1d450cf2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("09fc");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SmallPage_vue_vue_type_style_index_0_id_1d450cf2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SmallPage_vue_vue_type_style_index_0_id_1d450cf2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SmallPage_vue_vue_type_style_index_0_id_1d450cf2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "dd54":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "e11e":
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "f751":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__("5ca1");

$export($export.S + $export.F, 'Object', { assign: __webpack_require__("7333") });


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

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"46064dad-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/CircleSpinner.vue?vue&type=template&id=355d80ec&scoped=true&functional=true&
var render = function (_h,_vm) {var _c=_vm._c;return _c('svg',{staticClass:"circle-spinner",attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 18 18","width":"18","height":"18","fill":"none","stroke-width":"2","stroke-linecap":"round"}},[_c('path',{attrs:{"stroke":"#0582CA","d":"M9,1c4.42,0,8,3.58,8,8"}}),_c('path',{attrs:{"stroke":"#1F2348","opacity":".3","d":"M4.27,2.56C2.29,4.01,1,6.35,1,9c0,4.42,3.58,8,8,8c2.65,0,4.99-1.29,6.44-3.27"}})])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/CircleSpinner.vue?vue&type=template&id=355d80ec&scoped=true&functional=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--13-1!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/CircleSpinner.vue?vue&type=script&lang=ts&
/* harmony default export */ var CircleSpinnervue_type_script_lang_ts_ = ({});
// CONCATENATED MODULE: ./src/components/CircleSpinner.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_CircleSpinnervue_type_script_lang_ts_ = (CircleSpinnervue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./src/components/CircleSpinner.vue?vue&type=style&index=0&id=355d80ec&scoped=true&lang=css&
var CircleSpinnervue_type_style_index_0_id_355d80ec_scoped_true_lang_css_ = __webpack_require__("fd04");

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
  "355d80ec",
  null
  
)

component.options.__file = "CircleSpinner.vue"
/* harmony default export */ var CircleSpinner = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"46064dad-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/CopyableField.vue?vue&type=template&id=3da747e3&scoped=true&
var CopyableFieldvue_type_template_id_3da747e3_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"copyable-field"},[(_vm.label)?_c('span',{staticClass:"nq-label"},[_vm._v(_vm._s(_vm.label))]):_vm._e(),_c('div',{staticClass:"copyable-field-content",class:{ 'simple-value': !_vm.isKeyedValue, copied: _vm.copied },on:{"click":_vm.copy}},[_c('div',{ref:"value-container",staticClass:"value-container",style:({ fontSize: _vm.fontSize+'rem' })},[_c('span',{ref:"value",staticClass:"value"},[_vm._v("\n                "+_vm._s(_vm.isKeyedValue ? _vm.value[_vm.currentKey] : _vm.value)+"\n            ")])]),_vm._l((Object.keys(_vm.value)),function(key){return (_vm.isKeyedValue)?_c('button',{staticClass:"nq-button-s",class:{
                inverse: _vm.currentKey === key,
                'single-key': _vm.hasSingleKey,
            },attrs:{"tabindex":_vm.hasSingleKey ? -1 : 0},on:{"click":function($event){$event.stopPropagation();_vm.currentKey = key}}},[_vm._v(_vm._s(key))]):_vm._e()})],2)])}
var CopyableFieldvue_type_template_id_3da747e3_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/CopyableField.vue?vue&type=template&id=3da747e3&scoped=true&

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
// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.to-string.js
var es6_regexp_to_string = __webpack_require__("6b54");

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
// EXTERNAL MODULE: ./node_modules/core-js/modules/es7.array.includes.js
var es7_array_includes = __webpack_require__("6762");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.string.includes.js
var es6_string_includes = __webpack_require__("2fdb");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom.iterable.js
var web_dom_iterable = __webpack_require__("ac6a");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.iterator.js
var es6_array_iterator = __webpack_require__("cadf");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.keys.js
var es6_object_keys = __webpack_require__("456d");

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
        catch (e) { }
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

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--13-1!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/CopyableField.vue?vue&type=script&lang=ts&















var CopyableField_1;



var CopyableFieldvue_type_script_lang_ts_CopyableField = CopyableField_1 =
/*#__PURE__*/
function (_Vue) {
  function CopyableField() {
    var _this;

    _classCallCheck(this, CopyableField);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CopyableField).apply(this, arguments));
    _this.currentKey = '';
    _this.fontSize = CopyableField_1.DEFAULT_FONT_SIZE;
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
        var valueContainer, valueElement, availableWidth, referenceWidth, scaleFactor;
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
                valueElement.style.fontSize = "".concat(CopyableField_1.DEFAULT_FONT_SIZE, "rem");
                availableWidth = valueContainer.offsetWidth;
                referenceWidth = valueElement.offsetWidth;
                scaleFactor = availableWidth / referenceWidth;
                valueElement.style.fontSize = '';
                this.fontSize = Math.min(CopyableField_1.DEFAULT_FONT_SIZE, CopyableField_1.DEFAULT_FONT_SIZE * scaleFactor);

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function _updateFontSize() {
        return _updateFontSize2.apply(this, arguments);
      };
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

  _inherits(CopyableField, _Vue);

  return CopyableField;
}(external_vue_property_decorator_["Vue"]);

CopyableFieldvue_type_script_lang_ts_CopyableField.DEFAULT_FONT_SIZE = 3; // in rem

__decorate([Object(external_vue_property_decorator_["Prop"])({
  required: true,
  validator: function validator(value) {
    return typeof value === 'string' || typeof value === 'number' || _typeof(value) === 'object' && Object.keys(value).length > 0;
  }
})], CopyableFieldvue_type_script_lang_ts_CopyableField.prototype, "value", void 0);

__decorate([Object(external_vue_property_decorator_["Prop"])(String)], CopyableFieldvue_type_script_lang_ts_CopyableField.prototype, "label", void 0);

__decorate([Object(external_vue_property_decorator_["Watch"])('value', {
  immediate: true
})], CopyableFieldvue_type_script_lang_ts_CopyableField.prototype, "_onValueChange", null);

__decorate([Object(external_vue_property_decorator_["Watch"])('currentKey')], CopyableFieldvue_type_script_lang_ts_CopyableField.prototype, "_updateFontSize", null);

CopyableFieldvue_type_script_lang_ts_CopyableField = CopyableField_1 = __decorate([external_vue_property_decorator_["Component"]], CopyableFieldvue_type_script_lang_ts_CopyableField);
/* harmony default export */ var CopyableFieldvue_type_script_lang_ts_ = (CopyableFieldvue_type_script_lang_ts_CopyableField);
// CONCATENATED MODULE: ./src/components/CopyableField.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_CopyableFieldvue_type_script_lang_ts_ = (CopyableFieldvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./src/components/CopyableField.vue?vue&type=style&index=0&id=3da747e3&scoped=true&lang=css&
var CopyableFieldvue_type_style_index_0_id_3da747e3_scoped_true_lang_css_ = __webpack_require__("cc9d");

// CONCATENATED MODULE: ./src/components/CopyableField.vue






/* normalize component */

var CopyableField_component = normalizeComponent(
  components_CopyableFieldvue_type_script_lang_ts_,
  CopyableFieldvue_type_template_id_3da747e3_scoped_true_render,
  CopyableFieldvue_type_template_id_3da747e3_scoped_true_staticRenderFns,
  false,
  null,
  "3da747e3",
  null
  
)

CopyableField_component.options.__file = "CopyableField.vue"
/* harmony default export */ var components_CopyableField = (CopyableField_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"46064dad-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/FiatAmount.vue?vue&type=template&id=5a2e1032&
var FiatAmountvue_type_template_id_5a2e1032_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',{staticClass:"fiat-amount"},[_vm._v("\n    "+_vm._s(_vm._currencyString)+"\n")])}
var FiatAmountvue_type_template_id_5a2e1032_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/FiatAmount.vue?vue&type=template&id=5a2e1032&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.number.constructor.js
var es6_number_constructor = __webpack_require__("c5f6");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.replace.js
var es6_regexp_replace = __webpack_require__("a481");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.match.js
var es6_regexp_match = __webpack_require__("4917");

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
        const digitsToKeep = this._digits.substring(0, this._decimalSeparatorPosition + decimals);
        if (Number.parseInt(this._digits[this._decimalSeparatorPosition + decimals]) < 5) {
            // rounding down, can just use the trimmed decimals
            this._digits = digitsToKeep;
            return this;
        }
        // round up
        const digits = `0${digitsToKeep}`.split(''); // add a leading 0 for easier handling of carry
        for (let i = digits.length - 1; i >= 0; --i) {
            const newDigit = Number.parseInt(digits[i]) + 1;
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













var FiatAmountvue_type_script_lang_ts_FiatAmount =
/*#__PURE__*/
function (_Vue) {
  function FiatAmount() {
    _classCallCheck(this, FiatAmount);

    return _possibleConstructorReturn(this, _getPrototypeOf(FiatAmount).apply(this, arguments));
  }

  _createClass(FiatAmount, [{
    key: "_currencyString",
    get: function get() {
      var localeWithLatinNumbers = "".concat(this.locale, "-u-nu-latn");
      var formatted = this.amount.toLocaleString([localeWithLatinNumbers, 'en-US'], {
        style: 'currency',
        currency: this.currency,
        currencyDisplay: 'symbol',
        useGrouping: false
      });
      var integerPart = formatted.match(/\d+/)[0]; // first match is the integer part

      return formatted // Enforce a dot as decimal separator for consistency. Using capturing groups instead of
      // lookahead/lookbehind to avoid browser support limitations.
      .replace(/(\d)\D(\d)/, '$1.$2').replace(integerPart, new FormattableNumber(integerPart).toString(true));
    }
  }]);

  _inherits(FiatAmount, _Vue);

  return FiatAmount;
}(external_vue_property_decorator_["Vue"]);

__decorate([Object(external_vue_property_decorator_["Prop"])({
  type: Number,
  required: true
})], FiatAmountvue_type_script_lang_ts_FiatAmount.prototype, "amount", void 0);

__decorate([Object(external_vue_property_decorator_["Prop"])({
  type: String,
  required: true
})], FiatAmountvue_type_script_lang_ts_FiatAmount.prototype, "currency", void 0);

__decorate([Object(external_vue_property_decorator_["Prop"])({
  type: String,
  default: navigator.language
})], FiatAmountvue_type_script_lang_ts_FiatAmount.prototype, "locale", void 0);

FiatAmountvue_type_script_lang_ts_FiatAmount = __decorate([external_vue_property_decorator_["Component"]], FiatAmountvue_type_script_lang_ts_FiatAmount);
/* harmony default export */ var FiatAmountvue_type_script_lang_ts_ = (FiatAmountvue_type_script_lang_ts_FiatAmount);
// CONCATENATED MODULE: ./src/components/FiatAmount.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_FiatAmountvue_type_script_lang_ts_ = (FiatAmountvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./src/components/FiatAmount.vue





/* normalize component */

var FiatAmount_component = normalizeComponent(
  components_FiatAmountvue_type_script_lang_ts_,
  FiatAmountvue_type_template_id_5a2e1032_render,
  FiatAmountvue_type_template_id_5a2e1032_staticRenderFns,
  false,
  null,
  null,
  null
  
)

FiatAmount_component.options.__file = "FiatAmount.vue"
/* harmony default export */ var components_FiatAmount = (FiatAmount_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"46064dad-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/QrCode.vue?vue&type=template&id=2785d1ea&
var QrCodevue_type_template_id_2785d1ea_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (!!_vm.data)?_c('canvas'):_vm._e()}
var QrCodevue_type_template_id_2785d1ea_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/QrCode.vue?vue&type=template&id=2785d1ea&

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

// CONCATENATED MODULE: ./node_modules/qr-code/qr-code.min.js
/*
 jquery-qrcode v0.14.0 - https://larsjung.de/jquery-qrcode/ */
let G=null;class H{}H.render=function(w,B){G(w,B)};self.QrCode=H;
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
/* harmony default export */ var qr_code_min = (QrCode);
//# sourceMappingURL=qr-code.min.js.map

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

      return function toDataUrl() {
        return _toDataUrl.apply(this, arguments);
      };
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
                qr_code_min.render({
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

      return function _updateQrCode() {
        return _updateQrCode2.apply(this, arguments);
      };
    }()
  }]);

  _inherits(QrCode, _Vue);

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
  QrCodevue_type_template_id_2785d1ea_render,
  QrCodevue_type_template_id_2785d1ea_staticRenderFns,
  false,
  null,
  null,
  null
  
)

QrCode_component.options.__file = "QrCode.vue"
/* harmony default export */ var components_QrCode = (QrCode_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"46064dad-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/SmallPage.vue?vue&type=template&id=1d450cf2&scoped=true&
var SmallPagevue_type_template_id_1d450cf2_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"small-page nq-card"},[_vm._t("default")],2)}
var SmallPagevue_type_template_id_1d450cf2_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/SmallPage.vue?vue&type=template&id=1d450cf2&scoped=true&

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

SmallPage_component.options.__file = "SmallPage.vue"
/* harmony default export */ var components_SmallPage = (SmallPage_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"46064dad-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Tooltip.vue?vue&type=template&id=1ce3a1bc&scoped=true&
var Tooltipvue_type_template_id_1ce3a1bc_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',{staticClass:"tooltip",class:{active: _vm.tooltipActive}},[_c('a',{class:{
            top: _vm.tooltipPosition === 'top',
            bottom: _vm.tooltipPosition === 'bottom',
        },attrs:{"href":"javascript:void(0);"},on:{"click":_vm.toggleTooltip,"mouseenter":function($event){return _vm.mousOver(true)},"mouseleave":function($event){return _vm.mousOver(false)}}},[_vm._t("icon",[_c('AlertTriangleIcon',{staticClass:"nq-orange"})])],2),_c('div',{ref:"tooltipBox",staticClass:"tooltip-box",class:{
            active: _vm.tooltipActive,
            top: _vm.tooltipPosition === 'top',
            bottom: _vm.tooltipPosition === 'bottom',
        },style:(_vm.styles)},[_vm._t("default")],2)])}
var Tooltipvue_type_template_id_1ce3a1bc_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Tooltip.vue?vue&type=template&id=1ce3a1bc&scoped=true&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.assign.js
var es6_object_assign = __webpack_require__("f751");

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
// import BrowserLogin from '@nimiq/style/src/icons/browser-login.svg';
// import CaretRightSmall from '@nimiq/style/src/icons/caret-right-small.svg';
// import Cashlink from '@nimiq/style/src/icons/cashlink.svg';
// import CashlinkSmall from '@nimiq/style/src/icons/cashlink-small.svg';
// import CashlinkXSmall from '@nimiq/style/src/icons/cashlink-xsmall.svg';

 // import CheckmarkSmall from '@nimiq/style/src/icons/checkmark-small.svg';

 // import Contacts from '@nimiq/style/src/icons/contacts.svg';
// import Copy from '@nimiq/style/src/icons/copy.svg';
// import Download from '@nimiq/style/src/icons/download.svg';
// import FaceNeutral from '@nimiq/style/src/icons/face-neutral.svg';
// import FaceSad from '@nimiq/style/src/icons/face-sad.svg';
// import Fire from '@nimiq/style/src/icons/fire.svg';
// import Gear from '@nimiq/style/src/icons/gear.svg';
// import Hexagon from '@nimiq/style/src/icons/hexagon.svg';
// import InfoCircle from '@nimiq/style/src/icons/info-circle.svg';
// import Keys from '@nimiq/style/src/icons/keys.svg';
// import Ledger from '@nimiq/style/src/icons/ledger.svg';
// import LockLocked from '@nimiq/style/src/icons/lock-locked.svg';
// import LockUnlocked from '@nimiq/style/src/icons/lock-unlocked.svg';
// import Login from '@nimiq/style/src/icons/login.svg';
// import MenuDots from '@nimiq/style/src/icons/menu-dots.svg';
// import PaperEdit from '@nimiq/style/src/icons/paper-edit.svg';
// import PlusCircle from '@nimiq/style/src/icons/plus-circle.svg';


 // import ScanQrCode from '@nimiq/style/src/icons/scan-qr-code.svg';
// import Settings from '@nimiq/style/src/icons/settings.svg';
// import Shredder from '@nimiq/style/src/icons/shredder.svg';
// import Skull from '@nimiq/style/src/icons/skull.svg';
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
// export const BrowserLoginIcon = IconBase(BrowserLogin);
// export const CaretRightSmallIcon = IconBase(CaretRightSmall);
// export const CashlinkIcon = IconBase(Cashlink);
// export const CashlinkSmallIcon = IconBase(CashlinkSmall);
// export const CashlinkXSmallIcon = IconBase(CashlinkXSmall);

var CheckmarkIcon = IconBase(checkmark); // export const CheckmarkSmallIcon = IconBase(CheckmarkSmall);

var CloseIcon = IconBase(icons_close); // export const ContactsIcon = IconBase(Contacts);
// export const CopyIcon = IconBase(Copy);
// export const DownloadIcon = IconBase(Download);
// export const FaceNeutralIcon = IconBase(FaceNeutral);
// export const FaceSadIcon = IconBase(FaceSad);
// export const FireIcon = IconBase(Fire);
// export const GearIcon = IconBase(Gear);
// export const HexagonIcon = IconBase(Hexagon);
// export const InfoCircleIcon = IconBase(InfoCircle);
// export const KeysIcon = IconBase(Keys);
// export const LedgerIcon = IconBase(Ledger);
// export const LockLockedIcon = IconBase(LockLocked);
// export const LockUnlockedIcon = IconBase(LockUnlocked);
// export const LoginIcon = IconBase(Login);
// export const MenuDotsIcon = IconBase(MenuDots);
// export const PaperEditIcon = IconBase(PaperEdit);
// export const PlusCircleIcon = IconBase(PlusCircle);

var QrCodeIcon = IconBase(qr_code);
var QuestionmarkIcon = IconBase(questionmark); // export const ScanQrCodeIcon = IconBase(ScanQrCode);
// export const SettingsIcon = IconBase(Settings);
// export const ShredderIcon = IconBase(Shredder);
// export const SkullIcon = IconBase(Skull);
// export const StopwatchIcon = IconBase(Stopwatch);
// export const TransferIcon = IconBase(Transfer);
// export const UnderPaymentIcon = IconBase(UnderPayment);
// export const ViewOffIcon = IconBase(ViewOff);
// export const ViewIcon = IconBase(View);
// tslint:enable:variable-name
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--13-1!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Tooltip.vue?vue&type=script&lang=ts&











var Tooltipvue_type_script_lang_ts_Tooltip =
/*#__PURE__*/
function (_Vue) {
  function Tooltip() {
    var _this;

    _classCallCheck(this, Tooltip);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Tooltip).apply(this, arguments));
    _this.isInSrollableContainer = false;
    _this.tooltipPosition = 'top'; // 'top' | 'bottom'

    _this.tooltipToggled = false;
    _this.mousedOver = false;
    _this.iconHeight = 0;
    _this.height = 0;
    _this.width = 0;
    _this.left = 0;
    _this.top = 0;
    return _this;
  }

  _createClass(Tooltip, [{
    key: "update",
    value: function update() {
      if (!this.height) {
        // skip if setReference hasn't run yet.
        console.warn('Trying to update tooltip before reference is set.');
        return;
      }

      this.top = this.$el.offsetTop - this.height;

      if (this.reference.$el.scrollTop < this.top) {
        this.tooltipPosition = 'top';
      } else {
        this.tooltipPosition = 'bottom';
        this.top += this.iconHeight;
      }
    }
  }, {
    key: "setReference",
    value: function () {
      var _setReference = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(!this.reference || this.height)) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt("return");

              case 2:
                // Move the element
                this.$refs.tooltipBox.parentElement.removeChild(this.$refs.tooltipBox);
                this.reference.$el.appendChild(this.$refs.tooltipBox); // Compute fixed positions

                this.left = parseInt(window.getComputedStyle(this.reference.$el, null).getPropertyValue('padding-left'), 10);
                this.width = this.reference.$el.offsetWidth - this.left - parseInt(window.getComputedStyle(this.reference.$el, null).getPropertyValue('padding-right'), 10);
                this.iconHeight = this.$el.offsetHeight;
                _context.next = 9;
                return external_vue_property_decorator_["Vue"].nextTick();

              case 9:
                // Height depends on width, soo calculate in vues next tick
                this.height = this.$refs.tooltipBox.offsetHeight; // calculate variable positions.

                this.update(); // In case the reference container is scrollable add a listener

                if (this.reference.$el.scrollHeight !== this.reference.$el.offsetHeight) {
                  this.reference.$el.addEventListener('scroll', this.update.bind(this));
                  this.isInSrollableContainer = true;
                }

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function setReference() {
        return _setReference.apply(this, arguments);
      };
    }()
  }, {
    key: "toggleTooltip",
    value: function () {
      var _toggleTooltip = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2() {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (this.height) {
                  _context2.next = 3;
                  break;
                }

                console.warn('Trying to toggle tooltip before reference is set.');
                return _context2.abrupt("return");

              case 3:
                this.update();
                this.tooltipToggled = !this.tooltipToggled;

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function toggleTooltip() {
        return _toggleTooltip.apply(this, arguments);
      };
    }()
  }, {
    key: "mousOver",
    value: function mousOver(mouseOverTooltip) {
      this.update();
      this.mousedOver = mouseOverTooltip;
    }
  }, {
    key: "styles",
    get: function get() {
      if (this.width && this.top) {
        return {
          height: this.height + 'px',
          top: this.top + 'px',
          left: this.left + 'px',
          width: this.width + 'px'
        };
      }

      if (this.width) {
        return {
          width: this.width + 'px'
        };
      }

      return {};
    }
  }, {
    key: "tooltipActive",
    get: function get() {
      return this.tooltipToggled || this.mousedOver;
    }
  }]);

  _inherits(Tooltip, _Vue);

  return Tooltip;
}(external_vue_property_decorator_["Vue"]);

__decorate([Object(external_vue_property_decorator_["Prop"])(Object)], Tooltipvue_type_script_lang_ts_Tooltip.prototype, "reference", void 0);

__decorate([Object(external_vue_property_decorator_["Watch"])('reference', {
  immediate: true
})], Tooltipvue_type_script_lang_ts_Tooltip.prototype, "setReference", null);

Tooltipvue_type_script_lang_ts_Tooltip = __decorate([Object(external_vue_property_decorator_["Component"])({
  components: {
    AlertTriangleIcon: AlertTriangleIcon
  }
})], Tooltipvue_type_script_lang_ts_Tooltip);
/* harmony default export */ var Tooltipvue_type_script_lang_ts_ = (Tooltipvue_type_script_lang_ts_Tooltip);
// CONCATENATED MODULE: ./src/components/Tooltip.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_Tooltipvue_type_script_lang_ts_ = (Tooltipvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./src/components/Tooltip.vue?vue&type=style&index=0&id=1ce3a1bc&scoped=true&lang=css&
var Tooltipvue_type_style_index_0_id_1ce3a1bc_scoped_true_lang_css_ = __webpack_require__("02d9");

// CONCATENATED MODULE: ./src/components/Tooltip.vue






/* normalize component */

var Tooltip_component = normalizeComponent(
  components_Tooltipvue_type_script_lang_ts_,
  Tooltipvue_type_template_id_1ce3a1bc_scoped_true_render,
  Tooltipvue_type_template_id_1ce3a1bc_scoped_true_staticRenderFns,
  false,
  null,
  "1ce3a1bc",
  null
  
)

Tooltip_component.options.__file = "Tooltip.vue"
/* harmony default export */ var components_Tooltip = (Tooltip_component.exports);
// CONCATENATED MODULE: ./src/main.ts
// Components
// export { default as Account } from './components/Account.vue';
// export { default as AccountDetails } from './components/AccountDetails.vue';
// export { default as AccountList } from './components/AccountList.vue';
// export { default as AccountRing } from './components/AccountRing.vue';
// export { default as AccountSelector } from './components/AccountSelector.vue';
// export { default as Address } from './components/Address.vue';
// export { default as AddressDisplay } from './components/AddressDisplay.vue';
// export { default as AddressInput } from './components/AddressInput.vue';
// export { default as Amount } from './components/Amount.vue';
// export { default as AmountInput } from './components/AmountInput.vue';
// export { default as AmountWithDetails } from './components/AmountWithDetails.vue';
// export { default as AmountWithFee } from './components/AmountWithFee.vue';
// export { default as BottomOverlay } from './components/BottomOverlay.vue';
 // export { default as CloseButton } from './components/CloseButton.vue';
// export { default as Contact } from './components/Contact.vue';
// export { default as ContactList } from './components/ContactList.vue';
// export { default as Copyable } from './components/Copyable.vue';

 // export { default as Carousel } from './components/Carousel.vue';
// export { default as ContactList } from './components/ContactList.vue';

 // export { default as Identicon } from './components/Identicon.vue';
// export { default as LabelInput } from './components/LabelInput.vue';
// export { default as LoadingSpinner } from './components/LoadingSpinner.vue';
// export { default as MigrationWelcome } from './components/MigrationWelcome.vue';
// export { default as NewContact } from './components/NewContact.vue';
// export { default as PageBody } from './components/PageBody.vue';
// export { default as PageFooter } from './components/PageFooter.vue';
// export { default as PageHeader } from './components/PageHeader.vue';
// export { default as PaymentInfoLine } from './components/PaymentInfoLine.vue';

 // export { default as QrScanner } from './components/QrScanner.vue';
// export { default as SelectBar } from './components/SelectBar.vue';


 // export { default as Timer } from './components/Timer.vue';
// export { default as UniversalAmount } from './components/UniversalAmount.vue';
// export { default as Wallet } from './components/Wallet.vue';
// export { default as WalletList } from './components/WalletList.vue';
// export { default as WalletMenu } from './components/WalletMenu.vue';
// Comment out unused icons in the components/Icons.ts file


// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib-no-default.js
/* concated harmony reexport CircleSpinner */__webpack_require__.d(__webpack_exports__, "CircleSpinner", function() { return CircleSpinner; });
/* concated harmony reexport CopyableField */__webpack_require__.d(__webpack_exports__, "CopyableField", function() { return components_CopyableField; });
/* concated harmony reexport FiatAmount */__webpack_require__.d(__webpack_exports__, "FiatAmount", function() { return components_FiatAmount; });
/* concated harmony reexport QrCode */__webpack_require__.d(__webpack_exports__, "QrCode", function() { return components_QrCode; });
/* concated harmony reexport SmallPage */__webpack_require__.d(__webpack_exports__, "SmallPage", function() { return components_SmallPage; });
/* concated harmony reexport Tooltip */__webpack_require__.d(__webpack_exports__, "Tooltip", function() { return components_Tooltip; });
/* concated harmony reexport AlertTriangleIcon */__webpack_require__.d(__webpack_exports__, "AlertTriangleIcon", function() { return AlertTriangleIcon; });
/* concated harmony reexport ArrowLeftSmallIcon */__webpack_require__.d(__webpack_exports__, "ArrowLeftSmallIcon", function() { return ArrowLeftSmallIcon; });
/* concated harmony reexport ArrowRightSmallIcon */__webpack_require__.d(__webpack_exports__, "ArrowRightSmallIcon", function() { return ArrowRightSmallIcon; });
/* concated harmony reexport CheckmarkIcon */__webpack_require__.d(__webpack_exports__, "CheckmarkIcon", function() { return CheckmarkIcon; });
/* concated harmony reexport CloseIcon */__webpack_require__.d(__webpack_exports__, "CloseIcon", function() { return CloseIcon; });
/* concated harmony reexport QrCodeIcon */__webpack_require__.d(__webpack_exports__, "QrCodeIcon", function() { return QrCodeIcon; });
/* concated harmony reexport QuestionmarkIcon */__webpack_require__.d(__webpack_exports__, "QuestionmarkIcon", function() { return QuestionmarkIcon; });




/***/ }),

/***/ "fd04":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CircleSpinner_vue_vue_type_style_index_0_id_355d80ec_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("6a66");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CircleSpinner_vue_vue_type_style_index_0_id_355d80ec_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CircleSpinner_vue_vue_type_style_index_0_id_355d80ec_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CircleSpinner_vue_vue_type_style_index_0_id_355d80ec_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "fdef":
/***/ (function(module, exports) {

module.exports = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ })

/******/ });
});
//# sourceMappingURL=NimiqVueComponents.umd.js.map