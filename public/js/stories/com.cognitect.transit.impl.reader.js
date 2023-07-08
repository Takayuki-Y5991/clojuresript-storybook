var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./com.cognitect.transit.impl.decoder.js");
require("./com.cognitect.transit.caching.js");
var cognitect=$CLJS.cognitect || ($CLJS.cognitect = {});
var module$shadow_js_shim_module$react=$CLJS.module$shadow_js_shim_module$react || ($CLJS.module$shadow_js_shim_module$react = {});
var clojure=$CLJS.clojure || ($CLJS.clojure = {});
var cljsjs=$CLJS.cljsjs || ($CLJS.cljsjs = {});
var sablono=$CLJS.sablono || ($CLJS.sablono = {});
var cljs=$CLJS.cljs || ($CLJS.cljs = {});
var shadow=$CLJS.shadow || ($CLJS.shadow = {});
var rum=$CLJS.rum || ($CLJS.rum = {});
var module$shadow_js_shim_module$react_dom=$CLJS.module$shadow_js_shim_module$react_dom || ($CLJS.module$shadow_js_shim_module$react_dom = {});
var goog=$CLJS.goog || ($CLJS.goog = {});
var app=$CLJS.app || ($CLJS.app = {});
var module$shadow_js_shim_module$$storybook$addon_actions=$CLJS.module$shadow_js_shim_module$$storybook$addon_actions || ($CLJS.module$shadow_js_shim_module$$storybook$addon_actions = {});
var com=$CLJS.com || ($CLJS.com = {});

$CLJS.SHADOW_ENV.setLoaded("com.cognitect.transit.impl.reader.js");

goog.provide("com.cognitect.transit.impl.reader");
goog.require("com.cognitect.transit.impl.decoder");
goog.require("com.cognitect.transit.caching");
goog.scope(function() {
  var reader = com.cognitect.transit.impl.reader, decoder = com.cognitect.transit.impl.decoder, caching = com.cognitect.transit.caching;
  reader.JSONUnmarshaller = function Transit$JSONUnmarshaller(opts) {
    this.decoder = new decoder.Decoder(opts);
  };
  reader.JSONUnmarshaller.prototype.unmarshal = function(str, cache) {
    return this.decoder.decode(JSON.parse(str), cache);
  };
  reader.Reader = function Transit$Reader(unmarshaller, options) {
    this.unmarshaller = unmarshaller;
    this.options = options || {};
    this.cache = this.options["cache"] ? this.options["cache"] : new caching.ReadCache();
  };
  reader.Reader.prototype.read = function(str) {
    var ret = this.unmarshaller.unmarshal(str, this.cache);
    this.cache.clear();
    return ret;
  };
  reader.Reader.prototype["read"] = reader.Reader.prototype.read;
});

module.exports = com.cognitect.transit.impl.reader;

//# sourceMappingURL=com.cognitect.transit.impl.reader.js.map
