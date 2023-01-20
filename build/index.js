/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _deepCopy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);

// TODO: Refactor. Should not use arrow functions in class.
var Compare = /** @class */ (function () {
    function Compare() {
        var _this = this;
        /**
         * Set strictEquality to false to coerce conversion if values are different types. Defaults to true.
         *
         * @param {*} a
         * @param {*} b
         * @param {boolean} strictEquality
         */
        this.deepCompare = function (a, b, strictEquality) {
            if (strictEquality === void 0) { strictEquality = true; }
            var _a = _this, _resetLog = _a._resetLog, _incrementDepth = _a._incrementDepth, _pass = _a._pass, _fail = _a._fail;
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
            }
            else if (a === undefined || b === undefined) {
                return _fail(a, b, 'One of the values is undefined');
            }
            /* #endregion */
            /* #region  Nulls */
            if (a === null && b === null) {
                // both values are null, so pass
                return _pass();
            }
            else if (a === null || b === null) {
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
            }
            else if (typeof a === 'function' || typeof b === 'function') {
                return _fail(a, b, 'The values are not the same type');
            }
            /* #endregion */
            /* #region  Neither values are objects */
            if (typeof a !== 'object' && typeof b !== 'object') {
                // Values are not objects so do a simple comparison without type checking
                // unless strictEquality is true.
                var isEqual = a == b;
                var isStrictEqual = a === b;
                if (strictEquality && !isStrictEqual) {
                    var msg = isEqual
                        ? 'The values are different types'
                        : 'The values are not equal';
                    return _fail(a, b, msg);
                }
                else if (!isEqual) {
                    return _fail(a, b, 'The values are not equal');
                }
                return _pass();
            }
            else if (typeof a !== 'object' || typeof b !== 'object') {
                return _fail(a, b, 'The values are different types');
            }
            /* #endregion */
            /* #region  values are objects so we should deepCopy before going further */
            a = (0,_deepCopy__WEBPACK_IMPORTED_MODULE_0__.deepCopy)(a);
            b = (0,_deepCopy__WEBPACK_IMPORTED_MODULE_0__.deepCopy)(b);
            /* #endregion */
            /* #region  Verify the objects have the same prototype chains */
            if (a.constructor !== b.constructor) {
                return _fail(a, b, 'The objects have different proptype chains');
            }
            /* #endregion */
            /* #region  Date comparison */
            if (a instanceof Date && b instanceof Date) {
                // compare dates
                var isEqual = new Date(a.getTime()).toString() === new Date(b.getTime()).toString();
                if (!isEqual) {
                    return _fail(a, b, 'The dates are not equal');
                }
                return _pass();
            }
            else if (a instanceof Date || b instanceof Date) {
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
                    if (typeof x === 'object') {
                        _this.depthTracking.path.push("[".concat(aI, "]"));
                        for (var bI = b.length - 1; bI >= 0; --bI) {
                            var isEqual = _this.deepCompare(x, b[bI], strictEquality).isEqual;
                            if (isEqual) {
                                b.splice(bI, 1);
                                break;
                            }
                        }
                        a.splice(aI, 1);
                        if (a.length !== b.length) {
                            return _fail(a, b, 'The arrays contain different values');
                        }
                        else {
                            _this.depthTracking.path.splice(_this.depthTracking.path.length - 1, 1);
                        }
                    }
                    else if (typeof x === 'function') {
                        for (var bI = b.length - 1; bI >= 0; --bI) {
                            var isEqual = x.toString() === b[bI].toString();
                            if (isEqual) {
                                b.splice(bI, 1);
                                break;
                            }
                        }
                        a.splice(aI, 1);
                    }
                    else if (strictEquality) {
                        // Search for that value in the other array and get the index.
                        var bI = b.indexOf(x);
                        if (bI === -1) {
                            // Value didn't exist. Exit comparison.
                            return _fail(a, b, 'Value in first array did not exist in second array');
                        }
                        else {
                            // Value exists. Remove both values from arrays.
                            a.splice(aI, 1);
                            b.splice(bI, 1);
                        }
                    }
                    else {
                        for (var bI = b.length - 1; bI >= 0; --bI) {
                            var isEqual = x == b[bI];
                            if (isEqual) {
                                // Remove value from b if there is a match.
                                b.splice(bI, 1);
                                break;
                            }
                        }
                        // Remove value from a regardless of match.
                        a.splice(aI, 1);
                    }
                }
                // After first array is empty, check against length of second array.
                // if lengths are not equal, then arrays are not equal.
                if (a.length !== b.length) {
                    return _fail(a, b, 'Value in second array did not exist in first array');
                }
                // Arrays were the same length.
                return _pass();
            }
            else if (a instanceof Array || b instanceof Array) {
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
                    if (typeof a[propertyName] === 'object' &&
                        typeof b[propertyName] === 'object') {
                        _this.depthTracking.path.push(propertyName);
                        var isEqual = _this.deepCompare(a[propertyName], b[propertyName], strictEquality).isEqual;
                        if (!isEqual) {
                            return _fail(a, b, "The objects' properties have different values");
                        }
                        else {
                            _this.depthTracking.path.splice(_this.depthTracking.path.length - 1, 1);
                        }
                    }
                    else if (typeof a[propertyName] === 'object' ||
                        typeof b[propertyName] === 'object') {
                        return _fail(a, b, 'Only one of the properties is an object');
                    }
                    else if (typeof a[propertyName] === 'function' &&
                        typeof b[propertyName] === 'function') {
                        if (a[propertyName].toString() !== b[propertyName].toString()) {
                            return _fail(a, b, 'The functions are different');
                        }
                    }
                    else if (typeof a[propertyName] === 'function' ||
                        typeof b[propertyName] === 'function') {
                        return _fail(a, b, 'Only one of the values is a function');
                    }
                    else if (strictEquality && a[propertyName] !== b[propertyName]) {
                        var msg = a[propertyName] == b[propertyName]
                            ? 'The values are different types'
                            : 'The values are not equal';
                        return _fail(a, b, msg);
                    }
                    else if (a[propertyName] != b[propertyName]) {
                        return _fail(a, b, 'The values are not equal');
                    }
                }
                return _pass();
            }
            else if (a instanceof Object || b instanceof Object) {
                // Values are different types.
                return _fail(a, b, 'Only one of the values is an object');
            }
            /* #endregion */
        };
        /**
         * Will log details to the console if an inequality is found.
         *
         * @param {boolean} shouldLog
         */
        this.consoleLog = function (shouldLog) {
            if (shouldLog === void 0) { shouldLog = true; }
            if (shouldLog && typeof _this.log.message !== 'undefined') {
                console.log("######## %cdeepCompare inequality found! ".concat(_this.log.message, ": %c").concat(_this.log.path, " %c").concat(JSON.stringify(_this.log.a), "%c, %c").concat(JSON.stringify(_this.log.b), "%c"), _this.standardStyles, _this.pathStyles, _this.errorStyles, _this.standardStyles, _this.errorStyles, _this.standardStyles);
            }
            return _this;
        };
        /**
         * Will log details of comparison as a console error if result doesn't match the assertTrue boolean.
         *
         * @param {boolean} assertTrue
         */
        this.assert = function (assertTrue) {
            if (assertTrue && _this.value !== assertTrue) {
                console.error("######## %cdeepCompare inequality found! ".concat(_this.log.message, ": %c").concat(_this.log.path, " %c").concat(JSON.stringify(_this.log.a), "%c, %c").concat(JSON.stringify(_this.log.b), "%c"), _this.standardStyles, _this.pathStyles, _this.errorStyles, _this.standardStyles, _this.errorStyles, _this.standardStyles);
            }
            else if (!assertTrue && _this.value !== assertTrue) {
                console.error("######## deepCompare error! The values are equal but expected inequality.");
            }
            return _this;
        };
        /**
         * Allows for the use of a third party logger function.
         *
         * @param {function} clientLogger
         * @param {boolean} enableLogger
         */
        this.attachLogger = function (clientLogger, enableLogger) {
            if (enableLogger === void 0) { enableLogger = true; }
            if (typeof clientLogger === 'function' &&
                typeof _this.clientLogger === 'undefined' &&
                enableLogger &&
                typeof _this.log.message !== 'undefined') {
                clientLogger("######## deepCompare inequality found! ".concat(_this.log.message, ": ").concat(_this.log.path, " ").concat(JSON.stringify(_this.log.a), ", ").concat(JSON.stringify(_this.log.b)));
            }
            return _this;
        };
        /* #region  Private methods */
        /**
         * Fail the comparison, log the error message and inequal values,
         * and decrement the recursion depth before returning to previous level.
         *
         * @param {*} a
         * @param {*} b
         * @param {string} message
         */
        this._fail = function (a, b, message) {
            _this._logOutput(a, b, message);
            _this._decrementDepth();
            _this.value = false;
            return _this;
        };
        /**
         * Pass the comparison and decrement the recursion depth before returning to previous level.
         */
        this._pass = function () {
            _this._decrementDepth();
            _this.value = true;
            return _this;
        };
        /**
         * @param {*} a
         * @param {*} b
         * @param {string} message
         */
        this._logOutput = function (a, b, message) {
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
        };
        /**
         * Increment depth after drilling down to a new level.
         */
        this._incrementDepth = function () {
            if (typeof _this.depthTracking.depth === 'undefined') {
                _this.depthTracking.depth = 0;
                _this.depthTracking.path = [];
            }
            else {
                _this.depthTracking.depth++;
            }
        };
        /**
         * Decrement depth before returning to a previous level.
         * If at the highest level and an error message exists, log the error.
         */
        this._decrementDepth = function () {
            if (typeof _this.depthTracking.depth !== 'undefined' &&
                _this.depthTracking.depth > 0) {
                _this.depthTracking.depth--;
            }
        };
        /**
         * Should reset the log object if necessary.
         */
        this._resetLog = function () {
            if (typeof _this.depthTracking.depth === 'undefined' ||
                _this.depthTracking.depth === 0) {
                _this.log = { a: null, b: null, message: null, path: null };
            }
        };
        this.value = null;
        this.depthTracking = { depth: null, path: null };
        this.log = { a: null, b: null, path: null, message: null };
        this.errorStyles = 'color:red;';
        this.standardStyles = 'color:black;';
        this.pathStyles = 'font-style:italic;color:blue;';
    }
    Object.defineProperty(Compare.prototype, "isEqual", {
        /**
         * Must be called at the end of the chain to return the result of the comparison.
         */
        get: function () {
            return this.value;
        },
        enumerable: false,
        configurable: true
    });
    return Compare;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new Compare());


