var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./clojure.string.js");
require("./sablono.normalize.js");
require("./sablono.util.js");
require("./sablono.interpreter.js");
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

$CLJS.SHADOW_ENV.setLoaded("sablono.core.js");

goog.provide('sablono.core');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__28267__delegate = function (args){
if(cljs.core.map_QMARK_(cljs.core.first(args))){
var vec__28137 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));
var seq__28138 = cljs.core.seq(vec__28137);
var first__28139 = cljs.core.first(seq__28138);
var seq__28138__$1 = cljs.core.next(seq__28138);
var tag = first__28139;
var body = seq__28138__$1;
if(cljs.core.map_QMARK_(cljs.core.first(body))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.first(body),cljs.core.first(args)], 0))], null),cljs.core.rest(body));
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.first(args)], null),body);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__28267 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28269__i = 0, G__28269__a = new Array(arguments.length -  0);
while (G__28269__i < G__28269__a.length) {G__28269__a[G__28269__i] = arguments[G__28269__i + 0]; ++G__28269__i;}
  args = new cljs.core.IndexedSeq(G__28269__a,0,null);
} 
return G__28267__delegate.call(this,args);};
G__28267.cljs$lang$maxFixedArity = 0;
G__28267.cljs$lang$applyTo = (function (arglist__28270){
var args = cljs.core.seq(arglist__28270);
return G__28267__delegate(args);
});
G__28267.cljs$core$IFn$_invoke$arity$variadic = G__28267__delegate;
return G__28267;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__4652__auto__ = (function sablono$core$update_arglists_$_iter__28140(s__28141){
return (new cljs.core.LazySeq(null,(function (){
var s__28141__$1 = s__28141;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__28141__$1);
if(temp__5753__auto__){
var s__28141__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__28141__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__28141__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__28143 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__28142 = (0);
while(true){
if((i__28142 < size__4651__auto__)){
var args = cljs.core._nth(c__4650__auto__,i__28142);
cljs.core.chunk_append(b__28143,cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__28271 = (i__28142 + (1));
i__28142 = G__28271;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28143),sablono$core$update_arglists_$_iter__28140(cljs.core.chunk_rest(s__28141__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28143),null);
}
} else {
var args = cljs.core.first(s__28141__$2);
return cljs.core.cons(cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__28140(cljs.core.rest(s__28141__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(arglists);
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__4870__auto__ = [];
var len__4864__auto___28274 = arguments.length;
var i__4865__auto___28275 = (0);
while(true){
if((i__4865__auto___28275 < len__4864__auto___28274)){
args__4870__auto__.push((arguments[i__4865__auto___28275]));

var G__28277 = (i__4865__auto___28275 + (1));
i__4865__auto___28275 = G__28277;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__4652__auto__ = (function sablono$core$iter__28145(s__28146){
return (new cljs.core.LazySeq(null,(function (){
var s__28146__$1 = s__28146;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__28146__$1);
if(temp__5753__auto__){
var s__28146__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__28146__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__28146__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__28148 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__28147 = (0);
while(true){
if((i__28147 < size__4651__auto__)){
var style = cljs.core._nth(c__4650__auto__,i__28147);
cljs.core.chunk_append(b__28148,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0)),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__28283 = (i__28147 + (1));
i__28147 = G__28283;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28148),sablono$core$iter__28145(cljs.core.chunk_rest(s__28146__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28148),null);
}
} else {
var style = cljs.core.first(s__28146__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0)),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__28145(cljs.core.rest(s__28146__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(styles);
}));

(sablono.core.include_css.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sablono.core.include_css.cljs$lang$applyTo = (function (seq28144){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq28144));
}));

/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",({"src": src})));
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js("http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to28149 = (function sablono$core$link_to28149(var_args){
var args__4870__auto__ = [];
var len__4864__auto___28288 = arguments.length;
var i__4865__auto___28289 = (0);
while(true){
if((i__4865__auto___28289 < len__4864__auto___28288)){
args__4870__auto__.push((arguments[i__4865__auto___28289]));

var G__28290 = (i__4865__auto___28289 + (1));
i__4865__auto___28289 = G__28290;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to28149.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(sablono.core.link_to28149.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([url], 0))], null),content], null);
}));

(sablono.core.link_to28149.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.link_to28149.cljs$lang$applyTo = (function (seq28150){
var G__28151 = cljs.core.first(seq28150);
var seq28150__$1 = cljs.core.next(seq28150);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28151,seq28150__$1);
}));


sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to28149);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to28152 = (function sablono$core$mail_to28152(var_args){
var args__4870__auto__ = [];
var len__4864__auto___28291 = arguments.length;
var i__4865__auto___28292 = (0);
while(true){
if((i__4865__auto___28292 < len__4864__auto___28291)){
args__4870__auto__.push((arguments[i__4865__auto___28292]));

var G__28293 = (i__4865__auto___28292 + (1));
i__4865__auto___28292 = G__28293;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to28152.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(sablono.core.mail_to28152.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__28155){
var vec__28156 = p__28155;
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28156,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["mailto:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__4253__auto__ = content;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return e_mail;
}
})()], null);
}));

(sablono.core.mail_to28152.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.mail_to28152.cljs$lang$applyTo = (function (seq28153){
var G__28154 = cljs.core.first(seq28153);
var seq28153__$1 = cljs.core.next(seq28153);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28154,seq28153__$1);
}));


sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to28152);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list28159 = (function sablono$core$unordered_list28159(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4652__auto__ = (function sablono$core$unordered_list28159_$_iter__28160(s__28161){
return (new cljs.core.LazySeq(null,(function (){
var s__28161__$1 = s__28161;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__28161__$1);
if(temp__5753__auto__){
var s__28161__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__28161__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__28161__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__28163 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__28162 = (0);
while(true){
if((i__28162 < size__4651__auto__)){
var x = cljs.core._nth(c__4650__auto__,i__28162);
cljs.core.chunk_append(b__28163,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__28294 = (i__28162 + (1));
i__28162 = G__28294;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28163),sablono$core$unordered_list28159_$_iter__28160(cljs.core.chunk_rest(s__28161__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28163),null);
}
} else {
var x = cljs.core.first(s__28161__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list28159_$_iter__28160(cljs.core.rest(s__28161__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list28159);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list28164 = (function sablono$core$ordered_list28164(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4652__auto__ = (function sablono$core$ordered_list28164_$_iter__28165(s__28166){
return (new cljs.core.LazySeq(null,(function (){
var s__28166__$1 = s__28166;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__28166__$1);
if(temp__5753__auto__){
var s__28166__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__28166__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__28166__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__28168 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__28167 = (0);
while(true){
if((i__28167 < size__4651__auto__)){
var x = cljs.core._nth(c__4650__auto__,i__28167);
cljs.core.chunk_append(b__28168,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__28296 = (i__28167 + (1));
i__28167 = G__28296;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28168),sablono$core$ordered_list28164_$_iter__28165(cljs.core.chunk_rest(s__28166__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28168),null);
}
} else {
var x = cljs.core.first(s__28166__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list28164_$_iter__28165(cljs.core.rest(s__28166__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list28164);
/**
 * Create an image element.
 */
sablono.core.image28169 = (function sablono$core$image28169(var_args){
var G__28171 = arguments.length;
switch (G__28171) {
case 1:
return sablono.core.image28169.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image28169.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.image28169.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0))], null)], null);
}));

(sablono.core.image28169.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0)),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
}));

(sablono.core.image28169.cljs$lang$maxFixedArity = 2);


sablono.core.image = sablono.core.wrap_attrs(sablono.core.image28169);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__28172_SHARP_,p2__28173_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__28172_SHARP_),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__28173_SHARP_),"]"].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0))));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__28174_SHARP_,p2__28175_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__28174_SHARP_),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__28175_SHARP_)].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0))));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(var_args){
var G__28177 = arguments.length;
switch (G__28177) {
case 2:
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (type,name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null)], null);
}));

(sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4253__auto__ = value;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return undefined;
}
})()], null)], null);
}));

(sablono.core.input_field_STAR_.cljs$lang$maxFixedArity = 3);

/**
 * Creates a color input field.
 */
sablono.core.color_field28178 = (function sablono$core$color_field28178(var_args){
var G__28180 = arguments.length;
switch (G__28180) {
case 1:
return sablono.core.color_field28178.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field28178.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.color_field28178.cljs$core$IFn$_invoke$arity$1 = (function (name__28129__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__28129__auto__);
}));

(sablono.core.color_field28178.cljs$core$IFn$_invoke$arity$2 = (function (name__28129__auto__,value__28130__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__28129__auto__,value__28130__auto__);
}));

(sablono.core.color_field28178.cljs$lang$maxFixedArity = 2);


sablono.core.color_field = sablono.core.wrap_attrs(sablono.core.color_field28178);

/**
 * Creates a date input field.
 */
sablono.core.date_field28181 = (function sablono$core$date_field28181(var_args){
var G__28183 = arguments.length;
switch (G__28183) {
case 1:
return sablono.core.date_field28181.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field28181.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.date_field28181.cljs$core$IFn$_invoke$arity$1 = (function (name__28129__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__28129__auto__);
}));

(sablono.core.date_field28181.cljs$core$IFn$_invoke$arity$2 = (function (name__28129__auto__,value__28130__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__28129__auto__,value__28130__auto__);
}));

