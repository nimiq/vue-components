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

/***/ "08b4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountRing_vue_vue_type_style_index_0_id_104332b6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("1176");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountRing_vue_vue_type_style_index_0_id_104332b6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountRing_vue_vue_type_style_index_0_id_104332b6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountRing_vue_vue_type_style_index_0_id_104332b6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "09fc":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "0b38":
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

/***/ "1625":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/iqons.min.72f3b689.svg";

/***/ }),

/***/ "1c4c":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx = __webpack_require__("9b43");
var $export = __webpack_require__("5ca1");
var toObject = __webpack_require__("4bf8");
var call = __webpack_require__("1fa8");
var isArrayIter = __webpack_require__("33a4");
var toLength = __webpack_require__("9def");
var createProperty = __webpack_require__("f1ae");
var getIterFn = __webpack_require__("27ee");

$export($export.S + $export.F * !__webpack_require__("5cc5")(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),

/***/ "1fa8":
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__("cb7c");
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),

/***/ "2115":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Account_vue_vue_type_style_index_0_id_30801c48_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("d26c");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Account_vue_vue_type_style_index_0_id_30801c48_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Account_vue_vue_type_style_index_0_id_30801c48_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Account_vue_vue_type_style_index_0_id_30801c48_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

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

/***/ "23c6":
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__("2d95");
var TAG = __webpack_require__("2b4c")('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ "2621":
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "27ee":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("23c6");
var ITERATOR = __webpack_require__("2b4c")('iterator');
var Iterators = __webpack_require__("84f2");
module.exports = __webpack_require__("8378").getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


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

/***/ "2f21":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__("79e5");

module.exports = function (method, arg) {
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call
    arg ? method.call(null, function () { /* empty */ }, 1) : method.call(null);
  });
};


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