/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "deepCopy": () => (/* binding */ deepCopy)
/* harmony export */ });
var deepCopy = function (obj) {
    if (typeof obj !== 'object' || obj === null) {
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "formatPhoneNumber": () => (/* binding */ formatPhoneNumber)
/* harmony export */ });
/* harmony import */ var _removeNonNumericChars__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);

var formatPhoneNumber = function (phoneNumber) {
    phoneNumber =
        typeof phoneNumber === 'number' ? phoneNumber.toString() : phoneNumber;
    if (phoneNumber.length < 10) {
        console.warn('phone-number needs to be at least 10 digits long');
        return;
    }
    var strippedNumber = (0,_removeNonNumericChars__WEBPACK_IMPORTED_MODULE_0__.removeNonNumericChars)(phoneNumber);
    return "(".concat(strippedNumber.slice(0, 3), ") ").concat(strippedNumber.slice(3, 6), "-").concat(strippedNumber.slice(6, 10));
};


/***/ }),
/* 4 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "removeNonNumericChars": () => (/* binding */ removeNonNumericChars)
/* harmony export */ });
var removeNonNumericChars = function (value) {
    return value.replace(/\D/g, '');
};


/***/ }),
/* 5 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getValue": () => (/* binding */ getValue)
/* harmony export */ });
var getValue = function (obj, path, defaultValue) {
    if (defaultValue === void 0) { defaultValue = null; }
    return path.split('.').reduce(function (a, c) {
        return a != null &&
            typeof a != 'undefined' &&
            a[c] != null &&
            typeof a[c] != 'undefined'
            ? a[c]
            : defaultValue != null
                ? defaultValue
                : null;
    }, obj);
};