(sablono.core.date_field28181.cljs$lang$maxFixedArity = 2);


sablono.core.date_field = sablono.core.wrap_attrs(sablono.core.date_field28181);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field28184 = (function sablono$core$datetime_field28184(var_args){
var G__28186 = arguments.length;
switch (G__28186) {
case 1:
return sablono.core.datetime_field28184.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field28184.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_field28184.cljs$core$IFn$_invoke$arity$1 = (function (name__28129__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__28129__auto__);
}));

(sablono.core.datetime_field28184.cljs$core$IFn$_invoke$arity$2 = (function (name__28129__auto__,value__28130__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__28129__auto__,value__28130__auto__);
}));

(sablono.core.datetime_field28184.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_field = sablono.core.wrap_attrs(sablono.core.datetime_field28184);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field28187 = (function sablono$core$datetime_local_field28187(var_args){
var G__28189 = arguments.length;
switch (G__28189) {
case 1:
return sablono.core.datetime_local_field28187.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field28187.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_local_field28187.cljs$core$IFn$_invoke$arity$1 = (function (name__28129__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__28129__auto__);
}));

(sablono.core.datetime_local_field28187.cljs$core$IFn$_invoke$arity$2 = (function (name__28129__auto__,value__28130__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__28129__auto__,value__28130__auto__);
}));

(sablono.core.datetime_local_field28187.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_local_field = sablono.core.wrap_attrs(sablono.core.datetime_local_field28187);

/**
 * Creates a email input field.
 */
sablono.core.email_field28190 = (function sablono$core$email_field28190(var_args){
var G__28192 = arguments.length;
switch (G__28192) {
case 1:
return sablono.core.email_field28190.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field28190.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.email_field28190.cljs$core$IFn$_invoke$arity$1 = (function (name__28129__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__28129__auto__);
}));

(sablono.core.email_field28190.cljs$core$IFn$_invoke$arity$2 = (function (name__28129__auto__,value__28130__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__28129__auto__,value__28130__auto__);
}));

(sablono.core.email_field28190.cljs$lang$maxFixedArity = 2);


sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field28190);

/**
 * Creates a file input field.
 */
sablono.core.file_field28193 = (function sablono$core$file_field28193(var_args){
var G__28195 = arguments.length;
switch (G__28195) {
case 1:
return sablono.core.file_field28193.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field28193.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.file_field28193.cljs$core$IFn$_invoke$arity$1 = (function (name__28129__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__28129__auto__);
}));

(sablono.core.file_field28193.cljs$core$IFn$_invoke$arity$2 = (function (name__28129__auto__,value__28130__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__28129__auto__,value__28130__auto__);
}));

(sablono.core.file_field28193.cljs$lang$maxFixedArity = 2);


sablono.core.file_field = sablono.core.wrap_attrs(sablono.core.file_field28193);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field28196 = (function sablono$core$hidden_field28196(var_args){
var G__28198 = arguments.length;
switch (G__28198) {
case 1:
return sablono.core.hidden_field28196.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field28196.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.hidden_field28196.cljs$core$IFn$_invoke$arity$1 = (function (name__28129__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__28129__auto__);
}));

(sablono.core.hidden_field28196.cljs$core$IFn$_invoke$arity$2 = (function (name__28129__auto__,value__28130__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__28129__auto__,value__28130__auto__);
}));

(sablono.core.hidden_field28196.cljs$lang$maxFixedArity = 2);


sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field28196);