/***/ "33a4":
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__("84f2");
var ITERATOR = __webpack_require__("2b4c")('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),

/***/ "34bf":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountDetails_vue_vue_type_style_index_0_id_61fa1638_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ec1a");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountDetails_vue_vue_type_style_index_0_id_61fa1638_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountDetails_vue_vue_type_style_index_0_id_61fa1638_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountDetails_vue_vue_type_style_index_0_id_61fa1638_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

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

/***/ "4dbf":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LabelInput_vue_vue_type_style_index_0_id_bc1ef6b4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("a4a2");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LabelInput_vue_vue_type_style_index_0_id_bc1ef6b4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LabelInput_vue_vue_type_style_index_0_id_bc1ef6b4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LabelInput_vue_vue_type_style_index_0_id_bc1ef6b4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "52a7":
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "52b3":
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

/***/ "55dd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__("5ca1");
var aFunction = __webpack_require__("d8e8");
var toObject = __webpack_require__("4bf8");
var fails = __webpack_require__("79e5");
var $sort = [].sort;
var test = [1, 2, 3];

$export($export.P + $export.F * (fails(function () {
  // IE8-
  test.sort(undefined);
}) || !fails(function () {
  // V8 bug
  test.sort(null);
  // Old WebKit
}) || !__webpack_require__("2f21")($sort)), 'Array', {
  // 22.1.3.25 Array.prototype.sort(comparefn)
  sort: function sort(comparefn) {
    return comparefn === undefined
      ? $sort.call(toObject(this))
      : $sort.call(toObject(this), aFunction(comparefn));
  }
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

/***/ "5cc5":
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__("2b4c")('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


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

/***/ "64ee":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PageHeader_vue_vue_type_style_index_0_id_284685fa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("52b3");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PageHeader_vue_vue_type_style_index_0_id_284685fa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PageHeader_vue_vue_type_style_index_0_id_284685fa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PageHeader_vue_vue_type_style_index_0_id_284685fa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

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

/***/ "6c68":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PageFooter_vue_vue_type_style_index_0_id_3c6ba3a4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cac6");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PageFooter_vue_vue_type_style_index_0_id_3c6ba3a4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PageFooter_vue_vue_type_style_index_0_id_3c6ba3a4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PageFooter_vue_vue_type_style_index_0_id_3c6ba3a4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

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

/***/ "7c8e":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "7cdf":
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.3 Number.isInteger(number)
var $export = __webpack_require__("5ca1");

$export($export.S, 'Number', { isInteger: __webpack_require__("9c12") });


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

/***/ "8ed3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountSelector_vue_vue_type_style_index_0_id_8796dbbc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("f595");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountSelector_vue_vue_type_style_index_0_id_8796dbbc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountSelector_vue_vue_type_style_index_0_id_8796dbbc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountSelector_vue_vue_type_style_index_0_id_8796dbbc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

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

/***/ "9983":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddressDisplay_vue_vue_type_style_index_0_id_2e20ff27_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ad54");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddressDisplay_vue_vue_type_style_index_0_id_2e20ff27_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddressDisplay_vue_vue_type_style_index_0_id_2e20ff27_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddressDisplay_vue_vue_type_style_index_0_id_2e20ff27_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

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

/***/ "9c12":
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.3 Number.isInteger(number)
var isObject = __webpack_require__("d3f4");
var floor = Math.floor;
module.exports = function isInteger(it) {
  return !isObject(it) && isFinite(it) && floor(it) === it;
};


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

/***/ "a2cf":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Amount_vue_vue_type_style_index_0_id_7b545382_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("db90");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Amount_vue_vue_type_style_index_0_id_7b545382_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Amount_vue_vue_type_style_index_0_id_7b545382_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Amount_vue_vue_type_style_index_0_id_7b545382_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

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

/***/ "a4a2":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "a98a":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountList_vue_vue_type_style_index_0_id_b7227350_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("7c8e");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountList_vue_vue_type_style_index_0_id_b7227350_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountList_vue_vue_type_style_index_0_id_b7227350_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountList_vue_vue_type_style_index_0_id_b7227350_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

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

/***/ "ab37":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PageBody_vue_vue_type_style_index_0_id_0b286594_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ead8");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PageBody_vue_vue_type_style_index_0_id_0b286594_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PageBody_vue_vue_type_style_index_0_id_0b286594_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PageBody_vue_vue_type_style_index_0_id_0b286594_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

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

/***/ "ad54":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "b401":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

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

/***/ "cac6":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

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

/***/ "d26c":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

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

/***/ "db90":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "dccd":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadingSpinner_vue_vue_type_style_index_0_id_01b4df5e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("b401");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadingSpinner_vue_vue_type_style_index_0_id_01b4df5e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadingSpinner_vue_vue_type_style_index_0_id_01b4df5e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadingSpinner_vue_vue_type_style_index_0_id_01b4df5e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "dce1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SmallPage_vue_vue_type_style_index_0_id_1d450cf2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("09fc");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SmallPage_vue_vue_type_style_index_0_id_1d450cf2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SmallPage_vue_vue_type_style_index_0_id_1d450cf2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SmallPage_vue_vue_type_style_index_0_id_1d450cf2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "e11e":
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "ead8":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "ec1a":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "f06d":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PaymentInfoLine_vue_vue_type_style_index_0_id_2e5c4938_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("0b38");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PaymentInfoLine_vue_vue_type_style_index_0_id_2e5c4938_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PaymentInfoLine_vue_vue_type_style_index_0_id_2e5c4938_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PaymentInfoLine_vue_vue_type_style_index_0_id_2e5c4938_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "f1ae":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__("86cc");
var createDesc = __webpack_require__("4630");

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),

/***/ "f595":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

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
  var i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"46064dad-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Account.vue?vue&type=template&id=30801c48&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"account",class:[{ editable: _vm.editable }, _vm.layout]},[_c('div',{staticClass:"identicon-and-label"},[(_vm.showImage)?_c('div',{staticClass:"identicon"},[_c('img',{staticClass:"account-image",attrs:{"src":_vm.image},on:{"error":function($event){_vm.showImage = false}}}),_c('div',{staticClass:"outline"})]):_c('Identicon',{attrs:{"address":_vm.address}}),(!_vm.editable)?_c('div',{staticClass:"label",class:{ 'address-font': _vm._isLabelAddress }},[_vm._v(_vm._s(_vm.label))]):_c('div',{staticClass:"label editable",class:{ 'address-font': _vm._isLabelAddress }},[_c('LabelInput',{ref:"label",attrs:{"maxBytes":63,"value":_vm.label,"placeholder":_vm.placeholder},on:{"changed":_vm.changed}})],1),(_vm.layout === 'column' && _vm.walletLabel)?_c('div',{staticClass:"nq-label wallet-label"},[_vm._v(_vm._s(_vm.walletLabel))]):_vm._e()],1),(_vm.balance || _vm.balance === 0)?_c('Amount',{staticClass:"balance",attrs:{"amount":_vm.balance,"decimals":_vm.decimals}}):_vm._e()],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Account.vue?vue&type=template&id=30801c48&scoped=true&

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

// EXTERNAL MODULE: external "vue-property-decorator"
var external_vue_property_decorator_ = __webpack_require__("01a6");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"46064dad-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Identicon.vue?vue&type=template&id=01e7cdc5&scoped=true&
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
}(external_vue_property_decorator_["Vue"]);

__decorate([Object(external_vue_property_decorator_["Prop"])(String)], Identiconvue_type_script_lang_ts_Identicon.prototype, "address", void 0);

__decorate([Object(external_vue_property_decorator_["Watch"])('address', {
  immediate: true
})], Identiconvue_type_script_lang_ts_Identicon.prototype, "computeDataUrl", null);

Identiconvue_type_script_lang_ts_Identicon = Identicon_1 = __decorate([external_vue_property_decorator_["Component"]], Identiconvue_type_script_lang_ts_Identicon);
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
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"46064dad-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Amount.vue?vue&type=template&id=7b545382&scoped=true&
var Amountvue_type_template_id_7b545382_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',{staticClass:"amount",class:{ approx: _vm.showApprox && _vm.isApprox }},[_vm._v("\n    "+_vm._s(_vm.formattedAmount)+"\n    "),_c('span',{staticClass:"nim"},[_vm._v("NIM")])])}
var Amountvue_type_template_id_7b545382_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Amount.vue?vue&type=template&id=7b545382&scoped=true&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.number.is-integer.js
var es6_number_is_integer = __webpack_require__("7cdf");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.number.parse-float.js
var es6_number_parse_float = __webpack_require__("5df2");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.to-string.js
var es6_regexp_to_string = __webpack_require__("6b54");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--13-1!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Amount.vue?vue&type=script&lang=ts&











var Amount_1;


var Amountvue_type_script_lang_ts_Amount = Amount_1 =
/*#__PURE__*/
function (_Vue) {
  function Amount() {
    _classCallCheck(this, Amount);

    return _possibleConstructorReturn(this, _getPrototypeOf(Amount).apply(this, arguments));
  }

  _createClass(Amount, [{
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

      var roundingFactor = Math.pow(10, maxDecimals);
      var value = Math.floor(this.amount / 1e5 * roundingFactor) / roundingFactor;
      var result = parseFloat(value.toFixed(minDecimals)) === value ? value.toFixed(minDecimals) : value.toString();
      if (Math.abs(value) < 10000) return result; // add thin spaces (U+202F) every 3 digits. Stop at the decimal separator if there is one

      var regexp = minDecimals > 0 ? /(\d)(?=(\d{3})+\.)/g : /(\d)(?=(\d{3})+$)/g;
      return result.replace(regexp, "$1\u202F");
    }
  }, {
    key: "isApprox",
    get: function get() {
      var roundedNum = Number.parseFloat((this.amount / 1e5).toFixed(this.decimals));
      return roundedNum.toFixed(5) !== (this.amount / 1e5).toFixed(5);
    }
  }], [{
    key: "_validateDecimals",
    value: function _validateDecimals(decimals) {
      return decimals >= 0 && decimals <= 5 && Number.isInteger(decimals);
    }
  }]);

  _inherits(Amount, _Vue);

  return Amount;
}(external_vue_property_decorator_["Vue"]);

__decorate([Object(external_vue_property_decorator_["Prop"])(Number)], Amountvue_type_script_lang_ts_Amount.prototype, "amount", void 0);

__decorate([Object(external_vue_property_decorator_["Prop"])({
  type: Number,
  validator: Amount_1._validateDecimals
})], Amountvue_type_script_lang_ts_Amount.prototype, "decimals", void 0);

__decorate([Object(external_vue_property_decorator_["Prop"])({
  type: Number,
  default: 2,
  validator: Amount_1._validateDecimals
})], Amountvue_type_script_lang_ts_Amount.prototype, "minDecimals", void 0);

__decorate([Object(external_vue_property_decorator_["Prop"])({
  type: Number,
  default: 5,
  validator: Amount_1._validateDecimals
})], Amountvue_type_script_lang_ts_Amount.prototype, "maxDecimals", void 0);

__decorate([Object(external_vue_property_decorator_["Prop"])({
  type: Boolean,
  default: false
})], Amountvue_type_script_lang_ts_Amount.prototype, "showApprox", void 0);

Amountvue_type_script_lang_ts_Amount = Amount_1 = __decorate([external_vue_property_decorator_["Component"]], Amountvue_type_script_lang_ts_Amount);
/* harmony default export */ var Amountvue_type_script_lang_ts_ = (Amountvue_type_script_lang_ts_Amount);
// CONCATENATED MODULE: ./src/components/Amount.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_Amountvue_type_script_lang_ts_ = (Amountvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./src/components/Amount.vue?vue&type=style&index=0&id=7b545382&scoped=true&lang=css&
var Amountvue_type_style_index_0_id_7b545382_scoped_true_lang_css_ = __webpack_require__("a2cf");

// CONCATENATED MODULE: ./src/components/Amount.vue






/* normalize component */

var Amount_component = normalizeComponent(
  components_Amountvue_type_script_lang_ts_,
  Amountvue_type_template_id_7b545382_scoped_true_render,
  Amountvue_type_template_id_7b545382_scoped_true_staticRenderFns,
  false,
  null,
  "7b545382",
  null
  
)

Amount_component.options.__file = "Amount.vue"
/* harmony default export */ var components_Amount = (Amount_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"46064dad-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/LabelInput.vue?vue&type=template&id=bc1ef6b4&scoped=true&
var LabelInputvue_type_template_id_bc1ef6b4_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('form',{staticClass:"label-input",on:{"submit":function($event){$event.preventDefault();return _vm.onBlur($event)}}},[_c('span',{ref:"widthPlaceholder",staticClass:"width-finder width-placeholder"},[_vm._v(_vm._s(_vm.placeholder))]),_c('span',{ref:"widthValue",staticClass:"width-finder width-value"},[_vm._v(_vm._s(_vm.liveValue))]),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.liveValue),expression:"liveValue"}],ref:"input",staticClass:"nq-input",style:({width: ((this.width) + "px")}),attrs:{"type":"text","placeholder":_vm.placeholder},domProps:{"value":(_vm.liveValue)},on:{"input":[function($event){if($event.target.composing){ return; }_vm.liveValue=$event.target.value},_vm.onInput],"blur":_vm.onBlur}})])}
var LabelInputvue_type_template_id_bc1ef6b4_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/LabelInput.vue?vue&type=template&id=bc1ef6b4&scoped=true&

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
// CONCATENATED MODULE: ./node_modules/@nimiq/utils/dist/module/Utf8Tools.js
/* tslint:disable:no-bitwise one-line triple-equals */
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
        // TODO: Use native implementations if/when available
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
        // TODO: Use native implementations if/when available
        const out = [];
        let pos = 0;
        let c = 0;
        while (pos < bytes.length) {
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
        }
        return out.join('');
    }
    static isValidUtf8(bytes) {
        let i = 0;
        while (i < bytes.length) {
            const first = bytes[i]; // The byte
            if (first <= 0x7F)
                ++i; // Is valid single-byte (ASCII)
            else if (first >= 0xC2 && first <= 0xDF) { // Possible two-byte
                const second = bytes[++i];
                if (second >= 0x80 && second <= 0xBF)
                    ++i; // Is valid two-byte
                else
                    break;
            }
            else if (first === 0xE0) { // Possible three-byte
                const second = bytes[++i];
                const third = bytes[++i];
                if (second >= 0xA0 && second <= 0xBF
                    && third >= 0x80 && third <= 0xBF)
                    ++i; // Is valid three-byte
                else
                    break;
            }
            else if (first >= 0xE1 && first <= 0xEC) { // Possible three-byte
                const second = bytes[++i];
                const third = bytes[++i];
                if (second >= 0x80 && second <= 0xBF
                    && third >= 0x80 && third <= 0xBF)
                    ++i; // Is valid three-byte
                else
                    break;
            }
            else if (first === 0xED) { // Possible three-byte
                const second = bytes[++i];
                const third = bytes[++i];
                if (second >= 0x80 && second <= 0x9F
                    && third >= 0x80 && third <= 0xBF)
                    ++i; // Is valid three-byte
                else
                    break;
            }
            else if (first >= 0xEE && first <= 0xEF) { // Possible three-byte
                const second = bytes[++i];
                const third = bytes[++i];
                if (second >= 0x80 && second <= 0xBF
                    && third >= 0x80 && third <= 0xBF)
                    ++i; // Is valid three-byte
                else
                    break;
            }
            else if (first === 0xF0) { // Possible four-byte
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
            else if (first >= 0xF1 && first <= 0xF3) { // Possible four-byte
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
            else if (first === 0xF4) { // Possible four-byte
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
        }
        // If the whole array was walked successfully, then the last check also increased the counter
        // and the index i is equal to the length of the array.
        // If the while loop was broken early, i is smaller and the array is not valid UTF-8.
        return i === bytes.length;
    }
}


//# sourceMappingURL=Utf8Tools.js.map

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--13-1!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/LabelInput.vue?vue&type=script&lang=ts&












var LabelInputvue_type_script_lang_ts_LabelInput =
/*#__PURE__*/
function (_Vue) {
  function LabelInput() {
    var _this;

    _classCallCheck(this, LabelInput);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(LabelInput).apply(this, arguments));
    _this.liveValue = _this.value;
    _this.lastValue = _this.value;
    _this.lastEmittedValue = _this.value;
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

      return function updateWidth() {
        return _updateWidth.apply(this, arguments);
      };
    }()
  }]);

  _inherits(LabelInput, _Vue);

  return LabelInput;
}(external_vue_property_decorator_["Vue"]);

