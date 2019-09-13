module.exports =
/******/ (function(modules) { // webpackBootstrap
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

/***/ "02ac":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "0448":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SendTx_vue_vue_type_style_index_0_id_4d9e8127_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("fb33");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SendTx_vue_vue_type_style_index_0_id_4d9e8127_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SendTx_vue_vue_type_style_index_0_id_4d9e8127_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SendTx_vue_vue_type_style_index_0_id_4d9e8127_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "0878":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "09fc":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "0a49":
/***/ (function(module, exports, __webpack_require__) {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = __webpack_require__("9b43");
var IObject = __webpack_require__("626a");
var toObject = __webpack_require__("4bf8");
var toLength = __webpack_require__("9def");
var asc = __webpack_require__("cd1c");
module.exports = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IObject(O);
    var f = ctx(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      val = self[index];
      res = f(val, index, O);
      if (TYPE) {
        if (IS_MAP) result[index] = res;   // map
        else if (res) switch (TYPE) {
          case 3: return true;             // some
          case 5: return val;              // find
          case 6: return index;            // findIndex
          case 2: result.push(val);        // filter
        } else if (IS_EVERY) return false; // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};


/***/ }),

/***/ "0ba8":
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

/***/ "1545":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Copyable_vue_vue_type_style_index_0_id_5b8f619a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("674f");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Copyable_vue_vue_type_style_index_0_id_5b8f619a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Copyable_vue_vue_type_style_index_0_id_5b8f619a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Copyable_vue_vue_type_style_index_0_id_5b8f619a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "1625":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/iqons.min.72f3b689.svg";

/***/ }),

/***/ "16a6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Identicon_vue_vue_type_style_index_0_id_1672226e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("211e");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Identicon_vue_vue_type_style_index_0_id_1672226e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Identicon_vue_vue_type_style_index_0_id_1672226e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Identicon_vue_vue_type_style_index_0_id_1672226e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

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

/***/ "211e":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

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

/***/ "2416":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "2434":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

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

/***/ "2e08":
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-string-pad-start-end
var toLength = __webpack_require__("9def");
var repeat = __webpack_require__("9744");
var defined = __webpack_require__("be13");

module.exports = function (that, maxLength, fillString, left) {
  var S = String(defined(that));
  var stringLength = S.length;
  var fillStr = fillString === undefined ? ' ' : String(fillString);
  var intMaxLength = toLength(maxLength);
  if (intMaxLength <= stringLength || fillStr == '') return S;
  var fillLen = intMaxLength - stringLength;
  var stringFiller = repeat.call(fillStr, Math.ceil(fillLen / fillStr.length));
  if (stringFiller.length > fillLen) stringFiller = stringFiller.slice(0, fillLen);
  return left ? stringFiller + S : S + stringFiller;
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

/***/ "2f7f":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

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

	// Set caret position
	element.setSelectionRange(caret_position, caret_position);
}
//# sourceMappingURL=dom.js.map

/***/ }),

/***/ "33f4":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

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

/***/ "37de":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WalletMenu_vue_vue_type_style_index_0_id_b4639cc0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ebca");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WalletMenu_vue_vue_type_style_index_0_id_b4639cc0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WalletMenu_vue_vue_type_style_index_0_id_b4639cc0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WalletMenu_vue_vue_type_style_index_0_id_b4639cc0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "3846":
/***/ (function(module, exports, __webpack_require__) {

// 21.2.5.3 get RegExp.prototype.flags()
if (__webpack_require__("9e1e") && /./g.flags != 'g') __webpack_require__("86cc").f(RegExp.prototype, 'flags', {
  configurable: true,
  get: __webpack_require__("0bfb")
});


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

/***/ "3b2b":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("7726");
var inheritIfRequired = __webpack_require__("5dbc");
var dP = __webpack_require__("86cc").f;
var gOPN = __webpack_require__("9093").f;
var isRegExp = __webpack_require__("aae3");
var $flags = __webpack_require__("0bfb");
var $RegExp = global.RegExp;
var Base = $RegExp;
var proto = $RegExp.prototype;
var re1 = /a/g;
var re2 = /a/g;
// "new" creates a new object, old webkit buggy here
var CORRECT_NEW = new $RegExp(re1) !== re1;

if (__webpack_require__("9e1e") && (!CORRECT_NEW || __webpack_require__("79e5")(function () {
  re2[__webpack_require__("2b4c")('match')] = false;
  // RegExp constructor can alter flags and IsRegExp works correct with @@match
  return $RegExp(re1) != re1 || $RegExp(re2) == re2 || $RegExp(re1, 'i') != '/a/i';
}))) {
  $RegExp = function RegExp(p, f) {
    var tiRE = this instanceof $RegExp;
    var piRE = isRegExp(p);
    var fiU = f === undefined;
    return !tiRE && piRE && p.constructor === $RegExp && fiU ? p
      : inheritIfRequired(CORRECT_NEW
        ? new Base(piRE && !fiU ? p.source : p, f)
        : Base((piRE = p instanceof $RegExp) ? p.source : p, piRE && fiU ? $flags.call(p) : f)
      , tiRE ? this : proto, $RegExp);
  };
  var proxy = function (key) {
    key in $RegExp || dP($RegExp, key, {
      configurable: true,
      get: function () { return Base[key]; },
      set: function (it) { Base[key] = it; }
    });
  };
  for (var keys = gOPN(Base), i = 0; keys.length > i;) proxy(keys[i++]);
  proto.constructor = $RegExp;
  $RegExp.prototype = proto;
  __webpack_require__("2aba")(global, 'RegExp', $RegExp);
}

__webpack_require__("7a56")('RegExp');


/***/ }),

/***/ "3e17":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Address_vue_vue_type_style_index_0_id_dd620aac_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("c54a");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Address_vue_vue_type_style_index_0_id_dd620aac_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Address_vue_vue_type_style_index_0_id_dd620aac_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Address_vue_vue_type_style_index_0_id_dd620aac_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "405e":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

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

/***/ "44b8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountDetails_vue_vue_type_style_index_0_id_56988aea_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("33f4");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountDetails_vue_vue_type_style_index_0_id_56988aea_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountDetails_vue_vue_type_style_index_0_id_56988aea_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountDetails_vue_vue_type_style_index_0_id_56988aea_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

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

/***/ "46d9":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "46f5":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "qr-scanner-worker.min.js";

/***/ }),

/***/ "483a":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Amount_vue_vue_type_style_index_0_id_6fea4aa4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("0ba8");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Amount_vue_vue_type_style_index_0_id_6fea4aa4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Amount_vue_vue_type_style_index_0_id_6fea4aa4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Amount_vue_vue_type_style_index_0_id_6fea4aa4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

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

/***/ "501b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Wallet_vue_vue_type_style_index_0_id_d2266d0a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ca93");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Wallet_vue_vue_type_style_index_0_id_d2266d0a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Wallet_vue_vue_type_style_index_0_id_d2266d0a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Wallet_vue_vue_type_style_index_0_id_d2266d0a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

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

/***/ "51ae":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

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

/***/ "564b":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "5aa5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QrScanner_vue_vue_type_style_index_0_id_7e80c7c1_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("8086");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QrScanner_vue_vue_type_style_index_0_id_7e80c7c1_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QrScanner_vue_vue_type_style_index_0_id_7e80c7c1_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QrScanner_vue_vue_type_style_index_0_id_7e80c7c1_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

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

/***/ "674f":
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

/***/ "6b18":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CloseButton_vue_vue_type_style_index_0_id_20cd296e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("51ae");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CloseButton_vue_vue_type_style_index_0_id_20cd296e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CloseButton_vue_vue_type_style_index_0_id_20cd296e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CloseButton_vue_vue_type_style_index_0_id_20cd296e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

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

/***/ "6ffa":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LabelInput_vue_vue_type_style_index_0_id_360cfbaf_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("a341");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LabelInput_vue_vue_type_style_index_0_id_360cfbaf_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LabelInput_vue_vue_type_style_index_0_id_360cfbaf_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LabelInput_vue_vue_type_style_index_0_id_360cfbaf_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

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

/***/ "7514":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
var $export = __webpack_require__("5ca1");
var $find = __webpack_require__("0a49")(5);
var KEY = 'find';
var forced = true;
// Shouldn't skip holes
if (KEY in []) Array(1)[KEY](function () { forced = false; });
$export($export.P + $export.F * forced, 'Array', {
  find: function find(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});
__webpack_require__("9c6c")(KEY);


/***/ }),

/***/ "76d6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MigrationWelcome_vue_vue_type_style_index_0_id_48e56bac_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("405e");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MigrationWelcome_vue_vue_type_style_index_0_id_48e56bac_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MigrationWelcome_vue_vue_type_style_index_0_id_48e56bac_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MigrationWelcome_vue_vue_type_style_index_0_id_48e56bac_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

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

/***/ "779c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectBar_vue_vue_type_style_index_0_id_2c3d01a0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("46d9");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectBar_vue_vue_type_style_index_0_id_2c3d01a0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectBar_vue_vue_type_style_index_0_id_2c3d01a0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectBar_vue_vue_type_style_index_0_id_2c3d01a0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

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

/***/ "7a56":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__("7726");
var dP = __webpack_require__("86cc");
var DESCRIPTORS = __webpack_require__("9e1e");
var SPECIES = __webpack_require__("2b4c")('species');

module.exports = function (KEY) {
  var C = global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
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

/***/ "8086":
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

module.exports = require("vue");

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

/***/ "9093":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__("ce10");
var hiddenKeys = __webpack_require__("e11e").concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ "9474":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Account_vue_vue_type_style_index_0_id_75ac8cea_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("9856");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Account_vue_vue_type_style_index_0_id_75ac8cea_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Account_vue_vue_type_style_index_0_id_75ac8cea_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Account_vue_vue_type_style_index_0_id_75ac8cea_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

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

/***/ "9744":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toInteger = __webpack_require__("4588");
var defined = __webpack_require__("be13");

module.exports = function repeat(count) {
  var str = String(defined(this));
  var res = '';
  var n = toInteger(count);
  if (n < 0 || n == Infinity) throw RangeError("Count can't be negative");
  for (;n > 0; (n >>>= 1) && (str += str)) if (n & 1) res += str;
  return res;
};


/***/ }),

/***/ "9856":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

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

/***/ "9c44":
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

/***/ "a25f":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("7726");
var navigator = global.navigator;

module.exports = navigator && navigator.userAgent || '';


/***/ }),

/***/ "a341":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "a441":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WalletList_vue_vue_type_style_index_0_id_d167a5a6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("2f7f");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WalletList_vue_vue_type_style_index_0_id_d167a5a6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WalletList_vue_vue_type_style_index_0_id_d167a5a6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WalletList_vue_vue_type_style_index_0_id_d167a5a6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

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

/***/ "ab37":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PageBody_vue_vue_type_style_index_0_id_0b286594_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ead8");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PageBody_vue_vue_type_style_index_0_id_0b286594_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PageBody_vue_vue_type_style_index_0_id_0b286594_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PageBody_vue_vue_type_style_index_0_id_0b286594_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "ac4d":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("3a72")('asyncIterator');


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

/***/ "aef6":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 21.1.3.6 String.prototype.endsWith(searchString [, endPosition])

var $export = __webpack_require__("5ca1");
var toLength = __webpack_require__("9def");
var context = __webpack_require__("d2c8");
var ENDS_WITH = 'endsWith';
var $endsWith = ''[ENDS_WITH];

$export($export.P + $export.F * __webpack_require__("5147")(ENDS_WITH), 'String', {
  endsWith: function endsWith(searchString /* , endPosition = @length */) {
    var that = context(this, searchString, ENDS_WITH);
    var endPosition = arguments.length > 1 ? arguments[1] : undefined;
    var len = toLength(that.length);
    var end = endPosition === undefined ? len : Math.min(toLength(endPosition), len);
    var search = String(searchString);
    return $endsWith
      ? $endsWith.call(that, search, end)
      : that.slice(end - search.length, end) === search;
  }
});


/***/ }),

/***/ "b36a":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountList_vue_vue_type_style_index_0_id_36376e14_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cb49");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountList_vue_vue_type_style_index_0_id_36376e14_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountList_vue_vue_type_style_index_0_id_36376e14_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountList_vue_vue_type_style_index_0_id_36376e14_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "bc12":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountRing_vue_vue_type_style_index_0_id_693b8320_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("c999");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountRing_vue_vue_type_style_index_0_id_693b8320_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountRing_vue_vue_type_style_index_0_id_693b8320_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountRing_vue_vue_type_style_index_0_id_693b8320_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "bc88":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactList_vue_vue_type_style_index_0_id_62deaed0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("9c44");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactList_vue_vue_type_style_index_0_id_62deaed0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactList_vue_vue_type_style_index_0_id_62deaed0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactList_vue_vue_type_style_index_0_id_62deaed0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "bdfa":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddressInput_vue_vue_type_style_index_0_id_19ef3b0b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ca28");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddressInput_vue_vue_type_style_index_0_id_19ef3b0b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddressInput_vue_vue_type_style_index_0_id_19ef3b0b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddressInput_vue_vue_type_style_index_0_id_19ef3b0b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "be13":
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "bfec":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AmountInput_vue_vue_type_style_index_0_id_32b6c97e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("e1b7");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AmountInput_vue_vue_type_style_index_0_id_32b6c97e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AmountInput_vue_vue_type_style_index_0_id_32b6c97e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AmountInput_vue_vue_type_style_index_0_id_32b6c97e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "c02b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountSelector_vue_vue_type_style_index_0_id_598fccf1_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("0878");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountSelector_vue_vue_type_style_index_0_id_598fccf1_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountSelector_vue_vue_type_style_index_0_id_598fccf1_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountSelector_vue_vue_type_style_index_0_id_598fccf1_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

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

/***/ "c54a":
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

/***/ "c82f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactShortcuts_vue_vue_type_style_index_0_id_5eeaf1e8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ca5b");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactShortcuts_vue_vue_type_style_index_0_id_5eeaf1e8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactShortcuts_vue_vue_type_style_index_0_id_5eeaf1e8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactShortcuts_vue_vue_type_style_index_0_id_5eeaf1e8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "c999":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "ca28":
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

/***/ "ca5b":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "ca93":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "cac6":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "cacf":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AmountWithFee_vue_vue_type_style_index_0_id_f7787c42_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("2434");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AmountWithFee_vue_vue_type_style_index_0_id_f7787c42_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AmountWithFee_vue_vue_type_style_index_0_id_f7787c42_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AmountWithFee_vue_vue_type_style_index_0_id_f7787c42_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

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

/***/ "cb49":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "cb7c":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("d3f4");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "cd1c":
/***/ (function(module, exports, __webpack_require__) {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__("e853");

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
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

/***/ "dce1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SmallPage_vue_vue_type_style_index_0_id_1d450cf2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("09fc");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SmallPage_vue_vue_type_style_index_0_id_1d450cf2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SmallPage_vue_vue_type_style_index_0_id_1d450cf2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SmallPage_vue_vue_type_style_index_0_id_1d450cf2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "dd56":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CircleSpinner_vue_vue_type_style_index_0_id_05d748b3_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("2416");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CircleSpinner_vue_vue_type_style_index_0_id_05d748b3_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CircleSpinner_vue_vue_type_style_index_0_id_05d748b3_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CircleSpinner_vue_vue_type_style_index_0_id_05d748b3_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "e11e":
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "e1b7":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "e853":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("d3f4");
var isArray = __webpack_require__("1169");
var SPECIES = __webpack_require__("2b4c")('species');

module.exports = function (original) {
  var C;
  if (isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};


/***/ }),

/***/ "ead8":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "ebca":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "ed50":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-string-pad-start-end
var $export = __webpack_require__("5ca1");
var $pad = __webpack_require__("2e08");
var userAgent = __webpack_require__("a25f");

// https://github.com/zloirock/core-js/issues/280
$export($export.P + $export.F * /Version\/10\.\d+(\.\d+)? Safari\//.test(userAgent), 'String', {
  padEnd: function padEnd(maxLength /* , fillString = ' ' */) {
    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, false);
  }
});


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

/***/ "f559":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 21.1.3.18 String.prototype.startsWith(searchString [, position ])

var $export = __webpack_require__("5ca1");
var toLength = __webpack_require__("9def");
var context = __webpack_require__("d2c8");
var STARTS_WITH = 'startsWith';
var $startsWith = ''[STARTS_WITH];

$export($export.P + $export.F * __webpack_require__("5147")(STARTS_WITH), 'String', {
  startsWith: function startsWith(searchString /* , position = 0 */) {
    var that = context(this, searchString, STARTS_WITH);
    var index = toLength(Math.min(arguments.length > 1 ? arguments[1] : undefined, that.length));
    var search = String(searchString);
    return $startsWith
      ? $startsWith.call(that, search, index)
      : that.slice(index, index + search.length) === search;
  }
});


/***/ }),

/***/ "f751":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__("5ca1");

$export($export.S + $export.F, 'Object', { assign: __webpack_require__("7333") });


/***/ }),

/***/ "f9cb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PageHeader_vue_vue_type_style_index_0_id_f91651fa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("02ac");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PageHeader_vue_vue_type_style_index_0_id_f91651fa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PageHeader_vue_vue_type_style_index_0_id_f91651fa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PageHeader_vue_vue_type_style_index_0_id_f91651fa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

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

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"6ce9ed87-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/AccountSelector.vue?vue&type=template&id=598fccf1&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"account-selector"},[_c('div',{staticClass:"container",class:{'extra-spacing': _vm.wallets.length === 1}},_vm._l((_vm.sortedWallets),function(wallet){return _c('div',{key:wallet.id,class:{
                'disabled-account': _vm._isAccountDisabled(wallet),
                'highlighted-disabled-account': _vm.highlightedDisabledAccount === wallet,
            }},[(_vm.wallets.length > 1 || _vm._isAccountDisabled(wallet))?_c('div',{staticClass:"wallet-label"},[_c('div',[_c('span',{staticClass:"nq-label"},[_vm._v(_vm._s(wallet.label))]),(_vm._isAccountDisabled(wallet))?_c('div',{staticClass:"warning-disabled-account nq-label"},[_vm._v("\n                        (Incompatible with this operation)\n                    ")]):_vm._e()])]):_vm._e(),_c('AccountList',{attrs:{"accounts":_vm._f("sortAccountsAndContracts")(_vm._f("listAccountsAndContracts")(wallet),_vm.minBalance, _vm.disableContracts),"walletId":wallet.id,"minBalance":_vm.minBalance,"decimals":_vm.decimals,"disableContracts":_vm.disableContracts,"disabled":_vm._isAccountDisabled(wallet)},on:{"account-selected":_vm.accountSelected},nativeOn:{"click":function($event){return _vm._accountClicked(wallet)}}})],1)}),0),_c('div',{staticClass:"footer"},[(_vm.allowLogin)?_c('button',{staticClass:"nq-button-s",on:{"click":_vm.login}},[_vm._v("Login to another Account")]):_vm._e()])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/AccountSelector.vue?vue&type=template&id=598fccf1&scoped=true&

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
// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.number.constructor.js
var es6_number_constructor = __webpack_require__("c5f6");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom.iterable.js
var web_dom_iterable = __webpack_require__("ac6a");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.iterator.js
var es6_array_iterator = __webpack_require__("cadf");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.from.js
var es6_array_from = __webpack_require__("1c4c");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.sort.js
var es6_array_sort = __webpack_require__("55dd");

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

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"6ce9ed87-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/AccountList.vue?vue&type=template&id=36376e14&scoped=true&
var AccountListvue_type_template_id_36376e14_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"account-list"},_vm._l((_vm.accounts),function(account){return _c(_vm.accountContainerTag,{key:account.userFriendlyAddress,tag:"component",staticClass:"account-entry",class:{
            'disabled': _vm.disabled || _vm.disableContracts && _vm._isContract(account) || _vm.minBalance && account.balance < _vm.minBalance,
            'disabled-contract': _vm.disableContracts && _vm._isContract(account),
            'good-balance': _vm.minBalance && (account.balance || 0) >= _vm.minBalance,
            'bad-balance': _vm.minBalance && (account.balance || 0) < _vm.minBalance,
            'highlight-disabled-address': _vm.highlightedDisabledAddress === account.userFriendlyAddress,
        },attrs:{"href":"javascript:void(0)"},on:{"click":function($event){return _vm.accountSelected(account)}}},[_c('Account',{ref:account.userFriendlyAddress,refInFor:true,attrs:{"address":account.userFriendlyAddress,"label":account.label,"placeholder":account.defaultLabel,"balance":account.balance,"decimals":_vm.decimals,"editable":_vm.editable && !_vm.disabled},on:{"changed":function($event){return _vm.accountChanged(account.userFriendlyAddress, $event)}}}),_c('CaretRightSmallIcon')],1)}),1)}
var AccountListvue_type_template_id_36376e14_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/AccountList.vue?vue&type=template&id=36376e14&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"6ce9ed87-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Account.vue?vue&type=template&id=75ac8cea&scoped=true&
var Accountvue_type_template_id_75ac8cea_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"account",class:[{ editable: _vm.editable }, _vm.layout, {cashlink: _vm.displayAsCashlink}]},[_c('div',{staticClass:"identicon-and-label"},[(_vm.showImage)?_c('div',{staticClass:"identicon"},[_c('img',{staticClass:"account-image",attrs:{"src":_vm.image},on:{"error":function($event){_vm.showImage = false}}}),_c('div',{staticClass:"outline"})]):(_vm.displayAsCashlink)?_c('div',{staticClass:"identicon"},[_c('div',{staticClass:"nq-blue-bg"},[_c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 64 64","fill":"none","stroke":"white","stroke-linecap":"round","stroke-width":"2.5"}},[_c('path',{attrs:{"d":"M40.25 23.25v-.5a6.5 6.5 0 0 0-6.5-6.5h-3.5a6.5 6.5 0 0 0-6.5 6.5v6.5a6.5 6.5 0 0 0 6.5 6.5h2"}}),_c('path',{attrs:{"d":"M23.75 40.75v.5a6.5 6.5 0 0 0 6.5 6.5h3.5a6.5 6.5 0 0 0 6.5-6.5v-6.5a6.5 6.5 0 0 0-6.5-6.5h-2"}}),_c('path',{attrs:{"d":"M32 11.25v4M32 48.75v4"}})])])]):_c('Identicon',{attrs:{"address":_vm.address}}),(!_vm.editable)?_c('div',{staticClass:"label",class:{ 'address-font': _vm._isLabelAddress }},[_vm._v(_vm._s(_vm.label))]):_c('div',{staticClass:"label editable",class:{ 'address-font': _vm._isLabelAddress }},[_c('LabelInput',{ref:"label",attrs:{"maxBytes":63,"value":_vm.label,"placeholder":_vm.placeholder},on:{"input":_vm.changed}})],1),(_vm.layout === 'column' && _vm.walletLabel)?_c('div',{staticClass:"nq-label wallet-label"},[_vm._v(_vm._s(_vm.walletLabel))]):_vm._e()],1),(_vm.balance || _vm.balance === 0)?_c('Amount',{staticClass:"balance",attrs:{"amount":_vm.balance,"decimals":_vm.decimals}}):_vm._e()],1)}
var Accountvue_type_template_id_75ac8cea_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Account.vue?vue&type=template&id=75ac8cea&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"6ce9ed87-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Identicon.vue?vue&type=template&id=1672226e&scoped=true&
var Identiconvue_type_template_id_1672226e_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"identicon"},[_c('img',{attrs:{"src":_vm.dataUrl}})])}
var Identiconvue_type_template_id_1672226e_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Identicon.vue?vue&type=template&id=1672226e&scoped=true&

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
    static get NIMIQ_ALPHABET() {
        // From Nimiq.BufferUtils.BASE32_ALPHABET.NIMIQ
        return '0123456789ABCDEFGHJKLMNPQRSTUVXY';
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
    _this.dataUrl = _this.placeholderDataUrl;
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
// EXTERNAL MODULE: ./src/components/Identicon.vue?vue&type=style&index=0&id=1672226e&scoped=true&lang=css&
var Identiconvue_type_style_index_0_id_1672226e_scoped_true_lang_css_ = __webpack_require__("16a6");

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
  Identiconvue_type_template_id_1672226e_scoped_true_render,
  Identiconvue_type_template_id_1672226e_scoped_true_staticRenderFns,
  false,
  null,
  "1672226e",
  null
  
)

component.options.__file = "Identicon.vue"
/* harmony default export */ var components_Identicon = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"6ce9ed87-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Amount.vue?vue&type=template&id=6fea4aa4&scoped=true&
var Amountvue_type_template_id_6fea4aa4_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',{staticClass:"amount",class:{ approx: _vm.showApprox && _vm.isApprox }},[_vm._v("\n    "+_vm._s(_vm.formattedAmount)+"\n    "),_c('span',{staticClass:"nim"},[_vm._v("NIM")])])}
var Amountvue_type_template_id_6fea4aa4_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Amount.vue?vue&type=template&id=6fea4aa4&scoped=true&

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
}(external_commonjs_vue_commonjs2_vue_root_Vue_default.a);

__decorate([Prop(Number)], Amountvue_type_script_lang_ts_Amount.prototype, "amount", void 0);

__decorate([Prop({
  type: Number,
  validator: Amount_1._validateDecimals
})], Amountvue_type_script_lang_ts_Amount.prototype, "decimals", void 0);

__decorate([Prop({
  type: Number,
  default: 2,
  validator: Amount_1._validateDecimals
})], Amountvue_type_script_lang_ts_Amount.prototype, "minDecimals", void 0);

__decorate([Prop({
  type: Number,
  default: 5,
  validator: Amount_1._validateDecimals
})], Amountvue_type_script_lang_ts_Amount.prototype, "maxDecimals", void 0);

__decorate([Prop({
  type: Boolean,
  default: false
})], Amountvue_type_script_lang_ts_Amount.prototype, "showApprox", void 0);

Amountvue_type_script_lang_ts_Amount = Amount_1 = __decorate([vue_class_component_common_default.a], Amountvue_type_script_lang_ts_Amount);
/* harmony default export */ var Amountvue_type_script_lang_ts_ = (Amountvue_type_script_lang_ts_Amount);
// CONCATENATED MODULE: ./src/components/Amount.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_Amountvue_type_script_lang_ts_ = (Amountvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./src/components/Amount.vue?vue&type=style&index=0&id=6fea4aa4&scoped=true&lang=css&
var Amountvue_type_style_index_0_id_6fea4aa4_scoped_true_lang_css_ = __webpack_require__("483a");

// CONCATENATED MODULE: ./src/components/Amount.vue






/* normalize component */

var Amount_component = normalizeComponent(
  components_Amountvue_type_script_lang_ts_,
  Amountvue_type_template_id_6fea4aa4_scoped_true_render,
  Amountvue_type_template_id_6fea4aa4_scoped_true_staticRenderFns,
  false,
  null,
  "6fea4aa4",
  null
  
)

Amount_component.options.__file = "Amount.vue"
/* harmony default export */ var components_Amount = (Amount_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"6ce9ed87-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/LabelInput.vue?vue&type=template&id=360cfbaf&scoped=true&
var LabelInputvue_type_template_id_360cfbaf_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('form',{staticClass:"label-input",on:{"submit":function($event){$event.preventDefault();return _vm.onBlur($event)}}},[_c('span',{ref:"widthPlaceholder",staticClass:"width-finder width-placeholder"},[_vm._v(_vm._s(_vm.placeholder))]),_c('span',{ref:"widthValue",staticClass:"width-finder width-value"},[_vm._v(_vm._s(_vm.liveValue))]),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.liveValue),expression:"liveValue"}],ref:"input",staticClass:"nq-input",class:{'vanishing': _vm.vanishing},style:({width: ((this.width) + "px")}),attrs:{"type":"text","placeholder":_vm.placeholder},domProps:{"value":(_vm.liveValue)},on:{"input":[function($event){if($event.target.composing){ return; }_vm.liveValue=$event.target.value},_vm.onInput],"blur":_vm.onBlur}})])}
var LabelInputvue_type_template_id_360cfbaf_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/LabelInput.vue?vue&type=template&id=360cfbaf&scoped=true&

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
        // Fallback for unsupported TextDecoder
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
    static isValidUtf8(bytes, denyControlCharacters = false) {
        // We cannot use the build-in TextDecoder to check for validity, as we need to
        // also filter out control characters, which are valid UTF8.
        let i = 0;
        while (i < bytes.length) {
            const first = bytes[i]; // The byte
            const controlCharsWhitelist = [
                0x09,
                0x0A,
                0x0D,
            ];
            if (first <= 0x7F) { // Possible one-byte
                if (!denyControlCharacters)
                    ++i; // Valid single-byte character (ASCII)
                else if (controlCharsWhitelist.indexOf(first) > -1)
                    ++i;
                else if (first >= 0x20 /* space */ && first <= 0x7E /* tilde */)
                    ++i; // Only allow non-control chars
                else
                    break;
            }
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
                return external_commonjs_vue_commonjs2_vue_root_Vue_default.a.nextTick();

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
}(external_commonjs_vue_commonjs2_vue_root_Vue_default.a);

__decorate([Prop(Number)], LabelInputvue_type_script_lang_ts_LabelInput.prototype, "maxBytes", void 0);

__decorate([Prop({
  type: String,
  default: ''
})], LabelInputvue_type_script_lang_ts_LabelInput.prototype, "value", void 0);

__decorate([Prop({
  type: String,
  default: 'Name your address'
})], LabelInputvue_type_script_lang_ts_LabelInput.prototype, "placeholder", void 0);

__decorate([Prop({
  type: Boolean,
  default: false
})], LabelInputvue_type_script_lang_ts_LabelInput.prototype, "vanishing", void 0);

__decorate([Watch('value', {
  immediate: true
})], LabelInputvue_type_script_lang_ts_LabelInput.prototype, "updateValue", null);

__decorate([Watch('liveValue', {
  immediate: true
})], LabelInputvue_type_script_lang_ts_LabelInput.prototype, "updateWidth", null);

LabelInputvue_type_script_lang_ts_LabelInput = __decorate([vue_class_component_common_default.a], LabelInputvue_type_script_lang_ts_LabelInput);
/* harmony default export */ var LabelInputvue_type_script_lang_ts_ = (LabelInputvue_type_script_lang_ts_LabelInput);
// CONCATENATED MODULE: ./src/components/LabelInput.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_LabelInputvue_type_script_lang_ts_ = (LabelInputvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./src/components/LabelInput.vue?vue&type=style&index=0&id=360cfbaf&scoped=true&lang=css&
var LabelInputvue_type_style_index_0_id_360cfbaf_scoped_true_lang_css_ = __webpack_require__("6ffa");

// CONCATENATED MODULE: ./src/components/LabelInput.vue






/* normalize component */

var LabelInput_component = normalizeComponent(
  components_LabelInputvue_type_script_lang_ts_,
  LabelInputvue_type_template_id_360cfbaf_scoped_true_render,
  LabelInputvue_type_template_id_360cfbaf_scoped_true_staticRenderFns,
  false,
  null,
  "360cfbaf",
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
}(external_commonjs_vue_commonjs2_vue_root_Vue_default.a);

__decorate([Prop(String)], Accountvue_type_script_lang_ts_Account.prototype, "address", void 0);

__decorate([Prop(String)], Accountvue_type_script_lang_ts_Account.prototype, "image", void 0);

__decorate([Prop({
  type: Boolean,
  default: false
})], Accountvue_type_script_lang_ts_Account.prototype, "displayAsCashlink", void 0);

__decorate([Prop(String)], Accountvue_type_script_lang_ts_Account.prototype, "label", void 0);

__decorate([Prop(String)], Accountvue_type_script_lang_ts_Account.prototype, "placeholder", void 0);

__decorate([Prop(String)], Accountvue_type_script_lang_ts_Account.prototype, "walletLabel", void 0);

__decorate([Prop(Number)], Accountvue_type_script_lang_ts_Account.prototype, "balance", void 0);

__decorate([Prop({
  type: Number,
  default: 2
})], Accountvue_type_script_lang_ts_Account.prototype, "decimals", void 0);

__decorate([Prop(Boolean)], Accountvue_type_script_lang_ts_Account.prototype, "editable", void 0);

__decorate([Prop({
  type: String,
  default: 'row',
  validator: function validator(layout) {
    return ['row', 'column'].indexOf(layout) !== -1;
  }
})], Accountvue_type_script_lang_ts_Account.prototype, "layout", void 0);

__decorate([Emit()], Accountvue_type_script_lang_ts_Account.prototype, "changed", null);

__decorate([Watch('image', {
  immediate: true
})], Accountvue_type_script_lang_ts_Account.prototype, "onImageChange", null);

Accountvue_type_script_lang_ts_Account = __decorate([vue_class_component_common_default()({
  components: {
    Amount: components_Amount,
    Identicon: components_Identicon,
    LabelInput: components_LabelInput
  }
})], Accountvue_type_script_lang_ts_Account);
/* harmony default export */ var Accountvue_type_script_lang_ts_ = (Accountvue_type_script_lang_ts_Account);
// CONCATENATED MODULE: ./src/components/Account.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_Accountvue_type_script_lang_ts_ = (Accountvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./src/components/Account.vue?vue&type=style&index=0&id=75ac8cea&scoped=true&lang=css&
var Accountvue_type_style_index_0_id_75ac8cea_scoped_true_lang_css_ = __webpack_require__("9474");

// CONCATENATED MODULE: ./src/components/Account.vue






/* normalize component */

var Account_component = normalizeComponent(
  components_Accountvue_type_script_lang_ts_,
  Accountvue_type_template_id_75ac8cea_scoped_true_render,
  Accountvue_type_template_id_75ac8cea_scoped_true_staticRenderFns,
  false,
  null,
  "75ac8cea",
  null
  
)

Account_component.options.__file = "Account.vue"
/* harmony default export */ var components_Account = (Account_component.exports);
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
















/**
 * Comment out any unused icons here
 */
// tslint:disable:variable-name

var AlertTriangleIcon = IconBase(alert_triangle); // export const ArrowLeftSmallIcon = IconBase(ArrowLeftSmall);

var ArrowLeftIcon = IconBase(arrow_left);
var ArrowRightSmallIcon = IconBase(arrow_right_small);
var ArrowRightIcon = IconBase(arrow_right); // export const BrowserLoginIcon = IconBase(BrowserLogin);

var CaretRightSmallIcon = IconBase(caret_right_small); // export const CashlinkIcon = IconBase(Cashlink);
// export const CashlinkSmallIcon = IconBase(CashlinkSmall);
// export const CashlinkXSmallIcon = IconBase(CashlinkXSmall);
// export const CheckmarkIcon = IconBase(Checkmark);
// export const CheckmarkSmallIcon = IconBase(CheckmarkSmall);

var CloseIcon = IconBase(icons_close);
var ContactsIcon = IconBase(contacts); // export const CopyIcon = IconBase(Copy);
// export const DownloadIcon = IconBase(Download);
// export const FaceNeutralIcon = IconBase(FaceNeutral);
// export const FaceSadIcon = IconBase(FaceSad);
// export const FireIcon = IconBase(Fire);

var GearIcon = IconBase(gear);
var HexagonIcon = IconBase(hexagon);
var InfoCircleIcon = IconBase(info_circle); // export const KeysIcon = IconBase(Keys);
// export const LedgerIcon = IconBase(Ledger);
// export const LockLockedIcon = IconBase(LockLocked);
// export const LockUnlockedIcon = IconBase(LockUnlocked);
// export const LoginIcon = IconBase(Login);

var MenuDotsIcon = IconBase(menu_dots); // export const PaperEditIcon = IconBase(PaperEdit);
// export const PlusCircleIcon = IconBase(PlusCircle);

var QrCodeIcon = IconBase(qr_code); // export const QuestionmarkIcon = IconBase(Questionmark);

var ScanQrCodeIcon = IconBase(scan_qr_code);
var SettingsIcon = IconBase(settings); // export const ShredderIcon = IconBase(Shredder);
// export const SkullIcon = IconBase(Skull);
// export const TransferIcon = IconBase(Transfer);
// export const ViewOffIcon = IconBase(ViewOff);
// export const ViewIcon = IconBase(View);
// tslint:enable:variable-name
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
}(external_commonjs_vue_commonjs2_vue_root_Vue_default.a);

__decorate([Prop(Array)], AccountListvue_type_script_lang_ts_AccountList.prototype, "accounts", void 0);

__decorate([Prop(String)], AccountListvue_type_script_lang_ts_AccountList.prototype, "walletId", void 0);

__decorate([Prop(Boolean)], AccountListvue_type_script_lang_ts_AccountList.prototype, "editable", void 0);

__decorate([Prop(Number)], AccountListvue_type_script_lang_ts_AccountList.prototype, "decimals", void 0);

__decorate([Prop(Number)], AccountListvue_type_script_lang_ts_AccountList.prototype, "minBalance", void 0);

__decorate([Prop(Boolean)], AccountListvue_type_script_lang_ts_AccountList.prototype, "disableContracts", void 0);

__decorate([Prop(Boolean)], AccountListvue_type_script_lang_ts_AccountList.prototype, "disabled", void 0);

__decorate([Emit()], AccountListvue_type_script_lang_ts_AccountList.prototype, "accountChanged", null);

AccountListvue_type_script_lang_ts_AccountList = __decorate([vue_class_component_common_default()({
  components: {
    Account: components_Account,
    CaretRightSmallIcon: CaretRightSmallIcon
  }
})], AccountListvue_type_script_lang_ts_AccountList);
/* harmony default export */ var AccountListvue_type_script_lang_ts_ = (AccountListvue_type_script_lang_ts_AccountList);
// CONCATENATED MODULE: ./src/components/AccountList.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_AccountListvue_type_script_lang_ts_ = (AccountListvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./src/components/AccountList.vue?vue&type=style&index=0&id=36376e14&scoped=true&lang=css&
var AccountListvue_type_style_index_0_id_36376e14_scoped_true_lang_css_ = __webpack_require__("b36a");

// CONCATENATED MODULE: ./src/components/AccountList.vue






/* normalize component */

var AccountList_component = normalizeComponent(
  components_AccountListvue_type_script_lang_ts_,
  AccountListvue_type_template_id_36376e14_scoped_true_render,
  AccountListvue_type_template_id_36376e14_scoped_true_staticRenderFns,
  false,
  null,
  "36376e14",
  null
  
)

AccountList_component.options.__file = "AccountList.vue"
/* harmony default export */ var components_AccountList = (AccountList_component.exports);
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
}(external_commonjs_vue_commonjs2_vue_root_Vue_default.a);

__decorate([Prop(Array)], AccountSelectorvue_type_script_lang_ts_AccountSelector.prototype, "wallets", void 0);

__decorate([Prop(Number)], AccountSelectorvue_type_script_lang_ts_AccountSelector.prototype, "decimals", void 0);

