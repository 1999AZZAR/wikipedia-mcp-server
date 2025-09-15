var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
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
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// node_modules/uri-js/dist/es5/uri.all.js
var require_uri_all = __commonJS({
  "node_modules/uri-js/dist/es5/uri.all.js"(exports, module) {
    (function(global, factory) {
      typeof exports === "object" && typeof module !== "undefined" ? factory(exports) : typeof define === "function" && define.amd ? define(["exports"], factory) : factory(global.URI = global.URI || {});
    })(exports, function(exports2) {
      "use strict";
      function merge() {
        for (var _len = arguments.length, sets = Array(_len), _key = 0; _key < _len; _key++) {
          sets[_key] = arguments[_key];
        }
        if (sets.length > 1) {
          sets[0] = sets[0].slice(0, -1);
          var xl = sets.length - 1;
          for (var x = 1; x < xl; ++x) {
            sets[x] = sets[x].slice(1, -1);
          }
          sets[xl] = sets[xl].slice(1);
          return sets.join("");
        } else {
          return sets[0];
        }
      }
      __name(merge, "merge");
      function subexp(str) {
        return "(?:" + str + ")";
      }
      __name(subexp, "subexp");
      function typeOf(o) {
        return o === void 0 ? "undefined" : o === null ? "null" : Object.prototype.toString.call(o).split(" ").pop().split("]").shift().toLowerCase();
      }
      __name(typeOf, "typeOf");
      function toUpperCase(str) {
        return str.toUpperCase();
      }
      __name(toUpperCase, "toUpperCase");
      function toArray(obj) {
        return obj !== void 0 && obj !== null ? obj instanceof Array ? obj : typeof obj.length !== "number" || obj.split || obj.setInterval || obj.call ? [obj] : Array.prototype.slice.call(obj) : [];
      }
      __name(toArray, "toArray");
      function assign(target, source) {
        var obj = target;
        if (source) {
          for (var key in source) {
            obj[key] = source[key];
          }
        }
        return obj;
      }
      __name(assign, "assign");
      function buildExps(isIRI2) {
        var ALPHA$$ = "[A-Za-z]", CR$ = "[\\x0D]", DIGIT$$ = "[0-9]", DQUOTE$$ = "[\\x22]", HEXDIG$$2 = merge(DIGIT$$, "[A-Fa-f]"), LF$$ = "[\\x0A]", SP$$ = "[\\x20]", PCT_ENCODED$2 = subexp(subexp("%[EFef]" + HEXDIG$$2 + "%" + HEXDIG$$2 + HEXDIG$$2 + "%" + HEXDIG$$2 + HEXDIG$$2) + "|" + subexp("%[89A-Fa-f]" + HEXDIG$$2 + "%" + HEXDIG$$2 + HEXDIG$$2) + "|" + subexp("%" + HEXDIG$$2 + HEXDIG$$2)), GEN_DELIMS$$ = "[\\:\\/\\?\\#\\[\\]\\@]", SUB_DELIMS$$ = "[\\!\\$\\&\\'\\(\\)\\*\\+\\,\\;\\=]", RESERVED$$ = merge(GEN_DELIMS$$, SUB_DELIMS$$), UCSCHAR$$ = isIRI2 ? "[\\xA0-\\u200D\\u2010-\\u2029\\u202F-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF]" : "[]", IPRIVATE$$ = isIRI2 ? "[\\uE000-\\uF8FF]" : "[]", UNRESERVED$$2 = merge(ALPHA$$, DIGIT$$, "[\\-\\.\\_\\~]", UCSCHAR$$), SCHEME$ = subexp(ALPHA$$ + merge(ALPHA$$, DIGIT$$, "[\\+\\-\\.]") + "*"), USERINFO$ = subexp(subexp(PCT_ENCODED$2 + "|" + merge(UNRESERVED$$2, SUB_DELIMS$$, "[\\:]")) + "*"), DEC_OCTET$ = subexp(subexp("25[0-5]") + "|" + subexp("2[0-4]" + DIGIT$$) + "|" + subexp("1" + DIGIT$$ + DIGIT$$) + "|" + subexp("[1-9]" + DIGIT$$) + "|" + DIGIT$$), DEC_OCTET_RELAXED$ = subexp(subexp("25[0-5]") + "|" + subexp("2[0-4]" + DIGIT$$) + "|" + subexp("1" + DIGIT$$ + DIGIT$$) + "|" + subexp("0?[1-9]" + DIGIT$$) + "|0?0?" + DIGIT$$), IPV4ADDRESS$ = subexp(DEC_OCTET_RELAXED$ + "\\." + DEC_OCTET_RELAXED$ + "\\." + DEC_OCTET_RELAXED$ + "\\." + DEC_OCTET_RELAXED$), H16$ = subexp(HEXDIG$$2 + "{1,4}"), LS32$ = subexp(subexp(H16$ + "\\:" + H16$) + "|" + IPV4ADDRESS$), IPV6ADDRESS1$ = subexp(subexp(H16$ + "\\:") + "{6}" + LS32$), IPV6ADDRESS2$ = subexp("\\:\\:" + subexp(H16$ + "\\:") + "{5}" + LS32$), IPV6ADDRESS3$ = subexp(subexp(H16$) + "?\\:\\:" + subexp(H16$ + "\\:") + "{4}" + LS32$), IPV6ADDRESS4$ = subexp(subexp(subexp(H16$ + "\\:") + "{0,1}" + H16$) + "?\\:\\:" + subexp(H16$ + "\\:") + "{3}" + LS32$), IPV6ADDRESS5$ = subexp(subexp(subexp(H16$ + "\\:") + "{0,2}" + H16$) + "?\\:\\:" + subexp(H16$ + "\\:") + "{2}" + LS32$), IPV6ADDRESS6$ = subexp(subexp(subexp(H16$ + "\\:") + "{0,3}" + H16$) + "?\\:\\:" + H16$ + "\\:" + LS32$), IPV6ADDRESS7$ = subexp(subexp(subexp(H16$ + "\\:") + "{0,4}" + H16$) + "?\\:\\:" + LS32$), IPV6ADDRESS8$ = subexp(subexp(subexp(H16$ + "\\:") + "{0,5}" + H16$) + "?\\:\\:" + H16$), IPV6ADDRESS9$ = subexp(subexp(subexp(H16$ + "\\:") + "{0,6}" + H16$) + "?\\:\\:"), IPV6ADDRESS$ = subexp([IPV6ADDRESS1$, IPV6ADDRESS2$, IPV6ADDRESS3$, IPV6ADDRESS4$, IPV6ADDRESS5$, IPV6ADDRESS6$, IPV6ADDRESS7$, IPV6ADDRESS8$, IPV6ADDRESS9$].join("|")), ZONEID$ = subexp(subexp(UNRESERVED$$2 + "|" + PCT_ENCODED$2) + "+"), IPV6ADDRZ$ = subexp(IPV6ADDRESS$ + "\\%25" + ZONEID$), IPV6ADDRZ_RELAXED$ = subexp(IPV6ADDRESS$ + subexp("\\%25|\\%(?!" + HEXDIG$$2 + "{2})") + ZONEID$), IPVFUTURE$ = subexp("[vV]" + HEXDIG$$2 + "+\\." + merge(UNRESERVED$$2, SUB_DELIMS$$, "[\\:]") + "+"), IP_LITERAL$ = subexp("\\[" + subexp(IPV6ADDRZ_RELAXED$ + "|" + IPV6ADDRESS$ + "|" + IPVFUTURE$) + "\\]"), REG_NAME$ = subexp(subexp(PCT_ENCODED$2 + "|" + merge(UNRESERVED$$2, SUB_DELIMS$$)) + "*"), HOST$ = subexp(IP_LITERAL$ + "|" + IPV4ADDRESS$ + "(?!" + REG_NAME$ + ")|" + REG_NAME$), PORT$ = subexp(DIGIT$$ + "*"), AUTHORITY$ = subexp(subexp(USERINFO$ + "@") + "?" + HOST$ + subexp("\\:" + PORT$) + "?"), PCHAR$ = subexp(PCT_ENCODED$2 + "|" + merge(UNRESERVED$$2, SUB_DELIMS$$, "[\\:\\@]")), SEGMENT$ = subexp(PCHAR$ + "*"), SEGMENT_NZ$ = subexp(PCHAR$ + "+"), SEGMENT_NZ_NC$ = subexp(subexp(PCT_ENCODED$2 + "|" + merge(UNRESERVED$$2, SUB_DELIMS$$, "[\\@]")) + "+"), PATH_ABEMPTY$ = subexp(subexp("\\/" + SEGMENT$) + "*"), PATH_ABSOLUTE$ = subexp("\\/" + subexp(SEGMENT_NZ$ + PATH_ABEMPTY$) + "?"), PATH_NOSCHEME$ = subexp(SEGMENT_NZ_NC$ + PATH_ABEMPTY$), PATH_ROOTLESS$ = subexp(SEGMENT_NZ$ + PATH_ABEMPTY$), PATH_EMPTY$ = "(?!" + PCHAR$ + ")", PATH$ = subexp(PATH_ABEMPTY$ + "|" + PATH_ABSOLUTE$ + "|" + PATH_NOSCHEME$ + "|" + PATH_ROOTLESS$ + "|" + PATH_EMPTY$), QUERY$ = subexp(subexp(PCHAR$ + "|" + merge("[\\/\\?]", IPRIVATE$$)) + "*"), FRAGMENT$ = subexp(subexp(PCHAR$ + "|[\\/\\?]") + "*"), HIER_PART$ = subexp(subexp("\\/\\/" + AUTHORITY$ + PATH_ABEMPTY$) + "|" + PATH_ABSOLUTE$ + "|" + PATH_ROOTLESS$ + "|" + PATH_EMPTY$), URI$ = subexp(SCHEME$ + "\\:" + HIER_PART$ + subexp("\\?" + QUERY$) + "?" + subexp("\\#" + FRAGMENT$) + "?"), RELATIVE_PART$ = subexp(subexp("\\/\\/" + AUTHORITY$ + PATH_ABEMPTY$) + "|" + PATH_ABSOLUTE$ + "|" + PATH_NOSCHEME$ + "|" + PATH_EMPTY$), RELATIVE$ = subexp(RELATIVE_PART$ + subexp("\\?" + QUERY$) + "?" + subexp("\\#" + FRAGMENT$) + "?"), URI_REFERENCE$ = subexp(URI$ + "|" + RELATIVE$), ABSOLUTE_URI$ = subexp(SCHEME$ + "\\:" + HIER_PART$ + subexp("\\?" + QUERY$) + "?"), GENERIC_REF$ = "^(" + SCHEME$ + ")\\:" + subexp(subexp("\\/\\/(" + subexp("(" + USERINFO$ + ")@") + "?(" + HOST$ + ")" + subexp("\\:(" + PORT$ + ")") + "?)") + "?(" + PATH_ABEMPTY$ + "|" + PATH_ABSOLUTE$ + "|" + PATH_ROOTLESS$ + "|" + PATH_EMPTY$ + ")") + subexp("\\?(" + QUERY$ + ")") + "?" + subexp("\\#(" + FRAGMENT$ + ")") + "?$", RELATIVE_REF$ = "^(){0}" + subexp(subexp("\\/\\/(" + subexp("(" + USERINFO$ + ")@") + "?(" + HOST$ + ")" + subexp("\\:(" + PORT$ + ")") + "?)") + "?(" + PATH_ABEMPTY$ + "|" + PATH_ABSOLUTE$ + "|" + PATH_NOSCHEME$ + "|" + PATH_EMPTY$ + ")") + subexp("\\?(" + QUERY$ + ")") + "?" + subexp("\\#(" + FRAGMENT$ + ")") + "?$", ABSOLUTE_REF$ = "^(" + SCHEME$ + ")\\:" + subexp(subexp("\\/\\/(" + subexp("(" + USERINFO$ + ")@") + "?(" + HOST$ + ")" + subexp("\\:(" + PORT$ + ")") + "?)") + "?(" + PATH_ABEMPTY$ + "|" + PATH_ABSOLUTE$ + "|" + PATH_ROOTLESS$ + "|" + PATH_EMPTY$ + ")") + subexp("\\?(" + QUERY$ + ")") + "?$", SAMEDOC_REF$ = "^" + subexp("\\#(" + FRAGMENT$ + ")") + "?$", AUTHORITY_REF$ = "^" + subexp("(" + USERINFO$ + ")@") + "?(" + HOST$ + ")" + subexp("\\:(" + PORT$ + ")") + "?$";
        return {
          NOT_SCHEME: new RegExp(merge("[^]", ALPHA$$, DIGIT$$, "[\\+\\-\\.]"), "g"),
          NOT_USERINFO: new RegExp(merge("[^\\%\\:]", UNRESERVED$$2, SUB_DELIMS$$), "g"),
          NOT_HOST: new RegExp(merge("[^\\%\\[\\]\\:]", UNRESERVED$$2, SUB_DELIMS$$), "g"),
          NOT_PATH: new RegExp(merge("[^\\%\\/\\:\\@]", UNRESERVED$$2, SUB_DELIMS$$), "g"),
          NOT_PATH_NOSCHEME: new RegExp(merge("[^\\%\\/\\@]", UNRESERVED$$2, SUB_DELIMS$$), "g"),
          NOT_QUERY: new RegExp(merge("[^\\%]", UNRESERVED$$2, SUB_DELIMS$$, "[\\:\\@\\/\\?]", IPRIVATE$$), "g"),
          NOT_FRAGMENT: new RegExp(merge("[^\\%]", UNRESERVED$$2, SUB_DELIMS$$, "[\\:\\@\\/\\?]"), "g"),
          ESCAPE: new RegExp(merge("[^]", UNRESERVED$$2, SUB_DELIMS$$), "g"),
          UNRESERVED: new RegExp(UNRESERVED$$2, "g"),
          OTHER_CHARS: new RegExp(merge("[^\\%]", UNRESERVED$$2, RESERVED$$), "g"),
          PCT_ENCODED: new RegExp(PCT_ENCODED$2, "g"),
          IPV4ADDRESS: new RegExp("^(" + IPV4ADDRESS$ + ")$"),
          IPV6ADDRESS: new RegExp("^\\[?(" + IPV6ADDRESS$ + ")" + subexp(subexp("\\%25|\\%(?!" + HEXDIG$$2 + "{2})") + "(" + ZONEID$ + ")") + "?\\]?$")
          //RFC 6874, with relaxed parsing rules
        };
      }
      __name(buildExps, "buildExps");
      var URI_PROTOCOL = buildExps(false);
      var IRI_PROTOCOL = buildExps(true);
      var slicedToArray = function() {
        function sliceIterator(arr, i) {
          var _arr = [];
          var _n = true;
          var _d = false;
          var _e = void 0;
          try {
            for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
              _arr.push(_s.value);
              if (i && _arr.length === i)
                break;
            }
          } catch (err) {
            _d = true;
            _e = err;
          } finally {
            try {
              if (!_n && _i["return"])
                _i["return"]();
            } finally {
              if (_d)
                throw _e;
            }
          }
          return _arr;
        }
        __name(sliceIterator, "sliceIterator");
        return function(arr, i) {
          if (Array.isArray(arr)) {
            return arr;
          } else if (Symbol.iterator in Object(arr)) {
            return sliceIterator(arr, i);
          } else {
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
          }
        };
      }();
      var toConsumableArray = /* @__PURE__ */ __name(function(arr) {
        if (Array.isArray(arr)) {
          for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++)
            arr2[i] = arr[i];
          return arr2;
        } else {
          return Array.from(arr);
        }
      }, "toConsumableArray");
      var maxInt = 2147483647;
      var base = 36;
      var tMin = 1;
      var tMax = 26;
      var skew = 38;
      var damp = 700;
      var initialBias = 72;
      var initialN = 128;
      var delimiter = "-";
      var regexPunycode = /^xn--/;
      var regexNonASCII = /[^\0-\x7E]/;
      var regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g;
      var errors = {
        "overflow": "Overflow: input needs wider integers to process",
        "not-basic": "Illegal input >= 0x80 (not a basic code point)",
        "invalid-input": "Invalid input"
      };
      var baseMinusTMin = base - tMin;
      var floor = Math.floor;
      var stringFromCharCode = String.fromCharCode;
      function error$1(type) {
        throw new RangeError(errors[type]);
      }
      __name(error$1, "error$1");
      function map(array, fn) {
        var result = [];
        var length = array.length;
        while (length--) {
          result[length] = fn(array[length]);
        }
        return result;
      }
      __name(map, "map");
      function mapDomain(string, fn) {
        var parts = string.split("@");
        var result = "";
        if (parts.length > 1) {
          result = parts[0] + "@";
          string = parts[1];
        }
        string = string.replace(regexSeparators, ".");
        var labels = string.split(".");
        var encoded = map(labels, fn).join(".");
        return result + encoded;
      }
      __name(mapDomain, "mapDomain");
      function ucs2decode(string) {
        var output = [];
        var counter = 0;
        var length = string.length;
        while (counter < length) {
          var value = string.charCodeAt(counter++);
          if (value >= 55296 && value <= 56319 && counter < length) {
            var extra = string.charCodeAt(counter++);
            if ((extra & 64512) == 56320) {
              output.push(((value & 1023) << 10) + (extra & 1023) + 65536);
            } else {
              output.push(value);
              counter--;
            }
          } else {
            output.push(value);
          }
        }
        return output;
      }
      __name(ucs2decode, "ucs2decode");
      var ucs2encode = /* @__PURE__ */ __name(function ucs2encode2(array) {
        return String.fromCodePoint.apply(String, toConsumableArray(array));
      }, "ucs2encode");
      var basicToDigit = /* @__PURE__ */ __name(function basicToDigit2(codePoint) {
        if (codePoint - 48 < 10) {
          return codePoint - 22;
        }
        if (codePoint - 65 < 26) {
          return codePoint - 65;
        }
        if (codePoint - 97 < 26) {
          return codePoint - 97;
        }
        return base;
      }, "basicToDigit");
      var digitToBasic = /* @__PURE__ */ __name(function digitToBasic2(digit, flag) {
        return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
      }, "digitToBasic");
      var adapt = /* @__PURE__ */ __name(function adapt2(delta, numPoints, firstTime) {
        var k = 0;
        delta = firstTime ? floor(delta / damp) : delta >> 1;
        delta += floor(delta / numPoints);
        for (
          ;
          /* no initialization */
          delta > baseMinusTMin * tMax >> 1;
          k += base
        ) {
          delta = floor(delta / baseMinusTMin);
        }
        return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
      }, "adapt");
      var decode = /* @__PURE__ */ __name(function decode2(input) {
        var output = [];
        var inputLength = input.length;
        var i = 0;
        var n = initialN;
        var bias = initialBias;
        var basic = input.lastIndexOf(delimiter);
        if (basic < 0) {
          basic = 0;
        }
        for (var j = 0; j < basic; ++j) {
          if (input.charCodeAt(j) >= 128) {
            error$1("not-basic");
          }
          output.push(input.charCodeAt(j));
        }
        for (var index = basic > 0 ? basic + 1 : 0; index < inputLength; ) {
          var oldi = i;
          for (
            var w = 1, k = base;
            ;
            /* no condition */
            k += base
          ) {
            if (index >= inputLength) {
              error$1("invalid-input");
            }
            var digit = basicToDigit(input.charCodeAt(index++));
            if (digit >= base || digit > floor((maxInt - i) / w)) {
              error$1("overflow");
            }
            i += digit * w;
            var t = k <= bias ? tMin : k >= bias + tMax ? tMax : k - bias;
            if (digit < t) {
              break;
            }
            var baseMinusT = base - t;
            if (w > floor(maxInt / baseMinusT)) {
              error$1("overflow");
            }
            w *= baseMinusT;
          }
          var out = output.length + 1;
          bias = adapt(i - oldi, out, oldi == 0);
          if (floor(i / out) > maxInt - n) {
            error$1("overflow");
          }
          n += floor(i / out);
          i %= out;
          output.splice(i++, 0, n);
        }
        return String.fromCodePoint.apply(String, output);
      }, "decode");
      var encode = /* @__PURE__ */ __name(function encode2(input) {
        var output = [];
        input = ucs2decode(input);
        var inputLength = input.length;
        var n = initialN;
        var delta = 0;
        var bias = initialBias;
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = void 0;
        try {
          for (var _iterator = input[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var _currentValue2 = _step.value;
            if (_currentValue2 < 128) {
              output.push(stringFromCharCode(_currentValue2));
            }
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
        var basicLength = output.length;
        var handledCPCount = basicLength;
        if (basicLength) {
          output.push(delimiter);
        }
        while (handledCPCount < inputLength) {
          var m = maxInt;
          var _iteratorNormalCompletion2 = true;
          var _didIteratorError2 = false;
          var _iteratorError2 = void 0;
          try {
            for (var _iterator2 = input[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              var currentValue = _step2.value;
              if (currentValue >= n && currentValue < m) {
                m = currentValue;
              }
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
          var handledCPCountPlusOne = handledCPCount + 1;
          if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
            error$1("overflow");
          }
          delta += (m - n) * handledCPCountPlusOne;
          n = m;
          var _iteratorNormalCompletion3 = true;
          var _didIteratorError3 = false;
          var _iteratorError3 = void 0;
          try {
            for (var _iterator3 = input[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
              var _currentValue = _step3.value;
              if (_currentValue < n && ++delta > maxInt) {
                error$1("overflow");
              }
              if (_currentValue == n) {
                var q = delta;
                for (
                  var k = base;
                  ;
                  /* no condition */
                  k += base
                ) {
                  var t = k <= bias ? tMin : k >= bias + tMax ? tMax : k - bias;
                  if (q < t) {
                    break;
                  }
                  var qMinusT = q - t;
                  var baseMinusT = base - t;
                  output.push(stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0)));
                  q = floor(qMinusT / baseMinusT);
                }
                output.push(stringFromCharCode(digitToBasic(q, 0)));
                bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
                delta = 0;
                ++handledCPCount;
              }
            }
          } catch (err) {
            _didIteratorError3 = true;
            _iteratorError3 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion3 && _iterator3.return) {
                _iterator3.return();
              }
            } finally {
              if (_didIteratorError3) {
                throw _iteratorError3;
              }
            }
          }
          ++delta;
          ++n;
        }
        return output.join("");
      }, "encode");
      var toUnicode = /* @__PURE__ */ __name(function toUnicode2(input) {
        return mapDomain(input, function(string) {
          return regexPunycode.test(string) ? decode(string.slice(4).toLowerCase()) : string;
        });
      }, "toUnicode");
      var toASCII = /* @__PURE__ */ __name(function toASCII2(input) {
        return mapDomain(input, function(string) {
          return regexNonASCII.test(string) ? "xn--" + encode(string) : string;
        });
      }, "toASCII");
      var punycode = {
        /**
         * A string representing the current Punycode.js version number.
         * @memberOf punycode
         * @type String
         */
        "version": "2.1.0",
        /**
         * An object of methods to convert from JavaScript's internal character
         * representation (UCS-2) to Unicode code points, and back.
         * @see <https://mathiasbynens.be/notes/javascript-encoding>
         * @memberOf punycode
         * @type Object
         */
        "ucs2": {
          "decode": ucs2decode,
          "encode": ucs2encode
        },
        "decode": decode,
        "encode": encode,
        "toASCII": toASCII,
        "toUnicode": toUnicode
      };
      var SCHEMES = {};
      function pctEncChar(chr) {
        var c = chr.charCodeAt(0);
        var e = void 0;
        if (c < 16)
          e = "%0" + c.toString(16).toUpperCase();
        else if (c < 128)
          e = "%" + c.toString(16).toUpperCase();
        else if (c < 2048)
          e = "%" + (c >> 6 | 192).toString(16).toUpperCase() + "%" + (c & 63 | 128).toString(16).toUpperCase();
        else
          e = "%" + (c >> 12 | 224).toString(16).toUpperCase() + "%" + (c >> 6 & 63 | 128).toString(16).toUpperCase() + "%" + (c & 63 | 128).toString(16).toUpperCase();
        return e;
      }
      __name(pctEncChar, "pctEncChar");
      function pctDecChars(str) {
        var newStr = "";
        var i = 0;
        var il = str.length;
        while (i < il) {
          var c = parseInt(str.substr(i + 1, 2), 16);
          if (c < 128) {
            newStr += String.fromCharCode(c);
            i += 3;
          } else if (c >= 194 && c < 224) {
            if (il - i >= 6) {
              var c2 = parseInt(str.substr(i + 4, 2), 16);
              newStr += String.fromCharCode((c & 31) << 6 | c2 & 63);
            } else {
              newStr += str.substr(i, 6);
            }
            i += 6;
          } else if (c >= 224) {
            if (il - i >= 9) {
              var _c = parseInt(str.substr(i + 4, 2), 16);
              var c3 = parseInt(str.substr(i + 7, 2), 16);
              newStr += String.fromCharCode((c & 15) << 12 | (_c & 63) << 6 | c3 & 63);
            } else {
              newStr += str.substr(i, 9);
            }
            i += 9;
          } else {
            newStr += str.substr(i, 3);
            i += 3;
          }
        }
        return newStr;
      }
      __name(pctDecChars, "pctDecChars");
      function _normalizeComponentEncoding(components, protocol) {
        function decodeUnreserved2(str) {
          var decStr = pctDecChars(str);
          return !decStr.match(protocol.UNRESERVED) ? str : decStr;
        }
        __name(decodeUnreserved2, "decodeUnreserved");
        if (components.scheme)
          components.scheme = String(components.scheme).replace(protocol.PCT_ENCODED, decodeUnreserved2).toLowerCase().replace(protocol.NOT_SCHEME, "");
        if (components.userinfo !== void 0)
          components.userinfo = String(components.userinfo).replace(protocol.PCT_ENCODED, decodeUnreserved2).replace(protocol.NOT_USERINFO, pctEncChar).replace(protocol.PCT_ENCODED, toUpperCase);
        if (components.host !== void 0)
          components.host = String(components.host).replace(protocol.PCT_ENCODED, decodeUnreserved2).toLowerCase().replace(protocol.NOT_HOST, pctEncChar).replace(protocol.PCT_ENCODED, toUpperCase);
        if (components.path !== void 0)
          components.path = String(components.path).replace(protocol.PCT_ENCODED, decodeUnreserved2).replace(components.scheme ? protocol.NOT_PATH : protocol.NOT_PATH_NOSCHEME, pctEncChar).replace(protocol.PCT_ENCODED, toUpperCase);
        if (components.query !== void 0)
          components.query = String(components.query).replace(protocol.PCT_ENCODED, decodeUnreserved2).replace(protocol.NOT_QUERY, pctEncChar).replace(protocol.PCT_ENCODED, toUpperCase);
        if (components.fragment !== void 0)
          components.fragment = String(components.fragment).replace(protocol.PCT_ENCODED, decodeUnreserved2).replace(protocol.NOT_FRAGMENT, pctEncChar).replace(protocol.PCT_ENCODED, toUpperCase);
        return components;
      }
      __name(_normalizeComponentEncoding, "_normalizeComponentEncoding");
      function _stripLeadingZeros(str) {
        return str.replace(/^0*(.*)/, "$1") || "0";
      }
      __name(_stripLeadingZeros, "_stripLeadingZeros");
      function _normalizeIPv4(host, protocol) {
        var matches = host.match(protocol.IPV4ADDRESS) || [];
        var _matches = slicedToArray(matches, 2), address = _matches[1];
        if (address) {
          return address.split(".").map(_stripLeadingZeros).join(".");
        } else {
          return host;
        }
      }
      __name(_normalizeIPv4, "_normalizeIPv4");
      function _normalizeIPv6(host, protocol) {
        var matches = host.match(protocol.IPV6ADDRESS) || [];
        var _matches2 = slicedToArray(matches, 3), address = _matches2[1], zone = _matches2[2];
        if (address) {
          var _address$toLowerCase$ = address.toLowerCase().split("::").reverse(), _address$toLowerCase$2 = slicedToArray(_address$toLowerCase$, 2), last = _address$toLowerCase$2[0], first = _address$toLowerCase$2[1];
          var firstFields = first ? first.split(":").map(_stripLeadingZeros) : [];
          var lastFields = last.split(":").map(_stripLeadingZeros);
          var isLastFieldIPv4Address = protocol.IPV4ADDRESS.test(lastFields[lastFields.length - 1]);
          var fieldCount = isLastFieldIPv4Address ? 7 : 8;
          var lastFieldsStart = lastFields.length - fieldCount;
          var fields = Array(fieldCount);
          for (var x = 0; x < fieldCount; ++x) {
            fields[x] = firstFields[x] || lastFields[lastFieldsStart + x] || "";
          }
          if (isLastFieldIPv4Address) {
            fields[fieldCount - 1] = _normalizeIPv4(fields[fieldCount - 1], protocol);
          }
          var allZeroFields = fields.reduce(function(acc, field, index) {
            if (!field || field === "0") {
              var lastLongest = acc[acc.length - 1];
              if (lastLongest && lastLongest.index + lastLongest.length === index) {
                lastLongest.length++;
              } else {
                acc.push({ index, length: 1 });
              }
            }
            return acc;
          }, []);
          var longestZeroFields = allZeroFields.sort(function(a, b) {
            return b.length - a.length;
          })[0];
          var newHost = void 0;
          if (longestZeroFields && longestZeroFields.length > 1) {
            var newFirst = fields.slice(0, longestZeroFields.index);
            var newLast = fields.slice(longestZeroFields.index + longestZeroFields.length);
            newHost = newFirst.join(":") + "::" + newLast.join(":");
          } else {
            newHost = fields.join(":");
          }
          if (zone) {
            newHost += "%" + zone;
          }
          return newHost;
        } else {
          return host;
        }
      }
      __name(_normalizeIPv6, "_normalizeIPv6");
      var URI_PARSE = /^(?:([^:\/?#]+):)?(?:\/\/((?:([^\/?#@]*)@)?(\[[^\/?#\]]+\]|[^\/?#:]*)(?:\:(\d*))?))?([^?#]*)(?:\?([^#]*))?(?:#((?:.|\n|\r)*))?/i;
      var NO_MATCH_IS_UNDEFINED = "".match(/(){0}/)[1] === void 0;
      function parse(uriString) {
        var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        var components = {};
        var protocol = options.iri !== false ? IRI_PROTOCOL : URI_PROTOCOL;
        if (options.reference === "suffix")
          uriString = (options.scheme ? options.scheme + ":" : "") + "//" + uriString;
        var matches = uriString.match(URI_PARSE);
        if (matches) {
          if (NO_MATCH_IS_UNDEFINED) {
            components.scheme = matches[1];
            components.userinfo = matches[3];
            components.host = matches[4];
            components.port = parseInt(matches[5], 10);
            components.path = matches[6] || "";
            components.query = matches[7];
            components.fragment = matches[8];
            if (isNaN(components.port)) {
              components.port = matches[5];
            }
          } else {
            components.scheme = matches[1] || void 0;
            components.userinfo = uriString.indexOf("@") !== -1 ? matches[3] : void 0;
            components.host = uriString.indexOf("//") !== -1 ? matches[4] : void 0;
            components.port = parseInt(matches[5], 10);
            components.path = matches[6] || "";
            components.query = uriString.indexOf("?") !== -1 ? matches[7] : void 0;
            components.fragment = uriString.indexOf("#") !== -1 ? matches[8] : void 0;
            if (isNaN(components.port)) {
              components.port = uriString.match(/\/\/(?:.|\n)*\:(?:\/|\?|\#|$)/) ? matches[4] : void 0;
            }
          }
          if (components.host) {
            components.host = _normalizeIPv6(_normalizeIPv4(components.host, protocol), protocol);
          }
          if (components.scheme === void 0 && components.userinfo === void 0 && components.host === void 0 && components.port === void 0 && !components.path && components.query === void 0) {
            components.reference = "same-document";
          } else if (components.scheme === void 0) {
            components.reference = "relative";
          } else if (components.fragment === void 0) {
            components.reference = "absolute";
          } else {
            components.reference = "uri";
          }
          if (options.reference && options.reference !== "suffix" && options.reference !== components.reference) {
            components.error = components.error || "URI is not a " + options.reference + " reference.";
          }
          var schemeHandler = SCHEMES[(options.scheme || components.scheme || "").toLowerCase()];
          if (!options.unicodeSupport && (!schemeHandler || !schemeHandler.unicodeSupport)) {
            if (components.host && (options.domainHost || schemeHandler && schemeHandler.domainHost)) {
              try {
                components.host = punycode.toASCII(components.host.replace(protocol.PCT_ENCODED, pctDecChars).toLowerCase());
              } catch (e) {
                components.error = components.error || "Host's domain name can not be converted to ASCII via punycode: " + e;
              }
            }
            _normalizeComponentEncoding(components, URI_PROTOCOL);
          } else {
            _normalizeComponentEncoding(components, protocol);
          }
          if (schemeHandler && schemeHandler.parse) {
            schemeHandler.parse(components, options);
          }
        } else {
          components.error = components.error || "URI can not be parsed.";
        }
        return components;
      }
      __name(parse, "parse");
      function _recomposeAuthority(components, options) {
        var protocol = options.iri !== false ? IRI_PROTOCOL : URI_PROTOCOL;
        var uriTokens = [];
        if (components.userinfo !== void 0) {
          uriTokens.push(components.userinfo);
          uriTokens.push("@");
        }
        if (components.host !== void 0) {
          uriTokens.push(_normalizeIPv6(_normalizeIPv4(String(components.host), protocol), protocol).replace(protocol.IPV6ADDRESS, function(_, $1, $2) {
            return "[" + $1 + ($2 ? "%25" + $2 : "") + "]";
          }));
        }
        if (typeof components.port === "number" || typeof components.port === "string") {
          uriTokens.push(":");
          uriTokens.push(String(components.port));
        }
        return uriTokens.length ? uriTokens.join("") : void 0;
      }
      __name(_recomposeAuthority, "_recomposeAuthority");
      var RDS1 = /^\.\.?\//;
      var RDS2 = /^\/\.(\/|$)/;
      var RDS3 = /^\/\.\.(\/|$)/;
      var RDS5 = /^\/?(?:.|\n)*?(?=\/|$)/;
      function removeDotSegments(input) {
        var output = [];
        while (input.length) {
          if (input.match(RDS1)) {
            input = input.replace(RDS1, "");
          } else if (input.match(RDS2)) {
            input = input.replace(RDS2, "/");
          } else if (input.match(RDS3)) {
            input = input.replace(RDS3, "/");
            output.pop();
          } else if (input === "." || input === "..") {
            input = "";
          } else {
            var im = input.match(RDS5);
            if (im) {
              var s = im[0];
              input = input.slice(s.length);
              output.push(s);
            } else {
              throw new Error("Unexpected dot segment condition");
            }
          }
        }
        return output.join("");
      }
      __name(removeDotSegments, "removeDotSegments");
      function serialize(components) {
        var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        var protocol = options.iri ? IRI_PROTOCOL : URI_PROTOCOL;
        var uriTokens = [];
        var schemeHandler = SCHEMES[(options.scheme || components.scheme || "").toLowerCase()];
        if (schemeHandler && schemeHandler.serialize)
          schemeHandler.serialize(components, options);
        if (components.host) {
          if (protocol.IPV6ADDRESS.test(components.host)) {
          } else if (options.domainHost || schemeHandler && schemeHandler.domainHost) {
            try {
              components.host = !options.iri ? punycode.toASCII(components.host.replace(protocol.PCT_ENCODED, pctDecChars).toLowerCase()) : punycode.toUnicode(components.host);
            } catch (e) {
              components.error = components.error || "Host's domain name can not be converted to " + (!options.iri ? "ASCII" : "Unicode") + " via punycode: " + e;
            }
          }
        }
        _normalizeComponentEncoding(components, protocol);
        if (options.reference !== "suffix" && components.scheme) {
          uriTokens.push(components.scheme);
          uriTokens.push(":");
        }
        var authority = _recomposeAuthority(components, options);
        if (authority !== void 0) {
          if (options.reference !== "suffix") {
            uriTokens.push("//");
          }
          uriTokens.push(authority);
          if (components.path && components.path.charAt(0) !== "/") {
            uriTokens.push("/");
          }
        }
        if (components.path !== void 0) {
          var s = components.path;
          if (!options.absolutePath && (!schemeHandler || !schemeHandler.absolutePath)) {
            s = removeDotSegments(s);
          }
          if (authority === void 0) {
            s = s.replace(/^\/\//, "/%2F");
          }
          uriTokens.push(s);
        }
        if (components.query !== void 0) {
          uriTokens.push("?");
          uriTokens.push(components.query);
        }
        if (components.fragment !== void 0) {
          uriTokens.push("#");
          uriTokens.push(components.fragment);
        }
        return uriTokens.join("");
      }
      __name(serialize, "serialize");
      function resolveComponents(base2, relative) {
        var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        var skipNormalization = arguments[3];
        var target = {};
        if (!skipNormalization) {
          base2 = parse(serialize(base2, options), options);
          relative = parse(serialize(relative, options), options);
        }
        options = options || {};
        if (!options.tolerant && relative.scheme) {
          target.scheme = relative.scheme;
          target.userinfo = relative.userinfo;
          target.host = relative.host;
          target.port = relative.port;
          target.path = removeDotSegments(relative.path || "");
          target.query = relative.query;
        } else {
          if (relative.userinfo !== void 0 || relative.host !== void 0 || relative.port !== void 0) {
            target.userinfo = relative.userinfo;
            target.host = relative.host;
            target.port = relative.port;
            target.path = removeDotSegments(relative.path || "");
            target.query = relative.query;
          } else {
            if (!relative.path) {
              target.path = base2.path;
              if (relative.query !== void 0) {
                target.query = relative.query;
              } else {
                target.query = base2.query;
              }
            } else {
              if (relative.path.charAt(0) === "/") {
                target.path = removeDotSegments(relative.path);
              } else {
                if ((base2.userinfo !== void 0 || base2.host !== void 0 || base2.port !== void 0) && !base2.path) {
                  target.path = "/" + relative.path;
                } else if (!base2.path) {
                  target.path = relative.path;
                } else {
                  target.path = base2.path.slice(0, base2.path.lastIndexOf("/") + 1) + relative.path;
                }
                target.path = removeDotSegments(target.path);
              }
              target.query = relative.query;
            }
            target.userinfo = base2.userinfo;
            target.host = base2.host;
            target.port = base2.port;
          }
          target.scheme = base2.scheme;
        }
        target.fragment = relative.fragment;
        return target;
      }
      __name(resolveComponents, "resolveComponents");
      function resolve(baseURI, relativeURI, options) {
        var schemelessOptions = assign({ scheme: "null" }, options);
        return serialize(resolveComponents(parse(baseURI, schemelessOptions), parse(relativeURI, schemelessOptions), schemelessOptions, true), schemelessOptions);
      }
      __name(resolve, "resolve");
      function normalize(uri, options) {
        if (typeof uri === "string") {
          uri = serialize(parse(uri, options), options);
        } else if (typeOf(uri) === "object") {
          uri = parse(serialize(uri, options), options);
        }
        return uri;
      }
      __name(normalize, "normalize");
      function equal(uriA, uriB, options) {
        if (typeof uriA === "string") {
          uriA = serialize(parse(uriA, options), options);
        } else if (typeOf(uriA) === "object") {
          uriA = serialize(uriA, options);
        }
        if (typeof uriB === "string") {
          uriB = serialize(parse(uriB, options), options);
        } else if (typeOf(uriB) === "object") {
          uriB = serialize(uriB, options);
        }
        return uriA === uriB;
      }
      __name(equal, "equal");
      function escapeComponent(str, options) {
        return str && str.toString().replace(!options || !options.iri ? URI_PROTOCOL.ESCAPE : IRI_PROTOCOL.ESCAPE, pctEncChar);
      }
      __name(escapeComponent, "escapeComponent");
      function unescapeComponent(str, options) {
        return str && str.toString().replace(!options || !options.iri ? URI_PROTOCOL.PCT_ENCODED : IRI_PROTOCOL.PCT_ENCODED, pctDecChars);
      }
      __name(unescapeComponent, "unescapeComponent");
      var handler = {
        scheme: "http",
        domainHost: true,
        parse: /* @__PURE__ */ __name(function parse2(components, options) {
          if (!components.host) {
            components.error = components.error || "HTTP URIs must have a host.";
          }
          return components;
        }, "parse"),
        serialize: /* @__PURE__ */ __name(function serialize2(components, options) {
          var secure = String(components.scheme).toLowerCase() === "https";
          if (components.port === (secure ? 443 : 80) || components.port === "") {
            components.port = void 0;
          }
          if (!components.path) {
            components.path = "/";
          }
          return components;
        }, "serialize")
      };
      var handler$1 = {
        scheme: "https",
        domainHost: handler.domainHost,
        parse: handler.parse,
        serialize: handler.serialize
      };
      function isSecure(wsComponents) {
        return typeof wsComponents.secure === "boolean" ? wsComponents.secure : String(wsComponents.scheme).toLowerCase() === "wss";
      }
      __name(isSecure, "isSecure");
      var handler$2 = {
        scheme: "ws",
        domainHost: true,
        parse: /* @__PURE__ */ __name(function parse2(components, options) {
          var wsComponents = components;
          wsComponents.secure = isSecure(wsComponents);
          wsComponents.resourceName = (wsComponents.path || "/") + (wsComponents.query ? "?" + wsComponents.query : "");
          wsComponents.path = void 0;
          wsComponents.query = void 0;
          return wsComponents;
        }, "parse"),
        serialize: /* @__PURE__ */ __name(function serialize2(wsComponents, options) {
          if (wsComponents.port === (isSecure(wsComponents) ? 443 : 80) || wsComponents.port === "") {
            wsComponents.port = void 0;
          }
          if (typeof wsComponents.secure === "boolean") {
            wsComponents.scheme = wsComponents.secure ? "wss" : "ws";
            wsComponents.secure = void 0;
          }
          if (wsComponents.resourceName) {
            var _wsComponents$resourc = wsComponents.resourceName.split("?"), _wsComponents$resourc2 = slicedToArray(_wsComponents$resourc, 2), path = _wsComponents$resourc2[0], query = _wsComponents$resourc2[1];
            wsComponents.path = path && path !== "/" ? path : void 0;
            wsComponents.query = query;
            wsComponents.resourceName = void 0;
          }
          wsComponents.fragment = void 0;
          return wsComponents;
        }, "serialize")
      };
      var handler$3 = {
        scheme: "wss",
        domainHost: handler$2.domainHost,
        parse: handler$2.parse,
        serialize: handler$2.serialize
      };
      var O = {};
      var isIRI = true;
      var UNRESERVED$$ = "[A-Za-z0-9\\-\\.\\_\\~" + (isIRI ? "\\xA0-\\u200D\\u2010-\\u2029\\u202F-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF" : "") + "]";
      var HEXDIG$$ = "[0-9A-Fa-f]";
      var PCT_ENCODED$ = subexp(subexp("%[EFef]" + HEXDIG$$ + "%" + HEXDIG$$ + HEXDIG$$ + "%" + HEXDIG$$ + HEXDIG$$) + "|" + subexp("%[89A-Fa-f]" + HEXDIG$$ + "%" + HEXDIG$$ + HEXDIG$$) + "|" + subexp("%" + HEXDIG$$ + HEXDIG$$));
      var ATEXT$$ = "[A-Za-z0-9\\!\\$\\%\\'\\*\\+\\-\\^\\_\\`\\{\\|\\}\\~]";
      var QTEXT$$ = "[\\!\\$\\%\\'\\(\\)\\*\\+\\,\\-\\.0-9\\<\\>A-Z\\x5E-\\x7E]";
      var VCHAR$$ = merge(QTEXT$$, '[\\"\\\\]');
      var SOME_DELIMS$$ = "[\\!\\$\\'\\(\\)\\*\\+\\,\\;\\:\\@]";
      var UNRESERVED = new RegExp(UNRESERVED$$, "g");
      var PCT_ENCODED = new RegExp(PCT_ENCODED$, "g");
      var NOT_LOCAL_PART = new RegExp(merge("[^]", ATEXT$$, "[\\.]", '[\\"]', VCHAR$$), "g");
      var NOT_HFNAME = new RegExp(merge("[^]", UNRESERVED$$, SOME_DELIMS$$), "g");
      var NOT_HFVALUE = NOT_HFNAME;
      function decodeUnreserved(str) {
        var decStr = pctDecChars(str);
        return !decStr.match(UNRESERVED) ? str : decStr;
      }
      __name(decodeUnreserved, "decodeUnreserved");
      var handler$4 = {
        scheme: "mailto",
        parse: /* @__PURE__ */ __name(function parse$$1(components, options) {
          var mailtoComponents = components;
          var to = mailtoComponents.to = mailtoComponents.path ? mailtoComponents.path.split(",") : [];
          mailtoComponents.path = void 0;
          if (mailtoComponents.query) {
            var unknownHeaders = false;
            var headers = {};
            var hfields = mailtoComponents.query.split("&");
            for (var x = 0, xl = hfields.length; x < xl; ++x) {
              var hfield = hfields[x].split("=");
              switch (hfield[0]) {
                case "to":
                  var toAddrs = hfield[1].split(",");
                  for (var _x = 0, _xl = toAddrs.length; _x < _xl; ++_x) {
                    to.push(toAddrs[_x]);
                  }
                  break;
                case "subject":
                  mailtoComponents.subject = unescapeComponent(hfield[1], options);
                  break;
                case "body":
                  mailtoComponents.body = unescapeComponent(hfield[1], options);
                  break;
                default:
                  unknownHeaders = true;
                  headers[unescapeComponent(hfield[0], options)] = unescapeComponent(hfield[1], options);
                  break;
              }
            }
            if (unknownHeaders)
              mailtoComponents.headers = headers;
          }
          mailtoComponents.query = void 0;
          for (var _x2 = 0, _xl2 = to.length; _x2 < _xl2; ++_x2) {
            var addr = to[_x2].split("@");
            addr[0] = unescapeComponent(addr[0]);
            if (!options.unicodeSupport) {
              try {
                addr[1] = punycode.toASCII(unescapeComponent(addr[1], options).toLowerCase());
              } catch (e) {
                mailtoComponents.error = mailtoComponents.error || "Email address's domain name can not be converted to ASCII via punycode: " + e;
              }
            } else {
              addr[1] = unescapeComponent(addr[1], options).toLowerCase();
            }
            to[_x2] = addr.join("@");
          }
          return mailtoComponents;
        }, "parse$$1"),
        serialize: /* @__PURE__ */ __name(function serialize$$1(mailtoComponents, options) {
          var components = mailtoComponents;
          var to = toArray(mailtoComponents.to);
          if (to) {
            for (var x = 0, xl = to.length; x < xl; ++x) {
              var toAddr = String(to[x]);
              var atIdx = toAddr.lastIndexOf("@");
              var localPart = toAddr.slice(0, atIdx).replace(PCT_ENCODED, decodeUnreserved).replace(PCT_ENCODED, toUpperCase).replace(NOT_LOCAL_PART, pctEncChar);
              var domain = toAddr.slice(atIdx + 1);
              try {
                domain = !options.iri ? punycode.toASCII(unescapeComponent(domain, options).toLowerCase()) : punycode.toUnicode(domain);
              } catch (e) {
                components.error = components.error || "Email address's domain name can not be converted to " + (!options.iri ? "ASCII" : "Unicode") + " via punycode: " + e;
              }
              to[x] = localPart + "@" + domain;
            }
            components.path = to.join(",");
          }
          var headers = mailtoComponents.headers = mailtoComponents.headers || {};
          if (mailtoComponents.subject)
            headers["subject"] = mailtoComponents.subject;
          if (mailtoComponents.body)
            headers["body"] = mailtoComponents.body;
          var fields = [];
          for (var name in headers) {
            if (headers[name] !== O[name]) {
              fields.push(name.replace(PCT_ENCODED, decodeUnreserved).replace(PCT_ENCODED, toUpperCase).replace(NOT_HFNAME, pctEncChar) + "=" + headers[name].replace(PCT_ENCODED, decodeUnreserved).replace(PCT_ENCODED, toUpperCase).replace(NOT_HFVALUE, pctEncChar));
            }
          }
          if (fields.length) {
            components.query = fields.join("&");
          }
          return components;
        }, "serialize$$1")
      };
      var URN_PARSE = /^([^\:]+)\:(.*)/;
      var handler$5 = {
        scheme: "urn",
        parse: /* @__PURE__ */ __name(function parse$$1(components, options) {
          var matches = components.path && components.path.match(URN_PARSE);
          var urnComponents = components;
          if (matches) {
            var scheme = options.scheme || urnComponents.scheme || "urn";
            var nid = matches[1].toLowerCase();
            var nss = matches[2];
            var urnScheme = scheme + ":" + (options.nid || nid);
            var schemeHandler = SCHEMES[urnScheme];
            urnComponents.nid = nid;
            urnComponents.nss = nss;
            urnComponents.path = void 0;
            if (schemeHandler) {
              urnComponents = schemeHandler.parse(urnComponents, options);
            }
          } else {
            urnComponents.error = urnComponents.error || "URN can not be parsed.";
          }
          return urnComponents;
        }, "parse$$1"),
        serialize: /* @__PURE__ */ __name(function serialize$$1(urnComponents, options) {
          var scheme = options.scheme || urnComponents.scheme || "urn";
          var nid = urnComponents.nid;
          var urnScheme = scheme + ":" + (options.nid || nid);
          var schemeHandler = SCHEMES[urnScheme];
          if (schemeHandler) {
            urnComponents = schemeHandler.serialize(urnComponents, options);
          }
          var uriComponents = urnComponents;
          var nss = urnComponents.nss;
          uriComponents.path = (nid || options.nid) + ":" + nss;
          return uriComponents;
        }, "serialize$$1")
      };
      var UUID = /^[0-9A-Fa-f]{8}(?:\-[0-9A-Fa-f]{4}){3}\-[0-9A-Fa-f]{12}$/;
      var handler$6 = {
        scheme: "urn:uuid",
        parse: /* @__PURE__ */ __name(function parse2(urnComponents, options) {
          var uuidComponents = urnComponents;
          uuidComponents.uuid = uuidComponents.nss;
          uuidComponents.nss = void 0;
          if (!options.tolerant && (!uuidComponents.uuid || !uuidComponents.uuid.match(UUID))) {
            uuidComponents.error = uuidComponents.error || "UUID is not valid.";
          }
          return uuidComponents;
        }, "parse"),
        serialize: /* @__PURE__ */ __name(function serialize2(uuidComponents, options) {
          var urnComponents = uuidComponents;
          urnComponents.nss = (uuidComponents.uuid || "").toLowerCase();
          return urnComponents;
        }, "serialize")
      };
      SCHEMES[handler.scheme] = handler;
      SCHEMES[handler$1.scheme] = handler$1;
      SCHEMES[handler$2.scheme] = handler$2;
      SCHEMES[handler$3.scheme] = handler$3;
      SCHEMES[handler$4.scheme] = handler$4;
      SCHEMES[handler$5.scheme] = handler$5;
      SCHEMES[handler$6.scheme] = handler$6;
      exports2.SCHEMES = SCHEMES;
      exports2.pctEncChar = pctEncChar;
      exports2.pctDecChars = pctDecChars;
      exports2.parse = parse;
      exports2.removeDotSegments = removeDotSegments;
      exports2.serialize = serialize;
      exports2.resolveComponents = resolveComponents;
      exports2.resolve = resolve;
      exports2.normalize = normalize;
      exports2.equal = equal;
      exports2.escapeComponent = escapeComponent;
      exports2.unescapeComponent = unescapeComponent;
      Object.defineProperty(exports2, "__esModule", { value: true });
    });
  }
});

// node_modules/fast-deep-equal/index.js
var require_fast_deep_equal = __commonJS({
  "node_modules/fast-deep-equal/index.js"(exports, module) {
    "use strict";
    module.exports = /* @__PURE__ */ __name(function equal(a, b) {
      if (a === b)
        return true;
      if (a && b && typeof a == "object" && typeof b == "object") {
        if (a.constructor !== b.constructor)
          return false;
        var length, i, keys;
        if (Array.isArray(a)) {
          length = a.length;
          if (length != b.length)
            return false;
          for (i = length; i-- !== 0; )
            if (!equal(a[i], b[i]))
              return false;
          return true;
        }
        if (a.constructor === RegExp)
          return a.source === b.source && a.flags === b.flags;
        if (a.valueOf !== Object.prototype.valueOf)
          return a.valueOf() === b.valueOf();
        if (a.toString !== Object.prototype.toString)
          return a.toString() === b.toString();
        keys = Object.keys(a);
        length = keys.length;
        if (length !== Object.keys(b).length)
          return false;
        for (i = length; i-- !== 0; )
          if (!Object.prototype.hasOwnProperty.call(b, keys[i]))
            return false;
        for (i = length; i-- !== 0; ) {
          var key = keys[i];
          if (!equal(a[key], b[key]))
            return false;
        }
        return true;
      }
      return a !== a && b !== b;
    }, "equal");
  }
});

// node_modules/ajv/lib/compile/ucs2length.js
var require_ucs2length = __commonJS({
  "node_modules/ajv/lib/compile/ucs2length.js"(exports, module) {
    "use strict";
    module.exports = /* @__PURE__ */ __name(function ucs2length(str) {
      var length = 0, len = str.length, pos = 0, value;
      while (pos < len) {
        length++;
        value = str.charCodeAt(pos++);
        if (value >= 55296 && value <= 56319 && pos < len) {
          value = str.charCodeAt(pos);
          if ((value & 64512) == 56320)
            pos++;
        }
      }
      return length;
    }, "ucs2length");
  }
});

// node_modules/ajv/lib/compile/util.js
var require_util = __commonJS({
  "node_modules/ajv/lib/compile/util.js"(exports, module) {
    "use strict";
    module.exports = {
      copy,
      checkDataType,
      checkDataTypes,
      coerceToTypes,
      toHash,
      getProperty,
      escapeQuotes,
      equal: require_fast_deep_equal(),
      ucs2length: require_ucs2length(),
      varOccurences,
      varReplace,
      schemaHasRules,
      schemaHasRulesExcept,
      schemaUnknownRules,
      toQuotedString,
      getPathExpr,
      getPath: getPath2,
      getData,
      unescapeFragment,
      unescapeJsonPointer,
      escapeFragment,
      escapeJsonPointer
    };
    function copy(o, to) {
      to = to || {};
      for (var key in o)
        to[key] = o[key];
      return to;
    }
    __name(copy, "copy");
    function checkDataType(dataType, data, strictNumbers, negate) {
      var EQUAL = negate ? " !== " : " === ", AND = negate ? " || " : " && ", OK2 = negate ? "!" : "", NOT = negate ? "" : "!";
      switch (dataType) {
        case "null":
          return data + EQUAL + "null";
        case "array":
          return OK2 + "Array.isArray(" + data + ")";
        case "object":
          return "(" + OK2 + data + AND + "typeof " + data + EQUAL + '"object"' + AND + NOT + "Array.isArray(" + data + "))";
        case "integer":
          return "(typeof " + data + EQUAL + '"number"' + AND + NOT + "(" + data + " % 1)" + AND + data + EQUAL + data + (strictNumbers ? AND + OK2 + "isFinite(" + data + ")" : "") + ")";
        case "number":
          return "(typeof " + data + EQUAL + '"' + dataType + '"' + (strictNumbers ? AND + OK2 + "isFinite(" + data + ")" : "") + ")";
        default:
          return "typeof " + data + EQUAL + '"' + dataType + '"';
      }
    }
    __name(checkDataType, "checkDataType");
    function checkDataTypes(dataTypes, data, strictNumbers) {
      switch (dataTypes.length) {
        case 1:
          return checkDataType(dataTypes[0], data, strictNumbers, true);
        default:
          var code = "";
          var types = toHash(dataTypes);
          if (types.array && types.object) {
            code = types.null ? "(" : "(!" + data + " || ";
            code += "typeof " + data + ' !== "object")';
            delete types.null;
            delete types.array;
            delete types.object;
          }
          if (types.number)
            delete types.integer;
          for (var t in types)
            code += (code ? " && " : "") + checkDataType(t, data, strictNumbers, true);
          return code;
      }
    }
    __name(checkDataTypes, "checkDataTypes");
    var COERCE_TO_TYPES = toHash(["string", "number", "integer", "boolean", "null"]);
    function coerceToTypes(optionCoerceTypes, dataTypes) {
      if (Array.isArray(dataTypes)) {
        var types = [];
        for (var i = 0; i < dataTypes.length; i++) {
          var t = dataTypes[i];
          if (COERCE_TO_TYPES[t])
            types[types.length] = t;
          else if (optionCoerceTypes === "array" && t === "array")
            types[types.length] = t;
        }
        if (types.length)
          return types;
      } else if (COERCE_TO_TYPES[dataTypes]) {
        return [dataTypes];
      } else if (optionCoerceTypes === "array" && dataTypes === "array") {
        return ["array"];
      }
    }
    __name(coerceToTypes, "coerceToTypes");
    function toHash(arr) {
      var hash = {};
      for (var i = 0; i < arr.length; i++)
        hash[arr[i]] = true;
      return hash;
    }
    __name(toHash, "toHash");
    var IDENTIFIER = /^[a-z$_][a-z$_0-9]*$/i;
    var SINGLE_QUOTE = /'|\\/g;
    function getProperty(key) {
      return typeof key == "number" ? "[" + key + "]" : IDENTIFIER.test(key) ? "." + key : "['" + escapeQuotes(key) + "']";
    }
    __name(getProperty, "getProperty");
    function escapeQuotes(str) {
      return str.replace(SINGLE_QUOTE, "\\$&").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\f/g, "\\f").replace(/\t/g, "\\t");
    }
    __name(escapeQuotes, "escapeQuotes");
    function varOccurences(str, dataVar) {
      dataVar += "[^0-9]";
      var matches = str.match(new RegExp(dataVar, "g"));
      return matches ? matches.length : 0;
    }
    __name(varOccurences, "varOccurences");
    function varReplace(str, dataVar, expr) {
      dataVar += "([^0-9])";
      expr = expr.replace(/\$/g, "$$$$");
      return str.replace(new RegExp(dataVar, "g"), expr + "$1");
    }
    __name(varReplace, "varReplace");
    function schemaHasRules(schema, rules) {
      if (typeof schema == "boolean")
        return !schema;
      for (var key in schema)
        if (rules[key])
          return true;
    }
    __name(schemaHasRules, "schemaHasRules");
    function schemaHasRulesExcept(schema, rules, exceptKeyword) {
      if (typeof schema == "boolean")
        return !schema && exceptKeyword != "not";
      for (var key in schema)
        if (key != exceptKeyword && rules[key])
          return true;
    }
    __name(schemaHasRulesExcept, "schemaHasRulesExcept");
    function schemaUnknownRules(schema, rules) {
      if (typeof schema == "boolean")
        return;
      for (var key in schema)
        if (!rules[key])
          return key;
    }
    __name(schemaUnknownRules, "schemaUnknownRules");
    function toQuotedString(str) {
      return "'" + escapeQuotes(str) + "'";
    }
    __name(toQuotedString, "toQuotedString");
    function getPathExpr(currentPath, expr, jsonPointers, isNumber) {
      var path = jsonPointers ? "'/' + " + expr + (isNumber ? "" : ".replace(/~/g, '~0').replace(/\\//g, '~1')") : isNumber ? "'[' + " + expr + " + ']'" : "'[\\'' + " + expr + " + '\\']'";
      return joinPaths(currentPath, path);
    }
    __name(getPathExpr, "getPathExpr");
    function getPath2(currentPath, prop, jsonPointers) {
      var path = jsonPointers ? toQuotedString("/" + escapeJsonPointer(prop)) : toQuotedString(getProperty(prop));
      return joinPaths(currentPath, path);
    }
    __name(getPath2, "getPath");
    var JSON_POINTER = /^\/(?:[^~]|~0|~1)*$/;
    var RELATIVE_JSON_POINTER = /^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/;
    function getData($data, lvl, paths) {
      var up, jsonPointer, data, matches;
      if ($data === "")
        return "rootData";
      if ($data[0] == "/") {
        if (!JSON_POINTER.test($data))
          throw new Error("Invalid JSON-pointer: " + $data);
        jsonPointer = $data;
        data = "rootData";
      } else {
        matches = $data.match(RELATIVE_JSON_POINTER);
        if (!matches)
          throw new Error("Invalid JSON-pointer: " + $data);
        up = +matches[1];
        jsonPointer = matches[2];
        if (jsonPointer == "#") {
          if (up >= lvl)
            throw new Error("Cannot access property/index " + up + " levels up, current level is " + lvl);
          return paths[lvl - up];
        }
        if (up > lvl)
          throw new Error("Cannot access data " + up + " levels up, current level is " + lvl);
        data = "data" + (lvl - up || "");
        if (!jsonPointer)
          return data;
      }
      var expr = data;
      var segments = jsonPointer.split("/");
      for (var i = 0; i < segments.length; i++) {
        var segment = segments[i];
        if (segment) {
          data += getProperty(unescapeJsonPointer(segment));
          expr += " && " + data;
        }
      }
      return expr;
    }
    __name(getData, "getData");
    function joinPaths(a, b) {
      if (a == '""')
        return b;
      return (a + " + " + b).replace(/([^\\])' \+ '/g, "$1");
    }
    __name(joinPaths, "joinPaths");
    function unescapeFragment(str) {
      return unescapeJsonPointer(decodeURIComponent(str));
    }
    __name(unescapeFragment, "unescapeFragment");
    function escapeFragment(str) {
      return encodeURIComponent(escapeJsonPointer(str));
    }
    __name(escapeFragment, "escapeFragment");
    function escapeJsonPointer(str) {
      return str.replace(/~/g, "~0").replace(/\//g, "~1");
    }
    __name(escapeJsonPointer, "escapeJsonPointer");
    function unescapeJsonPointer(str) {
      return str.replace(/~1/g, "/").replace(/~0/g, "~");
    }
    __name(unescapeJsonPointer, "unescapeJsonPointer");
  }
});

// node_modules/ajv/lib/compile/schema_obj.js
var require_schema_obj = __commonJS({
  "node_modules/ajv/lib/compile/schema_obj.js"(exports, module) {
    "use strict";
    var util2 = require_util();
    module.exports = SchemaObject;
    function SchemaObject(obj) {
      util2.copy(obj, this);
    }
    __name(SchemaObject, "SchemaObject");
  }
});

// node_modules/json-schema-traverse/index.js
var require_json_schema_traverse = __commonJS({
  "node_modules/json-schema-traverse/index.js"(exports, module) {
    "use strict";
    var traverse = module.exports = function(schema, opts, cb) {
      if (typeof opts == "function") {
        cb = opts;
        opts = {};
      }
      cb = opts.cb || cb;
      var pre = typeof cb == "function" ? cb : cb.pre || function() {
      };
      var post = cb.post || function() {
      };
      _traverse(opts, pre, post, schema, "", schema);
    };
    traverse.keywords = {
      additionalItems: true,
      items: true,
      contains: true,
      additionalProperties: true,
      propertyNames: true,
      not: true
    };
    traverse.arrayKeywords = {
      items: true,
      allOf: true,
      anyOf: true,
      oneOf: true
    };
    traverse.propsKeywords = {
      definitions: true,
      properties: true,
      patternProperties: true,
      dependencies: true
    };
    traverse.skipKeywords = {
      default: true,
      enum: true,
      const: true,
      required: true,
      maximum: true,
      minimum: true,
      exclusiveMaximum: true,
      exclusiveMinimum: true,
      multipleOf: true,
      maxLength: true,
      minLength: true,
      pattern: true,
      format: true,
      maxItems: true,
      minItems: true,
      uniqueItems: true,
      maxProperties: true,
      minProperties: true
    };
    function _traverse(opts, pre, post, schema, jsonPtr, rootSchema, parentJsonPtr, parentKeyword, parentSchema, keyIndex) {
      if (schema && typeof schema == "object" && !Array.isArray(schema)) {
        pre(schema, jsonPtr, rootSchema, parentJsonPtr, parentKeyword, parentSchema, keyIndex);
        for (var key in schema) {
          var sch = schema[key];
          if (Array.isArray(sch)) {
            if (key in traverse.arrayKeywords) {
              for (var i = 0; i < sch.length; i++)
                _traverse(opts, pre, post, sch[i], jsonPtr + "/" + key + "/" + i, rootSchema, jsonPtr, key, schema, i);
            }
          } else if (key in traverse.propsKeywords) {
            if (sch && typeof sch == "object") {
              for (var prop in sch)
                _traverse(opts, pre, post, sch[prop], jsonPtr + "/" + key + "/" + escapeJsonPtr(prop), rootSchema, jsonPtr, key, schema, prop);
            }
          } else if (key in traverse.keywords || opts.allKeys && !(key in traverse.skipKeywords)) {
            _traverse(opts, pre, post, sch, jsonPtr + "/" + key, rootSchema, jsonPtr, key, schema);
          }
        }
        post(schema, jsonPtr, rootSchema, parentJsonPtr, parentKeyword, parentSchema, keyIndex);
      }
    }
    __name(_traverse, "_traverse");
    function escapeJsonPtr(str) {
      return str.replace(/~/g, "~0").replace(/\//g, "~1");
    }
    __name(escapeJsonPtr, "escapeJsonPtr");
  }
});

// node_modules/ajv/lib/compile/resolve.js
var require_resolve = __commonJS({
  "node_modules/ajv/lib/compile/resolve.js"(exports, module) {
    "use strict";
    var URI = require_uri_all();
    var equal = require_fast_deep_equal();
    var util2 = require_util();
    var SchemaObject = require_schema_obj();
    var traverse = require_json_schema_traverse();
    module.exports = resolve;
    resolve.normalizeId = normalizeId;
    resolve.fullPath = getFullPath;
    resolve.url = resolveUrl;
    resolve.ids = resolveIds;
    resolve.inlineRef = inlineRef;
    resolve.schema = resolveSchema;
    function resolve(compile, root, ref) {
      var refVal = this._refs[ref];
      if (typeof refVal == "string") {
        if (this._refs[refVal])
          refVal = this._refs[refVal];
        else
          return resolve.call(this, compile, root, refVal);
      }
      refVal = refVal || this._schemas[ref];
      if (refVal instanceof SchemaObject) {
        return inlineRef(refVal.schema, this._opts.inlineRefs) ? refVal.schema : refVal.validate || this._compile(refVal);
      }
      var res = resolveSchema.call(this, root, ref);
      var schema, v, baseId;
      if (res) {
        schema = res.schema;
        root = res.root;
        baseId = res.baseId;
      }
      if (schema instanceof SchemaObject) {
        v = schema.validate || compile.call(this, schema.schema, root, void 0, baseId);
      } else if (schema !== void 0) {
        v = inlineRef(schema, this._opts.inlineRefs) ? schema : compile.call(this, schema, root, void 0, baseId);
      }
      return v;
    }
    __name(resolve, "resolve");
    function resolveSchema(root, ref) {
      var p = URI.parse(ref), refPath = _getFullPath(p), baseId = getFullPath(this._getId(root.schema));
      if (Object.keys(root.schema).length === 0 || refPath !== baseId) {
        var id = normalizeId(refPath);
        var refVal = this._refs[id];
        if (typeof refVal == "string") {
          return resolveRecursive.call(this, root, refVal, p);
        } else if (refVal instanceof SchemaObject) {
          if (!refVal.validate)
            this._compile(refVal);
          root = refVal;
        } else {
          refVal = this._schemas[id];
          if (refVal instanceof SchemaObject) {
            if (!refVal.validate)
              this._compile(refVal);
            if (id == normalizeId(ref))
              return { schema: refVal, root, baseId };
            root = refVal;
          } else {
            return;
          }
        }
        if (!root.schema)
          return;
        baseId = getFullPath(this._getId(root.schema));
      }
      return getJsonPointer.call(this, p, baseId, root.schema, root);
    }
    __name(resolveSchema, "resolveSchema");
    function resolveRecursive(root, ref, parsedRef) {
      var res = resolveSchema.call(this, root, ref);
      if (res) {
        var schema = res.schema;
        var baseId = res.baseId;
        root = res.root;
        var id = this._getId(schema);
        if (id)
          baseId = resolveUrl(baseId, id);
        return getJsonPointer.call(this, parsedRef, baseId, schema, root);
      }
    }
    __name(resolveRecursive, "resolveRecursive");
    var PREVENT_SCOPE_CHANGE = util2.toHash(["properties", "patternProperties", "enum", "dependencies", "definitions"]);
    function getJsonPointer(parsedRef, baseId, schema, root) {
      parsedRef.fragment = parsedRef.fragment || "";
      if (parsedRef.fragment.slice(0, 1) != "/")
        return;
      var parts = parsedRef.fragment.split("/");
      for (var i = 1; i < parts.length; i++) {
        var part = parts[i];
        if (part) {
          part = util2.unescapeFragment(part);
          schema = schema[part];
          if (schema === void 0)
            break;
          var id;
          if (!PREVENT_SCOPE_CHANGE[part]) {
            id = this._getId(schema);
            if (id)
              baseId = resolveUrl(baseId, id);
            if (schema.$ref) {
              var $ref = resolveUrl(baseId, schema.$ref);
              var res = resolveSchema.call(this, root, $ref);
              if (res) {
                schema = res.schema;
                root = res.root;
                baseId = res.baseId;
              }
            }
          }
        }
      }
      if (schema !== void 0 && schema !== root.schema)
        return { schema, root, baseId };
    }
    __name(getJsonPointer, "getJsonPointer");
    var SIMPLE_INLINED = util2.toHash([
      "type",
      "format",
      "pattern",
      "maxLength",
      "minLength",
      "maxProperties",
      "minProperties",
      "maxItems",
      "minItems",
      "maximum",
      "minimum",
      "uniqueItems",
      "multipleOf",
      "required",
      "enum"
    ]);
    function inlineRef(schema, limit) {
      if (limit === false)
        return false;
      if (limit === void 0 || limit === true)
        return checkNoRef(schema);
      else if (limit)
        return countKeys(schema) <= limit;
    }
    __name(inlineRef, "inlineRef");
    function checkNoRef(schema) {
      var item;
      if (Array.isArray(schema)) {
        for (var i = 0; i < schema.length; i++) {
          item = schema[i];
          if (typeof item == "object" && !checkNoRef(item))
            return false;
        }
      } else {
        for (var key in schema) {
          if (key == "$ref")
            return false;
          item = schema[key];
          if (typeof item == "object" && !checkNoRef(item))
            return false;
        }
      }
      return true;
    }
    __name(checkNoRef, "checkNoRef");
    function countKeys(schema) {
      var count = 0, item;
      if (Array.isArray(schema)) {
        for (var i = 0; i < schema.length; i++) {
          item = schema[i];
          if (typeof item == "object")
            count += countKeys(item);
          if (count == Infinity)
            return Infinity;
        }
      } else {
        for (var key in schema) {
          if (key == "$ref")
            return Infinity;
          if (SIMPLE_INLINED[key]) {
            count++;
          } else {
            item = schema[key];
            if (typeof item == "object")
              count += countKeys(item) + 1;
            if (count == Infinity)
              return Infinity;
          }
        }
      }
      return count;
    }
    __name(countKeys, "countKeys");
    function getFullPath(id, normalize) {
      if (normalize !== false)
        id = normalizeId(id);
      var p = URI.parse(id);
      return _getFullPath(p);
    }
    __name(getFullPath, "getFullPath");
    function _getFullPath(p) {
      return URI.serialize(p).split("#")[0] + "#";
    }
    __name(_getFullPath, "_getFullPath");
    var TRAILING_SLASH_HASH = /#\/?$/;
    function normalizeId(id) {
      return id ? id.replace(TRAILING_SLASH_HASH, "") : "";
    }
    __name(normalizeId, "normalizeId");
    function resolveUrl(baseId, id) {
      id = normalizeId(id);
      return URI.resolve(baseId, id);
    }
    __name(resolveUrl, "resolveUrl");
    function resolveIds(schema) {
      var schemaId = normalizeId(this._getId(schema));
      var baseIds = { "": schemaId };
      var fullPaths = { "": getFullPath(schemaId, false) };
      var localRefs = {};
      var self = this;
      traverse(schema, { allKeys: true }, function(sch, jsonPtr, rootSchema, parentJsonPtr, parentKeyword, parentSchema, keyIndex) {
        if (jsonPtr === "")
          return;
        var id = self._getId(sch);
        var baseId = baseIds[parentJsonPtr];
        var fullPath = fullPaths[parentJsonPtr] + "/" + parentKeyword;
        if (keyIndex !== void 0)
          fullPath += "/" + (typeof keyIndex == "number" ? keyIndex : util2.escapeFragment(keyIndex));
        if (typeof id == "string") {
          id = baseId = normalizeId(baseId ? URI.resolve(baseId, id) : id);
          var refVal = self._refs[id];
          if (typeof refVal == "string")
            refVal = self._refs[refVal];
          if (refVal && refVal.schema) {
            if (!equal(sch, refVal.schema))
              throw new Error('id "' + id + '" resolves to more than one schema');
          } else if (id != normalizeId(fullPath)) {
            if (id[0] == "#") {
              if (localRefs[id] && !equal(sch, localRefs[id]))
                throw new Error('id "' + id + '" resolves to more than one schema');
              localRefs[id] = sch;
            } else {
              self._refs[id] = fullPath;
            }
          }
        }
        baseIds[jsonPtr] = baseId;
        fullPaths[jsonPtr] = fullPath;
      });
      return localRefs;
    }
    __name(resolveIds, "resolveIds");
  }
});

// node_modules/ajv/lib/compile/error_classes.js
var require_error_classes = __commonJS({
  "node_modules/ajv/lib/compile/error_classes.js"(exports, module) {
    "use strict";
    var resolve = require_resolve();
    module.exports = {
      Validation: errorSubclass(ValidationError),
      MissingRef: errorSubclass(MissingRefError)
    };
    function ValidationError(errors) {
      this.message = "validation failed";
      this.errors = errors;
      this.ajv = this.validation = true;
    }
    __name(ValidationError, "ValidationError");
    MissingRefError.message = function(baseId, ref) {
      return "can't resolve reference " + ref + " from id " + baseId;
    };
    function MissingRefError(baseId, ref, message) {
      this.message = message || MissingRefError.message(baseId, ref);
      this.missingRef = resolve.url(baseId, ref);
      this.missingSchema = resolve.normalizeId(resolve.fullPath(this.missingRef));
    }
    __name(MissingRefError, "MissingRefError");
    function errorSubclass(Subclass) {
      Subclass.prototype = Object.create(Error.prototype);
      Subclass.prototype.constructor = Subclass;
      return Subclass;
    }
    __name(errorSubclass, "errorSubclass");
  }
});

// node_modules/fast-json-stable-stringify/index.js
var require_fast_json_stable_stringify = __commonJS({
  "node_modules/fast-json-stable-stringify/index.js"(exports, module) {
    "use strict";
    module.exports = function(data, opts) {
      if (!opts)
        opts = {};
      if (typeof opts === "function")
        opts = { cmp: opts };
      var cycles = typeof opts.cycles === "boolean" ? opts.cycles : false;
      var cmp = opts.cmp && function(f) {
        return function(node) {
          return function(a, b) {
            var aobj = { key: a, value: node[a] };
            var bobj = { key: b, value: node[b] };
            return f(aobj, bobj);
          };
        };
      }(opts.cmp);
      var seen = [];
      return (/* @__PURE__ */ __name(function stringify(node) {
        if (node && node.toJSON && typeof node.toJSON === "function") {
          node = node.toJSON();
        }
        if (node === void 0)
          return;
        if (typeof node == "number")
          return isFinite(node) ? "" + node : "null";
        if (typeof node !== "object")
          return JSON.stringify(node);
        var i, out;
        if (Array.isArray(node)) {
          out = "[";
          for (i = 0; i < node.length; i++) {
            if (i)
              out += ",";
            out += stringify(node[i]) || "null";
          }
          return out + "]";
        }
        if (node === null)
          return "null";
        if (seen.indexOf(node) !== -1) {
          if (cycles)
            return JSON.stringify("__cycle__");
          throw new TypeError("Converting circular structure to JSON");
        }
        var seenIndex = seen.push(node) - 1;
        var keys = Object.keys(node).sort(cmp && cmp(node));
        out = "";
        for (i = 0; i < keys.length; i++) {
          var key = keys[i];
          var value = stringify(node[key]);
          if (!value)
            continue;
          if (out)
            out += ",";
          out += JSON.stringify(key) + ":" + value;
        }
        seen.splice(seenIndex, 1);
        return "{" + out + "}";
      }, "stringify"))(data);
    };
  }
});

// node_modules/ajv/lib/dotjs/validate.js
var require_validate = __commonJS({
  "node_modules/ajv/lib/dotjs/validate.js"(exports, module) {
    "use strict";
    module.exports = /* @__PURE__ */ __name(function generate_validate(it, $keyword, $ruleType) {
      var out = "";
      var $async = it.schema.$async === true, $refKeywords = it.util.schemaHasRulesExcept(it.schema, it.RULES.all, "$ref"), $id = it.self._getId(it.schema);
      if (it.opts.strictKeywords) {
        var $unknownKwd = it.util.schemaUnknownRules(it.schema, it.RULES.keywords);
        if ($unknownKwd) {
          var $keywordsMsg = "unknown keyword: " + $unknownKwd;
          if (it.opts.strictKeywords === "log")
            it.logger.warn($keywordsMsg);
          else
            throw new Error($keywordsMsg);
        }
      }
      if (it.isTop) {
        out += " var validate = ";
        if ($async) {
          it.async = true;
          out += "async ";
        }
        out += "function(data, dataPath, parentData, parentDataProperty, rootData) { 'use strict'; ";
        if ($id && (it.opts.sourceCode || it.opts.processCode)) {
          out += " " + ("/*# sourceURL=" + $id + " */") + " ";
        }
      }
      if (typeof it.schema == "boolean" || !($refKeywords || it.schema.$ref)) {
        var $keyword = "false schema";
        var $lvl = it.level;
        var $dataLvl = it.dataLevel;
        var $schema = it.schema[$keyword];
        var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
        var $errSchemaPath = it.errSchemaPath + "/" + $keyword;
        var $breakOnError = !it.opts.allErrors;
        var $errorKeyword;
        var $data = "data" + ($dataLvl || "");
        var $valid = "valid" + $lvl;
        if (it.schema === false) {
          if (it.isTop) {
            $breakOnError = true;
          } else {
            out += " var " + $valid + " = false; ";
          }
          var $$outStack = $$outStack || [];
          $$outStack.push(out);
          out = "";
          if (it.createErrors !== false) {
            out += " { keyword: '" + ($errorKeyword || "false schema") + "' , dataPath: (dataPath || '') + " + it.errorPath + " , schemaPath: " + it.util.toQuotedString($errSchemaPath) + " , params: {} ";
            if (it.opts.messages !== false) {
              out += " , message: 'boolean schema is false' ";
            }
            if (it.opts.verbose) {
              out += " , schema: false , parentSchema: validate.schema" + it.schemaPath + " , data: " + $data + " ";
            }
            out += " } ";
          } else {
            out += " {} ";
          }
          var __err = out;
          out = $$outStack.pop();
          if (!it.compositeRule && $breakOnError) {
            if (it.async) {
              out += " throw new ValidationError([" + __err + "]); ";
            } else {
              out += " validate.errors = [" + __err + "]; return false; ";
            }
          } else {
            out += " var err = " + __err + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ";
          }
        } else {
          if (it.isTop) {
            if ($async) {
              out += " return data; ";
            } else {
              out += " validate.errors = null; return true; ";
            }
          } else {
            out += " var " + $valid + " = true; ";
          }
        }
        if (it.isTop) {
          out += " }; return validate; ";
        }
        return out;
      }
      if (it.isTop) {
        var $top = it.isTop, $lvl = it.level = 0, $dataLvl = it.dataLevel = 0, $data = "data";
        it.rootId = it.resolve.fullPath(it.self._getId(it.root.schema));
        it.baseId = it.baseId || it.rootId;
        delete it.isTop;
        it.dataPathArr = [""];
        if (it.schema.default !== void 0 && it.opts.useDefaults && it.opts.strictDefaults) {
          var $defaultMsg = "default is ignored in the schema root";
          if (it.opts.strictDefaults === "log")
            it.logger.warn($defaultMsg);
          else
            throw new Error($defaultMsg);
        }
        out += " var vErrors = null; ";
        out += " var errors = 0;     ";
        out += " if (rootData === undefined) rootData = data; ";
      } else {
        var $lvl = it.level, $dataLvl = it.dataLevel, $data = "data" + ($dataLvl || "");
        if ($id)
          it.baseId = it.resolve.url(it.baseId, $id);
        if ($async && !it.async)
          throw new Error("async schema in sync schema");
        out += " var errs_" + $lvl + " = errors;";
      }
      var $valid = "valid" + $lvl, $breakOnError = !it.opts.allErrors, $closingBraces1 = "", $closingBraces2 = "";
      var $errorKeyword;
      var $typeSchema = it.schema.type, $typeIsArray = Array.isArray($typeSchema);
      if ($typeSchema && it.opts.nullable && it.schema.nullable === true) {
        if ($typeIsArray) {
          if ($typeSchema.indexOf("null") == -1)
            $typeSchema = $typeSchema.concat("null");
        } else if ($typeSchema != "null") {
          $typeSchema = [$typeSchema, "null"];
          $typeIsArray = true;
        }
      }
      if ($typeIsArray && $typeSchema.length == 1) {
        $typeSchema = $typeSchema[0];
        $typeIsArray = false;
      }
      if (it.schema.$ref && $refKeywords) {
        if (it.opts.extendRefs == "fail") {
          throw new Error('$ref: validation keywords used in schema at path "' + it.errSchemaPath + '" (see option extendRefs)');
        } else if (it.opts.extendRefs !== true) {
          $refKeywords = false;
          it.logger.warn('$ref: keywords ignored in schema at path "' + it.errSchemaPath + '"');
        }
      }
      if (it.schema.$comment && it.opts.$comment) {
        out += " " + it.RULES.all.$comment.code(it, "$comment");
      }
      if ($typeSchema) {
        if (it.opts.coerceTypes) {
          var $coerceToTypes = it.util.coerceToTypes(it.opts.coerceTypes, $typeSchema);
        }
        var $rulesGroup = it.RULES.types[$typeSchema];
        if ($coerceToTypes || $typeIsArray || $rulesGroup === true || $rulesGroup && !$shouldUseGroup($rulesGroup)) {
          var $schemaPath = it.schemaPath + ".type", $errSchemaPath = it.errSchemaPath + "/type";
          var $schemaPath = it.schemaPath + ".type", $errSchemaPath = it.errSchemaPath + "/type", $method = $typeIsArray ? "checkDataTypes" : "checkDataType";
          out += " if (" + it.util[$method]($typeSchema, $data, it.opts.strictNumbers, true) + ") { ";
          if ($coerceToTypes) {
            var $dataType = "dataType" + $lvl, $coerced = "coerced" + $lvl;
            out += " var " + $dataType + " = typeof " + $data + "; var " + $coerced + " = undefined; ";
            if (it.opts.coerceTypes == "array") {
              out += " if (" + $dataType + " == 'object' && Array.isArray(" + $data + ") && " + $data + ".length == 1) { " + $data + " = " + $data + "[0]; " + $dataType + " = typeof " + $data + "; if (" + it.util.checkDataType(it.schema.type, $data, it.opts.strictNumbers) + ") " + $coerced + " = " + $data + "; } ";
            }
            out += " if (" + $coerced + " !== undefined) ; ";
            var arr1 = $coerceToTypes;
            if (arr1) {
              var $type, $i = -1, l1 = arr1.length - 1;
              while ($i < l1) {
                $type = arr1[$i += 1];
                if ($type == "string") {
                  out += " else if (" + $dataType + " == 'number' || " + $dataType + " == 'boolean') " + $coerced + " = '' + " + $data + "; else if (" + $data + " === null) " + $coerced + " = ''; ";
                } else if ($type == "number" || $type == "integer") {
                  out += " else if (" + $dataType + " == 'boolean' || " + $data + " === null || (" + $dataType + " == 'string' && " + $data + " && " + $data + " == +" + $data + " ";
                  if ($type == "integer") {
                    out += " && !(" + $data + " % 1)";
                  }
                  out += ")) " + $coerced + " = +" + $data + "; ";
                } else if ($type == "boolean") {
                  out += " else if (" + $data + " === 'false' || " + $data + " === 0 || " + $data + " === null) " + $coerced + " = false; else if (" + $data + " === 'true' || " + $data + " === 1) " + $coerced + " = true; ";
                } else if ($type == "null") {
                  out += " else if (" + $data + " === '' || " + $data + " === 0 || " + $data + " === false) " + $coerced + " = null; ";
                } else if (it.opts.coerceTypes == "array" && $type == "array") {
                  out += " else if (" + $dataType + " == 'string' || " + $dataType + " == 'number' || " + $dataType + " == 'boolean' || " + $data + " == null) " + $coerced + " = [" + $data + "]; ";
                }
              }
            }
            out += " else {   ";
            var $$outStack = $$outStack || [];
            $$outStack.push(out);
            out = "";
            if (it.createErrors !== false) {
              out += " { keyword: '" + ($errorKeyword || "type") + "' , dataPath: (dataPath || '') + " + it.errorPath + " , schemaPath: " + it.util.toQuotedString($errSchemaPath) + " , params: { type: '";
              if ($typeIsArray) {
                out += "" + $typeSchema.join(",");
              } else {
                out += "" + $typeSchema;
              }
              out += "' } ";
              if (it.opts.messages !== false) {
                out += " , message: 'should be ";
                if ($typeIsArray) {
                  out += "" + $typeSchema.join(",");
                } else {
                  out += "" + $typeSchema;
                }
                out += "' ";
              }
              if (it.opts.verbose) {
                out += " , schema: validate.schema" + $schemaPath + " , parentSchema: validate.schema" + it.schemaPath + " , data: " + $data + " ";
              }
              out += " } ";
            } else {
              out += " {} ";
            }
            var __err = out;
            out = $$outStack.pop();
            if (!it.compositeRule && $breakOnError) {
              if (it.async) {
                out += " throw new ValidationError([" + __err + "]); ";
              } else {
                out += " validate.errors = [" + __err + "]; return false; ";
              }
            } else {
              out += " var err = " + __err + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ";
            }
            out += " } if (" + $coerced + " !== undefined) {  ";
            var $parentData = $dataLvl ? "data" + ($dataLvl - 1 || "") : "parentData", $parentDataProperty = $dataLvl ? it.dataPathArr[$dataLvl] : "parentDataProperty";
            out += " " + $data + " = " + $coerced + "; ";
            if (!$dataLvl) {
              out += "if (" + $parentData + " !== undefined)";
            }
            out += " " + $parentData + "[" + $parentDataProperty + "] = " + $coerced + "; } ";
          } else {
            var $$outStack = $$outStack || [];
            $$outStack.push(out);
            out = "";
            if (it.createErrors !== false) {
              out += " { keyword: '" + ($errorKeyword || "type") + "' , dataPath: (dataPath || '') + " + it.errorPath + " , schemaPath: " + it.util.toQuotedString($errSchemaPath) + " , params: { type: '";
              if ($typeIsArray) {
                out += "" + $typeSchema.join(",");
              } else {
                out += "" + $typeSchema;
              }
              out += "' } ";
              if (it.opts.messages !== false) {
                out += " , message: 'should be ";
                if ($typeIsArray) {
                  out += "" + $typeSchema.join(",");
                } else {
                  out += "" + $typeSchema;
                }
                out += "' ";
              }
              if (it.opts.verbose) {
                out += " , schema: validate.schema" + $schemaPath + " , parentSchema: validate.schema" + it.schemaPath + " , data: " + $data + " ";
              }
              out += " } ";
            } else {
              out += " {} ";
            }
            var __err = out;
            out = $$outStack.pop();
            if (!it.compositeRule && $breakOnError) {
              if (it.async) {
                out += " throw new ValidationError([" + __err + "]); ";
              } else {
                out += " validate.errors = [" + __err + "]; return false; ";
              }
            } else {
              out += " var err = " + __err + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ";
            }
          }
          out += " } ";
        }
      }
      if (it.schema.$ref && !$refKeywords) {
        out += " " + it.RULES.all.$ref.code(it, "$ref") + " ";
        if ($breakOnError) {
          out += " } if (errors === ";
          if ($top) {
            out += "0";
          } else {
            out += "errs_" + $lvl;
          }
          out += ") { ";
          $closingBraces2 += "}";
        }
      } else {
        var arr2 = it.RULES;
        if (arr2) {
          var $rulesGroup, i2 = -1, l2 = arr2.length - 1;
          while (i2 < l2) {
            $rulesGroup = arr2[i2 += 1];
            if ($shouldUseGroup($rulesGroup)) {
              if ($rulesGroup.type) {
                out += " if (" + it.util.checkDataType($rulesGroup.type, $data, it.opts.strictNumbers) + ") { ";
              }
              if (it.opts.useDefaults) {
                if ($rulesGroup.type == "object" && it.schema.properties) {
                  var $schema = it.schema.properties, $schemaKeys = Object.keys($schema);
                  var arr3 = $schemaKeys;
                  if (arr3) {
                    var $propertyKey, i3 = -1, l3 = arr3.length - 1;
                    while (i3 < l3) {
                      $propertyKey = arr3[i3 += 1];
                      var $sch = $schema[$propertyKey];
                      if ($sch.default !== void 0) {
                        var $passData = $data + it.util.getProperty($propertyKey);
                        if (it.compositeRule) {
                          if (it.opts.strictDefaults) {
                            var $defaultMsg = "default is ignored for: " + $passData;
                            if (it.opts.strictDefaults === "log")
                              it.logger.warn($defaultMsg);
                            else
                              throw new Error($defaultMsg);
                          }
                        } else {
                          out += " if (" + $passData + " === undefined ";
                          if (it.opts.useDefaults == "empty") {
                            out += " || " + $passData + " === null || " + $passData + " === '' ";
                          }
                          out += " ) " + $passData + " = ";
                          if (it.opts.useDefaults == "shared") {
                            out += " " + it.useDefault($sch.default) + " ";
                          } else {
                            out += " " + JSON.stringify($sch.default) + " ";
                          }
                          out += "; ";
                        }
                      }
                    }
                  }
                } else if ($rulesGroup.type == "array" && Array.isArray(it.schema.items)) {
                  var arr4 = it.schema.items;
                  if (arr4) {
                    var $sch, $i = -1, l4 = arr4.length - 1;
                    while ($i < l4) {
                      $sch = arr4[$i += 1];
                      if ($sch.default !== void 0) {
                        var $passData = $data + "[" + $i + "]";
                        if (it.compositeRule) {
                          if (it.opts.strictDefaults) {
                            var $defaultMsg = "default is ignored for: " + $passData;
                            if (it.opts.strictDefaults === "log")
                              it.logger.warn($defaultMsg);
                            else
                              throw new Error($defaultMsg);
                          }
                        } else {
                          out += " if (" + $passData + " === undefined ";
                          if (it.opts.useDefaults == "empty") {
                            out += " || " + $passData + " === null || " + $passData + " === '' ";
                          }
                          out += " ) " + $passData + " = ";
                          if (it.opts.useDefaults == "shared") {
                            out += " " + it.useDefault($sch.default) + " ";
                          } else {
                            out += " " + JSON.stringify($sch.default) + " ";
                          }
                          out += "; ";
                        }
                      }
                    }
                  }
                }
              }
              var arr5 = $rulesGroup.rules;
              if (arr5) {
                var $rule, i5 = -1, l5 = arr5.length - 1;
                while (i5 < l5) {
                  $rule = arr5[i5 += 1];
                  if ($shouldUseRule($rule)) {
                    var $code = $rule.code(it, $rule.keyword, $rulesGroup.type);
                    if ($code) {
                      out += " " + $code + " ";
                      if ($breakOnError) {
                        $closingBraces1 += "}";
                      }
                    }
                  }
                }
              }
              if ($breakOnError) {
                out += " " + $closingBraces1 + " ";
                $closingBraces1 = "";
              }
              if ($rulesGroup.type) {
                out += " } ";
                if ($typeSchema && $typeSchema === $rulesGroup.type && !$coerceToTypes) {
                  out += " else { ";
                  var $schemaPath = it.schemaPath + ".type", $errSchemaPath = it.errSchemaPath + "/type";
                  var $$outStack = $$outStack || [];
                  $$outStack.push(out);
                  out = "";
                  if (it.createErrors !== false) {
                    out += " { keyword: '" + ($errorKeyword || "type") + "' , dataPath: (dataPath || '') + " + it.errorPath + " , schemaPath: " + it.util.toQuotedString($errSchemaPath) + " , params: { type: '";
                    if ($typeIsArray) {
                      out += "" + $typeSchema.join(",");
                    } else {
                      out += "" + $typeSchema;
                    }
                    out += "' } ";
                    if (it.opts.messages !== false) {
                      out += " , message: 'should be ";
                      if ($typeIsArray) {
                        out += "" + $typeSchema.join(",");
                      } else {
                        out += "" + $typeSchema;
                      }
                      out += "' ";
                    }
                    if (it.opts.verbose) {
                      out += " , schema: validate.schema" + $schemaPath + " , parentSchema: validate.schema" + it.schemaPath + " , data: " + $data + " ";
                    }
                    out += " } ";
                  } else {
                    out += " {} ";
                  }
                  var __err = out;
                  out = $$outStack.pop();
                  if (!it.compositeRule && $breakOnError) {
                    if (it.async) {
                      out += " throw new ValidationError([" + __err + "]); ";
                    } else {
                      out += " validate.errors = [" + __err + "]; return false; ";
                    }
                  } else {
                    out += " var err = " + __err + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ";
                  }
                  out += " } ";
                }
              }
              if ($breakOnError) {
                out += " if (errors === ";
                if ($top) {
                  out += "0";
                } else {
                  out += "errs_" + $lvl;
                }
                out += ") { ";
                $closingBraces2 += "}";
              }
            }
          }
        }
      }
      if ($breakOnError) {
        out += " " + $closingBraces2 + " ";
      }
      if ($top) {
        if ($async) {
          out += " if (errors === 0) return data;           ";
          out += " else throw new ValidationError(vErrors); ";
        } else {
          out += " validate.errors = vErrors; ";
          out += " return errors === 0;       ";
        }
        out += " }; return validate;";
      } else {
        out += " var " + $valid + " = errors === errs_" + $lvl + ";";
      }
      function $shouldUseGroup($rulesGroup2) {
        var rules = $rulesGroup2.rules;
        for (var i = 0; i < rules.length; i++)
          if ($shouldUseRule(rules[i]))
            return true;
      }
      __name($shouldUseGroup, "$shouldUseGroup");
      function $shouldUseRule($rule2) {
        return it.schema[$rule2.keyword] !== void 0 || $rule2.implements && $ruleImplementsSomeKeyword($rule2);
      }
      __name($shouldUseRule, "$shouldUseRule");
      function $ruleImplementsSomeKeyword($rule2) {
        var impl = $rule2.implements;
        for (var i = 0; i < impl.length; i++)
          if (it.schema[impl[i]] !== void 0)
            return true;
      }
      __name($ruleImplementsSomeKeyword, "$ruleImplementsSomeKeyword");
      return out;
    }, "generate_validate");
  }
});

// node_modules/ajv/lib/compile/index.js
var require_compile = __commonJS({
  "node_modules/ajv/lib/compile/index.js"(exports, module) {
    "use strict";
    var resolve = require_resolve();
    var util2 = require_util();
    var errorClasses = require_error_classes();
    var stableStringify = require_fast_json_stable_stringify();
    var validateGenerator = require_validate();
    var ucs2length = util2.ucs2length;
    var equal = require_fast_deep_equal();
    var ValidationError = errorClasses.Validation;
    module.exports = compile;
    function compile(schema, root, localRefs, baseId) {
      var self = this, opts = this._opts, refVal = [void 0], refs = {}, patterns = [], patternsHash = {}, defaults = [], defaultsHash = {}, customRules = [];
      root = root || { schema, refVal, refs };
      var c = checkCompiling.call(this, schema, root, baseId);
      var compilation = this._compilations[c.index];
      if (c.compiling)
        return compilation.callValidate = callValidate;
      var formats = this._formats;
      var RULES = this.RULES;
      try {
        var v = localCompile(schema, root, localRefs, baseId);
        compilation.validate = v;
        var cv = compilation.callValidate;
        if (cv) {
          cv.schema = v.schema;
          cv.errors = null;
          cv.refs = v.refs;
          cv.refVal = v.refVal;
          cv.root = v.root;
          cv.$async = v.$async;
          if (opts.sourceCode)
            cv.source = v.source;
        }
        return v;
      } finally {
        endCompiling.call(this, schema, root, baseId);
      }
      function callValidate() {
        var validate = compilation.validate;
        var result = validate.apply(this, arguments);
        callValidate.errors = validate.errors;
        return result;
      }
      __name(callValidate, "callValidate");
      function localCompile(_schema, _root, localRefs2, baseId2) {
        var isRoot = !_root || _root && _root.schema == _schema;
        if (_root.schema != root.schema)
          return compile.call(self, _schema, _root, localRefs2, baseId2);
        var $async = _schema.$async === true;
        var sourceCode = validateGenerator({
          isTop: true,
          schema: _schema,
          isRoot,
          baseId: baseId2,
          root: _root,
          schemaPath: "",
          errSchemaPath: "#",
          errorPath: '""',
          MissingRefError: errorClasses.MissingRef,
          RULES,
          validate: validateGenerator,
          util: util2,
          resolve,
          resolveRef,
          usePattern,
          useDefault,
          useCustomRule,
          opts,
          formats,
          logger: self.logger,
          self
        });
        sourceCode = vars(refVal, refValCode) + vars(patterns, patternCode) + vars(defaults, defaultCode) + vars(customRules, customRuleCode) + sourceCode;
        if (opts.processCode)
          sourceCode = opts.processCode(sourceCode, _schema);
        var validate;
        try {
          var makeValidate = new Function(
            "self",
            "RULES",
            "formats",
            "root",
            "refVal",
            "defaults",
            "customRules",
            "equal",
            "ucs2length",
            "ValidationError",
            sourceCode
          );
          validate = makeValidate(
            self,
            RULES,
            formats,
            root,
            refVal,
            defaults,
            customRules,
            equal,
            ucs2length,
            ValidationError
          );
          refVal[0] = validate;
        } catch (e) {
          self.logger.error("Error compiling schema, function code:", sourceCode);
          throw e;
        }
        validate.schema = _schema;
        validate.errors = null;
        validate.refs = refs;
        validate.refVal = refVal;
        validate.root = isRoot ? validate : _root;
        if ($async)
          validate.$async = true;
        if (opts.sourceCode === true) {
          validate.source = {
            code: sourceCode,
            patterns,
            defaults
          };
        }
        return validate;
      }
      __name(localCompile, "localCompile");
      function resolveRef(baseId2, ref, isRoot) {
        ref = resolve.url(baseId2, ref);
        var refIndex = refs[ref];
        var _refVal, refCode;
        if (refIndex !== void 0) {
          _refVal = refVal[refIndex];
          refCode = "refVal[" + refIndex + "]";
          return resolvedRef(_refVal, refCode);
        }
        if (!isRoot && root.refs) {
          var rootRefId = root.refs[ref];
          if (rootRefId !== void 0) {
            _refVal = root.refVal[rootRefId];
            refCode = addLocalRef(ref, _refVal);
            return resolvedRef(_refVal, refCode);
          }
        }
        refCode = addLocalRef(ref);
        var v2 = resolve.call(self, localCompile, root, ref);
        if (v2 === void 0) {
          var localSchema = localRefs && localRefs[ref];
          if (localSchema) {
            v2 = resolve.inlineRef(localSchema, opts.inlineRefs) ? localSchema : compile.call(self, localSchema, root, localRefs, baseId2);
          }
        }
        if (v2 === void 0) {
          removeLocalRef(ref);
        } else {
          replaceLocalRef(ref, v2);
          return resolvedRef(v2, refCode);
        }
      }
      __name(resolveRef, "resolveRef");
      function addLocalRef(ref, v2) {
        var refId = refVal.length;
        refVal[refId] = v2;
        refs[ref] = refId;
        return "refVal" + refId;
      }
      __name(addLocalRef, "addLocalRef");
      function removeLocalRef(ref) {
        delete refs[ref];
      }
      __name(removeLocalRef, "removeLocalRef");
      function replaceLocalRef(ref, v2) {
        var refId = refs[ref];
        refVal[refId] = v2;
      }
      __name(replaceLocalRef, "replaceLocalRef");
      function resolvedRef(refVal2, code) {
        return typeof refVal2 == "object" || typeof refVal2 == "boolean" ? { code, schema: refVal2, inline: true } : { code, $async: refVal2 && !!refVal2.$async };
      }
      __name(resolvedRef, "resolvedRef");
      function usePattern(regexStr) {
        var index = patternsHash[regexStr];
        if (index === void 0) {
          index = patternsHash[regexStr] = patterns.length;
          patterns[index] = regexStr;
        }
        return "pattern" + index;
      }
      __name(usePattern, "usePattern");
      function useDefault(value) {
        switch (typeof value) {
          case "boolean":
          case "number":
            return "" + value;
          case "string":
            return util2.toQuotedString(value);
          case "object":
            if (value === null)
              return "null";
            var valueStr = stableStringify(value);
            var index = defaultsHash[valueStr];
            if (index === void 0) {
              index = defaultsHash[valueStr] = defaults.length;
              defaults[index] = value;
            }
            return "default" + index;
        }
      }
      __name(useDefault, "useDefault");
      function useCustomRule(rule, schema2, parentSchema, it) {
        if (self._opts.validateSchema !== false) {
          var deps = rule.definition.dependencies;
          if (deps && !deps.every(function(keyword) {
            return Object.prototype.hasOwnProperty.call(parentSchema, keyword);
          }))
            throw new Error("parent schema must have all required keywords: " + deps.join(","));
          var validateSchema = rule.definition.validateSchema;
          if (validateSchema) {
            var valid = validateSchema(schema2);
            if (!valid) {
              var message = "keyword schema is invalid: " + self.errorsText(validateSchema.errors);
              if (self._opts.validateSchema == "log")
                self.logger.error(message);
              else
                throw new Error(message);
            }
          }
        }
        var compile2 = rule.definition.compile, inline = rule.definition.inline, macro = rule.definition.macro;
        var validate;
        if (compile2) {
          validate = compile2.call(self, schema2, parentSchema, it);
        } else if (macro) {
          validate = macro.call(self, schema2, parentSchema, it);
          if (opts.validateSchema !== false)
            self.validateSchema(validate, true);
        } else if (inline) {
          validate = inline.call(self, it, rule.keyword, schema2, parentSchema);
        } else {
          validate = rule.definition.validate;
          if (!validate)
            return;
        }
        if (validate === void 0)
          throw new Error('custom keyword "' + rule.keyword + '"failed to compile');
        var index = customRules.length;
        customRules[index] = validate;
        return {
          code: "customRule" + index,
          validate
        };
      }
      __name(useCustomRule, "useCustomRule");
    }
    __name(compile, "compile");
    function checkCompiling(schema, root, baseId) {
      var index = compIndex.call(this, schema, root, baseId);
      if (index >= 0)
        return { index, compiling: true };
      index = this._compilations.length;
      this._compilations[index] = {
        schema,
        root,
        baseId
      };
      return { index, compiling: false };
    }
    __name(checkCompiling, "checkCompiling");
    function endCompiling(schema, root, baseId) {
      var i = compIndex.call(this, schema, root, baseId);
      if (i >= 0)
        this._compilations.splice(i, 1);
    }
    __name(endCompiling, "endCompiling");
    function compIndex(schema, root, baseId) {
      for (var i = 0; i < this._compilations.length; i++) {
        var c = this._compilations[i];
        if (c.schema == schema && c.root == root && c.baseId == baseId)
          return i;
      }
      return -1;
    }
    __name(compIndex, "compIndex");
    function patternCode(i, patterns) {
      return "var pattern" + i + " = new RegExp(" + util2.toQuotedString(patterns[i]) + ");";
    }
    __name(patternCode, "patternCode");
    function defaultCode(i) {
      return "var default" + i + " = defaults[" + i + "];";
    }
    __name(defaultCode, "defaultCode");
    function refValCode(i, refVal) {
      return refVal[i] === void 0 ? "" : "var refVal" + i + " = refVal[" + i + "];";
    }
    __name(refValCode, "refValCode");
    function customRuleCode(i) {
      return "var customRule" + i + " = customRules[" + i + "];";
    }
    __name(customRuleCode, "customRuleCode");
    function vars(arr, statement) {
      if (!arr.length)
        return "";
      var code = "";
      for (var i = 0; i < arr.length; i++)
        code += statement(i, arr);
      return code;
    }
    __name(vars, "vars");
  }
});

// node_modules/ajv/lib/cache.js
var require_cache = __commonJS({
  "node_modules/ajv/lib/cache.js"(exports, module) {
    "use strict";
    var Cache = module.exports = /* @__PURE__ */ __name(function Cache2() {
      this._cache = {};
    }, "Cache");
    Cache.prototype.put = /* @__PURE__ */ __name(function Cache_put(key, value) {
      this._cache[key] = value;
    }, "Cache_put");
    Cache.prototype.get = /* @__PURE__ */ __name(function Cache_get(key) {
      return this._cache[key];
    }, "Cache_get");
    Cache.prototype.del = /* @__PURE__ */ __name(function Cache_del(key) {
      delete this._cache[key];
    }, "Cache_del");
    Cache.prototype.clear = /* @__PURE__ */ __name(function Cache_clear() {
      this._cache = {};
    }, "Cache_clear");
  }
});

// node_modules/ajv/lib/compile/formats.js
var require_formats = __commonJS({
  "node_modules/ajv/lib/compile/formats.js"(exports, module) {
    "use strict";
    var util2 = require_util();
    var DATE = /^(\d\d\d\d)-(\d\d)-(\d\d)$/;
    var DAYS = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    var TIME = /^(\d\d):(\d\d):(\d\d)(\.\d+)?(z|[+-]\d\d(?::?\d\d)?)?$/i;
    var HOSTNAME = /^(?=.{1,253}\.?$)[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[-0-9a-z]{0,61}[0-9a-z])?)*\.?$/i;
    var URI = /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)(?:\?(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i;
    var URIREF = /^(?:[a-z][a-z0-9+\-.]*:)?(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'"()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?(?:\?(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i;
    var URITEMPLATE = /^(?:(?:[^\x00-\x20"'<>%\\^`{|}]|%[0-9a-f]{2})|\{[+#./;?&=,!@|]?(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?(?:,(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?)*\})*$/i;
    var URL2 = /^(?:(?:http[s\u017F]?|ftp):\/\/)(?:(?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+(?::(?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*)?@)?(?:(?!10(?:\.[0-9]{1,3}){3})(?!127(?:\.[0-9]{1,3}){3})(?!169\.254(?:\.[0-9]{1,3}){2})(?!192\.168(?:\.[0-9]{1,3}){2})(?!172\.(?:1[6-9]|2[0-9]|3[01])(?:\.[0-9]{1,3}){2})(?:[1-9][0-9]?|1[0-9][0-9]|2[01][0-9]|22[0-3])(?:\.(?:1?[0-9]{1,2}|2[0-4][0-9]|25[0-5])){2}(?:\.(?:[1-9][0-9]?|1[0-9][0-9]|2[0-4][0-9]|25[0-4]))|(?:(?:(?:[0-9a-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+-)*(?:[0-9a-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+)(?:\.(?:(?:[0-9a-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+-)*(?:[0-9a-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+)*(?:\.(?:(?:[a-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]){2,})))(?::[0-9]{2,5})?(?:\/(?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*)?$/i;
    var UUID = /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i;
    var JSON_POINTER = /^(?:\/(?:[^~/]|~0|~1)*)*$/;
    var JSON_POINTER_URI_FRAGMENT = /^#(?:\/(?:[a-z0-9_\-.!$&'()*+,;:=@]|%[0-9a-f]{2}|~0|~1)*)*$/i;
    var RELATIVE_JSON_POINTER = /^(?:0|[1-9][0-9]*)(?:#|(?:\/(?:[^~/]|~0|~1)*)*)$/;
    module.exports = formats;
    function formats(mode) {
      mode = mode == "full" ? "full" : "fast";
      return util2.copy(formats[mode]);
    }
    __name(formats, "formats");
    formats.fast = {
      // date: http://tools.ietf.org/html/rfc3339#section-5.6
      date: /^\d\d\d\d-[0-1]\d-[0-3]\d$/,
      // date-time: http://tools.ietf.org/html/rfc3339#section-5.6
      time: /^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)?$/i,
      "date-time": /^\d\d\d\d-[0-1]\d-[0-3]\d[t\s](?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)$/i,
      // uri: https://github.com/mafintosh/is-my-json-valid/blob/master/formats.js
      uri: /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/)?[^\s]*$/i,
      "uri-reference": /^(?:(?:[a-z][a-z0-9+\-.]*:)?\/?\/)?(?:[^\\\s#][^\s#]*)?(?:#[^\\\s]*)?$/i,
      "uri-template": URITEMPLATE,
      url: URL2,
      // email (sources from jsen validator):
      // http://stackoverflow.com/questions/201323/using-a-regular-expression-to-validate-an-email-address#answer-8829363
      // http://www.w3.org/TR/html5/forms.html#valid-e-mail-address (search for 'willful violation')
      email: /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)*$/i,
      hostname: HOSTNAME,
      // optimized https://www.safaribooksonline.com/library/view/regular-expressions-cookbook/9780596802837/ch07s16.html
      ipv4: /^(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)$/,
      // optimized http://stackoverflow.com/questions/53497/regular-expression-that-matches-valid-ipv6-addresses
      ipv6: /^\s*(?:(?:(?:[0-9a-f]{1,4}:){7}(?:[0-9a-f]{1,4}|:))|(?:(?:[0-9a-f]{1,4}:){6}(?::[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){5}(?:(?:(?::[0-9a-f]{1,4}){1,2})|:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){4}(?:(?:(?::[0-9a-f]{1,4}){1,3})|(?:(?::[0-9a-f]{1,4})?:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){3}(?:(?:(?::[0-9a-f]{1,4}){1,4})|(?:(?::[0-9a-f]{1,4}){0,2}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){2}(?:(?:(?::[0-9a-f]{1,4}){1,5})|(?:(?::[0-9a-f]{1,4}){0,3}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){1}(?:(?:(?::[0-9a-f]{1,4}){1,6})|(?:(?::[0-9a-f]{1,4}){0,4}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?::(?:(?:(?::[0-9a-f]{1,4}){1,7})|(?:(?::[0-9a-f]{1,4}){0,5}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(?:%.+)?\s*$/i,
      regex,
      // uuid: http://tools.ietf.org/html/rfc4122
      uuid: UUID,
      // JSON-pointer: https://tools.ietf.org/html/rfc6901
      // uri fragment: https://tools.ietf.org/html/rfc3986#appendix-A
      "json-pointer": JSON_POINTER,
      "json-pointer-uri-fragment": JSON_POINTER_URI_FRAGMENT,
      // relative JSON-pointer: http://tools.ietf.org/html/draft-luff-relative-json-pointer-00
      "relative-json-pointer": RELATIVE_JSON_POINTER
    };
    formats.full = {
      date,
      time: time2,
      "date-time": date_time,
      uri,
      "uri-reference": URIREF,
      "uri-template": URITEMPLATE,
      url: URL2,
      email: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i,
      hostname: HOSTNAME,
      ipv4: /^(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)$/,
      ipv6: /^\s*(?:(?:(?:[0-9a-f]{1,4}:){7}(?:[0-9a-f]{1,4}|:))|(?:(?:[0-9a-f]{1,4}:){6}(?::[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){5}(?:(?:(?::[0-9a-f]{1,4}){1,2})|:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){4}(?:(?:(?::[0-9a-f]{1,4}){1,3})|(?:(?::[0-9a-f]{1,4})?:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){3}(?:(?:(?::[0-9a-f]{1,4}){1,4})|(?:(?::[0-9a-f]{1,4}){0,2}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){2}(?:(?:(?::[0-9a-f]{1,4}){1,5})|(?:(?::[0-9a-f]{1,4}){0,3}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){1}(?:(?:(?::[0-9a-f]{1,4}){1,6})|(?:(?::[0-9a-f]{1,4}){0,4}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?::(?:(?:(?::[0-9a-f]{1,4}){1,7})|(?:(?::[0-9a-f]{1,4}){0,5}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(?:%.+)?\s*$/i,
      regex,
      uuid: UUID,
      "json-pointer": JSON_POINTER,
      "json-pointer-uri-fragment": JSON_POINTER_URI_FRAGMENT,
      "relative-json-pointer": RELATIVE_JSON_POINTER
    };
    function isLeapYear(year) {
      return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
    }
    __name(isLeapYear, "isLeapYear");
    function date(str) {
      var matches = str.match(DATE);
      if (!matches)
        return false;
      var year = +matches[1];
      var month = +matches[2];
      var day = +matches[3];
      return month >= 1 && month <= 12 && day >= 1 && day <= (month == 2 && isLeapYear(year) ? 29 : DAYS[month]);
    }
    __name(date, "date");
    function time2(str, full) {
      var matches = str.match(TIME);
      if (!matches)
        return false;
      var hour = matches[1];
      var minute = matches[2];
      var second = matches[3];
      var timeZone = matches[5];
      return (hour <= 23 && minute <= 59 && second <= 59 || hour == 23 && minute == 59 && second == 60) && (!full || timeZone);
    }
    __name(time2, "time");
    var DATE_TIME_SEPARATOR = /t|\s/i;
    function date_time(str) {
      var dateTime = str.split(DATE_TIME_SEPARATOR);
      return dateTime.length == 2 && date(dateTime[0]) && time2(dateTime[1], true);
    }
    __name(date_time, "date_time");
    var NOT_URI_FRAGMENT = /\/|:/;
    function uri(str) {
      return NOT_URI_FRAGMENT.test(str) && URI.test(str);
    }
    __name(uri, "uri");
    var Z_ANCHOR = /[^\\]\\Z/;
    function regex(str) {
      if (Z_ANCHOR.test(str))
        return false;
      try {
        new RegExp(str);
        return true;
      } catch (e) {
        return false;
      }
    }
    __name(regex, "regex");
  }
});

// node_modules/ajv/lib/dotjs/ref.js
var require_ref = __commonJS({
  "node_modules/ajv/lib/dotjs/ref.js"(exports, module) {
    "use strict";
    module.exports = /* @__PURE__ */ __name(function generate_ref(it, $keyword, $ruleType) {
      var out = " ";
      var $lvl = it.level;
      var $dataLvl = it.dataLevel;
      var $schema = it.schema[$keyword];
      var $errSchemaPath = it.errSchemaPath + "/" + $keyword;
      var $breakOnError = !it.opts.allErrors;
      var $data = "data" + ($dataLvl || "");
      var $valid = "valid" + $lvl;
      var $async, $refCode;
      if ($schema == "#" || $schema == "#/") {
        if (it.isRoot) {
          $async = it.async;
          $refCode = "validate";
        } else {
          $async = it.root.schema.$async === true;
          $refCode = "root.refVal[0]";
        }
      } else {
        var $refVal = it.resolveRef(it.baseId, $schema, it.isRoot);
        if ($refVal === void 0) {
          var $message = it.MissingRefError.message(it.baseId, $schema);
          if (it.opts.missingRefs == "fail") {
            it.logger.error($message);
            var $$outStack = $$outStack || [];
            $$outStack.push(out);
            out = "";
            if (it.createErrors !== false) {
              out += " { keyword: '$ref' , dataPath: (dataPath || '') + " + it.errorPath + " , schemaPath: " + it.util.toQuotedString($errSchemaPath) + " , params: { ref: '" + it.util.escapeQuotes($schema) + "' } ";
              if (it.opts.messages !== false) {
                out += " , message: 'can\\'t resolve reference " + it.util.escapeQuotes($schema) + "' ";
              }
              if (it.opts.verbose) {
                out += " , schema: " + it.util.toQuotedString($schema) + " , parentSchema: validate.schema" + it.schemaPath + " , data: " + $data + " ";
              }
              out += " } ";
            } else {
              out += " {} ";
            }
            var __err = out;
            out = $$outStack.pop();
            if (!it.compositeRule && $breakOnError) {
              if (it.async) {
                out += " throw new ValidationError([" + __err + "]); ";
              } else {
                out += " validate.errors = [" + __err + "]; return false; ";
              }
            } else {
              out += " var err = " + __err + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ";
            }
            if ($breakOnError) {
              out += " if (false) { ";
            }
          } else if (it.opts.missingRefs == "ignore") {
            it.logger.warn($message);
            if ($breakOnError) {
              out += " if (true) { ";
            }
          } else {
            throw new it.MissingRefError(it.baseId, $schema, $message);
          }
        } else if ($refVal.inline) {
          var $it = it.util.copy(it);
          $it.level++;
          var $nextValid = "valid" + $it.level;
          $it.schema = $refVal.schema;
          $it.schemaPath = "";
          $it.errSchemaPath = $schema;
          var $code = it.validate($it).replace(/validate\.schema/g, $refVal.code);
          out += " " + $code + " ";
          if ($breakOnError) {
            out += " if (" + $nextValid + ") { ";
          }
        } else {
          $async = $refVal.$async === true || it.async && $refVal.$async !== false;
          $refCode = $refVal.code;
        }
      }
      if ($refCode) {
        var $$outStack = $$outStack || [];
        $$outStack.push(out);
        out = "";
        if (it.opts.passContext) {
          out += " " + $refCode + ".call(this, ";
        } else {
          out += " " + $refCode + "( ";
        }
        out += " " + $data + ", (dataPath || '')";
        if (it.errorPath != '""') {
          out += " + " + it.errorPath;
        }
        var $parentData = $dataLvl ? "data" + ($dataLvl - 1 || "") : "parentData", $parentDataProperty = $dataLvl ? it.dataPathArr[$dataLvl] : "parentDataProperty";
        out += " , " + $parentData + " , " + $parentDataProperty + ", rootData)  ";
        var __callValidate = out;
        out = $$outStack.pop();
        if ($async) {
          if (!it.async)
            throw new Error("async schema referenced by sync schema");
          if ($breakOnError) {
            out += " var " + $valid + "; ";
          }
          out += " try { await " + __callValidate + "; ";
          if ($breakOnError) {
            out += " " + $valid + " = true; ";
          }
          out += " } catch (e) { if (!(e instanceof ValidationError)) throw e; if (vErrors === null) vErrors = e.errors; else vErrors = vErrors.concat(e.errors); errors = vErrors.length; ";
          if ($breakOnError) {
            out += " " + $valid + " = false; ";
          }
          out += " } ";
          if ($breakOnError) {
            out += " if (" + $valid + ") { ";
          }
        } else {
          out += " if (!" + __callValidate + ") { if (vErrors === null) vErrors = " + $refCode + ".errors; else vErrors = vErrors.concat(" + $refCode + ".errors); errors = vErrors.length; } ";
          if ($breakOnError) {
            out += " else { ";
          }
        }
      }
      return out;
    }, "generate_ref");
  }
});

// node_modules/ajv/lib/dotjs/allOf.js
var require_allOf = __commonJS({
  "node_modules/ajv/lib/dotjs/allOf.js"(exports, module) {
    "use strict";
    module.exports = /* @__PURE__ */ __name(function generate_allOf(it, $keyword, $ruleType) {
      var out = " ";
      var $schema = it.schema[$keyword];
      var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
      var $errSchemaPath = it.errSchemaPath + "/" + $keyword;
      var $breakOnError = !it.opts.allErrors;
      var $it = it.util.copy(it);
      var $closingBraces = "";
      $it.level++;
      var $nextValid = "valid" + $it.level;
      var $currentBaseId = $it.baseId, $allSchemasEmpty = true;
      var arr1 = $schema;
      if (arr1) {
        var $sch, $i = -1, l1 = arr1.length - 1;
        while ($i < l1) {
          $sch = arr1[$i += 1];
          if (it.opts.strictKeywords ? typeof $sch == "object" && Object.keys($sch).length > 0 || $sch === false : it.util.schemaHasRules($sch, it.RULES.all)) {
            $allSchemasEmpty = false;
            $it.schema = $sch;
            $it.schemaPath = $schemaPath + "[" + $i + "]";
            $it.errSchemaPath = $errSchemaPath + "/" + $i;
            out += "  " + it.validate($it) + " ";
            $it.baseId = $currentBaseId;
            if ($breakOnError) {
              out += " if (" + $nextValid + ") { ";
              $closingBraces += "}";
            }
          }
        }
      }
      if ($breakOnError) {
        if ($allSchemasEmpty) {
          out += " if (true) { ";
        } else {
          out += " " + $closingBraces.slice(0, -1) + " ";
        }
      }
      return out;
    }, "generate_allOf");
  }
});

// node_modules/ajv/lib/dotjs/anyOf.js
var require_anyOf = __commonJS({
  "node_modules/ajv/lib/dotjs/anyOf.js"(exports, module) {
    "use strict";
    module.exports = /* @__PURE__ */ __name(function generate_anyOf(it, $keyword, $ruleType) {
      var out = " ";
      var $lvl = it.level;
      var $dataLvl = it.dataLevel;
      var $schema = it.schema[$keyword];
      var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
      var $errSchemaPath = it.errSchemaPath + "/" + $keyword;
      var $breakOnError = !it.opts.allErrors;
      var $data = "data" + ($dataLvl || "");
      var $valid = "valid" + $lvl;
      var $errs = "errs__" + $lvl;
      var $it = it.util.copy(it);
      var $closingBraces = "";
      $it.level++;
      var $nextValid = "valid" + $it.level;
      var $noEmptySchema = $schema.every(function($sch2) {
        return it.opts.strictKeywords ? typeof $sch2 == "object" && Object.keys($sch2).length > 0 || $sch2 === false : it.util.schemaHasRules($sch2, it.RULES.all);
      });
      if ($noEmptySchema) {
        var $currentBaseId = $it.baseId;
        out += " var " + $errs + " = errors; var " + $valid + " = false;  ";
        var $wasComposite = it.compositeRule;
        it.compositeRule = $it.compositeRule = true;
        var arr1 = $schema;
        if (arr1) {
          var $sch, $i = -1, l1 = arr1.length - 1;
          while ($i < l1) {
            $sch = arr1[$i += 1];
            $it.schema = $sch;
            $it.schemaPath = $schemaPath + "[" + $i + "]";
            $it.errSchemaPath = $errSchemaPath + "/" + $i;
            out += "  " + it.validate($it) + " ";
            $it.baseId = $currentBaseId;
            out += " " + $valid + " = " + $valid + " || " + $nextValid + "; if (!" + $valid + ") { ";
            $closingBraces += "}";
          }
        }
        it.compositeRule = $it.compositeRule = $wasComposite;
        out += " " + $closingBraces + " if (!" + $valid + ") {   var err =   ";
        if (it.createErrors !== false) {
          out += " { keyword: 'anyOf' , dataPath: (dataPath || '') + " + it.errorPath + " , schemaPath: " + it.util.toQuotedString($errSchemaPath) + " , params: {} ";
          if (it.opts.messages !== false) {
            out += " , message: 'should match some schema in anyOf' ";
          }
          if (it.opts.verbose) {
            out += " , schema: validate.schema" + $schemaPath + " , parentSchema: validate.schema" + it.schemaPath + " , data: " + $data + " ";
          }
          out += " } ";
        } else {
          out += " {} ";
        }
        out += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ";
        if (!it.compositeRule && $breakOnError) {
          if (it.async) {
            out += " throw new ValidationError(vErrors); ";
          } else {
            out += " validate.errors = vErrors; return false; ";
          }
        }
        out += " } else {  errors = " + $errs + "; if (vErrors !== null) { if (" + $errs + ") vErrors.length = " + $errs + "; else vErrors = null; } ";
        if (it.opts.allErrors) {
          out += " } ";
        }
      } else {
        if ($breakOnError) {
          out += " if (true) { ";
        }
      }
      return out;
    }, "generate_anyOf");
  }
});

// node_modules/ajv/lib/dotjs/comment.js
var require_comment = __commonJS({
  "node_modules/ajv/lib/dotjs/comment.js"(exports, module) {
    "use strict";
    module.exports = /* @__PURE__ */ __name(function generate_comment(it, $keyword, $ruleType) {
      var out = " ";
      var $schema = it.schema[$keyword];
      var $errSchemaPath = it.errSchemaPath + "/" + $keyword;
      var $breakOnError = !it.opts.allErrors;
      var $comment = it.util.toQuotedString($schema);
      if (it.opts.$comment === true) {
        out += " console.log(" + $comment + ");";
      } else if (typeof it.opts.$comment == "function") {
        out += " self._opts.$comment(" + $comment + ", " + it.util.toQuotedString($errSchemaPath) + ", validate.root.schema);";
      }
      return out;
    }, "generate_comment");
  }
});

// node_modules/ajv/lib/dotjs/const.js
var require_const = __commonJS({
  "node_modules/ajv/lib/dotjs/const.js"(exports, module) {
    "use strict";
    module.exports = /* @__PURE__ */ __name(function generate_const(it, $keyword, $ruleType) {
      var out = " ";
      var $lvl = it.level;
      var $dataLvl = it.dataLevel;
      var $schema = it.schema[$keyword];
      var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
      var $errSchemaPath = it.errSchemaPath + "/" + $keyword;
      var $breakOnError = !it.opts.allErrors;
      var $data = "data" + ($dataLvl || "");
      var $valid = "valid" + $lvl;
      var $isData = it.opts.$data && $schema && $schema.$data, $schemaValue;
      if ($isData) {
        out += " var schema" + $lvl + " = " + it.util.getData($schema.$data, $dataLvl, it.dataPathArr) + "; ";
        $schemaValue = "schema" + $lvl;
      } else {
        $schemaValue = $schema;
      }
      if (!$isData) {
        out += " var schema" + $lvl + " = validate.schema" + $schemaPath + ";";
      }
      out += "var " + $valid + " = equal(" + $data + ", schema" + $lvl + "); if (!" + $valid + ") {   ";
      var $$outStack = $$outStack || [];
      $$outStack.push(out);
      out = "";
      if (it.createErrors !== false) {
        out += " { keyword: 'const' , dataPath: (dataPath || '') + " + it.errorPath + " , schemaPath: " + it.util.toQuotedString($errSchemaPath) + " , params: { allowedValue: schema" + $lvl + " } ";
        if (it.opts.messages !== false) {
          out += " , message: 'should be equal to constant' ";
        }
        if (it.opts.verbose) {
          out += " , schema: validate.schema" + $schemaPath + " , parentSchema: validate.schema" + it.schemaPath + " , data: " + $data + " ";
        }
        out += " } ";
      } else {
        out += " {} ";
      }
      var __err = out;
      out = $$outStack.pop();
      if (!it.compositeRule && $breakOnError) {
        if (it.async) {
          out += " throw new ValidationError([" + __err + "]); ";
        } else {
          out += " validate.errors = [" + __err + "]; return false; ";
        }
      } else {
        out += " var err = " + __err + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ";
      }
      out += " }";
      if ($breakOnError) {
        out += " else { ";
      }
      return out;
    }, "generate_const");
  }
});

// node_modules/ajv/lib/dotjs/contains.js
var require_contains = __commonJS({
  "node_modules/ajv/lib/dotjs/contains.js"(exports, module) {
    "use strict";
    module.exports = /* @__PURE__ */ __name(function generate_contains(it, $keyword, $ruleType) {
      var out = " ";
      var $lvl = it.level;
      var $dataLvl = it.dataLevel;
      var $schema = it.schema[$keyword];
      var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
      var $errSchemaPath = it.errSchemaPath + "/" + $keyword;
      var $breakOnError = !it.opts.allErrors;
      var $data = "data" + ($dataLvl || "");
      var $valid = "valid" + $lvl;
      var $errs = "errs__" + $lvl;
      var $it = it.util.copy(it);
      var $closingBraces = "";
      $it.level++;
      var $nextValid = "valid" + $it.level;
      var $idx = "i" + $lvl, $dataNxt = $it.dataLevel = it.dataLevel + 1, $nextData = "data" + $dataNxt, $currentBaseId = it.baseId, $nonEmptySchema = it.opts.strictKeywords ? typeof $schema == "object" && Object.keys($schema).length > 0 || $schema === false : it.util.schemaHasRules($schema, it.RULES.all);
      out += "var " + $errs + " = errors;var " + $valid + ";";
      if ($nonEmptySchema) {
        var $wasComposite = it.compositeRule;
        it.compositeRule = $it.compositeRule = true;
        $it.schema = $schema;
        $it.schemaPath = $schemaPath;
        $it.errSchemaPath = $errSchemaPath;
        out += " var " + $nextValid + " = false; for (var " + $idx + " = 0; " + $idx + " < " + $data + ".length; " + $idx + "++) { ";
        $it.errorPath = it.util.getPathExpr(it.errorPath, $idx, it.opts.jsonPointers, true);
        var $passData = $data + "[" + $idx + "]";
        $it.dataPathArr[$dataNxt] = $idx;
        var $code = it.validate($it);
        $it.baseId = $currentBaseId;
        if (it.util.varOccurences($code, $nextData) < 2) {
          out += " " + it.util.varReplace($code, $nextData, $passData) + " ";
        } else {
          out += " var " + $nextData + " = " + $passData + "; " + $code + " ";
        }
        out += " if (" + $nextValid + ") break; }  ";
        it.compositeRule = $it.compositeRule = $wasComposite;
        out += " " + $closingBraces + " if (!" + $nextValid + ") {";
      } else {
        out += " if (" + $data + ".length == 0) {";
      }
      var $$outStack = $$outStack || [];
      $$outStack.push(out);
      out = "";
      if (it.createErrors !== false) {
        out += " { keyword: 'contains' , dataPath: (dataPath || '') + " + it.errorPath + " , schemaPath: " + it.util.toQuotedString($errSchemaPath) + " , params: {} ";
        if (it.opts.messages !== false) {
          out += " , message: 'should contain a valid item' ";
        }
        if (it.opts.verbose) {
          out += " , schema: validate.schema" + $schemaPath + " , parentSchema: validate.schema" + it.schemaPath + " , data: " + $data + " ";
        }
        out += " } ";
      } else {
        out += " {} ";
      }
      var __err = out;
      out = $$outStack.pop();
      if (!it.compositeRule && $breakOnError) {
        if (it.async) {
          out += " throw new ValidationError([" + __err + "]); ";
        } else {
          out += " validate.errors = [" + __err + "]; return false; ";
        }
      } else {
        out += " var err = " + __err + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ";
      }
      out += " } else { ";
      if ($nonEmptySchema) {
        out += "  errors = " + $errs + "; if (vErrors !== null) { if (" + $errs + ") vErrors.length = " + $errs + "; else vErrors = null; } ";
      }
      if (it.opts.allErrors) {
        out += " } ";
      }
      return out;
    }, "generate_contains");
  }
});

// node_modules/ajv/lib/dotjs/dependencies.js
var require_dependencies = __commonJS({
  "node_modules/ajv/lib/dotjs/dependencies.js"(exports, module) {
    "use strict";
    module.exports = /* @__PURE__ */ __name(function generate_dependencies(it, $keyword, $ruleType) {
      var out = " ";
      var $lvl = it.level;
      var $dataLvl = it.dataLevel;
      var $schema = it.schema[$keyword];
      var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
      var $errSchemaPath = it.errSchemaPath + "/" + $keyword;
      var $breakOnError = !it.opts.allErrors;
      var $data = "data" + ($dataLvl || "");
      var $errs = "errs__" + $lvl;
      var $it = it.util.copy(it);
      var $closingBraces = "";
      $it.level++;
      var $nextValid = "valid" + $it.level;
      var $schemaDeps = {}, $propertyDeps = {}, $ownProperties = it.opts.ownProperties;
      for ($property in $schema) {
        if ($property == "__proto__")
          continue;
        var $sch = $schema[$property];
        var $deps = Array.isArray($sch) ? $propertyDeps : $schemaDeps;
        $deps[$property] = $sch;
      }
      out += "var " + $errs + " = errors;";
      var $currentErrorPath = it.errorPath;
      out += "var missing" + $lvl + ";";
      for (var $property in $propertyDeps) {
        $deps = $propertyDeps[$property];
        if ($deps.length) {
          out += " if ( " + $data + it.util.getProperty($property) + " !== undefined ";
          if ($ownProperties) {
            out += " && Object.prototype.hasOwnProperty.call(" + $data + ", '" + it.util.escapeQuotes($property) + "') ";
          }
          if ($breakOnError) {
            out += " && ( ";
            var arr1 = $deps;
            if (arr1) {
              var $propertyKey, $i = -1, l1 = arr1.length - 1;
              while ($i < l1) {
                $propertyKey = arr1[$i += 1];
                if ($i) {
                  out += " || ";
                }
                var $prop = it.util.getProperty($propertyKey), $useData = $data + $prop;
                out += " ( ( " + $useData + " === undefined ";
                if ($ownProperties) {
                  out += " || ! Object.prototype.hasOwnProperty.call(" + $data + ", '" + it.util.escapeQuotes($propertyKey) + "') ";
                }
                out += ") && (missing" + $lvl + " = " + it.util.toQuotedString(it.opts.jsonPointers ? $propertyKey : $prop) + ") ) ";
              }
            }
            out += ")) {  ";
            var $propertyPath = "missing" + $lvl, $missingProperty = "' + " + $propertyPath + " + '";
            if (it.opts._errorDataPathProperty) {
              it.errorPath = it.opts.jsonPointers ? it.util.getPathExpr($currentErrorPath, $propertyPath, true) : $currentErrorPath + " + " + $propertyPath;
            }
            var $$outStack = $$outStack || [];
            $$outStack.push(out);
            out = "";
            if (it.createErrors !== false) {
              out += " { keyword: 'dependencies' , dataPath: (dataPath || '') + " + it.errorPath + " , schemaPath: " + it.util.toQuotedString($errSchemaPath) + " , params: { property: '" + it.util.escapeQuotes($property) + "', missingProperty: '" + $missingProperty + "', depsCount: " + $deps.length + ", deps: '" + it.util.escapeQuotes($deps.length == 1 ? $deps[0] : $deps.join(", ")) + "' } ";
              if (it.opts.messages !== false) {
                out += " , message: 'should have ";
                if ($deps.length == 1) {
                  out += "property " + it.util.escapeQuotes($deps[0]);
                } else {
                  out += "properties " + it.util.escapeQuotes($deps.join(", "));
                }
                out += " when property " + it.util.escapeQuotes($property) + " is present' ";
              }
              if (it.opts.verbose) {
                out += " , schema: validate.schema" + $schemaPath + " , parentSchema: validate.schema" + it.schemaPath + " , data: " + $data + " ";
              }
              out += " } ";
            } else {
              out += " {} ";
            }
            var __err = out;
            out = $$outStack.pop();
            if (!it.compositeRule && $breakOnError) {
              if (it.async) {
                out += " throw new ValidationError([" + __err + "]); ";
              } else {
                out += " validate.errors = [" + __err + "]; return false; ";
              }
            } else {
              out += " var err = " + __err + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ";
            }
          } else {
            out += " ) { ";
            var arr2 = $deps;
            if (arr2) {
              var $propertyKey, i2 = -1, l2 = arr2.length - 1;
              while (i2 < l2) {
                $propertyKey = arr2[i2 += 1];
                var $prop = it.util.getProperty($propertyKey), $missingProperty = it.util.escapeQuotes($propertyKey), $useData = $data + $prop;
                if (it.opts._errorDataPathProperty) {
                  it.errorPath = it.util.getPath($currentErrorPath, $propertyKey, it.opts.jsonPointers);
                }
                out += " if ( " + $useData + " === undefined ";
                if ($ownProperties) {
                  out += " || ! Object.prototype.hasOwnProperty.call(" + $data + ", '" + it.util.escapeQuotes($propertyKey) + "') ";
                }
                out += ") {  var err =   ";
                if (it.createErrors !== false) {
                  out += " { keyword: 'dependencies' , dataPath: (dataPath || '') + " + it.errorPath + " , schemaPath: " + it.util.toQuotedString($errSchemaPath) + " , params: { property: '" + it.util.escapeQuotes($property) + "', missingProperty: '" + $missingProperty + "', depsCount: " + $deps.length + ", deps: '" + it.util.escapeQuotes($deps.length == 1 ? $deps[0] : $deps.join(", ")) + "' } ";
                  if (it.opts.messages !== false) {
                    out += " , message: 'should have ";
                    if ($deps.length == 1) {
                      out += "property " + it.util.escapeQuotes($deps[0]);
                    } else {
                      out += "properties " + it.util.escapeQuotes($deps.join(", "));
                    }
                    out += " when property " + it.util.escapeQuotes($property) + " is present' ";
                  }
                  if (it.opts.verbose) {
                    out += " , schema: validate.schema" + $schemaPath + " , parentSchema: validate.schema" + it.schemaPath + " , data: " + $data + " ";
                  }
                  out += " } ";
                } else {
                  out += " {} ";
                }
                out += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } ";
              }
            }
          }
          out += " }   ";
          if ($breakOnError) {
            $closingBraces += "}";
            out += " else { ";
          }
        }
      }
      it.errorPath = $currentErrorPath;
      var $currentBaseId = $it.baseId;
      for (var $property in $schemaDeps) {
        var $sch = $schemaDeps[$property];
        if (it.opts.strictKeywords ? typeof $sch == "object" && Object.keys($sch).length > 0 || $sch === false : it.util.schemaHasRules($sch, it.RULES.all)) {
          out += " " + $nextValid + " = true; if ( " + $data + it.util.getProperty($property) + " !== undefined ";
          if ($ownProperties) {
            out += " && Object.prototype.hasOwnProperty.call(" + $data + ", '" + it.util.escapeQuotes($property) + "') ";
          }
          out += ") { ";
          $it.schema = $sch;
          $it.schemaPath = $schemaPath + it.util.getProperty($property);
          $it.errSchemaPath = $errSchemaPath + "/" + it.util.escapeFragment($property);
          out += "  " + it.validate($it) + " ";
          $it.baseId = $currentBaseId;
          out += " }  ";
          if ($breakOnError) {
            out += " if (" + $nextValid + ") { ";
            $closingBraces += "}";
          }
        }
      }
      if ($breakOnError) {
        out += "   " + $closingBraces + " if (" + $errs + " == errors) {";
      }
      return out;
    }, "generate_dependencies");
  }
});

// node_modules/ajv/lib/dotjs/enum.js
var require_enum = __commonJS({
  "node_modules/ajv/lib/dotjs/enum.js"(exports, module) {
    "use strict";
    module.exports = /* @__PURE__ */ __name(function generate_enum(it, $keyword, $ruleType) {
      var out = " ";
      var $lvl = it.level;
      var $dataLvl = it.dataLevel;
      var $schema = it.schema[$keyword];
      var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
      var $errSchemaPath = it.errSchemaPath + "/" + $keyword;
      var $breakOnError = !it.opts.allErrors;
      var $data = "data" + ($dataLvl || "");
      var $valid = "valid" + $lvl;
      var $isData = it.opts.$data && $schema && $schema.$data, $schemaValue;
      if ($isData) {
        out += " var schema" + $lvl + " = " + it.util.getData($schema.$data, $dataLvl, it.dataPathArr) + "; ";
        $schemaValue = "schema" + $lvl;
      } else {
        $schemaValue = $schema;
      }
      var $i = "i" + $lvl, $vSchema = "schema" + $lvl;
      if (!$isData) {
        out += " var " + $vSchema + " = validate.schema" + $schemaPath + ";";
      }
      out += "var " + $valid + ";";
      if ($isData) {
        out += " if (schema" + $lvl + " === undefined) " + $valid + " = true; else if (!Array.isArray(schema" + $lvl + ")) " + $valid + " = false; else {";
      }
      out += "" + $valid + " = false;for (var " + $i + "=0; " + $i + "<" + $vSchema + ".length; " + $i + "++) if (equal(" + $data + ", " + $vSchema + "[" + $i + "])) { " + $valid + " = true; break; }";
      if ($isData) {
        out += "  }  ";
      }
      out += " if (!" + $valid + ") {   ";
      var $$outStack = $$outStack || [];
      $$outStack.push(out);
      out = "";
      if (it.createErrors !== false) {
        out += " { keyword: 'enum' , dataPath: (dataPath || '') + " + it.errorPath + " , schemaPath: " + it.util.toQuotedString($errSchemaPath) + " , params: { allowedValues: schema" + $lvl + " } ";
        if (it.opts.messages !== false) {
          out += " , message: 'should be equal to one of the allowed values' ";
        }
        if (it.opts.verbose) {
          out += " , schema: validate.schema" + $schemaPath + " , parentSchema: validate.schema" + it.schemaPath + " , data: " + $data + " ";
        }
        out += " } ";
      } else {
        out += " {} ";
      }
      var __err = out;
      out = $$outStack.pop();
      if (!it.compositeRule && $breakOnError) {
        if (it.async) {
          out += " throw new ValidationError([" + __err + "]); ";
        } else {
          out += " validate.errors = [" + __err + "]; return false; ";
        }
      } else {
        out += " var err = " + __err + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ";
      }
      out += " }";
      if ($breakOnError) {
        out += " else { ";
      }
      return out;
    }, "generate_enum");
  }
});

// node_modules/ajv/lib/dotjs/format.js
var require_format = __commonJS({
  "node_modules/ajv/lib/dotjs/format.js"(exports, module) {
    "use strict";
    module.exports = /* @__PURE__ */ __name(function generate_format(it, $keyword, $ruleType) {
      var out = " ";
      var $lvl = it.level;
      var $dataLvl = it.dataLevel;
      var $schema = it.schema[$keyword];
      var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
      var $errSchemaPath = it.errSchemaPath + "/" + $keyword;
      var $breakOnError = !it.opts.allErrors;
      var $data = "data" + ($dataLvl || "");
      if (it.opts.format === false) {
        if ($breakOnError) {
          out += " if (true) { ";
        }
        return out;
      }
      var $isData = it.opts.$data && $schema && $schema.$data, $schemaValue;
      if ($isData) {
        out += " var schema" + $lvl + " = " + it.util.getData($schema.$data, $dataLvl, it.dataPathArr) + "; ";
        $schemaValue = "schema" + $lvl;
      } else {
        $schemaValue = $schema;
      }
      var $unknownFormats = it.opts.unknownFormats, $allowUnknown = Array.isArray($unknownFormats);
      if ($isData) {
        var $format = "format" + $lvl, $isObject = "isObject" + $lvl, $formatType = "formatType" + $lvl;
        out += " var " + $format + " = formats[" + $schemaValue + "]; var " + $isObject + " = typeof " + $format + " == 'object' && !(" + $format + " instanceof RegExp) && " + $format + ".validate; var " + $formatType + " = " + $isObject + " && " + $format + ".type || 'string'; if (" + $isObject + ") { ";
        if (it.async) {
          out += " var async" + $lvl + " = " + $format + ".async; ";
        }
        out += " " + $format + " = " + $format + ".validate; } if (  ";
        if ($isData) {
          out += " (" + $schemaValue + " !== undefined && typeof " + $schemaValue + " != 'string') || ";
        }
        out += " (";
        if ($unknownFormats != "ignore") {
          out += " (" + $schemaValue + " && !" + $format + " ";
          if ($allowUnknown) {
            out += " && self._opts.unknownFormats.indexOf(" + $schemaValue + ") == -1 ";
          }
          out += ") || ";
        }
        out += " (" + $format + " && " + $formatType + " == '" + $ruleType + "' && !(typeof " + $format + " == 'function' ? ";
        if (it.async) {
          out += " (async" + $lvl + " ? await " + $format + "(" + $data + ") : " + $format + "(" + $data + ")) ";
        } else {
          out += " " + $format + "(" + $data + ") ";
        }
        out += " : " + $format + ".test(" + $data + "))))) {";
      } else {
        var $format = it.formats[$schema];
        if (!$format) {
          if ($unknownFormats == "ignore") {
            it.logger.warn('unknown format "' + $schema + '" ignored in schema at path "' + it.errSchemaPath + '"');
            if ($breakOnError) {
              out += " if (true) { ";
            }
            return out;
          } else if ($allowUnknown && $unknownFormats.indexOf($schema) >= 0) {
            if ($breakOnError) {
              out += " if (true) { ";
            }
            return out;
          } else {
            throw new Error('unknown format "' + $schema + '" is used in schema at path "' + it.errSchemaPath + '"');
          }
        }
        var $isObject = typeof $format == "object" && !($format instanceof RegExp) && $format.validate;
        var $formatType = $isObject && $format.type || "string";
        if ($isObject) {
          var $async = $format.async === true;
          $format = $format.validate;
        }
        if ($formatType != $ruleType) {
          if ($breakOnError) {
            out += " if (true) { ";
          }
          return out;
        }
        if ($async) {
          if (!it.async)
            throw new Error("async format in sync schema");
          var $formatRef = "formats" + it.util.getProperty($schema) + ".validate";
          out += " if (!(await " + $formatRef + "(" + $data + "))) { ";
        } else {
          out += " if (! ";
          var $formatRef = "formats" + it.util.getProperty($schema);
          if ($isObject)
            $formatRef += ".validate";
          if (typeof $format == "function") {
            out += " " + $formatRef + "(" + $data + ") ";
          } else {
            out += " " + $formatRef + ".test(" + $data + ") ";
          }
          out += ") { ";
        }
      }
      var $$outStack = $$outStack || [];
      $$outStack.push(out);
      out = "";
      if (it.createErrors !== false) {
        out += " { keyword: 'format' , dataPath: (dataPath || '') + " + it.errorPath + " , schemaPath: " + it.util.toQuotedString($errSchemaPath) + " , params: { format:  ";
        if ($isData) {
          out += "" + $schemaValue;
        } else {
          out += "" + it.util.toQuotedString($schema);
        }
        out += "  } ";
        if (it.opts.messages !== false) {
          out += ` , message: 'should match format "`;
          if ($isData) {
            out += "' + " + $schemaValue + " + '";
          } else {
            out += "" + it.util.escapeQuotes($schema);
          }
          out += `"' `;
        }
        if (it.opts.verbose) {
          out += " , schema:  ";
          if ($isData) {
            out += "validate.schema" + $schemaPath;
          } else {
            out += "" + it.util.toQuotedString($schema);
          }
          out += "         , parentSchema: validate.schema" + it.schemaPath + " , data: " + $data + " ";
        }
        out += " } ";
      } else {
        out += " {} ";
      }
      var __err = out;
      out = $$outStack.pop();
      if (!it.compositeRule && $breakOnError) {
        if (it.async) {
          out += " throw new ValidationError([" + __err + "]); ";
        } else {
          out += " validate.errors = [" + __err + "]; return false; ";
        }
      } else {
        out += " var err = " + __err + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ";
      }
      out += " } ";
      if ($breakOnError) {
        out += " else { ";
      }
      return out;
    }, "generate_format");
  }
});

// node_modules/ajv/lib/dotjs/if.js
var require_if = __commonJS({
  "node_modules/ajv/lib/dotjs/if.js"(exports, module) {
    "use strict";
    module.exports = /* @__PURE__ */ __name(function generate_if(it, $keyword, $ruleType) {
      var out = " ";
      var $lvl = it.level;
      var $dataLvl = it.dataLevel;
      var $schema = it.schema[$keyword];
      var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
      var $errSchemaPath = it.errSchemaPath + "/" + $keyword;
      var $breakOnError = !it.opts.allErrors;
      var $data = "data" + ($dataLvl || "");
      var $valid = "valid" + $lvl;
      var $errs = "errs__" + $lvl;
      var $it = it.util.copy(it);
      $it.level++;
      var $nextValid = "valid" + $it.level;
      var $thenSch = it.schema["then"], $elseSch = it.schema["else"], $thenPresent = $thenSch !== void 0 && (it.opts.strictKeywords ? typeof $thenSch == "object" && Object.keys($thenSch).length > 0 || $thenSch === false : it.util.schemaHasRules($thenSch, it.RULES.all)), $elsePresent = $elseSch !== void 0 && (it.opts.strictKeywords ? typeof $elseSch == "object" && Object.keys($elseSch).length > 0 || $elseSch === false : it.util.schemaHasRules($elseSch, it.RULES.all)), $currentBaseId = $it.baseId;
      if ($thenPresent || $elsePresent) {
        var $ifClause;
        $it.createErrors = false;
        $it.schema = $schema;
        $it.schemaPath = $schemaPath;
        $it.errSchemaPath = $errSchemaPath;
        out += " var " + $errs + " = errors; var " + $valid + " = true;  ";
        var $wasComposite = it.compositeRule;
        it.compositeRule = $it.compositeRule = true;
        out += "  " + it.validate($it) + " ";
        $it.baseId = $currentBaseId;
        $it.createErrors = true;
        out += "  errors = " + $errs + "; if (vErrors !== null) { if (" + $errs + ") vErrors.length = " + $errs + "; else vErrors = null; }  ";
        it.compositeRule = $it.compositeRule = $wasComposite;
        if ($thenPresent) {
          out += " if (" + $nextValid + ") {  ";
          $it.schema = it.schema["then"];
          $it.schemaPath = it.schemaPath + ".then";
          $it.errSchemaPath = it.errSchemaPath + "/then";
          out += "  " + it.validate($it) + " ";
          $it.baseId = $currentBaseId;
          out += " " + $valid + " = " + $nextValid + "; ";
          if ($thenPresent && $elsePresent) {
            $ifClause = "ifClause" + $lvl;
            out += " var " + $ifClause + " = 'then'; ";
          } else {
            $ifClause = "'then'";
          }
          out += " } ";
          if ($elsePresent) {
            out += " else { ";
          }
        } else {
          out += " if (!" + $nextValid + ") { ";
        }
        if ($elsePresent) {
          $it.schema = it.schema["else"];
          $it.schemaPath = it.schemaPath + ".else";
          $it.errSchemaPath = it.errSchemaPath + "/else";
          out += "  " + it.validate($it) + " ";
          $it.baseId = $currentBaseId;
          out += " " + $valid + " = " + $nextValid + "; ";
          if ($thenPresent && $elsePresent) {
            $ifClause = "ifClause" + $lvl;
            out += " var " + $ifClause + " = 'else'; ";
          } else {
            $ifClause = "'else'";
          }
          out += " } ";
        }
        out += " if (!" + $valid + ") {   var err =   ";
        if (it.createErrors !== false) {
          out += " { keyword: 'if' , dataPath: (dataPath || '') + " + it.errorPath + " , schemaPath: " + it.util.toQuotedString($errSchemaPath) + " , params: { failingKeyword: " + $ifClause + " } ";
          if (it.opts.messages !== false) {
            out += ` , message: 'should match "' + ` + $ifClause + ` + '" schema' `;
          }
          if (it.opts.verbose) {
            out += " , schema: validate.schema" + $schemaPath + " , parentSchema: validate.schema" + it.schemaPath + " , data: " + $data + " ";
          }
          out += " } ";
        } else {
          out += " {} ";
        }
        out += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ";
        if (!it.compositeRule && $breakOnError) {
          if (it.async) {
            out += " throw new ValidationError(vErrors); ";
          } else {
            out += " validate.errors = vErrors; return false; ";
          }
        }
        out += " }   ";
        if ($breakOnError) {
          out += " else { ";
        }
      } else {
        if ($breakOnError) {
          out += " if (true) { ";
        }
      }
      return out;
    }, "generate_if");
  }
});

// node_modules/ajv/lib/dotjs/items.js
var require_items = __commonJS({
  "node_modules/ajv/lib/dotjs/items.js"(exports, module) {
    "use strict";
    module.exports = /* @__PURE__ */ __name(function generate_items(it, $keyword, $ruleType) {
      var out = " ";
      var $lvl = it.level;
      var $dataLvl = it.dataLevel;
      var $schema = it.schema[$keyword];
      var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
      var $errSchemaPath = it.errSchemaPath + "/" + $keyword;
      var $breakOnError = !it.opts.allErrors;
      var $data = "data" + ($dataLvl || "");
      var $valid = "valid" + $lvl;
      var $errs = "errs__" + $lvl;
      var $it = it.util.copy(it);
      var $closingBraces = "";
      $it.level++;
      var $nextValid = "valid" + $it.level;
      var $idx = "i" + $lvl, $dataNxt = $it.dataLevel = it.dataLevel + 1, $nextData = "data" + $dataNxt, $currentBaseId = it.baseId;
      out += "var " + $errs + " = errors;var " + $valid + ";";
      if (Array.isArray($schema)) {
        var $additionalItems = it.schema.additionalItems;
        if ($additionalItems === false) {
          out += " " + $valid + " = " + $data + ".length <= " + $schema.length + "; ";
          var $currErrSchemaPath = $errSchemaPath;
          $errSchemaPath = it.errSchemaPath + "/additionalItems";
          out += "  if (!" + $valid + ") {   ";
          var $$outStack = $$outStack || [];
          $$outStack.push(out);
          out = "";
          if (it.createErrors !== false) {
            out += " { keyword: 'additionalItems' , dataPath: (dataPath || '') + " + it.errorPath + " , schemaPath: " + it.util.toQuotedString($errSchemaPath) + " , params: { limit: " + $schema.length + " } ";
            if (it.opts.messages !== false) {
              out += " , message: 'should NOT have more than " + $schema.length + " items' ";
            }
            if (it.opts.verbose) {
              out += " , schema: false , parentSchema: validate.schema" + it.schemaPath + " , data: " + $data + " ";
            }
            out += " } ";
          } else {
            out += " {} ";
          }
          var __err = out;
          out = $$outStack.pop();
          if (!it.compositeRule && $breakOnError) {
            if (it.async) {
              out += " throw new ValidationError([" + __err + "]); ";
            } else {
              out += " validate.errors = [" + __err + "]; return false; ";
            }
          } else {
            out += " var err = " + __err + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ";
          }
          out += " } ";
          $errSchemaPath = $currErrSchemaPath;
          if ($breakOnError) {
            $closingBraces += "}";
            out += " else { ";
          }
        }
        var arr1 = $schema;
        if (arr1) {
          var $sch, $i = -1, l1 = arr1.length - 1;
          while ($i < l1) {
            $sch = arr1[$i += 1];
            if (it.opts.strictKeywords ? typeof $sch == "object" && Object.keys($sch).length > 0 || $sch === false : it.util.schemaHasRules($sch, it.RULES.all)) {
              out += " " + $nextValid + " = true; if (" + $data + ".length > " + $i + ") { ";
              var $passData = $data + "[" + $i + "]";
              $it.schema = $sch;
              $it.schemaPath = $schemaPath + "[" + $i + "]";
              $it.errSchemaPath = $errSchemaPath + "/" + $i;
              $it.errorPath = it.util.getPathExpr(it.errorPath, $i, it.opts.jsonPointers, true);
              $it.dataPathArr[$dataNxt] = $i;
              var $code = it.validate($it);
              $it.baseId = $currentBaseId;
              if (it.util.varOccurences($code, $nextData) < 2) {
                out += " " + it.util.varReplace($code, $nextData, $passData) + " ";
              } else {
                out += " var " + $nextData + " = " + $passData + "; " + $code + " ";
              }
              out += " }  ";
              if ($breakOnError) {
                out += " if (" + $nextValid + ") { ";
                $closingBraces += "}";
              }
            }
          }
        }
        if (typeof $additionalItems == "object" && (it.opts.strictKeywords ? typeof $additionalItems == "object" && Object.keys($additionalItems).length > 0 || $additionalItems === false : it.util.schemaHasRules($additionalItems, it.RULES.all))) {
          $it.schema = $additionalItems;
          $it.schemaPath = it.schemaPath + ".additionalItems";
          $it.errSchemaPath = it.errSchemaPath + "/additionalItems";
          out += " " + $nextValid + " = true; if (" + $data + ".length > " + $schema.length + ") {  for (var " + $idx + " = " + $schema.length + "; " + $idx + " < " + $data + ".length; " + $idx + "++) { ";
          $it.errorPath = it.util.getPathExpr(it.errorPath, $idx, it.opts.jsonPointers, true);
          var $passData = $data + "[" + $idx + "]";
          $it.dataPathArr[$dataNxt] = $idx;
          var $code = it.validate($it);
          $it.baseId = $currentBaseId;
          if (it.util.varOccurences($code, $nextData) < 2) {
            out += " " + it.util.varReplace($code, $nextData, $passData) + " ";
          } else {
            out += " var " + $nextData + " = " + $passData + "; " + $code + " ";
          }
          if ($breakOnError) {
            out += " if (!" + $nextValid + ") break; ";
          }
          out += " } }  ";
          if ($breakOnError) {
            out += " if (" + $nextValid + ") { ";
            $closingBraces += "}";
          }
        }
      } else if (it.opts.strictKeywords ? typeof $schema == "object" && Object.keys($schema).length > 0 || $schema === false : it.util.schemaHasRules($schema, it.RULES.all)) {
        $it.schema = $schema;
        $it.schemaPath = $schemaPath;
        $it.errSchemaPath = $errSchemaPath;
        out += "  for (var " + $idx + " = 0; " + $idx + " < " + $data + ".length; " + $idx + "++) { ";
        $it.errorPath = it.util.getPathExpr(it.errorPath, $idx, it.opts.jsonPointers, true);
        var $passData = $data + "[" + $idx + "]";
        $it.dataPathArr[$dataNxt] = $idx;
        var $code = it.validate($it);
        $it.baseId = $currentBaseId;
        if (it.util.varOccurences($code, $nextData) < 2) {
          out += " " + it.util.varReplace($code, $nextData, $passData) + " ";
        } else {
          out += " var " + $nextData + " = " + $passData + "; " + $code + " ";
        }
        if ($breakOnError) {
          out += " if (!" + $nextValid + ") break; ";
        }
        out += " }";
      }
      if ($breakOnError) {
        out += " " + $closingBraces + " if (" + $errs + " == errors) {";
      }
      return out;
    }, "generate_items");
  }
});

// node_modules/ajv/lib/dotjs/_limit.js
var require_limit = __commonJS({
  "node_modules/ajv/lib/dotjs/_limit.js"(exports, module) {
    "use strict";
    module.exports = /* @__PURE__ */ __name(function generate__limit(it, $keyword, $ruleType) {
      var out = " ";
      var $lvl = it.level;
      var $dataLvl = it.dataLevel;
      var $schema = it.schema[$keyword];
      var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
      var $errSchemaPath = it.errSchemaPath + "/" + $keyword;
      var $breakOnError = !it.opts.allErrors;
      var $errorKeyword;
      var $data = "data" + ($dataLvl || "");
      var $isData = it.opts.$data && $schema && $schema.$data, $schemaValue;
      if ($isData) {
        out += " var schema" + $lvl + " = " + it.util.getData($schema.$data, $dataLvl, it.dataPathArr) + "; ";
        $schemaValue = "schema" + $lvl;
      } else {
        $schemaValue = $schema;
      }
      var $isMax = $keyword == "maximum", $exclusiveKeyword = $isMax ? "exclusiveMaximum" : "exclusiveMinimum", $schemaExcl = it.schema[$exclusiveKeyword], $isDataExcl = it.opts.$data && $schemaExcl && $schemaExcl.$data, $op = $isMax ? "<" : ">", $notOp = $isMax ? ">" : "<", $errorKeyword = void 0;
      if (!($isData || typeof $schema == "number" || $schema === void 0)) {
        throw new Error($keyword + " must be number");
      }
      if (!($isDataExcl || $schemaExcl === void 0 || typeof $schemaExcl == "number" || typeof $schemaExcl == "boolean")) {
        throw new Error($exclusiveKeyword + " must be number or boolean");
      }
      if ($isDataExcl) {
        var $schemaValueExcl = it.util.getData($schemaExcl.$data, $dataLvl, it.dataPathArr), $exclusive = "exclusive" + $lvl, $exclType = "exclType" + $lvl, $exclIsNumber = "exclIsNumber" + $lvl, $opExpr = "op" + $lvl, $opStr = "' + " + $opExpr + " + '";
        out += " var schemaExcl" + $lvl + " = " + $schemaValueExcl + "; ";
        $schemaValueExcl = "schemaExcl" + $lvl;
        out += " var " + $exclusive + "; var " + $exclType + " = typeof " + $schemaValueExcl + "; if (" + $exclType + " != 'boolean' && " + $exclType + " != 'undefined' && " + $exclType + " != 'number') { ";
        var $errorKeyword = $exclusiveKeyword;
        var $$outStack = $$outStack || [];
        $$outStack.push(out);
        out = "";
        if (it.createErrors !== false) {
          out += " { keyword: '" + ($errorKeyword || "_exclusiveLimit") + "' , dataPath: (dataPath || '') + " + it.errorPath + " , schemaPath: " + it.util.toQuotedString($errSchemaPath) + " , params: {} ";
          if (it.opts.messages !== false) {
            out += " , message: '" + $exclusiveKeyword + " should be boolean' ";
          }
          if (it.opts.verbose) {
            out += " , schema: validate.schema" + $schemaPath + " , parentSchema: validate.schema" + it.schemaPath + " , data: " + $data + " ";
          }
          out += " } ";
        } else {
          out += " {} ";
        }
        var __err = out;
        out = $$outStack.pop();
        if (!it.compositeRule && $breakOnError) {
          if (it.async) {
            out += " throw new ValidationError([" + __err + "]); ";
          } else {
            out += " validate.errors = [" + __err + "]; return false; ";
          }
        } else {
          out += " var err = " + __err + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ";
        }
        out += " } else if ( ";
        if ($isData) {
          out += " (" + $schemaValue + " !== undefined && typeof " + $schemaValue + " != 'number') || ";
        }
        out += " " + $exclType + " == 'number' ? ( (" + $exclusive + " = " + $schemaValue + " === undefined || " + $schemaValueExcl + " " + $op + "= " + $schemaValue + ") ? " + $data + " " + $notOp + "= " + $schemaValueExcl + " : " + $data + " " + $notOp + " " + $schemaValue + " ) : ( (" + $exclusive + " = " + $schemaValueExcl + " === true) ? " + $data + " " + $notOp + "= " + $schemaValue + " : " + $data + " " + $notOp + " " + $schemaValue + " ) || " + $data + " !== " + $data + ") { var op" + $lvl + " = " + $exclusive + " ? '" + $op + "' : '" + $op + "='; ";
        if ($schema === void 0) {
          $errorKeyword = $exclusiveKeyword;
          $errSchemaPath = it.errSchemaPath + "/" + $exclusiveKeyword;
          $schemaValue = $schemaValueExcl;
          $isData = $isDataExcl;
        }
      } else {
        var $exclIsNumber = typeof $schemaExcl == "number", $opStr = $op;
        if ($exclIsNumber && $isData) {
          var $opExpr = "'" + $opStr + "'";
          out += " if ( ";
          if ($isData) {
            out += " (" + $schemaValue + " !== undefined && typeof " + $schemaValue + " != 'number') || ";
          }
          out += " ( " + $schemaValue + " === undefined || " + $schemaExcl + " " + $op + "= " + $schemaValue + " ? " + $data + " " + $notOp + "= " + $schemaExcl + " : " + $data + " " + $notOp + " " + $schemaValue + " ) || " + $data + " !== " + $data + ") { ";
        } else {
          if ($exclIsNumber && $schema === void 0) {
            $exclusive = true;
            $errorKeyword = $exclusiveKeyword;
            $errSchemaPath = it.errSchemaPath + "/" + $exclusiveKeyword;
            $schemaValue = $schemaExcl;
            $notOp += "=";
          } else {
            if ($exclIsNumber)
              $schemaValue = Math[$isMax ? "min" : "max"]($schemaExcl, $schema);
            if ($schemaExcl === ($exclIsNumber ? $schemaValue : true)) {
              $exclusive = true;
              $errorKeyword = $exclusiveKeyword;
              $errSchemaPath = it.errSchemaPath + "/" + $exclusiveKeyword;
              $notOp += "=";
            } else {
              $exclusive = false;
              $opStr += "=";
            }
          }
          var $opExpr = "'" + $opStr + "'";
          out += " if ( ";
          if ($isData) {
            out += " (" + $schemaValue + " !== undefined && typeof " + $schemaValue + " != 'number') || ";
          }
          out += " " + $data + " " + $notOp + " " + $schemaValue + " || " + $data + " !== " + $data + ") { ";
        }
      }
      $errorKeyword = $errorKeyword || $keyword;
      var $$outStack = $$outStack || [];
      $$outStack.push(out);
      out = "";
      if (it.createErrors !== false) {
        out += " { keyword: '" + ($errorKeyword || "_limit") + "' , dataPath: (dataPath || '') + " + it.errorPath + " , schemaPath: " + it.util.toQuotedString($errSchemaPath) + " , params: { comparison: " + $opExpr + ", limit: " + $schemaValue + ", exclusive: " + $exclusive + " } ";
        if (it.opts.messages !== false) {
          out += " , message: 'should be " + $opStr + " ";
          if ($isData) {
            out += "' + " + $schemaValue;
          } else {
            out += "" + $schemaValue + "'";
          }
        }
        if (it.opts.verbose) {
          out += " , schema:  ";
          if ($isData) {
            out += "validate.schema" + $schemaPath;
          } else {
            out += "" + $schema;
          }
          out += "         , parentSchema: validate.schema" + it.schemaPath + " , data: " + $data + " ";
        }
        out += " } ";
      } else {
        out += " {} ";
      }
      var __err = out;
      out = $$outStack.pop();
      if (!it.compositeRule && $breakOnError) {
        if (it.async) {
          out += " throw new ValidationError([" + __err + "]); ";
        } else {
          out += " validate.errors = [" + __err + "]; return false; ";
        }
      } else {
        out += " var err = " + __err + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ";
      }
      out += " } ";
      if ($breakOnError) {
        out += " else { ";
      }
      return out;
    }, "generate__limit");
  }
});

// node_modules/ajv/lib/dotjs/_limitItems.js
var require_limitItems = __commonJS({
  "node_modules/ajv/lib/dotjs/_limitItems.js"(exports, module) {
    "use strict";
    module.exports = /* @__PURE__ */ __name(function generate__limitItems(it, $keyword, $ruleType) {
      var out = " ";
      var $lvl = it.level;
      var $dataLvl = it.dataLevel;
      var $schema = it.schema[$keyword];
      var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
      var $errSchemaPath = it.errSchemaPath + "/" + $keyword;
      var $breakOnError = !it.opts.allErrors;
      var $errorKeyword;
      var $data = "data" + ($dataLvl || "");
      var $isData = it.opts.$data && $schema && $schema.$data, $schemaValue;
      if ($isData) {
        out += " var schema" + $lvl + " = " + it.util.getData($schema.$data, $dataLvl, it.dataPathArr) + "; ";
        $schemaValue = "schema" + $lvl;
      } else {
        $schemaValue = $schema;
      }
      if (!($isData || typeof $schema == "number")) {
        throw new Error($keyword + " must be number");
      }
      var $op = $keyword == "maxItems" ? ">" : "<";
      out += "if ( ";
      if ($isData) {
        out += " (" + $schemaValue + " !== undefined && typeof " + $schemaValue + " != 'number') || ";
      }
      out += " " + $data + ".length " + $op + " " + $schemaValue + ") { ";
      var $errorKeyword = $keyword;
      var $$outStack = $$outStack || [];
      $$outStack.push(out);
      out = "";
      if (it.createErrors !== false) {
        out += " { keyword: '" + ($errorKeyword || "_limitItems") + "' , dataPath: (dataPath || '') + " + it.errorPath + " , schemaPath: " + it.util.toQuotedString($errSchemaPath) + " , params: { limit: " + $schemaValue + " } ";
        if (it.opts.messages !== false) {
          out += " , message: 'should NOT have ";
          if ($keyword == "maxItems") {
            out += "more";
          } else {
            out += "fewer";
          }
          out += " than ";
          if ($isData) {
            out += "' + " + $schemaValue + " + '";
          } else {
            out += "" + $schema;
          }
          out += " items' ";
        }
        if (it.opts.verbose) {
          out += " , schema:  ";
          if ($isData) {
            out += "validate.schema" + $schemaPath;
          } else {
            out += "" + $schema;
          }
          out += "         , parentSchema: validate.schema" + it.schemaPath + " , data: " + $data + " ";
        }
        out += " } ";
      } else {
        out += " {} ";
      }
      var __err = out;
      out = $$outStack.pop();
      if (!it.compositeRule && $breakOnError) {
        if (it.async) {
          out += " throw new ValidationError([" + __err + "]); ";
        } else {
          out += " validate.errors = [" + __err + "]; return false; ";
        }
      } else {
        out += " var err = " + __err + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ";
      }
      out += "} ";
      if ($breakOnError) {
        out += " else { ";
      }
      return out;
    }, "generate__limitItems");
  }
});

// node_modules/ajv/lib/dotjs/_limitLength.js
var require_limitLength = __commonJS({
  "node_modules/ajv/lib/dotjs/_limitLength.js"(exports, module) {
    "use strict";
    module.exports = /* @__PURE__ */ __name(function generate__limitLength(it, $keyword, $ruleType) {
      var out = " ";
      var $lvl = it.level;
      var $dataLvl = it.dataLevel;
      var $schema = it.schema[$keyword];
      var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
      var $errSchemaPath = it.errSchemaPath + "/" + $keyword;
      var $breakOnError = !it.opts.allErrors;
      var $errorKeyword;
      var $data = "data" + ($dataLvl || "");
      var $isData = it.opts.$data && $schema && $schema.$data, $schemaValue;
      if ($isData) {
        out += " var schema" + $lvl + " = " + it.util.getData($schema.$data, $dataLvl, it.dataPathArr) + "; ";
        $schemaValue = "schema" + $lvl;
      } else {
        $schemaValue = $schema;
      }
      if (!($isData || typeof $schema == "number")) {
        throw new Error($keyword + " must be number");
      }
      var $op = $keyword == "maxLength" ? ">" : "<";
      out += "if ( ";
      if ($isData) {
        out += " (" + $schemaValue + " !== undefined && typeof " + $schemaValue + " != 'number') || ";
      }
      if (it.opts.unicode === false) {
        out += " " + $data + ".length ";
      } else {
        out += " ucs2length(" + $data + ") ";
      }
      out += " " + $op + " " + $schemaValue + ") { ";
      var $errorKeyword = $keyword;
      var $$outStack = $$outStack || [];
      $$outStack.push(out);
      out = "";
      if (it.createErrors !== false) {
        out += " { keyword: '" + ($errorKeyword || "_limitLength") + "' , dataPath: (dataPath || '') + " + it.errorPath + " , schemaPath: " + it.util.toQuotedString($errSchemaPath) + " , params: { limit: " + $schemaValue + " } ";
        if (it.opts.messages !== false) {
          out += " , message: 'should NOT be ";
          if ($keyword == "maxLength") {
            out += "longer";
          } else {
            out += "shorter";
          }
          out += " than ";
          if ($isData) {
            out += "' + " + $schemaValue + " + '";
          } else {
            out += "" + $schema;
          }
          out += " characters' ";
        }
        if (it.opts.verbose) {
          out += " , schema:  ";
          if ($isData) {
            out += "validate.schema" + $schemaPath;
          } else {
            out += "" + $schema;
          }
          out += "         , parentSchema: validate.schema" + it.schemaPath + " , data: " + $data + " ";
        }
        out += " } ";
      } else {
        out += " {} ";
      }
      var __err = out;
      out = $$outStack.pop();
      if (!it.compositeRule && $breakOnError) {
        if (it.async) {
          out += " throw new ValidationError([" + __err + "]); ";
        } else {
          out += " validate.errors = [" + __err + "]; return false; ";
        }
      } else {
        out += " var err = " + __err + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ";
      }
      out += "} ";
      if ($breakOnError) {
        out += " else { ";
      }
      return out;
    }, "generate__limitLength");
  }
});

// node_modules/ajv/lib/dotjs/_limitProperties.js
var require_limitProperties = __commonJS({
  "node_modules/ajv/lib/dotjs/_limitProperties.js"(exports, module) {
    "use strict";
    module.exports = /* @__PURE__ */ __name(function generate__limitProperties(it, $keyword, $ruleType) {
      var out = " ";
      var $lvl = it.level;
      var $dataLvl = it.dataLevel;
      var $schema = it.schema[$keyword];
      var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
      var $errSchemaPath = it.errSchemaPath + "/" + $keyword;
      var $breakOnError = !it.opts.allErrors;
      var $errorKeyword;
      var $data = "data" + ($dataLvl || "");
      var $isData = it.opts.$data && $schema && $schema.$data, $schemaValue;
      if ($isData) {
        out += " var schema" + $lvl + " = " + it.util.getData($schema.$data, $dataLvl, it.dataPathArr) + "; ";
        $schemaValue = "schema" + $lvl;
      } else {
        $schemaValue = $schema;
      }
      if (!($isData || typeof $schema == "number")) {
        throw new Error($keyword + " must be number");
      }
      var $op = $keyword == "maxProperties" ? ">" : "<";
      out += "if ( ";
      if ($isData) {
        out += " (" + $schemaValue + " !== undefined && typeof " + $schemaValue + " != 'number') || ";
      }
      out += " Object.keys(" + $data + ").length " + $op + " " + $schemaValue + ") { ";
      var $errorKeyword = $keyword;
      var $$outStack = $$outStack || [];
      $$outStack.push(out);
      out = "";
      if (it.createErrors !== false) {
        out += " { keyword: '" + ($errorKeyword || "_limitProperties") + "' , dataPath: (dataPath || '') + " + it.errorPath + " , schemaPath: " + it.util.toQuotedString($errSchemaPath) + " , params: { limit: " + $schemaValue + " } ";
        if (it.opts.messages !== false) {
          out += " , message: 'should NOT have ";
          if ($keyword == "maxProperties") {
            out += "more";
          } else {
            out += "fewer";
          }
          out += " than ";
          if ($isData) {
            out += "' + " + $schemaValue + " + '";
          } else {
            out += "" + $schema;
          }
          out += " properties' ";
        }
        if (it.opts.verbose) {
          out += " , schema:  ";
          if ($isData) {
            out += "validate.schema" + $schemaPath;
          } else {
            out += "" + $schema;
          }
          out += "         , parentSchema: validate.schema" + it.schemaPath + " , data: " + $data + " ";
        }
        out += " } ";
      } else {
        out += " {} ";
      }
      var __err = out;
      out = $$outStack.pop();
      if (!it.compositeRule && $breakOnError) {
        if (it.async) {
          out += " throw new ValidationError([" + __err + "]); ";
        } else {
          out += " validate.errors = [" + __err + "]; return false; ";
        }
      } else {
        out += " var err = " + __err + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ";
      }
      out += "} ";
      if ($breakOnError) {
        out += " else { ";
      }
      return out;
    }, "generate__limitProperties");
  }
});

// node_modules/ajv/lib/dotjs/multipleOf.js
var require_multipleOf = __commonJS({
  "node_modules/ajv/lib/dotjs/multipleOf.js"(exports, module) {
    "use strict";
    module.exports = /* @__PURE__ */ __name(function generate_multipleOf(it, $keyword, $ruleType) {
      var out = " ";
      var $lvl = it.level;
      var $dataLvl = it.dataLevel;
      var $schema = it.schema[$keyword];
      var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
      var $errSchemaPath = it.errSchemaPath + "/" + $keyword;
      var $breakOnError = !it.opts.allErrors;
      var $data = "data" + ($dataLvl || "");
      var $isData = it.opts.$data && $schema && $schema.$data, $schemaValue;
      if ($isData) {
        out += " var schema" + $lvl + " = " + it.util.getData($schema.$data, $dataLvl, it.dataPathArr) + "; ";
        $schemaValue = "schema" + $lvl;
      } else {
        $schemaValue = $schema;
      }
      if (!($isData || typeof $schema == "number")) {
        throw new Error($keyword + " must be number");
      }
      out += "var division" + $lvl + ";if (";
      if ($isData) {
        out += " " + $schemaValue + " !== undefined && ( typeof " + $schemaValue + " != 'number' || ";
      }
      out += " (division" + $lvl + " = " + $data + " / " + $schemaValue + ", ";
      if (it.opts.multipleOfPrecision) {
        out += " Math.abs(Math.round(division" + $lvl + ") - division" + $lvl + ") > 1e-" + it.opts.multipleOfPrecision + " ";
      } else {
        out += " division" + $lvl + " !== parseInt(division" + $lvl + ") ";
      }
      out += " ) ";
      if ($isData) {
        out += "  )  ";
      }
      out += " ) {   ";
      var $$outStack = $$outStack || [];
      $$outStack.push(out);
      out = "";
      if (it.createErrors !== false) {
        out += " { keyword: 'multipleOf' , dataPath: (dataPath || '') + " + it.errorPath + " , schemaPath: " + it.util.toQuotedString($errSchemaPath) + " , params: { multipleOf: " + $schemaValue + " } ";
        if (it.opts.messages !== false) {
          out += " , message: 'should be multiple of ";
          if ($isData) {
            out += "' + " + $schemaValue;
          } else {
            out += "" + $schemaValue + "'";
          }
        }
        if (it.opts.verbose) {
          out += " , schema:  ";
          if ($isData) {
            out += "validate.schema" + $schemaPath;
          } else {
            out += "" + $schema;
          }
          out += "         , parentSchema: validate.schema" + it.schemaPath + " , data: " + $data + " ";
        }
        out += " } ";
      } else {
        out += " {} ";
      }
      var __err = out;
      out = $$outStack.pop();
      if (!it.compositeRule && $breakOnError) {
        if (it.async) {
          out += " throw new ValidationError([" + __err + "]); ";
        } else {
          out += " validate.errors = [" + __err + "]; return false; ";
        }
      } else {
        out += " var err = " + __err + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ";
      }
      out += "} ";
      if ($breakOnError) {
        out += " else { ";
      }
      return out;
    }, "generate_multipleOf");
  }
});

// node_modules/ajv/lib/dotjs/not.js
var require_not = __commonJS({
  "node_modules/ajv/lib/dotjs/not.js"(exports, module) {
    "use strict";
    module.exports = /* @__PURE__ */ __name(function generate_not(it, $keyword, $ruleType) {
      var out = " ";
      var $lvl = it.level;
      var $dataLvl = it.dataLevel;
      var $schema = it.schema[$keyword];
      var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
      var $errSchemaPath = it.errSchemaPath + "/" + $keyword;
      var $breakOnError = !it.opts.allErrors;
      var $data = "data" + ($dataLvl || "");
      var $errs = "errs__" + $lvl;
      var $it = it.util.copy(it);
      $it.level++;
      var $nextValid = "valid" + $it.level;
      if (it.opts.strictKeywords ? typeof $schema == "object" && Object.keys($schema).length > 0 || $schema === false : it.util.schemaHasRules($schema, it.RULES.all)) {
        $it.schema = $schema;
        $it.schemaPath = $schemaPath;
        $it.errSchemaPath = $errSchemaPath;
        out += " var " + $errs + " = errors;  ";
        var $wasComposite = it.compositeRule;
        it.compositeRule = $it.compositeRule = true;
        $it.createErrors = false;
        var $allErrorsOption;
        if ($it.opts.allErrors) {
          $allErrorsOption = $it.opts.allErrors;
          $it.opts.allErrors = false;
        }
        out += " " + it.validate($it) + " ";
        $it.createErrors = true;
        if ($allErrorsOption)
          $it.opts.allErrors = $allErrorsOption;
        it.compositeRule = $it.compositeRule = $wasComposite;
        out += " if (" + $nextValid + ") {   ";
        var $$outStack = $$outStack || [];
        $$outStack.push(out);
        out = "";
        if (it.createErrors !== false) {
          out += " { keyword: 'not' , dataPath: (dataPath || '') + " + it.errorPath + " , schemaPath: " + it.util.toQuotedString($errSchemaPath) + " , params: {} ";
          if (it.opts.messages !== false) {
            out += " , message: 'should NOT be valid' ";
          }
          if (it.opts.verbose) {
            out += " , schema: validate.schema" + $schemaPath + " , parentSchema: validate.schema" + it.schemaPath + " , data: " + $data + " ";
          }
          out += " } ";
        } else {
          out += " {} ";
        }
        var __err = out;
        out = $$outStack.pop();
        if (!it.compositeRule && $breakOnError) {
          if (it.async) {
            out += " throw new ValidationError([" + __err + "]); ";
          } else {
            out += " validate.errors = [" + __err + "]; return false; ";
          }
        } else {
          out += " var err = " + __err + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ";
        }
        out += " } else {  errors = " + $errs + "; if (vErrors !== null) { if (" + $errs + ") vErrors.length = " + $errs + "; else vErrors = null; } ";
        if (it.opts.allErrors) {
          out += " } ";
        }
      } else {
        out += "  var err =   ";
        if (it.createErrors !== false) {
          out += " { keyword: 'not' , dataPath: (dataPath || '') + " + it.errorPath + " , schemaPath: " + it.util.toQuotedString($errSchemaPath) + " , params: {} ";
          if (it.opts.messages !== false) {
            out += " , message: 'should NOT be valid' ";
          }
          if (it.opts.verbose) {
            out += " , schema: validate.schema" + $schemaPath + " , parentSchema: validate.schema" + it.schemaPath + " , data: " + $data + " ";
          }
          out += " } ";
        } else {
          out += " {} ";
        }
        out += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ";
        if ($breakOnError) {
          out += " if (false) { ";
        }
      }
      return out;
    }, "generate_not");
  }
});

// node_modules/ajv/lib/dotjs/oneOf.js
var require_oneOf = __commonJS({
  "node_modules/ajv/lib/dotjs/oneOf.js"(exports, module) {
    "use strict";
    module.exports = /* @__PURE__ */ __name(function generate_oneOf(it, $keyword, $ruleType) {
      var out = " ";
      var $lvl = it.level;
      var $dataLvl = it.dataLevel;
      var $schema = it.schema[$keyword];
      var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
      var $errSchemaPath = it.errSchemaPath + "/" + $keyword;
      var $breakOnError = !it.opts.allErrors;
      var $data = "data" + ($dataLvl || "");
      var $valid = "valid" + $lvl;
      var $errs = "errs__" + $lvl;
      var $it = it.util.copy(it);
      var $closingBraces = "";
      $it.level++;
      var $nextValid = "valid" + $it.level;
      var $currentBaseId = $it.baseId, $prevValid = "prevValid" + $lvl, $passingSchemas = "passingSchemas" + $lvl;
      out += "var " + $errs + " = errors , " + $prevValid + " = false , " + $valid + " = false , " + $passingSchemas + " = null; ";
      var $wasComposite = it.compositeRule;
      it.compositeRule = $it.compositeRule = true;
      var arr1 = $schema;
      if (arr1) {
        var $sch, $i = -1, l1 = arr1.length - 1;
        while ($i < l1) {
          $sch = arr1[$i += 1];
          if (it.opts.strictKeywords ? typeof $sch == "object" && Object.keys($sch).length > 0 || $sch === false : it.util.schemaHasRules($sch, it.RULES.all)) {
            $it.schema = $sch;
            $it.schemaPath = $schemaPath + "[" + $i + "]";
            $it.errSchemaPath = $errSchemaPath + "/" + $i;
            out += "  " + it.validate($it) + " ";
            $it.baseId = $currentBaseId;
          } else {
            out += " var " + $nextValid + " = true; ";
          }
          if ($i) {
            out += " if (" + $nextValid + " && " + $prevValid + ") { " + $valid + " = false; " + $passingSchemas + " = [" + $passingSchemas + ", " + $i + "]; } else { ";
            $closingBraces += "}";
          }
          out += " if (" + $nextValid + ") { " + $valid + " = " + $prevValid + " = true; " + $passingSchemas + " = " + $i + "; }";
        }
      }
      it.compositeRule = $it.compositeRule = $wasComposite;
      out += "" + $closingBraces + "if (!" + $valid + ") {   var err =   ";
      if (it.createErrors !== false) {
        out += " { keyword: 'oneOf' , dataPath: (dataPath || '') + " + it.errorPath + " , schemaPath: " + it.util.toQuotedString($errSchemaPath) + " , params: { passingSchemas: " + $passingSchemas + " } ";
        if (it.opts.messages !== false) {
          out += " , message: 'should match exactly one schema in oneOf' ";
        }
        if (it.opts.verbose) {
          out += " , schema: validate.schema" + $schemaPath + " , parentSchema: validate.schema" + it.schemaPath + " , data: " + $data + " ";
        }
        out += " } ";
      } else {
        out += " {} ";
      }
      out += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ";
      if (!it.compositeRule && $breakOnError) {
        if (it.async) {
          out += " throw new ValidationError(vErrors); ";
        } else {
          out += " validate.errors = vErrors; return false; ";
        }
      }
      out += "} else {  errors = " + $errs + "; if (vErrors !== null) { if (" + $errs + ") vErrors.length = " + $errs + "; else vErrors = null; }";
      if (it.opts.allErrors) {
        out += " } ";
      }
      return out;
    }, "generate_oneOf");
  }
});

// node_modules/ajv/lib/dotjs/pattern.js
var require_pattern = __commonJS({
  "node_modules/ajv/lib/dotjs/pattern.js"(exports, module) {
    "use strict";
    module.exports = /* @__PURE__ */ __name(function generate_pattern(it, $keyword, $ruleType) {
      var out = " ";
      var $lvl = it.level;
      var $dataLvl = it.dataLevel;
      var $schema = it.schema[$keyword];
      var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
      var $errSchemaPath = it.errSchemaPath + "/" + $keyword;
      var $breakOnError = !it.opts.allErrors;
      var $data = "data" + ($dataLvl || "");
      var $isData = it.opts.$data && $schema && $schema.$data, $schemaValue;
      if ($isData) {
        out += " var schema" + $lvl + " = " + it.util.getData($schema.$data, $dataLvl, it.dataPathArr) + "; ";
        $schemaValue = "schema" + $lvl;
      } else {
        $schemaValue = $schema;
      }
      var $regexp = $isData ? "(new RegExp(" + $schemaValue + "))" : it.usePattern($schema);
      out += "if ( ";
      if ($isData) {
        out += " (" + $schemaValue + " !== undefined && typeof " + $schemaValue + " != 'string') || ";
      }
      out += " !" + $regexp + ".test(" + $data + ") ) {   ";
      var $$outStack = $$outStack || [];
      $$outStack.push(out);
      out = "";
      if (it.createErrors !== false) {
        out += " { keyword: 'pattern' , dataPath: (dataPath || '') + " + it.errorPath + " , schemaPath: " + it.util.toQuotedString($errSchemaPath) + " , params: { pattern:  ";
        if ($isData) {
          out += "" + $schemaValue;
        } else {
          out += "" + it.util.toQuotedString($schema);
        }
        out += "  } ";
        if (it.opts.messages !== false) {
          out += ` , message: 'should match pattern "`;
          if ($isData) {
            out += "' + " + $schemaValue + " + '";
          } else {
            out += "" + it.util.escapeQuotes($schema);
          }
          out += `"' `;
        }
        if (it.opts.verbose) {
          out += " , schema:  ";
          if ($isData) {
            out += "validate.schema" + $schemaPath;
          } else {
            out += "" + it.util.toQuotedString($schema);
          }
          out += "         , parentSchema: validate.schema" + it.schemaPath + " , data: " + $data + " ";
        }
        out += " } ";
      } else {
        out += " {} ";
      }
      var __err = out;
      out = $$outStack.pop();
      if (!it.compositeRule && $breakOnError) {
        if (it.async) {
          out += " throw new ValidationError([" + __err + "]); ";
        } else {
          out += " validate.errors = [" + __err + "]; return false; ";
        }
      } else {
        out += " var err = " + __err + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ";
      }
      out += "} ";
      if ($breakOnError) {
        out += " else { ";
      }
      return out;
    }, "generate_pattern");
  }
});

// node_modules/ajv/lib/dotjs/properties.js
var require_properties = __commonJS({
  "node_modules/ajv/lib/dotjs/properties.js"(exports, module) {
    "use strict";
    module.exports = /* @__PURE__ */ __name(function generate_properties(it, $keyword, $ruleType) {
      var out = " ";
      var $lvl = it.level;
      var $dataLvl = it.dataLevel;
      var $schema = it.schema[$keyword];
      var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
      var $errSchemaPath = it.errSchemaPath + "/" + $keyword;
      var $breakOnError = !it.opts.allErrors;
      var $data = "data" + ($dataLvl || "");
      var $errs = "errs__" + $lvl;
      var $it = it.util.copy(it);
      var $closingBraces = "";
      $it.level++;
      var $nextValid = "valid" + $it.level;
      var $key = "key" + $lvl, $idx = "idx" + $lvl, $dataNxt = $it.dataLevel = it.dataLevel + 1, $nextData = "data" + $dataNxt, $dataProperties = "dataProperties" + $lvl;
      var $schemaKeys = Object.keys($schema || {}).filter(notProto), $pProperties = it.schema.patternProperties || {}, $pPropertyKeys = Object.keys($pProperties).filter(notProto), $aProperties = it.schema.additionalProperties, $someProperties = $schemaKeys.length || $pPropertyKeys.length, $noAdditional = $aProperties === false, $additionalIsSchema = typeof $aProperties == "object" && Object.keys($aProperties).length, $removeAdditional = it.opts.removeAdditional, $checkAdditional = $noAdditional || $additionalIsSchema || $removeAdditional, $ownProperties = it.opts.ownProperties, $currentBaseId = it.baseId;
      var $required = it.schema.required;
      if ($required && !(it.opts.$data && $required.$data) && $required.length < it.opts.loopRequired) {
        var $requiredHash = it.util.toHash($required);
      }
      function notProto(p) {
        return p !== "__proto__";
      }
      __name(notProto, "notProto");
      out += "var " + $errs + " = errors;var " + $nextValid + " = true;";
      if ($ownProperties) {
        out += " var " + $dataProperties + " = undefined;";
      }
      if ($checkAdditional) {
        if ($ownProperties) {
          out += " " + $dataProperties + " = " + $dataProperties + " || Object.keys(" + $data + "); for (var " + $idx + "=0; " + $idx + "<" + $dataProperties + ".length; " + $idx + "++) { var " + $key + " = " + $dataProperties + "[" + $idx + "]; ";
        } else {
          out += " for (var " + $key + " in " + $data + ") { ";
        }
        if ($someProperties) {
          out += " var isAdditional" + $lvl + " = !(false ";
          if ($schemaKeys.length) {
            if ($schemaKeys.length > 8) {
              out += " || validate.schema" + $schemaPath + ".hasOwnProperty(" + $key + ") ";
            } else {
              var arr1 = $schemaKeys;
              if (arr1) {
                var $propertyKey, i1 = -1, l1 = arr1.length - 1;
                while (i1 < l1) {
                  $propertyKey = arr1[i1 += 1];
                  out += " || " + $key + " == " + it.util.toQuotedString($propertyKey) + " ";
                }
              }
            }
          }
          if ($pPropertyKeys.length) {
            var arr2 = $pPropertyKeys;
            if (arr2) {
              var $pProperty, $i = -1, l2 = arr2.length - 1;
              while ($i < l2) {
                $pProperty = arr2[$i += 1];
                out += " || " + it.usePattern($pProperty) + ".test(" + $key + ") ";
              }
            }
          }
          out += " ); if (isAdditional" + $lvl + ") { ";
        }
        if ($removeAdditional == "all") {
          out += " delete " + $data + "[" + $key + "]; ";
        } else {
          var $currentErrorPath = it.errorPath;
          var $additionalProperty = "' + " + $key + " + '";
          if (it.opts._errorDataPathProperty) {
            it.errorPath = it.util.getPathExpr(it.errorPath, $key, it.opts.jsonPointers);
          }
          if ($noAdditional) {
            if ($removeAdditional) {
              out += " delete " + $data + "[" + $key + "]; ";
            } else {
              out += " " + $nextValid + " = false; ";
              var $currErrSchemaPath = $errSchemaPath;
              $errSchemaPath = it.errSchemaPath + "/additionalProperties";
              var $$outStack = $$outStack || [];
              $$outStack.push(out);
              out = "";
              if (it.createErrors !== false) {
                out += " { keyword: 'additionalProperties' , dataPath: (dataPath || '') + " + it.errorPath + " , schemaPath: " + it.util.toQuotedString($errSchemaPath) + " , params: { additionalProperty: '" + $additionalProperty + "' } ";
                if (it.opts.messages !== false) {
                  out += " , message: '";
                  if (it.opts._errorDataPathProperty) {
                    out += "is an invalid additional property";
                  } else {
                    out += "should NOT have additional properties";
                  }
                  out += "' ";
                }
                if (it.opts.verbose) {
                  out += " , schema: false , parentSchema: validate.schema" + it.schemaPath + " , data: " + $data + " ";
                }
                out += " } ";
              } else {
                out += " {} ";
              }
              var __err = out;
              out = $$outStack.pop();
              if (!it.compositeRule && $breakOnError) {
                if (it.async) {
                  out += " throw new ValidationError([" + __err + "]); ";
                } else {
                  out += " validate.errors = [" + __err + "]; return false; ";
                }
              } else {
                out += " var err = " + __err + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ";
              }
              $errSchemaPath = $currErrSchemaPath;
              if ($breakOnError) {
                out += " break; ";
              }
            }
          } else if ($additionalIsSchema) {
            if ($removeAdditional == "failing") {
              out += " var " + $errs + " = errors;  ";
              var $wasComposite = it.compositeRule;
              it.compositeRule = $it.compositeRule = true;
              $it.schema = $aProperties;
              $it.schemaPath = it.schemaPath + ".additionalProperties";
              $it.errSchemaPath = it.errSchemaPath + "/additionalProperties";
              $it.errorPath = it.opts._errorDataPathProperty ? it.errorPath : it.util.getPathExpr(it.errorPath, $key, it.opts.jsonPointers);
              var $passData = $data + "[" + $key + "]";
              $it.dataPathArr[$dataNxt] = $key;
              var $code = it.validate($it);
              $it.baseId = $currentBaseId;
              if (it.util.varOccurences($code, $nextData) < 2) {
                out += " " + it.util.varReplace($code, $nextData, $passData) + " ";
              } else {
                out += " var " + $nextData + " = " + $passData + "; " + $code + " ";
              }
              out += " if (!" + $nextValid + ") { errors = " + $errs + "; if (validate.errors !== null) { if (errors) validate.errors.length = errors; else validate.errors = null; } delete " + $data + "[" + $key + "]; }  ";
              it.compositeRule = $it.compositeRule = $wasComposite;
            } else {
              $it.schema = $aProperties;
              $it.schemaPath = it.schemaPath + ".additionalProperties";
              $it.errSchemaPath = it.errSchemaPath + "/additionalProperties";
              $it.errorPath = it.opts._errorDataPathProperty ? it.errorPath : it.util.getPathExpr(it.errorPath, $key, it.opts.jsonPointers);
              var $passData = $data + "[" + $key + "]";
              $it.dataPathArr[$dataNxt] = $key;
              var $code = it.validate($it);
              $it.baseId = $currentBaseId;
              if (it.util.varOccurences($code, $nextData) < 2) {
                out += " " + it.util.varReplace($code, $nextData, $passData) + " ";
              } else {
                out += " var " + $nextData + " = " + $passData + "; " + $code + " ";
              }
              if ($breakOnError) {
                out += " if (!" + $nextValid + ") break; ";
              }
            }
          }
          it.errorPath = $currentErrorPath;
        }
        if ($someProperties) {
          out += " } ";
        }
        out += " }  ";
        if ($breakOnError) {
          out += " if (" + $nextValid + ") { ";
          $closingBraces += "}";
        }
      }
      var $useDefaults = it.opts.useDefaults && !it.compositeRule;
      if ($schemaKeys.length) {
        var arr3 = $schemaKeys;
        if (arr3) {
          var $propertyKey, i3 = -1, l3 = arr3.length - 1;
          while (i3 < l3) {
            $propertyKey = arr3[i3 += 1];
            var $sch = $schema[$propertyKey];
            if (it.opts.strictKeywords ? typeof $sch == "object" && Object.keys($sch).length > 0 || $sch === false : it.util.schemaHasRules($sch, it.RULES.all)) {
              var $prop = it.util.getProperty($propertyKey), $passData = $data + $prop, $hasDefault = $useDefaults && $sch.default !== void 0;
              $it.schema = $sch;
              $it.schemaPath = $schemaPath + $prop;
              $it.errSchemaPath = $errSchemaPath + "/" + it.util.escapeFragment($propertyKey);
              $it.errorPath = it.util.getPath(it.errorPath, $propertyKey, it.opts.jsonPointers);
              $it.dataPathArr[$dataNxt] = it.util.toQuotedString($propertyKey);
              var $code = it.validate($it);
              $it.baseId = $currentBaseId;
              if (it.util.varOccurences($code, $nextData) < 2) {
                $code = it.util.varReplace($code, $nextData, $passData);
                var $useData = $passData;
              } else {
                var $useData = $nextData;
                out += " var " + $nextData + " = " + $passData + "; ";
              }
              if ($hasDefault) {
                out += " " + $code + " ";
              } else {
                if ($requiredHash && $requiredHash[$propertyKey]) {
                  out += " if ( " + $useData + " === undefined ";
                  if ($ownProperties) {
                    out += " || ! Object.prototype.hasOwnProperty.call(" + $data + ", '" + it.util.escapeQuotes($propertyKey) + "') ";
                  }
                  out += ") { " + $nextValid + " = false; ";
                  var $currentErrorPath = it.errorPath, $currErrSchemaPath = $errSchemaPath, $missingProperty = it.util.escapeQuotes($propertyKey);
                  if (it.opts._errorDataPathProperty) {
                    it.errorPath = it.util.getPath($currentErrorPath, $propertyKey, it.opts.jsonPointers);
                  }
                  $errSchemaPath = it.errSchemaPath + "/required";
                  var $$outStack = $$outStack || [];
                  $$outStack.push(out);
                  out = "";
                  if (it.createErrors !== false) {
                    out += " { keyword: 'required' , dataPath: (dataPath || '') + " + it.errorPath + " , schemaPath: " + it.util.toQuotedString($errSchemaPath) + " , params: { missingProperty: '" + $missingProperty + "' } ";
                    if (it.opts.messages !== false) {
                      out += " , message: '";
                      if (it.opts._errorDataPathProperty) {
                        out += "is a required property";
                      } else {
                        out += "should have required property \\'" + $missingProperty + "\\'";
                      }
                      out += "' ";
                    }
                    if (it.opts.verbose) {
                      out += " , schema: validate.schema" + $schemaPath + " , parentSchema: validate.schema" + it.schemaPath + " , data: " + $data + " ";
                    }
                    out += " } ";
                  } else {
                    out += " {} ";
                  }
                  var __err = out;
                  out = $$outStack.pop();
                  if (!it.compositeRule && $breakOnError) {
                    if (it.async) {
                      out += " throw new ValidationError([" + __err + "]); ";
                    } else {
                      out += " validate.errors = [" + __err + "]; return false; ";
                    }
                  } else {
                    out += " var err = " + __err + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ";
                  }
                  $errSchemaPath = $currErrSchemaPath;
                  it.errorPath = $currentErrorPath;
                  out += " } else { ";
                } else {
                  if ($breakOnError) {
                    out += " if ( " + $useData + " === undefined ";
                    if ($ownProperties) {
                      out += " || ! Object.prototype.hasOwnProperty.call(" + $data + ", '" + it.util.escapeQuotes($propertyKey) + "') ";
                    }
                    out += ") { " + $nextValid + " = true; } else { ";
                  } else {
                    out += " if (" + $useData + " !== undefined ";
                    if ($ownProperties) {
                      out += " &&   Object.prototype.hasOwnProperty.call(" + $data + ", '" + it.util.escapeQuotes($propertyKey) + "') ";
                    }
                    out += " ) { ";
                  }
                }
                out += " " + $code + " } ";
              }
            }
            if ($breakOnError) {
              out += " if (" + $nextValid + ") { ";
              $closingBraces += "}";
            }
          }
        }
      }
      if ($pPropertyKeys.length) {
        var arr4 = $pPropertyKeys;
        if (arr4) {
          var $pProperty, i4 = -1, l4 = arr4.length - 1;
          while (i4 < l4) {
            $pProperty = arr4[i4 += 1];
            var $sch = $pProperties[$pProperty];
            if (it.opts.strictKeywords ? typeof $sch == "object" && Object.keys($sch).length > 0 || $sch === false : it.util.schemaHasRules($sch, it.RULES.all)) {
              $it.schema = $sch;
              $it.schemaPath = it.schemaPath + ".patternProperties" + it.util.getProperty($pProperty);
              $it.errSchemaPath = it.errSchemaPath + "/patternProperties/" + it.util.escapeFragment($pProperty);
              if ($ownProperties) {
                out += " " + $dataProperties + " = " + $dataProperties + " || Object.keys(" + $data + "); for (var " + $idx + "=0; " + $idx + "<" + $dataProperties + ".length; " + $idx + "++) { var " + $key + " = " + $dataProperties + "[" + $idx + "]; ";
              } else {
                out += " for (var " + $key + " in " + $data + ") { ";
              }
              out += " if (" + it.usePattern($pProperty) + ".test(" + $key + ")) { ";
              $it.errorPath = it.util.getPathExpr(it.errorPath, $key, it.opts.jsonPointers);
              var $passData = $data + "[" + $key + "]";
              $it.dataPathArr[$dataNxt] = $key;
              var $code = it.validate($it);
              $it.baseId = $currentBaseId;
              if (it.util.varOccurences($code, $nextData) < 2) {
                out += " " + it.util.varReplace($code, $nextData, $passData) + " ";
              } else {
                out += " var " + $nextData + " = " + $passData + "; " + $code + " ";
              }
              if ($breakOnError) {
                out += " if (!" + $nextValid + ") break; ";
              }
              out += " } ";
              if ($breakOnError) {
                out += " else " + $nextValid + " = true; ";
              }
              out += " }  ";
              if ($breakOnError) {
                out += " if (" + $nextValid + ") { ";
                $closingBraces += "}";
              }
            }
          }
        }
      }
      if ($breakOnError) {
        out += " " + $closingBraces + " if (" + $errs + " == errors) {";
      }
      return out;
    }, "generate_properties");
  }
});

// node_modules/ajv/lib/dotjs/propertyNames.js
var require_propertyNames = __commonJS({
  "node_modules/ajv/lib/dotjs/propertyNames.js"(exports, module) {
    "use strict";
    module.exports = /* @__PURE__ */ __name(function generate_propertyNames(it, $keyword, $ruleType) {
      var out = " ";
      var $lvl = it.level;
      var $dataLvl = it.dataLevel;
      var $schema = it.schema[$keyword];
      var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
      var $errSchemaPath = it.errSchemaPath + "/" + $keyword;
      var $breakOnError = !it.opts.allErrors;
      var $data = "data" + ($dataLvl || "");
      var $errs = "errs__" + $lvl;
      var $it = it.util.copy(it);
      var $closingBraces = "";
      $it.level++;
      var $nextValid = "valid" + $it.level;
      out += "var " + $errs + " = errors;";
      if (it.opts.strictKeywords ? typeof $schema == "object" && Object.keys($schema).length > 0 || $schema === false : it.util.schemaHasRules($schema, it.RULES.all)) {
        $it.schema = $schema;
        $it.schemaPath = $schemaPath;
        $it.errSchemaPath = $errSchemaPath;
        var $key = "key" + $lvl, $idx = "idx" + $lvl, $i = "i" + $lvl, $invalidName = "' + " + $key + " + '", $dataNxt = $it.dataLevel = it.dataLevel + 1, $nextData = "data" + $dataNxt, $dataProperties = "dataProperties" + $lvl, $ownProperties = it.opts.ownProperties, $currentBaseId = it.baseId;
        if ($ownProperties) {
          out += " var " + $dataProperties + " = undefined; ";
        }
        if ($ownProperties) {
          out += " " + $dataProperties + " = " + $dataProperties + " || Object.keys(" + $data + "); for (var " + $idx + "=0; " + $idx + "<" + $dataProperties + ".length; " + $idx + "++) { var " + $key + " = " + $dataProperties + "[" + $idx + "]; ";
        } else {
          out += " for (var " + $key + " in " + $data + ") { ";
        }
        out += " var startErrs" + $lvl + " = errors; ";
        var $passData = $key;
        var $wasComposite = it.compositeRule;
        it.compositeRule = $it.compositeRule = true;
        var $code = it.validate($it);
        $it.baseId = $currentBaseId;
        if (it.util.varOccurences($code, $nextData) < 2) {
          out += " " + it.util.varReplace($code, $nextData, $passData) + " ";
        } else {
          out += " var " + $nextData + " = " + $passData + "; " + $code + " ";
        }
        it.compositeRule = $it.compositeRule = $wasComposite;
        out += " if (!" + $nextValid + ") { for (var " + $i + "=startErrs" + $lvl + "; " + $i + "<errors; " + $i + "++) { vErrors[" + $i + "].propertyName = " + $key + "; }   var err =   ";
        if (it.createErrors !== false) {
          out += " { keyword: 'propertyNames' , dataPath: (dataPath || '') + " + it.errorPath + " , schemaPath: " + it.util.toQuotedString($errSchemaPath) + " , params: { propertyName: '" + $invalidName + "' } ";
          if (it.opts.messages !== false) {
            out += " , message: 'property name \\'" + $invalidName + "\\' is invalid' ";
          }
          if (it.opts.verbose) {
            out += " , schema: validate.schema" + $schemaPath + " , parentSchema: validate.schema" + it.schemaPath + " , data: " + $data + " ";
          }
          out += " } ";
        } else {
          out += " {} ";
        }
        out += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ";
        if (!it.compositeRule && $breakOnError) {
          if (it.async) {
            out += " throw new ValidationError(vErrors); ";
          } else {
            out += " validate.errors = vErrors; return false; ";
          }
        }
        if ($breakOnError) {
          out += " break; ";
        }
        out += " } }";
      }
      if ($breakOnError) {
        out += " " + $closingBraces + " if (" + $errs + " == errors) {";
      }
      return out;
    }, "generate_propertyNames");
  }
});

// node_modules/ajv/lib/dotjs/required.js
var require_required = __commonJS({
  "node_modules/ajv/lib/dotjs/required.js"(exports, module) {
    "use strict";
    module.exports = /* @__PURE__ */ __name(function generate_required(it, $keyword, $ruleType) {
      var out = " ";
      var $lvl = it.level;
      var $dataLvl = it.dataLevel;
      var $schema = it.schema[$keyword];
      var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
      var $errSchemaPath = it.errSchemaPath + "/" + $keyword;
      var $breakOnError = !it.opts.allErrors;
      var $data = "data" + ($dataLvl || "");
      var $valid = "valid" + $lvl;
      var $isData = it.opts.$data && $schema && $schema.$data, $schemaValue;
      if ($isData) {
        out += " var schema" + $lvl + " = " + it.util.getData($schema.$data, $dataLvl, it.dataPathArr) + "; ";
        $schemaValue = "schema" + $lvl;
      } else {
        $schemaValue = $schema;
      }
      var $vSchema = "schema" + $lvl;
      if (!$isData) {
        if ($schema.length < it.opts.loopRequired && it.schema.properties && Object.keys(it.schema.properties).length) {
          var $required = [];
          var arr1 = $schema;
          if (arr1) {
            var $property, i1 = -1, l1 = arr1.length - 1;
            while (i1 < l1) {
              $property = arr1[i1 += 1];
              var $propertySch = it.schema.properties[$property];
              if (!($propertySch && (it.opts.strictKeywords ? typeof $propertySch == "object" && Object.keys($propertySch).length > 0 || $propertySch === false : it.util.schemaHasRules($propertySch, it.RULES.all)))) {
                $required[$required.length] = $property;
              }
            }
          }
        } else {
          var $required = $schema;
        }
      }
      if ($isData || $required.length) {
        var $currentErrorPath = it.errorPath, $loopRequired = $isData || $required.length >= it.opts.loopRequired, $ownProperties = it.opts.ownProperties;
        if ($breakOnError) {
          out += " var missing" + $lvl + "; ";
          if ($loopRequired) {
            if (!$isData) {
              out += " var " + $vSchema + " = validate.schema" + $schemaPath + "; ";
            }
            var $i = "i" + $lvl, $propertyPath = "schema" + $lvl + "[" + $i + "]", $missingProperty = "' + " + $propertyPath + " + '";
            if (it.opts._errorDataPathProperty) {
              it.errorPath = it.util.getPathExpr($currentErrorPath, $propertyPath, it.opts.jsonPointers);
            }
            out += " var " + $valid + " = true; ";
            if ($isData) {
              out += " if (schema" + $lvl + " === undefined) " + $valid + " = true; else if (!Array.isArray(schema" + $lvl + ")) " + $valid + " = false; else {";
            }
            out += " for (var " + $i + " = 0; " + $i + " < " + $vSchema + ".length; " + $i + "++) { " + $valid + " = " + $data + "[" + $vSchema + "[" + $i + "]] !== undefined ";
            if ($ownProperties) {
              out += " &&   Object.prototype.hasOwnProperty.call(" + $data + ", " + $vSchema + "[" + $i + "]) ";
            }
            out += "; if (!" + $valid + ") break; } ";
            if ($isData) {
              out += "  }  ";
            }
            out += "  if (!" + $valid + ") {   ";
            var $$outStack = $$outStack || [];
            $$outStack.push(out);
            out = "";
            if (it.createErrors !== false) {
              out += " { keyword: 'required' , dataPath: (dataPath || '') + " + it.errorPath + " , schemaPath: " + it.util.toQuotedString($errSchemaPath) + " , params: { missingProperty: '" + $missingProperty + "' } ";
              if (it.opts.messages !== false) {
                out += " , message: '";
                if (it.opts._errorDataPathProperty) {
                  out += "is a required property";
                } else {
                  out += "should have required property \\'" + $missingProperty + "\\'";
                }
                out += "' ";
              }
              if (it.opts.verbose) {
                out += " , schema: validate.schema" + $schemaPath + " , parentSchema: validate.schema" + it.schemaPath + " , data: " + $data + " ";
              }
              out += " } ";
            } else {
              out += " {} ";
            }
            var __err = out;
            out = $$outStack.pop();
            if (!it.compositeRule && $breakOnError) {
              if (it.async) {
                out += " throw new ValidationError([" + __err + "]); ";
              } else {
                out += " validate.errors = [" + __err + "]; return false; ";
              }
            } else {
              out += " var err = " + __err + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ";
            }
            out += " } else { ";
          } else {
            out += " if ( ";
            var arr2 = $required;
            if (arr2) {
              var $propertyKey, $i = -1, l2 = arr2.length - 1;
              while ($i < l2) {
                $propertyKey = arr2[$i += 1];
                if ($i) {
                  out += " || ";
                }
                var $prop = it.util.getProperty($propertyKey), $useData = $data + $prop;
                out += " ( ( " + $useData + " === undefined ";
                if ($ownProperties) {
                  out += " || ! Object.prototype.hasOwnProperty.call(" + $data + ", '" + it.util.escapeQuotes($propertyKey) + "') ";
                }
                out += ") && (missing" + $lvl + " = " + it.util.toQuotedString(it.opts.jsonPointers ? $propertyKey : $prop) + ") ) ";
              }
            }
            out += ") {  ";
            var $propertyPath = "missing" + $lvl, $missingProperty = "' + " + $propertyPath + " + '";
            if (it.opts._errorDataPathProperty) {
              it.errorPath = it.opts.jsonPointers ? it.util.getPathExpr($currentErrorPath, $propertyPath, true) : $currentErrorPath + " + " + $propertyPath;
            }
            var $$outStack = $$outStack || [];
            $$outStack.push(out);
            out = "";
            if (it.createErrors !== false) {
              out += " { keyword: 'required' , dataPath: (dataPath || '') + " + it.errorPath + " , schemaPath: " + it.util.toQuotedString($errSchemaPath) + " , params: { missingProperty: '" + $missingProperty + "' } ";
              if (it.opts.messages !== false) {
                out += " , message: '";
                if (it.opts._errorDataPathProperty) {
                  out += "is a required property";
                } else {
                  out += "should have required property \\'" + $missingProperty + "\\'";
                }
                out += "' ";
              }
              if (it.opts.verbose) {
                out += " , schema: validate.schema" + $schemaPath + " , parentSchema: validate.schema" + it.schemaPath + " , data: " + $data + " ";
              }
              out += " } ";
            } else {
              out += " {} ";
            }
            var __err = out;
            out = $$outStack.pop();
            if (!it.compositeRule && $breakOnError) {
              if (it.async) {
                out += " throw new ValidationError([" + __err + "]); ";
              } else {
                out += " validate.errors = [" + __err + "]; return false; ";
              }
            } else {
              out += " var err = " + __err + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ";
            }
            out += " } else { ";
          }
        } else {
          if ($loopRequired) {
            if (!$isData) {
              out += " var " + $vSchema + " = validate.schema" + $schemaPath + "; ";
            }
            var $i = "i" + $lvl, $propertyPath = "schema" + $lvl + "[" + $i + "]", $missingProperty = "' + " + $propertyPath + " + '";
            if (it.opts._errorDataPathProperty) {
              it.errorPath = it.util.getPathExpr($currentErrorPath, $propertyPath, it.opts.jsonPointers);
            }
            if ($isData) {
              out += " if (" + $vSchema + " && !Array.isArray(" + $vSchema + ")) {  var err =   ";
              if (it.createErrors !== false) {
                out += " { keyword: 'required' , dataPath: (dataPath || '') + " + it.errorPath + " , schemaPath: " + it.util.toQuotedString($errSchemaPath) + " , params: { missingProperty: '" + $missingProperty + "' } ";
                if (it.opts.messages !== false) {
                  out += " , message: '";
                  if (it.opts._errorDataPathProperty) {
                    out += "is a required property";
                  } else {
                    out += "should have required property \\'" + $missingProperty + "\\'";
                  }
                  out += "' ";
                }
                if (it.opts.verbose) {
                  out += " , schema: validate.schema" + $schemaPath + " , parentSchema: validate.schema" + it.schemaPath + " , data: " + $data + " ";
                }
                out += " } ";
              } else {
                out += " {} ";
              }
              out += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } else if (" + $vSchema + " !== undefined) { ";
            }
            out += " for (var " + $i + " = 0; " + $i + " < " + $vSchema + ".length; " + $i + "++) { if (" + $data + "[" + $vSchema + "[" + $i + "]] === undefined ";
            if ($ownProperties) {
              out += " || ! Object.prototype.hasOwnProperty.call(" + $data + ", " + $vSchema + "[" + $i + "]) ";
            }
            out += ") {  var err =   ";
            if (it.createErrors !== false) {
              out += " { keyword: 'required' , dataPath: (dataPath || '') + " + it.errorPath + " , schemaPath: " + it.util.toQuotedString($errSchemaPath) + " , params: { missingProperty: '" + $missingProperty + "' } ";
              if (it.opts.messages !== false) {
                out += " , message: '";
                if (it.opts._errorDataPathProperty) {
                  out += "is a required property";
                } else {
                  out += "should have required property \\'" + $missingProperty + "\\'";
                }
                out += "' ";
              }
              if (it.opts.verbose) {
                out += " , schema: validate.schema" + $schemaPath + " , parentSchema: validate.schema" + it.schemaPath + " , data: " + $data + " ";
              }
              out += " } ";
            } else {
              out += " {} ";
            }
            out += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } } ";
            if ($isData) {
              out += "  }  ";
            }
          } else {
            var arr3 = $required;
            if (arr3) {
              var $propertyKey, i3 = -1, l3 = arr3.length - 1;
              while (i3 < l3) {
                $propertyKey = arr3[i3 += 1];
                var $prop = it.util.getProperty($propertyKey), $missingProperty = it.util.escapeQuotes($propertyKey), $useData = $data + $prop;
                if (it.opts._errorDataPathProperty) {
                  it.errorPath = it.util.getPath($currentErrorPath, $propertyKey, it.opts.jsonPointers);
                }
                out += " if ( " + $useData + " === undefined ";
                if ($ownProperties) {
                  out += " || ! Object.prototype.hasOwnProperty.call(" + $data + ", '" + it.util.escapeQuotes($propertyKey) + "') ";
                }
                out += ") {  var err =   ";
                if (it.createErrors !== false) {
                  out += " { keyword: 'required' , dataPath: (dataPath || '') + " + it.errorPath + " , schemaPath: " + it.util.toQuotedString($errSchemaPath) + " , params: { missingProperty: '" + $missingProperty + "' } ";
                  if (it.opts.messages !== false) {
                    out += " , message: '";
                    if (it.opts._errorDataPathProperty) {
                      out += "is a required property";
                    } else {
                      out += "should have required property \\'" + $missingProperty + "\\'";
                    }
                    out += "' ";
                  }
                  if (it.opts.verbose) {
                    out += " , schema: validate.schema" + $schemaPath + " , parentSchema: validate.schema" + it.schemaPath + " , data: " + $data + " ";
                  }
                  out += " } ";
                } else {
                  out += " {} ";
                }
                out += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } ";
              }
            }
          }
        }
        it.errorPath = $currentErrorPath;
      } else if ($breakOnError) {
        out += " if (true) {";
      }
      return out;
    }, "generate_required");
  }
});

// node_modules/ajv/lib/dotjs/uniqueItems.js
var require_uniqueItems = __commonJS({
  "node_modules/ajv/lib/dotjs/uniqueItems.js"(exports, module) {
    "use strict";
    module.exports = /* @__PURE__ */ __name(function generate_uniqueItems(it, $keyword, $ruleType) {
      var out = " ";
      var $lvl = it.level;
      var $dataLvl = it.dataLevel;
      var $schema = it.schema[$keyword];
      var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
      var $errSchemaPath = it.errSchemaPath + "/" + $keyword;
      var $breakOnError = !it.opts.allErrors;
      var $data = "data" + ($dataLvl || "");
      var $valid = "valid" + $lvl;
      var $isData = it.opts.$data && $schema && $schema.$data, $schemaValue;
      if ($isData) {
        out += " var schema" + $lvl + " = " + it.util.getData($schema.$data, $dataLvl, it.dataPathArr) + "; ";
        $schemaValue = "schema" + $lvl;
      } else {
        $schemaValue = $schema;
      }
      if (($schema || $isData) && it.opts.uniqueItems !== false) {
        if ($isData) {
          out += " var " + $valid + "; if (" + $schemaValue + " === false || " + $schemaValue + " === undefined) " + $valid + " = true; else if (typeof " + $schemaValue + " != 'boolean') " + $valid + " = false; else { ";
        }
        out += " var i = " + $data + ".length , " + $valid + " = true , j; if (i > 1) { ";
        var $itemType = it.schema.items && it.schema.items.type, $typeIsArray = Array.isArray($itemType);
        if (!$itemType || $itemType == "object" || $itemType == "array" || $typeIsArray && ($itemType.indexOf("object") >= 0 || $itemType.indexOf("array") >= 0)) {
          out += " outer: for (;i--;) { for (j = i; j--;) { if (equal(" + $data + "[i], " + $data + "[j])) { " + $valid + " = false; break outer; } } } ";
        } else {
          out += " var itemIndices = {}, item; for (;i--;) { var item = " + $data + "[i]; ";
          var $method = "checkDataType" + ($typeIsArray ? "s" : "");
          out += " if (" + it.util[$method]($itemType, "item", it.opts.strictNumbers, true) + ") continue; ";
          if ($typeIsArray) {
            out += ` if (typeof item == 'string') item = '"' + item; `;
          }
          out += " if (typeof itemIndices[item] == 'number') { " + $valid + " = false; j = itemIndices[item]; break; } itemIndices[item] = i; } ";
        }
        out += " } ";
        if ($isData) {
          out += "  }  ";
        }
        out += " if (!" + $valid + ") {   ";
        var $$outStack = $$outStack || [];
        $$outStack.push(out);
        out = "";
        if (it.createErrors !== false) {
          out += " { keyword: 'uniqueItems' , dataPath: (dataPath || '') + " + it.errorPath + " , schemaPath: " + it.util.toQuotedString($errSchemaPath) + " , params: { i: i, j: j } ";
          if (it.opts.messages !== false) {
            out += " , message: 'should NOT have duplicate items (items ## ' + j + ' and ' + i + ' are identical)' ";
          }
          if (it.opts.verbose) {
            out += " , schema:  ";
            if ($isData) {
              out += "validate.schema" + $schemaPath;
            } else {
              out += "" + $schema;
            }
            out += "         , parentSchema: validate.schema" + it.schemaPath + " , data: " + $data + " ";
          }
          out += " } ";
        } else {
          out += " {} ";
        }
        var __err = out;
        out = $$outStack.pop();
        if (!it.compositeRule && $breakOnError) {
          if (it.async) {
            out += " throw new ValidationError([" + __err + "]); ";
          } else {
            out += " validate.errors = [" + __err + "]; return false; ";
          }
        } else {
          out += " var err = " + __err + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ";
        }
        out += " } ";
        if ($breakOnError) {
          out += " else { ";
        }
      } else {
        if ($breakOnError) {
          out += " if (true) { ";
        }
      }
      return out;
    }, "generate_uniqueItems");
  }
});

// node_modules/ajv/lib/dotjs/index.js
var require_dotjs = __commonJS({
  "node_modules/ajv/lib/dotjs/index.js"(exports, module) {
    "use strict";
    module.exports = {
      "$ref": require_ref(),
      allOf: require_allOf(),
      anyOf: require_anyOf(),
      "$comment": require_comment(),
      const: require_const(),
      contains: require_contains(),
      dependencies: require_dependencies(),
      "enum": require_enum(),
      format: require_format(),
      "if": require_if(),
      items: require_items(),
      maximum: require_limit(),
      minimum: require_limit(),
      maxItems: require_limitItems(),
      minItems: require_limitItems(),
      maxLength: require_limitLength(),
      minLength: require_limitLength(),
      maxProperties: require_limitProperties(),
      minProperties: require_limitProperties(),
      multipleOf: require_multipleOf(),
      not: require_not(),
      oneOf: require_oneOf(),
      pattern: require_pattern(),
      properties: require_properties(),
      propertyNames: require_propertyNames(),
      required: require_required(),
      uniqueItems: require_uniqueItems(),
      validate: require_validate()
    };
  }
});

// node_modules/ajv/lib/compile/rules.js
var require_rules = __commonJS({
  "node_modules/ajv/lib/compile/rules.js"(exports, module) {
    "use strict";
    var ruleModules = require_dotjs();
    var toHash = require_util().toHash;
    module.exports = /* @__PURE__ */ __name(function rules() {
      var RULES = [
        {
          type: "number",
          rules: [
            { "maximum": ["exclusiveMaximum"] },
            { "minimum": ["exclusiveMinimum"] },
            "multipleOf",
            "format"
          ]
        },
        {
          type: "string",
          rules: ["maxLength", "minLength", "pattern", "format"]
        },
        {
          type: "array",
          rules: ["maxItems", "minItems", "items", "contains", "uniqueItems"]
        },
        {
          type: "object",
          rules: [
            "maxProperties",
            "minProperties",
            "required",
            "dependencies",
            "propertyNames",
            { "properties": ["additionalProperties", "patternProperties"] }
          ]
        },
        { rules: ["$ref", "const", "enum", "not", "anyOf", "oneOf", "allOf", "if"] }
      ];
      var ALL = ["type", "$comment"];
      var KEYWORDS = [
        "$schema",
        "$id",
        "id",
        "$data",
        "$async",
        "title",
        "description",
        "default",
        "definitions",
        "examples",
        "readOnly",
        "writeOnly",
        "contentMediaType",
        "contentEncoding",
        "additionalItems",
        "then",
        "else"
      ];
      var TYPES = ["number", "integer", "string", "array", "object", "boolean", "null"];
      RULES.all = toHash(ALL);
      RULES.types = toHash(TYPES);
      RULES.forEach(function(group) {
        group.rules = group.rules.map(function(keyword) {
          var implKeywords;
          if (typeof keyword == "object") {
            var key = Object.keys(keyword)[0];
            implKeywords = keyword[key];
            keyword = key;
            implKeywords.forEach(function(k) {
              ALL.push(k);
              RULES.all[k] = true;
            });
          }
          ALL.push(keyword);
          var rule = RULES.all[keyword] = {
            keyword,
            code: ruleModules[keyword],
            implements: implKeywords
          };
          return rule;
        });
        RULES.all.$comment = {
          keyword: "$comment",
          code: ruleModules.$comment
        };
        if (group.type)
          RULES.types[group.type] = group;
      });
      RULES.keywords = toHash(ALL.concat(KEYWORDS));
      RULES.custom = {};
      return RULES;
    }, "rules");
  }
});

// node_modules/ajv/lib/data.js
var require_data = __commonJS({
  "node_modules/ajv/lib/data.js"(exports, module) {
    "use strict";
    var KEYWORDS = [
      "multipleOf",
      "maximum",
      "exclusiveMaximum",
      "minimum",
      "exclusiveMinimum",
      "maxLength",
      "minLength",
      "pattern",
      "additionalItems",
      "maxItems",
      "minItems",
      "uniqueItems",
      "maxProperties",
      "minProperties",
      "required",
      "additionalProperties",
      "enum",
      "format",
      "const"
    ];
    module.exports = function(metaSchema, keywordsJsonPointers) {
      for (var i = 0; i < keywordsJsonPointers.length; i++) {
        metaSchema = JSON.parse(JSON.stringify(metaSchema));
        var segments = keywordsJsonPointers[i].split("/");
        var keywords = metaSchema;
        var j;
        for (j = 1; j < segments.length; j++)
          keywords = keywords[segments[j]];
        for (j = 0; j < KEYWORDS.length; j++) {
          var key = KEYWORDS[j];
          var schema = keywords[key];
          if (schema) {
            keywords[key] = {
              anyOf: [
                schema,
                { $ref: "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#" }
              ]
            };
          }
        }
      }
      return metaSchema;
    };
  }
});

// node_modules/ajv/lib/compile/async.js
var require_async = __commonJS({
  "node_modules/ajv/lib/compile/async.js"(exports, module) {
    "use strict";
    var MissingRefError = require_error_classes().MissingRef;
    module.exports = compileAsync;
    function compileAsync(schema, meta, callback) {
      var self = this;
      if (typeof this._opts.loadSchema != "function")
        throw new Error("options.loadSchema should be a function");
      if (typeof meta == "function") {
        callback = meta;
        meta = void 0;
      }
      var p = loadMetaSchemaOf(schema).then(function() {
        var schemaObj = self._addSchema(schema, void 0, meta);
        return schemaObj.validate || _compileAsync(schemaObj);
      });
      if (callback) {
        p.then(
          function(v) {
            callback(null, v);
          },
          callback
        );
      }
      return p;
      function loadMetaSchemaOf(sch) {
        var $schema = sch.$schema;
        return $schema && !self.getSchema($schema) ? compileAsync.call(self, { $ref: $schema }, true) : Promise.resolve();
      }
      __name(loadMetaSchemaOf, "loadMetaSchemaOf");
      function _compileAsync(schemaObj) {
        try {
          return self._compile(schemaObj);
        } catch (e) {
          if (e instanceof MissingRefError)
            return loadMissingSchema(e);
          throw e;
        }
        function loadMissingSchema(e) {
          var ref = e.missingSchema;
          if (added(ref))
            throw new Error("Schema " + ref + " is loaded but " + e.missingRef + " cannot be resolved");
          var schemaPromise = self._loadingSchemas[ref];
          if (!schemaPromise) {
            schemaPromise = self._loadingSchemas[ref] = self._opts.loadSchema(ref);
            schemaPromise.then(removePromise, removePromise);
          }
          return schemaPromise.then(function(sch) {
            if (!added(ref)) {
              return loadMetaSchemaOf(sch).then(function() {
                if (!added(ref))
                  self.addSchema(sch, ref, void 0, meta);
              });
            }
          }).then(function() {
            return _compileAsync(schemaObj);
          });
          function removePromise() {
            delete self._loadingSchemas[ref];
          }
          __name(removePromise, "removePromise");
          function added(ref2) {
            return self._refs[ref2] || self._schemas[ref2];
          }
          __name(added, "added");
        }
        __name(loadMissingSchema, "loadMissingSchema");
      }
      __name(_compileAsync, "_compileAsync");
    }
    __name(compileAsync, "compileAsync");
  }
});

// node_modules/ajv/lib/dotjs/custom.js
var require_custom = __commonJS({
  "node_modules/ajv/lib/dotjs/custom.js"(exports, module) {
    "use strict";
    module.exports = /* @__PURE__ */ __name(function generate_custom(it, $keyword, $ruleType) {
      var out = " ";
      var $lvl = it.level;
      var $dataLvl = it.dataLevel;
      var $schema = it.schema[$keyword];
      var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
      var $errSchemaPath = it.errSchemaPath + "/" + $keyword;
      var $breakOnError = !it.opts.allErrors;
      var $errorKeyword;
      var $data = "data" + ($dataLvl || "");
      var $valid = "valid" + $lvl;
      var $errs = "errs__" + $lvl;
      var $isData = it.opts.$data && $schema && $schema.$data, $schemaValue;
      if ($isData) {
        out += " var schema" + $lvl + " = " + it.util.getData($schema.$data, $dataLvl, it.dataPathArr) + "; ";
        $schemaValue = "schema" + $lvl;
      } else {
        $schemaValue = $schema;
      }
      var $rule = this, $definition = "definition" + $lvl, $rDef = $rule.definition, $closingBraces = "";
      var $compile, $inline, $macro, $ruleValidate, $validateCode;
      if ($isData && $rDef.$data) {
        $validateCode = "keywordValidate" + $lvl;
        var $validateSchema = $rDef.validateSchema;
        out += " var " + $definition + " = RULES.custom['" + $keyword + "'].definition; var " + $validateCode + " = " + $definition + ".validate;";
      } else {
        $ruleValidate = it.useCustomRule($rule, $schema, it.schema, it);
        if (!$ruleValidate)
          return;
        $schemaValue = "validate.schema" + $schemaPath;
        $validateCode = $ruleValidate.code;
        $compile = $rDef.compile;
        $inline = $rDef.inline;
        $macro = $rDef.macro;
      }
      var $ruleErrs = $validateCode + ".errors", $i = "i" + $lvl, $ruleErr = "ruleErr" + $lvl, $asyncKeyword = $rDef.async;
      if ($asyncKeyword && !it.async)
        throw new Error("async keyword in sync schema");
      if (!($inline || $macro)) {
        out += "" + $ruleErrs + " = null;";
      }
      out += "var " + $errs + " = errors;var " + $valid + ";";
      if ($isData && $rDef.$data) {
        $closingBraces += "}";
        out += " if (" + $schemaValue + " === undefined) { " + $valid + " = true; } else { ";
        if ($validateSchema) {
          $closingBraces += "}";
          out += " " + $valid + " = " + $definition + ".validateSchema(" + $schemaValue + "); if (" + $valid + ") { ";
        }
      }
      if ($inline) {
        if ($rDef.statements) {
          out += " " + $ruleValidate.validate + " ";
        } else {
          out += " " + $valid + " = " + $ruleValidate.validate + "; ";
        }
      } else if ($macro) {
        var $it = it.util.copy(it);
        var $closingBraces = "";
        $it.level++;
        var $nextValid = "valid" + $it.level;
        $it.schema = $ruleValidate.validate;
        $it.schemaPath = "";
        var $wasComposite = it.compositeRule;
        it.compositeRule = $it.compositeRule = true;
        var $code = it.validate($it).replace(/validate\.schema/g, $validateCode);
        it.compositeRule = $it.compositeRule = $wasComposite;
        out += " " + $code;
      } else {
        var $$outStack = $$outStack || [];
        $$outStack.push(out);
        out = "";
        out += "  " + $validateCode + ".call( ";
        if (it.opts.passContext) {
          out += "this";
        } else {
          out += "self";
        }
        if ($compile || $rDef.schema === false) {
          out += " , " + $data + " ";
        } else {
          out += " , " + $schemaValue + " , " + $data + " , validate.schema" + it.schemaPath + " ";
        }
        out += " , (dataPath || '')";
        if (it.errorPath != '""') {
          out += " + " + it.errorPath;
        }
        var $parentData = $dataLvl ? "data" + ($dataLvl - 1 || "") : "parentData", $parentDataProperty = $dataLvl ? it.dataPathArr[$dataLvl] : "parentDataProperty";
        out += " , " + $parentData + " , " + $parentDataProperty + " , rootData )  ";
        var def_callRuleValidate = out;
        out = $$outStack.pop();
        if ($rDef.errors === false) {
          out += " " + $valid + " = ";
          if ($asyncKeyword) {
            out += "await ";
          }
          out += "" + def_callRuleValidate + "; ";
        } else {
          if ($asyncKeyword) {
            $ruleErrs = "customErrors" + $lvl;
            out += " var " + $ruleErrs + " = null; try { " + $valid + " = await " + def_callRuleValidate + "; } catch (e) { " + $valid + " = false; if (e instanceof ValidationError) " + $ruleErrs + " = e.errors; else throw e; } ";
          } else {
            out += " " + $ruleErrs + " = null; " + $valid + " = " + def_callRuleValidate + "; ";
          }
        }
      }
      if ($rDef.modifying) {
        out += " if (" + $parentData + ") " + $data + " = " + $parentData + "[" + $parentDataProperty + "];";
      }
      out += "" + $closingBraces;
      if ($rDef.valid) {
        if ($breakOnError) {
          out += " if (true) { ";
        }
      } else {
        out += " if ( ";
        if ($rDef.valid === void 0) {
          out += " !";
          if ($macro) {
            out += "" + $nextValid;
          } else {
            out += "" + $valid;
          }
        } else {
          out += " " + !$rDef.valid + " ";
        }
        out += ") { ";
        $errorKeyword = $rule.keyword;
        var $$outStack = $$outStack || [];
        $$outStack.push(out);
        out = "";
        var $$outStack = $$outStack || [];
        $$outStack.push(out);
        out = "";
        if (it.createErrors !== false) {
          out += " { keyword: '" + ($errorKeyword || "custom") + "' , dataPath: (dataPath || '') + " + it.errorPath + " , schemaPath: " + it.util.toQuotedString($errSchemaPath) + " , params: { keyword: '" + $rule.keyword + "' } ";
          if (it.opts.messages !== false) {
            out += ` , message: 'should pass "` + $rule.keyword + `" keyword validation' `;
          }
          if (it.opts.verbose) {
            out += " , schema: validate.schema" + $schemaPath + " , parentSchema: validate.schema" + it.schemaPath + " , data: " + $data + " ";
          }
          out += " } ";
        } else {
          out += " {} ";
        }
        var __err = out;
        out = $$outStack.pop();
        if (!it.compositeRule && $breakOnError) {
          if (it.async) {
            out += " throw new ValidationError([" + __err + "]); ";
          } else {
            out += " validate.errors = [" + __err + "]; return false; ";
          }
        } else {
          out += " var err = " + __err + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ";
        }
        var def_customError = out;
        out = $$outStack.pop();
        if ($inline) {
          if ($rDef.errors) {
            if ($rDef.errors != "full") {
              out += "  for (var " + $i + "=" + $errs + "; " + $i + "<errors; " + $i + "++) { var " + $ruleErr + " = vErrors[" + $i + "]; if (" + $ruleErr + ".dataPath === undefined) " + $ruleErr + ".dataPath = (dataPath || '') + " + it.errorPath + "; if (" + $ruleErr + ".schemaPath === undefined) { " + $ruleErr + '.schemaPath = "' + $errSchemaPath + '"; } ';
              if (it.opts.verbose) {
                out += " " + $ruleErr + ".schema = " + $schemaValue + "; " + $ruleErr + ".data = " + $data + "; ";
              }
              out += " } ";
            }
          } else {
            if ($rDef.errors === false) {
              out += " " + def_customError + " ";
            } else {
              out += " if (" + $errs + " == errors) { " + def_customError + " } else {  for (var " + $i + "=" + $errs + "; " + $i + "<errors; " + $i + "++) { var " + $ruleErr + " = vErrors[" + $i + "]; if (" + $ruleErr + ".dataPath === undefined) " + $ruleErr + ".dataPath = (dataPath || '') + " + it.errorPath + "; if (" + $ruleErr + ".schemaPath === undefined) { " + $ruleErr + '.schemaPath = "' + $errSchemaPath + '"; } ';
              if (it.opts.verbose) {
                out += " " + $ruleErr + ".schema = " + $schemaValue + "; " + $ruleErr + ".data = " + $data + "; ";
              }
              out += " } } ";
            }
          }
        } else if ($macro) {
          out += "   var err =   ";
          if (it.createErrors !== false) {
            out += " { keyword: '" + ($errorKeyword || "custom") + "' , dataPath: (dataPath || '') + " + it.errorPath + " , schemaPath: " + it.util.toQuotedString($errSchemaPath) + " , params: { keyword: '" + $rule.keyword + "' } ";
            if (it.opts.messages !== false) {
              out += ` , message: 'should pass "` + $rule.keyword + `" keyword validation' `;
            }
            if (it.opts.verbose) {
              out += " , schema: validate.schema" + $schemaPath + " , parentSchema: validate.schema" + it.schemaPath + " , data: " + $data + " ";
            }
            out += " } ";
          } else {
            out += " {} ";
          }
          out += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ";
          if (!it.compositeRule && $breakOnError) {
            if (it.async) {
              out += " throw new ValidationError(vErrors); ";
            } else {
              out += " validate.errors = vErrors; return false; ";
            }
          }
        } else {
          if ($rDef.errors === false) {
            out += " " + def_customError + " ";
          } else {
            out += " if (Array.isArray(" + $ruleErrs + ")) { if (vErrors === null) vErrors = " + $ruleErrs + "; else vErrors = vErrors.concat(" + $ruleErrs + "); errors = vErrors.length;  for (var " + $i + "=" + $errs + "; " + $i + "<errors; " + $i + "++) { var " + $ruleErr + " = vErrors[" + $i + "]; if (" + $ruleErr + ".dataPath === undefined) " + $ruleErr + ".dataPath = (dataPath || '') + " + it.errorPath + ";  " + $ruleErr + '.schemaPath = "' + $errSchemaPath + '";  ';
            if (it.opts.verbose) {
              out += " " + $ruleErr + ".schema = " + $schemaValue + "; " + $ruleErr + ".data = " + $data + "; ";
            }
            out += " } } else { " + def_customError + " } ";
          }
        }
        out += " } ";
        if ($breakOnError) {
          out += " else { ";
        }
      }
      return out;
    }, "generate_custom");
  }
});

// node_modules/ajv/lib/refs/json-schema-draft-07.json
var require_json_schema_draft_07 = __commonJS({
  "node_modules/ajv/lib/refs/json-schema-draft-07.json"(exports, module) {
    module.exports = {
      $schema: "http://json-schema.org/draft-07/schema#",
      $id: "http://json-schema.org/draft-07/schema#",
      title: "Core schema meta-schema",
      definitions: {
        schemaArray: {
          type: "array",
          minItems: 1,
          items: { $ref: "#" }
        },
        nonNegativeInteger: {
          type: "integer",
          minimum: 0
        },
        nonNegativeIntegerDefault0: {
          allOf: [
            { $ref: "#/definitions/nonNegativeInteger" },
            { default: 0 }
          ]
        },
        simpleTypes: {
          enum: [
            "array",
            "boolean",
            "integer",
            "null",
            "number",
            "object",
            "string"
          ]
        },
        stringArray: {
          type: "array",
          items: { type: "string" },
          uniqueItems: true,
          default: []
        }
      },
      type: ["object", "boolean"],
      properties: {
        $id: {
          type: "string",
          format: "uri-reference"
        },
        $schema: {
          type: "string",
          format: "uri"
        },
        $ref: {
          type: "string",
          format: "uri-reference"
        },
        $comment: {
          type: "string"
        },
        title: {
          type: "string"
        },
        description: {
          type: "string"
        },
        default: true,
        readOnly: {
          type: "boolean",
          default: false
        },
        examples: {
          type: "array",
          items: true
        },
        multipleOf: {
          type: "number",
          exclusiveMinimum: 0
        },
        maximum: {
          type: "number"
        },
        exclusiveMaximum: {
          type: "number"
        },
        minimum: {
          type: "number"
        },
        exclusiveMinimum: {
          type: "number"
        },
        maxLength: { $ref: "#/definitions/nonNegativeInteger" },
        minLength: { $ref: "#/definitions/nonNegativeIntegerDefault0" },
        pattern: {
          type: "string",
          format: "regex"
        },
        additionalItems: { $ref: "#" },
        items: {
          anyOf: [
            { $ref: "#" },
            { $ref: "#/definitions/schemaArray" }
          ],
          default: true
        },
        maxItems: { $ref: "#/definitions/nonNegativeInteger" },
        minItems: { $ref: "#/definitions/nonNegativeIntegerDefault0" },
        uniqueItems: {
          type: "boolean",
          default: false
        },
        contains: { $ref: "#" },
        maxProperties: { $ref: "#/definitions/nonNegativeInteger" },
        minProperties: { $ref: "#/definitions/nonNegativeIntegerDefault0" },
        required: { $ref: "#/definitions/stringArray" },
        additionalProperties: { $ref: "#" },
        definitions: {
          type: "object",
          additionalProperties: { $ref: "#" },
          default: {}
        },
        properties: {
          type: "object",
          additionalProperties: { $ref: "#" },
          default: {}
        },
        patternProperties: {
          type: "object",
          additionalProperties: { $ref: "#" },
          propertyNames: { format: "regex" },
          default: {}
        },
        dependencies: {
          type: "object",
          additionalProperties: {
            anyOf: [
              { $ref: "#" },
              { $ref: "#/definitions/stringArray" }
            ]
          }
        },
        propertyNames: { $ref: "#" },
        const: true,
        enum: {
          type: "array",
          items: true,
          minItems: 1,
          uniqueItems: true
        },
        type: {
          anyOf: [
            { $ref: "#/definitions/simpleTypes" },
            {
              type: "array",
              items: { $ref: "#/definitions/simpleTypes" },
              minItems: 1,
              uniqueItems: true
            }
          ]
        },
        format: { type: "string" },
        contentMediaType: { type: "string" },
        contentEncoding: { type: "string" },
        if: { $ref: "#" },
        then: { $ref: "#" },
        else: { $ref: "#" },
        allOf: { $ref: "#/definitions/schemaArray" },
        anyOf: { $ref: "#/definitions/schemaArray" },
        oneOf: { $ref: "#/definitions/schemaArray" },
        not: { $ref: "#" }
      },
      default: true
    };
  }
});

// node_modules/ajv/lib/definition_schema.js
var require_definition_schema = __commonJS({
  "node_modules/ajv/lib/definition_schema.js"(exports, module) {
    "use strict";
    var metaSchema = require_json_schema_draft_07();
    module.exports = {
      $id: "https://github.com/ajv-validator/ajv/blob/master/lib/definition_schema.js",
      definitions: {
        simpleTypes: metaSchema.definitions.simpleTypes
      },
      type: "object",
      dependencies: {
        schema: ["validate"],
        $data: ["validate"],
        statements: ["inline"],
        valid: { not: { required: ["macro"] } }
      },
      properties: {
        type: metaSchema.properties.type,
        schema: { type: "boolean" },
        statements: { type: "boolean" },
        dependencies: {
          type: "array",
          items: { type: "string" }
        },
        metaSchema: { type: "object" },
        modifying: { type: "boolean" },
        valid: { type: "boolean" },
        $data: { type: "boolean" },
        async: { type: "boolean" },
        errors: {
          anyOf: [
            { type: "boolean" },
            { const: "full" }
          ]
        }
      }
    };
  }
});

// node_modules/ajv/lib/keyword.js
var require_keyword = __commonJS({
  "node_modules/ajv/lib/keyword.js"(exports, module) {
    "use strict";
    var IDENTIFIER = /^[a-z_$][a-z0-9_$-]*$/i;
    var customRuleCode = require_custom();
    var definitionSchema = require_definition_schema();
    module.exports = {
      add: addKeyword,
      get: getKeyword,
      remove: removeKeyword,
      validate: validateKeyword
    };
    function addKeyword(keyword, definition) {
      var RULES = this.RULES;
      if (RULES.keywords[keyword])
        throw new Error("Keyword " + keyword + " is already defined");
      if (!IDENTIFIER.test(keyword))
        throw new Error("Keyword " + keyword + " is not a valid identifier");
      if (definition) {
        this.validateKeyword(definition, true);
        var dataType = definition.type;
        if (Array.isArray(dataType)) {
          for (var i = 0; i < dataType.length; i++)
            _addRule(keyword, dataType[i], definition);
        } else {
          _addRule(keyword, dataType, definition);
        }
        var metaSchema = definition.metaSchema;
        if (metaSchema) {
          if (definition.$data && this._opts.$data) {
            metaSchema = {
              anyOf: [
                metaSchema,
                { "$ref": "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#" }
              ]
            };
          }
          definition.validateSchema = this.compile(metaSchema, true);
        }
      }
      RULES.keywords[keyword] = RULES.all[keyword] = true;
      function _addRule(keyword2, dataType2, definition2) {
        var ruleGroup;
        for (var i2 = 0; i2 < RULES.length; i2++) {
          var rg = RULES[i2];
          if (rg.type == dataType2) {
            ruleGroup = rg;
            break;
          }
        }
        if (!ruleGroup) {
          ruleGroup = { type: dataType2, rules: [] };
          RULES.push(ruleGroup);
        }
        var rule = {
          keyword: keyword2,
          definition: definition2,
          custom: true,
          code: customRuleCode,
          implements: definition2.implements
        };
        ruleGroup.rules.push(rule);
        RULES.custom[keyword2] = rule;
      }
      __name(_addRule, "_addRule");
      return this;
    }
    __name(addKeyword, "addKeyword");
    function getKeyword(keyword) {
      var rule = this.RULES.custom[keyword];
      return rule ? rule.definition : this.RULES.keywords[keyword] || false;
    }
    __name(getKeyword, "getKeyword");
    function removeKeyword(keyword) {
      var RULES = this.RULES;
      delete RULES.keywords[keyword];
      delete RULES.all[keyword];
      delete RULES.custom[keyword];
      for (var i = 0; i < RULES.length; i++) {
        var rules = RULES[i].rules;
        for (var j = 0; j < rules.length; j++) {
          if (rules[j].keyword == keyword) {
            rules.splice(j, 1);
            break;
          }
        }
      }
      return this;
    }
    __name(removeKeyword, "removeKeyword");
    function validateKeyword(definition, throwError) {
      validateKeyword.errors = null;
      var v = this._validateKeyword = this._validateKeyword || this.compile(definitionSchema, true);
      if (v(definition))
        return true;
      validateKeyword.errors = v.errors;
      if (throwError)
        throw new Error("custom keyword definition is invalid: " + this.errorsText(v.errors));
      else
        return false;
    }
    __name(validateKeyword, "validateKeyword");
  }
});

// node_modules/ajv/lib/refs/data.json
var require_data2 = __commonJS({
  "node_modules/ajv/lib/refs/data.json"(exports, module) {
    module.exports = {
      $schema: "http://json-schema.org/draft-07/schema#",
      $id: "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#",
      description: "Meta-schema for $data reference (JSON Schema extension proposal)",
      type: "object",
      required: ["$data"],
      properties: {
        $data: {
          type: "string",
          anyOf: [
            { format: "relative-json-pointer" },
            { format: "json-pointer" }
          ]
        }
      },
      additionalProperties: false
    };
  }
});

// node_modules/ajv/lib/ajv.js
var require_ajv = __commonJS({
  "node_modules/ajv/lib/ajv.js"(exports, module) {
    "use strict";
    var compileSchema = require_compile();
    var resolve = require_resolve();
    var Cache = require_cache();
    var SchemaObject = require_schema_obj();
    var stableStringify = require_fast_json_stable_stringify();
    var formats = require_formats();
    var rules = require_rules();
    var $dataMetaSchema = require_data();
    var util2 = require_util();
    module.exports = Ajv2;
    Ajv2.prototype.validate = validate;
    Ajv2.prototype.compile = compile;
    Ajv2.prototype.addSchema = addSchema;
    Ajv2.prototype.addMetaSchema = addMetaSchema;
    Ajv2.prototype.validateSchema = validateSchema;
    Ajv2.prototype.getSchema = getSchema;
    Ajv2.prototype.removeSchema = removeSchema;
    Ajv2.prototype.addFormat = addFormat2;
    Ajv2.prototype.errorsText = errorsText;
    Ajv2.prototype._addSchema = _addSchema;
    Ajv2.prototype._compile = _compile;
    Ajv2.prototype.compileAsync = require_async();
    var customKeyword = require_keyword();
    Ajv2.prototype.addKeyword = customKeyword.add;
    Ajv2.prototype.getKeyword = customKeyword.get;
    Ajv2.prototype.removeKeyword = customKeyword.remove;
    Ajv2.prototype.validateKeyword = customKeyword.validate;
    var errorClasses = require_error_classes();
    Ajv2.ValidationError = errorClasses.Validation;
    Ajv2.MissingRefError = errorClasses.MissingRef;
    Ajv2.$dataMetaSchema = $dataMetaSchema;
    var META_SCHEMA_ID = "http://json-schema.org/draft-07/schema";
    var META_IGNORE_OPTIONS = ["removeAdditional", "useDefaults", "coerceTypes", "strictDefaults"];
    var META_SUPPORT_DATA = ["/properties"];
    function Ajv2(opts) {
      if (!(this instanceof Ajv2))
        return new Ajv2(opts);
      opts = this._opts = util2.copy(opts) || {};
      setLogger(this);
      this._schemas = {};
      this._refs = {};
      this._fragments = {};
      this._formats = formats(opts.format);
      this._cache = opts.cache || new Cache();
      this._loadingSchemas = {};
      this._compilations = [];
      this.RULES = rules();
      this._getId = chooseGetId(opts);
      opts.loopRequired = opts.loopRequired || Infinity;
      if (opts.errorDataPath == "property")
        opts._errorDataPathProperty = true;
      if (opts.serialize === void 0)
        opts.serialize = stableStringify;
      this._metaOpts = getMetaSchemaOptions(this);
      if (opts.formats)
        addInitialFormats(this);
      if (opts.keywords)
        addInitialKeywords(this);
      addDefaultMetaSchema(this);
      if (typeof opts.meta == "object")
        this.addMetaSchema(opts.meta);
      if (opts.nullable)
        this.addKeyword("nullable", { metaSchema: { type: "boolean" } });
      addInitialSchemas(this);
    }
    __name(Ajv2, "Ajv");
    function validate(schemaKeyRef, data) {
      var v;
      if (typeof schemaKeyRef == "string") {
        v = this.getSchema(schemaKeyRef);
        if (!v)
          throw new Error('no schema with key or ref "' + schemaKeyRef + '"');
      } else {
        var schemaObj = this._addSchema(schemaKeyRef);
        v = schemaObj.validate || this._compile(schemaObj);
      }
      var valid = v(data);
      if (v.$async !== true)
        this.errors = v.errors;
      return valid;
    }
    __name(validate, "validate");
    function compile(schema, _meta) {
      var schemaObj = this._addSchema(schema, void 0, _meta);
      return schemaObj.validate || this._compile(schemaObj);
    }
    __name(compile, "compile");
    function addSchema(schema, key, _skipValidation, _meta) {
      if (Array.isArray(schema)) {
        for (var i = 0; i < schema.length; i++)
          this.addSchema(schema[i], void 0, _skipValidation, _meta);
        return this;
      }
      var id = this._getId(schema);
      if (id !== void 0 && typeof id != "string")
        throw new Error("schema id must be string");
      key = resolve.normalizeId(key || id);
      checkUnique(this, key);
      this._schemas[key] = this._addSchema(schema, _skipValidation, _meta, true);
      return this;
    }
    __name(addSchema, "addSchema");
    function addMetaSchema(schema, key, skipValidation) {
      this.addSchema(schema, key, skipValidation, true);
      return this;
    }
    __name(addMetaSchema, "addMetaSchema");
    function validateSchema(schema, throwOrLogError) {
      var $schema = schema.$schema;
      if ($schema !== void 0 && typeof $schema != "string")
        throw new Error("$schema must be a string");
      $schema = $schema || this._opts.defaultMeta || defaultMeta(this);
      if (!$schema) {
        this.logger.warn("meta-schema not available");
        this.errors = null;
        return true;
      }
      var valid = this.validate($schema, schema);
      if (!valid && throwOrLogError) {
        var message = "schema is invalid: " + this.errorsText();
        if (this._opts.validateSchema == "log")
          this.logger.error(message);
        else
          throw new Error(message);
      }
      return valid;
    }
    __name(validateSchema, "validateSchema");
    function defaultMeta(self) {
      var meta = self._opts.meta;
      self._opts.defaultMeta = typeof meta == "object" ? self._getId(meta) || meta : self.getSchema(META_SCHEMA_ID) ? META_SCHEMA_ID : void 0;
      return self._opts.defaultMeta;
    }
    __name(defaultMeta, "defaultMeta");
    function getSchema(keyRef) {
      var schemaObj = _getSchemaObj(this, keyRef);
      switch (typeof schemaObj) {
        case "object":
          return schemaObj.validate || this._compile(schemaObj);
        case "string":
          return this.getSchema(schemaObj);
        case "undefined":
          return _getSchemaFragment(this, keyRef);
      }
    }
    __name(getSchema, "getSchema");
    function _getSchemaFragment(self, ref) {
      var res = resolve.schema.call(self, { schema: {} }, ref);
      if (res) {
        var schema = res.schema, root = res.root, baseId = res.baseId;
        var v = compileSchema.call(self, schema, root, void 0, baseId);
        self._fragments[ref] = new SchemaObject({
          ref,
          fragment: true,
          schema,
          root,
          baseId,
          validate: v
        });
        return v;
      }
    }
    __name(_getSchemaFragment, "_getSchemaFragment");
    function _getSchemaObj(self, keyRef) {
      keyRef = resolve.normalizeId(keyRef);
      return self._schemas[keyRef] || self._refs[keyRef] || self._fragments[keyRef];
    }
    __name(_getSchemaObj, "_getSchemaObj");
    function removeSchema(schemaKeyRef) {
      if (schemaKeyRef instanceof RegExp) {
        _removeAllSchemas(this, this._schemas, schemaKeyRef);
        _removeAllSchemas(this, this._refs, schemaKeyRef);
        return this;
      }
      switch (typeof schemaKeyRef) {
        case "undefined":
          _removeAllSchemas(this, this._schemas);
          _removeAllSchemas(this, this._refs);
          this._cache.clear();
          return this;
        case "string":
          var schemaObj = _getSchemaObj(this, schemaKeyRef);
          if (schemaObj)
            this._cache.del(schemaObj.cacheKey);
          delete this._schemas[schemaKeyRef];
          delete this._refs[schemaKeyRef];
          return this;
        case "object":
          var serialize = this._opts.serialize;
          var cacheKey = serialize ? serialize(schemaKeyRef) : schemaKeyRef;
          this._cache.del(cacheKey);
          var id = this._getId(schemaKeyRef);
          if (id) {
            id = resolve.normalizeId(id);
            delete this._schemas[id];
            delete this._refs[id];
          }
      }
      return this;
    }
    __name(removeSchema, "removeSchema");
    function _removeAllSchemas(self, schemas, regex) {
      for (var keyRef in schemas) {
        var schemaObj = schemas[keyRef];
        if (!schemaObj.meta && (!regex || regex.test(keyRef))) {
          self._cache.del(schemaObj.cacheKey);
          delete schemas[keyRef];
        }
      }
    }
    __name(_removeAllSchemas, "_removeAllSchemas");
    function _addSchema(schema, skipValidation, meta, shouldAddSchema) {
      if (typeof schema != "object" && typeof schema != "boolean")
        throw new Error("schema should be object or boolean");
      var serialize = this._opts.serialize;
      var cacheKey = serialize ? serialize(schema) : schema;
      var cached = this._cache.get(cacheKey);
      if (cached)
        return cached;
      shouldAddSchema = shouldAddSchema || this._opts.addUsedSchema !== false;
      var id = resolve.normalizeId(this._getId(schema));
      if (id && shouldAddSchema)
        checkUnique(this, id);
      var willValidate = this._opts.validateSchema !== false && !skipValidation;
      var recursiveMeta;
      if (willValidate && !(recursiveMeta = id && id == resolve.normalizeId(schema.$schema)))
        this.validateSchema(schema, true);
      var localRefs = resolve.ids.call(this, schema);
      var schemaObj = new SchemaObject({
        id,
        schema,
        localRefs,
        cacheKey,
        meta
      });
      if (id[0] != "#" && shouldAddSchema)
        this._refs[id] = schemaObj;
      this._cache.put(cacheKey, schemaObj);
      if (willValidate && recursiveMeta)
        this.validateSchema(schema, true);
      return schemaObj;
    }
    __name(_addSchema, "_addSchema");
    function _compile(schemaObj, root) {
      if (schemaObj.compiling) {
        schemaObj.validate = callValidate;
        callValidate.schema = schemaObj.schema;
        callValidate.errors = null;
        callValidate.root = root ? root : callValidate;
        if (schemaObj.schema.$async === true)
          callValidate.$async = true;
        return callValidate;
      }
      schemaObj.compiling = true;
      var currentOpts;
      if (schemaObj.meta) {
        currentOpts = this._opts;
        this._opts = this._metaOpts;
      }
      var v;
      try {
        v = compileSchema.call(this, schemaObj.schema, root, schemaObj.localRefs);
      } catch (e) {
        delete schemaObj.validate;
        throw e;
      } finally {
        schemaObj.compiling = false;
        if (schemaObj.meta)
          this._opts = currentOpts;
      }
      schemaObj.validate = v;
      schemaObj.refs = v.refs;
      schemaObj.refVal = v.refVal;
      schemaObj.root = v.root;
      return v;
      function callValidate() {
        var _validate = schemaObj.validate;
        var result = _validate.apply(this, arguments);
        callValidate.errors = _validate.errors;
        return result;
      }
      __name(callValidate, "callValidate");
    }
    __name(_compile, "_compile");
    function chooseGetId(opts) {
      switch (opts.schemaId) {
        case "auto":
          return _get$IdOrId;
        case "id":
          return _getId;
        default:
          return _get$Id;
      }
    }
    __name(chooseGetId, "chooseGetId");
    function _getId(schema) {
      if (schema.$id)
        this.logger.warn("schema $id ignored", schema.$id);
      return schema.id;
    }
    __name(_getId, "_getId");
    function _get$Id(schema) {
      if (schema.id)
        this.logger.warn("schema id ignored", schema.id);
      return schema.$id;
    }
    __name(_get$Id, "_get$Id");
    function _get$IdOrId(schema) {
      if (schema.$id && schema.id && schema.$id != schema.id)
        throw new Error("schema $id is different from id");
      return schema.$id || schema.id;
    }
    __name(_get$IdOrId, "_get$IdOrId");
    function errorsText(errors, options) {
      errors = errors || this.errors;
      if (!errors)
        return "No errors";
      options = options || {};
      var separator = options.separator === void 0 ? ", " : options.separator;
      var dataVar = options.dataVar === void 0 ? "data" : options.dataVar;
      var text = "";
      for (var i = 0; i < errors.length; i++) {
        var e = errors[i];
        if (e)
          text += dataVar + e.dataPath + " " + e.message + separator;
      }
      return text.slice(0, -separator.length);
    }
    __name(errorsText, "errorsText");
    function addFormat2(name, format) {
      if (typeof format == "string")
        format = new RegExp(format);
      this._formats[name] = format;
      return this;
    }
    __name(addFormat2, "addFormat");
    function addDefaultMetaSchema(self) {
      var $dataSchema;
      if (self._opts.$data) {
        $dataSchema = require_data2();
        self.addMetaSchema($dataSchema, $dataSchema.$id, true);
      }
      if (self._opts.meta === false)
        return;
      var metaSchema = require_json_schema_draft_07();
      if (self._opts.$data)
        metaSchema = $dataMetaSchema(metaSchema, META_SUPPORT_DATA);
      self.addMetaSchema(metaSchema, META_SCHEMA_ID, true);
      self._refs["http://json-schema.org/schema"] = META_SCHEMA_ID;
    }
    __name(addDefaultMetaSchema, "addDefaultMetaSchema");
    function addInitialSchemas(self) {
      var optsSchemas = self._opts.schemas;
      if (!optsSchemas)
        return;
      if (Array.isArray(optsSchemas))
        self.addSchema(optsSchemas);
      else
        for (var key in optsSchemas)
          self.addSchema(optsSchemas[key], key);
    }
    __name(addInitialSchemas, "addInitialSchemas");
    function addInitialFormats(self) {
      for (var name in self._opts.formats) {
        var format = self._opts.formats[name];
        self.addFormat(name, format);
      }
    }
    __name(addInitialFormats, "addInitialFormats");
    function addInitialKeywords(self) {
      for (var name in self._opts.keywords) {
        var keyword = self._opts.keywords[name];
        self.addKeyword(name, keyword);
      }
    }
    __name(addInitialKeywords, "addInitialKeywords");
    function checkUnique(self, id) {
      if (self._schemas[id] || self._refs[id])
        throw new Error('schema with key or id "' + id + '" already exists');
    }
    __name(checkUnique, "checkUnique");
    function getMetaSchemaOptions(self) {
      var metaOpts = util2.copy(self._opts);
      for (var i = 0; i < META_IGNORE_OPTIONS.length; i++)
        delete metaOpts[META_IGNORE_OPTIONS[i]];
      return metaOpts;
    }
    __name(getMetaSchemaOptions, "getMetaSchemaOptions");
    function setLogger(self) {
      var logger2 = self._opts.logger;
      if (logger2 === false) {
        self.logger = { log: noop, warn: noop, error: noop };
      } else {
        if (logger2 === void 0)
          logger2 = console;
        if (!(typeof logger2 == "object" && logger2.log && logger2.warn && logger2.error))
          throw new Error("logger must implement log, warn and error methods");
        self.logger = logger2;
      }
    }
    __name(setLogger, "setLogger");
    function noop() {
    }
    __name(noop, "noop");
  }
});

// node_modules/hono/dist/utils/body.js
var parseBody = /* @__PURE__ */ __name(async (request, options = /* @__PURE__ */ Object.create(null)) => {
  const { all = false, dot = false } = options;
  const headers = request instanceof HonoRequest ? request.raw.headers : request.headers;
  const contentType = headers.get("Content-Type");
  if (contentType !== null && contentType.startsWith("multipart/form-data") || contentType !== null && contentType.startsWith("application/x-www-form-urlencoded")) {
    return parseFormData(request, { all, dot });
  }
  return {};
}, "parseBody");
async function parseFormData(request, options) {
  const formData = await request.formData();
  if (formData) {
    return convertFormDataToBodyData(formData, options);
  }
  return {};
}
__name(parseFormData, "parseFormData");
function convertFormDataToBodyData(formData, options) {
  const form = /* @__PURE__ */ Object.create(null);
  formData.forEach((value, key) => {
    const shouldParseAllValues = options.all || key.endsWith("[]");
    if (!shouldParseAllValues) {
      form[key] = value;
    } else {
      handleParsingAllValues(form, key, value);
    }
  });
  if (options.dot) {
    Object.entries(form).forEach(([key, value]) => {
      const shouldParseDotValues = key.includes(".");
      if (shouldParseDotValues) {
        handleParsingNestedValues(form, key, value);
        delete form[key];
      }
    });
  }
  return form;
}
__name(convertFormDataToBodyData, "convertFormDataToBodyData");
var handleParsingAllValues = /* @__PURE__ */ __name((form, key, value) => {
  if (form[key] !== void 0) {
    if (Array.isArray(form[key])) {
      ;
      form[key].push(value);
    } else {
      form[key] = [form[key], value];
    }
  } else {
    form[key] = value;
  }
}, "handleParsingAllValues");
var handleParsingNestedValues = /* @__PURE__ */ __name((form, key, value) => {
  let nestedForm = form;
  const keys = key.split(".");
  keys.forEach((key2, index) => {
    if (index === keys.length - 1) {
      nestedForm[key2] = value;
    } else {
      if (!nestedForm[key2] || typeof nestedForm[key2] !== "object" || Array.isArray(nestedForm[key2]) || nestedForm[key2] instanceof File) {
        nestedForm[key2] = /* @__PURE__ */ Object.create(null);
      }
      nestedForm = nestedForm[key2];
    }
  });
}, "handleParsingNestedValues");

// node_modules/hono/dist/utils/url.js
var splitPath = /* @__PURE__ */ __name((path) => {
  const paths = path.split("/");
  if (paths[0] === "") {
    paths.shift();
  }
  return paths;
}, "splitPath");
var splitRoutingPath = /* @__PURE__ */ __name((routePath) => {
  const { groups, path } = extractGroupsFromPath(routePath);
  const paths = splitPath(path);
  return replaceGroupMarks(paths, groups);
}, "splitRoutingPath");
var extractGroupsFromPath = /* @__PURE__ */ __name((path) => {
  const groups = [];
  path = path.replace(/\{[^}]+\}/g, (match, index) => {
    const mark = `@${index}`;
    groups.push([mark, match]);
    return mark;
  });
  return { groups, path };
}, "extractGroupsFromPath");
var replaceGroupMarks = /* @__PURE__ */ __name((paths, groups) => {
  for (let i = groups.length - 1; i >= 0; i--) {
    const [mark] = groups[i];
    for (let j = paths.length - 1; j >= 0; j--) {
      if (paths[j].includes(mark)) {
        paths[j] = paths[j].replace(mark, groups[i][1]);
        break;
      }
    }
  }
  return paths;
}, "replaceGroupMarks");
var patternCache = {};
var getPattern = /* @__PURE__ */ __name((label) => {
  if (label === "*") {
    return "*";
  }
  const match = label.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);
  if (match) {
    if (!patternCache[label]) {
      if (match[2]) {
        patternCache[label] = [label, match[1], new RegExp("^" + match[2] + "$")];
      } else {
        patternCache[label] = [label, match[1], true];
      }
    }
    return patternCache[label];
  }
  return null;
}, "getPattern");
var tryDecodeURI = /* @__PURE__ */ __name((str) => {
  try {
    return decodeURI(str);
  } catch {
    return str.replace(/(?:%[0-9A-Fa-f]{2})+/g, (match) => {
      try {
        return decodeURI(match);
      } catch {
        return match;
      }
    });
  }
}, "tryDecodeURI");
var getPath = /* @__PURE__ */ __name((request) => {
  const url = request.url;
  const start = url.indexOf("/", 8);
  let i = start;
  for (; i < url.length; i++) {
    const charCode = url.charCodeAt(i);
    if (charCode === 37) {
      const queryIndex = url.indexOf("?", i);
      const path = url.slice(start, queryIndex === -1 ? void 0 : queryIndex);
      return tryDecodeURI(path.includes("%25") ? path.replace(/%25/g, "%2525") : path);
    } else if (charCode === 63) {
      break;
    }
  }
  return url.slice(start, i);
}, "getPath");
var getPathNoStrict = /* @__PURE__ */ __name((request) => {
  const result = getPath(request);
  return result.length > 1 && result[result.length - 1] === "/" ? result.slice(0, -1) : result;
}, "getPathNoStrict");
var mergePath = /* @__PURE__ */ __name((...paths) => {
  let p = "";
  let endsWithSlash = false;
  for (let path of paths) {
    if (p[p.length - 1] === "/") {
      p = p.slice(0, -1);
      endsWithSlash = true;
    }
    if (path[0] !== "/") {
      path = `/${path}`;
    }
    if (path === "/" && endsWithSlash) {
      p = `${p}/`;
    } else if (path !== "/") {
      p = `${p}${path}`;
    }
    if (path === "/" && p === "") {
      p = "/";
    }
  }
  return p;
}, "mergePath");
var checkOptionalParameter = /* @__PURE__ */ __name((path) => {
  if (!path.match(/\:.+\?$/)) {
    return null;
  }
  const segments = path.split("/");
  const results = [];
  let basePath = "";
  segments.forEach((segment) => {
    if (segment !== "" && !/\:/.test(segment)) {
      basePath += "/" + segment;
    } else if (/\:/.test(segment)) {
      if (/\?/.test(segment)) {
        if (results.length === 0 && basePath === "") {
          results.push("/");
        } else {
          results.push(basePath);
        }
        const optionalSegment = segment.replace("?", "");
        basePath += "/" + optionalSegment;
        results.push(basePath);
      } else {
        basePath += "/" + segment;
      }
    }
  });
  return results.filter((v, i, a) => a.indexOf(v) === i);
}, "checkOptionalParameter");
var _decodeURI = /* @__PURE__ */ __name((value) => {
  if (!/[%+]/.test(value)) {
    return value;
  }
  if (value.indexOf("+") !== -1) {
    value = value.replace(/\+/g, " ");
  }
  return /%/.test(value) ? decodeURIComponent_(value) : value;
}, "_decodeURI");
var _getQueryParam = /* @__PURE__ */ __name((url, key, multiple) => {
  let encoded;
  if (!multiple && key && !/[%+]/.test(key)) {
    let keyIndex2 = url.indexOf(`?${key}`, 8);
    if (keyIndex2 === -1) {
      keyIndex2 = url.indexOf(`&${key}`, 8);
    }
    while (keyIndex2 !== -1) {
      const trailingKeyCode = url.charCodeAt(keyIndex2 + key.length + 1);
      if (trailingKeyCode === 61) {
        const valueIndex = keyIndex2 + key.length + 2;
        const endIndex = url.indexOf("&", valueIndex);
        return _decodeURI(url.slice(valueIndex, endIndex === -1 ? void 0 : endIndex));
      } else if (trailingKeyCode == 38 || isNaN(trailingKeyCode)) {
        return "";
      }
      keyIndex2 = url.indexOf(`&${key}`, keyIndex2 + 1);
    }
    encoded = /[%+]/.test(url);
    if (!encoded) {
      return void 0;
    }
  }
  const results = {};
  encoded ??= /[%+]/.test(url);
  let keyIndex = url.indexOf("?", 8);
  while (keyIndex !== -1) {
    const nextKeyIndex = url.indexOf("&", keyIndex + 1);
    let valueIndex = url.indexOf("=", keyIndex);
    if (valueIndex > nextKeyIndex && nextKeyIndex !== -1) {
      valueIndex = -1;
    }
    let name = url.slice(
      keyIndex + 1,
      valueIndex === -1 ? nextKeyIndex === -1 ? void 0 : nextKeyIndex : valueIndex
    );
    if (encoded) {
      name = _decodeURI(name);
    }
    keyIndex = nextKeyIndex;
    if (name === "") {
      continue;
    }
    let value;
    if (valueIndex === -1) {
      value = "";
    } else {
      value = url.slice(valueIndex + 1, nextKeyIndex === -1 ? void 0 : nextKeyIndex);
      if (encoded) {
        value = _decodeURI(value);
      }
    }
    if (multiple) {
      if (!(results[name] && Array.isArray(results[name]))) {
        results[name] = [];
      }
      ;
      results[name].push(value);
    } else {
      results[name] ??= value;
    }
  }
  return key ? results[key] : results;
}, "_getQueryParam");
var getQueryParam = _getQueryParam;
var getQueryParams = /* @__PURE__ */ __name((url, key) => {
  return _getQueryParam(url, key, true);
}, "getQueryParams");
var decodeURIComponent_ = decodeURIComponent;

// node_modules/hono/dist/request.js
var HonoRequest = /* @__PURE__ */ __name(class {
  raw;
  #validatedData;
  #matchResult;
  routeIndex = 0;
  path;
  bodyCache = {};
  constructor(request, path = "/", matchResult = [[]]) {
    this.raw = request;
    this.path = path;
    this.#matchResult = matchResult;
    this.#validatedData = {};
  }
  param(key) {
    return key ? this.getDecodedParam(key) : this.getAllDecodedParams();
  }
  getDecodedParam(key) {
    const paramKey = this.#matchResult[0][this.routeIndex][1][key];
    const param = this.getParamValue(paramKey);
    return param ? /\%/.test(param) ? decodeURIComponent_(param) : param : void 0;
  }
  getAllDecodedParams() {
    const decoded = {};
    const keys = Object.keys(this.#matchResult[0][this.routeIndex][1]);
    for (const key of keys) {
      const value = this.getParamValue(this.#matchResult[0][this.routeIndex][1][key]);
      if (value && typeof value === "string") {
        decoded[key] = /\%/.test(value) ? decodeURIComponent_(value) : value;
      }
    }
    return decoded;
  }
  getParamValue(paramKey) {
    return this.#matchResult[1] ? this.#matchResult[1][paramKey] : paramKey;
  }
  query(key) {
    return getQueryParam(this.url, key);
  }
  queries(key) {
    return getQueryParams(this.url, key);
  }
  header(name) {
    if (name) {
      return this.raw.headers.get(name.toLowerCase()) ?? void 0;
    }
    const headerData = {};
    this.raw.headers.forEach((value, key) => {
      headerData[key] = value;
    });
    return headerData;
  }
  async parseBody(options) {
    return this.bodyCache.parsedBody ??= await parseBody(this, options);
  }
  cachedBody = (key) => {
    const { bodyCache, raw: raw2 } = this;
    const cachedBody = bodyCache[key];
    if (cachedBody) {
      return cachedBody;
    }
    const anyCachedKey = Object.keys(bodyCache)[0];
    if (anyCachedKey) {
      return bodyCache[anyCachedKey].then((body) => {
        if (anyCachedKey === "json") {
          body = JSON.stringify(body);
        }
        return new Response(body)[key]();
      });
    }
    return bodyCache[key] = raw2[key]();
  };
  json() {
    return this.cachedBody("json");
  }
  text() {
    return this.cachedBody("text");
  }
  arrayBuffer() {
    return this.cachedBody("arrayBuffer");
  }
  blob() {
    return this.cachedBody("blob");
  }
  formData() {
    return this.cachedBody("formData");
  }
  addValidatedData(target, data) {
    this.#validatedData[target] = data;
  }
  valid(target) {
    return this.#validatedData[target];
  }
  get url() {
    return this.raw.url;
  }
  get method() {
    return this.raw.method;
  }
  get matchedRoutes() {
    return this.#matchResult[0].map(([[, route]]) => route);
  }
  get routePath() {
    return this.#matchResult[0].map(([[, route]]) => route)[this.routeIndex].path;
  }
}, "HonoRequest");

// node_modules/hono/dist/utils/html.js
var HtmlEscapedCallbackPhase = {
  Stringify: 1,
  BeforeStream: 2,
  Stream: 3
};
var raw = /* @__PURE__ */ __name((value, callbacks) => {
  const escapedString = new String(value);
  escapedString.isEscaped = true;
  escapedString.callbacks = callbacks;
  return escapedString;
}, "raw");
var resolveCallback = /* @__PURE__ */ __name(async (str, phase, preserveCallbacks, context, buffer) => {
  const callbacks = str.callbacks;
  if (!callbacks?.length) {
    return Promise.resolve(str);
  }
  if (buffer) {
    buffer[0] += str;
  } else {
    buffer = [str];
  }
  const resStr = Promise.all(callbacks.map((c) => c({ phase, buffer, context }))).then(
    (res) => Promise.all(
      res.filter(Boolean).map((str2) => resolveCallback(str2, phase, false, context, buffer))
    ).then(() => buffer[0])
  );
  if (preserveCallbacks) {
    return raw(await resStr, callbacks);
  } else {
    return resStr;
  }
}, "resolveCallback");

// node_modules/hono/dist/context.js
var TEXT_PLAIN = "text/plain; charset=UTF-8";
var setHeaders = /* @__PURE__ */ __name((headers, map = {}) => {
  Object.entries(map).forEach(([key, value]) => headers.set(key, value));
  return headers;
}, "setHeaders");
var Context = /* @__PURE__ */ __name(class {
  #rawRequest;
  #req;
  env = {};
  #var;
  finalized = false;
  error;
  #status = 200;
  #executionCtx;
  #headers;
  #preparedHeaders;
  #res;
  #isFresh = true;
  #layout;
  #renderer;
  #notFoundHandler;
  #matchResult;
  #path;
  constructor(req, options) {
    this.#rawRequest = req;
    if (options) {
      this.#executionCtx = options.executionCtx;
      this.env = options.env;
      this.#notFoundHandler = options.notFoundHandler;
      this.#path = options.path;
      this.#matchResult = options.matchResult;
    }
  }
  get req() {
    this.#req ??= new HonoRequest(this.#rawRequest, this.#path, this.#matchResult);
    return this.#req;
  }
  get event() {
    if (this.#executionCtx && "respondWith" in this.#executionCtx) {
      return this.#executionCtx;
    } else {
      throw Error("This context has no FetchEvent");
    }
  }
  get executionCtx() {
    if (this.#executionCtx) {
      return this.#executionCtx;
    } else {
      throw Error("This context has no ExecutionContext");
    }
  }
  get res() {
    this.#isFresh = false;
    return this.#res ||= new Response("404 Not Found", { status: 404 });
  }
  set res(_res) {
    this.#isFresh = false;
    if (this.#res && _res) {
      this.#res.headers.delete("content-type");
      for (const [k, v] of this.#res.headers.entries()) {
        if (k === "set-cookie") {
          const cookies = this.#res.headers.getSetCookie();
          _res.headers.delete("set-cookie");
          for (const cookie of cookies) {
            _res.headers.append("set-cookie", cookie);
          }
        } else {
          _res.headers.set(k, v);
        }
      }
    }
    this.#res = _res;
    this.finalized = true;
  }
  render = (...args) => {
    this.#renderer ??= (content) => this.html(content);
    return this.#renderer(...args);
  };
  setLayout = (layout) => this.#layout = layout;
  getLayout = () => this.#layout;
  setRenderer = (renderer) => {
    this.#renderer = renderer;
  };
  header = (name, value, options) => {
    if (value === void 0) {
      if (this.#headers) {
        this.#headers.delete(name);
      } else if (this.#preparedHeaders) {
        delete this.#preparedHeaders[name.toLocaleLowerCase()];
      }
      if (this.finalized) {
        this.res.headers.delete(name);
      }
      return;
    }
    if (options?.append) {
      if (!this.#headers) {
        this.#isFresh = false;
        this.#headers = new Headers(this.#preparedHeaders);
        this.#preparedHeaders = {};
      }
      this.#headers.append(name, value);
    } else {
      if (this.#headers) {
        this.#headers.set(name, value);
      } else {
        this.#preparedHeaders ??= {};
        this.#preparedHeaders[name.toLowerCase()] = value;
      }
    }
    if (this.finalized) {
      if (options?.append) {
        this.res.headers.append(name, value);
      } else {
        this.res.headers.set(name, value);
      }
    }
  };
  status = (status) => {
    this.#isFresh = false;
    this.#status = status;
  };
  set = (key, value) => {
    this.#var ??= {};
    this.#var[key] = value;
  };
  get = (key) => {
    return this.#var ? this.#var[key] : void 0;
  };
  get var() {
    return { ...this.#var };
  }
  newResponse = (data, arg, headers) => {
    if (this.#isFresh && !headers && !arg && this.#status === 200) {
      return new Response(data, {
        headers: this.#preparedHeaders
      });
    }
    if (arg && typeof arg !== "number") {
      const header = new Headers(arg.headers);
      if (this.#headers) {
        this.#headers.forEach((v, k) => {
          if (k === "set-cookie") {
            header.append(k, v);
          } else {
            header.set(k, v);
          }
        });
      }
      const headers2 = setHeaders(header, this.#preparedHeaders);
      return new Response(data, {
        headers: headers2,
        status: arg.status ?? this.#status
      });
    }
    const status = typeof arg === "number" ? arg : this.#status;
    this.#preparedHeaders ??= {};
    this.#headers ??= new Headers();
    setHeaders(this.#headers, this.#preparedHeaders);
    if (this.#res) {
      this.#res.headers.forEach((v, k) => {
        if (k === "set-cookie") {
          this.#headers?.append(k, v);
        } else {
          this.#headers?.set(k, v);
        }
      });
      setHeaders(this.#headers, this.#preparedHeaders);
    }
    headers ??= {};
    for (const [k, v] of Object.entries(headers)) {
      if (typeof v === "string") {
        this.#headers.set(k, v);
      } else {
        this.#headers.delete(k);
        for (const v2 of v) {
          this.#headers.append(k, v2);
        }
      }
    }
    return new Response(data, {
      status,
      headers: this.#headers
    });
  };
  body = (data, arg, headers) => {
    return typeof arg === "number" ? this.newResponse(data, arg, headers) : this.newResponse(data, arg);
  };
  text = (text, arg, headers) => {
    if (!this.#preparedHeaders) {
      if (this.#isFresh && !headers && !arg) {
        return new Response(text);
      }
      this.#preparedHeaders = {};
    }
    this.#preparedHeaders["content-type"] = TEXT_PLAIN;
    return typeof arg === "number" ? this.newResponse(text, arg, headers) : this.newResponse(text, arg);
  };
  json = (object, arg, headers) => {
    const body = JSON.stringify(object);
    this.#preparedHeaders ??= {};
    this.#preparedHeaders["content-type"] = "application/json; charset=UTF-8";
    return typeof arg === "number" ? this.newResponse(body, arg, headers) : this.newResponse(body, arg);
  };
  html = (html, arg, headers) => {
    this.#preparedHeaders ??= {};
    this.#preparedHeaders["content-type"] = "text/html; charset=UTF-8";
    if (typeof html === "object") {
      if (!(html instanceof Promise)) {
        html = html.toString();
      }
      if (html instanceof Promise) {
        return html.then((html2) => resolveCallback(html2, HtmlEscapedCallbackPhase.Stringify, false, {})).then((html2) => {
          return typeof arg === "number" ? this.newResponse(html2, arg, headers) : this.newResponse(html2, arg);
        });
      }
    }
    return typeof arg === "number" ? this.newResponse(html, arg, headers) : this.newResponse(html, arg);
  };
  redirect = (location, status) => {
    this.#headers ??= new Headers();
    this.#headers.set("Location", location);
    return this.newResponse(null, status ?? 302);
  };
  notFound = () => {
    this.#notFoundHandler ??= () => new Response();
    return this.#notFoundHandler(this);
  };
}, "Context");

// node_modules/hono/dist/compose.js
var compose = /* @__PURE__ */ __name((middleware, onError, onNotFound) => {
  return (context, next) => {
    let index = -1;
    return dispatch(0);
    async function dispatch(i) {
      if (i <= index) {
        throw new Error("next() called multiple times");
      }
      index = i;
      let res;
      let isError = false;
      let handler;
      if (middleware[i]) {
        handler = middleware[i][0][0];
        if (context instanceof Context) {
          context.req.routeIndex = i;
        }
      } else {
        handler = i === middleware.length && next || void 0;
      }
      if (!handler) {
        if (context instanceof Context && context.finalized === false && onNotFound) {
          res = await onNotFound(context);
        }
      } else {
        try {
          res = await handler(context, () => {
            return dispatch(i + 1);
          });
        } catch (err) {
          if (err instanceof Error && context instanceof Context && onError) {
            context.error = err;
            res = await onError(err, context);
            isError = true;
          } else {
            throw err;
          }
        }
      }
      if (res && (context.finalized === false || isError)) {
        context.res = res;
      }
      return context;
    }
    __name(dispatch, "dispatch");
  };
}, "compose");

// node_modules/hono/dist/router.js
var METHOD_NAME_ALL = "ALL";
var METHOD_NAME_ALL_LOWERCASE = "all";
var METHODS = ["get", "post", "put", "delete", "options", "patch"];
var MESSAGE_MATCHER_IS_ALREADY_BUILT = "Can not add a route since the matcher is already built.";
var UnsupportedPathError = /* @__PURE__ */ __name(class extends Error {
}, "UnsupportedPathError");

// node_modules/hono/dist/hono-base.js
var COMPOSED_HANDLER = Symbol("composedHandler");
var notFoundHandler = /* @__PURE__ */ __name((c) => {
  return c.text("404 Not Found", 404);
}, "notFoundHandler");
var errorHandler = /* @__PURE__ */ __name((err, c) => {
  if ("getResponse" in err) {
    return err.getResponse();
  }
  console.error(err);
  return c.text("Internal Server Error", 500);
}, "errorHandler");
var Hono = /* @__PURE__ */ __name(class {
  get;
  post;
  put;
  delete;
  options;
  patch;
  all;
  on;
  use;
  router;
  getPath;
  _basePath = "/";
  #path = "/";
  routes = [];
  constructor(options = {}) {
    const allMethods = [...METHODS, METHOD_NAME_ALL_LOWERCASE];
    allMethods.forEach((method) => {
      this[method] = (args1, ...args) => {
        if (typeof args1 === "string") {
          this.#path = args1;
        } else {
          this.addRoute(method, this.#path, args1);
        }
        args.forEach((handler) => {
          if (typeof handler !== "string") {
            this.addRoute(method, this.#path, handler);
          }
        });
        return this;
      };
    });
    this.on = (method, path, ...handlers) => {
      for (const p of [path].flat()) {
        this.#path = p;
        for (const m of [method].flat()) {
          handlers.map((handler) => {
            this.addRoute(m.toUpperCase(), this.#path, handler);
          });
        }
      }
      return this;
    };
    this.use = (arg1, ...handlers) => {
      if (typeof arg1 === "string") {
        this.#path = arg1;
      } else {
        this.#path = "*";
        handlers.unshift(arg1);
      }
      handlers.forEach((handler) => {
        this.addRoute(METHOD_NAME_ALL, this.#path, handler);
      });
      return this;
    };
    const strict = options.strict ?? true;
    delete options.strict;
    Object.assign(this, options);
    this.getPath = strict ? options.getPath ?? getPath : getPathNoStrict;
  }
  clone() {
    const clone = new Hono({
      router: this.router,
      getPath: this.getPath
    });
    clone.routes = this.routes;
    return clone;
  }
  notFoundHandler = notFoundHandler;
  errorHandler = errorHandler;
  route(path, app2) {
    const subApp = this.basePath(path);
    app2.routes.map((r) => {
      let handler;
      if (app2.errorHandler === errorHandler) {
        handler = r.handler;
      } else {
        handler = /* @__PURE__ */ __name(async (c, next) => (await compose([], app2.errorHandler)(c, () => r.handler(c, next))).res, "handler");
        handler[COMPOSED_HANDLER] = r.handler;
      }
      subApp.addRoute(r.method, r.path, handler);
    });
    return this;
  }
  basePath(path) {
    const subApp = this.clone();
    subApp._basePath = mergePath(this._basePath, path);
    return subApp;
  }
  onError = (handler) => {
    this.errorHandler = handler;
    return this;
  };
  notFound = (handler) => {
    this.notFoundHandler = handler;
    return this;
  };
  mount(path, applicationHandler, options) {
    let replaceRequest;
    let optionHandler;
    if (options) {
      if (typeof options === "function") {
        optionHandler = options;
      } else {
        optionHandler = options.optionHandler;
        replaceRequest = options.replaceRequest;
      }
    }
    const getOptions = optionHandler ? (c) => {
      const options2 = optionHandler(c);
      return Array.isArray(options2) ? options2 : [options2];
    } : (c) => {
      let executionContext = void 0;
      try {
        executionContext = c.executionCtx;
      } catch {
      }
      return [c.env, executionContext];
    };
    replaceRequest ||= (() => {
      const mergedPath = mergePath(this._basePath, path);
      const pathPrefixLength = mergedPath === "/" ? 0 : mergedPath.length;
      return (request) => {
        const url = new URL(request.url);
        url.pathname = url.pathname.slice(pathPrefixLength) || "/";
        return new Request(url, request);
      };
    })();
    const handler = /* @__PURE__ */ __name(async (c, next) => {
      const res = await applicationHandler(replaceRequest(c.req.raw), ...getOptions(c));
      if (res) {
        return res;
      }
      await next();
    }, "handler");
    this.addRoute(METHOD_NAME_ALL, mergePath(path, "*"), handler);
    return this;
  }
  addRoute(method, path, handler) {
    method = method.toUpperCase();
    path = mergePath(this._basePath, path);
    const r = { path, method, handler };
    this.router.add(method, path, [handler, r]);
    this.routes.push(r);
  }
  matchRoute(method, path) {
    return this.router.match(method, path);
  }
  handleError(err, c) {
    if (err instanceof Error) {
      return this.errorHandler(err, c);
    }
    throw err;
  }
  dispatch(request, executionCtx, env, method) {
    if (method === "HEAD") {
      return (async () => new Response(null, await this.dispatch(request, executionCtx, env, "GET")))();
    }
    const path = this.getPath(request, { env });
    const matchResult = this.matchRoute(method, path);
    const c = new Context(request, {
      path,
      matchResult,
      env,
      executionCtx,
      notFoundHandler: this.notFoundHandler
    });
    if (matchResult[0].length === 1) {
      let res;
      try {
        res = matchResult[0][0][0][0](c, async () => {
          c.res = await this.notFoundHandler(c);
        });
      } catch (err) {
        return this.handleError(err, c);
      }
      return res instanceof Promise ? res.then(
        (resolved) => resolved || (c.finalized ? c.res : this.notFoundHandler(c))
      ).catch((err) => this.handleError(err, c)) : res ?? this.notFoundHandler(c);
    }
    const composed = compose(matchResult[0], this.errorHandler, this.notFoundHandler);
    return (async () => {
      try {
        const context = await composed(c);
        if (!context.finalized) {
          throw new Error(
            "Context is not finalized. Did you forget to return a Response object or `await next()`?"
          );
        }
        return context.res;
      } catch (err) {
        return this.handleError(err, c);
      }
    })();
  }
  fetch = (request, ...rest) => {
    return this.dispatch(request, rest[1], rest[0], request.method);
  };
  request = (input, requestInit, Env, executionCtx) => {
    if (input instanceof Request) {
      if (requestInit !== void 0) {
        input = new Request(input, requestInit);
      }
      return this.fetch(input, Env, executionCtx);
    }
    input = input.toString();
    const path = /^https?:\/\//.test(input) ? input : `http://localhost${mergePath("/", input)}`;
    const req = new Request(path, requestInit);
    return this.fetch(req, Env, executionCtx);
  };
  fire = () => {
    addEventListener("fetch", (event) => {
      event.respondWith(this.dispatch(event.request, event, void 0, event.request.method));
    });
  };
}, "Hono");

// node_modules/hono/dist/router/reg-exp-router/node.js
var LABEL_REG_EXP_STR = "[^/]+";
var ONLY_WILDCARD_REG_EXP_STR = ".*";
var TAIL_WILDCARD_REG_EXP_STR = "(?:|/.*)";
var PATH_ERROR = Symbol();
var regExpMetaChars = new Set(".\\+*[^]$()");
function compareKey(a, b) {
  if (a.length === 1) {
    return b.length === 1 ? a < b ? -1 : 1 : -1;
  }
  if (b.length === 1) {
    return 1;
  }
  if (a === ONLY_WILDCARD_REG_EXP_STR || a === TAIL_WILDCARD_REG_EXP_STR) {
    return 1;
  } else if (b === ONLY_WILDCARD_REG_EXP_STR || b === TAIL_WILDCARD_REG_EXP_STR) {
    return -1;
  }
  if (a === LABEL_REG_EXP_STR) {
    return 1;
  } else if (b === LABEL_REG_EXP_STR) {
    return -1;
  }
  return a.length === b.length ? a < b ? -1 : 1 : b.length - a.length;
}
__name(compareKey, "compareKey");
var Node = /* @__PURE__ */ __name(class {
  index;
  varIndex;
  children = /* @__PURE__ */ Object.create(null);
  insert(tokens, index, paramMap, context, pathErrorCheckOnly) {
    if (tokens.length === 0) {
      if (this.index !== void 0) {
        throw PATH_ERROR;
      }
      if (pathErrorCheckOnly) {
        return;
      }
      this.index = index;
      return;
    }
    const [token, ...restTokens] = tokens;
    const pattern = token === "*" ? restTokens.length === 0 ? ["", "", ONLY_WILDCARD_REG_EXP_STR] : ["", "", LABEL_REG_EXP_STR] : token === "/*" ? ["", "", TAIL_WILDCARD_REG_EXP_STR] : token.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);
    let node;
    if (pattern) {
      const name = pattern[1];
      let regexpStr = pattern[2] || LABEL_REG_EXP_STR;
      if (name && pattern[2]) {
        regexpStr = regexpStr.replace(/^\((?!\?:)(?=[^)]+\)$)/, "(?:");
        if (/\((?!\?:)/.test(regexpStr)) {
          throw PATH_ERROR;
        }
      }
      node = this.children[regexpStr];
      if (!node) {
        if (Object.keys(this.children).some(
          (k) => k !== ONLY_WILDCARD_REG_EXP_STR && k !== TAIL_WILDCARD_REG_EXP_STR
        )) {
          throw PATH_ERROR;
        }
        if (pathErrorCheckOnly) {
          return;
        }
        node = this.children[regexpStr] = new Node();
        if (name !== "") {
          node.varIndex = context.varIndex++;
        }
      }
      if (!pathErrorCheckOnly && name !== "") {
        paramMap.push([name, node.varIndex]);
      }
    } else {
      node = this.children[token];
      if (!node) {
        if (Object.keys(this.children).some(
          (k) => k.length > 1 && k !== ONLY_WILDCARD_REG_EXP_STR && k !== TAIL_WILDCARD_REG_EXP_STR
        )) {
          throw PATH_ERROR;
        }
        if (pathErrorCheckOnly) {
          return;
        }
        node = this.children[token] = new Node();
      }
    }
    node.insert(restTokens, index, paramMap, context, pathErrorCheckOnly);
  }
  buildRegExpStr() {
    const childKeys = Object.keys(this.children).sort(compareKey);
    const strList = childKeys.map((k) => {
      const c = this.children[k];
      return (typeof c.varIndex === "number" ? `(${k})@${c.varIndex}` : regExpMetaChars.has(k) ? `\\${k}` : k) + c.buildRegExpStr();
    });
    if (typeof this.index === "number") {
      strList.unshift(`#${this.index}`);
    }
    if (strList.length === 0) {
      return "";
    }
    if (strList.length === 1) {
      return strList[0];
    }
    return "(?:" + strList.join("|") + ")";
  }
}, "Node");

// node_modules/hono/dist/router/reg-exp-router/trie.js
var Trie = /* @__PURE__ */ __name(class {
  context = { varIndex: 0 };
  root = new Node();
  insert(path, index, pathErrorCheckOnly) {
    const paramAssoc = [];
    const groups = [];
    for (let i = 0; ; ) {
      let replaced = false;
      path = path.replace(/\{[^}]+\}/g, (m) => {
        const mark = `@\\${i}`;
        groups[i] = [mark, m];
        i++;
        replaced = true;
        return mark;
      });
      if (!replaced) {
        break;
      }
    }
    const tokens = path.match(/(?::[^\/]+)|(?:\/\*$)|./g) || [];
    for (let i = groups.length - 1; i >= 0; i--) {
      const [mark] = groups[i];
      for (let j = tokens.length - 1; j >= 0; j--) {
        if (tokens[j].indexOf(mark) !== -1) {
          tokens[j] = tokens[j].replace(mark, groups[i][1]);
          break;
        }
      }
    }
    this.root.insert(tokens, index, paramAssoc, this.context, pathErrorCheckOnly);
    return paramAssoc;
  }
  buildRegExp() {
    let regexp = this.root.buildRegExpStr();
    if (regexp === "") {
      return [/^$/, [], []];
    }
    let captureIndex = 0;
    const indexReplacementMap = [];
    const paramReplacementMap = [];
    regexp = regexp.replace(/#(\d+)|@(\d+)|\.\*\$/g, (_, handlerIndex, paramIndex) => {
      if (typeof handlerIndex !== "undefined") {
        indexReplacementMap[++captureIndex] = Number(handlerIndex);
        return "$()";
      }
      if (typeof paramIndex !== "undefined") {
        paramReplacementMap[Number(paramIndex)] = ++captureIndex;
        return "";
      }
      return "";
    });
    return [new RegExp(`^${regexp}`), indexReplacementMap, paramReplacementMap];
  }
}, "Trie");

// node_modules/hono/dist/router/reg-exp-router/router.js
var emptyParam = [];
var nullMatcher = [/^$/, [], /* @__PURE__ */ Object.create(null)];
var wildcardRegExpCache = /* @__PURE__ */ Object.create(null);
function buildWildcardRegExp(path) {
  return wildcardRegExpCache[path] ??= new RegExp(
    path === "*" ? "" : `^${path.replace(
      /\/\*$|([.\\+*[^\]$()])/g,
      (_, metaChar) => metaChar ? `\\${metaChar}` : "(?:|/.*)"
    )}$`
  );
}
__name(buildWildcardRegExp, "buildWildcardRegExp");
function clearWildcardRegExpCache() {
  wildcardRegExpCache = /* @__PURE__ */ Object.create(null);
}
__name(clearWildcardRegExpCache, "clearWildcardRegExpCache");
function buildMatcherFromPreprocessedRoutes(routes) {
  const trie = new Trie();
  const handlerData = [];
  if (routes.length === 0) {
    return nullMatcher;
  }
  const routesWithStaticPathFlag = routes.map(
    (route) => [!/\*|\/:/.test(route[0]), ...route]
  ).sort(
    ([isStaticA, pathA], [isStaticB, pathB]) => isStaticA ? 1 : isStaticB ? -1 : pathA.length - pathB.length
  );
  const staticMap = /* @__PURE__ */ Object.create(null);
  for (let i = 0, j = -1, len = routesWithStaticPathFlag.length; i < len; i++) {
    const [pathErrorCheckOnly, path, handlers] = routesWithStaticPathFlag[i];
    if (pathErrorCheckOnly) {
      staticMap[path] = [handlers.map(([h]) => [h, /* @__PURE__ */ Object.create(null)]), emptyParam];
    } else {
      j++;
    }
    let paramAssoc;
    try {
      paramAssoc = trie.insert(path, j, pathErrorCheckOnly);
    } catch (e) {
      throw e === PATH_ERROR ? new UnsupportedPathError(path) : e;
    }
    if (pathErrorCheckOnly) {
      continue;
    }
    handlerData[j] = handlers.map(([h, paramCount]) => {
      const paramIndexMap = /* @__PURE__ */ Object.create(null);
      paramCount -= 1;
      for (; paramCount >= 0; paramCount--) {
        const [key, value] = paramAssoc[paramCount];
        paramIndexMap[key] = value;
      }
      return [h, paramIndexMap];
    });
  }
  const [regexp, indexReplacementMap, paramReplacementMap] = trie.buildRegExp();
  for (let i = 0, len = handlerData.length; i < len; i++) {
    for (let j = 0, len2 = handlerData[i].length; j < len2; j++) {
      const map = handlerData[i][j]?.[1];
      if (!map) {
        continue;
      }
      const keys = Object.keys(map);
      for (let k = 0, len3 = keys.length; k < len3; k++) {
        map[keys[k]] = paramReplacementMap[map[keys[k]]];
      }
    }
  }
  const handlerMap = [];
  for (const i in indexReplacementMap) {
    handlerMap[i] = handlerData[indexReplacementMap[i]];
  }
  return [regexp, handlerMap, staticMap];
}
__name(buildMatcherFromPreprocessedRoutes, "buildMatcherFromPreprocessedRoutes");
function findMiddleware(middleware, path) {
  if (!middleware) {
    return void 0;
  }
  for (const k of Object.keys(middleware).sort((a, b) => b.length - a.length)) {
    if (buildWildcardRegExp(k).test(path)) {
      return [...middleware[k]];
    }
  }
  return void 0;
}
__name(findMiddleware, "findMiddleware");
var RegExpRouter = /* @__PURE__ */ __name(class {
  name = "RegExpRouter";
  middleware;
  routes;
  constructor() {
    this.middleware = { [METHOD_NAME_ALL]: /* @__PURE__ */ Object.create(null) };
    this.routes = { [METHOD_NAME_ALL]: /* @__PURE__ */ Object.create(null) };
  }
  add(method, path, handler) {
    const { middleware, routes } = this;
    if (!middleware || !routes) {
      throw new Error(MESSAGE_MATCHER_IS_ALREADY_BUILT);
    }
    if (!middleware[method]) {
      ;
      [middleware, routes].forEach((handlerMap) => {
        handlerMap[method] = /* @__PURE__ */ Object.create(null);
        Object.keys(handlerMap[METHOD_NAME_ALL]).forEach((p) => {
          handlerMap[method][p] = [...handlerMap[METHOD_NAME_ALL][p]];
        });
      });
    }
    if (path === "/*") {
      path = "*";
    }
    const paramCount = (path.match(/\/:/g) || []).length;
    if (/\*$/.test(path)) {
      const re = buildWildcardRegExp(path);
      if (method === METHOD_NAME_ALL) {
        Object.keys(middleware).forEach((m) => {
          middleware[m][path] ||= findMiddleware(middleware[m], path) || findMiddleware(middleware[METHOD_NAME_ALL], path) || [];
        });
      } else {
        middleware[method][path] ||= findMiddleware(middleware[method], path) || findMiddleware(middleware[METHOD_NAME_ALL], path) || [];
      }
      Object.keys(middleware).forEach((m) => {
        if (method === METHOD_NAME_ALL || method === m) {
          Object.keys(middleware[m]).forEach((p) => {
            re.test(p) && middleware[m][p].push([handler, paramCount]);
          });
        }
      });
      Object.keys(routes).forEach((m) => {
        if (method === METHOD_NAME_ALL || method === m) {
          Object.keys(routes[m]).forEach(
            (p) => re.test(p) && routes[m][p].push([handler, paramCount])
          );
        }
      });
      return;
    }
    const paths = checkOptionalParameter(path) || [path];
    for (let i = 0, len = paths.length; i < len; i++) {
      const path2 = paths[i];
      Object.keys(routes).forEach((m) => {
        if (method === METHOD_NAME_ALL || method === m) {
          routes[m][path2] ||= [
            ...findMiddleware(middleware[m], path2) || findMiddleware(middleware[METHOD_NAME_ALL], path2) || []
          ];
          routes[m][path2].push([handler, paramCount - len + i + 1]);
        }
      });
    }
  }
  match(method, path) {
    clearWildcardRegExpCache();
    const matchers = this.buildAllMatchers();
    this.match = (method2, path2) => {
      const matcher = matchers[method2] || matchers[METHOD_NAME_ALL];
      const staticMatch = matcher[2][path2];
      if (staticMatch) {
        return staticMatch;
      }
      const match = path2.match(matcher[0]);
      if (!match) {
        return [[], emptyParam];
      }
      const index = match.indexOf("", 1);
      return [matcher[1][index], match];
    };
    return this.match(method, path);
  }
  buildAllMatchers() {
    const matchers = /* @__PURE__ */ Object.create(null);
    [...Object.keys(this.routes), ...Object.keys(this.middleware)].forEach((method) => {
      matchers[method] ||= this.buildMatcher(method);
    });
    this.middleware = this.routes = void 0;
    return matchers;
  }
  buildMatcher(method) {
    const routes = [];
    let hasOwnRoute = method === METHOD_NAME_ALL;
    [this.middleware, this.routes].forEach((r) => {
      const ownRoute = r[method] ? Object.keys(r[method]).map((path) => [path, r[method][path]]) : [];
      if (ownRoute.length !== 0) {
        hasOwnRoute ||= true;
        routes.push(...ownRoute);
      } else if (method !== METHOD_NAME_ALL) {
        routes.push(
          ...Object.keys(r[METHOD_NAME_ALL]).map((path) => [path, r[METHOD_NAME_ALL][path]])
        );
      }
    });
    if (!hasOwnRoute) {
      return null;
    } else {
      return buildMatcherFromPreprocessedRoutes(routes);
    }
  }
}, "RegExpRouter");

// node_modules/hono/dist/router/smart-router/router.js
var SmartRouter = /* @__PURE__ */ __name(class {
  name = "SmartRouter";
  routers = [];
  routes = [];
  constructor(init) {
    Object.assign(this, init);
  }
  add(method, path, handler) {
    if (!this.routes) {
      throw new Error(MESSAGE_MATCHER_IS_ALREADY_BUILT);
    }
    this.routes.push([method, path, handler]);
  }
  match(method, path) {
    if (!this.routes) {
      throw new Error("Fatal error");
    }
    const { routers, routes } = this;
    const len = routers.length;
    let i = 0;
    let res;
    for (; i < len; i++) {
      const router = routers[i];
      try {
        routes.forEach((args) => {
          router.add(...args);
        });
        res = router.match(method, path);
      } catch (e) {
        if (e instanceof UnsupportedPathError) {
          continue;
        }
        throw e;
      }
      this.match = router.match.bind(router);
      this.routers = [router];
      this.routes = void 0;
      break;
    }
    if (i === len) {
      throw new Error("Fatal error");
    }
    this.name = `SmartRouter + ${this.activeRouter.name}`;
    return res;
  }
  get activeRouter() {
    if (this.routes || this.routers.length !== 1) {
      throw new Error("No active router has been determined yet.");
    }
    return this.routers[0];
  }
}, "SmartRouter");

// node_modules/hono/dist/router/trie-router/node.js
var Node2 = /* @__PURE__ */ __name(class {
  methods;
  children;
  patterns;
  order = 0;
  name;
  params = /* @__PURE__ */ Object.create(null);
  constructor(method, handler, children) {
    this.children = children || /* @__PURE__ */ Object.create(null);
    this.methods = [];
    this.name = "";
    if (method && handler) {
      const m = /* @__PURE__ */ Object.create(null);
      m[method] = { handler, possibleKeys: [], score: 0, name: this.name };
      this.methods = [m];
    }
    this.patterns = [];
  }
  insert(method, path, handler) {
    this.name = `${method} ${path}`;
    this.order = ++this.order;
    let curNode = this;
    const parts = splitRoutingPath(path);
    const possibleKeys = [];
    for (let i = 0, len = parts.length; i < len; i++) {
      const p = parts[i];
      if (Object.keys(curNode.children).includes(p)) {
        curNode = curNode.children[p];
        const pattern2 = getPattern(p);
        if (pattern2) {
          possibleKeys.push(pattern2[1]);
        }
        continue;
      }
      curNode.children[p] = new Node2();
      const pattern = getPattern(p);
      if (pattern) {
        curNode.patterns.push(pattern);
        possibleKeys.push(pattern[1]);
      }
      curNode = curNode.children[p];
    }
    if (!curNode.methods.length) {
      curNode.methods = [];
    }
    const m = /* @__PURE__ */ Object.create(null);
    const handlerSet = {
      handler,
      possibleKeys: possibleKeys.filter((v, i, a) => a.indexOf(v) === i),
      name: this.name,
      score: this.order
    };
    m[method] = handlerSet;
    curNode.methods.push(m);
    return curNode;
  }
  gHSets(node, method, nodeParams, params) {
    const handlerSets = [];
    for (let i = 0, len = node.methods.length; i < len; i++) {
      const m = node.methods[i];
      const handlerSet = m[method] || m[METHOD_NAME_ALL];
      const processedSet = /* @__PURE__ */ Object.create(null);
      if (handlerSet !== void 0) {
        handlerSet.params = /* @__PURE__ */ Object.create(null);
        handlerSet.possibleKeys.forEach((key) => {
          const processed = processedSet[handlerSet.name];
          handlerSet.params[key] = params[key] && !processed ? params[key] : nodeParams[key] ?? params[key];
          processedSet[handlerSet.name] = true;
        });
        handlerSets.push(handlerSet);
      }
    }
    return handlerSets;
  }
  search(method, path) {
    const handlerSets = [];
    this.params = /* @__PURE__ */ Object.create(null);
    const curNode = this;
    let curNodes = [curNode];
    const parts = splitPath(path);
    for (let i = 0, len = parts.length; i < len; i++) {
      const part = parts[i];
      const isLast = i === len - 1;
      const tempNodes = [];
      for (let j = 0, len2 = curNodes.length; j < len2; j++) {
        const node = curNodes[j];
        const nextNode = node.children[part];
        if (nextNode) {
          nextNode.params = node.params;
          if (isLast === true) {
            if (nextNode.children["*"]) {
              handlerSets.push(
                ...this.gHSets(nextNode.children["*"], method, node.params, /* @__PURE__ */ Object.create(null))
              );
            }
            handlerSets.push(...this.gHSets(nextNode, method, node.params, /* @__PURE__ */ Object.create(null)));
          } else {
            tempNodes.push(nextNode);
          }
        }
        for (let k = 0, len3 = node.patterns.length; k < len3; k++) {
          const pattern = node.patterns[k];
          const params = { ...node.params };
          if (pattern === "*") {
            const astNode = node.children["*"];
            if (astNode) {
              handlerSets.push(...this.gHSets(astNode, method, node.params, /* @__PURE__ */ Object.create(null)));
              tempNodes.push(astNode);
            }
            continue;
          }
          if (part === "") {
            continue;
          }
          const [key, name, matcher] = pattern;
          const child = node.children[key];
          const restPathString = parts.slice(i).join("/");
          if (matcher instanceof RegExp && matcher.test(restPathString)) {
            params[name] = restPathString;
            handlerSets.push(...this.gHSets(child, method, node.params, params));
            continue;
          }
          if (matcher === true || matcher instanceof RegExp && matcher.test(part)) {
            if (typeof key === "string") {
              params[name] = part;
              if (isLast === true) {
                handlerSets.push(...this.gHSets(child, method, params, node.params));
                if (child.children["*"]) {
                  handlerSets.push(...this.gHSets(child.children["*"], method, params, node.params));
                }
              } else {
                child.params = params;
                tempNodes.push(child);
              }
            }
          }
        }
      }
      curNodes = tempNodes;
    }
    const results = handlerSets.sort((a, b) => {
      return a.score - b.score;
    });
    return [results.map(({ handler, params }) => [handler, params])];
  }
}, "Node");

// node_modules/hono/dist/router/trie-router/router.js
var TrieRouter = /* @__PURE__ */ __name(class {
  name = "TrieRouter";
  node;
  constructor() {
    this.node = new Node2();
  }
  add(method, path, handler) {
    const results = checkOptionalParameter(path);
    if (results) {
      for (const p of results) {
        this.node.insert(method, p, handler);
      }
      return;
    }
    this.node.insert(method, path, handler);
  }
  match(method, path) {
    return this.node.search(method, path);
  }
}, "TrieRouter");

// node_modules/hono/dist/hono.js
var Hono2 = /* @__PURE__ */ __name(class extends Hono {
  constructor(options = {}) {
    super(options);
    this.router = options.router ?? new SmartRouter({
      routers: [new RegExpRouter(), new TrieRouter()]
    });
  }
}, "Hono");

// node_modules/hono/dist/utils/color.js
function getColorEnabled() {
  const { process: process2, Deno } = globalThis;
  const isNoColor = typeof process2 !== "undefined" ? "NO_COLOR" in process2?.env : typeof Deno?.noColor === "boolean" ? Deno.noColor : false;
  return !isNoColor;
}
__name(getColorEnabled, "getColorEnabled");

// node_modules/hono/dist/middleware/logger/index.js
var humanize = /* @__PURE__ */ __name((times) => {
  const [delimiter, separator] = [",", "."];
  const orderTimes = times.map((v) => v.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1" + delimiter));
  return orderTimes.join(separator);
}, "humanize");
var time = /* @__PURE__ */ __name((start) => {
  const delta = Date.now() - start;
  return humanize([delta < 1e3 ? delta + "ms" : Math.round(delta / 1e3) + "s"]);
}, "time");
var colorStatus = /* @__PURE__ */ __name((status) => {
  const colorEnabled = getColorEnabled();
  const out = {
    7: colorEnabled ? `\x1B[35m${status}\x1B[0m` : `${status}`,
    5: colorEnabled ? `\x1B[31m${status}\x1B[0m` : `${status}`,
    4: colorEnabled ? `\x1B[33m${status}\x1B[0m` : `${status}`,
    3: colorEnabled ? `\x1B[36m${status}\x1B[0m` : `${status}`,
    2: colorEnabled ? `\x1B[32m${status}\x1B[0m` : `${status}`,
    1: colorEnabled ? `\x1B[32m${status}\x1B[0m` : `${status}`,
    0: colorEnabled ? `\x1B[33m${status}\x1B[0m` : `${status}`
  };
  const calculateStatus = status / 100 | 0;
  return out[calculateStatus];
}, "colorStatus");
function log(fn, prefix, method, path, status = 0, elapsed) {
  const out = prefix === "<--" ? `  ${prefix} ${method} ${path}` : `  ${prefix} ${method} ${path} ${colorStatus(status)} ${elapsed}`;
  fn(out);
}
__name(log, "log");
var logger = /* @__PURE__ */ __name((fn = console.log) => {
  return /* @__PURE__ */ __name(async function logger2(c, next) {
    const { method } = c.req;
    const path = getPath(c.req.raw);
    log(fn, "<--", method, path);
    const start = Date.now();
    await next();
    log(fn, "-->", method, path, c.res.status, time(start));
  }, "logger2");
}, "logger");

// node_modules/hono/dist/middleware/cors/index.js
var cors = /* @__PURE__ */ __name((options) => {
  const defaults = {
    origin: "*",
    allowMethods: ["GET", "HEAD", "PUT", "POST", "DELETE", "PATCH"],
    allowHeaders: [],
    exposeHeaders: []
  };
  const opts = {
    ...defaults,
    ...options
  };
  const findAllowOrigin = ((optsOrigin) => {
    if (typeof optsOrigin === "string") {
      return () => optsOrigin;
    } else if (typeof optsOrigin === "function") {
      return optsOrigin;
    } else {
      return (origin) => optsOrigin.includes(origin) ? origin : optsOrigin[0];
    }
  })(opts.origin);
  return /* @__PURE__ */ __name(async function cors2(c, next) {
    function set(key, value) {
      c.res.headers.set(key, value);
    }
    __name(set, "set");
    const allowOrigin = findAllowOrigin(c.req.header("origin") || "", c);
    if (allowOrigin) {
      set("Access-Control-Allow-Origin", allowOrigin);
    }
    if (opts.origin !== "*") {
      const existingVary = c.req.header("Vary");
      if (existingVary) {
        set("Vary", existingVary);
      } else {
        set("Vary", "Origin");
      }
    }
    if (opts.credentials) {
      set("Access-Control-Allow-Credentials", "true");
    }
    if (opts.exposeHeaders?.length) {
      set("Access-Control-Expose-Headers", opts.exposeHeaders.join(","));
    }
    if (c.req.method === "OPTIONS") {
      if (opts.maxAge != null) {
        set("Access-Control-Max-Age", opts.maxAge.toString());
      }
      if (opts.allowMethods?.length) {
        set("Access-Control-Allow-Methods", opts.allowMethods.join(","));
      }
      let headers = opts.allowHeaders;
      if (!headers?.length) {
        const requestHeaders = c.req.header("Access-Control-Request-Headers");
        if (requestHeaders) {
          headers = requestHeaders.split(/\s*,\s*/);
        }
      }
      if (headers?.length) {
        set("Access-Control-Allow-Headers", headers.join(","));
        c.res.headers.append("Vary", "Access-Control-Request-Headers");
      }
      c.res.headers.delete("Content-Length");
      c.res.headers.delete("Content-Type");
      return new Response(null, {
        headers: c.res.headers,
        status: 204,
        statusText: c.res.statusText
      });
    }
    await next();
  }, "cors2");
}, "cors");

// src/jsonrpc.ts
var JSONRPCServer = class {
  transport;
  handlers = {};
  constructor(transport) {
    this.transport = transport;
    this.transport.onmessage = this.handleMessage.bind(this);
    this.transport.onerror = (err) => console.error("Transport error", err);
    this.transport.onclose = () => console.log("Transport closed");
  }
  on(method, handler) {
    this.handlers[method] = handler;
  }
  async start() {
    await this.transport.start();
  }
  async processRequest(requestBody) {
    if (!requestBody || typeof requestBody !== "object" || requestBody === null) {
      const errorResponseMsg = {
        jsonrpc: "2.0",
        error: { code: -32600, message: "Invalid Request: body must be a JSON object." },
        id: requestBody && typeof requestBody.id !== "undefined" ? requestBody.id : null
      };
      return this.transport.send(errorResponseMsg);
    }
    return this.handleMessage(requestBody);
  }
  async handleMessage(msg) {
    if (msg.jsonrpc !== "2.0" || !msg.method) {
      const errorMsg = { jsonrpc: "2.0", error: { code: -32600, message: "Invalid JSON-RPC request object" }, id: msg.id };
      return this.transport.send(errorMsg);
    }
    const handler = this.handlers[msg.method];
    const responseMsg = { jsonrpc: "2.0", id: msg.id };
    if (!handler) {
      responseMsg.error = { code: -32601, message: "Method not found" };
      return this.transport.send(responseMsg);
    }
    try {
      const result = await handler(msg.params);
      responseMsg.result = result;
    } catch (err) {
      responseMsg.error = { code: -32e3, message: err.message || String(err) };
    }
    return this.transport.send(responseMsg);
  }
};
__name(JSONRPCServer, "JSONRPCServer");

// src/resilience.ts
var CircuitBreaker = class {
  constructor(options) {
    this.options = options;
  }
  failures = 0;
  lastFailureTime = 0;
  state = "CLOSED";
  async execute(operation) {
    if (this.state === "OPEN") {
      if (Date.now() - this.lastFailureTime > this.options.resetTimeout) {
        this.state = "HALF_OPEN";
      } else {
        throw new Error("Circuit breaker is OPEN");
      }
    }
    try {
      const result = await operation();
      this.onSuccess();
      return result;
    } catch (error) {
      this.onFailure();
      throw error;
    }
  }
  onSuccess() {
    this.failures = 0;
    this.state = "CLOSED";
  }
  onFailure() {
    this.failures++;
    this.lastFailureTime = Date.now();
    if (this.failures >= this.options.failureThreshold) {
      this.state = "OPEN";
    }
  }
  getState() {
    return {
      state: this.state,
      failures: this.failures,
      lastFailureTime: this.lastFailureTime
    };
  }
};
__name(CircuitBreaker, "CircuitBreaker");
async function retryWithBackoff(operation, options) {
  let lastError;
  let delay = options.baseDelay;
  for (let attempt = 0; attempt <= options.maxRetries; attempt++) {
    try {
      return await operation();
    } catch (error) {
      lastError = error;
      if (!options.retryableErrors(error)) {
        throw error;
      }
      if (attempt === options.maxRetries) {
        break;
      }
      await sleep(delay);
      delay = Math.min(delay * options.backoffMultiplier, options.maxDelay);
    }
  }
  throw lastError;
}
__name(retryWithBackoff, "retryWithBackoff");
var WikipediaEndpointManager = class {
  endpoints;
  currentEndpointIndex = 0;
  circuitBreakers = /* @__PURE__ */ new Map();
  constructor(language) {
    this.endpoints = [
      `https://${language}.wikipedia.org`,
      `https://${language}.m.wikipedia.org`
      // Mobile endpoint as fallback
      // Add more mirrors/CDNs as needed
    ];
    this.endpoints.forEach((endpoint) => {
      this.circuitBreakers.set(endpoint, new CircuitBreaker({
        failureThreshold: 3,
        resetTimeout: 3e4,
        // 30 seconds
        monitoringPeriod: 6e4
        // 1 minute
      }));
    });
  }
  async makeRequest(path) {
    const retryOptions = {
      maxRetries: 3,
      baseDelay: 1e3,
      maxDelay: 8e3,
      backoffMultiplier: 2,
      retryableErrors: (error) => {
        return error.name === "TypeError" || error.status >= 500 && error.status < 600 || error.name === "TimeoutError";
      }
    };
    return retryWithBackoff(async () => {
      let lastError;
      for (let i = 0; i < this.endpoints.length; i++) {
        const endpointIndex = (this.currentEndpointIndex + i) % this.endpoints.length;
        const endpoint = this.endpoints[endpointIndex];
        const circuitBreaker = this.circuitBreakers.get(endpoint);
        try {
          return await circuitBreaker.execute(async () => {
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 1e4);
            try {
              const response = await fetch(`${endpoint}${path}`, {
                signal: controller.signal,
                headers: {
                  "User-Agent": "Wikipedia-MCP-Server/1.0 (https://github.com/1999AZZAR/wikipedia-mcp-server)"
                }
              });
              if (!response.ok) {
                throw new Error(`HTTP ${response.status}: ${response.statusText}`);
              }
              this.currentEndpointIndex = endpointIndex;
              return response;
            } finally {
              clearTimeout(timeoutId);
            }
          });
        } catch (error) {
          lastError = error;
          console.warn(`Endpoint ${endpoint} failed:`, error.message);
          continue;
        }
      }
      throw lastError || new Error("All Wikipedia endpoints failed");
    }, retryOptions);
  }
  getEndpointStatus() {
    return this.endpoints.map((endpoint) => ({
      endpoint,
      status: this.circuitBreakers.get(endpoint)?.getState()
    }));
  }
};
__name(WikipediaEndpointManager, "WikipediaEndpointManager");
var RequestDeduplicator = class {
  pendingRequests = /* @__PURE__ */ new Map();
  async deduplicate(key, operation) {
    if (this.pendingRequests.has(key)) {
      return this.pendingRequests.get(key);
    }
    const promise = operation().finally(() => {
      this.pendingRequests.delete(key);
    });
    this.pendingRequests.set(key, promise);
    return promise;
  }
  getPendingCount() {
    return this.pendingRequests.size;
  }
};
__name(RequestDeduplicator, "RequestDeduplicator");
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
__name(sleep, "sleep");

// src/wikipediaService.ts
var EnhancedWikipediaService = class {
  constructor(options = {}) {
    this.options = options;
    this.cache = options.cache || null;
    this.kvCache = options.kvCache || void 0;
  }
  endpointManagers = /* @__PURE__ */ new Map();
  deduplicator = new RequestDeduplicator();
  cache;
  kvCache;
  getEndpointManager(language) {
    if (!this.endpointManagers.has(language)) {
      this.endpointManagers.set(language, new WikipediaEndpointManager(language));
    }
    return this.endpointManagers.get(language);
  }
  async getCachedData(key) {
    if (this.cache?.has(key)) {
      return this.cache.get(key);
    }
    if (this.kvCache) {
      try {
        const kvData = await this.kvCache.get(key, "json");
        if (kvData) {
          this.cache?.set(key, kvData);
          return kvData;
        }
      } catch (error) {
        console.warn("KV cache read failed:", error);
      }
    }
    return null;
  }
  async setCachedData(key, data, ttlSeconds = 300) {
    this.cache?.set(key, data);
    if (this.kvCache) {
      try {
        await this.kvCache.put(key, JSON.stringify(data), {
          expirationTtl: ttlSeconds
        });
      } catch (error) {
        console.warn("KV cache write failed:", error);
      }
    }
  }
  async search(query, options = {}) {
    const {
      limit = 10,
      lang = this.options.defaultLanguage || "en",
      offset = 0,
      includeSnippets = true
    } = options;
    const cacheKey = `search:${lang}:${query}:${limit}:${offset}:${includeSnippets}`;
    const cached = await this.getCachedData(cacheKey);
    if (cached) {
      return cached;
    }
    const operation = /* @__PURE__ */ __name(async () => {
      const endpointManager = this.getEndpointManager(lang);
      const searchParams = new URLSearchParams({
        action: "query",
        format: "json",
        list: "search",
        srsearch: query,
        srlimit: limit.toString(),
        sroffset: offset.toString(),
        ...includeSnippets && { srprop: "snippet" }
      });
      const response = await endpointManager.makeRequest(`/w/api.php?${searchParams}`);
      const data = await response.json();
      const result = {
        ...data,
        meta: {
          query,
          limit,
          offset,
          language: lang,
          timestamp: (/* @__PURE__ */ new Date()).toISOString()
        }
      };
      await this.setCachedData(cacheKey, result);
      return result;
    }, "operation");
    if (this.options.enableDeduplication) {
      return this.deduplicator.deduplicate(cacheKey, operation);
    }
    return operation();
  }
  async getPage(title, options = {}) {
    const {
      lang = this.options.defaultLanguage || "en",
      sections = true,
      images = false,
      links = false,
      categories = false
    } = options;
    const cacheKey = `page:${lang}:${title}:${sections}:${images}:${links}:${categories}`;
    const cached = await this.getCachedData(cacheKey);
    if (cached) {
      return cached;
    }
    const operation = /* @__PURE__ */ __name(async () => {
      const endpointManager = this.getEndpointManager(lang);
      const props = ["text"];
      if (sections)
        props.push("sections");
      if (images)
        props.push("images");
      if (links)
        props.push("links");
      if (categories)
        props.push("categories");
      const searchParams = new URLSearchParams({
        action: "parse",
        page: title,
        format: "json",
        prop: props.join("|")
      });
      const response = await endpointManager.makeRequest(`/w/api.php?${searchParams}`);
      const data = await response.json();
      const result = {
        ...data,
        meta: {
          title,
          language: lang,
          timestamp: (/* @__PURE__ */ new Date()).toISOString(),
          options: { sections, images, links, categories }
        }
      };
      await this.setCachedData(cacheKey, result, 600);
      return result;
    }, "operation");
    if (this.options.enableDeduplication) {
      return this.deduplicator.deduplicate(cacheKey, operation);
    }
    return operation();
  }
  async getPageById(id, options = {}) {
    const {
      lang = this.options.defaultLanguage || "en",
      sections = true,
      images = false,
      links = false,
      categories = false
    } = options;
    const cacheKey = `pageById:${lang}:${id}:${sections}:${images}:${links}:${categories}`;
    const cached = await this.getCachedData(cacheKey);
    if (cached) {
      return cached;
    }
    const operation = /* @__PURE__ */ __name(async () => {
      const endpointManager = this.getEndpointManager(lang);
      const props = ["text"];
      if (sections)
        props.push("sections");
      if (images)
        props.push("images");
      if (links)
        props.push("links");
      if (categories)
        props.push("categories");
      const searchParams = new URLSearchParams({
        action: "parse",
        pageid: id.toString(),
        format: "json",
        prop: props.join("|")
      });
      const response = await endpointManager.makeRequest(`/w/api.php?${searchParams}`);
      const data = await response.json();
      const result = {
        ...data,
        meta: {
          pageid: id,
          language: lang,
          timestamp: (/* @__PURE__ */ new Date()).toISOString(),
          options: { sections, images, links, categories }
        }
      };
      await this.setCachedData(cacheKey, result, 600);
      return result;
    }, "operation");
    if (this.options.enableDeduplication) {
      return this.deduplicator.deduplicate(cacheKey, operation);
    }
    return operation();
  }
  // New utility methods
  async getPageSummary(title, lang = "en") {
    const cacheKey = `summary:${lang}:${title}`;
    const cached = await this.getCachedData(cacheKey);
    if (cached) {
      return cached;
    }
    const operation = /* @__PURE__ */ __name(async () => {
      const endpointManager = this.getEndpointManager(lang);
      const response = await endpointManager.makeRequest(
        `/api/rest_v1/page/summary/${encodeURIComponent(title)}`
      );
      const data = await response.json();
      await this.setCachedData(cacheKey, data, 1800);
      return data;
    }, "operation");
    if (this.options.enableDeduplication) {
      return this.deduplicator.deduplicate(cacheKey, operation);
    }
    return operation();
  }
  async getRandomPage(lang = "en") {
    const endpointManager = this.getEndpointManager(lang);
    const searchParams = new URLSearchParams({
      action: "query",
      format: "json",
      list: "random",
      rnnamespace: "0",
      rnlimit: "1"
    });
    const response = await endpointManager.makeRequest(`/w/api.php?${searchParams}`);
    return response.json();
  }
  // Health check methods
  async healthCheck() {
    const endpointStatuses = Array.from(this.endpointManagers.entries()).map(
      ([lang, manager]) => ({
        language: lang,
        endpoints: manager.getEndpointStatus()
      })
    );
    const healthyEndpoints = endpointStatuses.flatMap(
      (s) => s.endpoints.filter((e) => e.status?.state === "CLOSED")
    ).length;
    const totalEndpoints = endpointStatuses.flatMap((s) => s.endpoints).length;
    let status = "healthy";
    if (healthyEndpoints === 0) {
      status = "unhealthy";
    } else if (healthyEndpoints < totalEndpoints * 0.5) {
      status = "degraded";
    }
    return {
      status,
      endpoints: endpointStatuses,
      cache: {
        memory: this.cache ? {
          size: this.cache.size,
          max: this.cache.max
        } : null,
        kv: {
          available: !!this.kvCache
        }
      },
      deduplication: {
        pendingRequests: this.deduplicator.getPendingCount()
      }
    };
  }
};
__name(EnhancedWikipediaService, "EnhancedWikipediaService");

// src/additionalFeatures.ts
var WikipediaExtendedFeatures = class {
  constructor(wikipediaService2) {
    this.wikipediaService = wikipediaService2;
  }
  // Bulk operations for efficiency
  async batchSearch(queries, options = {}) {
    const { lang = "en", limit = 5, concurrency = 5 } = options;
    const results = {};
    for (let i = 0; i < queries.length; i += concurrency) {
      const batch = queries.slice(i, i + concurrency);
      const promises = batch.map(async (query) => {
        try {
          const result = await this.wikipediaService.search(query, { lang, limit });
          return { query, result };
        } catch (error) {
          return { query, error: error.message };
        }
      });
      const batchResults = await Promise.all(promises);
      batchResults.forEach(({ query, result, error }) => {
        results[query] = error ? { error } : result;
      });
    }
    return results;
  }
  async batchGetPages(titles, options = {}) {
    const { lang = "en", sections = true, concurrency = 5 } = options;
    const results = {};
    for (let i = 0; i < titles.length; i += concurrency) {
      const batch = titles.slice(i, i + concurrency);
      const promises = batch.map(async (title) => {
        try {
          const result = await this.wikipediaService.getPage(title, { lang, sections });
          return { title, result };
        } catch (error) {
          return { title, error: error.message };
        }
      });
      const batchResults = await Promise.all(promises);
      batchResults.forEach(({ title, result, error }) => {
        results[title] = error ? { error } : result;
      });
    }
    return results;
  }
  // Get related articles
  async getRelatedArticles(title, options = {}) {
    const { lang = "en", limit = 10, method = "links" } = options;
    const endpointManager = this.wikipediaService["getEndpointManager"](lang);
    let searchParams;
    switch (method) {
      case "links":
        searchParams = new URLSearchParams({
          action: "query",
          format: "json",
          prop: "links",
          titles: title,
          pllimit: limit.toString(),
          plnamespace: "0"
        });
        break;
      case "categories":
        searchParams = new URLSearchParams({
          action: "query",
          format: "json",
          prop: "categories",
          titles: title,
          cllimit: limit.toString()
        });
        break;
      case "backlinks":
        searchParams = new URLSearchParams({
          action: "query",
          format: "json",
          list: "backlinks",
          bltitle: title,
          bllimit: limit.toString(),
          blnamespace: "0"
        });
        break;
    }
    const response = await endpointManager.makeRequest(`/w/api.php?${searchParams}`);
    return response.json();
  }
  // Get page categories
  async getPageCategories(title, lang = "en") {
    const endpointManager = this.wikipediaService["getEndpointManager"](lang);
    const searchParams = new URLSearchParams({
      action: "query",
      format: "json",
      prop: "categories",
      titles: title,
      cllimit: "500"
    });
    const response = await endpointManager.makeRequest(`/w/api.php?${searchParams}`);
    return response.json();
  }
  // Get pages in a category
  async getPagesInCategory(category, options = {}) {
    const { lang = "en", limit = 50, type = "page" } = options;
    const endpointManager = this.wikipediaService["getEndpointManager"](lang);
    const searchParams = new URLSearchParams({
      action: "query",
      format: "json",
      list: "categorymembers",
      cmtitle: category.startsWith("Category:") ? category : `Category:${category}`,
      cmlimit: limit.toString(),
      cmtype: type
    });
    const response = await endpointManager.makeRequest(`/w/api.php?${searchParams}`);
    return response.json();
  }
  // Get page images
  async getPageImages(title, options = {}) {
    const { lang = "en", limit = 10, imageWidth = 300 } = options;
    const endpointManager = this.wikipediaService["getEndpointManager"](lang);
    const searchParams = new URLSearchParams({
      action: "query",
      format: "json",
      titles: title,
      prop: "images|pageimages",
      imlimit: limit.toString(),
      piprop: "thumbnail",
      pithumbsize: imageWidth.toString()
    });
    const response = await endpointManager.makeRequest(`/w/api.php?${searchParams}`);
    return response.json();
  }
  // Geographic search - find articles near coordinates
  async searchNearby(options) {
    const { lat, lon, radius = 1e4, lang = "en", limit = 10 } = options;
    const endpointManager = this.wikipediaService["getEndpointManager"](lang);
    const searchParams = new URLSearchParams({
      action: "query",
      format: "json",
      list: "geosearch",
      gscoord: `${lat}|${lon}`,
      gsradius: radius.toString(),
      gslimit: limit.toString(),
      gsnamespace: "0"
    });
    const response = await endpointManager.makeRequest(`/w/api.php?${searchParams}`);
    return response.json();
  }
  // Get page extracts (summaries)
  async getPageExtracts(titles, options = {}) {
    const {
      lang = "en",
      sentences = 3,
      chars = 500,
      plaintext = true
    } = options;
    const endpointManager = this.wikipediaService["getEndpointManager"](lang);
    const searchParams = new URLSearchParams({
      action: "query",
      format: "json",
      prop: "extracts",
      titles: titles.join("|"),
      exsentences: sentences.toString(),
      exchars: chars.toString(),
      ...plaintext && { explaintext: "1" },
      exsectionformat: "plain"
    });
    const response = await endpointManager.makeRequest(`/w/api.php?${searchParams}`);
    return response.json();
  }
  // Full-text search with highlighting
  async fullTextSearch(query, options = {}) {
    const {
      lang = "en",
      limit = 10,
      namespace = "0",
      snippet = true
    } = options;
    const endpointManager = this.wikipediaService["getEndpointManager"](lang);
    const searchParams = new URLSearchParams({
      action: "query",
      format: "json",
      list: "search",
      srsearch: query,
      srlimit: limit.toString(),
      srnamespace: namespace,
      srprop: snippet ? "snippet|size|timestamp" : "size|timestamp",
      srinfo: "totalhits"
    });
    const response = await endpointManager.makeRequest(`/w/api.php?${searchParams}`);
    return response.json();
  }
  // Language detection and translation suggestions
  async detectLanguage(text) {
    const patterns = {
      "zh": /[\u4e00-\u9fff]/,
      "ja": /[\u3040-\u309f\u30a0-\u30ff]/,
      "ko": /[\uac00-\ud7af]/,
      "ar": /[\u0600-\u06ff]/,
      "ru": /[\u0400-\u04ff]/,
      "th": /[\u0e00-\u0e7f]/,
      "hi": /[\u0900-\u097f]/
    };
    for (const [lang, pattern] of Object.entries(patterns)) {
      if (pattern.test(text)) {
        return lang;
      }
    }
    return "en";
  }
  // Get available languages for a page
  async getPageLanguages(title, lang = "en") {
    const endpointManager = this.wikipediaService["getEndpointManager"](lang);
    const searchParams = new URLSearchParams({
      action: "query",
      format: "json",
      prop: "langlinks",
      titles: title,
      lllimit: "500"
    });
    const response = await endpointManager.makeRequest(`/w/api.php?${searchParams}`);
    return response.json();
  }
  // Trending/popular articles
  async getTrendingArticles(options = {}) {
    const { lang = "en", date = (/* @__PURE__ */ new Date()).toISOString().split("T")[0].replace(/-/g, "/") } = options;
    const response = await fetch(
      `https://wikimedia.org/api/rest_v1/metrics/pageviews/top/${lang}.wikipedia/all-access/${date}`
    );
    return response.json();
  }
};
__name(WikipediaExtendedFeatures, "WikipediaExtendedFeatures");

// src/monitoring.ts
var MetricsCollector = class {
  metrics = [];
  maxSize = 1e3;
  record(name, value, tags = {}) {
    const event = {
      name,
      value,
      tags,
      timestamp: Date.now()
    };
    this.metrics.push(event);
    if (this.metrics.length > this.maxSize) {
      this.metrics = this.metrics.slice(-this.maxSize);
    }
  }
  increment(name, tags = {}) {
    this.record(name, 1, tags);
  }
  timing(name, duration, tags = {}) {
    this.record(name, duration, { ...tags, unit: "ms" });
  }
  gauge(name, value, tags = {}) {
    this.record(name, value, { ...tags, type: "gauge" });
  }
  getMetrics(since) {
    if (since) {
      return this.metrics.filter((m) => m.timestamp >= since);
    }
    return [...this.metrics];
  }
  getAggregatedMetrics(timeWindow = 3e5) {
    const now = Date.now();
    const recentMetrics = this.metrics.filter((m) => m.timestamp >= now - timeWindow);
    const aggregated = {};
    recentMetrics.forEach((metric) => {
      const key = `${metric.name}`;
      if (!aggregated[key]) {
        aggregated[key] = {
          count: 0,
          sum: 0,
          min: Infinity,
          max: -Infinity,
          avg: 0,
          tags: metric.tags
        };
      }
      const agg = aggregated[key];
      agg.count++;
      agg.sum += metric.value;
      agg.min = Math.min(agg.min, metric.value);
      agg.max = Math.max(agg.max, metric.value);
      agg.avg = agg.sum / agg.count;
    });
    return aggregated;
  }
};
__name(MetricsCollector, "MetricsCollector");
var Logger = class {
  logs = [];
  maxSize = 500;
  log(level, message, context, requestId) {
    const event = {
      level,
      message,
      context,
      timestamp: Date.now(),
      requestId
    };
    this.logs.push(event);
    const logData = { ...event, timestamp: new Date(event.timestamp).toISOString() };
    console[level === "error" ? "error" : level === "warn" ? "warn" : "log"](JSON.stringify(logData));
    if (this.logs.length > this.maxSize) {
      this.logs = this.logs.slice(-this.maxSize);
    }
  }
  info(message, context, requestId) {
    this.log("info", message, context, requestId);
  }
  warn(message, context, requestId) {
    this.log("warn", message, context, requestId);
  }
  error(message, context, requestId) {
    this.log("error", message, context, requestId);
  }
  debug(message, context, requestId) {
    this.log("debug", message, context, requestId);
  }
  getLogs(level, since) {
    let filtered = this.logs;
    if (level) {
      filtered = filtered.filter((log2) => log2.level === level);
    }
    if (since) {
      filtered = filtered.filter((log2) => log2.timestamp >= since);
    }
    return filtered;
  }
};
__name(Logger, "Logger");
var PerformanceMonitor = class {
  constructor(metrics, logger2) {
    this.metrics = metrics;
    this.logger = logger2;
  }
  timers = /* @__PURE__ */ new Map();
  startTimer(operation, requestId) {
    const timerId = `${operation}_${Date.now()}_${Math.random()}`;
    this.timers.set(timerId, Date.now());
    this.logger.debug(`Started timer for ${operation}`, { operation }, requestId);
    return timerId;
  }
  endTimer(timerId, tags = {}) {
    const startTime = this.timers.get(timerId);
    if (!startTime) {
      this.logger.warn(`Timer not found: ${timerId}`);
      return 0;
    }
    const duration = Date.now() - startTime;
    this.timers.delete(timerId);
    const operation = tags.operation || "unknown";
    this.metrics.timing(`operation_duration`, duration, tags);
    this.logger.debug(`Completed ${operation}`, { duration, ...tags });
    return duration;
  }
  async monitorAsync(operation, fn, tags = {}, requestId) {
    const timerId = this.startTimer(operation, requestId);
    const startTime = Date.now();
    try {
      const result = await fn();
      const duration = this.endTimer(timerId, { ...tags, operation, status: "success" });
      this.metrics.increment("operation_success", { operation, ...tags });
      this.logger.info(`${operation} completed successfully`, { duration, ...tags }, requestId);
      return result;
    } catch (error) {
      const duration = this.endTimer(timerId, { ...tags, operation, status: "error" });
      this.metrics.increment("operation_error", { operation, ...tags });
      this.logger.error(`${operation} failed`, {
        duration,
        error: error.message,
        ...tags
      }, requestId);
      throw error;
    }
  }
};
__name(PerformanceMonitor, "PerformanceMonitor");
var UsageAnalytics = class {
  requests = [];
  maxSize = 2e3;
  recordRequest(data) {
    this.requests.push({
      ...data,
      timestamp: Date.now()
    });
    if (this.requests.length > this.maxSize) {
      this.requests = this.requests.slice(-this.maxSize);
    }
  }
  getUsageStats(timeWindow = 36e5) {
    const now = Date.now();
    const recentRequests = this.requests.filter((r) => r.timestamp >= now - timeWindow);
    const stats = {
      total: recentRequests.length,
      byMethod: {},
      byLanguage: {},
      errorRate: 0,
      avgDuration: 0,
      popularQueries: []
    };
    if (recentRequests.length === 0)
      return stats;
    let totalDuration = 0;
    let errorCount = 0;
    const queryCount = /* @__PURE__ */ new Map();
    recentRequests.forEach((req) => {
      stats.byMethod[req.method] = (stats.byMethod[req.method] || 0) + 1;
      const lang = req.language || req.params?.lang || "unknown";
      stats.byLanguage[lang] = (stats.byLanguage[lang] || 0) + 1;
      if (!req.success)
        errorCount++;
      if (req.duration)
        totalDuration += req.duration;
      if (req.method.includes("search") && req.params?.query) {
        const query = req.params.query.toLowerCase();
        queryCount.set(query, (queryCount.get(query) || 0) + 1);
      }
    });
    stats.errorRate = errorCount / recentRequests.length;
    stats.avgDuration = totalDuration / recentRequests.length;
    stats.popularQueries = Array.from(queryCount.entries()).map(([query, count]) => ({ query, count })).sort((a, b) => b.count - a.count).slice(0, 10);
    return stats;
  }
  getHealthMetrics() {
    const now = Date.now();
    const lastMinute = this.requests.filter((r) => r.timestamp >= now - 6e4);
    const lastHour = this.requests.filter((r) => r.timestamp >= now - 36e5);
    const errorCounts = /* @__PURE__ */ new Map();
    let totalDuration = 0;
    let durationsCount = 0;
    lastHour.forEach((req) => {
      if (!req.success && req.errorType) {
        errorCounts.set(req.errorType, (errorCounts.get(req.errorType) || 0) + 1);
      }
      if (req.duration) {
        totalDuration += req.duration;
        durationsCount++;
      }
    });
    return {
      requestRate: lastMinute.length,
      // per minute
      errorRate: lastHour.filter((r) => !r.success).length / Math.max(lastHour.length, 1),
      avgResponseTime: durationsCount > 0 ? totalDuration / durationsCount : 0,
      topErrors: Array.from(errorCounts.entries()).map(([error, count]) => ({ error, count })).sort((a, b) => b.count - a.count).slice(0, 5)
    };
  }
};
__name(UsageAnalytics, "UsageAnalytics");
var MonitoringService = class {
  metrics = new MetricsCollector();
  logger = new Logger();
  performance = new PerformanceMonitor(this.metrics, this.logger);
  analytics = new UsageAnalytics();
  // Middleware function for JSON-RPC requests
  async monitorRequest(method, params, requestId, handler, userAgent) {
    const startTime = Date.now();
    try {
      const result = await this.performance.monitorAsync(
        `jsonrpc_${method}`,
        handler,
        { method, language: params?.lang || "en" },
        requestId
      );
      const duration = Date.now() - startTime;
      this.analytics.recordRequest({
        method,
        params,
        requestId,
        duration,
        success: true,
        userAgent,
        language: params?.lang || "en"
      });
      return result;
    } catch (error) {
      const duration = Date.now() - startTime;
      this.analytics.recordRequest({
        method,
        params,
        requestId,
        duration,
        success: false,
        errorType: error.constructor.name,
        userAgent,
        language: params?.lang || "en"
      });
      throw error;
    }
  }
  // Get comprehensive monitoring dashboard data
  getDashboardData() {
    return {
      health: this.analytics.getHealthMetrics(),
      metrics: this.metrics.getAggregatedMetrics(),
      usage: this.analytics.getUsageStats(),
      recentErrors: this.logger.getLogs("error", Date.now() - 36e5)
      // Last hour
    };
  }
};
__name(MonitoringService, "MonitoringService");

// node_modules/zod/lib/index.mjs
var util;
(function(util2) {
  util2.assertEqual = (val) => val;
  function assertIs(_arg) {
  }
  __name(assertIs, "assertIs");
  util2.assertIs = assertIs;
  function assertNever(_x) {
    throw new Error();
  }
  __name(assertNever, "assertNever");
  util2.assertNever = assertNever;
  util2.arrayToEnum = (items) => {
    const obj = {};
    for (const item of items) {
      obj[item] = item;
    }
    return obj;
  };
  util2.getValidEnumValues = (obj) => {
    const validKeys = util2.objectKeys(obj).filter((k) => typeof obj[obj[k]] !== "number");
    const filtered = {};
    for (const k of validKeys) {
      filtered[k] = obj[k];
    }
    return util2.objectValues(filtered);
  };
  util2.objectValues = (obj) => {
    return util2.objectKeys(obj).map(function(e) {
      return obj[e];
    });
  };
  util2.objectKeys = typeof Object.keys === "function" ? (obj) => Object.keys(obj) : (object) => {
    const keys = [];
    for (const key in object) {
      if (Object.prototype.hasOwnProperty.call(object, key)) {
        keys.push(key);
      }
    }
    return keys;
  };
  util2.find = (arr, checker) => {
    for (const item of arr) {
      if (checker(item))
        return item;
    }
    return void 0;
  };
  util2.isInteger = typeof Number.isInteger === "function" ? (val) => Number.isInteger(val) : (val) => typeof val === "number" && isFinite(val) && Math.floor(val) === val;
  function joinValues(array, separator = " | ") {
    return array.map((val) => typeof val === "string" ? `'${val}'` : val).join(separator);
  }
  __name(joinValues, "joinValues");
  util2.joinValues = joinValues;
  util2.jsonStringifyReplacer = (_, value) => {
    if (typeof value === "bigint") {
      return value.toString();
    }
    return value;
  };
})(util || (util = {}));
var objectUtil;
(function(objectUtil2) {
  objectUtil2.mergeShapes = (first, second) => {
    return {
      ...first,
      ...second
      // second overwrites first
    };
  };
})(objectUtil || (objectUtil = {}));
var ZodParsedType = util.arrayToEnum([
  "string",
  "nan",
  "number",
  "integer",
  "float",
  "boolean",
  "date",
  "bigint",
  "symbol",
  "function",
  "undefined",
  "null",
  "array",
  "object",
  "unknown",
  "promise",
  "void",
  "never",
  "map",
  "set"
]);
var getParsedType = /* @__PURE__ */ __name((data) => {
  const t = typeof data;
  switch (t) {
    case "undefined":
      return ZodParsedType.undefined;
    case "string":
      return ZodParsedType.string;
    case "number":
      return isNaN(data) ? ZodParsedType.nan : ZodParsedType.number;
    case "boolean":
      return ZodParsedType.boolean;
    case "function":
      return ZodParsedType.function;
    case "bigint":
      return ZodParsedType.bigint;
    case "symbol":
      return ZodParsedType.symbol;
    case "object":
      if (Array.isArray(data)) {
        return ZodParsedType.array;
      }
      if (data === null) {
        return ZodParsedType.null;
      }
      if (data.then && typeof data.then === "function" && data.catch && typeof data.catch === "function") {
        return ZodParsedType.promise;
      }
      if (typeof Map !== "undefined" && data instanceof Map) {
        return ZodParsedType.map;
      }
      if (typeof Set !== "undefined" && data instanceof Set) {
        return ZodParsedType.set;
      }
      if (typeof Date !== "undefined" && data instanceof Date) {
        return ZodParsedType.date;
      }
      return ZodParsedType.object;
    default:
      return ZodParsedType.unknown;
  }
}, "getParsedType");
var ZodIssueCode = util.arrayToEnum([
  "invalid_type",
  "invalid_literal",
  "custom",
  "invalid_union",
  "invalid_union_discriminator",
  "invalid_enum_value",
  "unrecognized_keys",
  "invalid_arguments",
  "invalid_return_type",
  "invalid_date",
  "invalid_string",
  "too_small",
  "too_big",
  "invalid_intersection_types",
  "not_multiple_of",
  "not_finite"
]);
var quotelessJson = /* @__PURE__ */ __name((obj) => {
  const json = JSON.stringify(obj, null, 2);
  return json.replace(/"([^"]+)":/g, "$1:");
}, "quotelessJson");
var ZodError = class extends Error {
  get errors() {
    return this.issues;
  }
  constructor(issues) {
    super();
    this.issues = [];
    this.addIssue = (sub) => {
      this.issues = [...this.issues, sub];
    };
    this.addIssues = (subs = []) => {
      this.issues = [...this.issues, ...subs];
    };
    const actualProto = new.target.prototype;
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(this, actualProto);
    } else {
      this.__proto__ = actualProto;
    }
    this.name = "ZodError";
    this.issues = issues;
  }
  format(_mapper) {
    const mapper = _mapper || function(issue) {
      return issue.message;
    };
    const fieldErrors = { _errors: [] };
    const processError = /* @__PURE__ */ __name((error) => {
      for (const issue of error.issues) {
        if (issue.code === "invalid_union") {
          issue.unionErrors.map(processError);
        } else if (issue.code === "invalid_return_type") {
          processError(issue.returnTypeError);
        } else if (issue.code === "invalid_arguments") {
          processError(issue.argumentsError);
        } else if (issue.path.length === 0) {
          fieldErrors._errors.push(mapper(issue));
        } else {
          let curr = fieldErrors;
          let i = 0;
          while (i < issue.path.length) {
            const el = issue.path[i];
            const terminal = i === issue.path.length - 1;
            if (!terminal) {
              curr[el] = curr[el] || { _errors: [] };
            } else {
              curr[el] = curr[el] || { _errors: [] };
              curr[el]._errors.push(mapper(issue));
            }
            curr = curr[el];
            i++;
          }
        }
      }
    }, "processError");
    processError(this);
    return fieldErrors;
  }
  static assert(value) {
    if (!(value instanceof ZodError)) {
      throw new Error(`Not a ZodError: ${value}`);
    }
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, util.jsonStringifyReplacer, 2);
  }
  get isEmpty() {
    return this.issues.length === 0;
  }
  flatten(mapper = (issue) => issue.message) {
    const fieldErrors = {};
    const formErrors = [];
    for (const sub of this.issues) {
      if (sub.path.length > 0) {
        fieldErrors[sub.path[0]] = fieldErrors[sub.path[0]] || [];
        fieldErrors[sub.path[0]].push(mapper(sub));
      } else {
        formErrors.push(mapper(sub));
      }
    }
    return { formErrors, fieldErrors };
  }
  get formErrors() {
    return this.flatten();
  }
};
__name(ZodError, "ZodError");
ZodError.create = (issues) => {
  const error = new ZodError(issues);
  return error;
};
var errorMap = /* @__PURE__ */ __name((issue, _ctx) => {
  let message;
  switch (issue.code) {
    case ZodIssueCode.invalid_type:
      if (issue.received === ZodParsedType.undefined) {
        message = "Required";
      } else {
        message = `Expected ${issue.expected}, received ${issue.received}`;
      }
      break;
    case ZodIssueCode.invalid_literal:
      message = `Invalid literal value, expected ${JSON.stringify(issue.expected, util.jsonStringifyReplacer)}`;
      break;
    case ZodIssueCode.unrecognized_keys:
      message = `Unrecognized key(s) in object: ${util.joinValues(issue.keys, ", ")}`;
      break;
    case ZodIssueCode.invalid_union:
      message = `Invalid input`;
      break;
    case ZodIssueCode.invalid_union_discriminator:
      message = `Invalid discriminator value. Expected ${util.joinValues(issue.options)}`;
      break;
    case ZodIssueCode.invalid_enum_value:
      message = `Invalid enum value. Expected ${util.joinValues(issue.options)}, received '${issue.received}'`;
      break;
    case ZodIssueCode.invalid_arguments:
      message = `Invalid function arguments`;
      break;
    case ZodIssueCode.invalid_return_type:
      message = `Invalid function return type`;
      break;
    case ZodIssueCode.invalid_date:
      message = `Invalid date`;
      break;
    case ZodIssueCode.invalid_string:
      if (typeof issue.validation === "object") {
        if ("includes" in issue.validation) {
          message = `Invalid input: must include "${issue.validation.includes}"`;
          if (typeof issue.validation.position === "number") {
            message = `${message} at one or more positions greater than or equal to ${issue.validation.position}`;
          }
        } else if ("startsWith" in issue.validation) {
          message = `Invalid input: must start with "${issue.validation.startsWith}"`;
        } else if ("endsWith" in issue.validation) {
          message = `Invalid input: must end with "${issue.validation.endsWith}"`;
        } else {
          util.assertNever(issue.validation);
        }
      } else if (issue.validation !== "regex") {
        message = `Invalid ${issue.validation}`;
      } else {
        message = "Invalid";
      }
      break;
    case ZodIssueCode.too_small:
      if (issue.type === "array")
        message = `Array must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `more than`} ${issue.minimum} element(s)`;
      else if (issue.type === "string")
        message = `String must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `over`} ${issue.minimum} character(s)`;
      else if (issue.type === "number")
        message = `Number must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${issue.minimum}`;
      else if (issue.type === "date")
        message = `Date must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${new Date(Number(issue.minimum))}`;
      else
        message = "Invalid input";
      break;
    case ZodIssueCode.too_big:
      if (issue.type === "array")
        message = `Array must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `less than`} ${issue.maximum} element(s)`;
      else if (issue.type === "string")
        message = `String must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `under`} ${issue.maximum} character(s)`;
      else if (issue.type === "number")
        message = `Number must be ${issue.exact ? `exactly` : issue.inclusive ? `less than or equal to` : `less than`} ${issue.maximum}`;
      else if (issue.type === "bigint")
        message = `BigInt must be ${issue.exact ? `exactly` : issue.inclusive ? `less than or equal to` : `less than`} ${issue.maximum}`;
      else if (issue.type === "date")
        message = `Date must be ${issue.exact ? `exactly` : issue.inclusive ? `smaller than or equal to` : `smaller than`} ${new Date(Number(issue.maximum))}`;
      else
        message = "Invalid input";
      break;
    case ZodIssueCode.custom:
      message = `Invalid input`;
      break;
    case ZodIssueCode.invalid_intersection_types:
      message = `Intersection results could not be merged`;
      break;
    case ZodIssueCode.not_multiple_of:
      message = `Number must be a multiple of ${issue.multipleOf}`;
      break;
    case ZodIssueCode.not_finite:
      message = "Number must be finite";
      break;
    default:
      message = _ctx.defaultError;
      util.assertNever(issue);
  }
  return { message };
}, "errorMap");
var overrideErrorMap = errorMap;
function setErrorMap(map) {
  overrideErrorMap = map;
}
__name(setErrorMap, "setErrorMap");
function getErrorMap() {
  return overrideErrorMap;
}
__name(getErrorMap, "getErrorMap");
var makeIssue = /* @__PURE__ */ __name((params) => {
  const { data, path, errorMaps, issueData } = params;
  const fullPath = [...path, ...issueData.path || []];
  const fullIssue = {
    ...issueData,
    path: fullPath
  };
  if (issueData.message !== void 0) {
    return {
      ...issueData,
      path: fullPath,
      message: issueData.message
    };
  }
  let errorMessage = "";
  const maps = errorMaps.filter((m) => !!m).slice().reverse();
  for (const map of maps) {
    errorMessage = map(fullIssue, { data, defaultError: errorMessage }).message;
  }
  return {
    ...issueData,
    path: fullPath,
    message: errorMessage
  };
}, "makeIssue");
var EMPTY_PATH = [];
function addIssueToContext(ctx, issueData) {
  const overrideMap = getErrorMap();
  const issue = makeIssue({
    issueData,
    data: ctx.data,
    path: ctx.path,
    errorMaps: [
      ctx.common.contextualErrorMap,
      // contextual error map is first priority
      ctx.schemaErrorMap,
      // then schema-bound map if available
      overrideMap,
      // then global override map
      overrideMap === errorMap ? void 0 : errorMap
      // then global default map
    ].filter((x) => !!x)
  });
  ctx.common.issues.push(issue);
}
__name(addIssueToContext, "addIssueToContext");
var ParseStatus = class {
  constructor() {
    this.value = "valid";
  }
  dirty() {
    if (this.value === "valid")
      this.value = "dirty";
  }
  abort() {
    if (this.value !== "aborted")
      this.value = "aborted";
  }
  static mergeArray(status, results) {
    const arrayValue = [];
    for (const s of results) {
      if (s.status === "aborted")
        return INVALID;
      if (s.status === "dirty")
        status.dirty();
      arrayValue.push(s.value);
    }
    return { status: status.value, value: arrayValue };
  }
  static async mergeObjectAsync(status, pairs) {
    const syncPairs = [];
    for (const pair of pairs) {
      const key = await pair.key;
      const value = await pair.value;
      syncPairs.push({
        key,
        value
      });
    }
    return ParseStatus.mergeObjectSync(status, syncPairs);
  }
  static mergeObjectSync(status, pairs) {
    const finalObject = {};
    for (const pair of pairs) {
      const { key, value } = pair;
      if (key.status === "aborted")
        return INVALID;
      if (value.status === "aborted")
        return INVALID;
      if (key.status === "dirty")
        status.dirty();
      if (value.status === "dirty")
        status.dirty();
      if (key.value !== "__proto__" && (typeof value.value !== "undefined" || pair.alwaysSet)) {
        finalObject[key.value] = value.value;
      }
    }
    return { status: status.value, value: finalObject };
  }
};
__name(ParseStatus, "ParseStatus");
var INVALID = Object.freeze({
  status: "aborted"
});
var DIRTY = /* @__PURE__ */ __name((value) => ({ status: "dirty", value }), "DIRTY");
var OK = /* @__PURE__ */ __name((value) => ({ status: "valid", value }), "OK");
var isAborted = /* @__PURE__ */ __name((x) => x.status === "aborted", "isAborted");
var isDirty = /* @__PURE__ */ __name((x) => x.status === "dirty", "isDirty");
var isValid = /* @__PURE__ */ __name((x) => x.status === "valid", "isValid");
var isAsync = /* @__PURE__ */ __name((x) => typeof Promise !== "undefined" && x instanceof Promise, "isAsync");
function __classPrivateFieldGet(receiver, state, kind, f) {
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}
__name(__classPrivateFieldGet, "__classPrivateFieldGet");
function __classPrivateFieldSet(receiver, state, value, kind, f) {
  if (kind === "m")
    throw new TypeError("Private method is not writable");
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
}
__name(__classPrivateFieldSet, "__classPrivateFieldSet");
var errorUtil;
(function(errorUtil2) {
  errorUtil2.errToObj = (message) => typeof message === "string" ? { message } : message || {};
  errorUtil2.toString = (message) => typeof message === "string" ? message : message === null || message === void 0 ? void 0 : message.message;
})(errorUtil || (errorUtil = {}));
var _ZodEnum_cache;
var _ZodNativeEnum_cache;
var ParseInputLazyPath = class {
  constructor(parent, value, path, key) {
    this._cachedPath = [];
    this.parent = parent;
    this.data = value;
    this._path = path;
    this._key = key;
  }
  get path() {
    if (!this._cachedPath.length) {
      if (this._key instanceof Array) {
        this._cachedPath.push(...this._path, ...this._key);
      } else {
        this._cachedPath.push(...this._path, this._key);
      }
    }
    return this._cachedPath;
  }
};
__name(ParseInputLazyPath, "ParseInputLazyPath");
var handleResult = /* @__PURE__ */ __name((ctx, result) => {
  if (isValid(result)) {
    return { success: true, data: result.value };
  } else {
    if (!ctx.common.issues.length) {
      throw new Error("Validation failed but no issues detected.");
    }
    return {
      success: false,
      get error() {
        if (this._error)
          return this._error;
        const error = new ZodError(ctx.common.issues);
        this._error = error;
        return this._error;
      }
    };
  }
}, "handleResult");
function processCreateParams(params) {
  if (!params)
    return {};
  const { errorMap: errorMap2, invalid_type_error, required_error, description } = params;
  if (errorMap2 && (invalid_type_error || required_error)) {
    throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
  }
  if (errorMap2)
    return { errorMap: errorMap2, description };
  const customMap = /* @__PURE__ */ __name((iss, ctx) => {
    var _a, _b;
    const { message } = params;
    if (iss.code === "invalid_enum_value") {
      return { message: message !== null && message !== void 0 ? message : ctx.defaultError };
    }
    if (typeof ctx.data === "undefined") {
      return { message: (_a = message !== null && message !== void 0 ? message : required_error) !== null && _a !== void 0 ? _a : ctx.defaultError };
    }
    if (iss.code !== "invalid_type")
      return { message: ctx.defaultError };
    return { message: (_b = message !== null && message !== void 0 ? message : invalid_type_error) !== null && _b !== void 0 ? _b : ctx.defaultError };
  }, "customMap");
  return { errorMap: customMap, description };
}
__name(processCreateParams, "processCreateParams");
var ZodType = class {
  get description() {
    return this._def.description;
  }
  _getType(input) {
    return getParsedType(input.data);
  }
  _getOrReturnCtx(input, ctx) {
    return ctx || {
      common: input.parent.common,
      data: input.data,
      parsedType: getParsedType(input.data),
      schemaErrorMap: this._def.errorMap,
      path: input.path,
      parent: input.parent
    };
  }
  _processInputParams(input) {
    return {
      status: new ParseStatus(),
      ctx: {
        common: input.parent.common,
        data: input.data,
        parsedType: getParsedType(input.data),
        schemaErrorMap: this._def.errorMap,
        path: input.path,
        parent: input.parent
      }
    };
  }
  _parseSync(input) {
    const result = this._parse(input);
    if (isAsync(result)) {
      throw new Error("Synchronous parse encountered promise.");
    }
    return result;
  }
  _parseAsync(input) {
    const result = this._parse(input);
    return Promise.resolve(result);
  }
  parse(data, params) {
    const result = this.safeParse(data, params);
    if (result.success)
      return result.data;
    throw result.error;
  }
  safeParse(data, params) {
    var _a;
    const ctx = {
      common: {
        issues: [],
        async: (_a = params === null || params === void 0 ? void 0 : params.async) !== null && _a !== void 0 ? _a : false,
        contextualErrorMap: params === null || params === void 0 ? void 0 : params.errorMap
      },
      path: (params === null || params === void 0 ? void 0 : params.path) || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data,
      parsedType: getParsedType(data)
    };
    const result = this._parseSync({ data, path: ctx.path, parent: ctx });
    return handleResult(ctx, result);
  }
  "~validate"(data) {
    var _a, _b;
    const ctx = {
      common: {
        issues: [],
        async: !!this["~standard"].async
      },
      path: [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data,
      parsedType: getParsedType(data)
    };
    if (!this["~standard"].async) {
      try {
        const result = this._parseSync({ data, path: [], parent: ctx });
        return isValid(result) ? {
          value: result.value
        } : {
          issues: ctx.common.issues
        };
      } catch (err) {
        if ((_b = (_a = err === null || err === void 0 ? void 0 : err.message) === null || _a === void 0 ? void 0 : _a.toLowerCase()) === null || _b === void 0 ? void 0 : _b.includes("encountered")) {
          this["~standard"].async = true;
        }
        ctx.common = {
          issues: [],
          async: true
        };
      }
    }
    return this._parseAsync({ data, path: [], parent: ctx }).then((result) => isValid(result) ? {
      value: result.value
    } : {
      issues: ctx.common.issues
    });
  }
  async parseAsync(data, params) {
    const result = await this.safeParseAsync(data, params);
    if (result.success)
      return result.data;
    throw result.error;
  }
  async safeParseAsync(data, params) {
    const ctx = {
      common: {
        issues: [],
        contextualErrorMap: params === null || params === void 0 ? void 0 : params.errorMap,
        async: true
      },
      path: (params === null || params === void 0 ? void 0 : params.path) || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data,
      parsedType: getParsedType(data)
    };
    const maybeAsyncResult = this._parse({ data, path: ctx.path, parent: ctx });
    const result = await (isAsync(maybeAsyncResult) ? maybeAsyncResult : Promise.resolve(maybeAsyncResult));
    return handleResult(ctx, result);
  }
  refine(check, message) {
    const getIssueProperties = /* @__PURE__ */ __name((val) => {
      if (typeof message === "string" || typeof message === "undefined") {
        return { message };
      } else if (typeof message === "function") {
        return message(val);
      } else {
        return message;
      }
    }, "getIssueProperties");
    return this._refinement((val, ctx) => {
      const result = check(val);
      const setError = /* @__PURE__ */ __name(() => ctx.addIssue({
        code: ZodIssueCode.custom,
        ...getIssueProperties(val)
      }), "setError");
      if (typeof Promise !== "undefined" && result instanceof Promise) {
        return result.then((data) => {
          if (!data) {
            setError();
            return false;
          } else {
            return true;
          }
        });
      }
      if (!result) {
        setError();
        return false;
      } else {
        return true;
      }
    });
  }
  refinement(check, refinementData) {
    return this._refinement((val, ctx) => {
      if (!check(val)) {
        ctx.addIssue(typeof refinementData === "function" ? refinementData(val, ctx) : refinementData);
        return false;
      } else {
        return true;
      }
    });
  }
  _refinement(refinement) {
    return new ZodEffects({
      schema: this,
      typeName: ZodFirstPartyTypeKind.ZodEffects,
      effect: { type: "refinement", refinement }
    });
  }
  superRefine(refinement) {
    return this._refinement(refinement);
  }
  constructor(def) {
    this.spa = this.safeParseAsync;
    this._def = def;
    this.parse = this.parse.bind(this);
    this.safeParse = this.safeParse.bind(this);
    this.parseAsync = this.parseAsync.bind(this);
    this.safeParseAsync = this.safeParseAsync.bind(this);
    this.spa = this.spa.bind(this);
    this.refine = this.refine.bind(this);
    this.refinement = this.refinement.bind(this);
    this.superRefine = this.superRefine.bind(this);
    this.optional = this.optional.bind(this);
    this.nullable = this.nullable.bind(this);
    this.nullish = this.nullish.bind(this);
    this.array = this.array.bind(this);
    this.promise = this.promise.bind(this);
    this.or = this.or.bind(this);
    this.and = this.and.bind(this);
    this.transform = this.transform.bind(this);
    this.brand = this.brand.bind(this);
    this.default = this.default.bind(this);
    this.catch = this.catch.bind(this);
    this.describe = this.describe.bind(this);
    this.pipe = this.pipe.bind(this);
    this.readonly = this.readonly.bind(this);
    this.isNullable = this.isNullable.bind(this);
    this.isOptional = this.isOptional.bind(this);
    this["~standard"] = {
      version: 1,
      vendor: "zod",
      validate: (data) => this["~validate"](data)
    };
  }
  optional() {
    return ZodOptional.create(this, this._def);
  }
  nullable() {
    return ZodNullable.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return ZodArray.create(this);
  }
  promise() {
    return ZodPromise.create(this, this._def);
  }
  or(option) {
    return ZodUnion.create([this, option], this._def);
  }
  and(incoming) {
    return ZodIntersection.create(this, incoming, this._def);
  }
  transform(transform) {
    return new ZodEffects({
      ...processCreateParams(this._def),
      schema: this,
      typeName: ZodFirstPartyTypeKind.ZodEffects,
      effect: { type: "transform", transform }
    });
  }
  default(def) {
    const defaultValueFunc = typeof def === "function" ? def : () => def;
    return new ZodDefault({
      ...processCreateParams(this._def),
      innerType: this,
      defaultValue: defaultValueFunc,
      typeName: ZodFirstPartyTypeKind.ZodDefault
    });
  }
  brand() {
    return new ZodBranded({
      typeName: ZodFirstPartyTypeKind.ZodBranded,
      type: this,
      ...processCreateParams(this._def)
    });
  }
  catch(def) {
    const catchValueFunc = typeof def === "function" ? def : () => def;
    return new ZodCatch({
      ...processCreateParams(this._def),
      innerType: this,
      catchValue: catchValueFunc,
      typeName: ZodFirstPartyTypeKind.ZodCatch
    });
  }
  describe(description) {
    const This = this.constructor;
    return new This({
      ...this._def,
      description
    });
  }
  pipe(target) {
    return ZodPipeline.create(this, target);
  }
  readonly() {
    return ZodReadonly.create(this);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
};
__name(ZodType, "ZodType");
var cuidRegex = /^c[^\s-]{8,}$/i;
var cuid2Regex = /^[0-9a-z]+$/;
var ulidRegex = /^[0-9A-HJKMNP-TV-Z]{26}$/i;
var uuidRegex = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i;
var nanoidRegex = /^[a-z0-9_-]{21}$/i;
var jwtRegex = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/;
var durationRegex = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/;
var emailRegex = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i;
var _emojiRegex = `^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$`;
var emojiRegex;
var ipv4Regex = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/;
var ipv4CidrRegex = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/;
var ipv6Regex = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/;
var ipv6CidrRegex = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/;
var base64Regex = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;
var base64urlRegex = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/;
var dateRegexSource = `((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))`;
var dateRegex = new RegExp(`^${dateRegexSource}$`);
function timeRegexSource(args) {
  let secondsRegexSource = `[0-5]\\d`;
  if (args.precision) {
    secondsRegexSource = `${secondsRegexSource}\\.\\d{${args.precision}}`;
  } else if (args.precision == null) {
    secondsRegexSource = `${secondsRegexSource}(\\.\\d+)?`;
  }
  const secondsQuantifier = args.precision ? "+" : "?";
  return `([01]\\d|2[0-3]):[0-5]\\d(:${secondsRegexSource})${secondsQuantifier}`;
}
__name(timeRegexSource, "timeRegexSource");
function timeRegex(args) {
  return new RegExp(`^${timeRegexSource(args)}$`);
}
__name(timeRegex, "timeRegex");
function datetimeRegex(args) {
  let regex = `${dateRegexSource}T${timeRegexSource(args)}`;
  const opts = [];
  opts.push(args.local ? `Z?` : `Z`);
  if (args.offset)
    opts.push(`([+-]\\d{2}:?\\d{2})`);
  regex = `${regex}(${opts.join("|")})`;
  return new RegExp(`^${regex}$`);
}
__name(datetimeRegex, "datetimeRegex");
function isValidIP(ip, version) {
  if ((version === "v4" || !version) && ipv4Regex.test(ip)) {
    return true;
  }
  if ((version === "v6" || !version) && ipv6Regex.test(ip)) {
    return true;
  }
  return false;
}
__name(isValidIP, "isValidIP");
function isValidJWT(jwt, alg) {
  if (!jwtRegex.test(jwt))
    return false;
  try {
    const [header] = jwt.split(".");
    const base64 = header.replace(/-/g, "+").replace(/_/g, "/").padEnd(header.length + (4 - header.length % 4) % 4, "=");
    const decoded = JSON.parse(atob(base64));
    if (typeof decoded !== "object" || decoded === null)
      return false;
    if (!decoded.typ || !decoded.alg)
      return false;
    if (alg && decoded.alg !== alg)
      return false;
    return true;
  } catch (_a) {
    return false;
  }
}
__name(isValidJWT, "isValidJWT");
function isValidCidr(ip, version) {
  if ((version === "v4" || !version) && ipv4CidrRegex.test(ip)) {
    return true;
  }
  if ((version === "v6" || !version) && ipv6CidrRegex.test(ip)) {
    return true;
  }
  return false;
}
__name(isValidCidr, "isValidCidr");
var ZodString = class extends ZodType {
  _parse(input) {
    if (this._def.coerce) {
      input.data = String(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.string) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.string,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    const status = new ParseStatus();
    let ctx = void 0;
    for (const check of this._def.checks) {
      if (check.kind === "min") {
        if (input.data.length < check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            minimum: check.value,
            type: "string",
            inclusive: true,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        if (input.data.length > check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            maximum: check.value,
            type: "string",
            inclusive: true,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "length") {
        const tooBig = input.data.length > check.value;
        const tooSmall = input.data.length < check.value;
        if (tooBig || tooSmall) {
          ctx = this._getOrReturnCtx(input, ctx);
          if (tooBig) {
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_big,
              maximum: check.value,
              type: "string",
              inclusive: true,
              exact: true,
              message: check.message
            });
          } else if (tooSmall) {
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_small,
              minimum: check.value,
              type: "string",
              inclusive: true,
              exact: true,
              message: check.message
            });
          }
          status.dirty();
        }
      } else if (check.kind === "email") {
        if (!emailRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "email",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "emoji") {
        if (!emojiRegex) {
          emojiRegex = new RegExp(_emojiRegex, "u");
        }
        if (!emojiRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "emoji",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "uuid") {
        if (!uuidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "uuid",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "nanoid") {
        if (!nanoidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "nanoid",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "cuid") {
        if (!cuidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "cuid",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "cuid2") {
        if (!cuid2Regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "cuid2",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "ulid") {
        if (!ulidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "ulid",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "url") {
        try {
          new URL(input.data);
        } catch (_a) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "url",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "regex") {
        check.regex.lastIndex = 0;
        const testResult = check.regex.test(input.data);
        if (!testResult) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "regex",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "trim") {
        input.data = input.data.trim();
      } else if (check.kind === "includes") {
        if (!input.data.includes(check.value, check.position)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: { includes: check.value, position: check.position },
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "toLowerCase") {
        input.data = input.data.toLowerCase();
      } else if (check.kind === "toUpperCase") {
        input.data = input.data.toUpperCase();
      } else if (check.kind === "startsWith") {
        if (!input.data.startsWith(check.value)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: { startsWith: check.value },
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "endsWith") {
        if (!input.data.endsWith(check.value)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: { endsWith: check.value },
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "datetime") {
        const regex = datetimeRegex(check);
        if (!regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: "datetime",
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "date") {
        const regex = dateRegex;
        if (!regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: "date",
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "time") {
        const regex = timeRegex(check);
        if (!regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: "time",
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "duration") {
        if (!durationRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "duration",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "ip") {
        if (!isValidIP(input.data, check.version)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "ip",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "jwt") {
        if (!isValidJWT(input.data, check.alg)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "jwt",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "cidr") {
        if (!isValidCidr(input.data, check.version)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "cidr",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "base64") {
        if (!base64Regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "base64",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "base64url") {
        if (!base64urlRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "base64url",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return { status: status.value, value: input.data };
  }
  _regex(regex, validation, message) {
    return this.refinement((data) => regex.test(data), {
      validation,
      code: ZodIssueCode.invalid_string,
      ...errorUtil.errToObj(message)
    });
  }
  _addCheck(check) {
    return new ZodString({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  email(message) {
    return this._addCheck({ kind: "email", ...errorUtil.errToObj(message) });
  }
  url(message) {
    return this._addCheck({ kind: "url", ...errorUtil.errToObj(message) });
  }
  emoji(message) {
    return this._addCheck({ kind: "emoji", ...errorUtil.errToObj(message) });
  }
  uuid(message) {
    return this._addCheck({ kind: "uuid", ...errorUtil.errToObj(message) });
  }
  nanoid(message) {
    return this._addCheck({ kind: "nanoid", ...errorUtil.errToObj(message) });
  }
  cuid(message) {
    return this._addCheck({ kind: "cuid", ...errorUtil.errToObj(message) });
  }
  cuid2(message) {
    return this._addCheck({ kind: "cuid2", ...errorUtil.errToObj(message) });
  }
  ulid(message) {
    return this._addCheck({ kind: "ulid", ...errorUtil.errToObj(message) });
  }
  base64(message) {
    return this._addCheck({ kind: "base64", ...errorUtil.errToObj(message) });
  }
  base64url(message) {
    return this._addCheck({
      kind: "base64url",
      ...errorUtil.errToObj(message)
    });
  }
  jwt(options) {
    return this._addCheck({ kind: "jwt", ...errorUtil.errToObj(options) });
  }
  ip(options) {
    return this._addCheck({ kind: "ip", ...errorUtil.errToObj(options) });
  }
  cidr(options) {
    return this._addCheck({ kind: "cidr", ...errorUtil.errToObj(options) });
  }
  datetime(options) {
    var _a, _b;
    if (typeof options === "string") {
      return this._addCheck({
        kind: "datetime",
        precision: null,
        offset: false,
        local: false,
        message: options
      });
    }
    return this._addCheck({
      kind: "datetime",
      precision: typeof (options === null || options === void 0 ? void 0 : options.precision) === "undefined" ? null : options === null || options === void 0 ? void 0 : options.precision,
      offset: (_a = options === null || options === void 0 ? void 0 : options.offset) !== null && _a !== void 0 ? _a : false,
      local: (_b = options === null || options === void 0 ? void 0 : options.local) !== null && _b !== void 0 ? _b : false,
      ...errorUtil.errToObj(options === null || options === void 0 ? void 0 : options.message)
    });
  }
  date(message) {
    return this._addCheck({ kind: "date", message });
  }
  time(options) {
    if (typeof options === "string") {
      return this._addCheck({
        kind: "time",
        precision: null,
        message: options
      });
    }
    return this._addCheck({
      kind: "time",
      precision: typeof (options === null || options === void 0 ? void 0 : options.precision) === "undefined" ? null : options === null || options === void 0 ? void 0 : options.precision,
      ...errorUtil.errToObj(options === null || options === void 0 ? void 0 : options.message)
    });
  }
  duration(message) {
    return this._addCheck({ kind: "duration", ...errorUtil.errToObj(message) });
  }
  regex(regex, message) {
    return this._addCheck({
      kind: "regex",
      regex,
      ...errorUtil.errToObj(message)
    });
  }
  includes(value, options) {
    return this._addCheck({
      kind: "includes",
      value,
      position: options === null || options === void 0 ? void 0 : options.position,
      ...errorUtil.errToObj(options === null || options === void 0 ? void 0 : options.message)
    });
  }
  startsWith(value, message) {
    return this._addCheck({
      kind: "startsWith",
      value,
      ...errorUtil.errToObj(message)
    });
  }
  endsWith(value, message) {
    return this._addCheck({
      kind: "endsWith",
      value,
      ...errorUtil.errToObj(message)
    });
  }
  min(minLength, message) {
    return this._addCheck({
      kind: "min",
      value: minLength,
      ...errorUtil.errToObj(message)
    });
  }
  max(maxLength, message) {
    return this._addCheck({
      kind: "max",
      value: maxLength,
      ...errorUtil.errToObj(message)
    });
  }
  length(len, message) {
    return this._addCheck({
      kind: "length",
      value: len,
      ...errorUtil.errToObj(message)
    });
  }
  /**
   * Equivalent to `.min(1)`
   */
  nonempty(message) {
    return this.min(1, errorUtil.errToObj(message));
  }
  trim() {
    return new ZodString({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }]
    });
  }
  toLowerCase() {
    return new ZodString({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }]
    });
  }
  toUpperCase() {
    return new ZodString({
      ...this._def,
      checks: [...this._def.checks, { kind: "toUpperCase" }]
    });
  }
  get isDatetime() {
    return !!this._def.checks.find((ch) => ch.kind === "datetime");
  }
  get isDate() {
    return !!this._def.checks.find((ch) => ch.kind === "date");
  }
  get isTime() {
    return !!this._def.checks.find((ch) => ch.kind === "time");
  }
  get isDuration() {
    return !!this._def.checks.find((ch) => ch.kind === "duration");
  }
  get isEmail() {
    return !!this._def.checks.find((ch) => ch.kind === "email");
  }
  get isURL() {
    return !!this._def.checks.find((ch) => ch.kind === "url");
  }
  get isEmoji() {
    return !!this._def.checks.find((ch) => ch.kind === "emoji");
  }
  get isUUID() {
    return !!this._def.checks.find((ch) => ch.kind === "uuid");
  }
  get isNANOID() {
    return !!this._def.checks.find((ch) => ch.kind === "nanoid");
  }
  get isCUID() {
    return !!this._def.checks.find((ch) => ch.kind === "cuid");
  }
  get isCUID2() {
    return !!this._def.checks.find((ch) => ch.kind === "cuid2");
  }
  get isULID() {
    return !!this._def.checks.find((ch) => ch.kind === "ulid");
  }
  get isIP() {
    return !!this._def.checks.find((ch) => ch.kind === "ip");
  }
  get isCIDR() {
    return !!this._def.checks.find((ch) => ch.kind === "cidr");
  }
  get isBase64() {
    return !!this._def.checks.find((ch) => ch.kind === "base64");
  }
  get isBase64url() {
    return !!this._def.checks.find((ch) => ch.kind === "base64url");
  }
  get minLength() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min;
  }
  get maxLength() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max;
  }
};
__name(ZodString, "ZodString");
ZodString.create = (params) => {
  var _a;
  return new ZodString({
    checks: [],
    typeName: ZodFirstPartyTypeKind.ZodString,
    coerce: (_a = params === null || params === void 0 ? void 0 : params.coerce) !== null && _a !== void 0 ? _a : false,
    ...processCreateParams(params)
  });
};
function floatSafeRemainder(val, step) {
  const valDecCount = (val.toString().split(".")[1] || "").length;
  const stepDecCount = (step.toString().split(".")[1] || "").length;
  const decCount = valDecCount > stepDecCount ? valDecCount : stepDecCount;
  const valInt = parseInt(val.toFixed(decCount).replace(".", ""));
  const stepInt = parseInt(step.toFixed(decCount).replace(".", ""));
  return valInt % stepInt / Math.pow(10, decCount);
}
__name(floatSafeRemainder, "floatSafeRemainder");
var ZodNumber = class extends ZodType {
  constructor() {
    super(...arguments);
    this.min = this.gte;
    this.max = this.lte;
    this.step = this.multipleOf;
  }
  _parse(input) {
    if (this._def.coerce) {
      input.data = Number(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.number) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.number,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    let ctx = void 0;
    const status = new ParseStatus();
    for (const check of this._def.checks) {
      if (check.kind === "int") {
        if (!util.isInteger(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_type,
            expected: "integer",
            received: "float",
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "min") {
        const tooSmall = check.inclusive ? input.data < check.value : input.data <= check.value;
        if (tooSmall) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            minimum: check.value,
            type: "number",
            inclusive: check.inclusive,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        const tooBig = check.inclusive ? input.data > check.value : input.data >= check.value;
        if (tooBig) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            maximum: check.value,
            type: "number",
            inclusive: check.inclusive,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "multipleOf") {
        if (floatSafeRemainder(input.data, check.value) !== 0) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.not_multiple_of,
            multipleOf: check.value,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "finite") {
        if (!Number.isFinite(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.not_finite,
            message: check.message
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return { status: status.value, value: input.data };
  }
  gte(value, message) {
    return this.setLimit("min", value, true, errorUtil.toString(message));
  }
  gt(value, message) {
    return this.setLimit("min", value, false, errorUtil.toString(message));
  }
  lte(value, message) {
    return this.setLimit("max", value, true, errorUtil.toString(message));
  }
  lt(value, message) {
    return this.setLimit("max", value, false, errorUtil.toString(message));
  }
  setLimit(kind, value, inclusive, message) {
    return new ZodNumber({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind,
          value,
          inclusive,
          message: errorUtil.toString(message)
        }
      ]
    });
  }
  _addCheck(check) {
    return new ZodNumber({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  int(message) {
    return this._addCheck({
      kind: "int",
      message: errorUtil.toString(message)
    });
  }
  positive(message) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  negative(message) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  nonpositive(message) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  nonnegative(message) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  multipleOf(value, message) {
    return this._addCheck({
      kind: "multipleOf",
      value,
      message: errorUtil.toString(message)
    });
  }
  finite(message) {
    return this._addCheck({
      kind: "finite",
      message: errorUtil.toString(message)
    });
  }
  safe(message) {
    return this._addCheck({
      kind: "min",
      inclusive: true,
      value: Number.MIN_SAFE_INTEGER,
      message: errorUtil.toString(message)
    })._addCheck({
      kind: "max",
      inclusive: true,
      value: Number.MAX_SAFE_INTEGER,
      message: errorUtil.toString(message)
    });
  }
  get minValue() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min;
  }
  get maxValue() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max;
  }
  get isInt() {
    return !!this._def.checks.find((ch) => ch.kind === "int" || ch.kind === "multipleOf" && util.isInteger(ch.value));
  }
  get isFinite() {
    let max = null, min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "finite" || ch.kind === "int" || ch.kind === "multipleOf") {
        return true;
      } else if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      } else if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return Number.isFinite(min) && Number.isFinite(max);
  }
};
__name(ZodNumber, "ZodNumber");
ZodNumber.create = (params) => {
  return new ZodNumber({
    checks: [],
    typeName: ZodFirstPartyTypeKind.ZodNumber,
    coerce: (params === null || params === void 0 ? void 0 : params.coerce) || false,
    ...processCreateParams(params)
  });
};
var ZodBigInt = class extends ZodType {
  constructor() {
    super(...arguments);
    this.min = this.gte;
    this.max = this.lte;
  }
  _parse(input) {
    if (this._def.coerce) {
      try {
        input.data = BigInt(input.data);
      } catch (_a) {
        return this._getInvalidInput(input);
      }
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.bigint) {
      return this._getInvalidInput(input);
    }
    let ctx = void 0;
    const status = new ParseStatus();
    for (const check of this._def.checks) {
      if (check.kind === "min") {
        const tooSmall = check.inclusive ? input.data < check.value : input.data <= check.value;
        if (tooSmall) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            type: "bigint",
            minimum: check.value,
            inclusive: check.inclusive,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        const tooBig = check.inclusive ? input.data > check.value : input.data >= check.value;
        if (tooBig) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            type: "bigint",
            maximum: check.value,
            inclusive: check.inclusive,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "multipleOf") {
        if (input.data % check.value !== BigInt(0)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.not_multiple_of,
            multipleOf: check.value,
            message: check.message
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return { status: status.value, value: input.data };
  }
  _getInvalidInput(input) {
    const ctx = this._getOrReturnCtx(input);
    addIssueToContext(ctx, {
      code: ZodIssueCode.invalid_type,
      expected: ZodParsedType.bigint,
      received: ctx.parsedType
    });
    return INVALID;
  }
  gte(value, message) {
    return this.setLimit("min", value, true, errorUtil.toString(message));
  }
  gt(value, message) {
    return this.setLimit("min", value, false, errorUtil.toString(message));
  }
  lte(value, message) {
    return this.setLimit("max", value, true, errorUtil.toString(message));
  }
  lt(value, message) {
    return this.setLimit("max", value, false, errorUtil.toString(message));
  }
  setLimit(kind, value, inclusive, message) {
    return new ZodBigInt({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind,
          value,
          inclusive,
          message: errorUtil.toString(message)
        }
      ]
    });
  }
  _addCheck(check) {
    return new ZodBigInt({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  positive(message) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  negative(message) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  nonpositive(message) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  nonnegative(message) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  multipleOf(value, message) {
    return this._addCheck({
      kind: "multipleOf",
      value,
      message: errorUtil.toString(message)
    });
  }
  get minValue() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min;
  }
  get maxValue() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max;
  }
};
__name(ZodBigInt, "ZodBigInt");
ZodBigInt.create = (params) => {
  var _a;
  return new ZodBigInt({
    checks: [],
    typeName: ZodFirstPartyTypeKind.ZodBigInt,
    coerce: (_a = params === null || params === void 0 ? void 0 : params.coerce) !== null && _a !== void 0 ? _a : false,
    ...processCreateParams(params)
  });
};
var ZodBoolean = class extends ZodType {
  _parse(input) {
    if (this._def.coerce) {
      input.data = Boolean(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.boolean) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.boolean,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
};
__name(ZodBoolean, "ZodBoolean");
ZodBoolean.create = (params) => {
  return new ZodBoolean({
    typeName: ZodFirstPartyTypeKind.ZodBoolean,
    coerce: (params === null || params === void 0 ? void 0 : params.coerce) || false,
    ...processCreateParams(params)
  });
};
var ZodDate = class extends ZodType {
  _parse(input) {
    if (this._def.coerce) {
      input.data = new Date(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.date) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.date,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    if (isNaN(input.data.getTime())) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_date
      });
      return INVALID;
    }
    const status = new ParseStatus();
    let ctx = void 0;
    for (const check of this._def.checks) {
      if (check.kind === "min") {
        if (input.data.getTime() < check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            message: check.message,
            inclusive: true,
            exact: false,
            minimum: check.value,
            type: "date"
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        if (input.data.getTime() > check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            message: check.message,
            inclusive: true,
            exact: false,
            maximum: check.value,
            type: "date"
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return {
      status: status.value,
      value: new Date(input.data.getTime())
    };
  }
  _addCheck(check) {
    return new ZodDate({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  min(minDate, message) {
    return this._addCheck({
      kind: "min",
      value: minDate.getTime(),
      message: errorUtil.toString(message)
    });
  }
  max(maxDate, message) {
    return this._addCheck({
      kind: "max",
      value: maxDate.getTime(),
      message: errorUtil.toString(message)
    });
  }
  get minDate() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min != null ? new Date(min) : null;
  }
  get maxDate() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max != null ? new Date(max) : null;
  }
};
__name(ZodDate, "ZodDate");
ZodDate.create = (params) => {
  return new ZodDate({
    checks: [],
    coerce: (params === null || params === void 0 ? void 0 : params.coerce) || false,
    typeName: ZodFirstPartyTypeKind.ZodDate,
    ...processCreateParams(params)
  });
};
var ZodSymbol = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.symbol) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.symbol,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
};
__name(ZodSymbol, "ZodSymbol");
ZodSymbol.create = (params) => {
  return new ZodSymbol({
    typeName: ZodFirstPartyTypeKind.ZodSymbol,
    ...processCreateParams(params)
  });
};
var ZodUndefined = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.undefined) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.undefined,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
};
__name(ZodUndefined, "ZodUndefined");
ZodUndefined.create = (params) => {
  return new ZodUndefined({
    typeName: ZodFirstPartyTypeKind.ZodUndefined,
    ...processCreateParams(params)
  });
};
var ZodNull = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.null) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.null,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
};
__name(ZodNull, "ZodNull");
ZodNull.create = (params) => {
  return new ZodNull({
    typeName: ZodFirstPartyTypeKind.ZodNull,
    ...processCreateParams(params)
  });
};
var ZodAny = class extends ZodType {
  constructor() {
    super(...arguments);
    this._any = true;
  }
  _parse(input) {
    return OK(input.data);
  }
};
__name(ZodAny, "ZodAny");
ZodAny.create = (params) => {
  return new ZodAny({
    typeName: ZodFirstPartyTypeKind.ZodAny,
    ...processCreateParams(params)
  });
};
var ZodUnknown = class extends ZodType {
  constructor() {
    super(...arguments);
    this._unknown = true;
  }
  _parse(input) {
    return OK(input.data);
  }
};
__name(ZodUnknown, "ZodUnknown");
ZodUnknown.create = (params) => {
  return new ZodUnknown({
    typeName: ZodFirstPartyTypeKind.ZodUnknown,
    ...processCreateParams(params)
  });
};
var ZodNever = class extends ZodType {
  _parse(input) {
    const ctx = this._getOrReturnCtx(input);
    addIssueToContext(ctx, {
      code: ZodIssueCode.invalid_type,
      expected: ZodParsedType.never,
      received: ctx.parsedType
    });
    return INVALID;
  }
};
__name(ZodNever, "ZodNever");
ZodNever.create = (params) => {
  return new ZodNever({
    typeName: ZodFirstPartyTypeKind.ZodNever,
    ...processCreateParams(params)
  });
};
var ZodVoid = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.undefined) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.void,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
};
__name(ZodVoid, "ZodVoid");
ZodVoid.create = (params) => {
  return new ZodVoid({
    typeName: ZodFirstPartyTypeKind.ZodVoid,
    ...processCreateParams(params)
  });
};
var ZodArray = class extends ZodType {
  _parse(input) {
    const { ctx, status } = this._processInputParams(input);
    const def = this._def;
    if (ctx.parsedType !== ZodParsedType.array) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.array,
        received: ctx.parsedType
      });
      return INVALID;
    }
    if (def.exactLength !== null) {
      const tooBig = ctx.data.length > def.exactLength.value;
      const tooSmall = ctx.data.length < def.exactLength.value;
      if (tooBig || tooSmall) {
        addIssueToContext(ctx, {
          code: tooBig ? ZodIssueCode.too_big : ZodIssueCode.too_small,
          minimum: tooSmall ? def.exactLength.value : void 0,
          maximum: tooBig ? def.exactLength.value : void 0,
          type: "array",
          inclusive: true,
          exact: true,
          message: def.exactLength.message
        });
        status.dirty();
      }
    }
    if (def.minLength !== null) {
      if (ctx.data.length < def.minLength.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_small,
          minimum: def.minLength.value,
          type: "array",
          inclusive: true,
          exact: false,
          message: def.minLength.message
        });
        status.dirty();
      }
    }
    if (def.maxLength !== null) {
      if (ctx.data.length > def.maxLength.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_big,
          maximum: def.maxLength.value,
          type: "array",
          inclusive: true,
          exact: false,
          message: def.maxLength.message
        });
        status.dirty();
      }
    }
    if (ctx.common.async) {
      return Promise.all([...ctx.data].map((item, i) => {
        return def.type._parseAsync(new ParseInputLazyPath(ctx, item, ctx.path, i));
      })).then((result2) => {
        return ParseStatus.mergeArray(status, result2);
      });
    }
    const result = [...ctx.data].map((item, i) => {
      return def.type._parseSync(new ParseInputLazyPath(ctx, item, ctx.path, i));
    });
    return ParseStatus.mergeArray(status, result);
  }
  get element() {
    return this._def.type;
  }
  min(minLength, message) {
    return new ZodArray({
      ...this._def,
      minLength: { value: minLength, message: errorUtil.toString(message) }
    });
  }
  max(maxLength, message) {
    return new ZodArray({
      ...this._def,
      maxLength: { value: maxLength, message: errorUtil.toString(message) }
    });
  }
  length(len, message) {
    return new ZodArray({
      ...this._def,
      exactLength: { value: len, message: errorUtil.toString(message) }
    });
  }
  nonempty(message) {
    return this.min(1, message);
  }
};
__name(ZodArray, "ZodArray");
ZodArray.create = (schema, params) => {
  return new ZodArray({
    type: schema,
    minLength: null,
    maxLength: null,
    exactLength: null,
    typeName: ZodFirstPartyTypeKind.ZodArray,
    ...processCreateParams(params)
  });
};
function deepPartialify(schema) {
  if (schema instanceof ZodObject) {
    const newShape = {};
    for (const key in schema.shape) {
      const fieldSchema = schema.shape[key];
      newShape[key] = ZodOptional.create(deepPartialify(fieldSchema));
    }
    return new ZodObject({
      ...schema._def,
      shape: () => newShape
    });
  } else if (schema instanceof ZodArray) {
    return new ZodArray({
      ...schema._def,
      type: deepPartialify(schema.element)
    });
  } else if (schema instanceof ZodOptional) {
    return ZodOptional.create(deepPartialify(schema.unwrap()));
  } else if (schema instanceof ZodNullable) {
    return ZodNullable.create(deepPartialify(schema.unwrap()));
  } else if (schema instanceof ZodTuple) {
    return ZodTuple.create(schema.items.map((item) => deepPartialify(item)));
  } else {
    return schema;
  }
}
__name(deepPartialify, "deepPartialify");
var ZodObject = class extends ZodType {
  constructor() {
    super(...arguments);
    this._cached = null;
    this.nonstrict = this.passthrough;
    this.augment = this.extend;
  }
  _getCached() {
    if (this._cached !== null)
      return this._cached;
    const shape = this._def.shape();
    const keys = util.objectKeys(shape);
    return this._cached = { shape, keys };
  }
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.object) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.object,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    const { status, ctx } = this._processInputParams(input);
    const { shape, keys: shapeKeys } = this._getCached();
    const extraKeys = [];
    if (!(this._def.catchall instanceof ZodNever && this._def.unknownKeys === "strip")) {
      for (const key in ctx.data) {
        if (!shapeKeys.includes(key)) {
          extraKeys.push(key);
        }
      }
    }
    const pairs = [];
    for (const key of shapeKeys) {
      const keyValidator = shape[key];
      const value = ctx.data[key];
      pairs.push({
        key: { status: "valid", value: key },
        value: keyValidator._parse(new ParseInputLazyPath(ctx, value, ctx.path, key)),
        alwaysSet: key in ctx.data
      });
    }
    if (this._def.catchall instanceof ZodNever) {
      const unknownKeys = this._def.unknownKeys;
      if (unknownKeys === "passthrough") {
        for (const key of extraKeys) {
          pairs.push({
            key: { status: "valid", value: key },
            value: { status: "valid", value: ctx.data[key] }
          });
        }
      } else if (unknownKeys === "strict") {
        if (extraKeys.length > 0) {
          addIssueToContext(ctx, {
            code: ZodIssueCode.unrecognized_keys,
            keys: extraKeys
          });
          status.dirty();
        }
      } else if (unknownKeys === "strip")
        ;
      else {
        throw new Error(`Internal ZodObject error: invalid unknownKeys value.`);
      }
    } else {
      const catchall = this._def.catchall;
      for (const key of extraKeys) {
        const value = ctx.data[key];
        pairs.push({
          key: { status: "valid", value: key },
          value: catchall._parse(
            new ParseInputLazyPath(ctx, value, ctx.path, key)
            //, ctx.child(key), value, getParsedType(value)
          ),
          alwaysSet: key in ctx.data
        });
      }
    }
    if (ctx.common.async) {
      return Promise.resolve().then(async () => {
        const syncPairs = [];
        for (const pair of pairs) {
          const key = await pair.key;
          const value = await pair.value;
          syncPairs.push({
            key,
            value,
            alwaysSet: pair.alwaysSet
          });
        }
        return syncPairs;
      }).then((syncPairs) => {
        return ParseStatus.mergeObjectSync(status, syncPairs);
      });
    } else {
      return ParseStatus.mergeObjectSync(status, pairs);
    }
  }
  get shape() {
    return this._def.shape();
  }
  strict(message) {
    errorUtil.errToObj;
    return new ZodObject({
      ...this._def,
      unknownKeys: "strict",
      ...message !== void 0 ? {
        errorMap: (issue, ctx) => {
          var _a, _b, _c, _d;
          const defaultError = (_c = (_b = (_a = this._def).errorMap) === null || _b === void 0 ? void 0 : _b.call(_a, issue, ctx).message) !== null && _c !== void 0 ? _c : ctx.defaultError;
          if (issue.code === "unrecognized_keys")
            return {
              message: (_d = errorUtil.errToObj(message).message) !== null && _d !== void 0 ? _d : defaultError
            };
          return {
            message: defaultError
          };
        }
      } : {}
    });
  }
  strip() {
    return new ZodObject({
      ...this._def,
      unknownKeys: "strip"
    });
  }
  passthrough() {
    return new ZodObject({
      ...this._def,
      unknownKeys: "passthrough"
    });
  }
  // const AugmentFactory =
  //   <Def extends ZodObjectDef>(def: Def) =>
  //   <Augmentation extends ZodRawShape>(
  //     augmentation: Augmentation
  //   ): ZodObject<
  //     extendShape<ReturnType<Def["shape"]>, Augmentation>,
  //     Def["unknownKeys"],
  //     Def["catchall"]
  //   > => {
  //     return new ZodObject({
  //       ...def,
  //       shape: () => ({
  //         ...def.shape(),
  //         ...augmentation,
  //       }),
  //     }) as any;
  //   };
  extend(augmentation) {
    return new ZodObject({
      ...this._def,
      shape: () => ({
        ...this._def.shape(),
        ...augmentation
      })
    });
  }
  /**
   * Prior to zod@1.0.12 there was a bug in the
   * inferred type of merged objects. Please
   * upgrade if you are experiencing issues.
   */
  merge(merging) {
    const merged = new ZodObject({
      unknownKeys: merging._def.unknownKeys,
      catchall: merging._def.catchall,
      shape: () => ({
        ...this._def.shape(),
        ...merging._def.shape()
      }),
      typeName: ZodFirstPartyTypeKind.ZodObject
    });
    return merged;
  }
  // merge<
  //   Incoming extends AnyZodObject,
  //   Augmentation extends Incoming["shape"],
  //   NewOutput extends {
  //     [k in keyof Augmentation | keyof Output]: k extends keyof Augmentation
  //       ? Augmentation[k]["_output"]
  //       : k extends keyof Output
  //       ? Output[k]
  //       : never;
  //   },
  //   NewInput extends {
  //     [k in keyof Augmentation | keyof Input]: k extends keyof Augmentation
  //       ? Augmentation[k]["_input"]
  //       : k extends keyof Input
  //       ? Input[k]
  //       : never;
  //   }
  // >(
  //   merging: Incoming
  // ): ZodObject<
  //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
  //   Incoming["_def"]["unknownKeys"],
  //   Incoming["_def"]["catchall"],
  //   NewOutput,
  //   NewInput
  // > {
  //   const merged: any = new ZodObject({
  //     unknownKeys: merging._def.unknownKeys,
  //     catchall: merging._def.catchall,
  //     shape: () =>
  //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
  //     typeName: ZodFirstPartyTypeKind.ZodObject,
  //   }) as any;
  //   return merged;
  // }
  setKey(key, schema) {
    return this.augment({ [key]: schema });
  }
  // merge<Incoming extends AnyZodObject>(
  //   merging: Incoming
  // ): //ZodObject<T & Incoming["_shape"], UnknownKeys, Catchall> = (merging) => {
  // ZodObject<
  //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
  //   Incoming["_def"]["unknownKeys"],
  //   Incoming["_def"]["catchall"]
  // > {
  //   // const mergedShape = objectUtil.mergeShapes(
  //   //   this._def.shape(),
  //   //   merging._def.shape()
  //   // );
  //   const merged: any = new ZodObject({
  //     unknownKeys: merging._def.unknownKeys,
  //     catchall: merging._def.catchall,
  //     shape: () =>
  //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
  //     typeName: ZodFirstPartyTypeKind.ZodObject,
  //   }) as any;
  //   return merged;
  // }
  catchall(index) {
    return new ZodObject({
      ...this._def,
      catchall: index
    });
  }
  pick(mask) {
    const shape = {};
    util.objectKeys(mask).forEach((key) => {
      if (mask[key] && this.shape[key]) {
        shape[key] = this.shape[key];
      }
    });
    return new ZodObject({
      ...this._def,
      shape: () => shape
    });
  }
  omit(mask) {
    const shape = {};
    util.objectKeys(this.shape).forEach((key) => {
      if (!mask[key]) {
        shape[key] = this.shape[key];
      }
    });
    return new ZodObject({
      ...this._def,
      shape: () => shape
    });
  }
  /**
   * @deprecated
   */
  deepPartial() {
    return deepPartialify(this);
  }
  partial(mask) {
    const newShape = {};
    util.objectKeys(this.shape).forEach((key) => {
      const fieldSchema = this.shape[key];
      if (mask && !mask[key]) {
        newShape[key] = fieldSchema;
      } else {
        newShape[key] = fieldSchema.optional();
      }
    });
    return new ZodObject({
      ...this._def,
      shape: () => newShape
    });
  }
  required(mask) {
    const newShape = {};
    util.objectKeys(this.shape).forEach((key) => {
      if (mask && !mask[key]) {
        newShape[key] = this.shape[key];
      } else {
        const fieldSchema = this.shape[key];
        let newField = fieldSchema;
        while (newField instanceof ZodOptional) {
          newField = newField._def.innerType;
        }
        newShape[key] = newField;
      }
    });
    return new ZodObject({
      ...this._def,
      shape: () => newShape
    });
  }
  keyof() {
    return createZodEnum(util.objectKeys(this.shape));
  }
};
__name(ZodObject, "ZodObject");
ZodObject.create = (shape, params) => {
  return new ZodObject({
    shape: () => shape,
    unknownKeys: "strip",
    catchall: ZodNever.create(),
    typeName: ZodFirstPartyTypeKind.ZodObject,
    ...processCreateParams(params)
  });
};
ZodObject.strictCreate = (shape, params) => {
  return new ZodObject({
    shape: () => shape,
    unknownKeys: "strict",
    catchall: ZodNever.create(),
    typeName: ZodFirstPartyTypeKind.ZodObject,
    ...processCreateParams(params)
  });
};
ZodObject.lazycreate = (shape, params) => {
  return new ZodObject({
    shape,
    unknownKeys: "strip",
    catchall: ZodNever.create(),
    typeName: ZodFirstPartyTypeKind.ZodObject,
    ...processCreateParams(params)
  });
};
var ZodUnion = class extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    const options = this._def.options;
    function handleResults(results) {
      for (const result of results) {
        if (result.result.status === "valid") {
          return result.result;
        }
      }
      for (const result of results) {
        if (result.result.status === "dirty") {
          ctx.common.issues.push(...result.ctx.common.issues);
          return result.result;
        }
      }
      const unionErrors = results.map((result) => new ZodError(result.ctx.common.issues));
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_union,
        unionErrors
      });
      return INVALID;
    }
    __name(handleResults, "handleResults");
    if (ctx.common.async) {
      return Promise.all(options.map(async (option) => {
        const childCtx = {
          ...ctx,
          common: {
            ...ctx.common,
            issues: []
          },
          parent: null
        };
        return {
          result: await option._parseAsync({
            data: ctx.data,
            path: ctx.path,
            parent: childCtx
          }),
          ctx: childCtx
        };
      })).then(handleResults);
    } else {
      let dirty = void 0;
      const issues = [];
      for (const option of options) {
        const childCtx = {
          ...ctx,
          common: {
            ...ctx.common,
            issues: []
          },
          parent: null
        };
        const result = option._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: childCtx
        });
        if (result.status === "valid") {
          return result;
        } else if (result.status === "dirty" && !dirty) {
          dirty = { result, ctx: childCtx };
        }
        if (childCtx.common.issues.length) {
          issues.push(childCtx.common.issues);
        }
      }
      if (dirty) {
        ctx.common.issues.push(...dirty.ctx.common.issues);
        return dirty.result;
      }
      const unionErrors = issues.map((issues2) => new ZodError(issues2));
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_union,
        unionErrors
      });
      return INVALID;
    }
  }
  get options() {
    return this._def.options;
  }
};
__name(ZodUnion, "ZodUnion");
ZodUnion.create = (types, params) => {
  return new ZodUnion({
    options: types,
    typeName: ZodFirstPartyTypeKind.ZodUnion,
    ...processCreateParams(params)
  });
};
var getDiscriminator = /* @__PURE__ */ __name((type) => {
  if (type instanceof ZodLazy) {
    return getDiscriminator(type.schema);
  } else if (type instanceof ZodEffects) {
    return getDiscriminator(type.innerType());
  } else if (type instanceof ZodLiteral) {
    return [type.value];
  } else if (type instanceof ZodEnum) {
    return type.options;
  } else if (type instanceof ZodNativeEnum) {
    return util.objectValues(type.enum);
  } else if (type instanceof ZodDefault) {
    return getDiscriminator(type._def.innerType);
  } else if (type instanceof ZodUndefined) {
    return [void 0];
  } else if (type instanceof ZodNull) {
    return [null];
  } else if (type instanceof ZodOptional) {
    return [void 0, ...getDiscriminator(type.unwrap())];
  } else if (type instanceof ZodNullable) {
    return [null, ...getDiscriminator(type.unwrap())];
  } else if (type instanceof ZodBranded) {
    return getDiscriminator(type.unwrap());
  } else if (type instanceof ZodReadonly) {
    return getDiscriminator(type.unwrap());
  } else if (type instanceof ZodCatch) {
    return getDiscriminator(type._def.innerType);
  } else {
    return [];
  }
}, "getDiscriminator");
var ZodDiscriminatedUnion = class extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.object) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.object,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const discriminator = this.discriminator;
    const discriminatorValue = ctx.data[discriminator];
    const option = this.optionsMap.get(discriminatorValue);
    if (!option) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_union_discriminator,
        options: Array.from(this.optionsMap.keys()),
        path: [discriminator]
      });
      return INVALID;
    }
    if (ctx.common.async) {
      return option._parseAsync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      });
    } else {
      return option._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      });
    }
  }
  get discriminator() {
    return this._def.discriminator;
  }
  get options() {
    return this._def.options;
  }
  get optionsMap() {
    return this._def.optionsMap;
  }
  /**
   * The constructor of the discriminated union schema. Its behaviour is very similar to that of the normal z.union() constructor.
   * However, it only allows a union of objects, all of which need to share a discriminator property. This property must
   * have a different value for each object in the union.
   * @param discriminator the name of the discriminator property
   * @param types an array of object schemas
   * @param params
   */
  static create(discriminator, options, params) {
    const optionsMap = /* @__PURE__ */ new Map();
    for (const type of options) {
      const discriminatorValues = getDiscriminator(type.shape[discriminator]);
      if (!discriminatorValues.length) {
        throw new Error(`A discriminator value for key \`${discriminator}\` could not be extracted from all schema options`);
      }
      for (const value of discriminatorValues) {
        if (optionsMap.has(value)) {
          throw new Error(`Discriminator property ${String(discriminator)} has duplicate value ${String(value)}`);
        }
        optionsMap.set(value, type);
      }
    }
    return new ZodDiscriminatedUnion({
      typeName: ZodFirstPartyTypeKind.ZodDiscriminatedUnion,
      discriminator,
      options,
      optionsMap,
      ...processCreateParams(params)
    });
  }
};
__name(ZodDiscriminatedUnion, "ZodDiscriminatedUnion");
function mergeValues(a, b) {
  const aType = getParsedType(a);
  const bType = getParsedType(b);
  if (a === b) {
    return { valid: true, data: a };
  } else if (aType === ZodParsedType.object && bType === ZodParsedType.object) {
    const bKeys = util.objectKeys(b);
    const sharedKeys = util.objectKeys(a).filter((key) => bKeys.indexOf(key) !== -1);
    const newObj = { ...a, ...b };
    for (const key of sharedKeys) {
      const sharedValue = mergeValues(a[key], b[key]);
      if (!sharedValue.valid) {
        return { valid: false };
      }
      newObj[key] = sharedValue.data;
    }
    return { valid: true, data: newObj };
  } else if (aType === ZodParsedType.array && bType === ZodParsedType.array) {
    if (a.length !== b.length) {
      return { valid: false };
    }
    const newArray = [];
    for (let index = 0; index < a.length; index++) {
      const itemA = a[index];
      const itemB = b[index];
      const sharedValue = mergeValues(itemA, itemB);
      if (!sharedValue.valid) {
        return { valid: false };
      }
      newArray.push(sharedValue.data);
    }
    return { valid: true, data: newArray };
  } else if (aType === ZodParsedType.date && bType === ZodParsedType.date && +a === +b) {
    return { valid: true, data: a };
  } else {
    return { valid: false };
  }
}
__name(mergeValues, "mergeValues");
var ZodIntersection = class extends ZodType {
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    const handleParsed = /* @__PURE__ */ __name((parsedLeft, parsedRight) => {
      if (isAborted(parsedLeft) || isAborted(parsedRight)) {
        return INVALID;
      }
      const merged = mergeValues(parsedLeft.value, parsedRight.value);
      if (!merged.valid) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_intersection_types
        });
        return INVALID;
      }
      if (isDirty(parsedLeft) || isDirty(parsedRight)) {
        status.dirty();
      }
      return { status: status.value, value: merged.data };
    }, "handleParsed");
    if (ctx.common.async) {
      return Promise.all([
        this._def.left._parseAsync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        }),
        this._def.right._parseAsync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        })
      ]).then(([left, right]) => handleParsed(left, right));
    } else {
      return handleParsed(this._def.left._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      }), this._def.right._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      }));
    }
  }
};
__name(ZodIntersection, "ZodIntersection");
ZodIntersection.create = (left, right, params) => {
  return new ZodIntersection({
    left,
    right,
    typeName: ZodFirstPartyTypeKind.ZodIntersection,
    ...processCreateParams(params)
  });
};
var ZodTuple = class extends ZodType {
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.array) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.array,
        received: ctx.parsedType
      });
      return INVALID;
    }
    if (ctx.data.length < this._def.items.length) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.too_small,
        minimum: this._def.items.length,
        inclusive: true,
        exact: false,
        type: "array"
      });
      return INVALID;
    }
    const rest = this._def.rest;
    if (!rest && ctx.data.length > this._def.items.length) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.too_big,
        maximum: this._def.items.length,
        inclusive: true,
        exact: false,
        type: "array"
      });
      status.dirty();
    }
    const items = [...ctx.data].map((item, itemIndex) => {
      const schema = this._def.items[itemIndex] || this._def.rest;
      if (!schema)
        return null;
      return schema._parse(new ParseInputLazyPath(ctx, item, ctx.path, itemIndex));
    }).filter((x) => !!x);
    if (ctx.common.async) {
      return Promise.all(items).then((results) => {
        return ParseStatus.mergeArray(status, results);
      });
    } else {
      return ParseStatus.mergeArray(status, items);
    }
  }
  get items() {
    return this._def.items;
  }
  rest(rest) {
    return new ZodTuple({
      ...this._def,
      rest
    });
  }
};
__name(ZodTuple, "ZodTuple");
ZodTuple.create = (schemas, params) => {
  if (!Array.isArray(schemas)) {
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  }
  return new ZodTuple({
    items: schemas,
    typeName: ZodFirstPartyTypeKind.ZodTuple,
    rest: null,
    ...processCreateParams(params)
  });
};
var ZodRecord = class extends ZodType {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.object) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.object,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const pairs = [];
    const keyType = this._def.keyType;
    const valueType = this._def.valueType;
    for (const key in ctx.data) {
      pairs.push({
        key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, key)),
        value: valueType._parse(new ParseInputLazyPath(ctx, ctx.data[key], ctx.path, key)),
        alwaysSet: key in ctx.data
      });
    }
    if (ctx.common.async) {
      return ParseStatus.mergeObjectAsync(status, pairs);
    } else {
      return ParseStatus.mergeObjectSync(status, pairs);
    }
  }
  get element() {
    return this._def.valueType;
  }
  static create(first, second, third) {
    if (second instanceof ZodType) {
      return new ZodRecord({
        keyType: first,
        valueType: second,
        typeName: ZodFirstPartyTypeKind.ZodRecord,
        ...processCreateParams(third)
      });
    }
    return new ZodRecord({
      keyType: ZodString.create(),
      valueType: first,
      typeName: ZodFirstPartyTypeKind.ZodRecord,
      ...processCreateParams(second)
    });
  }
};
__name(ZodRecord, "ZodRecord");
var ZodMap = class extends ZodType {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.map) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.map,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const keyType = this._def.keyType;
    const valueType = this._def.valueType;
    const pairs = [...ctx.data.entries()].map(([key, value], index) => {
      return {
        key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, [index, "key"])),
        value: valueType._parse(new ParseInputLazyPath(ctx, value, ctx.path, [index, "value"]))
      };
    });
    if (ctx.common.async) {
      const finalMap = /* @__PURE__ */ new Map();
      return Promise.resolve().then(async () => {
        for (const pair of pairs) {
          const key = await pair.key;
          const value = await pair.value;
          if (key.status === "aborted" || value.status === "aborted") {
            return INVALID;
          }
          if (key.status === "dirty" || value.status === "dirty") {
            status.dirty();
          }
          finalMap.set(key.value, value.value);
        }
        return { status: status.value, value: finalMap };
      });
    } else {
      const finalMap = /* @__PURE__ */ new Map();
      for (const pair of pairs) {
        const key = pair.key;
        const value = pair.value;
        if (key.status === "aborted" || value.status === "aborted") {
          return INVALID;
        }
        if (key.status === "dirty" || value.status === "dirty") {
          status.dirty();
        }
        finalMap.set(key.value, value.value);
      }
      return { status: status.value, value: finalMap };
    }
  }
};
__name(ZodMap, "ZodMap");
ZodMap.create = (keyType, valueType, params) => {
  return new ZodMap({
    valueType,
    keyType,
    typeName: ZodFirstPartyTypeKind.ZodMap,
    ...processCreateParams(params)
  });
};
var ZodSet = class extends ZodType {
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.set) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.set,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const def = this._def;
    if (def.minSize !== null) {
      if (ctx.data.size < def.minSize.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_small,
          minimum: def.minSize.value,
          type: "set",
          inclusive: true,
          exact: false,
          message: def.minSize.message
        });
        status.dirty();
      }
    }
    if (def.maxSize !== null) {
      if (ctx.data.size > def.maxSize.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_big,
          maximum: def.maxSize.value,
          type: "set",
          inclusive: true,
          exact: false,
          message: def.maxSize.message
        });
        status.dirty();
      }
    }
    const valueType = this._def.valueType;
    function finalizeSet(elements2) {
      const parsedSet = /* @__PURE__ */ new Set();
      for (const element of elements2) {
        if (element.status === "aborted")
          return INVALID;
        if (element.status === "dirty")
          status.dirty();
        parsedSet.add(element.value);
      }
      return { status: status.value, value: parsedSet };
    }
    __name(finalizeSet, "finalizeSet");
    const elements = [...ctx.data.values()].map((item, i) => valueType._parse(new ParseInputLazyPath(ctx, item, ctx.path, i)));
    if (ctx.common.async) {
      return Promise.all(elements).then((elements2) => finalizeSet(elements2));
    } else {
      return finalizeSet(elements);
    }
  }
  min(minSize, message) {
    return new ZodSet({
      ...this._def,
      minSize: { value: minSize, message: errorUtil.toString(message) }
    });
  }
  max(maxSize, message) {
    return new ZodSet({
      ...this._def,
      maxSize: { value: maxSize, message: errorUtil.toString(message) }
    });
  }
  size(size, message) {
    return this.min(size, message).max(size, message);
  }
  nonempty(message) {
    return this.min(1, message);
  }
};
__name(ZodSet, "ZodSet");
ZodSet.create = (valueType, params) => {
  return new ZodSet({
    valueType,
    minSize: null,
    maxSize: null,
    typeName: ZodFirstPartyTypeKind.ZodSet,
    ...processCreateParams(params)
  });
};
var ZodFunction = class extends ZodType {
  constructor() {
    super(...arguments);
    this.validate = this.implement;
  }
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.function) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.function,
        received: ctx.parsedType
      });
      return INVALID;
    }
    function makeArgsIssue(args, error) {
      return makeIssue({
        data: args,
        path: ctx.path,
        errorMaps: [
          ctx.common.contextualErrorMap,
          ctx.schemaErrorMap,
          getErrorMap(),
          errorMap
        ].filter((x) => !!x),
        issueData: {
          code: ZodIssueCode.invalid_arguments,
          argumentsError: error
        }
      });
    }
    __name(makeArgsIssue, "makeArgsIssue");
    function makeReturnsIssue(returns, error) {
      return makeIssue({
        data: returns,
        path: ctx.path,
        errorMaps: [
          ctx.common.contextualErrorMap,
          ctx.schemaErrorMap,
          getErrorMap(),
          errorMap
        ].filter((x) => !!x),
        issueData: {
          code: ZodIssueCode.invalid_return_type,
          returnTypeError: error
        }
      });
    }
    __name(makeReturnsIssue, "makeReturnsIssue");
    const params = { errorMap: ctx.common.contextualErrorMap };
    const fn = ctx.data;
    if (this._def.returns instanceof ZodPromise) {
      const me = this;
      return OK(async function(...args) {
        const error = new ZodError([]);
        const parsedArgs = await me._def.args.parseAsync(args, params).catch((e) => {
          error.addIssue(makeArgsIssue(args, e));
          throw error;
        });
        const result = await Reflect.apply(fn, this, parsedArgs);
        const parsedReturns = await me._def.returns._def.type.parseAsync(result, params).catch((e) => {
          error.addIssue(makeReturnsIssue(result, e));
          throw error;
        });
        return parsedReturns;
      });
    } else {
      const me = this;
      return OK(function(...args) {
        const parsedArgs = me._def.args.safeParse(args, params);
        if (!parsedArgs.success) {
          throw new ZodError([makeArgsIssue(args, parsedArgs.error)]);
        }
        const result = Reflect.apply(fn, this, parsedArgs.data);
        const parsedReturns = me._def.returns.safeParse(result, params);
        if (!parsedReturns.success) {
          throw new ZodError([makeReturnsIssue(result, parsedReturns.error)]);
        }
        return parsedReturns.data;
      });
    }
  }
  parameters() {
    return this._def.args;
  }
  returnType() {
    return this._def.returns;
  }
  args(...items) {
    return new ZodFunction({
      ...this._def,
      args: ZodTuple.create(items).rest(ZodUnknown.create())
    });
  }
  returns(returnType) {
    return new ZodFunction({
      ...this._def,
      returns: returnType
    });
  }
  implement(func) {
    const validatedFunc = this.parse(func);
    return validatedFunc;
  }
  strictImplement(func) {
    const validatedFunc = this.parse(func);
    return validatedFunc;
  }
  static create(args, returns, params) {
    return new ZodFunction({
      args: args ? args : ZodTuple.create([]).rest(ZodUnknown.create()),
      returns: returns || ZodUnknown.create(),
      typeName: ZodFirstPartyTypeKind.ZodFunction,
      ...processCreateParams(params)
    });
  }
};
__name(ZodFunction, "ZodFunction");
var ZodLazy = class extends ZodType {
  get schema() {
    return this._def.getter();
  }
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    const lazySchema = this._def.getter();
    return lazySchema._parse({ data: ctx.data, path: ctx.path, parent: ctx });
  }
};
__name(ZodLazy, "ZodLazy");
ZodLazy.create = (getter, params) => {
  return new ZodLazy({
    getter,
    typeName: ZodFirstPartyTypeKind.ZodLazy,
    ...processCreateParams(params)
  });
};
var ZodLiteral = class extends ZodType {
  _parse(input) {
    if (input.data !== this._def.value) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        received: ctx.data,
        code: ZodIssueCode.invalid_literal,
        expected: this._def.value
      });
      return INVALID;
    }
    return { status: "valid", value: input.data };
  }
  get value() {
    return this._def.value;
  }
};
__name(ZodLiteral, "ZodLiteral");
ZodLiteral.create = (value, params) => {
  return new ZodLiteral({
    value,
    typeName: ZodFirstPartyTypeKind.ZodLiteral,
    ...processCreateParams(params)
  });
};
function createZodEnum(values, params) {
  return new ZodEnum({
    values,
    typeName: ZodFirstPartyTypeKind.ZodEnum,
    ...processCreateParams(params)
  });
}
__name(createZodEnum, "createZodEnum");
var ZodEnum = class extends ZodType {
  constructor() {
    super(...arguments);
    _ZodEnum_cache.set(this, void 0);
  }
  _parse(input) {
    if (typeof input.data !== "string") {
      const ctx = this._getOrReturnCtx(input);
      const expectedValues = this._def.values;
      addIssueToContext(ctx, {
        expected: util.joinValues(expectedValues),
        received: ctx.parsedType,
        code: ZodIssueCode.invalid_type
      });
      return INVALID;
    }
    if (!__classPrivateFieldGet(this, _ZodEnum_cache, "f")) {
      __classPrivateFieldSet(this, _ZodEnum_cache, new Set(this._def.values), "f");
    }
    if (!__classPrivateFieldGet(this, _ZodEnum_cache, "f").has(input.data)) {
      const ctx = this._getOrReturnCtx(input);
      const expectedValues = this._def.values;
      addIssueToContext(ctx, {
        received: ctx.data,
        code: ZodIssueCode.invalid_enum_value,
        options: expectedValues
      });
      return INVALID;
    }
    return OK(input.data);
  }
  get options() {
    return this._def.values;
  }
  get enum() {
    const enumValues = {};
    for (const val of this._def.values) {
      enumValues[val] = val;
    }
    return enumValues;
  }
  get Values() {
    const enumValues = {};
    for (const val of this._def.values) {
      enumValues[val] = val;
    }
    return enumValues;
  }
  get Enum() {
    const enumValues = {};
    for (const val of this._def.values) {
      enumValues[val] = val;
    }
    return enumValues;
  }
  extract(values, newDef = this._def) {
    return ZodEnum.create(values, {
      ...this._def,
      ...newDef
    });
  }
  exclude(values, newDef = this._def) {
    return ZodEnum.create(this.options.filter((opt) => !values.includes(opt)), {
      ...this._def,
      ...newDef
    });
  }
};
__name(ZodEnum, "ZodEnum");
_ZodEnum_cache = /* @__PURE__ */ new WeakMap();
ZodEnum.create = createZodEnum;
var ZodNativeEnum = class extends ZodType {
  constructor() {
    super(...arguments);
    _ZodNativeEnum_cache.set(this, void 0);
  }
  _parse(input) {
    const nativeEnumValues = util.getValidEnumValues(this._def.values);
    const ctx = this._getOrReturnCtx(input);
    if (ctx.parsedType !== ZodParsedType.string && ctx.parsedType !== ZodParsedType.number) {
      const expectedValues = util.objectValues(nativeEnumValues);
      addIssueToContext(ctx, {
        expected: util.joinValues(expectedValues),
        received: ctx.parsedType,
        code: ZodIssueCode.invalid_type
      });
      return INVALID;
    }
    if (!__classPrivateFieldGet(this, _ZodNativeEnum_cache, "f")) {
      __classPrivateFieldSet(this, _ZodNativeEnum_cache, new Set(util.getValidEnumValues(this._def.values)), "f");
    }
    if (!__classPrivateFieldGet(this, _ZodNativeEnum_cache, "f").has(input.data)) {
      const expectedValues = util.objectValues(nativeEnumValues);
      addIssueToContext(ctx, {
        received: ctx.data,
        code: ZodIssueCode.invalid_enum_value,
        options: expectedValues
      });
      return INVALID;
    }
    return OK(input.data);
  }
  get enum() {
    return this._def.values;
  }
};
__name(ZodNativeEnum, "ZodNativeEnum");
_ZodNativeEnum_cache = /* @__PURE__ */ new WeakMap();
ZodNativeEnum.create = (values, params) => {
  return new ZodNativeEnum({
    values,
    typeName: ZodFirstPartyTypeKind.ZodNativeEnum,
    ...processCreateParams(params)
  });
};
var ZodPromise = class extends ZodType {
  unwrap() {
    return this._def.type;
  }
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.promise && ctx.common.async === false) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.promise,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const promisified = ctx.parsedType === ZodParsedType.promise ? ctx.data : Promise.resolve(ctx.data);
    return OK(promisified.then((data) => {
      return this._def.type.parseAsync(data, {
        path: ctx.path,
        errorMap: ctx.common.contextualErrorMap
      });
    }));
  }
};
__name(ZodPromise, "ZodPromise");
ZodPromise.create = (schema, params) => {
  return new ZodPromise({
    type: schema,
    typeName: ZodFirstPartyTypeKind.ZodPromise,
    ...processCreateParams(params)
  });
};
var ZodEffects = class extends ZodType {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === ZodFirstPartyTypeKind.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
  }
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    const effect = this._def.effect || null;
    const checkCtx = {
      addIssue: (arg) => {
        addIssueToContext(ctx, arg);
        if (arg.fatal) {
          status.abort();
        } else {
          status.dirty();
        }
      },
      get path() {
        return ctx.path;
      }
    };
    checkCtx.addIssue = checkCtx.addIssue.bind(checkCtx);
    if (effect.type === "preprocess") {
      const processed = effect.transform(ctx.data, checkCtx);
      if (ctx.common.async) {
        return Promise.resolve(processed).then(async (processed2) => {
          if (status.value === "aborted")
            return INVALID;
          const result = await this._def.schema._parseAsync({
            data: processed2,
            path: ctx.path,
            parent: ctx
          });
          if (result.status === "aborted")
            return INVALID;
          if (result.status === "dirty")
            return DIRTY(result.value);
          if (status.value === "dirty")
            return DIRTY(result.value);
          return result;
        });
      } else {
        if (status.value === "aborted")
          return INVALID;
        const result = this._def.schema._parseSync({
          data: processed,
          path: ctx.path,
          parent: ctx
        });
        if (result.status === "aborted")
          return INVALID;
        if (result.status === "dirty")
          return DIRTY(result.value);
        if (status.value === "dirty")
          return DIRTY(result.value);
        return result;
      }
    }
    if (effect.type === "refinement") {
      const executeRefinement = /* @__PURE__ */ __name((acc) => {
        const result = effect.refinement(acc, checkCtx);
        if (ctx.common.async) {
          return Promise.resolve(result);
        }
        if (result instanceof Promise) {
          throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
        }
        return acc;
      }, "executeRefinement");
      if (ctx.common.async === false) {
        const inner = this._def.schema._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
        if (inner.status === "aborted")
          return INVALID;
        if (inner.status === "dirty")
          status.dirty();
        executeRefinement(inner.value);
        return { status: status.value, value: inner.value };
      } else {
        return this._def.schema._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx }).then((inner) => {
          if (inner.status === "aborted")
            return INVALID;
          if (inner.status === "dirty")
            status.dirty();
          return executeRefinement(inner.value).then(() => {
            return { status: status.value, value: inner.value };
          });
        });
      }
    }
    if (effect.type === "transform") {
      if (ctx.common.async === false) {
        const base = this._def.schema._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
        if (!isValid(base))
          return base;
        const result = effect.transform(base.value, checkCtx);
        if (result instanceof Promise) {
          throw new Error(`Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.`);
        }
        return { status: status.value, value: result };
      } else {
        return this._def.schema._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx }).then((base) => {
          if (!isValid(base))
            return base;
          return Promise.resolve(effect.transform(base.value, checkCtx)).then((result) => ({ status: status.value, value: result }));
        });
      }
    }
    util.assertNever(effect);
  }
};
__name(ZodEffects, "ZodEffects");
ZodEffects.create = (schema, effect, params) => {
  return new ZodEffects({
    schema,
    typeName: ZodFirstPartyTypeKind.ZodEffects,
    effect,
    ...processCreateParams(params)
  });
};
ZodEffects.createWithPreprocess = (preprocess, schema, params) => {
  return new ZodEffects({
    schema,
    effect: { type: "preprocess", transform: preprocess },
    typeName: ZodFirstPartyTypeKind.ZodEffects,
    ...processCreateParams(params)
  });
};
var ZodOptional = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType === ZodParsedType.undefined) {
      return OK(void 0);
    }
    return this._def.innerType._parse(input);
  }
  unwrap() {
    return this._def.innerType;
  }
};
__name(ZodOptional, "ZodOptional");
ZodOptional.create = (type, params) => {
  return new ZodOptional({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodOptional,
    ...processCreateParams(params)
  });
};
var ZodNullable = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType === ZodParsedType.null) {
      return OK(null);
    }
    return this._def.innerType._parse(input);
  }
  unwrap() {
    return this._def.innerType;
  }
};
__name(ZodNullable, "ZodNullable");
ZodNullable.create = (type, params) => {
  return new ZodNullable({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodNullable,
    ...processCreateParams(params)
  });
};
var ZodDefault = class extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    let data = ctx.data;
    if (ctx.parsedType === ZodParsedType.undefined) {
      data = this._def.defaultValue();
    }
    return this._def.innerType._parse({
      data,
      path: ctx.path,
      parent: ctx
    });
  }
  removeDefault() {
    return this._def.innerType;
  }
};
__name(ZodDefault, "ZodDefault");
ZodDefault.create = (type, params) => {
  return new ZodDefault({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodDefault,
    defaultValue: typeof params.default === "function" ? params.default : () => params.default,
    ...processCreateParams(params)
  });
};
var ZodCatch = class extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    const newCtx = {
      ...ctx,
      common: {
        ...ctx.common,
        issues: []
      }
    };
    const result = this._def.innerType._parse({
      data: newCtx.data,
      path: newCtx.path,
      parent: {
        ...newCtx
      }
    });
    if (isAsync(result)) {
      return result.then((result2) => {
        return {
          status: "valid",
          value: result2.status === "valid" ? result2.value : this._def.catchValue({
            get error() {
              return new ZodError(newCtx.common.issues);
            },
            input: newCtx.data
          })
        };
      });
    } else {
      return {
        status: "valid",
        value: result.status === "valid" ? result.value : this._def.catchValue({
          get error() {
            return new ZodError(newCtx.common.issues);
          },
          input: newCtx.data
        })
      };
    }
  }
  removeCatch() {
    return this._def.innerType;
  }
};
__name(ZodCatch, "ZodCatch");
ZodCatch.create = (type, params) => {
  return new ZodCatch({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodCatch,
    catchValue: typeof params.catch === "function" ? params.catch : () => params.catch,
    ...processCreateParams(params)
  });
};
var ZodNaN = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.nan) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.nan,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return { status: "valid", value: input.data };
  }
};
__name(ZodNaN, "ZodNaN");
ZodNaN.create = (params) => {
  return new ZodNaN({
    typeName: ZodFirstPartyTypeKind.ZodNaN,
    ...processCreateParams(params)
  });
};
var BRAND = Symbol("zod_brand");
var ZodBranded = class extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    const data = ctx.data;
    return this._def.type._parse({
      data,
      path: ctx.path,
      parent: ctx
    });
  }
  unwrap() {
    return this._def.type;
  }
};
__name(ZodBranded, "ZodBranded");
var ZodPipeline = class extends ZodType {
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.common.async) {
      const handleAsync = /* @__PURE__ */ __name(async () => {
        const inResult = await this._def.in._parseAsync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
        if (inResult.status === "aborted")
          return INVALID;
        if (inResult.status === "dirty") {
          status.dirty();
          return DIRTY(inResult.value);
        } else {
          return this._def.out._parseAsync({
            data: inResult.value,
            path: ctx.path,
            parent: ctx
          });
        }
      }, "handleAsync");
      return handleAsync();
    } else {
      const inResult = this._def.in._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      });
      if (inResult.status === "aborted")
        return INVALID;
      if (inResult.status === "dirty") {
        status.dirty();
        return {
          status: "dirty",
          value: inResult.value
        };
      } else {
        return this._def.out._parseSync({
          data: inResult.value,
          path: ctx.path,
          parent: ctx
        });
      }
    }
  }
  static create(a, b) {
    return new ZodPipeline({
      in: a,
      out: b,
      typeName: ZodFirstPartyTypeKind.ZodPipeline
    });
  }
};
__name(ZodPipeline, "ZodPipeline");
var ZodReadonly = class extends ZodType {
  _parse(input) {
    const result = this._def.innerType._parse(input);
    const freeze = /* @__PURE__ */ __name((data) => {
      if (isValid(data)) {
        data.value = Object.freeze(data.value);
      }
      return data;
    }, "freeze");
    return isAsync(result) ? result.then((data) => freeze(data)) : freeze(result);
  }
  unwrap() {
    return this._def.innerType;
  }
};
__name(ZodReadonly, "ZodReadonly");
ZodReadonly.create = (type, params) => {
  return new ZodReadonly({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodReadonly,
    ...processCreateParams(params)
  });
};
function cleanParams(params, data) {
  const p = typeof params === "function" ? params(data) : typeof params === "string" ? { message: params } : params;
  const p2 = typeof p === "string" ? { message: p } : p;
  return p2;
}
__name(cleanParams, "cleanParams");
function custom(check, _params = {}, fatal) {
  if (check)
    return ZodAny.create().superRefine((data, ctx) => {
      var _a, _b;
      const r = check(data);
      if (r instanceof Promise) {
        return r.then((r2) => {
          var _a2, _b2;
          if (!r2) {
            const params = cleanParams(_params, data);
            const _fatal = (_b2 = (_a2 = params.fatal) !== null && _a2 !== void 0 ? _a2 : fatal) !== null && _b2 !== void 0 ? _b2 : true;
            ctx.addIssue({ code: "custom", ...params, fatal: _fatal });
          }
        });
      }
      if (!r) {
        const params = cleanParams(_params, data);
        const _fatal = (_b = (_a = params.fatal) !== null && _a !== void 0 ? _a : fatal) !== null && _b !== void 0 ? _b : true;
        ctx.addIssue({ code: "custom", ...params, fatal: _fatal });
      }
      return;
    });
  return ZodAny.create();
}
__name(custom, "custom");
var late = {
  object: ZodObject.lazycreate
};
var ZodFirstPartyTypeKind;
(function(ZodFirstPartyTypeKind2) {
  ZodFirstPartyTypeKind2["ZodString"] = "ZodString";
  ZodFirstPartyTypeKind2["ZodNumber"] = "ZodNumber";
  ZodFirstPartyTypeKind2["ZodNaN"] = "ZodNaN";
  ZodFirstPartyTypeKind2["ZodBigInt"] = "ZodBigInt";
  ZodFirstPartyTypeKind2["ZodBoolean"] = "ZodBoolean";
  ZodFirstPartyTypeKind2["ZodDate"] = "ZodDate";
  ZodFirstPartyTypeKind2["ZodSymbol"] = "ZodSymbol";
  ZodFirstPartyTypeKind2["ZodUndefined"] = "ZodUndefined";
  ZodFirstPartyTypeKind2["ZodNull"] = "ZodNull";
  ZodFirstPartyTypeKind2["ZodAny"] = "ZodAny";
  ZodFirstPartyTypeKind2["ZodUnknown"] = "ZodUnknown";
  ZodFirstPartyTypeKind2["ZodNever"] = "ZodNever";
  ZodFirstPartyTypeKind2["ZodVoid"] = "ZodVoid";
  ZodFirstPartyTypeKind2["ZodArray"] = "ZodArray";
  ZodFirstPartyTypeKind2["ZodObject"] = "ZodObject";
  ZodFirstPartyTypeKind2["ZodUnion"] = "ZodUnion";
  ZodFirstPartyTypeKind2["ZodDiscriminatedUnion"] = "ZodDiscriminatedUnion";
  ZodFirstPartyTypeKind2["ZodIntersection"] = "ZodIntersection";
  ZodFirstPartyTypeKind2["ZodTuple"] = "ZodTuple";
  ZodFirstPartyTypeKind2["ZodRecord"] = "ZodRecord";
  ZodFirstPartyTypeKind2["ZodMap"] = "ZodMap";
  ZodFirstPartyTypeKind2["ZodSet"] = "ZodSet";
  ZodFirstPartyTypeKind2["ZodFunction"] = "ZodFunction";
  ZodFirstPartyTypeKind2["ZodLazy"] = "ZodLazy";
  ZodFirstPartyTypeKind2["ZodLiteral"] = "ZodLiteral";
  ZodFirstPartyTypeKind2["ZodEnum"] = "ZodEnum";
  ZodFirstPartyTypeKind2["ZodEffects"] = "ZodEffects";
  ZodFirstPartyTypeKind2["ZodNativeEnum"] = "ZodNativeEnum";
  ZodFirstPartyTypeKind2["ZodOptional"] = "ZodOptional";
  ZodFirstPartyTypeKind2["ZodNullable"] = "ZodNullable";
  ZodFirstPartyTypeKind2["ZodDefault"] = "ZodDefault";
  ZodFirstPartyTypeKind2["ZodCatch"] = "ZodCatch";
  ZodFirstPartyTypeKind2["ZodPromise"] = "ZodPromise";
  ZodFirstPartyTypeKind2["ZodBranded"] = "ZodBranded";
  ZodFirstPartyTypeKind2["ZodPipeline"] = "ZodPipeline";
  ZodFirstPartyTypeKind2["ZodReadonly"] = "ZodReadonly";
})(ZodFirstPartyTypeKind || (ZodFirstPartyTypeKind = {}));
var instanceOfType = /* @__PURE__ */ __name((cls, params = {
  message: `Input not instance of ${cls.name}`
}) => custom((data) => data instanceof cls, params), "instanceOfType");
var stringType = ZodString.create;
var numberType = ZodNumber.create;
var nanType = ZodNaN.create;
var bigIntType = ZodBigInt.create;
var booleanType = ZodBoolean.create;
var dateType = ZodDate.create;
var symbolType = ZodSymbol.create;
var undefinedType = ZodUndefined.create;
var nullType = ZodNull.create;
var anyType = ZodAny.create;
var unknownType = ZodUnknown.create;
var neverType = ZodNever.create;
var voidType = ZodVoid.create;
var arrayType = ZodArray.create;
var objectType = ZodObject.create;
var strictObjectType = ZodObject.strictCreate;
var unionType = ZodUnion.create;
var discriminatedUnionType = ZodDiscriminatedUnion.create;
var intersectionType = ZodIntersection.create;
var tupleType = ZodTuple.create;
var recordType = ZodRecord.create;
var mapType = ZodMap.create;
var setType = ZodSet.create;
var functionType = ZodFunction.create;
var lazyType = ZodLazy.create;
var literalType = ZodLiteral.create;
var enumType = ZodEnum.create;
var nativeEnumType = ZodNativeEnum.create;
var promiseType = ZodPromise.create;
var effectsType = ZodEffects.create;
var optionalType = ZodOptional.create;
var nullableType = ZodNullable.create;
var preprocessType = ZodEffects.createWithPreprocess;
var pipelineType = ZodPipeline.create;
var ostring = /* @__PURE__ */ __name(() => stringType().optional(), "ostring");
var onumber = /* @__PURE__ */ __name(() => numberType().optional(), "onumber");
var oboolean = /* @__PURE__ */ __name(() => booleanType().optional(), "oboolean");
var coerce = {
  string: (arg) => ZodString.create({ ...arg, coerce: true }),
  number: (arg) => ZodNumber.create({ ...arg, coerce: true }),
  boolean: (arg) => ZodBoolean.create({
    ...arg,
    coerce: true
  }),
  bigint: (arg) => ZodBigInt.create({ ...arg, coerce: true }),
  date: (arg) => ZodDate.create({ ...arg, coerce: true })
};
var NEVER = INVALID;
var z = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  defaultErrorMap: errorMap,
  setErrorMap,
  getErrorMap,
  makeIssue,
  EMPTY_PATH,
  addIssueToContext,
  ParseStatus,
  INVALID,
  DIRTY,
  OK,
  isAborted,
  isDirty,
  isValid,
  isAsync,
  get util() {
    return util;
  },
  get objectUtil() {
    return objectUtil;
  },
  ZodParsedType,
  getParsedType,
  ZodType,
  datetimeRegex,
  ZodString,
  ZodNumber,
  ZodBigInt,
  ZodBoolean,
  ZodDate,
  ZodSymbol,
  ZodUndefined,
  ZodNull,
  ZodAny,
  ZodUnknown,
  ZodNever,
  ZodVoid,
  ZodArray,
  ZodObject,
  ZodUnion,
  ZodDiscriminatedUnion,
  ZodIntersection,
  ZodTuple,
  ZodRecord,
  ZodMap,
  ZodSet,
  ZodFunction,
  ZodLazy,
  ZodLiteral,
  ZodEnum,
  ZodNativeEnum,
  ZodPromise,
  ZodEffects,
  ZodTransformer: ZodEffects,
  ZodOptional,
  ZodNullable,
  ZodDefault,
  ZodCatch,
  ZodNaN,
  BRAND,
  ZodBranded,
  ZodPipeline,
  ZodReadonly,
  custom,
  Schema: ZodType,
  ZodSchema: ZodType,
  late,
  get ZodFirstPartyTypeKind() {
    return ZodFirstPartyTypeKind;
  },
  coerce,
  any: anyType,
  array: arrayType,
  bigint: bigIntType,
  boolean: booleanType,
  date: dateType,
  discriminatedUnion: discriminatedUnionType,
  effect: effectsType,
  "enum": enumType,
  "function": functionType,
  "instanceof": instanceOfType,
  intersection: intersectionType,
  lazy: lazyType,
  literal: literalType,
  map: mapType,
  nan: nanType,
  nativeEnum: nativeEnumType,
  never: neverType,
  "null": nullType,
  nullable: nullableType,
  number: numberType,
  object: objectType,
  oboolean,
  onumber,
  optional: optionalType,
  ostring,
  pipeline: pipelineType,
  preprocess: preprocessType,
  promise: promiseType,
  record: recordType,
  set: setType,
  strictObject: strictObjectType,
  string: stringType,
  symbol: symbolType,
  transformer: effectsType,
  tuple: tupleType,
  "undefined": undefinedType,
  union: unionType,
  unknown: unknownType,
  "void": voidType,
  NEVER,
  ZodIssueCode,
  quotelessJson,
  ZodError
});

// node_modules/lru-cache/index.mjs
var perf = typeof performance === "object" && performance && typeof performance.now === "function" ? performance : Date;
var hasAbortController = typeof AbortController === "function";
var AC = hasAbortController ? AbortController : /* @__PURE__ */ __name(class AbortController2 {
  constructor() {
    this.signal = new AS();
  }
  abort(reason = new Error("This operation was aborted")) {
    this.signal.reason = this.signal.reason || reason;
    this.signal.aborted = true;
    this.signal.dispatchEvent({
      type: "abort",
      target: this.signal
    });
  }
}, "AbortController");
var hasAbortSignal = typeof AbortSignal === "function";
var hasACAbortSignal = typeof AC.AbortSignal === "function";
var AS = hasAbortSignal ? AbortSignal : hasACAbortSignal ? AC.AbortController : /* @__PURE__ */ __name(class AbortSignal2 {
  constructor() {
    this.reason = void 0;
    this.aborted = false;
    this._listeners = [];
  }
  dispatchEvent(e) {
    if (e.type === "abort") {
      this.aborted = true;
      this.onabort(e);
      this._listeners.forEach((f) => f(e), this);
    }
  }
  onabort() {
  }
  addEventListener(ev, fn) {
    if (ev === "abort") {
      this._listeners.push(fn);
    }
  }
  removeEventListener(ev, fn) {
    if (ev === "abort") {
      this._listeners = this._listeners.filter((f) => f !== fn);
    }
  }
}, "AbortSignal");
var warned = /* @__PURE__ */ new Set();
var deprecatedOption = /* @__PURE__ */ __name((opt, instead) => {
  const code = `LRU_CACHE_OPTION_${opt}`;
  if (shouldWarn(code)) {
    warn(code, `${opt} option`, `options.${instead}`, LRUCache);
  }
}, "deprecatedOption");
var deprecatedMethod = /* @__PURE__ */ __name((method, instead) => {
  const code = `LRU_CACHE_METHOD_${method}`;
  if (shouldWarn(code)) {
    const { prototype } = LRUCache;
    const { get } = Object.getOwnPropertyDescriptor(prototype, method);
    warn(code, `${method} method`, `cache.${instead}()`, get);
  }
}, "deprecatedMethod");
var deprecatedProperty = /* @__PURE__ */ __name((field, instead) => {
  const code = `LRU_CACHE_PROPERTY_${field}`;
  if (shouldWarn(code)) {
    const { prototype } = LRUCache;
    const { get } = Object.getOwnPropertyDescriptor(prototype, field);
    warn(code, `${field} property`, `cache.${instead}`, get);
  }
}, "deprecatedProperty");
var emitWarning = /* @__PURE__ */ __name((...a) => {
  typeof process === "object" && process && typeof process.emitWarning === "function" ? process.emitWarning(...a) : console.error(...a);
}, "emitWarning");
var shouldWarn = /* @__PURE__ */ __name((code) => !warned.has(code), "shouldWarn");
var warn = /* @__PURE__ */ __name((code, what, instead, fn) => {
  warned.add(code);
  const msg = `The ${what} is deprecated. Please use ${instead} instead.`;
  emitWarning(msg, "DeprecationWarning", code, fn);
}, "warn");
var isPosInt = /* @__PURE__ */ __name((n) => n && n === Math.floor(n) && n > 0 && isFinite(n), "isPosInt");
var getUintArray = /* @__PURE__ */ __name((max) => !isPosInt(max) ? null : max <= Math.pow(2, 8) ? Uint8Array : max <= Math.pow(2, 16) ? Uint16Array : max <= Math.pow(2, 32) ? Uint32Array : max <= Number.MAX_SAFE_INTEGER ? ZeroArray : null, "getUintArray");
var ZeroArray = class extends Array {
  constructor(size) {
    super(size);
    this.fill(0);
  }
};
__name(ZeroArray, "ZeroArray");
var Stack = class {
  constructor(max) {
    if (max === 0) {
      return [];
    }
    const UintArray = getUintArray(max);
    this.heap = new UintArray(max);
    this.length = 0;
  }
  push(n) {
    this.heap[this.length++] = n;
  }
  pop() {
    return this.heap[--this.length];
  }
};
__name(Stack, "Stack");
var LRUCache = class {
  constructor(options = {}) {
    const {
      max = 0,
      ttl,
      ttlResolution = 1,
      ttlAutopurge,
      updateAgeOnGet,
      updateAgeOnHas,
      allowStale,
      dispose,
      disposeAfter,
      noDisposeOnSet,
      noUpdateTTL,
      maxSize = 0,
      maxEntrySize = 0,
      sizeCalculation,
      fetchMethod,
      fetchContext,
      noDeleteOnFetchRejection,
      noDeleteOnStaleGet,
      allowStaleOnFetchRejection,
      allowStaleOnFetchAbort,
      ignoreFetchAbort
    } = options;
    const { length, maxAge, stale } = options instanceof LRUCache ? {} : options;
    if (max !== 0 && !isPosInt(max)) {
      throw new TypeError("max option must be a nonnegative integer");
    }
    const UintArray = max ? getUintArray(max) : Array;
    if (!UintArray) {
      throw new Error("invalid max value: " + max);
    }
    this.max = max;
    this.maxSize = maxSize;
    this.maxEntrySize = maxEntrySize || this.maxSize;
    this.sizeCalculation = sizeCalculation || length;
    if (this.sizeCalculation) {
      if (!this.maxSize && !this.maxEntrySize) {
        throw new TypeError(
          "cannot set sizeCalculation without setting maxSize or maxEntrySize"
        );
      }
      if (typeof this.sizeCalculation !== "function") {
        throw new TypeError("sizeCalculation set to non-function");
      }
    }
    this.fetchMethod = fetchMethod || null;
    if (this.fetchMethod && typeof this.fetchMethod !== "function") {
      throw new TypeError(
        "fetchMethod must be a function if specified"
      );
    }
    this.fetchContext = fetchContext;
    if (!this.fetchMethod && fetchContext !== void 0) {
      throw new TypeError(
        "cannot set fetchContext without fetchMethod"
      );
    }
    this.keyMap = /* @__PURE__ */ new Map();
    this.keyList = new Array(max).fill(null);
    this.valList = new Array(max).fill(null);
    this.next = new UintArray(max);
    this.prev = new UintArray(max);
    this.head = 0;
    this.tail = 0;
    this.free = new Stack(max);
    this.initialFill = 1;
    this.size = 0;
    if (typeof dispose === "function") {
      this.dispose = dispose;
    }
    if (typeof disposeAfter === "function") {
      this.disposeAfter = disposeAfter;
      this.disposed = [];
    } else {
      this.disposeAfter = null;
      this.disposed = null;
    }
    this.noDisposeOnSet = !!noDisposeOnSet;
    this.noUpdateTTL = !!noUpdateTTL;
    this.noDeleteOnFetchRejection = !!noDeleteOnFetchRejection;
    this.allowStaleOnFetchRejection = !!allowStaleOnFetchRejection;
    this.allowStaleOnFetchAbort = !!allowStaleOnFetchAbort;
    this.ignoreFetchAbort = !!ignoreFetchAbort;
    if (this.maxEntrySize !== 0) {
      if (this.maxSize !== 0) {
        if (!isPosInt(this.maxSize)) {
          throw new TypeError(
            "maxSize must be a positive integer if specified"
          );
        }
      }
      if (!isPosInt(this.maxEntrySize)) {
        throw new TypeError(
          "maxEntrySize must be a positive integer if specified"
        );
      }
      this.initializeSizeTracking();
    }
    this.allowStale = !!allowStale || !!stale;
    this.noDeleteOnStaleGet = !!noDeleteOnStaleGet;
    this.updateAgeOnGet = !!updateAgeOnGet;
    this.updateAgeOnHas = !!updateAgeOnHas;
    this.ttlResolution = isPosInt(ttlResolution) || ttlResolution === 0 ? ttlResolution : 1;
    this.ttlAutopurge = !!ttlAutopurge;
    this.ttl = ttl || maxAge || 0;
    if (this.ttl) {
      if (!isPosInt(this.ttl)) {
        throw new TypeError(
          "ttl must be a positive integer if specified"
        );
      }
      this.initializeTTLTracking();
    }
    if (this.max === 0 && this.ttl === 0 && this.maxSize === 0) {
      throw new TypeError(
        "At least one of max, maxSize, or ttl is required"
      );
    }
    if (!this.ttlAutopurge && !this.max && !this.maxSize) {
      const code = "LRU_CACHE_UNBOUNDED";
      if (shouldWarn(code)) {
        warned.add(code);
        const msg = "TTL caching without ttlAutopurge, max, or maxSize can result in unbounded memory consumption.";
        emitWarning(msg, "UnboundedCacheWarning", code, LRUCache);
      }
    }
    if (stale) {
      deprecatedOption("stale", "allowStale");
    }
    if (maxAge) {
      deprecatedOption("maxAge", "ttl");
    }
    if (length) {
      deprecatedOption("length", "sizeCalculation");
    }
  }
  getRemainingTTL(key) {
    return this.has(key, { updateAgeOnHas: false }) ? Infinity : 0;
  }
  initializeTTLTracking() {
    this.ttls = new ZeroArray(this.max);
    this.starts = new ZeroArray(this.max);
    this.setItemTTL = (index, ttl, start = perf.now()) => {
      this.starts[index] = ttl !== 0 ? start : 0;
      this.ttls[index] = ttl;
      if (ttl !== 0 && this.ttlAutopurge) {
        const t = setTimeout(() => {
          if (this.isStale(index)) {
            this.delete(this.keyList[index]);
          }
        }, ttl + 1);
        if (t.unref) {
          t.unref();
        }
      }
    };
    this.updateItemAge = (index) => {
      this.starts[index] = this.ttls[index] !== 0 ? perf.now() : 0;
    };
    this.statusTTL = (status, index) => {
      if (status) {
        status.ttl = this.ttls[index];
        status.start = this.starts[index];
        status.now = cachedNow || getNow();
        status.remainingTTL = status.now + status.ttl - status.start;
      }
    };
    let cachedNow = 0;
    const getNow = /* @__PURE__ */ __name(() => {
      const n = perf.now();
      if (this.ttlResolution > 0) {
        cachedNow = n;
        const t = setTimeout(
          () => cachedNow = 0,
          this.ttlResolution
        );
        if (t.unref) {
          t.unref();
        }
      }
      return n;
    }, "getNow");
    this.getRemainingTTL = (key) => {
      const index = this.keyMap.get(key);
      if (index === void 0) {
        return 0;
      }
      return this.ttls[index] === 0 || this.starts[index] === 0 ? Infinity : this.starts[index] + this.ttls[index] - (cachedNow || getNow());
    };
    this.isStale = (index) => {
      return this.ttls[index] !== 0 && this.starts[index] !== 0 && (cachedNow || getNow()) - this.starts[index] > this.ttls[index];
    };
  }
  updateItemAge(_index) {
  }
  statusTTL(_status, _index) {
  }
  setItemTTL(_index, _ttl, _start) {
  }
  isStale(_index) {
    return false;
  }
  initializeSizeTracking() {
    this.calculatedSize = 0;
    this.sizes = new ZeroArray(this.max);
    this.removeItemSize = (index) => {
      this.calculatedSize -= this.sizes[index];
      this.sizes[index] = 0;
    };
    this.requireSize = (k, v, size, sizeCalculation) => {
      if (this.isBackgroundFetch(v)) {
        return 0;
      }
      if (!isPosInt(size)) {
        if (sizeCalculation) {
          if (typeof sizeCalculation !== "function") {
            throw new TypeError("sizeCalculation must be a function");
          }
          size = sizeCalculation(v, k);
          if (!isPosInt(size)) {
            throw new TypeError(
              "sizeCalculation return invalid (expect positive integer)"
            );
          }
        } else {
          throw new TypeError(
            "invalid size value (must be positive integer). When maxSize or maxEntrySize is used, sizeCalculation or size must be set."
          );
        }
      }
      return size;
    };
    this.addItemSize = (index, size, status) => {
      this.sizes[index] = size;
      if (this.maxSize) {
        const maxSize = this.maxSize - this.sizes[index];
        while (this.calculatedSize > maxSize) {
          this.evict(true);
        }
      }
      this.calculatedSize += this.sizes[index];
      if (status) {
        status.entrySize = size;
        status.totalCalculatedSize = this.calculatedSize;
      }
    };
  }
  removeItemSize(_index) {
  }
  addItemSize(_index, _size) {
  }
  requireSize(_k, _v, size, sizeCalculation) {
    if (size || sizeCalculation) {
      throw new TypeError(
        "cannot set size without setting maxSize or maxEntrySize on cache"
      );
    }
  }
  *indexes({ allowStale = this.allowStale } = {}) {
    if (this.size) {
      for (let i = this.tail; true; ) {
        if (!this.isValidIndex(i)) {
          break;
        }
        if (allowStale || !this.isStale(i)) {
          yield i;
        }
        if (i === this.head) {
          break;
        } else {
          i = this.prev[i];
        }
      }
    }
  }
  *rindexes({ allowStale = this.allowStale } = {}) {
    if (this.size) {
      for (let i = this.head; true; ) {
        if (!this.isValidIndex(i)) {
          break;
        }
        if (allowStale || !this.isStale(i)) {
          yield i;
        }
        if (i === this.tail) {
          break;
        } else {
          i = this.next[i];
        }
      }
    }
  }
  isValidIndex(index) {
    return index !== void 0 && this.keyMap.get(this.keyList[index]) === index;
  }
  *entries() {
    for (const i of this.indexes()) {
      if (this.valList[i] !== void 0 && this.keyList[i] !== void 0 && !this.isBackgroundFetch(this.valList[i])) {
        yield [this.keyList[i], this.valList[i]];
      }
    }
  }
  *rentries() {
    for (const i of this.rindexes()) {
      if (this.valList[i] !== void 0 && this.keyList[i] !== void 0 && !this.isBackgroundFetch(this.valList[i])) {
        yield [this.keyList[i], this.valList[i]];
      }
    }
  }
  *keys() {
    for (const i of this.indexes()) {
      if (this.keyList[i] !== void 0 && !this.isBackgroundFetch(this.valList[i])) {
        yield this.keyList[i];
      }
    }
  }
  *rkeys() {
    for (const i of this.rindexes()) {
      if (this.keyList[i] !== void 0 && !this.isBackgroundFetch(this.valList[i])) {
        yield this.keyList[i];
      }
    }
  }
  *values() {
    for (const i of this.indexes()) {
      if (this.valList[i] !== void 0 && !this.isBackgroundFetch(this.valList[i])) {
        yield this.valList[i];
      }
    }
  }
  *rvalues() {
    for (const i of this.rindexes()) {
      if (this.valList[i] !== void 0 && !this.isBackgroundFetch(this.valList[i])) {
        yield this.valList[i];
      }
    }
  }
  [Symbol.iterator]() {
    return this.entries();
  }
  find(fn, getOptions) {
    for (const i of this.indexes()) {
      const v = this.valList[i];
      const value = this.isBackgroundFetch(v) ? v.__staleWhileFetching : v;
      if (value === void 0)
        continue;
      if (fn(value, this.keyList[i], this)) {
        return this.get(this.keyList[i], getOptions);
      }
    }
  }
  forEach(fn, thisp = this) {
    for (const i of this.indexes()) {
      const v = this.valList[i];
      const value = this.isBackgroundFetch(v) ? v.__staleWhileFetching : v;
      if (value === void 0)
        continue;
      fn.call(thisp, value, this.keyList[i], this);
    }
  }
  rforEach(fn, thisp = this) {
    for (const i of this.rindexes()) {
      const v = this.valList[i];
      const value = this.isBackgroundFetch(v) ? v.__staleWhileFetching : v;
      if (value === void 0)
        continue;
      fn.call(thisp, value, this.keyList[i], this);
    }
  }
  get prune() {
    deprecatedMethod("prune", "purgeStale");
    return this.purgeStale;
  }
  purgeStale() {
    let deleted = false;
    for (const i of this.rindexes({ allowStale: true })) {
      if (this.isStale(i)) {
        this.delete(this.keyList[i]);
        deleted = true;
      }
    }
    return deleted;
  }
  dump() {
    const arr = [];
    for (const i of this.indexes({ allowStale: true })) {
      const key = this.keyList[i];
      const v = this.valList[i];
      const value = this.isBackgroundFetch(v) ? v.__staleWhileFetching : v;
      if (value === void 0)
        continue;
      const entry = { value };
      if (this.ttls) {
        entry.ttl = this.ttls[i];
        const age = perf.now() - this.starts[i];
        entry.start = Math.floor(Date.now() - age);
      }
      if (this.sizes) {
        entry.size = this.sizes[i];
      }
      arr.unshift([key, entry]);
    }
    return arr;
  }
  load(arr) {
    this.clear();
    for (const [key, entry] of arr) {
      if (entry.start) {
        const age = Date.now() - entry.start;
        entry.start = perf.now() - age;
      }
      this.set(key, entry.value, entry);
    }
  }
  dispose(_v, _k, _reason) {
  }
  set(k, v, {
    ttl = this.ttl,
    start,
    noDisposeOnSet = this.noDisposeOnSet,
    size = 0,
    sizeCalculation = this.sizeCalculation,
    noUpdateTTL = this.noUpdateTTL,
    status
  } = {}) {
    size = this.requireSize(k, v, size, sizeCalculation);
    if (this.maxEntrySize && size > this.maxEntrySize) {
      if (status) {
        status.set = "miss";
        status.maxEntrySizeExceeded = true;
      }
      this.delete(k);
      return this;
    }
    let index = this.size === 0 ? void 0 : this.keyMap.get(k);
    if (index === void 0) {
      index = this.newIndex();
      this.keyList[index] = k;
      this.valList[index] = v;
      this.keyMap.set(k, index);
      this.next[this.tail] = index;
      this.prev[index] = this.tail;
      this.tail = index;
      this.size++;
      this.addItemSize(index, size, status);
      if (status) {
        status.set = "add";
      }
      noUpdateTTL = false;
    } else {
      this.moveToTail(index);
      const oldVal = this.valList[index];
      if (v !== oldVal) {
        if (this.isBackgroundFetch(oldVal)) {
          oldVal.__abortController.abort(new Error("replaced"));
        } else {
          if (!noDisposeOnSet) {
            this.dispose(oldVal, k, "set");
            if (this.disposeAfter) {
              this.disposed.push([oldVal, k, "set"]);
            }
          }
        }
        this.removeItemSize(index);
        this.valList[index] = v;
        this.addItemSize(index, size, status);
        if (status) {
          status.set = "replace";
          const oldValue = oldVal && this.isBackgroundFetch(oldVal) ? oldVal.__staleWhileFetching : oldVal;
          if (oldValue !== void 0)
            status.oldValue = oldValue;
        }
      } else if (status) {
        status.set = "update";
      }
    }
    if (ttl !== 0 && this.ttl === 0 && !this.ttls) {
      this.initializeTTLTracking();
    }
    if (!noUpdateTTL) {
      this.setItemTTL(index, ttl, start);
    }
    this.statusTTL(status, index);
    if (this.disposeAfter) {
      while (this.disposed.length) {
        this.disposeAfter(...this.disposed.shift());
      }
    }
    return this;
  }
  newIndex() {
    if (this.size === 0) {
      return this.tail;
    }
    if (this.size === this.max && this.max !== 0) {
      return this.evict(false);
    }
    if (this.free.length !== 0) {
      return this.free.pop();
    }
    return this.initialFill++;
  }
  pop() {
    if (this.size) {
      const val = this.valList[this.head];
      this.evict(true);
      return val;
    }
  }
  evict(free) {
    const head = this.head;
    const k = this.keyList[head];
    const v = this.valList[head];
    if (this.isBackgroundFetch(v)) {
      v.__abortController.abort(new Error("evicted"));
    } else {
      this.dispose(v, k, "evict");
      if (this.disposeAfter) {
        this.disposed.push([v, k, "evict"]);
      }
    }
    this.removeItemSize(head);
    if (free) {
      this.keyList[head] = null;
      this.valList[head] = null;
      this.free.push(head);
    }
    this.head = this.next[head];
    this.keyMap.delete(k);
    this.size--;
    return head;
  }
  has(k, { updateAgeOnHas = this.updateAgeOnHas, status } = {}) {
    const index = this.keyMap.get(k);
    if (index !== void 0) {
      if (!this.isStale(index)) {
        if (updateAgeOnHas) {
          this.updateItemAge(index);
        }
        if (status)
          status.has = "hit";
        this.statusTTL(status, index);
        return true;
      } else if (status) {
        status.has = "stale";
        this.statusTTL(status, index);
      }
    } else if (status) {
      status.has = "miss";
    }
    return false;
  }
  // like get(), but without any LRU updating or TTL expiration
  peek(k, { allowStale = this.allowStale } = {}) {
    const index = this.keyMap.get(k);
    if (index !== void 0 && (allowStale || !this.isStale(index))) {
      const v = this.valList[index];
      return this.isBackgroundFetch(v) ? v.__staleWhileFetching : v;
    }
  }
  backgroundFetch(k, index, options, context) {
    const v = index === void 0 ? void 0 : this.valList[index];
    if (this.isBackgroundFetch(v)) {
      return v;
    }
    const ac = new AC();
    if (options.signal) {
      options.signal.addEventListener(
        "abort",
        () => ac.abort(options.signal.reason)
      );
    }
    const fetchOpts = {
      signal: ac.signal,
      options,
      context
    };
    const cb = /* @__PURE__ */ __name((v2, updateCache = false) => {
      const { aborted } = ac.signal;
      const ignoreAbort = options.ignoreFetchAbort && v2 !== void 0;
      if (options.status) {
        if (aborted && !updateCache) {
          options.status.fetchAborted = true;
          options.status.fetchError = ac.signal.reason;
          if (ignoreAbort)
            options.status.fetchAbortIgnored = true;
        } else {
          options.status.fetchResolved = true;
        }
      }
      if (aborted && !ignoreAbort && !updateCache) {
        return fetchFail(ac.signal.reason);
      }
      if (this.valList[index] === p) {
        if (v2 === void 0) {
          if (p.__staleWhileFetching) {
            this.valList[index] = p.__staleWhileFetching;
          } else {
            this.delete(k);
          }
        } else {
          if (options.status)
            options.status.fetchUpdated = true;
          this.set(k, v2, fetchOpts.options);
        }
      }
      return v2;
    }, "cb");
    const eb = /* @__PURE__ */ __name((er) => {
      if (options.status) {
        options.status.fetchRejected = true;
        options.status.fetchError = er;
      }
      return fetchFail(er);
    }, "eb");
    const fetchFail = /* @__PURE__ */ __name((er) => {
      const { aborted } = ac.signal;
      const allowStaleAborted = aborted && options.allowStaleOnFetchAbort;
      const allowStale = allowStaleAborted || options.allowStaleOnFetchRejection;
      const noDelete = allowStale || options.noDeleteOnFetchRejection;
      if (this.valList[index] === p) {
        const del = !noDelete || p.__staleWhileFetching === void 0;
        if (del) {
          this.delete(k);
        } else if (!allowStaleAborted) {
          this.valList[index] = p.__staleWhileFetching;
        }
      }
      if (allowStale) {
        if (options.status && p.__staleWhileFetching !== void 0) {
          options.status.returnedStale = true;
        }
        return p.__staleWhileFetching;
      } else if (p.__returned === p) {
        throw er;
      }
    }, "fetchFail");
    const pcall = /* @__PURE__ */ __name((res, rej) => {
      this.fetchMethod(k, v, fetchOpts).then((v2) => res(v2), rej);
      ac.signal.addEventListener("abort", () => {
        if (!options.ignoreFetchAbort || options.allowStaleOnFetchAbort) {
          res();
          if (options.allowStaleOnFetchAbort) {
            res = /* @__PURE__ */ __name((v2) => cb(v2, true), "res");
          }
        }
      });
    }, "pcall");
    if (options.status)
      options.status.fetchDispatched = true;
    const p = new Promise(pcall).then(cb, eb);
    p.__abortController = ac;
    p.__staleWhileFetching = v;
    p.__returned = null;
    if (index === void 0) {
      this.set(k, p, { ...fetchOpts.options, status: void 0 });
      index = this.keyMap.get(k);
    } else {
      this.valList[index] = p;
    }
    return p;
  }
  isBackgroundFetch(p) {
    return p && typeof p === "object" && typeof p.then === "function" && Object.prototype.hasOwnProperty.call(
      p,
      "__staleWhileFetching"
    ) && Object.prototype.hasOwnProperty.call(p, "__returned") && (p.__returned === p || p.__returned === null);
  }
  // this takes the union of get() and set() opts, because it does both
  async fetch(k, {
    // get options
    allowStale = this.allowStale,
    updateAgeOnGet = this.updateAgeOnGet,
    noDeleteOnStaleGet = this.noDeleteOnStaleGet,
    // set options
    ttl = this.ttl,
    noDisposeOnSet = this.noDisposeOnSet,
    size = 0,
    sizeCalculation = this.sizeCalculation,
    noUpdateTTL = this.noUpdateTTL,
    // fetch exclusive options
    noDeleteOnFetchRejection = this.noDeleteOnFetchRejection,
    allowStaleOnFetchRejection = this.allowStaleOnFetchRejection,
    ignoreFetchAbort = this.ignoreFetchAbort,
    allowStaleOnFetchAbort = this.allowStaleOnFetchAbort,
    fetchContext = this.fetchContext,
    forceRefresh = false,
    status,
    signal
  } = {}) {
    if (!this.fetchMethod) {
      if (status)
        status.fetch = "get";
      return this.get(k, {
        allowStale,
        updateAgeOnGet,
        noDeleteOnStaleGet,
        status
      });
    }
    const options = {
      allowStale,
      updateAgeOnGet,
      noDeleteOnStaleGet,
      ttl,
      noDisposeOnSet,
      size,
      sizeCalculation,
      noUpdateTTL,
      noDeleteOnFetchRejection,
      allowStaleOnFetchRejection,
      allowStaleOnFetchAbort,
      ignoreFetchAbort,
      status,
      signal
    };
    let index = this.keyMap.get(k);
    if (index === void 0) {
      if (status)
        status.fetch = "miss";
      const p = this.backgroundFetch(k, index, options, fetchContext);
      return p.__returned = p;
    } else {
      const v = this.valList[index];
      if (this.isBackgroundFetch(v)) {
        const stale = allowStale && v.__staleWhileFetching !== void 0;
        if (status) {
          status.fetch = "inflight";
          if (stale)
            status.returnedStale = true;
        }
        return stale ? v.__staleWhileFetching : v.__returned = v;
      }
      const isStale = this.isStale(index);
      if (!forceRefresh && !isStale) {
        if (status)
          status.fetch = "hit";
        this.moveToTail(index);
        if (updateAgeOnGet) {
          this.updateItemAge(index);
        }
        this.statusTTL(status, index);
        return v;
      }
      const p = this.backgroundFetch(k, index, options, fetchContext);
      const hasStale = p.__staleWhileFetching !== void 0;
      const staleVal = hasStale && allowStale;
      if (status) {
        status.fetch = hasStale && isStale ? "stale" : "refresh";
        if (staleVal && isStale)
          status.returnedStale = true;
      }
      return staleVal ? p.__staleWhileFetching : p.__returned = p;
    }
  }
  get(k, {
    allowStale = this.allowStale,
    updateAgeOnGet = this.updateAgeOnGet,
    noDeleteOnStaleGet = this.noDeleteOnStaleGet,
    status
  } = {}) {
    const index = this.keyMap.get(k);
    if (index !== void 0) {
      const value = this.valList[index];
      const fetching = this.isBackgroundFetch(value);
      this.statusTTL(status, index);
      if (this.isStale(index)) {
        if (status)
          status.get = "stale";
        if (!fetching) {
          if (!noDeleteOnStaleGet) {
            this.delete(k);
          }
          if (status)
            status.returnedStale = allowStale;
          return allowStale ? value : void 0;
        } else {
          if (status) {
            status.returnedStale = allowStale && value.__staleWhileFetching !== void 0;
          }
          return allowStale ? value.__staleWhileFetching : void 0;
        }
      } else {
        if (status)
          status.get = "hit";
        if (fetching) {
          return value.__staleWhileFetching;
        }
        this.moveToTail(index);
        if (updateAgeOnGet) {
          this.updateItemAge(index);
        }
        return value;
      }
    } else if (status) {
      status.get = "miss";
    }
  }
  connect(p, n) {
    this.prev[n] = p;
    this.next[p] = n;
  }
  moveToTail(index) {
    if (index !== this.tail) {
      if (index === this.head) {
        this.head = this.next[index];
      } else {
        this.connect(this.prev[index], this.next[index]);
      }
      this.connect(this.tail, index);
      this.tail = index;
    }
  }
  get del() {
    deprecatedMethod("del", "delete");
    return this.delete;
  }
  delete(k) {
    let deleted = false;
    if (this.size !== 0) {
      const index = this.keyMap.get(k);
      if (index !== void 0) {
        deleted = true;
        if (this.size === 1) {
          this.clear();
        } else {
          this.removeItemSize(index);
          const v = this.valList[index];
          if (this.isBackgroundFetch(v)) {
            v.__abortController.abort(new Error("deleted"));
          } else {
            this.dispose(v, k, "delete");
            if (this.disposeAfter) {
              this.disposed.push([v, k, "delete"]);
            }
          }
          this.keyMap.delete(k);
          this.keyList[index] = null;
          this.valList[index] = null;
          if (index === this.tail) {
            this.tail = this.prev[index];
          } else if (index === this.head) {
            this.head = this.next[index];
          } else {
            this.next[this.prev[index]] = this.next[index];
            this.prev[this.next[index]] = this.prev[index];
          }
          this.size--;
          this.free.push(index);
        }
      }
    }
    if (this.disposed) {
      while (this.disposed.length) {
        this.disposeAfter(...this.disposed.shift());
      }
    }
    return deleted;
  }
  clear() {
    for (const index of this.rindexes({ allowStale: true })) {
      const v = this.valList[index];
      if (this.isBackgroundFetch(v)) {
        v.__abortController.abort(new Error("deleted"));
      } else {
        const k = this.keyList[index];
        this.dispose(v, k, "delete");
        if (this.disposeAfter) {
          this.disposed.push([v, k, "delete"]);
        }
      }
    }
    this.keyMap.clear();
    this.valList.fill(null);
    this.keyList.fill(null);
    if (this.ttls) {
      this.ttls.fill(0);
      this.starts.fill(0);
    }
    if (this.sizes) {
      this.sizes.fill(0);
    }
    this.head = 0;
    this.tail = 0;
    this.initialFill = 1;
    this.free.length = 0;
    this.calculatedSize = 0;
    this.size = 0;
    if (this.disposed) {
      while (this.disposed.length) {
        this.disposeAfter(...this.disposed.shift());
      }
    }
  }
  get reset() {
    deprecatedMethod("reset", "clear");
    return this.clear;
  }
  get length() {
    deprecatedProperty("length", "size");
    return this.size;
  }
  static get AbortController() {
    return AC;
  }
  static get AbortSignal() {
    return AS;
  }
};
__name(LRUCache, "LRUCache");
var lru_cache_default = LRUCache;

// node_modules/@modelcontextprotocol/sdk/dist/esm/types.js
var LATEST_PROTOCOL_VERSION = "2025-06-18";
var SUPPORTED_PROTOCOL_VERSIONS = [
  LATEST_PROTOCOL_VERSION,
  "2025-03-26",
  "2024-11-05",
  "2024-10-07"
];
var JSONRPC_VERSION = "2.0";
var ProgressTokenSchema = z.union([z.string(), z.number().int()]);
var CursorSchema = z.string();
var RequestMetaSchema = z.object({
  /**
   * If specified, the caller is requesting out-of-band progress notifications for this request (as represented by notifications/progress). The value of this parameter is an opaque token that will be attached to any subsequent notifications. The receiver is not obligated to provide these notifications.
   */
  progressToken: z.optional(ProgressTokenSchema)
}).passthrough();
var BaseRequestParamsSchema = z.object({
  _meta: z.optional(RequestMetaSchema)
}).passthrough();
var RequestSchema = z.object({
  method: z.string(),
  params: z.optional(BaseRequestParamsSchema)
});
var BaseNotificationParamsSchema = z.object({
  /**
   * See [MCP specification](https://github.com/modelcontextprotocol/modelcontextprotocol/blob/47339c03c143bb4ec01a26e721a1b8fe66634ebe/docs/specification/draft/basic/index.mdx#general-fields)
   * for notes on _meta usage.
   */
  _meta: z.optional(z.object({}).passthrough())
}).passthrough();
var NotificationSchema = z.object({
  method: z.string(),
  params: z.optional(BaseNotificationParamsSchema)
});
var ResultSchema = z.object({
  /**
   * See [MCP specification](https://github.com/modelcontextprotocol/modelcontextprotocol/blob/47339c03c143bb4ec01a26e721a1b8fe66634ebe/docs/specification/draft/basic/index.mdx#general-fields)
   * for notes on _meta usage.
   */
  _meta: z.optional(z.object({}).passthrough())
}).passthrough();
var RequestIdSchema = z.union([z.string(), z.number().int()]);
var JSONRPCRequestSchema = z.object({
  jsonrpc: z.literal(JSONRPC_VERSION),
  id: RequestIdSchema
}).merge(RequestSchema).strict();
var isJSONRPCRequest = /* @__PURE__ */ __name((value) => JSONRPCRequestSchema.safeParse(value).success, "isJSONRPCRequest");
var JSONRPCNotificationSchema = z.object({
  jsonrpc: z.literal(JSONRPC_VERSION)
}).merge(NotificationSchema).strict();
var isJSONRPCNotification = /* @__PURE__ */ __name((value) => JSONRPCNotificationSchema.safeParse(value).success, "isJSONRPCNotification");
var JSONRPCResponseSchema = z.object({
  jsonrpc: z.literal(JSONRPC_VERSION),
  id: RequestIdSchema,
  result: ResultSchema
}).strict();
var isJSONRPCResponse = /* @__PURE__ */ __name((value) => JSONRPCResponseSchema.safeParse(value).success, "isJSONRPCResponse");
var ErrorCode;
(function(ErrorCode2) {
  ErrorCode2[ErrorCode2["ConnectionClosed"] = -32e3] = "ConnectionClosed";
  ErrorCode2[ErrorCode2["RequestTimeout"] = -32001] = "RequestTimeout";
  ErrorCode2[ErrorCode2["ParseError"] = -32700] = "ParseError";
  ErrorCode2[ErrorCode2["InvalidRequest"] = -32600] = "InvalidRequest";
  ErrorCode2[ErrorCode2["MethodNotFound"] = -32601] = "MethodNotFound";
  ErrorCode2[ErrorCode2["InvalidParams"] = -32602] = "InvalidParams";
  ErrorCode2[ErrorCode2["InternalError"] = -32603] = "InternalError";
})(ErrorCode || (ErrorCode = {}));
var JSONRPCErrorSchema = z.object({
  jsonrpc: z.literal(JSONRPC_VERSION),
  id: RequestIdSchema,
  error: z.object({
    /**
     * The error type that occurred.
     */
    code: z.number().int(),
    /**
     * A short description of the error. The message SHOULD be limited to a concise single sentence.
     */
    message: z.string(),
    /**
     * Additional information about the error. The value of this member is defined by the sender (e.g. detailed error information, nested errors etc.).
     */
    data: z.optional(z.unknown())
  })
}).strict();
var isJSONRPCError = /* @__PURE__ */ __name((value) => JSONRPCErrorSchema.safeParse(value).success, "isJSONRPCError");
var JSONRPCMessageSchema = z.union([
  JSONRPCRequestSchema,
  JSONRPCNotificationSchema,
  JSONRPCResponseSchema,
  JSONRPCErrorSchema
]);
var EmptyResultSchema = ResultSchema.strict();
var CancelledNotificationSchema = NotificationSchema.extend({
  method: z.literal("notifications/cancelled"),
  params: BaseNotificationParamsSchema.extend({
    /**
     * The ID of the request to cancel.
     *
     * This MUST correspond to the ID of a request previously issued in the same direction.
     */
    requestId: RequestIdSchema,
    /**
     * An optional string describing the reason for the cancellation. This MAY be logged or presented to the user.
     */
    reason: z.string().optional()
  })
});
var BaseMetadataSchema = z.object({
  /** Intended for programmatic or logical use, but used as a display name in past specs or fallback */
  name: z.string(),
  /**
  * Intended for UI and end-user contexts — optimized to be human-readable and easily understood,
  * even by those unfamiliar with domain-specific terminology.
  *
  * If not provided, the name should be used for display (except for Tool,
  * where `annotations.title` should be given precedence over using `name`,
  * if present).
  */
  title: z.optional(z.string())
}).passthrough();
var ImplementationSchema = BaseMetadataSchema.extend({
  version: z.string()
});
var ClientCapabilitiesSchema = z.object({
  /**
   * Experimental, non-standard capabilities that the client supports.
   */
  experimental: z.optional(z.object({}).passthrough()),
  /**
   * Present if the client supports sampling from an LLM.
   */
  sampling: z.optional(z.object({}).passthrough()),
  /**
   * Present if the client supports eliciting user input.
   */
  elicitation: z.optional(z.object({}).passthrough()),
  /**
   * Present if the client supports listing roots.
   */
  roots: z.optional(z.object({
    /**
     * Whether the client supports issuing notifications for changes to the roots list.
     */
    listChanged: z.optional(z.boolean())
  }).passthrough())
}).passthrough();
var InitializeRequestSchema = RequestSchema.extend({
  method: z.literal("initialize"),
  params: BaseRequestParamsSchema.extend({
    /**
     * The latest version of the Model Context Protocol that the client supports. The client MAY decide to support older versions as well.
     */
    protocolVersion: z.string(),
    capabilities: ClientCapabilitiesSchema,
    clientInfo: ImplementationSchema
  })
});
var ServerCapabilitiesSchema = z.object({
  /**
   * Experimental, non-standard capabilities that the server supports.
   */
  experimental: z.optional(z.object({}).passthrough()),
  /**
   * Present if the server supports sending log messages to the client.
   */
  logging: z.optional(z.object({}).passthrough()),
  /**
   * Present if the server supports sending completions to the client.
   */
  completions: z.optional(z.object({}).passthrough()),
  /**
   * Present if the server offers any prompt templates.
   */
  prompts: z.optional(z.object({
    /**
     * Whether this server supports issuing notifications for changes to the prompt list.
     */
    listChanged: z.optional(z.boolean())
  }).passthrough()),
  /**
   * Present if the server offers any resources to read.
   */
  resources: z.optional(z.object({
    /**
     * Whether this server supports clients subscribing to resource updates.
     */
    subscribe: z.optional(z.boolean()),
    /**
     * Whether this server supports issuing notifications for changes to the resource list.
     */
    listChanged: z.optional(z.boolean())
  }).passthrough()),
  /**
   * Present if the server offers any tools to call.
   */
  tools: z.optional(z.object({
    /**
     * Whether this server supports issuing notifications for changes to the tool list.
     */
    listChanged: z.optional(z.boolean())
  }).passthrough())
}).passthrough();
var InitializeResultSchema = ResultSchema.extend({
  /**
   * The version of the Model Context Protocol that the server wants to use. This may not match the version that the client requested. If the client cannot support this version, it MUST disconnect.
   */
  protocolVersion: z.string(),
  capabilities: ServerCapabilitiesSchema,
  serverInfo: ImplementationSchema,
  /**
   * Instructions describing how to use the server and its features.
   *
   * This can be used by clients to improve the LLM's understanding of available tools, resources, etc. It can be thought of like a "hint" to the model. For example, this information MAY be added to the system prompt.
   */
  instructions: z.optional(z.string())
});
var InitializedNotificationSchema = NotificationSchema.extend({
  method: z.literal("notifications/initialized")
});
var PingRequestSchema = RequestSchema.extend({
  method: z.literal("ping")
});
var ProgressSchema = z.object({
  /**
   * The progress thus far. This should increase every time progress is made, even if the total is unknown.
   */
  progress: z.number(),
  /**
   * Total number of items to process (or total progress required), if known.
   */
  total: z.optional(z.number()),
  /**
   * An optional message describing the current progress.
   */
  message: z.optional(z.string())
}).passthrough();
var ProgressNotificationSchema = NotificationSchema.extend({
  method: z.literal("notifications/progress"),
  params: BaseNotificationParamsSchema.merge(ProgressSchema).extend({
    /**
     * The progress token which was given in the initial request, used to associate this notification with the request that is proceeding.
     */
    progressToken: ProgressTokenSchema
  })
});
var PaginatedRequestSchema = RequestSchema.extend({
  params: BaseRequestParamsSchema.extend({
    /**
     * An opaque token representing the current pagination position.
     * If provided, the server should return results starting after this cursor.
     */
    cursor: z.optional(CursorSchema)
  }).optional()
});
var PaginatedResultSchema = ResultSchema.extend({
  /**
   * An opaque token representing the pagination position after the last returned result.
   * If present, there may be more results available.
   */
  nextCursor: z.optional(CursorSchema)
});
var ResourceContentsSchema = z.object({
  /**
   * The URI of this resource.
   */
  uri: z.string(),
  /**
   * The MIME type of this resource, if known.
   */
  mimeType: z.optional(z.string()),
  /**
   * See [MCP specification](https://github.com/modelcontextprotocol/modelcontextprotocol/blob/47339c03c143bb4ec01a26e721a1b8fe66634ebe/docs/specification/draft/basic/index.mdx#general-fields)
   * for notes on _meta usage.
   */
  _meta: z.optional(z.object({}).passthrough())
}).passthrough();
var TextResourceContentsSchema = ResourceContentsSchema.extend({
  /**
   * The text of the item. This must only be set if the item can actually be represented as text (not binary data).
   */
  text: z.string()
});
var BlobResourceContentsSchema = ResourceContentsSchema.extend({
  /**
   * A base64-encoded string representing the binary data of the item.
   */
  blob: z.string().base64()
});
var ResourceSchema = BaseMetadataSchema.extend({
  /**
   * The URI of this resource.
   */
  uri: z.string(),
  /**
   * A description of what this resource represents.
   *
   * This can be used by clients to improve the LLM's understanding of available resources. It can be thought of like a "hint" to the model.
   */
  description: z.optional(z.string()),
  /**
   * The MIME type of this resource, if known.
   */
  mimeType: z.optional(z.string()),
  /**
   * See [MCP specification](https://github.com/modelcontextprotocol/modelcontextprotocol/blob/47339c03c143bb4ec01a26e721a1b8fe66634ebe/docs/specification/draft/basic/index.mdx#general-fields)
   * for notes on _meta usage.
   */
  _meta: z.optional(z.object({}).passthrough())
});
var ResourceTemplateSchema = BaseMetadataSchema.extend({
  /**
   * A URI template (according to RFC 6570) that can be used to construct resource URIs.
   */
  uriTemplate: z.string(),
  /**
   * A description of what this template is for.
   *
   * This can be used by clients to improve the LLM's understanding of available resources. It can be thought of like a "hint" to the model.
   */
  description: z.optional(z.string()),
  /**
   * The MIME type for all resources that match this template. This should only be included if all resources matching this template have the same type.
   */
  mimeType: z.optional(z.string()),
  /**
   * See [MCP specification](https://github.com/modelcontextprotocol/modelcontextprotocol/blob/47339c03c143bb4ec01a26e721a1b8fe66634ebe/docs/specification/draft/basic/index.mdx#general-fields)
   * for notes on _meta usage.
   */
  _meta: z.optional(z.object({}).passthrough())
});
var ListResourcesRequestSchema = PaginatedRequestSchema.extend({
  method: z.literal("resources/list")
});
var ListResourcesResultSchema = PaginatedResultSchema.extend({
  resources: z.array(ResourceSchema)
});
var ListResourceTemplatesRequestSchema = PaginatedRequestSchema.extend({
  method: z.literal("resources/templates/list")
});
var ListResourceTemplatesResultSchema = PaginatedResultSchema.extend({
  resourceTemplates: z.array(ResourceTemplateSchema)
});
var ReadResourceRequestSchema = RequestSchema.extend({
  method: z.literal("resources/read"),
  params: BaseRequestParamsSchema.extend({
    /**
     * The URI of the resource to read. The URI can use any protocol; it is up to the server how to interpret it.
     */
    uri: z.string()
  })
});
var ReadResourceResultSchema = ResultSchema.extend({
  contents: z.array(z.union([TextResourceContentsSchema, BlobResourceContentsSchema]))
});
var ResourceListChangedNotificationSchema = NotificationSchema.extend({
  method: z.literal("notifications/resources/list_changed")
});
var SubscribeRequestSchema = RequestSchema.extend({
  method: z.literal("resources/subscribe"),
  params: BaseRequestParamsSchema.extend({
    /**
     * The URI of the resource to subscribe to. The URI can use any protocol; it is up to the server how to interpret it.
     */
    uri: z.string()
  })
});
var UnsubscribeRequestSchema = RequestSchema.extend({
  method: z.literal("resources/unsubscribe"),
  params: BaseRequestParamsSchema.extend({
    /**
     * The URI of the resource to unsubscribe from.
     */
    uri: z.string()
  })
});
var ResourceUpdatedNotificationSchema = NotificationSchema.extend({
  method: z.literal("notifications/resources/updated"),
  params: BaseNotificationParamsSchema.extend({
    /**
     * The URI of the resource that has been updated. This might be a sub-resource of the one that the client actually subscribed to.
     */
    uri: z.string()
  })
});
var PromptArgumentSchema = z.object({
  /**
   * The name of the argument.
   */
  name: z.string(),
  /**
   * A human-readable description of the argument.
   */
  description: z.optional(z.string()),
  /**
   * Whether this argument must be provided.
   */
  required: z.optional(z.boolean())
}).passthrough();
var PromptSchema = BaseMetadataSchema.extend({
  /**
   * An optional description of what this prompt provides
   */
  description: z.optional(z.string()),
  /**
   * A list of arguments to use for templating the prompt.
   */
  arguments: z.optional(z.array(PromptArgumentSchema)),
  /**
   * See [MCP specification](https://github.com/modelcontextprotocol/modelcontextprotocol/blob/47339c03c143bb4ec01a26e721a1b8fe66634ebe/docs/specification/draft/basic/index.mdx#general-fields)
   * for notes on _meta usage.
   */
  _meta: z.optional(z.object({}).passthrough())
});
var ListPromptsRequestSchema = PaginatedRequestSchema.extend({
  method: z.literal("prompts/list")
});
var ListPromptsResultSchema = PaginatedResultSchema.extend({
  prompts: z.array(PromptSchema)
});
var GetPromptRequestSchema = RequestSchema.extend({
  method: z.literal("prompts/get"),
  params: BaseRequestParamsSchema.extend({
    /**
     * The name of the prompt or prompt template.
     */
    name: z.string(),
    /**
     * Arguments to use for templating the prompt.
     */
    arguments: z.optional(z.record(z.string()))
  })
});
var TextContentSchema = z.object({
  type: z.literal("text"),
  /**
   * The text content of the message.
   */
  text: z.string(),
  /**
   * See [MCP specification](https://github.com/modelcontextprotocol/modelcontextprotocol/blob/47339c03c143bb4ec01a26e721a1b8fe66634ebe/docs/specification/draft/basic/index.mdx#general-fields)
   * for notes on _meta usage.
   */
  _meta: z.optional(z.object({}).passthrough())
}).passthrough();
var ImageContentSchema = z.object({
  type: z.literal("image"),
  /**
   * The base64-encoded image data.
   */
  data: z.string().base64(),
  /**
   * The MIME type of the image. Different providers may support different image types.
   */
  mimeType: z.string(),
  /**
   * See [MCP specification](https://github.com/modelcontextprotocol/modelcontextprotocol/blob/47339c03c143bb4ec01a26e721a1b8fe66634ebe/docs/specification/draft/basic/index.mdx#general-fields)
   * for notes on _meta usage.
   */
  _meta: z.optional(z.object({}).passthrough())
}).passthrough();
var AudioContentSchema = z.object({
  type: z.literal("audio"),
  /**
   * The base64-encoded audio data.
   */
  data: z.string().base64(),
  /**
   * The MIME type of the audio. Different providers may support different audio types.
   */
  mimeType: z.string(),
  /**
   * See [MCP specification](https://github.com/modelcontextprotocol/modelcontextprotocol/blob/47339c03c143bb4ec01a26e721a1b8fe66634ebe/docs/specification/draft/basic/index.mdx#general-fields)
   * for notes on _meta usage.
   */
  _meta: z.optional(z.object({}).passthrough())
}).passthrough();
var EmbeddedResourceSchema = z.object({
  type: z.literal("resource"),
  resource: z.union([TextResourceContentsSchema, BlobResourceContentsSchema]),
  /**
   * See [MCP specification](https://github.com/modelcontextprotocol/modelcontextprotocol/blob/47339c03c143bb4ec01a26e721a1b8fe66634ebe/docs/specification/draft/basic/index.mdx#general-fields)
   * for notes on _meta usage.
   */
  _meta: z.optional(z.object({}).passthrough())
}).passthrough();
var ResourceLinkSchema = ResourceSchema.extend({
  type: z.literal("resource_link")
});
var ContentBlockSchema = z.union([
  TextContentSchema,
  ImageContentSchema,
  AudioContentSchema,
  ResourceLinkSchema,
  EmbeddedResourceSchema
]);
var PromptMessageSchema = z.object({
  role: z.enum(["user", "assistant"]),
  content: ContentBlockSchema
}).passthrough();
var GetPromptResultSchema = ResultSchema.extend({
  /**
   * An optional description for the prompt.
   */
  description: z.optional(z.string()),
  messages: z.array(PromptMessageSchema)
});
var PromptListChangedNotificationSchema = NotificationSchema.extend({
  method: z.literal("notifications/prompts/list_changed")
});
var ToolAnnotationsSchema = z.object({
  /**
   * A human-readable title for the tool.
   */
  title: z.optional(z.string()),
  /**
   * If true, the tool does not modify its environment.
   *
   * Default: false
   */
  readOnlyHint: z.optional(z.boolean()),
  /**
   * If true, the tool may perform destructive updates to its environment.
   * If false, the tool performs only additive updates.
   *
   * (This property is meaningful only when `readOnlyHint == false`)
   *
   * Default: true
   */
  destructiveHint: z.optional(z.boolean()),
  /**
   * If true, calling the tool repeatedly with the same arguments
   * will have no additional effect on the its environment.
   *
   * (This property is meaningful only when `readOnlyHint == false`)
   *
   * Default: false
   */
  idempotentHint: z.optional(z.boolean()),
  /**
   * If true, this tool may interact with an "open world" of external
   * entities. If false, the tool's domain of interaction is closed.
   * For example, the world of a web search tool is open, whereas that
   * of a memory tool is not.
   *
   * Default: true
   */
  openWorldHint: z.optional(z.boolean())
}).passthrough();
var ToolSchema = BaseMetadataSchema.extend({
  /**
   * A human-readable description of the tool.
   */
  description: z.optional(z.string()),
  /**
   * A JSON Schema object defining the expected parameters for the tool.
   */
  inputSchema: z.object({
    type: z.literal("object"),
    properties: z.optional(z.object({}).passthrough()),
    required: z.optional(z.array(z.string()))
  }).passthrough(),
  /**
   * An optional JSON Schema object defining the structure of the tool's output returned in
   * the structuredContent field of a CallToolResult.
   */
  outputSchema: z.optional(z.object({
    type: z.literal("object"),
    properties: z.optional(z.object({}).passthrough()),
    required: z.optional(z.array(z.string()))
  }).passthrough()),
  /**
   * Optional additional tool information.
   */
  annotations: z.optional(ToolAnnotationsSchema),
  /**
   * See [MCP specification](https://github.com/modelcontextprotocol/modelcontextprotocol/blob/47339c03c143bb4ec01a26e721a1b8fe66634ebe/docs/specification/draft/basic/index.mdx#general-fields)
   * for notes on _meta usage.
   */
  _meta: z.optional(z.object({}).passthrough())
});
var ListToolsRequestSchema = PaginatedRequestSchema.extend({
  method: z.literal("tools/list")
});
var ListToolsResultSchema = PaginatedResultSchema.extend({
  tools: z.array(ToolSchema)
});
var CallToolResultSchema = ResultSchema.extend({
  /**
   * A list of content objects that represent the result of the tool call.
   *
   * If the Tool does not define an outputSchema, this field MUST be present in the result.
   * For backwards compatibility, this field is always present, but it may be empty.
   */
  content: z.array(ContentBlockSchema).default([]),
  /**
   * An object containing structured tool output.
   *
   * If the Tool defines an outputSchema, this field MUST be present in the result, and contain a JSON object that matches the schema.
   */
  structuredContent: z.object({}).passthrough().optional(),
  /**
   * Whether the tool call ended in an error.
   *
   * If not set, this is assumed to be false (the call was successful).
   *
   * Any errors that originate from the tool SHOULD be reported inside the result
   * object, with `isError` set to true, _not_ as an MCP protocol-level error
   * response. Otherwise, the LLM would not be able to see that an error occurred
   * and self-correct.
   *
   * However, any errors in _finding_ the tool, an error indicating that the
   * server does not support tool calls, or any other exceptional conditions,
   * should be reported as an MCP error response.
   */
  isError: z.optional(z.boolean())
});
var CompatibilityCallToolResultSchema = CallToolResultSchema.or(ResultSchema.extend({
  toolResult: z.unknown()
}));
var CallToolRequestSchema = RequestSchema.extend({
  method: z.literal("tools/call"),
  params: BaseRequestParamsSchema.extend({
    name: z.string(),
    arguments: z.optional(z.record(z.unknown()))
  })
});
var ToolListChangedNotificationSchema = NotificationSchema.extend({
  method: z.literal("notifications/tools/list_changed")
});
var LoggingLevelSchema = z.enum([
  "debug",
  "info",
  "notice",
  "warning",
  "error",
  "critical",
  "alert",
  "emergency"
]);
var SetLevelRequestSchema = RequestSchema.extend({
  method: z.literal("logging/setLevel"),
  params: BaseRequestParamsSchema.extend({
    /**
     * The level of logging that the client wants to receive from the server. The server should send all logs at this level and higher (i.e., more severe) to the client as notifications/logging/message.
     */
    level: LoggingLevelSchema
  })
});
var LoggingMessageNotificationSchema = NotificationSchema.extend({
  method: z.literal("notifications/message"),
  params: BaseNotificationParamsSchema.extend({
    /**
     * The severity of this log message.
     */
    level: LoggingLevelSchema,
    /**
     * An optional name of the logger issuing this message.
     */
    logger: z.optional(z.string()),
    /**
     * The data to be logged, such as a string message or an object. Any JSON serializable type is allowed here.
     */
    data: z.unknown()
  })
});
var ModelHintSchema = z.object({
  /**
   * A hint for a model name.
   */
  name: z.string().optional()
}).passthrough();
var ModelPreferencesSchema = z.object({
  /**
   * Optional hints to use for model selection.
   */
  hints: z.optional(z.array(ModelHintSchema)),
  /**
   * How much to prioritize cost when selecting a model.
   */
  costPriority: z.optional(z.number().min(0).max(1)),
  /**
   * How much to prioritize sampling speed (latency) when selecting a model.
   */
  speedPriority: z.optional(z.number().min(0).max(1)),
  /**
   * How much to prioritize intelligence and capabilities when selecting a model.
   */
  intelligencePriority: z.optional(z.number().min(0).max(1))
}).passthrough();
var SamplingMessageSchema = z.object({
  role: z.enum(["user", "assistant"]),
  content: z.union([TextContentSchema, ImageContentSchema, AudioContentSchema])
}).passthrough();
var CreateMessageRequestSchema = RequestSchema.extend({
  method: z.literal("sampling/createMessage"),
  params: BaseRequestParamsSchema.extend({
    messages: z.array(SamplingMessageSchema),
    /**
     * An optional system prompt the server wants to use for sampling. The client MAY modify or omit this prompt.
     */
    systemPrompt: z.optional(z.string()),
    /**
     * A request to include context from one or more MCP servers (including the caller), to be attached to the prompt. The client MAY ignore this request.
     */
    includeContext: z.optional(z.enum(["none", "thisServer", "allServers"])),
    temperature: z.optional(z.number()),
    /**
     * The maximum number of tokens to sample, as requested by the server. The client MAY choose to sample fewer tokens than requested.
     */
    maxTokens: z.number().int(),
    stopSequences: z.optional(z.array(z.string())),
    /**
     * Optional metadata to pass through to the LLM provider. The format of this metadata is provider-specific.
     */
    metadata: z.optional(z.object({}).passthrough()),
    /**
     * The server's preferences for which model to select.
     */
    modelPreferences: z.optional(ModelPreferencesSchema)
  })
});
var CreateMessageResultSchema = ResultSchema.extend({
  /**
   * The name of the model that generated the message.
   */
  model: z.string(),
  /**
   * The reason why sampling stopped.
   */
  stopReason: z.optional(z.enum(["endTurn", "stopSequence", "maxTokens"]).or(z.string())),
  role: z.enum(["user", "assistant"]),
  content: z.discriminatedUnion("type", [
    TextContentSchema,
    ImageContentSchema,
    AudioContentSchema
  ])
});
var BooleanSchemaSchema = z.object({
  type: z.literal("boolean"),
  title: z.optional(z.string()),
  description: z.optional(z.string()),
  default: z.optional(z.boolean())
}).passthrough();
var StringSchemaSchema = z.object({
  type: z.literal("string"),
  title: z.optional(z.string()),
  description: z.optional(z.string()),
  minLength: z.optional(z.number()),
  maxLength: z.optional(z.number()),
  format: z.optional(z.enum(["email", "uri", "date", "date-time"]))
}).passthrough();
var NumberSchemaSchema = z.object({
  type: z.enum(["number", "integer"]),
  title: z.optional(z.string()),
  description: z.optional(z.string()),
  minimum: z.optional(z.number()),
  maximum: z.optional(z.number())
}).passthrough();
var EnumSchemaSchema = z.object({
  type: z.literal("string"),
  title: z.optional(z.string()),
  description: z.optional(z.string()),
  enum: z.array(z.string()),
  enumNames: z.optional(z.array(z.string()))
}).passthrough();
var PrimitiveSchemaDefinitionSchema = z.union([
  BooleanSchemaSchema,
  StringSchemaSchema,
  NumberSchemaSchema,
  EnumSchemaSchema
]);
var ElicitRequestSchema = RequestSchema.extend({
  method: z.literal("elicitation/create"),
  params: BaseRequestParamsSchema.extend({
    /**
     * The message to present to the user.
     */
    message: z.string(),
    /**
     * The schema for the requested user input.
     */
    requestedSchema: z.object({
      type: z.literal("object"),
      properties: z.record(z.string(), PrimitiveSchemaDefinitionSchema),
      required: z.optional(z.array(z.string()))
    }).passthrough()
  })
});
var ElicitResultSchema = ResultSchema.extend({
  /**
   * The user's response action.
   */
  action: z.enum(["accept", "reject", "cancel"]),
  /**
   * The collected user input content (only present if action is "accept").
   */
  content: z.optional(z.record(z.string(), z.unknown()))
});
var ResourceTemplateReferenceSchema = z.object({
  type: z.literal("ref/resource"),
  /**
   * The URI or URI template of the resource.
   */
  uri: z.string()
}).passthrough();
var PromptReferenceSchema = z.object({
  type: z.literal("ref/prompt"),
  /**
   * The name of the prompt or prompt template
   */
  name: z.string()
}).passthrough();
var CompleteRequestSchema = RequestSchema.extend({
  method: z.literal("completion/complete"),
  params: BaseRequestParamsSchema.extend({
    ref: z.union([PromptReferenceSchema, ResourceTemplateReferenceSchema]),
    /**
     * The argument's information
     */
    argument: z.object({
      /**
       * The name of the argument
       */
      name: z.string(),
      /**
       * The value of the argument to use for completion matching.
       */
      value: z.string()
    }).passthrough(),
    context: z.optional(z.object({
      /**
       * Previously-resolved variables in a URI template or prompt.
       */
      arguments: z.optional(z.record(z.string(), z.string()))
    }))
  })
});
var CompleteResultSchema = ResultSchema.extend({
  completion: z.object({
    /**
     * An array of completion values. Must not exceed 100 items.
     */
    values: z.array(z.string()).max(100),
    /**
     * The total number of completion options available. This can exceed the number of values actually sent in the response.
     */
    total: z.optional(z.number().int()),
    /**
     * Indicates whether there are additional completion options beyond those provided in the current response, even if the exact total is unknown.
     */
    hasMore: z.optional(z.boolean())
  }).passthrough()
});
var RootSchema = z.object({
  /**
   * The URI identifying the root. This *must* start with file:// for now.
   */
  uri: z.string().startsWith("file://"),
  /**
   * An optional name for the root.
   */
  name: z.optional(z.string()),
  /**
   * See [MCP specification](https://github.com/modelcontextprotocol/modelcontextprotocol/blob/47339c03c143bb4ec01a26e721a1b8fe66634ebe/docs/specification/draft/basic/index.mdx#general-fields)
   * for notes on _meta usage.
   */
  _meta: z.optional(z.object({}).passthrough())
}).passthrough();
var ListRootsRequestSchema = RequestSchema.extend({
  method: z.literal("roots/list")
});
var ListRootsResultSchema = ResultSchema.extend({
  roots: z.array(RootSchema)
});
var RootsListChangedNotificationSchema = NotificationSchema.extend({
  method: z.literal("notifications/roots/list_changed")
});
var ClientRequestSchema = z.union([
  PingRequestSchema,
  InitializeRequestSchema,
  CompleteRequestSchema,
  SetLevelRequestSchema,
  GetPromptRequestSchema,
  ListPromptsRequestSchema,
  ListResourcesRequestSchema,
  ListResourceTemplatesRequestSchema,
  ReadResourceRequestSchema,
  SubscribeRequestSchema,
  UnsubscribeRequestSchema,
  CallToolRequestSchema,
  ListToolsRequestSchema
]);
var ClientNotificationSchema = z.union([
  CancelledNotificationSchema,
  ProgressNotificationSchema,
  InitializedNotificationSchema,
  RootsListChangedNotificationSchema
]);
var ClientResultSchema = z.union([
  EmptyResultSchema,
  CreateMessageResultSchema,
  ElicitResultSchema,
  ListRootsResultSchema
]);
var ServerRequestSchema = z.union([
  PingRequestSchema,
  CreateMessageRequestSchema,
  ElicitRequestSchema,
  ListRootsRequestSchema
]);
var ServerNotificationSchema = z.union([
  CancelledNotificationSchema,
  ProgressNotificationSchema,
  LoggingMessageNotificationSchema,
  ResourceUpdatedNotificationSchema,
  ResourceListChangedNotificationSchema,
  ToolListChangedNotificationSchema,
  PromptListChangedNotificationSchema
]);
var ServerResultSchema = z.union([
  EmptyResultSchema,
  InitializeResultSchema,
  CompleteResultSchema,
  GetPromptResultSchema,
  ListPromptsResultSchema,
  ListResourcesResultSchema,
  ListResourceTemplatesResultSchema,
  ReadResourceResultSchema,
  CallToolResultSchema,
  ListToolsResultSchema
]);
var McpError = class extends Error {
  constructor(code, message, data) {
    super(`MCP error ${code}: ${message}`);
    this.code = code;
    this.data = data;
    this.name = "McpError";
  }
};
__name(McpError, "McpError");

// node_modules/@modelcontextprotocol/sdk/dist/esm/shared/protocol.js
var DEFAULT_REQUEST_TIMEOUT_MSEC = 6e4;
var Protocol = class {
  constructor(_options) {
    this._options = _options;
    this._requestMessageId = 0;
    this._requestHandlers = /* @__PURE__ */ new Map();
    this._requestHandlerAbortControllers = /* @__PURE__ */ new Map();
    this._notificationHandlers = /* @__PURE__ */ new Map();
    this._responseHandlers = /* @__PURE__ */ new Map();
    this._progressHandlers = /* @__PURE__ */ new Map();
    this._timeoutInfo = /* @__PURE__ */ new Map();
    this.setNotificationHandler(CancelledNotificationSchema, (notification) => {
      const controller = this._requestHandlerAbortControllers.get(notification.params.requestId);
      controller === null || controller === void 0 ? void 0 : controller.abort(notification.params.reason);
    });
    this.setNotificationHandler(ProgressNotificationSchema, (notification) => {
      this._onprogress(notification);
    });
    this.setRequestHandler(
      PingRequestSchema,
      // Automatic pong by default.
      (_request) => ({})
    );
  }
  _setupTimeout(messageId, timeout, maxTotalTimeout, onTimeout, resetTimeoutOnProgress = false) {
    this._timeoutInfo.set(messageId, {
      timeoutId: setTimeout(onTimeout, timeout),
      startTime: Date.now(),
      timeout,
      maxTotalTimeout,
      resetTimeoutOnProgress,
      onTimeout
    });
  }
  _resetTimeout(messageId) {
    const info = this._timeoutInfo.get(messageId);
    if (!info)
      return false;
    const totalElapsed = Date.now() - info.startTime;
    if (info.maxTotalTimeout && totalElapsed >= info.maxTotalTimeout) {
      this._timeoutInfo.delete(messageId);
      throw new McpError(ErrorCode.RequestTimeout, "Maximum total timeout exceeded", { maxTotalTimeout: info.maxTotalTimeout, totalElapsed });
    }
    clearTimeout(info.timeoutId);
    info.timeoutId = setTimeout(info.onTimeout, info.timeout);
    return true;
  }
  _cleanupTimeout(messageId) {
    const info = this._timeoutInfo.get(messageId);
    if (info) {
      clearTimeout(info.timeoutId);
      this._timeoutInfo.delete(messageId);
    }
  }
  /**
   * Attaches to the given transport, starts it, and starts listening for messages.
   *
   * The Protocol object assumes ownership of the Transport, replacing any callbacks that have already been set, and expects that it is the only user of the Transport instance going forward.
   */
  async connect(transport) {
    var _a, _b, _c;
    this._transport = transport;
    const _onclose = (_a = this.transport) === null || _a === void 0 ? void 0 : _a.onclose;
    this._transport.onclose = () => {
      _onclose === null || _onclose === void 0 ? void 0 : _onclose();
      this._onclose();
    };
    const _onerror = (_b = this.transport) === null || _b === void 0 ? void 0 : _b.onerror;
    this._transport.onerror = (error) => {
      _onerror === null || _onerror === void 0 ? void 0 : _onerror(error);
      this._onerror(error);
    };
    const _onmessage = (_c = this._transport) === null || _c === void 0 ? void 0 : _c.onmessage;
    this._transport.onmessage = (message, extra) => {
      _onmessage === null || _onmessage === void 0 ? void 0 : _onmessage(message, extra);
      if (isJSONRPCResponse(message) || isJSONRPCError(message)) {
        this._onresponse(message);
      } else if (isJSONRPCRequest(message)) {
        this._onrequest(message, extra);
      } else if (isJSONRPCNotification(message)) {
        this._onnotification(message);
      } else {
        this._onerror(new Error(`Unknown message type: ${JSON.stringify(message)}`));
      }
    };
    await this._transport.start();
  }
  _onclose() {
    var _a;
    const responseHandlers = this._responseHandlers;
    this._responseHandlers = /* @__PURE__ */ new Map();
    this._progressHandlers.clear();
    this._transport = void 0;
    (_a = this.onclose) === null || _a === void 0 ? void 0 : _a.call(this);
    const error = new McpError(ErrorCode.ConnectionClosed, "Connection closed");
    for (const handler of responseHandlers.values()) {
      handler(error);
    }
  }
  _onerror(error) {
    var _a;
    (_a = this.onerror) === null || _a === void 0 ? void 0 : _a.call(this, error);
  }
  _onnotification(notification) {
    var _a;
    const handler = (_a = this._notificationHandlers.get(notification.method)) !== null && _a !== void 0 ? _a : this.fallbackNotificationHandler;
    if (handler === void 0) {
      return;
    }
    Promise.resolve().then(() => handler(notification)).catch((error) => this._onerror(new Error(`Uncaught error in notification handler: ${error}`)));
  }
  _onrequest(request, extra) {
    var _a, _b, _c, _d;
    const handler = (_a = this._requestHandlers.get(request.method)) !== null && _a !== void 0 ? _a : this.fallbackRequestHandler;
    if (handler === void 0) {
      (_b = this._transport) === null || _b === void 0 ? void 0 : _b.send({
        jsonrpc: "2.0",
        id: request.id,
        error: {
          code: ErrorCode.MethodNotFound,
          message: "Method not found"
        }
      }).catch((error) => this._onerror(new Error(`Failed to send an error response: ${error}`)));
      return;
    }
    const abortController = new AbortController();
    this._requestHandlerAbortControllers.set(request.id, abortController);
    const fullExtra = {
      signal: abortController.signal,
      sessionId: (_c = this._transport) === null || _c === void 0 ? void 0 : _c.sessionId,
      _meta: (_d = request.params) === null || _d === void 0 ? void 0 : _d._meta,
      sendNotification: (notification) => this.notification(notification, { relatedRequestId: request.id }),
      sendRequest: (r, resultSchema, options) => this.request(r, resultSchema, { ...options, relatedRequestId: request.id }),
      authInfo: extra === null || extra === void 0 ? void 0 : extra.authInfo,
      requestId: request.id,
      requestInfo: extra === null || extra === void 0 ? void 0 : extra.requestInfo
    };
    Promise.resolve().then(() => handler(request, fullExtra)).then((result) => {
      var _a2;
      if (abortController.signal.aborted) {
        return;
      }
      return (_a2 = this._transport) === null || _a2 === void 0 ? void 0 : _a2.send({
        result,
        jsonrpc: "2.0",
        id: request.id
      });
    }, (error) => {
      var _a2, _b2;
      if (abortController.signal.aborted) {
        return;
      }
      return (_a2 = this._transport) === null || _a2 === void 0 ? void 0 : _a2.send({
        jsonrpc: "2.0",
        id: request.id,
        error: {
          code: Number.isSafeInteger(error["code"]) ? error["code"] : ErrorCode.InternalError,
          message: (_b2 = error.message) !== null && _b2 !== void 0 ? _b2 : "Internal error"
        }
      });
    }).catch((error) => this._onerror(new Error(`Failed to send response: ${error}`))).finally(() => {
      this._requestHandlerAbortControllers.delete(request.id);
    });
  }
  _onprogress(notification) {
    const { progressToken, ...params } = notification.params;
    const messageId = Number(progressToken);
    const handler = this._progressHandlers.get(messageId);
    if (!handler) {
      this._onerror(new Error(`Received a progress notification for an unknown token: ${JSON.stringify(notification)}`));
      return;
    }
    const responseHandler = this._responseHandlers.get(messageId);
    const timeoutInfo = this._timeoutInfo.get(messageId);
    if (timeoutInfo && responseHandler && timeoutInfo.resetTimeoutOnProgress) {
      try {
        this._resetTimeout(messageId);
      } catch (error) {
        responseHandler(error);
        return;
      }
    }
    handler(params);
  }
  _onresponse(response) {
    const messageId = Number(response.id);
    const handler = this._responseHandlers.get(messageId);
    if (handler === void 0) {
      this._onerror(new Error(`Received a response for an unknown message ID: ${JSON.stringify(response)}`));
      return;
    }
    this._responseHandlers.delete(messageId);
    this._progressHandlers.delete(messageId);
    this._cleanupTimeout(messageId);
    if (isJSONRPCResponse(response)) {
      handler(response);
    } else {
      const error = new McpError(response.error.code, response.error.message, response.error.data);
      handler(error);
    }
  }
  get transport() {
    return this._transport;
  }
  /**
   * Closes the connection.
   */
  async close() {
    var _a;
    await ((_a = this._transport) === null || _a === void 0 ? void 0 : _a.close());
  }
  /**
   * Sends a request and wait for a response.
   *
   * Do not use this method to emit notifications! Use notification() instead.
   */
  request(request, resultSchema, options) {
    const { relatedRequestId, resumptionToken, onresumptiontoken } = options !== null && options !== void 0 ? options : {};
    return new Promise((resolve, reject) => {
      var _a, _b, _c, _d, _e, _f;
      if (!this._transport) {
        reject(new Error("Not connected"));
        return;
      }
      if (((_a = this._options) === null || _a === void 0 ? void 0 : _a.enforceStrictCapabilities) === true) {
        this.assertCapabilityForMethod(request.method);
      }
      (_b = options === null || options === void 0 ? void 0 : options.signal) === null || _b === void 0 ? void 0 : _b.throwIfAborted();
      const messageId = this._requestMessageId++;
      const jsonrpcRequest = {
        ...request,
        jsonrpc: "2.0",
        id: messageId
      };
      if (options === null || options === void 0 ? void 0 : options.onprogress) {
        this._progressHandlers.set(messageId, options.onprogress);
        jsonrpcRequest.params = {
          ...request.params,
          _meta: {
            ...((_c = request.params) === null || _c === void 0 ? void 0 : _c._meta) || {},
            progressToken: messageId
          }
        };
      }
      const cancel = /* @__PURE__ */ __name((reason) => {
        var _a2;
        this._responseHandlers.delete(messageId);
        this._progressHandlers.delete(messageId);
        this._cleanupTimeout(messageId);
        (_a2 = this._transport) === null || _a2 === void 0 ? void 0 : _a2.send({
          jsonrpc: "2.0",
          method: "notifications/cancelled",
          params: {
            requestId: messageId,
            reason: String(reason)
          }
        }, { relatedRequestId, resumptionToken, onresumptiontoken }).catch((error) => this._onerror(new Error(`Failed to send cancellation: ${error}`)));
        reject(reason);
      }, "cancel");
      this._responseHandlers.set(messageId, (response) => {
        var _a2;
        if ((_a2 = options === null || options === void 0 ? void 0 : options.signal) === null || _a2 === void 0 ? void 0 : _a2.aborted) {
          return;
        }
        if (response instanceof Error) {
          return reject(response);
        }
        try {
          const result = resultSchema.parse(response.result);
          resolve(result);
        } catch (error) {
          reject(error);
        }
      });
      (_d = options === null || options === void 0 ? void 0 : options.signal) === null || _d === void 0 ? void 0 : _d.addEventListener("abort", () => {
        var _a2;
        cancel((_a2 = options === null || options === void 0 ? void 0 : options.signal) === null || _a2 === void 0 ? void 0 : _a2.reason);
      });
      const timeout = (_e = options === null || options === void 0 ? void 0 : options.timeout) !== null && _e !== void 0 ? _e : DEFAULT_REQUEST_TIMEOUT_MSEC;
      const timeoutHandler = /* @__PURE__ */ __name(() => cancel(new McpError(ErrorCode.RequestTimeout, "Request timed out", { timeout })), "timeoutHandler");
      this._setupTimeout(messageId, timeout, options === null || options === void 0 ? void 0 : options.maxTotalTimeout, timeoutHandler, (_f = options === null || options === void 0 ? void 0 : options.resetTimeoutOnProgress) !== null && _f !== void 0 ? _f : false);
      this._transport.send(jsonrpcRequest, { relatedRequestId, resumptionToken, onresumptiontoken }).catch((error) => {
        this._cleanupTimeout(messageId);
        reject(error);
      });
    });
  }
  /**
   * Emits a notification, which is a one-way message that does not expect a response.
   */
  async notification(notification, options) {
    if (!this._transport) {
      throw new Error("Not connected");
    }
    this.assertNotificationCapability(notification.method);
    const jsonrpcNotification = {
      ...notification,
      jsonrpc: "2.0"
    };
    await this._transport.send(jsonrpcNotification, options);
  }
  /**
   * Registers a handler to invoke when this protocol object receives a request with the given method.
   *
   * Note that this will replace any previous request handler for the same method.
   */
  setRequestHandler(requestSchema, handler) {
    const method = requestSchema.shape.method.value;
    this.assertRequestHandlerCapability(method);
    this._requestHandlers.set(method, (request, extra) => {
      return Promise.resolve(handler(requestSchema.parse(request), extra));
    });
  }
  /**
   * Removes the request handler for the given method.
   */
  removeRequestHandler(method) {
    this._requestHandlers.delete(method);
  }
  /**
   * Asserts that a request handler has not already been set for the given method, in preparation for a new one being automatically installed.
   */
  assertCanSetRequestHandler(method) {
    if (this._requestHandlers.has(method)) {
      throw new Error(`A request handler for ${method} already exists, which would be overridden`);
    }
  }
  /**
   * Registers a handler to invoke when this protocol object receives a notification with the given method.
   *
   * Note that this will replace any previous notification handler for the same method.
   */
  setNotificationHandler(notificationSchema, handler) {
    this._notificationHandlers.set(notificationSchema.shape.method.value, (notification) => Promise.resolve(handler(notificationSchema.parse(notification))));
  }
  /**
   * Removes the notification handler for the given method.
   */
  removeNotificationHandler(method) {
    this._notificationHandlers.delete(method);
  }
};
__name(Protocol, "Protocol");
function mergeCapabilities(base, additional) {
  return Object.entries(additional).reduce((acc, [key, value]) => {
    if (value && typeof value === "object") {
      acc[key] = acc[key] ? { ...acc[key], ...value } : value;
    } else {
      acc[key] = value;
    }
    return acc;
  }, { ...base });
}
__name(mergeCapabilities, "mergeCapabilities");

// node_modules/@modelcontextprotocol/sdk/dist/esm/server/index.js
var import_ajv = __toESM(require_ajv(), 1);
var Server = class extends Protocol {
  /**
   * Initializes this server with the given name and version information.
   */
  constructor(_serverInfo, options) {
    var _a;
    super(options);
    this._serverInfo = _serverInfo;
    this._capabilities = (_a = options === null || options === void 0 ? void 0 : options.capabilities) !== null && _a !== void 0 ? _a : {};
    this._instructions = options === null || options === void 0 ? void 0 : options.instructions;
    this.setRequestHandler(InitializeRequestSchema, (request) => this._oninitialize(request));
    this.setNotificationHandler(InitializedNotificationSchema, () => {
      var _a2;
      return (_a2 = this.oninitialized) === null || _a2 === void 0 ? void 0 : _a2.call(this);
    });
  }
  /**
   * Registers new capabilities. This can only be called before connecting to a transport.
   *
   * The new capabilities will be merged with any existing capabilities previously given (e.g., at initialization).
   */
  registerCapabilities(capabilities) {
    if (this.transport) {
      throw new Error("Cannot register capabilities after connecting to transport");
    }
    this._capabilities = mergeCapabilities(this._capabilities, capabilities);
  }
  assertCapabilityForMethod(method) {
    var _a, _b, _c;
    switch (method) {
      case "sampling/createMessage":
        if (!((_a = this._clientCapabilities) === null || _a === void 0 ? void 0 : _a.sampling)) {
          throw new Error(`Client does not support sampling (required for ${method})`);
        }
        break;
      case "elicitation/create":
        if (!((_b = this._clientCapabilities) === null || _b === void 0 ? void 0 : _b.elicitation)) {
          throw new Error(`Client does not support elicitation (required for ${method})`);
        }
        break;
      case "roots/list":
        if (!((_c = this._clientCapabilities) === null || _c === void 0 ? void 0 : _c.roots)) {
          throw new Error(`Client does not support listing roots (required for ${method})`);
        }
        break;
      case "ping":
        break;
    }
  }
  assertNotificationCapability(method) {
    switch (method) {
      case "notifications/message":
        if (!this._capabilities.logging) {
          throw new Error(`Server does not support logging (required for ${method})`);
        }
        break;
      case "notifications/resources/updated":
      case "notifications/resources/list_changed":
        if (!this._capabilities.resources) {
          throw new Error(`Server does not support notifying about resources (required for ${method})`);
        }
        break;
      case "notifications/tools/list_changed":
        if (!this._capabilities.tools) {
          throw new Error(`Server does not support notifying of tool list changes (required for ${method})`);
        }
        break;
      case "notifications/prompts/list_changed":
        if (!this._capabilities.prompts) {
          throw new Error(`Server does not support notifying of prompt list changes (required for ${method})`);
        }
        break;
      case "notifications/cancelled":
        break;
      case "notifications/progress":
        break;
    }
  }
  assertRequestHandlerCapability(method) {
    switch (method) {
      case "sampling/createMessage":
        if (!this._capabilities.sampling) {
          throw new Error(`Server does not support sampling (required for ${method})`);
        }
        break;
      case "logging/setLevel":
        if (!this._capabilities.logging) {
          throw new Error(`Server does not support logging (required for ${method})`);
        }
        break;
      case "prompts/get":
      case "prompts/list":
        if (!this._capabilities.prompts) {
          throw new Error(`Server does not support prompts (required for ${method})`);
        }
        break;
      case "resources/list":
      case "resources/templates/list":
      case "resources/read":
        if (!this._capabilities.resources) {
          throw new Error(`Server does not support resources (required for ${method})`);
        }
        break;
      case "tools/call":
      case "tools/list":
        if (!this._capabilities.tools) {
          throw new Error(`Server does not support tools (required for ${method})`);
        }
        break;
      case "ping":
      case "initialize":
        break;
    }
  }
  async _oninitialize(request) {
    const requestedVersion = request.params.protocolVersion;
    this._clientCapabilities = request.params.capabilities;
    this._clientVersion = request.params.clientInfo;
    const protocolVersion = SUPPORTED_PROTOCOL_VERSIONS.includes(requestedVersion) ? requestedVersion : LATEST_PROTOCOL_VERSION;
    return {
      protocolVersion,
      capabilities: this.getCapabilities(),
      serverInfo: this._serverInfo,
      ...this._instructions && { instructions: this._instructions }
    };
  }
  /**
   * After initialization has completed, this will be populated with the client's reported capabilities.
   */
  getClientCapabilities() {
    return this._clientCapabilities;
  }
  /**
   * After initialization has completed, this will be populated with information about the client's name and version.
   */
  getClientVersion() {
    return this._clientVersion;
  }
  getCapabilities() {
    return this._capabilities;
  }
  async ping() {
    return this.request({ method: "ping" }, EmptyResultSchema);
  }
  async createMessage(params, options) {
    return this.request({ method: "sampling/createMessage", params }, CreateMessageResultSchema, options);
  }
  async elicitInput(params, options) {
    const result = await this.request({ method: "elicitation/create", params }, ElicitResultSchema, options);
    if (result.action === "accept" && result.content) {
      try {
        const ajv = new import_ajv.default();
        const validate = ajv.compile(params.requestedSchema);
        const isValid2 = validate(result.content);
        if (!isValid2) {
          throw new McpError(ErrorCode.InvalidParams, `Elicitation response content does not match requested schema: ${ajv.errorsText(validate.errors)}`);
        }
      } catch (error) {
        if (error instanceof McpError) {
          throw error;
        }
        throw new McpError(ErrorCode.InternalError, `Error validating elicitation response: ${error}`);
      }
    }
    return result;
  }
  async listRoots(params, options) {
    return this.request({ method: "roots/list", params }, ListRootsResultSchema, options);
  }
  async sendLoggingMessage(params) {
    return this.notification({ method: "notifications/message", params });
  }
  async sendResourceUpdated(params) {
    return this.notification({
      method: "notifications/resources/updated",
      params
    });
  }
  async sendResourceListChanged() {
    return this.notification({
      method: "notifications/resources/list_changed"
    });
  }
  async sendToolListChanged() {
    return this.notification({ method: "notifications/tools/list_changed" });
  }
  async sendPromptListChanged() {
    return this.notification({ method: "notifications/prompts/list_changed" });
  }
};
__name(Server, "Server");

// node_modules/zod-to-json-schema/dist/esm/Options.js
var ignoreOverride = Symbol("Let zodToJsonSchema decide on which parser to use");
var defaultOptions = {
  name: void 0,
  $refStrategy: "root",
  basePath: ["#"],
  effectStrategy: "input",
  pipeStrategy: "all",
  dateStrategy: "format:date-time",
  mapStrategy: "entries",
  removeAdditionalStrategy: "passthrough",
  allowedAdditionalProperties: true,
  rejectedAdditionalProperties: false,
  definitionPath: "definitions",
  target: "jsonSchema7",
  strictUnions: false,
  definitions: {},
  errorMessages: false,
  markdownDescription: false,
  patternStrategy: "escape",
  applyRegexFlags: false,
  emailStrategy: "format:email",
  base64Strategy: "contentEncoding:base64",
  nameStrategy: "ref",
  openAiAnyTypeName: "OpenAiAnyType"
};
var getDefaultOptions = /* @__PURE__ */ __name((options) => typeof options === "string" ? {
  ...defaultOptions,
  name: options
} : {
  ...defaultOptions,
  ...options
}, "getDefaultOptions");

// node_modules/zod-to-json-schema/dist/esm/Refs.js
var getRefs = /* @__PURE__ */ __name((options) => {
  const _options = getDefaultOptions(options);
  const currentPath = _options.name !== void 0 ? [..._options.basePath, _options.definitionPath, _options.name] : _options.basePath;
  return {
    ..._options,
    flags: { hasReferencedOpenAiAnyType: false },
    currentPath,
    propertyPath: void 0,
    seen: new Map(Object.entries(_options.definitions).map(([name, def]) => [
      def._def,
      {
        def: def._def,
        path: [..._options.basePath, _options.definitionPath, name],
        // Resolution of references will be forced even though seen, so it's ok that the schema is undefined here for now.
        jsonSchema: void 0
      }
    ]))
  };
}, "getRefs");

// node_modules/zod-to-json-schema/dist/esm/errorMessages.js
function addErrorMessage(res, key, errorMessage, refs) {
  if (!refs?.errorMessages)
    return;
  if (errorMessage) {
    res.errorMessage = {
      ...res.errorMessage,
      [key]: errorMessage
    };
  }
}
__name(addErrorMessage, "addErrorMessage");
function setResponseValueAndErrors(res, key, value, errorMessage, refs) {
  res[key] = value;
  addErrorMessage(res, key, errorMessage, refs);
}
__name(setResponseValueAndErrors, "setResponseValueAndErrors");

// node_modules/zod-to-json-schema/dist/esm/getRelativePath.js
var getRelativePath = /* @__PURE__ */ __name((pathA, pathB) => {
  let i = 0;
  for (; i < pathA.length && i < pathB.length; i++) {
    if (pathA[i] !== pathB[i])
      break;
  }
  return [(pathA.length - i).toString(), ...pathB.slice(i)].join("/");
}, "getRelativePath");

// node_modules/zod-to-json-schema/dist/esm/parsers/any.js
function parseAnyDef(refs) {
  if (refs.target !== "openAi") {
    return {};
  }
  const anyDefinitionPath = [
    ...refs.basePath,
    refs.definitionPath,
    refs.openAiAnyTypeName
  ];
  refs.flags.hasReferencedOpenAiAnyType = true;
  return {
    $ref: refs.$refStrategy === "relative" ? getRelativePath(anyDefinitionPath, refs.currentPath) : anyDefinitionPath.join("/")
  };
}
__name(parseAnyDef, "parseAnyDef");

// node_modules/zod-to-json-schema/dist/esm/parsers/array.js
function parseArrayDef(def, refs) {
  const res = {
    type: "array"
  };
  if (def.type?._def && def.type?._def?.typeName !== ZodFirstPartyTypeKind.ZodAny) {
    res.items = parseDef(def.type._def, {
      ...refs,
      currentPath: [...refs.currentPath, "items"]
    });
  }
  if (def.minLength) {
    setResponseValueAndErrors(res, "minItems", def.minLength.value, def.minLength.message, refs);
  }
  if (def.maxLength) {
    setResponseValueAndErrors(res, "maxItems", def.maxLength.value, def.maxLength.message, refs);
  }
  if (def.exactLength) {
    setResponseValueAndErrors(res, "minItems", def.exactLength.value, def.exactLength.message, refs);
    setResponseValueAndErrors(res, "maxItems", def.exactLength.value, def.exactLength.message, refs);
  }
  return res;
}
__name(parseArrayDef, "parseArrayDef");

// node_modules/zod-to-json-schema/dist/esm/parsers/bigint.js
function parseBigintDef(def, refs) {
  const res = {
    type: "integer",
    format: "int64"
  };
  if (!def.checks)
    return res;
  for (const check of def.checks) {
    switch (check.kind) {
      case "min":
        if (refs.target === "jsonSchema7") {
          if (check.inclusive) {
            setResponseValueAndErrors(res, "minimum", check.value, check.message, refs);
          } else {
            setResponseValueAndErrors(res, "exclusiveMinimum", check.value, check.message, refs);
          }
        } else {
          if (!check.inclusive) {
            res.exclusiveMinimum = true;
          }
          setResponseValueAndErrors(res, "minimum", check.value, check.message, refs);
        }
        break;
      case "max":
        if (refs.target === "jsonSchema7") {
          if (check.inclusive) {
            setResponseValueAndErrors(res, "maximum", check.value, check.message, refs);
          } else {
            setResponseValueAndErrors(res, "exclusiveMaximum", check.value, check.message, refs);
          }
        } else {
          if (!check.inclusive) {
            res.exclusiveMaximum = true;
          }
          setResponseValueAndErrors(res, "maximum", check.value, check.message, refs);
        }
        break;
      case "multipleOf":
        setResponseValueAndErrors(res, "multipleOf", check.value, check.message, refs);
        break;
    }
  }
  return res;
}
__name(parseBigintDef, "parseBigintDef");

// node_modules/zod-to-json-schema/dist/esm/parsers/boolean.js
function parseBooleanDef() {
  return {
    type: "boolean"
  };
}
__name(parseBooleanDef, "parseBooleanDef");

// node_modules/zod-to-json-schema/dist/esm/parsers/branded.js
function parseBrandedDef(_def, refs) {
  return parseDef(_def.type._def, refs);
}
__name(parseBrandedDef, "parseBrandedDef");

// node_modules/zod-to-json-schema/dist/esm/parsers/catch.js
var parseCatchDef = /* @__PURE__ */ __name((def, refs) => {
  return parseDef(def.innerType._def, refs);
}, "parseCatchDef");

// node_modules/zod-to-json-schema/dist/esm/parsers/date.js
function parseDateDef(def, refs, overrideDateStrategy) {
  const strategy = overrideDateStrategy ?? refs.dateStrategy;
  if (Array.isArray(strategy)) {
    return {
      anyOf: strategy.map((item, i) => parseDateDef(def, refs, item))
    };
  }
  switch (strategy) {
    case "string":
    case "format:date-time":
      return {
        type: "string",
        format: "date-time"
      };
    case "format:date":
      return {
        type: "string",
        format: "date"
      };
    case "integer":
      return integerDateParser(def, refs);
  }
}
__name(parseDateDef, "parseDateDef");
var integerDateParser = /* @__PURE__ */ __name((def, refs) => {
  const res = {
    type: "integer",
    format: "unix-time"
  };
  if (refs.target === "openApi3") {
    return res;
  }
  for (const check of def.checks) {
    switch (check.kind) {
      case "min":
        setResponseValueAndErrors(
          res,
          "minimum",
          check.value,
          // This is in milliseconds
          check.message,
          refs
        );
        break;
      case "max":
        setResponseValueAndErrors(
          res,
          "maximum",
          check.value,
          // This is in milliseconds
          check.message,
          refs
        );
        break;
    }
  }
  return res;
}, "integerDateParser");

// node_modules/zod-to-json-schema/dist/esm/parsers/default.js
function parseDefaultDef(_def, refs) {
  return {
    ...parseDef(_def.innerType._def, refs),
    default: _def.defaultValue()
  };
}
__name(parseDefaultDef, "parseDefaultDef");

// node_modules/zod-to-json-schema/dist/esm/parsers/effects.js
function parseEffectsDef(_def, refs) {
  return refs.effectStrategy === "input" ? parseDef(_def.schema._def, refs) : parseAnyDef(refs);
}
__name(parseEffectsDef, "parseEffectsDef");

// node_modules/zod-to-json-schema/dist/esm/parsers/enum.js
function parseEnumDef(def) {
  return {
    type: "string",
    enum: Array.from(def.values)
  };
}
__name(parseEnumDef, "parseEnumDef");

// node_modules/zod-to-json-schema/dist/esm/parsers/intersection.js
var isJsonSchema7AllOfType = /* @__PURE__ */ __name((type) => {
  if ("type" in type && type.type === "string")
    return false;
  return "allOf" in type;
}, "isJsonSchema7AllOfType");
function parseIntersectionDef(def, refs) {
  const allOf = [
    parseDef(def.left._def, {
      ...refs,
      currentPath: [...refs.currentPath, "allOf", "0"]
    }),
    parseDef(def.right._def, {
      ...refs,
      currentPath: [...refs.currentPath, "allOf", "1"]
    })
  ].filter((x) => !!x);
  let unevaluatedProperties = refs.target === "jsonSchema2019-09" ? { unevaluatedProperties: false } : void 0;
  const mergedAllOf = [];
  allOf.forEach((schema) => {
    if (isJsonSchema7AllOfType(schema)) {
      mergedAllOf.push(...schema.allOf);
      if (schema.unevaluatedProperties === void 0) {
        unevaluatedProperties = void 0;
      }
    } else {
      let nestedSchema = schema;
      if ("additionalProperties" in schema && schema.additionalProperties === false) {
        const { additionalProperties, ...rest } = schema;
        nestedSchema = rest;
      } else {
        unevaluatedProperties = void 0;
      }
      mergedAllOf.push(nestedSchema);
    }
  });
  return mergedAllOf.length ? {
    allOf: mergedAllOf,
    ...unevaluatedProperties
  } : void 0;
}
__name(parseIntersectionDef, "parseIntersectionDef");

// node_modules/zod-to-json-schema/dist/esm/parsers/literal.js
function parseLiteralDef(def, refs) {
  const parsedType = typeof def.value;
  if (parsedType !== "bigint" && parsedType !== "number" && parsedType !== "boolean" && parsedType !== "string") {
    return {
      type: Array.isArray(def.value) ? "array" : "object"
    };
  }
  if (refs.target === "openApi3") {
    return {
      type: parsedType === "bigint" ? "integer" : parsedType,
      enum: [def.value]
    };
  }
  return {
    type: parsedType === "bigint" ? "integer" : parsedType,
    const: def.value
  };
}
__name(parseLiteralDef, "parseLiteralDef");

// node_modules/zod-to-json-schema/dist/esm/parsers/string.js
var emojiRegex2 = void 0;
var zodPatterns = {
  /**
   * `c` was changed to `[cC]` to replicate /i flag
   */
  cuid: /^[cC][^\s-]{8,}$/,
  cuid2: /^[0-9a-z]+$/,
  ulid: /^[0-9A-HJKMNP-TV-Z]{26}$/,
  /**
   * `a-z` was added to replicate /i flag
   */
  email: /^(?!\.)(?!.*\.\.)([a-zA-Z0-9_'+\-\.]*)[a-zA-Z0-9_+-]@([a-zA-Z0-9][a-zA-Z0-9\-]*\.)+[a-zA-Z]{2,}$/,
  /**
   * Constructed a valid Unicode RegExp
   *
   * Lazily instantiate since this type of regex isn't supported
   * in all envs (e.g. React Native).
   *
   * See:
   * https://github.com/colinhacks/zod/issues/2433
   * Fix in Zod:
   * https://github.com/colinhacks/zod/commit/9340fd51e48576a75adc919bff65dbc4a5d4c99b
   */
  emoji: () => {
    if (emojiRegex2 === void 0) {
      emojiRegex2 = RegExp("^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$", "u");
    }
    return emojiRegex2;
  },
  /**
   * Unused
   */
  uuid: /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/,
  /**
   * Unused
   */
  ipv4: /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,
  ipv4Cidr: /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/,
  /**
   * Unused
   */
  ipv6: /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/,
  ipv6Cidr: /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,
  base64: /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,
  base64url: /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/,
  nanoid: /^[a-zA-Z0-9_-]{21}$/,
  jwt: /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/
};
function parseStringDef(def, refs) {
  const res = {
    type: "string"
  };
  if (def.checks) {
    for (const check of def.checks) {
      switch (check.kind) {
        case "min":
          setResponseValueAndErrors(res, "minLength", typeof res.minLength === "number" ? Math.max(res.minLength, check.value) : check.value, check.message, refs);
          break;
        case "max":
          setResponseValueAndErrors(res, "maxLength", typeof res.maxLength === "number" ? Math.min(res.maxLength, check.value) : check.value, check.message, refs);
          break;
        case "email":
          switch (refs.emailStrategy) {
            case "format:email":
              addFormat(res, "email", check.message, refs);
              break;
            case "format:idn-email":
              addFormat(res, "idn-email", check.message, refs);
              break;
            case "pattern:zod":
              addPattern(res, zodPatterns.email, check.message, refs);
              break;
          }
          break;
        case "url":
          addFormat(res, "uri", check.message, refs);
          break;
        case "uuid":
          addFormat(res, "uuid", check.message, refs);
          break;
        case "regex":
          addPattern(res, check.regex, check.message, refs);
          break;
        case "cuid":
          addPattern(res, zodPatterns.cuid, check.message, refs);
          break;
        case "cuid2":
          addPattern(res, zodPatterns.cuid2, check.message, refs);
          break;
        case "startsWith":
          addPattern(res, RegExp(`^${escapeLiteralCheckValue(check.value, refs)}`), check.message, refs);
          break;
        case "endsWith":
          addPattern(res, RegExp(`${escapeLiteralCheckValue(check.value, refs)}$`), check.message, refs);
          break;
        case "datetime":
          addFormat(res, "date-time", check.message, refs);
          break;
        case "date":
          addFormat(res, "date", check.message, refs);
          break;
        case "time":
          addFormat(res, "time", check.message, refs);
          break;
        case "duration":
          addFormat(res, "duration", check.message, refs);
          break;
        case "length":
          setResponseValueAndErrors(res, "minLength", typeof res.minLength === "number" ? Math.max(res.minLength, check.value) : check.value, check.message, refs);
          setResponseValueAndErrors(res, "maxLength", typeof res.maxLength === "number" ? Math.min(res.maxLength, check.value) : check.value, check.message, refs);
          break;
        case "includes": {
          addPattern(res, RegExp(escapeLiteralCheckValue(check.value, refs)), check.message, refs);
          break;
        }
        case "ip": {
          if (check.version !== "v6") {
            addFormat(res, "ipv4", check.message, refs);
          }
          if (check.version !== "v4") {
            addFormat(res, "ipv6", check.message, refs);
          }
          break;
        }
        case "base64url":
          addPattern(res, zodPatterns.base64url, check.message, refs);
          break;
        case "jwt":
          addPattern(res, zodPatterns.jwt, check.message, refs);
          break;
        case "cidr": {
          if (check.version !== "v6") {
            addPattern(res, zodPatterns.ipv4Cidr, check.message, refs);
          }
          if (check.version !== "v4") {
            addPattern(res, zodPatterns.ipv6Cidr, check.message, refs);
          }
          break;
        }
        case "emoji":
          addPattern(res, zodPatterns.emoji(), check.message, refs);
          break;
        case "ulid": {
          addPattern(res, zodPatterns.ulid, check.message, refs);
          break;
        }
        case "base64": {
          switch (refs.base64Strategy) {
            case "format:binary": {
              addFormat(res, "binary", check.message, refs);
              break;
            }
            case "contentEncoding:base64": {
              setResponseValueAndErrors(res, "contentEncoding", "base64", check.message, refs);
              break;
            }
            case "pattern:zod": {
              addPattern(res, zodPatterns.base64, check.message, refs);
              break;
            }
          }
          break;
        }
        case "nanoid": {
          addPattern(res, zodPatterns.nanoid, check.message, refs);
        }
        case "toLowerCase":
        case "toUpperCase":
        case "trim":
          break;
        default:
          ((_) => {
          })(check);
      }
    }
  }
  return res;
}
__name(parseStringDef, "parseStringDef");
function escapeLiteralCheckValue(literal, refs) {
  return refs.patternStrategy === "escape" ? escapeNonAlphaNumeric(literal) : literal;
}
__name(escapeLiteralCheckValue, "escapeLiteralCheckValue");
var ALPHA_NUMERIC = new Set("ABCDEFGHIJKLMNOPQRSTUVXYZabcdefghijklmnopqrstuvxyz0123456789");
function escapeNonAlphaNumeric(source) {
  let result = "";
  for (let i = 0; i < source.length; i++) {
    if (!ALPHA_NUMERIC.has(source[i])) {
      result += "\\";
    }
    result += source[i];
  }
  return result;
}
__name(escapeNonAlphaNumeric, "escapeNonAlphaNumeric");
function addFormat(schema, value, message, refs) {
  if (schema.format || schema.anyOf?.some((x) => x.format)) {
    if (!schema.anyOf) {
      schema.anyOf = [];
    }
    if (schema.format) {
      schema.anyOf.push({
        format: schema.format,
        ...schema.errorMessage && refs.errorMessages && {
          errorMessage: { format: schema.errorMessage.format }
        }
      });
      delete schema.format;
      if (schema.errorMessage) {
        delete schema.errorMessage.format;
        if (Object.keys(schema.errorMessage).length === 0) {
          delete schema.errorMessage;
        }
      }
    }
    schema.anyOf.push({
      format: value,
      ...message && refs.errorMessages && { errorMessage: { format: message } }
    });
  } else {
    setResponseValueAndErrors(schema, "format", value, message, refs);
  }
}
__name(addFormat, "addFormat");
function addPattern(schema, regex, message, refs) {
  if (schema.pattern || schema.allOf?.some((x) => x.pattern)) {
    if (!schema.allOf) {
      schema.allOf = [];
    }
    if (schema.pattern) {
      schema.allOf.push({
        pattern: schema.pattern,
        ...schema.errorMessage && refs.errorMessages && {
          errorMessage: { pattern: schema.errorMessage.pattern }
        }
      });
      delete schema.pattern;
      if (schema.errorMessage) {
        delete schema.errorMessage.pattern;
        if (Object.keys(schema.errorMessage).length === 0) {
          delete schema.errorMessage;
        }
      }
    }
    schema.allOf.push({
      pattern: stringifyRegExpWithFlags(regex, refs),
      ...message && refs.errorMessages && { errorMessage: { pattern: message } }
    });
  } else {
    setResponseValueAndErrors(schema, "pattern", stringifyRegExpWithFlags(regex, refs), message, refs);
  }
}
__name(addPattern, "addPattern");
function stringifyRegExpWithFlags(regex, refs) {
  if (!refs.applyRegexFlags || !regex.flags) {
    return regex.source;
  }
  const flags = {
    i: regex.flags.includes("i"),
    m: regex.flags.includes("m"),
    s: regex.flags.includes("s")
    // `.` matches newlines
  };
  const source = flags.i ? regex.source.toLowerCase() : regex.source;
  let pattern = "";
  let isEscaped = false;
  let inCharGroup = false;
  let inCharRange = false;
  for (let i = 0; i < source.length; i++) {
    if (isEscaped) {
      pattern += source[i];
      isEscaped = false;
      continue;
    }
    if (flags.i) {
      if (inCharGroup) {
        if (source[i].match(/[a-z]/)) {
          if (inCharRange) {
            pattern += source[i];
            pattern += `${source[i - 2]}-${source[i]}`.toUpperCase();
            inCharRange = false;
          } else if (source[i + 1] === "-" && source[i + 2]?.match(/[a-z]/)) {
            pattern += source[i];
            inCharRange = true;
          } else {
            pattern += `${source[i]}${source[i].toUpperCase()}`;
          }
          continue;
        }
      } else if (source[i].match(/[a-z]/)) {
        pattern += `[${source[i]}${source[i].toUpperCase()}]`;
        continue;
      }
    }
    if (flags.m) {
      if (source[i] === "^") {
        pattern += `(^|(?<=[\r
]))`;
        continue;
      } else if (source[i] === "$") {
        pattern += `($|(?=[\r
]))`;
        continue;
      }
    }
    if (flags.s && source[i] === ".") {
      pattern += inCharGroup ? `${source[i]}\r
` : `[${source[i]}\r
]`;
      continue;
    }
    pattern += source[i];
    if (source[i] === "\\") {
      isEscaped = true;
    } else if (inCharGroup && source[i] === "]") {
      inCharGroup = false;
    } else if (!inCharGroup && source[i] === "[") {
      inCharGroup = true;
    }
  }
  try {
    new RegExp(pattern);
  } catch {
    console.warn(`Could not convert regex pattern at ${refs.currentPath.join("/")} to a flag-independent form! Falling back to the flag-ignorant source`);
    return regex.source;
  }
  return pattern;
}
__name(stringifyRegExpWithFlags, "stringifyRegExpWithFlags");

// node_modules/zod-to-json-schema/dist/esm/parsers/record.js
function parseRecordDef(def, refs) {
  if (refs.target === "openAi") {
    console.warn("Warning: OpenAI may not support records in schemas! Try an array of key-value pairs instead.");
  }
  if (refs.target === "openApi3" && def.keyType?._def.typeName === ZodFirstPartyTypeKind.ZodEnum) {
    return {
      type: "object",
      required: def.keyType._def.values,
      properties: def.keyType._def.values.reduce((acc, key) => ({
        ...acc,
        [key]: parseDef(def.valueType._def, {
          ...refs,
          currentPath: [...refs.currentPath, "properties", key]
        }) ?? parseAnyDef(refs)
      }), {}),
      additionalProperties: refs.rejectedAdditionalProperties
    };
  }
  const schema = {
    type: "object",
    additionalProperties: parseDef(def.valueType._def, {
      ...refs,
      currentPath: [...refs.currentPath, "additionalProperties"]
    }) ?? refs.allowedAdditionalProperties
  };
  if (refs.target === "openApi3") {
    return schema;
  }
  if (def.keyType?._def.typeName === ZodFirstPartyTypeKind.ZodString && def.keyType._def.checks?.length) {
    const { type, ...keyType } = parseStringDef(def.keyType._def, refs);
    return {
      ...schema,
      propertyNames: keyType
    };
  } else if (def.keyType?._def.typeName === ZodFirstPartyTypeKind.ZodEnum) {
    return {
      ...schema,
      propertyNames: {
        enum: def.keyType._def.values
      }
    };
  } else if (def.keyType?._def.typeName === ZodFirstPartyTypeKind.ZodBranded && def.keyType._def.type._def.typeName === ZodFirstPartyTypeKind.ZodString && def.keyType._def.type._def.checks?.length) {
    const { type, ...keyType } = parseBrandedDef(def.keyType._def, refs);
    return {
      ...schema,
      propertyNames: keyType
    };
  }
  return schema;
}
__name(parseRecordDef, "parseRecordDef");

// node_modules/zod-to-json-schema/dist/esm/parsers/map.js
function parseMapDef(def, refs) {
  if (refs.mapStrategy === "record") {
    return parseRecordDef(def, refs);
  }
  const keys = parseDef(def.keyType._def, {
    ...refs,
    currentPath: [...refs.currentPath, "items", "items", "0"]
  }) || parseAnyDef(refs);
  const values = parseDef(def.valueType._def, {
    ...refs,
    currentPath: [...refs.currentPath, "items", "items", "1"]
  }) || parseAnyDef(refs);
  return {
    type: "array",
    maxItems: 125,
    items: {
      type: "array",
      items: [keys, values],
      minItems: 2,
      maxItems: 2
    }
  };
}
__name(parseMapDef, "parseMapDef");

// node_modules/zod-to-json-schema/dist/esm/parsers/nativeEnum.js
function parseNativeEnumDef(def) {
  const object = def.values;
  const actualKeys = Object.keys(def.values).filter((key) => {
    return typeof object[object[key]] !== "number";
  });
  const actualValues = actualKeys.map((key) => object[key]);
  const parsedTypes = Array.from(new Set(actualValues.map((values) => typeof values)));
  return {
    type: parsedTypes.length === 1 ? parsedTypes[0] === "string" ? "string" : "number" : ["string", "number"],
    enum: actualValues
  };
}
__name(parseNativeEnumDef, "parseNativeEnumDef");

// node_modules/zod-to-json-schema/dist/esm/parsers/never.js
function parseNeverDef(refs) {
  return refs.target === "openAi" ? void 0 : {
    not: parseAnyDef({
      ...refs,
      currentPath: [...refs.currentPath, "not"]
    })
  };
}
__name(parseNeverDef, "parseNeverDef");

// node_modules/zod-to-json-schema/dist/esm/parsers/null.js
function parseNullDef(refs) {
  return refs.target === "openApi3" ? {
    enum: ["null"],
    nullable: true
  } : {
    type: "null"
  };
}
__name(parseNullDef, "parseNullDef");

// node_modules/zod-to-json-schema/dist/esm/parsers/union.js
var primitiveMappings = {
  ZodString: "string",
  ZodNumber: "number",
  ZodBigInt: "integer",
  ZodBoolean: "boolean",
  ZodNull: "null"
};
function parseUnionDef(def, refs) {
  if (refs.target === "openApi3")
    return asAnyOf(def, refs);
  const options = def.options instanceof Map ? Array.from(def.options.values()) : def.options;
  if (options.every((x) => x._def.typeName in primitiveMappings && (!x._def.checks || !x._def.checks.length))) {
    const types = options.reduce((types2, x) => {
      const type = primitiveMappings[x._def.typeName];
      return type && !types2.includes(type) ? [...types2, type] : types2;
    }, []);
    return {
      type: types.length > 1 ? types : types[0]
    };
  } else if (options.every((x) => x._def.typeName === "ZodLiteral" && !x.description)) {
    const types = options.reduce((acc, x) => {
      const type = typeof x._def.value;
      switch (type) {
        case "string":
        case "number":
        case "boolean":
          return [...acc, type];
        case "bigint":
          return [...acc, "integer"];
        case "object":
          if (x._def.value === null)
            return [...acc, "null"];
        case "symbol":
        case "undefined":
        case "function":
        default:
          return acc;
      }
    }, []);
    if (types.length === options.length) {
      const uniqueTypes = types.filter((x, i, a) => a.indexOf(x) === i);
      return {
        type: uniqueTypes.length > 1 ? uniqueTypes : uniqueTypes[0],
        enum: options.reduce((acc, x) => {
          return acc.includes(x._def.value) ? acc : [...acc, x._def.value];
        }, [])
      };
    }
  } else if (options.every((x) => x._def.typeName === "ZodEnum")) {
    return {
      type: "string",
      enum: options.reduce((acc, x) => [
        ...acc,
        ...x._def.values.filter((x2) => !acc.includes(x2))
      ], [])
    };
  }
  return asAnyOf(def, refs);
}
__name(parseUnionDef, "parseUnionDef");
var asAnyOf = /* @__PURE__ */ __name((def, refs) => {
  const anyOf = (def.options instanceof Map ? Array.from(def.options.values()) : def.options).map((x, i) => parseDef(x._def, {
    ...refs,
    currentPath: [...refs.currentPath, "anyOf", `${i}`]
  })).filter((x) => !!x && (!refs.strictUnions || typeof x === "object" && Object.keys(x).length > 0));
  return anyOf.length ? { anyOf } : void 0;
}, "asAnyOf");

// node_modules/zod-to-json-schema/dist/esm/parsers/nullable.js
function parseNullableDef(def, refs) {
  if (["ZodString", "ZodNumber", "ZodBigInt", "ZodBoolean", "ZodNull"].includes(def.innerType._def.typeName) && (!def.innerType._def.checks || !def.innerType._def.checks.length)) {
    if (refs.target === "openApi3") {
      return {
        type: primitiveMappings[def.innerType._def.typeName],
        nullable: true
      };
    }
    return {
      type: [
        primitiveMappings[def.innerType._def.typeName],
        "null"
      ]
    };
  }
  if (refs.target === "openApi3") {
    const base2 = parseDef(def.innerType._def, {
      ...refs,
      currentPath: [...refs.currentPath]
    });
    if (base2 && "$ref" in base2)
      return { allOf: [base2], nullable: true };
    return base2 && { ...base2, nullable: true };
  }
  const base = parseDef(def.innerType._def, {
    ...refs,
    currentPath: [...refs.currentPath, "anyOf", "0"]
  });
  return base && { anyOf: [base, { type: "null" }] };
}
__name(parseNullableDef, "parseNullableDef");

// node_modules/zod-to-json-schema/dist/esm/parsers/number.js
function parseNumberDef(def, refs) {
  const res = {
    type: "number"
  };
  if (!def.checks)
    return res;
  for (const check of def.checks) {
    switch (check.kind) {
      case "int":
        res.type = "integer";
        addErrorMessage(res, "type", check.message, refs);
        break;
      case "min":
        if (refs.target === "jsonSchema7") {
          if (check.inclusive) {
            setResponseValueAndErrors(res, "minimum", check.value, check.message, refs);
          } else {
            setResponseValueAndErrors(res, "exclusiveMinimum", check.value, check.message, refs);
          }
        } else {
          if (!check.inclusive) {
            res.exclusiveMinimum = true;
          }
          setResponseValueAndErrors(res, "minimum", check.value, check.message, refs);
        }
        break;
      case "max":
        if (refs.target === "jsonSchema7") {
          if (check.inclusive) {
            setResponseValueAndErrors(res, "maximum", check.value, check.message, refs);
          } else {
            setResponseValueAndErrors(res, "exclusiveMaximum", check.value, check.message, refs);
          }
        } else {
          if (!check.inclusive) {
            res.exclusiveMaximum = true;
          }
          setResponseValueAndErrors(res, "maximum", check.value, check.message, refs);
        }
        break;
      case "multipleOf":
        setResponseValueAndErrors(res, "multipleOf", check.value, check.message, refs);
        break;
    }
  }
  return res;
}
__name(parseNumberDef, "parseNumberDef");

// node_modules/zod-to-json-schema/dist/esm/parsers/object.js
function parseObjectDef(def, refs) {
  const forceOptionalIntoNullable = refs.target === "openAi";
  const result = {
    type: "object",
    properties: {}
  };
  const required = [];
  const shape = def.shape();
  for (const propName in shape) {
    let propDef = shape[propName];
    if (propDef === void 0 || propDef._def === void 0) {
      continue;
    }
    let propOptional = safeIsOptional(propDef);
    if (propOptional && forceOptionalIntoNullable) {
      if (propDef._def.typeName === "ZodOptional") {
        propDef = propDef._def.innerType;
      }
      if (!propDef.isNullable()) {
        propDef = propDef.nullable();
      }
      propOptional = false;
    }
    const parsedDef = parseDef(propDef._def, {
      ...refs,
      currentPath: [...refs.currentPath, "properties", propName],
      propertyPath: [...refs.currentPath, "properties", propName]
    });
    if (parsedDef === void 0) {
      continue;
    }
    result.properties[propName] = parsedDef;
    if (!propOptional) {
      required.push(propName);
    }
  }
  if (required.length) {
    result.required = required;
  }
  const additionalProperties = decideAdditionalProperties(def, refs);
  if (additionalProperties !== void 0) {
    result.additionalProperties = additionalProperties;
  }
  return result;
}
__name(parseObjectDef, "parseObjectDef");
function decideAdditionalProperties(def, refs) {
  if (def.catchall._def.typeName !== "ZodNever") {
    return parseDef(def.catchall._def, {
      ...refs,
      currentPath: [...refs.currentPath, "additionalProperties"]
    });
  }
  switch (def.unknownKeys) {
    case "passthrough":
      return refs.allowedAdditionalProperties;
    case "strict":
      return refs.rejectedAdditionalProperties;
    case "strip":
      return refs.removeAdditionalStrategy === "strict" ? refs.allowedAdditionalProperties : refs.rejectedAdditionalProperties;
  }
}
__name(decideAdditionalProperties, "decideAdditionalProperties");
function safeIsOptional(schema) {
  try {
    return schema.isOptional();
  } catch {
    return true;
  }
}
__name(safeIsOptional, "safeIsOptional");

// node_modules/zod-to-json-schema/dist/esm/parsers/optional.js
var parseOptionalDef = /* @__PURE__ */ __name((def, refs) => {
  if (refs.currentPath.toString() === refs.propertyPath?.toString()) {
    return parseDef(def.innerType._def, refs);
  }
  const innerSchema = parseDef(def.innerType._def, {
    ...refs,
    currentPath: [...refs.currentPath, "anyOf", "1"]
  });
  return innerSchema ? {
    anyOf: [
      {
        not: parseAnyDef(refs)
      },
      innerSchema
    ]
  } : parseAnyDef(refs);
}, "parseOptionalDef");

// node_modules/zod-to-json-schema/dist/esm/parsers/pipeline.js
var parsePipelineDef = /* @__PURE__ */ __name((def, refs) => {
  if (refs.pipeStrategy === "input") {
    return parseDef(def.in._def, refs);
  } else if (refs.pipeStrategy === "output") {
    return parseDef(def.out._def, refs);
  }
  const a = parseDef(def.in._def, {
    ...refs,
    currentPath: [...refs.currentPath, "allOf", "0"]
  });
  const b = parseDef(def.out._def, {
    ...refs,
    currentPath: [...refs.currentPath, "allOf", a ? "1" : "0"]
  });
  return {
    allOf: [a, b].filter((x) => x !== void 0)
  };
}, "parsePipelineDef");

// node_modules/zod-to-json-schema/dist/esm/parsers/promise.js
function parsePromiseDef(def, refs) {
  return parseDef(def.type._def, refs);
}
__name(parsePromiseDef, "parsePromiseDef");

// node_modules/zod-to-json-schema/dist/esm/parsers/set.js
function parseSetDef(def, refs) {
  const items = parseDef(def.valueType._def, {
    ...refs,
    currentPath: [...refs.currentPath, "items"]
  });
  const schema = {
    type: "array",
    uniqueItems: true,
    items
  };
  if (def.minSize) {
    setResponseValueAndErrors(schema, "minItems", def.minSize.value, def.minSize.message, refs);
  }
  if (def.maxSize) {
    setResponseValueAndErrors(schema, "maxItems", def.maxSize.value, def.maxSize.message, refs);
  }
  return schema;
}
__name(parseSetDef, "parseSetDef");

// node_modules/zod-to-json-schema/dist/esm/parsers/tuple.js
function parseTupleDef(def, refs) {
  if (def.rest) {
    return {
      type: "array",
      minItems: def.items.length,
      items: def.items.map((x, i) => parseDef(x._def, {
        ...refs,
        currentPath: [...refs.currentPath, "items", `${i}`]
      })).reduce((acc, x) => x === void 0 ? acc : [...acc, x], []),
      additionalItems: parseDef(def.rest._def, {
        ...refs,
        currentPath: [...refs.currentPath, "additionalItems"]
      })
    };
  } else {
    return {
      type: "array",
      minItems: def.items.length,
      maxItems: def.items.length,
      items: def.items.map((x, i) => parseDef(x._def, {
        ...refs,
        currentPath: [...refs.currentPath, "items", `${i}`]
      })).reduce((acc, x) => x === void 0 ? acc : [...acc, x], [])
    };
  }
}
__name(parseTupleDef, "parseTupleDef");

// node_modules/zod-to-json-schema/dist/esm/parsers/undefined.js
function parseUndefinedDef(refs) {
  return {
    not: parseAnyDef(refs)
  };
}
__name(parseUndefinedDef, "parseUndefinedDef");

// node_modules/zod-to-json-schema/dist/esm/parsers/unknown.js
function parseUnknownDef(refs) {
  return parseAnyDef(refs);
}
__name(parseUnknownDef, "parseUnknownDef");

// node_modules/zod-to-json-schema/dist/esm/parsers/readonly.js
var parseReadonlyDef = /* @__PURE__ */ __name((def, refs) => {
  return parseDef(def.innerType._def, refs);
}, "parseReadonlyDef");

// node_modules/zod-to-json-schema/dist/esm/selectParser.js
var selectParser = /* @__PURE__ */ __name((def, typeName, refs) => {
  switch (typeName) {
    case ZodFirstPartyTypeKind.ZodString:
      return parseStringDef(def, refs);
    case ZodFirstPartyTypeKind.ZodNumber:
      return parseNumberDef(def, refs);
    case ZodFirstPartyTypeKind.ZodObject:
      return parseObjectDef(def, refs);
    case ZodFirstPartyTypeKind.ZodBigInt:
      return parseBigintDef(def, refs);
    case ZodFirstPartyTypeKind.ZodBoolean:
      return parseBooleanDef();
    case ZodFirstPartyTypeKind.ZodDate:
      return parseDateDef(def, refs);
    case ZodFirstPartyTypeKind.ZodUndefined:
      return parseUndefinedDef(refs);
    case ZodFirstPartyTypeKind.ZodNull:
      return parseNullDef(refs);
    case ZodFirstPartyTypeKind.ZodArray:
      return parseArrayDef(def, refs);
    case ZodFirstPartyTypeKind.ZodUnion:
    case ZodFirstPartyTypeKind.ZodDiscriminatedUnion:
      return parseUnionDef(def, refs);
    case ZodFirstPartyTypeKind.ZodIntersection:
      return parseIntersectionDef(def, refs);
    case ZodFirstPartyTypeKind.ZodTuple:
      return parseTupleDef(def, refs);
    case ZodFirstPartyTypeKind.ZodRecord:
      return parseRecordDef(def, refs);
    case ZodFirstPartyTypeKind.ZodLiteral:
      return parseLiteralDef(def, refs);
    case ZodFirstPartyTypeKind.ZodEnum:
      return parseEnumDef(def);
    case ZodFirstPartyTypeKind.ZodNativeEnum:
      return parseNativeEnumDef(def);
    case ZodFirstPartyTypeKind.ZodNullable:
      return parseNullableDef(def, refs);
    case ZodFirstPartyTypeKind.ZodOptional:
      return parseOptionalDef(def, refs);
    case ZodFirstPartyTypeKind.ZodMap:
      return parseMapDef(def, refs);
    case ZodFirstPartyTypeKind.ZodSet:
      return parseSetDef(def, refs);
    case ZodFirstPartyTypeKind.ZodLazy:
      return () => def.getter()._def;
    case ZodFirstPartyTypeKind.ZodPromise:
      return parsePromiseDef(def, refs);
    case ZodFirstPartyTypeKind.ZodNaN:
    case ZodFirstPartyTypeKind.ZodNever:
      return parseNeverDef(refs);
    case ZodFirstPartyTypeKind.ZodEffects:
      return parseEffectsDef(def, refs);
    case ZodFirstPartyTypeKind.ZodAny:
      return parseAnyDef(refs);
    case ZodFirstPartyTypeKind.ZodUnknown:
      return parseUnknownDef(refs);
    case ZodFirstPartyTypeKind.ZodDefault:
      return parseDefaultDef(def, refs);
    case ZodFirstPartyTypeKind.ZodBranded:
      return parseBrandedDef(def, refs);
    case ZodFirstPartyTypeKind.ZodReadonly:
      return parseReadonlyDef(def, refs);
    case ZodFirstPartyTypeKind.ZodCatch:
      return parseCatchDef(def, refs);
    case ZodFirstPartyTypeKind.ZodPipeline:
      return parsePipelineDef(def, refs);
    case ZodFirstPartyTypeKind.ZodFunction:
    case ZodFirstPartyTypeKind.ZodVoid:
    case ZodFirstPartyTypeKind.ZodSymbol:
      return void 0;
    default:
      return ((_) => void 0)(typeName);
  }
}, "selectParser");

// node_modules/zod-to-json-schema/dist/esm/parseDef.js
function parseDef(def, refs, forceResolution = false) {
  const seenItem = refs.seen.get(def);
  if (refs.override) {
    const overrideResult = refs.override?.(def, refs, seenItem, forceResolution);
    if (overrideResult !== ignoreOverride) {
      return overrideResult;
    }
  }
  if (seenItem && !forceResolution) {
    const seenSchema = get$ref(seenItem, refs);
    if (seenSchema !== void 0) {
      return seenSchema;
    }
  }
  const newItem = { def, path: refs.currentPath, jsonSchema: void 0 };
  refs.seen.set(def, newItem);
  const jsonSchemaOrGetter = selectParser(def, def.typeName, refs);
  const jsonSchema = typeof jsonSchemaOrGetter === "function" ? parseDef(jsonSchemaOrGetter(), refs) : jsonSchemaOrGetter;
  if (jsonSchema) {
    addMeta(def, refs, jsonSchema);
  }
  if (refs.postProcess) {
    const postProcessResult = refs.postProcess(jsonSchema, def, refs);
    newItem.jsonSchema = jsonSchema;
    return postProcessResult;
  }
  newItem.jsonSchema = jsonSchema;
  return jsonSchema;
}
__name(parseDef, "parseDef");
var get$ref = /* @__PURE__ */ __name((item, refs) => {
  switch (refs.$refStrategy) {
    case "root":
      return { $ref: item.path.join("/") };
    case "relative":
      return { $ref: getRelativePath(refs.currentPath, item.path) };
    case "none":
    case "seen": {
      if (item.path.length < refs.currentPath.length && item.path.every((value, index) => refs.currentPath[index] === value)) {
        console.warn(`Recursive reference detected at ${refs.currentPath.join("/")}! Defaulting to any`);
        return parseAnyDef(refs);
      }
      return refs.$refStrategy === "seen" ? parseAnyDef(refs) : void 0;
    }
  }
}, "get$ref");
var addMeta = /* @__PURE__ */ __name((def, refs, jsonSchema) => {
  if (def.description) {
    jsonSchema.description = def.description;
    if (refs.markdownDescription) {
      jsonSchema.markdownDescription = def.description;
    }
  }
  return jsonSchema;
}, "addMeta");

// node_modules/zod-to-json-schema/dist/esm/zodToJsonSchema.js
var zodToJsonSchema = /* @__PURE__ */ __name((schema, options) => {
  const refs = getRefs(options);
  let definitions = typeof options === "object" && options.definitions ? Object.entries(options.definitions).reduce((acc, [name2, schema2]) => ({
    ...acc,
    [name2]: parseDef(schema2._def, {
      ...refs,
      currentPath: [...refs.basePath, refs.definitionPath, name2]
    }, true) ?? parseAnyDef(refs)
  }), {}) : void 0;
  const name = typeof options === "string" ? options : options?.nameStrategy === "title" ? void 0 : options?.name;
  const main = parseDef(schema._def, name === void 0 ? refs : {
    ...refs,
    currentPath: [...refs.basePath, refs.definitionPath, name]
  }, false) ?? parseAnyDef(refs);
  const title = typeof options === "object" && options.name !== void 0 && options.nameStrategy === "title" ? options.name : void 0;
  if (title !== void 0) {
    main.title = title;
  }
  if (refs.flags.hasReferencedOpenAiAnyType) {
    if (!definitions) {
      definitions = {};
    }
    if (!definitions[refs.openAiAnyTypeName]) {
      definitions[refs.openAiAnyTypeName] = {
        // Skipping "object" as no properties can be defined and additionalProperties must be "false"
        type: ["string", "number", "integer", "boolean", "array", "null"],
        items: {
          $ref: refs.$refStrategy === "relative" ? "1" : [
            ...refs.basePath,
            refs.definitionPath,
            refs.openAiAnyTypeName
          ].join("/")
        }
      };
    }
  }
  const combined = name === void 0 ? definitions ? {
    ...main,
    [refs.definitionPath]: definitions
  } : main : {
    $ref: [
      ...refs.$refStrategy === "relative" ? [] : refs.basePath,
      refs.definitionPath,
      name
    ].join("/"),
    [refs.definitionPath]: {
      ...definitions,
      [name]: main
    }
  };
  if (refs.target === "jsonSchema7") {
    combined.$schema = "http://json-schema.org/draft-07/schema#";
  } else if (refs.target === "jsonSchema2019-09" || refs.target === "openAi") {
    combined.$schema = "https://json-schema.org/draft/2019-09/schema#";
  }
  if (refs.target === "openAi" && ("anyOf" in combined || "oneOf" in combined || "allOf" in combined || "type" in combined && Array.isArray(combined.type))) {
    console.warn("Warning: OpenAI may not support schemas with unions as roots! Try wrapping it in an object property.");
  }
  return combined;
}, "zodToJsonSchema");

// node_modules/@modelcontextprotocol/sdk/dist/esm/server/completable.js
var McpZodTypeKind;
(function(McpZodTypeKind2) {
  McpZodTypeKind2["Completable"] = "McpCompletable";
})(McpZodTypeKind || (McpZodTypeKind = {}));
var Completable = class extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    const data = ctx.data;
    return this._def.type._parse({
      data,
      path: ctx.path,
      parent: ctx
    });
  }
  unwrap() {
    return this._def.type;
  }
};
__name(Completable, "Completable");
Completable.create = (type, params) => {
  return new Completable({
    type,
    typeName: McpZodTypeKind.Completable,
    complete: params.complete,
    ...processCreateParams2(params)
  });
};
function processCreateParams2(params) {
  if (!params)
    return {};
  const { errorMap: errorMap2, invalid_type_error, required_error, description } = params;
  if (errorMap2 && (invalid_type_error || required_error)) {
    throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
  }
  if (errorMap2)
    return { errorMap: errorMap2, description };
  const customMap = /* @__PURE__ */ __name((iss, ctx) => {
    var _a, _b;
    const { message } = params;
    if (iss.code === "invalid_enum_value") {
      return { message: message !== null && message !== void 0 ? message : ctx.defaultError };
    }
    if (typeof ctx.data === "undefined") {
      return { message: (_a = message !== null && message !== void 0 ? message : required_error) !== null && _a !== void 0 ? _a : ctx.defaultError };
    }
    if (iss.code !== "invalid_type")
      return { message: ctx.defaultError };
    return { message: (_b = message !== null && message !== void 0 ? message : invalid_type_error) !== null && _b !== void 0 ? _b : ctx.defaultError };
  }, "customMap");
  return { errorMap: customMap, description };
}
__name(processCreateParams2, "processCreateParams");

// node_modules/@modelcontextprotocol/sdk/dist/esm/server/mcp.js
var McpServer = class {
  constructor(serverInfo, options) {
    this._registeredResources = {};
    this._registeredResourceTemplates = {};
    this._registeredTools = {};
    this._registeredPrompts = {};
    this._toolHandlersInitialized = false;
    this._completionHandlerInitialized = false;
    this._resourceHandlersInitialized = false;
    this._promptHandlersInitialized = false;
    this.server = new Server(serverInfo, options);
  }
  /**
   * Attaches to the given transport, starts it, and starts listening for messages.
   *
   * The `server` object assumes ownership of the Transport, replacing any callbacks that have already been set, and expects that it is the only user of the Transport instance going forward.
   */
  async connect(transport) {
    return await this.server.connect(transport);
  }
  /**
   * Closes the connection.
   */
  async close() {
    await this.server.close();
  }
  setToolRequestHandlers() {
    if (this._toolHandlersInitialized) {
      return;
    }
    this.server.assertCanSetRequestHandler(ListToolsRequestSchema.shape.method.value);
    this.server.assertCanSetRequestHandler(CallToolRequestSchema.shape.method.value);
    this.server.registerCapabilities({
      tools: {
        listChanged: true
      }
    });
    this.server.setRequestHandler(ListToolsRequestSchema, () => ({
      tools: Object.entries(this._registeredTools).filter(([, tool]) => tool.enabled).map(([name, tool]) => {
        const toolDefinition = {
          name,
          title: tool.title,
          description: tool.description,
          inputSchema: tool.inputSchema ? zodToJsonSchema(tool.inputSchema, {
            strictUnions: true
          }) : EMPTY_OBJECT_JSON_SCHEMA,
          annotations: tool.annotations
        };
        if (tool.outputSchema) {
          toolDefinition.outputSchema = zodToJsonSchema(tool.outputSchema, { strictUnions: true });
        }
        return toolDefinition;
      })
    }));
    this.server.setRequestHandler(CallToolRequestSchema, async (request, extra) => {
      const tool = this._registeredTools[request.params.name];
      if (!tool) {
        throw new McpError(ErrorCode.InvalidParams, `Tool ${request.params.name} not found`);
      }
      if (!tool.enabled) {
        throw new McpError(ErrorCode.InvalidParams, `Tool ${request.params.name} disabled`);
      }
      let result;
      if (tool.inputSchema) {
        const parseResult = await tool.inputSchema.safeParseAsync(request.params.arguments);
        if (!parseResult.success) {
          throw new McpError(ErrorCode.InvalidParams, `Invalid arguments for tool ${request.params.name}: ${parseResult.error.message}`);
        }
        const args = parseResult.data;
        const cb = tool.callback;
        try {
          result = await Promise.resolve(cb(args, extra));
        } catch (error) {
          result = {
            content: [
              {
                type: "text",
                text: error instanceof Error ? error.message : String(error)
              }
            ],
            isError: true
          };
        }
      } else {
        const cb = tool.callback;
        try {
          result = await Promise.resolve(cb(extra));
        } catch (error) {
          result = {
            content: [
              {
                type: "text",
                text: error instanceof Error ? error.message : String(error)
              }
            ],
            isError: true
          };
        }
      }
      if (tool.outputSchema && !result.isError) {
        if (!result.structuredContent) {
          throw new McpError(ErrorCode.InvalidParams, `Tool ${request.params.name} has an output schema but no structured content was provided`);
        }
        const parseResult = await tool.outputSchema.safeParseAsync(result.structuredContent);
        if (!parseResult.success) {
          throw new McpError(ErrorCode.InvalidParams, `Invalid structured content for tool ${request.params.name}: ${parseResult.error.message}`);
        }
      }
      return result;
    });
    this._toolHandlersInitialized = true;
  }
  setCompletionRequestHandler() {
    if (this._completionHandlerInitialized) {
      return;
    }
    this.server.assertCanSetRequestHandler(CompleteRequestSchema.shape.method.value);
    this.server.registerCapabilities({
      completions: {}
    });
    this.server.setRequestHandler(CompleteRequestSchema, async (request) => {
      switch (request.params.ref.type) {
        case "ref/prompt":
          return this.handlePromptCompletion(request, request.params.ref);
        case "ref/resource":
          return this.handleResourceCompletion(request, request.params.ref);
        default:
          throw new McpError(ErrorCode.InvalidParams, `Invalid completion reference: ${request.params.ref}`);
      }
    });
    this._completionHandlerInitialized = true;
  }
  async handlePromptCompletion(request, ref) {
    const prompt = this._registeredPrompts[ref.name];
    if (!prompt) {
      throw new McpError(ErrorCode.InvalidParams, `Prompt ${ref.name} not found`);
    }
    if (!prompt.enabled) {
      throw new McpError(ErrorCode.InvalidParams, `Prompt ${ref.name} disabled`);
    }
    if (!prompt.argsSchema) {
      return EMPTY_COMPLETION_RESULT;
    }
    const field = prompt.argsSchema.shape[request.params.argument.name];
    if (!(field instanceof Completable)) {
      return EMPTY_COMPLETION_RESULT;
    }
    const def = field._def;
    const suggestions = await def.complete(request.params.argument.value, request.params.context);
    return createCompletionResult(suggestions);
  }
  async handleResourceCompletion(request, ref) {
    const template = Object.values(this._registeredResourceTemplates).find((t) => t.resourceTemplate.uriTemplate.toString() === ref.uri);
    if (!template) {
      if (this._registeredResources[ref.uri]) {
        return EMPTY_COMPLETION_RESULT;
      }
      throw new McpError(ErrorCode.InvalidParams, `Resource template ${request.params.ref.uri} not found`);
    }
    const completer = template.resourceTemplate.completeCallback(request.params.argument.name);
    if (!completer) {
      return EMPTY_COMPLETION_RESULT;
    }
    const suggestions = await completer(request.params.argument.value, request.params.context);
    return createCompletionResult(suggestions);
  }
  setResourceRequestHandlers() {
    if (this._resourceHandlersInitialized) {
      return;
    }
    this.server.assertCanSetRequestHandler(ListResourcesRequestSchema.shape.method.value);
    this.server.assertCanSetRequestHandler(ListResourceTemplatesRequestSchema.shape.method.value);
    this.server.assertCanSetRequestHandler(ReadResourceRequestSchema.shape.method.value);
    this.server.registerCapabilities({
      resources: {
        listChanged: true
      }
    });
    this.server.setRequestHandler(ListResourcesRequestSchema, async (request, extra) => {
      const resources = Object.entries(this._registeredResources).filter(([_, resource]) => resource.enabled).map(([uri, resource]) => ({
        uri,
        name: resource.name,
        ...resource.metadata
      }));
      const templateResources = [];
      for (const template of Object.values(this._registeredResourceTemplates)) {
        if (!template.resourceTemplate.listCallback) {
          continue;
        }
        const result = await template.resourceTemplate.listCallback(extra);
        for (const resource of result.resources) {
          templateResources.push({
            ...template.metadata,
            // the defined resource metadata should override the template metadata if present
            ...resource
          });
        }
      }
      return { resources: [...resources, ...templateResources] };
    });
    this.server.setRequestHandler(ListResourceTemplatesRequestSchema, async () => {
      const resourceTemplates = Object.entries(this._registeredResourceTemplates).map(([name, template]) => ({
        name,
        uriTemplate: template.resourceTemplate.uriTemplate.toString(),
        ...template.metadata
      }));
      return { resourceTemplates };
    });
    this.server.setRequestHandler(ReadResourceRequestSchema, async (request, extra) => {
      const uri = new URL(request.params.uri);
      const resource = this._registeredResources[uri.toString()];
      if (resource) {
        if (!resource.enabled) {
          throw new McpError(ErrorCode.InvalidParams, `Resource ${uri} disabled`);
        }
        return resource.readCallback(uri, extra);
      }
      for (const template of Object.values(this._registeredResourceTemplates)) {
        const variables = template.resourceTemplate.uriTemplate.match(uri.toString());
        if (variables) {
          return template.readCallback(uri, variables, extra);
        }
      }
      throw new McpError(ErrorCode.InvalidParams, `Resource ${uri} not found`);
    });
    this.setCompletionRequestHandler();
    this._resourceHandlersInitialized = true;
  }
  setPromptRequestHandlers() {
    if (this._promptHandlersInitialized) {
      return;
    }
    this.server.assertCanSetRequestHandler(ListPromptsRequestSchema.shape.method.value);
    this.server.assertCanSetRequestHandler(GetPromptRequestSchema.shape.method.value);
    this.server.registerCapabilities({
      prompts: {
        listChanged: true
      }
    });
    this.server.setRequestHandler(ListPromptsRequestSchema, () => ({
      prompts: Object.entries(this._registeredPrompts).filter(([, prompt]) => prompt.enabled).map(([name, prompt]) => {
        return {
          name,
          title: prompt.title,
          description: prompt.description,
          arguments: prompt.argsSchema ? promptArgumentsFromSchema(prompt.argsSchema) : void 0
        };
      })
    }));
    this.server.setRequestHandler(GetPromptRequestSchema, async (request, extra) => {
      const prompt = this._registeredPrompts[request.params.name];
      if (!prompt) {
        throw new McpError(ErrorCode.InvalidParams, `Prompt ${request.params.name} not found`);
      }
      if (!prompt.enabled) {
        throw new McpError(ErrorCode.InvalidParams, `Prompt ${request.params.name} disabled`);
      }
      if (prompt.argsSchema) {
        const parseResult = await prompt.argsSchema.safeParseAsync(request.params.arguments);
        if (!parseResult.success) {
          throw new McpError(ErrorCode.InvalidParams, `Invalid arguments for prompt ${request.params.name}: ${parseResult.error.message}`);
        }
        const args = parseResult.data;
        const cb = prompt.callback;
        return await Promise.resolve(cb(args, extra));
      } else {
        const cb = prompt.callback;
        return await Promise.resolve(cb(extra));
      }
    });
    this.setCompletionRequestHandler();
    this._promptHandlersInitialized = true;
  }
  resource(name, uriOrTemplate, ...rest) {
    let metadata;
    if (typeof rest[0] === "object") {
      metadata = rest.shift();
    }
    const readCallback = rest[0];
    if (typeof uriOrTemplate === "string") {
      if (this._registeredResources[uriOrTemplate]) {
        throw new Error(`Resource ${uriOrTemplate} is already registered`);
      }
      const registeredResource = this._createRegisteredResource(name, void 0, uriOrTemplate, metadata, readCallback);
      this.setResourceRequestHandlers();
      this.sendResourceListChanged();
      return registeredResource;
    } else {
      if (this._registeredResourceTemplates[name]) {
        throw new Error(`Resource template ${name} is already registered`);
      }
      const registeredResourceTemplate = this._createRegisteredResourceTemplate(name, void 0, uriOrTemplate, metadata, readCallback);
      this.setResourceRequestHandlers();
      this.sendResourceListChanged();
      return registeredResourceTemplate;
    }
  }
  registerResource(name, uriOrTemplate, config, readCallback) {
    if (typeof uriOrTemplate === "string") {
      if (this._registeredResources[uriOrTemplate]) {
        throw new Error(`Resource ${uriOrTemplate} is already registered`);
      }
      const registeredResource = this._createRegisteredResource(name, config.title, uriOrTemplate, config, readCallback);
      this.setResourceRequestHandlers();
      this.sendResourceListChanged();
      return registeredResource;
    } else {
      if (this._registeredResourceTemplates[name]) {
        throw new Error(`Resource template ${name} is already registered`);
      }
      const registeredResourceTemplate = this._createRegisteredResourceTemplate(name, config.title, uriOrTemplate, config, readCallback);
      this.setResourceRequestHandlers();
      this.sendResourceListChanged();
      return registeredResourceTemplate;
    }
  }
  _createRegisteredResource(name, title, uri, metadata, readCallback) {
    const registeredResource = {
      name,
      title,
      metadata,
      readCallback,
      enabled: true,
      disable: () => registeredResource.update({ enabled: false }),
      enable: () => registeredResource.update({ enabled: true }),
      remove: () => registeredResource.update({ uri: null }),
      update: (updates) => {
        if (typeof updates.uri !== "undefined" && updates.uri !== uri) {
          delete this._registeredResources[uri];
          if (updates.uri)
            this._registeredResources[updates.uri] = registeredResource;
        }
        if (typeof updates.name !== "undefined")
          registeredResource.name = updates.name;
        if (typeof updates.title !== "undefined")
          registeredResource.title = updates.title;
        if (typeof updates.metadata !== "undefined")
          registeredResource.metadata = updates.metadata;
        if (typeof updates.callback !== "undefined")
          registeredResource.readCallback = updates.callback;
        if (typeof updates.enabled !== "undefined")
          registeredResource.enabled = updates.enabled;
        this.sendResourceListChanged();
      }
    };
    this._registeredResources[uri] = registeredResource;
    return registeredResource;
  }
  _createRegisteredResourceTemplate(name, title, template, metadata, readCallback) {
    const registeredResourceTemplate = {
      resourceTemplate: template,
      title,
      metadata,
      readCallback,
      enabled: true,
      disable: () => registeredResourceTemplate.update({ enabled: false }),
      enable: () => registeredResourceTemplate.update({ enabled: true }),
      remove: () => registeredResourceTemplate.update({ name: null }),
      update: (updates) => {
        if (typeof updates.name !== "undefined" && updates.name !== name) {
          delete this._registeredResourceTemplates[name];
          if (updates.name)
            this._registeredResourceTemplates[updates.name] = registeredResourceTemplate;
        }
        if (typeof updates.title !== "undefined")
          registeredResourceTemplate.title = updates.title;
        if (typeof updates.template !== "undefined")
          registeredResourceTemplate.resourceTemplate = updates.template;
        if (typeof updates.metadata !== "undefined")
          registeredResourceTemplate.metadata = updates.metadata;
        if (typeof updates.callback !== "undefined")
          registeredResourceTemplate.readCallback = updates.callback;
        if (typeof updates.enabled !== "undefined")
          registeredResourceTemplate.enabled = updates.enabled;
        this.sendResourceListChanged();
      }
    };
    this._registeredResourceTemplates[name] = registeredResourceTemplate;
    return registeredResourceTemplate;
  }
  _createRegisteredPrompt(name, title, description, argsSchema, callback) {
    const registeredPrompt = {
      title,
      description,
      argsSchema: argsSchema === void 0 ? void 0 : z.object(argsSchema),
      callback,
      enabled: true,
      disable: () => registeredPrompt.update({ enabled: false }),
      enable: () => registeredPrompt.update({ enabled: true }),
      remove: () => registeredPrompt.update({ name: null }),
      update: (updates) => {
        if (typeof updates.name !== "undefined" && updates.name !== name) {
          delete this._registeredPrompts[name];
          if (updates.name)
            this._registeredPrompts[updates.name] = registeredPrompt;
        }
        if (typeof updates.title !== "undefined")
          registeredPrompt.title = updates.title;
        if (typeof updates.description !== "undefined")
          registeredPrompt.description = updates.description;
        if (typeof updates.argsSchema !== "undefined")
          registeredPrompt.argsSchema = z.object(updates.argsSchema);
        if (typeof updates.callback !== "undefined")
          registeredPrompt.callback = updates.callback;
        if (typeof updates.enabled !== "undefined")
          registeredPrompt.enabled = updates.enabled;
        this.sendPromptListChanged();
      }
    };
    this._registeredPrompts[name] = registeredPrompt;
    return registeredPrompt;
  }
  _createRegisteredTool(name, title, description, inputSchema, outputSchema, annotations, callback) {
    const registeredTool = {
      title,
      description,
      inputSchema: inputSchema === void 0 ? void 0 : z.object(inputSchema),
      outputSchema: outputSchema === void 0 ? void 0 : z.object(outputSchema),
      annotations,
      callback,
      enabled: true,
      disable: () => registeredTool.update({ enabled: false }),
      enable: () => registeredTool.update({ enabled: true }),
      remove: () => registeredTool.update({ name: null }),
      update: (updates) => {
        if (typeof updates.name !== "undefined" && updates.name !== name) {
          delete this._registeredTools[name];
          if (updates.name)
            this._registeredTools[updates.name] = registeredTool;
        }
        if (typeof updates.title !== "undefined")
          registeredTool.title = updates.title;
        if (typeof updates.description !== "undefined")
          registeredTool.description = updates.description;
        if (typeof updates.paramsSchema !== "undefined")
          registeredTool.inputSchema = z.object(updates.paramsSchema);
        if (typeof updates.callback !== "undefined")
          registeredTool.callback = updates.callback;
        if (typeof updates.annotations !== "undefined")
          registeredTool.annotations = updates.annotations;
        if (typeof updates.enabled !== "undefined")
          registeredTool.enabled = updates.enabled;
        this.sendToolListChanged();
      }
    };
    this._registeredTools[name] = registeredTool;
    this.setToolRequestHandlers();
    this.sendToolListChanged();
    return registeredTool;
  }
  /**
   * tool() implementation. Parses arguments passed to overrides defined above.
   */
  tool(name, ...rest) {
    if (this._registeredTools[name]) {
      throw new Error(`Tool ${name} is already registered`);
    }
    let description;
    let inputSchema;
    let outputSchema;
    let annotations;
    if (typeof rest[0] === "string") {
      description = rest.shift();
    }
    if (rest.length > 1) {
      const firstArg = rest[0];
      if (isZodRawShape(firstArg)) {
        inputSchema = rest.shift();
        if (rest.length > 1 && typeof rest[0] === "object" && rest[0] !== null && !isZodRawShape(rest[0])) {
          annotations = rest.shift();
        }
      } else if (typeof firstArg === "object" && firstArg !== null) {
        annotations = rest.shift();
      }
    }
    const callback = rest[0];
    return this._createRegisteredTool(name, void 0, description, inputSchema, outputSchema, annotations, callback);
  }
  /**
   * Registers a tool with a config object and callback.
   */
  registerTool(name, config, cb) {
    if (this._registeredTools[name]) {
      throw new Error(`Tool ${name} is already registered`);
    }
    const { title, description, inputSchema, outputSchema, annotations } = config;
    return this._createRegisteredTool(name, title, description, inputSchema, outputSchema, annotations, cb);
  }
  prompt(name, ...rest) {
    if (this._registeredPrompts[name]) {
      throw new Error(`Prompt ${name} is already registered`);
    }
    let description;
    if (typeof rest[0] === "string") {
      description = rest.shift();
    }
    let argsSchema;
    if (rest.length > 1) {
      argsSchema = rest.shift();
    }
    const cb = rest[0];
    const registeredPrompt = this._createRegisteredPrompt(name, void 0, description, argsSchema, cb);
    this.setPromptRequestHandlers();
    this.sendPromptListChanged();
    return registeredPrompt;
  }
  /**
   * Registers a prompt with a config object and callback.
   */
  registerPrompt(name, config, cb) {
    if (this._registeredPrompts[name]) {
      throw new Error(`Prompt ${name} is already registered`);
    }
    const { title, description, argsSchema } = config;
    const registeredPrompt = this._createRegisteredPrompt(name, title, description, argsSchema, cb);
    this.setPromptRequestHandlers();
    this.sendPromptListChanged();
    return registeredPrompt;
  }
  /**
   * Checks if the server is connected to a transport.
   * @returns True if the server is connected
   */
  isConnected() {
    return this.server.transport !== void 0;
  }
  /**
   * Sends a resource list changed event to the client, if connected.
   */
  sendResourceListChanged() {
    if (this.isConnected()) {
      this.server.sendResourceListChanged();
    }
  }
  /**
   * Sends a tool list changed event to the client, if connected.
   */
  sendToolListChanged() {
    if (this.isConnected()) {
      this.server.sendToolListChanged();
    }
  }
  /**
   * Sends a prompt list changed event to the client, if connected.
   */
  sendPromptListChanged() {
    if (this.isConnected()) {
      this.server.sendPromptListChanged();
    }
  }
};
__name(McpServer, "McpServer");
var EMPTY_OBJECT_JSON_SCHEMA = {
  type: "object",
  properties: {}
};
function isZodRawShape(obj) {
  if (typeof obj !== "object" || obj === null)
    return false;
  const isEmptyObject = Object.keys(obj).length === 0;
  return isEmptyObject || Object.values(obj).some(isZodTypeLike);
}
__name(isZodRawShape, "isZodRawShape");
function isZodTypeLike(value) {
  return value !== null && typeof value === "object" && "parse" in value && typeof value.parse === "function" && "safeParse" in value && typeof value.safeParse === "function";
}
__name(isZodTypeLike, "isZodTypeLike");
function promptArgumentsFromSchema(schema) {
  return Object.entries(schema.shape).map(([name, field]) => ({
    name,
    description: field.description,
    required: !field.isOptional()
  }));
}
__name(promptArgumentsFromSchema, "promptArgumentsFromSchema");
function createCompletionResult(suggestions) {
  return {
    completion: {
      values: suggestions.slice(0, 100),
      total: suggestions.length,
      hasMore: suggestions.length > 100
    }
  };
}
__name(createCompletionResult, "createCompletionResult");
var EMPTY_COMPLETION_RESULT = {
  completion: {
    values: [],
    hasMore: false
  }
};

// src/mcp.ts
function createWikipediaMcp(wikipediaService2, extendedFeatures2) {
  const server = new McpServer({
    name: "wikipedia-mcp-server",
    version: "1.0.0"
  });
  server.registerTool(
    "search",
    {
      title: "Wikipedia Search",
      description: "Search Wikipedia for articles matching a query.",
      inputSchema: {
        query: z.string().describe("The search query."),
        lang: z.string().optional().default("en").describe("The language to search in (e.g., 'en', 'es', 'fr')."),
        limit: z.number().optional().default(10).describe("The maximum number of results to return."),
        offset: z.number().optional().default(0).describe("The offset of the search results."),
        includeSnippets: z.boolean().optional().default(true).describe("Whether to include snippets in the search results.")
      }
    },
    async ({ query, lang, limit, offset, includeSnippets }) => {
      const results = await wikipediaService2.search(query, { lang, limit, offset, includeSnippets });
      const searchResults = results?.query?.search || [];
      return {
        content: [
          {
            type: "text",
            text: `Found ${searchResults.length} results for "${query}":

${searchResults.map((result) => `- ${result.title}: ${result.snippet || "No snippet available"}`).join("\n")}`
          }
        ]
      };
    }
  );
  server.registerTool(
    "getPage",
    {
      title: "Get Wikipedia Page",
      description: "Get the content of a Wikipedia page by its exact title.",
      inputSchema: {
        title: z.string().describe("The title of the page."),
        lang: z.string().optional().default("en").describe("The language of the page (e.g., 'en', 'es', 'fr')."),
        sections: z.boolean().optional().default(true).describe("Whether to include sections in the result."),
        images: z.boolean().optional().default(false).describe("Whether to include images in the result."),
        links: z.boolean().optional().default(false).describe("Whether to include links in the result."),
        categories: z.boolean().optional().default(false).describe("Whether to include categories in the result.")
      }
    },
    async ({ title, lang, sections, images, links, categories }) => {
      const result = await wikipediaService2.getPage(title, { lang, sections, images, links, categories });
      const pageData = result?.parse;
      if (!pageData) {
        return {
          content: [
            {
              type: "text",
              text: `Page "${title}" not found.`
            }
          ]
        };
      }
      return {
        content: [
          {
            type: "text",
            text: `Page: ${pageData.title}
Text: ${pageData.text?.["*"]?.substring(0, 1e3) || "No text available"}...`
          }
        ]
      };
    }
  );
  server.registerTool(
    "getPageSummary",
    {
      title: "Get Wikipedia Page Summary",
      description: "Get a brief summary of a Wikipedia page.",
      inputSchema: {
        title: z.string().describe("The title of the page."),
        lang: z.string().optional().default("en").describe("The language of the page (e.g., 'en', 'es', 'fr').")
      }
    },
    async ({ title, lang }) => {
      const result = await wikipediaService2.getPageSummary(title, lang);
      if (!result) {
        return {
          content: [
            {
              type: "text",
              text: `Summary for page "${title}" not found.`
            }
          ]
        };
      }
      return {
        content: [
          {
            type: "text",
            text: `Summary for "${title}":

${result.extract || "No summary available"}`
          }
        ]
      };
    }
  );
  server.registerTool(
    "getPageById",
    {
      title: "Get Wikipedia Page by ID",
      description: "Get the content of a Wikipedia page by its ID.",
      inputSchema: {
        id: z.number().int().positive().describe("The ID of the page."),
        lang: z.string().optional().default("en").describe("The language of the page (e.g., 'en', 'es', 'fr')."),
        sections: z.boolean().optional().default(true).describe("Whether to include sections in the result."),
        images: z.boolean().optional().default(false).describe("Whether to include images in the result."),
        links: z.boolean().optional().default(false).describe("Whether to include links in the result."),
        categories: z.boolean().optional().default(false).describe("Whether to include categories in the result.")
      }
    },
    async ({ id, lang, sections, images, links, categories }) => {
      const result = await wikipediaService2.getPageById(id, { lang, sections, images, links, categories });
      const pageData = result?.parse;
      if (!pageData) {
        return {
          content: [
            {
              type: "text",
              text: `Page with ID "${id}" not found.`
            }
          ]
        };
      }
      return {
        content: [
          {
            type: "text",
            text: `Page ID: ${id}
Title: ${pageData.title}
Text: ${pageData.text?.["*"]?.substring(0, 1e3) || "No text available"}...`
          }
        ]
      };
    }
  );
  server.registerTool(
    "random",
    {
      title: "Get Random Wikipedia Page",
      description: "Get a random Wikipedia page.",
      inputSchema: {
        lang: z.string().optional().default("en").describe("The language of the page (e.g., 'en', 'es', 'fr').")
      }
    },
    async ({ lang }) => {
      const result = await wikipediaService2.getRandomPage(lang);
      const randomPage = result?.query?.random?.[0];
      if (!randomPage) {
        return {
          content: [
            {
              type: "text",
              text: `No random page found.`
            }
          ]
        };
      }
      return {
        content: [
          {
            type: "text",
            text: `Random page: ${randomPage.title} (ID: ${randomPage.id})`
          }
        ]
      };
    }
  );
  server.registerTool(
    "pageLanguages",
    {
      title: "Get Wikipedia Page Languages",
      description: "Get the languages a Wikipedia page is available in.",
      inputSchema: {
        title: z.string().describe("The title of the page."),
        lang: z.string().optional().default("en").describe("The language of the page (e.g., 'en', 'es', 'fr').")
      }
    },
    async ({ title, lang }) => {
      const result = await extendedFeatures2.getPageLanguages(title, lang);
      const pageData = result?.query?.pages;
      if (!pageData) {
        return {
          content: [
            {
              type: "text",
              text: `No language information found for page "${title}".`
            }
          ]
        };
      }
      const languages = Object.values(pageData)[0]?.langlinks || [];
      return {
        content: [
          {
            type: "text",
            text: `Languages available for "${title}":

${languages.map((lang2) => `- ${lang2.lang}: ${lang2["*"] || lang2.title || "Unknown"}`).join("\n")}`
          }
        ]
      };
    }
  );
  server.registerTool(
    "batchSearch",
    {
      title: "Batch Wikipedia Search",
      description: "Search multiple queries at once for efficiency.",
      inputSchema: {
        queries: z.array(z.string()).min(1).max(10).describe("Array of search queries (max 10)."),
        lang: z.string().optional().default("en").describe("The language to search in (e.g., 'en', 'es', 'fr')."),
        limit: z.number().int().positive().max(20).optional().default(5).describe("Maximum number of results per query."),
        concurrency: z.number().int().positive().max(10).optional().default(5).describe("Number of concurrent requests (max 10).")
      }
    },
    async ({ queries, lang, limit, concurrency }) => {
      const results = await extendedFeatures2.batchSearch(queries, { lang, limit, concurrency });
      return {
        content: [
          {
            type: "text",
            text: `Batch search results for ${queries.length} queries:

${Object.entries(results).map(([query, result]) => {
              if (result.error) {
                return `\u274C "${query}": ${result.error}`;
              }
              const searchResults = result?.query?.search || [];
              return `\u2705 "${query}": ${searchResults.length} results
${searchResults.map((r) => `  - ${r.title}`).join("\n")}`;
            }).join("\n\n")}`
          }
        ]
      };
    }
  );
  server.registerTool(
    "batchGetPages",
    {
      title: "Batch Get Wikipedia Pages",
      description: "Get multiple Wikipedia pages at once for efficiency.",
      inputSchema: {
        titles: z.array(z.string()).min(1).max(10).describe("Array of page titles (max 10)."),
        lang: z.string().optional().default("en").describe("The language of the pages (e.g., 'en', 'es', 'fr')."),
        sections: z.boolean().optional().default(true).describe("Whether to include sections in the results."),
        concurrency: z.number().int().positive().max(10).optional().default(5).describe("Number of concurrent requests (max 10).")
      }
    },
    async ({ titles, lang, sections, concurrency }) => {
      const results = await extendedFeatures2.batchGetPages(titles, { lang, sections, concurrency });
      return {
        content: [
          {
            type: "text",
            text: `Batch page results for ${titles.length} pages:

${Object.entries(results).map(([title, result]) => {
              if (result.error) {
                return `\u274C "${title}": ${result.error}`;
              }
              const pageData = result?.parse;
              if (!pageData) {
                return `\u274C "${title}": Page not found`;
              }
              const textPreview = pageData.text?.["*"]?.substring(0, 200) || "No text available";
              return `\u2705 "${title}": ${pageData.title}
Preview: ${textPreview}...`;
            }).join("\n\n")}`
          }
        ]
      };
    }
  );
  server.registerTool(
    "searchNearby",
    {
      title: "Search Wikipedia Articles Near Location",
      description: "Find Wikipedia articles near specific coordinates.",
      inputSchema: {
        lat: z.number().min(-90).max(90).describe("Latitude coordinate (-90 to 90)."),
        lon: z.number().min(-180).max(180).describe("Longitude coordinate (-180 to 180)."),
        radius: z.number().int().positive().max(1e4).optional().default(1e3).describe("Search radius in meters (max 10000)."),
        lang: z.string().optional().default("en").describe("The language to search in (e.g., 'en', 'es', 'fr')."),
        limit: z.number().int().positive().max(50).optional().default(10).describe("Maximum number of results to return.")
      }
    },
    async ({ lat, lon, radius, lang, limit }) => {
      const result = await extendedFeatures2.searchNearby({ lat, lon, radius, lang, limit });
      const places = result?.query?.geosearch || [];
      if (places.length === 0) {
        return {
          content: [
            {
              type: "text",
              text: `No Wikipedia articles found near coordinates (${lat}, ${lon}) within ${radius}m radius.`
            }
          ]
        };
      }
      return {
        content: [
          {
            type: "text",
            text: `Found ${places.length} Wikipedia articles near (${lat}, ${lon}) within ${radius}m:

${places.map(
              (place) => `\u{1F4CD} ${place.title}
   Distance: ${place.dist}m
   Coordinates: ${place.lat}, ${place.lon}`
            ).join("\n\n")}`
          }
        ]
      };
    }
  );
  server.registerTool(
    "getPagesInCategory",
    {
      title: "Get Pages in Wikipedia Category",
      description: "Browse pages within a specific Wikipedia category.",
      inputSchema: {
        category: z.string().describe("The category name (with or without 'Category:' prefix)."),
        lang: z.string().optional().default("en").describe("The language of the category (e.g., 'en', 'es', 'fr')."),
        limit: z.number().int().positive().max(100).optional().default(20).describe("Maximum number of pages to return."),
        type: z.enum(["page", "subcat", "file"]).optional().default("page").describe("Type of category members to return.")
      }
    },
    async ({ category, lang, limit, type }) => {
      const result = await extendedFeatures2.getPagesInCategory(category, { lang, limit, type });
      const members = result?.query?.categorymembers || [];
      if (members.length === 0) {
        return {
          content: [
            {
              type: "text",
              text: `No pages found in category "${category}".`
            }
          ]
        };
      }
      return {
        content: [
          {
            type: "text",
            text: `Found ${members.length} ${type}s in category "${category}":

${members.map(
              (member) => `\u{1F4C4} ${member.title} (ID: ${member.pageid})`
            ).join("\n")}`
          }
        ]
      };
    }
  );
  return server;
}
__name(createWikipediaMcp, "createWikipediaMcp");

// src/schema.ts
function getServerSchema() {
  return {
    serverInfo: {
      name: "wikipedia-mcp-server",
      version: "1.0.0",
      description: "An enterprise-grade Wikipedia server providing comprehensive Wikipedia access via the Model Context Protocol (MCP) standard"
    },
    tools: [
      {
        name: "search",
        description: "Search Wikipedia for articles matching a query.",
        inputSchema: {
          type: "object",
          properties: {
            query: {
              type: "string",
              description: "The search query."
            },
            lang: {
              type: "string",
              default: "en",
              description: "The language to search in (e.g., 'en', 'es', 'fr')."
            },
            limit: {
              type: "number",
              default: 10,
              description: "The maximum number of results to return."
            },
            offset: {
              type: "number",
              default: 0,
              description: "The offset of the search results."
            },
            includeSnippets: {
              type: "boolean",
              default: true,
              description: "Whether to include snippets in the search results."
            }
          },
          required: ["query"]
        }
      },
      {
        name: "getPage",
        description: "Get the content of a Wikipedia page by its exact title.",
        inputSchema: {
          type: "object",
          properties: {
            title: {
              type: "string",
              description: "The title of the page."
            },
            lang: {
              type: "string",
              default: "en",
              description: "The language of the page (e.g., 'en', 'es', 'fr')."
            },
            sections: {
              type: "boolean",
              default: true,
              description: "Whether to include sections in the result."
            },
            images: {
              type: "boolean",
              default: false,
              description: "Whether to include images in the result."
            },
            links: {
              type: "boolean",
              default: false,
              description: "Whether to include links in the result."
            },
            categories: {
              type: "boolean",
              default: false,
              description: "Whether to include categories in the result."
            }
          },
          required: ["title"]
        }
      },
      {
        name: "getPageSummary",
        description: "Get a brief summary of a Wikipedia page.",
        inputSchema: {
          type: "object",
          properties: {
            title: {
              type: "string",
              description: "The title of the page."
            },
            lang: {
              type: "string",
              default: "en",
              description: "The language of the page (e.g., 'en', 'es', 'fr')."
            }
          },
          required: ["title"]
        }
      },
      {
        name: "getPageById",
        description: "Get the content of a Wikipedia page by its ID.",
        inputSchema: {
          type: "object",
          properties: {
            id: {
              type: "number",
              description: "The ID of the page."
            },
            lang: {
              type: "string",
              default: "en",
              description: "The language of the page (e.g., 'en', 'es', 'fr')."
            },
            sections: {
              type: "boolean",
              default: true,
              description: "Whether to include sections in the result."
            },
            images: {
              type: "boolean",
              default: false,
              description: "Whether to include images in the result."
            },
            links: {
              type: "boolean",
              default: false,
              description: "Whether to include links in the result."
            },
            categories: {
              type: "boolean",
              default: false,
              description: "Whether to include categories in the result."
            }
          },
          required: ["id"]
        }
      },
      {
        name: "random",
        description: "Get a random Wikipedia page.",
        inputSchema: {
          type: "object",
          properties: {
            lang: {
              type: "string",
              default: "en",
              description: "The language of the page (e.g., 'en', 'es', 'fr')."
            }
          }
        }
      },
      {
        name: "pageLanguages",
        description: "Get the languages a Wikipedia page is available in.",
        inputSchema: {
          type: "object",
          properties: {
            title: {
              type: "string",
              description: "The title of the page."
            },
            lang: {
              type: "string",
              default: "en",
              description: "The language of the page (e.g., 'en', 'es', 'fr')."
            }
          },
          required: ["title"]
        }
      },
      {
        name: "batchSearch",
        description: "Search multiple queries at once for efficiency.",
        inputSchema: {
          type: "object",
          properties: {
            queries: {
              type: "array",
              items: { type: "string" },
              minItems: 1,
              maxItems: 10,
              description: "Array of search queries (max 10)."
            },
            lang: {
              type: "string",
              default: "en",
              description: "The language to search in (e.g., 'en', 'es', 'fr')."
            },
            limit: {
              type: "number",
              default: 5,
              description: "Maximum number of results per query."
            },
            concurrency: {
              type: "number",
              default: 5,
              description: "Number of concurrent requests (max 10)."
            }
          },
          required: ["queries"]
        }
      },
      {
        name: "batchGetPages",
        description: "Get multiple Wikipedia pages at once for efficiency.",
        inputSchema: {
          type: "object",
          properties: {
            titles: {
              type: "array",
              items: { type: "string" },
              minItems: 1,
              maxItems: 10,
              description: "Array of page titles (max 10)."
            },
            lang: {
              type: "string",
              default: "en",
              description: "The language of the pages (e.g., 'en', 'es', 'fr')."
            },
            sections: {
              type: "boolean",
              default: true,
              description: "Whether to include sections in the results."
            },
            concurrency: {
              type: "number",
              default: 5,
              description: "Number of concurrent requests (max 10)."
            }
          },
          required: ["titles"]
        }
      },
      {
        name: "searchNearby",
        description: "Find Wikipedia articles near specific coordinates.",
        inputSchema: {
          type: "object",
          properties: {
            lat: {
              type: "number",
              minimum: -90,
              maximum: 90,
              description: "Latitude coordinate (-90 to 90)."
            },
            lon: {
              type: "number",
              minimum: -180,
              maximum: 180,
              description: "Longitude coordinate (-180 to 180)."
            },
            radius: {
              type: "number",
              default: 1e3,
              description: "Search radius in meters (max 10000)."
            },
            lang: {
              type: "string",
              default: "en",
              description: "The language to search in (e.g., 'en', 'es', 'fr')."
            },
            limit: {
              type: "number",
              default: 10,
              description: "Maximum number of results to return."
            }
          },
          required: ["lat", "lon"]
        }
      },
      {
        name: "getPagesInCategory",
        description: "Browse pages within a specific Wikipedia category.",
        inputSchema: {
          type: "object",
          properties: {
            category: {
              type: "string",
              description: "The category name (with or without 'Category:' prefix)."
            },
            lang: {
              type: "string",
              default: "en",
              description: "The language of the category (e.g., 'en', 'es', 'fr')."
            },
            limit: {
              type: "number",
              default: 20,
              description: "Maximum number of pages to return."
            },
            type: {
              type: "string",
              enum: ["page", "subcat", "file"],
              default: "page",
              description: "Type of category members to return."
            }
          },
          required: ["category"]
        }
      }
    ]
  };
}
__name(getServerSchema, "getServerSchema");

// src/worker.ts
var lruCache = null;
var wikipediaService = null;
var extendedFeatures = null;
var monitoring = null;
var mcp = null;
var DEFAULT_CACHE_MAX = 100;
var DEFAULT_CACHE_TTL = 5 * 60 * 1e3;
function initializeServices(env) {
  if (!lruCache) {
    const max = parseInt(env.CACHE_MAX || "", 10) || DEFAULT_CACHE_MAX;
    const ttl = parseInt(env.CACHE_TTL || "", 10) || DEFAULT_CACHE_TTL;
    lruCache = new lru_cache_default({ max, ttl });
  }
  if (!monitoring) {
    monitoring = new MonitoringService();
  }
  if (!wikipediaService) {
    wikipediaService = new EnhancedWikipediaService({
      cache: lruCache,
      kvCache: env.WIKI_CACHE,
      enableDeduplication: env.ENABLE_DEDUPLICATION === "true",
      defaultLanguage: env.DEFAULT_LANGUAGE || "en"
    });
  }
  if (!extendedFeatures) {
    extendedFeatures = new WikipediaExtendedFeatures(wikipediaService);
  }
  if (!mcp) {
    mcp = createWikipediaMcp(wikipediaService, extendedFeatures);
  }
  return { wikipediaService, extendedFeatures, monitoring, mcp };
}
__name(initializeServices, "initializeServices");
var app = new Hono2();
app.use("*", logger());
app.use("*", cors());
app.all("/mcp", async (c) => {
  const { mcp: mcp2 } = initializeServices(c.env);
  let rpcResponse = null;
  const fakeTransport = {
    onmessage: (message) => {
    },
    onclose: () => {
    },
    onerror: (error) => {
    },
    start: async () => {
    },
    close: async () => {
    },
    send: async (message) => {
      if (isJSONRPCResponse(message) || isJSONRPCError(message)) {
        rpcResponse = message;
      }
    }
  };
  await mcp2.server.connect(fakeTransport);
  const requestBody = await c.req.json();
  if (fakeTransport.onmessage) {
    fakeTransport.onmessage(requestBody);
  }
  const responsePromise = new Promise((resolve) => {
    const interval = setInterval(() => {
      if (rpcResponse) {
        clearInterval(interval);
        resolve(rpcResponse);
      }
    }, 10);
  });
  const mcpResponse = await responsePromise;
  return c.json(mcpResponse);
});
app.post("/api", async (c) => {
  const services = initializeServices(c.env);
  const request = await c.req.json();
  const fakeJsonRpcTransport = {
    start: async () => {
    },
    close: async () => {
    },
    onmessage: (message) => {
    },
    onclose: () => {
    },
    onerror: (error) => {
      console.error(error);
    },
    send: async (message) => {
      return c.json(message);
    }
  };
  const jsonRpcServer = new JSONRPCServer(fakeJsonRpcTransport);
  const searchSchema = z.object({
    query: z.string().min(1),
    limit: z.number().int().positive().max(50).optional().default(10),
    lang: z.string().regex(/^[a-z]{2}(?:-[A-Z]{2})?$/).optional().default("en"),
    offset: z.number().int().nonnegative().optional().default(0),
    includeSnippets: z.boolean().optional().default(true)
  });
  jsonRpcServer.on("wikipedia.search", async (params) => {
    const parseResult = searchSchema.safeParse(params);
    if (!parseResult.success) {
      throw new Error(`Invalid parameters for wikipedia.search: ${parseResult.error.message}`);
    }
    const { query, limit, lang, offset, includeSnippets } = parseResult.data;
    services.monitoring.analytics.recordRequest({
      method: "wikipedia.search",
      params: parseResult.data,
      requestId: crypto.randomUUID(),
      success: true
    });
    const data = await services.wikipediaService.search(query, { limit, lang, offset, includeSnippets });
    return data?.query?.search || [];
  });
  const pageSchema = z.object({
    title: z.string().min(1),
    lang: z.string().regex(/^[a-z]{2}(?:-[A-Z]{2})?$/).optional().default("en"),
    sections: z.boolean().optional().default(true),
    images: z.boolean().optional().default(false),
    links: z.boolean().optional().default(false),
    categories: z.boolean().optional().default(false)
  });
  jsonRpcServer.on("wikipedia.page", async (params) => {
    const parseResult = pageSchema.safeParse(params);
    if (!parseResult.success) {
      throw new Error(`Invalid parameters for wikipedia.page: ${parseResult.error.message}`);
    }
    const { title, lang, sections, images, links, categories } = parseResult.data;
    services.monitoring.analytics.recordRequest({
      method: "wikipedia.page",
      params: parseResult.data,
      requestId: crypto.randomUUID(),
      success: true
    });
    const data = await services.wikipediaService.getPage(title, { lang, sections, images, links, categories });
    return data?.parse || null;
  });
  const pageByIdSchema = z.object({
    id: z.number().int().positive(),
    lang: z.string().regex(/^[a-z]{2}(?:-[A-Z]{2})?$/).optional().default("en"),
    sections: z.boolean().optional().default(true),
    images: z.boolean().optional().default(false),
    links: z.boolean().optional().default(false),
    categories: z.boolean().optional().default(false)
  });
  jsonRpcServer.on("wikipedia.pageById", async (params) => {
    const parseResult = pageByIdSchema.safeParse(params);
    if (!parseResult.success) {
      throw new Error(`Invalid parameters for wikipedia.pageById: ${parseResult.error.message}`);
    }
    const { id, lang, sections, images, links, categories } = parseResult.data;
    services.monitoring.analytics.recordRequest({
      method: "wikipedia.pageById",
      params: parseResult.data,
      requestId: crypto.randomUUID(),
      success: true
    });
    const data = await services.wikipediaService.getPageById(id, { lang, sections, images, links, categories });
    return data?.parse || null;
  });
  const summarySchema = z.object({
    title: z.string().min(1),
    lang: z.string().regex(/^[a-z]{2}(?:-[A-Z]{2})?$/).optional().default("en")
  });
  jsonRpcServer.on("wikipedia.summary", async (params) => {
    const parseResult = summarySchema.safeParse(params);
    if (!parseResult.success) {
      throw new Error(`Invalid parameters for wikipedia.summary: ${parseResult.error.message}`);
    }
    const { title, lang } = parseResult.data;
    services.monitoring.analytics.recordRequest({
      method: "wikipedia.summary",
      params: parseResult.data,
      requestId: crypto.randomUUID(),
      success: true
    });
    return await services.wikipediaService.getPageSummary(title, lang);
  });
  const randomSchema = z.object({
    lang: z.string().regex(/^[a-z]{2}(?:-[A-Z]{2})?$/).optional().default("en")
  });
  jsonRpcServer.on("wikipedia.random", async (params) => {
    const parseResult = randomSchema.safeParse(params);
    if (!parseResult.success) {
      throw new Error(`Invalid parameters for wikipedia.random: ${parseResult.error.message}`);
    }
    const { lang } = parseResult.data;
    services.monitoring.analytics.recordRequest({
      method: "wikipedia.random",
      params: parseResult.data,
      requestId: crypto.randomUUID(),
      success: true
    });
    return await services.wikipediaService.getRandomPage(lang);
  });
  const pageLanguagesSchema = z.object({
    title: z.string().min(1),
    lang: z.string().regex(/^[a-z]{2}(?:-[A-Z]{2})?$/).optional().default("en")
  });
  jsonRpcServer.on("wikipedia.pageLanguages", async (params) => {
    const parseResult = pageLanguagesSchema.safeParse(params);
    if (!parseResult.success) {
      throw new Error(`Invalid parameters for wikipedia.pageLanguages: ${parseResult.error.message}`);
    }
    const { title, lang } = parseResult.data;
    services.monitoring.analytics.recordRequest({
      method: "wikipedia.pageLanguages",
      params: parseResult.data,
      requestId: crypto.randomUUID(),
      success: true
    });
    return await services.extendedFeatures.getPageLanguages(title, lang);
  });
  return await jsonRpcServer.processRequest(request);
});
app.get("/", (c) => c.text("Wikipedia Service is running."));
app.get("/health", async (c) => {
  const services = initializeServices(c.env);
  const healthStatus = await services.wikipediaService.healthCheck();
  const metrics = services.monitoring.getDashboardData();
  return c.json({
    status: "ok",
    timestamp: (/* @__PURE__ */ new Date()).toISOString(),
    service: healthStatus,
    monitoring: metrics
  });
});
app.get("/schema", async (c) => {
  const { mcp: mcp2 } = initializeServices(c.env);
  let schemaResponse = null;
  const mockTransport = {
    onmessage: (message) => {
    },
    onclose: () => {
    },
    onerror: (error) => {
    },
    start: async () => {
    },
    close: async () => {
    },
    send: async (message) => {
      if (message.result && message.result.tools) {
        schemaResponse = message.result;
      }
    }
  };
  await mcp2.server.connect(mockTransport);
  if (mockTransport.onmessage) {
    mockTransport.onmessage({
      jsonrpc: "2.0",
      method: "tools/list",
      id: "schema-request"
    });
  }
  const responsePromise = new Promise((resolve) => {
    const interval = setInterval(() => {
      if (schemaResponse) {
        clearInterval(interval);
        resolve(schemaResponse);
      }
    }, 10);
    setTimeout(() => {
      clearInterval(interval);
      resolve(null);
    }, 1e3);
  });
  const schema = await responsePromise;
  if (!schema) {
    return c.json(getServerSchema());
  }
  return c.json(schema);
});
app.get("/tools", async (c) => {
  const schema = getServerSchema();
  const toolsList = schema.tools.map((tool) => ({
    name: tool.name,
    description: tool.description,
    parameters: Object.keys(tool.inputSchema.properties).map((param) => ({
      name: param,
      type: tool.inputSchema.properties[param].type,
      required: tool.inputSchema.required?.includes(param) || false,
      default: tool.inputSchema.properties[param].default,
      description: tool.inputSchema.properties[param].description
    }))
  }));
  return c.json({
    server: schema.serverInfo,
    tools: toolsList,
    totalTools: toolsList.length
  });
});
app.onError((err, c) => {
  console.error(`${err}`);
  return c.json({ error: err.message }, 500);
});
var worker_default = app;

// node_modules/wrangler/templates/middleware/middleware-ensure-req-body-drained.ts
var drainBody = /* @__PURE__ */ __name(async (request, env, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env);
  } finally {
    try {
      if (request.body !== null && !request.bodyUsed) {
        const reader = request.body.getReader();
        while (!(await reader.read()).done) {
        }
      }
    } catch (e) {
      console.error("Failed to drain the unused request body.", e);
    }
  }
}, "drainBody");
var middleware_ensure_req_body_drained_default = drainBody;

// node_modules/wrangler/templates/middleware/middleware-miniflare3-json-error.ts
function reduceError(e) {
  return {
    name: e?.name,
    message: e?.message ?? String(e),
    stack: e?.stack,
    cause: e?.cause === void 0 ? void 0 : reduceError(e.cause)
  };
}
__name(reduceError, "reduceError");
var jsonError = /* @__PURE__ */ __name(async (request, env, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env);
  } catch (e) {
    const error = reduceError(e);
    return Response.json(error, {
      status: 500,
      headers: { "MF-Experimental-Error-Stack": "true" }
    });
  }
}, "jsonError");
var middleware_miniflare3_json_error_default = jsonError;

// .wrangler/tmp/bundle-cNED0N/middleware-insertion-facade.js
var __INTERNAL_WRANGLER_MIDDLEWARE__ = [
  middleware_ensure_req_body_drained_default,
  middleware_miniflare3_json_error_default
];
var middleware_insertion_facade_default = worker_default;

// node_modules/wrangler/templates/middleware/common.ts
var __facade_middleware__ = [];
function __facade_register__(...args) {
  __facade_middleware__.push(...args.flat());
}
__name(__facade_register__, "__facade_register__");
function __facade_invokeChain__(request, env, ctx, dispatch, middlewareChain) {
  const [head, ...tail] = middlewareChain;
  const middlewareCtx = {
    dispatch,
    next(newRequest, newEnv) {
      return __facade_invokeChain__(newRequest, newEnv, ctx, dispatch, tail);
    }
  };
  return head(request, env, ctx, middlewareCtx);
}
__name(__facade_invokeChain__, "__facade_invokeChain__");
function __facade_invoke__(request, env, ctx, dispatch, finalMiddleware) {
  return __facade_invokeChain__(request, env, ctx, dispatch, [
    ...__facade_middleware__,
    finalMiddleware
  ]);
}
__name(__facade_invoke__, "__facade_invoke__");

// .wrangler/tmp/bundle-cNED0N/middleware-loader.entry.ts
var __Facade_ScheduledController__ = class {
  constructor(scheduledTime, cron, noRetry) {
    this.scheduledTime = scheduledTime;
    this.cron = cron;
    this.#noRetry = noRetry;
  }
  #noRetry;
  noRetry() {
    if (!(this instanceof __Facade_ScheduledController__)) {
      throw new TypeError("Illegal invocation");
    }
    this.#noRetry();
  }
};
__name(__Facade_ScheduledController__, "__Facade_ScheduledController__");
function wrapExportedHandler(worker) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return worker;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  const fetchDispatcher = /* @__PURE__ */ __name(function(request, env, ctx) {
    if (worker.fetch === void 0) {
      throw new Error("Handler does not export a fetch() function.");
    }
    return worker.fetch(request, env, ctx);
  }, "fetchDispatcher");
  return {
    ...worker,
    fetch(request, env, ctx) {
      const dispatcher = /* @__PURE__ */ __name(function(type, init) {
        if (type === "scheduled" && worker.scheduled !== void 0) {
          const controller = new __Facade_ScheduledController__(
            Date.now(),
            init.cron ?? "",
            () => {
            }
          );
          return worker.scheduled(controller, env, ctx);
        }
      }, "dispatcher");
      return __facade_invoke__(request, env, ctx, dispatcher, fetchDispatcher);
    }
  };
}
__name(wrapExportedHandler, "wrapExportedHandler");
function wrapWorkerEntrypoint(klass) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return klass;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  return class extends klass {
    #fetchDispatcher = (request, env, ctx) => {
      this.env = env;
      this.ctx = ctx;
      if (super.fetch === void 0) {
        throw new Error("Entrypoint class does not define a fetch() function.");
      }
      return super.fetch(request);
    };
    #dispatcher = (type, init) => {
      if (type === "scheduled" && super.scheduled !== void 0) {
        const controller = new __Facade_ScheduledController__(
          Date.now(),
          init.cron ?? "",
          () => {
          }
        );
        return super.scheduled(controller);
      }
    };
    fetch(request) {
      return __facade_invoke__(
        request,
        this.env,
        this.ctx,
        this.#dispatcher,
        this.#fetchDispatcher
      );
    }
  };
}
__name(wrapWorkerEntrypoint, "wrapWorkerEntrypoint");
var WRAPPED_ENTRY;
if (typeof middleware_insertion_facade_default === "object") {
  WRAPPED_ENTRY = wrapExportedHandler(middleware_insertion_facade_default);
} else if (typeof middleware_insertion_facade_default === "function") {
  WRAPPED_ENTRY = wrapWorkerEntrypoint(middleware_insertion_facade_default);
}
var middleware_loader_entry_default = WRAPPED_ENTRY;
export {
  __INTERNAL_WRANGLER_MIDDLEWARE__,
  middleware_loader_entry_default as default
};
/*! Bundled license information:

uri-js/dist/es5/uri.all.js:
  (** @license URI.js v4.4.1 (c) 2011 Gary Court. License: http://github.com/garycourt/uri-js *)
*/
//# sourceMappingURL=worker.js.map