__decorate([Object(external_vue_property_decorator_["Prop"])(Number)], LabelInputvue_type_script_lang_ts_LabelInput.prototype, "maxBytes", void 0);

__decorate([Object(external_vue_property_decorator_["Prop"])({
  type: String,
  default: ''
})], LabelInputvue_type_script_lang_ts_LabelInput.prototype, "value", void 0);

__decorate([Object(external_vue_property_decorator_["Prop"])({
  type: String,
  default: 'Name your address'
})], LabelInputvue_type_script_lang_ts_LabelInput.prototype, "placeholder", void 0);

__decorate([Object(external_vue_property_decorator_["Watch"])('liveValue', {
  immediate: true
})], LabelInputvue_type_script_lang_ts_LabelInput.prototype, "updateWidth", null);

LabelInputvue_type_script_lang_ts_LabelInput = __decorate([external_vue_property_decorator_["Component"]], LabelInputvue_type_script_lang_ts_LabelInput);
/* harmony default export */ var LabelInputvue_type_script_lang_ts_ = (LabelInputvue_type_script_lang_ts_LabelInput);
// CONCATENATED MODULE: ./src/components/LabelInput.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_LabelInputvue_type_script_lang_ts_ = (LabelInputvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./src/components/LabelInput.vue?vue&type=style&index=0&id=bc1ef6b4&scoped=true&lang=css&
var LabelInputvue_type_style_index_0_id_bc1ef6b4_scoped_true_lang_css_ = __webpack_require__("4dbf");

// CONCATENATED MODULE: ./src/components/LabelInput.vue






/* normalize component */

var LabelInput_component = normalizeComponent(
  components_LabelInputvue_type_script_lang_ts_,
  LabelInputvue_type_template_id_bc1ef6b4_scoped_true_render,
  LabelInputvue_type_template_id_bc1ef6b4_scoped_true_staticRenderFns,
  false,
  null,
  "bc1ef6b4",
  null
  
)

LabelInput_component.options.__file = "LabelInput.vue"
/* harmony default export */ var components_LabelInput = (LabelInput_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--13-1!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Account.vue?vue&type=script&lang=ts&













var Accountvue_type_script_lang_ts_Account =
/*#__PURE__*/
function (_Vue) {
  function Account() {
    var _this;

    _classCallCheck(this, Account);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Account).apply(this, arguments));
    _this.showImage = !!_this.image;
    return _this;
  }

  _createClass(Account, [{
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
    key: "onImageChange",
    value: function onImageChange() {
      this.showImage = !!this.image; // load clip path if not done so yet

      if (!this.showImage || document.getElementById('nimiq-hexagon-clip')) return;
      /* tslint:disable max-line-length */

      document.body.insertAdjacentHTML('beforeend', "\n            <svg width=\"0\" height=\"0\" viewBox=\"0 0 146 146\">\n                <defs>\n                    <clipPath id=\"nimiq-hexagon-clip\" clipPathUnits=\"objectBoundingBox\">\n                        <path d=\"M.302.055A.106.106 0 0 0 .21.108l-.196.34a.106.106 0 0 0 0 .105l.196.34a.106.106 0 0 0 .092.052h.392c.038 0 .073-.02.092-.053l.196-.34a.106.106 0 0 0 0-.105L.786.107A.106.106 0 0 0 .694.056z\">\n                        </path>\n                    </clipPath>\n                </defs>\n            </svg>\n        ");
      /* tslint:enable max-line-length */
      // avoid a line-height being rendered for default display: inline. Applied via code for CSP compatibility.

      document.body.lastElementChild.style.display = 'block';
    }
  }, {
    key: "_isLabelAddress",
    get: function get() {
      return ValidationUtils.isValidAddress(this.label);
    }
  }]);

  _inherits(Account, _Vue);

  return Account;
}(external_vue_property_decorator_["Vue"]);

__decorate([Object(external_vue_property_decorator_["Prop"])(String)], Accountvue_type_script_lang_ts_Account.prototype, "address", void 0);

__decorate([Object(external_vue_property_decorator_["Prop"])(String)], Accountvue_type_script_lang_ts_Account.prototype, "image", void 0);

__decorate([Object(external_vue_property_decorator_["Prop"])(String)], Accountvue_type_script_lang_ts_Account.prototype, "label", void 0);

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
})], Accountvue_type_script_lang_ts_Account.prototype, "onImageChange", null);

Accountvue_type_script_lang_ts_Account = __decorate([Object(external_vue_property_decorator_["Component"])({
  components: {
    Amount: components_Amount,
    Identicon: components_Identicon,
    LabelInput: components_LabelInput
  }
})], Accountvue_type_script_lang_ts_Account);
/* harmony default export */ var Accountvue_type_script_lang_ts_ = (Accountvue_type_script_lang_ts_Account);
// CONCATENATED MODULE: ./src/components/Account.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_Accountvue_type_script_lang_ts_ = (Accountvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./src/components/Account.vue?vue&type=style&index=0&id=30801c48&scoped=true&lang=css&
var Accountvue_type_style_index_0_id_30801c48_scoped_true_lang_css_ = __webpack_require__("2115");

// CONCATENATED MODULE: ./src/components/Account.vue






/* normalize component */

var Account_component = normalizeComponent(
  components_Accountvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  "30801c48",
  null
  
)

