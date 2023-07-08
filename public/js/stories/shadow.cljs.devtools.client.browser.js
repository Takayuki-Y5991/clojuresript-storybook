var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./clojure.string.js");
require("./shadow.json.js");
require("./shadow.cljs.devtools.client.env.js");
require("./shadow.cljs.devtools.client.console.js");
require("./shadow.cljs.devtools.client.hud.js");
require("./shadow.cljs.devtools.client.websocket.js");
require("./shadow.cljs.devtools.client.shared.js");
require("./shadow.remote.runtime.api.js");
require("./shadow.remote.runtime.shared.js");
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

$CLJS.SHADOW_ENV.setLoaded("shadow.cljs.devtools.client.browser.js");

goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4870__auto__ = [];
var len__4864__auto___35965 = arguments.length;
var i__4865__auto___35966 = (0);
while(true){
if((i__4865__auto___35966 < len__4864__auto___35965)){
args__4870__auto__.push((arguments[i__4865__auto___35966]));

var G__35967 = (i__4865__auto___35966 + (1));
i__4865__auto___35966 = G__35967;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq35841){
var G__35842 = cljs.core.first(seq35841);
var seq35841__$1 = cljs.core.next(seq35841);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35842,seq35841__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__35845 = cljs.core.seq(sources);
var chunk__35846 = null;
var count__35847 = (0);
var i__35848 = (0);
while(true){
if((i__35848 < count__35847)){
var map__35853 = chunk__35846.cljs$core$IIndexed$_nth$arity$2(null,i__35848);
var map__35853__$1 = cljs.core.__destructure_map(map__35853);
var src = map__35853__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35853__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35853__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35853__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35853__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e35854){var e_35968 = e35854;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_35968);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_35968.message)].join('')));
}

var G__35969 = seq__35845;
var G__35970 = chunk__35846;
var G__35971 = count__35847;
var G__35972 = (i__35848 + (1));
seq__35845 = G__35969;
chunk__35846 = G__35970;
count__35847 = G__35971;
i__35848 = G__35972;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__35845);
if(temp__5753__auto__){
var seq__35845__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35845__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__35845__$1);
var G__35973 = cljs.core.chunk_rest(seq__35845__$1);
var G__35974 = c__4679__auto__;
var G__35975 = cljs.core.count(c__4679__auto__);
var G__35976 = (0);
seq__35845 = G__35973;
chunk__35846 = G__35974;
count__35847 = G__35975;
i__35848 = G__35976;
continue;
} else {
var map__35855 = cljs.core.first(seq__35845__$1);
var map__35855__$1 = cljs.core.__destructure_map(map__35855);
var src = map__35855__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35855__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35855__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35855__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35855__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e35856){var e_35977 = e35856;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_35977);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_35977.message)].join('')));
}

var G__35978 = cljs.core.next(seq__35845__$1);
var G__35979 = null;
var G__35980 = (0);
var G__35981 = (0);
seq__35845 = G__35978;
chunk__35846 = G__35979;
count__35847 = G__35980;
i__35848 = G__35981;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__35857 = cljs.core.seq(js_requires);
var chunk__35858 = null;
var count__35859 = (0);
var i__35860 = (0);
while(true){
if((i__35860 < count__35859)){
var js_ns = chunk__35858.cljs$core$IIndexed$_nth$arity$2(null,i__35860);
var require_str_35982 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_35982);


var G__35983 = seq__35857;
var G__35984 = chunk__35858;
var G__35985 = count__35859;
var G__35986 = (i__35860 + (1));
seq__35857 = G__35983;
chunk__35858 = G__35984;
count__35859 = G__35985;
i__35860 = G__35986;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__35857);
if(temp__5753__auto__){
var seq__35857__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35857__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__35857__$1);
var G__35987 = cljs.core.chunk_rest(seq__35857__$1);
var G__35988 = c__4679__auto__;
var G__35989 = cljs.core.count(c__4679__auto__);
var G__35990 = (0);
seq__35857 = G__35987;
chunk__35858 = G__35988;
count__35859 = G__35989;
i__35860 = G__35990;
continue;
} else {
var js_ns = cljs.core.first(seq__35857__$1);
var require_str_35991 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_35991);


