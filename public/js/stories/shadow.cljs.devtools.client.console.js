var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./clojure.string.js");
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

$CLJS.SHADOW_ENV.setLoaded("shadow.cljs.devtools.client.console.js");

goog.provide('shadow.cljs.devtools.client.console');
shadow.cljs.devtools.client.console.push_all = (function shadow$cljs$devtools$client$console$push_all(arr,item){
if(cljs.core.vector_QMARK_(item)){
var seq__26238 = cljs.core.seq(item);
var chunk__26239 = null;
var count__26240 = (0);
var i__26241 = (0);
while(true){
if((i__26241 < count__26240)){
var it = chunk__26239.cljs$core$IIndexed$_nth$arity$2(null,i__26241);
arr.push(it);


var G__26338 = seq__26238;
var G__26339 = chunk__26239;
var G__26340 = count__26240;
var G__26341 = (i__26241 + (1));
seq__26238 = G__26338;
chunk__26239 = G__26339;
count__26240 = G__26340;
i__26241 = G__26341;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__26238);
if(temp__5753__auto__){
var seq__26238__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26238__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__26238__$1);
var G__26342 = cljs.core.chunk_rest(seq__26238__$1);
var G__26343 = c__4679__auto__;
var G__26344 = cljs.core.count(c__4679__auto__);
var G__26345 = (0);
seq__26238 = G__26342;
chunk__26239 = G__26343;
count__26240 = G__26344;
i__26241 = G__26345;
continue;
} else {
var it = cljs.core.first(seq__26238__$1);
arr.push(it);


var G__26346 = cljs.core.next(seq__26238__$1);
var G__26347 = null;
var G__26348 = (0);
var G__26349 = (0);
seq__26238 = G__26346;
chunk__26239 = G__26347;
count__26240 = G__26348;
i__26241 = G__26349;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return arr.push(item);
}
});
shadow.cljs.devtools.client.console.object_ref = (function shadow$cljs$devtools$client$console$object_ref(obj){
if(cljs.core.truth_(obj)){
return ["object",({"object": obj})];
} else {
return null;
}
});
shadow.cljs.devtools.client.console.map__GT_style = (function shadow$cljs$devtools$client$console$map__GT_style(m){
return ({"style": clojure.string.join.cljs$core$IFn$_invoke$arity$2("",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__26246){
var vec__26247 = p__26246;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26247,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26247,(1),null);
return [cljs.core.name(k),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v),";"].join('');
}),m))});
});
shadow.cljs.devtools.client.console.clj__GT_jsonml = (function shadow$cljs$devtools$client$console$clj__GT_jsonml(struct){
if((struct == null)){
return null;
} else {
if(cljs.core.array_QMARK_(struct)){
return struct;
} else {
if(cljs.core.vector_QMARK_(struct)){
var vec__26252 = struct;
var seq__26253 = cljs.core.seq(vec__26252);
var first__26254 = cljs.core.first(seq__26253);
var seq__26253__$1 = cljs.core.next(seq__26253);
var tag = first__26254;
var first__26254__$1 = cljs.core.first(seq__26253__$1);
var seq__26253__$2 = cljs.core.next(seq__26253__$1);
var attrs = first__26254__$1;
var children = seq__26253__$2;
var js = [cljs.core.name(tag),shadow.cljs.devtools.client.console.map__GT_style(attrs)];
var seq__26255_26367 = cljs.core.seq(children);
var chunk__26256_26368 = null;
var count__26257_26369 = (0);
var i__26258_26370 = (0);
while(true){
if((i__26258_26370 < count__26257_26369)){
var child_26371 = chunk__26256_26368.cljs$core$IIndexed$_nth$arity$2(null,i__26258_26370);
shadow.cljs.devtools.client.console.push_all(js,(shadow.cljs.devtools.client.console.clj__GT_jsonml.cljs$core$IFn$_invoke$arity$1 ? shadow.cljs.devtools.client.console.clj__GT_jsonml.cljs$core$IFn$_invoke$arity$1(child_26371) : shadow.cljs.devtools.client.console.clj__GT_jsonml.call(null,child_26371)));


var G__26372 = seq__26255_26367;
var G__26373 = chunk__26256_26368;
var G__26374 = count__26257_26369;
var G__26375 = (i__26258_26370 + (1));
seq__26255_26367 = G__26372;
chunk__26256_26368 = G__26373;
count__26257_26369 = G__26374;
i__26258_26370 = G__26375;
continue;
} else {
var temp__5753__auto___26376 = cljs.core.seq(seq__26255_26367);
if(temp__5753__auto___26376){
var seq__26255_26377__$1 = temp__5753__auto___26376;
if(cljs.core.chunked_seq_QMARK_(seq__26255_26377__$1)){
var c__4679__auto___26378 = cljs.core.chunk_first(seq__26255_26377__$1);
var G__26379 = cljs.core.chunk_rest(seq__26255_26377__$1);
var G__26380 = c__4679__auto___26378;
var G__26381 = cljs.core.count(c__4679__auto___26378);
var G__26382 = (0);
seq__26255_26367 = G__26379;
chunk__26256_26368 = G__26380;
count__26257_26369 = G__26381;
i__26258_26370 = G__26382;
continue;
} else {
var child_26384 = cljs.core.first(seq__26255_26377__$1);
shadow.cljs.devtools.client.console.push_all(js,(shadow.cljs.devtools.client.console.clj__GT_jsonml.cljs$core$IFn$_invoke$arity$1 ? shadow.cljs.devtools.client.console.clj__GT_jsonml.cljs$core$IFn$_invoke$arity$1(child_26384) : shadow.cljs.devtools.client.console.clj__GT_jsonml.call(null,child_26384)));


var G__26386 = cljs.core.next(seq__26255_26377__$1);
var G__26387 = null;
var G__26388 = (0);
var G__26389 = (0);
seq__26255_26367 = G__26386;
chunk__26256_26368 = G__26387;
count__26257_26369 = G__26388;
i__26258_26370 = G__26389;
continue;
}
} else {
}
}
break;
}

return js;
} else {
if(typeof struct === 'string'){
return struct;
} else {
if(typeof struct === 'number'){
return struct;
} else {
if(cljs.core.seq_QMARK_(struct)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.console.clj__GT_jsonml),struct);
} else {
return shadow.cljs.devtools.client.console.object_ref(struct);

}
}
}
}
}
}
});

