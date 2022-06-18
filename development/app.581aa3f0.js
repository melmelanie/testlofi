// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
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

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
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
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"../node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"../src/scss/app.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"../src/services/quotes/sdk.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.get_quotes = void 0;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var get_quotes = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var request, quotes;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch("https://type.fit/api/quotes");

          case 2:
            request = _context.sent;
            _context.next = 5;
            return request.json();

          case 5:
            quotes = _context.sent;
            return _context.abrupt("return", quotes);

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function get_quotes() {
    return _ref.apply(this, arguments);
  };
}();

exports.get_quotes = get_quotes;
},{}],"../src/services/quotes/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var quotes = _interopRequireWildcard(require("./sdk"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = _objectSpread({}, quotes);

exports.default = _default;
},{"./sdk":"../src/services/quotes/sdk.js"}],"../src/services/google/config.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var config = {
  API_KEY: undefined
};
var _default = config;
exports.default = _default;
},{}],"../src/services/google/sdk.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.get_playlist_count = exports.get_playlist = void 0;

var _config = _interopRequireDefault(require("./config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var baseURL = "https://www.googleapis.com/youtube/v3/playlistItems";

var get_playlist = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(id) {
    var url, request, response;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            url = new URLSearchParams();
            url.set("playlistId", id);
            url.set("key", _config.default.API_KEY);
            url.set("part", "id");
            _context.next = 6;
            return fetch(baseURL + "?" + url.toString());

          case 6:
            request = _context.sent;
            _context.next = 9;
            return request.json();

          case 9:
            response = _context.sent;
            return _context.abrupt("return", response);

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function get_playlist(_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.get_playlist = get_playlist;

var get_playlist_count = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(id) {
    var response, count;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return get_playlist(id);

          case 2:
            response = _context2.sent;
            count = response.pageInfo.totalResults;
            return _context2.abrupt("return", count);

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function get_playlist_count(_x2) {
    return _ref2.apply(this, arguments);
  };
}();

exports.get_playlist_count = get_playlist_count;
},{"./config":"../src/services/google/config.js"}],"../src/services/google/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var google = _interopRequireWildcard(require("./sdk"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = _objectSpread({}, google);

exports.default = _default;
},{"./sdk":"../src/services/google/sdk.js"}],"../src/utils/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.create_el = exports.get_by_id = exports.get_by_class = exports.query_all = exports.query = exports.distinct_random_number = exports.random_number = exports.format_hour = exports.format_number = void 0;

var format_number = function format_number(num) {
  return num >= 10 ? num : "0".concat(num);
};

exports.format_number = format_number;

var format_hour = function format_hour(hour, min, sec) {
  return "".concat(hour, ":").concat(min, ":").concat(sec);
};

exports.format_hour = format_hour;

var random_number = function random_number(max, min) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

exports.random_number = random_number;

var distinct_random_number = function distinct_random_number(max, min, current) {
  var new_random_number = random_number(max, min);

  while (new_random_number === current) {
    return distinct_random_number(max, min, current);
  }

  return new_random_number;
};