__decorate([Prop(Number)], AccountSelectorvue_type_script_lang_ts_AccountSelector.prototype, "minBalance", void 0);

__decorate([Prop(Boolean)], AccountSelectorvue_type_script_lang_ts_AccountSelector.prototype, "disableContracts", void 0);

__decorate([Prop(Boolean)], AccountSelectorvue_type_script_lang_ts_AccountSelector.prototype, "disableLegacyAccounts", void 0);

__decorate([Prop(Boolean)], AccountSelectorvue_type_script_lang_ts_AccountSelector.prototype, "disableBip39Accounts", void 0);

__decorate([Prop(Boolean)], AccountSelectorvue_type_script_lang_ts_AccountSelector.prototype, "disableLedgerAccounts", void 0);

__decorate([Prop({
  type: Boolean,
  default: true
})], AccountSelectorvue_type_script_lang_ts_AccountSelector.prototype, "allowLogin", void 0);

__decorate([Emit()], AccountSelectorvue_type_script_lang_ts_AccountSelector.prototype, "accountSelected", null);

__decorate([Emit()], AccountSelectorvue_type_script_lang_ts_AccountSelector.prototype, "login", null);

AccountSelectorvue_type_script_lang_ts_AccountSelector = __decorate([vue_class_component_common_default()({
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
// EXTERNAL MODULE: ./src/components/AccountSelector.vue?vue&type=style&index=0&id=598fccf1&scoped=true&lang=css&
var AccountSelectorvue_type_style_index_0_id_598fccf1_scoped_true_lang_css_ = __webpack_require__("c02b");

// CONCATENATED MODULE: ./src/components/AccountSelector.vue






/* normalize component */

var AccountSelector_component = normalizeComponent(
  components_AccountSelectorvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  "598fccf1",
  null
  
)

AccountSelector_component.options.__file = "AccountSelector.vue"
/* harmony default export */ var components_AccountSelector = (AccountSelector_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"6ce9ed87-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/ContactList.vue?vue&type=template&id=62deaed0&scoped=true&
var ContactListvue_type_template_id_62deaed0_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"contact-list"},[(_vm.contacts.length > 3)?[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.searchTerm),expression:"searchTerm"}],ref:"search",staticClass:"nq-input search-field",attrs:{"type":"text","placeholder":"Search..."},domProps:{"value":(_vm.searchTerm)},on:{"input":function($event){if($event.target.composing){ return; }_vm.searchTerm=$event.target.value}}})]:_vm._e(),_c('div',{staticClass:"list"},[(_vm.isAddingNewContact)?_c('span',[_vm._v("New contact:")]):_vm._e(),(_vm.isAddingNewContact)?_c('NewContact',{ref:"newContact",on:{"abort":_vm.abortNewContact,"set":_vm.setContact}}):_vm._e(),_vm._l((_vm.filteredContacts),function(contact){return _c('Contact',{key:contact.address,attrs:{"address":contact.address,"label":contact.label,"show-options":_vm.isManaging,"abort-trigger":_vm.abortTrigger},on:{"select":_vm.selectContact,"change":_vm.changeContact,"delete":_vm.deleteContact}})}),(!_vm.filteredContacts.length && !_vm.searchTerm)?_c('div',{staticClass:"no-contacts"},[_c('i',{staticClass:"material-icons"},[_vm._v("face")]),_vm._v("\n            Use the menu to add contacts\n        ")]):_vm._e(),(!_vm.filteredContacts.length && _vm.searchTerm)?_c('div',{staticClass:"no-contacts"},[_c('i',{staticClass:"material-icons"},[_vm._v("face")]),_vm._v("\n            No matches found\n        ")]):_vm._e()],2),_c('label',{ref:"importLabel",staticClass:"file-import"},[_c('input',{ref:"importInput",attrs:{"type":"file"},on:{"change":_vm.loadFile}})])],2)}
var ContactListvue_type_template_id_62deaed0_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/ContactList.vue?vue&type=template&id=62deaed0&scoped=true&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es7.array.includes.js
var es7_array_includes = __webpack_require__("6762");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.string.includes.js
var es6_string_includes = __webpack_require__("2fdb");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es7.symbol.async-iterator.js
var es7_symbol_async_iterator = __webpack_require__("ac4d");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.symbol.js
var es6_symbol = __webpack_require__("8a81");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.search.js
var es6_regexp_search = __webpack_require__("386d");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"6ce9ed87-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Contact.vue?vue&type=template&id=df817c1a&
var Contactvue_type_template_id_df817c1a_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"contact",on:{"click":_vm.select}},[_c('Identicon',{class:{ 'small': !_vm.isEditing && !_vm.showOptions },attrs:{"address":_vm.isEditing ? _vm.workingAddress : _vm.address}}),(!_vm.isEditing)?_c('div',{staticClass:"info"},[_c('span',{staticClass:"label"},[_vm._v(_vm._s(_vm.label))]),_c('Address',{attrs:{"address":_vm.address}}),(_vm.showOptions)?_c('div',{staticClass:"bottom"},[_c('button',{staticClass:"nq-button-s",attrs:{"title":"Edit contact"},on:{"click":function($event){$event.stopPropagation();return _vm.edit($event)}}},[_c('i',{staticClass:"material-icons"},[_vm._v("edit")])]),_c('button',{staticClass:"nq-button-s red",attrs:{"title":"Delete contact"},on:{"click":function($event){$event.stopPropagation();return _vm.remove($event)}}},[_c('i',{staticClass:"material-icons"},[_vm._v("delete")])])]):_vm._e()],1):_vm._e(),(_vm.isEditing)?_c('div',{staticClass:"info"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.workingLabel),expression:"workingLabel"}],ref:"labelInput",staticClass:"nq-input label",attrs:{"type":"text","placeholder":"Name"},domProps:{"value":(_vm.workingLabel)},on:{"input":function($event){if($event.target.composing){ return; }_vm.workingLabel=$event.target.value}}}),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.workingAddress),expression:"workingAddress"}],staticClass:"nq-input address-input",attrs:{"type":"text","placeholder":"Address"},domProps:{"value":(_vm.workingAddress)},on:{"input":function($event){if($event.target.composing){ return; }_vm.workingAddress=$event.target.value}}}),_c('div',{staticClass:"bottom"},[_c('button',{staticClass:"nq-button-s light-blue",attrs:{"disabled":!_vm.isInputValid(),"title":"Save changes"},on:{"click":function($event){$event.stopPropagation();return _vm.save($event)}}},[_c('i',{staticClass:"material-icons"},[_vm._v("check")])]),_c('button',{staticClass:"nq-button-s",attrs:{"title":"Abort"},on:{"click":function($event){$event.stopPropagation();return _vm.abort($event)}}},[_c('i',{staticClass:"material-icons"},[_vm._v("close")])])])]):_vm._e()],1)}
var Contactvue_type_template_id_df817c1a_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Contact.vue?vue&type=template&id=df817c1a&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"6ce9ed87-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Address.vue?vue&type=template&id=dd620aac&scoped=true&
var Addressvue_type_template_id_dd620aac_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"address",on:{"click":_vm.copy}},[_c('span',[_vm._v(_vm._s(_vm.address ? _vm.userFriendlyAddress : 'Invalid address'))]),_c('div',{staticClass:"copied-cover"},[_vm._v("Copied!")])])}
var Addressvue_type_template_id_dd620aac_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Address.vue?vue&type=template&id=dd620aac&scoped=true&

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
// EXTERNAL MODULE: ./src/components/Address.vue?vue&type=style&index=0&id=dd620aac&scoped=true&lang=css&
var Addressvue_type_style_index_0_id_dd620aac_scoped_true_lang_css_ = __webpack_require__("3e17");

// CONCATENATED MODULE: ./src/components/Address.vue






/* normalize component */

var Address_component = normalizeComponent(
  components_Addressvue_type_script_lang_ts_,
  Addressvue_type_template_id_dd620aac_scoped_true_render,
  Addressvue_type_template_id_dd620aac_scoped_true_staticRenderFns,
  false,
  null,
  "dd620aac",
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
  Contactvue_type_template_id_df817c1a_render,
  Contactvue_type_template_id_df817c1a_staticRenderFns,
  false,
  null,
  null,
  null
  
)

Contact_component.options.__file = "Contact.vue"
/* harmony default export */ var components_Contact = (Contact_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"6ce9ed87-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/NewContact.vue?vue&type=template&id=468cf7ec&
var NewContactvue_type_template_id_468cf7ec_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"contact"},[_c('Identicon',{attrs:{"address":_vm.workingAddress}}),_c('div',{staticClass:"info"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.workingLabel),expression:"workingLabel"}],ref:"labelInput",staticClass:"nq-input label",attrs:{"type":"text","placeholder":"Name"},domProps:{"value":(_vm.workingLabel)},on:{"input":function($event){if($event.target.composing){ return; }_vm.workingLabel=$event.target.value}}}),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.workingAddress),expression:"workingAddress"}],staticClass:"nq-input address-input",attrs:{"type":"text","placeholder":"Address"},domProps:{"value":(_vm.workingAddress)},on:{"input":function($event){if($event.target.composing){ return; }_vm.workingAddress=$event.target.value}}}),_c('div',{staticClass:"bottom"},[_c('button',{staticClass:"nq-button-s light-blue",attrs:{"disabled":!_vm.isInputValid,"title":"Save changes"},on:{"click":function($event){$event.stopPropagation();return _vm.save($event)}}},[_c('i',{staticClass:"material-icons"},[_vm._v("check")])]),_c('button',{staticClass:"nq-button-s",attrs:{"title":"Abort"},on:{"click":function($event){$event.stopPropagation();return _vm.abort($event)}}},[_c('i',{staticClass:"material-icons"},[_vm._v("close")])])])])],1)}
var NewContactvue_type_template_id_468cf7ec_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/NewContact.vue?vue&type=template&id=468cf7ec&

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

__decorate([Emit()], NewContactvue_type_script_lang_ts_NewContact.prototype, "set", null);

__decorate([Emit()], NewContactvue_type_script_lang_ts_NewContact.prototype, "abort", null);

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
  NewContactvue_type_template_id_468cf7ec_render,
  NewContactvue_type_template_id_468cf7ec_staticRenderFns,
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

__decorate([Emit()], ContactListvue_type_script_lang_ts_ContactList.prototype, "selectContact", null);

__decorate([Emit()], ContactListvue_type_script_lang_ts_ContactList.prototype, "setContact", null);

__decorate([Emit()], ContactListvue_type_script_lang_ts_ContactList.prototype, "removeContact", null);

__decorate([Emit()], ContactListvue_type_script_lang_ts_ContactList.prototype, "notification", null);

ContactListvue_type_script_lang_ts_ContactList = __decorate([vue_class_component_common_default()({
  components: {
    Contact: components_Contact,
    NewContact: components_NewContact
  }
})], ContactListvue_type_script_lang_ts_ContactList);
/* harmony default export */ var ContactListvue_type_script_lang_ts_ = (ContactListvue_type_script_lang_ts_ContactList);
// CONCATENATED MODULE: ./src/components/ContactList.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_ContactListvue_type_script_lang_ts_ = (ContactListvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./src/components/ContactList.vue?vue&type=style&index=0&id=62deaed0&scoped=true&lang=css&
var ContactListvue_type_style_index_0_id_62deaed0_scoped_true_lang_css_ = __webpack_require__("bc88");

// CONCATENATED MODULE: ./src/components/ContactList.vue






/* normalize component */

var ContactList_component = normalizeComponent(
  components_ContactListvue_type_script_lang_ts_,
  ContactListvue_type_template_id_62deaed0_scoped_true_render,
  ContactListvue_type_template_id_62deaed0_scoped_true_staticRenderFns,
  false,
  null,
  "62deaed0",
  null
  
)

