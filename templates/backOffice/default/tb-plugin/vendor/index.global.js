"use strict";
var TheliaMediaLibraryBlock = (() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __esm = (fn3, res) => function __init() {
    return fn3 && (res = (0, fn3[__getOwnPropNames(fn3)[0]])(fn3 = 0)), res;
  };
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
  var __publicField = (obj, key, value) => {
    __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
    return value;
  };

  // external-global:react
  var require_react = __commonJS({
    "external-global:react"(exports, module) {
      module.exports = React;
    }
  });

  // ../../node_modules/tslib/tslib.js
  var require_tslib = __commonJS({
    "../../node_modules/tslib/tslib.js"(exports, module) {
      var __extends2;
      var __assign2;
      var __rest2;
      var __decorate2;
      var __param2;
      var __metadata2;
      var __awaiter2;
      var __generator2;
      var __exportStar2;
      var __values2;
      var __read2;
      var __spread2;
      var __spreadArrays2;
      var __spreadArray2;
      var __await2;
      var __asyncGenerator2;
      var __asyncDelegator2;
      var __asyncValues2;
      var __makeTemplateObject2;
      var __importStar2;
      var __importDefault2;
      var __classPrivateFieldGet2;
      var __classPrivateFieldSet2;
      var __classPrivateFieldIn2;
      var __createBinding2;
      (function(factory) {
        var root = typeof global === "object" ? global : typeof self === "object" ? self : typeof this === "object" ? this : {};
        if (typeof define === "function" && define.amd) {
          define("tslib", ["exports"], function(exports2) {
            factory(createExporter(root, createExporter(exports2)));
          });
        } else if (typeof module === "object" && typeof module.exports === "object") {
          factory(createExporter(root, createExporter(module.exports)));
        } else {
          factory(createExporter(root));
        }
        function createExporter(exports2, previous) {
          if (exports2 !== root) {
            if (typeof Object.create === "function") {
              Object.defineProperty(exports2, "__esModule", { value: true });
            } else {
              exports2.__esModule = true;
            }
          }
          return function(id, v2) {
            return exports2[id] = previous ? previous(id, v2) : v2;
          };
        }
      })(function(exporter) {
        var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d3, b2) {
          d3.__proto__ = b2;
        } || function(d3, b2) {
          for (var p2 in b2)
            if (Object.prototype.hasOwnProperty.call(b2, p2))
              d3[p2] = b2[p2];
        };
        __extends2 = function(d3, b2) {
          if (typeof b2 !== "function" && b2 !== null)
            throw new TypeError("Class extends value " + String(b2) + " is not a constructor or null");
          extendStatics(d3, b2);
          function __() {
            this.constructor = d3;
          }
          d3.prototype = b2 === null ? Object.create(b2) : (__.prototype = b2.prototype, new __());
        };
        __assign2 = Object.assign || function(t2) {
          for (var s2, i2 = 1, n3 = arguments.length; i2 < n3; i2++) {
            s2 = arguments[i2];
            for (var p2 in s2)
              if (Object.prototype.hasOwnProperty.call(s2, p2))
                t2[p2] = s2[p2];
          }
          return t2;
        };
        __rest2 = function(s2, e2) {
          var t2 = {};
          for (var p2 in s2)
            if (Object.prototype.hasOwnProperty.call(s2, p2) && e2.indexOf(p2) < 0)
              t2[p2] = s2[p2];
          if (s2 != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i2 = 0, p2 = Object.getOwnPropertySymbols(s2); i2 < p2.length; i2++) {
              if (e2.indexOf(p2[i2]) < 0 && Object.prototype.propertyIsEnumerable.call(s2, p2[i2]))
                t2[p2[i2]] = s2[p2[i2]];
            }
          return t2;
        };
        __decorate2 = function(decorators, target, key, desc) {
          var c2 = arguments.length, r = c2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d3;
          if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i2 = decorators.length - 1; i2 >= 0; i2--)
              if (d3 = decorators[i2])
                r = (c2 < 3 ? d3(r) : c2 > 3 ? d3(target, key, r) : d3(target, key)) || r;
          return c2 > 3 && r && Object.defineProperty(target, key, r), r;
        };
        __param2 = function(paramIndex, decorator) {
          return function(target, key) {
            decorator(target, key, paramIndex);
          };
        };
        __metadata2 = function(metadataKey, metadataValue) {
          if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
        };
        __awaiter2 = function(thisArg, _arguments, P2, generator) {
          function adopt(value) {
            return value instanceof P2 ? value : new P2(function(resolve) {
              resolve(value);
            });
          }
          return new (P2 || (P2 = Promise))(function(resolve, reject) {
            function fulfilled(value) {
              try {
                step(generator.next(value));
              } catch (e2) {
                reject(e2);
              }
            }
            function rejected(value) {
              try {
                step(generator["throw"](value));
              } catch (e2) {
                reject(e2);
              }
            }
            function step(result) {
              result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
            }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
          });
        };
        __generator2 = function(thisArg, body) {
          var _2 = { label: 0, sent: function() {
            if (t2[0] & 1)
              throw t2[1];
            return t2[1];
          }, trys: [], ops: [] }, f3, y, t2, g3;
          return g3 = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g3[Symbol.iterator] = function() {
            return this;
          }), g3;
          function verb(n3) {
            return function(v2) {
              return step([n3, v2]);
            };
          }
          function step(op) {
            if (f3)
              throw new TypeError("Generator is already executing.");
            while (_2)
              try {
                if (f3 = 1, y && (t2 = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t2 = y["return"]) && t2.call(y), 0) : y.next) && !(t2 = t2.call(y, op[1])).done)
                  return t2;
                if (y = 0, t2)
                  op = [op[0] & 2, t2.value];
                switch (op[0]) {
                  case 0:
                  case 1:
                    t2 = op;
                    break;
                  case 4:
                    _2.label++;
                    return { value: op[1], done: false };
                  case 5:
                    _2.label++;
                    y = op[1];
                    op = [0];
                    continue;
                  case 7:
                    op = _2.ops.pop();
                    _2.trys.pop();
                    continue;
                  default:
                    if (!(t2 = _2.trys, t2 = t2.length > 0 && t2[t2.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                      _2 = 0;
                      continue;
                    }
                    if (op[0] === 3 && (!t2 || op[1] > t2[0] && op[1] < t2[3])) {
                      _2.label = op[1];
                      break;
                    }
                    if (op[0] === 6 && _2.label < t2[1]) {
                      _2.label = t2[1];
                      t2 = op;
                      break;
                    }
                    if (t2 && _2.label < t2[2]) {
                      _2.label = t2[2];
                      _2.ops.push(op);
                      break;
                    }
                    if (t2[2])
                      _2.ops.pop();
                    _2.trys.pop();
                    continue;
                }
                op = body.call(thisArg, _2);
              } catch (e2) {
                op = [6, e2];
                y = 0;
              } finally {
                f3 = t2 = 0;
              }
            if (op[0] & 5)
              throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
          }
        };
        __exportStar2 = function(m3, o2) {
          for (var p2 in m3)
            if (p2 !== "default" && !Object.prototype.hasOwnProperty.call(o2, p2))
              __createBinding2(o2, m3, p2);
        };
        __createBinding2 = Object.create ? function(o2, m3, k2, k22) {
          if (k22 === void 0)
            k22 = k2;
          var desc = Object.getOwnPropertyDescriptor(m3, k2);
          if (!desc || ("get" in desc ? !m3.__esModule : desc.writable || desc.configurable)) {
            desc = { enumerable: true, get: function() {
              return m3[k2];
            } };
          }
          Object.defineProperty(o2, k22, desc);
        } : function(o2, m3, k2, k22) {
          if (k22 === void 0)
            k22 = k2;
          o2[k22] = m3[k2];
        };
        __values2 = function(o2) {
          var s2 = typeof Symbol === "function" && Symbol.iterator, m3 = s2 && o2[s2], i2 = 0;
          if (m3)
            return m3.call(o2);
          if (o2 && typeof o2.length === "number")
            return {
              next: function() {
                if (o2 && i2 >= o2.length)
                  o2 = void 0;
                return { value: o2 && o2[i2++], done: !o2 };
              }
            };
          throw new TypeError(s2 ? "Object is not iterable." : "Symbol.iterator is not defined.");
        };
        __read2 = function(o2, n3) {
          var m3 = typeof Symbol === "function" && o2[Symbol.iterator];
          if (!m3)
            return o2;
          var i2 = m3.call(o2), r, ar = [], e2;
          try {
            while ((n3 === void 0 || n3-- > 0) && !(r = i2.next()).done)
              ar.push(r.value);
          } catch (error) {
            e2 = { error };
          } finally {
            try {
              if (r && !r.done && (m3 = i2["return"]))
                m3.call(i2);
            } finally {
              if (e2)
                throw e2.error;
            }
          }
          return ar;
        };
        __spread2 = function() {
          for (var ar = [], i2 = 0; i2 < arguments.length; i2++)
            ar = ar.concat(__read2(arguments[i2]));
          return ar;
        };
        __spreadArrays2 = function() {
          for (var s2 = 0, i2 = 0, il = arguments.length; i2 < il; i2++)
            s2 += arguments[i2].length;
          for (var r = Array(s2), k2 = 0, i2 = 0; i2 < il; i2++)
            for (var a2 = arguments[i2], j3 = 0, jl = a2.length; j3 < jl; j3++, k2++)
              r[k2] = a2[j3];
          return r;
        };
        __spreadArray2 = function(to, from, pack) {
          if (pack || arguments.length === 2)
            for (var i2 = 0, l2 = from.length, ar; i2 < l2; i2++) {
              if (ar || !(i2 in from)) {
                if (!ar)
                  ar = Array.prototype.slice.call(from, 0, i2);
                ar[i2] = from[i2];
              }
            }
          return to.concat(ar || Array.prototype.slice.call(from));
        };
        __await2 = function(v2) {
          return this instanceof __await2 ? (this.v = v2, this) : new __await2(v2);
        };
        __asyncGenerator2 = function(thisArg, _arguments, generator) {
          if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
          var g3 = generator.apply(thisArg, _arguments || []), i2, q2 = [];
          return i2 = {}, verb("next"), verb("throw"), verb("return"), i2[Symbol.asyncIterator] = function() {
            return this;
          }, i2;
          function verb(n3) {
            if (g3[n3])
              i2[n3] = function(v2) {
                return new Promise(function(a2, b2) {
                  q2.push([n3, v2, a2, b2]) > 1 || resume(n3, v2);
                });
              };
          }
          function resume(n3, v2) {
            try {
              step(g3[n3](v2));
            } catch (e2) {
              settle(q2[0][3], e2);
            }
          }
          function step(r) {
            r.value instanceof __await2 ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q2[0][2], r);
          }
          function fulfill(value) {
            resume("next", value);
          }
          function reject(value) {
            resume("throw", value);
          }
          function settle(f3, v2) {
            if (f3(v2), q2.shift(), q2.length)
              resume(q2[0][0], q2[0][1]);
          }
        };
        __asyncDelegator2 = function(o2) {
          var i2, p2;
          return i2 = {}, verb("next"), verb("throw", function(e2) {
            throw e2;
          }), verb("return"), i2[Symbol.iterator] = function() {
            return this;
          }, i2;
          function verb(n3, f3) {
            i2[n3] = o2[n3] ? function(v2) {
              return (p2 = !p2) ? { value: __await2(o2[n3](v2)), done: n3 === "return" } : f3 ? f3(v2) : v2;
            } : f3;
          }
        };
        __asyncValues2 = function(o2) {
          if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
          var m3 = o2[Symbol.asyncIterator], i2;
          return m3 ? m3.call(o2) : (o2 = typeof __values2 === "function" ? __values2(o2) : o2[Symbol.iterator](), i2 = {}, verb("next"), verb("throw"), verb("return"), i2[Symbol.asyncIterator] = function() {
            return this;
          }, i2);
          function verb(n3) {
            i2[n3] = o2[n3] && function(v2) {
              return new Promise(function(resolve, reject) {
                v2 = o2[n3](v2), settle(resolve, reject, v2.done, v2.value);
              });
            };
          }
          function settle(resolve, reject, d3, v2) {
            Promise.resolve(v2).then(function(v3) {
              resolve({ value: v3, done: d3 });
            }, reject);
          }
        };
        __makeTemplateObject2 = function(cooked, raw) {
          if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
          } else {
            cooked.raw = raw;
          }
          return cooked;
        };
        var __setModuleDefault = Object.create ? function(o2, v2) {
          Object.defineProperty(o2, "default", { enumerable: true, value: v2 });
        } : function(o2, v2) {
          o2["default"] = v2;
        };
        __importStar2 = function(mod) {
          if (mod && mod.__esModule)
            return mod;
          var result = {};
          if (mod != null) {
            for (var k2 in mod)
              if (k2 !== "default" && Object.prototype.hasOwnProperty.call(mod, k2))
                __createBinding2(result, mod, k2);
          }
          __setModuleDefault(result, mod);
          return result;
        };
        __importDefault2 = function(mod) {
          return mod && mod.__esModule ? mod : { "default": mod };
        };
        __classPrivateFieldGet2 = function(receiver, state, kind, f3) {
          if (kind === "a" && !f3)
            throw new TypeError("Private accessor was defined without a getter");
          if (typeof state === "function" ? receiver !== state || !f3 : !state.has(receiver))
            throw new TypeError("Cannot read private member from an object whose class did not declare it");
          return kind === "m" ? f3 : kind === "a" ? f3.call(receiver) : f3 ? f3.value : state.get(receiver);
        };
        __classPrivateFieldSet2 = function(receiver, state, value, kind, f3) {
          if (kind === "m")
            throw new TypeError("Private method is not writable");
          if (kind === "a" && !f3)
            throw new TypeError("Private accessor was defined without a setter");
          if (typeof state === "function" ? receiver !== state || !f3 : !state.has(receiver))
            throw new TypeError("Cannot write private member to an object whose class did not declare it");
          return kind === "a" ? f3.call(receiver, value) : f3 ? f3.value = value : state.set(receiver, value), value;
        };
        __classPrivateFieldIn2 = function(state, receiver) {
          if (receiver === null || typeof receiver !== "object" && typeof receiver !== "function")
            throw new TypeError("Cannot use 'in' operator on non-object");
          return typeof state === "function" ? receiver === state : state.has(receiver);
        };
        exporter("__extends", __extends2);
        exporter("__assign", __assign2);
        exporter("__rest", __rest2);
        exporter("__decorate", __decorate2);
        exporter("__param", __param2);
        exporter("__metadata", __metadata2);
        exporter("__awaiter", __awaiter2);
        exporter("__generator", __generator2);
        exporter("__exportStar", __exportStar2);
        exporter("__createBinding", __createBinding2);
        exporter("__values", __values2);
        exporter("__read", __read2);
        exporter("__spread", __spread2);
        exporter("__spreadArrays", __spreadArrays2);
        exporter("__spreadArray", __spreadArray2);
        exporter("__await", __await2);
        exporter("__asyncGenerator", __asyncGenerator2);
        exporter("__asyncDelegator", __asyncDelegator2);
        exporter("__asyncValues", __asyncValues2);
        exporter("__makeTemplateObject", __makeTemplateObject2);
        exporter("__importStar", __importStar2);
        exporter("__importDefault", __importDefault2);
        exporter("__classPrivateFieldGet", __classPrivateFieldGet2);
        exporter("__classPrivateFieldSet", __classPrivateFieldSet2);
        exporter("__classPrivateFieldIn", __classPrivateFieldIn2);
      });
    }
  });

  // ../../node_modules/react-is/cjs/react-is.development.js
  var require_react_is_development = __commonJS({
    "../../node_modules/react-is/cjs/react-is.development.js"(exports) {
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
          var Element2 = REACT_ELEMENT_TYPE;
          var ForwardRef = REACT_FORWARD_REF_TYPE;
          var Fragment5 = REACT_FRAGMENT_TYPE;
          var Lazy = REACT_LAZY_TYPE;
          var Memo = REACT_MEMO_TYPE;
          var Portal = REACT_PORTAL_TYPE;
          var Profiler = REACT_PROFILER_TYPE;
          var StrictMode = REACT_STRICT_MODE_TYPE;
          var Suspense2 = REACT_SUSPENSE_TYPE;
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
          function isElement3(object) {
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
          exports.Element = Element2;
          exports.ForwardRef = ForwardRef;
          exports.Fragment = Fragment5;
          exports.Lazy = Lazy;
          exports.Memo = Memo;
          exports.Portal = Portal;
          exports.Profiler = Profiler;
          exports.StrictMode = StrictMode;
          exports.Suspense = Suspense2;
          exports.isAsyncMode = isAsyncMode;
          exports.isConcurrentMode = isConcurrentMode;
          exports.isContextConsumer = isContextConsumer;
          exports.isContextProvider = isContextProvider;
          exports.isElement = isElement3;
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

  // ../../node_modules/react-is/index.js
  var require_react_is = __commonJS({
    "../../node_modules/react-is/index.js"(exports, module) {
      "use strict";
      if (false) {
        module.exports = null;
      } else {
        module.exports = require_react_is_development();
      }
    }
  });

  // ../../node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js
  var require_hoist_non_react_statics_cjs = __commonJS({
    "../../node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js"(exports, module) {
      "use strict";
      var reactIs = require_react_is();
      var REACT_STATICS = {
        childContextTypes: true,
        contextType: true,
        contextTypes: true,
        defaultProps: true,
        displayName: true,
        getDefaultProps: true,
        getDerivedStateFromError: true,
        getDerivedStateFromProps: true,
        mixins: true,
        propTypes: true,
        type: true
      };
      var KNOWN_STATICS = {
        name: true,
        length: true,
        prototype: true,
        caller: true,
        callee: true,
        arguments: true,
        arity: true
      };
      var FORWARD_REF_STATICS = {
        "$$typeof": true,
        render: true,
        defaultProps: true,
        displayName: true,
        propTypes: true
      };
      var MEMO_STATICS = {
        "$$typeof": true,
        compare: true,
        defaultProps: true,
        displayName: true,
        propTypes: true,
        type: true
      };
      var TYPE_STATICS = {};
      TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
      TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;
      function getStatics(component) {
        if (reactIs.isMemo(component)) {
          return MEMO_STATICS;
        }
        return TYPE_STATICS[component["$$typeof"]] || REACT_STATICS;
      }
      var defineProperty = Object.defineProperty;
      var getOwnPropertyNames = Object.getOwnPropertyNames;
      var getOwnPropertySymbols = Object.getOwnPropertySymbols;
      var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
      var getPrototypeOf = Object.getPrototypeOf;
      var objectPrototype = Object.prototype;
      function hoistNonReactStatics2(targetComponent, sourceComponent, blacklist) {
        if (typeof sourceComponent !== "string") {
          if (objectPrototype) {
            var inheritedComponent = getPrototypeOf(sourceComponent);
            if (inheritedComponent && inheritedComponent !== objectPrototype) {
              hoistNonReactStatics2(targetComponent, inheritedComponent, blacklist);
            }
          }
          var keys = getOwnPropertyNames(sourceComponent);
          if (getOwnPropertySymbols) {
            keys = keys.concat(getOwnPropertySymbols(sourceComponent));
          }
          var targetStatics = getStatics(targetComponent);
          var sourceStatics = getStatics(sourceComponent);
          for (var i2 = 0; i2 < keys.length; ++i2) {
            var key = keys[i2];
            if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
              var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
              try {
                defineProperty(targetComponent, key, descriptor);
              } catch (e2) {
              }
            }
          }
        }
        return targetComponent;
      }
      module.exports = hoistNonReactStatics2;
    }
  });

  // ../../node_modules/object-assign/index.js
  var require_object_assign = __commonJS({
    "../../node_modules/object-assign/index.js"(exports, module) {
      "use strict";
      var getOwnPropertySymbols = Object.getOwnPropertySymbols;
      var hasOwnProperty2 = Object.prototype.hasOwnProperty;
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
          for (var i2 = 0; i2 < 10; i2++) {
            test2["_" + String.fromCharCode(i2)] = i2;
          }
          var order2 = Object.getOwnPropertyNames(test2).map(function(n3) {
            return test2[n3];
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
        for (var s2 = 1; s2 < arguments.length; s2++) {
          from = Object(arguments[s2]);
          for (var key in from) {
            if (hasOwnProperty2.call(from, key)) {
              to[key] = from[key];
            }
          }
          if (getOwnPropertySymbols) {
            symbols = getOwnPropertySymbols(from);
            for (var i2 = 0; i2 < symbols.length; i2++) {
              if (propIsEnumerable.call(from, symbols[i2])) {
                to[symbols[i2]] = from[symbols[i2]];
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
          } catch (x2) {
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
                  var err = Error(
                    (componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
                  );
                  err.name = "Invariant Violation";
                  throw err;
                }
                error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
              } catch (ex) {
                error = ex;
              }
              if (error && !(error instanceof Error)) {
                printWarning(
                  (componentName || "React class") + ": type specification of " + location + " `" + typeSpecName + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof error + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
                );
              }
              if (error instanceof Error && !(error.message in loggedTypeFailures)) {
                loggedTypeFailures[error.message] = true;
                var stack = getStack ? getStack() : "";
                printWarning(
                  "Failed " + location + " type: " + error.message + (stack != null ? stack : "")
                );
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
          } catch (x2) {
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
        function is(x2, y) {
          if (x2 === y) {
            return x2 !== 0 || 1 / x2 === 1 / y;
          } else {
            return x2 !== x2 && y !== y;
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
                var err = new Error(
                  "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
                );
                err.name = "Invariant Violation";
                throw err;
              } else if (typeof console !== "undefined") {
                var cacheKey = componentName + ":" + propName;
                if (!manualPropTypeCallCache[cacheKey] && manualPropTypeWarningCount < 3) {
                  printWarning(
                    "You are manually calling a React.PropTypes validation function for the `" + propFullName + "` prop on `" + componentName + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
                  );
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
              return new PropTypeError(
                "Invalid " + location + " `" + propFullName + "` of type " + ("`" + preciseType + "` supplied to `" + componentName + "`, expected ") + ("`" + expectedType + "`."),
                { expectedType }
              );
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
            for (var i2 = 0; i2 < propValue.length; i2++) {
              var error = typeChecker(propValue, i2, componentName, location, propFullName + "[" + i2 + "]", ReactPropTypesSecret);
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
                printWarning(
                  "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
                );
              } else {
                printWarning("Invalid argument supplied to oneOf, expected an array.");
              }
            }
            return emptyFunctionThatReturnsNull;
          }
          function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];
            for (var i2 = 0; i2 < expectedValues.length; i2++) {
              if (is(propValue, expectedValues[i2])) {
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
          for (var i2 = 0; i2 < arrayOfTypeCheckers.length; i2++) {
            var checker = arrayOfTypeCheckers[i2];
            if (typeof checker !== "function") {
              printWarning(
                "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + getPostfixForTypeWarning(checker) + " at index " + i2 + "."
              );
              return emptyFunctionThatReturnsNull;
            }
          }
          function validate(props, propName, componentName, location, propFullName) {
            var expectedTypes = [];
            for (var i3 = 0; i3 < arrayOfTypeCheckers.length; i3++) {
              var checker2 = arrayOfTypeCheckers[i3];
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
          return new PropTypeError(
            (componentName || "React class") + ": " + location + " type `" + propFullName + "." + key + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + type + "`."
          );
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
                return new PropTypeError(
                  "Invalid " + location + " `" + propFullName + "` key `" + key + "` supplied to `" + componentName + "`.\nBad object: " + JSON.stringify(props[propName], null, "  ") + "\nValid keys: " + JSON.stringify(Object.keys(shapeTypes), null, "  ")
                );
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

  // ../../node_modules/attr-accept/dist/es/index.js
  var require_es = __commonJS({
    "../../node_modules/attr-accept/dist/es/index.js"(exports) {
      "use strict";
      exports.__esModule = true;
      exports.default = function(file, acceptedFiles) {
        if (file && acceptedFiles) {
          var acceptedFilesArray = Array.isArray(acceptedFiles) ? acceptedFiles : acceptedFiles.split(",");
          var fileName = file.name || "";
          var mimeType = (file.type || "").toLowerCase();
          var baseMimeType = mimeType.replace(/\/.*$/, "");
          return acceptedFilesArray.some(function(type) {
            var validType = type.trim().toLowerCase();
            if (validType.charAt(0) === ".") {
              return fileName.toLowerCase().endsWith(validType);
            } else if (validType.endsWith("/*")) {
              return baseMimeType === validType.replace(/\/.*$/, "");
            }
            return mimeType === validType;
          });
        }
        return true;
      };
    }
  });

  // external-global:react-dom
  var require_react_dom = __commonJS({
    "external-global:react-dom"(exports, module) {
      module.exports = ReactDOM;
    }
  });

  // ../../node_modules/axios/lib/helpers/bind.js
  var require_bind = __commonJS({
    "../../node_modules/axios/lib/helpers/bind.js"(exports, module) {
      "use strict";
      module.exports = function bind(fn3, thisArg) {
        return function wrap() {
          var args = new Array(arguments.length);
          for (var i2 = 0; i2 < args.length; i2++) {
            args[i2] = arguments[i2];
          }
          return fn3.apply(thisArg, args);
        };
      };
    }
  });

  // ../../node_modules/axios/lib/utils.js
  var require_utils = __commonJS({
    "../../node_modules/axios/lib/utils.js"(exports, module) {
      "use strict";
      var bind = require_bind();
      var toString = Object.prototype.toString;
      function isArray(val) {
        return Array.isArray(val);
      }
      function isUndefined(val) {
        return typeof val === "undefined";
      }
      function isBuffer(val) {
        return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor) && typeof val.constructor.isBuffer === "function" && val.constructor.isBuffer(val);
      }
      function isArrayBuffer(val) {
        return toString.call(val) === "[object ArrayBuffer]";
      }
      function isFormData(val) {
        return toString.call(val) === "[object FormData]";
      }
      function isArrayBufferView(val) {
        var result;
        if (typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView) {
          result = ArrayBuffer.isView(val);
        } else {
          result = val && val.buffer && isArrayBuffer(val.buffer);
        }
        return result;
      }
      function isString(val) {
        return typeof val === "string";
      }
      function isNumber(val) {
        return typeof val === "number";
      }
      function isObject2(val) {
        return val !== null && typeof val === "object";
      }
      function isPlainObject2(val) {
        if (toString.call(val) !== "[object Object]") {
          return false;
        }
        var prototype = Object.getPrototypeOf(val);
        return prototype === null || prototype === Object.prototype;
      }
      function isDate(val) {
        return toString.call(val) === "[object Date]";
      }
      function isFile(val) {
        return toString.call(val) === "[object File]";
      }
      function isBlob(val) {
        return toString.call(val) === "[object Blob]";
      }
      function isFunction(val) {
        return toString.call(val) === "[object Function]";
      }
      function isStream(val) {
        return isObject2(val) && isFunction(val.pipe);
      }
      function isURLSearchParams(val) {
        return toString.call(val) === "[object URLSearchParams]";
      }
      function trim(str) {
        return str.trim ? str.trim() : str.replace(/^\s+|\s+$/g, "");
      }
      function isStandardBrowserEnv() {
        if (typeof navigator !== "undefined" && (navigator.product === "ReactNative" || navigator.product === "NativeScript" || navigator.product === "NS")) {
          return false;
        }
        return typeof window !== "undefined" && typeof document !== "undefined";
      }
      function forEach(obj, fn3) {
        if (obj === null || typeof obj === "undefined") {
          return;
        }
        if (typeof obj !== "object") {
          obj = [obj];
        }
        if (isArray(obj)) {
          for (var i2 = 0, l2 = obj.length; i2 < l2; i2++) {
            fn3.call(null, obj[i2], i2, obj);
          }
        } else {
          for (var key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) {
              fn3.call(null, obj[key], key, obj);
            }
          }
        }
      }
      function merge() {
        var result = {};
        function assignValue(val, key) {
          if (isPlainObject2(result[key]) && isPlainObject2(val)) {
            result[key] = merge(result[key], val);
          } else if (isPlainObject2(val)) {
            result[key] = merge({}, val);
          } else if (isArray(val)) {
            result[key] = val.slice();
          } else {
            result[key] = val;
          }
        }
        for (var i2 = 0, l2 = arguments.length; i2 < l2; i2++) {
          forEach(arguments[i2], assignValue);
        }
        return result;
      }
      function extend(a2, b2, thisArg) {
        forEach(b2, function assignValue(val, key) {
          if (thisArg && typeof val === "function") {
            a2[key] = bind(val, thisArg);
          } else {
            a2[key] = val;
          }
        });
        return a2;
      }
      function stripBOM(content) {
        if (content.charCodeAt(0) === 65279) {
          content = content.slice(1);
        }
        return content;
      }
      module.exports = {
        isArray,
        isArrayBuffer,
        isBuffer,
        isFormData,
        isArrayBufferView,
        isString,
        isNumber,
        isObject: isObject2,
        isPlainObject: isPlainObject2,
        isUndefined,
        isDate,
        isFile,
        isBlob,
        isFunction,
        isStream,
        isURLSearchParams,
        isStandardBrowserEnv,
        forEach,
        merge,
        extend,
        trim,
        stripBOM
      };
    }
  });

  // ../../node_modules/axios/lib/helpers/buildURL.js
  var require_buildURL = __commonJS({
    "../../node_modules/axios/lib/helpers/buildURL.js"(exports, module) {
      "use strict";
      var utils = require_utils();
      function encode(val) {
        return encodeURIComponent(val).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
      }
      module.exports = function buildURL(url, params, paramsSerializer) {
        if (!params) {
          return url;
        }
        var serializedParams;
        if (paramsSerializer) {
          serializedParams = paramsSerializer(params);
        } else if (utils.isURLSearchParams(params)) {
          serializedParams = params.toString();
        } else {
          var parts = [];
          utils.forEach(params, function serialize(val, key) {
            if (val === null || typeof val === "undefined") {
              return;
            }
            if (utils.isArray(val)) {
              key = key + "[]";
            } else {
              val = [val];
            }
            utils.forEach(val, function parseValue(v2) {
              if (utils.isDate(v2)) {
                v2 = v2.toISOString();
              } else if (utils.isObject(v2)) {
                v2 = JSON.stringify(v2);
              }
              parts.push(encode(key) + "=" + encode(v2));
            });
          });
          serializedParams = parts.join("&");
        }
        if (serializedParams) {
          var hashmarkIndex = url.indexOf("#");
          if (hashmarkIndex !== -1) {
            url = url.slice(0, hashmarkIndex);
          }
          url += (url.indexOf("?") === -1 ? "?" : "&") + serializedParams;
        }
        return url;
      };
    }
  });

  // ../../node_modules/axios/lib/core/InterceptorManager.js
  var require_InterceptorManager = __commonJS({
    "../../node_modules/axios/lib/core/InterceptorManager.js"(exports, module) {
      "use strict";
      var utils = require_utils();
      function InterceptorManager() {
        this.handlers = [];
      }
      InterceptorManager.prototype.use = function use(fulfilled, rejected, options) {
        this.handlers.push({
          fulfilled,
          rejected,
          synchronous: options ? options.synchronous : false,
          runWhen: options ? options.runWhen : null
        });
        return this.handlers.length - 1;
      };
      InterceptorManager.prototype.eject = function eject(id) {
        if (this.handlers[id]) {
          this.handlers[id] = null;
        }
      };
      InterceptorManager.prototype.forEach = function forEach(fn3) {
        utils.forEach(this.handlers, function forEachHandler(h2) {
          if (h2 !== null) {
            fn3(h2);
          }
        });
      };
      module.exports = InterceptorManager;
    }
  });

  // ../../node_modules/axios/lib/helpers/normalizeHeaderName.js
  var require_normalizeHeaderName = __commonJS({
    "../../node_modules/axios/lib/helpers/normalizeHeaderName.js"(exports, module) {
      "use strict";
      var utils = require_utils();
      module.exports = function normalizeHeaderName(headers, normalizedName) {
        utils.forEach(headers, function processHeader(value, name) {
          if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
            headers[normalizedName] = value;
            delete headers[name];
          }
        });
      };
    }
  });

  // ../../node_modules/axios/lib/core/enhanceError.js
  var require_enhanceError = __commonJS({
    "../../node_modules/axios/lib/core/enhanceError.js"(exports, module) {
      "use strict";
      module.exports = function enhanceError(error, config, code, request, response) {
        error.config = config;
        if (code) {
          error.code = code;
        }
        error.request = request;
        error.response = response;
        error.isAxiosError = true;
        error.toJSON = function toJSON() {
          return {
            message: this.message,
            name: this.name,
            description: this.description,
            number: this.number,
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            config: this.config,
            code: this.code,
            status: this.response && this.response.status ? this.response.status : null
          };
        };
        return error;
      };
    }
  });

  // ../../node_modules/axios/lib/core/createError.js
  var require_createError = __commonJS({
    "../../node_modules/axios/lib/core/createError.js"(exports, module) {
      "use strict";
      var enhanceError = require_enhanceError();
      module.exports = function createError(message, config, code, request, response) {
        var error = new Error(message);
        return enhanceError(error, config, code, request, response);
      };
    }
  });

  // ../../node_modules/axios/lib/core/settle.js
  var require_settle = __commonJS({
    "../../node_modules/axios/lib/core/settle.js"(exports, module) {
      "use strict";
      var createError = require_createError();
      module.exports = function settle(resolve, reject, response) {
        var validateStatus = response.config.validateStatus;
        if (!response.status || !validateStatus || validateStatus(response.status)) {
          resolve(response);
        } else {
          reject(createError(
            "Request failed with status code " + response.status,
            response.config,
            null,
            response.request,
            response
          ));
        }
      };
    }
  });

  // ../../node_modules/axios/lib/helpers/cookies.js
  var require_cookies = __commonJS({
    "../../node_modules/axios/lib/helpers/cookies.js"(exports, module) {
      "use strict";
      var utils = require_utils();
      module.exports = utils.isStandardBrowserEnv() ? function standardBrowserEnv() {
        return {
          write: function write2(name, value, expires, path, domain, secure) {
            var cookie = [];
            cookie.push(name + "=" + encodeURIComponent(value));
            if (utils.isNumber(expires)) {
              cookie.push("expires=" + new Date(expires).toGMTString());
            }
            if (utils.isString(path)) {
              cookie.push("path=" + path);
            }
            if (utils.isString(domain)) {
              cookie.push("domain=" + domain);
            }
            if (secure === true) {
              cookie.push("secure");
            }
            document.cookie = cookie.join("; ");
          },
          read: function read2(name) {
            var match = document.cookie.match(new RegExp("(^|;\\s*)(" + name + ")=([^;]*)"));
            return match ? decodeURIComponent(match[3]) : null;
          },
          remove: function remove(name) {
            this.write(name, "", Date.now() - 864e5);
          }
        };
      }() : function nonStandardBrowserEnv() {
        return {
          write: function write2() {
          },
          read: function read2() {
            return null;
          },
          remove: function remove() {
          }
        };
      }();
    }
  });

  // ../../node_modules/axios/lib/helpers/isAbsoluteURL.js
  var require_isAbsoluteURL = __commonJS({
    "../../node_modules/axios/lib/helpers/isAbsoluteURL.js"(exports, module) {
      "use strict";
      module.exports = function isAbsoluteURL(url) {
        return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
      };
    }
  });

  // ../../node_modules/axios/lib/helpers/combineURLs.js
  var require_combineURLs = __commonJS({
    "../../node_modules/axios/lib/helpers/combineURLs.js"(exports, module) {
      "use strict";
      module.exports = function combineURLs(baseURL, relativeURL) {
        return relativeURL ? baseURL.replace(/\/+$/, "") + "/" + relativeURL.replace(/^\/+/, "") : baseURL;
      };
    }
  });

  // ../../node_modules/axios/lib/core/buildFullPath.js
  var require_buildFullPath = __commonJS({
    "../../node_modules/axios/lib/core/buildFullPath.js"(exports, module) {
      "use strict";
      var isAbsoluteURL = require_isAbsoluteURL();
      var combineURLs = require_combineURLs();
      module.exports = function buildFullPath(baseURL, requestedURL) {
        if (baseURL && !isAbsoluteURL(requestedURL)) {
          return combineURLs(baseURL, requestedURL);
        }
        return requestedURL;
      };
    }
  });

  // ../../node_modules/axios/lib/helpers/parseHeaders.js
  var require_parseHeaders = __commonJS({
    "../../node_modules/axios/lib/helpers/parseHeaders.js"(exports, module) {
      "use strict";
      var utils = require_utils();
      var ignoreDuplicateOf = [
        "age",
        "authorization",
        "content-length",
        "content-type",
        "etag",
        "expires",
        "from",
        "host",
        "if-modified-since",
        "if-unmodified-since",
        "last-modified",
        "location",
        "max-forwards",
        "proxy-authorization",
        "referer",
        "retry-after",
        "user-agent"
      ];
      module.exports = function parseHeaders(headers) {
        var parsed = {};
        var key;
        var val;
        var i2;
        if (!headers) {
          return parsed;
        }
        utils.forEach(headers.split("\n"), function parser(line) {
          i2 = line.indexOf(":");
          key = utils.trim(line.substr(0, i2)).toLowerCase();
          val = utils.trim(line.substr(i2 + 1));
          if (key) {
            if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
              return;
            }
            if (key === "set-cookie") {
              parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
            } else {
              parsed[key] = parsed[key] ? parsed[key] + ", " + val : val;
            }
          }
        });
        return parsed;
      };
    }
  });

  // ../../node_modules/axios/lib/helpers/isURLSameOrigin.js
  var require_isURLSameOrigin = __commonJS({
    "../../node_modules/axios/lib/helpers/isURLSameOrigin.js"(exports, module) {
      "use strict";
      var utils = require_utils();
      module.exports = utils.isStandardBrowserEnv() ? function standardBrowserEnv() {
        var msie = /(msie|trident)/i.test(navigator.userAgent);
        var urlParsingNode = document.createElement("a");
        var originURL;
        function resolveURL(url) {
          var href = url;
          if (msie) {
            urlParsingNode.setAttribute("href", href);
            href = urlParsingNode.href;
          }
          urlParsingNode.setAttribute("href", href);
          return {
            href: urlParsingNode.href,
            protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, "") : "",
            host: urlParsingNode.host,
            search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, "") : "",
            hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, "") : "",
            hostname: urlParsingNode.hostname,
            port: urlParsingNode.port,
            pathname: urlParsingNode.pathname.charAt(0) === "/" ? urlParsingNode.pathname : "/" + urlParsingNode.pathname
          };
        }
        originURL = resolveURL(window.location.href);
        return function isURLSameOrigin(requestURL) {
          var parsed = utils.isString(requestURL) ? resolveURL(requestURL) : requestURL;
          return parsed.protocol === originURL.protocol && parsed.host === originURL.host;
        };
      }() : function nonStandardBrowserEnv() {
        return function isURLSameOrigin() {
          return true;
        };
      }();
    }
  });

  // ../../node_modules/axios/lib/cancel/Cancel.js
  var require_Cancel = __commonJS({
    "../../node_modules/axios/lib/cancel/Cancel.js"(exports, module) {
      "use strict";
      function Cancel(message) {
        this.message = message;
      }
      Cancel.prototype.toString = function toString() {
        return "Cancel" + (this.message ? ": " + this.message : "");
      };
      Cancel.prototype.__CANCEL__ = true;
      module.exports = Cancel;
    }
  });

  // ../../node_modules/axios/lib/adapters/xhr.js
  var require_xhr = __commonJS({
    "../../node_modules/axios/lib/adapters/xhr.js"(exports, module) {
      "use strict";
      var utils = require_utils();
      var settle = require_settle();
      var cookies = require_cookies();
      var buildURL = require_buildURL();
      var buildFullPath = require_buildFullPath();
      var parseHeaders = require_parseHeaders();
      var isURLSameOrigin = require_isURLSameOrigin();
      var createError = require_createError();
      var defaults = require_defaults();
      var Cancel = require_Cancel();
      module.exports = function xhrAdapter(config) {
        return new Promise(function dispatchXhrRequest(resolve, reject) {
          var requestData = config.data;
          var requestHeaders = config.headers;
          var responseType = config.responseType;
          var onCanceled;
          function done() {
            if (config.cancelToken) {
              config.cancelToken.unsubscribe(onCanceled);
            }
            if (config.signal) {
              config.signal.removeEventListener("abort", onCanceled);
            }
          }
          if (utils.isFormData(requestData)) {
            delete requestHeaders["Content-Type"];
          }
          var request = new XMLHttpRequest();
          if (config.auth) {
            var username = config.auth.username || "";
            var password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : "";
            requestHeaders.Authorization = "Basic " + btoa(username + ":" + password);
          }
          var fullPath = buildFullPath(config.baseURL, config.url);
          request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);
          request.timeout = config.timeout;
          function onloadend() {
            if (!request) {
              return;
            }
            var responseHeaders = "getAllResponseHeaders" in request ? parseHeaders(request.getAllResponseHeaders()) : null;
            var responseData = !responseType || responseType === "text" || responseType === "json" ? request.responseText : request.response;
            var response = {
              data: responseData,
              status: request.status,
              statusText: request.statusText,
              headers: responseHeaders,
              config,
              request
            };
            settle(function _resolve(value) {
              resolve(value);
              done();
            }, function _reject(err) {
              reject(err);
              done();
            }, response);
            request = null;
          }
          if ("onloadend" in request) {
            request.onloadend = onloadend;
          } else {
            request.onreadystatechange = function handleLoad() {
              if (!request || request.readyState !== 4) {
                return;
              }
              if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf("file:") === 0)) {
                return;
              }
              setTimeout(onloadend);
            };
          }
          request.onabort = function handleAbort() {
            if (!request) {
              return;
            }
            reject(createError("Request aborted", config, "ECONNABORTED", request));
            request = null;
          };
          request.onerror = function handleError() {
            reject(createError("Network Error", config, null, request));
            request = null;
          };
          request.ontimeout = function handleTimeout() {
            var timeoutErrorMessage = config.timeout ? "timeout of " + config.timeout + "ms exceeded" : "timeout exceeded";
            var transitional = config.transitional || defaults.transitional;
            if (config.timeoutErrorMessage) {
              timeoutErrorMessage = config.timeoutErrorMessage;
            }
            reject(createError(
              timeoutErrorMessage,
              config,
              transitional.clarifyTimeoutError ? "ETIMEDOUT" : "ECONNABORTED",
              request
            ));
            request = null;
          };
          if (utils.isStandardBrowserEnv()) {
            var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ? cookies.read(config.xsrfCookieName) : void 0;
            if (xsrfValue) {
              requestHeaders[config.xsrfHeaderName] = xsrfValue;
            }
          }
          if ("setRequestHeader" in request) {
            utils.forEach(requestHeaders, function setRequestHeader(val, key) {
              if (typeof requestData === "undefined" && key.toLowerCase() === "content-type") {
                delete requestHeaders[key];
              } else {
                request.setRequestHeader(key, val);
              }
            });
          }
          if (!utils.isUndefined(config.withCredentials)) {
            request.withCredentials = !!config.withCredentials;
          }
          if (responseType && responseType !== "json") {
            request.responseType = config.responseType;
          }
          if (typeof config.onDownloadProgress === "function") {
            request.addEventListener("progress", config.onDownloadProgress);
          }
          if (typeof config.onUploadProgress === "function" && request.upload) {
            request.upload.addEventListener("progress", config.onUploadProgress);
          }
          if (config.cancelToken || config.signal) {
            onCanceled = function(cancel) {
              if (!request) {
                return;
              }
              reject(!cancel || cancel && cancel.type ? new Cancel("canceled") : cancel);
              request.abort();
              request = null;
            };
            config.cancelToken && config.cancelToken.subscribe(onCanceled);
            if (config.signal) {
              config.signal.aborted ? onCanceled() : config.signal.addEventListener("abort", onCanceled);
            }
          }
          if (!requestData) {
            requestData = null;
          }
          request.send(requestData);
        });
      };
    }
  });

  // ../../node_modules/axios/lib/defaults.js
  var require_defaults = __commonJS({
    "../../node_modules/axios/lib/defaults.js"(exports, module) {
      "use strict";
      var utils = require_utils();
      var normalizeHeaderName = require_normalizeHeaderName();
      var enhanceError = require_enhanceError();
      var DEFAULT_CONTENT_TYPE = {
        "Content-Type": "application/x-www-form-urlencoded"
      };
      function setContentTypeIfUnset(headers, value) {
        if (!utils.isUndefined(headers) && utils.isUndefined(headers["Content-Type"])) {
          headers["Content-Type"] = value;
        }
      }
      function getDefaultAdapter() {
        var adapter;
        if (typeof XMLHttpRequest !== "undefined") {
          adapter = require_xhr();
        } else if (typeof process !== "undefined" && Object.prototype.toString.call(process) === "[object process]") {
          adapter = require_xhr();
        }
        return adapter;
      }
      function stringifySafely(rawValue, parser, encoder) {
        if (utils.isString(rawValue)) {
          try {
            (parser || JSON.parse)(rawValue);
            return utils.trim(rawValue);
          } catch (e2) {
            if (e2.name !== "SyntaxError") {
              throw e2;
            }
          }
        }
        return (encoder || JSON.stringify)(rawValue);
      }
      var defaults = {
        transitional: {
          silentJSONParsing: true,
          forcedJSONParsing: true,
          clarifyTimeoutError: false
        },
        adapter: getDefaultAdapter(),
        transformRequest: [function transformRequest(data, headers) {
          normalizeHeaderName(headers, "Accept");
          normalizeHeaderName(headers, "Content-Type");
          if (utils.isFormData(data) || utils.isArrayBuffer(data) || utils.isBuffer(data) || utils.isStream(data) || utils.isFile(data) || utils.isBlob(data)) {
            return data;
          }
          if (utils.isArrayBufferView(data)) {
            return data.buffer;
          }
          if (utils.isURLSearchParams(data)) {
            setContentTypeIfUnset(headers, "application/x-www-form-urlencoded;charset=utf-8");
            return data.toString();
          }
          if (utils.isObject(data) || headers && headers["Content-Type"] === "application/json") {
            setContentTypeIfUnset(headers, "application/json");
            return stringifySafely(data);
          }
          return data;
        }],
        transformResponse: [function transformResponse(data) {
          var transitional = this.transitional || defaults.transitional;
          var silentJSONParsing = transitional && transitional.silentJSONParsing;
          var forcedJSONParsing = transitional && transitional.forcedJSONParsing;
          var strictJSONParsing = !silentJSONParsing && this.responseType === "json";
          if (strictJSONParsing || forcedJSONParsing && utils.isString(data) && data.length) {
            try {
              return JSON.parse(data);
            } catch (e2) {
              if (strictJSONParsing) {
                if (e2.name === "SyntaxError") {
                  throw enhanceError(e2, this, "E_JSON_PARSE");
                }
                throw e2;
              }
            }
          }
          return data;
        }],
        timeout: 0,
        xsrfCookieName: "XSRF-TOKEN",
        xsrfHeaderName: "X-XSRF-TOKEN",
        maxContentLength: -1,
        maxBodyLength: -1,
        validateStatus: function validateStatus(status) {
          return status >= 200 && status < 300;
        },
        headers: {
          common: {
            "Accept": "application/json, text/plain, */*"
          }
        }
      };
      utils.forEach(["delete", "get", "head"], function forEachMethodNoData(method) {
        defaults.headers[method] = {};
      });
      utils.forEach(["post", "put", "patch"], function forEachMethodWithData(method) {
        defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
      });
      module.exports = defaults;
    }
  });

  // ../../node_modules/axios/lib/core/transformData.js
  var require_transformData = __commonJS({
    "../../node_modules/axios/lib/core/transformData.js"(exports, module) {
      "use strict";
      var utils = require_utils();
      var defaults = require_defaults();
      module.exports = function transformData(data, headers, fns) {
        var context = this || defaults;
        utils.forEach(fns, function transform(fn3) {
          data = fn3.call(context, data, headers);
        });
        return data;
      };
    }
  });

  // ../../node_modules/axios/lib/cancel/isCancel.js
  var require_isCancel = __commonJS({
    "../../node_modules/axios/lib/cancel/isCancel.js"(exports, module) {
      "use strict";
      module.exports = function isCancel(value) {
        return !!(value && value.__CANCEL__);
      };
    }
  });

  // ../../node_modules/axios/lib/core/dispatchRequest.js
  var require_dispatchRequest = __commonJS({
    "../../node_modules/axios/lib/core/dispatchRequest.js"(exports, module) {
      "use strict";
      var utils = require_utils();
      var transformData = require_transformData();
      var isCancel = require_isCancel();
      var defaults = require_defaults();
      var Cancel = require_Cancel();
      function throwIfCancellationRequested(config) {
        if (config.cancelToken) {
          config.cancelToken.throwIfRequested();
        }
        if (config.signal && config.signal.aborted) {
          throw new Cancel("canceled");
        }
      }
      module.exports = function dispatchRequest(config) {
        throwIfCancellationRequested(config);
        config.headers = config.headers || {};
        config.data = transformData.call(
          config,
          config.data,
          config.headers,
          config.transformRequest
        );
        config.headers = utils.merge(
          config.headers.common || {},
          config.headers[config.method] || {},
          config.headers
        );
        utils.forEach(
          ["delete", "get", "head", "post", "put", "patch", "common"],
          function cleanHeaderConfig(method) {
            delete config.headers[method];
          }
        );
        var adapter = config.adapter || defaults.adapter;
        return adapter(config).then(function onAdapterResolution(response) {
          throwIfCancellationRequested(config);
          response.data = transformData.call(
            config,
            response.data,
            response.headers,
            config.transformResponse
          );
          return response;
        }, function onAdapterRejection(reason) {
          if (!isCancel(reason)) {
            throwIfCancellationRequested(config);
            if (reason && reason.response) {
              reason.response.data = transformData.call(
                config,
                reason.response.data,
                reason.response.headers,
                config.transformResponse
              );
            }
          }
          return Promise.reject(reason);
        });
      };
    }
  });

  // ../../node_modules/axios/lib/core/mergeConfig.js
  var require_mergeConfig = __commonJS({
    "../../node_modules/axios/lib/core/mergeConfig.js"(exports, module) {
      "use strict";
      var utils = require_utils();
      module.exports = function mergeConfig2(config1, config2) {
        config2 = config2 || {};
        var config = {};
        function getMergedValue(target, source) {
          if (utils.isPlainObject(target) && utils.isPlainObject(source)) {
            return utils.merge(target, source);
          } else if (utils.isPlainObject(source)) {
            return utils.merge({}, source);
          } else if (utils.isArray(source)) {
            return source.slice();
          }
          return source;
        }
        function mergeDeepProperties(prop) {
          if (!utils.isUndefined(config2[prop])) {
            return getMergedValue(config1[prop], config2[prop]);
          } else if (!utils.isUndefined(config1[prop])) {
            return getMergedValue(void 0, config1[prop]);
          }
        }
        function valueFromConfig2(prop) {
          if (!utils.isUndefined(config2[prop])) {
            return getMergedValue(void 0, config2[prop]);
          }
        }
        function defaultToConfig2(prop) {
          if (!utils.isUndefined(config2[prop])) {
            return getMergedValue(void 0, config2[prop]);
          } else if (!utils.isUndefined(config1[prop])) {
            return getMergedValue(void 0, config1[prop]);
          }
        }
        function mergeDirectKeys(prop) {
          if (prop in config2) {
            return getMergedValue(config1[prop], config2[prop]);
          } else if (prop in config1) {
            return getMergedValue(void 0, config1[prop]);
          }
        }
        var mergeMap = {
          "url": valueFromConfig2,
          "method": valueFromConfig2,
          "data": valueFromConfig2,
          "baseURL": defaultToConfig2,
          "transformRequest": defaultToConfig2,
          "transformResponse": defaultToConfig2,
          "paramsSerializer": defaultToConfig2,
          "timeout": defaultToConfig2,
          "timeoutMessage": defaultToConfig2,
          "withCredentials": defaultToConfig2,
          "adapter": defaultToConfig2,
          "responseType": defaultToConfig2,
          "xsrfCookieName": defaultToConfig2,
          "xsrfHeaderName": defaultToConfig2,
          "onUploadProgress": defaultToConfig2,
          "onDownloadProgress": defaultToConfig2,
          "decompress": defaultToConfig2,
          "maxContentLength": defaultToConfig2,
          "maxBodyLength": defaultToConfig2,
          "transport": defaultToConfig2,
          "httpAgent": defaultToConfig2,
          "httpsAgent": defaultToConfig2,
          "cancelToken": defaultToConfig2,
          "socketPath": defaultToConfig2,
          "responseEncoding": defaultToConfig2,
          "validateStatus": mergeDirectKeys
        };
        utils.forEach(Object.keys(config1).concat(Object.keys(config2)), function computeConfigValue(prop) {
          var merge = mergeMap[prop] || mergeDeepProperties;
          var configValue = merge(prop);
          utils.isUndefined(configValue) && merge !== mergeDirectKeys || (config[prop] = configValue);
        });
        return config;
      };
    }
  });

  // ../../node_modules/axios/lib/env/data.js
  var require_data = __commonJS({
    "../../node_modules/axios/lib/env/data.js"(exports, module) {
      module.exports = {
        "version": "0.25.0"
      };
    }
  });

  // ../../node_modules/axios/lib/helpers/validator.js
  var require_validator = __commonJS({
    "../../node_modules/axios/lib/helpers/validator.js"(exports, module) {
      "use strict";
      var VERSION = require_data().version;
      var validators = {};
      ["object", "boolean", "number", "function", "string", "symbol"].forEach(function(type, i2) {
        validators[type] = function validator(thing) {
          return typeof thing === type || "a" + (i2 < 1 ? "n " : " ") + type;
        };
      });
      var deprecatedWarnings = {};
      validators.transitional = function transitional(validator, version, message) {
        function formatMessage3(opt, desc) {
          return "[Axios v" + VERSION + "] Transitional option '" + opt + "'" + desc + (message ? ". " + message : "");
        }
        return function(value, opt, opts) {
          if (validator === false) {
            throw new Error(formatMessage3(opt, " has been removed" + (version ? " in " + version : "")));
          }
          if (version && !deprecatedWarnings[opt]) {
            deprecatedWarnings[opt] = true;
            console.warn(
              formatMessage3(
                opt,
                " has been deprecated since v" + version + " and will be removed in the near future"
              )
            );
          }
          return validator ? validator(value, opt, opts) : true;
        };
      };
      function assertOptions(options, schema, allowUnknown) {
        if (typeof options !== "object") {
          throw new TypeError("options must be an object");
        }
        var keys = Object.keys(options);
        var i2 = keys.length;
        while (i2-- > 0) {
          var opt = keys[i2];
          var validator = schema[opt];
          if (validator) {
            var value = options[opt];
            var result = value === void 0 || validator(value, opt, options);
            if (result !== true) {
              throw new TypeError("option " + opt + " must be " + result);
            }
            continue;
          }
          if (allowUnknown !== true) {
            throw Error("Unknown option " + opt);
          }
        }
      }
      module.exports = {
        assertOptions,
        validators
      };
    }
  });

  // ../../node_modules/axios/lib/core/Axios.js
  var require_Axios = __commonJS({
    "../../node_modules/axios/lib/core/Axios.js"(exports, module) {
      "use strict";
      var utils = require_utils();
      var buildURL = require_buildURL();
      var InterceptorManager = require_InterceptorManager();
      var dispatchRequest = require_dispatchRequest();
      var mergeConfig2 = require_mergeConfig();
      var validator = require_validator();
      var validators = validator.validators;
      function Axios(instanceConfig) {
        this.defaults = instanceConfig;
        this.interceptors = {
          request: new InterceptorManager(),
          response: new InterceptorManager()
        };
      }
      Axios.prototype.request = function request(configOrUrl, config) {
        if (typeof configOrUrl === "string") {
          config = config || {};
          config.url = configOrUrl;
        } else {
          config = configOrUrl || {};
        }
        if (!config.url) {
          throw new Error("Provided config url is not valid");
        }
        config = mergeConfig2(this.defaults, config);
        if (config.method) {
          config.method = config.method.toLowerCase();
        } else if (this.defaults.method) {
          config.method = this.defaults.method.toLowerCase();
        } else {
          config.method = "get";
        }
        var transitional = config.transitional;
        if (transitional !== void 0) {
          validator.assertOptions(transitional, {
            silentJSONParsing: validators.transitional(validators.boolean),
            forcedJSONParsing: validators.transitional(validators.boolean),
            clarifyTimeoutError: validators.transitional(validators.boolean)
          }, false);
        }
        var requestInterceptorChain = [];
        var synchronousRequestInterceptors = true;
        this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
          if (typeof interceptor.runWhen === "function" && interceptor.runWhen(config) === false) {
            return;
          }
          synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;
          requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
        });
        var responseInterceptorChain = [];
        this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
          responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
        });
        var promise;
        if (!synchronousRequestInterceptors) {
          var chain = [dispatchRequest, void 0];
          Array.prototype.unshift.apply(chain, requestInterceptorChain);
          chain = chain.concat(responseInterceptorChain);
          promise = Promise.resolve(config);
          while (chain.length) {
            promise = promise.then(chain.shift(), chain.shift());
          }
          return promise;
        }
        var newConfig = config;
        while (requestInterceptorChain.length) {
          var onFulfilled = requestInterceptorChain.shift();
          var onRejected = requestInterceptorChain.shift();
          try {
            newConfig = onFulfilled(newConfig);
          } catch (error) {
            onRejected(error);
            break;
          }
        }
        try {
          promise = dispatchRequest(newConfig);
        } catch (error) {
          return Promise.reject(error);
        }
        while (responseInterceptorChain.length) {
          promise = promise.then(responseInterceptorChain.shift(), responseInterceptorChain.shift());
        }
        return promise;
      };
      Axios.prototype.getUri = function getUri(config) {
        if (!config.url) {
          throw new Error("Provided config url is not valid");
        }
        config = mergeConfig2(this.defaults, config);
        return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, "");
      };
      utils.forEach(["delete", "get", "head", "options"], function forEachMethodNoData(method) {
        Axios.prototype[method] = function(url, config) {
          return this.request(mergeConfig2(config || {}, {
            method,
            url,
            data: (config || {}).data
          }));
        };
      });
      utils.forEach(["post", "put", "patch"], function forEachMethodWithData(method) {
        Axios.prototype[method] = function(url, data, config) {
          return this.request(mergeConfig2(config || {}, {
            method,
            url,
            data
          }));
        };
      });
      module.exports = Axios;
    }
  });

  // ../../node_modules/axios/lib/cancel/CancelToken.js
  var require_CancelToken = __commonJS({
    "../../node_modules/axios/lib/cancel/CancelToken.js"(exports, module) {
      "use strict";
      var Cancel = require_Cancel();
      function CancelToken(executor) {
        if (typeof executor !== "function") {
          throw new TypeError("executor must be a function.");
        }
        var resolvePromise;
        this.promise = new Promise(function promiseExecutor(resolve) {
          resolvePromise = resolve;
        });
        var token = this;
        this.promise.then(function(cancel) {
          if (!token._listeners)
            return;
          var i2;
          var l2 = token._listeners.length;
          for (i2 = 0; i2 < l2; i2++) {
            token._listeners[i2](cancel);
          }
          token._listeners = null;
        });
        this.promise.then = function(onfulfilled) {
          var _resolve;
          var promise = new Promise(function(resolve) {
            token.subscribe(resolve);
            _resolve = resolve;
          }).then(onfulfilled);
          promise.cancel = function reject() {
            token.unsubscribe(_resolve);
          };
          return promise;
        };
        executor(function cancel(message) {
          if (token.reason) {
            return;
          }
          token.reason = new Cancel(message);
          resolvePromise(token.reason);
        });
      }
      CancelToken.prototype.throwIfRequested = function throwIfRequested() {
        if (this.reason) {
          throw this.reason;
        }
      };
      CancelToken.prototype.subscribe = function subscribe(listener) {
        if (this.reason) {
          listener(this.reason);
          return;
        }
        if (this._listeners) {
          this._listeners.push(listener);
        } else {
          this._listeners = [listener];
        }
      };
      CancelToken.prototype.unsubscribe = function unsubscribe(listener) {
        if (!this._listeners) {
          return;
        }
        var index2 = this._listeners.indexOf(listener);
        if (index2 !== -1) {
          this._listeners.splice(index2, 1);
        }
      };
      CancelToken.source = function source() {
        var cancel;
        var token = new CancelToken(function executor(c2) {
          cancel = c2;
        });
        return {
          token,
          cancel
        };
      };
      module.exports = CancelToken;
    }
  });

  // ../../node_modules/axios/lib/helpers/spread.js
  var require_spread = __commonJS({
    "../../node_modules/axios/lib/helpers/spread.js"(exports, module) {
      "use strict";
      module.exports = function spread(callback) {
        return function wrap(arr) {
          return callback.apply(null, arr);
        };
      };
    }
  });

  // ../../node_modules/axios/lib/helpers/isAxiosError.js
  var require_isAxiosError = __commonJS({
    "../../node_modules/axios/lib/helpers/isAxiosError.js"(exports, module) {
      "use strict";
      var utils = require_utils();
      module.exports = function isAxiosError(payload) {
        return utils.isObject(payload) && payload.isAxiosError === true;
      };
    }
  });

  // ../../node_modules/axios/lib/axios.js
  var require_axios = __commonJS({
    "../../node_modules/axios/lib/axios.js"(exports, module) {
      "use strict";
      var utils = require_utils();
      var bind = require_bind();
      var Axios = require_Axios();
      var mergeConfig2 = require_mergeConfig();
      var defaults = require_defaults();
      function createInstance(defaultConfig) {
        var context = new Axios(defaultConfig);
        var instance2 = bind(Axios.prototype.request, context);
        utils.extend(instance2, Axios.prototype, context);
        utils.extend(instance2, context);
        instance2.create = function create2(instanceConfig) {
          return createInstance(mergeConfig2(defaultConfig, instanceConfig));
        };
        return instance2;
      }
      var axios2 = createInstance(defaults);
      axios2.Axios = Axios;
      axios2.Cancel = require_Cancel();
      axios2.CancelToken = require_CancelToken();
      axios2.isCancel = require_isCancel();
      axios2.VERSION = require_data().version;
      axios2.all = function all(promises) {
        return Promise.all(promises);
      };
      axios2.spread = require_spread();
      axios2.isAxiosError = require_isAxiosError();
      module.exports = axios2;
      module.exports.default = axios2;
    }
  });

  // ../../node_modules/axios/index.js
  var require_axios2 = __commonJS({
    "../../node_modules/axios/index.js"(exports, module) {
      module.exports = require_axios();
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
          focusLaterElements.forEach(function(f3) {
            var check = f3 || {};
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
        } catch (e2) {
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
        var x2 = tabbable.indexOf(activeElement);
        if (x2 > -1) {
          x2 += shiftKey ? -1 : 1;
        }
        target = tabbable[x2];
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
        printWarning = function printWarning2(format2, args) {
          var len = arguments.length;
          args = new Array(len > 1 ? len - 1 : 0);
          for (var key = 1; key < len; key++) {
            args[key - 1] = arguments[key];
          }
          var argIndex = 0;
          var message = "Warning: " + format2.replace(/%s/g, function() {
            return args[argIndex++];
          });
          if (typeof console !== "undefined") {
            console.error(message);
          }
          try {
            throw new Error(message);
          } catch (x2) {
          }
        };
        warning = function(condition, format2, args) {
          var len = arguments.length;
          args = new Array(len > 2 ? len - 2 : 0);
          for (var key = 2; key < len; key++) {
            args[key - 2] = arguments[key];
          }
          if (format2 === void 0) {
            throw new Error(
              "`warning(condition, format, ...args)` requires a warning message argument"
            );
          }
          if (!condition) {
            printWarning.apply(null, [format2].concat(args));
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
      exports.hide = hide2;
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
      function hide2(appElement) {
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
          for (var x2 in htmlClassList) {
            buffer += "  " + x2 + " " + htmlClassList[x2] + "\n  ";
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
      function _classCallCheck(instance2, Constructor) {
        if (!(instance2 instanceof Constructor)) {
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
          var index2 = _this.openInstances.indexOf(openInstance);
          if (index2 === -1) {
            if (true) {
              console.warn("React-Modal: Unable to deregister " + openInstance + " as it was never registered");
            }
            return;
          }
          _this.openInstances.splice(index2, 1);
          _this.emit("deregister");
        };
        this.subscribe = function(callback) {
          _this.subscribers.push(callback);
        };
        this.emit = function(eventType) {
          _this.subscribers.forEach(function(subscriber) {
            return subscriber(
              eventType,
              _this.openInstances.slice()
            );
          });
        };
        this.openInstances = [];
        this.subscribers = [];
      };
      var portalOpenInstances = new PortalOpenInstances();
      function log() {
        console.log("portalOpenInstances ----------");
        console.log(portalOpenInstances.openInstances.length);
        portalOpenInstances.openInstances.forEach(function(p2) {
          return console.log(p2);
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
        for (var i2 = 1; i2 < arguments.length; i2++) {
          var source = arguments[i2];
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
          for (var i2 = 0; i2 < props.length; i2++) {
            var descriptor = props[i2];
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
      function _classCallCheck(instance2, Constructor) {
        if (!(instance2 instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _possibleConstructorReturn(self2, call) {
        if (!self2) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return call && (typeof call === "object" || typeof call === "function") ? call : self2;
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
          value: function render2() {
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
      this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(
        prevProps,
        prevState
      );
    } finally {
      this.props = prevProps;
      this.state = prevState;
    }
  }
  function polyfill(Component2) {
    var prototype = Component2.prototype;
    if (!prototype || !prototype.isReactComponent) {
      throw new Error("Can only polyfill class components");
    }
    if (typeof Component2.getDerivedStateFromProps !== "function" && typeof prototype.getSnapshotBeforeUpdate !== "function") {
      return Component2;
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
      var componentName = Component2.displayName || Component2.name;
      var newApiName = typeof Component2.getDerivedStateFromProps === "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
      throw Error(
        "Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n" + componentName + " uses " + newApiName + " but also contains the following legacy lifecycles:" + (foundWillMountName !== null ? "\n  " + foundWillMountName : "") + (foundWillReceivePropsName !== null ? "\n  " + foundWillReceivePropsName : "") + (foundWillUpdateName !== null ? "\n  " + foundWillUpdateName : "") + "\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://fb.me/react-async-component-lifecycle-hooks"
      );
    }
    if (typeof Component2.getDerivedStateFromProps === "function") {
      prototype.componentWillMount = componentWillMount;
      prototype.componentWillReceiveProps = componentWillReceiveProps;
    }
    if (typeof prototype.getSnapshotBeforeUpdate === "function") {
      if (typeof prototype.componentDidUpdate !== "function") {
        throw new Error(
          "Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype"
        );
      }
      prototype.componentWillUpdate = componentWillUpdate;
      var componentDidUpdate = prototype.componentDidUpdate;
      prototype.componentDidUpdate = function componentDidUpdatePolyfill(prevProps, prevState, maybeSnapshot) {
        var snapshot = this.__reactInternalSnapshotFlag ? this.__reactInternalSnapshot : maybeSnapshot;
        componentDidUpdate.call(this, prevProps, prevState, snapshot);
      };
    }
    return Component2;
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
        for (var i2 = 1; i2 < arguments.length; i2++) {
          var source = arguments[i2];
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
          for (var i2 = 0; i2 < props.length; i2++) {
            var descriptor = props[i2];
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
      function _classCallCheck(instance2, Constructor) {
        if (!(instance2 instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _possibleConstructorReturn(self2, call) {
        if (!self2) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return call && (typeof call === "object" || typeof call === "function") ? call : self2;
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
            var createPortal2 = getCreatePortal();
            var portal = createPortal2(_this, _react2.default.createElement(_ModalPortal2.default, _extends2({ defaultStyles: Modal2.defaultStyles }, props)), _this.node);
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
          value: function componentDidUpdate(prevProps, _2, snapshot) {
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
            var now2 = Date.now();
            var closesAt = state.isOpen && this.props.closeTimeoutMS && (state.closesAt || now2 + this.props.closeTimeoutMS);
            if (closesAt) {
              if (!state.beforeClose) {
                this.portal.closeWithTimeout();
              }
              setTimeout(this.removePortal, closesAt - now2);
            } else {
              this.removePortal();
            }
          }
        }, {
          key: "render",
          value: function render2() {
            if (!_safeHTMLElement.canUseDOM || !isReact16) {
              return null;
            }
            if (!this.node && isReact16) {
              this.node = createHTMLElement("div");
            }
            var createPortal2 = getCreatePortal();
            return createPortal2(_react2.default.createElement(_ModalPortal2.default, _extends2({
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
          return _react2.default.createElement(
            "div",
            props,
            contentEl
          );
        },
        contentElement: function contentElement(props, children) {
          return _react2.default.createElement(
            "div",
            props,
            children
          );
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
        Modal.setCreateHTMLElement = function(fn3) {
          return createHTMLElement = fn3;
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

  // external-global:@thelia/blocks-editor
  var require_blocks_editor = __commonJS({
    "external-global:@thelia/blocks-editor"(exports, module) {
      module.exports = TheliaBlocks;
    }
  });

  // src/index.tsx
  var src_exports = {};
  __export(src_exports, {
    default: () => src_default
  });

  // src/Image/index.tsx
  var import_react13 = __toESM(require_react());

  // ../../node_modules/tslib/modules/index.js
  var import_tslib = __toESM(require_tslib(), 1);
  var {
    __extends,
    __assign,
    __rest,
    __decorate,
    __param,
    __metadata,
    __awaiter,
    __generator,
    __exportStar,
    __createBinding,
    __values,
    __read,
    __spread,
    __spreadArrays,
    __spreadArray,
    __await,
    __asyncGenerator,
    __asyncDelegator,
    __asyncValues,
    __makeTemplateObject,
    __importStar,
    __importDefault,
    __classPrivateFieldGet,
    __classPrivateFieldSet,
    __classPrivateFieldIn
  } = import_tslib.default;

  // ../../node_modules/react-intl/lib/src/components/createFormattedComponent.js
  var React5 = __toESM(require_react());

  // ../../node_modules/react-intl/lib/src/components/useIntl.js
  var React4 = __toESM(require_react());

  // ../../node_modules/react-intl/lib/src/components/injectIntl.js
  var React3 = __toESM(require_react());
  var import_hoist_non_react_statics = __toESM(require_hoist_non_react_statics_cjs());

  // ../../node_modules/react-intl/lib/src/utils.js
  var React2 = __toESM(require_react());

  // ../../node_modules/@formatjs/ecma402-abstract/lib/utils.js
  function invariant(condition, message, Err) {
    if (Err === void 0) {
      Err = Error;
    }
    if (!condition) {
      throw new Err(message);
    }
  }

  // ../../node_modules/@formatjs/icu-messageformat-parser/lib/error.js
  var ErrorKind;
  (function(ErrorKind2) {
    ErrorKind2[ErrorKind2["EXPECT_ARGUMENT_CLOSING_BRACE"] = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE";
    ErrorKind2[ErrorKind2["EMPTY_ARGUMENT"] = 2] = "EMPTY_ARGUMENT";
    ErrorKind2[ErrorKind2["MALFORMED_ARGUMENT"] = 3] = "MALFORMED_ARGUMENT";
    ErrorKind2[ErrorKind2["EXPECT_ARGUMENT_TYPE"] = 4] = "EXPECT_ARGUMENT_TYPE";
    ErrorKind2[ErrorKind2["INVALID_ARGUMENT_TYPE"] = 5] = "INVALID_ARGUMENT_TYPE";
    ErrorKind2[ErrorKind2["EXPECT_ARGUMENT_STYLE"] = 6] = "EXPECT_ARGUMENT_STYLE";
    ErrorKind2[ErrorKind2["INVALID_NUMBER_SKELETON"] = 7] = "INVALID_NUMBER_SKELETON";
    ErrorKind2[ErrorKind2["INVALID_DATE_TIME_SKELETON"] = 8] = "INVALID_DATE_TIME_SKELETON";
    ErrorKind2[ErrorKind2["EXPECT_NUMBER_SKELETON"] = 9] = "EXPECT_NUMBER_SKELETON";
    ErrorKind2[ErrorKind2["EXPECT_DATE_TIME_SKELETON"] = 10] = "EXPECT_DATE_TIME_SKELETON";
    ErrorKind2[ErrorKind2["UNCLOSED_QUOTE_IN_ARGUMENT_STYLE"] = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE";
    ErrorKind2[ErrorKind2["EXPECT_SELECT_ARGUMENT_OPTIONS"] = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS";
    ErrorKind2[ErrorKind2["EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE"] = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE";
    ErrorKind2[ErrorKind2["INVALID_PLURAL_ARGUMENT_OFFSET_VALUE"] = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE";
    ErrorKind2[ErrorKind2["EXPECT_SELECT_ARGUMENT_SELECTOR"] = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR";
    ErrorKind2[ErrorKind2["EXPECT_PLURAL_ARGUMENT_SELECTOR"] = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR";
    ErrorKind2[ErrorKind2["EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT"] = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT";
    ErrorKind2[ErrorKind2["EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT"] = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT";
    ErrorKind2[ErrorKind2["INVALID_PLURAL_ARGUMENT_SELECTOR"] = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR";
    ErrorKind2[ErrorKind2["DUPLICATE_PLURAL_ARGUMENT_SELECTOR"] = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR";
    ErrorKind2[ErrorKind2["DUPLICATE_SELECT_ARGUMENT_SELECTOR"] = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR";
    ErrorKind2[ErrorKind2["MISSING_OTHER_CLAUSE"] = 22] = "MISSING_OTHER_CLAUSE";
    ErrorKind2[ErrorKind2["INVALID_TAG"] = 23] = "INVALID_TAG";
    ErrorKind2[ErrorKind2["INVALID_TAG_NAME"] = 25] = "INVALID_TAG_NAME";
    ErrorKind2[ErrorKind2["UNMATCHED_CLOSING_TAG"] = 26] = "UNMATCHED_CLOSING_TAG";
    ErrorKind2[ErrorKind2["UNCLOSED_TAG"] = 27] = "UNCLOSED_TAG";
  })(ErrorKind || (ErrorKind = {}));

  // ../../node_modules/@formatjs/icu-messageformat-parser/lib/types.js
  var TYPE;
  (function(TYPE2) {
    TYPE2[TYPE2["literal"] = 0] = "literal";
    TYPE2[TYPE2["argument"] = 1] = "argument";
    TYPE2[TYPE2["number"] = 2] = "number";
    TYPE2[TYPE2["date"] = 3] = "date";
    TYPE2[TYPE2["time"] = 4] = "time";
    TYPE2[TYPE2["select"] = 5] = "select";
    TYPE2[TYPE2["plural"] = 6] = "plural";
    TYPE2[TYPE2["pound"] = 7] = "pound";
    TYPE2[TYPE2["tag"] = 8] = "tag";
  })(TYPE || (TYPE = {}));
  var SKELETON_TYPE;
  (function(SKELETON_TYPE2) {
    SKELETON_TYPE2[SKELETON_TYPE2["number"] = 0] = "number";
    SKELETON_TYPE2[SKELETON_TYPE2["dateTime"] = 1] = "dateTime";
  })(SKELETON_TYPE || (SKELETON_TYPE = {}));
  function isLiteralElement(el) {
    return el.type === TYPE.literal;
  }
  function isArgumentElement(el) {
    return el.type === TYPE.argument;
  }
  function isNumberElement(el) {
    return el.type === TYPE.number;
  }
  function isDateElement(el) {
    return el.type === TYPE.date;
  }
  function isTimeElement(el) {
    return el.type === TYPE.time;
  }
  function isSelectElement(el) {
    return el.type === TYPE.select;
  }
  function isPluralElement(el) {
    return el.type === TYPE.plural;
  }
  function isPoundElement(el) {
    return el.type === TYPE.pound;
  }
  function isTagElement(el) {
    return el.type === TYPE.tag;
  }
  function isNumberSkeleton(el) {
    return !!(el && typeof el === "object" && el.type === SKELETON_TYPE.number);
  }
  function isDateTimeSkeleton(el) {
    return !!(el && typeof el === "object" && el.type === SKELETON_TYPE.dateTime);
  }

  // ../../node_modules/@formatjs/icu-messageformat-parser/lib/regex.generated.js
  var SPACE_SEPARATOR_REGEX = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/;

  // ../../node_modules/@formatjs/icu-skeleton-parser/lib/date-time.js
  var DATE_TIME_REGEX = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
  function parseDateTimeSkeleton(skeleton) {
    var result = {};
    skeleton.replace(DATE_TIME_REGEX, function(match) {
      var len = match.length;
      switch (match[0]) {
        case "G":
          result.era = len === 4 ? "long" : len === 5 ? "narrow" : "short";
          break;
        case "y":
          result.year = len === 2 ? "2-digit" : "numeric";
          break;
        case "Y":
        case "u":
        case "U":
        case "r":
          throw new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");
        case "q":
        case "Q":
          throw new RangeError("`q/Q` (quarter) patterns are not supported");
        case "M":
        case "L":
          result.month = ["numeric", "2-digit", "short", "long", "narrow"][len - 1];
          break;
        case "w":
        case "W":
          throw new RangeError("`w/W` (week) patterns are not supported");
        case "d":
          result.day = ["numeric", "2-digit"][len - 1];
          break;
        case "D":
        case "F":
        case "g":
          throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");
        case "E":
          result.weekday = len === 4 ? "short" : len === 5 ? "narrow" : "short";
          break;
        case "e":
          if (len < 4) {
            throw new RangeError("`e..eee` (weekday) patterns are not supported");
          }
          result.weekday = ["short", "long", "narrow", "short"][len - 4];
          break;
        case "c":
          if (len < 4) {
            throw new RangeError("`c..ccc` (weekday) patterns are not supported");
          }
          result.weekday = ["short", "long", "narrow", "short"][len - 4];
          break;
        case "a":
          result.hour12 = true;
          break;
        case "b":
        case "B":
          throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead");
        case "h":
          result.hourCycle = "h12";
          result.hour = ["numeric", "2-digit"][len - 1];
          break;
        case "H":
          result.hourCycle = "h23";
          result.hour = ["numeric", "2-digit"][len - 1];
          break;
        case "K":
          result.hourCycle = "h11";
          result.hour = ["numeric", "2-digit"][len - 1];
          break;
        case "k":
          result.hourCycle = "h24";
          result.hour = ["numeric", "2-digit"][len - 1];
          break;
        case "j":
        case "J":
        case "C":
          throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");
        case "m":
          result.minute = ["numeric", "2-digit"][len - 1];
          break;
        case "s":
          result.second = ["numeric", "2-digit"][len - 1];
          break;
        case "S":
        case "A":
          throw new RangeError("`S/A` (second) patterns are not supported, use `s` instead");
        case "z":
          result.timeZoneName = len < 4 ? "short" : "long";
          break;
        case "Z":
        case "O":
        case "v":
        case "V":
        case "X":
        case "x":
          throw new RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead");
      }
      return "";
    });
    return result;
  }

  // ../../node_modules/@formatjs/icu-skeleton-parser/lib/regex.generated.js
  var WHITE_SPACE_REGEX = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;

  // ../../node_modules/@formatjs/icu-skeleton-parser/lib/number.js
  function parseNumberSkeletonFromString(skeleton) {
    if (skeleton.length === 0) {
      throw new Error("Number skeleton cannot be empty");
    }
    var stringTokens = skeleton.split(WHITE_SPACE_REGEX).filter(function(x2) {
      return x2.length > 0;
    });
    var tokens = [];
    for (var _i = 0, stringTokens_1 = stringTokens; _i < stringTokens_1.length; _i++) {
      var stringToken = stringTokens_1[_i];
      var stemAndOptions = stringToken.split("/");
      if (stemAndOptions.length === 0) {
        throw new Error("Invalid number skeleton");
      }
      var stem = stemAndOptions[0], options = stemAndOptions.slice(1);
      for (var _a2 = 0, options_1 = options; _a2 < options_1.length; _a2++) {
        var option = options_1[_a2];
        if (option.length === 0) {
          throw new Error("Invalid number skeleton");
        }
      }
      tokens.push({ stem, options });
    }
    return tokens;
  }
  function icuUnitToEcma(unit) {
    return unit.replace(/^(.*?)-/, "");
  }
  var FRACTION_PRECISION_REGEX = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g;
  var SIGNIFICANT_PRECISION_REGEX = /^(@+)?(\+|#+)?[rs]?$/g;
  var INTEGER_WIDTH_REGEX = /(\*)(0+)|(#+)(0+)|(0+)/g;
  var CONCISE_INTEGER_WIDTH_REGEX = /^(0+)$/;
  function parseSignificantPrecision(str) {
    var result = {};
    if (str[str.length - 1] === "r") {
      result.roundingPriority = "morePrecision";
    } else if (str[str.length - 1] === "s") {
      result.roundingPriority = "lessPrecision";
    }
    str.replace(SIGNIFICANT_PRECISION_REGEX, function(_2, g1, g22) {
      if (typeof g22 !== "string") {
        result.minimumSignificantDigits = g1.length;
        result.maximumSignificantDigits = g1.length;
      } else if (g22 === "+") {
        result.minimumSignificantDigits = g1.length;
      } else if (g1[0] === "#") {
        result.maximumSignificantDigits = g1.length;
      } else {
        result.minimumSignificantDigits = g1.length;
        result.maximumSignificantDigits = g1.length + (typeof g22 === "string" ? g22.length : 0);
      }
      return "";
    });
    return result;
  }
  function parseSign(str) {
    switch (str) {
      case "sign-auto":
        return {
          signDisplay: "auto"
        };
      case "sign-accounting":
      case "()":
        return {
          currencySign: "accounting"
        };
      case "sign-always":
      case "+!":
        return {
          signDisplay: "always"
        };
      case "sign-accounting-always":
      case "()!":
        return {
          signDisplay: "always",
          currencySign: "accounting"
        };
      case "sign-except-zero":
      case "+?":
        return {
          signDisplay: "exceptZero"
        };
      case "sign-accounting-except-zero":
      case "()?":
        return {
          signDisplay: "exceptZero",
          currencySign: "accounting"
        };
      case "sign-never":
      case "+_":
        return {
          signDisplay: "never"
        };
    }
  }
  function parseConciseScientificAndEngineeringStem(stem) {
    var result;
    if (stem[0] === "E" && stem[1] === "E") {
      result = {
        notation: "engineering"
      };
      stem = stem.slice(2);
    } else if (stem[0] === "E") {
      result = {
        notation: "scientific"
      };
      stem = stem.slice(1);
    }
    if (result) {
      var signDisplay = stem.slice(0, 2);
      if (signDisplay === "+!") {
        result.signDisplay = "always";
        stem = stem.slice(2);
      } else if (signDisplay === "+?") {
        result.signDisplay = "exceptZero";
        stem = stem.slice(2);
      }
      if (!CONCISE_INTEGER_WIDTH_REGEX.test(stem)) {
        throw new Error("Malformed concise eng/scientific notation");
      }
      result.minimumIntegerDigits = stem.length;
    }
    return result;
  }
  function parseNotationOptions(opt) {
    var result = {};
    var signOpts = parseSign(opt);
    if (signOpts) {
      return signOpts;
    }
    return result;
  }
  function parseNumberSkeleton(tokens) {
    var result = {};
    for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
      var token = tokens_1[_i];
      switch (token.stem) {
        case "percent":
        case "%":
          result.style = "percent";
          continue;
        case "%x100":
          result.style = "percent";
          result.scale = 100;
          continue;
        case "currency":
          result.style = "currency";
          result.currency = token.options[0];
          continue;
        case "group-off":
        case ",_":
          result.useGrouping = false;
          continue;
        case "precision-integer":
        case ".":
          result.maximumFractionDigits = 0;
          continue;
        case "measure-unit":
        case "unit":
          result.style = "unit";
          result.unit = icuUnitToEcma(token.options[0]);
          continue;
        case "compact-short":
        case "K":
          result.notation = "compact";
          result.compactDisplay = "short";
          continue;
        case "compact-long":
        case "KK":
          result.notation = "compact";
          result.compactDisplay = "long";
          continue;
        case "scientific":
          result = __assign(__assign(__assign({}, result), { notation: "scientific" }), token.options.reduce(function(all, opt2) {
            return __assign(__assign({}, all), parseNotationOptions(opt2));
          }, {}));
          continue;
        case "engineering":
          result = __assign(__assign(__assign({}, result), { notation: "engineering" }), token.options.reduce(function(all, opt2) {
            return __assign(__assign({}, all), parseNotationOptions(opt2));
          }, {}));
          continue;
        case "notation-simple":
          result.notation = "standard";
          continue;
        case "unit-width-narrow":
          result.currencyDisplay = "narrowSymbol";
          result.unitDisplay = "narrow";
          continue;
        case "unit-width-short":
          result.currencyDisplay = "code";
          result.unitDisplay = "short";
          continue;
        case "unit-width-full-name":
          result.currencyDisplay = "name";
          result.unitDisplay = "long";
          continue;
        case "unit-width-iso-code":
          result.currencyDisplay = "symbol";
          continue;
        case "scale":
          result.scale = parseFloat(token.options[0]);
          continue;
        case "integer-width":
          if (token.options.length > 1) {
            throw new RangeError("integer-width stems only accept a single optional option");
          }
          token.options[0].replace(INTEGER_WIDTH_REGEX, function(_2, g1, g22, g3, g4, g5) {
            if (g1) {
              result.minimumIntegerDigits = g22.length;
            } else if (g3 && g4) {
              throw new Error("We currently do not support maximum integer digits");
            } else if (g5) {
              throw new Error("We currently do not support exact integer digits");
            }
            return "";
          });
          continue;
      }
      if (CONCISE_INTEGER_WIDTH_REGEX.test(token.stem)) {
        result.minimumIntegerDigits = token.stem.length;
        continue;
      }
      if (FRACTION_PRECISION_REGEX.test(token.stem)) {
        if (token.options.length > 1) {
          throw new RangeError("Fraction-precision stems only accept a single optional option");
        }
        token.stem.replace(FRACTION_PRECISION_REGEX, function(_2, g1, g22, g3, g4, g5) {
          if (g22 === "*") {
            result.minimumFractionDigits = g1.length;
          } else if (g3 && g3[0] === "#") {
            result.maximumFractionDigits = g3.length;
          } else if (g4 && g5) {
            result.minimumFractionDigits = g4.length;
            result.maximumFractionDigits = g4.length + g5.length;
          } else {
            result.minimumFractionDigits = g1.length;
            result.maximumFractionDigits = g1.length;
          }
          return "";
        });
        var opt = token.options[0];
        if (opt === "w") {
          result = __assign(__assign({}, result), { trailingZeroDisplay: "stripIfInteger" });
        } else if (opt) {
          result = __assign(__assign({}, result), parseSignificantPrecision(opt));
        }
        continue;
      }
      if (SIGNIFICANT_PRECISION_REGEX.test(token.stem)) {
        result = __assign(__assign({}, result), parseSignificantPrecision(token.stem));
        continue;
      }
      var signOpts = parseSign(token.stem);
      if (signOpts) {
        result = __assign(__assign({}, result), signOpts);
      }
      var conciseScientificAndEngineeringOpts = parseConciseScientificAndEngineeringStem(token.stem);
      if (conciseScientificAndEngineeringOpts) {
        result = __assign(__assign({}, result), conciseScientificAndEngineeringOpts);
      }
    }
    return result;
  }

  // ../../node_modules/@formatjs/icu-messageformat-parser/lib/time-data.generated.js
  var timeData = {
    "AX": [
      "H"
    ],
    "BQ": [
      "H"
    ],
    "CP": [
      "H"
    ],
    "CZ": [
      "H"
    ],
    "DK": [
      "H"
    ],
    "FI": [
      "H"
    ],
    "ID": [
      "H"
    ],
    "IS": [
      "H"
    ],
    "ML": [
      "H"
    ],
    "NE": [
      "H"
    ],
    "RU": [
      "H"
    ],
    "SE": [
      "H"
    ],
    "SJ": [
      "H"
    ],
    "SK": [
      "H"
    ],
    "AS": [
      "h",
      "H"
    ],
    "BT": [
      "h",
      "H"
    ],
    "DJ": [
      "h",
      "H"
    ],
    "ER": [
      "h",
      "H"
    ],
    "GH": [
      "h",
      "H"
    ],
    "IN": [
      "h",
      "H"
    ],
    "LS": [
      "h",
      "H"
    ],
    "PG": [
      "h",
      "H"
    ],
    "PW": [
      "h",
      "H"
    ],
    "SO": [
      "h",
      "H"
    ],
    "TO": [
      "h",
      "H"
    ],
    "VU": [
      "h",
      "H"
    ],
    "WS": [
      "h",
      "H"
    ],
    "001": [
      "H",
      "h"
    ],
    "AL": [
      "h",
      "H",
      "hB"
    ],
    "TD": [
      "h",
      "H",
      "hB"
    ],
    "ca-ES": [
      "H",
      "h",
      "hB"
    ],
    "CF": [
      "H",
      "h",
      "hB"
    ],
    "CM": [
      "H",
      "h",
      "hB"
    ],
    "fr-CA": [
      "H",
      "h",
      "hB"
    ],
    "gl-ES": [
      "H",
      "h",
      "hB"
    ],
    "it-CH": [
      "H",
      "h",
      "hB"
    ],
    "it-IT": [
      "H",
      "h",
      "hB"
    ],
    "LU": [
      "H",
      "h",
      "hB"
    ],
    "NP": [
      "H",
      "h",
      "hB"
    ],
    "PF": [
      "H",
      "h",
      "hB"
    ],
    "SC": [
      "H",
      "h",
      "hB"
    ],
    "SM": [
      "H",
      "h",
      "hB"
    ],
    "SN": [
      "H",
      "h",
      "hB"
    ],
    "TF": [
      "H",
      "h",
      "hB"
    ],
    "VA": [
      "H",
      "h",
      "hB"
    ],
    "CY": [
      "h",
      "H",
      "hb",
      "hB"
    ],
    "GR": [
      "h",
      "H",
      "hb",
      "hB"
    ],
    "CO": [
      "h",
      "H",
      "hB",
      "hb"
    ],
    "DO": [
      "h",
      "H",
      "hB",
      "hb"
    ],
    "KP": [
      "h",
      "H",
      "hB",
      "hb"
    ],
    "KR": [
      "h",
      "H",
      "hB",
      "hb"
    ],
    "NA": [
      "h",
      "H",
      "hB",
      "hb"
    ],
    "PA": [
      "h",
      "H",
      "hB",
      "hb"
    ],
    "PR": [
      "h",
      "H",
      "hB",
      "hb"
    ],
    "VE": [
      "h",
      "H",
      "hB",
      "hb"
    ],
    "AC": [
      "H",
      "h",
      "hb",
      "hB"
    ],
    "AI": [
      "H",
      "h",
      "hb",
      "hB"
    ],
    "BW": [
      "H",
      "h",
      "hb",
      "hB"
    ],
    "BZ": [
      "H",
      "h",
      "hb",
      "hB"
    ],
    "CC": [
      "H",
      "h",
      "hb",
      "hB"
    ],
    "CK": [
      "H",
      "h",
      "hb",
      "hB"
    ],
    "CX": [
      "H",
      "h",
      "hb",
      "hB"
    ],
    "DG": [
      "H",
      "h",
      "hb",
      "hB"
    ],
    "FK": [
      "H",
      "h",
      "hb",
      "hB"
    ],
    "GB": [
      "H",
      "h",
      "hb",
      "hB"
    ],
    "GG": [
      "H",
      "h",
      "hb",
      "hB"
    ],
    "GI": [
      "H",
      "h",
      "hb",
      "hB"
    ],
    "IE": [
      "H",
      "h",
      "hb",
      "hB"
    ],
    "IM": [
      "H",
      "h",
      "hb",
      "hB"
    ],
    "IO": [
      "H",
      "h",
      "hb",
      "hB"
    ],
    "JE": [
      "H",
      "h",
      "hb",
      "hB"
    ],
    "LT": [
      "H",
      "h",
      "hb",
      "hB"
    ],
    "MK": [
      "H",
      "h",
      "hb",
      "hB"
    ],
    "MN": [
      "H",
      "h",
      "hb",
      "hB"
    ],
    "MS": [
      "H",
      "h",
      "hb",
      "hB"
    ],
    "NF": [
      "H",
      "h",
      "hb",
      "hB"
    ],
    "NG": [
      "H",
      "h",
      "hb",
      "hB"
    ],
    "NR": [
      "H",
      "h",
      "hb",
      "hB"
    ],
    "NU": [
      "H",
      "h",
      "hb",
      "hB"
    ],
    "PN": [
      "H",
      "h",
      "hb",
      "hB"
    ],
    "SH": [
      "H",
      "h",
      "hb",
      "hB"
    ],
    "SX": [
      "H",
      "h",
      "hb",
      "hB"
    ],
    "TA": [
      "H",
      "h",
      "hb",
      "hB"
    ],
    "ZA": [
      "H",
      "h",
      "hb",
      "hB"
    ],
    "af-ZA": [
      "H",
      "h",
      "hB",
      "hb"
    ],
    "AR": [
      "H",
      "h",
      "hB",
      "hb"
    ],
    "CL": [
      "H",
      "h",
      "hB",
      "hb"
    ],
    "CR": [
      "H",
      "h",
      "hB",
      "hb"
    ],
    "CU": [
      "H",
      "h",
      "hB",
      "hb"
    ],
    "EA": [
      "H",
      "h",
      "hB",
      "hb"
    ],
    "es-BO": [
      "H",
      "h",
      "hB",
      "hb"
    ],
    "es-BR": [
      "H",
      "h",
      "hB",
      "hb"
    ],
    "es-EC": [
      "H",
      "h",
      "hB",
      "hb"
    ],
    "es-ES": [
      "H",
      "h",
      "hB",
      "hb"
    ],
    "es-GQ": [
      "H",
      "h",
      "hB",
      "hb"
    ],
    "es-PE": [
      "H",
      "h",
      "hB",
      "hb"
    ],
    "GT": [
      "H",
      "h",
      "hB",
      "hb"
    ],
    "HN": [
      "H",
      "h",
      "hB",
      "hb"
    ],
    "IC": [
      "H",
      "h",
      "hB",
      "hb"
    ],
    "KG": [
      "H",
      "h",
      "hB",
      "hb"
    ],
    "KM": [
      "H",
      "h",
      "hB",
      "hb"
    ],
    "LK": [
      "H",
      "h",
      "hB",
      "hb"
    ],
    "MA": [
      "H",
      "h",
      "hB",
      "hb"
    ],
    "MX": [
      "H",
      "h",
      "hB",
      "hb"
    ],
    "NI": [
      "H",
      "h",
      "hB",
      "hb"
    ],
    "PY": [
      "H",
      "h",
      "hB",
      "hb"
    ],
    "SV": [
      "H",
      "h",
      "hB",
      "hb"
    ],
    "UY": [
      "H",
      "h",
      "hB",
      "hb"
    ],
    "JP": [
      "H",
      "h",
      "K"
    ],
    "AD": [
      "H",
      "hB"
    ],
    "AM": [
      "H",
      "hB"
    ],
    "AO": [
      "H",
      "hB"
    ],
    "AT": [
      "H",
      "hB"
    ],
    "AW": [
      "H",
      "hB"
    ],
    "BE": [
      "H",
      "hB"
    ],
    "BF": [
      "H",
      "hB"
    ],
    "BJ": [
      "H",
      "hB"
    ],
    "BL": [
      "H",
      "hB"
    ],
    "BR": [
      "H",
      "hB"
    ],
    "CG": [
      "H",
      "hB"
    ],
    "CI": [
      "H",
      "hB"
    ],
    "CV": [
      "H",
      "hB"
    ],
    "DE": [
      "H",
      "hB"
    ],
    "EE": [
      "H",
      "hB"
    ],
    "FR": [
      "H",
      "hB"
    ],
    "GA": [
      "H",
      "hB"
    ],
    "GF": [
      "H",
      "hB"
    ],
    "GN": [
      "H",
      "hB"
    ],
    "GP": [
      "H",
      "hB"
    ],
    "GW": [
      "H",
      "hB"
    ],
    "HR": [
      "H",
      "hB"
    ],
    "IL": [
      "H",
      "hB"
    ],
    "IT": [
      "H",
      "hB"
    ],
    "KZ": [
      "H",
      "hB"
    ],
    "MC": [
      "H",
      "hB"
    ],
    "MD": [
      "H",
      "hB"
    ],
    "MF": [
      "H",
      "hB"
    ],
    "MQ": [
      "H",
      "hB"
    ],
    "MZ": [
      "H",
      "hB"
    ],
    "NC": [
      "H",
      "hB"
    ],
    "NL": [
      "H",
      "hB"
    ],
    "PM": [
      "H",
      "hB"
    ],
    "PT": [
      "H",
      "hB"
    ],
    "RE": [
      "H",
      "hB"
    ],
    "RO": [
      "H",
      "hB"
    ],
    "SI": [
      "H",
      "hB"
    ],
    "SR": [
      "H",
      "hB"
    ],
    "ST": [
      "H",
      "hB"
    ],
    "TG": [
      "H",
      "hB"
    ],
    "TR": [
      "H",
      "hB"
    ],
    "WF": [
      "H",
      "hB"
    ],
    "YT": [
      "H",
      "hB"
    ],
    "BD": [
      "h",
      "hB",
      "H"
    ],
    "PK": [
      "h",
      "hB",
      "H"
    ],
    "AZ": [
      "H",
      "hB",
      "h"
    ],
    "BA": [
      "H",
      "hB",
      "h"
    ],
    "BG": [
      "H",
      "hB",
      "h"
    ],
    "CH": [
      "H",
      "hB",
      "h"
    ],
    "GE": [
      "H",
      "hB",
      "h"
    ],
    "LI": [
      "H",
      "hB",
      "h"
    ],
    "ME": [
      "H",
      "hB",
      "h"
    ],
    "RS": [
      "H",
      "hB",
      "h"
    ],
    "UA": [
      "H",
      "hB",
      "h"
    ],
    "UZ": [
      "H",
      "hB",
      "h"
    ],
    "XK": [
      "H",
      "hB",
      "h"
    ],
    "AG": [
      "h",
      "hb",
      "H",
      "hB"
    ],
    "AU": [
      "h",
      "hb",
      "H",
      "hB"
    ],
    "BB": [
      "h",
      "hb",
      "H",
      "hB"
    ],
    "BM": [
      "h",
      "hb",
      "H",
      "hB"
    ],
    "BS": [
      "h",
      "hb",
      "H",
      "hB"
    ],
    "CA": [
      "h",
      "hb",
      "H",
      "hB"
    ],
    "DM": [
      "h",
      "hb",
      "H",
      "hB"
    ],
    "en-001": [
      "h",
      "hb",
      "H",
      "hB"
    ],
    "FJ": [
      "h",
      "hb",
      "H",
      "hB"
    ],
    "FM": [
      "h",
      "hb",
      "H",
      "hB"
    ],
    "GD": [
      "h",
      "hb",
      "H",
      "hB"
    ],
    "GM": [
      "h",
      "hb",
      "H",
      "hB"
    ],
    "GU": [
      "h",
      "hb",
      "H",
      "hB"
    ],
    "GY": [
      "h",
      "hb",
      "H",
      "hB"
    ],
    "JM": [
      "h",
      "hb",
      "H",
      "hB"
    ],
    "KI": [
      "h",
      "hb",
      "H",
      "hB"
    ],
    "KN": [
      "h",
      "hb",
      "H",
      "hB"
    ],
    "KY": [
      "h",
      "hb",
      "H",
      "hB"
    ],
    "LC": [
      "h",
      "hb",
      "H",
      "hB"
    ],
    "LR": [
      "h",
      "hb",
      "H",
      "hB"
    ],
    "MH": [
      "h",
      "hb",
      "H",
      "hB"
    ],
    "MP": [
      "h",
      "hb",
      "H",
      "hB"
    ],
    "MW": [
      "h",
      "hb",
      "H",
      "hB"
    ],
    "NZ": [
      "h",
      "hb",
      "H",
      "hB"
    ],
    "SB": [
      "h",
      "hb",
      "H",
      "hB"
    ],
    "SG": [
      "h",
      "hb",
      "H",
      "hB"
    ],
    "SL": [
      "h",
      "hb",
      "H",
      "hB"
    ],
    "SS": [
      "h",
      "hb",
      "H",
      "hB"
    ],
    "SZ": [
      "h",
      "hb",
      "H",
      "hB"
    ],
    "TC": [
      "h",
      "hb",
      "H",
      "hB"
    ],
    "TT": [
      "h",
      "hb",
      "H",
      "hB"
    ],
    "UM": [
      "h",
      "hb",
      "H",
      "hB"
    ],
    "US": [
      "h",
      "hb",
      "H",
      "hB"
    ],
    "VC": [
      "h",
      "hb",
      "H",
      "hB"
    ],
    "VG": [
      "h",
      "hb",
      "H",
      "hB"
    ],
    "VI": [
      "h",
      "hb",
      "H",
      "hB"
    ],
    "ZM": [
      "h",
      "hb",
      "H",
      "hB"
    ],
    "BO": [
      "H",
      "hB",
      "h",
      "hb"
    ],
    "EC": [
      "H",
      "hB",
      "h",
      "hb"
    ],
    "ES": [
      "H",
      "hB",
      "h",
      "hb"
    ],
    "GQ": [
      "H",
      "hB",
      "h",
      "hb"
    ],
    "PE": [
      "H",
      "hB",
      "h",
      "hb"
    ],
    "AE": [
      "h",
      "hB",
      "hb",
      "H"
    ],
    "ar-001": [
      "h",
      "hB",
      "hb",
      "H"
    ],
    "BH": [
      "h",
      "hB",
      "hb",
      "H"
    ],
    "DZ": [
      "h",
      "hB",
      "hb",
      "H"
    ],
    "EG": [
      "h",
      "hB",
      "hb",
      "H"
    ],
    "EH": [
      "h",
      "hB",
      "hb",
      "H"
    ],
    "HK": [
      "h",
      "hB",
      "hb",
      "H"
    ],
    "IQ": [
      "h",
      "hB",
      "hb",
      "H"
    ],
    "JO": [
      "h",
      "hB",
      "hb",
      "H"
    ],
    "KW": [
      "h",
      "hB",
      "hb",
      "H"
    ],
    "LB": [
      "h",
      "hB",
      "hb",
      "H"
    ],
    "LY": [
      "h",
      "hB",
      "hb",
      "H"
    ],
    "MO": [
      "h",
      "hB",
      "hb",
      "H"
    ],
    "MR": [
      "h",
      "hB",
      "hb",
      "H"
    ],
    "OM": [
      "h",
      "hB",
      "hb",
      "H"
    ],
    "PH": [
      "h",
      "hB",
      "hb",
      "H"
    ],
    "PS": [
      "h",
      "hB",
      "hb",
      "H"
    ],
    "QA": [
      "h",
      "hB",
      "hb",
      "H"
    ],
    "SA": [
      "h",
      "hB",
      "hb",
      "H"
    ],
    "SD": [
      "h",
      "hB",
      "hb",
      "H"
    ],
    "SY": [
      "h",
      "hB",
      "hb",
      "H"
    ],
    "TN": [
      "h",
      "hB",
      "hb",
      "H"
    ],
    "YE": [
      "h",
      "hB",
      "hb",
      "H"
    ],
    "AF": [
      "H",
      "hb",
      "hB",
      "h"
    ],
    "LA": [
      "H",
      "hb",
      "hB",
      "h"
    ],
    "CN": [
      "H",
      "hB",
      "hb",
      "h"
    ],
    "LV": [
      "H",
      "hB",
      "hb",
      "h"
    ],
    "TL": [
      "H",
      "hB",
      "hb",
      "h"
    ],
    "zu-ZA": [
      "H",
      "hB",
      "hb",
      "h"
    ],
    "CD": [
      "hB",
      "H"
    ],
    "IR": [
      "hB",
      "H"
    ],
    "hi-IN": [
      "hB",
      "h",
      "H"
    ],
    "kn-IN": [
      "hB",
      "h",
      "H"
    ],
    "ml-IN": [
      "hB",
      "h",
      "H"
    ],
    "te-IN": [
      "hB",
      "h",
      "H"
    ],
    "KH": [
      "hB",
      "h",
      "H",
      "hb"
    ],
    "ta-IN": [
      "hB",
      "h",
      "hb",
      "H"
    ],
    "BN": [
      "hb",
      "hB",
      "h",
      "H"
    ],
    "MY": [
      "hb",
      "hB",
      "h",
      "H"
    ],
    "ET": [
      "hB",
      "hb",
      "h",
      "H"
    ],
    "gu-IN": [
      "hB",
      "hb",
      "h",
      "H"
    ],
    "mr-IN": [
      "hB",
      "hb",
      "h",
      "H"
    ],
    "pa-IN": [
      "hB",
      "hb",
      "h",
      "H"
    ],
    "TW": [
      "hB",
      "hb",
      "h",
      "H"
    ],
    "KE": [
      "hB",
      "hb",
      "H",
      "h"
    ],
    "MM": [
      "hB",
      "hb",
      "H",
      "h"
    ],
    "TZ": [
      "hB",
      "hb",
      "H",
      "h"
    ],
    "UG": [
      "hB",
      "hb",
      "H",
      "h"
    ]
  };

  // ../../node_modules/@formatjs/icu-messageformat-parser/lib/date-time-pattern-generator.js
  function getBestPattern(skeleton, locale2) {
    var skeletonCopy = "";
    for (var patternPos = 0; patternPos < skeleton.length; patternPos++) {
      var patternChar = skeleton.charAt(patternPos);
      if (patternChar === "j") {
        var extraLength = 0;
        while (patternPos + 1 < skeleton.length && skeleton.charAt(patternPos + 1) === patternChar) {
          extraLength++;
          patternPos++;
        }
        var hourLen = 1 + (extraLength & 1);
        var dayPeriodLen = extraLength < 2 ? 1 : 3 + (extraLength >> 1);
        var dayPeriodChar = "a";
        var hourChar = getDefaultHourSymbolFromLocale(locale2);
        if (hourChar == "H" || hourChar == "k") {
          dayPeriodLen = 0;
        }
        while (dayPeriodLen-- > 0) {
          skeletonCopy += dayPeriodChar;
        }
        while (hourLen-- > 0) {
          skeletonCopy = hourChar + skeletonCopy;
        }
      } else if (patternChar === "J") {
        skeletonCopy += "H";
      } else {
        skeletonCopy += patternChar;
      }
    }
    return skeletonCopy;
  }
  function getDefaultHourSymbolFromLocale(locale2) {
    var hourCycle = locale2.hourCycle;
    if (hourCycle === void 0 && locale2.hourCycles && locale2.hourCycles.length) {
      hourCycle = locale2.hourCycles[0];
    }
    if (hourCycle) {
      switch (hourCycle) {
        case "h24":
          return "k";
        case "h23":
          return "H";
        case "h12":
          return "h";
        case "h11":
          return "K";
        default:
          throw new Error("Invalid hourCycle");
      }
    }
    var languageTag = locale2.language;
    var regionTag;
    if (languageTag !== "root") {
      regionTag = locale2.maximize().region;
    }
    var hourCycles = timeData[regionTag || ""] || timeData[languageTag || ""] || timeData["".concat(languageTag, "-001")] || timeData["001"];
    return hourCycles[0];
  }

  // ../../node_modules/@formatjs/icu-messageformat-parser/lib/parser.js
  var _a;
  var SPACE_SEPARATOR_START_REGEX = new RegExp("^".concat(SPACE_SEPARATOR_REGEX.source, "*"));
  var SPACE_SEPARATOR_END_REGEX = new RegExp("".concat(SPACE_SEPARATOR_REGEX.source, "*$"));
  function createLocation(start2, end2) {
    return { start: start2, end: end2 };
  }
  var hasNativeStartsWith = !!String.prototype.startsWith;
  var hasNativeFromCodePoint = !!String.fromCodePoint;
  var hasNativeFromEntries = !!Object.fromEntries;
  var hasNativeCodePointAt = !!String.prototype.codePointAt;
  var hasTrimStart = !!String.prototype.trimStart;
  var hasTrimEnd = !!String.prototype.trimEnd;
  var hasNativeIsSafeInteger = !!Number.isSafeInteger;
  var isSafeInteger = hasNativeIsSafeInteger ? Number.isSafeInteger : function(n3) {
    return typeof n3 === "number" && isFinite(n3) && Math.floor(n3) === n3 && Math.abs(n3) <= 9007199254740991;
  };
  var REGEX_SUPPORTS_U_AND_Y = true;
  try {
    re = RE("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
    REGEX_SUPPORTS_U_AND_Y = ((_a = re.exec("a")) === null || _a === void 0 ? void 0 : _a[0]) === "a";
  } catch (_2) {
    REGEX_SUPPORTS_U_AND_Y = false;
  }
  var re;
  var startsWith = hasNativeStartsWith ? function startsWith2(s2, search, position) {
    return s2.startsWith(search, position);
  } : function startsWith3(s2, search, position) {
    return s2.slice(position, position + search.length) === search;
  };
  var fromCodePoint = hasNativeFromCodePoint ? String.fromCodePoint : function fromCodePoint2() {
    var codePoints = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      codePoints[_i] = arguments[_i];
    }
    var elements = "";
    var length = codePoints.length;
    var i2 = 0;
    var code;
    while (length > i2) {
      code = codePoints[i2++];
      if (code > 1114111)
        throw RangeError(code + " is not a valid code point");
      elements += code < 65536 ? String.fromCharCode(code) : String.fromCharCode(((code -= 65536) >> 10) + 55296, code % 1024 + 56320);
    }
    return elements;
  };
  var fromEntries = hasNativeFromEntries ? Object.fromEntries : function fromEntries2(entries) {
    var obj = {};
    for (var _i = 0, entries_1 = entries; _i < entries_1.length; _i++) {
      var _a2 = entries_1[_i], k2 = _a2[0], v2 = _a2[1];
      obj[k2] = v2;
    }
    return obj;
  };
  var codePointAt = hasNativeCodePointAt ? function codePointAt2(s2, index2) {
    return s2.codePointAt(index2);
  } : function codePointAt3(s2, index2) {
    var size = s2.length;
    if (index2 < 0 || index2 >= size) {
      return void 0;
    }
    var first = s2.charCodeAt(index2);
    var second;
    return first < 55296 || first > 56319 || index2 + 1 === size || (second = s2.charCodeAt(index2 + 1)) < 56320 || second > 57343 ? first : (first - 55296 << 10) + (second - 56320) + 65536;
  };
  var trimStart = hasTrimStart ? function trimStart2(s2) {
    return s2.trimStart();
  } : function trimStart3(s2) {
    return s2.replace(SPACE_SEPARATOR_START_REGEX, "");
  };
  var trimEnd = hasTrimEnd ? function trimEnd2(s2) {
    return s2.trimEnd();
  } : function trimEnd3(s2) {
    return s2.replace(SPACE_SEPARATOR_END_REGEX, "");
  };
  function RE(s2, flag) {
    return new RegExp(s2, flag);
  }
  var matchIdentifierAtIndex;
  if (REGEX_SUPPORTS_U_AND_Y) {
    IDENTIFIER_PREFIX_RE_1 = RE("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
    matchIdentifierAtIndex = function matchIdentifierAtIndex2(s2, index2) {
      var _a2;
      IDENTIFIER_PREFIX_RE_1.lastIndex = index2;
      var match = IDENTIFIER_PREFIX_RE_1.exec(s2);
      return (_a2 = match[1]) !== null && _a2 !== void 0 ? _a2 : "";
    };
  } else {
    matchIdentifierAtIndex = function matchIdentifierAtIndex2(s2, index2) {
      var match = [];
      while (true) {
        var c2 = codePointAt(s2, index2);
        if (c2 === void 0 || _isWhiteSpace(c2) || _isPatternSyntax(c2)) {
          break;
        }
        match.push(c2);
        index2 += c2 >= 65536 ? 2 : 1;
      }
      return fromCodePoint.apply(void 0, match);
    };
  }
  var IDENTIFIER_PREFIX_RE_1;
  var Parser = function() {
    function Parser2(message, options) {
      if (options === void 0) {
        options = {};
      }
      this.message = message;
      this.position = { offset: 0, line: 1, column: 1 };
      this.ignoreTag = !!options.ignoreTag;
      this.locale = options.locale;
      this.requiresOtherClause = !!options.requiresOtherClause;
      this.shouldParseSkeletons = !!options.shouldParseSkeletons;
    }
    Parser2.prototype.parse = function() {
      if (this.offset() !== 0) {
        throw Error("parser can only be used once");
      }
      return this.parseMessage(0, "", false);
    };
    Parser2.prototype.parseMessage = function(nestingLevel, parentArgType, expectingCloseTag) {
      var elements = [];
      while (!this.isEOF()) {
        var char = this.char();
        if (char === 123) {
          var result = this.parseArgument(nestingLevel, expectingCloseTag);
          if (result.err) {
            return result;
          }
          elements.push(result.val);
        } else if (char === 125 && nestingLevel > 0) {
          break;
        } else if (char === 35 && (parentArgType === "plural" || parentArgType === "selectordinal")) {
          var position = this.clonePosition();
          this.bump();
          elements.push({
            type: TYPE.pound,
            location: createLocation(position, this.clonePosition())
          });
        } else if (char === 60 && !this.ignoreTag && this.peek() === 47) {
          if (expectingCloseTag) {
            break;
          } else {
            return this.error(ErrorKind.UNMATCHED_CLOSING_TAG, createLocation(this.clonePosition(), this.clonePosition()));
          }
        } else if (char === 60 && !this.ignoreTag && _isAlpha(this.peek() || 0)) {
          var result = this.parseTag(nestingLevel, parentArgType);
          if (result.err) {
            return result;
          }
          elements.push(result.val);
        } else {
          var result = this.parseLiteral(nestingLevel, parentArgType);
          if (result.err) {
            return result;
          }
          elements.push(result.val);
        }
      }
      return { val: elements, err: null };
    };
    Parser2.prototype.parseTag = function(nestingLevel, parentArgType) {
      var startPosition = this.clonePosition();
      this.bump();
      var tagName = this.parseTagName();
      this.bumpSpace();
      if (this.bumpIf("/>")) {
        return {
          val: {
            type: TYPE.literal,
            value: "<".concat(tagName, "/>"),
            location: createLocation(startPosition, this.clonePosition())
          },
          err: null
        };
      } else if (this.bumpIf(">")) {
        var childrenResult = this.parseMessage(nestingLevel + 1, parentArgType, true);
        if (childrenResult.err) {
          return childrenResult;
        }
        var children = childrenResult.val;
        var endTagStartPosition = this.clonePosition();
        if (this.bumpIf("</")) {
          if (this.isEOF() || !_isAlpha(this.char())) {
            return this.error(ErrorKind.INVALID_TAG, createLocation(endTagStartPosition, this.clonePosition()));
          }
          var closingTagNameStartPosition = this.clonePosition();
          var closingTagName = this.parseTagName();
          if (tagName !== closingTagName) {
            return this.error(ErrorKind.UNMATCHED_CLOSING_TAG, createLocation(closingTagNameStartPosition, this.clonePosition()));
          }
          this.bumpSpace();
          if (!this.bumpIf(">")) {
            return this.error(ErrorKind.INVALID_TAG, createLocation(endTagStartPosition, this.clonePosition()));
          }
          return {
            val: {
              type: TYPE.tag,
              value: tagName,
              children,
              location: createLocation(startPosition, this.clonePosition())
            },
            err: null
          };
        } else {
          return this.error(ErrorKind.UNCLOSED_TAG, createLocation(startPosition, this.clonePosition()));
        }
      } else {
        return this.error(ErrorKind.INVALID_TAG, createLocation(startPosition, this.clonePosition()));
      }
    };
    Parser2.prototype.parseTagName = function() {
      var startOffset = this.offset();
      this.bump();
      while (!this.isEOF() && _isPotentialElementNameChar(this.char())) {
        this.bump();
      }
      return this.message.slice(startOffset, this.offset());
    };
    Parser2.prototype.parseLiteral = function(nestingLevel, parentArgType) {
      var start2 = this.clonePosition();
      var value = "";
      while (true) {
        var parseQuoteResult = this.tryParseQuote(parentArgType);
        if (parseQuoteResult) {
          value += parseQuoteResult;
          continue;
        }
        var parseUnquotedResult = this.tryParseUnquoted(nestingLevel, parentArgType);
        if (parseUnquotedResult) {
          value += parseUnquotedResult;
          continue;
        }
        var parseLeftAngleResult = this.tryParseLeftAngleBracket();
        if (parseLeftAngleResult) {
          value += parseLeftAngleResult;
          continue;
        }
        break;
      }
      var location = createLocation(start2, this.clonePosition());
      return {
        val: { type: TYPE.literal, value, location },
        err: null
      };
    };
    Parser2.prototype.tryParseLeftAngleBracket = function() {
      if (!this.isEOF() && this.char() === 60 && (this.ignoreTag || !_isAlphaOrSlash(this.peek() || 0))) {
        this.bump();
        return "<";
      }
      return null;
    };
    Parser2.prototype.tryParseQuote = function(parentArgType) {
      if (this.isEOF() || this.char() !== 39) {
        return null;
      }
      switch (this.peek()) {
        case 39:
          this.bump();
          this.bump();
          return "'";
        case 123:
        case 60:
        case 62:
        case 125:
          break;
        case 35:
          if (parentArgType === "plural" || parentArgType === "selectordinal") {
            break;
          }
          return null;
        default:
          return null;
      }
      this.bump();
      var codePoints = [this.char()];
      this.bump();
      while (!this.isEOF()) {
        var ch = this.char();
        if (ch === 39) {
          if (this.peek() === 39) {
            codePoints.push(39);
            this.bump();
          } else {
            this.bump();
            break;
          }
        } else {
          codePoints.push(ch);
        }
        this.bump();
      }
      return fromCodePoint.apply(void 0, codePoints);
    };
    Parser2.prototype.tryParseUnquoted = function(nestingLevel, parentArgType) {
      if (this.isEOF()) {
        return null;
      }
      var ch = this.char();
      if (ch === 60 || ch === 123 || ch === 35 && (parentArgType === "plural" || parentArgType === "selectordinal") || ch === 125 && nestingLevel > 0) {
        return null;
      } else {
        this.bump();
        return fromCodePoint(ch);
      }
    };
    Parser2.prototype.parseArgument = function(nestingLevel, expectingCloseTag) {
      var openingBracePosition = this.clonePosition();
      this.bump();
      this.bumpSpace();
      if (this.isEOF()) {
        return this.error(ErrorKind.EXPECT_ARGUMENT_CLOSING_BRACE, createLocation(openingBracePosition, this.clonePosition()));
      }
      if (this.char() === 125) {
        this.bump();
        return this.error(ErrorKind.EMPTY_ARGUMENT, createLocation(openingBracePosition, this.clonePosition()));
      }
      var value = this.parseIdentifierIfPossible().value;
      if (!value) {
        return this.error(ErrorKind.MALFORMED_ARGUMENT, createLocation(openingBracePosition, this.clonePosition()));
      }
      this.bumpSpace();
      if (this.isEOF()) {
        return this.error(ErrorKind.EXPECT_ARGUMENT_CLOSING_BRACE, createLocation(openingBracePosition, this.clonePosition()));
      }
      switch (this.char()) {
        case 125: {
          this.bump();
          return {
            val: {
              type: TYPE.argument,
              value,
              location: createLocation(openingBracePosition, this.clonePosition())
            },
            err: null
          };
        }
        case 44: {
          this.bump();
          this.bumpSpace();
          if (this.isEOF()) {
            return this.error(ErrorKind.EXPECT_ARGUMENT_CLOSING_BRACE, createLocation(openingBracePosition, this.clonePosition()));
          }
          return this.parseArgumentOptions(nestingLevel, expectingCloseTag, value, openingBracePosition);
        }
        default:
          return this.error(ErrorKind.MALFORMED_ARGUMENT, createLocation(openingBracePosition, this.clonePosition()));
      }
    };
    Parser2.prototype.parseIdentifierIfPossible = function() {
      var startingPosition = this.clonePosition();
      var startOffset = this.offset();
      var value = matchIdentifierAtIndex(this.message, startOffset);
      var endOffset = startOffset + value.length;
      this.bumpTo(endOffset);
      var endPosition = this.clonePosition();
      var location = createLocation(startingPosition, endPosition);
      return { value, location };
    };
    Parser2.prototype.parseArgumentOptions = function(nestingLevel, expectingCloseTag, value, openingBracePosition) {
      var _a2;
      var typeStartPosition = this.clonePosition();
      var argType = this.parseIdentifierIfPossible().value;
      var typeEndPosition = this.clonePosition();
      switch (argType) {
        case "":
          return this.error(ErrorKind.EXPECT_ARGUMENT_TYPE, createLocation(typeStartPosition, typeEndPosition));
        case "number":
        case "date":
        case "time": {
          this.bumpSpace();
          var styleAndLocation = null;
          if (this.bumpIf(",")) {
            this.bumpSpace();
            var styleStartPosition = this.clonePosition();
            var result = this.parseSimpleArgStyleIfPossible();
            if (result.err) {
              return result;
            }
            var style = trimEnd(result.val);
            if (style.length === 0) {
              return this.error(ErrorKind.EXPECT_ARGUMENT_STYLE, createLocation(this.clonePosition(), this.clonePosition()));
            }
            var styleLocation = createLocation(styleStartPosition, this.clonePosition());
            styleAndLocation = { style, styleLocation };
          }
          var argCloseResult = this.tryParseArgumentClose(openingBracePosition);
          if (argCloseResult.err) {
            return argCloseResult;
          }
          var location_1 = createLocation(openingBracePosition, this.clonePosition());
          if (styleAndLocation && startsWith(styleAndLocation === null || styleAndLocation === void 0 ? void 0 : styleAndLocation.style, "::", 0)) {
            var skeleton = trimStart(styleAndLocation.style.slice(2));
            if (argType === "number") {
              var result = this.parseNumberSkeletonFromString(skeleton, styleAndLocation.styleLocation);
              if (result.err) {
                return result;
              }
              return {
                val: { type: TYPE.number, value, location: location_1, style: result.val },
                err: null
              };
            } else {
              if (skeleton.length === 0) {
                return this.error(ErrorKind.EXPECT_DATE_TIME_SKELETON, location_1);
              }
              var dateTimePattern = skeleton;
              if (this.locale) {
                dateTimePattern = getBestPattern(skeleton, this.locale);
              }
              var style = {
                type: SKELETON_TYPE.dateTime,
                pattern: dateTimePattern,
                location: styleAndLocation.styleLocation,
                parsedOptions: this.shouldParseSkeletons ? parseDateTimeSkeleton(dateTimePattern) : {}
              };
              var type = argType === "date" ? TYPE.date : TYPE.time;
              return {
                val: { type, value, location: location_1, style },
                err: null
              };
            }
          }
          return {
            val: {
              type: argType === "number" ? TYPE.number : argType === "date" ? TYPE.date : TYPE.time,
              value,
              location: location_1,
              style: (_a2 = styleAndLocation === null || styleAndLocation === void 0 ? void 0 : styleAndLocation.style) !== null && _a2 !== void 0 ? _a2 : null
            },
            err: null
          };
        }
        case "plural":
        case "selectordinal":
        case "select": {
          var typeEndPosition_1 = this.clonePosition();
          this.bumpSpace();
          if (!this.bumpIf(",")) {
            return this.error(ErrorKind.EXPECT_SELECT_ARGUMENT_OPTIONS, createLocation(typeEndPosition_1, __assign({}, typeEndPosition_1)));
          }
          this.bumpSpace();
          var identifierAndLocation = this.parseIdentifierIfPossible();
          var pluralOffset = 0;
          if (argType !== "select" && identifierAndLocation.value === "offset") {
            if (!this.bumpIf(":")) {
              return this.error(ErrorKind.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, createLocation(this.clonePosition(), this.clonePosition()));
            }
            this.bumpSpace();
            var result = this.tryParseDecimalInteger(ErrorKind.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, ErrorKind.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);
            if (result.err) {
              return result;
            }
            this.bumpSpace();
            identifierAndLocation = this.parseIdentifierIfPossible();
            pluralOffset = result.val;
          }
          var optionsResult = this.tryParsePluralOrSelectOptions(nestingLevel, argType, expectingCloseTag, identifierAndLocation);
          if (optionsResult.err) {
            return optionsResult;
          }
          var argCloseResult = this.tryParseArgumentClose(openingBracePosition);
          if (argCloseResult.err) {
            return argCloseResult;
          }
          var location_2 = createLocation(openingBracePosition, this.clonePosition());
          if (argType === "select") {
            return {
              val: {
                type: TYPE.select,
                value,
                options: fromEntries(optionsResult.val),
                location: location_2
              },
              err: null
            };
          } else {
            return {
              val: {
                type: TYPE.plural,
                value,
                options: fromEntries(optionsResult.val),
                offset: pluralOffset,
                pluralType: argType === "plural" ? "cardinal" : "ordinal",
                location: location_2
              },
              err: null
            };
          }
        }
        default:
          return this.error(ErrorKind.INVALID_ARGUMENT_TYPE, createLocation(typeStartPosition, typeEndPosition));
      }
    };
    Parser2.prototype.tryParseArgumentClose = function(openingBracePosition) {
      if (this.isEOF() || this.char() !== 125) {
        return this.error(ErrorKind.EXPECT_ARGUMENT_CLOSING_BRACE, createLocation(openingBracePosition, this.clonePosition()));
      }
      this.bump();
      return { val: true, err: null };
    };
    Parser2.prototype.parseSimpleArgStyleIfPossible = function() {
      var nestedBraces = 0;
      var startPosition = this.clonePosition();
      while (!this.isEOF()) {
        var ch = this.char();
        switch (ch) {
          case 39: {
            this.bump();
            var apostrophePosition = this.clonePosition();
            if (!this.bumpUntil("'")) {
              return this.error(ErrorKind.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, createLocation(apostrophePosition, this.clonePosition()));
            }
            this.bump();
            break;
          }
          case 123: {
            nestedBraces += 1;
            this.bump();
            break;
          }
          case 125: {
            if (nestedBraces > 0) {
              nestedBraces -= 1;
            } else {
              return {
                val: this.message.slice(startPosition.offset, this.offset()),
                err: null
              };
            }
            break;
          }
          default:
            this.bump();
            break;
        }
      }
      return {
        val: this.message.slice(startPosition.offset, this.offset()),
        err: null
      };
    };
    Parser2.prototype.parseNumberSkeletonFromString = function(skeleton, location) {
      var tokens = [];
      try {
        tokens = parseNumberSkeletonFromString(skeleton);
      } catch (e2) {
        return this.error(ErrorKind.INVALID_NUMBER_SKELETON, location);
      }
      return {
        val: {
          type: SKELETON_TYPE.number,
          tokens,
          location,
          parsedOptions: this.shouldParseSkeletons ? parseNumberSkeleton(tokens) : {}
        },
        err: null
      };
    };
    Parser2.prototype.tryParsePluralOrSelectOptions = function(nestingLevel, parentArgType, expectCloseTag, parsedFirstIdentifier) {
      var _a2;
      var hasOtherClause = false;
      var options = [];
      var parsedSelectors = /* @__PURE__ */ new Set();
      var selector = parsedFirstIdentifier.value, selectorLocation = parsedFirstIdentifier.location;
      while (true) {
        if (selector.length === 0) {
          var startPosition = this.clonePosition();
          if (parentArgType !== "select" && this.bumpIf("=")) {
            var result = this.tryParseDecimalInteger(ErrorKind.EXPECT_PLURAL_ARGUMENT_SELECTOR, ErrorKind.INVALID_PLURAL_ARGUMENT_SELECTOR);
            if (result.err) {
              return result;
            }
            selectorLocation = createLocation(startPosition, this.clonePosition());
            selector = this.message.slice(startPosition.offset, this.offset());
          } else {
            break;
          }
        }
        if (parsedSelectors.has(selector)) {
          return this.error(parentArgType === "select" ? ErrorKind.DUPLICATE_SELECT_ARGUMENT_SELECTOR : ErrorKind.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, selectorLocation);
        }
        if (selector === "other") {
          hasOtherClause = true;
        }
        this.bumpSpace();
        var openingBracePosition = this.clonePosition();
        if (!this.bumpIf("{")) {
          return this.error(parentArgType === "select" ? ErrorKind.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : ErrorKind.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, createLocation(this.clonePosition(), this.clonePosition()));
        }
        var fragmentResult = this.parseMessage(nestingLevel + 1, parentArgType, expectCloseTag);
        if (fragmentResult.err) {
          return fragmentResult;
        }
        var argCloseResult = this.tryParseArgumentClose(openingBracePosition);
        if (argCloseResult.err) {
          return argCloseResult;
        }
        options.push([
          selector,
          {
            value: fragmentResult.val,
            location: createLocation(openingBracePosition, this.clonePosition())
          }
        ]);
        parsedSelectors.add(selector);
        this.bumpSpace();
        _a2 = this.parseIdentifierIfPossible(), selector = _a2.value, selectorLocation = _a2.location;
      }
      if (options.length === 0) {
        return this.error(parentArgType === "select" ? ErrorKind.EXPECT_SELECT_ARGUMENT_SELECTOR : ErrorKind.EXPECT_PLURAL_ARGUMENT_SELECTOR, createLocation(this.clonePosition(), this.clonePosition()));
      }
      if (this.requiresOtherClause && !hasOtherClause) {
        return this.error(ErrorKind.MISSING_OTHER_CLAUSE, createLocation(this.clonePosition(), this.clonePosition()));
      }
      return { val: options, err: null };
    };
    Parser2.prototype.tryParseDecimalInteger = function(expectNumberError, invalidNumberError) {
      var sign = 1;
      var startingPosition = this.clonePosition();
      if (this.bumpIf("+")) {
      } else if (this.bumpIf("-")) {
        sign = -1;
      }
      var hasDigits = false;
      var decimal = 0;
      while (!this.isEOF()) {
        var ch = this.char();
        if (ch >= 48 && ch <= 57) {
          hasDigits = true;
          decimal = decimal * 10 + (ch - 48);
          this.bump();
        } else {
          break;
        }
      }
      var location = createLocation(startingPosition, this.clonePosition());
      if (!hasDigits) {
        return this.error(expectNumberError, location);
      }
      decimal *= sign;
      if (!isSafeInteger(decimal)) {
        return this.error(invalidNumberError, location);
      }
      return { val: decimal, err: null };
    };
    Parser2.prototype.offset = function() {
      return this.position.offset;
    };
    Parser2.prototype.isEOF = function() {
      return this.offset() === this.message.length;
    };
    Parser2.prototype.clonePosition = function() {
      return {
        offset: this.position.offset,
        line: this.position.line,
        column: this.position.column
      };
    };
    Parser2.prototype.char = function() {
      var offset2 = this.position.offset;
      if (offset2 >= this.message.length) {
        throw Error("out of bound");
      }
      var code = codePointAt(this.message, offset2);
      if (code === void 0) {
        throw Error("Offset ".concat(offset2, " is at invalid UTF-16 code unit boundary"));
      }
      return code;
    };
    Parser2.prototype.error = function(kind, location) {
      return {
        val: null,
        err: {
          kind,
          message: this.message,
          location
        }
      };
    };
    Parser2.prototype.bump = function() {
      if (this.isEOF()) {
        return;
      }
      var code = this.char();
      if (code === 10) {
        this.position.line += 1;
        this.position.column = 1;
        this.position.offset += 1;
      } else {
        this.position.column += 1;
        this.position.offset += code < 65536 ? 1 : 2;
      }
    };
    Parser2.prototype.bumpIf = function(prefix) {
      if (startsWith(this.message, prefix, this.offset())) {
        for (var i2 = 0; i2 < prefix.length; i2++) {
          this.bump();
        }
        return true;
      }
      return false;
    };
    Parser2.prototype.bumpUntil = function(pattern) {
      var currentOffset = this.offset();
      var index2 = this.message.indexOf(pattern, currentOffset);
      if (index2 >= 0) {
        this.bumpTo(index2);
        return true;
      } else {
        this.bumpTo(this.message.length);
        return false;
      }
    };
    Parser2.prototype.bumpTo = function(targetOffset) {
      if (this.offset() > targetOffset) {
        throw Error("targetOffset ".concat(targetOffset, " must be greater than or equal to the current offset ").concat(this.offset()));
      }
      targetOffset = Math.min(targetOffset, this.message.length);
      while (true) {
        var offset2 = this.offset();
        if (offset2 === targetOffset) {
          break;
        }
        if (offset2 > targetOffset) {
          throw Error("targetOffset ".concat(targetOffset, " is at invalid UTF-16 code unit boundary"));
        }
        this.bump();
        if (this.isEOF()) {
          break;
        }
      }
    };
    Parser2.prototype.bumpSpace = function() {
      while (!this.isEOF() && _isWhiteSpace(this.char())) {
        this.bump();
      }
    };
    Parser2.prototype.peek = function() {
      if (this.isEOF()) {
        return null;
      }
      var code = this.char();
      var offset2 = this.offset();
      var nextCode = this.message.charCodeAt(offset2 + (code >= 65536 ? 2 : 1));
      return nextCode !== null && nextCode !== void 0 ? nextCode : null;
    };
    return Parser2;
  }();
  function _isAlpha(codepoint) {
    return codepoint >= 97 && codepoint <= 122 || codepoint >= 65 && codepoint <= 90;
  }
  function _isAlphaOrSlash(codepoint) {
    return _isAlpha(codepoint) || codepoint === 47;
  }
  function _isPotentialElementNameChar(c2) {
    return c2 === 45 || c2 === 46 || c2 >= 48 && c2 <= 57 || c2 === 95 || c2 >= 97 && c2 <= 122 || c2 >= 65 && c2 <= 90 || c2 == 183 || c2 >= 192 && c2 <= 214 || c2 >= 216 && c2 <= 246 || c2 >= 248 && c2 <= 893 || c2 >= 895 && c2 <= 8191 || c2 >= 8204 && c2 <= 8205 || c2 >= 8255 && c2 <= 8256 || c2 >= 8304 && c2 <= 8591 || c2 >= 11264 && c2 <= 12271 || c2 >= 12289 && c2 <= 55295 || c2 >= 63744 && c2 <= 64975 || c2 >= 65008 && c2 <= 65533 || c2 >= 65536 && c2 <= 983039;
  }
  function _isWhiteSpace(c2) {
    return c2 >= 9 && c2 <= 13 || c2 === 32 || c2 === 133 || c2 >= 8206 && c2 <= 8207 || c2 === 8232 || c2 === 8233;
  }
  function _isPatternSyntax(c2) {
    return c2 >= 33 && c2 <= 35 || c2 === 36 || c2 >= 37 && c2 <= 39 || c2 === 40 || c2 === 41 || c2 === 42 || c2 === 43 || c2 === 44 || c2 === 45 || c2 >= 46 && c2 <= 47 || c2 >= 58 && c2 <= 59 || c2 >= 60 && c2 <= 62 || c2 >= 63 && c2 <= 64 || c2 === 91 || c2 === 92 || c2 === 93 || c2 === 94 || c2 === 96 || c2 === 123 || c2 === 124 || c2 === 125 || c2 === 126 || c2 === 161 || c2 >= 162 && c2 <= 165 || c2 === 166 || c2 === 167 || c2 === 169 || c2 === 171 || c2 === 172 || c2 === 174 || c2 === 176 || c2 === 177 || c2 === 182 || c2 === 187 || c2 === 191 || c2 === 215 || c2 === 247 || c2 >= 8208 && c2 <= 8213 || c2 >= 8214 && c2 <= 8215 || c2 === 8216 || c2 === 8217 || c2 === 8218 || c2 >= 8219 && c2 <= 8220 || c2 === 8221 || c2 === 8222 || c2 === 8223 || c2 >= 8224 && c2 <= 8231 || c2 >= 8240 && c2 <= 8248 || c2 === 8249 || c2 === 8250 || c2 >= 8251 && c2 <= 8254 || c2 >= 8257 && c2 <= 8259 || c2 === 8260 || c2 === 8261 || c2 === 8262 || c2 >= 8263 && c2 <= 8273 || c2 === 8274 || c2 === 8275 || c2 >= 8277 && c2 <= 8286 || c2 >= 8592 && c2 <= 8596 || c2 >= 8597 && c2 <= 8601 || c2 >= 8602 && c2 <= 8603 || c2 >= 8604 && c2 <= 8607 || c2 === 8608 || c2 >= 8609 && c2 <= 8610 || c2 === 8611 || c2 >= 8612 && c2 <= 8613 || c2 === 8614 || c2 >= 8615 && c2 <= 8621 || c2 === 8622 || c2 >= 8623 && c2 <= 8653 || c2 >= 8654 && c2 <= 8655 || c2 >= 8656 && c2 <= 8657 || c2 === 8658 || c2 === 8659 || c2 === 8660 || c2 >= 8661 && c2 <= 8691 || c2 >= 8692 && c2 <= 8959 || c2 >= 8960 && c2 <= 8967 || c2 === 8968 || c2 === 8969 || c2 === 8970 || c2 === 8971 || c2 >= 8972 && c2 <= 8991 || c2 >= 8992 && c2 <= 8993 || c2 >= 8994 && c2 <= 9e3 || c2 === 9001 || c2 === 9002 || c2 >= 9003 && c2 <= 9083 || c2 === 9084 || c2 >= 9085 && c2 <= 9114 || c2 >= 9115 && c2 <= 9139 || c2 >= 9140 && c2 <= 9179 || c2 >= 9180 && c2 <= 9185 || c2 >= 9186 && c2 <= 9254 || c2 >= 9255 && c2 <= 9279 || c2 >= 9280 && c2 <= 9290 || c2 >= 9291 && c2 <= 9311 || c2 >= 9472 && c2 <= 9654 || c2 === 9655 || c2 >= 9656 && c2 <= 9664 || c2 === 9665 || c2 >= 9666 && c2 <= 9719 || c2 >= 9720 && c2 <= 9727 || c2 >= 9728 && c2 <= 9838 || c2 === 9839 || c2 >= 9840 && c2 <= 10087 || c2 === 10088 || c2 === 10089 || c2 === 10090 || c2 === 10091 || c2 === 10092 || c2 === 10093 || c2 === 10094 || c2 === 10095 || c2 === 10096 || c2 === 10097 || c2 === 10098 || c2 === 10099 || c2 === 10100 || c2 === 10101 || c2 >= 10132 && c2 <= 10175 || c2 >= 10176 && c2 <= 10180 || c2 === 10181 || c2 === 10182 || c2 >= 10183 && c2 <= 10213 || c2 === 10214 || c2 === 10215 || c2 === 10216 || c2 === 10217 || c2 === 10218 || c2 === 10219 || c2 === 10220 || c2 === 10221 || c2 === 10222 || c2 === 10223 || c2 >= 10224 && c2 <= 10239 || c2 >= 10240 && c2 <= 10495 || c2 >= 10496 && c2 <= 10626 || c2 === 10627 || c2 === 10628 || c2 === 10629 || c2 === 10630 || c2 === 10631 || c2 === 10632 || c2 === 10633 || c2 === 10634 || c2 === 10635 || c2 === 10636 || c2 === 10637 || c2 === 10638 || c2 === 10639 || c2 === 10640 || c2 === 10641 || c2 === 10642 || c2 === 10643 || c2 === 10644 || c2 === 10645 || c2 === 10646 || c2 === 10647 || c2 === 10648 || c2 >= 10649 && c2 <= 10711 || c2 === 10712 || c2 === 10713 || c2 === 10714 || c2 === 10715 || c2 >= 10716 && c2 <= 10747 || c2 === 10748 || c2 === 10749 || c2 >= 10750 && c2 <= 11007 || c2 >= 11008 && c2 <= 11055 || c2 >= 11056 && c2 <= 11076 || c2 >= 11077 && c2 <= 11078 || c2 >= 11079 && c2 <= 11084 || c2 >= 11085 && c2 <= 11123 || c2 >= 11124 && c2 <= 11125 || c2 >= 11126 && c2 <= 11157 || c2 === 11158 || c2 >= 11159 && c2 <= 11263 || c2 >= 11776 && c2 <= 11777 || c2 === 11778 || c2 === 11779 || c2 === 11780 || c2 === 11781 || c2 >= 11782 && c2 <= 11784 || c2 === 11785 || c2 === 11786 || c2 === 11787 || c2 === 11788 || c2 === 11789 || c2 >= 11790 && c2 <= 11798 || c2 === 11799 || c2 >= 11800 && c2 <= 11801 || c2 === 11802 || c2 === 11803 || c2 === 11804 || c2 === 11805 || c2 >= 11806 && c2 <= 11807 || c2 === 11808 || c2 === 11809 || c2 === 11810 || c2 === 11811 || c2 === 11812 || c2 === 11813 || c2 === 11814 || c2 === 11815 || c2 === 11816 || c2 === 11817 || c2 >= 11818 && c2 <= 11822 || c2 === 11823 || c2 >= 11824 && c2 <= 11833 || c2 >= 11834 && c2 <= 11835 || c2 >= 11836 && c2 <= 11839 || c2 === 11840 || c2 === 11841 || c2 === 11842 || c2 >= 11843 && c2 <= 11855 || c2 >= 11856 && c2 <= 11857 || c2 === 11858 || c2 >= 11859 && c2 <= 11903 || c2 >= 12289 && c2 <= 12291 || c2 === 12296 || c2 === 12297 || c2 === 12298 || c2 === 12299 || c2 === 12300 || c2 === 12301 || c2 === 12302 || c2 === 12303 || c2 === 12304 || c2 === 12305 || c2 >= 12306 && c2 <= 12307 || c2 === 12308 || c2 === 12309 || c2 === 12310 || c2 === 12311 || c2 === 12312 || c2 === 12313 || c2 === 12314 || c2 === 12315 || c2 === 12316 || c2 === 12317 || c2 >= 12318 && c2 <= 12319 || c2 === 12320 || c2 === 12336 || c2 === 64830 || c2 === 64831 || c2 >= 65093 && c2 <= 65094;
  }

  // ../../node_modules/@formatjs/icu-messageformat-parser/lib/index.js
  function pruneLocation(els) {
    els.forEach(function(el) {
      delete el.location;
      if (isSelectElement(el) || isPluralElement(el)) {
        for (var k2 in el.options) {
          delete el.options[k2].location;
          pruneLocation(el.options[k2].value);
        }
      } else if (isNumberElement(el) && isNumberSkeleton(el.style)) {
        delete el.style.location;
      } else if ((isDateElement(el) || isTimeElement(el)) && isDateTimeSkeleton(el.style)) {
        delete el.style.location;
      } else if (isTagElement(el)) {
        pruneLocation(el.children);
      }
    });
  }
  function parse(message, opts) {
    if (opts === void 0) {
      opts = {};
    }
    opts = __assign({ shouldParseSkeletons: true, requiresOtherClause: true }, opts);
    var result = new Parser(message, opts).parse();
    if (result.err) {
      var error = SyntaxError(ErrorKind[result.err.kind]);
      error.location = result.err.location;
      error.originalMessage = result.err.message;
      throw error;
    }
    if (!(opts === null || opts === void 0 ? void 0 : opts.captureLocation)) {
      pruneLocation(result.val);
    }
    return result.val;
  }

  // ../../node_modules/@formatjs/fast-memoize/lib/index.js
  function memoize(fn3, options) {
    var cache = options && options.cache ? options.cache : cacheDefault;
    var serializer = options && options.serializer ? options.serializer : serializerDefault;
    var strategy = options && options.strategy ? options.strategy : strategyDefault;
    return strategy(fn3, {
      cache,
      serializer
    });
  }
  function isPrimitive(value) {
    return value == null || typeof value === "number" || typeof value === "boolean";
  }
  function monadic(fn3, cache, serializer, arg) {
    var cacheKey = isPrimitive(arg) ? arg : serializer(arg);
    var computedValue = cache.get(cacheKey);
    if (typeof computedValue === "undefined") {
      computedValue = fn3.call(this, arg);
      cache.set(cacheKey, computedValue);
    }
    return computedValue;
  }
  function variadic(fn3, cache, serializer) {
    var args = Array.prototype.slice.call(arguments, 3);
    var cacheKey = serializer(args);
    var computedValue = cache.get(cacheKey);
    if (typeof computedValue === "undefined") {
      computedValue = fn3.apply(this, args);
      cache.set(cacheKey, computedValue);
    }
    return computedValue;
  }
  function assemble(fn3, context, strategy, cache, serialize) {
    return strategy.bind(context, fn3, cache, serialize);
  }
  function strategyDefault(fn3, options) {
    var strategy = fn3.length === 1 ? monadic : variadic;
    return assemble(fn3, this, strategy, options.cache.create(), options.serializer);
  }
  function strategyVariadic(fn3, options) {
    return assemble(fn3, this, variadic, options.cache.create(), options.serializer);
  }
  function strategyMonadic(fn3, options) {
    return assemble(fn3, this, monadic, options.cache.create(), options.serializer);
  }
  var serializerDefault = function() {
    return JSON.stringify(arguments);
  };
  function ObjectWithoutPrototypeCache() {
    this.cache = /* @__PURE__ */ Object.create(null);
  }
  ObjectWithoutPrototypeCache.prototype.get = function(key) {
    return this.cache[key];
  };
  ObjectWithoutPrototypeCache.prototype.set = function(key, value) {
    this.cache[key] = value;
  };
  var cacheDefault = {
    create: function create() {
      return new ObjectWithoutPrototypeCache();
    }
  };
  var strategies = {
    variadic: strategyVariadic,
    monadic: strategyMonadic
  };

  // ../../node_modules/intl-messageformat/lib/src/error.js
  var ErrorCode;
  (function(ErrorCode2) {
    ErrorCode2["MISSING_VALUE"] = "MISSING_VALUE";
    ErrorCode2["INVALID_VALUE"] = "INVALID_VALUE";
    ErrorCode2["MISSING_INTL_API"] = "MISSING_INTL_API";
  })(ErrorCode || (ErrorCode = {}));
  var FormatError = function(_super) {
    __extends(FormatError2, _super);
    function FormatError2(msg, code, originalMessage) {
      var _this = _super.call(this, msg) || this;
      _this.code = code;
      _this.originalMessage = originalMessage;
      return _this;
    }
    FormatError2.prototype.toString = function() {
      return "[formatjs Error: ".concat(this.code, "] ").concat(this.message);
    };
    return FormatError2;
  }(Error);
  var InvalidValueError = function(_super) {
    __extends(InvalidValueError2, _super);
    function InvalidValueError2(variableId, value, options, originalMessage) {
      return _super.call(this, 'Invalid values for "'.concat(variableId, '": "').concat(value, '". Options are "').concat(Object.keys(options).join('", "'), '"'), ErrorCode.INVALID_VALUE, originalMessage) || this;
    }
    return InvalidValueError2;
  }(FormatError);
  var InvalidValueTypeError = function(_super) {
    __extends(InvalidValueTypeError2, _super);
    function InvalidValueTypeError2(value, type, originalMessage) {
      return _super.call(this, 'Value for "'.concat(value, '" must be of type ').concat(type), ErrorCode.INVALID_VALUE, originalMessage) || this;
    }
    return InvalidValueTypeError2;
  }(FormatError);
  var MissingValueError = function(_super) {
    __extends(MissingValueError2, _super);
    function MissingValueError2(variableId, originalMessage) {
      return _super.call(this, 'The intl string context variable "'.concat(variableId, '" was not provided to the string "').concat(originalMessage, '"'), ErrorCode.MISSING_VALUE, originalMessage) || this;
    }
    return MissingValueError2;
  }(FormatError);

  // ../../node_modules/intl-messageformat/lib/src/formatters.js
  var PART_TYPE;
  (function(PART_TYPE2) {
    PART_TYPE2[PART_TYPE2["literal"] = 0] = "literal";
    PART_TYPE2[PART_TYPE2["object"] = 1] = "object";
  })(PART_TYPE || (PART_TYPE = {}));
  function mergeLiteral(parts) {
    if (parts.length < 2) {
      return parts;
    }
    return parts.reduce(function(all, part) {
      var lastPart = all[all.length - 1];
      if (!lastPart || lastPart.type !== PART_TYPE.literal || part.type !== PART_TYPE.literal) {
        all.push(part);
      } else {
        lastPart.value += part.value;
      }
      return all;
    }, []);
  }
  function isFormatXMLElementFn(el) {
    return typeof el === "function";
  }
  function formatToParts(els, locales, formatters, formats, values, currentPluralValue, originalMessage) {
    if (els.length === 1 && isLiteralElement(els[0])) {
      return [
        {
          type: PART_TYPE.literal,
          value: els[0].value
        }
      ];
    }
    var result = [];
    for (var _i = 0, els_1 = els; _i < els_1.length; _i++) {
      var el = els_1[_i];
      if (isLiteralElement(el)) {
        result.push({
          type: PART_TYPE.literal,
          value: el.value
        });
        continue;
      }
      if (isPoundElement(el)) {
        if (typeof currentPluralValue === "number") {
          result.push({
            type: PART_TYPE.literal,
            value: formatters.getNumberFormat(locales).format(currentPluralValue)
          });
        }
        continue;
      }
      var varName = el.value;
      if (!(values && varName in values)) {
        throw new MissingValueError(varName, originalMessage);
      }
      var value = values[varName];
      if (isArgumentElement(el)) {
        if (!value || typeof value === "string" || typeof value === "number") {
          value = typeof value === "string" || typeof value === "number" ? String(value) : "";
        }
        result.push({
          type: typeof value === "string" ? PART_TYPE.literal : PART_TYPE.object,
          value
        });
        continue;
      }
      if (isDateElement(el)) {
        var style = typeof el.style === "string" ? formats.date[el.style] : isDateTimeSkeleton(el.style) ? el.style.parsedOptions : void 0;
        result.push({
          type: PART_TYPE.literal,
          value: formatters.getDateTimeFormat(locales, style).format(value)
        });
        continue;
      }
      if (isTimeElement(el)) {
        var style = typeof el.style === "string" ? formats.time[el.style] : isDateTimeSkeleton(el.style) ? el.style.parsedOptions : formats.time.medium;
        result.push({
          type: PART_TYPE.literal,
          value: formatters.getDateTimeFormat(locales, style).format(value)
        });
        continue;
      }
      if (isNumberElement(el)) {
        var style = typeof el.style === "string" ? formats.number[el.style] : isNumberSkeleton(el.style) ? el.style.parsedOptions : void 0;
        if (style && style.scale) {
          value = value * (style.scale || 1);
        }
        result.push({
          type: PART_TYPE.literal,
          value: formatters.getNumberFormat(locales, style).format(value)
        });
        continue;
      }
      if (isTagElement(el)) {
        var children = el.children, value_1 = el.value;
        var formatFn = values[value_1];
        if (!isFormatXMLElementFn(formatFn)) {
          throw new InvalidValueTypeError(value_1, "function", originalMessage);
        }
        var parts = formatToParts(children, locales, formatters, formats, values, currentPluralValue);
        var chunks = formatFn(parts.map(function(p2) {
          return p2.value;
        }));
        if (!Array.isArray(chunks)) {
          chunks = [chunks];
        }
        result.push.apply(result, chunks.map(function(c2) {
          return {
            type: typeof c2 === "string" ? PART_TYPE.literal : PART_TYPE.object,
            value: c2
          };
        }));
      }
      if (isSelectElement(el)) {
        var opt = el.options[value] || el.options.other;
        if (!opt) {
          throw new InvalidValueError(el.value, value, Object.keys(el.options), originalMessage);
        }
        result.push.apply(result, formatToParts(opt.value, locales, formatters, formats, values));
        continue;
      }
      if (isPluralElement(el)) {
        var opt = el.options["=".concat(value)];
        if (!opt) {
          if (!Intl.PluralRules) {
            throw new FormatError('Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n', ErrorCode.MISSING_INTL_API, originalMessage);
          }
          var rule = formatters.getPluralRules(locales, { type: el.pluralType }).select(value - (el.offset || 0));
          opt = el.options[rule] || el.options.other;
        }
        if (!opt) {
          throw new InvalidValueError(el.value, value, Object.keys(el.options), originalMessage);
        }
        result.push.apply(result, formatToParts(opt.value, locales, formatters, formats, values, value - (el.offset || 0)));
        continue;
      }
    }
    return mergeLiteral(result);
  }

  // ../../node_modules/intl-messageformat/lib/src/core.js
  function mergeConfig(c1, c2) {
    if (!c2) {
      return c1;
    }
    return __assign(__assign(__assign({}, c1 || {}), c2 || {}), Object.keys(c1).reduce(function(all, k2) {
      all[k2] = __assign(__assign({}, c1[k2]), c2[k2] || {});
      return all;
    }, {}));
  }
  function mergeConfigs(defaultConfig, configs) {
    if (!configs) {
      return defaultConfig;
    }
    return Object.keys(defaultConfig).reduce(function(all, k2) {
      all[k2] = mergeConfig(defaultConfig[k2], configs[k2]);
      return all;
    }, __assign({}, defaultConfig));
  }
  function createFastMemoizeCache(store) {
    return {
      create: function() {
        return {
          get: function(key) {
            return store[key];
          },
          set: function(key, value) {
            store[key] = value;
          }
        };
      }
    };
  }
  function createDefaultFormatters(cache) {
    if (cache === void 0) {
      cache = {
        number: {},
        dateTime: {},
        pluralRules: {}
      };
    }
    return {
      getNumberFormat: memoize(function() {
        var _a2;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }
        return new ((_a2 = Intl.NumberFormat).bind.apply(_a2, __spreadArray([void 0], args, false)))();
      }, {
        cache: createFastMemoizeCache(cache.number),
        strategy: strategies.variadic
      }),
      getDateTimeFormat: memoize(function() {
        var _a2;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }
        return new ((_a2 = Intl.DateTimeFormat).bind.apply(_a2, __spreadArray([void 0], args, false)))();
      }, {
        cache: createFastMemoizeCache(cache.dateTime),
        strategy: strategies.variadic
      }),
      getPluralRules: memoize(function() {
        var _a2;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }
        return new ((_a2 = Intl.PluralRules).bind.apply(_a2, __spreadArray([void 0], args, false)))();
      }, {
        cache: createFastMemoizeCache(cache.pluralRules),
        strategy: strategies.variadic
      })
    };
  }
  var IntlMessageFormat = function() {
    function IntlMessageFormat2(message, locales, overrideFormats, opts) {
      var _this = this;
      if (locales === void 0) {
        locales = IntlMessageFormat2.defaultLocale;
      }
      this.formatterCache = {
        number: {},
        dateTime: {},
        pluralRules: {}
      };
      this.format = function(values) {
        var parts = _this.formatToParts(values);
        if (parts.length === 1) {
          return parts[0].value;
        }
        var result = parts.reduce(function(all, part) {
          if (!all.length || part.type !== PART_TYPE.literal || typeof all[all.length - 1] !== "string") {
            all.push(part.value);
          } else {
            all[all.length - 1] += part.value;
          }
          return all;
        }, []);
        if (result.length <= 1) {
          return result[0] || "";
        }
        return result;
      };
      this.formatToParts = function(values) {
        return formatToParts(_this.ast, _this.locales, _this.formatters, _this.formats, values, void 0, _this.message);
      };
      this.resolvedOptions = function() {
        var _a2;
        return {
          locale: ((_a2 = _this.resolvedLocale) === null || _a2 === void 0 ? void 0 : _a2.toString()) || Intl.NumberFormat.supportedLocalesOf(_this.locales)[0]
        };
      };
      this.getAst = function() {
        return _this.ast;
      };
      this.locales = locales;
      this.resolvedLocale = IntlMessageFormat2.resolveLocale(locales);
      if (typeof message === "string") {
        this.message = message;
        if (!IntlMessageFormat2.__parse) {
          throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");
        }
        this.ast = IntlMessageFormat2.__parse(message, {
          ignoreTag: opts === null || opts === void 0 ? void 0 : opts.ignoreTag,
          locale: this.resolvedLocale
        });
      } else {
        this.ast = message;
      }
      if (!Array.isArray(this.ast)) {
        throw new TypeError("A message must be provided as a String or AST.");
      }
      this.formats = mergeConfigs(IntlMessageFormat2.formats, overrideFormats);
      this.formatters = opts && opts.formatters || createDefaultFormatters(this.formatterCache);
    }
    Object.defineProperty(IntlMessageFormat2, "defaultLocale", {
      get: function() {
        if (!IntlMessageFormat2.memoizedDefaultLocale) {
          IntlMessageFormat2.memoizedDefaultLocale = new Intl.NumberFormat().resolvedOptions().locale;
        }
        return IntlMessageFormat2.memoizedDefaultLocale;
      },
      enumerable: false,
      configurable: true
    });
    IntlMessageFormat2.memoizedDefaultLocale = null;
    IntlMessageFormat2.resolveLocale = function(locales) {
      if (typeof Intl.Locale === "undefined") {
        return;
      }
      var supportedLocales = Intl.NumberFormat.supportedLocalesOf(locales);
      if (supportedLocales.length > 0) {
        return new Intl.Locale(supportedLocales[0]);
      }
      return new Intl.Locale(typeof locales === "string" ? locales : locales[0]);
    };
    IntlMessageFormat2.__parse = parse;
    IntlMessageFormat2.formats = {
      number: {
        integer: {
          maximumFractionDigits: 0
        },
        currency: {
          style: "currency"
        },
        percent: {
          style: "percent"
        }
      },
      date: {
        short: {
          month: "numeric",
          day: "numeric",
          year: "2-digit"
        },
        medium: {
          month: "short",
          day: "numeric",
          year: "numeric"
        },
        long: {
          month: "long",
          day: "numeric",
          year: "numeric"
        },
        full: {
          weekday: "long",
          month: "long",
          day: "numeric",
          year: "numeric"
        }
      },
      time: {
        short: {
          hour: "numeric",
          minute: "numeric"
        },
        medium: {
          hour: "numeric",
          minute: "numeric",
          second: "numeric"
        },
        long: {
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
          timeZoneName: "short"
        },
        full: {
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
          timeZoneName: "short"
        }
      }
    };
    return IntlMessageFormat2;
  }();

  // ../../node_modules/@formatjs/intl/lib/src/error.js
  var IntlErrorCode;
  (function(IntlErrorCode2) {
    IntlErrorCode2["FORMAT_ERROR"] = "FORMAT_ERROR";
    IntlErrorCode2["UNSUPPORTED_FORMATTER"] = "UNSUPPORTED_FORMATTER";
    IntlErrorCode2["INVALID_CONFIG"] = "INVALID_CONFIG";
    IntlErrorCode2["MISSING_DATA"] = "MISSING_DATA";
    IntlErrorCode2["MISSING_TRANSLATION"] = "MISSING_TRANSLATION";
  })(IntlErrorCode || (IntlErrorCode = {}));
  var IntlError = function(_super) {
    __extends(IntlError2, _super);
    function IntlError2(code, message, exception) {
      var _this = this;
      var err = exception ? exception instanceof Error ? exception : new Error(String(exception)) : void 0;
      _this = _super.call(this, "[@formatjs/intl Error ".concat(code, "] ").concat(message, "\n").concat(err ? "\n".concat(err.message, "\n").concat(err.stack) : "")) || this;
      _this.code = code;
      if (typeof Error.captureStackTrace === "function") {
        Error.captureStackTrace(_this, IntlError2);
      }
      return _this;
    }
    return IntlError2;
  }(Error);
  var UnsupportedFormatterError = function(_super) {
    __extends(UnsupportedFormatterError2, _super);
    function UnsupportedFormatterError2(message, exception) {
      return _super.call(this, IntlErrorCode.UNSUPPORTED_FORMATTER, message, exception) || this;
    }
    return UnsupportedFormatterError2;
  }(IntlError);
  var InvalidConfigError = function(_super) {
    __extends(InvalidConfigError2, _super);
    function InvalidConfigError2(message, exception) {
      return _super.call(this, IntlErrorCode.INVALID_CONFIG, message, exception) || this;
    }
    return InvalidConfigError2;
  }(IntlError);
  var MissingDataError = function(_super) {
    __extends(MissingDataError2, _super);
    function MissingDataError2(message, exception) {
      return _super.call(this, IntlErrorCode.MISSING_DATA, message, exception) || this;
    }
    return MissingDataError2;
  }(IntlError);
  var IntlFormatError = function(_super) {
    __extends(IntlFormatError2, _super);
    function IntlFormatError2(message, locale2, exception) {
      return _super.call(this, IntlErrorCode.FORMAT_ERROR, "".concat(message, "\nLocale: ").concat(locale2, "\n"), exception) || this;
    }
    return IntlFormatError2;
  }(IntlError);
  var MessageFormatError = function(_super) {
    __extends(MessageFormatError2, _super);
    function MessageFormatError2(message, locale2, descriptor, exception) {
      var _this = _super.call(this, "".concat(message, "\nMessageID: ").concat(descriptor === null || descriptor === void 0 ? void 0 : descriptor.id, "\nDefault Message: ").concat(descriptor === null || descriptor === void 0 ? void 0 : descriptor.defaultMessage, "\nDescription: ").concat(descriptor === null || descriptor === void 0 ? void 0 : descriptor.description, "\n"), locale2, exception) || this;
      _this.descriptor = descriptor;
      return _this;
    }
    return MessageFormatError2;
  }(IntlFormatError);
  var MissingTranslationError = function(_super) {
    __extends(MissingTranslationError2, _super);
    function MissingTranslationError2(descriptor, locale2) {
      var _this = _super.call(this, IntlErrorCode.MISSING_TRANSLATION, 'Missing message: "'.concat(descriptor.id, '" for locale "').concat(locale2, '", using ').concat(descriptor.defaultMessage ? "default message (".concat(typeof descriptor.defaultMessage === "string" ? descriptor.defaultMessage : descriptor.defaultMessage.map(function(e2) {
        var _a2;
        return (_a2 = e2.value) !== null && _a2 !== void 0 ? _a2 : JSON.stringify(e2);
      }).join(), ")") : "id", " as fallback.")) || this;
      _this.descriptor = descriptor;
      return _this;
    }
    return MissingTranslationError2;
  }(IntlError);

  // ../../node_modules/@formatjs/intl/lib/src/utils.js
  function filterProps(props, allowlist, defaults) {
    if (defaults === void 0) {
      defaults = {};
    }
    return allowlist.reduce(function(filtered, name) {
      if (name in props) {
        filtered[name] = props[name];
      } else if (name in defaults) {
        filtered[name] = defaults[name];
      }
      return filtered;
    }, {});
  }
  var defaultErrorHandler = function(error) {
    if (true) {
      console.error(error);
    }
  };
  var defaultWarnHandler = function(warning) {
    if (true) {
      console.warn(warning);
    }
  };
  var DEFAULT_INTL_CONFIG = {
    formats: {},
    messages: {},
    timeZone: void 0,
    defaultLocale: "en",
    defaultFormats: {},
    fallbackOnEmptyString: true,
    onError: defaultErrorHandler,
    onWarn: defaultWarnHandler
  };
  function createIntlCache() {
    return {
      dateTime: {},
      number: {},
      message: {},
      relativeTime: {},
      pluralRules: {},
      list: {},
      displayNames: {}
    };
  }
  function createFastMemoizeCache2(store) {
    return {
      create: function() {
        return {
          get: function(key) {
            return store[key];
          },
          set: function(key, value) {
            store[key] = value;
          }
        };
      }
    };
  }
  function createFormatters(cache) {
    if (cache === void 0) {
      cache = createIntlCache();
    }
    var RelativeTimeFormat = Intl.RelativeTimeFormat;
    var ListFormat = Intl.ListFormat;
    var DisplayNames = Intl.DisplayNames;
    var getDateTimeFormat = memoize(function() {
      var _a2;
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      return new ((_a2 = Intl.DateTimeFormat).bind.apply(_a2, __spreadArray([void 0], args, false)))();
    }, {
      cache: createFastMemoizeCache2(cache.dateTime),
      strategy: strategies.variadic
    });
    var getNumberFormat = memoize(function() {
      var _a2;
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      return new ((_a2 = Intl.NumberFormat).bind.apply(_a2, __spreadArray([void 0], args, false)))();
    }, {
      cache: createFastMemoizeCache2(cache.number),
      strategy: strategies.variadic
    });
    var getPluralRules = memoize(function() {
      var _a2;
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      return new ((_a2 = Intl.PluralRules).bind.apply(_a2, __spreadArray([void 0], args, false)))();
    }, {
      cache: createFastMemoizeCache2(cache.pluralRules),
      strategy: strategies.variadic
    });
    return {
      getDateTimeFormat,
      getNumberFormat,
      getMessageFormat: memoize(function(message, locales, overrideFormats, opts) {
        return new IntlMessageFormat(message, locales, overrideFormats, __assign({ formatters: {
          getNumberFormat,
          getDateTimeFormat,
          getPluralRules
        } }, opts || {}));
      }, {
        cache: createFastMemoizeCache2(cache.message),
        strategy: strategies.variadic
      }),
      getRelativeTimeFormat: memoize(function() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }
        return new (RelativeTimeFormat.bind.apply(RelativeTimeFormat, __spreadArray([void 0], args, false)))();
      }, {
        cache: createFastMemoizeCache2(cache.relativeTime),
        strategy: strategies.variadic
      }),
      getPluralRules,
      getListFormat: memoize(function() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }
        return new (ListFormat.bind.apply(ListFormat, __spreadArray([void 0], args, false)))();
      }, {
        cache: createFastMemoizeCache2(cache.list),
        strategy: strategies.variadic
      }),
      getDisplayNames: memoize(function() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }
        return new (DisplayNames.bind.apply(DisplayNames, __spreadArray([void 0], args, false)))();
      }, {
        cache: createFastMemoizeCache2(cache.displayNames),
        strategy: strategies.variadic
      })
    };
  }
  function getNamedFormat(formats, type, name, onError) {
    var formatType = formats && formats[type];
    var format2;
    if (formatType) {
      format2 = formatType[name];
    }
    if (format2) {
      return format2;
    }
    onError(new UnsupportedFormatterError("No ".concat(type, " format named: ").concat(name)));
  }

  // ../../node_modules/@formatjs/intl/lib/src/message.js
  function setTimeZoneInOptions(opts, timeZone) {
    return Object.keys(opts).reduce(function(all, k2) {
      all[k2] = __assign({ timeZone }, opts[k2]);
      return all;
    }, {});
  }
  function deepMergeOptions(opts1, opts2) {
    var keys = Object.keys(__assign(__assign({}, opts1), opts2));
    return keys.reduce(function(all, k2) {
      all[k2] = __assign(__assign({}, opts1[k2] || {}), opts2[k2] || {});
      return all;
    }, {});
  }
  function deepMergeFormatsAndSetTimeZone(f1, timeZone) {
    if (!timeZone) {
      return f1;
    }
    var mfFormats = IntlMessageFormat.formats;
    return __assign(__assign(__assign({}, mfFormats), f1), { date: deepMergeOptions(setTimeZoneInOptions(mfFormats.date, timeZone), setTimeZoneInOptions(f1.date || {}, timeZone)), time: deepMergeOptions(setTimeZoneInOptions(mfFormats.time, timeZone), setTimeZoneInOptions(f1.time || {}, timeZone)) });
  }
  var formatMessage = function(_a2, state, messageDescriptor, values, opts) {
    var locale2 = _a2.locale, formats = _a2.formats, messages2 = _a2.messages, defaultLocale = _a2.defaultLocale, defaultFormats = _a2.defaultFormats, fallbackOnEmptyString = _a2.fallbackOnEmptyString, onError = _a2.onError, timeZone = _a2.timeZone, defaultRichTextElements = _a2.defaultRichTextElements;
    if (messageDescriptor === void 0) {
      messageDescriptor = { id: "" };
    }
    var msgId = messageDescriptor.id, defaultMessage = messageDescriptor.defaultMessage;
    invariant(!!msgId, "[@formatjs/intl] An `id` must be provided to format a message. You can either:\n1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.io/docs/tooling/babel-plugin)\nor [@formatjs/ts-transformer](https://formatjs.io/docs/tooling/ts-transformer) OR\n2. Configure your `eslint` config to include [eslint-plugin-formatjs](https://formatjs.io/docs/tooling/linter#enforce-id)\nto autofix this issue");
    var id = String(msgId);
    var message = messages2 && Object.prototype.hasOwnProperty.call(messages2, id) && messages2[id];
    if (Array.isArray(message) && message.length === 1 && message[0].type === TYPE.literal) {
      return message[0].value;
    }
    if (!values && message && typeof message === "string" && !defaultRichTextElements) {
      return message.replace(/'\{(.*?)\}'/gi, "{$1}");
    }
    values = __assign(__assign({}, defaultRichTextElements), values || {});
    formats = deepMergeFormatsAndSetTimeZone(formats, timeZone);
    defaultFormats = deepMergeFormatsAndSetTimeZone(defaultFormats, timeZone);
    if (!message) {
      if (fallbackOnEmptyString === false && message === "") {
        return message;
      }
      if (!defaultMessage || locale2 && locale2.toLowerCase() !== defaultLocale.toLowerCase()) {
        onError(new MissingTranslationError(messageDescriptor, locale2));
      }
      if (defaultMessage) {
        try {
          var formatter = state.getMessageFormat(defaultMessage, defaultLocale, defaultFormats, opts);
          return formatter.format(values);
        } catch (e2) {
          onError(new MessageFormatError('Error formatting default message for: "'.concat(id, '", rendering default message verbatim'), locale2, messageDescriptor, e2));
          return typeof defaultMessage === "string" ? defaultMessage : id;
        }
      }
      return id;
    }
    try {
      var formatter = state.getMessageFormat(message, locale2, formats, __assign({ formatters: state }, opts || {}));
      return formatter.format(values);
    } catch (e2) {
      onError(new MessageFormatError('Error formatting message: "'.concat(id, '", using ').concat(defaultMessage ? "default message" : "id", " as fallback."), locale2, messageDescriptor, e2));
    }
    if (defaultMessage) {
      try {
        var formatter = state.getMessageFormat(defaultMessage, defaultLocale, defaultFormats, opts);
        return formatter.format(values);
      } catch (e2) {
        onError(new MessageFormatError('Error formatting the default message for: "'.concat(id, '", rendering message verbatim'), locale2, messageDescriptor, e2));
      }
    }
    if (typeof message === "string") {
      return message;
    }
    if (typeof defaultMessage === "string") {
      return defaultMessage;
    }
    return id;
  };

  // ../../node_modules/@formatjs/intl/lib/src/dateTime.js
  var DATE_TIME_FORMAT_OPTIONS = [
    "formatMatcher",
    "timeZone",
    "hour12",
    "weekday",
    "era",
    "year",
    "month",
    "day",
    "hour",
    "minute",
    "second",
    "timeZoneName",
    "hourCycle",
    "dateStyle",
    "timeStyle",
    "calendar",
    "numberingSystem",
    "fractionalSecondDigits"
  ];
  function getFormatter(_a2, type, getDateTimeFormat, options) {
    var locale2 = _a2.locale, formats = _a2.formats, onError = _a2.onError, timeZone = _a2.timeZone;
    if (options === void 0) {
      options = {};
    }
    var format2 = options.format;
    var defaults = __assign(__assign({}, timeZone && { timeZone }), format2 && getNamedFormat(formats, type, format2, onError));
    var filteredOptions = filterProps(options, DATE_TIME_FORMAT_OPTIONS, defaults);
    if (type === "time" && !filteredOptions.hour && !filteredOptions.minute && !filteredOptions.second && !filteredOptions.timeStyle && !filteredOptions.dateStyle) {
      filteredOptions = __assign(__assign({}, filteredOptions), { hour: "numeric", minute: "numeric" });
    }
    return getDateTimeFormat(locale2, filteredOptions);
  }
  function formatDate(config, getDateTimeFormat) {
    var _a2 = [];
    for (var _i = 2; _i < arguments.length; _i++) {
      _a2[_i - 2] = arguments[_i];
    }
    var value = _a2[0], _b = _a2[1], options = _b === void 0 ? {} : _b;
    var date = typeof value === "string" ? new Date(value || 0) : value;
    try {
      return getFormatter(config, "date", getDateTimeFormat, options).format(date);
    } catch (e2) {
      config.onError(new IntlError(IntlErrorCode.FORMAT_ERROR, "Error formatting date.", e2));
    }
    return String(date);
  }
  function formatTime(config, getDateTimeFormat) {
    var _a2 = [];
    for (var _i = 2; _i < arguments.length; _i++) {
      _a2[_i - 2] = arguments[_i];
    }
    var value = _a2[0], _b = _a2[1], options = _b === void 0 ? {} : _b;
    var date = typeof value === "string" ? new Date(value || 0) : value;
    try {
      return getFormatter(config, "time", getDateTimeFormat, options).format(date);
    } catch (e2) {
      config.onError(new IntlError(IntlErrorCode.FORMAT_ERROR, "Error formatting time.", e2));
    }
    return String(date);
  }
  function formatDateTimeRange(config, getDateTimeFormat) {
    var _a2 = [];
    for (var _i = 2; _i < arguments.length; _i++) {
      _a2[_i - 2] = arguments[_i];
    }
    var from = _a2[0], to = _a2[1], _b = _a2[2], options = _b === void 0 ? {} : _b;
    var timeZone = config.timeZone, locale2 = config.locale, onError = config.onError;
    var filteredOptions = filterProps(options, DATE_TIME_FORMAT_OPTIONS, timeZone ? { timeZone } : {});
    try {
      return getDateTimeFormat(locale2, filteredOptions).formatRange(from, to);
    } catch (e2) {
      onError(new IntlError(IntlErrorCode.FORMAT_ERROR, "Error formatting date time range.", e2));
    }
    return String(from);
  }
  function formatDateToParts(config, getDateTimeFormat) {
    var _a2 = [];
    for (var _i = 2; _i < arguments.length; _i++) {
      _a2[_i - 2] = arguments[_i];
    }
    var value = _a2[0], _b = _a2[1], options = _b === void 0 ? {} : _b;
    var date = typeof value === "string" ? new Date(value || 0) : value;
    try {
      return getFormatter(config, "date", getDateTimeFormat, options).formatToParts(date);
    } catch (e2) {
      config.onError(new IntlError(IntlErrorCode.FORMAT_ERROR, "Error formatting date.", e2));
    }
    return [];
  }
  function formatTimeToParts(config, getDateTimeFormat) {
    var _a2 = [];
    for (var _i = 2; _i < arguments.length; _i++) {
      _a2[_i - 2] = arguments[_i];
    }
    var value = _a2[0], _b = _a2[1], options = _b === void 0 ? {} : _b;
    var date = typeof value === "string" ? new Date(value || 0) : value;
    try {
      return getFormatter(config, "time", getDateTimeFormat, options).formatToParts(date);
    } catch (e2) {
      config.onError(new IntlError(IntlErrorCode.FORMAT_ERROR, "Error formatting time.", e2));
    }
    return [];
  }

  // ../../node_modules/@formatjs/intl/lib/src/displayName.js
  var DISPLAY_NAMES_OPTONS = [
    "style",
    "type",
    "fallback"
  ];
  function formatDisplayName(_a2, getDisplayNames, value, options) {
    var locale2 = _a2.locale, onError = _a2.onError;
    var DisplayNames = Intl.DisplayNames;
    if (!DisplayNames) {
      onError(new FormatError('Intl.DisplayNames is not available in this environment.\nTry polyfilling it using "@formatjs/intl-displaynames"\n', ErrorCode.MISSING_INTL_API));
    }
    var filteredOptions = filterProps(options, DISPLAY_NAMES_OPTONS);
    try {
      return getDisplayNames(locale2, filteredOptions).of(value);
    } catch (e2) {
      onError(new IntlError(IntlErrorCode.FORMAT_ERROR, "Error formatting display name.", e2));
    }
  }

  // ../../node_modules/@formatjs/intl/lib/src/list.js
  var LIST_FORMAT_OPTIONS = [
    "type",
    "style"
  ];
  var now = Date.now();
  function generateToken(i2) {
    return "".concat(now, "_").concat(i2, "_").concat(now);
  }
  function formatList(opts, getListFormat, values, options) {
    if (options === void 0) {
      options = {};
    }
    var results = formatListToParts(opts, getListFormat, values, options).reduce(function(all, el) {
      var val = el.value;
      if (typeof val !== "string") {
        all.push(val);
      } else if (typeof all[all.length - 1] === "string") {
        all[all.length - 1] += val;
      } else {
        all.push(val);
      }
      return all;
    }, []);
    return results.length === 1 ? results[0] : results;
  }
  function formatListToParts(_a2, getListFormat, values, options) {
    var locale2 = _a2.locale, onError = _a2.onError;
    if (options === void 0) {
      options = {};
    }
    var ListFormat = Intl.ListFormat;
    if (!ListFormat) {
      onError(new FormatError('Intl.ListFormat is not available in this environment.\nTry polyfilling it using "@formatjs/intl-listformat"\n', ErrorCode.MISSING_INTL_API));
    }
    var filteredOptions = filterProps(options, LIST_FORMAT_OPTIONS);
    try {
      var richValues_1 = {};
      var serializedValues = values.map(function(v2, i2) {
        if (typeof v2 === "object") {
          var id = generateToken(i2);
          richValues_1[id] = v2;
          return id;
        }
        return String(v2);
      });
      return getListFormat(locale2, filteredOptions).formatToParts(serializedValues).map(function(part) {
        return part.type === "literal" ? part : __assign(__assign({}, part), { value: richValues_1[part.value] || part.value });
      });
    } catch (e2) {
      onError(new IntlError(IntlErrorCode.FORMAT_ERROR, "Error formatting list.", e2));
    }
    return values;
  }

  // ../../node_modules/@formatjs/intl/lib/src/plural.js
  var PLURAL_FORMAT_OPTIONS = ["type"];
  function formatPlural(_a2, getPluralRules, value, options) {
    var locale2 = _a2.locale, onError = _a2.onError;
    if (options === void 0) {
      options = {};
    }
    if (!Intl.PluralRules) {
      onError(new FormatError('Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n', ErrorCode.MISSING_INTL_API));
    }
    var filteredOptions = filterProps(options, PLURAL_FORMAT_OPTIONS);
    try {
      return getPluralRules(locale2, filteredOptions).select(value);
    } catch (e2) {
      onError(new IntlFormatError("Error formatting plural.", locale2, e2));
    }
    return "other";
  }

  // ../../node_modules/@formatjs/intl/lib/src/relativeTime.js
  var RELATIVE_TIME_FORMAT_OPTIONS = ["numeric", "style"];
  function getFormatter2(_a2, getRelativeTimeFormat, options) {
    var locale2 = _a2.locale, formats = _a2.formats, onError = _a2.onError;
    if (options === void 0) {
      options = {};
    }
    var format2 = options.format;
    var defaults = !!format2 && getNamedFormat(formats, "relative", format2, onError) || {};
    var filteredOptions = filterProps(options, RELATIVE_TIME_FORMAT_OPTIONS, defaults);
    return getRelativeTimeFormat(locale2, filteredOptions);
  }
  function formatRelativeTime(config, getRelativeTimeFormat, value, unit, options) {
    if (options === void 0) {
      options = {};
    }
    if (!unit) {
      unit = "second";
    }
    var RelativeTimeFormat = Intl.RelativeTimeFormat;
    if (!RelativeTimeFormat) {
      config.onError(new FormatError('Intl.RelativeTimeFormat is not available in this environment.\nTry polyfilling it using "@formatjs/intl-relativetimeformat"\n', ErrorCode.MISSING_INTL_API));
    }
    try {
      return getFormatter2(config, getRelativeTimeFormat, options).format(value, unit);
    } catch (e2) {
      config.onError(new IntlFormatError("Error formatting relative time.", config.locale, e2));
    }
    return String(value);
  }

  // ../../node_modules/@formatjs/intl/lib/src/number.js
  var NUMBER_FORMAT_OPTIONS = [
    "style",
    "currency",
    "currencyDisplay",
    "unit",
    "unitDisplay",
    "useGrouping",
    "minimumIntegerDigits",
    "minimumFractionDigits",
    "maximumFractionDigits",
    "minimumSignificantDigits",
    "maximumSignificantDigits",
    "compactDisplay",
    "currencyDisplay",
    "currencySign",
    "notation",
    "signDisplay",
    "unit",
    "unitDisplay",
    "numberingSystem"
  ];
  function getFormatter3(_a2, getNumberFormat, options) {
    var locale2 = _a2.locale, formats = _a2.formats, onError = _a2.onError;
    if (options === void 0) {
      options = {};
    }
    var format2 = options.format;
    var defaults = format2 && getNamedFormat(formats, "number", format2, onError) || {};
    var filteredOptions = filterProps(options, NUMBER_FORMAT_OPTIONS, defaults);
    return getNumberFormat(locale2, filteredOptions);
  }
  function formatNumber(config, getNumberFormat, value, options) {
    if (options === void 0) {
      options = {};
    }
    try {
      return getFormatter3(config, getNumberFormat, options).format(value);
    } catch (e2) {
      config.onError(new IntlError(IntlErrorCode.FORMAT_ERROR, "Error formatting number.", e2));
    }
    return String(value);
  }
  function formatNumberToParts(config, getNumberFormat, value, options) {
    if (options === void 0) {
      options = {};
    }
    try {
      return getFormatter3(config, getNumberFormat, options).formatToParts(value);
    } catch (e2) {
      config.onError(new IntlError(IntlErrorCode.FORMAT_ERROR, "Error formatting number.", e2));
    }
    return [];
  }

  // ../../node_modules/@formatjs/intl/lib/src/create-intl.js
  function messagesContainString(messages2) {
    var firstMessage = messages2 ? messages2[Object.keys(messages2)[0]] : void 0;
    return typeof firstMessage === "string";
  }
  function verifyConfigMessages(config) {
    if (config.onWarn && config.defaultRichTextElements && messagesContainString(config.messages || {})) {
      config.onWarn('[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. \nPlease consider using "@formatjs/cli" to pre-compile your messages for performance.\nFor more details see https://formatjs.io/docs/getting-started/message-distribution');
    }
  }
  function createIntl(config, cache) {
    var formatters = createFormatters(cache);
    var resolvedConfig = __assign(__assign({}, DEFAULT_INTL_CONFIG), config);
    var locale2 = resolvedConfig.locale, defaultLocale = resolvedConfig.defaultLocale, onError = resolvedConfig.onError;
    if (!locale2) {
      if (onError) {
        onError(new InvalidConfigError('"locale" was not configured, using "'.concat(defaultLocale, '" as fallback. See https://formatjs.io/docs/react-intl/api#intlshape for more details')));
      }
      resolvedConfig.locale = resolvedConfig.defaultLocale || "en";
    } else if (!Intl.NumberFormat.supportedLocalesOf(locale2).length && onError) {
      onError(new MissingDataError('Missing locale data for locale: "'.concat(locale2, '" in Intl.NumberFormat. Using default locale: "').concat(defaultLocale, '" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details')));
    } else if (!Intl.DateTimeFormat.supportedLocalesOf(locale2).length && onError) {
      onError(new MissingDataError('Missing locale data for locale: "'.concat(locale2, '" in Intl.DateTimeFormat. Using default locale: "').concat(defaultLocale, '" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details')));
    }
    verifyConfigMessages(resolvedConfig);
    return __assign(__assign({}, resolvedConfig), { formatters, formatNumber: formatNumber.bind(null, resolvedConfig, formatters.getNumberFormat), formatNumberToParts: formatNumberToParts.bind(null, resolvedConfig, formatters.getNumberFormat), formatRelativeTime: formatRelativeTime.bind(null, resolvedConfig, formatters.getRelativeTimeFormat), formatDate: formatDate.bind(null, resolvedConfig, formatters.getDateTimeFormat), formatDateToParts: formatDateToParts.bind(null, resolvedConfig, formatters.getDateTimeFormat), formatTime: formatTime.bind(null, resolvedConfig, formatters.getDateTimeFormat), formatDateTimeRange: formatDateTimeRange.bind(null, resolvedConfig, formatters.getDateTimeFormat), formatTimeToParts: formatTimeToParts.bind(null, resolvedConfig, formatters.getDateTimeFormat), formatPlural: formatPlural.bind(null, resolvedConfig, formatters.getPluralRules), formatMessage: formatMessage.bind(null, resolvedConfig, formatters), $t: formatMessage.bind(null, resolvedConfig, formatters), formatList: formatList.bind(null, resolvedConfig, formatters.getListFormat), formatListToParts: formatListToParts.bind(null, resolvedConfig, formatters.getListFormat), formatDisplayName: formatDisplayName.bind(null, resolvedConfig, formatters.getDisplayNames) });
  }

  // ../../node_modules/react-intl/lib/src/utils.js
  function invariantIntlContext(intl) {
    invariant(intl, "[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.");
  }
  var DEFAULT_INTL_CONFIG2 = __assign(__assign({}, DEFAULT_INTL_CONFIG), { textComponent: React2.Fragment });
  function assignUniqueKeysToParts(formatXMLElementFn) {
    return function(parts) {
      return formatXMLElementFn(React2.Children.toArray(parts));
    };
  }
  function shallowEqual(objA, objB) {
    if (objA === objB) {
      return true;
    }
    if (!objA || !objB) {
      return false;
    }
    var aKeys = Object.keys(objA);
    var bKeys = Object.keys(objB);
    var len = aKeys.length;
    if (bKeys.length !== len) {
      return false;
    }
    for (var i2 = 0; i2 < len; i2++) {
      var key = aKeys[i2];
      if (objA[key] !== objB[key] || !Object.prototype.hasOwnProperty.call(objB, key)) {
        return false;
      }
    }
    return true;
  }

  // ../../node_modules/react-intl/lib/src/components/injectIntl.js
  var IntlContext = React3.createContext(null);
  var IntlConsumer = IntlContext.Consumer;
  var IntlProvider = IntlContext.Provider;
  var Provider = IntlProvider;
  var Context = IntlContext;

  // ../../node_modules/react-intl/lib/src/components/useIntl.js
  function useIntl() {
    var intl = React4.useContext(Context);
    invariantIntlContext(intl);
    return intl;
  }

  // ../../node_modules/react-intl/lib/src/components/createFormattedComponent.js
  var DisplayName;
  (function(DisplayName2) {
    DisplayName2["formatDate"] = "FormattedDate";
    DisplayName2["formatTime"] = "FormattedTime";
    DisplayName2["formatNumber"] = "FormattedNumber";
    DisplayName2["formatList"] = "FormattedList";
    DisplayName2["formatDisplayName"] = "FormattedDisplayName";
  })(DisplayName || (DisplayName = {}));
  var DisplayNameParts;
  (function(DisplayNameParts2) {
    DisplayNameParts2["formatDate"] = "FormattedDateParts";
    DisplayNameParts2["formatTime"] = "FormattedTimeParts";
    DisplayNameParts2["formatNumber"] = "FormattedNumberParts";
    DisplayNameParts2["formatList"] = "FormattedListParts";
  })(DisplayNameParts || (DisplayNameParts = {}));
  var FormattedNumberParts = function(props) {
    var intl = useIntl();
    var value = props.value, children = props.children, formatProps = __rest(props, ["value", "children"]);
    return children(intl.formatNumberToParts(value, formatProps));
  };
  FormattedNumberParts.displayName = "FormattedNumberParts";
  FormattedNumberParts.displayName = "FormattedNumberParts";
  function createFormattedDateTimePartsComponent(name) {
    var ComponentParts = function(props) {
      var intl = useIntl();
      var value = props.value, children = props.children, formatProps = __rest(props, ["value", "children"]);
      var date = typeof value === "string" ? new Date(value || 0) : value;
      var formattedParts = name === "formatDate" ? intl.formatDateToParts(date, formatProps) : intl.formatTimeToParts(date, formatProps);
      return children(formattedParts);
    };
    ComponentParts.displayName = DisplayNameParts[name];
    return ComponentParts;
  }
  function createFormattedComponent(name) {
    var Component2 = function(props) {
      var intl = useIntl();
      var value = props.value, children = props.children, formatProps = __rest(
        props,
        ["value", "children"]
      );
      var formattedValue = intl[name](value, formatProps);
      if (typeof children === "function") {
        return children(formattedValue);
      }
      var Text = intl.textComponent || React5.Fragment;
      return React5.createElement(Text, null, formattedValue);
    };
    Component2.displayName = DisplayName[name];
    return Component2;
  }

  // ../../node_modules/react-intl/lib/src/components/provider.js
  var React6 = __toESM(require_react());
  function processIntlConfig(config) {
    return {
      locale: config.locale,
      timeZone: config.timeZone,
      fallbackOnEmptyString: config.fallbackOnEmptyString,
      formats: config.formats,
      textComponent: config.textComponent,
      messages: config.messages,
      defaultLocale: config.defaultLocale,
      defaultFormats: config.defaultFormats,
      onError: config.onError,
      onWarn: config.onWarn,
      wrapRichTextChunksInFragment: config.wrapRichTextChunksInFragment,
      defaultRichTextElements: config.defaultRichTextElements
    };
  }
  function assignUniqueKeysToFormatXMLElementFnArgument(values) {
    if (!values) {
      return values;
    }
    return Object.keys(values).reduce(function(acc, k2) {
      var v2 = values[k2];
      acc[k2] = isFormatXMLElementFn(v2) ? assignUniqueKeysToParts(v2) : v2;
      return acc;
    }, {});
  }
  var formatMessage2 = function(config, formatters, descriptor, rawValues) {
    var rest = [];
    for (var _i = 4; _i < arguments.length; _i++) {
      rest[_i - 4] = arguments[_i];
    }
    var values = assignUniqueKeysToFormatXMLElementFnArgument(rawValues);
    var chunks = formatMessage.apply(void 0, __spreadArray([
      config,
      formatters,
      descriptor,
      values
    ], rest, false));
    if (Array.isArray(chunks)) {
      return React6.Children.toArray(chunks);
    }
    return chunks;
  };
  var createIntl2 = function(_a2, cache) {
    var rawDefaultRichTextElements = _a2.defaultRichTextElements, config = __rest(_a2, ["defaultRichTextElements"]);
    var defaultRichTextElements = assignUniqueKeysToFormatXMLElementFnArgument(rawDefaultRichTextElements);
    var coreIntl = createIntl(__assign(__assign(__assign({}, DEFAULT_INTL_CONFIG2), config), { defaultRichTextElements }), cache);
    var resolvedConfig = {
      locale: coreIntl.locale,
      timeZone: coreIntl.timeZone,
      fallbackOnEmptyString: coreIntl.fallbackOnEmptyString,
      formats: coreIntl.formats,
      defaultLocale: coreIntl.defaultLocale,
      defaultFormats: coreIntl.defaultFormats,
      messages: coreIntl.messages,
      onError: coreIntl.onError,
      defaultRichTextElements
    };
    return __assign(__assign({}, coreIntl), { formatMessage: formatMessage2.bind(null, resolvedConfig, coreIntl.formatters), $t: formatMessage2.bind(null, resolvedConfig, coreIntl.formatters) });
  };
  var IntlProvider2 = function(_super) {
    __extends(IntlProvider3, _super);
    function IntlProvider3() {
      var _this = _super !== null && _super.apply(this, arguments) || this;
      _this.cache = createIntlCache();
      _this.state = {
        cache: _this.cache,
        intl: createIntl2(processIntlConfig(_this.props), _this.cache),
        prevConfig: processIntlConfig(_this.props)
      };
      return _this;
    }
    IntlProvider3.getDerivedStateFromProps = function(props, _a2) {
      var prevConfig = _a2.prevConfig, cache = _a2.cache;
      var config = processIntlConfig(props);
      if (!shallowEqual(prevConfig, config)) {
        return {
          intl: createIntl2(config, cache),
          prevConfig: config
        };
      }
      return null;
    };
    IntlProvider3.prototype.render = function() {
      invariantIntlContext(this.state.intl);
      return React6.createElement(Provider, { value: this.state.intl }, this.props.children);
    };
    IntlProvider3.displayName = "IntlProvider";
    IntlProvider3.defaultProps = DEFAULT_INTL_CONFIG2;
    return IntlProvider3;
  }(React6.PureComponent);
  var provider_default = IntlProvider2;

  // ../../node_modules/react-intl/lib/index.js
  var FormattedDate = createFormattedComponent("formatDate");
  var FormattedTime = createFormattedComponent("formatTime");
  var FormattedNumber = createFormattedComponent("formatNumber");
  var FormattedList = createFormattedComponent("formatList");
  var FormattedDisplayName = createFormattedComponent("formatDisplayName");
  var FormattedDateParts = createFormattedDateTimePartsComponent("formatDate");
  var FormattedTimeParts = createFormattedDateTimePartsComponent("formatTime");

  // src/Image/assets/image.svg
  var React7 = __toESM(require_react());
  var SvgImage = (props) => /* @__PURE__ */ React7.createElement("svg", {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React7.createElement("path", {
    d: "M19.86 15.26V2.47C19.8574 1.814 19.5949 1.18577 19.1301 0.722836C18.6653 0.259906 18.036 -5.33299e-06 17.38 0H2.5C2.16847 0.00126416 1.84048 0.068193 1.53497 0.196922C1.22945 0.32565 0.952464 0.513628 0.72 0.75C0.268046 1.20961 0.0102384 1.82548 1.31138e-09 2.47V17.38C-1.06443e-05 17.7074 0.0647931 18.0315 0.190674 18.3337C0.316554 18.6359 0.50102 18.9102 0.733432 19.1407C0.965844 19.3713 1.2416 19.5535 1.5448 19.677C1.848 19.8004 2.17264 19.8626 2.5 19.86H17.38C18.0369 19.8574 18.6662 19.5952 19.1307 19.1307C19.5952 18.6662 19.8574 18.0369 19.86 17.38V15.38V15.25V15.26ZM15.61 13.04L18.7 15.52L18.79 15.6V17.38C18.7821 17.7478 18.6298 18.0978 18.3659 18.3541C18.1021 18.6105 17.7479 18.7527 17.38 18.75H2.5C2.31454 18.7508 2.13075 18.715 1.95916 18.6446C1.78756 18.5743 1.63153 18.4707 1.5 18.34C1.36742 18.2098 1.26271 18.0541 1.19222 17.8821C1.12174 17.7102 1.08696 17.5258 1.09 17.34V16.47L1.18 16.39L6.25 12.14C6.39167 12.0175 6.5727 11.95 6.76 11.95C6.95222 11.9494 7.13771 12.0208 7.28 12.15L9.8 14.75C10.1157 15.0571 10.5305 15.2414 10.97 15.27C11.4102 15.304 11.8476 15.176 12.2 14.91L14.66 13C14.7961 12.8988 14.9604 12.8428 15.13 12.84C15.2999 12.8407 15.4649 12.8969 15.6 13L15.61 13.04ZM18.78 13.67V14.19L18.38 13.86L16.26 12.18C15.9416 11.9269 15.5468 11.7891 15.14 11.7891C14.7332 11.7891 14.3384 11.9269 14.02 12.18L11.56 13.97C11.4214 14.0831 11.2489 14.1465 11.07 14.15C10.8861 14.1476 10.7091 14.0803 10.57 13.96L8.02 11.44C7.6917 11.1055 7.24813 10.9089 6.77983 10.8904C6.31152 10.8718 5.85377 11.0326 5.5 11.34L1.5 14.75L1.09 15.1V2.47C1.09 2.28531 1.12654 2.10243 1.19752 1.93192C1.2685 1.76141 1.37252 1.60663 1.50358 1.4765C1.63464 1.34636 1.79016 1.24345 1.96117 1.17368C2.13218 1.10392 2.31531 1.06868 2.5 1.07H17.38C17.5658 1.06696 17.7502 1.10174 17.9221 1.17222C18.0941 1.24271 18.2498 1.34742 18.38 1.48C18.5107 1.61153 18.6143 1.76756 18.6846 1.93916C18.755 2.11075 18.7908 2.29454 18.79 2.48L18.78 13.67Z",
    fill: "#333333"
  }), /* @__PURE__ */ React7.createElement("path", {
    d: "M14.0707 4.37993C13.5919 4.18009 13.0647 4.12687 12.5557 4.22701C12.0467 4.32715 11.5788 4.57613 11.2115 4.94241C10.8441 5.30869 10.5938 5.77578 10.4922 6.28449C10.3905 6.7932 10.4422 7.32062 10.6407 7.79993C10.8466 8.2856 11.1953 8.69714 11.6407 8.97992C12.1453 9.31662 12.7511 9.46778 13.3547 9.4076C13.9584 9.34742 14.5224 9.07963 14.9507 8.64992C15.2546 8.34523 15.4788 7.97034 15.6035 7.5584C15.7281 7.14646 15.7494 6.71016 15.6654 6.28805C15.5813 5.86595 15.3946 5.47104 15.1217 5.13824C14.8488 4.80544 14.4981 4.545 14.1007 4.37993H14.0707ZM14.3507 7.65992C14.1855 7.91702 13.9443 8.11626 13.6607 8.22992C13.3763 8.34874 13.0629 8.38007 12.7607 8.31992C12.4597 8.25811 12.1824 8.11251 11.9607 7.89992C11.7994 7.73572 11.6763 7.53809 11.5999 7.32101C11.5235 7.10393 11.4958 6.87271 11.5187 6.64373C11.5416 6.41475 11.6146 6.1936 11.7324 5.99594C11.8502 5.79828 12.0101 5.62895 12.2007 5.49993C12.4548 5.32915 12.7544 5.23857 13.0607 5.23992C13.4736 5.24265 13.8687 5.40791 14.1607 5.69992C14.3062 5.84383 14.4217 6.01513 14.5007 6.20392C14.5796 6.39272 14.6204 6.59528 14.6207 6.79993C14.6216 7.10759 14.5273 7.40801 14.3507 7.65992Z",
    fill: "#333333"
  }));

  // src/Image/assets/download.svg
  var React8 = __toESM(require_react());
  var SvgDownload = (props) => /* @__PURE__ */ React8.createElement("svg", {
    width: 28,
    height: 26,
    viewBox: "0 0 26 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React8.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M13 25C19.9036 25 25.5 19.4036 25.5 12.5C25.5 5.59644 19.9036 0 13 0C6.09644 0 0.5 5.59644 0.5 12.5C0.5 19.4036 6.09644 25 13 25ZM17.6328 15.9581L13.5555 19.9162C13.4826 19.9868 13.396 20.0428 13.3006 20.081C13.2053 20.1193 13.1031 20.1389 12.9998 20.1389C12.8966 20.1389 12.7944 20.1191 12.6991 20.0808C12.6038 20.0426 12.5172 19.9865 12.4444 19.9158L8.36709 15.9578C8.22042 15.8153 8.13834 15.6225 8.13889 15.4216C8.13944 15.2207 8.22258 15.0282 8.37002 14.8865C8.51747 14.7449 8.71713 14.6656 8.92509 14.6661C9.13305 14.6666 9.33228 14.7469 9.47894 14.8894L12.2162 17.5465V5.61856C12.2162 5.41767 12.2988 5.22501 12.4459 5.08296C12.5929 4.94091 12.7924 4.86111 13.0003 4.86111C13.2083 4.86111 13.4077 4.94091 13.5548 5.08296C13.7018 5.22501 13.7844 5.41767 13.7844 5.61856L13.7844 17.5465L16.5209 14.8894C16.5936 14.8189 16.6799 14.7628 16.7749 14.7245C16.87 14.6862 16.9719 14.6664 17.0749 14.6662C17.1779 14.6659 17.2799 14.6853 17.3752 14.7231C17.4704 14.761 17.557 14.8166 17.63 14.8867C17.703 14.9569 17.761 15.0403 17.8007 15.1321C17.8403 15.2239 17.8609 15.3224 17.8611 15.4219C17.8614 15.5214 17.8413 15.6199 17.8022 15.7119C17.763 15.804 17.7054 15.8876 17.6328 15.9581Z",
    fill: "#222222"
  }));

  // src/Image/assets/mediatheque.svg
  var React9 = __toESM(require_react());
  var SvgMediatheque = (props) => /* @__PURE__ */ React9.createElement("svg", {
    width: 28,
    height: 26,
    viewBox: "0 0 28 26",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React9.createElement("path", {
    d: "M7.25281 20.4814C5.42678 20.4814 3.80262 19.3023 3.21296 17.5469L3.17304 17.4146C3.03389 16.9499 2.97572 16.5588 2.97572 16.1677V8.32471L0.20873 17.6401C-0.147124 19.0102 0.663812 20.4308 2.0245 20.8093L19.6609 25.5728C19.8811 25.6303 20.1012 25.6579 20.3179 25.6579C21.4539 25.6579 22.4918 24.8976 22.7826 23.7771L23.8103 20.4814H7.25281Z",
    fill: "#222222"
  }), /* @__PURE__ */ React9.createElement("path", {
    d: "M10.3885 8.40309C11.6466 8.40309 12.6696 7.37124 12.6696 6.10242C12.6696 4.83361 11.6466 3.80176 10.3885 3.80176C9.1305 3.80176 8.10742 4.83361 8.10742 6.10242C8.10742 7.37124 9.1305 8.40309 10.3885 8.40309Z",
    fill: "#222222"
  }), /* @__PURE__ */ React9.createElement("path", {
    d: "M24.6453 0.350098H7.53694C5.96525 0.350098 4.68555 1.64077 4.68555 3.22593V15.8796C4.68555 17.4648 5.96525 18.7554 7.53694 18.7554H24.6453C26.217 18.7554 27.4967 17.4648 27.4967 15.8796V3.22593C27.4967 1.64077 26.217 0.350098 24.6453 0.350098ZM7.53694 2.65076H24.6453C24.9601 2.65076 25.2156 2.90844 25.2156 3.22593V11.3921L21.6126 7.15202C21.2305 6.69994 20.6773 6.45837 20.0831 6.44456C19.4923 6.44801 18.938 6.71259 18.5593 7.17042L14.3233 12.2986L12.9432 10.9102C12.163 10.1233 10.8936 10.1233 10.1146 10.9102L6.96666 14.0839V3.22593C6.96666 2.90844 7.22215 2.65076 7.53694 2.65076Z",
    fill: "#222222"
  }));

  // src/utils/intl.ts
  var getLocale = () => document.documentElement.lang || navigator.languages && navigator.languages[0] || navigator.language || "en";
  var locale = getLocale();
  var messages = {
    fr: {
      BlockImage__DOWNLOAD: "T\xE9l\xE9charger une image",
      BlockImage__OR_DROP: "ou glisser-d\xE9poser une image",
      BlockImage__UPLOAD: "S\xE9lectionnez une image depuis votre m\xE9diath\xE8que",
      BlockImage__TITLE: "Titre de l'image",
      BlockImage__LINK: "Lien de l'image",
      BlockImage__LINK_PLACEHOLDER: "Lien au clic sur l'image",
      BlockImage__LIBRARY_MODAL_TITLE: "Rechercher une image",
      BlockImage__LIBRARY_MODAL_SEARCH: "Rechercher dans la m\xE9diath\xE8que",
      BlockImage__LIBRARY_MODAL_TAG_FILTER: "Filtrer par tag",
      BlockImage__LIBRARY_LOADING: "Chargement de la librairie...",
      BlockImage__TOAST_WRONG_FILE_TYPE: "Votre image n'a pas pu \xEAtre t\xE9l\xE9charg\xE9e. Veuillez v\xE9rifier que votre fichier est bien une image.",
      BlockImage__TOAST_MAX_FILE: "Veuillez uploader une seule image.",
      BlockImage__DROP_TO_UPLOAD: "Relacher pour uploader votre image",
      BlockImage__LIBRARY_NO_CONTENT: "Aucune image trouv\xE9e",
      BlockImage__LIBRARY_SEARCHING: "Recherche en cours...",
      BlockImage__LIBRARY_IMAGE_TAG_CONFIG: "Configuration des tags de",
      BlockImage__LIBRARY_IMAGE_ADD_TAG: "Ajouter un ou plusieurs tag",
      BlockImage__LIBRARY_IMAGE_SELECT_TAG: "S\xE9lectionnez un ou plusieurs tag",
      REPLACE: "Remplacer",
      REPLACE_IMAGE: "Remplacer l'image",
      OPTIONAL: "Optionnel",
      CANCEL: "Annuler",
      DELETE: "Supprimer",
      SEARCH_BY: "R\xE9f\xE9rence, nom, ...",
      LOADING: "Chargement...",
      DOWNLOADING: "T\xE9l\xE9chargement...",
      ALL_TAGS: "Tous les tags",
      CHOOSE: "Choisir"
    },
    en: {
      BlockImage__DOWNLOAD: "Download an image",
      BlockImage__OR_DROP: "or drop an image",
      BlockImage__UPLOAD: "Select an image from your library",
      BlockImage__TITLE: "Image title",
      BlockImage__LINK: "Image link",
      BlockImage__LINK_PLACEHOLDER: "Link on click on image",
      BlockImage__LIBRARY_MODAL_TITLE: "Search an image",
      BlockImage__LIBRARY_MODAL_SEARCH: "Search in the library",
      BlockImage__LIBRARY_MODAL_TAG_FILTER: "Filter by tag",
      BlockImage__LIBRARY_LOADING: "Loading library...",
      BlockImage__TOAST_WRONG_FILE_TYPE: "Your image could not be uploaded. Please check that your file is an image.",
      BlockImage__TOAST_MAX_FILE: "Please upload only one image.",
      BlockImage__DROP_TO_UPLOAD: "Release to upload your image",
      BlockImage__LIBRARY_NO_CONTENT: "No image found",
      BlockImage__LIBRARY_SEARCHING: "Searching...",
      BlockImage__LIBRARY_IMAGE_TAG_CONFIG: "Configure tags of",
      BlockImage__LIBRARY_IMAGE_ADD_TAG: "Add one or more tag",
      BlockImage__LIBRARY_IMAGE_SELECT_TAG: "Select one or more tag",
      REPLACE: "Replace",
      REPLACE_IMAGE: "Replace image",
      OPTIONAL: "Optional",
      CANCEL: "Cancel",
      DELETE: "Delete",
      SEARCH_BY: "Reference, name, ...",
      LOADING: "Loading...",
      DOWNLOADING: "Downloading...",
      ALL_TAGS: "All tags",
      CHOOSE: "Choose"
    },
    es: {
      BlockImage__DOWNLOAD: "Descargar una imagen",
      BlockImage__OR_DROP: "o arrastrar una imagen",
      BlockImage__UPLOAD: "Seleccionar una imagen de tu biblioteca",
      BlockImage__TITLE: "T\xEDtulo de la imagen",
      BlockImage__LINK: "Enlace de la imagen",
      BlockImage__LINK_PLACEHOLDER: "Enlace al hacer clic en la imagen",
      BlockImage__LIBRARY_MODAL_TITLE: "Buscar una imagen",
      BlockImage__LIBRARY_MODAL_SEARCH: "Buscar en la biblioteca",
      BlockImage__LIBRARY_MODAL_TAG_FILTER: "Filtrar por tag",
      BlockImage__LIBRARY_LOADING: "Cargando la biblioteca...",
      BlockImage__TOAST_WRONG_FILE_TYPE: "Tu imagen no pudo ser subida. Por favor verifica que tu archivo es una imagen.",
      BlockImage__TOAST_MAX_FILE: "Por favor sube solo una imagen.",
      BlockImage__DROP_TO_UPLOAD: "Suelte para subir tu imagen",
      BlockImage__LIBRARY_NO_CONTENT: "No se encontraron imagenes",
      BlockImage__LIBRARY_SEARCHING: "Buscando...",
      BlockImage__LIBRARY_IMAGE_TAG_CONFIG: "Configurar tags de",
      BlockImage__LIBRARY_IMAGE_ADD_TAG: "Agregar uno o m\xE1s tags",
      BlockImage__LIBRARY_IMAGE_SELECT_TAG: "Seleccionar uno o m\xE1s tags",
      REPLACE: "Reemplazar",
      REPLACE_IMAGE: "Reemplazar imagen",
      OPTIONAL: "Opcional",
      CANCEL: "Cancelar",
      DELETE: "Eliminar",
      SEARCH_BY: "Referencia, nombre, ...",
      LOADING: "Cargando...",
      DOWNLOADING: "Descargando...",
      ALL_TAGS: "Todos los tags",
      CHOOSE: "Elegir"
    },
    it: {
      BlockImage__DOWNLOAD: "Scarica un immagine",
      BlockImage__OR_DROP: "o trascina un immagine",
      BlockImage__UPLOAD: "Seleziona un immagine dalla tua libreria",
      BlockImage__TITLE: "Titolo dell immagine",
      BlockImage__LINK: "Link dell immagine",
      BlockImage__LINK_PLACEHOLDER: "Link al click sull immagine",
      BlockImage__LIBRARY_MODAL_TITLE: "Cerca un immagine",
      BlockImage__LIBRARY_MODAL_SEARCH: "Cerca nella libreria",
      BlockImage__LIBRARY_MODAL_TAG_FILTER: "Filtra per tag",
      BlockImage__LIBRARY_LOADING: "Caricamento della libreria...",
      BlockImage__TOAST_WRONG_FILE_TYPE: "La tua immagine non pu\xF2 essere caricata. Per favore verifica che il tuo file sia un immagine.",
      BlockImage__TOAST_MAX_FILE: "Per favore carica solo una immagine.",
      BlockImage__DROP_TO_UPLOAD: "Rilascia per caricare la tua immagine",
      BlockImage__LIBRARY_NO_CONTENT: "Nessuna immagine trovata",
      BlockImage__LIBRARY_SEARCHING: "Ricerca in corso...",
      BlockImage__LIBRARY_IMAGE_TAG_CONFIG: "Configura i tag di",
      BlockImage__LIBRARY_IMAGE_ADD_TAG: "Aggiungi uno o pi\xF9 tag",
      BlockImage__LIBRARY_IMAGE_SELECT_TAG: "Seleziona uno o pi\xF9 tag",
      REPLACE: "Sostituisci",
      REPLACE_IMAGE: "Sostituisci immagine",
      OPTIONAL: "Opzionale",
      CANCEL: "Annulla",
      DELETE: "Elimina",
      SEARCH_BY: "Riferimento, nome, ...",
      LOADING: "Caricamento...",
      DOWNLOADING: "Scaricare...",
      ALL_TAGS: "Tutti i tag",
      CHOOSE: "Scegli"
    }
  };

  // ../../node_modules/react-dropzone/dist/es/index.js
  var import_react = __toESM(require_react());
  var import_prop_types = __toESM(require_prop_types());

  // ../../node_modules/file-selector/dist/es5/file.js
  var COMMON_MIME_TYPES = /* @__PURE__ */ new Map([
    ["aac", "audio/aac"],
    ["abw", "application/x-abiword"],
    ["arc", "application/x-freearc"],
    ["avif", "image/avif"],
    ["avi", "video/x-msvideo"],
    ["azw", "application/vnd.amazon.ebook"],
    ["bin", "application/octet-stream"],
    ["bmp", "image/bmp"],
    ["bz", "application/x-bzip"],
    ["bz2", "application/x-bzip2"],
    ["cda", "application/x-cdf"],
    ["csh", "application/x-csh"],
    ["css", "text/css"],
    ["csv", "text/csv"],
    ["doc", "application/msword"],
    ["docx", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"],
    ["eot", "application/vnd.ms-fontobject"],
    ["epub", "application/epub+zip"],
    ["gz", "application/gzip"],
    ["gif", "image/gif"],
    ["heic", "image/heic"],
    ["heif", "image/heif"],
    ["htm", "text/html"],
    ["html", "text/html"],
    ["ico", "image/vnd.microsoft.icon"],
    ["ics", "text/calendar"],
    ["jar", "application/java-archive"],
    ["jpeg", "image/jpeg"],
    ["jpg", "image/jpeg"],
    ["js", "text/javascript"],
    ["json", "application/json"],
    ["jsonld", "application/ld+json"],
    ["mid", "audio/midi"],
    ["midi", "audio/midi"],
    ["mjs", "text/javascript"],
    ["mp3", "audio/mpeg"],
    ["mp4", "video/mp4"],
    ["mpeg", "video/mpeg"],
    ["mpkg", "application/vnd.apple.installer+xml"],
    ["odp", "application/vnd.oasis.opendocument.presentation"],
    ["ods", "application/vnd.oasis.opendocument.spreadsheet"],
    ["odt", "application/vnd.oasis.opendocument.text"],
    ["oga", "audio/ogg"],
    ["ogv", "video/ogg"],
    ["ogx", "application/ogg"],
    ["opus", "audio/opus"],
    ["otf", "font/otf"],
    ["png", "image/png"],
    ["pdf", "application/pdf"],
    ["php", "application/x-httpd-php"],
    ["ppt", "application/vnd.ms-powerpoint"],
    ["pptx", "application/vnd.openxmlformats-officedocument.presentationml.presentation"],
    ["rar", "application/vnd.rar"],
    ["rtf", "application/rtf"],
    ["sh", "application/x-sh"],
    ["svg", "image/svg+xml"],
    ["swf", "application/x-shockwave-flash"],
    ["tar", "application/x-tar"],
    ["tif", "image/tiff"],
    ["tiff", "image/tiff"],
    ["ts", "video/mp2t"],
    ["ttf", "font/ttf"],
    ["txt", "text/plain"],
    ["vsd", "application/vnd.visio"],
    ["wav", "audio/wav"],
    ["weba", "audio/webm"],
    ["webm", "video/webm"],
    ["webp", "image/webp"],
    ["woff", "font/woff"],
    ["woff2", "font/woff2"],
    ["xhtml", "application/xhtml+xml"],
    ["xls", "application/vnd.ms-excel"],
    ["xlsx", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],
    ["xml", "application/xml"],
    ["xul", "application/vnd.mozilla.xul+xml"],
    ["zip", "application/zip"],
    ["7z", "application/x-7z-compressed"],
    ["mkv", "video/x-matroska"],
    ["mov", "video/quicktime"],
    ["msg", "application/vnd.ms-outlook"]
  ]);
  function toFileWithPath(file, path) {
    var f3 = withMimeType(file);
    if (typeof f3.path !== "string") {
      var webkitRelativePath = file.webkitRelativePath;
      Object.defineProperty(f3, "path", {
        value: typeof path === "string" ? path : typeof webkitRelativePath === "string" && webkitRelativePath.length > 0 ? webkitRelativePath : file.name,
        writable: false,
        configurable: false,
        enumerable: true
      });
    }
    return f3;
  }
  function withMimeType(file) {
    var name = file.name;
    var hasExtension = name && name.lastIndexOf(".") !== -1;
    if (hasExtension && !file.type) {
      var ext = name.split(".").pop().toLowerCase();
      var type = COMMON_MIME_TYPES.get(ext);
      if (type) {
        Object.defineProperty(file, "type", {
          value: type,
          writable: false,
          configurable: false,
          enumerable: true
        });
      }
    }
    return file;
  }

  // ../../node_modules/file-selector/dist/es5/file-selector.js
  var FILES_TO_IGNORE = [
    ".DS_Store",
    "Thumbs.db"
  ];
  function fromEvent(evt) {
    return __awaiter(this, void 0, void 0, function() {
      return __generator(this, function(_a2) {
        if (isObject(evt) && isDataTransfer(evt.dataTransfer)) {
          return [2, getDataTransferFiles(evt.dataTransfer, evt.type)];
        } else if (isChangeEvt(evt)) {
          return [2, getInputFiles(evt)];
        } else if (Array.isArray(evt) && evt.every(function(item) {
          return "getFile" in item && typeof item.getFile === "function";
        })) {
          return [2, getFsHandleFiles(evt)];
        }
        return [2, []];
      });
    });
  }
  function isDataTransfer(value) {
    return isObject(value);
  }
  function isChangeEvt(value) {
    return isObject(value) && isObject(value.target);
  }
  function isObject(v2) {
    return typeof v2 === "object" && v2 !== null;
  }
  function getInputFiles(evt) {
    return fromList(evt.target.files).map(function(file) {
      return toFileWithPath(file);
    });
  }
  function getFsHandleFiles(handles) {
    return __awaiter(this, void 0, void 0, function() {
      var files;
      return __generator(this, function(_a2) {
        switch (_a2.label) {
          case 0:
            return [4, Promise.all(handles.map(function(h2) {
              return h2.getFile();
            }))];
          case 1:
            files = _a2.sent();
            return [2, files.map(function(file) {
              return toFileWithPath(file);
            })];
        }
      });
    });
  }
  function getDataTransferFiles(dt, type) {
    return __awaiter(this, void 0, void 0, function() {
      var items, files;
      return __generator(this, function(_a2) {
        switch (_a2.label) {
          case 0:
            if (!dt.items)
              return [3, 2];
            items = fromList(dt.items).filter(function(item) {
              return item.kind === "file";
            });
            if (type !== "drop") {
              return [2, items];
            }
            return [4, Promise.all(items.map(toFilePromises))];
          case 1:
            files = _a2.sent();
            return [2, noIgnoredFiles(flatten(files))];
          case 2:
            return [2, noIgnoredFiles(fromList(dt.files).map(function(file) {
              return toFileWithPath(file);
            }))];
        }
      });
    });
  }
  function noIgnoredFiles(files) {
    return files.filter(function(file) {
      return FILES_TO_IGNORE.indexOf(file.name) === -1;
    });
  }
  function fromList(items) {
    if (items === null) {
      return [];
    }
    var files = [];
    for (var i2 = 0; i2 < items.length; i2++) {
      var file = items[i2];
      files.push(file);
    }
    return files;
  }
  function toFilePromises(item) {
    if (typeof item.webkitGetAsEntry !== "function") {
      return fromDataTransferItem(item);
    }
    var entry = item.webkitGetAsEntry();
    if (entry && entry.isDirectory) {
      return fromDirEntry(entry);
    }
    return fromDataTransferItem(item);
  }
  function flatten(items) {
    return items.reduce(function(acc, files) {
      return __spreadArray(__spreadArray([], __read(acc), false), __read(Array.isArray(files) ? flatten(files) : [files]), false);
    }, []);
  }
  function fromDataTransferItem(item) {
    var file = item.getAsFile();
    if (!file) {
      return Promise.reject("".concat(item, " is not a File"));
    }
    var fwp = toFileWithPath(file);
    return Promise.resolve(fwp);
  }
  function fromEntry(entry) {
    return __awaiter(this, void 0, void 0, function() {
      return __generator(this, function(_a2) {
        return [2, entry.isDirectory ? fromDirEntry(entry) : fromFileEntry(entry)];
      });
    });
  }
  function fromDirEntry(entry) {
    var reader = entry.createReader();
    return new Promise(function(resolve, reject) {
      var entries = [];
      function readEntries() {
        var _this = this;
        reader.readEntries(function(batch) {
          return __awaiter(_this, void 0, void 0, function() {
            var files, err_1, items;
            return __generator(this, function(_a2) {
              switch (_a2.label) {
                case 0:
                  if (!!batch.length)
                    return [3, 5];
                  _a2.label = 1;
                case 1:
                  _a2.trys.push([1, 3, , 4]);
                  return [4, Promise.all(entries)];
                case 2:
                  files = _a2.sent();
                  resolve(files);
                  return [3, 4];
                case 3:
                  err_1 = _a2.sent();
                  reject(err_1);
                  return [3, 4];
                case 4:
                  return [3, 6];
                case 5:
                  items = Promise.all(batch.map(fromEntry));
                  entries.push(items);
                  readEntries();
                  _a2.label = 6;
                case 6:
                  return [2];
              }
            });
          });
        }, function(err) {
          reject(err);
        });
      }
      readEntries();
    });
  }
  function fromFileEntry(entry) {
    return __awaiter(this, void 0, void 0, function() {
      return __generator(this, function(_a2) {
        return [2, new Promise(function(resolve, reject) {
          entry.file(function(file) {
            var fwp = toFileWithPath(file, entry.fullPath);
            resolve(fwp);
          }, function(err) {
            reject(err);
          });
        })];
      });
    });
  }

  // ../../node_modules/react-dropzone/dist/es/utils/index.js
  var import_attr_accept = __toESM(require_es());
  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }
  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
      return Array.from(iter);
  }
  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr))
      return _arrayLikeToArray(arr);
  }
  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      enumerableOnly && (symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      })), keys.push.apply(keys, symbols);
    }
    return keys;
  }
  function _objectSpread(target) {
    for (var i2 = 1; i2 < arguments.length; i2++) {
      var source = null != arguments[i2] ? arguments[i2] : {};
      i2 % 2 ? ownKeys(Object(source), true).forEach(function(key) {
        _defineProperty(target, key, source[key]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
    return target;
  }
  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  function _slicedToArray(arr, i2) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i2) || _unsupportedIterableToArray(arr, i2) || _nonIterableRest();
  }
  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _unsupportedIterableToArray(o2, minLen) {
    if (!o2)
      return;
    if (typeof o2 === "string")
      return _arrayLikeToArray(o2, minLen);
    var n3 = Object.prototype.toString.call(o2).slice(8, -1);
    if (n3 === "Object" && o2.constructor)
      n3 = o2.constructor.name;
    if (n3 === "Map" || n3 === "Set")
      return Array.from(o2);
    if (n3 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n3))
      return _arrayLikeToArray(o2, minLen);
  }
  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length)
      len = arr.length;
    for (var i2 = 0, arr2 = new Array(len); i2 < len; i2++) {
      arr2[i2] = arr[i2];
    }
    return arr2;
  }
  function _iterableToArrayLimit(arr, i2) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null)
      return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
      for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);
        if (i2 && _arr.length === i2)
          break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null)
          _i["return"]();
      } finally {
        if (_d)
          throw _e;
      }
    }
    return _arr;
  }
  function _arrayWithHoles(arr) {
    if (Array.isArray(arr))
      return arr;
  }
  var FILE_INVALID_TYPE = "file-invalid-type";
  var FILE_TOO_LARGE = "file-too-large";
  var FILE_TOO_SMALL = "file-too-small";
  var TOO_MANY_FILES = "too-many-files";
  var getInvalidTypeRejectionErr = function getInvalidTypeRejectionErr2(accept) {
    accept = Array.isArray(accept) && accept.length === 1 ? accept[0] : accept;
    var messageSuffix = Array.isArray(accept) ? "one of ".concat(accept.join(", ")) : accept;
    return {
      code: FILE_INVALID_TYPE,
      message: "File type must be ".concat(messageSuffix)
    };
  };
  var getTooLargeRejectionErr = function getTooLargeRejectionErr2(maxSize) {
    return {
      code: FILE_TOO_LARGE,
      message: "File is larger than ".concat(maxSize, " ").concat(maxSize === 1 ? "byte" : "bytes")
    };
  };
  var getTooSmallRejectionErr = function getTooSmallRejectionErr2(minSize) {
    return {
      code: FILE_TOO_SMALL,
      message: "File is smaller than ".concat(minSize, " ").concat(minSize === 1 ? "byte" : "bytes")
    };
  };
  var TOO_MANY_FILES_REJECTION = {
    code: TOO_MANY_FILES,
    message: "Too many files"
  };
  function fileAccepted(file, accept) {
    var isAcceptable = file.type === "application/x-moz-file" || (0, import_attr_accept.default)(file, accept);
    return [isAcceptable, isAcceptable ? null : getInvalidTypeRejectionErr(accept)];
  }
  function fileMatchSize(file, minSize, maxSize) {
    if (isDefined(file.size)) {
      if (isDefined(minSize) && isDefined(maxSize)) {
        if (file.size > maxSize)
          return [false, getTooLargeRejectionErr(maxSize)];
        if (file.size < minSize)
          return [false, getTooSmallRejectionErr(minSize)];
      } else if (isDefined(minSize) && file.size < minSize)
        return [false, getTooSmallRejectionErr(minSize)];
      else if (isDefined(maxSize) && file.size > maxSize)
        return [false, getTooLargeRejectionErr(maxSize)];
    }
    return [true, null];
  }
  function isDefined(value) {
    return value !== void 0 && value !== null;
  }
  function allFilesAccepted(_ref) {
    var files = _ref.files, accept = _ref.accept, minSize = _ref.minSize, maxSize = _ref.maxSize, multiple = _ref.multiple, maxFiles = _ref.maxFiles, validator = _ref.validator;
    if (!multiple && files.length > 1 || multiple && maxFiles >= 1 && files.length > maxFiles) {
      return false;
    }
    return files.every(function(file) {
      var _fileAccepted = fileAccepted(file, accept), _fileAccepted2 = _slicedToArray(_fileAccepted, 1), accepted = _fileAccepted2[0];
      var _fileMatchSize = fileMatchSize(file, minSize, maxSize), _fileMatchSize2 = _slicedToArray(_fileMatchSize, 1), sizeMatch = _fileMatchSize2[0];
      var customErrors = validator ? validator(file) : null;
      return accepted && sizeMatch && !customErrors;
    });
  }
  function isPropagationStopped(event) {
    if (typeof event.isPropagationStopped === "function") {
      return event.isPropagationStopped();
    } else if (typeof event.cancelBubble !== "undefined") {
      return event.cancelBubble;
    }
    return false;
  }
  function isEvtWithFiles(event) {
    if (!event.dataTransfer) {
      return !!event.target && !!event.target.files;
    }
    return Array.prototype.some.call(event.dataTransfer.types, function(type) {
      return type === "Files" || type === "application/x-moz-file";
    });
  }
  function onDocumentDragOver(event) {
    event.preventDefault();
  }
  function isIe(userAgent) {
    return userAgent.indexOf("MSIE") !== -1 || userAgent.indexOf("Trident/") !== -1;
  }
  function isEdge(userAgent) {
    return userAgent.indexOf("Edge/") !== -1;
  }
  function isIeOrEdge() {
    var userAgent = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : window.navigator.userAgent;
    return isIe(userAgent) || isEdge(userAgent);
  }
  function composeEventHandlers() {
    for (var _len = arguments.length, fns = new Array(_len), _key = 0; _key < _len; _key++) {
      fns[_key] = arguments[_key];
    }
    return function(event) {
      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }
      return fns.some(function(fn3) {
        if (!isPropagationStopped(event) && fn3) {
          fn3.apply(void 0, [event].concat(args));
        }
        return isPropagationStopped(event);
      });
    };
  }
  function canUseFileSystemAccessAPI() {
    return "showOpenFilePicker" in window;
  }
  function pickerOptionsFromAccept(accept) {
    if (isDefined(accept)) {
      var acceptForPicker = Object.entries(accept).filter(function(_ref2) {
        var _ref3 = _slicedToArray(_ref2, 2), mimeType = _ref3[0], ext = _ref3[1];
        var ok = true;
        if (!isMIMEType(mimeType)) {
          console.warn('Skipped "'.concat(mimeType, '" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.'));
          ok = false;
        }
        if (!Array.isArray(ext) || !ext.every(isExt)) {
          console.warn('Skipped "'.concat(mimeType, '" because an invalid file extension was provided.'));
          ok = false;
        }
        return ok;
      }).reduce(function(agg, _ref4) {
        var _ref5 = _slicedToArray(_ref4, 2), mimeType = _ref5[0], ext = _ref5[1];
        return _objectSpread(_objectSpread({}, agg), {}, _defineProperty({}, mimeType, ext));
      }, {});
      return [{
        accept: acceptForPicker
      }];
    }
    return accept;
  }
  function acceptPropAsAcceptAttr(accept) {
    if (isDefined(accept)) {
      return Object.entries(accept).reduce(function(a2, _ref6) {
        var _ref7 = _slicedToArray(_ref6, 2), mimeType = _ref7[0], ext = _ref7[1];
        return [].concat(_toConsumableArray(a2), [mimeType], _toConsumableArray(ext));
      }, []).filter(function(v2) {
        return isMIMEType(v2) || isExt(v2);
      }).join(",");
    }
    return void 0;
  }
  function isAbort(v2) {
    return v2 instanceof DOMException && (v2.name === "AbortError" || v2.code === v2.ABORT_ERR);
  }
  function isSecurityError(v2) {
    return v2 instanceof DOMException && (v2.name === "SecurityError" || v2.code === v2.SECURITY_ERR);
  }
  function isMIMEType(v2) {
    return v2 === "audio/*" || v2 === "video/*" || v2 === "image/*" || v2 === "text/*" || /\w+\/[-+.\w]+/g.test(v2);
  }
  function isExt(v2) {
    return /^.*\.[\w]+$/.test(v2);
  }

  // ../../node_modules/react-dropzone/dist/es/index.js
  var _excluded = ["children"];
  var _excluded2 = ["open"];
  var _excluded3 = ["refKey", "role", "onKeyDown", "onFocus", "onBlur", "onClick", "onDragEnter", "onDragOver", "onDragLeave", "onDrop"];
  var _excluded4 = ["refKey", "onChange", "onClick"];
  function _toConsumableArray2(arr) {
    return _arrayWithoutHoles2(arr) || _iterableToArray2(arr) || _unsupportedIterableToArray2(arr) || _nonIterableSpread2();
  }
  function _nonIterableSpread2() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _iterableToArray2(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
      return Array.from(iter);
  }
  function _arrayWithoutHoles2(arr) {
    if (Array.isArray(arr))
      return _arrayLikeToArray2(arr);
  }
  function _slicedToArray2(arr, i2) {
    return _arrayWithHoles2(arr) || _iterableToArrayLimit2(arr, i2) || _unsupportedIterableToArray2(arr, i2) || _nonIterableRest2();
  }
  function _nonIterableRest2() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _unsupportedIterableToArray2(o2, minLen) {
    if (!o2)
      return;
    if (typeof o2 === "string")
      return _arrayLikeToArray2(o2, minLen);
    var n3 = Object.prototype.toString.call(o2).slice(8, -1);
    if (n3 === "Object" && o2.constructor)
      n3 = o2.constructor.name;
    if (n3 === "Map" || n3 === "Set")
      return Array.from(o2);
    if (n3 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n3))
      return _arrayLikeToArray2(o2, minLen);
  }
  function _arrayLikeToArray2(arr, len) {
    if (len == null || len > arr.length)
      len = arr.length;
    for (var i2 = 0, arr2 = new Array(len); i2 < len; i2++) {
      arr2[i2] = arr[i2];
    }
    return arr2;
  }
  function _iterableToArrayLimit2(arr, i2) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null)
      return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
      for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);
        if (i2 && _arr.length === i2)
          break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null)
          _i["return"]();
      } finally {
        if (_d)
          throw _e;
      }
    }
    return _arr;
  }
  function _arrayWithHoles2(arr) {
    if (Array.isArray(arr))
      return arr;
  }
  function ownKeys2(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      enumerableOnly && (symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      })), keys.push.apply(keys, symbols);
    }
    return keys;
  }
  function _objectSpread2(target) {
    for (var i2 = 1; i2 < arguments.length; i2++) {
      var source = null != arguments[i2] ? arguments[i2] : {};
      i2 % 2 ? ownKeys2(Object(source), true).forEach(function(key) {
        _defineProperty2(target, key, source[key]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys2(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
    return target;
  }
  function _defineProperty2(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  function _objectWithoutProperties(source, excluded) {
    if (source == null)
      return {};
    var target = _objectWithoutPropertiesLoose(source, excluded);
    var key, i2;
    if (Object.getOwnPropertySymbols) {
      var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
      for (i2 = 0; i2 < sourceSymbolKeys.length; i2++) {
        key = sourceSymbolKeys[i2];
        if (excluded.indexOf(key) >= 0)
          continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key))
          continue;
        target[key] = source[key];
      }
    }
    return target;
  }
  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null)
      return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i2;
    for (i2 = 0; i2 < sourceKeys.length; i2++) {
      key = sourceKeys[i2];
      if (excluded.indexOf(key) >= 0)
        continue;
      target[key] = source[key];
    }
    return target;
  }
  var Dropzone = /* @__PURE__ */ (0, import_react.forwardRef)(function(_ref, ref) {
    var children = _ref.children, params = _objectWithoutProperties(_ref, _excluded);
    var _useDropzone = useDropzone(params), open = _useDropzone.open, props = _objectWithoutProperties(_useDropzone, _excluded2);
    (0, import_react.useImperativeHandle)(ref, function() {
      return {
        open
      };
    }, [open]);
    return /* @__PURE__ */ import_react.default.createElement(import_react.Fragment, null, children(_objectSpread2(_objectSpread2({}, props), {}, {
      open
    })));
  });
  Dropzone.displayName = "Dropzone";
  var defaultProps = {
    disabled: false,
    getFilesFromEvent: fromEvent,
    maxSize: Infinity,
    minSize: 0,
    multiple: true,
    maxFiles: 0,
    preventDropOnDocument: true,
    noClick: false,
    noKeyboard: false,
    noDrag: false,
    noDragEventsBubbling: false,
    validator: null,
    useFsAccessApi: true,
    autoFocus: false
  };
  Dropzone.defaultProps = defaultProps;
  Dropzone.propTypes = {
    children: import_prop_types.default.func,
    accept: import_prop_types.default.objectOf(import_prop_types.default.arrayOf(import_prop_types.default.string)),
    multiple: import_prop_types.default.bool,
    preventDropOnDocument: import_prop_types.default.bool,
    noClick: import_prop_types.default.bool,
    noKeyboard: import_prop_types.default.bool,
    noDrag: import_prop_types.default.bool,
    noDragEventsBubbling: import_prop_types.default.bool,
    minSize: import_prop_types.default.number,
    maxSize: import_prop_types.default.number,
    maxFiles: import_prop_types.default.number,
    disabled: import_prop_types.default.bool,
    getFilesFromEvent: import_prop_types.default.func,
    onFileDialogCancel: import_prop_types.default.func,
    onFileDialogOpen: import_prop_types.default.func,
    useFsAccessApi: import_prop_types.default.bool,
    autoFocus: import_prop_types.default.bool,
    onDragEnter: import_prop_types.default.func,
    onDragLeave: import_prop_types.default.func,
    onDragOver: import_prop_types.default.func,
    onDrop: import_prop_types.default.func,
    onDropAccepted: import_prop_types.default.func,
    onDropRejected: import_prop_types.default.func,
    onError: import_prop_types.default.func,
    validator: import_prop_types.default.func
  };
  var initialState = {
    isFocused: false,
    isFileDialogActive: false,
    isDragActive: false,
    isDragAccept: false,
    isDragReject: false,
    acceptedFiles: [],
    fileRejections: []
  };
  function useDropzone() {
    var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var _defaultProps$props = _objectSpread2(_objectSpread2({}, defaultProps), props), accept = _defaultProps$props.accept, disabled = _defaultProps$props.disabled, getFilesFromEvent = _defaultProps$props.getFilesFromEvent, maxSize = _defaultProps$props.maxSize, minSize = _defaultProps$props.minSize, multiple = _defaultProps$props.multiple, maxFiles = _defaultProps$props.maxFiles, onDragEnter = _defaultProps$props.onDragEnter, onDragLeave = _defaultProps$props.onDragLeave, onDragOver = _defaultProps$props.onDragOver, onDrop = _defaultProps$props.onDrop, onDropAccepted = _defaultProps$props.onDropAccepted, onDropRejected = _defaultProps$props.onDropRejected, onFileDialogCancel = _defaultProps$props.onFileDialogCancel, onFileDialogOpen = _defaultProps$props.onFileDialogOpen, useFsAccessApi = _defaultProps$props.useFsAccessApi, autoFocus = _defaultProps$props.autoFocus, preventDropOnDocument = _defaultProps$props.preventDropOnDocument, noClick = _defaultProps$props.noClick, noKeyboard = _defaultProps$props.noKeyboard, noDrag = _defaultProps$props.noDrag, noDragEventsBubbling = _defaultProps$props.noDragEventsBubbling, onError = _defaultProps$props.onError, validator = _defaultProps$props.validator;
    var acceptAttr = (0, import_react.useMemo)(function() {
      return acceptPropAsAcceptAttr(accept);
    }, [accept]);
    var pickerTypes = (0, import_react.useMemo)(function() {
      return pickerOptionsFromAccept(accept);
    }, [accept]);
    var onFileDialogOpenCb = (0, import_react.useMemo)(function() {
      return typeof onFileDialogOpen === "function" ? onFileDialogOpen : noop;
    }, [onFileDialogOpen]);
    var onFileDialogCancelCb = (0, import_react.useMemo)(function() {
      return typeof onFileDialogCancel === "function" ? onFileDialogCancel : noop;
    }, [onFileDialogCancel]);
    var rootRef = (0, import_react.useRef)(null);
    var inputRef = (0, import_react.useRef)(null);
    var _useReducer = (0, import_react.useReducer)(reducer, initialState), _useReducer2 = _slicedToArray2(_useReducer, 2), state = _useReducer2[0], dispatch = _useReducer2[1];
    var isFocused = state.isFocused, isFileDialogActive = state.isFileDialogActive;
    var fsAccessApiWorksRef = (0, import_react.useRef)(typeof window !== "undefined" && window.isSecureContext && useFsAccessApi && canUseFileSystemAccessAPI());
    var onWindowFocus = function onWindowFocus2() {
      if (!fsAccessApiWorksRef.current && isFileDialogActive) {
        setTimeout(function() {
          if (inputRef.current) {
            var files = inputRef.current.files;
            if (!files.length) {
              dispatch({
                type: "closeDialog"
              });
              onFileDialogCancelCb();
            }
          }
        }, 300);
      }
    };
    (0, import_react.useEffect)(function() {
      window.addEventListener("focus", onWindowFocus, false);
      return function() {
        window.removeEventListener("focus", onWindowFocus, false);
      };
    }, [inputRef, isFileDialogActive, onFileDialogCancelCb, fsAccessApiWorksRef]);
    var dragTargetsRef = (0, import_react.useRef)([]);
    var onDocumentDrop = function onDocumentDrop2(event) {
      if (rootRef.current && rootRef.current.contains(event.target)) {
        return;
      }
      event.preventDefault();
      dragTargetsRef.current = [];
    };
    (0, import_react.useEffect)(function() {
      if (preventDropOnDocument) {
        document.addEventListener("dragover", onDocumentDragOver, false);
        document.addEventListener("drop", onDocumentDrop, false);
      }
      return function() {
        if (preventDropOnDocument) {
          document.removeEventListener("dragover", onDocumentDragOver);
          document.removeEventListener("drop", onDocumentDrop);
        }
      };
    }, [rootRef, preventDropOnDocument]);
    (0, import_react.useEffect)(function() {
      if (!disabled && autoFocus && rootRef.current) {
        rootRef.current.focus();
      }
      return function() {
      };
    }, [rootRef, autoFocus, disabled]);
    var onErrCb = (0, import_react.useCallback)(function(e2) {
      if (onError) {
        onError(e2);
      } else {
        console.error(e2);
      }
    }, [onError]);
    var onDragEnterCb = (0, import_react.useCallback)(function(event) {
      event.preventDefault();
      event.persist();
      stopPropagation(event);
      dragTargetsRef.current = [].concat(_toConsumableArray2(dragTargetsRef.current), [event.target]);
      if (isEvtWithFiles(event)) {
        Promise.resolve(getFilesFromEvent(event)).then(function(files) {
          if (isPropagationStopped(event) && !noDragEventsBubbling) {
            return;
          }
          var fileCount = files.length;
          var isDragAccept = fileCount > 0 && allFilesAccepted({
            files,
            accept: acceptAttr,
            minSize,
            maxSize,
            multiple,
            maxFiles,
            validator
          });
          var isDragReject = fileCount > 0 && !isDragAccept;
          dispatch({
            isDragAccept,
            isDragReject,
            isDragActive: true,
            type: "setDraggedFiles"
          });
          if (onDragEnter) {
            onDragEnter(event);
          }
        }).catch(function(e2) {
          return onErrCb(e2);
        });
      }
    }, [getFilesFromEvent, onDragEnter, onErrCb, noDragEventsBubbling, acceptAttr, minSize, maxSize, multiple, maxFiles, validator]);
    var onDragOverCb = (0, import_react.useCallback)(function(event) {
      event.preventDefault();
      event.persist();
      stopPropagation(event);
      var hasFiles = isEvtWithFiles(event);
      if (hasFiles && event.dataTransfer) {
        try {
          event.dataTransfer.dropEffect = "copy";
        } catch (_unused) {
        }
      }
      if (hasFiles && onDragOver) {
        onDragOver(event);
      }
      return false;
    }, [onDragOver, noDragEventsBubbling]);
    var onDragLeaveCb = (0, import_react.useCallback)(function(event) {
      event.preventDefault();
      event.persist();
      stopPropagation(event);
      var targets = dragTargetsRef.current.filter(function(target) {
        return rootRef.current && rootRef.current.contains(target);
      });
      var targetIdx = targets.indexOf(event.target);
      if (targetIdx !== -1) {
        targets.splice(targetIdx, 1);
      }
      dragTargetsRef.current = targets;
      if (targets.length > 0) {
        return;
      }
      dispatch({
        type: "setDraggedFiles",
        isDragActive: false,
        isDragAccept: false,
        isDragReject: false
      });
      if (isEvtWithFiles(event) && onDragLeave) {
        onDragLeave(event);
      }
    }, [rootRef, onDragLeave, noDragEventsBubbling]);
    var setFiles = (0, import_react.useCallback)(function(files, event) {
      var acceptedFiles = [];
      var fileRejections = [];
      files.forEach(function(file) {
        var _fileAccepted = fileAccepted(file, acceptAttr), _fileAccepted2 = _slicedToArray2(_fileAccepted, 2), accepted = _fileAccepted2[0], acceptError = _fileAccepted2[1];
        var _fileMatchSize = fileMatchSize(file, minSize, maxSize), _fileMatchSize2 = _slicedToArray2(_fileMatchSize, 2), sizeMatch = _fileMatchSize2[0], sizeError = _fileMatchSize2[1];
        var customErrors = validator ? validator(file) : null;
        if (accepted && sizeMatch && !customErrors) {
          acceptedFiles.push(file);
        } else {
          var errors = [acceptError, sizeError];
          if (customErrors) {
            errors = errors.concat(customErrors);
          }
          fileRejections.push({
            file,
            errors: errors.filter(function(e2) {
              return e2;
            })
          });
        }
      });
      if (!multiple && acceptedFiles.length > 1 || multiple && maxFiles >= 1 && acceptedFiles.length > maxFiles) {
        acceptedFiles.forEach(function(file) {
          fileRejections.push({
            file,
            errors: [TOO_MANY_FILES_REJECTION]
          });
        });
        acceptedFiles.splice(0);
      }
      dispatch({
        acceptedFiles,
        fileRejections,
        type: "setFiles"
      });
      if (onDrop) {
        onDrop(acceptedFiles, fileRejections, event);
      }
      if (fileRejections.length > 0 && onDropRejected) {
        onDropRejected(fileRejections, event);
      }
      if (acceptedFiles.length > 0 && onDropAccepted) {
        onDropAccepted(acceptedFiles, event);
      }
    }, [dispatch, multiple, acceptAttr, minSize, maxSize, maxFiles, onDrop, onDropAccepted, onDropRejected, validator]);
    var onDropCb = (0, import_react.useCallback)(function(event) {
      event.preventDefault();
      event.persist();
      stopPropagation(event);
      dragTargetsRef.current = [];
      if (isEvtWithFiles(event)) {
        Promise.resolve(getFilesFromEvent(event)).then(function(files) {
          if (isPropagationStopped(event) && !noDragEventsBubbling) {
            return;
          }
          setFiles(files, event);
        }).catch(function(e2) {
          return onErrCb(e2);
        });
      }
      dispatch({
        type: "reset"
      });
    }, [getFilesFromEvent, setFiles, onErrCb, noDragEventsBubbling]);
    var openFileDialog = (0, import_react.useCallback)(function() {
      if (fsAccessApiWorksRef.current) {
        dispatch({
          type: "openDialog"
        });
        onFileDialogOpenCb();
        var opts = {
          multiple,
          types: pickerTypes
        };
        window.showOpenFilePicker(opts).then(function(handles) {
          return getFilesFromEvent(handles);
        }).then(function(files) {
          setFiles(files, null);
          dispatch({
            type: "closeDialog"
          });
        }).catch(function(e2) {
          if (isAbort(e2)) {
            onFileDialogCancelCb(e2);
            dispatch({
              type: "closeDialog"
            });
          } else if (isSecurityError(e2)) {
            fsAccessApiWorksRef.current = false;
            if (inputRef.current) {
              inputRef.current.value = null;
              inputRef.current.click();
            } else {
              onErrCb(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided."));
            }
          } else {
            onErrCb(e2);
          }
        });
        return;
      }
      if (inputRef.current) {
        dispatch({
          type: "openDialog"
        });
        onFileDialogOpenCb();
        inputRef.current.value = null;
        inputRef.current.click();
      }
    }, [dispatch, onFileDialogOpenCb, onFileDialogCancelCb, useFsAccessApi, setFiles, onErrCb, pickerTypes, multiple]);
    var onKeyDownCb = (0, import_react.useCallback)(function(event) {
      if (!rootRef.current || !rootRef.current.isEqualNode(event.target)) {
        return;
      }
      if (event.key === " " || event.key === "Enter" || event.keyCode === 32 || event.keyCode === 13) {
        event.preventDefault();
        openFileDialog();
      }
    }, [rootRef, openFileDialog]);
    var onFocusCb = (0, import_react.useCallback)(function() {
      dispatch({
        type: "focus"
      });
    }, []);
    var onBlurCb = (0, import_react.useCallback)(function() {
      dispatch({
        type: "blur"
      });
    }, []);
    var onClickCb = (0, import_react.useCallback)(function() {
      if (noClick) {
        return;
      }
      if (isIeOrEdge()) {
        setTimeout(openFileDialog, 0);
      } else {
        openFileDialog();
      }
    }, [noClick, openFileDialog]);
    var composeHandler = function composeHandler2(fn3) {
      return disabled ? null : fn3;
    };
    var composeKeyboardHandler = function composeKeyboardHandler2(fn3) {
      return noKeyboard ? null : composeHandler(fn3);
    };
    var composeDragHandler = function composeDragHandler2(fn3) {
      return noDrag ? null : composeHandler(fn3);
    };
    var stopPropagation = function stopPropagation2(event) {
      if (noDragEventsBubbling) {
        event.stopPropagation();
      }
    };
    var getRootProps = (0, import_react.useMemo)(function() {
      return function() {
        var _ref2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, _ref2$refKey = _ref2.refKey, refKey = _ref2$refKey === void 0 ? "ref" : _ref2$refKey, role = _ref2.role, onKeyDown = _ref2.onKeyDown, onFocus = _ref2.onFocus, onBlur = _ref2.onBlur, onClick = _ref2.onClick, onDragEnter2 = _ref2.onDragEnter, onDragOver2 = _ref2.onDragOver, onDragLeave2 = _ref2.onDragLeave, onDrop2 = _ref2.onDrop, rest = _objectWithoutProperties(_ref2, _excluded3);
        return _objectSpread2(_objectSpread2(_defineProperty2({
          onKeyDown: composeKeyboardHandler(composeEventHandlers(onKeyDown, onKeyDownCb)),
          onFocus: composeKeyboardHandler(composeEventHandlers(onFocus, onFocusCb)),
          onBlur: composeKeyboardHandler(composeEventHandlers(onBlur, onBlurCb)),
          onClick: composeHandler(composeEventHandlers(onClick, onClickCb)),
          onDragEnter: composeDragHandler(composeEventHandlers(onDragEnter2, onDragEnterCb)),
          onDragOver: composeDragHandler(composeEventHandlers(onDragOver2, onDragOverCb)),
          onDragLeave: composeDragHandler(composeEventHandlers(onDragLeave2, onDragLeaveCb)),
          onDrop: composeDragHandler(composeEventHandlers(onDrop2, onDropCb)),
          role: typeof role === "string" && role !== "" ? role : "presentation"
        }, refKey, rootRef), !disabled && !noKeyboard ? {
          tabIndex: 0
        } : {}), rest);
      };
    }, [rootRef, onKeyDownCb, onFocusCb, onBlurCb, onClickCb, onDragEnterCb, onDragOverCb, onDragLeaveCb, onDropCb, noKeyboard, noDrag, disabled]);
    var onInputElementClick = (0, import_react.useCallback)(function(event) {
      event.stopPropagation();
    }, []);
    var getInputProps = (0, import_react.useMemo)(function() {
      return function() {
        var _ref3 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, _ref3$refKey = _ref3.refKey, refKey = _ref3$refKey === void 0 ? "ref" : _ref3$refKey, onChange = _ref3.onChange, onClick = _ref3.onClick, rest = _objectWithoutProperties(_ref3, _excluded4);
        var inputProps = _defineProperty2({
          accept: acceptAttr,
          multiple,
          type: "file",
          style: {
            display: "none"
          },
          onChange: composeHandler(composeEventHandlers(onChange, onDropCb)),
          onClick: composeHandler(composeEventHandlers(onClick, onInputElementClick)),
          tabIndex: -1
        }, refKey, inputRef);
        return _objectSpread2(_objectSpread2({}, inputProps), rest);
      };
    }, [inputRef, accept, multiple, onDropCb, disabled]);
    return _objectSpread2(_objectSpread2({}, state), {}, {
      isFocused: isFocused && !disabled,
      getRootProps,
      getInputProps,
      rootRef,
      inputRef,
      open: composeHandler(openFileDialog)
    });
  }
  function reducer(state, action) {
    switch (action.type) {
      case "focus":
        return _objectSpread2(_objectSpread2({}, state), {}, {
          isFocused: true
        });
      case "blur":
        return _objectSpread2(_objectSpread2({}, state), {}, {
          isFocused: false
        });
      case "openDialog":
        return _objectSpread2(_objectSpread2({}, initialState), {}, {
          isFileDialogActive: true
        });
      case "closeDialog":
        return _objectSpread2(_objectSpread2({}, state), {}, {
          isFileDialogActive: false
        });
      case "setDraggedFiles":
        return _objectSpread2(_objectSpread2({}, state), {}, {
          isDragActive: action.isDragActive,
          isDragAccept: action.isDragAccept,
          isDragReject: action.isDragReject
        });
      case "setFiles":
        return _objectSpread2(_objectSpread2({}, state), {}, {
          acceptedFiles: action.acceptedFiles,
          fileRejections: action.fileRejections
        });
      case "reset":
        return _objectSpread2({}, initialState);
      default:
        return state;
    }
  }
  function noop() {
  }

  // ../../node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
  function _setPrototypeOf(o2, p2) {
    _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf2(o3, p3) {
      o3.__proto__ = p3;
      return o3;
    };
    return _setPrototypeOf(o2, p2);
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
        _this.listeners = _this.listeners.filter(function(x2) {
          return x2 !== callback;
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
    _extends = Object.assign ? Object.assign.bind() : function(target) {
      for (var i2 = 1; i2 < arguments.length; i2++) {
        var source = arguments[i2];
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
  function noop2() {
    return void 0;
  }
  function functionalUpdate(updater, input) {
    return typeof updater === "function" ? updater(input) : updater;
  }
  function isValidTimeout(value) {
    return typeof value === "number" && value >= 0 && value !== Infinity;
  }
  function ensureQueryKeyArray(value) {
    return Array.isArray(value) ? value : [value];
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
  function parseFilterArgs(arg1, arg2, arg3) {
    return isQueryKey(arg1) ? [_extends({}, arg2, {
      queryKey: arg1
    }), arg3] : [arg1 || {}, arg2];
  }
  function mapQueryStatusFilter(active, inactive) {
    if (active === true && inactive === true || active == null && inactive == null) {
      return "all";
    } else if (active === false && inactive === false) {
      return "none";
    } else {
      var isActive = active != null ? active : !inactive;
      return isActive ? "active" : "inactive";
    }
  }
  function matchQuery(filters, query) {
    var active = filters.active, exact = filters.exact, fetching = filters.fetching, inactive = filters.inactive, predicate = filters.predicate, queryKey = filters.queryKey, stale = filters.stale;
    if (isQueryKey(queryKey)) {
      if (exact) {
        if (query.queryHash !== hashQueryKeyByOptions(queryKey, query.options)) {
          return false;
        }
      } else if (!partialMatchKey(query.queryKey, queryKey)) {
        return false;
      }
    }
    var queryStatusFilter = mapQueryStatusFilter(active, inactive);
    if (queryStatusFilter === "none") {
      return false;
    } else if (queryStatusFilter !== "all") {
      var isActive = query.isActive();
      if (queryStatusFilter === "active" && !isActive) {
        return false;
      }
      if (queryStatusFilter === "inactive" && isActive) {
        return false;
      }
    }
    if (typeof stale === "boolean" && query.isStale() !== stale) {
      return false;
    }
    if (typeof fetching === "boolean" && query.isFetching() !== fetching) {
      return false;
    }
    if (predicate && !predicate(query)) {
      return false;
    }
    return true;
  }
  function matchMutation(filters, mutation) {
    var exact = filters.exact, fetching = filters.fetching, predicate = filters.predicate, mutationKey = filters.mutationKey;
    if (isQueryKey(mutationKey)) {
      if (!mutation.options.mutationKey) {
        return false;
      }
      if (exact) {
        if (hashQueryKey(mutation.options.mutationKey) !== hashQueryKey(mutationKey)) {
          return false;
        }
      } else if (!partialMatchKey(mutation.options.mutationKey, mutationKey)) {
        return false;
      }
    }
    if (typeof fetching === "boolean" && mutation.state.status === "loading" !== fetching) {
      return false;
    }
    if (predicate && !predicate(mutation)) {
      return false;
    }
    return true;
  }
  function hashQueryKeyByOptions(queryKey, options) {
    var hashFn = (options == null ? void 0 : options.queryKeyHashFn) || hashQueryKey;
    return hashFn(queryKey);
  }
  function hashQueryKey(queryKey) {
    var asArray = ensureQueryKeyArray(queryKey);
    return stableValueHash(asArray);
  }
  function stableValueHash(value) {
    return JSON.stringify(value, function(_2, val) {
      return isPlainObject(val) ? Object.keys(val).sort().reduce(function(result, key) {
        result[key] = val[key];
        return result;
      }, {}) : val;
    });
  }
  function partialMatchKey(a2, b2) {
    return partialDeepEqual(ensureQueryKeyArray(a2), ensureQueryKeyArray(b2));
  }
  function partialDeepEqual(a2, b2) {
    if (a2 === b2) {
      return true;
    }
    if (typeof a2 !== typeof b2) {
      return false;
    }
    if (a2 && b2 && typeof a2 === "object" && typeof b2 === "object") {
      return !Object.keys(b2).some(function(key) {
        return !partialDeepEqual(a2[key], b2[key]);
      });
    }
    return false;
  }
  function replaceEqualDeep(a2, b2) {
    if (a2 === b2) {
      return a2;
    }
    var array = Array.isArray(a2) && Array.isArray(b2);
    if (array || isPlainObject(a2) && isPlainObject(b2)) {
      var aSize = array ? a2.length : Object.keys(a2).length;
      var bItems = array ? b2 : Object.keys(b2);
      var bSize = bItems.length;
      var copy = array ? [] : {};
      var equalItems = 0;
      for (var i2 = 0; i2 < bSize; i2++) {
        var key = array ? i2 : bItems[i2];
        copy[key] = replaceEqualDeep(a2[key], b2[key]);
        if (copy[key] === a2[key]) {
          equalItems++;
        }
      }
      return aSize === bSize && equalItems === aSize ? a2 : copy;
    }
    return b2;
  }
  function shallowEqualObjects(a2, b2) {
    if (a2 && !b2 || b2 && !a2) {
      return false;
    }
    for (var key in a2) {
      if (a2[key] !== b2[key]) {
        return false;
      }
    }
    return true;
  }
  function isPlainObject(o2) {
    if (!hasObjectPrototype(o2)) {
      return false;
    }
    var ctor = o2.constructor;
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
  function hasObjectPrototype(o2) {
    return Object.prototype.toString.call(o2) === "[object Object]";
  }
  function isQueryKey(value) {
    return typeof value === "string" || Array.isArray(value);
  }
  function sleep(timeout) {
    return new Promise(function(resolve) {
      setTimeout(resolve, timeout);
    });
  }
  function scheduleMicrotask(callback) {
    Promise.resolve().then(callback).catch(function(error) {
      return setTimeout(function() {
        throw error;
      });
    });
  }
  function getAbortController() {
    if (typeof AbortController === "function") {
      return new AbortController();
    }
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

  // ../../node_modules/react-query/es/core/onlineManager.js
  var OnlineManager = /* @__PURE__ */ function(_Subscribable) {
    _inheritsLoose(OnlineManager2, _Subscribable);
    function OnlineManager2() {
      var _this;
      _this = _Subscribable.call(this) || this;
      _this.setup = function(onOnline) {
        var _window;
        if (!isServer && ((_window = window) == null ? void 0 : _window.addEventListener)) {
          var listener = function listener2() {
            return onOnline();
          };
          window.addEventListener("online", listener, false);
          window.addEventListener("offline", listener, false);
          return function() {
            window.removeEventListener("online", listener);
            window.removeEventListener("offline", listener);
          };
        }
      };
      return _this;
    }
    var _proto = OnlineManager2.prototype;
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
      this.cleanup = setup(function(online) {
        if (typeof online === "boolean") {
          _this2.setOnline(online);
        } else {
          _this2.onOnline();
        }
      });
    };
    _proto.setOnline = function setOnline(online) {
      this.online = online;
      if (online) {
        this.onOnline();
      }
    };
    _proto.onOnline = function onOnline() {
      this.listeners.forEach(function(listener) {
        listener();
      });
    };
    _proto.isOnline = function isOnline() {
      if (typeof this.online === "boolean") {
        return this.online;
      }
      if (typeof navigator === "undefined" || typeof navigator.onLine === "undefined") {
        return true;
      }
      return navigator.onLine;
    };
    return OnlineManager2;
  }(Subscribable);
  var onlineManager = new OnlineManager();

  // ../../node_modules/react-query/es/core/retryer.js
  function defaultRetryDelay(failureCount) {
    return Math.min(1e3 * Math.pow(2, failureCount), 3e4);
  }
  function isCancelable(value) {
    return typeof (value == null ? void 0 : value.cancel) === "function";
  }
  var CancelledError = function CancelledError2(options) {
    this.revert = options == null ? void 0 : options.revert;
    this.silent = options == null ? void 0 : options.silent;
  };
  function isCancelledError(value) {
    return value instanceof CancelledError;
  }
  var Retryer = function Retryer2(config) {
    var _this = this;
    var cancelRetry = false;
    var cancelFn;
    var continueFn;
    var promiseResolve;
    var promiseReject;
    this.abort = config.abort;
    this.cancel = function(cancelOptions) {
      return cancelFn == null ? void 0 : cancelFn(cancelOptions);
    };
    this.cancelRetry = function() {
      cancelRetry = true;
    };
    this.continueRetry = function() {
      cancelRetry = false;
    };
    this.continue = function() {
      return continueFn == null ? void 0 : continueFn();
    };
    this.failureCount = 0;
    this.isPaused = false;
    this.isResolved = false;
    this.isTransportCancelable = false;
    this.promise = new Promise(function(outerResolve, outerReject) {
      promiseResolve = outerResolve;
      promiseReject = outerReject;
    });
    var resolve = function resolve2(value) {
      if (!_this.isResolved) {
        _this.isResolved = true;
        config.onSuccess == null ? void 0 : config.onSuccess(value);
        continueFn == null ? void 0 : continueFn();
        promiseResolve(value);
      }
    };
    var reject = function reject2(value) {
      if (!_this.isResolved) {
        _this.isResolved = true;
        config.onError == null ? void 0 : config.onError(value);
        continueFn == null ? void 0 : continueFn();
        promiseReject(value);
      }
    };
    var pause = function pause2() {
      return new Promise(function(continueResolve) {
        continueFn = continueResolve;
        _this.isPaused = true;
        config.onPause == null ? void 0 : config.onPause();
      }).then(function() {
        continueFn = void 0;
        _this.isPaused = false;
        config.onContinue == null ? void 0 : config.onContinue();
      });
    };
    var run = function run2() {
      if (_this.isResolved) {
        return;
      }
      var promiseOrValue;
      try {
        promiseOrValue = config.fn();
      } catch (error) {
        promiseOrValue = Promise.reject(error);
      }
      cancelFn = function cancelFn2(cancelOptions) {
        if (!_this.isResolved) {
          reject(new CancelledError(cancelOptions));
          _this.abort == null ? void 0 : _this.abort();
          if (isCancelable(promiseOrValue)) {
            try {
              promiseOrValue.cancel();
            } catch (_unused) {
            }
          }
        }
      };
      _this.isTransportCancelable = isCancelable(promiseOrValue);
      Promise.resolve(promiseOrValue).then(resolve).catch(function(error) {
        var _config$retry, _config$retryDelay;
        if (_this.isResolved) {
          return;
        }
        var retry = (_config$retry = config.retry) != null ? _config$retry : 3;
        var retryDelay = (_config$retryDelay = config.retryDelay) != null ? _config$retryDelay : defaultRetryDelay;
        var delay = typeof retryDelay === "function" ? retryDelay(_this.failureCount, error) : retryDelay;
        var shouldRetry = retry === true || typeof retry === "number" && _this.failureCount < retry || typeof retry === "function" && retry(_this.failureCount, error);
        if (cancelRetry || !shouldRetry) {
          reject(error);
          return;
        }
        _this.failureCount++;
        config.onFail == null ? void 0 : config.onFail(_this.failureCount, error);
        sleep(delay).then(function() {
          if (!focusManager.isFocused() || !onlineManager.isOnline()) {
            return pause();
          }
        }).then(function() {
          if (cancelRetry) {
            reject(error);
          } else {
            run2();
          }
        });
      });
    };
    run();
  };

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
    _proto.setNotifyFunction = function setNotifyFunction(fn3) {
      this.notifyFn = fn3;
    };
    _proto.setBatchNotifyFunction = function setBatchNotifyFunction(fn3) {
      this.batchNotifyFn = fn3;
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

  // ../../node_modules/react-query/es/core/query.js
  var Query = /* @__PURE__ */ function() {
    function Query2(config) {
      this.abortSignalConsumed = false;
      this.hadObservers = false;
      this.defaultOptions = config.defaultOptions;
      this.setOptions(config.options);
      this.observers = [];
      this.cache = config.cache;
      this.queryKey = config.queryKey;
      this.queryHash = config.queryHash;
      this.initialState = config.state || this.getDefaultState(this.options);
      this.state = this.initialState;
      this.meta = config.meta;
      this.scheduleGc();
    }
    var _proto = Query2.prototype;
    _proto.setOptions = function setOptions(options) {
      var _this$options$cacheTi;
      this.options = _extends({}, this.defaultOptions, options);
      this.meta = options == null ? void 0 : options.meta;
      this.cacheTime = Math.max(this.cacheTime || 0, (_this$options$cacheTi = this.options.cacheTime) != null ? _this$options$cacheTi : 5 * 60 * 1e3);
    };
    _proto.setDefaultOptions = function setDefaultOptions(options) {
      this.defaultOptions = options;
    };
    _proto.scheduleGc = function scheduleGc() {
      var _this = this;
      this.clearGcTimeout();
      if (isValidTimeout(this.cacheTime)) {
        this.gcTimeout = setTimeout(function() {
          _this.optionalRemove();
        }, this.cacheTime);
      }
    };
    _proto.clearGcTimeout = function clearGcTimeout() {
      if (this.gcTimeout) {
        clearTimeout(this.gcTimeout);
        this.gcTimeout = void 0;
      }
    };
    _proto.optionalRemove = function optionalRemove() {
      if (!this.observers.length) {
        if (this.state.isFetching) {
          if (this.hadObservers) {
            this.scheduleGc();
          }
        } else {
          this.cache.remove(this);
        }
      }
    };
    _proto.setData = function setData(updater, options) {
      var _this$options$isDataE, _this$options;
      var prevData = this.state.data;
      var data = functionalUpdate(updater, prevData);
      if ((_this$options$isDataE = (_this$options = this.options).isDataEqual) == null ? void 0 : _this$options$isDataE.call(_this$options, prevData, data)) {
        data = prevData;
      } else if (this.options.structuralSharing !== false) {
        data = replaceEqualDeep(prevData, data);
      }
      this.dispatch({
        data,
        type: "success",
        dataUpdatedAt: options == null ? void 0 : options.updatedAt
      });
      return data;
    };
    _proto.setState = function setState(state, setStateOptions) {
      this.dispatch({
        type: "setState",
        state,
        setStateOptions
      });
    };
    _proto.cancel = function cancel(options) {
      var _this$retryer;
      var promise = this.promise;
      (_this$retryer = this.retryer) == null ? void 0 : _this$retryer.cancel(options);
      return promise ? promise.then(noop2).catch(noop2) : Promise.resolve();
    };
    _proto.destroy = function destroy() {
      this.clearGcTimeout();
      this.cancel({
        silent: true
      });
    };
    _proto.reset = function reset() {
      this.destroy();
      this.setState(this.initialState);
    };
    _proto.isActive = function isActive() {
      return this.observers.some(function(observer) {
        return observer.options.enabled !== false;
      });
    };
    _proto.isFetching = function isFetching() {
      return this.state.isFetching;
    };
    _proto.isStale = function isStale2() {
      return this.state.isInvalidated || !this.state.dataUpdatedAt || this.observers.some(function(observer) {
        return observer.getCurrentResult().isStale;
      });
    };
    _proto.isStaleByTime = function isStaleByTime(staleTime) {
      if (staleTime === void 0) {
        staleTime = 0;
      }
      return this.state.isInvalidated || !this.state.dataUpdatedAt || !timeUntilStale(this.state.dataUpdatedAt, staleTime);
    };
    _proto.onFocus = function onFocus() {
      var _this$retryer2;
      var observer = this.observers.find(function(x2) {
        return x2.shouldFetchOnWindowFocus();
      });
      if (observer) {
        observer.refetch();
      }
      (_this$retryer2 = this.retryer) == null ? void 0 : _this$retryer2.continue();
    };
    _proto.onOnline = function onOnline() {
      var _this$retryer3;
      var observer = this.observers.find(function(x2) {
        return x2.shouldFetchOnReconnect();
      });
      if (observer) {
        observer.refetch();
      }
      (_this$retryer3 = this.retryer) == null ? void 0 : _this$retryer3.continue();
    };
    _proto.addObserver = function addObserver(observer) {
      if (this.observers.indexOf(observer) === -1) {
        this.observers.push(observer);
        this.hadObservers = true;
        this.clearGcTimeout();
        this.cache.notify({
          type: "observerAdded",
          query: this,
          observer
        });
      }
    };
    _proto.removeObserver = function removeObserver(observer) {
      if (this.observers.indexOf(observer) !== -1) {
        this.observers = this.observers.filter(function(x2) {
          return x2 !== observer;
        });
        if (!this.observers.length) {
          if (this.retryer) {
            if (this.retryer.isTransportCancelable || this.abortSignalConsumed) {
              this.retryer.cancel({
                revert: true
              });
            } else {
              this.retryer.cancelRetry();
            }
          }
          if (this.cacheTime) {
            this.scheduleGc();
          } else {
            this.cache.remove(this);
          }
        }
        this.cache.notify({
          type: "observerRemoved",
          query: this,
          observer
        });
      }
    };
    _proto.getObserversCount = function getObserversCount() {
      return this.observers.length;
    };
    _proto.invalidate = function invalidate() {
      if (!this.state.isInvalidated) {
        this.dispatch({
          type: "invalidate"
        });
      }
    };
    _proto.fetch = function fetch(options, fetchOptions) {
      var _this2 = this, _this$options$behavio, _context$fetchOptions, _abortController$abor;
      if (this.state.isFetching) {
        if (this.state.dataUpdatedAt && (fetchOptions == null ? void 0 : fetchOptions.cancelRefetch)) {
          this.cancel({
            silent: true
          });
        } else if (this.promise) {
          var _this$retryer4;
          (_this$retryer4 = this.retryer) == null ? void 0 : _this$retryer4.continueRetry();
          return this.promise;
        }
      }
      if (options) {
        this.setOptions(options);
      }
      if (!this.options.queryFn) {
        var observer = this.observers.find(function(x2) {
          return x2.options.queryFn;
        });
        if (observer) {
          this.setOptions(observer.options);
        }
      }
      var queryKey = ensureQueryKeyArray(this.queryKey);
      var abortController = getAbortController();
      var queryFnContext = {
        queryKey,
        pageParam: void 0,
        meta: this.meta
      };
      Object.defineProperty(queryFnContext, "signal", {
        enumerable: true,
        get: function get() {
          if (abortController) {
            _this2.abortSignalConsumed = true;
            return abortController.signal;
          }
          return void 0;
        }
      });
      var fetchFn = function fetchFn2() {
        if (!_this2.options.queryFn) {
          return Promise.reject("Missing queryFn");
        }
        _this2.abortSignalConsumed = false;
        return _this2.options.queryFn(queryFnContext);
      };
      var context = {
        fetchOptions,
        options: this.options,
        queryKey,
        state: this.state,
        fetchFn,
        meta: this.meta
      };
      if ((_this$options$behavio = this.options.behavior) == null ? void 0 : _this$options$behavio.onFetch) {
        var _this$options$behavio2;
        (_this$options$behavio2 = this.options.behavior) == null ? void 0 : _this$options$behavio2.onFetch(context);
      }
      this.revertState = this.state;
      if (!this.state.isFetching || this.state.fetchMeta !== ((_context$fetchOptions = context.fetchOptions) == null ? void 0 : _context$fetchOptions.meta)) {
        var _context$fetchOptions2;
        this.dispatch({
          type: "fetch",
          meta: (_context$fetchOptions2 = context.fetchOptions) == null ? void 0 : _context$fetchOptions2.meta
        });
      }
      this.retryer = new Retryer({
        fn: context.fetchFn,
        abort: abortController == null ? void 0 : (_abortController$abor = abortController.abort) == null ? void 0 : _abortController$abor.bind(abortController),
        onSuccess: function onSuccess(data) {
          _this2.setData(data);
          _this2.cache.config.onSuccess == null ? void 0 : _this2.cache.config.onSuccess(data, _this2);
          if (_this2.cacheTime === 0) {
            _this2.optionalRemove();
          }
        },
        onError: function onError(error) {
          if (!(isCancelledError(error) && error.silent)) {
            _this2.dispatch({
              type: "error",
              error
            });
          }
          if (!isCancelledError(error)) {
            _this2.cache.config.onError == null ? void 0 : _this2.cache.config.onError(error, _this2);
            getLogger().error(error);
          }
          if (_this2.cacheTime === 0) {
            _this2.optionalRemove();
          }
        },
        onFail: function onFail() {
          _this2.dispatch({
            type: "failed"
          });
        },
        onPause: function onPause() {
          _this2.dispatch({
            type: "pause"
          });
        },
        onContinue: function onContinue() {
          _this2.dispatch({
            type: "continue"
          });
        },
        retry: context.options.retry,
        retryDelay: context.options.retryDelay
      });
      this.promise = this.retryer.promise;
      return this.promise;
    };
    _proto.dispatch = function dispatch(action) {
      var _this3 = this;
      this.state = this.reducer(this.state, action);
      notifyManager.batch(function() {
        _this3.observers.forEach(function(observer) {
          observer.onQueryUpdate(action);
        });
        _this3.cache.notify({
          query: _this3,
          type: "queryUpdated",
          action
        });
      });
    };
    _proto.getDefaultState = function getDefaultState2(options) {
      var data = typeof options.initialData === "function" ? options.initialData() : options.initialData;
      var hasInitialData = typeof options.initialData !== "undefined";
      var initialDataUpdatedAt = hasInitialData ? typeof options.initialDataUpdatedAt === "function" ? options.initialDataUpdatedAt() : options.initialDataUpdatedAt : 0;
      var hasData = typeof data !== "undefined";
      return {
        data,
        dataUpdateCount: 0,
        dataUpdatedAt: hasData ? initialDataUpdatedAt != null ? initialDataUpdatedAt : Date.now() : 0,
        error: null,
        errorUpdateCount: 0,
        errorUpdatedAt: 0,
        fetchFailureCount: 0,
        fetchMeta: null,
        isFetching: false,
        isInvalidated: false,
        isPaused: false,
        status: hasData ? "success" : "idle"
      };
    };
    _proto.reducer = function reducer3(state, action) {
      var _action$meta, _action$dataUpdatedAt;
      switch (action.type) {
        case "failed":
          return _extends({}, state, {
            fetchFailureCount: state.fetchFailureCount + 1
          });
        case "pause":
          return _extends({}, state, {
            isPaused: true
          });
        case "continue":
          return _extends({}, state, {
            isPaused: false
          });
        case "fetch":
          return _extends({}, state, {
            fetchFailureCount: 0,
            fetchMeta: (_action$meta = action.meta) != null ? _action$meta : null,
            isFetching: true,
            isPaused: false
          }, !state.dataUpdatedAt && {
            error: null,
            status: "loading"
          });
        case "success":
          return _extends({}, state, {
            data: action.data,
            dataUpdateCount: state.dataUpdateCount + 1,
            dataUpdatedAt: (_action$dataUpdatedAt = action.dataUpdatedAt) != null ? _action$dataUpdatedAt : Date.now(),
            error: null,
            fetchFailureCount: 0,
            isFetching: false,
            isInvalidated: false,
            isPaused: false,
            status: "success"
          });
        case "error":
          var error = action.error;
          if (isCancelledError(error) && error.revert && this.revertState) {
            return _extends({}, this.revertState);
          }
          return _extends({}, state, {
            error,
            errorUpdateCount: state.errorUpdateCount + 1,
            errorUpdatedAt: Date.now(),
            fetchFailureCount: state.fetchFailureCount + 1,
            isFetching: false,
            isPaused: false,
            status: "error"
          });
        case "invalidate":
          return _extends({}, state, {
            isInvalidated: true
          });
        case "setState":
          return _extends({}, state, action.state);
        default:
          return state;
      }
    };
    return Query2;
  }();

  // ../../node_modules/react-query/es/core/queryCache.js
  var QueryCache = /* @__PURE__ */ function(_Subscribable) {
    _inheritsLoose(QueryCache2, _Subscribable);
    function QueryCache2(config) {
      var _this;
      _this = _Subscribable.call(this) || this;
      _this.config = config || {};
      _this.queries = [];
      _this.queriesMap = {};
      return _this;
    }
    var _proto = QueryCache2.prototype;
    _proto.build = function build(client, options, state) {
      var _options$queryHash;
      var queryKey = options.queryKey;
      var queryHash = (_options$queryHash = options.queryHash) != null ? _options$queryHash : hashQueryKeyByOptions(queryKey, options);
      var query = this.get(queryHash);
      if (!query) {
        query = new Query({
          cache: this,
          queryKey,
          queryHash,
          options: client.defaultQueryOptions(options),
          state,
          defaultOptions: client.getQueryDefaults(queryKey),
          meta: options.meta
        });
        this.add(query);
      }
      return query;
    };
    _proto.add = function add(query) {
      if (!this.queriesMap[query.queryHash]) {
        this.queriesMap[query.queryHash] = query;
        this.queries.push(query);
        this.notify({
          type: "queryAdded",
          query
        });
      }
    };
    _proto.remove = function remove(query) {
      var queryInMap = this.queriesMap[query.queryHash];
      if (queryInMap) {
        query.destroy();
        this.queries = this.queries.filter(function(x2) {
          return x2 !== query;
        });
        if (queryInMap === query) {
          delete this.queriesMap[query.queryHash];
        }
        this.notify({
          type: "queryRemoved",
          query
        });
      }
    };
    _proto.clear = function clear() {
      var _this2 = this;
      notifyManager.batch(function() {
        _this2.queries.forEach(function(query) {
          _this2.remove(query);
        });
      });
    };
    _proto.get = function get(queryHash) {
      return this.queriesMap[queryHash];
    };
    _proto.getAll = function getAll() {
      return this.queries;
    };
    _proto.find = function find(arg1, arg2) {
      var _parseFilterArgs = parseFilterArgs(arg1, arg2), filters = _parseFilterArgs[0];
      if (typeof filters.exact === "undefined") {
        filters.exact = true;
      }
      return this.queries.find(function(query) {
        return matchQuery(filters, query);
      });
    };
    _proto.findAll = function findAll(arg1, arg2) {
      var _parseFilterArgs2 = parseFilterArgs(arg1, arg2), filters = _parseFilterArgs2[0];
      return Object.keys(filters).length > 0 ? this.queries.filter(function(query) {
        return matchQuery(filters, query);
      }) : this.queries;
    };
    _proto.notify = function notify(event) {
      var _this3 = this;
      notifyManager.batch(function() {
        _this3.listeners.forEach(function(listener) {
          listener(event);
        });
      });
    };
    _proto.onFocus = function onFocus() {
      var _this4 = this;
      notifyManager.batch(function() {
        _this4.queries.forEach(function(query) {
          query.onFocus();
        });
      });
    };
    _proto.onOnline = function onOnline() {
      var _this5 = this;
      notifyManager.batch(function() {
        _this5.queries.forEach(function(query) {
          query.onOnline();
        });
      });
    };
    return QueryCache2;
  }(Subscribable);

  // ../../node_modules/react-query/es/core/mutation.js
  var Mutation = /* @__PURE__ */ function() {
    function Mutation2(config) {
      this.options = _extends({}, config.defaultOptions, config.options);
      this.mutationId = config.mutationId;
      this.mutationCache = config.mutationCache;
      this.observers = [];
      this.state = config.state || getDefaultState();
      this.meta = config.meta;
    }
    var _proto = Mutation2.prototype;
    _proto.setState = function setState(state) {
      this.dispatch({
        type: "setState",
        state
      });
    };
    _proto.addObserver = function addObserver(observer) {
      if (this.observers.indexOf(observer) === -1) {
        this.observers.push(observer);
      }
    };
    _proto.removeObserver = function removeObserver(observer) {
      this.observers = this.observers.filter(function(x2) {
        return x2 !== observer;
      });
    };
    _proto.cancel = function cancel() {
      if (this.retryer) {
        this.retryer.cancel();
        return this.retryer.promise.then(noop2).catch(noop2);
      }
      return Promise.resolve();
    };
    _proto.continue = function _continue() {
      if (this.retryer) {
        this.retryer.continue();
        return this.retryer.promise;
      }
      return this.execute();
    };
    _proto.execute = function execute() {
      var _this = this;
      var data;
      var restored = this.state.status === "loading";
      var promise = Promise.resolve();
      if (!restored) {
        this.dispatch({
          type: "loading",
          variables: this.options.variables
        });
        promise = promise.then(function() {
          _this.mutationCache.config.onMutate == null ? void 0 : _this.mutationCache.config.onMutate(_this.state.variables, _this);
        }).then(function() {
          return _this.options.onMutate == null ? void 0 : _this.options.onMutate(_this.state.variables);
        }).then(function(context) {
          if (context !== _this.state.context) {
            _this.dispatch({
              type: "loading",
              context,
              variables: _this.state.variables
            });
          }
        });
      }
      return promise.then(function() {
        return _this.executeMutation();
      }).then(function(result) {
        data = result;
        _this.mutationCache.config.onSuccess == null ? void 0 : _this.mutationCache.config.onSuccess(data, _this.state.variables, _this.state.context, _this);
      }).then(function() {
        return _this.options.onSuccess == null ? void 0 : _this.options.onSuccess(data, _this.state.variables, _this.state.context);
      }).then(function() {
        return _this.options.onSettled == null ? void 0 : _this.options.onSettled(data, null, _this.state.variables, _this.state.context);
      }).then(function() {
        _this.dispatch({
          type: "success",
          data
        });
        return data;
      }).catch(function(error) {
        _this.mutationCache.config.onError == null ? void 0 : _this.mutationCache.config.onError(error, _this.state.variables, _this.state.context, _this);
        getLogger().error(error);
        return Promise.resolve().then(function() {
          return _this.options.onError == null ? void 0 : _this.options.onError(error, _this.state.variables, _this.state.context);
        }).then(function() {
          return _this.options.onSettled == null ? void 0 : _this.options.onSettled(void 0, error, _this.state.variables, _this.state.context);
        }).then(function() {
          _this.dispatch({
            type: "error",
            error
          });
          throw error;
        });
      });
    };
    _proto.executeMutation = function executeMutation() {
      var _this2 = this, _this$options$retry;
      this.retryer = new Retryer({
        fn: function fn3() {
          if (!_this2.options.mutationFn) {
            return Promise.reject("No mutationFn found");
          }
          return _this2.options.mutationFn(_this2.state.variables);
        },
        onFail: function onFail() {
          _this2.dispatch({
            type: "failed"
          });
        },
        onPause: function onPause() {
          _this2.dispatch({
            type: "pause"
          });
        },
        onContinue: function onContinue() {
          _this2.dispatch({
            type: "continue"
          });
        },
        retry: (_this$options$retry = this.options.retry) != null ? _this$options$retry : 0,
        retryDelay: this.options.retryDelay
      });
      return this.retryer.promise;
    };
    _proto.dispatch = function dispatch(action) {
      var _this3 = this;
      this.state = reducer2(this.state, action);
      notifyManager.batch(function() {
        _this3.observers.forEach(function(observer) {
          observer.onMutationUpdate(action);
        });
        _this3.mutationCache.notify(_this3);
      });
    };
    return Mutation2;
  }();
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
  function reducer2(state, action) {
    switch (action.type) {
      case "failed":
        return _extends({}, state, {
          failureCount: state.failureCount + 1
        });
      case "pause":
        return _extends({}, state, {
          isPaused: true
        });
      case "continue":
        return _extends({}, state, {
          isPaused: false
        });
      case "loading":
        return _extends({}, state, {
          context: action.context,
          data: void 0,
          error: null,
          isPaused: false,
          status: "loading",
          variables: action.variables
        });
      case "success":
        return _extends({}, state, {
          data: action.data,
          error: null,
          status: "success",
          isPaused: false
        });
      case "error":
        return _extends({}, state, {
          data: void 0,
          error: action.error,
          failureCount: state.failureCount + 1,
          isPaused: false,
          status: "error"
        });
      case "setState":
        return _extends({}, state, action.state);
      default:
        return state;
    }
  }

  // ../../node_modules/react-query/es/core/mutationCache.js
  var MutationCache = /* @__PURE__ */ function(_Subscribable) {
    _inheritsLoose(MutationCache2, _Subscribable);
    function MutationCache2(config) {
      var _this;
      _this = _Subscribable.call(this) || this;
      _this.config = config || {};
      _this.mutations = [];
      _this.mutationId = 0;
      return _this;
    }
    var _proto = MutationCache2.prototype;
    _proto.build = function build(client, options, state) {
      var mutation = new Mutation({
        mutationCache: this,
        mutationId: ++this.mutationId,
        options: client.defaultMutationOptions(options),
        state,
        defaultOptions: options.mutationKey ? client.getMutationDefaults(options.mutationKey) : void 0,
        meta: options.meta
      });
      this.add(mutation);
      return mutation;
    };
    _proto.add = function add(mutation) {
      this.mutations.push(mutation);
      this.notify(mutation);
    };
    _proto.remove = function remove(mutation) {
      this.mutations = this.mutations.filter(function(x2) {
        return x2 !== mutation;
      });
      mutation.cancel();
      this.notify(mutation);
    };
    _proto.clear = function clear() {
      var _this2 = this;
      notifyManager.batch(function() {
        _this2.mutations.forEach(function(mutation) {
          _this2.remove(mutation);
        });
      });
    };
    _proto.getAll = function getAll() {
      return this.mutations;
    };
    _proto.find = function find(filters) {
      if (typeof filters.exact === "undefined") {
        filters.exact = true;
      }
      return this.mutations.find(function(mutation) {
        return matchMutation(filters, mutation);
      });
    };
    _proto.findAll = function findAll(filters) {
      return this.mutations.filter(function(mutation) {
        return matchMutation(filters, mutation);
      });
    };
    _proto.notify = function notify(mutation) {
      var _this3 = this;
      notifyManager.batch(function() {
        _this3.listeners.forEach(function(listener) {
          listener(mutation);
        });
      });
    };
    _proto.onFocus = function onFocus() {
      this.resumePausedMutations();
    };
    _proto.onOnline = function onOnline() {
      this.resumePausedMutations();
    };
    _proto.resumePausedMutations = function resumePausedMutations() {
      var pausedMutations = this.mutations.filter(function(x2) {
        return x2.state.isPaused;
      });
      return notifyManager.batch(function() {
        return pausedMutations.reduce(function(promise, mutation) {
          return promise.then(function() {
            return mutation.continue().catch(noop2);
          });
        }, Promise.resolve());
      });
    };
    return MutationCache2;
  }(Subscribable);

  // ../../node_modules/react-query/es/core/infiniteQueryBehavior.js
  function infiniteQueryBehavior() {
    return {
      onFetch: function onFetch(context) {
        context.fetchFn = function() {
          var _context$fetchOptions, _context$fetchOptions2, _context$fetchOptions3, _context$fetchOptions4, _context$state$data, _context$state$data2;
          var refetchPage = (_context$fetchOptions = context.fetchOptions) == null ? void 0 : (_context$fetchOptions2 = _context$fetchOptions.meta) == null ? void 0 : _context$fetchOptions2.refetchPage;
          var fetchMore = (_context$fetchOptions3 = context.fetchOptions) == null ? void 0 : (_context$fetchOptions4 = _context$fetchOptions3.meta) == null ? void 0 : _context$fetchOptions4.fetchMore;
          var pageParam = fetchMore == null ? void 0 : fetchMore.pageParam;
          var isFetchingNextPage = (fetchMore == null ? void 0 : fetchMore.direction) === "forward";
          var isFetchingPreviousPage = (fetchMore == null ? void 0 : fetchMore.direction) === "backward";
          var oldPages = ((_context$state$data = context.state.data) == null ? void 0 : _context$state$data.pages) || [];
          var oldPageParams = ((_context$state$data2 = context.state.data) == null ? void 0 : _context$state$data2.pageParams) || [];
          var abortController = getAbortController();
          var abortSignal = abortController == null ? void 0 : abortController.signal;
          var newPageParams = oldPageParams;
          var cancelled = false;
          var queryFn = context.options.queryFn || function() {
            return Promise.reject("Missing queryFn");
          };
          var buildNewPages = function buildNewPages2(pages, param2, page, previous) {
            newPageParams = previous ? [param2].concat(newPageParams) : [].concat(newPageParams, [param2]);
            return previous ? [page].concat(pages) : [].concat(pages, [page]);
          };
          var fetchPage = function fetchPage2(pages, manual2, param2, previous) {
            if (cancelled) {
              return Promise.reject("Cancelled");
            }
            if (typeof param2 === "undefined" && !manual2 && pages.length) {
              return Promise.resolve(pages);
            }
            var queryFnContext = {
              queryKey: context.queryKey,
              signal: abortSignal,
              pageParam: param2,
              meta: context.meta
            };
            var queryFnResult = queryFn(queryFnContext);
            var promise2 = Promise.resolve(queryFnResult).then(function(page) {
              return buildNewPages(pages, param2, page, previous);
            });
            if (isCancelable(queryFnResult)) {
              var promiseAsAny = promise2;
              promiseAsAny.cancel = queryFnResult.cancel;
            }
            return promise2;
          };
          var promise;
          if (!oldPages.length) {
            promise = fetchPage([]);
          } else if (isFetchingNextPage) {
            var manual = typeof pageParam !== "undefined";
            var param = manual ? pageParam : getNextPageParam(context.options, oldPages);
            promise = fetchPage(oldPages, manual, param);
          } else if (isFetchingPreviousPage) {
            var _manual = typeof pageParam !== "undefined";
            var _param = _manual ? pageParam : getPreviousPageParam(context.options, oldPages);
            promise = fetchPage(oldPages, _manual, _param, true);
          } else {
            (function() {
              newPageParams = [];
              var manual2 = typeof context.options.getNextPageParam === "undefined";
              var shouldFetchFirstPage = refetchPage && oldPages[0] ? refetchPage(oldPages[0], 0, oldPages) : true;
              promise = shouldFetchFirstPage ? fetchPage([], manual2, oldPageParams[0]) : Promise.resolve(buildNewPages([], oldPageParams[0], oldPages[0]));
              var _loop = function _loop2(i3) {
                promise = promise.then(function(pages) {
                  var shouldFetchNextPage = refetchPage && oldPages[i3] ? refetchPage(oldPages[i3], i3, oldPages) : true;
                  if (shouldFetchNextPage) {
                    var _param2 = manual2 ? oldPageParams[i3] : getNextPageParam(context.options, pages);
                    return fetchPage(pages, manual2, _param2);
                  }
                  return Promise.resolve(buildNewPages(pages, oldPageParams[i3], oldPages[i3]));
                });
              };
              for (var i2 = 1; i2 < oldPages.length; i2++) {
                _loop(i2);
              }
            })();
          }
          var finalPromise = promise.then(function(pages) {
            return {
              pages,
              pageParams: newPageParams
            };
          });
          var finalPromiseAsAny = finalPromise;
          finalPromiseAsAny.cancel = function() {
            cancelled = true;
            abortController == null ? void 0 : abortController.abort();
            if (isCancelable(promise)) {
              promise.cancel();
            }
          };
          return finalPromise;
        };
      }
    };
  }
  function getNextPageParam(options, pages) {
    return options.getNextPageParam == null ? void 0 : options.getNextPageParam(pages[pages.length - 1], pages);
  }
  function getPreviousPageParam(options, pages) {
    return options.getPreviousPageParam == null ? void 0 : options.getPreviousPageParam(pages[0], pages);
  }

  // ../../node_modules/react-query/es/core/queryClient.js
  var QueryClient = /* @__PURE__ */ function() {
    function QueryClient2(config) {
      if (config === void 0) {
        config = {};
      }
      this.queryCache = config.queryCache || new QueryCache();
      this.mutationCache = config.mutationCache || new MutationCache();
      this.defaultOptions = config.defaultOptions || {};
      this.queryDefaults = [];
      this.mutationDefaults = [];
    }
    var _proto = QueryClient2.prototype;
    _proto.mount = function mount() {
      var _this = this;
      this.unsubscribeFocus = focusManager.subscribe(function() {
        if (focusManager.isFocused() && onlineManager.isOnline()) {
          _this.mutationCache.onFocus();
          _this.queryCache.onFocus();
        }
      });
      this.unsubscribeOnline = onlineManager.subscribe(function() {
        if (focusManager.isFocused() && onlineManager.isOnline()) {
          _this.mutationCache.onOnline();
          _this.queryCache.onOnline();
        }
      });
    };
    _proto.unmount = function unmount() {
      var _this$unsubscribeFocu, _this$unsubscribeOnli;
      (_this$unsubscribeFocu = this.unsubscribeFocus) == null ? void 0 : _this$unsubscribeFocu.call(this);
      (_this$unsubscribeOnli = this.unsubscribeOnline) == null ? void 0 : _this$unsubscribeOnli.call(this);
    };
    _proto.isFetching = function isFetching(arg1, arg2) {
      var _parseFilterArgs = parseFilterArgs(arg1, arg2), filters = _parseFilterArgs[0];
      filters.fetching = true;
      return this.queryCache.findAll(filters).length;
    };
    _proto.isMutating = function isMutating(filters) {
      return this.mutationCache.findAll(_extends({}, filters, {
        fetching: true
      })).length;
    };
    _proto.getQueryData = function getQueryData(queryKey, filters) {
      var _this$queryCache$find;
      return (_this$queryCache$find = this.queryCache.find(queryKey, filters)) == null ? void 0 : _this$queryCache$find.state.data;
    };
    _proto.getQueriesData = function getQueriesData(queryKeyOrFilters) {
      return this.getQueryCache().findAll(queryKeyOrFilters).map(function(_ref) {
        var queryKey = _ref.queryKey, state = _ref.state;
        var data = state.data;
        return [queryKey, data];
      });
    };
    _proto.setQueryData = function setQueryData(queryKey, updater, options) {
      var parsedOptions = parseQueryArgs(queryKey);
      var defaultedOptions = this.defaultQueryOptions(parsedOptions);
      return this.queryCache.build(this, defaultedOptions).setData(updater, options);
    };
    _proto.setQueriesData = function setQueriesData(queryKeyOrFilters, updater, options) {
      var _this2 = this;
      return notifyManager.batch(function() {
        return _this2.getQueryCache().findAll(queryKeyOrFilters).map(function(_ref2) {
          var queryKey = _ref2.queryKey;
          return [queryKey, _this2.setQueryData(queryKey, updater, options)];
        });
      });
    };
    _proto.getQueryState = function getQueryState(queryKey, filters) {
      var _this$queryCache$find2;
      return (_this$queryCache$find2 = this.queryCache.find(queryKey, filters)) == null ? void 0 : _this$queryCache$find2.state;
    };
    _proto.removeQueries = function removeQueries(arg1, arg2) {
      var _parseFilterArgs2 = parseFilterArgs(arg1, arg2), filters = _parseFilterArgs2[0];
      var queryCache = this.queryCache;
      notifyManager.batch(function() {
        queryCache.findAll(filters).forEach(function(query) {
          queryCache.remove(query);
        });
      });
    };
    _proto.resetQueries = function resetQueries(arg1, arg2, arg3) {
      var _this3 = this;
      var _parseFilterArgs3 = parseFilterArgs(arg1, arg2, arg3), filters = _parseFilterArgs3[0], options = _parseFilterArgs3[1];
      var queryCache = this.queryCache;
      var refetchFilters = _extends({}, filters, {
        active: true
      });
      return notifyManager.batch(function() {
        queryCache.findAll(filters).forEach(function(query) {
          query.reset();
        });
        return _this3.refetchQueries(refetchFilters, options);
      });
    };
    _proto.cancelQueries = function cancelQueries(arg1, arg2, arg3) {
      var _this4 = this;
      var _parseFilterArgs4 = parseFilterArgs(arg1, arg2, arg3), filters = _parseFilterArgs4[0], _parseFilterArgs4$ = _parseFilterArgs4[1], cancelOptions = _parseFilterArgs4$ === void 0 ? {} : _parseFilterArgs4$;
      if (typeof cancelOptions.revert === "undefined") {
        cancelOptions.revert = true;
      }
      var promises = notifyManager.batch(function() {
        return _this4.queryCache.findAll(filters).map(function(query) {
          return query.cancel(cancelOptions);
        });
      });
      return Promise.all(promises).then(noop2).catch(noop2);
    };
    _proto.invalidateQueries = function invalidateQueries(arg1, arg2, arg3) {
      var _ref3, _filters$refetchActiv, _filters$refetchInact, _this5 = this;
      var _parseFilterArgs5 = parseFilterArgs(arg1, arg2, arg3), filters = _parseFilterArgs5[0], options = _parseFilterArgs5[1];
      var refetchFilters = _extends({}, filters, {
        active: (_ref3 = (_filters$refetchActiv = filters.refetchActive) != null ? _filters$refetchActiv : filters.active) != null ? _ref3 : true,
        inactive: (_filters$refetchInact = filters.refetchInactive) != null ? _filters$refetchInact : false
      });
      return notifyManager.batch(function() {
        _this5.queryCache.findAll(filters).forEach(function(query) {
          query.invalidate();
        });
        return _this5.refetchQueries(refetchFilters, options);
      });
    };
    _proto.refetchQueries = function refetchQueries(arg1, arg2, arg3) {
      var _this6 = this;
      var _parseFilterArgs6 = parseFilterArgs(arg1, arg2, arg3), filters = _parseFilterArgs6[0], options = _parseFilterArgs6[1];
      var promises = notifyManager.batch(function() {
        return _this6.queryCache.findAll(filters).map(function(query) {
          return query.fetch(void 0, _extends({}, options, {
            meta: {
              refetchPage: filters == null ? void 0 : filters.refetchPage
            }
          }));
        });
      });
      var promise = Promise.all(promises).then(noop2);
      if (!(options == null ? void 0 : options.throwOnError)) {
        promise = promise.catch(noop2);
      }
      return promise;
    };
    _proto.fetchQuery = function fetchQuery(arg1, arg2, arg3) {
      var parsedOptions = parseQueryArgs(arg1, arg2, arg3);
      var defaultedOptions = this.defaultQueryOptions(parsedOptions);
      if (typeof defaultedOptions.retry === "undefined") {
        defaultedOptions.retry = false;
      }
      var query = this.queryCache.build(this, defaultedOptions);
      return query.isStaleByTime(defaultedOptions.staleTime) ? query.fetch(defaultedOptions) : Promise.resolve(query.state.data);
    };
    _proto.prefetchQuery = function prefetchQuery(arg1, arg2, arg3) {
      return this.fetchQuery(arg1, arg2, arg3).then(noop2).catch(noop2);
    };
    _proto.fetchInfiniteQuery = function fetchInfiniteQuery(arg1, arg2, arg3) {
      var parsedOptions = parseQueryArgs(arg1, arg2, arg3);
      parsedOptions.behavior = infiniteQueryBehavior();
      return this.fetchQuery(parsedOptions);
    };
    _proto.prefetchInfiniteQuery = function prefetchInfiniteQuery(arg1, arg2, arg3) {
      return this.fetchInfiniteQuery(arg1, arg2, arg3).then(noop2).catch(noop2);
    };
    _proto.cancelMutations = function cancelMutations() {
      var _this7 = this;
      var promises = notifyManager.batch(function() {
        return _this7.mutationCache.getAll().map(function(mutation) {
          return mutation.cancel();
        });
      });
      return Promise.all(promises).then(noop2).catch(noop2);
    };
    _proto.resumePausedMutations = function resumePausedMutations() {
      return this.getMutationCache().resumePausedMutations();
    };
    _proto.executeMutation = function executeMutation(options) {
      return this.mutationCache.build(this, options).execute();
    };
    _proto.getQueryCache = function getQueryCache() {
      return this.queryCache;
    };
    _proto.getMutationCache = function getMutationCache() {
      return this.mutationCache;
    };
    _proto.getDefaultOptions = function getDefaultOptions() {
      return this.defaultOptions;
    };
    _proto.setDefaultOptions = function setDefaultOptions(options) {
      this.defaultOptions = options;
    };
    _proto.setQueryDefaults = function setQueryDefaults(queryKey, options) {
      var result = this.queryDefaults.find(function(x2) {
        return hashQueryKey(queryKey) === hashQueryKey(x2.queryKey);
      });
      if (result) {
        result.defaultOptions = options;
      } else {
        this.queryDefaults.push({
          queryKey,
          defaultOptions: options
        });
      }
    };
    _proto.getQueryDefaults = function getQueryDefaults(queryKey) {
      var _this$queryDefaults$f;
      return queryKey ? (_this$queryDefaults$f = this.queryDefaults.find(function(x2) {
        return partialMatchKey(queryKey, x2.queryKey);
      })) == null ? void 0 : _this$queryDefaults$f.defaultOptions : void 0;
    };
    _proto.setMutationDefaults = function setMutationDefaults(mutationKey, options) {
      var result = this.mutationDefaults.find(function(x2) {
        return hashQueryKey(mutationKey) === hashQueryKey(x2.mutationKey);
      });
      if (result) {
        result.defaultOptions = options;
      } else {
        this.mutationDefaults.push({
          mutationKey,
          defaultOptions: options
        });
      }
    };
    _proto.getMutationDefaults = function getMutationDefaults(mutationKey) {
      var _this$mutationDefault;
      return mutationKey ? (_this$mutationDefault = this.mutationDefaults.find(function(x2) {
        return partialMatchKey(mutationKey, x2.mutationKey);
      })) == null ? void 0 : _this$mutationDefault.defaultOptions : void 0;
    };
    _proto.defaultQueryOptions = function defaultQueryOptions(options) {
      if (options == null ? void 0 : options._defaulted) {
        return options;
      }
      var defaultedOptions = _extends({}, this.defaultOptions.queries, this.getQueryDefaults(options == null ? void 0 : options.queryKey), options, {
        _defaulted: true
      });
      if (!defaultedOptions.queryHash && defaultedOptions.queryKey) {
        defaultedOptions.queryHash = hashQueryKeyByOptions(defaultedOptions.queryKey, defaultedOptions);
      }
      return defaultedOptions;
    };
    _proto.defaultQueryObserverOptions = function defaultQueryObserverOptions(options) {
      return this.defaultQueryOptions(options);
    };
    _proto.defaultMutationOptions = function defaultMutationOptions(options) {
      if (options == null ? void 0 : options._defaulted) {
        return options;
      }
      return _extends({}, this.defaultOptions.mutations, this.getMutationDefaults(options == null ? void 0 : options.mutationKey), options, {
        _defaulted: true
      });
    };
    _proto.clear = function clear() {
      this.queryCache.clear();
      this.mutationCache.clear();
    };
    return QueryClient2;
  }();

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
        promise = promise.catch(noop2);
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
      if (this.staleTimeoutId) {
        clearTimeout(this.staleTimeoutId);
        this.staleTimeoutId = void 0;
      }
    };
    _proto.clearRefetchInterval = function clearRefetchInterval() {
      if (this.refetchIntervalId) {
        clearInterval(this.refetchIntervalId);
        this.refetchIntervalId = void 0;
      }
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
        var isIncluded = includedProps == null ? void 0 : includedProps.some(function(x2) {
          return x2 === key;
        });
        var isExcluded = notifyOnChangePropsExclusions == null ? void 0 : notifyOnChangePropsExclusions.some(function(x2) {
          return x2 === key;
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
  var import_react2 = __toESM(require_react());
  var defaultContext = /* @__PURE__ */ import_react2.default.createContext(void 0);
  var QueryClientSharingContext = /* @__PURE__ */ import_react2.default.createContext(false);
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
    var queryClient2 = import_react2.default.useContext(getQueryClientContext(import_react2.default.useContext(QueryClientSharingContext)));
    if (!queryClient2) {
      throw new Error("No QueryClient set, use QueryClientProvider to set one");
    }
    return queryClient2;
  };
  var QueryClientProvider = function QueryClientProvider2(_ref) {
    var client = _ref.client, _ref$contextSharing = _ref.contextSharing, contextSharing = _ref$contextSharing === void 0 ? false : _ref$contextSharing, children = _ref.children;
    import_react2.default.useEffect(function() {
      client.mount();
      return function() {
        client.unmount();
      };
    }, [client]);
    var Context2 = getQueryClientContext(contextSharing);
    return /* @__PURE__ */ import_react2.default.createElement(QueryClientSharingContext.Provider, {
      value: contextSharing
    }, /* @__PURE__ */ import_react2.default.createElement(Context2.Provider, {
      value: client
    }, children));
  };

  // ../../node_modules/react-query/es/react/QueryErrorResetBoundary.js
  var import_react3 = __toESM(require_react());
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
  var QueryErrorResetBoundaryContext = /* @__PURE__ */ import_react3.default.createContext(createValue());
  var useQueryErrorResetBoundary = function useQueryErrorResetBoundary2() {
    return import_react3.default.useContext(QueryErrorResetBoundaryContext);
  };

  // ../../node_modules/react-query/es/react/useMutation.js
  var import_react4 = __toESM(require_react());

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
    var mountedRef = import_react4.default.useRef(false);
    var _React$useState = import_react4.default.useState(0), forceUpdate = _React$useState[1];
    var options = parseMutationArgs(arg1, arg2, arg3);
    var queryClient2 = useQueryClient();
    var obsRef = import_react4.default.useRef();
    if (!obsRef.current) {
      obsRef.current = new MutationObserver(queryClient2, options);
    } else {
      obsRef.current.setOptions(options);
    }
    var currentResult = obsRef.current.getCurrentResult();
    import_react4.default.useEffect(function() {
      mountedRef.current = true;
      var unsubscribe = obsRef.current.subscribe(notifyManager.batchCalls(function() {
        if (mountedRef.current) {
          forceUpdate(function(x2) {
            return x2 + 1;
          });
        }
      }));
      return function() {
        mountedRef.current = false;
        unsubscribe();
      };
    }, []);
    var mutate = import_react4.default.useCallback(function(variables, mutateOptions) {
      obsRef.current.mutate(variables, mutateOptions).catch(noop2);
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
  var import_react5 = __toESM(require_react());
  function useBaseQuery(options, Observer) {
    var mountedRef = import_react5.default.useRef(false);
    var _React$useState = import_react5.default.useState(0), forceUpdate = _React$useState[1];
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
    var _React$useState2 = import_react5.default.useState(function() {
      return new Observer(queryClient2, defaultedOptions);
    }), observer = _React$useState2[0];
    var result = observer.getOptimisticResult(defaultedOptions);
    import_react5.default.useEffect(function() {
      mountedRef.current = true;
      errorResetBoundary.clearReset();
      var unsubscribe = observer.subscribe(notifyManager.batchCalls(function() {
        if (mountedRef.current) {
          forceUpdate(function(x2) {
            return x2 + 1;
          });
        }
      }));
      observer.updateResult();
      return function() {
        mountedRef.current = false;
        unsubscribe();
      };
    }, [errorResetBoundary, observer]);
    import_react5.default.useEffect(function() {
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

  // ../fetcher/dist/index.mjs
  var import_axios = __toESM(require_axios2(), 1);
  var instance = import_axios.default.create();
  var queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        suspense: true,
        refetchOnWindowFocus: false,
        cacheTime: Infinity
      }
    }
  });
  async function fetcher(url, config = {}) {
    try {
      const response = await instance({
        url,
        withCredentials: true,
        ...config
      });
      return response.data;
    } catch (error) {
      throw Error(error);
    }
  }

  // src/utils/queries.tsx
  function useLibraryImage(options) {
    return useQuery(
      ["LibraryImage", options],
      () => fetcher(`/open_api/library/image`, {
        method: "GET",
        params: {
          id: options.id || null,
          limit: options.limit || 5,
          offset: options.offset || 0,
          title: options.title || null,
          tagId: options.tagId || null
        }
      }),
      {
        keepPreviousData: true,
        onSuccess: (data) => {
        }
      }
    );
  }
  function useCreateImage() {
    const queryClient2 = useQueryClient();
    return useMutation(
      (data) => {
        return fetcher(`/open_api/library/image`, {
          method: "POST",
          headers: {
            "content-type": "multipart/form-data"
          },
          data
        });
      },
      {
        onSuccess: (data) => {
          queryClient2.setQueryData(["LibraryImage"], (oldData) => {
            if (oldData && Array.isArray(oldData)) {
              return [...oldData, data];
            }
            return oldData;
          });
        }
      }
    );
  }
  function useDeleteImage() {
    const queryClient2 = useQueryClient();
    return useMutation(
      (id) => {
        return fetcher(`/open_api/library/image/${id}`, {
          method: "DELETE"
        });
      },
      {
        onSuccess: (_2, id) => {
          queryClient2.setQueriesData(["LibraryImage"], (oldData) => {
            if (oldData && Array.isArray(oldData)) {
              return oldData.filter((i2) => i2.id !== id);
            }
            return oldData;
          });
        }
      }
    );
  }
  function useGetTags() {
    return useQuery(
      ["LibraryTag"],
      () => fetcher(`/open_api/library/tag`, {
        method: "GET"
      }),
      {
        keepPreviousData: true,
        onSuccess: (data) => {
        }
      }
    );
  }
  function useDeleteTagAssociation() {
    const queryClient2 = useQueryClient();
    return useMutation(
      (id) => {
        return fetcher(`/open_api/library/image_tag/${id}`, {
          method: "DELETE"
        });
      },
      {
        onSuccess: (data, id) => {
          queryClient2.setQueriesData(["LibraryImage"], (oldData) => {
            if (oldData && Array.isArray(oldData)) {
              return oldData.map((image) => {
                if (image.tags && image.tags.length) {
                  return {
                    ...image,
                    tags: image.tags.filter(
                      ({ imageTag }) => imageTag.id !== id
                    )
                  };
                }
                return image;
              });
            }
            return oldData;
          });
        }
      }
    );
  }
  function useAssociateTag() {
    const queryClient2 = useQueryClient();
    return useMutation(
      (data) => {
        return fetcher(`/open_api/library/image_tag`, {
          method: "POST",
          data
        });
      },
      {
        onSuccess: (data) => {
          queryClient2.setQueriesData(["LibraryImage"], (oldData) => {
            if (oldData && Array.isArray(oldData)) {
              return oldData.map((image) => {
                if (image.id === data.imageTag.imageId) {
                  return {
                    ...image,
                    tags: [...image.tags, data]
                  };
                }
                return image;
              });
            }
            return oldData;
          });
        }
      }
    );
  }

  // src/Library/assets/xmark.svg
  var React15 = __toESM(require_react());
  var SvgXmark = (props) => /* @__PURE__ */ React15.createElement("svg", {
    width: 19,
    height: 18,
    viewBox: "0 0 19 18",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React15.createElement("path", {
    d: "M17.5913 15.0762L10.9713 8.67623L17.6013 2.27623C17.728 2.15573 17.829 2.0107 17.898 1.84996C17.9669 1.68923 18.0025 1.51614 18.0025 1.34123C18.0025 1.16632 17.9669 0.993238 17.898 0.832502C17.829 0.671767 17.728 0.526739 17.6013 0.406233C17.3305 0.151704 16.9729 0.00999999 16.6013 0.00999999C16.2296 0.00999999 15.872 0.151704 15.6013 0.406233L9.00125 6.77623L2.40125 0.396233C2.13049 0.141704 1.77286 0 1.40125 0C1.02964 0 0.672011 0.141704 0.401251 0.396233C0.275468 0.518481 0.17531 0.664572 0.10663 0.825969C0.0379507 0.987366 0.00212641 1.16083 0.00125089 1.33623C0.000992191 1.51181 0.0363014 1.68561 0.105048 1.84717C0.173796 2.00873 0.274556 2.15468 0.401251 2.27623L7.03125 8.67623L0.401251 15.0762C0.274474 15.1967 0.173528 15.3418 0.104549 15.5025C0.0355706 15.6632 0 15.8363 0 16.0112C0 16.1861 0.0355706 16.3592 0.104549 16.52C0.173528 16.6807 0.274474 16.8257 0.401251 16.9462C0.675245 17.1943 1.03165 17.3317 1.40125 17.3317C1.77085 17.3317 2.12726 17.1943 2.40125 16.9462L9.00125 10.5762L15.6013 16.9462C15.8731 17.1986 16.2303 17.3388 16.6013 17.3388C16.9722 17.3388 17.3294 17.1986 17.6013 16.9462C17.7307 16.8273 17.834 16.6828 17.9046 16.5218C17.9753 16.3609 18.0118 16.187 18.0118 16.0112C18.0118 15.8355 17.9753 15.6616 17.9046 15.5007C17.834 15.3397 17.7307 15.1952 17.6013 15.0762H17.5913Z",
    fill: "currentcolor"
  }));

  // src/Library/assets/trash.svg
  var React16 = __toESM(require_react());
  var SvgTrash = (props) => /* @__PURE__ */ React16.createElement("svg", {
    width: 12,
    height: 12,
    viewBox: "0 0 12 12",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React16.createElement("path", {
    d: "M3.91875 0.498484C4.04531 0.257609 4.30547 0.105469 4.58906 0.105469H7.41094C7.69453 0.105469 7.95469 0.257609 8.08125 0.498484L8.25 0.816406H10.5C10.9148 0.816406 11.25 1.13477 11.25 1.52734C11.25 1.91991 10.9148 2.23828 10.5 2.23828H1.5C1.08586 2.23828 0.75 1.91991 0.75 1.52734C0.75 1.13477 1.08586 0.816406 1.5 0.816406H3.75L3.91875 0.498484ZM1.47891 2.94922H10.5V10.0586C10.5 10.8428 9.82734 11.4805 9 11.4805H2.97891C2.17148 11.4805 1.47891 10.8428 1.47891 10.0586V2.94922ZM3.35391 4.72656V9.70312C3.35391 9.89863 3.54375 10.0586 3.72891 10.0586C3.95625 10.0586 4.10391 9.89863 4.10391 9.70312V4.72656C4.10391 4.53105 3.95625 4.37109 3.72891 4.37109C3.54375 4.37109 3.35391 4.53105 3.35391 4.72656ZM5.60391 4.72656V9.70312C5.60391 9.89863 5.79375 10.0586 5.97891 10.0586C6.20625 10.0586 6.375 9.89863 6.375 9.70312V4.72656C6.375 4.53105 6.20625 4.37109 5.97891 4.37109C5.79375 4.37109 5.60391 4.53105 5.60391 4.72656ZM7.875 4.72656V9.70312C7.875 9.89863 8.04375 10.0586 8.25 10.0586C8.45625 10.0586 8.625 9.89863 8.625 9.70312V4.72656C8.625 4.53105 8.45625 4.37109 8.25 4.37109C8.04375 4.37109 7.875 4.53105 7.875 4.72656Z",
    fill: "white"
  }));

  // src/Library/assets/tag-xmark.svg
  var React17 = __toESM(require_react());
  var SvgTagXmark = (props) => /* @__PURE__ */ React17.createElement("svg", {
    width: 8,
    height: 8,
    viewBox: "0 0 19 18",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ React17.createElement("path", {
    d: "M17.5913 15.0762L10.9713 8.67623L17.6013 2.27623C17.728 2.15573 17.829 2.0107 17.898 1.84996C17.9669 1.68923 18.0025 1.51614 18.0025 1.34123C18.0025 1.16632 17.9669 0.993238 17.898 0.832502C17.829 0.671767 17.728 0.526739 17.6013 0.406233C17.3305 0.151704 16.9729 0.00999999 16.6013 0.00999999C16.2296 0.00999999 15.872 0.151704 15.6013 0.406233L9.00125 6.77623L2.40125 0.396233C2.13049 0.141704 1.77286 0 1.40125 0C1.02964 0 0.672011 0.141704 0.401251 0.396233C0.275468 0.518481 0.17531 0.664572 0.10663 0.825969C0.0379507 0.987366 0.00212641 1.16083 0.00125089 1.33623C0.000992191 1.51181 0.0363014 1.68561 0.105048 1.84717C0.173796 2.00873 0.274556 2.15468 0.401251 2.27623L7.03125 8.67623L0.401251 15.0762C0.274474 15.1967 0.173528 15.3418 0.104549 15.5025C0.0355706 15.6632 0 15.8363 0 16.0112C0 16.1861 0.0355706 16.3592 0.104549 16.52C0.173528 16.6807 0.274474 16.8257 0.401251 16.9462C0.675245 17.1943 1.03165 17.3317 1.40125 17.3317C1.77085 17.3317 2.12726 17.1943 2.40125 16.9462L9.00125 10.5762L15.6013 16.9462C15.8731 17.1986 16.2303 17.3388 16.6013 17.3388C16.9722 17.3388 17.3294 17.1986 17.6013 16.9462C17.7307 16.8273 17.834 16.6828 17.9046 16.5218C17.9753 16.3609 18.0118 16.187 18.0118 16.0112C18.0118 15.8355 17.9753 15.6616 17.9046 15.5007C17.834 15.3397 17.7307 15.1952 17.6013 15.0762H17.5913Z",
    fill: "currentcolor"
  }));

  // src/Library/index.tsx
  var import_react_modal = __toESM(require_lib());
  var import_react10 = __toESM(require_react());

  // src/Input/Input.tsx
  var import_react8 = __toESM(require_react());

  // ../../node_modules/@popperjs/core/lib/enums.js
  var top = "top";
  var bottom = "bottom";
  var right = "right";
  var left = "left";
  var auto = "auto";
  var basePlacements = [top, bottom, right, left];
  var start = "start";
  var end = "end";
  var clippingParents = "clippingParents";
  var viewport = "viewport";
  var popper = "popper";
  var reference = "reference";
  var variationPlacements = /* @__PURE__ */ basePlacements.reduce(function(acc, placement) {
    return acc.concat([placement + "-" + start, placement + "-" + end]);
  }, []);
  var placements = /* @__PURE__ */ [].concat(basePlacements, [auto]).reduce(function(acc, placement) {
    return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
  }, []);
  var beforeRead = "beforeRead";
  var read = "read";
  var afterRead = "afterRead";
  var beforeMain = "beforeMain";
  var main = "main";
  var afterMain = "afterMain";
  var beforeWrite = "beforeWrite";
  var write = "write";
  var afterWrite = "afterWrite";
  var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];

  // ../../node_modules/@popperjs/core/lib/dom-utils/getNodeName.js
  function getNodeName(element) {
    return element ? (element.nodeName || "").toLowerCase() : null;
  }

  // ../../node_modules/@popperjs/core/lib/dom-utils/getWindow.js
  function getWindow(node) {
    if (node == null) {
      return window;
    }
    if (node.toString() !== "[object Window]") {
      var ownerDocument = node.ownerDocument;
      return ownerDocument ? ownerDocument.defaultView || window : window;
    }
    return node;
  }

  // ../../node_modules/@popperjs/core/lib/dom-utils/instanceOf.js
  function isElement(node) {
    var OwnElement = getWindow(node).Element;
    return node instanceof OwnElement || node instanceof Element;
  }
  function isHTMLElement(node) {
    var OwnElement = getWindow(node).HTMLElement;
    return node instanceof OwnElement || node instanceof HTMLElement;
  }
  function isShadowRoot(node) {
    if (typeof ShadowRoot === "undefined") {
      return false;
    }
    var OwnElement = getWindow(node).ShadowRoot;
    return node instanceof OwnElement || node instanceof ShadowRoot;
  }

  // ../../node_modules/@popperjs/core/lib/modifiers/applyStyles.js
  function applyStyles(_ref) {
    var state = _ref.state;
    Object.keys(state.elements).forEach(function(name) {
      var style = state.styles[name] || {};
      var attributes = state.attributes[name] || {};
      var element = state.elements[name];
      if (!isHTMLElement(element) || !getNodeName(element)) {
        return;
      }
      Object.assign(element.style, style);
      Object.keys(attributes).forEach(function(name2) {
        var value = attributes[name2];
        if (value === false) {
          element.removeAttribute(name2);
        } else {
          element.setAttribute(name2, value === true ? "" : value);
        }
      });
    });
  }
  function effect(_ref2) {
    var state = _ref2.state;
    var initialStyles = {
      popper: {
        position: state.options.strategy,
        left: "0",
        top: "0",
        margin: "0"
      },
      arrow: {
        position: "absolute"
      },
      reference: {}
    };
    Object.assign(state.elements.popper.style, initialStyles.popper);
    state.styles = initialStyles;
    if (state.elements.arrow) {
      Object.assign(state.elements.arrow.style, initialStyles.arrow);
    }
    return function() {
      Object.keys(state.elements).forEach(function(name) {
        var element = state.elements[name];
        var attributes = state.attributes[name] || {};
        var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]);
        var style = styleProperties.reduce(function(style2, property) {
          style2[property] = "";
          return style2;
        }, {});
        if (!isHTMLElement(element) || !getNodeName(element)) {
          return;
        }
        Object.assign(element.style, style);
        Object.keys(attributes).forEach(function(attribute) {
          element.removeAttribute(attribute);
        });
      });
    };
  }
  var applyStyles_default = {
    name: "applyStyles",
    enabled: true,
    phase: "write",
    fn: applyStyles,
    effect,
    requires: ["computeStyles"]
  };

  // ../../node_modules/@popperjs/core/lib/utils/getBasePlacement.js
  function getBasePlacement(placement) {
    return placement.split("-")[0];
  }

  // ../../node_modules/@popperjs/core/lib/utils/math.js
  var max = Math.max;
  var min = Math.min;
  var round = Math.round;

  // ../../node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js
  function getBoundingClientRect(element, includeScale) {
    if (includeScale === void 0) {
      includeScale = false;
    }
    var rect = element.getBoundingClientRect();
    var scaleX = 1;
    var scaleY = 1;
    if (isHTMLElement(element) && includeScale) {
      var offsetHeight = element.offsetHeight;
      var offsetWidth = element.offsetWidth;
      if (offsetWidth > 0) {
        scaleX = round(rect.width) / offsetWidth || 1;
      }
      if (offsetHeight > 0) {
        scaleY = round(rect.height) / offsetHeight || 1;
      }
    }
    return {
      width: rect.width / scaleX,
      height: rect.height / scaleY,
      top: rect.top / scaleY,
      right: rect.right / scaleX,
      bottom: rect.bottom / scaleY,
      left: rect.left / scaleX,
      x: rect.left / scaleX,
      y: rect.top / scaleY
    };
  }

  // ../../node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js
  function getLayoutRect(element) {
    var clientRect = getBoundingClientRect(element);
    var width = element.offsetWidth;
    var height = element.offsetHeight;
    if (Math.abs(clientRect.width - width) <= 1) {
      width = clientRect.width;
    }
    if (Math.abs(clientRect.height - height) <= 1) {
      height = clientRect.height;
    }
    return {
      x: element.offsetLeft,
      y: element.offsetTop,
      width,
      height
    };
  }

  // ../../node_modules/@popperjs/core/lib/dom-utils/contains.js
  function contains(parent, child) {
    var rootNode = child.getRootNode && child.getRootNode();
    if (parent.contains(child)) {
      return true;
    } else if (rootNode && isShadowRoot(rootNode)) {
      var next = child;
      do {
        if (next && parent.isSameNode(next)) {
          return true;
        }
        next = next.parentNode || next.host;
      } while (next);
    }
    return false;
  }

  // ../../node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js
  function getComputedStyle(element) {
    return getWindow(element).getComputedStyle(element);
  }

  // ../../node_modules/@popperjs/core/lib/dom-utils/isTableElement.js
  function isTableElement(element) {
    return ["table", "td", "th"].indexOf(getNodeName(element)) >= 0;
  }

  // ../../node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js
  function getDocumentElement(element) {
    return ((isElement(element) ? element.ownerDocument : element.document) || window.document).documentElement;
  }

  // ../../node_modules/@popperjs/core/lib/dom-utils/getParentNode.js
  function getParentNode(element) {
    if (getNodeName(element) === "html") {
      return element;
    }
    return element.assignedSlot || element.parentNode || (isShadowRoot(element) ? element.host : null) || getDocumentElement(element);
  }

  // ../../node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js
  function getTrueOffsetParent(element) {
    if (!isHTMLElement(element) || getComputedStyle(element).position === "fixed") {
      return null;
    }
    return element.offsetParent;
  }
  function getContainingBlock(element) {
    var isFirefox = navigator.userAgent.toLowerCase().indexOf("firefox") !== -1;
    var isIE = navigator.userAgent.indexOf("Trident") !== -1;
    if (isIE && isHTMLElement(element)) {
      var elementCss = getComputedStyle(element);
      if (elementCss.position === "fixed") {
        return null;
      }
    }
    var currentNode = getParentNode(element);
    if (isShadowRoot(currentNode)) {
      currentNode = currentNode.host;
    }
    while (isHTMLElement(currentNode) && ["html", "body"].indexOf(getNodeName(currentNode)) < 0) {
      var css = getComputedStyle(currentNode);
      if (css.transform !== "none" || css.perspective !== "none" || css.contain === "paint" || ["transform", "perspective"].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === "filter" || isFirefox && css.filter && css.filter !== "none") {
        return currentNode;
      } else {
        currentNode = currentNode.parentNode;
      }
    }
    return null;
  }
  function getOffsetParent(element) {
    var window2 = getWindow(element);
    var offsetParent = getTrueOffsetParent(element);
    while (offsetParent && isTableElement(offsetParent) && getComputedStyle(offsetParent).position === "static") {
      offsetParent = getTrueOffsetParent(offsetParent);
    }
    if (offsetParent && (getNodeName(offsetParent) === "html" || getNodeName(offsetParent) === "body" && getComputedStyle(offsetParent).position === "static")) {
      return window2;
    }
    return offsetParent || getContainingBlock(element) || window2;
  }

  // ../../node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js
  function getMainAxisFromPlacement(placement) {
    return ["top", "bottom"].indexOf(placement) >= 0 ? "x" : "y";
  }

  // ../../node_modules/@popperjs/core/lib/utils/within.js
  function within(min2, value, max2) {
    return max(min2, min(value, max2));
  }
  function withinMaxClamp(min2, value, max2) {
    var v2 = within(min2, value, max2);
    return v2 > max2 ? max2 : v2;
  }

  // ../../node_modules/@popperjs/core/lib/utils/getFreshSideObject.js
  function getFreshSideObject() {
    return {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    };
  }

  // ../../node_modules/@popperjs/core/lib/utils/mergePaddingObject.js
  function mergePaddingObject(paddingObject) {
    return Object.assign({}, getFreshSideObject(), paddingObject);
  }

  // ../../node_modules/@popperjs/core/lib/utils/expandToHashMap.js
  function expandToHashMap(value, keys) {
    return keys.reduce(function(hashMap, key) {
      hashMap[key] = value;
      return hashMap;
    }, {});
  }

  // ../../node_modules/@popperjs/core/lib/modifiers/arrow.js
  var toPaddingObject = function toPaddingObject2(padding, state) {
    padding = typeof padding === "function" ? padding(Object.assign({}, state.rects, {
      placement: state.placement
    })) : padding;
    return mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
  };
  function arrow(_ref) {
    var _state$modifiersData$;
    var state = _ref.state, name = _ref.name, options = _ref.options;
    var arrowElement = state.elements.arrow;
    var popperOffsets2 = state.modifiersData.popperOffsets;
    var basePlacement = getBasePlacement(state.placement);
    var axis = getMainAxisFromPlacement(basePlacement);
    var isVertical = [left, right].indexOf(basePlacement) >= 0;
    var len = isVertical ? "height" : "width";
    if (!arrowElement || !popperOffsets2) {
      return;
    }
    var paddingObject = toPaddingObject(options.padding, state);
    var arrowRect = getLayoutRect(arrowElement);
    var minProp = axis === "y" ? top : left;
    var maxProp = axis === "y" ? bottom : right;
    var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets2[axis] - state.rects.popper[len];
    var startDiff = popperOffsets2[axis] - state.rects.reference[axis];
    var arrowOffsetParent = getOffsetParent(arrowElement);
    var clientSize = arrowOffsetParent ? axis === "y" ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
    var centerToReference = endDiff / 2 - startDiff / 2;
    var min2 = paddingObject[minProp];
    var max2 = clientSize - arrowRect[len] - paddingObject[maxProp];
    var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
    var offset2 = within(min2, center, max2);
    var axisProp = axis;
    state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset2, _state$modifiersData$.centerOffset = offset2 - center, _state$modifiersData$);
  }
  function effect2(_ref2) {
    var state = _ref2.state, options = _ref2.options;
    var _options$element = options.element, arrowElement = _options$element === void 0 ? "[data-popper-arrow]" : _options$element;
    if (arrowElement == null) {
      return;
    }
    if (typeof arrowElement === "string") {
      arrowElement = state.elements.popper.querySelector(arrowElement);
      if (!arrowElement) {
        return;
      }
    }
    if (true) {
      if (!isHTMLElement(arrowElement)) {
        console.error(['Popper: "arrow" element must be an HTMLElement (not an SVGElement).', "To use an SVG arrow, wrap it in an HTMLElement that will be used as", "the arrow."].join(" "));
      }
    }
    if (!contains(state.elements.popper, arrowElement)) {
      if (true) {
        console.error(['Popper: "arrow" modifier\'s `element` must be a child of the popper', "element."].join(" "));
      }
      return;
    }
    state.elements.arrow = arrowElement;
  }
  var arrow_default = {
    name: "arrow",
    enabled: true,
    phase: "main",
    fn: arrow,
    effect: effect2,
    requires: ["popperOffsets"],
    requiresIfExists: ["preventOverflow"]
  };

  // ../../node_modules/@popperjs/core/lib/utils/getVariation.js
  function getVariation(placement) {
    return placement.split("-")[1];
  }

  // ../../node_modules/@popperjs/core/lib/modifiers/computeStyles.js
  var unsetSides = {
    top: "auto",
    right: "auto",
    bottom: "auto",
    left: "auto"
  };
  function roundOffsetsByDPR(_ref) {
    var x2 = _ref.x, y = _ref.y;
    var win = window;
    var dpr = win.devicePixelRatio || 1;
    return {
      x: round(x2 * dpr) / dpr || 0,
      y: round(y * dpr) / dpr || 0
    };
  }
  function mapToStyles(_ref2) {
    var _Object$assign2;
    var popper2 = _ref2.popper, popperRect = _ref2.popperRect, placement = _ref2.placement, variation = _ref2.variation, offsets = _ref2.offsets, position = _ref2.position, gpuAcceleration = _ref2.gpuAcceleration, adaptive = _ref2.adaptive, roundOffsets = _ref2.roundOffsets, isFixed = _ref2.isFixed;
    var _offsets$x = offsets.x, x2 = _offsets$x === void 0 ? 0 : _offsets$x, _offsets$y = offsets.y, y = _offsets$y === void 0 ? 0 : _offsets$y;
    var _ref3 = typeof roundOffsets === "function" ? roundOffsets({
      x: x2,
      y
    }) : {
      x: x2,
      y
    };
    x2 = _ref3.x;
    y = _ref3.y;
    var hasX = offsets.hasOwnProperty("x");
    var hasY = offsets.hasOwnProperty("y");
    var sideX = left;
    var sideY = top;
    var win = window;
    if (adaptive) {
      var offsetParent = getOffsetParent(popper2);
      var heightProp = "clientHeight";
      var widthProp = "clientWidth";
      if (offsetParent === getWindow(popper2)) {
        offsetParent = getDocumentElement(popper2);
        if (getComputedStyle(offsetParent).position !== "static" && position === "absolute") {
          heightProp = "scrollHeight";
          widthProp = "scrollWidth";
        }
      }
      offsetParent = offsetParent;
      if (placement === top || (placement === left || placement === right) && variation === end) {
        sideY = bottom;
        var offsetY = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.height : offsetParent[heightProp];
        y -= offsetY - popperRect.height;
        y *= gpuAcceleration ? 1 : -1;
      }
      if (placement === left || (placement === top || placement === bottom) && variation === end) {
        sideX = right;
        var offsetX = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.width : offsetParent[widthProp];
        x2 -= offsetX - popperRect.width;
        x2 *= gpuAcceleration ? 1 : -1;
      }
    }
    var commonStyles = Object.assign({
      position
    }, adaptive && unsetSides);
    var _ref4 = roundOffsets === true ? roundOffsetsByDPR({
      x: x2,
      y
    }) : {
      x: x2,
      y
    };
    x2 = _ref4.x;
    y = _ref4.y;
    if (gpuAcceleration) {
      var _Object$assign;
      return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? "0" : "", _Object$assign[sideX] = hasX ? "0" : "", _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x2 + "px, " + y + "px)" : "translate3d(" + x2 + "px, " + y + "px, 0)", _Object$assign));
    }
    return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : "", _Object$assign2[sideX] = hasX ? x2 + "px" : "", _Object$assign2.transform = "", _Object$assign2));
  }
  function computeStyles(_ref5) {
    var state = _ref5.state, options = _ref5.options;
    var _options$gpuAccelerat = options.gpuAcceleration, gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat, _options$adaptive = options.adaptive, adaptive = _options$adaptive === void 0 ? true : _options$adaptive, _options$roundOffsets = options.roundOffsets, roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;
    if (true) {
      var transitionProperty = getComputedStyle(state.elements.popper).transitionProperty || "";
      if (adaptive && ["transform", "top", "right", "bottom", "left"].some(function(property) {
        return transitionProperty.indexOf(property) >= 0;
      })) {
        console.warn(["Popper: Detected CSS transitions on at least one of the following", 'CSS properties: "transform", "top", "right", "bottom", "left".', "\n\n", 'Disable the "computeStyles" modifier\'s `adaptive` option to allow', "for smooth transitions, or remove these properties from the CSS", "transition declaration on the popper element if only transitioning", "opacity or background-color for example.", "\n\n", "We recommend using the popper element as a wrapper around an inner", "element that can have any CSS property transitioned for animations."].join(" "));
      }
    }
    var commonStyles = {
      placement: getBasePlacement(state.placement),
      variation: getVariation(state.placement),
      popper: state.elements.popper,
      popperRect: state.rects.popper,
      gpuAcceleration,
      isFixed: state.options.strategy === "fixed"
    };
    if (state.modifiersData.popperOffsets != null) {
      state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
        offsets: state.modifiersData.popperOffsets,
        position: state.options.strategy,
        adaptive,
        roundOffsets
      })));
    }
    if (state.modifiersData.arrow != null) {
      state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
        offsets: state.modifiersData.arrow,
        position: "absolute",
        adaptive: false,
        roundOffsets
      })));
    }
    state.attributes.popper = Object.assign({}, state.attributes.popper, {
      "data-popper-placement": state.placement
    });
  }
  var computeStyles_default = {
    name: "computeStyles",
    enabled: true,
    phase: "beforeWrite",
    fn: computeStyles,
    data: {}
  };

  // ../../node_modules/@popperjs/core/lib/modifiers/eventListeners.js
  var passive = {
    passive: true
  };
  function effect3(_ref) {
    var state = _ref.state, instance2 = _ref.instance, options = _ref.options;
    var _options$scroll = options.scroll, scroll = _options$scroll === void 0 ? true : _options$scroll, _options$resize = options.resize, resize = _options$resize === void 0 ? true : _options$resize;
    var window2 = getWindow(state.elements.popper);
    var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);
    if (scroll) {
      scrollParents.forEach(function(scrollParent) {
        scrollParent.addEventListener("scroll", instance2.update, passive);
      });
    }
    if (resize) {
      window2.addEventListener("resize", instance2.update, passive);
    }
    return function() {
      if (scroll) {
        scrollParents.forEach(function(scrollParent) {
          scrollParent.removeEventListener("scroll", instance2.update, passive);
        });
      }
      if (resize) {
        window2.removeEventListener("resize", instance2.update, passive);
      }
    };
  }
  var eventListeners_default = {
    name: "eventListeners",
    enabled: true,
    phase: "write",
    fn: function fn() {
    },
    effect: effect3,
    data: {}
  };

  // ../../node_modules/@popperjs/core/lib/utils/getOppositePlacement.js
  var hash = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
  };
  function getOppositePlacement(placement) {
    return placement.replace(/left|right|bottom|top/g, function(matched) {
      return hash[matched];
    });
  }

  // ../../node_modules/@popperjs/core/lib/utils/getOppositeVariationPlacement.js
  var hash2 = {
    start: "end",
    end: "start"
  };
  function getOppositeVariationPlacement(placement) {
    return placement.replace(/start|end/g, function(matched) {
      return hash2[matched];
    });
  }

  // ../../node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js
  function getWindowScroll(node) {
    var win = getWindow(node);
    var scrollLeft = win.pageXOffset;
    var scrollTop = win.pageYOffset;
    return {
      scrollLeft,
      scrollTop
    };
  }

  // ../../node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js
  function getWindowScrollBarX(element) {
    return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
  }

  // ../../node_modules/@popperjs/core/lib/dom-utils/getViewportRect.js
  function getViewportRect(element) {
    var win = getWindow(element);
    var html = getDocumentElement(element);
    var visualViewport = win.visualViewport;
    var width = html.clientWidth;
    var height = html.clientHeight;
    var x2 = 0;
    var y = 0;
    if (visualViewport) {
      width = visualViewport.width;
      height = visualViewport.height;
      if (!/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
        x2 = visualViewport.offsetLeft;
        y = visualViewport.offsetTop;
      }
    }
    return {
      width,
      height,
      x: x2 + getWindowScrollBarX(element),
      y
    };
  }

  // ../../node_modules/@popperjs/core/lib/dom-utils/getDocumentRect.js
  function getDocumentRect(element) {
    var _element$ownerDocumen;
    var html = getDocumentElement(element);
    var winScroll = getWindowScroll(element);
    var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
    var width = max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
    var height = max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
    var x2 = -winScroll.scrollLeft + getWindowScrollBarX(element);
    var y = -winScroll.scrollTop;
    if (getComputedStyle(body || html).direction === "rtl") {
      x2 += max(html.clientWidth, body ? body.clientWidth : 0) - width;
    }
    return {
      width,
      height,
      x: x2,
      y
    };
  }

  // ../../node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js
  function isScrollParent(element) {
    var _getComputedStyle = getComputedStyle(element), overflow = _getComputedStyle.overflow, overflowX = _getComputedStyle.overflowX, overflowY = _getComputedStyle.overflowY;
    return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
  }

  // ../../node_modules/@popperjs/core/lib/dom-utils/getScrollParent.js
  function getScrollParent(node) {
    if (["html", "body", "#document"].indexOf(getNodeName(node)) >= 0) {
      return node.ownerDocument.body;
    }
    if (isHTMLElement(node) && isScrollParent(node)) {
      return node;
    }
    return getScrollParent(getParentNode(node));
  }

  // ../../node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js
  function listScrollParents(element, list) {
    var _element$ownerDocumen;
    if (list === void 0) {
      list = [];
    }
    var scrollParent = getScrollParent(element);
    var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
    var win = getWindow(scrollParent);
    var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
    var updatedList = list.concat(target);
    return isBody ? updatedList : updatedList.concat(listScrollParents(getParentNode(target)));
  }

  // ../../node_modules/@popperjs/core/lib/utils/rectToClientRect.js
  function rectToClientRect(rect) {
    return Object.assign({}, rect, {
      left: rect.x,
      top: rect.y,
      right: rect.x + rect.width,
      bottom: rect.y + rect.height
    });
  }

  // ../../node_modules/@popperjs/core/lib/dom-utils/getClippingRect.js
  function getInnerBoundingClientRect(element) {
    var rect = getBoundingClientRect(element);
    rect.top = rect.top + element.clientTop;
    rect.left = rect.left + element.clientLeft;
    rect.bottom = rect.top + element.clientHeight;
    rect.right = rect.left + element.clientWidth;
    rect.width = element.clientWidth;
    rect.height = element.clientHeight;
    rect.x = rect.left;
    rect.y = rect.top;
    return rect;
  }
  function getClientRectFromMixedType(element, clippingParent) {
    return clippingParent === viewport ? rectToClientRect(getViewportRect(element)) : isElement(clippingParent) ? getInnerBoundingClientRect(clippingParent) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
  }
  function getClippingParents(element) {
    var clippingParents2 = listScrollParents(getParentNode(element));
    var canEscapeClipping = ["absolute", "fixed"].indexOf(getComputedStyle(element).position) >= 0;
    var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;
    if (!isElement(clipperElement)) {
      return [];
    }
    return clippingParents2.filter(function(clippingParent) {
      return isElement(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== "body";
    });
  }
  function getClippingRect(element, boundary, rootBoundary) {
    var mainClippingParents = boundary === "clippingParents" ? getClippingParents(element) : [].concat(boundary);
    var clippingParents2 = [].concat(mainClippingParents, [rootBoundary]);
    var firstClippingParent = clippingParents2[0];
    var clippingRect = clippingParents2.reduce(function(accRect, clippingParent) {
      var rect = getClientRectFromMixedType(element, clippingParent);
      accRect.top = max(rect.top, accRect.top);
      accRect.right = min(rect.right, accRect.right);
      accRect.bottom = min(rect.bottom, accRect.bottom);
      accRect.left = max(rect.left, accRect.left);
      return accRect;
    }, getClientRectFromMixedType(element, firstClippingParent));
    clippingRect.width = clippingRect.right - clippingRect.left;
    clippingRect.height = clippingRect.bottom - clippingRect.top;
    clippingRect.x = clippingRect.left;
    clippingRect.y = clippingRect.top;
    return clippingRect;
  }

  // ../../node_modules/@popperjs/core/lib/utils/computeOffsets.js
  function computeOffsets(_ref) {
    var reference2 = _ref.reference, element = _ref.element, placement = _ref.placement;
    var basePlacement = placement ? getBasePlacement(placement) : null;
    var variation = placement ? getVariation(placement) : null;
    var commonX = reference2.x + reference2.width / 2 - element.width / 2;
    var commonY = reference2.y + reference2.height / 2 - element.height / 2;
    var offsets;
    switch (basePlacement) {
      case top:
        offsets = {
          x: commonX,
          y: reference2.y - element.height
        };
        break;
      case bottom:
        offsets = {
          x: commonX,
          y: reference2.y + reference2.height
        };
        break;
      case right:
        offsets = {
          x: reference2.x + reference2.width,
          y: commonY
        };
        break;
      case left:
        offsets = {
          x: reference2.x - element.width,
          y: commonY
        };
        break;
      default:
        offsets = {
          x: reference2.x,
          y: reference2.y
        };
    }
    var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;
    if (mainAxis != null) {
      var len = mainAxis === "y" ? "height" : "width";
      switch (variation) {
        case start:
          offsets[mainAxis] = offsets[mainAxis] - (reference2[len] / 2 - element[len] / 2);
          break;
        case end:
          offsets[mainAxis] = offsets[mainAxis] + (reference2[len] / 2 - element[len] / 2);
          break;
        default:
      }
    }
    return offsets;
  }

  // ../../node_modules/@popperjs/core/lib/utils/detectOverflow.js
  function detectOverflow(state, options) {
    if (options === void 0) {
      options = {};
    }
    var _options = options, _options$placement = _options.placement, placement = _options$placement === void 0 ? state.placement : _options$placement, _options$boundary = _options.boundary, boundary = _options$boundary === void 0 ? clippingParents : _options$boundary, _options$rootBoundary = _options.rootBoundary, rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary, _options$elementConte = _options.elementContext, elementContext = _options$elementConte === void 0 ? popper : _options$elementConte, _options$altBoundary = _options.altBoundary, altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary, _options$padding = _options.padding, padding = _options$padding === void 0 ? 0 : _options$padding;
    var paddingObject = mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
    var altContext = elementContext === popper ? reference : popper;
    var popperRect = state.rects.popper;
    var element = state.elements[altBoundary ? altContext : elementContext];
    var clippingClientRect = getClippingRect(isElement(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary);
    var referenceClientRect = getBoundingClientRect(state.elements.reference);
    var popperOffsets2 = computeOffsets({
      reference: referenceClientRect,
      element: popperRect,
      strategy: "absolute",
      placement
    });
    var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets2));
    var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect;
    var overflowOffsets = {
      top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
      bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
      left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
      right: elementClientRect.right - clippingClientRect.right + paddingObject.right
    };
    var offsetData = state.modifiersData.offset;
    if (elementContext === popper && offsetData) {
      var offset2 = offsetData[placement];
      Object.keys(overflowOffsets).forEach(function(key) {
        var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
        var axis = [top, bottom].indexOf(key) >= 0 ? "y" : "x";
        overflowOffsets[key] += offset2[axis] * multiply;
      });
    }
    return overflowOffsets;
  }

  // ../../node_modules/@popperjs/core/lib/utils/computeAutoPlacement.js
  function computeAutoPlacement(state, options) {
    if (options === void 0) {
      options = {};
    }
    var _options = options, placement = _options.placement, boundary = _options.boundary, rootBoundary = _options.rootBoundary, padding = _options.padding, flipVariations = _options.flipVariations, _options$allowedAutoP = _options.allowedAutoPlacements, allowedAutoPlacements = _options$allowedAutoP === void 0 ? placements : _options$allowedAutoP;
    var variation = getVariation(placement);
    var placements2 = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function(placement2) {
      return getVariation(placement2) === variation;
    }) : basePlacements;
    var allowedPlacements = placements2.filter(function(placement2) {
      return allowedAutoPlacements.indexOf(placement2) >= 0;
    });
    if (allowedPlacements.length === 0) {
      allowedPlacements = placements2;
      if (true) {
        console.error(["Popper: The `allowedAutoPlacements` option did not allow any", "placements. Ensure the `placement` option matches the variation", "of the allowed placements.", 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(" "));
      }
    }
    var overflows = allowedPlacements.reduce(function(acc, placement2) {
      acc[placement2] = detectOverflow(state, {
        placement: placement2,
        boundary,
        rootBoundary,
        padding
      })[getBasePlacement(placement2)];
      return acc;
    }, {});
    return Object.keys(overflows).sort(function(a2, b2) {
      return overflows[a2] - overflows[b2];
    });
  }

  // ../../node_modules/@popperjs/core/lib/modifiers/flip.js
  function getExpandedFallbackPlacements(placement) {
    if (getBasePlacement(placement) === auto) {
      return [];
    }
    var oppositePlacement = getOppositePlacement(placement);
    return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
  }
  function flip(_ref) {
    var state = _ref.state, options = _ref.options, name = _ref.name;
    if (state.modifiersData[name]._skip) {
      return;
    }
    var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis, specifiedFallbackPlacements = options.fallbackPlacements, padding = options.padding, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, _options$flipVariatio = options.flipVariations, flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio, allowedAutoPlacements = options.allowedAutoPlacements;
    var preferredPlacement = state.options.placement;
    var basePlacement = getBasePlacement(preferredPlacement);
    var isBasePlacement = basePlacement === preferredPlacement;
    var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
    var placements2 = [preferredPlacement].concat(fallbackPlacements).reduce(function(acc, placement2) {
      return acc.concat(getBasePlacement(placement2) === auto ? computeAutoPlacement(state, {
        placement: placement2,
        boundary,
        rootBoundary,
        padding,
        flipVariations,
        allowedAutoPlacements
      }) : placement2);
    }, []);
    var referenceRect = state.rects.reference;
    var popperRect = state.rects.popper;
    var checksMap = /* @__PURE__ */ new Map();
    var makeFallbackChecks = true;
    var firstFittingPlacement = placements2[0];
    for (var i2 = 0; i2 < placements2.length; i2++) {
      var placement = placements2[i2];
      var _basePlacement = getBasePlacement(placement);
      var isStartVariation = getVariation(placement) === start;
      var isVertical = [top, bottom].indexOf(_basePlacement) >= 0;
      var len = isVertical ? "width" : "height";
      var overflow = detectOverflow(state, {
        placement,
        boundary,
        rootBoundary,
        altBoundary,
        padding
      });
      var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : top;
      if (referenceRect[len] > popperRect[len]) {
        mainVariationSide = getOppositePlacement(mainVariationSide);
      }
      var altVariationSide = getOppositePlacement(mainVariationSide);
      var checks = [];
      if (checkMainAxis) {
        checks.push(overflow[_basePlacement] <= 0);
      }
      if (checkAltAxis) {
        checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
      }
      if (checks.every(function(check) {
        return check;
      })) {
        firstFittingPlacement = placement;
        makeFallbackChecks = false;
        break;
      }
      checksMap.set(placement, checks);
    }
    if (makeFallbackChecks) {
      var numberOfChecks = flipVariations ? 3 : 1;
      var _loop = function _loop2(_i2) {
        var fittingPlacement = placements2.find(function(placement2) {
          var checks2 = checksMap.get(placement2);
          if (checks2) {
            return checks2.slice(0, _i2).every(function(check) {
              return check;
            });
          }
        });
        if (fittingPlacement) {
          firstFittingPlacement = fittingPlacement;
          return "break";
        }
      };
      for (var _i = numberOfChecks; _i > 0; _i--) {
        var _ret = _loop(_i);
        if (_ret === "break")
          break;
      }
    }
    if (state.placement !== firstFittingPlacement) {
      state.modifiersData[name]._skip = true;
      state.placement = firstFittingPlacement;
      state.reset = true;
    }
  }
  var flip_default = {
    name: "flip",
    enabled: true,
    phase: "main",
    fn: flip,
    requiresIfExists: ["offset"],
    data: {
      _skip: false
    }
  };

  // ../../node_modules/@popperjs/core/lib/modifiers/hide.js
  function getSideOffsets(overflow, rect, preventedOffsets) {
    if (preventedOffsets === void 0) {
      preventedOffsets = {
        x: 0,
        y: 0
      };
    }
    return {
      top: overflow.top - rect.height - preventedOffsets.y,
      right: overflow.right - rect.width + preventedOffsets.x,
      bottom: overflow.bottom - rect.height + preventedOffsets.y,
      left: overflow.left - rect.width - preventedOffsets.x
    };
  }
  function isAnySideFullyClipped(overflow) {
    return [top, right, bottom, left].some(function(side) {
      return overflow[side] >= 0;
    });
  }
  function hide(_ref) {
    var state = _ref.state, name = _ref.name;
    var referenceRect = state.rects.reference;
    var popperRect = state.rects.popper;
    var preventedOffsets = state.modifiersData.preventOverflow;
    var referenceOverflow = detectOverflow(state, {
      elementContext: "reference"
    });
    var popperAltOverflow = detectOverflow(state, {
      altBoundary: true
    });
    var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
    var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
    var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
    var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
    state.modifiersData[name] = {
      referenceClippingOffsets,
      popperEscapeOffsets,
      isReferenceHidden,
      hasPopperEscaped
    };
    state.attributes.popper = Object.assign({}, state.attributes.popper, {
      "data-popper-reference-hidden": isReferenceHidden,
      "data-popper-escaped": hasPopperEscaped
    });
  }
  var hide_default = {
    name: "hide",
    enabled: true,
    phase: "main",
    requiresIfExists: ["preventOverflow"],
    fn: hide
  };

  // ../../node_modules/@popperjs/core/lib/modifiers/offset.js
  function distanceAndSkiddingToXY(placement, rects, offset2) {
    var basePlacement = getBasePlacement(placement);
    var invertDistance = [left, top].indexOf(basePlacement) >= 0 ? -1 : 1;
    var _ref = typeof offset2 === "function" ? offset2(Object.assign({}, rects, {
      placement
    })) : offset2, skidding = _ref[0], distance = _ref[1];
    skidding = skidding || 0;
    distance = (distance || 0) * invertDistance;
    return [left, right].indexOf(basePlacement) >= 0 ? {
      x: distance,
      y: skidding
    } : {
      x: skidding,
      y: distance
    };
  }
  function offset(_ref2) {
    var state = _ref2.state, options = _ref2.options, name = _ref2.name;
    var _options$offset = options.offset, offset2 = _options$offset === void 0 ? [0, 0] : _options$offset;
    var data = placements.reduce(function(acc, placement) {
      acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset2);
      return acc;
    }, {});
    var _data$state$placement = data[state.placement], x2 = _data$state$placement.x, y = _data$state$placement.y;
    if (state.modifiersData.popperOffsets != null) {
      state.modifiersData.popperOffsets.x += x2;
      state.modifiersData.popperOffsets.y += y;
    }
    state.modifiersData[name] = data;
  }
  var offset_default = {
    name: "offset",
    enabled: true,
    phase: "main",
    requires: ["popperOffsets"],
    fn: offset
  };

  // ../../node_modules/@popperjs/core/lib/modifiers/popperOffsets.js
  function popperOffsets(_ref) {
    var state = _ref.state, name = _ref.name;
    state.modifiersData[name] = computeOffsets({
      reference: state.rects.reference,
      element: state.rects.popper,
      strategy: "absolute",
      placement: state.placement
    });
  }
  var popperOffsets_default = {
    name: "popperOffsets",
    enabled: true,
    phase: "read",
    fn: popperOffsets,
    data: {}
  };

  // ../../node_modules/@popperjs/core/lib/utils/getAltAxis.js
  function getAltAxis(axis) {
    return axis === "x" ? "y" : "x";
  }

  // ../../node_modules/@popperjs/core/lib/modifiers/preventOverflow.js
  function preventOverflow(_ref) {
    var state = _ref.state, options = _ref.options, name = _ref.name;
    var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, padding = options.padding, _options$tether = options.tether, tether = _options$tether === void 0 ? true : _options$tether, _options$tetherOffset = options.tetherOffset, tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
    var overflow = detectOverflow(state, {
      boundary,
      rootBoundary,
      padding,
      altBoundary
    });
    var basePlacement = getBasePlacement(state.placement);
    var variation = getVariation(state.placement);
    var isBasePlacement = !variation;
    var mainAxis = getMainAxisFromPlacement(basePlacement);
    var altAxis = getAltAxis(mainAxis);
    var popperOffsets2 = state.modifiersData.popperOffsets;
    var referenceRect = state.rects.reference;
    var popperRect = state.rects.popper;
    var tetherOffsetValue = typeof tetherOffset === "function" ? tetherOffset(Object.assign({}, state.rects, {
      placement: state.placement
    })) : tetherOffset;
    var normalizedTetherOffsetValue = typeof tetherOffsetValue === "number" ? {
      mainAxis: tetherOffsetValue,
      altAxis: tetherOffsetValue
    } : Object.assign({
      mainAxis: 0,
      altAxis: 0
    }, tetherOffsetValue);
    var offsetModifierState = state.modifiersData.offset ? state.modifiersData.offset[state.placement] : null;
    var data = {
      x: 0,
      y: 0
    };
    if (!popperOffsets2) {
      return;
    }
    if (checkMainAxis) {
      var _offsetModifierState$;
      var mainSide = mainAxis === "y" ? top : left;
      var altSide = mainAxis === "y" ? bottom : right;
      var len = mainAxis === "y" ? "height" : "width";
      var offset2 = popperOffsets2[mainAxis];
      var min2 = offset2 + overflow[mainSide];
      var max2 = offset2 - overflow[altSide];
      var additive = tether ? -popperRect[len] / 2 : 0;
      var minLen = variation === start ? referenceRect[len] : popperRect[len];
      var maxLen = variation === start ? -popperRect[len] : -referenceRect[len];
      var arrowElement = state.elements.arrow;
      var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
        width: 0,
        height: 0
      };
      var arrowPaddingObject = state.modifiersData["arrow#persistent"] ? state.modifiersData["arrow#persistent"].padding : getFreshSideObject();
      var arrowPaddingMin = arrowPaddingObject[mainSide];
      var arrowPaddingMax = arrowPaddingObject[altSide];
      var arrowLen = within(0, referenceRect[len], arrowRect[len]);
      var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;
      var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;
      var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
      var clientOffset = arrowOffsetParent ? mainAxis === "y" ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
      var offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0;
      var tetherMin = offset2 + minOffset - offsetModifierValue - clientOffset;
      var tetherMax = offset2 + maxOffset - offsetModifierValue;
      var preventedOffset = within(tether ? min(min2, tetherMin) : min2, offset2, tether ? max(max2, tetherMax) : max2);
      popperOffsets2[mainAxis] = preventedOffset;
      data[mainAxis] = preventedOffset - offset2;
    }
    if (checkAltAxis) {
      var _offsetModifierState$2;
      var _mainSide = mainAxis === "x" ? top : left;
      var _altSide = mainAxis === "x" ? bottom : right;
      var _offset = popperOffsets2[altAxis];
      var _len = altAxis === "y" ? "height" : "width";
      var _min = _offset + overflow[_mainSide];
      var _max = _offset - overflow[_altSide];
      var isOriginSide = [top, left].indexOf(basePlacement) !== -1;
      var _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0;
      var _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis;
      var _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max;
      var _preventedOffset = tether && isOriginSide ? withinMaxClamp(_tetherMin, _offset, _tetherMax) : within(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);
      popperOffsets2[altAxis] = _preventedOffset;
      data[altAxis] = _preventedOffset - _offset;
    }
    state.modifiersData[name] = data;
  }
  var preventOverflow_default = {
    name: "preventOverflow",
    enabled: true,
    phase: "main",
    fn: preventOverflow,
    requiresIfExists: ["offset"]
  };

  // ../../node_modules/@popperjs/core/lib/dom-utils/getHTMLElementScroll.js
  function getHTMLElementScroll(element) {
    return {
      scrollLeft: element.scrollLeft,
      scrollTop: element.scrollTop
    };
  }

  // ../../node_modules/@popperjs/core/lib/dom-utils/getNodeScroll.js
  function getNodeScroll(node) {
    if (node === getWindow(node) || !isHTMLElement(node)) {
      return getWindowScroll(node);
    } else {
      return getHTMLElementScroll(node);
    }
  }

  // ../../node_modules/@popperjs/core/lib/dom-utils/getCompositeRect.js
  function isElementScaled(element) {
    var rect = element.getBoundingClientRect();
    var scaleX = round(rect.width) / element.offsetWidth || 1;
    var scaleY = round(rect.height) / element.offsetHeight || 1;
    return scaleX !== 1 || scaleY !== 1;
  }
  function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
    if (isFixed === void 0) {
      isFixed = false;
    }
    var isOffsetParentAnElement = isHTMLElement(offsetParent);
    var offsetParentIsScaled = isHTMLElement(offsetParent) && isElementScaled(offsetParent);
    var documentElement = getDocumentElement(offsetParent);
    var rect = getBoundingClientRect(elementOrVirtualElement, offsetParentIsScaled);
    var scroll = {
      scrollLeft: 0,
      scrollTop: 0
    };
    var offsets = {
      x: 0,
      y: 0
    };
    if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
      if (getNodeName(offsetParent) !== "body" || isScrollParent(documentElement)) {
        scroll = getNodeScroll(offsetParent);
      }
      if (isHTMLElement(offsetParent)) {
        offsets = getBoundingClientRect(offsetParent, true);
        offsets.x += offsetParent.clientLeft;
        offsets.y += offsetParent.clientTop;
      } else if (documentElement) {
        offsets.x = getWindowScrollBarX(documentElement);
      }
    }
    return {
      x: rect.left + scroll.scrollLeft - offsets.x,
      y: rect.top + scroll.scrollTop - offsets.y,
      width: rect.width,
      height: rect.height
    };
  }

  // ../../node_modules/@popperjs/core/lib/utils/orderModifiers.js
  function order(modifiers) {
    var map = /* @__PURE__ */ new Map();
    var visited = /* @__PURE__ */ new Set();
    var result = [];
    modifiers.forEach(function(modifier) {
      map.set(modifier.name, modifier);
    });
    function sort(modifier) {
      visited.add(modifier.name);
      var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
      requires.forEach(function(dep) {
        if (!visited.has(dep)) {
          var depModifier = map.get(dep);
          if (depModifier) {
            sort(depModifier);
          }
        }
      });
      result.push(modifier);
    }
    modifiers.forEach(function(modifier) {
      if (!visited.has(modifier.name)) {
        sort(modifier);
      }
    });
    return result;
  }
  function orderModifiers(modifiers) {
    var orderedModifiers = order(modifiers);
    return modifierPhases.reduce(function(acc, phase) {
      return acc.concat(orderedModifiers.filter(function(modifier) {
        return modifier.phase === phase;
      }));
    }, []);
  }

  // ../../node_modules/@popperjs/core/lib/utils/debounce.js
  function debounce(fn3) {
    var pending;
    return function() {
      if (!pending) {
        pending = new Promise(function(resolve) {
          Promise.resolve().then(function() {
            pending = void 0;
            resolve(fn3());
          });
        });
      }
      return pending;
    };
  }

  // ../../node_modules/@popperjs/core/lib/utils/format.js
  function format(str) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    return [].concat(args).reduce(function(p2, c2) {
      return p2.replace(/%s/, c2);
    }, str);
  }

  // ../../node_modules/@popperjs/core/lib/utils/validateModifiers.js
  var INVALID_MODIFIER_ERROR = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s';
  var MISSING_DEPENDENCY_ERROR = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available';
  var VALID_PROPERTIES = ["name", "enabled", "phase", "fn", "effect", "requires", "options"];
  function validateModifiers(modifiers) {
    modifiers.forEach(function(modifier) {
      [].concat(Object.keys(modifier), VALID_PROPERTIES).filter(function(value, index2, self2) {
        return self2.indexOf(value) === index2;
      }).forEach(function(key) {
        switch (key) {
          case "name":
            if (typeof modifier.name !== "string") {
              console.error(format(INVALID_MODIFIER_ERROR, String(modifier.name), '"name"', '"string"', '"' + String(modifier.name) + '"'));
            }
            break;
          case "enabled":
            if (typeof modifier.enabled !== "boolean") {
              console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"enabled"', '"boolean"', '"' + String(modifier.enabled) + '"'));
            }
            break;
          case "phase":
            if (modifierPhases.indexOf(modifier.phase) < 0) {
              console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"phase"', "either " + modifierPhases.join(", "), '"' + String(modifier.phase) + '"'));
            }
            break;
          case "fn":
            if (typeof modifier.fn !== "function") {
              console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"fn"', '"function"', '"' + String(modifier.fn) + '"'));
            }
            break;
          case "effect":
            if (modifier.effect != null && typeof modifier.effect !== "function") {
              console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"effect"', '"function"', '"' + String(modifier.fn) + '"'));
            }
            break;
          case "requires":
            if (modifier.requires != null && !Array.isArray(modifier.requires)) {
              console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"requires"', '"array"', '"' + String(modifier.requires) + '"'));
            }
            break;
          case "requiresIfExists":
            if (!Array.isArray(modifier.requiresIfExists)) {
              console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"requiresIfExists"', '"array"', '"' + String(modifier.requiresIfExists) + '"'));
            }
            break;
          case "options":
          case "data":
            break;
          default:
            console.error('PopperJS: an invalid property has been provided to the "' + modifier.name + '" modifier, valid properties are ' + VALID_PROPERTIES.map(function(s2) {
              return '"' + s2 + '"';
            }).join(", ") + '; but "' + key + '" was provided.');
        }
        modifier.requires && modifier.requires.forEach(function(requirement) {
          if (modifiers.find(function(mod) {
            return mod.name === requirement;
          }) == null) {
            console.error(format(MISSING_DEPENDENCY_ERROR, String(modifier.name), requirement, requirement));
          }
        });
      });
    });
  }

  // ../../node_modules/@popperjs/core/lib/utils/uniqueBy.js
  function uniqueBy(arr, fn3) {
    var identifiers = /* @__PURE__ */ new Set();
    return arr.filter(function(item) {
      var identifier = fn3(item);
      if (!identifiers.has(identifier)) {
        identifiers.add(identifier);
        return true;
      }
    });
  }

  // ../../node_modules/@popperjs/core/lib/utils/mergeByName.js
  function mergeByName(modifiers) {
    var merged = modifiers.reduce(function(merged2, current) {
      var existing = merged2[current.name];
      merged2[current.name] = existing ? Object.assign({}, existing, current, {
        options: Object.assign({}, existing.options, current.options),
        data: Object.assign({}, existing.data, current.data)
      }) : current;
      return merged2;
    }, {});
    return Object.keys(merged).map(function(key) {
      return merged[key];
    });
  }

  // ../../node_modules/@popperjs/core/lib/createPopper.js
  var INVALID_ELEMENT_ERROR = "Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.";
  var INFINITE_LOOP_ERROR = "Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.";
  var DEFAULT_OPTIONS = {
    placement: "bottom",
    modifiers: [],
    strategy: "absolute"
  };
  function areValidElements() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return !args.some(function(element) {
      return !(element && typeof element.getBoundingClientRect === "function");
    });
  }
  function popperGenerator(generatorOptions) {
    if (generatorOptions === void 0) {
      generatorOptions = {};
    }
    var _generatorOptions = generatorOptions, _generatorOptions$def = _generatorOptions.defaultModifiers, defaultModifiers2 = _generatorOptions$def === void 0 ? [] : _generatorOptions$def, _generatorOptions$def2 = _generatorOptions.defaultOptions, defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
    return function createPopper2(reference2, popper2, options) {
      if (options === void 0) {
        options = defaultOptions;
      }
      var state = {
        placement: "bottom",
        orderedModifiers: [],
        options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
        modifiersData: {},
        elements: {
          reference: reference2,
          popper: popper2
        },
        attributes: {},
        styles: {}
      };
      var effectCleanupFns = [];
      var isDestroyed = false;
      var instance2 = {
        state,
        setOptions: function setOptions(setOptionsAction) {
          var options2 = typeof setOptionsAction === "function" ? setOptionsAction(state.options) : setOptionsAction;
          cleanupModifierEffects();
          state.options = Object.assign({}, defaultOptions, state.options, options2);
          state.scrollParents = {
            reference: isElement(reference2) ? listScrollParents(reference2) : reference2.contextElement ? listScrollParents(reference2.contextElement) : [],
            popper: listScrollParents(popper2)
          };
          var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers2, state.options.modifiers)));
          state.orderedModifiers = orderedModifiers.filter(function(m3) {
            return m3.enabled;
          });
          if (true) {
            var modifiers = uniqueBy([].concat(orderedModifiers, state.options.modifiers), function(_ref) {
              var name = _ref.name;
              return name;
            });
            validateModifiers(modifiers);
            if (getBasePlacement(state.options.placement) === auto) {
              var flipModifier = state.orderedModifiers.find(function(_ref2) {
                var name = _ref2.name;
                return name === "flip";
              });
              if (!flipModifier) {
                console.error(['Popper: "auto" placements require the "flip" modifier be', "present and enabled to work."].join(" "));
              }
            }
            var _getComputedStyle = getComputedStyle(popper2), marginTop = _getComputedStyle.marginTop, marginRight = _getComputedStyle.marginRight, marginBottom = _getComputedStyle.marginBottom, marginLeft = _getComputedStyle.marginLeft;
            if ([marginTop, marginRight, marginBottom, marginLeft].some(function(margin) {
              return parseFloat(margin);
            })) {
              console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', "between the popper and its reference element or boundary.", "To replicate margin, use the `offset` modifier, as well as", "the `padding` option in the `preventOverflow` and `flip`", "modifiers."].join(" "));
            }
          }
          runModifierEffects();
          return instance2.update();
        },
        forceUpdate: function forceUpdate() {
          if (isDestroyed) {
            return;
          }
          var _state$elements = state.elements, reference3 = _state$elements.reference, popper3 = _state$elements.popper;
          if (!areValidElements(reference3, popper3)) {
            if (true) {
              console.error(INVALID_ELEMENT_ERROR);
            }
            return;
          }
          state.rects = {
            reference: getCompositeRect(reference3, getOffsetParent(popper3), state.options.strategy === "fixed"),
            popper: getLayoutRect(popper3)
          };
          state.reset = false;
          state.placement = state.options.placement;
          state.orderedModifiers.forEach(function(modifier) {
            return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
          });
          var __debug_loops__ = 0;
          for (var index2 = 0; index2 < state.orderedModifiers.length; index2++) {
            if (true) {
              __debug_loops__ += 1;
              if (__debug_loops__ > 100) {
                console.error(INFINITE_LOOP_ERROR);
                break;
              }
            }
            if (state.reset === true) {
              state.reset = false;
              index2 = -1;
              continue;
            }
            var _state$orderedModifie = state.orderedModifiers[index2], fn3 = _state$orderedModifie.fn, _state$orderedModifie2 = _state$orderedModifie.options, _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2, name = _state$orderedModifie.name;
            if (typeof fn3 === "function") {
              state = fn3({
                state,
                options: _options,
                name,
                instance: instance2
              }) || state;
            }
          }
        },
        update: debounce(function() {
          return new Promise(function(resolve) {
            instance2.forceUpdate();
            resolve(state);
          });
        }),
        destroy: function destroy() {
          cleanupModifierEffects();
          isDestroyed = true;
        }
      };
      if (!areValidElements(reference2, popper2)) {
        if (true) {
          console.error(INVALID_ELEMENT_ERROR);
        }
        return instance2;
      }
      instance2.setOptions(options).then(function(state2) {
        if (!isDestroyed && options.onFirstUpdate) {
          options.onFirstUpdate(state2);
        }
      });
      function runModifierEffects() {
        state.orderedModifiers.forEach(function(_ref3) {
          var name = _ref3.name, _ref3$options = _ref3.options, options2 = _ref3$options === void 0 ? {} : _ref3$options, effect5 = _ref3.effect;
          if (typeof effect5 === "function") {
            var cleanupFn = effect5({
              state,
              name,
              instance: instance2,
              options: options2
            });
            var noopFn = function noopFn2() {
            };
            effectCleanupFns.push(cleanupFn || noopFn);
          }
        });
      }
      function cleanupModifierEffects() {
        effectCleanupFns.forEach(function(fn3) {
          return fn3();
        });
        effectCleanupFns = [];
      }
      return instance2;
    };
  }

  // ../../node_modules/@popperjs/core/lib/popper.js
  var defaultModifiers = [eventListeners_default, popperOffsets_default, computeStyles_default, applyStyles_default, offset_default, flip_default, preventOverflow_default, arrow_default, hide_default];
  var createPopper = /* @__PURE__ */ popperGenerator({
    defaultModifiers
  });

  // ../../node_modules/tippy.js/dist/tippy.esm.js
  var BOX_CLASS = "tippy-box";
  var CONTENT_CLASS = "tippy-content";
  var BACKDROP_CLASS = "tippy-backdrop";
  var ARROW_CLASS = "tippy-arrow";
  var SVG_ARROW_CLASS = "tippy-svg-arrow";
  var TOUCH_OPTIONS = {
    passive: true,
    capture: true
  };
  var TIPPY_DEFAULT_APPEND_TO = function TIPPY_DEFAULT_APPEND_TO2() {
    return document.body;
  };
  function hasOwnProperty(obj, key) {
    return {}.hasOwnProperty.call(obj, key);
  }
  function getValueAtIndexOrReturn(value, index2, defaultValue) {
    if (Array.isArray(value)) {
      var v2 = value[index2];
      return v2 == null ? Array.isArray(defaultValue) ? defaultValue[index2] : defaultValue : v2;
    }
    return value;
  }
  function isType(value, type) {
    var str = {}.toString.call(value);
    return str.indexOf("[object") === 0 && str.indexOf(type + "]") > -1;
  }
  function invokeWithArgsOrReturn(value, args) {
    return typeof value === "function" ? value.apply(void 0, args) : value;
  }
  function debounce2(fn3, ms) {
    if (ms === 0) {
      return fn3;
    }
    var timeout;
    return function(arg) {
      clearTimeout(timeout);
      timeout = setTimeout(function() {
        fn3(arg);
      }, ms);
    };
  }
  function removeProperties(obj, keys) {
    var clone = Object.assign({}, obj);
    keys.forEach(function(key) {
      delete clone[key];
    });
    return clone;
  }
  function splitBySpaces(value) {
    return value.split(/\s+/).filter(Boolean);
  }
  function normalizeToArray(value) {
    return [].concat(value);
  }
  function pushIfUnique(arr, value) {
    if (arr.indexOf(value) === -1) {
      arr.push(value);
    }
  }
  function unique(arr) {
    return arr.filter(function(item, index2) {
      return arr.indexOf(item) === index2;
    });
  }
  function getBasePlacement2(placement) {
    return placement.split("-")[0];
  }
  function arrayFrom(value) {
    return [].slice.call(value);
  }
  function removeUndefinedProps(obj) {
    return Object.keys(obj).reduce(function(acc, key) {
      if (obj[key] !== void 0) {
        acc[key] = obj[key];
      }
      return acc;
    }, {});
  }
  function div() {
    return document.createElement("div");
  }
  function isElement2(value) {
    return ["Element", "Fragment"].some(function(type) {
      return isType(value, type);
    });
  }
  function isNodeList(value) {
    return isType(value, "NodeList");
  }
  function isMouseEvent(value) {
    return isType(value, "MouseEvent");
  }
  function isReferenceElement(value) {
    return !!(value && value._tippy && value._tippy.reference === value);
  }
  function getArrayOfElements(value) {
    if (isElement2(value)) {
      return [value];
    }
    if (isNodeList(value)) {
      return arrayFrom(value);
    }
    if (Array.isArray(value)) {
      return value;
    }
    return arrayFrom(document.querySelectorAll(value));
  }
  function setTransitionDuration(els, value) {
    els.forEach(function(el) {
      if (el) {
        el.style.transitionDuration = value + "ms";
      }
    });
  }
  function setVisibilityState(els, state) {
    els.forEach(function(el) {
      if (el) {
        el.setAttribute("data-state", state);
      }
    });
  }
  function getOwnerDocument(elementOrElements) {
    var _element$ownerDocumen;
    var _normalizeToArray = normalizeToArray(elementOrElements), element = _normalizeToArray[0];
    return element != null && (_element$ownerDocumen = element.ownerDocument) != null && _element$ownerDocumen.body ? element.ownerDocument : document;
  }
  function isCursorOutsideInteractiveBorder(popperTreeData, event) {
    var clientX = event.clientX, clientY = event.clientY;
    return popperTreeData.every(function(_ref) {
      var popperRect = _ref.popperRect, popperState = _ref.popperState, props = _ref.props;
      var interactiveBorder = props.interactiveBorder;
      var basePlacement = getBasePlacement2(popperState.placement);
      var offsetData = popperState.modifiersData.offset;
      if (!offsetData) {
        return true;
      }
      var topDistance = basePlacement === "bottom" ? offsetData.top.y : 0;
      var bottomDistance = basePlacement === "top" ? offsetData.bottom.y : 0;
      var leftDistance = basePlacement === "right" ? offsetData.left.x : 0;
      var rightDistance = basePlacement === "left" ? offsetData.right.x : 0;
      var exceedsTop = popperRect.top - clientY + topDistance > interactiveBorder;
      var exceedsBottom = clientY - popperRect.bottom - bottomDistance > interactiveBorder;
      var exceedsLeft = popperRect.left - clientX + leftDistance > interactiveBorder;
      var exceedsRight = clientX - popperRect.right - rightDistance > interactiveBorder;
      return exceedsTop || exceedsBottom || exceedsLeft || exceedsRight;
    });
  }
  function updateTransitionEndListener(box, action, listener) {
    var method = action + "EventListener";
    ["transitionend", "webkitTransitionEnd"].forEach(function(event) {
      box[method](event, listener);
    });
  }
  function actualContains(parent, child) {
    var target = child;
    while (target) {
      var _target$getRootNode;
      if (parent.contains(target)) {
        return true;
      }
      target = target.getRootNode == null ? void 0 : (_target$getRootNode = target.getRootNode()) == null ? void 0 : _target$getRootNode.host;
    }
    return false;
  }
  var currentInput = {
    isTouch: false
  };
  var lastMouseMoveTime = 0;
  function onDocumentTouchStart() {
    if (currentInput.isTouch) {
      return;
    }
    currentInput.isTouch = true;
    if (window.performance) {
      document.addEventListener("mousemove", onDocumentMouseMove);
    }
  }
  function onDocumentMouseMove() {
    var now2 = performance.now();
    if (now2 - lastMouseMoveTime < 20) {
      currentInput.isTouch = false;
      document.removeEventListener("mousemove", onDocumentMouseMove);
    }
    lastMouseMoveTime = now2;
  }
  function onWindowBlur() {
    var activeElement = document.activeElement;
    if (isReferenceElement(activeElement)) {
      var instance2 = activeElement._tippy;
      if (activeElement.blur && !instance2.state.isVisible) {
        activeElement.blur();
      }
    }
  }
  function bindGlobalEventListeners() {
    document.addEventListener("touchstart", onDocumentTouchStart, TOUCH_OPTIONS);
    window.addEventListener("blur", onWindowBlur);
  }
  var isBrowser = typeof window !== "undefined" && typeof document !== "undefined";
  var isIE11 = isBrowser ? !!window.msCrypto : false;
  function createMemoryLeakWarning(method) {
    var txt = method === "destroy" ? "n already-" : " ";
    return [method + "() was called on a" + txt + "destroyed instance. This is a no-op but", "indicates a potential memory leak."].join(" ");
  }
  function clean(value) {
    var spacesAndTabs = /[ \t]{2,}/g;
    var lineStartWithSpaces = /^[ \t]*/gm;
    return value.replace(spacesAndTabs, " ").replace(lineStartWithSpaces, "").trim();
  }
  function getDevMessage(message) {
    return clean("\n  %ctippy.js\n\n  %c" + clean(message) + "\n\n  %c\u{1F477}\u200D This is a development-only message. It will be removed in production.\n  ");
  }
  function getFormattedMessage(message) {
    return [
      getDevMessage(message),
      "color: #00C584; font-size: 1.3em; font-weight: bold;",
      "line-height: 1.5",
      "color: #a6a095;"
    ];
  }
  var visitedMessages;
  if (true) {
    resetVisitedMessages();
  }
  function resetVisitedMessages() {
    visitedMessages = /* @__PURE__ */ new Set();
  }
  function warnWhen(condition, message) {
    if (condition && !visitedMessages.has(message)) {
      var _console;
      visitedMessages.add(message);
      (_console = console).warn.apply(_console, getFormattedMessage(message));
    }
  }
  function errorWhen(condition, message) {
    if (condition && !visitedMessages.has(message)) {
      var _console2;
      visitedMessages.add(message);
      (_console2 = console).error.apply(_console2, getFormattedMessage(message));
    }
  }
  function validateTargets(targets) {
    var didPassFalsyValue = !targets;
    var didPassPlainObject = Object.prototype.toString.call(targets) === "[object Object]" && !targets.addEventListener;
    errorWhen(didPassFalsyValue, ["tippy() was passed", "`" + String(targets) + "`", "as its targets (first) argument. Valid types are: String, Element,", "Element[], or NodeList."].join(" "));
    errorWhen(didPassPlainObject, ["tippy() was passed a plain object which is not supported as an argument", "for virtual positioning. Use props.getReferenceClientRect instead."].join(" "));
  }
  var pluginProps = {
    animateFill: false,
    followCursor: false,
    inlinePositioning: false,
    sticky: false
  };
  var renderProps = {
    allowHTML: false,
    animation: "fade",
    arrow: true,
    content: "",
    inertia: false,
    maxWidth: 350,
    role: "tooltip",
    theme: "",
    zIndex: 9999
  };
  var defaultProps2 = Object.assign({
    appendTo: TIPPY_DEFAULT_APPEND_TO,
    aria: {
      content: "auto",
      expanded: "auto"
    },
    delay: 0,
    duration: [300, 250],
    getReferenceClientRect: null,
    hideOnClick: true,
    ignoreAttributes: false,
    interactive: false,
    interactiveBorder: 2,
    interactiveDebounce: 0,
    moveTransition: "",
    offset: [0, 10],
    onAfterUpdate: function onAfterUpdate() {
    },
    onBeforeUpdate: function onBeforeUpdate() {
    },
    onCreate: function onCreate() {
    },
    onDestroy: function onDestroy() {
    },
    onHidden: function onHidden() {
    },
    onHide: function onHide() {
    },
    onMount: function onMount() {
    },
    onShow: function onShow() {
    },
    onShown: function onShown() {
    },
    onTrigger: function onTrigger() {
    },
    onUntrigger: function onUntrigger() {
    },
    onClickOutside: function onClickOutside() {
    },
    placement: "top",
    plugins: [],
    popperOptions: {},
    render: null,
    showOnCreate: false,
    touch: true,
    trigger: "mouseenter focus",
    triggerTarget: null
  }, pluginProps, renderProps);
  var defaultKeys = Object.keys(defaultProps2);
  var setDefaultProps = function setDefaultProps2(partialProps) {
    if (true) {
      validateProps(partialProps, []);
    }
    var keys = Object.keys(partialProps);
    keys.forEach(function(key) {
      defaultProps2[key] = partialProps[key];
    });
  };
  function getExtendedPassedProps(passedProps) {
    var plugins = passedProps.plugins || [];
    var pluginProps2 = plugins.reduce(function(acc, plugin) {
      var name = plugin.name, defaultValue = plugin.defaultValue;
      if (name) {
        var _name;
        acc[name] = passedProps[name] !== void 0 ? passedProps[name] : (_name = defaultProps2[name]) != null ? _name : defaultValue;
      }
      return acc;
    }, {});
    return Object.assign({}, passedProps, pluginProps2);
  }
  function getDataAttributeProps(reference2, plugins) {
    var propKeys = plugins ? Object.keys(getExtendedPassedProps(Object.assign({}, defaultProps2, {
      plugins
    }))) : defaultKeys;
    var props = propKeys.reduce(function(acc, key) {
      var valueAsString = (reference2.getAttribute("data-tippy-" + key) || "").trim();
      if (!valueAsString) {
        return acc;
      }
      if (key === "content") {
        acc[key] = valueAsString;
      } else {
        try {
          acc[key] = JSON.parse(valueAsString);
        } catch (e2) {
          acc[key] = valueAsString;
        }
      }
      return acc;
    }, {});
    return props;
  }
  function evaluateProps(reference2, props) {
    var out = Object.assign({}, props, {
      content: invokeWithArgsOrReturn(props.content, [reference2])
    }, props.ignoreAttributes ? {} : getDataAttributeProps(reference2, props.plugins));
    out.aria = Object.assign({}, defaultProps2.aria, out.aria);
    out.aria = {
      expanded: out.aria.expanded === "auto" ? props.interactive : out.aria.expanded,
      content: out.aria.content === "auto" ? props.interactive ? null : "describedby" : out.aria.content
    };
    return out;
  }
  function validateProps(partialProps, plugins) {
    if (partialProps === void 0) {
      partialProps = {};
    }
    if (plugins === void 0) {
      plugins = [];
    }
    var keys = Object.keys(partialProps);
    keys.forEach(function(prop) {
      var nonPluginProps = removeProperties(defaultProps2, Object.keys(pluginProps));
      var didPassUnknownProp = !hasOwnProperty(nonPluginProps, prop);
      if (didPassUnknownProp) {
        didPassUnknownProp = plugins.filter(function(plugin) {
          return plugin.name === prop;
        }).length === 0;
      }
      warnWhen(didPassUnknownProp, ["`" + prop + "`", "is not a valid prop. You may have spelled it incorrectly, or if it's", "a plugin, forgot to pass it in an array as props.plugins.", "\n\n", "All props: https://atomiks.github.io/tippyjs/v6/all-props/\n", "Plugins: https://atomiks.github.io/tippyjs/v6/plugins/"].join(" "));
    });
  }
  var innerHTML = function innerHTML2() {
    return "innerHTML";
  };
  function dangerouslySetInnerHTML(element, html) {
    element[innerHTML()] = html;
  }
  function createArrowElement(value) {
    var arrow2 = div();
    if (value === true) {
      arrow2.className = ARROW_CLASS;
    } else {
      arrow2.className = SVG_ARROW_CLASS;
      if (isElement2(value)) {
        arrow2.appendChild(value);
      } else {
        dangerouslySetInnerHTML(arrow2, value);
      }
    }
    return arrow2;
  }
  function setContent(content, props) {
    if (isElement2(props.content)) {
      dangerouslySetInnerHTML(content, "");
      content.appendChild(props.content);
    } else if (typeof props.content !== "function") {
      if (props.allowHTML) {
        dangerouslySetInnerHTML(content, props.content);
      } else {
        content.textContent = props.content;
      }
    }
  }
  function getChildren(popper2) {
    var box = popper2.firstElementChild;
    var boxChildren = arrayFrom(box.children);
    return {
      box,
      content: boxChildren.find(function(node) {
        return node.classList.contains(CONTENT_CLASS);
      }),
      arrow: boxChildren.find(function(node) {
        return node.classList.contains(ARROW_CLASS) || node.classList.contains(SVG_ARROW_CLASS);
      }),
      backdrop: boxChildren.find(function(node) {
        return node.classList.contains(BACKDROP_CLASS);
      })
    };
  }
  function render(instance2) {
    var popper2 = div();
    var box = div();
    box.className = BOX_CLASS;
    box.setAttribute("data-state", "hidden");
    box.setAttribute("tabindex", "-1");
    var content = div();
    content.className = CONTENT_CLASS;
    content.setAttribute("data-state", "hidden");
    setContent(content, instance2.props);
    popper2.appendChild(box);
    box.appendChild(content);
    onUpdate(instance2.props, instance2.props);
    function onUpdate(prevProps, nextProps) {
      var _getChildren = getChildren(popper2), box2 = _getChildren.box, content2 = _getChildren.content, arrow2 = _getChildren.arrow;
      if (nextProps.theme) {
        box2.setAttribute("data-theme", nextProps.theme);
      } else {
        box2.removeAttribute("data-theme");
      }
      if (typeof nextProps.animation === "string") {
        box2.setAttribute("data-animation", nextProps.animation);
      } else {
        box2.removeAttribute("data-animation");
      }
      if (nextProps.inertia) {
        box2.setAttribute("data-inertia", "");
      } else {
        box2.removeAttribute("data-inertia");
      }
      box2.style.maxWidth = typeof nextProps.maxWidth === "number" ? nextProps.maxWidth + "px" : nextProps.maxWidth;
      if (nextProps.role) {
        box2.setAttribute("role", nextProps.role);
      } else {
        box2.removeAttribute("role");
      }
      if (prevProps.content !== nextProps.content || prevProps.allowHTML !== nextProps.allowHTML) {
        setContent(content2, instance2.props);
      }
      if (nextProps.arrow) {
        if (!arrow2) {
          box2.appendChild(createArrowElement(nextProps.arrow));
        } else if (prevProps.arrow !== nextProps.arrow) {
          box2.removeChild(arrow2);
          box2.appendChild(createArrowElement(nextProps.arrow));
        }
      } else if (arrow2) {
        box2.removeChild(arrow2);
      }
    }
    return {
      popper: popper2,
      onUpdate
    };
  }
  render.$$tippy = true;
  var idCounter = 1;
  var mouseMoveListeners = [];
  var mountedInstances = [];
  function createTippy(reference2, passedProps) {
    var props = evaluateProps(reference2, Object.assign({}, defaultProps2, getExtendedPassedProps(removeUndefinedProps(passedProps))));
    var showTimeout;
    var hideTimeout;
    var scheduleHideAnimationFrame;
    var isVisibleFromClick = false;
    var didHideDueToDocumentMouseDown = false;
    var didTouchMove = false;
    var ignoreOnFirstUpdate = false;
    var lastTriggerEvent;
    var currentTransitionEndListener;
    var onFirstUpdate;
    var listeners = [];
    var debouncedOnMouseMove = debounce2(onMouseMove, props.interactiveDebounce);
    var currentTarget;
    var id = idCounter++;
    var popperInstance = null;
    var plugins = unique(props.plugins);
    var state = {
      isEnabled: true,
      isVisible: false,
      isDestroyed: false,
      isMounted: false,
      isShown: false
    };
    var instance2 = {
      id,
      reference: reference2,
      popper: div(),
      popperInstance,
      props,
      state,
      plugins,
      clearDelayTimeouts,
      setProps,
      setContent: setContent2,
      show,
      hide: hide2,
      hideWithInteractivity,
      enable,
      disable,
      unmount,
      destroy
    };
    if (!props.render) {
      if (true) {
        errorWhen(true, "render() function has not been supplied.");
      }
      return instance2;
    }
    var _props$render = props.render(instance2), popper2 = _props$render.popper, onUpdate = _props$render.onUpdate;
    popper2.setAttribute("data-tippy-root", "");
    popper2.id = "tippy-" + instance2.id;
    instance2.popper = popper2;
    reference2._tippy = instance2;
    popper2._tippy = instance2;
    var pluginsHooks = plugins.map(function(plugin) {
      return plugin.fn(instance2);
    });
    var hasAriaExpanded = reference2.hasAttribute("aria-expanded");
    addListeners();
    handleAriaExpandedAttribute();
    handleStyles();
    invokeHook("onCreate", [instance2]);
    if (props.showOnCreate) {
      scheduleShow();
    }
    popper2.addEventListener("mouseenter", function() {
      if (instance2.props.interactive && instance2.state.isVisible) {
        instance2.clearDelayTimeouts();
      }
    });
    popper2.addEventListener("mouseleave", function() {
      if (instance2.props.interactive && instance2.props.trigger.indexOf("mouseenter") >= 0) {
        getDocument().addEventListener("mousemove", debouncedOnMouseMove);
      }
    });
    return instance2;
    function getNormalizedTouchSettings() {
      var touch = instance2.props.touch;
      return Array.isArray(touch) ? touch : [touch, 0];
    }
    function getIsCustomTouchBehavior() {
      return getNormalizedTouchSettings()[0] === "hold";
    }
    function getIsDefaultRenderFn() {
      var _instance$props$rende;
      return !!((_instance$props$rende = instance2.props.render) != null && _instance$props$rende.$$tippy);
    }
    function getCurrentTarget() {
      return currentTarget || reference2;
    }
    function getDocument() {
      var parent = getCurrentTarget().parentNode;
      return parent ? getOwnerDocument(parent) : document;
    }
    function getDefaultTemplateChildren() {
      return getChildren(popper2);
    }
    function getDelay(isShow) {
      if (instance2.state.isMounted && !instance2.state.isVisible || currentInput.isTouch || lastTriggerEvent && lastTriggerEvent.type === "focus") {
        return 0;
      }
      return getValueAtIndexOrReturn(instance2.props.delay, isShow ? 0 : 1, defaultProps2.delay);
    }
    function handleStyles(fromHide) {
      if (fromHide === void 0) {
        fromHide = false;
      }
      popper2.style.pointerEvents = instance2.props.interactive && !fromHide ? "" : "none";
      popper2.style.zIndex = "" + instance2.props.zIndex;
    }
    function invokeHook(hook, args, shouldInvokePropsHook) {
      if (shouldInvokePropsHook === void 0) {
        shouldInvokePropsHook = true;
      }
      pluginsHooks.forEach(function(pluginHooks) {
        if (pluginHooks[hook]) {
          pluginHooks[hook].apply(pluginHooks, args);
        }
      });
      if (shouldInvokePropsHook) {
        var _instance$props;
        (_instance$props = instance2.props)[hook].apply(_instance$props, args);
      }
    }
    function handleAriaContentAttribute() {
      var aria = instance2.props.aria;
      if (!aria.content) {
        return;
      }
      var attr = "aria-" + aria.content;
      var id2 = popper2.id;
      var nodes = normalizeToArray(instance2.props.triggerTarget || reference2);
      nodes.forEach(function(node) {
        var currentValue = node.getAttribute(attr);
        if (instance2.state.isVisible) {
          node.setAttribute(attr, currentValue ? currentValue + " " + id2 : id2);
        } else {
          var nextValue = currentValue && currentValue.replace(id2, "").trim();
          if (nextValue) {
            node.setAttribute(attr, nextValue);
          } else {
            node.removeAttribute(attr);
          }
        }
      });
    }
    function handleAriaExpandedAttribute() {
      if (hasAriaExpanded || !instance2.props.aria.expanded) {
        return;
      }
      var nodes = normalizeToArray(instance2.props.triggerTarget || reference2);
      nodes.forEach(function(node) {
        if (instance2.props.interactive) {
          node.setAttribute("aria-expanded", instance2.state.isVisible && node === getCurrentTarget() ? "true" : "false");
        } else {
          node.removeAttribute("aria-expanded");
        }
      });
    }
    function cleanupInteractiveMouseListeners() {
      getDocument().removeEventListener("mousemove", debouncedOnMouseMove);
      mouseMoveListeners = mouseMoveListeners.filter(function(listener) {
        return listener !== debouncedOnMouseMove;
      });
    }
    function onDocumentPress(event) {
      if (currentInput.isTouch) {
        if (didTouchMove || event.type === "mousedown") {
          return;
        }
      }
      var actualTarget = event.composedPath && event.composedPath()[0] || event.target;
      if (instance2.props.interactive && actualContains(popper2, actualTarget)) {
        return;
      }
      if (normalizeToArray(instance2.props.triggerTarget || reference2).some(function(el) {
        return actualContains(el, actualTarget);
      })) {
        if (currentInput.isTouch) {
          return;
        }
        if (instance2.state.isVisible && instance2.props.trigger.indexOf("click") >= 0) {
          return;
        }
      } else {
        invokeHook("onClickOutside", [instance2, event]);
      }
      if (instance2.props.hideOnClick === true) {
        instance2.clearDelayTimeouts();
        instance2.hide();
        didHideDueToDocumentMouseDown = true;
        setTimeout(function() {
          didHideDueToDocumentMouseDown = false;
        });
        if (!instance2.state.isMounted) {
          removeDocumentPress();
        }
      }
    }
    function onTouchMove() {
      didTouchMove = true;
    }
    function onTouchStart() {
      didTouchMove = false;
    }
    function addDocumentPress() {
      var doc = getDocument();
      doc.addEventListener("mousedown", onDocumentPress, true);
      doc.addEventListener("touchend", onDocumentPress, TOUCH_OPTIONS);
      doc.addEventListener("touchstart", onTouchStart, TOUCH_OPTIONS);
      doc.addEventListener("touchmove", onTouchMove, TOUCH_OPTIONS);
    }
    function removeDocumentPress() {
      var doc = getDocument();
      doc.removeEventListener("mousedown", onDocumentPress, true);
      doc.removeEventListener("touchend", onDocumentPress, TOUCH_OPTIONS);
      doc.removeEventListener("touchstart", onTouchStart, TOUCH_OPTIONS);
      doc.removeEventListener("touchmove", onTouchMove, TOUCH_OPTIONS);
    }
    function onTransitionedOut(duration, callback) {
      onTransitionEnd(duration, function() {
        if (!instance2.state.isVisible && popper2.parentNode && popper2.parentNode.contains(popper2)) {
          callback();
        }
      });
    }
    function onTransitionedIn(duration, callback) {
      onTransitionEnd(duration, callback);
    }
    function onTransitionEnd(duration, callback) {
      var box = getDefaultTemplateChildren().box;
      function listener(event) {
        if (event.target === box) {
          updateTransitionEndListener(box, "remove", listener);
          callback();
        }
      }
      if (duration === 0) {
        return callback();
      }
      updateTransitionEndListener(box, "remove", currentTransitionEndListener);
      updateTransitionEndListener(box, "add", listener);
      currentTransitionEndListener = listener;
    }
    function on(eventType, handler, options) {
      if (options === void 0) {
        options = false;
      }
      var nodes = normalizeToArray(instance2.props.triggerTarget || reference2);
      nodes.forEach(function(node) {
        node.addEventListener(eventType, handler, options);
        listeners.push({
          node,
          eventType,
          handler,
          options
        });
      });
    }
    function addListeners() {
      if (getIsCustomTouchBehavior()) {
        on("touchstart", onTrigger2, {
          passive: true
        });
        on("touchend", onMouseLeave, {
          passive: true
        });
      }
      splitBySpaces(instance2.props.trigger).forEach(function(eventType) {
        if (eventType === "manual") {
          return;
        }
        on(eventType, onTrigger2);
        switch (eventType) {
          case "mouseenter":
            on("mouseleave", onMouseLeave);
            break;
          case "focus":
            on(isIE11 ? "focusout" : "blur", onBlurOrFocusOut);
            break;
          case "focusin":
            on("focusout", onBlurOrFocusOut);
            break;
        }
      });
    }
    function removeListeners() {
      listeners.forEach(function(_ref) {
        var node = _ref.node, eventType = _ref.eventType, handler = _ref.handler, options = _ref.options;
        node.removeEventListener(eventType, handler, options);
      });
      listeners = [];
    }
    function onTrigger2(event) {
      var _lastTriggerEvent;
      var shouldScheduleClickHide = false;
      if (!instance2.state.isEnabled || isEventListenerStopped(event) || didHideDueToDocumentMouseDown) {
        return;
      }
      var wasFocused = ((_lastTriggerEvent = lastTriggerEvent) == null ? void 0 : _lastTriggerEvent.type) === "focus";
      lastTriggerEvent = event;
      currentTarget = event.currentTarget;
      handleAriaExpandedAttribute();
      if (!instance2.state.isVisible && isMouseEvent(event)) {
        mouseMoveListeners.forEach(function(listener) {
          return listener(event);
        });
      }
      if (event.type === "click" && (instance2.props.trigger.indexOf("mouseenter") < 0 || isVisibleFromClick) && instance2.props.hideOnClick !== false && instance2.state.isVisible) {
        shouldScheduleClickHide = true;
      } else {
        scheduleShow(event);
      }
      if (event.type === "click") {
        isVisibleFromClick = !shouldScheduleClickHide;
      }
      if (shouldScheduleClickHide && !wasFocused) {
        scheduleHide(event);
      }
    }
    function onMouseMove(event) {
      var target = event.target;
      var isCursorOverReferenceOrPopper = getCurrentTarget().contains(target) || popper2.contains(target);
      if (event.type === "mousemove" && isCursorOverReferenceOrPopper) {
        return;
      }
      var popperTreeData = getNestedPopperTree().concat(popper2).map(function(popper3) {
        var _instance$popperInsta;
        var instance3 = popper3._tippy;
        var state2 = (_instance$popperInsta = instance3.popperInstance) == null ? void 0 : _instance$popperInsta.state;
        if (state2) {
          return {
            popperRect: popper3.getBoundingClientRect(),
            popperState: state2,
            props
          };
        }
        return null;
      }).filter(Boolean);
      if (isCursorOutsideInteractiveBorder(popperTreeData, event)) {
        cleanupInteractiveMouseListeners();
        scheduleHide(event);
      }
    }
    function onMouseLeave(event) {
      var shouldBail = isEventListenerStopped(event) || instance2.props.trigger.indexOf("click") >= 0 && isVisibleFromClick;
      if (shouldBail) {
        return;
      }
      if (instance2.props.interactive) {
        instance2.hideWithInteractivity(event);
        return;
      }
      scheduleHide(event);
    }
    function onBlurOrFocusOut(event) {
      if (instance2.props.trigger.indexOf("focusin") < 0 && event.target !== getCurrentTarget()) {
        return;
      }
      if (instance2.props.interactive && event.relatedTarget && popper2.contains(event.relatedTarget)) {
        return;
      }
      scheduleHide(event);
    }
    function isEventListenerStopped(event) {
      return currentInput.isTouch ? getIsCustomTouchBehavior() !== event.type.indexOf("touch") >= 0 : false;
    }
    function createPopperInstance() {
      destroyPopperInstance();
      var _instance$props2 = instance2.props, popperOptions = _instance$props2.popperOptions, placement = _instance$props2.placement, offset2 = _instance$props2.offset, getReferenceClientRect = _instance$props2.getReferenceClientRect, moveTransition = _instance$props2.moveTransition;
      var arrow2 = getIsDefaultRenderFn() ? getChildren(popper2).arrow : null;
      var computedReference = getReferenceClientRect ? {
        getBoundingClientRect: getReferenceClientRect,
        contextElement: getReferenceClientRect.contextElement || getCurrentTarget()
      } : reference2;
      var tippyModifier = {
        name: "$$tippy",
        enabled: true,
        phase: "beforeWrite",
        requires: ["computeStyles"],
        fn: function fn3(_ref2) {
          var state2 = _ref2.state;
          if (getIsDefaultRenderFn()) {
            var _getDefaultTemplateCh = getDefaultTemplateChildren(), box = _getDefaultTemplateCh.box;
            ["placement", "reference-hidden", "escaped"].forEach(function(attr) {
              if (attr === "placement") {
                box.setAttribute("data-placement", state2.placement);
              } else {
                if (state2.attributes.popper["data-popper-" + attr]) {
                  box.setAttribute("data-" + attr, "");
                } else {
                  box.removeAttribute("data-" + attr);
                }
              }
            });
            state2.attributes.popper = {};
          }
        }
      };
      var modifiers = [{
        name: "offset",
        options: {
          offset: offset2
        }
      }, {
        name: "preventOverflow",
        options: {
          padding: {
            top: 2,
            bottom: 2,
            left: 5,
            right: 5
          }
        }
      }, {
        name: "flip",
        options: {
          padding: 5
        }
      }, {
        name: "computeStyles",
        options: {
          adaptive: !moveTransition
        }
      }, tippyModifier];
      if (getIsDefaultRenderFn() && arrow2) {
        modifiers.push({
          name: "arrow",
          options: {
            element: arrow2,
            padding: 3
          }
        });
      }
      modifiers.push.apply(modifiers, (popperOptions == null ? void 0 : popperOptions.modifiers) || []);
      instance2.popperInstance = createPopper(computedReference, popper2, Object.assign({}, popperOptions, {
        placement,
        onFirstUpdate,
        modifiers
      }));
    }
    function destroyPopperInstance() {
      if (instance2.popperInstance) {
        instance2.popperInstance.destroy();
        instance2.popperInstance = null;
      }
    }
    function mount() {
      var appendTo = instance2.props.appendTo;
      var parentNode;
      var node = getCurrentTarget();
      if (instance2.props.interactive && appendTo === TIPPY_DEFAULT_APPEND_TO || appendTo === "parent") {
        parentNode = node.parentNode;
      } else {
        parentNode = invokeWithArgsOrReturn(appendTo, [node]);
      }
      if (!parentNode.contains(popper2)) {
        parentNode.appendChild(popper2);
      }
      instance2.state.isMounted = true;
      createPopperInstance();
      if (true) {
        warnWhen(instance2.props.interactive && appendTo === defaultProps2.appendTo && node.nextElementSibling !== popper2, ["Interactive tippy element may not be accessible via keyboard", "navigation because it is not directly after the reference element", "in the DOM source order.", "\n\n", "Using a wrapper <div> or <span> tag around the reference element", "solves this by creating a new parentNode context.", "\n\n", "Specifying `appendTo: document.body` silences this warning, but it", "assumes you are using a focus management solution to handle", "keyboard navigation.", "\n\n", "See: https://atomiks.github.io/tippyjs/v6/accessibility/#interactivity"].join(" "));
      }
    }
    function getNestedPopperTree() {
      return arrayFrom(popper2.querySelectorAll("[data-tippy-root]"));
    }
    function scheduleShow(event) {
      instance2.clearDelayTimeouts();
      if (event) {
        invokeHook("onTrigger", [instance2, event]);
      }
      addDocumentPress();
      var delay = getDelay(true);
      var _getNormalizedTouchSe = getNormalizedTouchSettings(), touchValue = _getNormalizedTouchSe[0], touchDelay = _getNormalizedTouchSe[1];
      if (currentInput.isTouch && touchValue === "hold" && touchDelay) {
        delay = touchDelay;
      }
      if (delay) {
        showTimeout = setTimeout(function() {
          instance2.show();
        }, delay);
      } else {
        instance2.show();
      }
    }
    function scheduleHide(event) {
      instance2.clearDelayTimeouts();
      invokeHook("onUntrigger", [instance2, event]);
      if (!instance2.state.isVisible) {
        removeDocumentPress();
        return;
      }
      if (instance2.props.trigger.indexOf("mouseenter") >= 0 && instance2.props.trigger.indexOf("click") >= 0 && ["mouseleave", "mousemove"].indexOf(event.type) >= 0 && isVisibleFromClick) {
        return;
      }
      var delay = getDelay(false);
      if (delay) {
        hideTimeout = setTimeout(function() {
          if (instance2.state.isVisible) {
            instance2.hide();
          }
        }, delay);
      } else {
        scheduleHideAnimationFrame = requestAnimationFrame(function() {
          instance2.hide();
        });
      }
    }
    function enable() {
      instance2.state.isEnabled = true;
    }
    function disable() {
      instance2.hide();
      instance2.state.isEnabled = false;
    }
    function clearDelayTimeouts() {
      clearTimeout(showTimeout);
      clearTimeout(hideTimeout);
      cancelAnimationFrame(scheduleHideAnimationFrame);
    }
    function setProps(partialProps) {
      if (true) {
        warnWhen(instance2.state.isDestroyed, createMemoryLeakWarning("setProps"));
      }
      if (instance2.state.isDestroyed) {
        return;
      }
      invokeHook("onBeforeUpdate", [instance2, partialProps]);
      removeListeners();
      var prevProps = instance2.props;
      var nextProps = evaluateProps(reference2, Object.assign({}, prevProps, removeUndefinedProps(partialProps), {
        ignoreAttributes: true
      }));
      instance2.props = nextProps;
      addListeners();
      if (prevProps.interactiveDebounce !== nextProps.interactiveDebounce) {
        cleanupInteractiveMouseListeners();
        debouncedOnMouseMove = debounce2(onMouseMove, nextProps.interactiveDebounce);
      }
      if (prevProps.triggerTarget && !nextProps.triggerTarget) {
        normalizeToArray(prevProps.triggerTarget).forEach(function(node) {
          node.removeAttribute("aria-expanded");
        });
      } else if (nextProps.triggerTarget) {
        reference2.removeAttribute("aria-expanded");
      }
      handleAriaExpandedAttribute();
      handleStyles();
      if (onUpdate) {
        onUpdate(prevProps, nextProps);
      }
      if (instance2.popperInstance) {
        createPopperInstance();
        getNestedPopperTree().forEach(function(nestedPopper) {
          requestAnimationFrame(nestedPopper._tippy.popperInstance.forceUpdate);
        });
      }
      invokeHook("onAfterUpdate", [instance2, partialProps]);
    }
    function setContent2(content) {
      instance2.setProps({
        content
      });
    }
    function show() {
      if (true) {
        warnWhen(instance2.state.isDestroyed, createMemoryLeakWarning("show"));
      }
      var isAlreadyVisible = instance2.state.isVisible;
      var isDestroyed = instance2.state.isDestroyed;
      var isDisabled = !instance2.state.isEnabled;
      var isTouchAndTouchDisabled = currentInput.isTouch && !instance2.props.touch;
      var duration = getValueAtIndexOrReturn(instance2.props.duration, 0, defaultProps2.duration);
      if (isAlreadyVisible || isDestroyed || isDisabled || isTouchAndTouchDisabled) {
        return;
      }
      if (getCurrentTarget().hasAttribute("disabled")) {
        return;
      }
      invokeHook("onShow", [instance2], false);
      if (instance2.props.onShow(instance2) === false) {
        return;
      }
      instance2.state.isVisible = true;
      if (getIsDefaultRenderFn()) {
        popper2.style.visibility = "visible";
      }
      handleStyles();
      addDocumentPress();
      if (!instance2.state.isMounted) {
        popper2.style.transition = "none";
      }
      if (getIsDefaultRenderFn()) {
        var _getDefaultTemplateCh2 = getDefaultTemplateChildren(), box = _getDefaultTemplateCh2.box, content = _getDefaultTemplateCh2.content;
        setTransitionDuration([box, content], 0);
      }
      onFirstUpdate = function onFirstUpdate2() {
        var _instance$popperInsta2;
        if (!instance2.state.isVisible || ignoreOnFirstUpdate) {
          return;
        }
        ignoreOnFirstUpdate = true;
        void popper2.offsetHeight;
        popper2.style.transition = instance2.props.moveTransition;
        if (getIsDefaultRenderFn() && instance2.props.animation) {
          var _getDefaultTemplateCh3 = getDefaultTemplateChildren(), _box = _getDefaultTemplateCh3.box, _content = _getDefaultTemplateCh3.content;
          setTransitionDuration([_box, _content], duration);
          setVisibilityState([_box, _content], "visible");
        }
        handleAriaContentAttribute();
        handleAriaExpandedAttribute();
        pushIfUnique(mountedInstances, instance2);
        (_instance$popperInsta2 = instance2.popperInstance) == null ? void 0 : _instance$popperInsta2.forceUpdate();
        invokeHook("onMount", [instance2]);
        if (instance2.props.animation && getIsDefaultRenderFn()) {
          onTransitionedIn(duration, function() {
            instance2.state.isShown = true;
            invokeHook("onShown", [instance2]);
          });
        }
      };
      mount();
    }
    function hide2() {
      if (true) {
        warnWhen(instance2.state.isDestroyed, createMemoryLeakWarning("hide"));
      }
      var isAlreadyHidden = !instance2.state.isVisible;
      var isDestroyed = instance2.state.isDestroyed;
      var isDisabled = !instance2.state.isEnabled;
      var duration = getValueAtIndexOrReturn(instance2.props.duration, 1, defaultProps2.duration);
      if (isAlreadyHidden || isDestroyed || isDisabled) {
        return;
      }
      invokeHook("onHide", [instance2], false);
      if (instance2.props.onHide(instance2) === false) {
        return;
      }
      instance2.state.isVisible = false;
      instance2.state.isShown = false;
      ignoreOnFirstUpdate = false;
      isVisibleFromClick = false;
      if (getIsDefaultRenderFn()) {
        popper2.style.visibility = "hidden";
      }
      cleanupInteractiveMouseListeners();
      removeDocumentPress();
      handleStyles(true);
      if (getIsDefaultRenderFn()) {
        var _getDefaultTemplateCh4 = getDefaultTemplateChildren(), box = _getDefaultTemplateCh4.box, content = _getDefaultTemplateCh4.content;
        if (instance2.props.animation) {
          setTransitionDuration([box, content], duration);
          setVisibilityState([box, content], "hidden");
        }
      }
      handleAriaContentAttribute();
      handleAriaExpandedAttribute();
      if (instance2.props.animation) {
        if (getIsDefaultRenderFn()) {
          onTransitionedOut(duration, instance2.unmount);
        }
      } else {
        instance2.unmount();
      }
    }
    function hideWithInteractivity(event) {
      if (true) {
        warnWhen(instance2.state.isDestroyed, createMemoryLeakWarning("hideWithInteractivity"));
      }
      getDocument().addEventListener("mousemove", debouncedOnMouseMove);
      pushIfUnique(mouseMoveListeners, debouncedOnMouseMove);
      debouncedOnMouseMove(event);
    }
    function unmount() {
      if (true) {
        warnWhen(instance2.state.isDestroyed, createMemoryLeakWarning("unmount"));
      }
      if (instance2.state.isVisible) {
        instance2.hide();
      }
      if (!instance2.state.isMounted) {
        return;
      }
      destroyPopperInstance();
      getNestedPopperTree().forEach(function(nestedPopper) {
        nestedPopper._tippy.unmount();
      });
      if (popper2.parentNode) {
        popper2.parentNode.removeChild(popper2);
      }
      mountedInstances = mountedInstances.filter(function(i2) {
        return i2 !== instance2;
      });
      instance2.state.isMounted = false;
      invokeHook("onHidden", [instance2]);
    }
    function destroy() {
      if (true) {
        warnWhen(instance2.state.isDestroyed, createMemoryLeakWarning("destroy"));
      }
      if (instance2.state.isDestroyed) {
        return;
      }
      instance2.clearDelayTimeouts();
      instance2.unmount();
      removeListeners();
      delete reference2._tippy;
      instance2.state.isDestroyed = true;
      invokeHook("onDestroy", [instance2]);
    }
  }
  function tippy(targets, optionalProps) {
    if (optionalProps === void 0) {
      optionalProps = {};
    }
    var plugins = defaultProps2.plugins.concat(optionalProps.plugins || []);
    if (true) {
      validateTargets(targets);
      validateProps(optionalProps, plugins);
    }
    bindGlobalEventListeners();
    var passedProps = Object.assign({}, optionalProps, {
      plugins
    });
    var elements = getArrayOfElements(targets);
    if (true) {
      var isSingleContentElement = isElement2(passedProps.content);
      var isMoreThanOneReferenceElement = elements.length > 1;
      warnWhen(isSingleContentElement && isMoreThanOneReferenceElement, ["tippy() was passed an Element as the `content` prop, but more than", "one tippy instance was created by this invocation. This means the", "content element will only be appended to the last tippy instance.", "\n\n", "Instead, pass the .innerHTML of the element, or use a function that", "returns a cloned version of the element instead.", "\n\n", "1) content: element.innerHTML\n", "2) content: () => element.cloneNode(true)"].join(" "));
    }
    var instances = elements.reduce(function(acc, reference2) {
      var instance2 = reference2 && createTippy(reference2, passedProps);
      if (instance2) {
        acc.push(instance2);
      }
      return acc;
    }, []);
    return isElement2(targets) ? instances[0] : instances;
  }
  tippy.defaultProps = defaultProps2;
  tippy.setDefaultProps = setDefaultProps;
  tippy.currentInput = currentInput;
  var applyStylesModifier = Object.assign({}, applyStyles_default, {
    effect: function effect4(_ref) {
      var state = _ref.state;
      var initialStyles = {
        popper: {
          position: state.options.strategy,
          left: "0",
          top: "0",
          margin: "0"
        },
        arrow: {
          position: "absolute"
        },
        reference: {}
      };
      Object.assign(state.elements.popper.style, initialStyles.popper);
      state.styles = initialStyles;
      if (state.elements.arrow) {
        Object.assign(state.elements.arrow.style, initialStyles.arrow);
      }
    }
  });
  tippy.setDefaultProps({
    render
  });
  var tippy_esm_default = tippy;

  // ../../node_modules/@tippyjs/react/dist/tippy-react.esm.js
  var import_react6 = __toESM(require_react());
  var import_react_dom2 = __toESM(require_react_dom());
  function _objectWithoutPropertiesLoose2(source, excluded) {
    if (source == null)
      return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i2;
    for (i2 = 0; i2 < sourceKeys.length; i2++) {
      key = sourceKeys[i2];
      if (excluded.indexOf(key) >= 0)
        continue;
      target[key] = source[key];
    }
    return target;
  }
  var isBrowser2 = typeof window !== "undefined" && typeof document !== "undefined";
  function preserveRef(ref, node) {
    if (ref) {
      if (typeof ref === "function") {
        ref(node);
      }
      if ({}.hasOwnProperty.call(ref, "current")) {
        ref.current = node;
      }
    }
  }
  function ssrSafeCreateDiv() {
    return isBrowser2 && document.createElement("div");
  }
  function toDataAttributes(attrs) {
    var dataAttrs = {
      "data-placement": attrs.placement
    };
    if (attrs.referenceHidden) {
      dataAttrs["data-reference-hidden"] = "";
    }
    if (attrs.escaped) {
      dataAttrs["data-escaped"] = "";
    }
    return dataAttrs;
  }
  function deepEqual(x2, y) {
    if (x2 === y) {
      return true;
    } else if (typeof x2 === "object" && x2 != null && typeof y === "object" && y != null) {
      if (Object.keys(x2).length !== Object.keys(y).length) {
        return false;
      }
      for (var prop in x2) {
        if (y.hasOwnProperty(prop)) {
          if (!deepEqual(x2[prop], y[prop])) {
            return false;
          }
        } else {
          return false;
        }
      }
      return true;
    } else {
      return false;
    }
  }
  function uniqueByShape(arr) {
    var output = [];
    arr.forEach(function(item) {
      if (!output.find(function(outputItem) {
        return deepEqual(item, outputItem);
      })) {
        output.push(item);
      }
    });
    return output;
  }
  function deepPreserveProps(instanceProps, componentProps) {
    var _instanceProps$popper, _componentProps$poppe;
    return Object.assign({}, componentProps, {
      popperOptions: Object.assign({}, instanceProps.popperOptions, componentProps.popperOptions, {
        modifiers: uniqueByShape([].concat(((_instanceProps$popper = instanceProps.popperOptions) == null ? void 0 : _instanceProps$popper.modifiers) || [], ((_componentProps$poppe = componentProps.popperOptions) == null ? void 0 : _componentProps$poppe.modifiers) || []))
      })
    });
  }
  var useIsomorphicLayoutEffect = isBrowser2 ? import_react6.useLayoutEffect : import_react6.useEffect;
  function useMutableBox(initialValue) {
    var ref = (0, import_react6.useRef)();
    if (!ref.current) {
      ref.current = typeof initialValue === "function" ? initialValue() : initialValue;
    }
    return ref.current;
  }
  function updateClassName(box, action, classNames) {
    classNames.split(/\s+/).forEach(function(name) {
      if (name) {
        box.classList[action](name);
      }
    });
  }
  var classNamePlugin = {
    name: "className",
    defaultValue: "",
    fn: function fn2(instance2) {
      var box = instance2.popper.firstElementChild;
      var isDefaultRenderFn = function isDefaultRenderFn2() {
        var _instance$props$rende;
        return !!((_instance$props$rende = instance2.props.render) == null ? void 0 : _instance$props$rende.$$tippy);
      };
      function add() {
        if (instance2.props.className && !isDefaultRenderFn()) {
          if (true) {
            console.warn(["@tippyjs/react: Cannot use `className` prop in conjunction with", "`render` prop. Place the className on the element you are", "rendering."].join(" "));
          }
          return;
        }
        updateClassName(box, "add", instance2.props.className);
      }
      function remove() {
        if (isDefaultRenderFn()) {
          updateClassName(box, "remove", instance2.props.className);
        }
      }
      return {
        onCreate: add,
        onBeforeUpdate: remove,
        onAfterUpdate: add
      };
    }
  };
  function TippyGenerator(tippy2) {
    function Tippy(_ref) {
      var children = _ref.children, content = _ref.content, visible = _ref.visible, singleton = _ref.singleton, render2 = _ref.render, reference2 = _ref.reference, _ref$disabled = _ref.disabled, disabled = _ref$disabled === void 0 ? false : _ref$disabled, _ref$ignoreAttributes = _ref.ignoreAttributes, ignoreAttributes = _ref$ignoreAttributes === void 0 ? true : _ref$ignoreAttributes, __source = _ref.__source, __self = _ref.__self, restOfNativeProps = _objectWithoutPropertiesLoose2(_ref, ["children", "content", "visible", "singleton", "render", "reference", "disabled", "ignoreAttributes", "__source", "__self"]);
      var isControlledMode = visible !== void 0;
      var isSingletonMode = singleton !== void 0;
      var _useState = (0, import_react6.useState)(false), mounted = _useState[0], setMounted = _useState[1];
      var _useState2 = (0, import_react6.useState)({}), attrs = _useState2[0], setAttrs = _useState2[1];
      var _useState3 = (0, import_react6.useState)(), singletonContent = _useState3[0], setSingletonContent = _useState3[1];
      var mutableBox = useMutableBox(function() {
        return {
          container: ssrSafeCreateDiv(),
          renders: 1
        };
      });
      var props = Object.assign({
        ignoreAttributes
      }, restOfNativeProps, {
        content: mutableBox.container
      });
      if (isControlledMode) {
        if (true) {
          ["trigger", "hideOnClick", "showOnCreate"].forEach(function(nativeStateProp) {
            if (props[nativeStateProp] !== void 0) {
              console.warn(["@tippyjs/react: Cannot specify `" + nativeStateProp + "` prop in", "controlled mode (`visible` prop)"].join(" "));
            }
          });
        }
        props.trigger = "manual";
        props.hideOnClick = false;
      }
      if (isSingletonMode) {
        disabled = true;
      }
      var computedProps = props;
      var plugins = props.plugins || [];
      if (render2) {
        computedProps = Object.assign({}, props, {
          plugins: isSingletonMode && singleton.data != null ? [].concat(plugins, [{
            fn: function fn3() {
              return {
                onTrigger: function onTrigger2(instance2, event) {
                  var node = singleton.data.children.find(function(_ref2) {
                    var instance3 = _ref2.instance;
                    return instance3.reference === event.currentTarget;
                  });
                  instance2.state.$$activeSingletonInstance = node.instance;
                  setSingletonContent(node.content);
                }
              };
            }
          }]) : plugins,
          render: function render3() {
            return {
              popper: mutableBox.container
            };
          }
        });
      }
      var deps = [reference2].concat(children ? [children.type] : []);
      useIsomorphicLayoutEffect(function() {
        var element = reference2;
        if (reference2 && reference2.hasOwnProperty("current")) {
          element = reference2.current;
        }
        var instance2 = tippy2(element || mutableBox.ref || ssrSafeCreateDiv(), Object.assign({}, computedProps, {
          plugins: [classNamePlugin].concat(props.plugins || [])
        }));
        mutableBox.instance = instance2;
        if (disabled) {
          instance2.disable();
        }
        if (visible) {
          instance2.show();
        }
        if (isSingletonMode) {
          singleton.hook({
            instance: instance2,
            content,
            props: computedProps,
            setSingletonContent
          });
        }
        setMounted(true);
        return function() {
          instance2.destroy();
          singleton == null ? void 0 : singleton.cleanup(instance2);
        };
      }, deps);
      useIsomorphicLayoutEffect(function() {
        var _instance$popperInsta;
        if (mutableBox.renders === 1) {
          mutableBox.renders++;
          return;
        }
        var instance2 = mutableBox.instance;
        instance2.setProps(deepPreserveProps(instance2.props, computedProps));
        (_instance$popperInsta = instance2.popperInstance) == null ? void 0 : _instance$popperInsta.forceUpdate();
        if (disabled) {
          instance2.disable();
        } else {
          instance2.enable();
        }
        if (isControlledMode) {
          if (visible) {
            instance2.show();
          } else {
            instance2.hide();
          }
        }
        if (isSingletonMode) {
          singleton.hook({
            instance: instance2,
            content,
            props: computedProps,
            setSingletonContent
          });
        }
      });
      useIsomorphicLayoutEffect(function() {
        var _instance$props$poppe;
        if (!render2) {
          return;
        }
        var instance2 = mutableBox.instance;
        instance2.setProps({
          popperOptions: Object.assign({}, instance2.props.popperOptions, {
            modifiers: [].concat((((_instance$props$poppe = instance2.props.popperOptions) == null ? void 0 : _instance$props$poppe.modifiers) || []).filter(function(_ref3) {
              var name = _ref3.name;
              return name !== "$$tippyReact";
            }), [{
              name: "$$tippyReact",
              enabled: true,
              phase: "beforeWrite",
              requires: ["computeStyles"],
              fn: function fn3(_ref4) {
                var _state$modifiersData;
                var state = _ref4.state;
                var hideData = (_state$modifiersData = state.modifiersData) == null ? void 0 : _state$modifiersData.hide;
                if (attrs.placement !== state.placement || attrs.referenceHidden !== (hideData == null ? void 0 : hideData.isReferenceHidden) || attrs.escaped !== (hideData == null ? void 0 : hideData.hasPopperEscaped)) {
                  setAttrs({
                    placement: state.placement,
                    referenceHidden: hideData == null ? void 0 : hideData.isReferenceHidden,
                    escaped: hideData == null ? void 0 : hideData.hasPopperEscaped
                  });
                }
                state.attributes.popper = {};
              }
            }])
          })
        });
      }, [attrs.placement, attrs.referenceHidden, attrs.escaped].concat(deps));
      return /* @__PURE__ */ import_react6.default.createElement(import_react6.default.Fragment, null, children ? /* @__PURE__ */ (0, import_react6.cloneElement)(children, {
        ref: function ref(node) {
          mutableBox.ref = node;
          preserveRef(children.ref, node);
        }
      }) : null, mounted && /* @__PURE__ */ (0, import_react_dom2.createPortal)(render2 ? render2(toDataAttributes(attrs), singletonContent, mutableBox.instance) : content, mutableBox.container));
    }
    return Tippy;
  }
  var forwardRef3 = function(Tippy, defaultProps3) {
    return /* @__PURE__ */ (0, import_react6.forwardRef)(function TippyWrapper(_ref, _ref2) {
      var children = _ref.children, props = _objectWithoutPropertiesLoose2(_ref, ["children"]);
      return /* @__PURE__ */ import_react6.default.createElement(Tippy, Object.assign({}, defaultProps3, props), children ? /* @__PURE__ */ (0, import_react6.cloneElement)(children, {
        ref: function ref(node) {
          preserveRef(_ref2, node);
          preserveRef(children.ref, node);
        }
      }) : null);
    });
  };
  var index = /* @__PURE__ */ forwardRef3(/* @__PURE__ */ TippyGenerator(tippy_esm_default));
  var tippy_react_esm_default = index;

  // src/Input/InputWrapper.tsx
  var InputWrapper = ({
    children,
    label,
    error,
    info,
    id
  }) => {
    return /* @__PURE__ */ React.createElement("div", {
      className: "Input__Wrapper"
    }, /* @__PURE__ */ React.createElement("div", {
      className: "Input__Wrapper__Header"
    }, label && /* @__PURE__ */ React.createElement("label", {
      htmlFor: id
    }, label), info && /* @__PURE__ */ React.createElement(tippy_react_esm_default, {
      delay: [700, 0],
      content: info
    }, /* @__PURE__ */ React.createElement("i", {
      className: "fa fa-info-circle"
    }))), children, error && /* @__PURE__ */ React.createElement("div", {
      className: "Input__Wrapper__Error"
    }, error));
  };
  var InputWrapper_default = InputWrapper;

  // src/Input/Input.tsx
  var InputIcon = ({
    icon,
    alignment = "left"
  }) => {
    return /* @__PURE__ */ React.createElement("span", {
      className: `Input__Icon Input__Icon${alignment === "left" ? "--left" : "--right"}`
    }, icon);
  };
  var Input = (0, import_react8.forwardRef)(
    ({
      value,
      onChange,
      className = "",
      emphasize,
      placeholder,
      icon,
      iconAlignment = "left",
      type = "text",
      isValid,
      label,
      id,
      info,
      error,
      ...props
    }, ref) => {
      return /* @__PURE__ */ React.createElement(InputWrapper_default, {
        id,
        label,
        error,
        info
      }, /* @__PURE__ */ React.createElement("div", {
        className: "Input__Text__Wrapper"
      }, /* @__PURE__ */ React.createElement("input", {
        ref,
        type,
        value,
        id,
        onChange,
        className: `Input__Text ${emphasize ? "Input__Text--emphasize" : ""} ${iconAlignment === "left" && icon ? "Input__Text--withIcon" : icon && isValid ? "Input__Text--withIcons" : ""}`,
        placeholder,
        ...props
      }), icon && /* @__PURE__ */ React.createElement(InputIcon, {
        alignment: iconAlignment,
        icon
      }), icon && isValid && iconAlignment === "left" && /* @__PURE__ */ React.createElement(InputIcon, {
        alignment: iconAlignment,
        icon: /* @__PURE__ */ React.createElement("i", {
          className: "fas fa-check"
        })
      })));
    }
  );
  var Input_default = Input;

  // src/ErrorBoundary.tsx
  var import_react9 = __toESM(require_react());
  var ErrorBoundary = class extends import_react9.Component {
    constructor() {
      super(...arguments);
      __publicField(this, "state", {
        hasError: false
      });
    }
    static getDerivedStateFromError(_2) {
      return { hasError: true };
    }
    componentDidCatch(error, errorInfo) {
    }
    render() {
      if (this.state.hasError) {
        console.log(this.state);
        return /* @__PURE__ */ React.createElement("span", {
          className: "block p-8 text-2xl text-center text-red"
        }, "Une erreur est survenue");
      }
      return this.props.children;
    }
  };
  var ErrorBoundary_default = ErrorBoundary;

  // src/Library/index.tsx
  var TagsList = ({
    currentTags,
    onUpdate
  }) => {
    const { data } = useGetTags();
    const tags = data?.filter(
      (tagFromServer) => !currentTags.find(
        ({ tag }) => tag.id === tagFromServer.id
      )
    ) || [];
    return /* @__PURE__ */ React.createElement("ul", {
      className: "TagList"
    }, tags?.length > 0 ? tags.map((tag) => /* @__PURE__ */ React.createElement("li", {
      key: tag.id,
      onClick: () => {
        onUpdate(tag);
      },
      className: "TagList__Item"
    }, /* @__PURE__ */ React.createElement("span", null, tag.title))) : /* @__PURE__ */ React.createElement("li", {
      className: "TagList__Item"
    }, /* @__PURE__ */ React.createElement("span", null, "No tags available.")));
  };
  var TagConfigurationModal = ({
    isOpen,
    setIsOpen,
    image
  }) => {
    const [showTags, setShowTags] = (0, import_react10.useState)(false);
    const intl = useIntl();
    const deleteTagAssociation = useDeleteTagAssociation();
    const associateTag = useAssociateTag();
    return /* @__PURE__ */ React.createElement(import_react_modal.default, {
      isOpen,
      onRequestClose: () => {
        setIsOpen(false);
      },
      className: "Modal-Tags",
      overlayClassName: "Overlay"
    }, /* @__PURE__ */ React.createElement("div", {
      className: "Modal__Wrapper"
    }, /* @__PURE__ */ React.createElement("div", {
      className: "Modal__Header"
    }, /* @__PURE__ */ React.createElement("button", {
      onClick: () => {
        setIsOpen(false);
      },
      className: "Modal__Header__Close"
    }, /* @__PURE__ */ React.createElement(SvgXmark, null)), /* @__PURE__ */ React.createElement("div", {
      className: "Modal__Header__Title"
    }, intl.formatMessage({ id: "BlockImage__LIBRARY_IMAGE_TAG_CONFIG" }), " ", image.title)), /* @__PURE__ */ React.createElement("div", {
      className: "Modal__Content",
      style: { overflow: "inherit" }
    }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", null, intl.formatMessage({ id: "BlockImage__LIBRARY_IMAGE_ADD_TAG" })), /* @__PURE__ */ React.createElement("div", {
      className: "BlockImage__TagSelector"
    }, /* @__PURE__ */ React.createElement("div", {
      className: "BlockImage__TagSelector__Tags",
      style: { paddingLeft: image.tags.length < 1 ? "14px" : "0" }
    }, image.tags.length ? image.tags.map(({ tag, imageTag }) => /* @__PURE__ */ React.createElement("div", {
      key: tag.id,
      className: "BlockImage__TagSelector__Tag"
    }, /* @__PURE__ */ React.createElement("span", null, tag.title), /* @__PURE__ */ React.createElement("button", {
      className: "BlockImage__TagSelector__Tag__Remove",
      onClick: () => deleteTagAssociation.mutate(imageTag.id || 57)
    }, /* @__PURE__ */ React.createElement(SvgTagXmark, null)))) : !associateTag.isLoading ? intl.formatMessage({ id: "BlockImage__LIBRARY_IMAGE_SELECT_TAG" }) : null, associateTag.isLoading && /* @__PURE__ */ React.createElement("div", {
      className: "BlockImage__TagSelector__Tag"
    }, /* @__PURE__ */ React.createElement("span", null, /* @__PURE__ */ React.createElement("i", {
      className: "fa fa-circle-notch fa-spin"
    })))), /* @__PURE__ */ React.createElement("button", {
      className: "BlockImage__TagSelector__Add",
      onClick: () => setShowTags(!showTags),
      disabled: associateTag.isLoading || deleteTagAssociation.isLoading
    }, /* @__PURE__ */ React.createElement("i", {
      className: "block fas fa-plus"
    })), showTags ? /* @__PURE__ */ React.createElement(import_react10.Suspense, {
      fallback: /* @__PURE__ */ React.createElement("div", {
        className: "BlockProduct__Loader"
      }, /* @__PURE__ */ React.createElement("i", {
        className: "fa fa-circle-notch fa-spin"
      }))
    }, /* @__PURE__ */ React.createElement(TagsList, {
      currentTags: image.tags,
      onUpdate: (selectedTag) => {
        associateTag.mutate({ imageId: image.id, tagId: selectedTag.id });
        setShowTags(false);
      }
    })) : null)))));
  };
  var TagFilterOptions = () => {
    const intl = useIntl();
    const { data: tags } = useGetTags();
    return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("option", {
      value: ""
    }, intl.formatMessage({ id: "ALL_TAGS" })), tags?.map((tag) => /* @__PURE__ */ React.createElement("option", {
      key: tag.id,
      value: tag.id
    }, tag.title)));
  };
  var TagFilter = ({ setTagId }) => {
    const intl = useIntl();
    return /* @__PURE__ */ React.createElement("div", {
      className: "Select__Wrapper"
    }, /* @__PURE__ */ React.createElement("div", {
      className: "Input__Select__Separator"
    }), /* @__PURE__ */ React.createElement("label", {
      htmlFor: "tag-filter"
    }, intl.formatMessage({ id: "BlockImage__LIBRARY_MODAL_TAG_FILTER" })), /* @__PURE__ */ React.createElement("select", {
      className: "Input__Select",
      name: "tag-filter",
      id: "tag-filter",
      onChange: (e2) => setTagId(e2.target.value)
    }, /* @__PURE__ */ React.createElement(import_react10.Suspense, {
      fallback: /* @__PURE__ */ React.createElement("option", null, intl.formatMessage({ id: "LOADING" }))
    }, /* @__PURE__ */ React.createElement(TagFilterOptions, null))));
  };
  var LibraryImage = ({
    image,
    onSelect
  }) => {
    const [isTagModalOpen, setIsTagModalOpen] = (0, import_react10.useState)(false);
    const intl = useIntl();
    const deleteMutation = useDeleteImage();
    return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
      className: "Library__Image"
    }, /* @__PURE__ */ React.createElement("div", {
      className: "Library__Image__Tags"
    }, image.tags?.map(({ tag }) => /* @__PURE__ */ React.createElement("span", {
      key: tag.id,
      style: {
        border: `1px solid ${tag.colorCode}`,
        color: tag.colorCode
      },
      className: "Library__Image__Tag"
    }, tag.title))), /* @__PURE__ */ React.createElement("img", {
      width: "150",
      height: "150",
      loading: "lazy",
      src: `/image-library/${image.id}/full/^!150,150/0/default.webp`
    }), /* @__PURE__ */ React.createElement("span", {
      className: "Library__Image__Title"
    }, image.title), /* @__PURE__ */ React.createElement("div", {
      className: "Library__Image__Actions"
    }, /* @__PURE__ */ React.createElement("span", {
      className: "Library__Image__Action__Title"
    }, image.title), /* @__PURE__ */ React.createElement("button", {
      className: "Library__Image__Select__Action",
      style: { marginTop: "12px", marginBottom: "6px" },
      onClick: () => onSelect(image)
    }, intl.formatMessage({ id: "CHOOSE" })), /* @__PURE__ */ React.createElement("div", {
      className: "flex gap-2"
    }, /* @__PURE__ */ React.createElement("button", {
      className: "Library__Image__Tag__Action",
      onClick: () => setIsTagModalOpen(true)
    }, /* @__PURE__ */ React.createElement("i", {
      className: "fas fa-tag"
    })), /* @__PURE__ */ React.createElement("button", {
      className: "Library__Image__Delete__Action",
      onClick: () => deleteMutation.mutate(image.id)
    }, /* @__PURE__ */ React.createElement(SvgTrash, null))))), /* @__PURE__ */ React.createElement(TagConfigurationModal, {
      image,
      isOpen: isTagModalOpen,
      setIsOpen: setIsTagModalOpen
    }));
  };
  var LibraryContent = ({
    limit = 20,
    onSelect
  }) => {
    const [offset2, setOffset] = (0, import_react10.useState)(0);
    const [title, setTitle] = (0, import_react10.useState)("");
    const [tagId, setTagId] = (0, import_react10.useState)();
    const {
      data: images = [],
      isFetching,
      isPreviousData
    } = useLibraryImage({
      offset: offset2,
      limit,
      title,
      tagId
    });
    const intl = useIntl();
    return /* @__PURE__ */ React.createElement("div", {
      className: "Library"
    }, /* @__PURE__ */ React.createElement("div", {
      className: "Library__Filters"
    }, /* @__PURE__ */ React.createElement(Input_default, {
      placeholder: intl.formatMessage({ id: "SEARCH_BY" }),
      type: "text",
      name: "library-search",
      id: "library-search",
      value: title,
      onChange: (e2) => setTitle(e2.target.value),
      label: intl.formatMessage({ id: "BlockImage__LIBRARY_MODAL_SEARCH" }),
      icon: /* @__PURE__ */ React.createElement("i", {
        className: "fa fa-search emphasize"
      }),
      iconAlignment: "right"
    }), /* @__PURE__ */ React.createElement(TagFilter, {
      setTagId
    })), /* @__PURE__ */ React.createElement("div", {
      className: "Library__Content"
    }, isFetching ? /* @__PURE__ */ React.createElement("div", {
      className: "Modal__Content__Loader"
    }, /* @__PURE__ */ React.createElement("span", null, intl.formatMessage({ id: "BlockImage__LIBRARY_SEARCHING" })), /* @__PURE__ */ React.createElement("i", {
      className: "Loader fa fa-circle-notch fa-spin"
    })) : images.length > 0 ? images?.map((image) => {
      return /* @__PURE__ */ React.createElement(LibraryImage, {
        key: image.id,
        image,
        onSelect
      });
    }) : /* @__PURE__ */ React.createElement("div", {
      className: "Library__NoContent"
    }, /* @__PURE__ */ React.createElement("span", null, intl.formatMessage({ id: "BlockImage__LIBRARY_NO_CONTENT" })))), /* @__PURE__ */ React.createElement("div", {
      className: "Pagination"
    }, /* @__PURE__ */ React.createElement("button", {
      className: "Pagination__Button Pagination__Button--previous",
      onClick: () => setOffset((old) => Math.max(old - limit, 0)),
      disabled: offset2 === 0
    }, /* @__PURE__ */ React.createElement("i", {
      className: "fa fa-chevron-left"
    })), /* @__PURE__ */ React.createElement("div", {
      className: "Pagination__Button Pagination__Button--page"
    }, offset2 / limit + 1), /* @__PURE__ */ React.createElement("button", {
      className: "Pagination__Button Pagination__Button--next",
      onClick: () => {
        if (!isPreviousData && (images?.length || 0) >= limit) {
          setOffset((old) => old + limit);
        }
      },
      disabled: isPreviousData || (images?.length || 0) < limit
    }, /* @__PURE__ */ React.createElement("i", {
      className: "fa fa-chevron-right"
    }))));
  };
  function Library({
    isOpen,
    setIsOpen,
    limit = 20,
    onSelect
  }) {
    const intl = useIntl();
    return /* @__PURE__ */ React.createElement(import_react_modal.default, {
      isOpen,
      onRequestClose: () => setIsOpen(false),
      className: "Modal-Library",
      ariaHideApp: false,
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
    }, intl.formatMessage({ id: "BlockImage__LIBRARY_MODAL_TITLE" }))), /* @__PURE__ */ React.createElement("div", {
      className: "Modal__Content"
    }, /* @__PURE__ */ React.createElement(import_react10.Suspense, {
      fallback: /* @__PURE__ */ React.createElement("div", {
        className: "Modal__Content__Loader"
      }, /* @__PURE__ */ React.createElement("span", null, intl.formatMessage({ id: "BlockImage__LIBRARY_LOADING" })), /* @__PURE__ */ React.createElement("i", {
        className: "Loader fa fa-circle-notch fa-spin"
      }))
    }, /* @__PURE__ */ React.createElement(ErrorBoundary_default, null, /* @__PURE__ */ React.createElement(LibraryContent, {
      onSelect,
      limit
    }))))));
  }
  function WrappedComponent(props) {
    return /* @__PURE__ */ React.createElement(provider_default, {
      messages: messages[locale],
      locale
    }, /* @__PURE__ */ React.createElement(QueryClientProvider, {
      client: queryClient
    }, /* @__PURE__ */ React.createElement(Library, {
      ...props
    })));
  }

  // ../../node_modules/react-hot-toast/dist/index.mjs
  var import_react11 = __toESM(require_react(), 1);
  var import_react12 = __toESM(require_react(), 1);
  var d2 = __toESM(require_react(), 1);

  // ../../node_modules/goober/dist/goober.modern.js
  var e = { data: "" };
  var t = (t2) => "object" == typeof window ? ((t2 ? t2.querySelector("#_goober") : window._goober) || Object.assign((t2 || document.head).appendChild(document.createElement("style")), { innerHTML: " ", id: "_goober" })).firstChild : t2 || e;
  var l = /(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g;
  var a = /\/\*[^]*?\*\/|  +/g;
  var n = /\n+/g;
  var o = (e2, t2) => {
    let r = "", l2 = "", a2 = "";
    for (let n3 in e2) {
      let c2 = e2[n3];
      "@" == n3[0] ? "i" == n3[1] ? r = n3 + " " + c2 + ";" : l2 += "f" == n3[1] ? o(c2, n3) : n3 + "{" + o(c2, "k" == n3[1] ? "" : t2) + "}" : "object" == typeof c2 ? l2 += o(c2, t2 ? t2.replace(/([^,])+/g, (e3) => n3.replace(/(^:.*)|([^,])+/g, (t3) => /&/.test(t3) ? t3.replace(/&/g, e3) : e3 ? e3 + " " + t3 : t3)) : n3) : null != c2 && (n3 = /^--/.test(n3) ? n3 : n3.replace(/[A-Z]/g, "-$&").toLowerCase(), a2 += o.p ? o.p(n3, c2) : n3 + ":" + c2 + ";");
    }
    return r + (t2 && a2 ? t2 + "{" + a2 + "}" : a2) + l2;
  };
  var c = {};
  var s = (e2) => {
    if ("object" == typeof e2) {
      let t2 = "";
      for (let r in e2)
        t2 += r + s(e2[r]);
      return t2;
    }
    return e2;
  };
  var i = (e2, t2, r, i2, p2) => {
    let u3 = s(e2), d3 = c[u3] || (c[u3] = ((e3) => {
      let t3 = 0, r2 = 11;
      for (; t3 < e3.length; )
        r2 = 101 * r2 + e3.charCodeAt(t3++) >>> 0;
      return "go" + r2;
    })(u3));
    if (!c[d3]) {
      let t3 = u3 !== e2 ? e2 : ((e3) => {
        let t4, r2, o2 = [{}];
        for (; t4 = l.exec(e3.replace(a, "")); )
          t4[4] ? o2.shift() : t4[3] ? (r2 = t4[3].replace(n, " ").trim(), o2.unshift(o2[0][r2] = o2[0][r2] || {})) : o2[0][t4[1]] = t4[2].replace(n, " ").trim();
        return o2[0];
      })(e2);
      c[d3] = o(p2 ? { ["@keyframes " + d3]: t3 } : t3, r ? "" : "." + d3);
    }
    return ((e3, t3, r2) => {
      -1 == t3.data.indexOf(e3) && (t3.data = r2 ? e3 + t3.data : t3.data + e3);
    })(c[d3], t2, i2), d3;
  };
  var p = (e2, t2, r) => e2.reduce((e3, l2, a2) => {
    let n3 = t2[a2];
    if (n3 && n3.call) {
      let e4 = n3(r), t3 = e4 && e4.props && e4.props.className || /^go/.test(e4) && e4;
      n3 = t3 ? "." + t3 : e4 && "object" == typeof e4 ? e4.props ? "" : o(e4, "") : false === e4 ? "" : e4;
    }
    return e3 + l2 + (null == n3 ? "" : n3);
  }, "");
  function u(e2) {
    let r = this || {}, l2 = e2.call ? e2(r.p) : e2;
    return i(l2.unshift ? l2.raw ? p(l2, [].slice.call(arguments, 1), r.p) : l2.reduce((e3, t2) => Object.assign(e3, t2 && t2.call ? t2(r.p) : t2), {}) : l2, t(r.target), r.g, r.o, r.k);
  }
  var d;
  var f;
  var g;
  var b = u.bind({ g: 1 });
  var h = u.bind({ k: 1 });
  function m(e2, t2, r, l2) {
    o.p = t2, d = e2, f = r, g = l2;
  }
  function j(e2, t2) {
    let r = this || {};
    return function() {
      let l2 = arguments;
      function a2(n3, o2) {
        let c2 = Object.assign({}, n3), s2 = c2.className || a2.className;
        r.p = Object.assign({ theme: f && f() }, c2), r.o = / *go\d+/.test(s2), c2.className = u.apply(r, l2) + (s2 ? " " + s2 : ""), t2 && (c2.ref = o2);
        let i2 = e2;
        return e2[0] && (i2 = c2.as || e2, delete c2.as), g && i2[0] && g(c2), d(i2, c2);
      }
      return t2 ? t2(a2) : a2;
    };
  }

  // ../../node_modules/react-hot-toast/dist/index.mjs
  var f2 = __toESM(require_react(), 1);
  var x = __toESM(require_react(), 1);
  var H = (e2) => typeof e2 == "function";
  var u2 = (e2, t2) => H(e2) ? e2(t2) : e2;
  var U = (() => {
    let e2 = 0;
    return () => (++e2).toString();
  })();
  var $ = (e2) => (t2) => {
    t2 && setTimeout(() => {
      let o2 = t2.getBoundingClientRect();
      e2(o2);
    });
  };
  var S = (() => {
    let e2;
    return () => {
      if (e2 === void 0 && typeof window < "u") {
        let t2 = matchMedia("(prefers-reduced-motion: reduce)");
        e2 = !t2 || t2.matches;
      }
      return e2;
    };
  })();
  var Q = 20;
  var A = /* @__PURE__ */ new Map();
  var L = (e2) => {
    if (A.has(e2))
      return;
    let t2 = setTimeout(() => {
      A.delete(e2), m2({ type: 4, toastId: e2 });
    }, 1e3);
    A.set(e2, t2);
  };
  var J = (e2) => {
    let t2 = A.get(e2);
    t2 && clearTimeout(t2);
  };
  var E = (e2, t2) => {
    switch (t2.type) {
      case 0:
        return { ...e2, toasts: [t2.toast, ...e2.toasts].slice(0, Q) };
      case 1:
        return t2.toast.id && J(t2.toast.id), { ...e2, toasts: e2.toasts.map((a2) => a2.id === t2.toast.id ? { ...a2, ...t2.toast } : a2) };
      case 2:
        let { toast: o2 } = t2;
        return e2.toasts.find((a2) => a2.id === o2.id) ? E(e2, { type: 1, toast: o2 }) : E(e2, { type: 0, toast: o2 });
      case 3:
        let { toastId: s2 } = t2;
        return s2 ? L(s2) : e2.toasts.forEach((a2) => {
          L(a2.id);
        }), { ...e2, toasts: e2.toasts.map((a2) => a2.id === s2 || s2 === void 0 ? { ...a2, visible: false } : a2) };
      case 4:
        return t2.toastId === void 0 ? { ...e2, toasts: [] } : { ...e2, toasts: e2.toasts.filter((a2) => a2.id !== t2.toastId) };
      case 5:
        return { ...e2, pausedAt: t2.time };
      case 6:
        let r = t2.time - (e2.pausedAt || 0);
        return { ...e2, pausedAt: void 0, toasts: e2.toasts.map((a2) => ({ ...a2, pauseDuration: a2.pauseDuration + r })) };
    }
  };
  var P = [];
  var R = { toasts: [], pausedAt: void 0 };
  var m2 = (e2) => {
    R = E(R, e2), P.forEach((t2) => {
      t2(R);
    });
  };
  var X = { blank: 4e3, error: 4e3, success: 2e3, loading: 1 / 0, custom: 4e3 };
  var v = (e2 = {}) => {
    let [t2, o2] = (0, import_react11.useState)(R);
    (0, import_react11.useEffect)(() => (P.push(o2), () => {
      let r = P.indexOf(o2);
      r > -1 && P.splice(r, 1);
    }), [t2]);
    let s2 = t2.toasts.map((r) => {
      var a2, i2;
      return { ...e2, ...e2[r.type], ...r, duration: r.duration || ((a2 = e2[r.type]) == null ? void 0 : a2.duration) || (e2 == null ? void 0 : e2.duration) || X[r.type], style: { ...e2.style, ...(i2 = e2[r.type]) == null ? void 0 : i2.style, ...r.style } };
    });
    return { ...t2, toasts: s2 };
  };
  var q = (e2, t2 = "blank", o2) => ({ createdAt: Date.now(), visible: true, type: t2, ariaProps: { role: "status", "aria-live": "polite" }, message: e2, pauseDuration: 0, ...o2, id: (o2 == null ? void 0 : o2.id) || U() });
  var g2 = (e2) => (t2, o2) => {
    let s2 = q(t2, e2, o2);
    return m2({ type: 2, toast: s2 }), s2.id;
  };
  var n2 = (e2, t2) => g2("blank")(e2, t2);
  n2.error = g2("error");
  n2.success = g2("success");
  n2.loading = g2("loading");
  n2.custom = g2("custom");
  n2.dismiss = (e2) => {
    m2({ type: 3, toastId: e2 });
  };
  n2.remove = (e2) => m2({ type: 4, toastId: e2 });
  n2.promise = (e2, t2, o2) => {
    let s2 = n2.loading(t2.loading, { ...o2, ...o2 == null ? void 0 : o2.loading });
    return e2.then((r) => (n2.success(u2(t2.success, r), { id: s2, ...o2, ...o2 == null ? void 0 : o2.success }), r)).catch((r) => {
      n2.error(u2(t2.error, r), { id: s2, ...o2, ...o2 == null ? void 0 : o2.error });
    }), e2;
  };
  var D = (e2) => {
    let { toasts: t2, pausedAt: o2 } = v(e2);
    (0, import_react12.useEffect)(() => {
      if (o2)
        return;
      let r = Date.now(), a2 = t2.map((i2) => {
        if (i2.duration === 1 / 0)
          return;
        let T = (i2.duration || 0) + i2.pauseDuration - (r - i2.createdAt);
        if (T < 0) {
          i2.visible && n2.dismiss(i2.id);
          return;
        }
        return setTimeout(() => n2.dismiss(i2.id), T);
      });
      return () => {
        a2.forEach((i2) => i2 && clearTimeout(i2));
      };
    }, [t2, o2]);
    let s2 = (0, import_react12.useMemo)(() => ({ startPause: () => {
      m2({ type: 5, time: Date.now() });
    }, endPause: () => {
      o2 && m2({ type: 6, time: Date.now() });
    }, updateHeight: (r, a2) => m2({ type: 1, toast: { id: r, height: a2 } }), calculateOffset: (r, a2) => {
      let { reverseOrder: i2 = false, gutter: T = 8, defaultPosition: l2 } = a2 || {}, c2 = t2.filter((p2) => (p2.position || l2) === (r.position || l2) && p2.height), h2 = c2.findIndex((p2) => p2.id === r.id), b2 = c2.filter((p2, y) => y < h2 && p2.visible).length;
      return c2.filter((p2) => p2.visible).slice(...i2 ? [b2 + 1] : [0, b2]).reduce((p2, y) => p2 + (y.height || 0) + T, 0);
    } }), [t2, o2]);
    return { toasts: t2, handlers: s2 };
  };
  var ee = h`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`;
  var te = h`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`;
  var oe = h`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`;
  var k = j("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${(e2) => e2.primary || "#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${ee} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${te} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${(e2) => e2.secondary || "#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${oe} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`;
  var se = h`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
  var V = j("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${(e2) => e2.secondary || "#e0e0e0"};
  border-right-color: ${(e2) => e2.primary || "#616161"};
  animation: ${se} 1s linear infinite;
`;
  var ne = h`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`;
  var ce = h`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`;
  var _ = j("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${(e2) => e2.primary || "#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${ne} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${ce} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${(e2) => e2.secondary || "#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`;
  var de = j("div")`
  position: absolute;
`;
  var me = j("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`;
  var ue = h`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`;
  var le = j("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${ue} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`;
  var M = ({ toast: e2 }) => {
    let { icon: t2, type: o2, iconTheme: s2 } = e2;
    return t2 !== void 0 ? typeof t2 == "string" ? f2.createElement(le, null, t2) : t2 : o2 === "blank" ? null : f2.createElement(me, null, f2.createElement(V, { ...s2 }), o2 !== "loading" && f2.createElement(de, null, o2 === "error" ? f2.createElement(k, { ...s2 }) : f2.createElement(_, { ...s2 })));
  };
  var fe = (e2) => `
0% {transform: translate3d(0,${e2 * -200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`;
  var Te = (e2) => `
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e2 * -150}%,-1px) scale(.6); opacity:0;}
`;
  var ye = "0%{opacity:0;} 100%{opacity:1;}";
  var ge = "0%{opacity:1;} 100%{opacity:0;}";
  var xe = j("div", d2.forwardRef)`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`;
  var he = j("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`;
  var be = (e2, t2) => {
    let s2 = e2.includes("top") ? 1 : -1, [r, a2] = S() ? [ye, ge] : [fe(s2), Te(s2)];
    return { animation: t2 ? `${h(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards` : `${h(a2)} 0.4s forwards cubic-bezier(.06,.71,.55,1)` };
  };
  var C = d2.memo(({ toast: e2, position: t2, style: o2, children: s2 }) => {
    let r = e2 != null && e2.height ? be(e2.position || t2 || "top-center", e2.visible) : { opacity: 0 }, a2 = d2.createElement(M, { toast: e2 }), i2 = d2.createElement(he, { ...e2.ariaProps }, u2(e2.message, e2));
    return d2.createElement(xe, { className: e2.className, style: { ...r, ...o2, ...e2.style } }, typeof s2 == "function" ? s2({ icon: a2, message: i2 }) : d2.createElement(d2.Fragment, null, a2, i2));
  });
  m(x.createElement);
  var Pe = (e2, t2) => {
    let o2 = e2.includes("top"), s2 = o2 ? { top: 0 } : { bottom: 0 }, r = e2.includes("center") ? { justifyContent: "center" } : e2.includes("right") ? { justifyContent: "flex-end" } : {};
    return { left: 0, right: 0, display: "flex", position: "absolute", transition: S() ? void 0 : "all 230ms cubic-bezier(.21,1.02,.73,1)", transform: `translateY(${t2 * (o2 ? 1 : -1)}px)`, ...s2, ...r };
  };
  var Re = u`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`;
  var O = 16;
  var Oe = ({ reverseOrder: e2, position: t2 = "top-center", toastOptions: o2, gutter: s2, children: r, containerStyle: a2, containerClassName: i2 }) => {
    let { toasts: T, handlers: l2 } = D(o2);
    return x.createElement("div", { style: { position: "fixed", zIndex: 9999, top: O, left: O, right: O, bottom: O, pointerEvents: "none", ...a2 }, className: i2, onMouseEnter: l2.startPause, onMouseLeave: l2.endPause }, T.map((c2) => {
      let h2 = c2.position || t2, b2 = l2.calculateOffset(c2, { reverseOrder: e2, gutter: s2, defaultPosition: t2 }), F = Pe(h2, b2), p2 = c2.height ? void 0 : $((y) => {
        l2.updateHeight(c2.id, y.height);
      });
      return x.createElement("div", { ref: p2, className: c2.visible ? Re : "", key: c2.id, style: F }, c2.type === "custom" ? u2(c2.message, c2) : r ? r(c2) : x.createElement(C, { toast: c2, position: h2 }));
    }));
  };

  // src/Image/index.tsx
  var FromLocal = ({ onSelect }) => {
    const intl = useIntl();
    const createImage = useCreateImage();
    const { getRootProps, isDragActive } = useDropzone({
      multiple: false,
      accept: {
        "image/*": ["*"]
      },
      noClick: true,
      maxFiles: 1,
      onDrop: async (acceptedFiles) => {
        if (acceptedFiles) {
          const formData = new FormData();
          formData.append("image", acceptedFiles[0]);
          const res = await createImage.mutateAsync(formData);
          onSelect(res);
        }
      },
      onDropRejected: (rejectedFiles) => {
        rejectedFiles.length > 1 ? n2.error(intl.formatMessage({ id: "BlockImage__TOAST_MAX_FILE" })) : n2.error(intl.formatMessage({ id: "BlockImage__TOAST_WRONG_FILE_TYPE" }));
      }
    });
    return /* @__PURE__ */ React.createElement("div", {
      className: "BlockImage__FromLocal",
      style: { border: isDragActive ? "2px dashed #dc3018" : "1px dashed #787878" },
      ...getRootProps()
    }, /* @__PURE__ */ React.createElement("div", {
      className: "BlockImage__FromLocal__Icon"
    }, /* @__PURE__ */ React.createElement(SvgDownload, null)), isDragActive ? intl.formatMessage({ id: "BlockImage__DROP_TO_UPLOAD" }) : !createImage.isLoading ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("form", {
      onSubmit: (e2) => {
        e2.preventDefault();
      }
    }, /* @__PURE__ */ React.createElement("label", {
      className: "BlockImage__Button",
      htmlFor: "image"
    }, intl.formatMessage({ id: "BlockImage__DOWNLOAD" })), /* @__PURE__ */ React.createElement("input", {
      className: "BlockImage__FromLocal__FileInput",
      type: "file",
      accept: "image/*",
      name: "image",
      id: "image",
      onChange: async (e2) => {
        if (e2.target.files) {
          const formData = new FormData();
          formData.append("image", e2.target.files[0]);
          const res = await createImage.mutateAsync(formData);
          onSelect(res);
        }
      }
    }), /* @__PURE__ */ React.createElement("span", null, intl.formatMessage({ id: "BlockImage__OR_DROP" })))) : /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("span", null, intl.formatMessage({ id: "DOWNLOADING" })), /* @__PURE__ */ React.createElement("i", {
      className: "Loader fa fa-circle-notch fa-spin"
    })));
  };
  var FromLibrary = ({ onSelect }) => {
    const [isOpen, setIsOpen] = (0, import_react13.useState)(false);
    const intl = useIntl();
    return /* @__PURE__ */ React.createElement("div", {
      className: "BlockImage__FromLibrary"
    }, /* @__PURE__ */ React.createElement("div", {
      className: "BlockImage__FromLibrary__Icon"
    }, /* @__PURE__ */ React.createElement(SvgMediatheque, null)), /* @__PURE__ */ React.createElement("button", {
      onClick: () => {
        setIsOpen(true);
      }
    }, /* @__PURE__ */ React.createElement("span", null, intl.formatMessage({ id: "BlockImage__UPLOAD" }))), isOpen ? /* @__PURE__ */ React.createElement(WrappedComponent, {
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
    const intl = useIntl();
    if (!id)
      return null;
    return /* @__PURE__ */ React.createElement("div", {
      className: "BlockImage__Preview"
    }, /* @__PURE__ */ React.createElement("img", {
      src: `/image-library/${id}/full/^!220,220/0/default.webp`,
      alt: "",
      loading: "lazy",
      onError: (e2) => e2.target.src = `https://via.placeholder.com/220`
    }), /* @__PURE__ */ React.createElement("div", {
      className: "BlockImage__Preview__Infos"
    }, /* @__PURE__ */ React.createElement("span", {
      className: "BlockImage__Preview__FileName"
    }, fileName), /* @__PURE__ */ React.createElement("button", {
      className: "BlockImage__Button",
      onClick: () => {
        setEditMode(true);
      }
    }, intl.formatMessage({ id: "REPLACE" }))));
  };
  var ImageInfos = ({
    image,
    onChange
  }) => {
    const intl = useIntl();
    return /* @__PURE__ */ React.createElement("form", {
      className: "BlockImage__Infos__Form",
      onSubmit: (e2) => {
        e2.preventDefault();
      }
    }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", null, intl.formatMessage({ id: "BlockImage__TITLE" })), /* @__PURE__ */ React.createElement("input", {
      className: "Input__Text",
      type: "text",
      name: "title",
      value: image.title,
      placeholder: intl.formatMessage({ id: "BlockImage__TITLE" }),
      onChange: (e2) => {
        onChange({
          title: e2.target.value
        });
      }
    })), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", null, intl.formatMessage({ id: "BlockImage__LINK" }), " (", intl.formatMessage({ id: "OPTIONAL" }), ")"), /* @__PURE__ */ React.createElement("input", {
      className: "Input__Text",
      type: "text",
      name: "linkUrl",
      value: image.link?.url || "",
      placeholder: intl.formatMessage({ id: "BlockImage__LINK_PLACEHOLDER" }),
      onChange: (e2) => {
        onChange({
          link: {
            url: e2.target.value
          }
        });
      }
    })));
  };
  var BlockImageComponent = (props) => {
    const { data, onUpdate } = props;
    const [image, setImage] = (0, import_react13.useState)(null);
    const [isEditMode, setEditMode] = (0, import_react13.useState)(false);
    const intl = useIntl();
    (0, import_react13.useEffect)(() => {
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
    }, intl.formatMessage({ id: "REPLACE_IMAGE" }), ' "', image.title, '"') : null, /* @__PURE__ */ React.createElement("div", {
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
    }, intl.formatMessage({ id: "CANCEL" })) : null) : null);
  };
  var WrappedComponent2 = (props) => {
    return /* @__PURE__ */ React.createElement(provider_default, {
      messages: messages[locale],
      locale
    }, /* @__PURE__ */ React.createElement(QueryClientProvider, {
      client: queryClient
    }, /* @__PURE__ */ React.createElement(Oe, {
      toastOptions: {
        success: {
          style: {
            background: "#EAFBF5",
            border: "1px solid #005A3A"
          }
        },
        error: {
          style: {
            background: "#FFEDED",
            border: "1px solid #D21919"
          }
        }
      }
    }), /* @__PURE__ */ React.createElement(BlockImageComponent, {
      ...props
    })));
  };
  var initialData = {
    url: null,
    id: null,
    title: "",
    fileName: "",
    tags: []
  };
  var moduleType = {
    id: "blockImage"
  };
  var blockImage = {
    type: moduleType,
    component: WrappedComponent2,
    initialData,
    title: {
      default: "Image",
      fr: "Image",
      en: "Image",
      es: "Imagen",
      it: "Immagine"
    },
    description: {
      default: "Display an image",
      fr: "Affiche une image",
      en: "Display an image",
      es: "Mostrar una imagen",
      it: "Mostra un immagine"
    },
    icon: SvgImage,
    image: {
      default: ""
    }
  };
  var Image_default = blockImage;

  // src/index.tsx
  var import_blocks_editor = __toESM(require_blocks_editor());
  (0, import_blocks_editor.registerPlugin)(Image_default);
  var src_default = WrappedComponent;
  return __toCommonJS(src_exports);
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