/**
 * Creates a month input field.
 */
sablono.core.month_field28199 = (function sablono$core$month_field28199(var_args){
var G__28201 = arguments.length;
switch (G__28201) {
case 1:
return sablono.core.month_field28199.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field28199.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.month_field28199.cljs$core$IFn$_invoke$arity$1 = (function (name__28129__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__28129__auto__);
}));

(sablono.core.month_field28199.cljs$core$IFn$_invoke$arity$2 = (function (name__28129__auto__,value__28130__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__28129__auto__,value__28130__auto__);
}));

(sablono.core.month_field28199.cljs$lang$maxFixedArity = 2);


sablono.core.month_field = sablono.core.wrap_attrs(sablono.core.month_field28199);

/**
 * Creates a number input field.
 */
sablono.core.number_field28202 = (function sablono$core$number_field28202(var_args){
var G__28204 = arguments.length;
switch (G__28204) {
case 1:
return sablono.core.number_field28202.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field28202.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.number_field28202.cljs$core$IFn$_invoke$arity$1 = (function (name__28129__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__28129__auto__);
}));

(sablono.core.number_field28202.cljs$core$IFn$_invoke$arity$2 = (function (name__28129__auto__,value__28130__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__28129__auto__,value__28130__auto__);
}));

(sablono.core.number_field28202.cljs$lang$maxFixedArity = 2);


sablono.core.number_field = sablono.core.wrap_attrs(sablono.core.number_field28202);

/**
 * Creates a password input field.
 */
sablono.core.password_field28205 = (function sablono$core$password_field28205(var_args){
var G__28207 = arguments.length;
switch (G__28207) {
case 1:
return sablono.core.password_field28205.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field28205.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.password_field28205.cljs$core$IFn$_invoke$arity$1 = (function (name__28129__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__28129__auto__);
}));

(sablono.core.password_field28205.cljs$core$IFn$_invoke$arity$2 = (function (name__28129__auto__,value__28130__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__28129__auto__,value__28130__auto__);
}));

(sablono.core.password_field28205.cljs$lang$maxFixedArity = 2);


sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field28205);

/**
 * Creates a range input field.
 */
sablono.core.range_field28208 = (function sablono$core$range_field28208(var_args){
var G__28210 = arguments.length;
switch (G__28210) {
case 1:
return sablono.core.range_field28208.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field28208.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.range_field28208.cljs$core$IFn$_invoke$arity$1 = (function (name__28129__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__28129__auto__);
}));

(sablono.core.range_field28208.cljs$core$IFn$_invoke$arity$2 = (function (name__28129__auto__,value__28130__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__28129__auto__,value__28130__auto__);
}));

(sablono.core.range_field28208.cljs$lang$maxFixedArity = 2);


sablono.core.range_field = sablono.core.wrap_attrs(sablono.core.range_field28208);

/**
 * Creates a search input field.
 */
sablono.core.search_field28211 = (function sablono$core$search_field28211(var_args){
var G__28213 = arguments.length;
switch (G__28213) {
case 1:
return sablono.core.search_field28211.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field28211.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.search_field28211.cljs$core$IFn$_invoke$arity$1 = (function (name__28129__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__28129__auto__);
}));

(sablono.core.search_field28211.cljs$core$IFn$_invoke$arity$2 = (function (name__28129__auto__,value__28130__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__28129__auto__,value__28130__auto__);
}));

(sablono.core.search_field28211.cljs$lang$maxFixedArity = 2);


sablono.core.search_field = sablono.core.wrap_attrs(sablono.core.search_field28211);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field28214 = (function sablono$core$tel_field28214(var_args){
var G__28216 = arguments.length;
switch (G__28216) {
case 1:
return sablono.core.tel_field28214.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field28214.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.tel_field28214.cljs$core$IFn$_invoke$arity$1 = (function (name__28129__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__28129__auto__);
}));

(sablono.core.tel_field28214.cljs$core$IFn$_invoke$arity$2 = (function (name__28129__auto__,value__28130__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__28129__auto__,value__28130__auto__);
}));