ContactList_component.options.__file = "ContactList.vue"
/* harmony default export */ var components_ContactList = (ContactList_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"6ce9ed87-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/MigrationWelcome.vue?vue&type=template&id=48e56bac&scoped=true&
var MigrationWelcomevue_type_template_id_48e56bac_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('SmallPage',[_c('PageHeader',{attrs:{"backArrow":_vm.page > 1,"progressIndicator":"","numberSteps":3,"step":_vm.page},on:{"back":function($event){_vm.page -= 1}}},[_vm._v("\n        "+_vm._s(_vm.title)+"\n        "),_c('p',{staticClass:"nq-notice info",attrs:{"slot":"more"},domProps:{"innerHTML":_vm._s(_vm.notice)},slot:"more"})]),(_vm.page === 1)?_c('PageBody',{staticClass:"right-aligned"},[_c('div',{staticClass:"text"},[_c('p',{staticClass:"nq-text"},[_vm._v("\n                Handling multiple Addresses is now convenient and easy – with one password and shared login information.\n            ")]),_c('p',{staticClass:"nq-text"},[_c('strong',[_vm._v("Accounts")]),_vm._v(" hold, manage and aggregate Addresses.\n            ")]),_c('p',{staticClass:"nq-text"},[_c('strong',[_vm._v("Addresses")]),_vm._v(" send and receive transactions.\n            ")])]),_c('div',{staticClass:"visual address-ring"},[_c('svg',{attrs:{"width":"127","height":"267","viewBox":"0 0 127 267","fill":"none","xmlns":"http://www.w3.org/2000/svg"}},[_c('path',{attrs:{"d":"M94.8 175.1l-20-33.8a8 8 0 0 0-6.9-3.9H28.1a8 8 0 0 0-7 4L1.4 175a7.7 7.7 0 0 0 0 7.8l19.9 33.8a8 8 0 0 0 6.9 4h39.8a8 8 0 0 0 7-4L94.6 183a7.6 7.6 0 0 0 0-7.8z","fill":"url(#paint0_radial)"}}),_c('mask',{attrs:{"id":"a","mask-type":"alpha","maskUnits":"userSpaceOnUse","x":"0","y":"137","width":"96","height":"84"}},[_c('path',{attrs:{"d":"M94.8 175.1l-20-33.8a8 8 0 0 0-6.9-3.9H28.1a8 8 0 0 0-7 4L1.4 175a7.7 7.7 0 0 0 0 7.8l19.9 33.8a8 8 0 0 0 6.9 4h39.8a8 8 0 0 0 7-4L94.6 183a7.6 7.6 0 0 0 0-7.8z","fill":"url(#paint1_radial)"}})]),_c('g',{attrs:{"mask":"url(#a)","fill-rule":"evenodd","clip-rule":"evenodd"}},[_c('path',{attrs:{"d":"M48.3 155.8c13 0 23.5 10.3 23.5 23A23.3 23.3 0 0 1 48.3 202c-13 0-23.6-10.4-23.6-23.1a23.3 23.3 0 0 1 23.6-23.1z","fill":"#E9B213"}}),_c('path',{attrs:{"opacity":".2","d":"M71.3 178.9a23 23 0 0 1-23.2 22.8c-6.1 0-12-2.4-16.3-6.6 6.1 1.4 21.2 1.8 29.4-8.2 6-7.2 4.8-19.2 2.4-25 5 4.3 7.8 10.5 7.7 17z","fill":"#010101"}}),_c('path',{attrs:{"d":"M50.5 157.7c-.5.4-.8 1-1 1.5-.7 1.2.5 4 4 4.6 3.6.6 6.5 1.2 7.1-1.7.6-2.9-7.9-4.8-10.1-4.4z","fill":"#0582CA"}}),_c('path',{attrs:{"d":"M49.9 158.5l11.3-14.9-2.1 17.2c-.8 3.6-11.4 3.6-9.2-2.3z","fill":"#fff"}}),_c('path',{attrs:{"d":"M49.9 158.5c4.8 3.6 7.8-2.7 9-11.7l2.3-3.2-2.1 17.2c-.8 3.6-11.4 3.6-9.2-2.3z","fill":"#0582CA"}}),_c('path',{attrs:{"d":"M56.5 149.8s1.2 2.4 3.8 1l.2-1.3s-2 1.2-3.3-.6l-.7.9zM54 153s2 4.5 5.8 1.6l.1-1.2c-1.9 1-3.7.8-5.3-1.3l-.6 1zm5.3 5.7s-5.8 4-8.2-2l.8-1s2.7 4.7 7.5 1.8l-.1 1.2z","fill":"#0582CA"}}),_c('path',{attrs:{"d":"M16.7 173.7l1.4 13.8-1.4 1.2v1.9s0 1 1.4 1.3c1.5.3 4.2 1.2 8.4.8 2.2-.1 4.4-.7 6.4-1.6.6-.3 1-.8 1-1.5l-.4-2-1.5-1.2-1.4-13.3","fill":"#fff"}}),_c('path',{attrs:{"d":"M18.1 173.8l1.5 13.7-2.2 1.7s0 .8 3 1.2c3.9 1.2 10.3 0 12.2-1.1 1.5-.6.3-1.2.3-1.2l-1.4-1.7-1.5-13.2-11.9.6z","fill":"#E9B213"}}),_c('path',{attrs:{"d":"M23.6 172c3.9-.3 7 .2 7 1 .1.8-3 1.6-6.8 1.8-3.9.2-7-.2-7.1-1 0-.8 3-1.7 6.9-1.9z","fill":"#fff"}}),_c('path',{attrs:{"d":"M33.5 188.8c0 1-3.5 2.5-8 2.8-4.4.2-8-1-8.1-1.9 0-.9 3.5-2 8-2.2 4.4-.2 8 .3 8 1.3z","fill":"#E9B213"}}),_c('path',{attrs:{"d":"M28.5 185.8a1 1 0 0 1-1.2-.8l-.6-7.5c0-.5.4-1 1-1 .5 0 1 .3 1 .9l.6 7.5c0 .5-.3.9-.8.9zm-3.5.6a1 1 0 0 1-1.1-.8l-.7-7.5c0-.6.4-1 1-1 .5 0 1 .3 1 .8l.7 7.6c0 .5-.4.9-1 .9zm-3.5 0a1 1 0 0 1-1.1-.8l-.7-7.5c0-.6.5-1 1-1 .6 0 1 .3 1.2.8l.5 7.6c0 .5-.4.9-.9.9z","fill":"#FFD22D"}}),_c('path',{attrs:{"d":"M18.6 174.8s-4.8 1.2-4-2.6c0 0-3-3.2.7-3.2 0 0 .7-2.5 3.5 0 0 0 3-4.4 5.8.7 0 0 2.2-2.6 3.6 1.3 0 0 4.5 1.3 1.2 2.9a19.2 19.2 0 0 1-10.8.9z","fill":"#fff"}}),_c('path',{attrs:{"d":"M19.3 174.5s-4 1-3.4-2c0 0-2.4-2.5.6-2.5 0 0 .6-2 3 0 0 0 2.5-3.5 5 .5 0 0 1.8-2 3 1 0 0 3.8 1.2 1 2.3a18.1 18.1 0 0 1-9.2.7z","fill":"#FFEFAE"}}),_c('path',{attrs:{"d":"M23.4 172.2s1.5-.4 1-1.7c0 .1 1.3 1.1-1 1.7zm-6.1-.8a2 2 0 0 0 2.2-.2s-.4 1.5-2.2.2zm2.1-.6a2.4 2.4 0 0 0 2.8 1.5s-2 1.4-2.8-1.5zm6-1s1-.2 1 1.6c0 1.7-1.8 2.2-1.8 2.2s.5-.5 1.1 0c.7.6-.8 1-.8 1s3.7-.1 5-1.4c1.4-1.3-2-1.8-2-1.8s0-1.8-2.5-1.5z","fill":"#03A9F4"}}),_c('path',{attrs:{"d":"M60.6 179.2s0-6.4 3.3-6.4c3.2 0 3.2 6.1 3.2 6.1s-2.7-6.1-6.5.3zm-14.1.2s0-6.9 3.5-6.9c3.6 0 3.6 6.7 3.6 6.7s-3-6.7-7.1.2z","fill":"#010101"}}),_c('path',{attrs:{"d":"M45.3 182h22.6s-.7 13.3-11.5 13.3c-3 .2-5.7-1-7.6-3.3-3.4-4-3.5-10-3.5-10z","fill":"#603813"}}),_c('path',{attrs:{"d":"M64.8 190.9a9.8 9.8 0 0 1-8.4 4.2c-3 .1-5.7-1-7.6-3.3-3.4-4 18.8-4.8 16-1z","fill":"#F15A24"}}),_c('path',{attrs:{"d":"M45.3 181.8h22.6c0 1.4-.3 2.8-.8 4.2 0 0-13.3 2.4-21.1-.2-.4-1.3-.6-2.7-.7-4z","fill":"#fff"}}),_c('path',{attrs:{"d":"M27.6 211.8h44.2s3.5 0 4.1-1.3c.6-1.2.6 2-4 2.6-4.8.7-39.6 0-44.3 0-4.7 0-5.3-1.3 0-1.3z","fill":"#444"}}),_c('path',{attrs:{"d":"M21.2 212.6h44.1s3.6 0 4.2-1.3c.5-1.3.5 1.9-4.2 2.6-4.7.7-39.4 0-44.1 0h-1.3l-1-1.2 2.3-.1z","fill":"#919191"}}),_c('path',{attrs:{"d":"M48.2 200.7L41.9 211s-.6 1.5 5.8 1.5H61s3.2-3 1.3-4.5c-1.9-1.5-7-2-7-2l5-8s-4.4 3-12.1 2.8z","fill":"#1F2348"}}),_c('path',{attrs:{"d":"M38.6 199.2L31.8 211s-.6 1.5 5.7 1.5H51s3.2-3 1.3-4.5c-1.9-1.5-7-2-7-2l4.5-5c-.1 0-4.6.5-11.1-1.7z","fill":"#464D8A"}}),_c('path',{attrs:{"d":"M54 203l4.9 1.1.2.4v.3l-.4.2-4.8-1.1c-.2 0-.2-.2-.2-.4v-.3l.4-.2zm1-1.8l4.7 1.1c.2 0 .3.2.3.4v.3l-.4.2-4.8-1.1c-.2 0-.3-.2-.3-.4l.1-.2c0-.2.2-.3.4-.3zm-11 2.4l4.8 1.1c.2 0 .3.2.3.3v.3c-.1.2-.3.3-.4.3l-4.8-1.1c-.2 0-.2-.2-.2-.4v-.3l.4-.2zm1-1.8l4.7 1.1c.2 0 .3.2.3.4l-.1.2c0 .2-.2.3-.4.3l-4.7-1.1c-.2 0-.3-.2-.3-.4v-.3l.4-.2z","fill":"#03A9F4"}})]),_c('path',{attrs:{"opacity":".1","d":"M173.7 220.9L153.8 187a8 8 0 0 0-6.9-4h-39.8a8 8 0 0 0-7 4l-19.8 33.8a7.7 7.7 0 0 0 0 7.8l19.9 33.8a8 8 0 0 0 6.9 3.9h39.8a8 8 0 0 0 7-4l19.8-33.7a7.6 7.6 0 0 0 0-7.8z","fill":"url(#paint2_radial)"}}),_c('path',{attrs:{"d":"M94.8 83.6L74.8 50a8 8 0 0 0-6.9-4H28.1a8 8 0 0 0-7 4L1.4 83.6a7.7 7.7 0 0 0 0 7.8l19.9 33.8a8 8 0 0 0 6.9 4h39.8a8 8 0 0 0 7-4l19.8-33.8a7.6 7.6 0 0 0 0-7.8z","fill":"url(#paint3_radial)"}}),_c('mask',{attrs:{"id":"b","mask-type":"alpha","maskUnits":"userSpaceOnUse","x":"0","y":"45","width":"96","height":"85"}},[_c('path',{attrs:{"d":"M94.8 83.6L74.8 50a8 8 0 0 0-6.9-4H28.1a8 8 0 0 0-7 4L1.4 83.6a7.7 7.7 0 0 0 0 7.8l19.9 33.8a8 8 0 0 0 6.9 4h39.8a8 8 0 0 0 7-4l19.8-33.8a7.6 7.6 0 0 0 0-7.8z","fill":"#E9B213"}})]),_c('g',{attrs:{"mask":"url(#b)","clip-rule":"evenodd"}},[_c('path',{attrs:{"fill-rule":"evenodd","d":"M50.2 64.3c13 0 23.6 10.3 23.6 23a23.3 23.3 0 0 1-23.6 23.2c-13 0-23.5-10.4-23.5-23.1a23.3 23.3 0 0 1 23.5-23.1z","fill":"#FB8C00"}}),_c('path',{attrs:{"opacity":".2","fill-rule":"evenodd","d":"M73.3 87.4a23 23 0 0 1-23.2 22.8c-6.1 0-12-2.4-16.3-6.6 6 1.4 21.2 1.8 29.3-8.2 6.1-7.2 5-19.2 2.5-25 5 4.3 7.7 10.5 7.7 17z","fill":"#010101"}}),_c('path',{attrs:{"fill-rule":"evenodd","d":"M52.5 66.2c-.5.5-.9 1-1.1 1.5-.6 1.2.6 4 4.1 4.7 3.6.5 6.5 1.1 7-1.8.7-2.9-7.8-4.7-10-4.4z","fill":"#1F2348"}}),_c('path',{attrs:{"fill-rule":"evenodd","d":"M51.9 67l11.3-14.9s-2 15.5-2.1 17.3c-.9 3.5-11.5 3.5-9.2-2.4z","fill":"#fff"}}),_c('path',{attrs:{"fill-rule":"evenodd","d":"M51.9 67c4.8 3.6 7.7-2.7 8.9-11.7l2.4-3.2s-2 15.5-2.1 17.3c-.9 3.5-11.5 3.5-9.2-2.4z","fill":"#1F2348"}}),_c('path',{attrs:{"fill-rule":"evenodd","d":"M58.5 58.3s1.2 2.4 3.8 1l.1-1.3s-2 1.2-3.3-.6l-.6.9zM56 61.5s2.1 4.5 5.8 1.6L62 62c-2 .9-3.7.7-5.3-1.4l-.7 1zm5.3 5.7s-5.8 4-8.1-2l.7-1s2.8 4.7 7.6 1.8l-.2 1.2z","fill":"#1F2348"}}),_c('path',{attrs:{"fill-rule":"evenodd","d":"M17.6 80.4s-2.8.2-3.8.7c-.3.2-.3.7 0 1a14 14 0 0 1 4.8 6.3c2 4.9 2 9.6 8.1 11.8 6.1 2.1 8.7 0 8.7 0s4.2-5.3-.5-10.4c0 0-1-.9-2.7-.3-2.2.7-4.5 1-7-3.3-2.4-4.4-3.6-6.3-7.6-5.8zM80 77.6c-1.3-1.2-9.2-.3-9.2-.3l.5 1 1.4 2.9c1.5-.6 3-1.1 4.6-1.4 0 0 1.1 11 0 12.2-1.3 1.2-5 1.9-5 1.9l-.4 1-.6 1.5s10 .8 10-6.1c.4-9.4.4-11.3-1.3-12.7z","fill":"#FB8C00"}}),_c('path',{attrs:{"fill-rule":"evenodd","d":"M14.8 82.7c2.7 2.4 3.4 4.6 3.8 5.7 2 4.9 2 9.6 8.1 11.8 6.1 2.1 8.7 0 8.7 0s3.2-3.5 1-8.1c0 0 2.3 6.3-4.6 6.3-3.2 0-6.2-.5-8.6-3.5-3.1-3.9-4.6-10.9-8.4-12.2z","fill":"#1F2348"}}),_c('path',{attrs:{"fill-rule":"evenodd","d":"M17.6 80.4c2-.1 3.8.2 3.8.8 0 .5-1.6 1-3.7 1.2-2 .1-3.8-.2-3.8-.8 0-.5 1.6-1 3.7-1.2z","fill":"#fff"}}),_c('path',{attrs:{"fill-rule":"evenodd","d":"M17.8 80.9c1.5-.1 2.8 0 2.8.3s-1.2.6-2.8.7c-1.6 0-2.8 0-2.9-.3 0-.3 1.3-.6 2.9-.7z","fill":"#1F2348"}}),_c('path',{attrs:{"fill-rule":"evenodd","d":"M20.6 81.2c.3.5-2.8.7-2.8.7.2-.6.2-1 0-1 0 0 2.5-.2 2.8.3z","fill":"#010101"}}),_c('path',{attrs:{"fill-rule":"evenodd","d":"M77.4 79.8s1.1 11 0 12.2c-1.3 1.2-5 1.9-5 1.9l-.4 1s5.2-.7 6.5-2.4c1.2-1.6.6-10.3.6-10.3s.1-3-1.7-2.4z","fill":"#1F2348"}}),_c('path',{attrs:{"fill-rule":"evenodd","d":"M71 77.3s8.5-1 9.4.5c-1.3-.4-3.6-.2-5.2 0l-3.8.5-.5-1zM29.8 90.3c3.1.6 5.4 0 6.2 1l-1-1.5c-.2 0-1.2-.9-2.8-.3-6.4 2.3-6.8-5.5-10.4-8.2 3.6 4.1 3.4 8.1 8 9z","fill":"#fff"}}),_c('path',{attrs:{"fill-rule":"evenodd","d":"M64.8 99.6a8.8 8.8 0 0 1-6.6 2.9H58c-2.5 0-4.9-1-6.5-3-1.8-1.8-3-4.9-3-6.3 0-1.2 2.1.4 7.3.8h2.5c4.6 0 7.5-1.4 8-1.7.6-.3 1.5-.4 1.5 1 0 1.2-1.3 4.4-3 6.3z","fill":"#1F2348"}}),_c('path',{attrs:{"fill-rule":"evenodd","d":"M51.6 80c2-.1 3.8 2 4 4.8 0 2.7-1.4 5-3.5 5.1-2 .1-3.7-2-3.9-4.7-.1-2.8 1.4-5 3.4-5.2z","fill":"#fff"}}),_c('path',{attrs:{"fill-rule":"evenodd","d":"M52 82.7c1.1 0 2.1 1.1 2.1 2.5 0 1.5-1 2.6-2.2 2.6-1.2 0-2.2-1.1-2.2-2.6 0-1.4 1-2.5 2.2-2.5z","fill":"#1F2348"}}),_c('path',{attrs:{"fill-rule":"evenodd","d":"M50.5 82.7c.7 0 1.2.5 1.2 1.2 0 .6-.5 1.1-1.2 1.1-.6 0-1.2-.5-1.2-1.1 0-.7.6-1.2 1.2-1.2z","fill":"#fff"}}),_c('path',{attrs:{"fill-rule":"evenodd","d":"M48.9 80c2-2.3 4-2.3 6 0 0 0-2.7-5.5-6 0z","fill":"#1F2348"}}),_c('path',{attrs:{"fill-rule":"evenodd","d":"M65.1 80c2 0 3.8 2 4 4.8.1 2.8-1.4 5-3.4 5.2-2 0-3.8-2-4-4.8 0-2.7 1.4-5 3.4-5.1z","fill":"#fff"}}),_c('path',{attrs:{"fill-rule":"evenodd","d":"M65.5 82.7c1.2 0 2.2 1.1 2.2 2.5 0 1.5-1 2.6-2.2 2.6-1.2 0-2.2-1.1-2.2-2.6 0-1.4 1-2.5 2.2-2.5z","fill":"#1F2348"}}),_c('path',{attrs:{"fill-rule":"evenodd","d":"M64 82.7c.7 0 1.2.5 1.2 1.2 0 .6-.5 1.1-1.1 1.1-.7 0-1.2-.5-1.2-1.1 0-.7.5-1.2 1.2-1.2z","fill":"#fff"}}),_c('path',{attrs:{"fill-rule":"evenodd","d":"M62.4 80c2-2.3 4.1-2.3 6.1 0 0 0-2.8-5.5-6 0z","fill":"#1F2348"}}),_c('path',{attrs:{"fill-rule":"evenodd","d":"M43.3 79.9h-1v2.3h1c.6.2 1 .7 1 1.3v3.3s0 4.7 7 4.6c0 0-5 0-5.8-4.8v-3.1c0-.5-.4-1-.8-1l-1.1-.3-.3-2.3z","fill":"#DD6901"}}),_c('path',{attrs:{"d":"M43.3 79.9v2.3l1.2.1c.5.2.8.6.8 1v3.2s.6 5.2 6.4 4.9c5.8-.3 6-5.7 6-5.7s0-3.8 1.3-3.8 1.4 3.8 1.4 3.8.2 5.7 6 5.7c5.9 0 6-5 6-5v-3.3c0-.4.4-.7.9-.7h1V80H61.6c-.4.1-.8.3-1.1.7L59 81.8l-1.3-1.2a2 2 0 0 0-1.6-.6L43.3 80z","stroke":"#1F2348"}}),_c('path',{attrs:{"fill-rule":"evenodd","d":"M56.2 97l-.1-2.6c1.9.3 3.9.2 5.8-.2l.2 2.4c0 .3-.2.4-.4.5l-2.4.2-.2-2-.2 2h-2.3c-.3 0-.4-.2-.4-.4z","fill":"#fff"}}),_c('path',{attrs:{"fill-rule":"evenodd","d":"M50.2 112.1c10.4 0 18.9 2.3 18.9 5 0 2.8-8.5 5-18.9 5-10.4 0-18.8-2.2-18.8-5 0-2.7 8.4-5 18.8-5z","fill":"#1F2348"}})]),_c('path',{attrs:{"d":"M173.7 38L153.8 4A8 8 0 0 0 147 .2h-39.8a8 8 0 0 0-7 4L80.4 37.8a7.7 7.7 0 0 0 0 7.8l19.9 33.8a8 8 0 0 0 6.9 3.9h39.8a8 8 0 0 0 7-4l19.8-33.7a7.6 7.6 0 0 0 0-7.8z","fill":"url(#paint4_radial)"}}),_c('mask',{attrs:{"id":"c","mask-type":"alpha","maskUnits":"userSpaceOnUse","x":"79","y":"0","width":"96","height":"84"}},[_c('path',{attrs:{"d":"M173.7 38L153.8 4A8 8 0 0 0 147 .2h-39.8a8 8 0 0 0-7 4L80.4 37.8a7.7 7.7 0 0 0 0 7.8l19.9 33.8a8 8 0 0 0 6.9 3.9h39.8a8 8 0 0 0 7-4l19.8-33.7a7.6 7.6 0 0 0 0-7.8z","fill":"url(#paint5_radial)"}})]),_c('g',{attrs:{"mask":"url(#c)"}},[_c('path',{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M127.6 18.2c13 0 23.5 10.4 23.5 23.1a23.3 23.3 0 0 1-23.5 23.2c-13 0-23.6-10.4-23.6-23.2a23.3 23.3 0 0 1 23.6-23z","fill":"#21BCA5"}}),_c('path',{attrs:{"opacity":".2","fill-rule":"evenodd","clip-rule":"evenodd","d":"M150.7 41.3a23 23 0 0 1-23.3 22.8c-6 0-12-2.3-16.3-6.5 6.1 1.3 21.2 1.7 29.4-8.3 6-7.2 4.9-19.2 2.4-25 5 4.4 7.8 10.6 7.8 17z","fill":"#010101"}}),_c('path',{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M127.9 20s-2.1-10.4-4.3-13.2c-.1 0-1-.2-2.4.4l-.1.1s1.5 1.5 5.3 12.6c0 0 1.5.8 1.5 0z","fill":"#E9B213"}}),_c('path',{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M122.4 6.7c.7 0 1.3 0 1.3.3 0 .2-.6.4-1.3.5-.7 0-1.3 0-1.3-.3 0-.2.6-.4 1.3-.5z","fill":"#F4B145"}}),_c('path',{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M126 19s.3 0 .6-.8a2 2 0 0 0-1.4-2.6c-1.2-.3-1.7-1.4-2.5-2.4s-3.8-2.7-8.8-2.6c-5 .1-6-1.7-6.4-2-.4-.4-.5 3.4 1.7 6.2 2.3 2.9 5.5 4.8 9.2 3 3.7-1.9 5.5-.1 5.5-.1s1.3 1.3 2 1.3z","fill":"#D94432"}}),_c('path',{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M126 19s.3 0 .6-.8a2 2 0 0 0-1.4-2.6c-1.2-.3-1.7-1.4-2.5-2.4s-3.8-2.8-8.8-2.6c-5.8.2-6.6-2.7-6.5-2 1.7 6.7 13.5 2.5 18.5 10.4z","fill":"#010101"}}),_c('path',{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M105.7 34.8a5 5 0 0 1 .7 4.5l-.3 1.1h2.6c1.7.6 1.8 4.7.3 6l-1.8 1.2c-.5.7-3 3-5 3.7l-1.9.8c-3.5 1.4-10.2 3.4-11.3-3.8l.2-3.8c0-1.9-1-3.3.4-7 1.4-3.6 5.2-4.1 8-3.4 0 0 .5.3 1.5-1 .9-1.2 4.8-1.9 6.6 1.7z","fill":"#D8D8D8"}}),_c('path',{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M109 46.5s-4.8 4.1-6.6 4.8c-1.6.6-9.6 4.7-12.4-.3-.4-.8-.7-1.7-.9-2.7.5 1.3 3.4 2.5 6.2 2.5 4 .2 6.6-2.5 9-2 1.5-1 3.1-1.7 4.8-2.3z","fill":"#010101"}}),_c('path',{attrs:{"d":"M100.8 36.8a.3.3 0 0 0 .5-.2l-.5.2zm-6-22.1a.3.3 0 0 0-.5.1l.5-.1zm12 18a.2.2 0 1 0 .4-.1l-.5.1zM99.4 6.6a.2.2 0 1 0-.5.1l.5-.1zm4.9 29.6a.2.2 0 1 0 .4-.1l-.4.1zm-7-25.6a.3.3 0 0 0-.4.2l.5-.2zm11.4 4.4a.3.3 0 0 0-.2-.5l.2.5zm-19 10a.3.3 0 0 0 .2.4l-.3-.5zm17.9-14a.3.3 0 0 0-.3-.5l.3.4zm-16.2 8.2a.2.2 0 1 0 .3.4l-.3-.4zm18 9V28h-.3l.2.4zm-13.3 7.1a.3.3 0 1 0 .3.5l-.3-.5zM104.7 8c.1 0 .2-.2.1-.3 0-.1-.2-.2-.3 0l.2.3zM95 12.8a.3.3 0 0 0 .3.4l-.3-.4zm6.3 23.8l-6.5-22-.5.2 6.5 22 .5-.2zm5.9-4l-7.7-26-.5.1 7.7 26 .5-.1zm-2.4 3.5l-7.3-25.5-.5.2 7.4 25.4.4-.1zm3.8-21.6L89.7 25l.3.5L108.8 15l-.2-.5zm-1.2-4l-15.9 8.7.3.4 15.9-8.7-.3-.4zm1.8 17.3l-13 7.5.3.5 13-7.5-.3-.5zm-4.7-20.2L95 12.8l.3.4 9.4-5.2-.2-.4z","fill":"#000"}}),_c('path',{attrs:{"d":"M109.3 28.6l-7-23.7","stroke":"#000","stroke-width":".5"}}),_c('path',{attrs:{"d":"M111.8 22.5v-.3c0-.2-.1-.2-.3-.1l.3.4zm-19.1 10a.2.2 0 1 0 .2.4l-.2-.4zM110 19a.2.2 0 1 0-.2-.4l.2.4zM91 29a.3.3 0 0 0 .2.4l-.3-.4zm5.7 5.5a.3.3 0 1 0 .5-.2l-.5.2zm-4.2-16.3a.3.3 0 0 0-.5.1l.5-.1zm19 3.9L92.7 32.5l.2.4 18.9-10.4-.3-.4zm-1.7-3.5L90.9 29l.3.4L110 19l-.2-.4zM97.2 34.3l-4.7-16.1-.5.1 4.7 16.2.5-.2z","fill":"#000"}}),_c('path',{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M102.2 55l.3 4s.4 1.2-.6 1.5c-1 .2 3.6.2 3-1.5 0-.7-.5-1.2-1.2-1.2l-.2-2.8h-1.3z","fill":"#F06292"}}),_c('path',{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M100.7 34.7c-5.2.4-10-5-11.1-12C93.4 15.8 98 8.3 99 6.3c5.3.2 9.8 6 10.4 13.3.8 7.8-3.3 14.5-8.8 15zm0 8.7L97.9 37s1.8 2.3 5.3 0l-2.3 6.4zm10.7-27.8c-1-5.3-5.7-10.3-10.6-11.2-1-.2-8.6 14.4-13.1 21.6.8 2.5 2.3 4.8 5.4 8.7 5.3 8 6.5 8.7 7 16.2l.7 7s-.6 0-.6 1c0 1.2 1.2 1.8 2.3 1.8 1.2 0 2.4-.6 2.4-1.7 0-.7-.5-1.2-1.2-1.2l-.6-7s-.3-11.6 4.7-17.8c5-6.2 4.7-11 3.6-17.4z","fill":"#D94432"}}),_c('path',{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M100.5 4.6c1.8.1 3.4 1.4 4.7 2.7 3.5 3.4 4.7 5.7 5.3 12 .6 6.4-2 12-4.4 14.2-2.4 2.4-8.3 3.5-8.3 3.5.9.5 2 .7 3 .6l2.4-.8 1.7 1.4c1-2 2-4 3.4-5.8 1.9-2.3 4-6 3.8-11.2-.2-5.2-1.7-14.3-11.3-16.8l-.3.2z","fill":"#010101"}}),_c('path',{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M101.1 51.8c-3.3 1.4-10.8 4.2-12-3.5l.2-3.9c.2-1.9-.8-3.3.5-7 1.4-3.6 1.4-3.6 8-3.4 6 .2 3.1 9.4 4.3 15.7 0 .6-.5 1.9-1 2.1z","fill":"#fff"}}),_c('path',{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M102.4 51.3c1.8-.4-12 6-13.3-3l.2-3.8c0-2-1-3.3.4-7 1.4-3.6 5.2-4.2 8-3.4-8.7.5-4.9 18.4 4.7 17.2z","fill":"#D94432"}}),_c('path',{attrs:{"d":"M125.3 45.6s1.6 7.7 10.8 7.3c9.4-.5 9.7-7.9 9.7-7.9","stroke":"#1F2348","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}}),_c('path',{attrs:{"d":"M125 34.5c2 0 4.2 1.2 5 3.6-1.8-1.2-2.4-1.6-5.2-.3","stroke":"#1F2348","stroke-width":"2.5","stroke-linecap":"round","stroke-linejoin":"round"}}),_c('path',{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M116.4 61.4c3.9 4 9.8 7.6 15.6 9.3-4.1 1.4-4.7 3.7-5.6 7 0 0 9-1.9 10-4.4 0 0 3.5 4 10.6 3.3-1.3-3.3-5.3-7-10.6-7.8-1.6 0-2.5-3.9 1.8-7.2-13 5-21.8-.2-21.8-.2z","fill":"#21BCA5"}}),_c('path',{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M132 70.7c-3.8 1.2-4.8 3.8-5.6 7 0 0 9-1.9 10-4.4 0 0 3.5 4 10.6 3.3-1.3-3.3-5.3-7-10.6-7.8 0 .3-.4.6-.3 1.3-1-.2-2.6 0-4 .6z","fill":"#D94432"}})]),_c('defs',[_c('radialGradient',{attrs:{"id":"paint0_radial","cx":"0","cy":"0","r":"1","gradientUnits":"userSpaceOnUse","gradientTransform":"matrix(-95.6281 0 0 -83.1662 95.8 220.6)"}},[_c('stop',{attrs:{"stop-color":"#41A38E"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#21BCA5"}})],1),_c('radialGradient',{attrs:{"id":"paint1_radial","cx":"0","cy":"0","r":"1","gradientUnits":"userSpaceOnUse","gradientTransform":"matrix(-95.6281 0 0 -83.1662 95.8 220.6)"}},[_c('stop',{attrs:{"stop-color":"#41A38E"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#21BCA5"}})],1),_c('radialGradient',{attrs:{"id":"paint2_radial","cx":"0","cy":"0","r":"1","gradientUnits":"userSpaceOnUse","gradientTransform":"matrix(-95.6281 0 0 -83.1662 174.8 266.4)"}},[_c('stop',{attrs:{"stop-color":"#260133"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#1F2348"}})],1),_c('radialGradient',{attrs:{"id":"paint3_radial","cx":"0","cy":"0","r":"1","gradientUnits":"userSpaceOnUse","gradientTransform":"matrix(-95.6281 0 0 -83.1662 95.8 129.1)"}},[_c('stop',{attrs:{"stop-color":"#CC3047"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#D94432"}})],1),_c('radialGradient',{attrs:{"id":"paint4_radial","cx":"0","cy":"0","r":"1","gradientUnits":"userSpaceOnUse","gradientTransform":"matrix(-95.6281 0 0 -83.1662 174.8 83.4)"}},[_c('stop',{attrs:{"stop-color":"#FD6216"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#FC8701"}})],1),_c('radialGradient',{attrs:{"id":"paint5_radial","cx":"0","cy":"0","r":"1","gradientUnits":"userSpaceOnUse","gradientTransform":"matrix(-95.6281 0 0 -83.1662 174.8 83.4)"}},[_c('stop',{attrs:{"stop-color":"#265DD7"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#0582CA"}})],1)],1)])])]):(_vm.page === 2)?_c('PageBody',{staticClass:"left-aligned"},[_c('div',{staticClass:"text"},[_c('p',{staticClass:"nq-text"},[_vm._v("\n                The new Login Files are an easy and convenient way to gain access to your Account and its Addresses.\n            ")]),_c('p',{staticClass:"nq-text"},[_vm._v("\n                Import it to any browser and enter your password to connect to Nimiq.\n            ")]),_c('p',{staticClass:"nq-text"},[_c('strong',[_c('a',{staticClass:"nq-link",attrs:{"href":_vm.link,"target":"_blank"}},[_vm._v("Learn more here "),_c('ArrowRightSmallIcon')],1)])])]),_c('div',{staticClass:"visual login-file"},[_c('svg',{attrs:{"width":"58","height":"97","viewBox":"0 0 58 97","fill":"none","xmlns":"http://www.w3.org/2000/svg"}},[_c('rect',{attrs:{"x":".59","y":".78","width":"56.81","height":"95.45","rx":"2.78","fill":"#fff"}}),_c('path',{attrs:{"d":"M1.67 3.7c0-1.01.83-1.84 1.85-1.84h50.95c1.02 0 1.85.83 1.85 1.85v89.58c0 1.02-.83 1.85-1.85 1.85H3.52a1.85 1.85 0 0 1-1.85-1.85V3.71z","fill":"url(#paint0_radial)"}}),_c('g',{attrs:{"opacity":".5","fill":"#fff"}},[_c('g',{attrs:{"clip-path":"url(#clip0)"}},[_c('path',{attrs:{"d":"M15.87 10.5l-1.02-1.77a.4.4 0 0 0-.35-.2h-2.03a.4.4 0 0 0-.35.2l-1.01 1.76a.4.4 0 0 0 0 .4l1.01 1.77c.08.13.21.2.35.2h2.03a.4.4 0 0 0 .35-.2l1.02-1.76a.4.4 0 0 0 0-.4z"}}),_c('rect',{attrs:{"x":"17.26","y":"9.14","width":"12.12","height":"3.03","rx":"1.51"}}),_c('rect',{attrs:{"x":"30.89","y":"9.14","width":"15.15","height":"3.03","rx":"1.51"}})]),_c('rect',{attrs:{"x":"21.8","y":"16.52","width":"14.39","height":"1.51","rx":".76"}})]),_c('g',{attrs:{"opacity":".5","fill":"#fff"}},[_c('path',{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M23.47 67.02h-6.62c-.61 0-1.1-.5-1.1-1.1v-6.63c0-.61.49-1.1 1.1-1.1h6.62c.62 0 1.11.49 1.11 1.1v6.63c0 .6-.5 1.1-1.1 1.1zm-5.24-6.63a.28.28 0 0 0-.28.28v3.86c0 .16.13.28.28.28h3.86c.16 0 .28-.12.28-.28v-3.86a.28.28 0 0 0-.28-.28h-3.86zM16.85 75.86h6.62c.61 0 1.1.5 1.1 1.1v6.63c0 .6-.49 1.1-1.1 1.1h-6.62c-.61 0-1.1-.49-1.1-1.1v-6.63c0-.6.49-1.1 1.1-1.1zm5.24 6.62c.16 0 .28-.12.28-.27v-3.87a.28.28 0 0 0-.28-.27h-3.86a.28.28 0 0 0-.28.27v3.87c0 .15.13.27.28.27h3.86zM34.52 58.18h6.63c.6 0 1.1.5 1.1 1.1v6.64c0 .6-.5 1.1-1.1 1.1h-6.63c-.6 0-1.1-.5-1.1-1.1v-6.63c0-.61.5-1.1 1.1-1.1zm5.25 6.63c.15 0 .27-.12.27-.28v-3.86a.28.28 0 0 0-.27-.28H35.9a.28.28 0 0 0-.27.28v3.86c0 .16.12.28.27.28h3.87z"}}),_c('path',{attrs:{"d":"M26.79 62.88h1.1a.83.83 0 1 0 0-1.66.28.28 0 0 1-.27-.28V59.3a.83.83 0 0 0-1.66 0v2.76c0 .46.37.83.83.83zM30.1 60.12c.16 0 .28.12.28.27v6.08a.83.83 0 0 0 1.66 0v-7.18a.83.83 0 0 0-.83-.83h-1.1a.83.83 0 0 0 0 1.66zM22.1 69.78c0 .46.36.83.82.83h3.87c.46 0 .83-.37.83-.83v-4.42a.83.83 0 0 0-1.66 0v3.32c0 .15-.12.27-.28.27h-2.76a.83.83 0 0 0-.83.83z"}}),_c('path',{attrs:{"d":"M19.06 68.95a.83.83 0 0 0-.83.83v2.76c0 .16-.13.28-.28.28h-1.1a.83.83 0 0 0 0 1.66H31.2c.45 0 .83-.37.83-.83v-3.32a.83.83 0 0 0-1.66 0v2.21c0 .16-.13.28-.28.28h-9.94a.28.28 0 0 1-.28-.28v-2.76a.83.83 0 0 0-.82-.83zM30.93 76.96a.83.83 0 0 0-.83-.83H26.8a.83.83 0 0 0-.83.83v4.42a.83.83 0 0 0 1.66 0v-3.31c0-.16.12-.28.27-.28h2.21c.46 0 .83-.37.83-.83zM41.15 82.76h-9.39a.28.28 0 0 1-.28-.28v-2.2a.83.83 0 0 0-1.65 0v3.31c0 .46.37.83.82.83h10.5a.83.83 0 1 0 0-1.66z"}}),_c('path',{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M37.28 80.55h-3.31a.83.83 0 0 1-.83-.83v-3.31c0-.46.37-.83.83-.83h3.31c.46 0 .83.37.83.83v3.31c0 .46-.37.83-.83.83zm-2.2-3.31a.28.28 0 0 0-.28.27v1.1c0 .16.12.28.27.28h1.1c.16 0 .28-.12.28-.27v-1.1a.28.28 0 0 0-.27-.28h-1.1z"}}),_c('path',{attrs:{"d":"M40.6 72.27a.83.83 0 0 0-.83.83v7.18a.83.83 0 1 0 1.66 0V73.1a.83.83 0 0 0-.83-.83zM41.43 69.23a.83.83 0 0 0-.83-.83h-6.08a.83.83 0 0 0-.83.83v3.31a.83.83 0 1 0 1.66 0v-2.2c0-.16.12-.28.28-.28h4.97c.45 0 .83-.37.83-.83z"}})]),_c('g',{attrs:{"opacity":".35","fill":"#fff"}},[_c('path',{attrs:{"opacity":".7","d":"M32.29 29.4l-1.57-2.72a.63.63 0 0 0-.54-.31h-3.14a.63.63 0 0 0-.54.31l-1.57 2.72a.63.63 0 0 0 0 .62l1.57 2.72c.11.2.32.31.54.31h3.14c.22 0 .43-.12.54-.31l1.57-2.72a.62.62 0 0 0 0-.62z"}}),_c('path',{attrs:{"opacity":".78","d":"M32.29 45.2l-1.57-2.72a.63.63 0 0 0-.54-.31h-3.14a.63.63 0 0 0-.54.3l-1.57 2.72a.63.63 0 0 0 0 .63l1.57 2.72c.11.2.32.31.54.31h3.14c.22 0 .43-.12.54-.31l1.57-2.72a.62.62 0 0 0 0-.63z"}}),_c('path',{attrs:{"opacity":".5","d":"M25.45 33.35l-1.57-2.72a.63.63 0 0 0-.54-.31h-3.13a.63.63 0 0 0-.54.31l-1.57 2.72a.63.63 0 0 0 0 .62l1.56 2.72c.12.2.32.31.55.31h3.13c.22 0 .43-.12.54-.31l1.57-2.72a.63.63 0 0 0 0-.62z"}}),_c('path',{attrs:{"opacity":".6","d":"M25.45 41.24l-1.57-2.71a.63.63 0 0 0-.54-.31h-3.13a.63.63 0 0 0-.54.3l-1.57 2.72a.63.63 0 0 0 0 .63l1.56 2.72c.12.2.32.31.55.31h3.13c.22 0 .43-.12.54-.31l1.57-2.72a.63.63 0 0 0 0-.63z"}}),_c('path',{attrs:{"opacity":".8","d":"M39.12 33.35l-1.56-2.72a.63.63 0 0 0-.55-.31h-3.13a.63.63 0 0 0-.54.31l-1.57 2.72a.63.63 0 0 0 0 .62l1.57 2.72c.1.2.32.31.54.31h3.13c.23 0 .43-.12.54-.31l1.57-2.72a.62.62 0 0 0 0-.62z"}}),_c('path',{attrs:{"opacity":".6","d":"M39.12 41.24l-1.56-2.71a.63.63 0 0 0-.55-.31h-3.13a.63.63 0 0 0-.54.3l-1.57 2.72a.63.63 0 0 0 0 .63l1.57 2.72c.1.2.32.31.54.31H37c.23 0 .43-.12.54-.31l1.57-2.72a.62.62 0 0 0 0-.63z"}})]),_c('defs',[_c('radialGradient',{attrs:{"id":"paint0_radial","cx":"0","cy":"0","r":"1","gradientUnits":"userSpaceOnUse","gradientTransform":"matrix(-54.6465 0 0 -93.2842 56.32 95.14)"}},[_c('stop',{attrs:{"stop-color":"#EC991C"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#E9B213"}})],1),_c('clipPath',{attrs:{"id":"clip0"}},[_c('path',{attrs:{"fill":"#fff","transform":"translate(11.05 8.53)","d":"M0 0h35.81v4.33H0z"}})])],1)])])]):(_vm.page === 3)?_c('PageBody',{staticClass:"right-aligned"},[_c('div',{staticClass:"text"},[_c('p',{staticClass:"nq-text"},[_vm._v("\n                Your Accounts are now legacy Accounts. Easily switch, edit and create Accounts with the new Account picker.\n            ")]),_c('p',{staticClass:"nq-text"},[_vm._v("\n                Account creation was massively improved. Give"),_c('br'),_vm._v("it a try and experience all new Nimiq features.\n            ")])]),_c('div',{staticClass:"visual account-menu"},[_c('svg',{attrs:{"width":"143","height":"401","viewBox":"0 0 143 401","fill":"none","xmlns":"http://www.w3.org/2000/svg"}},[_c('mask',{attrs:{"id":"a","mask-type":"alpha","maskUnits":"userSpaceOnUse","x":"0","y":"0","width":"143","height":"401"}},[_c('path',{attrs:{"d":"M0 8a8 8 0 0 1 8-8h135v393a8 8 0 0 1-8 8H0V8z","fill":"#C4C4C4"}})]),_c('g',{attrs:{"mask":"url(#a)"}},[_c('path',{attrs:{"opacity":".06","fill":"url(#paint0_linear)","d":"M-60 0h278v401H-60z"}}),_c('mask',{attrs:{"id":"b","mask-type":"alpha","maskUnits":"userSpaceOnUse","x":"0","y":"-8","width":"291","height":"326"}},[_c('path',{attrs:{"fill":"url(#paint1_linear)","d":"M0-7.34h290.28V317.1H0z"}})]),_c('g',{attrs:{"mask":"url(#b)"}},[_c('rect',{attrs:{"x":"32","y":"24","width":"340","height":"320","rx":"8","fill":"#fff","filter":"url(#filter0_d)"}}),_c('rect',{attrs:{"opacity":".06","x":"40","y":"32","width":"324","height":"80","rx":"4","fill":"#1F2348"}}),_c('path',{attrs:{"opacity":".5","d":"M128.63 87.81V89h-6.54v-1.08l3.43-3.76c.44-.49.76-.93.95-1.32.2-.4.31-.8.31-1.19 0-.5-.14-.89-.43-1.15-.3-.27-.71-.4-1.26-.4-.93 0-1.85.36-2.77 1.09l-.52-1.07a5.26 5.26 0 0 1 3.33-1.2c.95 0 1.7.24 2.25.71.56.48.84 1.12.84 1.94 0 .57-.12 1.13-.37 1.65a7.56 7.56 0 0 1-1.26 1.72l-2.66 2.87h4.7zm8.7 1.3a3.03 3.03 0 0 1-2.65-1.3c-.6-.87-.9-2.13-.9-3.8 0-1.66.3-2.92.9-3.79.6-.87 1.49-1.3 2.65-1.3 1.15 0 2.04.43 2.64 1.3.61.86.91 2.12.91 3.78 0 1.67-.3 2.94-.9 3.81-.61.87-1.5 1.3-2.65 1.3zm0-1.16c.72 0 1.24-.32 1.58-.95.34-.65.52-1.64.52-3 0-1.35-.17-2.34-.5-2.97a1.69 1.69 0 0 0-1.6-.93 1.7 1.7 0 0 0-1.6.95c-.33.62-.5 1.6-.5 2.95 0 1.36.17 2.35.5 3 .35.63.88.95 1.6.95zm9.86-4.07c.58.16 1.02.45 1.33.86.3.41.46.93.46 1.56 0 .87-.3 1.55-.92 2.06-.6.5-1.43.74-2.48.74-.66 0-1.3-.1-1.9-.31a4.2 4.2 0 0 1-1.5-.9l.52-1.06c.9.73 1.84 1.1 2.84 1.1 1.36 0 2.04-.58 2.04-1.73 0-.56-.17-.98-.53-1.25-.35-.28-.89-.42-1.6-.42h-1.23v-1.17h1c.69 0 1.22-.15 1.58-.44.36-.29.54-.7.54-1.26 0-.5-.15-.89-.46-1.16-.3-.27-.72-.4-1.27-.4-.93 0-1.86.36-2.77 1.09l-.52-1.07c.4-.37.89-.66 1.48-.88.61-.21 1.23-.32 1.88-.32.93 0 1.67.23 2.22.7.56.46.84 1.08.84 1.86 0 .57-.13 1.07-.4 1.49-.27.42-.65.72-1.15.9zm3.55-4.85h6.75v1.08l-4.6 8.89h-1.56l4.6-8.78h-5.19v-1.19zm15.5 10.08a3.03 3.03 0 0 1-2.64-1.3c-.61-.87-.91-2.13-.91-3.8 0-1.66.3-2.92.9-3.79.61-.87 1.5-1.3 2.65-1.3 1.16 0 2.04.43 2.65 1.3.6.86.9 2.12.9 3.78 0 1.67-.3 2.94-.9 3.81-.6.87-1.49 1.3-2.65 1.3zm0-1.16c.72 0 1.25-.32 1.58-.95.35-.65.52-1.64.52-3 0-1.35-.16-2.34-.5-2.97a1.69 1.69 0 0 0-1.6-.93 1.7 1.7 0 0 0-1.6.95c-.33.62-.5 1.6-.5 2.95 0 1.36.17 2.35.5 3 .35.63.88.95 1.6.95zm11.83-.14V89h-6.54v-1.08l3.43-3.76c.44-.49.76-.93.95-1.32.2-.4.31-.8.31-1.19 0-.5-.15-.89-.43-1.15-.3-.27-.71-.4-1.26-.4-.93 0-1.85.36-2.78 1.09l-.51-1.07a5.26 5.26 0 0 1 3.33-1.2c.95 0 1.7.24 2.25.71.56.48.84 1.12.84 1.94 0 .57-.12 1.13-.38 1.65a7.56 7.56 0 0 1-1.26 1.72l-2.66 2.87h4.7zm6.1 0h2.18V89h-5.82v-1.19h2.18v-7.06l-2.03 1.26v-1.33l2.65-1.65h.84v8.78zm3.9-.49h1.68V89h-1.68v-1.68zm6.72 1.8a3.03 3.03 0 0 1-2.65-1.31c-.6-.87-.9-2.13-.9-3.8 0-1.66.3-2.92.9-3.79.61-.87 1.5-1.3 2.65-1.3 1.16 0 2.04.43 2.65 1.3.6.86.9 2.12.9 3.78 0 1.67-.3 2.94-.9 3.81-.61.87-1.5 1.3-2.65 1.3zm0-1.17c.72 0 1.25-.32 1.58-.95.35-.65.52-1.64.52-3 0-1.35-.17-2.34-.5-2.97a1.69 1.69 0 0 0-1.6-.93 1.7 1.7 0 0 0-1.6.95c-.33.62-.5 1.6-.5 2.95 0 1.36.17 2.35.5 3 .35.63.88.95 1.6.95zm8.4 1.16a3.03 3.03 0 0 1-2.65-1.3c-.6-.87-.91-2.13-.91-3.8 0-1.66.3-2.92.9-3.79.62-.87 1.5-1.3 2.65-1.3 1.16 0 2.04.43 2.65 1.3.6.86.91 2.12.91 3.78 0 1.67-.3 2.94-.91 3.81-.6.87-1.49 1.3-2.65 1.3zm0-1.16c.71 0 1.24-.32 1.58-.95a6.6 6.6 0 0 0 .51-3c0-1.35-.16-2.34-.5-2.97a1.69 1.69 0 0 0-1.6-.93 1.7 1.7 0 0 0-1.6.95c-.33.62-.5 1.6-.5 2.95 0 1.36.17 2.35.5 3 .35.63.89.95 1.6.95zm15.9-8.92h1.36V89h-1.1l-5.72-7.53V89h-1.36v-9.97h1.1l5.72 7.55v-7.55zm3.68 9.97v-9.97h1.44V89h-1.44zm12.15-9.97h1.16V89h-1.3v-6.85L231.82 89h-.99l-3-6.8.02 6.8h-1.3v-9.97h1.16l3.63 8.23 3.58-8.23z","fill":"#1F2348"}}),_c('path',{attrs:{"d":"M131.93 69h-2.44l-1.64-4.27c-.15-.4-.37-.67-.67-.82-.3-.16-.69-.24-1.17-.24h-2.32V69h-2.3V56.18h5.49c1.45 0 2.55.32 3.3.96.76.63 1.14 1.55 1.14 2.73a3.5 3.5 0 0 1-.68 2.18c-.45.59-1.08 1.01-1.91 1.26.76.16 1.3.69 1.64 1.59l1.56 4.1zm-5.38-7.13c.88 0 1.53-.16 1.95-.48.42-.33.63-.82.63-1.48 0-.65-.21-1.13-.63-1.44-.41-.32-1.06-.49-1.95-.49h-2.9v3.9h2.9zm15.27 2.7h-6.26c.04.97.28 1.7.72 2.16.44.46 1.1.69 1.96.69 1 0 1.92-.33 2.77-.98l.65 1.55c-.44.35-.97.63-1.6.85-.63.2-1.27.3-1.91.3a4.78 4.78 0 0 1-3.51-1.26c-.85-.84-1.28-1.99-1.28-3.45 0-.93.18-1.75.56-2.47.37-.72.9-1.28 1.56-1.67.68-.41 1.44-.61 2.29-.61 1.25 0 2.23.4 2.95 1.22.73.8 1.1 1.91 1.1 3.33v.34zm-4-3.27c-.6 0-1.09.18-1.47.54-.38.34-.61.85-.72 1.53h4.23a2.49 2.49 0 0 0-.63-1.55c-.34-.35-.8-.52-1.4-.52zm14.6-5.55V69h-2.22v-1.46c-.27.5-.67.9-1.18 1.19-.52.28-1.1.41-1.77.41a3.76 3.76 0 0 1-3.53-2.26 5.93 5.93 0 0 1-.5-2.5c0-.94.17-1.76.5-2.47a3.8 3.8 0 0 1 3.53-2.23c.65 0 1.23.13 1.73.41.52.26.91.64 1.19 1.13v-5.47h2.25zm-4.57 11.63c.74 0 1.32-.26 1.72-.77a3.4 3.4 0 0 0 .63-2.2c0-.95-.2-1.68-.6-2.2-.42-.51-1-.77-1.74-.77-.75 0-1.34.26-1.76.77-.4.5-.61 1.23-.61 2.16 0 .95.2 1.69.61 2.22.42.53 1 .79 1.75.79zM169.76 69l-1.28-3h-6.26l-1.3 3h-2.34l5.8-12.82h1.89L172.08 69h-2.32zM163 64.2h4.72l-2.36-5.5-2.36 5.5zm14.44 4.94c-.95 0-1.77-.19-2.47-.57a3.93 3.93 0 0 1-1.6-1.62 5.27 5.27 0 0 1-.56-2.49c0-.94.2-1.78.58-2.5a4.2 4.2 0 0 1 1.66-1.67c.72-.41 1.54-.61 2.48-.61.65 0 1.27.1 1.87.3.61.2 1.1.49 1.46.85l-.63 1.58a4.2 4.2 0 0 0-2.5-.95c-.82 0-1.45.26-1.91.77-.46.5-.68 1.24-.68 2.2 0 .96.22 1.69.66 2.2.46.5 1.1.75 1.93.75.42 0 .84-.08 1.28-.25.43-.17.84-.41 1.22-.72l.63 1.58a4 4 0 0 1-1.5.85c-.6.2-1.25.3-1.92.3zm9.05 0c-.94 0-1.77-.19-2.46-.57a3.93 3.93 0 0 1-1.6-1.62 5.27 5.27 0 0 1-.56-2.49c0-.94.19-1.78.57-2.5a4.2 4.2 0 0 1 1.66-1.67c.72-.41 1.55-.61 2.48-.61.65 0 1.28.1 1.88.3.6.2 1.1.49 1.45.85l-.63 1.58a4.2 4.2 0 0 0-2.5-.95c-.81 0-1.45.26-1.9.77-.46.5-.7 1.24-.7 2.2 0 .96.23 1.69.68 2.2.45.5 1.1.75 1.92.75.42 0 .85-.08 1.28-.25.43-.17.84-.41 1.22-.72l.63 1.58a4 4 0 0 1-1.5.85c-.6.2-1.25.3-1.92.3zm9.06 0c-.93 0-1.75-.19-2.45-.57a4.02 4.02 0 0 1-1.62-1.64 5.42 5.42 0 0 1-.56-2.52c0-.96.19-1.8.56-2.5a4 4 0 0 1 1.62-1.66c.7-.38 1.52-.57 2.44-.57.92 0 1.72.19 2.42.57.7.39 1.23.94 1.6 1.66.38.7.57 1.54.57 2.5s-.19 1.8-.57 2.52a3.9 3.9 0 0 1-1.6 1.64c-.7.38-1.5.57-2.41.57zm-.02-1.76c.76 0 1.35-.25 1.74-.74.41-.5.62-1.25.62-2.23 0-.97-.2-1.71-.62-2.21-.4-.52-.98-.78-1.72-.78a2.1 2.1 0 0 0-1.75.78c-.4.5-.61 1.24-.61 2.21 0 .98.2 1.73.6 2.23.4.5.98.74 1.74.74zm14.83-7.47V69h-2.2v-1.4c-.29.5-.67.88-1.15 1.15-.48.26-1.03.4-1.66.4-2.22 0-3.33-1.25-3.33-3.75v-5.49h2.23v5.5c0 .67.14 1.15.4 1.47.28.3.7.46 1.26.46.66 0 1.19-.21 1.58-.64.4-.44.6-1.01.6-1.73V59.9h2.27zm7.64-.23c2.17 0 3.26 1.24 3.26 3.74V69H219v-5.47c0-.72-.14-1.24-.42-1.57-.27-.33-.7-.5-1.27-.5-.69 0-1.24.22-1.66.66-.42.44-.63 1.01-.63 1.73V69h-2.23v-6.52c0-.96-.05-1.81-.15-2.57h2.11l.16 1.5a3.3 3.3 0 0 1 1.26-1.28c.54-.3 1.15-.45 1.82-.45zm8.5 1.92v4.07c0 1.07.5 1.6 1.5 1.6.28 0 .58-.05.9-.14v1.78c-.4.14-.88.22-1.44.22-1.03 0-1.82-.3-2.38-.87-.55-.57-.82-1.4-.82-2.48V61.6h-1.75v-1.69h1.75V57.7l2.25-.76v2.97h2.4v1.7h-2.4z","fill":"#1F2348"}}),_c('path',{attrs:{"d":"M75.9 80.8l-4.2-7.1c-.3-.51-.85-.83-1.44-.83h-8.39c-.6 0-1.15.32-1.45.83l-4.2 7.1c-.3.51-.3 1.14 0 1.65l4.2 7.1c.3.51.85.83 1.45.83h8.39c.6 0 1.15-.32 1.45-.83l4.19-7.1c.3-.51.3-1.14 0-1.65z","fill":"url(#paint2_radial)"}}),_c('mask',{attrs:{"id":"c","mask-type":"alpha","maskUnits":"userSpaceOnUse","x":"56","y":"72","width":"21","height":"19"}},[_c('path',{attrs:{"d":"M75.9 80.8l-4.2-7.1c-.3-.51-.85-.83-1.44-.83h-8.39c-.6 0-1.15.32-1.45.83l-4.2 7.1c-.3.51-.3 1.14 0 1.65l4.2 7.1c.3.51.85.83 1.45.83h8.39c.6 0 1.15-.32 1.45-.83l4.19-7.1c.3-.51.3-1.14 0-1.65z","fill":"url(#paint3_radial)"}})]),_c('g',{attrs:{"mask":"url(#c)","fill-rule":"evenodd","clip-rule":"evenodd"}},[_c('path',{attrs:{"d":"M66.12 76.73a4.91 4.91 0 0 1 4.95 4.86 4.91 4.91 0 0 1-4.95 4.86 4.91 4.91 0 0 1-4.96-4.86 4.91 4.91 0 0 1 4.96-4.86z","fill":"#E9B213"}}),_c('path',{attrs:{"opacity":".2","d":"M70.98 81.6c0 2.64-2.2 4.79-4.9 4.79-1.28 0-2.51-.5-3.43-1.38 1.29.28 4.47.37 6.18-1.73 1.29-1.52 1.03-4.04.52-5.26a4.74 4.74 0 0 1 1.63 3.57z","fill":"#010101"}}),_c('path',{attrs:{"d":"M66.59 77.14a1 1 0 0 0-.23.32c-.12.24.13.85.87.97s1.36.24 1.49-.36c.12-.61-1.66-1.01-2.13-.93z","fill":"#0582CA"}}),_c('path',{attrs:{"d":"M66.46 77.3l2.38-3.13-.45 3.63c-.17.75-2.4.75-1.93-.5z","fill":"#fff"}}),_c('path',{attrs:{"d":"M66.46 77.3c1.02.77 1.64-.57 1.88-2.46l.5-.67-.45 3.63c-.17.75-2.4.75-1.93-.5z","fill":"#0582CA"}}),_c('path',{attrs:{"d":"M67.85 75.47s.25.51.8.22l.04-.27s-.42.24-.7-.14l-.14.2zm-.51.68s.44.94 1.22.33l.03-.24c-.4.2-.77.16-1.1-.28l-.15.19zm1.11 1.2s-1.22.84-1.71-.4l.16-.22s.58.97 1.58.36l-.03.25z","fill":"#0582CA"}}),_c('path',{attrs:{"d":"M59.47 80.5l.3 2.91-.3.25v.4s0 .2.3.28c.3.06.88.24 1.76.17a4.1 4.1 0 0 0 1.36-.35.36.36 0 0 0 .22-.3l-.1-.45-.3-.24-.3-2.8","fill":"#fff"}}),_c('path',{attrs:{"d":"M59.78 80.52l.31 2.88-.46.37s0 .16.6.24c.84.27 2.2-.01 2.6-.23.3-.11.06-.24.06-.24l-.3-.37-.32-2.77-2.49.12z","fill":"#E9B213"}}),_c('path',{attrs:{"d":"M60.93 80.13c.81-.04 1.48.06 1.49.22 0 .17-.64.34-1.46.39-.81.04-1.48-.06-1.49-.22 0-.17.64-.34 1.46-.39z","fill":"#fff"}}),_c('path',{attrs:{"d":"M63 83.68c.02.2-.73.54-1.66.59-.93.04-1.7-.2-1.72-.4-.01-.19.73-.4 1.67-.46.94-.04 1.69.07 1.71.27z","fill":"#E9B213"}}),_c('path',{attrs:{"d":"M61.95 83.05a.22.22 0 0 1-.24-.17l-.13-1.58c0-.11.08-.2.2-.2a.2.2 0 0 1 .22.17l.13 1.59c.02.1-.07.19-.18.19zm-.73.12a.22.22 0 0 1-.24-.17l-.13-1.58c0-.1.08-.2.2-.2.1 0 .2.07.23.18l.12 1.58c.02.1-.07.2-.18.2zm-.73 0a.22.22 0 0 1-.24-.17l-.14-1.58c0-.1.1-.2.22-.2.1 0 .2.07.23.18l.12 1.58c0 .1-.08.2-.2.2z","fill":"#FFD22D"}}),_c('path',{attrs:{"d":"M59.88 80.73s-1 .27-.86-.54c0 0-.6-.67.15-.67 0 0 .15-.53.76 0 0 0 .6-.93 1.21.14 0 0 .46-.54.76.27 0 0 .94.29.25.62-.7.32-2.02.31-2.27.18z","fill":"#fff"}}),_c('path',{attrs:{"d":"M60.03 80.67s-.86.22-.72-.42c0 0-.51-.52.12-.52 0 0 .13-.42.65 0 0 0 .5-.74 1.03.11 0 0 .38-.43.64.2 0 0 .8.25.21.5-.58.24-1.73.24-1.93.13z","fill":"#FFEFAE"}}),_c('path',{attrs:{"d":"M60.9 80.2s.3-.1.2-.36c0 .01.28.23-.2.35zm-1.3-.18c.14.09.33.06.46-.05 0 0-.07.32-.47.05zm.45-.13c.09.23.34.36.58.31 0 0-.43.3-.58-.31zm1.25-.2s.23-.04.23.32-.39.47-.39.47.1-.1.24.02c.13.12-.19.2-.19.2s.8-.03 1.08-.3c.29-.27-.45-.39-.45-.39s0-.38-.52-.32z","fill":"#03A9F4"}}),_c('path',{attrs:{"d":"M68.72 81.65s0-1.34.68-1.34.68 1.3.68 1.3-.57-1.3-1.36.04zm-2.98.06s0-1.46.75-1.46c.74 0 .74 1.41.74 1.41s-.62-1.4-1.49.05z","fill":"#010101"}}),_c('path',{attrs:{"d":"M65.5 82.25h4.74s-.13 2.8-2.4 2.8c-.62.03-1.2-.23-1.6-.7-.72-.83-.74-2.1-.74-2.1z","fill":"#603813"}}),_c('path',{attrs:{"d":"M69.6 84.12c-.4.57-1.06.91-1.76.89-.62.02-1.2-.23-1.6-.7-.72-.83 3.95-1.02 3.36-.19z","fill":"#F15A24"}}),_c('path',{attrs:{"d":"M65.5 82.2h4.74c0 .3-.06.6-.16.89 0 0-2.79.5-4.45-.04a3.93 3.93 0 0 1-.13-.85z","fill":"#fff"}}),_c('path',{attrs:{"d":"M61.78 88.52h9.3s.74 0 .86-.27c.13-.26.13.4-.87.55-.99.15-8.3 0-9.3 0-.99 0-1.11-.28 0-.28z","fill":"#444"}}),_c('path',{attrs:{"d":"M60.41 88.68h9.3s.75 0 .87-.27.12.4-.87.55c-1 .14-8.3 0-9.3 0l-.27-.01-.19-.25.46-.02z","fill":"#919191"}}),_c('path',{attrs:{"d":"M66.1 86.19l-1.31 2.14s-.14.31 1.2.31h2.82s.66-.63.27-.95c-.4-.31-1.48-.4-1.48-.4l1.07-1.69s-.94.64-2.57.59z","fill":"#1F2348"}}),_c('path',{attrs:{"d":"M64.08 85.87l-1.44 2.46s-.12.31 1.22.31h2.81s.67-.63.28-.95c-.4-.31-1.48-.4-1.48-.4l.94-1.05c-.01 0-.95.1-2.33-.37z","fill":"#464D8A"}}),_c('path',{attrs:{"d":"M67.34 86.67l1 .23c.04.02.06.04.06.08l-.02.06c0 .03-.03.05-.07.05l-1-.23c-.04-.02-.05-.04-.05-.08v-.06c0-.03.05-.05.08-.05zm.19-.37l1 .23c.04 0 .05.03.05.07l-.01.06c-.01.04-.04.05-.07.05l-1-.23c-.05-.01-.06-.04-.06-.07l.01-.07c.02-.03.04-.04.08-.04zm-2.3.5l1.01.23c.04 0 .05.03.05.07l-.01.06c-.02.04-.04.05-.08.05l-1-.23c-.04-.02-.05-.04-.05-.08l.01-.06c0-.03.04-.05.08-.05zm.2-.38l1 .23c.03.01.04.04.04.07v.06c-.02.04-.04.05-.08.05l-1-.23c-.04-.01-.06-.04-.06-.07l.02-.06c0-.04.05-.05.07-.05z","fill":"#03A9F4"}})]),_c('path',{attrs:{"opacity":".1","d":"M92.53 90.43l-4.2-7.11c-.3-.5-.85-.82-1.45-.82H78.5c-.6 0-1.16.31-1.46.82l-4.2 7.11c-.29.5-.29 1.13 0 1.64l4.2 7.11c.3.5.86.82 1.46.82h8.38c.6 0 1.15-.31 1.45-.82l4.2-7.11c.3-.5.3-1.13 0-1.64z","fill":"url(#paint4_radial)"}}),_c('path',{attrs:{"opacity":".1","d":"M109.15 80.8l-4.2-7.1c-.3-.51-.85-.83-1.45-.83h-8.38c-.6 0-1.15.32-1.45.83l-4.2 7.1c-.3.51-.3 1.14 0 1.65l4.2 7.1c.3.51.85.83 1.45.83h8.38c.6 0 1.16-.32 1.46-.83l4.19-7.1c.3-.51.3-1.14 0-1.65z","fill":"url(#paint5_radial)"}}),_c('path',{attrs:{"d":"M75.9 61.55l-4.2-7.1c-.3-.51-.85-.83-1.44-.83h-8.39c-.6 0-1.15.32-1.45.83l-4.2 7.1c-.3.51-.3 1.14 0 1.65l4.2 7.1c.3.51.85.83 1.45.83h8.39c.6 0 1.15-.32 1.45-.83l4.19-7.1c.3-.51.3-1.14 0-1.65z","fill":"url(#paint6_radial)"}}),_c('mask',{attrs:{"id":"d","mask-type":"alpha","maskUnits":"userSpaceOnUse","x":"56","y":"53","width":"21","height":"19"}},[_c('path',{attrs:{"d":"M75.9 61.55l-4.2-7.1c-.3-.51-.85-.83-1.44-.83h-8.39c-.6 0-1.15.32-1.45.83l-4.2 7.1c-.3.51-.3 1.14 0 1.65l4.2 7.1c.3.51.85.83 1.45.83h8.39c.6 0 1.15-.32 1.45-.83l4.19-7.1c.3-.51.3-1.14 0-1.65z","fill":"#E9B213"}})]),_c('g',{attrs:{"mask":"url(#d)","clip-rule":"evenodd"}},[_c('path',{attrs:{"fill-rule":"evenodd","d":"M66.53 57.48a4.91 4.91 0 0 1 4.96 4.86 4.91 4.91 0 0 1-4.96 4.86 4.91 4.91 0 0 1-4.96-4.86 4.91 4.91 0 0 1 4.96-4.86z","fill":"#FB8C00"}}),_c('path',{attrs:{"opacity":".2","fill-rule":"evenodd","d":"M71.4 62.34c0 2.65-2.2 4.8-4.9 4.8-1.28 0-2.52-.5-3.43-1.38 1.28.28 4.46.37 6.18-1.73 1.28-1.52 1.03-4.04.51-5.26a4.74 4.74 0 0 1 1.63 3.57z","fill":"#010101"}}),_c('path',{attrs:{"fill-rule":"evenodd","d":"M67 57.89a1 1 0 0 0-.22.32c-.13.24.12.85.87.97.74.12 1.36.24 1.48-.36.13-.61-1.66-1.01-2.13-.93z","fill":"#1F2348"}}),_c('path',{attrs:{"fill-rule":"evenodd","d":"M66.88 58.06l2.38-3.14-.45 3.63c-.17.75-2.4.75-1.94-.5z","fill":"#fff"}}),_c('path',{attrs:{"fill-rule":"evenodd","d":"M66.88 58.06c1.01.76 1.63-.58 1.87-2.47l.5-.67-.44 3.63c-.17.75-2.4.75-1.94-.5z","fill":"#1F2348"}}),_c('path',{attrs:{"fill-rule":"evenodd","d":"M68.27 56.22s.24.51.8.22l.03-.27s-.42.24-.7-.14l-.13.2zm-.52.68s.44.94 1.22.33L69 57c-.4.2-.77.16-1.1-.28l-.15.19zm1.12 1.2s-1.22.84-1.72-.41l.16-.21s.58.97 1.59.36l-.03.25z","fill":"#1F2348"}}),_c('path',{attrs:{"fill-rule":"evenodd","d":"M59.66 60.87s-.57.03-.8.15c-.06.03-.05.14.02.19.46.34.8.8 1 1.34.4 1.03.41 2.03 1.7 2.48 1.29.45 1.83 0 1.83 0s.89-1.1-.1-2.18c0 0-.2-.19-.58-.07-.45.14-.93.23-1.45-.69-.51-.92-.77-1.33-1.62-1.22zm13.16-.6c-.28-.23-1.93-.05-1.93-.05l.1.22.3.6c.3-.13.63-.23.96-.3 0 .02.23 2.33-.02 2.57-.25.25-1.04.4-1.04.4l-.07.21-.13.32s2.11.17 2.11-1.3c.08-1.97.07-2.37-.28-2.67z","fill":"#FB8C00"}}),_c('path',{attrs:{"fill-rule":"evenodd","d":"M59.07 61.37c.57.5.73.96.81 1.18.4 1.03.41 2.03 1.7 2.48 1.29.45 1.83 0 1.83 0s.66-.73.22-1.7c0 0 .48 1.34-.98 1.32-.68 0-1.3-.1-1.8-.72-.66-.82-.97-2.3-1.78-2.56z","fill":"#1F2348"}}),_c('path',{attrs:{"fill-rule":"evenodd","d":"M59.66 60.87c.44-.03.8.04.81.16.01.12-.34.23-.78.26s-.8-.05-.81-.16c-.01-.12.34-.23.78-.26z","fill":"#fff"}}),_c('path',{attrs:{"fill-rule":"evenodd","d":"M59.7 60.97c.33-.02.6.01.6.07 0 .06-.26.12-.59.14-.33.02-.6 0-.6-.07 0-.05.26-.12.59-.14z","fill":"#1F2348"}}),_c('path',{attrs:{"fill-rule":"evenodd","d":"M60.3 61.04c.07.1-.59.14-.59.14.05-.13.04-.2-.01-.2 0 0 .54-.04.6.06z","fill":"#010101"}}),_c('path',{attrs:{"fill-rule":"evenodd","d":"M72.25 60.74s.23 2.33-.02 2.57c-.25.25-1.04.4-1.04.4l-.07.21s1.1-.15 1.35-.5c.26-.35.13-2.17.13-2.17s.04-.64-.35-.5z","fill":"#1F2348"}}),_c('path',{attrs:{"fill-rule":"evenodd","d":"M70.89 60.22s1.8-.22 2 .1a3.14 3.14 0 0 0-1.1 0l-.8.12-.1-.22zM62.24 62.95c.65.13 1.12.01 1.3.21-.06-.1-.1-.17-.23-.3a.58.58 0 0 0-.58-.08c-1.34.5-1.43-1.16-2.18-1.72.76.87.72 1.7 1.69 1.9z","fill":"#fff"}}),_c('path',{attrs:{"fill-rule":"evenodd","d":"M69.6 64.9c-.36.4-.86.61-1.38.61h-.05c-.54 0-1.03-.21-1.38-.6-.37-.4-.6-1.05-.6-1.34 0-.26.43.07 1.52.16h.52c.98 0 1.59-.3 1.7-.36.1-.06.3-.08.3.2s-.27.93-.64 1.34z","fill":"#1F2348"}}),_c('path',{attrs:{"fill-rule":"evenodd","d":"M66.82 60.79c.42-.03.8.42.82 1 .04.58-.28 1.06-.7 1.08-.43.03-.8-.42-.83-1-.03-.57.28-1.06.7-1.08z","fill":"#fff"}}),_c('path',{attrs:{"fill-rule":"evenodd","d":"M66.89 61.36c.25 0 .46.24.46.53 0 .3-.2.54-.46.54-.25 0-.46-.24-.46-.54 0-.3.2-.53.46-.53z","fill":"#1F2348"}}),_c('path',{attrs:{"fill-rule":"evenodd","d":"M66.6 61.36c.13 0 .24.1.24.24 0 .13-.11.24-.25.24a.25.25 0 0 1-.25-.24c0-.13.11-.24.25-.24z","fill":"#fff"}}),_c('path',{attrs:{"fill-rule":"evenodd","d":"M66.24 60.8c.44-.5.87-.49 1.3 0 0 0-.6-1.17-1.3 0z","fill":"#1F2348"}}),_c('path',{attrs:{"fill-rule":"evenodd","d":"M69.67 60.8c.42-.02.8.42.83 1 .03.58-.29 1.06-.71 1.09-.43.02-.8-.43-.83-1-.03-.58.29-1.07.71-1.1z","fill":"#fff"}}),_c('path',{attrs:{"fill-rule":"evenodd","d":"M69.74 61.36c.25 0 .46.24.46.53 0 .3-.2.54-.46.54-.25 0-.46-.24-.46-.54 0-.3.2-.53.46-.53z","fill":"#1F2348"}}),_c('path',{attrs:{"fill-rule":"evenodd","d":"M69.44 61.36c.14 0 .25.1.25.24 0 .13-.11.24-.25.24a.25.25 0 0 1-.24-.24c0-.13.1-.24.24-.24z","fill":"#fff"}}),_c('path',{attrs:{"fill-rule":"evenodd","d":"M69.1 60.8c.43-.5.86-.49 1.28 0 0 0-.59-1.17-1.28 0z","fill":"#1F2348"}}),_c('path',{attrs:{"fill-rule":"evenodd","d":"M65.08 60.76h-.22v.49h.22c.12.03.22.14.22.26v.7s-.03 1 1.47.97c0 0-1.07.02-1.24-1v-.67c0-.1-.08-.18-.17-.21l-.23-.05-.05-.49z","fill":"#DD6901"}}),_c('path',{attrs:{"d":"M65.08 60.76v.49l.25.02c.1.04.16.12.17.22v.66s.11 1.1 1.34 1.03c1.23-.06 1.26-1.2 1.26-1.2s0-.8.28-.8c.27 0 .28.8.28.8s.05 1.2 1.28 1.2 1.28-1.03 1.28-1.03v-.7c0-.1.07-.17.16-.17h.23v-.48l-2.7-.02a.52.52 0 0 0-.25.15l-.26.24-.27-.25a.43.43 0 0 0-.34-.12l-2.71-.04z","stroke":"#1F2348"}}),_c('path',{attrs:{"fill-rule":"evenodd","d":"M67.78 64.35l-.02-.53c.4.05.83.04 1.24-.04l.02.5c.01.07-.02.1-.09.12l-.5.02-.04-.41-.04.4-.48.02c-.06-.01-.09-.03-.09-.08z","fill":"#fff"}}),_c('path',{attrs:{"fill-rule":"evenodd","d":"M66.53 67.54c2.2 0 3.97.48 3.97 1.06 0 .59-1.78 1.06-3.97 1.06-2.2 0-3.97-.47-3.97-1.06 0-.58 1.78-1.06 3.97-1.06z","fill":"#1F2348"}})]),_c('path',{attrs:{"d":"M92.53 51.93l-4.2-7.11c-.3-.5-.85-.82-1.45-.82H78.5c-.6 0-1.16.31-1.46.82l-4.2 7.11c-.29.5-.29 1.13 0 1.64l4.2 7.11c.3.5.86.82 1.46.82h8.38c.6 0 1.15-.31 1.45-.82l4.2-7.11c.3-.5.3-1.13 0-1.64z","fill":"url(#paint7_radial)"}}),_c('mask',{attrs:{"id":"e","mask-type":"alpha","maskUnits":"userSpaceOnUse","x":"72","y":"44","width":"21","height":"18"}},[_c('path',{attrs:{"d":"M92.53 51.93l-4.2-7.11c-.3-.5-.85-.82-1.45-.82H78.5c-.6 0-1.16.31-1.46.82l-4.2 7.11c-.29.5-.29 1.13 0 1.64l4.2 7.11c.3.5.86.82 1.46.82h8.38c.6 0 1.15-.31 1.45-.82l4.2-7.11c.3-.5.3-1.13 0-1.64z","fill":"url(#paint8_radial)"}})]),_c('g',{attrs:{"mask":"url(#e)"}},[_c('path',{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M82.8 47.79a4.91 4.91 0 0 1 4.97 4.86 4.91 4.91 0 0 1-4.96 4.87 4.91 4.91 0 0 1-4.96-4.87 4.91 4.91 0 0 1 4.96-4.86z","fill":"#21BCA5"}}),_c('path',{attrs:{"opacity":".2","fill-rule":"evenodd","clip-rule":"evenodd","d":"M87.67 52.65c0 2.65-2.2 4.8-4.9 4.8-1.28 0-2.5-.5-3.42-1.38 1.28.29 4.46.37 6.17-1.73 1.3-1.52 1.03-4.04.52-5.26a4.74 4.74 0 0 1 1.63 3.57z","fill":"#010101"}}),_c('path',{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M82.87 48.14s-.43-2.16-.9-2.75c-.02-.02-.2-.06-.5.08l-.03.02s.33.32 1.12 2.65c0 0 .3.16.3 0z","fill":"#E9B213"}}),_c('path',{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M81.71 45.37c.15-.01.28 0 .28.05 0 .04-.12.09-.27.1-.15.02-.27 0-.27-.05 0-.04.11-.08.26-.1z","fill":"#F4B145"}}),_c('path',{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M82.46 47.95s.09-.01.15-.17a.43.43 0 0 0-.3-.54c-.25-.06-.36-.29-.53-.5-.18-.23-.8-.58-1.85-.56-1.05.03-1.26-.36-1.35-.43-.09-.08-.1.73.37 1.32.47.6 1.15 1.01 1.94.62.78-.39 1.14-.02 1.14-.02s.27.29.43.28z","fill":"#D94432"}}),_c('path',{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M82.46 47.95s.09-.01.15-.17a.43.43 0 0 0-.3-.54c-.25-.06-.36-.29-.53-.5-.18-.23-.8-.6-1.85-.56-1.22.05-1.39-.57-1.37-.4.37 1.4 2.85.5 3.9 2.17z","fill":"#010101"}}),_c('path',{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M78.2 51.28c.2.28.24.62.14.94l-.05.24.54.01c.37.11.4.97.07 1.24-.13.07-.26.17-.37.27a3.1 3.1 0 0 1-1.04.76l-.41.17c-.74.3-2.16.72-2.4-.79l.04-.8c.03-.4-.18-.7.1-1.46.29-.76 1.1-.88 1.69-.73 0 0 .1.06.3-.2.2-.27 1.03-.4 1.39.35z","fill":"#D8D8D8"}}),_c('path',{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M78.91 53.73s-1.03.88-1.4 1.03c-.34.12-2.02.98-2.61-.06a3.08 3.08 0 0 1-.19-.58c.11.27.7.51 1.32.53.81.03 1.38-.53 1.9-.44.3-.2.64-.35.98-.48z","fill":"#010101"}}),_c('path',{attrs:{"d":"M76.99 51.75a.25.25 0 1 0 .48-.14l-.48.14zM76.1 47a.25.25 0 1 0-.47.14l.47-.14zm2.13 3.9a.25.25 0 0 0 .48-.13l-.48.14zm-1.13-5.6a.25.25 0 1 0-.48.14l.48-.14zm.63 6.34a.25.25 0 0 0 .48-.14l-.48.14zm-1.07-5.5a.25.25 0 0 0-.48.15l.48-.14zm2.3 1.15a.25.25 0 1 0-.24-.44l.24.44zm-4.2 1.75a.25.25 0 0 0 .23.44l-.24-.44zm3.95-2.6a.25.25 0 1 0-.24-.44l.24.44zm-3.58 1.38a.25.25 0 1 0 .23.44l-.23-.44zm3.96 2.26a.25.25 0 1 0-.25-.43l.25.43zm-2.98 1.15a.25.25 0 1 0 .25.43l-.25-.43zm1.98-5.4a.25.25 0 0 0-.24-.44l.24.44zm-2.22.66a.25.25 0 0 0 .24.43l-.24-.43zm1.6 5.13l-1.37-4.62-.47.14 1.36 4.62.48-.14zm1.24-.85l-1.61-5.47-.48.14 1.6 5.47.49-.14zm-.5.73l-1.55-5.35-.48.14 1.55 5.35.48-.14zm.51-4.65l-3.97 2.19.24.44 3.97-2.2-.24-.43zm-.25-.85l-3.34 1.82.23.44 3.35-1.82-.24-.44zm.37 3.65l-2.73 1.58.25.43 2.73-1.58-.25-.43zm-.99-4.26l-1.98 1.1.24.43 1.98-1.09-.24-.44z","fill":"#000"}}),_c('path',{attrs:{"d":"M78.96 49.98l-1.48-4.99","stroke":"#000","stroke-width":".5"}}),_c('path',{attrs:{"d":"M79.58 48.86a.25.25 0 0 0-.24-.44l.24.44zm-4.2 1.75a.25.25 0 1 0 .23.44l-.24-.44zm3.83-2.48a.25.25 0 1 0-.24-.44l.24.44zM75 49.88a.25.25 0 0 0 .24.44l-.24-.44zm1.12 1.38a.25.25 0 0 0 .48-.14l-.48.14zm-.51-3.54a.25.25 0 1 0-.48.14l.48-.14zm3.73.7l-3.97 2.19.24.44 3.97-2.2-.24-.43zm-.37-.73L75 49.88l.24.44 3.97-2.19-.24-.44zm-2.37 3.43l-1-3.4-.47.14 1 3.4.47-.14z","fill":"#000"}}),_c('path',{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M77.48 55.51l.06.85s.09.27-.14.32c-.22.05.76.05.63-.32a.25.25 0 0 0-.24-.24l-.05-.59-.26-.02z","fill":"#F06292"}}),_c('path',{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M77.15 51.25c-1.1.09-2.12-1.03-2.34-2.54.8-1.4 1.8-2.99 2-3.41 1.11.03 2.07 1.25 2.2 2.8.15 1.65-.7 3.06-1.86 3.15zm.02 1.83l-.62-1.34s.37.49 1.11 0l-.5 1.34zm2.23-5.84c-.21-1.12-1.2-2.16-2.22-2.36-.2-.03-1.81 3.03-2.77 4.55.17.52.5 1 1.14 1.82 1.12 1.7 1.37 1.83 1.5 3.4l.12 1.47s-.13 0-.13.24.25.37.5.37.5-.13.5-.37a.25.25 0 0 0-.25-.24l-.13-1.46s-.07-2.46 1-3.77c1.05-1.29.99-2.31.74-3.65z","fill":"#D94432"}}),_c('path',{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M77.11 44.92c.39.03.71.3.99.56.74.73.99 1.22 1.11 2.55a3.92 3.92 0 0 1-.93 2.98c-.5.49-1.73.73-1.73.73.18.11.4.15.62.12.17-.03.34-.1.5-.17l.36.3c.2-.43.44-.84.72-1.22.4-.49.83-1.27.8-2.36-.04-1.1-.37-3-2.38-3.53l-.06.04z","fill":"#010101"}}),_c('path',{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M77.24 54.85c-.7.3-2.28.88-2.53-.74l.05-.81c.03-.4-.19-.7.1-1.46.29-.77.3-.78 1.69-.73 1.27.04.65 1.98.89 3.3 0 .13-.09.4-.2.44z","fill":"#fff"}}),_c('path',{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M77.5 54.74c.4-.08-2.5 1.26-2.79-.63l.04-.8c.02-.4-.19-.7.1-1.46.28-.77 1.09-.89 1.68-.73-1.83.11-1.04 3.88.97 3.62z","fill":"#D94432"}}),_c('path',{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M86.38 51.1c.25 0 .46.24.46.53 0 .29-.2.52-.46.52-.25 0-.45-.23-.45-.52 0-.29.2-.52.45-.52z","fill":"#1F2348"}}),_c('path',{attrs:{"d":"M82.32 53.54s.35 1.63 2.29 1.54c1.98-.1 2.04-1.65 2.04-1.65","stroke":"#1F2348","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}}),_c('path',{attrs:{"d":"M82.26 51.21c.45.01.9.26 1.08.76-.4-.26-.52-.34-1.1-.07","stroke":"#1F2348","stroke-width":"2.5","stroke-linecap":"round","stroke-linejoin":"round"}}),_c('path',{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M80.45 56.87c.82.84 2.06 1.6 3.3 1.95-.87.3-1 .79-1.2 1.5 0 0 1.92-.4 2.12-.94 0 0 .74.82 2.23.7a2.87 2.87 0 0 0-2.23-1.64c-.34 0-.52-.83.37-1.53-2.73 1.06-4.59-.04-4.59-.04z","fill":"#21BCA5"}}),_c('path',{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M83.75 58.82c-.82.26-1.03.8-1.19 1.5 0 0 1.9-.4 2.1-.94 0 0 .75.82 2.24.7a2.87 2.87 0 0 0-2.23-1.64c-.01.05-.08.11-.07.27-.2-.04-.54.01-.85.11z","fill":"#D94432"}}),_c('path',{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M84.17 58.55s1.74.58 2.73 1.53a2.87 2.87 0 0 0-2.23-1.64c-.34 0-.52-.83.37-1.53-.35.13-.7.24-1.06.31-.3.98.2 1.33.2 1.33z","fill":"#010101"}})]),_c('path',{attrs:{"opacity":".1","d":"M109.15 61.55l-4.2-7.1c-.3-.51-.85-.83-1.45-.83h-8.38c-.6 0-1.15.32-1.45.83l-4.2 7.1c-.3.51-.3 1.14 0 1.65l4.2 7.1c.3.51.85.83 1.45.83h8.38c.6 0 1.16-.32 1.46-.83l4.19-7.1c.3-.51.3-1.14 0-1.65z","fill":"url(#paint9_radial)"}}),_c('rect',{attrs:{"x":"40","y":"112","width":"324","height":"80","rx":"4","fill":"#fff"}}),_c('g',{attrs:{"opacity":".7"}},[_c('path',{attrs:{"d":"M129.27 142.38c.74.21 1.31.59 1.71 1.13.4.54.61 1.2.61 2 0 1.09-.39 1.95-1.17 2.57-.77.61-1.84.92-3.22.92h-5.81v-12.82h5.63c1.32 0 2.36.3 3.11.9.76.6 1.14 1.4 1.14 2.45a2.96 2.96 0 0 1-2 2.85zm-5.62-.8h3c1.6 0 2.4-.6 2.4-1.8 0-.6-.2-1.05-.59-1.35-.4-.3-1-.45-1.82-.45h-2.99v3.6zm3.3 5.62c.84 0 1.45-.15 1.83-.45.4-.3.6-.77.6-1.42 0-.66-.2-1.15-.6-1.46-.38-.31-1-.47-1.83-.47h-3.3v3.8h3.3zm14.98-7.29V149h-2.2v-1.4c-.28.5-.67.88-1.15 1.15-.48.26-1.03.4-1.65.4-2.22 0-3.33-1.25-3.33-3.75v-5.49h2.23v5.5c0 .67.13 1.15.4 1.47.27.3.7.46 1.26.46.66 0 1.18-.21 1.58-.64.4-.44.6-1.01.6-1.73v-5.06h2.26zm5.77 9.23a6.16 6.16 0 0 1-3.92-1.15l.63-1.58a5.45 5.45 0 0 0 3.33 1.08c.54 0 .95-.1 1.24-.27.3-.18.45-.43.45-.76 0-.27-.1-.49-.3-.65-.2-.16-.56-.3-1.05-.43l-1.51-.34c-1.66-.36-2.48-1.2-2.48-2.54 0-.55.15-1.04.46-1.46.32-.43.75-.76 1.32-1a5.78 5.78 0 0 1 5.42.8l-.67 1.52c-.91-.67-1.85-1.01-2.8-1.01-.52 0-.93.1-1.21.29a.9.9 0 0 0-.44.79c0 .26.09.47.26.63.18.16.48.29.9.4l1.54.34c.9.2 1.56.52 1.97.95.42.42.63.97.63 1.66 0 .84-.34 1.5-1.01 2-.67.49-1.6.73-2.76.73zm5.7-.14v-9.09h2.22V149h-2.23zm-.15-13.21h2.5V138h-2.5v-2.21zm10.04 3.89c2.17 0 3.25 1.24 3.25 3.74V149h-2.25v-5.47c0-.72-.13-1.24-.4-1.57-.28-.33-.71-.5-1.29-.5-.68 0-1.23.22-1.65.66-.42.44-.63 1.01-.63 1.73V149h-2.23v-6.52c0-.96-.05-1.81-.15-2.57h2.1l.17 1.5a3.3 3.3 0 0 1 1.26-1.28c.54-.3 1.15-.45 1.82-.45zm13.6 4.9h-6.27c.05.96.3 1.68.72 2.15.45.46 1.1.69 1.97.69 1 0 1.91-.33 2.77-.98l.64 1.55c-.43.35-.96.63-1.6.85-.62.2-1.26.3-1.9.3a4.78 4.78 0 0 1-3.51-1.26c-.86-.84-1.28-1.99-1.28-3.45 0-.93.18-1.75.56-2.47.37-.72.89-1.28 1.56-1.67.67-.41 1.44-.61 2.29-.61 1.25 0 2.23.4 2.95 1.22.73.8 1.1 1.91 1.1 3.33v.34zm-4-3.28c-.6 0-1.1.18-1.47.54-.38.34-.62.85-.72 1.53h4.23a2.49 2.49 0 0 0-.64-1.55c-.33-.35-.8-.52-1.4-.52zm9.23 7.84a6.16 6.16 0 0 1-3.92-1.15l.63-1.58a5.45 5.45 0 0 0 3.33 1.08c.54 0 .95-.1 1.24-.27.3-.18.45-.43.45-.76 0-.27-.1-.49-.3-.65-.21-.16-.56-.3-1.05-.43l-1.51-.34c-1.66-.36-2.49-1.2-2.49-2.54 0-.55.16-1.04.47-1.46.31-.43.75-.76 1.32-1a5.78 5.78 0 0 1 5.42.8l-.67 1.52c-.91-.67-1.85-1.01-2.81-1.01-.52 0-.92.1-1.2.29a.9.9 0 0 0-.44.79c0 .26.09.47.25.63.18.16.48.29.9.4l1.55.34c.9.2 1.56.52 1.96.95.42.42.63.97.63 1.66 0 .84-.33 1.5-1 2-.68.49-1.6.73-2.76.73zm9.02 0a6.16 6.16 0 0 1-3.92-1.15l.63-1.58a5.45 5.45 0 0 0 3.33 1.08c.54 0 .95-.1 1.24-.27.3-.18.45-.43.45-.76 0-.27-.1-.49-.3-.65-.21-.16-.56-.3-1.05-.43l-1.51-.34c-1.66-.36-2.49-1.2-2.49-2.54 0-.55.16-1.04.47-1.46.31-.43.75-.76 1.31-1a5.78 5.78 0 0 1 5.42.8l-.66 1.52c-.92-.67-1.85-1.01-2.81-1.01-.52 0-.92.1-1.2.29a.9.9 0 0 0-.44.79c0 .26.08.47.25.63.18.16.48.29.9.4l1.55.34c.9.2 1.55.52 1.96.95.42.42.63.97.63 1.66 0 .84-.33 1.5-1 2-.68.49-1.6.73-2.76.73zm26.92-12.96h2.23L215.75 149h-1.89l-3.22-9.22-3.26 9.22h-1.89l-4.52-12.82h2.36l3.2 9.56 3.34-9.56h1.65l3.26 9.63 3.28-9.63zm11.5 3.73V149h-2.2v-1.46c-.28.5-.68.9-1.2 1.19-.51.28-1.1.41-1.76.41-.79 0-1.5-.19-2.1-.57a3.8 3.8 0 0 1-1.43-1.64 5.7 5.7 0 0 1-.5-2.47c0-.93.17-1.76.5-2.48a4 4 0 0 1 1.44-1.7c.62-.4 1.31-.6 2.1-.6.65 0 1.24.14 1.76.43.51.27.9.66 1.18 1.17v-1.37h2.22zm-4.55 7.47c.75 0 1.32-.26 1.73-.77.41-.52.61-1.25.61-2.18 0-.96-.2-1.7-.6-2.22a2.1 2.1 0 0 0-1.75-.77c-.75 0-1.33.27-1.75.81-.4.53-.61 1.27-.61 2.21s.2 1.66.61 2.16c.42.5 1 .76 1.76.76zm7 1.62v-13.25h2.24V149h-2.23zm4.7 0v-13.25h2.23V149h-2.23zm12.65-4.43h-6.26c.05.97.29 1.7.72 2.16.44.46 1.1.69 1.96.69 1 0 1.92-.33 2.77-.98l.65 1.55c-.43.35-.97.63-1.6.85-.63.2-1.26.3-1.91.3a4.78 4.78 0 0 1-3.51-1.26c-.85-.84-1.28-1.99-1.28-3.45 0-.93.19-1.75.56-2.47a4.32 4.32 0 0 1 3.85-2.29c1.25 0 2.23.41 2.95 1.23.74.8 1.1 1.91 1.1 3.33v.34zm-4-3.27c-.6 0-1.09.18-1.47.54-.37.34-.61.85-.72 1.53h4.23a2.49 2.49 0 0 0-.63-1.55c-.34-.35-.8-.52-1.4-.52zm8.65.3v4.07c0 1.07.5 1.6 1.49 1.6.28 0 .58-.05.9-.14v1.78c-.4.14-.88.22-1.44.22-1.03 0-1.82-.3-2.38-.87-.55-.57-.82-1.4-.82-2.48v-4.18H250v-1.69h1.75v-2.21l2.25-.76v2.97h2.4v1.7h-2.4z","fill":"#1F2348"}}),_c('path',{attrs:{"opacity":".5","d":"M128.63 167.81V169h-6.54v-1.08l3.43-3.76c.44-.49.76-.93.95-1.32.2-.4.31-.8.31-1.19 0-.5-.14-.89-.43-1.15-.3-.27-.71-.4-1.26-.4-.93 0-1.85.36-2.77 1.09l-.52-1.07a5.26 5.26 0 0 1 3.33-1.2c.95 0 1.7.24 2.25.71.56.48.84 1.12.84 1.94 0 .58-.12 1.13-.37 1.65a7.58 7.58 0 0 1-1.26 1.72l-2.66 2.87h4.7zm8.7 1.3a3.03 3.03 0 0 1-2.65-1.3c-.6-.87-.9-2.13-.9-3.8 0-1.66.3-2.92.9-3.79.6-.87 1.49-1.3 2.65-1.3 1.15 0 2.04.43 2.64 1.3.61.86.91 2.12.91 3.78 0 1.67-.3 2.94-.9 3.81-.61.87-1.5 1.3-2.65 1.3zm0-1.16c.72 0 1.24-.32 1.58-.95.34-.65.52-1.65.52-3s-.17-2.34-.5-2.97a1.69 1.69 0 0 0-1.6-.93 1.7 1.7 0 0 0-1.6.95c-.33.62-.5 1.6-.5 2.95s.17 2.35.5 3c.35.63.88.95 1.6.95zm9.86-4.07c.58.16 1.02.45 1.33.86.3.41.46.93.46 1.56 0 .87-.3 1.55-.92 2.06-.6.5-1.43.74-2.48.74-.66 0-1.3-.1-1.9-.31a4.2 4.2 0 0 1-1.5-.9l.52-1.06c.9.73 1.84 1.1 2.84 1.1 1.36 0 2.04-.58 2.04-1.73 0-.56-.17-.97-.53-1.25-.35-.28-.89-.42-1.6-.42h-1.23v-1.17h1c.69 0 1.22-.15 1.58-.44.36-.28.54-.7.54-1.26 0-.5-.15-.89-.46-1.16-.3-.27-.72-.4-1.27-.4-.93 0-1.86.36-2.77 1.09l-.52-1.07c.4-.37.89-.66 1.48-.88.61-.21 1.23-.32 1.88-.32.93 0 1.67.23 2.22.7.56.46.84 1.08.84 1.86 0 .57-.13 1.07-.4 1.49-.27.42-.65.72-1.15.9zm3.55-4.85h6.75v1.08l-4.6 8.89h-1.56l4.6-8.78h-5.19v-1.19zm15.5 10.08a3.03 3.03 0 0 1-2.64-1.3c-.61-.87-.91-2.13-.91-3.8 0-1.66.3-2.92.9-3.79.61-.87 1.5-1.3 2.65-1.3 1.16 0 2.04.43 2.65 1.3.6.86.9 2.12.9 3.78 0 1.67-.3 2.94-.9 3.81-.6.87-1.49 1.3-2.65 1.3zm0-1.16c.72 0 1.25-.32 1.58-.95.35-.65.52-1.65.52-3s-.16-2.34-.5-2.97a1.69 1.69 0 0 0-1.6-.93 1.7 1.7 0 0 0-1.6.95c-.33.62-.5 1.6-.5 2.95s.17 2.35.5 3c.35.63.88.95 1.6.95zm11.83-.14V169h-6.54v-1.08l3.43-3.76c.44-.49.76-.93.95-1.32.2-.4.31-.8.31-1.19 0-.5-.15-.89-.43-1.15-.3-.27-.71-.4-1.26-.4-.93 0-1.85.36-2.78 1.09l-.51-1.07a5.26 5.26 0 0 1 3.33-1.2c.95 0 1.7.24 2.25.71.56.48.84 1.12.84 1.94 0 .58-.12 1.13-.38 1.65a7.58 7.58 0 0 1-1.26 1.72l-2.66 2.87h4.7zm6.1 0h2.18V169h-5.82v-1.19h2.18v-7.06l-2.03 1.26v-1.33l2.65-1.65h.84v8.78zm3.9-.49h1.68V169h-1.68v-1.68zm6.72 1.8a3.03 3.03 0 0 1-2.65-1.31c-.6-.87-.9-2.13-.9-3.8 0-1.66.3-2.92.9-3.79.61-.87 1.5-1.3 2.65-1.3 1.16 0 2.04.43 2.65 1.3.6.86.9 2.12.9 3.78 0 1.67-.3 2.94-.9 3.81-.61.87-1.5 1.3-2.65 1.3zm0-1.17c.72 0 1.25-.32 1.58-.95.35-.65.52-1.65.52-3s-.17-2.34-.5-2.97a1.69 1.69 0 0 0-1.6-.93 1.7 1.7 0 0 0-1.6.95c-.33.62-.5 1.6-.5 2.95s.17 2.35.5 3c.35.63.88.95 1.6.95zm8.4 1.16a3.03 3.03 0 0 1-2.65-1.3c-.6-.87-.91-2.13-.91-3.8 0-1.66.3-2.92.9-3.79.62-.87 1.5-1.3 2.65-1.3 1.16 0 2.04.43 2.65 1.3.6.86.91 2.12.91 3.78 0 1.67-.3 2.94-.91 3.81-.6.87-1.49 1.3-2.65 1.3zm0-1.16c.71 0 1.24-.32 1.58-.95a6.6 6.6 0 0 0 .51-3c0-1.35-.16-2.34-.5-2.97a1.69 1.69 0 0 0-1.6-.93 1.7 1.7 0 0 0-1.6.95c-.33.62-.5 1.6-.5 2.95s.17 2.35.5 3c.35.63.89.95 1.6.95zm15.9-8.92h1.36V169h-1.1l-5.72-7.53V169h-1.36v-9.97h1.1l5.72 7.55v-7.55zm3.68 9.97v-9.97h1.44V169h-1.44zm12.15-9.97h1.16V169h-1.3v-6.85l-2.96 6.85h-.99l-3-6.8.02 6.8h-1.3v-9.97h1.16l3.63 8.23 3.58-8.23z","fill":"#1F2348"}}),_c('path',{attrs:{"d":"M75.9 160.8l-4.2-7.1c-.3-.51-.85-.82-1.44-.82h-8.39c-.6 0-1.15.3-1.45.81l-4.2 7.12c-.3.5-.3 1.13 0 1.63l4.2 7.12c.3.5.85.81 1.45.81h8.39c.6 0 1.15-.3 1.45-.81l4.19-7.12c.3-.5.3-1.13 0-1.63z","fill":"url(#paint10_radial)"}}),_c('mask',{attrs:{"id":"f","mask-type":"alpha","maskUnits":"userSpaceOnUse","x":"56","y":"152","width":"21","height":"19"}},[_c('path',{attrs:{"d":"M75.9 160.8l-4.2-7.1c-.3-.51-.85-.82-1.44-.82h-8.39c-.6 0-1.15.3-1.45.81l-4.2 7.12c-.3.5-.3 1.13 0 1.63l4.2 7.12c.3.5.85.81 1.45.81h8.39c.6 0 1.15-.3 1.45-.81l4.19-7.12c.3-.5.3-1.13 0-1.63z","fill":"#E9B213"}})]),_c('g',{attrs:{"mask":"url(#f)","clip-rule":"evenodd"}},[_c('path',{attrs:{"fill-rule":"evenodd","d":"M66.53 156.73a4.91 4.91 0 0 1 4.96 4.86 4.91 4.91 0 0 1-4.96 4.86 4.91 4.91 0 0 1-4.96-4.86 4.91 4.91 0 0 1 4.96-4.86z","fill":"#FB8C00"}}),_c('path',{attrs:{"opacity":".2","fill-rule":"evenodd","d":"M71.4 161.6c0 2.64-2.2 4.79-4.9 4.79-1.28 0-2.52-.5-3.43-1.38 1.28.28 4.46.37 6.18-1.73 1.28-1.52 1.03-4.04.51-5.26a4.74 4.74 0 0 1 1.63 3.57z","fill":"#010101"}}),_c('path',{attrs:{"fill-rule":"evenodd","d":"M67 157.14c-.1.09-.17.2-.22.32-.13.24.12.85.87.97.74.12 1.36.24 1.48-.37.13-.6-1.66-1-2.13-.92z","fill":"#1F2348"}}),_c('path',{attrs:{"fill-rule":"evenodd","d":"M66.88 157.3l2.38-3.13-.45 3.63c-.17.75-2.4.75-1.94-.5z","fill":"#fff"}}),_c('path',{attrs:{"fill-rule":"evenodd","d":"M66.88 157.3c1.01.76 1.63-.57 1.87-2.46l.5-.66-.44 3.62c-.17.75-2.4.75-1.94-.5z","fill":"#1F2348"}}),_c('path',{attrs:{"fill-rule":"evenodd","d":"M68.27 155.47s.24.51.8.22l.03-.27s-.42.24-.7-.14l-.13.2zm-.52.68s.44.94 1.22.34l.03-.25c-.4.2-.77.16-1.1-.28l-.15.19zm1.12 1.2s-1.22.84-1.72-.4l.16-.22s.58.97 1.59.36l-.03.25z","fill":"#1F2348"}}),_c('path',{attrs:{"fill-rule":"evenodd","d":"M59.66 160.12s-.57.03-.8.15c-.06.03-.05.14.02.19.46.34.8.8 1 1.34.4 1.03.41 2.03 1.7 2.48 1.29.45 1.83 0 1.83 0s.89-1.1-.1-2.18c0 0-.2-.19-.58-.07-.45.14-.93.23-1.45-.69-.51-.92-.77-1.33-1.62-1.22zm13.16-.6c-.28-.23-1.93-.05-1.93-.05l.1.22.3.6c.3-.13.63-.23.96-.3 0 .02.23 2.33-.02 2.57-.25.25-1.04.4-1.04.4l-.07.21-.13.32s2.11.17 2.11-1.3c.08-1.97.07-2.37-.28-2.67z","fill":"#FB8C00"}}),_c('path',{attrs:{"fill-rule":"evenodd","d":"M59.07 160.62c.57.5.73.96.81 1.18.4 1.03.41 2.03 1.7 2.48 1.29.45 1.83 0 1.83 0s.66-.73.22-1.7c0 0 .48 1.34-.98 1.32-.68 0-1.3-.1-1.8-.72-.66-.82-.97-2.3-1.78-2.56z","fill":"#1F2348"}}),_c('path',{attrs:{"fill-rule":"evenodd","d":"M59.66 160.12c.44-.03.8.04.81.16.01.12-.34.23-.78.26s-.8-.05-.81-.16c-.01-.12.34-.23.78-.26z","fill":"#fff"}}),_c('path',{attrs:{"fill-rule":"evenodd","d":"M59.7 160.22c.33-.02.6.01.6.07 0 .06-.26.12-.59.14-.33.02-.6 0-.6-.07 0-.06.26-.12.59-.14z","fill":"#1F2348"}}),_c('path',{attrs:{"fill-rule":"evenodd","d":"M60.3 160.3c.07.1-.59.13-.59.13.05-.13.04-.2-.01-.2 0 0 .54-.04.6.06z","fill":"#010101"}}),_c('path',{attrs:{"fill-rule":"evenodd","d":"M72.25 160s.23 2.32-.02 2.56c-.25.25-1.04.4-1.04.4l-.07.21s1.1-.15 1.35-.5c.26-.35.13-2.17.13-2.17s.04-.64-.35-.5z","fill":"#1F2348"}}),_c('path',{attrs:{"fill-rule":"evenodd","d":"M70.89 159.47s1.8-.22 2 .1a3.15 3.15 0 0 0-1.1 0l-.8.12-.1-.22zM62.24 162.2c.65.13 1.12.01 1.3.21-.06-.1-.1-.17-.23-.3a.58.58 0 0 0-.58-.08c-1.34.5-1.43-1.16-2.18-1.72.76.87.72 1.7 1.69 1.9z","fill":"#fff"}}),_c('path',{attrs:{"fill-rule":"evenodd","d":"M69.6 164.16c-.36.38-.86.6-1.38.6h-.05c-.54 0-1.03-.22-1.38-.6-.37-.4-.6-1.05-.6-1.34 0-.26.43.07 1.52.16h.52c.98 0 1.59-.3 1.7-.36.1-.06.3-.08.3.2s-.27.94-.64 1.34z","fill":"#1F2348"}}),_c('path',{attrs:{"fill-rule":"evenodd","d":"M66.82 160.04c.42-.03.8.42.82 1 .04.58-.28 1.06-.7 1.09-.43.02-.8-.43-.83-1-.03-.59.28-1.07.7-1.1z","fill":"#fff"}}),_c('path',{attrs:{"fill-rule":"evenodd","d":"M66.89 160.6c.25 0 .46.25.46.54 0 .3-.2.54-.46.54-.25 0-.46-.24-.46-.54 0-.3.2-.53.46-.53z","fill":"#1F2348"}}),_c('path',{attrs:{"fill-rule":"evenodd","d":"M66.6 160.6c.13 0 .24.12.24.25s-.11.24-.25.24a.25.25 0 0 1-.25-.24c0-.13.11-.24.25-.24z","fill":"#fff"}}),_c('path',{attrs:{"fill-rule":"evenodd","d":"M66.24 160.05c.44-.5.87-.49 1.3 0 0 0-.6-1.17-1.3 0z","fill":"#1F2348"}}),_c('path',{attrs:{"fill-rule":"evenodd","d":"M69.67 160.05c.42-.02.8.42.83 1 .03.58-.29 1.06-.71 1.09-.43.02-.8-.43-.83-1-.03-.58.29-1.07.71-1.1z","fill":"#fff"}}),_c('path',{attrs:{"fill-rule":"evenodd","d":"M69.74 160.6c.25 0 .46.25.46.54 0 .3-.2.54-.46.54-.25 0-.46-.24-.46-.54 0-.3.2-.53.46-.53z","fill":"#1F2348"}}),_c('path',{attrs:{"fill-rule":"evenodd","d":"M69.44 160.6c.14 0 .25.12.25.25s-.11.24-.25.24a.25.25 0 0 1-.24-.24c0-.13.1-.24.24-.24z","fill":"#fff"}}),_c('path',{attrs:{"fill-rule":"evenodd","d":"M69.1 160.05c.43-.5.86-.49 1.28 0 0 0-.59-1.17-1.28 0z","fill":"#1F2348"}}),_c('path',{attrs:{"fill-rule":"evenodd","d":"M65.08 160.01h-.22v.49h.22c.12.03.22.14.22.26v.7s-.03 1 1.47.97c0 0-1.07.02-1.24-1v-.67c0-.1-.08-.18-.17-.22l-.23-.04-.05-.49z","fill":"#DD6901"}}),_c('path',{attrs:{"d":"M65.08 160.01v.49l.25.02c.1.04.16.12.17.22v.66s.11 1.1 1.34 1.03c1.23-.06 1.26-1.2 1.26-1.2s0-.8.28-.8c.27 0 .28.8.28.8s.05 1.2 1.28 1.2 1.28-1.03 1.28-1.03v-.7c0-.1.07-.17.16-.17h.23v-.48l-2.7-.02a.51.51 0 0 0-.25.15l-.26.24-.27-.25a.42.42 0 0 0-.34-.12l-2.71-.04z","stroke":"#1F2348"}}),_c('path',{attrs:{"fill-rule":"evenodd","d":"M67.78 163.6l-.02-.53c.4.05.83.04 1.24-.04l.02.5c.01.07-.02.1-.09.12l-.5.02-.04-.41-.04.4-.48.02c-.06-.01-.09-.03-.09-.08z","fill":"#fff"}}),_c('path',{attrs:{"fill-rule":"evenodd","d":"M66.53 166.8c2.2 0 3.97.47 3.97 1.05 0 .59-1.78 1.06-3.97 1.06-2.2 0-3.97-.47-3.97-1.06 0-.58 1.78-1.06 3.97-1.06z","fill":"#1F2348"}})]),_c('path',{attrs:{"opacity":".1","d":"M92.53 170.43l-4.2-7.11c-.3-.5-.85-.82-1.45-.82H78.5c-.6 0-1.16.31-1.46.82l-4.2 7.11c-.29.5-.29 1.13 0 1.64l4.2 7.11c.3.5.86.82 1.46.82h8.38c.6 0 1.15-.31 1.45-.82l4.2-7.11c.3-.5.3-1.13 0-1.64z","fill":"url(#paint11_radial)"}}),_c('path',{attrs:{"opacity":".1","d":"M109.15 160.8l-4.2-7.1c-.3-.51-.85-.82-1.45-.82h-8.38c-.6 0-1.15.3-1.45.81l-4.2 7.12c-.3.5-.3 1.13 0 1.63l4.2 7.12c.3.5.85.81 1.45.81h8.38c.6 0 1.16-.3 1.46-.81l4.19-7.12c.3-.5.3-1.13 0-1.63z","fill":"url(#paint12_radial)"}}),_c('path',{attrs:{"d":"M75.9 141.56l-4.2-7.12c-.3-.5-.85-.81-1.44-.81h-8.39c-.6 0-1.15.3-1.45.81l-4.2 7.12c-.3.5-.3 1.13 0 1.63l4.2 7.12c.3.5.85.81 1.45.81h8.39c.6 0 1.15-.3 1.45-.81l4.19-7.12c.3-.5.3-1.13 0-1.63z","fill":"url(#paint13_radial)"}}),_c('path',{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M66.52 137.5a4.94 4.94 0 1 1 .02 9.87 4.94 4.94 0 0 1-.02-9.88z","fill":"#D94432"}}),_c('path',{attrs:{"opacity":".3","fill-rule":"evenodd","clip-rule":"evenodd","d":"M71.37 142.42a4.87 4.87 0 0 1-8.3 3.47c1.27.29 4.45.37 6.16-1.76 1.28-1.54 1.02-4.1.51-5.33a4.84 4.84 0 0 1 1.63 3.62z","fill":"#010101"}}),_c('path',{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M62.9 136.57s.3.74.67.6c.37-.16 5.95-.22 5.95-.22l.5-.58s.95-.63.5.4l-.26.45c-.07.13-.13.27-.17.42-.01.17.21-.34.21-.34l.47.75s.31.56-.22.51c-.53-.04-.87-.43-1.03-.62l-5.95.2s-.8 1.02-1.16.98c-.36-.04-.32-.38-.09-1.09 0 0 .21-.34.22-.51.02-.18-.2.34-.2.34s-.4-.93-.44-1.1c-.09-.46.41-1.13 1-.2z","fill":"#fff"}}),_c('path',{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M62.6 137.57s.4-.09.22.07c-.19.16-.53.64.45.3 1-.35 5.84-.34 5.84-.34l.35.29-5.88.24s-.71.87-1.07.84c-.36-.02-.09-.86-.09-.86l.19-.54zm7.76-1.37s.29.14-.1.64c-.4.5-.79.65-.1 1.07.7.42.54.05.54.05l-.4-.65c0-.01.77-1.25.06-1.11z","fill":"#21BCA5"}}),_c('path',{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M60.89 146.97l-.2-1.6.25-.04.18 1.6s-.05.25-.23.04z","fill":"#303030"}}),_c('path',{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M62.4 141.4c.2.28.26.63.16.95l-.05.25h.53c.37.12.4 1 .07 1.26-.13.08-.26.18-.37.27a3.1 3.1 0 0 1-1.04.78l-.4.17c-.75.3-2.16.73-2.4-.8l.05-.81c.02-.4-.19-.7.1-1.48.28-.78 1.08-.9 1.68-.74 0 0 .1.06.3-.2.2-.28 1.02-.42 1.38.35z","fill":"#D8D8D8"}}),_c('path',{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M61.46 145.02c-.7.3-2.28.89-2.53-.75l.05-.83c.03-.4-.18-.7.1-1.47.29-.78.3-.8 1.68-.74 1.28.03.66 2 .9 3.34 0 .13-.1.4-.2.45z","fill":"#fff"}}),_c('path',{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M61.72 144.91c.4-.09-2.5 1.27-2.79-.64l.04-.81c.03-.41-.18-.7.1-1.48s1.09-.9 1.68-.74c-1.83.11-1.04 3.93.97 3.67z","fill":"#21BCA5"}}),_c('path',{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M63.13 143.89s-1.03.89-1.41 1.03c-.34.13-2 1-2.6-.06a3.16 3.16 0 0 1-.19-.58c.11.27.7.52 1.31.53.82.04 1.4-.53 1.9-.44.3-.2.64-.36.99-.48zM60.71 139.31l1.06.04-.66.8.27 1-.97-.39-.86.6.05-1.05-.82-.64 1.02-.27.36-.99.55.9z","fill":"#21BCA5"}}),_c('path',{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M60.37 139.26l.16.25c.02.03.08.05.11.05l.29.02c.07 0 .12.07.12.14 0 .04-.01.06-.03.1l-.18.22c-.04.04-.04.08-.04.13l.07.29c.02.07-.01.14-.08.16h-.1l-.26-.1a.11.11 0 0 0-.13 0l-.25.17c-.05.04-.14.02-.2-.04l-.01-.09.01-.28a.16.16 0 0 0-.05-.13l-.23-.18c-.06-.03-.07-.12-.04-.2.02-.01.06-.03.07-.05l.29-.07c.04-.02.07-.03.09-.09l.1-.27c.02-.07.11-.1.19-.09.05 0 .09.02.1.06z","fill":"#fff"}}),_c('path',{attrs:{"opacity":".7","fill-rule":"evenodd","clip-rule":"evenodd","d":"M66.15 141.93s0-1.48.74-1.48.74 1.43.74 1.43-.62-1.43-1.48.05zM69.12 141.87s0-1.36.68-1.36.68 1.31.68 1.31-.57-1.3-1.36.05zM68.41 144.28h-.18c-.11-.01-.16.65-.32.7-.15.03-.21-.8-.31-.82-.3-.1-.8-.22-1.02-.36-.5-.32-.55-.71-.55-.87 0-.29.92.67 2.35.67h.06c.97 0 1.58-.31 1.69-.37.1-.06.3-.08.3.2 0 .13-.24.34-.59.52-.09.04-.1 1.04-.3.99-.18-.05-.2-.79-.32-.76-.26.07-.53.1-.8.1z","fill":"#000"}}),_c('path',{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M67.5 143.47l.31 1.4s.06.24.19 0c.12-.23.3-1.28.3-1.28-.27 0-.54-.04-.8-.12z","fill":"#fff"}}),_c('path',{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M67.88 143.84s.14-.06 0 1.04c0 0 0 .13.12 0 .1-.24.3-1.28.3-1.28-.17 0-.35-.02-.53-.06l.1.3z","fill":"#21BCA5"}}),_c('path',{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M69.1 143.55l.34 1.25s.15.3.22 0c.07-.28.22-1.46.22-1.46s-.19.1-.79.2z","fill":"#fff"}}),_c('path',{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M69.42 143.75s.13-.09.18 1.02c0 .02.02.04.03.05.02.02.21-1.43.21-1.43-.19.08-.39.15-.58.2l.16.16z","fill":"#21BCA5"}}),_c('path',{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M66.4 147.25l-.06 1.38s.14.32-1.2.32h-2.8s-.67-.64-.28-.96c.4-.32 1.48-.42 1.48-.42l-.33-.81 3.18.5z","fill":"#1F2348"}}),_c('path',{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M64.02 147.15l-1.03-.1c-.04 0-.06-.05-.05-.08l.01-.06c0-.04.04-.06.08-.05l1.03.1c.03 0 .06.04.04.08v.06c-.02.03-.04.05-.08.05zM64.12 147.46l-1.03-.1c-.04 0-.06-.05-.05-.08l.01-.06c0-.04.04-.07.08-.06l1.02.12c.04 0 .07.03.05.07v.06c-.02.04-.06.06-.08.05z","fill":"#21BCA5"}}),_c('path',{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M65.1 148.83a.48.48 0 1 1-.49.48c0-.27.22-.48.48-.48z","fill":"#1F2348"}}),_c('path',{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M65.3 148.8a.48.48 0 1 1 0 .97.48.48 0 0 1 0-.97z","fill":"#fff"}}),_c('path',{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M65.3 149.01a.27.27 0 1 1 0 .55.27.27 0 0 1 0-.54z","fill":"#21BCA5"}}),_c('path',{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M63.12 148.83a.48.48 0 1 1-.49.48c0-.27.22-.48.49-.48z","fill":"#1F2348"}}),_c('path',{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M63.33 148.8a.48.48 0 1 1 0 .97.48.48 0 0 1 0-.97z","fill":"#fff"}}),_c('path',{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M63.32 149.01a.27.27 0 1 1 0 .55.27.27 0 0 1 0-.54z","fill":"#21BCA5"}}),_c('path',{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M66.71 147.25l-.2 1.38s-.12.32 1.22.32h2.8s.68-.64.28-.96c-.4-.32-1.84-.42-1.84-.42l.07-.69-2.33.37z","fill":"#1F2348"}}),_c('path',{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M68.36 147.02l1.03.06c.03 0 .06.04.06.06v.06c0 .04-.04.06-.06.06l-1.03-.06c-.04 0-.06-.03-.06-.06v-.06c0-.04.03-.08.06-.06zM68.24 147.3l1.02.06c.04 0 .06.04.06.06v.07c0 .03-.03.06-.06.06l-1.02-.06c-.04 0-.07-.04-.07-.07v-.06c0-.03.03-.06.07-.06z","fill":"#21BCA5"}}),_c('path',{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M67.78 148.83a.48.48 0 1 1-.48.48c0-.27.21-.48.48-.48z","fill":"#1F2348"}}),_c('path',{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M67.57 148.8a.48.48 0 1 1 0 .97.48.48 0 0 1 0-.97z","fill":"#fff"}}),_c('path',{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M67.57 149.01a.27.27 0 1 1 0 .55.27.27 0 0 1 0-.54z","fill":"#21BCA5"}}),_c('path',{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M69.76 148.83a.48.48 0 1 1 0 .96.48.48 0 0 1 0-.96z","fill":"#1F2348"}}),_c('path',{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M69.55 148.8a.48.48 0 1 1 0 .97.48.48 0 0 1 0-.97z","fill":"#fff"}}),_c('path',{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M69.55 149.01a.27.27 0 1 1 0 .55.27.27 0 0 1 0-.54z","fill":"#21BCA5"}}),_c('path',{attrs:{"d":"M92.53 131.93l-4.2-7.11c-.3-.5-.85-.82-1.45-.82H78.5c-.6 0-1.16.31-1.46.82l-4.2 7.11c-.29.5-.29 1.13 0 1.64l4.2 7.11c.3.5.86.82 1.46.82h8.38c.6 0 1.15-.31 1.45-.82l4.2-7.11c.3-.5.3-1.13 0-1.64z","fill":"url(#paint14_radial)"}}),_c('mask',{attrs:{"id":"g","mask-type":"alpha","maskUnits":"userSpaceOnUse","x":"72","y":"124","width":"21","height":"18"}},[_c('path',{attrs:{"d":"M92.53 131.93l-4.2-7.11c-.3-.5-.85-.82-1.45-.82H78.5c-.6 0-1.16.31-1.46.82l-4.2 7.11c-.29.5-.29 1.13 0 1.64l4.2 7.11c.3.5.86.82 1.46.82h8.38c.6 0 1.15-.31 1.45-.82l4.2-7.11c.3-.5.3-1.13 0-1.64z","fill":"url(#paint15_radial)"}})]),_c('g',{attrs:{"mask":"url(#g)","fill-rule":"evenodd","clip-rule":"evenodd"}},[_c('path',{attrs:{"d":"M82.74 127.85a4.91 4.91 0 0 1 4.96 4.87 4.91 4.91 0 0 1-4.96 4.86 4.91 4.91 0 0 1-4.96-4.86 4.91 4.91 0 0 1 4.96-4.87z","fill":"#E9B213"}}),_c('path',{attrs:{"opacity":".2","d":"M87.6 132.72c0 2.65-2.19 4.8-4.9 4.8-1.27 0-2.5-.5-3.42-1.38 1.28.28 4.46.36 6.17-1.74 1.3-1.52 1.04-4.04.52-5.26a4.74 4.74 0 0 1 1.63 3.58z","fill":"#010101"}}),_c('path',{attrs:{"d":"M83.21 128.26a1 1 0 0 0-.22.32c-.13.24.12.85.87.97.74.13 1.36.25 1.48-.36.13-.6-1.66-1-2.13-.93z","fill":"#0582CA"}}),_c('path',{attrs:{"d":"M83.08 128.43l2.39-3.13-.45 3.62c-.17.76-2.4.76-1.94-.49z","fill":"#fff"}}),_c('path',{attrs:{"d":"M83.08 128.43c1.02.76 1.64-.58 1.88-2.47l.5-.66-.44 3.62c-.17.76-2.4.76-1.94-.49z","fill":"#0582CA"}}),_c('path',{attrs:{"d":"M84.48 126.6s.24.5.8.21l.03-.27s-.42.24-.7-.13l-.13.19zm-.52.68s.44.94 1.22.33l.03-.24c-.4.2-.77.15-1.1-.28l-.15.19zm1.12 1.19s-1.22.84-1.72-.4l.16-.22s.58.97 1.59.37l-.03.25z","fill":"#0582CA"}}),_c('path',{attrs:{"d":"M76.1 131.62l.3 2.92-.3.24v.4s0 .21.3.28c.3.06.87.25 1.75.17a4.1 4.1 0 0 0 1.37-.35.36.36 0 0 0 .22-.3l-.11-.44-.3-.24-.3-2.8","fill":"#fff"}}),_c('path',{attrs:{"d":"M76.4 131.65l.31 2.88-.45.36s0 .16.6.25c.83.26 2.2-.02 2.6-.24.3-.1.06-.24.06-.24l-.31-.36-.31-2.78-2.5.13z","fill":"#E9B213"}}),_c('path',{attrs:{"d":"M77.55 131.26c.82-.05 1.48.05 1.5.22 0 .17-.65.34-1.46.38-.82.05-1.48-.05-1.5-.22 0-.16.65-.34 1.46-.38z","fill":"#fff"}}),_c('path',{attrs:{"d":"M79.63 134.8c.01.21-.73.54-1.66.6-.93.04-1.71-.2-1.73-.4 0-.2.73-.41 1.68-.46.94-.05 1.68.06 1.7.27z","fill":"#E9B213"}}),_c('path',{attrs:{"d":"M78.57 134.18a.22.22 0 0 1-.23-.18l-.14-1.58c0-.1.09-.19.2-.19a.2.2 0 0 1 .22.17l.14 1.58c.01.11-.07.2-.19.2zm-.73.12a.22.22 0 0 1-.23-.17l-.14-1.58c0-.11.09-.2.2-.2.11-.01.2.06.23.17l.13 1.58c.01.11-.08.2-.19.2zm-.73 0a.22.22 0 0 1-.23-.17l-.14-1.58c0-.11.1-.2.21-.2.11-.01.21.06.24.17l.12 1.58c0 .11-.09.2-.2.2z","fill":"#FFD22D"}}),_c('path',{attrs:{"d":"M76.5 131.85s-1 .27-.85-.53c0 0-.61-.67.15-.67 0 0 .15-.54.75 0 0 0 .61-.94 1.22.13 0 0 .46-.53.75.27 0 0 .95.3.25.62-.7.33-2.02.32-2.27.18z","fill":"#fff"}}),_c('path',{attrs:{"d":"M76.65 131.8s-.85.21-.72-.42c0 0-.5-.52.13-.52 0 0 .12-.43.64 0 0 0 .51-.75 1.03.1 0 0 .39-.42.65.21 0 0 .79.25.2.49-.58.24-1.73.24-1.93.13z","fill":"#FFEFAE"}}),_c('path',{attrs:{"d":"M77.52 131.32s.3-.1.21-.35c-.01 0 .27.23-.21.35zm-1.3-.17c.15.08.33.06.47-.05 0 0-.07.31-.47.05zm.46-.14c.08.24.33.37.58.32 0 0-.43.3-.58-.32zm1.25-.2s.22-.04.22.32c0 .37-.38.48-.38.48s.1-.11.23.01c.14.12-.18.2-.18.2s.8-.03 1.08-.3c.28-.26-.45-.39-.45-.39s0-.37-.52-.31z","fill":"#03A9F4"}}),_c('path',{attrs:{"d":"M85.34 132.78s0-1.34.69-1.34c.68 0 .68 1.29.68 1.29s-.57-1.29-1.37.05zm-2.97.06s0-1.46.74-1.46c.75 0 .75 1.4.75 1.4s-.62-1.4-1.5.06z","fill":"#010101"}}),_c('path',{attrs:{"d":"M82.12 133.37h4.75s-.14 2.81-2.4 2.81c-.63.03-1.2-.23-1.6-.7-.73-.83-.75-2.1-.75-2.1z","fill":"#603813"}}),_c('path',{attrs:{"d":"M86.22 135.25c-.4.57-1.05.9-1.76.88-.62.03-1.2-.23-1.6-.7-.72-.83 3.96-1.01 3.36-.19z","fill":"#F15A24"}}),_c('path',{attrs:{"d":"M82.12 133.32h4.75c-.01.3-.06.61-.16.9 0 0-2.8.5-4.45-.04a3.93 3.93 0 0 1-.14-.86z","fill":"#fff"}}),_c('path',{attrs:{"d":"M78.4 139.65h9.3s.74 0 .87-.27c.12-.27.12.4-.87.55-1 .14-8.3 0-9.3 0s-1.12-.28 0-.28z","fill":"#444"}}),_c('path',{attrs:{"d":"M77.04 139.8h9.3s.74 0 .86-.26c.13-.27.13.4-.86.54-1 .15-8.31 0-9.3 0h-.27l-.2-.25c0-.01.28-.03.47-.03z","fill":"#919191"}}),_c('path',{attrs:{"d":"M82.73 137.31l-1.32 2.14s-.13.32 1.2.32h2.82s.67-.64.27-.95c-.4-.32-1.47-.41-1.47-.41l1.06-1.68s-.94.63-2.56.58z","fill":"#1F2348"}}),_c('path',{attrs:{"d":"M80.7 137l-1.43 2.45s-.13.32 1.21.32h2.82s.67-.64.27-.95c-.4-.32-1.47-.41-1.47-.41l.94-1.05c-.01 0-.96.1-2.33-.36z","fill":"#464D8A"}}),_c('path',{attrs:{"d":"M83.97 137.8l1 .23c.04.01.05.03.05.07l-.01.06c-.01.04-.04.05-.08.05l-1-.23c-.04-.01-.05-.04-.05-.07l.01-.06c0-.04.04-.05.08-.05zm.18-.38l1 .23c.05.01.06.04.06.07l-.01.07c-.02.03-.04.05-.08.05l-1-.24c-.04 0-.05-.03-.05-.07l.01-.06c.01-.04.04-.05.07-.05zm-2.29.5l1 .23c.04.01.05.04.05.07v.06c-.02.04-.05.05-.08.05l-1-.23c-.04-.01-.06-.03-.06-.07l.02-.06c0-.04.03-.05.07-.05zm.19-.38l1 .23c.04.02.05.04.05.08l-.01.06c-.01.03-.04.05-.08.05l-1-.24c-.04 0-.05-.03-.05-.07l.01-.06c.01-.03.05-.05.08-.05z","fill":"#03A9F4"}})]),_c('path',{attrs:{"opacity":".1","d":"M109.15 141.56l-4.2-7.12c-.3-.5-.85-.81-1.45-.81h-8.38c-.6 0-1.15.3-1.45.81l-4.2 7.12c-.3.5-.3 1.13 0 1.63l4.2 7.12c.3.5.85.81 1.45.81h8.38c.6 0 1.16-.3 1.46-.81l4.19-7.12c.3-.5.3-1.13 0-1.63z","fill":"url(#paint16_radial)"}})]),_c('g',{attrs:{"opacity":".7"}},[_c('rect',{attrs:{"x":"40","y":"192","width":"324","height":"80","rx":"4","fill":"#fff"}}),_c('path',{attrs:{"d":"M127.2 229.16a6.58 6.58 0 0 1-3.31-.8 5.44 5.44 0 0 1-2.16-2.3c-.5-.99-.76-2.15-.76-3.49 0-1.32.25-2.47.76-3.45a5.3 5.3 0 0 1 2.16-2.29 6.58 6.58 0 0 1 3.31-.8c.86 0 1.67.13 2.43.4.77.27 1.4.64 1.9 1.12l-.75 1.7a5.88 5.88 0 0 0-1.73-1.01 5.04 5.04 0 0 0-1.81-.33c-1.24 0-2.2.4-2.88 1.2-.68.81-1.01 1.96-1.01 3.46 0 1.52.33 2.68 1 3.5.68.8 1.64 1.2 2.89 1.2a5.3 5.3 0 0 0 3.54-1.33l.76 1.7c-.5.47-1.14.85-1.91 1.13-.76.26-1.57.4-2.43.4zm11.55-9.48c2.17 0 3.26 1.24 3.26 3.74V229h-2.25v-5.47c0-.72-.14-1.24-.42-1.57-.27-.33-.7-.5-1.28-.5-.68 0-1.23.22-1.65.66-.42.44-.63 1.01-.63 1.73V229h-2.23v-13.25h2.23v5.47c.31-.49.72-.87 1.24-1.13a3.6 3.6 0 0 1 1.73-.41zm5.64 9.32v-9.09h2.23V229h-2.23zm-.14-13.21h2.5V218h-2.5v-2.21zm4.84 13.21v-13.25h2.23V229h-2.23zm13.38-13.25V229h-2.21v-1.46c-.28.5-.67.9-1.19 1.19-.51.28-1.1.41-1.76.41a3.76 3.76 0 0 1-3.53-2.26 5.93 5.93 0 0 1-.5-2.5c0-.94.16-1.76.5-2.47a3.8 3.8 0 0 1 3.53-2.23c.65 0 1.22.13 1.72.41.52.26.92.64 1.2 1.13v-5.47h2.24zm-4.57 11.63c.75 0 1.32-.26 1.73-.77a3.4 3.4 0 0 0 .63-2.2c0-.95-.2-1.68-.61-2.2-.41-.51-.99-.77-1.73-.77-.76 0-1.34.26-1.76.77-.41.5-.62 1.23-.62 2.16 0 .95.2 1.69.62 2.22.41.53 1 .79 1.74.79zm11.92-7.69c.35 0 .65.05.9.15l-.02 2.05a3.13 3.13 0 0 0-1.19-.23c-.76 0-1.35.22-1.76.66-.4.45-.6 1.03-.6 1.77V229h-2.23v-6.52c0-.96-.04-1.81-.14-2.57h2.1l.19 1.6a2.7 2.7 0 0 1 1.08-1.35c.49-.31 1.04-.47 1.67-.47zm9.93 4.88h-6.26c.05.97.29 1.7.72 2.16.44.46 1.1.69 1.96.69 1 0 1.92-.33 2.77-.98l.65 1.55c-.43.35-.97.63-1.6.85-.63.2-1.26.3-1.91.3a4.78 4.78 0 0 1-3.51-1.26c-.85-.84-1.28-1.99-1.28-3.45 0-.93.19-1.75.56-2.47a4.32 4.32 0 0 1 3.85-2.29c1.25 0 2.23.41 2.95 1.23.74.8 1.1 1.91 1.1 3.33v.34zm-4-3.27c-.6 0-1.09.18-1.47.54-.37.34-.61.85-.72 1.53h4.23a2.49 2.49 0 0 0-.63-1.55c-.34-.35-.8-.52-1.4-.52zm11.11-1.62c2.17 0 3.26 1.24 3.26 3.74V229h-2.25v-5.47c0-.72-.14-1.24-.42-1.57-.27-.33-.7-.5-1.27-.5-.69 0-1.24.22-1.66.66-.42.44-.63 1.01-.63 1.73V229h-2.23v-6.52c0-.96-.05-1.81-.15-2.57h2.11l.16 1.5a3.3 3.3 0 0 1 1.26-1.28c.54-.3 1.15-.45 1.82-.45zm7.63-3.5v1.66c0 .64-.1 1.21-.32 1.73-.22.5-.59 1.01-1.1 1.53l-.92-.72c.54-.58.86-1.14.97-1.68h-1.15v-2.52h2.52zm5.07 12.96a6.16 6.16 0 0 1-3.92-1.15l.63-1.58a5.45 5.45 0 0 0 3.33 1.08c.54 0 .95-.1 1.24-.27.3-.18.45-.43.45-.76 0-.27-.1-.49-.3-.65-.21-.16-.56-.3-1.05-.43l-1.51-.34c-1.66-.36-2.49-1.2-2.49-2.54 0-.55.16-1.04.47-1.46.31-.43.75-.76 1.31-1a5.78 5.78 0 0 1 5.42.8l-.66 1.52c-.92-.67-1.85-1.01-2.81-1.01-.52 0-.92.1-1.2.29a.9.9 0 0 0-.44.79c0 .26.08.47.25.63.18.16.48.29.9.4l1.55.34c.9.2 1.55.52 1.96.95.42.42.63.97.63 1.66 0 .84-.33 1.5-1 2-.68.49-1.6.73-2.76.73zm10.79-.14v-12.82h8.37v1.86h-6.07v3.5h5.7v1.88h-5.7V229h-2.3zm18.24-9.09V229h-2.2v-1.4c-.28.5-.67.88-1.15 1.15-.48.26-1.03.4-1.65.4-2.22 0-3.33-1.25-3.33-3.75v-5.49h2.23v5.5c0 .67.13 1.15.4 1.47.27.3.7.46 1.26.46.66 0 1.18-.21 1.58-.64.4-.44.6-1.01.6-1.73v-5.06h2.26zm7.65-.23c2.17 0 3.25 1.24 3.25 3.74V229h-2.25v-5.47c0-.72-.13-1.24-.4-1.57-.28-.33-.71-.5-1.29-.5-.68 0-1.23.22-1.65.66-.42.44-.63 1.01-.63 1.73V229h-2.24v-6.52c0-.96-.04-1.81-.14-2.57h2.1l.17 1.5a3.3 3.3 0 0 1 1.26-1.28c.54-.3 1.15-.45 1.82-.45zm14.33-3.93V229h-2.21v-1.46c-.28.5-.67.9-1.19 1.19-.51.28-1.1.41-1.76.41a3.76 3.76 0 0 1-3.53-2.26 5.93 5.93 0 0 1-.5-2.5c0-.94.16-1.76.5-2.47a3.8 3.8 0 0 1 3.53-2.23c.65 0 1.22.13 1.73.41.51.26.9.64 1.18 1.13v-5.47h2.25zM246 227.38c.75 0 1.32-.26 1.73-.77a3.4 3.4 0 0 0 .63-2.2c0-.95-.2-1.68-.61-2.2-.41-.51-.99-.77-1.73-.77-.76 0-1.34.26-1.76.77-.41.5-.62 1.23-.62 2.16 0 .95.2 1.69.62 2.22.42.53 1 .79 1.74.79zm10.36 1.76a6.16 6.16 0 0 1-3.93-1.15l.63-1.58a5.45 5.45 0 0 0 3.33 1.08c.54 0 .96-.1 1.24-.27.3-.18.45-.43.45-.76 0-.27-.1-.49-.3-.65-.2-.16-.55-.3-1.05-.43l-1.5-.34c-1.66-.36-2.5-1.2-2.5-2.54 0-.55.16-1.04.48-1.46.3-.43.75-.76 1.3-1a5.78 5.78 0 0 1 5.42.8l-.66 1.52c-.91-.67-1.85-1.01-2.8-1.01-.52 0-.93.1-1.21.29a.9.9 0 0 0-.44.79c0 .26.09.47.26.63.18.16.48.29.9.4l1.54.34c.9.2 1.56.52 1.97.95.42.42.63.97.63 1.66 0 .84-.34 1.5-1.01 2-.67.49-1.6.73-2.75.73z","fill":"#1F2348"}}),_c('path',{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M137.41 249.33l-6.23-11.9a1.33 1.33 0 0 0-2.36 0l-6.23 11.9a1.33 1.33 0 0 0 1.18 1.95h12.46a1.34 1.34 0 0 0 1.18-1.95zm-8.08-7.72a.67.67 0 1 1 1.34 0v4a.67.67 0 1 1-1.34 0v-4zm.68 7.68h.02a.99.99 0 0 0 .97-1.02 1.02 1.02 0 0 0-1.02-.98h-.01a.98.98 0 0 0-.97 1.02c.02.54.47.98 1.01.98z","fill":"#FC8702"}}),_c('path',{attrs:{"opacity":".1","d":"M75.9 240.8l-4.2-7.1c-.3-.51-.85-.82-1.44-.82h-8.39c-.6 0-1.15.3-1.45.81l-4.2 7.12c-.3.5-.3 1.13 0 1.63l4.2 7.12c.3.5.85.81 1.45.81h8.39c.6 0 1.15-.3 1.45-.81l4.19-7.12c.3-.5.3-1.13 0-1.63z","fill":"#1F2348"}}),_c('path',{attrs:{"opacity":".1","d":"M92.53 250.43l-4.2-7.11c-.3-.5-.85-.82-1.45-.82H78.5c-.6 0-1.16.31-1.46.82l-4.2 7.11c-.29.5-.29 1.13 0 1.64l4.2 7.11c.3.5.86.82 1.46.82h8.38c.6 0 1.15-.31 1.45-.82l4.2-7.11c.3-.5.3-1.13 0-1.64z","fill":"url(#paint17_radial)"}}),_c('path',{attrs:{"opacity":".1","d":"M109.15 240.8l-4.2-7.1c-.3-.51-.85-.82-1.45-.82h-8.38c-.6 0-1.15.3-1.45.81l-4.2 7.12c-.3.5-.3 1.13 0 1.63l4.2 7.12c.3.5.85.81 1.45.81h8.38c.6 0 1.16-.3 1.46-.81l4.19-7.12c.3-.5.3-1.13 0-1.63z","fill":"url(#paint18_radial)"}}),_c('path',{attrs:{"d":"M75.9 221.56l-4.2-7.12c-.3-.5-.85-.81-1.44-.81h-8.39c-.6 0-1.15.3-1.45.81l-4.2 7.12c-.3.5-.3 1.13 0 1.63l4.2 7.12c.3.5.85.81 1.45.81h8.39c.6 0 1.15-.3 1.45-.81l4.19-7.12c.3-.5.3-1.13 0-1.63z","fill":"url(#paint19_radial)"}}),_c('mask',{attrs:{"id":"h","mask-type":"alpha","maskUnits":"userSpaceOnUse","x":"56","y":"213","width":"21","height":"19"}},[_c('path',{attrs:{"d":"M75.9 221.56l-4.2-7.12c-.3-.5-.85-.81-1.44-.81h-8.39c-.6 0-1.15.3-1.45.81l-4.2 7.12c-.3.5-.3 1.13 0 1.63l4.2 7.12c.3.5.85.81 1.45.81h8.39c.6 0 1.15-.3 1.45-.81l4.19-7.12c.3-.5.3-1.13 0-1.63z","fill":"url(#paint20_radial)"}})]),_c('g',{attrs:{"mask":"url(#h)"}},[_c('path',{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M66.18 217.41a4.91 4.91 0 0 1 4.96 4.87 4.91 4.91 0 0 1-4.96 4.86 4.91 4.91 0 0 1-4.96-4.86 4.91 4.91 0 0 1 4.96-4.87z","fill":"#21BCA5"}}),_c('path',{attrs:{"opacity":".2","fill-rule":"evenodd","clip-rule":"evenodd","d":"M71.04 222.28c0 2.65-2.19 4.8-4.89 4.8-1.28 0-2.51-.5-3.43-1.38 1.29.28 4.46.36 6.18-1.74 1.29-1.52 1.03-4.04.51-5.26a4.74 4.74 0 0 1 1.63 3.58z","fill":"#010101"}}),_c('path',{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M66.24 217.77s-.43-2.17-.89-2.75c-.02-.03-.2-.06-.5.07l-.03.03s.32.31 1.11 2.65c0 0 .31.16.31 0z","fill":"#E9B213"}}),_c('path',{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M65.09 215c.15-.02.27 0 .27.04 0 .05-.11.1-.26.1-.15.02-.28 0-.28-.04s.12-.09.27-.1z","fill":"#F4B145"}}),_c('path',{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M65.83 217.57s.1 0 .15-.17a.43.43 0 0 0-.3-.53c-.24-.06-.35-.3-.53-.51-.17-.22-.8-.57-1.84-.55-1.06.02-1.27-.37-1.36-.44-.08-.07-.1.73.38 1.33.47.6 1.15 1 1.93.62.78-.4 1.14-.03 1.14-.03s.27.3.43.28z","fill":"#D94432"}}),_c('path',{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M65.83 217.57s.1 0 .15-.17a.43.43 0 0 0-.3-.53c-.24-.06-.35-.3-.53-.51-.17-.22-.8-.59-1.84-.55-1.22.04-1.39-.57-1.38-.41.37 1.4 2.85.5 3.9 2.17z","fill":"#010101"}}),_c('path',{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M61.57 220.9c.2.28.25.62.15.94l-.05.24.53.01c.37.12.4.98.08 1.25-.14.07-.26.17-.38.26a3.1 3.1 0 0 1-1.04.77l-.4.17c-.75.3-2.16.72-2.4-.8l.04-.8c.02-.4-.19-.69.1-1.45.28-.77 1.09-.89 1.68-.73 0 0 .1.06.3-.2.2-.28 1.03-.41 1.39.34z","fill":"#D8D8D8"}}),_c('path',{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M62.29 223.36s-1.03.88-1.41 1.02c-.34.12-2.01.99-2.6-.06a3.08 3.08 0 0 1-.2-.57c.12.27.71.5 1.32.52.82.04 1.39-.52 1.9-.44.3-.2.64-.35.99-.47z","fill":"#010101"}}),_c('path',{attrs:{"d":"M60.36 221.38a.25.25 0 0 0 .48-.15l-.48.15zm-.88-4.77a.25.25 0 0 0-.48.15l.48-.15zm2.12 3.91a.25.25 0 1 0 .48-.14l-.48.14zm-1.13-5.6a.25.25 0 0 0-.48.13l.48-.14zm.64 6.33a.25.25 0 0 0 .48-.14l-.48.14zm-1.07-5.49a.25.25 0 0 0-.48.14l.48-.14zm2.3 1.14a.25.25 0 0 0-.25-.43l.25.43zm-4.21 1.75a.25.25 0 0 0 .24.44l-.24-.44zm3.96-2.6a.25.25 0 1 0-.24-.44l.24.44zm-3.59 1.39a.25.25 0 1 0 .24.44l-.24-.44zm3.96 2.26a.25.25 0 1 0-.25-.44l.25.44zm-2.97 1.15a.25.25 0 0 0 .25.43l-.25-.44zm1.98-5.4a.25.25 0 0 0-.24-.44l.24.44zm-2.23.65a.25.25 0 0 0 .24.44l-.24-.44zm1.6 5.13l-1.36-4.62-.48.15 1.36 4.62.48-.15zm1.24-.85l-1.6-5.47-.49.14 1.61 5.47.48-.14zm-.5.73l-1.54-5.35-.48.14 1.55 5.35.48-.14zm.51-4.64l-3.96 2.18.24.44 3.97-2.19-.25-.43zm-.24-.86l-3.35 1.83.24.44 3.35-1.83-.24-.44zm.36 3.65l-2.72 1.59.25.43 2.72-1.58-.25-.44zm-.98-4.25l-1.99 1.1.24.43 1.99-1.1-.24-.43z","fill":"#000"}}),_c('path',{attrs:{"d":"M62.34 219.6l-1.49-4.98","stroke":"#000","stroke-width":".5"}}),_c('path',{attrs:{"d":"M62.96 218.48a.25.25 0 1 0-.24-.44l.24.44zm-4.21 1.76a.25.25 0 0 0 .24.43l-.24-.43zm3.83-2.49a.25.25 0 0 0-.24-.43l.24.44zm-4.2 1.75a.25.25 0 0 0 .24.44l-.24-.44zm1.12 1.39c.03.13.17.2.3.17.14-.04.21-.18.18-.31l-.48.14zm-.52-3.55a.25.25 0 0 0-.48.14l.48-.14zm3.73.7l-3.96 2.2.24.43 3.97-2.19-.25-.43zm-.37-.72l-3.96 2.19.24.43 3.96-2.19-.24-.43zm-2.36 3.43l-1-3.4-.48.13 1 3.4.48-.13z","fill":"#000"}}),_c('path',{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M60.85 225.13l.06.86s.1.26-.13.31c-.23.05.75.05.63-.31a.25.25 0 0 0-.25-.25l-.05-.58-.26-.03z","fill":"#F06292"}}),_c('path',{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M60.53 220.88c-1.1.09-2.12-1.03-2.34-2.54.8-1.41 1.8-3 2-3.42 1.1.04 2.06 1.26 2.2 2.81.15 1.64-.7 3.05-1.86 3.15zm.01 1.82l-.62-1.33s.37.48 1.12 0l-.5 1.33zm2.23-5.83c-.2-1.12-1.2-2.17-2.22-2.36-.2-.04-1.8 3.03-2.76 4.55.16.52.5 1 1.14 1.82 1.12 1.7 1.36 1.82 1.49 3.4l.12 1.46s-.12 0-.12.25c0 .24.25.36.5.36.24 0 .49-.12.49-.36a.25.25 0 0 0-.25-.25l-.12-1.46s-.08-2.45.99-3.77c1.05-1.28 1-2.3.74-3.64z","fill":"#D94432"}}),_c('path',{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M60.49 214.55c.38.02.7.3.98.55.74.73 1 1.22 1.12 2.56a3.92 3.92 0 0 1-.93 2.98c-.5.48-1.74.73-1.74.73.19.1.41.14.62.12.17-.04.35-.1.5-.17l.37.29c.2-.43.43-.84.72-1.22.4-.48.83-1.27.8-2.35-.04-1.1-.37-3-2.39-3.53l-.05.04z","fill":"#010101"}}),_c('path',{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M60.62 224.48c-.7.29-2.29.87-2.53-.74l.05-.82c.02-.4-.19-.7.1-1.46.28-.76.3-.78 1.68-.73 1.28.04.66 1.99.9 3.3 0 .13-.1.4-.2.45z","fill":"#fff"}}),_c('path',{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M60.88 224.37c.4-.09-2.5 1.25-2.8-.63l.04-.8c.03-.4-.18-.7.1-1.47.29-.76 1.1-.88 1.69-.72-1.84.1-1.04 3.87.97 3.62z","fill":"#D94432"}}),_c('path',{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M69.76 220.73c.25 0 .45.24.45.53 0 .28-.2.52-.45.52s-.46-.24-.46-.52c0-.3.2-.53.46-.53z","fill":"#1F2348"}}),_c('path',{attrs:{"d":"M65.7 223.16s.35 1.63 2.28 1.55c1.98-.1 2.05-1.65 2.05-1.65","stroke":"#1F2348","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}}),_c('path',{attrs:{"d":"M65.63 220.84c.45 0 .9.26 1.08.75-.4-.25-.52-.34-1.1-.06","stroke":"#1F2348","stroke-width":"2.5","stroke-linecap":"round","stroke-linejoin":"round"}}),_c('path',{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M63.83 226.5c.81.84 2.06 1.6 3.29 1.94-.87.3-.99.8-1.19 1.5 0 0 1.91-.4 2.11-.94 0 0 .75.83 2.23.7a2.87 2.87 0 0 0-2.23-1.63c-.33 0-.52-.83.37-1.54-2.72 1.06-4.58-.03-4.58-.03z","fill":"#21BCA5"}}),_c('path',{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M67.12 228.44c-.81.26-1.02.81-1.19 1.5 0 0 1.91-.4 2.11-.94 0 0 .75.83 2.23.7a2.88 2.88 0 0 0-2.23-1.63c0 .05-.08.1-.07.27-.2-.04-.53 0-.85.1z","fill":"#D94432"}}),_c('path',{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M67.55 228.17s1.73.59 2.72 1.54a2.87 2.87 0 0 0-2.23-1.65c-.33 0-.52-.82.37-1.53-.34.14-.7.25-1.05.32-.31.97.19 1.32.19 1.32z","fill":"#010101"}})]),_c('path',{attrs:{"d":"M92.53 211.93l-4.2-7.11c-.3-.5-.85-.82-1.45-.82H78.5c-.6 0-1.16.31-1.46.82l-4.2 7.11c-.29.5-.29 1.13 0 1.64l4.2 7.11c.3.5.86.82 1.46.82h8.38c.6 0 1.15-.31 1.45-.82l4.2-7.11c.3-.5.3-1.13 0-1.64z","fill":"url(#paint21_radial)"}}),_c('path',{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M83.14 207.87a4.94 4.94 0 1 1 .02 9.88 4.94 4.94 0 0 1-.02-9.88z","fill":"#D94432"}}),_c('path',{attrs:{"opacity":".3","fill-rule":"evenodd","clip-rule":"evenodd","d":"M88 212.8a4.87 4.87 0 0 1-8.31 3.46c1.28.29 4.45.37 6.16-1.76 1.29-1.53 1.03-4.1.51-5.33A4.84 4.84 0 0 1 88 212.8z","fill":"#010101"}}),_c('path',{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M79.53 206.94s.3.74.67.6c.37-.15 5.95-.21 5.95-.21l.5-.58s.94-.63.5.4c0 0-.14.22-.26.45-.07.12-.14.27-.17.42-.02.17.2-.35.2-.35l.48.75s.3.57-.23.52c-.53-.05-.86-.43-1.02-.63l-5.95.21s-.8 1.01-1.17.97c-.36-.03-.32-.38-.08-1.08 0 0 .2-.34.22-.52.01-.17-.2.35-.2.35s-.4-.94-.44-1.11c-.09-.46.4-1.12 1-.19z","fill":"#fff"}}),_c('path',{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M79.23 207.94s.4-.08.21.08c-.18.16-.53.64.46.3.99-.35 5.84-.34 5.84-.34l.35.28-5.88.25s-.72.86-1.08.84c-.36-.03-.08-.87-.08-.87l.18-.54zm7.76-1.37s.28.14-.11.65c-.4.5-.78.65-.09 1.07.7.42.53.05.53.05l-.4-.66s.77-1.24.07-1.1z","fill":"#21BCA5"}}),_c('path',{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M77.51 217.34l-.2-1.59.25-.04.19 1.6s-.05.24-.24.03z","fill":"#303030"}}),_c('path',{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M79.03 211.77c.2.29.25.63.15.95l-.05.25.54.01c.37.11.4.99.07 1.26-.14.07-.26.17-.37.27a3.1 3.1 0 0 1-1.04.78c-.08.02-.22.1-.4.17-.75.3-2.16.72-2.4-.8l.04-.82c.03-.4-.19-.7.1-1.47.28-.78 1.09-.9 1.68-.74 0 0 .1.06.3-.21.2-.27 1.03-.41 1.38.35z","fill":"#D8D8D8"}}),_c('path',{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M78.08 215.4c-.7.3-2.28.88-2.52-.75l.05-.83c.02-.4-.19-.7.1-1.48.28-.78.3-.79 1.68-.74 1.27.04.65 2.01.89 3.34 0 .14-.09.4-.2.46z","fill":"#fff"}}),_c('path',{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M78.34 215.29c.4-.1-2.5 1.27-2.78-.64l.04-.82c.02-.4-.19-.7.1-1.48.28-.77 1.08-.9 1.68-.74-1.83.11-1.04 3.93.96 3.68z","fill":"#21BCA5"}}),_c('path',{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M79.75 214.26s-1.02.89-1.4 1.04c-.34.12-2.01 1-2.6-.06a3.16 3.16 0 0 1-.2-.58c.12.27.71.52 1.32.53.82.03 1.39-.53 1.9-.45.3-.2.64-.35.98-.48zM77.34 209.69l1.05.03-.66.8.27 1.01-.97-.4-.85.6.05-1.04-.82-.65 1.02-.26.35-1 .56.9z","fill":"#21BCA5"}}),_c('path',{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M77 209.63l.16.25c.02.04.07.06.1.06l.3.01c.06 0 .12.08.12.15 0 .03-.02.05-.04.09l-.18.23c-.03.04-.03.07-.03.13l.07.28c.02.07-.02.15-.09.16h-.09l-.27-.1a.11.11 0 0 0-.12.01l-.25.16c-.06.04-.15.02-.2-.03-.02-.02-.02-.05-.02-.09l.02-.29a.16.16 0 0 0-.05-.12l-.24-.18c-.05-.04-.07-.13-.03-.2l.07-.05.29-.07c.03-.02.07-.04.08-.1l.11-.26c.02-.07.1-.11.18-.1.05 0 .1.03.1.06z","fill":"#fff"}}),_c('path',{attrs:{"opacity":".7","fill-rule":"evenodd","clip-rule":"evenodd","d":"M82.77 212.3s0-1.48.74-1.48c.75 0 .75 1.43.75 1.43s-.62-1.43-1.49.05zM85.74 212.24s0-1.35.68-1.35.68 1.3.68 1.3-.57-1.3-1.36.05zM85.04 214.66l-.19-.01c-.1 0-.15.66-.31.7-.16.03-.21-.79-.32-.82-.29-.09-.8-.22-1.02-.36-.5-.32-.54-.7-.54-.86 0-.3.92.67 2.35.67h.05c.98 0 1.58-.31 1.7-.37.1-.06.29-.08.29.2 0 .13-.23.34-.58.51-.1.05-.11 1.04-.3 1-.19-.05-.21-.8-.33-.76a3 3 0 0 1-.8.1z","fill":"#000"}}),_c('path',{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M84.12 213.85l.32 1.4s.06.24.18 0c.13-.24.31-1.28.31-1.28-.27 0-.54-.05-.8-.12z","fill":"#fff"}}),_c('path',{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M84.5 214.22s.15-.07 0 1.03c0 0 0 .13.13 0 .1-.24.3-1.28.3-1.28-.18 0-.36-.02-.54-.06l.11.3z","fill":"#21BCA5"}}),_c('path',{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M85.72 213.92l.35 1.26s.15.29.22 0 .22-1.47.22-1.47-.19.1-.79.21z","fill":"#fff"}}),_c('path',{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M86.04 214.13s.13-.1.19 1.02c0 .02.01.03.03.05.02.02.2-1.43.2-1.43l-.58.2.16.16z","fill":"#21BCA5"}}),_c('path',{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M83.02 217.63l-.05 1.38s.13.32-1.2.32h-2.81s-.67-.64-.27-.96c.4-.32 1.47-.42 1.47-.42l-.32-.82 3.18.5z","fill":"#1F2348"}}),_c('path',{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M80.64 217.53l-1.02-.11c-.04 0-.07-.04-.05-.08v-.06c0-.03.05-.06.08-.05l1.03.11c.04 0 .06.04.05.08l-.01.06a.08.08 0 0 1-.08.05zM80.74 217.84l-1.02-.11c-.04 0-.07-.04-.05-.08v-.06c0-.04.05-.06.08-.05l1.03.11c.04 0 .06.04.05.08l-.01.06c-.02.03-.05.06-.08.05z","fill":"#21BCA5"}}),_c('path',{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M81.72 219.2a.48.48 0 1 1-.48.48c0-.26.21-.48.48-.48z","fill":"#1F2348"}}),_c('path',{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M81.93 219.18a.48.48 0 1 1 0 .96.48.48 0 0 1 0-.96z","fill":"#fff"}}),_c('path',{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M81.93 219.39a.27.27 0 1 1 0 .54.27.27 0 0 1 0-.54z","fill":"#21BCA5"}}),_c('path',{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M79.74 219.2a.48.48 0 1 1-.48.48c0-.26.21-.48.48-.48z","fill":"#1F2348"}}),_c('path',{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M79.95 219.18a.48.48 0 1 1 0 .96.48.48 0 0 1 0-.96z","fill":"#fff"}}),_c('path',{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M79.95 219.39a.27.27 0 1 1 0 .54.27.27 0 0 1 0-.54z","fill":"#21BCA5"}}),_c('path',{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M83.34 217.63l-.2 1.38s-.12.32 1.21.32h2.81s.67-.64.27-.96c-.4-.32-1.84-.42-1.84-.42l.08-.7-2.33.38z","fill":"#1F2348"}}),_c('path',{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M84.98 217.4l1.03.05c.04 0 .06.04.06.07v.06c0 .03-.03.06-.06.06l-1.03-.06c-.03 0-.06-.04-.06-.06v-.07c0-.03.04-.07.06-.06zM84.86 217.68l1.03.06c.03 0 .06.03.06.06v.06c0 .04-.04.06-.06.06l-1.03-.06c-.04 0-.06-.04-.06-.06v-.06c0-.04.02-.06.06-.06z","fill":"#21BCA5"}}),_c('path',{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M84.4 219.2a.48.48 0 1 1-.48.48c0-.26.22-.48.48-.48z","fill":"#1F2348"}}),_c('path',{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M84.2 219.18a.48.48 0 1 1 0 .96.48.48 0 0 1 0-.96z","fill":"#fff"}}),_c('path',{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M84.2 219.39a.27.27 0 1 1 0 .54.27.27 0 0 1 0-.54z","fill":"#21BCA5"}}),_c('path',{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M86.38 219.2a.48.48 0 1 1 0 .97.48.48 0 0 1 0-.97z","fill":"#1F2348"}}),_c('path',{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M86.17 219.18a.48.48 0 1 1 0 .96.48.48 0 0 1 0-.96z","fill":"#fff"}}),_c('path',{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M86.17 219.39a.27.27 0 1 1 0 .54.27.27 0 0 1 0-.54z","fill":"#21BCA5"}}),_c('path',{attrs:{"opacity":".1","d":"M109.15 221.56l-4.2-7.12c-.3-.5-.85-.81-1.45-.81h-8.38c-.6 0-1.15.3-1.45.81l-4.2 7.12c-.3.5-.3 1.13 0 1.63l4.2 7.12c.3.5.85.81 1.45.81h8.38c.6 0 1.16-.3 1.46-.81l4.19-7.12c.3-.5.3-1.13 0-1.63z","fill":"url(#paint22_radial)"}})]),_c('path',{attrs:{"fill":"#fff","d":"M42 282h140.5v52H42z"}}),_c('path',{attrs:{"opacity":".7","d":"M98.12 314.16c-.99 0-1.91-.13-2.77-.4a6.36 6.36 0 0 1-2.18-1.13l.79-1.69c.62.47 1.27.82 1.94 1.04.69.22 1.43.33 2.24.33.88 0 1.57-.16 2.05-.47.49-.31.74-.75.74-1.31 0-.48-.23-.85-.69-1.1a8.03 8.03 0 0 0-2.21-.74 9.23 9.23 0 0 1-3.51-1.35 2.83 2.83 0 0 1-1.1-2.41c0-.76.2-1.43.61-2.02a4.1 4.1 0 0 1 1.73-1.38c.76-.34 1.63-.5 2.61-.5.9 0 1.75.13 2.56.4s1.48.64 2 1.12l-.78 1.7a5.9 5.9 0 0 0-3.78-1.37c-.83 0-1.48.17-1.96.52-.48.33-.72.8-.72 1.38 0 .5.2.9.63 1.16.43.26 1.16.5 2.2.73 1.06.26 1.93.53 2.6.83.68.29 1.2.67 1.55 1.14.36.45.54 1.03.54 1.72 0 .77-.2 1.44-.61 2.02-.4.56-1 1-1.76 1.31a7.2 7.2 0 0 1-2.72.47zm15.24-4.59h-6.27c.05.97.3 1.7.72 2.16.45.46 1.1.69 1.97.69 1 0 1.92-.33 2.77-.98l.65 1.55c-.44.35-.97.63-1.6.85-.63.2-1.27.3-1.91.3a4.78 4.78 0 0 1-3.51-1.26c-.86-.84-1.28-1.99-1.28-3.45 0-.93.18-1.75.56-2.47.37-.72.89-1.28 1.56-1.67.67-.41 1.44-.61 2.29-.61 1.25 0 2.23.4 2.95 1.22.73.8 1.1 1.91 1.1 3.33v.34zm-4-3.27c-.6 0-1.09.18-1.47.54-.38.34-.62.85-.72 1.53h4.23a2.49 2.49 0 0 0-.63-1.55c-.34-.35-.8-.52-1.4-.52zm8.84.3v4.07c0 1.07.5 1.6 1.5 1.6.27 0 .57-.05.9-.14v1.78c-.4.14-.88.22-1.44.22-1.03 0-1.83-.3-2.38-.87-.55-.57-.83-1.4-.83-2.48v-4.18h-1.74v-1.69h1.74v-2.21l2.25-.76v2.97h2.41v1.7h-2.4zm6.9 0v4.07c0 1.07.5 1.6 1.5 1.6.27 0 .57-.05.9-.14v1.78c-.4.14-.88.22-1.45.22-1.03 0-1.82-.3-2.37-.87-.55-.57-.83-1.4-.83-2.48v-4.18h-1.75v-1.69h1.75v-2.21l2.25-.76v2.97h2.41v1.7h-2.41zm4.16 7.4v-9.09h2.23V314h-2.23zm-.15-13.21h2.5V303h-2.5v-2.21zm10.24 3.89c2.18 0 3.26 1.24 3.26 3.74V314h-2.25v-5.47c0-.72-.14-1.24-.41-1.57-.28-.33-.7-.5-1.28-.5-.68 0-1.24.22-1.66.66-.42.44-.63 1.01-.63 1.73V314h-2.23v-6.52c0-.96-.05-1.81-.14-2.57h2.1l.17 1.5a3.3 3.3 0 0 1 1.26-1.28c.54-.3 1.14-.45 1.81-.45zm14.63.23v8.8c0 1.42-.39 2.5-1.17 3.22-.78.74-1.93 1.1-3.44 1.1-1.4 0-2.64-.3-3.7-.88l.36-1.71c1.1.58 2.2.86 3.29.86 1.62 0 2.43-.8 2.43-2.4v-1.8c-.28.48-.68.89-1.2 1.2a4.07 4.07 0 0 1-3.9-.1 3.97 3.97 0 0 1-1.45-1.61 5.4 5.4 0 0 1-.5-2.38c0-.89.16-1.67.5-2.36a3.82 3.82 0 0 1 3.56-2.17c.67 0 1.27.14 1.78.43.53.27.93.66 1.2 1.17v-1.37h2.24zm-4.63 7.07c.75 0 1.33-.24 1.75-.73.43-.5.65-1.17.65-2.04 0-.86-.21-1.54-.63-2.03-.42-.5-1-.74-1.77-.74-.74 0-1.33.25-1.76.74-.42.49-.63 1.17-.63 2.03 0 .87.21 1.54.63 2.04.43.49 1.02.73 1.76.73zm10.6 2.16a6.16 6.16 0 0 1-3.93-1.15l.63-1.58a5.45 5.45 0 0 0 3.33 1.08c.54 0 .95-.1 1.24-.27.3-.18.45-.43.45-.76 0-.27-.1-.49-.3-.65-.21-.16-.56-.3-1.05-.43l-1.51-.34c-1.66-.36-2.49-1.2-2.49-2.54 0-.55.16-1.04.47-1.46.31-.43.75-.76 1.32-1a5.78 5.78 0 0 1 5.42.8l-.67 1.52c-.91-.67-1.85-1.01-2.81-1.01-.52 0-.92.1-1.2.29a.9.9 0 0 0-.44.79c0 .26.09.47.25.63.18.16.48.29.9.4l1.55.34c.9.2 1.56.52 1.96.95.42.42.63.97.63 1.66 0 .84-.33 1.5-1 2-.68.49-1.6.73-2.76.73z","fill":"#1F2348"}}),_c('path',{attrs:{"opacity":".4","fill-rule":"evenodd","clip-rule":"evenodd","d":"M77.15 305.31l1.27.45a2.38 2.38 0 0 1 0 4.48l-1.27.45a1.37 1.37 0 0 0-.78 1.88l.58 1.22a2.38 2.38 0 0 1-3.16 3.16l-1.22-.57a1.37 1.37 0 0 0-1.88.78l-.45 1.26a2.38 2.38 0 0 1-4.48 0l-.45-1.26a1.37 1.37 0 0 0-1.88-.78l-1.22.57a2.37 2.37 0 0 1-3.16-3.16l.57-1.22a1.37 1.37 0 0 0-.78-1.88l-1.26-.45a2.38 2.38 0 0 1 0-4.48l1.26-.45a1.37 1.37 0 0 0 .78-1.88l-.57-1.22a2.38 2.38 0 0 1 3.16-3.16l1.22.58a1.37 1.37 0 0 0 1.88-.78l.45-1.27a2.38 2.38 0 0 1 4.48 0l.45 1.27a1.38 1.38 0 0 0 1.88.78l1.22-.58a2.37 2.37 0 0 1 3.16 3.16l-.58 1.22a1.37 1.37 0 0 0 .78 1.88zm-13.6 4.53a4.93 4.93 0 0 0 6.29 2.6 4.81 4.81 0 0 0 2.6-6.28 4.87 4.87 0 0 0-6.28-2.6 4.81 4.81 0 0 0-2.6 6.28z","fill":"#1F2348"}})])]),_c('defs',[_c('filter',{attrs:{"id":"filter0_d","x":"12","y":"6","width":"380","height":"360","filterUnits":"userSpaceOnUse","color-interpolation-filters":"sRGB"}},[_c('feFlood',{attrs:{"flood-opacity":"0","result":"BackgroundImageFix"}}),_c('feColorMatrix',{attrs:{"in":"SourceAlpha","type":"matrix","values":"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"}}),_c('feOffset',{attrs:{"dy":"2"}}),_c('feGaussianBlur',{attrs:{"stdDeviation":"10"}}),_c('feColorMatrix',{attrs:{"type":"matrix","values":"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.111158 0"}}),_c('feBlend',{attrs:{"mode":"normal","in2":"BackgroundImageFix","result":"effect1_dropShadow"}}),_c('feBlend',{attrs:{"mode":"normal","in":"SourceGraphic","in2":"effect1_dropShadow","result":"shape"}})],1),_c('linearGradient',{attrs:{"id":"paint0_linear","x1":"79","y1":"0","x2":"79","y2":"309","gradientUnits":"userSpaceOnUse"}},[_c('stop',{attrs:{"stop-color":"#1F2348"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#1F2348","stop-opacity":"0"}})],1),_c('linearGradient',{attrs:{"id":"paint1_linear","x1":"145.14","y1":"-7.34","x2":"145.14","y2":"293.98","gradientUnits":"userSpaceOnUse"}},[_c('stop',{attrs:{"stop-color":"#C4C4C4"}}),_c('stop',{attrs:{"offset":".5","stop-color":"#C4C4C4"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#C4C4C4","stop-opacity":"0"}})],1),_c('radialGradient',{attrs:{"id":"paint2_radial","cx":"0","cy":"0","r":"1","gradientUnits":"userSpaceOnUse","gradientTransform":"matrix(-20.125 0 0 -17.5 76.13 90.38)"}},[_c('stop',{attrs:{"stop-color":"#41A38E"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#21BCA5"}})],1),_c('radialGradient',{attrs:{"id":"paint3_radial","cx":"0","cy":"0","r":"1","gradientUnits":"userSpaceOnUse","gradientTransform":"matrix(-20.125 0 0 -17.5 76.13 90.38)"}},[_c('stop',{attrs:{"stop-color":"#41A38E"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#21BCA5"}})],1),_c('radialGradient',{attrs:{"id":"paint4_radial","cx":"0","cy":"0","r":"1","gradientUnits":"userSpaceOnUse","gradientTransform":"matrix(-20.125 0 0 -17.5 92.75 100)"}},[_c('stop',{attrs:{"stop-color":"#260133"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#1F2348"}})],1),_c('radialGradient',{attrs:{"id":"paint5_radial","cx":"0","cy":"0","r":"1","gradientUnits":"userSpaceOnUse","gradientTransform":"matrix(-20.125 0 0 -17.5 109.38 90.38)"}},[_c('stop',{attrs:{"stop-color":"#260133"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#1F2348"}})],1),_c('radialGradient',{attrs:{"id":"paint6_radial","cx":"0","cy":"0","r":"1","gradientUnits":"userSpaceOnUse","gradientTransform":"matrix(-20.125 0 0 -17.5 76.13 71.13)"}},[_c('stop',{attrs:{"stop-color":"#CC3047"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#D94432"}})],1),_c('radialGradient',{attrs:{"id":"paint7_radial","cx":"0","cy":"0","r":"1","gradientUnits":"userSpaceOnUse","gradientTransform":"matrix(-20.125 0 0 -17.5 92.75 61.5)"}},[_c('stop',{attrs:{"stop-color":"#FD6216"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#FC8701"}})],1),_c('radialGradient',{attrs:{"id":"paint8_radial","cx":"0","cy":"0","r":"1","gradientUnits":"userSpaceOnUse","gradientTransform":"matrix(-20.125 0 0 -17.5 92.75 61.5)"}},[_c('stop',{attrs:{"stop-color":"#265DD7"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#0582CA"}})],1),_c('radialGradient',{attrs:{"id":"paint9_radial","cx":"0","cy":"0","r":"1","gradientUnits":"userSpaceOnUse","gradientTransform":"matrix(-20.125 0 0 -17.5 109.38 71.13)"}},[_c('stop',{attrs:{"stop-color":"#260133"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#1F2348"}})],1),_c('radialGradient',{attrs:{"id":"paint10_radial","cx":"0","cy":"0","r":"1","gradientUnits":"userSpaceOnUse","gradientTransform":"matrix(-20.125 0 0 -17.5 76.13 170.38)"}},[_c('stop',{attrs:{"stop-color":"#CC3047"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#D94432"}})],1),_c('radialGradient',{attrs:{"id":"paint11_radial","cx":"0","cy":"0","r":"1","gradientUnits":"userSpaceOnUse","gradientTransform":"matrix(-20.125 0 0 -17.5 92.75 180)"}},[_c('stop',{attrs:{"stop-color":"#260133"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#1F2348"}})],1),_c('radialGradient',{attrs:{"id":"paint12_radial","cx":"0","cy":"0","r":"1","gradientUnits":"userSpaceOnUse","gradientTransform":"matrix(-20.125 0 0 -17.5 109.38 170.38)"}},[_c('stop',{attrs:{"stop-color":"#260133"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#1F2348"}})],1),_c('radialGradient',{attrs:{"id":"paint13_radial","cx":"0","cy":"0","r":"1","gradientUnits":"userSpaceOnUse","gradientTransform":"matrix(-20.125 0 0 -17.5 76.13 151.13)"}},[_c('stop',{attrs:{"stop-color":"#265DD7"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#0582CA"}})],1),_c('radialGradient',{attrs:{"id":"paint14_radial","cx":"0","cy":"0","r":"1","gradientUnits":"userSpaceOnUse","gradientTransform":"matrix(-20.125 0 0 -17.5 92.75 141.5)"}},[_c('stop',{attrs:{"stop-color":"#41A38E"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#21BCA5"}})],1),_c('radialGradient',{attrs:{"id":"paint15_radial","cx":"0","cy":"0","r":"1","gradientUnits":"userSpaceOnUse","gradientTransform":"matrix(-20.125 0 0 -17.5 92.75 141.5)"}},[_c('stop',{attrs:{"stop-color":"#41A38E"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#21BCA5"}})],1),_c('radialGradient',{attrs:{"id":"paint16_radial","cx":"0","cy":"0","r":"1","gradientUnits":"userSpaceOnUse","gradientTransform":"matrix(-20.125 0 0 -17.5 109.38 151.13)"}},[_c('stop',{attrs:{"stop-color":"#260133"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#1F2348"}})],1),_c('radialGradient',{attrs:{"id":"paint17_radial","cx":"0","cy":"0","r":"1","gradientUnits":"userSpaceOnUse","gradientTransform":"matrix(-20.125 0 0 -17.5 92.75 260)"}},[_c('stop',{attrs:{"stop-color":"#260133"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#1F2348"}})],1),_c('radialGradient',{attrs:{"id":"paint18_radial","cx":"0","cy":"0","r":"1","gradientUnits":"userSpaceOnUse","gradientTransform":"matrix(-20.125 0 0 -17.5 109.38 250.38)"}},[_c('stop',{attrs:{"stop-color":"#260133"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#1F2348"}})],1),_c('radialGradient',{attrs:{"id":"paint19_radial","cx":"0","cy":"0","r":"1","gradientUnits":"userSpaceOnUse","gradientTransform":"matrix(-20.125 0 0 -17.5 76.13 231.13)"}},[_c('stop',{attrs:{"stop-color":"#FD6216"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#FC8701"}})],1),_c('radialGradient',{attrs:{"id":"paint20_radial","cx":"0","cy":"0","r":"1","gradientUnits":"userSpaceOnUse","gradientTransform":"matrix(-20.125 0 0 -17.5 76.13 231.13)"}},[_c('stop',{attrs:{"stop-color":"#265DD7"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#0582CA"}})],1),_c('radialGradient',{attrs:{"id":"paint21_radial","cx":"0","cy":"0","r":"1","gradientUnits":"userSpaceOnUse","gradientTransform":"matrix(-20.125 0 0 -17.5 92.75 221.5)"}},[_c('stop',{attrs:{"stop-color":"#265DD7"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#0582CA"}})],1),_c('radialGradient',{attrs:{"id":"paint22_radial","cx":"0","cy":"0","r":"1","gradientUnits":"userSpaceOnUse","gradientTransform":"matrix(-20.125 0 0 -17.5 109.38 231.13)"}},[_c('stop',{attrs:{"stop-color":"#260133"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#1F2348"}})],1)],1)])])]):_vm._e(),_c('PageFooter',[_c('button',{staticClass:"nq-button light-blue",on:{"click":_vm.buttonClick}},[_vm._v(_vm._s(_vm.buttonText))])])],1)}
var MigrationWelcomevue_type_template_id_48e56bac_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/MigrationWelcome.vue?vue&type=template&id=48e56bac&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"6ce9ed87-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/SmallPage.vue?vue&type=template&id=1d450cf2&scoped=true&
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
}(external_commonjs_vue_commonjs2_vue_root_Vue_default.a);

SmallPagevue_type_script_lang_ts_SmallPage = __decorate([vue_class_component_common_default.a], SmallPagevue_type_script_lang_ts_SmallPage);
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
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"6ce9ed87-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/PageHeader.vue?vue&type=template&id=f91651fa&scoped=true&
var PageHeadervue_type_template_id_f91651fa_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"page-header nq-card-header",class:_vm.progressIndicator ? 'has-progress-indicator' : ''},[(_vm.progressIndicator)?_c('div',{staticClass:"progress-indicator"},_vm._l((_vm.progressSteps),function(thisStep){return _c('div',{key:thisStep,staticClass:"indicator",class:thisStep <= _vm.step ? 'active' : ''})}),0):_vm._e(),(_vm.backArrow)?_c('a',{staticClass:"page-header-back-button",attrs:{"href":"#","title":"Go back"},on:{"click":function($event){$event.preventDefault();return _vm.$emit('back')}}},[_c('ArrowLeftIcon')],1):_vm._e(),_c('h1',{staticClass:"nq-h1"},[_vm._t("default")],2),_vm._t("more")],2)}
var PageHeadervue_type_template_id_f91651fa_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/PageHeader.vue?vue&type=template&id=f91651fa&scoped=true&

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
}(external_commonjs_vue_commonjs2_vue_root_Vue_default.a);

__decorate([Prop({
  type: Boolean,
  default: false
})], PageHeadervue_type_script_lang_ts_PageHeader.prototype, "backArrow", void 0);

__decorate([Prop({
  type: Boolean,
  default: false
})], PageHeadervue_type_script_lang_ts_PageHeader.prototype, "progressIndicator", void 0);

__decorate([Prop({
  type: Number,
  default: 6
})], PageHeadervue_type_script_lang_ts_PageHeader.prototype, "numberSteps", void 0);

__decorate([Prop({
  type: Number,
  default: 1
})], PageHeadervue_type_script_lang_ts_PageHeader.prototype, "step", void 0);

PageHeadervue_type_script_lang_ts_PageHeader = __decorate([vue_class_component_common_default()({
  components: {
    ArrowLeftIcon: ArrowLeftIcon
  }
})], PageHeadervue_type_script_lang_ts_PageHeader);
/* harmony default export */ var PageHeadervue_type_script_lang_ts_ = (PageHeadervue_type_script_lang_ts_PageHeader);
// CONCATENATED MODULE: ./src/components/PageHeader.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_PageHeadervue_type_script_lang_ts_ = (PageHeadervue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./src/components/PageHeader.vue?vue&type=style&index=0&id=f91651fa&scoped=true&lang=css&
var PageHeadervue_type_style_index_0_id_f91651fa_scoped_true_lang_css_ = __webpack_require__("f9cb");

// CONCATENATED MODULE: ./src/components/PageHeader.vue






/* normalize component */

var PageHeader_component = normalizeComponent(
  components_PageHeadervue_type_script_lang_ts_,
  PageHeadervue_type_template_id_f91651fa_scoped_true_render,
  PageHeadervue_type_template_id_f91651fa_scoped_true_staticRenderFns,
  false,
  null,
  "f91651fa",
  null
  
)

PageHeader_component.options.__file = "PageHeader.vue"
/* harmony default export */ var components_PageHeader = (PageHeader_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"6ce9ed87-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/PageBody.vue?vue&type=template&id=0b286594&scoped=true&
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
}(external_commonjs_vue_commonjs2_vue_root_Vue_default.a);

PageBodyvue_type_script_lang_ts_PageBody = __decorate([vue_class_component_common_default.a], PageBodyvue_type_script_lang_ts_PageBody);
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
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"6ce9ed87-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/PageFooter.vue?vue&type=template&id=3c6ba3a4&scoped=true&
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
}(external_commonjs_vue_commonjs2_vue_root_Vue_default.a);

PageFootervue_type_script_lang_ts_PageFooter = __decorate([vue_class_component_common_default.a], PageFootervue_type_script_lang_ts_PageFooter);
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
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--13-1!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/MigrationWelcome.vue?vue&type=script&lang=ts&













var MigrationWelcomevue_type_script_lang_ts_MigrationWelcome =
/*#__PURE__*/
function (_Vue) {
  function MigrationWelcome() {
    var _this;

    _classCallCheck(this, MigrationWelcome);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MigrationWelcome).apply(this, arguments));
    _this.page = 1;
    _this.content = [{
      title: 'One Account, many Addresses',
      notice: 'The new and improved Accounts<br>can have multiple Addresses.',
      button: 'Continue'
    }, {
      title: 'Improved Accessibility',
      notice: 'Log in on your devices with the new<br>Nimiq Login Files.',
      button: 'What else?'
    }, {
      title: 'Old and new Accounts',
      notice: 'Multiple Addresses and Login Files<br>are supported by new Accounts only.',
      button: 'Got it!'
    }];
    return _this;
  }

  _createClass(MigrationWelcome, [{
    key: "reset",
    value: function reset() {
      this.page = 1;
    }
  }, {
    key: "buttonClick",
    value: function buttonClick() {
      if (this.page === 3) this.$emit('finished');else this.page += 1;
    }
  }, {
    key: "title",
    get: function get() {
      return this.content[this.page - 1].title;
    }
  }, {
    key: "notice",
    get: function get() {
      return this.content[this.page - 1].notice;
    }
  }, {
    key: "buttonText",
    get: function get() {
      return this.content[this.page - 1].button;
    }
  }]);

  _inherits(MigrationWelcome, _Vue);

  return MigrationWelcome;
}(external_commonjs_vue_commonjs2_vue_root_Vue_default.a);

__decorate([Prop({
  type: String,
  default: 'https://medium.com/nimiq-network'
})], MigrationWelcomevue_type_script_lang_ts_MigrationWelcome.prototype, "link", void 0);

MigrationWelcomevue_type_script_lang_ts_MigrationWelcome = __decorate([vue_class_component_common_default()({
  components: {
    SmallPage: components_SmallPage,
    PageHeader: components_PageHeader,
    PageBody: components_PageBody,
    PageFooter: components_PageFooter,
    ArrowRightSmallIcon: ArrowRightSmallIcon
  }
})], MigrationWelcomevue_type_script_lang_ts_MigrationWelcome);
/* harmony default export */ var MigrationWelcomevue_type_script_lang_ts_ = (MigrationWelcomevue_type_script_lang_ts_MigrationWelcome);
// CONCATENATED MODULE: ./src/components/MigrationWelcome.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_MigrationWelcomevue_type_script_lang_ts_ = (MigrationWelcomevue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./src/components/MigrationWelcome.vue?vue&type=style&index=0&id=48e56bac&scoped=true&lang=css&
var MigrationWelcomevue_type_style_index_0_id_48e56bac_scoped_true_lang_css_ = __webpack_require__("76d6");

// CONCATENATED MODULE: ./src/components/MigrationWelcome.vue






/* normalize component */

var MigrationWelcome_component = normalizeComponent(
  components_MigrationWelcomevue_type_script_lang_ts_,
  MigrationWelcomevue_type_template_id_48e56bac_scoped_true_render,
  MigrationWelcomevue_type_template_id_48e56bac_scoped_true_staticRenderFns,
  false,
  null,
  "48e56bac",
  null
  
)

MigrationWelcome_component.options.__file = "MigrationWelcome.vue"
/* harmony default export */ var components_MigrationWelcome = (MigrationWelcome_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"6ce9ed87-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/QrCode.vue?vue&type=template&id=2785d1ea&
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
                return external_commonjs_vue_commonjs2_vue_root_Vue_default.a.nextTick();

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
                return external_commonjs_vue_commonjs2_vue_root_Vue_default.a.nextTick();

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
  QrCodevue_type_template_id_2785d1ea_render,
  QrCodevue_type_template_id_2785d1ea_staticRenderFns,
  false,
  null,
  null,
  null
  
)

QrCode_component.options.__file = "QrCode.vue"
/* harmony default export */ var components_QrCode = (QrCode_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"6ce9ed87-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/QrScanner.vue?vue&type=template&id=7e80c7c1&scoped=true&
var QrScannervue_type_template_id_7e80c7c1_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"qr-scanner nq-blue-bg"},[_c('video',{ref:"video",attrs:{"muted":"","autoplay":"","playsinline":"","width":"600","height":"600"},domProps:{"muted":true}}),_c('div',{ref:"overlay",staticClass:"overlay",class:{ inactive: _vm.cameraAccessFailed }},[_vm._t("default",[_c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 238 238"}},[_c('path',{attrs:{"fill":"none","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"4","d":"M31.3 2H10a8 8 0 0 0-8 8v21.3M206.8 2H228a8 8 0 0 1 8 8v21.3m0 175.4V228a8 8 0 0 1-8 8h-21.3m-175.4 0H10a8 8 0 0 1-8-8v-21.3"}})])])],2),_c('button',{staticClass:"nq-button-s inverse cancel-button",on:{"click":_vm._cancel}},[_vm._v("Cancel")]),_c('transition',{attrs:{"name":"fade"}},[(_vm.cameraAccessFailed)?_c('div',{staticClass:"camera-access-failed"},[(!_vm.hasCamera)?_c('div',{staticClass:"camera-access-failed-warning"},[_vm._v("\n                Your device does not have an accessible camera.\n            ")]):_c('div',[_c('div',{staticClass:"camera-access-failed-warning"},[_vm._v("\n                    Unblock the camera for this website to scan QR codes.\n                ")]),(_vm.isMobileOrTablet)?_c('div',[(_vm.browser === 'chrome')?_c('div',[_c('div',{staticClass:"access-denied-instructions"},[_vm._v("\n                            Click on "),_c('span',{staticClass:"browser-menu-icon"}),_vm._v(" and go to\n                            "),_c('br'),_vm._v("\n                            Settings > Site Settings > Camera\n                        ")]),_c('div',{staticClass:"browser-menu-arrow"})]):_c('div',{staticClass:"access-denied-instructions"},[_vm._v("\n                        Grant camera access when asked.\n                    ")])]):_c('div',{staticClass:"access-denied-instructions"},[(_vm.browser === 'safari')?_c('div',[_vm._v("\n                        Click on "),_c('b',[_vm._v("Safari")]),_vm._v(" and go to\n                        "),_c('br'),_vm._v("\n                        Settings for this Website > Camera\n                    ")]):_c('div',[_vm._v("\n                        Click on\n                        "),(_vm.browser === 'chrome')?_c('span',{staticClass:"camera-icon-chrome"}):(_vm.browser === 'firefox')?_c('span',{staticClass:"camera-icon-firefox"}):_c('span',[_vm._v("the camera icon")]),_vm._v("\n                        in the URL bar.\n                    ")])])])]):_vm._e()])],1)}
var QrScannervue_type_template_id_7e80c7c1_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/QrScanner.vue?vue&type=template&id=7e80c7c1&scoped=true&

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
    // - Safari iPhone: Mozilla/5.0 (iPhone; CPU iPhone OS 11_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/11.0 Mobile/15E148 Safari/604.1
    // - Safari iPad: Mozilla/5.0 (iPad; CPU OS 11_2_2 like Mac OS X) AppleWebKit/604.4.7 (KHTML, like Gecko) Version/11.0 Mobile/15C202 Safari/604.1
    // - Brave: is indistinguishable from Chrome user agents
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
            BrowserDetection._detectedBrowser =
                navigator.plugins.length === 0 && navigator.mimeTypes.length === 0 && !BrowserDetection.isMobile()
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
            parsedVersionParts.push(parseInt(versionParts[i]) || 0);
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
            && (browserInfo.version.major < 11 || browserInfo.version.major === 11 && browserInfo.version.minor === 2);
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
// EXTERNAL MODULE: ./src/components/QrScanner.vue?vue&type=style&index=0&id=7e80c7c1&scoped=true&lang=css&
var QrScannervue_type_style_index_0_id_7e80c7c1_scoped_true_lang_css_ = __webpack_require__("5aa5");

