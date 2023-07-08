var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./clojure.datafy.js");
require("./cljs.pprint.js");
require("./shadow.remote.runtime.api.js");
require("./shadow.remote.runtime.writer.js");
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

$CLJS.SHADOW_ENV.setLoaded("shadow.remote.runtime.shared.js");

goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
return shadow.remote.runtime.api.relay_msg(runtime,msg);
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__31731,res){
var map__31734 = p__31731;
var map__31734__$1 = cljs.core.__destructure_map(map__31734);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31734__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31734__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__31737 = res;
var G__31737__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31737,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__31737);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31737__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__31737__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__31743 = arguments.length;
switch (G__31743) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__31744,msg,handlers,timeout_after_ms){
var map__31745 = p__31744;
var map__31745__$1 = cljs.core.__destructure_map(map__31745);
var runtime = map__31745__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31745__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___31879 = arguments.length;
var i__4865__auto___31880 = (0);
while(true){
if((i__4865__auto___31880 < len__4864__auto___31879)){
args__4870__auto__.push((arguments[i__4865__auto___31880]));

var G__31882 = (i__4865__auto___31880 + (1));
i__4865__auto___31880 = G__31882;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__31760,ev,args){
var map__31761 = p__31760;
var map__31761__$1 = cljs.core.__destructure_map(map__31761);
var runtime = map__31761__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31761__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__31762 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__31765 = null;
var count__31766 = (0);
var i__31767 = (0);
while(true){
if((i__31767 < count__31766)){
var ext = chunk__31765.cljs$core$IIndexed$_nth$arity$2(null,i__31767);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__31887 = seq__31762;
var G__31888 = chunk__31765;
var G__31889 = count__31766;
var G__31890 = (i__31767 + (1));
seq__31762 = G__31887;
chunk__31765 = G__31888;
count__31766 = G__31889;
i__31767 = G__31890;
continue;
} else {
var G__31891 = seq__31762;
var G__31892 = chunk__31765;
var G__31893 = count__31766;
var G__31894 = (i__31767 + (1));
seq__31762 = G__31891;
chunk__31765 = G__31892;
count__31766 = G__31893;
i__31767 = G__31894;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__31762);
if(temp__5753__auto__){
var seq__31762__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31762__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__31762__$1);
var G__31896 = cljs.core.chunk_rest(seq__31762__$1);
var G__31897 = c__4679__auto__;
var G__31898 = cljs.core.count(c__4679__auto__);
var G__31899 = (0);
seq__31762 = G__31896;
chunk__31765 = G__31897;
count__31766 = G__31898;
i__31767 = G__31899;
continue;
} else {
var ext = cljs.core.first(seq__31762__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__31905 = cljs.core.next(seq__31762__$1);
var G__31906 = null;
var G__31907 = (0);
var G__31908 = (0);
seq__31762 = G__31905;
chunk__31765 = G__31906;
count__31766 = G__31907;
i__31767 = G__31908;
continue;
} else {
var G__31909 = cljs.core.next(seq__31762__$1);
var G__31910 = null;
var G__31911 = (0);
var G__31912 = (0);
seq__31762 = G__31909;
chunk__31765 = G__31910;
count__31766 = G__31911;
i__31767 = G__31912;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq31753){
var G__31754 = cljs.core.first(seq31753);
var seq31753__$1 = cljs.core.next(seq31753);
var G__31755 = cljs.core.first(seq31753__$1);
var seq31753__$2 = cljs.core.next(seq31753__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31754,G__31755,seq31753__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__31774,p__31775){
var map__31776 = p__31774;
var map__31776__$1 = cljs.core.__destructure_map(map__31776);
var runtime = map__31776__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31776__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__31777 = p__31775;
var map__31777__$1 = cljs.core.__destructure_map(map__31777);
var msg = map__31777__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31777__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__31778 = cljs.core.deref(state_ref);
var map__31778__$1 = cljs.core.__destructure_map(map__31778);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31778__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31778__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__31784){
var map__31785 = p__31784;
var map__31785__$1 = cljs.core.__destructure_map(map__31785);
var runtime = map__31785__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31785__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__4253__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__31786,msg){
var map__31787 = p__31786;
var map__31787__$1 = cljs.core.__destructure_map(map__31787);
var runtime = map__31787__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31787__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__31817,key,p__31818){
var map__31819 = p__31817;
var map__31819__$1 = cljs.core.__destructure_map(map__31819);
var state = map__31819__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31819__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__31820 = p__31818;
var map__31820__$1 = cljs.core.__destructure_map(map__31820);
var spec = map__31820__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31820__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__31827,key,spec){
var map__31828 = p__31827;
var map__31828__$1 = cljs.core.__destructure_map(map__31828);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31828__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__31829_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__31829_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__31830_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__31830_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__31831_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__31831_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__31832_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__31832_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__31833_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__31833_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__31837,key){
var map__31838 = p__31837;
var map__31838__$1 = cljs.core.__destructure_map(map__31838);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31838__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__31840,msg){
var map__31841 = p__31840;
var map__31841__$1 = cljs.core.__destructure_map(map__31841);
var runtime = map__31841__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31841__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__31844,p__31845){
var map__31846 = p__31844;
var map__31846__$1 = cljs.core.__destructure_map(map__31846);
var runtime = map__31846__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31846__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__31847 = p__31845;
var map__31847__$1 = cljs.core.__destructure_map(map__31847);
var msg = map__31847__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31847__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31847__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__31848 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__31850 = null;
var count__31851 = (0);
var i__31852 = (0);
while(true){
if((i__31852 < count__31851)){
var map__31856 = chunk__31850.cljs$core$IIndexed$_nth$arity$2(null,i__31852);
var map__31856__$1 = cljs.core.__destructure_map(map__31856);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31856__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__31977 = seq__31848;
var G__31978 = chunk__31850;
var G__31979 = count__31851;
var G__31980 = (i__31852 + (1));
seq__31848 = G__31977;
chunk__31850 = G__31978;
count__31851 = G__31979;
i__31852 = G__31980;
continue;
} else {
var G__31981 = seq__31848;
var G__31982 = chunk__31850;
var G__31983 = count__31851;
var G__31984 = (i__31852 + (1));
seq__31848 = G__31981;
chunk__31850 = G__31982;
count__31851 = G__31983;
i__31852 = G__31984;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__31848);
if(temp__5753__auto__){
var seq__31848__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31848__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__31848__$1);
var G__31986 = cljs.core.chunk_rest(seq__31848__$1);
var G__31987 = c__4679__auto__;
var G__31988 = cljs.core.count(c__4679__auto__);
var G__31989 = (0);
seq__31848 = G__31986;
chunk__31850 = G__31987;
count__31851 = G__31988;
i__31852 = G__31989;
continue;
} else {
var map__31858 = cljs.core.first(seq__31848__$1);
var map__31858__$1 = cljs.core.__destructure_map(map__31858);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31858__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__31992 = cljs.core.next(seq__31848__$1);
var G__31993 = null;
var G__31994 = (0);
var G__31995 = (0);
seq__31848 = G__31992;
chunk__31850 = G__31993;
count__31851 = G__31994;
i__31852 = G__31995;
continue;
} else {
var G__31996 = cljs.core.next(seq__31848__$1);
var G__31997 = null;
var G__31998 = (0);
var G__31999 = (0);
seq__31848 = G__31996;
chunk__31850 = G__31997;
count__31851 = G__31998;
i__31852 = G__31999;
continue;
}
}
} else {
return null;
}
}
break;
}
});
Object.defineProperty(module.exports, "request_supported_ops", { enumerable: false, get: function() { return shadow.remote.runtime.shared.request_supported_ops; } });
Object.defineProperty(module.exports, "unhandled_client_not_found", { enumerable: false, get: function() { return shadow.remote.runtime.shared.unhandled_client_not_found; } });
Object.defineProperty(module.exports, "trigger_BANG_", { enumerable: false, get: function() { return shadow.remote.runtime.shared.trigger_BANG_; } });
Object.defineProperty(module.exports, "add_defaults", { enumerable: false, get: function() { return shadow.remote.runtime.shared.add_defaults; } });
Object.defineProperty(module.exports, "reply", { enumerable: false, get: function() { return shadow.remote.runtime.shared.reply; } });
Object.defineProperty(module.exports, "add_extension_STAR_", { enumerable: false, get: function() { return shadow.remote.runtime.shared.add_extension_STAR_; } });
Object.defineProperty(module.exports, "ping", { enumerable: false, get: function() { return shadow.remote.runtime.shared.ping; } });
Object.defineProperty(module.exports, "del_extension", { enumerable: false, get: function() { return shadow.remote.runtime.shared.del_extension; } });
Object.defineProperty(module.exports, "add_extension", { enumerable: false, get: function() { return shadow.remote.runtime.shared.add_extension; } });
Object.defineProperty(module.exports, "now", { enumerable: false, get: function() { return shadow.remote.runtime.shared.now; } });
Object.defineProperty(module.exports, "welcome", { enumerable: false, get: function() { return shadow.remote.runtime.shared.welcome; } });
Object.defineProperty(module.exports, "call", { enumerable: false, get: function() { return shadow.remote.runtime.shared.call; } });
Object.defineProperty(module.exports, "unhandled_call_result", { enumerable: false, get: function() { return shadow.remote.runtime.shared.unhandled_call_result; } });
Object.defineProperty(module.exports, "process", { enumerable: false, get: function() { return shadow.remote.runtime.shared.process; } });
Object.defineProperty(module.exports, "init_state", { enumerable: false, get: function() { return shadow.remote.runtime.shared.init_state; } });
Object.defineProperty(module.exports, "unknown_op", { enumerable: false, get: function() { return shadow.remote.runtime.shared.unknown_op; } });
Object.defineProperty(module.exports, "run_on_idle", { enumerable: false, get: function() { return shadow.remote.runtime.shared.run_on_idle; } });
Object.defineProperty(module.exports, "relay_msg", { enumerable: false, get: function() { return shadow.remote.runtime.shared.relay_msg; } });
Object.defineProperty(module.exports, "unknown_relay_op", { enumerable: false, get: function() { return shadow.remote.runtime.shared.unknown_relay_op; } });
Object.defineProperty(module.exports, "get_client_id", { enumerable: false, get: function() { return shadow.remote.runtime.shared.get_client_id; } });
Object.defineProperty(module.exports, "del_extension_STAR_", { enumerable: false, get: function() { return shadow.remote.runtime.shared.del_extension_STAR_; } });
Object.defineProperty(module.exports, "reply_unknown_op", { enumerable: false, get: function() { return shadow.remote.runtime.shared.reply_unknown_op; } });
//# sourceMappingURL=shadow.remote.runtime.shared.js.map
