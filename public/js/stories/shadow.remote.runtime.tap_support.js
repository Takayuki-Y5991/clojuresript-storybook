var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./shadow.remote.runtime.api.js");
require("./shadow.remote.runtime.shared.js");
require("./shadow.remote.runtime.obj_support.js");
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

$CLJS.SHADOW_ENV.setLoaded("shadow.remote.runtime.tap_support.js");

goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__35612,p__35613){
var map__35614 = p__35612;
var map__35614__$1 = cljs.core.__destructure_map(map__35614);
var svc = map__35614__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35614__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35614__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35614__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__35615 = p__35613;
var map__35615__$1 = cljs.core.__destructure_map(map__35615);
var msg = map__35615__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35615__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35615__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35615__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__35615__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__35627,p__35628){
var map__35631 = p__35627;
var map__35631__$1 = cljs.core.__destructure_map(map__35631);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35631__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__35634 = p__35628;
var map__35634__$1 = cljs.core.__destructure_map(map__35634);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35634__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__35638,p__35639){
var map__35640 = p__35638;
var map__35640__$1 = cljs.core.__destructure_map(map__35640);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35640__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35640__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__35641 = p__35639;
var map__35641__$1 = cljs.core.__destructure_map(map__35641);
var msg = map__35641__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__35641__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__35644,tid){
var map__35645 = p__35644;
var map__35645__$1 = cljs.core.__destructure_map(map__35645);
var svc = map__35645__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35645__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__35651 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__35652 = null;
var count__35653 = (0);
var i__35654 = (0);
while(true){
if((i__35654 < count__35653)){
var vec__35661 = chunk__35652.cljs$core$IIndexed$_nth$arity$2(null,i__35654);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35661,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35661,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__35669 = seq__35651;
var G__35670 = chunk__35652;
var G__35671 = count__35653;
var G__35672 = (i__35654 + (1));
seq__35651 = G__35669;
chunk__35652 = G__35670;
count__35653 = G__35671;
i__35654 = G__35672;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__35651);
if(temp__5753__auto__){
var seq__35651__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35651__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__35651__$1);
var G__35673 = cljs.core.chunk_rest(seq__35651__$1);
var G__35674 = c__4679__auto__;
var G__35675 = cljs.core.count(c__4679__auto__);
var G__35676 = (0);
seq__35651 = G__35673;
chunk__35652 = G__35674;
count__35653 = G__35675;
i__35654 = G__35676;
continue;
} else {
var vec__35664 = cljs.core.first(seq__35651__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35664,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35664,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__35677 = cljs.core.next(seq__35651__$1);
var G__35678 = null;
var G__35679 = (0);
var G__35680 = (0);
seq__35651 = G__35677;
chunk__35652 = G__35678;
count__35653 = G__35679;
i__35654 = G__35680;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__35646_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__35646_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__35647_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__35647_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__35648_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__35648_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__35649_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__35649_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__35667){
var map__35668 = p__35667;
var map__35668__$1 = cljs.core.__destructure_map(map__35668);
var svc = map__35668__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35668__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35668__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});
Object.defineProperty(module.exports, "tap_subscribe", { enumerable: false, get: function() { return shadow.remote.runtime.tap_support.tap_subscribe; } });
Object.defineProperty(module.exports, "tap_unsubscribe", { enumerable: false, get: function() { return shadow.remote.runtime.tap_support.tap_unsubscribe; } });
Object.defineProperty(module.exports, "request_tap_history", { enumerable: false, get: function() { return shadow.remote.runtime.tap_support.request_tap_history; } });
Object.defineProperty(module.exports, "tool_disconnect", { enumerable: false, get: function() { return shadow.remote.runtime.tap_support.tool_disconnect; } });
Object.defineProperty(module.exports, "start", { enumerable: false, get: function() { return shadow.remote.runtime.tap_support.start; } });
Object.defineProperty(module.exports, "stop", { enumerable: false, get: function() { return shadow.remote.runtime.tap_support.stop; } });
//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