// CONCATENATED MODULE: ./src/components/QrScanner.vue






/* normalize component */

var QrScanner_component = normalizeComponent(
  components_QrScannervue_type_script_lang_ts_,
  QrScannervue_type_template_id_7e80c7c1_scoped_true_render,
  QrScannervue_type_template_id_7e80c7c1_scoped_true_staticRenderFns,
  false,
  null,
  "7e80c7c1",
  null
  
)

QrScanner_component.options.__file = "QrScanner.vue"
/* harmony default export */ var components_QrScanner = (QrScanner_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"6ce9ed87-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/SendTx.vue?vue&type=template&id=4d9e8127&scoped=true&
var SendTxvue_type_template_id_4d9e8127_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (!_vm.liveSender)?_c('SmallPage',{staticClass:"send-tx"},[_c('PageHeader',[_vm._v("\n        Choose Sender\n    ")]),_c('AccountList',{attrs:{"accounts":_vm._f("listAccountsAndContracts")(_vm.wallet),"walletId":_vm.wallet.id,"minBalance":1},on:{"account-selected":_vm.updateSender}})],1):(!_vm.liveRecipient || _vm.addContactOpened)?_c('SmallPage',{staticClass:"send-tx",class:{'overlay-open': _vm.contactsOpened || _vm.addContactOpened}},[_c('transition',{attrs:{"name":"transition-fade"}},[(_vm.liveRecipient && _vm.addContactOpened)?_c('SmallPage',{staticClass:"overlay"},[_c('AccountDetails',{ref:"accountDetails",attrs:{"address":_vm.liveRecipient.address,"editable":_vm.liveRecipient.type !== _vm.RecipientType.OWN_ADDRESS,"placeholder":"Name this contact...","label":_vm.liveRecipient.label},on:{"close":_vm.closeAddContact,"changed":_vm.setLabel}}),_c('PageFooter',[_c('button',{staticClass:"nq-button light-blue",on:{"click":_vm.proceedToSetAmount}},[_vm._v(_vm._s(_vm.addContactButtonText))])])],1):_vm._e()],1),_c('transition',{attrs:{"name":"transition-fade"}},[(_vm.contactsOpened && !_vm.addContactOpened)?_c('SmallPage',{staticClass:"overlay"},[_c('PageHeader',[_vm._v("\n                Select a contact\n            ")]),_c('ContactList',{attrs:{"contacts":_vm.contacts},on:{"select-contact":_vm.updateRecipient}}),_c('CloseButton',{staticClass:"top-right",on:{"click":function($event){_vm.contactsOpened = false}}})],1):_vm._e()],1),_c('PageHeader',{staticClass:"blur-target",attrs:{"backArrow":_vm.addressCount > 1},on:{"back":_vm.backFromRecipient}},[_vm._v("\n        Send a transaction\n        "),_c('a',{staticClass:"scan-qr nq-blue",attrs:{"href":"javascript:void(0)"},on:{"click":_vm.scanQr}},[_c('ScanQrCodeIcon')],1)]),_c('PageBody',{staticClass:"blur-target recipient-page"},[_c('ContactShortcuts',{attrs:{"contacts":_vm.contacts},on:{"contact-selected":_vm.updateRecipient,"contacts-opened":function($event){_vm.contacts.length > 0 ? _vm.contactsOpened = true : false}}}),_c('div',[_c('label',{staticClass:"nq-label"},[_vm._v("Enter address")]),_c('AddressInput',{ref:"address",on:{"address":_vm.updateRecipient},model:{value:(_vm.liveAddress),callback:function ($$v) {_vm.liveAddress=$$v},expression:"liveAddress"}})],1)],1),_c('PageFooter',{staticClass:"blur-target"},[_c('p',{staticClass:"nq-text"},[_vm._v("If recipient has no Account yet:")]),_c('button',{staticClass:"nq-button-s",on:{"click":function($event){return _vm.createCashlink(_vm.liveSender)}}},[_vm._v("Create a Cashlink")])])],1):_c('SmallPage',{staticClass:"send-tx",class:{'overlay-open': _vm.displayedDetails || _vm.optionsOpened}},[_c('transition',{attrs:{"name":"transition-fade"}},[(_vm.displayedDetails)?_c('SmallPage',{staticClass:"overlay"},[_c('AccountDetails',{ref:"accountDetails",attrs:{"address":_vm.displayedDetails === _vm.Details.SENDER ? _vm.liveSender.address : _vm.liveRecipient.address,"editable":_vm.displayedDetails === _vm.Details.RECIPIENT && _vm.liveRecipient.type !== _vm.RecipientType.OWN_ADDRESS,"placeholder":"Name this contact...","label":_vm.displayedDetails === _vm.Details.SENDER ? _vm.liveSender.label : _vm.liveRecipient.label,"balance":_vm.displayedDetails === _vm.Details.SENDER ? _vm.liveSender.balance : null},on:{"close":_vm.closeDetails,"changed":_vm.setLabel}}),(_vm.displayedDetails === _vm.Details.RECIPIENT && _vm.liveRecipient.type !== _vm.RecipientType.OWN_ADDRESS)?_c('PageFooter',[_c('button',{staticClass:"nq-button light-blue",on:{"click":function($event){return _vm.storeContactAndCloseOverlay()}}},[_vm._v("Save Contact")])]):_vm._e()],1):_vm._e()],1),_c('transition',{attrs:{"name":"transition-fade"}},[(_vm.optionsOpened)?_c('SmallPage',{staticClass:"overlay fee"},[_c('CloseButton',{staticClass:"top-right",on:{"click":_vm.closeOptions}}),_c('PageBody',[_c('h1',{staticClass:"nq-h1"},[_vm._v("Speed up your transaction")]),_c('p',{staticClass:"nq-text"},[_vm._v("By adding a transation fee, you can influence how fast your transaction will be processed.")]),_c('SelectBar',{ref:"feeSetter",attrs:{"options":_vm.FEE_OPTIONS,"name":"fee","selectedValue":_vm.feeLunaPerByte},on:{"changed":_vm.updateFeePreview}}),_c('Amount',{attrs:{"amount":_vm.feePreview,"minDecimals":0,"maxDecimals":5}})],1),_c('PageFooter',[_c('button',{staticClass:"nq-button light-blue",on:{"click":_vm.setFee}},[_vm._v("Set fee")])])],1):_vm._e()],1),_c('PageHeader',{staticClass:"blur-target",attrs:{"backArrow":!_vm.sender || !_vm.recipient || !_vm.recipientIsReadonly},on:{"back":_vm.backFromAmount}},[_vm._v("\n        Set Amount\n        "),_c('a',{staticClass:"nq-blue options-button",attrs:{"href":"javascript:void(0)","title":"Open settings"},on:{"click":function($event){_vm.optionsOpened = true}}},[_c('SettingsIcon')],1)]),_c('PageBody',{staticClass:"blur-target amount-page"},[_c('div',{staticClass:"sender-and-recipient"},[_c('a',{attrs:{"href":"javascript:void(0);"},on:{"click":function($event){_vm.displayedDetails = _vm.Details.SENDER}}},[_c('Account',{attrs:{"layout":"column","address":_vm.liveSender.address,"label":_vm.liveSender.label}})],1),_c('div',{staticClass:"arrow-wrapper"},[_c('ArrowRightIcon',{staticClass:"nq-light-blue"})],1),_c('a',{attrs:{"href":"javascript:void(0);"},on:{"click":function($event){_vm.displayedDetails = _vm.Details.RECIPIENT}}},[_c('Account',{class:{invalid: !_vm.recipientValid},attrs:{"layout":"column","address":_vm.liveRecipient.address,"label":_vm.liveRecipient.label || 'Unnamed Contact'}})],1)]),_c('AmountWithFee',{ref:"amountWithFee",attrs:{"available-balance":_vm.liveSender.balance},model:{value:(_vm.liveAmountAndFee),callback:function ($$v) {_vm.liveAmountAndFee=$$v},expression:"liveAmountAndFee"}}),_c('LabelInput',{ref:"messageInput",staticClass:"message",attrs:{"vanishing":true,"placeholder":"Add a public message...","maxBytes":64},model:{value:(_vm.liveExtraData),callback:function ($$v) {_vm.liveExtraData=$$v},expression:"liveExtraData"}})],1),_c('PageFooter',{staticClass:"blur-target"},[_c('button',{staticClass:"nq-button light-blue",attrs:{"disabled":!_vm.isValid || _vm.isLoading},on:{"click":_vm.sendTransaction}},[(_vm.showButtonLoader)?_c('CircleSpinner'):_vm._e(),_vm._v(_vm._s(_vm.buttonText)+"\n        ")],1)])],1)}
var SendTxvue_type_template_id_4d9e8127_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/SendTx.vue?vue&type=template&id=4d9e8127&scoped=true&

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
// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.find.js
var es6_array_find = __webpack_require__("7514");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"6ce9ed87-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/AccountDetails.vue?vue&type=template&id=56988aea&scoped=true&
var AccountDetailsvue_type_template_id_56988aea_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"account-details"},[_c('CloseButton',{staticClass:"top-right",on:{"click":_vm.close}}),_c('Account',{ref:"account",attrs:{"layout":"column","address":_vm.address,"image":_vm.image,"label":_vm.label !== _vm.address ? _vm.label : '',"walletLabel":_vm.walletLabel,"balance":_vm.balance,"editable":_vm.editable,"placeholder":_vm.placeholder},on:{"changed":_vm.changed}}),_c('Copyable',{attrs:{"text":_vm.address}},[_c('AddressDisplay',{attrs:{"address":_vm.address}})],1)],1)}
var AccountDetailsvue_type_template_id_56988aea_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/AccountDetails.vue?vue&type=template&id=56988aea&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"6ce9ed87-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/AddressDisplay.vue?vue&type=template&id=2e20ff27&scoped=true&
var AddressDisplayvue_type_template_id_2e20ff27_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"address-display"},_vm._l((_vm.chunks),function(chunk){return _c('span',{key:chunk,staticClass:"chunk"},[_vm._v(_vm._s(chunk)),_c('span',{staticClass:"space"},[_vm._v(" ")])])}),0)}
var AddressDisplayvue_type_template_id_2e20ff27_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/AddressDisplay.vue?vue&type=template&id=2e20ff27&scoped=true&

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
}(external_commonjs_vue_commonjs2_vue_root_Vue_default.a);

