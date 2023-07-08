var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./shadow.dom.js");
require("./cljs.core.async.js");
require("./clojure.string.js");
require("./clojure.data.js");
require("./cljs.core.async.impl.protocols.js");
require("./shadow.util.js");
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

$CLJS.SHADOW_ENV.setLoaded("shadow.object.js");

goog.provide('shadow.object');
shadow.object.console_friendly = shadow.util.console_friendly;
shadow.object.log = shadow.util.log;
shadow.object.debug = shadow.util.log;
shadow.object.info = shadow.util.log;
shadow.object.warn = shadow.util.log;
shadow.object.error = shadow.util.log;
shadow.object.obj_id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
shadow.object.next_id = (function shadow$object$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(shadow.object.obj_id,cljs.core.inc);
});
shadow.object.object_defs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
shadow.object.behavior_fns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
shadow.object.instances = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
shadow.object.instance_parent = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
shadow.object.instance_children = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
shadow.object.events = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
shadow.object.define_event = (function shadow$object$define_event(event_name,desc,args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(shadow.object.events,cljs.core.assoc,event_name,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),event_name,new cljs.core.Keyword(null,"description","description",-1428560544),desc,new cljs.core.Keyword(null,"args","args",1315556576),args], null));
});
shadow.object.unmunge = (function shadow$object$unmunge(s){
return clojure.string.replace(clojure.string.replace(s,/_DOT_/,"."),/_/,"-");
});
shadow.object.define_event(new cljs.core.Keyword(null,"init","init",-1875481434),"object initialization",cljs.core.PersistentVector.EMPTY);
shadow.object.define_event(new cljs.core.Keyword(null,"destroy","destroy",-843660405),"object descruction",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cause","cause",231901252),"cause of destruction, :parent means the parent was destroyed, :direct is default"], null)], null));
shadow.object.define_event(new cljs.core.Keyword("dom","init","dom/init",-1875647652),"called after the dom was created but has not entered the document yet",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dom","dom",-1236537922),"the dom that was created"], null)], null));
shadow.object.define_event(new cljs.core.Keyword("dom","entered","dom/entered",506699596),"should be called whenever a dom node is added to the document, since that\n   is not in control of this library its up to you to call this\n   use (so/notify-tree! your-obj :dom/entered) to notify the node and every child you created",cljs.core.PersistentVector.EMPTY);
shadow.object.define_event(new cljs.core.Keyword(null,"bind-children-update","bind-children-update",-1610690160),"need to rethink this",cljs.core.PersistentVector.EMPTY);

/**
 * @interface
 */
shadow.object.IObject = function(){};

var shadow$object$IObject$_id$dyn_34788 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (shadow.object._id[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (shadow.object._id["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IObject.-id",this$);
}
}
});
shadow.object._id = (function shadow$object$_id(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$object$IObject$_id$arity$1 == null)))))){
return this$.shadow$object$IObject$_id$arity$1(this$);
} else {
return shadow$object$IObject$_id$dyn_34788(this$);
}
});

var shadow$object$IObject$_type$dyn_34789 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (shadow.object._type[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (shadow.object._type["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IObject.-type",this$);
}
}
});
shadow.object._type = (function shadow$object$_type(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$object$IObject$_type$arity$1 == null)))))){
return this$.shadow$object$IObject$_type$arity$1(this$);
} else {
return shadow$object$IObject$_type$dyn_34789(this$);
}
});

var shadow$object$IObject$_data$dyn_34790 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (shadow.object._data[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (shadow.object._data["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IObject.-data",this$);
}
}
});
shadow.object._data = (function shadow$object$_data(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$object$IObject$_data$arity$1 == null)))))){
return this$.shadow$object$IObject$_data$arity$1(this$);
} else {
return shadow$object$IObject$_data$dyn_34790(this$);
}
});

var shadow$object$IObject$_update$dyn_34792 = (function (this$,update_fn){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (shadow.object._update[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(this$,update_fn) : m__4551__auto__.call(null,this$,update_fn));
} else {
var m__4549__auto__ = (shadow.object._update["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(this$,update_fn) : m__4549__auto__.call(null,this$,update_fn));
} else {
throw cljs.core.missing_protocol("IObject.-update",this$);
}
}
});
/**
 * update and notify watches
 */
shadow.object._update = (function shadow$object$_update(this$,update_fn){
if((((!((this$ == null)))) && ((!((this$.shadow$object$IObject$_update$arity$2 == null)))))){
return this$.shadow$object$IObject$_update$arity$2(this$,update_fn);
} else {
return shadow$object$IObject$_update$dyn_34792(this$,update_fn);
}
});

var shadow$object$IObject$_destroy_BANG_$dyn_34794 = (function (this$,cause){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (shadow.object._destroy_BANG_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(this$,cause) : m__4551__auto__.call(null,this$,cause));
} else {
var m__4549__auto__ = (shadow.object._destroy_BANG_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(this$,cause) : m__4549__auto__.call(null,this$,cause));
} else {
throw cljs.core.missing_protocol("IObject.-destroy!",this$);
}
}
});
shadow.object._destroy_BANG_ = (function shadow$object$_destroy_BANG_(this$,cause){
if((((!((this$ == null)))) && ((!((this$.shadow$object$IObject$_destroy_BANG_$arity$2 == null)))))){
return this$.shadow$object$IObject$_destroy_BANG_$arity$2(this$,cause);
} else {
return shadow$object$IObject$_destroy_BANG_$dyn_34794(this$,cause);
}
});

shadow.object.get_type = (function shadow$object$get_type(this$){
return shadow.object._type(this$);
});
shadow.object.get_type_attr = (function shadow$object$get_type_attr(var_args){
var G__34071 = arguments.length;
switch (G__34071) {
case 2:
return shadow.object.get_type_attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.object.get_type_attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.object.get_type_attr.cljs$core$IFn$_invoke$arity$2 = (function (oref,key){
if((oref == null)){
return null;
} else {
var type_id = (((oref instanceof cljs.core.Keyword))?oref:shadow.object._type(oref));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.object.object_defs),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type_id,key], null));
}
}));

(shadow.object.get_type_attr.cljs$core$IFn$_invoke$arity$3 = (function (oref,key,default$){
if((oref == null)){
return default$;
} else {
var type_id = (((oref instanceof cljs.core.Keyword))?oref:shadow.object._type(oref));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(shadow.object.object_defs),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type_id,key], null),default$);
}
}));

(shadow.object.get_type_attr.cljs$lang$maxFixedArity = 3);

shadow.object.get_dom = (function shadow$object$get_dom(oref){
return new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311).cljs$core$IFn$_invoke$arity$1(oref);
});
shadow.object.get_by_id = (function shadow$object$get_by_id(id){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.object.instances),id);
});
shadow.object.get_from_dom = (function shadow$object$get_from_dom(dom){
var oid = shadow.dom.data(dom,new cljs.core.Keyword(null,"oid","oid",-768692334));
if(cljs.core.truth_(oid)){
return shadow.object.get_by_id(parseInt(oid,(10)));
} else {
return null;
}
});
shadow.object.is_object_QMARK_ = (function shadow$object$is_object_QMARK_(obj_or_dom){
var or__4253__auto__ = (((!((obj_or_dom == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === obj_or_dom.shadow$object$IObject$))))?true:(((!obj_or_dom.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(shadow.object.IObject,obj_or_dom):false)):cljs.core.native_satisfies_QMARK_(shadow.object.IObject,obj_or_dom));
if(or__4253__auto__){
return or__4253__auto__;
} else {
return shadow.object.get_from_dom(obj_or_dom);
}
});
shadow.object.equal_QMARK_ = (function shadow$object$equal_QMARK_(obj,obj_or_dom){
if((((!((obj == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === obj.shadow$object$IObject$))))?true:(((!obj.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(shadow.object.IObject,obj):false)):cljs.core.native_satisfies_QMARK_(shadow.object.IObject,obj))){
} else {
throw (new Error(["Assert failed: ","can only test objects","\n","(satisfies? IObject obj)"].join('')));
}

if((((!((obj_or_dom == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === obj_or_dom.shadow$object$IObject$))))?true:(((!obj_or_dom.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(shadow.object.IObject,obj_or_dom):false)):cljs.core.native_satisfies_QMARK_(shadow.object.IObject,obj_or_dom))){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.object._id(obj),shadow.object._id(obj_or_dom));
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.object._id(obj),(function (){var temp__5753__auto__ = shadow.dom.data(obj_or_dom,new cljs.core.Keyword(null,"oid","oid",-768692334));
if(cljs.core.truth_(temp__5753__auto__)){
var oid = temp__5753__auto__;
return parseInt(oid,(10));
} else {
return null;
}
})());
}
});
shadow.object.get_parent = (function shadow$object$get_parent(oref){
var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.object.instance_parent),shadow.object._id(oref));
if(cljs.core.truth_(temp__5753__auto__)){
var parent_id = temp__5753__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.object.instances),parent_id);
} else {
return null;
}
});
shadow.object.get_parent_of_type = (function shadow$object$get_parent_of_type(oref,parent_type){
var parent = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(oref);
while(true){
if(cljs.core.truth_(parent)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.object._type(parent),parent_type)){
return parent;
} else {
var G__34813 = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(parent);
parent = G__34813;
continue;
}
} else {
return null;
}
break;
}
});
shadow.object.get_children = (function shadow$object$get_children(parent){
var parent_id = shadow.object._id(parent);
var child_ids = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(shadow.object.instance_children),parent_id,cljs.core.PersistentVector.EMPTY);
var instances = cljs.core.deref(shadow.object.instances);
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__34215_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(instances,p1__34215_SHARP_);
}),child_ids));
});
shadow.object.tree_seq = (function shadow$object$tree_seq(var_args){
var G__34217 = arguments.length;
switch (G__34217) {
case 1:
return shadow.object.tree_seq.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.object.tree_seq.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});
goog.exportSymbol('shadow.object.tree_seq', shadow.object.tree_seq);

(shadow.object.tree_seq.cljs$core$IFn$_invoke$arity$1 = (function (root){
return shadow.object.tree_seq.cljs$core$IFn$_invoke$arity$2(root,(function (node){
return true;
}));
}));

(shadow.object.tree_seq.cljs$core$IFn$_invoke$arity$2 = (function (root,branch_QMARK_){
return cljs.core.tree_seq(branch_QMARK_,shadow.object.get_children,root);
}));

(shadow.object.tree_seq.cljs$lang$maxFixedArity = 2);

shadow.object.get_children_of_type = (function shadow$object$get_children_of_type(oref,type){
var type_kw = (((type instanceof cljs.core.Keyword))?type:shadow.object._type(type));
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__34220_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type_kw,shadow.object._type(p1__34220_SHARP_));
}),shadow.object.get_children(oref));
});
/**
 * basically (get-children (:parent this))
 */
shadow.object.get_siblings = (function shadow$object$get_siblings(p__34234){
var map__34236 = p__34234;
var map__34236__$1 = cljs.core.__destructure_map(map__34236);
var oref = map__34236__$1;
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34236__$1,new cljs.core.Keyword(null,"parent","parent",-878878779));
if(cljs.core.truth_(parent)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("object has no parent, thus has no siblings",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"oref","oref",-1547494840),oref], null));
}