var G__35992 = cljs.core.next(seq__35857__$1);
var G__35993 = null;
var G__35994 = (0);
var G__35995 = (0);
seq__35857 = G__35992;
chunk__35858 = G__35993;
count__35859 = G__35994;
i__35860 = G__35995;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__35862){
var map__35863 = p__35862;
var map__35863__$1 = cljs.core.__destructure_map(map__35863);
var msg = map__35863__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35863__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35863__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4652__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35864(s__35865){
return (new cljs.core.LazySeq(null,(function (){
var s__35865__$1 = s__35865;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__35865__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var map__35870 = cljs.core.first(xs__6308__auto__);
var map__35870__$1 = cljs.core.__destructure_map(map__35870);
var src = map__35870__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35870__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35870__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4648__auto__ = ((function (s__35865__$1,map__35870,map__35870__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__35863,map__35863__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35864_$_iter__35866(s__35867){
return (new cljs.core.LazySeq(null,((function (s__35865__$1,map__35870,map__35870__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__35863,map__35863__$1,msg,info,reload_info){
return (function (){
var s__35867__$1 = s__35867;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__35867__$1);
if(temp__5753__auto____$1){
var s__35867__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__35867__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__35867__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__35869 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__35868 = (0);
while(true){
if((i__35868 < size__4651__auto__)){
var warning = cljs.core._nth(c__4650__auto__,i__35868);
cljs.core.chunk_append(b__35869,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__35996 = (i__35868 + (1));
i__35868 = G__35996;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35869),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35864_$_iter__35866(cljs.core.chunk_rest(s__35867__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35869),null);
}
} else {
var warning = cljs.core.first(s__35867__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35864_$_iter__35866(cljs.core.rest(s__35867__$2)));
}
} else {
return null;
}
break;
}
});})(s__35865__$1,map__35870,map__35870__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__35863,map__35863__$1,msg,info,reload_info))
,null,null));
});})(s__35865__$1,map__35870,map__35870__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__35863,map__35863__$1,msg,info,reload_info))
;
var fs__4649__auto__ = cljs.core.seq(iterys__4648__auto__(warnings));
if(fs__4649__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4649__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35864(cljs.core.rest(s__35865__$1)));
} else {
var G__35997 = cljs.core.rest(s__35865__$1);
s__35865__$1 = G__35997;
continue;
}
} else {
var G__35998 = cljs.core.rest(s__35865__$1);
s__35865__$1 = G__35998;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__35871_35999 = cljs.core.seq(warnings);
var chunk__35872_36000 = null;
var count__35873_36001 = (0);
var i__35874_36002 = (0);
while(true){
if((i__35874_36002 < count__35873_36001)){
var map__35877_36003 = chunk__35872_36000.cljs$core$IIndexed$_nth$arity$2(null,i__35874_36002);
var map__35877_36004__$1 = cljs.core.__destructure_map(map__35877_36003);
var w_36005 = map__35877_36004__$1;
var msg_36006__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35877_36004__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_36007 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35877_36004__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_36008 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35877_36004__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_36009 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35877_36004__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_36009)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_36007),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_36008),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_36006__$1)].join(''));


var G__36010 = seq__35871_35999;
var G__36011 = chunk__35872_36000;
var G__36012 = count__35873_36001;
var G__36013 = (i__35874_36002 + (1));
seq__35871_35999 = G__36010;
chunk__35872_36000 = G__36011;
count__35873_36001 = G__36012;
i__35874_36002 = G__36013;
continue;
} else {
var temp__5753__auto___36014 = cljs.core.seq(seq__35871_35999);
if(temp__5753__auto___36014){
var seq__35871_36015__$1 = temp__5753__auto___36014;
if(cljs.core.chunked_seq_QMARK_(seq__35871_36015__$1)){
var c__4679__auto___36016 = cljs.core.chunk_first(seq__35871_36015__$1);
var G__36017 = cljs.core.chunk_rest(seq__35871_36015__$1);
var G__36018 = c__4679__auto___36016;
var G__36019 = cljs.core.count(c__4679__auto___36016);
var G__36020 = (0);
seq__35871_35999 = G__36017;
chunk__35872_36000 = G__36018;
count__35873_36001 = G__36019;
i__35874_36002 = G__36020;
continue;
} else {
var map__35878_36021 = cljs.core.first(seq__35871_36015__$1);
var map__35878_36022__$1 = cljs.core.__destructure_map(map__35878_36021);
var w_36023 = map__35878_36022__$1;
var msg_36024__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35878_36022__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_36025 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35878_36022__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_36026 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35878_36022__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_36027 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35878_36022__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_36027)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_36025),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_36026),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_36024__$1)].join(''));


