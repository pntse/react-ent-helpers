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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Compare__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Compare", function() { return _Compare__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _deepCopy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deepCopy", function() { return _deepCopy__WEBPACK_IMPORTED_MODULE_1__["deepCopy"]; });

/* harmony import */ var _formatPhoneNumber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatPhoneNumber", function() { return _formatPhoneNumber__WEBPACK_IMPORTED_MODULE_2__["formatPhoneNumber"]; });

/* harmony import */ var _getValue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getValue", function() { return _getValue__WEBPACK_IMPORTED_MODULE_3__["getValue"]; });

/* harmony import */ var _hasValue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hasValue", function() { return _hasValue__WEBPACK_IMPORTED_MODULE_4__["hasValue"]; });

/* harmony import */ var _makeCamelCaseNormal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "makeCamelCaseNormal", function() { return _makeCamelCaseNormal__WEBPACK_IMPORTED_MODULE_5__["makeCamelCaseNormal"]; });

/* harmony import */ var _objectIndexOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "objectIndexOf", function() { return _objectIndexOf__WEBPACK_IMPORTED_MODULE_6__["objectIndexOf"]; });

/* harmony import */ var _removeDuplicates__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeDuplicates", function() { return _removeDuplicates__WEBPACK_IMPORTED_MODULE_7__["removeDuplicates"]; });

/* harmony import */ var _removeNonNumericChars__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeNonNumericChars", function() { return _removeNonNumericChars__WEBPACK_IMPORTED_MODULE_8__["removeNonNumericChars"]; });

/* harmony import */ var _uuid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(10);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "uuid", function() { return _uuid__WEBPACK_IMPORTED_MODULE_9__["uuid"]; });













/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _deepCopy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 // TODO: Refactor. Should not use arrow functions in class.