Account_component.options.__file = "Account.vue"
/* harmony default export */ var components_Account = (Account_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"46064dad-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/AccountDetails.vue?vue&type=template&id=61fa1638&scoped=true&
var AccountDetailsvue_type_template_id_61fa1638_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"account-details"},[_c('a',{staticClass:"nq-button-s cancel-circle",attrs:{"href":"javascript:void(0)"},on:{"click":_vm.close}},[_c('CloseIcon')],1),_c('Account',{attrs:{"layout":"column","address":_vm.address,"image":_vm.image,"label":_vm.label !== _vm.address ? _vm.label : '',"walletLabel":_vm.walletLabel,"balance":_vm.balance}}),_c('AddressDisplay',{attrs:{"address":_vm.address}})],1)}
var AccountDetailsvue_type_template_id_61fa1638_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/AccountDetails.vue?vue&type=template&id=61fa1638&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"46064dad-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/AddressDisplay.vue?vue&type=template&id=2e20ff27&scoped=true&
var AddressDisplayvue_type_template_id_2e20ff27_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"address-display"},_vm._l((_vm.chunks),function(chunk){return _c('span',{key:chunk,staticClass:"chunk"},[_vm._v(_vm._s(chunk)),_c('span',{staticClass:"space"},[_vm._v(" ")])])}),0)}
var AddressDisplayvue_type_template_id_2e20ff27_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/AddressDisplay.vue?vue&type=template&id=2e20ff27&scoped=true&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.fill.js
var es6_array_fill = __webpack_require__("6c7b");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--13-1!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/AddressDisplay.vue?vue&type=script&lang=ts&











var AddressDisplayvue_type_script_lang_ts_AddressDisplay =
/*#__PURE__*/
function (_Vue) {
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

  _inherits(AddressDisplay, _Vue);

  return AddressDisplay;
}(external_vue_property_decorator_["Vue"]);

__decorate([Object(external_vue_property_decorator_["Prop"])(String)], AddressDisplayvue_type_script_lang_ts_AddressDisplay.prototype, "address", void 0);

AddressDisplayvue_type_script_lang_ts_AddressDisplay = __decorate([external_vue_property_decorator_["Component"]], AddressDisplayvue_type_script_lang_ts_AddressDisplay);
/* harmony default export */ var AddressDisplayvue_type_script_lang_ts_ = (AddressDisplayvue_type_script_lang_ts_AddressDisplay);
// CONCATENATED MODULE: ./src/components/AddressDisplay.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_AddressDisplayvue_type_script_lang_ts_ = (AddressDisplayvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./src/components/AddressDisplay.vue?vue&type=style&index=0&id=2e20ff27&scoped=true&lang=css&
var AddressDisplayvue_type_style_index_0_id_2e20ff27_scoped_true_lang_css_ = __webpack_require__("9983");

// CONCATENATED MODULE: ./src/components/AddressDisplay.vue






/* normalize component */

var AddressDisplay_component = normalizeComponent(
  components_AddressDisplayvue_type_script_lang_ts_,
  AddressDisplayvue_type_template_id_2e20ff27_scoped_true_render,
  AddressDisplayvue_type_template_id_2e20ff27_scoped_true_staticRenderFns,
  false,
  null,
  "2e20ff27",
  null
  
)

AddressDisplay_component.options.__file = "AddressDisplay.vue"
/* harmony default export */ var components_AddressDisplay = (AddressDisplay_component.exports);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.assign.js
var es6_object_assign = __webpack_require__("f751");

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
 * Comment out any unused icons here
 */
// tslint:disable:variable-name
// export const AlertTriangleIcon = IconBase(AlertTriangle);

var ArrowLeftSmallIcon = IconBase(arrow_left_small);
var ArrowLeftIcon = IconBase(arrow_left);
var ArrowRightSmallIcon = IconBase(arrow_right_small);
var ArrowRightIcon = IconBase(arrow_right); // export const BrowserLoginIcon = IconBase(BrowserLogin);

var CaretRightSmallIcon = IconBase(caret_right_small);
var CheckmarkIcon = IconBase(checkmark);
var CloseIcon = IconBase(icons_close); // export const ContactsIcon = IconBase(Contacts);
// export const CopyIcon = IconBase(Copy);
// export const DownloadIcon = IconBase(Download);

var FaceNeutralIcon = IconBase(face_neutral);
var FaceSadIcon = IconBase(face_sad); // export const FireIcon = IconBase(Fire);
// export const GearIcon = IconBase(Gear);

var HexagonIcon = IconBase(hexagon);
var InfoCircleIcon = IconBase(info_circle); // export const KeysIcon = IconBase(Keys);

var LedgerIcon = IconBase(ledger); // export const LockLockedIcon = IconBase(LockLocked);
// export const LockUnlockedIcon = IconBase(LockUnlocked);

var LoginIcon = IconBase(login); // export const MenuDotsIcon = IconBase(MenuDots);
// export const PaperEditIcon = IconBase(PaperEdit);

var PlusCircleIcon = IconBase(plus_circle); // export const QrCodeIcon = IconBase(QrCode);
// export const QuestionmarkIcon = IconBase(Questionmark);

var ScanQrCodeIcon = IconBase(scan_qr_code); // export const SettingsIcon = IconBase(Settings);
// export const ShredderIcon = IconBase(Shredder);
// export const SkullIcon = IconBase(Skull);

var TransferIcon = IconBase(transfer); // export const ViewOffIcon = IconBase(ViewOff);
// export const ViewIcon = IconBase(View);
// tslint:enable:variable-name
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--13-1!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/AccountDetails.vue?vue&type=script&lang=ts&













var AccountDetailsvue_type_script_lang_ts_AccountDetails =
/*#__PURE__*/
function (_Vue) {
  function AccountDetails() {
    _classCallCheck(this, AccountDetails);

    return _possibleConstructorReturn(this, _getPrototypeOf(AccountDetails).apply(this, arguments));
  }

  _createClass(AccountDetails, [{
    key: "close",
    value: function close() {}
  }]);

  _inherits(AccountDetails, _Vue);

  return AccountDetails;
}(external_vue_property_decorator_["Vue"]);

__decorate([Object(external_vue_property_decorator_["Prop"])(String)], AccountDetailsvue_type_script_lang_ts_AccountDetails.prototype, "address", void 0);

__decorate([Object(external_vue_property_decorator_["Prop"])(String)], AccountDetailsvue_type_script_lang_ts_AccountDetails.prototype, "image", void 0);

__decorate([Object(external_vue_property_decorator_["Prop"])(String)], AccountDetailsvue_type_script_lang_ts_AccountDetails.prototype, "label", void 0);

__decorate([Object(external_vue_property_decorator_["Prop"])(String)], AccountDetailsvue_type_script_lang_ts_AccountDetails.prototype, "walletLabel", void 0);

__decorate([Object(external_vue_property_decorator_["Prop"])(Number)], AccountDetailsvue_type_script_lang_ts_AccountDetails.prototype, "balance", void 0);

__decorate([Object(external_vue_property_decorator_["Emit"])()], AccountDetailsvue_type_script_lang_ts_AccountDetails.prototype, "close", null);

AccountDetailsvue_type_script_lang_ts_AccountDetails = __decorate([Object(external_vue_property_decorator_["Component"])({
  components: {
    Account: components_Account,
    Amount: components_Amount,
    AddressDisplay: components_AddressDisplay,
    CloseIcon: CloseIcon
  }
})], AccountDetailsvue_type_script_lang_ts_AccountDetails);
/* harmony default export */ var AccountDetailsvue_type_script_lang_ts_ = (AccountDetailsvue_type_script_lang_ts_AccountDetails);
// CONCATENATED MODULE: ./src/components/AccountDetails.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_AccountDetailsvue_type_script_lang_ts_ = (AccountDetailsvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./src/components/AccountDetails.vue?vue&type=style&index=0&id=61fa1638&scoped=true&lang=css&
var AccountDetailsvue_type_style_index_0_id_61fa1638_scoped_true_lang_css_ = __webpack_require__("34bf");

// CONCATENATED MODULE: ./src/components/AccountDetails.vue






/* normalize component */

var AccountDetails_component = normalizeComponent(
  components_AccountDetailsvue_type_script_lang_ts_,
  AccountDetailsvue_type_template_id_61fa1638_scoped_true_render,
  AccountDetailsvue_type_template_id_61fa1638_scoped_true_staticRenderFns,
  false,
  null,
  "61fa1638",
  null
  
)