var G__36028 = cljs.core.next(seq__35871_36015__$1);
var G__36029 = null;
var G__36030 = (0);
var G__36031 = (0);
seq__35871_35999 = G__36028;
chunk__35872_36000 = G__36029;
count__35873_36001 = G__36030;
i__35874_36002 = G__36031;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__35861_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__35861_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__4251__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__4251__auto__){
var and__4251__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__4251__auto____$1){
return new$;
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__35879){
var map__35880 = p__35879;
var map__35880__$1 = cljs.core.__destructure_map(map__35880);
var msg = map__35880__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35880__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__35881 = cljs.core.seq(updates);
var chunk__35883 = null;
var count__35884 = (0);
var i__35885 = (0);
while(true){
if((i__35885 < count__35884)){
var path = chunk__35883.cljs$core$IIndexed$_nth$arity$2(null,i__35885);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__35915_36032 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__35919_36033 = null;
var count__35920_36034 = (0);
var i__35921_36035 = (0);
while(true){
if((i__35921_36035 < count__35920_36034)){
var node_36036 = chunk__35919_36033.cljs$core$IIndexed$_nth$arity$2(null,i__35921_36035);
if(cljs.core.not(node_36036.shadow$old)){
var path_match_36037 = shadow.cljs.devtools.client.browser.match_paths(node_36036.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36037)){
var new_link_36038 = (function (){var G__35927 = node_36036.cloneNode(true);
G__35927.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36037),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35927;
})();
(node_36036.shadow$old = true);

(new_link_36038.onload = ((function (seq__35915_36032,chunk__35919_36033,count__35920_36034,i__35921_36035,seq__35881,chunk__35883,count__35884,i__35885,new_link_36038,path_match_36037,node_36036,path,map__35880,map__35880__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_36036);
});})(seq__35915_36032,chunk__35919_36033,count__35920_36034,i__35921_36035,seq__35881,chunk__35883,count__35884,i__35885,new_link_36038,path_match_36037,node_36036,path,map__35880,map__35880__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36037], 0));

goog.dom.insertSiblingAfter(new_link_36038,node_36036);


var G__36039 = seq__35915_36032;
var G__36040 = chunk__35919_36033;
var G__36041 = count__35920_36034;
var G__36042 = (i__35921_36035 + (1));
seq__35915_36032 = G__36039;
chunk__35919_36033 = G__36040;
count__35920_36034 = G__36041;
i__35921_36035 = G__36042;
continue;
} else {
var G__36043 = seq__35915_36032;
var G__36044 = chunk__35919_36033;
var G__36045 = count__35920_36034;
var G__36046 = (i__35921_36035 + (1));
seq__35915_36032 = G__36043;
chunk__35919_36033 = G__36044;
count__35920_36034 = G__36045;
i__35921_36035 = G__36046;
continue;
}
} else {
var G__36047 = seq__35915_36032;
var G__36048 = chunk__35919_36033;
var G__36049 = count__35920_36034;
var G__36050 = (i__35921_36035 + (1));
seq__35915_36032 = G__36047;
chunk__35919_36033 = G__36048;
count__35920_36034 = G__36049;
i__35921_36035 = G__36050;
continue;
}
} else {
var temp__5753__auto___36051 = cljs.core.seq(seq__35915_36032);
if(temp__5753__auto___36051){
var seq__35915_36052__$1 = temp__5753__auto___36051;
if(cljs.core.chunked_seq_QMARK_(seq__35915_36052__$1)){
var c__4679__auto___36053 = cljs.core.chunk_first(seq__35915_36052__$1);
var G__36054 = cljs.core.chunk_rest(seq__35915_36052__$1);
var G__36055 = c__4679__auto___36053;
var G__36056 = cljs.core.count(c__4679__auto___36053);
var G__36057 = (0);
seq__35915_36032 = G__36054;
chunk__35919_36033 = G__36055;
count__35920_36034 = G__36056;
i__35921_36035 = G__36057;
continue;
} else {
var node_36058 = cljs.core.first(seq__35915_36052__$1);
if(cljs.core.not(node_36058.shadow$old)){
var path_match_36059 = shadow.cljs.devtools.client.browser.match_paths(node_36058.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36059)){
var new_link_36060 = (function (){var G__35928 = node_36058.cloneNode(true);
G__35928.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36059),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35928;
})();
(node_36058.shadow$old = true);

(new_link_36060.onload = ((function (seq__35915_36032,chunk__35919_36033,count__35920_36034,i__35921_36035,seq__35881,chunk__35883,count__35884,i__35885,new_link_36060,path_match_36059,node_36058,seq__35915_36052__$1,temp__5753__auto___36051,path,map__35880,map__35880__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_36058);
});})(seq__35915_36032,chunk__35919_36033,count__35920_36034,i__35921_36035,seq__35881,chunk__35883,count__35884,i__35885,new_link_36060,path_match_36059,node_36058,seq__35915_36052__$1,temp__5753__auto___36051,path,map__35880,map__35880__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36059], 0));