exports.distinct_random_number = distinct_random_number;
var query = document.querySelector.bind(document);
exports.query = query;
var query_all = document.querySelectorAll.bind(document);
exports.query_all = query_all;
var get_by_class = document.getElementsByClassName.bind(document);
exports.get_by_class = get_by_class;
var get_by_id = document.getElementById.bind(document);
exports.get_by_id = get_by_id;
var create_el = document.createElement.bind(document);
exports.create_el = create_el;
},{}],"../src/assets/amp_prob.gif":[function(require,module,exports) {
module.exports = "/amp_prob.74f033c3.gif";
},{}],"../src/assets/attack.gif":[function(require,module,exports) {
module.exports = "/attack.7070365e.gif";
},{}],"../src/assets/bad_landing.gif":[function(require,module,exports) {
module.exports = "/bad_landing.13eb5e5c.gif";
},{}],"../src/assets/bicycle.gif":[function(require,module,exports) {
module.exports = "/bicycle.afb754c1.gif";
},{}],"../src/assets/blade.gif":[function(require,module,exports) {
module.exports = "/blade.a3817d1c.gif";
},{}],"../src/assets/bluebalcony.gif":[function(require,module,exports) {
module.exports = "/bluebalcony.3b93ba03.gif";
},{}],"../src/assets/bridge.gif":[function(require,module,exports) {
module.exports = "/bridge.da64d177.gif";
},{}],"../src/assets/bridge_raining.gif":[function(require,module,exports) {
module.exports = "/bridge_raining.2431fcb4.gif";
},{}],"../src/assets/cacao_and_coffee_shop.gif":[function(require,module,exports) {
module.exports = "/cacao_and_coffee_shop.fc79c4dc.gif";
},{}],"../src/assets/castle.gif":[function(require,module,exports) {
module.exports = "/castle.546478e3.gif";
},{}],"../src/assets/cave.gif":[function(require,module,exports) {
module.exports = "/cave.ebc302ef.gif";
},{}],"../src/assets/cemetry.gif":[function(require,module,exports) {
module.exports = "/cemetry.d1754380.gif";
},{}],"../src/assets/citymirror.gif":[function(require,module,exports) {
module.exports = "/citymirror.07986155.gif";
},{}],"../src/assets/coast.gif":[function(require,module,exports) {
module.exports = "/coast.4d7f2758.gif";
},{}],"../src/assets/coffeeinrain.gif":[function(require,module,exports) {
module.exports = "/coffeeinrain.b724225e.gif";
},{}],"../src/assets/comition_sky_left_to_right.gif":[function(require,module,exports) {
module.exports = "/comition_sky_left_to_right.aabb250a.gif";
},{}],"../src/assets/controlroom.gif":[function(require,module,exports) {
module.exports = "/controlroom.144c7537.gif";
},{}],"../src/assets/daftpunk.gif":[function(require,module,exports) {
module.exports = "/daftpunk.8dcd6555.gif";
},{}],"../src/assets/dark_pillar.gif":[function(require,module,exports) {
module.exports = "/dark_pillar.354c09de.gif";
},{}],"../src/assets/dawn.gif":[function(require,module,exports) {
module.exports = "/dawn.0e275e48.gif";
},{}],"../src/assets/drift.gif":[function(require,module,exports) {
module.exports = "/drift.78d1614b.gif";
},{}],"../src/assets/droidcrime.gif":[function(require,module,exports) {
module.exports = "/droidcrime.19f3a5eb.gif";
},{}],"../src/assets/echoesfromneals.gif":[function(require,module,exports) {
module.exports = "/echoesfromneals.603297f6.gif";
},{}],"../src/assets/elderorc.gif":[function(require,module,exports) {
module.exports = "/elderorc.88991d9e.gif";
},{}],"../src/assets/exodus.gif":[function(require,module,exports) {
module.exports = "/exodus.9cf9bd1b.gif";
},{}],"../src/assets/factory5.gif":[function(require,module,exports) {
module.exports = "/factory5.7477fcef.gif";
},{}],"../src/assets/falls.gif":[function(require,module,exports) {
module.exports = "/falls.1ca2558d.gif";
},{}],"../src/assets/familydinner.gif":[function(require,module,exports) {
module.exports = "/familydinner.9e845604.gif";
},{}],"../src/assets/fire.gif":[function(require,module,exports) {
module.exports = "/fire.da8c5d49.gif";
},{}],"../src/assets/flower_shop.gif":[function(require,module,exports) {
module.exports = "/flower_shop.958ab84f.gif";
},{}],"../src/assets/forrest.gif":[function(require,module,exports) {
module.exports = "/forrest.acbe23a6.gif";
},{}],"../src/assets/fortress.gif":[function(require,module,exports) {
module.exports = "/fortress.5a3b8402.gif";
},{}],"../src/assets/future.gif":[function(require,module,exports) {
module.exports = "/future.1934149c.gif";
},{}],"../src/assets/girlinrain.gif":[function(require,module,exports) {
module.exports = "/girlinrain.b3ecf66e.gif";
},{}],"../src/assets/grandcanyon.gif":[function(require,module,exports) {
module.exports = "/grandcanyon.58077ed9.gif";
},{}],"../src/assets/highfloor.gif":[function(require,module,exports) {
module.exports = "/highfloor.8bb012dc.gif";
},{}],"../src/assets/highlands.gif":[function(require,module,exports) {
module.exports = "/highlands.150cd3d6.gif";
},{}],"../src/assets/highsoceity.gif":[function(require,module,exports) {
module.exports = "/highsoceity.9369bcc9.gif";
},{}],"../src/assets/horse.gif":[function(require,module,exports) {
module.exports = "/horse.9e06d93c.gif";
},{}],"../src/assets/iplayoldgames.gif":[function(require,module,exports) {
module.exports = "/iplayoldgames.17787da3.gif";
},{}],"../src/assets/jazznight.gif":[function(require,module,exports) {
module.exports = "/jazznight.2c33d6b8.gif";
},{}],"../src/assets/lake.gif":[function(require,module,exports) {
module.exports = "/lake.80d89306.gif";
},{}],"../src/assets/last_dance.gif":[function(require,module,exports) {
module.exports = "/last_dance.2b0053f8.gif";
},{}],"../src/assets/lowlands.gif":[function(require,module,exports) {
module.exports = "/lowlands.553fcdb7.gif";
},{}],"../src/assets/lullaby.gif":[function(require,module,exports) {
module.exports = "/lullaby.c558b990.gif";
},{}],"../src/assets/metro_final.gif":[function(require,module,exports) {
module.exports = "/metro_final.ac77a7bd.gif";
},{}],"../src/assets/midnight_melancholy.gif":[function(require,module,exports) {
module.exports = "/midnight_melancholy.aca74f35.gif";
},{}],"../src/assets/moon.png":[function(require,module,exports) {
module.exports = "/moon.c1aa3242.png";
},{}],"../src/assets/motorcycle.gif":[function(require,module,exports) {
module.exports = "/motorcycle.90ad9fc8.gif";
},{}],"../src/assets/mountain.gif":[function(require,module,exports) {
module.exports = "/mountain.307a856e.gif";
},{}],"../src/assets/mountain_mote.gif":[function(require,module,exports) {
module.exports = "/mountain_mote.74b449d1.gif";
},{}],"../src/assets/nature.gif":[function(require,module,exports) {
module.exports = "/nature.c39e40ec.gif";
},{}],"../src/assets/nero_land.gif":[function(require,module,exports) {
module.exports = "/nero_land.85141881.gif";
},{}],"../src/assets/nightlytraining.gif":[function(require,module,exports) {
module.exports = "/nightlytraining.5fb67cb4.gif";
},{}],"../src/assets/nighttrain.gif":[function(require,module,exports) {
module.exports = "/nighttrain.6fa53710.gif";
},{}],"../src/assets/northlights.gif":[function(require,module,exports) {
module.exports = "/northlights.0b2a7958.gif";
},{}],"../src/assets/pilot.gif":[function(require,module,exports) {
module.exports = "/pilot.5ecc6e4f.gif";
},{}],"../src/assets/player2.gif":[function(require,module,exports) {
module.exports = "/player2.87fa1654.gif";
},{}],"../src/assets/rain.gif":[function(require,module,exports) {
module.exports = "/rain.5fc44598.gif";
},{}],"../src/assets/redbicycle.gif":[function(require,module,exports) {
module.exports = "/redbicycle.2707298b.gif";
},{}],"../src/assets/reddriver.gif":[function(require,module,exports) {
module.exports = "/reddriver.c6f97a3b.gif";
},{}],"../src/assets/ride.gif":[function(require,module,exports) {
module.exports = "/ride.7c911484.gif";
},{}],"../src/assets/robot_alley.gif":[function(require,module,exports) {
module.exports = "/robot_alley.b27f0fa1.gif";
},{}],"../src/assets/sandcastle.gif":[function(require,module,exports) {
module.exports = "/sandcastle.d69a29a5.gif";
},{}],"../src/assets/sea.gif":[function(require,module,exports) {
module.exports = "/sea.0eb6306f.gif";
},{}],"../src/assets/shootingstars.gif":[function(require,module,exports) {
module.exports = "/shootingstars.5a907c61.gif";
},{}],"../src/assets/shop.gif":[function(require,module,exports) {
module.exports = "/shop.826020c8.gif";
},{}],"../src/assets/sideshop.gif":[function(require,module,exports) {
module.exports = "/sideshop.7ab54d39.gif";
},{}],"../src/assets/skate.gif":[function(require,module,exports) {
module.exports = "/skate.df02d0e6.gif";
},{}],"../src/assets/snow.gif":[function(require,module,exports) {
module.exports = "/snow.39eafa93.gif";
},{}],"../src/assets/spacecommander.gif":[function(require,module,exports) {
module.exports = "/spacecommander.5c594466.gif";
},{}],"../src/assets/spaceport.gif":[function(require,module,exports) {
module.exports = "/spaceport.1766f342.gif";
},{}],"../src/assets/stacking_houses_on_a_windy_day.gif":[function(require,module,exports) {
module.exports = "/stacking_houses_on_a_windy_day.a23942a8.gif";
},{}],"../src/assets/streets.gif":[function(require,module,exports) {
module.exports = "/streets.7c25eb87.gif";
},{}],"../src/assets/sushi.gif":[function(require,module,exports) {
module.exports = "/sushi.644e8978.gif";
},{}],"../src/assets/swamp.gif":[function(require,module,exports) {
module.exports = "/swamp.e2327247.gif";
},{}],"../src/assets/swirling.gif":[function(require,module,exports) {
module.exports = "/swirling.352ad75a.gif";
},{}],"../src/assets/temple.gif":[function(require,module,exports) {
module.exports = "/temple.be8edab4.gif";
},{}],"../src/assets/thieves.gif":[function(require,module,exports) {
module.exports = "/thieves.a46d7b30.gif";
},{}],"../src/assets/tower.gif":[function(require,module,exports) {
module.exports = "/tower.b9bd64d0.gif";
},{}],"../src/assets/town.gif":[function(require,module,exports) {
module.exports = "/town.4883608b.gif";
},{}],"../src/assets/train.gif":[function(require,module,exports) {
module.exports = "/train.4e701810.gif";
},{}],"../src/assets/train_city.gif":[function(require,module,exports) {
module.exports = "/train_city.b8875d40.gif";
},{}],"../src/assets/troll_cave.gif":[function(require,module,exports) {
module.exports = "/troll_cave.f886e21c.gif";
},{}],"../src/assets/tv.gif":[function(require,module,exports) {
module.exports = "/tv.ca9a5b7e.gif";
},{}],"../src/assets/underwater.gif":[function(require,module,exports) {
module.exports = "/underwater.fd56d0e2.gif";
},{}],"../src/assets/virtuaverse.gif":[function(require,module,exports) {
module.exports = "/virtuaverse.1355b68d.gif";
},{}],"../src/assets/wild_boy.gif":[function(require,module,exports) {
module.exports = "/wild_boy.8a34a811.gif";
},{}],"../src/assets/windyday.gif":[function(require,module,exports) {
module.exports = "/windyday.63b8c1d0.gif";
},{}],"../src/assets/youngatnight.gif":[function(require,module,exports) {
module.exports = "/youngatnight.762e0353.gif";
},{}],"../src/assets/zombies.gif":[function(require,module,exports) {
module.exports = "/zombies.91e19bfe.gif";
},{}],"../src/data/data.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = ["amp_prob.gif", "attack.gif", "bad_landing.gif", "bicycle.gif", "blade.gif", "bluebalcony.gif", "bridge.gif", "bridge_raining.gif", "cacao_and_coffee_shop.gif", "castle.gif", "cave.gif", "cemetry.gif", "citymirror.gif", "coast.gif", "coffeeinrain.gif", "comition_sky_left_to_right.gif", "controlroom.gif", "daftpunk.gif", "dark_pillar.gif", "dawn.gif", "drift.gif", "droidcrime.gif", "echoesfromneals.gif", "elderorc.gif", "exodus.gif", "factory5.gif", "falls.gif", "familydinner.gif", "fire.gif", "flower_shop.gif", "forrest.gif", "fortress.gif", "future.gif", "girlinrain.gif", "grandcanyon.gif", "highfloor.gif", "highlands.gif", "highsoceity.gif", "horse.gif", "iplayoldgames.gif", "jazznight.gif", "lake.gif", "last_dance.gif", "lowlands.gif", "lullaby.gif", "metro_final.gif", "midnight_melancholy.gif", "moon.png", "motorcycle.gif", "mountain.gif", "mountain_mote.gif", "nature.gif", "nero_land.gif", "nightlytraining.gif", "nighttrain.gif", "northlights.gif", "pilot.gif", "player2.gif", "rain.gif", "redbicycle.gif", "reddriver.gif", "ride.gif", "robot_alley.gif", "sandcastle.gif", "sea.gif", "shootingstars.gif", "shop.gif", "sideshop.gif", "skate.gif", "snow.gif", "spacecommander.gif", "spaceport.gif", "stacking_houses_on_a_windy_day.gif", "streets.gif", "sushi.gif", "swamp.gif", "swirling.gif", "temple.gif", "thieves.gif", "tower.gif", "town.gif", "train.gif", "train_city.gif", "troll_cave.gif", "tv.gif", "underwater.gif", "virtuaverse.gif", "wild_boy.gif", "windyday.gif", "youngatnight.gif", "zombies.gif"];
exports.default = _default;
},{}],"../src/data/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("../assets/amp_prob.gif");

