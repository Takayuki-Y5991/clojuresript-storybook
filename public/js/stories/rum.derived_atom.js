var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
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

$CLJS.SHADOW_ENV.setLoaded("rum.derived_atom.js");

goog.provide('rum.derived_atom');
rum.derived_atom.derived_atom = (function rum$derived_atom$derived_atom(var_args){
var G__26379 = arguments.length;
switch (G__26379) {
case 3:
return rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$3 = (function (refs,key,f){
return rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$4(refs,key,f,cljs.core.PersistentArrayMap.EMPTY);
}));

(rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$4 = (function (refs,key,f,opts){
var map__26382 = opts;
var map__26382__$1 = cljs.core.__destructure_map(map__26382);
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26382__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var check_equals_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__26382__$1,new cljs.core.Keyword(null,"check-equals?","check-equals?",-2005755315),true);
var recalc = (function (){var G__26386 = cljs.core.count(refs);
switch (G__26386) {
case (1):
var vec__26387 = refs;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26387,(0),null);
return (function (){
var G__26390 = cljs.core.deref(a);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__26390) : f.call(null,G__26390));
});

break;
case (2):
var vec__26391 = refs;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26391,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26391,(1),null);
return (function (){
var G__26394 = cljs.core.deref(a);
var G__26395 = cljs.core.deref(b);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__26394,G__26395) : f.call(null,G__26394,G__26395));
});

break;
case (3):
var vec__26400 = refs;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26400,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26400,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26400,(2),null);
return (function (){
var G__26406 = cljs.core.deref(a);
var G__26407 = cljs.core.deref(b);
var G__26408 = cljs.core.deref(c);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__26406,G__26407,G__26408) : f.call(null,G__26406,G__26407,G__26408));
});

break;
default:
return (function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.deref,refs));
});

}
})();
var sink = (cljs.core.truth_(ref)?(function (){var G__26410 = ref;
cljs.core.reset_BANG_(G__26410,(recalc.cljs$core$IFn$_invoke$arity$0 ? recalc.cljs$core$IFn$_invoke$arity$0() : recalc.call(null)));

return G__26410;
})():cljs.core.atom.cljs$core$IFn$_invoke$arity$1((recalc.cljs$core$IFn$_invoke$arity$0 ? recalc.cljs$core$IFn$_invoke$arity$0() : recalc.call(null))));
var watch = (cljs.core.truth_(check_equals_QMARK_)?(function (_,___$1,___$2,___$3){
var new_val = (recalc.cljs$core$IFn$_invoke$arity$0 ? recalc.cljs$core$IFn$_invoke$arity$0() : recalc.call(null));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(sink),new_val)){
return cljs.core.reset_BANG_(sink,new_val);
} else {
return null;
}
}):(function (_,___$1,___$2,___$3){
return cljs.core.reset_BANG_(sink,(recalc.cljs$core$IFn$_invoke$arity$0 ? recalc.cljs$core$IFn$_invoke$arity$0() : recalc.call(null)));
}));
var seq__26411_26426 = cljs.core.seq(refs);
var chunk__26412_26427 = null;
var count__26413_26428 = (0);
var i__26414_26429 = (0);
while(true){
if((i__26414_26429 < count__26413_26428)){
var ref_26431__$1 = chunk__26412_26427.cljs$core$IIndexed$_nth$arity$2(null,i__26414_26429);
cljs.core.add_watch(ref_26431__$1,key,watch);


var G__26432 = seq__26411_26426;
var G__26433 = chunk__26412_26427;
var G__26434 = count__26413_26428;
var G__26435 = (i__26414_26429 + (1));
seq__26411_26426 = G__26432;
chunk__26412_26427 = G__26433;
count__26413_26428 = G__26434;
i__26414_26429 = G__26435;
continue;
} else {
var temp__5753__auto___26436 = cljs.core.seq(seq__26411_26426);
if(temp__5753__auto___26436){
var seq__26411_26437__$1 = temp__5753__auto___26436;
if(cljs.core.chunked_seq_QMARK_(seq__26411_26437__$1)){
var c__4679__auto___26438 = cljs.core.chunk_first(seq__26411_26437__$1);
var G__26439 = cljs.core.chunk_rest(seq__26411_26437__$1);
var G__26440 = c__4679__auto___26438;
var G__26441 = cljs.core.count(c__4679__auto___26438);
var G__26442 = (0);
seq__26411_26426 = G__26439;
chunk__26412_26427 = G__26440;
count__26413_26428 = G__26441;
i__26414_26429 = G__26442;
continue;
} else {
var ref_26443__$1 = cljs.core.first(seq__26411_26437__$1);
cljs.core.add_watch(ref_26443__$1,key,watch);


var G__26444 = cljs.core.next(seq__26411_26437__$1);
var G__26445 = null;
var G__26446 = (0);
var G__26447 = (0);
seq__26411_26426 = G__26444;
chunk__26412_26427 = G__26445;
count__26413_26428 = G__26446;
i__26414_26429 = G__26447;
continue;
}
} else {
}
}
break;
}

return sink;
}));

(rum.derived_atom.derived_atom.cljs$lang$maxFixedArity = 4);

Object.defineProperty(module.exports, "derived_atom", { enumerable: false, get: function() { return rum.derived_atom.derived_atom; } });
//# sourceMappingURL=rum.derived_atom.js.map