/***/ }),
/* 6 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hasValue": () => (/* binding */ hasValue)
/* harmony export */ });
/* harmony import */ var _getValue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);

var hasValue = function (obj, path) {
    var value = (0,_getValue__WEBPACK_IMPORTED_MODULE_0__.getValue)(obj, path);
    return value == null ? false : true;
};


/***/ }),
/* 7 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "makeCamelCaseNormal": () => (/* binding */ makeCamelCaseNormal)
/* harmony export */ });
var makeCamelCaseNormal = function (value) {
    return value.replace(/([A-Z])/g, ' $1').replace(/^./, function (str) {
        return str.toUpperCase();
    });
};


/***/ }),
/* 8 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "objectIndexOf": () => (/* binding */ objectIndexOf)
/* harmony export */ });
/* harmony import */ var _Compare__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);

/**
 * Returns an object's index in an array of objects.
 *
 * @param {array} arr
 * @param {object} obj
 */
var objectIndexOf = function (arr, obj) {
    for (var i = 0; i < arr.length; i++) {
        if (_Compare__WEBPACK_IMPORTED_MODULE_0__["default"].deepCompare(arr[i], obj).isEqual) {
            return i;
        }
    }
    return -1;
};


/***/ }),
/* 9 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "removeDuplicates": () => (/* binding */ removeDuplicates)
/* harmony export */ });
/* harmony import */ var _objectIndexOf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);