(sablono.core.tel_field28214.cljs$lang$maxFixedArity = 2);


sablono.core.tel_field = sablono.core.wrap_attrs(sablono.core.tel_field28214);

/**
 * Creates a text input field.
 */
sablono.core.text_field28217 = (function sablono$core$text_field28217(var_args){
var G__28219 = arguments.length;
switch (G__28219) {
case 1:
return sablono.core.text_field28217.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field28217.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_field28217.cljs$core$IFn$_invoke$arity$1 = (function (name__28129__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__28129__auto__);
}));

(sablono.core.text_field28217.cljs$core$IFn$_invoke$arity$2 = (function (name__28129__auto__,value__28130__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__28129__auto__,value__28130__auto__);
}));

(sablono.core.text_field28217.cljs$lang$maxFixedArity = 2);


sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field28217);

/**
 * Creates a time input field.
 */
sablono.core.time_field28220 = (function sablono$core$time_field28220(var_args){
var G__28222 = arguments.length;
switch (G__28222) {
case 1:
return sablono.core.time_field28220.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field28220.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.time_field28220.cljs$core$IFn$_invoke$arity$1 = (function (name__28129__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__28129__auto__);
}));

(sablono.core.time_field28220.cljs$core$IFn$_invoke$arity$2 = (function (name__28129__auto__,value__28130__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__28129__auto__,value__28130__auto__);
}));

(sablono.core.time_field28220.cljs$lang$maxFixedArity = 2);


sablono.core.time_field = sablono.core.wrap_attrs(sablono.core.time_field28220);

/**
 * Creates a url input field.
 */
sablono.core.url_field28223 = (function sablono$core$url_field28223(var_args){
var G__28225 = arguments.length;
switch (G__28225) {
case 1:
return sablono.core.url_field28223.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field28223.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.url_field28223.cljs$core$IFn$_invoke$arity$1 = (function (name__28129__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__28129__auto__);
}));

(sablono.core.url_field28223.cljs$core$IFn$_invoke$arity$2 = (function (name__28129__auto__,value__28130__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__28129__auto__,value__28130__auto__);
}));

(sablono.core.url_field28223.cljs$lang$maxFixedArity = 2);


sablono.core.url_field = sablono.core.wrap_attrs(sablono.core.url_field28223);

/**
 * Creates a week input field.
 */
sablono.core.week_field28226 = (function sablono$core$week_field28226(var_args){
var G__28228 = arguments.length;
switch (G__28228) {
case 1:
return sablono.core.week_field28226.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field28226.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.week_field28226.cljs$core$IFn$_invoke$arity$1 = (function (name__28129__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__28129__auto__);
}));

(sablono.core.week_field28226.cljs$core$IFn$_invoke$arity$2 = (function (name__28129__auto__,value__28130__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__28129__auto__,value__28130__auto__);
}));

(sablono.core.week_field28226.cljs$lang$maxFixedArity = 2);


sablono.core.week_field = sablono.core.wrap_attrs(sablono.core.week_field28226);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box28229 = (function sablono$core$check_box28229(var_args){
var G__28231 = arguments.length;
switch (G__28231) {
case 1:
return sablono.core.check_box28229.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box28229.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box28229.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.check_box28229.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null)], null);
}));

(sablono.core.check_box28229.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box28229.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box28229.cljs$lang$maxFixedArity = 3);


sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box28229);
/**
 * Creates a radio button.
 */
sablono.core.radio_button28232 = (function sablono$core$radio_button28232(var_args){
var G__28234 = arguments.length;
switch (G__28234) {
case 1:
return sablono.core.radio_button28232.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button28232.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button28232.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.radio_button28232.cljs$core$IFn$_invoke$arity$1 = (function (group){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0)))], null)], null);
}));

(sablono.core.radio_button28232.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0))),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button28232.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id([sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0)),"-",sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button28232.cljs$lang$maxFixedArity = 3);


sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button28232);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0)));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options28235 = (function sablono$core$select_options28235(coll){
var iter__4652__auto__ = (function sablono$core$select_options28235_$_iter__28236(s__28237){
return (new cljs.core.LazySeq(null,(function (){
var s__28237__$1 = s__28237;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__28237__$1);
if(temp__5753__auto__){
var s__28237__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__28237__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__28237__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__28239 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__28238 = (0);
while(true){
if((i__28238 < size__4651__auto__)){
var x = cljs.core._nth(c__4650__auto__,i__28238);
cljs.core.chunk_append(b__28239,((cljs.core.sequential_QMARK_(x))?(function (){var vec__28240 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28240,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28240,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28240,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),(sablono.core.select_options28235.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options28235.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options28235.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__28403 = (i__28238 + (1));
i__28238 = G__28403;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28239),sablono$core$select_options28235_$_iter__28236(cljs.core.chunk_rest(s__28237__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28239),null);
}
} else {
var x = cljs.core.first(s__28237__$2);
return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__28243 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28243,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28243,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28243,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),(sablono.core.select_options28235.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options28235.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options28235.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options28235_$_iter__28236(cljs.core.rest(s__28237__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(coll);
});

sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options28235);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down28246 = (function sablono$core$drop_down28246(var_args){
var G__28248 = arguments.length;
switch (G__28248) {
case 2:
return sablono.core.drop_down28246.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down28246.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.drop_down28246.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down28246.cljs$core$IFn$_invoke$arity$3(name,options,null);
}));

(sablono.core.drop_down28246.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null),sablono.core.select_options(options,selected)], null);
}));

(sablono.core.drop_down28246.cljs$lang$maxFixedArity = 3);


sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down28246);
/**
 * Creates a text area element.
 */
sablono.core.text_area28249 = (function sablono$core$text_area28249(var_args){
var G__28251 = arguments.length;
switch (G__28251) {
case 1:
return sablono.core.text_area28249.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area28249.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_area28249.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null)], null);
}));

(sablono.core.text_area28249.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4253__auto__ = value;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return undefined;
}
})()], null)], null);
}));

(sablono.core.text_area28249.cljs$lang$maxFixedArity = 2);


sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area28249);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label28252 = (function sablono$core$label28252(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id(name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs(sablono.core.label28252);
/**
 * Creates a submit button.
 */
sablono.core.submit_button28253 = (function sablono$core$submit_button28253(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button28253);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button28254 = (function sablono$core$reset_button28254(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button28254);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to28255 = (function sablono$core$form_to28255(var_args){
var args__4870__auto__ = [];
var len__4864__auto___28448 = arguments.length;
var i__4865__auto___28449 = (0);
while(true){
if((i__4865__auto___28449 < len__4864__auto___28448)){
args__4870__auto__.push((arguments[i__4865__auto___28449]));

var G__28450 = (i__4865__auto___28449 + (1));
i__4865__auto___28449 = G__28450;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to28255.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(sablono.core.form_to28255.cljs$core$IFn$_invoke$arity$variadic = (function (p__28258,body){
var vec__28259 = p__28258;
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28259,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28259,(1),null);
var method_str = clojure.string.upper_case(cljs.core.name(method));
var action_uri = sablono.util.to_uri(action);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
}));

(sablono.core.form_to28255.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.form_to28255.cljs$lang$applyTo = (function (seq28256){
var G__28257 = cljs.core.first(seq28256);
var seq28256__$1 = cljs.core.next(seq28256);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28257,seq28256__$1);
}));


sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to28255);
Object.defineProperty(module.exports, "url_field28223", { enumerable: false, get: function() { return sablono.core.url_field28223; } });
Object.defineProperty(module.exports, "mail_to28152", { enumerable: false, get: function() { return sablono.core.mail_to28152; } });
Object.defineProperty(module.exports, "reset_button28254", { enumerable: false, get: function() { return sablono.core.reset_button28254; } });
Object.defineProperty(module.exports, "ordered_list28164", { enumerable: false, get: function() { return sablono.core.ordered_list28164; } });
Object.defineProperty(module.exports, "input_field_STAR_", { enumerable: false, get: function() { return sablono.core.input_field_STAR_; } });
Object.defineProperty(module.exports, "color_field", { enumerable: false, get: function() { return sablono.core.color_field; } });
Object.defineProperty(module.exports, "month_field", { enumerable: false, get: function() { return sablono.core.month_field; } });
Object.defineProperty(module.exports, "select_options", { enumerable: false, get: function() { return sablono.core.select_options; } });
Object.defineProperty(module.exports, "include_react", { enumerable: false, get: function() { return sablono.core.include_react; } });
Object.defineProperty(module.exports, "select_options28235", { enumerable: false, get: function() { return sablono.core.select_options28235; } });
Object.defineProperty(module.exports, "hidden_field", { enumerable: false, get: function() { return sablono.core.hidden_field; } });
Object.defineProperty(module.exports, "link_to28149", { enumerable: false, get: function() { return sablono.core.link_to28149; } });
Object.defineProperty(module.exports, "datetime_local_field28187", { enumerable: false, get: function() { return sablono.core.datetime_local_field28187; } });
Object.defineProperty(module.exports, "unordered_list28159", { enumerable: false, get: function() { return sablono.core.unordered_list28159; } });
Object.defineProperty(module.exports, "check_box28229", { enumerable: false, get: function() { return sablono.core.check_box28229; } });
Object.defineProperty(module.exports, "wrap_attrs", { enumerable: false, get: function() { return sablono.core.wrap_attrs; } });
Object.defineProperty(module.exports, "tel_field28214", { enumerable: false, get: function() { return sablono.core.tel_field28214; } });
Object.defineProperty(module.exports, "number_field", { enumerable: false, get: function() { return sablono.core.number_field; } });
Object.defineProperty(module.exports, "unordered_list", { enumerable: false, get: function() { return sablono.core.unordered_list; } });
Object.defineProperty(module.exports, "date_field", { enumerable: false, get: function() { return sablono.core.date_field; } });
Object.defineProperty(module.exports, "text_area", { enumerable: false, get: function() { return sablono.core.text_area; } });
Object.defineProperty(module.exports, "week_field", { enumerable: false, get: function() { return sablono.core.week_field; } });
Object.defineProperty(module.exports, "drop_down", { enumerable: false, get: function() { return sablono.core.drop_down; } });
Object.defineProperty(module.exports, "drop_down28246", { enumerable: false, get: function() { return sablono.core.drop_down28246; } });
Object.defineProperty(module.exports, "submit_button28253", { enumerable: false, get: function() { return sablono.core.submit_button28253; } });
Object.defineProperty(module.exports, "color_field28178", { enumerable: false, get: function() { return sablono.core.color_field28178; } });
Object.defineProperty(module.exports, "make_name", { enumerable: false, get: function() { return sablono.core.make_name; } });
Object.defineProperty(module.exports, "month_field28199", { enumerable: false, get: function() { return sablono.core.month_field28199; } });
Object.defineProperty(module.exports, "url_field", { enumerable: false, get: function() { return sablono.core.url_field; } });
Object.defineProperty(module.exports, "make_id", { enumerable: false, get: function() { return sablono.core.make_id; } });
Object.defineProperty(module.exports, "form_to", { enumerable: false, get: function() { return sablono.core.form_to; } });
Object.defineProperty(module.exports, "email_field28190", { enumerable: false, get: function() { return sablono.core.email_field28190; } });
Object.defineProperty(module.exports, "radio_button", { enumerable: false, get: function() { return sablono.core.radio_button; } });
Object.defineProperty(module.exports, "email_field", { enumerable: false, get: function() { return sablono.core.email_field; } });
Object.defineProperty(module.exports, "ordered_list", { enumerable: false, get: function() { return sablono.core.ordered_list; } });
Object.defineProperty(module.exports, "search_field28211", { enumerable: false, get: function() { return sablono.core.search_field28211; } });
Object.defineProperty(module.exports, "time_field28220", { enumerable: false, get: function() { return sablono.core.time_field28220; } });
Object.defineProperty(module.exports, "hidden_field28196", { enumerable: false, get: function() { return sablono.core.hidden_field28196; } });
Object.defineProperty(module.exports, "text_field28217", { enumerable: false, get: function() { return sablono.core.text_field28217; } });
Object.defineProperty(module.exports, "hash_key", { enumerable: false, get: function() { return sablono.core.hash_key; } });
Object.defineProperty(module.exports, "number_field28202", { enumerable: false, get: function() { return sablono.core.number_field28202; } });
Object.defineProperty(module.exports, "file_field28193", { enumerable: false, get: function() { return sablono.core.file_field28193; } });
Object.defineProperty(module.exports, "week_field28226", { enumerable: false, get: function() { return sablono.core.week_field28226; } });
Object.defineProperty(module.exports, "text_field", { enumerable: false, get: function() { return sablono.core.text_field; } });
Object.defineProperty(module.exports, "reset_button", { enumerable: false, get: function() { return sablono.core.reset_button; } });
Object.defineProperty(module.exports, "file_upload", { enumerable: false, get: function() { return sablono.core.file_upload; } });
Object.defineProperty(module.exports, "include_js", { enumerable: false, get: function() { return sablono.core.include_js; } });
Object.defineProperty(module.exports, "link_to", { enumerable: false, get: function() { return sablono.core.link_to; } });
Object.defineProperty(module.exports, "password_field", { enumerable: false, get: function() { return sablono.core.password_field; } });
Object.defineProperty(module.exports, "include_css", { enumerable: false, get: function() { return sablono.core.include_css; } });
Object.defineProperty(module.exports, "text_area28249", { enumerable: false, get: function() { return sablono.core.text_area28249; } });
Object.defineProperty(module.exports, "update_arglists", { enumerable: false, get: function() { return sablono.core.update_arglists; } });
Object.defineProperty(module.exports, "datetime_field28184", { enumerable: false, get: function() { return sablono.core.datetime_field28184; } });
Object.defineProperty(module.exports, "datetime_local_field", { enumerable: false, get: function() { return sablono.core.datetime_local_field; } });
Object.defineProperty(module.exports, "datetime_field", { enumerable: false, get: function() { return sablono.core.datetime_field; } });
Object.defineProperty(module.exports, "_STAR_group_STAR_", { enumerable: false, get: function() { return sablono.core._STAR_group_STAR_; } });
Object.defineProperty(module.exports, "image28169", { enumerable: false, get: function() { return sablono.core.image28169; } });
Object.defineProperty(module.exports, "time_field", { enumerable: false, get: function() { return sablono.core.time_field; } });
Object.defineProperty(module.exports, "file_field", { enumerable: false, get: function() { return sablono.core.file_field; } });
Object.defineProperty(module.exports, "radio_button28232", { enumerable: false, get: function() { return sablono.core.radio_button28232; } });
Object.defineProperty(module.exports, "password_field28205", { enumerable: false, get: function() { return sablono.core.password_field28205; } });
Object.defineProperty(module.exports, "check_box", { enumerable: false, get: function() { return sablono.core.check_box; } });
Object.defineProperty(module.exports, "label", { enumerable: false, get: function() { return sablono.core.label; } });
Object.defineProperty(module.exports, "date_field28181", { enumerable: false, get: function() { return sablono.core.date_field28181; } });
Object.defineProperty(module.exports, "tel_field", { enumerable: false, get: function() { return sablono.core.tel_field; } });
Object.defineProperty(module.exports, "label28252", { enumerable: false, get: function() { return sablono.core.label28252; } });
Object.defineProperty(module.exports, "form_to28255", { enumerable: false, get: function() { return sablono.core.form_to28255; } });
Object.defineProperty(module.exports, "range_field28208", { enumerable: false, get: function() { return sablono.core.range_field28208; } });
Object.defineProperty(module.exports, "search_field", { enumerable: false, get: function() { return sablono.core.search_field; } });
Object.defineProperty(module.exports, "mail_to", { enumerable: false, get: function() { return sablono.core.mail_to; } });
Object.defineProperty(module.exports, "range_field", { enumerable: false, get: function() { return sablono.core.range_field; } });
Object.defineProperty(module.exports, "submit_button", { enumerable: false, get: function() { return sablono.core.submit_button; } });
Object.defineProperty(module.exports, "image", { enumerable: false, get: function() { return sablono.core.image; } });
//# sourceMappingURL=sablono.core.js.map
