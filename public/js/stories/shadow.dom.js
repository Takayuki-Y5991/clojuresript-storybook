var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./clojure.string.js");
require("./cljs.core.async.js");
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

$CLJS.SHADOW_ENV.setLoaded("shadow.dom.js");

goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_34003 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_34003(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_34004 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_34004(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__32915 = coll;
var G__32916 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__32915,G__32916) : shadow.dom.lazy_native_coll_seq.call(null,G__32915,G__32916));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4253__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__32980 = arguments.length;
switch (G__32980) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__32999 = arguments.length;
switch (G__32999) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__33018 = arguments.length;
switch (G__33018) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__33035 = arguments.length;
switch (G__33035) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__33047 = arguments.length;
switch (G__33047) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__33057 = arguments.length;
switch (G__33057) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4253__auto__ = (!((typeof document !== 'undefined')));
if(or__4253__auto__){
return or__4253__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e33083){if((e33083 instanceof Object)){
var e = e33083;
return console.log("didnt support attachEvent",el,e);
} else {
throw e33083;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4253__auto__ = (!((typeof document !== 'undefined')));
if(or__4253__auto__){
return or__4253__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__33094 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__33095 = null;
var count__33096 = (0);
var i__33097 = (0);
while(true){
if((i__33097 < count__33096)){
var el = chunk__33095.cljs$core$IIndexed$_nth$arity$2(null,i__33097);
var handler_34013__$1 = ((function (seq__33094,chunk__33095,count__33096,i__33097,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__33094,chunk__33095,count__33096,i__33097,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_34013__$1);


var G__34014 = seq__33094;
var G__34015 = chunk__33095;
var G__34016 = count__33096;
var G__34017 = (i__33097 + (1));
seq__33094 = G__34014;
chunk__33095 = G__34015;
count__33096 = G__34016;
i__33097 = G__34017;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__33094);
if(temp__5753__auto__){
var seq__33094__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33094__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__33094__$1);
var G__34018 = cljs.core.chunk_rest(seq__33094__$1);
var G__34019 = c__4679__auto__;
var G__34020 = cljs.core.count(c__4679__auto__);
var G__34021 = (0);
seq__33094 = G__34018;
chunk__33095 = G__34019;
count__33096 = G__34020;
i__33097 = G__34021;
continue;
} else {
var el = cljs.core.first(seq__33094__$1);
var handler_34022__$1 = ((function (seq__33094,chunk__33095,count__33096,i__33097,el,seq__33094__$1,temp__5753__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__33094,chunk__33095,count__33096,i__33097,el,seq__33094__$1,temp__5753__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_34022__$1);


var G__34023 = cljs.core.next(seq__33094__$1);
var G__34024 = null;
var G__34025 = (0);
var G__34026 = (0);
seq__33094 = G__34023;
chunk__33095 = G__34024;
count__33096 = G__34025;
i__33097 = G__34026;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__33152 = arguments.length;
switch (G__33152) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__33179 = cljs.core.seq(events);
var chunk__33180 = null;
var count__33181 = (0);
var i__33182 = (0);
while(true){
if((i__33182 < count__33181)){
var vec__33191 = chunk__33180.cljs$core$IIndexed$_nth$arity$2(null,i__33182);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33191,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33191,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__34028 = seq__33179;
var G__34029 = chunk__33180;
var G__34030 = count__33181;
var G__34031 = (i__33182 + (1));
seq__33179 = G__34028;
chunk__33180 = G__34029;
count__33181 = G__34030;
i__33182 = G__34031;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__33179);
if(temp__5753__auto__){
var seq__33179__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33179__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__33179__$1);
var G__34032 = cljs.core.chunk_rest(seq__33179__$1);
var G__34033 = c__4679__auto__;
var G__34034 = cljs.core.count(c__4679__auto__);
var G__34035 = (0);
seq__33179 = G__34032;
chunk__33180 = G__34033;
count__33181 = G__34034;
i__33182 = G__34035;
continue;
} else {
var vec__33194 = cljs.core.first(seq__33179__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33194,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33194,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__34036 = cljs.core.next(seq__33179__$1);
var G__34037 = null;
var G__34038 = (0);
var G__34039 = (0);
seq__33179 = G__34036;
chunk__33180 = G__34037;
count__33181 = G__34038;
i__33182 = G__34039;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__33199 = cljs.core.seq(styles);
var chunk__33200 = null;
var count__33201 = (0);
var i__33202 = (0);
while(true){
if((i__33202 < count__33201)){
var vec__33213 = chunk__33200.cljs$core$IIndexed$_nth$arity$2(null,i__33202);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33213,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33213,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__34040 = seq__33199;
var G__34041 = chunk__33200;
var G__34042 = count__33201;
var G__34043 = (i__33202 + (1));
seq__33199 = G__34040;
chunk__33200 = G__34041;
count__33201 = G__34042;
i__33202 = G__34043;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__33199);
if(temp__5753__auto__){
var seq__33199__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33199__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__33199__$1);
var G__34044 = cljs.core.chunk_rest(seq__33199__$1);
var G__34045 = c__4679__auto__;
var G__34046 = cljs.core.count(c__4679__auto__);
var G__34047 = (0);
seq__33199 = G__34044;
chunk__33200 = G__34045;
count__33201 = G__34046;
i__33202 = G__34047;
continue;
} else {
var vec__33216 = cljs.core.first(seq__33199__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33216,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33216,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__34048 = cljs.core.next(seq__33199__$1);
var G__34049 = null;
var G__34050 = (0);
var G__34051 = (0);
seq__33199 = G__34048;
chunk__33200 = G__34049;
count__33201 = G__34050;
i__33202 = G__34051;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__33220_34052 = key;
var G__33220_34053__$1 = (((G__33220_34052 instanceof cljs.core.Keyword))?G__33220_34052.fqn:null);
switch (G__33220_34053__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_34055 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4253__auto__ = goog.string.startsWith(ks_34055,"data-");
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return goog.string.startsWith(ks_34055,"aria-");
}
})())){
el.setAttribute(ks_34055,value);
} else {
(el[ks_34055] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__33262){
var map__33263 = p__33262;
var map__33263__$1 = cljs.core.__destructure_map(map__33263);
var props = map__33263__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33263__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__33264 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33264,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33264,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33264,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__33283 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__33283,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__33283;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__33296 = arguments.length;
switch (G__33296) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__33306){
var vec__33310 = p__33306;
var seq__33311 = cljs.core.seq(vec__33310);
var first__33312 = cljs.core.first(seq__33311);
var seq__33311__$1 = cljs.core.next(seq__33311);
var nn = first__33312;
var first__33312__$1 = cljs.core.first(seq__33311__$1);
var seq__33311__$2 = cljs.core.next(seq__33311__$1);
var np = first__33312__$1;
var nc = seq__33311__$2;
var node = vec__33310;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__33314 = nn;
var G__33315 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__33314,G__33315) : create_fn.call(null,G__33314,G__33315));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__33318 = nn;
var G__33319 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__33318,G__33319) : create_fn.call(null,G__33318,G__33319));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__33336 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33336,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33336,(1),null);
var seq__33346_34057 = cljs.core.seq(node_children);
var chunk__33347_34058 = null;
var count__33348_34059 = (0);
var i__33349_34060 = (0);
while(true){
if((i__33349_34060 < count__33348_34059)){
var child_struct_34061 = chunk__33347_34058.cljs$core$IIndexed$_nth$arity$2(null,i__33349_34060);
var children_34062 = shadow.dom.dom_node(child_struct_34061);
if(cljs.core.seq_QMARK_(children_34062)){
var seq__33439_34063 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_34062));
var chunk__33441_34064 = null;
var count__33442_34065 = (0);
var i__33443_34066 = (0);
while(true){
if((i__33443_34066 < count__33442_34065)){
var child_34085 = chunk__33441_34064.cljs$core$IIndexed$_nth$arity$2(null,i__33443_34066);
if(cljs.core.truth_(child_34085)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34085);


var G__34086 = seq__33439_34063;
var G__34087 = chunk__33441_34064;
var G__34088 = count__33442_34065;
var G__34089 = (i__33443_34066 + (1));
seq__33439_34063 = G__34086;
chunk__33441_34064 = G__34087;
count__33442_34065 = G__34088;
i__33443_34066 = G__34089;
continue;
} else {
var G__34090 = seq__33439_34063;
var G__34091 = chunk__33441_34064;
var G__34092 = count__33442_34065;
var G__34093 = (i__33443_34066 + (1));
seq__33439_34063 = G__34090;
chunk__33441_34064 = G__34091;
count__33442_34065 = G__34092;
i__33443_34066 = G__34093;
continue;
}
} else {
var temp__5753__auto___34101 = cljs.core.seq(seq__33439_34063);
if(temp__5753__auto___34101){
var seq__33439_34102__$1 = temp__5753__auto___34101;
if(cljs.core.chunked_seq_QMARK_(seq__33439_34102__$1)){
var c__4679__auto___34106 = cljs.core.chunk_first(seq__33439_34102__$1);
var G__34107 = cljs.core.chunk_rest(seq__33439_34102__$1);
var G__34108 = c__4679__auto___34106;
var G__34109 = cljs.core.count(c__4679__auto___34106);
var G__34110 = (0);
seq__33439_34063 = G__34107;
chunk__33441_34064 = G__34108;
count__33442_34065 = G__34109;
i__33443_34066 = G__34110;
continue;
} else {
var child_34111 = cljs.core.first(seq__33439_34102__$1);
if(cljs.core.truth_(child_34111)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34111);


var G__34112 = cljs.core.next(seq__33439_34102__$1);
var G__34113 = null;
var G__34114 = (0);
var G__34115 = (0);
seq__33439_34063 = G__34112;
chunk__33441_34064 = G__34113;
count__33442_34065 = G__34114;
i__33443_34066 = G__34115;
continue;
} else {
var G__34116 = cljs.core.next(seq__33439_34102__$1);
var G__34117 = null;
var G__34118 = (0);
var G__34119 = (0);
seq__33439_34063 = G__34116;
chunk__33441_34064 = G__34117;
count__33442_34065 = G__34118;
i__33443_34066 = G__34119;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_34062);
}


var G__34123 = seq__33346_34057;
var G__34124 = chunk__33347_34058;
var G__34125 = count__33348_34059;
var G__34126 = (i__33349_34060 + (1));
seq__33346_34057 = G__34123;
chunk__33347_34058 = G__34124;
count__33348_34059 = G__34125;
i__33349_34060 = G__34126;
continue;
} else {
var temp__5753__auto___34134 = cljs.core.seq(seq__33346_34057);
if(temp__5753__auto___34134){
var seq__33346_34135__$1 = temp__5753__auto___34134;
if(cljs.core.chunked_seq_QMARK_(seq__33346_34135__$1)){
var c__4679__auto___34139 = cljs.core.chunk_first(seq__33346_34135__$1);
var G__34144 = cljs.core.chunk_rest(seq__33346_34135__$1);
var G__34145 = c__4679__auto___34139;
var G__34146 = cljs.core.count(c__4679__auto___34139);
var G__34147 = (0);
seq__33346_34057 = G__34144;
chunk__33347_34058 = G__34145;
count__33348_34059 = G__34146;
i__33349_34060 = G__34147;
continue;
} else {
var child_struct_34148 = cljs.core.first(seq__33346_34135__$1);
var children_34149 = shadow.dom.dom_node(child_struct_34148);
if(cljs.core.seq_QMARK_(children_34149)){
var seq__33447_34150 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_34149));
var chunk__33449_34151 = null;
var count__33450_34152 = (0);
var i__33451_34153 = (0);
while(true){
if((i__33451_34153 < count__33450_34152)){
var child_34156 = chunk__33449_34151.cljs$core$IIndexed$_nth$arity$2(null,i__33451_34153);
if(cljs.core.truth_(child_34156)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34156);


var G__34157 = seq__33447_34150;
var G__34158 = chunk__33449_34151;
var G__34159 = count__33450_34152;
var G__34160 = (i__33451_34153 + (1));
seq__33447_34150 = G__34157;
chunk__33449_34151 = G__34158;
count__33450_34152 = G__34159;
i__33451_34153 = G__34160;
continue;
} else {
var G__34161 = seq__33447_34150;
var G__34162 = chunk__33449_34151;
var G__34163 = count__33450_34152;
var G__34164 = (i__33451_34153 + (1));
seq__33447_34150 = G__34161;
chunk__33449_34151 = G__34162;
count__33450_34152 = G__34163;
i__33451_34153 = G__34164;
continue;
}
} else {
var temp__5753__auto___34165__$1 = cljs.core.seq(seq__33447_34150);
if(temp__5753__auto___34165__$1){
var seq__33447_34166__$1 = temp__5753__auto___34165__$1;
if(cljs.core.chunked_seq_QMARK_(seq__33447_34166__$1)){
var c__4679__auto___34167 = cljs.core.chunk_first(seq__33447_34166__$1);
var G__34168 = cljs.core.chunk_rest(seq__33447_34166__$1);
var G__34169 = c__4679__auto___34167;
var G__34170 = cljs.core.count(c__4679__auto___34167);
var G__34171 = (0);
seq__33447_34150 = G__34168;
chunk__33449_34151 = G__34169;
count__33450_34152 = G__34170;
i__33451_34153 = G__34171;
continue;
} else {
var child_34172 = cljs.core.first(seq__33447_34166__$1);
if(cljs.core.truth_(child_34172)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34172);


var G__34173 = cljs.core.next(seq__33447_34166__$1);
var G__34174 = null;
var G__34175 = (0);
var G__34176 = (0);
seq__33447_34150 = G__34173;
chunk__33449_34151 = G__34174;
count__33450_34152 = G__34175;
i__33451_34153 = G__34176;
continue;
} else {
var G__34177 = cljs.core.next(seq__33447_34166__$1);
var G__34178 = null;
var G__34179 = (0);
var G__34180 = (0);
seq__33447_34150 = G__34177;
chunk__33449_34151 = G__34178;
count__33450_34152 = G__34179;
i__33451_34153 = G__34180;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_34149);
}


var G__34181 = cljs.core.next(seq__33346_34135__$1);
var G__34182 = null;
var G__34183 = (0);
var G__34184 = (0);
seq__33346_34057 = G__34181;
chunk__33347_34058 = G__34182;
count__33348_34059 = G__34183;
i__33349_34060 = G__34184;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__33462 = cljs.core.seq(node);
var chunk__33463 = null;
var count__33464 = (0);
var i__33465 = (0);
while(true){
if((i__33465 < count__33464)){
var n = chunk__33463.cljs$core$IIndexed$_nth$arity$2(null,i__33465);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__34185 = seq__33462;
var G__34186 = chunk__33463;
var G__34187 = count__33464;
var G__34188 = (i__33465 + (1));
seq__33462 = G__34185;
chunk__33463 = G__34186;
count__33464 = G__34187;
i__33465 = G__34188;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__33462);
if(temp__5753__auto__){
var seq__33462__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33462__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__33462__$1);
var G__34190 = cljs.core.chunk_rest(seq__33462__$1);
var G__34191 = c__4679__auto__;
var G__34192 = cljs.core.count(c__4679__auto__);
var G__34193 = (0);
seq__33462 = G__34190;
chunk__33463 = G__34191;
count__33464 = G__34192;
i__33465 = G__34193;
continue;
} else {
var n = cljs.core.first(seq__33462__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__34196 = cljs.core.next(seq__33462__$1);
var G__34197 = null;
var G__34198 = (0);
var G__34199 = (0);
seq__33462 = G__34196;
chunk__33463 = G__34197;
count__33464 = G__34198;
i__33465 = G__34199;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__33469 = arguments.length;
switch (G__33469) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__33471 = arguments.length;
switch (G__33471) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__33499 = arguments.length;
switch (G__33499) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4253__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4870__auto__ = [];
var len__4864__auto___34221 = arguments.length;
var i__4865__auto___34222 = (0);
while(true){
if((i__4865__auto___34222 < len__4864__auto___34221)){
args__4870__auto__.push((arguments[i__4865__auto___34222]));

var G__34223 = (i__4865__auto___34222 + (1));
i__4865__auto___34222 = G__34223;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__33587_34224 = cljs.core.seq(nodes);
var chunk__33588_34225 = null;
var count__33589_34226 = (0);
var i__33590_34227 = (0);
while(true){
if((i__33590_34227 < count__33589_34226)){
var node_34228 = chunk__33588_34225.cljs$core$IIndexed$_nth$arity$2(null,i__33590_34227);
fragment.appendChild(shadow.dom._to_dom(node_34228));


var G__34229 = seq__33587_34224;
var G__34230 = chunk__33588_34225;
var G__34231 = count__33589_34226;
var G__34232 = (i__33590_34227 + (1));
seq__33587_34224 = G__34229;
chunk__33588_34225 = G__34230;
count__33589_34226 = G__34231;
i__33590_34227 = G__34232;
continue;
} else {
var temp__5753__auto___34233 = cljs.core.seq(seq__33587_34224);
if(temp__5753__auto___34233){
var seq__33587_34235__$1 = temp__5753__auto___34233;
if(cljs.core.chunked_seq_QMARK_(seq__33587_34235__$1)){
var c__4679__auto___34237 = cljs.core.chunk_first(seq__33587_34235__$1);
var G__34238 = cljs.core.chunk_rest(seq__33587_34235__$1);
var G__34239 = c__4679__auto___34237;
var G__34240 = cljs.core.count(c__4679__auto___34237);
var G__34241 = (0);
seq__33587_34224 = G__34238;
chunk__33588_34225 = G__34239;
count__33589_34226 = G__34240;
i__33590_34227 = G__34241;
continue;
} else {
var node_34243 = cljs.core.first(seq__33587_34235__$1);
fragment.appendChild(shadow.dom._to_dom(node_34243));


var G__34244 = cljs.core.next(seq__33587_34235__$1);
var G__34245 = null;
var G__34246 = (0);
var G__34247 = (0);
seq__33587_34224 = G__34244;
chunk__33588_34225 = G__34245;
count__33589_34226 = G__34246;
i__33590_34227 = G__34247;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq33582){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq33582));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__33597_34249 = cljs.core.seq(scripts);
var chunk__33598_34250 = null;
var count__33599_34251 = (0);
var i__33600_34252 = (0);
while(true){
if((i__33600_34252 < count__33599_34251)){
var vec__33610_34254 = chunk__33598_34250.cljs$core$IIndexed$_nth$arity$2(null,i__33600_34252);
var script_tag_34255 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33610_34254,(0),null);
var script_body_34256 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33610_34254,(1),null);
eval(script_body_34256);


var G__34258 = seq__33597_34249;
var G__34259 = chunk__33598_34250;
var G__34260 = count__33599_34251;
var G__34261 = (i__33600_34252 + (1));
seq__33597_34249 = G__34258;
chunk__33598_34250 = G__34259;
count__33599_34251 = G__34260;
i__33600_34252 = G__34261;
continue;
} else {
var temp__5753__auto___34262 = cljs.core.seq(seq__33597_34249);
if(temp__5753__auto___34262){
var seq__33597_34263__$1 = temp__5753__auto___34262;
if(cljs.core.chunked_seq_QMARK_(seq__33597_34263__$1)){
var c__4679__auto___34264 = cljs.core.chunk_first(seq__33597_34263__$1);
var G__34265 = cljs.core.chunk_rest(seq__33597_34263__$1);
var G__34266 = c__4679__auto___34264;
var G__34267 = cljs.core.count(c__4679__auto___34264);
var G__34268 = (0);
seq__33597_34249 = G__34265;
chunk__33598_34250 = G__34266;
count__33599_34251 = G__34267;
i__33600_34252 = G__34268;
continue;
} else {
var vec__33613_34269 = cljs.core.first(seq__33597_34263__$1);
var script_tag_34270 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33613_34269,(0),null);
var script_body_34271 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33613_34269,(1),null);
eval(script_body_34271);


var G__34272 = cljs.core.next(seq__33597_34263__$1);
var G__34273 = null;
var G__34274 = (0);
var G__34275 = (0);
seq__33597_34249 = G__34272;
chunk__33598_34250 = G__34273;
count__33599_34251 = G__34274;
i__33600_34252 = G__34275;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__33616){
var vec__33617 = p__33616;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33617,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33617,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__33621 = arguments.length;
switch (G__33621) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__33629 = cljs.core.seq(style_keys);
var chunk__33630 = null;
var count__33631 = (0);
var i__33632 = (0);
while(true){
if((i__33632 < count__33631)){
var it = chunk__33630.cljs$core$IIndexed$_nth$arity$2(null,i__33632);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__34277 = seq__33629;
var G__34278 = chunk__33630;
var G__34279 = count__33631;
var G__34280 = (i__33632 + (1));
seq__33629 = G__34277;
chunk__33630 = G__34278;
count__33631 = G__34279;
i__33632 = G__34280;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__33629);
if(temp__5753__auto__){
var seq__33629__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33629__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__33629__$1);
var G__34284 = cljs.core.chunk_rest(seq__33629__$1);
var G__34285 = c__4679__auto__;
var G__34286 = cljs.core.count(c__4679__auto__);
var G__34287 = (0);
seq__33629 = G__34284;
chunk__33630 = G__34285;
count__33631 = G__34286;
i__33632 = G__34287;
continue;
} else {
var it = cljs.core.first(seq__33629__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__34288 = cljs.core.next(seq__33629__$1);
var G__34289 = null;
var G__34290 = (0);
var G__34291 = (0);
seq__33629 = G__34288;
chunk__33630 = G__34289;
count__33631 = G__34290;
i__33632 = G__34291;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k33637,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__33641 = k33637;
var G__33641__$1 = (((G__33641 instanceof cljs.core.Keyword))?G__33641.fqn:null);
switch (G__33641__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k33637,else__4505__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__33645){
var vec__33646 = p__33645;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33646,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33646,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33636){
var self__ = this;
var G__33636__$1 = this;
return (new cljs.core.RecordIter((0),G__33636__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this33638,other33639){
var self__ = this;
var this33638__$1 = this;
return (((!((other33639 == null)))) && ((((this33638__$1.constructor === other33639.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33638__$1.x,other33639.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33638__$1.y,other33639.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33638__$1.__extmap,other33639.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k33637){
var self__ = this;
var this__4509__auto____$1 = this;
var G__33655 = k33637;
var G__33655__$1 = (((G__33655 instanceof cljs.core.Keyword))?G__33655.fqn:null);
switch (G__33655__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k33637);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__33636){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__33657 = cljs.core.keyword_identical_QMARK_;
var expr__33658 = k__4511__auto__;
if(cljs.core.truth_((pred__33657.cljs$core$IFn$_invoke$arity$2 ? pred__33657.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__33658) : pred__33657.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__33658)))){
return (new shadow.dom.Coordinate(G__33636,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__33657.cljs$core$IFn$_invoke$arity$2 ? pred__33657.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__33658) : pred__33657.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__33658)))){
return (new shadow.dom.Coordinate(self__.x,G__33636,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__33636),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__33636){
var self__ = this;
var this__4501__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__33636,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__33640){
var extmap__4542__auto__ = (function (){var G__33706 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__33640,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__33640)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__33706);
} else {
return G__33706;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__33640),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__33640),null,cljs.core.not_empty(extmap__4542__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k33724,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__33732 = k33724;
var G__33732__$1 = (((G__33732 instanceof cljs.core.Keyword))?G__33732.fqn:null);
switch (G__33732__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k33724,else__4505__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__33733){
var vec__33734 = p__33733;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33734,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33734,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#shadow.dom.Size{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33723){
var self__ = this;
var G__33723__$1 = this;
return (new cljs.core.RecordIter((0),G__33723__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this33725,other33726){
var self__ = this;
var this33725__$1 = this;
return (((!((other33726 == null)))) && ((((this33725__$1.constructor === other33726.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33725__$1.w,other33726.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33725__$1.h,other33726.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33725__$1.__extmap,other33726.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k33724){
var self__ = this;
var this__4509__auto____$1 = this;
var G__33741 = k33724;
var G__33741__$1 = (((G__33741 instanceof cljs.core.Keyword))?G__33741.fqn:null);
switch (G__33741__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k33724);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__33723){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__33743 = cljs.core.keyword_identical_QMARK_;
var expr__33744 = k__4511__auto__;
if(cljs.core.truth_((pred__33743.cljs$core$IFn$_invoke$arity$2 ? pred__33743.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__33744) : pred__33743.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__33744)))){
return (new shadow.dom.Size(G__33723,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__33743.cljs$core$IFn$_invoke$arity$2 ? pred__33743.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__33744) : pred__33743.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__33744)))){
return (new shadow.dom.Size(self__.w,G__33723,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__33723),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__33723){
var self__ = this;
var this__4501__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__33723,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__33727){
var extmap__4542__auto__ = (function (){var G__33754 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__33727,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__33727)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__33754);
} else {
return G__33754;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__33727),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__33727),null,cljs.core.not_empty(extmap__4542__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4738__auto__ = opts;
var l__4739__auto__ = a__4738__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4739__auto__)){
var G__34310 = (i + (1));
var G__34311 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__34310;
ret = G__34311;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__33770){
var vec__33771 = p__33770;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33771,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33771,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__33776 = arguments.length;
switch (G__33776) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5751__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5751__auto__)){
var child = temp__5751__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__34325 = ps;
var G__34326 = (i + (1));
el__$1 = G__34325;
i = G__34326;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__33792 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33792,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33792,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33792,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__33803_34328 = cljs.core.seq(props);
var chunk__33804_34329 = null;
var count__33805_34330 = (0);
var i__33806_34331 = (0);
while(true){
if((i__33806_34331 < count__33805_34330)){
var vec__33828_34332 = chunk__33804_34329.cljs$core$IIndexed$_nth$arity$2(null,i__33806_34331);
var k_34333 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33828_34332,(0),null);
var v_34334 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33828_34332,(1),null);
el.setAttributeNS((function (){var temp__5753__auto__ = cljs.core.namespace(k_34333);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_34333),v_34334);


var G__34335 = seq__33803_34328;
var G__34336 = chunk__33804_34329;
var G__34337 = count__33805_34330;
var G__34338 = (i__33806_34331 + (1));
seq__33803_34328 = G__34335;
chunk__33804_34329 = G__34336;
count__33805_34330 = G__34337;
i__33806_34331 = G__34338;
continue;
} else {
var temp__5753__auto___34342 = cljs.core.seq(seq__33803_34328);
if(temp__5753__auto___34342){
var seq__33803_34343__$1 = temp__5753__auto___34342;
if(cljs.core.chunked_seq_QMARK_(seq__33803_34343__$1)){
var c__4679__auto___34344 = cljs.core.chunk_first(seq__33803_34343__$1);
var G__34345 = cljs.core.chunk_rest(seq__33803_34343__$1);
var G__34346 = c__4679__auto___34344;
var G__34347 = cljs.core.count(c__4679__auto___34344);
var G__34348 = (0);
seq__33803_34328 = G__34345;
chunk__33804_34329 = G__34346;
count__33805_34330 = G__34347;
i__33806_34331 = G__34348;
continue;
} else {
var vec__33834_34349 = cljs.core.first(seq__33803_34343__$1);
var k_34350 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33834_34349,(0),null);
var v_34351 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33834_34349,(1),null);
el.setAttributeNS((function (){var temp__5753__auto____$1 = cljs.core.namespace(k_34350);
if(cljs.core.truth_(temp__5753__auto____$1)){
var ns = temp__5753__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_34350),v_34351);


var G__34352 = cljs.core.next(seq__33803_34343__$1);
var G__34353 = null;
var G__34354 = (0);
var G__34355 = (0);
seq__33803_34328 = G__34352;
chunk__33804_34329 = G__34353;
count__33805_34330 = G__34354;
i__33806_34331 = G__34355;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__33842 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33842,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33842,(1),null);
var seq__33845_34356 = cljs.core.seq(node_children);
var chunk__33847_34357 = null;
var count__33848_34358 = (0);
var i__33849_34359 = (0);
while(true){
if((i__33849_34359 < count__33848_34358)){
var child_struct_34360 = chunk__33847_34357.cljs$core$IIndexed$_nth$arity$2(null,i__33849_34359);
if((!((child_struct_34360 == null)))){
if(typeof child_struct_34360 === 'string'){
var text_34361 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_34361),child_struct_34360].join(''));
} else {
var children_34362 = shadow.dom.svg_node(child_struct_34360);
if(cljs.core.seq_QMARK_(children_34362)){
var seq__33919_34363 = cljs.core.seq(children_34362);
var chunk__33921_34364 = null;
var count__33922_34365 = (0);
var i__33923_34366 = (0);
while(true){
if((i__33923_34366 < count__33922_34365)){
var child_34367 = chunk__33921_34364.cljs$core$IIndexed$_nth$arity$2(null,i__33923_34366);
if(cljs.core.truth_(child_34367)){
node.appendChild(child_34367);


var G__34368 = seq__33919_34363;
var G__34369 = chunk__33921_34364;
var G__34370 = count__33922_34365;
var G__34371 = (i__33923_34366 + (1));
seq__33919_34363 = G__34368;
chunk__33921_34364 = G__34369;
count__33922_34365 = G__34370;
i__33923_34366 = G__34371;
continue;
} else {
var G__34372 = seq__33919_34363;
var G__34373 = chunk__33921_34364;
var G__34374 = count__33922_34365;
var G__34375 = (i__33923_34366 + (1));
seq__33919_34363 = G__34372;
chunk__33921_34364 = G__34373;
count__33922_34365 = G__34374;
i__33923_34366 = G__34375;
continue;
}
} else {
var temp__5753__auto___34376 = cljs.core.seq(seq__33919_34363);
if(temp__5753__auto___34376){
var seq__33919_34377__$1 = temp__5753__auto___34376;
if(cljs.core.chunked_seq_QMARK_(seq__33919_34377__$1)){
var c__4679__auto___34378 = cljs.core.chunk_first(seq__33919_34377__$1);
var G__34379 = cljs.core.chunk_rest(seq__33919_34377__$1);
var G__34380 = c__4679__auto___34378;
var G__34381 = cljs.core.count(c__4679__auto___34378);
var G__34382 = (0);
seq__33919_34363 = G__34379;
chunk__33921_34364 = G__34380;
count__33922_34365 = G__34381;
i__33923_34366 = G__34382;
continue;
} else {
var child_34383 = cljs.core.first(seq__33919_34377__$1);
if(cljs.core.truth_(child_34383)){
node.appendChild(child_34383);


var G__34384 = cljs.core.next(seq__33919_34377__$1);
var G__34385 = null;
var G__34386 = (0);
var G__34387 = (0);
seq__33919_34363 = G__34384;
chunk__33921_34364 = G__34385;
count__33922_34365 = G__34386;
i__33923_34366 = G__34387;
continue;
} else {
var G__34388 = cljs.core.next(seq__33919_34377__$1);
var G__34389 = null;
var G__34390 = (0);
var G__34391 = (0);
seq__33919_34363 = G__34388;
chunk__33921_34364 = G__34389;
count__33922_34365 = G__34390;
i__33923_34366 = G__34391;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_34362);
}
}


var G__34392 = seq__33845_34356;
var G__34393 = chunk__33847_34357;
var G__34394 = count__33848_34358;
var G__34395 = (i__33849_34359 + (1));
seq__33845_34356 = G__34392;
chunk__33847_34357 = G__34393;
count__33848_34358 = G__34394;
i__33849_34359 = G__34395;
continue;
} else {
var G__34396 = seq__33845_34356;
var G__34397 = chunk__33847_34357;
var G__34398 = count__33848_34358;
var G__34399 = (i__33849_34359 + (1));
seq__33845_34356 = G__34396;
chunk__33847_34357 = G__34397;
count__33848_34358 = G__34398;
i__33849_34359 = G__34399;
continue;
}
} else {
var temp__5753__auto___34402 = cljs.core.seq(seq__33845_34356);
if(temp__5753__auto___34402){
var seq__33845_34403__$1 = temp__5753__auto___34402;
if(cljs.core.chunked_seq_QMARK_(seq__33845_34403__$1)){
var c__4679__auto___34404 = cljs.core.chunk_first(seq__33845_34403__$1);
var G__34405 = cljs.core.chunk_rest(seq__33845_34403__$1);
var G__34406 = c__4679__auto___34404;
var G__34407 = cljs.core.count(c__4679__auto___34404);
var G__34408 = (0);
seq__33845_34356 = G__34405;
chunk__33847_34357 = G__34406;
count__33848_34358 = G__34407;
i__33849_34359 = G__34408;
continue;
} else {
var child_struct_34409 = cljs.core.first(seq__33845_34403__$1);
if((!((child_struct_34409 == null)))){
if(typeof child_struct_34409 === 'string'){
var text_34410 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_34410),child_struct_34409].join(''));
} else {
var children_34411 = shadow.dom.svg_node(child_struct_34409);
if(cljs.core.seq_QMARK_(children_34411)){
var seq__33964_34412 = cljs.core.seq(children_34411);
var chunk__33966_34413 = null;
var count__33967_34414 = (0);
var i__33968_34415 = (0);
while(true){
if((i__33968_34415 < count__33967_34414)){
var child_34416 = chunk__33966_34413.cljs$core$IIndexed$_nth$arity$2(null,i__33968_34415);
if(cljs.core.truth_(child_34416)){
node.appendChild(child_34416);


var G__34417 = seq__33964_34412;
var G__34418 = chunk__33966_34413;
var G__34419 = count__33967_34414;
var G__34420 = (i__33968_34415 + (1));
seq__33964_34412 = G__34417;
chunk__33966_34413 = G__34418;
count__33967_34414 = G__34419;
i__33968_34415 = G__34420;
continue;
} else {
var G__34421 = seq__33964_34412;
var G__34422 = chunk__33966_34413;
var G__34423 = count__33967_34414;
var G__34424 = (i__33968_34415 + (1));
seq__33964_34412 = G__34421;
chunk__33966_34413 = G__34422;
count__33967_34414 = G__34423;
i__33968_34415 = G__34424;
continue;
}
} else {
var temp__5753__auto___34425__$1 = cljs.core.seq(seq__33964_34412);
if(temp__5753__auto___34425__$1){
var seq__33964_34427__$1 = temp__5753__auto___34425__$1;
if(cljs.core.chunked_seq_QMARK_(seq__33964_34427__$1)){
var c__4679__auto___34428 = cljs.core.chunk_first(seq__33964_34427__$1);
var G__34429 = cljs.core.chunk_rest(seq__33964_34427__$1);
var G__34430 = c__4679__auto___34428;
var G__34431 = cljs.core.count(c__4679__auto___34428);
var G__34432 = (0);
seq__33964_34412 = G__34429;
chunk__33966_34413 = G__34430;
count__33967_34414 = G__34431;
i__33968_34415 = G__34432;
continue;
} else {
var child_34433 = cljs.core.first(seq__33964_34427__$1);
if(cljs.core.truth_(child_34433)){
node.appendChild(child_34433);


var G__34434 = cljs.core.next(seq__33964_34427__$1);
var G__34435 = null;
var G__34436 = (0);
var G__34437 = (0);
seq__33964_34412 = G__34434;
chunk__33966_34413 = G__34435;
count__33967_34414 = G__34436;
i__33968_34415 = G__34437;
continue;
} else {
var G__34441 = cljs.core.next(seq__33964_34427__$1);
var G__34442 = null;
var G__34443 = (0);
var G__34444 = (0);
seq__33964_34412 = G__34441;
chunk__33966_34413 = G__34442;
count__33967_34414 = G__34443;
i__33968_34415 = G__34444;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_34411);
}
}


var G__34445 = cljs.core.next(seq__33845_34403__$1);
var G__34446 = null;
var G__34447 = (0);
var G__34448 = (0);
seq__33845_34356 = G__34445;
chunk__33847_34357 = G__34446;
count__33848_34358 = G__34447;
i__33849_34359 = G__34448;
continue;
} else {
var G__34449 = cljs.core.next(seq__33845_34403__$1);
var G__34450 = null;
var G__34451 = (0);
var G__34452 = (0);
seq__33845_34356 = G__34449;
chunk__33847_34357 = G__34450;
count__33848_34358 = G__34451;
i__33849_34359 = G__34452;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4870__auto__ = [];
var len__4864__auto___34455 = arguments.length;
var i__4865__auto___34456 = (0);
while(true){
if((i__4865__auto___34456 < len__4864__auto___34455)){
args__4870__auto__.push((arguments[i__4865__auto___34456]));

var G__34457 = (i__4865__auto___34456 + (1));
i__4865__auto___34456 = G__34457;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq33978){
var G__33979 = cljs.core.first(seq33978);
var seq33978__$1 = cljs.core.next(seq33978);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33979,seq33978__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__33984 = arguments.length;
switch (G__33984) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4251__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4251__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4251__auto__;
}
})())){
var c__29736__auto___34474 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29737__auto__ = (function (){var switch__29453__auto__ = (function (state_33989){
var state_val_33990 = (state_33989[(1)]);
if((state_val_33990 === (1))){
var state_33989__$1 = state_33989;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33989__$1,(2),once_or_cleanup);
} else {
if((state_val_33990 === (2))){
var inst_33986 = (state_33989[(2)]);
var inst_33987 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_33989__$1 = (function (){var statearr_33991 = state_33989;
(statearr_33991[(7)] = inst_33986);

return statearr_33991;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33989__$1,inst_33987);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__29455__auto__ = null;
var shadow$dom$state_machine__29455__auto____0 = (function (){
var statearr_33993 = [null,null,null,null,null,null,null,null];
(statearr_33993[(0)] = shadow$dom$state_machine__29455__auto__);

(statearr_33993[(1)] = (1));

return statearr_33993;
});
var shadow$dom$state_machine__29455__auto____1 = (function (state_33989){
while(true){
var ret_value__29456__auto__ = (function (){try{while(true){
var result__29457__auto__ = switch__29453__auto__(state_33989);
if(cljs.core.keyword_identical_QMARK_(result__29457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29457__auto__;
}
break;
}
}catch (e33994){var ex__29458__auto__ = e33994;
var statearr_33995_34484 = state_33989;
(statearr_33995_34484[(2)] = ex__29458__auto__);


if(cljs.core.seq((state_33989[(4)]))){
var statearr_33997_34485 = state_33989;
(statearr_33997_34485[(1)] = cljs.core.first((state_33989[(4)])));

} else {
throw ex__29458__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34486 = state_33989;
state_33989 = G__34486;
continue;
} else {
return ret_value__29456__auto__;
}
break;
}
});
shadow$dom$state_machine__29455__auto__ = function(state_33989){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__29455__auto____0.call(this);
case 1:
return shadow$dom$state_machine__29455__auto____1.call(this,state_33989);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__29455__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__29455__auto____0;
shadow$dom$state_machine__29455__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__29455__auto____1;
return shadow$dom$state_machine__29455__auto__;
})()
})();
var state__29738__auto__ = (function (){var statearr_33998 = f__29737__auto__();
(statearr_33998[(6)] = c__29736__auto___34474);

return statearr_33998;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29738__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);

Object.defineProperty(module.exports, "contains_QMARK_", { enumerable: false, get: function() { return shadow.dom.contains_QMARK_; } });
Object.defineProperty(module.exports, "eval_scripts", { enumerable: false, get: function() { return shadow.dom.eval_scripts; } });
Object.defineProperty(module.exports, "redirect", { enumerable: false, get: function() { return shadow.dom.redirect; } });
Object.defineProperty(module.exports, "native_coll", { enumerable: false, get: function() { return shadow.dom.native_coll; } });
Object.defineProperty(module.exports, "NativeColl", { enumerable: false, get: function() { return shadow.dom.NativeColl; } });
Object.defineProperty(module.exports, "query", { enumerable: false, get: function() { return shadow.dom.query; } });
Object.defineProperty(module.exports, "make_svg_node", { enumerable: false, get: function() { return shadow.dom.make_svg_node; } });
Object.defineProperty(module.exports, "str__GT_fragment", { enumerable: false, get: function() { return shadow.dom.str__GT_fragment; } });
Object.defineProperty(module.exports, "_to_svg", { enumerable: false, get: function() { return shadow.dom._to_svg; } });
Object.defineProperty(module.exports, "child_nodes", { enumerable: false, get: function() { return shadow.dom.child_nodes; } });
Object.defineProperty(module.exports, "insert_before", { enumerable: false, get: function() { return shadow.dom.insert_before; } });
Object.defineProperty(module.exports, "merge_class_string", { enumerable: false, get: function() { return shadow.dom.merge_class_string; } });
Object.defineProperty(module.exports, "has_class_QMARK_", { enumerable: false, get: function() { return shadow.dom.has_class_QMARK_; } });
Object.defineProperty(module.exports, "map__GT_Size", { enumerable: false, get: function() { return shadow.dom.map__GT_Size; } });
Object.defineProperty(module.exports, "text", { enumerable: false, get: function() { return shadow.dom.text; } });
Object.defineProperty(module.exports, "data", { enumerable: false, get: function() { return shadow.dom.data; } });
Object.defineProperty(module.exports, "transition_supported_QMARK_", { enumerable: false, get: function() { return shadow.dom.transition_supported_QMARK_; } });
Object.defineProperty(module.exports, "attr", { enumerable: false, get: function() { return shadow.dom.attr; } });
Object.defineProperty(module.exports, "remove_styles", { enumerable: false, get: function() { return shadow.dom.remove_styles; } });
Object.defineProperty(module.exports, "remove_event_handler", { enumerable: false, get: function() { return shadow.dom.remove_event_handler; } });
Object.defineProperty(module.exports, "remove_class", { enumerable: false, get: function() { return shadow.dom.remove_class; } });
Object.defineProperty(module.exports, "select_option_values", { enumerable: false, get: function() { return shadow.dom.select_option_values; } });
Object.defineProperty(module.exports, "insert_after", { enumerable: false, get: function() { return shadow.dom.insert_after; } });
Object.defineProperty(module.exports, "svg_node", { enumerable: false, get: function() { return shadow.dom.svg_node; } });
Object.defineProperty(module.exports, "children", { enumerable: false, get: function() { return shadow.dom.children; } });
Object.defineProperty(module.exports, "first_child", { enumerable: false, get: function() { return shadow.dom.first_child; } });
Object.defineProperty(module.exports, "get_html", { enumerable: false, get: function() { return shadow.dom.get_html; } });
Object.defineProperty(module.exports, "remove", { enumerable: false, get: function() { return shadow.dom.remove; } });
Object.defineProperty(module.exports, "__GT_Coordinate", { enumerable: false, get: function() { return shadow.dom.__GT_Coordinate; } });
Object.defineProperty(module.exports, "dom_listen_remove", { enumerable: false, get: function() { return shadow.dom.dom_listen_remove; } });
Object.defineProperty(module.exports, "by_id", { enumerable: false, get: function() { return shadow.dom.by_id; } });
Object.defineProperty(module.exports, "checked_QMARK_", { enumerable: false, get: function() { return shadow.dom.checked_QMARK_; } });
Object.defineProperty(module.exports, "tag_name", { enumerable: false, get: function() { return shadow.dom.tag_name; } });
Object.defineProperty(module.exports, "get_size", { enumerable: false, get: function() { return shadow.dom.get_size; } });
Object.defineProperty(module.exports, "dom_listen", { enumerable: false, get: function() { return shadow.dom.dom_listen; } });
Object.defineProperty(module.exports, "get_viewport_size", { enumerable: false, get: function() { return shadow.dom.get_viewport_size; } });
Object.defineProperty(module.exports, "add_event_listeners", { enumerable: false, get: function() { return shadow.dom.add_event_listeners; } });
Object.defineProperty(module.exports, "set_attr", { enumerable: false, get: function() { return shadow.dom.set_attr; } });
Object.defineProperty(module.exports, "reset", { enumerable: false, get: function() { return shadow.dom.reset; } });
Object.defineProperty(module.exports, "IElement", { enumerable: false, get: function() { return shadow.dom.IElement; } });
Object.defineProperty(module.exports, "make_dom_node", { enumerable: false, get: function() { return shadow.dom.make_dom_node; } });
Object.defineProperty(module.exports, "SVGElement", { enumerable: false, get: function() { return shadow.dom.SVGElement; } });
Object.defineProperty(module.exports, "form_elements", { enumerable: false, get: function() { return shadow.dom.form_elements; } });
Object.defineProperty(module.exports, "Size", { enumerable: false, get: function() { return shadow.dom.Size; } });
Object.defineProperty(module.exports, "lazy_native_coll_seq", { enumerable: false, get: function() { return shadow.dom.lazy_native_coll_seq; } });
Object.defineProperty(module.exports, "get_parent", { enumerable: false, get: function() { return shadow.dom.get_parent; } });
Object.defineProperty(module.exports, "get_height", { enumerable: false, get: function() { return shadow.dom.get_height; } });
Object.defineProperty(module.exports, "event_chan", { enumerable: false, get: function() { return shadow.dom.event_chan; } });
Object.defineProperty(module.exports, "fragment", { enumerable: false, get: function() { return shadow.dom.fragment; } });
Object.defineProperty(module.exports, "check", { enumerable: false, get: function() { return shadow.dom.check; } });
Object.defineProperty(module.exports, "Coordinate", { enumerable: false, get: function() { return shadow.dom.Coordinate; } });
Object.defineProperty(module.exports, "parse_tag", { enumerable: false, get: function() { return shadow.dom.parse_tag; } });
Object.defineProperty(module.exports, "del_attr", { enumerable: false, get: function() { return shadow.dom.del_attr; } });
Object.defineProperty(module.exports, "reload_BANG_", { enumerable: false, get: function() { return shadow.dom.reload_BANG_; } });
Object.defineProperty(module.exports, "destructure_node", { enumerable: false, get: function() { return shadow.dom.destructure_node; } });
Object.defineProperty(module.exports, "remove_style", { enumerable: false, get: function() { return shadow.dom.remove_style; } });
Object.defineProperty(module.exports, "append", { enumerable: false, get: function() { return shadow.dom.append; } });
Object.defineProperty(module.exports, "px", { enumerable: false, get: function() { return shadow.dom.px; } });
Object.defineProperty(module.exports, "get_value", { enumerable: false, get: function() { return shadow.dom.get_value; } });
Object.defineProperty(module.exports, "ev_stop", { enumerable: false, get: function() { return shadow.dom.ev_stop; } });
Object.defineProperty(module.exports, "_to_dom", { enumerable: false, get: function() { return shadow.dom._to_dom; } });
Object.defineProperty(module.exports, "xmlns", { enumerable: false, get: function() { return shadow.dom.xmlns; } });
Object.defineProperty(module.exports, "matches", { enumerable: false, get: function() { return shadow.dom.matches; } });
Object.defineProperty(module.exports, "insert_first", { enumerable: false, get: function() { return shadow.dom.insert_first; } });
Object.defineProperty(module.exports, "map__GT_Coordinate", { enumerable: false, get: function() { return shadow.dom.map__GT_Coordinate; } });
Object.defineProperty(module.exports, "create_dom_node", { enumerable: false, get: function() { return shadow.dom.create_dom_node; } });
Object.defineProperty(module.exports, "__GT_NativeColl", { enumerable: false, get: function() { return shadow.dom.__GT_NativeColl; } });
Object.defineProperty(module.exports, "get_position", { enumerable: false, get: function() { return shadow.dom.get_position; } });
Object.defineProperty(module.exports, "dom_node", { enumerable: false, get: function() { return shadow.dom.dom_node; } });
Object.defineProperty(module.exports, "set_data", { enumerable: false, get: function() { return shadow.dom.set_data; } });
Object.defineProperty(module.exports, "get_client_position", { enumerable: false, get: function() { return shadow.dom.get_client_position; } });
Object.defineProperty(module.exports, "get_page_offset", { enumerable: false, get: function() { return shadow.dom.get_page_offset; } });
Object.defineProperty(module.exports, "query_one", { enumerable: false, get: function() { return shadow.dom.query_one; } });
Object.defineProperty(module.exports, "get_next_sibling", { enumerable: false, get: function() { return shadow.dom.get_next_sibling; } });
Object.defineProperty(module.exports, "set_style", { enumerable: false, get: function() { return shadow.dom.set_style; } });
Object.defineProperty(module.exports, "pct", { enumerable: false, get: function() { return shadow.dom.pct; } });
Object.defineProperty(module.exports, "get_previous_sibling", { enumerable: false, get: function() { return shadow.dom.get_previous_sibling; } });
Object.defineProperty(module.exports, "ancestor_by_tag", { enumerable: false, get: function() { return shadow.dom.ancestor_by_tag; } });
Object.defineProperty(module.exports, "build", { enumerable: false, get: function() { return shadow.dom.build; } });
Object.defineProperty(module.exports, "set_html", { enumerable: false, get: function() { return shadow.dom.set_html; } });
Object.defineProperty(module.exports, "build_url", { enumerable: false, get: function() { return shadow.dom.build_url; } });
Object.defineProperty(module.exports, "ancestor_by_class", { enumerable: false, get: function() { return shadow.dom.ancestor_by_class; } });
Object.defineProperty(module.exports, "__GT_Size", { enumerable: false, get: function() { return shadow.dom.__GT_Size; } });
Object.defineProperty(module.exports, "add_class", { enumerable: false, get: function() { return shadow.dom.add_class; } });
Object.defineProperty(module.exports, "node_name", { enumerable: false, get: function() { return shadow.dom.node_name; } });
Object.defineProperty(module.exports, "parents", { enumerable: false, get: function() { return shadow.dom.parents; } });
Object.defineProperty(module.exports, "on_query", { enumerable: false, get: function() { return shadow.dom.on_query; } });
Object.defineProperty(module.exports, "create_svg_node", { enumerable: false, get: function() { return shadow.dom.create_svg_node; } });
Object.defineProperty(module.exports, "set_attrs", { enumerable: false, get: function() { return shadow.dom.set_attrs; } });
Object.defineProperty(module.exports, "svg", { enumerable: false, get: function() { return shadow.dom.svg; } });
Object.defineProperty(module.exports, "index_of", { enumerable: false, get: function() { return shadow.dom.index_of; } });
Object.defineProperty(module.exports, "replace_node", { enumerable: false, get: function() { return shadow.dom.replace_node; } });
Object.defineProperty(module.exports, "size__GT_clj", { enumerable: false, get: function() { return shadow.dom.size__GT_clj; } });
Object.defineProperty(module.exports, "set_attr_STAR_", { enumerable: false, get: function() { return shadow.dom.set_attr_STAR_; } });
Object.defineProperty(module.exports, "on", { enumerable: false, get: function() { return shadow.dom.on; } });
Object.defineProperty(module.exports, "remove_style_STAR_", { enumerable: false, get: function() { return shadow.dom.remove_style_STAR_; } });
Object.defineProperty(module.exports, "toggle_class", { enumerable: false, get: function() { return shadow.dom.toggle_class; } });
Object.defineProperty(module.exports, "set_value", { enumerable: false, get: function() { return shadow.dom.set_value; } });
//# sourceMappingURL=shadow.dom.js.map