/**
* @constructor
*/
shadow.cljs.devtools.client.console.SeqFormatter = (function (){
});
(shadow.cljs.devtools.client.console.SeqFormatter.prototype.shadow$formatter = (function (){
var self__ = this;
var this$ = this;
return true;
}));

(shadow.cljs.devtools.client.console.SeqFormatter.prototype.header = (function (obj){
var self__ = this;
var this$ = this;
if(((cljs.core.sequential_QMARK_(obj)) || (cljs.core.set_QMARK_(obj)))){
return shadow.cljs.devtools.client.console.clj__GT_jsonml(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),cljs.core.PersistentArrayMap.EMPTY,[cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.type(obj)], 0))," [count: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(obj)),"]"].join('')], null));
} else {
return null;
}
}));

(shadow.cljs.devtools.client.console.SeqFormatter.prototype.hasBody = (function (obj){
var self__ = this;
var this$ = this;
return cljs.core.boolean$(cljs.core.seq(obj));
}));

(shadow.cljs.devtools.client.console.SeqFormatter.prototype.body = (function (s){
var self__ = this;
var this$ = this;
return shadow.cljs.devtools.client.console.clj__GT_jsonml(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),(0)], null),(function (){var iter__4652__auto__ = (function shadow$cljs$devtools$client$console$iter__26270(s__26271){
return (new cljs.core.LazySeq(null,(function (){
var s__26271__$1 = s__26271;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__26271__$1);
if(temp__5753__auto__){
var s__26271__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__26271__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__26271__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__26275 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__26274 = (0);
while(true){
if((i__26274 < size__4651__auto__)){
var value = cljs.core._nth(c__4650__auto__,i__26274);
cljs.core.chunk_append(b__26275,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),cljs.core.PersistentArrayMap.EMPTY,shadow.cljs.devtools.client.console.object_ref(value)], null));

var G__26392 = (i__26274 + (1));
i__26274 = G__26392;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26275),shadow$cljs$devtools$client$console$iter__26270(cljs.core.chunk_rest(s__26271__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26275),null);
}
} else {
var value = cljs.core.first(s__26271__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),cljs.core.PersistentArrayMap.EMPTY,shadow.cljs.devtools.client.console.object_ref(value)], null),shadow$cljs$devtools$client$console$iter__26270(cljs.core.rest(s__26271__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(s);
})()], null));
}));

(shadow.cljs.devtools.client.console.SeqFormatter.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(shadow.cljs.devtools.client.console.SeqFormatter.cljs$lang$type = true);

(shadow.cljs.devtools.client.console.SeqFormatter.cljs$lang$ctorStr = "shadow.cljs.devtools.client.console/SeqFormatter");

(shadow.cljs.devtools.client.console.SeqFormatter.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"shadow.cljs.devtools.client.console/SeqFormatter");
}));