goog.dom.insertSiblingAfter(new_link_36060,node_36058);


var G__36061 = cljs.core.next(seq__35915_36052__$1);
var G__36062 = null;
var G__36063 = (0);
var G__36064 = (0);
seq__35915_36032 = G__36061;
chunk__35919_36033 = G__36062;
count__35920_36034 = G__36063;
i__35921_36035 = G__36064;
continue;
} else {
var G__36065 = cljs.core.next(seq__35915_36052__$1);
var G__36066 = null;
var G__36067 = (0);
var G__36068 = (0);
seq__35915_36032 = G__36065;
chunk__35919_36033 = G__36066;
count__35920_36034 = G__36067;
i__35921_36035 = G__36068;
continue;
}
} else {
var G__36069 = cljs.core.next(seq__35915_36052__$1);
var G__36070 = null;
var G__36071 = (0);
var G__36072 = (0);
seq__35915_36032 = G__36069;
chunk__35919_36033 = G__36070;
count__35920_36034 = G__36071;
i__35921_36035 = G__36072;
continue;
}
}
} else {
}
}
break;
}


var G__36073 = seq__35881;
var G__36074 = chunk__35883;
var G__36075 = count__35884;
var G__36076 = (i__35885 + (1));
seq__35881 = G__36073;
chunk__35883 = G__36074;
count__35884 = G__36075;
i__35885 = G__36076;
continue;
} else {
var G__36077 = seq__35881;
var G__36078 = chunk__35883;
var G__36079 = count__35884;
var G__36080 = (i__35885 + (1));
seq__35881 = G__36077;
chunk__35883 = G__36078;
count__35884 = G__36079;
i__35885 = G__36080;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__35881);
if(temp__5753__auto__){
var seq__35881__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35881__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__35881__$1);
var G__36081 = cljs.core.chunk_rest(seq__35881__$1);
var G__36082 = c__4679__auto__;
var G__36083 = cljs.core.count(c__4679__auto__);
var G__36084 = (0);
seq__35881 = G__36081;
chunk__35883 = G__36082;
count__35884 = G__36083;
i__35885 = G__36084;
continue;
} else {
var path = cljs.core.first(seq__35881__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__35929_36085 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__35933_36086 = null;
var count__35934_36087 = (0);
var i__35935_36088 = (0);
while(true){
if((i__35935_36088 < count__35934_36087)){
var node_36089 = chunk__35933_36086.cljs$core$IIndexed$_nth$arity$2(null,i__35935_36088);
if(cljs.core.not(node_36089.shadow$old)){
var path_match_36090 = shadow.cljs.devtools.client.browser.match_paths(node_36089.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36090)){
var new_link_36091 = (function (){var G__35941 = node_36089.cloneNode(true);
G__35941.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36090),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35941;
})();
(node_36089.shadow$old = true);

(new_link_36091.onload = ((function (seq__35929_36085,chunk__35933_36086,count__35934_36087,i__35935_36088,seq__35881,chunk__35883,count__35884,i__35885,new_link_36091,path_match_36090,node_36089,path,seq__35881__$1,temp__5753__auto__,map__35880,map__35880__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_36089);
});})(seq__35929_36085,chunk__35933_36086,count__35934_36087,i__35935_36088,seq__35881,chunk__35883,count__35884,i__35885,new_link_36091,path_match_36090,node_36089,path,seq__35881__$1,temp__5753__auto__,map__35880,map__35880__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36090], 0));

goog.dom.insertSiblingAfter(new_link_36091,node_36089);


var G__36092 = seq__35929_36085;
var G__36093 = chunk__35933_36086;
var G__36094 = count__35934_36087;
var G__36095 = (i__35935_36088 + (1));
seq__35929_36085 = G__36092;
chunk__35933_36086 = G__36093;
count__35934_36087 = G__36094;
i__35935_36088 = G__36095;
continue;
} else {
var G__36096 = seq__35929_36085;
var G__36097 = chunk__35933_36086;
var G__36098 = count__35934_36087;
var G__36099 = (i__35935_36088 + (1));
seq__35929_36085 = G__36096;
chunk__35933_36086 = G__36097;
count__35934_36087 = G__36098;
i__35935_36088 = G__36099;
continue;
}
} else {
var G__36100 = seq__35929_36085;
var G__36101 = chunk__35933_36086;
var G__36102 = count__35934_36087;
var G__36103 = (i__35935_36088 + (1));
seq__35929_36085 = G__36100;
chunk__35933_36086 = G__36101;
count__35934_36087 = G__36102;
i__35935_36088 = G__36103;
continue;
}
} else {
var temp__5753__auto___36104__$1 = cljs.core.seq(seq__35929_36085);
if(temp__5753__auto___36104__$1){
var seq__35929_36105__$1 = temp__5753__auto___36104__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35929_36105__$1)){
var c__4679__auto___36106 = cljs.core.chunk_first(seq__35929_36105__$1);
var G__36107 = cljs.core.chunk_rest(seq__35929_36105__$1);
var G__36108 = c__4679__auto___36106;
var G__36109 = cljs.core.count(c__4679__auto___36106);
var G__36110 = (0);
seq__35929_36085 = G__36107;
chunk__35933_36086 = G__36108;
count__35934_36087 = G__36109;
i__35935_36088 = G__36110;
continue;
} else {
var node_36111 = cljs.core.first(seq__35929_36105__$1);
if(cljs.core.not(node_36111.shadow$old)){
var path_match_36112 = shadow.cljs.devtools.client.browser.match_paths(node_36111.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36112)){
var new_link_36113 = (function (){var G__35942 = node_36111.cloneNode(true);
G__35942.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36112),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35942;
})();
(node_36111.shadow$old = true);

(new_link_36113.onload = ((function (seq__35929_36085,chunk__35933_36086,count__35934_36087,i__35935_36088,seq__35881,chunk__35883,count__35884,i__35885,new_link_36113,path_match_36112,node_36111,seq__35929_36105__$1,temp__5753__auto___36104__$1,path,seq__35881__$1,temp__5753__auto__,map__35880,map__35880__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_36111);
});})(seq__35929_36085,chunk__35933_36086,count__35934_36087,i__35935_36088,seq__35881,chunk__35883,count__35884,i__35885,new_link_36113,path_match_36112,node_36111,seq__35929_36105__$1,temp__5753__auto___36104__$1,path,seq__35881__$1,temp__5753__auto__,map__35880,map__35880__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36112], 0));