var Compare =
/*#__PURE__*/
function () {
  function Compare() {
    var _this = this;

    _classCallCheck(this, Compare);

    _defineProperty(this, "deepCompare", function (a, b) {
      var strictEquality = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var _resetLog = _this._resetLog,
          _incrementDepth = _this._incrementDepth,
          _pass = _this._pass,
          _fail = _this._fail;
      /* #region  Reset log if necessary */

      _resetLog();
      /* #endregion */

      /* #region  Track recursion depth */


      _incrementDepth();
      /* #endregion */

      /* #region  Undefined */


      if (a === undefined && b === undefined) {
        // both values are undefined, so pass
        return _pass();
      } else if (a === undefined || b === undefined) {
        return _fail(a, b, 'One of the values is undefined');
      }
      /* #endregion */

      /* #region  Nulls */


      if (a === null && b === null) {
        // both values are null, so pass
        return _pass();
      } else if (a === null || b === null) {
        // only one value is null
        return _fail(a, b, 'One of the values is null');
      }
      /* #endregion */

      /* #region  Function comparison */


      if (typeof a === 'function' && typeof b === 'function') {
        var isEqual = a.toString() === b.toString();

        if (!isEqual) {
          return _fail(a, b, 'Functions are not equal');
        }

        return _pass();
      } else if (typeof a === 'function' || typeof b === 'function') {
        return _fail(a, b, 'The values are not the same type');
      }
      /* #endregion */

      /* #region  Neither values are objects */


      if (_typeof(a) !== 'object' && _typeof(b) !== 'object') {
        // Values are not objects so do a simple comparison without type checking
        // unless strictEquality is true.
        var _isEqual = a == b;

        var isStrictEqual = a === b;

        if (strictEquality && !isStrictEqual) {
          var msg = _isEqual ? 'The values are different types' : 'The values are not equal';
          return _fail(a, b, msg);
        } else if (!_isEqual) {
          return _fail(a, b, 'The values are not equal');
        }

        return _pass();
      } else if (_typeof(a) !== 'object' || _typeof(b) !== 'object') {
        return _fail(a, b, 'The values are different types');
      }
      /* #endregion */

      /* #region  values are objects so we should deepCopy before going further */


      a = Object(_deepCopy__WEBPACK_IMPORTED_MODULE_0__["deepCopy"])(a);
      b = Object(_deepCopy__WEBPACK_IMPORTED_MODULE_0__["deepCopy"])(b);
      /* #endregion */

      /* #region  Verify the objects have the same prototype chains */

      if (a.constructor !== b.constructor) {
        return _fail(a, b, 'The objects have different proptype chains');
      }
      /* #endregion */

      /* #region  Date comparison */


      if (a instanceof Date && b instanceof Date) {
        // compare dates
        var _isEqual2 = new Date(a.getTime()).toString() === new Date(b.getTime()).toString();

        if (!_isEqual2) {
          return _fail(a, b, 'The dates are not equal');
        }

        return _pass();
      } else if (a instanceof Date || b instanceof Date) {
        // only one value is a Date
        return _fail(a, b, 'The values are not the same type');
      }
      /* #endregion */

      /* #region  Array comparison */


      if (a instanceof Array && b instanceof Array) {
        // Check array lengths. If not of equal length, then return false.
        if (a.length !== b.length) {
          return _fail(a, b, 'The arrays are different lengths');
        }

        for (var aI = a.length - 1; aI >= 0; --aI) {
          /* #region  What's going on here... */
          // Iterate through the first array, getting the value at each index.
          // Find that value in the other array.
          // If it's an object, need to search for that object,
          // iterate through the second array doing a deepCompare.
          // Splice from first array. if match is found in second array,
          // then splice from that array.
          // After the first array has been iterated over,
          // do a comparison of the array lengths to determine if the arrays are equal.

          /* #endregion */
          var x = a[aI];

          if (_typeof(x) === 'object') {
            _this.depthTracking.path.push("[".concat(aI, "]"));

            for (var bI = b.length - 1; bI >= 0; --bI) {
              var _isEqual3 = _this.deepCompare(x, b[bI], strictEquality).isEqual;

              if (_isEqual3) {
                b.splice(bI, 1);
                break;
              }
            }

            a.splice(aI, 1);

            if (a.length !== b.length) {
              return _fail(a, b, 'The arrays contain different values');
            } else {
              _this.depthTracking.path.splice(_this.depthTracking.path.length - 1, 1);
            }
          } else if (typeof x === 'function') {
            for (var _bI = b.length - 1; _bI >= 0; --_bI) {
              var _isEqual4 = x.toString() === b[_bI].toString();

              if (_isEqual4) {
                b.splice(_bI, 1);
                break;
              }
            }

            a.splice(aI, 1);
          } else if (strictEquality) {
            // Search for that value in the other array and get the index.
            var _bI2 = b.indexOf(x);

            if (_bI2 === -1) {
              // Value didn't exist. Exit comparison.
              return _fail(a, b, 'Value in first array did not exist in second array');
            } else {
              // Value exists. Remove both values from arrays.
              a.splice(aI, 1);
              b.splice(_bI2, 1);
            }
          } else {
            for (var _bI3 = b.length - 1; _bI3 >= 0; --_bI3) {
              var _isEqual5 = x == b[_bI3];

              if (_isEqual5) {
                // Remove value from b if there is a match.
                b.splice(_bI3, 1);
                break;
              }
            } // Remove value from a regardless of match.


            a.splice(aI, 1);
          }
        } // After first array is empty, check against length of second array.
        // if lengths are not equal, then arrays are not equal.


        if (a.length !== b.length) {
          return _fail(a, b, 'Value in second array did not exist in first array');
        } // Arrays were the same length.


        return _pass();
      } else if (a instanceof Array || b instanceof Array) {
        // Values are different types. Exit comparison.
        return _fail(a, b, 'The values are not the same type');
      }
      /* #endregion */

      /* #region  Object comparison */


      if (a instanceof Object && b instanceof Object) {
        // First check for an equal number of properties.
        if (Object.keys(a).length !== Object.keys(b).length) {
          return _fail(a, b, 'The objects have different properties');
        }

        for (var propertyName in a) {
          /* #region  What's going on here... */
          // Need to type check these.
          // If the property is an object then call deepCompare
          // to break down the object a little further.
          // If not an object, handle function and primitive comparisons right here.

          /* #endregion */
          if (_typeof(a[propertyName]) === 'object' && _typeof(b[propertyName]) === 'object') {
            _this.depthTracking.path.push(propertyName);

            var _isEqual6 = _this.deepCompare(a[propertyName], b[propertyName], strictEquality).isEqual;

            if (!_isEqual6) {
              return _fail(a, b, "The objects' properties have different values");
            } else {
              _this.depthTracking.path.splice(_this.depthTracking.path.length - 1, 1);
            }
          } else if (_typeof(a[propertyName]) === 'object' || _typeof(b[propertyName]) === 'object') {
            return _fail(a, b, 'Only one of the properties is an object');
          } else if (typeof a[propertyName] === 'function' && typeof b[propertyName] === 'function') {
            if (a[propertyName].toString() !== b[propertyName].toString()) {
              return _fail(a, b, 'The functions are different');
            }
          } else if (typeof a[propertyName] === 'function' || typeof b[propertyName] === 'function') {
            return _fail(a, b, 'Only one of the values is a function');
          } else if (strictEquality && a[propertyName] !== b[propertyName]) {
            var _msg = a[propertyName] == b[propertyName] ? 'The values are different types' : 'The values are not equal';

            return _fail(a, b, _msg);
          } else if (a[propertyName] != b[propertyName]) {
            return _fail(a, b, 'The values are not equal');
          }
        }

        return _pass();
      } else if (a instanceof Object || b instanceof Object) {
        // Values are different types.
        return _fail(a, b, 'Only one of the values is an object');
      }
      /* #endregion */

    });

    _defineProperty(this, "consoleLog", function () {
      var shouldLog = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      if (shouldLog && typeof _this.log.message !== 'undefined') {
        console.log("######## %cdeepCompare inequality found! ".concat(_this.log.message, ": %c").concat(_this.log.path, " %c").concat(JSON.stringify(_this.log.a), "%c, %c").concat(JSON.stringify(_this.log.b), "%c"), _this.standardStyles, _this.pathStyles, _this.errorStyles, _this.standardStyles, _this.errorStyles, _this.standardStyles);
      }

      return _this;
    });

    _defineProperty(this, "assert", function (assertTrue) {
      if (assertTrue && _this.value !== assertTrue) {
        console.error("######## %cdeepCompare inequality found! ".concat(_this.log.message, ": %c").concat(_this.log.path, " %c").concat(JSON.stringify(_this.log.a), "%c, %c").concat(JSON.stringify(_this.log.b), "%c"), _this.standardStyles, _this.pathStyles, _this.errorStyles, _this.standardStyles, _this.errorStyles, _this.standardStyles);
      } else if (!assertTrue && _this.value !== assertTrue) {
        console.error("######## deepCompare error! The values are equal but expected inequality.");
      }

      return _this;
    });

    _defineProperty(this, "attachLogger", function (clientLogger) {
      var enableLogger = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      if (typeof clientLogger === 'function' && typeof _this.clientLogger === 'undefined' && enableLogger && typeof _this.log.message !== 'undefined') {
        clientLogger("######## deepCompare inequality found! ".concat(_this.log.message, ": ").concat(_this.log.path, " ").concat(JSON.stringify(_this.log.a), ", ").concat(JSON.stringify(_this.log.b)));
      }

      return _this;
    });

    _defineProperty(this, "_fail", function (a, b, message) {
      _this._logOutput(a, b, message);

      _this._decrementDepth();

      _this.value = false;
      return _this;
    });

    _defineProperty(this, "_pass", function () {
      _this._decrementDepth();

      _this.value = true;
      return _this;
    });

    _defineProperty(this, "_logOutput", function (a, b, message) {
      // Only capture the first error, not the errors further up.
      if (typeof _this.log.message === 'undefined') {
        var path = '';

        if (_this.depthTracking.path.length > 0) {
          path = "obj.".concat(_this.depthTracking.path.join('.'));
          path = path.replace(/(?:\.\[)/g, '[');
        }

        _this.log.message = message;
        _this.log.a = a;
        _this.log.b = b;
        _this.log.path = path;
      }
    });

    _defineProperty(this, "_incrementDepth", function () {
      if (typeof _this.depthTracking.depth === 'undefined') {
        _this.depthTracking.depth = 0;
        _this.depthTracking.path = [];
      } else {
        _this.depthTracking.depth++;
      }
    });

    _defineProperty(this, "_decrementDepth", function () {
      if (typeof _this.depthTracking.depth !== 'undefined' && _this.depthTracking.depth > 0) {
        _this.depthTracking.depth--;
      }
    });

    _defineProperty(this, "_resetLog", function () {
      if (typeof _this.depthTracking.depth === 'undefined' || _this.depthTracking.depth === 0) {
        _this.log = {};
      }
    });

    this.value = null;
    this.depthTracking = {};
    this.log = {};
    this.errorStyles = 'color:red;';
    this.standardStyles = 'color:black;';
    this.pathStyles = 'font-style:italic;color:blue;';
  }
  /**
   * Must be called at the end of the chain to return the result of the comparison.
   */


  _createClass(Compare, [{
    key: "isEqual",
    get: function get() {
      return this.value;
    }
    /**
     * Set strictEquality to false to coerce conversion if values are different types. Defaults to true.
     *
     * @param {*} a
     * @param {*} b
     * @param {boolean} strictEquality
     */

    /* #endregion */

  }]);

  return Compare;
}();

/* harmony default export */ __webpack_exports__["default"] = (new Compare());

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deepCopy", function() { return deepCopy; });
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var deepCopy = function deepCopy(obj) {
  if (_typeof(obj) !== 'object' || obj === null) {
    return obj;
  }

  if (obj instanceof Date) {
    return new Date(obj.getTime());
  }

  if (obj instanceof Array) {
    return obj.reduce(function (arr, item, i) {
      arr[i] = deepCopy(item);
      return arr;
    }, []);
  }

  if (obj instanceof Object) {
    return Object.keys(obj).reduce(function (newObj, key) {
      newObj[key] = deepCopy(obj[key]);
      return newObj;
    }, {});
  }
};

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatPhoneNumber", function() { return formatPhoneNumber; });
/* harmony import */ var _removeNonNumericChars__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);