require("../assets/attack.gif");

require("../assets/bad_landing.gif");

require("../assets/bicycle.gif");

require("../assets/blade.gif");

require("../assets/bluebalcony.gif");

require("../assets/bridge.gif");

require("../assets/bridge_raining.gif");

require("../assets/cacao_and_coffee_shop.gif");

require("../assets/castle.gif");

require("../assets/cave.gif");

require("../assets/cemetry.gif");

require("../assets/citymirror.gif");

require("../assets/coast.gif");

require("../assets/coffeeinrain.gif");

require("../assets/comition_sky_left_to_right.gif");

require("../assets/controlroom.gif");

require("../assets/daftpunk.gif");

require("../assets/dark_pillar.gif");

require("../assets/dawn.gif");

require("../assets/drift.gif");

require("../assets/droidcrime.gif");

require("../assets/echoesfromneals.gif");

require("../assets/elderorc.gif");

require("../assets/exodus.gif");

require("../assets/factory5.gif");

require("../assets/falls.gif");

require("../assets/familydinner.gif");

require("../assets/fire.gif");

require("../assets/flower_shop.gif");

require("../assets/forrest.gif");

require("../assets/fortress.gif");

require("../assets/future.gif");

require("../assets/girlinrain.gif");

require("../assets/grandcanyon.gif");

