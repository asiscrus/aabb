// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"hVNDP":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "4a236f9275d0a351";
module.bundle.HMR_BUNDLE_ID = "1d975469435bd059";
"use strict";
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    var parents = getParents(module.bundle.root, id); // If no parents, the asset is new. Prevent reloading the page.
    if (!parents.length) return true;
    return parents.some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"dxxdW":[function(require,module,exports) {
var _fontawesomeAllMinCss = require("../css/fontawesome-all.min.css");
var _bootstrapMinCss = require("../css/bootstrap.min.css");
var _magnificPopupCss = require("../css/magnific-popup.css");
var _slickCss = require("../slick/slick.css");
var _slickThemeCss = require("../slick/slick-theme.css");
var _tooplateStyleCss = require("../css/tooplate-style.css");
var _jquery321MinJs = require("./jquery-3.2.1.min.js");
var _jqueryMagnificPopupMinJs = require("./jquery.magnific-popup.min.js");
var _jqueryBackstretchMinJs = require("./jquery.backstretch.min.js");
var _slickMinJs = require("../slick/slick.min.js");

},{"../css/fontawesome-all.min.css":"bkZnW","../css/bootstrap.min.css":"7bZDF","../css/magnific-popup.css":"lCkmv","../slick/slick.css":"enVJQ","../slick/slick-theme.css":"j8Wbk","../css/tooplate-style.css":"9bUUF","./jquery-3.2.1.min.js":"jkGgq","./jquery.magnific-popup.min.js":"03H6P","./jquery.backstretch.min.js":"8rc8L","../slick/slick.min.js":"JI3x6"}],"bkZnW":[function() {},{}],"7bZDF":[function() {},{}],"lCkmv":[function() {},{}],"enVJQ":[function() {},{}],"j8Wbk":[function() {},{}],"9bUUF":[function() {},{}],"jkGgq":[function(require,module,exports) {
/*! jQuery v3.2.1 | (c) JS Foundation and other contributors | jquery.org/license */ !function(a1, b) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a1.document ? b(a1, !0) : function(a) {
        if (!a.document) throw new Error("jQuery requires a window with a document");
        return b(a);
    } : b(a1);
}("undefined" != typeof window ? window : this, function(a2, b1) {
    "use strict";
    var c1 = [], d1 = a2.document, e1 = Object.getPrototypeOf, f1 = c1.slice, g1 = c1.concat, h1 = c1.push, i1 = c1.indexOf, j1 = {
    }, k1 = j1.toString, l1 = j1.hasOwnProperty, m1 = l1.toString, n1 = m1.call(Object), o1 = {
    };
    function p1(a, b) {
        b = b || d1;
        var c = b.createElement("script");
        c.text = a, b.head.appendChild(c).parentNode.removeChild(c);
    }
    var q1 = "3.2.1", r1 = function(a, b) {
        return new r1.fn.init(a, b);
    }, s1 = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, t1 = /^-ms-/, u1 = /-([a-z])/g, v1 = function(a, b) {
        return b.toUpperCase();
    };
    r1.fn = r1.prototype = {
        jquery: q1,
        constructor: r1,
        length: 0,
        toArray: function() {
            return f1.call(this);
        },
        get: function(a) {
            return null == a ? f1.call(this) : a < 0 ? this[a + this.length] : this[a];
        },
        pushStack: function(a) {
            var b = r1.merge(this.constructor(), a);
            return b.prevObject = this, b;
        },
        each: function(a) {
            return r1.each(this, a);
        },
        map: function(a) {
            return this.pushStack(r1.map(this, function(b, c) {
                return a.call(b, c, b);
            }));
        },
        slice: function() {
            return this.pushStack(f1.apply(this, arguments));
        },
        first: function() {
            return this.eq(0);
        },
        last: function() {
            return this.eq(-1);
        },
        eq: function(a) {
            var b = this.length, c = +a + (a < 0 ? b : 0);
            return this.pushStack(c >= 0 && c < b ? [
                this[c]
            ] : []);
        },
        end: function() {
            return this.prevObject || this.constructor();
        },
        push: h1,
        sort: c1.sort,
        splice: c1.splice
    }, r1.extend = r1.fn.extend = function() {
        var a, b, c, d, e, f, g = arguments[0] || {
        }, h = 1, i = arguments.length, j = !1;
        for("boolean" == typeof g && (j = g, g = arguments[h] || {
        }, h++), "object" == typeof g || r1.isFunction(g) || (g = {
        }), h === i && (g = this, h--); h < i; h++)if (null != (a = arguments[h])) for(b in a)c = g[b], d = a[b], g !== d && (j && d && (r1.isPlainObject(d) || (e = Array.isArray(d))) ? (e ? (e = !1, f = c && Array.isArray(c) ? c : []) : f = c && r1.isPlainObject(c) ? c : {
        }, g[b] = r1.extend(j, f, d)) : void 0 !== d && (g[b] = d));
        return g;
    }, r1.extend({
        expando: "jQuery" + (q1 + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(a) {
            throw new Error(a);
        },
        noop: function() {
        },
        isFunction: function(a) {
            return "function" === r1.type(a);
        },
        isWindow: function(a) {
            return null != a && a === a.window;
        },
        isNumeric: function(a) {
            var b = r1.type(a);
            return ("number" === b || "string" === b) && !isNaN(a - parseFloat(a));
        },
        isPlainObject: function(a) {
            var b, c;
            return !(!a || "[object Object]" !== k1.call(a)) && (!(b = e1(a)) || (c = l1.call(b, "constructor") && b.constructor, "function" == typeof c && m1.call(c) === n1));
        },
        isEmptyObject: function(a) {
            var b;
            for(b in a)return !1;
            return !0;
        },
        type: function(a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? j1[k1.call(a)] || "object" : typeof a;
        },
        globalEval: function(a) {
            p1(a);
        },
        camelCase: function(a) {
            return a.replace(t1, "ms-").replace(u1, v1);
        },
        each: function(a, b) {
            var c, d = 0;
            if (w1(a)) {
                for(c = a.length; d < c; d++)if (b.call(a[d], d, a[d]) === !1) break;
            } else for(d in a)if (b.call(a[d], d, a[d]) === !1) break;
            return a;
        },
        trim: function(a) {
            return null == a ? "" : (a + "").replace(s1, "");
        },
        makeArray: function(a, b) {
            var c = b || [];
            return null != a && (w1(Object(a)) ? r1.merge(c, "string" == typeof a ? [
                a
            ] : a) : h1.call(c, a)), c;
        },
        inArray: function(a, b, c) {
            return null == b ? -1 : i1.call(b, a, c);
        },
        merge: function(a, b) {
            for(var c = +b.length, d = 0, e = a.length; d < c; d++)a[e++] = b[d];
            return a.length = e, a;
        },
        grep: function(a, b, c) {
            for(var d, e = [], f = 0, g = a.length, h = !c; f < g; f++)d = !b(a[f], f), d !== h && e.push(a[f]);
            return e;
        },
        map: function(a, b, c) {
            var d, e, f = 0, h = [];
            if (w1(a)) for(d = a.length; f < d; f++)e = b(a[f], f, c), null != e && h.push(e);
            else for(f in a)e = b(a[f], f, c), null != e && h.push(e);
            return g1.apply([], h);
        },
        guid: 1,
        proxy: function(a, b) {
            var c, d, e;
            if ("string" == typeof b && (c = a[b], b = a, a = c), r1.isFunction(a)) return d = f1.call(arguments, 2), e = function() {
                return a.apply(b || this, d.concat(f1.call(arguments)));
            }, e.guid = a.guid = a.guid || r1.guid++, e;
        },
        now: Date.now,
        support: o1
    }), "function" == typeof Symbol && (r1.fn[Symbol.iterator] = c1[Symbol.iterator]), r1.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(a, b) {
        j1["[object " + b + "]"] = b.toLowerCase();
    });
    function w1(a) {
        var b = !!a && "length" in a && a.length, c = r1.type(a);
        return "function" !== c && !r1.isWindow(a) && ("array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a);
    }
    var x1 = function(a3) {
        var b2, c2, d2, e2, f2, g2, h2, i2, j2, k2, l2, m2, n2, o2, p2, q2, r2, s2, t2, u2 = "sizzle" + 1 * new Date, v2 = a3.document, w2 = 0, x2 = 0, y2 = ha(), z2 = ha(), A = ha(), B = function(a, b) {
            return a === b && (l2 = !0), 0;
        }, C = {
        }.hasOwnProperty, D = [], E = D.pop, F = D.push, G = D.push, H = D.slice, I = function(a, b) {
            for(var c = 0, d = a.length; c < d; c++)if (a[c] === b) return c;
            return -1;
        }, J = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", K = "[\\x20\\t\\r\\n\\f]", L = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+", M = "\\[" + K + "*(" + L + ")(?:" + K + "*([*^$|!~]?=)" + K + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + L + "))|)" + K + "*\\]", N = ":(" + L + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + M + ")*)|.*)\\)|)", O = new RegExp(K + "+", "g"), P = new RegExp("^" + K + "+|((?:^|[^\\\\])(?:\\\\.)*)" + K + "+$", "g"), Q = new RegExp("^" + K + "*," + K + "*"), R = new RegExp("^" + K + "*([>+~]|" + K + ")" + K + "*"), S = new RegExp("=" + K + "*([^\\]'\"]*?)" + K + "*\\]", "g"), T = new RegExp(N), U = new RegExp("^" + L + "$"), V = {
            ID: new RegExp("^#(" + L + ")"),
            CLASS: new RegExp("^\\.(" + L + ")"),
            TAG: new RegExp("^(" + L + "|[*])"),
            ATTR: new RegExp("^" + M),
            PSEUDO: new RegExp("^" + N),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + K + "*(even|odd|(([+-]|)(\\d*)n|)" + K + "*(?:([+-]|)" + K + "*(\\d+)|))" + K + "*\\)|)", "i"),
            bool: new RegExp("^(?:" + J + ")$", "i"),
            needsContext: new RegExp("^" + K + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + K + "*((?:-\\d)?\\d*)" + K + "*\\)|)(?=[^-]|$)", "i")
        }, W = /^(?:input|select|textarea|button)$/i, X = /^h\d$/i, Y = /^[^{]+\{\s*\[native \w/, Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, $ = /[+~]/, _ = new RegExp("\\\\([\\da-f]{1,6}" + K + "?|(" + K + ")|.)", "ig"), aa = function(a, b, c) {
            var d = "0x" + b - 65536;
            return d !== d || c ? b : d < 0 ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320);
        }, ba = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, ca = function(a, b) {
            return b ? "\0" === a ? "\ufffd" : a.slice(0, -1) + "\\" + a.charCodeAt(a.length - 1).toString(16) + " " : "\\" + a;
        }, da = function() {
            m2();
        }, ea = ta(function(a) {
            return a.disabled === !0 && ("form" in a || "label" in a);
        }, {
            dir: "parentNode",
            next: "legend"
        });
        try {
            G.apply(D = H.call(v2.childNodes), v2.childNodes), D[v2.childNodes.length].nodeType;
        } catch (fa) {
            G = {
                apply: D.length ? function(a, b) {
                    F.apply(a, H.call(b));
                } : function(a, b) {
                    var c = a.length, d = 0;
                    while(a[c++] = b[d++]);
                    a.length = c - 1;
                }
            };
        }
        function ga(a, b, d, e) {
            var f, h, j, k, l, o, r, s = b && b.ownerDocument, w = b ? b.nodeType : 9;
            if (d = d || [], "string" != typeof a || !a || 1 !== w && 9 !== w && 11 !== w) return d;
            if (!e && ((b ? b.ownerDocument || b : v2) !== n2 && m2(b), b = b || n2, p2)) {
                if (11 !== w && (l = Z.exec(a))) {
                    if (f = l[1]) {
                        if (9 === w) {
                            if (!(j = b.getElementById(f))) return d;
                            if (j.id === f) return d.push(j), d;
                        } else if (s && (j = s.getElementById(f)) && t2(b, j) && j.id === f) return d.push(j), d;
                    } else {
                        if (l[2]) return G.apply(d, b.getElementsByTagName(a)), d;
                        if ((f = l[3]) && c2.getElementsByClassName && b.getElementsByClassName) return G.apply(d, b.getElementsByClassName(f)), d;
                    }
                }
                if (c2.qsa && !A[a + " "] && (!q2 || !q2.test(a))) {
                    if (1 !== w) s = b, r = a;
                    else if ("object" !== b.nodeName.toLowerCase()) {
                        (k = b.getAttribute("id")) ? k = k.replace(ba, ca) : b.setAttribute("id", k = u2), o = g2(a), h = o.length;
                        while(h--)o[h] = "#" + k + " " + sa(o[h]);
                        r = o.join(","), s = $.test(a) && qa(b.parentNode) || b;
                    }
                    if (r) try {
                        return G.apply(d, s.querySelectorAll(r)), d;
                    } catch (x) {
                    } finally{
                        k === u2 && b.removeAttribute("id");
                    }
                }
            }
            return i2(a.replace(P, "$1"), b, d, e);
        }
        function ha() {
            var a = [];
            function b(c, e) {
                return a.push(c + " ") > d2.cacheLength && delete b[a.shift()], b[c + " "] = e;
            }
            return b;
        }
        function ia(a) {
            return a[u2] = !0, a;
        }
        function ja(a) {
            var b = n2.createElement("fieldset");
            try {
                return !!a(b);
            } catch (c) {
                return !1;
            } finally{
                b.parentNode && b.parentNode.removeChild(b), b = null;
            }
        }
        function ka(a, b) {
            var c = a.split("|"), e = c.length;
            while(e--)d2.attrHandle[c[e]] = b;
        }
        function la(a, b) {
            var c = b && a, d = c && 1 === a.nodeType && 1 === b.nodeType && a.sourceIndex - b.sourceIndex;
            if (d) return d;
            if (c) {
                while(c = c.nextSibling)if (c === b) return -1;
            }
            return a ? 1 : -1;
        }
        function ma(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a;
            };
        }
        function na(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a;
            };
        }
        function oa(a) {
            return function(b) {
                return "form" in b ? b.parentNode && b.disabled === !1 ? "label" in b ? "label" in b.parentNode ? b.parentNode.disabled === a : b.disabled === a : b.isDisabled === a || b.isDisabled !== !a && ea(b) === a : b.disabled === a : "label" in b && b.disabled === a;
            };
        }
        function pa(a) {
            return ia(function(b) {
                return b = +b, ia(function(c, d) {
                    var e, f = a([], c.length, b), g = f.length;
                    while(g--)c[e = f[g]] && (c[e] = !(d[e] = c[e]));
                });
            });
        }
        function qa(a) {
            return a && "undefined" != typeof a.getElementsByTagName && a;
        }
        c2 = ga.support = {
        }, f2 = ga.isXML = function(a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return !!b && "HTML" !== b.nodeName;
        }, m2 = ga.setDocument = function(a4) {
            var b3, e3, g3 = a4 ? a4.ownerDocument || a4 : v2;
            return g3 !== n2 && 9 === g3.nodeType && g3.documentElement ? (n2 = g3, o2 = n2.documentElement, p2 = !f2(n2), v2 !== n2 && (e3 = n2.defaultView) && e3.top !== e3 && (e3.addEventListener ? e3.addEventListener("unload", da, !1) : e3.attachEvent && e3.attachEvent("onunload", da)), c2.attributes = ja(function(a) {
                return a.className = "i", !a.getAttribute("className");
            }), c2.getElementsByTagName = ja(function(a) {
                return a.appendChild(n2.createComment("")), !a.getElementsByTagName("*").length;
            }), c2.getElementsByClassName = Y.test(n2.getElementsByClassName), c2.getById = ja(function(a) {
                return o2.appendChild(a).id = u2, !n2.getElementsByName || !n2.getElementsByName(u2).length;
            }), c2.getById ? (d2.filter.ID = function(a5) {
                var b = a5.replace(_, aa);
                return function(a) {
                    return a.getAttribute("id") === b;
                };
            }, d2.find.ID = function(a, b) {
                if ("undefined" != typeof b.getElementById && p2) {
                    var c = b.getElementById(a);
                    return c ? [
                        c
                    ] : [];
                }
            }) : (d2.filter.ID = function(a6) {
                var b = a6.replace(_, aa);
                return function(a) {
                    var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
                    return c && c.value === b;
                };
            }, d2.find.ID = function(a, b) {
                if ("undefined" != typeof b.getElementById && p2) {
                    var c, d, e, f = b.getElementById(a);
                    if (f) {
                        if (c = f.getAttributeNode("id"), c && c.value === a) return [
                            f
                        ];
                        e = b.getElementsByName(a), d = 0;
                        while(f = e[d++])if (c = f.getAttributeNode("id"), c && c.value === a) return [
                            f
                        ];
                    }
                    return [];
                }
            }), d2.find.TAG = c2.getElementsByTagName ? function(a, b) {
                return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c2.qsa ? b.querySelectorAll(a) : void 0;
            } : function(a, b) {
                var c, d = [], e = 0, f = b.getElementsByTagName(a);
                if ("*" === a) {
                    while(c = f[e++])1 === c.nodeType && d.push(c);
                    return d;
                }
                return f;
            }, d2.find.CLASS = c2.getElementsByClassName && function(a, b) {
                if ("undefined" != typeof b.getElementsByClassName && p2) return b.getElementsByClassName(a);
            }, r2 = [], q2 = [], (c2.qsa = Y.test(n2.querySelectorAll)) && (ja(function(a) {
                o2.appendChild(a).innerHTML = "<a id='" + u2 + "'></a><select id='" + u2 + "-\r\\' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q2.push("[*^$]=" + K + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q2.push("\\[" + K + "*(?:value|" + J + ")"), a.querySelectorAll("[id~=" + u2 + "-]").length || q2.push("~="), a.querySelectorAll(":checked").length || q2.push(":checked"), a.querySelectorAll("a#" + u2 + "+*").length || q2.push(".#.+[+~]");
            }), ja(function(a) {
                a.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var b = n2.createElement("input");
                b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q2.push("name" + K + "*[*^$|!~]?="), 2 !== a.querySelectorAll(":enabled").length && q2.push(":enabled", ":disabled"), o2.appendChild(a).disabled = !0, 2 !== a.querySelectorAll(":disabled").length && q2.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q2.push(",.*:");
            })), (c2.matchesSelector = Y.test(s2 = o2.matches || o2.webkitMatchesSelector || o2.mozMatchesSelector || o2.oMatchesSelector || o2.msMatchesSelector)) && ja(function(a) {
                c2.disconnectedMatch = s2.call(a, "*"), s2.call(a, "[s!='']:x"), r2.push("!=", N);
            }), q2 = q2.length && new RegExp(q2.join("|")), r2 = r2.length && new RegExp(r2.join("|")), b3 = Y.test(o2.compareDocumentPosition), t2 = b3 || Y.test(o2.contains) ? function(a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a, d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)));
            } : function(a, b) {
                if (b) {
                    while(b = b.parentNode)if (b === a) return !0;
                }
                return !1;
            }, B = b3 ? function(a, b) {
                if (a === b) return l2 = !0, 0;
                var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
                return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c2.sortDetached && b.compareDocumentPosition(a) === d ? a === n2 || a.ownerDocument === v2 && t2(v2, a) ? -1 : b === n2 || b.ownerDocument === v2 && t2(v2, b) ? 1 : k2 ? I(k2, a) - I(k2, b) : 0 : 4 & d ? -1 : 1);
            } : function(a, b) {
                if (a === b) return l2 = !0, 0;
                var c, d = 0, e = a.parentNode, f = b.parentNode, g = [
                    a
                ], h = [
                    b
                ];
                if (!e || !f) return a === n2 ? -1 : b === n2 ? 1 : e ? -1 : f ? 1 : k2 ? I(k2, a) - I(k2, b) : 0;
                if (e === f) return la(a, b);
                c = a;
                while(c = c.parentNode)g.unshift(c);
                c = b;
                while(c = c.parentNode)h.unshift(c);
                while(g[d] === h[d])d++;
                return d ? la(g[d], h[d]) : g[d] === v2 ? -1 : h[d] === v2 ? 1 : 0;
            }, n2) : n2;
        }, ga.matches = function(a, b) {
            return ga(a, null, null, b);
        }, ga.matchesSelector = function(a, b) {
            if ((a.ownerDocument || a) !== n2 && m2(a), b = b.replace(S, "='$1']"), c2.matchesSelector && p2 && !A[b + " "] && (!r2 || !r2.test(b)) && (!q2 || !q2.test(b))) try {
                var d = s2.call(a, b);
                if (d || c2.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d;
            } catch (e) {
            }
            return ga(b, n2, null, [
                a
            ]).length > 0;
        }, ga.contains = function(a, b) {
            return (a.ownerDocument || a) !== n2 && m2(a), t2(a, b);
        }, ga.attr = function(a, b) {
            (a.ownerDocument || a) !== n2 && m2(a);
            var e = d2.attrHandle[b.toLowerCase()], f = e && C.call(d2.attrHandle, b.toLowerCase()) ? e(a, b, !p2) : void 0;
            return void 0 !== f ? f : c2.attributes || !p2 ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null;
        }, ga.escape = function(a) {
            return (a + "").replace(ba, ca);
        }, ga.error = function(a) {
            throw new Error("Syntax error, unrecognized expression: " + a);
        }, ga.uniqueSort = function(a) {
            var b, d = [], e = 0, f = 0;
            if (l2 = !c2.detectDuplicates, k2 = !c2.sortStable && a.slice(0), a.sort(B), l2) {
                while(b = a[f++])b === a[f] && (e = d.push(f));
                while(e--)a.splice(d[e], 1);
            }
            return k2 = null, a;
        }, e2 = ga.getText = function(a) {
            var b, c = "", d = 0, f = a.nodeType;
            if (f) {
                if (1 === f || 9 === f || 11 === f) {
                    if ("string" == typeof a.textContent) return a.textContent;
                    for(a = a.firstChild; a; a = a.nextSibling)c += e2(a);
                } else if (3 === f || 4 === f) return a.nodeValue;
            } else while(b = a[d++])c += e2(b);
            return c;
        }, d2 = ga.selectors = {
            cacheLength: 50,
            createPseudo: ia,
            match: V,
            attrHandle: {
            },
            find: {
            },
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(a) {
                    return a[1] = a[1].replace(_, aa), a[3] = (a[3] || a[4] || a[5] || "").replace(_, aa), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4);
                },
                CHILD: function(a) {
                    return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || ga.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && ga.error(a[0]), a;
                },
                PSEUDO: function(a) {
                    var b, c = !a[6] && a[2];
                    return V.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && T.test(c) && (b = g2(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3));
                }
            },
            filter: {
                TAG: function(a7) {
                    var b = a7.replace(_, aa).toLowerCase();
                    return "*" === a7 ? function() {
                        return !0;
                    } : function(a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b;
                    };
                },
                CLASS: function(a8) {
                    var b = y2[a8 + " "];
                    return b || (b = new RegExp("(^|" + K + ")" + a8 + "(" + K + "|$)"), y2(a8, function(a) {
                        return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "");
                    }));
                },
                ATTR: function(a, b, c) {
                    return function(d) {
                        var e = ga.attr(d, a);
                        return null == e ? "!=" === b : !b || (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(O, " ") + " ").indexOf(c) > -1 : "|=" === b && (e === c || e.slice(0, c.length + 1) === c + "-"));
                    };
                },
                CHILD: function(a9, b4, c, d, e) {
                    var f = "nth" !== a9.slice(0, 3), g = "last" !== a9.slice(-4), h = "of-type" === b4;
                    return 1 === d && 0 === e ? function(a) {
                        return !!a.parentNode;
                    } : function(b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling", q = b.parentNode, r = h && b.nodeName.toLowerCase(), s = !i && !h, t = !1;
                        if (q) {
                            if (f) {
                                while(p){
                                    m = b;
                                    while(m = m[p])if (h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) return !1;
                                    o = p = "only" === a9 && !o && "nextSibling";
                                }
                                return !0;
                            }
                            if (o = [
                                g ? q.firstChild : q.lastChild
                            ], g && s) {
                                m = q, l = m[u2] || (m[u2] = {
                                }), k = l[m.uniqueID] || (l[m.uniqueID] = {
                                }), j = k[a9] || [], n = j[0] === w2 && j[1], t = n && j[2], m = n && q.childNodes[n];
                                while(m = ++n && m && m[p] || (t = n = 0) || o.pop())if (1 === m.nodeType && ++t && m === b) {
                                    k[a9] = [
                                        w2,
                                        n,
                                        t
                                    ];
                                    break;
                                }
                            } else if (s && (m = b, l = m[u2] || (m[u2] = {
                            }), k = l[m.uniqueID] || (l[m.uniqueID] = {
                            }), j = k[a9] || [], n = j[0] === w2 && j[1], t = n), t === !1) {
                                while(m = ++n && m && m[p] || (t = n = 0) || o.pop())if ((h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) && ++t && (s && (l = m[u2] || (m[u2] = {
                                }), k = l[m.uniqueID] || (l[m.uniqueID] = {
                                }), k[a9] = [
                                    w2,
                                    t
                                ]), m === b)) break;
                            }
                            return t -= e, t === d || t % d === 0 && t / d >= 0;
                        }
                    };
                },
                PSEUDO: function(a10, b) {
                    var c3, e = d2.pseudos[a10] || d2.setFilters[a10.toLowerCase()] || ga.error("unsupported pseudo: " + a10);
                    return e[u2] ? e(b) : e.length > 1 ? (c3 = [
                        a10,
                        a10,
                        "",
                        b
                    ], d2.setFilters.hasOwnProperty(a10.toLowerCase()) ? ia(function(a, c) {
                        var d, f = e(a, b), g = f.length;
                        while(g--)d = I(a, f[g]), a[d] = !(c[d] = f[g]);
                    }) : function(a) {
                        return e(a, 0, c3);
                    }) : e;
                }
            },
            pseudos: {
                not: ia(function(a11) {
                    var b5 = [], c = [], d = h2(a11.replace(P, "$1"));
                    return d[u2] ? ia(function(a, b, c, e) {
                        var f, g = d(a, null, e, []), h = a.length;
                        while(h--)(f = g[h]) && (a[h] = !(b[h] = f));
                    }) : function(a, e, f) {
                        return b5[0] = a, d(b5, null, f, c), b5[0] = null, !c.pop();
                    };
                }),
                has: ia(function(a) {
                    return function(b) {
                        return ga(a, b).length > 0;
                    };
                }),
                contains: ia(function(a) {
                    return a = a.replace(_, aa), function(b) {
                        return (b.textContent || b.innerText || e2(b)).indexOf(a) > -1;
                    };
                }),
                lang: ia(function(a) {
                    return U.test(a || "") || ga.error("unsupported lang: " + a), a = a.replace(_, aa).toLowerCase(), function(b) {
                        var c;
                        do if (c = p2 ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-");
                        while ((b = b.parentNode) && 1 === b.nodeType)
                        return !1;
                    };
                }),
                target: function(b) {
                    var c = a3.location && a3.location.hash;
                    return c && c.slice(1) === b.id;
                },
                root: function(a) {
                    return a === o2;
                },
                focus: function(a) {
                    return a === n2.activeElement && (!n2.hasFocus || n2.hasFocus()) && !!(a.type || a.href || ~a.tabIndex);
                },
                enabled: oa(!1),
                disabled: oa(!0),
                checked: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected;
                },
                selected: function(a) {
                    return a.parentNode && a.parentNode.selectedIndex, a.selected === !0;
                },
                empty: function(a) {
                    for(a = a.firstChild; a; a = a.nextSibling)if (a.nodeType < 6) return !1;
                    return !0;
                },
                parent: function(a) {
                    return !d2.pseudos.empty(a);
                },
                header: function(a) {
                    return X.test(a.nodeName);
                },
                input: function(a) {
                    return W.test(a.nodeName);
                },
                button: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b;
                },
                text: function(a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase());
                },
                first: pa(function() {
                    return [
                        0
                    ];
                }),
                last: pa(function(a, b) {
                    return [
                        b - 1
                    ];
                }),
                eq: pa(function(a, b, c) {
                    return [
                        c < 0 ? c + b : c
                    ];
                }),
                even: pa(function(a, b) {
                    for(var c = 0; c < b; c += 2)a.push(c);
                    return a;
                }),
                odd: pa(function(a, b) {
                    for(var c = 1; c < b; c += 2)a.push(c);
                    return a;
                }),
                lt: pa(function(a, b, c) {
                    for(var d = c < 0 ? c + b : c; --d >= 0;)a.push(d);
                    return a;
                }),
                gt: pa(function(a, b, c) {
                    for(var d = c < 0 ? c + b : c; ++d < b;)a.push(d);
                    return a;
                })
            }
        }, d2.pseudos.nth = d2.pseudos.eq;
        for(b2 in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })d2.pseudos[b2] = ma(b2);
        for(b2 in {
            submit: !0,
            reset: !0
        })d2.pseudos[b2] = na(b2);
        function ra() {
        }
        ra.prototype = d2.filters = d2.pseudos, d2.setFilters = new ra, g2 = ga.tokenize = function(a, b) {
            var c, e, f, g, h, i, j, k = z2[a + " "];
            if (k) return b ? 0 : k.slice(0);
            h = a, i = [], j = d2.preFilter;
            while(h){
                c && !(e = Q.exec(h)) || (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = R.exec(h)) && (c = e.shift(), f.push({
                    value: c,
                    type: e[0].replace(P, " ")
                }), h = h.slice(c.length));
                for(g in d2.filter)!(e = V[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({
                    value: c,
                    type: g,
                    matches: e
                }), h = h.slice(c.length));
                if (!c) break;
            }
            return b ? h.length : h ? ga.error(a) : z2(a, i).slice(0);
        };
        function sa(a) {
            for(var b = 0, c = a.length, d = ""; b < c; b++)d += a[b].value;
            return d;
        }
        function ta(a, b6, c4) {
            var d = b6.dir, e4 = b6.next, f = e4 || d, g = c4 && "parentNode" === f, h = x2++;
            return b6.first ? function(b, c, e) {
                while(b = b[d])if (1 === b.nodeType || g) return a(b, c, e);
                return !1;
            } : function(b, c, i) {
                var j, k, l, m = [
                    w2,
                    h
                ];
                if (i) {
                    while(b = b[d])if ((1 === b.nodeType || g) && a(b, c, i)) return !0;
                } else while(b = b[d])if (1 === b.nodeType || g) {
                    if (l = b[u2] || (b[u2] = {
                    }), k = l[b.uniqueID] || (l[b.uniqueID] = {
                    }), e4 && e4 === b.nodeName.toLowerCase()) b = b[d] || b;
                    else {
                        if ((j = k[f]) && j[0] === w2 && j[1] === h) return m[2] = j[2];
                        if (k[f] = m, m[2] = a(b, c, i)) return !0;
                    }
                }
                return !1;
            };
        }
        function ua(a) {
            return a.length > 1 ? function(b, c, d) {
                var e = a.length;
                while(e--)if (!a[e](b, c, d)) return !1;
                return !0;
            } : a[0];
        }
        function va(a, b, c) {
            for(var d = 0, e = b.length; d < e; d++)ga(a, b[d], c);
            return c;
        }
        function wa(a, b, c, d, e) {
            for(var f, g = [], h = 0, i = a.length, j = null != b; h < i; h++)(f = a[h]) && (c && !c(f, d, e) || (g.push(f), j && b.push(h)));
            return g;
        }
        function xa(a, b, c, d, e, f3) {
            return d && !d[u2] && (d = xa(d)), e && !e[u2] && (e = xa(e, f3)), ia(function(f, g, h, i) {
                var j, k, l, m = [], n = [], o = g.length, p = f || va(b || "*", h.nodeType ? [
                    h
                ] : h, []), q = !a || !f && b ? p : wa(p, m, a, h, i), r = c ? e || (f ? a : o || d) ? [] : g : q;
                if (c && c(q, r, h, i), d) {
                    j = wa(r, n), d(j, [], h, i), k = j.length;
                    while(k--)(l = j[k]) && (r[n[k]] = !(q[n[k]] = l));
                }
                if (f) {
                    if (e || a) {
                        if (e) {
                            j = [], k = r.length;
                            while(k--)(l = r[k]) && j.push(q[k] = l);
                            e(null, r = [], j, i);
                        }
                        k = r.length;
                        while(k--)(l = r[k]) && (j = e ? I(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l));
                    }
                } else r = wa(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : G.apply(g, r);
            });
        }
        function ya(a12) {
            for(var b, c5, e5, f = a12.length, g = d2.relative[a12[0].type], h = g || d2.relative[" "], i = g ? 1 : 0, k = ta(function(a) {
                return a === b;
            }, h, !0), l = ta(function(a) {
                return I(b, a) > -1;
            }, h, !0), m = [
                function(a, c, d) {
                    var e = !g && (d || c !== j2) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
                    return b = null, e;
                }
            ]; i < f; i++)if (c5 = d2.relative[a12[i].type]) m = [
                ta(ua(m), c5)
            ];
            else {
                if (c5 = d2.filter[a12[i].type].apply(null, a12[i].matches), c5[u2]) {
                    for(e5 = ++i; e5 < f; e5++)if (d2.relative[a12[e5].type]) break;
                    return xa(i > 1 && ua(m), i > 1 && sa(a12.slice(0, i - 1).concat({
                        value: " " === a12[i - 2].type ? "*" : ""
                    })).replace(P, "$1"), c5, i < e5 && ya(a12.slice(i, e5)), e5 < f && ya(a12 = a12.slice(e5)), e5 < f && sa(a12));
                }
                m.push(c5);
            }
            return ua(m);
        }
        function za(a, b) {
            var c = b.length > 0, e = a.length > 0, f4 = function(f, g, h, i, k) {
                var l, o, q, r = 0, s = "0", t = f && [], u = [], v = j2, x = f || e && d2.find.TAG("*", k), y = w2 += null == v ? 1 : Math.random() || 0.1, z = x.length;
                for(k && (j2 = g === n2 || g || k); s !== z && null != (l = x[s]); s++){
                    if (e && l) {
                        o = 0, g || l.ownerDocument === n2 || (m2(l), h = !p2);
                        while(q = a[o++])if (q(l, g || n2, h)) {
                            i.push(l);
                            break;
                        }
                        k && (w2 = y);
                    }
                    c && ((l = !q && l) && r--, f && t.push(l));
                }
                if (r += s, c && s !== r) {
                    o = 0;
                    while(q = b[o++])q(t, u, g, h);
                    if (f) {
                        if (r > 0) while(s--)t[s] || u[s] || (u[s] = E.call(i));
                        u = wa(u);
                    }
                    G.apply(i, u), k && !f && u.length > 0 && r + b.length > 1 && ga.uniqueSort(i);
                }
                return k && (w2 = y, j2 = v), t;
            };
            return c ? ia(f4) : f4;
        }
        return h2 = ga.compile = function(a, b) {
            var c, d = [], e = [], f = A[a + " "];
            if (!f) {
                b || (b = g2(a)), c = b.length;
                while(c--)f = ya(b[c]), f[u2] ? d.push(f) : e.push(f);
                f = A(a, za(e, d)), f.selector = a;
            }
            return f;
        }, i2 = ga.select = function(a, b, c, e) {
            var f, i, j, k, l, m = "function" == typeof a && a, n = !e && g2(a = m.selector || a);
            if (c = c || [], 1 === n.length) {
                if (i = n[0] = n[0].slice(0), i.length > 2 && "ID" === (j = i[0]).type && 9 === b.nodeType && p2 && d2.relative[i[1].type]) {
                    if (b = (d2.find.ID(j.matches[0].replace(_, aa), b) || [])[0], !b) return c;
                    m && (b = b.parentNode), a = a.slice(i.shift().value.length);
                }
                f = V.needsContext.test(a) ? 0 : i.length;
                while(f--){
                    if (j = i[f], d2.relative[k = j.type]) break;
                    if ((l = d2.find[k]) && (e = l(j.matches[0].replace(_, aa), $.test(i[0].type) && qa(b.parentNode) || b))) {
                        if (i.splice(f, 1), a = e.length && sa(i), !a) return G.apply(c, e), c;
                        break;
                    }
                }
            }
            return (m || h2(a, n))(e, b, !p2, c, !b || $.test(a) && qa(b.parentNode) || b), c;
        }, c2.sortStable = u2.split("").sort(B).join("") === u2, c2.detectDuplicates = !!l2, m2(), c2.sortDetached = ja(function(a) {
            return 1 & a.compareDocumentPosition(n2.createElement("fieldset"));
        }), ja(function(a) {
            return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href");
        }) || ka("type|href|height|width", function(a, b, c) {
            if (!c) return a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2);
        }), c2.attributes && ja(function(a) {
            return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value");
        }) || ka("value", function(a, b, c) {
            if (!c && "input" === a.nodeName.toLowerCase()) return a.defaultValue;
        }), ja(function(a) {
            return null == a.getAttribute("disabled");
        }) || ka(J, function(a, b, c) {
            var d;
            if (!c) return a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null;
        }), ga;
    }(a2);
    r1.find = x1, r1.expr = x1.selectors, r1.expr[":"] = r1.expr.pseudos, r1.uniqueSort = r1.unique = x1.uniqueSort, r1.text = x1.getText, r1.isXMLDoc = x1.isXML, r1.contains = x1.contains, r1.escapeSelector = x1.escape;
    var y1 = function(a, b, c) {
        var d = [], e = void 0 !== c;
        while((a = a[b]) && 9 !== a.nodeType)if (1 === a.nodeType) {
            if (e && r1(a).is(c)) break;
            d.push(a);
        }
        return d;
    }, z1 = function(a, b) {
        for(var c = []; a; a = a.nextSibling)1 === a.nodeType && a !== b && c.push(a);
        return c;
    }, A1 = r1.expr.match.needsContext;
    function B1(a, b) {
        return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase();
    }
    var C1 = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i, D1 = /^.[^:#\[\.,]*$/;
    function E1(a13, b, c) {
        return r1.isFunction(b) ? r1.grep(a13, function(a, d) {
            return !!b.call(a, d, a) !== c;
        }) : b.nodeType ? r1.grep(a13, function(a) {
            return a === b !== c;
        }) : "string" != typeof b ? r1.grep(a13, function(a) {
            return i1.call(b, a) > -1 !== c;
        }) : D1.test(b) ? r1.filter(b, a13, c) : (b = r1.filter(b, a13), r1.grep(a13, function(a) {
            return i1.call(b, a) > -1 !== c && 1 === a.nodeType;
        }));
    }
    r1.filter = function(a14, b, c) {
        var d = b[0];
        return c && (a14 = ":not(" + a14 + ")"), 1 === b.length && 1 === d.nodeType ? r1.find.matchesSelector(d, a14) ? [
            d
        ] : [] : r1.find.matches(a14, r1.grep(b, function(a) {
            return 1 === a.nodeType;
        }));
    }, r1.fn.extend({
        find: function(a) {
            var b, c, d = this.length, e = this;
            if ("string" != typeof a) return this.pushStack(r1(a).filter(function() {
                for(b = 0; b < d; b++)if (r1.contains(e[b], this)) return !0;
            }));
            for(c = this.pushStack([]), b = 0; b < d; b++)r1.find(a, e[b], c);
            return d > 1 ? r1.uniqueSort(c) : c;
        },
        filter: function(a) {
            return this.pushStack(E1(this, a || [], !1));
        },
        not: function(a) {
            return this.pushStack(E1(this, a || [], !0));
        },
        is: function(a) {
            return !!E1(this, "string" == typeof a && A1.test(a) ? r1(a) : a || [], !1).length;
        }
    });
    var F1, G1 = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/, H1 = r1.fn.init = function(a, b, c) {
        var e, f;
        if (!a) return this;
        if (c = c || F1, "string" == typeof a) {
            if (e = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [
                null,
                a,
                null
            ] : G1.exec(a), !e || !e[1] && b) return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a);
            if (e[1]) {
                if (b = b instanceof r1 ? b[0] : b, r1.merge(this, r1.parseHTML(e[1], b && b.nodeType ? b.ownerDocument || b : d1, !0)), C1.test(e[1]) && r1.isPlainObject(b)) for(e in b)r1.isFunction(this[e]) ? this[e](b[e]) : this.attr(e, b[e]);
                return this;
            }
            return f = d1.getElementById(e[2]), f && (this[0] = f, this.length = 1), this;
        }
        return a.nodeType ? (this[0] = a, this.length = 1, this) : r1.isFunction(a) ? void 0 !== c.ready ? c.ready(a) : a(r1) : r1.makeArray(a, this);
    };
    H1.prototype = r1.fn, F1 = r1(d1);
    var I1 = /^(?:parents|prev(?:Until|All))/, J1 = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    r1.fn.extend({
        has: function(a15) {
            var b = r1(a15, this), c = b.length;
            return this.filter(function() {
                for(var a = 0; a < c; a++)if (r1.contains(this, b[a])) return !0;
            });
        },
        closest: function(a, b) {
            var c, d = 0, e = this.length, f = [], g = "string" != typeof a && r1(a);
            if (!A1.test(a)) {
                for(; d < e; d++)for(c = this[d]; c && c !== b; c = c.parentNode)if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && r1.find.matchesSelector(c, a))) {
                    f.push(c);
                    break;
                }
            }
            return this.pushStack(f.length > 1 ? r1.uniqueSort(f) : f);
        },
        index: function(a) {
            return a ? "string" == typeof a ? i1.call(r1(a), this[0]) : i1.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
        },
        add: function(a, b) {
            return this.pushStack(r1.uniqueSort(r1.merge(this.get(), r1(a, b))));
        },
        addBack: function(a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a));
        }
    });
    function K1(a, b) {
        while((a = a[b]) && 1 !== a.nodeType);
        return a;
    }
    r1.each({
        parent: function(a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null;
        },
        parents: function(a) {
            return y1(a, "parentNode");
        },
        parentsUntil: function(a, b, c) {
            return y1(a, "parentNode", c);
        },
        next: function(a) {
            return K1(a, "nextSibling");
        },
        prev: function(a) {
            return K1(a, "previousSibling");
        },
        nextAll: function(a) {
            return y1(a, "nextSibling");
        },
        prevAll: function(a) {
            return y1(a, "previousSibling");
        },
        nextUntil: function(a, b, c) {
            return y1(a, "nextSibling", c);
        },
        prevUntil: function(a, b, c) {
            return y1(a, "previousSibling", c);
        },
        siblings: function(a) {
            return z1((a.parentNode || {
            }).firstChild, a);
        },
        children: function(a) {
            return z1(a.firstChild);
        },
        contents: function(a) {
            return B1(a, "iframe") ? a.contentDocument : (B1(a, "template") && (a = a.content || a), r1.merge([], a.childNodes));
        }
    }, function(a, b) {
        r1.fn[a] = function(c, d) {
            var e = r1.map(this, b, c);
            return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = r1.filter(d, e)), this.length > 1 && (J1[a] || r1.uniqueSort(e), I1.test(a) && e.reverse()), this.pushStack(e);
        };
    });
    var L1 = /[^\x20\t\r\n\f]+/g;
    function M1(a) {
        var b = {
        };
        return r1.each(a.match(L1) || [], function(a, c) {
            b[c] = !0;
        }), b;
    }
    r1.Callbacks = function(a16) {
        a16 = "string" == typeof a16 ? M1(a16) : r1.extend({
        }, a16);
        var b7, c6, d3, e, f = [], g = [], h = -1, i = function() {
            for(e = e || a16.once, d3 = b7 = !0; g.length; h = -1){
                c6 = g.shift();
                while(++h < f.length)f[h].apply(c6[0], c6[1]) === !1 && a16.stopOnFalse && (h = f.length, c6 = !1);
            }
            a16.memory || (c6 = !1), b7 = !1, e && (f = c6 ? [] : "");
        }, j = {
            add: function() {
                return f && (c6 && !b7 && (h = f.length - 1, g.push(c6)), (function d(b) {
                    r1.each(b, function(b, c) {
                        r1.isFunction(c) ? a16.unique && j.has(c) || f.push(c) : c && c.length && "string" !== r1.type(c) && d(c);
                    });
                })(arguments), c6 && !b7 && i()), this;
            },
            remove: function() {
                return r1.each(arguments, function(a, b) {
                    var c;
                    while((c = r1.inArray(b, f, c)) > -1)f.splice(c, 1), c <= h && h--;
                }), this;
            },
            has: function(a) {
                return a ? r1.inArray(a, f) > -1 : f.length > 0;
            },
            empty: function() {
                return f && (f = []), this;
            },
            disable: function() {
                return e = g = [], f = c6 = "", this;
            },
            disabled: function() {
                return !f;
            },
            lock: function() {
                return e = g = [], c6 || b7 || (f = c6 = ""), this;
            },
            locked: function() {
                return !!e;
            },
            fireWith: function(a, c) {
                return e || (c = c || [], c = [
                    a,
                    c.slice ? c.slice() : c
                ], g.push(c), b7 || i()), this;
            },
            fire: function() {
                return j.fireWith(this, arguments), this;
            },
            fired: function() {
                return !!d3;
            }
        };
        return j;
    };
    function N1(a) {
        return a;
    }
    function O1(a) {
        throw a;
    }
    function P1(a, b, c, d) {
        var e;
        try {
            a && r1.isFunction(e = a.promise) ? e.call(a).done(b).fail(c) : a && r1.isFunction(e = a.then) ? e.call(a, b, c) : b.apply(void 0, [
                a
            ].slice(d));
        } catch (a17) {
            c.apply(void 0, [
                a17
            ]);
        }
    }
    r1.extend({
        Deferred: function(b8) {
            var c7 = [
                [
                    "notify",
                    "progress",
                    r1.Callbacks("memory"),
                    r1.Callbacks("memory"),
                    2
                ],
                [
                    "resolve",
                    "done",
                    r1.Callbacks("once memory"),
                    r1.Callbacks("once memory"),
                    0,
                    "resolved"
                ],
                [
                    "reject",
                    "fail",
                    r1.Callbacks("once memory"),
                    r1.Callbacks("once memory"),
                    1,
                    "rejected"
                ]
            ], d4 = "pending", e6 = {
                state: function() {
                    return d4;
                },
                always: function() {
                    return f5.done(arguments).fail(arguments), this;
                },
                "catch": function(a) {
                    return e6.then(null, a);
                },
                pipe: function() {
                    var a18 = arguments;
                    return r1.Deferred(function(b) {
                        r1.each(c7, function(c, d) {
                            var e = r1.isFunction(a18[d[4]]) && a18[d[4]];
                            f5[d[1]](function() {
                                var a = e && e.apply(this, arguments);
                                a && r1.isFunction(a.promise) ? a.promise().progress(b.notify).done(b.resolve).fail(b.reject) : b[d[0] + "With"](this, e ? [
                                    a
                                ] : arguments);
                            });
                        }), a18 = null;
                    }).promise();
                },
                then: function(b9, d5, e7) {
                    var f = 0;
                    function g(b, c, d, e) {
                        return function() {
                            var h = this, i = arguments, j3 = function() {
                                var a, j;
                                if (!(b < f)) {
                                    if (a = d.apply(h, i), a === c.promise()) throw new TypeError("Thenable self-resolution");
                                    j = a && ("object" == typeof a || "function" == typeof a) && a.then, r1.isFunction(j) ? e ? j.call(a, g(f, c, N1, e), g(f, c, O1, e)) : (f++, j.call(a, g(f, c, N1, e), g(f, c, O1, e), g(f, c, N1, c.notifyWith))) : (d !== N1 && (h = void 0, i = [
                                        a
                                    ]), (e || c.resolveWith)(h, i));
                                }
                            }, k = e ? j3 : function() {
                                try {
                                    j3();
                                } catch (a) {
                                    r1.Deferred.exceptionHook && r1.Deferred.exceptionHook(a, k.stackTrace), b + 1 >= f && (d !== O1 && (h = void 0, i = [
                                        a
                                    ]), c.rejectWith(h, i));
                                }
                            };
                            b ? k() : (r1.Deferred.getStackHook && (k.stackTrace = r1.Deferred.getStackHook()), a2.setTimeout(k));
                        };
                    }
                    return r1.Deferred(function(a) {
                        c7[0][3].add(g(0, a, r1.isFunction(e7) ? e7 : N1, a.notifyWith)), c7[1][3].add(g(0, a, r1.isFunction(b9) ? b9 : N1)), c7[2][3].add(g(0, a, r1.isFunction(d5) ? d5 : O1));
                    }).promise();
                },
                promise: function(a) {
                    return null != a ? r1.extend(a, e6) : e6;
                }
            }, f5 = {
            };
            return r1.each(c7, function(a, b) {
                var g = b[2], h = b[5];
                e6[b[1]] = g.add, h && g.add(function() {
                    d4 = h;
                }, c7[3 - a][2].disable, c7[0][2].lock), g.add(b[3].fire), f5[b[0]] = function() {
                    return f5[b[0] + "With"](this === f5 ? void 0 : this, arguments), this;
                }, f5[b[0] + "With"] = g.fireWith;
            }), e6.promise(f5), b8 && b8.call(f5, f5), f5;
        },
        when: function(a) {
            var b = arguments.length, c8 = b, d = Array(c8), e = f1.call(arguments), g = r1.Deferred(), h = function(a) {
                return function(c) {
                    d[a] = this, e[a] = arguments.length > 1 ? f1.call(arguments) : c, --b || g.resolveWith(d, e);
                };
            };
            if (b <= 1 && (P1(a, g.done(h(c8)).resolve, g.reject, !b), "pending" === g.state() || r1.isFunction(e[c8] && e[c8].then))) return g.then();
            while(c8--)P1(e[c8], h(c8), g.reject);
            return g.promise();
        }
    });
    var Q1 = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    r1.Deferred.exceptionHook = function(b, c) {
        a2.console && a2.console.warn && b && Q1.test(b.name) && a2.console.warn("jQuery.Deferred exception: " + b.message, b.stack, c);
    }, r1.readyException = function(b) {
        a2.setTimeout(function() {
            throw b;
        });
    };
    var R1 = r1.Deferred();
    r1.fn.ready = function(a19) {
        return R1.then(a19)["catch"](function(a) {
            r1.readyException(a);
        }), this;
    }, r1.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(a) {
            (a === !0 ? --r1.readyWait : r1.isReady) || (r1.isReady = !0, a !== !0 && --r1.readyWait > 0 || R1.resolveWith(d1, [
                r1
            ]));
        }
    }), r1.ready.then = R1.then;
    function S1() {
        d1.removeEventListener("DOMContentLoaded", S1), a2.removeEventListener("load", S1), r1.ready();
    }
    "complete" === d1.readyState || "loading" !== d1.readyState && !d1.documentElement.doScroll ? a2.setTimeout(r1.ready) : (d1.addEventListener("DOMContentLoaded", S1), a2.addEventListener("load", S1));
    var T1 = function(a20, b, c9, d, e, f, g) {
        var h = 0, i = a20.length, j = null == c9;
        if ("object" === r1.type(c9)) {
            e = !0;
            for(h in c9)T1(a20, b, h, c9[h], !0, f, g);
        } else if (void 0 !== d && (e = !0, r1.isFunction(d) || (g = !0), j && (g ? (b.call(a20, d), b = null) : (j = b, b = function(a, b, c) {
            return j.call(r1(a), c);
        })), b)) for(; h < i; h++)b(a20[h], c9, g ? d : d.call(a20[h], h, b(a20[h], c9)));
        return e ? a20 : j ? b.call(a20) : i ? b(a20[0], c9) : f;
    }, U1 = function(a) {
        return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType;
    };
    function V1() {
        this.expando = r1.expando + V1.uid++;
    }
    V1.uid = 1, V1.prototype = {
        cache: function(a) {
            var b = a[this.expando];
            return b || (b = {
            }, U1(a) && (a.nodeType ? a[this.expando] = b : Object.defineProperty(a, this.expando, {
                value: b,
                configurable: !0
            }))), b;
        },
        set: function(a, b, c) {
            var d, e = this.cache(a);
            if ("string" == typeof b) e[r1.camelCase(b)] = c;
            else for(d in b)e[r1.camelCase(d)] = b[d];
            return e;
        },
        get: function(a, b) {
            return void 0 === b ? this.cache(a) : a[this.expando] && a[this.expando][r1.camelCase(b)];
        },
        access: function(a, b, c) {
            return void 0 === b || b && "string" == typeof b && void 0 === c ? this.get(a, b) : (this.set(a, b, c), void 0 !== c ? c : b);
        },
        remove: function(a, b) {
            var c, d = a[this.expando];
            if (void 0 !== d) {
                if (void 0 !== b) {
                    Array.isArray(b) ? b = b.map(r1.camelCase) : (b = r1.camelCase(b), b = b in d ? [
                        b
                    ] : b.match(L1) || []), c = b.length;
                    while(c--)delete d[b[c]];
                }
                (void 0 === b || r1.isEmptyObject(d)) && (a.nodeType ? a[this.expando] = void 0 : delete a[this.expando]);
            }
        },
        hasData: function(a) {
            var b = a[this.expando];
            return void 0 !== b && !r1.isEmptyObject(b);
        }
    };
    var W1 = new V1, X1 = new V1, Y1 = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, Z1 = /[A-Z]/g;
    function $1(a) {
        return "true" === a || "false" !== a && ("null" === a ? null : a === +a + "" ? +a : Y1.test(a) ? JSON.parse(a) : a);
    }
    function _1(a, b, c) {
        var d;
        if (void 0 === c && 1 === a.nodeType) {
            if (d = "data-" + b.replace(Z1, "-$&").toLowerCase(), c = a.getAttribute(d), "string" == typeof c) {
                try {
                    c = $1(c);
                } catch (e) {
                }
                X1.set(a, b, c);
            } else c = void 0;
        }
        return c;
    }
    r1.extend({
        hasData: function(a) {
            return X1.hasData(a) || W1.hasData(a);
        },
        data: function(a, b, c) {
            return X1.access(a, b, c);
        },
        removeData: function(a, b) {
            X1.remove(a, b);
        },
        _data: function(a, b, c) {
            return W1.access(a, b, c);
        },
        _removeData: function(a, b) {
            W1.remove(a, b);
        }
    }), r1.fn.extend({
        data: function(a, b10) {
            var c10, d, e, f = this[0], g = f && f.attributes;
            if (void 0 === a) {
                if (this.length && (e = X1.get(f), 1 === f.nodeType && !W1.get(f, "hasDataAttrs"))) {
                    c10 = g.length;
                    while(c10--)g[c10] && (d = g[c10].name, 0 === d.indexOf("data-") && (d = r1.camelCase(d.slice(5)), _1(f, d, e[d])));
                    W1.set(f, "hasDataAttrs", !0);
                }
                return e;
            }
            return "object" == typeof a ? this.each(function() {
                X1.set(this, a);
            }) : T1(this, function(b) {
                var c;
                if (f && void 0 === b) {
                    if (c = X1.get(f, a), void 0 !== c) return c;
                    if (c = _1(f, a), void 0 !== c) return c;
                } else this.each(function() {
                    X1.set(this, a, b);
                });
            }, null, b10, arguments.length > 1, null, !0);
        },
        removeData: function(a) {
            return this.each(function() {
                X1.remove(this, a);
            });
        }
    }), r1.extend({
        queue: function(a, b, c) {
            var d;
            if (a) return b = (b || "fx") + "queue", d = W1.get(a, b), c && (!d || Array.isArray(c) ? d = W1.access(a, b, r1.makeArray(c)) : d.push(c)), d || [];
        },
        dequeue: function(a, b) {
            b = b || "fx";
            var c = r1.queue(a, b), d = c.length, e = c.shift(), f = r1._queueHooks(a, b), g = function() {
                r1.dequeue(a, b);
            };
            "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire();
        },
        _queueHooks: function(a, b) {
            var c = b + "queueHooks";
            return W1.get(a, c) || W1.access(a, c, {
                empty: r1.Callbacks("once memory").add(function() {
                    W1.remove(a, [
                        b + "queue",
                        c
                    ]);
                })
            });
        }
    }), r1.fn.extend({
        queue: function(a, b) {
            var c11 = 2;
            return "string" != typeof a && (b = a, a = "fx", c11--), arguments.length < c11 ? r1.queue(this[0], a) : void 0 === b ? this : this.each(function() {
                var c = r1.queue(this, a, b);
                r1._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && r1.dequeue(this, a);
            });
        },
        dequeue: function(a) {
            return this.each(function() {
                r1.dequeue(this, a);
            });
        },
        clearQueue: function(a) {
            return this.queue(a || "fx", []);
        },
        promise: function(a, b) {
            var c, d = 1, e = r1.Deferred(), f = this, g = this.length, h = function() {
                --d || e.resolveWith(f, [
                    f
                ]);
            };
            "string" != typeof a && (b = a, a = void 0), a = a || "fx";
            while(g--)c = W1.get(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
            return h(), e.promise(b);
        }
    });
    var aa1 = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, ba1 = new RegExp("^(?:([+-])=|)(" + aa1 + ")([a-z%]*)$", "i"), ca1 = [
        "Top",
        "Right",
        "Bottom",
        "Left"
    ], da1 = function(a, b) {
        return a = b || a, "none" === a.style.display || "" === a.style.display && r1.contains(a.ownerDocument, a) && "none" === r1.css(a, "display");
    }, ea1 = function(a, b, c, d) {
        var e, f, g = {
        };
        for(f in b)g[f] = a.style[f], a.style[f] = b[f];
        e = c.apply(a, d || []);
        for(f in b)a.style[f] = g[f];
        return e;
    };
    function fa(a, b, c, d) {
        var e, f = 1, g = 20, h = d ? function() {
            return d.cur();
        } : function() {
            return r1.css(a, b, "");
        }, i = h(), j = c && c[3] || (r1.cssNumber[b] ? "" : "px"), k = (r1.cssNumber[b] || "px" !== j && +i) && ba1.exec(r1.css(a, b));
        if (k && k[3] !== j) {
            j = j || k[3], c = c || [], k = +i || 1;
            do f = f || ".5", k /= f, r1.style(a, b, k + j);
            while (f !== (f = h() / i) && 1 !== f && --g)
        }
        return c && (k = +k || +i || 0, e = c[1] ? k + (c[1] + 1) * c[2] : +c[2], d && (d.unit = j, d.start = k, d.end = e)), e;
    }
    var ga1 = {
    };
    function ha1(a) {
        var b, c = a.ownerDocument, d = a.nodeName, e = ga1[d];
        return e ? e : (b = c.body.appendChild(c.createElement(d)), e = r1.css(b, "display"), b.parentNode.removeChild(b), "none" === e && (e = "block"), ga1[d] = e, e);
    }
    function ia1(a, b) {
        for(var c, d, e = [], f = 0, g = a.length; f < g; f++)d = a[f], d.style && (c = d.style.display, b ? ("none" === c && (e[f] = W1.get(d, "display") || null, e[f] || (d.style.display = "")), "" === d.style.display && da1(d) && (e[f] = ha1(d))) : "none" !== c && (e[f] = "none", W1.set(d, "display", c)));
        for(f = 0; f < g; f++)null != e[f] && (a[f].style.display = e[f]);
        return a;
    }
    r1.fn.extend({
        show: function() {
            return ia1(this, !0);
        },
        hide: function() {
            return ia1(this);
        },
        toggle: function(a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
                da1(this) ? r1(this).show() : r1(this).hide();
            });
        }
    });
    var ja1 = /^(?:checkbox|radio)$/i, ka1 = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i, la1 = /^$|\/(?:java|ecma)script/i, ma1 = {
        option: [
            1,
            "<select multiple='multiple'>",
            "</select>"
        ],
        thead: [
            1,
            "<table>",
            "</table>"
        ],
        col: [
            2,
            "<table><colgroup>",
            "</colgroup></table>"
        ],
        tr: [
            2,
            "<table><tbody>",
            "</tbody></table>"
        ],
        td: [
            3,
            "<table><tbody><tr>",
            "</tr></tbody></table>"
        ],
        _default: [
            0,
            "",
            ""
        ]
    };
    ma1.optgroup = ma1.option, ma1.tbody = ma1.tfoot = ma1.colgroup = ma1.caption = ma1.thead, ma1.th = ma1.td;
    function na1(a, b) {
        var c;
        return c = "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll(b || "*") : [], void 0 === b || b && B1(a, b) ? r1.merge([
            a
        ], c) : c;
    }
    function oa1(a, b) {
        for(var c = 0, d = a.length; c < d; c++)W1.set(a[c], "globalEval", !b || W1.get(b[c], "globalEval"));
    }
    var pa1 = /<|&#?\w+;/;
    function qa1(a, b, c, d, e) {
        for(var f, g, h, i, j, k, l = b.createDocumentFragment(), m = [], n = 0, o = a.length; n < o; n++)if (f = a[n], f || 0 === f) {
            if ("object" === r1.type(f)) r1.merge(m, f.nodeType ? [
                f
            ] : f);
            else if (pa1.test(f)) {
                g = g || l.appendChild(b.createElement("div")), h = (ka1.exec(f) || [
                    "",
                    ""
                ])[1].toLowerCase(), i = ma1[h] || ma1._default, g.innerHTML = i[1] + r1.htmlPrefilter(f) + i[2], k = i[0];
                while(k--)g = g.lastChild;
                r1.merge(m, g.childNodes), g = l.firstChild, g.textContent = "";
            } else m.push(b.createTextNode(f));
        }
        l.textContent = "", n = 0;
        while(f = m[n++])if (d && r1.inArray(f, d) > -1) e && e.push(f);
        else if (j = r1.contains(f.ownerDocument, f), g = na1(l.appendChild(f), "script"), j && oa1(g), c) {
            k = 0;
            while(f = g[k++])la1.test(f.type || "") && c.push(f);
        }
        return l;
    }
    !function() {
        var a = d1.createDocumentFragment(), b = a.appendChild(d1.createElement("div")), c = d1.createElement("input");
        c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), b.appendChild(c), o1.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "<textarea>x</textarea>", o1.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue;
    }();
    var ra1 = d1.documentElement, sa1 = /^key/, ta1 = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, ua1 = /^([^.]*)(?:\.(.+)|)/;
    function va1() {
        return !0;
    }
    function wa1() {
        return !1;
    }
    function xa1() {
        try {
            return d1.activeElement;
        } catch (a) {
        }
    }
    function ya1(a21, b, c, d, e, f) {
        var g, h;
        if ("object" == typeof b) {
            "string" != typeof c && (d = d || c, c = void 0);
            for(h in b)ya1(a21, h, c, d, b[h], f);
            return a21;
        }
        if (null == d && null == e ? (e = c, d = c = void 0) : null == e && ("string" == typeof c ? (e = d, d = void 0) : (e = d, d = c, c = void 0)), e === !1) e = wa1;
        else if (!e) return a21;
        return 1 === f && (g = e, e = function(a) {
            return r1().off(a), g.apply(this, arguments);
        }, e.guid = g.guid || (g.guid = r1.guid++)), a21.each(function() {
            r1.event.add(this, b, e, d, c);
        });
    }
    r1.event = {
        global: {
        },
        add: function(a, b11, c, d, e) {
            var f, g, h, i, j, k, l, m, n, o, p, q = W1.get(a);
            if (q) {
                c.handler && (f = c, c = f.handler, e = f.selector), e && r1.find.matchesSelector(ra1, e), c.guid || (c.guid = r1.guid++), (i = q.events) || (i = q.events = {
                }), (g = q.handle) || (g = q.handle = function(b) {
                    return "undefined" != typeof r1 && r1.event.triggered !== b.type ? r1.event.dispatch.apply(a, arguments) : void 0;
                }), b11 = (b11 || "").match(L1) || [
                    ""
                ], j = b11.length;
                while(j--)h = ua1.exec(b11[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n && (l = r1.event.special[n] || {
                }, n = (e ? l.delegateType : l.bindType) || n, l = r1.event.special[n] || {
                }, k = r1.extend({
                    type: n,
                    origType: p,
                    data: d,
                    handler: c,
                    guid: c.guid,
                    selector: e,
                    needsContext: e && r1.expr.match.needsContext.test(e),
                    namespace: o.join(".")
                }, f), (m = i[n]) || (m = i[n] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, o, g) !== !1 || a.addEventListener && a.addEventListener(n, g)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), r1.event.global[n] = !0);
            }
        },
        remove: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, n, o, p, q = W1.hasData(a) && W1.get(a);
            if (q && (i = q.events)) {
                b = (b || "").match(L1) || [
                    ""
                ], j = b.length;
                while(j--)if (h = ua1.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n) {
                    l = r1.event.special[n] || {
                    }, n = (d ? l.delegateType : l.bindType) || n, m = i[n] || [], h = h[2] && new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length;
                    while(f--)k = m[f], !e && p !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
                    g && !m.length && (l.teardown && l.teardown.call(a, o, q.handle) !== !1 || r1.removeEvent(a, n, q.handle), delete i[n]);
                } else for(n in i)r1.event.remove(a, n + b[j], c, d, !0);
                r1.isEmptyObject(i) && W1.remove(a, "handle events");
            }
        },
        dispatch: function(a) {
            var b = r1.event.fix(a), c, d, e, f, g, h, i = new Array(arguments.length), j = (W1.get(this, "events") || {
            })[b.type] || [], k = r1.event.special[b.type] || {
            };
            for(i[0] = b, c = 1; c < arguments.length; c++)i[c] = arguments[c];
            if (b.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, b) !== !1) {
                h = r1.event.handlers.call(this, b, j), c = 0;
                while((f = h[c++]) && !b.isPropagationStopped()){
                    b.currentTarget = f.elem, d = 0;
                    while((g = f.handlers[d++]) && !b.isImmediatePropagationStopped())b.rnamespace && !b.rnamespace.test(g.namespace) || (b.handleObj = g, b.data = g.data, e = ((r1.event.special[g.origType] || {
                    }).handle || g.handler).apply(f.elem, i), void 0 !== e && (b.result = e) === !1 && (b.preventDefault(), b.stopPropagation()));
                }
                return k.postDispatch && k.postDispatch.call(this, b), b.result;
            }
        },
        handlers: function(a, b) {
            var c, d, e, f, g, h = [], i = b.delegateCount, j = a.target;
            if (i && j.nodeType && !("click" === a.type && a.button >= 1)) {
                for(; j !== this; j = j.parentNode || this)if (1 === j.nodeType && ("click" !== a.type || j.disabled !== !0)) {
                    for(f = [], g = {
                    }, c = 0; c < i; c++)d = b[c], e = d.selector + " ", void 0 === g[e] && (g[e] = d.needsContext ? r1(e, this).index(j) > -1 : r1.find(e, this, null, [
                        j
                    ]).length), g[e] && f.push(d);
                    f.length && h.push({
                        elem: j,
                        handlers: f
                    });
                }
            }
            return j = this, i < b.length && h.push({
                elem: j,
                handlers: b.slice(i)
            }), h;
        },
        addProp: function(a, b12) {
            Object.defineProperty(r1.Event.prototype, a, {
                enumerable: !0,
                configurable: !0,
                get: r1.isFunction(b12) ? function() {
                    if (this.originalEvent) return b12(this.originalEvent);
                } : function() {
                    if (this.originalEvent) return this.originalEvent[a];
                },
                set: function(b) {
                    Object.defineProperty(this, a, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: b
                    });
                }
            });
        },
        fix: function(a) {
            return a[r1.expando] ? a : new r1.Event(a);
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== xa1() && this.focus) return this.focus(), !1;
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === xa1() && this.blur) return this.blur(), !1;
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if ("checkbox" === this.type && this.click && B1(this, "input")) return this.click(), !1;
                },
                _default: function(a) {
                    return B1(a.target, "a");
                }
            },
            beforeunload: {
                postDispatch: function(a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result);
                }
            }
        }
    }, r1.removeEvent = function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c);
    }, r1.Event = function(a, b) {
        return this instanceof r1.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? va1 : wa1, this.target = a.target && 3 === a.target.nodeType ? a.target.parentNode : a.target, this.currentTarget = a.currentTarget, this.relatedTarget = a.relatedTarget) : this.type = a, b && r1.extend(this, b), this.timeStamp = a && a.timeStamp || r1.now(), void (this[r1.expando] = !0)) : new r1.Event(a, b);
    }, r1.Event.prototype = {
        constructor: r1.Event,
        isDefaultPrevented: wa1,
        isPropagationStopped: wa1,
        isImmediatePropagationStopped: wa1,
        isSimulated: !1,
        preventDefault: function() {
            var a = this.originalEvent;
            this.isDefaultPrevented = va1, a && !this.isSimulated && a.preventDefault();
        },
        stopPropagation: function() {
            var a = this.originalEvent;
            this.isPropagationStopped = va1, a && !this.isSimulated && a.stopPropagation();
        },
        stopImmediatePropagation: function() {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = va1, a && !this.isSimulated && a.stopImmediatePropagation(), this.stopPropagation();
        }
    }, r1.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        "char": !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function(a) {
            var b = a.button;
            return null == a.which && sa1.test(a.type) ? null != a.charCode ? a.charCode : a.keyCode : !a.which && void 0 !== b && ta1.test(a.type) ? 1 & b ? 1 : 2 & b ? 3 : 4 & b ? 2 : 0 : a.which;
        }
    }, r1.event.addProp), r1.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(a22, b) {
        r1.event.special[a22] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
                var c, d = this, e = a.relatedTarget, f = a.handleObj;
                return e && (e === d || r1.contains(d, e)) || (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c;
            }
        };
    }), r1.fn.extend({
        on: function(a, b, c, d) {
            return ya1(this, a, b, c, d);
        },
        one: function(a, b, c, d) {
            return ya1(this, a, b, c, d, 1);
        },
        off: function(a, b, c) {
            var d, e;
            if (a && a.preventDefault && a.handleObj) return d = a.handleObj, r1(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
            if ("object" == typeof a) {
                for(e in a)this.off(e, b, a[e]);
                return this;
            }
            return b !== !1 && "function" != typeof b || (c = b, b = void 0), c === !1 && (c = wa1), this.each(function() {
                r1.event.remove(this, a, c, b);
            });
        }
    });
    var za1 = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi, Aa = /<script|<style|<link/i, Ba = /checked\s*(?:[^=]|=\s*.checked.)/i, Ca = /^true\/(.*)/, Da = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    function Ea(a, b) {
        return B1(a, "table") && B1(11 !== b.nodeType ? b : b.firstChild, "tr") ? r1(">tbody", a)[0] || a : a;
    }
    function Fa(a) {
        return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a;
    }
    function Ga(a) {
        var b = Ca.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"), a;
    }
    function Ha(a, b) {
        var c, d, e, f, g, h, i, j;
        if (1 === b.nodeType) {
            if (W1.hasData(a) && (f = W1.access(a), g = W1.set(b, f), j = f.events)) {
                delete g.handle, g.events = {
                };
                for(e in j)for(c = 0, d = j[e].length; c < d; c++)r1.event.add(b, e, j[e][c]);
            }
            X1.hasData(a) && (h = X1.access(a), i = r1.extend({
            }, h), X1.set(b, i));
        }
    }
    function Ia(a, b) {
        var c = b.nodeName.toLowerCase();
        "input" === c && ja1.test(a.type) ? b.checked = a.checked : "input" !== c && "textarea" !== c || (b.defaultValue = a.defaultValue);
    }
    function Ja(a, b, c, d) {
        b = g1.apply([], b);
        var e8, f6, h, i, j, k, l = 0, m = a.length, n = m - 1, q = b[0], s = r1.isFunction(q);
        if (s || m > 1 && "string" == typeof q && !o1.checkClone && Ba.test(q)) return a.each(function(e) {
            var f = a.eq(e);
            s && (b[0] = q.call(this, e, f.html())), Ja(f, b, c, d);
        });
        if (m && (e8 = qa1(b, a[0].ownerDocument, !1, a, d), f6 = e8.firstChild, 1 === e8.childNodes.length && (e8 = f6), f6 || d)) {
            for(h = r1.map(na1(e8, "script"), Fa), i = h.length; l < m; l++)j = e8, l !== n && (j = r1.clone(j, !0, !0), i && r1.merge(h, na1(j, "script"))), c.call(a[l], j, l);
            if (i) for(k = h[h.length - 1].ownerDocument, r1.map(h, Ga), l = 0; l < i; l++)j = h[l], la1.test(j.type || "") && !W1.access(j, "globalEval") && r1.contains(k, j) && (j.src ? r1._evalUrl && r1._evalUrl(j.src) : p1(j.textContent.replace(Da, ""), k));
        }
        return a;
    }
    function Ka(a, b, c) {
        for(var d, e = b ? r1.filter(b, a) : a, f = 0; null != (d = e[f]); f++)c || 1 !== d.nodeType || r1.cleanData(na1(d)), d.parentNode && (c && r1.contains(d.ownerDocument, d) && oa1(na1(d, "script")), d.parentNode.removeChild(d));
        return a;
    }
    r1.extend({
        htmlPrefilter: function(a) {
            return a.replace(za1, "<$1></$2>");
        },
        clone: function(a, b, c) {
            var d, e, f, g, h = a.cloneNode(!0), i = r1.contains(a.ownerDocument, a);
            if (!(o1.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || r1.isXMLDoc(a))) for(g = na1(h), f = na1(a), d = 0, e = f.length; d < e; d++)Ia(f[d], g[d]);
            if (b) {
                if (c) for(f = f || na1(a), g = g || na1(h), d = 0, e = f.length; d < e; d++)Ha(f[d], g[d]);
                else Ha(a, h);
            }
            return g = na1(h, "script"), g.length > 0 && oa1(g, !i && na1(a, "script")), h;
        },
        cleanData: function(a) {
            for(var b, c, d, e = r1.event.special, f = 0; void 0 !== (c = a[f]); f++)if (U1(c)) {
                if (b = c[W1.expando]) {
                    if (b.events) for(d in b.events)e[d] ? r1.event.remove(c, d) : r1.removeEvent(c, d, b.handle);
                    c[W1.expando] = void 0;
                }
                c[X1.expando] && (c[X1.expando] = void 0);
            }
        }
    }), r1.fn.extend({
        detach: function(a) {
            return Ka(this, a, !0);
        },
        remove: function(a) {
            return Ka(this, a);
        },
        text: function(a23) {
            return T1(this, function(a) {
                return void 0 === a ? r1.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = a);
                });
            }, null, a23, arguments.length);
        },
        append: function() {
            return Ja(this, arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = Ea(this, a);
                    b.appendChild(a);
                }
            });
        },
        prepend: function() {
            return Ja(this, arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = Ea(this, a);
                    b.insertBefore(a, b.firstChild);
                }
            });
        },
        before: function() {
            return Ja(this, arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this);
            });
        },
        after: function() {
            return Ja(this, arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling);
            });
        },
        empty: function() {
            for(var a, b = 0; null != (a = this[b]); b++)1 === a.nodeType && (r1.cleanData(na1(a, !1)), a.textContent = "");
            return this;
        },
        clone: function(a, b) {
            return a = null != a && a, b = null == b ? a : b, this.map(function() {
                return r1.clone(this, a, b);
            });
        },
        html: function(a24) {
            return T1(this, function(a) {
                var b = this[0] || {
                }, c = 0, d = this.length;
                if (void 0 === a && 1 === b.nodeType) return b.innerHTML;
                if ("string" == typeof a && !Aa.test(a) && !ma1[(ka1.exec(a) || [
                    "",
                    ""
                ])[1].toLowerCase()]) {
                    a = r1.htmlPrefilter(a);
                    try {
                        for(; c < d; c++)b = this[c] || {
                        }, 1 === b.nodeType && (r1.cleanData(na1(b, !1)), b.innerHTML = a);
                        b = 0;
                    } catch (e) {
                    }
                }
                b && this.empty().append(a);
            }, null, a24, arguments.length);
        },
        replaceWith: function() {
            var a = [];
            return Ja(this, arguments, function(b) {
                var c = this.parentNode;
                r1.inArray(this, a) < 0 && (r1.cleanData(na1(this)), c && c.replaceChild(b, this));
            }, a);
        }
    }), r1.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(a25, b) {
        r1.fn[a25] = function(a) {
            for(var c, d = [], e = r1(a), f = e.length - 1, g = 0; g <= f; g++)c = g === f ? this : this.clone(!0), r1(e[g])[b](c), h1.apply(d, c.get());
            return this.pushStack(d);
        };
    });
    var La = /^margin/, Ma = new RegExp("^(" + aa1 + ")(?!px)[a-z%]+$", "i"), Na = function(b) {
        var c = b.ownerDocument.defaultView;
        return c && c.opener || (c = a2), c.getComputedStyle(b);
    };
    !function() {
        function b13() {
            if (i) {
                i.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", i.innerHTML = "", ra1.appendChild(h);
                var b = a2.getComputedStyle(i);
                c = "1%" !== b.top, g = "2px" === b.marginLeft, e = "4px" === b.width, i.style.marginRight = "50%", f = "4px" === b.marginRight, ra1.removeChild(h), i = null;
            }
        }
        var c, e, f, g, h = d1.createElement("div"), i = d1.createElement("div");
        i.style && (i.style.backgroundClip = "content-box", i.cloneNode(!0).style.backgroundClip = "", o1.clearCloneStyle = "content-box" === i.style.backgroundClip, h.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", h.appendChild(i), r1.extend(o1, {
            pixelPosition: function() {
                return b13(), c;
            },
            boxSizingReliable: function() {
                return b13(), e;
            },
            pixelMarginRight: function() {
                return b13(), f;
            },
            reliableMarginLeft: function() {
                return b13(), g;
            }
        }));
    }();
    function Oa(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || Na(a), c && (g = c.getPropertyValue(b) || c[b], "" !== g || r1.contains(a.ownerDocument, a) || (g = r1.style(a, b)), !o1.pixelMarginRight() && Ma.test(g) && La.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 !== g ? g + "" : g;
    }
    function Pa(a, b) {
        return {
            get: function() {
                return a() ? void delete this.get : (this.get = b).apply(this, arguments);
            }
        };
    }
    var Qa = /^(none|table(?!-c[ea]).+)/, Ra = /^--/, Sa = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, Ta = {
        letterSpacing: "0",
        fontWeight: "400"
    }, Ua = [
        "Webkit",
        "Moz",
        "ms"
    ], Va = d1.createElement("div").style;
    function Wa(a) {
        if (a in Va) return a;
        var b = a[0].toUpperCase() + a.slice(1), c = Ua.length;
        while(c--)if (a = Ua[c] + b, a in Va) return a;
    }
    function Xa(a) {
        var b = r1.cssProps[a];
        return b || (b = r1.cssProps[a] = Wa(a) || a), b;
    }
    function Ya(a, b, c) {
        var d = ba1.exec(b);
        return d ? Math.max(0, d[2] - (c || 0)) + (d[3] || "px") : b;
    }
    function Za(a, b, c, d, e) {
        var f, g = 0;
        for(f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0; f < 4; f += 2)"margin" === c && (g += r1.css(a, c + ca1[f], !0, e)), d ? ("content" === c && (g -= r1.css(a, "padding" + ca1[f], !0, e)), "margin" !== c && (g -= r1.css(a, "border" + ca1[f] + "Width", !0, e))) : (g += r1.css(a, "padding" + ca1[f], !0, e), "padding" !== c && (g += r1.css(a, "border" + ca1[f] + "Width", !0, e)));
        return g;
    }
    function $a(a, b, c) {
        var d, e = Na(a), f = Oa(a, b, e), g = "border-box" === r1.css(a, "boxSizing", !1, e);
        return Ma.test(f) ? f : (d = g && (o1.boxSizingReliable() || f === a.style[b]), "auto" === f && (f = a["offset" + b[0].toUpperCase() + b.slice(1)]), f = parseFloat(f) || 0, f + Za(a, b, c || (g ? "border" : "content"), d, e) + "px");
    }
    r1.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) {
                        var c = Oa(a, "opacity");
                        return "" === c ? "1" : c;
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": "cssFloat"
        },
        style: function(a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = r1.camelCase(b), i = Ra.test(b), j = a.style;
                return i || (b = Xa(h)), g = r1.cssHooks[b] || r1.cssHooks[h], void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : j[b] : (f = typeof c, "string" === f && (e = ba1.exec(c)) && e[1] && (c = fa(a, b, e), f = "number"), null != c && c === c && ("number" === f && (c += e && e[3] || (r1.cssNumber[h] ? "" : "px")), o1.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (j[b] = "inherit"), g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i ? j.setProperty(b, c) : j[b] = c)), void 0);
            }
        },
        css: function(a, b, c, d) {
            var e, f, g, h = r1.camelCase(b), i = Ra.test(b);
            return i || (b = Xa(h)), g = r1.cssHooks[b] || r1.cssHooks[h], g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = Oa(a, b, d)), "normal" === e && b in Ta && (e = Ta[b]), "" === c || c ? (f = parseFloat(e), c === !0 || isFinite(f) ? f || 0 : e) : e;
        }
    }), r1.each([
        "height",
        "width"
    ], function(a26, b) {
        r1.cssHooks[b] = {
            get: function(a, c, d) {
                if (c) return !Qa.test(r1.css(a, "display")) || a.getClientRects().length && a.getBoundingClientRect().width ? $a(a, b, d) : ea1(a, Sa, function() {
                    return $a(a, b, d);
                });
            },
            set: function(a, c, d) {
                var e, f = d && Na(a), g = d && Za(a, b, d, "border-box" === r1.css(a, "boxSizing", !1, f), f);
                return g && (e = ba1.exec(c)) && "px" !== (e[3] || "px") && (a.style[b] = c, c = r1.css(a, b)), Ya(a, c, g);
            }
        };
    }), r1.cssHooks.marginLeft = Pa(o1.reliableMarginLeft, function(a, b) {
        if (b) return (parseFloat(Oa(a, "marginLeft")) || a.getBoundingClientRect().left - ea1(a, {
            marginLeft: 0
        }, function() {
            return a.getBoundingClientRect().left;
        })) + "px";
    }), r1.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(a, b) {
        r1.cssHooks[a + b] = {
            expand: function(c) {
                for(var d = 0, e = {
                }, f = "string" == typeof c ? c.split(" ") : [
                    c
                ]; d < 4; d++)e[a + ca1[d] + b] = f[d] || f[d - 2] || f[0];
                return e;
            }
        }, La.test(a) || (r1.cssHooks[a + b].set = Ya);
    }), r1.fn.extend({
        css: function(a27, b14) {
            return T1(this, function(a, b, c) {
                var d, e, f = {
                }, g = 0;
                if (Array.isArray(b)) {
                    for(d = Na(a), e = b.length; g < e; g++)f[b[g]] = r1.css(a, b[g], !1, d);
                    return f;
                }
                return void 0 !== c ? r1.style(a, b, c) : r1.css(a, b);
            }, a27, b14, arguments.length > 1);
        }
    });
    function _a(a, b, c, d, e) {
        return new _a.prototype.init(a, b, c, d, e);
    }
    r1.Tween = _a, _a.prototype = {
        constructor: _a,
        init: function(a, b, c, d, e, f) {
            this.elem = a, this.prop = c, this.easing = e || r1.easing._default, this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (r1.cssNumber[c] ? "" : "px");
        },
        cur: function() {
            var a = _a.propHooks[this.prop];
            return a && a.get ? a.get(this) : _a.propHooks._default.get(this);
        },
        run: function(a) {
            var b, c = _a.propHooks[this.prop];
            return this.options.duration ? this.pos = b = r1.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : _a.propHooks._default.set(this), this;
        }
    }, _a.prototype.init.prototype = _a.prototype, _a.propHooks = {
        _default: {
            get: function(a) {
                var b;
                return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (b = r1.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0);
            },
            set: function(a) {
                r1.fx.step[a.prop] ? r1.fx.step[a.prop](a) : 1 !== a.elem.nodeType || null == a.elem.style[r1.cssProps[a.prop]] && !r1.cssHooks[a.prop] ? a.elem[a.prop] = a.now : r1.style(a.elem, a.prop, a.now + a.unit);
            }
        }
    }, _a.propHooks.scrollTop = _a.propHooks.scrollLeft = {
        set: function(a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now);
        }
    }, r1.easing = {
        linear: function(a) {
            return a;
        },
        swing: function(a) {
            return 0.5 - Math.cos(a * Math.PI) / 2;
        },
        _default: "swing"
    }, r1.fx = _a.prototype.init, r1.fx.step = {
    };
    var ab, bb, cb = /^(?:toggle|show|hide)$/, db = /queueHooks$/;
    function eb() {
        bb && (d1.hidden === !1 && a2.requestAnimationFrame ? a2.requestAnimationFrame(eb) : a2.setTimeout(eb, r1.fx.interval), r1.fx.tick());
    }
    function fb() {
        return a2.setTimeout(function() {
            ab = void 0;
        }), ab = r1.now();
    }
    function gb(a, b) {
        var c, d = 0, e = {
            height: a
        };
        for(b = b ? 1 : 0; d < 4; d += 2 - b)c = ca1[d], e["margin" + c] = e["padding" + c] = a;
        return b && (e.opacity = e.width = a), e;
    }
    function hb(a, b, c) {
        for(var d, e = (kb.tweeners[b] || []).concat(kb.tweeners["*"]), f = 0, g = e.length; f < g; f++)if (d = e[f].call(c, b, a)) return d;
    }
    function ib(a, b, c) {
        var d, e, f, g, h, i, j, k, l = "width" in b || "height" in b, m = this, n = {
        }, o = a.style, p = a.nodeType && da1(a), q = W1.get(a, "fxshow");
        c.queue || (g = r1._queueHooks(a, "fx"), null == g.unqueued && (g.unqueued = 0, h = g.empty.fire, g.empty.fire = function() {
            g.unqueued || h();
        }), g.unqueued++, m.always(function() {
            m.always(function() {
                g.unqueued--, r1.queue(a, "fx").length || g.empty.fire();
            });
        }));
        for(d in b)if (e = b[d], cb.test(e)) {
            if (delete b[d], f = f || "toggle" === e, e === (p ? "hide" : "show")) {
                if ("show" !== e || !q || void 0 === q[d]) continue;
                p = !0;
            }
            n[d] = q && q[d] || r1.style(a, d);
        }
        if (i = !r1.isEmptyObject(b), i || !r1.isEmptyObject(n)) {
            l && 1 === a.nodeType && (c.overflow = [
                o.overflow,
                o.overflowX,
                o.overflowY
            ], j = q && q.display, null == j && (j = W1.get(a, "display")), k = r1.css(a, "display"), "none" === k && (j ? k = j : (ia1([
                a
            ], !0), j = a.style.display || j, k = r1.css(a, "display"), ia1([
                a
            ]))), ("inline" === k || "inline-block" === k && null != j) && "none" === r1.css(a, "float") && (i || (m.done(function() {
                o.display = j;
            }), null == j && (k = o.display, j = "none" === k ? "" : k)), o.display = "inline-block")), c.overflow && (o.overflow = "hidden", m.always(function() {
                o.overflow = c.overflow[0], o.overflowX = c.overflow[1], o.overflowY = c.overflow[2];
            })), i = !1;
            for(d in n)i || (q ? "hidden" in q && (p = q.hidden) : q = W1.access(a, "fxshow", {
                display: j
            }), f && (q.hidden = !p), p && ia1([
                a
            ], !0), m.done(function() {
                p || ia1([
                    a
                ]), W1.remove(a, "fxshow");
                for(d in n)r1.style(a, d, n[d]);
            })), i = hb(p ? q[d] : 0, d, m), d in q || (q[d] = i.start, p && (i.end = i.start, i.start = 0));
        }
    }
    function jb(a, b) {
        var c, d, e, f, g;
        for(c in a)if (d = r1.camelCase(c), e = b[d], f = a[c], Array.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = r1.cssHooks[d], g && "expand" in g) {
            f = g.expand(f), delete a[d];
            for(c in f)c in a || (a[c] = f[c], b[c] = e);
        } else b[d] = e;
    }
    function kb(a, b15, c12) {
        var d6, e, f7 = 0, g4 = kb.prefilters.length, h = r1.Deferred().always(function() {
            delete i3.elem;
        }), i3 = function() {
            if (e) return !1;
            for(var b = ab || fb(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; g < i; g++)j.tweens[g].run(f);
            return h.notifyWith(a, [
                j,
                f,
                c
            ]), f < 1 && i ? c : (i || h.notifyWith(a, [
                j,
                1,
                0
            ]), h.resolveWith(a, [
                j
            ]), !1);
        }, j = h.promise({
            elem: a,
            props: r1.extend({
            }, b15),
            opts: r1.extend(!0, {
                specialEasing: {
                },
                easing: r1.easing._default
            }, c12),
            originalProperties: b15,
            originalOptions: c12,
            startTime: ab || fb(),
            duration: c12.duration,
            tweens: [],
            createTween: function(b, c) {
                var d = r1.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                return j.tweens.push(d), d;
            },
            stop: function(b) {
                var c = 0, d = b ? j.tweens.length : 0;
                if (e) return this;
                for(e = !0; c < d; c++)j.tweens[c].run(1);
                return b ? (h.notifyWith(a, [
                    j,
                    1,
                    0
                ]), h.resolveWith(a, [
                    j,
                    b
                ])) : h.rejectWith(a, [
                    j,
                    b
                ]), this;
            }
        }), k = j.props;
        for(jb(k, j.opts.specialEasing); f7 < g4; f7++)if (d6 = kb.prefilters[f7].call(j, a, k, j.opts)) return r1.isFunction(d6.stop) && (r1._queueHooks(j.elem, j.opts.queue).stop = r1.proxy(d6.stop, d6)), d6;
        return r1.map(k, hb, j), r1.isFunction(j.opts.start) && j.opts.start.call(a, j), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always), r1.fx.timer(r1.extend(i3, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })), j;
    }
    r1.Animation = r1.extend(kb, {
        tweeners: {
            "*": [
                function(a, b) {
                    var c = this.createTween(a, b);
                    return fa(c.elem, a, ba1.exec(b), c), c;
                }
            ]
        },
        tweener: function(a, b) {
            r1.isFunction(a) ? (b = a, a = [
                "*"
            ]) : a = a.match(L1);
            for(var c, d = 0, e = a.length; d < e; d++)c = a[d], kb.tweeners[c] = kb.tweeners[c] || [], kb.tweeners[c].unshift(b);
        },
        prefilters: [
            ib
        ],
        prefilter: function(a, b) {
            b ? kb.prefilters.unshift(a) : kb.prefilters.push(a);
        }
    }), r1.speed = function(a, b, c) {
        var d = a && "object" == typeof a ? r1.extend({
        }, a) : {
            complete: c || !c && b || r1.isFunction(a) && a,
            duration: a,
            easing: c && b || b && !r1.isFunction(b) && b
        };
        return r1.fx.off ? d.duration = 0 : "number" != typeof d.duration && (d.duration in r1.fx.speeds ? d.duration = r1.fx.speeds[d.duration] : d.duration = r1.fx.speeds._default), null != d.queue && d.queue !== !0 || (d.queue = "fx"), d.old = d.complete, d.complete = function() {
            r1.isFunction(d.old) && d.old.call(this), d.queue && r1.dequeue(this, d.queue);
        }, d;
    }, r1.fn.extend({
        fadeTo: function(a, b, c, d) {
            return this.filter(da1).css("opacity", 0).show().end().animate({
                opacity: b
            }, a, c, d);
        },
        animate: function(a, b16, c, d) {
            var e = r1.isEmptyObject(a), f = r1.speed(b16, c, d), g = function() {
                var b = kb(this, r1.extend({
                }, a), f);
                (e || W1.get(this, "finish")) && b.stop(!0);
            };
            return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g);
        },
        stop: function(a28, b17, c) {
            var d = function(a) {
                var b = a.stop;
                delete a.stop, b(c);
            };
            return "string" != typeof a28 && (c = b17, b17 = a28, a28 = void 0), b17 && a28 !== !1 && this.queue(a28 || "fx", []), this.each(function() {
                var b = !0, e = null != a28 && a28 + "queueHooks", f = r1.timers, g = W1.get(this);
                if (e) g[e] && g[e].stop && d(g[e]);
                else for(e in g)g[e] && g[e].stop && db.test(e) && d(g[e]);
                for(e = f.length; e--;)f[e].elem !== this || null != a28 && f[e].queue !== a28 || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
                !b && c || r1.dequeue(this, a28);
            });
        },
        finish: function(a) {
            return a !== !1 && (a = a || "fx"), this.each(function() {
                var b, c = W1.get(this), d = c[a + "queue"], e = c[a + "queueHooks"], f = r1.timers, g = d ? d.length : 0;
                for(c.finish = !0, r1.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;)f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                for(b = 0; b < g; b++)d[b] && d[b].finish && d[b].finish.call(this);
                delete c.finish;
            });
        }
    }), r1.each([
        "toggle",
        "show",
        "hide"
    ], function(a29, b) {
        var c = r1.fn[b];
        r1.fn[b] = function(a, d, e) {
            return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(gb(b, !0), a, d, e);
        };
    }), r1.each({
        slideDown: gb("show"),
        slideUp: gb("hide"),
        slideToggle: gb("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(a30, b) {
        r1.fn[a30] = function(a, c, d) {
            return this.animate(b, a, c, d);
        };
    }), r1.timers = [], r1.fx.tick = function() {
        var a, b = 0, c = r1.timers;
        for(ab = r1.now(); b < c.length; b++)a = c[b], a() || c[b] !== a || c.splice(b--, 1);
        c.length || r1.fx.stop(), ab = void 0;
    }, r1.fx.timer = function(a) {
        r1.timers.push(a), r1.fx.start();
    }, r1.fx.interval = 13, r1.fx.start = function() {
        bb || (bb = !0, eb());
    }, r1.fx.stop = function() {
        bb = null;
    }, r1.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, r1.fn.delay = function(b, c13) {
        return b = r1.fx ? r1.fx.speeds[b] || b : b, c13 = c13 || "fx", this.queue(c13, function(c, d) {
            var e = a2.setTimeout(c, b);
            d.stop = function() {
                a2.clearTimeout(e);
            };
        });
    }, (function() {
        var a = d1.createElement("input"), b = d1.createElement("select"), c = b.appendChild(d1.createElement("option"));
        a.type = "checkbox", o1.checkOn = "" !== a.value, o1.optSelected = c.selected, a = d1.createElement("input"), a.value = "t", a.type = "radio", o1.radioValue = "t" === a.value;
    })();
    var lb, mb = r1.expr.attrHandle;
    r1.fn.extend({
        attr: function(a, b) {
            return T1(this, r1.attr, a, b, arguments.length > 1);
        },
        removeAttr: function(a) {
            return this.each(function() {
                r1.removeAttr(this, a);
            });
        }
    }), r1.extend({
        attr: function(a, b, c) {
            var d, e, f = a.nodeType;
            if (3 !== f && 8 !== f && 2 !== f) return "undefined" == typeof a.getAttribute ? r1.prop(a, b, c) : (1 === f && r1.isXMLDoc(a) || (e = r1.attrHooks[b.toLowerCase()] || (r1.expr.match.bool.test(b) ? lb : void 0)), void 0 !== c ? null === c ? void r1.removeAttr(a, b) : e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : (a.setAttribute(b, c + ""), c) : e && "get" in e && null !== (d = e.get(a, b)) ? d : (d = r1.find.attr(a, b), null == d ? void 0 : d));
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (!o1.radioValue && "radio" === b && B1(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b;
                    }
                }
            }
        },
        removeAttr: function(a, b) {
            var c, d = 0, e = b && b.match(L1);
            if (e && 1 === a.nodeType) while(c = e[d++])a.removeAttribute(c);
        }
    }), lb = {
        set: function(a, b, c) {
            return b === !1 ? r1.removeAttr(a, c) : a.setAttribute(c, c), c;
        }
    }, r1.each(r1.expr.match.bool.source.match(/\w+/g), function(a31, b18) {
        var c = mb[b18] || r1.find.attr;
        mb[b18] = function(a, b, d) {
            var e, f, g = b.toLowerCase();
            return d || (f = mb[g], mb[g] = e, e = null != c(a, b, d) ? g : null, mb[g] = f), e;
        };
    });
    var nb = /^(?:input|select|textarea|button)$/i, ob = /^(?:a|area)$/i;
    r1.fn.extend({
        prop: function(a, b) {
            return T1(this, r1.prop, a, b, arguments.length > 1);
        },
        removeProp: function(a) {
            return this.each(function() {
                delete this[r1.propFix[a] || a];
            });
        }
    }), r1.extend({
        prop: function(a, b, c) {
            var d, e, f = a.nodeType;
            if (3 !== f && 8 !== f && 2 !== f) return 1 === f && r1.isXMLDoc(a) || (b = r1.propFix[b] || b, e = r1.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b];
        },
        propHooks: {
            tabIndex: {
                get: function(a) {
                    var b = r1.find.attr(a, "tabindex");
                    return b ? parseInt(b, 10) : nb.test(a.nodeName) || ob.test(a.nodeName) && a.href ? 0 : -1;
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }), o1.optSelected || (r1.propHooks.selected = {
        get: function(a) {
            var b = a.parentNode;
            return b && b.parentNode && b.parentNode.selectedIndex, null;
        },
        set: function(a) {
            var b = a.parentNode;
            b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex);
        }
    }), r1.each([
        "tabIndex",
        "readOnly",
        "maxLength",
        "cellSpacing",
        "cellPadding",
        "rowSpan",
        "colSpan",
        "useMap",
        "frameBorder",
        "contentEditable"
    ], function() {
        r1.propFix[this.toLowerCase()] = this;
    });
    function pb(a) {
        var b = a.match(L1) || [];
        return b.join(" ");
    }
    function qb(a) {
        return a.getAttribute && a.getAttribute("class") || "";
    }
    r1.fn.extend({
        addClass: function(a) {
            var b19, c, d, e, f, g, h, i = 0;
            if (r1.isFunction(a)) return this.each(function(b) {
                r1(this).addClass(a.call(this, b, qb(this)));
            });
            if ("string" == typeof a && a) {
                b19 = a.match(L1) || [];
                while(c = this[i++])if (e = qb(c), d = 1 === c.nodeType && " " + pb(e) + " ") {
                    g = 0;
                    while(f = b19[g++])d.indexOf(" " + f + " ") < 0 && (d += f + " ");
                    h = pb(d), e !== h && c.setAttribute("class", h);
                }
            }
            return this;
        },
        removeClass: function(a) {
            var b20, c, d, e, f, g, h, i = 0;
            if (r1.isFunction(a)) return this.each(function(b) {
                r1(this).removeClass(a.call(this, b, qb(this)));
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof a && a) {
                b20 = a.match(L1) || [];
                while(c = this[i++])if (e = qb(c), d = 1 === c.nodeType && " " + pb(e) + " ") {
                    g = 0;
                    while(f = b20[g++])while(d.indexOf(" " + f + " ") > -1)d = d.replace(" " + f + " ", " ");
                    h = pb(d), e !== h && c.setAttribute("class", h);
                }
            }
            return this;
        },
        toggleClass: function(a, b21) {
            var c14 = typeof a;
            return "boolean" == typeof b21 && "string" === c14 ? b21 ? this.addClass(a) : this.removeClass(a) : r1.isFunction(a) ? this.each(function(c) {
                r1(this).toggleClass(a.call(this, c, qb(this), b21), b21);
            }) : this.each(function() {
                var b, d, e, f;
                if ("string" === c14) {
                    d = 0, e = r1(this), f = a.match(L1) || [];
                    while(b = f[d++])e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
                } else void 0 !== a && "boolean" !== c14 || (b = qb(this), b && W1.set(this, "__className__", b), this.setAttribute && this.setAttribute("class", b || a === !1 ? "" : W1.get(this, "__className__") || ""));
            });
        },
        hasClass: function(a) {
            var b, c, d = 0;
            b = " " + a + " ";
            while(c = this[d++])if (1 === c.nodeType && (" " + pb(qb(c)) + " ").indexOf(b) > -1) return !0;
            return !1;
        }
    });
    var rb = /\r/g;
    r1.fn.extend({
        val: function(a32) {
            var b, c15, d, e9 = this[0];
            if (arguments.length) return d = r1.isFunction(a32), this.each(function(c) {
                var e;
                1 === this.nodeType && (e = d ? a32.call(this, c, r1(this).val()) : a32, null == e ? e = "" : "number" == typeof e ? e += "" : Array.isArray(e) && (e = r1.map(e, function(a) {
                    return null == a ? "" : a + "";
                })), b = r1.valHooks[this.type] || r1.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e));
            });
            if (e9) return b = r1.valHooks[e9.type] || r1.valHooks[e9.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c15 = b.get(e9, "value")) ? c15 : (c15 = e9.value, "string" == typeof c15 ? c15.replace(rb, "") : null == c15 ? "" : c15);
        }
    }), r1.extend({
        valHooks: {
            option: {
                get: function(a) {
                    var b = r1.find.attr(a, "value");
                    return null != b ? b : pb(r1.text(a));
                }
            },
            select: {
                get: function(a) {
                    var b, c, d, e = a.options, f = a.selectedIndex, g = "select-one" === a.type, h = g ? null : [], i = g ? f + 1 : e.length;
                    for(d = f < 0 ? i : g ? f : 0; d < i; d++)if (c = e[d], (c.selected || d === f) && !c.disabled && (!c.parentNode.disabled || !B1(c.parentNode, "optgroup"))) {
                        if (b = r1(c).val(), g) return b;
                        h.push(b);
                    }
                    return h;
                },
                set: function(a, b) {
                    var c, d, e = a.options, f = r1.makeArray(b), g = e.length;
                    while(g--)d = e[g], (d.selected = r1.inArray(r1.valHooks.option.get(d), f) > -1) && (c = !0);
                    return c || (a.selectedIndex = -1), f;
                }
            }
        }
    }), r1.each([
        "radio",
        "checkbox"
    ], function() {
        r1.valHooks[this] = {
            set: function(a, b) {
                if (Array.isArray(b)) return a.checked = r1.inArray(r1(a).val(), b) > -1;
            }
        }, o1.checkOn || (r1.valHooks[this].get = function(a) {
            return null === a.getAttribute("value") ? "on" : a.value;
        });
    });
    var sb = /^(?:focusinfocus|focusoutblur)$/;
    r1.extend(r1.event, {
        trigger: function(b, c, e, f) {
            var g, h, i, j, k, m, n, o = [
                e || d1
            ], p = l1.call(b, "type") ? b.type : b, q = l1.call(b, "namespace") ? b.namespace.split(".") : [];
            if (h = i = e = e || d1, 3 !== e.nodeType && 8 !== e.nodeType && !sb.test(p + r1.event.triggered) && (p.indexOf(".") > -1 && (q = p.split("."), p = q.shift(), q.sort()), k = p.indexOf(":") < 0 && "on" + p, b = b[r1.expando] ? b : new r1.Event(p, "object" == typeof b && b), b.isTrigger = f ? 2 : 3, b.namespace = q.join("."), b.rnamespace = b.namespace ? new RegExp("(^|\\.)" + q.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = e), c = null == c ? [
                b
            ] : r1.makeArray(c, [
                b
            ]), n = r1.event.special[p] || {
            }, f || !n.trigger || n.trigger.apply(e, c) !== !1)) {
                if (!f && !n.noBubble && !r1.isWindow(e)) {
                    for(j = n.delegateType || p, sb.test(j + p) || (h = h.parentNode); h; h = h.parentNode)o.push(h), i = h;
                    i === (e.ownerDocument || d1) && o.push(i.defaultView || i.parentWindow || a2);
                }
                g = 0;
                while((h = o[g++]) && !b.isPropagationStopped())b.type = g > 1 ? j : n.bindType || p, m = (W1.get(h, "events") || {
                })[b.type] && W1.get(h, "handle"), m && m.apply(h, c), m = k && h[k], m && m.apply && U1(h) && (b.result = m.apply(h, c), b.result === !1 && b.preventDefault());
                return b.type = p, f || b.isDefaultPrevented() || n._default && n._default.apply(o.pop(), c) !== !1 || !U1(e) || k && r1.isFunction(e[p]) && !r1.isWindow(e) && (i = e[k], i && (e[k] = null), r1.event.triggered = p, e[p](), r1.event.triggered = void 0, i && (e[k] = i)), b.result;
            }
        },
        simulate: function(a, b, c) {
            var d = r1.extend(new r1.Event, c, {
                type: a,
                isSimulated: !0
            });
            r1.event.trigger(d, null, b);
        }
    }), r1.fn.extend({
        trigger: function(a, b) {
            return this.each(function() {
                r1.event.trigger(a, b, this);
            });
        },
        triggerHandler: function(a, b) {
            var c = this[0];
            if (c) return r1.event.trigger(a, b, c, !0);
        }
    }), r1.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(a33, b) {
        r1.fn[b] = function(a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b);
        };
    }), r1.fn.extend({
        hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b || a);
        }
    }), o1.focusin = "onfocusin" in a2, o1.focusin || r1.each({
        focus: "focusin",
        blur: "focusout"
    }, function(a34, b) {
        var c = function(a) {
            r1.event.simulate(b, a.target, r1.event.fix(a));
        };
        r1.event.special[b] = {
            setup: function() {
                var d = this.ownerDocument || this, e = W1.access(d, b);
                e || d.addEventListener(a34, c, !0), W1.access(d, b, (e || 0) + 1);
            },
            teardown: function() {
                var d = this.ownerDocument || this, e = W1.access(d, b) - 1;
                e ? W1.access(d, b, e) : (d.removeEventListener(a34, c, !0), W1.remove(d, b));
            }
        };
    });
    var tb = a2.location, ub = r1.now(), vb = /\?/;
    r1.parseXML = function(b) {
        var c;
        if (!b || "string" != typeof b) return null;
        try {
            c = (new a2.DOMParser).parseFromString(b, "text/xml");
        } catch (d) {
            c = void 0;
        }
        return c && !c.getElementsByTagName("parsererror").length || r1.error("Invalid XML: " + b), c;
    };
    var wb = /\[\]$/, xb = /\r?\n/g, yb = /^(?:submit|button|image|reset|file)$/i, zb = /^(?:input|select|textarea|keygen)/i;
    function Ab(a, b22, c, d) {
        var e10;
        if (Array.isArray(b22)) r1.each(b22, function(b, e) {
            c || wb.test(a) ? d(a, e) : Ab(a + "[" + ("object" == typeof e && null != e ? b : "") + "]", e, c, d);
        });
        else if (c || "object" !== r1.type(b22)) d(a, b22);
        else for(e10 in b22)Ab(a + "[" + e10 + "]", b22[e10], c, d);
    }
    r1.param = function(a35, b23) {
        var c16, d = [], e = function(a, b) {
            var c = r1.isFunction(b) ? b() : b;
            d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(null == c ? "" : c);
        };
        if (Array.isArray(a35) || a35.jquery && !r1.isPlainObject(a35)) r1.each(a35, function() {
            e(this.name, this.value);
        });
        else for(c16 in a35)Ab(c16, a35[c16], b23, e);
        return d.join("&");
    }, r1.fn.extend({
        serialize: function() {
            return r1.param(this.serializeArray());
        },
        serializeArray: function() {
            return this.map(function() {
                var a = r1.prop(this, "elements");
                return a ? r1.makeArray(a) : this;
            }).filter(function() {
                var a = this.type;
                return this.name && !r1(this).is(":disabled") && zb.test(this.nodeName) && !yb.test(a) && (this.checked || !ja1.test(a));
            }).map(function(a36, b) {
                var c = r1(this).val();
                return null == c ? null : Array.isArray(c) ? r1.map(c, function(a) {
                    return {
                        name: b.name,
                        value: a.replace(xb, "\r\n")
                    };
                }) : {
                    name: b.name,
                    value: c.replace(xb, "\r\n")
                };
            }).get();
        }
    });
    var Bb = /%20/g, Cb = /#.*$/, Db = /([?&])_=[^&]*/, Eb = /^(.*?):[ \t]*([^\r\n]*)$/gm, Fb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Gb = /^(?:GET|HEAD)$/, Hb = /^\/\//, Ib = {
    }, Jb = {
    }, Kb = "*/".concat("*"), Lb = d1.createElement("a");
    Lb.href = tb.href;
    function Mb(a) {
        return function(b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e = 0, f = b.toLowerCase().match(L1) || [];
            if (r1.isFunction(c)) while(d = f[e++])"+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c);
        };
    }
    function Nb(a, b, c, d) {
        var e = {
        }, f = a === Jb;
        function g(h3) {
            var i;
            return e[h3] = !0, r1.each(a[h3] || [], function(a, h) {
                var j = h(b, c, d);
                return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1);
            }), i;
        }
        return g(b.dataTypes[0]) || !e["*"] && g("*");
    }
    function Ob(a, b) {
        var c, d, e = r1.ajaxSettings.flatOptions || {
        };
        for(c in b)void 0 !== b[c] && ((e[c] ? a : d || (d = {
        }))[c] = b[c]);
        return d && r1.extend(!0, a, d), a;
    }
    function Pb(a, b, c) {
        var d, e, f, g, h = a.contents, i = a.dataTypes;
        while("*" === i[0])i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
        if (d) {
            for(e in h)if (h[e] && h[e].test(d)) {
                i.unshift(e);
                break;
            }
        }
        if (i[0] in c) f = i[0];
        else {
            for(e in c){
                if (!i[0] || a.converters[e + " " + i[0]]) {
                    f = e;
                    break;
                }
                g || (g = e);
            }
            f = f || g;
        }
        if (f) return f !== i[0] && i.unshift(f), c[f];
    }
    function Qb(a, b, c, d) {
        var e, f, g, h, i, j = {
        }, k = a.dataTypes.slice();
        if (k[1]) for(g in a.converters)j[g.toLowerCase()] = a.converters[g];
        f = k.shift();
        while(f)if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift()) {
            if ("*" === f) f = i;
            else if ("*" !== i && i !== f) {
                if (g = j[i + " " + f] || j["* " + f], !g) {
                    for(e in j)if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                        g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                        break;
                    }
                }
                if (g !== !0) {
                    if (g && a["throws"]) b = g(b);
                    else try {
                        b = g(b);
                    } catch (l) {
                        return {
                            state: "parsererror",
                            error: g ? l : "No conversion from " + i + " to " + f
                        };
                    }
                }
            }
        }
        return {
            state: "success",
            data: b
        };
    }
    r1.extend({
        active: 0,
        lastModified: {
        },
        etag: {
        },
        ajaxSettings: {
            url: tb.href,
            type: "GET",
            isLocal: Fb.test(tb.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Kb,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": r1.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(a, b) {
            return b ? Ob(Ob(a, r1.ajaxSettings), b) : Ob(r1.ajaxSettings, a);
        },
        ajaxPrefilter: Mb(Ib),
        ajaxTransport: Mb(Jb),
        ajax: function(b24, c17) {
            "object" == typeof b24 && (c17 = b24, b24 = void 0), c17 = c17 || {
            };
            var e, f, g, h4, i, j4, k, l, m3, n3, o = r1.ajaxSetup({
            }, c17), p = o.context || o, q = o.context && (p.nodeType || p.jquery) ? r1(p) : r1.event, s = r1.Deferred(), t = r1.Callbacks("once memory"), u = o.statusCode || {
            }, v3 = {
            }, w3 = {
            }, x3 = "canceled", y = {
                readyState: 0,
                getResponseHeader: function(a) {
                    var b;
                    if (k) {
                        if (!h4) {
                            h4 = {
                            };
                            while(b = Eb.exec(g))h4[b[1].toLowerCase()] = b[2];
                        }
                        b = h4[a.toLowerCase()];
                    }
                    return null == b ? null : b;
                },
                getAllResponseHeaders: function() {
                    return k ? g : null;
                },
                setRequestHeader: function(a, b) {
                    return null == k && (a = w3[a.toLowerCase()] = w3[a.toLowerCase()] || a, v3[a] = b), this;
                },
                overrideMimeType: function(a) {
                    return null == k && (o.mimeType = a), this;
                },
                statusCode: function(a) {
                    var b;
                    if (a) {
                        if (k) y.always(a[y.status]);
                        else for(b in a)u[b] = [
                            u[b],
                            a[b]
                        ];
                    }
                    return this;
                },
                abort: function(a) {
                    var b = a || x3;
                    return e && e.abort(b), A(0, b), this;
                }
            };
            if (s.promise(y), o.url = ((b24 || o.url || tb.href) + "").replace(Hb, tb.protocol + "//"), o.type = c17.method || c17.type || o.method || o.type, o.dataTypes = (o.dataType || "*").toLowerCase().match(L1) || [
                ""
            ], null == o.crossDomain) {
                j4 = d1.createElement("a");
                try {
                    j4.href = o.url, j4.href = j4.href, o.crossDomain = Lb.protocol + "//" + Lb.host != j4.protocol + "//" + j4.host;
                } catch (z) {
                    o.crossDomain = !0;
                }
            }
            if (o.data && o.processData && "string" != typeof o.data && (o.data = r1.param(o.data, o.traditional)), Nb(Ib, o, c17, y), k) return y;
            l = r1.event && o.global, l && 0 === r1.active++ && r1.event.trigger("ajaxStart"), o.type = o.type.toUpperCase(), o.hasContent = !Gb.test(o.type), f = o.url.replace(Cb, ""), o.hasContent ? o.data && o.processData && 0 === (o.contentType || "").indexOf("application/x-www-form-urlencoded") && (o.data = o.data.replace(Bb, "+")) : (n3 = o.url.slice(f.length), o.data && (f += (vb.test(f) ? "&" : "?") + o.data, delete o.data), o.cache === !1 && (f = f.replace(Db, "$1"), n3 = (vb.test(f) ? "&" : "?") + "_=" + ub++ + n3), o.url = f + n3), o.ifModified && (r1.lastModified[f] && y.setRequestHeader("If-Modified-Since", r1.lastModified[f]), r1.etag[f] && y.setRequestHeader("If-None-Match", r1.etag[f])), (o.data && o.hasContent && o.contentType !== !1 || c17.contentType) && y.setRequestHeader("Content-Type", o.contentType), y.setRequestHeader("Accept", o.dataTypes[0] && o.accepts[o.dataTypes[0]] ? o.accepts[o.dataTypes[0]] + ("*" !== o.dataTypes[0] ? ", " + Kb + "; q=0.01" : "") : o.accepts["*"]);
            for(m3 in o.headers)y.setRequestHeader(m3, o.headers[m3]);
            if (o.beforeSend && (o.beforeSend.call(p, y, o) === !1 || k)) return y.abort();
            if (x3 = "abort", t.add(o.complete), y.done(o.success), y.fail(o.error), e = Nb(Jb, o, c17, y)) {
                if (y.readyState = 1, l && q.trigger("ajaxSend", [
                    y,
                    o
                ]), k) return y;
                o.async && o.timeout > 0 && (i = a2.setTimeout(function() {
                    y.abort("timeout");
                }, o.timeout));
                try {
                    k = !1, e.send(v3, A);
                } catch (z) {
                    if (k) throw z;
                    A(-1, z);
                }
            } else A(-1, "No Transport");
            function A(b, c, d, h) {
                var j, m, n, v, w, x = c;
                k || (k = !0, i && a2.clearTimeout(i), e = void 0, g = h || "", y.readyState = b > 0 ? 4 : 0, j = b >= 200 && b < 300 || 304 === b, d && (v = Pb(o, y, d)), v = Qb(o, v, y, j), j ? (o.ifModified && (w = y.getResponseHeader("Last-Modified"), w && (r1.lastModified[f] = w), w = y.getResponseHeader("etag"), w && (r1.etag[f] = w)), 204 === b || "HEAD" === o.type ? x = "nocontent" : 304 === b ? x = "notmodified" : (x = v.state, m = v.data, n = v.error, j = !n)) : (n = x, !b && x || (x = "error", b < 0 && (b = 0))), y.status = b, y.statusText = (c || x) + "", j ? s.resolveWith(p, [
                    m,
                    x,
                    y
                ]) : s.rejectWith(p, [
                    y,
                    x,
                    n
                ]), y.statusCode(u), u = void 0, l && q.trigger(j ? "ajaxSuccess" : "ajaxError", [
                    y,
                    o,
                    j ? m : n
                ]), t.fireWith(p, [
                    y,
                    x
                ]), l && (q.trigger("ajaxComplete", [
                    y,
                    o
                ]), --r1.active || r1.event.trigger("ajaxStop")));
            }
            return y;
        },
        getJSON: function(a, b, c) {
            return r1.get(a, b, c, "json");
        },
        getScript: function(a, b) {
            return r1.get(a, void 0, b, "script");
        }
    }), r1.each([
        "get",
        "post"
    ], function(a37, b) {
        r1[b] = function(a, c, d, e) {
            return r1.isFunction(c) && (e = e || d, d = c, c = void 0), r1.ajax(r1.extend({
                url: a,
                type: b,
                dataType: e,
                data: c,
                success: d
            }, r1.isPlainObject(a) && a));
        };
    }), r1._evalUrl = function(a) {
        return r1.ajax({
            url: a,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            "throws": !0
        });
    }, r1.fn.extend({
        wrapAll: function(a38) {
            var b;
            return this[0] && (r1.isFunction(a38) && (a38 = a38.call(this[0])), b = r1(a38, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
                var a = this;
                while(a.firstElementChild)a = a.firstElementChild;
                return a;
            }).append(this)), this;
        },
        wrapInner: function(a) {
            return r1.isFunction(a) ? this.each(function(b) {
                r1(this).wrapInner(a.call(this, b));
            }) : this.each(function() {
                var b = r1(this), c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a);
            });
        },
        wrap: function(a) {
            var b = r1.isFunction(a);
            return this.each(function(c) {
                r1(this).wrapAll(b ? a.call(this, c) : a);
            });
        },
        unwrap: function(a) {
            return this.parent(a).not("body").each(function() {
                r1(this).replaceWith(this.childNodes);
            }), this;
        }
    }), r1.expr.pseudos.hidden = function(a) {
        return !r1.expr.pseudos.visible(a);
    }, r1.expr.pseudos.visible = function(a) {
        return !!(a.offsetWidth || a.offsetHeight || a.getClientRects().length);
    }, r1.ajaxSettings.xhr = function() {
        try {
            return new a2.XMLHttpRequest;
        } catch (b) {
        }
    };
    var Rb = {
        0: 200,
        1223: 204
    }, Sb = r1.ajaxSettings.xhr();
    o1.cors = !!Sb && "withCredentials" in Sb, o1.ajax = Sb = !!Sb, r1.ajaxTransport(function(b) {
        var c, d;
        if (o1.cors || Sb && !b.crossDomain) return {
            send: function(e, f) {
                var g, h = b.xhr();
                if (h.open(b.type, b.url, b.async, b.username, b.password), b.xhrFields) for(g in b.xhrFields)h[g] = b.xhrFields[g];
                b.mimeType && h.overrideMimeType && h.overrideMimeType(b.mimeType), b.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest");
                for(g in e)h.setRequestHeader(g, e[g]);
                c = function(a) {
                    return function() {
                        c && (c = d = h.onload = h.onerror = h.onabort = h.onreadystatechange = null, "abort" === a ? h.abort() : "error" === a ? "number" != typeof h.status ? f(0, "error") : f(h.status, h.statusText) : f(Rb[h.status] || h.status, h.statusText, "text" !== (h.responseType || "text") || "string" != typeof h.responseText ? {
                            binary: h.response
                        } : {
                            text: h.responseText
                        }, h.getAllResponseHeaders()));
                    };
                }, h.onload = c(), d = h.onerror = c("error"), void 0 !== h.onabort ? h.onabort = d : h.onreadystatechange = function() {
                    4 === h.readyState && a2.setTimeout(function() {
                        c && d();
                    });
                }, c = c("abort");
                try {
                    h.send(b.hasContent && b.data || null);
                } catch (i) {
                    if (c) throw i;
                }
            },
            abort: function() {
                c && c();
            }
        };
    }), r1.ajaxPrefilter(function(a) {
        a.crossDomain && (a.contents.script = !1);
    }), r1.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(a) {
                return r1.globalEval(a), a;
            }
        }
    }), r1.ajaxPrefilter("script", function(a) {
        void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET");
    }), r1.ajaxTransport("script", function(a39) {
        if (a39.crossDomain) {
            var b, c;
            return {
                send: function(e, f) {
                    b = r1("<script>").prop({
                        charset: a39.scriptCharset,
                        src: a39.url
                    }).on("load error", c = function(a) {
                        b.remove(), c = null, a && f("error" === a.type ? 404 : 200, a.type);
                    }), d1.head.appendChild(b[0]);
                },
                abort: function() {
                    c && c();
                }
            };
        }
    });
    var Tb = [], Ub = /(=)\?(?=&|$)|\?\?/;
    r1.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var a = Tb.pop() || r1.expando + "_" + ub++;
            return this[a] = !0, a;
        }
    }), r1.ajaxPrefilter("json jsonp", function(b, c, d) {
        var e, f, g, h = b.jsonp !== !1 && (Ub.test(b.url) ? "url" : "string" == typeof b.data && 0 === (b.contentType || "").indexOf("application/x-www-form-urlencoded") && Ub.test(b.data) && "data");
        if (h || "jsonp" === b.dataTypes[0]) return e = b.jsonpCallback = r1.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Ub, "$1" + e) : b.jsonp !== !1 && (b.url += (vb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function() {
            return g || r1.error(e + " was not called"), g[0];
        }, b.dataTypes[0] = "json", f = a2[e], a2[e] = function() {
            g = arguments;
        }, d.always(function() {
            void 0 === f ? r1(a2).removeProp(e) : a2[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Tb.push(e)), g && r1.isFunction(f) && f(g[0]), g = f = void 0;
        }), "script";
    }), o1.createHTMLDocument = (function() {
        var a = d1.implementation.createHTMLDocument("").body;
        return a.innerHTML = "<form></form><form></form>", 2 === a.childNodes.length;
    })(), r1.parseHTML = function(a, b, c) {
        if ("string" != typeof a) return [];
        "boolean" == typeof b && (c = b, b = !1);
        var e, f, g;
        return b || (o1.createHTMLDocument ? (b = d1.implementation.createHTMLDocument(""), e = b.createElement("base"), e.href = d1.location.href, b.head.appendChild(e)) : b = d1), f = C1.exec(a), g = !c && [], f ? [
            b.createElement(f[1])
        ] : (f = qa1([
            a
        ], b, g), g && g.length && r1(g).remove(), r1.merge([], f.childNodes));
    }, r1.fn.load = function(a40, b25, c) {
        var d, e, f, g = this, h = a40.indexOf(" ");
        return h > -1 && (d = pb(a40.slice(h)), a40 = a40.slice(0, h)), r1.isFunction(b25) ? (c = b25, b25 = void 0) : b25 && "object" == typeof b25 && (e = "POST"), g.length > 0 && r1.ajax({
            url: a40,
            type: e || "GET",
            dataType: "html",
            data: b25
        }).done(function(a) {
            f = arguments, g.html(d ? r1("<div>").append(r1.parseHTML(a)).find(d) : a);
        }).always(c && function(a, b) {
            g.each(function() {
                c.apply(this, f || [
                    a.responseText,
                    b,
                    a
                ]);
            });
        }), this;
    }, r1.each([
        "ajaxStart",
        "ajaxStop",
        "ajaxComplete",
        "ajaxError",
        "ajaxSuccess",
        "ajaxSend"
    ], function(a41, b) {
        r1.fn[b] = function(a) {
            return this.on(b, a);
        };
    }), r1.expr.pseudos.animated = function(a) {
        return r1.grep(r1.timers, function(b) {
            return a === b.elem;
        }).length;
    }, r1.offset = {
        setOffset: function(a, b, c) {
            var d, e, f, g, h, i, j, k = r1.css(a, "position"), l = r1(a), m = {
            };
            "static" === k && (a.style.position = "relative"), h = l.offset(), f = r1.css(a, "top"), i = r1.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), r1.isFunction(b) && (b = b.call(a, c, r1.extend({
            }, h))), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m);
        }
    }, r1.fn.extend({
        offset: function(a) {
            if (arguments.length) return void 0 === a ? this : this.each(function(b) {
                r1.offset.setOffset(this, a, b);
            });
            var b26, c, d, e, f = this[0];
            if (f) return f.getClientRects().length ? (d = f.getBoundingClientRect(), b26 = f.ownerDocument, c = b26.documentElement, e = b26.defaultView, {
                top: d.top + e.pageYOffset - c.clientTop,
                left: d.left + e.pageXOffset - c.clientLeft
            }) : {
                top: 0,
                left: 0
            };
        },
        position: function() {
            if (this[0]) {
                var a, b, c = this[0], d = {
                    top: 0,
                    left: 0
                };
                return "fixed" === r1.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), B1(a[0], "html") || (d = a.offset()), d = {
                    top: d.top + r1.css(a[0], "borderTopWidth", !0),
                    left: d.left + r1.css(a[0], "borderLeftWidth", !0)
                }), {
                    top: b.top - d.top - r1.css(c, "marginTop", !0),
                    left: b.left - d.left - r1.css(c, "marginLeft", !0)
                };
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var a = this.offsetParent;
                while(a && "static" === r1.css(a, "position"))a = a.offsetParent;
                return a || ra1;
            });
        }
    }), r1.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(a42, b) {
        var c = "pageYOffset" === b;
        r1.fn[a42] = function(d) {
            return T1(this, function(a, d, e) {
                var f;
                return r1.isWindow(a) ? f = a : 9 === a.nodeType && (f = a.defaultView), void 0 === e ? f ? f[b] : a[d] : void (f ? f.scrollTo(c ? f.pageXOffset : e, c ? e : f.pageYOffset) : a[d] = e);
            }, a42, d, arguments.length);
        };
    }), r1.each([
        "top",
        "left"
    ], function(a43, b) {
        r1.cssHooks[b] = Pa(o1.pixelPosition, function(a, c) {
            if (c) return c = Oa(a, b), Ma.test(c) ? r1(a).position()[b] + "px" : c;
        });
    }), r1.each({
        Height: "height",
        Width: "width"
    }, function(a, b27) {
        r1.each({
            padding: "inner" + a,
            content: b27,
            "": "outer" + a
        }, function(c18, d) {
            r1.fn[d] = function(e11, f8) {
                var g = arguments.length && (c18 || "boolean" != typeof e11), h = c18 || (e11 === !0 || f8 === !0 ? "margin" : "border");
                return T1(this, function(b, c, e) {
                    var f;
                    return r1.isWindow(b) ? 0 === d.indexOf("outer") ? b["inner" + a] : b.document.documentElement["client" + a] : 9 === b.nodeType ? (f = b.documentElement, Math.max(b.body["scroll" + a], f["scroll" + a], b.body["offset" + a], f["offset" + a], f["client" + a])) : void 0 === e ? r1.css(b, c, h) : r1.style(b, c, e, h);
                }, b27, g ? e11 : void 0, g);
            };
        });
    }), r1.fn.extend({
        bind: function(a, b, c) {
            return this.on(a, null, b, c);
        },
        unbind: function(a, b) {
            return this.off(a, null, b);
        },
        delegate: function(a, b, c, d) {
            return this.on(b, a, c, d);
        },
        undelegate: function(a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c);
        }
    }), r1.holdReady = function(a) {
        a ? r1.readyWait++ : r1.ready(!0);
    }, r1.isArray = Array.isArray, r1.parseJSON = JSON.parse, r1.nodeName = B1, "function" == typeof define && define.amd && define("jquery", [], function() {
        return r1;
    });
    var Vb = a2.jQuery, Wb = a2.$;
    return r1.noConflict = function(b) {
        return a2.$ === r1 && (a2.$ = Wb), b && a2.jQuery === r1 && (a2.jQuery = Vb), r1;
    }, b1 || (a2.jQuery = a2.$ = r1), r1;
});

},{}],"03H6P":[function(require,module,exports) {
/*! Magnific Popup - v1.1.0 - 2016-02-20
* http://dimsemenov.com/plugins/magnific-popup/
* Copyright (c) 2016 Dmitry Semenov; */ !function(a) {
    "function" == typeof define && define.amd ? define([
        "jquery"
    ], a) : a("object" == typeof exports ? require("jquery") : window.jQuery || window.Zepto);
}(function(a1) {
    var b1, c1, d1, e1, f1, g1, h1 = "Close", i1 = "BeforeClose", j1 = "AfterClose", k1 = "BeforeAppend", l = "MarkupParse", m = "Open", n1 = "Change", o1 = "mfp", p = "." + o1, q = "mfp-ready", r1 = "mfp-removing", s = "mfp-prevent-close", t = function() {
    }, u = !!window.jQuery, v = a1(window), w = function(a, c) {
        b1.ev.on(o1 + a + p, c);
    }, x = function(b, c, d, e) {
        var f = document.createElement("div");
        return f.className = "mfp-" + b, d && (f.innerHTML = d), e ? c && c.appendChild(f) : (f = a1(f), c && f.appendTo(c)), f;
    }, y = function(c, d) {
        b1.ev.triggerHandler(o1 + c, d), b1.st.callbacks && (c = c.charAt(0).toLowerCase() + c.slice(1), b1.st.callbacks[c] && b1.st.callbacks[c].apply(b1, a1.isArray(d) ? d : [
            d
        ]));
    }, z = function(c) {
        return c === g1 && b1.currTemplate.closeBtn || (b1.currTemplate.closeBtn = a1(b1.st.closeMarkup.replace("%title%", b1.st.tClose)), g1 = c), b1.currTemplate.closeBtn;
    }, A = function() {
        a1.magnificPopup.instance || (b1 = new t, b1.init(), a1.magnificPopup.instance = b1);
    }, B = function() {
        var a = document.createElement("p").style, b = [
            "ms",
            "O",
            "Moz",
            "Webkit"
        ];
        if (void 0 !== a.transition) return !0;
        for(; b.length;)if (b.pop() + "Transition" in a) return !0;
        return !1;
    };
    t.prototype = {
        constructor: t,
        init: function() {
            var c = navigator.appVersion;
            b1.isLowIE = b1.isIE8 = document.all && !document.addEventListener, b1.isAndroid = /android/gi.test(c), b1.isIOS = /iphone|ipad|ipod/gi.test(c), b1.supportsTransition = B(), b1.probablyMobile = b1.isAndroid || b1.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), d1 = a1(document), b1.popupsCache = {
            };
        },
        open: function(c2) {
            var e;
            if (c2.isObj === !1) {
                b1.items = c2.items.toArray(), b1.index = 0;
                var g, h = c2.items;
                for(e = 0; e < h.length; e++)if (g = h[e], g.parsed && (g = g.el[0]), g === c2.el[0]) {
                    b1.index = e;
                    break;
                }
            } else b1.items = a1.isArray(c2.items) ? c2.items : [
                c2.items
            ], b1.index = c2.index || 0;
            if (b1.isOpen) return void b1.updateItemHTML();
            b1.types = [], f1 = "", c2.mainEl && c2.mainEl.length ? b1.ev = c2.mainEl.eq(0) : b1.ev = d1, c2.key ? (b1.popupsCache[c2.key] || (b1.popupsCache[c2.key] = {
            }), b1.currTemplate = b1.popupsCache[c2.key]) : b1.currTemplate = {
            }, b1.st = a1.extend(!0, {
            }, a1.magnificPopup.defaults, c2), b1.fixedContentPos = "auto" === b1.st.fixedContentPos ? !b1.probablyMobile : b1.st.fixedContentPos, b1.st.modal && (b1.st.closeOnContentClick = !1, b1.st.closeOnBgClick = !1, b1.st.showCloseBtn = !1, b1.st.enableEscapeKey = !1), b1.bgOverlay || (b1.bgOverlay = x("bg").on("click" + p, function() {
                b1.close();
            }), b1.wrap = x("wrap").attr("tabindex", -1).on("click" + p, function(a) {
                b1._checkIfClose(a.target) && b1.close();
            }), b1.container = x("container", b1.wrap)), b1.contentContainer = x("content"), b1.st.preloader && (b1.preloader = x("preloader", b1.container, b1.st.tLoading));
            var i = a1.magnificPopup.modules;
            for(e = 0; e < i.length; e++){
                var j = i[e];
                j = j.charAt(0).toUpperCase() + j.slice(1), b1["init" + j].call(b1);
            }
            y("BeforeOpen"), b1.st.showCloseBtn && (b1.st.closeBtnInside ? (w(l, function(a, b, c, d) {
                c.close_replaceWith = z(d.type);
            }), f1 += " mfp-close-btn-in") : b1.wrap.append(z())), b1.st.alignTop && (f1 += " mfp-align-top"), b1.fixedContentPos ? b1.wrap.css({
                overflow: b1.st.overflowY,
                overflowX: "hidden",
                overflowY: b1.st.overflowY
            }) : b1.wrap.css({
                top: v.scrollTop(),
                position: "absolute"
            }), (b1.st.fixedBgPos === !1 || "auto" === b1.st.fixedBgPos && !b1.fixedContentPos) && b1.bgOverlay.css({
                height: d1.height(),
                position: "absolute"
            }), b1.st.enableEscapeKey && d1.on("keyup" + p, function(a) {
                27 === a.keyCode && b1.close();
            }), v.on("resize" + p, function() {
                b1.updateSize();
            }), b1.st.closeOnContentClick || (f1 += " mfp-auto-cursor"), f1 && b1.wrap.addClass(f1);
            var k = b1.wH = v.height(), n = {
            };
            if (b1.fixedContentPos && b1._hasScrollBar(k)) {
                var o = b1._getScrollbarSize();
                o && (n.marginRight = o);
            }
            b1.fixedContentPos && (b1.isIE7 ? a1("body, html").css("overflow", "hidden") : n.overflow = "hidden");
            var r = b1.st.mainClass;
            return b1.isIE7 && (r += " mfp-ie7"), r && b1._addClassToMFP(r), b1.updateItemHTML(), y("BuildControls"), a1("html").css(n), b1.bgOverlay.add(b1.wrap).prependTo(b1.st.prependTo || a1(document.body)), b1._lastFocusedEl = document.activeElement, setTimeout(function() {
                b1.content ? (b1._addClassToMFP(q), b1._setFocus()) : b1.bgOverlay.addClass(q), d1.on("focusin" + p, b1._onFocusIn);
            }, 16), b1.isOpen = !0, b1.updateSize(k), y(m), c2;
        },
        close: function() {
            b1.isOpen && (y(i1), b1.isOpen = !1, b1.st.removalDelay && !b1.isLowIE && b1.supportsTransition ? (b1._addClassToMFP(r1), setTimeout(function() {
                b1._close();
            }, b1.st.removalDelay)) : b1._close());
        },
        _close: function() {
            y(h1);
            var c = r1 + " " + q + " ";
            if (b1.bgOverlay.detach(), b1.wrap.detach(), b1.container.empty(), b1.st.mainClass && (c += b1.st.mainClass + " "), b1._removeClassFromMFP(c), b1.fixedContentPos) {
                var e = {
                    marginRight: ""
                };
                b1.isIE7 ? a1("body, html").css("overflow", "") : e.overflow = "", a1("html").css(e);
            }
            d1.off("keyup" + p + " focusin" + p), b1.ev.off(p), b1.wrap.attr("class", "mfp-wrap").removeAttr("style"), b1.bgOverlay.attr("class", "mfp-bg"), b1.container.attr("class", "mfp-container"), !b1.st.showCloseBtn || b1.st.closeBtnInside && b1.currTemplate[b1.currItem.type] !== !0 || b1.currTemplate.closeBtn && b1.currTemplate.closeBtn.detach(), b1.st.autoFocusLast && b1._lastFocusedEl && a1(b1._lastFocusedEl).focus(), b1.currItem = null, b1.content = null, b1.currTemplate = null, b1.prevHeight = 0, y(j1);
        },
        updateSize: function(a) {
            if (b1.isIOS) {
                var c = document.documentElement.clientWidth / window.innerWidth, d = window.innerHeight * c;
                b1.wrap.css("height", d), b1.wH = d;
            } else b1.wH = a || v.height();
            b1.fixedContentPos || b1.wrap.css("height", b1.wH), y("Resize");
        },
        updateItemHTML: function() {
            var c = b1.items[b1.index];
            b1.contentContainer.detach(), b1.content && b1.content.detach(), c.parsed || (c = b1.parseEl(b1.index));
            var d = c.type;
            if (y("BeforeChange", [
                b1.currItem ? b1.currItem.type : "",
                d
            ]), b1.currItem = c, !b1.currTemplate[d]) {
                var f = b1.st[d] ? b1.st[d].markup : !1;
                y("FirstMarkupParse", f), f ? b1.currTemplate[d] = a1(f) : b1.currTemplate[d] = !0;
            }
            e1 && e1 !== c.type && b1.container.removeClass("mfp-" + e1 + "-holder");
            var g = b1["get" + d.charAt(0).toUpperCase() + d.slice(1)](c, b1.currTemplate[d]);
            b1.appendContent(g, d), c.preloaded = !0, y(n1, c), e1 = c.type, b1.container.prepend(b1.contentContainer), y("AfterChange");
        },
        appendContent: function(a, c) {
            b1.content = a, a ? b1.st.showCloseBtn && b1.st.closeBtnInside && b1.currTemplate[c] === !0 ? b1.content.find(".mfp-close").length || b1.content.append(z()) : b1.content = a : b1.content = "", y(k1), b1.container.addClass("mfp-" + c + "-holder"), b1.contentContainer.append(b1.content);
        },
        parseEl: function(c) {
            var d, e = b1.items[c];
            if (e.tagName ? e = {
                el: a1(e)
            } : (d = e.type, e = {
                data: e,
                src: e.src
            }), e.el) {
                for(var f = b1.types, g = 0; g < f.length; g++)if (e.el.hasClass("mfp-" + f[g])) {
                    d = f[g];
                    break;
                }
                e.src = e.el.attr("data-mfp-src"), e.src || (e.src = e.el.attr("href"));
            }
            return e.type = d || b1.st.type || "inline", e.index = c, e.parsed = !0, b1.items[c] = e, y("ElementParse", e), b1.items[c];
        },
        addGroup: function(a, c) {
            var d2 = function(d) {
                d.mfpEl = this, b1._openClick(d, a, c);
            };
            c || (c = {
            });
            var e = "click.magnificPopup";
            c.mainEl = a, c.items ? (c.isObj = !0, a.off(e).on(e, d2)) : (c.isObj = !1, c.delegate ? a.off(e).on(e, c.delegate, d2) : (c.items = a, a.off(e).on(e, d2)));
        },
        _openClick: function(c, d, e) {
            var f = void 0 !== e.midClick ? e.midClick : a1.magnificPopup.defaults.midClick;
            if (f || !(2 === c.which || c.ctrlKey || c.metaKey || c.altKey || c.shiftKey)) {
                var g = void 0 !== e.disableOn ? e.disableOn : a1.magnificPopup.defaults.disableOn;
                if (g) {
                    if (a1.isFunction(g)) {
                        if (!g.call(b1)) return !0;
                    } else if (v.width() < g) return !0;
                }
                c.type && (c.preventDefault(), b1.isOpen && c.stopPropagation()), e.el = a1(c.mfpEl), e.delegate && (e.items = d.find(e.delegate)), b1.open(e);
            }
        },
        updateStatus: function(a2, d) {
            if (b1.preloader) {
                c1 !== a2 && b1.container.removeClass("mfp-s-" + c1), d || "loading" !== a2 || (d = b1.st.tLoading);
                var e = {
                    status: a2,
                    text: d
                };
                y("UpdateStatus", e), a2 = e.status, d = e.text, b1.preloader.html(d), b1.preloader.find("a").on("click", function(a) {
                    a.stopImmediatePropagation();
                }), b1.container.addClass("mfp-s-" + a2), c1 = a2;
            }
        },
        _checkIfClose: function(c) {
            if (!a1(c).hasClass(s)) {
                var d = b1.st.closeOnContentClick, e = b1.st.closeOnBgClick;
                if (d && e) return !0;
                if (!b1.content || a1(c).hasClass("mfp-close") || b1.preloader && c === b1.preloader[0]) return !0;
                if (c === b1.content[0] || a1.contains(b1.content[0], c)) {
                    if (d) return !0;
                } else if (e && a1.contains(document, c)) return !0;
                return !1;
            }
        },
        _addClassToMFP: function(a) {
            b1.bgOverlay.addClass(a), b1.wrap.addClass(a);
        },
        _removeClassFromMFP: function(a) {
            this.bgOverlay.removeClass(a), b1.wrap.removeClass(a);
        },
        _hasScrollBar: function(a) {
            return (b1.isIE7 ? d1.height() : document.body.scrollHeight) > (a || v.height());
        },
        _setFocus: function() {
            (b1.st.focus ? b1.content.find(b1.st.focus).eq(0) : b1.wrap).focus();
        },
        _onFocusIn: function(c) {
            return c.target === b1.wrap[0] || a1.contains(b1.wrap[0], c.target) ? void 0 : (b1._setFocus(), !1);
        },
        _parseMarkup: function(b, c3, d3) {
            var e;
            d3.data && (c3 = a1.extend(d3.data, c3)), y(l, [
                b,
                c3,
                d3
            ]), a1.each(c3, function(c, d) {
                if (void 0 === d || d === !1) return !0;
                if (e = c.split("_"), e.length > 1) {
                    var f = b.find(p + "-" + e[0]);
                    if (f.length > 0) {
                        var g = e[1];
                        "replaceWith" === g ? f[0] !== d[0] && f.replaceWith(d) : "img" === g ? f.is("img") ? f.attr("src", d) : f.replaceWith(a1("<img>").attr("src", d).attr("class", f.attr("class"))) : f.attr(e[1], d);
                    }
                } else b.find(p + "-" + c).html(d);
            });
        },
        _getScrollbarSize: function() {
            if (void 0 === b1.scrollbarSize) {
                var a = document.createElement("div");
                a.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(a), b1.scrollbarSize = a.offsetWidth - a.clientWidth, document.body.removeChild(a);
            }
            return b1.scrollbarSize;
        }
    }, a1.magnificPopup = {
        instance: null,
        proto: t.prototype,
        modules: [],
        open: function(b, c) {
            return A(), b = b ? a1.extend(!0, {
            }, b) : {
            }, b.isObj = !0, b.index = c || 0, this.instance.open(b);
        },
        close: function() {
            return a1.magnificPopup.instance && a1.magnificPopup.instance.close();
        },
        registerModule: function(b, c) {
            c.options && (a1.magnificPopup.defaults[b] = c.options), a1.extend(this.proto, c.proto), this.modules.push(b);
        },
        defaults: {
            disableOn: 0,
            key: null,
            midClick: !1,
            mainClass: "",
            preloader: !0,
            focus: "",
            closeOnContentClick: !1,
            closeOnBgClick: !0,
            closeBtnInside: !0,
            showCloseBtn: !0,
            enableEscapeKey: !0,
            modal: !1,
            alignTop: !1,
            removalDelay: 0,
            prependTo: null,
            fixedContentPos: "auto",
            fixedBgPos: "auto",
            overflowY: "auto",
            closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
            tClose: "Close (Esc)",
            tLoading: "Loading...",
            autoFocusLast: !0
        }
    }, a1.fn.magnificPopup = function(c) {
        A();
        var d = a1(this);
        if ("string" == typeof c) {
            if ("open" === c) {
                var e, f = u ? d.data("magnificPopup") : d[0].magnificPopup, g = parseInt(arguments[1], 10) || 0;
                f.items ? e = f.items[g] : (e = d, f.delegate && (e = e.find(f.delegate)), e = e.eq(g)), b1._openClick({
                    mfpEl: e
                }, d, f);
            } else b1.isOpen && b1[c].apply(b1, Array.prototype.slice.call(arguments, 1));
        } else c = a1.extend(!0, {
        }, c), u ? d.data("magnificPopup", c) : d[0].magnificPopup = c, b1.addGroup(d, c);
        return d;
    };
    var C, D, E, F = "inline", G = function() {
        E && (D.after(E.addClass(C)).detach(), E = null);
    };
    a1.magnificPopup.registerModule(F, {
        options: {
            hiddenClass: "hide",
            markup: "",
            tNotFound: "Content not found"
        },
        proto: {
            initInline: function() {
                b1.types.push(F), w(h1 + "." + F, function() {
                    G();
                });
            },
            getInline: function(c, d) {
                if (G(), c.src) {
                    var e = b1.st.inline, f = a1(c.src);
                    if (f.length) {
                        var g = f[0].parentNode;
                        g && g.tagName && (D || (C = e.hiddenClass, D = x(C), C = "mfp-" + C), E = f.after(D).detach().removeClass(C)), b1.updateStatus("ready");
                    } else b1.updateStatus("error", e.tNotFound), f = a1("<div>");
                    return c.inlineElement = f, f;
                }
                return b1.updateStatus("ready"), b1._parseMarkup(d, {
                }, c), d;
            }
        }
    });
    var H, I = "ajax", J = function() {
        H && a1(document.body).removeClass(H);
    }, K = function() {
        J(), b1.req && b1.req.abort();
    };
    a1.magnificPopup.registerModule(I, {
        options: {
            settings: null,
            cursor: "mfp-ajax-cur",
            tError: '<a href="%url%">The content</a> could not be loaded.'
        },
        proto: {
            initAjax: function() {
                b1.types.push(I), H = b1.st.ajax.cursor, w(h1 + "." + I, K), w("BeforeChange." + I, K);
            },
            getAjax: function(c) {
                H && a1(document.body).addClass(H), b1.updateStatus("loading");
                var d4 = a1.extend({
                    url: c.src,
                    success: function(d, e, f) {
                        var g = {
                            data: d,
                            xhr: f
                        };
                        y("ParseAjax", g), b1.appendContent(a1(g.data), I), c.finished = !0, J(), b1._setFocus(), setTimeout(function() {
                            b1.wrap.addClass(q);
                        }, 16), b1.updateStatus("ready"), y("AjaxContentAdded");
                    },
                    error: function() {
                        J(), c.finished = c.loadError = !0, b1.updateStatus("error", b1.st.ajax.tError.replace("%url%", c.src));
                    }
                }, b1.st.ajax.settings);
                return b1.req = a1.ajax(d4), "";
            }
        }
    });
    var L, M = function(c) {
        if (c.data && void 0 !== c.data.title) return c.data.title;
        var d = b1.st.image.titleSrc;
        if (d) {
            if (a1.isFunction(d)) return d.call(b1, c);
            if (c.el) return c.el.attr(d) || "";
        }
        return "";
    };
    a1.magnificPopup.registerModule("image", {
        options: {
            markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
            cursor: "mfp-zoom-out-cur",
            titleSrc: "title",
            verticalFit: !0,
            tError: '<a href="%url%">The image</a> could not be loaded.'
        },
        proto: {
            initImage: function() {
                var c = b1.st.image, d = ".image";
                b1.types.push("image"), w(m + d, function() {
                    "image" === b1.currItem.type && c.cursor && a1(document.body).addClass(c.cursor);
                }), w(h1 + d, function() {
                    c.cursor && a1(document.body).removeClass(c.cursor), v.off("resize" + p);
                }), w("Resize" + d, b1.resizeImage), b1.isLowIE && w("AfterChange", b1.resizeImage);
            },
            resizeImage: function() {
                var a = b1.currItem;
                if (a && a.img && b1.st.image.verticalFit) {
                    var c = 0;
                    b1.isLowIE && (c = parseInt(a.img.css("padding-top"), 10) + parseInt(a.img.css("padding-bottom"), 10)), a.img.css("max-height", b1.wH - c);
                }
            },
            _onImageHasSize: function(a) {
                a.img && (a.hasSize = !0, L && clearInterval(L), a.isCheckingImgSize = !1, y("ImageHasSize", a), a.imgHidden && (b1.content && b1.content.removeClass("mfp-loading"), a.imgHidden = !1));
            },
            findImageSize: function(a) {
                var c = 0, d = a.img[0], e = function(f) {
                    L && clearInterval(L), L = setInterval(function() {
                        return d.naturalWidth > 0 ? void b1._onImageHasSize(a) : (c > 200 && clearInterval(L), c++, void (3 === c ? e(10) : 40 === c ? e(50) : 100 === c && e(500)));
                    }, f);
                };
                e(1);
            },
            getImage: function(c, d) {
                var e = 0, f = function() {
                    c && (c.img[0].complete ? (c.img.off(".mfploader"), c === b1.currItem && (b1._onImageHasSize(c), b1.updateStatus("ready")), c.hasSize = !0, c.loaded = !0, y("ImageLoadComplete")) : (e++, 200 > e ? setTimeout(f, 100) : g()));
                }, g = function() {
                    c && (c.img.off(".mfploader"), c === b1.currItem && (b1._onImageHasSize(c), b1.updateStatus("error", h.tError.replace("%url%", c.src))), c.hasSize = !0, c.loaded = !0, c.loadError = !0);
                }, h = b1.st.image, i = d.find(".mfp-img");
                if (i.length) {
                    var j = document.createElement("img");
                    j.className = "mfp-img", c.el && c.el.find("img").length && (j.alt = c.el.find("img").attr("alt")), c.img = a1(j).on("load.mfploader", f).on("error.mfploader", g), j.src = c.src, i.is("img") && (c.img = c.img.clone()), j = c.img[0], j.naturalWidth > 0 ? c.hasSize = !0 : j.width || (c.hasSize = !1);
                }
                return b1._parseMarkup(d, {
                    title: M(c),
                    img_replaceWith: c.img
                }, c), b1.resizeImage(), c.hasSize ? (L && clearInterval(L), c.loadError ? (d.addClass("mfp-loading"), b1.updateStatus("error", h.tError.replace("%url%", c.src))) : (d.removeClass("mfp-loading"), b1.updateStatus("ready")), d) : (b1.updateStatus("loading"), c.loading = !0, c.hasSize || (c.imgHidden = !0, d.addClass("mfp-loading"), b1.findImageSize(c)), d);
            }
        }
    });
    var N, O = function() {
        return void 0 === N && (N = void 0 !== document.createElement("p").style.MozTransform), N;
    };
    a1.magnificPopup.registerModule("zoom", {
        options: {
            enabled: !1,
            easing: "ease-in-out",
            duration: 300,
            opener: function(a) {
                return a.is("img") ? a : a.find("img");
            }
        },
        proto: {
            initZoom: function() {
                var a3, c = b1.st.zoom, d5 = ".zoom";
                if (c.enabled && b1.supportsTransition) {
                    var e2, f, g = c.duration, j = function(a) {
                        var b = a.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"), d = "all " + c.duration / 1000 + "s " + c.easing, e = {
                            position: "fixed",
                            zIndex: 9999,
                            left: 0,
                            top: 0,
                            "-webkit-backface-visibility": "hidden"
                        }, f = "transition";
                        return e["-webkit-" + f] = e["-moz-" + f] = e["-o-" + f] = e[f] = d, b.css(e), b;
                    }, k = function() {
                        b1.content.css("visibility", "visible");
                    };
                    w("BuildControls" + d5, function() {
                        if (b1._allowZoom()) {
                            if (clearTimeout(e2), b1.content.css("visibility", "hidden"), a3 = b1._getItemToZoom(), !a3) return void k();
                            f = j(a3), f.css(b1._getOffset()), b1.wrap.append(f), e2 = setTimeout(function() {
                                f.css(b1._getOffset(!0)), e2 = setTimeout(function() {
                                    k(), setTimeout(function() {
                                        f.remove(), a3 = f = null, y("ZoomAnimationEnded");
                                    }, 16);
                                }, g);
                            }, 16);
                        }
                    }), w(i1 + d5, function() {
                        if (b1._allowZoom()) {
                            if (clearTimeout(e2), b1.st.removalDelay = g, !a3) {
                                if (a3 = b1._getItemToZoom(), !a3) return;
                                f = j(a3);
                            }
                            f.css(b1._getOffset(!0)), b1.wrap.append(f), b1.content.css("visibility", "hidden"), setTimeout(function() {
                                f.css(b1._getOffset());
                            }, 16);
                        }
                    }), w(h1 + d5, function() {
                        b1._allowZoom() && (k(), f && f.remove(), a3 = null);
                    });
                }
            },
            _allowZoom: function() {
                return "image" === b1.currItem.type;
            },
            _getItemToZoom: function() {
                return b1.currItem.hasSize ? b1.currItem.img : !1;
            },
            _getOffset: function(c) {
                var d;
                d = c ? b1.currItem.img : b1.st.zoom.opener(b1.currItem.el || b1.currItem);
                var e = d.offset(), f = parseInt(d.css("padding-top"), 10), g = parseInt(d.css("padding-bottom"), 10);
                e.top -= a1(window).scrollTop() - f;
                var h = {
                    width: d.width(),
                    height: (u ? d.innerHeight() : d[0].offsetHeight) - g - f
                };
                return O() ? h["-moz-transform"] = h.transform = "translate(" + e.left + "px," + e.top + "px)" : (h.left = e.left, h.top = e.top), h;
            }
        }
    });
    var P = "iframe", Q = "//about:blank", R = function(a) {
        if (b1.currTemplate[P]) {
            var c = b1.currTemplate[P].find("iframe");
            c.length && (a || (c[0].src = Q), b1.isIE8 && c.css("display", a ? "block" : "none"));
        }
    };
    a1.magnificPopup.registerModule(P, {
        options: {
            markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
            srcAction: "iframe_src",
            patterns: {
                youtube: {
                    index: "youtube.com",
                    id: "v=",
                    src: "//www.youtube.com/embed/%id%?autoplay=1"
                },
                vimeo: {
                    index: "vimeo.com/",
                    id: "/",
                    src: "//player.vimeo.com/video/%id%?autoplay=1"
                },
                gmaps: {
                    index: "//maps.google.",
                    src: "%id%&output=embed"
                }
            }
        },
        proto: {
            initIframe: function() {
                b1.types.push(P), w("BeforeChange", function(a, b, c) {
                    b !== c && (b === P ? R() : c === P && R(!0));
                }), w(h1 + "." + P, function() {
                    R();
                });
            },
            getIframe: function(c, d) {
                var e = c.src, f = b1.st.iframe;
                a1.each(f.patterns, function() {
                    return e.indexOf(this.index) > -1 ? (this.id && (e = "string" == typeof this.id ? e.substr(e.lastIndexOf(this.id) + this.id.length, e.length) : this.id.call(this, e)), e = this.src.replace("%id%", e), !1) : void 0;
                });
                var g = {
                };
                return f.srcAction && (g[f.srcAction] = e), b1._parseMarkup(d, g, c), b1.updateStatus("ready"), d;
            }
        }
    });
    var S = function(a) {
        var c = b1.items.length;
        return a > c - 1 ? a - c : 0 > a ? c + a : a;
    }, T = function(a, b, c) {
        return a.replace(/%curr%/gi, b + 1).replace(/%total%/gi, c);
    };
    a1.magnificPopup.registerModule("gallery", {
        options: {
            enabled: !1,
            arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
            preload: [
                0,
                2
            ],
            navigateByImgClick: !0,
            arrows: !0,
            tPrev: "Previous (Left arrow key)",
            tNext: "Next (Right arrow key)",
            tCounter: "%curr% of %total%"
        },
        proto: {
            initGallery: function() {
                var c4 = b1.st.gallery, e3 = ".mfp-gallery";
                return b1.direction = !0, c4 && c4.enabled ? (f1 += " mfp-gallery", w(m + e3, function() {
                    c4.navigateByImgClick && b1.wrap.on("click" + e3, ".mfp-img", function() {
                        return b1.items.length > 1 ? (b1.next(), !1) : void 0;
                    }), d1.on("keydown" + e3, function(a) {
                        37 === a.keyCode ? b1.prev() : 39 === a.keyCode && b1.next();
                    });
                }), w("UpdateStatus" + e3, function(a, c) {
                    c.text && (c.text = T(c.text, b1.currItem.index, b1.items.length));
                }), w(l + e3, function(a, d, e, f) {
                    var g = b1.items.length;
                    e.counter = g > 1 ? T(c4.tCounter, f.index, g) : "";
                }), w("BuildControls" + e3, function() {
                    if (b1.items.length > 1 && c4.arrows && !b1.arrowLeft) {
                        var d = c4.arrowMarkup, e = b1.arrowLeft = a1(d.replace(/%title%/gi, c4.tPrev).replace(/%dir%/gi, "left")).addClass(s), f = b1.arrowRight = a1(d.replace(/%title%/gi, c4.tNext).replace(/%dir%/gi, "right")).addClass(s);
                        e.click(function() {
                            b1.prev();
                        }), f.click(function() {
                            b1.next();
                        }), b1.container.append(e.add(f));
                    }
                }), w(n1 + e3, function() {
                    b1._preloadTimeout && clearTimeout(b1._preloadTimeout), b1._preloadTimeout = setTimeout(function() {
                        b1.preloadNearbyImages(), b1._preloadTimeout = null;
                    }, 16);
                }), void w(h1 + e3, function() {
                    d1.off(e3), b1.wrap.off("click" + e3), b1.arrowRight = b1.arrowLeft = null;
                })) : !1;
            },
            next: function() {
                b1.direction = !0, b1.index = S(b1.index + 1), b1.updateItemHTML();
            },
            prev: function() {
                b1.direction = !1, b1.index = S(b1.index - 1), b1.updateItemHTML();
            },
            goTo: function(a) {
                b1.direction = a >= b1.index, b1.index = a, b1.updateItemHTML();
            },
            preloadNearbyImages: function() {
                var a, c = b1.st.gallery.preload, d = Math.min(c[0], b1.items.length), e = Math.min(c[1], b1.items.length);
                for(a = 1; a <= (b1.direction ? e : d); a++)b1._preloadItem(b1.index + a);
                for(a = 1; a <= (b1.direction ? d : e); a++)b1._preloadItem(b1.index - a);
            },
            _preloadItem: function(c) {
                if (c = S(c), !b1.items[c].preloaded) {
                    var d = b1.items[c];
                    d.parsed || (d = b1.parseEl(c)), y("LazyLoad", d), "image" === d.type && (d.img = a1('<img class="mfp-img" />').on("load.mfploader", function() {
                        d.hasSize = !0;
                    }).on("error.mfploader", function() {
                        d.hasSize = !0, d.loadError = !0, y("LazyLoadError", d);
                    }).attr("src", d.src)), d.preloaded = !0;
                }
            }
        }
    });
    var U = "retina";
    a1.magnificPopup.registerModule(U, {
        options: {
            replaceSrc: function(a4) {
                return a4.src.replace(/\.\w+$/, function(a) {
                    return "@2x" + a;
                });
            },
            ratio: 1
        },
        proto: {
            initRetina: function() {
                if (window.devicePixelRatio > 1) {
                    var a = b1.st.retina, c = a.ratio;
                    c = isNaN(c) ? c() : c, c > 1 && (w("ImageHasSize." + U, function(a, b) {
                        b.img.css({
                            "max-width": b.img[0].naturalWidth / c,
                            width: "100%"
                        });
                    }), w("ElementParse." + U, function(b, d) {
                        d.src = a.replaceSrc(d, c);
                    }));
                }
            }
        }
    }), A();
});

},{"jquery":"bE6My"}],"bE6My":[function(require,module,exports) {
/*!
 * jQuery JavaScript Library v3.6.0
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2021-03-02T17:08Z
 */ (function(global, factory) {
    if (typeof module === "object" && typeof module.exports === "object") // For CommonJS and CommonJS-like environments where a proper `window`
    // is present, execute the factory and get jQuery.
    // For environments that do not have a `window` with a `document`
    // (such as Node.js), expose a factory as module.exports.
    // This accentuates the need for the creation of a real `window`.
    // e.g. var jQuery = require("jquery")(window);
    // See ticket #14549 for more info.
    module.exports = global.document ? factory(global, true) : function(w) {
        if (!w.document) throw new Error("jQuery requires a window with a document");
        return factory(w);
    };
    else factory(global);
// Pass this if window is not defined yet
})(typeof window !== "undefined" ? window : this, function(window1, noGlobal) {
    // Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
    // throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
    // arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
    // enough that all such attempts are guarded in a try block.
    "use strict";
    var arr1 = [];
    var getProto = Object.getPrototypeOf;
    var slice1 = arr1.slice;
    var flat = arr1.flat ? function(array) {
        return arr1.flat.call(array);
    } : function(array) {
        return arr1.concat.apply([], array);
    };
    var push1 = arr1.push;
    var indexOf1 = arr1.indexOf;
    var class2type = {
    };
    var toString = class2type.toString;
    var hasOwn1 = class2type.hasOwnProperty;
    var fnToString = hasOwn1.toString;
    var ObjectFunctionString = fnToString.call(Object);
    var support1 = {
    };
    var isFunction = function isFunction(obj) {
        // Support: Chrome <=57, Firefox <=52
        // In some browsers, typeof returns "function" for HTML <object> elements
        // (i.e., `typeof document.createElement( "object" ) === "function"`).
        // We don't want to classify *any* DOM node as a function.
        // Support: QtWeb <=3.8.5, WebKit <=534.34, wkhtmltopdf tool <=0.12.5
        // Plus for old WebKit, typeof returns "function" for HTML collections
        // (e.g., `typeof document.getElementsByTagName("div") === "function"`). (gh-4756)
        return typeof obj === "function" && typeof obj.nodeType !== "number" && typeof obj.item !== "function";
    };
    var isWindow = function isWindow(obj) {
        return obj != null && obj === obj.window;
    };
    var document1 = window1.document;
    var preservedScriptAttributes = {
        type: true,
        src: true,
        nonce: true,
        noModule: true
    };
    function DOMEval(code, node, doc) {
        doc = doc || document1;
        var i, val, script = doc.createElement("script");
        script.text = code;
        if (node) for(i in preservedScriptAttributes){
            // Support: Firefox 64+, Edge 18+
            // Some browsers don't support the "nonce" property on scripts.
            // On the other hand, just using `getAttribute` is not enough as
            // the `nonce` attribute is reset to an empty string whenever it
            // becomes browsing-context connected.
            // See https://github.com/whatwg/html/issues/2369
            // See https://html.spec.whatwg.org/#nonce-attributes
            // The `node.getAttribute` check was added for the sake of
            // `jQuery.globalEval` so that it can fake a nonce-containing node
            // via an object.
            val = node[i] || node.getAttribute && node.getAttribute(i);
            if (val) script.setAttribute(i, val);
        }
        doc.head.appendChild(script).parentNode.removeChild(script);
    }
    function toType(obj) {
        if (obj == null) return obj + "";
        // Support: Android <=2.3 only (functionish RegExp)
        return typeof obj === "object" || typeof obj === "function" ? class2type[toString.call(obj)] || "object" : typeof obj;
    }
    /* global Symbol */ // Defining this global in .eslintrc.json would create a danger of using the global
    // unguarded in another place, it seems safer to define global only for this module
    var version = "3.6.0", // Define a local copy of jQuery
    jQuery = function(selector, context) {
        // The jQuery object is actually just the init constructor 'enhanced'
        // Need init if jQuery is called (just allow error to be thrown if not included)
        return new jQuery.fn.init(selector, context);
    };
    jQuery.fn = jQuery.prototype = {
        // The current version of jQuery being used
        jquery: version,
        constructor: jQuery,
        // The default length of a jQuery object is 0
        length: 0,
        toArray: function() {
            return slice1.call(this);
        },
        // Get the Nth element in the matched element set OR
        // Get the whole matched element set as a clean array
        get: function(num) {
            // Return all the elements in a clean array
            if (num == null) return slice1.call(this);
            // Return just the one element from the set
            return num < 0 ? this[num + this.length] : this[num];
        },
        // Take an array of elements and push it onto the stack
        // (returning the new matched element set)
        pushStack: function(elems) {
            // Build a new jQuery matched element set
            var ret = jQuery.merge(this.constructor(), elems);
            // Add the old object onto the stack (as a reference)
            ret.prevObject = this;
            // Return the newly-formed element set
            return ret;
        },
        // Execute a callback for every element in the matched set.
        each: function(callback) {
            return jQuery.each(this, callback);
        },
        map: function(callback) {
            return this.pushStack(jQuery.map(this, function(elem, i) {
                return callback.call(elem, i, elem);
            }));
        },
        slice: function() {
            return this.pushStack(slice1.apply(this, arguments));
        },
        first: function() {
            return this.eq(0);
        },
        last: function() {
            return this.eq(-1);
        },
        even: function() {
            return this.pushStack(jQuery.grep(this, function(_elem, i) {
                return (i + 1) % 2;
            }));
        },
        odd: function() {
            return this.pushStack(jQuery.grep(this, function(_elem, i) {
                return i % 2;
            }));
        },
        eq: function(i) {
            var len = this.length, j = +i + (i < 0 ? len : 0);
            return this.pushStack(j >= 0 && j < len ? [
                this[j]
            ] : []);
        },
        end: function() {
            return this.prevObject || this.constructor();
        },
        // For internal use only.
        // Behaves like an Array's method, not like a jQuery method.
        push: push1,
        sort: arr1.sort,
        splice: arr1.splice
    };
    jQuery.extend = jQuery.fn.extend = function() {
        var options, name, src, copy, copyIsArray, clone, target = arguments[0] || {
        }, i = 1, length = arguments.length, deep = false;
        // Handle a deep copy situation
        if (typeof target === "boolean") {
            deep = target;
            // Skip the boolean and the target
            target = arguments[i] || {
            };
            i++;
        }
        // Handle case when target is a string or something (possible in deep copy)
        if (typeof target !== "object" && !isFunction(target)) target = {
        };
        // Extend jQuery itself if only one argument is passed
        if (i === length) {
            target = this;
            i--;
        }
        for(; i < length; i++){
            // Only deal with non-null/undefined values
            if ((options = arguments[i]) != null) // Extend the base object
            for(name in options){
                copy = options[name];
                // Prevent Object.prototype pollution
                // Prevent never-ending loop
                if (name === "__proto__" || target === copy) continue;
                // Recurse if we're merging plain objects or arrays
                if (deep && copy && (jQuery.isPlainObject(copy) || (copyIsArray = Array.isArray(copy)))) {
                    src = target[name];
                    // Ensure proper type for the source value
                    if (copyIsArray && !Array.isArray(src)) clone = [];
                    else if (!copyIsArray && !jQuery.isPlainObject(src)) clone = {
                    };
                    else clone = src;
                    copyIsArray = false;
                    // Never move original objects, clone them
                    target[name] = jQuery.extend(deep, clone, copy);
                // Don't bring in undefined values
                } else if (copy !== undefined) target[name] = copy;
            }
        }
        // Return the modified object
        return target;
    };
    jQuery.extend({
        // Unique for each copy of jQuery on the page
        expando: "jQuery" + (version + Math.random()).replace(/\D/g, ""),
        // Assume jQuery is ready without the ready module
        isReady: true,
        error: function(msg) {
            throw new Error(msg);
        },
        noop: function() {
        },
        isPlainObject: function(obj) {
            var proto, Ctor;
            // Detect obvious negatives
            // Use toString instead of jQuery.type to catch host objects
            if (!obj || toString.call(obj) !== "[object Object]") return false;
            proto = getProto(obj);
            // Objects with no prototype (e.g., `Object.create( null )`) are plain
            if (!proto) return true;
            // Objects with prototype are plain iff they were constructed by a global Object function
            Ctor = hasOwn1.call(proto, "constructor") && proto.constructor;
            return typeof Ctor === "function" && fnToString.call(Ctor) === ObjectFunctionString;
        },
        isEmptyObject: function(obj) {
            var name;
            for(name in obj)return false;
            return true;
        },
        // Evaluates a script in a provided context; falls back to the global one
        // if not specified.
        globalEval: function(code, options, doc) {
            DOMEval(code, {
                nonce: options && options.nonce
            }, doc);
        },
        each: function(obj, callback) {
            var length, i = 0;
            if (isArrayLike(obj)) {
                length = obj.length;
                for(; i < length; i++){
                    if (callback.call(obj[i], i, obj[i]) === false) break;
                }
            } else for(i in obj){
                if (callback.call(obj[i], i, obj[i]) === false) break;
            }
            return obj;
        },
        // results is for internal usage only
        makeArray: function(arr, results) {
            var ret = results || [];
            if (arr != null) {
                if (isArrayLike(Object(arr))) jQuery.merge(ret, typeof arr === "string" ? [
                    arr
                ] : arr);
                else push1.call(ret, arr);
            }
            return ret;
        },
        inArray: function(elem, arr, i) {
            return arr == null ? -1 : indexOf1.call(arr, elem, i);
        },
        // Support: Android <=4.0 only, PhantomJS 1 only
        // push.apply(_, arraylike) throws on ancient WebKit
        merge: function(first, second) {
            var len = +second.length, j = 0, i = first.length;
            for(; j < len; j++)first[i++] = second[j];
            first.length = i;
            return first;
        },
        grep: function(elems, callback, invert) {
            var callbackInverse, matches = [], i = 0, length = elems.length, callbackExpect = !invert;
            // Go through the array, only saving the items
            // that pass the validator function
            for(; i < length; i++){
                callbackInverse = !callback(elems[i], i);
                if (callbackInverse !== callbackExpect) matches.push(elems[i]);
            }
            return matches;
        },
        // arg is for internal usage only
        map: function(elems, callback, arg) {
            var length, value, i = 0, ret = [];
            // Go through the array, translating each of the items to their new values
            if (isArrayLike(elems)) {
                length = elems.length;
                for(; i < length; i++){
                    value = callback(elems[i], i, arg);
                    if (value != null) ret.push(value);
                }
            // Go through every key on the object,
            } else for(i in elems){
                value = callback(elems[i], i, arg);
                if (value != null) ret.push(value);
            }
            // Flatten any nested arrays
            return flat(ret);
        },
        // A global GUID counter for objects
        guid: 1,
        // jQuery.support is not used in Core but other projects attach their
        // properties to it so it needs to exist.
        support: support1
    });
    if (typeof Symbol === "function") jQuery.fn[Symbol.iterator] = arr1[Symbol.iterator];
    // Populate the class2type map
    jQuery.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(_i, name) {
        class2type["[object " + name + "]"] = name.toLowerCase();
    });
    function isArrayLike(obj) {
        // Support: real iOS 8.2 only (not reproducible in simulator)
        // `in` check used to prevent JIT error (gh-2145)
        // hasOwn isn't used here due to false negatives
        // regarding Nodelist length in IE
        var length = !!obj && "length" in obj && obj.length, type = toType(obj);
        if (isFunction(obj) || isWindow(obj)) return false;
        return type === "array" || length === 0 || typeof length === "number" && length > 0 && length - 1 in obj;
    }
    var Sizzle1 = /*!
 * Sizzle CSS Selector Engine v2.3.6
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://js.foundation/
 *
 * Date: 2021-02-16
 */ function(window) {
        var i1, support, Expr, getText, isXML1, tokenize, compile, select, outermostContext, sortInput, hasDuplicate, // Local document vars
        setDocument, document, docElem1, documentIsHTML, rbuggyQSA, rbuggyMatches, matches1, contains, // Instance-specific data
        expando = "sizzle" + 1 * new Date(), preferredDoc = window.document, dirruns = 0, done = 0, classCache = createCache(), tokenCache = createCache(), compilerCache = createCache(), nonnativeSelectorCache = createCache(), sortOrder = function(a, b) {
            if (a === b) hasDuplicate = true;
            return 0;
        }, // Instance methods
        hasOwn = {
        }.hasOwnProperty, arr2 = [], pop = arr2.pop, pushNative = arr2.push, push = arr2.push, slice = arr2.slice, // Use a stripped-down indexOf as it's faster than native
        // https://jsperf.com/thor-indexof-vs-for/5
        indexOf = function(list, elem) {
            var i = 0, len = list.length;
            for(; i < len; i++){
                if (list[i] === elem) return i;
            }
            return -1;
        }, booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", // Regular expressions
        // http://www.w3.org/TR/css3-selectors/#whitespace
        whitespace = "[\\x20\\t\\r\\n\\f]", // https://www.w3.org/TR/css-syntax-3/#ident-token-diagram
        identifier = "(?:\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+", // Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
        attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace + // Operator (capture 2)
        "*([*^$|!~]?=)" + whitespace + // "Attribute values must be CSS identifiers [capture 5]
        // or strings [capture 3 or capture 4]"
        "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace + "*\\]", pseudos = ":(" + identifier + ")(?:\\((" + // To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
        // 1. quoted (capture 3; capture 4 or capture 5)
        "('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" + // 2. simple (capture 6)
        "((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" + // 3. anything else (capture 2)
        ".*" + ")\\)|)", // Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
        rwhitespace = new RegExp(whitespace + "+", "g"), rtrim = new RegExp("^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g"), rcomma = new RegExp("^" + whitespace + "*," + whitespace + "*"), rcombinators = new RegExp("^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*"), rdescend = new RegExp(whitespace + "|>"), rpseudo = new RegExp(pseudos), ridentifier = new RegExp("^" + identifier + "$"), matchExpr = {
            "ID": new RegExp("^#(" + identifier + ")"),
            "CLASS": new RegExp("^\\.(" + identifier + ")"),
            "TAG": new RegExp("^(" + identifier + "|[*])"),
            "ATTR": new RegExp("^" + attributes),
            "PSEUDO": new RegExp("^" + pseudos),
            "CHILD": new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i"),
            "bool": new RegExp("^(?:" + booleans + ")$", "i"),
            // For use in libraries implementing .is()
            // We use this for POS matching in `select`
            "needsContext": new RegExp("^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i")
        }, rhtml = /HTML$/i, rinputs = /^(?:input|select|textarea|button)$/i, rheader = /^h\d$/i, rnative = /^[^{]+\{\s*\[native \w/, // Easily-parseable/retrievable ID or TAG or CLASS selectors
        rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, rsibling = /[+~]/, // CSS escapes
        // http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
        runescape = new RegExp("\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\([^\\r\\n\\f])", "g"), funescape = function(escape, nonHex) {
            var high = "0x" + escape.slice(1) - 65536;
            return nonHex ? // Strip the backslash prefix from a non-hex escape sequence
            nonHex : // Replace a hexadecimal escape sequence with the encoded Unicode code point
            // Support: IE <=11+
            // For values outside the Basic Multilingual Plane (BMP), manually construct a
            // surrogate pair
            high < 0 ? String.fromCharCode(high + 65536) : String.fromCharCode(high >> 10 | 55296, high & 1023 | 56320);
        }, // CSS string/identifier serialization
        // https://drafts.csswg.org/cssom/#common-serializing-idioms
        rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, fcssescape = function(ch, asCodePoint) {
            if (asCodePoint) {
                // U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
                if (ch === "\0") return "\uFFFD";
                // Control characters and (dependent upon position) numbers get escaped as code points
                return ch.slice(0, -1) + "\\" + ch.charCodeAt(ch.length - 1).toString(16) + " ";
            }
            // Other potentially-special ASCII characters get backslash-escaped
            return "\\" + ch;
        }, // Used for iframes
        // See setDocument()
        // Removing the function wrapper causes a "Permission Denied"
        // error in IE
        unloadHandler = function() {
            setDocument();
        }, inDisabledFieldset = addCombinator(function(elem) {
            return elem.disabled === true && elem.nodeName.toLowerCase() === "fieldset";
        }, {
            dir: "parentNode",
            next: "legend"
        });
        // Optimize for push.apply( _, NodeList )
        try {
            push.apply(arr2 = slice.call(preferredDoc.childNodes), preferredDoc.childNodes);
            // Support: Android<4.0
            // Detect silently failing push.apply
            // eslint-disable-next-line no-unused-expressions
            arr2[preferredDoc.childNodes.length].nodeType;
        } catch (e) {
            push = {
                apply: arr2.length ? // Leverage slice if possible
                function(target, els) {
                    pushNative.apply(target, slice.call(els));
                } : // Support: IE<9
                // Otherwise append directly
                function(target, els) {
                    var j = target.length, i = 0;
                    // Can't trust NodeList.length
                    while(target[j++] = els[i++]);
                    target.length = j - 1;
                }
            };
        }
        function Sizzle(selector, context, results, seed) {
            var m, i, elem, nid, match, groups, newSelector, newContext = context && context.ownerDocument, // nodeType defaults to 9, since context defaults to document
            nodeType = context ? context.nodeType : 9;
            results = results || [];
            // Return early from calls with invalid selector or context
            if (typeof selector !== "string" || !selector || nodeType !== 1 && nodeType !== 9 && nodeType !== 11) return results;
            // Try to shortcut find operations (as opposed to filters) in HTML documents
            if (!seed) {
                setDocument(context);
                context = context || document;
                if (documentIsHTML) {
                    // If the selector is sufficiently simple, try using a "get*By*" DOM method
                    // (excepting DocumentFragment context, where the methods don't exist)
                    if (nodeType !== 11 && (match = rquickExpr.exec(selector))) {
                        // ID selector
                        if (m = match[1]) {
                            // Document context
                            if (nodeType === 9) {
                                if (elem = context.getElementById(m)) // Support: IE, Opera, Webkit
                                // TODO: identify versions
                                // getElementById can match elements by name instead of ID
                                {
                                    if (elem.id === m) {
                                        results.push(elem);
                                        return results;
                                    }
                                } else return results;
                            // Element context
                            } else // Support: IE, Opera, Webkit
                            // TODO: identify versions
                            // getElementById can match elements by name instead of ID
                            if (newContext && (elem = newContext.getElementById(m)) && contains(context, elem) && elem.id === m) {
                                results.push(elem);
                                return results;
                            }
                        // Type selector
                        } else if (match[2]) {
                            push.apply(results, context.getElementsByTagName(selector));
                            return results;
                        // Class selector
                        } else if ((m = match[3]) && support.getElementsByClassName && context.getElementsByClassName) {
                            push.apply(results, context.getElementsByClassName(m));
                            return results;
                        }
                    }
                    // Take advantage of querySelectorAll
                    if (support.qsa && !nonnativeSelectorCache[selector + " "] && (!rbuggyQSA || !rbuggyQSA.test(selector)) && (nodeType !== 1 || context.nodeName.toLowerCase() !== "object")) {
                        newSelector = selector;
                        newContext = context;
                        // qSA considers elements outside a scoping root when evaluating child or
                        // descendant combinators, which is not what we want.
                        // In such cases, we work around the behavior by prefixing every selector in the
                        // list with an ID selector referencing the scope context.
                        // The technique has to be used as well when a leading combinator is used
                        // as such selectors are not recognized by querySelectorAll.
                        // Thanks to Andrew Dupont for this technique.
                        if (nodeType === 1 && (rdescend.test(selector) || rcombinators.test(selector))) {
                            // Expand context for sibling selectors
                            newContext = rsibling.test(selector) && testContext(context.parentNode) || context;
                            // We can use :scope instead of the ID hack if the browser
                            // supports it & if we're not changing the context.
                            if (newContext !== context || !support.scope) {
                                // Capture the context ID, setting it first if necessary
                                if (nid = context.getAttribute("id")) nid = nid.replace(rcssescape, fcssescape);
                                else context.setAttribute("id", nid = expando);
                            }
                            // Prefix every selector in the list
                            groups = tokenize(selector);
                            i = groups.length;
                            while(i--)groups[i] = (nid ? "#" + nid : ":scope") + " " + toSelector(groups[i]);
                            newSelector = groups.join(",");
                        }
                        try {
                            push.apply(results, newContext.querySelectorAll(newSelector));
                            return results;
                        } catch (qsaError) {
                            nonnativeSelectorCache(selector, true);
                        } finally{
                            if (nid === expando) context.removeAttribute("id");
                        }
                    }
                }
            }
            // All others
            return select(selector.replace(rtrim, "$1"), context, results, seed);
        }
        /**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */ function createCache() {
            var keys = [];
            function cache(key, value) {
                // Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
                if (keys.push(key + " ") > Expr.cacheLength) // Only keep the most recent entries
                delete cache[keys.shift()];
                return cache[key + " "] = value;
            }
            return cache;
        }
        /**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */ function markFunction(fn) {
            fn[expando] = true;
            return fn;
        }
        /**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */ function assert(fn) {
            var el = document.createElement("fieldset");
            try {
                return !!fn(el);
            } catch (e) {
                return false;
            } finally{
                // Remove from its parent by default
                if (el.parentNode) el.parentNode.removeChild(el);
                // release memory in IE
                el = null;
            }
        }
        /**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */ function addHandle(attrs, handler) {
            var arr = attrs.split("|"), i = arr.length;
            while(i--)Expr.attrHandle[arr[i]] = handler;
        }
        /**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */ function siblingCheck(a, b) {
            var cur = b && a, diff = cur && a.nodeType === 1 && b.nodeType === 1 && a.sourceIndex - b.sourceIndex;
            // Use IE sourceIndex if available on both nodes
            if (diff) return diff;
            // Check if b follows a
            if (cur) while(cur = cur.nextSibling){
                if (cur === b) return -1;
            }
            return a ? 1 : -1;
        }
        /**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */ function createInputPseudo(type) {
            return function(elem) {
                var name = elem.nodeName.toLowerCase();
                return name === "input" && elem.type === type;
            };
        }
        /**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */ function createButtonPseudo(type) {
            return function(elem) {
                var name = elem.nodeName.toLowerCase();
                return (name === "input" || name === "button") && elem.type === type;
            };
        }
        /**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */ function createDisabledPseudo(disabled) {
            // Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
            return function(elem) {
                // Only certain elements can match :enabled or :disabled
                // https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
                // https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
                if ("form" in elem) {
                    // Check for inherited disabledness on relevant non-disabled elements:
                    // * listed form-associated elements in a disabled fieldset
                    //   https://html.spec.whatwg.org/multipage/forms.html#category-listed
                    //   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
                    // * option elements in a disabled optgroup
                    //   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
                    // All such elements have a "form" property.
                    if (elem.parentNode && elem.disabled === false) {
                        // Option elements defer to a parent optgroup if present
                        if ("label" in elem) {
                            if ("label" in elem.parentNode) return elem.parentNode.disabled === disabled;
                            else return elem.disabled === disabled;
                        }
                        // Support: IE 6 - 11
                        // Use the isDisabled shortcut property to check for disabled fieldset ancestors
                        return elem.isDisabled === disabled || // Where there is no isDisabled, check manually
                        /* jshint -W018 */ elem.isDisabled !== !disabled && inDisabledFieldset(elem) === disabled;
                    }
                    return elem.disabled === disabled;
                // Try to winnow out elements that can't be disabled before trusting the disabled property.
                // Some victims get caught in our net (label, legend, menu, track), but it shouldn't
                // even exist on them, let alone have a boolean value.
                } else if ("label" in elem) return elem.disabled === disabled;
                // Remaining elements are neither :enabled nor :disabled
                return false;
            };
        }
        /**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */ function createPositionalPseudo(fn) {
            return markFunction(function(argument) {
                argument = +argument;
                return markFunction(function(seed, matches) {
                    var j, matchIndexes = fn([], seed.length, argument), i = matchIndexes.length;
                    // Match elements found at the specified indexes
                    while(i--)if (seed[j = matchIndexes[i]]) seed[j] = !(matches[j] = seed[j]);
                });
            });
        }
        /**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */ function testContext(context) {
            return context && typeof context.getElementsByTagName !== "undefined" && context;
        }
        // Expose support vars for convenience
        support = Sizzle.support = {
        };
        /**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */ isXML1 = Sizzle.isXML = function(elem) {
            var namespace = elem && elem.namespaceURI, docElem = elem && (elem.ownerDocument || elem).documentElement;
            // Support: IE <=8
            // Assume HTML when documentElement doesn't yet exist, such as inside loading iframes
            // https://bugs.jquery.com/ticket/4833
            return !rhtml.test(namespace || docElem && docElem.nodeName || "HTML");
        };
        /**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */ setDocument = Sizzle.setDocument = function(node1) {
            var hasCompare, subWindow, doc = node1 ? node1.ownerDocument || node1 : preferredDoc;
            // Return early if doc is invalid or already selected
            // Support: IE 11+, Edge 17 - 18+
            // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
            // two documents; shallow comparisons work.
            // eslint-disable-next-line eqeqeq
            if (doc == document || doc.nodeType !== 9 || !doc.documentElement) return document;
            // Update global variables
            document = doc;
            docElem1 = document.documentElement;
            documentIsHTML = !isXML1(document);
            // Support: IE 9 - 11+, Edge 12 - 18+
            // Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
            // Support: IE 11+, Edge 17 - 18+
            // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
            // two documents; shallow comparisons work.
            // eslint-disable-next-line eqeqeq
            if (preferredDoc != document && (subWindow = document.defaultView) && subWindow.top !== subWindow) {
                // Support: IE 11, Edge
                if (subWindow.addEventListener) subWindow.addEventListener("unload", unloadHandler, false);
                else if (subWindow.attachEvent) subWindow.attachEvent("onunload", unloadHandler);
            }
            // Support: IE 8 - 11+, Edge 12 - 18+, Chrome <=16 - 25 only, Firefox <=3.6 - 31 only,
            // Safari 4 - 5 only, Opera <=11.6 - 12.x only
            // IE/Edge & older browsers don't support the :scope pseudo-class.
            // Support: Safari 6.0 only
            // Safari 6.0 supports :scope but it's an alias of :root there.
            support.scope = assert(function(el) {
                docElem1.appendChild(el).appendChild(document.createElement("div"));
                return typeof el.querySelectorAll !== "undefined" && !el.querySelectorAll(":scope fieldset div").length;
            });
            /* Attributes
	---------------------------------------------------------------------- */ // Support: IE<8
            // Verify that getAttribute really returns attributes and not properties
            // (excepting IE8 booleans)
            support.attributes = assert(function(el) {
                el.className = "i";
                return !el.getAttribute("className");
            });
            /* getElement(s)By*
	---------------------------------------------------------------------- */ // Check if getElementsByTagName("*") returns only elements
            support.getElementsByTagName = assert(function(el) {
                el.appendChild(document.createComment(""));
                return !el.getElementsByTagName("*").length;
            });
            // Support: IE<9
            support.getElementsByClassName = rnative.test(document.getElementsByClassName);
            // Support: IE<10
            // Check if getElementById returns elements by name
            // The broken getElementById methods don't pick up programmatically-set names,
            // so use a roundabout getElementsByName test
            support.getById = assert(function(el) {
                docElem1.appendChild(el).id = expando;
                return !document.getElementsByName || !document.getElementsByName(expando).length;
            });
            // ID filter and find
            if (support.getById) {
                Expr.filter["ID"] = function(id) {
                    var attrId = id.replace(runescape, funescape);
                    return function(elem) {
                        return elem.getAttribute("id") === attrId;
                    };
                };
                Expr.find["ID"] = function(id, context) {
                    if (typeof context.getElementById !== "undefined" && documentIsHTML) {
                        var elem = context.getElementById(id);
                        return elem ? [
                            elem
                        ] : [];
                    }
                };
            } else {
                Expr.filter["ID"] = function(id) {
                    var attrId = id.replace(runescape, funescape);
                    return function(elem) {
                        var node = typeof elem.getAttributeNode !== "undefined" && elem.getAttributeNode("id");
                        return node && node.value === attrId;
                    };
                };
                // Support: IE 6 - 7 only
                // getElementById is not reliable as a find shortcut
                Expr.find["ID"] = function(id, context) {
                    if (typeof context.getElementById !== "undefined" && documentIsHTML) {
                        var node, i, elems, elem = context.getElementById(id);
                        if (elem) {
                            // Verify the id attribute
                            node = elem.getAttributeNode("id");
                            if (node && node.value === id) return [
                                elem
                            ];
                            // Fall back on getElementsByName
                            elems = context.getElementsByName(id);
                            i = 0;
                            while(elem = elems[i++]){
                                node = elem.getAttributeNode("id");
                                if (node && node.value === id) return [
                                    elem
                                ];
                            }
                        }
                        return [];
                    }
                };
            }
            // Tag
            Expr.find["TAG"] = support.getElementsByTagName ? function(tag, context) {
                if (typeof context.getElementsByTagName !== "undefined") return context.getElementsByTagName(tag);
                else if (support.qsa) return context.querySelectorAll(tag);
            } : function(tag, context) {
                var elem, tmp = [], i = 0, // By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
                results = context.getElementsByTagName(tag);
                // Filter out possible comments
                if (tag === "*") {
                    while(elem = results[i++])if (elem.nodeType === 1) tmp.push(elem);
                    return tmp;
                }
                return results;
            };
            // Class
            Expr.find["CLASS"] = support.getElementsByClassName && function(className, context) {
                if (typeof context.getElementsByClassName !== "undefined" && documentIsHTML) return context.getElementsByClassName(className);
            };
            /* QSA/matchesSelector
	---------------------------------------------------------------------- */ // QSA and matchesSelector support
            // matchesSelector(:active) reports false when true (IE9/Opera 11.5)
            rbuggyMatches = [];
            // qSa(:focus) reports false when true (Chrome 21)
            // We allow this because of a bug in IE8/9 that throws an error
            // whenever `document.activeElement` is accessed on an iframe
            // So, we allow :focus to pass through QSA all the time to avoid the IE error
            // See https://bugs.jquery.com/ticket/13378
            rbuggyQSA = [];
            if (support.qsa = rnative.test(document.querySelectorAll)) {
                // Build QSA regex
                // Regex strategy adopted from Diego Perini
                assert(function(el) {
                    var input;
                    // Select is set to empty string on purpose
                    // This is to test IE's treatment of not explicitly
                    // setting a boolean content attribute,
                    // since its presence should be enough
                    // https://bugs.jquery.com/ticket/12359
                    docElem1.appendChild(el).innerHTML = "<a id='" + expando + "'></a>" + "<select id='" + expando + "-\r\\' msallowcapture=''>" + "<option selected=''></option></select>";
                    // Support: IE8, Opera 11-12.16
                    // Nothing should be selected when empty strings follow ^= or $= or *=
                    // The test attribute must be unknown in Opera but "safe" for WinRT
                    // https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
                    if (el.querySelectorAll("[msallowcapture^='']").length) rbuggyQSA.push("[*^$]=" + whitespace + "*(?:''|\"\")");
                    // Support: IE8
                    // Boolean attributes and "value" are not treated correctly
                    if (!el.querySelectorAll("[selected]").length) rbuggyQSA.push("\\[" + whitespace + "*(?:value|" + booleans + ")");
                    // Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
                    if (!el.querySelectorAll("[id~=" + expando + "-]").length) rbuggyQSA.push("~=");
                    // Support: IE 11+, Edge 15 - 18+
                    // IE 11/Edge don't find elements on a `[name='']` query in some cases.
                    // Adding a temporary attribute to the document before the selection works
                    // around the issue.
                    // Interestingly, IE 10 & older don't seem to have the issue.
                    input = document.createElement("input");
                    input.setAttribute("name", "");
                    el.appendChild(input);
                    if (!el.querySelectorAll("[name='']").length) rbuggyQSA.push("\\[" + whitespace + "*name" + whitespace + "*=" + whitespace + "*(?:''|\"\")");
                    // Webkit/Opera - :checked should return selected option elements
                    // http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
                    // IE8 throws error here and will not see later tests
                    if (!el.querySelectorAll(":checked").length) rbuggyQSA.push(":checked");
                    // Support: Safari 8+, iOS 8+
                    // https://bugs.webkit.org/show_bug.cgi?id=136851
                    // In-page `selector#id sibling-combinator selector` fails
                    if (!el.querySelectorAll("a#" + expando + "+*").length) rbuggyQSA.push(".#.+[+~]");
                    // Support: Firefox <=3.6 - 5 only
                    // Old Firefox doesn't throw on a badly-escaped identifier.
                    el.querySelectorAll("\\\f");
                    rbuggyQSA.push("[\\r\\n\\f]");
                });
                assert(function(el) {
                    el.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    // Support: Windows 8 Native Apps
                    // The type and name attributes are restricted during .innerHTML assignment
                    var input = document.createElement("input");
                    input.setAttribute("type", "hidden");
                    el.appendChild(input).setAttribute("name", "D");
                    // Support: IE8
                    // Enforce case-sensitivity of name attribute
                    if (el.querySelectorAll("[name=d]").length) rbuggyQSA.push("name" + whitespace + "*[*^$|!~]?=");
                    // FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
                    // IE8 throws error here and will not see later tests
                    if (el.querySelectorAll(":enabled").length !== 2) rbuggyQSA.push(":enabled", ":disabled");
                    // Support: IE9-11+
                    // IE's :disabled selector does not pick up the children of disabled fieldsets
                    docElem1.appendChild(el).disabled = true;
                    if (el.querySelectorAll(":disabled").length !== 2) rbuggyQSA.push(":enabled", ":disabled");
                    // Support: Opera 10 - 11 only
                    // Opera 10-11 does not throw on post-comma invalid pseudos
                    el.querySelectorAll("*,:x");
                    rbuggyQSA.push(",.*:");
                });
            }
            if (support.matchesSelector = rnative.test(matches1 = docElem1.matches || docElem1.webkitMatchesSelector || docElem1.mozMatchesSelector || docElem1.oMatchesSelector || docElem1.msMatchesSelector)) assert(function(el) {
                // Check to see if it's possible to do matchesSelector
                // on a disconnected node (IE 9)
                support.disconnectedMatch = matches1.call(el, "*");
                // This should fail with an exception
                // Gecko does not error, returns false instead
                matches1.call(el, "[s!='']:x");
                rbuggyMatches.push("!=", pseudos);
            });
            rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join("|"));
            rbuggyMatches = rbuggyMatches.length && new RegExp(rbuggyMatches.join("|"));
            /* Contains
	---------------------------------------------------------------------- */ hasCompare = rnative.test(docElem1.compareDocumentPosition);
            // Element contains another
            // Purposefully self-exclusive
            // As in, an element does not contain itself
            contains = hasCompare || rnative.test(docElem1.contains) ? function(a, b) {
                var adown = a.nodeType === 9 ? a.documentElement : a, bup = b && b.parentNode;
                return a === bup || !!(bup && bup.nodeType === 1 && (adown.contains ? adown.contains(bup) : a.compareDocumentPosition && a.compareDocumentPosition(bup) & 16));
            } : function(a, b) {
                if (b) while(b = b.parentNode){
                    if (b === a) return true;
                }
                return false;
            };
            /* Sorting
	---------------------------------------------------------------------- */ // Document order sorting
            sortOrder = hasCompare ? function(a, b) {
                // Flag for duplicate removal
                if (a === b) {
                    hasDuplicate = true;
                    return 0;
                }
                // Sort on method existence if only one input has compareDocumentPosition
                var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
                if (compare) return compare;
                // Calculate position if both inputs belong to the same document
                // Support: IE 11+, Edge 17 - 18+
                // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
                // two documents; shallow comparisons work.
                // eslint-disable-next-line eqeqeq
                compare = (a.ownerDocument || a) == (b.ownerDocument || b) ? a.compareDocumentPosition(b) : // Otherwise we know they are disconnected
                1;
                // Disconnected nodes
                if (compare & 1 || !support.sortDetached && b.compareDocumentPosition(a) === compare) {
                    // Choose the first element that is related to our preferred document
                    // Support: IE 11+, Edge 17 - 18+
                    // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
                    // two documents; shallow comparisons work.
                    // eslint-disable-next-line eqeqeq
                    if (a == document || a.ownerDocument == preferredDoc && contains(preferredDoc, a)) return -1;
                    // Support: IE 11+, Edge 17 - 18+
                    // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
                    // two documents; shallow comparisons work.
                    // eslint-disable-next-line eqeqeq
                    if (b == document || b.ownerDocument == preferredDoc && contains(preferredDoc, b)) return 1;
                    // Maintain original order
                    return sortInput ? indexOf(sortInput, a) - indexOf(sortInput, b) : 0;
                }
                return compare & 4 ? -1 : 1;
            } : function(a, b) {
                // Exit early if the nodes are identical
                if (a === b) {
                    hasDuplicate = true;
                    return 0;
                }
                var cur, i = 0, aup = a.parentNode, bup = b.parentNode, ap = [
                    a
                ], bp = [
                    b
                ];
                // Parentless nodes are either documents or disconnected
                if (!aup || !bup) // Support: IE 11+, Edge 17 - 18+
                // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
                // two documents; shallow comparisons work.
                /* eslint-disable eqeqeq */ return a == document ? -1 : b == document ? 1 : /* eslint-enable eqeqeq */ aup ? -1 : bup ? 1 : sortInput ? indexOf(sortInput, a) - indexOf(sortInput, b) : 0;
                else if (aup === bup) return siblingCheck(a, b);
                // Otherwise we need full lists of their ancestors for comparison
                cur = a;
                while(cur = cur.parentNode)ap.unshift(cur);
                cur = b;
                while(cur = cur.parentNode)bp.unshift(cur);
                // Walk down the tree looking for a discrepancy
                while(ap[i] === bp[i])i++;
                return i ? // Do a sibling check if the nodes have a common ancestor
                siblingCheck(ap[i], bp[i]) : // Otherwise nodes in our document sort first
                // Support: IE 11+, Edge 17 - 18+
                // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
                // two documents; shallow comparisons work.
                /* eslint-disable eqeqeq */ ap[i] == preferredDoc ? -1 : bp[i] == preferredDoc ? 1 : /* eslint-enable eqeqeq */ 0;
            };
            return document;
        };
        Sizzle.matches = function(expr, elements) {
            return Sizzle(expr, null, null, elements);
        };
        Sizzle.matchesSelector = function(elem, expr) {
            setDocument(elem);
            if (support.matchesSelector && documentIsHTML && !nonnativeSelectorCache[expr + " "] && (!rbuggyMatches || !rbuggyMatches.test(expr)) && (!rbuggyQSA || !rbuggyQSA.test(expr))) try {
                var ret = matches1.call(elem, expr);
                // IE 9's matchesSelector returns false on disconnected nodes
                if (ret || support.disconnectedMatch || // As well, disconnected nodes are said to be in a document
                // fragment in IE 9
                elem.document && elem.document.nodeType !== 11) return ret;
            } catch (e) {
                nonnativeSelectorCache(expr, true);
            }
            return Sizzle(expr, document, null, [
                elem
            ]).length > 0;
        };
        Sizzle.contains = function(context, elem) {
            // Set document vars if needed
            // Support: IE 11+, Edge 17 - 18+
            // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
            // two documents; shallow comparisons work.
            // eslint-disable-next-line eqeqeq
            if ((context.ownerDocument || context) != document) setDocument(context);
            return contains(context, elem);
        };
        Sizzle.attr = function(elem, name) {
            // Set document vars if needed
            // Support: IE 11+, Edge 17 - 18+
            // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
            // two documents; shallow comparisons work.
            // eslint-disable-next-line eqeqeq
            if ((elem.ownerDocument || elem) != document) setDocument(elem);
            var fn = Expr.attrHandle[name.toLowerCase()], // Don't get fooled by Object.prototype properties (jQuery #13807)
            val = fn && hasOwn.call(Expr.attrHandle, name.toLowerCase()) ? fn(elem, name, !documentIsHTML) : undefined;
            return val !== undefined ? val : support.attributes || !documentIsHTML ? elem.getAttribute(name) : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
        };
        Sizzle.escape = function(sel) {
            return (sel + "").replace(rcssescape, fcssescape);
        };
        Sizzle.error = function(msg) {
            throw new Error("Syntax error, unrecognized expression: " + msg);
        };
        /**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */ Sizzle.uniqueSort = function(results) {
            var elem, duplicates = [], j = 0, i = 0;
            // Unless we *know* we can detect duplicates, assume their presence
            hasDuplicate = !support.detectDuplicates;
            sortInput = !support.sortStable && results.slice(0);
            results.sort(sortOrder);
            if (hasDuplicate) {
                while(elem = results[i++])if (elem === results[i]) j = duplicates.push(i);
                while(j--)results.splice(duplicates[j], 1);
            }
            // Clear input after sorting to release objects
            // See https://github.com/jquery/sizzle/pull/225
            sortInput = null;
            return results;
        };
        /**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */ getText = Sizzle.getText = function(elem) {
            var node, ret = "", i = 0, nodeType = elem.nodeType;
            if (!nodeType) // If no nodeType, this is expected to be an array
            while(node = elem[i++])// Do not traverse comment nodes
            ret += getText(node);
            else if (nodeType === 1 || nodeType === 9 || nodeType === 11) {
                // Use textContent for elements
                // innerText usage removed for consistency of new lines (jQuery #11153)
                if (typeof elem.textContent === "string") return elem.textContent;
                else // Traverse its children
                for(elem = elem.firstChild; elem; elem = elem.nextSibling)ret += getText(elem);
            } else if (nodeType === 3 || nodeType === 4) return elem.nodeValue;
            // Do not include comment or processing instruction nodes
            return ret;
        };
        Expr = Sizzle.selectors = {
            // Can be adjusted by the user
            cacheLength: 50,
            createPseudo: markFunction,
            match: matchExpr,
            attrHandle: {
            },
            find: {
            },
            relative: {
                ">": {
                    dir: "parentNode",
                    first: true
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: true
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                "ATTR": function(match) {
                    match[1] = match[1].replace(runescape, funescape);
                    // Move the given value to match[3] whether quoted or unquoted
                    match[3] = (match[3] || match[4] || match[5] || "").replace(runescape, funescape);
                    if (match[2] === "~=") match[3] = " " + match[3] + " ";
                    return match.slice(0, 4);
                },
                "CHILD": function(match) {
                    /* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/ match[1] = match[1].toLowerCase();
                    if (match[1].slice(0, 3) === "nth") {
                        // nth-* requires argument
                        if (!match[3]) Sizzle.error(match[0]);
                        // numeric x and y parameters for Expr.filter.CHILD
                        // remember that false/true cast respectively to 0/1
                        match[4] = +(match[4] ? match[5] + (match[6] || 1) : 2 * (match[3] === "even" || match[3] === "odd"));
                        match[5] = +(match[7] + match[8] || match[3] === "odd");
                    // other types prohibit arguments
                    } else if (match[3]) Sizzle.error(match[0]);
                    return match;
                },
                "PSEUDO": function(match) {
                    var excess, unquoted = !match[6] && match[2];
                    if (matchExpr["CHILD"].test(match[0])) return null;
                    // Accept quoted arguments as-is
                    if (match[3]) match[2] = match[4] || match[5] || "";
                    else if (unquoted && rpseudo.test(unquoted) && (excess = tokenize(unquoted, true)) && (excess = unquoted.indexOf(")", unquoted.length - excess) - unquoted.length)) {
                        // excess is a negative index
                        match[0] = match[0].slice(0, excess);
                        match[2] = unquoted.slice(0, excess);
                    }
                    // Return only captures needed by the pseudo filter method (type and argument)
                    return match.slice(0, 3);
                }
            },
            filter: {
                "TAG": function(nodeNameSelector) {
                    var nodeName = nodeNameSelector.replace(runescape, funescape).toLowerCase();
                    return nodeNameSelector === "*" ? function() {
                        return true;
                    } : function(elem) {
                        return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
                    };
                },
                "CLASS": function(className) {
                    var pattern = classCache[className + " "];
                    return pattern || (pattern = new RegExp("(^|" + whitespace + ")" + className + "(" + whitespace + "|$)"), classCache(className, function(elem) {
                        return pattern.test(typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "");
                    }));
                },
                "ATTR": function(name, operator, check) {
                    return function(elem) {
                        var result = Sizzle.attr(elem, name);
                        if (result == null) return operator === "!=";
                        if (!operator) return true;
                        result += "";
                        /* eslint-disable max-len */ return operator === "=" ? result === check : operator === "!=" ? result !== check : operator === "^=" ? check && result.indexOf(check) === 0 : operator === "*=" ? check && result.indexOf(check) > -1 : operator === "$=" ? check && result.slice(-check.length) === check : operator === "~=" ? (" " + result.replace(rwhitespace, " ") + " ").indexOf(check) > -1 : operator === "|=" ? result === check || result.slice(0, check.length + 1) === check + "-" : false;
                    /* eslint-enable max-len */ };
                },
                "CHILD": function(type, what, _argument, first, last) {
                    var simple = type.slice(0, 3) !== "nth", forward = type.slice(-4) !== "last", ofType = what === "of-type";
                    return first === 1 && last === 0 ? // Shortcut for :nth-*(n)
                    function(elem) {
                        return !!elem.parentNode;
                    } : function(elem, _context, xml) {
                        var cache, uniqueCache, outerCache, node, nodeIndex, start, dir = simple !== forward ? "nextSibling" : "previousSibling", parent = elem.parentNode, name = ofType && elem.nodeName.toLowerCase(), useCache = !xml && !ofType, diff = false;
                        if (parent) {
                            // :(first|last|only)-(child|of-type)
                            if (simple) {
                                while(dir){
                                    node = elem;
                                    while(node = node[dir]){
                                        if (ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) return false;
                                    }
                                    // Reverse direction for :only-* (if we haven't yet done so)
                                    start = dir = type === "only" && !start && "nextSibling";
                                }
                                return true;
                            }
                            start = [
                                forward ? parent.firstChild : parent.lastChild
                            ];
                            // non-xml :nth-child(...) stores cache data on `parent`
                            if (forward && useCache) {
                                // Seek `elem` from a previously-cached index
                                // ...in a gzip-friendly way
                                node = parent;
                                outerCache = node[expando] || (node[expando] = {
                                });
                                // Support: IE <9 only
                                // Defend against cloned attroperties (jQuery gh-1709)
                                uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {
                                });
                                cache = uniqueCache[type] || [];
                                nodeIndex = cache[0] === dirruns && cache[1];
                                diff = nodeIndex && cache[2];
                                node = nodeIndex && parent.childNodes[nodeIndex];
                                while(node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop())// When found, cache indexes on `parent` and break
                                if (node.nodeType === 1 && ++diff && node === elem) {
                                    uniqueCache[type] = [
                                        dirruns,
                                        nodeIndex,
                                        diff
                                    ];
                                    break;
                                }
                            } else {
                                // Use previously-cached element index if available
                                if (useCache) {
                                    // ...in a gzip-friendly way
                                    node = elem;
                                    outerCache = node[expando] || (node[expando] = {
                                    });
                                    // Support: IE <9 only
                                    // Defend against cloned attroperties (jQuery gh-1709)
                                    uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {
                                    });
                                    cache = uniqueCache[type] || [];
                                    nodeIndex = cache[0] === dirruns && cache[1];
                                    diff = nodeIndex;
                                }
                                // xml :nth-child(...)
                                // or :nth-last-child(...) or :nth(-last)?-of-type(...)
                                if (diff === false) {
                                    // Use the same loop as above to seek `elem` from the start
                                    while(node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop())if ((ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) && ++diff) {
                                        // Cache the index of each encountered element
                                        if (useCache) {
                                            outerCache = node[expando] || (node[expando] = {
                                            });
                                            // Support: IE <9 only
                                            // Defend against cloned attroperties (jQuery gh-1709)
                                            uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {
                                            });
                                            uniqueCache[type] = [
                                                dirruns,
                                                diff
                                            ];
                                        }
                                        if (node === elem) break;
                                    }
                                }
                            }
                            // Incorporate the offset, then check against cycle size
                            diff -= last;
                            return diff === first || diff % first === 0 && diff / first >= 0;
                        }
                    };
                },
                "PSEUDO": function(pseudo, argument) {
                    // pseudo-class names are case-insensitive
                    // http://www.w3.org/TR/selectors/#pseudo-classes
                    // Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
                    // Remember that setFilters inherits from pseudos
                    var args, fn = Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase()] || Sizzle.error("unsupported pseudo: " + pseudo);
                    // The user may use createPseudo to indicate that
                    // arguments are needed to create the filter function
                    // just as Sizzle does
                    if (fn[expando]) return fn(argument);
                    // But maintain support for old signatures
                    if (fn.length > 1) {
                        args = [
                            pseudo,
                            pseudo,
                            "",
                            argument
                        ];
                        return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase()) ? markFunction(function(seed, matches) {
                            var idx, matched = fn(seed, argument), i = matched.length;
                            while(i--){
                                idx = indexOf(seed, matched[i]);
                                seed[idx] = !(matches[idx] = matched[i]);
                            }
                        }) : function(elem) {
                            return fn(elem, 0, args);
                        };
                    }
                    return fn;
                }
            },
            pseudos: {
                // Potentially complex pseudos
                "not": markFunction(function(selector) {
                    // Trim the selector passed to compile
                    // to avoid treating leading and trailing
                    // spaces as combinators
                    var input = [], results = [], matcher = compile(selector.replace(rtrim, "$1"));
                    return matcher[expando] ? markFunction(function(seed, matches, _context, xml) {
                        var elem, unmatched = matcher(seed, null, xml, []), i = seed.length;
                        // Match elements unmatched by `matcher`
                        while(i--)if (elem = unmatched[i]) seed[i] = !(matches[i] = elem);
                    }) : function(elem, _context, xml) {
                        input[0] = elem;
                        matcher(input, null, xml, results);
                        // Don't keep the element (issue #299)
                        input[0] = null;
                        return !results.pop();
                    };
                }),
                "has": markFunction(function(selector) {
                    return function(elem) {
                        return Sizzle(selector, elem).length > 0;
                    };
                }),
                "contains": markFunction(function(text) {
                    text = text.replace(runescape, funescape);
                    return function(elem) {
                        return (elem.textContent || getText(elem)).indexOf(text) > -1;
                    };
                }),
                // "Whether an element is represented by a :lang() selector
                // is based solely on the element's language value
                // being equal to the identifier C,
                // or beginning with the identifier C immediately followed by "-".
                // The matching of C against the element's language value is performed case-insensitively.
                // The identifier C does not have to be a valid language name."
                // http://www.w3.org/TR/selectors/#lang-pseudo
                "lang": markFunction(function(lang) {
                    // lang value must be a valid identifier
                    if (!ridentifier.test(lang || "")) Sizzle.error("unsupported lang: " + lang);
                    lang = lang.replace(runescape, funescape).toLowerCase();
                    return function(elem) {
                        var elemLang;
                        do if (elemLang = documentIsHTML ? elem.lang : elem.getAttribute("xml:lang") || elem.getAttribute("lang")) {
                            elemLang = elemLang.toLowerCase();
                            return elemLang === lang || elemLang.indexOf(lang + "-") === 0;
                        }
                        while ((elem = elem.parentNode) && elem.nodeType === 1)
                        return false;
                    };
                }),
                // Miscellaneous
                "target": function(elem) {
                    var hash = window.location && window.location.hash;
                    return hash && hash.slice(1) === elem.id;
                },
                "root": function(elem) {
                    return elem === docElem1;
                },
                "focus": function(elem) {
                    return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
                },
                // Boolean properties
                "enabled": createDisabledPseudo(false),
                "disabled": createDisabledPseudo(true),
                "checked": function(elem) {
                    // In CSS3, :checked should return both checked and selected elements
                    // http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
                    var nodeName = elem.nodeName.toLowerCase();
                    return nodeName === "input" && !!elem.checked || nodeName === "option" && !!elem.selected;
                },
                "selected": function(elem) {
                    // Accessing this property makes selected-by-default
                    // options in Safari work properly
                    if (elem.parentNode) // eslint-disable-next-line no-unused-expressions
                    elem.parentNode.selectedIndex;
                    return elem.selected === true;
                },
                // Contents
                "empty": function(elem) {
                    // http://www.w3.org/TR/selectors/#empty-pseudo
                    // :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
                    //   but not by others (comment: 8; processing instruction: 7; etc.)
                    // nodeType < 6 works because attributes (2) do not appear as children
                    for(elem = elem.firstChild; elem; elem = elem.nextSibling){
                        if (elem.nodeType < 6) return false;
                    }
                    return true;
                },
                "parent": function(elem) {
                    return !Expr.pseudos["empty"](elem);
                },
                // Element/input types
                "header": function(elem) {
                    return rheader.test(elem.nodeName);
                },
                "input": function(elem) {
                    return rinputs.test(elem.nodeName);
                },
                "button": function(elem) {
                    var name = elem.nodeName.toLowerCase();
                    return name === "input" && elem.type === "button" || name === "button";
                },
                "text": function(elem) {
                    var attr;
                    return elem.nodeName.toLowerCase() === "input" && elem.type === "text" && ((attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text");
                },
                // Position-in-collection
                "first": createPositionalPseudo(function() {
                    return [
                        0
                    ];
                }),
                "last": createPositionalPseudo(function(_matchIndexes, length) {
                    return [
                        length - 1
                    ];
                }),
                "eq": createPositionalPseudo(function(_matchIndexes, length, argument) {
                    return [
                        argument < 0 ? argument + length : argument
                    ];
                }),
                "even": createPositionalPseudo(function(matchIndexes, length) {
                    var i = 0;
                    for(; i < length; i += 2)matchIndexes.push(i);
                    return matchIndexes;
                }),
                "odd": createPositionalPseudo(function(matchIndexes, length) {
                    var i = 1;
                    for(; i < length; i += 2)matchIndexes.push(i);
                    return matchIndexes;
                }),
                "lt": createPositionalPseudo(function(matchIndexes, length, argument) {
                    var i = argument < 0 ? argument + length : argument > length ? length : argument;
                    for(; --i >= 0;)matchIndexes.push(i);
                    return matchIndexes;
                }),
                "gt": createPositionalPseudo(function(matchIndexes, length, argument) {
                    var i = argument < 0 ? argument + length : argument;
                    for(; ++i < length;)matchIndexes.push(i);
                    return matchIndexes;
                })
            }
        };
        Expr.pseudos["nth"] = Expr.pseudos["eq"];
        // Add button/input type pseudos
        for(i1 in {
            radio: true,
            checkbox: true,
            file: true,
            password: true,
            image: true
        })Expr.pseudos[i1] = createInputPseudo(i1);
        for(i1 in {
            submit: true,
            reset: true
        })Expr.pseudos[i1] = createButtonPseudo(i1);
        // Easy API for creating new setFilters
        function setFilters() {
        }
        setFilters.prototype = Expr.filters = Expr.pseudos;
        Expr.setFilters = new setFilters();
        tokenize = Sizzle.tokenize = function(selector, parseOnly) {
            var matched, match, tokens, type, soFar, groups, preFilters, cached = tokenCache[selector + " "];
            if (cached) return parseOnly ? 0 : cached.slice(0);
            soFar = selector;
            groups = [];
            preFilters = Expr.preFilter;
            while(soFar){
                // Comma and first run
                if (!matched || (match = rcomma.exec(soFar))) {
                    if (match) // Don't consume trailing commas as valid
                    soFar = soFar.slice(match[0].length) || soFar;
                    groups.push(tokens = []);
                }
                matched = false;
                // Combinators
                if (match = rcombinators.exec(soFar)) {
                    matched = match.shift();
                    tokens.push({
                        value: matched,
                        // Cast descendant combinators to space
                        type: match[0].replace(rtrim, " ")
                    });
                    soFar = soFar.slice(matched.length);
                }
                // Filters
                for(type in Expr.filter)if ((match = matchExpr[type].exec(soFar)) && (!preFilters[type] || (match = preFilters[type](match)))) {
                    matched = match.shift();
                    tokens.push({
                        value: matched,
                        type: type,
                        matches: match
                    });
                    soFar = soFar.slice(matched.length);
                }
                if (!matched) break;
            }
            // Return the length of the invalid excess
            // if we're just parsing
            // Otherwise, throw an error or return tokens
            return parseOnly ? soFar.length : soFar ? Sizzle.error(selector) : // Cache the tokens
            tokenCache(selector, groups).slice(0);
        };
        function toSelector(tokens) {
            var i = 0, len = tokens.length, selector = "";
            for(; i < len; i++)selector += tokens[i].value;
            return selector;
        }
        function addCombinator(matcher, combinator, base) {
            var dir = combinator.dir, skip = combinator.next, key = skip || dir, checkNonElements = base && key === "parentNode", doneName = done++;
            return combinator.first ? // Check against closest ancestor/preceding element
            function(elem, context, xml) {
                while(elem = elem[dir]){
                    if (elem.nodeType === 1 || checkNonElements) return matcher(elem, context, xml);
                }
                return false;
            } : // Check against all ancestor/preceding elements
            function(elem, context, xml) {
                var oldCache, uniqueCache, outerCache, newCache = [
                    dirruns,
                    doneName
                ];
                // We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
                if (xml) {
                    while(elem = elem[dir])if (elem.nodeType === 1 || checkNonElements) {
                        if (matcher(elem, context, xml)) return true;
                    }
                } else {
                    while(elem = elem[dir])if (elem.nodeType === 1 || checkNonElements) {
                        outerCache = elem[expando] || (elem[expando] = {
                        });
                        // Support: IE <9 only
                        // Defend against cloned attroperties (jQuery gh-1709)
                        uniqueCache = outerCache[elem.uniqueID] || (outerCache[elem.uniqueID] = {
                        });
                        if (skip && skip === elem.nodeName.toLowerCase()) elem = elem[dir] || elem;
                        else if ((oldCache = uniqueCache[key]) && oldCache[0] === dirruns && oldCache[1] === doneName) // Assign to newCache so results back-propagate to previous elements
                        return newCache[2] = oldCache[2];
                        else {
                            // Reuse newcache so results back-propagate to previous elements
                            uniqueCache[key] = newCache;
                            // A match means we're done; a fail means we have to keep checking
                            if (newCache[2] = matcher(elem, context, xml)) return true;
                        }
                    }
                }
                return false;
            };
        }
        function elementMatcher(matchers) {
            return matchers.length > 1 ? function(elem, context, xml) {
                var i = matchers.length;
                while(i--){
                    if (!matchers[i](elem, context, xml)) return false;
                }
                return true;
            } : matchers[0];
        }
        function multipleContexts(selector, contexts, results) {
            var i = 0, len = contexts.length;
            for(; i < len; i++)Sizzle(selector, contexts[i], results);
            return results;
        }
        function condense(unmatched, map, filter, context, xml) {
            var elem, newUnmatched = [], i = 0, len = unmatched.length, mapped = map != null;
            for(; i < len; i++){
                if (elem = unmatched[i]) {
                    if (!filter || filter(elem, context, xml)) {
                        newUnmatched.push(elem);
                        if (mapped) map.push(i);
                    }
                }
            }
            return newUnmatched;
        }
        function setMatcher(preFilter, selector, matcher, postFilter, postFinder, postSelector) {
            if (postFilter && !postFilter[expando]) postFilter = setMatcher(postFilter);
            if (postFinder && !postFinder[expando]) postFinder = setMatcher(postFinder, postSelector);
            return markFunction(function(seed, results, context, xml) {
                var temp, i, elem, preMap = [], postMap = [], preexisting = results.length, // Get initial elements from seed or context
                elems = seed || multipleContexts(selector || "*", context.nodeType ? [
                    context
                ] : context, []), // Prefilter to get matcher input, preserving a map for seed-results synchronization
                matcherIn = preFilter && (seed || !selector) ? condense(elems, preMap, preFilter, context, xml) : elems, matcherOut = matcher ? // If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
                postFinder || (seed ? preFilter : preexisting || postFilter) ? // ...intermediate processing is necessary
                [] : // ...otherwise use results directly
                results : matcherIn;
                // Find primary matches
                if (matcher) matcher(matcherIn, matcherOut, context, xml);
                // Apply postFilter
                if (postFilter) {
                    temp = condense(matcherOut, postMap);
                    postFilter(temp, [], context, xml);
                    // Un-match failing elements by moving them back to matcherIn
                    i = temp.length;
                    while(i--)if (elem = temp[i]) matcherOut[postMap[i]] = !(matcherIn[postMap[i]] = elem);
                }
                if (seed) {
                    if (postFinder || preFilter) {
                        if (postFinder) {
                            // Get the final matcherOut by condensing this intermediate into postFinder contexts
                            temp = [];
                            i = matcherOut.length;
                            while(i--)if (elem = matcherOut[i]) // Restore matcherIn since elem is not yet a final match
                            temp.push(matcherIn[i] = elem);
                            postFinder(null, matcherOut = [], temp, xml);
                        }
                        // Move matched elements from seed to results to keep them synchronized
                        i = matcherOut.length;
                        while(i--)if ((elem = matcherOut[i]) && (temp = postFinder ? indexOf(seed, elem) : preMap[i]) > -1) seed[temp] = !(results[temp] = elem);
                    }
                } else {
                    matcherOut = condense(matcherOut === results ? matcherOut.splice(preexisting, matcherOut.length) : matcherOut);
                    if (postFinder) postFinder(null, results, matcherOut, xml);
                    else push.apply(results, matcherOut);
                }
            });
        }
        function matcherFromTokens(tokens) {
            var checkContext, matcher, j, len = tokens.length, leadingRelative = Expr.relative[tokens[0].type], implicitRelative = leadingRelative || Expr.relative[" "], i = leadingRelative ? 1 : 0, // The foundational matcher ensures that elements are reachable from top-level context(s)
            matchContext = addCombinator(function(elem) {
                return elem === checkContext;
            }, implicitRelative, true), matchAnyContext = addCombinator(function(elem) {
                return indexOf(checkContext, elem) > -1;
            }, implicitRelative, true), matchers = [
                function(elem, context, xml) {
                    var ret = !leadingRelative && (xml || context !== outermostContext) || ((checkContext = context).nodeType ? matchContext(elem, context, xml) : matchAnyContext(elem, context, xml));
                    // Avoid hanging onto element (issue #299)
                    checkContext = null;
                    return ret;
                }
            ];
            for(; i < len; i++)if (matcher = Expr.relative[tokens[i].type]) matchers = [
                addCombinator(elementMatcher(matchers), matcher)
            ];
            else {
                matcher = Expr.filter[tokens[i].type].apply(null, tokens[i].matches);
                // Return special upon seeing a positional matcher
                if (matcher[expando]) {
                    // Find the next relative operator (if any) for proper handling
                    j = ++i;
                    for(; j < len; j++){
                        if (Expr.relative[tokens[j].type]) break;
                    }
                    return setMatcher(i > 1 && elementMatcher(matchers), i > 1 && toSelector(// If the preceding token was a descendant combinator, insert an implicit any-element `*`
                    tokens.slice(0, i - 1).concat({
                        value: tokens[i - 2].type === " " ? "*" : ""
                    })).replace(rtrim, "$1"), matcher, i < j && matcherFromTokens(tokens.slice(i, j)), j < len && matcherFromTokens(tokens = tokens.slice(j)), j < len && toSelector(tokens));
                }
                matchers.push(matcher);
            }
            return elementMatcher(matchers);
        }
        function matcherFromGroupMatchers(elementMatchers, setMatchers) {
            var bySet = setMatchers.length > 0, byElement = elementMatchers.length > 0, superMatcher = function(seed, context, xml, results, outermost) {
                var elem, j, matcher, matchedCount = 0, i = "0", unmatched = seed && [], setMatched = [], contextBackup = outermostContext, // We must always have either seed elements or outermost context
                elems = seed || byElement && Expr.find["TAG"]("*", outermost), // Use integer dirruns iff this is the outermost matcher
                dirrunsUnique = dirruns += contextBackup == null ? 1 : Math.random() || 0.1, len = elems.length;
                if (outermost) // Support: IE 11+, Edge 17 - 18+
                // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
                // two documents; shallow comparisons work.
                // eslint-disable-next-line eqeqeq
                outermostContext = context == document || context || outermost;
                // Add elements passing elementMatchers directly to results
                // Support: IE<9, Safari
                // Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
                for(; i !== len && (elem = elems[i]) != null; i++){
                    if (byElement && elem) {
                        j = 0;
                        // Support: IE 11+, Edge 17 - 18+
                        // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
                        // two documents; shallow comparisons work.
                        // eslint-disable-next-line eqeqeq
                        if (!context && elem.ownerDocument != document) {
                            setDocument(elem);
                            xml = !documentIsHTML;
                        }
                        while(matcher = elementMatchers[j++])if (matcher(elem, context || document, xml)) {
                            results.push(elem);
                            break;
                        }
                        if (outermost) dirruns = dirrunsUnique;
                    }
                    // Track unmatched elements for set filters
                    if (bySet) {
                        // They will have gone through all possible matchers
                        if (elem = !matcher && elem) matchedCount--;
                        // Lengthen the array for every element, matched or not
                        if (seed) unmatched.push(elem);
                    }
                }
                // `i` is now the count of elements visited above, and adding it to `matchedCount`
                // makes the latter nonnegative.
                matchedCount += i;
                // Apply set filters to unmatched elements
                // NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
                // equals `i`), unless we didn't visit _any_ elements in the above loop because we have
                // no element matchers and no seed.
                // Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
                // case, which will result in a "00" `matchedCount` that differs from `i` but is also
                // numerically zero.
                if (bySet && i !== matchedCount) {
                    j = 0;
                    while(matcher = setMatchers[j++])matcher(unmatched, setMatched, context, xml);
                    if (seed) {
                        // Reintegrate element matches to eliminate the need for sorting
                        if (matchedCount > 0) {
                            while(i--)if (!(unmatched[i] || setMatched[i])) setMatched[i] = pop.call(results);
                        }
                        // Discard index placeholder values to get only actual matches
                        setMatched = condense(setMatched);
                    }
                    // Add matches to results
                    push.apply(results, setMatched);
                    // Seedless set matches succeeding multiple successful matchers stipulate sorting
                    if (outermost && !seed && setMatched.length > 0 && matchedCount + setMatchers.length > 1) Sizzle.uniqueSort(results);
                }
                // Override manipulation of globals by nested matchers
                if (outermost) {
                    dirruns = dirrunsUnique;
                    outermostContext = contextBackup;
                }
                return unmatched;
            };
            return bySet ? markFunction(superMatcher) : superMatcher;
        }
        compile = Sizzle.compile = function(selector, match /* Internal Use Only */ ) {
            var i, setMatchers = [], elementMatchers = [], cached = compilerCache[selector + " "];
            if (!cached) {
                // Generate a function of recursive functions that can be used to check each element
                if (!match) match = tokenize(selector);
                i = match.length;
                while(i--){
                    cached = matcherFromTokens(match[i]);
                    if (cached[expando]) setMatchers.push(cached);
                    else elementMatchers.push(cached);
                }
                // Cache the compiled function
                cached = compilerCache(selector, matcherFromGroupMatchers(elementMatchers, setMatchers));
                // Save selector and tokenization
                cached.selector = selector;
            }
            return cached;
        };
        /**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */ select = Sizzle.select = function(selector, context, results, seed) {
            var i, tokens, token, type, find, compiled = typeof selector === "function" && selector, match = !seed && tokenize(selector = compiled.selector || selector);
            results = results || [];
            // Try to minimize operations if there is only one selector in the list and no seed
            // (the latter of which guarantees us context)
            if (match.length === 1) {
                // Reduce context if the leading compound selector is an ID
                tokens = match[0] = match[0].slice(0);
                if (tokens.length > 2 && (token = tokens[0]).type === "ID" && context.nodeType === 9 && documentIsHTML && Expr.relative[tokens[1].type]) {
                    context = (Expr.find["ID"](token.matches[0].replace(runescape, funescape), context) || [])[0];
                    if (!context) return results;
                    else if (compiled) context = context.parentNode;
                    selector = selector.slice(tokens.shift().value.length);
                }
                // Fetch a seed set for right-to-left matching
                i = matchExpr["needsContext"].test(selector) ? 0 : tokens.length;
                while(i--){
                    token = tokens[i];
                    // Abort if we hit a combinator
                    if (Expr.relative[type = token.type]) break;
                    if (find = Expr.find[type]) // Search, expanding context for leading sibling combinators
                    {
                        if (seed = find(token.matches[0].replace(runescape, funescape), rsibling.test(tokens[0].type) && testContext(context.parentNode) || context)) {
                            // If seed is empty or no tokens remain, we can return early
                            tokens.splice(i, 1);
                            selector = seed.length && toSelector(tokens);
                            if (!selector) {
                                push.apply(results, seed);
                                return results;
                            }
                            break;
                        }
                    }
                }
            }
            // Compile and execute a filtering function if one is not provided
            // Provide `match` to avoid retokenization if we modified the selector above
            (compiled || compile(selector, match))(seed, context, !documentIsHTML, results, !context || rsibling.test(selector) && testContext(context.parentNode) || context);
            return results;
        };
        // One-time assignments
        // Sort stability
        support.sortStable = expando.split("").sort(sortOrder).join("") === expando;
        // Support: Chrome 14-35+
        // Always assume duplicates if they aren't passed to the comparison function
        support.detectDuplicates = !!hasDuplicate;
        // Initialize against the default document
        setDocument();
        // Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
        // Detached nodes confoundingly follow *each other*
        support.sortDetached = assert(function(el) {
            // Should return 1, but returns 4 (following)
            return el.compareDocumentPosition(document.createElement("fieldset")) & 1;
        });
        // Support: IE<8
        // Prevent attribute/property "interpolation"
        // https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
        if (!assert(function(el) {
            el.innerHTML = "<a href='#'></a>";
            return el.firstChild.getAttribute("href") === "#";
        })) addHandle("type|href|height|width", function(elem, name, isXML) {
            if (!isXML) return elem.getAttribute(name, name.toLowerCase() === "type" ? 1 : 2);
        });
        // Support: IE<9
        // Use defaultValue in place of getAttribute("value")
        if (!support.attributes || !assert(function(el) {
            el.innerHTML = "<input/>";
            el.firstChild.setAttribute("value", "");
            return el.firstChild.getAttribute("value") === "";
        })) addHandle("value", function(elem, _name, isXML) {
            if (!isXML && elem.nodeName.toLowerCase() === "input") return elem.defaultValue;
        });
        // Support: IE<9
        // Use getAttributeNode to fetch booleans when getAttribute lies
        if (!assert(function(el) {
            return el.getAttribute("disabled") == null;
        })) addHandle(booleans, function(elem, name, isXML) {
            var val;
            if (!isXML) return elem[name] === true ? name.toLowerCase() : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
        });
        return Sizzle;
    }(window1);
    jQuery.find = Sizzle1;
    jQuery.expr = Sizzle1.selectors;
    // Deprecated
    jQuery.expr[":"] = jQuery.expr.pseudos;
    jQuery.uniqueSort = jQuery.unique = Sizzle1.uniqueSort;
    jQuery.text = Sizzle1.getText;
    jQuery.isXMLDoc = Sizzle1.isXML;
    jQuery.contains = Sizzle1.contains;
    jQuery.escapeSelector = Sizzle1.escape;
    var dir1 = function(elem, dir, until) {
        var matched = [], truncate = until !== undefined;
        while((elem = elem[dir]) && elem.nodeType !== 9)if (elem.nodeType === 1) {
            if (truncate && jQuery(elem).is(until)) break;
            matched.push(elem);
        }
        return matched;
    };
    var siblings = function(n, elem) {
        var matched = [];
        for(; n; n = n.nextSibling)if (n.nodeType === 1 && n !== elem) matched.push(n);
        return matched;
    };
    var rneedsContext = jQuery.expr.match.needsContext;
    function nodeName1(elem, name) {
        return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
    }
    var rsingleTag = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    // Implement the identical functionality for filter and not
    function winnow(elements, qualifier, not) {
        if (isFunction(qualifier)) return jQuery.grep(elements, function(elem, i) {
            return !!qualifier.call(elem, i, elem) !== not;
        });
        // Single element
        if (qualifier.nodeType) return jQuery.grep(elements, function(elem) {
            return elem === qualifier !== not;
        });
        // Arraylike of elements (jQuery, arguments, Array)
        if (typeof qualifier !== "string") return jQuery.grep(elements, function(elem) {
            return indexOf1.call(qualifier, elem) > -1 !== not;
        });
        // Filtered directly for both simple and complex selectors
        return jQuery.filter(qualifier, elements, not);
    }
    jQuery.filter = function(expr, elems, not) {
        var elem1 = elems[0];
        if (not) expr = ":not(" + expr + ")";
        if (elems.length === 1 && elem1.nodeType === 1) return jQuery.find.matchesSelector(elem1, expr) ? [
            elem1
        ] : [];
        return jQuery.find.matches(expr, jQuery.grep(elems, function(elem) {
            return elem.nodeType === 1;
        }));
    };
    jQuery.fn.extend({
        find: function(selector) {
            var i, ret, len = this.length, self = this;
            if (typeof selector !== "string") return this.pushStack(jQuery(selector).filter(function() {
                for(i = 0; i < len; i++){
                    if (jQuery.contains(self[i], this)) return true;
                }
            }));
            ret = this.pushStack([]);
            for(i = 0; i < len; i++)jQuery.find(selector, self[i], ret);
            return len > 1 ? jQuery.uniqueSort(ret) : ret;
        },
        filter: function(selector) {
            return this.pushStack(winnow(this, selector || [], false));
        },
        not: function(selector) {
            return this.pushStack(winnow(this, selector || [], true));
        },
        is: function(selector) {
            return !!winnow(this, // If this is a positional/relative selector, check membership in the returned set
            // so $("p:first").is("p:last") won't return true for a doc with two "p".
            typeof selector === "string" && rneedsContext.test(selector) ? jQuery(selector) : selector || [], false).length;
        }
    });
    // Initialize a jQuery object
    // A central reference to the root jQuery(document)
    var rootjQuery, // A simple way to check for HTML strings
    // Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
    // Strict HTML recognition (#11290: must start with <)
    // Shortcut simple #id case for speed
    rquickExpr1 = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/, init = jQuery.fn.init = function(selector, context, root) {
        var match, elem;
        // HANDLE: $(""), $(null), $(undefined), $(false)
        if (!selector) return this;
        // Method init() accepts an alternate rootjQuery
        // so migrate can support jQuery.sub (gh-2101)
        root = root || rootjQuery;
        // Handle HTML strings
        if (typeof selector === "string") {
            if (selector[0] === "<" && selector[selector.length - 1] === ">" && selector.length >= 3) // Assume that strings that start and end with <> are HTML and skip the regex check
            match = [
                null,
                selector,
                null
            ];
            else match = rquickExpr1.exec(selector);
            // Match html or make sure no context is specified for #id
            if (match && (match[1] || !context)) {
                // HANDLE: $(html) -> $(array)
                if (match[1]) {
                    context = context instanceof jQuery ? context[0] : context;
                    // Option to run scripts is true for back-compat
                    // Intentionally let the error be thrown if parseHTML is not present
                    jQuery.merge(this, jQuery.parseHTML(match[1], context && context.nodeType ? context.ownerDocument || context : document1, true));
                    // HANDLE: $(html, props)
                    if (rsingleTag.test(match[1]) && jQuery.isPlainObject(context)) {
                        for(match in context)// Properties of context are called as methods if possible
                        if (isFunction(this[match])) this[match](context[match]);
                        else this.attr(match, context[match]);
                    }
                    return this;
                // HANDLE: $(#id)
                } else {
                    elem = document1.getElementById(match[2]);
                    if (elem) {
                        // Inject the element directly into the jQuery object
                        this[0] = elem;
                        this.length = 1;
                    }
                    return this;
                }
            } else if (!context || context.jquery) return (context || root).find(selector);
            else return this.constructor(context).find(selector);
        // HANDLE: $(DOMElement)
        } else if (selector.nodeType) {
            this[0] = selector;
            this.length = 1;
            return this;
        // HANDLE: $(function)
        // Shortcut for document ready
        } else if (isFunction(selector)) return root.ready !== undefined ? root.ready(selector) : // Execute immediately if ready is not present
        selector(jQuery);
        return jQuery.makeArray(selector, this);
    };
    // Give the init function the jQuery prototype for later instantiation
    init.prototype = jQuery.fn;
    // Initialize central reference
    rootjQuery = jQuery(document1);
    var rparentsprev = /^(?:parents|prev(?:Until|All))/, // Methods guaranteed to produce a unique set when starting from a unique set
    guaranteedUnique = {
        children: true,
        contents: true,
        next: true,
        prev: true
    };
    jQuery.fn.extend({
        has: function(target) {
            var targets = jQuery(target, this), l = targets.length;
            return this.filter(function() {
                var i = 0;
                for(; i < l; i++){
                    if (jQuery.contains(this, targets[i])) return true;
                }
            });
        },
        closest: function(selectors, context) {
            var cur, i = 0, l = this.length, matched = [], targets = typeof selectors !== "string" && jQuery(selectors);
            // Positional selectors never match, since there's no _selection_ context
            if (!rneedsContext.test(selectors)) for(; i < l; i++){
                for(cur = this[i]; cur && cur !== context; cur = cur.parentNode)// Always skip document fragments
                if (cur.nodeType < 11 && (targets ? targets.index(cur) > -1 : // Don't pass non-elements to Sizzle
                cur.nodeType === 1 && jQuery.find.matchesSelector(cur, selectors))) {
                    matched.push(cur);
                    break;
                }
            }
            return this.pushStack(matched.length > 1 ? jQuery.uniqueSort(matched) : matched);
        },
        // Determine the position of an element within the set
        index: function(elem) {
            // No argument, return index in parent
            if (!elem) return this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
            // Index in selector
            if (typeof elem === "string") return indexOf1.call(jQuery(elem), this[0]);
            // Locate the position of the desired element
            return indexOf1.call(this, // If it receives a jQuery object, the first element is used
            elem.jquery ? elem[0] : elem);
        },
        add: function(selector, context) {
            return this.pushStack(jQuery.uniqueSort(jQuery.merge(this.get(), jQuery(selector, context))));
        },
        addBack: function(selector) {
            return this.add(selector == null ? this.prevObject : this.prevObject.filter(selector));
        }
    });
    function sibling(cur, dir) {
        while((cur = cur[dir]) && cur.nodeType !== 1);
        return cur;
    }
    jQuery.each({
        parent: function(elem) {
            var parent = elem.parentNode;
            return parent && parent.nodeType !== 11 ? parent : null;
        },
        parents: function(elem) {
            return dir1(elem, "parentNode");
        },
        parentsUntil: function(elem, _i, until) {
            return dir1(elem, "parentNode", until);
        },
        next: function(elem) {
            return sibling(elem, "nextSibling");
        },
        prev: function(elem) {
            return sibling(elem, "previousSibling");
        },
        nextAll: function(elem) {
            return dir1(elem, "nextSibling");
        },
        prevAll: function(elem) {
            return dir1(elem, "previousSibling");
        },
        nextUntil: function(elem, _i, until) {
            return dir1(elem, "nextSibling", until);
        },
        prevUntil: function(elem, _i, until) {
            return dir1(elem, "previousSibling", until);
        },
        siblings: function(elem) {
            return siblings((elem.parentNode || {
            }).firstChild, elem);
        },
        children: function(elem) {
            return siblings(elem.firstChild);
        },
        contents: function(elem) {
            if (elem.contentDocument != null && // Support: IE 11+
            // <object> elements with no `data` attribute has an object
            // `contentDocument` with a `null` prototype.
            getProto(elem.contentDocument)) return elem.contentDocument;
            // Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
            // Treat the template element as a regular one in browsers that
            // don't support it.
            if (nodeName1(elem, "template")) elem = elem.content || elem;
            return jQuery.merge([], elem.childNodes);
        }
    }, function(name, fn) {
        jQuery.fn[name] = function(until, selector) {
            var matched = jQuery.map(this, fn, until);
            if (name.slice(-5) !== "Until") selector = until;
            if (selector && typeof selector === "string") matched = jQuery.filter(selector, matched);
            if (this.length > 1) {
                // Remove duplicates
                if (!guaranteedUnique[name]) jQuery.uniqueSort(matched);
                // Reverse order for parents* and prev-derivatives
                if (rparentsprev.test(name)) matched.reverse();
            }
            return this.pushStack(matched);
        };
    });
    var rnothtmlwhite = /[^\x20\t\r\n\f]+/g;
    // Convert String-formatted options into Object-formatted ones
    function createOptions(options) {
        var object = {
        };
        jQuery.each(options.match(rnothtmlwhite) || [], function(_, flag) {
            object[flag] = true;
        });
        return object;
    }
    /*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */ jQuery.Callbacks = function(options) {
        // Convert options from String-formatted to Object-formatted if needed
        // (we check in cache first)
        options = typeof options === "string" ? createOptions(options) : jQuery.extend({
        }, options);
        var firing, // Last fire value for non-forgettable lists
        memory, // Flag to know if list was already fired
        fired, // Flag to prevent firing
        locked, // Actual callback list
        list = [], // Queue of execution data for repeatable lists
        queue = [], // Index of currently firing callback (modified by add/remove as needed)
        firingIndex = -1, // Fire callbacks
        fire = function() {
            // Enforce single-firing
            locked = locked || options.once;
            // Execute callbacks for all pending executions,
            // respecting firingIndex overrides and runtime changes
            fired = firing = true;
            for(; queue.length; firingIndex = -1){
                memory = queue.shift();
                while(++firingIndex < list.length)// Run callback and check for early termination
                if (list[firingIndex].apply(memory[0], memory[1]) === false && options.stopOnFalse) {
                    // Jump to end and forget the data so .add doesn't re-fire
                    firingIndex = list.length;
                    memory = false;
                }
            }
            // Forget the data if we're done with it
            if (!options.memory) memory = false;
            firing = false;
            // Clean up if we're done firing for good
            if (locked) {
                // Keep an empty list if we have data for future add calls
                if (memory) list = [];
                else list = "";
            }
        }, // Actual Callbacks object
        self = {
            // Add a callback or a collection of callbacks to the list
            add: function() {
                if (list) {
                    // If we have memory from a past run, we should fire after adding
                    if (memory && !firing) {
                        firingIndex = list.length - 1;
                        queue.push(memory);
                    }
                    (function add(args) {
                        jQuery.each(args, function(_, arg) {
                            if (isFunction(arg)) {
                                if (!options.unique || !self.has(arg)) list.push(arg);
                            } else if (arg && arg.length && toType(arg) !== "string") // Inspect recursively
                            add(arg);
                        });
                    })(arguments);
                    if (memory && !firing) fire();
                }
                return this;
            },
            // Remove a callback from the list
            remove: function() {
                jQuery.each(arguments, function(_, arg) {
                    var index;
                    while((index = jQuery.inArray(arg, list, index)) > -1){
                        list.splice(index, 1);
                        // Handle firing indexes
                        if (index <= firingIndex) firingIndex--;
                    }
                });
                return this;
            },
            // Check if a given callback is in the list.
            // If no argument is given, return whether or not list has callbacks attached.
            has: function(fn) {
                return fn ? jQuery.inArray(fn, list) > -1 : list.length > 0;
            },
            // Remove all callbacks from the list
            empty: function() {
                if (list) list = [];
                return this;
            },
            // Disable .fire and .add
            // Abort any current/pending executions
            // Clear all callbacks and values
            disable: function() {
                locked = queue = [];
                list = memory = "";
                return this;
            },
            disabled: function() {
                return !list;
            },
            // Disable .fire
            // Also disable .add unless we have memory (since it would have no effect)
            // Abort any pending executions
            lock: function() {
                locked = queue = [];
                if (!memory && !firing) list = memory = "";
                return this;
            },
            locked: function() {
                return !!locked;
            },
            // Call all callbacks with the given context and arguments
            fireWith: function(context, args) {
                if (!locked) {
                    args = args || [];
                    args = [
                        context,
                        args.slice ? args.slice() : args
                    ];
                    queue.push(args);
                    if (!firing) fire();
                }
                return this;
            },
            // Call all the callbacks with the given arguments
            fire: function() {
                self.fireWith(this, arguments);
                return this;
            },
            // To know if the callbacks have already been called at least once
            fired: function() {
                return !!fired;
            }
        };
        return self;
    };
    function Identity(v) {
        return v;
    }
    function Thrower(ex) {
        throw ex;
    }
    function adoptValue(value, resolve, reject, noValue) {
        var method;
        try {
            // Check for promise aspect first to privilege synchronous behavior
            if (value && isFunction(method = value.promise)) method.call(value).done(resolve).fail(reject);
            else if (value && isFunction(method = value.then)) method.call(value, resolve, reject);
            else // Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
            // * false: [ value ].slice( 0 ) => resolve( value )
            // * true: [ value ].slice( 1 ) => resolve()
            resolve.apply(undefined, [
                value
            ].slice(noValue));
        // For Promises/A+, convert exceptions into rejections
        // Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
        // Deferred#then to conditionally suppress rejection.
        } catch (value1) {
            // Support: Android 4.0 only
            // Strict mode functions invoked without .call/.apply get global-object context
            reject.apply(undefined, [
                value1
            ]);
        }
    }
    jQuery.extend({
        Deferred: function(func) {
            var tuples = [
                // action, add listener, callbacks,
                // ... .then handlers, argument index, [final state]
                [
                    "notify",
                    "progress",
                    jQuery.Callbacks("memory"),
                    jQuery.Callbacks("memory"),
                    2
                ],
                [
                    "resolve",
                    "done",
                    jQuery.Callbacks("once memory"),
                    jQuery.Callbacks("once memory"),
                    0,
                    "resolved"
                ],
                [
                    "reject",
                    "fail",
                    jQuery.Callbacks("once memory"),
                    jQuery.Callbacks("once memory"),
                    1,
                    "rejected"
                ]
            ], state = "pending", promise = {
                state: function() {
                    return state;
                },
                always: function() {
                    deferred1.done(arguments).fail(arguments);
                    return this;
                },
                "catch": function(fn) {
                    return promise.then(null, fn);
                },
                // Keep pipe for back-compat
                pipe: function() {
                    var fns = arguments;
                    return jQuery.Deferred(function(newDefer) {
                        jQuery.each(tuples, function(_i, tuple) {
                            // Map tuples (progress, done, fail) to arguments (done, fail, progress)
                            var fn = isFunction(fns[tuple[4]]) && fns[tuple[4]];
                            // deferred.progress(function() { bind to newDefer or newDefer.notify })
                            // deferred.done(function() { bind to newDefer or newDefer.resolve })
                            // deferred.fail(function() { bind to newDefer or newDefer.reject })
                            deferred1[tuple[1]](function() {
                                var returned = fn && fn.apply(this, arguments);
                                if (returned && isFunction(returned.promise)) returned.promise().progress(newDefer.notify).done(newDefer.resolve).fail(newDefer.reject);
                                else newDefer[tuple[0] + "With"](this, fn ? [
                                    returned
                                ] : arguments);
                            });
                        });
                        fns = null;
                    }).promise();
                },
                then: function(onFulfilled, onRejected, onProgress) {
                    var maxDepth = 0;
                    function resolve(depth, deferred, handler, special) {
                        return function() {
                            var that = this, args = arguments, mightThrow = function() {
                                var returned, then;
                                // Support: Promises/A+ section 2.3.3.3.3
                                // https://promisesaplus.com/#point-59
                                // Ignore double-resolution attempts
                                if (depth < maxDepth) return;
                                returned = handler.apply(that, args);
                                // Support: Promises/A+ section 2.3.1
                                // https://promisesaplus.com/#point-48
                                if (returned === deferred.promise()) throw new TypeError("Thenable self-resolution");
                                // Support: Promises/A+ sections 2.3.3.1, 3.5
                                // https://promisesaplus.com/#point-54
                                // https://promisesaplus.com/#point-75
                                // Retrieve `then` only once
                                then = returned && (typeof returned === "object" || typeof returned === "function") && returned.then;
                                // Handle a returned thenable
                                if (isFunction(then)) {
                                    // Special processors (notify) just wait for resolution
                                    if (special) then.call(returned, resolve(maxDepth, deferred, Identity, special), resolve(maxDepth, deferred, Thrower, special));
                                    else {
                                        // ...and disregard older resolution values
                                        maxDepth++;
                                        then.call(returned, resolve(maxDepth, deferred, Identity, special), resolve(maxDepth, deferred, Thrower, special), resolve(maxDepth, deferred, Identity, deferred.notifyWith));
                                    }
                                } else {
                                    // Only substitute handlers pass on context
                                    // and multiple values (non-spec behavior)
                                    if (handler !== Identity) {
                                        that = undefined;
                                        args = [
                                            returned
                                        ];
                                    }
                                    // Process the value(s)
                                    // Default process is resolve
                                    (special || deferred.resolveWith)(that, args);
                                }
                            }, // Only normal processors (resolve) catch and reject exceptions
                            process = special ? mightThrow : function() {
                                try {
                                    mightThrow();
                                } catch (e) {
                                    if (jQuery.Deferred.exceptionHook) jQuery.Deferred.exceptionHook(e, process.stackTrace);
                                    // Support: Promises/A+ section 2.3.3.3.4.1
                                    // https://promisesaplus.com/#point-61
                                    // Ignore post-resolution exceptions
                                    if (depth + 1 >= maxDepth) {
                                        // Only substitute handlers pass on context
                                        // and multiple values (non-spec behavior)
                                        if (handler !== Thrower) {
                                            that = undefined;
                                            args = [
                                                e
                                            ];
                                        }
                                        deferred.rejectWith(that, args);
                                    }
                                }
                            };
                            // Support: Promises/A+ section 2.3.3.3.1
                            // https://promisesaplus.com/#point-57
                            // Re-resolve promises immediately to dodge false rejection from
                            // subsequent errors
                            if (depth) process();
                            else {
                                // Call an optional hook to record the stack, in case of exception
                                // since it's otherwise lost when execution goes async
                                if (jQuery.Deferred.getStackHook) process.stackTrace = jQuery.Deferred.getStackHook();
                                window1.setTimeout(process);
                            }
                        };
                    }
                    return jQuery.Deferred(function(newDefer) {
                        // progress_handlers.add( ... )
                        tuples[0][3].add(resolve(0, newDefer, isFunction(onProgress) ? onProgress : Identity, newDefer.notifyWith));
                        // fulfilled_handlers.add( ... )
                        tuples[1][3].add(resolve(0, newDefer, isFunction(onFulfilled) ? onFulfilled : Identity));
                        // rejected_handlers.add( ... )
                        tuples[2][3].add(resolve(0, newDefer, isFunction(onRejected) ? onRejected : Thrower));
                    }).promise();
                },
                // Get a promise for this deferred
                // If obj is provided, the promise aspect is added to the object
                promise: function(obj) {
                    return obj != null ? jQuery.extend(obj, promise) : promise;
                }
            }, deferred1 = {
            };
            // Add list-specific methods
            jQuery.each(tuples, function(i, tuple) {
                var list = tuple[2], stateString = tuple[5];
                // promise.progress = list.add
                // promise.done = list.add
                // promise.fail = list.add
                promise[tuple[1]] = list.add;
                // Handle state
                if (stateString) list.add(function() {
                    // state = "resolved" (i.e., fulfilled)
                    // state = "rejected"
                    state = stateString;
                }, // rejected_callbacks.disable
                // fulfilled_callbacks.disable
                tuples[3 - i][2].disable, // rejected_handlers.disable
                // fulfilled_handlers.disable
                tuples[3 - i][3].disable, // progress_callbacks.lock
                tuples[0][2].lock, // progress_handlers.lock
                tuples[0][3].lock);
                // progress_handlers.fire
                // fulfilled_handlers.fire
                // rejected_handlers.fire
                list.add(tuple[3].fire);
                // deferred.notify = function() { deferred.notifyWith(...) }
                // deferred.resolve = function() { deferred.resolveWith(...) }
                // deferred.reject = function() { deferred.rejectWith(...) }
                deferred1[tuple[0]] = function() {
                    deferred1[tuple[0] + "With"](this === deferred1 ? undefined : this, arguments);
                    return this;
                };
                // deferred.notifyWith = list.fireWith
                // deferred.resolveWith = list.fireWith
                // deferred.rejectWith = list.fireWith
                deferred1[tuple[0] + "With"] = list.fireWith;
            });
            // Make the deferred a promise
            promise.promise(deferred1);
            // Call given func if any
            if (func) func.call(deferred1, deferred1);
            // All done!
            return deferred1;
        },
        // Deferred helper
        when: function(singleValue) {
            var // count of uncompleted subordinates
            remaining = arguments.length, // count of unprocessed arguments
            i = remaining, // subordinate fulfillment data
            resolveContexts = Array(i), resolveValues = slice1.call(arguments), // the primary Deferred
            primary = jQuery.Deferred(), // subordinate callback factory
            updateFunc = function(i) {
                return function(value) {
                    resolveContexts[i] = this;
                    resolveValues[i] = arguments.length > 1 ? slice1.call(arguments) : value;
                    if (!--remaining) primary.resolveWith(resolveContexts, resolveValues);
                };
            };
            // Single- and empty arguments are adopted like Promise.resolve
            if (remaining <= 1) {
                adoptValue(singleValue, primary.done(updateFunc(i)).resolve, primary.reject, !remaining);
                // Use .then() to unwrap secondary thenables (cf. gh-3000)
                if (primary.state() === "pending" || isFunction(resolveValues[i] && resolveValues[i].then)) return primary.then();
            }
            // Multiple arguments are aggregated like Promise.all array elements
            while(i--)adoptValue(resolveValues[i], updateFunc(i), primary.reject);
            return primary.promise();
        }
    });
    // These usually indicate a programmer mistake during development,
    // warn about them ASAP rather than swallowing them by default.
    var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    jQuery.Deferred.exceptionHook = function(error, stack) {
        // Support: IE 8 - 9 only
        // Console exists when dev tools are open, which can happen at any time
        if (window1.console && window1.console.warn && error && rerrorNames.test(error.name)) window1.console.warn("jQuery.Deferred exception: " + error.message, error.stack, stack);
    };
    jQuery.readyException = function(error) {
        window1.setTimeout(function() {
            throw error;
        });
    };
    // The deferred used on DOM ready
    var readyList = jQuery.Deferred();
    jQuery.fn.ready = function(fn) {
        readyList.then(fn)// Wrap jQuery.readyException in a function so that the lookup
        // happens at the time of error handling instead of callback
        // registration.
        .catch(function(error) {
            jQuery.readyException(error);
        });
        return this;
    };
    jQuery.extend({
        // Is the DOM ready to be used? Set to true once it occurs.
        isReady: false,
        // A counter to track how many items to wait for before
        // the ready event fires. See #6781
        readyWait: 1,
        // Handle when the DOM is ready
        ready: function(wait) {
            // Abort if there are pending holds or we're already ready
            if (wait === true ? --jQuery.readyWait : jQuery.isReady) return;
            // Remember that the DOM is ready
            jQuery.isReady = true;
            // If a normal DOM Ready event fired, decrement, and wait if need be
            if (wait !== true && --jQuery.readyWait > 0) return;
            // If there are functions bound, to execute
            readyList.resolveWith(document1, [
                jQuery
            ]);
        }
    });
    jQuery.ready.then = readyList.then;
    // The ready event handler and self cleanup method
    function completed1() {
        document1.removeEventListener("DOMContentLoaded", completed1);
        window1.removeEventListener("load", completed1);
        jQuery.ready();
    }
    // Catch cases where $(document).ready() is called
    // after the browser event has already occurred.
    // Support: IE <=9 - 10 only
    // Older IE sometimes signals "interactive" too soon
    if (document1.readyState === "complete" || document1.readyState !== "loading" && !document1.documentElement.doScroll) // Handle it asynchronously to allow scripts the opportunity to delay ready
    window1.setTimeout(jQuery.ready);
    else {
        // Use the handy event callback
        document1.addEventListener("DOMContentLoaded", completed1);
        // A fallback to window.onload, that will always work
        window1.addEventListener("load", completed1);
    }
    // Multifunctional method to get and set values of a collection
    // The value/s can optionally be executed if it's a function
    var access = function(elems, fn, key, value2, chainable, emptyGet, raw) {
        var i = 0, len = elems.length, bulk = key == null;
        // Sets many values
        if (toType(key) === "object") {
            chainable = true;
            for(i in key)access(elems, fn, i, key[i], true, emptyGet, raw);
        // Sets one value
        } else if (value2 !== undefined) {
            chainable = true;
            if (!isFunction(value2)) raw = true;
            if (bulk) {
                // Bulk operations run against the entire set
                if (raw) {
                    fn.call(elems, value2);
                    fn = null;
                // ...except when executing function values
                } else {
                    bulk = fn;
                    fn = function(elem, _key, value) {
                        return bulk.call(jQuery(elem), value);
                    };
                }
            }
            if (fn) for(; i < len; i++)fn(elems[i], key, raw ? value2 : value2.call(elems[i], i, fn(elems[i], key)));
        }
        if (chainable) return elems;
        // Gets
        if (bulk) return fn.call(elems);
        return len ? fn(elems[0], key) : emptyGet;
    };
    // Matches dashed string for camelizing
    var rmsPrefix = /^-ms-/, rdashAlpha = /-([a-z])/g;
    // Used by camelCase as callback to replace()
    function fcamelCase(_all, letter) {
        return letter.toUpperCase();
    }
    // Convert dashed to camelCase; used by the css and data modules
    // Support: IE <=9 - 11, Edge 12 - 15
    // Microsoft forgot to hump their vendor prefix (#9572)
    function camelCase(string) {
        return string.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase);
    }
    var acceptData = function(owner) {
        // Accepts only:
        //  - Node
        //    - Node.ELEMENT_NODE
        //    - Node.DOCUMENT_NODE
        //  - Object
        //    - Any
        return owner.nodeType === 1 || owner.nodeType === 9 || !+owner.nodeType;
    };
    function Data() {
        this.expando = jQuery.expando + Data.uid++;
    }
    Data.uid = 1;
    Data.prototype = {
        cache: function(owner) {
            // Check if the owner object already has a cache
            var value = owner[this.expando];
            // If not, create one
            if (!value) {
                value = {
                };
                // We can accept data for non-element nodes in modern browsers,
                // but we should not, see #8335.
                // Always return an empty object.
                if (acceptData(owner)) {
                    // If it is a node unlikely to be stringify-ed or looped over
                    // use plain assignment
                    if (owner.nodeType) owner[this.expando] = value;
                    else Object.defineProperty(owner, this.expando, {
                        value: value,
                        configurable: true
                    });
                }
            }
            return value;
        },
        set: function(owner, data, value) {
            var prop, cache = this.cache(owner);
            // Handle: [ owner, key, value ] args
            // Always use camelCase key (gh-2257)
            if (typeof data === "string") cache[camelCase(data)] = value;
            else // Copy the properties one-by-one to the cache object
            for(prop in data)cache[camelCase(prop)] = data[prop];
            return cache;
        },
        get: function(owner, key) {
            return key === undefined ? this.cache(owner) : // Always use camelCase key (gh-2257)
            owner[this.expando] && owner[this.expando][camelCase(key)];
        },
        access: function(owner, key, value) {
            // In cases where either:
            //
            //   1. No key was specified
            //   2. A string key was specified, but no value provided
            //
            // Take the "read" path and allow the get method to determine
            // which value to return, respectively either:
            //
            //   1. The entire cache object
            //   2. The data stored at the key
            //
            if (key === undefined || key && typeof key === "string" && value === undefined) return this.get(owner, key);
            // When the key is not a string, or both a key and value
            // are specified, set or extend (existing objects) with either:
            //
            //   1. An object of properties
            //   2. A key and value
            //
            this.set(owner, key, value);
            // Since the "set" path can have two possible entry points
            // return the expected data based on which path was taken[*]
            return value !== undefined ? value : key;
        },
        remove: function(owner, key) {
            var i, cache = owner[this.expando];
            if (cache === undefined) return;
            if (key !== undefined) {
                // Support array or space separated string of keys
                if (Array.isArray(key)) // If key is an array of keys...
                // We always set camelCase keys, so remove that.
                key = key.map(camelCase);
                else {
                    key = camelCase(key);
                    // If a key with the spaces exists, use it.
                    // Otherwise, create an array by matching non-whitespace
                    key = key in cache ? [
                        key
                    ] : key.match(rnothtmlwhite) || [];
                }
                i = key.length;
                while(i--)delete cache[key[i]];
            }
            // Remove the expando if there's no more data
            if (key === undefined || jQuery.isEmptyObject(cache)) {
                // Support: Chrome <=35 - 45
                // Webkit & Blink performance suffers when deleting properties
                // from DOM nodes, so set to undefined instead
                // https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
                if (owner.nodeType) owner[this.expando] = undefined;
                else delete owner[this.expando];
            }
        },
        hasData: function(owner) {
            var cache = owner[this.expando];
            return cache !== undefined && !jQuery.isEmptyObject(cache);
        }
    };
    var dataPriv = new Data();
    var dataUser = new Data();
    //	Implementation Summary
    //
    //	1. Enforce API surface and semantic compatibility with 1.9.x branch
    //	2. Improve the module's maintainability by reducing the storage
    //		paths to a single mechanism.
    //	3. Use the same single mechanism to support "private" and "user" data.
    //	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
    //	5. Avoid exposing implementation details on user objects (eg. expando properties)
    //	6. Provide a clear path for implementation upgrade to WeakMap in 2014
    var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, rmultiDash = /[A-Z]/g;
    function getData(data) {
        if (data === "true") return true;
        if (data === "false") return false;
        if (data === "null") return null;
        // Only convert to a number if it doesn't change the string
        if (data === +data + "") return +data;
        if (rbrace.test(data)) return JSON.parse(data);
        return data;
    }
    function dataAttr(elem, key, data) {
        var name;
        // If nothing was found internally, try to fetch any
        // data from the HTML5 data-* attribute
        if (data === undefined && elem.nodeType === 1) {
            name = "data-" + key.replace(rmultiDash, "-$&").toLowerCase();
            data = elem.getAttribute(name);
            if (typeof data === "string") {
                try {
                    data = getData(data);
                } catch (e) {
                }
                // Make sure we set the data so it isn't changed later
                dataUser.set(elem, key, data);
            } else data = undefined;
        }
        return data;
    }
    jQuery.extend({
        hasData: function(elem) {
            return dataUser.hasData(elem) || dataPriv.hasData(elem);
        },
        data: function(elem, name, data) {
            return dataUser.access(elem, name, data);
        },
        removeData: function(elem, name) {
            dataUser.remove(elem, name);
        },
        // TODO: Now that all calls to _data and _removeData have been replaced
        // with direct calls to dataPriv methods, these can be deprecated.
        _data: function(elem, name, data) {
            return dataPriv.access(elem, name, data);
        },
        _removeData: function(elem, name) {
            dataPriv.remove(elem, name);
        }
    });
    jQuery.fn.extend({
        data: function(key, value3) {
            var i, name, data1, elem = this[0], attrs = elem && elem.attributes;
            // Gets all values
            if (key === undefined) {
                if (this.length) {
                    data1 = dataUser.get(elem);
                    if (elem.nodeType === 1 && !dataPriv.get(elem, "hasDataAttrs")) {
                        i = attrs.length;
                        while(i--)// Support: IE 11 only
                        // The attrs elements can be null (#14894)
                        if (attrs[i]) {
                            name = attrs[i].name;
                            if (name.indexOf("data-") === 0) {
                                name = camelCase(name.slice(5));
                                dataAttr(elem, name, data1[name]);
                            }
                        }
                        dataPriv.set(elem, "hasDataAttrs", true);
                    }
                }
                return data1;
            }
            // Sets multiple values
            if (typeof key === "object") return this.each(function() {
                dataUser.set(this, key);
            });
            return access(this, function(value) {
                var data;
                // The calling jQuery object (element matches) is not empty
                // (and therefore has an element appears at this[ 0 ]) and the
                // `value` parameter was not undefined. An empty jQuery object
                // will result in `undefined` for elem = this[ 0 ] which will
                // throw an exception if an attempt to read a data cache is made.
                if (elem && value === undefined) {
                    // Attempt to get data from the cache
                    // The key will always be camelCased in Data
                    data = dataUser.get(elem, key);
                    if (data !== undefined) return data;
                    // Attempt to "discover" the data in
                    // HTML5 custom data-* attrs
                    data = dataAttr(elem, key);
                    if (data !== undefined) return data;
                    // We tried really hard, but the data doesn't exist.
                    return;
                }
                // Set the data...
                this.each(function() {
                    // We always store the camelCased key
                    dataUser.set(this, key, value);
                });
            }, null, value3, arguments.length > 1, null, true);
        },
        removeData: function(key) {
            return this.each(function() {
                dataUser.remove(this, key);
            });
        }
    });
    jQuery.extend({
        queue: function(elem, type, data) {
            var queue;
            if (elem) {
                type = (type || "fx") + "queue";
                queue = dataPriv.get(elem, type);
                // Speed up dequeue by getting out quickly if this is just a lookup
                if (data) {
                    if (!queue || Array.isArray(data)) queue = dataPriv.access(elem, type, jQuery.makeArray(data));
                    else queue.push(data);
                }
                return queue || [];
            }
        },
        dequeue: function(elem, type) {
            type = type || "fx";
            var queue = jQuery.queue(elem, type), startLength = queue.length, fn = queue.shift(), hooks = jQuery._queueHooks(elem, type), next = function() {
                jQuery.dequeue(elem, type);
            };
            // If the fx queue is dequeued, always remove the progress sentinel
            if (fn === "inprogress") {
                fn = queue.shift();
                startLength--;
            }
            if (fn) {
                // Add a progress sentinel to prevent the fx queue from being
                // automatically dequeued
                if (type === "fx") queue.unshift("inprogress");
                // Clear up the last queue stop function
                delete hooks.stop;
                fn.call(elem, next, hooks);
            }
            if (!startLength && hooks) hooks.empty.fire();
        },
        // Not public - generate a queueHooks object, or return the current one
        _queueHooks: function(elem, type) {
            var key = type + "queueHooks";
            return dataPriv.get(elem, key) || dataPriv.access(elem, key, {
                empty: jQuery.Callbacks("once memory").add(function() {
                    dataPriv.remove(elem, [
                        type + "queue",
                        key
                    ]);
                })
            });
        }
    });
    jQuery.fn.extend({
        queue: function(type, data) {
            var setter = 2;
            if (typeof type !== "string") {
                data = type;
                type = "fx";
                setter--;
            }
            if (arguments.length < setter) return jQuery.queue(this[0], type);
            return data === undefined ? this : this.each(function() {
                var queue = jQuery.queue(this, type, data);
                // Ensure a hooks for this queue
                jQuery._queueHooks(this, type);
                if (type === "fx" && queue[0] !== "inprogress") jQuery.dequeue(this, type);
            });
        },
        dequeue: function(type) {
            return this.each(function() {
                jQuery.dequeue(this, type);
            });
        },
        clearQueue: function(type) {
            return this.queue(type || "fx", []);
        },
        // Get a promise resolved when queues of a certain type
        // are emptied (fx is the type by default)
        promise: function(type, obj) {
            var tmp, count = 1, defer = jQuery.Deferred(), elements = this, i = this.length, resolve = function() {
                if (!--count) defer.resolveWith(elements, [
                    elements
                ]);
            };
            if (typeof type !== "string") {
                obj = type;
                type = undefined;
            }
            type = type || "fx";
            while(i--){
                tmp = dataPriv.get(elements[i], type + "queueHooks");
                if (tmp && tmp.empty) {
                    count++;
                    tmp.empty.add(resolve);
                }
            }
            resolve();
            return defer.promise(obj);
        }
    });
    var pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;
    var rcssNum = new RegExp("^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i");
    var cssExpand = [
        "Top",
        "Right",
        "Bottom",
        "Left"
    ];
    var documentElement = document1.documentElement;
    var isAttached = function(elem) {
        return jQuery.contains(elem.ownerDocument, elem);
    }, composed = {
        composed: true
    };
    // Support: IE 9 - 11+, Edge 12 - 18+, iOS 10.0 - 10.2 only
    // Check attachment across shadow DOM boundaries when possible (gh-3504)
    // Support: iOS 10.0-10.2 only
    // Early iOS 10 versions support `attachShadow` but not `getRootNode`,
    // leading to errors. We need to check for `getRootNode`.
    if (documentElement.getRootNode) isAttached = function(elem) {
        return jQuery.contains(elem.ownerDocument, elem) || elem.getRootNode(composed) === elem.ownerDocument;
    };
    var isHiddenWithinTree = function(elem, el) {
        // isHiddenWithinTree might be called from jQuery#filter function;
        // in that case, element will be second argument
        elem = el || elem;
        // Inline style trumps all
        return elem.style.display === "none" || elem.style.display === "" && // Otherwise, check computed style
        // Support: Firefox <=43 - 45
        // Disconnected elements can have computed display: none, so first confirm that elem is
        // in the document.
        isAttached(elem) && jQuery.css(elem, "display") === "none";
    };
    function adjustCSS(elem, prop, valueParts, tween) {
        var adjusted, scale, maxIterations = 20, currentValue = tween ? function() {
            return tween.cur();
        } : function() {
            return jQuery.css(elem, prop, "");
        }, initial = currentValue(), unit = valueParts && valueParts[3] || (jQuery.cssNumber[prop] ? "" : "px"), // Starting value computation is required for potential unit mismatches
        initialInUnit = elem.nodeType && (jQuery.cssNumber[prop] || unit !== "px" && +initial) && rcssNum.exec(jQuery.css(elem, prop));
        if (initialInUnit && initialInUnit[3] !== unit) {
            // Support: Firefox <=54
            // Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
            initial = initial / 2;
            // Trust units reported by jQuery.css
            unit = unit || initialInUnit[3];
            // Iteratively approximate from a nonzero starting point
            initialInUnit = +initial || 1;
            while(maxIterations--){
                // Evaluate and update our best guess (doubling guesses that zero out).
                // Finish if the scale equals or crosses 1 (making the old*new product non-positive).
                jQuery.style(elem, prop, initialInUnit + unit);
                if ((1 - scale) * (1 - (scale = currentValue() / initial || 0.5)) <= 0) maxIterations = 0;
                initialInUnit = initialInUnit / scale;
            }
            initialInUnit = initialInUnit * 2;
            jQuery.style(elem, prop, initialInUnit + unit);
            // Make sure we update the tween properties later on
            valueParts = valueParts || [];
        }
        if (valueParts) {
            initialInUnit = +initialInUnit || +initial || 0;
            // Apply relative offset (+=/-=) if specified
            adjusted = valueParts[1] ? initialInUnit + (valueParts[1] + 1) * valueParts[2] : +valueParts[2];
            if (tween) {
                tween.unit = unit;
                tween.start = initialInUnit;
                tween.end = adjusted;
            }
        }
        return adjusted;
    }
    var defaultDisplayMap = {
    };
    function getDefaultDisplay(elem) {
        var temp, doc = elem.ownerDocument, nodeName = elem.nodeName, display = defaultDisplayMap[nodeName];
        if (display) return display;
        temp = doc.body.appendChild(doc.createElement(nodeName));
        display = jQuery.css(temp, "display");
        temp.parentNode.removeChild(temp);
        if (display === "none") display = "block";
        defaultDisplayMap[nodeName] = display;
        return display;
    }
    function showHide(elements, show) {
        var display, elem, values = [], index = 0, length = elements.length;
        // Determine new display value for elements that need to change
        for(; index < length; index++){
            elem = elements[index];
            if (!elem.style) continue;
            display = elem.style.display;
            if (show) {
                // Since we force visibility upon cascade-hidden elements, an immediate (and slow)
                // check is required in this first loop unless we have a nonempty display value (either
                // inline or about-to-be-restored)
                if (display === "none") {
                    values[index] = dataPriv.get(elem, "display") || null;
                    if (!values[index]) elem.style.display = "";
                }
                if (elem.style.display === "" && isHiddenWithinTree(elem)) values[index] = getDefaultDisplay(elem);
            } else if (display !== "none") {
                values[index] = "none";
                // Remember what we're overwriting
                dataPriv.set(elem, "display", display);
            }
        }
        // Set the display of the elements in a second loop to avoid constant reflow
        for(index = 0; index < length; index++)if (values[index] != null) elements[index].style.display = values[index];
        return elements;
    }
    jQuery.fn.extend({
        show: function() {
            return showHide(this, true);
        },
        hide: function() {
            return showHide(this);
        },
        toggle: function(state) {
            if (typeof state === "boolean") return state ? this.show() : this.hide();
            return this.each(function() {
                if (isHiddenWithinTree(this)) jQuery(this).show();
                else jQuery(this).hide();
            });
        }
    });
    var rcheckableType = /^(?:checkbox|radio)$/i;
    var rtagName = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i;
    var rscriptType = /^$|^module$|\/(?:java|ecma)script/i;
    (function() {
        var fragment = document1.createDocumentFragment(), div = fragment.appendChild(document1.createElement("div")), input = document1.createElement("input");
        // Support: Android 4.0 - 4.3 only
        // Check state lost if the name is set (#11217)
        // Support: Windows Web Apps (WWA)
        // `name` and `type` must use .setAttribute for WWA (#14901)
        input.setAttribute("type", "radio");
        input.setAttribute("checked", "checked");
        input.setAttribute("name", "t");
        div.appendChild(input);
        // Support: Android <=4.1 only
        // Older WebKit doesn't clone checked state correctly in fragments
        support1.checkClone = div.cloneNode(true).cloneNode(true).lastChild.checked;
        // Support: IE <=11 only
        // Make sure textarea (and checkbox) defaultValue is properly cloned
        div.innerHTML = "<textarea>x</textarea>";
        support1.noCloneChecked = !!div.cloneNode(true).lastChild.defaultValue;
        // Support: IE <=9 only
        // IE <=9 replaces <option> tags with their contents when inserted outside of
        // the select element.
        div.innerHTML = "<option></option>";
        support1.option = !!div.lastChild;
    })();
    // We have to close these tags to support XHTML (#13200)
    var wrapMap = {
        // XHTML parsers do not magically insert elements in the
        // same way that tag soup parsers do. So we cannot shorten
        // this by omitting <tbody> or other required elements.
        thead: [
            1,
            "<table>",
            "</table>"
        ],
        col: [
            2,
            "<table><colgroup>",
            "</colgroup></table>"
        ],
        tr: [
            2,
            "<table><tbody>",
            "</tbody></table>"
        ],
        td: [
            3,
            "<table><tbody><tr>",
            "</tr></tbody></table>"
        ],
        _default: [
            0,
            "",
            ""
        ]
    };
    wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
    wrapMap.th = wrapMap.td;
    // Support: IE <=9 only
    if (!support1.option) wrapMap.optgroup = wrapMap.option = [
        1,
        "<select multiple='multiple'>",
        "</select>"
    ];
    function getAll(context, tag) {
        // Support: IE <=9 - 11 only
        // Use typeof to avoid zero-argument method invocation on host objects (#15151)
        var ret;
        if (typeof context.getElementsByTagName !== "undefined") ret = context.getElementsByTagName(tag || "*");
        else if (typeof context.querySelectorAll !== "undefined") ret = context.querySelectorAll(tag || "*");
        else ret = [];
        if (tag === undefined || tag && nodeName1(context, tag)) return jQuery.merge([
            context
        ], ret);
        return ret;
    }
    // Mark scripts as having already been evaluated
    function setGlobalEval(elems, refElements) {
        var i = 0, l = elems.length;
        for(; i < l; i++)dataPriv.set(elems[i], "globalEval", !refElements || dataPriv.get(refElements[i], "globalEval"));
    }
    var rhtml1 = /<|&#?\w+;/;
    function buildFragment(elems, context, scripts, selection, ignored) {
        var elem, tmp, tag, wrap, attached, j, fragment = context.createDocumentFragment(), nodes = [], i = 0, l = elems.length;
        for(; i < l; i++){
            elem = elems[i];
            if (elem || elem === 0) {
                // Add nodes directly
                if (toType(elem) === "object") // Support: Android <=4.0 only, PhantomJS 1 only
                // push.apply(_, arraylike) throws on ancient WebKit
                jQuery.merge(nodes, elem.nodeType ? [
                    elem
                ] : elem);
                else if (!rhtml1.test(elem)) nodes.push(context.createTextNode(elem));
                else {
                    tmp = tmp || fragment.appendChild(context.createElement("div"));
                    // Deserialize a standard representation
                    tag = (rtagName.exec(elem) || [
                        "",
                        ""
                    ])[1].toLowerCase();
                    wrap = wrapMap[tag] || wrapMap._default;
                    tmp.innerHTML = wrap[1] + jQuery.htmlPrefilter(elem) + wrap[2];
                    // Descend through wrappers to the right content
                    j = wrap[0];
                    while(j--)tmp = tmp.lastChild;
                    // Support: Android <=4.0 only, PhantomJS 1 only
                    // push.apply(_, arraylike) throws on ancient WebKit
                    jQuery.merge(nodes, tmp.childNodes);
                    // Remember the top-level container
                    tmp = fragment.firstChild;
                    // Ensure the created nodes are orphaned (#12392)
                    tmp.textContent = "";
                }
            }
        }
        // Remove wrapper from fragment
        fragment.textContent = "";
        i = 0;
        while(elem = nodes[i++]){
            // Skip elements already in the context collection (trac-4087)
            if (selection && jQuery.inArray(elem, selection) > -1) {
                if (ignored) ignored.push(elem);
                continue;
            }
            attached = isAttached(elem);
            // Append to fragment
            tmp = getAll(fragment.appendChild(elem), "script");
            // Preserve script evaluation history
            if (attached) setGlobalEval(tmp);
            // Capture executables
            if (scripts) {
                j = 0;
                while(elem = tmp[j++])if (rscriptType.test(elem.type || "")) scripts.push(elem);
            }
        }
        return fragment;
    }
    var rtypenamespace = /^([^.]*)(?:\.(.+)|)/;
    function returnTrue() {
        return true;
    }
    function returnFalse() {
        return false;
    }
    // Support: IE <=9 - 11+
    // focus() and blur() are asynchronous, except when they are no-op.
    // So expect focus to be synchronous when the element is already active,
    // and blur to be synchronous when the element is not already active.
    // (focus and blur are always synchronous in other supported browsers,
    // this just defines when we can count on it).
    function expectSync1(elem, type) {
        return elem === safeActiveElement() === (type === "focus");
    }
    // Support: IE <=9 only
    // Accessing document.activeElement can throw unexpectedly
    // https://bugs.jquery.com/ticket/13393
    function safeActiveElement() {
        try {
            return document1.activeElement;
        } catch (err) {
        }
    }
    function on(elem, types, selector, data, fn, one) {
        var origFn, type;
        // Types can be a map of types/handlers
        if (typeof types === "object") {
            // ( types-Object, selector, data )
            if (typeof selector !== "string") {
                // ( types-Object, data )
                data = data || selector;
                selector = undefined;
            }
            for(type in types)on(elem, type, selector, data, types[type], one);
            return elem;
        }
        if (data == null && fn == null) {
            // ( types, fn )
            fn = selector;
            data = selector = undefined;
        } else if (fn == null) {
            if (typeof selector === "string") {
                // ( types, selector, fn )
                fn = data;
                data = undefined;
            } else {
                // ( types, data, fn )
                fn = data;
                data = selector;
                selector = undefined;
            }
        }
        if (fn === false) fn = returnFalse;
        else if (!fn) return elem;
        if (one === 1) {
            origFn = fn;
            fn = function(event) {
                // Can use an empty set, since event contains the info
                jQuery().off(event);
                return origFn.apply(this, arguments);
            };
            // Use same guid so caller can remove using origFn
            fn.guid = origFn.guid || (origFn.guid = jQuery.guid++);
        }
        return elem.each(function() {
            jQuery.event.add(this, types, fn, data, selector);
        });
    }
    /*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */ jQuery.event = {
        global: {
        },
        add: function(elem, types, handler, data, selector) {
            var handleObjIn, eventHandle, tmp, events, t, handleObj, special, handlers, type, namespaces, origType, elemData = dataPriv.get(elem);
            // Only attach events to objects that accept data
            if (!acceptData(elem)) return;
            // Caller can pass in an object of custom data in lieu of the handler
            if (handler.handler) {
                handleObjIn = handler;
                handler = handleObjIn.handler;
                selector = handleObjIn.selector;
            }
            // Ensure that invalid selectors throw exceptions at attach time
            // Evaluate against documentElement in case elem is a non-element node (e.g., document)
            if (selector) jQuery.find.matchesSelector(documentElement, selector);
            // Make sure that the handler has a unique ID, used to find/remove it later
            if (!handler.guid) handler.guid = jQuery.guid++;
            // Init the element's event structure and main handler, if this is the first
            if (!(events = elemData.events)) events = elemData.events = Object.create(null);
            if (!(eventHandle = elemData.handle)) eventHandle = elemData.handle = function(e) {
                // Discard the second event of a jQuery.event.trigger() and
                // when an event is called after a page has unloaded
                return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ? jQuery.event.dispatch.apply(elem, arguments) : undefined;
            };
            // Handle multiple events separated by a space
            types = (types || "").match(rnothtmlwhite) || [
                ""
            ];
            t = types.length;
            while(t--){
                tmp = rtypenamespace.exec(types[t]) || [];
                type = origType = tmp[1];
                namespaces = (tmp[2] || "").split(".").sort();
                // There *must* be a type, no attaching namespace-only handlers
                if (!type) continue;
                // If event changes its type, use the special event handlers for the changed type
                special = jQuery.event.special[type] || {
                };
                // If selector defined, determine special event api type, otherwise given type
                type = (selector ? special.delegateType : special.bindType) || type;
                // Update special based on newly reset type
                special = jQuery.event.special[type] || {
                };
                // handleObj is passed to all event handlers
                handleObj = jQuery.extend({
                    type: type,
                    origType: origType,
                    data: data,
                    handler: handler,
                    guid: handler.guid,
                    selector: selector,
                    needsContext: selector && jQuery.expr.match.needsContext.test(selector),
                    namespace: namespaces.join(".")
                }, handleObjIn);
                // Init the event handler queue if we're the first
                if (!(handlers = events[type])) {
                    handlers = events[type] = [];
                    handlers.delegateCount = 0;
                    // Only use addEventListener if the special events handler returns false
                    if (!special.setup || special.setup.call(elem, data, namespaces, eventHandle) === false) {
                        if (elem.addEventListener) elem.addEventListener(type, eventHandle);
                    }
                }
                if (special.add) {
                    special.add.call(elem, handleObj);
                    if (!handleObj.handler.guid) handleObj.handler.guid = handler.guid;
                }
                // Add to the element's handler list, delegates in front
                if (selector) handlers.splice(handlers.delegateCount++, 0, handleObj);
                else handlers.push(handleObj);
                // Keep track of which events have ever been used, for event optimization
                jQuery.event.global[type] = true;
            }
        },
        // Detach an event or set of events from an element
        remove: function(elem, types, handler, selector, mappedTypes) {
            var j, origCount, tmp, events, t, handleObj, special, handlers, type, namespaces, origType, elemData = dataPriv.hasData(elem) && dataPriv.get(elem);
            if (!elemData || !(events = elemData.events)) return;
            // Once for each type.namespace in types; type may be omitted
            types = (types || "").match(rnothtmlwhite) || [
                ""
            ];
            t = types.length;
            while(t--){
                tmp = rtypenamespace.exec(types[t]) || [];
                type = origType = tmp[1];
                namespaces = (tmp[2] || "").split(".").sort();
                // Unbind all events (on this namespace, if provided) for the element
                if (!type) {
                    for(type in events)jQuery.event.remove(elem, type + types[t], handler, selector, true);
                    continue;
                }
                special = jQuery.event.special[type] || {
                };
                type = (selector ? special.delegateType : special.bindType) || type;
                handlers = events[type] || [];
                tmp = tmp[2] && new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)");
                // Remove matching events
                origCount = j = handlers.length;
                while(j--){
                    handleObj = handlers[j];
                    if ((mappedTypes || origType === handleObj.origType) && (!handler || handler.guid === handleObj.guid) && (!tmp || tmp.test(handleObj.namespace)) && (!selector || selector === handleObj.selector || selector === "**" && handleObj.selector)) {
                        handlers.splice(j, 1);
                        if (handleObj.selector) handlers.delegateCount--;
                        if (special.remove) special.remove.call(elem, handleObj);
                    }
                }
                // Remove generic event handler if we removed something and no more handlers exist
                // (avoids potential for endless recursion during removal of special event handlers)
                if (origCount && !handlers.length) {
                    if (!special.teardown || special.teardown.call(elem, namespaces, elemData.handle) === false) jQuery.removeEvent(elem, type, elemData.handle);
                    delete events[type];
                }
            }
            // Remove data and the expando if it's no longer used
            if (jQuery.isEmptyObject(events)) dataPriv.remove(elem, "handle events");
        },
        dispatch: function(nativeEvent) {
            var i, j, ret, matched, handleObj, handlerQueue, args = new Array(arguments.length), // Make a writable jQuery.Event from the native event object
            event = jQuery.event.fix(nativeEvent), handlers = (dataPriv.get(this, "events") || Object.create(null))[event.type] || [], special = jQuery.event.special[event.type] || {
            };
            // Use the fix-ed jQuery.Event rather than the (read-only) native event
            args[0] = event;
            for(i = 1; i < arguments.length; i++)args[i] = arguments[i];
            event.delegateTarget = this;
            // Call the preDispatch hook for the mapped type, and let it bail if desired
            if (special.preDispatch && special.preDispatch.call(this, event) === false) return;
            // Determine handlers
            handlerQueue = jQuery.event.handlers.call(this, event, handlers);
            // Run delegates first; they may want to stop propagation beneath us
            i = 0;
            while((matched = handlerQueue[i++]) && !event.isPropagationStopped()){
                event.currentTarget = matched.elem;
                j = 0;
                while((handleObj = matched.handlers[j++]) && !event.isImmediatePropagationStopped())// If the event is namespaced, then each handler is only invoked if it is
                // specially universal or its namespaces are a superset of the event's.
                if (!event.rnamespace || handleObj.namespace === false || event.rnamespace.test(handleObj.namespace)) {
                    event.handleObj = handleObj;
                    event.data = handleObj.data;
                    ret = ((jQuery.event.special[handleObj.origType] || {
                    }).handle || handleObj.handler).apply(matched.elem, args);
                    if (ret !== undefined) {
                        if ((event.result = ret) === false) {
                            event.preventDefault();
                            event.stopPropagation();
                        }
                    }
                }
            }
            // Call the postDispatch hook for the mapped type
            if (special.postDispatch) special.postDispatch.call(this, event);
            return event.result;
        },
        handlers: function(event, handlers) {
            var i, handleObj, sel, matchedHandlers, matchedSelectors, handlerQueue = [], delegateCount = handlers.delegateCount, cur = event.target;
            // Find delegate handlers
            if (delegateCount && // Support: IE <=9
            // Black-hole SVG <use> instance trees (trac-13180)
            cur.nodeType && // Support: Firefox <=42
            // Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
            // https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
            // Support: IE 11 only
            // ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
            !(event.type === "click" && event.button >= 1)) {
                for(; cur !== this; cur = cur.parentNode || this)// Don't check non-elements (#13208)
                // Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
                if (cur.nodeType === 1 && !(event.type === "click" && cur.disabled === true)) {
                    matchedHandlers = [];
                    matchedSelectors = {
                    };
                    for(i = 0; i < delegateCount; i++){
                        handleObj = handlers[i];
                        // Don't conflict with Object.prototype properties (#13203)
                        sel = handleObj.selector + " ";
                        if (matchedSelectors[sel] === undefined) matchedSelectors[sel] = handleObj.needsContext ? jQuery(sel, this).index(cur) > -1 : jQuery.find(sel, this, null, [
                            cur
                        ]).length;
                        if (matchedSelectors[sel]) matchedHandlers.push(handleObj);
                    }
                    if (matchedHandlers.length) handlerQueue.push({
                        elem: cur,
                        handlers: matchedHandlers
                    });
                }
            }
            // Add the remaining (directly-bound) handlers
            cur = this;
            if (delegateCount < handlers.length) handlerQueue.push({
                elem: cur,
                handlers: handlers.slice(delegateCount)
            });
            return handlerQueue;
        },
        addProp: function(name, hook) {
            Object.defineProperty(jQuery.Event.prototype, name, {
                enumerable: true,
                configurable: true,
                get: isFunction(hook) ? function() {
                    if (this.originalEvent) return hook(this.originalEvent);
                } : function() {
                    if (this.originalEvent) return this.originalEvent[name];
                },
                set: function(value) {
                    Object.defineProperty(this, name, {
                        enumerable: true,
                        configurable: true,
                        writable: true,
                        value: value
                    });
                }
            });
        },
        fix: function(originalEvent) {
            return originalEvent[jQuery.expando] ? originalEvent : new jQuery.Event(originalEvent);
        },
        special: {
            load: {
                // Prevent triggered image.load events from bubbling to window.load
                noBubble: true
            },
            click: {
                // Utilize native event to ensure correct state for checkable inputs
                setup: function(data) {
                    // For mutual compressibility with _default, replace `this` access with a local var.
                    // `|| data` is dead code meant only to preserve the variable through minification.
                    var el = this || data;
                    // Claim the first handler
                    if (rcheckableType.test(el.type) && el.click && nodeName1(el, "input")) // dataPriv.set( el, "click", ... )
                    leverageNative(el, "click", returnTrue);
                    // Return false to allow normal processing in the caller
                    return false;
                },
                trigger: function(data) {
                    // For mutual compressibility with _default, replace `this` access with a local var.
                    // `|| data` is dead code meant only to preserve the variable through minification.
                    var el = this || data;
                    // Force setup before triggering a click
                    if (rcheckableType.test(el.type) && el.click && nodeName1(el, "input")) leverageNative(el, "click");
                    // Return non-false to allow normal event-path propagation
                    return true;
                },
                // For cross-browser consistency, suppress native .click() on links
                // Also prevent it if we're currently inside a leveraged native-event stack
                _default: function(event) {
                    var target = event.target;
                    return rcheckableType.test(target.type) && target.click && nodeName1(target, "input") && dataPriv.get(target, "click") || nodeName1(target, "a");
                }
            },
            beforeunload: {
                postDispatch: function(event) {
                    // Support: Firefox 20+
                    // Firefox doesn't alert if the returnValue field is not set.
                    if (event.result !== undefined && event.originalEvent) event.originalEvent.returnValue = event.result;
                }
            }
        }
    };
    // Ensure the presence of an event listener that handles manually-triggered
    // synthetic events by interrupting progress until reinvoked in response to
    // *native* events that it fires directly, ensuring that state changes have
    // already occurred before other listeners are invoked.
    function leverageNative(el, type, expectSync) {
        // Missing expectSync indicates a trigger call, which must force setup through jQuery.event.add
        if (!expectSync) {
            if (dataPriv.get(el, type) === undefined) jQuery.event.add(el, type, returnTrue);
            return;
        }
        // Register the controller as a special universal handler for all event namespaces
        dataPriv.set(el, type, false);
        jQuery.event.add(el, type, {
            namespace: false,
            handler: function(event) {
                var notAsync, result, saved = dataPriv.get(this, type);
                if (event.isTrigger & 1 && this[type]) {
                    // Interrupt processing of the outer synthetic .trigger()ed event
                    // Saved data should be false in such cases, but might be a leftover capture object
                    // from an async native handler (gh-4350)
                    if (!saved.length) {
                        // Store arguments for use when handling the inner native event
                        // There will always be at least one argument (an event object), so this array
                        // will not be confused with a leftover capture object.
                        saved = slice1.call(arguments);
                        dataPriv.set(this, type, saved);
                        // Trigger the native event and capture its result
                        // Support: IE <=9 - 11+
                        // focus() and blur() are asynchronous
                        notAsync = expectSync(this, type);
                        this[type]();
                        result = dataPriv.get(this, type);
                        if (saved !== result || notAsync) dataPriv.set(this, type, false);
                        else result = {
                        };
                        if (saved !== result) {
                            // Cancel the outer synthetic event
                            event.stopImmediatePropagation();
                            event.preventDefault();
                            // Support: Chrome 86+
                            // In Chrome, if an element having a focusout handler is blurred by
                            // clicking outside of it, it invokes the handler synchronously. If
                            // that handler calls `.remove()` on the element, the data is cleared,
                            // leaving `result` undefined. We need to guard against this.
                            return result && result.value;
                        }
                    // If this is an inner synthetic event for an event with a bubbling surrogate
                    // (focus or blur), assume that the surrogate already propagated from triggering the
                    // native event and prevent that from happening again here.
                    // This technically gets the ordering wrong w.r.t. to `.trigger()` (in which the
                    // bubbling surrogate propagates *after* the non-bubbling base), but that seems
                    // less bad than duplication.
                    } else if ((jQuery.event.special[type] || {
                    }).delegateType) event.stopPropagation();
                // If this is a native event triggered above, everything is now in order
                // Fire an inner synthetic event with the original arguments
                } else if (saved.length) {
                    // ...and capture the result
                    dataPriv.set(this, type, {
                        value: jQuery.event.trigger(// Support: IE <=9 - 11+
                        // Extend with the prototype to reset the above stopImmediatePropagation()
                        jQuery.extend(saved[0], jQuery.Event.prototype), saved.slice(1), this)
                    });
                    // Abort handling of the native event
                    event.stopImmediatePropagation();
                }
            }
        });
    }
    jQuery.removeEvent = function(elem, type, handle) {
        // This "if" is needed for plain objects
        if (elem.removeEventListener) elem.removeEventListener(type, handle);
    };
    jQuery.Event = function(src, props) {
        // Allow instantiation without the 'new' keyword
        if (!(this instanceof jQuery.Event)) return new jQuery.Event(src, props);
        // Event object
        if (src && src.type) {
            this.originalEvent = src;
            this.type = src.type;
            // Events bubbling up the document may have been marked as prevented
            // by a handler lower down the tree; reflect the correct value.
            this.isDefaultPrevented = src.defaultPrevented || src.defaultPrevented === undefined && // Support: Android <=2.3 only
            src.returnValue === false ? returnTrue : returnFalse;
            // Create target properties
            // Support: Safari <=6 - 7 only
            // Target should not be a text node (#504, #13143)
            this.target = src.target && src.target.nodeType === 3 ? src.target.parentNode : src.target;
            this.currentTarget = src.currentTarget;
            this.relatedTarget = src.relatedTarget;
        // Event type
        } else this.type = src;
        // Put explicitly provided properties onto the event object
        if (props) jQuery.extend(this, props);
        // Create a timestamp if incoming event doesn't have one
        this.timeStamp = src && src.timeStamp || Date.now();
        // Mark it as fixed
        this[jQuery.expando] = true;
    };
    // jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
    // https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
    jQuery.Event.prototype = {
        constructor: jQuery.Event,
        isDefaultPrevented: returnFalse,
        isPropagationStopped: returnFalse,
        isImmediatePropagationStopped: returnFalse,
        isSimulated: false,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = returnTrue;
            if (e && !this.isSimulated) e.preventDefault();
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = returnTrue;
            if (e && !this.isSimulated) e.stopPropagation();
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = returnTrue;
            if (e && !this.isSimulated) e.stopImmediatePropagation();
            this.stopPropagation();
        }
    };
    // Includes all common event props including KeyEvent and MouseEvent specific props
    jQuery.each({
        altKey: true,
        bubbles: true,
        cancelable: true,
        changedTouches: true,
        ctrlKey: true,
        detail: true,
        eventPhase: true,
        metaKey: true,
        pageX: true,
        pageY: true,
        shiftKey: true,
        view: true,
        "char": true,
        code: true,
        charCode: true,
        key: true,
        keyCode: true,
        button: true,
        buttons: true,
        clientX: true,
        clientY: true,
        offsetX: true,
        offsetY: true,
        pointerId: true,
        pointerType: true,
        screenX: true,
        screenY: true,
        targetTouches: true,
        toElement: true,
        touches: true,
        which: true
    }, jQuery.event.addProp);
    jQuery.each({
        focus: "focusin",
        blur: "focusout"
    }, function(type, delegateType) {
        jQuery.event.special[type] = {
            // Utilize native event if possible so blur/focus sequence is correct
            setup: function() {
                // Claim the first handler
                // dataPriv.set( this, "focus", ... )
                // dataPriv.set( this, "blur", ... )
                leverageNative(this, type, expectSync1);
                // Return false to allow normal processing in the caller
                return false;
            },
            trigger: function() {
                // Force setup before trigger
                leverageNative(this, type);
                // Return non-false to allow normal event-path propagation
                return true;
            },
            // Suppress native focus or blur as it's already being fired
            // in leverageNative.
            _default: function() {
                return true;
            },
            delegateType: delegateType
        };
    });
    // Create mouseenter/leave events using mouseover/out and event-time checks
    // so that event delegation works in jQuery.
    // Do the same for pointerenter/pointerleave and pointerover/pointerout
    //
    // Support: Safari 7 only
    // Safari sends mouseenter too often; see:
    // https://bugs.chromium.org/p/chromium/issues/detail?id=470258
    // for the description of the bug (it existed in older Chrome versions as well).
    jQuery.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(orig, fix) {
        jQuery.event.special[orig] = {
            delegateType: fix,
            bindType: fix,
            handle: function(event) {
                var ret, target = this, related = event.relatedTarget, handleObj = event.handleObj;
                // For mouseenter/leave call the handler if related is outside the target.
                // NB: No relatedTarget if the mouse left/entered the browser window
                if (!related || related !== target && !jQuery.contains(target, related)) {
                    event.type = handleObj.origType;
                    ret = handleObj.handler.apply(this, arguments);
                    event.type = fix;
                }
                return ret;
            }
        };
    });
    jQuery.fn.extend({
        on: function(types, selector, data, fn) {
            return on(this, types, selector, data, fn);
        },
        one: function(types, selector, data, fn) {
            return on(this, types, selector, data, fn, 1);
        },
        off: function(types, selector, fn) {
            var handleObj, type;
            if (types && types.preventDefault && types.handleObj) {
                // ( event )  dispatched jQuery.Event
                handleObj = types.handleObj;
                jQuery(types.delegateTarget).off(handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType, handleObj.selector, handleObj.handler);
                return this;
            }
            if (typeof types === "object") {
                // ( types-object [, selector] )
                for(type in types)this.off(type, selector, types[type]);
                return this;
            }
            if (selector === false || typeof selector === "function") {
                // ( types [, fn] )
                fn = selector;
                selector = undefined;
            }
            if (fn === false) fn = returnFalse;
            return this.each(function() {
                jQuery.event.remove(this, types, fn, selector);
            });
        }
    });
    var // Support: IE <=10 - 11, Edge 12 - 13 only
    // In IE/Edge using regex groups here causes severe slowdowns.
    // See https://connect.microsoft.com/IE/feedback/details/1736512/
    rnoInnerhtml = /<script|<style|<link/i, // checked="checked" or checked
    rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i, rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    // Prefer a tbody over its parent table for containing new rows
    function manipulationTarget(elem, content) {
        if (nodeName1(elem, "table") && nodeName1(content.nodeType !== 11 ? content : content.firstChild, "tr")) return jQuery(elem).children("tbody")[0] || elem;
        return elem;
    }
    // Replace/restore the type attribute of script elements for safe DOM manipulation
    function disableScript(elem) {
        elem.type = (elem.getAttribute("type") !== null) + "/" + elem.type;
        return elem;
    }
    function restoreScript(elem) {
        if ((elem.type || "").slice(0, 5) === "true/") elem.type = elem.type.slice(5);
        else elem.removeAttribute("type");
        return elem;
    }
    function cloneCopyEvent(src, dest) {
        var i, l, type, pdataOld, udataOld, udataCur, events;
        if (dest.nodeType !== 1) return;
        // 1. Copy private data: events, handlers, etc.
        if (dataPriv.hasData(src)) {
            pdataOld = dataPriv.get(src);
            events = pdataOld.events;
            if (events) {
                dataPriv.remove(dest, "handle events");
                for(type in events)for(i = 0, l = events[type].length; i < l; i++)jQuery.event.add(dest, type, events[type][i]);
            }
        }
        // 2. Copy user data
        if (dataUser.hasData(src)) {
            udataOld = dataUser.access(src);
            udataCur = jQuery.extend({
            }, udataOld);
            dataUser.set(dest, udataCur);
        }
    }
    // Fix IE bugs, see support tests
    function fixInput(src, dest) {
        var nodeName = dest.nodeName.toLowerCase();
        // Fails to persist the checked state of a cloned checkbox or radio button.
        if (nodeName === "input" && rcheckableType.test(src.type)) dest.checked = src.checked;
        else if (nodeName === "input" || nodeName === "textarea") dest.defaultValue = src.defaultValue;
    }
    function domManip(collection, args, callback, ignored) {
        // Flatten any nested arrays
        args = flat(args);
        var fragment, first, scripts, hasScripts, node, doc, i = 0, l = collection.length, iNoClone = l - 1, value = args[0], valueIsFunction = isFunction(value);
        // We can't cloneNode fragments that contain checked, in WebKit
        if (valueIsFunction || l > 1 && typeof value === "string" && !support1.checkClone && rchecked.test(value)) return collection.each(function(index) {
            var self = collection.eq(index);
            if (valueIsFunction) args[0] = value.call(this, index, self.html());
            domManip(self, args, callback, ignored);
        });
        if (l) {
            fragment = buildFragment(args, collection[0].ownerDocument, false, collection, ignored);
            first = fragment.firstChild;
            if (fragment.childNodes.length === 1) fragment = first;
            // Require either new content or an interest in ignored elements to invoke the callback
            if (first || ignored) {
                scripts = jQuery.map(getAll(fragment, "script"), disableScript);
                hasScripts = scripts.length;
                // Use the original fragment for the last item
                // instead of the first because it can end up
                // being emptied incorrectly in certain situations (#8070).
                for(; i < l; i++){
                    node = fragment;
                    if (i !== iNoClone) {
                        node = jQuery.clone(node, true, true);
                        // Keep references to cloned scripts for later restoration
                        if (hasScripts) // Support: Android <=4.0 only, PhantomJS 1 only
                        // push.apply(_, arraylike) throws on ancient WebKit
                        jQuery.merge(scripts, getAll(node, "script"));
                    }
                    callback.call(collection[i], node, i);
                }
                if (hasScripts) {
                    doc = scripts[scripts.length - 1].ownerDocument;
                    // Reenable scripts
                    jQuery.map(scripts, restoreScript);
                    // Evaluate executable scripts on first document insertion
                    for(i = 0; i < hasScripts; i++){
                        node = scripts[i];
                        if (rscriptType.test(node.type || "") && !dataPriv.access(node, "globalEval") && jQuery.contains(doc, node)) {
                            if (node.src && (node.type || "").toLowerCase() !== "module") // Optional AJAX dependency, but won't run scripts if not present
                            {
                                if (jQuery._evalUrl && !node.noModule) jQuery._evalUrl(node.src, {
                                    nonce: node.nonce || node.getAttribute("nonce")
                                }, doc);
                            } else DOMEval(node.textContent.replace(rcleanScript, ""), node, doc);
                        }
                    }
                }
            }
        }
        return collection;
    }
    function remove(elem, selector, keepData) {
        var node, nodes = selector ? jQuery.filter(selector, elem) : elem, i = 0;
        for(; (node = nodes[i]) != null; i++){
            if (!keepData && node.nodeType === 1) jQuery.cleanData(getAll(node));
            if (node.parentNode) {
                if (keepData && isAttached(node)) setGlobalEval(getAll(node, "script"));
                node.parentNode.removeChild(node);
            }
        }
        return elem;
    }
    jQuery.extend({
        htmlPrefilter: function(html) {
            return html;
        },
        clone: function(elem, dataAndEvents, deepDataAndEvents) {
            var i, l, srcElements, destElements, clone = elem.cloneNode(true), inPage = isAttached(elem);
            // Fix IE cloning issues
            if (!support1.noCloneChecked && (elem.nodeType === 1 || elem.nodeType === 11) && !jQuery.isXMLDoc(elem)) {
                // We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
                destElements = getAll(clone);
                srcElements = getAll(elem);
                for(i = 0, l = srcElements.length; i < l; i++)fixInput(srcElements[i], destElements[i]);
            }
            // Copy the events from the original to the clone
            if (dataAndEvents) {
                if (deepDataAndEvents) {
                    srcElements = srcElements || getAll(elem);
                    destElements = destElements || getAll(clone);
                    for(i = 0, l = srcElements.length; i < l; i++)cloneCopyEvent(srcElements[i], destElements[i]);
                } else cloneCopyEvent(elem, clone);
            }
            // Preserve script evaluation history
            destElements = getAll(clone, "script");
            if (destElements.length > 0) setGlobalEval(destElements, !inPage && getAll(elem, "script"));
            // Return the cloned set
            return clone;
        },
        cleanData: function(elems) {
            var data, elem, type, special = jQuery.event.special, i = 0;
            for(; (elem = elems[i]) !== undefined; i++)if (acceptData(elem)) {
                if (data = elem[dataPriv.expando]) {
                    if (data.events) {
                        for(type in data.events)if (special[type]) jQuery.event.remove(elem, type);
                        else jQuery.removeEvent(elem, type, data.handle);
                    }
                    // Support: Chrome <=35 - 45+
                    // Assign undefined instead of using delete, see Data#remove
                    elem[dataPriv.expando] = undefined;
                }
                if (elem[dataUser.expando]) // Support: Chrome <=35 - 45+
                // Assign undefined instead of using delete, see Data#remove
                elem[dataUser.expando] = undefined;
            }
        }
    });
    jQuery.fn.extend({
        detach: function(selector) {
            return remove(this, selector, true);
        },
        remove: function(selector) {
            return remove(this, selector);
        },
        text: function(value4) {
            return access(this, function(value) {
                return value === undefined ? jQuery.text(this) : this.empty().each(function() {
                    if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) this.textContent = value;
                });
            }, null, value4, arguments.length);
        },
        append: function() {
            return domManip(this, arguments, function(elem) {
                if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                    var target = manipulationTarget(this, elem);
                    target.appendChild(elem);
                }
            });
        },
        prepend: function() {
            return domManip(this, arguments, function(elem) {
                if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                    var target = manipulationTarget(this, elem);
                    target.insertBefore(elem, target.firstChild);
                }
            });
        },
        before: function() {
            return domManip(this, arguments, function(elem) {
                if (this.parentNode) this.parentNode.insertBefore(elem, this);
            });
        },
        after: function() {
            return domManip(this, arguments, function(elem) {
                if (this.parentNode) this.parentNode.insertBefore(elem, this.nextSibling);
            });
        },
        empty: function() {
            var elem, i = 0;
            for(; (elem = this[i]) != null; i++)if (elem.nodeType === 1) {
                // Prevent memory leaks
                jQuery.cleanData(getAll(elem, false));
                // Remove any remaining nodes
                elem.textContent = "";
            }
            return this;
        },
        clone: function(dataAndEvents, deepDataAndEvents) {
            dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
            deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;
            return this.map(function() {
                return jQuery.clone(this, dataAndEvents, deepDataAndEvents);
            });
        },
        html: function(value5) {
            return access(this, function(value) {
                var elem = this[0] || {
                }, i = 0, l = this.length;
                if (value === undefined && elem.nodeType === 1) return elem.innerHTML;
                // See if we can take a shortcut and just use innerHTML
                if (typeof value === "string" && !rnoInnerhtml.test(value) && !wrapMap[(rtagName.exec(value) || [
                    "",
                    ""
                ])[1].toLowerCase()]) {
                    value = jQuery.htmlPrefilter(value);
                    try {
                        for(; i < l; i++){
                            elem = this[i] || {
                            };
                            // Remove element nodes and prevent memory leaks
                            if (elem.nodeType === 1) {
                                jQuery.cleanData(getAll(elem, false));
                                elem.innerHTML = value;
                            }
                        }
                        elem = 0;
                    // If using innerHTML throws an exception, use the fallback method
                    } catch (e) {
                    }
                }
                if (elem) this.empty().append(value);
            }, null, value5, arguments.length);
        },
        replaceWith: function() {
            var ignored = [];
            // Make the changes, replacing each non-ignored context element with the new content
            return domManip(this, arguments, function(elem) {
                var parent = this.parentNode;
                if (jQuery.inArray(this, ignored) < 0) {
                    jQuery.cleanData(getAll(this));
                    if (parent) parent.replaceChild(elem, this);
                }
            // Force callback invocation
            }, ignored);
        }
    });
    jQuery.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(name, original) {
        jQuery.fn[name] = function(selector) {
            var elems, ret = [], insert = jQuery(selector), last = insert.length - 1, i = 0;
            for(; i <= last; i++){
                elems = i === last ? this : this.clone(true);
                jQuery(insert[i])[original](elems);
                // Support: Android <=4.0 only, PhantomJS 1 only
                // .get() because push.apply(_, arraylike) throws on ancient WebKit
                push1.apply(ret, elems.get());
            }
            return this.pushStack(ret);
        };
    });
    var rnumnonpx = new RegExp("^(" + pnum + ")(?!px)[a-z%]+$", "i");
    var getStyles = function(elem) {
        // Support: IE <=11 only, Firefox <=30 (#15098, #14150)
        // IE throws on elements created in popups
        // FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
        var view = elem.ownerDocument.defaultView;
        if (!view || !view.opener) view = window1;
        return view.getComputedStyle(elem);
    };
    var swap = function(elem, options, callback) {
        var ret, name, old = {
        };
        // Remember the old values, and insert the new ones
        for(name in options){
            old[name] = elem.style[name];
            elem.style[name] = options[name];
        }
        ret = callback.call(elem);
        // Revert the old values
        for(name in options)elem.style[name] = old[name];
        return ret;
    };
    var rboxStyle = new RegExp(cssExpand.join("|"), "i");
    (function() {
        // Executing both pixelPosition & boxSizingReliable tests require only one layout
        // so they're executed at the same time to save the second computation.
        function computeStyleTests() {
            // This is a singleton, we need to execute it only once
            if (!div) return;
            container.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0";
            div.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%";
            documentElement.appendChild(container).appendChild(div);
            var divStyle = window1.getComputedStyle(div);
            pixelPositionVal = divStyle.top !== "1%";
            // Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
            reliableMarginLeftVal = roundPixelMeasures(divStyle.marginLeft) === 12;
            // Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
            // Some styles come back with percentage values, even though they shouldn't
            div.style.right = "60%";
            pixelBoxStylesVal = roundPixelMeasures(divStyle.right) === 36;
            // Support: IE 9 - 11 only
            // Detect misreporting of content dimensions for box-sizing:border-box elements
            boxSizingReliableVal = roundPixelMeasures(divStyle.width) === 36;
            // Support: IE 9 only
            // Detect overflow:scroll screwiness (gh-3699)
            // Support: Chrome <=64
            // Don't get tricked when zoom affects offsetWidth (gh-4029)
            div.style.position = "absolute";
            scrollboxSizeVal = roundPixelMeasures(div.offsetWidth / 3) === 12;
            documentElement.removeChild(container);
            // Nullify the div so it wouldn't be stored in the memory and
            // it will also be a sign that checks already performed
            div = null;
        }
        function roundPixelMeasures(measure) {
            return Math.round(parseFloat(measure));
        }
        var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal, reliableTrDimensionsVal, reliableMarginLeftVal, container = document1.createElement("div"), div = document1.createElement("div");
        // Finish early in limited (non-browser) environments
        if (!div.style) return;
        // Support: IE <=9 - 11 only
        // Style of cloned element affects source element cloned (#8908)
        div.style.backgroundClip = "content-box";
        div.cloneNode(true).style.backgroundClip = "";
        support1.clearCloneStyle = div.style.backgroundClip === "content-box";
        jQuery.extend(support1, {
            boxSizingReliable: function() {
                computeStyleTests();
                return boxSizingReliableVal;
            },
            pixelBoxStyles: function() {
                computeStyleTests();
                return pixelBoxStylesVal;
            },
            pixelPosition: function() {
                computeStyleTests();
                return pixelPositionVal;
            },
            reliableMarginLeft: function() {
                computeStyleTests();
                return reliableMarginLeftVal;
            },
            scrollboxSize: function() {
                computeStyleTests();
                return scrollboxSizeVal;
            },
            // Support: IE 9 - 11+, Edge 15 - 18+
            // IE/Edge misreport `getComputedStyle` of table rows with width/height
            // set in CSS while `offset*` properties report correct values.
            // Behavior in IE 9 is more subtle than in newer versions & it passes
            // some versions of this test; make sure not to make it pass there!
            //
            // Support: Firefox 70+
            // Only Firefox includes border widths
            // in computed dimensions. (gh-4529)
            reliableTrDimensions: function() {
                var table, tr, trChild, trStyle;
                if (reliableTrDimensionsVal == null) {
                    table = document1.createElement("table");
                    tr = document1.createElement("tr");
                    trChild = document1.createElement("div");
                    table.style.cssText = "position:absolute;left:-11111px;border-collapse:separate";
                    tr.style.cssText = "border:1px solid";
                    // Support: Chrome 86+
                    // Height set through cssText does not get applied.
                    // Computed height then comes back as 0.
                    tr.style.height = "1px";
                    trChild.style.height = "9px";
                    // Support: Android 8 Chrome 86+
                    // In our bodyBackground.html iframe,
                    // display for all div elements is set to "inline",
                    // which causes a problem only in Android 8 Chrome 86.
                    // Ensuring the div is display: block
                    // gets around this issue.
                    trChild.style.display = "block";
                    documentElement.appendChild(table).appendChild(tr).appendChild(trChild);
                    trStyle = window1.getComputedStyle(tr);
                    reliableTrDimensionsVal = parseInt(trStyle.height, 10) + parseInt(trStyle.borderTopWidth, 10) + parseInt(trStyle.borderBottomWidth, 10) === tr.offsetHeight;
                    documentElement.removeChild(table);
                }
                return reliableTrDimensionsVal;
            }
        });
    })();
    function curCSS(elem, name, computed) {
        var width, minWidth, maxWidth, ret, // Support: Firefox 51+
        // Retrieving style before computed somehow
        // fixes an issue with getting wrong values
        // on detached elements
        style = elem.style;
        computed = computed || getStyles(elem);
        // getPropertyValue is needed for:
        //   .css('filter') (IE 9 only, #12537)
        //   .css('--customProperty) (#3144)
        if (computed) {
            ret = computed.getPropertyValue(name) || computed[name];
            if (ret === "" && !isAttached(elem)) ret = jQuery.style(elem, name);
            // A tribute to the "awesome hack by Dean Edwards"
            // Android Browser returns percentage for some values,
            // but width seems to be reliably pixels.
            // This is against the CSSOM draft spec:
            // https://drafts.csswg.org/cssom/#resolved-values
            if (!support1.pixelBoxStyles() && rnumnonpx.test(ret) && rboxStyle.test(name)) {
                // Remember the original values
                width = style.width;
                minWidth = style.minWidth;
                maxWidth = style.maxWidth;
                // Put in the new values to get a computed value out
                style.minWidth = style.maxWidth = style.width = ret;
                ret = computed.width;
                // Revert the changed values
                style.width = width;
                style.minWidth = minWidth;
                style.maxWidth = maxWidth;
            }
        }
        return ret !== undefined ? // Support: IE <=9 - 11 only
        // IE returns zIndex value as an integer.
        ret + "" : ret;
    }
    function addGetHookIf(conditionFn, hookFn) {
        // Define the hook, we'll check on the first run if it's really needed.
        return {
            get: function() {
                if (conditionFn()) {
                    // Hook not needed (or it's not possible to use it due
                    // to missing dependency), remove it.
                    delete this.get;
                    return;
                }
                // Hook needed; redefine it so that the support test is not executed again.
                return (this.get = hookFn).apply(this, arguments);
            }
        };
    }
    var cssPrefixes = [
        "Webkit",
        "Moz",
        "ms"
    ], emptyStyle = document1.createElement("div").style, vendorProps = {
    };
    // Return a vendor-prefixed property or undefined
    function vendorPropName(name) {
        // Check for vendor prefixed names
        var capName = name[0].toUpperCase() + name.slice(1), i = cssPrefixes.length;
        while(i--){
            name = cssPrefixes[i] + capName;
            if (name in emptyStyle) return name;
        }
    }
    // Return a potentially-mapped jQuery.cssProps or vendor prefixed property
    function finalPropName(name) {
        var final = jQuery.cssProps[name] || vendorProps[name];
        if (final) return final;
        if (name in emptyStyle) return name;
        return vendorProps[name] = vendorPropName(name) || name;
    }
    var // Swappable if display is none or starts with table
    // except "table", "table-cell", or "table-caption"
    // See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
    rdisplayswap = /^(none|table(?!-c[ea]).+)/, rcustomProp = /^--/, cssShow = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, cssNormalTransform = {
        letterSpacing: "0",
        fontWeight: "400"
    };
    function setPositiveNumber(_elem, value, subtract) {
        // Any relative (+/-) values have already been
        // normalized at this point
        var matches = rcssNum.exec(value);
        return matches ? // Guard against undefined "subtract", e.g., when used as in cssHooks
        Math.max(0, matches[2] - (subtract || 0)) + (matches[3] || "px") : value;
    }
    function boxModelAdjustment(elem, dimension, box, isBorderBox, styles, computedVal) {
        var i = dimension === "width" ? 1 : 0, extra = 0, delta = 0;
        // Adjustment may not be necessary
        if (box === (isBorderBox ? "border" : "content")) return 0;
        for(; i < 4; i += 2){
            // Both box models exclude margin
            if (box === "margin") delta += jQuery.css(elem, box + cssExpand[i], true, styles);
            // If we get here with a content-box, we're seeking "padding" or "border" or "margin"
            if (!isBorderBox) {
                // Add padding
                delta += jQuery.css(elem, "padding" + cssExpand[i], true, styles);
                // For "border" or "margin", add border
                if (box !== "padding") delta += jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
                else extra += jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
            // If we get here with a border-box (content + padding + border), we're seeking "content" or
            // "padding" or "margin"
            } else {
                // For "content", subtract padding
                if (box === "content") delta -= jQuery.css(elem, "padding" + cssExpand[i], true, styles);
                // For "content" or "padding", subtract border
                if (box !== "margin") delta -= jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
            }
        }
        // Account for positive content-box scroll gutter when requested by providing computedVal
        if (!isBorderBox && computedVal >= 0) // offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
        // Assuming integer scroll gutter, subtract the rest and round down
        delta += Math.max(0, Math.ceil(elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)] - computedVal - delta - extra - 0.5)) || 0;
        return delta;
    }
    function getWidthOrHeight(elem, dimension, extra) {
        // Start with computed style
        var styles = getStyles(elem), // To avoid forcing a reflow, only fetch boxSizing if we need it (gh-4322).
        // Fake content-box until we know it's needed to know the true value.
        boxSizingNeeded = !support1.boxSizingReliable() || extra, isBorderBox = boxSizingNeeded && jQuery.css(elem, "boxSizing", false, styles) === "border-box", valueIsBorderBox = isBorderBox, val = curCSS(elem, dimension, styles), offsetProp = "offset" + dimension[0].toUpperCase() + dimension.slice(1);
        // Support: Firefox <=54
        // Return a confounding non-pixel value or feign ignorance, as appropriate.
        if (rnumnonpx.test(val)) {
            if (!extra) return val;
            val = "auto";
        }
        // Support: IE 9 - 11 only
        // Use offsetWidth/offsetHeight for when box sizing is unreliable.
        // In those cases, the computed value can be trusted to be border-box.
        if ((!support1.boxSizingReliable() && isBorderBox || // Support: IE 10 - 11+, Edge 15 - 18+
        // IE/Edge misreport `getComputedStyle` of table rows with width/height
        // set in CSS while `offset*` properties report correct values.
        // Interestingly, in some cases IE 9 doesn't suffer from this issue.
        !support1.reliableTrDimensions() && nodeName1(elem, "tr") || // Fall back to offsetWidth/offsetHeight when value is "auto"
        // This happens for inline elements with no explicit setting (gh-3571)
        val === "auto" || // Support: Android <=4.1 - 4.3 only
        // Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
        !parseFloat(val) && jQuery.css(elem, "display", false, styles) === "inline") && // Make sure the element is visible & connected
        elem.getClientRects().length) {
            isBorderBox = jQuery.css(elem, "boxSizing", false, styles) === "border-box";
            // Where available, offsetWidth/offsetHeight approximate border box dimensions.
            // Where not available (e.g., SVG), assume unreliable box-sizing and interpret the
            // retrieved value as a content box dimension.
            valueIsBorderBox = offsetProp in elem;
            if (valueIsBorderBox) val = elem[offsetProp];
        }
        // Normalize "" and auto
        val = parseFloat(val) || 0;
        // Adjust for the element's box model
        return val + boxModelAdjustment(elem, dimension, extra || (isBorderBox ? "border" : "content"), valueIsBorderBox, styles, // Provide the current computed size to request scroll gutter calculation (gh-3589)
        val) + "px";
    }
    jQuery.extend({
        // Add in style property hooks for overriding the default
        // behavior of getting and setting a style property
        cssHooks: {
            opacity: {
                get: function(elem, computed) {
                    if (computed) {
                        // We should always get a number back from opacity
                        var ret = curCSS(elem, "opacity");
                        return ret === "" ? "1" : ret;
                    }
                }
            }
        },
        // Don't automatically add "px" to these possibly-unitless properties
        cssNumber: {
            "animationIterationCount": true,
            "columnCount": true,
            "fillOpacity": true,
            "flexGrow": true,
            "flexShrink": true,
            "fontWeight": true,
            "gridArea": true,
            "gridColumn": true,
            "gridColumnEnd": true,
            "gridColumnStart": true,
            "gridRow": true,
            "gridRowEnd": true,
            "gridRowStart": true,
            "lineHeight": true,
            "opacity": true,
            "order": true,
            "orphans": true,
            "widows": true,
            "zIndex": true,
            "zoom": true
        },
        // Add in properties whose names you wish to fix before
        // setting or getting the value
        cssProps: {
        },
        // Get and set the style property on a DOM Node
        style: function(elem, name, value, extra) {
            // Don't set styles on text and comment nodes
            if (!elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style) return;
            // Make sure that we're working with the right name
            var ret, type, hooks, origName = camelCase(name), isCustomProp = rcustomProp.test(name), style = elem.style;
            // Make sure that we're working with the right name. We don't
            // want to query the value if it is a CSS custom property
            // since they are user-defined.
            if (!isCustomProp) name = finalPropName(origName);
            // Gets hook for the prefixed version, then unprefixed version
            hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];
            // Check if we're setting a value
            if (value !== undefined) {
                type = typeof value;
                // Convert "+=" or "-=" to relative numbers (#7345)
                if (type === "string" && (ret = rcssNum.exec(value)) && ret[1]) {
                    value = adjustCSS(elem, name, ret);
                    // Fixes bug #9237
                    type = "number";
                }
                // Make sure that null and NaN values aren't set (#7116)
                if (value == null || value !== value) return;
                // If a number was passed in, add the unit (except for certain CSS properties)
                // The isCustomProp check can be removed in jQuery 4.0 when we only auto-append
                // "px" to a few hardcoded values.
                if (type === "number" && !isCustomProp) value += ret && ret[3] || (jQuery.cssNumber[origName] ? "" : "px");
                // background-* props affect original clone's values
                if (!support1.clearCloneStyle && value === "" && name.indexOf("background") === 0) style[name] = "inherit";
                // If a hook was provided, use that value, otherwise just set the specified value
                if (!hooks || !("set" in hooks) || (value = hooks.set(elem, value, extra)) !== undefined) {
                    if (isCustomProp) style.setProperty(name, value);
                    else style[name] = value;
                }
            } else {
                // If a hook was provided get the non-computed value from there
                if (hooks && "get" in hooks && (ret = hooks.get(elem, false, extra)) !== undefined) return ret;
                // Otherwise just get the value from the style object
                return style[name];
            }
        },
        css: function(elem, name, extra, styles) {
            var val, num, hooks, origName = camelCase(name), isCustomProp = rcustomProp.test(name);
            // Make sure that we're working with the right name. We don't
            // want to modify the value if it is a CSS custom property
            // since they are user-defined.
            if (!isCustomProp) name = finalPropName(origName);
            // Try prefixed name followed by the unprefixed name
            hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];
            // If a hook was provided get the computed value from there
            if (hooks && "get" in hooks) val = hooks.get(elem, true, extra);
            // Otherwise, if a way to get the computed value exists, use that
            if (val === undefined) val = curCSS(elem, name, styles);
            // Convert "normal" to computed value
            if (val === "normal" && name in cssNormalTransform) val = cssNormalTransform[name];
            // Make numeric if forced or a qualifier was provided and val looks numeric
            if (extra === "" || extra) {
                num = parseFloat(val);
                return extra === true || isFinite(num) ? num || 0 : val;
            }
            return val;
        }
    });
    jQuery.each([
        "height",
        "width"
    ], function(_i, dimension) {
        jQuery.cssHooks[dimension] = {
            get: function(elem, computed, extra) {
                if (computed) // Certain elements can have dimension info if we invisibly show them
                // but it must have a current display style that would benefit
                return rdisplayswap.test(jQuery.css(elem, "display")) && (!elem.getClientRects().length || !elem.getBoundingClientRect().width) ? swap(elem, cssShow, function() {
                    return getWidthOrHeight(elem, dimension, extra);
                }) : getWidthOrHeight(elem, dimension, extra);
            },
            set: function(elem, value, extra) {
                var matches, styles = getStyles(elem), // Only read styles.position if the test has a chance to fail
                // to avoid forcing a reflow.
                scrollboxSizeBuggy = !support1.scrollboxSize() && styles.position === "absolute", // To avoid forcing a reflow, only fetch boxSizing if we need it (gh-3991)
                boxSizingNeeded = scrollboxSizeBuggy || extra, isBorderBox = boxSizingNeeded && jQuery.css(elem, "boxSizing", false, styles) === "border-box", subtract = extra ? boxModelAdjustment(elem, dimension, extra, isBorderBox, styles) : 0;
                // Account for unreliable border-box dimensions by comparing offset* to computed and
                // faking a content-box to get border and padding (gh-3699)
                if (isBorderBox && scrollboxSizeBuggy) subtract -= Math.ceil(elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)] - parseFloat(styles[dimension]) - boxModelAdjustment(elem, dimension, "border", false, styles) - 0.5);
                // Convert to pixels if value adjustment is needed
                if (subtract && (matches = rcssNum.exec(value)) && (matches[3] || "px") !== "px") {
                    elem.style[dimension] = value;
                    value = jQuery.css(elem, dimension);
                }
                return setPositiveNumber(elem, value, subtract);
            }
        };
    });
    jQuery.cssHooks.marginLeft = addGetHookIf(support1.reliableMarginLeft, function(elem, computed) {
        if (computed) return (parseFloat(curCSS(elem, "marginLeft")) || elem.getBoundingClientRect().left - swap(elem, {
            marginLeft: 0
        }, function() {
            return elem.getBoundingClientRect().left;
        })) + "px";
    });
    // These hooks are used by animate to expand properties
    jQuery.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(prefix, suffix) {
        jQuery.cssHooks[prefix + suffix] = {
            expand: function(value) {
                var i = 0, expanded = {
                }, // Assumes a single number if not a string
                parts = typeof value === "string" ? value.split(" ") : [
                    value
                ];
                for(; i < 4; i++)expanded[prefix + cssExpand[i] + suffix] = parts[i] || parts[i - 2] || parts[0];
                return expanded;
            }
        };
        if (prefix !== "margin") jQuery.cssHooks[prefix + suffix].set = setPositiveNumber;
    });
    jQuery.fn.extend({
        css: function(name1, value6) {
            return access(this, function(elem, name, value) {
                var styles, len, map = {
                }, i = 0;
                if (Array.isArray(name)) {
                    styles = getStyles(elem);
                    len = name.length;
                    for(; i < len; i++)map[name[i]] = jQuery.css(elem, name[i], false, styles);
                    return map;
                }
                return value !== undefined ? jQuery.style(elem, name, value) : jQuery.css(elem, name);
            }, name1, value6, arguments.length > 1);
        }
    });
    function Tween(elem, options, prop, end, easing) {
        return new Tween.prototype.init(elem, options, prop, end, easing);
    }
    jQuery.Tween = Tween;
    Tween.prototype = {
        constructor: Tween,
        init: function(elem, options, prop, end, easing, unit) {
            this.elem = elem;
            this.prop = prop;
            this.easing = easing || jQuery.easing._default;
            this.options = options;
            this.start = this.now = this.cur();
            this.end = end;
            this.unit = unit || (jQuery.cssNumber[prop] ? "" : "px");
        },
        cur: function() {
            var hooks = Tween.propHooks[this.prop];
            return hooks && hooks.get ? hooks.get(this) : Tween.propHooks._default.get(this);
        },
        run: function(percent) {
            var eased, hooks = Tween.propHooks[this.prop];
            if (this.options.duration) this.pos = eased = jQuery.easing[this.easing](percent, this.options.duration * percent, 0, 1, this.options.duration);
            else this.pos = eased = percent;
            this.now = (this.end - this.start) * eased + this.start;
            if (this.options.step) this.options.step.call(this.elem, this.now, this);
            if (hooks && hooks.set) hooks.set(this);
            else Tween.propHooks._default.set(this);
            return this;
        }
    };
    Tween.prototype.init.prototype = Tween.prototype;
    Tween.propHooks = {
        _default: {
            get: function(tween) {
                var result;
                // Use a property on the element directly when it is not a DOM element,
                // or when there is no matching style property that exists.
                if (tween.elem.nodeType !== 1 || tween.elem[tween.prop] != null && tween.elem.style[tween.prop] == null) return tween.elem[tween.prop];
                // Passing an empty string as a 3rd parameter to .css will automatically
                // attempt a parseFloat and fallback to a string if the parse fails.
                // Simple values such as "10px" are parsed to Float;
                // complex values such as "rotate(1rad)" are returned as-is.
                result = jQuery.css(tween.elem, tween.prop, "");
                // Empty strings, null, undefined and "auto" are converted to 0.
                return !result || result === "auto" ? 0 : result;
            },
            set: function(tween) {
                // Use step hook for back compat.
                // Use cssHook if its there.
                // Use .style if available and use plain properties where available.
                if (jQuery.fx.step[tween.prop]) jQuery.fx.step[tween.prop](tween);
                else if (tween.elem.nodeType === 1 && (jQuery.cssHooks[tween.prop] || tween.elem.style[finalPropName(tween.prop)] != null)) jQuery.style(tween.elem, tween.prop, tween.now + tween.unit);
                else tween.elem[tween.prop] = tween.now;
            }
        }
    };
    // Support: IE <=9 only
    // Panic based approach to setting things on disconnected nodes
    Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
        set: function(tween) {
            if (tween.elem.nodeType && tween.elem.parentNode) tween.elem[tween.prop] = tween.now;
        }
    };
    jQuery.easing = {
        linear: function(p) {
            return p;
        },
        swing: function(p) {
            return 0.5 - Math.cos(p * Math.PI) / 2;
        },
        _default: "swing"
    };
    jQuery.fx = Tween.prototype.init;
    // Back compat <1.8 extension point
    jQuery.fx.step = {
    };
    var fxNow, inProgress, rfxtypes = /^(?:toggle|show|hide)$/, rrun = /queueHooks$/;
    function schedule() {
        if (inProgress) {
            if (document1.hidden === false && window1.requestAnimationFrame) window1.requestAnimationFrame(schedule);
            else window1.setTimeout(schedule, jQuery.fx.interval);
            jQuery.fx.tick();
        }
    }
    // Animations created synchronously will run synchronously
    function createFxNow() {
        window1.setTimeout(function() {
            fxNow = undefined;
        });
        return fxNow = Date.now();
    }
    // Generate parameters to create a standard animation
    function genFx(type, includeWidth) {
        var which, i = 0, attrs = {
            height: type
        };
        // If we include width, step value is 1 to do all cssExpand values,
        // otherwise step value is 2 to skip over Left and Right
        includeWidth = includeWidth ? 1 : 0;
        for(; i < 4; i += 2 - includeWidth){
            which = cssExpand[i];
            attrs["margin" + which] = attrs["padding" + which] = type;
        }
        if (includeWidth) attrs.opacity = attrs.width = type;
        return attrs;
    }
    function createTween(value, prop, animation) {
        var tween, collection = (Animation.tweeners[prop] || []).concat(Animation.tweeners["*"]), index = 0, length = collection.length;
        for(; index < length; index++){
            if (tween = collection[index].call(animation, prop, value)) // We're done with this property
            return tween;
        }
    }
    function defaultPrefilter(elem, props, opts) {
        var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display, isBox = "width" in props || "height" in props, anim = this, orig = {
        }, style = elem.style, hidden = elem.nodeType && isHiddenWithinTree(elem), dataShow = dataPriv.get(elem, "fxshow");
        // Queue-skipping animations hijack the fx hooks
        if (!opts.queue) {
            hooks = jQuery._queueHooks(elem, "fx");
            if (hooks.unqueued == null) {
                hooks.unqueued = 0;
                oldfire = hooks.empty.fire;
                hooks.empty.fire = function() {
                    if (!hooks.unqueued) oldfire();
                };
            }
            hooks.unqueued++;
            anim.always(function() {
                // Ensure the complete handler is called before this completes
                anim.always(function() {
                    hooks.unqueued--;
                    if (!jQuery.queue(elem, "fx").length) hooks.empty.fire();
                });
            });
        }
        // Detect show/hide animations
        for(prop in props){
            value = props[prop];
            if (rfxtypes.test(value)) {
                delete props[prop];
                toggle = toggle || value === "toggle";
                if (value === (hidden ? "hide" : "show")) {
                    // Pretend to be hidden if this is a "show" and
                    // there is still data from a stopped show/hide
                    if (value === "show" && dataShow && dataShow[prop] !== undefined) hidden = true;
                    else continue;
                }
                orig[prop] = dataShow && dataShow[prop] || jQuery.style(elem, prop);
            }
        }
        // Bail out if this is a no-op like .hide().hide()
        propTween = !jQuery.isEmptyObject(props);
        if (!propTween && jQuery.isEmptyObject(orig)) return;
        // Restrict "overflow" and "display" styles during box animations
        if (isBox && elem.nodeType === 1) {
            // Support: IE <=9 - 11, Edge 12 - 15
            // Record all 3 overflow attributes because IE does not infer the shorthand
            // from identically-valued overflowX and overflowY and Edge just mirrors
            // the overflowX value there.
            opts.overflow = [
                style.overflow,
                style.overflowX,
                style.overflowY
            ];
            // Identify a display type, preferring old show/hide data over the CSS cascade
            restoreDisplay = dataShow && dataShow.display;
            if (restoreDisplay == null) restoreDisplay = dataPriv.get(elem, "display");
            display = jQuery.css(elem, "display");
            if (display === "none") {
                if (restoreDisplay) display = restoreDisplay;
                else {
                    // Get nonempty value(s) by temporarily forcing visibility
                    showHide([
                        elem
                    ], true);
                    restoreDisplay = elem.style.display || restoreDisplay;
                    display = jQuery.css(elem, "display");
                    showHide([
                        elem
                    ]);
                }
            }
            // Animate inline elements as inline-block
            if (display === "inline" || display === "inline-block" && restoreDisplay != null) {
                if (jQuery.css(elem, "float") === "none") {
                    // Restore the original display value at the end of pure show/hide animations
                    if (!propTween) {
                        anim.done(function() {
                            style.display = restoreDisplay;
                        });
                        if (restoreDisplay == null) {
                            display = style.display;
                            restoreDisplay = display === "none" ? "" : display;
                        }
                    }
                    style.display = "inline-block";
                }
            }
        }
        if (opts.overflow) {
            style.overflow = "hidden";
            anim.always(function() {
                style.overflow = opts.overflow[0];
                style.overflowX = opts.overflow[1];
                style.overflowY = opts.overflow[2];
            });
        }
        // Implement show/hide animations
        propTween = false;
        for(prop in orig){
            // General show/hide setup for this element animation
            if (!propTween) {
                if (dataShow) {
                    if ("hidden" in dataShow) hidden = dataShow.hidden;
                } else dataShow = dataPriv.access(elem, "fxshow", {
                    display: restoreDisplay
                });
                // Store hidden/visible for toggle so `.stop().toggle()` "reverses"
                if (toggle) dataShow.hidden = !hidden;
                // Show elements before animating them
                if (hidden) showHide([
                    elem
                ], true);
                /* eslint-disable no-loop-func */ anim.done(function() {
                    /* eslint-enable no-loop-func */ // The final step of a "hide" animation is actually hiding the element
                    if (!hidden) showHide([
                        elem
                    ]);
                    dataPriv.remove(elem, "fxshow");
                    for(prop in orig)jQuery.style(elem, prop, orig[prop]);
                });
            }
            // Per-property setup
            propTween = createTween(hidden ? dataShow[prop] : 0, prop, anim);
            if (!(prop in dataShow)) {
                dataShow[prop] = propTween.start;
                if (hidden) {
                    propTween.end = propTween.start;
                    propTween.start = 0;
                }
            }
        }
    }
    function propFilter(props, specialEasing) {
        var index, name, easing, value, hooks;
        // camelCase, specialEasing and expand cssHook pass
        for(index in props){
            name = camelCase(index);
            easing = specialEasing[name];
            value = props[index];
            if (Array.isArray(value)) {
                easing = value[1];
                value = props[index] = value[0];
            }
            if (index !== name) {
                props[name] = value;
                delete props[index];
            }
            hooks = jQuery.cssHooks[name];
            if (hooks && "expand" in hooks) {
                value = hooks.expand(value);
                delete props[name];
                // Not quite $.extend, this won't overwrite existing keys.
                // Reusing 'index' because we have the correct "name"
                for(index in value)if (!(index in props)) {
                    props[index] = value[index];
                    specialEasing[index] = easing;
                }
            } else specialEasing[name] = easing;
        }
    }
    function Animation(elem, properties, options) {
        var result, stopped, index1 = 0, length1 = Animation.prefilters.length, deferred = jQuery.Deferred().always(function() {
            // Don't match elem in the :animated selector
            delete tick.elem;
        }), tick = function() {
            if (stopped) return false;
            var currentTime = fxNow || createFxNow(), remaining = Math.max(0, animation.startTime + animation.duration - currentTime), // Support: Android 2.3 only
            // Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
            temp = remaining / animation.duration || 0, percent = 1 - temp, index = 0, length = animation.tweens.length;
            for(; index < length; index++)animation.tweens[index].run(percent);
            deferred.notifyWith(elem, [
                animation,
                percent,
                remaining
            ]);
            // If there's more to do, yield
            if (percent < 1 && length) return remaining;
            // If this was an empty animation, synthesize a final progress notification
            if (!length) deferred.notifyWith(elem, [
                animation,
                1,
                0
            ]);
            // Resolve the animation and report its conclusion
            deferred.resolveWith(elem, [
                animation
            ]);
            return false;
        }, animation = deferred.promise({
            elem: elem,
            props: jQuery.extend({
            }, properties),
            opts: jQuery.extend(true, {
                specialEasing: {
                },
                easing: jQuery.easing._default
            }, options),
            originalProperties: properties,
            originalOptions: options,
            startTime: fxNow || createFxNow(),
            duration: options.duration,
            tweens: [],
            createTween: function(prop, end) {
                var tween = jQuery.Tween(elem, animation.opts, prop, end, animation.opts.specialEasing[prop] || animation.opts.easing);
                animation.tweens.push(tween);
                return tween;
            },
            stop: function(gotoEnd) {
                var index = 0, // If we are going to the end, we want to run all the tweens
                // otherwise we skip this part
                length = gotoEnd ? animation.tweens.length : 0;
                if (stopped) return this;
                stopped = true;
                for(; index < length; index++)animation.tweens[index].run(1);
                // Resolve when we played the last frame; otherwise, reject
                if (gotoEnd) {
                    deferred.notifyWith(elem, [
                        animation,
                        1,
                        0
                    ]);
                    deferred.resolveWith(elem, [
                        animation,
                        gotoEnd
                    ]);
                } else deferred.rejectWith(elem, [
                    animation,
                    gotoEnd
                ]);
                return this;
            }
        }), props = animation.props;
        propFilter(props, animation.opts.specialEasing);
        for(; index1 < length1; index1++){
            result = Animation.prefilters[index1].call(animation, elem, props, animation.opts);
            if (result) {
                if (isFunction(result.stop)) jQuery._queueHooks(animation.elem, animation.opts.queue).stop = result.stop.bind(result);
                return result;
            }
        }
        jQuery.map(props, createTween, animation);
        if (isFunction(animation.opts.start)) animation.opts.start.call(elem, animation);
        // Attach callbacks from options
        animation.progress(animation.opts.progress).done(animation.opts.done, animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always);
        jQuery.fx.timer(jQuery.extend(tick, {
            elem: elem,
            anim: animation,
            queue: animation.opts.queue
        }));
        return animation;
    }
    jQuery.Animation = jQuery.extend(Animation, {
        tweeners: {
            "*": [
                function(prop, value) {
                    var tween = this.createTween(prop, value);
                    adjustCSS(tween.elem, prop, rcssNum.exec(value), tween);
                    return tween;
                }
            ]
        },
        tweener: function(props, callback) {
            if (isFunction(props)) {
                callback = props;
                props = [
                    "*"
                ];
            } else props = props.match(rnothtmlwhite);
            var prop, index = 0, length = props.length;
            for(; index < length; index++){
                prop = props[index];
                Animation.tweeners[prop] = Animation.tweeners[prop] || [];
                Animation.tweeners[prop].unshift(callback);
            }
        },
        prefilters: [
            defaultPrefilter
        ],
        prefilter: function(callback, prepend) {
            if (prepend) Animation.prefilters.unshift(callback);
            else Animation.prefilters.push(callback);
        }
    });
    jQuery.speed = function(speed, easing, fn) {
        var opt = speed && typeof speed === "object" ? jQuery.extend({
        }, speed) : {
            complete: fn || !fn && easing || isFunction(speed) && speed,
            duration: speed,
            easing: fn && easing || easing && !isFunction(easing) && easing
        };
        // Go to the end state if fx are off
        if (jQuery.fx.off) opt.duration = 0;
        else if (typeof opt.duration !== "number") {
            if (opt.duration in jQuery.fx.speeds) opt.duration = jQuery.fx.speeds[opt.duration];
            else opt.duration = jQuery.fx.speeds._default;
        }
        // Normalize opt.queue - true/undefined/null -> "fx"
        if (opt.queue == null || opt.queue === true) opt.queue = "fx";
        // Queueing
        opt.old = opt.complete;
        opt.complete = function() {
            if (isFunction(opt.old)) opt.old.call(this);
            if (opt.queue) jQuery.dequeue(this, opt.queue);
        };
        return opt;
    };
    jQuery.fn.extend({
        fadeTo: function(speed, to, easing, callback) {
            // Show any hidden elements after setting opacity to 0
            return this.filter(isHiddenWithinTree).css("opacity", 0).show()// Animate to the value specified
            .end().animate({
                opacity: to
            }, speed, easing, callback);
        },
        animate: function(prop, speed, easing, callback) {
            var empty = jQuery.isEmptyObject(prop), optall = jQuery.speed(speed, easing, callback), doAnimation = function() {
                // Operate on a copy of prop so per-property easing won't be lost
                var anim = Animation(this, jQuery.extend({
                }, prop), optall);
                // Empty animations, or finishing resolves immediately
                if (empty || dataPriv.get(this, "finish")) anim.stop(true);
            };
            doAnimation.finish = doAnimation;
            return empty || optall.queue === false ? this.each(doAnimation) : this.queue(optall.queue, doAnimation);
        },
        stop: function(type, clearQueue, gotoEnd) {
            var stopQueue = function(hooks) {
                var stop = hooks.stop;
                delete hooks.stop;
                stop(gotoEnd);
            };
            if (typeof type !== "string") {
                gotoEnd = clearQueue;
                clearQueue = type;
                type = undefined;
            }
            if (clearQueue) this.queue(type || "fx", []);
            return this.each(function() {
                var dequeue = true, index = type != null && type + "queueHooks", timers = jQuery.timers, data = dataPriv.get(this);
                if (index) {
                    if (data[index] && data[index].stop) stopQueue(data[index]);
                } else {
                    for(index in data)if (data[index] && data[index].stop && rrun.test(index)) stopQueue(data[index]);
                }
                for(index = timers.length; index--;)if (timers[index].elem === this && (type == null || timers[index].queue === type)) {
                    timers[index].anim.stop(gotoEnd);
                    dequeue = false;
                    timers.splice(index, 1);
                }
                // Start the next in the queue if the last step wasn't forced.
                // Timers currently will call their complete callbacks, which
                // will dequeue but only if they were gotoEnd.
                if (dequeue || !gotoEnd) jQuery.dequeue(this, type);
            });
        },
        finish: function(type) {
            if (type !== false) type = type || "fx";
            return this.each(function() {
                var index, data = dataPriv.get(this), queue = data[type + "queue"], hooks = data[type + "queueHooks"], timers = jQuery.timers, length = queue ? queue.length : 0;
                // Enable finishing flag on private data
                data.finish = true;
                // Empty the queue first
                jQuery.queue(this, type, []);
                if (hooks && hooks.stop) hooks.stop.call(this, true);
                // Look for any active animations, and finish them
                for(index = timers.length; index--;)if (timers[index].elem === this && timers[index].queue === type) {
                    timers[index].anim.stop(true);
                    timers.splice(index, 1);
                }
                // Look for any animations in the old queue and finish them
                for(index = 0; index < length; index++)if (queue[index] && queue[index].finish) queue[index].finish.call(this);
                // Turn off finishing flag
                delete data.finish;
            });
        }
    });
    jQuery.each([
        "toggle",
        "show",
        "hide"
    ], function(_i, name) {
        var cssFn = jQuery.fn[name];
        jQuery.fn[name] = function(speed, easing, callback) {
            return speed == null || typeof speed === "boolean" ? cssFn.apply(this, arguments) : this.animate(genFx(name, true), speed, easing, callback);
        };
    });
    // Generate shortcuts for custom animations
    jQuery.each({
        slideDown: genFx("show"),
        slideUp: genFx("hide"),
        slideToggle: genFx("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(name, props) {
        jQuery.fn[name] = function(speed, easing, callback) {
            return this.animate(props, speed, easing, callback);
        };
    });
    jQuery.timers = [];
    jQuery.fx.tick = function() {
        var timer, i = 0, timers = jQuery.timers;
        fxNow = Date.now();
        for(; i < timers.length; i++){
            timer = timers[i];
            // Run the timer and safely remove it when done (allowing for external removal)
            if (!timer() && timers[i] === timer) timers.splice(i--, 1);
        }
        if (!timers.length) jQuery.fx.stop();
        fxNow = undefined;
    };
    jQuery.fx.timer = function(timer) {
        jQuery.timers.push(timer);
        jQuery.fx.start();
    };
    jQuery.fx.interval = 13;
    jQuery.fx.start = function() {
        if (inProgress) return;
        inProgress = true;
        schedule();
    };
    jQuery.fx.stop = function() {
        inProgress = null;
    };
    jQuery.fx.speeds = {
        slow: 600,
        fast: 200,
        // Default speed
        _default: 400
    };
    // Based off of the plugin by Clint Helfers, with permission.
    // https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
    jQuery.fn.delay = function(time, type) {
        time = jQuery.fx ? jQuery.fx.speeds[time] || time : time;
        type = type || "fx";
        return this.queue(type, function(next, hooks) {
            var timeout = window1.setTimeout(next, time);
            hooks.stop = function() {
                window1.clearTimeout(timeout);
            };
        });
    };
    (function() {
        var input = document1.createElement("input"), select = document1.createElement("select"), opt = select.appendChild(document1.createElement("option"));
        input.type = "checkbox";
        // Support: Android <=4.3 only
        // Default value for a checkbox should be "on"
        support1.checkOn = input.value !== "";
        // Support: IE <=11 only
        // Must access selectedIndex to make default options select
        support1.optSelected = opt.selected;
        // Support: IE <=11 only
        // An input loses its value after becoming a radio
        input = document1.createElement("input");
        input.value = "t";
        input.type = "radio";
        support1.radioValue = input.value === "t";
    })();
    var boolHook, attrHandle = jQuery.expr.attrHandle;
    jQuery.fn.extend({
        attr: function(name, value) {
            return access(this, jQuery.attr, name, value, arguments.length > 1);
        },
        removeAttr: function(name) {
            return this.each(function() {
                jQuery.removeAttr(this, name);
            });
        }
    });
    jQuery.extend({
        attr: function(elem, name, value) {
            var ret, hooks, nType = elem.nodeType;
            // Don't get/set attributes on text, comment and attribute nodes
            if (nType === 3 || nType === 8 || nType === 2) return;
            // Fallback to prop when attributes are not supported
            if (typeof elem.getAttribute === "undefined") return jQuery.prop(elem, name, value);
            // Attribute hooks are determined by the lowercase version
            // Grab necessary hook if one is defined
            if (nType !== 1 || !jQuery.isXMLDoc(elem)) hooks = jQuery.attrHooks[name.toLowerCase()] || (jQuery.expr.match.bool.test(name) ? boolHook : undefined);
            if (value !== undefined) {
                if (value === null) {
                    jQuery.removeAttr(elem, name);
                    return;
                }
                if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined) return ret;
                elem.setAttribute(name, value + "");
                return value;
            }
            if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) return ret;
            ret = jQuery.find.attr(elem, name);
            // Non-existent attributes return null, we normalize to undefined
            return ret == null ? undefined : ret;
        },
        attrHooks: {
            type: {
                set: function(elem, value) {
                    if (!support1.radioValue && value === "radio" && nodeName1(elem, "input")) {
                        var val = elem.value;
                        elem.setAttribute("type", value);
                        if (val) elem.value = val;
                        return value;
                    }
                }
            }
        },
        removeAttr: function(elem, value) {
            var name, i = 0, // Attribute names can contain non-HTML whitespace characters
            // https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
            attrNames = value && value.match(rnothtmlwhite);
            if (attrNames && elem.nodeType === 1) while(name = attrNames[i++])elem.removeAttribute(name);
        }
    });
    // Hooks for boolean attributes
    boolHook = {
        set: function(elem, value, name) {
            if (value === false) // Remove boolean attributes when set to false
            jQuery.removeAttr(elem, name);
            else elem.setAttribute(name, name);
            return name;
        }
    };
    jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g), function(_i, name2) {
        var getter = attrHandle[name2] || jQuery.find.attr;
        attrHandle[name2] = function(elem, name, isXML) {
            var ret, handle, lowercaseName = name.toLowerCase();
            if (!isXML) {
                // Avoid an infinite loop by temporarily removing this function from the getter
                handle = attrHandle[lowercaseName];
                attrHandle[lowercaseName] = ret;
                ret = getter(elem, name, isXML) != null ? lowercaseName : null;
                attrHandle[lowercaseName] = handle;
            }
            return ret;
        };
    });
    var rfocusable = /^(?:input|select|textarea|button)$/i, rclickable = /^(?:a|area)$/i;
    jQuery.fn.extend({
        prop: function(name, value) {
            return access(this, jQuery.prop, name, value, arguments.length > 1);
        },
        removeProp: function(name) {
            return this.each(function() {
                delete this[jQuery.propFix[name] || name];
            });
        }
    });
    jQuery.extend({
        prop: function(elem, name, value) {
            var ret, hooks, nType = elem.nodeType;
            // Don't get/set properties on text, comment and attribute nodes
            if (nType === 3 || nType === 8 || nType === 2) return;
            if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
                // Fix name and attach hooks
                name = jQuery.propFix[name] || name;
                hooks = jQuery.propHooks[name];
            }
            if (value !== undefined) {
                if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined) return ret;
                return elem[name] = value;
            }
            if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) return ret;
            return elem[name];
        },
        propHooks: {
            tabIndex: {
                get: function(elem) {
                    // Support: IE <=9 - 11 only
                    // elem.tabIndex doesn't always return the
                    // correct value when it hasn't been explicitly set
                    // https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
                    // Use proper attribute retrieval(#12072)
                    var tabindex = jQuery.find.attr(elem, "tabindex");
                    if (tabindex) return parseInt(tabindex, 10);
                    if (rfocusable.test(elem.nodeName) || rclickable.test(elem.nodeName) && elem.href) return 0;
                    return -1;
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    });
    // Support: IE <=11 only
    // Accessing the selectedIndex property
    // forces the browser to respect setting selected
    // on the option
    // The getter ensures a default option is selected
    // when in an optgroup
    // eslint rule "no-unused-expressions" is disabled for this code
    // since it considers such accessions noop
    if (!support1.optSelected) jQuery.propHooks.selected = {
        get: function(elem) {
            /* eslint no-unused-expressions: "off" */ var parent = elem.parentNode;
            if (parent && parent.parentNode) parent.parentNode.selectedIndex;
            return null;
        },
        set: function(elem) {
            /* eslint no-unused-expressions: "off" */ var parent = elem.parentNode;
            if (parent) {
                parent.selectedIndex;
                if (parent.parentNode) parent.parentNode.selectedIndex;
            }
        }
    };
    jQuery.each([
        "tabIndex",
        "readOnly",
        "maxLength",
        "cellSpacing",
        "cellPadding",
        "rowSpan",
        "colSpan",
        "useMap",
        "frameBorder",
        "contentEditable"
    ], function() {
        jQuery.propFix[this.toLowerCase()] = this;
    });
    // Strip and collapse whitespace according to HTML spec
    // https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
    function stripAndCollapse(value) {
        var tokens = value.match(rnothtmlwhite) || [];
        return tokens.join(" ");
    }
    function getClass(elem) {
        return elem.getAttribute && elem.getAttribute("class") || "";
    }
    function classesToArray(value) {
        if (Array.isArray(value)) return value;
        if (typeof value === "string") return value.match(rnothtmlwhite) || [];
        return [];
    }
    jQuery.fn.extend({
        addClass: function(value) {
            var classes, elem, cur, curValue, clazz, j1, finalValue, i = 0;
            if (isFunction(value)) return this.each(function(j) {
                jQuery(this).addClass(value.call(this, j, getClass(this)));
            });
            classes = classesToArray(value);
            if (classes.length) while(elem = this[i++]){
                curValue = getClass(elem);
                cur = elem.nodeType === 1 && " " + stripAndCollapse(curValue) + " ";
                if (cur) {
                    j1 = 0;
                    while(clazz = classes[j1++])if (cur.indexOf(" " + clazz + " ") < 0) cur += clazz + " ";
                    // Only assign if different to avoid unneeded rendering.
                    finalValue = stripAndCollapse(cur);
                    if (curValue !== finalValue) elem.setAttribute("class", finalValue);
                }
            }
            return this;
        },
        removeClass: function(value) {
            var classes, elem, cur, curValue, clazz, j2, finalValue, i = 0;
            if (isFunction(value)) return this.each(function(j) {
                jQuery(this).removeClass(value.call(this, j, getClass(this)));
            });
            if (!arguments.length) return this.attr("class", "");
            classes = classesToArray(value);
            if (classes.length) while(elem = this[i++]){
                curValue = getClass(elem);
                // This expression is here for better compressibility (see addClass)
                cur = elem.nodeType === 1 && " " + stripAndCollapse(curValue) + " ";
                if (cur) {
                    j2 = 0;
                    while(clazz = classes[j2++])// Remove *all* instances
                    while(cur.indexOf(" " + clazz + " ") > -1)cur = cur.replace(" " + clazz + " ", " ");
                    // Only assign if different to avoid unneeded rendering.
                    finalValue = stripAndCollapse(cur);
                    if (curValue !== finalValue) elem.setAttribute("class", finalValue);
                }
            }
            return this;
        },
        toggleClass: function(value, stateVal) {
            var type = typeof value, isValidValue = type === "string" || Array.isArray(value);
            if (typeof stateVal === "boolean" && isValidValue) return stateVal ? this.addClass(value) : this.removeClass(value);
            if (isFunction(value)) return this.each(function(i) {
                jQuery(this).toggleClass(value.call(this, i, getClass(this), stateVal), stateVal);
            });
            return this.each(function() {
                var className, i, self, classNames;
                if (isValidValue) {
                    // Toggle individual class names
                    i = 0;
                    self = jQuery(this);
                    classNames = classesToArray(value);
                    while(className = classNames[i++])// Check each className given, space separated list
                    if (self.hasClass(className)) self.removeClass(className);
                    else self.addClass(className);
                // Toggle whole class name
                } else if (value === undefined || type === "boolean") {
                    className = getClass(this);
                    if (className) // Store className if set
                    dataPriv.set(this, "__className__", className);
                    // If the element has a class name or if we're passed `false`,
                    // then remove the whole classname (if there was one, the above saved it).
                    // Otherwise bring back whatever was previously saved (if anything),
                    // falling back to the empty string if nothing was stored.
                    if (this.setAttribute) this.setAttribute("class", className || value === false ? "" : dataPriv.get(this, "__className__") || "");
                }
            });
        },
        hasClass: function(selector) {
            var className, elem, i = 0;
            className = " " + selector + " ";
            while(elem = this[i++]){
                if (elem.nodeType === 1 && (" " + stripAndCollapse(getClass(elem)) + " ").indexOf(className) > -1) return true;
            }
            return false;
        }
    });
    var rreturn = /\r/g;
    jQuery.fn.extend({
        val: function(value7) {
            var hooks, ret, valueIsFunction, elem = this[0];
            if (!arguments.length) {
                if (elem) {
                    hooks = jQuery.valHooks[elem.type] || jQuery.valHooks[elem.nodeName.toLowerCase()];
                    if (hooks && "get" in hooks && (ret = hooks.get(elem, "value")) !== undefined) return ret;
                    ret = elem.value;
                    // Handle most common string cases
                    if (typeof ret === "string") return ret.replace(rreturn, "");
                    // Handle cases where value is null/undef or number
                    return ret == null ? "" : ret;
                }
                return;
            }
            valueIsFunction = isFunction(value7);
            return this.each(function(i) {
                var val;
                if (this.nodeType !== 1) return;
                if (valueIsFunction) val = value7.call(this, i, jQuery(this).val());
                else val = value7;
                // Treat null/undefined as ""; convert numbers to string
                if (val == null) val = "";
                else if (typeof val === "number") val += "";
                else if (Array.isArray(val)) val = jQuery.map(val, function(value) {
                    return value == null ? "" : value + "";
                });
                hooks = jQuery.valHooks[this.type] || jQuery.valHooks[this.nodeName.toLowerCase()];
                // If set returns undefined, fall back to normal setting
                if (!hooks || !("set" in hooks) || hooks.set(this, val, "value") === undefined) this.value = val;
            });
        }
    });
    jQuery.extend({
        valHooks: {
            option: {
                get: function(elem) {
                    var val = jQuery.find.attr(elem, "value");
                    return val != null ? val : // Support: IE <=10 - 11 only
                    // option.text throws exceptions (#14686, #14858)
                    // Strip and collapse whitespace
                    // https://html.spec.whatwg.org/#strip-and-collapse-whitespace
                    stripAndCollapse(jQuery.text(elem));
                }
            },
            select: {
                get: function(elem) {
                    var value, option, i, options = elem.options, index = elem.selectedIndex, one = elem.type === "select-one", values = one ? null : [], max = one ? index + 1 : options.length;
                    if (index < 0) i = max;
                    else i = one ? index : 0;
                    // Loop through all the selected options
                    for(; i < max; i++){
                        option = options[i];
                        // Support: IE <=9 only
                        // IE8-9 doesn't update selected after form reset (#2551)
                        if ((option.selected || i === index) && // Don't return options that are disabled or in a disabled optgroup
                        !option.disabled && (!option.parentNode.disabled || !nodeName1(option.parentNode, "optgroup"))) {
                            // Get the specific value for the option
                            value = jQuery(option).val();
                            // We don't need an array for one selects
                            if (one) return value;
                            // Multi-Selects return an array
                            values.push(value);
                        }
                    }
                    return values;
                },
                set: function(elem, value) {
                    var optionSet, option, options = elem.options, values = jQuery.makeArray(value), i = options.length;
                    while(i--){
                        option = options[i];
                        /* eslint-disable no-cond-assign */ if (option.selected = jQuery.inArray(jQuery.valHooks.option.get(option), values) > -1) optionSet = true;
                    /* eslint-enable no-cond-assign */ }
                    // Force browsers to behave consistently when non-matching value is set
                    if (!optionSet) elem.selectedIndex = -1;
                    return values;
                }
            }
        }
    });
    // Radios and checkboxes getter/setter
    jQuery.each([
        "radio",
        "checkbox"
    ], function() {
        jQuery.valHooks[this] = {
            set: function(elem, value) {
                if (Array.isArray(value)) return elem.checked = jQuery.inArray(jQuery(elem).val(), value) > -1;
            }
        };
        if (!support1.checkOn) jQuery.valHooks[this].get = function(elem) {
            return elem.getAttribute("value") === null ? "on" : elem.value;
        };
    });
    // Return jQuery for attributes-only inclusion
    support1.focusin = "onfocusin" in window1;
    var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/, stopPropagationCallback = function(e) {
        e.stopPropagation();
    };
    jQuery.extend(jQuery.event, {
        trigger: function(event, data, elem, onlyHandlers) {
            var i, cur, tmp, bubbleType, ontype, handle, special, lastElement, eventPath = [
                elem || document1
            ], type = hasOwn1.call(event, "type") ? event.type : event, namespaces = hasOwn1.call(event, "namespace") ? event.namespace.split(".") : [];
            cur = lastElement = tmp = elem = elem || document1;
            // Don't do events on text and comment nodes
            if (elem.nodeType === 3 || elem.nodeType === 8) return;
            // focus/blur morphs to focusin/out; ensure we're not firing them right now
            if (rfocusMorph.test(type + jQuery.event.triggered)) return;
            if (type.indexOf(".") > -1) {
                // Namespaced trigger; create a regexp to match event type in handle()
                namespaces = type.split(".");
                type = namespaces.shift();
                namespaces.sort();
            }
            ontype = type.indexOf(":") < 0 && "on" + type;
            // Caller can pass in a jQuery.Event object, Object, or just an event type string
            event = event[jQuery.expando] ? event : new jQuery.Event(type, typeof event === "object" && event);
            // Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
            event.isTrigger = onlyHandlers ? 2 : 3;
            event.namespace = namespaces.join(".");
            event.rnamespace = event.namespace ? new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
            // Clean up the event in case it is being reused
            event.result = undefined;
            if (!event.target) event.target = elem;
            // Clone any incoming data and prepend the event, creating the handler arg list
            data = data == null ? [
                event
            ] : jQuery.makeArray(data, [
                event
            ]);
            // Allow special events to draw outside the lines
            special = jQuery.event.special[type] || {
            };
            if (!onlyHandlers && special.trigger && special.trigger.apply(elem, data) === false) return;
            // Determine event propagation path in advance, per W3C events spec (#9951)
            // Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
            if (!onlyHandlers && !special.noBubble && !isWindow(elem)) {
                bubbleType = special.delegateType || type;
                if (!rfocusMorph.test(bubbleType + type)) cur = cur.parentNode;
                for(; cur; cur = cur.parentNode){
                    eventPath.push(cur);
                    tmp = cur;
                }
                // Only add window if we got to document (e.g., not plain obj or detached DOM)
                if (tmp === (elem.ownerDocument || document1)) eventPath.push(tmp.defaultView || tmp.parentWindow || window1);
            }
            // Fire handlers on the event path
            i = 0;
            while((cur = eventPath[i++]) && !event.isPropagationStopped()){
                lastElement = cur;
                event.type = i > 1 ? bubbleType : special.bindType || type;
                // jQuery handler
                handle = (dataPriv.get(cur, "events") || Object.create(null))[event.type] && dataPriv.get(cur, "handle");
                if (handle) handle.apply(cur, data);
                // Native handler
                handle = ontype && cur[ontype];
                if (handle && handle.apply && acceptData(cur)) {
                    event.result = handle.apply(cur, data);
                    if (event.result === false) event.preventDefault();
                }
            }
            event.type = type;
            // If nobody prevented the default action, do it now
            if (!onlyHandlers && !event.isDefaultPrevented()) {
                if ((!special._default || special._default.apply(eventPath.pop(), data) === false) && acceptData(elem)) // Call a native DOM method on the target with the same name as the event.
                // Don't do default actions on window, that's where global variables be (#6170)
                {
                    if (ontype && isFunction(elem[type]) && !isWindow(elem)) {
                        // Don't re-trigger an onFOO event when we call its FOO() method
                        tmp = elem[ontype];
                        if (tmp) elem[ontype] = null;
                        // Prevent re-triggering of the same event, since we already bubbled it above
                        jQuery.event.triggered = type;
                        if (event.isPropagationStopped()) lastElement.addEventListener(type, stopPropagationCallback);
                        elem[type]();
                        if (event.isPropagationStopped()) lastElement.removeEventListener(type, stopPropagationCallback);
                        jQuery.event.triggered = undefined;
                        if (tmp) elem[ontype] = tmp;
                    }
                }
            }
            return event.result;
        },
        // Piggyback on a donor event to simulate a different one
        // Used only for `focus(in | out)` events
        simulate: function(type, elem, event) {
            var e = jQuery.extend(new jQuery.Event(), event, {
                type: type,
                isSimulated: true
            });
            jQuery.event.trigger(e, null, elem);
        }
    });
    jQuery.fn.extend({
        trigger: function(type, data) {
            return this.each(function() {
                jQuery.event.trigger(type, data, this);
            });
        },
        triggerHandler: function(type, data) {
            var elem = this[0];
            if (elem) return jQuery.event.trigger(type, data, elem, true);
        }
    });
    // Support: Firefox <=44
    // Firefox doesn't have focus(in | out) events
    // Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
    //
    // Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
    // focus(in | out) events fire after focus & blur events,
    // which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
    // Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
    if (!support1.focusin) jQuery.each({
        focus: "focusin",
        blur: "focusout"
    }, function(orig, fix) {
        // Attach a single capturing handler on the document while someone wants focusin/focusout
        var handler = function(event) {
            jQuery.event.simulate(fix, event.target, jQuery.event.fix(event));
        };
        jQuery.event.special[fix] = {
            setup: function() {
                // Handle: regular nodes (via `this.ownerDocument`), window
                // (via `this.document`) & document (via `this`).
                var doc = this.ownerDocument || this.document || this, attaches = dataPriv.access(doc, fix);
                if (!attaches) doc.addEventListener(orig, handler, true);
                dataPriv.access(doc, fix, (attaches || 0) + 1);
            },
            teardown: function() {
                var doc = this.ownerDocument || this.document || this, attaches = dataPriv.access(doc, fix) - 1;
                if (!attaches) {
                    doc.removeEventListener(orig, handler, true);
                    dataPriv.remove(doc, fix);
                } else dataPriv.access(doc, fix, attaches);
            }
        };
    });
    var location = window1.location;
    var nonce = {
        guid: Date.now()
    };
    var rquery = /\?/;
    // Cross-browser xml parsing
    jQuery.parseXML = function(data) {
        var xml, parserErrorElem;
        if (!data || typeof data !== "string") return null;
        // Support: IE 9 - 11 only
        // IE throws on parseFromString with invalid input.
        try {
            xml = new window1.DOMParser().parseFromString(data, "text/xml");
        } catch (e) {
        }
        parserErrorElem = xml && xml.getElementsByTagName("parsererror")[0];
        if (!xml || parserErrorElem) jQuery.error("Invalid XML: " + (parserErrorElem ? jQuery.map(parserErrorElem.childNodes, function(el) {
            return el.textContent;
        }).join("\n") : data));
        return xml;
    };
    var rbracket = /\[\]$/, rCRLF = /\r?\n/g, rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i, rsubmittable = /^(?:input|select|textarea|keygen)/i;
    function buildParams(prefix, obj, traditional, add) {
        var name;
        if (Array.isArray(obj)) // Serialize array item.
        jQuery.each(obj, function(i, v) {
            if (traditional || rbracket.test(prefix)) // Treat each array item as a scalar.
            add(prefix, v);
            else // Item is non-scalar (array or object), encode its numeric index.
            buildParams(prefix + "[" + (typeof v === "object" && v != null ? i : "") + "]", v, traditional, add);
        });
        else if (!traditional && toType(obj) === "object") // Serialize object item.
        for(name in obj)buildParams(prefix + "[" + name + "]", obj[name], traditional, add);
        else // Serialize scalar item.
        add(prefix, obj);
    }
    // Serialize an array of form elements or a set of
    // key/values into a query string
    jQuery.param = function(a, traditional) {
        var prefix, s = [], add = function(key, valueOrFunction) {
            // If value is a function, invoke it and use its return value
            var value = isFunction(valueOrFunction) ? valueOrFunction() : valueOrFunction;
            s[s.length] = encodeURIComponent(key) + "=" + encodeURIComponent(value == null ? "" : value);
        };
        if (a == null) return "";
        // If an array was passed in, assume that it is an array of form elements.
        if (Array.isArray(a) || a.jquery && !jQuery.isPlainObject(a)) // Serialize the form elements
        jQuery.each(a, function() {
            add(this.name, this.value);
        });
        else // If traditional, encode the "old" way (the way 1.3.2 or older
        // did it), otherwise encode params recursively.
        for(prefix in a)buildParams(prefix, a[prefix], traditional, add);
        // Return the resulting serialization
        return s.join("&");
    };
    jQuery.fn.extend({
        serialize: function() {
            return jQuery.param(this.serializeArray());
        },
        serializeArray: function() {
            return this.map(function() {
                // Can add propHook for "elements" to filter or add form elements
                var elements = jQuery.prop(this, "elements");
                return elements ? jQuery.makeArray(elements) : this;
            }).filter(function() {
                var type = this.type;
                // Use .is( ":disabled" ) so that fieldset[disabled] works
                return this.name && !jQuery(this).is(":disabled") && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !rcheckableType.test(type));
            }).map(function(_i, elem) {
                var val1 = jQuery(this).val();
                if (val1 == null) return null;
                if (Array.isArray(val1)) return jQuery.map(val1, function(val) {
                    return {
                        name: elem.name,
                        value: val.replace(rCRLF, "\r\n")
                    };
                });
                return {
                    name: elem.name,
                    value: val1.replace(rCRLF, "\r\n")
                };
            }).get();
        }
    });
    var r20 = /%20/g, rhash = /#.*$/, rantiCache = /([?&])_=[^&]*/, rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg, // #7653, #8125, #8152: local protocol detection
    rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, rnoContent = /^(?:GET|HEAD)$/, rprotocol = /^\/\//, /* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */ prefilters = {
    }, /* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */ transports = {
    }, // Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
    allTypes = "*/".concat("*"), // Anchor tag for parsing the document origin
    originAnchor = document1.createElement("a");
    originAnchor.href = location.href;
    // Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
    function addToPrefiltersOrTransports(structure) {
        // dataTypeExpression is optional and defaults to "*"
        return function(dataTypeExpression, func) {
            if (typeof dataTypeExpression !== "string") {
                func = dataTypeExpression;
                dataTypeExpression = "*";
            }
            var dataType, i = 0, dataTypes = dataTypeExpression.toLowerCase().match(rnothtmlwhite) || [];
            if (isFunction(func)) {
                // For each dataType in the dataTypeExpression
                while(dataType = dataTypes[i++])// Prepend if requested
                if (dataType[0] === "+") {
                    dataType = dataType.slice(1) || "*";
                    (structure[dataType] = structure[dataType] || []).unshift(func);
                // Otherwise append
                } else (structure[dataType] = structure[dataType] || []).push(func);
            }
        };
    }
    // Base inspection function for prefilters and transports
    function inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR) {
        var inspected = {
        }, seekingTransport = structure === transports;
        function inspect(dataType) {
            var selected;
            inspected[dataType] = true;
            jQuery.each(structure[dataType] || [], function(_, prefilterOrFactory) {
                var dataTypeOrTransport = prefilterOrFactory(options, originalOptions, jqXHR);
                if (typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[dataTypeOrTransport]) {
                    options.dataTypes.unshift(dataTypeOrTransport);
                    inspect(dataTypeOrTransport);
                    return false;
                } else if (seekingTransport) return !(selected = dataTypeOrTransport);
            });
            return selected;
        }
        return inspect(options.dataTypes[0]) || !inspected["*"] && inspect("*");
    }
    // A special extend for ajax options
    // that takes "flat" options (not to be deep extended)
    // Fixes #9887
    function ajaxExtend(target, src) {
        var key, deep, flatOptions = jQuery.ajaxSettings.flatOptions || {
        };
        for(key in src)if (src[key] !== undefined) (flatOptions[key] ? target : deep || (deep = {
        }))[key] = src[key];
        if (deep) jQuery.extend(true, target, deep);
        return target;
    }
    /* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */ function ajaxHandleResponses(s, jqXHR, responses) {
        var ct, type, finalDataType, firstDataType, contents = s.contents, dataTypes = s.dataTypes;
        // Remove auto dataType and get content-type in the process
        while(dataTypes[0] === "*"){
            dataTypes.shift();
            if (ct === undefined) ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
        }
        // Check if we're dealing with a known content-type
        if (ct) {
            for(type in contents)if (contents[type] && contents[type].test(ct)) {
                dataTypes.unshift(type);
                break;
            }
        }
        // Check to see if we have a response for the expected dataType
        if (dataTypes[0] in responses) finalDataType = dataTypes[0];
        else {
            // Try convertible dataTypes
            for(type in responses){
                if (!dataTypes[0] || s.converters[type + " " + dataTypes[0]]) {
                    finalDataType = type;
                    break;
                }
                if (!firstDataType) firstDataType = type;
            }
            // Or just use first one
            finalDataType = finalDataType || firstDataType;
        }
        // If we found a dataType
        // We add the dataType to the list if needed
        // and return the corresponding response
        if (finalDataType) {
            if (finalDataType !== dataTypes[0]) dataTypes.unshift(finalDataType);
            return responses[finalDataType];
        }
    }
    /* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */ function ajaxConvert(s, response, jqXHR, isSuccess) {
        var conv2, current, conv, tmp, prev, converters = {
        }, // Work with a copy of dataTypes in case we need to modify it for conversion
        dataTypes = s.dataTypes.slice();
        // Create converters map with lowercased keys
        if (dataTypes[1]) for(conv in s.converters)converters[conv.toLowerCase()] = s.converters[conv];
        current = dataTypes.shift();
        // Convert to each sequential dataType
        while(current){
            if (s.responseFields[current]) jqXHR[s.responseFields[current]] = response;
            // Apply the dataFilter if provided
            if (!prev && isSuccess && s.dataFilter) response = s.dataFilter(response, s.dataType);
            prev = current;
            current = dataTypes.shift();
            if (current) {
                // There's only work to do if current dataType is non-auto
                if (current === "*") current = prev;
                else if (prev !== "*" && prev !== current) {
                    // Seek a direct converter
                    conv = converters[prev + " " + current] || converters["* " + current];
                    // If none found, seek a pair
                    if (!conv) for(conv2 in converters){
                        // If conv2 outputs current
                        tmp = conv2.split(" ");
                        if (tmp[1] === current) {
                            // If prev can be converted to accepted input
                            conv = converters[prev + " " + tmp[0]] || converters["* " + tmp[0]];
                            if (conv) {
                                // Condense equivalence converters
                                if (conv === true) conv = converters[conv2];
                                else if (converters[conv2] !== true) {
                                    current = tmp[0];
                                    dataTypes.unshift(tmp[1]);
                                }
                                break;
                            }
                        }
                    }
                    // Apply converter (if not an equivalence)
                    if (conv !== true) {
                        // Unless errors are allowed to bubble, catch and return them
                        if (conv && s.throws) response = conv(response);
                        else try {
                            response = conv(response);
                        } catch (e) {
                            return {
                                state: "parsererror",
                                error: conv ? e : "No conversion from " + prev + " to " + current
                            };
                        }
                    }
                }
            }
        }
        return {
            state: "success",
            data: response
        };
    }
    jQuery.extend({
        // Counter for holding the number of active queries
        active: 0,
        // Last-Modified header cache for next request
        lastModified: {
        },
        etag: {
        },
        ajaxSettings: {
            url: location.href,
            type: "GET",
            isLocal: rlocalProtocol.test(location.protocol),
            global: true,
            processData: true,
            async: true,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            /*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/ accepts: {
                "*": allTypes,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            // Data converters
            // Keys separate source (or catchall "*") and destination types with a single space
            converters: {
                // Convert anything to text
                "* text": String,
                // Text to html (true = no transformation)
                "text html": true,
                // Evaluate text as a json expression
                "text json": JSON.parse,
                // Parse text as xml
                "text xml": jQuery.parseXML
            },
            // For options that shouldn't be deep extended:
            // you can add your own custom options here if
            // and when you create one that shouldn't be
            // deep extended (see ajaxExtend)
            flatOptions: {
                url: true,
                context: true
            }
        },
        // Creates a full fledged settings object into target
        // with both ajaxSettings and settings fields.
        // If target is omitted, writes into ajaxSettings.
        ajaxSetup: function(target, settings) {
            return settings ? // Building a settings object
            ajaxExtend(ajaxExtend(target, jQuery.ajaxSettings), settings) : // Extending ajaxSettings
            ajaxExtend(jQuery.ajaxSettings, target);
        },
        ajaxPrefilter: addToPrefiltersOrTransports(prefilters),
        ajaxTransport: addToPrefiltersOrTransports(transports),
        // Main method
        ajax: function(url, options) {
            // If url is an object, simulate pre-1.5 signature
            if (typeof url === "object") {
                options = url;
                url = undefined;
            }
            // Force options to be an object
            options = options || {
            };
            var transport, // URL without anti-cache param
            cacheURL, // Response headers
            responseHeadersString, responseHeaders, // timeout handle
            timeoutTimer, // Url cleanup var
            urlAnchor, // Request state (becomes false upon send and true upon completion)
            completed, // To know if global events are to be dispatched
            fireGlobals, // Loop variable
            i, // uncached part of the url
            uncached, // Create the final options object
            s = jQuery.ajaxSetup({
            }, options), // Callbacks context
            callbackContext = s.context || s, // Context for global events is callbackContext if it is a DOM node or jQuery collection
            globalEventContext = s.context && (callbackContext.nodeType || callbackContext.jquery) ? jQuery(callbackContext) : jQuery.event, // Deferreds
            deferred = jQuery.Deferred(), completeDeferred = jQuery.Callbacks("once memory"), // Status-dependent callbacks
            statusCode = s.statusCode || {
            }, // Headers (they are sent all at once)
            requestHeaders = {
            }, requestHeadersNames = {
            }, // Default abort message
            strAbort = "canceled", // Fake xhr
            jqXHR = {
                readyState: 0,
                // Builds headers hashtable if needed
                getResponseHeader: function(key) {
                    var match;
                    if (completed) {
                        if (!responseHeaders) {
                            responseHeaders = {
                            };
                            while(match = rheaders.exec(responseHeadersString))responseHeaders[match[1].toLowerCase() + " "] = (responseHeaders[match[1].toLowerCase() + " "] || []).concat(match[2]);
                        }
                        match = responseHeaders[key.toLowerCase() + " "];
                    }
                    return match == null ? null : match.join(", ");
                },
                // Raw string
                getAllResponseHeaders: function() {
                    return completed ? responseHeadersString : null;
                },
                // Caches the header
                setRequestHeader: function(name, value) {
                    if (completed == null) {
                        name = requestHeadersNames[name.toLowerCase()] = requestHeadersNames[name.toLowerCase()] || name;
                        requestHeaders[name] = value;
                    }
                    return this;
                },
                // Overrides response content-type header
                overrideMimeType: function(type) {
                    if (completed == null) s.mimeType = type;
                    return this;
                },
                // Status-dependent callbacks
                statusCode: function(map) {
                    var code;
                    if (map) {
                        if (completed) // Execute the appropriate callbacks
                        jqXHR.always(map[jqXHR.status]);
                        else // Lazy-add the new callbacks in a way that preserves old ones
                        for(code in map)statusCode[code] = [
                            statusCode[code],
                            map[code]
                        ];
                    }
                    return this;
                },
                // Cancel the request
                abort: function(statusText) {
                    var finalText = statusText || strAbort;
                    if (transport) transport.abort(finalText);
                    done(0, finalText);
                    return this;
                }
            };
            // Attach deferreds
            deferred.promise(jqXHR);
            // Add protocol if not provided (prefilters might expect it)
            // Handle falsy url in the settings object (#10093: consistency with old signature)
            // We also use the url parameter if available
            s.url = ((url || s.url || location.href) + "").replace(rprotocol, location.protocol + "//");
            // Alias method option to type as per ticket #12004
            s.type = options.method || options.type || s.method || s.type;
            // Extract dataTypes list
            s.dataTypes = (s.dataType || "*").toLowerCase().match(rnothtmlwhite) || [
                ""
            ];
            // A cross-domain request is in order when the origin doesn't match the current origin.
            if (s.crossDomain == null) {
                urlAnchor = document1.createElement("a");
                // Support: IE <=8 - 11, Edge 12 - 15
                // IE throws exception on accessing the href property if url is malformed,
                // e.g. http://example.com:80x/
                try {
                    urlAnchor.href = s.url;
                    // Support: IE <=8 - 11 only
                    // Anchor's host property isn't correctly set when s.url is relative
                    urlAnchor.href = urlAnchor.href;
                    s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !== urlAnchor.protocol + "//" + urlAnchor.host;
                } catch (e) {
                    // If there is an error parsing the URL, assume it is crossDomain,
                    // it can be rejected by the transport if it is invalid
                    s.crossDomain = true;
                }
            }
            // Convert data if not already a string
            if (s.data && s.processData && typeof s.data !== "string") s.data = jQuery.param(s.data, s.traditional);
            // Apply prefilters
            inspectPrefiltersOrTransports(prefilters, s, options, jqXHR);
            // If request was aborted inside a prefilter, stop there
            if (completed) return jqXHR;
            // We can fire global events as of now if asked to
            // Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
            fireGlobals = jQuery.event && s.global;
            // Watch for a new set of requests
            if (fireGlobals && (jQuery.active++) === 0) jQuery.event.trigger("ajaxStart");
            // Uppercase the type
            s.type = s.type.toUpperCase();
            // Determine if request has content
            s.hasContent = !rnoContent.test(s.type);
            // Save the URL in case we're toying with the If-Modified-Since
            // and/or If-None-Match header later on
            // Remove hash to simplify url manipulation
            cacheURL = s.url.replace(rhash, "");
            // More options handling for requests with no content
            if (!s.hasContent) {
                // Remember the hash so we can put it back
                uncached = s.url.slice(cacheURL.length);
                // If data is available and should be processed, append data to url
                if (s.data && (s.processData || typeof s.data === "string")) {
                    cacheURL += (rquery.test(cacheURL) ? "&" : "?") + s.data;
                    // #9682: remove data so that it's not used in an eventual retry
                    delete s.data;
                }
                // Add or update anti-cache param if needed
                if (s.cache === false) {
                    cacheURL = cacheURL.replace(rantiCache, "$1");
                    uncached = (rquery.test(cacheURL) ? "&" : "?") + "_=" + nonce.guid++ + uncached;
                }
                // Put hash and anti-cache on the URL that will be requested (gh-1732)
                s.url = cacheURL + uncached;
            // Change '%20' to '+' if this is encoded form body content (gh-2658)
            } else if (s.data && s.processData && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0) s.data = s.data.replace(r20, "+");
            // Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
            if (s.ifModified) {
                if (jQuery.lastModified[cacheURL]) jqXHR.setRequestHeader("If-Modified-Since", jQuery.lastModified[cacheURL]);
                if (jQuery.etag[cacheURL]) jqXHR.setRequestHeader("If-None-Match", jQuery.etag[cacheURL]);
            }
            // Set the correct header, if data is being sent
            if (s.data && s.hasContent && s.contentType !== false || options.contentType) jqXHR.setRequestHeader("Content-Type", s.contentType);
            // Set the Accepts header for the server, depending on the dataType
            jqXHR.setRequestHeader("Accept", s.dataTypes[0] && s.accepts[s.dataTypes[0]] ? s.accepts[s.dataTypes[0]] + (s.dataTypes[0] !== "*" ? ", " + allTypes + "; q=0.01" : "") : s.accepts["*"]);
            // Check for headers option
            for(i in s.headers)jqXHR.setRequestHeader(i, s.headers[i]);
            // Allow custom headers/mimetypes and early abort
            if (s.beforeSend && (s.beforeSend.call(callbackContext, jqXHR, s) === false || completed)) // Abort if not done already and return
            return jqXHR.abort();
            // Aborting is no longer a cancellation
            strAbort = "abort";
            // Install callbacks on deferreds
            completeDeferred.add(s.complete);
            jqXHR.done(s.success);
            jqXHR.fail(s.error);
            // Get transport
            transport = inspectPrefiltersOrTransports(transports, s, options, jqXHR);
            // If no transport, we auto-abort
            if (!transport) done(-1, "No Transport");
            else {
                jqXHR.readyState = 1;
                // Send global event
                if (fireGlobals) globalEventContext.trigger("ajaxSend", [
                    jqXHR,
                    s
                ]);
                // If request was aborted inside ajaxSend, stop there
                if (completed) return jqXHR;
                // Timeout
                if (s.async && s.timeout > 0) timeoutTimer = window1.setTimeout(function() {
                    jqXHR.abort("timeout");
                }, s.timeout);
                try {
                    completed = false;
                    transport.send(requestHeaders, done);
                } catch (e) {
                    // Rethrow post-completion exceptions
                    if (completed) throw e;
                    // Propagate others as results
                    done(-1, e);
                }
            }
            // Callback for when everything is done
            function done(status, nativeStatusText, responses, headers) {
                var isSuccess, success, error, response, modified, statusText = nativeStatusText;
                // Ignore repeat invocations
                if (completed) return;
                completed = true;
                // Clear timeout if it exists
                if (timeoutTimer) window1.clearTimeout(timeoutTimer);
                // Dereference transport for early garbage collection
                // (no matter how long the jqXHR object will be used)
                transport = undefined;
                // Cache response headers
                responseHeadersString = headers || "";
                // Set readyState
                jqXHR.readyState = status > 0 ? 4 : 0;
                // Determine if successful
                isSuccess = status >= 200 && status < 300 || status === 304;
                // Get response data
                if (responses) response = ajaxHandleResponses(s, jqXHR, responses);
                // Use a noop converter for missing script but not if jsonp
                if (!isSuccess && jQuery.inArray("script", s.dataTypes) > -1 && jQuery.inArray("json", s.dataTypes) < 0) s.converters["text script"] = function() {
                };
                // Convert no matter what (that way responseXXX fields are always set)
                response = ajaxConvert(s, response, jqXHR, isSuccess);
                // If successful, handle type chaining
                if (isSuccess) {
                    // Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
                    if (s.ifModified) {
                        modified = jqXHR.getResponseHeader("Last-Modified");
                        if (modified) jQuery.lastModified[cacheURL] = modified;
                        modified = jqXHR.getResponseHeader("etag");
                        if (modified) jQuery.etag[cacheURL] = modified;
                    }
                    // if no content
                    if (status === 204 || s.type === "HEAD") statusText = "nocontent";
                    else if (status === 304) statusText = "notmodified";
                    else {
                        statusText = response.state;
                        success = response.data;
                        error = response.error;
                        isSuccess = !error;
                    }
                } else {
                    // Extract error from statusText and normalize for non-aborts
                    error = statusText;
                    if (status || !statusText) {
                        statusText = "error";
                        if (status < 0) status = 0;
                    }
                }
                // Set data for the fake xhr object
                jqXHR.status = status;
                jqXHR.statusText = (nativeStatusText || statusText) + "";
                // Success/Error
                if (isSuccess) deferred.resolveWith(callbackContext, [
                    success,
                    statusText,
                    jqXHR
                ]);
                else deferred.rejectWith(callbackContext, [
                    jqXHR,
                    statusText,
                    error
                ]);
                // Status-dependent callbacks
                jqXHR.statusCode(statusCode);
                statusCode = undefined;
                if (fireGlobals) globalEventContext.trigger(isSuccess ? "ajaxSuccess" : "ajaxError", [
                    jqXHR,
                    s,
                    isSuccess ? success : error
                ]);
                // Complete
                completeDeferred.fireWith(callbackContext, [
                    jqXHR,
                    statusText
                ]);
                if (fireGlobals) {
                    globalEventContext.trigger("ajaxComplete", [
                        jqXHR,
                        s
                    ]);
                    // Handle the global AJAX counter
                    if (!--jQuery.active) jQuery.event.trigger("ajaxStop");
                }
            }
            return jqXHR;
        },
        getJSON: function(url, data, callback) {
            return jQuery.get(url, data, callback, "json");
        },
        getScript: function(url, callback) {
            return jQuery.get(url, undefined, callback, "script");
        }
    });
    jQuery.each([
        "get",
        "post"
    ], function(_i, method) {
        jQuery[method] = function(url, data, callback, type) {
            // Shift arguments if data argument was omitted
            if (isFunction(data)) {
                type = type || callback;
                callback = data;
                data = undefined;
            }
            // The url can be an options object (which then must have .url)
            return jQuery.ajax(jQuery.extend({
                url: url,
                type: method,
                dataType: type,
                data: data,
                success: callback
            }, jQuery.isPlainObject(url) && url));
        };
    });
    jQuery.ajaxPrefilter(function(s) {
        var i;
        for(i in s.headers)if (i.toLowerCase() === "content-type") s.contentType = s.headers[i] || "";
    });
    jQuery._evalUrl = function(url, options, doc) {
        return jQuery.ajax({
            url: url,
            // Make this explicit, since user can override this through ajaxSetup (#11264)
            type: "GET",
            dataType: "script",
            cache: true,
            async: false,
            global: false,
            // Only evaluate the response if it is successful (gh-4126)
            // dataFilter is not invoked for failure responses, so using it instead
            // of the default converter is kludgy but it works.
            converters: {
                "text script": function() {
                }
            },
            dataFilter: function(response) {
                jQuery.globalEval(response, options, doc);
            }
        });
    };
    jQuery.fn.extend({
        wrapAll: function(html) {
            var wrap;
            if (this[0]) {
                if (isFunction(html)) html = html.call(this[0]);
                // The elements to wrap the target around
                wrap = jQuery(html, this[0].ownerDocument).eq(0).clone(true);
                if (this[0].parentNode) wrap.insertBefore(this[0]);
                wrap.map(function() {
                    var elem = this;
                    while(elem.firstElementChild)elem = elem.firstElementChild;
                    return elem;
                }).append(this);
            }
            return this;
        },
        wrapInner: function(html) {
            if (isFunction(html)) return this.each(function(i) {
                jQuery(this).wrapInner(html.call(this, i));
            });
            return this.each(function() {
                var self = jQuery(this), contents = self.contents();
                if (contents.length) contents.wrapAll(html);
                else self.append(html);
            });
        },
        wrap: function(html) {
            var htmlIsFunction = isFunction(html);
            return this.each(function(i) {
                jQuery(this).wrapAll(htmlIsFunction ? html.call(this, i) : html);
            });
        },
        unwrap: function(selector) {
            this.parent(selector).not("body").each(function() {
                jQuery(this).replaceWith(this.childNodes);
            });
            return this;
        }
    });
    jQuery.expr.pseudos.hidden = function(elem) {
        return !jQuery.expr.pseudos.visible(elem);
    };
    jQuery.expr.pseudos.visible = function(elem) {
        return !!(elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length);
    };
    jQuery.ajaxSettings.xhr = function() {
        try {
            return new window1.XMLHttpRequest();
        } catch (e) {
        }
    };
    var xhrSuccessStatus = {
        // File protocol always yields status code 0, assume 200
        0: 200,
        // Support: IE <=9 only
        // #1450: sometimes IE returns 1223 when it should be 204
        1223: 204
    }, xhrSupported = jQuery.ajaxSettings.xhr();
    support1.cors = !!xhrSupported && "withCredentials" in xhrSupported;
    support1.ajax = xhrSupported = !!xhrSupported;
    jQuery.ajaxTransport(function(options) {
        var callback, errorCallback;
        // Cross domain only allowed if supported through XMLHttpRequest
        if (support1.cors || xhrSupported && !options.crossDomain) return {
            send: function(headers, complete) {
                var i, xhr = options.xhr();
                xhr.open(options.type, options.url, options.async, options.username, options.password);
                // Apply custom fields if provided
                if (options.xhrFields) for(i in options.xhrFields)xhr[i] = options.xhrFields[i];
                // Override mime type if needed
                if (options.mimeType && xhr.overrideMimeType) xhr.overrideMimeType(options.mimeType);
                // X-Requested-With header
                // For cross-domain requests, seeing as conditions for a preflight are
                // akin to a jigsaw puzzle, we simply never set it to be sure.
                // (it can always be set on a per-request basis or even using ajaxSetup)
                // For same-domain requests, won't change header if already provided.
                if (!options.crossDomain && !headers["X-Requested-With"]) headers["X-Requested-With"] = "XMLHttpRequest";
                // Set headers
                for(i in headers)xhr.setRequestHeader(i, headers[i]);
                // Callback
                callback = function(type) {
                    return function() {
                        if (callback) {
                            callback = errorCallback = xhr.onload = xhr.onerror = xhr.onabort = xhr.ontimeout = xhr.onreadystatechange = null;
                            if (type === "abort") xhr.abort();
                            else if (type === "error") {
                                // Support: IE <=9 only
                                // On a manual native abort, IE9 throws
                                // errors on any property access that is not readyState
                                if (typeof xhr.status !== "number") complete(0, "error");
                                else complete(// File: protocol always yields status 0; see #8605, #14207
                                xhr.status, xhr.statusText);
                            } else complete(xhrSuccessStatus[xhr.status] || xhr.status, xhr.statusText, // Support: IE <=9 only
                            // IE9 has no XHR2 but throws on binary (trac-11426)
                            // For XHR2 non-text, let the caller handle it (gh-2498)
                            (xhr.responseType || "text") !== "text" || typeof xhr.responseText !== "string" ? {
                                binary: xhr.response
                            } : {
                                text: xhr.responseText
                            }, xhr.getAllResponseHeaders());
                        }
                    };
                };
                // Listen to events
                xhr.onload = callback();
                errorCallback = xhr.onerror = xhr.ontimeout = callback("error");
                // Support: IE 9 only
                // Use onreadystatechange to replace onabort
                // to handle uncaught aborts
                if (xhr.onabort !== undefined) xhr.onabort = errorCallback;
                else xhr.onreadystatechange = function() {
                    // Check readyState before timeout as it changes
                    if (xhr.readyState === 4) // Allow onerror to be called first,
                    // but that will not handle a native abort
                    // Also, save errorCallback to a variable
                    // as xhr.onerror cannot be accessed
                    window1.setTimeout(function() {
                        if (callback) errorCallback();
                    });
                };
                // Create the abort callback
                callback = callback("abort");
                try {
                    // Do send the request (this may raise an exception)
                    xhr.send(options.hasContent && options.data || null);
                } catch (e) {
                    // #14683: Only rethrow if this hasn't been notified as an error yet
                    if (callback) throw e;
                }
            },
            abort: function() {
                if (callback) callback();
            }
        };
    });
    // Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
    jQuery.ajaxPrefilter(function(s) {
        if (s.crossDomain) s.contents.script = false;
    });
    // Install script dataType
    jQuery.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(text) {
                jQuery.globalEval(text);
                return text;
            }
        }
    });
    // Handle cache's special case and crossDomain
    jQuery.ajaxPrefilter("script", function(s) {
        if (s.cache === undefined) s.cache = false;
        if (s.crossDomain) s.type = "GET";
    });
    // Bind script tag hack transport
    jQuery.ajaxTransport("script", function(s) {
        // This transport only deals with cross domain or forced-by-attrs requests
        if (s.crossDomain || s.scriptAttrs) {
            var script, callback;
            return {
                send: function(_, complete) {
                    script = jQuery("<script>").attr(s.scriptAttrs || {
                    }).prop({
                        charset: s.scriptCharset,
                        src: s.url
                    }).on("load error", callback = function(evt) {
                        script.remove();
                        callback = null;
                        if (evt) complete(evt.type === "error" ? 404 : 200, evt.type);
                    });
                    // Use native DOM manipulation to avoid our domManip AJAX trickery
                    document1.head.appendChild(script[0]);
                },
                abort: function() {
                    if (callback) callback();
                }
            };
        }
    });
    var oldCallbacks = [], rjsonp = /(=)\?(?=&|$)|\?\?/;
    // Default jsonp settings
    jQuery.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var callback = oldCallbacks.pop() || jQuery.expando + "_" + nonce.guid++;
            this[callback] = true;
            return callback;
        }
    });
    // Detect, normalize options and install callbacks for jsonp requests
    jQuery.ajaxPrefilter("json jsonp", function(s, originalSettings, jqXHR) {
        var callbackName, overwritten, responseContainer, jsonProp = s.jsonp !== false && (rjsonp.test(s.url) ? "url" : typeof s.data === "string" && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && rjsonp.test(s.data) && "data");
        // Handle iff the expected data type is "jsonp" or we have a parameter to set
        if (jsonProp || s.dataTypes[0] === "jsonp") {
            // Get callback name, remembering preexisting value associated with it
            callbackName = s.jsonpCallback = isFunction(s.jsonpCallback) ? s.jsonpCallback() : s.jsonpCallback;
            // Insert callback into url or form data
            if (jsonProp) s[jsonProp] = s[jsonProp].replace(rjsonp, "$1" + callbackName);
            else if (s.jsonp !== false) s.url += (rquery.test(s.url) ? "&" : "?") + s.jsonp + "=" + callbackName;
            // Use data converter to retrieve json after script execution
            s.converters["script json"] = function() {
                if (!responseContainer) jQuery.error(callbackName + " was not called");
                return responseContainer[0];
            };
            // Force json dataType
            s.dataTypes[0] = "json";
            // Install callback
            overwritten = window1[callbackName];
            window1[callbackName] = function() {
                responseContainer = arguments;
            };
            // Clean-up function (fires after converters)
            jqXHR.always(function() {
                // If previous value didn't exist - remove it
                if (overwritten === undefined) jQuery(window1).removeProp(callbackName);
                else window1[callbackName] = overwritten;
                // Save back as free
                if (s[callbackName]) {
                    // Make sure that re-using the options doesn't screw things around
                    s.jsonpCallback = originalSettings.jsonpCallback;
                    // Save the callback name for future use
                    oldCallbacks.push(callbackName);
                }
                // Call if it was a function and we have a response
                if (responseContainer && isFunction(overwritten)) overwritten(responseContainer[0]);
                responseContainer = overwritten = undefined;
            });
            // Delegate to script
            return "script";
        }
    });
    // Support: Safari 8 only
    // In Safari 8 documents created via document.implementation.createHTMLDocument
    // collapse sibling forms: the second one becomes a child of the first one.
    // Because of that, this security measure has to be disabled in Safari 8.
    // https://bugs.webkit.org/show_bug.cgi?id=137337
    support1.createHTMLDocument = (function() {
        var body = document1.implementation.createHTMLDocument("").body;
        body.innerHTML = "<form></form><form></form>";
        return body.childNodes.length === 2;
    })();
    // Argument "data" should be string of html
    // context (optional): If specified, the fragment will be created in this context,
    // defaults to document
    // keepScripts (optional): If true, will include scripts passed in the html string
    jQuery.parseHTML = function(data, context, keepScripts) {
        if (typeof data !== "string") return [];
        if (typeof context === "boolean") {
            keepScripts = context;
            context = false;
        }
        var base, parsed, scripts;
        if (!context) {
            // Stop scripts or inline event handlers from being executed immediately
            // by using document.implementation
            if (support1.createHTMLDocument) {
                context = document1.implementation.createHTMLDocument("");
                // Set the base href for the created document
                // so any parsed elements with URLs
                // are based on the document's URL (gh-2965)
                base = context.createElement("base");
                base.href = document1.location.href;
                context.head.appendChild(base);
            } else context = document1;
        }
        parsed = rsingleTag.exec(data);
        scripts = !keepScripts && [];
        // Single tag
        if (parsed) return [
            context.createElement(parsed[1])
        ];
        parsed = buildFragment([
            data
        ], context, scripts);
        if (scripts && scripts.length) jQuery(scripts).remove();
        return jQuery.merge([], parsed.childNodes);
    };
    /**
 * Load a url into a page
 */ jQuery.fn.load = function(url, params, callback) {
        var selector, type, response, self = this, off = url.indexOf(" ");
        if (off > -1) {
            selector = stripAndCollapse(url.slice(off));
            url = url.slice(0, off);
        }
        // If it's a function
        if (isFunction(params)) {
            // We assume that it's the callback
            callback = params;
            params = undefined;
        // Otherwise, build a param string
        } else if (params && typeof params === "object") type = "POST";
        // If we have elements to modify, make the request
        if (self.length > 0) jQuery.ajax({
            url: url,
            // If "type" variable is undefined, then "GET" method will be used.
            // Make value of this field explicit since
            // user can override it through ajaxSetup method
            type: type || "GET",
            dataType: "html",
            data: params
        }).done(function(responseText) {
            // Save response for use in complete callback
            response = arguments;
            self.html(selector ? // If a selector was specified, locate the right elements in a dummy div
            // Exclude scripts to avoid IE 'Permission Denied' errors
            jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector) : // Otherwise use the full result
            responseText);
        // If the request succeeds, this function gets "data", "status", "jqXHR"
        // but they are ignored because response was set above.
        // If it fails, this function gets "jqXHR", "status", "error"
        }).always(callback && function(jqXHR, status) {
            self.each(function() {
                callback.apply(this, response || [
                    jqXHR.responseText,
                    status,
                    jqXHR
                ]);
            });
        });
        return this;
    };
    jQuery.expr.pseudos.animated = function(elem) {
        return jQuery.grep(jQuery.timers, function(fn) {
            return elem === fn.elem;
        }).length;
    };
    jQuery.offset = {
        setOffset: function(elem, options, i) {
            var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition, position = jQuery.css(elem, "position"), curElem = jQuery(elem), props = {
            };
            // Set position first, in-case top/left are set even on static elem
            if (position === "static") elem.style.position = "relative";
            curOffset = curElem.offset();
            curCSSTop = jQuery.css(elem, "top");
            curCSSLeft = jQuery.css(elem, "left");
            calculatePosition = (position === "absolute" || position === "fixed") && (curCSSTop + curCSSLeft).indexOf("auto") > -1;
            // Need to be able to calculate position if either
            // top or left is auto and position is either absolute or fixed
            if (calculatePosition) {
                curPosition = curElem.position();
                curTop = curPosition.top;
                curLeft = curPosition.left;
            } else {
                curTop = parseFloat(curCSSTop) || 0;
                curLeft = parseFloat(curCSSLeft) || 0;
            }
            if (isFunction(options)) // Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
            options = options.call(elem, i, jQuery.extend({
            }, curOffset));
            if (options.top != null) props.top = options.top - curOffset.top + curTop;
            if (options.left != null) props.left = options.left - curOffset.left + curLeft;
            if ("using" in options) options.using.call(elem, props);
            else curElem.css(props);
        }
    };
    jQuery.fn.extend({
        // offset() relates an element's border box to the document origin
        offset: function(options) {
            // Preserve chaining for setter
            if (arguments.length) return options === undefined ? this : this.each(function(i) {
                jQuery.offset.setOffset(this, options, i);
            });
            var rect, win, elem = this[0];
            if (!elem) return;
            // Return zeros for disconnected and hidden (display: none) elements (gh-2310)
            // Support: IE <=11 only
            // Running getBoundingClientRect on a
            // disconnected node in IE throws an error
            if (!elem.getClientRects().length) return {
                top: 0,
                left: 0
            };
            // Get document-relative position by adding viewport scroll to viewport-relative gBCR
            rect = elem.getBoundingClientRect();
            win = elem.ownerDocument.defaultView;
            return {
                top: rect.top + win.pageYOffset,
                left: rect.left + win.pageXOffset
            };
        },
        // position() relates an element's margin box to its offset parent's padding box
        // This corresponds to the behavior of CSS absolute positioning
        position: function() {
            if (!this[0]) return;
            var offsetParent, offset, doc, elem = this[0], parentOffset = {
                top: 0,
                left: 0
            };
            // position:fixed elements are offset from the viewport, which itself always has zero offset
            if (jQuery.css(elem, "position") === "fixed") // Assume position:fixed implies availability of getBoundingClientRect
            offset = elem.getBoundingClientRect();
            else {
                offset = this.offset();
                // Account for the *real* offset parent, which can be the document or its root element
                // when a statically positioned element is identified
                doc = elem.ownerDocument;
                offsetParent = elem.offsetParent || doc.documentElement;
                while(offsetParent && (offsetParent === doc.body || offsetParent === doc.documentElement) && jQuery.css(offsetParent, "position") === "static")offsetParent = offsetParent.parentNode;
                if (offsetParent && offsetParent !== elem && offsetParent.nodeType === 1) {
                    // Incorporate borders into its offset, since they are outside its content origin
                    parentOffset = jQuery(offsetParent).offset();
                    parentOffset.top += jQuery.css(offsetParent, "borderTopWidth", true);
                    parentOffset.left += jQuery.css(offsetParent, "borderLeftWidth", true);
                }
            }
            // Subtract parent offsets and element margins
            return {
                top: offset.top - parentOffset.top - jQuery.css(elem, "marginTop", true),
                left: offset.left - parentOffset.left - jQuery.css(elem, "marginLeft", true)
            };
        },
        // This method will return documentElement in the following cases:
        // 1) For the element inside the iframe without offsetParent, this method will return
        //    documentElement of the parent window
        // 2) For the hidden or detached element
        // 3) For body or html element, i.e. in case of the html node - it will return itself
        //
        // but those exceptions were never presented as a real life use-cases
        // and might be considered as more preferable results.
        //
        // This logic, however, is not guaranteed and can change at any point in the future
        offsetParent: function() {
            return this.map(function() {
                var offsetParent = this.offsetParent;
                while(offsetParent && jQuery.css(offsetParent, "position") === "static")offsetParent = offsetParent.offsetParent;
                return offsetParent || documentElement;
            });
        }
    });
    // Create scrollLeft and scrollTop methods
    jQuery.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(method, prop) {
        var top = "pageYOffset" === prop;
        jQuery.fn[method] = function(val2) {
            return access(this, function(elem, method, val) {
                // Coalesce documents and windows
                var win;
                if (isWindow(elem)) win = elem;
                else if (elem.nodeType === 9) win = elem.defaultView;
                if (val === undefined) return win ? win[prop] : elem[method];
                if (win) win.scrollTo(!top ? val : win.pageXOffset, top ? val : win.pageYOffset);
                else elem[method] = val;
            }, method, val2, arguments.length);
        };
    });
    // Support: Safari <=7 - 9.1, Chrome <=37 - 49
    // Add the top/left cssHooks using jQuery.fn.position
    // Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
    // Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
    // getComputedStyle returns percent when specified for top/left/bottom/right;
    // rather than make the css module depend on the offset module, just check for it here
    jQuery.each([
        "top",
        "left"
    ], function(_i, prop) {
        jQuery.cssHooks[prop] = addGetHookIf(support1.pixelPosition, function(elem, computed) {
            if (computed) {
                computed = curCSS(elem, prop);
                // If curCSS returns percentage, fallback to offset
                return rnumnonpx.test(computed) ? jQuery(elem).position()[prop] + "px" : computed;
            }
        });
    });
    // Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
    jQuery.each({
        Height: "height",
        Width: "width"
    }, function(name, type1) {
        jQuery.each({
            padding: "inner" + name,
            content: type1,
            "": "outer" + name
        }, function(defaultExtra, funcName) {
            // Margin is only for outerHeight, outerWidth
            jQuery.fn[funcName] = function(margin, value8) {
                var chainable = arguments.length && (defaultExtra || typeof margin !== "boolean"), extra = defaultExtra || (margin === true || value8 === true ? "margin" : "border");
                return access(this, function(elem, type, value) {
                    var doc;
                    if (isWindow(elem)) // $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
                    return funcName.indexOf("outer") === 0 ? elem["inner" + name] : elem.document.documentElement["client" + name];
                    // Get document width or height
                    if (elem.nodeType === 9) {
                        doc = elem.documentElement;
                        // Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
                        // whichever is greatest
                        return Math.max(elem.body["scroll" + name], doc["scroll" + name], elem.body["offset" + name], doc["offset" + name], doc["client" + name]);
                    }
                    return value === undefined ? // Get width or height on the element, requesting but not forcing parseFloat
                    jQuery.css(elem, type, extra) : // Set width or height on the element
                    jQuery.style(elem, type, value, extra);
                }, type1, chainable ? margin : undefined, chainable);
            };
        });
    });
    jQuery.each([
        "ajaxStart",
        "ajaxStop",
        "ajaxComplete",
        "ajaxError",
        "ajaxSuccess",
        "ajaxSend"
    ], function(_i, type) {
        jQuery.fn[type] = function(fn) {
            return this.on(type, fn);
        };
    });
    jQuery.fn.extend({
        bind: function(types, data, fn) {
            return this.on(types, null, data, fn);
        },
        unbind: function(types, fn) {
            return this.off(types, null, fn);
        },
        delegate: function(selector, types, data, fn) {
            return this.on(types, selector, data, fn);
        },
        undelegate: function(selector, types, fn) {
            // ( namespace ) or ( selector, types [, fn] )
            return arguments.length === 1 ? this.off(selector, "**") : this.off(types, selector || "**", fn);
        },
        hover: function(fnOver, fnOut) {
            return this.mouseenter(fnOver).mouseleave(fnOut || fnOver);
        }
    });
    jQuery.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(_i, name) {
        // Handle event binding
        jQuery.fn[name] = function(data, fn) {
            return arguments.length > 0 ? this.on(name, null, data, fn) : this.trigger(name);
        };
    });
    // Support: Android <=4.0 only
    // Make sure we trim BOM and NBSP
    var rtrim1 = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    // Bind a function to a context, optionally partially applying any
    // arguments.
    // jQuery.proxy is deprecated to promote standards (specifically Function#bind)
    // However, it is not slated for removal any time soon
    jQuery.proxy = function(fn, context) {
        var tmp, args, proxy;
        if (typeof context === "string") {
            tmp = fn[context];
            context = fn;
            fn = tmp;
        }
        // Quick check to determine if target is callable, in the spec
        // this throws a TypeError, but we will just return undefined.
        if (!isFunction(fn)) return undefined;
        // Simulated bind
        args = slice1.call(arguments, 2);
        proxy = function() {
            return fn.apply(context || this, args.concat(slice1.call(arguments)));
        };
        // Set the guid of unique handler to the same of original handler, so it can be removed
        proxy.guid = fn.guid = fn.guid || jQuery.guid++;
        return proxy;
    };
    jQuery.holdReady = function(hold) {
        if (hold) jQuery.readyWait++;
        else jQuery.ready(true);
    };
    jQuery.isArray = Array.isArray;
    jQuery.parseJSON = JSON.parse;
    jQuery.nodeName = nodeName1;
    jQuery.isFunction = isFunction;
    jQuery.isWindow = isWindow;
    jQuery.camelCase = camelCase;
    jQuery.type = toType;
    jQuery.now = Date.now;
    jQuery.isNumeric = function(obj) {
        // As of jQuery 3.0, isNumeric is limited to
        // strings and numbers (primitives or objects)
        // that can be coerced to finite numbers (gh-2662)
        var type = jQuery.type(obj);
        return (type === "number" || type === "string") && // parseFloat NaNs numeric-cast false positives ("")
        // ...but misinterprets leading-number strings, particularly hex literals ("0x...")
        // subtraction forces infinities to NaN
        !isNaN(obj - parseFloat(obj));
    };
    jQuery.trim = function(text) {
        return text == null ? "" : (text + "").replace(rtrim1, "");
    };
    // Register as a named AMD module, since jQuery can be concatenated with other
    // files that may use define, but not via a proper concatenation script that
    // understands anonymous AMD modules. A named AMD is safest and most robust
    // way to register. Lowercase jquery is used because AMD module names are
    // derived from file names, and jQuery is normally delivered in a lowercase
    // file name. Do this after creating the global so that if an AMD module wants
    // to call noConflict to hide this version of jQuery, it will work.
    // Note that for maximum portability, libraries that are not jQuery should
    // declare themselves as anonymous modules, and avoid setting a global if an
    // AMD loader is present. jQuery is a special case. For more information, see
    // https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon
    if (typeof define === "function" && define.amd) define("jquery", [], function() {
        return jQuery;
    });
    var // Map over jQuery in case of overwrite
    _jQuery = window1.jQuery, // Map over the $ in case of overwrite
    _$ = window1.$;
    jQuery.noConflict = function(deep) {
        if (window1.$ === jQuery) window1.$ = _$;
        if (deep && window1.jQuery === jQuery) window1.jQuery = _jQuery;
        return jQuery;
    };
    // Expose jQuery and $ identifiers, even in AMD
    // (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
    // and CommonJS for browser emulators (#13566)
    if (typeof noGlobal === "undefined") window1.jQuery = window1.$ = jQuery;
    return jQuery;
});

},{}],"8rc8L":[function(require,module,exports) {
/*! Backstretch - v2.1.15 - 2017-06-22\n* Copyright (c) 2017 Scott Robbin;* Fork of improvements - by Daniel Cohen Gindi (danielgindi@gmail.com) Licensed MIT */ !function(a1, b1, c1) {
    function d1(a) {
        return m1.hasOwnProperty(a) ? a : "cover";
    }
    var e1 = /^.*(youtu\.be\/|youtube\.com\/v\/|youtube\.com\/embed\/|youtube\.com\/watch\?v=|youtube\.com\/watch\?.*\&v=)([^#\&\?]*).*/i;
    a1.fn.backstretch = function(d, e) {
        var f = arguments;
        0 === a1(b1).scrollTop() && b1.scrollTo(0, 0);
        var g;
        return this.each(function(b) {
            var h = a1(this), i = h.data("backstretch");
            if (i) {
                if ("string" == typeof f[0] && "function" == typeof i[f[0]]) {
                    var j = i[f[0]].apply(i, Array.prototype.slice.call(f, 1));
                    return j === i && (j = c1), void (j !== c1 && (g = g || [], g[b] = j));
                }
                e = a1.extend(i.options, e), i.hasOwnProperty("destroy") && i.destroy(!0);
            }
            if (!d || d && 0 === d.length) {
                var k = h.css("background-image");
                k && "none" !== k ? d = [
                    {
                        url: h.css("backgroundImage").replace(/url\(|\)|"|'/g, "")
                    }
                ] : a1.error("No images were supplied for Backstretch, or element must have a CSS-defined background image.");
            }
            i = new n1(this, d, e || {
            }), h.data("backstretch", i);
        }), g ? 1 === g.length ? g[0] : g : this;
    }, a1.backstretch = function(b, c) {
        return a1("body").backstretch(b, c).data("backstretch");
    }, a1.expr[":"].backstretch = function(b) {
        return a1(b).data("backstretch") !== c1;
    }, a1.fn.backstretch.defaults = {
        duration: 5000,
        transition: "fade",
        transitionDuration: 0,
        animateFirst: !0,
        alignX: 0.5,
        alignY: 0.5,
        paused: !1,
        start: 0,
        preload: 2,
        preloadSize: 1,
        resolutionRefreshRate: 2500,
        resolutionChangeRatioThreshold: 0.1
    };
    var f1 = {
        wrap: {
            left: 0,
            top: 0,
            overflow: "hidden",
            margin: 0,
            padding: 0,
            height: "100%",
            width: "100%",
            zIndex: -999999
        },
        itemWrapper: {
            position: "absolute",
            display: "none",
            margin: 0,
            padding: 0,
            border: "none",
            width: "100%",
            height: "100%",
            zIndex: -999999
        },
        item: {
            position: "absolute",
            margin: 0,
            padding: 0,
            border: "none",
            width: "100%",
            height: "100%",
            maxWidth: "none"
        }
    }, g1 = function() {
        var c2 = function(a) {
            for(var b = 1; b < a.length; b++){
                for(var c = a[b], d = b; a[d - 1] && parseInt(a[d - 1].width, 10) > parseInt(c.width, 10);)a[d] = a[d - 1], --d;
                a[d] = c;
            }
            return a;
        }, d2 = function(a, c, d) {
            for(var e, f, g = b1.devicePixelRatio || 1, h = q1(), i = (r1(), c > a ? "portrait" : a > c ? "landscape" : "square"), j = 0, k = 0; k < d.length && (f = d[k], "string" == typeof f && (f = d[k] = {
                url: f
            }), f.pixelRatio && "auto" !== f.pixelRatio && parseFloat(f.pixelRatio) !== g || f.deviceOrientation && f.deviceOrientation !== h || f.windowOrientation && f.windowOrientation !== h || f.orientation && f.orientation !== i || (j = k, e = a, "auto" === f.pixelRatio && (a *= g), !(f.width >= e))); k++);
            return d[Math.min(k, j)];
        }, e2 = function(a, b) {
            if ("string" == typeof a) a = a.replace(/{{(width|height)}}/g, b);
            else if (a instanceof Array) for(var c = 0; c < a.length; c++)a[c].src ? a[c].src = e2(a[c].src, b) : a[c] = e2(a[c], b);
            return a;
        };
        return function(b2, f) {
            for(var g = b2.width(), h = b2.height(), i = [], j = function(a, b) {
                return "width" === b ? g : "height" === b ? h : a;
            }, k = 0; k < f.length; k++)if (a1.isArray(f[k])) {
                f[k] = c2(f[k]);
                var l = d2(g, h, f[k]);
                i.push(l);
            } else {
                "string" == typeof f[k] && (f[k] = {
                    url: f[k]
                });
                var m = a1.extend({
                }, f[k]);
                m.url = e2(m.url, j), i.push(m);
            }
            return i;
        };
    }(), h1 = function(a) {
        return e1.test(a.url) || a.isVideo;
    }, i1 = function(b3, c3, d3, e3, f2) {
        var g2 = [], i = function(a) {
            for(var b = 0; b < g2.length; b++)if (g2[b].src === a.src) return g2[b];
            return g2.push(a), a;
        }, j = function(a, b, c) {
            "function" == typeof b && b.call(a, c);
        };
        return function b(c, d, e, f, g) {
            if ("undefined" != typeof c) {
                a1.isArray(c) || (c = [
                    c
                ]), arguments.length < 5 && "function" == typeof arguments[arguments.length - 1] && (g = arguments[arguments.length - 1]), d = "function" != typeof d && d ? d : 0, e = "function" == typeof e || !e || e < 0 ? c.length : Math.min(e, c.length), f = "function" != typeof f && f ? f : 1, d >= c.length && (d = 0, e = 0), f < 0 && (f = e), f = Math.min(f, e);
                var k = c.slice(d + f, e - f);
                if (c = c.slice(d, f), e = c.length, !e) return void j(c, g, !0);
                for(var l, m = 0, n = function() {
                    m++, m === e && (j(c, g, !k), b(k, 0, 0, f, g));
                }, o = 0; o < c.length; o++)h1(c[o]) || (l = new Image, l.src = c[o].url, l = i(l), l.complete ? n() : a1(l).on("load error", n));
            }
        };
    }(), j1 = function(b) {
        for(var c = [], d = 0; d < b.length; d++)"string" == typeof b[d] ? c.push({
            url: b[d]
        }) : a1.isArray(b[d]) ? c.push(j1(b[d])) : c.push(k1(b[d]));
        return c;
    }, k1 = function(a, e) {
        return (a.centeredX || a.centeredY) && (b1.console && b1.console.log && b1.console.log("jquery.backstretch: `centeredX`/`centeredY` is deprecated, please use `alignX`/`alignY`"), a.centeredX && (a.alignX = 0.5), a.centeredY && (a.alignY = 0.5)), a.speed !== c1 && (b1.console && b1.console.log && b1.console.log("jquery.backstretch: `speed` is deprecated, please use `transitionDuration`"), a.transitionDuration = a.speed, a.transition = "fade"), a.resolutionChangeRatioTreshold !== c1 && (b1.console.log("jquery.backstretch: `treshold` is a typo!"), a.resolutionChangeRatioThreshold = a.resolutionChangeRatioTreshold), a.fadeFirst !== c1 && (a.animateFirst = a.fadeFirst), a.fade !== c1 && (a.transitionDuration = a.fade, a.transition = "fade"), a.scale && (a.scale = d1(a.scale)), l1(a);
    }, l1 = function(a, b) {
        return "left" === a.alignX ? a.alignX = 0 : "center" === a.alignX ? a.alignX = 0.5 : "right" === a.alignX ? a.alignX = 1 : (a.alignX !== c1 || b) && (a.alignX = parseFloat(a.alignX), isNaN(a.alignX) && (a.alignX = 0.5)), "top" === a.alignY ? a.alignY = 0 : "center" === a.alignY ? a.alignY = 0.5 : "bottom" === a.alignY ? a.alignY = 1 : (a.alignX !== c1 || b) && (a.alignY = parseFloat(a.alignY), isNaN(a.alignY) && (a.alignY = 0.5)), a;
    }, m1 = {
        cover: "cover",
        fit: "fit",
        "fit-smaller": "fit-smaller",
        fill: "fill"
    }, n1 = function(c, d, e) {
        this.options = a1.extend({
        }, a1.fn.backstretch.defaults, e || {
        }), this.firstShow = !0, k1(this.options, !0), this.images = j1(a1.isArray(d) ? d : [
            d
        ]), this.options.paused && (this.paused = !0), this.options.start >= this.images.length && (this.options.start = this.images.length - 1), this.options.start < 0 && (this.options.start = 0), this.isBody = c === document.body;
        var h = a1(b1);
        this.$container = a1(c), this.$root = this.isBody ? s1 ? h : a1(document) : this.$container, this.originalImages = this.images, this.images = g1(this.options.alwaysTestWindowResolution ? h : this.$root, this.originalImages), i1(this.images, this.options.start || 0, this.options.preload || 1);
        var l = this.$container.children(".backstretch").first();
        if (this.$wrap = l.length ? l : a1('<div class="backstretch"></div>').css(this.options.bypassCss ? {
        } : f1.wrap).appendTo(this.$container), !this.options.bypassCss) {
            if (!this.isBody) {
                var m = this.$container.css("position"), n = this.$container.css("zIndex");
                this.$container.css({
                    position: "static" === m ? "relative" : m,
                    zIndex: "auto" === n ? 0 : n
                }), this.$wrap.css({
                    zIndex: -999998
                });
            }
            this.$wrap.css({
                position: this.isBody && s1 ? "fixed" : "absolute"
            });
        }
        this.index = this.options.start, this.show(this.index), h.on("resize.backstretch", a1.proxy(this.resize, this)).on("orientationchange.backstretch", a1.proxy(function() {
            this.isBody && 0 === b1.pageYOffset && (b1.scrollTo(0, 1), this.resize());
        }, this));
    }, o1 = function(b) {
        var d = b.transition || "fade";
        "string" == typeof d && d.indexOf("|") > -1 && (d = d.split("|")), d instanceof Array && (d = d[Math.round(Math.random() * (d.length - 1))]);
        var e = b.new, f = b.old ? b.old : a1([]);
        switch(d.toString().toLowerCase()){
            default:
            case "fade":
                e.fadeIn({
                    duration: b.duration,
                    complete: b.complete,
                    easing: b.easing || c1
                });
                break;
            case "fadeinout":
            case "fade_in_out":
                var g = function() {
                    e.fadeIn({
                        duration: b.duration / 2,
                        complete: b.complete,
                        easing: b.easing || c1
                    });
                };
                f.length ? f.fadeOut({
                    duration: b.duration / 2,
                    complete: g,
                    easing: b.easing || c1
                }) : g();
                break;
            case "pushleft":
            case "push_left":
            case "pushright":
            case "push_right":
            case "pushup":
            case "push_up":
            case "pushdown":
            case "push_down":
            case "coverleft":
            case "cover_left":
            case "coverright":
            case "cover_right":
            case "coverup":
            case "cover_up":
            case "coverdown":
            case "cover_down":
                var h = d.match(/^(cover|push)_?(.*)$/), i = "left" === h[2] ? "right" : "right" === h[2] ? "left" : "down" === h[2] ? "top" : "up" === h[2] ? "bottom" : "right", j = {
                    display: ""
                }, k = {
                };
                if (j[i] = "-100%", k[i] = 0, e.css(j).animate(k, {
                    duration: b.duration,
                    complete: function() {
                        e.css(i, ""), b.complete.apply(this, arguments);
                    },
                    easing: b.easing || c1
                }), "push" === h[1] && f.length) {
                    var l = {
                    };
                    l[i] = "100%", f.animate(l, {
                        duration: b.duration,
                        complete: function() {
                            f.css("display", "none");
                        },
                        easing: b.easing || c1
                    });
                }
        }
    };
    n1.prototype = {
        resize: function() {
            try {
                var e = this.options.alwaysTestWindowResolution ? a1(b1) : this.$root, f = e.width(), h = e.height(), j = f / (this._lastResizeContainerWidth || 0), k = h / (this._lastResizeContainerHeight || 0), l = this.options.resolutionChangeRatioThreshold || 0;
                if ((f !== this._lastResizeContainerWidth || h !== this._lastResizeContainerHeight) && (Math.abs(j - 1) >= l || isNaN(j) || Math.abs(k - 1) >= l || isNaN(k)) && (this._lastResizeContainerWidth = f, this._lastResizeContainerHeight = h, this.images = g1(e, this.originalImages), this.options.preload && i1(this.images, (this.index + 1) % this.images.length, this.options.preload), 1 === this.images.length && this._currentImage.url !== this.images[0].url)) {
                    var m = this;
                    clearTimeout(m._selectAnotherResolutionTimeout), m._selectAnotherResolutionTimeout = setTimeout(function() {
                        m.show(0);
                    }, this.options.resolutionRefreshRate);
                }
                var n, o, p = {
                    left: 0,
                    top: 0,
                    right: "auto",
                    bottom: "auto"
                }, q = this.isBody ? this.$root.width() : this.$root.innerWidth(), r = this.isBody ? b1.innerHeight ? b1.innerHeight : this.$root.height() : this.$root.innerHeight(), s = this.$itemWrapper.data("width"), t = this.$itemWrapper.data("height"), u = s / t || 1, v = this._currentImage.alignX === c1 ? this.options.alignX : this._currentImage.alignX, w = this._currentImage.alignY === c1 ? this.options.alignY : this._currentImage.alignY, x = d1(this._currentImage.scale || this.options.scale);
                if ("fit" === x || "fit-smaller" === x) {
                    if (n = s, o = t, n > q || o > r || "fit-smaller" === x) {
                        var y = q / r;
                        y > u ? (n = Math.floor(r * u), o = r) : y < u ? (n = q, o = Math.floor(q / u)) : (n = q, o = r);
                    }
                } else "fill" === x ? (n = q, o = r) : (n = Math.max(r * u, q), o = Math.max(n / u, r));
                p.top = -(o - r) * w, p.left = -(n - q) * v, p.width = n, p.height = o, this.options.bypassCss || this.$wrap.css({
                    width: q,
                    height: r
                }).find(">.backstretch-item").not(".deleteable").each(function() {
                    var b = a1(this);
                    b.find("img,video,iframe").css(p);
                });
                var z = a1.Event("backstretch.resize", {
                    relatedTarget: this.$container[0]
                });
                this.$container.trigger(z, this);
            } catch (a) {
            }
            return this;
        },
        show: function(b, d) {
            if (!(Math.abs(b) > this.images.length - 1)) {
                var e = this, g = e.$wrap.find(">.backstretch-item").addClass("deleteable"), i = e.videoWrapper, j = {
                    relatedTarget: e.$container[0]
                };
                e.$container.trigger(a1.Event("backstretch.before", j), [
                    e,
                    b
                ]), this.index = b;
                var k2 = e.images[b];
                clearTimeout(e._cycleTimeout), delete e.videoWrapper;
                var l = h1(k2);
                return l ? (e.videoWrapper = new p1(k2), e.$item = e.videoWrapper.$video.css("pointer-events", "none")) : e.$item = a1("<img />"), e.$itemWrapper = a1('<div class="backstretch-item">').append(e.$item), this.options.bypassCss ? e.$itemWrapper.css({
                    display: "none"
                }) : (e.$itemWrapper.css(f1.itemWrapper), e.$item.css(f1.item)), e.$item.bind(l ? "canplay" : "load", function(f) {
                    var h = a1(this), k = h.parent(), m = k.data("options");
                    d && (m = a1.extend({
                    }, m, d));
                    var n = this.naturalWidth || this.videoWidth || this.width, p = this.naturalHeight || this.videoHeight || this.height;
                    k.data("width", n).data("height", p);
                    var q = function(a) {
                        return m[a] !== c1 ? m[a] : e.options[a];
                    }, r = q("transition"), s = q("transitionEasing"), t = q("transitionDuration"), u = function() {
                        i && (i.stop(), i.destroy()), g.remove(), !e.paused && e.images.length > 1 && e.cycle(), e.options.bypassCss || e.isBody || e.$container.css("background-image", "none"), a1([
                            "after",
                            "show"
                        ]).each(function() {
                            e.$container.trigger(a1.Event("backstretch." + this, j), [
                                e,
                                b
                            ]);
                        }), l && e.videoWrapper.play();
                    };
                    e.firstShow && !e.options.animateFirst || !t || !r ? (k.show(), u()) : o1({
                        new: k,
                        old: g,
                        transition: r,
                        duration: t,
                        easing: s,
                        complete: u
                    }), e.firstShow = !1, e.resize();
                }), e.$itemWrapper.appendTo(e.$wrap), e.$item.attr("alt", k2.alt || ""), e.$itemWrapper.data("options", k2), l || e.$item.attr("src", k2.url), e._currentImage = k2, e;
            }
        },
        current: function() {
            return this.index;
        },
        next: function() {
            var a = Array.prototype.slice.call(arguments, 0);
            return a.unshift(this.index < this.images.length - 1 ? this.index + 1 : 0), this.show.apply(this, a);
        },
        prev: function() {
            var a = Array.prototype.slice.call(arguments, 0);
            return a.unshift(0 === this.index ? this.images.length - 1 : this.index - 1), this.show.apply(this, a);
        },
        pause: function() {
            return this.paused = !0, this.videoWrapper && this.videoWrapper.pause(), this;
        },
        resume: function() {
            return this.paused = !1, this.videoWrapper && this.videoWrapper.play(), this.cycle(), this;
        },
        cycle: function() {
            if (this.images.length > 1) {
                clearTimeout(this._cycleTimeout);
                var b4 = this._currentImage && this._currentImage.duration || this.options.duration, c = h1(this._currentImage), d = function() {
                    this.$item.off(".cycle"), this.paused || this.next();
                };
                if (c) {
                    if (!this._currentImage.loop) {
                        var e = 0;
                        this.$item.on("playing.cycle", function() {
                            var b = a1(this).data("player");
                            clearTimeout(e), e = setTimeout(function() {
                                b.pause(), b.$video.trigger("ended");
                            }, 1000 * (b.getDuration() - b.getCurrentTime()));
                        }).on("ended.cycle", function() {
                            clearTimeout(e);
                        });
                    }
                    this.$item.on("error.cycle initerror.cycle", a1.proxy(d, this));
                }
                c && !this._currentImage.duration ? this.$item.on("ended.cycle", a1.proxy(d, this)) : this._cycleTimeout = setTimeout(a1.proxy(d, this), b4);
            }
            return this;
        },
        destroy: function(c) {
            a1(b1).off("resize.backstretch orientationchange.backstretch"), this.videoWrapper && this.videoWrapper.destroy(), clearTimeout(this._cycleTimeout), c || this.$wrap.remove(), this.$container.removeData("backstretch");
        }
    };
    var p1 = function() {
        this.init.apply(this, arguments);
    };
    p1.prototype.init = function(d) {
        var f, g = this, h = function() {
            g.$video = f, g.video = f[0];
        }, i = "video";
        if (d.url instanceof Array || !e1.test(d.url) || (i = "youtube"), g.type = i, "youtube" === i) {
            p1.loadYoutubeAPI(), g.ytId = d.url.match(e1)[2];
            var j = "https://www.youtube.com/embed/" + g.ytId + "?rel=0&autoplay=0&showinfo=0&controls=0&modestbranding=1&cc_load_policy=0&disablekb=1&iv_load_policy=3&loop=0&enablejsapi=1&origin=" + encodeURIComponent(b1.location.origin);
            g.__ytStartMuted = !!d.mute || d.mute === c1, f = a1("<iframe />").attr({
                src_to_load: j
            }).css({
                border: 0,
                margin: 0,
                padding: 0
            }).data("player", g), d.loop && f.on("ended.loop", function() {
                g.__manuallyStopped || g.play();
            }), g.ytReady = !1, h(), b1.YT ? (g._initYoutube(), f.trigger("initsuccess")) : a1(b1).one("youtube_api_load", function() {
                g._initYoutube(), f.trigger("initsuccess");
            });
        } else {
            f = a1("<video>").prop("autoplay", !1).prop("controls", !1).prop("loop", !!d.loop).prop("muted", !!d.mute || d.mute === c1).prop("preload", "auto").prop("poster", d.poster || "");
            for(var k = d.url instanceof Array ? d.url : [
                d.url
            ], l = 0; l < k.length; l++){
                var m = k[l];
                "string" == typeof m && (m = {
                    src: m
                }), a1("<source>").attr("src", m.src).attr("type", m.type || null).appendTo(f);
            }
            f[0].canPlayType && k.length ? f.trigger("initsuccess") : f.trigger("initerror"), h();
        }
    }, p1.prototype._initYoutube = function() {
        var c = this, d = b1.YT;
        c.$video.attr("src", c.$video.attr("src_to_load")).removeAttr("src_to_load");
        var e = !!c.$video[0].parentNode;
        if (!e) {
            var f = a1("<div>").css("display", "none !important").appendTo(document.body);
            c.$video.appendTo(f);
        }
        var g = new d.Player(c.video, {
            events: {
                onReady: function() {
                    c.__ytStartMuted && g.mute(), e || (c.$video[0].parentNode === f[0] && c.$video.detach(), f.remove()), c.ytReady = !0, c._updateYoutubeSize(), c.$video.trigger("canplay");
                },
                onStateChange: function(a) {
                    switch(a.data){
                        case d.PlayerState.PLAYING:
                            c.$video.trigger("playing");
                            break;
                        case d.PlayerState.ENDED:
                            c.$video.trigger("ended");
                            break;
                        case d.PlayerState.PAUSED:
                            c.$video.trigger("pause");
                            break;
                        case d.PlayerState.BUFFERING:
                            c.$video.trigger("waiting");
                            break;
                        case d.PlayerState.CUED:
                            c.$video.trigger("canplay");
                    }
                },
                onPlaybackQualityChange: function() {
                    c._updateYoutubeSize(), c.$video.trigger("resize");
                },
                onError: function(a) {
                    c.hasError = !0, c.$video.trigger({
                        type: "error",
                        error: a
                    });
                }
            }
        });
        return c.ytPlayer = g, c;
    }, p1.prototype._updateYoutubeSize = function() {
        var a = this;
        switch(a.ytPlayer.getPlaybackQuality() || "medium"){
            case "small":
                a.video.videoWidth = 426, a.video.videoHeight = 240;
                break;
            case "medium":
                a.video.videoWidth = 640, a.video.videoHeight = 360;
                break;
            default:
            case "large":
                a.video.videoWidth = 854, a.video.videoHeight = 480;
                break;
            case "hd720":
                a.video.videoWidth = 1280, a.video.videoHeight = 720;
                break;
            case "hd1080":
                a.video.videoWidth = 1920, a.video.videoHeight = 1080;
                break;
            case "highres":
                a.video.videoWidth = 2560, a.video.videoHeight = 1440;
        }
        return a;
    }, p1.prototype.play = function() {
        var a = this;
        return a.__manuallyStopped = !1, "youtube" === a.type ? a.ytReady && (a.$video.trigger("play"), a.ytPlayer.playVideo()) : a.video.play(), a;
    }, p1.prototype.pause = function() {
        var a = this;
        return a.__manuallyStopped = !1, "youtube" === a.type ? a.ytReady && a.ytPlayer.pauseVideo() : a.video.pause(), a;
    }, p1.prototype.stop = function() {
        var a = this;
        return a.__manuallyStopped = !0, "youtube" === a.type ? a.ytReady && (a.ytPlayer.pauseVideo(), a.ytPlayer.seekTo(0)) : (a.video.pause(), a.video.currentTime = 0), a;
    }, p1.prototype.destroy = function() {
        var a = this;
        return a.ytPlayer && a.ytPlayer.destroy(), a.$video.remove(), a;
    }, p1.prototype.getCurrentTime = function(a) {
        var b = this;
        return "youtube" !== b.type ? b.video.currentTime : b.ytReady ? b.ytPlayer.getCurrentTime() : 0;
    }, p1.prototype.setCurrentTime = function(a) {
        var b = this;
        return "youtube" === b.type ? b.ytReady && b.ytPlayer.seekTo(a, !0) : b.video.currentTime = a, b;
    }, p1.prototype.getDuration = function() {
        var a = this;
        return "youtube" !== a.type ? a.video.duration : a.ytReady ? a.ytPlayer.getDuration() : 0;
    }, p1.loadYoutubeAPI = function() {
        if (!b1.YT) {
            a1("script[src*=www\\.youtube\\.com\\/iframe_api]").length || a1('<script type="text/javascript" src="https://www.youtube.com/iframe_api">').appendTo("body");
            var c = setInterval(function() {
                b1.YT && b1.YT.loaded && (a1(b1).trigger("youtube_api_load"), clearTimeout(c));
            }, 50);
        }
    };
    var q1 = function() {
        if ("matchMedia" in b1) {
            if (b1.matchMedia("(orientation: portrait)").matches) return "portrait";
            if (b1.matchMedia("(orientation: landscape)").matches) return "landscape";
        }
        return screen.height > screen.width ? "portrait" : "landscape";
    }, r1 = function() {
        return b1.innerHeight > b1.innerWidth ? "portrait" : b1.innerWidth > b1.innerHeight ? "landscape" : "square";
    }, s1 = function() {
        var a = navigator.userAgent, c = navigator.platform, d = a.match(/AppleWebKit\/([0-9]+)/), e = !!d && d[1], f = a.match(/Fennec\/([0-9]+)/), g = !!f && f[1], h = a.match(/Opera Mobi\/([0-9]+)/), i = !!h && h[1], j = a.match(/MSIE ([0-9]+)/), k = !!j && j[1];
        return !((c.indexOf("iPhone") > -1 || c.indexOf("iPad") > -1 || c.indexOf("iPod") > -1) && e && e < 534 || b1.operamini && "[object OperaMini]" === ({
        }).toString.call(b1.operamini) || h && i < 7458 || a.indexOf("Android") > -1 && e && e < 533 || g && g < 6 || "palmGetResource" in b1 && e && e < 534 || a.indexOf("MeeGo") > -1 && a.indexOf("NokiaBrowser/8.5.0") > -1 || k && k <= 6);
    }();
}(jQuery, window);

},{}],"JI3x6":[function(require,module,exports) {
!function(i) {
    "function" == typeof define && define.amd ? define([
        "jquery"
    ], i) : "undefined" != typeof exports ? module.exports = i(require("jquery")) : i(jQuery);
}(function(i1) {
    "use strict";
    var e1 = window.Slick || {
    };
    (e1 = (function() {
        var e = 0;
        return function(t1, o) {
            var s, n = this;
            n.defaults = {
                accessibility: !0,
                adaptiveHeight: !1,
                appendArrows: i1(t1),
                appendDots: i1(t1),
                arrows: !0,
                asNavFor: null,
                prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
                nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
                autoplay: !1,
                autoplaySpeed: 3000,
                centerMode: !1,
                centerPadding: "50px",
                cssEase: "ease",
                customPaging: function(e, t) {
                    return i1('<button type="button" />').text(t + 1);
                },
                dots: !1,
                dotsClass: "slick-dots",
                draggable: !0,
                easing: "linear",
                edgeFriction: 0.35,
                fade: !1,
                focusOnSelect: !1,
                focusOnChange: !1,
                infinite: !0,
                initialSlide: 0,
                lazyLoad: "ondemand",
                mobileFirst: !1,
                pauseOnHover: !0,
                pauseOnFocus: !0,
                pauseOnDotsHover: !1,
                respondTo: "window",
                responsive: null,
                rows: 1,
                rtl: !1,
                slide: "",
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: !0,
                swipeToSlide: !1,
                touchMove: !0,
                touchThreshold: 5,
                useCSS: !0,
                useTransform: !0,
                variableWidth: !1,
                vertical: !1,
                verticalSwiping: !1,
                waitForAnimate: !0,
                zIndex: 1000
            }, n.initials = {
                animating: !1,
                dragging: !1,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                scrolling: !1,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: !1,
                slideOffset: 0,
                swipeLeft: null,
                swiping: !1,
                $list: null,
                touchObject: {
                },
                transformsEnabled: !1,
                unslicked: !1
            }, i1.extend(n, n.initials), n.activeBreakpoint = null, n.animType = null, n.animProp = null, n.breakpoints = [], n.breakpointSettings = [], n.cssTransitions = !1, n.focussed = !1, n.interrupted = !1, n.hidden = "hidden", n.paused = !0, n.positionProp = null, n.respondTo = null, n.rowCount = 1, n.shouldClick = !0, n.$slider = i1(t1), n.$slidesCache = null, n.transformType = null, n.transitionType = null, n.visibilityChange = "visibilitychange", n.windowWidth = 0, n.windowTimer = null, s = i1(t1).data("slick") || {
            }, n.options = i1.extend({
            }, n.defaults, o, s), n.currentSlide = n.options.initialSlide, n.originalSettings = n.options, void 0 !== document.mozHidden ? (n.hidden = "mozHidden", n.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (n.hidden = "webkitHidden", n.visibilityChange = "webkitvisibilitychange"), n.autoPlay = i1.proxy(n.autoPlay, n), n.autoPlayClear = i1.proxy(n.autoPlayClear, n), n.autoPlayIterator = i1.proxy(n.autoPlayIterator, n), n.changeSlide = i1.proxy(n.changeSlide, n), n.clickHandler = i1.proxy(n.clickHandler, n), n.selectHandler = i1.proxy(n.selectHandler, n), n.setPosition = i1.proxy(n.setPosition, n), n.swipeHandler = i1.proxy(n.swipeHandler, n), n.dragHandler = i1.proxy(n.dragHandler, n), n.keyHandler = i1.proxy(n.keyHandler, n), n.instanceUid = e++, n.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, n.registerBreakpoints(), n.init(!0);
        };
    })()).prototype.activateADA = function() {
        this.$slideTrack.find(".slick-active").attr({
            "aria-hidden": "false"
        }).find("a, input, button, select").attr({
            tabindex: "0"
        });
    }, e1.prototype.addSlide = e1.prototype.slickAdd = function(e2, t2, o) {
        var s = this;
        if ("boolean" == typeof t2) o = t2, t2 = null;
        else if (t2 < 0 || t2 >= s.slideCount) return !1;
        s.unload(), "number" == typeof t2 ? 0 === t2 && 0 === s.$slides.length ? i1(e2).appendTo(s.$slideTrack) : o ? i1(e2).insertBefore(s.$slides.eq(t2)) : i1(e2).insertAfter(s.$slides.eq(t2)) : !0 === o ? i1(e2).prependTo(s.$slideTrack) : i1(e2).appendTo(s.$slideTrack), s.$slides = s.$slideTrack.children(this.options.slide), s.$slideTrack.children(this.options.slide).detach(), s.$slideTrack.append(s.$slides), s.$slides.each(function(e, t) {
            i1(t).attr("data-slick-index", e);
        }), s.$slidesCache = s.$slides, s.reinit();
    }, e1.prototype.animateHeight = function() {
        var i = this;
        if (1 === i.options.slidesToShow && !0 === i.options.adaptiveHeight && !1 === i.options.vertical) {
            var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
            i.$list.animate({
                height: e
            }, i.options.speed);
        }
    }, e1.prototype.animateSlide = function(e, t) {
        var o = {
        }, s = this;
        s.animateHeight(), !0 === s.options.rtl && !1 === s.options.vertical && (e = -e), !1 === s.transformsEnabled ? !1 === s.options.vertical ? s.$slideTrack.animate({
            left: e
        }, s.options.speed, s.options.easing, t) : s.$slideTrack.animate({
            top: e
        }, s.options.speed, s.options.easing, t) : !1 === s.cssTransitions ? (!0 === s.options.rtl && (s.currentLeft = -s.currentLeft), i1({
            animStart: s.currentLeft
        }).animate({
            animStart: e
        }, {
            duration: s.options.speed,
            easing: s.options.easing,
            step: function(i) {
                i = Math.ceil(i), !1 === s.options.vertical ? (o[s.animType] = "translate(" + i + "px, 0px)", s.$slideTrack.css(o)) : (o[s.animType] = "translate(0px," + i + "px)", s.$slideTrack.css(o));
            },
            complete: function() {
                t && t.call();
            }
        })) : (s.applyTransition(), e = Math.ceil(e), !1 === s.options.vertical ? o[s.animType] = "translate3d(" + e + "px, 0px, 0px)" : o[s.animType] = "translate3d(0px," + e + "px, 0px)", s.$slideTrack.css(o), t && setTimeout(function() {
            s.disableTransition(), t.call();
        }, s.options.speed));
    }, e1.prototype.getNavTarget = function() {
        var e = this, t = e.options.asNavFor;
        return t && null !== t && (t = i1(t).not(e.$slider)), t;
    }, e1.prototype.asNavFor = function(e) {
        var t3 = this.getNavTarget();
        null !== t3 && "object" == typeof t3 && t3.each(function() {
            var t = i1(this).slick("getSlick");
            t.unslicked || t.slideHandler(e, !0);
        });
    }, e1.prototype.applyTransition = function(i) {
        var e = this, t = {
        };
        !1 === e.options.fade ? t[e.transitionType] = e.transformType + " " + e.options.speed + "ms " + e.options.cssEase : t[e.transitionType] = "opacity " + e.options.speed + "ms " + e.options.cssEase, !1 === e.options.fade ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t);
    }, e1.prototype.autoPlay = function() {
        var i = this;
        i.autoPlayClear(), i.slideCount > i.options.slidesToShow && (i.autoPlayTimer = setInterval(i.autoPlayIterator, i.options.autoplaySpeed));
    }, e1.prototype.autoPlayClear = function() {
        var i = this;
        i.autoPlayTimer && clearInterval(i.autoPlayTimer);
    }, e1.prototype.autoPlayIterator = function() {
        var i = this, e = i.currentSlide + i.options.slidesToScroll;
        i.paused || i.interrupted || i.focussed || (!1 === i.options.infinite && (1 === i.direction && i.currentSlide + 1 === i.slideCount - 1 ? i.direction = 0 : 0 === i.direction && (e = i.currentSlide - i.options.slidesToScroll, i.currentSlide - 1 == 0 && (i.direction = 1))), i.slideHandler(e));
    }, e1.prototype.buildArrows = function() {
        var e = this;
        !0 === e.options.arrows && (e.$prevArrow = i1(e.options.prevArrow).addClass("slick-arrow"), e.$nextArrow = i1(e.options.nextArrow).addClass("slick-arrow"), e.slideCount > e.options.slidesToShow ? (e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.prependTo(e.options.appendArrows), e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.appendTo(e.options.appendArrows), !0 !== e.options.infinite && e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({
            "aria-disabled": "true",
            tabindex: "-1"
        }));
    }, e1.prototype.buildDots = function() {
        var e, t, o = this;
        if (!0 === o.options.dots) {
            for(o.$slider.addClass("slick-dotted"), t = i1("<ul />").addClass(o.options.dotsClass), e = 0; e <= o.getDotCount(); e += 1)t.append(i1("<li />").append(o.options.customPaging.call(this, o, e)));
            o.$dots = t.appendTo(o.options.appendDots), o.$dots.find("li").first().addClass("slick-active");
        }
    }, e1.prototype.buildOut = function() {
        var e3 = this;
        e3.$slides = e3.$slider.children(e3.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), e3.slideCount = e3.$slides.length, e3.$slides.each(function(e, t) {
            i1(t).attr("data-slick-index", e).data("originalStyling", i1(t).attr("style") || "");
        }), e3.$slider.addClass("slick-slider"), e3.$slideTrack = 0 === e3.slideCount ? i1('<div class="slick-track"/>').appendTo(e3.$slider) : e3.$slides.wrapAll('<div class="slick-track"/>').parent(), e3.$list = e3.$slideTrack.wrap('<div class="slick-list"/>').parent(), e3.$slideTrack.css("opacity", 0), !0 !== e3.options.centerMode && !0 !== e3.options.swipeToSlide || (e3.options.slidesToScroll = 1), i1("img[data-lazy]", e3.$slider).not("[src]").addClass("slick-loading"), e3.setupInfinite(), e3.buildArrows(), e3.buildDots(), e3.updateDots(), e3.setSlideClasses("number" == typeof e3.currentSlide ? e3.currentSlide : 0), !0 === e3.options.draggable && e3.$list.addClass("draggable");
    }, e1.prototype.buildRows = function() {
        var i, e, t, o, s, n, r, l = this;
        if (o = document.createDocumentFragment(), n = l.$slider.children(), l.options.rows > 1) {
            for(r = l.options.slidesPerRow * l.options.rows, s = Math.ceil(n.length / r), i = 0; i < s; i++){
                var d = document.createElement("div");
                for(e = 0; e < l.options.rows; e++){
                    var a = document.createElement("div");
                    for(t = 0; t < l.options.slidesPerRow; t++){
                        var c = i * r + (e * l.options.slidesPerRow + t);
                        n.get(c) && a.appendChild(n.get(c));
                    }
                    d.appendChild(a);
                }
                o.appendChild(d);
            }
            l.$slider.empty().append(o), l.$slider.children().children().children().css({
                width: 100 / l.options.slidesPerRow + "%",
                display: "inline-block"
            });
        }
    }, e1.prototype.checkResponsive = function(e, t) {
        var o, s, n, r = this, l = !1, d = r.$slider.width(), a = window.innerWidth || i1(window).width();
        if ("window" === r.respondTo ? n = a : "slider" === r.respondTo ? n = d : "min" === r.respondTo && (n = Math.min(a, d)), r.options.responsive && r.options.responsive.length && null !== r.options.responsive) {
            s = null;
            for(o in r.breakpoints)r.breakpoints.hasOwnProperty(o) && (!1 === r.originalSettings.mobileFirst ? n < r.breakpoints[o] && (s = r.breakpoints[o]) : n > r.breakpoints[o] && (s = r.breakpoints[o]));
            null !== s ? null !== r.activeBreakpoint ? (s !== r.activeBreakpoint || t) && (r.activeBreakpoint = s, "unslick" === r.breakpointSettings[s] ? r.unslick(s) : (r.options = i1.extend({
            }, r.originalSettings, r.breakpointSettings[s]), !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e)), l = s) : (r.activeBreakpoint = s, "unslick" === r.breakpointSettings[s] ? r.unslick(s) : (r.options = i1.extend({
            }, r.originalSettings, r.breakpointSettings[s]), !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e)), l = s) : null !== r.activeBreakpoint && (r.activeBreakpoint = null, r.options = r.originalSettings, !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e), l = s), e || !1 === l || r.$slider.trigger("breakpoint", [
                r,
                l
            ]);
        }
    }, e1.prototype.changeSlide = function(e, t) {
        var o, s, n, r = this, l = i1(e.currentTarget);
        switch(l.is("a") && e.preventDefault(), l.is("li") || (l = l.closest("li")), n = r.slideCount % r.options.slidesToScroll != 0, o = n ? 0 : (r.slideCount - r.currentSlide) % r.options.slidesToScroll, e.data.message){
            case "previous":
                s = 0 === o ? r.options.slidesToScroll : r.options.slidesToShow - o, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide - s, !1, t);
                break;
            case "next":
                s = 0 === o ? r.options.slidesToScroll : o, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide + s, !1, t);
                break;
            case "index":
                var d = 0 === e.data.index ? 0 : e.data.index || l.index() * r.options.slidesToScroll;
                r.slideHandler(r.checkNavigable(d), !1, t), l.children().trigger("focus");
                break;
            default:
                return;
        }
    }, e1.prototype.checkNavigable = function(i) {
        var e, t;
        if (e = this.getNavigableIndexes(), t = 0, i > e[e.length - 1]) i = e[e.length - 1];
        else for(var o in e){
            if (i < e[o]) {
                i = t;
                break;
            }
            t = e[o];
        }
        return i;
    }, e1.prototype.cleanUpEvents = function() {
        var e = this;
        e.options.dots && null !== e.$dots && (i1("li", e.$dots).off("click.slick", e.changeSlide).off("mouseenter.slick", i1.proxy(e.interrupt, e, !0)).off("mouseleave.slick", i1.proxy(e.interrupt, e, !1)), !0 === e.options.accessibility && e.$dots.off("keydown.slick", e.keyHandler)), e.$slider.off("focus.slick blur.slick"), !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide), e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide), !0 === e.options.accessibility && (e.$prevArrow && e.$prevArrow.off("keydown.slick", e.keyHandler), e.$nextArrow && e.$nextArrow.off("keydown.slick", e.keyHandler))), e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler), e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler), e.$list.off("touchend.slick mouseup.slick", e.swipeHandler), e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler), e.$list.off("click.slick", e.clickHandler), i1(document).off(e.visibilityChange, e.visibility), e.cleanUpSlideEvents(), !0 === e.options.accessibility && e.$list.off("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && i1(e.$slideTrack).children().off("click.slick", e.selectHandler), i1(window).off("orientationchange.slick.slick-" + e.instanceUid, e.orientationChange), i1(window).off("resize.slick.slick-" + e.instanceUid, e.resize), i1("[draggable!=true]", e.$slideTrack).off("dragstart", e.preventDefault), i1(window).off("load.slick.slick-" + e.instanceUid, e.setPosition);
    }, e1.prototype.cleanUpSlideEvents = function() {
        var e = this;
        e.$list.off("mouseenter.slick", i1.proxy(e.interrupt, e, !0)), e.$list.off("mouseleave.slick", i1.proxy(e.interrupt, e, !1));
    }, e1.prototype.cleanUpRows = function() {
        var i, e = this;
        e.options.rows > 1 && ((i = e.$slides.children().children()).removeAttr("style"), e.$slider.empty().append(i));
    }, e1.prototype.clickHandler = function(i) {
        !1 === this.shouldClick && (i.stopImmediatePropagation(), i.stopPropagation(), i.preventDefault());
    }, e1.prototype.destroy = function(e) {
        var t = this;
        t.autoPlayClear(), t.touchObject = {
        }, t.cleanUpEvents(), i1(".slick-cloned", t.$slider).detach(), t.$dots && t.$dots.remove(), t.$prevArrow && t.$prevArrow.length && (t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove()), t.$nextArrow && t.$nextArrow.length && (t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove()), t.$slides && (t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() {
            i1(this).attr("style", i1(this).data("originalStyling"));
        }), t.$slideTrack.children(this.options.slide).detach(), t.$slideTrack.detach(), t.$list.detach(), t.$slider.append(t.$slides)), t.cleanUpRows(), t.$slider.removeClass("slick-slider"), t.$slider.removeClass("slick-initialized"), t.$slider.removeClass("slick-dotted"), t.unslicked = !0, e || t.$slider.trigger("destroy", [
            t
        ]);
    }, e1.prototype.disableTransition = function(i) {
        var e = this, t = {
        };
        t[e.transitionType] = "", !1 === e.options.fade ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t);
    }, e1.prototype.fadeSlide = function(i, e) {
        var t = this;
        !1 === t.cssTransitions ? (t.$slides.eq(i).css({
            zIndex: t.options.zIndex
        }), t.$slides.eq(i).animate({
            opacity: 1
        }, t.options.speed, t.options.easing, e)) : (t.applyTransition(i), t.$slides.eq(i).css({
            opacity: 1,
            zIndex: t.options.zIndex
        }), e && setTimeout(function() {
            t.disableTransition(i), e.call();
        }, t.options.speed));
    }, e1.prototype.fadeSlideOut = function(i) {
        var e = this;
        !1 === e.cssTransitions ? e.$slides.eq(i).animate({
            opacity: 0,
            zIndex: e.options.zIndex - 2
        }, e.options.speed, e.options.easing) : (e.applyTransition(i), e.$slides.eq(i).css({
            opacity: 0,
            zIndex: e.options.zIndex - 2
        }));
    }, e1.prototype.filterSlides = e1.prototype.slickFilter = function(i) {
        var e = this;
        null !== i && (e.$slidesCache = e.$slides, e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.filter(i).appendTo(e.$slideTrack), e.reinit());
    }, e1.prototype.focusHandler = function() {
        var e = this;
        e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*", function(t) {
            t.stopImmediatePropagation();
            var o = i1(this);
            setTimeout(function() {
                e.options.pauseOnFocus && (e.focussed = o.is(":focus"), e.autoPlay());
            }, 0);
        });
    }, e1.prototype.getCurrent = e1.prototype.slickCurrentSlide = function() {
        return this.currentSlide;
    }, e1.prototype.getDotCount = function() {
        var i = this, e = 0, t = 0, o = 0;
        if (!0 === i.options.infinite) {
            if (i.slideCount <= i.options.slidesToShow) ++o;
            else for(; e < i.slideCount;)++o, e = t + i.options.slidesToScroll, t += i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow;
        } else if (!0 === i.options.centerMode) o = i.slideCount;
        else if (i.options.asNavFor) for(; e < i.slideCount;)++o, e = t + i.options.slidesToScroll, t += i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow;
        else o = 1 + Math.ceil((i.slideCount - i.options.slidesToShow) / i.options.slidesToScroll);
        return o - 1;
    }, e1.prototype.getLeft = function(i) {
        var e, t, o, s, n = this, r = 0;
        return n.slideOffset = 0, t = n.$slides.first().outerHeight(!0), !0 === n.options.infinite ? (n.slideCount > n.options.slidesToShow && (n.slideOffset = n.slideWidth * n.options.slidesToShow * -1, s = -1, !0 === n.options.vertical && !0 === n.options.centerMode && (2 === n.options.slidesToShow ? s = -1.5 : 1 === n.options.slidesToShow && (s = -2)), r = t * n.options.slidesToShow * s), n.slideCount % n.options.slidesToScroll != 0 && i + n.options.slidesToScroll > n.slideCount && n.slideCount > n.options.slidesToShow && (i > n.slideCount ? (n.slideOffset = (n.options.slidesToShow - (i - n.slideCount)) * n.slideWidth * -1, r = (n.options.slidesToShow - (i - n.slideCount)) * t * -1) : (n.slideOffset = n.slideCount % n.options.slidesToScroll * n.slideWidth * -1, r = n.slideCount % n.options.slidesToScroll * t * -1))) : i + n.options.slidesToShow > n.slideCount && (n.slideOffset = (i + n.options.slidesToShow - n.slideCount) * n.slideWidth, r = (i + n.options.slidesToShow - n.slideCount) * t), n.slideCount <= n.options.slidesToShow && (n.slideOffset = 0, r = 0), !0 === n.options.centerMode && n.slideCount <= n.options.slidesToShow ? n.slideOffset = n.slideWidth * Math.floor(n.options.slidesToShow) / 2 - n.slideWidth * n.slideCount / 2 : !0 === n.options.centerMode && !0 === n.options.infinite ? n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2) - n.slideWidth : !0 === n.options.centerMode && (n.slideOffset = 0, n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2)), e = !1 === n.options.vertical ? i * n.slideWidth * -1 + n.slideOffset : i * t * -1 + r, !0 === n.options.variableWidth && (o = n.slideCount <= n.options.slidesToShow || !1 === n.options.infinite ? n.$slideTrack.children(".slick-slide").eq(i) : n.$slideTrack.children(".slick-slide").eq(i + n.options.slidesToShow), e = !0 === n.options.rtl ? o[0] ? -1 * (n.$slideTrack.width() - o[0].offsetLeft - o.width()) : 0 : o[0] ? -1 * o[0].offsetLeft : 0, !0 === n.options.centerMode && (o = n.slideCount <= n.options.slidesToShow || !1 === n.options.infinite ? n.$slideTrack.children(".slick-slide").eq(i) : n.$slideTrack.children(".slick-slide").eq(i + n.options.slidesToShow + 1), e = !0 === n.options.rtl ? o[0] ? -1 * (n.$slideTrack.width() - o[0].offsetLeft - o.width()) : 0 : o[0] ? -1 * o[0].offsetLeft : 0, e += (n.$list.width() - o.outerWidth()) / 2)), e;
    }, e1.prototype.getOption = e1.prototype.slickGetOption = function(i) {
        return this.options[i];
    }, e1.prototype.getNavigableIndexes = function() {
        var i, e = this, t = 0, o = 0, s = [];
        for(!1 === e.options.infinite ? i = e.slideCount : (t = -1 * e.options.slidesToScroll, o = -1 * e.options.slidesToScroll, i = 2 * e.slideCount); t < i;)s.push(t), t = o + e.options.slidesToScroll, o += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
        return s;
    }, e1.prototype.getSlick = function() {
        return this;
    }, e1.prototype.getSlideCount = function() {
        var e, t, o = this;
        return t = !0 === o.options.centerMode ? o.slideWidth * Math.floor(o.options.slidesToShow / 2) : 0, !0 === o.options.swipeToSlide ? (o.$slideTrack.find(".slick-slide").each(function(s, n) {
            if (n.offsetLeft - t + i1(n).outerWidth() / 2 > -1 * o.swipeLeft) return e = n, !1;
        }), Math.abs(i1(e).attr("data-slick-index") - o.currentSlide) || 1) : o.options.slidesToScroll;
    }, e1.prototype.goTo = e1.prototype.slickGoTo = function(i, e) {
        this.changeSlide({
            data: {
                message: "index",
                index: parseInt(i)
            }
        }, e);
    }, e1.prototype.init = function(e) {
        var t = this;
        i1(t.$slider).hasClass("slick-initialized") || (i1(t.$slider).addClass("slick-initialized"), t.buildRows(), t.buildOut(), t.setProps(), t.startLoad(), t.loadSlider(), t.initializeEvents(), t.updateArrows(), t.updateDots(), t.checkResponsive(!0), t.focusHandler()), e && t.$slider.trigger("init", [
            t
        ]), !0 === t.options.accessibility && t.initADA(), t.options.autoplay && (t.paused = !1, t.autoPlay());
    }, e1.prototype.initADA = function() {
        var e = this, t4 = Math.ceil(e.slideCount / e.options.slidesToShow), o = e.getNavigableIndexes().filter(function(i) {
            return i >= 0 && i < e.slideCount;
        });
        e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({
            "aria-hidden": "true",
            tabindex: "-1"
        }).find("a, input, button, select").attr({
            tabindex: "-1"
        }), null !== e.$dots && (e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function(t) {
            var s = o.indexOf(t);
            i1(this).attr({
                role: "tabpanel",
                id: "slick-slide" + e.instanceUid + t,
                tabindex: -1
            }), -1 !== s && i1(this).attr({
                "aria-describedby": "slick-slide-control" + e.instanceUid + s
            });
        }), e.$dots.attr("role", "tablist").find("li").each(function(s) {
            var n = o[s];
            i1(this).attr({
                role: "presentation"
            }), i1(this).find("button").first().attr({
                role: "tab",
                id: "slick-slide-control" + e.instanceUid + s,
                "aria-controls": "slick-slide" + e.instanceUid + n,
                "aria-label": s + 1 + " of " + t4,
                "aria-selected": null,
                tabindex: "-1"
            });
        }).eq(e.currentSlide).find("button").attr({
            "aria-selected": "true",
            tabindex: "0"
        }).end());
        for(var s1 = e.currentSlide, n1 = s1 + e.options.slidesToShow; s1 < n1; s1++)e.$slides.eq(s1).attr("tabindex", 0);
        e.activateADA();
    }, e1.prototype.initArrowEvents = function() {
        var i = this;
        !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.off("click.slick").on("click.slick", {
            message: "previous"
        }, i.changeSlide), i.$nextArrow.off("click.slick").on("click.slick", {
            message: "next"
        }, i.changeSlide), !0 === i.options.accessibility && (i.$prevArrow.on("keydown.slick", i.keyHandler), i.$nextArrow.on("keydown.slick", i.keyHandler)));
    }, e1.prototype.initDotEvents = function() {
        var e = this;
        !0 === e.options.dots && (i1("li", e.$dots).on("click.slick", {
            message: "index"
        }, e.changeSlide), !0 === e.options.accessibility && e.$dots.on("keydown.slick", e.keyHandler)), !0 === e.options.dots && !0 === e.options.pauseOnDotsHover && i1("li", e.$dots).on("mouseenter.slick", i1.proxy(e.interrupt, e, !0)).on("mouseleave.slick", i1.proxy(e.interrupt, e, !1));
    }, e1.prototype.initSlideEvents = function() {
        var e = this;
        e.options.pauseOnHover && (e.$list.on("mouseenter.slick", i1.proxy(e.interrupt, e, !0)), e.$list.on("mouseleave.slick", i1.proxy(e.interrupt, e, !1)));
    }, e1.prototype.initializeEvents = function() {
        var e = this;
        e.initArrowEvents(), e.initDotEvents(), e.initSlideEvents(), e.$list.on("touchstart.slick mousedown.slick", {
            action: "start"
        }, e.swipeHandler), e.$list.on("touchmove.slick mousemove.slick", {
            action: "move"
        }, e.swipeHandler), e.$list.on("touchend.slick mouseup.slick", {
            action: "end"
        }, e.swipeHandler), e.$list.on("touchcancel.slick mouseleave.slick", {
            action: "end"
        }, e.swipeHandler), e.$list.on("click.slick", e.clickHandler), i1(document).on(e.visibilityChange, i1.proxy(e.visibility, e)), !0 === e.options.accessibility && e.$list.on("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && i1(e.$slideTrack).children().on("click.slick", e.selectHandler), i1(window).on("orientationchange.slick.slick-" + e.instanceUid, i1.proxy(e.orientationChange, e)), i1(window).on("resize.slick.slick-" + e.instanceUid, i1.proxy(e.resize, e)), i1("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault), i1(window).on("load.slick.slick-" + e.instanceUid, e.setPosition), i1(e.setPosition);
    }, e1.prototype.initUI = function() {
        var i = this;
        !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.show(), i.$nextArrow.show()), !0 === i.options.dots && i.slideCount > i.options.slidesToShow && i.$dots.show();
    }, e1.prototype.keyHandler = function(i) {
        var e = this;
        i.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === i.keyCode && !0 === e.options.accessibility ? e.changeSlide({
            data: {
                message: !0 === e.options.rtl ? "next" : "previous"
            }
        }) : 39 === i.keyCode && !0 === e.options.accessibility && e.changeSlide({
            data: {
                message: !0 === e.options.rtl ? "previous" : "next"
            }
        }));
    }, e1.prototype.lazyLoad = function() {
        function e4(e5) {
            i1("img[data-lazy]", e5).each(function() {
                var e = i1(this), t = i1(this).attr("data-lazy"), o = i1(this).attr("data-srcset"), s = i1(this).attr("data-sizes") || n.$slider.attr("data-sizes"), r = document.createElement("img");
                r.onload = function() {
                    e.animate({
                        opacity: 0
                    }, 100, function() {
                        o && (e.attr("srcset", o), s && e.attr("sizes", s)), e.attr("src", t).animate({
                            opacity: 1
                        }, 200, function() {
                            e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading");
                        }), n.$slider.trigger("lazyLoaded", [
                            n,
                            e,
                            t
                        ]);
                    });
                }, r.onerror = function() {
                    e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), n.$slider.trigger("lazyLoadError", [
                        n,
                        e,
                        t
                    ]);
                }, r.src = t;
            });
        }
        var t5, o1, s2, n = this;
        if (!0 === n.options.centerMode ? !0 === n.options.infinite ? s2 = (o1 = n.currentSlide + (n.options.slidesToShow / 2 + 1)) + n.options.slidesToShow + 2 : (o1 = Math.max(0, n.currentSlide - (n.options.slidesToShow / 2 + 1)), s2 = n.options.slidesToShow / 2 + 1 + 2 + n.currentSlide) : (o1 = n.options.infinite ? n.options.slidesToShow + n.currentSlide : n.currentSlide, s2 = Math.ceil(o1 + n.options.slidesToShow), !0 === n.options.fade && (o1 > 0 && o1--, s2 <= n.slideCount && s2++)), t5 = n.$slider.find(".slick-slide").slice(o1, s2), "anticipated" === n.options.lazyLoad) for(var r1 = o1 - 1, l = s2, d = n.$slider.find(".slick-slide"), a = 0; a < n.options.slidesToScroll; a++)r1 < 0 && (r1 = n.slideCount - 1), t5 = (t5 = t5.add(d.eq(r1))).add(d.eq(l)), r1--, l++;
        e4(t5), n.slideCount <= n.options.slidesToShow ? e4(n.$slider.find(".slick-slide")) : n.currentSlide >= n.slideCount - n.options.slidesToShow ? e4(n.$slider.find(".slick-cloned").slice(0, n.options.slidesToShow)) : 0 === n.currentSlide && e4(n.$slider.find(".slick-cloned").slice(-1 * n.options.slidesToShow));
    }, e1.prototype.loadSlider = function() {
        var i = this;
        i.setPosition(), i.$slideTrack.css({
            opacity: 1
        }), i.$slider.removeClass("slick-loading"), i.initUI(), "progressive" === i.options.lazyLoad && i.progressiveLazyLoad();
    }, e1.prototype.next = e1.prototype.slickNext = function() {
        this.changeSlide({
            data: {
                message: "next"
            }
        });
    }, e1.prototype.orientationChange = function() {
        var i = this;
        i.checkResponsive(), i.setPosition();
    }, e1.prototype.pause = e1.prototype.slickPause = function() {
        var i = this;
        i.autoPlayClear(), i.paused = !0;
    }, e1.prototype.play = e1.prototype.slickPlay = function() {
        var i = this;
        i.autoPlay(), i.options.autoplay = !0, i.paused = !1, i.focussed = !1, i.interrupted = !1;
    }, e1.prototype.postSlide = function(e) {
        var t = this;
        t.unslicked || (t.$slider.trigger("afterChange", [
            t,
            e
        ]), t.animating = !1, t.slideCount > t.options.slidesToShow && t.setPosition(), t.swipeLeft = null, t.options.autoplay && t.autoPlay(), !0 === t.options.accessibility && (t.initADA(), t.options.focusOnChange && i1(t.$slides.get(t.currentSlide)).attr("tabindex", 0).focus()));
    }, e1.prototype.prev = e1.prototype.slickPrev = function() {
        this.changeSlide({
            data: {
                message: "previous"
            }
        });
    }, e1.prototype.preventDefault = function(i) {
        i.preventDefault();
    }, e1.prototype.progressiveLazyLoad = function(e) {
        e = e || 1;
        var t, o, s, n, r, l = this, d = i1("img[data-lazy]", l.$slider);
        d.length ? (t = d.first(), o = t.attr("data-lazy"), s = t.attr("data-srcset"), n = t.attr("data-sizes") || l.$slider.attr("data-sizes"), (r = document.createElement("img")).onload = function() {
            s && (t.attr("srcset", s), n && t.attr("sizes", n)), t.attr("src", o).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"), !0 === l.options.adaptiveHeight && l.setPosition(), l.$slider.trigger("lazyLoaded", [
                l,
                t,
                o
            ]), l.progressiveLazyLoad();
        }, r.onerror = function() {
            e < 3 ? setTimeout(function() {
                l.progressiveLazyLoad(e + 1);
            }, 500) : (t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), l.$slider.trigger("lazyLoadError", [
                l,
                t,
                o
            ]), l.progressiveLazyLoad());
        }, r.src = o) : l.$slider.trigger("allImagesLoaded", [
            l
        ]);
    }, e1.prototype.refresh = function(e) {
        var t, o, s = this;
        o = s.slideCount - s.options.slidesToShow, !s.options.infinite && s.currentSlide > o && (s.currentSlide = o), s.slideCount <= s.options.slidesToShow && (s.currentSlide = 0), t = s.currentSlide, s.destroy(!0), i1.extend(s, s.initials, {
            currentSlide: t
        }), s.init(), e || s.changeSlide({
            data: {
                message: "index",
                index: t
            }
        }, !1);
    }, e1.prototype.registerBreakpoints = function() {
        var e6, t, o, s = this, n = s.options.responsive || null;
        if ("array" === i1.type(n) && n.length) {
            s.respondTo = s.options.respondTo || "window";
            for(e6 in n)if (o = s.breakpoints.length - 1, n.hasOwnProperty(e6)) {
                for(t = n[e6].breakpoint; o >= 0;)s.breakpoints[o] && s.breakpoints[o] === t && s.breakpoints.splice(o, 1), o--;
                s.breakpoints.push(t), s.breakpointSettings[t] = n[e6].settings;
            }
            s.breakpoints.sort(function(i, e) {
                return s.options.mobileFirst ? i - e : e - i;
            });
        }
    }, e1.prototype.reinit = function() {
        var e = this;
        e.$slides = e.$slideTrack.children(e.options.slide).addClass("slick-slide"), e.slideCount = e.$slides.length, e.currentSlide >= e.slideCount && 0 !== e.currentSlide && (e.currentSlide = e.currentSlide - e.options.slidesToScroll), e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0), e.registerBreakpoints(), e.setProps(), e.setupInfinite(), e.buildArrows(), e.updateArrows(), e.initArrowEvents(), e.buildDots(), e.updateDots(), e.initDotEvents(), e.cleanUpSlideEvents(), e.initSlideEvents(), e.checkResponsive(!1, !0), !0 === e.options.focusOnSelect && i1(e.$slideTrack).children().on("click.slick", e.selectHandler), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), e.setPosition(), e.focusHandler(), e.paused = !e.options.autoplay, e.autoPlay(), e.$slider.trigger("reInit", [
            e
        ]);
    }, e1.prototype.resize = function() {
        var e = this;
        i1(window).width() !== e.windowWidth && (clearTimeout(e.windowDelay), e.windowDelay = window.setTimeout(function() {
            e.windowWidth = i1(window).width(), e.checkResponsive(), e.unslicked || e.setPosition();
        }, 50));
    }, e1.prototype.removeSlide = e1.prototype.slickRemove = function(i, e, t) {
        var o = this;
        if (i = "boolean" == typeof i ? !0 === (e = i) ? 0 : o.slideCount - 1 : !0 === e ? --i : i, o.slideCount < 1 || i < 0 || i > o.slideCount - 1) return !1;
        o.unload(), !0 === t ? o.$slideTrack.children().remove() : o.$slideTrack.children(this.options.slide).eq(i).remove(), o.$slides = o.$slideTrack.children(this.options.slide), o.$slideTrack.children(this.options.slide).detach(), o.$slideTrack.append(o.$slides), o.$slidesCache = o.$slides, o.reinit();
    }, e1.prototype.setCSS = function(i) {
        var e, t, o = this, s = {
        };
        !0 === o.options.rtl && (i = -i), e = "left" == o.positionProp ? Math.ceil(i) + "px" : "0px", t = "top" == o.positionProp ? Math.ceil(i) + "px" : "0px", s[o.positionProp] = i, !1 === o.transformsEnabled ? o.$slideTrack.css(s) : (s = {
        }, !1 === o.cssTransitions ? (s[o.animType] = "translate(" + e + ", " + t + ")", o.$slideTrack.css(s)) : (s[o.animType] = "translate3d(" + e + ", " + t + ", 0px)", o.$slideTrack.css(s)));
    }, e1.prototype.setDimensions = function() {
        var i = this;
        !1 === i.options.vertical ? !0 === i.options.centerMode && i.$list.css({
            padding: "0px " + i.options.centerPadding
        }) : (i.$list.height(i.$slides.first().outerHeight(!0) * i.options.slidesToShow), !0 === i.options.centerMode && i.$list.css({
            padding: i.options.centerPadding + " 0px"
        })), i.listWidth = i.$list.width(), i.listHeight = i.$list.height(), !1 === i.options.vertical && !1 === i.options.variableWidth ? (i.slideWidth = Math.ceil(i.listWidth / i.options.slidesToShow), i.$slideTrack.width(Math.ceil(i.slideWidth * i.$slideTrack.children(".slick-slide").length))) : !0 === i.options.variableWidth ? i.$slideTrack.width(5000 * i.slideCount) : (i.slideWidth = Math.ceil(i.listWidth), i.$slideTrack.height(Math.ceil(i.$slides.first().outerHeight(!0) * i.$slideTrack.children(".slick-slide").length)));
        var e = i.$slides.first().outerWidth(!0) - i.$slides.first().width();
        !1 === i.options.variableWidth && i.$slideTrack.children(".slick-slide").width(i.slideWidth - e);
    }, e1.prototype.setFade = function() {
        var e, t = this;
        t.$slides.each(function(o, s) {
            e = t.slideWidth * o * -1, !0 === t.options.rtl ? i1(s).css({
                position: "relative",
                right: e,
                top: 0,
                zIndex: t.options.zIndex - 2,
                opacity: 0
            }) : i1(s).css({
                position: "relative",
                left: e,
                top: 0,
                zIndex: t.options.zIndex - 2,
                opacity: 0
            });
        }), t.$slides.eq(t.currentSlide).css({
            zIndex: t.options.zIndex - 1,
            opacity: 1
        });
    }, e1.prototype.setHeight = function() {
        var i = this;
        if (1 === i.options.slidesToShow && !0 === i.options.adaptiveHeight && !1 === i.options.vertical) {
            var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
            i.$list.css("height", e);
        }
    }, e1.prototype.setOption = e1.prototype.slickSetOption = function() {
        var e7, t, o, s, n, r = this, l = !1;
        if ("object" === i1.type(arguments[0]) ? (o = arguments[0], l = arguments[1], n = "multiple") : "string" === i1.type(arguments[0]) && (o = arguments[0], s = arguments[1], l = arguments[2], "responsive" === arguments[0] && "array" === i1.type(arguments[1]) ? n = "responsive" : void 0 !== arguments[1] && (n = "single")), "single" === n) r.options[o] = s;
        else if ("multiple" === n) i1.each(o, function(i, e) {
            r.options[i] = e;
        });
        else if ("responsive" === n) for(t in s)if ("array" !== i1.type(r.options.responsive)) r.options.responsive = [
            s[t]
        ];
        else {
            for(e7 = r.options.responsive.length - 1; e7 >= 0;)r.options.responsive[e7].breakpoint === s[t].breakpoint && r.options.responsive.splice(e7, 1), e7--;
            r.options.responsive.push(s[t]);
        }
        l && (r.unload(), r.reinit());
    }, e1.prototype.setPosition = function() {
        var i = this;
        i.setDimensions(), i.setHeight(), !1 === i.options.fade ? i.setCSS(i.getLeft(i.currentSlide)) : i.setFade(), i.$slider.trigger("setPosition", [
            i
        ]);
    }, e1.prototype.setProps = function() {
        var i = this, e = document.body.style;
        i.positionProp = !0 === i.options.vertical ? "top" : "left", "top" === i.positionProp ? i.$slider.addClass("slick-vertical") : i.$slider.removeClass("slick-vertical"), void 0 === e.WebkitTransition && void 0 === e.MozTransition && void 0 === e.msTransition || !0 === i.options.useCSS && (i.cssTransitions = !0), i.options.fade && ("number" == typeof i.options.zIndex ? i.options.zIndex < 3 && (i.options.zIndex = 3) : i.options.zIndex = i.defaults.zIndex), void 0 !== e.OTransform && (i.animType = "OTransform", i.transformType = "-o-transform", i.transitionType = "OTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (i.animType = !1)), void 0 !== e.MozTransform && (i.animType = "MozTransform", i.transformType = "-moz-transform", i.transitionType = "MozTransition", void 0 === e.perspectiveProperty && void 0 === e.MozPerspective && (i.animType = !1)), void 0 !== e.webkitTransform && (i.animType = "webkitTransform", i.transformType = "-webkit-transform", i.transitionType = "webkitTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (i.animType = !1)), void 0 !== e.msTransform && (i.animType = "msTransform", i.transformType = "-ms-transform", i.transitionType = "msTransition", void 0 === e.msTransform && (i.animType = !1)), void 0 !== e.transform && !1 !== i.animType && (i.animType = "transform", i.transformType = "transform", i.transitionType = "transition"), i.transformsEnabled = i.options.useTransform && null !== i.animType && !1 !== i.animType;
    }, e1.prototype.setSlideClasses = function(i) {
        var e, t, o, s, n = this;
        if (t = n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), n.$slides.eq(i).addClass("slick-current"), !0 === n.options.centerMode) {
            var r = n.options.slidesToShow % 2 == 0 ? 1 : 0;
            e = Math.floor(n.options.slidesToShow / 2), !0 === n.options.infinite && (i >= e && i <= n.slideCount - 1 - e ? n.$slides.slice(i - e + r, i + e + 1).addClass("slick-active").attr("aria-hidden", "false") : (o = n.options.slidesToShow + i, t.slice(o - e + 1 + r, o + e + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === i ? t.eq(t.length - 1 - n.options.slidesToShow).addClass("slick-center") : i === n.slideCount - 1 && t.eq(n.options.slidesToShow).addClass("slick-center")), n.$slides.eq(i).addClass("slick-center");
        } else i >= 0 && i <= n.slideCount - n.options.slidesToShow ? n.$slides.slice(i, i + n.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : t.length <= n.options.slidesToShow ? t.addClass("slick-active").attr("aria-hidden", "false") : (s = n.slideCount % n.options.slidesToShow, o = !0 === n.options.infinite ? n.options.slidesToShow + i : i, n.options.slidesToShow == n.options.slidesToScroll && n.slideCount - i < n.options.slidesToShow ? t.slice(o - (n.options.slidesToShow - s), o + s).addClass("slick-active").attr("aria-hidden", "false") : t.slice(o, o + n.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false"));
        "ondemand" !== n.options.lazyLoad && "anticipated" !== n.options.lazyLoad || n.lazyLoad();
    }, e1.prototype.setupInfinite = function() {
        var e, t, o, s = this;
        if (!0 === s.options.fade && (s.options.centerMode = !1), !0 === s.options.infinite && !1 === s.options.fade && (t = null, s.slideCount > s.options.slidesToShow)) {
            for(o = !0 === s.options.centerMode ? s.options.slidesToShow + 1 : s.options.slidesToShow, e = s.slideCount; e > s.slideCount - o; e -= 1)t = e - 1, i1(s.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t - s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned");
            for(e = 0; e < o + s.slideCount; e += 1)t = e, i1(s.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t + s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned");
            s.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
                i1(this).attr("id", "");
            });
        }
    }, e1.prototype.interrupt = function(i) {
        var e = this;
        i || e.autoPlay(), e.interrupted = i;
    }, e1.prototype.selectHandler = function(e) {
        var t = this, o = i1(e.target).is(".slick-slide") ? i1(e.target) : i1(e.target).parents(".slick-slide"), s = parseInt(o.attr("data-slick-index"));
        s || (s = 0), t.slideCount <= t.options.slidesToShow ? t.slideHandler(s, !1, !0) : t.slideHandler(s);
    }, e1.prototype.slideHandler = function(i, e, t) {
        var o, s, n, r, l, d = null, a = this;
        if (e = e || !1, !(!0 === a.animating && !0 === a.options.waitForAnimate || !0 === a.options.fade && a.currentSlide === i)) {
            if (!1 === e && a.asNavFor(i), o = i, d = a.getLeft(o), r = a.getLeft(a.currentSlide), a.currentLeft = null === a.swipeLeft ? r : a.swipeLeft, !1 === a.options.infinite && !1 === a.options.centerMode && (i < 0 || i > a.getDotCount() * a.options.slidesToScroll)) !1 === a.options.fade && (o = a.currentSlide, !0 !== t ? a.animateSlide(r, function() {
                a.postSlide(o);
            }) : a.postSlide(o));
            else if (!1 === a.options.infinite && !0 === a.options.centerMode && (i < 0 || i > a.slideCount - a.options.slidesToScroll)) !1 === a.options.fade && (o = a.currentSlide, !0 !== t ? a.animateSlide(r, function() {
                a.postSlide(o);
            }) : a.postSlide(o));
            else {
                if (a.options.autoplay && clearInterval(a.autoPlayTimer), s = o < 0 ? a.slideCount % a.options.slidesToScroll != 0 ? a.slideCount - a.slideCount % a.options.slidesToScroll : a.slideCount + o : o >= a.slideCount ? a.slideCount % a.options.slidesToScroll != 0 ? 0 : o - a.slideCount : o, a.animating = !0, a.$slider.trigger("beforeChange", [
                    a,
                    a.currentSlide,
                    s
                ]), n = a.currentSlide, a.currentSlide = s, a.setSlideClasses(a.currentSlide), a.options.asNavFor && (l = (l = a.getNavTarget()).slick("getSlick")).slideCount <= l.options.slidesToShow && l.setSlideClasses(a.currentSlide), a.updateDots(), a.updateArrows(), !0 === a.options.fade) return !0 !== t ? (a.fadeSlideOut(n), a.fadeSlide(s, function() {
                    a.postSlide(s);
                })) : a.postSlide(s), void a.animateHeight();
                !0 !== t ? a.animateSlide(d, function() {
                    a.postSlide(s);
                }) : a.postSlide(s);
            }
        }
    }, e1.prototype.startLoad = function() {
        var i = this;
        !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.hide(), i.$nextArrow.hide()), !0 === i.options.dots && i.slideCount > i.options.slidesToShow && i.$dots.hide(), i.$slider.addClass("slick-loading");
    }, e1.prototype.swipeDirection = function() {
        var i, e, t, o, s = this;
        return i = s.touchObject.startX - s.touchObject.curX, e = s.touchObject.startY - s.touchObject.curY, t = Math.atan2(e, i), (o = Math.round(180 * t / Math.PI)) < 0 && (o = 360 - Math.abs(o)), o <= 45 && o >= 0 ? !1 === s.options.rtl ? "left" : "right" : o <= 360 && o >= 315 ? !1 === s.options.rtl ? "left" : "right" : o >= 135 && o <= 225 ? !1 === s.options.rtl ? "right" : "left" : !0 === s.options.verticalSwiping ? o >= 35 && o <= 135 ? "down" : "up" : "vertical";
    }, e1.prototype.swipeEnd = function(i) {
        var e, t, o = this;
        if (o.dragging = !1, o.swiping = !1, o.scrolling) return o.scrolling = !1, !1;
        if (o.interrupted = !1, o.shouldClick = !(o.touchObject.swipeLength > 10), void 0 === o.touchObject.curX) return !1;
        if (!0 === o.touchObject.edgeHit && o.$slider.trigger("edge", [
            o,
            o.swipeDirection()
        ]), o.touchObject.swipeLength >= o.touchObject.minSwipe) {
            switch(t = o.swipeDirection()){
                case "left":
                case "down":
                    e = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide + o.getSlideCount()) : o.currentSlide + o.getSlideCount(), o.currentDirection = 0;
                    break;
                case "right":
                case "up":
                    e = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide - o.getSlideCount()) : o.currentSlide - o.getSlideCount(), o.currentDirection = 1;
            }
            "vertical" != t && (o.slideHandler(e), o.touchObject = {
            }, o.$slider.trigger("swipe", [
                o,
                t
            ]));
        } else o.touchObject.startX !== o.touchObject.curX && (o.slideHandler(o.currentSlide), o.touchObject = {
        });
    }, e1.prototype.swipeHandler = function(i) {
        var e = this;
        if (!(!1 === e.options.swipe || "ontouchend" in document && !1 === e.options.swipe || !1 === e.options.draggable && -1 !== i.type.indexOf("mouse"))) switch(e.touchObject.fingerCount = i.originalEvent && void 0 !== i.originalEvent.touches ? i.originalEvent.touches.length : 1, e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold, !0 === e.options.verticalSwiping && (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold), i.data.action){
            case "start":
                e.swipeStart(i);
                break;
            case "move":
                e.swipeMove(i);
                break;
            case "end":
                e.swipeEnd(i);
        }
    }, e1.prototype.swipeMove = function(i) {
        var e, t, o, s, n, r, l = this;
        return n = void 0 !== i.originalEvent ? i.originalEvent.touches : null, !(!l.dragging || l.scrolling || n && 1 !== n.length) && (e = l.getLeft(l.currentSlide), l.touchObject.curX = void 0 !== n ? n[0].pageX : i.clientX, l.touchObject.curY = void 0 !== n ? n[0].pageY : i.clientY, l.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(l.touchObject.curX - l.touchObject.startX, 2))), r = Math.round(Math.sqrt(Math.pow(l.touchObject.curY - l.touchObject.startY, 2))), !l.options.verticalSwiping && !l.swiping && r > 4 ? (l.scrolling = !0, !1) : (!0 === l.options.verticalSwiping && (l.touchObject.swipeLength = r), t = l.swipeDirection(), void 0 !== i.originalEvent && l.touchObject.swipeLength > 4 && (l.swiping = !0, i.preventDefault()), s = (!1 === l.options.rtl ? 1 : -1) * (l.touchObject.curX > l.touchObject.startX ? 1 : -1), !0 === l.options.verticalSwiping && (s = l.touchObject.curY > l.touchObject.startY ? 1 : -1), o = l.touchObject.swipeLength, l.touchObject.edgeHit = !1, !1 === l.options.infinite && (0 === l.currentSlide && "right" === t || l.currentSlide >= l.getDotCount() && "left" === t) && (o = l.touchObject.swipeLength * l.options.edgeFriction, l.touchObject.edgeHit = !0), !1 === l.options.vertical ? l.swipeLeft = e + o * s : l.swipeLeft = e + o * (l.$list.height() / l.listWidth) * s, !0 === l.options.verticalSwiping && (l.swipeLeft = e + o * s), !0 !== l.options.fade && !1 !== l.options.touchMove && (!0 === l.animating ? (l.swipeLeft = null, !1) : void l.setCSS(l.swipeLeft))));
    }, e1.prototype.swipeStart = function(i) {
        var e, t = this;
        if (t.interrupted = !0, 1 !== t.touchObject.fingerCount || t.slideCount <= t.options.slidesToShow) return t.touchObject = {
        }, !1;
        void 0 !== i.originalEvent && void 0 !== i.originalEvent.touches && (e = i.originalEvent.touches[0]), t.touchObject.startX = t.touchObject.curX = void 0 !== e ? e.pageX : i.clientX, t.touchObject.startY = t.touchObject.curY = void 0 !== e ? e.pageY : i.clientY, t.dragging = !0;
    }, e1.prototype.unfilterSlides = e1.prototype.slickUnfilter = function() {
        var i = this;
        null !== i.$slidesCache && (i.unload(), i.$slideTrack.children(this.options.slide).detach(), i.$slidesCache.appendTo(i.$slideTrack), i.reinit());
    }, e1.prototype.unload = function() {
        var e = this;
        i1(".slick-cloned", e.$slider).remove(), e.$dots && e.$dots.remove(), e.$prevArrow && e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove(), e.$nextArrow && e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove(), e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "");
    }, e1.prototype.unslick = function(i) {
        var e = this;
        e.$slider.trigger("unslick", [
            e,
            i
        ]), e.destroy();
    }, e1.prototype.updateArrows = function() {
        var i = this;
        i.options.slidesToShow, !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && !i.options.infinite && (i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === i.currentSlide ? (i.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : i.currentSlide >= i.slideCount - i.options.slidesToShow && !1 === i.options.centerMode ? (i.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : i.currentSlide >= i.slideCount - 1 && !0 === i.options.centerMode && (i.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")));
    }, e1.prototype.updateDots = function() {
        var i = this;
        null !== i.$dots && (i.$dots.find("li").removeClass("slick-active").end(), i.$dots.find("li").eq(Math.floor(i.currentSlide / i.options.slidesToScroll)).addClass("slick-active"));
    }, e1.prototype.visibility = function() {
        var i = this;
        i.options.autoplay && (document[i.hidden] ? i.interrupted = !0 : i.interrupted = !1);
    }, i1.fn.slick = function() {
        var i, t, o = this, s = arguments[0], n = Array.prototype.slice.call(arguments, 1), r = o.length;
        for(i = 0; i < r; i++)if ("object" == typeof s || void 0 === s ? o[i].slick = new e1(o[i], s) : t = o[i].slick[s].apply(o[i].slick, n), void 0 !== t) return t;
        return o;
    };
});

},{"jquery":"bE6My"}]},["hVNDP","dxxdW"], "dxxdW", "parcelRequire97db")

//# sourceMappingURL=index.435bd059.js.map