var formatPhoneNumber = function formatPhoneNumber(phoneNumber) {
  phoneNumber = typeof phoneNumber === 'number' ? phoneNumber.toString() : phoneNumber;

  if (phoneNumber.length < 10) {
    console.warn('phone-number needs to be at least 10 digits long');
    return;
  }

  var strippedNumber = Object(_removeNonNumericChars__WEBPACK_IMPORTED_MODULE_0__["removeNonNumericChars"])(phoneNumber);
  return "(".concat(strippedNumber.slice(0, 3), ") ").concat(strippedNumber.slice(3, 6), "-").concat(strippedNumber.slice(6, 10));
};

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeNonNumericChars", function() { return removeNonNumericChars; });
var removeNonNumericChars = function removeNonNumericChars(value) {
  return value.replace(/\D/g, '');
};

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getValue", function() { return getValue; });
var getValue = function getValue(obj, path, defaultValue) {
  return path.split('.').reduce(function (a, c) {
    return a != null && typeof a != 'undefined' && a[c] != null && typeof a[c] != 'undefined' ? a[c] : defaultValue != null ? defaultValue : null;
  }, obj);
};

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasValue", function() { return hasValue; });
/* harmony import */ var _getValue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);

var hasValue = function hasValue(obj, path) {
  var value = Object(_getValue__WEBPACK_IMPORTED_MODULE_0__["getValue"])(obj, path);
  return value == null ? false : true;
};

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeCamelCaseNormal", function() { return makeCamelCaseNormal; });
var makeCamelCaseNormal = function makeCamelCaseNormal(value) {
  return value.replace(/([A-Z])/g, ' $1').replace(/^./, function (str) {
    return str.toUpperCase();
  });
};

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "objectIndexOf", function() { return objectIndexOf; });
/* harmony import */ var _Compare__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);

/**
 * Returns an object's index in an array of objects.
 *
 * @param {array} arr
 * @param {object} obj
 */

var objectIndexOf = function objectIndexOf(arr, obj) {
  for (var i = 0; i < arr.length; i++) {
    if (_Compare__WEBPACK_IMPORTED_MODULE_0__["default"].deepCompare(arr[i], obj).isEqual) {
      return i;
    }
  }

  return -1;
};

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeDuplicates", function() { return removeDuplicates; });
/* harmony import */ var _objectIndexOf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);

var removeDuplicates = function removeDuplicates(arr) {
  var newArr = [];

  for (var i = 0; i < arr.length; i++) {
    var index = Object(_objectIndexOf__WEBPACK_IMPORTED_MODULE_0__["objectIndexOf"])(newArr, arr[i]);

    if (index === -1) {
      newArr.push(arr[i]);
    }
  }

  return newArr;
};

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uuid", function() { return uuid; });
var uuid = function uuid() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = Math.random() * 16 | 0,
        v = c == 'x' ? r : r & 0x3 | 0x8;
    return v.toString(16);
  });
};

/***/ })
/******/ ]);