__decorate([Prop(String)], AddressDisplayvue_type_script_lang_ts_AddressDisplay.prototype, "address", void 0);

AddressDisplayvue_type_script_lang_ts_AddressDisplay = __decorate([vue_class_component_common_default.a], AddressDisplayvue_type_script_lang_ts_AddressDisplay);
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
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"6ce9ed87-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/CloseButton.vue?vue&type=template&id=20cd296e&scoped=true&
var CloseButtonvue_type_template_id_20cd296e_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('button',{staticClass:"nq-button-s",on:{"click":_vm.click}},[_c('CloseIcon')],1)}
var CloseButtonvue_type_template_id_20cd296e_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/CloseButton.vue?vue&type=template&id=20cd296e&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--13-1!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/CloseButton.vue?vue&type=script&lang=ts&









var CloseButtonvue_type_script_lang_ts_CloseButton =
/*#__PURE__*/
function (_Vue) {
  function CloseButton() {
    _classCallCheck(this, CloseButton);

    return _possibleConstructorReturn(this, _getPrototypeOf(CloseButton).apply(this, arguments));
  }

  _createClass(CloseButton, [{
    key: "click",
    value: function click(event) {}
  }]);

  _inherits(CloseButton, _Vue);

  return CloseButton;
}(external_commonjs_vue_commonjs2_vue_root_Vue_default.a);