AccountDetails_component.options.__file = "AccountDetails.vue"
/* harmony default export */ var components_AccountDetails = (AccountDetails_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"46064dad-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/AccountList.vue?vue&type=template&id=b7227350&scoped=true&
var AccountListvue_type_template_id_b7227350_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"account-list"},_vm._l((_vm.accounts),function(account){return _c(_vm.accountContainerTag,{key:account.userFriendlyAddress,tag:"component",staticClass:"account-entry",class:{
            'disabled': _vm.disabled || _vm.disableContracts && _vm._isContract(account) || _vm.minBalance && account.balance < _vm.minBalance,
            'disabled-contract': _vm.disableContracts && _vm._isContract(account),
            'good-balance': _vm.minBalance && (account.balance || 0) >= _vm.minBalance,
            'bad-balance': _vm.minBalance && (account.balance || 0) < _vm.minBalance,
            'highlight-disabled-address': _vm.highlightedDisabledAddress === account.userFriendlyAddress,
        },attrs:{"href":"javascript:void(0)"},on:{"click":function($event){return _vm.accountSelected(account)}}},[_c('Account',{ref:account.userFriendlyAddress,refInFor:true,attrs:{"address":account.userFriendlyAddress,"label":account.label,"placeholder":account.defaultLabel,"balance":account.balance,"decimals":_vm.decimals,"editable":_vm.editable && !_vm.disabled},on:{"changed":function($event){return _vm.accountChanged(account.userFriendlyAddress, $event)}}}),_c('CaretRightSmallIcon')],1)}),1)}
var AccountListvue_type_template_id_b7227350_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/AccountList.vue?vue&type=template&id=b7227350&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--13-1!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/AccountList.vue?vue&type=script&lang=ts&











var AccountListvue_type_script_lang_ts_AccountList =
/*#__PURE__*/
function (_Vue) {
  function AccountList() {
    var _this;

    _classCallCheck(this, AccountList);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(AccountList).apply(this, arguments));
    _this.highlightedDisabledAddress = null;
    _this.highlightedDisabledAddressTimeout = null;
    return _this;
  }

  _createClass(AccountList, [{
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

      if (this.disabled) return;
      var hasEnoughBalance = !this.minBalance || account.balance >= this.minBalance;

      if (this.highlightedDisabledAddressTimeout) {
        window.clearTimeout(this.highlightedDisabledAddressTimeout);
        this.highlightedDisabledAddressTimeout = null;
      }

      var isDisabledContract = this.disableContracts && this._isContract(account);

      if (isDisabledContract || this.minBalance && account.balance < this.minBalance) {
        var waitTime = isDisabledContract ? 1500 : 300;
        this.highlightedDisabledAddress = account.userFriendlyAddress;
        this.highlightedDisabledAddressTimeout = window.setTimeout(function () {
          return _this2.highlightedDisabledAddress = null;
        }, waitTime);
      } else {
        this.$emit('account-selected', account.walletId || this.walletId, account.userFriendlyAddress);
      }
    }
  }, {
    key: "accountChanged",
    value: function accountChanged(address, label) {}
  }, {
    key: "_isContract",
    value: function _isContract(account) {
      return !('path' in account) || !account.path;
    }
  }, {
    key: "accountContainerTag",
    get: function get() {
      return !this.editable || this.disabled ? 'a' : 'div';
    }
  }]);

  _inherits(AccountList, _Vue);

  return AccountList;
}(external_vue_property_decorator_["Vue"]);

__decorate([Object(external_vue_property_decorator_["Prop"])(Array)], AccountListvue_type_script_lang_ts_AccountList.prototype, "accounts", void 0);

__decorate([Object(external_vue_property_decorator_["Prop"])(String)], AccountListvue_type_script_lang_ts_AccountList.prototype, "walletId", void 0);

__decorate([Object(external_vue_property_decorator_["Prop"])(Boolean)], AccountListvue_type_script_lang_ts_AccountList.prototype, "editable", void 0);

__decorate([Object(external_vue_property_decorator_["Prop"])(Number)], AccountListvue_type_script_lang_ts_AccountList.prototype, "decimals", void 0);

__decorate([Object(external_vue_property_decorator_["Prop"])(Number)], AccountListvue_type_script_lang_ts_AccountList.prototype, "minBalance", void 0);

__decorate([Object(external_vue_property_decorator_["Prop"])(Boolean)], AccountListvue_type_script_lang_ts_AccountList.prototype, "disableContracts", void 0);

__decorate([Object(external_vue_property_decorator_["Prop"])(Boolean)], AccountListvue_type_script_lang_ts_AccountList.prototype, "disabled", void 0);

__decorate([Object(external_vue_property_decorator_["Emit"])()], AccountListvue_type_script_lang_ts_AccountList.prototype, "accountChanged", null);

AccountListvue_type_script_lang_ts_AccountList = __decorate([Object(external_vue_property_decorator_["Component"])({
  components: {
    Account: components_Account,
    CaretRightSmallIcon: CaretRightSmallIcon
  }
})], AccountListvue_type_script_lang_ts_AccountList);
/* harmony default export */ var AccountListvue_type_script_lang_ts_ = (AccountListvue_type_script_lang_ts_AccountList);
// CONCATENATED MODULE: ./src/components/AccountList.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_AccountListvue_type_script_lang_ts_ = (AccountListvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./src/components/AccountList.vue?vue&type=style&index=0&id=b7227350&scoped=true&lang=css&
var AccountListvue_type_style_index_0_id_b7227350_scoped_true_lang_css_ = __webpack_require__("a98a");

// CONCATENATED MODULE: ./src/components/AccountList.vue






/* normalize component */

var AccountList_component = normalizeComponent(
  components_AccountListvue_type_script_lang_ts_,
  AccountListvue_type_template_id_b7227350_scoped_true_render,
  AccountListvue_type_template_id_b7227350_scoped_true_staticRenderFns,
  false,
  null,
  "b7227350",
  null
  
)

AccountList_component.options.__file = "AccountList.vue"
/* harmony default export */ var components_AccountList = (AccountList_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"46064dad-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/AccountRing.vue?vue&type=template&id=104332b6&scoped=true&
var AccountRingvue_type_template_id_104332b6_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"account-ring"},_vm._l((6),function(n){return _c('div',{key:n,staticClass:"account"},[(n <= _vm.addresses.length)?_c('Identicon',{class:{ 'pop-in': _vm.animate },attrs:{"address":_vm.addresses[n - 1]}}):_c('HexagonIcon')],1)}),0)}
var AccountRingvue_type_template_id_104332b6_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/AccountRing.vue?vue&type=template&id=104332b6&scoped=true&

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
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"46064dad-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/AccountSelector.vue?vue&type=template&id=8796dbbc&scoped=true&
var AccountSelectorvue_type_template_id_8796dbbc_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"account-selector"},[_c('div',{staticClass:"header"}),_c('div',{staticClass:"container",class:{'extra-spacing': _vm.wallets.length === 1}},_vm._l((_vm.sortedWallets),function(wallet){return _c('div',{key:wallet.id,class:{
                'disabled-account': _vm._isAccountDisabled(wallet),
                'highlighted-disabled-account': _vm.highlightedDisabledAccount === wallet,
            }},[(_vm.wallets.length > 1 || _vm._isAccountDisabled(wallet))?_c('div',{staticClass:"wallet-label"},[_c('div',[_c('span',{staticClass:"nq-label"},[_vm._v(_vm._s(wallet.label))]),(_vm._isAccountDisabled(wallet))?_c('div',{staticClass:"warning-disabled-account nq-label"},[_vm._v("\n                        (Incompatible with this operation)\n                    ")]):_vm._e()])]):_vm._e(),_c('AccountList',{attrs:{"accounts":_vm._f("sortAccountsAndContracts")(_vm._f("listAccountsAndContracts")(wallet),_vm.minBalance, _vm.disableContracts),"walletId":wallet.id,"minBalance":_vm.minBalance,"decimals":_vm.decimals,"disableContracts":_vm.disableContracts,"disabled":_vm._isAccountDisabled(wallet)},on:{"account-selected":_vm.accountSelected},nativeOn:{"click":function($event){return _vm._accountClicked(wallet)}}})],1)}),0),_c('div',{staticClass:"footer"},[(_vm.allowLogin)?_c('button',{staticClass:"nq-button-s",on:{"click":_vm.login}},[_vm._v("Login to another Account")]):_vm._e()])])}
