var TheliaMediaLibraryBlock = (() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __reExport = (target, module, copyDefault, desc) => {
    if (module && typeof module === "object" || typeof module === "function") {
      for (let key of __getOwnPropNames(module))
        if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
          __defProp(target, key, { get: () => module[key], enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable });
    }
    return target;
  };
  var __toESM = (module, isNodeMode) => {
    return __reExport(__markAsModule(__defProp(module != null ? __create(__getProtoOf(module)) : {}, "default", !isNodeMode && module && module.__esModule ? { get: () => module.default, enumerable: true } : { value: module, enumerable: true })), module);
  };
  var __toCommonJS = /* @__PURE__ */ ((cache) => {
    return (module, temp) => {
      return cache && cache.get(module) || (temp = __reExport(__markAsModule({}), module, 1), cache && cache.set(module, temp), temp);
    };
  })(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);

  // external-global:@thelia/blocks-editor
  var require_blocks_editor = __commonJS({
    "external-global:@thelia/blocks-editor"(exports, module) {
      module.exports = TheliaBlocks;
    }
  });

  // external-global:react
  var require_react = __commonJS({
    "external-global:react"(exports, module) {
      module.exports = React;
    }
  });

  // external-global:react-dom
  var require_react_dom = __commonJS({
    "external-global:react-dom"(exports, module) {
      module.exports = ReactDOM;
    }
  });

  // ../../node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js
  var require_react_is_development = __commonJS({
    "../../node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js"(exports) {
      "use strict";
      if (true) {
        (function() {
          "use strict";
          var hasSymbol = typeof Symbol === "function" && Symbol.for;
          var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for("react.element") : 60103;
          var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for("react.portal") : 60106;
          var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for("react.fragment") : 60107;
          var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for("react.strict_mode") : 60108;
          var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for("react.profiler") : 60114;
          var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for("react.provider") : 60109;
          var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for("react.context") : 60110;
          var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for("react.async_mode") : 60111;
          var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for("react.concurrent_mode") : 60111;
          var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for("react.forward_ref") : 60112;
          var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for("react.suspense") : 60113;
          var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for("react.suspense_list") : 60120;
          var REACT_MEMO_TYPE = hasSymbol ? Symbol.for("react.memo") : 60115;
          var REACT_LAZY_TYPE = hasSymbol ? Symbol.for("react.lazy") : 60116;
          var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for("react.block") : 60121;
          var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for("react.fundamental") : 60117;
          var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for("react.responder") : 60118;
          var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for("react.scope") : 60119;
          function isValidElementType(type) {
            return typeof type === "string" || typeof type === "function" || type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === "object" && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
          }
          function typeOf(object) {
            if (typeof object === "object" && object !== null) {
              var $$typeof = object.$$typeof;
              switch ($$typeof) {
                case REACT_ELEMENT_TYPE:
                  var type = object.type;
                  switch (type) {
                    case REACT_ASYNC_MODE_TYPE:
                    case REACT_CONCURRENT_MODE_TYPE:
                    case REACT_FRAGMENT_TYPE:
                    case REACT_PROFILER_TYPE:
                    case REACT_STRICT_MODE_TYPE:
                    case REACT_SUSPENSE_TYPE:
                      return type;
                    default:
                      var $$typeofType = type && type.$$typeof;
                      switch ($$typeofType) {
                        case REACT_CONTEXT_TYPE:
                        case REACT_FORWARD_REF_TYPE:
                        case REACT_LAZY_TYPE:
                        case REACT_MEMO_TYPE:
                        case REACT_PROVIDER_TYPE:
                          return $$typeofType;
                        default:
                          return $$typeof;
                      }
                  }
                case REACT_PORTAL_TYPE:
                  return $$typeof;
              }
            }
            return void 0;
          }
          var AsyncMode = REACT_ASYNC_MODE_TYPE;
          var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
          var ContextConsumer = REACT_CONTEXT_TYPE;
          var ContextProvider = REACT_PROVIDER_TYPE;
          var Element = REACT_ELEMENT_TYPE;
          var ForwardRef = REACT_FORWARD_REF_TYPE;
          var Fragment = REACT_FRAGMENT_TYPE;
          var Lazy = REACT_LAZY_TYPE;
          var Memo = REACT_MEMO_TYPE;
          var Portal = REACT_PORTAL_TYPE;
          var Profiler = REACT_PROFILER_TYPE;
          var StrictMode = REACT_STRICT_MODE_TYPE;
          var Suspense3 = REACT_SUSPENSE_TYPE;
          var hasWarnedAboutDeprecatedIsAsyncMode = false;
          function isAsyncMode(object) {
            {
              if (!hasWarnedAboutDeprecatedIsAsyncMode) {
                hasWarnedAboutDeprecatedIsAsyncMode = true;
                console["warn"]("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.");
              }
            }
            return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
          }
          function isConcurrentMode(object) {
            return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
          }
          function isContextConsumer(object) {
            return typeOf(object) === REACT_CONTEXT_TYPE;
          }
          function isContextProvider(object) {
            return typeOf(object) === REACT_PROVIDER_TYPE;
          }
          function isElement(object) {
            return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
          }
          function isForwardRef(object) {
            return typeOf(object) === REACT_FORWARD_REF_TYPE;
          }
          function isFragment(object) {
            return typeOf(object) === REACT_FRAGMENT_TYPE;
          }
          function isLazy(object) {
            return typeOf(object) === REACT_LAZY_TYPE;
          }
          function isMemo(object) {
            return typeOf(object) === REACT_MEMO_TYPE;
          }
          function isPortal(object) {
            return typeOf(object) === REACT_PORTAL_TYPE;
          }
          function isProfiler(object) {
            return typeOf(object) === REACT_PROFILER_TYPE;
          }
          function isStrictMode(object) {
            return typeOf(object) === REACT_STRICT_MODE_TYPE;
          }
          function isSuspense(object) {
            return typeOf(object) === REACT_SUSPENSE_TYPE;
          }
          exports.AsyncMode = AsyncMode;
          exports.ConcurrentMode = ConcurrentMode;
          exports.ContextConsumer = ContextConsumer;
          exports.ContextProvider = ContextProvider;
          exports.Element = Element;
          exports.ForwardRef = ForwardRef;
          exports.Fragment = Fragment;
          exports.Lazy = Lazy;
          exports.Memo = Memo;
          exports.Portal = Portal;
          exports.Profiler = Profiler;
          exports.StrictMode = StrictMode;
          exports.Suspense = Suspense3;
          exports.isAsyncMode = isAsyncMode;
          exports.isConcurrentMode = isConcurrentMode;
          exports.isContextConsumer = isContextConsumer;
          exports.isContextProvider = isContextProvider;
          exports.isElement = isElement;
          exports.isForwardRef = isForwardRef;
          exports.isFragment = isFragment;
          exports.isLazy = isLazy;
          exports.isMemo = isMemo;
          exports.isPortal = isPortal;
          exports.isProfiler = isProfiler;
          exports.isStrictMode = isStrictMode;
          exports.isSuspense = isSuspense;
          exports.isValidElementType = isValidElementType;
          exports.typeOf = typeOf;
        })();
      }
    }
  });

  // ../../node_modules/prop-types/node_modules/react-is/index.js
  var require_react_is = __commonJS({
    "../../node_modules/prop-types/node_modules/react-is/index.js"(exports, module) {
      "use strict";
      if (false) {
        module.exports = null;
      } else {
        module.exports = require_react_is_development();
      }
    }
  });

  // ../../node_modules/object-assign/index.js
  var require_object_assign = __commonJS({
    "../../node_modules/object-assign/index.js"(exports, module) {
      "use strict";
      var getOwnPropertySymbols = Object.getOwnPropertySymbols;
      var hasOwnProperty = Object.prototype.hasOwnProperty;
      var propIsEnumerable = Object.prototype.propertyIsEnumerable;
      function toObject(val) {
        if (val === null || val === void 0) {
          throw new TypeError("Object.assign cannot be called with null or undefined");
        }
        return Object(val);
      }
      function shouldUseNative() {
        try {
          if (!Object.assign) {
            return false;
          }
          var test1 = new String("abc");
          test1[5] = "de";
          if (Object.getOwnPropertyNames(test1)[0] === "5") {
            return false;
          }
          var test2 = {};
          for (var i = 0; i < 10; i++) {
            test2["_" + String.fromCharCode(i)] = i;
          }
          var order2 = Object.getOwnPropertyNames(test2).map(function(n) {
            return test2[n];
          });
          if (order2.join("") !== "0123456789") {
            return false;
          }
          var test3 = {};
          "abcdefghijklmnopqrst".split("").forEach(function(letter) {
            test3[letter] = letter;
          });
          if (Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst") {
            return false;
          }
          return true;
        } catch (err) {
          return false;
        }
      }
      module.exports = shouldUseNative() ? Object.assign : function(target, source) {
        var from;
        var to = toObject(target);
        var symbols;
        for (var s = 1; s < arguments.length; s++) {
          from = Object(arguments[s]);
          for (var key in from) {
            if (hasOwnProperty.call(from, key)) {
              to[key] = from[key];
            }
          }
          if (getOwnPropertySymbols) {
            symbols = getOwnPropertySymbols(from);
            for (var i = 0; i < symbols.length; i++) {
              if (propIsEnumerable.call(from, symbols[i])) {
                to[symbols[i]] = from[symbols[i]];
              }
            }
          }
        }
        return to;
      };
    }
  });

  // ../../node_modules/prop-types/lib/ReactPropTypesSecret.js
  var require_ReactPropTypesSecret = __commonJS({
    "../../node_modules/prop-types/lib/ReactPropTypesSecret.js"(exports, module) {
      "use strict";
      var ReactPropTypesSecret = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
      module.exports = ReactPropTypesSecret;
    }
  });

  // ../../node_modules/prop-types/lib/has.js
  var require_has = __commonJS({
    "../../node_modules/prop-types/lib/has.js"(exports, module) {
      module.exports = Function.call.bind(Object.prototype.hasOwnProperty);
    }
  });

  // ../../node_modules/prop-types/checkPropTypes.js
  var require_checkPropTypes = __commonJS({
    "../../node_modules/prop-types/checkPropTypes.js"(exports, module) {
      "use strict";
      var printWarning = function() {
      };
      if (true) {
        ReactPropTypesSecret = require_ReactPropTypesSecret();
        loggedTypeFailures = {};
        has = require_has();
        printWarning = function(text) {
          var message = "Warning: " + text;
          if (typeof console !== "undefined") {
            console.error(message);
          }
          try {
            throw new Error(message);
          } catch (x) {
          }
        };
      }
      var ReactPropTypesSecret;
      var loggedTypeFailures;
      var has;
      function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
        if (true) {
          for (var typeSpecName in typeSpecs) {
            if (has(typeSpecs, typeSpecName)) {
              var error;
              try {
                if (typeof typeSpecs[typeSpecName] !== "function") {
                  var err = Error((componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  err.name = "Invariant Violation";
                  throw err;
                }
                error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
              } catch (ex) {
                error = ex;
              }
              if (error && !(error instanceof Error)) {
                printWarning((componentName || "React class") + ": type specification of " + location + " `" + typeSpecName + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof error + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).");
              }
              if (error instanceof Error && !(error.message in loggedTypeFailures)) {
                loggedTypeFailures[error.message] = true;
                var stack = getStack ? getStack() : "";
                printWarning("Failed " + location + " type: " + error.message + (stack != null ? stack : ""));
              }
            }
          }
        }
      }
      checkPropTypes.resetWarningCache = function() {
        if (true) {
          loggedTypeFailures = {};
        }
      };
      module.exports = checkPropTypes;
    }
  });

  // ../../node_modules/prop-types/factoryWithTypeCheckers.js
  var require_factoryWithTypeCheckers = __commonJS({
    "../../node_modules/prop-types/factoryWithTypeCheckers.js"(exports, module) {
      "use strict";
      var ReactIs = require_react_is();
      var assign = require_object_assign();
      var ReactPropTypesSecret = require_ReactPropTypesSecret();
      var has = require_has();
      var checkPropTypes = require_checkPropTypes();
      var printWarning = function() {
      };
      if (true) {
        printWarning = function(text) {
          var message = "Warning: " + text;
          if (typeof console !== "undefined") {
            console.error(message);
          }
          try {
            throw new Error(message);
          } catch (x) {
          }
        };
      }
      function emptyFunctionThatReturnsNull() {
        return null;
      }
      module.exports = function(isValidElement, throwOnDirectAccess) {
        var ITERATOR_SYMBOL = typeof Symbol === "function" && Symbol.iterator;
        var FAUX_ITERATOR_SYMBOL = "@@iterator";
        function getIteratorFn(maybeIterable) {
          var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
          if (typeof iteratorFn === "function") {
            return iteratorFn;
          }
        }
        var ANONYMOUS = "<<anonymous>>";
        var ReactPropTypes = {
          array: createPrimitiveTypeChecker("array"),
          bigint: createPrimitiveTypeChecker("bigint"),
          bool: createPrimitiveTypeChecker("boolean"),
          func: createPrimitiveTypeChecker("function"),
          number: createPrimitiveTypeChecker("number"),
          object: createPrimitiveTypeChecker("object"),
          string: createPrimitiveTypeChecker("string"),
          symbol: createPrimitiveTypeChecker("symbol"),
          any: createAnyTypeChecker(),
          arrayOf: createArrayOfTypeChecker,
          element: createElementTypeChecker(),
          elementType: createElementTypeTypeChecker(),
          instanceOf: createInstanceTypeChecker,
          node: createNodeChecker(),
          objectOf: createObjectOfTypeChecker,
          oneOf: createEnumTypeChecker,
          oneOfType: createUnionTypeChecker,
          shape: createShapeTypeChecker,
          exact: createStrictShapeTypeChecker
        };
        function is(x, y) {
          if (x === y) {
            return x !== 0 || 1 / x === 1 / y;
          } else {
            return x !== x && y !== y;
          }
        }
        function PropTypeError(message, data) {
          this.message = message;
          this.data = data && typeof data === "object" ? data : {};
          this.stack = "";
        }
        PropTypeError.prototype = Error.prototype;
        function createChainableTypeChecker(validate) {
          if (true) {
            var manualPropTypeCallCache = {};
            var manualPropTypeWarningCount = 0;
          }
          function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
            componentName = componentName || ANONYMOUS;
            propFullName = propFullName || propName;
            if (secret !== ReactPropTypesSecret) {
              if (throwOnDirectAccess) {
                var err = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");
                err.name = "Invariant Violation";
                throw err;
              } else if (typeof console !== "undefined") {
                var cacheKey = componentName + ":" + propName;
                if (!manualPropTypeCallCache[cacheKey] && manualPropTypeWarningCount < 3) {
                  printWarning("You are manually calling a React.PropTypes validation function for the `" + propFullName + "` prop on `" + componentName + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details.");
                  manualPropTypeCallCache[cacheKey] = true;
                  manualPropTypeWarningCount++;
                }
              }
            }
            if (props[propName] == null) {
              if (isRequired) {
                if (props[propName] === null) {
                  return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required " + ("in `" + componentName + "`, but its value is `null`."));
                }
                return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required in " + ("`" + componentName + "`, but its value is `undefined`."));
              }
              return null;
            } else {
              return validate(props, propName, componentName, location, propFullName);
            }
          }
          var chainedCheckType = checkType.bind(null, false);
          chainedCheckType.isRequired = checkType.bind(null, true);
          return chainedCheckType;
        }
        function createPrimitiveTypeChecker(expectedType) {
          function validate(props, propName, componentName, location, propFullName, secret) {
            var propValue = props[propName];
            var propType = getPropType(propValue);
            if (propType !== expectedType) {
              var preciseType = getPreciseType(propValue);
              return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + preciseType + "` supplied to `" + componentName + "`, expected ") + ("`" + expectedType + "`."), { expectedType });
            }
            return null;
          }
          return createChainableTypeChecker(validate);
        }
        function createAnyTypeChecker() {
          return createChainableTypeChecker(emptyFunctionThatReturnsNull);
        }
        function createArrayOfTypeChecker(typeChecker) {
          function validate(props, propName, componentName, location, propFullName) {
            if (typeof typeChecker !== "function") {
              return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside arrayOf.");
            }
            var propValue = props[propName];
            if (!Array.isArray(propValue)) {
              var propType = getPropType(propValue);
              return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an array."));
            }
            for (var i = 0; i < propValue.length; i++) {
              var error = typeChecker(propValue, i, componentName, location, propFullName + "[" + i + "]", ReactPropTypesSecret);
              if (error instanceof Error) {
                return error;
              }
            }
            return null;
          }
          return createChainableTypeChecker(validate);
        }
        function createElementTypeChecker() {
          function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];
            if (!isValidElement(propValue)) {
              var propType = getPropType(propValue);
              return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement."));
            }
            return null;
          }
          return createChainableTypeChecker(validate);
        }
        function createElementTypeTypeChecker() {
          function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];
            if (!ReactIs.isValidElementType(propValue)) {
              var propType = getPropType(propValue);
              return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement type."));
            }
            return null;
          }
          return createChainableTypeChecker(validate);
        }
        function createInstanceTypeChecker(expectedClass) {
          function validate(props, propName, componentName, location, propFullName) {
            if (!(props[propName] instanceof expectedClass)) {
              var expectedClassName = expectedClass.name || ANONYMOUS;
              var actualClassName = getClassName(props[propName]);
              return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + actualClassName + "` supplied to `" + componentName + "`, expected ") + ("instance of `" + expectedClassName + "`."));
            }
            return null;
          }
          return createChainableTypeChecker(validate);
        }
        function createEnumTypeChecker(expectedValues) {
          if (!Array.isArray(expectedValues)) {
            if (true) {
              if (arguments.length > 1) {
                printWarning("Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).");
              } else {
                printWarning("Invalid argument supplied to oneOf, expected an array.");
              }
            }
            return emptyFunctionThatReturnsNull;
          }
          function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];
            for (var i = 0; i < expectedValues.length; i++) {
              if (is(propValue, expectedValues[i])) {
                return null;
              }
            }
            var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
              var type = getPreciseType(value);
              if (type === "symbol") {
                return String(value);
              }
              return value;
            });
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of value `" + String(propValue) + "` " + ("supplied to `" + componentName + "`, expected one of " + valuesString + "."));
          }
          return createChainableTypeChecker(validate);
        }
        function createObjectOfTypeChecker(typeChecker) {
          function validate(props, propName, componentName, location, propFullName) {
            if (typeof typeChecker !== "function") {
              return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside objectOf.");
            }
            var propValue = props[propName];
            var propType = getPropType(propValue);
            if (propType !== "object") {
              return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an object."));
            }
            for (var key in propValue) {
              if (has(propValue, key)) {
                var error = typeChecker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
                if (error instanceof Error) {
                  return error;
                }
              }
            }
            return null;
          }
          return createChainableTypeChecker(validate);
        }
        function createUnionTypeChecker(arrayOfTypeCheckers) {
          if (!Array.isArray(arrayOfTypeCheckers)) {
            true ? printWarning("Invalid argument supplied to oneOfType, expected an instance of array.") : void 0;
            return emptyFunctionThatReturnsNull;
          }
          for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
            var checker = arrayOfTypeCheckers[i];
            if (typeof checker !== "function") {
              printWarning("Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + getPostfixForTypeWarning(checker) + " at index " + i + ".");
              return emptyFunctionThatReturnsNull;
            }
          }
          function validate(props, propName, componentName, location, propFullName) {
            var expectedTypes = [];
            for (var i2 = 0; i2 < arrayOfTypeCheckers.length; i2++) {
              var checker2 = arrayOfTypeCheckers[i2];
              var checkerResult = checker2(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
              if (checkerResult == null) {
                return null;
              }
              if (checkerResult.data && has(checkerResult.data, "expectedType")) {
                expectedTypes.push(checkerResult.data.expectedType);
              }
            }
            var expectedTypesMessage = expectedTypes.length > 0 ? ", expected one of type [" + expectedTypes.join(", ") + "]" : "";
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`" + expectedTypesMessage + "."));
          }
          return createChainableTypeChecker(validate);
        }
        function createNodeChecker() {
          function validate(props, propName, componentName, location, propFullName) {
            if (!isNode(props[propName])) {
              return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`, expected a ReactNode."));
            }
            return null;
          }
          return createChainableTypeChecker(validate);
        }
        function invalidValidatorError(componentName, location, propFullName, key, type) {
          return new PropTypeError((componentName || "React class") + ": " + location + " type `" + propFullName + "." + key + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + type + "`.");
        }
        function createShapeTypeChecker(shapeTypes) {
          function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];
            var propType = getPropType(propValue);
            if (propType !== "object") {
              return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
            }
            for (var key in shapeTypes) {
              var checker = shapeTypes[key];
              if (typeof checker !== "function") {
                return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
              }
              var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
              if (error) {
                return error;
              }
            }
            return null;
          }
          return createChainableTypeChecker(validate);
        }
        function createStrictShapeTypeChecker(shapeTypes) {
          function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];
            var propType = getPropType(propValue);
            if (propType !== "object") {
              return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
            }
            var allKeys = assign({}, props[propName], shapeTypes);
            for (var key in allKeys) {
              var checker = shapeTypes[key];
              if (has(shapeTypes, key) && typeof checker !== "function") {
                return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
              }
              if (!checker) {
                return new PropTypeError("Invalid " + location + " `" + propFullName + "` key `" + key + "` supplied to `" + componentName + "`.\nBad object: " + JSON.stringify(props[propName], null, "  ") + "\nValid keys: " + JSON.stringify(Object.keys(shapeTypes), null, "  "));
              }
              var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
              if (error) {
                return error;
              }
            }
            return null;
          }
          return createChainableTypeChecker(validate);
        }
        function isNode(propValue) {
          switch (typeof propValue) {
            case "number":
            case "string":
            case "undefined":
              return true;
            case "boolean":
              return !propValue;
            case "object":
              if (Array.isArray(propValue)) {
                return propValue.every(isNode);
              }
              if (propValue === null || isValidElement(propValue)) {
                return true;
              }
              var iteratorFn = getIteratorFn(propValue);
              if (iteratorFn) {
                var iterator = iteratorFn.call(propValue);
                var step;
                if (iteratorFn !== propValue.entries) {
                  while (!(step = iterator.next()).done) {
                    if (!isNode(step.value)) {
                      return false;
                    }
                  }
                } else {
                  while (!(step = iterator.next()).done) {
                    var entry = step.value;
                    if (entry) {
                      if (!isNode(entry[1])) {
                        return false;
                      }
                    }
                  }
                }
              } else {
                return false;
              }
              return true;
            default:
              return false;
          }
        }
        function isSymbol(propType, propValue) {
          if (propType === "symbol") {
            return true;
          }
          if (!propValue) {
            return false;
          }
          if (propValue["@@toStringTag"] === "Symbol") {
            return true;
          }
          if (typeof Symbol === "function" && propValue instanceof Symbol) {
            return true;
          }
          return false;
        }
        function getPropType(propValue) {
          var propType = typeof propValue;
          if (Array.isArray(propValue)) {
            return "array";
          }
          if (propValue instanceof RegExp) {
            return "object";
          }
          if (isSymbol(propType, propValue)) {
            return "symbol";
          }
          return propType;
        }
        function getPreciseType(propValue) {
          if (typeof propValue === "undefined" || propValue === null) {
            return "" + propValue;
          }
          var propType = getPropType(propValue);
          if (propType === "object") {
            if (propValue instanceof Date) {
              return "date";
            } else if (propValue instanceof RegExp) {
              return "regexp";
            }
          }
          return propType;
        }
        function getPostfixForTypeWarning(value) {
          var type = getPreciseType(value);
          switch (type) {
            case "array":
            case "object":
              return "an " + type;
            case "boolean":
            case "date":
            case "regexp":
              return "a " + type;
            default:
              return type;
          }
        }
        function getClassName(propValue) {
          if (!propValue.constructor || !propValue.constructor.name) {
            return ANONYMOUS;
          }
          return propValue.constructor.name;
        }
        ReactPropTypes.checkPropTypes = checkPropTypes;
        ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
        ReactPropTypes.PropTypes = ReactPropTypes;
        return ReactPropTypes;
      };
    }
  });

  // ../../node_modules/prop-types/index.js
  var require_prop_types = __commonJS({
    "../../node_modules/prop-types/index.js"(exports, module) {
      if (true) {
        ReactIs = require_react_is();
        throwOnDirectAccess = true;
        module.exports = require_factoryWithTypeCheckers()(ReactIs.isElement, throwOnDirectAccess);
      } else {
        module.exports = null();
      }
      var ReactIs;
      var throwOnDirectAccess;
    }
  });

  // ../../node_modules/react-modal/lib/helpers/tabbable.js
  var require_tabbable = __commonJS({
    "../../node_modules/react-modal/lib/helpers/tabbable.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = findTabbableDescendants;
      var tabbableNode = /input|select|textarea|button|object|iframe/;
      function hidesContents(element) {
        var zeroSize = element.offsetWidth <= 0 && element.offsetHeight <= 0;
        if (zeroSize && !element.innerHTML)
          return true;
        try {
          var style = window.getComputedStyle(element);
          return zeroSize ? style.getPropertyValue("overflow") !== "visible" || element.scrollWidth <= 0 && element.scrollHeight <= 0 : style.getPropertyValue("display") == "none";
        } catch (exception) {
          console.warn("Failed to inspect element style");
          return false;
        }
      }
      function visible(element) {
        var parentElement = element;
        var rootNode = element.getRootNode && element.getRootNode();
        while (parentElement) {
          if (parentElement === document.body)
            break;
          if (rootNode && parentElement === rootNode)
            parentElement = rootNode.host.parentNode;
          if (hidesContents(parentElement))
            return false;
          parentElement = parentElement.parentNode;
        }
        return true;
      }
      function focusable(element, isTabIndexNotNaN) {
        var nodeName = element.nodeName.toLowerCase();
        var res = tabbableNode.test(nodeName) && !element.disabled || (nodeName === "a" ? element.href || isTabIndexNotNaN : isTabIndexNotNaN);
        return res && visible(element);
      }
      function tabbable(element) {
        var tabIndex = element.getAttribute("tabindex");
        if (tabIndex === null)
          tabIndex = void 0;
        var isTabIndexNaN = isNaN(tabIndex);
        return (isTabIndexNaN || tabIndex >= 0) && focusable(element, !isTabIndexNaN);
      }
      function findTabbableDescendants(element) {
        var descendants = [].slice.call(element.querySelectorAll("*"), 0).reduce(function(finished, el) {
          return finished.concat(!el.shadowRoot ? [el] : findTabbableDescendants(el.shadowRoot));
        }, []);
        return descendants.filter(tabbable);
      }
      module.exports = exports["default"];
    }
  });

  // ../../node_modules/react-modal/lib/helpers/focusManager.js
  var require_focusManager = __commonJS({
    "../../node_modules/react-modal/lib/helpers/focusManager.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.resetState = resetState;
      exports.log = log;
      exports.handleBlur = handleBlur;
      exports.handleFocus = handleFocus;
      exports.markForFocusLater = markForFocusLater;
      exports.returnFocus = returnFocus;
      exports.popWithoutFocus = popWithoutFocus;
      exports.setupScopedFocus = setupScopedFocus;
      exports.teardownScopedFocus = teardownScopedFocus;
      var _tabbable = require_tabbable();
      var _tabbable2 = _interopRequireDefault(_tabbable);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var focusLaterElements = [];
      var modalElement = null;
      var needToFocus = false;
      function resetState() {
        focusLaterElements = [];
      }
      function log() {
        if (true) {
          console.log("focusManager ----------");
          focusLaterElements.forEach(function(f) {
            var check = f || {};
            console.log(check.nodeName, check.className, check.id);
          });
          console.log("end focusManager ----------");
        }
      }
      function handleBlur() {
        needToFocus = true;
      }
      function handleFocus() {
        if (needToFocus) {
          needToFocus = false;
          if (!modalElement) {
            return;
          }
          setTimeout(function() {
            if (modalElement.contains(document.activeElement)) {
              return;
            }
            var el = (0, _tabbable2.default)(modalElement)[0] || modalElement;
            el.focus();
          }, 0);
        }
      }
      function markForFocusLater() {
        focusLaterElements.push(document.activeElement);
      }
      function returnFocus() {
        var preventScroll = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
        var toFocus = null;
        try {
          if (focusLaterElements.length !== 0) {
            toFocus = focusLaterElements.pop();
            toFocus.focus({ preventScroll });
          }
          return;
        } catch (e) {
          console.warn(["You tried to return focus to", toFocus, "but it is not in the DOM anymore"].join(" "));
        }
      }
      function popWithoutFocus() {
        focusLaterElements.length > 0 && focusLaterElements.pop();
      }
      function setupScopedFocus(element) {
        modalElement = element;
        if (window.addEventListener) {
          window.addEventListener("blur", handleBlur, false);
          document.addEventListener("focus", handleFocus, true);
        } else {
          window.attachEvent("onBlur", handleBlur);
          document.attachEvent("onFocus", handleFocus);
        }
      }
      function teardownScopedFocus() {
        modalElement = null;
        if (window.addEventListener) {
          window.removeEventListener("blur", handleBlur);
          document.removeEventListener("focus", handleFocus);
        } else {
          window.detachEvent("onBlur", handleBlur);
          document.detachEvent("onFocus", handleFocus);
        }
      }
    }
  });

  // ../../node_modules/react-modal/lib/helpers/scopeTab.js
  var require_scopeTab = __commonJS({
    "../../node_modules/react-modal/lib/helpers/scopeTab.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = scopeTab;
      var _tabbable = require_tabbable();
      var _tabbable2 = _interopRequireDefault(_tabbable);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function getActiveElement() {
        var el = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : document;
        return el.activeElement.shadowRoot ? getActiveElement(el.activeElement.shadowRoot) : el.activeElement;
      }
      function scopeTab(node, event) {
        var tabbable = (0, _tabbable2.default)(node);
        if (!tabbable.length) {
          event.preventDefault();
          return;
        }
        var target = void 0;
        var shiftKey = event.shiftKey;
        var head = tabbable[0];
        var tail = tabbable[tabbable.length - 1];
        var activeElement = getActiveElement();
        if (node === activeElement) {
          if (!shiftKey)
            return;
          target = tail;
        }
        if (tail === activeElement && !shiftKey) {
          target = head;
        }
        if (head === activeElement && shiftKey) {
          target = tail;
        }
        if (target) {
          event.preventDefault();
          target.focus();
          return;
        }
        var checkSafari = /(\bChrome\b|\bSafari\b)\//.exec(navigator.userAgent);
        var isSafariDesktop = checkSafari != null && checkSafari[1] != "Chrome" && /\biPod\b|\biPad\b/g.exec(navigator.userAgent) == null;
        if (!isSafariDesktop)
          return;
        var x = tabbable.indexOf(activeElement);
        if (x > -1) {
          x += shiftKey ? -1 : 1;
        }
        target = tabbable[x];
        if (typeof target === "undefined") {
          event.preventDefault();
          target = shiftKey ? tail : head;
          target.focus();
          return;
        }
        event.preventDefault();
        target.focus();
      }
      module.exports = exports["default"];
    }
  });

  // ../../node_modules/warning/warning.js
  var require_warning = __commonJS({
    "../../node_modules/warning/warning.js"(exports, module) {
      "use strict";
      var __DEV__ = true;
      var warning = function() {
      };
      if (__DEV__) {
        printWarning = function printWarning2(format, args) {
          var len = arguments.length;
          args = new Array(len > 1 ? len - 1 : 0);
          for (var key = 1; key < len; key++) {
            args[key - 1] = arguments[key];
          }
          var argIndex = 0;
          var message = "Warning: " + format.replace(/%s/g, function() {
            return args[argIndex++];
          });
          if (typeof console !== "undefined") {
            console.error(message);
          }
          try {
            throw new Error(message);
          } catch (x) {
          }
        };
        warning = function(condition, format, args) {
          var len = arguments.length;
          args = new Array(len > 2 ? len - 2 : 0);
          for (var key = 2; key < len; key++) {
            args[key - 2] = arguments[key];
          }
          if (format === void 0) {
            throw new Error("`warning(condition, format, ...args)` requires a warning message argument");
          }
          if (!condition) {
            printWarning.apply(null, [format].concat(args));
          }
        };
      }
      var printWarning;
      module.exports = warning;
    }
  });

  // ../../node_modules/exenv/index.js
  var require_exenv = __commonJS({
    "../../node_modules/exenv/index.js"(exports, module) {
      (function() {
        "use strict";
        var canUseDOM = !!(typeof window !== "undefined" && window.document && window.document.createElement);
        var ExecutionEnvironment = {
          canUseDOM,
          canUseWorkers: typeof Worker !== "undefined",
          canUseEventListeners: canUseDOM && !!(window.addEventListener || window.attachEvent),
          canUseViewport: canUseDOM && !!window.screen
        };
        if (typeof define === "function" && typeof define.amd === "object" && define.amd) {
          define(function() {
            return ExecutionEnvironment;
          });
        } else if (typeof module !== "undefined" && module.exports) {
          module.exports = ExecutionEnvironment;
        } else {
          window.ExecutionEnvironment = ExecutionEnvironment;
        }
      })();
    }
  });

  // ../../node_modules/react-modal/lib/helpers/safeHTMLElement.js
  var require_safeHTMLElement = __commonJS({
    "../../node_modules/react-modal/lib/helpers/safeHTMLElement.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.canUseDOM = exports.SafeNodeList = exports.SafeHTMLCollection = void 0;
      var _exenv = require_exenv();
      var _exenv2 = _interopRequireDefault(_exenv);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var EE = _exenv2.default;
      var SafeHTMLElement = EE.canUseDOM ? window.HTMLElement : {};
      var SafeHTMLCollection = exports.SafeHTMLCollection = EE.canUseDOM ? window.HTMLCollection : {};
      var SafeNodeList = exports.SafeNodeList = EE.canUseDOM ? window.NodeList : {};
      var canUseDOM = exports.canUseDOM = EE.canUseDOM;
      exports.default = SafeHTMLElement;
    }
  });

  // ../../node_modules/react-modal/lib/helpers/ariaAppHider.js
  var require_ariaAppHider = __commonJS({
    "../../node_modules/react-modal/lib/helpers/ariaAppHider.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.resetState = resetState;
      exports.log = log;
      exports.assertNodeList = assertNodeList;
      exports.setElement = setElement;
      exports.validateElement = validateElement;
      exports.hide = hide;
      exports.show = show;
      exports.documentNotReadyOrSSRTesting = documentNotReadyOrSSRTesting;
      var _warning = require_warning();
      var _warning2 = _interopRequireDefault(_warning);
      var _safeHTMLElement = require_safeHTMLElement();
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var globalElement = null;
      function resetState() {
        if (globalElement) {
          if (globalElement.removeAttribute) {
            globalElement.removeAttribute("aria-hidden");
          } else if (globalElement.length != null) {
            globalElement.forEach(function(element) {
              return element.removeAttribute("aria-hidden");
            });
          } else {
            document.querySelectorAll(globalElement).forEach(function(element) {
              return element.removeAttribute("aria-hidden");
            });
          }
        }
        globalElement = null;
      }
      function log() {
        if (true) {
          var check = globalElement || {};
          console.log("ariaAppHider ----------");
          console.log(check.nodeName, check.className, check.id);
          console.log("end ariaAppHider ----------");
        }
      }
      function assertNodeList(nodeList, selector) {
        if (!nodeList || !nodeList.length) {
          throw new Error("react-modal: No elements were found for selector " + selector + ".");
        }
      }
      function setElement(element) {
        var useElement = element;
        if (typeof useElement === "string" && _safeHTMLElement.canUseDOM) {
          var el = document.querySelectorAll(useElement);
          assertNodeList(el, useElement);
          useElement = el;
        }
        globalElement = useElement || globalElement;
        return globalElement;
      }
      function validateElement(appElement) {
        var el = appElement || globalElement;
        if (el) {
          return Array.isArray(el) || el instanceof HTMLCollection || el instanceof NodeList ? el : [el];
        } else {
          (0, _warning2.default)(false, ["react-modal: App element is not defined.", "Please use `Modal.setAppElement(el)` or set `appElement={el}`.", "This is needed so screen readers don't see main content", "when modal is opened. It is not recommended, but you can opt-out", "by setting `ariaHideApp={false}`."].join(" "));
          return [];
        }
      }
      function hide(appElement) {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = void 0;
        try {
          for (var _iterator = validateElement(appElement)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var el = _step.value;
            el.setAttribute("aria-hidden", "true");
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
      }
      function show(appElement) {
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = void 0;
        try {
          for (var _iterator2 = validateElement(appElement)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var el = _step2.value;
            el.removeAttribute("aria-hidden");
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2.return) {
              _iterator2.return();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }
      }
      function documentNotReadyOrSSRTesting() {
        globalElement = null;
      }
    }
  });

  // ../../node_modules/react-modal/lib/helpers/classList.js
  var require_classList = __commonJS({
    "../../node_modules/react-modal/lib/helpers/classList.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.resetState = resetState;
      exports.log = log;
      var htmlClassList = {};
      var docBodyClassList = {};
      function removeClass(at, cls) {
        at.classList.remove(cls);
      }
      function resetState() {
        var htmlElement = document.getElementsByTagName("html")[0];
        for (var cls in htmlClassList) {
          removeClass(htmlElement, htmlClassList[cls]);
        }
        var body = document.body;
        for (var _cls in docBodyClassList) {
          removeClass(body, docBodyClassList[_cls]);
        }
        htmlClassList = {};
        docBodyClassList = {};
      }
      function log() {
        if (true) {
          var classes = document.getElementsByTagName("html")[0].className;
          var buffer = "Show tracked classes:\n\n";
          buffer += "<html /> (" + classes + "):\n  ";
          for (var x in htmlClassList) {
            buffer += "  " + x + " " + htmlClassList[x] + "\n  ";
          }
          classes = document.body.className;
          buffer += "\n\ndoc.body (" + classes + "):\n  ";
          for (var _x in docBodyClassList) {
            buffer += "  " + _x + " " + docBodyClassList[_x] + "\n  ";
          }
          buffer += "\n";
          console.log(buffer);
        }
      }
      var incrementReference = function incrementReference2(poll, className) {
        if (!poll[className]) {
          poll[className] = 0;
        }
        poll[className] += 1;
        return className;
      };
      var decrementReference = function decrementReference2(poll, className) {
        if (poll[className]) {
          poll[className] -= 1;
        }
        return className;
      };
      var trackClass = function trackClass2(classListRef, poll, classes) {
        classes.forEach(function(className) {
          incrementReference(poll, className);
          classListRef.add(className);
        });
      };
      var untrackClass = function untrackClass2(classListRef, poll, classes) {
        classes.forEach(function(className) {
          decrementReference(poll, className);
          poll[className] === 0 && classListRef.remove(className);
        });
      };
      var add = exports.add = function add2(element, classString) {
        return trackClass(element.classList, element.nodeName.toLowerCase() == "html" ? htmlClassList : docBodyClassList, classString.split(" "));
      };
      var remove = exports.remove = function remove2(element, classString) {
        return untrackClass(element.classList, element.nodeName.toLowerCase() == "html" ? htmlClassList : docBodyClassList, classString.split(" "));
      };
    }
  });

  // ../../node_modules/react-modal/lib/helpers/portalOpenInstances.js
  var require_portalOpenInstances = __commonJS({
    "../../node_modules/react-modal/lib/helpers/portalOpenInstances.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.log = log;
      exports.resetState = resetState;
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      var PortalOpenInstances = function PortalOpenInstances2() {
        var _this = this;
        _classCallCheck(this, PortalOpenInstances2);
        this.register = function(openInstance) {
          if (_this.openInstances.indexOf(openInstance) !== -1) {
            if (true) {
              console.warn("React-Modal: Cannot register modal instance that's already open");
            }
            return;
          }
          _this.openInstances.push(openInstance);
          _this.emit("register");
        };
        this.deregister = function(openInstance) {
          var index = _this.openInstances.indexOf(openInstance);
          if (index === -1) {
            if (true) {
              console.warn("React-Modal: Unable to deregister " + openInstance + " as it was never registered");
            }
            return;
          }
          _this.openInstances.splice(index, 1);
          _this.emit("deregister");
        };
        this.subscribe = function(callback) {
          _this.subscribers.push(callback);
        };
        this.emit = function(eventType) {
          _this.subscribers.forEach(function(subscriber) {
            return subscriber(eventType, _this.openInstances.slice());
          });
        };
        this.openInstances = [];
        this.subscribers = [];
      };
      var portalOpenInstances = new PortalOpenInstances();
      function log() {
        console.log("portalOpenInstances ----------");
        console.log(portalOpenInstances.openInstances.length);
        portalOpenInstances.openInstances.forEach(function(p) {
          return console.log(p);
        });
        console.log("end portalOpenInstances ----------");
      }
      function resetState() {
        portalOpenInstances = new PortalOpenInstances();
      }
      exports.default = portalOpenInstances;
    }
  });

  // ../../node_modules/react-modal/lib/helpers/bodyTrap.js
  var require_bodyTrap = __commonJS({
    "../../node_modules/react-modal/lib/helpers/bodyTrap.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.resetState = resetState;
      exports.log = log;
      var _portalOpenInstances = require_portalOpenInstances();
      var _portalOpenInstances2 = _interopRequireDefault(_portalOpenInstances);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var before = void 0;
      var after = void 0;
      var instances = [];
      function resetState() {
        var _arr = [before, after];
        for (var _i = 0; _i < _arr.length; _i++) {
          var item = _arr[_i];
          if (!item)
            continue;
          item.parentNode && item.parentNode.removeChild(item);
        }
        before = after = null;
        instances = [];
      }
      function log() {
        console.log("bodyTrap ----------");
        console.log(instances.length);
        var _arr2 = [before, after];
        for (var _i2 = 0; _i2 < _arr2.length; _i2++) {
          var item = _arr2[_i2];
          var check = item || {};
          console.log(check.nodeName, check.className, check.id);
        }
        console.log("edn bodyTrap ----------");
      }
      function focusContent() {
        if (instances.length === 0) {
          if (true) {
            console.warn("React-Modal: Open instances > 0 expected");
          }
          return;
        }
        instances[instances.length - 1].focusContent();
      }
      function bodyTrap(eventType, openInstances) {
        if (!before && !after) {
          before = document.createElement("div");
          before.setAttribute("data-react-modal-body-trap", "");
          before.style.position = "absolute";
          before.style.opacity = "0";
          before.setAttribute("tabindex", "0");
          before.addEventListener("focus", focusContent);
          after = before.cloneNode();
          after.addEventListener("focus", focusContent);
        }
        instances = openInstances;
        if (instances.length > 0) {
          if (document.body.firstChild !== before) {
            document.body.insertBefore(before, document.body.firstChild);
          }
          if (document.body.lastChild !== after) {
            document.body.appendChild(after);
          }
        } else {
          if (before.parentElement) {
            before.parentElement.removeChild(before);
          }
          if (after.parentElement) {
            after.parentElement.removeChild(after);
          }
        }
      }
      _portalOpenInstances2.default.subscribe(bodyTrap);
    }
  });

  // ../../node_modules/react-modal/lib/components/ModalPortal.js
  var require_ModalPortal = __commonJS({
    "../../node_modules/react-modal/lib/components/ModalPortal.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var _extends2 = Object.assign || function(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
        return target;
      };
      var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
        return typeof obj;
      } : function(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
      var _createClass = function() {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor)
              descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }
        return function(Constructor, protoProps, staticProps) {
          if (protoProps)
            defineProperties(Constructor.prototype, protoProps);
          if (staticProps)
            defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();
      var _react = require_react();
      var _propTypes = require_prop_types();
      var _propTypes2 = _interopRequireDefault(_propTypes);
      var _focusManager = require_focusManager();
      var focusManager2 = _interopRequireWildcard(_focusManager);
      var _scopeTab = require_scopeTab();
      var _scopeTab2 = _interopRequireDefault(_scopeTab);
      var _ariaAppHider = require_ariaAppHider();
      var ariaAppHider = _interopRequireWildcard(_ariaAppHider);
      var _classList = require_classList();
      var classList = _interopRequireWildcard(_classList);
      var _safeHTMLElement = require_safeHTMLElement();
      var _safeHTMLElement2 = _interopRequireDefault(_safeHTMLElement);
      var _portalOpenInstances = require_portalOpenInstances();
      var _portalOpenInstances2 = _interopRequireDefault(_portalOpenInstances);
      require_bodyTrap();
      function _interopRequireWildcard(obj) {
        if (obj && obj.__esModule) {
          return obj;
        } else {
          var newObj = {};
          if (obj != null) {
            for (var key in obj) {
              if (Object.prototype.hasOwnProperty.call(obj, key))
                newObj[key] = obj[key];
            }
          }
          newObj.default = obj;
          return newObj;
        }
      }
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _possibleConstructorReturn(self, call) {
        if (!self) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return call && (typeof call === "object" || typeof call === "function") ? call : self;
      }
      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
        if (superClass)
          Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
      }
      var CLASS_NAMES = {
        overlay: "ReactModal__Overlay",
        content: "ReactModal__Content"
      };
      var TAB_KEY = 9;
      var ESC_KEY = 27;
      var ariaHiddenInstances = 0;
      var ModalPortal = function(_Component) {
        _inherits(ModalPortal2, _Component);
        function ModalPortal2(props) {
          _classCallCheck(this, ModalPortal2);
          var _this = _possibleConstructorReturn(this, (ModalPortal2.__proto__ || Object.getPrototypeOf(ModalPortal2)).call(this, props));
          _this.setOverlayRef = function(overlay) {
            _this.overlay = overlay;
            _this.props.overlayRef && _this.props.overlayRef(overlay);
          };
          _this.setContentRef = function(content) {
            _this.content = content;
            _this.props.contentRef && _this.props.contentRef(content);
          };
          _this.afterClose = function() {
            var _this$props = _this.props, appElement = _this$props.appElement, ariaHideApp = _this$props.ariaHideApp, htmlOpenClassName = _this$props.htmlOpenClassName, bodyOpenClassName = _this$props.bodyOpenClassName;
            bodyOpenClassName && classList.remove(document.body, bodyOpenClassName);
            htmlOpenClassName && classList.remove(document.getElementsByTagName("html")[0], htmlOpenClassName);
            if (ariaHideApp && ariaHiddenInstances > 0) {
              ariaHiddenInstances -= 1;
              if (ariaHiddenInstances === 0) {
                ariaAppHider.show(appElement);
              }
            }
            if (_this.props.shouldFocusAfterRender) {
              if (_this.props.shouldReturnFocusAfterClose) {
                focusManager2.returnFocus(_this.props.preventScroll);
                focusManager2.teardownScopedFocus();
              } else {
                focusManager2.popWithoutFocus();
              }
            }
            if (_this.props.onAfterClose) {
              _this.props.onAfterClose();
            }
            _portalOpenInstances2.default.deregister(_this);
          };
          _this.open = function() {
            _this.beforeOpen();
            if (_this.state.afterOpen && _this.state.beforeClose) {
              clearTimeout(_this.closeTimer);
              _this.setState({ beforeClose: false });
            } else {
              if (_this.props.shouldFocusAfterRender) {
                focusManager2.setupScopedFocus(_this.node);
                focusManager2.markForFocusLater();
              }
              _this.setState({ isOpen: true }, function() {
                _this.openAnimationFrame = requestAnimationFrame(function() {
                  _this.setState({ afterOpen: true });
                  if (_this.props.isOpen && _this.props.onAfterOpen) {
                    _this.props.onAfterOpen({
                      overlayEl: _this.overlay,
                      contentEl: _this.content
                    });
                  }
                });
              });
            }
          };
          _this.close = function() {
            if (_this.props.closeTimeoutMS > 0) {
              _this.closeWithTimeout();
            } else {
              _this.closeWithoutTimeout();
            }
          };
          _this.focusContent = function() {
            return _this.content && !_this.contentHasFocus() && _this.content.focus({ preventScroll: true });
          };
          _this.closeWithTimeout = function() {
            var closesAt = Date.now() + _this.props.closeTimeoutMS;
            _this.setState({ beforeClose: true, closesAt }, function() {
              _this.closeTimer = setTimeout(_this.closeWithoutTimeout, _this.state.closesAt - Date.now());
            });
          };
          _this.closeWithoutTimeout = function() {
            _this.setState({
              beforeClose: false,
              isOpen: false,
              afterOpen: false,
              closesAt: null
            }, _this.afterClose);
          };
          _this.handleKeyDown = function(event) {
            if (event.keyCode === TAB_KEY) {
              (0, _scopeTab2.default)(_this.content, event);
            }
            if (_this.props.shouldCloseOnEsc && event.keyCode === ESC_KEY) {
              event.stopPropagation();
              _this.requestClose(event);
            }
          };
          _this.handleOverlayOnClick = function(event) {
            if (_this.shouldClose === null) {
              _this.shouldClose = true;
            }
            if (_this.shouldClose && _this.props.shouldCloseOnOverlayClick) {
              if (_this.ownerHandlesClose()) {
                _this.requestClose(event);
              } else {
                _this.focusContent();
              }
            }
            _this.shouldClose = null;
          };
          _this.handleContentOnMouseUp = function() {
            _this.shouldClose = false;
          };
          _this.handleOverlayOnMouseDown = function(event) {
            if (!_this.props.shouldCloseOnOverlayClick && event.target == _this.overlay) {
              event.preventDefault();
            }
          };
          _this.handleContentOnClick = function() {
            _this.shouldClose = false;
          };
          _this.handleContentOnMouseDown = function() {
            _this.shouldClose = false;
          };
          _this.requestClose = function(event) {
            return _this.ownerHandlesClose() && _this.props.onRequestClose(event);
          };
          _this.ownerHandlesClose = function() {
            return _this.props.onRequestClose;
          };
          _this.shouldBeClosed = function() {
            return !_this.state.isOpen && !_this.state.beforeClose;
          };
          _this.contentHasFocus = function() {
            return document.activeElement === _this.content || _this.content.contains(document.activeElement);
          };
          _this.buildClassName = function(which, additional) {
            var classNames = (typeof additional === "undefined" ? "undefined" : _typeof(additional)) === "object" ? additional : {
              base: CLASS_NAMES[which],
              afterOpen: CLASS_NAMES[which] + "--after-open",
              beforeClose: CLASS_NAMES[which] + "--before-close"
            };
            var className = classNames.base;
            if (_this.state.afterOpen) {
              className = className + " " + classNames.afterOpen;
            }
            if (_this.state.beforeClose) {
              className = className + " " + classNames.beforeClose;
            }
            return typeof additional === "string" && additional ? className + " " + additional : className;
          };
          _this.attributesFromObject = function(prefix, items) {
            return Object.keys(items).reduce(function(acc, name) {
              acc[prefix + "-" + name] = items[name];
              return acc;
            }, {});
          };
          _this.state = {
            afterOpen: false,
            beforeClose: false
          };
          _this.shouldClose = null;
          _this.moveFromContentToOverlay = null;
          return _this;
        }
        _createClass(ModalPortal2, [{
          key: "componentDidMount",
          value: function componentDidMount() {
            if (this.props.isOpen) {
              this.open();
            }
          }
        }, {
          key: "componentDidUpdate",
          value: function componentDidUpdate(prevProps, prevState) {
            if (true) {
              if (prevProps.bodyOpenClassName !== this.props.bodyOpenClassName) {
                console.warn('React-Modal: "bodyOpenClassName" prop has been modified. This may cause unexpected behavior when multiple modals are open.');
              }
              if (prevProps.htmlOpenClassName !== this.props.htmlOpenClassName) {
                console.warn('React-Modal: "htmlOpenClassName" prop has been modified. This may cause unexpected behavior when multiple modals are open.');
              }
            }
            if (this.props.isOpen && !prevProps.isOpen) {
              this.open();
            } else if (!this.props.isOpen && prevProps.isOpen) {
              this.close();
            }
            if (this.props.shouldFocusAfterRender && this.state.isOpen && !prevState.isOpen) {
              this.focusContent();
            }
          }
        }, {
          key: "componentWillUnmount",
          value: function componentWillUnmount() {
            if (this.state.isOpen) {
              this.afterClose();
            }
            clearTimeout(this.closeTimer);
            cancelAnimationFrame(this.openAnimationFrame);
          }
        }, {
          key: "beforeOpen",
          value: function beforeOpen() {
            var _props = this.props, appElement = _props.appElement, ariaHideApp = _props.ariaHideApp, htmlOpenClassName = _props.htmlOpenClassName, bodyOpenClassName = _props.bodyOpenClassName;
            bodyOpenClassName && classList.add(document.body, bodyOpenClassName);
            htmlOpenClassName && classList.add(document.getElementsByTagName("html")[0], htmlOpenClassName);
            if (ariaHideApp) {
              ariaHiddenInstances += 1;
              ariaAppHider.hide(appElement);
            }
            _portalOpenInstances2.default.register(this);
          }
        }, {
          key: "render",
          value: function render() {
            var _props2 = this.props, id = _props2.id, className = _props2.className, overlayClassName = _props2.overlayClassName, defaultStyles = _props2.defaultStyles, children = _props2.children;
            var contentStyles = className ? {} : defaultStyles.content;
            var overlayStyles = overlayClassName ? {} : defaultStyles.overlay;
            if (this.shouldBeClosed()) {
              return null;
            }
            var overlayProps = {
              ref: this.setOverlayRef,
              className: this.buildClassName("overlay", overlayClassName),
              style: _extends2({}, overlayStyles, this.props.style.overlay),
              onClick: this.handleOverlayOnClick,
              onMouseDown: this.handleOverlayOnMouseDown
            };
            var contentProps = _extends2({
              id,
              ref: this.setContentRef,
              style: _extends2({}, contentStyles, this.props.style.content),
              className: this.buildClassName("content", className),
              tabIndex: "-1",
              onKeyDown: this.handleKeyDown,
              onMouseDown: this.handleContentOnMouseDown,
              onMouseUp: this.handleContentOnMouseUp,
              onClick: this.handleContentOnClick,
              role: this.props.role,
              "aria-label": this.props.contentLabel
            }, this.attributesFromObject("aria", _extends2({ modal: true }, this.props.aria)), this.attributesFromObject("data", this.props.data || {}), {
              "data-testid": this.props.testId
            });
            var contentElement = this.props.contentElement(contentProps, children);
            return this.props.overlayElement(overlayProps, contentElement);
          }
        }]);
        return ModalPortal2;
      }(_react.Component);
      ModalPortal.defaultProps = {
        style: {
          overlay: {},
          content: {}
        },
        defaultStyles: {}
      };
      ModalPortal.propTypes = {
        isOpen: _propTypes2.default.bool.isRequired,
        defaultStyles: _propTypes2.default.shape({
          content: _propTypes2.default.object,
          overlay: _propTypes2.default.object
        }),
        style: _propTypes2.default.shape({
          content: _propTypes2.default.object,
          overlay: _propTypes2.default.object
        }),
        className: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]),
        overlayClassName: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]),
        bodyOpenClassName: _propTypes2.default.string,
        htmlOpenClassName: _propTypes2.default.string,
        ariaHideApp: _propTypes2.default.bool,
        appElement: _propTypes2.default.oneOfType([_propTypes2.default.instanceOf(_safeHTMLElement2.default), _propTypes2.default.instanceOf(_safeHTMLElement.SafeHTMLCollection), _propTypes2.default.instanceOf(_safeHTMLElement.SafeNodeList), _propTypes2.default.arrayOf(_propTypes2.default.instanceOf(_safeHTMLElement2.default))]),
        onAfterOpen: _propTypes2.default.func,
        onAfterClose: _propTypes2.default.func,
        onRequestClose: _propTypes2.default.func,
        closeTimeoutMS: _propTypes2.default.number,
        shouldFocusAfterRender: _propTypes2.default.bool,
        shouldCloseOnOverlayClick: _propTypes2.default.bool,
        shouldReturnFocusAfterClose: _propTypes2.default.bool,
        preventScroll: _propTypes2.default.bool,
        role: _propTypes2.default.string,
        contentLabel: _propTypes2.default.string,
        aria: _propTypes2.default.object,
        data: _propTypes2.default.object,
        children: _propTypes2.default.node,
        shouldCloseOnEsc: _propTypes2.default.bool,
        overlayRef: _propTypes2.default.func,
        contentRef: _propTypes2.default.func,
        id: _propTypes2.default.string,
        overlayElement: _propTypes2.default.func,
        contentElement: _propTypes2.default.func,
        testId: _propTypes2.default.string
      };
      exports.default = ModalPortal;
      module.exports = exports["default"];
    }
  });

  // ../../node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js
  var react_lifecycles_compat_es_exports = {};
  __export(react_lifecycles_compat_es_exports, {
    polyfill: () => polyfill
  });
  function componentWillMount() {
    var state = this.constructor.getDerivedStateFromProps(this.props, this.state);
    if (state !== null && state !== void 0) {
      this.setState(state);
    }
  }
  function componentWillReceiveProps(nextProps) {
    function updater(prevState) {
      var state = this.constructor.getDerivedStateFromProps(nextProps, prevState);
      return state !== null && state !== void 0 ? state : null;
    }
    this.setState(updater.bind(this));
  }
  function componentWillUpdate(nextProps, nextState) {
    try {
      var prevProps = this.props;
      var prevState = this.state;
      this.props = nextProps;
      this.state = nextState;
      this.__reactInternalSnapshotFlag = true;
      this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(prevProps, prevState);
    } finally {
      this.props = prevProps;
      this.state = prevState;
    }
  }
  function polyfill(Component) {
    var prototype = Component.prototype;
    if (!prototype || !prototype.isReactComponent) {
      throw new Error("Can only polyfill class components");
    }
    if (typeof Component.getDerivedStateFromProps !== "function" && typeof prototype.getSnapshotBeforeUpdate !== "function") {
      return Component;
    }
    var foundWillMountName = null;
    var foundWillReceivePropsName = null;
    var foundWillUpdateName = null;
    if (typeof prototype.componentWillMount === "function") {
      foundWillMountName = "componentWillMount";
    } else if (typeof prototype.UNSAFE_componentWillMount === "function") {
      foundWillMountName = "UNSAFE_componentWillMount";
    }
    if (typeof prototype.componentWillReceiveProps === "function") {
      foundWillReceivePropsName = "componentWillReceiveProps";
    } else if (typeof prototype.UNSAFE_componentWillReceiveProps === "function") {
      foundWillReceivePropsName = "UNSAFE_componentWillReceiveProps";
    }
    if (typeof prototype.componentWillUpdate === "function") {
      foundWillUpdateName = "componentWillUpdate";
    } else if (typeof prototype.UNSAFE_componentWillUpdate === "function") {
      foundWillUpdateName = "UNSAFE_componentWillUpdate";
    }
    if (foundWillMountName !== null || foundWillReceivePropsName !== null || foundWillUpdateName !== null) {
      var componentName = Component.displayName || Component.name;
      var newApiName = typeof Component.getDerivedStateFromProps === "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
      throw Error("Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n" + componentName + " uses " + newApiName + " but also contains the following legacy lifecycles:" + (foundWillMountName !== null ? "\n  " + foundWillMountName : "") + (foundWillReceivePropsName !== null ? "\n  " + foundWillReceivePropsName : "") + (foundWillUpdateName !== null ? "\n  " + foundWillUpdateName : "") + "\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://fb.me/react-async-component-lifecycle-hooks");
    }
    if (typeof Component.getDerivedStateFromProps === "function") {
      prototype.componentWillMount = componentWillMount;
      prototype.componentWillReceiveProps = componentWillReceiveProps;
    }
    if (typeof prototype.getSnapshotBeforeUpdate === "function") {
      if (typeof prototype.componentDidUpdate !== "function") {
        throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");
      }
      prototype.componentWillUpdate = componentWillUpdate;
      var componentDidUpdate = prototype.componentDidUpdate;
      prototype.componentDidUpdate = function componentDidUpdatePolyfill(prevProps, prevState, maybeSnapshot) {
        var snapshot = this.__reactInternalSnapshotFlag ? this.__reactInternalSnapshot : maybeSnapshot;
        componentDidUpdate.call(this, prevProps, prevState, snapshot);
      };
    }
    return Component;
  }
  var init_react_lifecycles_compat_es = __esm({
    "../../node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js"() {
      componentWillMount.__suppressDeprecationWarning = true;
      componentWillReceiveProps.__suppressDeprecationWarning = true;
      componentWillUpdate.__suppressDeprecationWarning = true;
    }
  });

  // ../../node_modules/react-modal/lib/components/Modal.js
  var require_Modal = __commonJS({
    "../../node_modules/react-modal/lib/components/Modal.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.bodyOpenClassName = exports.portalClassName = void 0;
      var _extends2 = Object.assign || function(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
        return target;
      };
      var _createClass = function() {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor)
              descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }
        return function(Constructor, protoProps, staticProps) {
          if (protoProps)
            defineProperties(Constructor.prototype, protoProps);
          if (staticProps)
            defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();
      var _react = require_react();
      var _react2 = _interopRequireDefault(_react);
      var _reactDom = require_react_dom();
      var _reactDom2 = _interopRequireDefault(_reactDom);
      var _propTypes = require_prop_types();
      var _propTypes2 = _interopRequireDefault(_propTypes);
      var _ModalPortal = require_ModalPortal();
      var _ModalPortal2 = _interopRequireDefault(_ModalPortal);
      var _ariaAppHider = require_ariaAppHider();
      var ariaAppHider = _interopRequireWildcard(_ariaAppHider);
      var _safeHTMLElement = require_safeHTMLElement();
      var _safeHTMLElement2 = _interopRequireDefault(_safeHTMLElement);
      var _reactLifecyclesCompat = (init_react_lifecycles_compat_es(), __toCommonJS(react_lifecycles_compat_es_exports));
      function _interopRequireWildcard(obj) {
        if (obj && obj.__esModule) {
          return obj;
        } else {
          var newObj = {};
          if (obj != null) {
            for (var key in obj) {
              if (Object.prototype.hasOwnProperty.call(obj, key))
                newObj[key] = obj[key];
            }
          }
          newObj.default = obj;
          return newObj;
        }
      }
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _possibleConstructorReturn(self, call) {
        if (!self) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return call && (typeof call === "object" || typeof call === "function") ? call : self;
      }
      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
        if (superClass)
          Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
      }
      var portalClassName = exports.portalClassName = "ReactModalPortal";
      var bodyOpenClassName = exports.bodyOpenClassName = "ReactModal__Body--open";
      var isReact16 = _safeHTMLElement.canUseDOM && _reactDom2.default.createPortal !== void 0;
      var createHTMLElement = function createHTMLElement2(name) {
        return document.createElement(name);
      };
      var getCreatePortal = function getCreatePortal2() {
        return isReact16 ? _reactDom2.default.createPortal : _reactDom2.default.unstable_renderSubtreeIntoContainer;
      };
      function getParentElement(parentSelector) {
        return parentSelector();
      }
      var Modal = function(_Component) {
        _inherits(Modal2, _Component);
        function Modal2() {
          var _ref;
          var _temp, _this, _ret;
          _classCallCheck(this, Modal2);
          for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Modal2.__proto__ || Object.getPrototypeOf(Modal2)).call.apply(_ref, [this].concat(args))), _this), _this.removePortal = function() {
            !isReact16 && _reactDom2.default.unmountComponentAtNode(_this.node);
            var parent = getParentElement(_this.props.parentSelector);
            if (parent && parent.contains(_this.node)) {
              parent.removeChild(_this.node);
            } else {
              console.warn('React-Modal: "parentSelector" prop did not returned any DOM element. Make sure that the parent element is unmounted to avoid any memory leaks.');
            }
          }, _this.portalRef = function(ref) {
            _this.portal = ref;
          }, _this.renderPortal = function(props) {
            var createPortal = getCreatePortal();
            var portal = createPortal(_this, _react2.default.createElement(_ModalPortal2.default, _extends2({ defaultStyles: Modal2.defaultStyles }, props)), _this.node);
            _this.portalRef(portal);
          }, _temp), _possibleConstructorReturn(_this, _ret);
        }
        _createClass(Modal2, [{
          key: "componentDidMount",
          value: function componentDidMount() {
            if (!_safeHTMLElement.canUseDOM)
              return;
            if (!isReact16) {
              this.node = createHTMLElement("div");
            }
            this.node.className = this.props.portalClassName;
            var parent = getParentElement(this.props.parentSelector);
            parent.appendChild(this.node);
            !isReact16 && this.renderPortal(this.props);
          }
        }, {
          key: "getSnapshotBeforeUpdate",
          value: function getSnapshotBeforeUpdate(prevProps) {
            var prevParent = getParentElement(prevProps.parentSelector);
            var nextParent = getParentElement(this.props.parentSelector);
            return { prevParent, nextParent };
          }
        }, {
          key: "componentDidUpdate",
          value: function componentDidUpdate(prevProps, _, snapshot) {
            if (!_safeHTMLElement.canUseDOM)
              return;
            var _props = this.props, isOpen = _props.isOpen, portalClassName2 = _props.portalClassName;
            if (prevProps.portalClassName !== portalClassName2) {
              this.node.className = portalClassName2;
            }
            var prevParent = snapshot.prevParent, nextParent = snapshot.nextParent;
            if (nextParent !== prevParent) {
              prevParent.removeChild(this.node);
              nextParent.appendChild(this.node);
            }
            if (!prevProps.isOpen && !isOpen)
              return;
            !isReact16 && this.renderPortal(this.props);
          }
        }, {
          key: "componentWillUnmount",
          value: function componentWillUnmount() {
            if (!_safeHTMLElement.canUseDOM || !this.node || !this.portal)
              return;
            var state = this.portal.state;
            var now = Date.now();
            var closesAt = state.isOpen && this.props.closeTimeoutMS && (state.closesAt || now + this.props.closeTimeoutMS);
            if (closesAt) {
              if (!state.beforeClose) {
                this.portal.closeWithTimeout();
              }
              setTimeout(this.removePortal, closesAt - now);
            } else {
              this.removePortal();
            }
          }
        }, {
          key: "render",
          value: function render() {
            if (!_safeHTMLElement.canUseDOM || !isReact16) {
              return null;
            }
            if (!this.node && isReact16) {
              this.node = createHTMLElement("div");
            }
            var createPortal = getCreatePortal();
            return createPortal(_react2.default.createElement(_ModalPortal2.default, _extends2({
              ref: this.portalRef,
              defaultStyles: Modal2.defaultStyles
            }, this.props)), this.node);
          }
        }], [{
          key: "setAppElement",
          value: function setAppElement(element) {
            ariaAppHider.setElement(element);
          }
        }]);
        return Modal2;
      }(_react.Component);
      Modal.propTypes = {
        isOpen: _propTypes2.default.bool.isRequired,
        style: _propTypes2.default.shape({
          content: _propTypes2.default.object,
          overlay: _propTypes2.default.object
        }),
        portalClassName: _propTypes2.default.string,
        bodyOpenClassName: _propTypes2.default.string,
        htmlOpenClassName: _propTypes2.default.string,
        className: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.shape({
          base: _propTypes2.default.string.isRequired,
          afterOpen: _propTypes2.default.string.isRequired,
          beforeClose: _propTypes2.default.string.isRequired
        })]),
        overlayClassName: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.shape({
          base: _propTypes2.default.string.isRequired,
          afterOpen: _propTypes2.default.string.isRequired,
          beforeClose: _propTypes2.default.string.isRequired
        })]),
        appElement: _propTypes2.default.oneOfType([_propTypes2.default.instanceOf(_safeHTMLElement2.default), _propTypes2.default.instanceOf(_safeHTMLElement.SafeHTMLCollection), _propTypes2.default.instanceOf(_safeHTMLElement.SafeNodeList), _propTypes2.default.arrayOf(_propTypes2.default.instanceOf(_safeHTMLElement2.default))]),
        onAfterOpen: _propTypes2.default.func,
        onRequestClose: _propTypes2.default.func,
        closeTimeoutMS: _propTypes2.default.number,
        ariaHideApp: _propTypes2.default.bool,
        shouldFocusAfterRender: _propTypes2.default.bool,
        shouldCloseOnOverlayClick: _propTypes2.default.bool,
        shouldReturnFocusAfterClose: _propTypes2.default.bool,
        preventScroll: _propTypes2.default.bool,
        parentSelector: _propTypes2.default.func,
        aria: _propTypes2.default.object,
        data: _propTypes2.default.object,
        role: _propTypes2.default.string,
        contentLabel: _propTypes2.default.string,
        shouldCloseOnEsc: _propTypes2.default.bool,
        overlayRef: _propTypes2.default.func,
        contentRef: _propTypes2.default.func,
        id: _propTypes2.default.string,
        overlayElement: _propTypes2.default.func,
        contentElement: _propTypes2.default.func
      };
      Modal.defaultProps = {
        isOpen: false,
        portalClassName,
        bodyOpenClassName,
        role: "dialog",
        ariaHideApp: true,
        closeTimeoutMS: 0,
        shouldFocusAfterRender: true,
        shouldCloseOnEsc: true,
        shouldCloseOnOverlayClick: true,
        shouldReturnFocusAfterClose: true,
        preventScroll: false,
        parentSelector: function parentSelector() {
          return document.body;
        },
        overlayElement: function overlayElement(props, contentEl) {
          return _react2.default.createElement("div", props, contentEl);
        },
        contentElement: function contentElement(props, children) {
          return _react2.default.createElement("div", props, children);
        }
      };
      Modal.defaultStyles = {
        overlay: {
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(255, 255, 255, 0.75)"
        },
        content: {
          position: "absolute",
          top: "40px",
          left: "40px",
          right: "40px",
          bottom: "40px",
          border: "1px solid #ccc",
          background: "#fff",
          overflow: "auto",
          WebkitOverflowScrolling: "touch",
          borderRadius: "4px",
          outline: "none",
          padding: "20px"
        }
      };
      (0, _reactLifecyclesCompat.polyfill)(Modal);
      if (true) {
        Modal.setCreateHTMLElement = function(fn) {
          return createHTMLElement = fn;
        };
      }
      exports.default = Modal;
    }
  });

  // ../../node_modules/react-modal/lib/index.js
  var require_lib = __commonJS({
    "../../node_modules/react-modal/lib/index.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var _Modal = require_Modal();
      var _Modal2 = _interopRequireDefault(_Modal);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      exports.default = _Modal2.default;
      module.exports = exports["default"];
    }
  });

  // src/Image/index.tsx
  var import_blocks_editor2 = __toESM(require_blocks_editor());
  var import_react6 = __toESM(require_react());

  // src/Image/assets/image.svg
  var React2 = __toESM(require_react());
  var SvgImage = (props) => /* @__PURE__ */ React2.createElement("svg", {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React2.createElement("path", {
    d: "M19.86 15.26V2.47C19.8574 1.814 19.5949 1.18577 19.1301 0.722836C18.6653 0.259906 18.036 -5.33299e-06 17.38 0H2.5C2.16847 0.00126416 1.84048 0.068193 1.53497 0.196922C1.22945 0.32565 0.952464 0.513628 0.72 0.75C0.268046 1.20961 0.0102384 1.82548 1.31138e-09 2.47V17.38C-1.06443e-05 17.7074 0.0647931 18.0315 0.190674 18.3337C0.316554 18.6359 0.50102 18.9102 0.733432 19.1407C0.965844 19.3713 1.2416 19.5535 1.5448 19.677C1.848 19.8004 2.17264 19.8626 2.5 19.86H17.38C18.0369 19.8574 18.6662 19.5952 19.1307 19.1307C19.5952 18.6662 19.8574 18.0369 19.86 17.38V15.38V15.25V15.26ZM15.61 13.04L18.7 15.52L18.79 15.6V17.38C18.7821 17.7478 18.6298 18.0978 18.3659 18.3541C18.1021 18.6105 17.7479 18.7527 17.38 18.75H2.5C2.31454 18.7508 2.13075 18.715 1.95916 18.6446C1.78756 18.5743 1.63153 18.4707 1.5 18.34C1.36742 18.2098 1.26271 18.0541 1.19222 17.8821C1.12174 17.7102 1.08696 17.5258 1.09 17.34V16.47L1.18 16.39L6.25 12.14C6.39167 12.0175 6.5727 11.95 6.76 11.95C6.95222 11.9494 7.13771 12.0208 7.28 12.15L9.8 14.75C10.1157 15.0571 10.5305 15.2414 10.97 15.27C11.4102 15.304 11.8476 15.176 12.2 14.91L14.66 13C14.7961 12.8988 14.9604 12.8428 15.13 12.84C15.2999 12.8407 15.4649 12.8969 15.6 13L15.61 13.04ZM18.78 13.67V14.19L18.38 13.86L16.26 12.18C15.9416 11.9269 15.5468 11.7891 15.14 11.7891C14.7332 11.7891 14.3384 11.9269 14.02 12.18L11.56 13.97C11.4214 14.0831 11.2489 14.1465 11.07 14.15C10.8861 14.1476 10.7091 14.0803 10.57 13.96L8.02 11.44C7.6917 11.1055 7.24813 10.9089 6.77983 10.8904C6.31152 10.8718 5.85377 11.0326 5.5 11.34L1.5 14.75L1.09 15.1V2.47C1.09 2.28531 1.12654 2.10243 1.19752 1.93192C1.2685 1.76141 1.37252 1.60663 1.50358 1.4765C1.63464 1.34636 1.79016 1.24345 1.96117 1.17368C2.13218 1.10392 2.31531 1.06868 2.5 1.07H17.38C17.5658 1.06696 17.7502 1.10174 17.9221 1.17222C18.0941 1.24271 18.2498 1.34742 18.38 1.48C18.5107 1.61153 18.6143 1.76756 18.6846 1.93916C18.755 2.11075 18.7908 2.29454 18.79 2.48L18.78 13.67Z",
    fill: "#333333"
  }), /* @__PURE__ */ React2.createElement("path", {
    d: "M14.0707 4.37993C13.5919 4.18009 13.0647 4.12687 12.5557 4.22701C12.0467 4.32715 11.5788 4.57613 11.2115 4.94241C10.8441 5.30869 10.5938 5.77578 10.4922 6.28449C10.3905 6.7932 10.4422 7.32062 10.6407 7.79993C10.8466 8.2856 11.1953 8.69714 11.6407 8.97992C12.1453 9.31662 12.7511 9.46778 13.3547 9.4076C13.9584 9.34742 14.5224 9.07963 14.9507 8.64992C15.2546 8.34523 15.4788 7.97034 15.6035 7.5584C15.7281 7.14646 15.7494 6.71016 15.6654 6.28805C15.5813 5.86595 15.3946 5.47104 15.1217 5.13824C14.8488 4.80544 14.4981 4.545 14.1007 4.37993H14.0707ZM14.3507 7.65992C14.1855 7.91702 13.9443 8.11626 13.6607 8.22992C13.3763 8.34874 13.0629 8.38007 12.7607 8.31992C12.4597 8.25811 12.1824 8.11251 11.9607 7.89992C11.7994 7.73572 11.6763 7.53809 11.5999 7.32101C11.5235 7.10393 11.4958 6.87271 11.5187 6.64373C11.5416 6.41475 11.6146 6.1936 11.7324 5.99594C11.8502 5.79828 12.0101 5.62895 12.2007 5.49993C12.4548 5.32915 12.7544 5.23857 13.0607 5.23992C13.4736 5.24265 13.8687 5.40791 14.1607 5.69992C14.3062 5.84383 14.4217 6.01513 14.5007 6.20392C14.5796 6.39272 14.6204 6.59528 14.6207 6.79993C14.6216 7.10759 14.5273 7.40801 14.3507 7.65992Z",
    fill: "#333333"
  }));

  // src/Image/assets/download.svg
  var React3 = __toESM(require_react());
  var SvgDownload = (props) => /* @__PURE__ */ React3.createElement("svg", {
    width: 28,
    height: 26,
    viewBox: "0 0 26 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React3.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M13 25C19.9036 25 25.5 19.4036 25.5 12.5C25.5 5.59644 19.9036 0 13 0C6.09644 0 0.5 5.59644 0.5 12.5C0.5 19.4036 6.09644 25 13 25ZM17.6328 15.9581L13.5555 19.9162C13.4826 19.9868 13.396 20.0428 13.3006 20.081C13.2053 20.1193 13.1031 20.1389 12.9998 20.1389C12.8966 20.1389 12.7944 20.1191 12.6991 20.0808C12.6038 20.0426 12.5172 19.9865 12.4444 19.9158L8.36709 15.9578C8.22042 15.8153 8.13834 15.6225 8.13889 15.4216C8.13944 15.2207 8.22258 15.0282 8.37002 14.8865C8.51747 14.7449 8.71713 14.6656 8.92509 14.6661C9.13305 14.6666 9.33228 14.7469 9.47894 14.8894L12.2162 17.5465V5.61856C12.2162 5.41767 12.2988 5.22501 12.4459 5.08296C12.5929 4.94091 12.7924 4.86111 13.0003 4.86111C13.2083 4.86111 13.4077 4.94091 13.5548 5.08296C13.7018 5.22501 13.7844 5.41767 13.7844 5.61856L13.7844 17.5465L16.5209 14.8894C16.5936 14.8189 16.6799 14.7628 16.7749 14.7245C16.87 14.6862 16.9719 14.6664 17.0749 14.6662C17.1779 14.6659 17.2799 14.6853 17.3752 14.7231C17.4704 14.761 17.557 14.8166 17.63 14.8867C17.703 14.9569 17.761 15.0403 17.8007 15.1321C17.8403 15.2239 17.8609 15.3224 17.8611 15.4219C17.8614 15.5214 17.8413 15.6199 17.8022 15.7119C17.763 15.804 17.7054 15.8876 17.6328 15.9581Z",
    fill: "#222222"
  }));

  // src/Image/assets/mediatheque.svg
  var React4 = __toESM(require_react());
  var SvgMediatheque = (props) => /* @__PURE__ */ React4.createElement("svg", {
    width: 28,
    height: 26,
    viewBox: "0 0 28 26",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React4.createElement("path", {
    d: "M7.25281 20.4814C5.42678 20.4814 3.80262 19.3023 3.21296 17.5469L3.17304 17.4146C3.03389 16.9499 2.97572 16.5588 2.97572 16.1677V8.32471L0.20873 17.6401C-0.147124 19.0102 0.663812 20.4308 2.0245 20.8093L19.6609 25.5728C19.8811 25.6303 20.1012 25.6579 20.3179 25.6579C21.4539 25.6579 22.4918 24.8976 22.7826 23.7771L23.8103 20.4814H7.25281Z",
    fill: "#222222"
  }), /* @__PURE__ */ React4.createElement("path", {
    d: "M10.3885 8.40309C11.6466 8.40309 12.6696 7.37124 12.6696 6.10242C12.6696 4.83361 11.6466 3.80176 10.3885 3.80176C9.1305 3.80176 8.10742 4.83361 8.10742 6.10242C8.10742 7.37124 9.1305 8.40309 10.3885 8.40309Z",
    fill: "#222222"
  }), /* @__PURE__ */ React4.createElement("path", {
    d: "M24.6453 0.350098H7.53694C5.96525 0.350098 4.68555 1.64077 4.68555 3.22593V15.8796C4.68555 17.4648 5.96525 18.7554 7.53694 18.7554H24.6453C26.217 18.7554 27.4967 17.4648 27.4967 15.8796V3.22593C27.4967 1.64077 26.217 0.350098 24.6453 0.350098ZM7.53694 2.65076H24.6453C24.9601 2.65076 25.2156 2.90844 25.2156 3.22593V11.3921L21.6126 7.15202C21.2305 6.69994 20.6773 6.45837 20.0831 6.44456C19.4923 6.44801 18.938 6.71259 18.5593 7.17042L14.3233 12.2986L12.9432 10.9102C12.163 10.1233 10.8936 10.1233 10.1146 10.9102L6.96666 14.0839V3.22593C6.96666 2.90844 7.22215 2.65076 7.53694 2.65076Z",
    fill: "#222222"
  }));

  // ../../node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
      o2.__proto__ = p2;
      return o2;
    };
    return _setPrototypeOf(o, p);
  }

  // ../../node_modules/@babel/runtime/helpers/esm/inheritsLoose.js
  function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    _setPrototypeOf(subClass, superClass);
  }

  // ../../node_modules/react-query/es/core/subscribable.js
  var Subscribable = /* @__PURE__ */ function() {
    function Subscribable2() {
      this.listeners = [];
    }
    var _proto = Subscribable2.prototype;
    _proto.subscribe = function subscribe(listener) {
      var _this = this;
      var callback = listener || function() {
        return void 0;
      };
      this.listeners.push(callback);
      this.onSubscribe();
      return function() {
        _this.listeners = _this.listeners.filter(function(x) {
          return x !== callback;
        });
        _this.onUnsubscribe();
      };
    };
    _proto.hasListeners = function hasListeners() {
      return this.listeners.length > 0;
    };
    _proto.onSubscribe = function onSubscribe() {
    };
    _proto.onUnsubscribe = function onUnsubscribe() {
    };
    return Subscribable2;
  }();

  // ../../node_modules/@babel/runtime/helpers/esm/extends.js
  function _extends() {
    _extends = Object.assign || function(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    return _extends.apply(this, arguments);
  }

  // ../../node_modules/react-query/es/core/utils.js
  var isServer = typeof window === "undefined";
  function noop() {
    return void 0;
  }
  function isValidTimeout(value) {
    return typeof value === "number" && value >= 0 && value !== Infinity;
  }
  function timeUntilStale(updatedAt, staleTime) {
    return Math.max(updatedAt + (staleTime || 0) - Date.now(), 0);
  }
  function parseQueryArgs(arg1, arg2, arg3) {
    if (!isQueryKey(arg1)) {
      return arg1;
    }
    if (typeof arg2 === "function") {
      return _extends({}, arg3, {
        queryKey: arg1,
        queryFn: arg2
      });
    }
    return _extends({}, arg2, {
      queryKey: arg1
    });
  }
  function parseMutationArgs(arg1, arg2, arg3) {
    if (isQueryKey(arg1)) {
      if (typeof arg2 === "function") {
        return _extends({}, arg3, {
          mutationKey: arg1,
          mutationFn: arg2
        });
      }
      return _extends({}, arg2, {
        mutationKey: arg1
      });
    }
    if (typeof arg1 === "function") {
      return _extends({}, arg2, {
        mutationFn: arg1
      });
    }
    return _extends({}, arg1);
  }
  function replaceEqualDeep(a, b) {
    if (a === b) {
      return a;
    }
    var array = Array.isArray(a) && Array.isArray(b);
    if (array || isPlainObject(a) && isPlainObject(b)) {
      var aSize = array ? a.length : Object.keys(a).length;
      var bItems = array ? b : Object.keys(b);
      var bSize = bItems.length;
      var copy = array ? [] : {};
      var equalItems = 0;
      for (var i = 0; i < bSize; i++) {
        var key = array ? i : bItems[i];
        copy[key] = replaceEqualDeep(a[key], b[key]);
        if (copy[key] === a[key]) {
          equalItems++;
        }
      }
      return aSize === bSize && equalItems === aSize ? a : copy;
    }
    return b;
  }
  function shallowEqualObjects(a, b) {
    if (a && !b || b && !a) {
      return false;
    }
    for (var key in a) {
      if (a[key] !== b[key]) {
        return false;
      }
    }
    return true;
  }
  function isPlainObject(o) {
    if (!hasObjectPrototype(o)) {
      return false;
    }
    var ctor = o.constructor;
    if (typeof ctor === "undefined") {
      return true;
    }
    var prot = ctor.prototype;
    if (!hasObjectPrototype(prot)) {
      return false;
    }
    if (!prot.hasOwnProperty("isPrototypeOf")) {
      return false;
    }
    return true;
  }
  function hasObjectPrototype(o) {
    return Object.prototype.toString.call(o) === "[object Object]";
  }
  function isQueryKey(value) {
    return typeof value === "string" || Array.isArray(value);
  }
  function scheduleMicrotask(callback) {
    Promise.resolve().then(callback).catch(function(error) {
      return setTimeout(function() {
        throw error;
      });
    });
  }

  // ../../node_modules/react-query/es/core/focusManager.js
  var FocusManager = /* @__PURE__ */ function(_Subscribable) {
    _inheritsLoose(FocusManager2, _Subscribable);
    function FocusManager2() {
      var _this;
      _this = _Subscribable.call(this) || this;
      _this.setup = function(onFocus) {
        var _window;
        if (!isServer && ((_window = window) == null ? void 0 : _window.addEventListener)) {
          var listener = function listener2() {
            return onFocus();
          };
          window.addEventListener("visibilitychange", listener, false);
          window.addEventListener("focus", listener, false);
          return function() {
            window.removeEventListener("visibilitychange", listener);
            window.removeEventListener("focus", listener);
          };
        }
      };
      return _this;
    }
    var _proto = FocusManager2.prototype;
    _proto.onSubscribe = function onSubscribe() {
      if (!this.cleanup) {
        this.setEventListener(this.setup);
      }
    };
    _proto.onUnsubscribe = function onUnsubscribe() {
      if (!this.hasListeners()) {
        var _this$cleanup;
        (_this$cleanup = this.cleanup) == null ? void 0 : _this$cleanup.call(this);
        this.cleanup = void 0;
      }
    };
    _proto.setEventListener = function setEventListener(setup) {
      var _this$cleanup2, _this2 = this;
      this.setup = setup;
      (_this$cleanup2 = this.cleanup) == null ? void 0 : _this$cleanup2.call(this);
      this.cleanup = setup(function(focused) {
        if (typeof focused === "boolean") {
          _this2.setFocused(focused);
        } else {
          _this2.onFocus();
        }
      });
    };
    _proto.setFocused = function setFocused(focused) {
      this.focused = focused;
      if (focused) {
        this.onFocus();
      }
    };
    _proto.onFocus = function onFocus() {
      this.listeners.forEach(function(listener) {
        listener();
      });
    };
    _proto.isFocused = function isFocused() {
      if (typeof this.focused === "boolean") {
        return this.focused;
      }
      if (typeof document === "undefined") {
        return true;
      }
      return [void 0, "visible", "prerender"].includes(document.visibilityState);
    };
    return FocusManager2;
  }(Subscribable);
  var focusManager = new FocusManager();

  // ../../node_modules/react-query/es/core/retryer.js
  var CancelledError = function CancelledError2(options) {
    this.revert = options == null ? void 0 : options.revert;
    this.silent = options == null ? void 0 : options.silent;
  };
  function isCancelledError(value) {
    return value instanceof CancelledError;
  }

  // ../../node_modules/react-query/es/core/notifyManager.js
  var NotifyManager = /* @__PURE__ */ function() {
    function NotifyManager2() {
      this.queue = [];
      this.transactions = 0;
      this.notifyFn = function(callback) {
        callback();
      };
      this.batchNotifyFn = function(callback) {
        callback();
      };
    }
    var _proto = NotifyManager2.prototype;
    _proto.batch = function batch(callback) {
      var result;
      this.transactions++;
      try {
        result = callback();
      } finally {
        this.transactions--;
        if (!this.transactions) {
          this.flush();
        }
      }
      return result;
    };
    _proto.schedule = function schedule(callback) {
      var _this = this;
      if (this.transactions) {
        this.queue.push(callback);
      } else {
        scheduleMicrotask(function() {
          _this.notifyFn(callback);
        });
      }
    };
    _proto.batchCalls = function batchCalls(callback) {
      var _this2 = this;
      return function() {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        _this2.schedule(function() {
          callback.apply(void 0, args);
        });
      };
    };
    _proto.flush = function flush() {
      var _this3 = this;
      var queue = this.queue;
      this.queue = [];
      if (queue.length) {
        scheduleMicrotask(function() {
          _this3.batchNotifyFn(function() {
            queue.forEach(function(callback) {
              _this3.notifyFn(callback);
            });
          });
        });
      }
    };
    _proto.setNotifyFunction = function setNotifyFunction(fn) {
      this.notifyFn = fn;
    };
    _proto.setBatchNotifyFunction = function setBatchNotifyFunction(fn) {
      this.batchNotifyFn = fn;
    };
    return NotifyManager2;
  }();
  var notifyManager = new NotifyManager();

  // ../../node_modules/react-query/es/core/logger.js
  var logger = console;
  function getLogger() {
    return logger;
  }
  function setLogger(newLogger) {
    logger = newLogger;
  }

  // ../../node_modules/react-query/es/core/mutation.js
  function getDefaultState() {
    return {
      context: void 0,
      data: void 0,
      error: null,
      failureCount: 0,
      isPaused: false,
      status: "idle",
      variables: void 0
    };
  }

  // ../../node_modules/react-query/es/core/queryObserver.js
  var QueryObserver = /* @__PURE__ */ function(_Subscribable) {
    _inheritsLoose(QueryObserver2, _Subscribable);
    function QueryObserver2(client, options) {
      var _this;
      _this = _Subscribable.call(this) || this;
      _this.client = client;
      _this.options = options;
      _this.trackedProps = [];
      _this.selectError = null;
      _this.bindMethods();
      _this.setOptions(options);
      return _this;
    }
    var _proto = QueryObserver2.prototype;
    _proto.bindMethods = function bindMethods() {
      this.remove = this.remove.bind(this);
      this.refetch = this.refetch.bind(this);
    };
    _proto.onSubscribe = function onSubscribe() {
      if (this.listeners.length === 1) {
        this.currentQuery.addObserver(this);
        if (shouldFetchOnMount(this.currentQuery, this.options)) {
          this.executeFetch();
        }
        this.updateTimers();
      }
    };
    _proto.onUnsubscribe = function onUnsubscribe() {
      if (!this.listeners.length) {
        this.destroy();
      }
    };
    _proto.shouldFetchOnReconnect = function shouldFetchOnReconnect() {
      return shouldFetchOn(this.currentQuery, this.options, this.options.refetchOnReconnect);
    };
    _proto.shouldFetchOnWindowFocus = function shouldFetchOnWindowFocus() {
      return shouldFetchOn(this.currentQuery, this.options, this.options.refetchOnWindowFocus);
    };
    _proto.destroy = function destroy() {
      this.listeners = [];
      this.clearTimers();
      this.currentQuery.removeObserver(this);
    };
    _proto.setOptions = function setOptions(options, notifyOptions) {
      var prevOptions = this.options;
      var prevQuery = this.currentQuery;
      this.options = this.client.defaultQueryObserverOptions(options);
      if (typeof this.options.enabled !== "undefined" && typeof this.options.enabled !== "boolean") {
        throw new Error("Expected enabled to be a boolean");
      }
      if (!this.options.queryKey) {
        this.options.queryKey = prevOptions.queryKey;
      }
      this.updateQuery();
      var mounted = this.hasListeners();
      if (mounted && shouldFetchOptionally(this.currentQuery, prevQuery, this.options, prevOptions)) {
        this.executeFetch();
      }
      this.updateResult(notifyOptions);
      if (mounted && (this.currentQuery !== prevQuery || this.options.enabled !== prevOptions.enabled || this.options.staleTime !== prevOptions.staleTime)) {
        this.updateStaleTimeout();
      }
      var nextRefetchInterval = this.computeRefetchInterval();
      if (mounted && (this.currentQuery !== prevQuery || this.options.enabled !== prevOptions.enabled || nextRefetchInterval !== this.currentRefetchInterval)) {
        this.updateRefetchInterval(nextRefetchInterval);
      }
    };
    _proto.getOptimisticResult = function getOptimisticResult(options) {
      var defaultedOptions = this.client.defaultQueryObserverOptions(options);
      var query = this.client.getQueryCache().build(this.client, defaultedOptions);
      return this.createResult(query, defaultedOptions);
    };
    _proto.getCurrentResult = function getCurrentResult() {
      return this.currentResult;
    };
    _proto.trackResult = function trackResult(result, defaultedOptions) {
      var _this2 = this;
      var trackedResult = {};
      var trackProp = function trackProp2(key) {
        if (!_this2.trackedProps.includes(key)) {
          _this2.trackedProps.push(key);
        }
      };
      Object.keys(result).forEach(function(key) {
        Object.defineProperty(trackedResult, key, {
          configurable: false,
          enumerable: true,
          get: function get() {
            trackProp(key);
            return result[key];
          }
        });
      });
      if (defaultedOptions.useErrorBoundary || defaultedOptions.suspense) {
        trackProp("error");
      }
      return trackedResult;
    };
    _proto.getNextResult = function getNextResult(options) {
      var _this3 = this;
      return new Promise(function(resolve, reject) {
        var unsubscribe = _this3.subscribe(function(result) {
          if (!result.isFetching) {
            unsubscribe();
            if (result.isError && (options == null ? void 0 : options.throwOnError)) {
              reject(result.error);
            } else {
              resolve(result);
            }
          }
        });
      });
    };
    _proto.getCurrentQuery = function getCurrentQuery() {
      return this.currentQuery;
    };
    _proto.remove = function remove() {
      this.client.getQueryCache().remove(this.currentQuery);
    };
    _proto.refetch = function refetch(options) {
      return this.fetch(_extends({}, options, {
        meta: {
          refetchPage: options == null ? void 0 : options.refetchPage
        }
      }));
    };
    _proto.fetchOptimistic = function fetchOptimistic(options) {
      var _this4 = this;
      var defaultedOptions = this.client.defaultQueryObserverOptions(options);
      var query = this.client.getQueryCache().build(this.client, defaultedOptions);
      return query.fetch().then(function() {
        return _this4.createResult(query, defaultedOptions);
      });
    };
    _proto.fetch = function fetch(fetchOptions) {
      var _this5 = this;
      return this.executeFetch(fetchOptions).then(function() {
        _this5.updateResult();
        return _this5.currentResult;
      });
    };
    _proto.executeFetch = function executeFetch(fetchOptions) {
      this.updateQuery();
      var promise = this.currentQuery.fetch(this.options, fetchOptions);
      if (!(fetchOptions == null ? void 0 : fetchOptions.throwOnError)) {
        promise = promise.catch(noop);
      }
      return promise;
    };
    _proto.updateStaleTimeout = function updateStaleTimeout() {
      var _this6 = this;
      this.clearStaleTimeout();
      if (isServer || this.currentResult.isStale || !isValidTimeout(this.options.staleTime)) {
        return;
      }
      var time = timeUntilStale(this.currentResult.dataUpdatedAt, this.options.staleTime);
      var timeout = time + 1;
      this.staleTimeoutId = setTimeout(function() {
        if (!_this6.currentResult.isStale) {
          _this6.updateResult();
        }
      }, timeout);
    };
    _proto.computeRefetchInterval = function computeRefetchInterval() {
      var _this$options$refetch;
      return typeof this.options.refetchInterval === "function" ? this.options.refetchInterval(this.currentResult.data, this.currentQuery) : (_this$options$refetch = this.options.refetchInterval) != null ? _this$options$refetch : false;
    };
    _proto.updateRefetchInterval = function updateRefetchInterval(nextInterval) {
      var _this7 = this;
      this.clearRefetchInterval();
      this.currentRefetchInterval = nextInterval;
      if (isServer || this.options.enabled === false || !isValidTimeout(this.currentRefetchInterval) || this.currentRefetchInterval === 0) {
        return;
      }
      this.refetchIntervalId = setInterval(function() {
        if (_this7.options.refetchIntervalInBackground || focusManager.isFocused()) {
          _this7.executeFetch();
        }
      }, this.currentRefetchInterval);
    };
    _proto.updateTimers = function updateTimers() {
      this.updateStaleTimeout();
      this.updateRefetchInterval(this.computeRefetchInterval());
    };
    _proto.clearTimers = function clearTimers() {
      this.clearStaleTimeout();
      this.clearRefetchInterval();
    };
    _proto.clearStaleTimeout = function clearStaleTimeout() {
      clearTimeout(this.staleTimeoutId);
      this.staleTimeoutId = void 0;
    };
    _proto.clearRefetchInterval = function clearRefetchInterval() {
      clearInterval(this.refetchIntervalId);
      this.refetchIntervalId = void 0;
    };
    _proto.createResult = function createResult(query, options) {
      var prevQuery = this.currentQuery;
      var prevOptions = this.options;
      var prevResult = this.currentResult;
      var prevResultState = this.currentResultState;
      var prevResultOptions = this.currentResultOptions;
      var queryChange = query !== prevQuery;
      var queryInitialState = queryChange ? query.state : this.currentQueryInitialState;
      var prevQueryResult = queryChange ? this.currentResult : this.previousQueryResult;
      var state = query.state;
      var dataUpdatedAt = state.dataUpdatedAt, error = state.error, errorUpdatedAt = state.errorUpdatedAt, isFetching = state.isFetching, status = state.status;
      var isPreviousData = false;
      var isPlaceholderData = false;
      var data;
      if (options.optimisticResults) {
        var mounted = this.hasListeners();
        var fetchOnMount = !mounted && shouldFetchOnMount(query, options);
        var fetchOptionally = mounted && shouldFetchOptionally(query, prevQuery, options, prevOptions);
        if (fetchOnMount || fetchOptionally) {
          isFetching = true;
          if (!dataUpdatedAt) {
            status = "loading";
          }
        }
      }
      if (options.keepPreviousData && !state.dataUpdateCount && (prevQueryResult == null ? void 0 : prevQueryResult.isSuccess) && status !== "error") {
        data = prevQueryResult.data;
        dataUpdatedAt = prevQueryResult.dataUpdatedAt;
        status = prevQueryResult.status;
        isPreviousData = true;
      } else if (options.select && typeof state.data !== "undefined") {
        if (prevResult && state.data === (prevResultState == null ? void 0 : prevResultState.data) && options.select === this.selectFn) {
          data = this.selectResult;
        } else {
          try {
            this.selectFn = options.select;
            data = options.select(state.data);
            if (options.structuralSharing !== false) {
              data = replaceEqualDeep(prevResult == null ? void 0 : prevResult.data, data);
            }
            this.selectResult = data;
            this.selectError = null;
          } catch (selectError) {
            getLogger().error(selectError);
            this.selectError = selectError;
          }
        }
      } else {
        data = state.data;
      }
      if (typeof options.placeholderData !== "undefined" && typeof data === "undefined" && (status === "loading" || status === "idle")) {
        var placeholderData;
        if ((prevResult == null ? void 0 : prevResult.isPlaceholderData) && options.placeholderData === (prevResultOptions == null ? void 0 : prevResultOptions.placeholderData)) {
          placeholderData = prevResult.data;
        } else {
          placeholderData = typeof options.placeholderData === "function" ? options.placeholderData() : options.placeholderData;
          if (options.select && typeof placeholderData !== "undefined") {
            try {
              placeholderData = options.select(placeholderData);
              if (options.structuralSharing !== false) {
                placeholderData = replaceEqualDeep(prevResult == null ? void 0 : prevResult.data, placeholderData);
              }
              this.selectError = null;
            } catch (selectError) {
              getLogger().error(selectError);
              this.selectError = selectError;
            }
          }
        }
        if (typeof placeholderData !== "undefined") {
          status = "success";
          data = placeholderData;
          isPlaceholderData = true;
        }
      }
      if (this.selectError) {
        error = this.selectError;
        data = this.selectResult;
        errorUpdatedAt = Date.now();
        status = "error";
      }
      var result = {
        status,
        isLoading: status === "loading",
        isSuccess: status === "success",
        isError: status === "error",
        isIdle: status === "idle",
        data,
        dataUpdatedAt,
        error,
        errorUpdatedAt,
        failureCount: state.fetchFailureCount,
        errorUpdateCount: state.errorUpdateCount,
        isFetched: state.dataUpdateCount > 0 || state.errorUpdateCount > 0,
        isFetchedAfterMount: state.dataUpdateCount > queryInitialState.dataUpdateCount || state.errorUpdateCount > queryInitialState.errorUpdateCount,
        isFetching,
        isRefetching: isFetching && status !== "loading",
        isLoadingError: status === "error" && state.dataUpdatedAt === 0,
        isPlaceholderData,
        isPreviousData,
        isRefetchError: status === "error" && state.dataUpdatedAt !== 0,
        isStale: isStale(query, options),
        refetch: this.refetch,
        remove: this.remove
      };
      return result;
    };
    _proto.shouldNotifyListeners = function shouldNotifyListeners(result, prevResult) {
      if (!prevResult) {
        return true;
      }
      var _this$options = this.options, notifyOnChangeProps = _this$options.notifyOnChangeProps, notifyOnChangePropsExclusions = _this$options.notifyOnChangePropsExclusions;
      if (!notifyOnChangeProps && !notifyOnChangePropsExclusions) {
        return true;
      }
      if (notifyOnChangeProps === "tracked" && !this.trackedProps.length) {
        return true;
      }
      var includedProps = notifyOnChangeProps === "tracked" ? this.trackedProps : notifyOnChangeProps;
      return Object.keys(result).some(function(key) {
        var typedKey = key;
        var changed = result[typedKey] !== prevResult[typedKey];
        var isIncluded = includedProps == null ? void 0 : includedProps.some(function(x) {
          return x === key;
        });
        var isExcluded = notifyOnChangePropsExclusions == null ? void 0 : notifyOnChangePropsExclusions.some(function(x) {
          return x === key;
        });
        return changed && !isExcluded && (!includedProps || isIncluded);
      });
    };
    _proto.updateResult = function updateResult(notifyOptions) {
      var prevResult = this.currentResult;
      this.currentResult = this.createResult(this.currentQuery, this.options);
      this.currentResultState = this.currentQuery.state;
      this.currentResultOptions = this.options;
      if (shallowEqualObjects(this.currentResult, prevResult)) {
        return;
      }
      var defaultNotifyOptions = {
        cache: true
      };
      if ((notifyOptions == null ? void 0 : notifyOptions.listeners) !== false && this.shouldNotifyListeners(this.currentResult, prevResult)) {
        defaultNotifyOptions.listeners = true;
      }
      this.notify(_extends({}, defaultNotifyOptions, notifyOptions));
    };
    _proto.updateQuery = function updateQuery() {
      var query = this.client.getQueryCache().build(this.client, this.options);
      if (query === this.currentQuery) {
        return;
      }
      var prevQuery = this.currentQuery;
      this.currentQuery = query;
      this.currentQueryInitialState = query.state;
      this.previousQueryResult = this.currentResult;
      if (this.hasListeners()) {
        prevQuery == null ? void 0 : prevQuery.removeObserver(this);
        query.addObserver(this);
      }
    };
    _proto.onQueryUpdate = function onQueryUpdate(action) {
      var notifyOptions = {};
      if (action.type === "success") {
        notifyOptions.onSuccess = true;
      } else if (action.type === "error" && !isCancelledError(action.error)) {
        notifyOptions.onError = true;
      }
      this.updateResult(notifyOptions);
      if (this.hasListeners()) {
        this.updateTimers();
      }
    };
    _proto.notify = function notify(notifyOptions) {
      var _this8 = this;
      notifyManager.batch(function() {
        if (notifyOptions.onSuccess) {
          _this8.options.onSuccess == null ? void 0 : _this8.options.onSuccess(_this8.currentResult.data);
          _this8.options.onSettled == null ? void 0 : _this8.options.onSettled(_this8.currentResult.data, null);
        } else if (notifyOptions.onError) {
          _this8.options.onError == null ? void 0 : _this8.options.onError(_this8.currentResult.error);
          _this8.options.onSettled == null ? void 0 : _this8.options.onSettled(void 0, _this8.currentResult.error);
        }
        if (notifyOptions.listeners) {
          _this8.listeners.forEach(function(listener) {
            listener(_this8.currentResult);
          });
        }
        if (notifyOptions.cache) {
          _this8.client.getQueryCache().notify({
            query: _this8.currentQuery,
            type: "observerResultsUpdated"
          });
        }
      });
    };
    return QueryObserver2;
  }(Subscribable);
  function shouldLoadOnMount(query, options) {
    return options.enabled !== false && !query.state.dataUpdatedAt && !(query.state.status === "error" && options.retryOnMount === false);
  }
  function shouldFetchOnMount(query, options) {
    return shouldLoadOnMount(query, options) || query.state.dataUpdatedAt > 0 && shouldFetchOn(query, options, options.refetchOnMount);
  }
  function shouldFetchOn(query, options, field) {
    if (options.enabled !== false) {
      var value = typeof field === "function" ? field(query) : field;
      return value === "always" || value !== false && isStale(query, options);
    }
    return false;
  }
  function shouldFetchOptionally(query, prevQuery, options, prevOptions) {
    return options.enabled !== false && (query !== prevQuery || prevOptions.enabled === false) && (!options.suspense || query.state.status !== "error") && isStale(query, options);
  }
  function isStale(query, options) {
    return query.isStaleByTime(options.staleTime);
  }

  // ../../node_modules/react-query/es/core/mutationObserver.js
  var MutationObserver = /* @__PURE__ */ function(_Subscribable) {
    _inheritsLoose(MutationObserver2, _Subscribable);
    function MutationObserver2(client, options) {
      var _this;
      _this = _Subscribable.call(this) || this;
      _this.client = client;
      _this.setOptions(options);
      _this.bindMethods();
      _this.updateResult();
      return _this;
    }
    var _proto = MutationObserver2.prototype;
    _proto.bindMethods = function bindMethods() {
      this.mutate = this.mutate.bind(this);
      this.reset = this.reset.bind(this);
    };
    _proto.setOptions = function setOptions(options) {
      this.options = this.client.defaultMutationOptions(options);
    };
    _proto.onUnsubscribe = function onUnsubscribe() {
      if (!this.listeners.length) {
        var _this$currentMutation;
        (_this$currentMutation = this.currentMutation) == null ? void 0 : _this$currentMutation.removeObserver(this);
      }
    };
    _proto.onMutationUpdate = function onMutationUpdate(action) {
      this.updateResult();
      var notifyOptions = {
        listeners: true
      };
      if (action.type === "success") {
        notifyOptions.onSuccess = true;
      } else if (action.type === "error") {
        notifyOptions.onError = true;
      }
      this.notify(notifyOptions);
    };
    _proto.getCurrentResult = function getCurrentResult() {
      return this.currentResult;
    };
    _proto.reset = function reset() {
      this.currentMutation = void 0;
      this.updateResult();
      this.notify({
        listeners: true
      });
    };
    _proto.mutate = function mutate(variables, options) {
      this.mutateOptions = options;
      if (this.currentMutation) {
        this.currentMutation.removeObserver(this);
      }
      this.currentMutation = this.client.getMutationCache().build(this.client, _extends({}, this.options, {
        variables: typeof variables !== "undefined" ? variables : this.options.variables
      }));
      this.currentMutation.addObserver(this);
      return this.currentMutation.execute();
    };
    _proto.updateResult = function updateResult() {
      var state = this.currentMutation ? this.currentMutation.state : getDefaultState();
      var result = _extends({}, state, {
        isLoading: state.status === "loading",
        isSuccess: state.status === "success",
        isError: state.status === "error",
        isIdle: state.status === "idle",
        mutate: this.mutate,
        reset: this.reset
      });
      this.currentResult = result;
    };
    _proto.notify = function notify(options) {
      var _this2 = this;
      notifyManager.batch(function() {
        if (_this2.mutateOptions) {
          if (options.onSuccess) {
            _this2.mutateOptions.onSuccess == null ? void 0 : _this2.mutateOptions.onSuccess(_this2.currentResult.data, _this2.currentResult.variables, _this2.currentResult.context);
            _this2.mutateOptions.onSettled == null ? void 0 : _this2.mutateOptions.onSettled(_this2.currentResult.data, null, _this2.currentResult.variables, _this2.currentResult.context);
          } else if (options.onError) {
            _this2.mutateOptions.onError == null ? void 0 : _this2.mutateOptions.onError(_this2.currentResult.error, _this2.currentResult.variables, _this2.currentResult.context);
            _this2.mutateOptions.onSettled == null ? void 0 : _this2.mutateOptions.onSettled(void 0, _this2.currentResult.error, _this2.currentResult.variables, _this2.currentResult.context);
          }
        }
        if (options.listeners) {
          _this2.listeners.forEach(function(listener) {
            listener(_this2.currentResult);
          });
        }
      });
    };
    return MutationObserver2;
  }(Subscribable);

  // ../../node_modules/react-query/es/react/reactBatchedUpdates.js
  var import_react_dom = __toESM(require_react_dom());
  var unstable_batchedUpdates = import_react_dom.default.unstable_batchedUpdates;

  // ../../node_modules/react-query/es/react/setBatchUpdatesFn.js
  notifyManager.setBatchNotifyFunction(unstable_batchedUpdates);

  // ../../node_modules/react-query/es/react/logger.js
  var logger2 = console;

  // ../../node_modules/react-query/es/react/setLogger.js
  setLogger(logger2);

  // ../../node_modules/react-query/es/react/QueryClientProvider.js
  var import_react = __toESM(require_react());
  var defaultContext = /* @__PURE__ */ import_react.default.createContext(void 0);
  var QueryClientSharingContext = /* @__PURE__ */ import_react.default.createContext(false);
  function getQueryClientContext(contextSharing) {
    if (contextSharing && typeof window !== "undefined") {
      if (!window.ReactQueryClientContext) {
        window.ReactQueryClientContext = defaultContext;
      }
      return window.ReactQueryClientContext;
    }
    return defaultContext;
  }
  var useQueryClient = function useQueryClient2() {
    var queryClient2 = import_react.default.useContext(getQueryClientContext(import_react.default.useContext(QueryClientSharingContext)));
    if (!queryClient2) {
      throw new Error("No QueryClient set, use QueryClientProvider to set one");
    }
    return queryClient2;
  };
  var QueryClientProvider = function QueryClientProvider2(_ref) {
    var client = _ref.client, _ref$contextSharing = _ref.contextSharing, contextSharing = _ref$contextSharing === void 0 ? false : _ref$contextSharing, children = _ref.children;
    import_react.default.useEffect(function() {
      client.mount();
      return function() {
        client.unmount();
      };
    }, [client]);
    var Context = getQueryClientContext(contextSharing);
    return /* @__PURE__ */ import_react.default.createElement(QueryClientSharingContext.Provider, {
      value: contextSharing
    }, /* @__PURE__ */ import_react.default.createElement(Context.Provider, {
      value: client
    }, children));
  };

  // ../../node_modules/react-query/es/react/QueryErrorResetBoundary.js
  var import_react2 = __toESM(require_react());
  function createValue() {
    var _isReset = false;
    return {
      clearReset: function clearReset() {
        _isReset = false;
      },
      reset: function reset() {
        _isReset = true;
      },
      isReset: function isReset() {
        return _isReset;
      }
    };
  }
  var QueryErrorResetBoundaryContext = /* @__PURE__ */ import_react2.default.createContext(createValue());
  var useQueryErrorResetBoundary = function useQueryErrorResetBoundary2() {
    return import_react2.default.useContext(QueryErrorResetBoundaryContext);
  };

  // ../../node_modules/react-query/es/react/useMutation.js
  var import_react3 = __toESM(require_react());

  // ../../node_modules/react-query/es/react/utils.js
  function shouldThrowError(suspense, _useErrorBoundary, params) {
    if (typeof _useErrorBoundary === "function") {
      return _useErrorBoundary.apply(void 0, params);
    }
    if (typeof _useErrorBoundary === "boolean")
      return _useErrorBoundary;
    return !!suspense;
  }

  // ../../node_modules/react-query/es/react/useMutation.js
  function useMutation(arg1, arg2, arg3) {
    var mountedRef = import_react3.default.useRef(false);
    var _React$useState = import_react3.default.useState(0), forceUpdate = _React$useState[1];
    var options = parseMutationArgs(arg1, arg2, arg3);
    var queryClient2 = useQueryClient();
    var obsRef = import_react3.default.useRef();
    if (!obsRef.current) {
      obsRef.current = new MutationObserver(queryClient2, options);
    } else {
      obsRef.current.setOptions(options);
    }
    var currentResult = obsRef.current.getCurrentResult();
    import_react3.default.useEffect(function() {
      mountedRef.current = true;
      var unsubscribe = obsRef.current.subscribe(notifyManager.batchCalls(function() {
        if (mountedRef.current) {
          forceUpdate(function(x) {
            return x + 1;
          });
        }
      }));
      return function() {
        mountedRef.current = false;
        unsubscribe();
      };
    }, []);
    var mutate = import_react3.default.useCallback(function(variables, mutateOptions) {
      obsRef.current.mutate(variables, mutateOptions).catch(noop);
    }, []);
    if (currentResult.error && shouldThrowError(void 0, obsRef.current.options.useErrorBoundary, [currentResult.error])) {
      throw currentResult.error;
    }
    return _extends({}, currentResult, {
      mutate,
      mutateAsync: currentResult.mutate
    });
  }

  // ../../node_modules/react-query/es/react/useBaseQuery.js
  var import_react4 = __toESM(require_react());
  function useBaseQuery(options, Observer) {
    var mountedRef = import_react4.default.useRef(false);
    var _React$useState = import_react4.default.useState(0), forceUpdate = _React$useState[1];
    var queryClient2 = useQueryClient();
    var errorResetBoundary = useQueryErrorResetBoundary();
    var defaultedOptions = queryClient2.defaultQueryObserverOptions(options);
    defaultedOptions.optimisticResults = true;
    if (defaultedOptions.onError) {
      defaultedOptions.onError = notifyManager.batchCalls(defaultedOptions.onError);
    }
    if (defaultedOptions.onSuccess) {
      defaultedOptions.onSuccess = notifyManager.batchCalls(defaultedOptions.onSuccess);
    }
    if (defaultedOptions.onSettled) {
      defaultedOptions.onSettled = notifyManager.batchCalls(defaultedOptions.onSettled);
    }
    if (defaultedOptions.suspense) {
      if (typeof defaultedOptions.staleTime !== "number") {
        defaultedOptions.staleTime = 1e3;
      }
      if (defaultedOptions.cacheTime === 0) {
        defaultedOptions.cacheTime = 1;
      }
    }
    if (defaultedOptions.suspense || defaultedOptions.useErrorBoundary) {
      if (!errorResetBoundary.isReset()) {
        defaultedOptions.retryOnMount = false;
      }
    }
    var _React$useState2 = import_react4.default.useState(function() {
      return new Observer(queryClient2, defaultedOptions);
    }), observer = _React$useState2[0];
    var result = observer.getOptimisticResult(defaultedOptions);
    import_react4.default.useEffect(function() {
      mountedRef.current = true;
      errorResetBoundary.clearReset();
      var unsubscribe = observer.subscribe(notifyManager.batchCalls(function() {
        if (mountedRef.current) {
          forceUpdate(function(x) {
            return x + 1;
          });
        }
      }));
      observer.updateResult();
      return function() {
        mountedRef.current = false;
        unsubscribe();
      };
    }, [errorResetBoundary, observer]);
    import_react4.default.useEffect(function() {
      observer.setOptions(defaultedOptions, {
        listeners: false
      });
    }, [defaultedOptions, observer]);
    if (defaultedOptions.suspense && result.isLoading) {
      throw observer.fetchOptimistic(defaultedOptions).then(function(_ref) {
        var data = _ref.data;
        defaultedOptions.onSuccess == null ? void 0 : defaultedOptions.onSuccess(data);
        defaultedOptions.onSettled == null ? void 0 : defaultedOptions.onSettled(data, null);
      }).catch(function(error) {
        errorResetBoundary.clearReset();
        defaultedOptions.onError == null ? void 0 : defaultedOptions.onError(error);
        defaultedOptions.onSettled == null ? void 0 : defaultedOptions.onSettled(void 0, error);
      });
    }
    if (result.isError && !errorResetBoundary.isReset() && !result.isFetching && shouldThrowError(defaultedOptions.suspense, defaultedOptions.useErrorBoundary, [result.error, observer.getCurrentQuery()])) {
      throw result.error;
    }
    if (defaultedOptions.notifyOnChangeProps === "tracked") {
      result = observer.trackResult(result, defaultedOptions);
    }
    return result;
  }

  // ../../node_modules/react-query/es/react/useQuery.js
  function useQuery(arg1, arg2, arg3) {
    var parsedOptions = parseQueryArgs(arg1, arg2, arg3);
    return useBaseQuery(parsedOptions, QueryObserver);
  }

  // src/api.ts
  var import_blocks_editor = __toESM(require_blocks_editor());
  function useLibraryImage(options) {
    return useQuery(["LibraryImage", options], () => (0, import_blocks_editor.fetcher)(`/library/image`, {
      method: "GET",
      params: {
        id: options.id || null,
        limit: options.limit || 5,
        offset: options.offset || 0,
        title: options.title || null
      }
    }), {
      keepPreviousData: true,
      onSuccess: (data) => {
      }
    });
  }
  function useCreateImage() {
    const queryClient2 = useQueryClient();
    return useMutation((data) => {
      return (0, import_blocks_editor.fetcher)(`/library/image`, {
        method: "POST",
        headers: {
          "content-type": "multipart/form-data"
        },
        data
      });
    }, {
      onSuccess: (data) => {
        queryClient2.setQueryData(["LibraryImage"], (oldData) => {
          if (oldData && Array.isArray(oldData)) {
            return [...oldData, data];
          }
          return oldData;
        });
      }
    });
  }
  function useDeleteImage() {
    const queryClient2 = useQueryClient();
    return useMutation((id) => {
      return (0, import_blocks_editor.fetcher)(`/library/image/${id}`, {
        method: "DELETE"
      });
    }, {
      onSuccess: (_, id) => {
        queryClient2.setQueriesData(["LibraryImage"], (oldData) => {
          if (oldData && Array.isArray(oldData)) {
            return oldData.filter((i) => i.id !== id);
          }
          return oldData;
        });
      }
    });
  }

  // src/Library/assets/xmark.svg
  var React9 = __toESM(require_react());
  var SvgXmark = (props) => /* @__PURE__ */ React9.createElement("svg", {
    width: 19,
    height: 18,
    viewBox: "0 0 19 18",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React9.createElement("path", {
    d: "M17.5913 15.0762L10.9713 8.67623L17.6013 2.27623C17.728 2.15573 17.829 2.0107 17.898 1.84996C17.9669 1.68923 18.0025 1.51614 18.0025 1.34123C18.0025 1.16632 17.9669 0.993238 17.898 0.832502C17.829 0.671767 17.728 0.526739 17.6013 0.406233C17.3305 0.151704 16.9729 0.00999999 16.6013 0.00999999C16.2296 0.00999999 15.872 0.151704 15.6013 0.406233L9.00125 6.77623L2.40125 0.396233C2.13049 0.141704 1.77286 0 1.40125 0C1.02964 0 0.672011 0.141704 0.401251 0.396233C0.275468 0.518481 0.17531 0.664572 0.10663 0.825969C0.0379507 0.987366 0.00212641 1.16083 0.00125089 1.33623C0.000992191 1.51181 0.0363014 1.68561 0.105048 1.84717C0.173796 2.00873 0.274556 2.15468 0.401251 2.27623L7.03125 8.67623L0.401251 15.0762C0.274474 15.1967 0.173528 15.3418 0.104549 15.5025C0.0355706 15.6632 0 15.8363 0 16.0112C0 16.1861 0.0355706 16.3592 0.104549 16.52C0.173528 16.6807 0.274474 16.8257 0.401251 16.9462C0.675245 17.1943 1.03165 17.3317 1.40125 17.3317C1.77085 17.3317 2.12726 17.1943 2.40125 16.9462L9.00125 10.5762L15.6013 16.9462C15.8731 17.1986 16.2303 17.3388 16.6013 17.3388C16.9722 17.3388 17.3294 17.1986 17.6013 16.9462C17.7307 16.8273 17.834 16.6828 17.9046 16.5218C17.9753 16.3609 18.0118 16.187 18.0118 16.0112C18.0118 15.8355 17.9753 15.6616 17.9046 15.5007C17.834 15.3397 17.7307 15.1952 17.6013 15.0762H17.5913Z",
    fill: "#222222"
  }));

  // src/Library/index.tsx
  var import_react_modal = __toESM(require_lib());
  var import_react5 = __toESM(require_react());
  var LibraryContent = ({
    limit = 20,
    onSelect
  }) => {
    const [offset, setOffset] = (0, import_react5.useState)(0);
    const [title, setTitle] = (0, import_react5.useState)("");
    const images = useLibraryImage({ offset, limit, title });
    const deleteMutation = useDeleteImage();
    return /* @__PURE__ */ React.createElement("div", {
      className: "Library"
    }, /* @__PURE__ */ React.createElement("div", {
      className: "Library__Filters"
    }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", {
      htmlFor: "library-search"
    }, "Rechercher dans le catalogue"), /* @__PURE__ */ React.createElement("input", {
      className: "Input__Text",
      placeholder: "Entrez un nom, une r\xE9f\xE9rence, ...",
      type: "text",
      name: "library-search",
      id: "library-search",
      value: title,
      onChange: (e) => setTitle(e.target.value)
    })), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", {
      htmlFor: "category-filter"
    }, "Filtrer par cat\xE9gorie"), /* @__PURE__ */ React.createElement("select", {
      className: "Input__Select",
      name: "category-filter",
      id: "category-filter"
    }, /* @__PURE__ */ React.createElement("option", {
      value: ""
    }, "tag 1"), /* @__PURE__ */ React.createElement("option", {
      value: ""
    }, "tag 2")))), /* @__PURE__ */ React.createElement("div", {
      className: "Library__Content"
    }, images.data?.map((image) => {
      return /* @__PURE__ */ React.createElement("div", {
        className: "Library__Item"
      }, /* @__PURE__ */ React.createElement("button", {
        onClick: () => {
          onSelect(image);
        },
        className: "Library__Image",
        key: image.id
      }, /* @__PURE__ */ React.createElement("img", {
        width: "150",
        height: "150",
        loading: "lazy",
        src: `/image-library/${image.id}/full/^!150,150/0/default.webp`
      }), /* @__PURE__ */ React.createElement("span", {
        className: "Library__Image__Title"
      }, image.title)), /* @__PURE__ */ React.createElement("button", {
        type: "button",
        className: "BlockImage__Button",
        onClick: () => deleteMutation.mutate(image.id),
        disabled: deleteMutation.isLoading
      }, "supprimer"));
    })));
  };
  function Library({
    isOpen,
    setIsOpen,
    limit = 20,
    onSelect
  }) {
    return /* @__PURE__ */ React.createElement(import_react_modal.default, {
      isOpen,
      onRequestClose: () => setIsOpen(false),
      className: "Modal-Library",
      overlayClassName: "Overlay"
    }, /* @__PURE__ */ React.createElement("div", {
      className: "Modal__Wrapper"
    }, /* @__PURE__ */ React.createElement("div", {
      className: "Modal__Header"
    }, /* @__PURE__ */ React.createElement("button", {
      onClick: () => setIsOpen(false),
      className: "Modal__Header__Close"
    }, /* @__PURE__ */ React.createElement(SvgXmark, null)), /* @__PURE__ */ React.createElement("div", {
      className: "Modal__Header__Title"
    }, "Rechercher une image")), /* @__PURE__ */ React.createElement("div", {
      className: "Modal__Content"
    }, /* @__PURE__ */ React.createElement(import_react5.Suspense, {
      fallback: /* @__PURE__ */ React.createElement("i", {
        className: "Loader fa fa-circle-notch fa-spin"
      })
    }, /* @__PURE__ */ React.createElement(LibraryContent, {
      onSelect,
      limit
    })))));
  }

  // src/Image/index.tsx
  var FromLocal = ({ onSelect }) => {
    const createImage = useCreateImage();
    return /* @__PURE__ */ React.createElement("div", {
      className: "BlockImage__FromLocal"
    }, /* @__PURE__ */ React.createElement("div", {
      className: "BlockImage__FromLocal__Icon"
    }, /* @__PURE__ */ React.createElement(SvgDownload, null)), /* @__PURE__ */ React.createElement("form", {
      onSubmit: (e) => {
        e.preventDefault();
      }
    }, /* @__PURE__ */ React.createElement("label", {
      className: "BlockImage__Button",
      htmlFor: "image"
    }, "T\xE9l\xE9charger une image"), /* @__PURE__ */ React.createElement("input", {
      className: "BlockImage__FromLocal__FileInput",
      type: "file",
      accept: "image/*",
      name: "image",
      id: "image",
      onChange: async (e) => {
        if (e.target.files) {
          const formData = new FormData();
          formData.append("image", e.target.files[0]);
          const res = await createImage.mutateAsync(formData);
          onSelect(res);
        }
      }
    }), /* @__PURE__ */ React.createElement("span", null, "ou d\xE9posez une image")));
  };
  var FromLibrary = ({ onSelect }) => {
    const [isOpen, setIsOpen] = (0, import_react6.useState)(false);
    return /* @__PURE__ */ React.createElement("div", {
      className: "BlockImage__FromLibrary"
    }, /* @__PURE__ */ React.createElement("div", {
      className: "BlockImage__FromLibrary__Icon"
    }, /* @__PURE__ */ React.createElement(SvgMediatheque, null)), /* @__PURE__ */ React.createElement("button", {
      onClick: () => {
        setIsOpen(true);
      }
    }, /* @__PURE__ */ React.createElement("span", null, "Selectionnez une image depuis votre m\xE9diath\xE8que")), isOpen ? /* @__PURE__ */ React.createElement(Library, {
      isOpen,
      setIsOpen,
      onSelect: (image) => {
        setIsOpen(false);
        onSelect(image);
      }
    }) : null);
  };
  var Preview = ({
    id,
    fileName,
    setEditMode
  }) => {
    if (!id)
      return null;
    return /* @__PURE__ */ React.createElement("div", {
      className: "BlockImage__Preview"
    }, /* @__PURE__ */ React.createElement("img", {
      src: `/image-library/${id}/full/^!220,220/0/default.webp`,
      alt: ""
    }), /* @__PURE__ */ React.createElement("div", {
      className: "BlockImage__Preview__Infos"
    }, /* @__PURE__ */ React.createElement("span", {
      className: "BlockImage__Preview__FileName"
    }, fileName), /* @__PURE__ */ React.createElement("button", {
      className: "BlockImage__Button",
      onClick: () => {
        setEditMode(true);
      }
    }, "Remplacer")));
  };
  var ImageInfos = ({
    image,
    onChange
  }) => {
    return /* @__PURE__ */ React.createElement("form", {
      className: "BlockImage__Infos__Form",
      onSubmit: (e) => {
        e.preventDefault();
      }
    }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", {
      htmlFor: ""
    }, "Titre de l'image"), /* @__PURE__ */ React.createElement("input", {
      className: "Input__Text",
      type: "text",
      name: "title",
      value: image.title,
      placeholder: "Titre de l'image",
      onChange: (e) => {
        onChange({
          title: e.target.value
        });
      }
    })), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", null, "Lien au clic (optionnel)"), /* @__PURE__ */ React.createElement("input", {
      className: "Input__Text",
      type: "text",
      name: "linkUrl",
      value: image.link?.url || "",
      placeholder: "Lien au clic sur l'image",
      onChange: (e) => {
        onChange({
          link: {
            url: e.target.value
          }
        });
      }
    })));
  };
  var BlockImageComponent = (props) => {
    const { data, onUpdate } = props;
    const [image, setImage] = (0, import_react6.useState)(null);
    const [isEditMode, setEditMode] = (0, import_react6.useState)(false);
    (0, import_react6.useEffect)(() => {
      if (data.id) {
        setImage(data);
        return;
      }
      setEditMode(true);
    }, [data]);
    const onSelect = (image2) => {
      onUpdate(image2);
      setEditMode(false);
    };
    return /* @__PURE__ */ React.createElement("div", {
      className: "BlockImage"
    }, image && !isEditMode ? /* @__PURE__ */ React.createElement("div", {
      className: "BlockImage__Infos"
    }, /* @__PURE__ */ React.createElement(Preview, {
      id: image.id,
      fileName: image.fileName,
      setEditMode
    }), /* @__PURE__ */ React.createElement(ImageInfos, {
      image,
      onChange: (values) => {
        onUpdate({ ...data, ...values });
      }
    })) : null, isEditMode ? /* @__PURE__ */ React.createElement(React.Fragment, null, image?.id ? /* @__PURE__ */ React.createElement("span", {
      style: {
        marginBottom: "15px",
        display: "block",
        fontWeight: 800,
        fontSize: "18px"
      }
    }, `Remplacer l'image "`, image.title, '"') : null, /* @__PURE__ */ React.createElement("div", {
      className: "BlockImage__Upload__Wrapper"
    }, /* @__PURE__ */ React.createElement(FromLocal, {
      onSelect
    }), /* @__PURE__ */ React.createElement(FromLibrary, {
      onSelect
    })), image?.id ? /* @__PURE__ */ React.createElement("button", {
      onClick: () => {
        setEditMode(false);
      },
      style: { marginTop: "15px" },
      className: "BlockImage__Button"
    }, "Annuler") : null) : null);
  };
  var WrappedComponent = (props) => {
    return /* @__PURE__ */ React.createElement(QueryClientProvider, {
      client: import_blocks_editor2.queryClient
    }, /* @__PURE__ */ React.createElement(BlockImageComponent, {
      ...props
    }));
  };
  var initialData = {
    url: null,
    id: null,
    title: "",
    fileName: ""
  };
  var moduleType = {
    id: "blockImage"
  };
  var blockImage = {
    type: moduleType,
    component: WrappedComponent,
    initialData,
    title: {
      default: "Image",
      fr_FR: "Image"
    },
    description: {
      default: "Display an image--",
      fr_FR: "Affiche une image"
    },
    icon: SvgImage,
    image: {
      default: ""
    }
  };
  var Image_default = blockImage;

  // src/index.tsx
  var import_blocks_editor3 = __toESM(require_blocks_editor());
  (0, import_blocks_editor3.registerPlugin)(Image_default);
  console.log("Image plugin registered");
})();
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/
/*!
 * Adapted from jQuery UI core
 *
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/ui-core/
 */
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
//# sourceMappingURL=index.global.js.map