/**
 * Positional factory function for shadow.cljs.devtools.client.console/SeqFormatter.
 */
shadow.cljs.devtools.client.console.__GT_SeqFormatter = (function shadow$cljs$devtools$client$console$__GT_SeqFormatter(){
return (new shadow.cljs.devtools.client.console.SeqFormatter());
});


/**
* @constructor
*/
shadow.cljs.devtools.client.console.MapFormatter = (function (){
});
(shadow.cljs.devtools.client.console.MapFormatter.prototype.shadow$formatter = (function (){
var self__ = this;
var this$ = this;
return true;
}));

(shadow.cljs.devtools.client.console.MapFormatter.prototype.header = (function (obj){
var self__ = this;
var this$ = this;
if((((obj instanceof cljs.core.PersistentHashMap)) || ((((obj instanceof cljs.core.PersistentArrayMap)) || (cljs.core.record_QMARK_(obj)))))){
return shadow.cljs.devtools.client.console.clj__GT_jsonml(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),cljs.core.PersistentArrayMap.EMPTY,[cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.type(obj)], 0))," [count: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(obj)),"]"].join('')], null));
} else {
return null;
}
}));

(shadow.cljs.devtools.client.console.MapFormatter.prototype.hasBody = (function (obj){
var self__ = this;
var this$ = this;
return cljs.core.boolean$(cljs.core.seq(obj));
}));

(shadow.cljs.devtools.client.console.MapFormatter.prototype.body = (function (m){
var self__ = this;
var this$ = this;
return shadow.cljs.devtools.client.console.clj__GT_jsonml(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"14px"], null),(function (){var iter__4652__auto__ = (function shadow$cljs$devtools$client$console$iter__26284(s__26285){
return (new cljs.core.LazySeq(null,(function (){
var s__26285__$1 = s__26285;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__26285__$1);
if(temp__5753__auto__){
var s__26285__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__26285__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__26285__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__26287 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__26286 = (0);
while(true){
if((i__26286 < size__4651__auto__)){
var key = cljs.core._nth(c__4650__auto__,i__26286);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,key);
cljs.core.chunk_append(b__26287,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"top"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.PersistentArrayMap.EMPTY,shadow.cljs.devtools.client.console.object_ref(key)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.PersistentArrayMap.EMPTY,shadow.cljs.devtools.client.console.object_ref(value)], null)], null));

var G__26394 = (i__26286 + (1));
i__26286 = G__26394;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26287),shadow$cljs$devtools$client$console$iter__26284(cljs.core.chunk_rest(s__26285__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26287),null);
}
} else {
var key = cljs.core.first(s__26285__$2);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,key);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"top"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.PersistentArrayMap.EMPTY,shadow.cljs.devtools.client.console.object_ref(key)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.PersistentArrayMap.EMPTY,shadow.cljs.devtools.client.console.object_ref(value)], null)], null),shadow$cljs$devtools$client$console$iter__26284(cljs.core.rest(s__26285__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__((function (){var k = cljs.core.keys(m);
try{return cljs.core.sort.cljs$core$IFn$_invoke$arity$1(k);
}catch (e26293){var e = e26293;
return k;
}})());
})()], null));
}));

(shadow.cljs.devtools.client.console.MapFormatter.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(shadow.cljs.devtools.client.console.MapFormatter.cljs$lang$type = true);

(shadow.cljs.devtools.client.console.MapFormatter.cljs$lang$ctorStr = "shadow.cljs.devtools.client.console/MapFormatter");

(shadow.cljs.devtools.client.console.MapFormatter.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"shadow.cljs.devtools.client.console/MapFormatter");
}));

/**
 * Positional factory function for shadow.cljs.devtools.client.console/MapFormatter.
 */
shadow.cljs.devtools.client.console.__GT_MapFormatter = (function shadow$cljs$devtools$client$console$__GT_MapFormatter(){
return (new shadow.cljs.devtools.client.console.MapFormatter());
});

shadow.cljs.devtools.client.console.keyword_style = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"rgb(136, 19, 145)"], null);

/**
* @constructor
*/
shadow.cljs.devtools.client.console.KeywordFormatter = (function (){
});
(shadow.cljs.devtools.client.console.KeywordFormatter.prototype.shadow$formatter = (function (){
var self__ = this;
var this$ = this;
return true;
}));

(shadow.cljs.devtools.client.console.KeywordFormatter.prototype.header = (function (obj){
var self__ = this;
var this$ = this;
if((obj instanceof cljs.core.Keyword)){
return shadow.cljs.devtools.client.console.clj__GT_jsonml(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),shadow.cljs.devtools.client.console.keyword_style,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([obj], 0))], null));
} else {
return null;
}
}));