return shadow.object.get_children(parent);
});
/**
 * returns set of all siblings of a common type
 */
shadow.object.get_siblings_of_type = (function shadow$object$get_siblings_of_type(var_args){
var G__34257 = arguments.length;
switch (G__34257) {
case 1:
return shadow.object.get_siblings_of_type.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.object.get_siblings_of_type.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.object.get_siblings_of_type.cljs$core$IFn$_invoke$arity$1 = (function (oref){
return shadow.object.get_siblings_of_type.cljs$core$IFn$_invoke$arity$2(oref,oref);
}));

(shadow.object.get_siblings_of_type.cljs$core$IFn$_invoke$arity$2 = (function (oref,type){
var type_kw = (((type instanceof cljs.core.Keyword))?type:shadow.object._type(type));
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__34248_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type_kw,shadow.object._type(p1__34248_SHARP_));
}),shadow.object.get_siblings(oref));
}));

(shadow.object.get_siblings_of_type.cljs$lang$maxFixedArity = 2);

shadow.object.get_collection_item = (function shadow$object$get_collection_item(oref){
var item_key = new cljs.core.Keyword("shadow.object","coll-item-key","shadow.object/coll-item-key",1888444366).cljs$core$IFn$_invoke$arity$1(oref);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(oref,item_key);
});
/**
 * find the object that contains this dom node
 */
shadow.object.find_containing_object = (function shadow$object$find_containing_object(dom){
while(true){
var temp__5751__auto__ = shadow.object.get_from_dom(dom);
if(cljs.core.truth_(temp__5751__auto__)){
var obj = temp__5751__auto__;
return obj;
} else {
var temp__5753__auto__ = dom.parentElement;
if(cljs.core.truth_(temp__5753__auto__)){
var parent = temp__5753__auto__;
var G__34880 = parent;
dom = G__34880;
continue;
} else {
return null;
}
}
break;
}
});
shadow.object.notify_BANG_ = (function shadow$object$notify_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___34881 = arguments.length;
var i__4865__auto___34884 = (0);
while(true){
if((i__4865__auto___34884 < len__4864__auto___34881)){
args__4870__auto__.push((arguments[i__4865__auto___34884]));

var G__34887 = (i__4865__auto___34884 + (1));
i__4865__auto___34884 = G__34887;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (oref,ev,args){
var temp__5753__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(oref,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.object","reactions","shadow.object/reactions",1966199633),ev], null));
if(cljs.core.truth_(temp__5753__auto__)){
var reactions_to_trigger = temp__5753__auto__;
var seq__34293 = cljs.core.seq(reactions_to_trigger);
var chunk__34294 = null;
var count__34295 = (0);
var i__34296 = (0);
while(true){
if((i__34296 < count__34295)){
var rfn = chunk__34294.cljs$core$IIndexed$_nth$arity$2(null,i__34296);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(rfn,cljs.core.cons(oref,args));


var G__34900 = seq__34293;
var G__34901 = chunk__34294;
var G__34902 = count__34295;
var G__34903 = (i__34296 + (1));
seq__34293 = G__34900;
chunk__34294 = G__34901;
count__34295 = G__34902;
i__34296 = G__34903;
continue;
} else {
var temp__5753__auto____$1 = cljs.core.seq(seq__34293);
if(temp__5753__auto____$1){
var seq__34293__$1 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__34293__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__34293__$1);
var G__34904 = cljs.core.chunk_rest(seq__34293__$1);
var G__34905 = c__4679__auto__;
var G__34906 = cljs.core.count(c__4679__auto__);
var G__34907 = (0);
seq__34293 = G__34904;
chunk__34294 = G__34905;
count__34295 = G__34906;
i__34296 = G__34907;
continue;
} else {
var rfn = cljs.core.first(seq__34293__$1);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(rfn,cljs.core.cons(oref,args));


var G__34908 = cljs.core.next(seq__34293__$1);
var G__34909 = null;
var G__34910 = (0);
var G__34911 = (0);
seq__34293 = G__34908;
chunk__34294 = G__34909;
count__34295 = G__34910;
i__34296 = G__34911;
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
}));

(shadow.object.notify_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.object.notify_BANG_.cljs$lang$applyTo = (function (seq34281){
var G__34282 = cljs.core.first(seq34281);
var seq34281__$1 = cljs.core.next(seq34281);
var G__34283 = cljs.core.first(seq34281__$1);
var seq34281__$2 = cljs.core.next(seq34281__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34282,G__34283,seq34281__$2);
}));

shadow.object.do_notify_tree = (function shadow$object$do_notify_tree(current_obj,ev,notify_fn){
var seq__34298_34931 = cljs.core.seq(shadow.object.get_children(current_obj));
var chunk__34299_34932 = null;
var count__34300_34933 = (0);
var i__34301_34934 = (0);
while(true){
if((i__34301_34934 < count__34300_34933)){
var child_34935 = chunk__34299_34932.cljs$core$IIndexed$_nth$arity$2(null,i__34301_34934);
(shadow.object.do_notify_tree.cljs$core$IFn$_invoke$arity$3 ? shadow.object.do_notify_tree.cljs$core$IFn$_invoke$arity$3(child_34935,ev,notify_fn) : shadow.object.do_notify_tree.call(null,child_34935,ev,notify_fn));


var G__34936 = seq__34298_34931;
var G__34937 = chunk__34299_34932;
var G__34938 = count__34300_34933;
var G__34939 = (i__34301_34934 + (1));
seq__34298_34931 = G__34936;
chunk__34299_34932 = G__34937;
count__34300_34933 = G__34938;
i__34301_34934 = G__34939;
continue;
} else {
var temp__5753__auto___34944 = cljs.core.seq(seq__34298_34931);
if(temp__5753__auto___34944){
var seq__34298_34945__$1 = temp__5753__auto___34944;
if(cljs.core.chunked_seq_QMARK_(seq__34298_34945__$1)){
var c__4679__auto___34950 = cljs.core.chunk_first(seq__34298_34945__$1);
var G__34952 = cljs.core.chunk_rest(seq__34298_34945__$1);
var G__34953 = c__4679__auto___34950;
var G__34954 = cljs.core.count(c__4679__auto___34950);
var G__34955 = (0);
seq__34298_34931 = G__34952;
chunk__34299_34932 = G__34953;
count__34300_34933 = G__34954;
i__34301_34934 = G__34955;
continue;
} else {
var child_34959 = cljs.core.first(seq__34298_34945__$1);
(shadow.object.do_notify_tree.cljs$core$IFn$_invoke$arity$3 ? shadow.object.do_notify_tree.cljs$core$IFn$_invoke$arity$3(child_34959,ev,notify_fn) : shadow.object.do_notify_tree.call(null,child_34959,ev,notify_fn));


var G__34960 = cljs.core.next(seq__34298_34945__$1);
var G__34961 = null;
var G__34962 = (0);
var G__34963 = (0);
seq__34298_34931 = G__34960;
chunk__34299_34932 = G__34961;
count__34300_34933 = G__34962;
i__34301_34934 = G__34963;
continue;
}
} else {
}
}
break;
}

return (notify_fn.cljs$core$IFn$_invoke$arity$1 ? notify_fn.cljs$core$IFn$_invoke$arity$1(current_obj) : notify_fn.call(null,current_obj));
});
shadow.object.notify_tree_BANG_ = (function shadow$object$notify_tree_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___34968 = arguments.length;
var i__4865__auto___34969 = (0);
while(true){
if((i__4865__auto___34969 < len__4864__auto___34968)){
args__4870__auto__.push((arguments[i__4865__auto___34969]));

var G__34970 = (i__4865__auto___34969 + (1));
i__4865__auto___34969 = G__34970;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return shadow.object.notify_tree_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(shadow.object.notify_tree_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (oref,ev,args){
var notify_fn = (function (obj){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(shadow.object.notify_BANG_,obj,ev,args);
});
return shadow.object.do_notify_tree(oref,ev,notify_fn);
}));

(shadow.object.notify_tree_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.object.notify_tree_BANG_.cljs$lang$applyTo = (function (seq34306){
var G__34307 = cljs.core.first(seq34306);
var seq34306__$1 = cljs.core.next(seq34306);
var G__34308 = cljs.core.first(seq34306__$1);
var seq34306__$2 = cljs.core.next(seq34306__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34307,G__34308,seq34306__$2);
}));

shadow.object.notify_down_BANG_ = shadow.object.notify_tree_BANG_;
shadow.object.notify_up_BANG_ = (function shadow$object$notify_up_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___34971 = arguments.length;
var i__4865__auto___34972 = (0);
while(true){
if((i__4865__auto___34972 < len__4864__auto___34971)){
args__4870__auto__.push((arguments[i__4865__auto___34972]));

var G__34973 = (i__4865__auto___34972 + (1));
i__4865__auto___34972 = G__34973;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return shadow.object.notify_up_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(shadow.object.notify_up_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (oref,ev,args){
var current = shadow.object.get_parent(oref);
while(true){
if(cljs.core.truth_(current)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$4(shadow.object.notify_BANG_,current,ev,args);

var G__34975 = shadow.object.get_parent(current);
current = G__34975;
continue;
} else {
return null;
}
break;
}
}));

(shadow.object.notify_up_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.object.notify_up_BANG_.cljs$lang$applyTo = (function (seq34313){
var G__34314 = cljs.core.first(seq34313);
var seq34313__$1 = cljs.core.next(seq34313);
var G__34315 = cljs.core.first(seq34313__$1);
var seq34313__$2 = cljs.core.next(seq34313__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34314,G__34315,seq34313__$2);
}));

shadow.object.update_BANG_ = (function shadow$object$update_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___34976 = arguments.length;
var i__4865__auto___34977 = (0);
while(true){
if((i__4865__auto___34977 < len__4864__auto___34976)){
args__4870__auto__.push((arguments[i__4865__auto___34977]));

var G__34979 = (i__4865__auto___34977 + (1));
i__4865__auto___34977 = G__34979;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (oref,update_fn,args){
if(cljs.core.fn_QMARK_(update_fn)){
} else {
throw ["update! expects a fn as second arg, not ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([update_fn], 0))].join('');
}

var id = shadow.object._id(oref);
var data = shadow.object._data(oref);
var work_fn = (function (data__$1){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(update_fn,data__$1,args);
});
return shadow.object._update(oref,work_fn);
}));

(shadow.object.update_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.object.update_BANG_.cljs$lang$applyTo = (function (seq34339){
var G__34340 = cljs.core.first(seq34339);
var seq34339__$1 = cljs.core.next(seq34339);
var G__34341 = cljs.core.first(seq34339__$1);
var seq34339__$2 = cljs.core.next(seq34339__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34340,G__34341,seq34339__$2);
}));

shadow.object.return_value = (function shadow$object$return_value(oref,return_value){
return shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(oref,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("shadow.object","return-value","shadow.object/return-value",1397593360),return_value], 0));
});
shadow.object.set_parent_BANG_ = (function shadow$object$set_parent_BANG_(child,parent){
var child_id = shadow.object._id(child);
var parent_id = shadow.object._id(parent);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(shadow.object.instance_parent,cljs.core.assoc,child_id,parent_id);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(shadow.object.instance_children,(function (x){
var current = cljs.core.get.cljs$core$IFn$_invoke$arity$3(x,parent_id,cljs.core.PersistentHashSet.EMPTY);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(x,parent_id,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current,child_id));
}));

return true;
});
shadow.object.dom_destroy = (function shadow$object$dom_destroy(this$,cause){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cause,new cljs.core.Keyword(null,"parent","parent",-878878779))){
return shadow.dom.remove(new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311).cljs$core$IFn$_invoke$arity$1(this$));
} else {
var temp__5751__auto__ = shadow.object.get_type_attr.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword("dom","remove","dom/remove",-131527420));
if(cljs.core.truth_(temp__5751__auto__)){
var custom_remove = temp__5751__auto__;
var G__34439 = this$;
var G__34440 = new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311).cljs$core$IFn$_invoke$arity$1(this$);
return (custom_remove.cljs$core$IFn$_invoke$arity$2 ? custom_remove.cljs$core$IFn$_invoke$arity$2(G__34439,G__34440) : custom_remove.call(null,G__34439,G__34440));
} else {
return shadow.dom.remove(new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311).cljs$core$IFn$_invoke$arity$1(this$));
}
}
});
shadow.object.destroy_BANG_ = (function shadow$object$destroy_BANG_(var_args){
var G__34454 = arguments.length;
switch (G__34454) {
case 1:
return shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (oref){
return shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$2(oref,new cljs.core.Keyword(null,"direct","direct",-1775717856));
}));

(shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (oref,cause){
return shadow.object._destroy_BANG_(oref,cause);
}));

(shadow.object.destroy_BANG_.cljs$lang$maxFixedArity = 2);

shadow.object.bind_dom_events = (function shadow$object$bind_dom_events(oref,dom,dom_events){
if((cljs.core.rem(cljs.core.count(dom_events),(2)) === (0))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("object defined invalid event",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"object-type","object-type",-1889869015),shadow.object._type(oref),new cljs.core.Keyword("dom","events","dom/events",1793437527),dom_events], null));
}

var seq__34466 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),dom_events));
var chunk__34467 = null;
var count__34468 = (0);
var i__34469 = (0);
while(true){
if((i__34469 < count__34468)){
var vec__34501 = chunk__34467.cljs$core$IIndexed$_nth$arity$2(null,i__34469);
var ev = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34501,(0),null);
var handler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34501,(1),null);
var ev_def = vec__34501;
if((handler == null)){
throw ["ev with nil handler ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ev], 0))].join('');
} else {
}

var handler_34985__$1 = (((handler instanceof cljs.core.Keyword))?((function (seq__34466,chunk__34467,count__34468,i__34469,vec__34501,ev,handler,ev_def){
return (function (this$,e,el){
return shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,handler,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e,el], 0));
});})(seq__34466,chunk__34467,count__34468,i__34469,vec__34501,ev,handler,ev_def))
:handler);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(dom,ev,((function (seq__34466,chunk__34467,count__34468,i__34469,handler_34985__$1,vec__34501,ev,handler,ev_def){
return (function shadow$object$bind_dom_events_$_dom_event_handler(e,el){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("A",el.tagName)){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);
} else {
}

return (handler_34985__$1.cljs$core$IFn$_invoke$arity$3 ? handler_34985__$1.cljs$core$IFn$_invoke$arity$3(oref,e,el) : handler_34985__$1.call(null,oref,e,el));
});})(seq__34466,chunk__34467,count__34468,i__34469,handler_34985__$1,vec__34501,ev,handler,ev_def))
);