__decorate([Emit()], CloseButtonvue_type_script_lang_ts_CloseButton.prototype, "click", null);

CloseButtonvue_type_script_lang_ts_CloseButton = __decorate([vue_class_component_common_default()({
  components: {
    CloseIcon: CloseIcon
  }
})], CloseButtonvue_type_script_lang_ts_CloseButton);
/* harmony default export */ var CloseButtonvue_type_script_lang_ts_ = (CloseButtonvue_type_script_lang_ts_CloseButton);
// CONCATENATED MODULE: ./src/components/CloseButton.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_CloseButtonvue_type_script_lang_ts_ = (CloseButtonvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./src/components/CloseButton.vue?vue&type=style&index=0&id=20cd296e&scoped=true&lang=css&
var CloseButtonvue_type_style_index_0_id_20cd296e_scoped_true_lang_css_ = __webpack_require__("6b18");

// CONCATENATED MODULE: ./src/components/CloseButton.vue






/* normalize component */

var CloseButton_component = normalizeComponent(
  components_CloseButtonvue_type_script_lang_ts_,
  CloseButtonvue_type_template_id_20cd296e_scoped_true_render,
  CloseButtonvue_type_template_id_20cd296e_scoped_true_staticRenderFns,
  false,
  null,
  "20cd296e",
  null
  
)