require("../assets/highfloor.gif");

require("../assets/highlands.gif");

require("../assets/highsoceity.gif");

require("../assets/horse.gif");

require("../assets/iplayoldgames.gif");

require("../assets/jazznight.gif");

require("../assets/lake.gif");

require("../assets/last_dance.gif");

require("../assets/lowlands.gif");

require("../assets/lullaby.gif");

require("../assets/metro_final.gif");

require("../assets/midnight_melancholy.gif");

require("../assets/moon.png");

require("../assets/motorcycle.gif");

require("../assets/mountain.gif");

require("../assets/mountain_mote.gif");

require("../assets/nature.gif");

require("../assets/nero_land.gif");

require("../assets/nightlytraining.gif");

require("../assets/nighttrain.gif");

require("../assets/northlights.gif");

require("../assets/pilot.gif");

require("../assets/player2.gif");

require("../assets/rain.gif");

require("../assets/redbicycle.gif");

require("../assets/reddriver.gif");

require("../assets/ride.gif");

require("../assets/robot_alley.gif");

require("../assets/sandcastle.gif");

require("../assets/sea.gif");

require("../assets/shootingstars.gif");

require("../assets/shop.gif");

require("../assets/sideshop.gif");

require("../assets/skate.gif");

require("../assets/snow.gif");