var G__34988 = seq__34466;
var G__34989 = chunk__34467;
var G__34990 = count__34468;
var G__34991 = (i__34469 + (1));
seq__34466 = G__34988;
chunk__34467 = G__34989;
count__34468 = G__34990;
i__34469 = G__34991;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__34466);
if(temp__5753__auto__){
var seq__34466__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34466__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__34466__$1);
var G__34992 = cljs.core.chunk_rest(seq__34466__$1);
var G__34993 = c__4679__auto__;
var G__34994 = cljs.core.count(c__4679__auto__);
var G__34995 = (0);
seq__34466 = G__34992;
chunk__34467 = G__34993;
count__34468 = G__34994;
i__34469 = G__34995;
continue;
} else {
var vec__34507 = cljs.core.first(seq__34466__$1);
var ev = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34507,(0),null);
var handler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34507,(1),null);
var ev_def = vec__34507;
if((handler == null)){
throw ["ev with nil handler ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ev], 0))].join('');
} else {
}

var handler_35000__$1 = (((handler instanceof cljs.core.Keyword))?((function (seq__34466,chunk__34467,count__34468,i__34469,vec__34507,ev,handler,ev_def,seq__34466__$1,temp__5753__auto__){
return (function (this$,e,el){
return shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,handler,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e,el], 0));
});})(seq__34466,chunk__34467,count__34468,i__34469,vec__34507,ev,handler,ev_def,seq__34466__$1,temp__5753__auto__))
:handler);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(dom,ev,((function (seq__34466,chunk__34467,count__34468,i__34469,handler_35000__$1,vec__34507,ev,handler,ev_def,seq__34466__$1,temp__5753__auto__){
return (function shadow$object$bind_dom_events_$_dom_event_handler(e,el){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("A",el.tagName)){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);
} else {
}

return (handler_35000__$1.cljs$core$IFn$_invoke$arity$3 ? handler_35000__$1.cljs$core$IFn$_invoke$arity$3(oref,e,el) : handler_35000__$1.call(null,oref,e,el));
});})(seq__34466,chunk__34467,count__34468,i__34469,handler_35000__$1,vec__34507,ev,handler,ev_def,seq__34466__$1,temp__5753__auto__))
);


var G__35001 = cljs.core.next(seq__34466__$1);
var G__35002 = null;
var G__35003 = (0);
var G__35004 = (0);
seq__34466 = G__35001;
chunk__34467 = G__35002;
count__34468 = G__35003;
i__34469 = G__35004;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.object.reaction_merge = (function shadow$object$reaction_merge(result,p__34520){
var vec__34521 = p__34520;
var event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34521,(0),null);
var handler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34521,(1),null);
if(cljs.core.truth_((function (){var and__4251__auto__ = event;
if(cljs.core.truth_(and__4251__auto__)){
return handler;
} else {
return and__4251__auto__;
}
})())){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid reaction",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event","event",301435442),event,new cljs.core.Keyword(null,"handler","handler",-195596612),handler], null));
}

var current = cljs.core.get.cljs$core$IFn$_invoke$arity$3(result,event,cljs.core.List.EMPTY);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,event,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current,handler));
});
shadow.object.merge_reactions = (function shadow$object$merge_reactions(result,behavior){
if(cljs.core.sequential_QMARK_(behavior)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("behaviors must be vectors",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"behavior","behavior",1202392908),behavior], null));
}

if(cljs.core.even_QMARK_(cljs.core.count(behavior))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid behavior",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"behavior","behavior",1202392908),behavior], null));
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(shadow.object.reaction_merge,result,cljs.core.reverse(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),behavior)));
});
shadow.object.merge_behaviors = (function shadow$object$merge_behaviors(result,behavior){
if(cljs.core.sequential_QMARK_(behavior)){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.object","reactions","shadow.object/reactions",1966199633)], null),shadow.object.merge_reactions,behavior);
} else {
if(cljs.core.map_QMARK_(behavior)){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.object","reactions","shadow.object/reactions",1966199633)], null),shadow.object.merge_reactions,new cljs.core.Keyword(null,"on","on",173873944).cljs$core$IFn$_invoke$arity$2(behavior,cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"watch","watch",380988277)], null),(function (watches){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(watches,new cljs.core.Keyword(null,"watch","watch",380988277).cljs$core$IFn$_invoke$arity$2(behavior,cljs.core.PersistentVector.EMPTY));
})),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","events","dom/events",1793437527)], null),(function (default$){
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(default$,new cljs.core.Keyword("dom","events","dom/events",1793437527).cljs$core$IFn$_invoke$arity$2(behavior,cljs.core.PersistentVector.EMPTY)));
}));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("behavior not understood",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"behavior","behavior",1202392908),behavior], null));

}
}
});
shadow.object.define = (function shadow$object$define(var_args){
var args__4870__auto__ = [];
var len__4864__auto___35012 = arguments.length;
var i__4865__auto___35013 = (0);
while(true){
if((i__4865__auto___35013 < len__4864__auto___35012)){
args__4870__auto__.push((arguments[i__4865__auto___35013]));

var G__35017 = (i__4865__auto___35013 + (1));
i__4865__auto___35013 = G__35017;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return shadow.object.define.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(shadow.object.define.cljs$core$IFn$_invoke$arity$variadic = (function (id,args){
if((id instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("object id needs to be a keyword",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"args","args",1315556576),args], null));
}

if(cljs.core.even_QMARK_(cljs.core.count(args))){
} else {
throw ["invalid object definition ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)," args: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([args], 0))].join('');
}

if(cljs.core.contains_QMARK_(cljs.core.deref(shadow.object.object_defs),id)){
console.warn(["object already defined ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join(''));
} else {
}

try{var odef = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,args);
var reactions = shadow.object.merge_reactions(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"on","on",173873944).cljs$core$IFn$_invoke$arity$2(odef,cljs.core.PersistentVector.EMPTY));
var odef__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(odef,new cljs.core.Keyword("shadow.object","id","shadow.object/id",-647954841),id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("shadow.object","reactions","shadow.object/reactions",1966199633),reactions], 0));
var odef__$2 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(shadow.object.merge_behaviors,odef__$1,cljs.core.reverse(new cljs.core.Keyword(null,"behaviors","behaviors",120724909).cljs$core$IFn$_invoke$arity$2(odef__$1,cljs.core.PersistentVector.EMPTY)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(shadow.object.object_defs,cljs.core.assoc,id,odef__$2);

return odef__$2;
}catch (e34539){if((e34539 instanceof Object)){
var e = e34539;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("failed to define object",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"args","args",1315556576),args], null));
} else {
throw e34539;

}
}}));

(shadow.object.define.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.object.define.cljs$lang$applyTo = (function (seq34532){
var G__34533 = cljs.core.first(seq34532);
var seq34532__$1 = cljs.core.next(seq34532);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34533,seq34532__$1);
}));

