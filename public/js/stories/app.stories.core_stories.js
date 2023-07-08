var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./rum.core.js");
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
var com=$CLJS.com || ($CLJS.com = {});

$CLJS.SHADOW_ENV.setLoaded("app.stories.core_stories.js");

goog.provide('app.stories.core_stories');
app.stories.core_stories.my_button = rum.core.build_defc((function (message){
return React.createElement("<>",null,(function (){var attrs28420 = message;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"h1",((cljs.core.map_QMARK_(attrs28420))?sablono.interpreter.attributes(attrs28420):null),((cljs.core.map_QMARK_(attrs28420))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs28420)], null)));
})());
}),null,"my-button");
app.stories.core_stories.default$ = rum.core.build_defc((function (){
return ({"title": "Button", "component": new cljs.core.Symbol(null,"my-button","my-button",-2111879970,null), "args": new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),"This is a message"], null)});
}),null,"default");
Object.defineProperty(module.exports, "my_button", { enumerable: false, get: function() { return app.stories.core_stories.my_button; } });
Object.defineProperty(module.exports, "default", { enumerable: true, get: function() { return app.stories.core_stories.default$; } });
//# sourceMappingURL=app.stories.core_stories.js.map