require("../assets/spacecommander.gif");

require("../assets/spaceport.gif");

require("../assets/stacking_houses_on_a_windy_day.gif");

require("../assets/streets.gif");

require("../assets/sushi.gif");

require("../assets/swamp.gif");

require("../assets/swirling.gif");

require("../assets/temple.gif");

require("../assets/thieves.gif");

require("../assets/tower.gif");

require("../assets/town.gif");

require("../assets/train.gif");

require("../assets/train_city.gif");

require("../assets/troll_cave.gif");

require("../assets/tv.gif");

require("../assets/underwater.gif");

require("../assets/virtuaverse.gif");

require("../assets/wild_boy.gif");

require("../assets/windyday.gif");

require("../assets/youngatnight.gif");

require("../assets/zombies.gif");

var _data = _interopRequireDefault(require("./data"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = _data.default.map(function (file_name) {
  return require("../assets/".concat(file_name));
});

exports.default = _default;
},{"../assets/amp_prob.gif":"../src/assets/amp_prob.gif","../assets/attack.gif":"../src/assets/attack.gif","../assets/bad_landing.gif":"../src/assets/bad_landing.gif","../assets/bicycle.gif":"../src/assets/bicycle.gif","../assets/blade.gif":"../src/assets/blade.gif","../assets/bluebalcony.gif":"../src/assets/bluebalcony.gif","../assets/bridge.gif":"../src/assets/bridge.gif","../assets/bridge_raining.gif":"../src/assets/bridge_raining.gif","../assets/cacao_and_coffee_shop.gif":"../src/assets/cacao_and_coffee_shop.gif","../assets/castle.gif":"../src/assets/castle.gif","../assets/cave.gif":"../src/assets/cave.gif","../assets/cemetry.gif":"../src/assets/cemetry.gif","../assets/citymirror.gif":"../src/assets/citymirror.gif","../assets/coast.gif":"../src/assets/coast.gif","../assets/coffeeinrain.gif":"../src/assets/coffeeinrain.gif","../assets/comition_sky_left_to_right.gif":"../src/assets/comition_sky_left_to_right.gif","../assets/controlroom.gif":"../src/assets/controlroom.gif","../assets/daftpunk.gif":"../src/assets/daftpunk.gif","../assets/dark_pillar.gif":"../src/assets/dark_pillar.gif","../assets/dawn.gif":"../src/assets/dawn.gif","../assets/drift.gif":"../src/assets/drift.gif","../assets/droidcrime.gif":"../src/assets/droidcrime.gif","../assets/echoesfromneals.gif":"../src/assets/echoesfromneals.gif","../assets/elderorc.gif":"../src/assets/elderorc.gif","../assets/exodus.gif":"../src/assets/exodus.gif","../assets/factory5.gif":"../src/assets/factory5.gif","../assets/falls.gif":"../src/assets/falls.gif","../assets/familydinner.gif":"../src/assets/familydinner.gif","../assets/fire.gif":"../src/assets/fire.gif","../assets/flower_shop.gif":"../src/assets/flower_shop.gif","../assets/forrest.gif":"../src/assets/forrest.gif","../assets/fortress.gif":"../src/assets/fortress.gif","../assets/future.gif":"../src/assets/future.gif","../assets/girlinrain.gif":"../src/assets/girlinrain.gif","../assets/grandcanyon.gif":"../src/assets/grandcanyon.gif","../assets/highfloor.gif":"../src/assets/highfloor.gif","../assets/highlands.gif":"../src/assets/highlands.gif","../assets/highsoceity.gif":"../src/assets/highsoceity.gif","../assets/horse.gif":"../src/assets/horse.gif","../assets/iplayoldgames.gif":"../src/assets/iplayoldgames.gif","../assets/jazznight.gif":"../src/assets/jazznight.gif","../assets/lake.gif":"../src/assets/lake.gif","../assets/last_dance.gif":"../src/assets/last_dance.gif","../assets/lowlands.gif":"../src/assets/lowlands.gif","../assets/lullaby.gif":"../src/assets/lullaby.gif","../assets/metro_final.gif":"../src/assets/metro_final.gif","../assets/midnight_melancholy.gif":"../src/assets/midnight_melancholy.gif","../assets/moon.png":"../src/assets/moon.png","../assets/motorcycle.gif":"../src/assets/motorcycle.gif","../assets/mountain.gif":"../src/assets/mountain.gif","../assets/mountain_mote.gif":"../src/assets/mountain_mote.gif","../assets/nature.gif":"../src/assets/nature.gif","../assets/nero_land.gif":"../src/assets/nero_land.gif","../assets/nightlytraining.gif":"../src/assets/nightlytraining.gif","../assets/nighttrain.gif":"../src/assets/nighttrain.gif","../assets/northlights.gif":"../src/assets/northlights.gif","../assets/pilot.gif":"../src/assets/pilot.gif","../assets/player2.gif":"../src/assets/player2.gif","../assets/rain.gif":"../src/assets/rain.gif","../assets/redbicycle.gif":"../src/assets/redbicycle.gif","../assets/reddriver.gif":"../src/assets/reddriver.gif","../assets/ride.gif":"../src/assets/ride.gif","../assets/robot_alley.gif":"../src/assets/robot_alley.gif","../assets/sandcastle.gif":"../src/assets/sandcastle.gif","../assets/sea.gif":"../src/assets/sea.gif","../assets/shootingstars.gif":"../src/assets/shootingstars.gif","../assets/shop.gif":"../src/assets/shop.gif","../assets/sideshop.gif":"../src/assets/sideshop.gif","../assets/skate.gif":"../src/assets/skate.gif","../assets/snow.gif":"../src/assets/snow.gif","../assets/spacecommander.gif":"../src/assets/spacecommander.gif","../assets/spaceport.gif":"../src/assets/spaceport.gif","../assets/stacking_houses_on_a_windy_day.gif":"../src/assets/stacking_houses_on_a_windy_day.gif","../assets/streets.gif":"../src/assets/streets.gif","../assets/sushi.gif":"../src/assets/sushi.gif","../assets/swamp.gif":"../src/assets/swamp.gif","../assets/swirling.gif":"../src/assets/swirling.gif","../assets/temple.gif":"../src/assets/temple.gif","../assets/thieves.gif":"../src/assets/thieves.gif","../assets/tower.gif":"../src/assets/tower.gif","../assets/town.gif":"../src/assets/town.gif","../assets/train.gif":"../src/assets/train.gif","../assets/train_city.gif":"../src/assets/train_city.gif","../assets/troll_cave.gif":"../src/assets/troll_cave.gif","../assets/tv.gif":"../src/assets/tv.gif","../assets/underwater.gif":"../src/assets/underwater.gif","../assets/virtuaverse.gif":"../src/assets/virtuaverse.gif","../assets/wild_boy.gif":"../src/assets/wild_boy.gif","../assets/windyday.gif":"../src/assets/windyday.gif","../assets/youngatnight.gif":"../src/assets/youngatnight.gif","../assets/zombies.gif":"../src/assets/zombies.gif","./data":"../src/data/data.js"}],"../src/app.js":[function(require,module,exports) {
"use strict";

require("./scss/app.scss");

var _quotes = _interopRequireDefault(require("./services/quotes"));

var _google = _interopRequireDefault(require("./services/google"));

var utils = _interopRequireWildcard(require("./utils"));

var _data = _interopRequireDefault(require("./data"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// ========================================================================================
// PLAYER VAR FOR YOUTUBE API IFRAME
// ========================================================================================
var player = null;
var songs_count; // ========================================================================================
// ALL NECESSARY NODE ELEMENTS
// ========================================================================================
// For root

var root = utils.get_by_id("main"); // For loader

var loader = utils.query(".loader"); // For select change current playlist

var current_playlist = utils.get_by_id("playlist__id"); // For quote

var quote_display = utils.get_by_id("quote"); // For controls

var control_left = utils.query(".buttons-wrapper.left");
var control_right = utils.query(".buttons-wrapper.right");
var control_play = utils.query(".buttons-wrapper.play");
var control_play_icon = utils.query(".button-play");
var control_vol = utils.get_by_id("button-vol-input"); // For current song external link

var current_song_button = utils.get_by_id("current-song"); // For timer

var timer_display = utils.get_by_id("timer"); // For volume

var vol_level_key = "app__vol__level";
var vol_level = Number(localStorage.getItem(vol_level_key)) || 100; // ========================================================================================
// WRAPPER FUNCTION TO GET PLAYER STATE, IF IS PLAYING OR NOT
// ========================================================================================

var yt_is_playing = function yt_is_playing() {
  return player.getPlayerState() === 1;
}; // ========================================================================================
// ADD VOLUMEN CHANGE LISTENER TO SET YOUTUBE IFRAME API
// ========================================================================================


var on_vol_input = function on_vol_input(_ref) {
  var value = _ref.target.value;
  if (!player) return;
  vol_level = value;
  player.setVolume(vol_level);
  localStorage.setItem(vol_level_key, value);
};

control_vol.value = vol_level;
control_vol.oninput = on_vol_input; // ========================================================================================
// MANAGE CLASS TO LOADER TAG TO HIDE OR SHOW FROM UI
// ========================================================================================

var render_loader_ui = function render_loader_ui() {
  if (yt_is_playing()) {
    loader.classList.remove("loading");
    loader.classList.add("static");
    return;
  }

  loader.classList.remove("static");
  loader.classList.add("loading");
}; // ========================================================================================
// RENDER GIF IN A IMG TAG AND ADD LOOP TO EVERY 5S CHANGE GIF
// ========================================================================================


var render_gifs = function render_gifs() {
  var img = utils.create_el("img");
  var current_gif = utils.random_number(0, _data.default.length - 1);

  var render_next_gif = function render_next_gif() {
    var new_gif = utils.random_number(0, _data.default.length - 1);
    current_gif = new_gif;
    var next_gif_url = _data.default[current_gif];
    img.src = next_gif_url;
    setTimeout(render_next_gif, 5000);
  };

  render_next_gif();
  root.appendChild(img);
}; // ========================================================================================
// INIT TIMER OBJECT AND ADD LISTENER TO EVERY SECOND TO UPDATE TIMER DISPLAY
// ========================================================================================


var render_timer = function render_timer() {
  // ========================================================================================
  // OBJECT TO MANAGER TIME, USED BY RENDER_TIMER() FUNCTION
  // ========================================================================================
  var timer = {
    current_time: null,
    init: function init(on_update_timer) {
      this.on_update_timer = on_update_timer;
      this.update_timer();
    },
    update_timer: function update_timer() {
      var _this = this;

      var date = new Date();
      var hours = utils.format_number(date.getHours());
      var sec = utils.format_number(date.getSeconds());
      var min = utils.format_number(date.getMinutes());
      this.current_time = utils.format_hour(hours, min, sec);
      this.on_update_timer(this);
      setTimeout(function () {
        return _this.update_timer();
      }, 1000);
    }
  };

  var on_update_timer = function on_update_timer(_ref2) {
    var current_time = _ref2.current_time;
    return timer_display.textContent = current_time;
  };

  timer.init(on_update_timer);
}; // ========================================================================================
// GET A RANDOM QUOTE FROM OVER 1000 API QUOTES
// ========================================================================================


var render_quote = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var all_quotes, current_quote;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _quotes.default.get_quotes();

          case 2:
            all_quotes = _context.sent;
            current_quote = all_quotes[utils.random_number(0, _data.default.length - 1)].text;
            quote_display.textContent = current_quote;

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function render_quote() {
    return _ref3.apply(this, arguments);
  };
}(); // ========================================================================================
// ADD FUNCIONALITY TO PLAYER : LEFT TO PLAY PREVIOUS SONG, AND RIGHT TO PLAY NEXT SONG
// ========================================================================================


var render_player_ui = function render_player_ui() {
  var is_playing = yt_is_playing();
  control_play_icon.classList.add(is_playing ? "playing" : "paused");
  control_play_icon.classList.remove(is_playing ? "paused" : "playing");
};

var toggle_player_state = function toggle_player_state() {
  if (!player) return;
  var is_playing = player.getPlayerState() === 1;
  is_playing ? player.pauseVideo() : player.playVideo();
};

var play_random_song = function play_random_song() {
  if (!player || !songs_count) return;
  player.loadPlaylist({
    list: current_playlist.value,
    listType: "playlist",
    index: utils.random_number(0, songs_count - 1),
    startSeconds: 0,
    suggestedQuality: "small"
  });
};

var render_controls = function render_controls() {
  control_left.onclick = function () {
    return player && player.previousVideo();
  };

  control_right.onclick = function () {
    return player && player.nextVideo();
  };

  control_play.onclick = function () {
    return toggle_player_state();
  };

  control_play.ondblclick = function () {
    return player && play_random_song();
  };

  current_playlist.onchange = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return reinitialize_player();

          case 2:
            return _context2.abrupt("return", _context2.sent);

          case 3:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
}; // ========================================================================================
// WRAPPER FUNCTION TO RENDER ALL MAIN UI COMPONENTS
// ========================================================================================


var render_components = function render_components() {
  render_timer();
  render_quote();
  render_controls();
}; // ========================================================================================
// FUNCTION TO INIT PLAYER FUNCTIONALITY USING YOUTUBE IFRAME API
// ========================================================================================


var init_player = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
    var on_player_ready, on_player_state_change;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return _google.default.get_playlist_count(current_playlist.value);

          case 2:
            songs_count = _context3.sent;

            on_player_ready = function on_player_ready(e) {
              e.target.loadPlaylist({
                list: current_playlist.value,
                listType: "playlist",
                index: utils.random_number(0, songs_count - 1),
                startSeconds: 0,
                suggestedQuality: "small"
              });
            };

            on_player_state_change = function on_player_state_change(e) {
              // To set the current song/video URL in external link "current song"
              current_song_button.setAttribute("href", e.target.playerInfo.videoUrl);
              render_loader_ui();
              render_player_ui();
              player.setVolume(vol_level);
            };

            player = new YT.Player("player", {
              height: "300",
              width: "300",
              playerVars: {
                controls: "0",
                autoplay: "1"
              },
              events: {
                onReady: on_player_ready,
                onStateChange: on_player_state_change
              }
            });

          case 6:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function init_player() {
    return _ref5.apply(this, arguments);
  };
}(); // ========================================================================================
// FUNCTION TO REINITIALIZE PLAYER WITH OTHER PLAYLIST
// ========================================================================================


var reinitialize_player = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            if (player) {
              _context4.next = 2;
              break;
            }

            return _context4.abrupt("return");

          case 2:
            player.destroy();
            _context4.next = 5;
            return init_player();

          case 5:
            return _context4.abrupt("return", _context4.sent);

          case 6:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function reinitialize_player() {
    return _ref6.apply(this, arguments);
  };
}(); // ========================================================================================
// LOADS COMPONENTS ASYNCHRONALLY WHEN WINDOW IS LOADED
// ========================================================================================


var init = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return render_gifs();

          case 2:
            _context5.next = 4;
            return render_components();

          case 4:
            _context5.next = 6;
            return init_player();

          case 6:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function init() {
    return _ref7.apply(this, arguments);
  };
}();

window.onload = init;
},{"./scss/app.scss":"../src/scss/app.scss","./services/quotes":"../src/services/quotes/index.js","./services/google":"../src/services/google/index.js","./utils":"../src/utils/index.js","./data":"../src/data/index.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "53231" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","../src/app.js"], null)
//# sourceMappingURL=/app.581aa3f0.js.map