shadow.object.merge_defaults = (function shadow$object$merge_defaults(data,type){
var defaults = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.object.object_defs),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,new cljs.core.Keyword(null,"defaults","defaults",976027214)], null));
if((defaults == null)){
return data;
} else {
if(cljs.core.map_QMARK_(defaults)){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([defaults,data], 0));
} else {
if(cljs.core.fn_QMARK_(defaults)){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(defaults.cljs$core$IFn$_invoke$arity$0 ? defaults.cljs$core$IFn$_invoke$arity$0() : defaults.call(null)),data], 0));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid object defaults",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"defaults","defaults",976027214),defaults,new cljs.core.Keyword(null,"type","type",1174270348),type], null));

}
}
}
});
shadow.object.make_dom = (function shadow$object$make_dom(var_args){
var G__34542 = arguments.length;
switch (G__34542) {
case 3:
return shadow.object.make_dom.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.object.make_dom.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.object.make_dom.cljs$core$IFn$_invoke$arity$3 = (function (oref,dom_key,events_key){
return shadow.object.make_dom.cljs$core$IFn$_invoke$arity$4(oref,dom_key,events_key,null);
}));

(shadow.object.make_dom.cljs$core$IFn$_invoke$arity$4 = (function (oref,dom_key,events_key,value){
var dom_fn = (((dom_key instanceof cljs.core.Keyword))?shadow.object.get_type_attr.cljs$core$IFn$_invoke$arity$2(oref,dom_key):dom_key);
var events = (((events_key instanceof cljs.core.Keyword))?shadow.object.get_type_attr.cljs$core$IFn$_invoke$arity$3(oref,events_key,cljs.core.PersistentVector.EMPTY):events_key);
var dom = (function (){var G__34543 = (dom_fn.cljs$core$IFn$_invoke$arity$2 ? dom_fn.cljs$core$IFn$_invoke$arity$2(oref,value) : dom_fn.call(null,oref,value));
return (shadow.dom.build.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.build.cljs$core$IFn$_invoke$arity$1(G__34543) : shadow.dom.build.call(null,G__34543));
})();
shadow.object.bind_dom_events(oref,dom,events);

return dom;
}));

(shadow.object.make_dom.cljs$lang$maxFixedArity = 4);

shadow.object.alive_QMARK_ = (function shadow$object$alive_QMARK_(obj){
return cljs.core.contains_QMARK_(cljs.core.deref(shadow.object.instances),shadow.object._id(obj));
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
shadow.object.Watch = (function (key,handler,__meta,__extmap,__hash){
this.key = key;
this.handler = handler;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.object.Watch.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(shadow.object.Watch.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k34545,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__34549 = k34545;
var G__34549__$1 = (((G__34549 instanceof cljs.core.Keyword))?G__34549.fqn:null);
switch (G__34549__$1) {
case "key":
return self__.key;

break;
case "handler":
return self__.handler;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k34545,else__4505__auto__);

}
}));

(shadow.object.Watch.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__34551){
var vec__34552 = p__34551;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34552,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34552,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(shadow.object.Watch.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#shadow.object.Watch{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"key","key",-1516042587),self__.key],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"handler","handler",-195596612),self__.handler],null))], null),self__.__extmap));
}));

(shadow.object.Watch.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__34544){
var self__ = this;
var G__34544__$1 = this;
return (new cljs.core.RecordIter((0),G__34544__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"handler","handler",-195596612)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.object.Watch.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(shadow.object.Watch.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new shadow.object.Watch(self__.key,self__.handler,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.object.Watch.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.object.Watch.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (-17677043 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(shadow.object.Watch.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this34546,other34547){
var self__ = this;
var this34546__$1 = this;
return (((!((other34547 == null)))) && ((((this34546__$1.constructor === other34547.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34546__$1.key,other34547.key)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34546__$1.handler,other34547.handler)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34546__$1.__extmap,other34547.__extmap)))))))));
}));

(shadow.object.Watch.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),null,new cljs.core.Keyword(null,"handler","handler",-195596612),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new shadow.object.Watch(self__.key,self__.handler,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(shadow.object.Watch.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k34545){
var self__ = this;
var this__4509__auto____$1 = this;
var G__34560 = k34545;
var G__34560__$1 = (((G__34560 instanceof cljs.core.Keyword))?G__34560.fqn:null);
switch (G__34560__$1) {
case "key":
case "handler":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k34545);

}
}));

(shadow.object.Watch.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__34544){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__34567 = cljs.core.keyword_identical_QMARK_;
var expr__34568 = k__4511__auto__;
if(cljs.core.truth_((pred__34567.cljs$core$IFn$_invoke$arity$2 ? pred__34567.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"key","key",-1516042587),expr__34568) : pred__34567.call(null,new cljs.core.Keyword(null,"key","key",-1516042587),expr__34568)))){
return (new shadow.object.Watch(G__34544,self__.handler,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__34567.cljs$core$IFn$_invoke$arity$2 ? pred__34567.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"handler","handler",-195596612),expr__34568) : pred__34567.call(null,new cljs.core.Keyword(null,"handler","handler",-195596612),expr__34568)))){
return (new shadow.object.Watch(self__.key,G__34544,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.object.Watch(self__.key,self__.handler,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__34544),null));
}
}
}));

(shadow.object.Watch.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"key","key",-1516042587),self__.key,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"handler","handler",-195596612),self__.handler,null))], null),self__.__extmap));
}));

(shadow.object.Watch.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__34544){
var self__ = this;
var this__4501__auto____$1 = this;
return (new shadow.object.Watch(self__.key,self__.handler,G__34544,self__.__extmap,self__.__hash));
}));

(shadow.object.Watch.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(shadow.object.Watch.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"key","key",124488940,null),new cljs.core.Symbol(null,"handler","handler",1444934915,null)], null);
}));

(shadow.object.Watch.cljs$lang$type = true);

(shadow.object.Watch.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"shadow.object/Watch",null,(1),null));
}));

(shadow.object.Watch.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"shadow.object/Watch");
}));

/**
 * Positional factory function for shadow.object/Watch.
 */
shadow.object.__GT_Watch = (function shadow$object$__GT_Watch(key,handler){
return (new shadow.object.Watch(key,handler,null,null,null));
});

/**
 * Factory function for shadow.object/Watch, taking a map of keywords to field values.
 */
shadow.object.map__GT_Watch = (function shadow$object$map__GT_Watch(G__34548){
var extmap__4542__auto__ = (function (){var G__34583 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__34548,new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"handler","handler",-195596612)], 0));
if(cljs.core.record_QMARK_(G__34548)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__34583);
} else {
return G__34583;
}
})();
return (new shadow.object.Watch(new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(G__34548),new cljs.core.Keyword(null,"handler","handler",-195596612).cljs$core$IFn$_invoke$arity$1(G__34548),null,cljs.core.not_empty(extmap__4542__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IWatchable}
 * @implements {cljs.core.IEquiv}
 * @implements {shadow.object.IObject}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {shadow.dom.SVGElement}
 * @implements {cljs.core.ILookup}
*/
shadow.object.ObjectRef = (function (id,type,data,watches,result_chan){
this.id = id;
this.type = type;
this.data = data;
this.watches = watches;
this.result_chan = result_chan;
this.cljs$lang$protocol_mask$partition0$ = 2149613824;
this.cljs$lang$protocol_mask$partition1$ = 2;
});
(shadow.object.ObjectRef.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.object.ObjectRef.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (this$,handler){
var self__ = this;
var this$__$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.result_chan,handler);
}));

(shadow.object.ObjectRef.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([this$], 0));
}));

(shadow.object.ObjectRef.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parent","parent",-878878779),k)){
return shadow.object.get_parent(this$__$1);
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.data,k);
}
}));

(shadow.object.ObjectRef.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,d){
var self__ = this;
var this$__$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parent","parent",-878878779),k)){
return shadow.object.get_parent(this$__$1);
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.data,k,d);
}
}));

(shadow.object.ObjectRef.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
return cljs.core._write(writer,["#<ObjectRef {:id ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.id),", :type ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.type),"}>"].join(''));
}));

(shadow.object.ObjectRef.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.object.ObjectRef.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311).cljs$core$IFn$_invoke$arity$1(self__.data);
}));

(shadow.object.ObjectRef.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var self__ = this;
var this$__$1 = this;
return (((other instanceof shadow.object.ObjectRef)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this$__$1.shadow$object$IObject$_id$arity$1(null),shadow.object._id(other))));
}));

(shadow.object.ObjectRef.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.object.ObjectRef.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311).cljs$core$IFn$_invoke$arity$1(self__.data);
}));

(shadow.object.ObjectRef.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var this$__$1 = this;
throw (new Error("who be calling?"));
}));

(shadow.object.ObjectRef.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
return (self__.watches = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.watches,(new shadow.object.Watch(key,f,null,null,null))));
}));

(shadow.object.ObjectRef.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return (self__.watches = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__34590_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(p1__34590_SHARP_));
}),self__.watches));
}));

(shadow.object.ObjectRef.prototype.shadow$object$IObject$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.object.ObjectRef.prototype.shadow$object$IObject$_id$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.id;
}));

(shadow.object.ObjectRef.prototype.shadow$object$IObject$_type$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.type;
}));

(shadow.object.ObjectRef.prototype.shadow$object$IObject$_data$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.data;
}));

(shadow.object.ObjectRef.prototype.shadow$object$IObject$_update$arity$2 = (function (this$,update_fn){
var self__ = this;
var this$__$1 = this;
var old = self__.data;
var new$ = (update_fn.cljs$core$IFn$_invoke$arity$1 ? update_fn.cljs$core$IFn$_invoke$arity$1(self__.data) : update_fn.call(null,self__.data));
(self__.data = new$);

var seq__34627 = cljs.core.seq(self__.watches);
var chunk__34628 = null;
var count__34629 = (0);
var i__34630 = (0);
while(true){
if((i__34630 < count__34629)){
var map__34633 = chunk__34628.cljs$core$IIndexed$_nth$arity$2(null,i__34630);
var map__34633__$1 = cljs.core.__destructure_map(map__34633);
var watch = map__34633__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34633__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34633__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
if(shadow.object.alive_QMARK_(this$__$1)){
(handler.cljs$core$IFn$_invoke$arity$4 ? handler.cljs$core$IFn$_invoke$arity$4(key,this$__$1,old,new$) : handler.call(null,key,this$__$1,old,new$));
} else {
}


var G__35207 = seq__34627;
var G__35208 = chunk__34628;
var G__35209 = count__34629;
var G__35210 = (i__34630 + (1));
seq__34627 = G__35207;
chunk__34628 = G__35208;
count__34629 = G__35209;
i__34630 = G__35210;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__34627);
if(temp__5753__auto__){
var seq__34627__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34627__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__34627__$1);
var G__35211 = cljs.core.chunk_rest(seq__34627__$1);
var G__35212 = c__4679__auto__;
var G__35213 = cljs.core.count(c__4679__auto__);
var G__35214 = (0);
seq__34627 = G__35211;
chunk__34628 = G__35212;
count__34629 = G__35213;
i__34630 = G__35214;
continue;
} else {
var map__34634 = cljs.core.first(seq__34627__$1);
var map__34634__$1 = cljs.core.__destructure_map(map__34634);
var watch = map__34634__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34634__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34634__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
if(shadow.object.alive_QMARK_(this$__$1)){
(handler.cljs$core$IFn$_invoke$arity$4 ? handler.cljs$core$IFn$_invoke$arity$4(key,this$__$1,old,new$) : handler.call(null,key,this$__$1,old,new$));
} else {
}


var G__35218 = cljs.core.next(seq__34627__$1);
var G__35219 = null;
var G__35220 = (0);
var G__35221 = (0);
seq__34627 = G__35218;
chunk__34628 = G__35219;
count__34629 = G__35220;
i__34630 = G__35221;
continue;
}
} else {
return null;
}
}
break;
}
}));