(shadow.cljs.devtools.client.console.KeywordFormatter.prototype.hasBody = (function (obj){
var self__ = this;
var this$ = this;
return false;
}));

(shadow.cljs.devtools.client.console.KeywordFormatter.prototype.body = (function (m){
var self__ = this;
var this$ = this;
return null;
}));

(shadow.cljs.devtools.client.console.KeywordFormatter.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(shadow.cljs.devtools.client.console.KeywordFormatter.cljs$lang$type = true);

(shadow.cljs.devtools.client.console.KeywordFormatter.cljs$lang$ctorStr = "shadow.cljs.devtools.client.console/KeywordFormatter");

(shadow.cljs.devtools.client.console.KeywordFormatter.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"shadow.cljs.devtools.client.console/KeywordFormatter");
}));

/**
 * Positional factory function for shadow.cljs.devtools.client.console/KeywordFormatter.
 */
shadow.cljs.devtools.client.console.__GT_KeywordFormatter = (function shadow$cljs$devtools$client$console$__GT_KeywordFormatter(){
return (new shadow.cljs.devtools.client.console.KeywordFormatter());
});


/**
* @constructor
*/
shadow.cljs.devtools.client.console.SymbolFormatter = (function (){
});
(shadow.cljs.devtools.client.console.SymbolFormatter.prototype.shadow$formatter = (function (){
var self__ = this;
var this$ = this;
return true;
}));

(shadow.cljs.devtools.client.console.SymbolFormatter.prototype.header = (function (obj){
var self__ = this;
var this$ = this;
if((obj instanceof cljs.core.Symbol)){
return shadow.cljs.devtools.client.console.clj__GT_jsonml(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),shadow.cljs.devtools.client.console.keyword_style,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([obj], 0))], null));
} else {
return null;
}
}));

(shadow.cljs.devtools.client.console.SymbolFormatter.prototype.hasBody = (function (obj){
var self__ = this;
var this$ = this;
return false;
}));

(shadow.cljs.devtools.client.console.SymbolFormatter.prototype.body = (function (m){
var self__ = this;
var this$ = this;
return null;
}));

(shadow.cljs.devtools.client.console.SymbolFormatter.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(shadow.cljs.devtools.client.console.SymbolFormatter.cljs$lang$type = true);

(shadow.cljs.devtools.client.console.SymbolFormatter.cljs$lang$ctorStr = "shadow.cljs.devtools.client.console/SymbolFormatter");

(shadow.cljs.devtools.client.console.SymbolFormatter.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"shadow.cljs.devtools.client.console/SymbolFormatter");
}));

/**
 * Positional factory function for shadow.cljs.devtools.client.console/SymbolFormatter.
 */
shadow.cljs.devtools.client.console.__GT_SymbolFormatter = (function shadow$cljs$devtools$client$console$__GT_SymbolFormatter(){
return (new shadow.cljs.devtools.client.console.SymbolFormatter());
});


/**
* @constructor
*/
shadow.cljs.devtools.client.console.DerefFormatter = (function (){
});
(shadow.cljs.devtools.client.console.DerefFormatter.prototype.shadow$formatter = (function (){
var self__ = this;
var this$ = this;
return true;
}));

(shadow.cljs.devtools.client.console.DerefFormatter.prototype.header = (function (obj){
var self__ = this;
var this$ = this;
if((((obj instanceof cljs.core.Atom)) || ((obj instanceof cljs.core.Volatile)))){
return shadow.cljs.devtools.client.console.clj__GT_jsonml(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),shadow.cljs.devtools.client.console.keyword_style,["@DEREF ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.type(obj)], 0))].join('')], null));
} else {
return null;
}
}));

(shadow.cljs.devtools.client.console.DerefFormatter.prototype.hasBody = (function (obj){
var self__ = this;
var this$ = this;
return true;
}));

(shadow.cljs.devtools.client.console.DerefFormatter.prototype.body = (function (v){
var self__ = this;
var this$ = this;
return shadow.cljs.devtools.client.console.clj__GT_jsonml(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"14px"], null),shadow.cljs.devtools.client.console.object_ref(cljs.core.deref(v))], null));
}));

(shadow.cljs.devtools.client.console.DerefFormatter.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(shadow.cljs.devtools.client.console.DerefFormatter.cljs$lang$type = true);

(shadow.cljs.devtools.client.console.DerefFormatter.cljs$lang$ctorStr = "shadow.cljs.devtools.client.console/DerefFormatter");

(shadow.cljs.devtools.client.console.DerefFormatter.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"shadow.cljs.devtools.client.console/DerefFormatter");
}));