var AccountSelectorvue_type_template_id_8796dbbc_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/AccountSelector.vue?vue&type=template&id=8796dbbc&scoped=true&

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/builtin/es6/arrayWithoutHoles.js
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/builtin/es6/iterableToArray.js
function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/builtin/es6/nonIterableSpread.js
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/builtin/es6/toConsumableArray.js



function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}
// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom.iterable.js
var web_dom_iterable = __webpack_require__("ac6a");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.iterator.js
var es6_array_iterator = __webpack_require__("cadf");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.from.js
var es6_array_from = __webpack_require__("1c4c");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.sort.js
var es6_array_sort = __webpack_require__("55dd");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--13-1!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/AccountSelector.vue?vue&type=script&lang=ts&















var AccountSelectorvue_type_script_lang_ts_AccountSelector =
/*#__PURE__*/
function (_Vue) {
  function AccountSelector() {
    var _this;

    _classCallCheck(this, AccountSelector);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(AccountSelector).apply(this, arguments));
    _this.highlightedDisabledAccount = null;
    _this.highlightedDisabledAccountTimeout = -1;
    return _this;
  }

  _createClass(AccountSelector, [{
    key: "accountSelected",
    value: function accountSelected(walletId, address) {}
  }, {
    key: "login",
    value: function login() {}
  }, {
    key: "_isAccountDisabled",
    value: function _isAccountDisabled(account) {
      return this.disableLegacyAccounts && account.type === 1
      /* LEGACY */
      || this.disableBip39Accounts && account.type === 2
      /* BIP39 */
      || this.disableLedgerAccounts && account.type === 3
      /* LEDGER */
      ;
    }
  }, {
    key: "_accountClicked",
    value: function _accountClicked(account) {
      var _this2 = this;

      if (!this._isAccountDisabled(account)) return;
      window.clearTimeout(this.highlightedDisabledAccountTimeout);
      this.highlightedDisabledAccount = account;
      this.highlightedDisabledAccountTimeout = window.setTimeout(function () {
        return _this2.highlightedDisabledAccount = null;
      }, 300);
    }
  }, {
    key: "sortedWallets",
    get: function get() {
      var _this3 = this;

      return this.wallets.slice(0).sort(function (a, b) {
        var aDisabled = _this3._isAccountDisabled(a);

        var bDisabled = _this3._isAccountDisabled(b);

        if (aDisabled && !bDisabled) return 1;
        if (!aDisabled && bDisabled) return -1;
        if (!_this3.minBalance) return 0; // don't sort by balance if no minBalance required

        var hasAddressWithSufficientBalance = function hasAddressWithSufficientBalance(accounts, contracts) {
          return Array.from(accounts.values()).some(function (account) {
            return account.balance >= _this3.minBalance;
          }) || !_this3.disableContracts && contracts.some(function (contract) {
            return contract.balance >= _this3.minBalance;
          });
        };

        var aHasAddressWithSufficientBalance = hasAddressWithSufficientBalance(a.accounts, a.contracts);
        var bHasAddressWithSufficientBalance = hasAddressWithSufficientBalance(b.accounts, b.contracts);
        if (!aHasAddressWithSufficientBalance && bHasAddressWithSufficientBalance) return 1;
        if (aHasAddressWithSufficientBalance && !bHasAddressWithSufficientBalance) return -1;
        return 0;
      });
    }
  }]);

  _inherits(AccountSelector, _Vue);

  return AccountSelector;
}(external_vue_property_decorator_["Vue"]);

__decorate([Object(external_vue_property_decorator_["Prop"])(Array)], AccountSelectorvue_type_script_lang_ts_AccountSelector.prototype, "wallets", void 0);

__decorate([Object(external_vue_property_decorator_["Prop"])(Number)], AccountSelectorvue_type_script_lang_ts_AccountSelector.prototype, "decimals", void 0);

__decorate([Object(external_vue_property_decorator_["Prop"])(Number)], AccountSelectorvue_type_script_lang_ts_AccountSelector.prototype, "minBalance", void 0);

__decorate([Object(external_vue_property_decorator_["Prop"])(Boolean)], AccountSelectorvue_type_script_lang_ts_AccountSelector.prototype, "disableContracts", void 0);

__decorate([Object(external_vue_property_decorator_["Prop"])(Boolean)], AccountSelectorvue_type_script_lang_ts_AccountSelector.prototype, "disableLegacyAccounts", void 0);

__decorate([Object(external_vue_property_decorator_["Prop"])(Boolean)], AccountSelectorvue_type_script_lang_ts_AccountSelector.prototype, "disableBip39Accounts", void 0);

__decorate([Object(external_vue_property_decorator_["Prop"])(Boolean)], AccountSelectorvue_type_script_lang_ts_AccountSelector.prototype, "disableLedgerAccounts", void 0);

__decorate([Object(external_vue_property_decorator_["Prop"])({
  type: Boolean,
  default: true
})], AccountSelectorvue_type_script_lang_ts_AccountSelector.prototype, "allowLogin", void 0);

__decorate([Object(external_vue_property_decorator_["Emit"])()], AccountSelectorvue_type_script_lang_ts_AccountSelector.prototype, "accountSelected", null);

__decorate([Object(external_vue_property_decorator_["Emit"])()], AccountSelectorvue_type_script_lang_ts_AccountSelector.prototype, "login", null);

AccountSelectorvue_type_script_lang_ts_AccountSelector = __decorate([Object(external_vue_property_decorator_["Component"])({
  components: {
    AccountList: components_AccountList
  },
  filters: {
    listAccountsAndContracts: function listAccountsAndContracts(wallet) {
      return _toConsumableArray(wallet.accounts.values()).concat(_toConsumableArray(wallet.contracts));
    },
    sortAccountsAndContracts: function sortAccountsAndContracts(accounts, minBalance, disableContracts) {
      if (!minBalance) return accounts;
      return accounts.sort(function (a, b) {
        // sort disabled contracts to the end
        var aIsDisabledContract = disableContracts && !('path' in a && a.path);
        var bIsDisabledContract = disableContracts && !('path' in b && b.path);
        if (aIsDisabledContract && !bIsDisabledContract) return 1;
        if (!aIsDisabledContract && bIsDisabledContract) return -1; // sort accounts with insufficient funds below accounts with enough balance

        if ((!a.balance || a.balance < minBalance) && b.balance && b.balance >= minBalance) return 1;
        if ((!b.balance || b.balance < minBalance) && a.balance && a.balance >= minBalance) return -1;
        return 0;
      });
    }
  }
})], AccountSelectorvue_type_script_lang_ts_AccountSelector);
/* harmony default export */ var AccountSelectorvue_type_script_lang_ts_ = (AccountSelectorvue_type_script_lang_ts_AccountSelector);
// CONCATENATED MODULE: ./src/components/AccountSelector.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_AccountSelectorvue_type_script_lang_ts_ = (AccountSelectorvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./src/components/AccountSelector.vue?vue&type=style&index=0&id=8796dbbc&scoped=true&lang=css&
var AccountSelectorvue_type_style_index_0_id_8796dbbc_scoped_true_lang_css_ = __webpack_require__("8ed3");

// CONCATENATED MODULE: ./src/components/AccountSelector.vue






/* normalize component */

var AccountSelector_component = normalizeComponent(
  components_AccountSelectorvue_type_script_lang_ts_,
  AccountSelectorvue_type_template_id_8796dbbc_scoped_true_render,
  AccountSelectorvue_type_template_id_8796dbbc_scoped_true_staticRenderFns,
  false,
  null,
  "8796dbbc",
  null
  
)