(shadow.object.ObjectRef.prototype.shadow$object$IObject$_destroy_BANG_$arity$2 = (function (this$,cause){
var self__ = this;
var this$__$1 = this;
var parent_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.object.instance_parent),self__.id);
var seq__34635_35224 = cljs.core.seq(shadow.object.get_children(this$__$1));
var chunk__34636_35225 = null;
var count__34637_35226 = (0);
var i__34638_35227 = (0);
while(true){
if((i__34638_35227 < count__34637_35226)){
var child_35230 = chunk__34636_35225.cljs$core$IIndexed$_nth$arity$2(null,i__34638_35227);
shadow.object._destroy_BANG_(child_35230,new cljs.core.Keyword(null,"parent","parent",-878878779));


var G__35231 = seq__34635_35224;
var G__35232 = chunk__34636_35225;
var G__35233 = count__34637_35226;
var G__35234 = (i__34638_35227 + (1));
seq__34635_35224 = G__35231;
chunk__34636_35225 = G__35232;
count__34637_35226 = G__35233;
i__34638_35227 = G__35234;
continue;
} else {
var temp__5753__auto___35235 = cljs.core.seq(seq__34635_35224);
if(temp__5753__auto___35235){
var seq__34635_35236__$1 = temp__5753__auto___35235;
if(cljs.core.chunked_seq_QMARK_(seq__34635_35236__$1)){
var c__4679__auto___35237 = cljs.core.chunk_first(seq__34635_35236__$1);
var G__35238 = cljs.core.chunk_rest(seq__34635_35236__$1);
var G__35239 = c__4679__auto___35237;
var G__35240 = cljs.core.count(c__4679__auto___35237);
var G__35241 = (0);
seq__34635_35224 = G__35238;
chunk__34636_35225 = G__35239;
count__34637_35226 = G__35240;
i__34638_35227 = G__35241;
continue;
} else {
var child_35242 = cljs.core.first(seq__34635_35236__$1);
shadow.object._destroy_BANG_(child_35242,new cljs.core.Keyword(null,"parent","parent",-878878779));


var G__35243 = cljs.core.next(seq__34635_35236__$1);
var G__35244 = null;
var G__35245 = (0);
var G__35246 = (0);
seq__34635_35224 = G__35243;
chunk__34636_35225 = G__35244;
count__34637_35226 = G__35245;
i__34638_35227 = G__35246;
continue;
}
} else {
}
}
break;
}

shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$__$1,new cljs.core.Keyword(null,"destroy","destroy",-843660405),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cause], 0));

shadow.object.dom_destroy(this$__$1,cause);

var return_value_35247 = new cljs.core.Keyword("shadow.object","return-value","shadow.object/return-value",1397593360).cljs$core$IFn$_invoke$arity$1(this$__$1);
if((return_value_35247 == null)){
} else {
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.result_chan,return_value_35247);
}

cljs.core.async.close_BANG_(self__.result_chan);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(shadow.object.instances,cljs.core.dissoc,self__.id);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(shadow.object.instance_parent,cljs.core.dissoc,self__.id);

if(cljs.core.truth_(parent_id)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(shadow.object.instance_children,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [parent_id], null),cljs.core.disj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.id], 0));
} else {
return null;
}
}));

(shadow.object.ObjectRef.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.data;
}));

(shadow.object.ObjectRef.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"type","type",-1480165421,null),cljs.core.with_meta(new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"watches","watches",1367433992,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"result-chan","result-chan",3070926,null)], null);
}));

(shadow.object.ObjectRef.cljs$lang$type = true);

(shadow.object.ObjectRef.cljs$lang$ctorStr = "shadow.object/ObjectRef");

(shadow.object.ObjectRef.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"shadow.object/ObjectRef");
}));

/**
 * Positional factory function for shadow.object/ObjectRef.
 */
shadow.object.__GT_ObjectRef = (function shadow$object$__GT_ObjectRef(id,type,data,watches,result_chan){
return (new shadow.object.ObjectRef(id,type,data,watches,result_chan));
});

shadow.object.add_reaction_BANG_ = (function shadow$object$add_reaction_BANG_(var_args){
var G__34644 = arguments.length;
switch (G__34644) {
case 3:
return shadow.object.add_reaction_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return shadow.object.add_reaction_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.object.add_reaction_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (oref,ev,handler_fn){
return shadow.object.add_reaction_BANG_.cljs$core$IFn$_invoke$arity$2(oref,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ev,handler_fn], null));
}));

(shadow.object.add_reaction_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (oref,list){
return shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(oref,cljs.core.update_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.object","reactions","shadow.object/reactions",1966199633)], null),shadow.object.merge_reactions,list], 0));
}));

(shadow.object.add_reaction_BANG_.cljs$lang$maxFixedArity = 3);

shadow.object.bind_change = (function shadow$object$bind_change(var_args){
var G__34649 = arguments.length;
switch (G__34649) {
case 3:
return shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.object.bind_change.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3 = (function (oref,attr,callback){
return shadow.object.bind_change.cljs$core$IFn$_invoke$arity$4(oref,attr,callback,cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("bind-change"));
}));

(shadow.object.bind_change.cljs$core$IFn$_invoke$arity$4 = (function (oref,attr,callback,watch_key){
if((((!((oref == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === oref.shadow$object$IObject$))))?true:(((!oref.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(shadow.object.IObject,oref):false)):cljs.core.native_satisfies_QMARK_(shadow.object.IObject,oref))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("binding currently only supports shadow objects, other atoms might leak, may add later",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oref","oref",-1547494840),oref,new cljs.core.Keyword(null,"attr","attr",-604132353),attr], null));
}

var attr__$1 = ((cljs.core.sequential_QMARK_(attr))?attr:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr], null));
return cljs.core.add_watch(oref,watch_key,(function shadow$object$bind_change_watch(_,___$1,old,new$){
var ov = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(old,attr__$1);
var nv = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new$,attr__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ov,nv)){
return null;
} else {
return (callback.cljs$core$IFn$_invoke$arity$2 ? callback.cljs$core$IFn$_invoke$arity$2(ov,nv) : callback.call(null,ov,nv));
}
}));
}));

(shadow.object.bind_change.cljs$lang$maxFixedArity = 4);

shadow.object.dom_enter = (function shadow$object$dom_enter(parent,child){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(parent,child);

if(cljs.core.truth_(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1(parent))){
return shadow.object.notify_tree_BANG_(child,new cljs.core.Keyword("dom","entered","dom/entered",506699596));
} else {
return null;
}
});
shadow.object.create = (function shadow$object$create(var_args){
var args__4870__auto__ = [];
var len__4864__auto___35254 = arguments.length;
var i__4865__auto___35255 = (0);
while(true){
if((i__4865__auto___35255 < len__4864__auto___35254)){
args__4870__auto__.push((arguments[i__4865__auto___35255]));

var G__35256 = (i__4865__auto___35255 + (1));
i__4865__auto___35255 = G__35256;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return shadow.object.create.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(shadow.object.create.cljs$core$IFn$_invoke$arity$variadic = (function (type,args,node_children){
if(cljs.core.contains_QMARK_(cljs.core.deref(shadow.object.object_defs),type)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["cannot create unknown child type: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"args","args",1315556576),args], null));
}

if(cljs.core.map_QMARK_(args)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("so/create second arg must be a map",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"args","args",1315556576),args], null));
}

var oid = shadow.object.next_id();
var parent = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(args);
var result_chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var odef = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.object.object_defs),type);
var obj = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(shadow.object.merge_defaults(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(args,new cljs.core.Keyword("shadow.object","object-id","shadow.object/object-id",-685993804),oid,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("shadow.object","reactions","shadow.object/reactions",1966199633),cljs.core.get.cljs$core$IFn$_invoke$arity$3(odef,new cljs.core.Keyword("shadow.object","reactions","shadow.object/reactions",1966199633),cljs.core.PersistentArrayMap.EMPTY)], 0)),type),new cljs.core.Keyword(null,"parent","parent",-878878779),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dom","dom",-1236537922)], 0));
var oref = (new shadow.object.ObjectRef(oid,type,obj,cljs.core.PersistentVector.EMPTY,result_chan));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(shadow.object.instances,cljs.core.assoc,oid,oref);

if(cljs.core.truth_(parent)){
shadow.object.set_parent_BANG_(oref,parent);
} else {
}

shadow.object.notify_BANG_(oref,new cljs.core.Keyword(null,"init","init",-1875481434));

var dom_events_35257 = new cljs.core.Keyword("dom","events","dom/events",1793437527).cljs$core$IFn$_invoke$arity$2(odef,cljs.core.PersistentVector.EMPTY);
var temp__5751__auto___35258 = new cljs.core.Keyword(null,"dom","dom",-1236537922).cljs$core$IFn$_invoke$arity$1(args);
if(cljs.core.truth_(temp__5751__auto___35258)){
var dom_35259 = temp__5751__auto___35258;
shadow.dom.set_data(dom_35259,new cljs.core.Keyword(null,"oid","oid",-768692334),oid);

shadow.object.bind_dom_events(oref,dom_35259,dom_events_35257);

shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(oref,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311),dom_35259], 0));

shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic(oref,new cljs.core.Keyword("dom","init","dom/init",-1875647652),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([dom_35259], 0));
} else {
var temp__5753__auto___35261 = new cljs.core.Keyword(null,"dom","dom",-1236537922).cljs$core$IFn$_invoke$arity$1(odef);
if(cljs.core.truth_(temp__5753__auto___35261)){
var dom_fn_35262 = temp__5753__auto___35261;
var dom_35263 = (function (){var G__34665 = (dom_fn_35262.cljs$core$IFn$_invoke$arity$2 ? dom_fn_35262.cljs$core$IFn$_invoke$arity$2(oref,node_children) : dom_fn_35262.call(null,oref,node_children));
return (shadow.dom.build.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.build.cljs$core$IFn$_invoke$arity$1(G__34665) : shadow.dom.build.call(null,G__34665));
})();
shadow.dom.set_data(dom_35263,new cljs.core.Keyword(null,"oid","oid",-768692334),oid);

shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(oref,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311),dom_35263], 0));

shadow.object.bind_dom_events(oref,dom_35263,dom_events_35257);

shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic(oref,new cljs.core.Keyword("dom","init","dom/init",-1875647652),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([dom_35263], 0));
} else {
}
}