/**
 * Positional factory function for shadow.cljs.devtools.client.console/DerefFormatter.
 */
shadow.cljs.devtools.client.console.__GT_DerefFormatter = (function shadow$cljs$devtools$client$console$__GT_DerefFormatter(){
return (new shadow.cljs.devtools.client.console.DerefFormatter());
});

shadow.cljs.devtools.client.console.install_all_BANG_ = (function shadow$cljs$devtools$client$console$install_all_BANG_(){
var temp__5753__auto__ = goog.global.devtoolsFormatters;
if(cljs.core.truth_(temp__5753__auto__)){
var f = temp__5753__auto__;
var G__26311 = f;
G__26311.push((new shadow.cljs.devtools.client.console.KeywordFormatter()));

G__26311.push((new shadow.cljs.devtools.client.console.MapFormatter()));

G__26311.push((new shadow.cljs.devtools.client.console.SeqFormatter()));

G__26311.push((new shadow.cljs.devtools.client.console.SymbolFormatter()));

G__26311.push((new shadow.cljs.devtools.client.console.DerefFormatter()));

return G__26311;
} else {
return null;
}
});
shadow.cljs.devtools.client.console.remove_all_BANG_ = (function shadow$cljs$devtools$client$console$remove_all_BANG_(){
var all = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__26312_SHARP_){
return goog.object.get(p1__26312_SHARP_,"shadow$formatter");
}),cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1((function (){var or__4253__auto__ = goog.global.devtoolsFormatters;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return [];
}
})())));
return goog.object.set(goog.global,"devtoolsFormatters",all);
});
shadow.cljs.devtools.client.console.remove_all_BANG_();
shadow.cljs.devtools.client.console.install_all_BANG_();
Object.defineProperty(module.exports, "SymbolFormatter", { enumerable: false, get: function() { return shadow.cljs.devtools.client.console.SymbolFormatter; } });
Object.defineProperty(module.exports, "KeywordFormatter", { enumerable: false, get: function() { return shadow.cljs.devtools.client.console.KeywordFormatter; } });
Object.defineProperty(module.exports, "__GT_SeqFormatter", { enumerable: false, get: function() { return shadow.cljs.devtools.client.console.__GT_SeqFormatter; } });
Object.defineProperty(module.exports, "clj__GT_jsonml", { enumerable: false, get: function() { return shadow.cljs.devtools.client.console.clj__GT_jsonml; } });
Object.defineProperty(module.exports, "keyword_style", { enumerable: false, get: function() { return shadow.cljs.devtools.client.console.keyword_style; } });
Object.defineProperty(module.exports, "__GT_SymbolFormatter", { enumerable: false, get: function() { return shadow.cljs.devtools.client.console.__GT_SymbolFormatter; } });
Object.defineProperty(module.exports, "push_all", { enumerable: false, get: function() { return shadow.cljs.devtools.client.console.push_all; } });
Object.defineProperty(module.exports, "map__GT_style", { enumerable: false, get: function() { return shadow.cljs.devtools.client.console.map__GT_style; } });
Object.defineProperty(module.exports, "object_ref", { enumerable: false, get: function() { return shadow.cljs.devtools.client.console.object_ref; } });
Object.defineProperty(module.exports, "DerefFormatter", { enumerable: false, get: function() { return shadow.cljs.devtools.client.console.DerefFormatter; } });
Object.defineProperty(module.exports, "remove_all_BANG_", { enumerable: false, get: function() { return shadow.cljs.devtools.client.console.remove_all_BANG_; } });
Object.defineProperty(module.exports, "MapFormatter", { enumerable: false, get: function() { return shadow.cljs.devtools.client.console.MapFormatter; } });
Object.defineProperty(module.exports, "SeqFormatter", { enumerable: false, get: function() { return shadow.cljs.devtools.client.console.SeqFormatter; } });
Object.defineProperty(module.exports, "__GT_KeywordFormatter", { enumerable: false, get: function() { return shadow.cljs.devtools.client.console.__GT_KeywordFormatter; } });
Object.defineProperty(module.exports, "install_all_BANG_", { enumerable: false, get: function() { return shadow.cljs.devtools.client.console.install_all_BANG_; } });
Object.defineProperty(module.exports, "__GT_MapFormatter", { enumerable: false, get: function() { return shadow.cljs.devtools.client.console.__GT_MapFormatter; } });
Object.defineProperty(module.exports, "__GT_DerefFormatter", { enumerable: false, get: function() { return shadow.cljs.devtools.client.console.__GT_DerefFormatter; } });
//# sourceMappingURL=shadow.cljs.devtools.client.console.js.map