goog.dom.insertSiblingAfter(new_link_36113,node_36111);


var G__36114 = cljs.core.next(seq__35929_36105__$1);
var G__36115 = null;
var G__36116 = (0);
var G__36117 = (0);
seq__35929_36085 = G__36114;
chunk__35933_36086 = G__36115;
count__35934_36087 = G__36116;
i__35935_36088 = G__36117;
continue;
} else {
var G__36118 = cljs.core.next(seq__35929_36105__$1);
var G__36119 = null;
var G__36120 = (0);
var G__36121 = (0);
seq__35929_36085 = G__36118;
chunk__35933_36086 = G__36119;
count__35934_36087 = G__36120;
i__35935_36088 = G__36121;
continue;
}
} else {
var G__36122 = cljs.core.next(seq__35929_36105__$1);
var G__36123 = null;
var G__36124 = (0);
var G__36125 = (0);
seq__35929_36085 = G__36122;
chunk__35933_36086 = G__36123;
count__35934_36087 = G__36124;
i__35935_36088 = G__36125;
continue;
}
}
} else {
}
}
break;
}


var G__36126 = cljs.core.next(seq__35881__$1);
var G__36127 = null;
var G__36128 = (0);
var G__36129 = (0);
seq__35881 = G__36126;
chunk__35883 = G__36127;
count__35884 = G__36128;
i__35885 = G__36129;
continue;
} else {
var G__36130 = cljs.core.next(seq__35881__$1);
var G__36131 = null;
var G__36132 = (0);
var G__36133 = (0);
seq__35881 = G__36130;
chunk__35883 = G__36131;
count__35884 = G__36132;
i__35885 = G__36133;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__35943){
var map__35944 = p__35943;
var map__35944__$1 = cljs.core.__destructure_map(map__35944);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35944__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__35945){
var map__35946 = p__35945;
var map__35946__$1 = cljs.core.__destructure_map(map__35946);
var _ = map__35946__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35946__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__35947,done,error){
var map__35948 = p__35947;
var map__35948__$1 = cljs.core.__destructure_map(map__35948);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35948__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__35949,done,error){
var map__35950 = p__35949;
var map__35950__$1 = cljs.core.__destructure_map(map__35950);
var msg = map__35950__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35950__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35950__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35950__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__35951){
var map__35952 = p__35951;
var map__35952__$1 = cljs.core.__destructure_map(map__35952);
var src = map__35952__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35952__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4251__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4251__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__35953 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__35953) : done.call(null,G__35953));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__35954){
var map__35955 = p__35954;
var map__35955__$1 = cljs.core.__destructure_map(map__35955);
var msg__$1 = map__35955__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35955__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e35956){var ex = e35956;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__35957){
var map__35958 = p__35957;
var map__35958__$1 = cljs.core.__destructure_map(map__35958);
var env = map__35958__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35958__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__35959){
var map__35960 = p__35959;
var map__35960__$1 = cljs.core.__destructure_map(map__35960);
var msg = map__35960__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35960__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__35961){
var map__35962 = p__35961;
var map__35962__$1 = cljs.core.__destructure_map(map__35962);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35962__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35962__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__35963){
var map__35964 = p__35963;
var map__35964__$1 = cljs.core.__destructure_map(map__35964);
var svc = map__35964__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35964__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}
Object.defineProperty(module.exports, "script_eval", { enumerable: false, get: function() { return shadow.cljs.devtools.client.browser.script_eval; } });
Object.defineProperty(module.exports, "global_eval", { enumerable: false, get: function() { return shadow.cljs.devtools.client.browser.global_eval; } });
Object.defineProperty(module.exports, "repl_init", { enumerable: false, get: function() { return shadow.cljs.devtools.client.browser.repl_init; } });
Object.defineProperty(module.exports, "do_js_load", { enumerable: false, get: function() { return shadow.cljs.devtools.client.browser.do_js_load; } });
Object.defineProperty(module.exports, "handle_asset_update", { enumerable: false, get: function() { return shadow.cljs.devtools.client.browser.handle_asset_update; } });
Object.defineProperty(module.exports, "page_load_uri", { enumerable: false, get: function() { return shadow.cljs.devtools.client.browser.page_load_uri; } });
Object.defineProperty(module.exports, "do_js_requires", { enumerable: false, get: function() { return shadow.cljs.devtools.client.browser.do_js_requires; } });
Object.defineProperty(module.exports, "client_info", { enumerable: false, get: function() { return shadow.cljs.devtools.client.browser.client_info; } });
Object.defineProperty(module.exports, "runtime_info", { enumerable: false, get: function() { return shadow.cljs.devtools.client.browser.runtime_info; } });
Object.defineProperty(module.exports, "match_paths", { enumerable: false, get: function() { return shadow.cljs.devtools.client.browser.match_paths; } });
Object.defineProperty(module.exports, "devtools_msg", { enumerable: false, get: function() { return shadow.cljs.devtools.client.browser.devtools_msg; } });
Object.defineProperty(module.exports, "do_js_reload", { enumerable: false, get: function() { return shadow.cljs.devtools.client.browser.do_js_reload; } });
Object.defineProperty(module.exports, "ws_was_welcome_ref", { enumerable: false, get: function() { return shadow.cljs.devtools.client.browser.ws_was_welcome_ref; } });
Object.defineProperty(module.exports, "handle_build_complete", { enumerable: false, get: function() { return shadow.cljs.devtools.client.browser.handle_build_complete; } });
//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
