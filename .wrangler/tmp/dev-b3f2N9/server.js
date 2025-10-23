var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
  get: (a2, b) => (typeof require !== "undefined" ? require : a2)[b]
}) : x)(function(x) {
  if (typeof require !== "undefined")
    return require.apply(this, arguments);
  throw new Error('Dynamic require of "' + x + '" is not supported');
});
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require2() {
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
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// .wrangler/tmp/bundle-ui2AQl/checked-fetch.js
function checkURL(request, init) {
  const url = request instanceof URL ? request : new URL(
    (typeof request === "string" ? new Request(request, init) : request).url
  );
  if (url.port && url.port !== "443" && url.protocol === "https:") {
    if (!urls.has(url.toString())) {
      urls.add(url.toString());
      console.warn(
        `WARNING: known issue with \`fetch()\` requests to custom HTTPS ports in published Workers:
 - ${url.toString()} - the custom port will be ignored when the Worker is published using the \`wrangler deploy\` command.
`
      );
    }
  }
}
var urls;
var init_checked_fetch = __esm({
  ".wrangler/tmp/bundle-ui2AQl/checked-fetch.js"() {
    urls = /* @__PURE__ */ new Set();
    __name(checkURL, "checkURL");
    globalThis.fetch = new Proxy(globalThis.fetch, {
      apply(target, thisArg, argArray) {
        const [request, init] = argArray;
        checkURL(request, init);
        return Reflect.apply(target, thisArg, argArray);
      }
    });
  }
});

// wrangler-modules-watch:wrangler:modules-watch
var init_wrangler_modules_watch = __esm({
  "wrangler-modules-watch:wrangler:modules-watch"() {
    init_checked_fetch();
    init_modules_watch_stub();
  }
});

// node_modules/wrangler/templates/modules-watch-stub.js
var init_modules_watch_stub = __esm({
  "node_modules/wrangler/templates/modules-watch-stub.js"() {
    init_wrangler_modules_watch();
  }
});

// node_modules/discord-interactions/dist/util.js
var require_util = __commonJS({
  "node_modules/discord-interactions/dist/util.js"(exports) {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.concatUint8Arrays = exports.valueToUint8Array = exports.subtleCrypto = void 0;
    function getSubtleCrypto() {
      if (typeof window !== "undefined" && window.crypto) {
        return window.crypto.subtle;
      }
      if (typeof globalThis !== "undefined" && globalThis.crypto) {
        return globalThis.crypto.subtle;
      }
      if (typeof crypto !== "undefined") {
        return crypto.subtle;
      }
      if (typeof __require === "function") {
        const cryptoPackage = "node:crypto";
        const crypto2 = __require(cryptoPackage);
        return crypto2.webcrypto.subtle;
      }
      throw new Error("No Web Crypto API implementation found");
    }
    __name(getSubtleCrypto, "getSubtleCrypto");
    exports.subtleCrypto = getSubtleCrypto();
    function valueToUint8Array(value, format) {
      if (value == null) {
        return new Uint8Array();
      }
      if (typeof value === "string") {
        if (format === "hex") {
          const matches = value.match(/.{1,2}/g);
          if (matches == null) {
            throw new Error("Value is not a valid hex string");
          }
          const hexVal = matches.map((byte) => Number.parseInt(byte, 16));
          return new Uint8Array(hexVal);
        }
        return new TextEncoder().encode(value);
      }
      try {
        if (Buffer.isBuffer(value)) {
          return new Uint8Array(value);
        }
      } catch (ex) {
      }
      if (value instanceof ArrayBuffer) {
        return new Uint8Array(value);
      }
      if (value instanceof Uint8Array) {
        return value;
      }
      throw new Error("Unrecognized value type, must be one of: string, Buffer, ArrayBuffer, Uint8Array");
    }
    __name(valueToUint8Array, "valueToUint8Array");
    exports.valueToUint8Array = valueToUint8Array;
    function concatUint8Arrays(arr1, arr2) {
      const merged = new Uint8Array(arr1.length + arr2.length);
      merged.set(arr1);
      merged.set(arr2, arr1.length);
      return merged;
    }
    __name(concatUint8Arrays, "concatUint8Arrays");
    exports.concatUint8Arrays = concatUint8Arrays;
  }
});

// node_modules/discord-interactions/dist/components.js
var require_components = __commonJS({
  "node_modules/discord-interactions/dist/components.js"(exports) {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TextStyleTypes = exports.ChannelTypes = exports.ButtonStyleTypes = exports.MessageComponentTypes = void 0;
    var MessageComponentTypes;
    (function(MessageComponentTypes2) {
      MessageComponentTypes2[MessageComponentTypes2["ACTION_ROW"] = 1] = "ACTION_ROW";
      MessageComponentTypes2[MessageComponentTypes2["BUTTON"] = 2] = "BUTTON";
      MessageComponentTypes2[MessageComponentTypes2["STRING_SELECT"] = 3] = "STRING_SELECT";
      MessageComponentTypes2[MessageComponentTypes2["INPUT_TEXT"] = 4] = "INPUT_TEXT";
      MessageComponentTypes2[MessageComponentTypes2["USER_SELECT"] = 5] = "USER_SELECT";
      MessageComponentTypes2[MessageComponentTypes2["ROLE_SELECT"] = 6] = "ROLE_SELECT";
      MessageComponentTypes2[MessageComponentTypes2["MENTIONABLE_SELECT"] = 7] = "MENTIONABLE_SELECT";
      MessageComponentTypes2[MessageComponentTypes2["CHANNEL_SELECT"] = 8] = "CHANNEL_SELECT";
    })(MessageComponentTypes || (exports.MessageComponentTypes = MessageComponentTypes = {}));
    var ButtonStyleTypes;
    (function(ButtonStyleTypes2) {
      ButtonStyleTypes2[ButtonStyleTypes2["PRIMARY"] = 1] = "PRIMARY";
      ButtonStyleTypes2[ButtonStyleTypes2["SECONDARY"] = 2] = "SECONDARY";
      ButtonStyleTypes2[ButtonStyleTypes2["SUCCESS"] = 3] = "SUCCESS";
      ButtonStyleTypes2[ButtonStyleTypes2["DANGER"] = 4] = "DANGER";
      ButtonStyleTypes2[ButtonStyleTypes2["LINK"] = 5] = "LINK";
      ButtonStyleTypes2[ButtonStyleTypes2["PREMIUM"] = 6] = "PREMIUM";
    })(ButtonStyleTypes || (exports.ButtonStyleTypes = ButtonStyleTypes = {}));
    var ChannelTypes;
    (function(ChannelTypes2) {
      ChannelTypes2[ChannelTypes2["DM"] = 1] = "DM";
      ChannelTypes2[ChannelTypes2["GROUP_DM"] = 3] = "GROUP_DM";
      ChannelTypes2[ChannelTypes2["GUILD_TEXT"] = 0] = "GUILD_TEXT";
      ChannelTypes2[ChannelTypes2["GUILD_VOICE"] = 2] = "GUILD_VOICE";
      ChannelTypes2[ChannelTypes2["GUILD_CATEGORY"] = 4] = "GUILD_CATEGORY";
      ChannelTypes2[ChannelTypes2["GUILD_ANNOUNCEMENT"] = 5] = "GUILD_ANNOUNCEMENT";
      ChannelTypes2[ChannelTypes2["GUILD_STORE"] = 6] = "GUILD_STORE";
    })(ChannelTypes || (exports.ChannelTypes = ChannelTypes = {}));
    var TextStyleTypes;
    (function(TextStyleTypes2) {
      TextStyleTypes2[TextStyleTypes2["SHORT"] = 1] = "SHORT";
      TextStyleTypes2[TextStyleTypes2["PARAGRAPH"] = 2] = "PARAGRAPH";
    })(TextStyleTypes || (exports.TextStyleTypes = TextStyleTypes = {}));
  }
});

// node_modules/discord-interactions/dist/index.js
var require_dist = __commonJS({
  "node_modules/discord-interactions/dist/index.js"(exports) {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o2, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o2, k2, desc);
    } : function(o2, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o2[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p2 in m)
        if (p2 !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p2))
          __createBinding(exports2, m, p2);
    };
    var __awaiter = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      __name(adopt, "adopt");
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        __name(fulfilled, "fulfilled");
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        __name(rejected, "rejected");
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        __name(step, "step");
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.verifyKeyMiddleware = exports.verifyKey = exports.InteractionResponseFlags = exports.InteractionResponseType = exports.InteractionType = void 0;
    var util_1 = require_util();
    var InteractionType2;
    (function(InteractionType3) {
      InteractionType3[InteractionType3["PING"] = 1] = "PING";
      InteractionType3[InteractionType3["APPLICATION_COMMAND"] = 2] = "APPLICATION_COMMAND";
      InteractionType3[InteractionType3["MESSAGE_COMPONENT"] = 3] = "MESSAGE_COMPONENT";
      InteractionType3[InteractionType3["APPLICATION_COMMAND_AUTOCOMPLETE"] = 4] = "APPLICATION_COMMAND_AUTOCOMPLETE";
      InteractionType3[InteractionType3["MODAL_SUBMIT"] = 5] = "MODAL_SUBMIT";
    })(InteractionType2 || (exports.InteractionType = InteractionType2 = {}));
    var InteractionResponseType2;
    (function(InteractionResponseType3) {
      InteractionResponseType3[InteractionResponseType3["PONG"] = 1] = "PONG";
      InteractionResponseType3[InteractionResponseType3["CHANNEL_MESSAGE_WITH_SOURCE"] = 4] = "CHANNEL_MESSAGE_WITH_SOURCE";
      InteractionResponseType3[InteractionResponseType3["DEFERRED_CHANNEL_MESSAGE_WITH_SOURCE"] = 5] = "DEFERRED_CHANNEL_MESSAGE_WITH_SOURCE";
      InteractionResponseType3[InteractionResponseType3["DEFERRED_UPDATE_MESSAGE"] = 6] = "DEFERRED_UPDATE_MESSAGE";
      InteractionResponseType3[InteractionResponseType3["UPDATE_MESSAGE"] = 7] = "UPDATE_MESSAGE";
      InteractionResponseType3[InteractionResponseType3["APPLICATION_COMMAND_AUTOCOMPLETE_RESULT"] = 8] = "APPLICATION_COMMAND_AUTOCOMPLETE_RESULT";
      InteractionResponseType3[InteractionResponseType3["MODAL"] = 9] = "MODAL";
      InteractionResponseType3[InteractionResponseType3["PREMIUM_REQUIRED"] = 10] = "PREMIUM_REQUIRED";
      InteractionResponseType3[InteractionResponseType3["LAUNCH_ACTIVITY"] = 12] = "LAUNCH_ACTIVITY";
    })(InteractionResponseType2 || (exports.InteractionResponseType = InteractionResponseType2 = {}));
    var InteractionResponseFlags2;
    (function(InteractionResponseFlags3) {
      InteractionResponseFlags3[InteractionResponseFlags3["EPHEMERAL"] = 64] = "EPHEMERAL";
    })(InteractionResponseFlags2 || (exports.InteractionResponseFlags = InteractionResponseFlags2 = {}));
    function verifyKey2(rawBody, signature, timestamp, clientPublicKey) {
      return __awaiter(this, void 0, void 0, function* () {
        try {
          const timestampData = (0, util_1.valueToUint8Array)(timestamp);
          const bodyData = (0, util_1.valueToUint8Array)(rawBody);
          const message = (0, util_1.concatUint8Arrays)(timestampData, bodyData);
          const publicKey = typeof clientPublicKey === "string" ? yield util_1.subtleCrypto.importKey("raw", (0, util_1.valueToUint8Array)(clientPublicKey, "hex"), {
            name: "ed25519",
            namedCurve: "ed25519"
          }, false, ["verify"]) : clientPublicKey;
          const isValid = yield util_1.subtleCrypto.verify({
            name: "ed25519"
          }, publicKey, (0, util_1.valueToUint8Array)(signature, "hex"), message);
          return isValid;
        } catch (ex) {
          return false;
        }
      });
    }
    __name(verifyKey2, "verifyKey");
    exports.verifyKey = verifyKey2;
    function verifyKeyMiddleware(clientPublicKey) {
      if (!clientPublicKey) {
        throw new Error("You must specify a Discord client public key");
      }
      return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
        const timestamp = req.header("X-Signature-Timestamp") || "";
        const signature = req.header("X-Signature-Ed25519") || "";
        if (!timestamp || !signature) {
          res.statusCode = 401;
          res.end("[discord-interactions] Invalid signature");
          return;
        }
        function onBodyComplete(rawBody) {
          return __awaiter(this, void 0, void 0, function* () {
            const isValid = yield verifyKey2(rawBody, signature, timestamp, clientPublicKey);
            if (!isValid) {
              res.statusCode = 401;
              res.end("[discord-interactions] Invalid signature");
              return;
            }
            const body = JSON.parse(rawBody.toString("utf-8")) || {};
            if (body.type === InteractionType2.PING) {
              res.setHeader("Content-Type", "application/json");
              res.end(JSON.stringify({
                type: InteractionResponseType2.PONG
              }));
              return;
            }
            req.body = body;
            next();
          });
        }
        __name(onBodyComplete, "onBodyComplete");
        if (req.body) {
          if (Buffer.isBuffer(req.body)) {
            yield onBodyComplete(req.body);
          } else if (typeof req.body === "string") {
            yield onBodyComplete(Buffer.from(req.body, "utf-8"));
          } else {
            console.warn("[discord-interactions]: req.body was tampered with, probably by some other middleware. We recommend disabling middleware for interaction routes so that req.body is a raw buffer.");
            yield onBodyComplete(Buffer.from(JSON.stringify(req.body), "utf-8"));
          }
        } else {
          const chunks = [];
          req.on("data", (chunk) => {
            chunks.push(chunk);
          });
          req.on("end", () => __awaiter(this, void 0, void 0, function* () {
            const rawBody = Buffer.concat(chunks);
            yield onBodyComplete(rawBody);
          }));
        }
      });
    }
    __name(verifyKeyMiddleware, "verifyKeyMiddleware");
    exports.verifyKeyMiddleware = verifyKeyMiddleware;
    __exportStar(require_components(), exports);
  }
});

// node_modules/lodash/isArray.js
var require_isArray = __commonJS({
  "node_modules/lodash/isArray.js"(exports, module) {
    init_checked_fetch();
    init_modules_watch_stub();
    var isArray = Array.isArray;
    module.exports = isArray;
  }
});

// node_modules/lodash/_freeGlobal.js
var require_freeGlobal = __commonJS({
  "node_modules/lodash/_freeGlobal.js"(exports, module) {
    init_checked_fetch();
    init_modules_watch_stub();
    var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
    module.exports = freeGlobal;
  }
});

// node_modules/lodash/_root.js
var require_root = __commonJS({
  "node_modules/lodash/_root.js"(exports, module) {
    init_checked_fetch();
    init_modules_watch_stub();
    var freeGlobal = require_freeGlobal();
    var freeSelf = typeof self == "object" && self && self.Object === Object && self;
    var root = freeGlobal || freeSelf || Function("return this")();
    module.exports = root;
  }
});

// node_modules/lodash/_Symbol.js
var require_Symbol = __commonJS({
  "node_modules/lodash/_Symbol.js"(exports, module) {
    init_checked_fetch();
    init_modules_watch_stub();
    var root = require_root();
    var Symbol2 = root.Symbol;
    module.exports = Symbol2;
  }
});

// node_modules/lodash/_getRawTag.js
var require_getRawTag = __commonJS({
  "node_modules/lodash/_getRawTag.js"(exports, module) {
    init_checked_fetch();
    init_modules_watch_stub();
    var Symbol2 = require_Symbol();
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    var nativeObjectToString = objectProto.toString;
    var symToStringTag = Symbol2 ? Symbol2.toStringTag : void 0;
    function getRawTag(value) {
      var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
      try {
        value[symToStringTag] = void 0;
        var unmasked = true;
      } catch (e) {
      }
      var result = nativeObjectToString.call(value);
      if (unmasked) {
        if (isOwn) {
          value[symToStringTag] = tag;
        } else {
          delete value[symToStringTag];
        }
      }
      return result;
    }
    __name(getRawTag, "getRawTag");
    module.exports = getRawTag;
  }
});

// node_modules/lodash/_objectToString.js
var require_objectToString = __commonJS({
  "node_modules/lodash/_objectToString.js"(exports, module) {
    init_checked_fetch();
    init_modules_watch_stub();
    var objectProto = Object.prototype;
    var nativeObjectToString = objectProto.toString;
    function objectToString(value) {
      return nativeObjectToString.call(value);
    }
    __name(objectToString, "objectToString");
    module.exports = objectToString;
  }
});

// node_modules/lodash/_baseGetTag.js
var require_baseGetTag = __commonJS({
  "node_modules/lodash/_baseGetTag.js"(exports, module) {
    init_checked_fetch();
    init_modules_watch_stub();
    var Symbol2 = require_Symbol();
    var getRawTag = require_getRawTag();
    var objectToString = require_objectToString();
    var nullTag = "[object Null]";
    var undefinedTag = "[object Undefined]";
    var symToStringTag = Symbol2 ? Symbol2.toStringTag : void 0;
    function baseGetTag(value) {
      if (value == null) {
        return value === void 0 ? undefinedTag : nullTag;
      }
      return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
    }
    __name(baseGetTag, "baseGetTag");
    module.exports = baseGetTag;
  }
});

// node_modules/lodash/isObjectLike.js
var require_isObjectLike = __commonJS({
  "node_modules/lodash/isObjectLike.js"(exports, module) {
    init_checked_fetch();
    init_modules_watch_stub();
    function isObjectLike(value) {
      return value != null && typeof value == "object";
    }
    __name(isObjectLike, "isObjectLike");
    module.exports = isObjectLike;
  }
});

// node_modules/lodash/isSymbol.js
var require_isSymbol = __commonJS({
  "node_modules/lodash/isSymbol.js"(exports, module) {
    init_checked_fetch();
    init_modules_watch_stub();
    var baseGetTag = require_baseGetTag();
    var isObjectLike = require_isObjectLike();
    var symbolTag = "[object Symbol]";
    function isSymbol(value) {
      return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag;
    }
    __name(isSymbol, "isSymbol");
    module.exports = isSymbol;
  }
});

// node_modules/lodash/_isKey.js
var require_isKey = __commonJS({
  "node_modules/lodash/_isKey.js"(exports, module) {
    init_checked_fetch();
    init_modules_watch_stub();
    var isArray = require_isArray();
    var isSymbol = require_isSymbol();
    var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/;
    var reIsPlainProp = /^\w*$/;
    function isKey(value, object) {
      if (isArray(value)) {
        return false;
      }
      var type = typeof value;
      if (type == "number" || type == "symbol" || type == "boolean" || value == null || isSymbol(value)) {
        return true;
      }
      return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
    }
    __name(isKey, "isKey");
    module.exports = isKey;
  }
});

// node_modules/lodash/isObject.js
var require_isObject = __commonJS({
  "node_modules/lodash/isObject.js"(exports, module) {
    init_checked_fetch();
    init_modules_watch_stub();
    function isObject(value) {
      var type = typeof value;
      return value != null && (type == "object" || type == "function");
    }
    __name(isObject, "isObject");
    module.exports = isObject;
  }
});

// node_modules/lodash/isFunction.js
var require_isFunction = __commonJS({
  "node_modules/lodash/isFunction.js"(exports, module) {
    init_checked_fetch();
    init_modules_watch_stub();
    var baseGetTag = require_baseGetTag();
    var isObject = require_isObject();
    var asyncTag = "[object AsyncFunction]";
    var funcTag = "[object Function]";
    var genTag = "[object GeneratorFunction]";
    var proxyTag = "[object Proxy]";
    function isFunction(value) {
      if (!isObject(value)) {
        return false;
      }
      var tag = baseGetTag(value);
      return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
    }
    __name(isFunction, "isFunction");
    module.exports = isFunction;
  }
});

// node_modules/lodash/_coreJsData.js
var require_coreJsData = __commonJS({
  "node_modules/lodash/_coreJsData.js"(exports, module) {
    init_checked_fetch();
    init_modules_watch_stub();
    var root = require_root();
    var coreJsData = root["__core-js_shared__"];
    module.exports = coreJsData;
  }
});

// node_modules/lodash/_isMasked.js
var require_isMasked = __commonJS({
  "node_modules/lodash/_isMasked.js"(exports, module) {
    init_checked_fetch();
    init_modules_watch_stub();
    var coreJsData = require_coreJsData();
    var maskSrcKey = function() {
      var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
      return uid ? "Symbol(src)_1." + uid : "";
    }();
    function isMasked(func) {
      return !!maskSrcKey && maskSrcKey in func;
    }
    __name(isMasked, "isMasked");
    module.exports = isMasked;
  }
});

// node_modules/lodash/_toSource.js
var require_toSource = __commonJS({
  "node_modules/lodash/_toSource.js"(exports, module) {
    init_checked_fetch();
    init_modules_watch_stub();
    var funcProto = Function.prototype;
    var funcToString = funcProto.toString;
    function toSource(func) {
      if (func != null) {
        try {
          return funcToString.call(func);
        } catch (e) {
        }
        try {
          return func + "";
        } catch (e) {
        }
      }
      return "";
    }
    __name(toSource, "toSource");
    module.exports = toSource;
  }
});

// node_modules/lodash/_baseIsNative.js
var require_baseIsNative = __commonJS({
  "node_modules/lodash/_baseIsNative.js"(exports, module) {
    init_checked_fetch();
    init_modules_watch_stub();
    var isFunction = require_isFunction();
    var isMasked = require_isMasked();
    var isObject = require_isObject();
    var toSource = require_toSource();
    var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
    var reIsHostCtor = /^\[object .+?Constructor\]$/;
    var funcProto = Function.prototype;
    var objectProto = Object.prototype;
    var funcToString = funcProto.toString;
    var hasOwnProperty = objectProto.hasOwnProperty;
    var reIsNative = RegExp(
      "^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
    );
    function baseIsNative(value) {
      if (!isObject(value) || isMasked(value)) {
        return false;
      }
      var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
      return pattern.test(toSource(value));
    }
    __name(baseIsNative, "baseIsNative");
    module.exports = baseIsNative;
  }
});

// node_modules/lodash/_getValue.js
var require_getValue = __commonJS({
  "node_modules/lodash/_getValue.js"(exports, module) {
    init_checked_fetch();
    init_modules_watch_stub();
    function getValue(object, key) {
      return object == null ? void 0 : object[key];
    }
    __name(getValue, "getValue");
    module.exports = getValue;
  }
});

// node_modules/lodash/_getNative.js
var require_getNative = __commonJS({
  "node_modules/lodash/_getNative.js"(exports, module) {
    init_checked_fetch();
    init_modules_watch_stub();
    var baseIsNative = require_baseIsNative();
    var getValue = require_getValue();
    function getNative(object, key) {
      var value = getValue(object, key);
      return baseIsNative(value) ? value : void 0;
    }
    __name(getNative, "getNative");
    module.exports = getNative;
  }
});

// node_modules/lodash/_nativeCreate.js
var require_nativeCreate = __commonJS({
  "node_modules/lodash/_nativeCreate.js"(exports, module) {
    init_checked_fetch();
    init_modules_watch_stub();
    var getNative = require_getNative();
    var nativeCreate = getNative(Object, "create");
    module.exports = nativeCreate;
  }
});

// node_modules/lodash/_hashClear.js
var require_hashClear = __commonJS({
  "node_modules/lodash/_hashClear.js"(exports, module) {
    init_checked_fetch();
    init_modules_watch_stub();
    var nativeCreate = require_nativeCreate();
    function hashClear() {
      this.__data__ = nativeCreate ? nativeCreate(null) : {};
      this.size = 0;
    }
    __name(hashClear, "hashClear");
    module.exports = hashClear;
  }
});

// node_modules/lodash/_hashDelete.js
var require_hashDelete = __commonJS({
  "node_modules/lodash/_hashDelete.js"(exports, module) {
    init_checked_fetch();
    init_modules_watch_stub();
    function hashDelete(key) {
      var result = this.has(key) && delete this.__data__[key];
      this.size -= result ? 1 : 0;
      return result;
    }
    __name(hashDelete, "hashDelete");
    module.exports = hashDelete;
  }
});

// node_modules/lodash/_hashGet.js
var require_hashGet = __commonJS({
  "node_modules/lodash/_hashGet.js"(exports, module) {
    init_checked_fetch();
    init_modules_watch_stub();
    var nativeCreate = require_nativeCreate();
    var HASH_UNDEFINED = "__lodash_hash_undefined__";
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function hashGet(key) {
      var data = this.__data__;
      if (nativeCreate) {
        var result = data[key];
        return result === HASH_UNDEFINED ? void 0 : result;
      }
      return hasOwnProperty.call(data, key) ? data[key] : void 0;
    }
    __name(hashGet, "hashGet");
    module.exports = hashGet;
  }
});

// node_modules/lodash/_hashHas.js
var require_hashHas = __commonJS({
  "node_modules/lodash/_hashHas.js"(exports, module) {
    init_checked_fetch();
    init_modules_watch_stub();
    var nativeCreate = require_nativeCreate();
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function hashHas(key) {
      var data = this.__data__;
      return nativeCreate ? data[key] !== void 0 : hasOwnProperty.call(data, key);
    }
    __name(hashHas, "hashHas");
    module.exports = hashHas;
  }
});

// node_modules/lodash/_hashSet.js
var require_hashSet = __commonJS({
  "node_modules/lodash/_hashSet.js"(exports, module) {
    init_checked_fetch();
    init_modules_watch_stub();
    var nativeCreate = require_nativeCreate();
    var HASH_UNDEFINED = "__lodash_hash_undefined__";
    function hashSet(key, value) {
      var data = this.__data__;
      this.size += this.has(key) ? 0 : 1;
      data[key] = nativeCreate && value === void 0 ? HASH_UNDEFINED : value;
      return this;
    }
    __name(hashSet, "hashSet");
    module.exports = hashSet;
  }
});

// node_modules/lodash/_Hash.js
var require_Hash = __commonJS({
  "node_modules/lodash/_Hash.js"(exports, module) {
    init_checked_fetch();
    init_modules_watch_stub();
    var hashClear = require_hashClear();
    var hashDelete = require_hashDelete();
    var hashGet = require_hashGet();
    var hashHas = require_hashHas();
    var hashSet = require_hashSet();
    function Hash(entries) {
      var index = -1, length = entries == null ? 0 : entries.length;
      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    __name(Hash, "Hash");
    Hash.prototype.clear = hashClear;
    Hash.prototype["delete"] = hashDelete;
    Hash.prototype.get = hashGet;
    Hash.prototype.has = hashHas;
    Hash.prototype.set = hashSet;
    module.exports = Hash;
  }
});

// node_modules/lodash/_listCacheClear.js
var require_listCacheClear = __commonJS({
  "node_modules/lodash/_listCacheClear.js"(exports, module) {
    init_checked_fetch();
    init_modules_watch_stub();
    function listCacheClear() {
      this.__data__ = [];
      this.size = 0;
    }
    __name(listCacheClear, "listCacheClear");
    module.exports = listCacheClear;
  }
});

// node_modules/lodash/eq.js
var require_eq = __commonJS({
  "node_modules/lodash/eq.js"(exports, module) {
    init_checked_fetch();
    init_modules_watch_stub();
    function eq(value, other) {
      return value === other || value !== value && other !== other;
    }
    __name(eq, "eq");
    module.exports = eq;
  }
});

// node_modules/lodash/_assocIndexOf.js
var require_assocIndexOf = __commonJS({
  "node_modules/lodash/_assocIndexOf.js"(exports, module) {
    init_checked_fetch();
    init_modules_watch_stub();
    var eq = require_eq();
    function assocIndexOf(array, key) {
      var length = array.length;
      while (length--) {
        if (eq(array[length][0], key)) {
          return length;
        }
      }
      return -1;
    }
    __name(assocIndexOf, "assocIndexOf");
    module.exports = assocIndexOf;
  }
});

// node_modules/lodash/_listCacheDelete.js
var require_listCacheDelete = __commonJS({
  "node_modules/lodash/_listCacheDelete.js"(exports, module) {
    init_checked_fetch();
    init_modules_watch_stub();
    var assocIndexOf = require_assocIndexOf();
    var arrayProto = Array.prototype;
    var splice = arrayProto.splice;
    function listCacheDelete(key) {
      var data = this.__data__, index = assocIndexOf(data, key);
      if (index < 0) {
        return false;
      }
      var lastIndex = data.length - 1;
      if (index == lastIndex) {
        data.pop();
      } else {
        splice.call(data, index, 1);
      }
      --this.size;
      return true;
    }
    __name(listCacheDelete, "listCacheDelete");
    module.exports = listCacheDelete;
  }
});

// node_modules/lodash/_listCacheGet.js
var require_listCacheGet = __commonJS({
  "node_modules/lodash/_listCacheGet.js"(exports, module) {
    init_checked_fetch();
    init_modules_watch_stub();
    var assocIndexOf = require_assocIndexOf();
    function listCacheGet(key) {
      var data = this.__data__, index = assocIndexOf(data, key);
      return index < 0 ? void 0 : data[index][1];
    }
    __name(listCacheGet, "listCacheGet");
    module.exports = listCacheGet;
  }
});

// node_modules/lodash/_listCacheHas.js
var require_listCacheHas = __commonJS({
  "node_modules/lodash/_listCacheHas.js"(exports, module) {
    init_checked_fetch();
    init_modules_watch_stub();
    var assocIndexOf = require_assocIndexOf();
    function listCacheHas(key) {
      return assocIndexOf(this.__data__, key) > -1;
    }
    __name(listCacheHas, "listCacheHas");
    module.exports = listCacheHas;
  }
});

// node_modules/lodash/_listCacheSet.js
var require_listCacheSet = __commonJS({
  "node_modules/lodash/_listCacheSet.js"(exports, module) {
    init_checked_fetch();
    init_modules_watch_stub();
    var assocIndexOf = require_assocIndexOf();
    function listCacheSet(key, value) {
      var data = this.__data__, index = assocIndexOf(data, key);
      if (index < 0) {
        ++this.size;
        data.push([key, value]);
      } else {
        data[index][1] = value;
      }
      return this;
    }
    __name(listCacheSet, "listCacheSet");
    module.exports = listCacheSet;
  }
});

// node_modules/lodash/_ListCache.js
var require_ListCache = __commonJS({
  "node_modules/lodash/_ListCache.js"(exports, module) {
    init_checked_fetch();
    init_modules_watch_stub();
    var listCacheClear = require_listCacheClear();
    var listCacheDelete = require_listCacheDelete();
    var listCacheGet = require_listCacheGet();
    var listCacheHas = require_listCacheHas();
    var listCacheSet = require_listCacheSet();
    function ListCache(entries) {
      var index = -1, length = entries == null ? 0 : entries.length;
      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    __name(ListCache, "ListCache");
    ListCache.prototype.clear = listCacheClear;
    ListCache.prototype["delete"] = listCacheDelete;
    ListCache.prototype.get = listCacheGet;
    ListCache.prototype.has = listCacheHas;
    ListCache.prototype.set = listCacheSet;
    module.exports = ListCache;
  }
});

// node_modules/lodash/_Map.js
var require_Map = __commonJS({
  "node_modules/lodash/_Map.js"(exports, module) {
    init_checked_fetch();
    init_modules_watch_stub();
    var getNative = require_getNative();
    var root = require_root();
    var Map2 = getNative(root, "Map");
    module.exports = Map2;
  }
});

// node_modules/lodash/_mapCacheClear.js
var require_mapCacheClear = __commonJS({
  "node_modules/lodash/_mapCacheClear.js"(exports, module) {
    init_checked_fetch();
    init_modules_watch_stub();
    var Hash = require_Hash();
    var ListCache = require_ListCache();
    var Map2 = require_Map();
    function mapCacheClear() {
      this.size = 0;
      this.__data__ = {
        "hash": new Hash(),
        "map": new (Map2 || ListCache)(),
        "string": new Hash()
      };
    }
    __name(mapCacheClear, "mapCacheClear");
    module.exports = mapCacheClear;
  }
});

// node_modules/lodash/_isKeyable.js
var require_isKeyable = __commonJS({
  "node_modules/lodash/_isKeyable.js"(exports, module) {
    init_checked_fetch();
    init_modules_watch_stub();
    function isKeyable(value) {
      var type = typeof value;
      return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
    }
    __name(isKeyable, "isKeyable");
    module.exports = isKeyable;
  }
});

// node_modules/lodash/_getMapData.js
var require_getMapData = __commonJS({
  "node_modules/lodash/_getMapData.js"(exports, module) {
    init_checked_fetch();
    init_modules_watch_stub();
    var isKeyable = require_isKeyable();
    function getMapData(map, key) {
      var data = map.__data__;
      return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
    }
    __name(getMapData, "getMapData");
    module.exports = getMapData;
  }
});

// node_modules/lodash/_mapCacheDelete.js
var require_mapCacheDelete = __commonJS({
  "node_modules/lodash/_mapCacheDelete.js"(exports, module) {
    init_checked_fetch();
    init_modules_watch_stub();
    var getMapData = require_getMapData();
    function mapCacheDelete(key) {
      var result = getMapData(this, key)["delete"](key);
      this.size -= result ? 1 : 0;
      return result;
    }
    __name(mapCacheDelete, "mapCacheDelete");
    module.exports = mapCacheDelete;
  }
});

// node_modules/lodash/_mapCacheGet.js
var require_mapCacheGet = __commonJS({
  "node_modules/lodash/_mapCacheGet.js"(exports, module) {
    init_checked_fetch();
    init_modules_watch_stub();
    var getMapData = require_getMapData();
    function mapCacheGet(key) {
      return getMapData(this, key).get(key);
    }
    __name(mapCacheGet, "mapCacheGet");
    module.exports = mapCacheGet;
  }
});

// node_modules/lodash/_mapCacheHas.js
var require_mapCacheHas = __commonJS({
  "node_modules/lodash/_mapCacheHas.js"(exports, module) {
    init_checked_fetch();
    init_modules_watch_stub();
    var getMapData = require_getMapData();
    function mapCacheHas(key) {
      return getMapData(this, key).has(key);
    }
    __name(mapCacheHas, "mapCacheHas");
    module.exports = mapCacheHas;
  }
});

// node_modules/lodash/_mapCacheSet.js
var require_mapCacheSet = __commonJS({
  "node_modules/lodash/_mapCacheSet.js"(exports, module) {
    init_checked_fetch();
    init_modules_watch_stub();
    var getMapData = require_getMapData();
    function mapCacheSet(key, value) {
      var data = getMapData(this, key), size = data.size;
      data.set(key, value);
      this.size += data.size == size ? 0 : 1;
      return this;
    }
    __name(mapCacheSet, "mapCacheSet");
    module.exports = mapCacheSet;
  }
});

// node_modules/lodash/_MapCache.js
var require_MapCache = __commonJS({
  "node_modules/lodash/_MapCache.js"(exports, module) {
    init_checked_fetch();
    init_modules_watch_stub();
    var mapCacheClear = require_mapCacheClear();
    var mapCacheDelete = require_mapCacheDelete();
    var mapCacheGet = require_mapCacheGet();
    var mapCacheHas = require_mapCacheHas();
    var mapCacheSet = require_mapCacheSet();
    function MapCache(entries) {
      var index = -1, length = entries == null ? 0 : entries.length;
      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    __name(MapCache, "MapCache");
    MapCache.prototype.clear = mapCacheClear;
    MapCache.prototype["delete"] = mapCacheDelete;
    MapCache.prototype.get = mapCacheGet;
    MapCache.prototype.has = mapCacheHas;
    MapCache.prototype.set = mapCacheSet;
    module.exports = MapCache;
  }
});

// node_modules/lodash/memoize.js
var require_memoize = __commonJS({
  "node_modules/lodash/memoize.js"(exports, module) {
    init_checked_fetch();
    init_modules_watch_stub();
    var MapCache = require_MapCache();
    var FUNC_ERROR_TEXT = "Expected a function";
    function memoize(func, resolver) {
      if (typeof func != "function" || resolver != null && typeof resolver != "function") {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      var memoized = /* @__PURE__ */ __name(function() {
        var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
        if (cache.has(key)) {
          return cache.get(key);
        }
        var result = func.apply(this, args);
        memoized.cache = cache.set(key, result) || cache;
        return result;
      }, "memoized");
      memoized.cache = new (memoize.Cache || MapCache)();
      return memoized;
    }
    __name(memoize, "memoize");
    memoize.Cache = MapCache;
    module.exports = memoize;
  }
});

// node_modules/lodash/_memoizeCapped.js
var require_memoizeCapped = __commonJS({
  "node_modules/lodash/_memoizeCapped.js"(exports, module) {
    init_checked_fetch();
    init_modules_watch_stub();
    var memoize = require_memoize();
    var MAX_MEMOIZE_SIZE = 500;
    function memoizeCapped(func) {
      var result = memoize(func, function(key) {
        if (cache.size === MAX_MEMOIZE_SIZE) {
          cache.clear();
        }
        return key;
      });
      var cache = result.cache;
      return result;
    }
    __name(memoizeCapped, "memoizeCapped");
    module.exports = memoizeCapped;
  }
});

// node_modules/lodash/_stringToPath.js
var require_stringToPath = __commonJS({
  "node_modules/lodash/_stringToPath.js"(exports, module) {
    init_checked_fetch();
    init_modules_watch_stub();
    var memoizeCapped = require_memoizeCapped();
    var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
    var reEscapeChar = /\\(\\)?/g;
    var stringToPath = memoizeCapped(function(string) {
      var result = [];
      if (string.charCodeAt(0) === 46) {
        result.push("");
      }
      string.replace(rePropName, function(match, number, quote, subString) {
        result.push(quote ? subString.replace(reEscapeChar, "$1") : number || match);
      });
      return result;
    });
    module.exports = stringToPath;
  }
});

// node_modules/lodash/_arrayMap.js
var require_arrayMap = __commonJS({
  "node_modules/lodash/_arrayMap.js"(exports, module) {
    init_checked_fetch();
    init_modules_watch_stub();
    function arrayMap(array, iteratee) {
      var index = -1, length = array == null ? 0 : array.length, result = Array(length);
      while (++index < length) {
        result[index] = iteratee(array[index], index, array);
      }
      return result;
    }
    __name(arrayMap, "arrayMap");
    module.exports = arrayMap;
  }
});

// node_modules/lodash/_baseToString.js
var require_baseToString = __commonJS({
  "node_modules/lodash/_baseToString.js"(exports, module) {
    init_checked_fetch();
    init_modules_watch_stub();
    var Symbol2 = require_Symbol();
    var arrayMap = require_arrayMap();
    var isArray = require_isArray();
    var isSymbol = require_isSymbol();
    var INFINITY = 1 / 0;
    var symbolProto = Symbol2 ? Symbol2.prototype : void 0;
    var symbolToString = symbolProto ? symbolProto.toString : void 0;
    function baseToString(value) {
      if (typeof value == "string") {
        return value;
      }
      if (isArray(value)) {
        return arrayMap(value, baseToString) + "";
      }
      if (isSymbol(value)) {
        return symbolToString ? symbolToString.call(value) : "";
      }
      var result = value + "";
      return result == "0" && 1 / value == -INFINITY ? "-0" : result;
    }
    __name(baseToString, "baseToString");
    module.exports = baseToString;
  }
});

// node_modules/lodash/toString.js
var require_toString = __commonJS({
  "node_modules/lodash/toString.js"(exports, module) {
    init_checked_fetch();
    init_modules_watch_stub();
    var baseToString = require_baseToString();
    function toString(value) {
      return value == null ? "" : baseToString(value);
    }
    __name(toString, "toString");
    module.exports = toString;
  }
});

// node_modules/lodash/_castPath.js
var require_castPath = __commonJS({
  "node_modules/lodash/_castPath.js"(exports, module) {
    init_checked_fetch();
    init_modules_watch_stub();
    var isArray = require_isArray();
    var isKey = require_isKey();
    var stringToPath = require_stringToPath();
    var toString = require_toString();
    function castPath(value, object) {
      if (isArray(value)) {
        return value;
      }
      return isKey(value, object) ? [value] : stringToPath(toString(value));
    }
    __name(castPath, "castPath");
    module.exports = castPath;
  }
});

// node_modules/lodash/_toKey.js
var require_toKey = __commonJS({
  "node_modules/lodash/_toKey.js"(exports, module) {
    init_checked_fetch();
    init_modules_watch_stub();
    var isSymbol = require_isSymbol();
    var INFINITY = 1 / 0;
    function toKey(value) {
      if (typeof value == "string" || isSymbol(value)) {
        return value;
      }
      var result = value + "";
      return result == "0" && 1 / value == -INFINITY ? "-0" : result;
    }
    __name(toKey, "toKey");
    module.exports = toKey;
  }
});

// node_modules/lodash/_baseGet.js
var require_baseGet = __commonJS({
  "node_modules/lodash/_baseGet.js"(exports, module) {
    init_checked_fetch();
    init_modules_watch_stub();
    var castPath = require_castPath();
    var toKey = require_toKey();
    function baseGet(object, path) {
      path = castPath(path, object);
      var index = 0, length = path.length;
      while (object != null && index < length) {
        object = object[toKey(path[index++])];
      }
      return index && index == length ? object : void 0;
    }
    __name(baseGet, "baseGet");
    module.exports = baseGet;
  }
});

// node_modules/lodash/get.js
var require_get = __commonJS({
  "node_modules/lodash/get.js"(exports, module) {
    init_checked_fetch();
    init_modules_watch_stub();
    var baseGet = require_baseGet();
    function get(object, path, defaultValue) {
      var result = object == null ? void 0 : baseGet(object, path);
      return result === void 0 ? defaultValue : result;
    }
    __name(get, "get");
    module.exports = get;
  }
});

// node_modules/fast-deep-equal/es6/index.js
var require_es6 = __commonJS({
  "node_modules/fast-deep-equal/es6/index.js"(exports, module) {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    module.exports = /* @__PURE__ */ __name(function equal(a2, b) {
      if (a2 === b)
        return true;
      if (a2 && b && typeof a2 == "object" && typeof b == "object") {
        if (a2.constructor !== b.constructor)
          return false;
        var length, i, keys;
        if (Array.isArray(a2)) {
          length = a2.length;
          if (length != b.length)
            return false;
          for (i = length; i-- !== 0; )
            if (!equal(a2[i], b[i]))
              return false;
          return true;
        }
        if (a2 instanceof Map && b instanceof Map) {
          if (a2.size !== b.size)
            return false;
          for (i of a2.entries())
            if (!b.has(i[0]))
              return false;
          for (i of a2.entries())
            if (!equal(i[1], b.get(i[0])))
              return false;
          return true;
        }
        if (a2 instanceof Set && b instanceof Set) {
          if (a2.size !== b.size)
            return false;
          for (i of a2.entries())
            if (!b.has(i[0]))
              return false;
          return true;
        }
        if (ArrayBuffer.isView(a2) && ArrayBuffer.isView(b)) {
          length = a2.length;
          if (length != b.length)
            return false;
          for (i = length; i-- !== 0; )
            if (a2[i] !== b[i])
              return false;
          return true;
        }
        if (a2.constructor === RegExp)
          return a2.source === b.source && a2.flags === b.flags;
        if (a2.valueOf !== Object.prototype.valueOf)
          return a2.valueOf() === b.valueOf();
        if (a2.toString !== Object.prototype.toString)
          return a2.toString() === b.toString();
        keys = Object.keys(a2);
        length = keys.length;
        if (length !== Object.keys(b).length)
          return false;
        for (i = length; i-- !== 0; )
          if (!Object.prototype.hasOwnProperty.call(b, keys[i]))
            return false;
        for (i = length; i-- !== 0; ) {
          var key = keys[i];
          if (!equal(a2[key], b[key]))
            return false;
        }
        return true;
      }
      return a2 !== a2 && b !== b;
    }, "equal");
  }
});

// node_modules/lodash/_setCacheAdd.js
var require_setCacheAdd = __commonJS({
  "node_modules/lodash/_setCacheAdd.js"(exports, module) {
    init_checked_fetch();
    init_modules_watch_stub();
    var HASH_UNDEFINED = "__lodash_hash_undefined__";
    function setCacheAdd(value) {
      this.__data__.set(value, HASH_UNDEFINED);
      return this;
    }
    __name(setCacheAdd, "setCacheAdd");
    module.exports = setCacheAdd;
  }
});

// node_modules/lodash/_setCacheHas.js
var require_setCacheHas = __commonJS({
  "node_modules/lodash/_setCacheHas.js"(exports, module) {
    init_checked_fetch();
    init_modules_watch_stub();
    function setCacheHas(value) {
      return this.__data__.has(value);
    }
    __name(setCacheHas, "setCacheHas");
    module.exports = setCacheHas;
  }
});

// node_modules/lodash/_SetCache.js
var require_SetCache = __commonJS({
  "node_modules/lodash/_SetCache.js"(exports, module) {
    init_checked_fetch();
    init_modules_watch_stub();
    var MapCache = require_MapCache();
    var setCacheAdd = require_setCacheAdd();
    var setCacheHas = require_setCacheHas();
    function SetCache(values) {
      var index = -1, length = values == null ? 0 : values.length;
      this.__data__ = new MapCache();
      while (++index < length) {
        this.add(values[index]);
      }
    }
    __name(SetCache, "SetCache");
    SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
    SetCache.prototype.has = setCacheHas;
    module.exports = SetCache;
  }
});

// node_modules/lodash/_baseFindIndex.js
var require_baseFindIndex = __commonJS({
  "node_modules/lodash/_baseFindIndex.js"(exports, module) {
    init_checked_fetch();
    init_modules_watch_stub();
    function baseFindIndex(array, predicate, fromIndex, fromRight) {
      var length = array.length, index = fromIndex + (fromRight ? 1 : -1);
      while (fromRight ? index-- : ++index < length) {
        if (predicate(array[index], index, array)) {
          return index;
        }
      }
      return -1;
    }
    __name(baseFindIndex, "baseFindIndex");
    module.exports = baseFindIndex;
  }
});

// node_modules/lodash/_baseIsNaN.js
var require_baseIsNaN = __commonJS({
  "node_modules/lodash/_baseIsNaN.js"(exports, module) {
    init_checked_fetch();
    init_modules_watch_stub();
    function baseIsNaN(value) {
      return value !== value;
    }
    __name(baseIsNaN, "baseIsNaN");
    module.exports = baseIsNaN;
  }
});

// node_modules/lodash/_strictIndexOf.js
var require_strictIndexOf = __commonJS({
  "node_modules/lodash/_strictIndexOf.js"(exports, module) {
    init_checked_fetch();
    init_modules_watch_stub();
    function strictIndexOf(array, value, fromIndex) {
      var index = fromIndex - 1, length = array.length;
      while (++index < length) {
        if (array[index] === value) {
          return index;
        }
      }
      return -1;
    }
    __name(strictIndexOf, "strictIndexOf");
    module.exports = strictIndexOf;
  }
});

// node_modules/lodash/_baseIndexOf.js
var require_baseIndexOf = __commonJS({
  "node_modules/lodash/_baseIndexOf.js"(exports, module) {
    init_checked_fetch();
    init_modules_watch_stub();
    var baseFindIndex = require_baseFindIndex();
    var baseIsNaN = require_baseIsNaN();
    var strictIndexOf = require_strictIndexOf();
    function baseIndexOf(array, value, fromIndex) {
      return value === value ? strictIndexOf(array, value, fromIndex) : baseFindIndex(array, baseIsNaN, fromIndex);
    }
    __name(baseIndexOf, "baseIndexOf");
    module.exports = baseIndexOf;
  }
});

// node_modules/lodash/_arrayIncludes.js
var require_arrayIncludes = __commonJS({
  "node_modules/lodash/_arrayIncludes.js"(exports, module) {
    init_checked_fetch();
    init_modules_watch_stub();
    var baseIndexOf = require_baseIndexOf();
    function arrayIncludes(array, value) {
      var length = array == null ? 0 : array.length;
      return !!length && baseIndexOf(array, value, 0) > -1;
    }
    __name(arrayIncludes, "arrayIncludes");
    module.exports = arrayIncludes;
  }
});

// node_modules/lodash/_arrayIncludesWith.js
var require_arrayIncludesWith = __commonJS({
  "node_modules/lodash/_arrayIncludesWith.js"(exports, module) {
    init_checked_fetch();
    init_modules_watch_stub();
    function arrayIncludesWith(array, value, comparator) {
      var index = -1, length = array == null ? 0 : array.length;
      while (++index < length) {
        if (comparator(value, array[index])) {
          return true;
        }
      }
      return false;
    }
    __name(arrayIncludesWith, "arrayIncludesWith");
    module.exports = arrayIncludesWith;
  }
});

// node_modules/lodash/_cacheHas.js
var require_cacheHas = __commonJS({
  "node_modules/lodash/_cacheHas.js"(exports, module) {
    init_checked_fetch();
    init_modules_watch_stub();
    function cacheHas(cache, key) {
      return cache.has(key);
    }
    __name(cacheHas, "cacheHas");
    module.exports = cacheHas;
  }
});

// node_modules/lodash/_Set.js
var require_Set = __commonJS({
  "node_modules/lodash/_Set.js"(exports, module) {
    init_checked_fetch();
    init_modules_watch_stub();
    var getNative = require_getNative();
    var root = require_root();
    var Set2 = getNative(root, "Set");
    module.exports = Set2;
  }
});

// node_modules/lodash/noop.js
var require_noop = __commonJS({
  "node_modules/lodash/noop.js"(exports, module) {
    init_checked_fetch();
    init_modules_watch_stub();
    function noop() {
    }
    __name(noop, "noop");
    module.exports = noop;
  }
});

// node_modules/lodash/_setToArray.js
var require_setToArray = __commonJS({
  "node_modules/lodash/_setToArray.js"(exports, module) {
    init_checked_fetch();
    init_modules_watch_stub();
    function setToArray(set) {
      var index = -1, result = Array(set.size);
      set.forEach(function(value) {
        result[++index] = value;
      });
      return result;
    }
    __name(setToArray, "setToArray");
    module.exports = setToArray;
  }
});

// node_modules/lodash/_createSet.js
var require_createSet = __commonJS({
  "node_modules/lodash/_createSet.js"(exports, module) {
    init_checked_fetch();
    init_modules_watch_stub();
    var Set2 = require_Set();
    var noop = require_noop();
    var setToArray = require_setToArray();
    var INFINITY = 1 / 0;
    var createSet = !(Set2 && 1 / setToArray(new Set2([, -0]))[1] == INFINITY) ? noop : function(values) {
      return new Set2(values);
    };
    module.exports = createSet;
  }
});

// node_modules/lodash/_baseUniq.js
var require_baseUniq = __commonJS({
  "node_modules/lodash/_baseUniq.js"(exports, module) {
    init_checked_fetch();
    init_modules_watch_stub();
    var SetCache = require_SetCache();
    var arrayIncludes = require_arrayIncludes();
    var arrayIncludesWith = require_arrayIncludesWith();
    var cacheHas = require_cacheHas();
    var createSet = require_createSet();
    var setToArray = require_setToArray();
    var LARGE_ARRAY_SIZE = 200;
    function baseUniq(array, iteratee, comparator) {
      var index = -1, includes = arrayIncludes, length = array.length, isCommon = true, result = [], seen = result;
      if (comparator) {
        isCommon = false;
        includes = arrayIncludesWith;
      } else if (length >= LARGE_ARRAY_SIZE) {
        var set = iteratee ? null : createSet(array);
        if (set) {
          return setToArray(set);
        }
        isCommon = false;
        includes = cacheHas;
        seen = new SetCache();
      } else {
        seen = iteratee ? [] : result;
      }
      outer:
        while (++index < length) {
          var value = array[index], computed = iteratee ? iteratee(value) : value;
          value = comparator || value !== 0 ? value : 0;
          if (isCommon && computed === computed) {
            var seenIndex = seen.length;
            while (seenIndex--) {
              if (seen[seenIndex] === computed) {
                continue outer;
              }
            }
            if (iteratee) {
              seen.push(computed);
            }
            result.push(value);
          } else if (!includes(seen, computed, comparator)) {
            if (seen !== result) {
              seen.push(computed);
            }
            result.push(value);
          }
        }
      return result;
    }
    __name(baseUniq, "baseUniq");
    module.exports = baseUniq;
  }
});

// node_modules/lodash/uniqWith.js
var require_uniqWith = __commonJS({
  "node_modules/lodash/uniqWith.js"(exports, module) {
    init_checked_fetch();
    init_modules_watch_stub();
    var baseUniq = require_baseUniq();
    function uniqWith(array, comparator) {
      comparator = typeof comparator == "function" ? comparator : void 0;
      return array && array.length ? baseUniq(array, void 0, comparator) : [];
    }
    __name(uniqWith, "uniqWith");
    module.exports = uniqWith;
  }
});

// node_modules/@sapphire/shapeshift/dist/cjs/index.cjs
var require_cjs = __commonJS({
  "node_modules/@sapphire/shapeshift/dist/cjs/index.cjs"(exports) {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    var get = require_get();
    var fastDeepEqual = require_es6();
    var uniqWith = require_uniqWith();
    function _interopDefault(e3) {
      return e3 && e3.__esModule ? e3 : { default: e3 };
    }
    __name(_interopDefault, "_interopDefault");
    var get__default = /* @__PURE__ */ _interopDefault(get);
    var fastDeepEqual__default = /* @__PURE__ */ _interopDefault(fastDeepEqual);
    var uniqWith__default = /* @__PURE__ */ _interopDefault(uniqWith);
    var __defProp2 = Object.defineProperty;
    var __name2 = /* @__PURE__ */ __name((target, value) => __defProp2(target, "name", { value, configurable: true }), "__name");
    var e;
    var t2;
    var n2;
    var r2 = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : globalThis;
    var o2 = e = {};
    function i() {
      throw new Error("setTimeout has not been defined");
    }
    __name(i, "i");
    __name2(i, "i");
    function u2() {
      throw new Error("clearTimeout has not been defined");
    }
    __name(u2, "u");
    __name2(u2, "u");
    function c2(e3) {
      if (t2 === setTimeout)
        return setTimeout(e3, 0);
      if ((t2 === i || !t2) && setTimeout)
        return t2 = setTimeout, setTimeout(e3, 0);
      try {
        return t2(e3, 0);
      } catch (n3) {
        try {
          return t2.call(null, e3, 0);
        } catch (n4) {
          return t2.call(this || r2, e3, 0);
        }
      }
    }
    __name(c2, "c");
    __name2(c2, "c");
    !function() {
      try {
        t2 = "function" == typeof setTimeout ? setTimeout : i;
      } catch (e3) {
        t2 = i;
      }
      try {
        n2 = "function" == typeof clearTimeout ? clearTimeout : u2;
      } catch (e3) {
        n2 = u2;
      }
    }();
    var l;
    var s2 = [];
    var f2 = false;
    var a2 = -1;
    function h2() {
      f2 && l && (f2 = false, l.length ? s2 = l.concat(s2) : a2 = -1, s2.length && d());
    }
    __name(h2, "h");
    __name2(h2, "h");
    function d() {
      if (!f2) {
        var e3 = c2(h2);
        f2 = true;
        for (var t3 = s2.length; t3; ) {
          for (l = s2, s2 = []; ++a2 < t3; )
            l && l[a2].run();
          a2 = -1, t3 = s2.length;
        }
        l = null, f2 = false, function(e4) {
          if (n2 === clearTimeout)
            return clearTimeout(e4);
          if ((n2 === u2 || !n2) && clearTimeout)
            return n2 = clearTimeout, clearTimeout(e4);
          try {
            n2(e4);
          } catch (t4) {
            try {
              return n2.call(null, e4);
            } catch (t5) {
              return n2.call(this || r2, e4);
            }
          }
        }(e3);
      }
    }
    __name(d, "d");
    __name2(d, "d");
    function m(e3, t3) {
      (this || r2).fun = e3, (this || r2).array = t3;
    }
    __name(m, "m");
    __name2(m, "m");
    function p2() {
    }
    __name(p2, "p");
    __name2(p2, "p");
    o2.nextTick = function(e3) {
      var t3 = new Array(arguments.length - 1);
      if (arguments.length > 1)
        for (var n3 = 1; n3 < arguments.length; n3++)
          t3[n3 - 1] = arguments[n3];
      s2.push(new m(e3, t3)), 1 !== s2.length || f2 || c2(d);
    }, m.prototype.run = function() {
      (this || r2).fun.apply(null, (this || r2).array);
    }, o2.title = "browser", o2.browser = true, o2.env = {}, o2.argv = [], o2.version = "", o2.versions = {}, o2.on = p2, o2.addListener = p2, o2.once = p2, o2.off = p2, o2.removeListener = p2, o2.removeAllListeners = p2, o2.emit = p2, o2.prependListener = p2, o2.prependOnceListener = p2, o2.listeners = function(e3) {
      return [];
    }, o2.binding = function(e3) {
      throw new Error("process.binding is not supported");
    }, o2.cwd = function() {
      return "/";
    }, o2.chdir = function(e3) {
      throw new Error("process.chdir is not supported");
    }, o2.umask = function() {
      return 0;
    };
    var T = e;
    T.addListener;
    T.argv;
    T.binding;
    T.browser;
    T.chdir;
    T.cwd;
    T.emit;
    T.env;
    T.listeners;
    T.nextTick;
    T.off;
    T.on;
    T.once;
    T.prependListener;
    T.prependOnceListener;
    T.removeAllListeners;
    T.removeListener;
    T.title;
    T.umask;
    T.version;
    T.versions;
    var t22 = "function" == typeof Symbol && "symbol" == typeof Symbol.toStringTag;
    var e2 = Object.prototype.toString;
    var o22 = /* @__PURE__ */ __name2(function(o3) {
      return !(t22 && o3 && "object" == typeof o3 && Symbol.toStringTag in o3) && "[object Arguments]" === e2.call(o3);
    }, "o");
    var n22 = /* @__PURE__ */ __name2(function(t3) {
      return !!o22(t3) || null !== t3 && "object" == typeof t3 && "number" == typeof t3.length && t3.length >= 0 && "[object Array]" !== e2.call(t3) && "[object Function]" === e2.call(t3.callee);
    }, "n");
    var r22 = function() {
      return o22(arguments);
    }();
    o22.isLegacyArguments = n22;
    var l2 = r22 ? o22 : n22;
    var t$1 = Object.prototype.toString;
    var o$1 = Function.prototype.toString;
    var n$1 = /^\s*(?:function)?\*/;
    var e$1 = "function" == typeof Symbol && "symbol" == typeof Symbol.toStringTag;
    var r$1 = Object.getPrototypeOf;
    var c22 = function() {
      if (!e$1)
        return false;
      try {
        return Function("return function*() {}")();
      } catch (t3) {
      }
    }();
    var u22 = c22 ? r$1(c22) : {};
    var i2 = /* @__PURE__ */ __name2(function(c3) {
      return "function" == typeof c3 && (!!n$1.test(o$1.call(c3)) || (e$1 ? r$1(c3) === u22 : "[object GeneratorFunction]" === t$1.call(c3)));
    }, "i");
    var t$2 = "function" == typeof Object.create ? function(t3, e3) {
      e3 && (t3.super_ = e3, t3.prototype = Object.create(e3.prototype, { constructor: { value: t3, enumerable: false, writable: true, configurable: true } }));
    } : function(t3, e3) {
      if (e3) {
        t3.super_ = e3;
        var o3 = /* @__PURE__ */ __name2(function() {
        }, "o");
        o3.prototype = e3.prototype, t3.prototype = new o3(), t3.prototype.constructor = t3;
      }
    };
    var i$1 = /* @__PURE__ */ __name2(function(e3) {
      return e3 && "object" == typeof e3 && "function" == typeof e3.copy && "function" == typeof e3.fill && "function" == typeof e3.readUInt8;
    }, "i$1");
    var o$2 = {};
    var u$1 = i$1;
    var f22 = l2;
    var a22 = i2;
    function c$1(e3) {
      return e3.call.bind(e3);
    }
    __name(c$1, "c$1");
    __name2(c$1, "c$1");
    var s22 = "undefined" != typeof BigInt;
    var p22 = "undefined" != typeof Symbol;
    var y = p22 && void 0 !== Symbol.toStringTag;
    var l$1 = "undefined" != typeof Uint8Array;
    var d2 = "undefined" != typeof ArrayBuffer;
    if (l$1 && y)
      var g2 = Object.getPrototypeOf(Uint8Array.prototype), b = c$1(Object.getOwnPropertyDescriptor(g2, Symbol.toStringTag).get);
    var m2 = c$1(Object.prototype.toString);
    var h22 = c$1(Number.prototype.valueOf);
    var j = c$1(String.prototype.valueOf);
    var A = c$1(Boolean.prototype.valueOf);
    if (s22)
      var w = c$1(BigInt.prototype.valueOf);
    if (p22)
      var v = c$1(Symbol.prototype.valueOf);
    function O(e3, t3) {
      if ("object" != typeof e3)
        return false;
      try {
        return t3(e3), true;
      } catch (e4) {
        return false;
      }
    }
    __name(O, "O");
    __name2(O, "O");
    function S(e3) {
      return l$1 && y ? void 0 !== b(e3) : B(e3) || k(e3) || E(e3) || D(e3) || U(e3) || P(e3) || x(e3) || I(e3) || M(e3) || z(e3) || F(e3);
    }
    __name(S, "S");
    __name2(S, "S");
    function B(e3) {
      return l$1 && y ? "Uint8Array" === b(e3) : "[object Uint8Array]" === m2(e3) || u$1(e3) && void 0 !== e3.buffer;
    }
    __name(B, "B");
    __name2(B, "B");
    function k(e3) {
      return l$1 && y ? "Uint8ClampedArray" === b(e3) : "[object Uint8ClampedArray]" === m2(e3);
    }
    __name(k, "k");
    __name2(k, "k");
    function E(e3) {
      return l$1 && y ? "Uint16Array" === b(e3) : "[object Uint16Array]" === m2(e3);
    }
    __name(E, "E");
    __name2(E, "E");
    function D(e3) {
      return l$1 && y ? "Uint32Array" === b(e3) : "[object Uint32Array]" === m2(e3);
    }
    __name(D, "D");
    __name2(D, "D");
    function U(e3) {
      return l$1 && y ? "Int8Array" === b(e3) : "[object Int8Array]" === m2(e3);
    }
    __name(U, "U");
    __name2(U, "U");
    function P(e3) {
      return l$1 && y ? "Int16Array" === b(e3) : "[object Int16Array]" === m2(e3);
    }
    __name(P, "P");
    __name2(P, "P");
    function x(e3) {
      return l$1 && y ? "Int32Array" === b(e3) : "[object Int32Array]" === m2(e3);
    }
    __name(x, "x");
    __name2(x, "x");
    function I(e3) {
      return l$1 && y ? "Float32Array" === b(e3) : "[object Float32Array]" === m2(e3);
    }
    __name(I, "I");
    __name2(I, "I");
    function M(e3) {
      return l$1 && y ? "Float64Array" === b(e3) : "[object Float64Array]" === m2(e3);
    }
    __name(M, "M");
    __name2(M, "M");
    function z(e3) {
      return l$1 && y ? "BigInt64Array" === b(e3) : "[object BigInt64Array]" === m2(e3);
    }
    __name(z, "z");
    __name2(z, "z");
    function F(e3) {
      return l$1 && y ? "BigUint64Array" === b(e3) : "[object BigUint64Array]" === m2(e3);
    }
    __name(F, "F");
    __name2(F, "F");
    function T2(e3) {
      return "[object Map]" === m2(e3);
    }
    __name(T2, "T2");
    __name2(T2, "T");
    function N(e3) {
      return "[object Set]" === m2(e3);
    }
    __name(N, "N");
    __name2(N, "N");
    function W(e3) {
      return "[object WeakMap]" === m2(e3);
    }
    __name(W, "W");
    __name2(W, "W");
    function $(e3) {
      return "[object WeakSet]" === m2(e3);
    }
    __name($, "$");
    __name2($, "$");
    function C(e3) {
      return "[object ArrayBuffer]" === m2(e3);
    }
    __name(C, "C");
    __name2(C, "C");
    function V(e3) {
      return "undefined" != typeof ArrayBuffer && (C.working ? C(e3) : e3 instanceof ArrayBuffer);
    }
    __name(V, "V");
    __name2(V, "V");
    function G(e3) {
      return "[object DataView]" === m2(e3);
    }
    __name(G, "G");
    __name2(G, "G");
    function R(e3) {
      return "undefined" != typeof DataView && (G.working ? G(e3) : e3 instanceof DataView);
    }
    __name(R, "R");
    __name2(R, "R");
    function J(e3) {
      return "[object SharedArrayBuffer]" === m2(e3);
    }
    __name(J, "J");
    __name2(J, "J");
    function _(e3) {
      return "undefined" != typeof SharedArrayBuffer && (J.working ? J(e3) : e3 instanceof SharedArrayBuffer);
    }
    __name(_, "_");
    __name2(_, "_");
    function H(e3) {
      return O(e3, h22);
    }
    __name(H, "H");
    __name2(H, "H");
    function Z(e3) {
      return O(e3, j);
    }
    __name(Z, "Z");
    __name2(Z, "Z");
    function q(e3) {
      return O(e3, A);
    }
    __name(q, "q");
    __name2(q, "q");
    function K(e3) {
      return s22 && O(e3, w);
    }
    __name(K, "K");
    __name2(K, "K");
    function L(e3) {
      return p22 && O(e3, v);
    }
    __name(L, "L");
    __name2(L, "L");
    o$2.isArgumentsObject = f22, o$2.isGeneratorFunction = a22, o$2.isPromise = function(e3) {
      return "undefined" != typeof Promise && e3 instanceof Promise || null !== e3 && "object" == typeof e3 && "function" == typeof e3.then && "function" == typeof e3.catch;
    }, o$2.isArrayBufferView = function(e3) {
      return d2 && ArrayBuffer.isView ? ArrayBuffer.isView(e3) : S(e3) || R(e3);
    }, o$2.isTypedArray = S, o$2.isUint8Array = B, o$2.isUint8ClampedArray = k, o$2.isUint16Array = E, o$2.isUint32Array = D, o$2.isInt8Array = U, o$2.isInt16Array = P, o$2.isInt32Array = x, o$2.isFloat32Array = I, o$2.isFloat64Array = M, o$2.isBigInt64Array = z, o$2.isBigUint64Array = F, T2.working = "undefined" != typeof Map && T2(/* @__PURE__ */ new Map()), o$2.isMap = function(e3) {
      return "undefined" != typeof Map && (T2.working ? T2(e3) : e3 instanceof Map);
    }, N.working = "undefined" != typeof Set && N(/* @__PURE__ */ new Set()), o$2.isSet = function(e3) {
      return "undefined" != typeof Set && (N.working ? N(e3) : e3 instanceof Set);
    }, W.working = "undefined" != typeof WeakMap && W(/* @__PURE__ */ new WeakMap()), o$2.isWeakMap = function(e3) {
      return "undefined" != typeof WeakMap && (W.working ? W(e3) : e3 instanceof WeakMap);
    }, $.working = "undefined" != typeof WeakSet && $(/* @__PURE__ */ new WeakSet()), o$2.isWeakSet = function(e3) {
      return $(e3);
    }, C.working = "undefined" != typeof ArrayBuffer && C(new ArrayBuffer()), o$2.isArrayBuffer = V, G.working = "undefined" != typeof ArrayBuffer && "undefined" != typeof DataView && G(new DataView(new ArrayBuffer(1), 0, 1)), o$2.isDataView = R, J.working = "undefined" != typeof SharedArrayBuffer && J(new SharedArrayBuffer()), o$2.isSharedArrayBuffer = _, o$2.isAsyncFunction = function(e3) {
      return "[object AsyncFunction]" === m2(e3);
    }, o$2.isMapIterator = function(e3) {
      return "[object Map Iterator]" === m2(e3);
    }, o$2.isSetIterator = function(e3) {
      return "[object Set Iterator]" === m2(e3);
    }, o$2.isGeneratorObject = function(e3) {
      return "[object Generator]" === m2(e3);
    }, o$2.isWebAssemblyCompiledModule = function(e3) {
      return "[object WebAssembly.Module]" === m2(e3);
    }, o$2.isNumberObject = H, o$2.isStringObject = Z, o$2.isBooleanObject = q, o$2.isBigIntObject = K, o$2.isSymbolObject = L, o$2.isBoxedPrimitive = function(e3) {
      return H(e3) || Z(e3) || q(e3) || K(e3) || L(e3);
    }, o$2.isAnyArrayBuffer = function(e3) {
      return l$1 && (V(e3) || _(e3));
    }, ["isProxy", "isExternal", "isModuleNamespaceObject"].forEach(function(e3) {
      Object.defineProperty(o$2, e3, { enumerable: false, value: function() {
        throw new Error(e3 + " is not supported in userland");
      } });
    });
    var Q = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : globalThis;
    var X = {};
    var Y = T;
    var ee = Object.getOwnPropertyDescriptors || function(e3) {
      for (var t3 = Object.keys(e3), r3 = {}, n3 = 0; n3 < t3.length; n3++)
        r3[t3[n3]] = Object.getOwnPropertyDescriptor(e3, t3[n3]);
      return r3;
    };
    var te = /%[sdj%]/g;
    X.format = function(e3) {
      if (!ge(e3)) {
        for (var t3 = [], r3 = 0; r3 < arguments.length; r3++)
          t3.push(oe(arguments[r3]));
        return t3.join(" ");
      }
      r3 = 1;
      for (var n3 = arguments, i3 = n3.length, o3 = String(e3).replace(te, function(e4) {
        if ("%%" === e4)
          return "%";
        if (r3 >= i3)
          return e4;
        switch (e4) {
          case "%s":
            return String(n3[r3++]);
          case "%d":
            return Number(n3[r3++]);
          case "%j":
            try {
              return JSON.stringify(n3[r3++]);
            } catch (e5) {
              return "[Circular]";
            }
          default:
            return e4;
        }
      }), u3 = n3[r3]; r3 < i3; u3 = n3[++r3])
        le(u3) || !he(u3) ? o3 += " " + u3 : o3 += " " + oe(u3);
      return o3;
    }, X.deprecate = function(e3, t3) {
      if (void 0 !== Y && true === Y.noDeprecation)
        return e3;
      if (void 0 === Y)
        return function() {
          return X.deprecate(e3, t3).apply(this || Q, arguments);
        };
      var r3 = false;
      return function() {
        if (!r3) {
          if (Y.throwDeprecation)
            throw new Error(t3);
          Y.traceDeprecation ? console.trace(t3) : console.error(t3), r3 = true;
        }
        return e3.apply(this || Q, arguments);
      };
    };
    var re = {};
    var ne = /^$/;
    if (Y.env.NODE_DEBUG) {
      ie = Y.env.NODE_DEBUG;
      ie = ie.replace(/[|\\{}()[\]^$+?.]/g, "\\$&").replace(/\*/g, ".*").replace(/,/g, "$|^").toUpperCase(), ne = new RegExp("^" + ie + "$", "i");
    }
    var ie;
    function oe(e3, t3) {
      var r3 = { seen: [], stylize: fe };
      return arguments.length >= 3 && (r3.depth = arguments[2]), arguments.length >= 4 && (r3.colors = arguments[3]), ye(t3) ? r3.showHidden = t3 : t3 && X._extend(r3, t3), be(r3.showHidden) && (r3.showHidden = false), be(r3.depth) && (r3.depth = 2), be(r3.colors) && (r3.colors = false), be(r3.customInspect) && (r3.customInspect = true), r3.colors && (r3.stylize = ue), ae(r3, e3, r3.depth);
    }
    __name(oe, "oe");
    __name2(oe, "oe");
    function ue(e3, t3) {
      var r3 = oe.styles[t3];
      return r3 ? "\x1B[" + oe.colors[r3][0] + "m" + e3 + "\x1B[" + oe.colors[r3][1] + "m" : e3;
    }
    __name(ue, "ue");
    __name2(ue, "ue");
    function fe(e3, t3) {
      return e3;
    }
    __name(fe, "fe");
    __name2(fe, "fe");
    function ae(e3, t3, r3) {
      if (e3.customInspect && t3 && we(t3.inspect) && t3.inspect !== X.inspect && (!t3.constructor || t3.constructor.prototype !== t3)) {
        var n3 = t3.inspect(r3, e3);
        return ge(n3) || (n3 = ae(e3, n3, r3)), n3;
      }
      var i3 = function(e4, t4) {
        if (be(t4))
          return e4.stylize("undefined", "undefined");
        if (ge(t4)) {
          var r4 = "'" + JSON.stringify(t4).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
          return e4.stylize(r4, "string");
        }
        if (de(t4))
          return e4.stylize("" + t4, "number");
        if (ye(t4))
          return e4.stylize("" + t4, "boolean");
        if (le(t4))
          return e4.stylize("null", "null");
      }(e3, t3);
      if (i3)
        return i3;
      var o3 = Object.keys(t3), u3 = function(e4) {
        var t4 = {};
        return e4.forEach(function(e5, r4) {
          t4[e5] = true;
        }), t4;
      }(o3);
      if (e3.showHidden && (o3 = Object.getOwnPropertyNames(t3)), Ae(t3) && (o3.indexOf("message") >= 0 || o3.indexOf("description") >= 0))
        return ce(t3);
      if (0 === o3.length) {
        if (we(t3)) {
          var f3 = t3.name ? ": " + t3.name : "";
          return e3.stylize("[Function" + f3 + "]", "special");
        }
        if (me(t3))
          return e3.stylize(RegExp.prototype.toString.call(t3), "regexp");
        if (je(t3))
          return e3.stylize(Date.prototype.toString.call(t3), "date");
        if (Ae(t3))
          return ce(t3);
      }
      var a3, c3 = "", s4 = false, p3 = ["{", "}"];
      (pe(t3) && (s4 = true, p3 = ["[", "]"]), we(t3)) && (c3 = " [Function" + (t3.name ? ": " + t3.name : "") + "]");
      return me(t3) && (c3 = " " + RegExp.prototype.toString.call(t3)), je(t3) && (c3 = " " + Date.prototype.toUTCString.call(t3)), Ae(t3) && (c3 = " " + ce(t3)), 0 !== o3.length || s4 && 0 != t3.length ? r3 < 0 ? me(t3) ? e3.stylize(RegExp.prototype.toString.call(t3), "regexp") : e3.stylize("[Object]", "special") : (e3.seen.push(t3), a3 = s4 ? function(e4, t4, r4, n4, i4) {
        for (var o4 = [], u4 = 0, f4 = t4.length; u4 < f4; ++u4)
          ke(t4, String(u4)) ? o4.push(se(e4, t4, r4, n4, String(u4), true)) : o4.push("");
        return i4.forEach(function(i5) {
          i5.match(/^\d+$/) || o4.push(se(e4, t4, r4, n4, i5, true));
        }), o4;
      }(e3, t3, r3, u3, o3) : o3.map(function(n4) {
        return se(e3, t3, r3, u3, n4, s4);
      }), e3.seen.pop(), function(e4, t4, r4) {
        var n4 = 0;
        if (e4.reduce(function(e5, t5) {
          return n4++, t5.indexOf("\n") >= 0 && n4++, e5 + t5.replace(/\u001b\[\d\d?m/g, "").length + 1;
        }, 0) > 60)
          return r4[0] + ("" === t4 ? "" : t4 + "\n ") + " " + e4.join(",\n  ") + " " + r4[1];
        return r4[0] + t4 + " " + e4.join(", ") + " " + r4[1];
      }(a3, c3, p3)) : p3[0] + c3 + p3[1];
    }
    __name(ae, "ae");
    __name2(ae, "ae");
    function ce(e3) {
      return "[" + Error.prototype.toString.call(e3) + "]";
    }
    __name(ce, "ce");
    __name2(ce, "ce");
    function se(e3, t3, r3, n3, i3, o3) {
      var u3, f3, a3;
      if ((a3 = Object.getOwnPropertyDescriptor(t3, i3) || { value: t3[i3] }).get ? f3 = a3.set ? e3.stylize("[Getter/Setter]", "special") : e3.stylize("[Getter]", "special") : a3.set && (f3 = e3.stylize("[Setter]", "special")), ke(n3, i3) || (u3 = "[" + i3 + "]"), f3 || (e3.seen.indexOf(a3.value) < 0 ? (f3 = le(r3) ? ae(e3, a3.value, null) : ae(e3, a3.value, r3 - 1)).indexOf("\n") > -1 && (f3 = o3 ? f3.split("\n").map(function(e4) {
        return "  " + e4;
      }).join("\n").substr(2) : "\n" + f3.split("\n").map(function(e4) {
        return "   " + e4;
      }).join("\n")) : f3 = e3.stylize("[Circular]", "special")), be(u3)) {
        if (o3 && i3.match(/^\d+$/))
          return f3;
        (u3 = JSON.stringify("" + i3)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/) ? (u3 = u3.substr(1, u3.length - 2), u3 = e3.stylize(u3, "name")) : (u3 = u3.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'"), u3 = e3.stylize(u3, "string"));
      }
      return u3 + ": " + f3;
    }
    __name(se, "se");
    __name2(se, "se");
    function pe(e3) {
      return Array.isArray(e3);
    }
    __name(pe, "pe");
    __name2(pe, "pe");
    function ye(e3) {
      return "boolean" == typeof e3;
    }
    __name(ye, "ye");
    __name2(ye, "ye");
    function le(e3) {
      return null === e3;
    }
    __name(le, "le");
    __name2(le, "le");
    function de(e3) {
      return "number" == typeof e3;
    }
    __name(de, "de");
    __name2(de, "de");
    function ge(e3) {
      return "string" == typeof e3;
    }
    __name(ge, "ge");
    __name2(ge, "ge");
    function be(e3) {
      return void 0 === e3;
    }
    __name(be, "be");
    __name2(be, "be");
    function me(e3) {
      return he(e3) && "[object RegExp]" === ve(e3);
    }
    __name(me, "me");
    __name2(me, "me");
    function he(e3) {
      return "object" == typeof e3 && null !== e3;
    }
    __name(he, "he");
    __name2(he, "he");
    function je(e3) {
      return he(e3) && "[object Date]" === ve(e3);
    }
    __name(je, "je");
    __name2(je, "je");
    function Ae(e3) {
      return he(e3) && ("[object Error]" === ve(e3) || e3 instanceof Error);
    }
    __name(Ae, "Ae");
    __name2(Ae, "Ae");
    function we(e3) {
      return "function" == typeof e3;
    }
    __name(we, "we");
    __name2(we, "we");
    function ve(e3) {
      return Object.prototype.toString.call(e3);
    }
    __name(ve, "ve");
    __name2(ve, "ve");
    function Oe(e3) {
      return e3 < 10 ? "0" + e3.toString(10) : e3.toString(10);
    }
    __name(Oe, "Oe");
    __name2(Oe, "Oe");
    X.debuglog = function(e3) {
      if (e3 = e3.toUpperCase(), !re[e3])
        if (ne.test(e3)) {
          var t3 = Y.pid;
          re[e3] = function() {
            var r3 = X.format.apply(X, arguments);
            console.error("%s %d: %s", e3, t3, r3);
          };
        } else
          re[e3] = function() {
          };
      return re[e3];
    }, X.inspect = oe, oe.colors = { bold: [1, 22], italic: [3, 23], underline: [4, 24], inverse: [7, 27], white: [37, 39], grey: [90, 39], black: [30, 39], blue: [34, 39], cyan: [36, 39], green: [32, 39], magenta: [35, 39], red: [31, 39], yellow: [33, 39] }, oe.styles = { special: "cyan", number: "yellow", boolean: "yellow", undefined: "grey", null: "bold", string: "green", date: "magenta", regexp: "red" }, X.types = o$2, X.isArray = pe, X.isBoolean = ye, X.isNull = le, X.isNullOrUndefined = function(e3) {
      return null == e3;
    }, X.isNumber = de, X.isString = ge, X.isSymbol = function(e3) {
      return "symbol" == typeof e3;
    }, X.isUndefined = be, X.isRegExp = me, X.types.isRegExp = me, X.isObject = he, X.isDate = je, X.types.isDate = je, X.isError = Ae, X.types.isNativeError = Ae, X.isFunction = we, X.isPrimitive = function(e3) {
      return null === e3 || "boolean" == typeof e3 || "number" == typeof e3 || "string" == typeof e3 || "symbol" == typeof e3 || void 0 === e3;
    }, X.isBuffer = i$1;
    var Se = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    function Be() {
      var e3 = /* @__PURE__ */ new Date(), t3 = [Oe(e3.getHours()), Oe(e3.getMinutes()), Oe(e3.getSeconds())].join(":");
      return [e3.getDate(), Se[e3.getMonth()], t3].join(" ");
    }
    __name(Be, "Be");
    __name2(Be, "Be");
    function ke(e3, t3) {
      return Object.prototype.hasOwnProperty.call(e3, t3);
    }
    __name(ke, "ke");
    __name2(ke, "ke");
    X.log = function() {
      console.log("%s - %s", Be(), X.format.apply(X, arguments));
    }, X.inherits = t$2, X._extend = function(e3, t3) {
      if (!t3 || !he(t3))
        return e3;
      for (var r3 = Object.keys(t3), n3 = r3.length; n3--; )
        e3[r3[n3]] = t3[r3[n3]];
      return e3;
    };
    var Ee = "undefined" != typeof Symbol ? Symbol("util.promisify.custom") : void 0;
    function De(e3, t3) {
      if (!e3) {
        var r3 = new Error("Promise was rejected with a falsy value");
        r3.reason = e3, e3 = r3;
      }
      return t3(e3);
    }
    __name(De, "De");
    __name2(De, "De");
    X.promisify = function(e3) {
      if ("function" != typeof e3)
        throw new TypeError('The "original" argument must be of type Function');
      if (Ee && e3[Ee]) {
        var t3;
        if ("function" != typeof (t3 = e3[Ee]))
          throw new TypeError('The "util.promisify.custom" argument must be of type Function');
        return Object.defineProperty(t3, Ee, { value: t3, enumerable: false, writable: false, configurable: true }), t3;
      }
      function t3() {
        for (var t4, r3, n3 = new Promise(function(e4, n4) {
          t4 = e4, r3 = n4;
        }), i3 = [], o3 = 0; o3 < arguments.length; o3++)
          i3.push(arguments[o3]);
        i3.push(function(e4, n4) {
          e4 ? r3(e4) : t4(n4);
        });
        try {
          e3.apply(this || Q, i3);
        } catch (e4) {
          r3(e4);
        }
        return n3;
      }
      __name(t3, "t3");
      __name2(t3, "t");
      return Object.setPrototypeOf(t3, Object.getPrototypeOf(e3)), Ee && Object.defineProperty(t3, Ee, { value: t3, enumerable: false, writable: false, configurable: true }), Object.defineProperties(t3, ee(e3));
    }, X.promisify.custom = Ee, X.callbackify = function(e3) {
      if ("function" != typeof e3)
        throw new TypeError('The "original" argument must be of type Function');
      function t3() {
        for (var t4 = [], r3 = 0; r3 < arguments.length; r3++)
          t4.push(arguments[r3]);
        var n3 = t4.pop();
        if ("function" != typeof n3)
          throw new TypeError("The last argument must be of type Function");
        var i3 = this || Q, o3 = /* @__PURE__ */ __name2(function() {
          return n3.apply(i3, arguments);
        }, "o");
        e3.apply(this || Q, t4).then(function(e4) {
          Y.nextTick(o3.bind(null, null, e4));
        }, function(e4) {
          Y.nextTick(De.bind(null, e4, o3));
        });
      }
      __name(t3, "t3");
      __name2(t3, "t");
      return Object.setPrototypeOf(t3, Object.getPrototypeOf(e3)), Object.defineProperties(t3, ee(e3)), t3;
    };
    X._extend;
    X.callbackify;
    X.debuglog;
    X.deprecate;
    X.format;
    X.inherits;
    X.inspect;
    X.isArray;
    X.isBoolean;
    X.isBuffer;
    X.isDate;
    X.isError;
    X.isFunction;
    X.isNull;
    X.isNullOrUndefined;
    X.isNumber;
    X.isObject;
    X.isPrimitive;
    X.isRegExp;
    X.isString;
    X.isSymbol;
    X.isUndefined;
    X.log;
    X.promisify;
    X._extend;
    X.callbackify;
    X.debuglog;
    X.deprecate;
    X.format;
    X.inherits;
    X.inspect;
    X.isArray;
    X.isBoolean;
    X.isBuffer;
    X.isDate;
    X.isError;
    X.isFunction;
    X.isNull;
    X.isNullOrUndefined;
    X.isNumber;
    X.isObject;
    X.isPrimitive;
    X.isRegExp;
    X.isString;
    X.isSymbol;
    X.isUndefined;
    X.log;
    X.promisify;
    X.types;
    X._extend;
    X.callbackify;
    X.debuglog;
    X.deprecate;
    X.format;
    X.inherits;
    var inspect2 = X.inspect;
    X.isArray;
    X.isBoolean;
    X.isBuffer;
    X.isDate;
    X.isError;
    X.isFunction;
    X.isNull;
    X.isNullOrUndefined;
    X.isNumber;
    X.isObject;
    X.isPrimitive;
    X.isRegExp;
    X.isString;
    X.isSymbol;
    X.isUndefined;
    X.log;
    X.promisify;
    X.types;
    X.TextEncoder = globalThis.TextEncoder;
    X.TextDecoder = globalThis.TextDecoder;
    var customInspectSymbol = Symbol.for("nodejs.util.inspect.custom");
    var customInspectSymbolStackLess = Symbol.for("nodejs.util.inspect.custom.stack-less");
    var _BaseError = /* @__PURE__ */ __name(class _BaseError extends Error {
      toJSON() {
        return {
          name: this.name,
          message: this.message
        };
      }
      [customInspectSymbol](depth, options) {
        return `${this[customInspectSymbolStackLess](depth, options)}
${this.stack.slice(this.stack.indexOf("\n"))}`;
      }
    }, "_BaseError");
    __name2(_BaseError, "BaseError");
    var BaseError = _BaseError;
    var _BaseConstraintError = /* @__PURE__ */ __name(class _BaseConstraintError extends BaseError {
      constructor(constraint, message, given) {
        super(message);
        this.constraint = constraint;
        this.given = given;
      }
      toJSON() {
        return {
          name: this.name,
          constraint: this.constraint,
          given: this.given,
          message: this.message
        };
      }
    }, "_BaseConstraintError");
    __name2(_BaseConstraintError, "BaseConstraintError");
    var BaseConstraintError = _BaseConstraintError;
    var _ExpectedConstraintError = /* @__PURE__ */ __name(class _ExpectedConstraintError extends BaseConstraintError {
      constructor(constraint, message, given, expected) {
        super(constraint, message, given);
        this.expected = expected;
      }
      toJSON() {
        return {
          name: this.name,
          constraint: this.constraint,
          given: this.given,
          expected: this.expected,
          message: this.message
        };
      }
      [customInspectSymbolStackLess](depth, options) {
        const constraint = options.stylize(this.constraint, "string");
        if (depth < 0) {
          return options.stylize(`[ExpectedConstraintError: ${constraint}]`, "special");
        }
        const newOptions = { ...options, depth: options.depth === null ? null : options.depth - 1 };
        const padding = `
  ${options.stylize("|", "undefined")} `;
        const given = inspect2(this.given, newOptions).replace(/\n/g, padding);
        const header = `${options.stylize("ExpectedConstraintError", "special")} > ${constraint}`;
        const message = options.stylize(this.message, "regexp");
        const expectedBlock = `
  ${options.stylize("Expected: ", "string")}${options.stylize(this.expected, "boolean")}`;
        const givenBlock = `
  ${options.stylize("Received:", "regexp")}${padding}${given}`;
        return `${header}
  ${message}
${expectedBlock}
${givenBlock}`;
      }
    }, "_ExpectedConstraintError");
    __name2(_ExpectedConstraintError, "ExpectedConstraintError");
    var ExpectedConstraintError = _ExpectedConstraintError;
    var _Result = /* @__PURE__ */ __name(class _Result2 {
      constructor(success, value, error) {
        this.success = success;
        if (success) {
          this.value = value;
        } else {
          this.error = error;
        }
      }
      isOk() {
        return this.success;
      }
      isErr() {
        return !this.success;
      }
      unwrap() {
        if (this.isOk())
          return this.value;
        throw this.error;
      }
      static ok(value) {
        return new _Result2(true, value);
      }
      static err(error) {
        return new _Result2(false, void 0, error);
      }
    }, "_Result");
    __name2(_Result, "Result");
    var Result = _Result;
    function whenConstraint(key, options, validator, validatorOptions) {
      return {
        run(input, parent) {
          if (!parent) {
            return Result.err(
              new ExpectedConstraintError(
                "s.object(T.when)",
                validatorOptions?.message ?? "Validator has no parent",
                parent,
                "Validator to have a parent"
              )
            );
          }
          const isKeyArray = Array.isArray(key);
          const value = isKeyArray ? key.map((k2) => get__default.default(parent, k2)) : get__default.default(parent, key);
          const predicate = resolveBooleanIs(options, value, isKeyArray) ? options.then : options.otherwise;
          if (predicate) {
            return predicate(validator).run(input);
          }
          return Result.ok(input);
        }
      };
    }
    __name(whenConstraint, "whenConstraint");
    __name2(whenConstraint, "whenConstraint");
    function resolveBooleanIs(options, value, isKeyArray) {
      if (options.is === void 0) {
        return isKeyArray ? !value.some((val) => !val) : Boolean(value);
      }
      if (typeof options.is === "function") {
        return options.is(value);
      }
      return value === options.is;
    }
    __name(resolveBooleanIs, "resolveBooleanIs");
    __name2(resolveBooleanIs, "resolveBooleanIs");
    var validationEnabled = true;
    function setGlobalValidationEnabled(enabled) {
      validationEnabled = enabled;
    }
    __name(setGlobalValidationEnabled, "setGlobalValidationEnabled");
    __name2(setGlobalValidationEnabled, "setGlobalValidationEnabled");
    function getGlobalValidationEnabled() {
      return validationEnabled;
    }
    __name(getGlobalValidationEnabled, "getGlobalValidationEnabled");
    __name2(getGlobalValidationEnabled, "getGlobalValidationEnabled");
    function getValue(valueOrFn) {
      return typeof valueOrFn === "function" ? valueOrFn() : valueOrFn;
    }
    __name(getValue, "getValue");
    __name2(getValue, "getValue");
    var _BaseValidator = /* @__PURE__ */ __name(class _BaseValidator {
      constructor(validatorOptions = {}, constraints = []) {
        this.constraints = [];
        this.isValidationEnabled = null;
        this.constraints = constraints;
        this.validatorOptions = validatorOptions;
      }
      setParent(parent) {
        this.parent = parent;
        return this;
      }
      optional(options = this.validatorOptions) {
        return new UnionValidator([new LiteralValidator(void 0, options), this.clone()], options);
      }
      nullable(options = this.validatorOptions) {
        return new UnionValidator([new LiteralValidator(null, options), this.clone()], options);
      }
      nullish(options = this.validatorOptions) {
        return new UnionValidator([new NullishValidator(options), this.clone()], options);
      }
      array(options = this.validatorOptions) {
        return new ArrayValidator(this.clone(), options);
      }
      set(options = this.validatorOptions) {
        return new SetValidator(this.clone(), options);
      }
      or(...predicates) {
        return new UnionValidator([this.clone(), ...predicates], this.validatorOptions);
      }
      transform(cb, options = this.validatorOptions) {
        return this.addConstraint(
          {
            run: (input) => Result.ok(cb(input))
          },
          options
        );
      }
      reshape(cb, options = this.validatorOptions) {
        return this.addConstraint(
          {
            run: cb
          },
          options
        );
      }
      default(value, options = this.validatorOptions) {
        return new DefaultValidator(this.clone(), value, options);
      }
      when(key, options, validatorOptions) {
        return this.addConstraint(whenConstraint(key, options, this, validatorOptions));
      }
      describe(description) {
        const clone = this.clone();
        clone.description = description;
        return clone;
      }
      run(value) {
        let result = this.handle(value);
        if (result.isErr())
          return result;
        for (const constraint of this.constraints) {
          result = constraint.run(result.value, this.parent);
          if (result.isErr())
            break;
        }
        return result;
      }
      parse(value) {
        if (!this.shouldRunConstraints) {
          return this.handle(value).unwrap();
        }
        return this.constraints.reduce((v2, constraint) => constraint.run(v2).unwrap(), this.handle(value).unwrap());
      }
      is(value) {
        return this.run(value).isOk();
      }
      /**
       * Sets if the validator should also run constraints or just do basic checks.
       * @param isValidationEnabled Whether this validator should be enabled or disabled. You can pass boolean or a function returning boolean which will be called just before parsing.
       * Set to `null` to go off of the global configuration.
       */
      setValidationEnabled(isValidationEnabled) {
        const clone = this.clone();
        clone.isValidationEnabled = isValidationEnabled;
        return clone;
      }
      getValidationEnabled() {
        return getValue(this.isValidationEnabled);
      }
      get shouldRunConstraints() {
        return getValue(this.isValidationEnabled) ?? getGlobalValidationEnabled();
      }
      clone() {
        const clone = Reflect.construct(this.constructor, [this.validatorOptions, this.constraints]);
        clone.isValidationEnabled = this.isValidationEnabled;
        return clone;
      }
      addConstraint(constraint, validatorOptions = this.validatorOptions) {
        const clone = this.clone();
        clone.validatorOptions = validatorOptions;
        clone.constraints = clone.constraints.concat(constraint);
        return clone;
      }
    }, "_BaseValidator");
    __name2(_BaseValidator, "BaseValidator");
    var BaseValidator = _BaseValidator;
    function isUnique(input) {
      if (input.length < 2)
        return true;
      const uniqueArray2 = uniqWith__default.default(input, fastDeepEqual__default.default);
      return uniqueArray2.length === input.length;
    }
    __name(isUnique, "isUnique");
    __name2(isUnique, "isUnique");
    function lessThan(a3, b2) {
      return a3 < b2;
    }
    __name(lessThan, "lessThan");
    __name2(lessThan, "lessThan");
    function lessThanOrEqual(a3, b2) {
      return a3 <= b2;
    }
    __name(lessThanOrEqual, "lessThanOrEqual");
    __name2(lessThanOrEqual, "lessThanOrEqual");
    function greaterThan(a3, b2) {
      return a3 > b2;
    }
    __name(greaterThan, "greaterThan");
    __name2(greaterThan, "greaterThan");
    function greaterThanOrEqual(a3, b2) {
      return a3 >= b2;
    }
    __name(greaterThanOrEqual, "greaterThanOrEqual");
    __name2(greaterThanOrEqual, "greaterThanOrEqual");
    function equal(a3, b2) {
      return a3 === b2;
    }
    __name(equal, "equal");
    __name2(equal, "equal");
    function notEqual(a3, b2) {
      return a3 !== b2;
    }
    __name(notEqual, "notEqual");
    __name2(notEqual, "notEqual");
    function arrayLengthComparator(comparator, name, expected, length, options) {
      return {
        run(input) {
          return comparator(input.length, length) ? Result.ok(input) : Result.err(new ExpectedConstraintError(name, options?.message ?? "Invalid Array length", input, expected));
        }
      };
    }
    __name(arrayLengthComparator, "arrayLengthComparator");
    __name2(arrayLengthComparator, "arrayLengthComparator");
    function arrayLengthLessThan(value, options) {
      const expected = `expected.length < ${value}`;
      return arrayLengthComparator(lessThan, "s.array(T).lengthLessThan()", expected, value, options);
    }
    __name(arrayLengthLessThan, "arrayLengthLessThan");
    __name2(arrayLengthLessThan, "arrayLengthLessThan");
    function arrayLengthLessThanOrEqual(value, options) {
      const expected = `expected.length <= ${value}`;
      return arrayLengthComparator(lessThanOrEqual, "s.array(T).lengthLessThanOrEqual()", expected, value, options);
    }
    __name(arrayLengthLessThanOrEqual, "arrayLengthLessThanOrEqual");
    __name2(arrayLengthLessThanOrEqual, "arrayLengthLessThanOrEqual");
    function arrayLengthGreaterThan(value, options) {
      const expected = `expected.length > ${value}`;
      return arrayLengthComparator(greaterThan, "s.array(T).lengthGreaterThan()", expected, value, options);
    }
    __name(arrayLengthGreaterThan, "arrayLengthGreaterThan");
    __name2(arrayLengthGreaterThan, "arrayLengthGreaterThan");
    function arrayLengthGreaterThanOrEqual(value, options) {
      const expected = `expected.length >= ${value}`;
      return arrayLengthComparator(greaterThanOrEqual, "s.array(T).lengthGreaterThanOrEqual()", expected, value, options);
    }
    __name(arrayLengthGreaterThanOrEqual, "arrayLengthGreaterThanOrEqual");
    __name2(arrayLengthGreaterThanOrEqual, "arrayLengthGreaterThanOrEqual");
    function arrayLengthEqual(value, options) {
      const expected = `expected.length === ${value}`;
      return arrayLengthComparator(equal, "s.array(T).lengthEqual()", expected, value, options);
    }
    __name(arrayLengthEqual, "arrayLengthEqual");
    __name2(arrayLengthEqual, "arrayLengthEqual");
    function arrayLengthNotEqual(value, options) {
      const expected = `expected.length !== ${value}`;
      return arrayLengthComparator(notEqual, "s.array(T).lengthNotEqual()", expected, value, options);
    }
    __name(arrayLengthNotEqual, "arrayLengthNotEqual");
    __name2(arrayLengthNotEqual, "arrayLengthNotEqual");
    function arrayLengthRange(start, endBefore, options) {
      const expected = `expected.length >= ${start} && expected.length < ${endBefore}`;
      return {
        run(input) {
          return input.length >= start && input.length < endBefore ? Result.ok(input) : Result.err(new ExpectedConstraintError("s.array(T).lengthRange()", options?.message ?? "Invalid Array length", input, expected));
        }
      };
    }
    __name(arrayLengthRange, "arrayLengthRange");
    __name2(arrayLengthRange, "arrayLengthRange");
    function arrayLengthRangeInclusive(start, end, options) {
      const expected = `expected.length >= ${start} && expected.length <= ${end}`;
      return {
        run(input) {
          return input.length >= start && input.length <= end ? Result.ok(input) : Result.err(
            new ExpectedConstraintError("s.array(T).lengthRangeInclusive()", options?.message ?? "Invalid Array length", input, expected)
          );
        }
      };
    }
    __name(arrayLengthRangeInclusive, "arrayLengthRangeInclusive");
    __name2(arrayLengthRangeInclusive, "arrayLengthRangeInclusive");
    function arrayLengthRangeExclusive(startAfter, endBefore, options) {
      const expected = `expected.length > ${startAfter} && expected.length < ${endBefore}`;
      return {
        run(input) {
          return input.length > startAfter && input.length < endBefore ? Result.ok(input) : Result.err(
            new ExpectedConstraintError("s.array(T).lengthRangeExclusive()", options?.message ?? "Invalid Array length", input, expected)
          );
        }
      };
    }
    __name(arrayLengthRangeExclusive, "arrayLengthRangeExclusive");
    __name2(arrayLengthRangeExclusive, "arrayLengthRangeExclusive");
    function uniqueArray(options) {
      return {
        run(input) {
          return isUnique(input) ? Result.ok(input) : Result.err(
            new ExpectedConstraintError(
              "s.array(T).unique()",
              options?.message ?? "Array values are not unique",
              input,
              "Expected all values to be unique"
            )
          );
        }
      };
    }
    __name(uniqueArray, "uniqueArray");
    __name2(uniqueArray, "uniqueArray");
    var _CombinedPropertyError = /* @__PURE__ */ __name(class _CombinedPropertyError2 extends BaseError {
      constructor(errors, validatorOptions) {
        super(validatorOptions?.message ?? "Received one or more errors");
        this.errors = errors;
      }
      [customInspectSymbolStackLess](depth, options) {
        if (depth < 0) {
          return options.stylize("[CombinedPropertyError]", "special");
        }
        const newOptions = { ...options, depth: options.depth === null ? null : options.depth - 1, compact: true };
        const padding = `
  ${options.stylize("|", "undefined")} `;
        const header = `${options.stylize("CombinedPropertyError", "special")} (${options.stylize(this.errors.length.toString(), "number")})`;
        const message = options.stylize(this.message, "regexp");
        const errors = this.errors.map(([key, error]) => {
          const property = _CombinedPropertyError2.formatProperty(key, options);
          const body = error[customInspectSymbolStackLess](depth - 1, newOptions).replace(/\n/g, padding);
          return `  input${property}${padding}${body}`;
        }).join("\n\n");
        return `${header}
  ${message}

${errors}`;
      }
      static formatProperty(key, options) {
        if (typeof key === "string")
          return options.stylize(`.${key}`, "symbol");
        if (typeof key === "number")
          return `[${options.stylize(key.toString(), "number")}]`;
        return `[${options.stylize("Symbol", "symbol")}(${key.description})]`;
      }
    }, "_CombinedPropertyError");
    __name2(_CombinedPropertyError, "CombinedPropertyError");
    var CombinedPropertyError = _CombinedPropertyError;
    var _ValidationError = /* @__PURE__ */ __name(class _ValidationError extends BaseError {
      constructor(validator, message, given) {
        super(message);
        this.validator = validator;
        this.given = given;
      }
      toJSON() {
        return {
          name: this.name,
          message: "Unknown validation error occurred.",
          validator: this.validator,
          given: this.given
        };
      }
      [customInspectSymbolStackLess](depth, options) {
        const validator = options.stylize(this.validator, "string");
        if (depth < 0) {
          return options.stylize(`[ValidationError: ${validator}]`, "special");
        }
        const newOptions = { ...options, depth: options.depth === null ? null : options.depth - 1, compact: true };
        const padding = `
  ${options.stylize("|", "undefined")} `;
        const given = inspect2(this.given, newOptions).replace(/\n/g, padding);
        const header = `${options.stylize("ValidationError", "special")} > ${validator}`;
        const message = options.stylize(this.message, "regexp");
        const givenBlock = `
  ${options.stylize("Received:", "regexp")}${padding}${given}`;
        return `${header}
  ${message}
${givenBlock}`;
      }
    }, "_ValidationError");
    __name2(_ValidationError, "ValidationError");
    var ValidationError = _ValidationError;
    var _ArrayValidator = /* @__PURE__ */ __name(class _ArrayValidator extends BaseValidator {
      constructor(validator, validatorOptions = {}, constraints = []) {
        super(validatorOptions, constraints);
        this.validator = validator;
      }
      lengthLessThan(length, options = this.validatorOptions) {
        return this.addConstraint(arrayLengthLessThan(length, options));
      }
      lengthLessThanOrEqual(length, options = this.validatorOptions) {
        return this.addConstraint(arrayLengthLessThanOrEqual(length, options));
      }
      lengthGreaterThan(length, options = this.validatorOptions) {
        return this.addConstraint(arrayLengthGreaterThan(length, options));
      }
      lengthGreaterThanOrEqual(length, options = this.validatorOptions) {
        return this.addConstraint(arrayLengthGreaterThanOrEqual(length, options));
      }
      lengthEqual(length, options = this.validatorOptions) {
        return this.addConstraint(arrayLengthEqual(length, options));
      }
      lengthNotEqual(length, options = this.validatorOptions) {
        return this.addConstraint(arrayLengthNotEqual(length, options));
      }
      lengthRange(start, endBefore, options = this.validatorOptions) {
        return this.addConstraint(arrayLengthRange(start, endBefore, options));
      }
      lengthRangeInclusive(startAt, endAt, options = this.validatorOptions) {
        return this.addConstraint(arrayLengthRangeInclusive(startAt, endAt, options));
      }
      lengthRangeExclusive(startAfter, endBefore, options = this.validatorOptions) {
        return this.addConstraint(arrayLengthRangeExclusive(startAfter, endBefore, options));
      }
      unique(options = this.validatorOptions) {
        return this.addConstraint(uniqueArray(options));
      }
      clone() {
        return Reflect.construct(this.constructor, [this.validator, this.validatorOptions, this.constraints]);
      }
      handle(values) {
        if (!Array.isArray(values)) {
          return Result.err(new ValidationError("s.array(T)", this.validatorOptions.message ?? "Expected an array", values));
        }
        if (!this.shouldRunConstraints) {
          return Result.ok(values);
        }
        const errors = [];
        const transformed = [];
        for (let i3 = 0; i3 < values.length; i3++) {
          const result = this.validator.run(values[i3]);
          if (result.isOk())
            transformed.push(result.value);
          else
            errors.push([i3, result.error]);
        }
        return errors.length === 0 ? Result.ok(transformed) : Result.err(new CombinedPropertyError(errors, this.validatorOptions));
      }
    }, "_ArrayValidator");
    __name2(_ArrayValidator, "ArrayValidator");
    var ArrayValidator = _ArrayValidator;
    function bigintComparator(comparator, name, expected, number, options) {
      return {
        run(input) {
          return comparator(input, number) ? Result.ok(input) : Result.err(new ExpectedConstraintError(name, options?.message ?? "Invalid bigint value", input, expected));
        }
      };
    }
    __name(bigintComparator, "bigintComparator");
    __name2(bigintComparator, "bigintComparator");
    function bigintLessThan(value, options) {
      const expected = `expected < ${value}n`;
      return bigintComparator(lessThan, "s.bigint().lessThan()", expected, value, options);
    }
    __name(bigintLessThan, "bigintLessThan");
    __name2(bigintLessThan, "bigintLessThan");
    function bigintLessThanOrEqual(value, options) {
      const expected = `expected <= ${value}n`;
      return bigintComparator(lessThanOrEqual, "s.bigint().lessThanOrEqual()", expected, value, options);
    }
    __name(bigintLessThanOrEqual, "bigintLessThanOrEqual");
    __name2(bigintLessThanOrEqual, "bigintLessThanOrEqual");
    function bigintGreaterThan(value, options) {
      const expected = `expected > ${value}n`;
      return bigintComparator(greaterThan, "s.bigint().greaterThan()", expected, value, options);
    }
    __name(bigintGreaterThan, "bigintGreaterThan");
    __name2(bigintGreaterThan, "bigintGreaterThan");
    function bigintGreaterThanOrEqual(value, options) {
      const expected = `expected >= ${value}n`;
      return bigintComparator(greaterThanOrEqual, "s.bigint().greaterThanOrEqual()", expected, value, options);
    }
    __name(bigintGreaterThanOrEqual, "bigintGreaterThanOrEqual");
    __name2(bigintGreaterThanOrEqual, "bigintGreaterThanOrEqual");
    function bigintEqual(value, options) {
      const expected = `expected === ${value}n`;
      return bigintComparator(equal, "s.bigint().equal()", expected, value, options);
    }
    __name(bigintEqual, "bigintEqual");
    __name2(bigintEqual, "bigintEqual");
    function bigintNotEqual(value, options) {
      const expected = `expected !== ${value}n`;
      return bigintComparator(notEqual, "s.bigint().notEqual()", expected, value, options);
    }
    __name(bigintNotEqual, "bigintNotEqual");
    __name2(bigintNotEqual, "bigintNotEqual");
    function bigintDivisibleBy(divider, options) {
      const expected = `expected % ${divider}n === 0n`;
      return {
        run(input) {
          return input % divider === 0n ? Result.ok(input) : Result.err(new ExpectedConstraintError("s.bigint().divisibleBy()", options?.message ?? "BigInt is not divisible", input, expected));
        }
      };
    }
    __name(bigintDivisibleBy, "bigintDivisibleBy");
    __name2(bigintDivisibleBy, "bigintDivisibleBy");
    var _BigIntValidator = /* @__PURE__ */ __name(class _BigIntValidator extends BaseValidator {
      lessThan(number, options = this.validatorOptions) {
        return this.addConstraint(bigintLessThan(number, options));
      }
      lessThanOrEqual(number, options = this.validatorOptions) {
        return this.addConstraint(bigintLessThanOrEqual(number, options));
      }
      greaterThan(number, options = this.validatorOptions) {
        return this.addConstraint(bigintGreaterThan(number, options));
      }
      greaterThanOrEqual(number, options = this.validatorOptions) {
        return this.addConstraint(bigintGreaterThanOrEqual(number, options));
      }
      equal(number, options = this.validatorOptions) {
        return this.addConstraint(bigintEqual(number, options));
      }
      notEqual(number, options = this.validatorOptions) {
        return this.addConstraint(bigintNotEqual(number, options));
      }
      positive(options = this.validatorOptions) {
        return this.greaterThanOrEqual(0n, options);
      }
      negative(options = this.validatorOptions) {
        return this.lessThan(0n, options);
      }
      divisibleBy(number, options = this.validatorOptions) {
        return this.addConstraint(bigintDivisibleBy(number, options));
      }
      abs(options = this.validatorOptions) {
        return this.transform((value) => value < 0 ? -value : value, options);
      }
      intN(bits, options = this.validatorOptions) {
        return this.transform((value) => BigInt.asIntN(bits, value), options);
      }
      uintN(bits, options = this.validatorOptions) {
        return this.transform((value) => BigInt.asUintN(bits, value), options);
      }
      handle(value) {
        return typeof value === "bigint" ? Result.ok(value) : Result.err(new ValidationError("s.bigint()", this.validatorOptions.message ?? "Expected a bigint primitive", value));
      }
    }, "_BigIntValidator");
    __name2(_BigIntValidator, "BigIntValidator");
    var BigIntValidator = _BigIntValidator;
    function booleanTrue(options) {
      return {
        run(input) {
          return input ? Result.ok(input) : Result.err(new ExpectedConstraintError("s.boolean().true()", options?.message ?? "Invalid boolean value", input, "true"));
        }
      };
    }
    __name(booleanTrue, "booleanTrue");
    __name2(booleanTrue, "booleanTrue");
    function booleanFalse(options) {
      return {
        run(input) {
          return input ? Result.err(new ExpectedConstraintError("s.boolean().false()", options?.message ?? "Invalid boolean value", input, "false")) : Result.ok(input);
        }
      };
    }
    __name(booleanFalse, "booleanFalse");
    __name2(booleanFalse, "booleanFalse");
    var _BooleanValidator = /* @__PURE__ */ __name(class _BooleanValidator extends BaseValidator {
      true(options = this.validatorOptions) {
        return this.addConstraint(booleanTrue(options));
      }
      false(options = this.validatorOptions) {
        return this.addConstraint(booleanFalse(options));
      }
      equal(value, options = this.validatorOptions) {
        return value ? this.true(options) : this.false(options);
      }
      notEqual(value, options = this.validatorOptions) {
        return value ? this.false(options) : this.true(options);
      }
      handle(value) {
        return typeof value === "boolean" ? Result.ok(value) : Result.err(new ValidationError("s.boolean()", this.validatorOptions.message ?? "Expected a boolean primitive", value));
      }
    }, "_BooleanValidator");
    __name2(_BooleanValidator, "BooleanValidator");
    var BooleanValidator = _BooleanValidator;
    function dateComparator(comparator, name, expected, number, options) {
      return {
        run(input) {
          return comparator(input.getTime(), number) ? Result.ok(input) : Result.err(new ExpectedConstraintError(name, options?.message ?? "Invalid Date value", input, expected));
        }
      };
    }
    __name(dateComparator, "dateComparator");
    __name2(dateComparator, "dateComparator");
    function dateLessThan(value, options) {
      const expected = `expected < ${value.toISOString()}`;
      return dateComparator(lessThan, "s.date().lessThan()", expected, value.getTime(), options);
    }
    __name(dateLessThan, "dateLessThan");
    __name2(dateLessThan, "dateLessThan");
    function dateLessThanOrEqual(value, options) {
      const expected = `expected <= ${value.toISOString()}`;
      return dateComparator(lessThanOrEqual, "s.date().lessThanOrEqual()", expected, value.getTime(), options);
    }
    __name(dateLessThanOrEqual, "dateLessThanOrEqual");
    __name2(dateLessThanOrEqual, "dateLessThanOrEqual");
    function dateGreaterThan(value, options) {
      const expected = `expected > ${value.toISOString()}`;
      return dateComparator(greaterThan, "s.date().greaterThan()", expected, value.getTime(), options);
    }
    __name(dateGreaterThan, "dateGreaterThan");
    __name2(dateGreaterThan, "dateGreaterThan");
    function dateGreaterThanOrEqual(value, options) {
      const expected = `expected >= ${value.toISOString()}`;
      return dateComparator(greaterThanOrEqual, "s.date().greaterThanOrEqual()", expected, value.getTime(), options);
    }
    __name(dateGreaterThanOrEqual, "dateGreaterThanOrEqual");
    __name2(dateGreaterThanOrEqual, "dateGreaterThanOrEqual");
    function dateEqual(value, options) {
      const expected = `expected === ${value.toISOString()}`;
      return dateComparator(equal, "s.date().equal()", expected, value.getTime(), options);
    }
    __name(dateEqual, "dateEqual");
    __name2(dateEqual, "dateEqual");
    function dateNotEqual(value, options) {
      const expected = `expected !== ${value.toISOString()}`;
      return dateComparator(notEqual, "s.date().notEqual()", expected, value.getTime(), options);
    }
    __name(dateNotEqual, "dateNotEqual");
    __name2(dateNotEqual, "dateNotEqual");
    function dateInvalid(options) {
      return {
        run(input) {
          return Number.isNaN(input.getTime()) ? Result.ok(input) : Result.err(new ExpectedConstraintError("s.date().invalid()", options?.message ?? "Invalid Date value", input, "expected === NaN"));
        }
      };
    }
    __name(dateInvalid, "dateInvalid");
    __name2(dateInvalid, "dateInvalid");
    function dateValid(options) {
      return {
        run(input) {
          return Number.isNaN(input.getTime()) ? Result.err(new ExpectedConstraintError("s.date().valid()", options?.message ?? "Invalid Date value", input, "expected !== NaN")) : Result.ok(input);
        }
      };
    }
    __name(dateValid, "dateValid");
    __name2(dateValid, "dateValid");
    var _DateValidator = /* @__PURE__ */ __name(class _DateValidator extends BaseValidator {
      lessThan(date, options = this.validatorOptions) {
        return this.addConstraint(dateLessThan(new Date(date), options));
      }
      lessThanOrEqual(date, options = this.validatorOptions) {
        return this.addConstraint(dateLessThanOrEqual(new Date(date), options));
      }
      greaterThan(date, options = this.validatorOptions) {
        return this.addConstraint(dateGreaterThan(new Date(date), options));
      }
      greaterThanOrEqual(date, options = this.validatorOptions) {
        return this.addConstraint(dateGreaterThanOrEqual(new Date(date), options));
      }
      equal(date, options = this.validatorOptions) {
        const resolved = new Date(date);
        return Number.isNaN(resolved.getTime()) ? this.invalid(options) : this.addConstraint(dateEqual(resolved, options));
      }
      notEqual(date, options = this.validatorOptions) {
        const resolved = new Date(date);
        return Number.isNaN(resolved.getTime()) ? this.valid(options) : this.addConstraint(dateNotEqual(resolved, options));
      }
      valid(options = this.validatorOptions) {
        return this.addConstraint(dateValid(options));
      }
      invalid(options = this.validatorOptions) {
        return this.addConstraint(dateInvalid(options));
      }
      handle(value) {
        return value instanceof Date ? Result.ok(value) : Result.err(new ValidationError("s.date()", this.validatorOptions.message ?? "Expected a Date", value));
      }
    }, "_DateValidator");
    __name2(_DateValidator, "DateValidator");
    var DateValidator = _DateValidator;
    var _ExpectedValidationError = /* @__PURE__ */ __name(class _ExpectedValidationError extends ValidationError {
      constructor(validator, message, given, expected) {
        super(validator, message, given);
        this.expected = expected;
      }
      toJSON() {
        return {
          name: this.name,
          validator: this.validator,
          given: this.given,
          expected: this.expected,
          message: this.message
        };
      }
      [customInspectSymbolStackLess](depth, options) {
        const validator = options.stylize(this.validator, "string");
        if (depth < 0) {
          return options.stylize(`[ExpectedValidationError: ${validator}]`, "special");
        }
        const newOptions = { ...options, depth: options.depth === null ? null : options.depth - 1 };
        const padding = `
  ${options.stylize("|", "undefined")} `;
        const expected = inspect2(this.expected, newOptions).replace(/\n/g, padding);
        const given = inspect2(this.given, newOptions).replace(/\n/g, padding);
        const header = `${options.stylize("ExpectedValidationError", "special")} > ${validator}`;
        const message = options.stylize(this.message, "regexp");
        const expectedBlock = `
  ${options.stylize("Expected:", "string")}${padding}${expected}`;
        const givenBlock = `
  ${options.stylize("Received:", "regexp")}${padding}${given}`;
        return `${header}
  ${message}
${expectedBlock}
${givenBlock}`;
      }
    }, "_ExpectedValidationError");
    __name2(_ExpectedValidationError, "ExpectedValidationError");
    var ExpectedValidationError = _ExpectedValidationError;
    var _InstanceValidator = /* @__PURE__ */ __name(class _InstanceValidator extends BaseValidator {
      constructor(expected, validatorOptions = {}, constraints = []) {
        super(validatorOptions, constraints);
        this.expected = expected;
      }
      handle(value) {
        return value instanceof this.expected ? Result.ok(value) : Result.err(new ExpectedValidationError("s.instance(V)", this.validatorOptions.message ?? "Expected", value, this.expected));
      }
      clone() {
        return Reflect.construct(this.constructor, [this.expected, this.validatorOptions, this.constraints]);
      }
    }, "_InstanceValidator");
    __name2(_InstanceValidator, "InstanceValidator");
    var InstanceValidator = _InstanceValidator;
    var _LiteralValidator = /* @__PURE__ */ __name(class _LiteralValidator extends BaseValidator {
      constructor(literal, validatorOptions = {}, constraints = []) {
        super(validatorOptions, constraints);
        this.expected = literal;
      }
      handle(value) {
        return Object.is(value, this.expected) ? Result.ok(value) : Result.err(
          new ExpectedValidationError("s.literal(V)", this.validatorOptions.message ?? "Expected values to be equals", value, this.expected)
        );
      }
      clone() {
        return Reflect.construct(this.constructor, [this.expected, this.validatorOptions, this.constraints]);
      }
    }, "_LiteralValidator");
    __name2(_LiteralValidator, "LiteralValidator");
    var LiteralValidator = _LiteralValidator;
    var _NeverValidator = /* @__PURE__ */ __name(class _NeverValidator extends BaseValidator {
      handle(value) {
        return Result.err(new ValidationError("s.never()", this.validatorOptions.message ?? "Expected a value to not be passed", value));
      }
    }, "_NeverValidator");
    __name2(_NeverValidator, "NeverValidator");
    var NeverValidator = _NeverValidator;
    var _NullishValidator = /* @__PURE__ */ __name(class _NullishValidator extends BaseValidator {
      handle(value) {
        return value === void 0 || value === null ? Result.ok(value) : Result.err(new ValidationError("s.nullish()", this.validatorOptions.message ?? "Expected undefined or null", value));
      }
    }, "_NullishValidator");
    __name2(_NullishValidator, "NullishValidator");
    var NullishValidator = _NullishValidator;
    function numberComparator(comparator, name, expected, number, options) {
      return {
        run(input) {
          return comparator(input, number) ? Result.ok(input) : Result.err(new ExpectedConstraintError(name, options?.message ?? "Invalid number value", input, expected));
        }
      };
    }
    __name(numberComparator, "numberComparator");
    __name2(numberComparator, "numberComparator");
    function numberLessThan(value, options) {
      const expected = `expected < ${value}`;
      return numberComparator(lessThan, "s.number().lessThan()", expected, value, options);
    }
    __name(numberLessThan, "numberLessThan");
    __name2(numberLessThan, "numberLessThan");
    function numberLessThanOrEqual(value, options) {
      const expected = `expected <= ${value}`;
      return numberComparator(lessThanOrEqual, "s.number().lessThanOrEqual()", expected, value, options);
    }
    __name(numberLessThanOrEqual, "numberLessThanOrEqual");
    __name2(numberLessThanOrEqual, "numberLessThanOrEqual");
    function numberGreaterThan(value, options) {
      const expected = `expected > ${value}`;
      return numberComparator(greaterThan, "s.number().greaterThan()", expected, value, options);
    }
    __name(numberGreaterThan, "numberGreaterThan");
    __name2(numberGreaterThan, "numberGreaterThan");
    function numberGreaterThanOrEqual(value, options) {
      const expected = `expected >= ${value}`;
      return numberComparator(greaterThanOrEqual, "s.number().greaterThanOrEqual()", expected, value, options);
    }
    __name(numberGreaterThanOrEqual, "numberGreaterThanOrEqual");
    __name2(numberGreaterThanOrEqual, "numberGreaterThanOrEqual");
    function numberEqual(value, options) {
      const expected = `expected === ${value}`;
      return numberComparator(equal, "s.number().equal()", expected, value, options);
    }
    __name(numberEqual, "numberEqual");
    __name2(numberEqual, "numberEqual");
    function numberNotEqual(value, options) {
      const expected = `expected !== ${value}`;
      return numberComparator(notEqual, "s.number().notEqual()", expected, value, options);
    }
    __name(numberNotEqual, "numberNotEqual");
    __name2(numberNotEqual, "numberNotEqual");
    function numberInt(options) {
      return {
        run(input) {
          return Number.isInteger(input) ? Result.ok(input) : Result.err(
            new ExpectedConstraintError(
              "s.number().int()",
              options?.message ?? "Given value is not an integer",
              input,
              "Number.isInteger(expected) to be true"
            )
          );
        }
      };
    }
    __name(numberInt, "numberInt");
    __name2(numberInt, "numberInt");
    function numberSafeInt(options) {
      return {
        run(input) {
          return Number.isSafeInteger(input) ? Result.ok(input) : Result.err(
            new ExpectedConstraintError(
              "s.number().safeInt()",
              options?.message ?? "Given value is not a safe integer",
              input,
              "Number.isSafeInteger(expected) to be true"
            )
          );
        }
      };
    }
    __name(numberSafeInt, "numberSafeInt");
    __name2(numberSafeInt, "numberSafeInt");
    function numberFinite(options) {
      return {
        run(input) {
          return Number.isFinite(input) ? Result.ok(input) : Result.err(
            new ExpectedConstraintError(
              "s.number().finite()",
              options?.message ?? "Given value is not finite",
              input,
              "Number.isFinite(expected) to be true"
            )
          );
        }
      };
    }
    __name(numberFinite, "numberFinite");
    __name2(numberFinite, "numberFinite");
    function numberNaN(options) {
      return {
        run(input) {
          return Number.isNaN(input) ? Result.ok(input) : Result.err(
            new ExpectedConstraintError("s.number().equal(NaN)", options?.message ?? "Invalid number value", input, "expected === NaN")
          );
        }
      };
    }
    __name(numberNaN, "numberNaN");
    __name2(numberNaN, "numberNaN");
    function numberNotNaN(options) {
      return {
        run(input) {
          return Number.isNaN(input) ? Result.err(
            new ExpectedConstraintError("s.number().notEqual(NaN)", options?.message ?? "Invalid number value", input, "expected !== NaN")
          ) : Result.ok(input);
        }
      };
    }
    __name(numberNotNaN, "numberNotNaN");
    __name2(numberNotNaN, "numberNotNaN");
    function numberDivisibleBy(divider, options) {
      const expected = `expected % ${divider} === 0`;
      return {
        run(input) {
          return input % divider === 0 ? Result.ok(input) : Result.err(new ExpectedConstraintError("s.number().divisibleBy()", options?.message ?? "Number is not divisible", input, expected));
        }
      };
    }
    __name(numberDivisibleBy, "numberDivisibleBy");
    __name2(numberDivisibleBy, "numberDivisibleBy");
    var _NumberValidator = /* @__PURE__ */ __name(class _NumberValidator extends BaseValidator {
      lessThan(number, options = this.validatorOptions) {
        return this.addConstraint(numberLessThan(number, options));
      }
      lessThanOrEqual(number, options = this.validatorOptions) {
        return this.addConstraint(numberLessThanOrEqual(number, options));
      }
      greaterThan(number, options = this.validatorOptions) {
        return this.addConstraint(numberGreaterThan(number, options));
      }
      greaterThanOrEqual(number, options = this.validatorOptions) {
        return this.addConstraint(numberGreaterThanOrEqual(number, options));
      }
      equal(number, options = this.validatorOptions) {
        return Number.isNaN(number) ? this.addConstraint(numberNaN(options)) : this.addConstraint(numberEqual(number, options));
      }
      notEqual(number, options = this.validatorOptions) {
        return Number.isNaN(number) ? this.addConstraint(numberNotNaN(options)) : this.addConstraint(numberNotEqual(number, options));
      }
      int(options = this.validatorOptions) {
        return this.addConstraint(numberInt(options));
      }
      safeInt(options = this.validatorOptions) {
        return this.addConstraint(numberSafeInt(options));
      }
      finite(options = this.validatorOptions) {
        return this.addConstraint(numberFinite(options));
      }
      positive(options = this.validatorOptions) {
        return this.greaterThanOrEqual(0, options);
      }
      negative(options = this.validatorOptions) {
        return this.lessThan(0, options);
      }
      divisibleBy(divider, options = this.validatorOptions) {
        return this.addConstraint(numberDivisibleBy(divider, options));
      }
      abs(options = this.validatorOptions) {
        return this.transform(Math.abs, options);
      }
      sign(options = this.validatorOptions) {
        return this.transform(Math.sign, options);
      }
      trunc(options = this.validatorOptions) {
        return this.transform(Math.trunc, options);
      }
      floor(options = this.validatorOptions) {
        return this.transform(Math.floor, options);
      }
      fround(options = this.validatorOptions) {
        return this.transform(Math.fround, options);
      }
      round(options = this.validatorOptions) {
        return this.transform(Math.round, options);
      }
      ceil(options = this.validatorOptions) {
        return this.transform(Math.ceil, options);
      }
      handle(value) {
        return typeof value === "number" ? Result.ok(value) : Result.err(new ValidationError("s.number()", this.validatorOptions.message ?? "Expected a number primitive", value));
      }
    }, "_NumberValidator");
    __name2(_NumberValidator, "NumberValidator");
    var NumberValidator = _NumberValidator;
    var _MissingPropertyError = /* @__PURE__ */ __name(class _MissingPropertyError extends BaseError {
      constructor(property, validatorOptions) {
        super(validatorOptions?.message ?? "A required property is missing");
        this.property = property;
      }
      toJSON() {
        return {
          name: this.name,
          message: this.message,
          property: this.property
        };
      }
      [customInspectSymbolStackLess](depth, options) {
        const property = options.stylize(this.property.toString(), "string");
        if (depth < 0) {
          return options.stylize(`[MissingPropertyError: ${property}]`, "special");
        }
        const header = `${options.stylize("MissingPropertyError", "special")} > ${property}`;
        const message = options.stylize(this.message, "regexp");
        return `${header}
  ${message}`;
      }
    }, "_MissingPropertyError");
    __name2(_MissingPropertyError, "MissingPropertyError");
    var MissingPropertyError = _MissingPropertyError;
    var _UnknownPropertyError = /* @__PURE__ */ __name(class _UnknownPropertyError extends BaseError {
      constructor(property, value, options) {
        super(options?.message ?? "Received unexpected property");
        this.property = property;
        this.value = value;
      }
      toJSON() {
        return {
          name: this.name,
          message: this.message,
          property: this.property,
          value: this.value
        };
      }
      [customInspectSymbolStackLess](depth, options) {
        const property = options.stylize(this.property.toString(), "string");
        if (depth < 0) {
          return options.stylize(`[UnknownPropertyError: ${property}]`, "special");
        }
        const newOptions = { ...options, depth: options.depth === null ? null : options.depth - 1, compact: true };
        const padding = `
  ${options.stylize("|", "undefined")} `;
        const given = inspect2(this.value, newOptions).replace(/\n/g, padding);
        const header = `${options.stylize("UnknownPropertyError", "special")} > ${property}`;
        const message = options.stylize(this.message, "regexp");
        const givenBlock = `
  ${options.stylize("Received:", "regexp")}${padding}${given}`;
        return `${header}
  ${message}
${givenBlock}`;
      }
    }, "_UnknownPropertyError");
    __name2(_UnknownPropertyError, "UnknownPropertyError");
    var UnknownPropertyError = _UnknownPropertyError;
    var _DefaultValidator = /* @__PURE__ */ __name(class _DefaultValidator extends BaseValidator {
      constructor(validator, value, validatorOptions = {}, constraints = []) {
        super(validatorOptions, constraints);
        this.validator = validator;
        this.defaultValue = value;
      }
      default(value, options = this.validatorOptions) {
        const clone = this.clone();
        clone.validatorOptions = options;
        clone.defaultValue = value;
        return clone;
      }
      handle(value) {
        return typeof value === "undefined" ? Result.ok(getValue(this.defaultValue)) : this.validator["handle"](value);
      }
      clone() {
        return Reflect.construct(this.constructor, [this.validator, this.defaultValue, this.validatorOptions, this.constraints]);
      }
    }, "_DefaultValidator");
    __name2(_DefaultValidator, "DefaultValidator");
    var DefaultValidator = _DefaultValidator;
    var _CombinedError = /* @__PURE__ */ __name(class _CombinedError extends BaseError {
      constructor(errors, validatorOptions) {
        super(validatorOptions?.message ?? "Received one or more errors");
        this.errors = errors;
      }
      [customInspectSymbolStackLess](depth, options) {
        if (depth < 0) {
          return options.stylize("[CombinedError]", "special");
        }
        const newOptions = { ...options, depth: options.depth === null ? null : options.depth - 1, compact: true };
        const padding = `
  ${options.stylize("|", "undefined")} `;
        const header = `${options.stylize("CombinedError", "special")} (${options.stylize(this.errors.length.toString(), "number")})`;
        const message = options.stylize(this.message, "regexp");
        const errors = this.errors.map((error, i3) => {
          const index = options.stylize((i3 + 1).toString(), "number");
          const body = error[customInspectSymbolStackLess](depth - 1, newOptions).replace(/\n/g, padding);
          return `  ${index} ${body}`;
        }).join("\n\n");
        return `${header}
  ${message}

${errors}`;
      }
    }, "_CombinedError");
    __name2(_CombinedError, "CombinedError");
    var CombinedError = _CombinedError;
    var _UnionValidator = /* @__PURE__ */ __name(class _UnionValidator2 extends BaseValidator {
      constructor(validators, validatorOptions, constraints = []) {
        super(validatorOptions, constraints);
        this.validators = validators;
      }
      optional(options = this.validatorOptions) {
        if (this.validators.length === 0)
          return new _UnionValidator2([new LiteralValidator(void 0, options)], this.validatorOptions, this.constraints);
        const [validator] = this.validators;
        if (validator instanceof LiteralValidator) {
          if (validator.expected === void 0)
            return this.clone();
          if (validator.expected === null) {
            return new _UnionValidator2(
              [new NullishValidator(options), ...this.validators.slice(1)],
              this.validatorOptions,
              this.constraints
            );
          }
        } else if (validator instanceof NullishValidator) {
          return this.clone();
        }
        return new _UnionValidator2([new LiteralValidator(void 0, options), ...this.validators], this.validatorOptions);
      }
      required(options = this.validatorOptions) {
        if (this.validators.length === 0)
          return this.clone();
        const [validator] = this.validators;
        if (validator instanceof LiteralValidator) {
          if (validator.expected === void 0) {
            return new _UnionValidator2(this.validators.slice(1), this.validatorOptions, this.constraints);
          }
        } else if (validator instanceof NullishValidator) {
          return new _UnionValidator2(
            [new LiteralValidator(null, options), ...this.validators.slice(1)],
            this.validatorOptions,
            this.constraints
          );
        }
        return this.clone();
      }
      nullable(options = this.validatorOptions) {
        if (this.validators.length === 0) {
          return new _UnionValidator2([new LiteralValidator(null, options)], this.validatorOptions, this.constraints);
        }
        const [validator] = this.validators;
        if (validator instanceof LiteralValidator) {
          if (validator.expected === null)
            return this.clone();
          if (validator.expected === void 0) {
            return new _UnionValidator2(
              [new NullishValidator(options), ...this.validators.slice(1)],
              this.validatorOptions,
              this.constraints
            );
          }
        } else if (validator instanceof NullishValidator) {
          return this.clone();
        }
        return new _UnionValidator2([new LiteralValidator(null, options), ...this.validators], this.validatorOptions);
      }
      nullish(options = this.validatorOptions) {
        if (this.validators.length === 0) {
          return new _UnionValidator2([new NullishValidator(options)], options, this.constraints);
        }
        const [validator] = this.validators;
        if (validator instanceof LiteralValidator) {
          if (validator.expected === null || validator.expected === void 0) {
            return new _UnionValidator2(
              [new NullishValidator(options), ...this.validators.slice(1)],
              options,
              this.constraints
            );
          }
        } else if (validator instanceof NullishValidator) {
          return this.clone();
        }
        return new _UnionValidator2([new NullishValidator(options), ...this.validators], options);
      }
      or(...predicates) {
        return new _UnionValidator2([...this.validators, ...predicates], this.validatorOptions);
      }
      clone() {
        return Reflect.construct(this.constructor, [this.validators, this.validatorOptions, this.constraints]);
      }
      handle(value) {
        const errors = [];
        for (const validator of this.validators) {
          const result = validator.run(value);
          if (result.isOk())
            return result;
          errors.push(result.error);
        }
        return Result.err(new CombinedError(errors, this.validatorOptions));
      }
    }, "_UnionValidator");
    __name2(_UnionValidator, "UnionValidator");
    var UnionValidator = _UnionValidator;
    var _ObjectValidator = /* @__PURE__ */ __name(class _ObjectValidator2 extends BaseValidator {
      constructor(shape, strategy = 0, validatorOptions = {}, constraints = []) {
        super(validatorOptions, constraints);
        this.keys = [];
        this.requiredKeys = /* @__PURE__ */ new Map();
        this.possiblyUndefinedKeys = /* @__PURE__ */ new Map();
        this.possiblyUndefinedKeysWithDefaults = /* @__PURE__ */ new Map();
        this.shape = shape;
        this.strategy = strategy;
        switch (this.strategy) {
          case 0:
            this.handleStrategy = (value) => this.handleIgnoreStrategy(value);
            break;
          case 1: {
            this.handleStrategy = (value) => this.handleStrictStrategy(value);
            break;
          }
          case 2:
            this.handleStrategy = (value) => this.handlePassthroughStrategy(value);
            break;
        }
        const shapeEntries = Object.entries(shape);
        this.keys = shapeEntries.map(([key]) => key);
        for (const [key, validator] of shapeEntries) {
          if (validator instanceof UnionValidator) {
            const [possiblyLiteralOrNullishPredicate] = validator["validators"];
            if (possiblyLiteralOrNullishPredicate instanceof NullishValidator) {
              this.possiblyUndefinedKeys.set(key, validator);
            } else if (possiblyLiteralOrNullishPredicate instanceof LiteralValidator) {
              if (possiblyLiteralOrNullishPredicate.expected === void 0) {
                this.possiblyUndefinedKeys.set(key, validator);
              } else {
                this.requiredKeys.set(key, validator);
              }
            } else if (validator instanceof DefaultValidator) {
              this.possiblyUndefinedKeysWithDefaults.set(key, validator);
            } else {
              this.requiredKeys.set(key, validator);
            }
          } else if (validator instanceof NullishValidator) {
            this.possiblyUndefinedKeys.set(key, validator);
          } else if (validator instanceof LiteralValidator) {
            if (validator.expected === void 0) {
              this.possiblyUndefinedKeys.set(key, validator);
            } else {
              this.requiredKeys.set(key, validator);
            }
          } else if (validator instanceof DefaultValidator) {
            this.possiblyUndefinedKeysWithDefaults.set(key, validator);
          } else {
            this.requiredKeys.set(key, validator);
          }
        }
      }
      strict(options = this.validatorOptions) {
        return Reflect.construct(this.constructor, [this.shape, 1, options, this.constraints]);
      }
      ignore(options = this.validatorOptions) {
        return Reflect.construct(this.constructor, [this.shape, 0, options, this.constraints]);
      }
      passthrough(options = this.validatorOptions) {
        return Reflect.construct(this.constructor, [this.shape, 2, options, this.constraints]);
      }
      partial(options = this.validatorOptions) {
        const shape = Object.fromEntries(this.keys.map((key) => [key, this.shape[key].optional(options)]));
        return Reflect.construct(this.constructor, [shape, this.strategy, options, this.constraints]);
      }
      required(options = this.validatorOptions) {
        const shape = Object.fromEntries(
          this.keys.map((key) => {
            let validator = this.shape[key];
            if (validator instanceof UnionValidator)
              validator = validator.required(options);
            return [key, validator];
          })
        );
        return Reflect.construct(this.constructor, [shape, this.strategy, options, this.constraints]);
      }
      extend(schema, options = this.validatorOptions) {
        const shape = { ...this.shape, ...schema instanceof _ObjectValidator2 ? schema.shape : schema };
        return Reflect.construct(this.constructor, [shape, this.strategy, options, this.constraints]);
      }
      pick(keys, options = this.validatorOptions) {
        const shape = Object.fromEntries(
          keys.filter((key) => this.keys.includes(key)).map((key) => [key, this.shape[key]])
        );
        return Reflect.construct(this.constructor, [shape, this.strategy, options, this.constraints]);
      }
      omit(keys, options = this.validatorOptions) {
        const shape = Object.fromEntries(
          this.keys.filter((key) => !keys.includes(key)).map((key) => [key, this.shape[key]])
        );
        return Reflect.construct(this.constructor, [shape, this.strategy, options, this.constraints]);
      }
      handle(value) {
        const typeOfValue = typeof value;
        if (typeOfValue !== "object") {
          return Result.err(
            new ValidationError(
              "s.object(T)",
              this.validatorOptions.message ?? `Expected the value to be an object, but received ${typeOfValue} instead`,
              value
            )
          );
        }
        if (value === null) {
          return Result.err(new ValidationError("s.object(T)", this.validatorOptions.message ?? "Expected the value to not be null", value));
        }
        if (Array.isArray(value)) {
          return Result.err(new ValidationError("s.object(T)", this.validatorOptions.message ?? "Expected the value to not be an array", value));
        }
        if (!this.shouldRunConstraints) {
          return Result.ok(value);
        }
        for (const predicate of Object.values(this.shape)) {
          predicate.setParent(this.parent ?? value);
        }
        return this.handleStrategy(value);
      }
      clone() {
        return Reflect.construct(this.constructor, [this.shape, this.strategy, this.validatorOptions, this.constraints]);
      }
      handleIgnoreStrategy(value) {
        const errors = [];
        const finalObject = {};
        const inputEntries = new Map(Object.entries(value));
        const runPredicate = /* @__PURE__ */ __name2((key, predicate) => {
          const result = predicate.run(value[key]);
          if (result.isOk()) {
            finalObject[key] = result.value;
          } else {
            const error = result.error;
            errors.push([key, error]);
          }
        }, "runPredicate");
        for (const [key, predicate] of this.requiredKeys) {
          if (inputEntries.delete(key)) {
            runPredicate(key, predicate);
          } else {
            errors.push([key, new MissingPropertyError(key, this.validatorOptions)]);
          }
        }
        for (const [key, validator] of this.possiblyUndefinedKeysWithDefaults) {
          inputEntries.delete(key);
          runPredicate(key, validator);
        }
        if (inputEntries.size === 0) {
          return errors.length === 0 ? Result.ok(finalObject) : Result.err(new CombinedPropertyError(errors, this.validatorOptions));
        }
        const checkInputEntriesInsteadOfSchemaKeys = this.possiblyUndefinedKeys.size > inputEntries.size;
        if (checkInputEntriesInsteadOfSchemaKeys) {
          for (const [key] of inputEntries) {
            const predicate = this.possiblyUndefinedKeys.get(key);
            if (predicate) {
              runPredicate(key, predicate);
            }
          }
        } else {
          for (const [key, predicate] of this.possiblyUndefinedKeys) {
            if (inputEntries.delete(key)) {
              runPredicate(key, predicate);
            }
          }
        }
        return errors.length === 0 ? Result.ok(finalObject) : Result.err(new CombinedPropertyError(errors, this.validatorOptions));
      }
      handleStrictStrategy(value) {
        const errors = [];
        const finalResult = {};
        const inputEntries = new Map(Object.entries(value));
        const runPredicate = /* @__PURE__ */ __name2((key, predicate) => {
          const result = predicate.run(value[key]);
          if (result.isOk()) {
            finalResult[key] = result.value;
          } else {
            const error = result.error;
            errors.push([key, error]);
          }
        }, "runPredicate");
        for (const [key, predicate] of this.requiredKeys) {
          if (inputEntries.delete(key)) {
            runPredicate(key, predicate);
          } else {
            errors.push([key, new MissingPropertyError(key, this.validatorOptions)]);
          }
        }
        for (const [key, validator] of this.possiblyUndefinedKeysWithDefaults) {
          inputEntries.delete(key);
          runPredicate(key, validator);
        }
        for (const [key, predicate] of this.possiblyUndefinedKeys) {
          if (inputEntries.size === 0) {
            break;
          }
          if (inputEntries.delete(key)) {
            runPredicate(key, predicate);
          }
        }
        if (inputEntries.size !== 0) {
          for (const [key, value2] of inputEntries.entries()) {
            errors.push([key, new UnknownPropertyError(key, value2, this.validatorOptions)]);
          }
        }
        return errors.length === 0 ? Result.ok(finalResult) : Result.err(new CombinedPropertyError(errors, this.validatorOptions));
      }
      handlePassthroughStrategy(value) {
        const result = this.handleIgnoreStrategy(value);
        return result.isErr() ? result : Result.ok({ ...value, ...result.value });
      }
    }, "_ObjectValidator");
    __name2(_ObjectValidator, "ObjectValidator");
    var ObjectValidator = _ObjectValidator;
    var _PassthroughValidator = /* @__PURE__ */ __name(class _PassthroughValidator extends BaseValidator {
      handle(value) {
        return Result.ok(value);
      }
    }, "_PassthroughValidator");
    __name2(_PassthroughValidator, "PassthroughValidator");
    var PassthroughValidator = _PassthroughValidator;
    var _RecordValidator = /* @__PURE__ */ __name(class _RecordValidator extends BaseValidator {
      constructor(validator, validatorOptions = {}, constraints = []) {
        super(validatorOptions, constraints);
        this.validator = validator;
      }
      clone() {
        return Reflect.construct(this.constructor, [this.validator, this.validatorOptions, this.constraints]);
      }
      handle(value) {
        if (typeof value !== "object") {
          return Result.err(new ValidationError("s.record(T)", this.validatorOptions.message ?? "Expected an object", value));
        }
        if (value === null) {
          return Result.err(new ValidationError("s.record(T)", this.validatorOptions.message ?? "Expected the value to not be null", value));
        }
        if (Array.isArray(value)) {
          return Result.err(new ValidationError("s.record(T)", this.validatorOptions.message ?? "Expected the value to not be an array", value));
        }
        if (!this.shouldRunConstraints) {
          return Result.ok(value);
        }
        const errors = [];
        const transformed = {};
        for (const [key, val] of Object.entries(value)) {
          const result = this.validator.run(val);
          if (result.isOk())
            transformed[key] = result.value;
          else
            errors.push([key, result.error]);
        }
        return errors.length === 0 ? Result.ok(transformed) : Result.err(new CombinedPropertyError(errors, this.validatorOptions));
      }
    }, "_RecordValidator");
    __name2(_RecordValidator, "RecordValidator");
    var RecordValidator = _RecordValidator;
    var _SetValidator = /* @__PURE__ */ __name(class _SetValidator extends BaseValidator {
      constructor(validator, validatorOptions, constraints = []) {
        super(validatorOptions, constraints);
        this.validator = validator;
      }
      clone() {
        return Reflect.construct(this.constructor, [this.validator, this.validatorOptions, this.constraints]);
      }
      handle(values) {
        if (!(values instanceof Set)) {
          return Result.err(new ValidationError("s.set(T)", this.validatorOptions.message ?? "Expected a set", values));
        }
        if (!this.shouldRunConstraints) {
          return Result.ok(values);
        }
        const errors = [];
        const transformed = /* @__PURE__ */ new Set();
        for (const value of values) {
          const result = this.validator.run(value);
          if (result.isOk())
            transformed.add(result.value);
          else
            errors.push(result.error);
        }
        return errors.length === 0 ? Result.ok(transformed) : Result.err(new CombinedError(errors, this.validatorOptions));
      }
    }, "_SetValidator");
    __name2(_SetValidator, "SetValidator");
    var SetValidator = _SetValidator;
    var accountRegex = /^(?!\.)(?!.*\.\.)([A-Z0-9_+-\.]*)[A-Z0-9_+-]$/i;
    function validateEmail(email) {
      if (!email)
        return false;
      const atIndex = email.indexOf("@");
      if (atIndex === -1)
        return false;
      if (atIndex > 64)
        return false;
      const domainIndex = atIndex + 1;
      if (email.includes("@", domainIndex))
        return false;
      if (email.length - domainIndex > 255)
        return false;
      let dotIndex = email.indexOf(".", domainIndex);
      if (dotIndex === -1)
        return false;
      let lastDotIndex = domainIndex;
      do {
        if (dotIndex - lastDotIndex > 63)
          return false;
        lastDotIndex = dotIndex + 1;
      } while ((dotIndex = email.indexOf(".", lastDotIndex)) !== -1);
      if (email.length - lastDotIndex > 63)
        return false;
      return accountRegex.test(email.slice(0, atIndex)) && validateEmailDomain(email.slice(domainIndex));
    }
    __name(validateEmail, "validateEmail");
    __name2(validateEmail, "validateEmail");
    function validateEmailDomain(domain) {
      try {
        return new URL(`http://${domain}`).hostname === domain;
      } catch {
        return false;
      }
    }
    __name(validateEmailDomain, "validateEmailDomain");
    __name2(validateEmailDomain, "validateEmailDomain");
    var v4Seg = "(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])";
    var v4Str = `(${v4Seg}[.]){3}${v4Seg}`;
    var IPv4Reg = new RegExp(`^${v4Str}$`);
    var v6Seg = "(?:[0-9a-fA-F]{1,4})";
    var IPv6Reg = new RegExp(
      `^((?:${v6Seg}:){7}(?:${v6Seg}|:)|(?:${v6Seg}:){6}(?:${v4Str}|:${v6Seg}|:)|(?:${v6Seg}:){5}(?::${v4Str}|(:${v6Seg}){1,2}|:)|(?:${v6Seg}:){4}(?:(:${v6Seg}){0,1}:${v4Str}|(:${v6Seg}){1,3}|:)|(?:${v6Seg}:){3}(?:(:${v6Seg}){0,2}:${v4Str}|(:${v6Seg}){1,4}|:)|(?:${v6Seg}:){2}(?:(:${v6Seg}){0,3}:${v4Str}|(:${v6Seg}){1,5}|:)|(?:${v6Seg}:){1}(?:(:${v6Seg}){0,4}:${v4Str}|(:${v6Seg}){1,6}|:)|(?::((?::${v6Seg}){0,5}:${v4Str}|(?::${v6Seg}){1,7}|:)))(%[0-9a-zA-Z-.:]{1,})?$`
    );
    function isIPv4(s4) {
      return IPv4Reg.test(s4);
    }
    __name(isIPv4, "isIPv4");
    __name2(isIPv4, "isIPv4");
    function isIPv6(s4) {
      return IPv6Reg.test(s4);
    }
    __name(isIPv6, "isIPv6");
    __name2(isIPv6, "isIPv6");
    function isIP(s4) {
      if (isIPv4(s4))
        return 4;
      if (isIPv6(s4))
        return 6;
      return 0;
    }
    __name(isIP, "isIP");
    __name2(isIP, "isIP");
    var phoneNumberRegex = /^((?:\+|0{0,2})\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
    function validatePhoneNumber(input) {
      return phoneNumberRegex.test(input);
    }
    __name(validatePhoneNumber, "validatePhoneNumber");
    __name2(validatePhoneNumber, "validatePhoneNumber");
    var _MultiplePossibilitiesConstraintError = /* @__PURE__ */ __name(class _MultiplePossibilitiesConstraintError extends BaseConstraintError {
      constructor(constraint, message, given, expected) {
        super(constraint, message, given);
        this.expected = expected;
      }
      toJSON() {
        return {
          name: this.name,
          message: this.message,
          constraint: this.constraint,
          given: this.given,
          expected: this.expected
        };
      }
      [customInspectSymbolStackLess](depth, options) {
        const constraint = options.stylize(this.constraint, "string");
        if (depth < 0) {
          return options.stylize(`[MultiplePossibilitiesConstraintError: ${constraint}]`, "special");
        }
        const newOptions = { ...options, depth: options.depth === null ? null : options.depth - 1 };
        const verticalLine = options.stylize("|", "undefined");
        const padding = `
  ${verticalLine} `;
        const given = inspect2(this.given, newOptions).replace(/\n/g, padding);
        const header = `${options.stylize("MultiplePossibilitiesConstraintError", "special")} > ${constraint}`;
        const message = options.stylize(this.message, "regexp");
        const expectedPadding = `
  ${verticalLine} - `;
        const expectedBlock = `
  ${options.stylize("Expected any of the following:", "string")}${expectedPadding}${this.expected.map((possible) => options.stylize(possible, "boolean")).join(expectedPadding)}`;
        const givenBlock = `
  ${options.stylize("Received:", "regexp")}${padding}${given}`;
        return `${header}
  ${message}
${expectedBlock}
${givenBlock}`;
      }
    }, "_MultiplePossibilitiesConstraintError");
    __name2(_MultiplePossibilitiesConstraintError, "MultiplePossibilitiesConstraintError");
    var MultiplePossibilitiesConstraintError = _MultiplePossibilitiesConstraintError;
    function combinedErrorFn(...fns) {
      switch (fns.length) {
        case 0:
          return () => null;
        case 1:
          return fns[0];
        case 2: {
          const [fn0, fn1] = fns;
          return (...params) => fn0(...params) || fn1(...params);
        }
        default: {
          return (...params) => {
            for (const fn of fns) {
              const result = fn(...params);
              if (result)
                return result;
            }
            return null;
          };
        }
      }
    }
    __name(combinedErrorFn, "combinedErrorFn");
    __name2(combinedErrorFn, "combinedErrorFn");
    function createUrlValidators(options, validatorOptions) {
      const fns = [];
      if (options?.allowedProtocols?.length)
        fns.push(allowedProtocolsFn(options.allowedProtocols, validatorOptions));
      if (options?.allowedDomains?.length)
        fns.push(allowedDomainsFn(options.allowedDomains, validatorOptions));
      return combinedErrorFn(...fns);
    }
    __name(createUrlValidators, "createUrlValidators");
    __name2(createUrlValidators, "createUrlValidators");
    function allowedProtocolsFn(allowedProtocols, options) {
      return (input, url) => allowedProtocols.includes(url.protocol) ? null : new MultiplePossibilitiesConstraintError("s.string().url()", options?.message ?? "Invalid URL protocol", input, allowedProtocols);
    }
    __name(allowedProtocolsFn, "allowedProtocolsFn");
    __name2(allowedProtocolsFn, "allowedProtocolsFn");
    function allowedDomainsFn(allowedDomains, options) {
      return (input, url) => allowedDomains.includes(url.hostname) ? null : new MultiplePossibilitiesConstraintError("s.string().url()", options?.message ?? "Invalid URL domain", input, allowedDomains);
    }
    __name(allowedDomainsFn, "allowedDomainsFn");
    __name2(allowedDomainsFn, "allowedDomainsFn");
    function stringLengthComparator(comparator, name, expected, length, options) {
      return {
        run(input) {
          return comparator(input.length, length) ? Result.ok(input) : Result.err(new ExpectedConstraintError(name, options?.message ?? "Invalid string length", input, expected));
        }
      };
    }
    __name(stringLengthComparator, "stringLengthComparator");
    __name2(stringLengthComparator, "stringLengthComparator");
    function stringLengthLessThan(length, options) {
      const expected = `expected.length < ${length}`;
      return stringLengthComparator(lessThan, "s.string().lengthLessThan()", expected, length, options);
    }
    __name(stringLengthLessThan, "stringLengthLessThan");
    __name2(stringLengthLessThan, "stringLengthLessThan");
    function stringLengthLessThanOrEqual(length, options) {
      const expected = `expected.length <= ${length}`;
      return stringLengthComparator(lessThanOrEqual, "s.string().lengthLessThanOrEqual()", expected, length, options);
    }
    __name(stringLengthLessThanOrEqual, "stringLengthLessThanOrEqual");
    __name2(stringLengthLessThanOrEqual, "stringLengthLessThanOrEqual");
    function stringLengthGreaterThan(length, options) {
      const expected = `expected.length > ${length}`;
      return stringLengthComparator(greaterThan, "s.string().lengthGreaterThan()", expected, length, options);
    }
    __name(stringLengthGreaterThan, "stringLengthGreaterThan");
    __name2(stringLengthGreaterThan, "stringLengthGreaterThan");
    function stringLengthGreaterThanOrEqual(length, options) {
      const expected = `expected.length >= ${length}`;
      return stringLengthComparator(greaterThanOrEqual, "s.string().lengthGreaterThanOrEqual()", expected, length, options);
    }
    __name(stringLengthGreaterThanOrEqual, "stringLengthGreaterThanOrEqual");
    __name2(stringLengthGreaterThanOrEqual, "stringLengthGreaterThanOrEqual");
    function stringLengthEqual(length, options) {
      const expected = `expected.length === ${length}`;
      return stringLengthComparator(equal, "s.string().lengthEqual()", expected, length, options);
    }
    __name(stringLengthEqual, "stringLengthEqual");
    __name2(stringLengthEqual, "stringLengthEqual");
    function stringLengthNotEqual(length, options) {
      const expected = `expected.length !== ${length}`;
      return stringLengthComparator(notEqual, "s.string().lengthNotEqual()", expected, length, options);
    }
    __name(stringLengthNotEqual, "stringLengthNotEqual");
    __name2(stringLengthNotEqual, "stringLengthNotEqual");
    function stringEmail(options) {
      return {
        run(input) {
          return validateEmail(input) ? Result.ok(input) : Result.err(
            new ExpectedConstraintError(
              "s.string().email()",
              options?.message ?? "Invalid email address",
              input,
              "expected to be an email address"
            )
          );
        }
      };
    }
    __name(stringEmail, "stringEmail");
    __name2(stringEmail, "stringEmail");
    function stringRegexValidator(type, expected, regex, options) {
      return {
        run(input) {
          return regex.test(input) ? Result.ok(input) : Result.err(new ExpectedConstraintError(type, options?.message ?? "Invalid string format", input, expected));
        }
      };
    }
    __name(stringRegexValidator, "stringRegexValidator");
    __name2(stringRegexValidator, "stringRegexValidator");
    function stringUrl(options, validatorOptions) {
      const validatorFn = createUrlValidators(options, validatorOptions);
      return {
        run(input) {
          let url;
          try {
            url = new URL(input);
          } catch {
            return Result.err(
              new ExpectedConstraintError("s.string().url()", validatorOptions?.message ?? "Invalid URL", input, "expected to match a URL")
            );
          }
          const validatorFnResult = validatorFn(input, url);
          if (validatorFnResult === null)
            return Result.ok(input);
          return Result.err(validatorFnResult);
        }
      };
    }
    __name(stringUrl, "stringUrl");
    __name2(stringUrl, "stringUrl");
    function stringIp(version, options) {
      const ipVersion = version ? `v${version}` : "";
      const validatorFn = version === 4 ? isIPv4 : version === 6 ? isIPv6 : isIP;
      const name = `s.string().ip${ipVersion}()`;
      const message = `Invalid IP${ipVersion} address`;
      const expected = `expected to be an IP${ipVersion} address`;
      return {
        run(input) {
          return validatorFn(input) ? Result.ok(input) : Result.err(new ExpectedConstraintError(name, options?.message ?? message, input, expected));
        }
      };
    }
    __name(stringIp, "stringIp");
    __name2(stringIp, "stringIp");
    function stringRegex(regex, options) {
      return stringRegexValidator("s.string().regex()", `expected ${regex}.test(expected) to be true`, regex, options);
    }
    __name(stringRegex, "stringRegex");
    __name2(stringRegex, "stringRegex");
    function stringUuid({ version = 4, nullable = false } = {}, options) {
      version ?? (version = "1-5");
      const regex = new RegExp(
        `^(?:[0-9A-F]{8}-[0-9A-F]{4}-[${version}][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}${nullable ? "|00000000-0000-0000-0000-000000000000" : ""})$`,
        "i"
      );
      const expected = `expected to match UUID${typeof version === "number" ? `v${version}` : ` in range of ${version}`}`;
      return stringRegexValidator("s.string().uuid()", expected, regex, options);
    }
    __name(stringUuid, "stringUuid");
    __name2(stringUuid, "stringUuid");
    function stringDate(options) {
      return {
        run(input) {
          const time = Date.parse(input);
          return Number.isNaN(time) ? Result.err(
            new ExpectedConstraintError(
              "s.string().date()",
              options?.message ?? "Invalid date string",
              input,
              "expected to be a valid date string (in the ISO 8601 or ECMA-262 format)"
            )
          ) : Result.ok(input);
        }
      };
    }
    __name(stringDate, "stringDate");
    __name2(stringDate, "stringDate");
    function stringPhone(options) {
      return {
        run(input) {
          return validatePhoneNumber(input) ? Result.ok(input) : Result.err(
            new ExpectedConstraintError(
              "s.string().phone()",
              options?.message ?? "Invalid phone number",
              input,
              "expected to be a phone number"
            )
          );
        }
      };
    }
    __name(stringPhone, "stringPhone");
    __name2(stringPhone, "stringPhone");
    var _StringValidator = /* @__PURE__ */ __name(class _StringValidator extends BaseValidator {
      lengthLessThan(length, options = this.validatorOptions) {
        return this.addConstraint(stringLengthLessThan(length, options));
      }
      lengthLessThanOrEqual(length, options = this.validatorOptions) {
        return this.addConstraint(stringLengthLessThanOrEqual(length, options));
      }
      lengthGreaterThan(length, options = this.validatorOptions) {
        return this.addConstraint(stringLengthGreaterThan(length, options));
      }
      lengthGreaterThanOrEqual(length, options = this.validatorOptions) {
        return this.addConstraint(stringLengthGreaterThanOrEqual(length, options));
      }
      lengthEqual(length, options = this.validatorOptions) {
        return this.addConstraint(stringLengthEqual(length, options));
      }
      lengthNotEqual(length, options = this.validatorOptions) {
        return this.addConstraint(stringLengthNotEqual(length, options));
      }
      email(options = this.validatorOptions) {
        return this.addConstraint(stringEmail(options));
      }
      url(options, validatorOptions = this.validatorOptions) {
        const urlOptions = this.isUrlOptions(options);
        if (urlOptions) {
          return this.addConstraint(stringUrl(options, validatorOptions));
        }
        return this.addConstraint(stringUrl(void 0, validatorOptions));
      }
      uuid(options, validatorOptions = this.validatorOptions) {
        const stringUuidOptions = this.isStringUuidOptions(options);
        if (stringUuidOptions) {
          return this.addConstraint(stringUuid(options, validatorOptions));
        }
        return this.addConstraint(stringUuid(void 0, validatorOptions));
      }
      regex(regex, options = this.validatorOptions) {
        return this.addConstraint(stringRegex(regex, options));
      }
      date(options = this.validatorOptions) {
        return this.addConstraint(stringDate(options));
      }
      ipv4(options = this.validatorOptions) {
        return this.ip(4, options);
      }
      ipv6(options = this.validatorOptions) {
        return this.ip(6, options);
      }
      ip(version, options = this.validatorOptions) {
        return this.addConstraint(stringIp(version, options));
      }
      phone(options = this.validatorOptions) {
        return this.addConstraint(stringPhone(options));
      }
      handle(value) {
        return typeof value === "string" ? Result.ok(value) : Result.err(new ValidationError("s.string()", this.validatorOptions.message ?? "Expected a string primitive", value));
      }
      isUrlOptions(options) {
        return options?.message === void 0;
      }
      isStringUuidOptions(options) {
        return options?.message === void 0;
      }
    }, "_StringValidator");
    __name2(_StringValidator, "StringValidator");
    var StringValidator = _StringValidator;
    var _TupleValidator = /* @__PURE__ */ __name(class _TupleValidator extends BaseValidator {
      constructor(validators, validatorOptions = {}, constraints = []) {
        super(validatorOptions, constraints);
        this.validators = [];
        this.validators = validators;
      }
      clone() {
        return Reflect.construct(this.constructor, [this.validators, this.validatorOptions, this.constraints]);
      }
      handle(values) {
        if (!Array.isArray(values)) {
          return Result.err(new ValidationError("s.tuple(T)", this.validatorOptions.message ?? "Expected an array", values));
        }
        if (values.length !== this.validators.length) {
          return Result.err(
            new ValidationError("s.tuple(T)", this.validatorOptions.message ?? `Expected an array of length ${this.validators.length}`, values)
          );
        }
        if (!this.shouldRunConstraints) {
          return Result.ok(values);
        }
        const errors = [];
        const transformed = [];
        for (let i3 = 0; i3 < values.length; i3++) {
          const result = this.validators[i3].run(values[i3]);
          if (result.isOk())
            transformed.push(result.value);
          else
            errors.push([i3, result.error]);
        }
        return errors.length === 0 ? Result.ok(transformed) : Result.err(new CombinedPropertyError(errors, this.validatorOptions));
      }
    }, "_TupleValidator");
    __name2(_TupleValidator, "TupleValidator");
    var TupleValidator = _TupleValidator;
    var _MapValidator = /* @__PURE__ */ __name(class _MapValidator extends BaseValidator {
      constructor(keyValidator, valueValidator, validatorOptions = {}, constraints = []) {
        super(validatorOptions, constraints);
        this.keyValidator = keyValidator;
        this.valueValidator = valueValidator;
      }
      clone() {
        return Reflect.construct(this.constructor, [this.keyValidator, this.valueValidator, this.validatorOptions, this.constraints]);
      }
      handle(value) {
        if (!(value instanceof Map)) {
          return Result.err(new ValidationError("s.map(K, V)", this.validatorOptions.message ?? "Expected a map", value));
        }
        if (!this.shouldRunConstraints) {
          return Result.ok(value);
        }
        const errors = [];
        const transformed = /* @__PURE__ */ new Map();
        for (const [key, val] of value.entries()) {
          const keyResult = this.keyValidator.run(key);
          const valueResult = this.valueValidator.run(val);
          const { length } = errors;
          if (keyResult.isErr())
            errors.push([key, keyResult.error]);
          if (valueResult.isErr())
            errors.push([key, valueResult.error]);
          if (errors.length === length)
            transformed.set(keyResult.value, valueResult.value);
        }
        return errors.length === 0 ? Result.ok(transformed) : Result.err(new CombinedPropertyError(errors, this.validatorOptions));
      }
    }, "_MapValidator");
    __name2(_MapValidator, "MapValidator");
    var MapValidator = _MapValidator;
    var _LazyValidator = /* @__PURE__ */ __name(class _LazyValidator extends BaseValidator {
      constructor(validator, validatorOptions = {}, constraints = []) {
        super(validatorOptions, constraints);
        this.validator = validator;
      }
      clone() {
        return Reflect.construct(this.constructor, [this.validator, this.validatorOptions, this.constraints]);
      }
      handle(values) {
        return this.validator(values).run(values);
      }
    }, "_LazyValidator");
    __name2(_LazyValidator, "LazyValidator");
    var LazyValidator = _LazyValidator;
    var _UnknownEnumValueError = /* @__PURE__ */ __name(class _UnknownEnumValueError extends BaseError {
      constructor(value, keys, enumMappings, validatorOptions) {
        super(validatorOptions?.message ?? "Expected the value to be one of the following enum values:");
        this.value = value;
        this.enumKeys = keys;
        this.enumMappings = enumMappings;
      }
      toJSON() {
        return {
          name: this.name,
          message: this.message,
          value: this.value,
          enumKeys: this.enumKeys,
          enumMappings: [...this.enumMappings.entries()]
        };
      }
      [customInspectSymbolStackLess](depth, options) {
        const value = options.stylize(this.value.toString(), "string");
        if (depth < 0) {
          return options.stylize(`[UnknownEnumValueError: ${value}]`, "special");
        }
        const padding = `
  ${options.stylize("|", "undefined")} `;
        const pairs = this.enumKeys.map((key) => {
          const enumValue = this.enumMappings.get(key);
          return `${options.stylize(key, "string")} or ${options.stylize(
            enumValue.toString(),
            typeof enumValue === "number" ? "number" : "string"
          )}`;
        }).join(padding);
        const header = `${options.stylize("UnknownEnumValueError", "special")} > ${value}`;
        const message = options.stylize(this.message, "regexp");
        const pairsBlock = `${padding}${pairs}`;
        return `${header}
  ${message}
${pairsBlock}`;
      }
    }, "_UnknownEnumValueError");
    __name2(_UnknownEnumValueError, "UnknownEnumValueError");
    var UnknownEnumValueError = _UnknownEnumValueError;
    var _NativeEnumValidator = /* @__PURE__ */ __name(class _NativeEnumValidator extends BaseValidator {
      constructor(enumShape, validatorOptions = {}) {
        super(validatorOptions);
        this.hasNumericElements = false;
        this.enumMapping = /* @__PURE__ */ new Map();
        this.enumShape = enumShape;
        this.enumKeys = Object.keys(enumShape).filter((key) => {
          return typeof enumShape[enumShape[key]] !== "number";
        });
        for (const key of this.enumKeys) {
          const enumValue = enumShape[key];
          this.enumMapping.set(key, enumValue);
          this.enumMapping.set(enumValue, enumValue);
          if (typeof enumValue === "number") {
            this.hasNumericElements = true;
            this.enumMapping.set(`${enumValue}`, enumValue);
          }
        }
      }
      handle(value) {
        const typeOfValue = typeof value;
        if (typeOfValue === "number") {
          if (!this.hasNumericElements) {
            return Result.err(
              new ValidationError("s.nativeEnum(T)", this.validatorOptions.message ?? "Expected the value to be a string", value)
            );
          }
        } else if (typeOfValue !== "string") {
          return Result.err(
            new ValidationError("s.nativeEnum(T)", this.validatorOptions.message ?? "Expected the value to be a string or number", value)
          );
        }
        const casted = value;
        const possibleEnumValue = this.enumMapping.get(casted);
        return typeof possibleEnumValue === "undefined" ? Result.err(new UnknownEnumValueError(casted, this.enumKeys, this.enumMapping, this.validatorOptions)) : Result.ok(possibleEnumValue);
      }
      clone() {
        return Reflect.construct(this.constructor, [this.enumShape, this.validatorOptions]);
      }
    }, "_NativeEnumValidator");
    __name2(_NativeEnumValidator, "NativeEnumValidator");
    var NativeEnumValidator = _NativeEnumValidator;
    function typedArrayByteLengthComparator(comparator, name, expected, length, options) {
      return {
        run(input) {
          return comparator(input.byteLength, length) ? Result.ok(input) : Result.err(new ExpectedConstraintError(name, options?.message ?? "Invalid Typed Array byte length", input, expected));
        }
      };
    }
    __name(typedArrayByteLengthComparator, "typedArrayByteLengthComparator");
    __name2(typedArrayByteLengthComparator, "typedArrayByteLengthComparator");
    function typedArrayByteLengthLessThan(value, options) {
      const expected = `expected.byteLength < ${value}`;
      return typedArrayByteLengthComparator(lessThan, "s.typedArray(T).byteLengthLessThan()", expected, value, options);
    }
    __name(typedArrayByteLengthLessThan, "typedArrayByteLengthLessThan");
    __name2(typedArrayByteLengthLessThan, "typedArrayByteLengthLessThan");
    function typedArrayByteLengthLessThanOrEqual(value, options) {
      const expected = `expected.byteLength <= ${value}`;
      return typedArrayByteLengthComparator(lessThanOrEqual, "s.typedArray(T).byteLengthLessThanOrEqual()", expected, value, options);
    }
    __name(typedArrayByteLengthLessThanOrEqual, "typedArrayByteLengthLessThanOrEqual");
    __name2(typedArrayByteLengthLessThanOrEqual, "typedArrayByteLengthLessThanOrEqual");
    function typedArrayByteLengthGreaterThan(value, options) {
      const expected = `expected.byteLength > ${value}`;
      return typedArrayByteLengthComparator(greaterThan, "s.typedArray(T).byteLengthGreaterThan()", expected, value, options);
    }
    __name(typedArrayByteLengthGreaterThan, "typedArrayByteLengthGreaterThan");
    __name2(typedArrayByteLengthGreaterThan, "typedArrayByteLengthGreaterThan");
    function typedArrayByteLengthGreaterThanOrEqual(value, options) {
      const expected = `expected.byteLength >= ${value}`;
      return typedArrayByteLengthComparator(greaterThanOrEqual, "s.typedArray(T).byteLengthGreaterThanOrEqual()", expected, value, options);
    }
    __name(typedArrayByteLengthGreaterThanOrEqual, "typedArrayByteLengthGreaterThanOrEqual");
    __name2(typedArrayByteLengthGreaterThanOrEqual, "typedArrayByteLengthGreaterThanOrEqual");
    function typedArrayByteLengthEqual(value, options) {
      const expected = `expected.byteLength === ${value}`;
      return typedArrayByteLengthComparator(equal, "s.typedArray(T).byteLengthEqual()", expected, value, options);
    }
    __name(typedArrayByteLengthEqual, "typedArrayByteLengthEqual");
    __name2(typedArrayByteLengthEqual, "typedArrayByteLengthEqual");
    function typedArrayByteLengthNotEqual(value, options) {
      const expected = `expected.byteLength !== ${value}`;
      return typedArrayByteLengthComparator(notEqual, "s.typedArray(T).byteLengthNotEqual()", expected, value, options);
    }
    __name(typedArrayByteLengthNotEqual, "typedArrayByteLengthNotEqual");
    __name2(typedArrayByteLengthNotEqual, "typedArrayByteLengthNotEqual");
    function typedArrayByteLengthRange(start, endBefore, options) {
      const expected = `expected.byteLength >= ${start} && expected.byteLength < ${endBefore}`;
      return {
        run(input) {
          return input.byteLength >= start && input.byteLength < endBefore ? Result.ok(input) : Result.err(
            new ExpectedConstraintError(
              "s.typedArray(T).byteLengthRange()",
              options?.message ?? "Invalid Typed Array byte length",
              input,
              expected
            )
          );
        }
      };
    }
    __name(typedArrayByteLengthRange, "typedArrayByteLengthRange");
    __name2(typedArrayByteLengthRange, "typedArrayByteLengthRange");
    function typedArrayByteLengthRangeInclusive(start, end, options) {
      const expected = `expected.byteLength >= ${start} && expected.byteLength <= ${end}`;
      return {
        run(input) {
          return input.byteLength >= start && input.byteLength <= end ? Result.ok(input) : Result.err(
            new ExpectedConstraintError(
              "s.typedArray(T).byteLengthRangeInclusive()",
              options?.message ?? "Invalid Typed Array byte length",
              input,
              expected
            )
          );
        }
      };
    }
    __name(typedArrayByteLengthRangeInclusive, "typedArrayByteLengthRangeInclusive");
    __name2(typedArrayByteLengthRangeInclusive, "typedArrayByteLengthRangeInclusive");
    function typedArrayByteLengthRangeExclusive(startAfter, endBefore, options) {
      const expected = `expected.byteLength > ${startAfter} && expected.byteLength < ${endBefore}`;
      return {
        run(input) {
          return input.byteLength > startAfter && input.byteLength < endBefore ? Result.ok(input) : Result.err(
            new ExpectedConstraintError(
              "s.typedArray(T).byteLengthRangeExclusive()",
              options?.message ?? "Invalid Typed Array byte length",
              input,
              expected
            )
          );
        }
      };
    }
    __name(typedArrayByteLengthRangeExclusive, "typedArrayByteLengthRangeExclusive");
    __name2(typedArrayByteLengthRangeExclusive, "typedArrayByteLengthRangeExclusive");
    function typedArrayLengthComparator(comparator, name, expected, length, options) {
      return {
        run(input) {
          return comparator(input.length, length) ? Result.ok(input) : Result.err(new ExpectedConstraintError(name, options?.message ?? "Invalid Typed Array length", input, expected));
        }
      };
    }
    __name(typedArrayLengthComparator, "typedArrayLengthComparator");
    __name2(typedArrayLengthComparator, "typedArrayLengthComparator");
    function typedArrayLengthLessThan(value, options) {
      const expected = `expected.length < ${value}`;
      return typedArrayLengthComparator(lessThan, "s.typedArray(T).lengthLessThan()", expected, value, options);
    }
    __name(typedArrayLengthLessThan, "typedArrayLengthLessThan");
    __name2(typedArrayLengthLessThan, "typedArrayLengthLessThan");
    function typedArrayLengthLessThanOrEqual(value, options) {
      const expected = `expected.length <= ${value}`;
      return typedArrayLengthComparator(lessThanOrEqual, "s.typedArray(T).lengthLessThanOrEqual()", expected, value, options);
    }
    __name(typedArrayLengthLessThanOrEqual, "typedArrayLengthLessThanOrEqual");
    __name2(typedArrayLengthLessThanOrEqual, "typedArrayLengthLessThanOrEqual");
    function typedArrayLengthGreaterThan(value, options) {
      const expected = `expected.length > ${value}`;
      return typedArrayLengthComparator(greaterThan, "s.typedArray(T).lengthGreaterThan()", expected, value, options);
    }
    __name(typedArrayLengthGreaterThan, "typedArrayLengthGreaterThan");
    __name2(typedArrayLengthGreaterThan, "typedArrayLengthGreaterThan");
    function typedArrayLengthGreaterThanOrEqual(value, options) {
      const expected = `expected.length >= ${value}`;
      return typedArrayLengthComparator(greaterThanOrEqual, "s.typedArray(T).lengthGreaterThanOrEqual()", expected, value, options);
    }
    __name(typedArrayLengthGreaterThanOrEqual, "typedArrayLengthGreaterThanOrEqual");
    __name2(typedArrayLengthGreaterThanOrEqual, "typedArrayLengthGreaterThanOrEqual");
    function typedArrayLengthEqual(value, options) {
      const expected = `expected.length === ${value}`;
      return typedArrayLengthComparator(equal, "s.typedArray(T).lengthEqual()", expected, value, options);
    }
    __name(typedArrayLengthEqual, "typedArrayLengthEqual");
    __name2(typedArrayLengthEqual, "typedArrayLengthEqual");
    function typedArrayLengthNotEqual(value, options) {
      const expected = `expected.length !== ${value}`;
      return typedArrayLengthComparator(notEqual, "s.typedArray(T).lengthNotEqual()", expected, value, options);
    }
    __name(typedArrayLengthNotEqual, "typedArrayLengthNotEqual");
    __name2(typedArrayLengthNotEqual, "typedArrayLengthNotEqual");
    function typedArrayLengthRange(start, endBefore, options) {
      const expected = `expected.length >= ${start} && expected.length < ${endBefore}`;
      return {
        run(input) {
          return input.length >= start && input.length < endBefore ? Result.ok(input) : Result.err(
            new ExpectedConstraintError(
              "s.typedArray(T).lengthRange()",
              options?.message ?? "Invalid Typed Array length",
              input,
              expected
            )
          );
        }
      };
    }
    __name(typedArrayLengthRange, "typedArrayLengthRange");
    __name2(typedArrayLengthRange, "typedArrayLengthRange");
    function typedArrayLengthRangeInclusive(start, end, options) {
      const expected = `expected.length >= ${start} && expected.length <= ${end}`;
      return {
        run(input) {
          return input.length >= start && input.length <= end ? Result.ok(input) : Result.err(
            new ExpectedConstraintError(
              "s.typedArray(T).lengthRangeInclusive()",
              options?.message ?? "Invalid Typed Array length",
              input,
              expected
            )
          );
        }
      };
    }
    __name(typedArrayLengthRangeInclusive, "typedArrayLengthRangeInclusive");
    __name2(typedArrayLengthRangeInclusive, "typedArrayLengthRangeInclusive");
    function typedArrayLengthRangeExclusive(startAfter, endBefore, options) {
      const expected = `expected.length > ${startAfter} && expected.length < ${endBefore}`;
      return {
        run(input) {
          return input.length > startAfter && input.length < endBefore ? Result.ok(input) : Result.err(
            new ExpectedConstraintError(
              "s.typedArray(T).lengthRangeExclusive()",
              options?.message ?? "Invalid Typed Array length",
              input,
              expected
            )
          );
        }
      };
    }
    __name(typedArrayLengthRangeExclusive, "typedArrayLengthRangeExclusive");
    __name2(typedArrayLengthRangeExclusive, "typedArrayLengthRangeExclusive");
    var vowels = ["a", "e", "i", "o", "u"];
    var aOrAn = /* @__PURE__ */ __name2((word) => {
      return `${vowels.includes(word[0].toLowerCase()) ? "an" : "a"} ${word}`;
    }, "aOrAn");
    var TypedArrays = {
      Int8Array: (x2) => x2 instanceof Int8Array,
      Uint8Array: (x2) => x2 instanceof Uint8Array,
      Uint8ClampedArray: (x2) => x2 instanceof Uint8ClampedArray,
      Int16Array: (x2) => x2 instanceof Int16Array,
      Uint16Array: (x2) => x2 instanceof Uint16Array,
      Int32Array: (x2) => x2 instanceof Int32Array,
      Uint32Array: (x2) => x2 instanceof Uint32Array,
      Float32Array: (x2) => x2 instanceof Float32Array,
      Float64Array: (x2) => x2 instanceof Float64Array,
      BigInt64Array: (x2) => x2 instanceof BigInt64Array,
      BigUint64Array: (x2) => x2 instanceof BigUint64Array,
      TypedArray: (x2) => ArrayBuffer.isView(x2) && !(x2 instanceof DataView)
    };
    var _TypedArrayValidator = /* @__PURE__ */ __name(class _TypedArrayValidator extends BaseValidator {
      constructor(type, validatorOptions = {}, constraints = []) {
        super(validatorOptions, constraints);
        this.type = type;
      }
      byteLengthLessThan(length, options = this.validatorOptions) {
        return this.addConstraint(typedArrayByteLengthLessThan(length, options));
      }
      byteLengthLessThanOrEqual(length, options = this.validatorOptions) {
        return this.addConstraint(typedArrayByteLengthLessThanOrEqual(length, options));
      }
      byteLengthGreaterThan(length, options = this.validatorOptions) {
        return this.addConstraint(typedArrayByteLengthGreaterThan(length, options));
      }
      byteLengthGreaterThanOrEqual(length, options = this.validatorOptions) {
        return this.addConstraint(typedArrayByteLengthGreaterThanOrEqual(length, options));
      }
      byteLengthEqual(length, options = this.validatorOptions) {
        return this.addConstraint(typedArrayByteLengthEqual(length, options));
      }
      byteLengthNotEqual(length, options = this.validatorOptions) {
        return this.addConstraint(typedArrayByteLengthNotEqual(length, options));
      }
      byteLengthRange(start, endBefore, options = this.validatorOptions) {
        return this.addConstraint(typedArrayByteLengthRange(start, endBefore, options));
      }
      byteLengthRangeInclusive(startAt, endAt, options = this.validatorOptions) {
        return this.addConstraint(typedArrayByteLengthRangeInclusive(startAt, endAt, options));
      }
      byteLengthRangeExclusive(startAfter, endBefore, options = this.validatorOptions) {
        return this.addConstraint(typedArrayByteLengthRangeExclusive(startAfter, endBefore, options));
      }
      lengthLessThan(length, options = this.validatorOptions) {
        return this.addConstraint(typedArrayLengthLessThan(length, options));
      }
      lengthLessThanOrEqual(length, options = this.validatorOptions) {
        return this.addConstraint(typedArrayLengthLessThanOrEqual(length, options));
      }
      lengthGreaterThan(length, options = this.validatorOptions) {
        return this.addConstraint(typedArrayLengthGreaterThan(length, options));
      }
      lengthGreaterThanOrEqual(length, options = this.validatorOptions) {
        return this.addConstraint(typedArrayLengthGreaterThanOrEqual(length, options));
      }
      lengthEqual(length, options = this.validatorOptions) {
        return this.addConstraint(typedArrayLengthEqual(length, options));
      }
      lengthNotEqual(length, options = this.validatorOptions) {
        return this.addConstraint(typedArrayLengthNotEqual(length, options));
      }
      lengthRange(start, endBefore, options = this.validatorOptions) {
        return this.addConstraint(typedArrayLengthRange(start, endBefore, options));
      }
      lengthRangeInclusive(startAt, endAt, options = this.validatorOptions) {
        return this.addConstraint(typedArrayLengthRangeInclusive(startAt, endAt, options));
      }
      lengthRangeExclusive(startAfter, endBefore, options = this.validatorOptions) {
        return this.addConstraint(typedArrayLengthRangeExclusive(startAfter, endBefore, options));
      }
      clone() {
        return Reflect.construct(this.constructor, [this.type, this.validatorOptions, this.constraints]);
      }
      handle(value) {
        return TypedArrays[this.type](value) ? Result.ok(value) : Result.err(new ValidationError("s.typedArray()", this.validatorOptions.message ?? `Expected ${aOrAn(this.type)}`, value));
      }
    }, "_TypedArrayValidator");
    __name2(_TypedArrayValidator, "TypedArrayValidator");
    var TypedArrayValidator = _TypedArrayValidator;
    var _Shapes = /* @__PURE__ */ __name(class _Shapes {
      string(options) {
        return new StringValidator(options);
      }
      number(options) {
        return new NumberValidator(options);
      }
      bigint(options) {
        return new BigIntValidator(options);
      }
      boolean(options) {
        return new BooleanValidator(options);
      }
      date(options) {
        return new DateValidator(options);
      }
      object(shape, options) {
        return new ObjectValidator(shape, 0, options);
      }
      undefined(options) {
        return this.literal(void 0, { equalsOptions: options });
      }
      null(options) {
        return this.literal(null, { equalsOptions: options });
      }
      nullish(options) {
        return new NullishValidator(options);
      }
      any(options) {
        return new PassthroughValidator(options);
      }
      unknown(options) {
        return new PassthroughValidator(options);
      }
      never(options) {
        return new NeverValidator(options);
      }
      enum(values, options) {
        return this.union(
          values.map((value) => this.literal(value, { equalsOptions: options })),
          options
        );
      }
      nativeEnum(enumShape, options) {
        return new NativeEnumValidator(enumShape, options);
      }
      literal(value, options) {
        if (value instanceof Date) {
          return this.date(options?.dateOptions).equal(value, options?.equalsOptions);
        }
        return new LiteralValidator(value, options?.equalsOptions);
      }
      instance(expected, options) {
        return new InstanceValidator(expected, options);
      }
      union(validators, options) {
        return new UnionValidator(validators, options);
      }
      array(validator, options) {
        return new ArrayValidator(validator, options);
      }
      typedArray(type = "TypedArray", options) {
        return new TypedArrayValidator(type, options);
      }
      int8Array(options) {
        return this.typedArray("Int8Array", options);
      }
      uint8Array(options) {
        return this.typedArray("Uint8Array", options);
      }
      uint8ClampedArray(options) {
        return this.typedArray("Uint8ClampedArray", options);
      }
      int16Array(options) {
        return this.typedArray("Int16Array", options);
      }
      uint16Array(options) {
        return this.typedArray("Uint16Array", options);
      }
      int32Array(options) {
        return this.typedArray("Int32Array", options);
      }
      uint32Array(options) {
        return this.typedArray("Uint32Array", options);
      }
      float32Array(options) {
        return this.typedArray("Float32Array", options);
      }
      float64Array(options) {
        return this.typedArray("Float64Array", options);
      }
      bigInt64Array(options) {
        return this.typedArray("BigInt64Array", options);
      }
      bigUint64Array(options) {
        return this.typedArray("BigUint64Array", options);
      }
      tuple(validators, options) {
        return new TupleValidator(validators, options);
      }
      set(validator, options) {
        return new SetValidator(validator, options);
      }
      record(validator, options) {
        return new RecordValidator(validator, options);
      }
      map(keyValidator, valueValidator, options) {
        return new MapValidator(keyValidator, valueValidator, options);
      }
      lazy(validator, options) {
        return new LazyValidator(validator, options);
      }
    }, "_Shapes");
    __name2(_Shapes, "Shapes");
    var Shapes = _Shapes;
    var s3 = new Shapes();
    exports.BaseError = BaseError;
    exports.CombinedError = CombinedError;
    exports.CombinedPropertyError = CombinedPropertyError;
    exports.ExpectedConstraintError = ExpectedConstraintError;
    exports.ExpectedValidationError = ExpectedValidationError;
    exports.MissingPropertyError = MissingPropertyError;
    exports.MultiplePossibilitiesConstraintError = MultiplePossibilitiesConstraintError;
    exports.Result = Result;
    exports.UnknownEnumValueError = UnknownEnumValueError;
    exports.UnknownPropertyError = UnknownPropertyError;
    exports.ValidationError = ValidationError;
    exports.customInspectSymbol = customInspectSymbol;
    exports.customInspectSymbolStackLess = customInspectSymbolStackLess;
    exports.getGlobalValidationEnabled = getGlobalValidationEnabled;
    exports.s = s3;
    exports.setGlobalValidationEnabled = setGlobalValidationEnabled;
  }
});

// node_modules/@discordjs/formatters/dist/index.js
var require_dist2 = __commonJS({
  "node_modules/@discordjs/formatters/dist/index.js"(exports, module) {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __name2 = /* @__PURE__ */ __name((target, value) => __defProp2(target, "name", { value, configurable: true }), "__name");
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    __export2(src_exports, {
      Faces: () => Faces,
      GuildNavigationMentions: () => GuildNavigationMentions,
      HeadingLevel: () => HeadingLevel,
      TimestampStyles: () => TimestampStyles,
      applicationDirectory: () => applicationDirectory,
      blockQuote: () => blockQuote,
      bold: () => bold,
      channelLink: () => channelLink,
      channelMention: () => channelMention,
      chatInputApplicationCommandMention: () => chatInputApplicationCommandMention,
      codeBlock: () => codeBlock,
      escapeBold: () => escapeBold,
      escapeBulletedList: () => escapeBulletedList,
      escapeCodeBlock: () => escapeCodeBlock,
      escapeEscape: () => escapeEscape,
      escapeHeading: () => escapeHeading,
      escapeInlineCode: () => escapeInlineCode,
      escapeItalic: () => escapeItalic,
      escapeMarkdown: () => escapeMarkdown,
      escapeMaskedLink: () => escapeMaskedLink,
      escapeNumberedList: () => escapeNumberedList,
      escapeSpoiler: () => escapeSpoiler,
      escapeStrikethrough: () => escapeStrikethrough,
      escapeUnderline: () => escapeUnderline,
      formatEmoji: () => formatEmoji,
      heading: () => heading,
      hideLinkEmbed: () => hideLinkEmbed,
      hyperlink: () => hyperlink,
      inlineCode: () => inlineCode,
      italic: () => italic,
      messageLink: () => messageLink,
      orderedList: () => orderedList,
      quote: () => quote,
      roleMention: () => roleMention,
      spoiler: () => spoiler,
      strikethrough: () => strikethrough,
      subtext: () => subtext,
      time: () => time,
      underline: () => underline,
      underscore: () => underscore,
      unorderedList: () => unorderedList,
      userMention: () => userMention,
      version: () => version
    });
    module.exports = __toCommonJS2(src_exports);
    function escapeMarkdown(text, options = {}) {
      const {
        codeBlock: codeBlock2 = true,
        inlineCode: inlineCode2 = true,
        bold: bold2 = true,
        italic: italic2 = true,
        underline: underline2 = true,
        strikethrough: strikethrough2 = true,
        spoiler: spoiler2 = true,
        codeBlockContent = true,
        inlineCodeContent = true,
        escape = true,
        heading: heading2 = false,
        bulletedList = false,
        numberedList = false,
        maskedLink = false
      } = options;
      if (!codeBlockContent) {
        return text.split("```").map((subString, index, array) => {
          if (index % 2 && index !== array.length - 1)
            return subString;
          return escapeMarkdown(subString, {
            inlineCode: inlineCode2,
            bold: bold2,
            italic: italic2,
            underline: underline2,
            strikethrough: strikethrough2,
            spoiler: spoiler2,
            inlineCodeContent,
            escape,
            heading: heading2,
            bulletedList,
            numberedList,
            maskedLink
          });
        }).join(codeBlock2 ? "\\`\\`\\`" : "```");
      }
      if (!inlineCodeContent) {
        return text.split(/(?<=^|[^`])`(?=[^`]|$)/g).map((subString, index, array) => {
          if (index % 2 && index !== array.length - 1)
            return subString;
          return escapeMarkdown(subString, {
            codeBlock: codeBlock2,
            bold: bold2,
            italic: italic2,
            underline: underline2,
            strikethrough: strikethrough2,
            spoiler: spoiler2,
            escape,
            heading: heading2,
            bulletedList,
            numberedList,
            maskedLink
          });
        }).join(inlineCode2 ? "\\`" : "`");
      }
      let res = text;
      if (escape)
        res = escapeEscape(res);
      if (inlineCode2)
        res = escapeInlineCode(res);
      if (codeBlock2)
        res = escapeCodeBlock(res);
      if (italic2)
        res = escapeItalic(res);
      if (bold2)
        res = escapeBold(res);
      if (underline2)
        res = escapeUnderline(res);
      if (strikethrough2)
        res = escapeStrikethrough(res);
      if (spoiler2)
        res = escapeSpoiler(res);
      if (heading2)
        res = escapeHeading(res);
      if (bulletedList)
        res = escapeBulletedList(res);
      if (numberedList)
        res = escapeNumberedList(res);
      if (maskedLink)
        res = escapeMaskedLink(res);
      return res;
    }
    __name(escapeMarkdown, "escapeMarkdown");
    __name2(escapeMarkdown, "escapeMarkdown");
    function escapeCodeBlock(text) {
      return text.replaceAll("```", "\\`\\`\\`");
    }
    __name(escapeCodeBlock, "escapeCodeBlock");
    __name2(escapeCodeBlock, "escapeCodeBlock");
    function escapeInlineCode(text) {
      return text.replaceAll(/(?<=^|[^`])``?(?=[^`]|$)/g, (match) => match.length === 2 ? "\\`\\`" : "\\`");
    }
    __name(escapeInlineCode, "escapeInlineCode");
    __name2(escapeInlineCode, "escapeInlineCode");
    function escapeItalic(text) {
      let idx = 0;
      const newText = text.replaceAll(/(?<=^|[^*])\*([^*]|\*\*|$)/g, (_, match) => {
        if (match === "**")
          return ++idx % 2 ? `\\*${match}` : `${match}\\*`;
        return `\\*${match}`;
      });
      idx = 0;
      return newText.replaceAll(/(?<=^|[^_])(?<!<a?:.+|https?:\/\/\S+)_(?!:\d+>)([^_]|__|$)/g, (_, match) => {
        if (match === "__")
          return ++idx % 2 ? `\\_${match}` : `${match}\\_`;
        return `\\_${match}`;
      });
    }
    __name(escapeItalic, "escapeItalic");
    __name2(escapeItalic, "escapeItalic");
    function escapeBold(text) {
      let idx = 0;
      return text.replaceAll(/\*\*(\*)?/g, (_, match) => {
        if (match)
          return ++idx % 2 ? `${match}\\*\\*` : `\\*\\*${match}`;
        return "\\*\\*";
      });
    }
    __name(escapeBold, "escapeBold");
    __name2(escapeBold, "escapeBold");
    function escapeUnderline(text) {
      let idx = 0;
      return text.replaceAll(/(?<!<a?:.+|https?:\/\/\S+)__(_)?(?!:\d+>)/g, (_, match) => {
        if (match)
          return ++idx % 2 ? `${match}\\_\\_` : `\\_\\_${match}`;
        return "\\_\\_";
      });
    }
    __name(escapeUnderline, "escapeUnderline");
    __name2(escapeUnderline, "escapeUnderline");
    function escapeStrikethrough(text) {
      return text.replaceAll("~~", "\\~\\~");
    }
    __name(escapeStrikethrough, "escapeStrikethrough");
    __name2(escapeStrikethrough, "escapeStrikethrough");
    function escapeSpoiler(text) {
      return text.replaceAll("||", "\\|\\|");
    }
    __name(escapeSpoiler, "escapeSpoiler");
    __name2(escapeSpoiler, "escapeSpoiler");
    function escapeEscape(text) {
      return text.replaceAll("\\", "\\\\");
    }
    __name(escapeEscape, "escapeEscape");
    __name2(escapeEscape, "escapeEscape");
    function escapeHeading(text) {
      return text.replaceAll(/^( {0,2})([*-] )?( *)(#{1,3} )/gm, "$1$2$3\\$4");
    }
    __name(escapeHeading, "escapeHeading");
    __name2(escapeHeading, "escapeHeading");
    function escapeBulletedList(text) {
      return text.replaceAll(/^( *)([*-])( +)/gm, "$1\\$2$3");
    }
    __name(escapeBulletedList, "escapeBulletedList");
    __name2(escapeBulletedList, "escapeBulletedList");
    function escapeNumberedList(text) {
      return text.replaceAll(/^( *\d+)\./gm, "$1\\.");
    }
    __name(escapeNumberedList, "escapeNumberedList");
    __name2(escapeNumberedList, "escapeNumberedList");
    function escapeMaskedLink(text) {
      return text.replaceAll(/\[.+]\(.+\)/gm, "\\$&");
    }
    __name(escapeMaskedLink, "escapeMaskedLink");
    __name2(escapeMaskedLink, "escapeMaskedLink");
    function codeBlock(language, content) {
      return content === void 0 ? `\`\`\`
${language}
\`\`\`` : `\`\`\`${language}
${content}
\`\`\``;
    }
    __name(codeBlock, "codeBlock");
    __name2(codeBlock, "codeBlock");
    function inlineCode(content) {
      return `\`${content}\``;
    }
    __name(inlineCode, "inlineCode");
    __name2(inlineCode, "inlineCode");
    function italic(content) {
      return `_${content}_`;
    }
    __name(italic, "italic");
    __name2(italic, "italic");
    function bold(content) {
      return `**${content}**`;
    }
    __name(bold, "bold");
    __name2(bold, "bold");
    function underscore(content) {
      return underline(content);
    }
    __name(underscore, "underscore");
    __name2(underscore, "underscore");
    function underline(content) {
      return `__${content}__`;
    }
    __name(underline, "underline");
    __name2(underline, "underline");
    function strikethrough(content) {
      return `~~${content}~~`;
    }
    __name(strikethrough, "strikethrough");
    __name2(strikethrough, "strikethrough");
    function quote(content) {
      return `> ${content}`;
    }
    __name(quote, "quote");
    __name2(quote, "quote");
    function blockQuote(content) {
      return `>>> ${content}`;
    }
    __name(blockQuote, "blockQuote");
    __name2(blockQuote, "blockQuote");
    function hideLinkEmbed(url) {
      return `<${url}>`;
    }
    __name(hideLinkEmbed, "hideLinkEmbed");
    __name2(hideLinkEmbed, "hideLinkEmbed");
    function hyperlink(content, url, title) {
      return title ? `[${content}](${url} "${title}")` : `[${content}](${url})`;
    }
    __name(hyperlink, "hyperlink");
    __name2(hyperlink, "hyperlink");
    function spoiler(content) {
      return `||${content}||`;
    }
    __name(spoiler, "spoiler");
    __name2(spoiler, "spoiler");
    function userMention(userId) {
      return `<@${userId}>`;
    }
    __name(userMention, "userMention");
    __name2(userMention, "userMention");
    function channelMention(channelId) {
      return `<#${channelId}>`;
    }
    __name(channelMention, "channelMention");
    __name2(channelMention, "channelMention");
    function roleMention(roleId) {
      return `<@&${roleId}>`;
    }
    __name(roleMention, "roleMention");
    __name2(roleMention, "roleMention");
    function chatInputApplicationCommandMention(commandName, subcommandGroupName, subcommandName, commandId) {
      if (commandId !== void 0) {
        return `</${commandName} ${subcommandGroupName} ${subcommandName}:${commandId}>`;
      }
      if (subcommandName !== void 0) {
        return `</${commandName} ${subcommandGroupName}:${subcommandName}>`;
      }
      return `</${commandName}:${subcommandGroupName}>`;
    }
    __name(chatInputApplicationCommandMention, "chatInputApplicationCommandMention");
    __name2(chatInputApplicationCommandMention, "chatInputApplicationCommandMention");
    function formatEmoji(emojiIdOrOptions, animated) {
      const options = typeof emojiIdOrOptions === "string" ? {
        id: emojiIdOrOptions,
        animated: animated ?? false
      } : emojiIdOrOptions;
      const { id, animated: isAnimated, name: emojiName } = options;
      return `<${isAnimated ? "a" : ""}:${emojiName ?? "_"}:${id}>`;
    }
    __name(formatEmoji, "formatEmoji");
    __name2(formatEmoji, "formatEmoji");
    function channelLink(channelId, guildId) {
      return `https://discord.com/channels/${guildId ?? "@me"}/${channelId}`;
    }
    __name(channelLink, "channelLink");
    __name2(channelLink, "channelLink");
    function messageLink(channelId, messageId, guildId) {
      return `${guildId === void 0 ? channelLink(channelId) : channelLink(channelId, guildId)}/${messageId}`;
    }
    __name(messageLink, "messageLink");
    __name2(messageLink, "messageLink");
    var HeadingLevel = /* @__PURE__ */ ((HeadingLevel2) => {
      HeadingLevel2[HeadingLevel2["One"] = 1] = "One";
      HeadingLevel2[HeadingLevel2["Two"] = 2] = "Two";
      HeadingLevel2[HeadingLevel2["Three"] = 3] = "Three";
      return HeadingLevel2;
    })(HeadingLevel || {});
    function heading(content, level) {
      switch (level) {
        case 3:
          return `### ${content}`;
        case 2:
          return `## ${content}`;
        default:
          return `# ${content}`;
      }
    }
    __name(heading, "heading");
    __name2(heading, "heading");
    function listCallback(element, startNumber, depth = 0) {
      if (Array.isArray(element)) {
        return element.map((element2) => listCallback(element2, startNumber, depth + 1)).join("\n");
      }
      return `${"  ".repeat(depth - 1)}${startNumber ? `${startNumber}.` : "-"} ${element}`;
    }
    __name(listCallback, "listCallback");
    __name2(listCallback, "listCallback");
    function orderedList(list, startNumber = 1) {
      return listCallback(list, Math.max(startNumber, 1));
    }
    __name(orderedList, "orderedList");
    __name2(orderedList, "orderedList");
    function unorderedList(list) {
      return listCallback(list);
    }
    __name(unorderedList, "unorderedList");
    __name2(unorderedList, "unorderedList");
    function subtext(content) {
      return `-# ${content}`;
    }
    __name(subtext, "subtext");
    __name2(subtext, "subtext");
    function time(timeOrSeconds, style) {
      if (typeof timeOrSeconds !== "number") {
        timeOrSeconds = Math.floor((timeOrSeconds?.getTime() ?? Date.now()) / 1e3);
      }
      return typeof style === "string" ? `<t:${timeOrSeconds}:${style}>` : `<t:${timeOrSeconds}>`;
    }
    __name(time, "time");
    __name2(time, "time");
    function applicationDirectory(applicationId, skuId) {
      const url = `https://discord.com/application-directory/${applicationId}/store`;
      return skuId ? `${url}/${skuId}` : url;
    }
    __name(applicationDirectory, "applicationDirectory");
    __name2(applicationDirectory, "applicationDirectory");
    var TimestampStyles = {
      /**
       * Short time format, consisting of hours and minutes.
       *
       * @example `16:20`
       */
      ShortTime: "t",
      /**
       * Long time format, consisting of hours, minutes, and seconds.
       *
       * @example `16:20:30`
       */
      LongTime: "T",
      /**
       * Short date format, consisting of day, month, and year.
       *
       * @example `20/04/2021`
       */
      ShortDate: "d",
      /**
       * Long date format, consisting of day, month, and year.
       *
       * @example `20 April 2021`
       */
      LongDate: "D",
      /**
       * Short date-time format, consisting of short date and short time formats.
       *
       * @example `20 April 2021 16:20`
       */
      ShortDateTime: "f",
      /**
       * Long date-time format, consisting of long date and short time formats.
       *
       * @example `Tuesday, 20 April 2021 16:20`
       */
      LongDateTime: "F",
      /**
       * Relative time format, consisting of a relative duration format.
       *
       * @example `2 months ago`
       */
      RelativeTime: "R"
    };
    var Faces = /* @__PURE__ */ ((Faces2) => {
      Faces2["Shrug"] = "\xAF\\_(\u30C4)_/\xAF";
      Faces2["Tableflip"] = "(\u256F\xB0\u25A1\xB0)\u256F\uFE35 \u253B\u2501\u253B";
      Faces2["Unflip"] = "\u252C\u2500\u252C\u30CE( \xBA _ \xBA\u30CE)";
      return Faces2;
    })(Faces || {});
    var GuildNavigationMentions = /* @__PURE__ */ ((GuildNavigationMentions2) => {
      GuildNavigationMentions2["Browse"] = "<id:browse>";
      GuildNavigationMentions2["Customize"] = "<id:customize>";
      GuildNavigationMentions2["Guide"] = "<id:guide>";
      return GuildNavigationMentions2;
    })(GuildNavigationMentions || {});
    var version = "0.6.0";
  }
});

// node_modules/discord-api-types/gateway/common.js
var require_common = __commonJS({
  "node_modules/discord-api-types/gateway/common.js"(exports) {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/discord-api-types/gateway/v10.js
var require_v10 = __commonJS({
  "node_modules/discord-api-types/gateway/v10.js"(exports) {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o2, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o2, k2, desc);
    } : function(o2, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o2[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p2 in m)
        if (p2 !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p2))
          __createBinding(exports2, m, p2);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.VoiceChannelEffectSendAnimationType = exports.GatewayDispatchEvents = exports.GatewayIntentBits = exports.GatewayCloseCodes = exports.GatewayOpcodes = exports.GatewayVersion = void 0;
    __exportStar(require_common(), exports);
    exports.GatewayVersion = "10";
    var GatewayOpcodes;
    (function(GatewayOpcodes2) {
      GatewayOpcodes2[GatewayOpcodes2["Dispatch"] = 0] = "Dispatch";
      GatewayOpcodes2[GatewayOpcodes2["Heartbeat"] = 1] = "Heartbeat";
      GatewayOpcodes2[GatewayOpcodes2["Identify"] = 2] = "Identify";
      GatewayOpcodes2[GatewayOpcodes2["PresenceUpdate"] = 3] = "PresenceUpdate";
      GatewayOpcodes2[GatewayOpcodes2["VoiceStateUpdate"] = 4] = "VoiceStateUpdate";
      GatewayOpcodes2[GatewayOpcodes2["Resume"] = 6] = "Resume";
      GatewayOpcodes2[GatewayOpcodes2["Reconnect"] = 7] = "Reconnect";
      GatewayOpcodes2[GatewayOpcodes2["RequestGuildMembers"] = 8] = "RequestGuildMembers";
      GatewayOpcodes2[GatewayOpcodes2["InvalidSession"] = 9] = "InvalidSession";
      GatewayOpcodes2[GatewayOpcodes2["Hello"] = 10] = "Hello";
      GatewayOpcodes2[GatewayOpcodes2["HeartbeatAck"] = 11] = "HeartbeatAck";
      GatewayOpcodes2[GatewayOpcodes2["RequestSoundboardSounds"] = 31] = "RequestSoundboardSounds";
    })(GatewayOpcodes || (exports.GatewayOpcodes = GatewayOpcodes = {}));
    var GatewayCloseCodes;
    (function(GatewayCloseCodes2) {
      GatewayCloseCodes2[GatewayCloseCodes2["UnknownError"] = 4e3] = "UnknownError";
      GatewayCloseCodes2[GatewayCloseCodes2["UnknownOpcode"] = 4001] = "UnknownOpcode";
      GatewayCloseCodes2[GatewayCloseCodes2["DecodeError"] = 4002] = "DecodeError";
      GatewayCloseCodes2[GatewayCloseCodes2["NotAuthenticated"] = 4003] = "NotAuthenticated";
      GatewayCloseCodes2[GatewayCloseCodes2["AuthenticationFailed"] = 4004] = "AuthenticationFailed";
      GatewayCloseCodes2[GatewayCloseCodes2["AlreadyAuthenticated"] = 4005] = "AlreadyAuthenticated";
      GatewayCloseCodes2[GatewayCloseCodes2["InvalidSeq"] = 4007] = "InvalidSeq";
      GatewayCloseCodes2[GatewayCloseCodes2["RateLimited"] = 4008] = "RateLimited";
      GatewayCloseCodes2[GatewayCloseCodes2["SessionTimedOut"] = 4009] = "SessionTimedOut";
      GatewayCloseCodes2[GatewayCloseCodes2["InvalidShard"] = 4010] = "InvalidShard";
      GatewayCloseCodes2[GatewayCloseCodes2["ShardingRequired"] = 4011] = "ShardingRequired";
      GatewayCloseCodes2[GatewayCloseCodes2["InvalidAPIVersion"] = 4012] = "InvalidAPIVersion";
      GatewayCloseCodes2[GatewayCloseCodes2["InvalidIntents"] = 4013] = "InvalidIntents";
      GatewayCloseCodes2[GatewayCloseCodes2["DisallowedIntents"] = 4014] = "DisallowedIntents";
    })(GatewayCloseCodes || (exports.GatewayCloseCodes = GatewayCloseCodes = {}));
    var GatewayIntentBits;
    (function(GatewayIntentBits2) {
      GatewayIntentBits2[GatewayIntentBits2["Guilds"] = 1] = "Guilds";
      GatewayIntentBits2[GatewayIntentBits2["GuildMembers"] = 2] = "GuildMembers";
      GatewayIntentBits2[GatewayIntentBits2["GuildModeration"] = 4] = "GuildModeration";
      GatewayIntentBits2[GatewayIntentBits2["GuildBans"] = 4] = "GuildBans";
      GatewayIntentBits2[GatewayIntentBits2["GuildExpressions"] = 8] = "GuildExpressions";
      GatewayIntentBits2[GatewayIntentBits2["GuildEmojisAndStickers"] = 8] = "GuildEmojisAndStickers";
      GatewayIntentBits2[GatewayIntentBits2["GuildIntegrations"] = 16] = "GuildIntegrations";
      GatewayIntentBits2[GatewayIntentBits2["GuildWebhooks"] = 32] = "GuildWebhooks";
      GatewayIntentBits2[GatewayIntentBits2["GuildInvites"] = 64] = "GuildInvites";
      GatewayIntentBits2[GatewayIntentBits2["GuildVoiceStates"] = 128] = "GuildVoiceStates";
      GatewayIntentBits2[GatewayIntentBits2["GuildPresences"] = 256] = "GuildPresences";
      GatewayIntentBits2[GatewayIntentBits2["GuildMessages"] = 512] = "GuildMessages";
      GatewayIntentBits2[GatewayIntentBits2["GuildMessageReactions"] = 1024] = "GuildMessageReactions";
      GatewayIntentBits2[GatewayIntentBits2["GuildMessageTyping"] = 2048] = "GuildMessageTyping";
      GatewayIntentBits2[GatewayIntentBits2["DirectMessages"] = 4096] = "DirectMessages";
      GatewayIntentBits2[GatewayIntentBits2["DirectMessageReactions"] = 8192] = "DirectMessageReactions";
      GatewayIntentBits2[GatewayIntentBits2["DirectMessageTyping"] = 16384] = "DirectMessageTyping";
      GatewayIntentBits2[GatewayIntentBits2["MessageContent"] = 32768] = "MessageContent";
      GatewayIntentBits2[GatewayIntentBits2["GuildScheduledEvents"] = 65536] = "GuildScheduledEvents";
      GatewayIntentBits2[GatewayIntentBits2["AutoModerationConfiguration"] = 1048576] = "AutoModerationConfiguration";
      GatewayIntentBits2[GatewayIntentBits2["AutoModerationExecution"] = 2097152] = "AutoModerationExecution";
      GatewayIntentBits2[GatewayIntentBits2["GuildMessagePolls"] = 16777216] = "GuildMessagePolls";
      GatewayIntentBits2[GatewayIntentBits2["DirectMessagePolls"] = 33554432] = "DirectMessagePolls";
    })(GatewayIntentBits || (exports.GatewayIntentBits = GatewayIntentBits = {}));
    var GatewayDispatchEvents;
    (function(GatewayDispatchEvents2) {
      GatewayDispatchEvents2["ApplicationCommandPermissionsUpdate"] = "APPLICATION_COMMAND_PERMISSIONS_UPDATE";
      GatewayDispatchEvents2["AutoModerationActionExecution"] = "AUTO_MODERATION_ACTION_EXECUTION";
      GatewayDispatchEvents2["AutoModerationRuleCreate"] = "AUTO_MODERATION_RULE_CREATE";
      GatewayDispatchEvents2["AutoModerationRuleDelete"] = "AUTO_MODERATION_RULE_DELETE";
      GatewayDispatchEvents2["AutoModerationRuleUpdate"] = "AUTO_MODERATION_RULE_UPDATE";
      GatewayDispatchEvents2["ChannelCreate"] = "CHANNEL_CREATE";
      GatewayDispatchEvents2["ChannelDelete"] = "CHANNEL_DELETE";
      GatewayDispatchEvents2["ChannelPinsUpdate"] = "CHANNEL_PINS_UPDATE";
      GatewayDispatchEvents2["ChannelUpdate"] = "CHANNEL_UPDATE";
      GatewayDispatchEvents2["EntitlementCreate"] = "ENTITLEMENT_CREATE";
      GatewayDispatchEvents2["EntitlementDelete"] = "ENTITLEMENT_DELETE";
      GatewayDispatchEvents2["EntitlementUpdate"] = "ENTITLEMENT_UPDATE";
      GatewayDispatchEvents2["GuildAuditLogEntryCreate"] = "GUILD_AUDIT_LOG_ENTRY_CREATE";
      GatewayDispatchEvents2["GuildBanAdd"] = "GUILD_BAN_ADD";
      GatewayDispatchEvents2["GuildBanRemove"] = "GUILD_BAN_REMOVE";
      GatewayDispatchEvents2["GuildCreate"] = "GUILD_CREATE";
      GatewayDispatchEvents2["GuildDelete"] = "GUILD_DELETE";
      GatewayDispatchEvents2["GuildEmojisUpdate"] = "GUILD_EMOJIS_UPDATE";
      GatewayDispatchEvents2["GuildIntegrationsUpdate"] = "GUILD_INTEGRATIONS_UPDATE";
      GatewayDispatchEvents2["GuildMemberAdd"] = "GUILD_MEMBER_ADD";
      GatewayDispatchEvents2["GuildMemberRemove"] = "GUILD_MEMBER_REMOVE";
      GatewayDispatchEvents2["GuildMembersChunk"] = "GUILD_MEMBERS_CHUNK";
      GatewayDispatchEvents2["GuildMemberUpdate"] = "GUILD_MEMBER_UPDATE";
      GatewayDispatchEvents2["GuildRoleCreate"] = "GUILD_ROLE_CREATE";
      GatewayDispatchEvents2["GuildRoleDelete"] = "GUILD_ROLE_DELETE";
      GatewayDispatchEvents2["GuildRoleUpdate"] = "GUILD_ROLE_UPDATE";
      GatewayDispatchEvents2["GuildScheduledEventCreate"] = "GUILD_SCHEDULED_EVENT_CREATE";
      GatewayDispatchEvents2["GuildScheduledEventDelete"] = "GUILD_SCHEDULED_EVENT_DELETE";
      GatewayDispatchEvents2["GuildScheduledEventUpdate"] = "GUILD_SCHEDULED_EVENT_UPDATE";
      GatewayDispatchEvents2["GuildScheduledEventUserAdd"] = "GUILD_SCHEDULED_EVENT_USER_ADD";
      GatewayDispatchEvents2["GuildScheduledEventUserRemove"] = "GUILD_SCHEDULED_EVENT_USER_REMOVE";
      GatewayDispatchEvents2["GuildSoundboardSoundCreate"] = "GUILD_SOUNDBOARD_SOUND_CREATE";
      GatewayDispatchEvents2["GuildSoundboardSoundDelete"] = "GUILD_SOUNDBOARD_SOUND_DELETE";
      GatewayDispatchEvents2["GuildSoundboardSoundsUpdate"] = "GUILD_SOUNDBOARD_SOUNDS_UPDATE";
      GatewayDispatchEvents2["GuildSoundboardSoundUpdate"] = "GUILD_SOUNDBOARD_SOUND_UPDATE";
      GatewayDispatchEvents2["SoundboardSounds"] = "SOUNDBOARD_SOUNDS";
      GatewayDispatchEvents2["GuildStickersUpdate"] = "GUILD_STICKERS_UPDATE";
      GatewayDispatchEvents2["GuildUpdate"] = "GUILD_UPDATE";
      GatewayDispatchEvents2["IntegrationCreate"] = "INTEGRATION_CREATE";
      GatewayDispatchEvents2["IntegrationDelete"] = "INTEGRATION_DELETE";
      GatewayDispatchEvents2["IntegrationUpdate"] = "INTEGRATION_UPDATE";
      GatewayDispatchEvents2["InteractionCreate"] = "INTERACTION_CREATE";
      GatewayDispatchEvents2["InviteCreate"] = "INVITE_CREATE";
      GatewayDispatchEvents2["InviteDelete"] = "INVITE_DELETE";
      GatewayDispatchEvents2["MessageCreate"] = "MESSAGE_CREATE";
      GatewayDispatchEvents2["MessageDelete"] = "MESSAGE_DELETE";
      GatewayDispatchEvents2["MessageDeleteBulk"] = "MESSAGE_DELETE_BULK";
      GatewayDispatchEvents2["MessagePollVoteAdd"] = "MESSAGE_POLL_VOTE_ADD";
      GatewayDispatchEvents2["MessagePollVoteRemove"] = "MESSAGE_POLL_VOTE_REMOVE";
      GatewayDispatchEvents2["MessageReactionAdd"] = "MESSAGE_REACTION_ADD";
      GatewayDispatchEvents2["MessageReactionRemove"] = "MESSAGE_REACTION_REMOVE";
      GatewayDispatchEvents2["MessageReactionRemoveAll"] = "MESSAGE_REACTION_REMOVE_ALL";
      GatewayDispatchEvents2["MessageReactionRemoveEmoji"] = "MESSAGE_REACTION_REMOVE_EMOJI";
      GatewayDispatchEvents2["MessageUpdate"] = "MESSAGE_UPDATE";
      GatewayDispatchEvents2["PresenceUpdate"] = "PRESENCE_UPDATE";
      GatewayDispatchEvents2["Ready"] = "READY";
      GatewayDispatchEvents2["Resumed"] = "RESUMED";
      GatewayDispatchEvents2["StageInstanceCreate"] = "STAGE_INSTANCE_CREATE";
      GatewayDispatchEvents2["StageInstanceDelete"] = "STAGE_INSTANCE_DELETE";
      GatewayDispatchEvents2["StageInstanceUpdate"] = "STAGE_INSTANCE_UPDATE";
      GatewayDispatchEvents2["SubscriptionCreate"] = "SUBSCRIPTION_CREATE";
      GatewayDispatchEvents2["SubscriptionDelete"] = "SUBSCRIPTION_DELETE";
      GatewayDispatchEvents2["SubscriptionUpdate"] = "SUBSCRIPTION_UPDATE";
      GatewayDispatchEvents2["ThreadCreate"] = "THREAD_CREATE";
      GatewayDispatchEvents2["ThreadDelete"] = "THREAD_DELETE";
      GatewayDispatchEvents2["ThreadListSync"] = "THREAD_LIST_SYNC";
      GatewayDispatchEvents2["ThreadMembersUpdate"] = "THREAD_MEMBERS_UPDATE";
      GatewayDispatchEvents2["ThreadMemberUpdate"] = "THREAD_MEMBER_UPDATE";
      GatewayDispatchEvents2["ThreadUpdate"] = "THREAD_UPDATE";
      GatewayDispatchEvents2["TypingStart"] = "TYPING_START";
      GatewayDispatchEvents2["UserUpdate"] = "USER_UPDATE";
      GatewayDispatchEvents2["VoiceChannelEffectSend"] = "VOICE_CHANNEL_EFFECT_SEND";
      GatewayDispatchEvents2["VoiceServerUpdate"] = "VOICE_SERVER_UPDATE";
      GatewayDispatchEvents2["VoiceStateUpdate"] = "VOICE_STATE_UPDATE";
      GatewayDispatchEvents2["WebhooksUpdate"] = "WEBHOOKS_UPDATE";
    })(GatewayDispatchEvents || (exports.GatewayDispatchEvents = GatewayDispatchEvents = {}));
    var VoiceChannelEffectSendAnimationType;
    (function(VoiceChannelEffectSendAnimationType2) {
      VoiceChannelEffectSendAnimationType2[VoiceChannelEffectSendAnimationType2["Premium"] = 0] = "Premium";
      VoiceChannelEffectSendAnimationType2[VoiceChannelEffectSendAnimationType2["Basic"] = 1] = "Basic";
    })(VoiceChannelEffectSendAnimationType || (exports.VoiceChannelEffectSendAnimationType = VoiceChannelEffectSendAnimationType = {}));
  }
});

// node_modules/discord-api-types/globals.js
var require_globals = __commonJS({
  "node_modules/discord-api-types/globals.js"(exports) {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.FormattingPatterns = void 0;
    exports.FormattingPatterns = {
      /**
       * Regular expression for matching a user mention, strictly without a nickname
       *
       * The `id` group property is present on the `exec` result of this expression
       */
      User: /<@(?<id>\d{17,20})>/,
      /**
       * Regular expression for matching a user mention, strictly with a nickname
       *
       * The `id` group property is present on the `exec` result of this expression
       *
       * @deprecated Passing `!` in user mentions is no longer necessary / supported, and future message contents won't have it
       */
      UserWithNickname: /<@!(?<id>\d{17,20})>/,
      /**
       * Regular expression for matching a user mention, with or without a nickname
       *
       * The `id` group property is present on the `exec` result of this expression
       *
       * @deprecated Passing `!` in user mentions is no longer necessary / supported, and future message contents won't have it
       */
      UserWithOptionalNickname: /<@!?(?<id>\d{17,20})>/,
      /**
       * Regular expression for matching a channel mention
       *
       * The `id` group property is present on the `exec` result of this expression
       */
      Channel: /<#(?<id>\d{17,20})>/,
      /**
       * Regular expression for matching a role mention
       *
       * The `id` group property is present on the `exec` result of this expression
       */
      Role: /<@&(?<id>\d{17,20})>/,
      /**
       * Regular expression for matching a application command mention
       *
       * The `fullName` (possibly including `name`, `subcommandOrGroup` and `subcommand`) and `id` group properties are present on the `exec` result of this expression
       */
      SlashCommand: (
        // eslint-disable-next-line unicorn/no-unsafe-regex
        /<\/(?<fullName>(?<name>[-_\p{Letter}\p{Number}\p{sc=Deva}\p{sc=Thai}]{1,32})(?: (?<subcommandOrGroup>[-_\p{Letter}\p{Number}\p{sc=Deva}\p{sc=Thai}]{1,32}))?(?: (?<subcommand>[-_\p{Letter}\p{Number}\p{sc=Deva}\p{sc=Thai}]{1,32}))?):(?<id>\d{17,20})>/u
      ),
      /**
       * Regular expression for matching a custom emoji, either static or animated
       *
       * The `animated`, `name` and `id` group properties are present on the `exec` result of this expression
       */
      Emoji: /<(?<animated>a)?:(?<name>\w{2,32}):(?<id>\d{17,20})>/,
      /**
       * Regular expression for matching strictly an animated custom emoji
       *
       * The `animated`, `name` and `id` group properties are present on the `exec` result of this expression
       */
      AnimatedEmoji: /<(?<animated>a):(?<name>\w{2,32}):(?<id>\d{17,20})>/,
      /**
       * Regular expression for matching strictly a static custom emoji
       *
       * The `name` and `id` group properties are present on the `exec` result of this expression
       */
      StaticEmoji: /<:(?<name>\w{2,32}):(?<id>\d{17,20})>/,
      /**
       * Regular expression for matching a timestamp, either default or custom styled
       *
       * The `timestamp` and `style` group properties are present on the `exec` result of this expression
       */
      // eslint-disable-next-line prefer-named-capture-group
      Timestamp: /<t:(?<timestamp>-?\d{1,13})(:(?<style>[DFRTdft]))?>/,
      /**
       * Regular expression for matching strictly default styled timestamps
       *
       * The `timestamp` group property is present on the `exec` result of this expression
       */
      DefaultStyledTimestamp: /<t:(?<timestamp>-?\d{1,13})>/,
      /**
       * Regular expression for matching strictly custom styled timestamps
       *
       * The `timestamp` and `style` group properties are present on the `exec` result of this expression
       */
      StyledTimestamp: /<t:(?<timestamp>-?\d{1,13}):(?<style>[DFRTdft])>/,
      /**
       * Regular expression for matching a guild navigation mention
       *
       * The `type` group property is present on the `exec` result of this expression
       */
      GuildNavigation: /<id:(?<type>customize|browse|guide|linked-roles)>/,
      /**
       * Regular expression for matching a linked role mention
       *
       * The `id` group property is present on the `exec` result of this expression
       */
      LinkedRole: /<id:linked-roles:(?<id>\d{17,20})>/
    };
    Object.freeze(exports.FormattingPatterns);
  }
});

// node_modules/discord-api-types/payloads/common.js
var require_common2 = __commonJS({
  "node_modules/discord-api-types/payloads/common.js"(exports) {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.PermissionFlagsBits = void 0;
    exports.PermissionFlagsBits = {
      /**
       * Allows creation of instant invites
       *
       * Applies to channel types: Text, Voice, Stage
       */
      CreateInstantInvite: 1n << 0n,
      /**
       * Allows kicking members
       */
      // eslint-disable-next-line sonarjs/no-identical-expressions
      KickMembers: 1n << 1n,
      /**
       * Allows banning members
       */
      BanMembers: 1n << 2n,
      /**
       * Allows all permissions and bypasses channel permission overwrites
       */
      Administrator: 1n << 3n,
      /**
       * Allows management and editing of channels
       *
       * Applies to channel types: Text, Voice, Stage
       */
      ManageChannels: 1n << 4n,
      /**
       * Allows management and editing of the guild
       */
      ManageGuild: 1n << 5n,
      /**
       * Allows for the addition of reactions to messages
       *
       * Applies to channel types: Text, Voice, Stage
       */
      AddReactions: 1n << 6n,
      /**
       * Allows for viewing of audit logs
       */
      ViewAuditLog: 1n << 7n,
      /**
       * Allows for using priority speaker in a voice channel
       *
       * Applies to channel types: Voice
       */
      PrioritySpeaker: 1n << 8n,
      /**
       * Allows the user to go live
       *
       * Applies to channel types: Voice, Stage
       */
      Stream: 1n << 9n,
      /**
       * Allows guild members to view a channel, which includes reading messages in text channels and joining voice channels
       *
       * Applies to channel types: Text, Voice, Stage
       */
      ViewChannel: 1n << 10n,
      /**
       * Allows for sending messages in a channel and creating threads in a forum
       * (does not allow sending messages in threads)
       *
       * Applies to channel types: Text, Voice, Stage
       */
      SendMessages: 1n << 11n,
      /**
       * Allows for sending of `/tts` messages
       *
       * Applies to channel types: Text, Voice, Stage
       */
      SendTTSMessages: 1n << 12n,
      /**
       * Allows for deletion of other users messages
       *
       * Applies to channel types: Text, Voice, Stage
       */
      ManageMessages: 1n << 13n,
      /**
       * Links sent by users with this permission will be auto-embedded
       *
       * Applies to channel types: Text, Voice, Stage
       */
      EmbedLinks: 1n << 14n,
      /**
       * Allows for uploading images and files
       *
       * Applies to channel types: Text, Voice, Stage
       */
      AttachFiles: 1n << 15n,
      /**
       * Allows for reading of message history
       *
       * Applies to channel types: Text, Voice, Stage
       */
      ReadMessageHistory: 1n << 16n,
      /**
       * Allows for using the `@everyone` tag to notify all users in a channel,
       * and the `@here` tag to notify all online users in a channel
       *
       * Applies to channel types: Text, Voice, Stage
       */
      MentionEveryone: 1n << 17n,
      /**
       * Allows the usage of custom emojis from other servers
       *
       * Applies to channel types: Text, Voice, Stage
       */
      UseExternalEmojis: 1n << 18n,
      /**
       * Allows for viewing guild insights
       */
      ViewGuildInsights: 1n << 19n,
      /**
       * Allows for joining of a voice channel
       *
       * Applies to channel types: Voice, Stage
       */
      Connect: 1n << 20n,
      /**
       * Allows for speaking in a voice channel
       *
       * Applies to channel types: Voice
       */
      Speak: 1n << 21n,
      /**
       * Allows for muting members in a voice channel
       *
       * Applies to channel types: Voice, Stage
       */
      MuteMembers: 1n << 22n,
      /**
       * Allows for deafening of members in a voice channel
       *
       * Applies to channel types: Voice
       */
      DeafenMembers: 1n << 23n,
      /**
       * Allows for moving of members between voice channels
       *
       * Applies to channel types: Voice, Stage
       */
      MoveMembers: 1n << 24n,
      /**
       * Allows for using voice-activity-detection in a voice channel
       *
       * Applies to channel types: Voice
       */
      UseVAD: 1n << 25n,
      /**
       * Allows for modification of own nickname
       */
      ChangeNickname: 1n << 26n,
      /**
       * Allows for modification of other users nicknames
       */
      ManageNicknames: 1n << 27n,
      /**
       * Allows management and editing of roles
       *
       * Applies to channel types: Text, Voice, Stage
       */
      ManageRoles: 1n << 28n,
      /**
       * Allows management and editing of webhooks
       *
       * Applies to channel types: Text, Voice, Stage
       */
      ManageWebhooks: 1n << 29n,
      /**
       * Allows management and editing of emojis, stickers, and soundboard sounds
       *
       * @deprecated This is the old name for {@apilink PermissionFlagsBits#ManageGuildExpressions}
       */
      ManageEmojisAndStickers: 1n << 30n,
      /**
       * Allows for editing and deleting emojis, stickers, and soundboard sounds created by all users
       */
      ManageGuildExpressions: 1n << 30n,
      /**
       * Allows members to use application commands, including slash commands and context menu commands
       *
       * Applies to channel types: Text, Voice, Stage
       */
      UseApplicationCommands: 1n << 31n,
      /**
       * Allows for requesting to speak in stage channels
       *
       * Applies to channel types: Stage
       */
      RequestToSpeak: 1n << 32n,
      /**
       * Allows for editing and deleting scheduled events created by all users
       *
       * Applies to channel types: Voice, Stage
       */
      ManageEvents: 1n << 33n,
      /**
       * Allows for deleting and archiving threads, and viewing all private threads
       *
       * Applies to channel types: Text
       */
      ManageThreads: 1n << 34n,
      /**
       * Allows for creating public and announcement threads
       *
       * Applies to channel types: Text
       */
      CreatePublicThreads: 1n << 35n,
      /**
       * Allows for creating private threads
       *
       * Applies to channel types: Text
       */
      CreatePrivateThreads: 1n << 36n,
      /**
       * Allows the usage of custom stickers from other servers
       *
       * Applies to channel types: Text, Voice, Stage
       */
      UseExternalStickers: 1n << 37n,
      /**
       * Allows for sending messages in threads
       *
       * Applies to channel types: Text
       */
      SendMessagesInThreads: 1n << 38n,
      /**
       * Allows for using Activities (applications with the {@apilink ApplicationFlags.Embedded} flag) in a voice channel
       *
       * Applies to channel types: Voice
       */
      UseEmbeddedActivities: 1n << 39n,
      /**
       * Allows for timing out users to prevent them from sending or reacting to messages in chat and threads,
       * and from speaking in voice and stage channels
       */
      ModerateMembers: 1n << 40n,
      /**
       * Allows for viewing role subscription insights
       */
      ViewCreatorMonetizationAnalytics: 1n << 41n,
      /**
       * Allows for using soundboard in a voice channel
       *
       * Applies to channel types: Voice
       */
      UseSoundboard: 1n << 42n,
      /**
       * Allows for creating emojis, stickers, and soundboard sounds, and editing and deleting those created by the current user
       */
      CreateGuildExpressions: 1n << 43n,
      /**
       * Allows for creating scheduled events, and editing and deleting those created by the current user
       *
       * Applies to channel types: Voice, Stage
       */
      CreateEvents: 1n << 44n,
      /**
       * Allows the usage of custom soundboard sounds from other servers
       *
       * Applies to channel types: Voice
       */
      UseExternalSounds: 1n << 45n,
      /**
       * Allows sending voice messages
       *
       * Applies to channel types: Text, Voice, Stage
       */
      SendVoiceMessages: 1n << 46n,
      /**
       * Allows sending polls
       *
       * Applies to channel types: Text, Voice, Stage
       */
      SendPolls: 1n << 49n,
      /**
       * Allows user-installed apps to send public responses. When disabled, users will still be allowed to use their apps but the responses will be ephemeral. This only applies to apps not also installed to the server
       *
       * Applies to channel types: Text, Voice, Stage
       */
      UseExternalApps: 1n << 50n
    };
    Object.freeze(exports.PermissionFlagsBits);
  }
});

// node_modules/discord-api-types/payloads/v10/application.js
var require_application = __commonJS({
  "node_modules/discord-api-types/payloads/v10/application.js"(exports) {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ApplicationWebhookEventStatus = exports.ApplicationRoleConnectionMetadataType = exports.ApplicationFlags = void 0;
    var ApplicationFlags;
    (function(ApplicationFlags2) {
      ApplicationFlags2[ApplicationFlags2["EmbeddedReleased"] = 2] = "EmbeddedReleased";
      ApplicationFlags2[ApplicationFlags2["ManagedEmoji"] = 4] = "ManagedEmoji";
      ApplicationFlags2[ApplicationFlags2["EmbeddedIAP"] = 8] = "EmbeddedIAP";
      ApplicationFlags2[ApplicationFlags2["GroupDMCreate"] = 16] = "GroupDMCreate";
      ApplicationFlags2[ApplicationFlags2["ApplicationAutoModerationRuleCreateBadge"] = 64] = "ApplicationAutoModerationRuleCreateBadge";
      ApplicationFlags2[ApplicationFlags2["RPCHasConnected"] = 2048] = "RPCHasConnected";
      ApplicationFlags2[ApplicationFlags2["GatewayPresence"] = 4096] = "GatewayPresence";
      ApplicationFlags2[ApplicationFlags2["GatewayPresenceLimited"] = 8192] = "GatewayPresenceLimited";
      ApplicationFlags2[ApplicationFlags2["GatewayGuildMembers"] = 16384] = "GatewayGuildMembers";
      ApplicationFlags2[ApplicationFlags2["GatewayGuildMembersLimited"] = 32768] = "GatewayGuildMembersLimited";
      ApplicationFlags2[ApplicationFlags2["VerificationPendingGuildLimit"] = 65536] = "VerificationPendingGuildLimit";
      ApplicationFlags2[ApplicationFlags2["Embedded"] = 131072] = "Embedded";
      ApplicationFlags2[ApplicationFlags2["GatewayMessageContent"] = 262144] = "GatewayMessageContent";
      ApplicationFlags2[ApplicationFlags2["GatewayMessageContentLimited"] = 524288] = "GatewayMessageContentLimited";
      ApplicationFlags2[ApplicationFlags2["EmbeddedFirstParty"] = 1048576] = "EmbeddedFirstParty";
      ApplicationFlags2[ApplicationFlags2["ApplicationCommandBadge"] = 8388608] = "ApplicationCommandBadge";
    })(ApplicationFlags || (exports.ApplicationFlags = ApplicationFlags = {}));
    var ApplicationRoleConnectionMetadataType;
    (function(ApplicationRoleConnectionMetadataType2) {
      ApplicationRoleConnectionMetadataType2[ApplicationRoleConnectionMetadataType2["IntegerLessThanOrEqual"] = 1] = "IntegerLessThanOrEqual";
      ApplicationRoleConnectionMetadataType2[ApplicationRoleConnectionMetadataType2["IntegerGreaterThanOrEqual"] = 2] = "IntegerGreaterThanOrEqual";
      ApplicationRoleConnectionMetadataType2[ApplicationRoleConnectionMetadataType2["IntegerEqual"] = 3] = "IntegerEqual";
      ApplicationRoleConnectionMetadataType2[ApplicationRoleConnectionMetadataType2["IntegerNotEqual"] = 4] = "IntegerNotEqual";
      ApplicationRoleConnectionMetadataType2[ApplicationRoleConnectionMetadataType2["DatetimeLessThanOrEqual"] = 5] = "DatetimeLessThanOrEqual";
      ApplicationRoleConnectionMetadataType2[ApplicationRoleConnectionMetadataType2["DatetimeGreaterThanOrEqual"] = 6] = "DatetimeGreaterThanOrEqual";
      ApplicationRoleConnectionMetadataType2[ApplicationRoleConnectionMetadataType2["BooleanEqual"] = 7] = "BooleanEqual";
      ApplicationRoleConnectionMetadataType2[ApplicationRoleConnectionMetadataType2["BooleanNotEqual"] = 8] = "BooleanNotEqual";
    })(ApplicationRoleConnectionMetadataType || (exports.ApplicationRoleConnectionMetadataType = ApplicationRoleConnectionMetadataType = {}));
    var ApplicationWebhookEventStatus;
    (function(ApplicationWebhookEventStatus2) {
      ApplicationWebhookEventStatus2[ApplicationWebhookEventStatus2["Disabled"] = 1] = "Disabled";
      ApplicationWebhookEventStatus2[ApplicationWebhookEventStatus2["Enabled"] = 2] = "Enabled";
      ApplicationWebhookEventStatus2[ApplicationWebhookEventStatus2["DisabledByDiscord"] = 3] = "DisabledByDiscord";
    })(ApplicationWebhookEventStatus || (exports.ApplicationWebhookEventStatus = ApplicationWebhookEventStatus = {}));
  }
});

// node_modules/discord-api-types/payloads/v10/auditLog.js
var require_auditLog = __commonJS({
  "node_modules/discord-api-types/payloads/v10/auditLog.js"(exports) {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AuditLogOptionsType = exports.AuditLogEvent = void 0;
    var AuditLogEvent;
    (function(AuditLogEvent2) {
      AuditLogEvent2[AuditLogEvent2["GuildUpdate"] = 1] = "GuildUpdate";
      AuditLogEvent2[AuditLogEvent2["ChannelCreate"] = 10] = "ChannelCreate";
      AuditLogEvent2[AuditLogEvent2["ChannelUpdate"] = 11] = "ChannelUpdate";
      AuditLogEvent2[AuditLogEvent2["ChannelDelete"] = 12] = "ChannelDelete";
      AuditLogEvent2[AuditLogEvent2["ChannelOverwriteCreate"] = 13] = "ChannelOverwriteCreate";
      AuditLogEvent2[AuditLogEvent2["ChannelOverwriteUpdate"] = 14] = "ChannelOverwriteUpdate";
      AuditLogEvent2[AuditLogEvent2["ChannelOverwriteDelete"] = 15] = "ChannelOverwriteDelete";
      AuditLogEvent2[AuditLogEvent2["MemberKick"] = 20] = "MemberKick";
      AuditLogEvent2[AuditLogEvent2["MemberPrune"] = 21] = "MemberPrune";
      AuditLogEvent2[AuditLogEvent2["MemberBanAdd"] = 22] = "MemberBanAdd";
      AuditLogEvent2[AuditLogEvent2["MemberBanRemove"] = 23] = "MemberBanRemove";
      AuditLogEvent2[AuditLogEvent2["MemberUpdate"] = 24] = "MemberUpdate";
      AuditLogEvent2[AuditLogEvent2["MemberRoleUpdate"] = 25] = "MemberRoleUpdate";
      AuditLogEvent2[AuditLogEvent2["MemberMove"] = 26] = "MemberMove";
      AuditLogEvent2[AuditLogEvent2["MemberDisconnect"] = 27] = "MemberDisconnect";
      AuditLogEvent2[AuditLogEvent2["BotAdd"] = 28] = "BotAdd";
      AuditLogEvent2[AuditLogEvent2["RoleCreate"] = 30] = "RoleCreate";
      AuditLogEvent2[AuditLogEvent2["RoleUpdate"] = 31] = "RoleUpdate";
      AuditLogEvent2[AuditLogEvent2["RoleDelete"] = 32] = "RoleDelete";
      AuditLogEvent2[AuditLogEvent2["InviteCreate"] = 40] = "InviteCreate";
      AuditLogEvent2[AuditLogEvent2["InviteUpdate"] = 41] = "InviteUpdate";
      AuditLogEvent2[AuditLogEvent2["InviteDelete"] = 42] = "InviteDelete";
      AuditLogEvent2[AuditLogEvent2["WebhookCreate"] = 50] = "WebhookCreate";
      AuditLogEvent2[AuditLogEvent2["WebhookUpdate"] = 51] = "WebhookUpdate";
      AuditLogEvent2[AuditLogEvent2["WebhookDelete"] = 52] = "WebhookDelete";
      AuditLogEvent2[AuditLogEvent2["EmojiCreate"] = 60] = "EmojiCreate";
      AuditLogEvent2[AuditLogEvent2["EmojiUpdate"] = 61] = "EmojiUpdate";
      AuditLogEvent2[AuditLogEvent2["EmojiDelete"] = 62] = "EmojiDelete";
      AuditLogEvent2[AuditLogEvent2["MessageDelete"] = 72] = "MessageDelete";
      AuditLogEvent2[AuditLogEvent2["MessageBulkDelete"] = 73] = "MessageBulkDelete";
      AuditLogEvent2[AuditLogEvent2["MessagePin"] = 74] = "MessagePin";
      AuditLogEvent2[AuditLogEvent2["MessageUnpin"] = 75] = "MessageUnpin";
      AuditLogEvent2[AuditLogEvent2["IntegrationCreate"] = 80] = "IntegrationCreate";
      AuditLogEvent2[AuditLogEvent2["IntegrationUpdate"] = 81] = "IntegrationUpdate";
      AuditLogEvent2[AuditLogEvent2["IntegrationDelete"] = 82] = "IntegrationDelete";
      AuditLogEvent2[AuditLogEvent2["StageInstanceCreate"] = 83] = "StageInstanceCreate";
      AuditLogEvent2[AuditLogEvent2["StageInstanceUpdate"] = 84] = "StageInstanceUpdate";
      AuditLogEvent2[AuditLogEvent2["StageInstanceDelete"] = 85] = "StageInstanceDelete";
      AuditLogEvent2[AuditLogEvent2["StickerCreate"] = 90] = "StickerCreate";
      AuditLogEvent2[AuditLogEvent2["StickerUpdate"] = 91] = "StickerUpdate";
      AuditLogEvent2[AuditLogEvent2["StickerDelete"] = 92] = "StickerDelete";
      AuditLogEvent2[AuditLogEvent2["GuildScheduledEventCreate"] = 100] = "GuildScheduledEventCreate";
      AuditLogEvent2[AuditLogEvent2["GuildScheduledEventUpdate"] = 101] = "GuildScheduledEventUpdate";
      AuditLogEvent2[AuditLogEvent2["GuildScheduledEventDelete"] = 102] = "GuildScheduledEventDelete";
      AuditLogEvent2[AuditLogEvent2["ThreadCreate"] = 110] = "ThreadCreate";
      AuditLogEvent2[AuditLogEvent2["ThreadUpdate"] = 111] = "ThreadUpdate";
      AuditLogEvent2[AuditLogEvent2["ThreadDelete"] = 112] = "ThreadDelete";
      AuditLogEvent2[AuditLogEvent2["ApplicationCommandPermissionUpdate"] = 121] = "ApplicationCommandPermissionUpdate";
      AuditLogEvent2[AuditLogEvent2["SoundboardSoundCreate"] = 130] = "SoundboardSoundCreate";
      AuditLogEvent2[AuditLogEvent2["SoundboardSoundUpdate"] = 131] = "SoundboardSoundUpdate";
      AuditLogEvent2[AuditLogEvent2["SoundboardSoundDelete"] = 132] = "SoundboardSoundDelete";
      AuditLogEvent2[AuditLogEvent2["AutoModerationRuleCreate"] = 140] = "AutoModerationRuleCreate";
      AuditLogEvent2[AuditLogEvent2["AutoModerationRuleUpdate"] = 141] = "AutoModerationRuleUpdate";
      AuditLogEvent2[AuditLogEvent2["AutoModerationRuleDelete"] = 142] = "AutoModerationRuleDelete";
      AuditLogEvent2[AuditLogEvent2["AutoModerationBlockMessage"] = 143] = "AutoModerationBlockMessage";
      AuditLogEvent2[AuditLogEvent2["AutoModerationFlagToChannel"] = 144] = "AutoModerationFlagToChannel";
      AuditLogEvent2[AuditLogEvent2["AutoModerationUserCommunicationDisabled"] = 145] = "AutoModerationUserCommunicationDisabled";
      AuditLogEvent2[AuditLogEvent2["CreatorMonetizationRequestCreated"] = 150] = "CreatorMonetizationRequestCreated";
      AuditLogEvent2[AuditLogEvent2["CreatorMonetizationTermsAccepted"] = 151] = "CreatorMonetizationTermsAccepted";
      AuditLogEvent2[AuditLogEvent2["OnboardingPromptCreate"] = 163] = "OnboardingPromptCreate";
      AuditLogEvent2[AuditLogEvent2["OnboardingPromptUpdate"] = 164] = "OnboardingPromptUpdate";
      AuditLogEvent2[AuditLogEvent2["OnboardingPromptDelete"] = 165] = "OnboardingPromptDelete";
      AuditLogEvent2[AuditLogEvent2["OnboardingCreate"] = 166] = "OnboardingCreate";
      AuditLogEvent2[AuditLogEvent2["OnboardingUpdate"] = 167] = "OnboardingUpdate";
      AuditLogEvent2[AuditLogEvent2["HomeSettingsCreate"] = 190] = "HomeSettingsCreate";
      AuditLogEvent2[AuditLogEvent2["HomeSettingsUpdate"] = 191] = "HomeSettingsUpdate";
    })(AuditLogEvent || (exports.AuditLogEvent = AuditLogEvent = {}));
    var AuditLogOptionsType;
    (function(AuditLogOptionsType2) {
      AuditLogOptionsType2["Role"] = "0";
      AuditLogOptionsType2["Member"] = "1";
    })(AuditLogOptionsType || (exports.AuditLogOptionsType = AuditLogOptionsType = {}));
  }
});

// node_modules/discord-api-types/payloads/v10/autoModeration.js
var require_autoModeration = __commonJS({
  "node_modules/discord-api-types/payloads/v10/autoModeration.js"(exports) {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AutoModerationActionType = exports.AutoModerationRuleEventType = exports.AutoModerationRuleKeywordPresetType = exports.AutoModerationRuleTriggerType = void 0;
    var AutoModerationRuleTriggerType;
    (function(AutoModerationRuleTriggerType2) {
      AutoModerationRuleTriggerType2[AutoModerationRuleTriggerType2["Keyword"] = 1] = "Keyword";
      AutoModerationRuleTriggerType2[AutoModerationRuleTriggerType2["Spam"] = 3] = "Spam";
      AutoModerationRuleTriggerType2[AutoModerationRuleTriggerType2["KeywordPreset"] = 4] = "KeywordPreset";
      AutoModerationRuleTriggerType2[AutoModerationRuleTriggerType2["MentionSpam"] = 5] = "MentionSpam";
      AutoModerationRuleTriggerType2[AutoModerationRuleTriggerType2["MemberProfile"] = 6] = "MemberProfile";
    })(AutoModerationRuleTriggerType || (exports.AutoModerationRuleTriggerType = AutoModerationRuleTriggerType = {}));
    var AutoModerationRuleKeywordPresetType;
    (function(AutoModerationRuleKeywordPresetType2) {
      AutoModerationRuleKeywordPresetType2[AutoModerationRuleKeywordPresetType2["Profanity"] = 1] = "Profanity";
      AutoModerationRuleKeywordPresetType2[AutoModerationRuleKeywordPresetType2["SexualContent"] = 2] = "SexualContent";
      AutoModerationRuleKeywordPresetType2[AutoModerationRuleKeywordPresetType2["Slurs"] = 3] = "Slurs";
    })(AutoModerationRuleKeywordPresetType || (exports.AutoModerationRuleKeywordPresetType = AutoModerationRuleKeywordPresetType = {}));
    var AutoModerationRuleEventType;
    (function(AutoModerationRuleEventType2) {
      AutoModerationRuleEventType2[AutoModerationRuleEventType2["MessageSend"] = 1] = "MessageSend";
      AutoModerationRuleEventType2[AutoModerationRuleEventType2["MemberUpdate"] = 2] = "MemberUpdate";
    })(AutoModerationRuleEventType || (exports.AutoModerationRuleEventType = AutoModerationRuleEventType = {}));
    var AutoModerationActionType;
    (function(AutoModerationActionType2) {
      AutoModerationActionType2[AutoModerationActionType2["BlockMessage"] = 1] = "BlockMessage";
      AutoModerationActionType2[AutoModerationActionType2["SendAlertMessage"] = 2] = "SendAlertMessage";
      AutoModerationActionType2[AutoModerationActionType2["Timeout"] = 3] = "Timeout";
      AutoModerationActionType2[AutoModerationActionType2["BlockMemberInteraction"] = 4] = "BlockMemberInteraction";
    })(AutoModerationActionType || (exports.AutoModerationActionType = AutoModerationActionType = {}));
  }
});

// node_modules/discord-api-types/payloads/v10/channel.js
var require_channel = __commonJS({
  "node_modules/discord-api-types/payloads/v10/channel.js"(exports) {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ChannelFlags = exports.SelectMenuDefaultValueType = exports.TextInputStyle = exports.ButtonStyle = exports.ComponentType = exports.AllowedMentionsTypes = exports.AttachmentFlags = exports.EmbedType = exports.ThreadMemberFlags = exports.ThreadAutoArchiveDuration = exports.OverwriteType = exports.MessageFlags = exports.MessageReferenceType = exports.MessageActivityType = exports.MessageType = exports.VideoQualityMode = exports.ChannelType = exports.ForumLayoutType = exports.SortOrderType = void 0;
    var SortOrderType;
    (function(SortOrderType2) {
      SortOrderType2[SortOrderType2["LatestActivity"] = 0] = "LatestActivity";
      SortOrderType2[SortOrderType2["CreationDate"] = 1] = "CreationDate";
    })(SortOrderType || (exports.SortOrderType = SortOrderType = {}));
    var ForumLayoutType;
    (function(ForumLayoutType2) {
      ForumLayoutType2[ForumLayoutType2["NotSet"] = 0] = "NotSet";
      ForumLayoutType2[ForumLayoutType2["ListView"] = 1] = "ListView";
      ForumLayoutType2[ForumLayoutType2["GalleryView"] = 2] = "GalleryView";
    })(ForumLayoutType || (exports.ForumLayoutType = ForumLayoutType = {}));
    var ChannelType;
    (function(ChannelType2) {
      ChannelType2[ChannelType2["GuildText"] = 0] = "GuildText";
      ChannelType2[ChannelType2["DM"] = 1] = "DM";
      ChannelType2[ChannelType2["GuildVoice"] = 2] = "GuildVoice";
      ChannelType2[ChannelType2["GroupDM"] = 3] = "GroupDM";
      ChannelType2[ChannelType2["GuildCategory"] = 4] = "GuildCategory";
      ChannelType2[ChannelType2["GuildAnnouncement"] = 5] = "GuildAnnouncement";
      ChannelType2[ChannelType2["AnnouncementThread"] = 10] = "AnnouncementThread";
      ChannelType2[ChannelType2["PublicThread"] = 11] = "PublicThread";
      ChannelType2[ChannelType2["PrivateThread"] = 12] = "PrivateThread";
      ChannelType2[ChannelType2["GuildStageVoice"] = 13] = "GuildStageVoice";
      ChannelType2[ChannelType2["GuildDirectory"] = 14] = "GuildDirectory";
      ChannelType2[ChannelType2["GuildForum"] = 15] = "GuildForum";
      ChannelType2[ChannelType2["GuildMedia"] = 16] = "GuildMedia";
      ChannelType2[ChannelType2["GuildNews"] = 5] = "GuildNews";
      ChannelType2[ChannelType2["GuildNewsThread"] = 10] = "GuildNewsThread";
      ChannelType2[ChannelType2["GuildPublicThread"] = 11] = "GuildPublicThread";
      ChannelType2[ChannelType2["GuildPrivateThread"] = 12] = "GuildPrivateThread";
    })(ChannelType || (exports.ChannelType = ChannelType = {}));
    var VideoQualityMode;
    (function(VideoQualityMode2) {
      VideoQualityMode2[VideoQualityMode2["Auto"] = 1] = "Auto";
      VideoQualityMode2[VideoQualityMode2["Full"] = 2] = "Full";
    })(VideoQualityMode || (exports.VideoQualityMode = VideoQualityMode = {}));
    var MessageType;
    (function(MessageType2) {
      MessageType2[MessageType2["Default"] = 0] = "Default";
      MessageType2[MessageType2["RecipientAdd"] = 1] = "RecipientAdd";
      MessageType2[MessageType2["RecipientRemove"] = 2] = "RecipientRemove";
      MessageType2[MessageType2["Call"] = 3] = "Call";
      MessageType2[MessageType2["ChannelNameChange"] = 4] = "ChannelNameChange";
      MessageType2[MessageType2["ChannelIconChange"] = 5] = "ChannelIconChange";
      MessageType2[MessageType2["ChannelPinnedMessage"] = 6] = "ChannelPinnedMessage";
      MessageType2[MessageType2["UserJoin"] = 7] = "UserJoin";
      MessageType2[MessageType2["GuildBoost"] = 8] = "GuildBoost";
      MessageType2[MessageType2["GuildBoostTier1"] = 9] = "GuildBoostTier1";
      MessageType2[MessageType2["GuildBoostTier2"] = 10] = "GuildBoostTier2";
      MessageType2[MessageType2["GuildBoostTier3"] = 11] = "GuildBoostTier3";
      MessageType2[MessageType2["ChannelFollowAdd"] = 12] = "ChannelFollowAdd";
      MessageType2[MessageType2["GuildDiscoveryDisqualified"] = 14] = "GuildDiscoveryDisqualified";
      MessageType2[MessageType2["GuildDiscoveryRequalified"] = 15] = "GuildDiscoveryRequalified";
      MessageType2[MessageType2["GuildDiscoveryGracePeriodInitialWarning"] = 16] = "GuildDiscoveryGracePeriodInitialWarning";
      MessageType2[MessageType2["GuildDiscoveryGracePeriodFinalWarning"] = 17] = "GuildDiscoveryGracePeriodFinalWarning";
      MessageType2[MessageType2["ThreadCreated"] = 18] = "ThreadCreated";
      MessageType2[MessageType2["Reply"] = 19] = "Reply";
      MessageType2[MessageType2["ChatInputCommand"] = 20] = "ChatInputCommand";
      MessageType2[MessageType2["ThreadStarterMessage"] = 21] = "ThreadStarterMessage";
      MessageType2[MessageType2["GuildInviteReminder"] = 22] = "GuildInviteReminder";
      MessageType2[MessageType2["ContextMenuCommand"] = 23] = "ContextMenuCommand";
      MessageType2[MessageType2["AutoModerationAction"] = 24] = "AutoModerationAction";
      MessageType2[MessageType2["RoleSubscriptionPurchase"] = 25] = "RoleSubscriptionPurchase";
      MessageType2[MessageType2["InteractionPremiumUpsell"] = 26] = "InteractionPremiumUpsell";
      MessageType2[MessageType2["StageStart"] = 27] = "StageStart";
      MessageType2[MessageType2["StageEnd"] = 28] = "StageEnd";
      MessageType2[MessageType2["StageSpeaker"] = 29] = "StageSpeaker";
      MessageType2[MessageType2["StageRaiseHand"] = 30] = "StageRaiseHand";
      MessageType2[MessageType2["StageTopic"] = 31] = "StageTopic";
      MessageType2[MessageType2["GuildApplicationPremiumSubscription"] = 32] = "GuildApplicationPremiumSubscription";
      MessageType2[MessageType2["GuildIncidentAlertModeEnabled"] = 36] = "GuildIncidentAlertModeEnabled";
      MessageType2[MessageType2["GuildIncidentAlertModeDisabled"] = 37] = "GuildIncidentAlertModeDisabled";
      MessageType2[MessageType2["GuildIncidentReportRaid"] = 38] = "GuildIncidentReportRaid";
      MessageType2[MessageType2["GuildIncidentReportFalseAlarm"] = 39] = "GuildIncidentReportFalseAlarm";
      MessageType2[MessageType2["PurchaseNotification"] = 44] = "PurchaseNotification";
      MessageType2[MessageType2["PollResult"] = 46] = "PollResult";
    })(MessageType || (exports.MessageType = MessageType = {}));
    var MessageActivityType;
    (function(MessageActivityType2) {
      MessageActivityType2[MessageActivityType2["Join"] = 1] = "Join";
      MessageActivityType2[MessageActivityType2["Spectate"] = 2] = "Spectate";
      MessageActivityType2[MessageActivityType2["Listen"] = 3] = "Listen";
      MessageActivityType2[MessageActivityType2["JoinRequest"] = 5] = "JoinRequest";
    })(MessageActivityType || (exports.MessageActivityType = MessageActivityType = {}));
    var MessageReferenceType;
    (function(MessageReferenceType2) {
      MessageReferenceType2[MessageReferenceType2["Default"] = 0] = "Default";
      MessageReferenceType2[MessageReferenceType2["Forward"] = 1] = "Forward";
    })(MessageReferenceType || (exports.MessageReferenceType = MessageReferenceType = {}));
    var MessageFlags;
    (function(MessageFlags2) {
      MessageFlags2[MessageFlags2["Crossposted"] = 1] = "Crossposted";
      MessageFlags2[MessageFlags2["IsCrosspost"] = 2] = "IsCrosspost";
      MessageFlags2[MessageFlags2["SuppressEmbeds"] = 4] = "SuppressEmbeds";
      MessageFlags2[MessageFlags2["SourceMessageDeleted"] = 8] = "SourceMessageDeleted";
      MessageFlags2[MessageFlags2["Urgent"] = 16] = "Urgent";
      MessageFlags2[MessageFlags2["HasThread"] = 32] = "HasThread";
      MessageFlags2[MessageFlags2["Ephemeral"] = 64] = "Ephemeral";
      MessageFlags2[MessageFlags2["Loading"] = 128] = "Loading";
      MessageFlags2[MessageFlags2["FailedToMentionSomeRolesInThread"] = 256] = "FailedToMentionSomeRolesInThread";
      MessageFlags2[MessageFlags2["ShouldShowLinkNotDiscordWarning"] = 1024] = "ShouldShowLinkNotDiscordWarning";
      MessageFlags2[MessageFlags2["SuppressNotifications"] = 4096] = "SuppressNotifications";
      MessageFlags2[MessageFlags2["IsVoiceMessage"] = 8192] = "IsVoiceMessage";
      MessageFlags2[MessageFlags2["HasSnapshot"] = 16384] = "HasSnapshot";
    })(MessageFlags || (exports.MessageFlags = MessageFlags = {}));
    var OverwriteType;
    (function(OverwriteType2) {
      OverwriteType2[OverwriteType2["Role"] = 0] = "Role";
      OverwriteType2[OverwriteType2["Member"] = 1] = "Member";
    })(OverwriteType || (exports.OverwriteType = OverwriteType = {}));
    var ThreadAutoArchiveDuration;
    (function(ThreadAutoArchiveDuration2) {
      ThreadAutoArchiveDuration2[ThreadAutoArchiveDuration2["OneHour"] = 60] = "OneHour";
      ThreadAutoArchiveDuration2[ThreadAutoArchiveDuration2["OneDay"] = 1440] = "OneDay";
      ThreadAutoArchiveDuration2[ThreadAutoArchiveDuration2["ThreeDays"] = 4320] = "ThreeDays";
      ThreadAutoArchiveDuration2[ThreadAutoArchiveDuration2["OneWeek"] = 10080] = "OneWeek";
    })(ThreadAutoArchiveDuration || (exports.ThreadAutoArchiveDuration = ThreadAutoArchiveDuration = {}));
    var ThreadMemberFlags;
    (function(ThreadMemberFlags2) {
      ThreadMemberFlags2[ThreadMemberFlags2["HasInteracted"] = 1] = "HasInteracted";
      ThreadMemberFlags2[ThreadMemberFlags2["AllMessages"] = 2] = "AllMessages";
      ThreadMemberFlags2[ThreadMemberFlags2["OnlyMentions"] = 4] = "OnlyMentions";
      ThreadMemberFlags2[ThreadMemberFlags2["NoMessages"] = 8] = "NoMessages";
    })(ThreadMemberFlags || (exports.ThreadMemberFlags = ThreadMemberFlags = {}));
    var EmbedType;
    (function(EmbedType2) {
      EmbedType2["Rich"] = "rich";
      EmbedType2["Image"] = "image";
      EmbedType2["Video"] = "video";
      EmbedType2["GIFV"] = "gifv";
      EmbedType2["Article"] = "article";
      EmbedType2["Link"] = "link";
      EmbedType2["AutoModerationMessage"] = "auto_moderation_message";
      EmbedType2["PollResult"] = "poll_result";
    })(EmbedType || (exports.EmbedType = EmbedType = {}));
    var AttachmentFlags;
    (function(AttachmentFlags2) {
      AttachmentFlags2[AttachmentFlags2["IsRemix"] = 4] = "IsRemix";
    })(AttachmentFlags || (exports.AttachmentFlags = AttachmentFlags = {}));
    var AllowedMentionsTypes;
    (function(AllowedMentionsTypes2) {
      AllowedMentionsTypes2["Everyone"] = "everyone";
      AllowedMentionsTypes2["Role"] = "roles";
      AllowedMentionsTypes2["User"] = "users";
    })(AllowedMentionsTypes || (exports.AllowedMentionsTypes = AllowedMentionsTypes = {}));
    var ComponentType;
    (function(ComponentType2) {
      ComponentType2[ComponentType2["ActionRow"] = 1] = "ActionRow";
      ComponentType2[ComponentType2["Button"] = 2] = "Button";
      ComponentType2[ComponentType2["StringSelect"] = 3] = "StringSelect";
      ComponentType2[ComponentType2["TextInput"] = 4] = "TextInput";
      ComponentType2[ComponentType2["UserSelect"] = 5] = "UserSelect";
      ComponentType2[ComponentType2["RoleSelect"] = 6] = "RoleSelect";
      ComponentType2[ComponentType2["MentionableSelect"] = 7] = "MentionableSelect";
      ComponentType2[ComponentType2["ChannelSelect"] = 8] = "ChannelSelect";
      ComponentType2[ComponentType2["SelectMenu"] = 3] = "SelectMenu";
    })(ComponentType || (exports.ComponentType = ComponentType = {}));
    var ButtonStyle;
    (function(ButtonStyle2) {
      ButtonStyle2[ButtonStyle2["Primary"] = 1] = "Primary";
      ButtonStyle2[ButtonStyle2["Secondary"] = 2] = "Secondary";
      ButtonStyle2[ButtonStyle2["Success"] = 3] = "Success";
      ButtonStyle2[ButtonStyle2["Danger"] = 4] = "Danger";
      ButtonStyle2[ButtonStyle2["Link"] = 5] = "Link";
      ButtonStyle2[ButtonStyle2["Premium"] = 6] = "Premium";
    })(ButtonStyle || (exports.ButtonStyle = ButtonStyle = {}));
    var TextInputStyle;
    (function(TextInputStyle2) {
      TextInputStyle2[TextInputStyle2["Short"] = 1] = "Short";
      TextInputStyle2[TextInputStyle2["Paragraph"] = 2] = "Paragraph";
    })(TextInputStyle || (exports.TextInputStyle = TextInputStyle = {}));
    var SelectMenuDefaultValueType;
    (function(SelectMenuDefaultValueType2) {
      SelectMenuDefaultValueType2["Channel"] = "channel";
      SelectMenuDefaultValueType2["Role"] = "role";
      SelectMenuDefaultValueType2["User"] = "user";
    })(SelectMenuDefaultValueType || (exports.SelectMenuDefaultValueType = SelectMenuDefaultValueType = {}));
    var ChannelFlags;
    (function(ChannelFlags2) {
      ChannelFlags2[ChannelFlags2["GuildFeedRemoved"] = 1] = "GuildFeedRemoved";
      ChannelFlags2[ChannelFlags2["Pinned"] = 2] = "Pinned";
      ChannelFlags2[ChannelFlags2["ActiveChannelsRemoved"] = 4] = "ActiveChannelsRemoved";
      ChannelFlags2[ChannelFlags2["RequireTag"] = 16] = "RequireTag";
      ChannelFlags2[ChannelFlags2["IsSpam"] = 32] = "IsSpam";
      ChannelFlags2[ChannelFlags2["IsGuildResourceChannel"] = 128] = "IsGuildResourceChannel";
      ChannelFlags2[ChannelFlags2["ClydeAI"] = 256] = "ClydeAI";
      ChannelFlags2[ChannelFlags2["IsScheduledForDeletion"] = 512] = "IsScheduledForDeletion";
      ChannelFlags2[ChannelFlags2["HideMediaDownloadOptions"] = 32768] = "HideMediaDownloadOptions";
    })(ChannelFlags || (exports.ChannelFlags = ChannelFlags = {}));
  }
});

// node_modules/discord-api-types/payloads/v10/emoji.js
var require_emoji = __commonJS({
  "node_modules/discord-api-types/payloads/v10/emoji.js"(exports) {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/discord-api-types/payloads/v10/gateway.js
var require_gateway = __commonJS({
  "node_modules/discord-api-types/payloads/v10/gateway.js"(exports) {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ActivityFlags = exports.ActivityType = exports.ActivityPlatform = exports.PresenceUpdateStatus = void 0;
    var PresenceUpdateStatus;
    (function(PresenceUpdateStatus2) {
      PresenceUpdateStatus2["Online"] = "online";
      PresenceUpdateStatus2["DoNotDisturb"] = "dnd";
      PresenceUpdateStatus2["Idle"] = "idle";
      PresenceUpdateStatus2["Invisible"] = "invisible";
      PresenceUpdateStatus2["Offline"] = "offline";
    })(PresenceUpdateStatus || (exports.PresenceUpdateStatus = PresenceUpdateStatus = {}));
    var ActivityPlatform;
    (function(ActivityPlatform2) {
      ActivityPlatform2["Desktop"] = "desktop";
      ActivityPlatform2["Xbox"] = "xbox";
      ActivityPlatform2["Samsung"] = "samsung";
      ActivityPlatform2["IOS"] = "ios";
      ActivityPlatform2["Android"] = "android";
      ActivityPlatform2["Embedded"] = "embedded";
      ActivityPlatform2["PS4"] = "ps4";
      ActivityPlatform2["PS5"] = "ps5";
    })(ActivityPlatform || (exports.ActivityPlatform = ActivityPlatform = {}));
    var ActivityType;
    (function(ActivityType2) {
      ActivityType2[ActivityType2["Playing"] = 0] = "Playing";
      ActivityType2[ActivityType2["Streaming"] = 1] = "Streaming";
      ActivityType2[ActivityType2["Listening"] = 2] = "Listening";
      ActivityType2[ActivityType2["Watching"] = 3] = "Watching";
      ActivityType2[ActivityType2["Custom"] = 4] = "Custom";
      ActivityType2[ActivityType2["Competing"] = 5] = "Competing";
    })(ActivityType || (exports.ActivityType = ActivityType = {}));
    var ActivityFlags;
    (function(ActivityFlags2) {
      ActivityFlags2[ActivityFlags2["Instance"] = 1] = "Instance";
      ActivityFlags2[ActivityFlags2["Join"] = 2] = "Join";
      ActivityFlags2[ActivityFlags2["Spectate"] = 4] = "Spectate";
      ActivityFlags2[ActivityFlags2["JoinRequest"] = 8] = "JoinRequest";
      ActivityFlags2[ActivityFlags2["Sync"] = 16] = "Sync";
      ActivityFlags2[ActivityFlags2["Play"] = 32] = "Play";
      ActivityFlags2[ActivityFlags2["PartyPrivacyFriends"] = 64] = "PartyPrivacyFriends";
      ActivityFlags2[ActivityFlags2["PartyPrivacyVoiceChannel"] = 128] = "PartyPrivacyVoiceChannel";
      ActivityFlags2[ActivityFlags2["Embedded"] = 256] = "Embedded";
    })(ActivityFlags || (exports.ActivityFlags = ActivityFlags = {}));
  }
});

// node_modules/discord-api-types/payloads/v10/guild.js
var require_guild = __commonJS({
  "node_modules/discord-api-types/payloads/v10/guild.js"(exports) {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.GuildOnboardingPromptType = exports.GuildOnboardingMode = exports.MembershipScreeningFieldType = exports.GuildWidgetStyle = exports.IntegrationExpireBehavior = exports.GuildMemberFlags = exports.GuildFeature = exports.GuildSystemChannelFlags = exports.GuildHubType = exports.GuildPremiumTier = exports.GuildVerificationLevel = exports.GuildNSFWLevel = exports.GuildMFALevel = exports.GuildExplicitContentFilter = exports.GuildDefaultMessageNotifications = void 0;
    var GuildDefaultMessageNotifications;
    (function(GuildDefaultMessageNotifications2) {
      GuildDefaultMessageNotifications2[GuildDefaultMessageNotifications2["AllMessages"] = 0] = "AllMessages";
      GuildDefaultMessageNotifications2[GuildDefaultMessageNotifications2["OnlyMentions"] = 1] = "OnlyMentions";
    })(GuildDefaultMessageNotifications || (exports.GuildDefaultMessageNotifications = GuildDefaultMessageNotifications = {}));
    var GuildExplicitContentFilter;
    (function(GuildExplicitContentFilter2) {
      GuildExplicitContentFilter2[GuildExplicitContentFilter2["Disabled"] = 0] = "Disabled";
      GuildExplicitContentFilter2[GuildExplicitContentFilter2["MembersWithoutRoles"] = 1] = "MembersWithoutRoles";
      GuildExplicitContentFilter2[GuildExplicitContentFilter2["AllMembers"] = 2] = "AllMembers";
    })(GuildExplicitContentFilter || (exports.GuildExplicitContentFilter = GuildExplicitContentFilter = {}));
    var GuildMFALevel;
    (function(GuildMFALevel2) {
      GuildMFALevel2[GuildMFALevel2["None"] = 0] = "None";
      GuildMFALevel2[GuildMFALevel2["Elevated"] = 1] = "Elevated";
    })(GuildMFALevel || (exports.GuildMFALevel = GuildMFALevel = {}));
    var GuildNSFWLevel;
    (function(GuildNSFWLevel2) {
      GuildNSFWLevel2[GuildNSFWLevel2["Default"] = 0] = "Default";
      GuildNSFWLevel2[GuildNSFWLevel2["Explicit"] = 1] = "Explicit";
      GuildNSFWLevel2[GuildNSFWLevel2["Safe"] = 2] = "Safe";
      GuildNSFWLevel2[GuildNSFWLevel2["AgeRestricted"] = 3] = "AgeRestricted";
    })(GuildNSFWLevel || (exports.GuildNSFWLevel = GuildNSFWLevel = {}));
    var GuildVerificationLevel;
    (function(GuildVerificationLevel2) {
      GuildVerificationLevel2[GuildVerificationLevel2["None"] = 0] = "None";
      GuildVerificationLevel2[GuildVerificationLevel2["Low"] = 1] = "Low";
      GuildVerificationLevel2[GuildVerificationLevel2["Medium"] = 2] = "Medium";
      GuildVerificationLevel2[GuildVerificationLevel2["High"] = 3] = "High";
      GuildVerificationLevel2[GuildVerificationLevel2["VeryHigh"] = 4] = "VeryHigh";
    })(GuildVerificationLevel || (exports.GuildVerificationLevel = GuildVerificationLevel = {}));
    var GuildPremiumTier;
    (function(GuildPremiumTier2) {
      GuildPremiumTier2[GuildPremiumTier2["None"] = 0] = "None";
      GuildPremiumTier2[GuildPremiumTier2["Tier1"] = 1] = "Tier1";
      GuildPremiumTier2[GuildPremiumTier2["Tier2"] = 2] = "Tier2";
      GuildPremiumTier2[GuildPremiumTier2["Tier3"] = 3] = "Tier3";
    })(GuildPremiumTier || (exports.GuildPremiumTier = GuildPremiumTier = {}));
    var GuildHubType;
    (function(GuildHubType2) {
      GuildHubType2[GuildHubType2["Default"] = 0] = "Default";
      GuildHubType2[GuildHubType2["HighSchool"] = 1] = "HighSchool";
      GuildHubType2[GuildHubType2["College"] = 2] = "College";
    })(GuildHubType || (exports.GuildHubType = GuildHubType = {}));
    var GuildSystemChannelFlags;
    (function(GuildSystemChannelFlags2) {
      GuildSystemChannelFlags2[GuildSystemChannelFlags2["SuppressJoinNotifications"] = 1] = "SuppressJoinNotifications";
      GuildSystemChannelFlags2[GuildSystemChannelFlags2["SuppressPremiumSubscriptions"] = 2] = "SuppressPremiumSubscriptions";
      GuildSystemChannelFlags2[GuildSystemChannelFlags2["SuppressGuildReminderNotifications"] = 4] = "SuppressGuildReminderNotifications";
      GuildSystemChannelFlags2[GuildSystemChannelFlags2["SuppressJoinNotificationReplies"] = 8] = "SuppressJoinNotificationReplies";
      GuildSystemChannelFlags2[GuildSystemChannelFlags2["SuppressRoleSubscriptionPurchaseNotifications"] = 16] = "SuppressRoleSubscriptionPurchaseNotifications";
      GuildSystemChannelFlags2[GuildSystemChannelFlags2["SuppressRoleSubscriptionPurchaseNotificationReplies"] = 32] = "SuppressRoleSubscriptionPurchaseNotificationReplies";
    })(GuildSystemChannelFlags || (exports.GuildSystemChannelFlags = GuildSystemChannelFlags = {}));
    var GuildFeature;
    (function(GuildFeature2) {
      GuildFeature2["AnimatedBanner"] = "ANIMATED_BANNER";
      GuildFeature2["AnimatedIcon"] = "ANIMATED_ICON";
      GuildFeature2["ApplicationCommandPermissionsV2"] = "APPLICATION_COMMAND_PERMISSIONS_V2";
      GuildFeature2["AutoModeration"] = "AUTO_MODERATION";
      GuildFeature2["Banner"] = "BANNER";
      GuildFeature2["Community"] = "COMMUNITY";
      GuildFeature2["CreatorMonetizableProvisional"] = "CREATOR_MONETIZABLE_PROVISIONAL";
      GuildFeature2["CreatorStorePage"] = "CREATOR_STORE_PAGE";
      GuildFeature2["DeveloperSupportServer"] = "DEVELOPER_SUPPORT_SERVER";
      GuildFeature2["Discoverable"] = "DISCOVERABLE";
      GuildFeature2["Featurable"] = "FEATURABLE";
      GuildFeature2["HasDirectoryEntry"] = "HAS_DIRECTORY_ENTRY";
      GuildFeature2["Hub"] = "HUB";
      GuildFeature2["InvitesDisabled"] = "INVITES_DISABLED";
      GuildFeature2["InviteSplash"] = "INVITE_SPLASH";
      GuildFeature2["LinkedToHub"] = "LINKED_TO_HUB";
      GuildFeature2["MemberVerificationGateEnabled"] = "MEMBER_VERIFICATION_GATE_ENABLED";
      GuildFeature2["MoreSoundboard"] = "MORE_SOUNDBOARD";
      GuildFeature2["MonetizationEnabled"] = "MONETIZATION_ENABLED";
      GuildFeature2["MoreStickers"] = "MORE_STICKERS";
      GuildFeature2["News"] = "NEWS";
      GuildFeature2["Partnered"] = "PARTNERED";
      GuildFeature2["PreviewEnabled"] = "PREVIEW_ENABLED";
      GuildFeature2["PrivateThreads"] = "PRIVATE_THREADS";
      GuildFeature2["RaidAlertsDisabled"] = "RAID_ALERTS_DISABLED";
      GuildFeature2["RelayEnabled"] = "RELAY_ENABLED";
      GuildFeature2["RoleIcons"] = "ROLE_ICONS";
      GuildFeature2["RoleSubscriptionsAvailableForPurchase"] = "ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE";
      GuildFeature2["RoleSubscriptionsEnabled"] = "ROLE_SUBSCRIPTIONS_ENABLED";
      GuildFeature2["Soundboard"] = "SOUNDBOARD";
      GuildFeature2["TicketedEventsEnabled"] = "TICKETED_EVENTS_ENABLED";
      GuildFeature2["VanityURL"] = "VANITY_URL";
      GuildFeature2["Verified"] = "VERIFIED";
      GuildFeature2["VIPRegions"] = "VIP_REGIONS";
      GuildFeature2["WelcomeScreenEnabled"] = "WELCOME_SCREEN_ENABLED";
    })(GuildFeature || (exports.GuildFeature = GuildFeature = {}));
    var GuildMemberFlags;
    (function(GuildMemberFlags2) {
      GuildMemberFlags2[GuildMemberFlags2["DidRejoin"] = 1] = "DidRejoin";
      GuildMemberFlags2[GuildMemberFlags2["CompletedOnboarding"] = 2] = "CompletedOnboarding";
      GuildMemberFlags2[GuildMemberFlags2["BypassesVerification"] = 4] = "BypassesVerification";
      GuildMemberFlags2[GuildMemberFlags2["StartedOnboarding"] = 8] = "StartedOnboarding";
      GuildMemberFlags2[GuildMemberFlags2["IsGuest"] = 16] = "IsGuest";
      GuildMemberFlags2[GuildMemberFlags2["StartedHomeActions"] = 32] = "StartedHomeActions";
      GuildMemberFlags2[GuildMemberFlags2["CompletedHomeActions"] = 64] = "CompletedHomeActions";
      GuildMemberFlags2[GuildMemberFlags2["AutomodQuarantinedUsernameOrGuildNickname"] = 128] = "AutomodQuarantinedUsernameOrGuildNickname";
      GuildMemberFlags2[GuildMemberFlags2["AutomodQuarantinedBio"] = 256] = "AutomodQuarantinedBio";
      GuildMemberFlags2[GuildMemberFlags2["DmSettingsUpsellAcknowledged"] = 512] = "DmSettingsUpsellAcknowledged";
    })(GuildMemberFlags || (exports.GuildMemberFlags = GuildMemberFlags = {}));
    var IntegrationExpireBehavior;
    (function(IntegrationExpireBehavior2) {
      IntegrationExpireBehavior2[IntegrationExpireBehavior2["RemoveRole"] = 0] = "RemoveRole";
      IntegrationExpireBehavior2[IntegrationExpireBehavior2["Kick"] = 1] = "Kick";
    })(IntegrationExpireBehavior || (exports.IntegrationExpireBehavior = IntegrationExpireBehavior = {}));
    var GuildWidgetStyle;
    (function(GuildWidgetStyle2) {
      GuildWidgetStyle2["Shield"] = "shield";
      GuildWidgetStyle2["Banner1"] = "banner1";
      GuildWidgetStyle2["Banner2"] = "banner2";
      GuildWidgetStyle2["Banner3"] = "banner3";
      GuildWidgetStyle2["Banner4"] = "banner4";
    })(GuildWidgetStyle || (exports.GuildWidgetStyle = GuildWidgetStyle = {}));
    var MembershipScreeningFieldType;
    (function(MembershipScreeningFieldType2) {
      MembershipScreeningFieldType2["Terms"] = "TERMS";
    })(MembershipScreeningFieldType || (exports.MembershipScreeningFieldType = MembershipScreeningFieldType = {}));
    var GuildOnboardingMode;
    (function(GuildOnboardingMode2) {
      GuildOnboardingMode2[GuildOnboardingMode2["OnboardingDefault"] = 0] = "OnboardingDefault";
      GuildOnboardingMode2[GuildOnboardingMode2["OnboardingAdvanced"] = 1] = "OnboardingAdvanced";
    })(GuildOnboardingMode || (exports.GuildOnboardingMode = GuildOnboardingMode = {}));
    var GuildOnboardingPromptType;
    (function(GuildOnboardingPromptType2) {
      GuildOnboardingPromptType2[GuildOnboardingPromptType2["MultipleChoice"] = 0] = "MultipleChoice";
      GuildOnboardingPromptType2[GuildOnboardingPromptType2["Dropdown"] = 1] = "Dropdown";
    })(GuildOnboardingPromptType || (exports.GuildOnboardingPromptType = GuildOnboardingPromptType = {}));
  }
});

// node_modules/discord-api-types/payloads/v10/guildScheduledEvent.js
var require_guildScheduledEvent = __commonJS({
  "node_modules/discord-api-types/payloads/v10/guildScheduledEvent.js"(exports) {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.GuildScheduledEventPrivacyLevel = exports.GuildScheduledEventStatus = exports.GuildScheduledEventEntityType = exports.GuildScheduledEventRecurrenceRuleMonth = exports.GuildScheduledEventRecurrenceRuleWeekday = exports.GuildScheduledEventRecurrenceRuleFrequency = void 0;
    var GuildScheduledEventRecurrenceRuleFrequency;
    (function(GuildScheduledEventRecurrenceRuleFrequency2) {
      GuildScheduledEventRecurrenceRuleFrequency2[GuildScheduledEventRecurrenceRuleFrequency2["Yearly"] = 0] = "Yearly";
      GuildScheduledEventRecurrenceRuleFrequency2[GuildScheduledEventRecurrenceRuleFrequency2["Monthly"] = 1] = "Monthly";
      GuildScheduledEventRecurrenceRuleFrequency2[GuildScheduledEventRecurrenceRuleFrequency2["Weekly"] = 2] = "Weekly";
      GuildScheduledEventRecurrenceRuleFrequency2[GuildScheduledEventRecurrenceRuleFrequency2["Daily"] = 3] = "Daily";
    })(GuildScheduledEventRecurrenceRuleFrequency || (exports.GuildScheduledEventRecurrenceRuleFrequency = GuildScheduledEventRecurrenceRuleFrequency = {}));
    var GuildScheduledEventRecurrenceRuleWeekday;
    (function(GuildScheduledEventRecurrenceRuleWeekday2) {
      GuildScheduledEventRecurrenceRuleWeekday2[GuildScheduledEventRecurrenceRuleWeekday2["Monday"] = 0] = "Monday";
      GuildScheduledEventRecurrenceRuleWeekday2[GuildScheduledEventRecurrenceRuleWeekday2["Tuesday"] = 1] = "Tuesday";
      GuildScheduledEventRecurrenceRuleWeekday2[GuildScheduledEventRecurrenceRuleWeekday2["Wednesday"] = 2] = "Wednesday";
      GuildScheduledEventRecurrenceRuleWeekday2[GuildScheduledEventRecurrenceRuleWeekday2["Thursday"] = 3] = "Thursday";
      GuildScheduledEventRecurrenceRuleWeekday2[GuildScheduledEventRecurrenceRuleWeekday2["Friday"] = 4] = "Friday";
      GuildScheduledEventRecurrenceRuleWeekday2[GuildScheduledEventRecurrenceRuleWeekday2["Saturday"] = 5] = "Saturday";
      GuildScheduledEventRecurrenceRuleWeekday2[GuildScheduledEventRecurrenceRuleWeekday2["Sunday"] = 6] = "Sunday";
    })(GuildScheduledEventRecurrenceRuleWeekday || (exports.GuildScheduledEventRecurrenceRuleWeekday = GuildScheduledEventRecurrenceRuleWeekday = {}));
    var GuildScheduledEventRecurrenceRuleMonth;
    (function(GuildScheduledEventRecurrenceRuleMonth2) {
      GuildScheduledEventRecurrenceRuleMonth2[GuildScheduledEventRecurrenceRuleMonth2["January"] = 1] = "January";
      GuildScheduledEventRecurrenceRuleMonth2[GuildScheduledEventRecurrenceRuleMonth2["February"] = 2] = "February";
      GuildScheduledEventRecurrenceRuleMonth2[GuildScheduledEventRecurrenceRuleMonth2["March"] = 3] = "March";
      GuildScheduledEventRecurrenceRuleMonth2[GuildScheduledEventRecurrenceRuleMonth2["April"] = 4] = "April";
      GuildScheduledEventRecurrenceRuleMonth2[GuildScheduledEventRecurrenceRuleMonth2["May"] = 5] = "May";
      GuildScheduledEventRecurrenceRuleMonth2[GuildScheduledEventRecurrenceRuleMonth2["June"] = 6] = "June";
      GuildScheduledEventRecurrenceRuleMonth2[GuildScheduledEventRecurrenceRuleMonth2["July"] = 7] = "July";
      GuildScheduledEventRecurrenceRuleMonth2[GuildScheduledEventRecurrenceRuleMonth2["August"] = 8] = "August";
      GuildScheduledEventRecurrenceRuleMonth2[GuildScheduledEventRecurrenceRuleMonth2["September"] = 9] = "September";
      GuildScheduledEventRecurrenceRuleMonth2[GuildScheduledEventRecurrenceRuleMonth2["October"] = 10] = "October";
      GuildScheduledEventRecurrenceRuleMonth2[GuildScheduledEventRecurrenceRuleMonth2["November"] = 11] = "November";
      GuildScheduledEventRecurrenceRuleMonth2[GuildScheduledEventRecurrenceRuleMonth2["December"] = 12] = "December";
    })(GuildScheduledEventRecurrenceRuleMonth || (exports.GuildScheduledEventRecurrenceRuleMonth = GuildScheduledEventRecurrenceRuleMonth = {}));
    var GuildScheduledEventEntityType;
    (function(GuildScheduledEventEntityType2) {
      GuildScheduledEventEntityType2[GuildScheduledEventEntityType2["StageInstance"] = 1] = "StageInstance";
      GuildScheduledEventEntityType2[GuildScheduledEventEntityType2["Voice"] = 2] = "Voice";
      GuildScheduledEventEntityType2[GuildScheduledEventEntityType2["External"] = 3] = "External";
    })(GuildScheduledEventEntityType || (exports.GuildScheduledEventEntityType = GuildScheduledEventEntityType = {}));
    var GuildScheduledEventStatus;
    (function(GuildScheduledEventStatus2) {
      GuildScheduledEventStatus2[GuildScheduledEventStatus2["Scheduled"] = 1] = "Scheduled";
      GuildScheduledEventStatus2[GuildScheduledEventStatus2["Active"] = 2] = "Active";
      GuildScheduledEventStatus2[GuildScheduledEventStatus2["Completed"] = 3] = "Completed";
      GuildScheduledEventStatus2[GuildScheduledEventStatus2["Canceled"] = 4] = "Canceled";
    })(GuildScheduledEventStatus || (exports.GuildScheduledEventStatus = GuildScheduledEventStatus = {}));
    var GuildScheduledEventPrivacyLevel;
    (function(GuildScheduledEventPrivacyLevel2) {
      GuildScheduledEventPrivacyLevel2[GuildScheduledEventPrivacyLevel2["GuildOnly"] = 2] = "GuildOnly";
    })(GuildScheduledEventPrivacyLevel || (exports.GuildScheduledEventPrivacyLevel = GuildScheduledEventPrivacyLevel = {}));
  }
});

// node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/_chatInput/attachment.js
var require_attachment = __commonJS({
  "node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/_chatInput/attachment.js"(exports) {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/_chatInput/base.js
var require_base = __commonJS({
  "node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/_chatInput/base.js"(exports) {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/_chatInput/boolean.js
var require_boolean = __commonJS({
  "node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/_chatInput/boolean.js"(exports) {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/_chatInput/channel.js
var require_channel2 = __commonJS({
  "node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/_chatInput/channel.js"(exports) {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/_chatInput/integer.js
var require_integer = __commonJS({
  "node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/_chatInput/integer.js"(exports) {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/_chatInput/mentionable.js
var require_mentionable = __commonJS({
  "node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/_chatInput/mentionable.js"(exports) {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/_chatInput/number.js
var require_number = __commonJS({
  "node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/_chatInput/number.js"(exports) {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/_chatInput/role.js
var require_role = __commonJS({
  "node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/_chatInput/role.js"(exports) {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/_chatInput/shared.js
var require_shared = __commonJS({
  "node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/_chatInput/shared.js"(exports) {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ApplicationCommandOptionType = void 0;
    var ApplicationCommandOptionType;
    (function(ApplicationCommandOptionType2) {
      ApplicationCommandOptionType2[ApplicationCommandOptionType2["Subcommand"] = 1] = "Subcommand";
      ApplicationCommandOptionType2[ApplicationCommandOptionType2["SubcommandGroup"] = 2] = "SubcommandGroup";
      ApplicationCommandOptionType2[ApplicationCommandOptionType2["String"] = 3] = "String";
      ApplicationCommandOptionType2[ApplicationCommandOptionType2["Integer"] = 4] = "Integer";
      ApplicationCommandOptionType2[ApplicationCommandOptionType2["Boolean"] = 5] = "Boolean";
      ApplicationCommandOptionType2[ApplicationCommandOptionType2["User"] = 6] = "User";
      ApplicationCommandOptionType2[ApplicationCommandOptionType2["Channel"] = 7] = "Channel";
      ApplicationCommandOptionType2[ApplicationCommandOptionType2["Role"] = 8] = "Role";
      ApplicationCommandOptionType2[ApplicationCommandOptionType2["Mentionable"] = 9] = "Mentionable";
      ApplicationCommandOptionType2[ApplicationCommandOptionType2["Number"] = 10] = "Number";
      ApplicationCommandOptionType2[ApplicationCommandOptionType2["Attachment"] = 11] = "Attachment";
    })(ApplicationCommandOptionType || (exports.ApplicationCommandOptionType = ApplicationCommandOptionType = {}));
  }
});

// node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/_chatInput/string.js
var require_string = __commonJS({
  "node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/_chatInput/string.js"(exports) {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/_chatInput/subcommand.js
var require_subcommand = __commonJS({
  "node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/_chatInput/subcommand.js"(exports) {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/_chatInput/subcommandGroup.js
var require_subcommandGroup = __commonJS({
  "node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/_chatInput/subcommandGroup.js"(exports) {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/_chatInput/user.js
var require_user = __commonJS({
  "node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/_chatInput/user.js"(exports) {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/chatInput.js
var require_chatInput = __commonJS({
  "node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/chatInput.js"(exports) {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o2, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o2, k2, desc);
    } : function(o2, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o2[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p2 in m)
        if (p2 !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p2))
          __createBinding(exports2, m, p2);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_attachment(), exports);
    __exportStar(require_base(), exports);
    __exportStar(require_boolean(), exports);
    __exportStar(require_channel2(), exports);
    __exportStar(require_integer(), exports);
    __exportStar(require_mentionable(), exports);
    __exportStar(require_number(), exports);
    __exportStar(require_role(), exports);
    __exportStar(require_shared(), exports);
    __exportStar(require_string(), exports);
    __exportStar(require_subcommand(), exports);
    __exportStar(require_subcommandGroup(), exports);
    __exportStar(require_user(), exports);
  }
});

// node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/contextMenu.js
var require_contextMenu = __commonJS({
  "node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/contextMenu.js"(exports) {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/permissions.js
var require_permissions = __commonJS({
  "node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/permissions.js"(exports) {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.APIApplicationCommandPermissionsConstant = exports.ApplicationCommandPermissionType = void 0;
    var ApplicationCommandPermissionType;
    (function(ApplicationCommandPermissionType2) {
      ApplicationCommandPermissionType2[ApplicationCommandPermissionType2["Role"] = 1] = "Role";
      ApplicationCommandPermissionType2[ApplicationCommandPermissionType2["User"] = 2] = "User";
      ApplicationCommandPermissionType2[ApplicationCommandPermissionType2["Channel"] = 3] = "Channel";
    })(ApplicationCommandPermissionType || (exports.ApplicationCommandPermissionType = ApplicationCommandPermissionType = {}));
    exports.APIApplicationCommandPermissionsConstant = {
      // eslint-disable-next-line unicorn/prefer-native-coercion-functions
      Everyone: (guildId) => String(guildId),
      AllChannels: (guildId) => String(BigInt(guildId) - 1n)
    };
  }
});

// node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/entryPoint.js
var require_entryPoint = __commonJS({
  "node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/entryPoint.js"(exports) {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/discord-api-types/payloads/v10/_interactions/applicationCommands.js
var require_applicationCommands = __commonJS({
  "node_modules/discord-api-types/payloads/v10/_interactions/applicationCommands.js"(exports) {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o2, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o2, k2, desc);
    } : function(o2, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o2[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p2 in m)
        if (p2 !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p2))
          __createBinding(exports2, m, p2);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.EntryPointCommandHandlerType = exports.InteractionContextType = exports.ApplicationIntegrationType = exports.ApplicationCommandType = void 0;
    __exportStar(require_chatInput(), exports);
    __exportStar(require_contextMenu(), exports);
    __exportStar(require_permissions(), exports);
    __exportStar(require_entryPoint(), exports);
    var ApplicationCommandType;
    (function(ApplicationCommandType2) {
      ApplicationCommandType2[ApplicationCommandType2["ChatInput"] = 1] = "ChatInput";
      ApplicationCommandType2[ApplicationCommandType2["User"] = 2] = "User";
      ApplicationCommandType2[ApplicationCommandType2["Message"] = 3] = "Message";
      ApplicationCommandType2[ApplicationCommandType2["PrimaryEntryPoint"] = 4] = "PrimaryEntryPoint";
    })(ApplicationCommandType || (exports.ApplicationCommandType = ApplicationCommandType = {}));
    var ApplicationIntegrationType;
    (function(ApplicationIntegrationType2) {
      ApplicationIntegrationType2[ApplicationIntegrationType2["GuildInstall"] = 0] = "GuildInstall";
      ApplicationIntegrationType2[ApplicationIntegrationType2["UserInstall"] = 1] = "UserInstall";
    })(ApplicationIntegrationType || (exports.ApplicationIntegrationType = ApplicationIntegrationType = {}));
    var InteractionContextType;
    (function(InteractionContextType2) {
      InteractionContextType2[InteractionContextType2["Guild"] = 0] = "Guild";
      InteractionContextType2[InteractionContextType2["BotDM"] = 1] = "BotDM";
      InteractionContextType2[InteractionContextType2["PrivateChannel"] = 2] = "PrivateChannel";
    })(InteractionContextType || (exports.InteractionContextType = InteractionContextType = {}));
    var EntryPointCommandHandlerType;
    (function(EntryPointCommandHandlerType2) {
      EntryPointCommandHandlerType2[EntryPointCommandHandlerType2["AppHandler"] = 1] = "AppHandler";
      EntryPointCommandHandlerType2[EntryPointCommandHandlerType2["DiscordLaunchActivity"] = 2] = "DiscordLaunchActivity";
    })(EntryPointCommandHandlerType || (exports.EntryPointCommandHandlerType = EntryPointCommandHandlerType = {}));
  }
});

// node_modules/discord-api-types/payloads/v10/_interactions/autocomplete.js
var require_autocomplete = __commonJS({
  "node_modules/discord-api-types/payloads/v10/_interactions/autocomplete.js"(exports) {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/discord-api-types/payloads/v10/_interactions/base.js
var require_base2 = __commonJS({
  "node_modules/discord-api-types/payloads/v10/_interactions/base.js"(exports) {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/discord-api-types/payloads/v10/_interactions/messageComponents.js
var require_messageComponents = __commonJS({
  "node_modules/discord-api-types/payloads/v10/_interactions/messageComponents.js"(exports) {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/discord-api-types/payloads/v10/_interactions/modalSubmit.js
var require_modalSubmit = __commonJS({
  "node_modules/discord-api-types/payloads/v10/_interactions/modalSubmit.js"(exports) {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/discord-api-types/payloads/v10/_interactions/ping.js
var require_ping = __commonJS({
  "node_modules/discord-api-types/payloads/v10/_interactions/ping.js"(exports) {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/discord-api-types/payloads/v10/_interactions/responses.js
var require_responses = __commonJS({
  "node_modules/discord-api-types/payloads/v10/_interactions/responses.js"(exports) {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.InteractionResponseType = exports.InteractionType = void 0;
    var InteractionType2;
    (function(InteractionType3) {
      InteractionType3[InteractionType3["Ping"] = 1] = "Ping";
      InteractionType3[InteractionType3["ApplicationCommand"] = 2] = "ApplicationCommand";
      InteractionType3[InteractionType3["MessageComponent"] = 3] = "MessageComponent";
      InteractionType3[InteractionType3["ApplicationCommandAutocomplete"] = 4] = "ApplicationCommandAutocomplete";
      InteractionType3[InteractionType3["ModalSubmit"] = 5] = "ModalSubmit";
    })(InteractionType2 || (exports.InteractionType = InteractionType2 = {}));
    var InteractionResponseType2;
    (function(InteractionResponseType3) {
      InteractionResponseType3[InteractionResponseType3["Pong"] = 1] = "Pong";
      InteractionResponseType3[InteractionResponseType3["ChannelMessageWithSource"] = 4] = "ChannelMessageWithSource";
      InteractionResponseType3[InteractionResponseType3["DeferredChannelMessageWithSource"] = 5] = "DeferredChannelMessageWithSource";
      InteractionResponseType3[InteractionResponseType3["DeferredMessageUpdate"] = 6] = "DeferredMessageUpdate";
      InteractionResponseType3[InteractionResponseType3["UpdateMessage"] = 7] = "UpdateMessage";
      InteractionResponseType3[InteractionResponseType3["ApplicationCommandAutocompleteResult"] = 8] = "ApplicationCommandAutocompleteResult";
      InteractionResponseType3[InteractionResponseType3["Modal"] = 9] = "Modal";
      InteractionResponseType3[InteractionResponseType3["PremiumRequired"] = 10] = "PremiumRequired";
      InteractionResponseType3[InteractionResponseType3["LaunchActivity"] = 12] = "LaunchActivity";
    })(InteractionResponseType2 || (exports.InteractionResponseType = InteractionResponseType2 = {}));
  }
});

// node_modules/discord-api-types/payloads/v10/interactions.js
var require_interactions = __commonJS({
  "node_modules/discord-api-types/payloads/v10/interactions.js"(exports) {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o2, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o2, k2, desc);
    } : function(o2, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o2[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p2 in m)
        if (p2 !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p2))
          __createBinding(exports2, m, p2);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_applicationCommands(), exports);
    __exportStar(require_autocomplete(), exports);
    __exportStar(require_base2(), exports);
    __exportStar(require_messageComponents(), exports);
    __exportStar(require_modalSubmit(), exports);
    __exportStar(require_ping(), exports);
    __exportStar(require_responses(), exports);
  }
});

// node_modules/discord-api-types/payloads/v10/invite.js
var require_invite = __commonJS({
  "node_modules/discord-api-types/payloads/v10/invite.js"(exports) {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.InviteTargetType = exports.InviteType = void 0;
    var InviteType;
    (function(InviteType2) {
      InviteType2[InviteType2["Guild"] = 0] = "Guild";
      InviteType2[InviteType2["GroupDM"] = 1] = "GroupDM";
      InviteType2[InviteType2["Friend"] = 2] = "Friend";
    })(InviteType || (exports.InviteType = InviteType = {}));
    var InviteTargetType;
    (function(InviteTargetType2) {
      InviteTargetType2[InviteTargetType2["Stream"] = 1] = "Stream";
      InviteTargetType2[InviteTargetType2["EmbeddedApplication"] = 2] = "EmbeddedApplication";
    })(InviteTargetType || (exports.InviteTargetType = InviteTargetType = {}));
  }
});

// node_modules/discord-api-types/payloads/v10/monetization.js
var require_monetization = __commonJS({
  "node_modules/discord-api-types/payloads/v10/monetization.js"(exports) {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SubscriptionStatus = exports.SKUType = exports.SKUFlags = exports.EntitlementType = void 0;
    var EntitlementType;
    (function(EntitlementType2) {
      EntitlementType2[EntitlementType2["Purchase"] = 1] = "Purchase";
      EntitlementType2[EntitlementType2["PremiumSubscription"] = 2] = "PremiumSubscription";
      EntitlementType2[EntitlementType2["DeveloperGift"] = 3] = "DeveloperGift";
      EntitlementType2[EntitlementType2["TestModePurchase"] = 4] = "TestModePurchase";
      EntitlementType2[EntitlementType2["FreePurchase"] = 5] = "FreePurchase";
      EntitlementType2[EntitlementType2["UserGift"] = 6] = "UserGift";
      EntitlementType2[EntitlementType2["PremiumPurchase"] = 7] = "PremiumPurchase";
      EntitlementType2[EntitlementType2["ApplicationSubscription"] = 8] = "ApplicationSubscription";
    })(EntitlementType || (exports.EntitlementType = EntitlementType = {}));
    var SKUFlags;
    (function(SKUFlags2) {
      SKUFlags2[SKUFlags2["Available"] = 4] = "Available";
      SKUFlags2[SKUFlags2["GuildSubscription"] = 128] = "GuildSubscription";
      SKUFlags2[SKUFlags2["UserSubscription"] = 256] = "UserSubscription";
    })(SKUFlags || (exports.SKUFlags = SKUFlags = {}));
    var SKUType;
    (function(SKUType2) {
      SKUType2[SKUType2["Durable"] = 2] = "Durable";
      SKUType2[SKUType2["Consumable"] = 3] = "Consumable";
      SKUType2[SKUType2["Subscription"] = 5] = "Subscription";
      SKUType2[SKUType2["SubscriptionGroup"] = 6] = "SubscriptionGroup";
    })(SKUType || (exports.SKUType = SKUType = {}));
    var SubscriptionStatus;
    (function(SubscriptionStatus2) {
      SubscriptionStatus2[SubscriptionStatus2["Active"] = 0] = "Active";
      SubscriptionStatus2[SubscriptionStatus2["Ending"] = 1] = "Ending";
      SubscriptionStatus2[SubscriptionStatus2["Inactive"] = 2] = "Inactive";
    })(SubscriptionStatus || (exports.SubscriptionStatus = SubscriptionStatus = {}));
  }
});

// node_modules/discord-api-types/payloads/v10/oauth2.js
var require_oauth2 = __commonJS({
  "node_modules/discord-api-types/payloads/v10/oauth2.js"(exports) {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.OAuth2Scopes = void 0;
    var OAuth2Scopes;
    (function(OAuth2Scopes2) {
      OAuth2Scopes2["Bot"] = "bot";
      OAuth2Scopes2["Connections"] = "connections";
      OAuth2Scopes2["DMChannelsRead"] = "dm_channels.read";
      OAuth2Scopes2["Email"] = "email";
      OAuth2Scopes2["Identify"] = "identify";
      OAuth2Scopes2["Guilds"] = "guilds";
      OAuth2Scopes2["GuildsJoin"] = "guilds.join";
      OAuth2Scopes2["GuildsMembersRead"] = "guilds.members.read";
      OAuth2Scopes2["GroupDMJoins"] = "gdm.join";
      OAuth2Scopes2["MessagesRead"] = "messages.read";
      OAuth2Scopes2["RoleConnectionsWrite"] = "role_connections.write";
      OAuth2Scopes2["RPC"] = "rpc";
      OAuth2Scopes2["RPCNotificationsRead"] = "rpc.notifications.read";
      OAuth2Scopes2["WebhookIncoming"] = "webhook.incoming";
      OAuth2Scopes2["Voice"] = "voice";
      OAuth2Scopes2["ApplicationsBuildsUpload"] = "applications.builds.upload";
      OAuth2Scopes2["ApplicationsBuildsRead"] = "applications.builds.read";
      OAuth2Scopes2["ApplicationsStoreUpdate"] = "applications.store.update";
      OAuth2Scopes2["ApplicationsEntitlements"] = "applications.entitlements";
      OAuth2Scopes2["RelationshipsRead"] = "relationships.read";
      OAuth2Scopes2["ActivitiesRead"] = "activities.read";
      OAuth2Scopes2["ActivitiesWrite"] = "activities.write";
      OAuth2Scopes2["ApplicationsCommands"] = "applications.commands";
      OAuth2Scopes2["ApplicationsCommandsUpdate"] = "applications.commands.update";
      OAuth2Scopes2["ApplicationCommandsPermissionsUpdate"] = "applications.commands.permissions.update";
    })(OAuth2Scopes || (exports.OAuth2Scopes = OAuth2Scopes = {}));
  }
});

// node_modules/discord-api-types/payloads/v10/permissions.js
var require_permissions2 = __commonJS({
  "node_modules/discord-api-types/payloads/v10/permissions.js"(exports) {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.RoleFlags = void 0;
    var RoleFlags;
    (function(RoleFlags2) {
      RoleFlags2[RoleFlags2["InPrompt"] = 1] = "InPrompt";
    })(RoleFlags || (exports.RoleFlags = RoleFlags = {}));
  }
});

// node_modules/discord-api-types/payloads/v10/poll.js
var require_poll = __commonJS({
  "node_modules/discord-api-types/payloads/v10/poll.js"(exports) {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.PollLayoutType = void 0;
    var PollLayoutType;
    (function(PollLayoutType2) {
      PollLayoutType2[PollLayoutType2["Default"] = 1] = "Default";
    })(PollLayoutType || (exports.PollLayoutType = PollLayoutType = {}));
  }
});

// node_modules/discord-api-types/payloads/v10/soundboard.js
var require_soundboard = __commonJS({
  "node_modules/discord-api-types/payloads/v10/soundboard.js"(exports) {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/discord-api-types/payloads/v10/stageInstance.js
var require_stageInstance = __commonJS({
  "node_modules/discord-api-types/payloads/v10/stageInstance.js"(exports) {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.StageInstancePrivacyLevel = void 0;
    var StageInstancePrivacyLevel;
    (function(StageInstancePrivacyLevel2) {
      StageInstancePrivacyLevel2[StageInstancePrivacyLevel2["Public"] = 1] = "Public";
      StageInstancePrivacyLevel2[StageInstancePrivacyLevel2["GuildOnly"] = 2] = "GuildOnly";
    })(StageInstancePrivacyLevel || (exports.StageInstancePrivacyLevel = StageInstancePrivacyLevel = {}));
  }
});

// node_modules/discord-api-types/payloads/v10/sticker.js
var require_sticker = __commonJS({
  "node_modules/discord-api-types/payloads/v10/sticker.js"(exports) {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.StickerFormatType = exports.StickerType = void 0;
    var StickerType;
    (function(StickerType2) {
      StickerType2[StickerType2["Standard"] = 1] = "Standard";
      StickerType2[StickerType2["Guild"] = 2] = "Guild";
    })(StickerType || (exports.StickerType = StickerType = {}));
    var StickerFormatType;
    (function(StickerFormatType2) {
      StickerFormatType2[StickerFormatType2["PNG"] = 1] = "PNG";
      StickerFormatType2[StickerFormatType2["APNG"] = 2] = "APNG";
      StickerFormatType2[StickerFormatType2["Lottie"] = 3] = "Lottie";
      StickerFormatType2[StickerFormatType2["GIF"] = 4] = "GIF";
    })(StickerFormatType || (exports.StickerFormatType = StickerFormatType = {}));
  }
});

// node_modules/discord-api-types/payloads/v10/teams.js
var require_teams = __commonJS({
  "node_modules/discord-api-types/payloads/v10/teams.js"(exports) {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TeamMemberRole = exports.TeamMemberMembershipState = void 0;
    var TeamMemberMembershipState;
    (function(TeamMemberMembershipState2) {
      TeamMemberMembershipState2[TeamMemberMembershipState2["Invited"] = 1] = "Invited";
      TeamMemberMembershipState2[TeamMemberMembershipState2["Accepted"] = 2] = "Accepted";
    })(TeamMemberMembershipState || (exports.TeamMemberMembershipState = TeamMemberMembershipState = {}));
    var TeamMemberRole;
    (function(TeamMemberRole2) {
      TeamMemberRole2["Admin"] = "admin";
      TeamMemberRole2["Developer"] = "developer";
      TeamMemberRole2["ReadOnly"] = "read_only";
    })(TeamMemberRole || (exports.TeamMemberRole = TeamMemberRole = {}));
  }
});

// node_modules/discord-api-types/payloads/v10/template.js
var require_template = __commonJS({
  "node_modules/discord-api-types/payloads/v10/template.js"(exports) {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/discord-api-types/payloads/v10/user.js
var require_user2 = __commonJS({
  "node_modules/discord-api-types/payloads/v10/user.js"(exports) {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ConnectionVisibility = exports.ConnectionService = exports.UserPremiumType = exports.UserFlags = void 0;
    var UserFlags;
    (function(UserFlags2) {
      UserFlags2[UserFlags2["Staff"] = 1] = "Staff";
      UserFlags2[UserFlags2["Partner"] = 2] = "Partner";
      UserFlags2[UserFlags2["Hypesquad"] = 4] = "Hypesquad";
      UserFlags2[UserFlags2["BugHunterLevel1"] = 8] = "BugHunterLevel1";
      UserFlags2[UserFlags2["MFASMS"] = 16] = "MFASMS";
      UserFlags2[UserFlags2["PremiumPromoDismissed"] = 32] = "PremiumPromoDismissed";
      UserFlags2[UserFlags2["HypeSquadOnlineHouse1"] = 64] = "HypeSquadOnlineHouse1";
      UserFlags2[UserFlags2["HypeSquadOnlineHouse2"] = 128] = "HypeSquadOnlineHouse2";
      UserFlags2[UserFlags2["HypeSquadOnlineHouse3"] = 256] = "HypeSquadOnlineHouse3";
      UserFlags2[UserFlags2["PremiumEarlySupporter"] = 512] = "PremiumEarlySupporter";
      UserFlags2[UserFlags2["TeamPseudoUser"] = 1024] = "TeamPseudoUser";
      UserFlags2[UserFlags2["HasUnreadUrgentMessages"] = 8192] = "HasUnreadUrgentMessages";
      UserFlags2[UserFlags2["BugHunterLevel2"] = 16384] = "BugHunterLevel2";
      UserFlags2[UserFlags2["VerifiedBot"] = 65536] = "VerifiedBot";
      UserFlags2[UserFlags2["VerifiedDeveloper"] = 131072] = "VerifiedDeveloper";
      UserFlags2[UserFlags2["CertifiedModerator"] = 262144] = "CertifiedModerator";
      UserFlags2[UserFlags2["BotHTTPInteractions"] = 524288] = "BotHTTPInteractions";
      UserFlags2[UserFlags2["Spammer"] = 1048576] = "Spammer";
      UserFlags2[UserFlags2["DisablePremium"] = 2097152] = "DisablePremium";
      UserFlags2[UserFlags2["ActiveDeveloper"] = 4194304] = "ActiveDeveloper";
      UserFlags2[UserFlags2["Quarantined"] = 17592186044416] = "Quarantined";
      UserFlags2[UserFlags2["Collaborator"] = 1125899906842624] = "Collaborator";
      UserFlags2[UserFlags2["RestrictedCollaborator"] = 2251799813685248] = "RestrictedCollaborator";
    })(UserFlags || (exports.UserFlags = UserFlags = {}));
    var UserPremiumType;
    (function(UserPremiumType2) {
      UserPremiumType2[UserPremiumType2["None"] = 0] = "None";
      UserPremiumType2[UserPremiumType2["NitroClassic"] = 1] = "NitroClassic";
      UserPremiumType2[UserPremiumType2["Nitro"] = 2] = "Nitro";
      UserPremiumType2[UserPremiumType2["NitroBasic"] = 3] = "NitroBasic";
    })(UserPremiumType || (exports.UserPremiumType = UserPremiumType = {}));
    var ConnectionService;
    (function(ConnectionService2) {
      ConnectionService2["AmazonMusic"] = "amazon-music";
      ConnectionService2["BattleNet"] = "battlenet";
      ConnectionService2["Bluesky"] = "bluesky";
      ConnectionService2["BungieNet"] = "bungie";
      ConnectionService2["Crunchyroll"] = "crunchyroll";
      ConnectionService2["Domain"] = "domain";
      ConnectionService2["eBay"] = "ebay";
      ConnectionService2["EpicGames"] = "epicgames";
      ConnectionService2["Facebook"] = "facebook";
      ConnectionService2["GitHub"] = "github";
      ConnectionService2["Instagram"] = "instagram";
      ConnectionService2["LeagueOfLegends"] = "leagueoflegends";
      ConnectionService2["Mastodon"] = "mastodon";
      ConnectionService2["PayPal"] = "paypal";
      ConnectionService2["PlayStationNetwork"] = "playstation";
      ConnectionService2["Reddit"] = "reddit";
      ConnectionService2["RiotGames"] = "riotgames";
      ConnectionService2["Roblox"] = "roblox";
      ConnectionService2["Spotify"] = "spotify";
      ConnectionService2["Skype"] = "skype";
      ConnectionService2["Steam"] = "steam";
      ConnectionService2["TikTok"] = "tiktok";
      ConnectionService2["Twitch"] = "twitch";
      ConnectionService2["X"] = "twitter";
      ConnectionService2["Twitter"] = "twitter";
      ConnectionService2["Xbox"] = "xbox";
      ConnectionService2["YouTube"] = "youtube";
    })(ConnectionService || (exports.ConnectionService = ConnectionService = {}));
    var ConnectionVisibility;
    (function(ConnectionVisibility2) {
      ConnectionVisibility2[ConnectionVisibility2["None"] = 0] = "None";
      ConnectionVisibility2[ConnectionVisibility2["Everyone"] = 1] = "Everyone";
    })(ConnectionVisibility || (exports.ConnectionVisibility = ConnectionVisibility = {}));
  }
});

// node_modules/discord-api-types/payloads/v10/voice.js
var require_voice = __commonJS({
  "node_modules/discord-api-types/payloads/v10/voice.js"(exports) {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/discord-api-types/payloads/v10/webhook.js
var require_webhook = __commonJS({
  "node_modules/discord-api-types/payloads/v10/webhook.js"(exports) {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.WebhookType = exports.ApplicationWebhookEventType = exports.ApplicationWebhookType = void 0;
    var ApplicationWebhookType;
    (function(ApplicationWebhookType2) {
      ApplicationWebhookType2[ApplicationWebhookType2["Ping"] = 0] = "Ping";
      ApplicationWebhookType2[ApplicationWebhookType2["Event"] = 1] = "Event";
    })(ApplicationWebhookType || (exports.ApplicationWebhookType = ApplicationWebhookType = {}));
    var ApplicationWebhookEventType;
    (function(ApplicationWebhookEventType2) {
      ApplicationWebhookEventType2["ApplicationAuthorized"] = "APPLICATION_AUTHORIZED";
      ApplicationWebhookEventType2["EntitlementCreate"] = "ENTITLEMENT_CREATE";
      ApplicationWebhookEventType2["QuestUserEnrollment"] = "QUEST_USER_ENROLLMENT";
    })(ApplicationWebhookEventType || (exports.ApplicationWebhookEventType = ApplicationWebhookEventType = {}));
    var WebhookType;
    (function(WebhookType2) {
      WebhookType2[WebhookType2["Incoming"] = 1] = "Incoming";
      WebhookType2[WebhookType2["ChannelFollower"] = 2] = "ChannelFollower";
      WebhookType2[WebhookType2["Application"] = 3] = "Application";
    })(WebhookType || (exports.WebhookType = WebhookType = {}));
  }
});

// node_modules/discord-api-types/payloads/v10/index.js
var require_v102 = __commonJS({
  "node_modules/discord-api-types/payloads/v10/index.js"(exports) {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o2, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o2, k2, desc);
    } : function(o2, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o2[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p2 in m)
        if (p2 !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p2))
          __createBinding(exports2, m, p2);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_common2(), exports);
    __exportStar(require_application(), exports);
    __exportStar(require_auditLog(), exports);
    __exportStar(require_autoModeration(), exports);
    __exportStar(require_channel(), exports);
    __exportStar(require_emoji(), exports);
    __exportStar(require_gateway(), exports);
    __exportStar(require_guild(), exports);
    __exportStar(require_guildScheduledEvent(), exports);
    __exportStar(require_interactions(), exports);
    __exportStar(require_invite(), exports);
    __exportStar(require_monetization(), exports);
    __exportStar(require_oauth2(), exports);
    __exportStar(require_permissions2(), exports);
    __exportStar(require_poll(), exports);
    __exportStar(require_soundboard(), exports);
    __exportStar(require_stageInstance(), exports);
    __exportStar(require_sticker(), exports);
    __exportStar(require_teams(), exports);
    __exportStar(require_template(), exports);
    __exportStar(require_user2(), exports);
    __exportStar(require_voice(), exports);
    __exportStar(require_webhook(), exports);
  }
});

// node_modules/discord-api-types/utils/internals.js
var require_internals = __commonJS({
  "node_modules/discord-api-types/utils/internals.js"(exports) {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.urlSafeCharacters = void 0;
    var pattern = /^[\d%A-Za-z-_]+$/g;
    exports.urlSafeCharacters = {
      test(input) {
        const result = pattern.test(input);
        pattern.lastIndex = 0;
        return result;
      }
    };
  }
});

// node_modules/discord-api-types/rest/common.js
var require_common3 = __commonJS({
  "node_modules/discord-api-types/rest/common.js"(exports) {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Locale = exports.RESTJSONErrorCodes = void 0;
    var RESTJSONErrorCodes;
    (function(RESTJSONErrorCodes2) {
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["GeneralError"] = 0] = "GeneralError";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["UnknownAccount"] = 10001] = "UnknownAccount";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["UnknownApplication"] = 10002] = "UnknownApplication";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["UnknownChannel"] = 10003] = "UnknownChannel";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["UnknownGuild"] = 10004] = "UnknownGuild";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["UnknownIntegration"] = 10005] = "UnknownIntegration";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["UnknownInvite"] = 10006] = "UnknownInvite";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["UnknownMember"] = 10007] = "UnknownMember";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["UnknownMessage"] = 10008] = "UnknownMessage";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["UnknownPermissionOverwrite"] = 10009] = "UnknownPermissionOverwrite";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["UnknownProvider"] = 10010] = "UnknownProvider";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["UnknownRole"] = 10011] = "UnknownRole";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["UnknownToken"] = 10012] = "UnknownToken";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["UnknownUser"] = 10013] = "UnknownUser";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["UnknownEmoji"] = 10014] = "UnknownEmoji";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["UnknownWebhook"] = 10015] = "UnknownWebhook";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["UnknownWebhookService"] = 10016] = "UnknownWebhookService";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["UnknownSession"] = 10020] = "UnknownSession";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["UnknownAsset"] = 10021] = "UnknownAsset";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["UnknownBan"] = 10026] = "UnknownBan";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["UnknownSKU"] = 10027] = "UnknownSKU";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["UnknownStoreListing"] = 10028] = "UnknownStoreListing";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["UnknownEntitlement"] = 10029] = "UnknownEntitlement";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["UnknownBuild"] = 10030] = "UnknownBuild";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["UnknownLobby"] = 10031] = "UnknownLobby";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["UnknownBranch"] = 10032] = "UnknownBranch";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["UnknownStoreDirectoryLayout"] = 10033] = "UnknownStoreDirectoryLayout";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["UnknownRedistributable"] = 10036] = "UnknownRedistributable";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["UnknownGiftCode"] = 10038] = "UnknownGiftCode";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["UnknownStream"] = 10049] = "UnknownStream";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["UnknownPremiumServerSubscribeCooldown"] = 10050] = "UnknownPremiumServerSubscribeCooldown";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["UnknownGuildTemplate"] = 10057] = "UnknownGuildTemplate";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["UnknownDiscoverableServerCategory"] = 10059] = "UnknownDiscoverableServerCategory";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["UnknownSticker"] = 10060] = "UnknownSticker";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["UnknownStickerPack"] = 10061] = "UnknownStickerPack";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["UnknownInteraction"] = 10062] = "UnknownInteraction";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["UnknownApplicationCommand"] = 10063] = "UnknownApplicationCommand";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["UnknownVoiceState"] = 10065] = "UnknownVoiceState";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["UnknownApplicationCommandPermissions"] = 10066] = "UnknownApplicationCommandPermissions";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["UnknownStageInstance"] = 10067] = "UnknownStageInstance";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["UnknownGuildMemberVerificationForm"] = 10068] = "UnknownGuildMemberVerificationForm";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["UnknownGuildWelcomeScreen"] = 10069] = "UnknownGuildWelcomeScreen";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["UnknownGuildScheduledEvent"] = 10070] = "UnknownGuildScheduledEvent";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["UnknownGuildScheduledEventUser"] = 10071] = "UnknownGuildScheduledEventUser";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["UnknownTag"] = 10087] = "UnknownTag";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["UnknownSound"] = 10097] = "UnknownSound";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["BotsCannotUseThisEndpoint"] = 20001] = "BotsCannotUseThisEndpoint";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["OnlyBotsCanUseThisEndpoint"] = 20002] = "OnlyBotsCanUseThisEndpoint";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["ExplicitContentCannotBeSentToTheDesiredRecipient"] = 20009] = "ExplicitContentCannotBeSentToTheDesiredRecipient";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["NotAuthorizedToPerformThisActionOnThisApplication"] = 20012] = "NotAuthorizedToPerformThisActionOnThisApplication";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["ActionCannotBePerformedDueToSlowmodeRateLimit"] = 20016] = "ActionCannotBePerformedDueToSlowmodeRateLimit";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["TheMazeIsntMeantForYou"] = 20017] = "TheMazeIsntMeantForYou";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["OnlyTheOwnerOfThisAccountCanPerformThisAction"] = 20018] = "OnlyTheOwnerOfThisAccountCanPerformThisAction";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["AnnouncementEditLimitExceeded"] = 20022] = "AnnouncementEditLimitExceeded";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["UnderMinimumAge"] = 20024] = "UnderMinimumAge";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["ChannelSendRateLimit"] = 20028] = "ChannelSendRateLimit";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["ServerSendRateLimit"] = 20029] = "ServerSendRateLimit";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["StageTopicServerNameServerDescriptionOrChannelNamesContainDisallowedWords"] = 20031] = "StageTopicServerNameServerDescriptionOrChannelNamesContainDisallowedWords";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["GuildPremiumSubscriptionLevelTooLow"] = 20035] = "GuildPremiumSubscriptionLevelTooLow";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["MaximumNumberOfGuildsReached"] = 30001] = "MaximumNumberOfGuildsReached";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["MaximumNumberOfFriendsReached"] = 30002] = "MaximumNumberOfFriendsReached";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["MaximumNumberOfPinsReachedForTheChannel"] = 30003] = "MaximumNumberOfPinsReachedForTheChannel";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["MaximumNumberOfRecipientsReached"] = 30004] = "MaximumNumberOfRecipientsReached";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["MaximumNumberOfGuildRolesReached"] = 30005] = "MaximumNumberOfGuildRolesReached";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["MaximumNumberOfWebhooksReached"] = 30007] = "MaximumNumberOfWebhooksReached";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["MaximumNumberOfEmojisReached"] = 30008] = "MaximumNumberOfEmojisReached";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["MaximumNumberOfReactionsReached"] = 30010] = "MaximumNumberOfReactionsReached";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["MaximumNumberOfGroupDMsReached"] = 30011] = "MaximumNumberOfGroupDMsReached";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["MaximumNumberOfGuildChannelsReached"] = 30013] = "MaximumNumberOfGuildChannelsReached";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["MaximumNumberOfAttachmentsInAMessageReached"] = 30015] = "MaximumNumberOfAttachmentsInAMessageReached";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["MaximumNumberOfInvitesReached"] = 30016] = "MaximumNumberOfInvitesReached";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["MaximumNumberOfAnimatedEmojisReached"] = 30018] = "MaximumNumberOfAnimatedEmojisReached";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["MaximumNumberOfServerMembersReached"] = 30019] = "MaximumNumberOfServerMembersReached";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["MaximumNumberOfServerCategoriesReached"] = 30030] = "MaximumNumberOfServerCategoriesReached";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["GuildAlreadyHasTemplate"] = 30031] = "GuildAlreadyHasTemplate";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["MaximumNumberOfApplicationCommandsReached"] = 30032] = "MaximumNumberOfApplicationCommandsReached";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["MaximumThreadParticipantsReached"] = 30033] = "MaximumThreadParticipantsReached";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["MaximumDailyApplicationCommandCreatesReached"] = 30034] = "MaximumDailyApplicationCommandCreatesReached";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["MaximumNumberOfNonGuildMemberBansHasBeenExceeded"] = 30035] = "MaximumNumberOfNonGuildMemberBansHasBeenExceeded";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["MaximumNumberOfBanFetchesHasBeenReached"] = 30037] = "MaximumNumberOfBanFetchesHasBeenReached";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["MaximumNumberOfUncompletedGuildScheduledEventsReached"] = 30038] = "MaximumNumberOfUncompletedGuildScheduledEventsReached";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["MaximumNumberOfStickersReached"] = 30039] = "MaximumNumberOfStickersReached";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["MaximumNumberOfPruneRequestsHasBeenReached"] = 30040] = "MaximumNumberOfPruneRequestsHasBeenReached";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["MaximumNumberOfGuildWidgetSettingsUpdatesHasBeenReached"] = 30042] = "MaximumNumberOfGuildWidgetSettingsUpdatesHasBeenReached";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["MaximumNumberOfSoundboardSoundsReached"] = 30045] = "MaximumNumberOfSoundboardSoundsReached";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["MaximumNumberOfEditsToMessagesOlderThanOneHourReached"] = 30046] = "MaximumNumberOfEditsToMessagesOlderThanOneHourReached";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["MaximumNumberOfPinnedThreadsInForumHasBeenReached"] = 30047] = "MaximumNumberOfPinnedThreadsInForumHasBeenReached";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["MaximumNumberOfTagsInForumHasBeenReached"] = 30048] = "MaximumNumberOfTagsInForumHasBeenReached";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["BitrateIsTooHighForChannelOfThisType"] = 30052] = "BitrateIsTooHighForChannelOfThisType";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["MaximumNumberOfPremiumEmojisReached"] = 30056] = "MaximumNumberOfPremiumEmojisReached";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["MaximumNumberOfWebhooksPerGuildReached"] = 30058] = "MaximumNumberOfWebhooksPerGuildReached";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["MaximumNumberOfChannelPermissionOverwritesReached"] = 30060] = "MaximumNumberOfChannelPermissionOverwritesReached";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["TheChannelsForThisGuildAreTooLarge"] = 30061] = "TheChannelsForThisGuildAreTooLarge";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["Unauthorized"] = 40001] = "Unauthorized";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["VerifyYourAccount"] = 40002] = "VerifyYourAccount";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["OpeningDirectMessagesTooFast"] = 40003] = "OpeningDirectMessagesTooFast";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["SendMessagesHasBeenTemporarilyDisabled"] = 40004] = "SendMessagesHasBeenTemporarilyDisabled";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["RequestEntityTooLarge"] = 40005] = "RequestEntityTooLarge";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["FeatureTemporarilyDisabledServerSide"] = 40006] = "FeatureTemporarilyDisabledServerSide";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["UserBannedFromThisGuild"] = 40007] = "UserBannedFromThisGuild";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["ConnectionHasBeenRevoked"] = 40012] = "ConnectionHasBeenRevoked";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["OnlyConsumableSKUsCanBeConsumed"] = 40018] = "OnlyConsumableSKUsCanBeConsumed";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["YouCanOnlyDeleteSandboxEntitlements"] = 40019] = "YouCanOnlyDeleteSandboxEntitlements";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["TargetUserIsNotConnectedToVoice"] = 40032] = "TargetUserIsNotConnectedToVoice";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["ThisMessageWasAlreadyCrossposted"] = 40033] = "ThisMessageWasAlreadyCrossposted";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["ApplicationCommandWithThatNameAlreadyExists"] = 40041] = "ApplicationCommandWithThatNameAlreadyExists";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["ApplicationInteractionFailedToSend"] = 40043] = "ApplicationInteractionFailedToSend";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["CannotSendAMessageInAForumChannel"] = 40058] = "CannotSendAMessageInAForumChannel";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["InteractionHasAlreadyBeenAcknowledged"] = 40060] = "InteractionHasAlreadyBeenAcknowledged";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["TagNamesMustBeUnique"] = 40061] = "TagNamesMustBeUnique";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["ServiceResourceIsBeingRateLimited"] = 40062] = "ServiceResourceIsBeingRateLimited";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["ThereAreNoTagsAvailableThatCanBeSetByNonModerators"] = 40066] = "ThereAreNoTagsAvailableThatCanBeSetByNonModerators";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["TagRequiredToCreateAForumPostInThisChannel"] = 40067] = "TagRequiredToCreateAForumPostInThisChannel";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["AnEntitlementHasAlreadyBeenGrantedForThisResource"] = 40074] = "AnEntitlementHasAlreadyBeenGrantedForThisResource";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["ThisInteractionHasHitTheMaximumNumberOfFollowUpMessages"] = 40094] = "ThisInteractionHasHitTheMaximumNumberOfFollowUpMessages";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["CloudflareIsBlockingYourRequest"] = 40333] = "CloudflareIsBlockingYourRequest";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["MissingAccess"] = 50001] = "MissingAccess";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["InvalidAccountType"] = 50002] = "InvalidAccountType";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["CannotExecuteActionOnDMChannel"] = 50003] = "CannotExecuteActionOnDMChannel";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["GuildWidgetDisabled"] = 50004] = "GuildWidgetDisabled";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["CannotEditMessageAuthoredByAnotherUser"] = 50005] = "CannotEditMessageAuthoredByAnotherUser";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["CannotSendAnEmptyMessage"] = 50006] = "CannotSendAnEmptyMessage";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["CannotSendMessagesToThisUser"] = 50007] = "CannotSendMessagesToThisUser";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["CannotSendMessagesInNonTextChannel"] = 50008] = "CannotSendMessagesInNonTextChannel";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["ChannelVerificationLevelTooHighForYouToGainAccess"] = 50009] = "ChannelVerificationLevelTooHighForYouToGainAccess";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["OAuth2ApplicationDoesNotHaveBot"] = 50010] = "OAuth2ApplicationDoesNotHaveBot";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["OAuth2ApplicationLimitReached"] = 50011] = "OAuth2ApplicationLimitReached";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["InvalidOAuth2State"] = 50012] = "InvalidOAuth2State";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["MissingPermissions"] = 50013] = "MissingPermissions";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["InvalidToken"] = 50014] = "InvalidToken";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["NoteWasTooLong"] = 50015] = "NoteWasTooLong";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["ProvidedTooFewOrTooManyMessagesToDelete"] = 50016] = "ProvidedTooFewOrTooManyMessagesToDelete";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["InvalidMFALevel"] = 50017] = "InvalidMFALevel";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["MessageCanOnlyBePinnedInTheChannelItWasSentIn"] = 50019] = "MessageCanOnlyBePinnedInTheChannelItWasSentIn";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["InviteCodeInvalidOrTaken"] = 50020] = "InviteCodeInvalidOrTaken";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["CannotExecuteActionOnSystemMessage"] = 50021] = "CannotExecuteActionOnSystemMessage";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["CannotExecuteActionOnThisChannelType"] = 50024] = "CannotExecuteActionOnThisChannelType";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["InvalidOAuth2AccessToken"] = 50025] = "InvalidOAuth2AccessToken";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["MissingRequiredOAuth2Scope"] = 50026] = "MissingRequiredOAuth2Scope";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["InvalidWebhookToken"] = 50027] = "InvalidWebhookToken";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["InvalidRole"] = 50028] = "InvalidRole";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["InvalidRecipients"] = 50033] = "InvalidRecipients";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["OneOfTheMessagesProvidedWasTooOldForBulkDelete"] = 50034] = "OneOfTheMessagesProvidedWasTooOldForBulkDelete";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["InvalidFormBodyOrContentType"] = 50035] = "InvalidFormBodyOrContentType";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["InviteAcceptedToGuildWithoutTheBotBeingIn"] = 50036] = "InviteAcceptedToGuildWithoutTheBotBeingIn";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["InvalidActivityAction"] = 50039] = "InvalidActivityAction";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["InvalidAPIVersion"] = 50041] = "InvalidAPIVersion";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["FileUploadedExceedsMaximumSize"] = 50045] = "FileUploadedExceedsMaximumSize";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["InvalidFileUploaded"] = 50046] = "InvalidFileUploaded";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["CannotSelfRedeemThisGift"] = 50054] = "CannotSelfRedeemThisGift";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["InvalidGuild"] = 50055] = "InvalidGuild";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["InvalidSKU"] = 50057] = "InvalidSKU";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["InvalidRequestOrigin"] = 50067] = "InvalidRequestOrigin";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["InvalidMessageType"] = 50068] = "InvalidMessageType";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["PaymentSourceRequiredToRedeemGift"] = 50070] = "PaymentSourceRequiredToRedeemGift";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["CannotModifyASystemWebhook"] = 50073] = "CannotModifyASystemWebhook";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["CannotDeleteChannelRequiredForCommunityGuilds"] = 50074] = "CannotDeleteChannelRequiredForCommunityGuilds";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["CannotEditStickersWithinMessage"] = 50080] = "CannotEditStickersWithinMessage";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["InvalidStickerSent"] = 50081] = "InvalidStickerSent";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["InvalidActionOnArchivedThread"] = 50083] = "InvalidActionOnArchivedThread";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["InvalidThreadNotificationSettings"] = 50084] = "InvalidThreadNotificationSettings";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["ParameterEarlierThanCreation"] = 50085] = "ParameterEarlierThanCreation";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["CommunityServerChannelsMustBeTextChannels"] = 50086] = "CommunityServerChannelsMustBeTextChannels";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["TheEntityTypeOfTheEventIsDifferentFromTheEntityYouAreTryingToStartTheEventFor"] = 50091] = "TheEntityTypeOfTheEventIsDifferentFromTheEntityYouAreTryingToStartTheEventFor";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["ServerNotAvailableInYourLocation"] = 50095] = "ServerNotAvailableInYourLocation";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["ServerNeedsMonetizationEnabledToPerformThisAction"] = 50097] = "ServerNeedsMonetizationEnabledToPerformThisAction";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["ServerNeedsMoreBoostsToPerformThisAction"] = 50101] = "ServerNeedsMoreBoostsToPerformThisAction";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["RequestBodyContainsInvalidJSON"] = 50109] = "RequestBodyContainsInvalidJSON";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["ProvidedFileIsInvalid"] = 50110] = "ProvidedFileIsInvalid";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["ProvidedFileTypeIsInvalid"] = 50123] = "ProvidedFileTypeIsInvalid";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["ProvidedFileDurationExceedsMaximumLength"] = 50124] = "ProvidedFileDurationExceedsMaximumLength";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["OwnerCannotBePendingMember"] = 50131] = "OwnerCannotBePendingMember";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["OwnershipCannotBeMovedToABotUser"] = 50132] = "OwnershipCannotBeMovedToABotUser";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["FailedToResizeAssetBelowTheMinimumSize"] = 50138] = "FailedToResizeAssetBelowTheMinimumSize";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["CannotMixSubscriptionAndNonSubscriptionRolesForAnEmoji"] = 50144] = "CannotMixSubscriptionAndNonSubscriptionRolesForAnEmoji";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["CannotConvertBetweenPremiumEmojiAndNormalEmoji"] = 50145] = "CannotConvertBetweenPremiumEmojiAndNormalEmoji";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["UploadedFileNotFound"] = 50146] = "UploadedFileNotFound";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["SpecifiedEmojiIsInvalid"] = 50151] = "SpecifiedEmojiIsInvalid";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["VoiceMessagesDoNotSupportAdditionalContent"] = 50159] = "VoiceMessagesDoNotSupportAdditionalContent";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["VoiceMessagesMustHaveASingleAudioAttachment"] = 50160] = "VoiceMessagesMustHaveASingleAudioAttachment";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["VoiceMessagesMustHaveSupportingMetadata"] = 50161] = "VoiceMessagesMustHaveSupportingMetadata";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["VoiceMessagesCannotBeEdited"] = 50162] = "VoiceMessagesCannotBeEdited";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["CannotDeleteGuildSubscriptionIntegration"] = 50163] = "CannotDeleteGuildSubscriptionIntegration";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["YouCannotSendVoiceMessagesInThisChannel"] = 50173] = "YouCannotSendVoiceMessagesInThisChannel";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["TheUserAccountMustFirstBeVerified"] = 50178] = "TheUserAccountMustFirstBeVerified";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["ProvidedFileDoesNotHaveAValidDuration"] = 50192] = "ProvidedFileDoesNotHaveAValidDuration";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["YouDoNotHavePermissionToSendThisSticker"] = 50600] = "YouDoNotHavePermissionToSendThisSticker";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["TwoFactorAuthenticationIsRequired"] = 60003] = "TwoFactorAuthenticationIsRequired";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["NoUsersWithDiscordTagExist"] = 80004] = "NoUsersWithDiscordTagExist";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["ReactionWasBlocked"] = 90001] = "ReactionWasBlocked";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["UserCannotUseBurstReactions"] = 90002] = "UserCannotUseBurstReactions";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["ApplicationNotYetAvailable"] = 110001] = "ApplicationNotYetAvailable";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["APIResourceOverloaded"] = 13e4] = "APIResourceOverloaded";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["TheStageIsAlreadyOpen"] = 150006] = "TheStageIsAlreadyOpen";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["CannotReplyWithoutPermissionToReadMessageHistory"] = 160002] = "CannotReplyWithoutPermissionToReadMessageHistory";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["ThreadAlreadyCreatedForMessage"] = 160004] = "ThreadAlreadyCreatedForMessage";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["ThreadLocked"] = 160005] = "ThreadLocked";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["MaximumActiveThreads"] = 160006] = "MaximumActiveThreads";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["MaximumActiveAnnouncementThreads"] = 160007] = "MaximumActiveAnnouncementThreads";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["InvalidJSONForUploadedLottieFile"] = 170001] = "InvalidJSONForUploadedLottieFile";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["UploadedLottiesCannotContainRasterizedImages"] = 170002] = "UploadedLottiesCannotContainRasterizedImages";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["StickerMaximumFramerateExceeded"] = 170003] = "StickerMaximumFramerateExceeded";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["StickerFrameCountExceedsMaximumOf1000Frames"] = 170004] = "StickerFrameCountExceedsMaximumOf1000Frames";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["LottieAnimationMaximumDimensionsExceeded"] = 170005] = "LottieAnimationMaximumDimensionsExceeded";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["StickerFramerateIsTooSmallOrTooLarge"] = 170006] = "StickerFramerateIsTooSmallOrTooLarge";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["StickerAnimationDurationExceedsMaximumOf5Seconds"] = 170007] = "StickerAnimationDurationExceedsMaximumOf5Seconds";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["CannotUpdateAFinishedEvent"] = 18e4] = "CannotUpdateAFinishedEvent";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["FailedToCreateStageNeededForStageEvent"] = 180002] = "FailedToCreateStageNeededForStageEvent";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["MessageWasBlockedByAutomaticModeration"] = 2e5] = "MessageWasBlockedByAutomaticModeration";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["TitleWasBlockedByAutomaticModeration"] = 200001] = "TitleWasBlockedByAutomaticModeration";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["WebhooksPostedToForumChannelsMustHaveAThreadNameOrThreadId"] = 220001] = "WebhooksPostedToForumChannelsMustHaveAThreadNameOrThreadId";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["WebhooksPostedToForumChannelsCannotHaveBothAThreadNameAndThreadId"] = 220002] = "WebhooksPostedToForumChannelsCannotHaveBothAThreadNameAndThreadId";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["WebhooksCanOnlyCreateThreadsInForumChannels"] = 220003] = "WebhooksCanOnlyCreateThreadsInForumChannels";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["WebhookServicesCannotBeUsedInForumChannels"] = 220004] = "WebhookServicesCannotBeUsedInForumChannels";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["MessageBlockedByHarmfulLinksFilter"] = 24e4] = "MessageBlockedByHarmfulLinksFilter";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["CannotEnableOnboardingRequirementsAreNotMet"] = 35e4] = "CannotEnableOnboardingRequirementsAreNotMet";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["CannotUpdateOnboardingWhileBelowRequirements"] = 350001] = "CannotUpdateOnboardingWhileBelowRequirements";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["FailedToBanUsers"] = 5e5] = "FailedToBanUsers";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["PollVotingBlocked"] = 52e4] = "PollVotingBlocked";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["PollExpired"] = 520001] = "PollExpired";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["InvalidChannelTypeForPollCreation"] = 520002] = "InvalidChannelTypeForPollCreation";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["CannotEditAPollMessage"] = 520003] = "CannotEditAPollMessage";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["CannotUseAnEmojiIncludedWithThePoll"] = 520004] = "CannotUseAnEmojiIncludedWithThePoll";
      RESTJSONErrorCodes2[RESTJSONErrorCodes2["CannotExpireANonPollMessage"] = 520006] = "CannotExpireANonPollMessage";
    })(RESTJSONErrorCodes || (exports.RESTJSONErrorCodes = RESTJSONErrorCodes = {}));
    var Locale;
    (function(Locale2) {
      Locale2["Indonesian"] = "id";
      Locale2["EnglishUS"] = "en-US";
      Locale2["EnglishGB"] = "en-GB";
      Locale2["Bulgarian"] = "bg";
      Locale2["ChineseCN"] = "zh-CN";
      Locale2["ChineseTW"] = "zh-TW";
      Locale2["Croatian"] = "hr";
      Locale2["Czech"] = "cs";
      Locale2["Danish"] = "da";
      Locale2["Dutch"] = "nl";
      Locale2["Finnish"] = "fi";
      Locale2["French"] = "fr";
      Locale2["German"] = "de";
      Locale2["Greek"] = "el";
      Locale2["Hindi"] = "hi";
      Locale2["Hungarian"] = "hu";
      Locale2["Italian"] = "it";
      Locale2["Japanese"] = "ja";
      Locale2["Korean"] = "ko";
      Locale2["Lithuanian"] = "lt";
      Locale2["Norwegian"] = "no";
      Locale2["Polish"] = "pl";
      Locale2["PortugueseBR"] = "pt-BR";
      Locale2["Romanian"] = "ro";
      Locale2["Russian"] = "ru";
      Locale2["SpanishES"] = "es-ES";
      Locale2["SpanishLATAM"] = "es-419";
      Locale2["Swedish"] = "sv-SE";
      Locale2["Thai"] = "th";
      Locale2["Turkish"] = "tr";
      Locale2["Ukrainian"] = "uk";
      Locale2["Vietnamese"] = "vi";
    })(Locale || (exports.Locale = Locale = {}));
  }
});

// node_modules/discord-api-types/rest/v10/application.js
var require_application2 = __commonJS({
  "node_modules/discord-api-types/rest/v10/application.js"(exports) {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/discord-api-types/rest/v10/auditLog.js
var require_auditLog2 = __commonJS({
  "node_modules/discord-api-types/rest/v10/auditLog.js"(exports) {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/discord-api-types/rest/v10/autoModeration.js
var require_autoModeration2 = __commonJS({
  "node_modules/discord-api-types/rest/v10/autoModeration.js"(exports) {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/discord-api-types/rest/v10/channel.js
var require_channel3 = __commonJS({
  "node_modules/discord-api-types/rest/v10/channel.js"(exports) {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ReactionType = void 0;
    var ReactionType;
    (function(ReactionType2) {
      ReactionType2[ReactionType2["Normal"] = 0] = "Normal";
      ReactionType2[ReactionType2["Super"] = 1] = "Super";
    })(ReactionType || (exports.ReactionType = ReactionType = {}));
  }
});

// node_modules/discord-api-types/rest/v10/emoji.js
var require_emoji2 = __commonJS({
  "node_modules/discord-api-types/rest/v10/emoji.js"(exports) {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/discord-api-types/rest/v10/gateway.js
var require_gateway2 = __commonJS({
  "node_modules/discord-api-types/rest/v10/gateway.js"(exports) {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/discord-api-types/rest/v10/guild.js
var require_guild2 = __commonJS({
  "node_modules/discord-api-types/rest/v10/guild.js"(exports) {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/discord-api-types/rest/v10/guildScheduledEvent.js
var require_guildScheduledEvent2 = __commonJS({
  "node_modules/discord-api-types/rest/v10/guildScheduledEvent.js"(exports) {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/discord-api-types/rest/v10/interactions.js
var require_interactions2 = __commonJS({
  "node_modules/discord-api-types/rest/v10/interactions.js"(exports) {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/discord-api-types/rest/v10/invite.js
var require_invite2 = __commonJS({
  "node_modules/discord-api-types/rest/v10/invite.js"(exports) {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/discord-api-types/rest/v10/monetization.js
var require_monetization2 = __commonJS({
  "node_modules/discord-api-types/rest/v10/monetization.js"(exports) {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.EntitlementOwnerType = void 0;
    var EntitlementOwnerType;
    (function(EntitlementOwnerType2) {
      EntitlementOwnerType2[EntitlementOwnerType2["Guild"] = 1] = "Guild";
      EntitlementOwnerType2[EntitlementOwnerType2["User"] = 2] = "User";
    })(EntitlementOwnerType || (exports.EntitlementOwnerType = EntitlementOwnerType = {}));
  }
});

// node_modules/discord-api-types/rest/v10/oauth2.js
var require_oauth22 = __commonJS({
  "node_modules/discord-api-types/rest/v10/oauth2.js"(exports) {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/discord-api-types/rest/v10/poll.js
var require_poll2 = __commonJS({
  "node_modules/discord-api-types/rest/v10/poll.js"(exports) {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/discord-api-types/rest/v10/soundboard.js
var require_soundboard2 = __commonJS({
  "node_modules/discord-api-types/rest/v10/soundboard.js"(exports) {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/discord-api-types/rest/v10/stageInstance.js
var require_stageInstance2 = __commonJS({
  "node_modules/discord-api-types/rest/v10/stageInstance.js"(exports) {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/discord-api-types/rest/v10/sticker.js
var require_sticker2 = __commonJS({
  "node_modules/discord-api-types/rest/v10/sticker.js"(exports) {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/discord-api-types/rest/v10/template.js
var require_template2 = __commonJS({
  "node_modules/discord-api-types/rest/v10/template.js"(exports) {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/discord-api-types/rest/v10/user.js
var require_user3 = __commonJS({
  "node_modules/discord-api-types/rest/v10/user.js"(exports) {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/discord-api-types/rest/v10/voice.js
var require_voice2 = __commonJS({
  "node_modules/discord-api-types/rest/v10/voice.js"(exports) {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/discord-api-types/rest/v10/webhook.js
var require_webhook2 = __commonJS({
  "node_modules/discord-api-types/rest/v10/webhook.js"(exports) {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/discord-api-types/rest/v10/index.js
var require_v103 = __commonJS({
  "node_modules/discord-api-types/rest/v10/index.js"(exports) {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o2, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o2, k2, desc);
    } : function(o2, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o2[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p2 in m)
        if (p2 !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p2))
          __createBinding(exports2, m, p2);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.OAuth2Routes = exports.RouteBases = exports.CDNRoutes = exports.ImageFormat = exports.StickerPackApplicationId = exports.Routes = exports.APIVersion = void 0;
    var internals_1 = require_internals();
    __exportStar(require_common3(), exports);
    __exportStar(require_application2(), exports);
    __exportStar(require_auditLog2(), exports);
    __exportStar(require_autoModeration2(), exports);
    __exportStar(require_channel3(), exports);
    __exportStar(require_emoji2(), exports);
    __exportStar(require_gateway2(), exports);
    __exportStar(require_guild2(), exports);
    __exportStar(require_guildScheduledEvent2(), exports);
    __exportStar(require_interactions2(), exports);
    __exportStar(require_invite2(), exports);
    __exportStar(require_monetization2(), exports);
    __exportStar(require_oauth22(), exports);
    __exportStar(require_poll2(), exports);
    __exportStar(require_soundboard2(), exports);
    __exportStar(require_stageInstance2(), exports);
    __exportStar(require_sticker2(), exports);
    __exportStar(require_template2(), exports);
    __exportStar(require_user3(), exports);
    __exportStar(require_voice2(), exports);
    __exportStar(require_webhook2(), exports);
    exports.APIVersion = "10";
    exports.Routes = {
      /**
       * Route for:
       * - GET `/applications/{application.id}/role-connections/metadata`
       * - PUT `/applications/{application.id}/role-connections/metadata`
       */
      applicationRoleConnectionMetadata(applicationId) {
        return `/applications/${applicationId}/role-connections/metadata`;
      },
      /**
       * Route for:
       * - GET  `/guilds/{guild.id}/auto-moderation/rules`
       * - POST `/guilds/{guild.id}/auto-moderation/rules`
       */
      guildAutoModerationRules(guildId) {
        return `/guilds/${guildId}/auto-moderation/rules`;
      },
      /**
       * Routes for:
       * - GET    `/guilds/{guild.id}/auto-moderation/rules/{rule.id}`
       * - PATCH  `/guilds/{guild.id}/auto-moderation/rules/{rule.id}`
       * - DELETE `/guilds/{guild.id}/auto-moderation/rules/{rule.id}`
       */
      guildAutoModerationRule(guildId, ruleId) {
        return `/guilds/${guildId}/auto-moderation/rules/${ruleId}`;
      },
      /**
       * Route for:
       * - GET `/guilds/{guild.id}/audit-logs`
       */
      guildAuditLog(guildId) {
        return `/guilds/${guildId}/audit-logs`;
      },
      /**
       * Route for:
       * - GET    `/channels/{channel.id}`
       * - PATCH  `/channels/{channel.id}`
       * - DELETE `/channels/{channel.id}`
       */
      channel(channelId) {
        return `/channels/${channelId}`;
      },
      /**
       * Route for:
       * - GET  `/channels/{channel.id}/messages`
       * - POST `/channels/{channel.id}/messages`
       */
      channelMessages(channelId) {
        return `/channels/${channelId}/messages`;
      },
      /**
       * Route for:
       * - GET    `/channels/{channel.id}/messages/{message.id}`
       * - PATCH  `/channels/{channel.id}/messages/{message.id}`
       * - DELETE `/channels/{channel.id}/messages/{message.id}`
       */
      channelMessage(channelId, messageId) {
        return `/channels/${channelId}/messages/${messageId}`;
      },
      /**
       * Route for:
       * - POST `/channels/{channel.id}/messages/{message.id}/crosspost`
       */
      channelMessageCrosspost(channelId, messageId) {
        return `/channels/${channelId}/messages/${messageId}/crosspost`;
      },
      /**
       * Route for:
       * - PUT    `/channels/{channel.id}/messages/{message.id}/reactions/{emoji}/@me`
       * - DELETE `/channels/{channel.id}/messages/{message.id}/reactions/{emoji}/@me`
       *
       * **Note**: You need to URL encode the emoji yourself
       */
      channelMessageOwnReaction(channelId, messageId, emoji) {
        return `/channels/${channelId}/messages/${messageId}/reactions/${emoji}/@me`;
      },
      /**
       * Route for:
       * - DELETE `/channels/{channel.id}/messages/{message.id}/reactions/{emoji}/{user.id}`
       *
       * **Note**: You need to URL encode the emoji yourself
       */
      channelMessageUserReaction(channelId, messageId, emoji, userId) {
        return `/channels/${channelId}/messages/${messageId}/reactions/${emoji}/${userId}`;
      },
      /**
       * Route for:
       * - GET    `/channels/{channel.id}/messages/{message.id}/reactions/{emoji}`
       * - DELETE `/channels/{channel.id}/messages/{message.id}/reactions/{emoji}`
       *
       * **Note**: You need to URL encode the emoji yourself
       */
      channelMessageReaction(channelId, messageId, emoji) {
        return `/channels/${channelId}/messages/${messageId}/reactions/${emoji}`;
      },
      /**
       * Route for:
       * - DELETE `/channels/{channel.id}/messages/{message.id}/reactions`
       */
      channelMessageAllReactions(channelId, messageId) {
        return `/channels/${channelId}/messages/${messageId}/reactions`;
      },
      /**
       * Route for:
       * - POST `/channels/{channel.id}/messages/bulk-delete`
       */
      channelBulkDelete(channelId) {
        return `/channels/${channelId}/messages/bulk-delete`;
      },
      /**
       * Route for:
       * - PUT    `/channels/{channel.id}/permissions/{overwrite.id}`
       * - DELETE `/channels/{channel.id}/permissions/{overwrite.id}`
       */
      channelPermission(channelId, overwriteId) {
        return `/channels/${channelId}/permissions/${overwriteId}`;
      },
      /**
       * Route for:
       * - GET  `/channels/{channel.id}/invites`
       * - POST `/channels/{channel.id}/invites`
       */
      channelInvites(channelId) {
        return `/channels/${channelId}/invites`;
      },
      /**
       * Route for:
       * - POST `/channels/{channel.id}/followers`
       */
      channelFollowers(channelId) {
        return `/channels/${channelId}/followers`;
      },
      /**
       * Route for:
       * - POST `/channels/{channel.id}/typing`
       */
      channelTyping(channelId) {
        return `/channels/${channelId}/typing`;
      },
      /**
       * Route for:
       * - GET `/channels/{channel.id}/pins`
       */
      channelPins(channelId) {
        return `/channels/${channelId}/pins`;
      },
      /**
       * Route for:
       * - PUT    `/channels/{channel.id}/pins/{message.id}`
       * - DELETE `/channels/{channel.id}/pins/{message.id}`
       */
      channelPin(channelId, messageId) {
        return `/channels/${channelId}/pins/${messageId}`;
      },
      /**
       * Route for:
       * - PUT    `/channels/{channel.id}/recipients/{user.id}`
       * - DELETE `/channels/{channel.id}/recipients/{user.id}`
       */
      channelRecipient(channelId, userId) {
        return `/channels/${channelId}/recipients/${userId}`;
      },
      /**
       * Route for:
       * - GET  `/guilds/{guild.id}/emojis`
       * - POST `/guilds/{guild.id}/emojis`
       */
      guildEmojis(guildId) {
        return `/guilds/${guildId}/emojis`;
      },
      /**
       * Route for:
       * - GET    `/guilds/{guild.id}/emojis/{emoji.id}`
       * - PATCH  `/guilds/{guild.id}/emojis/{emoji.id}`
       * - DELETE `/guilds/{guild.id}/emojis/{emoji.id}`
       */
      guildEmoji(guildId, emojiId) {
        return `/guilds/${guildId}/emojis/${emojiId}`;
      },
      /**
       * Route for:
       * - POST `/guilds`
       */
      guilds() {
        return "/guilds";
      },
      /**
       * Route for:
       * - GET    `/guilds/{guild.id}`
       * - PATCH  `/guilds/{guild.id}`
       * - DELETE `/guilds/{guild.id}`
       */
      guild(guildId) {
        return `/guilds/${guildId}`;
      },
      /**
       * Route for:
       * - GET `/guilds/{guild.id}/preview`
       */
      guildPreview(guildId) {
        return `/guilds/${guildId}/preview`;
      },
      /**
       * Route for:
       * - GET   `/guilds/{guild.id}/channels`
       * - POST  `/guilds/{guild.id}/channels`
       * - PATCH `/guilds/{guild.id}/channels`
       */
      guildChannels(guildId) {
        return `/guilds/${guildId}/channels`;
      },
      /**
       * Route for:
       * - GET    `/guilds/{guild.id}/members/{user.id}`
       * - PUT    `/guilds/{guild.id}/members/{user.id}`
       * - PATCH  `/guilds/{guild.id}/members/@me`
       * - PATCH  `/guilds/{guild.id}/members/{user.id}`
       * - DELETE `/guilds/{guild.id}/members/{user.id}`
       */
      guildMember(guildId, userId = "@me") {
        return `/guilds/${guildId}/members/${userId}`;
      },
      /**
       * Route for:
       * - GET `/guilds/{guild.id}/members`
       */
      guildMembers(guildId) {
        return `/guilds/${guildId}/members`;
      },
      /**
       * Route for:
       * - GET `/guilds/{guild.id}/members/search`
       */
      guildMembersSearch(guildId) {
        return `/guilds/${guildId}/members/search`;
      },
      /**
       * Route for:
       * - PATCH `/guilds/{guild.id}/members/@me/nick`
       *
       * @deprecated Use {@link Routes.guildMember} instead.
       */
      guildCurrentMemberNickname(guildId) {
        return `/guilds/${guildId}/members/@me/nick`;
      },
      /**
       * Route for:
       * - PUT    `/guilds/{guild.id}/members/{user.id}/roles/{role.id}`
       * - DELETE `/guilds/{guild.id}/members/{user.id}/roles/{role.id}`
       */
      guildMemberRole(guildId, memberId, roleId) {
        return `/guilds/${guildId}/members/${memberId}/roles/${roleId}`;
      },
      /**
       * Route for:
       * - POST `/guilds/{guild.id}/mfa`
       */
      guildMFA(guildId) {
        return `/guilds/${guildId}/mfa`;
      },
      /**
       * Route for:
       * - GET `/guilds/{guild.id}/bans`
       */
      guildBans(guildId) {
        return `/guilds/${guildId}/bans`;
      },
      /**
       * Route for:
       * - GET    `/guilds/{guild.id}/bans/{user.id}`
       * - PUT    `/guilds/{guild.id}/bans/{user.id}`
       * - DELETE `/guilds/{guild.id}/bans/{user.id}`
       */
      guildBan(guildId, userId) {
        return `/guilds/${guildId}/bans/${userId}`;
      },
      /**
       * Route for:
       * - GET   `/guilds/{guild.id}/roles`
       * - POST  `/guilds/{guild.id}/roles`
       * - PATCH `/guilds/{guild.id}/roles`
       */
      guildRoles(guildId) {
        return `/guilds/${guildId}/roles`;
      },
      /**
       * Route for:
       * - GET    `/guilds/{guild.id}/roles/{role.id}`
       * - PATCH  `/guilds/{guild.id}/roles/{role.id}`
       * - DELETE `/guilds/{guild.id}/roles/{role.id}`
       */
      guildRole(guildId, roleId) {
        return `/guilds/${guildId}/roles/${roleId}`;
      },
      /**
       * Route for:
       * - GET  `/guilds/{guild.id}/prune`
       * - POST `/guilds/{guild.id}/prune`
       */
      guildPrune(guildId) {
        return `/guilds/${guildId}/prune`;
      },
      /**
       * Route for:
       * - GET `/guilds/{guild.id}/regions`
       */
      guildVoiceRegions(guildId) {
        return `/guilds/${guildId}/regions`;
      },
      /**
       * Route for:
       * - GET `/guilds/{guild.id}/invites`
       */
      guildInvites(guildId) {
        return `/guilds/${guildId}/invites`;
      },
      /**
       * Route for:
       * - GET  `/guilds/{guild.id}/integrations`
       */
      guildIntegrations(guildId) {
        return `/guilds/${guildId}/integrations`;
      },
      /**
       * Route for:
       * - DELETE `/guilds/{guild.id}/integrations/{integration.id}`
       */
      guildIntegration(guildId, integrationId) {
        return `/guilds/${guildId}/integrations/${integrationId}`;
      },
      /**
       * Route for:
       * - GET   `/guilds/{guild.id}/widget`
       * - PATCH `/guilds/{guild.id}/widget`
       */
      guildWidgetSettings(guildId) {
        return `/guilds/${guildId}/widget`;
      },
      /**
       * Route for:
       * - GET `/guilds/{guild.id}/widget.json`
       */
      guildWidgetJSON(guildId) {
        return `/guilds/${guildId}/widget.json`;
      },
      /**
       * Route for:
       * - GET `/guilds/{guild.id}/vanity-url`
       */
      guildVanityUrl(guildId) {
        return `/guilds/${guildId}/vanity-url`;
      },
      /**
       * Route for:
       * - GET `/guilds/{guild.id}/widget.png`
       */
      guildWidgetImage(guildId) {
        return `/guilds/${guildId}/widget.png`;
      },
      /**
       * Route for:
       * - GET    `/invites/{invite.code}`
       * - DELETE `/invites/{invite.code}`
       */
      invite(code) {
        return `/invites/${code}`;
      },
      /**
       * Route for:
       * - GET  `/guilds/templates/{template.code}`
       * - POST `/guilds/templates/{template.code}`
       */
      template(code) {
        return `/guilds/templates/${code}`;
      },
      /**
       * Route for:
       * - GET  `/guilds/{guild.id}/templates`
       * - POST `/guilds/{guild.id}/templates`
       */
      guildTemplates(guildId) {
        return `/guilds/${guildId}/templates`;
      },
      /**
       * Route for:
       * - PUT    `/guilds/{guild.id}/templates/{template.code}`
       * - PATCH  `/guilds/{guild.id}/templates/{template.code}`
       * - DELETE `/guilds/{guild.id}/templates/{template.code}`
       */
      guildTemplate(guildId, code) {
        return `/guilds/${guildId}/templates/${code}`;
      },
      /**
       * Route for:
       * - GET `/channels/{channel.id}/polls/{message.id}/answers/{answer_id}`
       */
      pollAnswerVoters(channelId, messageId, answerId) {
        return `/channels/${channelId}/polls/${messageId}/answers/${answerId}`;
      },
      /**
       * Route for:
       * - POST `/channels/{channel.id}/polls/{message.id}/expire`
       */
      expirePoll(channelId, messageId) {
        return `/channels/${channelId}/polls/${messageId}/expire`;
      },
      /**
       * Route for:
       * - POST `/channels/{channel.id}/threads`
       * - POST `/channels/{channel.id}/messages/{message.id}/threads`
       */
      threads(parentId, messageId) {
        const parts = ["", "channels", parentId];
        if (messageId)
          parts.push("messages", messageId);
        parts.push("threads");
        return parts.join("/");
      },
      /**
       * Route for:
       * - GET `/guilds/{guild.id}/threads/active`
       */
      guildActiveThreads(guildId) {
        return `/guilds/${guildId}/threads/active`;
      },
      /**
       * Route for:
       * - GET `/channels/{channel.id}/threads/archived/public`
       * - GET `/channels/{channel.id}/threads/archived/private`
       */
      channelThreads(channelId, archivedStatus) {
        return `/channels/${channelId}/threads/archived/${archivedStatus}`;
      },
      /**
       * Route for:
       * - GET `/channels/{channel.id}/users/@me/threads/archived/private`
       */
      channelJoinedArchivedThreads(channelId) {
        return `/channels/${channelId}/users/@me/threads/archived/private`;
      },
      /**
       * Route for:
       * - GET    `/channels/{thread.id}/thread-members`
       * - GET    `/channels/{thread.id}/thread-members/{user.id}`
       * - PUT    `/channels/{thread.id}/thread-members/@me`
       * - PUT    `/channels/{thread.id}/thread-members/{user.id}`
       * - DELETE `/channels/{thread.id}/thread-members/@me`
       * - DELETE `/channels/{thread.id}/thread-members/{user.id}`
       */
      threadMembers(threadId, userId) {
        const parts = ["", "channels", threadId, "thread-members"];
        if (userId)
          parts.push(userId);
        return parts.join("/");
      },
      /**
       * Route for:
       * - GET   `/users/@me`
       * - GET   `/users/{user.id}`
       * - PATCH `/users/@me`
       *
       * @param [userId] The user ID, defaulted to `@me`
       */
      user(userId = "@me") {
        return `/users/${userId}`;
      },
      /**
       * Route for:
       * - GET `/users/@me/applications/{application.id}/role-connection`
       * - PUT `/users/@me/applications/{application.id}/role-connection`
       */
      userApplicationRoleConnection(applicationId) {
        return `/users/@me/applications/${applicationId}/role-connection`;
      },
      /**
       * Route for:
       * - GET `/users/@me/guilds`
       */
      userGuilds() {
        return `/users/@me/guilds`;
      },
      /**
       * Route for:
       * - GET `/users/@me/guilds/{guild.id}/member`
       */
      userGuildMember(guildId) {
        return `/users/@me/guilds/${guildId}/member`;
      },
      /**
       * Route for:
       * - DELETE `/users/@me/guilds/{guild.id}`
       */
      userGuild(guildId) {
        return `/users/@me/guilds/${guildId}`;
      },
      /**
       * Route for:
       * - POST `/users/@me/channels`
       */
      userChannels() {
        return `/users/@me/channels`;
      },
      /**
       * Route for:
       * - GET `/users/@me/connections`
       */
      userConnections() {
        return `/users/@me/connections`;
      },
      /**
       * Route for:
       * - GET `/voice/regions`
       */
      voiceRegions() {
        return `/voice/regions`;
      },
      /**
       * Route for:
       * - GET  `/channels/{channel.id}/webhooks`
       * - POST `/channels/{channel.id}/webhooks`
       */
      channelWebhooks(channelId) {
        return `/channels/${channelId}/webhooks`;
      },
      /**
       * Route for:
       * - GET `/guilds/{guild.id}/webhooks`
       */
      guildWebhooks(guildId) {
        return `/guilds/${guildId}/webhooks`;
      },
      /**
       * Route for:
       * - GET    `/webhooks/{webhook.id}`
       * - GET    `/webhooks/{webhook.id}/{webhook.token}`
       * - PATCH  `/webhooks/{webhook.id}`
       * - PATCH  `/webhooks/{webhook.id}/{webhook.token}`
       * - DELETE `/webhooks/{webhook.id}`
       * - DELETE `/webhooks/{webhook.id}/{webhook.token}`
       * - POST   `/webhooks/{webhook.id}/{webhook.token}`
       *
       * - POST   `/webhooks/{application.id}/{interaction.token}`
       */
      webhook(webhookId, webhookToken) {
        const parts = ["", "webhooks", webhookId];
        if (webhookToken)
          parts.push(webhookToken);
        return parts.join("/");
      },
      /**
       * Route for:
       * - GET    `/webhooks/{webhook.id}/{webhook.token}/messages/@original`
       * - GET    `/webhooks/{webhook.id}/{webhook.token}/messages/{message.id}`
       * - PATCH  `/webhooks/{webhook.id}/{webhook.token}/messages/@original`
       * - PATCH  `/webhooks/{webhook.id}/{webhook.token}/messages/{message.id}`
       * - DELETE `/webhooks/{webhook.id}/{webhook.token}/messages/@original`
       * - DELETE `/webhooks/{webhook.id}/{webhook.token}/messages/{message.id}`
       *
       * - PATCH  `/webhooks/{application.id}/{interaction.token}/messages/@original`
       * - PATCH  `/webhooks/{application.id}/{interaction.token}/messages/{message.id}`
       * - DELETE `/webhooks/{application.id}/{interaction.token}/messages/{message.id}`
       */
      webhookMessage(webhookId, webhookToken, messageId = "@original") {
        return `/webhooks/${webhookId}/${webhookToken}/messages/${messageId}`;
      },
      /**
       * Route for:
       * - POST `/webhooks/{webhook.id}/{webhook.token}/github`
       * - POST `/webhooks/{webhook.id}/{webhook.token}/slack`
       */
      webhookPlatform(webhookId, webhookToken, platform) {
        return `/webhooks/${webhookId}/${webhookToken}/${platform}`;
      },
      /**
       * Route for:
       * - GET `/gateway`
       */
      gateway() {
        return `/gateway`;
      },
      /**
       * Route for:
       * - GET `/gateway/bot`
       */
      gatewayBot() {
        return `/gateway/bot`;
      },
      /**
       * Route for:
       * - GET `/oauth2/applications/@me`
       */
      oauth2CurrentApplication() {
        return `/oauth2/applications/@me`;
      },
      /**
       * Route for:
       * - GET `/oauth2/@me`
       */
      oauth2CurrentAuthorization() {
        return `/oauth2/@me`;
      },
      /**
       * Route for:
       * - GET `/oauth2/authorize`
       */
      oauth2Authorization() {
        return `/oauth2/authorize`;
      },
      /**
       * Route for:
       * - POST `/oauth2/token`
       */
      oauth2TokenExchange() {
        return `/oauth2/token`;
      },
      /**
       * Route for:
       * - POST `/oauth2/token/revoke`
       */
      oauth2TokenRevocation() {
        return `/oauth2/token/revoke`;
      },
      /**
       * Route for:
       * - GET  `/applications/{application.id}/commands`
       * - PUT  `/applications/{application.id}/commands`
       * - POST `/applications/{application.id}/commands`
       */
      applicationCommands(applicationId) {
        return `/applications/${applicationId}/commands`;
      },
      /**
       * Route for:
       * - GET    `/applications/{application.id}/commands/{command.id}`
       * - PATCH  `/applications/{application.id}/commands/{command.id}`
       * - DELETE `/applications/{application.id}/commands/{command.id}`
       */
      applicationCommand(applicationId, commandId) {
        return `/applications/${applicationId}/commands/${commandId}`;
      },
      /**
       * Route for:
       * - GET  `/applications/{application.id}/guilds/{guild.id}/commands`
       * - PUT  `/applications/{application.id}/guilds/{guild.id}/commands`
       * - POST `/applications/{application.id}/guilds/{guild.id}/commands`
       */
      applicationGuildCommands(applicationId, guildId) {
        return `/applications/${applicationId}/guilds/${guildId}/commands`;
      },
      /**
       * Route for:
       * - GET    `/applications/{application.id}/guilds/{guild.id}/commands/{command.id}`
       * - PATCH  `/applications/{application.id}/guilds/{guild.id}/commands/{command.id}`
       * - DELETE `/applications/{application.id}/guilds/{guild.id}/commands/{command.id}`
       */
      applicationGuildCommand(applicationId, guildId, commandId) {
        return `/applications/${applicationId}/guilds/${guildId}/commands/${commandId}`;
      },
      /**
       * Route for:
       * - POST `/interactions/{interaction.id}/{interaction.token}/callback`
       */
      interactionCallback(interactionId, interactionToken) {
        return `/interactions/${interactionId}/${interactionToken}/callback`;
      },
      /**
       * Route for:
       * - GET   `/guilds/{guild.id}/member-verification`
       * - PATCH `/guilds/{guild.id}/member-verification`
       */
      guildMemberVerification(guildId) {
        return `/guilds/${guildId}/member-verification`;
      },
      /**
       * Route for:
       * - GET `/guilds/{guild.id}/voice-states/@me`
       * - GET `/guilds/{guild.id}/voice-states/{user.id}`
       * - PATCH `/guilds/{guild.id}/voice-states/@me`
       * - PATCH `/guilds/{guild.id}/voice-states/{user.id}`
       */
      guildVoiceState(guildId, userId = "@me") {
        return `/guilds/${guildId}/voice-states/${userId}`;
      },
      /**
       * Route for:
       * - GET `/applications/{application.id}/guilds/{guild.id}/commands/permissions`
       * - PUT `/applications/{application.id}/guilds/{guild.id}/commands/permissions`
       */
      guildApplicationCommandsPermissions(applicationId, guildId) {
        return `/applications/${applicationId}/guilds/${guildId}/commands/permissions`;
      },
      /**
       * Route for:
       * - GET `/applications/{application.id}/guilds/{guild.id}/commands/{command.id}/permissions`
       * - PUT `/applications/{application.id}/guilds/{guild.id}/commands/{command.id}/permissions`
       */
      applicationCommandPermissions(applicationId, guildId, commandId) {
        return `/applications/${applicationId}/guilds/${guildId}/commands/${commandId}/permissions`;
      },
      /**
       * Route for:
       * - GET   `/guilds/{guild.id}/welcome-screen`
       * - PATCH `/guilds/{guild.id}/welcome-screen`
       */
      guildWelcomeScreen(guildId) {
        return `/guilds/${guildId}/welcome-screen`;
      },
      /**
       * Route for:
       * - POST `/stage-instances`
       */
      stageInstances() {
        return `/stage-instances`;
      },
      /**
       * Route for:
       * - GET `/stage-instances/{channel.id}`
       * - PATCH `/stage-instances/{channel.id}`
       * - DELETE `/stage-instances/{channel.id}`
       */
      stageInstance(channelId) {
        return `/stage-instances/${channelId}`;
      },
      /**
       * Route for:
       * - GET `/stickers/{sticker.id}`
       */
      sticker(stickerId) {
        return `/stickers/${stickerId}`;
      },
      /**
       * Route for:
       * - GET `/sticker-packs`
       */
      stickerPacks() {
        return "/sticker-packs";
      },
      /**
       * Route for:
       * - GET `/sticker-packs/{pack.id}`
       */
      stickerPack(packId) {
        return `/sticker-packs/${packId}`;
      },
      /**
       * Route for:
       * - GET `/sticker-packs`
       *
       * @deprecated Use {@link Routes.stickerPacks} instead.
       */
      nitroStickerPacks() {
        return "/sticker-packs";
      },
      /**
       * Route for:
       * - GET  `/guilds/{guild.id}/stickers`
       * - POST `/guilds/{guild.id}/stickers`
       */
      guildStickers(guildId) {
        return `/guilds/${guildId}/stickers`;
      },
      /**
       * Route for:
       * - GET    `/guilds/{guild.id}/stickers/{sticker.id}`
       * - PATCH  `/guilds/{guild.id}/stickers/{sticker.id}`
       * - DELETE `/guilds/{guild.id}/stickers/{sticker.id}`
       */
      guildSticker(guildId, stickerId) {
        return `/guilds/${guildId}/stickers/${stickerId}`;
      },
      /**
       * Route for:
       * - GET  `/guilds/{guild.id}/scheduled-events`
       * - POST `/guilds/{guild.id}/scheduled-events`
       */
      guildScheduledEvents(guildId) {
        return `/guilds/${guildId}/scheduled-events`;
      },
      /**
       * Route for:
       * - GET  `/guilds/{guild.id}/scheduled-events/{guildScheduledEvent.id}`
       * - PATCH `/guilds/{guild.id}/scheduled-events/{guildScheduledEvent.id}`
       * - DELETE `/guilds/{guild.id}/scheduled-events/{guildScheduledEvent.id}`
       */
      guildScheduledEvent(guildId, guildScheduledEventId) {
        return `/guilds/${guildId}/scheduled-events/${guildScheduledEventId}`;
      },
      /**
       * Route for:
       * - GET `/guilds/{guild.id}/scheduled-events/{guildScheduledEvent.id}/users`
       */
      guildScheduledEventUsers(guildId, guildScheduledEventId) {
        return `/guilds/${guildId}/scheduled-events/${guildScheduledEventId}/users`;
      },
      /**
       * Route for:
       * - GET `/guilds/{guild.id}/onboarding`
       * - PUT `/guilds/{guild.id}/onboarding`
       */
      guildOnboarding(guildId) {
        return `/guilds/${guildId}/onboarding`;
      },
      /**
       * Route for:
       * - PUT `/guilds/${guild.id}/incident-actions`
       */
      guildIncidentActions(guildId) {
        return `/guilds/${guildId}/incident-actions`;
      },
      /**
       * Route for:
       * - GET `/applications/@me`
       * - PATCH `/applications/@me`
       */
      currentApplication() {
        return "/applications/@me";
      },
      /**
       * Route for:
       * - GET `/applications/{application.id}/entitlements`
       * - POST `/applications/{application.id}/entitlements`
       */
      entitlements(applicationId) {
        return `/applications/${applicationId}/entitlements`;
      },
      /**
       * Route for:
       * - GET `/applications/{application.id}/entitlements/{entitlement.id}`
       * - DELETE `/applications/{application.id}/entitlements/{entitlement.id}`
       */
      entitlement(applicationId, entitlementId) {
        return `/applications/${applicationId}/entitlements/${entitlementId}`;
      },
      /**
       * Route for:
       * - GET `/applications/{application.id}/skus`
       */
      skus(applicationId) {
        return `/applications/${applicationId}/skus`;
      },
      /**
       * Route for:
       * - POST `/guilds/{guild.id}/bulk-ban`
       */
      guildBulkBan(guildId) {
        return `/guilds/${guildId}/bulk-ban`;
      },
      /**
       * Route for:
       * - POST `/applications/{application.id}/entitlements/{entitlement.id}/consume`
       */
      consumeEntitlement(applicationId, entitlementId) {
        return `/applications/${applicationId}/entitlements/${entitlementId}/consume`;
      },
      /**
       * Route for:
       * - GET `/applications/{application.id}/emojis`
       * - POST `/applications/{application.id}/emojis`
       */
      applicationEmojis(applicationId) {
        return `/applications/${applicationId}/emojis`;
      },
      /**
       * Route for:
       * - GET `/applications/{application.id}/emojis/{emoji.id}`
       * - PATCH `/applications/{application.id}/emojis/{emoji.id}`
       * - DELETE `/applications/{application.id}/emojis/{emoji.id}`
       */
      applicationEmoji(applicationId, emojiId) {
        return `/applications/${applicationId}/emojis/${emojiId}`;
      },
      /**
       * Route for:
       * - GET `/skus/{sku.id}/subscriptions`
       */
      skuSubscriptions(skuId) {
        return `/skus/${skuId}/subscriptions`;
      },
      /**
       * Route for:
       * - GET `/skus/{sku.id}/subscriptions/{subscription.id}`
       */
      skuSubscription(skuId, subscriptionId) {
        return `/skus/${skuId}/subscriptions/${subscriptionId}`;
      },
      /**
       * Route for:
       * - POST `/channels/{channel.id}/send-soundboard-sound`
       */
      sendSoundboardSound(channelId) {
        return `/channels/${channelId}/send-soundboard-sound`;
      },
      /**
       * Route for:
       * - GET `/soundboard-default-sounds`
       */
      soundboardDefaultSounds() {
        return "/soundboard-default-sounds";
      },
      /**
       * Route for:
       * - GET `/guilds/{guild.id}/soundboard-sounds`
       * - POST `/guilds/{guild.id}/soundboard-sounds`
       */
      guildSoundboardSounds(guildId) {
        return `/guilds/${guildId}/soundboard-sounds`;
      },
      /**
       * Route for:
       * - GET `/guilds/{guild.id}/soundboard-sounds/{sound.id}`
       * - PATCH `/guilds/{guild.id}/soundboard-sounds/{sound.id}`
       * - DELETE `/guilds/{guild.id}/soundboard-sounds/{sound.id}`
       */
      guildSoundboardSound(guildId, soundId) {
        return `/guilds/${guildId}/soundboard-sounds/${soundId}`;
      }
    };
    for (const [key, fn] of Object.entries(exports.Routes)) {
      exports.Routes[key] = (...args) => {
        const escaped = args.map((arg) => {
          if (arg) {
            if (internals_1.urlSafeCharacters.test(String(arg))) {
              return arg;
            }
            return encodeURIComponent(arg);
          }
          return arg;
        });
        return fn.call(null, ...escaped);
      };
    }
    Object.freeze(exports.Routes);
    exports.StickerPackApplicationId = "710982414301790216";
    var ImageFormat;
    (function(ImageFormat2) {
      ImageFormat2["JPEG"] = "jpeg";
      ImageFormat2["PNG"] = "png";
      ImageFormat2["WebP"] = "webp";
      ImageFormat2["GIF"] = "gif";
      ImageFormat2["Lottie"] = "json";
    })(ImageFormat || (exports.ImageFormat = ImageFormat = {}));
    exports.CDNRoutes = {
      /**
       * Route for:
       * - GET `/emojis/{emoji.id}.{png|jpeg|webp|gif}`
       *
       * As this route supports GIFs, the hash will begin with `a_` if it is available in GIF format
       *
       * This route supports the extensions: PNG, JPEG, WebP, GIF
       */
      emoji(emojiId, format) {
        return `/emojis/${emojiId}.${format}`;
      },
      /**
       * Route for:
       * - GET `/icons/{guild.id}/{guild.icon}.{png|jpeg|webp|gif}`
       *
       * As this route supports GIFs, the hash will begin with `a_` if it is available in GIF format
       *
       * This route supports the extensions: PNG, JPEG, WebP, GIF
       */
      guildIcon(guildId, guildIcon, format) {
        return `/icons/${guildId}/${guildIcon}.${format}`;
      },
      /**
       * Route for:
       * - GET `/splashes/{guild.id}/{guild.splash}.{png|jpeg|webp}`
       *
       * This route supports the extensions: PNG, JPEG, WebP
       */
      guildSplash(guildId, guildSplash, format) {
        return `/splashes/${guildId}/${guildSplash}.${format}`;
      },
      /**
       * Route for:
       * - GET `/discovery-splashes/{guild.id}/{guild.discovery_splash}.{png|jpeg|webp}`
       *
       * This route supports the extensions: PNG, JPEG, WebP
       */
      guildDiscoverySplash(guildId, guildDiscoverySplash, format) {
        return `/discovery-splashes/${guildId}/${guildDiscoverySplash}.${format}`;
      },
      /**
       * Route for:
       * - GET `/banners/{guild.id}/{guild.banner}.{png|jpeg|webp|gif}`
       *
       * As this route supports GIFs, the hash will begin with `a_` if it is available in GIF format
       *
       * This route supports the extensions: PNG, JPEG, WebP, GIF
       */
      guildBanner(guildId, guildBanner, format) {
        return `/banners/${guildId}/${guildBanner}.${format}`;
      },
      /**
       * Route for:
       * - GET `/banners/{user.id}/{user.banner}.{png|jpeg|webp|gif}`
       *
       * As this route supports GIFs, the hash will begin with `a_` if it is available in GIF format
       *
       * This route supports the extensions: PNG, JPEG, WebP, GIF
       */
      userBanner(userId, userBanner, format) {
        return `/banners/${userId}/${userBanner}.${format}`;
      },
      /**
       * Route for:
       * - GET `/embed/avatars/{index}.png`
       *
       * The value for `index` parameter depends on whether the user is [migrated to the new username system](https://discord.com/developers/docs/change-log#unique-usernames-on-discord).
       * For users on the new username system, `index` will be `(user.id >> 22) % 6`.
       * For users on the legacy username system, `index` will be `user.discriminator % 5`.
       *
       * This route supports the extension: PNG
       */
      defaultUserAvatar(index) {
        return `/embed/avatars/${index}.png`;
      },
      /**
       * Route for:
       * - GET `/avatars/{user.id}/{user.avatar}.{png|jpeg|webp|gif}`
       *
       * As this route supports GIFs, the hash will begin with `a_` if it is available in GIF format
       *
       * This route supports the extensions: PNG, JPEG, WebP, GIF
       */
      userAvatar(userId, userAvatar, format) {
        return `/avatars/${userId}/${userAvatar}.${format}`;
      },
      /**
       * Route for:
       * - GET `/guilds/{guild.id}/users/{user.id}/avatars/{guild_member.avatar}.{png|jpeg|webp|gif}`
       *
       * As this route supports GIFs, the hash will begin with `a_` if it is available in GIF format
       *
       * This route supports the extensions: PNG, JPEG, WebP, GIF
       */
      guildMemberAvatar(guildId, userId, memberAvatar, format) {
        return `/guilds/${guildId}/users/${userId}/avatars/${memberAvatar}.${format}`;
      },
      /**
       * Route for:
       * - GET `/avatar-decorations/{user.id}/{user.avatar_decoration}.png`
       *
       * This route supports the extension: PNG
       *
       * @deprecated Use {@link CDNRoutes.avatarDecoration} instead.
       */
      userAvatarDecoration(userId, userAvatarDecoration) {
        return `/avatar-decorations/${userId}/${userAvatarDecoration}.png`;
      },
      /**
       * Route for:
       * - GET `/avatar-decoration-presets/{avatar_decoration_data_asset}.png`
       *
       * This route supports the extension: PNG
       */
      avatarDecoration(avatarDecorationDataAsset) {
        return `/avatar-decoration-presets/${avatarDecorationDataAsset}.png`;
      },
      /**
       * Route for:
       * - GET `/app-icons/{application.id}/{application.icon}.{png|jpeg|webp}`
       *
       * This route supports the extensions: PNG, JPEG, WebP
       */
      applicationIcon(applicationId, applicationIcon, format) {
        return `/app-icons/${applicationId}/${applicationIcon}.${format}`;
      },
      /**
       * Route for:
       * - GET `/app-icons/{application.id}/{application.cover_image}.{png|jpeg|webp}`
       *
       * This route supports the extensions: PNG, JPEG, WebP
       */
      applicationCover(applicationId, applicationCoverImage, format) {
        return `/app-icons/${applicationId}/${applicationCoverImage}.${format}`;
      },
      /**
       * Route for:
       * - GET `/app-assets/{application.id}/{application.asset_id}.{png|jpeg|webp}`
       *
       * This route supports the extensions: PNG, JPEG, WebP
       */
      applicationAsset(applicationId, applicationAssetId, format) {
        return `/app-assets/${applicationId}/${applicationAssetId}.${format}`;
      },
      /**
       * Route for:
       * - GET `/app-assets/{application.id}/achievements/{achievement.id}/icons/{achievement.icon}.{png|jpeg|webp}`
       *
       * This route supports the extensions: PNG, JPEG, WebP
       */
      achievementIcon(applicationId, achievementId, achievementIconHash, format) {
        return `/app-assets/${applicationId}/achievements/${achievementId}/icons/${achievementIconHash}.${format}`;
      },
      /**
       * Route for:
       * - GET `/app-assets/710982414301790216/store/{sticker_pack.banner.asset_id}.{png|jpeg|webp}`
       *
       * This route supports the extensions: PNG, JPEG, WebP
       */
      stickerPackBanner(stickerPackBannerAssetId, format) {
        return `/app-assets/${exports.StickerPackApplicationId}/store/${stickerPackBannerAssetId}.${format}`;
      },
      /**
       * Route for:
       * - GET `/app-assets/${application.id}/store/${asset.id}.{png|jpeg|webp}}`
       *
       * This route supports the extensions: PNG, JPEG, WebP
       */
      storePageAsset(applicationId, assetId, format = ImageFormat.PNG) {
        return `/app-assets/${applicationId}/store/${assetId}.${format}`;
      },
      /**
       * Route for:
       * - GET `/team-icons/{team.id}/{team.icon}.{png|jpeg|webp}`
       *
       * This route supports the extensions: PNG, JPEG, WebP
       */
      teamIcon(teamId, teamIcon, format) {
        return `/team-icons/${teamId}/${teamIcon}.${format}`;
      },
      /**
       * Route for:
       * - GET `/stickers/{sticker.id}.{png|json}`
       *
       * This route supports the extensions: PNG, Lottie, GIF
       */
      sticker(stickerId, format) {
        return `/stickers/${stickerId}.${format}`;
      },
      /**
       * Route for:
       * - GET `/role-icons/{role.id}/{role.icon}.{png|jpeg|webp}`
       *
       * This route supports the extensions: PNG, JPEG, WebP
       */
      roleIcon(roleId, roleIcon, format) {
        return `/role-icons/${roleId}/${roleIcon}.${format}`;
      },
      /**
       * Route for:
       * - GET `/guild-events/{guild_scheduled_event.id}/{guild_scheduled_event.image}.{png|jpeg|webp}`
       *
       * This route supports the extensions: PNG, JPEG, WebP
       */
      guildScheduledEventCover(guildScheduledEventId, guildScheduledEventCoverImage, format) {
        return `/guild-events/${guildScheduledEventId}/${guildScheduledEventCoverImage}.${format}`;
      },
      /**
       * Route for:
       * - GET `/guilds/${guild.id}/users/${user.id}/banners/${guild_member.banner}.{png|jpeg|webp|gif}`
       *
       * This route supports the extensions: PNG, JPEG, WebP, GIF
       */
      guildMemberBanner(guildId, userId, guildMemberBanner, format) {
        return `/guilds/${guildId}/users/${userId}/banners/${guildMemberBanner}.${format}`;
      },
      /**
       * Route for:
       * - GET `/soundboard-sounds/${sound.id}`
       */
      soundboardSound(soundId) {
        return `/soundboard-sounds/${soundId}`;
      }
    };
    for (const [key, fn] of Object.entries(exports.CDNRoutes)) {
      exports.CDNRoutes[key] = (...args) => {
        const escaped = args.map((arg) => {
          if (arg) {
            if (internals_1.urlSafeCharacters.test(String(arg))) {
              return arg;
            }
            return encodeURIComponent(arg);
          }
          return arg;
        });
        return fn.call(null, ...escaped);
      };
    }
    Object.freeze(exports.CDNRoutes);
    exports.RouteBases = {
      api: `https://discord.com/api/v${exports.APIVersion}`,
      cdn: "https://cdn.discordapp.com",
      media: "https://media.discordapp.net",
      invite: "https://discord.gg",
      template: "https://discord.new",
      gift: "https://discord.gift",
      scheduledEvent: "https://discord.com/events"
    };
    Object.freeze(exports.RouteBases);
    exports.OAuth2Routes = {
      authorizationURL: `${exports.RouteBases.api}${exports.Routes.oauth2Authorization()}`,
      tokenURL: `${exports.RouteBases.api}${exports.Routes.oauth2TokenExchange()}`,
      /**
       * See https://tools.ietf.org/html/rfc7009
       */
      tokenRevocationURL: `${exports.RouteBases.api}${exports.Routes.oauth2TokenRevocation()}`
    };
    Object.freeze(exports.OAuth2Routes);
  }
});

// node_modules/discord-api-types/rpc/common.js
var require_common4 = __commonJS({
  "node_modules/discord-api-types/rpc/common.js"(exports) {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.RPCCloseEventCodes = exports.RPCErrorCodes = void 0;
    var RPCErrorCodes;
    (function(RPCErrorCodes2) {
      RPCErrorCodes2[RPCErrorCodes2["UnknownError"] = 1e3] = "UnknownError";
      RPCErrorCodes2[RPCErrorCodes2["InvalidPayload"] = 4e3] = "InvalidPayload";
      RPCErrorCodes2[RPCErrorCodes2["InvalidCommand"] = 4002] = "InvalidCommand";
      RPCErrorCodes2[RPCErrorCodes2["InvalidGuild"] = 4003] = "InvalidGuild";
      RPCErrorCodes2[RPCErrorCodes2["InvalidEvent"] = 4004] = "InvalidEvent";
      RPCErrorCodes2[RPCErrorCodes2["InvalidChannel"] = 4005] = "InvalidChannel";
      RPCErrorCodes2[RPCErrorCodes2["InvalidPermissions"] = 4006] = "InvalidPermissions";
      RPCErrorCodes2[RPCErrorCodes2["InvalidClientId"] = 4007] = "InvalidClientId";
      RPCErrorCodes2[RPCErrorCodes2["InvalidOrigin"] = 4008] = "InvalidOrigin";
      RPCErrorCodes2[RPCErrorCodes2["InvalidToken"] = 4009] = "InvalidToken";
      RPCErrorCodes2[RPCErrorCodes2["InvalidUser"] = 4010] = "InvalidUser";
      RPCErrorCodes2[RPCErrorCodes2["OAuth2Error"] = 5e3] = "OAuth2Error";
      RPCErrorCodes2[RPCErrorCodes2["SelectChannelTimedOut"] = 5001] = "SelectChannelTimedOut";
      RPCErrorCodes2[RPCErrorCodes2["GetGuildTimedOut"] = 5002] = "GetGuildTimedOut";
      RPCErrorCodes2[RPCErrorCodes2["SelectVoiceForceRequired"] = 5003] = "SelectVoiceForceRequired";
      RPCErrorCodes2[RPCErrorCodes2["CaptureShortcutAlreadyListening"] = 5004] = "CaptureShortcutAlreadyListening";
    })(RPCErrorCodes || (exports.RPCErrorCodes = RPCErrorCodes = {}));
    var RPCCloseEventCodes;
    (function(RPCCloseEventCodes2) {
      RPCCloseEventCodes2[RPCCloseEventCodes2["InvalidClientId"] = 4e3] = "InvalidClientId";
      RPCCloseEventCodes2[RPCCloseEventCodes2["InvalidOrigin"] = 4001] = "InvalidOrigin";
      RPCCloseEventCodes2[RPCCloseEventCodes2["RateLimited"] = 4002] = "RateLimited";
      RPCCloseEventCodes2[RPCCloseEventCodes2["TokenRevoked"] = 4003] = "TokenRevoked";
      RPCCloseEventCodes2[RPCCloseEventCodes2["InvalidVersion"] = 4004] = "InvalidVersion";
      RPCCloseEventCodes2[RPCCloseEventCodes2["InvalidEncoding"] = 4005] = "InvalidEncoding";
    })(RPCCloseEventCodes || (exports.RPCCloseEventCodes = RPCCloseEventCodes = {}));
  }
});

// node_modules/discord-api-types/rpc/v10.js
var require_v104 = __commonJS({
  "node_modules/discord-api-types/rpc/v10.js"(exports) {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o2, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o2, k2, desc);
    } : function(o2, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o2[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p2 in m)
        if (p2 !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p2))
          __createBinding(exports2, m, p2);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_common4(), exports);
  }
});

// node_modules/discord-api-types/utils/v10.js
var require_v105 = __commonJS({
  "node_modules/discord-api-types/utils/v10.js"(exports) {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isDMInteraction = isDMInteraction;
    exports.isGuildInteraction = isGuildInteraction;
    exports.isApplicationCommandDMInteraction = isApplicationCommandDMInteraction;
    exports.isApplicationCommandGuildInteraction = isApplicationCommandGuildInteraction;
    exports.isMessageComponentDMInteraction = isMessageComponentDMInteraction;
    exports.isMessageComponentGuildInteraction = isMessageComponentGuildInteraction;
    exports.isLinkButton = isLinkButton;
    exports.isInteractionButton = isInteractionButton;
    exports.isMessageComponentInteraction = isMessageComponentInteraction;
    exports.isMessageComponentButtonInteraction = isMessageComponentButtonInteraction;
    exports.isMessageComponentSelectMenuInteraction = isMessageComponentSelectMenuInteraction;
    exports.isChatInputApplicationCommandInteraction = isChatInputApplicationCommandInteraction;
    exports.isContextMenuApplicationCommandInteraction = isContextMenuApplicationCommandInteraction;
    var index_1 = require_v102();
    function isDMInteraction(interaction) {
      return Reflect.has(interaction, "user");
    }
    __name(isDMInteraction, "isDMInteraction");
    function isGuildInteraction(interaction) {
      return Reflect.has(interaction, "guild_id");
    }
    __name(isGuildInteraction, "isGuildInteraction");
    function isApplicationCommandDMInteraction(interaction) {
      return isDMInteraction(interaction);
    }
    __name(isApplicationCommandDMInteraction, "isApplicationCommandDMInteraction");
    function isApplicationCommandGuildInteraction(interaction) {
      return isGuildInteraction(interaction);
    }
    __name(isApplicationCommandGuildInteraction, "isApplicationCommandGuildInteraction");
    function isMessageComponentDMInteraction(interaction) {
      return isDMInteraction(interaction);
    }
    __name(isMessageComponentDMInteraction, "isMessageComponentDMInteraction");
    function isMessageComponentGuildInteraction(interaction) {
      return isGuildInteraction(interaction);
    }
    __name(isMessageComponentGuildInteraction, "isMessageComponentGuildInteraction");
    function isLinkButton(component) {
      return component.style === index_1.ButtonStyle.Link;
    }
    __name(isLinkButton, "isLinkButton");
    function isInteractionButton(component) {
      return ![index_1.ButtonStyle.Link, index_1.ButtonStyle.Premium].includes(component.style);
    }
    __name(isInteractionButton, "isInteractionButton");
    function isMessageComponentInteraction(interaction) {
      return interaction.type === index_1.InteractionType.MessageComponent;
    }
    __name(isMessageComponentInteraction, "isMessageComponentInteraction");
    function isMessageComponentButtonInteraction(interaction) {
      return interaction.data.component_type === index_1.ComponentType.Button;
    }
    __name(isMessageComponentButtonInteraction, "isMessageComponentButtonInteraction");
    function isMessageComponentSelectMenuInteraction(interaction) {
      return [
        index_1.ComponentType.StringSelect,
        index_1.ComponentType.UserSelect,
        index_1.ComponentType.RoleSelect,
        index_1.ComponentType.MentionableSelect,
        index_1.ComponentType.ChannelSelect
      ].includes(interaction.data.component_type);
    }
    __name(isMessageComponentSelectMenuInteraction, "isMessageComponentSelectMenuInteraction");
    function isChatInputApplicationCommandInteraction(interaction) {
      return interaction.data.type === index_1.ApplicationCommandType.ChatInput;
    }
    __name(isChatInputApplicationCommandInteraction, "isChatInputApplicationCommandInteraction");
    function isContextMenuApplicationCommandInteraction(interaction) {
      return interaction.data.type === index_1.ApplicationCommandType.Message || interaction.data.type === index_1.ApplicationCommandType.User;
    }
    __name(isContextMenuApplicationCommandInteraction, "isContextMenuApplicationCommandInteraction");
  }
});

// node_modules/discord-api-types/v10.js
var require_v106 = __commonJS({
  "node_modules/discord-api-types/v10.js"(exports) {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o2, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o2, k2, desc);
    } : function(o2, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o2[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p2 in m)
        if (p2 !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p2))
          __createBinding(exports2, m, p2);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Utils = void 0;
    __exportStar(require_v10(), exports);
    __exportStar(require_globals(), exports);
    __exportStar(require_v102(), exports);
    __exportStar(require_v103(), exports);
    __exportStar(require_v104(), exports);
    exports.Utils = require_v105();
  }
});

// node_modules/@discordjs/util/dist/index.js
var require_dist3 = __commonJS({
  "node_modules/@discordjs/util/dist/index.js"(exports, module) {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __name2 = /* @__PURE__ */ __name((target, value) => __defProp2(target, "name", { value, configurable: true }), "__name");
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    __export2(src_exports, {
      calculateShardId: () => calculateShardId,
      getUserAgentAppendix: () => getUserAgentAppendix,
      isEquatable: () => isEquatable,
      isJSONEncodable: () => isJSONEncodable,
      lazy: () => lazy,
      polyfillDispose: () => polyfillDispose,
      range: () => range,
      shouldUseGlobalFetchAndWebSocket: () => shouldUseGlobalFetchAndWebSocket,
      version: () => version
    });
    module.exports = __toCommonJS2(src_exports);
    function lazy(cb) {
      let defaultValue;
      return () => defaultValue ??= cb();
    }
    __name(lazy, "lazy");
    __name2(lazy, "lazy");
    function* range(range2) {
      let rangeEnd;
      let start = 0;
      let step = 1;
      if (typeof range2 === "number") {
        rangeEnd = range2;
      } else {
        start = range2.start;
        rangeEnd = range2.end;
        step = range2.step ?? 1;
      }
      for (let index = start; index < rangeEnd; index += step) {
        yield index;
      }
    }
    __name(range, "range");
    __name2(range, "range");
    function calculateShardId(guildId, shardCount) {
      return Number(BigInt(guildId) >> 22n) % shardCount;
    }
    __name(calculateShardId, "calculateShardId");
    __name2(calculateShardId, "calculateShardId");
    function shouldUseGlobalFetchAndWebSocket() {
      if (typeof globalThis.process === "undefined") {
        return "fetch" in globalThis && "WebSocket" in globalThis;
      }
      if ("versions" in globalThis.process) {
        return "deno" in globalThis.process.versions || "bun" in globalThis.process.versions;
      }
      return false;
    }
    __name(shouldUseGlobalFetchAndWebSocket, "shouldUseGlobalFetchAndWebSocket");
    __name2(shouldUseGlobalFetchAndWebSocket, "shouldUseGlobalFetchAndWebSocket");
    function getUserAgentAppendix() {
      if (typeof globalThis.EdgeRuntime !== "undefined") {
        return "Vercel-Edge-Functions";
      }
      if (typeof globalThis.R2 !== "undefined" && typeof globalThis.WebSocketPair !== "undefined") {
        return "Cloudflare-Workers";
      }
      if (typeof globalThis.Netlify !== "undefined") {
        return "Netlify-Edge-Functions";
      }
      if (typeof globalThis.process !== "object") {
        if (typeof globalThis.navigator === "object") {
          return globalThis.navigator.userAgent;
        }
        return "UnknownEnvironment";
      }
      if ("versions" in globalThis.process) {
        if ("deno" in globalThis.process.versions) {
          return `Deno/${globalThis.process.versions.deno}`;
        }
        if ("bun" in globalThis.process.versions) {
          return `Bun/${globalThis.process.versions.bun}`;
        }
        if ("node" in globalThis.process.versions) {
          return `Node.js/${globalThis.process.versions.node}`;
        }
      }
      return "UnknownEnvironment";
    }
    __name(getUserAgentAppendix, "getUserAgentAppendix");
    __name2(getUserAgentAppendix, "getUserAgentAppendix");
    function polyfillDispose() {
      Symbol.dispose ??= Symbol("Symbol.dispose");
      Symbol.asyncDispose ??= Symbol("Symbol.asyncDispose");
    }
    __name(polyfillDispose, "polyfillDispose");
    __name2(polyfillDispose, "polyfillDispose");
    function isJSONEncodable(maybeEncodable) {
      return maybeEncodable !== null && typeof maybeEncodable === "object" && "toJSON" in maybeEncodable;
    }
    __name(isJSONEncodable, "isJSONEncodable");
    __name2(isJSONEncodable, "isJSONEncodable");
    function isEquatable(maybeEquatable) {
      return maybeEquatable !== null && typeof maybeEquatable === "object" && "equals" in maybeEquatable;
    }
    __name(isEquatable, "isEquatable");
    __name2(isEquatable, "isEquatable");
    var version = "1.1.1";
  }
});

// node_modules/fast-deep-equal/index.js
var require_fast_deep_equal = __commonJS({
  "node_modules/fast-deep-equal/index.js"(exports, module) {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    module.exports = /* @__PURE__ */ __name(function equal(a2, b) {
      if (a2 === b)
        return true;
      if (a2 && b && typeof a2 == "object" && typeof b == "object") {
        if (a2.constructor !== b.constructor)
          return false;
        var length, i, keys;
        if (Array.isArray(a2)) {
          length = a2.length;
          if (length != b.length)
            return false;
          for (i = length; i-- !== 0; )
            if (!equal(a2[i], b[i]))
              return false;
          return true;
        }
        if (a2.constructor === RegExp)
          return a2.source === b.source && a2.flags === b.flags;
        if (a2.valueOf !== Object.prototype.valueOf)
          return a2.valueOf() === b.valueOf();
        if (a2.toString !== Object.prototype.toString)
          return a2.toString() === b.toString();
        keys = Object.keys(a2);
        length = keys.length;
        if (length !== Object.keys(b).length)
          return false;
        for (i = length; i-- !== 0; )
          if (!Object.prototype.hasOwnProperty.call(b, keys[i]))
            return false;
        for (i = length; i-- !== 0; ) {
          var key = keys[i];
          if (!equal(a2[key], b[key]))
            return false;
        }
        return true;
      }
      return a2 !== a2 && b !== b;
    }, "equal");
  }
});

// node_modules/ts-mixer/dist/esm/index.js
var esm_exports = {};
__export(esm_exports, {
  Mixin: () => Mixin,
  decorate: () => decorate,
  hasMixin: () => hasMixin,
  mix: () => mix,
  settings: () => settings
});
function Mixin(...constructors) {
  var _a, _b, _c;
  const prototypes = constructors.map((constructor) => constructor.prototype);
  const initFunctionName = settings.initFunction;
  if (initFunctionName !== null) {
    const initFunctions = prototypes.map((proto) => proto[initFunctionName]).filter((func) => typeof func === "function");
    const combinedInitFunction = /* @__PURE__ */ __name(function(...args) {
      for (let initFunction of initFunctions)
        initFunction.apply(this, args);
    }, "combinedInitFunction");
    const extraProto = { [initFunctionName]: combinedInitFunction };
    prototypes.push(extraProto);
  }
  function MixedClass(...args) {
    for (const constructor of constructors)
      copyProps(this, new constructor(...args));
    if (initFunctionName !== null && typeof this[initFunctionName] === "function")
      this[initFunctionName].apply(this, args);
  }
  __name(MixedClass, "MixedClass");
  MixedClass.prototype = settings.prototypeStrategy === "copy" ? hardMixProtos(prototypes, MixedClass) : softMixProtos(prototypes, MixedClass);
  Object.setPrototypeOf(MixedClass, settings.staticsStrategy === "copy" ? hardMixProtos(constructors, null, ["prototype"]) : proxyMix(constructors, Function.prototype));
  let DecoratedMixedClass = MixedClass;
  if (settings.decoratorInheritance !== "none") {
    const classDecorators = settings.decoratorInheritance === "deep" ? deepDecoratorSearch(...constructors) : directDecoratorSearch(...constructors);
    for (let decorator of (_a = classDecorators === null || classDecorators === void 0 ? void 0 : classDecorators.class) !== null && _a !== void 0 ? _a : []) {
      const result = decorator(DecoratedMixedClass);
      if (result) {
        DecoratedMixedClass = result;
      }
    }
    applyPropAndMethodDecorators((_b = classDecorators === null || classDecorators === void 0 ? void 0 : classDecorators.static) !== null && _b !== void 0 ? _b : {}, DecoratedMixedClass);
    applyPropAndMethodDecorators((_c = classDecorators === null || classDecorators === void 0 ? void 0 : classDecorators.instance) !== null && _c !== void 0 ? _c : {}, DecoratedMixedClass.prototype);
  }
  registerMixins(DecoratedMixedClass, constructors);
  return DecoratedMixedClass;
}
var copyProps, protoChain, nearestCommonProto, hardMixProtos, unique, getIngredientWithProp, proxyMix, softMixProtos, settings, mixins, getMixinsForClass, registerMixins, hasMixin, mergeObjectsOfDecorators, mergePropertyAndMethodDecorators, mergeDecorators, decorators, findAllConstituentClasses, deepDecoratorSearch, directDecoratorSearch, getDecoratorsForClass, decorateClass, decorateMember, decorate, applyPropAndMethodDecorators, mix;
var init_esm = __esm({
  "node_modules/ts-mixer/dist/esm/index.js"() {
    init_checked_fetch();
    init_modules_watch_stub();
    copyProps = /* @__PURE__ */ __name((dest, src, exclude = []) => {
      const props = Object.getOwnPropertyDescriptors(src);
      for (let prop of exclude)
        delete props[prop];
      Object.defineProperties(dest, props);
    }, "copyProps");
    protoChain = /* @__PURE__ */ __name((obj, currentChain = [obj]) => {
      const proto = Object.getPrototypeOf(obj);
      if (proto === null)
        return currentChain;
      return protoChain(proto, [...currentChain, proto]);
    }, "protoChain");
    nearestCommonProto = /* @__PURE__ */ __name((...objs) => {
      if (objs.length === 0)
        return void 0;
      let commonProto = void 0;
      const protoChains = objs.map((obj) => protoChain(obj));
      while (protoChains.every((protoChain2) => protoChain2.length > 0)) {
        const protos = protoChains.map((protoChain2) => protoChain2.pop());
        const potentialCommonProto = protos[0];
        if (protos.every((proto) => proto === potentialCommonProto))
          commonProto = potentialCommonProto;
        else
          break;
      }
      return commonProto;
    }, "nearestCommonProto");
    hardMixProtos = /* @__PURE__ */ __name((ingredients, constructor, exclude = []) => {
      var _a;
      const base = (_a = nearestCommonProto(...ingredients)) !== null && _a !== void 0 ? _a : Object.prototype;
      const mixedProto = Object.create(base);
      const visitedProtos = protoChain(base);
      for (let prototype of ingredients) {
        let protos = protoChain(prototype);
        for (let i = protos.length - 1; i >= 0; i--) {
          let newProto = protos[i];
          if (visitedProtos.indexOf(newProto) === -1) {
            copyProps(mixedProto, newProto, ["constructor", ...exclude]);
            visitedProtos.push(newProto);
          }
        }
      }
      mixedProto.constructor = constructor;
      return mixedProto;
    }, "hardMixProtos");
    unique = /* @__PURE__ */ __name((arr) => arr.filter((e, i) => arr.indexOf(e) == i), "unique");
    getIngredientWithProp = /* @__PURE__ */ __name((prop, ingredients) => {
      const protoChains = ingredients.map((ingredient) => protoChain(ingredient));
      let protoDepth = 0;
      let protosAreLeftToSearch = true;
      while (protosAreLeftToSearch) {
        protosAreLeftToSearch = false;
        for (let i = ingredients.length - 1; i >= 0; i--) {
          const searchTarget = protoChains[i][protoDepth];
          if (searchTarget !== void 0 && searchTarget !== null) {
            protosAreLeftToSearch = true;
            if (Object.getOwnPropertyDescriptor(searchTarget, prop) != void 0) {
              return protoChains[i][0];
            }
          }
        }
        protoDepth++;
      }
      return void 0;
    }, "getIngredientWithProp");
    proxyMix = /* @__PURE__ */ __name((ingredients, prototype = Object.prototype) => new Proxy({}, {
      getPrototypeOf() {
        return prototype;
      },
      setPrototypeOf() {
        throw Error("Cannot set prototype of Proxies created by ts-mixer");
      },
      getOwnPropertyDescriptor(_, prop) {
        return Object.getOwnPropertyDescriptor(getIngredientWithProp(prop, ingredients) || {}, prop);
      },
      defineProperty() {
        throw new Error("Cannot define new properties on Proxies created by ts-mixer");
      },
      has(_, prop) {
        return getIngredientWithProp(prop, ingredients) !== void 0 || prototype[prop] !== void 0;
      },
      get(_, prop) {
        return (getIngredientWithProp(prop, ingredients) || prototype)[prop];
      },
      set(_, prop, val) {
        const ingredientWithProp = getIngredientWithProp(prop, ingredients);
        if (ingredientWithProp === void 0)
          throw new Error("Cannot set new properties on Proxies created by ts-mixer");
        ingredientWithProp[prop] = val;
        return true;
      },
      deleteProperty() {
        throw new Error("Cannot delete properties on Proxies created by ts-mixer");
      },
      ownKeys() {
        return ingredients.map(Object.getOwnPropertyNames).reduce((prev, curr) => curr.concat(prev.filter((key) => curr.indexOf(key) < 0)));
      }
    }), "proxyMix");
    softMixProtos = /* @__PURE__ */ __name((ingredients, constructor) => proxyMix([...ingredients, { constructor }]), "softMixProtos");
    settings = {
      initFunction: null,
      staticsStrategy: "copy",
      prototypeStrategy: "copy",
      decoratorInheritance: "deep"
    };
    mixins = /* @__PURE__ */ new WeakMap();
    getMixinsForClass = /* @__PURE__ */ __name((clazz) => mixins.get(clazz), "getMixinsForClass");
    registerMixins = /* @__PURE__ */ __name((mixedClass, constituents) => mixins.set(mixedClass, constituents), "registerMixins");
    hasMixin = /* @__PURE__ */ __name((instance, mixin) => {
      if (instance instanceof mixin)
        return true;
      const constructor = instance.constructor;
      const visited = /* @__PURE__ */ new Set();
      let frontier = /* @__PURE__ */ new Set();
      frontier.add(constructor);
      while (frontier.size > 0) {
        if (frontier.has(mixin))
          return true;
        frontier.forEach((item) => visited.add(item));
        const newFrontier = /* @__PURE__ */ new Set();
        frontier.forEach((item) => {
          var _a;
          const itemConstituents = (_a = mixins.get(item)) !== null && _a !== void 0 ? _a : protoChain(item.prototype).map((proto) => proto.constructor).filter((item2) => item2 !== null);
          if (itemConstituents)
            itemConstituents.forEach((constituent) => {
              if (!visited.has(constituent) && !frontier.has(constituent))
                newFrontier.add(constituent);
            });
        });
        frontier = newFrontier;
      }
      return false;
    }, "hasMixin");
    mergeObjectsOfDecorators = /* @__PURE__ */ __name((o1, o2) => {
      var _a, _b;
      const allKeys = unique([...Object.getOwnPropertyNames(o1), ...Object.getOwnPropertyNames(o2)]);
      const mergedObject = {};
      for (let key of allKeys)
        mergedObject[key] = unique([...(_a = o1 === null || o1 === void 0 ? void 0 : o1[key]) !== null && _a !== void 0 ? _a : [], ...(_b = o2 === null || o2 === void 0 ? void 0 : o2[key]) !== null && _b !== void 0 ? _b : []]);
      return mergedObject;
    }, "mergeObjectsOfDecorators");
    mergePropertyAndMethodDecorators = /* @__PURE__ */ __name((d1, d2) => {
      var _a, _b, _c, _d;
      return {
        property: mergeObjectsOfDecorators((_a = d1 === null || d1 === void 0 ? void 0 : d1.property) !== null && _a !== void 0 ? _a : {}, (_b = d2 === null || d2 === void 0 ? void 0 : d2.property) !== null && _b !== void 0 ? _b : {}),
        method: mergeObjectsOfDecorators((_c = d1 === null || d1 === void 0 ? void 0 : d1.method) !== null && _c !== void 0 ? _c : {}, (_d = d2 === null || d2 === void 0 ? void 0 : d2.method) !== null && _d !== void 0 ? _d : {})
      };
    }, "mergePropertyAndMethodDecorators");
    mergeDecorators = /* @__PURE__ */ __name((d1, d2) => {
      var _a, _b, _c, _d, _e, _f;
      return {
        class: unique([...(_a = d1 === null || d1 === void 0 ? void 0 : d1.class) !== null && _a !== void 0 ? _a : [], ...(_b = d2 === null || d2 === void 0 ? void 0 : d2.class) !== null && _b !== void 0 ? _b : []]),
        static: mergePropertyAndMethodDecorators((_c = d1 === null || d1 === void 0 ? void 0 : d1.static) !== null && _c !== void 0 ? _c : {}, (_d = d2 === null || d2 === void 0 ? void 0 : d2.static) !== null && _d !== void 0 ? _d : {}),
        instance: mergePropertyAndMethodDecorators((_e = d1 === null || d1 === void 0 ? void 0 : d1.instance) !== null && _e !== void 0 ? _e : {}, (_f = d2 === null || d2 === void 0 ? void 0 : d2.instance) !== null && _f !== void 0 ? _f : {})
      };
    }, "mergeDecorators");
    decorators = /* @__PURE__ */ new Map();
    findAllConstituentClasses = /* @__PURE__ */ __name((...classes) => {
      var _a;
      const allClasses = /* @__PURE__ */ new Set();
      const frontier = /* @__PURE__ */ new Set([...classes]);
      while (frontier.size > 0) {
        for (let clazz of frontier) {
          const protoChainClasses = protoChain(clazz.prototype).map((proto) => proto.constructor);
          const mixinClasses = (_a = getMixinsForClass(clazz)) !== null && _a !== void 0 ? _a : [];
          const potentiallyNewClasses = [...protoChainClasses, ...mixinClasses];
          const newClasses = potentiallyNewClasses.filter((c2) => !allClasses.has(c2));
          for (let newClass of newClasses)
            frontier.add(newClass);
          allClasses.add(clazz);
          frontier.delete(clazz);
        }
      }
      return [...allClasses];
    }, "findAllConstituentClasses");
    deepDecoratorSearch = /* @__PURE__ */ __name((...classes) => {
      const decoratorsForClassChain = findAllConstituentClasses(...classes).map((clazz) => decorators.get(clazz)).filter((decorators2) => !!decorators2);
      if (decoratorsForClassChain.length == 0)
        return {};
      if (decoratorsForClassChain.length == 1)
        return decoratorsForClassChain[0];
      return decoratorsForClassChain.reduce((d1, d2) => mergeDecorators(d1, d2));
    }, "deepDecoratorSearch");
    directDecoratorSearch = /* @__PURE__ */ __name((...classes) => {
      const classDecorators = classes.map((clazz) => getDecoratorsForClass(clazz));
      if (classDecorators.length === 0)
        return {};
      if (classDecorators.length === 1)
        return classDecorators[0];
      return classDecorators.reduce((d1, d2) => mergeDecorators(d1, d2));
    }, "directDecoratorSearch");
    getDecoratorsForClass = /* @__PURE__ */ __name((clazz) => {
      let decoratorsForClass = decorators.get(clazz);
      if (!decoratorsForClass) {
        decoratorsForClass = {};
        decorators.set(clazz, decoratorsForClass);
      }
      return decoratorsForClass;
    }, "getDecoratorsForClass");
    decorateClass = /* @__PURE__ */ __name((decorator) => (clazz) => {
      const decoratorsForClass = getDecoratorsForClass(clazz);
      let classDecorators = decoratorsForClass.class;
      if (!classDecorators) {
        classDecorators = [];
        decoratorsForClass.class = classDecorators;
      }
      classDecorators.push(decorator);
      return decorator(clazz);
    }, "decorateClass");
    decorateMember = /* @__PURE__ */ __name((decorator) => (object, key, ...otherArgs) => {
      var _a, _b, _c;
      const decoratorTargetType = typeof object === "function" ? "static" : "instance";
      const decoratorType = typeof object[key] === "function" ? "method" : "property";
      const clazz = decoratorTargetType === "static" ? object : object.constructor;
      const decoratorsForClass = getDecoratorsForClass(clazz);
      const decoratorsForTargetType = (_a = decoratorsForClass === null || decoratorsForClass === void 0 ? void 0 : decoratorsForClass[decoratorTargetType]) !== null && _a !== void 0 ? _a : {};
      decoratorsForClass[decoratorTargetType] = decoratorsForTargetType;
      let decoratorsForType = (_b = decoratorsForTargetType === null || decoratorsForTargetType === void 0 ? void 0 : decoratorsForTargetType[decoratorType]) !== null && _b !== void 0 ? _b : {};
      decoratorsForTargetType[decoratorType] = decoratorsForType;
      let decoratorsForKey = (_c = decoratorsForType === null || decoratorsForType === void 0 ? void 0 : decoratorsForType[key]) !== null && _c !== void 0 ? _c : [];
      decoratorsForType[key] = decoratorsForKey;
      decoratorsForKey.push(decorator);
      return decorator(object, key, ...otherArgs);
    }, "decorateMember");
    decorate = /* @__PURE__ */ __name((decorator) => (...args) => {
      if (args.length === 1)
        return decorateClass(decorator)(args[0]);
      return decorateMember(decorator)(...args);
    }, "decorate");
    __name(Mixin, "Mixin");
    applyPropAndMethodDecorators = /* @__PURE__ */ __name((propAndMethodDecorators, target) => {
      const propDecorators = propAndMethodDecorators.property;
      const methodDecorators = propAndMethodDecorators.method;
      if (propDecorators)
        for (let key in propDecorators)
          for (let decorator of propDecorators[key])
            decorator(target, key);
      if (methodDecorators)
        for (let key in methodDecorators)
          for (let decorator of methodDecorators[key])
            decorator(target, key, Object.getOwnPropertyDescriptor(target, key));
    }, "applyPropAndMethodDecorators");
    mix = /* @__PURE__ */ __name((...ingredients) => (decoratedClass) => {
      const mixedClass = Mixin(...ingredients.concat([decoratedClass]));
      Object.defineProperty(mixedClass, "name", {
        value: decoratedClass.name,
        writable: false
      });
      return mixedClass;
    }, "mix");
  }
});

// node_modules/@discordjs/builders/dist/index.js
var require_dist4 = __commonJS({
  "node_modules/@discordjs/builders/dist/index.js"(exports, module) {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    var __create2 = Object.create;
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __getProtoOf2 = Object.getPrototypeOf;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __name2 = /* @__PURE__ */ __name((target, value) => __defProp2(target, "name", { value, configurable: true }), "__name");
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __reExport = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps2(target, mod, "default"), secondTarget && __copyProps2(secondTarget, mod, "default")), "__reExport");
    var __toESM2 = /* @__PURE__ */ __name((mod, isNodeMode, target) => (target = mod != null ? __create2(__getProtoOf2(mod)) : {}, __copyProps2(
      // If the importer is in node compatibility mode or this is not an ESM
      // file that has been converted to a CommonJS file using a Babel-
      // compatible transform (i.e. "__esModule" has not been set), then set
      // "default" to the CommonJS "module.exports" for node compatibility.
      isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: true }) : target,
      mod
    )), "__toESM");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var __decorateClass = /* @__PURE__ */ __name((decorators2, target, key, kind) => {
      var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc2(target, key) : target;
      for (var i = decorators2.length - 1, decorator; i >= 0; i--)
        if (decorator = decorators2[i])
          result = (kind ? decorator(target, key, result) : decorator(result)) || result;
      if (kind && result)
        __defProp2(target, key, result);
      return result;
    }, "__decorateClass");
    var src_exports = {};
    __export2(src_exports, {
      ActionRowBuilder: () => ActionRowBuilder,
      ApplicationCommandNumericOptionMinMaxValueMixin: () => ApplicationCommandNumericOptionMinMaxValueMixin,
      ApplicationCommandOptionBase: () => ApplicationCommandOptionBase,
      ApplicationCommandOptionChannelTypesMixin: () => ApplicationCommandOptionChannelTypesMixin,
      ApplicationCommandOptionWithAutocompleteMixin: () => ApplicationCommandOptionWithAutocompleteMixin,
      ApplicationCommandOptionWithChoicesMixin: () => ApplicationCommandOptionWithChoicesMixin,
      BaseSelectMenuBuilder: () => BaseSelectMenuBuilder,
      ButtonBuilder: () => ButtonBuilder,
      ChannelSelectMenuBuilder: () => ChannelSelectMenuBuilder,
      ComponentAssertions: () => Assertions_exports2,
      ComponentBuilder: () => ComponentBuilder,
      ContextMenuCommandAssertions: () => Assertions_exports6,
      ContextMenuCommandBuilder: () => ContextMenuCommandBuilder,
      EmbedAssertions: () => Assertions_exports,
      EmbedBuilder: () => EmbedBuilder,
      MentionableSelectMenuBuilder: () => MentionableSelectMenuBuilder,
      ModalAssertions: () => Assertions_exports4,
      ModalBuilder: () => ModalBuilder,
      RoleSelectMenuBuilder: () => RoleSelectMenuBuilder,
      SelectMenuBuilder: () => StringSelectMenuBuilder,
      SelectMenuOptionBuilder: () => StringSelectMenuOptionBuilder,
      SharedNameAndDescription: () => SharedNameAndDescription,
      SharedSlashCommand: () => SharedSlashCommand,
      SharedSlashCommandOptions: () => SharedSlashCommandOptions,
      SharedSlashCommandSubcommands: () => SharedSlashCommandSubcommands,
      SlashCommandAssertions: () => Assertions_exports5,
      SlashCommandAttachmentOption: () => SlashCommandAttachmentOption,
      SlashCommandBooleanOption: () => SlashCommandBooleanOption,
      SlashCommandBuilder: () => SlashCommandBuilder,
      SlashCommandChannelOption: () => SlashCommandChannelOption,
      SlashCommandIntegerOption: () => SlashCommandIntegerOption,
      SlashCommandMentionableOption: () => SlashCommandMentionableOption,
      SlashCommandNumberOption: () => SlashCommandNumberOption,
      SlashCommandRoleOption: () => SlashCommandRoleOption,
      SlashCommandStringOption: () => SlashCommandStringOption,
      SlashCommandSubcommandBuilder: () => SlashCommandSubcommandBuilder,
      SlashCommandSubcommandGroupBuilder: () => SlashCommandSubcommandGroupBuilder,
      SlashCommandUserOption: () => SlashCommandUserOption,
      StringSelectMenuBuilder: () => StringSelectMenuBuilder,
      StringSelectMenuOptionBuilder: () => StringSelectMenuOptionBuilder,
      TextInputAssertions: () => Assertions_exports3,
      TextInputBuilder: () => TextInputBuilder,
      UserSelectMenuBuilder: () => UserSelectMenuBuilder,
      createComponentBuilder: () => createComponentBuilder,
      disableValidators: () => disableValidators,
      embedLength: () => embedLength,
      enableValidators: () => enableValidators,
      isValidationEnabled: () => isValidationEnabled,
      normalizeArray: () => normalizeArray,
      version: () => version
    });
    module.exports = __toCommonJS2(src_exports);
    var Assertions_exports = {};
    __export2(Assertions_exports, {
      RGBPredicate: () => RGBPredicate,
      authorNamePredicate: () => authorNamePredicate,
      colorPredicate: () => colorPredicate,
      descriptionPredicate: () => descriptionPredicate,
      embedAuthorPredicate: () => embedAuthorPredicate,
      embedFieldPredicate: () => embedFieldPredicate,
      embedFieldsArrayPredicate: () => embedFieldsArrayPredicate,
      embedFooterPredicate: () => embedFooterPredicate,
      fieldInlinePredicate: () => fieldInlinePredicate,
      fieldLengthPredicate: () => fieldLengthPredicate,
      fieldNamePredicate: () => fieldNamePredicate,
      fieldValuePredicate: () => fieldValuePredicate,
      footerTextPredicate: () => footerTextPredicate,
      imageURLPredicate: () => imageURLPredicate,
      timestampPredicate: () => timestampPredicate,
      titlePredicate: () => titlePredicate,
      urlPredicate: () => urlPredicate,
      validateFieldLength: () => validateFieldLength
    });
    var import_shapeshift = require_cjs();
    var validate = true;
    function enableValidators() {
      return validate = true;
    }
    __name(enableValidators, "enableValidators");
    __name2(enableValidators, "enableValidators");
    function disableValidators() {
      return validate = false;
    }
    __name(disableValidators, "disableValidators");
    __name2(disableValidators, "disableValidators");
    function isValidationEnabled() {
      return validate;
    }
    __name(isValidationEnabled, "isValidationEnabled");
    __name2(isValidationEnabled, "isValidationEnabled");
    var fieldNamePredicate = import_shapeshift.s.string().lengthLessThanOrEqual(256).setValidationEnabled(isValidationEnabled);
    var fieldValuePredicate = import_shapeshift.s.string().lengthLessThanOrEqual(1024).setValidationEnabled(isValidationEnabled);
    var fieldInlinePredicate = import_shapeshift.s.boolean().optional();
    var embedFieldPredicate = import_shapeshift.s.object({
      name: fieldNamePredicate,
      value: fieldValuePredicate,
      inline: fieldInlinePredicate
    }).setValidationEnabled(isValidationEnabled);
    var embedFieldsArrayPredicate = embedFieldPredicate.array().setValidationEnabled(isValidationEnabled);
    var fieldLengthPredicate = import_shapeshift.s.number().lessThanOrEqual(25).setValidationEnabled(isValidationEnabled);
    function validateFieldLength(amountAdding, fields) {
      fieldLengthPredicate.parse((fields?.length ?? 0) + amountAdding);
    }
    __name(validateFieldLength, "validateFieldLength");
    __name2(validateFieldLength, "validateFieldLength");
    var authorNamePredicate = fieldNamePredicate.lengthGreaterThanOrEqual(1).nullable().setValidationEnabled(isValidationEnabled);
    var imageURLPredicate = import_shapeshift.s.string().url({
      allowedProtocols: ["http:", "https:", "attachment:"]
    }).nullish().setValidationEnabled(isValidationEnabled);
    var urlPredicate = import_shapeshift.s.string().url({
      allowedProtocols: ["http:", "https:"]
    }).nullish().setValidationEnabled(isValidationEnabled);
    var embedAuthorPredicate = import_shapeshift.s.object({
      name: authorNamePredicate,
      iconURL: imageURLPredicate,
      url: urlPredicate
    }).setValidationEnabled(isValidationEnabled);
    var RGBPredicate = import_shapeshift.s.number().int().greaterThanOrEqual(0).lessThanOrEqual(255).setValidationEnabled(isValidationEnabled);
    var colorPredicate = import_shapeshift.s.number().int().greaterThanOrEqual(0).lessThanOrEqual(16777215).or(import_shapeshift.s.tuple([RGBPredicate, RGBPredicate, RGBPredicate])).nullable().setValidationEnabled(isValidationEnabled);
    var descriptionPredicate = import_shapeshift.s.string().lengthGreaterThanOrEqual(1).lengthLessThanOrEqual(4096).nullable().setValidationEnabled(isValidationEnabled);
    var footerTextPredicate = import_shapeshift.s.string().lengthGreaterThanOrEqual(1).lengthLessThanOrEqual(2048).nullable().setValidationEnabled(isValidationEnabled);
    var embedFooterPredicate = import_shapeshift.s.object({
      text: footerTextPredicate,
      iconURL: imageURLPredicate
    }).setValidationEnabled(isValidationEnabled);
    var timestampPredicate = import_shapeshift.s.union([import_shapeshift.s.number(), import_shapeshift.s.date()]).nullable().setValidationEnabled(isValidationEnabled);
    var titlePredicate = fieldNamePredicate.lengthGreaterThanOrEqual(1).nullable().setValidationEnabled(isValidationEnabled);
    function normalizeArray(arr) {
      if (Array.isArray(arr[0]))
        return [...arr[0]];
      return arr;
    }
    __name(normalizeArray, "normalizeArray");
    __name2(normalizeArray, "normalizeArray");
    var EmbedBuilder = /* @__PURE__ */ __name(class {
      static {
        __name2(this, "EmbedBuilder");
      }
      /**
       * The API data associated with this embed.
       */
      data;
      /**
       * Creates a new embed from API data.
       *
       * @param data - The API data to create this embed with
       */
      constructor(data = {}) {
        this.data = { ...data };
        if (data.timestamp)
          this.data.timestamp = new Date(data.timestamp).toISOString();
      }
      /**
       * Appends fields to the embed.
       *
       * @remarks
       * This method accepts either an array of fields or a variable number of field parameters.
       * The maximum amount of fields that can be added is 25.
       * @example
       * Using an array:
       * ```ts
       * const fields: APIEmbedField[] = ...;
       * const embed = new EmbedBuilder()
       * 	.addFields(fields);
       * ```
       * @example
       * Using rest parameters (variadic):
       * ```ts
       * const embed = new EmbedBuilder()
       * 	.addFields(
       * 		{ name: 'Field 1', value: 'Value 1' },
       * 		{ name: 'Field 2', value: 'Value 2' },
       * 	);
       * ```
       * @param fields - The fields to add
       */
      addFields(...fields) {
        const normalizedFields = normalizeArray(fields);
        validateFieldLength(normalizedFields.length, this.data.fields);
        embedFieldsArrayPredicate.parse(normalizedFields);
        if (this.data.fields)
          this.data.fields.push(...normalizedFields);
        else
          this.data.fields = normalizedFields;
        return this;
      }
      /**
       * Removes, replaces, or inserts fields for this embed.
       *
       * @remarks
       * This method behaves similarly
       * to {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice | Array.prototype.splice()}.
       * The maximum amount of fields that can be added is 25.
       *
       * It's useful for modifying and adjusting order of the already-existing fields of an embed.
       * @example
       * Remove the first field:
       * ```ts
       * embed.spliceFields(0, 1);
       * ```
       * @example
       * Remove the first n fields:
       * ```ts
       * const n = 4;
       * embed.spliceFields(0, n);
       * ```
       * @example
       * Remove the last field:
       * ```ts
       * embed.spliceFields(-1, 1);
       * ```
       * @param index - The index to start at
       * @param deleteCount - The number of fields to remove
       * @param fields - The replacing field objects
       */
      spliceFields(index, deleteCount, ...fields) {
        validateFieldLength(fields.length - deleteCount, this.data.fields);
        embedFieldsArrayPredicate.parse(fields);
        if (this.data.fields)
          this.data.fields.splice(index, deleteCount, ...fields);
        else
          this.data.fields = fields;
        return this;
      }
      /**
       * Sets the fields for this embed.
       *
       * @remarks
       * This method is an alias for {@link EmbedBuilder.spliceFields}. More specifically,
       * it splices the entire array of fields, replacing them with the provided fields.
       *
       * You can set a maximum of 25 fields.
       * @param fields - The fields to set
       */
      setFields(...fields) {
        this.spliceFields(0, this.data.fields?.length ?? 0, ...normalizeArray(fields));
        return this;
      }
      /**
       * Sets the author of this embed.
       *
       * @param options - The options to use
       */
      setAuthor(options) {
        if (options === null) {
          this.data.author = void 0;
          return this;
        }
        embedAuthorPredicate.parse(options);
        this.data.author = { name: options.name, url: options.url, icon_url: options.iconURL };
        return this;
      }
      /**
       * Sets the color of this embed.
       *
       * @param color - The color to use
       */
      setColor(color) {
        colorPredicate.parse(color);
        if (Array.isArray(color)) {
          const [red, green, blue] = color;
          this.data.color = (red << 16) + (green << 8) + blue;
          return this;
        }
        this.data.color = color ?? void 0;
        return this;
      }
      /**
       * Sets the description of this embed.
       *
       * @param description - The description to use
       */
      setDescription(description) {
        descriptionPredicate.parse(description);
        this.data.description = description ?? void 0;
        return this;
      }
      /**
       * Sets the footer of this embed.
       *
       * @param options - The footer to use
       */
      setFooter(options) {
        if (options === null) {
          this.data.footer = void 0;
          return this;
        }
        embedFooterPredicate.parse(options);
        this.data.footer = { text: options.text, icon_url: options.iconURL };
        return this;
      }
      /**
       * Sets the image of this embed.
       *
       * @param url - The image URL to use
       */
      setImage(url) {
        imageURLPredicate.parse(url);
        this.data.image = url ? { url } : void 0;
        return this;
      }
      /**
       * Sets the thumbnail of this embed.
       *
       * @param url - The thumbnail URL to use
       */
      setThumbnail(url) {
        imageURLPredicate.parse(url);
        this.data.thumbnail = url ? { url } : void 0;
        return this;
      }
      /**
       * Sets the timestamp of this embed.
       *
       * @param timestamp - The timestamp or date to use
       */
      setTimestamp(timestamp = Date.now()) {
        timestampPredicate.parse(timestamp);
        this.data.timestamp = timestamp ? new Date(timestamp).toISOString() : void 0;
        return this;
      }
      /**
       * Sets the title for this embed.
       *
       * @param title - The title to use
       */
      setTitle(title) {
        titlePredicate.parse(title);
        this.data.title = title ?? void 0;
        return this;
      }
      /**
       * Sets the URL of this embed.
       *
       * @param url - The URL to use
       */
      setURL(url) {
        urlPredicate.parse(url);
        this.data.url = url ?? void 0;
        return this;
      }
      /**
       * Serializes this builder to API-compatible JSON data.
       *
       * @remarks
       * This method runs validations on the data before serializing it.
       * As such, it may throw an error if the data is invalid.
       */
      toJSON() {
        return { ...this.data };
      }
    }, "EmbedBuilder");
    __reExport(src_exports, require_dist2(), module.exports);
    var Assertions_exports2 = {};
    __export2(Assertions_exports2, {
      buttonLabelValidator: () => buttonLabelValidator,
      buttonStyleValidator: () => buttonStyleValidator,
      channelTypesValidator: () => channelTypesValidator,
      customIdValidator: () => customIdValidator,
      defaultValidator: () => defaultValidator,
      disabledValidator: () => disabledValidator,
      emojiValidator: () => emojiValidator,
      jsonOptionValidator: () => jsonOptionValidator,
      labelValueDescriptionValidator: () => labelValueDescriptionValidator,
      minMaxValidator: () => minMaxValidator,
      optionValidator: () => optionValidator,
      optionsLengthValidator: () => optionsLengthValidator,
      optionsValidator: () => optionsValidator,
      placeholderValidator: () => placeholderValidator,
      urlValidator: () => urlValidator,
      validateRequiredButtonParameters: () => validateRequiredButtonParameters,
      validateRequiredSelectMenuOptionParameters: () => validateRequiredSelectMenuOptionParameters,
      validateRequiredSelectMenuParameters: () => validateRequiredSelectMenuParameters
    });
    var import_shapeshift2 = require_cjs();
    var import_v10 = require_v106();
    var StringSelectMenuOptionBuilder = /* @__PURE__ */ __name(class {
      /**
       * Creates a new string select menu option from API data.
       *
       * @param data - The API data to create this string select menu option with
       * @example
       * Creating a string select menu option from an API data object:
       * ```ts
       * const selectMenuOption = new SelectMenuOptionBuilder({
       * 	label: 'catchy label',
       * 	value: '1',
       * });
       * ```
       * @example
       * Creating a string select menu option using setters and API data:
       * ```ts
       * const selectMenuOption = new SelectMenuOptionBuilder({
       * 	default: true,
       * 	value: '1',
       * })
       * 	.setLabel('woah');
       * ```
       */
      constructor(data = {}) {
        this.data = data;
      }
      static {
        __name2(this, "StringSelectMenuOptionBuilder");
      }
      /**
       * Sets the label for this option.
       *
       * @param label - The label to use
       */
      setLabel(label) {
        this.data.label = labelValueDescriptionValidator.parse(label);
        return this;
      }
      /**
       * Sets the value for this option.
       *
       * @param value - The value to use
       */
      setValue(value) {
        this.data.value = labelValueDescriptionValidator.parse(value);
        return this;
      }
      /**
       * Sets the description for this option.
       *
       * @param description - The description to use
       */
      setDescription(description) {
        this.data.description = labelValueDescriptionValidator.parse(description);
        return this;
      }
      /**
       * Sets whether this option is selected by default.
       *
       * @param isDefault - Whether this option is selected by default
       */
      setDefault(isDefault = true) {
        this.data.default = defaultValidator.parse(isDefault);
        return this;
      }
      /**
       * Sets the emoji to display for this option.
       *
       * @param emoji - The emoji to use
       */
      setEmoji(emoji) {
        this.data.emoji = emojiValidator.parse(emoji);
        return this;
      }
      /**
       * {@inheritDoc BaseSelectMenuBuilder.toJSON}
       */
      toJSON() {
        validateRequiredSelectMenuOptionParameters(this.data.label, this.data.value);
        return {
          ...this.data
        };
      }
    }, "StringSelectMenuOptionBuilder");
    var customIdValidator = import_shapeshift2.s.string().lengthGreaterThanOrEqual(1).lengthLessThanOrEqual(100).setValidationEnabled(isValidationEnabled);
    var emojiValidator = import_shapeshift2.s.object({
      id: import_shapeshift2.s.string(),
      name: import_shapeshift2.s.string(),
      animated: import_shapeshift2.s.boolean()
    }).partial().strict().setValidationEnabled(isValidationEnabled);
    var disabledValidator = import_shapeshift2.s.boolean();
    var buttonLabelValidator = import_shapeshift2.s.string().lengthGreaterThanOrEqual(1).lengthLessThanOrEqual(80).setValidationEnabled(isValidationEnabled);
    var buttonStyleValidator = import_shapeshift2.s.nativeEnum(import_v10.ButtonStyle);
    var placeholderValidator = import_shapeshift2.s.string().lengthLessThanOrEqual(150).setValidationEnabled(isValidationEnabled);
    var minMaxValidator = import_shapeshift2.s.number().int().greaterThanOrEqual(0).lessThanOrEqual(25).setValidationEnabled(isValidationEnabled);
    var labelValueDescriptionValidator = import_shapeshift2.s.string().lengthGreaterThanOrEqual(1).lengthLessThanOrEqual(100).setValidationEnabled(isValidationEnabled);
    var jsonOptionValidator = import_shapeshift2.s.object({
      label: labelValueDescriptionValidator,
      value: labelValueDescriptionValidator,
      description: labelValueDescriptionValidator.optional(),
      emoji: emojiValidator.optional(),
      default: import_shapeshift2.s.boolean().optional()
    }).setValidationEnabled(isValidationEnabled);
    var optionValidator = import_shapeshift2.s.instance(StringSelectMenuOptionBuilder).setValidationEnabled(isValidationEnabled);
    var optionsValidator = optionValidator.array().lengthGreaterThanOrEqual(0).setValidationEnabled(isValidationEnabled);
    var optionsLengthValidator = import_shapeshift2.s.number().int().greaterThanOrEqual(0).lessThanOrEqual(25).setValidationEnabled(isValidationEnabled);
    function validateRequiredSelectMenuParameters(options, customId) {
      customIdValidator.parse(customId);
      optionsValidator.parse(options);
    }
    __name(validateRequiredSelectMenuParameters, "validateRequiredSelectMenuParameters");
    __name2(validateRequiredSelectMenuParameters, "validateRequiredSelectMenuParameters");
    var defaultValidator = import_shapeshift2.s.boolean();
    function validateRequiredSelectMenuOptionParameters(label, value) {
      labelValueDescriptionValidator.parse(label);
      labelValueDescriptionValidator.parse(value);
    }
    __name(validateRequiredSelectMenuOptionParameters, "validateRequiredSelectMenuOptionParameters");
    __name2(validateRequiredSelectMenuOptionParameters, "validateRequiredSelectMenuOptionParameters");
    var channelTypesValidator = import_shapeshift2.s.nativeEnum(import_v10.ChannelType).array().setValidationEnabled(isValidationEnabled);
    var urlValidator = import_shapeshift2.s.string().url({
      allowedProtocols: ["http:", "https:", "discord:"]
    }).setValidationEnabled(isValidationEnabled);
    function validateRequiredButtonParameters(style, label, emoji, customId, skuId, url) {
      if (style === import_v10.ButtonStyle.Premium) {
        if (!skuId) {
          throw new RangeError("Premium buttons must have an SKU id.");
        }
        if (customId || label || url || emoji) {
          throw new RangeError("Premium buttons cannot have a custom id, label, URL, or emoji.");
        }
      } else {
        if (skuId) {
          throw new RangeError("Non-premium buttons must not have an SKU id.");
        }
        if (url && customId) {
          throw new RangeError("URL and custom id are mutually exclusive.");
        }
        if (!label && !emoji) {
          throw new RangeError("Non-premium buttons must have a label and/or an emoji.");
        }
        if (style === import_v10.ButtonStyle.Link) {
          if (!url) {
            throw new RangeError("Link buttons must have a URL.");
          }
        } else if (url) {
          throw new RangeError("Non-premium and non-link buttons cannot have a URL.");
        }
      }
    }
    __name(validateRequiredButtonParameters, "validateRequiredButtonParameters");
    __name2(validateRequiredButtonParameters, "validateRequiredButtonParameters");
    var import_v1011 = require_v106();
    var ComponentBuilder = /* @__PURE__ */ __name(class {
      static {
        __name2(this, "ComponentBuilder");
      }
      /**
       * The API data associated with this component.
       */
      data;
      /**
       * Constructs a new kind of component.
       *
       * @param data - The data to construct a component out of
       */
      constructor(data) {
        this.data = data;
      }
    }, "ComponentBuilder");
    var import_v1010 = require_v106();
    var import_v102 = require_v106();
    var ButtonBuilder = /* @__PURE__ */ __name(class extends ComponentBuilder {
      static {
        __name2(this, "ButtonBuilder");
      }
      /**
       * Creates a new button from API data.
       *
       * @param data - The API data to create this button with
       * @example
       * Creating a button from an API data object:
       * ```ts
       * const button = new ButtonBuilder({
       * 	custom_id: 'a cool button',
       * 	style: ButtonStyle.Primary,
       * 	label: 'Click Me',
       * 	emoji: {
       * 		name: 'smile',
       * 		id: '123456789012345678',
       * 	},
       * });
       * ```
       * @example
       * Creating a button using setters and API data:
       * ```ts
       * const button = new ButtonBuilder({
       * 	style: ButtonStyle.Secondary,
       * 	label: 'Click Me',
       * })
       * 	.setEmoji({ name: '🙂' })
       * 	.setCustomId('another cool button');
       * ```
       */
      constructor(data) {
        super({ type: import_v102.ComponentType.Button, ...data });
      }
      /**
       * Sets the style of this button.
       *
       * @param style - The style to use
       */
      setStyle(style) {
        this.data.style = buttonStyleValidator.parse(style);
        return this;
      }
      /**
       * Sets the URL for this button.
       *
       * @remarks
       * This method is only available to buttons using the `Link` button style.
       * Only three types of URL schemes are currently supported: `https://`, `http://`, and `discord://`.
       * @param url - The URL to use
       */
      setURL(url) {
        this.data.url = urlValidator.parse(url);
        return this;
      }
      /**
       * Sets the custom id for this button.
       *
       * @remarks
       * This method is only applicable to buttons that are not using the `Link` button style.
       * @param customId - The custom id to use
       */
      setCustomId(customId) {
        this.data.custom_id = customIdValidator.parse(customId);
        return this;
      }
      /**
       * Sets the SKU id that represents a purchasable SKU for this button.
       *
       * @remarks Only available when using premium-style buttons.
       * @param skuId - The SKU id to use
       */
      setSKUId(skuId) {
        this.data.sku_id = skuId;
        return this;
      }
      /**
       * Sets the emoji to display on this button.
       *
       * @param emoji - The emoji to use
       */
      setEmoji(emoji) {
        this.data.emoji = emojiValidator.parse(emoji);
        return this;
      }
      /**
       * Sets whether this button is disabled.
       *
       * @param disabled - Whether to disable this button
       */
      setDisabled(disabled = true) {
        this.data.disabled = disabledValidator.parse(disabled);
        return this;
      }
      /**
       * Sets the label for this button.
       *
       * @param label - The label to use
       */
      setLabel(label) {
        this.data.label = buttonLabelValidator.parse(label);
        return this;
      }
      /**
       * {@inheritDoc ComponentBuilder.toJSON}
       */
      toJSON() {
        validateRequiredButtonParameters(
          this.data.style,
          this.data.label,
          this.data.emoji,
          this.data.custom_id,
          this.data.sku_id,
          this.data.url
        );
        return {
          ...this.data
        };
      }
    }, "ButtonBuilder");
    var import_v103 = require_v106();
    var BaseSelectMenuBuilder = /* @__PURE__ */ __name(class extends ComponentBuilder {
      static {
        __name2(this, "BaseSelectMenuBuilder");
      }
      /**
       * Sets the placeholder for this select menu.
       *
       * @param placeholder - The placeholder to use
       */
      setPlaceholder(placeholder) {
        this.data.placeholder = placeholderValidator.parse(placeholder);
        return this;
      }
      /**
       * Sets the minimum values that must be selected in the select menu.
       *
       * @param minValues - The minimum values that must be selected
       */
      setMinValues(minValues) {
        this.data.min_values = minMaxValidator.parse(minValues);
        return this;
      }
      /**
       * Sets the maximum values that must be selected in the select menu.
       *
       * @param maxValues - The maximum values that must be selected
       */
      setMaxValues(maxValues) {
        this.data.max_values = minMaxValidator.parse(maxValues);
        return this;
      }
      /**
       * Sets the custom id for this select menu.
       *
       * @param customId - The custom id to use
       */
      setCustomId(customId) {
        this.data.custom_id = customIdValidator.parse(customId);
        return this;
      }
      /**
       * Sets whether this select menu is disabled.
       *
       * @param disabled - Whether this select menu is disabled
       */
      setDisabled(disabled = true) {
        this.data.disabled = disabledValidator.parse(disabled);
        return this;
      }
      /**
       * {@inheritDoc ComponentBuilder.toJSON}
       */
      toJSON() {
        customIdValidator.parse(this.data.custom_id);
        return {
          ...this.data
        };
      }
    }, "BaseSelectMenuBuilder");
    var ChannelSelectMenuBuilder = /* @__PURE__ */ __name(class extends BaseSelectMenuBuilder {
      static {
        __name2(this, "ChannelSelectMenuBuilder");
      }
      /**
       * Creates a new select menu from API data.
       *
       * @param data - The API data to create this select menu with
       * @example
       * Creating a select menu from an API data object:
       * ```ts
       * const selectMenu = new ChannelSelectMenuBuilder({
       * 	custom_id: 'a cool select menu',
       * 	placeholder: 'select an option',
       * 	max_values: 2,
       * });
       * ```
       * @example
       * Creating a select menu using setters and API data:
       * ```ts
       * const selectMenu = new ChannelSelectMenuBuilder({
       * 	custom_id: 'a cool select menu',
       * })
       * 	.addChannelTypes(ChannelType.GuildText, ChannelType.GuildAnnouncement)
       * 	.setMinValues(2);
       * ```
       */
      constructor(data) {
        super({ ...data, type: import_v103.ComponentType.ChannelSelect });
      }
      /**
       * Adds channel types to this select menu.
       *
       * @param types - The channel types to use
       */
      addChannelTypes(...types) {
        const normalizedTypes = normalizeArray(types);
        this.data.channel_types ??= [];
        this.data.channel_types.push(...channelTypesValidator.parse(normalizedTypes));
        return this;
      }
      /**
       * Sets channel types for this select menu.
       *
       * @param types - The channel types to use
       */
      setChannelTypes(...types) {
        const normalizedTypes = normalizeArray(types);
        this.data.channel_types ??= [];
        this.data.channel_types.splice(0, this.data.channel_types.length, ...channelTypesValidator.parse(normalizedTypes));
        return this;
      }
      /**
       * Adds default channels to this auto populated select menu.
       *
       * @param channels - The channels to add
       */
      addDefaultChannels(...channels) {
        const normalizedValues = normalizeArray(channels);
        optionsLengthValidator.parse((this.data.default_values?.length ?? 0) + normalizedValues.length);
        this.data.default_values ??= [];
        this.data.default_values.push(
          ...normalizedValues.map((id) => ({
            id,
            type: import_v103.SelectMenuDefaultValueType.Channel
          }))
        );
        return this;
      }
      /**
       * Sets default channels for this auto populated select menu.
       *
       * @param channels - The channels to set
       */
      setDefaultChannels(...channels) {
        const normalizedValues = normalizeArray(channels);
        optionsLengthValidator.parse(normalizedValues.length);
        this.data.default_values = normalizedValues.map((id) => ({
          id,
          type: import_v103.SelectMenuDefaultValueType.Channel
        }));
        return this;
      }
      /**
       * {@inheritDoc BaseSelectMenuBuilder.toJSON}
       */
      toJSON() {
        customIdValidator.parse(this.data.custom_id);
        return {
          ...this.data
        };
      }
    }, "ChannelSelectMenuBuilder");
    var import_v104 = require_v106();
    var MentionableSelectMenuBuilder = /* @__PURE__ */ __name(class extends BaseSelectMenuBuilder {
      static {
        __name2(this, "MentionableSelectMenuBuilder");
      }
      /**
       * Creates a new select menu from API data.
       *
       * @param data - The API data to create this select menu with
       * @example
       * Creating a select menu from an API data object:
       * ```ts
       * const selectMenu = new MentionableSelectMenuBuilder({
       * 	custom_id: 'a cool select menu',
       * 	placeholder: 'select an option',
       * 	max_values: 2,
       * });
       * ```
       * @example
       * Creating a select menu using setters and API data:
       * ```ts
       * const selectMenu = new MentionableSelectMenuBuilder({
       * 	custom_id: 'a cool select menu',
       * })
       * 	.setMinValues(1);
       * ```
       */
      constructor(data) {
        super({ ...data, type: import_v104.ComponentType.MentionableSelect });
      }
      /**
       * Adds default roles to this auto populated select menu.
       *
       * @param roles - The roles to add
       */
      addDefaultRoles(...roles) {
        const normalizedValues = normalizeArray(roles);
        optionsLengthValidator.parse((this.data.default_values?.length ?? 0) + normalizedValues.length);
        this.data.default_values ??= [];
        this.data.default_values.push(
          ...normalizedValues.map((id) => ({
            id,
            type: import_v104.SelectMenuDefaultValueType.Role
          }))
        );
        return this;
      }
      /**
       * Adds default users to this auto populated select menu.
       *
       * @param users - The users to add
       */
      addDefaultUsers(...users) {
        const normalizedValues = normalizeArray(users);
        optionsLengthValidator.parse((this.data.default_values?.length ?? 0) + normalizedValues.length);
        this.data.default_values ??= [];
        this.data.default_values.push(
          ...normalizedValues.map((id) => ({
            id,
            type: import_v104.SelectMenuDefaultValueType.User
          }))
        );
        return this;
      }
      /**
       * Adds default values to this auto populated select menu.
       *
       * @param values - The values to add
       */
      addDefaultValues(...values) {
        const normalizedValues = normalizeArray(values);
        optionsLengthValidator.parse((this.data.default_values?.length ?? 0) + normalizedValues.length);
        this.data.default_values ??= [];
        this.data.default_values.push(...normalizedValues);
        return this;
      }
      /**
       * Sets default values for this auto populated select menu.
       *
       * @param values - The values to set
       */
      setDefaultValues(...values) {
        const normalizedValues = normalizeArray(values);
        optionsLengthValidator.parse(normalizedValues.length);
        this.data.default_values = normalizedValues;
        return this;
      }
    }, "MentionableSelectMenuBuilder");
    var import_v105 = require_v106();
    var RoleSelectMenuBuilder = /* @__PURE__ */ __name(class extends BaseSelectMenuBuilder {
      static {
        __name2(this, "RoleSelectMenuBuilder");
      }
      /**
       * Creates a new select menu from API data.
       *
       * @param data - The API data to create this select menu with
       * @example
       * Creating a select menu from an API data object:
       * ```ts
       * const selectMenu = new RoleSelectMenuBuilder({
       * 	custom_id: 'a cool select menu',
       * 	placeholder: 'select an option',
       * 	max_values: 2,
       * });
       * ```
       * @example
       * Creating a select menu using setters and API data:
       * ```ts
       * const selectMenu = new RoleSelectMenuBuilder({
       * 	custom_id: 'a cool select menu',
       * })
       * 	.setMinValues(1);
       * ```
       */
      constructor(data) {
        super({ ...data, type: import_v105.ComponentType.RoleSelect });
      }
      /**
       * Adds default roles to this auto populated select menu.
       *
       * @param roles - The roles to add
       */
      addDefaultRoles(...roles) {
        const normalizedValues = normalizeArray(roles);
        optionsLengthValidator.parse((this.data.default_values?.length ?? 0) + normalizedValues.length);
        this.data.default_values ??= [];
        this.data.default_values.push(
          ...normalizedValues.map((id) => ({
            id,
            type: import_v105.SelectMenuDefaultValueType.Role
          }))
        );
        return this;
      }
      /**
       * Sets default roles for this auto populated select menu.
       *
       * @param roles - The roles to set
       */
      setDefaultRoles(...roles) {
        const normalizedValues = normalizeArray(roles);
        optionsLengthValidator.parse(normalizedValues.length);
        this.data.default_values = normalizedValues.map((id) => ({
          id,
          type: import_v105.SelectMenuDefaultValueType.Role
        }));
        return this;
      }
    }, "RoleSelectMenuBuilder");
    var import_v106 = require_v106();
    var StringSelectMenuBuilder = /* @__PURE__ */ __name(class extends BaseSelectMenuBuilder {
      static {
        __name2(this, "StringSelectMenuBuilder");
      }
      /**
       * The options within this select menu.
       */
      options;
      /**
       * Creates a new select menu from API data.
       *
       * @param data - The API data to create this select menu with
       * @example
       * Creating a select menu from an API data object:
       * ```ts
       * const selectMenu = new StringSelectMenuBuilder({
       * 	custom_id: 'a cool select menu',
       * 	placeholder: 'select an option',
       * 	max_values: 2,
       * 	options: [
       * 		{ label: 'option 1', value: '1' },
       * 		{ label: 'option 2', value: '2' },
       * 		{ label: 'option 3', value: '3' },
       * 	],
       * });
       * ```
       * @example
       * Creating a select menu using setters and API data:
       * ```ts
       * const selectMenu = new StringSelectMenuBuilder({
       * 	custom_id: 'a cool select menu',
       * })
       * 	.setMinValues(1)
       * 	.addOptions({
       * 		label: 'Catchy',
       * 		value: 'catch',
       * 	});
       * ```
       */
      constructor(data) {
        const { options, ...initData } = data ?? {};
        super({ ...initData, type: import_v106.ComponentType.StringSelect });
        this.options = options?.map((option) => new StringSelectMenuOptionBuilder(option)) ?? [];
      }
      /**
       * Adds options to this select menu.
       *
       * @param options - The options to add
       */
      addOptions(...options) {
        const normalizedOptions = normalizeArray(options);
        optionsLengthValidator.parse(this.options.length + normalizedOptions.length);
        this.options.push(
          ...normalizedOptions.map(
            (normalizedOption) => normalizedOption instanceof StringSelectMenuOptionBuilder ? normalizedOption : new StringSelectMenuOptionBuilder(jsonOptionValidator.parse(normalizedOption))
          )
        );
        return this;
      }
      /**
       * Sets the options for this select menu.
       *
       * @param options - The options to set
       */
      setOptions(...options) {
        return this.spliceOptions(0, this.options.length, ...options);
      }
      /**
       * Removes, replaces, or inserts options for this select menu.
       *
       * @remarks
       * This method behaves similarly
       * to {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice | Array.prototype.splice()}.
       * It's useful for modifying and adjusting the order of existing options.
       * @example
       * Remove the first option:
       * ```ts
       * selectMenu.spliceOptions(0, 1);
       * ```
       * @example
       * Remove the first n option:
       * ```ts
       * const n = 4;
       * selectMenu.spliceOptions(0, n);
       * ```
       * @example
       * Remove the last option:
       * ```ts
       * selectMenu.spliceOptions(-1, 1);
       * ```
       * @param index - The index to start at
       * @param deleteCount - The number of options to remove
       * @param options - The replacing option objects or builders
       */
      spliceOptions(index, deleteCount, ...options) {
        const normalizedOptions = normalizeArray(options);
        const clone = [...this.options];
        clone.splice(
          index,
          deleteCount,
          ...normalizedOptions.map(
            (normalizedOption) => normalizedOption instanceof StringSelectMenuOptionBuilder ? normalizedOption : new StringSelectMenuOptionBuilder(jsonOptionValidator.parse(normalizedOption))
          )
        );
        optionsLengthValidator.parse(clone.length);
        this.options.splice(0, this.options.length, ...clone);
        return this;
      }
      /**
       * {@inheritDoc BaseSelectMenuBuilder.toJSON}
       */
      toJSON() {
        validateRequiredSelectMenuParameters(this.options, this.data.custom_id);
        return {
          ...this.data,
          options: this.options.map((option) => option.toJSON())
        };
      }
    }, "StringSelectMenuBuilder");
    var import_v107 = require_v106();
    var UserSelectMenuBuilder = /* @__PURE__ */ __name(class extends BaseSelectMenuBuilder {
      static {
        __name2(this, "UserSelectMenuBuilder");
      }
      /**
       * Creates a new select menu from API data.
       *
       * @param data - The API data to create this select menu with
       * @example
       * Creating a select menu from an API data object:
       * ```ts
       * const selectMenu = new UserSelectMenuBuilder({
       * 	custom_id: 'a cool select menu',
       * 	placeholder: 'select an option',
       * 	max_values: 2,
       * });
       * ```
       * @example
       * Creating a select menu using setters and API data:
       * ```ts
       * const selectMenu = new UserSelectMenuBuilder({
       * 	custom_id: 'a cool select menu',
       * })
       * 	.setMinValues(1);
       * ```
       */
      constructor(data) {
        super({ ...data, type: import_v107.ComponentType.UserSelect });
      }
      /**
       * Adds default users to this auto populated select menu.
       *
       * @param users - The users to add
       */
      addDefaultUsers(...users) {
        const normalizedValues = normalizeArray(users);
        optionsLengthValidator.parse((this.data.default_values?.length ?? 0) + normalizedValues.length);
        this.data.default_values ??= [];
        this.data.default_values.push(
          ...normalizedValues.map((id) => ({
            id,
            type: import_v107.SelectMenuDefaultValueType.User
          }))
        );
        return this;
      }
      /**
       * Sets default users for this auto populated select menu.
       *
       * @param users - The users to set
       */
      setDefaultUsers(...users) {
        const normalizedValues = normalizeArray(users);
        optionsLengthValidator.parse(normalizedValues.length);
        this.data.default_values = normalizedValues.map((id) => ({
          id,
          type: import_v107.SelectMenuDefaultValueType.User
        }));
        return this;
      }
    }, "UserSelectMenuBuilder");
    var import_util = require_dist3();
    var import_v109 = require_v106();
    var import_fast_deep_equal = __toESM2(require_fast_deep_equal());
    var Assertions_exports3 = {};
    __export2(Assertions_exports3, {
      labelValidator: () => labelValidator,
      maxLengthValidator: () => maxLengthValidator,
      minLengthValidator: () => minLengthValidator,
      placeholderValidator: () => placeholderValidator2,
      requiredValidator: () => requiredValidator,
      textInputStyleValidator: () => textInputStyleValidator,
      validateRequiredParameters: () => validateRequiredParameters,
      valueValidator: () => valueValidator
    });
    var import_shapeshift3 = require_cjs();
    var import_v108 = require_v106();
    var textInputStyleValidator = import_shapeshift3.s.nativeEnum(import_v108.TextInputStyle);
    var minLengthValidator = import_shapeshift3.s.number().int().greaterThanOrEqual(0).lessThanOrEqual(4e3).setValidationEnabled(isValidationEnabled);
    var maxLengthValidator = import_shapeshift3.s.number().int().greaterThanOrEqual(1).lessThanOrEqual(4e3).setValidationEnabled(isValidationEnabled);
    var requiredValidator = import_shapeshift3.s.boolean();
    var valueValidator = import_shapeshift3.s.string().lengthLessThanOrEqual(4e3).setValidationEnabled(isValidationEnabled);
    var placeholderValidator2 = import_shapeshift3.s.string().lengthLessThanOrEqual(100).setValidationEnabled(isValidationEnabled);
    var labelValidator = import_shapeshift3.s.string().lengthGreaterThanOrEqual(1).lengthLessThanOrEqual(45).setValidationEnabled(isValidationEnabled);
    function validateRequiredParameters(customId, style, label) {
      customIdValidator.parse(customId);
      textInputStyleValidator.parse(style);
      labelValidator.parse(label);
    }
    __name(validateRequiredParameters, "validateRequiredParameters");
    __name2(validateRequiredParameters, "validateRequiredParameters");
    var TextInputBuilder = /* @__PURE__ */ __name(class extends ComponentBuilder {
      static {
        __name2(this, "TextInputBuilder");
      }
      /**
       * Creates a new text input from API data.
       *
       * @param data - The API data to create this text input with
       * @example
       * Creating a text input from an API data object:
       * ```ts
       * const textInput = new TextInputBuilder({
       * 	custom_id: 'a cool text input',
       * 	label: 'Type something',
       * 	style: TextInputStyle.Short,
       * });
       * ```
       * @example
       * Creating a text input using setters and API data:
       * ```ts
       * const textInput = new TextInputBuilder({
       * 	label: 'Type something else',
       * })
       * 	.setCustomId('woah')
       * 	.setStyle(TextInputStyle.Paragraph);
       * ```
       */
      constructor(data) {
        super({ type: import_v109.ComponentType.TextInput, ...data });
      }
      /**
       * Sets the custom id for this text input.
       *
       * @param customId - The custom id to use
       */
      setCustomId(customId) {
        this.data.custom_id = customIdValidator.parse(customId);
        return this;
      }
      /**
       * Sets the label for this text input.
       *
       * @param label - The label to use
       */
      setLabel(label) {
        this.data.label = labelValidator.parse(label);
        return this;
      }
      /**
       * Sets the style for this text input.
       *
       * @param style - The style to use
       */
      setStyle(style) {
        this.data.style = textInputStyleValidator.parse(style);
        return this;
      }
      /**
       * Sets the minimum length of text for this text input.
       *
       * @param minLength - The minimum length of text for this text input
       */
      setMinLength(minLength) {
        this.data.min_length = minLengthValidator.parse(minLength);
        return this;
      }
      /**
       * Sets the maximum length of text for this text input.
       *
       * @param maxLength - The maximum length of text for this text input
       */
      setMaxLength(maxLength) {
        this.data.max_length = maxLengthValidator.parse(maxLength);
        return this;
      }
      /**
       * Sets the placeholder for this text input.
       *
       * @param placeholder - The placeholder to use
       */
      setPlaceholder(placeholder) {
        this.data.placeholder = placeholderValidator2.parse(placeholder);
        return this;
      }
      /**
       * Sets the value for this text input.
       *
       * @param value - The value to use
       */
      setValue(value) {
        this.data.value = valueValidator.parse(value);
        return this;
      }
      /**
       * Sets whether this text input is required.
       *
       * @param required - Whether this text input is required
       */
      setRequired(required = true) {
        this.data.required = requiredValidator.parse(required);
        return this;
      }
      /**
       * {@inheritDoc ComponentBuilder.toJSON}
       */
      toJSON() {
        validateRequiredParameters(this.data.custom_id, this.data.style, this.data.label);
        return {
          ...this.data
        };
      }
      /**
       * Whether this is equal to another structure.
       */
      equals(other) {
        if ((0, import_util.isJSONEncodable)(other)) {
          return (0, import_fast_deep_equal.default)(other.toJSON(), this.data);
        }
        return (0, import_fast_deep_equal.default)(other, this.data);
      }
    }, "TextInputBuilder");
    function createComponentBuilder(data) {
      if (data instanceof ComponentBuilder) {
        return data;
      }
      switch (data.type) {
        case import_v1010.ComponentType.ActionRow:
          return new ActionRowBuilder(data);
        case import_v1010.ComponentType.Button:
          return new ButtonBuilder(data);
        case import_v1010.ComponentType.StringSelect:
          return new StringSelectMenuBuilder(data);
        case import_v1010.ComponentType.TextInput:
          return new TextInputBuilder(data);
        case import_v1010.ComponentType.UserSelect:
          return new UserSelectMenuBuilder(data);
        case import_v1010.ComponentType.RoleSelect:
          return new RoleSelectMenuBuilder(data);
        case import_v1010.ComponentType.MentionableSelect:
          return new MentionableSelectMenuBuilder(data);
        case import_v1010.ComponentType.ChannelSelect:
          return new ChannelSelectMenuBuilder(data);
        default:
          throw new Error(`Cannot properly serialize component type: ${data.type}`);
      }
    }
    __name(createComponentBuilder, "createComponentBuilder");
    __name2(createComponentBuilder, "createComponentBuilder");
    var ActionRowBuilder = /* @__PURE__ */ __name(class extends ComponentBuilder {
      static {
        __name2(this, "ActionRowBuilder");
      }
      /**
       * The components within this action row.
       */
      components;
      /**
       * Creates a new action row from API data.
       *
       * @param data - The API data to create this action row with
       * @example
       * Creating an action row from an API data object:
       * ```ts
       * const actionRow = new ActionRowBuilder({
       * 	components: [
       * 		{
       * 			custom_id: "custom id",
       * 			label: "Type something",
       * 			style: TextInputStyle.Short,
       * 			type: ComponentType.TextInput,
       * 		},
       * 	],
       * });
       * ```
       * @example
       * Creating an action row using setters and API data:
       * ```ts
       * const actionRow = new ActionRowBuilder({
       * 	components: [
       * 		{
       * 			custom_id: "custom id",
       * 			label: "Click me",
       * 			style: ButtonStyle.Primary,
       * 			type: ComponentType.Button,
       * 		},
       * 	],
       * })
       * 	.addComponents(button2, button3);
       * ```
       */
      constructor({ components, ...data } = {}) {
        super({ type: import_v1011.ComponentType.ActionRow, ...data });
        this.components = components?.map((component) => createComponentBuilder(component)) ?? [];
      }
      /**
       * Adds components to this action row.
       *
       * @param components - The components to add
       */
      addComponents(...components) {
        this.components.push(...normalizeArray(components));
        return this;
      }
      /**
       * Sets components for this action row.
       *
       * @param components - The components to set
       */
      setComponents(...components) {
        this.components.splice(0, this.components.length, ...normalizeArray(components));
        return this;
      }
      /**
       * {@inheritDoc ComponentBuilder.toJSON}
       */
      toJSON() {
        return {
          ...this.data,
          components: this.components.map((component) => component.toJSON())
        };
      }
    }, "ActionRowBuilder");
    var Assertions_exports4 = {};
    __export2(Assertions_exports4, {
      componentsValidator: () => componentsValidator,
      titleValidator: () => titleValidator,
      validateRequiredParameters: () => validateRequiredParameters2
    });
    var import_shapeshift4 = require_cjs();
    var titleValidator = import_shapeshift4.s.string().lengthGreaterThanOrEqual(1).lengthLessThanOrEqual(45).setValidationEnabled(isValidationEnabled);
    var componentsValidator = import_shapeshift4.s.instance(ActionRowBuilder).array().lengthGreaterThanOrEqual(1).setValidationEnabled(isValidationEnabled);
    function validateRequiredParameters2(customId, title, components) {
      customIdValidator.parse(customId);
      titleValidator.parse(title);
      componentsValidator.parse(components);
    }
    __name(validateRequiredParameters2, "validateRequiredParameters2");
    __name2(validateRequiredParameters2, "validateRequiredParameters");
    var ModalBuilder = /* @__PURE__ */ __name(class {
      static {
        __name2(this, "ModalBuilder");
      }
      /**
       * The API data associated with this modal.
       */
      data;
      /**
       * The components within this modal.
       */
      components = [];
      /**
       * Creates a new modal from API data.
       *
       * @param data - The API data to create this modal with
       */
      constructor({ components, ...data } = {}) {
        this.data = { ...data };
        this.components = components?.map((component) => createComponentBuilder(component)) ?? [];
      }
      /**
       * Sets the title of this modal.
       *
       * @param title - The title to use
       */
      setTitle(title) {
        this.data.title = titleValidator.parse(title);
        return this;
      }
      /**
       * Sets the custom id of this modal.
       *
       * @param customId - The custom id to use
       */
      setCustomId(customId) {
        this.data.custom_id = customIdValidator.parse(customId);
        return this;
      }
      /**
       * Adds components to this modal.
       *
       * @param components - The components to add
       */
      addComponents(...components) {
        this.components.push(
          ...normalizeArray(components).map(
            (component) => component instanceof ActionRowBuilder ? component : new ActionRowBuilder(component)
          )
        );
        return this;
      }
      /**
       * Sets components for this modal.
       *
       * @param components - The components to set
       */
      setComponents(...components) {
        this.components.splice(0, this.components.length, ...normalizeArray(components));
        return this;
      }
      /**
       * {@inheritDoc ComponentBuilder.toJSON}
       */
      toJSON() {
        validateRequiredParameters2(this.data.custom_id, this.data.title, this.components);
        return {
          ...this.data,
          components: this.components.map((component) => component.toJSON())
        };
      }
    }, "ModalBuilder");
    var Assertions_exports5 = {};
    __export2(Assertions_exports5, {
      assertReturnOfBuilder: () => assertReturnOfBuilder,
      contextsPredicate: () => contextsPredicate,
      integrationTypesPredicate: () => integrationTypesPredicate,
      localizationMapPredicate: () => localizationMapPredicate,
      validateChoicesLength: () => validateChoicesLength,
      validateDMPermission: () => validateDMPermission,
      validateDefaultMemberPermissions: () => validateDefaultMemberPermissions,
      validateDefaultPermission: () => validateDefaultPermission,
      validateDescription: () => validateDescription,
      validateLocale: () => validateLocale,
      validateLocalizationMap: () => validateLocalizationMap,
      validateMaxOptionsLength: () => validateMaxOptionsLength,
      validateNSFW: () => validateNSFW,
      validateName: () => validateName,
      validateRequired: () => validateRequired,
      validateRequiredParameters: () => validateRequiredParameters3
    });
    var import_shapeshift5 = require_cjs();
    var import_v1012 = require_v106();
    var namePredicate = import_shapeshift5.s.string().lengthGreaterThanOrEqual(1).lengthLessThanOrEqual(32).regex(/^[\p{Ll}\p{Lm}\p{Lo}\p{N}\p{sc=Devanagari}\p{sc=Thai}_-]+$/u).setValidationEnabled(isValidationEnabled);
    function validateName(name) {
      namePredicate.parse(name);
    }
    __name(validateName, "validateName");
    __name2(validateName, "validateName");
    var descriptionPredicate2 = import_shapeshift5.s.string().lengthGreaterThanOrEqual(1).lengthLessThanOrEqual(100).setValidationEnabled(isValidationEnabled);
    var localePredicate = import_shapeshift5.s.nativeEnum(import_v1012.Locale);
    function validateDescription(description) {
      descriptionPredicate2.parse(description);
    }
    __name(validateDescription, "validateDescription");
    __name2(validateDescription, "validateDescription");
    var maxArrayLengthPredicate = import_shapeshift5.s.unknown().array().lengthLessThanOrEqual(25).setValidationEnabled(isValidationEnabled);
    function validateLocale(locale) {
      return localePredicate.parse(locale);
    }
    __name(validateLocale, "validateLocale");
    __name2(validateLocale, "validateLocale");
    function validateMaxOptionsLength(options) {
      maxArrayLengthPredicate.parse(options);
    }
    __name(validateMaxOptionsLength, "validateMaxOptionsLength");
    __name2(validateMaxOptionsLength, "validateMaxOptionsLength");
    function validateRequiredParameters3(name, description, options) {
      validateName(name);
      validateDescription(description);
      validateMaxOptionsLength(options);
    }
    __name(validateRequiredParameters3, "validateRequiredParameters3");
    __name2(validateRequiredParameters3, "validateRequiredParameters");
    var booleanPredicate = import_shapeshift5.s.boolean();
    function validateDefaultPermission(value) {
      booleanPredicate.parse(value);
    }
    __name(validateDefaultPermission, "validateDefaultPermission");
    __name2(validateDefaultPermission, "validateDefaultPermission");
    function validateRequired(required) {
      booleanPredicate.parse(required);
    }
    __name(validateRequired, "validateRequired");
    __name2(validateRequired, "validateRequired");
    var choicesLengthPredicate = import_shapeshift5.s.number().lessThanOrEqual(25).setValidationEnabled(isValidationEnabled);
    function validateChoicesLength(amountAdding, choices) {
      choicesLengthPredicate.parse((choices?.length ?? 0) + amountAdding);
    }
    __name(validateChoicesLength, "validateChoicesLength");
    __name2(validateChoicesLength, "validateChoicesLength");
    function assertReturnOfBuilder(input, ExpectedInstanceOf) {
      import_shapeshift5.s.instance(ExpectedInstanceOf).parse(input);
    }
    __name(assertReturnOfBuilder, "assertReturnOfBuilder");
    __name2(assertReturnOfBuilder, "assertReturnOfBuilder");
    var localizationMapPredicate = import_shapeshift5.s.object(Object.fromEntries(Object.values(import_v1012.Locale).map((locale) => [locale, import_shapeshift5.s.string().nullish()]))).strict().nullish().setValidationEnabled(isValidationEnabled);
    function validateLocalizationMap(value) {
      localizationMapPredicate.parse(value);
    }
    __name(validateLocalizationMap, "validateLocalizationMap");
    __name2(validateLocalizationMap, "validateLocalizationMap");
    var dmPermissionPredicate = import_shapeshift5.s.boolean().nullish();
    function validateDMPermission(value) {
      dmPermissionPredicate.parse(value);
    }
    __name(validateDMPermission, "validateDMPermission");
    __name2(validateDMPermission, "validateDMPermission");
    var memberPermissionPredicate = import_shapeshift5.s.union([
      import_shapeshift5.s.bigint().transform((value) => value.toString()),
      import_shapeshift5.s.number().safeInt().transform((value) => value.toString()),
      import_shapeshift5.s.string().regex(/^\d+$/)
    ]).nullish();
    function validateDefaultMemberPermissions(permissions) {
      return memberPermissionPredicate.parse(permissions);
    }
    __name(validateDefaultMemberPermissions, "validateDefaultMemberPermissions");
    __name2(validateDefaultMemberPermissions, "validateDefaultMemberPermissions");
    function validateNSFW(value) {
      booleanPredicate.parse(value);
    }
    __name(validateNSFW, "validateNSFW");
    __name2(validateNSFW, "validateNSFW");
    var contextsPredicate = import_shapeshift5.s.array(
      import_shapeshift5.s.nativeEnum(import_v1012.InteractionContextType).setValidationEnabled(isValidationEnabled)
    );
    var integrationTypesPredicate = import_shapeshift5.s.array(
      import_shapeshift5.s.nativeEnum(import_v1012.ApplicationIntegrationType).setValidationEnabled(isValidationEnabled)
    );
    var import_ts_mixer6 = (init_esm(), __toCommonJS(esm_exports));
    var SharedNameAndDescription = /* @__PURE__ */ __name(class {
      static {
        __name2(this, "SharedNameAndDescription");
      }
      /**
       * The name of this command.
       */
      name;
      /**
       * The name localizations of this command.
       */
      name_localizations;
      /**
       * The description of this command.
       */
      description;
      /**
       * The description localizations of this command.
       */
      description_localizations;
      /**
       * Sets the name of this command.
       *
       * @param name - The name to use
       */
      setName(name) {
        validateName(name);
        Reflect.set(this, "name", name);
        return this;
      }
      /**
       * Sets the description of this command.
       *
       * @param description - The description to use
       */
      setDescription(description) {
        validateDescription(description);
        Reflect.set(this, "description", description);
        return this;
      }
      /**
       * Sets a name localization for this command.
       *
       * @param locale - The locale to set
       * @param localizedName - The localized name for the given `locale`
       */
      setNameLocalization(locale, localizedName) {
        if (!this.name_localizations) {
          Reflect.set(this, "name_localizations", {});
        }
        const parsedLocale = validateLocale(locale);
        if (localizedName === null) {
          this.name_localizations[parsedLocale] = null;
          return this;
        }
        validateName(localizedName);
        this.name_localizations[parsedLocale] = localizedName;
        return this;
      }
      /**
       * Sets the name localizations for this command.
       *
       * @param localizedNames - The object of localized names to set
       */
      setNameLocalizations(localizedNames) {
        if (localizedNames === null) {
          Reflect.set(this, "name_localizations", null);
          return this;
        }
        Reflect.set(this, "name_localizations", {});
        for (const args of Object.entries(localizedNames)) {
          this.setNameLocalization(...args);
        }
        return this;
      }
      /**
       * Sets a description localization for this command.
       *
       * @param locale - The locale to set
       * @param localizedDescription - The localized description for the given locale
       */
      setDescriptionLocalization(locale, localizedDescription) {
        if (!this.description_localizations) {
          Reflect.set(this, "description_localizations", {});
        }
        const parsedLocale = validateLocale(locale);
        if (localizedDescription === null) {
          this.description_localizations[parsedLocale] = null;
          return this;
        }
        validateDescription(localizedDescription);
        this.description_localizations[parsedLocale] = localizedDescription;
        return this;
      }
      /**
       * Sets the description localizations for this command.
       *
       * @param localizedDescriptions - The object of localized descriptions to set
       */
      setDescriptionLocalizations(localizedDescriptions) {
        if (localizedDescriptions === null) {
          Reflect.set(this, "description_localizations", null);
          return this;
        }
        Reflect.set(this, "description_localizations", {});
        for (const args of Object.entries(localizedDescriptions)) {
          this.setDescriptionLocalization(...args);
        }
        return this;
      }
    }, "SharedNameAndDescription");
    var import_v1013 = require_v106();
    var SharedSlashCommand = /* @__PURE__ */ __name(class {
      static {
        __name2(this, "SharedSlashCommand");
      }
      name = void 0;
      name_localizations;
      description = void 0;
      description_localizations;
      options = [];
      contexts;
      /**
       * @deprecated Use {@link SharedSlashCommand.setDefaultMemberPermissions} or {@link SharedSlashCommand.setDMPermission} instead.
       */
      default_permission = void 0;
      default_member_permissions = void 0;
      /**
       * @deprecated Use {@link SharedSlashCommand.contexts} instead.
       */
      dm_permission = void 0;
      integration_types;
      nsfw = void 0;
      /**
       * Sets the contexts of this command.
       *
       * @param contexts - The contexts
       */
      setContexts(...contexts) {
        Reflect.set(this, "contexts", contextsPredicate.parse(normalizeArray(contexts)));
        return this;
      }
      /**
       * Sets the integration types of this command.
       *
       * @param integrationTypes - The integration types
       */
      setIntegrationTypes(...integrationTypes) {
        Reflect.set(this, "integration_types", integrationTypesPredicate.parse(normalizeArray(integrationTypes)));
        return this;
      }
      /**
       * Sets whether the command is enabled by default when the application is added to a guild.
       *
       * @remarks
       * If set to `false`, you will have to later `PUT` the permissions for this command.
       * @param value - Whether or not to enable this command by default
       * @see {@link https://discord.com/developers/docs/interactions/application-commands#permissions}
       * @deprecated Use {@link SharedSlashCommand.setDefaultMemberPermissions} or {@link SharedSlashCommand.setDMPermission} instead.
       */
      setDefaultPermission(value) {
        validateDefaultPermission(value);
        Reflect.set(this, "default_permission", value);
        return this;
      }
      /**
       * Sets the default permissions a member should have in order to run the command.
       *
       * @remarks
       * You can set this to `'0'` to disable the command by default.
       * @param permissions - The permissions bit field to set
       * @see {@link https://discord.com/developers/docs/interactions/application-commands#permissions}
       */
      setDefaultMemberPermissions(permissions) {
        const permissionValue = validateDefaultMemberPermissions(permissions);
        Reflect.set(this, "default_member_permissions", permissionValue);
        return this;
      }
      /**
       * Sets if the command is available in direct messages with the application.
       *
       * @remarks
       * By default, commands are visible. This method is only for global commands.
       * @param enabled - Whether the command should be enabled in direct messages
       * @see {@link https://discord.com/developers/docs/interactions/application-commands#permissions}
       * @deprecated
       * Use {@link SharedSlashCommand.setContexts} instead.
       */
      setDMPermission(enabled) {
        validateDMPermission(enabled);
        Reflect.set(this, "dm_permission", enabled);
        return this;
      }
      /**
       * Sets whether this command is NSFW.
       *
       * @param nsfw - Whether this command is NSFW
       */
      setNSFW(nsfw = true) {
        validateNSFW(nsfw);
        Reflect.set(this, "nsfw", nsfw);
        return this;
      }
      /**
       * Serializes this builder to API-compatible JSON data.
       *
       * @remarks
       * This method runs validations on the data before serializing it.
       * As such, it may throw an error if the data is invalid.
       */
      toJSON() {
        validateRequiredParameters3(this.name, this.description, this.options);
        validateLocalizationMap(this.name_localizations);
        validateLocalizationMap(this.description_localizations);
        return {
          ...this,
          type: import_v1013.ApplicationCommandType.ChatInput,
          options: this.options.map((option) => option.toJSON())
        };
      }
    }, "SharedSlashCommand");
    var import_v1014 = require_v106();
    var ApplicationCommandOptionBase = /* @__PURE__ */ __name(class extends SharedNameAndDescription {
      static {
        __name2(this, "ApplicationCommandOptionBase");
      }
      /**
       * Whether this option is required.
       *
       * @defaultValue `false`
       */
      required = false;
      /**
       * Sets whether this option is required.
       *
       * @param required - Whether this option should be required
       */
      setRequired(required) {
        validateRequired(required);
        Reflect.set(this, "required", required);
        return this;
      }
      /**
       * This method runs required validators on this builder.
       */
      runRequiredValidations() {
        validateRequiredParameters3(this.name, this.description, []);
        validateLocalizationMap(this.name_localizations);
        validateLocalizationMap(this.description_localizations);
        validateRequired(this.required);
      }
    }, "ApplicationCommandOptionBase");
    var SlashCommandAttachmentOption = /* @__PURE__ */ __name(class extends ApplicationCommandOptionBase {
      static {
        __name2(this, "SlashCommandAttachmentOption");
      }
      /**
       * The type of this option.
       */
      type = import_v1014.ApplicationCommandOptionType.Attachment;
      /**
       * {@inheritDoc ApplicationCommandOptionBase.toJSON}
       */
      toJSON() {
        this.runRequiredValidations();
        return { ...this };
      }
    }, "SlashCommandAttachmentOption");
    var import_v1015 = require_v106();
    var SlashCommandBooleanOption = /* @__PURE__ */ __name(class extends ApplicationCommandOptionBase {
      static {
        __name2(this, "SlashCommandBooleanOption");
      }
      /**
       * The type of this option.
       */
      type = import_v1015.ApplicationCommandOptionType.Boolean;
      /**
       * {@inheritDoc ApplicationCommandOptionBase.toJSON}
       */
      toJSON() {
        this.runRequiredValidations();
        return { ...this };
      }
    }, "SlashCommandBooleanOption");
    var import_v1017 = require_v106();
    var import_ts_mixer = (init_esm(), __toCommonJS(esm_exports));
    var import_shapeshift6 = require_cjs();
    var import_v1016 = require_v106();
    var allowedChannelTypes = [
      import_v1016.ChannelType.GuildText,
      import_v1016.ChannelType.GuildVoice,
      import_v1016.ChannelType.GuildCategory,
      import_v1016.ChannelType.GuildAnnouncement,
      import_v1016.ChannelType.AnnouncementThread,
      import_v1016.ChannelType.PublicThread,
      import_v1016.ChannelType.PrivateThread,
      import_v1016.ChannelType.GuildStageVoice,
      import_v1016.ChannelType.GuildForum,
      import_v1016.ChannelType.GuildMedia
    ];
    var channelTypesPredicate = import_shapeshift6.s.array(import_shapeshift6.s.union(allowedChannelTypes.map((type) => import_shapeshift6.s.literal(type))));
    var ApplicationCommandOptionChannelTypesMixin = /* @__PURE__ */ __name(class {
      static {
        __name2(this, "ApplicationCommandOptionChannelTypesMixin");
      }
      /**
       * The channel types of this option.
       */
      channel_types;
      /**
       * Adds channel types to this option.
       *
       * @param channelTypes - The channel types
       */
      addChannelTypes(...channelTypes) {
        if (this.channel_types === void 0) {
          Reflect.set(this, "channel_types", []);
        }
        this.channel_types.push(...channelTypesPredicate.parse(normalizeArray(channelTypes)));
        return this;
      }
    }, "ApplicationCommandOptionChannelTypesMixin");
    var SlashCommandChannelOption = /* @__PURE__ */ __name(class extends ApplicationCommandOptionBase {
      /**
       * The type of this option.
       */
      type = import_v1017.ApplicationCommandOptionType.Channel;
      /**
       * {@inheritDoc ApplicationCommandOptionBase.toJSON}
       */
      toJSON() {
        this.runRequiredValidations();
        return { ...this };
      }
    }, "SlashCommandChannelOption");
    __name2(SlashCommandChannelOption, "SlashCommandChannelOption");
    SlashCommandChannelOption = __decorateClass([
      (0, import_ts_mixer.mix)(ApplicationCommandOptionChannelTypesMixin)
    ], SlashCommandChannelOption);
    var import_shapeshift9 = require_cjs();
    var import_v1019 = require_v106();
    var import_ts_mixer2 = (init_esm(), __toCommonJS(esm_exports));
    var ApplicationCommandNumericOptionMinMaxValueMixin = /* @__PURE__ */ __name(class {
      static {
        __name2(this, "ApplicationCommandNumericOptionMinMaxValueMixin");
      }
      /**
       * The maximum value of this option.
       */
      max_value;
      /**
       * The minimum value of this option.
       */
      min_value;
    }, "ApplicationCommandNumericOptionMinMaxValueMixin");
    var import_shapeshift7 = require_cjs();
    var booleanPredicate2 = import_shapeshift7.s.boolean();
    var ApplicationCommandOptionWithAutocompleteMixin = /* @__PURE__ */ __name(class {
      static {
        __name2(this, "ApplicationCommandOptionWithAutocompleteMixin");
      }
      /**
       * Whether this option utilizes autocomplete.
       */
      autocomplete;
      /**
       * The type of this option.
       *
       * @privateRemarks Since this is present and this is a mixin, this is needed.
       */
      type;
      /**
       * Whether this option uses autocomplete.
       *
       * @param autocomplete - Whether this option should use autocomplete
       */
      setAutocomplete(autocomplete) {
        booleanPredicate2.parse(autocomplete);
        if (autocomplete && "choices" in this && Array.isArray(this.choices) && this.choices.length > 0) {
          throw new RangeError("Autocomplete and choices are mutually exclusive to each other.");
        }
        Reflect.set(this, "autocomplete", autocomplete);
        return this;
      }
    }, "ApplicationCommandOptionWithAutocompleteMixin");
    var import_shapeshift8 = require_cjs();
    var import_v1018 = require_v106();
    var stringPredicate = import_shapeshift8.s.string().lengthGreaterThanOrEqual(1).lengthLessThanOrEqual(100);
    var numberPredicate = import_shapeshift8.s.number().greaterThan(Number.NEGATIVE_INFINITY).lessThan(Number.POSITIVE_INFINITY);
    var choicesPredicate = import_shapeshift8.s.object({
      name: stringPredicate,
      name_localizations: localizationMapPredicate,
      value: import_shapeshift8.s.union([stringPredicate, numberPredicate])
    }).array();
    var ApplicationCommandOptionWithChoicesMixin = /* @__PURE__ */ __name(class {
      static {
        __name2(this, "ApplicationCommandOptionWithChoicesMixin");
      }
      /**
       * The choices of this option.
       */
      choices;
      /**
       * The type of this option.
       *
       * @privateRemarks Since this is present and this is a mixin, this is needed.
       */
      type;
      /**
       * Adds multiple choices to this option.
       *
       * @param choices - The choices to add
       */
      addChoices(...choices) {
        const normalizedChoices = normalizeArray(choices);
        if (normalizedChoices.length > 0 && "autocomplete" in this && this.autocomplete) {
          throw new RangeError("Autocomplete and choices are mutually exclusive to each other.");
        }
        choicesPredicate.parse(normalizedChoices);
        if (this.choices === void 0) {
          Reflect.set(this, "choices", []);
        }
        validateChoicesLength(normalizedChoices.length, this.choices);
        for (const { name, name_localizations, value } of normalizedChoices) {
          if (this.type === import_v1018.ApplicationCommandOptionType.String) {
            stringPredicate.parse(value);
          } else {
            numberPredicate.parse(value);
          }
          this.choices.push({ name, name_localizations, value });
        }
        return this;
      }
      /**
       * Sets multiple choices for this option.
       *
       * @param choices - The choices to set
       */
      setChoices(...choices) {
        const normalizedChoices = normalizeArray(choices);
        if (normalizedChoices.length > 0 && "autocomplete" in this && this.autocomplete) {
          throw new RangeError("Autocomplete and choices are mutually exclusive to each other.");
        }
        choicesPredicate.parse(normalizedChoices);
        Reflect.set(this, "choices", []);
        this.addChoices(normalizedChoices);
        return this;
      }
    }, "ApplicationCommandOptionWithChoicesMixin");
    var numberValidator = import_shapeshift9.s.number().int();
    var SlashCommandIntegerOption = /* @__PURE__ */ __name(class extends ApplicationCommandOptionBase {
      /**
       * The type of this option.
       */
      type = import_v1019.ApplicationCommandOptionType.Integer;
      /**
       * {@inheritDoc ApplicationCommandNumericOptionMinMaxValueMixin.setMaxValue}
       */
      setMaxValue(max) {
        numberValidator.parse(max);
        Reflect.set(this, "max_value", max);
        return this;
      }
      /**
       * {@inheritDoc ApplicationCommandNumericOptionMinMaxValueMixin.setMinValue}
       */
      setMinValue(min) {
        numberValidator.parse(min);
        Reflect.set(this, "min_value", min);
        return this;
      }
      /**
       * {@inheritDoc ApplicationCommandOptionBase.toJSON}
       */
      toJSON() {
        this.runRequiredValidations();
        if (this.autocomplete && Array.isArray(this.choices) && this.choices.length > 0) {
          throw new RangeError("Autocomplete and choices are mutually exclusive to each other.");
        }
        return { ...this };
      }
    }, "SlashCommandIntegerOption");
    __name2(SlashCommandIntegerOption, "SlashCommandIntegerOption");
    SlashCommandIntegerOption = __decorateClass([
      (0, import_ts_mixer2.mix)(
        ApplicationCommandNumericOptionMinMaxValueMixin,
        ApplicationCommandOptionWithAutocompleteMixin,
        ApplicationCommandOptionWithChoicesMixin
      )
    ], SlashCommandIntegerOption);
    var import_v1020 = require_v106();
    var SlashCommandMentionableOption = /* @__PURE__ */ __name(class extends ApplicationCommandOptionBase {
      static {
        __name2(this, "SlashCommandMentionableOption");
      }
      /**
       * The type of this option.
       */
      type = import_v1020.ApplicationCommandOptionType.Mentionable;
      /**
       * {@inheritDoc ApplicationCommandOptionBase.toJSON}
       */
      toJSON() {
        this.runRequiredValidations();
        return { ...this };
      }
    }, "SlashCommandMentionableOption");
    var import_shapeshift10 = require_cjs();
    var import_v1021 = require_v106();
    var import_ts_mixer3 = (init_esm(), __toCommonJS(esm_exports));
    var numberValidator2 = import_shapeshift10.s.number();
    var SlashCommandNumberOption = /* @__PURE__ */ __name(class extends ApplicationCommandOptionBase {
      /**
       * The type of this option.
       */
      type = import_v1021.ApplicationCommandOptionType.Number;
      /**
       * {@inheritDoc ApplicationCommandNumericOptionMinMaxValueMixin.setMaxValue}
       */
      setMaxValue(max) {
        numberValidator2.parse(max);
        Reflect.set(this, "max_value", max);
        return this;
      }
      /**
       * {@inheritDoc ApplicationCommandNumericOptionMinMaxValueMixin.setMinValue}
       */
      setMinValue(min) {
        numberValidator2.parse(min);
        Reflect.set(this, "min_value", min);
        return this;
      }
      /**
       * {@inheritDoc ApplicationCommandOptionBase.toJSON}
       */
      toJSON() {
        this.runRequiredValidations();
        if (this.autocomplete && Array.isArray(this.choices) && this.choices.length > 0) {
          throw new RangeError("Autocomplete and choices are mutually exclusive to each other.");
        }
        return { ...this };
      }
    }, "SlashCommandNumberOption");
    __name2(SlashCommandNumberOption, "SlashCommandNumberOption");
    SlashCommandNumberOption = __decorateClass([
      (0, import_ts_mixer3.mix)(
        ApplicationCommandNumericOptionMinMaxValueMixin,
        ApplicationCommandOptionWithAutocompleteMixin,
        ApplicationCommandOptionWithChoicesMixin
      )
    ], SlashCommandNumberOption);
    var import_v1022 = require_v106();
    var SlashCommandRoleOption = /* @__PURE__ */ __name(class extends ApplicationCommandOptionBase {
      static {
        __name2(this, "SlashCommandRoleOption");
      }
      /**
       * The type of this option.
       */
      type = import_v1022.ApplicationCommandOptionType.Role;
      /**
       * {@inheritDoc ApplicationCommandOptionBase.toJSON}
       */
      toJSON() {
        this.runRequiredValidations();
        return { ...this };
      }
    }, "SlashCommandRoleOption");
    var import_shapeshift11 = require_cjs();
    var import_v1023 = require_v106();
    var import_ts_mixer4 = (init_esm(), __toCommonJS(esm_exports));
    var minLengthValidator2 = import_shapeshift11.s.number().greaterThanOrEqual(0).lessThanOrEqual(6e3);
    var maxLengthValidator2 = import_shapeshift11.s.number().greaterThanOrEqual(1).lessThanOrEqual(6e3);
    var SlashCommandStringOption = /* @__PURE__ */ __name(class extends ApplicationCommandOptionBase {
      /**
       * The type of this option.
       */
      type = import_v1023.ApplicationCommandOptionType.String;
      /**
       * The maximum length of this option.
       */
      max_length;
      /**
       * The minimum length of this option.
       */
      min_length;
      /**
       * Sets the maximum length of this string option.
       *
       * @param max - The maximum length this option can be
       */
      setMaxLength(max) {
        maxLengthValidator2.parse(max);
        Reflect.set(this, "max_length", max);
        return this;
      }
      /**
       * Sets the minimum length of this string option.
       *
       * @param min - The minimum length this option can be
       */
      setMinLength(min) {
        minLengthValidator2.parse(min);
        Reflect.set(this, "min_length", min);
        return this;
      }
      /**
       * {@inheritDoc ApplicationCommandOptionBase.toJSON}
       */
      toJSON() {
        this.runRequiredValidations();
        if (this.autocomplete && Array.isArray(this.choices) && this.choices.length > 0) {
          throw new RangeError("Autocomplete and choices are mutually exclusive to each other.");
        }
        return { ...this };
      }
    }, "SlashCommandStringOption");
    __name2(SlashCommandStringOption, "SlashCommandStringOption");
    SlashCommandStringOption = __decorateClass([
      (0, import_ts_mixer4.mix)(ApplicationCommandOptionWithAutocompleteMixin, ApplicationCommandOptionWithChoicesMixin)
    ], SlashCommandStringOption);
    var import_v1024 = require_v106();
    var SlashCommandUserOption = /* @__PURE__ */ __name(class extends ApplicationCommandOptionBase {
      static {
        __name2(this, "SlashCommandUserOption");
      }
      /**
       * The type of this option.
       */
      type = import_v1024.ApplicationCommandOptionType.User;
      /**
       * {@inheritDoc ApplicationCommandOptionBase.toJSON}
       */
      toJSON() {
        this.runRequiredValidations();
        return { ...this };
      }
    }, "SlashCommandUserOption");
    var SharedSlashCommandOptions = /* @__PURE__ */ __name(class {
      static {
        __name2(this, "SharedSlashCommandOptions");
      }
      options;
      /**
       * Adds a boolean option.
       *
       * @param input - A function that returns an option builder or an already built builder
       */
      addBooleanOption(input) {
        return this._sharedAddOptionMethod(input, SlashCommandBooleanOption);
      }
      /**
       * Adds a user option.
       *
       * @param input - A function that returns an option builder or an already built builder
       */
      addUserOption(input) {
        return this._sharedAddOptionMethod(input, SlashCommandUserOption);
      }
      /**
       * Adds a channel option.
       *
       * @param input - A function that returns an option builder or an already built builder
       */
      addChannelOption(input) {
        return this._sharedAddOptionMethod(input, SlashCommandChannelOption);
      }
      /**
       * Adds a role option.
       *
       * @param input - A function that returns an option builder or an already built builder
       */
      addRoleOption(input) {
        return this._sharedAddOptionMethod(input, SlashCommandRoleOption);
      }
      /**
       * Adds an attachment option.
       *
       * @param input - A function that returns an option builder or an already built builder
       */
      addAttachmentOption(input) {
        return this._sharedAddOptionMethod(input, SlashCommandAttachmentOption);
      }
      /**
       * Adds a mentionable option.
       *
       * @param input - A function that returns an option builder or an already built builder
       */
      addMentionableOption(input) {
        return this._sharedAddOptionMethod(input, SlashCommandMentionableOption);
      }
      /**
       * Adds a string option.
       *
       * @param input - A function that returns an option builder or an already built builder
       */
      addStringOption(input) {
        return this._sharedAddOptionMethod(input, SlashCommandStringOption);
      }
      /**
       * Adds an integer option.
       *
       * @param input - A function that returns an option builder or an already built builder
       */
      addIntegerOption(input) {
        return this._sharedAddOptionMethod(input, SlashCommandIntegerOption);
      }
      /**
       * Adds a number option.
       *
       * @param input - A function that returns an option builder or an already built builder
       */
      addNumberOption(input) {
        return this._sharedAddOptionMethod(input, SlashCommandNumberOption);
      }
      /**
       * Where the actual adding magic happens. ✨
       *
       * @param input - The input. What else?
       * @param Instance - The instance of whatever is being added
       * @internal
       */
      _sharedAddOptionMethod(input, Instance) {
        const { options } = this;
        validateMaxOptionsLength(options);
        const result = typeof input === "function" ? input(new Instance()) : input;
        assertReturnOfBuilder(result, Instance);
        options.push(result);
        return this;
      }
    }, "SharedSlashCommandOptions");
    var import_v1025 = require_v106();
    var import_ts_mixer5 = (init_esm(), __toCommonJS(esm_exports));
    var SlashCommandSubcommandGroupBuilder = /* @__PURE__ */ __name(class {
      /**
       * The name of this subcommand group.
       */
      name = void 0;
      /**
       * The description of this subcommand group.
       */
      description = void 0;
      /**
       * The subcommands within this subcommand group.
       */
      options = [];
      /**
       * Adds a new subcommand to this group.
       *
       * @param input - A function that returns a subcommand builder or an already built builder
       */
      addSubcommand(input) {
        const { options } = this;
        validateMaxOptionsLength(options);
        const result = typeof input === "function" ? input(new SlashCommandSubcommandBuilder()) : input;
        assertReturnOfBuilder(result, SlashCommandSubcommandBuilder);
        options.push(result);
        return this;
      }
      /**
       * Serializes this builder to API-compatible JSON data.
       *
       * @remarks
       * This method runs validations on the data before serializing it.
       * As such, it may throw an error if the data is invalid.
       */
      toJSON() {
        validateRequiredParameters3(this.name, this.description, this.options);
        return {
          type: import_v1025.ApplicationCommandOptionType.SubcommandGroup,
          name: this.name,
          name_localizations: this.name_localizations,
          description: this.description,
          description_localizations: this.description_localizations,
          options: this.options.map((option) => option.toJSON())
        };
      }
    }, "SlashCommandSubcommandGroupBuilder");
    __name2(SlashCommandSubcommandGroupBuilder, "SlashCommandSubcommandGroupBuilder");
    SlashCommandSubcommandGroupBuilder = __decorateClass([
      (0, import_ts_mixer5.mix)(SharedNameAndDescription)
    ], SlashCommandSubcommandGroupBuilder);
    var SlashCommandSubcommandBuilder = /* @__PURE__ */ __name(class {
      /**
       * The name of this subcommand.
       */
      name = void 0;
      /**
       * The description of this subcommand.
       */
      description = void 0;
      /**
       * The options within this subcommand.
       */
      options = [];
      /**
       * Serializes this builder to API-compatible JSON data.
       *
       * @remarks
       * This method runs validations on the data before serializing it.
       * As such, it may throw an error if the data is invalid.
       */
      toJSON() {
        validateRequiredParameters3(this.name, this.description, this.options);
        return {
          type: import_v1025.ApplicationCommandOptionType.Subcommand,
          name: this.name,
          name_localizations: this.name_localizations,
          description: this.description,
          description_localizations: this.description_localizations,
          options: this.options.map((option) => option.toJSON())
        };
      }
    }, "SlashCommandSubcommandBuilder");
    __name2(SlashCommandSubcommandBuilder, "SlashCommandSubcommandBuilder");
    SlashCommandSubcommandBuilder = __decorateClass([
      (0, import_ts_mixer5.mix)(SharedNameAndDescription, SharedSlashCommandOptions)
    ], SlashCommandSubcommandBuilder);
    var SharedSlashCommandSubcommands = /* @__PURE__ */ __name(class {
      static {
        __name2(this, "SharedSlashCommandSubcommands");
      }
      options = [];
      /**
       * Adds a new subcommand group to this command.
       *
       * @param input - A function that returns a subcommand group builder or an already built builder
       */
      addSubcommandGroup(input) {
        const { options } = this;
        validateMaxOptionsLength(options);
        const result = typeof input === "function" ? input(new SlashCommandSubcommandGroupBuilder()) : input;
        assertReturnOfBuilder(result, SlashCommandSubcommandGroupBuilder);
        options.push(result);
        return this;
      }
      /**
       * Adds a new subcommand to this command.
       *
       * @param input - A function that returns a subcommand builder or an already built builder
       */
      addSubcommand(input) {
        const { options } = this;
        validateMaxOptionsLength(options);
        const result = typeof input === "function" ? input(new SlashCommandSubcommandBuilder()) : input;
        assertReturnOfBuilder(result, SlashCommandSubcommandBuilder);
        options.push(result);
        return this;
      }
    }, "SharedSlashCommandSubcommands");
    var SlashCommandBuilder = /* @__PURE__ */ __name(class {
      /**
       * The name of this command.
       */
      name = void 0;
      /**
       * The name localizations of this command.
       */
      name_localizations;
      /**
       * The description of this command.
       */
      description = void 0;
      /**
       * The description localizations of this command.
       */
      description_localizations;
      /**
       * The options of this command.
       */
      options = [];
      /**
       * The contexts for this command.
       */
      contexts;
      /**
       * Whether this command is enabled by default when the application is added to a guild.
       *
       * @deprecated Use {@link SharedSlashCommand.setDefaultMemberPermissions} or {@link SharedSlashCommand.setDMPermission} instead.
       */
      default_permission = void 0;
      /**
       * The set of permissions represented as a bit set for the command.
       */
      default_member_permissions = void 0;
      /**
       * Indicates whether the command is available in direct messages with the application.
       *
       * @remarks
       * By default, commands are visible. This property is only for global commands.
       * @deprecated
       * Use {@link SlashCommandBuilder.contexts} instead.
       */
      dm_permission = void 0;
      /**
       * The integration types for this command.
       */
      integration_types;
      /**
       * Whether this command is NSFW.
       */
      nsfw = void 0;
    }, "SlashCommandBuilder");
    __name2(SlashCommandBuilder, "SlashCommandBuilder");
    SlashCommandBuilder = __decorateClass([
      (0, import_ts_mixer6.mix)(SharedSlashCommandOptions, SharedNameAndDescription, SharedSlashCommandSubcommands, SharedSlashCommand)
    ], SlashCommandBuilder);
    var Assertions_exports6 = {};
    __export2(Assertions_exports6, {
      contextsPredicate: () => contextsPredicate2,
      integrationTypesPredicate: () => integrationTypesPredicate2,
      validateDMPermission: () => validateDMPermission2,
      validateDefaultMemberPermissions: () => validateDefaultMemberPermissions2,
      validateDefaultPermission: () => validateDefaultPermission2,
      validateName: () => validateName2,
      validateRequiredParameters: () => validateRequiredParameters4,
      validateType: () => validateType
    });
    var import_shapeshift12 = require_cjs();
    var import_v1026 = require_v106();
    var namePredicate2 = import_shapeshift12.s.string().lengthGreaterThanOrEqual(1).lengthLessThanOrEqual(32).regex(/^( *[\p{P}\p{L}\p{N}\p{sc=Devanagari}\p{sc=Thai}]+ *)+$/u).setValidationEnabled(isValidationEnabled);
    var typePredicate = import_shapeshift12.s.union([import_shapeshift12.s.literal(import_v1026.ApplicationCommandType.User), import_shapeshift12.s.literal(import_v1026.ApplicationCommandType.Message)]).setValidationEnabled(isValidationEnabled);
    var booleanPredicate3 = import_shapeshift12.s.boolean();
    function validateDefaultPermission2(value) {
      booleanPredicate3.parse(value);
    }
    __name(validateDefaultPermission2, "validateDefaultPermission2");
    __name2(validateDefaultPermission2, "validateDefaultPermission");
    function validateName2(name) {
      namePredicate2.parse(name);
    }
    __name(validateName2, "validateName2");
    __name2(validateName2, "validateName");
    function validateType(type) {
      typePredicate.parse(type);
    }
    __name(validateType, "validateType");
    __name2(validateType, "validateType");
    function validateRequiredParameters4(name, type) {
      validateName2(name);
      validateType(type);
    }
    __name(validateRequiredParameters4, "validateRequiredParameters4");
    __name2(validateRequiredParameters4, "validateRequiredParameters");
    var dmPermissionPredicate2 = import_shapeshift12.s.boolean().nullish();
    function validateDMPermission2(value) {
      dmPermissionPredicate2.parse(value);
    }
    __name(validateDMPermission2, "validateDMPermission2");
    __name2(validateDMPermission2, "validateDMPermission");
    var memberPermissionPredicate2 = import_shapeshift12.s.union([
      import_shapeshift12.s.bigint().transform((value) => value.toString()),
      import_shapeshift12.s.number().safeInt().transform((value) => value.toString()),
      import_shapeshift12.s.string().regex(/^\d+$/)
    ]).nullish();
    function validateDefaultMemberPermissions2(permissions) {
      return memberPermissionPredicate2.parse(permissions);
    }
    __name(validateDefaultMemberPermissions2, "validateDefaultMemberPermissions2");
    __name2(validateDefaultMemberPermissions2, "validateDefaultMemberPermissions");
    var contextsPredicate2 = import_shapeshift12.s.array(
      import_shapeshift12.s.nativeEnum(import_v1026.InteractionContextType).setValidationEnabled(isValidationEnabled)
    );
    var integrationTypesPredicate2 = import_shapeshift12.s.array(
      import_shapeshift12.s.nativeEnum(import_v1026.ApplicationIntegrationType).setValidationEnabled(isValidationEnabled)
    );
    var ContextMenuCommandBuilder = /* @__PURE__ */ __name(class {
      static {
        __name2(this, "ContextMenuCommandBuilder");
      }
      /**
       * The name of this command.
       */
      name = void 0;
      /**
       * The name localizations of this command.
       */
      name_localizations;
      /**
       * The type of this command.
       */
      type = void 0;
      /**
       * The contexts for this command.
       */
      contexts;
      /**
       * Whether this command is enabled by default when the application is added to a guild.
       *
       * @deprecated Use {@link ContextMenuCommandBuilder.setDefaultMemberPermissions} or {@link ContextMenuCommandBuilder.setDMPermission} instead.
       */
      default_permission = void 0;
      /**
       * The set of permissions represented as a bit set for the command.
       */
      default_member_permissions = void 0;
      /**
       * Indicates whether the command is available in direct messages with the application.
       *
       * @remarks
       * By default, commands are visible. This property is only for global commands.
       * @deprecated
       * Use {@link ContextMenuCommandBuilder.contexts} instead.
       */
      dm_permission = void 0;
      /**
       * The integration types for this command.
       */
      integration_types;
      /**
       * Sets the contexts of this command.
       *
       * @param contexts - The contexts
       */
      setContexts(...contexts) {
        Reflect.set(this, "contexts", contextsPredicate2.parse(normalizeArray(contexts)));
        return this;
      }
      /**
       * Sets integration types of this command.
       *
       * @param integrationTypes - The integration types
       */
      setIntegrationTypes(...integrationTypes) {
        Reflect.set(this, "integration_types", integrationTypesPredicate2.parse(normalizeArray(integrationTypes)));
        return this;
      }
      /**
       * Sets the name of this command.
       *
       * @param name - The name to use
       */
      setName(name) {
        validateName2(name);
        Reflect.set(this, "name", name);
        return this;
      }
      /**
       * Sets the type of this command.
       *
       * @param type - The type to use
       */
      setType(type) {
        validateType(type);
        Reflect.set(this, "type", type);
        return this;
      }
      /**
       * Sets whether the command is enabled by default when the application is added to a guild.
       *
       * @remarks
       * If set to `false`, you will have to later `PUT` the permissions for this command.
       * @param value - Whether to enable this command by default
       * @see {@link https://discord.com/developers/docs/interactions/application-commands#permissions}
       * @deprecated Use {@link ContextMenuCommandBuilder.setDefaultMemberPermissions} or {@link ContextMenuCommandBuilder.setDMPermission} instead.
       */
      setDefaultPermission(value) {
        validateDefaultPermission2(value);
        Reflect.set(this, "default_permission", value);
        return this;
      }
      /**
       * Sets the default permissions a member should have in order to run this command.
       *
       * @remarks
       * You can set this to `'0'` to disable the command by default.
       * @param permissions - The permissions bit field to set
       * @see {@link https://discord.com/developers/docs/interactions/application-commands#permissions}
       */
      setDefaultMemberPermissions(permissions) {
        const permissionValue = validateDefaultMemberPermissions2(permissions);
        Reflect.set(this, "default_member_permissions", permissionValue);
        return this;
      }
      /**
       * Sets if the command is available in direct messages with the application.
       *
       * @remarks
       * By default, commands are visible. This method is only for global commands.
       * @param enabled - Whether the command should be enabled in direct messages
       * @see {@link https://discord.com/developers/docs/interactions/application-commands#permissions}
       * @deprecated Use {@link ContextMenuCommandBuilder.setContexts} instead.
       */
      setDMPermission(enabled) {
        validateDMPermission2(enabled);
        Reflect.set(this, "dm_permission", enabled);
        return this;
      }
      /**
       * Sets a name localization for this command.
       *
       * @param locale - The locale to set
       * @param localizedName - The localized name for the given `locale`
       */
      setNameLocalization(locale, localizedName) {
        if (!this.name_localizations) {
          Reflect.set(this, "name_localizations", {});
        }
        const parsedLocale = validateLocale(locale);
        if (localizedName === null) {
          this.name_localizations[parsedLocale] = null;
          return this;
        }
        validateName2(localizedName);
        this.name_localizations[parsedLocale] = localizedName;
        return this;
      }
      /**
       * Sets the name localizations for this command.
       *
       * @param localizedNames - The object of localized names to set
       */
      setNameLocalizations(localizedNames) {
        if (localizedNames === null) {
          Reflect.set(this, "name_localizations", null);
          return this;
        }
        Reflect.set(this, "name_localizations", {});
        for (const args of Object.entries(localizedNames))
          this.setNameLocalization(...args);
        return this;
      }
      /**
       * Serializes this builder to API-compatible JSON data.
       *
       * @remarks
       * This method runs validations on the data before serializing it.
       * As such, it may throw an error if the data is invalid.
       */
      toJSON() {
        validateRequiredParameters4(this.name, this.type);
        validateLocalizationMap(this.name_localizations);
        return { ...this };
      }
    }, "ContextMenuCommandBuilder");
    function embedLength(data) {
      return (data.title?.length ?? 0) + (data.description?.length ?? 0) + (data.fields?.reduce((prev, curr) => prev + curr.name.length + curr.value.length, 0) ?? 0) + (data.footer?.text.length ?? 0) + (data.author?.name.length ?? 0);
    }
    __name(embedLength, "embedLength");
    __name2(embedLength, "embedLength");
    var version = "1.10.1";
  }
});

// commands/managers/roleManager.js
var require_roleManager = __commonJS({
  "commands/managers/roleManager.js"(exports, module) {
    init_checked_fetch();
    init_modules_watch_stub();
    var { SlashCommandBuilder, ActionRowBuilder, ButtonBuilder } = require_dist4();
    var { ButtonStyle } = require_v106();
    module.exports = {
      data: new SlashCommandBuilder().setName("role-manager").setDescription("Add a role manager"),
      async execute(interaction) {
        const confirm = new ButtonBuilder().setCustomId("confirm").setLabel("Confirm").setStyle(ButtonStyle.Success);
        const row = new ActionRowBuilder().addComponents(confirm);
        const response = interaction.reply({
          content: "Please confirm that you accept and agree to the rules of the server.\nThis will unlock the rest of the server for you.",
          components: [row],
          allowed_mentions: { parse: [] }
        });
        return response;
      }
    };
  }
});

// .wrangler/tmp/bundle-ui2AQl/middleware-loader.entry.ts
init_checked_fetch();
init_modules_watch_stub();

// .wrangler/tmp/bundle-ui2AQl/middleware-insertion-facade.js
init_checked_fetch();
init_modules_watch_stub();

// server.js
init_checked_fetch();
init_modules_watch_stub();

// node_modules/itty-router/index.mjs
init_checked_fetch();
init_modules_watch_stub();
var t = /* @__PURE__ */ __name(({ base: e = "", routes: t2 = [], ...r2 } = {}) => ({ __proto__: new Proxy({}, { get: (r3, o2, a2, s2) => (r4, ...c2) => t2.push([o2.toUpperCase?.(), RegExp(`^${(s2 = (e + r4).replace(/\/+(\/|$)/g, "$1")).replace(/(\/?\.?):(\w+)\+/g, "($1(?<$2>*))").replace(/(\/?\.?):(\w+)/g, "($1(?<$2>[^$1/]+?))").replace(/\./g, "\\.").replace(/(\/?)\*/g, "($1.*)?")}/*$`), c2, s2]) && a2 }), routes: t2, ...r2, async fetch(e2, ...o2) {
  let a2, s2, c2 = new URL(e2.url), n2 = e2.query = { __proto__: null };
  for (let [e3, t3] of c2.searchParams)
    n2[e3] = n2[e3] ? [].concat(n2[e3], t3) : t3;
  e:
    try {
      for (let t3 of r2.before || [])
        if (null != (a2 = await t3(e2.proxy ?? e2, ...o2)))
          break e;
      t:
        for (let [r3, n3, l, i] of t2)
          if ((r3 == e2.method || "ALL" == r3) && (s2 = c2.pathname.match(n3))) {
            e2.params = s2.groups || {}, e2.route = i;
            for (let t3 of l)
              if (null != (a2 = await t3(e2.proxy ?? e2, ...o2)))
                break t;
          }
    } catch (t3) {
      if (!r2.catch)
        throw t3;
      a2 = await r2.catch(t3, e2.proxy ?? e2, ...o2);
    }
  try {
    for (let t3 of r2.finally || [])
      a2 = await t3(a2, e2.proxy ?? e2, ...o2) ?? a2;
  } catch (t3) {
    if (!r2.catch)
      throw t3;
    a2 = await r2.catch(t3, e2.proxy ?? e2, ...o2);
  }
  return a2;
} }), "t");
var r = /* @__PURE__ */ __name((e = "text/plain; charset=utf-8", t2) => (r2, o2 = {}) => {
  if (void 0 === r2 || r2 instanceof Response)
    return r2;
  const a2 = new Response(t2?.(r2) ?? r2, o2.url ? void 0 : o2);
  return a2.headers.set("content-type", e), a2;
}, "r");
var o = r("application/json; charset=utf-8", JSON.stringify);
var a = /* @__PURE__ */ __name((e) => ({ 400: "Bad Request", 401: "Unauthorized", 403: "Forbidden", 404: "Not Found", 500: "Internal Server Error" })[e] || "Unknown Error", "a");
var s = /* @__PURE__ */ __name((e = 500, t2) => {
  if (e instanceof Error) {
    const { message: r2, ...o2 } = e;
    e = e.status || 500, t2 = { error: r2 || a(e), ...o2 };
  }
  return t2 = { status: e, ..."object" == typeof t2 ? t2 : { error: t2 || a(e) } }, o(t2, { status: e });
}, "s");
var c = /* @__PURE__ */ __name((e) => {
  e.proxy = new Proxy(e.proxy ?? e, { get: (t2, r2) => t2[r2]?.bind?.(e) ?? t2[r2] ?? t2?.params?.[r2] });
}, "c");
var n = /* @__PURE__ */ __name(({ format: e = o, missing: r2 = /* @__PURE__ */ __name(() => s(404), "r"), finally: a2 = [], before: n2 = [], ...l } = {}) => t({ before: [c, ...n2], catch: s, finally: [(e2, ...t2) => e2 ?? r2(...t2), e, ...a2], ...l }), "n");
var p = r("text/plain; charset=utf-8", String);
var f = r("text/html");
var u = r("image/jpeg");
var h = r("image/png");
var g = r("image/webp");

// server.js
var import_discord_interactions = __toESM(require_dist());

// client.js
init_checked_fetch();
init_modules_watch_stub();
var DiscordClient = class {
  constructor(token) {
    this.token = token;
  }
  async #makeRequest(url, method) {
    const response = await fetch(url, {
      method,
      headers: {
        "Authorization": `Bot ${this.token}`,
        "Content-Type": "application/json"
      }
    });
    return response;
  }
  async setRoleOnUser(guildId, userId, roleId) {
    const url = `https://discord.com/api/v10/guilds/${guildId}/members/${userId}/roles/${roleId}`;
    return await this.#makeRequest(url, "PUT");
  }
};
__name(DiscordClient, "DiscordClient");

// server.js
var roleManagerCommand = require_roleManager();
var JsonResponse = class extends Response {
  constructor(body, init) {
    const jsonBody = JSON.stringify(body);
    init = init || {
      headers: {
        "content-type": "application/json;charset=UTF-8"
      }
    };
    super(jsonBody, init);
  }
};
__name(JsonResponse, "JsonResponse");
var router = n();
router.get("/", (request, env) => {
  return new Response(`\u{1F44B} ${env.DISCORD_APPLICATION_ID} ${env.DISCORD_PUBLIC_KEY}`);
});
router.post("/", async (request, env) => {
  const { isValid, interaction } = await server.verifyDiscordRequest(
    request,
    env
  );
  if (!isValid || !interaction) {
    return new Response("Bad request signature.", { status: 401 });
  }
  if (interaction.type === import_discord_interactions.InteractionType.PING) {
    return new JsonResponse({
      type: import_discord_interactions.InteractionResponseType.PONG
    });
  } else if (interaction.type === import_discord_interactions.InteractionType.APPLICATION_COMMAND) {
    switch (interaction.data.name.toLowerCase()) {
      case roleManagerCommand.data.name:
        return await roleManagerCommand.execute(interaction);
      default:
        return new JsonResponse({ error: "Unknown Type" }, { status: 400 });
    }
  } else if (interaction.type == import_discord_interactions.InteractionType.APPLICATION_COMMAND_AUTOCOMPLETE) {
    switch (interaction.data.name.toLowerCase()) {
      case roleManagerCommand.data.name:
        return await roleManagerCommand.autocomplete(interaction);
      default:
        return new JsonResponse({ error: "Unknown Type" }, { status: 400 });
    }
  } else if (interaction.type === import_discord_interactions.InteractionType.MESSAGE_COMPONENT) {
    switch (interaction.data.custom_id.toLowerCase()) {
      case "confirm":
        const response = await interaction.client.setRoleOnUser(interaction.guild_id, interaction.member.user.id, "1430569586914230402");
        const content = response.ok ? "\u2705 Thanks for confirming and welcome to the server!" : "\u274C Something went wrong when trying to give you permissions to the server. Try again or contact a mod.";
        return new JsonResponse({
          type: import_discord_interactions.InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
          data: {
            content,
            allowed_mentions: { parse: [] },
            flags: import_discord_interactions.InteractionResponseFlags.EPHEMERAL
          }
        });
      default:
        return new JsonResponse({ error: "Unknown Type" }, { status: 400 });
    }
  }
  console.error("Unknown Type");
  return new JsonResponse({ error: "Unknown Type" }, { status: 400 });
});
router.all("*", () => new Response("Not Found.", { status: 404 }));
async function verifyDiscordRequest(request, env) {
  const signature = request.headers.get("x-signature-ed25519");
  const timestamp = request.headers.get("x-signature-timestamp");
  const body = await request.text();
  const isValidRequest = signature && timestamp && await (0, import_discord_interactions.verifyKey)(body, signature, timestamp, env.DISCORD_PUBLIC_KEY);
  if (!isValidRequest) {
    return { isValid: false };
  }
  let interaction = JSON.parse(body);
  interaction.reply = function(data) {
    return new JsonResponse({
      type: import_discord_interactions.InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
      data
    });
  };
  interaction.respond = function(choices) {
    return new JsonResponse({
      type: import_discord_interactions.InteractionResponseType.APPLICATION_COMMAND_AUTOCOMPLETE_RESULT,
      data: { choices }
    });
  };
  interaction.client = new DiscordClient(env.DISCORD_TOKEN);
  return { interaction, isValid: true };
}
__name(verifyDiscordRequest, "verifyDiscordRequest");
var server = {
  verifyDiscordRequest,
  fetch: router.fetch
};
var server_default = server;

// node_modules/wrangler/templates/middleware/middleware-ensure-req-body-drained.ts
init_checked_fetch();
init_modules_watch_stub();
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
init_checked_fetch();
init_modules_watch_stub();
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

// .wrangler/tmp/bundle-ui2AQl/middleware-insertion-facade.js
var __INTERNAL_WRANGLER_MIDDLEWARE__ = [
  middleware_ensure_req_body_drained_default,
  middleware_miniflare3_json_error_default
];
var middleware_insertion_facade_default = server_default;

// node_modules/wrangler/templates/middleware/common.ts
init_checked_fetch();
init_modules_watch_stub();
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

// .wrangler/tmp/bundle-ui2AQl/middleware-loader.entry.ts
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

@sapphire/shapeshift/dist/cjs/index.cjs:
  (**
   * @license MIT
   * @copyright 2020 Colin McDonnell
   * @see https://github.com/colinhacks/zod/blob/master/LICENSE
   *)
*/
//# sourceMappingURL=server.js.map
