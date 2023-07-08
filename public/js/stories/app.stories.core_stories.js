var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./rum.core.js");
require("./shadow.js.shim.module$$storybook$addon_actions.js");
require("./app.stories.helper.js");
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

$CLJS.SHADOW_ENV.setLoaded("app.stories.core_stories.js");

goog.provide('app.stories.core_stories');
goog.scope(function(){
  app.stories.core_stories.goog$module$goog$object = goog.module.get('goog.object');
});
app.stories.core_stories.basic = (function app$stories$core_stories$basic(props){
var G__28420 = "button";
var G__28421 = props;
var G__28422 = app.stories.core_stories.goog$module$goog$object.get(props,"children");
return (app.stories.helper.$.cljs$core$IFn$_invoke$arity$3 ? app.stories.helper.$.cljs$core$IFn$_invoke$arity$3(G__28420,G__28421,G__28422) : app.stories.helper.$.call(null,G__28420,G__28421,G__28422));
});
app.stories.core_stories.default$ = ({"title": "My Button", "component": app.stories.core_stories.basic});
app.stories.core_stories.Text = (function app$stories$core_stories$Text(){
var G__28423 = app.stories.core_stories.basic;
var G__28424 = ({"onClick": shadow.js.shim.module$$storybook$addon_actions.action("clicked")});
var G__28425 = "click";
return (app.stories.helper.$.cljs$core$IFn$_invoke$arity$3 ? app.stories.helper.$.cljs$core$IFn$_invoke$arity$3(G__28423,G__28424,G__28425) : app.stories.helper.$.call(null,G__28423,G__28424,G__28425));
});
app.stories.core_stories.Emoji = (function app$stories$core_stories$Emoji(){
var G__28426 = app.stories.core_stories.basic;
var G__28427 = ({"onClick": shadow.js.shim.module$$storybook$addon_actions.action("clicked")});
var G__28428 = (function (){var G__28429 = "span";
var G__28430 = ({"role": "img", "aria-label": "so cool"});
var G__28431 = "\uD83D\uDE00 \uD83D\uDE0E \uD83D\uDC4D \uD83D\uDCAF";
return (app.stories.helper.$.cljs$core$IFn$_invoke$arity$3 ? app.stories.helper.$.cljs$core$IFn$_invoke$arity$3(G__28429,G__28430,G__28431) : app.stories.helper.$.call(null,G__28429,G__28430,G__28431));
})();
return (app.stories.helper.$.cljs$core$IFn$_invoke$arity$3 ? app.stories.helper.$.cljs$core$IFn$_invoke$arity$3(G__28426,G__28427,G__28428) : app.stories.helper.$.call(null,G__28426,G__28427,G__28428));
});
Object.defineProperty(module.exports, "basic", { enumerable: false, get: function() { return app.stories.core_stories.basic; } });
Object.defineProperty(module.exports, "default", { enumerable: true, get: function() { return app.stories.core_stories.default$; } });
Object.defineProperty(module.exports, "Text", { enumerable: true, get: function() { return app.stories.core_stories.Text; } });
Object.defineProperty(module.exports, "Emoji", { enumerable: true, get: function() { return app.stories.core_stories.Emoji; } });
//# sourceMappingURL=app.stories.core_stories.js.map