var temp__5753__auto___35264 = new cljs.core.Keyword(null,"watch","watch",380988277).cljs$core$IFn$_invoke$arity$1(odef);
if(cljs.core.truth_(temp__5753__auto___35264)){
var watches_35265 = temp__5753__auto___35264;
var seq__34666_35266 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),watches_35265));
var chunk__34667_35267 = null;
var count__34668_35268 = (0);
var i__34669_35269 = (0);
while(true){
if((i__34669_35269 < count__34668_35268)){
var vec__34676_35271 = chunk__34667_35267.cljs$core$IIndexed$_nth$arity$2(null,i__34669_35269);
var attr_35272 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34676_35271,(0),null);
var handler_35273 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34676_35271,(1),null);
shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3(oref,attr_35272,((function (seq__34666_35266,chunk__34667_35267,count__34668_35268,i__34669_35269,vec__34676_35271,attr_35272,handler_35273,watches_35265,temp__5753__auto___35264,oid,parent,result_chan,odef,obj,oref){
return (function (old,new$){
return (handler_35273.cljs$core$IFn$_invoke$arity$3 ? handler_35273.cljs$core$IFn$_invoke$arity$3(oref,old,new$) : handler_35273.call(null,oref,old,new$));
});})(seq__34666_35266,chunk__34667_35267,count__34668_35268,i__34669_35269,vec__34676_35271,attr_35272,handler_35273,watches_35265,temp__5753__auto___35264,oid,parent,result_chan,odef,obj,oref))
);


var G__35275 = seq__34666_35266;
var G__35276 = chunk__34667_35267;
var G__35277 = count__34668_35268;
var G__35278 = (i__34669_35269 + (1));
seq__34666_35266 = G__35275;
chunk__34667_35267 = G__35276;
count__34668_35268 = G__35277;
i__34669_35269 = G__35278;
continue;
} else {
var temp__5753__auto___35279__$1 = cljs.core.seq(seq__34666_35266);
if(temp__5753__auto___35279__$1){
var seq__34666_35280__$1 = temp__5753__auto___35279__$1;
if(cljs.core.chunked_seq_QMARK_(seq__34666_35280__$1)){
var c__4679__auto___35281 = cljs.core.chunk_first(seq__34666_35280__$1);
var G__35282 = cljs.core.chunk_rest(seq__34666_35280__$1);
var G__35283 = c__4679__auto___35281;
var G__35284 = cljs.core.count(c__4679__auto___35281);
var G__35285 = (0);
seq__34666_35266 = G__35282;
chunk__34667_35267 = G__35283;
count__34668_35268 = G__35284;
i__34669_35269 = G__35285;
continue;
} else {
var vec__34679_35286 = cljs.core.first(seq__34666_35280__$1);
var attr_35287 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34679_35286,(0),null);
var handler_35288 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34679_35286,(1),null);
shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3(oref,attr_35287,((function (seq__34666_35266,chunk__34667_35267,count__34668_35268,i__34669_35269,vec__34679_35286,attr_35287,handler_35288,seq__34666_35280__$1,temp__5753__auto___35279__$1,watches_35265,temp__5753__auto___35264,oid,parent,result_chan,odef,obj,oref){
return (function (old,new$){
return (handler_35288.cljs$core$IFn$_invoke$arity$3 ? handler_35288.cljs$core$IFn$_invoke$arity$3(oref,old,new$) : handler_35288.call(null,oref,old,new$));
});})(seq__34666_35266,chunk__34667_35267,count__34668_35268,i__34669_35269,vec__34679_35286,attr_35287,handler_35288,seq__34666_35280__$1,temp__5753__auto___35279__$1,watches_35265,temp__5753__auto___35264,oid,parent,result_chan,odef,obj,oref))
);


var G__35289 = cljs.core.next(seq__34666_35280__$1);
var G__35290 = null;
var G__35291 = (0);
var G__35292 = (0);
seq__34666_35266 = G__35289;
chunk__34667_35267 = G__35290;
count__34668_35268 = G__35291;
i__34669_35269 = G__35292;
continue;
}
} else {
}
}
break;
}
} else {
}

return oref;
}));

(shadow.object.create.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.object.create.cljs$lang$applyTo = (function (seq34652){
var G__34653 = cljs.core.first(seq34652);
var seq34652__$1 = cljs.core.next(seq34652);
var G__34654 = cljs.core.first(seq34652__$1);
var seq34652__$2 = cljs.core.next(seq34652__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34653,G__34654,seq34652__$2);
}));

/**
 * [oref attr node-gen] produces a node via (node-gen new-value)
 * watches obj for changes and replaces the generated node on change (node-gen defaults to str)
 * 
 *   only use if the node has no attached behavior like clicks, use bind with an extra object for those
 */
shadow.object.bind_simple = (function shadow$object$bind_simple(var_args){
var G__34684 = arguments.length;
switch (G__34684) {
case 2:
return shadow.object.bind_simple.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.object.bind_simple.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.object.bind_simple.cljs$core$IFn$_invoke$arity$2 = (function (oref,attr){
return shadow.object.bind_simple.cljs$core$IFn$_invoke$arity$3(oref,attr,cljs.core.str);
}));

(shadow.object.bind_simple.cljs$core$IFn$_invoke$arity$3 = (function (oref,attr,node_gen){
var attr__$1 = ((cljs.core.sequential_QMARK_(attr))?attr:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr], null));
var node_get = (function (p1__34682_SHARP_){
var G__34685 = (node_gen.cljs$core$IFn$_invoke$arity$1 ? node_gen.cljs$core$IFn$_invoke$arity$1(p1__34682_SHARP_) : node_gen.call(null,p1__34682_SHARP_));
return (shadow.dom.build.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.build.cljs$core$IFn$_invoke$arity$1(G__34685) : shadow.dom.build.call(null,G__34685));
});
var node = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(node_get(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(oref,attr__$1)));
var bind_key = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("bind");
shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3(oref,attr__$1,(function (old,new$){
var new_node = node_get(new$);
var current_node = cljs.core.deref(node);
shadow.dom.replace_node(current_node,new_node);

return cljs.core.reset_BANG_(node,new_node);
}));

return cljs.core.deref(node);
}));

(shadow.object.bind_simple.cljs$lang$maxFixedArity = 3);

/**
 * bind the given attribute a child item
 *   the item will be recreated whenever the value changes (old one will be destroyed)
 */
shadow.object.bind = (function shadow$object$bind(oref,attr,item_type,item_key,item_attrs){
var attr__$1 = ((cljs.core.sequential_QMARK_(attr))?attr:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr], null));
var curval = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(oref,attr__$1);
var make_child_fn = (function (value){
return shadow.object.create(item_type,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([item_attrs,cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"parent","parent",-878878779),oref,item_key,value])], 0)));
});
var child = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(make_child_fn(curval));
shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3(oref,attr__$1,(function (old,new$){
var new_child = make_child_fn(new$);
var current_node = cljs.core.deref(child);
shadow.dom.replace_node(current_node,new_child);

shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(child));

cljs.core.reset_BANG_(child,new_child);

return (shadow.object.notify_down_BANG_.cljs$core$IFn$_invoke$arity$2 ? shadow.object.notify_down_BANG_.cljs$core$IFn$_invoke$arity$2(new_child,new cljs.core.Keyword("dom","entered","dom/entered",506699596)) : shadow.object.notify_down_BANG_.call(null,new_child,new cljs.core.Keyword("dom","entered","dom/entered",506699596)));
}));

return cljs.core.deref(child);
});
shadow.object.coll_destroy_children = (function shadow$object$coll_destroy_children(children,c,diff){
var seq__34686_35300 = cljs.core.seq(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(children,(c + diff),c));
var chunk__34687_35301 = null;
var count__34688_35302 = (0);
var i__34689_35303 = (0);
while(true){
if((i__34689_35303 < count__34688_35302)){
var obj_35304 = chunk__34687_35301.cljs$core$IIndexed$_nth$arity$2(null,i__34689_35303);
var obj_35305__$1 = shadow.object.get_from_dom(obj_35304);
shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$1(obj_35305__$1);


var G__35306 = seq__34686_35300;
var G__35307 = chunk__34687_35301;
var G__35308 = count__34688_35302;
var G__35309 = (i__34689_35303 + (1));
seq__34686_35300 = G__35306;
chunk__34687_35301 = G__35307;
count__34688_35302 = G__35308;
i__34689_35303 = G__35309;
continue;
} else {
var temp__5753__auto___35311 = cljs.core.seq(seq__34686_35300);
if(temp__5753__auto___35311){
var seq__34686_35313__$1 = temp__5753__auto___35311;
if(cljs.core.chunked_seq_QMARK_(seq__34686_35313__$1)){
var c__4679__auto___35314 = cljs.core.chunk_first(seq__34686_35313__$1);
var G__35315 = cljs.core.chunk_rest(seq__34686_35313__$1);
var G__35316 = c__4679__auto___35314;
var G__35317 = cljs.core.count(c__4679__auto___35314);
var G__35318 = (0);
seq__34686_35300 = G__35315;
chunk__34687_35301 = G__35316;
count__34688_35302 = G__35317;
i__34689_35303 = G__35318;
continue;
} else {
var obj_35319 = cljs.core.first(seq__34686_35313__$1);
var obj_35320__$1 = shadow.object.get_from_dom(obj_35319);
shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$1(obj_35320__$1);


var G__35321 = cljs.core.next(seq__34686_35313__$1);
var G__35322 = null;
var G__35323 = (0);
var G__35324 = (0);
seq__34686_35300 = G__35321;
chunk__34687_35301 = G__35322;
count__34688_35302 = G__35323;
i__34689_35303 = G__35324;
continue;
}
} else {
}
}
break;
}

return cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(children,(0),(c + diff));
});
shadow.object.bind_children = (function shadow$object$bind_children(var_args){
var G__34696 = arguments.length;
switch (G__34696) {
case 5:
return shadow.object.bind_children.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return shadow.object.bind_children.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.object.bind_children.cljs$core$IFn$_invoke$arity$5 = (function (node,parent,attr,item_type,item_key){
return shadow.object.bind_children.cljs$core$IFn$_invoke$arity$6(node,parent,attr,item_type,item_key,(function (p1__34690_SHARP_){
return cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,p1__34690_SHARP_);
}));
}));

(shadow.object.bind_children.cljs$core$IFn$_invoke$arity$6 = (function (node,parent,attr,item_type,item_key,coll_transform){
var attr__$1 = ((cljs.core.sequential_QMARK_(attr))?attr:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr], null));
var update_children = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
var coll_dom = (shadow.dom.build.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.build.cljs$core$IFn$_invoke$arity$1(node) : shadow.dom.build.call(null,node));
var make_item_fn = (function (p__34701){
var vec__34702 = p__34701;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34702,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34702,(1),null);
var obj = shadow.object.create(item_type,cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"parent","parent",-878878779),parent,new cljs.core.Keyword("shadow.object","coll-path","shadow.object/coll-path",1583850048),attr__$1,new cljs.core.Keyword("shadow.object","coll-key","shadow.object/coll-key",827543616),key,new cljs.core.Keyword("shadow.object","coll-item-key","shadow.object/coll-item-key",1888444366),item_key,item_key,val]));
shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3(obj,item_key,(function (old,new$){
var parent_key = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(attr__$1,new cljs.core.Keyword("shadow.object","coll-key","shadow.object/coll-key",827543616).cljs$core$IFn$_invoke$arity$1(obj));
(shadow.object.log.cljs$core$IFn$_invoke$arity$6 ? shadow.object.log.cljs$core$IFn$_invoke$arity$6("direct child update",parent,obj,key,parent_key,new$) : shadow.object.log.call(null,"direct child update",parent,obj,key,parent_key,new$));

cljs.core.reset_BANG_(update_children,false);

shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(parent,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([parent_key,new$], 0));

return cljs.core.reset_BANG_(update_children,true);
}));