AccountSelector_component.options.__file = "AccountSelector.vue"
/* harmony default export */ var components_AccountSelector = (AccountSelector_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"46064dad-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/LoadingSpinner.vue?vue&type=template&id=01b4df5e&scoped=true&
var LoadingSpinnervue_type_template_id_01b4df5e_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{staticClass:"loading-spinner",attrs:{"height":"48","width":"54","color":"inherit"}},[_c('path',{attrs:{"id":"big-hex","d":"M51.9,21.9L41.3,3.6c-0.8-1.3-2.2-2.1-3.7-2.1H16.4c-1.5,0-2.9,0.8-3.7,2.1L2.1,21.9c-0.8,1.3-0.8,2.9,0,4.2 l10.6,18.3c0.8,1.3,2.2,2.1,3.7,2.1h21.3c1.5,0,2.9-0.8,3.7-2.1l10.6-18.3C52.7,24.8,52.7,23.2,51.9,21.9z","stroke":"currentColor","stroke-width":"3","fill":"none","stroke-linecap":"round","opacity":"0.4","stroke-dasharray":"92.5 60"}}),_c('path',{attrs:{"id":"small-hex","d":"M51.9,21.9L41.3,3.6c-0.8-1.3-2.2-2.1-3.7-2.1H16.4c-1.5,0-2.9,0.8-3.7,2.1L2.1,21.9c-0.8,1.3-0.8,2.9,0,4.2 l10.6,18.3c0.8,1.3,2.2,2.1,3.7,2.1h21.3c1.5,0,2.9-0.8,3.7-2.1l10.6-18.3C52.7,24.8,52.7,23.2,51.9,21.9z","stroke":"currentColor","stroke-width":"3","fill":"none","stroke-linecap":"round","stroke-dasharray":"47.5 105"}})])}
var LoadingSpinnervue_type_template_id_01b4df5e_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/LoadingSpinner.vue?vue&type=template&id=01b4df5e&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--13-1!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/LoadingSpinner.vue?vue&type=script&lang=ts&







var LoadingSpinnervue_type_script_lang_ts_LoadingSpinner =
/*#__PURE__*/
function (_Vue) {
  function LoadingSpinner() {
    _classCallCheck(this, LoadingSpinner);

    return _possibleConstructorReturn(this, _getPrototypeOf(LoadingSpinner).apply(this, arguments));
  }

  _inherits(LoadingSpinner, _Vue);

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

LoadingSpinner_component.options.__file = "LoadingSpinner.vue"
/* harmony default export */ var components_LoadingSpinner = (LoadingSpinner_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"46064dad-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/PageBody.vue?vue&type=template&id=0b286594&scoped=true&
var PageBodyvue_type_template_id_0b286594_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"page-body nq-card-body"},[_vm._t("default")],2)}
var PageBodyvue_type_template_id_0b286594_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/PageBody.vue?vue&type=template&id=0b286594&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--13-1!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/PageBody.vue?vue&type=script&lang=ts&







var PageBodyvue_type_script_lang_ts_PageBody =
/*#__PURE__*/
function (_Vue) {
  function PageBody() {
    _classCallCheck(this, PageBody);

    return _possibleConstructorReturn(this, _getPrototypeOf(PageBody).apply(this, arguments));
  }

  _inherits(PageBody, _Vue);

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

PageBody_component.options.__file = "PageBody.vue"
/* harmony default export */ var components_PageBody = (PageBody_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"46064dad-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/PageFooter.vue?vue&type=template&id=3c6ba3a4&scoped=true&
var PageFootervue_type_template_id_3c6ba3a4_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"page-footer nq-card-footer"},[_vm._t("default")],2)}
var PageFootervue_type_template_id_3c6ba3a4_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/PageFooter.vue?vue&type=template&id=3c6ba3a4&scoped=true&

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

PageFooter_component.options.__file = "PageFooter.vue"
/* harmony default export */ var components_PageFooter = (PageFooter_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"46064dad-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/PageHeader.vue?vue&type=template&id=284685fa&scoped=true&
var PageHeadervue_type_template_id_284685fa_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"page-header nq-card-header",class:_vm.progressIndicator ? 'has-progress-indicator' : ''},[(_vm.progressIndicator)?_c('div',{staticClass:"progress-indicator"},_vm._l((_vm.progressSteps),function(thisStep){return _c('div',{key:thisStep,staticClass:"indicator",class:thisStep <= _vm.step ? 'active' : ''})}),0):_vm._e(),(_vm.backArrow)?_c('a',{staticClass:"page-header-back-button",attrs:{"href":"#"},on:{"click":function($event){$event.preventDefault();return _vm.$emit('back')}}},[_c('ArrowLeftIcon')],1):_vm._e(),_c('h1',{staticClass:"nq-h1"},[_vm._t("default")],2),_vm._t("more")],2)}
var PageHeadervue_type_template_id_284685fa_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/PageHeader.vue?vue&type=template&id=284685fa&scoped=true&

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

PageHeadervue_type_script_lang_ts_PageHeader = __decorate([Object(external_vue_property_decorator_["Component"])({
  components: {
    ArrowLeftIcon: ArrowLeftIcon
  }
})], PageHeadervue_type_script_lang_ts_PageHeader);
/* harmony default export */ var PageHeadervue_type_script_lang_ts_ = (PageHeadervue_type_script_lang_ts_PageHeader);
// CONCATENATED MODULE: ./src/components/PageHeader.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_PageHeadervue_type_script_lang_ts_ = (PageHeadervue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./src/components/PageHeader.vue?vue&type=style&index=0&id=284685fa&scoped=true&lang=css&
var PageHeadervue_type_style_index_0_id_284685fa_scoped_true_lang_css_ = __webpack_require__("64ee");

// CONCATENATED MODULE: ./src/components/PageHeader.vue






/* normalize component */

var PageHeader_component = normalizeComponent(
  components_PageHeadervue_type_script_lang_ts_,
  PageHeadervue_type_template_id_284685fa_scoped_true_render,
  PageHeadervue_type_template_id_284685fa_scoped_true_staticRenderFns,
  false,
  null,
  "284685fa",
  null
  
)

PageHeader_component.options.__file = "PageHeader.vue"
/* harmony default export */ var components_PageHeader = (PageHeader_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"46064dad-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/PaymentInfoLine.vue?vue&type=template&id=2e5c4938&scoped=true&
var PaymentInfoLinevue_type_template_id_2e5c4938_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"info-line"},[_c('Amount',{attrs:{"amount":_vm.amount + _vm.fee,"decimals":_vm.decimals}}),_c('div',{staticClass:"arrow-runway"},[_c('ArrowRightIcon')],1),_c('a',{staticClass:"description",attrs:{"href":"javascript:void(0)"},on:{"click":_vm.merchantInfoClicked}},[_c('Account',{attrs:{"address":_vm.address,"image":_vm.shopLogoUrl,"label":_vm.originDomain}}),_c('div',{staticClass:"info-circle-container"},[_c('InfoCircleIcon',{staticClass:"info-circle"})],1)],1)],1)}
var PaymentInfoLinevue_type_template_id_2e5c4938_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/PaymentInfoLine.vue?vue&type=template&id=2e5c4938&scoped=true&

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
    key: "merchantInfoClicked",
    value: function merchantInfoClicked() {}
  }, {
    key: "originDomain",
    get: function get() {
      return this.origin.split('://')[1];
    }
  }]);

  _inherits(PaymentInfoLine, _Vue);

  return PaymentInfoLine;
}(external_vue_property_decorator_["Vue"]);

__decorate([Object(external_vue_property_decorator_["Prop"])({
  type: Number,
  default: 2
})], PaymentInfoLinevue_type_script_lang_ts_PaymentInfoLine.prototype, "decimals", void 0);

__decorate([Object(external_vue_property_decorator_["Prop"])(Number)], PaymentInfoLinevue_type_script_lang_ts_PaymentInfoLine.prototype, "amount", void 0);

__decorate([Object(external_vue_property_decorator_["Prop"])(Number)], PaymentInfoLinevue_type_script_lang_ts_PaymentInfoLine.prototype, "fee", void 0);