CloseButton_component.options.__file = "CloseButton.vue"
/* harmony default export */ var components_CloseButton = (CloseButton_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"6ce9ed87-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Copyable.vue?vue&type=template&id=5b8f619a&scoped=true&
var Copyablevue_type_template_id_5b8f619a_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"copyable",class:{ copied: _vm.copied },on:{"click":_vm.copy}},[_c('div',{staticClass:"background"}),_vm._t("default")],2)}
var Copyablevue_type_template_id_5b8f619a_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Copyable.vue?vue&type=template&id=5b8f619a&scoped=true&

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

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--13-1!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Copyable.vue?vue&type=script&lang=ts&









/**
 * **Copyable**
 *
 * Copyable can be used to make a click on one or more elements copy content to the Clipboard with visual feedback.
 * By default the children's contents are copied to the Clipboard. Alternatively, a specific text to be copied can be
 * provided.
 *
 * Props:
 *
 * **text** {string} [optional] - A specific text to be copied to the clipboard
 */

var Copyablevue_type_script_lang_ts_Copyable =
/*#__PURE__*/
function (_Vue) {
  /**
   * **Copyable**
   *
   * Copyable can be used to make a click on one or more elements copy content to the Clipboard with visual feedback.
   * By default the children's contents are copied to the Clipboard. Alternatively, a specific text to be copied can be
   * provided.
   *
   * Props:
   *
   * **text** {string} [optional] - A specific text to be copied to the clipboard
   */
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

      // Note that when iterating over childNodes, pseudo elements are excluded.
      var text = this.text || _toConsumableArray(this.$el.childNodes).reduce(function (concatenated, node) {
        var nodeText = '';

        if (node.nodeType === Node.TEXT_NODE) {
          nodeText = node.textContent.trim();
        } else if (node.nodeType === Node.ELEMENT_NODE) {
          // use innerText as it better represents the visible content than textContent
          nodeText = node.innerText;
        }

        if (concatenated && nodeText) {
          concatenated += '\n';
        }

        concatenated += nodeText;
        return concatenated;
      }, '');

      Clipboard.copy(text);
      window.clearTimeout(this._copiedResetTimeout);
      this.copied = true;
      this._copiedResetTimeout = window.setTimeout(function () {
        _this2.copied = false;
      }, 1800);
    }
  }]);

  _inherits(Copyable, _Vue);

  return Copyable;
}(external_commonjs_vue_commonjs2_vue_root_Vue_default.a);

__decorate([Prop(String)], Copyablevue_type_script_lang_ts_Copyable.prototype, "text", void 0);

Copyablevue_type_script_lang_ts_Copyable = __decorate([vue_class_component_common_default.a], Copyablevue_type_script_lang_ts_Copyable);
/* harmony default export */ var Copyablevue_type_script_lang_ts_ = (Copyablevue_type_script_lang_ts_Copyable);
// CONCATENATED MODULE: ./src/components/Copyable.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_Copyablevue_type_script_lang_ts_ = (Copyablevue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./src/components/Copyable.vue?vue&type=style&index=0&id=5b8f619a&scoped=true&lang=css&
var Copyablevue_type_style_index_0_id_5b8f619a_scoped_true_lang_css_ = __webpack_require__("1545");

// CONCATENATED MODULE: ./src/components/Copyable.vue






/* normalize component */

var Copyable_component = normalizeComponent(
  components_Copyablevue_type_script_lang_ts_,
  Copyablevue_type_template_id_5b8f619a_scoped_true_render,
  Copyablevue_type_template_id_5b8f619a_scoped_true_staticRenderFns,
  false,
  null,
  "5b8f619a",
  null
  
)

Copyable_component.options.__file = "Copyable.vue"
/* harmony default export */ var components_Copyable = (Copyable_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--13-1!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/AccountDetails.vue?vue&type=script&lang=ts&














var AccountDetailsvue_type_script_lang_ts_AccountDetails =
/*#__PURE__*/
function (_Vue) {
  function AccountDetails() {
    _classCallCheck(this, AccountDetails);

    return _possibleConstructorReturn(this, _getPrototypeOf(AccountDetails).apply(this, arguments));
  }

  _createClass(AccountDetails, [{
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

  _inherits(AccountDetails, _Vue);

  return AccountDetails;
}(external_commonjs_vue_commonjs2_vue_root_Vue_default.a);

__decorate([Prop(String)], AccountDetailsvue_type_script_lang_ts_AccountDetails.prototype, "address", void 0);

__decorate([Prop(String)], AccountDetailsvue_type_script_lang_ts_AccountDetails.prototype, "image", void 0);

__decorate([Prop(String)], AccountDetailsvue_type_script_lang_ts_AccountDetails.prototype, "label", void 0);

__decorate([Prop(String)], AccountDetailsvue_type_script_lang_ts_AccountDetails.prototype, "walletLabel", void 0);

__decorate([Prop(Number)], AccountDetailsvue_type_script_lang_ts_AccountDetails.prototype, "balance", void 0);

__decorate([Prop(Boolean)], AccountDetailsvue_type_script_lang_ts_AccountDetails.prototype, "editable", void 0);

__decorate([Prop(String)], AccountDetailsvue_type_script_lang_ts_AccountDetails.prototype, "placeholder", void 0);

__decorate([Emit()], AccountDetailsvue_type_script_lang_ts_AccountDetails.prototype, "close", null);

__decorate([Emit()], AccountDetailsvue_type_script_lang_ts_AccountDetails.prototype, "changed", null);

AccountDetailsvue_type_script_lang_ts_AccountDetails = __decorate([vue_class_component_common_default()({
  components: {
    Account: components_Account,
    Amount: components_Amount,
    AddressDisplay: components_AddressDisplay,
    CloseButton: components_CloseButton,
    Copyable: components_Copyable
  }
})], AccountDetailsvue_type_script_lang_ts_AccountDetails);
/* harmony default export */ var AccountDetailsvue_type_script_lang_ts_ = (AccountDetailsvue_type_script_lang_ts_AccountDetails);
// CONCATENATED MODULE: ./src/components/AccountDetails.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_AccountDetailsvue_type_script_lang_ts_ = (AccountDetailsvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./src/components/AccountDetails.vue?vue&type=style&index=0&id=56988aea&scoped=true&lang=css&
var AccountDetailsvue_type_style_index_0_id_56988aea_scoped_true_lang_css_ = __webpack_require__("44b8");

// CONCATENATED MODULE: ./src/components/AccountDetails.vue






/* normalize component */

var AccountDetails_component = normalizeComponent(
  components_AccountDetailsvue_type_script_lang_ts_,
  AccountDetailsvue_type_template_id_56988aea_scoped_true_render,
  AccountDetailsvue_type_template_id_56988aea_scoped_true_staticRenderFns,
  false,
  null,
  "56988aea",
  null
  
)

AccountDetails_component.options.__file = "AccountDetails.vue"
/* harmony default export */ var components_AccountDetails = (AccountDetails_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"6ce9ed87-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/AddressInput.vue?vue&type=template&id=19ef3b0b&scoped=true&
var AddressInputvue_type_template_id_19ef3b0b_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"address-input"},[_c('textarea',{ref:"textarea",attrs:{"placeholder":"NQ","spellcheck":"false","autocomplete":"off"},on:{"keydown":_vm._onKeyDown,"input":_vm._onInput,"paste":_vm._onPaste,"cut":_vm._onCut,"copy":_vm._formatClipboard,"click":_vm._updateSelection,"select":_vm._updateSelection,"blur":_vm._updateSelection,"focus":_vm._onFocus}}),_vm._l((9),function(i){return [_c('div',{staticClass:"block",class:{
            focused: _vm._isBlockFocused(i - 1),
            invisible: _vm._isBlockFilled(i - 1),
        }}),(i % 3)?_c('div',{staticClass:"block-connector",class:{
            invisible: _vm._isBlockFilled(i - 1) && !_vm._isBlockFocused(i - 1) || _vm._isBlockFilled(i) && !_vm._isBlockFocused(i),
        }}):_vm._e()]}),(_vm.supportsMixBlendMode)?[_vm._l((3),function(row){return [_vm._l((3),function(column){return [_c('div',{staticClass:"color-overlay",style:({
                    /* Hidden when placeholder shown. Visibility instead of v-if to avoid flickering in Firefox */
                    visibility: _vm.currentValue ? 'visible' : 'hidden',
                    left: ("calc(" + (column - 1) + " * (var(--block-width) + var(--block-gap)) + .25rem)"),
                    top: ("calc(" + (row - 1) + " * (var(--block-height) + var(--block-gap)) + .25rem)"),
                    background:  ("var(--nimiq-" + (_vm._isBlockFocused((row - 1) * 3 + (column - 1)) ? 'light-' : '') + "blue)"),
                })})]})]})]:_vm._e()],2)}
var AddressInputvue_type_template_id_19ef3b0b_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/AddressInput.vue?vue&type=template&id=19ef3b0b&scoped=true&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.string.ends-with.js
var es6_string_ends_with = __webpack_require__("aef6");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.constructor.js
var es6_regexp_constructor = __webpack_require__("3b2b");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.string.starts-with.js
var es6_string_starts_with = __webpack_require__("f559");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.split.js
var es6_regexp_split = __webpack_require__("28a5");

// EXTERNAL MODULE: ./node_modules/input-format/modules/input control.js
var input_control = __webpack_require__("a1f0");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--13-1!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/AddressInput.vue?vue&type=script&lang=ts&












var AddressInput_1;




var AddressInputvue_type_script_lang_ts_AddressInput = AddressInput_1 =
/*#__PURE__*/
function (_Vue) {
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

  _inherits(AddressInput, _Vue);

  return AddressInput;
}(external_commonjs_vue_commonjs2_vue_root_Vue_default.a);

AddressInputvue_type_script_lang_ts_AddressInput.ADDRESS_MAX_LENGTH_WITHOUT_SPACES = 9 * 4;
AddressInputvue_type_script_lang_ts_AddressInput.ADDRESS_MAX_LENGTH = AddressInput_1.ADDRESS_MAX_LENGTH_WITHOUT_SPACES + 8;

__decorate([Prop({
  type: String,
  default: ''
})], AddressInputvue_type_script_lang_ts_AddressInput.prototype, "value", void 0);

__decorate([Prop(Boolean)], AddressInputvue_type_script_lang_ts_AddressInput.prototype, "autofocus", void 0);

__decorate([Watch('value')], AddressInputvue_type_script_lang_ts_AddressInput.prototype, "_onExternalValueChange", null);

AddressInputvue_type_script_lang_ts_AddressInput = AddressInput_1 = __decorate([vue_class_component_common_default.a], AddressInputvue_type_script_lang_ts_AddressInput);
/* harmony default export */ var AddressInputvue_type_script_lang_ts_ = (AddressInputvue_type_script_lang_ts_AddressInput);
// CONCATENATED MODULE: ./src/components/AddressInput.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_AddressInputvue_type_script_lang_ts_ = (AddressInputvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./src/components/AddressInput.vue?vue&type=style&index=0&id=19ef3b0b&scoped=true&lang=css&
var AddressInputvue_type_style_index_0_id_19ef3b0b_scoped_true_lang_css_ = __webpack_require__("bdfa");

// CONCATENATED MODULE: ./src/components/AddressInput.vue






/* normalize component */

var AddressInput_component = normalizeComponent(
  components_AddressInputvue_type_script_lang_ts_,
  AddressInputvue_type_template_id_19ef3b0b_scoped_true_render,
  AddressInputvue_type_template_id_19ef3b0b_scoped_true_staticRenderFns,
  false,
  null,
  "19ef3b0b",
  null
  
)

AddressInput_component.options.__file = "AddressInput.vue"
/* harmony default export */ var components_AddressInput = (AddressInput_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"6ce9ed87-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/ContactShortcuts.vue?vue&type=template&id=5eeaf1e8&scoped=true&
var ContactShortcutsvue_type_template_id_5eeaf1e8_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"contact-shortcuts"},[_c('div',{staticClass:"open-contacts",class:{'disabled': _vm.contacts.length === 0},on:{"click":_vm.contactsOpened}},[_c('ContactsIcon'),_c('div',{staticClass:"label"},[_vm._v("Contacts")])],1),_c('div',{staticClass:"contacts"},[_vm._l((_vm.filteredContacts),function(contact){return _c('Account',{key:contact.address,attrs:{"layout":"column","address":contact.address,"label":contact.label},nativeOn:{"click":function($event){return _vm.contactSelected(contact.address, contact.label)}}})}),_vm._l((_vm.missingContacts),function(contact){return _c('Account',{key:contact,staticClass:"disabled",attrs:{"layout":"column","address":"","label":""}})})],2)])}
var ContactShortcutsvue_type_template_id_5eeaf1e8_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/ContactShortcuts.vue?vue&type=template&id=5eeaf1e8&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--13-1!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/ContactShortcuts.vue?vue&type=script&lang=ts&










var ContactShortcutsvue_type_script_lang_ts_ContactShortcuts =
/*#__PURE__*/
function (_Vue) {
  function ContactShortcuts() {
    _classCallCheck(this, ContactShortcuts);

    return _possibleConstructorReturn(this, _getPrototypeOf(ContactShortcuts).apply(this, arguments));
  }

  _createClass(ContactShortcuts, [{
    key: "contactsOpened",
    value: function contactsOpened() {}
  }, {
    key: "contactSelected",
    value: function contactSelected(address, label) {}
  }, {
    key: "filteredContacts",
    get: function get() {
      return this.contacts.slice(0, 3);
    }
  }, {
    key: "missingContacts",
    get: function get() {
      return new Array(Math.max(0, 3 - this.contacts.length));
    }
  }]);

  _inherits(ContactShortcuts, _Vue);

  return ContactShortcuts;
}(external_commonjs_vue_commonjs2_vue_root_Vue_default.a);

__decorate([Prop(Array)], ContactShortcutsvue_type_script_lang_ts_ContactShortcuts.prototype, "contacts", void 0);

__decorate([Emit()], ContactShortcutsvue_type_script_lang_ts_ContactShortcuts.prototype, "contactsOpened", null);

__decorate([Emit()], ContactShortcutsvue_type_script_lang_ts_ContactShortcuts.prototype, "contactSelected", null);

ContactShortcutsvue_type_script_lang_ts_ContactShortcuts = __decorate([vue_class_component_common_default()({
  components: {
    Account: components_Account,
    ContactsIcon: ContactsIcon
  }
})], ContactShortcutsvue_type_script_lang_ts_ContactShortcuts);
/* harmony default export */ var ContactShortcutsvue_type_script_lang_ts_ = (ContactShortcutsvue_type_script_lang_ts_ContactShortcuts);
// CONCATENATED MODULE: ./src/components/ContactShortcuts.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_ContactShortcutsvue_type_script_lang_ts_ = (ContactShortcutsvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./src/components/ContactShortcuts.vue?vue&type=style&index=0&id=5eeaf1e8&scoped=true&lang=css&
var ContactShortcutsvue_type_style_index_0_id_5eeaf1e8_scoped_true_lang_css_ = __webpack_require__("c82f");

// CONCATENATED MODULE: ./src/components/ContactShortcuts.vue






/* normalize component */

var ContactShortcuts_component = normalizeComponent(
  components_ContactShortcutsvue_type_script_lang_ts_,
  ContactShortcutsvue_type_template_id_5eeaf1e8_scoped_true_render,
  ContactShortcutsvue_type_template_id_5eeaf1e8_scoped_true_staticRenderFns,
  false,
  null,
  "5eeaf1e8",
  null
  
)

ContactShortcuts_component.options.__file = "ContactShortcuts.vue"
/* harmony default export */ var components_ContactShortcuts = (ContactShortcuts_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"6ce9ed87-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/AmountWithFee.vue?vue&type=template&id=f7787c42&scoped=true&
var AmountWithFeevue_type_template_id_f7787c42_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"amount-with-fee"},[_c('AmountInput',{ref:"amountInput",staticClass:"value",class:{invalid: !_vm.isValid && _vm.liveAmount > 0},model:{value:(_vm.liveAmount),callback:function ($$v) {_vm.liveAmount=$$v},expression:"liveAmount"}}),_c('div',{staticClass:"fee-section nq-text-s"},[(!_vm.isValid && _vm.liveAmount)?_c('div',{staticClass:"nq-red"},[_vm._t("insufficient-balance-error",[_vm._v("Insufficient balance")])],2):(_vm.value.fee)?_c('div',[_vm._v("\n            + "),_c('Amount',{attrs:{"amount":_vm.value.fee,"minDecimals":0,"maxDecimals":5}}),_vm._v(" fee\n        ")],1):_vm._e()])],1)}
var AmountWithFeevue_type_template_id_f7787c42_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/AmountWithFee.vue?vue&type=template&id=f7787c42&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"6ce9ed87-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/AmountInput.vue?vue&type=template&id=32b6c97e&scoped=true&
var AmountInputvue_type_template_id_32b6c97e_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"amount-input"},[_c('form',{ref:"fullWidth",staticClass:"label-input",on:{"submit":function($event){$event.preventDefault();}}},[_c('span',{ref:"widthPlaceholder",staticClass:"width-finder width-placeholder"},[_vm._v(_vm._s(_vm.placeholder))]),(_vm.maxFontSize)?_c('div',{staticClass:"full-width",class:{'width-finder': _vm.maxWidth > 0}},[_vm._v("Width")]):_vm._e(),_c('span',{ref:"widthValue",staticClass:"width-finder width-value"},[_vm._v(_vm._s(_vm.formattedValue || ''))]),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.formattedValue),expression:"formattedValue"}],ref:"input",staticClass:"nq-input nq-light-blue vanishing",style:({width: ((this.width) + "px"), fontSize: ((this.fontSize) + "rem")}),attrs:{"type":"text","placeholder":_vm.placeholder},domProps:{"value":(_vm.formattedValue)},on:{"input":function($event){if($event.target.composing){ return; }_vm.formattedValue=$event.target.value}}})]),_c('span',{staticClass:"nim"},[_vm._v("NIM")])])}
var AmountInputvue_type_template_id_32b6c97e_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/AmountInput.vue?vue&type=template&id=32b6c97e&scoped=true&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es7.string.pad-end.js
var es7_string_pad_end = __webpack_require__("ed50");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--13-1!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/AmountInput.vue?vue&type=script&lang=ts&















var AmountInputvue_type_script_lang_ts_AmountInput =
/*#__PURE__*/
function (_Vue) {
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

      return function mounted() {
        return _mounted.apply(this, arguments);
      };
    }()
  }, {
    key: "focus",
    value: function focus() {
      this.$refs.input.focus();
    }
  }, {
    key: "updateValue",
    value: function updateValue(newValue) {
      this.formattedValue = newValue ? (newValue / 1e5).toString() : '';
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
                return external_commonjs_vue_commonjs2_vue_root_Vue_default.a.nextTick();

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

      return function updateWidth() {
        return _updateWidth.apply(this, arguments);
      };
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
      var regExp = new RegExp(/(\d*)(\.(\d{0,5}))?/g);
      var regExpResult = regExp.exec(value);

      if (regExpResult[1] || regExpResult[2]) {
        this.liveValue = "".concat(regExpResult[1] ? regExpResult[1] : '0').concat(regExpResult[2] ? regExpResult[2] : '');
        this.valueInLuna = Number("".concat(regExpResult[1]).concat(regExpResult[2] ? regExpResult[3].padEnd(5, '0') : '00000'));
      }

      if (this.lastEmittedValue !== this.valueInLuna) {
        this.$emit('input', this.valueInLuna);
        this.lastEmittedValue = this.valueInLuna;
      } // Trigger a valueChange for the getter.


      this.$forceUpdate();
    }
  }]);

  _inherits(AmountInput, _Vue);

  return AmountInput;
}(external_commonjs_vue_commonjs2_vue_root_Vue_default.a);