return obj;
});
var seq__34705_35327 = cljs.core.seq((function (){var G__34710 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parent,attr__$1);
return (coll_transform.cljs$core$IFn$_invoke$arity$1 ? coll_transform.cljs$core$IFn$_invoke$arity$1(G__34710) : coll_transform.call(null,G__34710));
})());
var chunk__34706_35328 = null;
var count__34707_35329 = (0);
var i__34708_35330 = (0);
while(true){
if((i__34708_35330 < count__34707_35329)){
var item_35331 = chunk__34706_35328.cljs$core$IIndexed$_nth$arity$2(null,i__34708_35330);
shadow.object.dom_enter(coll_dom,make_item_fn(item_35331));


var G__35332 = seq__34705_35327;
var G__35333 = chunk__34706_35328;
var G__35334 = count__34707_35329;
var G__35335 = (i__34708_35330 + (1));
seq__34705_35327 = G__35332;
chunk__34706_35328 = G__35333;
count__34707_35329 = G__35334;
i__34708_35330 = G__35335;
continue;
} else {
var temp__5753__auto___35336 = cljs.core.seq(seq__34705_35327);
if(temp__5753__auto___35336){
var seq__34705_35337__$1 = temp__5753__auto___35336;
if(cljs.core.chunked_seq_QMARK_(seq__34705_35337__$1)){
var c__4679__auto___35338 = cljs.core.chunk_first(seq__34705_35337__$1);
var G__35339 = cljs.core.chunk_rest(seq__34705_35337__$1);
var G__35340 = c__4679__auto___35338;
var G__35341 = cljs.core.count(c__4679__auto___35338);
var G__35342 = (0);
seq__34705_35327 = G__35339;
chunk__34706_35328 = G__35340;
count__34707_35329 = G__35341;
i__34708_35330 = G__35342;
continue;
} else {
var item_35344 = cljs.core.first(seq__34705_35337__$1);
shadow.object.dom_enter(coll_dom,make_item_fn(item_35344));


var G__35345 = cljs.core.next(seq__34705_35337__$1);
var G__35346 = null;
var G__35347 = (0);
var G__35348 = (0);
seq__34705_35327 = G__35345;
chunk__34706_35328 = G__35346;
count__34707_35329 = G__35347;
i__34708_35330 = G__35348;
continue;
}
} else {
}
}
break;
}

shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3(parent,attr__$1,(function shadow$object$bind_children_watch(old,new$){
if(cljs.core.truth_(cljs.core.deref(update_children))){
var children = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,shadow.dom.children(coll_dom));
var new_coll = cljs.core.vec((coll_transform.cljs$core$IFn$_invoke$arity$1 ? coll_transform.cljs$core$IFn$_invoke$arity$1(new$) : coll_transform.call(null,new$)));
var count_children = cljs.core.count(children);
var count_new = cljs.core.count(new$);
var diff = (count_new - count_children);
var children__$1 = (((diff < (0)))?shadow.object.coll_destroy_children(children,count_children,diff):children);
var count_children__$1 = (function (){var x__4339__auto__ = count_new;
var y__4340__auto__ = count_children;
return ((x__4339__auto__ < y__4340__auto__) ? x__4339__auto__ : y__4340__auto__);
})();
var n__4741__auto___35350 = count_children__$1;
var idx_35351 = (0);
while(true){
if((idx_35351 < n__4741__auto___35350)){
var cn_35352 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children__$1,idx_35351);
var cc_35353 = shadow.object.get_from_dom(cn_35352);
var ckey_35354 = new cljs.core.Keyword("shadow.object","coll-key","shadow.object/coll-key",827543616).cljs$core$IFn$_invoke$arity$1(cc_35353);
var cval_35355 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cc_35353,item_key);
var vec__34711_35356 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new_coll,idx_35351);
var nkey_35357 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34711_35356,(0),null);
var nval_35358 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34711_35356,(1),null);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ckey_35354,nkey_35357)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cval_35355,nval_35358)))){
} else {
var new_obj_35361 = make_item_fn(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nkey_35357,nval_35358], null));
shadow.dom.replace_node(cn_35352,new_obj_35361);

shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$1(cc_35353);

shadow.object.notify_tree_BANG_(new_obj_35361,new cljs.core.Keyword("dom","entered","dom/entered",506699596));
}

var G__35362 = (idx_35351 + (1));
idx_35351 = G__35362;
continue;
} else {
}
break;
}

if((diff > (0))){
var seq__34717_35363 = cljs.core.seq(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(new_coll,count_children__$1,count_new));
var chunk__34718_35364 = null;
var count__34719_35365 = (0);
var i__34720_35366 = (0);
while(true){
if((i__34720_35366 < count__34719_35365)){
var item_35367 = chunk__34718_35364.cljs$core$IIndexed$_nth$arity$2(null,i__34720_35366);
shadow.object.dom_enter(coll_dom,make_item_fn(item_35367));


var G__35368 = seq__34717_35363;
var G__35369 = chunk__34718_35364;
var G__35370 = count__34719_35365;
var G__35371 = (i__34720_35366 + (1));
seq__34717_35363 = G__35368;
chunk__34718_35364 = G__35369;
count__34719_35365 = G__35370;
i__34720_35366 = G__35371;
continue;
} else {
var temp__5753__auto___35372 = cljs.core.seq(seq__34717_35363);
if(temp__5753__auto___35372){
var seq__34717_35373__$1 = temp__5753__auto___35372;
if(cljs.core.chunked_seq_QMARK_(seq__34717_35373__$1)){
var c__4679__auto___35374 = cljs.core.chunk_first(seq__34717_35373__$1);
var G__35375 = cljs.core.chunk_rest(seq__34717_35373__$1);
var G__35376 = c__4679__auto___35374;
var G__35377 = cljs.core.count(c__4679__auto___35374);
var G__35378 = (0);
seq__34717_35363 = G__35375;
chunk__34718_35364 = G__35376;
count__34719_35365 = G__35377;
i__34720_35366 = G__35378;
continue;
} else {
var item_35379 = cljs.core.first(seq__34717_35373__$1);
shadow.object.dom_enter(coll_dom,make_item_fn(item_35379));


var G__35383 = cljs.core.next(seq__34717_35373__$1);
var G__35384 = null;
var G__35385 = (0);
var G__35386 = (0);
seq__34717_35363 = G__35383;
chunk__34718_35364 = G__35384;
count__34719_35365 = G__35385;
i__34720_35366 = G__35386;
continue;
}
} else {
}
}
break;
}
} else {
}

return shadow.object.notify_BANG_(parent,new cljs.core.Keyword(null,"bind-children-update","bind-children-update",-1610690160));
} else {
return null;
}
}));

return coll_dom;
}));

(shadow.object.bind_children.cljs$lang$maxFixedArity = 6);

shadow.object.remove_in_parent_BANG_ = (function shadow$object$remove_in_parent_BANG_(oref){
var parent = shadow.object.get_parent(oref);
var key = new cljs.core.Keyword("shadow.object","coll-key","shadow.object/coll-key",827543616).cljs$core$IFn$_invoke$arity$1(oref);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(oref,new cljs.core.Keyword("shadow.object","coll-item-key","shadow.object/coll-item-key",1888444366).cljs$core$IFn$_invoke$arity$1(oref));
var path = new cljs.core.Keyword("shadow.object","coll-path","shadow.object/coll-path",1583850048).cljs$core$IFn$_invoke$arity$1(oref);
if(cljs.core.truth_((function (){var and__4251__auto__ = key;
if(cljs.core.truth_(and__4251__auto__)){
return path;
} else {
return and__4251__auto__;
}
})())){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("remove-in-parent! should only be called from items created via so/bind-children",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"oref","oref",-1547494840),oref], null));
}

var coll = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parent,path);
var new_coll = shadow.util.remove_item_from_coll(coll,key,value);
return shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic(parent,new cljs.core.Keyword("bind","update","bind/update",1048601733),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path,new_coll], 0));
});
shadow.object.inspect_BANG_ = (function shadow$object$inspect_BANG_(oref){
var G__34721 = "inspect!";
var G__34722 = shadow.object._id(oref);
var G__34723 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.object._type(oref));
var G__34724 = cljs.core.clj__GT_js(cljs.core.deref(shadow.object._data(oref)));
return (shadow.object.info.cljs$core$IFn$_invoke$arity$4 ? shadow.object.info.cljs$core$IFn$_invoke$arity$4(G__34721,G__34722,G__34723,G__34724) : shadow.object.info.call(null,G__34721,G__34722,G__34723,G__34724));
});
shadow.object.dump_BANG_ = (function shadow$object$dump_BANG_(){
(shadow.object.info.cljs$core$IFn$_invoke$arity$1 ? shadow.object.info.cljs$core$IFn$_invoke$arity$1("--------------- LIVE OBJECTS ------------") : shadow.object.info.call(null,"--------------- LIVE OBJECTS ------------"));

var seq__34725_35393 = cljs.core.seq(cljs.core.seq(cljs.core.deref(shadow.object.instances)));
var chunk__34726_35394 = null;
var count__34727_35395 = (0);
var i__34728_35396 = (0);
while(true){
if((i__34728_35396 < count__34727_35395)){
var vec__34746_35397 = chunk__34726_35394.cljs$core$IIndexed$_nth$arity$2(null,i__34728_35396);
var id_35398 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34746_35397,(0),null);
var oref_35399 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34746_35397,(1),null);
var G__34749_35400 = "dump";
var G__34750_35401 = id_35398;
var G__34751_35402 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.object._type(oref_35399)], 0));
var G__34752_35403 = cljs.core.deref(shadow.object._data(oref_35399));
(shadow.object.info.cljs$core$IFn$_invoke$arity$4 ? shadow.object.info.cljs$core$IFn$_invoke$arity$4(G__34749_35400,G__34750_35401,G__34751_35402,G__34752_35403) : shadow.object.info.call(null,G__34749_35400,G__34750_35401,G__34751_35402,G__34752_35403));