__decorate([Object(external_vue_property_decorator_["Prop"])(String)], PaymentInfoLinevue_type_script_lang_ts_PaymentInfoLine.prototype, "origin", void 0);

__decorate([Object(external_vue_property_decorator_["Prop"])(String)], PaymentInfoLinevue_type_script_lang_ts_PaymentInfoLine.prototype, "address", void 0);

__decorate([Object(external_vue_property_decorator_["Prop"])(String)], PaymentInfoLinevue_type_script_lang_ts_PaymentInfoLine.prototype, "shopLogoUrl", void 0);

__decorate([Object(external_vue_property_decorator_["Emit"])()], PaymentInfoLinevue_type_script_lang_ts_PaymentInfoLine.prototype, "merchantInfoClicked", null);

PaymentInfoLinevue_type_script_lang_ts_PaymentInfoLine = __decorate([Object(external_vue_property_decorator_["Component"])({
  components: {
    Amount: components_Amount,
    Account: components_Account,
    InfoCircleIcon: InfoCircleIcon,
    ArrowRightIcon: ArrowRightIcon
  }
})], PaymentInfoLinevue_type_script_lang_ts_PaymentInfoLine);
/* harmony default export */ var PaymentInfoLinevue_type_script_lang_ts_ = (PaymentInfoLinevue_type_script_lang_ts_PaymentInfoLine);
// CONCATENATED MODULE: ./src/components/PaymentInfoLine.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_PaymentInfoLinevue_type_script_lang_ts_ = (PaymentInfoLinevue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./src/components/PaymentInfoLine.vue?vue&type=style&index=0&id=2e5c4938&scoped=true&lang=css&
var PaymentInfoLinevue_type_style_index_0_id_2e5c4938_scoped_true_lang_css_ = __webpack_require__("f06d");

// CONCATENATED MODULE: ./src/components/PaymentInfoLine.vue






/* normalize component */

var PaymentInfoLine_component = normalizeComponent(
  components_PaymentInfoLinevue_type_script_lang_ts_,
  PaymentInfoLinevue_type_template_id_2e5c4938_scoped_true_render,
  PaymentInfoLinevue_type_template_id_2e5c4938_scoped_true_staticRenderFns,
  false,
  null,
  "2e5c4938",
  null
  
)

PaymentInfoLine_component.options.__file = "PaymentInfoLine.vue"
/* harmony default export */ var components_PaymentInfoLine = (PaymentInfoLine_component.exports);
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
// CONCATENATED MODULE: ./src/main.ts
// Components




 // export { default as Address } from './components/Address.vue';


 // export { default as AmountWithDetails } from './components/AmountWithDetails.vue';
// export { default as Contact } from './components/Contact.vue';
// export { default as ContactList } from './components/ContactList.vue';



 // export { default as MigrationWelcome } from './components/MigrationWelcome.vue';
// export { default as NewContact } from './components/NewContact.vue';




 // export { default as QrCode } from './components/QrCode.vue';
// export { default as QrScanner } from './components/QrScanner.vue';

 // export { default as Wallet } from './components/Wallet.vue';
// export { default as WalletList } from './components/WalletList.vue';
// export { default as WalletMenu } from './components/WalletMenu.vue';
// Comment out unused icons in the components/Icons.ts file


// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib-no-default.js
/* concated harmony reexport Account */__webpack_require__.d(__webpack_exports__, "Account", function() { return components_Account; });
/* concated harmony reexport AccountDetails */__webpack_require__.d(__webpack_exports__, "AccountDetails", function() { return components_AccountDetails; });
/* concated harmony reexport AccountList */__webpack_require__.d(__webpack_exports__, "AccountList", function() { return components_AccountList; });
/* concated harmony reexport AccountRing */__webpack_require__.d(__webpack_exports__, "AccountRing", function() { return components_AccountRing; });
/* concated harmony reexport AccountSelector */__webpack_require__.d(__webpack_exports__, "AccountSelector", function() { return components_AccountSelector; });
/* concated harmony reexport AddressDisplay */__webpack_require__.d(__webpack_exports__, "AddressDisplay", function() { return components_AddressDisplay; });
/* concated harmony reexport Amount */__webpack_require__.d(__webpack_exports__, "Amount", function() { return components_Amount; });
/* concated harmony reexport Identicon */__webpack_require__.d(__webpack_exports__, "Identicon", function() { return components_Identicon; });
/* concated harmony reexport LabelInput */__webpack_require__.d(__webpack_exports__, "LabelInput", function() { return components_LabelInput; });
/* concated harmony reexport LoadingSpinner */__webpack_require__.d(__webpack_exports__, "LoadingSpinner", function() { return components_LoadingSpinner; });
/* concated harmony reexport PageBody */__webpack_require__.d(__webpack_exports__, "PageBody", function() { return components_PageBody; });
/* concated harmony reexport PageFooter */__webpack_require__.d(__webpack_exports__, "PageFooter", function() { return components_PageFooter; });
/* concated harmony reexport PageHeader */__webpack_require__.d(__webpack_exports__, "PageHeader", function() { return components_PageHeader; });
/* concated harmony reexport PaymentInfoLine */__webpack_require__.d(__webpack_exports__, "PaymentInfoLine", function() { return components_PaymentInfoLine; });
/* concated harmony reexport SmallPage */__webpack_require__.d(__webpack_exports__, "SmallPage", function() { return components_SmallPage; });
/* concated harmony reexport ArrowLeftSmallIcon */__webpack_require__.d(__webpack_exports__, "ArrowLeftSmallIcon", function() { return ArrowLeftSmallIcon; });
/* concated harmony reexport ArrowLeftIcon */__webpack_require__.d(__webpack_exports__, "ArrowLeftIcon", function() { return ArrowLeftIcon; });
/* concated harmony reexport ArrowRightSmallIcon */__webpack_require__.d(__webpack_exports__, "ArrowRightSmallIcon", function() { return ArrowRightSmallIcon; });
/* concated harmony reexport ArrowRightIcon */__webpack_require__.d(__webpack_exports__, "ArrowRightIcon", function() { return ArrowRightIcon; });
/* concated harmony reexport CaretRightSmallIcon */__webpack_require__.d(__webpack_exports__, "CaretRightSmallIcon", function() { return CaretRightSmallIcon; });
/* concated harmony reexport CheckmarkIcon */__webpack_require__.d(__webpack_exports__, "CheckmarkIcon", function() { return CheckmarkIcon; });
/* concated harmony reexport CloseIcon */__webpack_require__.d(__webpack_exports__, "CloseIcon", function() { return CloseIcon; });
/* concated harmony reexport FaceNeutralIcon */__webpack_require__.d(__webpack_exports__, "FaceNeutralIcon", function() { return FaceNeutralIcon; });
/* concated harmony reexport FaceSadIcon */__webpack_require__.d(__webpack_exports__, "FaceSadIcon", function() { return FaceSadIcon; });
/* concated harmony reexport HexagonIcon */__webpack_require__.d(__webpack_exports__, "HexagonIcon", function() { return HexagonIcon; });
/* concated harmony reexport InfoCircleIcon */__webpack_require__.d(__webpack_exports__, "InfoCircleIcon", function() { return InfoCircleIcon; });
/* concated harmony reexport LedgerIcon */__webpack_require__.d(__webpack_exports__, "LedgerIcon", function() { return LedgerIcon; });
/* concated harmony reexport LoginIcon */__webpack_require__.d(__webpack_exports__, "LoginIcon", function() { return LoginIcon; });
/* concated harmony reexport PlusCircleIcon */__webpack_require__.d(__webpack_exports__, "PlusCircleIcon", function() { return PlusCircleIcon; });
/* concated harmony reexport ScanQrCodeIcon */__webpack_require__.d(__webpack_exports__, "ScanQrCodeIcon", function() { return ScanQrCodeIcon; });
/* concated harmony reexport TransferIcon */__webpack_require__.d(__webpack_exports__, "TransferIcon", function() { return TransferIcon; });




/***/ }),

/***/ "fdef":
/***/ (function(module, exports) {

module.exports = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ })

/******/ });
});
//# sourceMappingURL=NimiqVueComponents.umd.js.map