__decorate([Prop({
  type: Number
})], AmountInputvue_type_script_lang_ts_AmountInput.prototype, "value", void 0);

__decorate([Prop({
  type: Number,
  default: 8
})], AmountInputvue_type_script_lang_ts_AmountInput.prototype, "maxFontSize", void 0);

__decorate([Prop({
  type: String,
  default: '0'
})], AmountInputvue_type_script_lang_ts_AmountInput.prototype, "placeholder", void 0);

__decorate([Watch('value', {
  immediate: true
})], AmountInputvue_type_script_lang_ts_AmountInput.prototype, "updateValue", null);

__decorate([Watch('formattedValue')], AmountInputvue_type_script_lang_ts_AmountInput.prototype, "updateWidth", null);

AmountInputvue_type_script_lang_ts_AmountInput = __decorate([vue_class_component_common_default.a], AmountInputvue_type_script_lang_ts_AmountInput);
/* harmony default export */ var AmountInputvue_type_script_lang_ts_ = (AmountInputvue_type_script_lang_ts_AmountInput);
// CONCATENATED MODULE: ./src/components/AmountInput.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_AmountInputvue_type_script_lang_ts_ = (AmountInputvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./src/components/AmountInput.vue?vue&type=style&index=0&id=32b6c97e&scoped=true&lang=css&
var AmountInputvue_type_style_index_0_id_32b6c97e_scoped_true_lang_css_ = __webpack_require__("bfec");

// CONCATENATED MODULE: ./src/components/AmountInput.vue






/* normalize component */

var AmountInput_component = normalizeComponent(
  components_AmountInputvue_type_script_lang_ts_,
  AmountInputvue_type_template_id_32b6c97e_scoped_true_render,
  AmountInputvue_type_template_id_32b6c97e_scoped_true_staticRenderFns,
  false,
  null,
  "32b6c97e",
  null
  
)

AmountInput_component.options.__file = "AmountInput.vue"
/* harmony default export */ var components_AmountInput = (AmountInput_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--13-1!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/AmountWithFee.vue?vue&type=script&lang=ts&











var AmountWithFeevue_type_script_lang_ts_AmountWithFee =
/*#__PURE__*/
function (_Vue) {
  function AmountWithFee() {
    var _this;

    _classCallCheck(this, AmountWithFee);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(AmountWithFee).apply(this, arguments));
    _this.liveAmount = _this.value.amount;
    return _this;
  }

  _createClass(AmountWithFee, [{
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
    key: "focus",
    value: function focus() {
      this.$refs.amountInput.focus();
    }
  }, {
    key: "isValid",
    get: function get() {
      return this.liveAmount > 0 && this.liveAmount + this.value.fee <= this.availableBalance;
    }
  }]);

  _inherits(AmountWithFee, _Vue);

  return AmountWithFee;
}(external_commonjs_vue_commonjs2_vue_root_Vue_default.a);

__decorate([Prop({
  type: Object,
  default: function _default() {
    return {
      amount: 0,
      fee: 0,
      isValid: false
    };
  }
})], AmountWithFeevue_type_script_lang_ts_AmountWithFee.prototype, "value", void 0);

__decorate([Prop({
  type: Number,
  default: 0
})], AmountWithFeevue_type_script_lang_ts_AmountWithFee.prototype, "availableBalance", void 0);

__decorate([Watch('isValid', {
  immediate: true
})], AmountWithFeevue_type_script_lang_ts_AmountWithFee.prototype, "watchAvailableAmountChange", null);

__decorate([Watch('liveAmount', {
  immediate: true
})], AmountWithFeevue_type_script_lang_ts_AmountWithFee.prototype, "watchAmountChange", null);

AmountWithFeevue_type_script_lang_ts_AmountWithFee = __decorate([vue_class_component_common_default()({
  components: {
    Amount: components_Amount,
    AmountInput: components_AmountInput
  }
})], AmountWithFeevue_type_script_lang_ts_AmountWithFee);
/* harmony default export */ var AmountWithFeevue_type_script_lang_ts_ = (AmountWithFeevue_type_script_lang_ts_AmountWithFee);
// CONCATENATED MODULE: ./src/components/AmountWithFee.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_AmountWithFeevue_type_script_lang_ts_ = (AmountWithFeevue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./src/components/AmountWithFee.vue?vue&type=style&index=0&id=f7787c42&scoped=true&lang=css&
var AmountWithFeevue_type_style_index_0_id_f7787c42_scoped_true_lang_css_ = __webpack_require__("cacf");

// CONCATENATED MODULE: ./src/components/AmountWithFee.vue






/* normalize component */

var AmountWithFee_component = normalizeComponent(
  components_AmountWithFeevue_type_script_lang_ts_,
  AmountWithFeevue_type_template_id_f7787c42_scoped_true_render,
  AmountWithFeevue_type_template_id_f7787c42_scoped_true_staticRenderFns,
  false,
  null,
  "f7787c42",
  null
  
)

AmountWithFee_component.options.__file = "AmountWithFee.vue"
/* harmony default export */ var components_AmountWithFee = (AmountWithFee_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"6ce9ed87-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/SelectBar.vue?vue&type=template&id=2c3d01a0&scoped=true&
var SelectBarvue_type_template_id_2c3d01a0_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"select-bar"},_vm._l((_vm.options),function(option){return _c('div',{key:option.value},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.selectedOption),expression:"selectedOption"}],attrs:{"type":"radio","name":_vm.name,"id":option.value},domProps:{"value":option,"checked":_vm._q(_vm.selectedOption,option)},on:{"change":function($event){_vm.selectedOption=option}}}),_c('label',{staticClass:"nq-label",class:_vm.getColor(option),attrs:{"for":option.value}},[_vm._v(_vm._s(option.text))])])}),0)}
var SelectBarvue_type_template_id_2c3d01a0_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/SelectBar.vue?vue&type=template&id=2c3d01a0&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--13-1!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/SelectBar.vue?vue&type=script&lang=ts&











var SelectBarvue_type_script_lang_ts_SelectBar =
/*#__PURE__*/
function (_Vue) {
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

  _inherits(SelectBar, _Vue);

  return SelectBar;
}(external_commonjs_vue_commonjs2_vue_root_Vue_default.a);

__decorate([Prop(String)], SelectBarvue_type_script_lang_ts_SelectBar.prototype, "name", void 0);

__decorate([Prop(Array)], SelectBarvue_type_script_lang_ts_SelectBar.prototype, "options", void 0);

__decorate([Prop(Number)], SelectBarvue_type_script_lang_ts_SelectBar.prototype, "selectedValue", void 0);

__decorate([Watch('selectedOption')], SelectBarvue_type_script_lang_ts_SelectBar.prototype, "onChanged", null);

SelectBarvue_type_script_lang_ts_SelectBar = __decorate([vue_class_component_common_default.a], SelectBarvue_type_script_lang_ts_SelectBar);
/* harmony default export */ var SelectBarvue_type_script_lang_ts_ = (SelectBarvue_type_script_lang_ts_SelectBar);
// CONCATENATED MODULE: ./src/components/SelectBar.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_SelectBarvue_type_script_lang_ts_ = (SelectBarvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./src/components/SelectBar.vue?vue&type=style&index=0&id=2c3d01a0&scoped=true&lang=css&
var SelectBarvue_type_style_index_0_id_2c3d01a0_scoped_true_lang_css_ = __webpack_require__("779c");

// CONCATENATED MODULE: ./src/components/SelectBar.vue






/* normalize component */

var SelectBar_component = normalizeComponent(
  components_SelectBarvue_type_script_lang_ts_,
  SelectBarvue_type_template_id_2c3d01a0_scoped_true_render,
  SelectBarvue_type_template_id_2c3d01a0_scoped_true_staticRenderFns,
  false,
  null,
  "2c3d01a0",
  null
  
)

SelectBar_component.options.__file = "SelectBar.vue"
/* harmony default export */ var components_SelectBar = (SelectBar_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"6ce9ed87-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/CircleSpinner.vue?vue&type=template&id=05d748b3&scoped=true&functional=true&
var CircleSpinnervue_type_template_id_05d748b3_scoped_true_functional_true_render = function (_h,_vm) {var _c=_vm._c;return _c('svg',{staticClass:"circle-spinner",attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 18 18","width":"18","height":"18","fill":"none","stroke-width":"2","stroke-linecap":"round"}},[_c('path',{attrs:{"stroke":"#0582CA","d":"M9,1c4.42,0,8,3.58,8,8"}}),_c('path',{attrs:{"stroke":"#1F2348","opacity":".3","d":"M4.27,2.56C2.29,4.01,1,6.35,1,9c0,4.42,3.58,8,8,8c2.65,0,4.99-1.29,6.44-3.27"}})])}
var CircleSpinnervue_type_template_id_05d748b3_scoped_true_functional_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/CircleSpinner.vue?vue&type=template&id=05d748b3&scoped=true&functional=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--13-1!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/CircleSpinner.vue?vue&type=script&lang=ts&







var CircleSpinnervue_type_script_lang_ts_CircleSpinner =
/*#__PURE__*/
function (_Vue) {
  function CircleSpinner() {
    _classCallCheck(this, CircleSpinner);

    return _possibleConstructorReturn(this, _getPrototypeOf(CircleSpinner).apply(this, arguments));
  }

  _inherits(CircleSpinner, _Vue);

  return CircleSpinner;
}(external_commonjs_vue_commonjs2_vue_root_Vue_default.a);

CircleSpinnervue_type_script_lang_ts_CircleSpinner = __decorate([vue_class_component_common_default.a], CircleSpinnervue_type_script_lang_ts_CircleSpinner);
/* harmony default export */ var CircleSpinnervue_type_script_lang_ts_ = (CircleSpinnervue_type_script_lang_ts_CircleSpinner);
// CONCATENATED MODULE: ./src/components/CircleSpinner.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_CircleSpinnervue_type_script_lang_ts_ = (CircleSpinnervue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./src/components/CircleSpinner.vue?vue&type=style&index=0&id=05d748b3&scoped=true&lang=css&
var CircleSpinnervue_type_style_index_0_id_05d748b3_scoped_true_lang_css_ = __webpack_require__("dd56");

// CONCATENATED MODULE: ./src/components/CircleSpinner.vue






/* normalize component */

var CircleSpinner_component = normalizeComponent(
  components_CircleSpinnervue_type_script_lang_ts_,
  CircleSpinnervue_type_template_id_05d748b3_scoped_true_functional_true_render,
  CircleSpinnervue_type_template_id_05d748b3_scoped_true_functional_true_staticRenderFns,
  true,
  null,
  "05d748b3",
  null
  
)

CircleSpinner_component.options.__file = "CircleSpinner.vue"
/* harmony default export */ var components_CircleSpinner = (CircleSpinner_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--13-1!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/SendTx.vue?vue&type=script&lang=ts&


































var Details;

(function (Details) {
  Details[Details["NONE"] = 0] = "NONE";
  Details[Details["SENDER"] = 1] = "SENDER";
  Details[Details["RECIPIENT"] = 2] = "RECIPIENT";
})(Details || (Details = {}));

var RecipientType;

(function (RecipientType) {
  RecipientType[RecipientType["UNKOWN"] = 0] = "UNKOWN";
  RecipientType[RecipientType["CONTACT"] = 1] = "CONTACT";
  RecipientType[RecipientType["OWN_ADDRESS"] = 2] = "OWN_ADDRESS";
})(RecipientType || (RecipientType = {}));

var SendTxvue_type_script_lang_ts_SendTx =
/*#__PURE__*/
function (_Vue) {
  function SendTx() {
    var _this;

    _classCallCheck(this, SendTx);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SendTx).apply(this, arguments));
    _this.liveSender = null;
    _this.liveRecipient = null;
    _this.displayedDetails = Details.NONE;
    _this.contactsOpened = false;
    _this.optionsOpened = false;
    _this.addContactOpened = false;
    _this.liveAddress = '';
    _this.feeLunaPerByte = 0;
    _this.feeLunaPerBytePreview = 0;
    _this.liveExtraData = '';
    _this.liveContactLabel = '';
    _this.liveAmountAndFee = {
      amount: 0,
      fee: _this.fee,
      isValid: false
    };
    return _this;
  }

  _createClass(SendTx, [{
    key: "focus",
    value: function focus() {
      var _this2 = this;

      var dontFocusOnMobile = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      if (dontFocusOnMobile && module_BrowserDetection.isMobile()) return;
      external_commonjs_vue_commonjs2_vue_root_Vue_default.a.nextTick(function () {
        if (_this2.$refs.accountDetails) {
          _this2.$refs.accountDetails.focus();
        } else if (_this2.$refs.address) {
          _this2.$refs.address.focus();
        } else if (_this2.$refs.amountWithFee && (!_this2.liveAmountAndFee.amount || _this2.liveExtraData)) {
          _this2.$refs.amountWithFee.focus();
        } else if (_this2.$refs.messageInput) {
          _this2.$refs.messageInput.focus();
        }
      });
    }
  }, {
    key: "clear",
    value: function clear() {
      this.liveSender = null;
      this.liveRecipient = null;
      this.displayedDetails = Details.NONE;
      this.contactsOpened = false;
      this.optionsOpened = false;
      this.feeLunaPerByte = 0;
      this.liveExtraData = '';
      this.liveContactLabel = '';
      this.liveAmountAndFee = {
        amount: 0,
        fee: this.fee,
        isValid: false
      };
    }
  }, {
    key: "checkLiveSenderInWallet",
    value: function checkLiveSenderInWallet() {
      if (this.addressCount === 1) {
        this.setSender({
          walletId: this.wallet.id,
          address: this.wallet.accounts.values().next().value.userFriendlyAddress
        });
        return;
      }

      if (!this.liveSender || this.sender) return;

      if (!this.wallet.accounts.has(this.liveSender.address)) {
        this.liveSender = null;
      }
    }
  }, {
    key: "setSender",
    value: function setSender(sender) {
      if (!sender) {
        // this.liveSender = null;
        return;
      }

      var walletId = sender.walletId;
      var address = sender.address;
      var foundAddress = this.wallet.accounts.get(address) || this.wallet.contracts.find(function (c) {
        return c.userFriendlyAddress === address;
      });

      if (!foundAddress) {
        this.liveSender = null;
        return;
      }

      this.liveSender = {
        address: address,
        label: foundAddress.label,
        walletId: walletId,
        balance: foundAddress.balance || 0
      };
      this.focus(true);
    }
  }, {
    key: "updateSender",
    value: function updateSender(walletId, address) {
      this.setSender({
        walletId: walletId,
        address: address
      });
    }
  }, {
    key: "setRecipient",
    value: function () {
      var _setRecipient = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(recipient) {
        var recipientType, foundContact, foundAddress;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (recipient) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt("return");

              case 2:
                recipientType = RecipientType.UNKOWN;

                if (!recipient.label) {
                  foundContact = this.contacts.find(function (contact) {
                    return contact.address === recipient.address;
                  });
                  foundAddress = this.addresses.find(function (address) {
                    return address.address === recipient.address;
                  });

                  if (foundContact) {
                    recipient.label = foundContact.label;
                    recipientType = RecipientType.CONTACT;
                  } else if (foundAddress) {
                    recipient.label = foundAddress.label;
                    recipientType = RecipientType.OWN_ADDRESS;
                  }
                }

                this.liveContactLabel = recipient.label || '';
                this.liveRecipient = _objectSpread({}, recipient, {
                  type: recipientType
                });
                this.addContactOpened = true;
                this.focus(true);

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function setRecipient(_x) {
        return _setRecipient.apply(this, arguments);
      };
    }()
  }, {
    key: "updateRecipient",
    value: function updateRecipient(address, label) {
      this.setRecipient({
        address: address,
        label: label
      });
    }
  }, {
    key: "proceedToSetAmount",
    value: function proceedToSetAmount() {
      if (this.liveContactLabel && this.liveContactLabel !== this.liveRecipient.label) {
        this.liveRecipient.label = this.liveContactLabel;
        this.$emit('contact-added', this.liveRecipient);
      }

      this.addContactOpened = false;

      if (this.liveSender) {
        this.focus(true);
      }
    }
  }, {
    key: "backFromAmount",
    value: function backFromAmount() {
      if (!this.recipient || !this.recipientIsReadonly) {
        this.liveRecipient = null;
        this.liveAddress = '';
      } else if (!this.sender && this.addressCount > 1) {
        this.liveSender = null;
      }

      this.contactsOpened = false;
    }
  }, {
    key: "backFromRecipient",
    value: function backFromRecipient() {
      if (!this.sender) this.liveSender = null;else this.$emit('back');
    }
  }, {
    key: "updateFeePreview",
    value: function updateFeePreview(fee) {
      this.feeLunaPerBytePreview = fee;
    }
  }, {
    key: "setFee",
    value: function setFee() {
      this.optionsOpened = false;
      this.feeLunaPerByte = this.$refs.feeSetter.value;
      this.liveAmountAndFee.fee = this.fee;
      this.focus(true);
    }
  }, {
    key: "setValue",
    value: function setValue(value) {
      if (!value) return;
      this.liveAmountAndFee.amount = value;
    }
  }, {
    key: "setMessage",
    value: function setMessage(message) {
      if (!message) return;
      this.liveExtraData = message;
    }
  }, {
    key: "setLabel",
    value: function () {
      var _setLabel = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(label) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this.liveContactLabel = label;

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function setLabel(_x2) {
        return _setLabel.apply(this, arguments);
      };
    }()
  }, {
    key: "closeDetails",
    value: function closeDetails() {
      this.displayedDetails = Details.NONE;
      this.focus(true);
    }
  }, {
    key: "closeOptions",
    value: function closeOptions() {
      this.optionsOpened = false;
      this.focus(true);
    }
  }, {
    key: "closeAddContact",
    value: function closeAddContact() {
      this.addContactOpened = false;
      this.liveRecipient = null;
      this.liveAddress = '';
      this.focus(true);
    }
  }, {
    key: "storeContactAndCloseOverlay",
    value: function storeContactAndCloseOverlay() {
      if (!this.liveContactLabel) {
        this.displayedDetails = Details.NONE;
        return;
      }

      this.liveRecipient.label = this.liveContactLabel;
      this.$emit('contact-added', this.liveRecipient);
      this.closeDetails();
    }
  }, {
    key: "sendTransaction",
    value: function sendTransaction() {
      // needs to be SendTransactionRequest
      this.$emit('send-tx', {
        sender: this.liveSender.address,
        recipient: this.liveRecipient.address,
        recipientType: 0,
        recipientLabel: this.liveRecipient.label,
        value: this.liveAmountAndFee.amount,
        fee: this.fee,
        extraData: this.liveExtraData,
        validityStartHeight: this.validityStartHeight
      });
    }
  }, {
    key: "data",
    value: function data() {
      return {
        FEE_OPTIONS: [{
          color: 'nq-light-blue-bg',
          value: 0,
          text: 'free',
          index: 0
        }, {
          color: 'nq-green-bg',
          value: 1,
          text: 'standard',
          index: 1
        }, {
          color: 'nq-gold-bg',
          value: 2,
          text: 'express',
          index: 2
        }],
        Details: Details,
        RecipientType: RecipientType
      };
    }
  }, {
    key: "computeFee",
    value: function computeFee(lunaPerByte) {
      if (this.liveExtraData) {
        return lunaPerByte * (166 + Utf8Tools.stringToUtf8ByteArray(this.liveExtraData).byteLength);
      }

      return lunaPerByte * 138;
    }
  }, {
    key: "login",
    value: function login() {}
  }, {
    key: "scanQr",
    value: function scanQr() {}
  }, {
    key: "createCashlink",
    value: function createCashlink(sender) {}
  }, {
    key: "addressCount",
    get: function get() {
      return this.wallet.accounts.size + this.wallet.contracts.length;
    }
  }, {
    key: "fee",
    get: function get() {
      return this.computeFee(this.feeLunaPerByte);
    }
  }, {
    key: "feePreview",
    get: function get() {
      return this.computeFee(this.feeLunaPerBytePreview);
    }
  }, {
    key: "buttonText",
    get: function get() {
      return !this.validityStartHeight ? 'Awaiting Consensus...' : this.isLoading ? 'Sending Transaction...' : 'Send Transaction';
    }
  }, {
    key: "addContactButtonText",
    get: function get() {
      return this.liveContactLabel !== this.liveRecipient.label ? 'Save & Set Amount' : 'Set Amount';
    }
  }, {
    key: "showButtonLoader",
    get: function get() {
      return !this.validityStartHeight || this.isLoading;
    }
  }, {
    key: "recipientValid",
    get: function get() {
      if (!this.liveSender || !this.liveRecipient) return false;
      var normalizedSender = this.liveSender.address.replace(/[\+ ]/g, '').toUpperCase();
      var normalizedRecipient = this.liveRecipient.address.replace(/[\+ ]/g, '').toUpperCase();
      return normalizedSender !== normalizedRecipient;
    }
  }, {
    key: "isValid",
    get: function get() {
      return this.recipientValid && this.liveAmountAndFee.isValid && this.validityStartHeight > 0;
    }
  }]);

  _inherits(SendTx, _Vue);

  return SendTx;
}(external_commonjs_vue_commonjs2_vue_root_Vue_default.a);

__decorate([Prop(Array)], SendTxvue_type_script_lang_ts_SendTx.prototype, "contacts", void 0);

__decorate([Prop(Array)], SendTxvue_type_script_lang_ts_SendTx.prototype, "addresses", void 0);

__decorate([Prop(Object)], SendTxvue_type_script_lang_ts_SendTx.prototype, "wallet", void 0);

__decorate([Prop(Object)], SendTxvue_type_script_lang_ts_SendTx.prototype, "sender", void 0);

__decorate([Prop(Object)], SendTxvue_type_script_lang_ts_SendTx.prototype, "recipient", void 0);

__decorate([Prop({
  type: Boolean,
  default: false
})], SendTxvue_type_script_lang_ts_SendTx.prototype, "recipientIsReadonly", void 0);

__decorate([Prop({
  type: Boolean,
  default: false
})], SendTxvue_type_script_lang_ts_SendTx.prototype, "isLoading", void 0);

__decorate([Prop({
  type: Number,
  default: 0
})], SendTxvue_type_script_lang_ts_SendTx.prototype, "value", void 0);

__decorate([Prop({
  type: String,
  default: ''
})], SendTxvue_type_script_lang_ts_SendTx.prototype, "message", void 0);

__decorate([Prop({
  type: Number,
  default: 0
})], SendTxvue_type_script_lang_ts_SendTx.prototype, "validityStartHeight", void 0);

__decorate([Watch('wallet', {
  immediate: true
})], SendTxvue_type_script_lang_ts_SendTx.prototype, "checkLiveSenderInWallet", null);

__decorate([Watch('sender', {
  immediate: true
})], SendTxvue_type_script_lang_ts_SendTx.prototype, "setSender", null);

__decorate([Watch('recipient', {
  immediate: true
})], SendTxvue_type_script_lang_ts_SendTx.prototype, "setRecipient", null);

__decorate([Watch('value', {
  immediate: true
})], SendTxvue_type_script_lang_ts_SendTx.prototype, "setValue", null);

__decorate([Watch('message', {
  immediate: true
})], SendTxvue_type_script_lang_ts_SendTx.prototype, "setMessage", null);

__decorate([Emit()], SendTxvue_type_script_lang_ts_SendTx.prototype, "login", null);

__decorate([Emit()], SendTxvue_type_script_lang_ts_SendTx.prototype, "scanQr", null);

__decorate([Emit()], SendTxvue_type_script_lang_ts_SendTx.prototype, "createCashlink", null);

SendTxvue_type_script_lang_ts_SendTx = __decorate([vue_class_component_common_default()({
  components: {
    SmallPage: components_SmallPage,
    PageHeader: components_PageHeader,
    PageBody: components_PageBody,
    PageFooter: components_PageFooter,
    Account: components_Account,
    AccountDetails: components_AccountDetails,
    AccountList: components_AccountList,
    AddressInput: components_AddressInput,
    Amount: components_Amount,
    AmountWithFee: components_AmountWithFee,
    ContactList: components_ContactList,
    ContactShortcuts: components_ContactShortcuts,
    LabelInput: components_LabelInput,
    ArrowRightIcon: ArrowRightIcon,
    ScanQrCodeIcon: ScanQrCodeIcon,
    SelectBar: components_SelectBar,
    CircleSpinner: components_CircleSpinner,
    SettingsIcon: SettingsIcon,
    CloseButton: components_CloseButton
  },
  filters: {
    listAccountsAndContracts: function listAccountsAndContracts(wallet) {
      return _toConsumableArray(wallet.accounts.values()).concat(_toConsumableArray(wallet.contracts));
    }
  }
})], SendTxvue_type_script_lang_ts_SendTx);
/* harmony default export */ var SendTxvue_type_script_lang_ts_ = (SendTxvue_type_script_lang_ts_SendTx);
// CONCATENATED MODULE: ./src/components/SendTx.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_SendTxvue_type_script_lang_ts_ = (SendTxvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./src/components/SendTx.vue?vue&type=style&index=0&id=4d9e8127&scoped=true&lang=css&
var SendTxvue_type_style_index_0_id_4d9e8127_scoped_true_lang_css_ = __webpack_require__("0448");

// CONCATENATED MODULE: ./src/components/SendTx.vue






/* normalize component */

var SendTx_component = normalizeComponent(
  components_SendTxvue_type_script_lang_ts_,
  SendTxvue_type_template_id_4d9e8127_scoped_true_render,
  SendTxvue_type_template_id_4d9e8127_scoped_true_staticRenderFns,
  false,
  null,
  "4d9e8127",
  null
  
)

SendTx_component.options.__file = "SendTx.vue"
/* harmony default export */ var components_SendTx = (SendTx_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"6ce9ed87-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/WalletMenu.vue?vue&type=template&id=b4639cc0&scoped=true&
var WalletMenuvue_type_template_id_b4639cc0_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"wallet-menu"},[_c('WalletList',_vm._g({attrs:{"wallets":_vm.wallets,"activeWalletId":_vm.activeWalletId}},_vm.$listeners)),_c('div',{staticClass:"menu-footer"},[_c('button',{staticClass:"nq-button-s settings",on:{"click":function($event){return _vm.$emit('settings')}}},[_c('GearIcon'),_c('span',[_vm._v("Settings")])],1),_c('button',{staticClass:"nq-button-s add-account",on:{"click":function($event){return _vm.$emit('add-account')}}},[_vm._v("Add Account")])])],1)}
var WalletMenuvue_type_template_id_b4639cc0_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/WalletMenu.vue?vue&type=template&id=b4639cc0&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"6ce9ed87-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/WalletList.vue?vue&type=template&id=d167a5a6&scoped=true&
var WalletListvue_type_template_id_d167a5a6_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"wallet-list"},_vm._l((_vm.wallets),function(wallet){return _c('button',{key:wallet.id,staticClass:"wallet-entry",class:{active: wallet.id === _vm.activeWalletId},on:{"click":function($event){return _vm.walletSelected(wallet.id)}}},[_c('Wallet',_vm._g({attrs:{"wallet":wallet}},_vm.$listeners))],1)}),0)}
var WalletListvue_type_template_id_d167a5a6_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/WalletList.vue?vue&type=template&id=d167a5a6&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"6ce9ed87-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Wallet.vue?vue&type=template&id=d2266d0a&scoped=true&
var Walletvue_type_template_id_d2266d0a_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"wallet"},[(_vm.isMultiAddress)?_c('AccountRing',{attrs:{"addresses":_vm.addresses}}):_c('Identicon',{attrs:{"address":_vm.addresses[0]}}),_c('div',{staticClass:"wallet-description"},[_c('div',{staticClass:"label"},[_vm._v(_vm._s(_vm.wallet.label))]),_c('div',{staticClass:"amount-container",class:{'nq-orange': _vm.exportMissing}},[(_vm.exportMissing)?_c('AlertTriangleIcon'):_vm._e(),(_vm.wallet.balance !== undefined)?_c('Amount',{attrs:{"amount":_vm.wallet.balance,"decimals":0}}):_vm._e()],1)]),_c('button',{staticClass:"menu-toggle",attrs:{"onclick":"this.focus()"},on:{"click":function($event){$event.stopPropagation();}}},[_c('MenuDotsIcon'),_c('div',{staticClass:"menu nq-blue-bg"},[(_vm.isBip39)?_c('button',{staticClass:"item export",on:{"click":function($event){return _vm.$emit('export-file', _vm.wallet.id)}}},[_vm._v("\n                Save Login File"),(_vm.fileMissing)?_c('AlertTriangleIcon',{staticClass:"nq-orange"}):_vm._e()],1):_vm._e(),(_vm.isKeyguard)?_c('button',{staticClass:"item export",on:{"click":function($event){return _vm.$emit('export-words', _vm.wallet.id)}}},[_vm._v("\n                Create Backup"),(_vm.wordsMissing)?_c('AlertTriangleIcon',{staticClass:"nq-orange"}):_vm._e()],1):_vm._e(),_c('button',{staticClass:"item",on:{"click":function($event){return _vm.$emit('rename', _vm.wallet.id)}}},[_vm._v("Rename")]),(_vm.isKeyguard)?_c('button',{staticClass:"item",on:{"click":function($event){return _vm.$emit('change-password', _vm.wallet.id)}}},[_vm._v("Change Password")]):_vm._e(),_c('div',{staticClass:"separator"}),_c('button',{staticClass:"item logout",on:{"click":function($event){return _vm.$emit('logout', _vm.wallet.id)}}},[_c('ArrowRightSmallIcon'),_vm._v("Logout")],1)])],1)],1)}
var Walletvue_type_template_id_d2266d0a_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Wallet.vue?vue&type=template&id=d2266d0a&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"6ce9ed87-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/AccountRing.vue?vue&type=template&id=693b8320&scoped=true&
var AccountRingvue_type_template_id_693b8320_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"account-ring"},_vm._l((6),function(n){return _c('div',{key:n,staticClass:"account"},[_c('Identicon',{class:{ 'pop-in': _vm.animate && _vm.addresses.length >= n },attrs:{"address":_vm.addresses[n - 1]}})],1)}),0)}
var AccountRingvue_type_template_id_693b8320_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/AccountRing.vue?vue&type=template&id=693b8320&scoped=true&

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
    Identicon: components_Identicon
  }
})], AccountRingvue_type_script_lang_ts_AccountRing);
/* harmony default export */ var AccountRingvue_type_script_lang_ts_ = (AccountRingvue_type_script_lang_ts_AccountRing);
// CONCATENATED MODULE: ./src/components/AccountRing.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_AccountRingvue_type_script_lang_ts_ = (AccountRingvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./src/components/AccountRing.vue?vue&type=style&index=0&id=693b8320&scoped=true&lang=css&
var AccountRingvue_type_style_index_0_id_693b8320_scoped_true_lang_css_ = __webpack_require__("bc12");

// CONCATENATED MODULE: ./src/components/AccountRing.vue






/* normalize component */

var AccountRing_component = normalizeComponent(
  components_AccountRingvue_type_script_lang_ts_,
  AccountRingvue_type_template_id_693b8320_scoped_true_render,
  AccountRingvue_type_template_id_693b8320_scoped_true_staticRenderFns,
  false,
  null,
  "693b8320",
  null
  
)

AccountRing_component.options.__file = "AccountRing.vue"
/* harmony default export */ var components_AccountRing = (AccountRing_component.exports);
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
    key: "isLegacy",
    get: function get() {
      return this.wallet.type === 1
      /* LEGACY */
      ;
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
    key: "isKeyguard",
    get: function get() {
      return this.isLegacy || this.isBip39;
    }
  }, {
    key: "isMultiAddress",
    get: function get() {
      return this.isBip39 || this.isLedger;
    }
  }, {
    key: "fileMissing",
    get: function get() {
      return this.isBip39 && !this.wallet.fileExported;
    }
  }, {
    key: "wordsMissing",
    get: function get() {
      return (this.isBip39 || this.isLegacy) && !this.wallet.wordsExported;
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
    Identicon: components_Identicon,
    AlertTriangleIcon: AlertTriangleIcon,
    MenuDotsIcon: MenuDotsIcon,
    ArrowRightSmallIcon: ArrowRightSmallIcon
  }
})], Walletvue_type_script_lang_ts_Wallet);
/* harmony default export */ var Walletvue_type_script_lang_ts_ = (Walletvue_type_script_lang_ts_Wallet);
// CONCATENATED MODULE: ./src/components/Wallet.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_Walletvue_type_script_lang_ts_ = (Walletvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./src/components/Wallet.vue?vue&type=style&index=0&id=d2266d0a&scoped=true&lang=css&
var Walletvue_type_style_index_0_id_d2266d0a_scoped_true_lang_css_ = __webpack_require__("501b");

// CONCATENATED MODULE: ./src/components/Wallet.vue






/* normalize component */

var Wallet_component = normalizeComponent(
  components_Walletvue_type_script_lang_ts_,
  Walletvue_type_template_id_d2266d0a_scoped_true_render,
  Walletvue_type_template_id_d2266d0a_scoped_true_staticRenderFns,
  false,
  null,
  "d2266d0a",
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
// EXTERNAL MODULE: ./src/components/WalletList.vue?vue&type=style&index=0&id=d167a5a6&scoped=true&lang=css&
var WalletListvue_type_style_index_0_id_d167a5a6_scoped_true_lang_css_ = __webpack_require__("a441");

// CONCATENATED MODULE: ./src/components/WalletList.vue






/* normalize component */

var WalletList_component = normalizeComponent(
  components_WalletListvue_type_script_lang_ts_,
  WalletListvue_type_template_id_d167a5a6_scoped_true_render,
  WalletListvue_type_template_id_d167a5a6_scoped_true_staticRenderFns,
  false,
  null,
  "d167a5a6",
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
// EXTERNAL MODULE: ./src/components/WalletMenu.vue?vue&type=style&index=0&id=b4639cc0&scoped=true&lang=css&
var WalletMenuvue_type_style_index_0_id_b4639cc0_scoped_true_lang_css_ = __webpack_require__("37de");

// CONCATENATED MODULE: ./src/components/WalletMenu.vue






/* normalize component */

var WalletMenu_component = normalizeComponent(
  components_WalletMenuvue_type_script_lang_ts_,
  WalletMenuvue_type_template_id_b4639cc0_scoped_true_render,
  WalletMenuvue_type_template_id_b4639cc0_scoped_true_staticRenderFns,
  false,
  null,
  "b4639cc0",
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
 // export { default as Address } from './components/Address.vue';
// export { default as AddressDisplay } from './components/AddressDisplay.vue';
// export { default as AddressInput } from './components/AddressInput.vue';
// export { default as Amount } from './components/Amount.vue';
// export { default as AmountInput } from './components/AmountInput.vue';
// export { default as CircleSpinner } from './components/CircleSpinner.vue';
// export { default as CloseButton } from './components/CloseButton.vue';
// export { default as Contact } from './components/Contact.vue';

 // export { default as Copyable } from './components/Copyable.vue';
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
/* concated harmony reexport AccountSelector */__webpack_require__.d(__webpack_exports__, "AccountSelector", function() { return components_AccountSelector; });
/* concated harmony reexport ContactList */__webpack_require__.d(__webpack_exports__, "ContactList", function() { return components_ContactList; });
/* concated harmony reexport MigrationWelcome */__webpack_require__.d(__webpack_exports__, "MigrationWelcome", function() { return components_MigrationWelcome; });
/* concated harmony reexport QrCode */__webpack_require__.d(__webpack_exports__, "QrCode", function() { return components_QrCode; });
/* concated harmony reexport QrScanner */__webpack_require__.d(__webpack_exports__, "QrScanner", function() { return components_QrScanner; });
/* concated harmony reexport SendTx */__webpack_require__.d(__webpack_exports__, "SendTx", function() { return components_SendTx; });
/* concated harmony reexport WalletMenu */__webpack_require__.d(__webpack_exports__, "WalletMenu", function() { return components_WalletMenu; });
/* concated harmony reexport AlertTriangleIcon */__webpack_require__.d(__webpack_exports__, "AlertTriangleIcon", function() { return AlertTriangleIcon; });
/* concated harmony reexport ArrowLeftIcon */__webpack_require__.d(__webpack_exports__, "ArrowLeftIcon", function() { return ArrowLeftIcon; });
/* concated harmony reexport ArrowRightSmallIcon */__webpack_require__.d(__webpack_exports__, "ArrowRightSmallIcon", function() { return ArrowRightSmallIcon; });
/* concated harmony reexport ArrowRightIcon */__webpack_require__.d(__webpack_exports__, "ArrowRightIcon", function() { return ArrowRightIcon; });
/* concated harmony reexport CaretRightSmallIcon */__webpack_require__.d(__webpack_exports__, "CaretRightSmallIcon", function() { return CaretRightSmallIcon; });
/* concated harmony reexport CloseIcon */__webpack_require__.d(__webpack_exports__, "CloseIcon", function() { return CloseIcon; });
/* concated harmony reexport ContactsIcon */__webpack_require__.d(__webpack_exports__, "ContactsIcon", function() { return ContactsIcon; });
/* concated harmony reexport GearIcon */__webpack_require__.d(__webpack_exports__, "GearIcon", function() { return GearIcon; });
/* concated harmony reexport HexagonIcon */__webpack_require__.d(__webpack_exports__, "HexagonIcon", function() { return HexagonIcon; });
/* concated harmony reexport InfoCircleIcon */__webpack_require__.d(__webpack_exports__, "InfoCircleIcon", function() { return InfoCircleIcon; });
/* concated harmony reexport MenuDotsIcon */__webpack_require__.d(__webpack_exports__, "MenuDotsIcon", function() { return MenuDotsIcon; });
/* concated harmony reexport QrCodeIcon */__webpack_require__.d(__webpack_exports__, "QrCodeIcon", function() { return QrCodeIcon; });
/* concated harmony reexport ScanQrCodeIcon */__webpack_require__.d(__webpack_exports__, "ScanQrCodeIcon", function() { return ScanQrCodeIcon; });
/* concated harmony reexport SettingsIcon */__webpack_require__.d(__webpack_exports__, "SettingsIcon", function() { return SettingsIcon; });




/***/ }),

/***/ "fb33":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "fdef":
/***/ (function(module, exports) {

module.exports = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ })

/******/ });
//# sourceMappingURL=NimiqVueComponents.common.js.map