var G__35405 = seq__34725_35393;
var G__35406 = chunk__34726_35394;
var G__35407 = count__34727_35395;
var G__35408 = (i__34728_35396 + (1));
seq__34725_35393 = G__35405;
chunk__34726_35394 = G__35406;
count__34727_35395 = G__35407;
i__34728_35396 = G__35408;
continue;
} else {
var temp__5753__auto___35409 = cljs.core.seq(seq__34725_35393);
if(temp__5753__auto___35409){
var seq__34725_35411__$1 = temp__5753__auto___35409;
if(cljs.core.chunked_seq_QMARK_(seq__34725_35411__$1)){
var c__4679__auto___35412 = cljs.core.chunk_first(seq__34725_35411__$1);
var G__35413 = cljs.core.chunk_rest(seq__34725_35411__$1);
var G__35414 = c__4679__auto___35412;
var G__35415 = cljs.core.count(c__4679__auto___35412);
var G__35416 = (0);
seq__34725_35393 = G__35413;
chunk__34726_35394 = G__35414;
count__34727_35395 = G__35415;
i__34728_35396 = G__35416;
continue;
} else {
var vec__34753_35417 = cljs.core.first(seq__34725_35411__$1);
var id_35418 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34753_35417,(0),null);
var oref_35419 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34753_35417,(1),null);
var G__34756_35420 = "dump";
var G__34757_35421 = id_35418;
var G__34758_35422 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.object._type(oref_35419)], 0));
var G__34759_35423 = cljs.core.deref(shadow.object._data(oref_35419));
(shadow.object.info.cljs$core$IFn$_invoke$arity$4 ? shadow.object.info.cljs$core$IFn$_invoke$arity$4(G__34756_35420,G__34757_35421,G__34758_35422,G__34759_35423) : shadow.object.info.call(null,G__34756_35420,G__34757_35421,G__34758_35422,G__34759_35423));


var G__35424 = cljs.core.next(seq__34725_35411__$1);
var G__35425 = null;
var G__35426 = (0);
var G__35427 = (0);
seq__34725_35393 = G__35424;
chunk__34726_35394 = G__35425;
count__34727_35395 = G__35426;
i__34728_35396 = G__35427;
continue;
}
} else {
}
}
break;
}

return (shadow.object.info.cljs$core$IFn$_invoke$arity$1 ? shadow.object.info.cljs$core$IFn$_invoke$arity$1("--------------- //LIVE OBJECTS ------------") : shadow.object.info.call(null,"--------------- //LIVE OBJECTS ------------"));
});
Object.defineProperty(module.exports, "dump_BANG_", { enumerable: true, get: function() { return shadow.object.dump_BANG_; } });
Object.defineProperty(module.exports, "tree_seq", { enumerable: true, get: function() { return shadow.object.tree_seq; } });
Object.defineProperty(module.exports, "object_defs", { enumerable: false, get: function() { return shadow.object.object_defs; } });
Object.defineProperty(module.exports, "get_from_dom", { enumerable: true, get: function() { return shadow.object.get_from_dom; } });
Object.defineProperty(module.exports, "get_siblings", { enumerable: false, get: function() { return shadow.object.get_siblings; } });
Object.defineProperty(module.exports, "get_parent_of_type", { enumerable: true, get: function() { return shadow.object.get_parent_of_type; } });
Object.defineProperty(module.exports, "alive_QMARK_", { enumerable: false, get: function() { return shadow.object.alive_QMARK_; } });
Object.defineProperty(module.exports, "notify_down_BANG_", { enumerable: false, get: function() { return shadow.object.notify_down_BANG_; } });
Object.defineProperty(module.exports, "return_value", { enumerable: false, get: function() { return shadow.object.return_value; } });
Object.defineProperty(module.exports, "reaction_merge", { enumerable: false, get: function() { return shadow.object.reaction_merge; } });
Object.defineProperty(module.exports, "log", { enumerable: false, get: function() { return shadow.object.log; } });
Object.defineProperty(module.exports, "add_reaction_BANG_", { enumerable: false, get: function() { return shadow.object.add_reaction_BANG_; } });
Object.defineProperty(module.exports, "find_containing_object", { enumerable: false, get: function() { return shadow.object.find_containing_object; } });
Object.defineProperty(module.exports, "get_dom", { enumerable: true, get: function() { return shadow.object.get_dom; } });
Object.defineProperty(module.exports, "dom_enter", { enumerable: false, get: function() { return shadow.object.dom_enter; } });
Object.defineProperty(module.exports, "do_notify_tree", { enumerable: false, get: function() { return shadow.object.do_notify_tree; } });
Object.defineProperty(module.exports, "bind", { enumerable: false, get: function() { return shadow.object.bind; } });
Object.defineProperty(module.exports, "notify_tree_BANG_", { enumerable: false, get: function() { return shadow.object.notify_tree_BANG_; } });
Object.defineProperty(module.exports, "notify_BANG_", { enumerable: false, get: function() { return shadow.object.notify_BANG_; } });
Object.defineProperty(module.exports, "get_type", { enumerable: false, get: function() { return shadow.object.get_type; } });
Object.defineProperty(module.exports, "unmunge", { enumerable: false, get: function() { return shadow.object.unmunge; } });
Object.defineProperty(module.exports, "map__GT_Watch", { enumerable: false, get: function() { return shadow.object.map__GT_Watch; } });
Object.defineProperty(module.exports, "destroy_BANG_", { enumerable: false, get: function() { return shadow.object.destroy_BANG_; } });
Object.defineProperty(module.exports, "instance_parent", { enumerable: false, get: function() { return shadow.object.instance_parent; } });
Object.defineProperty(module.exports, "dom_destroy", { enumerable: false, get: function() { return shadow.object.dom_destroy; } });
Object.defineProperty(module.exports, "ObjectRef", { enumerable: false, get: function() { return shadow.object.ObjectRef; } });
Object.defineProperty(module.exports, "notify_up_BANG_", { enumerable: false, get: function() { return shadow.object.notify_up_BANG_; } });
Object.defineProperty(module.exports, "next_id", { enumerable: false, get: function() { return shadow.object.next_id; } });
Object.defineProperty(module.exports, "_type", { enumerable: false, get: function() { return shadow.object._type; } });
Object.defineProperty(module.exports, "remove_in_parent_BANG_", { enumerable: false, get: function() { return shadow.object.remove_in_parent_BANG_; } });
Object.defineProperty(module.exports, "get_parent", { enumerable: true, get: function() { return shadow.object.get_parent; } });
Object.defineProperty(module.exports, "create", { enumerable: false, get: function() { return shadow.object.create; } });
Object.defineProperty(module.exports, "warn", { enumerable: false, get: function() { return shadow.object.warn; } });
Object.defineProperty(module.exports, "__GT_ObjectRef", { enumerable: false, get: function() { return shadow.object.__GT_ObjectRef; } });
Object.defineProperty(module.exports, "_update", { enumerable: false, get: function() { return shadow.object._update; } });
Object.defineProperty(module.exports, "get_children_of_type", { enumerable: false, get: function() { return shadow.object.get_children_of_type; } });
Object.defineProperty(module.exports, "coll_destroy_children", { enumerable: false, get: function() { return shadow.object.coll_destroy_children; } });
Object.defineProperty(module.exports, "define_event", { enumerable: false, get: function() { return shadow.object.define_event; } });
Object.defineProperty(module.exports, "events", { enumerable: false, get: function() { return shadow.object.events; } });
Object.defineProperty(module.exports, "_id", { enumerable: false, get: function() { return shadow.object._id; } });
Object.defineProperty(module.exports, "is_object_QMARK_", { enumerable: false, get: function() { return shadow.object.is_object_QMARK_; } });
Object.defineProperty(module.exports, "__GT_Watch", { enumerable: false, get: function() { return shadow.object.__GT_Watch; } });
Object.defineProperty(module.exports, "_data", { enumerable: false, get: function() { return shadow.object._data; } });
Object.defineProperty(module.exports, "debug", { enumerable: false, get: function() { return shadow.object.debug; } });
Object.defineProperty(module.exports, "behavior_fns", { enumerable: false, get: function() { return shadow.object.behavior_fns; } });
Object.defineProperty(module.exports, "get_type_attr", { enumerable: false, get: function() { return shadow.object.get_type_attr; } });
Object.defineProperty(module.exports, "inspect_BANG_", { enumerable: false, get: function() { return shadow.object.inspect_BANG_; } });
Object.defineProperty(module.exports, "merge_behaviors", { enumerable: false, get: function() { return shadow.object.merge_behaviors; } });
Object.defineProperty(module.exports, "get_children", { enumerable: true, get: function() { return shadow.object.get_children; } });
Object.defineProperty(module.exports, "equal_QMARK_", { enumerable: false, get: function() { return shadow.object.equal_QMARK_; } });
Object.defineProperty(module.exports, "define", { enumerable: false, get: function() { return shadow.object.define; } });
Object.defineProperty(module.exports, "bind_children", { enumerable: false, get: function() { return shadow.object.bind_children; } });
Object.defineProperty(module.exports, "get_siblings_of_type", { enumerable: false, get: function() { return shadow.object.get_siblings_of_type; } });
Object.defineProperty(module.exports, "bind_change", { enumerable: false, get: function() { return shadow.object.bind_change; } });
Object.defineProperty(module.exports, "IObject", { enumerable: false, get: function() { return shadow.object.IObject; } });
Object.defineProperty(module.exports, "obj_id", { enumerable: false, get: function() { return shadow.object.obj_id; } });
Object.defineProperty(module.exports, "get_collection_item", { enumerable: false, get: function() { return shadow.object.get_collection_item; } });
Object.defineProperty(module.exports, "instances", { enumerable: false, get: function() { return shadow.object.instances; } });
Object.defineProperty(module.exports, "console_friendly", { enumerable: false, get: function() { return shadow.object.console_friendly; } });
Object.defineProperty(module.exports, "bind_simple", { enumerable: false, get: function() { return shadow.object.bind_simple; } });
Object.defineProperty(module.exports, "_destroy_BANG_", { enumerable: false, get: function() { return shadow.object._destroy_BANG_; } });
Object.defineProperty(module.exports, "update_BANG_", { enumerable: false, get: function() { return shadow.object.update_BANG_; } });
Object.defineProperty(module.exports, "bind_dom_events", { enumerable: false, get: function() { return shadow.object.bind_dom_events; } });
Object.defineProperty(module.exports, "info", { enumerable: false, get: function() { return shadow.object.info; } });
Object.defineProperty(module.exports, "merge_reactions", { enumerable: false, get: function() { return shadow.object.merge_reactions; } });
Object.defineProperty(module.exports, "make_dom", { enumerable: false, get: function() { return shadow.object.make_dom; } });
Object.defineProperty(module.exports, "set_parent_BANG_", { enumerable: false, get: function() { return shadow.object.set_parent_BANG_; } });
Object.defineProperty(module.exports, "instance_children", { enumerable: false, get: function() { return shadow.object.instance_children; } });
Object.defineProperty(module.exports, "merge_defaults", { enumerable: false, get: function() { return shadow.object.merge_defaults; } });
Object.defineProperty(module.exports, "get_by_id", { enumerable: true, get: function() { return shadow.object.get_by_id; } });
Object.defineProperty(module.exports, "error", { enumerable: false, get: function() { return shadow.object.error; } });
Object.defineProperty(module.exports, "Watch", { enumerable: false, get: function() { return shadow.object.Watch; } });
//# sourceMappingURL=shadow.object.js.map