var removeDuplicates = function (arr) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        var index = (0,_objectIndexOf__WEBPACK_IMPORTED_MODULE_0__.objectIndexOf)(newArr, arr[i]);
        if (index === -1) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
};


/***/ }),
/* 10 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "uuid": () => (/* binding */ uuid)
/* harmony export */ });
var uuid = function () {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = (Math.random() * 16) | 0, v = c == 'x' ? r : (r & 0x3) | 0x8;
        return v.toString(16);
    });
};


/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Compare": () => (/* reexport safe */ _Compare__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "deepCopy": () => (/* reexport safe */ _deepCopy__WEBPACK_IMPORTED_MODULE_1__.deepCopy),
/* harmony export */   "formatPhoneNumber": () => (/* reexport safe */ _formatPhoneNumber__WEBPACK_IMPORTED_MODULE_2__.formatPhoneNumber),
/* harmony export */   "getValue": () => (/* reexport safe */ _getValue__WEBPACK_IMPORTED_MODULE_3__.getValue),
/* harmony export */   "hasValue": () => (/* reexport safe */ _hasValue__WEBPACK_IMPORTED_MODULE_4__.hasValue),
/* harmony export */   "makeCamelCaseNormal": () => (/* reexport safe */ _makeCamelCaseNormal__WEBPACK_IMPORTED_MODULE_5__.makeCamelCaseNormal),
/* harmony export */   "objectIndexOf": () => (/* reexport safe */ _objectIndexOf__WEBPACK_IMPORTED_MODULE_6__.objectIndexOf),
/* harmony export */   "removeDuplicates": () => (/* reexport safe */ _removeDuplicates__WEBPACK_IMPORTED_MODULE_7__.removeDuplicates),
/* harmony export */   "removeNonNumericChars": () => (/* reexport safe */ _removeNonNumericChars__WEBPACK_IMPORTED_MODULE_8__.removeNonNumericChars),
/* harmony export */   "uuid": () => (/* reexport safe */ _uuid__WEBPACK_IMPORTED_MODULE_9__.uuid)
/* harmony export */ });
/* harmony import */ var _Compare__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _deepCopy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _formatPhoneNumber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _getValue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var _hasValue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var _makeCamelCaseNormal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7);
/* harmony import */ var _objectIndexOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8);
/* harmony import */ var _removeDuplicates__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9);
/* harmony import */ var _removeNonNumericChars__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4);
/* harmony import */ var _uuid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(10);












})();

module.exports = __webpack_exports__;
/******/ })()
;